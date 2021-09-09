import React from 'react';
import data from './data.json';



export default class Opcion extends React.Component {
    

    opcionAoB = () => 
        this.props.letra === "A" ? data[this.props.etapa].opciones.a : data[this.props.etapa].opciones.b
    
    

    render() {
        console.log(data)
        return (
            <div className="opcion">
                <button className="botones" onClick={this.props.click}>{this.props.letra}</button>
                <p className="opciones">{this.opcionAoB()}</p>
            </div>            
        )
    }
}