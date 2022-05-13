import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewChildForm from './NewChildForm'
import * as React from 'react'

class App extends React.Component{
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' exact={true} element={<NewChildForm/>}/>
                </Routes>
            </Router>
        )
    }
}

export default App;
