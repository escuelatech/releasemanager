import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Redirect } from 'react-router';
import Dashboard from "./components/dashboard/Dashboard";
import LoginPage from "./components/login/LoginPage";
import MainPage from "./components/wizard/MainPage";
import AppRegistration from "./components/appregistration/AppRegistrationPage.jsx";
import Settings from "./components/settings/SettingsPage.jsx";
import Releases from "./components/dashboard/release/Releases";
import IntegrationSettings from "./components/settings/IntegrationSettings";
import DisplayProjects from "./components/projectconfiguration/DisplayProjectsPage.jsx"
import ReleaseList from "./components/dashboard/release/ReleaseList";



function App() {
  
  return (
	  <>
		 <Router>
                <Switch>
                    {/* <Route exact path="/" render={() => <Redirect to='login' />}></Route> */}
                    <Route exact path="/" component={LoginPage}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/wizard" component={MainPage}></Route>
                    <Route path="/appregister" component={AppRegistration}></Route> 
                    <Route path="/profilesettings" component ={Settings}></Route>
                    <Route path="/releases" component={Releases}></Route>
                    <Route path="/intsettings" component={IntegrationSettings}></Route>
                    <Route path="/displayproject" component={DisplayProjects}></Route>
                    <Route path="/releaselist" component={ReleaseList}></Route>
                </Switch>
            </Router>
	  </>
  );
}

export default App;
