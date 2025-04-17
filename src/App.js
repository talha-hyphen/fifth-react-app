import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Left_Sidebar from './components/left-Sidebar/Left_Sidebar'
export default function App() {
  return (
    <div>
      <Header/>
      
     <div className='leftbar'>
      <Left_Sidebar/>
      <Body/>
    </div>
    </div>
  )
}

