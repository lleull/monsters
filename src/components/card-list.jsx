import React from 'react'
import "./034 card-list.styles.css"
import { Card } from './card/card'
export const CardList = props => {
    
    return (
    <div className="main">
        
        
             <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
           
        </div>
        
    </div>
    )
   
        
} 