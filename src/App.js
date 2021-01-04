//import logo from './logo.svg';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'; //para enrutadores para el navegador
//daba un error y se tuvo que instalar npm install react-router-dom
import './App.css';
import tasks from './sample/tasks.json';
//importar componentes
import Tasks from './components/Tasks';
import TasksForm from './components/TasksForm';
import Post from './components/Post'
//console.log(tasks);

class App extends Component{
  state = {
    tasks: tasks
  }
  
  addTask = (titulo,descripcion)=>{
    console.log("agrentado una nueva tarea "+titulo+descripcion);
    const newTask = {
      id: this.state.tasks.length,
      title: titulo,
      description: descripcion //notese que no se agregaban porque description esta en json y yo ponia descripcion
    }
    //console.log(newTask);

    this.setState({
      tasks: [...this.state.tasks, newTask] //agrega una nueva tarea al arreglo que teniamos
    })
  }

  deleteTask = ( id )=>{ //recibo el id de la tarea a eliminar
    const newTasks = this.state.tasks.filter(tasks=>tasks.id !== id); //filtramos el dato con el id recibido
    this.setState({tasks:newTasks})
  }


  checkDone = (id) =>{
    const newTasks = this.state.tasks.map(task =>{
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks:newTasks})

  }

//deleteTask esta en task pero nosotros invocamos a Tasks, asi que lo mandamos a Tasks para que el lo mande a Task
  render(){
    return  <div>
              <Router>
                <Link to="/">
                    HOME
                </Link><br/>
                <Link to="/posts">
                    POSTS
                </Link>
                <Route exact path="/" render={()=>{
                  return <div>
                    <TasksForm addTask={this.addTask}/> 
                    <Tasks 
                      tasks={this.state.tasks} 
                      deleteTask={this.deleteTask}  
                      checkDone={this.checkDone}
                    />
                  </div>
                }}>                
                </Route>
                <Route path="/posts" component={Post}/>
              </Router>

             
            </div>
  }
}














/* 
function Prueba(props) {
  return (
    <div>
      <h3>{props.subtitle}</h3>
      Prueba asdasd 
      {props.test}
    </div>
  );
} */
/*
const Test  = () => <div>Aloha test de funcion flecha</div>

class Estado extends React.Component{ //extends React.Component 
  state = {
    show: true
  }

  toggleShow(){
    this.setState({show:!this.state.show})
  }
  render(){
    if (this.state.show) {
      return (
        <div>
          <h3>{this.props.subtitle}</h3>
          Prueba asdasd desde clase ESTADO
          {this.props.test}
          <button onClick={()=>this.toggleShow()}>cambiar estado de show</button>
        </div>
      );
    }else{
      
      return <h3>ya no hay elementos
        <button onClick={()=>this.toggleShow()}>cambiar estado de show</button>
      </h3> 
      
    }
  }
}

function App() {
  return (
    <div>
     Estate 
     <Estado test="props por meth" subtitle="Subtitulo"/>
     <Test/>
    </div>
  );
}
*/
export default App;
