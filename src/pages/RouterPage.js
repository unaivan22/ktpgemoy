import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import BackgroundBiru from './ktp/BackgroundBiru'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/bg-biru' element={<BackgroundBiru/>} />

            {/* <Route path='*' element={<NotFound/>} /> */}
        </Routes>
     </Router>
  )
}