import React from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Cookies from 'universal-cookie';
import emailjs from 'emailjs-com';

const Confirm = ({values, form, ...props}) => {

    const cookies = new Cookies();
  

    const finalStep = (e) => {
        e.preventDefault();
        props.nextStep();
        cookies.set('alreadySent', '1', { path: '/',  maxAge: 60*60*24*60 });
        emailjs.sendForm('service_78fqymm', 'template_9mfx4qb', e.target, 'user_e4ij8RXSPRtg9MFe6Yw0l')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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
                </ListItem>
            </List>
        )
    } 

    if(form.childrenNumber && form.childrenNumber == 0) {
        ChildNumber = (''
        )
    } else if(form.childrenNumber && form.childrenNumber == 1) {
        ChildNumber = (
            <List>
                <ListItem>
                    Aduci 1 copil.
                </ListItem>
            </List>
        )
    } else  if(form.childrenNumber) {
        ChildNumber = (
            <List>
                <ListItem>
                    Aduci { form.childrenNumber } copii.
                </ListItem>
            </List>
        )
    }

    if(form.specialMenu && form.specialMenu !== 'normal') {
        SpecialMenuItem = (
            <List>
                <ListItem>
                        Si doresti de la meniu sa fie { form.specialMenu }.
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
            <React.Fragment>
                <List>
                    <ListItem>
                        Deci te cheama {form.firstPersonName}.
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

            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default Confirm;