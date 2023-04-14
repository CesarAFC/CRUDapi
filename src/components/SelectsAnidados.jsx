import React, { useState} from 'react'
import SelectList from './SelectList'

const SelectsAnidados = () => {

  const [state, setState] = useState("");
  const [town, setTown] = useState("");

  let urlDep = "https://www.datos.gov.co/resource/xdk5-pm3f.json";
  let urlMun = `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${state}`


  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Mexico</h3>

      <SelectList title='departamento' url={urlDep} handleChange={ (e) => {setState(e.target.value) } } />

      {/* Conditional renders */}
      {state && <SelectList title='municipio' url={urlMun} handleChange={ (e) => {setTown(e.target.value)} }  />}
      
      <pre>
        <code>
          {state} - {town} 
        </code>
      </pre>
    </div>
  )
}

export default SelectsAnidados