import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapComponent from './components/BootstrapComponent'
import ClassComponent from './components/ClassComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <header className="App-header">
          {/* a class component in React by default expects an EMPTY props object! */}
          <Routes>
            <Route
              path="/"
              element={
                <FunctionalComponent
                  subTitle="this is functional component"
                  count={10}
                  customClassName="text-info"
                />
              }
            />
            <Route
              path="/class"
              element={
                <ClassComponent
                  subTitle="this is a subtitle text"
                  count={10}
                  customClassName="text-danger"
                />
              }
            />
            <Route path="/form" element={<BootstrapComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
