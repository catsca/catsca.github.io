import React from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const FormUserDetails = ({values, handleChange, form, ...props}) => {
    
    const continueStep = e => props.nextStep()

    const backStep = e => props.prevStep();

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar>
                    <Toolbar>
                        <Typography 
                        variant="h6"
                        align="center"
                        style={{width: "100%"}}
                        >
                            Cine esti?
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField 
                    required
                    error={!form.firstPersonName}
                    placeholder = "Vrem sa stim"
                    label = "Numele tau"
                    variant="outlined"
                    onChange = {(e) => handleChange(e.target.value, 'firstPersonName') }
                    defaultValue = { form.firstPersonName }
                />

                
                <FormControl 
                    component="fieldset"  
                >
                    <FormLabel component="legend">
                        Auzi, da'... mai vii cu cineva? <br/> Selecteaza mai jos:
                    </FormLabel>

                    <RadioGroup
                        required 
                        aria-label="plusOne" 
                        name="plusOne"
                        onChange = {(e) => handleChange(e.target.value, 'plusOne') } 
                        >
                            
                            <FormControlLabel 
                                value='solo' 
                                control={<Radio />}
                                checked={form.plusOne === 'solo'} 
                                label="Clar vin singur" />
                            <FormControlLabel 
                                value='duo' 
                                control={<Radio />} 
                                checked={form.plusOne === 'duo'} 
                                label="Desigur ca vin cu cineva" />
                    </RadioGroup>
                </FormControl>
                
                {form.plusOne === "duo" && 
                    <TextField
                        required 
                        error={!form.secondPersonName}
                        variant="outlined"
                        placeholder = "Si asta vrem sa stim"
                        label = "Cu cine, cu cine?"
                        onChange={(e) => handleChange(e.target.value, 'secondPersonName')}
                        defaultValue = { form.secondPersonName }
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
                }

                <div className="wdg__container_btn">
                    <Button
                        startIcon={< NavigateBeforeIcon />}
                        variant="contained"
                        color="secondary"
                        onClick={backStep}
                    >
                        Inapoi
                    </Button> 

                    <Button
                        endIcon={< NavigateNextIcon />}
                        variant="contained"
                        color="primary"
                        onClick={continueStep}
                        disabled={
                            !form.firstPersonName || !form.plusOne || (form.plusOne === 'duo' && !form.secondPersonName)
                        }
                    >
                        Continua
                    </Button> 
                </div>

                </React.Fragment>
            </MuiThemeProvider>
        )
       
   }

export default FormUserDetails;