import React, { Component } from "react";
import button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextFiled from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, FormLabel } from "@material-ui/core";


export default class RoomJoinPage extends Component {
    defaultVotes = 2;
    
    constructor(props) {
        super(props);
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes,
        };
    }

    handleVotesChange(e) {
        this.setState({
            votesToSkip: e.target.value,
        });
    }

    handleGuestCanPauseChange(e) {
        this.setState({
            guestCanPause: e.target.value === "true" ? true : false
        })
    }

    render(){

        return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="Center">
                <Typography component="h4" variant="h4">
                    NovoNorm
                </Typography> 
            </Grid>
            <Grid item xs={12} align="Center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="Center">
                            Lupin Pharamaceuticals    
                        </div>    
                    </FormHelperText>
                    <RadioGroup row defaultValue="true" onChange={this.handleGuestCanPauseChange}>
                        <FormControlLabel
                            value="true" 
                                control={<Radio color="primary"/> }
                                label="Buy"
                                labelPlacement="bottom"
                         />

                         <FormControlLabel
                            value="false" 
                                control={<Radio color="secondary"/> }
                                label="Sell"
                                labelPlacement="bottom"
                         />    
                    </RadioGroup>    
                </FormControl>

                <Grid item xs={12} align="Center">
                    <FormControl>
                        <TextFiled
                            required={true}
                            type="number"
                            defaultValue={this.defaultVotes}
                            onChange={this.defaultVotes}
                            inputProps={{
                                min:1,
                                style: {textAlign: "center"}
                                
                            }}
                        />
                        <FormHelperText>
                            <div align="center"> 
                                Place Your Bid
                            </div>
                        </FormHelperText>
                    </FormControl>    
                </Grid> 
                
                <Grid item xs={12} align="Center">
                    <Button color="primary" variant="contained">
                        Place your order
                    </Button>
                </Grid>
                <br></br>
                    <Grid item xs={12} align="Center">
                    <Button color="secondary" variant="contained" to="/" component={Link}>
                        back
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        )
    };
}