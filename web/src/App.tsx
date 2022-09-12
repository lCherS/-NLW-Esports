interface ButtonProps {
  title: string
}
function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return(
    <div>
    <h1>Hello NLW eSports</h1>
    <Button title="button 1" />
    <Button title="button 2" />
    </div>

  )

}

export default App
