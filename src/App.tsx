import React from "react";
import "./App.css";
import {NavBasicExample} from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Engagement from "./pages/Engagement";
import Video from "./components/Video";
import ExternalLink from "./components/Link";


export default class App extends React.Component {


    constructor(props: Readonly<{}>) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <BrowserRouter>
                        <div className="row">
                            <div className={'col-md-1'}>
                                <NavBasicExample/>
                            </div>

                            <div className="col-md-11 mt-2">

                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/engagement" element={<Engagement/>}/>
                                    <Route path="/video" element={<Video/>}/>
                                    <Route path="/link" element={<ExternalLink/>}/>
                                </Routes>


                            </div>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

