import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FunctionalComponent from './components/FunctionalComponent'
// import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* a class component in React by default expects an EMPTY props object! */}
        {/* <ClassComponent
          subTitle="this is a subtitle text"
          count={10}
          customClassName="text-danger"
        />
        <ClassComponent subTitle="Second invocation" count={0} /> */}
        <FunctionalComponent
          subTitle="this is functional component"
          count={10}
          customClassName="text-info"
        />
      </header>
    </div>
  )
}

export default App
