import React from 'react'
import Buscar from './Buscar'

const navbar = ({ brand, filter, setFilter }) => {
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <div className="container">
        <div className='d-flex align-items-center justify-content-between w-100'>
          <div>
            <a className="navbar-brand" href="/">{brand}</a>
          </div>
          <Buscar classes='mt-3 mb-2' filter={filter} setFilter={setFilter} /> 
        </div>
      </div>
    </nav>
  )
}

export default navbar