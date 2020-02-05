import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 400,
        },
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    container: {
        margin: theme.spacing(1),
        display: 'flex',
        flexWrap: 'wrap',
        marginTop:10,
    },
    textField: {
        margin: theme.spacing(1),
        marginTop:10,
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 140,
        marginRight:20
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    labelText:{
        marginBottom:20
    }
}));

export default function Profile() {
    const classes = useStyles();

    const [type, setType] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);


    const handleChange = event => {
        setType(event.target.value);
    };
    return (
        <React.Fragment>
            <Typography component="h3"color="textSecondary" gutterBottom>
                Name</Typography>
            <Divider  className={classes.labelText}/>
        <Container className={classes.labelText} maxWidth="lg"><FormControl className={classes.formControl}><TextField required id="standard-required" label="First Name"  /></FormControl><FormControl className={classes.formControl}><TextField required id="standard-required" label="Last Name"  /></FormControl></Container>

            <Typography component="h3"color="textSecondary" gutterBottom>
                Location</Typography>
            <Divider  className={classes.labelText}/>
            <Container className={classes.labelText} maxWidth="lg"><FormControl className={classes.formControl}><TextField required id="standard-required" label="Address"  /></FormControl><FormControl className={classes.formControl}><TextField required id="standard-required" label="State"  /></FormControl><FormControl className={classes.formControl}><TextField required id="standard-required" label="ZIP Code"  /></FormControl><FormControl className={classes.formControl}><TextField required id="standard-required" label="Country"  /></FormControl></Container>
            <Typography component="h3"color="textSecondary" gutterBottom>
                University</Typography>
            <Divider  className={classes.labelText}/>
            <Container className={classes.labelText} maxWidth="lg"><FormControl className={classes.formControl}><TextField required id="standard-required" label="University Name"  /></FormControl><FormControl className={classes.formControl}><TextField required id="standard-required" label="Major"  /></FormControl><FormControl className={classes.formControl}><TextField required id="standard-required" label="GPA out of 4"  /></FormControl></Container>

            <Typography component="h3"color="textSecondary" gutterBottom>
               Publications</Typography>
            <Divider  className={classes.labelText}/>
            <Container className={classes.labelText} maxWidth="lg"><FormControl className={classes.formControl}><TextField id="standard-basic" label="Publication"  /></FormControl></Container>

        </React.Fragment>
            );
}