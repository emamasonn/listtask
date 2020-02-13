import React from 'react';
import ListToDo from './component/ListToDo'
import AddToDo from './component/AddToDo'
import EditToDo from './component/EditToDo'
import './App.css';
import { connect } from 'react-redux'



const App = (props) => {
  return (
    <div className="App">
      <ListToDo />
      { props.selectedTask ? <EditToDo /> : <AddToDo /> }
      
    </div>
  );
}

const mapStateToProps = state => {
  return{
    selectedTask: state.allAction.selectedTask.visivility
  }
}

export default connect(mapStateToProps, null)(App);
