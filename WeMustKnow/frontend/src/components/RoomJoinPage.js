import React, { Component } from "react";
import button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Grid";
import TextFiled from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default class RoomJoinPage extends Component {
    defaultVotes = 2;
    
    constructor(props) {
        super(props);
    }

    render(){

        return <Grid container spacing={1}>
            <Grid item xs={12} align="Center"></Grid>
        </Grid>;
    }
}