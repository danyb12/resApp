import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 400,
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 500,
        color: theme.palette.text.secondary,
    }

}));

export default function ResumeMatching() {
    const classes = useStyles();

    const [type, setType] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);


    const handleChange = event => {
        setType(event.target.value);
    };
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={3}>
            <Grid item xs={6}>
                <Typography align="center" component="h3"color="textPrimary" gutterBottom>
                    Job Description</Typography>
                <Paper className={classes.paper}><form className={classes.root} noValidate autoComplete="off"><TextField        id="outlined-multiline-static"
                                                                                                                                required
                                                                                                                                defaultValue="Copy Paste Job Description"
                                                                                                                                multiline
                                                                                                                                rows="20"
                                                                                                                                variant="outlined"/></form></Paper>
            </Grid>

            <Grid item xs={6}>
                <Typography align="center" component="h3"color="textPrimary" gutterBottom>
                    Resume</Typography>
                <Paper className={classes.paper}>TEXT BOX HERE</Paper>
            </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}