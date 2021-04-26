import React from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';


const FormBoolean = (props) => {

    const continueStep = () => {
        props.nextStep()
    }

    const failStep = () => {
        props.failStep()
    }

    return (
        <MuiThemeProvider>
            <h1>Ne-a chemat!</h1>
            <div className="wdg__container_boolean">
                <h2>Da' tu vii?</h2>
                <div>
                    <Button
                        variant="contained"
                        startIcon={< CheckCircleIcon />}
                        color="primary"
                        onClick={continueStep}
                        className="wdg__btn_big"
                    >
                        Da
                    </Button>
                                                    
                    <Button
                        variant="contained"
                        startIcon={< CancelIcon />}
                        color="secondary"
                        onClick={failStep}
                        className="wdg__btn_big"
                    >
                        Nu
                    </Button> 
                </div>
            </div>
            
       </MuiThemeProvider>
    )
}

export default FormBoolean;