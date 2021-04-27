import './App.scss';
import UserForm from './components/UserForm';

function App(props) {

  return (
    <div className="wdg__body">
      <div className="wdg__container">
        <div>
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;