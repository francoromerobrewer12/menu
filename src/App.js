import React, {useState} from 'react';
import Menu from './data';
import MenuItem from './components/MenuItem';
import './App.css';


function App() {

  //incializo category para mostrar todos los platos del menu
  const [category, setCategory] = useState("all");

  //modifico el valor de category segun el boton pulsado
  const handleClick = (e) => {
    setCategory(e.currentTarget.dataset.id);
  }

  //funcion que muestra los platos del menu segun el valor de category
  const displayMenu = () => {
    if(category === "all"){

      const platos = Menu.map(item => {
        return(
          <MenuItem key={item.id} tittle={item.name} image={item.image} price={item.price} description={item.description} />
        )
      });
      return platos;

    } else {
      
      const platosFiltrados = Menu.filter(item => item.category === category);

      const platos = platosFiltrados.map(item => {
        return(
          <MenuItem key={item.id} tittle={item.name} image={item.image} price={item.price} description={item.description} />
        )
      });
      return platos;
    }

  }

  return (
    <div className="App-contenedor">
      <h1 className="menu-tittle">Our Menu</h1>
      <div className="filter-buttons">
        <button className="filter-btn" onClick={handleClick} data-id="all">All</button>
        <button className="filter-btn" onClick={handleClick} data-id="breakfast">Breakfast</button>
        <button className="filter-btn" onClick={handleClick} data-id="lunch">Lunch</button>
        <button className="filter-btn" onClick={handleClick} data-id="dinner">Dinner</button>
      </div>
      <div className="menu-list">
        { 
          displayMenu()
        }
      </div>
    </div>
  );
}

export default App;
