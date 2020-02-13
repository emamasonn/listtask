import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import { connect } from 'react-redux'
import { deleteTask, editTask } from '../redux/action'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: '1.5em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: props => props.background,
    },
    contentInfo: {
        textAlign: 'left',
        width: 300,
    },
    contentButton: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        margin: '0.4em',
    }
}));

const Task = (props) => {
    const classes = useStyles(props);
    return (
        <Paper className={classes.root}>
            <div className={classes.contentInfo}>
                <Typography variant="h5" component="h3">
                    {props.title}
                </Typography>
                <Typography component="p">
                    {props.text}
                </Typography>
            </div>
            <div className={classes.contentButton}>
                <Button 
                    variant="contained" 
                    className={classes.button} 
                    onClick= {() => props.deleteTask(props.id)}
                > 
                    <DeleteOutlinedIcon/> 
                </Button>
                <Button 
                    variant="contained" 
                    className={classes.button}
                    onClick={() => props.editTask(props)}
                > 
                    <CreateIcon/>
                </Button>
            </div>
        </Paper>

    );
}

const mapDispatchToProps = { deleteTask, editTask };

export default connect(null, mapDispatchToProps)(Task)