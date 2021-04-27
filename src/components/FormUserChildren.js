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

const FormUserChildren = ({values, handleChange, form, ...props}) => {
    const continueStep = e => props.nextStep()

    const backStep = e => props.prevStep();

    return (
        <MuiThemeProvider>

                <AppBar>
                    <Toolbar>
                        <Typography 
                        variant="h6"
                        align="center"
                        style={{width: "100%"}}
                        >
                           Si copii?
                        </Typography>
                    </Toolbar>
                </AppBar>
            <FormControl 
                component="fieldset"  
            >
                <FormLabel component="legend">
                    Si copii? Aduci si copii?
                </FormLabel>

                <RadioGroup
                    required 
                    aria-label="childrenNumber" 
                    name="childrenNumber"
                    onChange = {(e) => handleChange(e.target.value, 'childrenNumber') } 
                    >
                        
                        <FormControlLabel 
                            value='nope' 
                            control={<Radio />}
                            checked={form.childrenNumber === 'nope'} 
                            label="Nope" />
                        <FormControlLabel 
                            value='yup' 
                            control={<Radio />} 
                            checked={form.childrenNumber === 'yup'} 
                            label="Vin si ei, cum sa nu" />
                </RadioGroup>
            </FormControl>

            {form.childrenNumber === 'yup' && 
                <TextField
                    multiline
                    required 
                    error={!form.childrenAge}
                    rows = {3}
                    rowsMax = {5}
                    variant="outlined"
                    placeholder = "Cati ani au?"
                    label = "Inca ceva"
                    onChange={(e) => handleChange(e.target.value, 'childrenAge')}
                    defaultValue = { form.childrenAge }
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
                        !form.childrenNumber || (form.childrenNumber === 'yup' && !form.childrenAge)
                    }
                >
                    Continua
                </Button> 
            </div>

            </MuiThemeProvider>
        )
       
   }

export default FormUserChildren;