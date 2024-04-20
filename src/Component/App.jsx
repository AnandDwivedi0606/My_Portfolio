import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
