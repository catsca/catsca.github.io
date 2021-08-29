import './App.scss';
import Success from './components/Success';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

function App(props) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="wdg__body">
          <div className="wdg__container">
            <div>
              <Success />
            </div>
          </div>
        </div>
  </ThemeProvider>
  );
}

export default App;
