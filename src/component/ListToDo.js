import React from 'react'
import Task from './Task'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
    },
    con: {
        justifyContent: 'center',
        height: '100%',
    },
    listToDo: {
        background: '#f5f6fa',
        height: '90%',
        margin: '2em 0em',
        textAlign: 'center',
        overflowX: 'auto',
    },
    titleList:{
        height: '3em',
        background: '#4a148c',
        margin: 0,
        fontSize: '1.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f5f6fa',
    },
}));


const ListToDo  = (props) => {
    const classes = useStyles();
        return(
            
            <div className={classes.root}>
            <Grid container className={classes.con}>
                <Grid item xs={10} className={classes.listToDo} >
                    <h4 className={classes.titleList}>List To-Do</h4>
                    {props.tasks.listTask.map(task => (
                        <Task 
                            key={task.id}
                            title = {task.title}
                            text = {task.text}
                            background = {task.priority}
                            id = {task.id}
                        />
                    ))}
                    
                </Grid>    
            </Grid>
            </div>
            
        );
}

const mapStateToProps = state => {
    return ({tasks: state.allAction}) 
}

export default connect(mapStateToProps, null)(ListToDo)