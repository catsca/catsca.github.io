import React from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const FormUserMenu = ({values, handleChange, form, ...props}) => {
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
                            Si meniul
                        </Typography>
                    </Toolbar>
                </AppBar>
                
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
                        <MenuItem value={'vegan'}>Vegan</MenuItem>
                        <MenuItem value={'vegetarian'}>Vegetarian</MenuItem>
                        <MenuItem value={'fara sare'}>Fara sare</MenuItem>
                        <MenuItem value={'cu alergii la'}>Cu alergii</MenuItem>
                    </Select>
                </FormControl>

                {form.specialMenu === 'cu alergii la' && 
                <TextField
                    multiline
                    required 
                    error={!form.specialMenuAlergies}
                    rows = {3}
                    rowsMax = {5}
                    variant="outlined"
                    placeholder = "La ce?"
                    label = "Alergii?"
                    onChange={(e) => handleChange(e.target.value, 'specialMenuAlergies')}
                    defaultValue = { form.specialMenuAlergies }
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
                            !form.specialMenu || (form.specialMenu === 'cu alergii la' && !form.specialMenuAlergies)
                        }
                    >
                        Continua
                    </Button> 
                </div>

                </React.Fragment>
            </MuiThemeProvider>
        )
       
   }

export default FormUserMenu;