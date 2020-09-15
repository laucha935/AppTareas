import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {tasks} from './tasks.json';
import Todoform from './components/Todoform';



class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks
    }
    this.handleAddtasks = this.handleAddtasks.bind(this);
  }

  removeTodo(index) {
    this.setState({
      tasks: this.state.tasks.filter((e, i)=>{
        return i !== index
      })
    });
  }

    handleAddtasks(task){
        this.setState({
          tasks: [...this.state.tasks, task]
        })
    }
  
  render(){
    
   const tasks = this.state.tasks.map((task, i) =>{
     return (

      <div className="col-md-4" key={i}>
         <div className="card mt-4">
        <div className="card-header text-center">
          {task.title}
          <span className="badge badge-pill badge-danger ml-4">
            {task.priority}
          </span>
        </div>
        <div className="card-body">
          {task.responsible} - {task.description}
        </div>
        <div className="card-footer">
          <button className="btn btn-danger"
          onClick={this.removeTodo.bind(this, i)}>
            Delete
          </button>
        </div>
         

       </div>
      </div>
     )
     });
    
    
     return (
      <div className="App">
        
        <nav className="navbar navbar-dark bg-dark">
           
           <a  href="" className="text-white">
                Tasks
                <span className=" badge badge-pill badge-light ml-2">
                  {this.state.tasks.length}
                </span>
          </a> 
          </nav>

         <div className="container">
            <div className="row mt-4">
              <Todoform onAddTodo={this.handleAddtasks}></Todoform>
            </div>

            <div className="col-md-8">
              <div className="row">
                {tasks}
              </div>
            </div>

         </div>
         
      
      
      </div>

      
    )
  }
}

export default App;

