import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Navbar/Friends/Friends";

const App = (props) => {

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar state={props.state.sidebar}/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile/*" element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
                            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} addMessage={props.addMessage}/>} />
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/friends" element={<Friends state={props.state.sidebar.friends}/>}/>
                        </Routes>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
;

export default App;
