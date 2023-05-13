import React from 'react'
import './Card.css'
import CARD_DATA from './CardData'

const Card = ({type} : {type:string}) => {
  let data = CARD_DATA.data[type];
  let tools = data.tools;

  return (
    <div className="card-border">
        <div className={'card ' + type}>
            <div className='card-content title'>
                <h1>{data.title}</h1>
            </div>
            <div className='card-content flavor-text'>
                <span>
                {data.flavorText}
                </span>
            </div>
            <div className='card-content framework'>
                <h4>Tools</h4>
                {tools.map(
                    (val, index) => <span key={index}>{val}</span>
                )}
            </div>
        </div>
    </div>
  )
}

export default Card