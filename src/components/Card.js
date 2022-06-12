import React from 'react';
import './Card.css'

const Card = props =>{
    return (
        <div className='card text-center shadow'>
            <div className='overflow'>
               <img src={props.imgsrc} alt = 'Image 1' className='card-img-top' /> 
            </div>

            <div className='card-body text-dark'>
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-text text-secondary'>{props.paragraph}
            </p>
            <a href="#" className='btn btn-outline-success'  id='btn' onClick={change}>Subscribe</a>
            </div>
        </div>
    );
}

function change() {
    document.getElementById("btn").innerText = "Subscribed!!!";
  }

export default Card;