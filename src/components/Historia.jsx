import React from 'react';
import data from './data.json'

export default class Historia extends React.Component {

    render() {
        const id = '' + this.props.relato + this.props.letra
        const eleccion = data.find(function(dat){return dat.id === id})
        
        return (
            
            <h3 className="historia">{eleccion.historia}</h3>
        )
    }
}