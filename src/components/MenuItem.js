import React from 'react';
import './MenuItem.css';



function MenuItem(props) {
    return (
        <div className="menu-item">
          <img src={props.image} alt={props.image} className="menu-foto"/>
          <div className="dish-info">
            <div className="dish-name">
              <h4 className="dish-tittle">{props.tittle}</h4>
              <p className="price"> ${props.price}</p>
            </div>
            <p className="description">{props.description}</p>
          </div> 
        </div>
    )
}

export default MenuItem
