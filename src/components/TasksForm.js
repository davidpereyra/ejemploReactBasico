
import React, {Component} from 'react';
//import Task from './task';

//notese que se puede exportar directamente desde la clase y solamente al final de la misma
export default class TaskForm extends Component{
    state = {
        titulo: '',
        descripcion: ''
    }

    //onSubmit es un metodo que definimos para que no recargue la pagina cada vez que presionamos el boton
    //para que no refresque la pagina hay que escuchar el evento e - que en la funcion se puede poner sin parentesis
    onSubmit = e =>{
        /* console.log("escuchando el evento onSubmit")
        console.log(e)
        console.log(this.state)//recolecto datos */
        this.props.addTask(this.state.titulo, this.state.descripcion);

        e.preventDefault(); //previene el comportamiento por defecto

    }

    onChange = e =>{
        /* console.log("evento onChange") 
        console.log(e.target.value);
        console.log(e.target.name, e.target.value)     */

        //cambia estado
        this.setState({    
            [e.target.name]: e.target.value            
        }) 
    }

    render(){
        //this.props.addTask(' desde 35 de TaskForm ',' descripcion ');
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="titulo"
                    placeholder="Escribir una tarea" 
                    onChange ={this.onChange} 
                    value={this.state.titulo}
                />
                <br/><br/>
                <textarea 
                    name="descripcion"
                    placeholder="Escribir una descripcion" 
                    onChange ={this.onChange} 
                    value={this.state.descripcion}
                />
                <br/>
                <input type="submit"/>
            </form>
        )
    }

}

