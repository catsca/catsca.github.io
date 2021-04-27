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

const Confirm = ({values, form, ...props}) => {

    const cookies = new Cookies();

    const finalStep = (e) => {
        e.preventDefault();

        const params = {
            firstPerson: form.firstPersonName,
            secondPerson: form.secondPersonName,
            specialMn: form.specialMenu,
            childrenNum: form.childrenNumber
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

    if(form.childrenNumber && form.childrenNumber == 0) {
        ChildNumber = (''
        )
    } else if(form.childrenNumber && form.childrenNumber == 1) {
        ChildNumber = (
            <List>
                <ListItem>
                    Aduci 1 copil.
                    <Input 
                        id="childrenNum" 
                        value={form.childrenNumber} 
                        name="childrenNum"
                        type="hidden"
                    />
                </ListItem>
            </List>
        )
    } else  if(form.childrenNumber) {
        ChildNumber = (
            <List>
                <ListItem>
                    Aduci { form.childrenNumber } copii.
                    <Input 
                        id="childrenNum" 
                        value={form.childrenNumber} 
                        name="childrenNum"
                        type="hidden"
                    />
                </ListItem>
            </List>
        )
    }

    if(form.specialMenu && form.specialMenu !== 'normal') {
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