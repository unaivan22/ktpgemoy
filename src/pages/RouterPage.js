import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import BackgroundBiru from './ktp/BackgroundBiru'
import BackgroundMerah from './ktp/BackgroundMerah'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/bg-biru' element={<BackgroundBiru/>} />
            <Route path='/bg-merah' element={<BackgroundMerah/>} />
            {/* <Route path='*' element={<NotFound/>} /> */}
        </Routes>
     </Router>
  )
}