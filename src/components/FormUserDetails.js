import React from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';

const FormUserDetails = ({values, handleChange, form, ...props}) => {
    const continueStep = e => props.nextStep()

    const backStep = e => props.prevStep();

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <TextField 
                    required
                    error={!form.firstPersonName}
                    placeholder = "Vrem sa stim"
                    label = "Te-am chemat! Cine esti?"
                    onChange = {(e) => handleChange(e.target.value, 'firstPersonName') }
                    defaultValue = { form.firstPersonName }
                />

                
                <FormControl 
                    component="fieldset"  
                >
                    <FormLabel component="legend">
                        Auzi, da'... mai vii cu cineva?
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
                        placeholder = "Si asta vrem sa stim"
                        label = "Cu cine, cu cine?"
                        onChange={(e) => handleChange(e.target.value, 'secondPersonName')}
                        defaultValue = { form.secondPersonName }
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
                }

                <TextField
                    type="number" 
                    placeholder = "Cati?"
                    label = "Si copii? Aduci si copii?"
                    min="0"
                    max="9"
                    onChange = { (e) => handleChange(e.target.value, 'childrenNumber') }
                    defaultValue = { form.childrenNumber }
                />
                <FormControl 
                    style={{ width: '16.5rem' }}
                >
                    <InputLabel id="specialMenu">Da' preferinte speciale la meniu?</InputLabel>
                    <Select
                        labelId="specialMenu"
                        placeholder = "Ce ar dori mai exact?"
                        label = "Cereri speciale pentru meniu"
                        defaultValue= { form.specialMenu}
                        onChange={(e) => handleChange(e.target.value, 'specialMenu')}
                        >
                        <MenuItem value={'normal'}>Nici una</MenuItem>
                        <MenuItem value={'de post'}>De post</MenuItem>
                        <MenuItem value={'vegetarian'}>Vegetarian</MenuItem>
                        <MenuItem value={'fara sare'}>Fara sare</MenuItem>
                    </Select>
                </FormControl>

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