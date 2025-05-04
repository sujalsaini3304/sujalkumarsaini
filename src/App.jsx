import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from '../screens/FirstPage'

const App = () => {
  return (
    <Routes>
      <Route index element={<FirstPage/>}  />
    </Routes>
  )
}

export default App