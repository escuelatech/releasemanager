import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Dashboard from "./components/dashboard/Dashboard";
import LoginPage from "./components/login/LoginPage";
import MainPage from "./components/wizard/MainPage";
import SuccessMessage from "./components/wizard/SuccessMessage";
import AppRegistration from "./components/appregistration/AppRegistrationPage.jsx";
import Settings from "./components/settings/SettingsPage.jsx";
import Releases from "./components/dashboard/Releases";
import IntegrationSettings from "./components/settings/IntegrationSettings";
import DisplayProjects from "./components/projectconfiguration/DisplayProjectsPage.jsx"


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
                    <Route path="/settings" component ={Settings}></Route>
                    <Route path="/releases" component={Releases}></Route>
                    <Route path="/intsettings" component={IntegrationSettings}></Route>
                    <Route path="/displayproject" component={DisplayProjects}></Route>
                </Switch>
            </Router>
	  </>
  );
}

export default App;
