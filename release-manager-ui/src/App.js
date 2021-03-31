import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dashboard from "./components/dashboard/Dashboard";
import LoginPage from "./components/login/LoginPage";
import MainPage from "./components/wizard/MainPage";
import SuccessMessage from "./components/wizard/SuccessMessage";
import AppRegistration from "./components/appregistration/AppRegistrationPage.jsx"

function App() {
  
  return (
	  <>
		 <Router>
                <Switch>
                    {/* <Route exact path="/" render={() => <Redirect to='login' />}></Route> */}
                    <Route exact path="/" component={LoginPage}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/wizard" component={MainPage}></Route>
                    <Route path="/success" component={SuccessMessage}></Route>
                    <Route path="/appregister" component={AppRegistration}></Route> 
                </Switch>
            </Router>
	  </>
  );
}

export default App;
