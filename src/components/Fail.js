import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';

export class FormUserDetails extends Component {
    
    render() { 
        return (
            <MuiThemeProvider>
                <div>
                    
                    <h1>Ne pare rau :(</h1>
                    <h4>Daca te razgandesti, ne poti contacta telefonic!</h4>

                </div>
               </MuiThemeProvider>
           )
       }
   }

export default FormUserDetails;