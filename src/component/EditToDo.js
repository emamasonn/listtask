import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux'
 import { finishEdit, editTask } from '../redux/action'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    cont: {
        justifyContent: 'center',
        height: '100%',
    },
    titleAdd:{
        height: '3em',
        background: '#4a148c',
        margin: 0,
        fontSize: '1.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f5f6fa',
    },
    taskTitle: {
        width: '80%',
        marginTop: '2em'
    },
    taskContent: {
        width: '80%',
        marginTop: '2em'
    },
    addToDo: {
        background: '#f5f6fa',
        height: '90%',
        margin: '2em 0em',
        textAlign: 'center',
    },
    buttonAdd: {
        background: '#4a148c',
        marginTop: '3em',
        color: '#f5f6fa',
        width: '80%',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    priority: {
        background: props => props.task.priority,
    }
}));



const EditToDo = (props) => {
        const classes = useStyles(props);
        const edit = (event) => {
            event.preventDefault()
            const newTask = {
                id: props.task.id,
                title: props.task.title,
                text: props.task.text,
                priority: props.task.priority,
            }

            props.finishEdit(newTask)
            event.target.reset()
        }         
        
        const handleChangeTitle = (event) => {
            let task = {
                id: props.task.id,
                title: event.target.value,
                text: props.task.text,
                background: props.task.priority
            }
            props.editTask(task)
        }

        const handleChangeText = (event) => {
            let task = {
                id: props.task.id,
                title: props.task.title,
                text: event.target.value,
                background: props.task.priority
            }
            props.editTask(task)
        }

        const handleChangePriority = (event) =>{
            let task = {
                id: props.task.id,
                title: props.task.title,
                text: props.task.text,
                background: event.target.value
            }
            props.editTask(task)
        }

        return(
            <div className={classes.root}>
            <Grid container className={classes.cont} >
                <Grid item xs={10} className={classes.addToDo}>
                    <h4 className={classes.titleAdd}>Add To-Do</h4>
                    <form onSubmit={edit}>
                        <TextField
                            value={props.task.title}
                            onChange={handleChangeTitle}
                            id="standard-basic" 
                            label="Title" 
                            className={classes.taskTitle}
                            autoComplete="off"
                        />
                        <TextField
                            value={props.task.text}
                            id="standard-multiline-static"
                            label="To-Do"
                            multiline
                            rows="6"
                            className={classes.taskContent}
                            onChange={handleChangeText}
                        />
                        <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Priority</InputLabel>
                        <Select 
                            native
                            value={props.task.priority}
                            onChange={handleChangePriority}
                            className={classes.priority}
                        >
                            <option value=''></option>
                            <option value='#4db6ac' style={{background: '#4db6ac'}}>Low</option>
                            <option value='#7c4dff' style={{background: '#7c4dff'}}>Medium</option>
                            <option value='#e53935' style={{background: '#e53935'}}>High</option>
                        </Select>
                        </FormControl>    
                        <Button type="submit" variant="contained" className={classes.buttonAdd}>
                            Edit Task
                        </Button>
                    </form>
                </Grid> 
            </Grid>
            </div>
        );
}

const mapStateToProps = state => {
    return ({task: state.allAction.selectedTask}) 
}

const mapDispatchToProps = { finishEdit, editTask };

export default connect(mapStateToProps, mapDispatchToProps)(EditToDo)