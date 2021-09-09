import React from 'react';

export default class Recordatorio extends React.Component {
    render() {
        return (
            <div className="recordatorio">
                <h4>Seleccion anterior: {this.props.historial[this.props.historial.length-1]}</h4>
                <h4>Historial de opciones elegidas: 
                    {this.props.historial.map((opcion, i) => { return (
                        <span key={i}>{'  ' + opcion + '.'}</span> )
                    })}</h4>
            </div>
        )
    }
}