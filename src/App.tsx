import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Video} from "./components/Video/Video";

type AppType = {
    postData: DataType[]
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

type DataType = {
    id: number
    message: string
    likesCount: number
}

type DialogsDataType = {
    id: number
    name: string
}

type MessagesDataType = {
    id: number
    message: string
}

export const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile postData={props.postData}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/video'} component={Video}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



