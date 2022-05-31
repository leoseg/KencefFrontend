import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddChild from './AddChild'
import AddGodParent from "./AddGodParent";
import * as React from 'react'

class App extends React.Component{
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/addchild' exact={true} element={<AddChild/>}/>
                    <Route path='/addgodparent' exact={true} element={<AddGodParent/>}/>
                </Routes>
            </Router>
        )
    }
}

export default App;
