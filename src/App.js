import './App.css';
import { useEffect , useState } from 'react';


import {
  BrowserRouter as Router,

} from "react-router-dom";
import Routes from './routes/routes';
import { history } from './_helpers/history';
import { authenticationService } from './_services';

function App() {
  const [state, setstate] = useState('')
useEffect(() => {
  
  authenticationService.currentUser.subscribe(x => setstate({ currentUser: x }));

}, []) 
 return (
    <div>
      <Router history={history} >

    <Routes />
    </Router>
    </div>
  );
}

export default App;
