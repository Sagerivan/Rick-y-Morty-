import React from 'react'
import './Filter.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Filter({title,filterName,filterCharacter}) {
    return(
       
        <div className='d-flex row'>

          <div className="form-check form-switch px-5 py-2 botonFiltro">
              <input className="form-check-input" type="checkbox" role="switch" id={filterName} value={filterName} onClick={(event)=>filterCharacter(event.target)} />
              <label className="form-check-label" htmlFor={filterName}>{title}</label>
          </div>
          </div>
       
    )
}