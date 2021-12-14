/*
import React from 'react'

export const CardList = props => {
    console.log(props);
    return (
        <div>
            Hello {props.children}
        </div>
    )
}
*/

// 34
/*
import React from 'react'
import './card-list.styles.css'

export const CardList = props => {    
    return (
        <div className='card-list'>
            {props.children}
        </div>
    )
}
*/

// 36. Cardless Component 

import React from 'react'

import { Card } from '../card/card.component'

import './card-list.styles.css'

export const CardList = props => (
    <div className="card-list">
        {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);
