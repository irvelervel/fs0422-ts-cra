import React from 'react'
import './App.css'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* a class component in React by default expects an EMPTY props object! */}
        <ClassComponent subTitle="this is a subtitle text" count={10} />
      </header>
    </div>
  )
}

export default App
