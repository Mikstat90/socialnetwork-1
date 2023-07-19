import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Video} from "./components/Video/Video";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/State";

type AppType = {
    state: RootStateType
}

export const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile postData={props.state.profilePage.postData}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/video'} component={Video}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



