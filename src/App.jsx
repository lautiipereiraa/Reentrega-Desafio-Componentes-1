import './App.css'
import LogoNav from './components/LogoNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormS from './components/search'
import Cards from './components/cards'
import ListaDesordenada from './components/ListaDesordenada'
import ItemListContainer from './components/ItemListContainer'


function App() {
   
  const styleApp = { fontFamily: 'Arial'}
  const titulo = 'Titulo de la app'
  const subTitulo = 'Subtitulo de la app'
  
  const busqueda = () => {
    alert('Lo siento, no pudimos realizar la busqueda')
  }


  return (
      
    <div 
      className="App"
      style={styleApp}
    >
    
      <div style={{fontSize: 40, backgroundColor: 'beige', color : 'white' , marginTop : 0, padding : 0}}>
        
        <LogoNav />

        <Cards />
        <FormS/>
        <ItemListContainer buscar="Buscar"/>
        
        <ListaDesordenada/>
        
      </div>
    </div>
  )
}

export default App