import React from 'react';
import './card.styles.css';


export const Card = props =>(
    <div className="card-container">
    <img alt="clients" src={`https://robohash.org/${props.client.id}?set=set2&size=180x180`}></img>
        <h2>{props.client.name}</h2>
        <p>{props.client.email}</p>
    </div>
);

