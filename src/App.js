import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {HashRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import React from "react";

const App = () => {
        return (
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile/*" element={<Profile />} />
                            <Route path="/dialogs/*" element={<DialogsContainer/>} />
                            <Route path="/users" element={<UsersContainer />}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>

                    </div>
                </div>
            </HashRouter>
        );
    }
;

export default App;
