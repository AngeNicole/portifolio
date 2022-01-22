import React from 'react'
import './styles/tailwind.css'
import Index from './pages/Index'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Index />}>

                </Route>
            </Routes>
        </Router>
    )
}


export default App