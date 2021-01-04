import React, {Component} from 'react'
import './task.css';
import PropTypes from 'prop-types'; //definir lo que esperamos recibir

//un componente por cada tarea
class Task extends Component{
    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black', //si es true gray sino black
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    render(){
    const {task} = this.props; //y quito de abajo this.props.
    const backyellow = {background:'yellow'};
    return <div className="fondoRojo"> {task.id} - 
            <p style={{background:'blue'}}>
                (ejemplo de uso de estilo definido desde la etiquta como si fuera HTML)
                Titulo: - {task.title} -  
            </p>
            <p style={backyellow}>
                (ejemplo 1 de uso de estilo con una const)
            </p> 
            <p style={this.StyleCompleted()}>
                (ejemplo de estilo aplicado desde una funcion)
                - {task.description} -
                - {task.done}        
            </p>
            <input type="checkbox" onChange = {this.props.checkDone.bind(this,task.id)}/>
            
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this,task.id)}>
                X
            </button>
        </div>
    }//bind(this,task.id) lo usa para mandar el id
}


//el dato es mandado desde tasks.js la prop task
Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#aa2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
    

}
export default Task;