import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";
import {
  convertHoursStringToMinutes,
  convertMinutesToHoursString,
} from "./utils/convertHours";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
// HTTP methods / API RESTful

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          Ads: true,
        },
      },
    },
  });
  console.log("rodando");

  return res.status(200).json(games);
});

app.post("/games/:gameId/ads", async (req, res) => {
  const gameId = req.params.gameId;
  const body = req.body;
  // zod para validação
  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      discord: body.discord,
      weekDays: body.weekDays.join(","),
      useVoiceChannel: body.useVoiceChannel,
      yearsPlaying: body.yearsPlaying,
      hoursStart: convertHoursStringToMinutes(body.hoursStart),
      hoursEnd: convertHoursStringToMinutes(body.hoursEnd),
    },
  });
  console.log(gameId, body);
  return res.status(201).json(ad);
});

app.get("/games/:id/ads", async (req, res) => {
  const gameID = req.params.id;
  console.log(gameID);
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursStart: true,
      hoursEnd: true,
    },
    where: {
      gameId: gameID,
    },
    orderBy: {
      createAt: "desc",
    },
  });
  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hoursStart: convertMinutesToHoursString(ad.hoursStart),
        hoursEnd: convertMinutesToHoursString(ad.hoursEnd),
      };
    })
  );
});

app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });
  return res.json({
    discord: ad.discord,
  });
});

app.listen(3333);
