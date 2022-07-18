import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Company from "./pages/Company";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <div>
                <Navbar/>

                <div className="container">
                    <Routes>
                        <Route path="/company" element={<Company/>}/>
                        <Route path="/" element={<Company/>}/>
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default App;
