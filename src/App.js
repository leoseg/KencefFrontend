import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddChild from './components/AddChild'
import AddGodParent from "./components/AddGodParent";
import * as React from 'react'
import Navbar from "./components/navbar";

class App extends React.Component{
    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/addchild' exact={true} element={<AddChild/>}/>
                    <Route path='/addgodparent' exact={true} element={<AddGodParent/>}/>
                </Routes>
            </Router>
        )
    }
}

export default App;
