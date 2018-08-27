import React from 'react'
import { HashRouter, Route, Switch,Redirect} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login/login'
import Home from './pages/home/home';
import UserList from './pages/userManage/userList';
import IcoList from './pages/userManage/icoList';
import AccountManage from './pages/financial/accountManage';
import Settlement from './pages/financial/settlement';
import UserAnalysis from './pages/dataAnalysis/userAnalysis';
import QbeAnalysis from './pages/dataAnalysis/qbeAnalysis';
import Feedback from './pages/helpCenter/feedback';

export default class ERouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path='/userManage/userList' component={UserList} />
                                    <Route path='/userManage/icoList' component={IcoList} />
                                    <Route path='/financial/accountManage' component={AccountManage} />
                                    <Route path='/financial/settlement' component={Settlement} />
                                    <Route path='/dataAnalysis/userAnalysis' component={UserAnalysis} />
                                    <Route path='/dataAnalysis/qbeAnalysis' component={QbeAnalysis} />
                                    <Route path='/helpCenter/feedback' component={Feedback} />
                                    {/*<Redirect to="/home" />*/}
                                    {/* <Route component={NoMatch} /> */}
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
