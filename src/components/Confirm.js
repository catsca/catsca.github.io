import React from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Cookies from 'universal-cookie';
import emailjs from 'emailjs-com';
import Input from '@material-ui/core/Input';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Confirm = ({values, form, ...props}) => {

    const cookies = new Cookies();

    const finalStep = (e) => {
        e.preventDefault();

        const params = {
            firstPerson: form.firstPersonName,
            secondPerson: form.secondPersonName,
            specialMn: form.specialMenu,
            specialMnAlrg: form.specialMenuAlergies,
            childrenNum: form.childrenAge
          };

        cookies.set('alreadySent', '1', { path: '/',  maxAge: 60*60*24*60 });
        emailjs.sendForm('service_78fqymm', 'template_9mfx4qb', '#contact-form', 'user_e4ij8RXSPRtg9MFe6Yw0l');
       
        props.nextStep();
    }

    const backStep = () => {
        props.prevStep()
    }

    let SecondPerson = '',
        SpecialMenuItem = '',
        ChildNumber = '';

    if (form.plusOne === 'duo' && form.secondPersonName) {
        SecondPerson = (
            <List>
                <ListItem>
                    Si vii cu { form.secondPersonName}.
                    <Input 
                        id="secondPerson" 
                        value={form.secondPersonName} 
                        name="secondPerson"
                        type="hidden"
                    />
                </ListItem>
            </List>
        )
    } 

    if(form.childrenAge && form.childrenAge == 'yup') {
        ChildNumber = (''
        )
    } else {
        ChildNumber = (
            <List>
                <ListItem>
                    Vei veni si cu: {form.childrenAge}.
                    <Input 
                        id="childrenAg" 
                        value={form.childrenAge} 
                        name="childrenAg"
                        type="hidden"
                    />
                </ListItem>
            </List>
        )
    } 

    if (form.specialMenu && form.specialMenu == 'cu alergii la') {
        SpecialMenuItem = (
            <List>
                <ListItem>
                        Esti alergic la { form.specialMenuAlergies }.
                        <Input 
                            id="specialMnAlrg" 
                            value={form.specialMenuAlergies} 
                            name="specialMnAlrg"
                            type="hidden"
                        />
                </ListItem>
            </List>
        )
    }
    
    else if (form.specialMenu && form.specialMenu !== 'normal') {
        SpecialMenuItem = (
            <List>
                <ListItem>
                        Si doresti de la meniu sa fie { form.specialMenu }.
                        <Input 
                            id="specialMn" 
                            value={form.specialMenu} 
                            name="specialMn"
                            type="hidden"
                        />
                </ListItem>
            </List>
        )
    } else {
        SpecialMenuItem = (
            <List>
                <ListItem>
                        Si esti ok cu meniul!
                </ListItem>
            </List>
        );
    }

    return (
        <MuiThemeProvider>
            <AppBar>
                <Toolbar>
                    <Typography 
                    variant="h6"
                    align="center"
                    style={{width: "100%"}}
                    >
                        Confirma datele de mai jos:
                    </Typography>
                </Toolbar>
            </AppBar>
            <form onSubmit={finalStep} id="contact-form">
                <List>
                    <ListItem>
                        Deci te cheama {form.firstPersonName}.
                        <Input 
                            id="firstPerson" 
                            value={form.firstPersonName} 
                            name="firstPerson"
                            type="hidden"
                        />
                    </ListItem>
                </List>

                {SecondPerson}

                {ChildNumber}

                {SpecialMenuItem}
                           
                <React.Fragment>
                <div className="wdg__container_btn">
                    <Button
                        startIcon={< NavigateBeforeIcon />}
                        variant="contained"
                        color="secondary"
                        onClick={backStep}
                    >
                        Stai, vreau sa modific
                    </Button> 

                    <Button
                        endIcon={< PlaylistAddCheckIcon />}
                        variant="contained"
                        color="primary"
                        onClick={finalStep}
                        type="submit"
                    >
                        Ce sa zic, totul pare ok
                    </Button> 
                </div>
                </React.Fragment>

            </form>
        </MuiThemeProvider>
    )
}

export default Confirm;