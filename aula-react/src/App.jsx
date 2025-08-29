import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header 
      titulo="The Witcher"
      categoria="Fantasia/Aventura/Medieval"
      cor="red"
      />
    <Header 
      titulo="The Legend of Zelda"
      categoria="Aventura/Fantasia"
      cor="green"
    />
    <Header 
      titulo="PseudoRegalia"
      categoria="MetroidVania"
      cor="lightpurple"
    />
    </>
  )
}

export default App
