import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../component/Home';
import About from '../component/About';
import ErrorPage from '../component/Error';
import NavBar from '../component/NavBar';
import PortfolioPage from '../component/Portfolio';
import Footer from '../component/Footer';

const Container = () => {
    return ( 
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/portfolio' element={<PortfolioPage/>}></Route>
                    <Route path="*" element={<ErrorPage/>}></Route>
                </Routes>
            </Router>
            <h2>Site Under Construction...</h2>
            <Footer/>
        </div>
     );
}
 
export default Container;