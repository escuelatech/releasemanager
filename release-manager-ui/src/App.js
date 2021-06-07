import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Redirect } from 'react-router';
import Dashboard from "./components/dashboard/Dashboard";
import LoginPage from "./components/login/LoginPage";
import MainPage from "./components/wizard/MainPage";
import AppRegistration from "./components/appregistration/AppRegistrationPage.jsx";
import Releases from "./components/dashboard/release/Releases";
import DisplayProjects from "./components/projectconfiguration/DisplayProjectsPage.jsx"
import ReleaseList from "./components/dashboard/release/ReleaseList";
import CreateProject from "./components/projectconfiguration/CreateProject";
import UserRegistration from "./components/appregistration/UserRegistrationPage.jsx"
import Profile from "./components/settings/Profile.jsx";
import Integration from "./components/settings/Integration.jsx";
import ReleaseArtifact from "./components/settings/ReleaseArtifact.jsx";
import Approvals from "./components/settings/Approvals.jsx";
import SettingIntro from "./components/settings/SettingIntro.jsx";

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
                    {/* <Route path="/releases" component={Releases}></Route> */}
                    <Route path="/releases/:name" component={Releases}></Route>
                    <Route path="/displayproject" component={DisplayProjects}></Route>
                    <Route path="/releaselist" component={ReleaseList}></Route>
                    <Route path="/createproject" component={CreateProject}></Route>
                    <Route path="/userregister" component={UserRegistration}></Route>
                    <Route exact path="/settings" component={SettingIntro}></Route>
                    <Route exact path="/settings/profile" component={Profile}></Route>
                    <Route exact path="/settings/integration" component={Integration}></Route>
                     <Route exact path="/settings/releaseartifact" component={ReleaseArtifact}></Route>
                    <Route exact path="/settings/approvals" component={Approvals}></Route>
                </Switch>
            </Router>
	  </>
  );
}

export default App;
