//tareas de componenes

import React, {Component} from 'react';
import Task from './Task';
import PropTypes from 'prop-types'; //definir lo que esperamos recibir

//deleteTask viene de app pero esta en task

class Tasks extends Component{
    render(){
        return this.props.tasks.map(task => 
            <Task 
                task={task} 
                key={task.id} 
                deleteTask={this.props.deleteTask}
                checkDone = {this.props.checkDone}
            />);
    }
}

//desde app
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;


// esta propiedad de tasks recorrida como task de la 
// clase Task con el valor de propiedad task = {task}
//return this.props.tasks.map(task => <Task task={task}/>);
