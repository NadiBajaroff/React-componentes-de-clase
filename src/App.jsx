import React from 'react';
import Historia from './components/Historia';
import Opcion from './components/Opcion'
import Recordatorio from './components/Recordatorio';
import Swal from "sweetalert2";


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      etapa : 0,
      relato : 1,
      letra : "",
      historial : []
    }
  }

  handleClickA = () => {
    this.state.relato > 4 ? 
    Swal.fire({
      title : "Fin del recorrido, nos vemos en otro sueño!",
      showCancelButton: true,
      confirmButtonText: 'Ir al comienzo',
      cancelButtonText: 'Hasta la proxima'
    }).then((result) => {if(result.isConfirmed){window.location.reload()}}) :
    this.setState((prev => ({
      etapa : this.state.etapa + 2,
      relato : this.state.relato + 1,
      letra : "a",
      historial : [...prev.historial, "a"]
    })))
  }

  handleClickB = () => {
    this.state.relato > 4 ? Swal.fire({
      title : "Fin del recorrido, nos vemos en otro sueño!",
      showCancelButton: true,
      confirmButtonText: 'Ir al comienzo',
      cancelButtonText: 'Hasta la proxima'
    }).then((result) => {if(result.isConfirmed){window.location.reload()}}) :
    this.setState((prev => ({
      etapa : this.state.etapa + 2,
      relato : this.state.relato + 1,
      letra : "b",
      historial : [...prev.historial, "b"]
    })))
  }

  componentDidMount() {
    Swal.fire("Empieza tu camino!")
  }


  render() {
    return (
      
      <div className="layout">
        <h1 className="titulo">Elige tu propio camino..</h1>
        <Historia relato={this.state.relato} letra={this.state.letra}/>
        <div className="opciones">
          <Opcion letra="A" click={this.handleClickA} etapa={this.state.etapa}/>
          <Opcion letra="B" click={this.handleClickB} etapa={this.state.etapa}/>
        </div>
        <Recordatorio historial={this.state.historial}/>
      </div>
    );
  }
}

export default App;
