import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';

export class FormUserDetails extends Component {
    
    render() { 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    
                    <h1>Ne pare rau :(</h1>
                    <p>Daca te razgandesti, ne poti contacta telefonic!</p>

                </React.Fragment>
               </MuiThemeProvider>
           )
       }
   }

export default FormUserDetails;