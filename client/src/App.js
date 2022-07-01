import React from 'react'
import "mdb-ui-kit/css/mdb.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//component
import CreateForm from './component/createForm/CreateForm'
import GetForm from './component/getForm/GetForm'
import Header from './component/header/Header'

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<GetForm />} />
          <Route path="/create" element={<CreateForm />} />
        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App