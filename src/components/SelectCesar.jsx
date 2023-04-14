import React, { useEffect, useState } from 'react'
import { SelectListCex } from './SelectListCex'

const SelectCesar = () => {

    const [data, setData] = useState([]);
    const [mun, setMun] = useState([]);
    const [dep, setDep] = useState(null);
    //const [municipio, setMunicipio] = useState(null)


  useEffect(() => {

    fetch("https://www.datos.gov.co/resource/xdk5-pm3f.json")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setData(data);
    });

    
    
  }, []);

  useEffect(() => {

    if(!dep) return;
    fetch(`https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${dep}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setMun(data);
    });
  }, [dep])
  

    let newData = [];
    let newData2 = [];


        data.map( (element) => {
            if(newData.indexOf(element['departamento']) === -1) {
              newData.push(element['departamento']);
            }
        })

        mun && mun.map( (element) => {
            if(newData2.indexOf(element['municipio']) === -1) {
              newData2.push(element['municipio']);
            }
        }) 
        console.log(newData2);

  return (
    <div>
        <h2>Colomnbia</h2>
        <SelectListCex title='Departamentos' data={newData} handleChange={ (e) => {setDep(e.target.value) } } />
        {dep && <SelectListCex title='Municipios' data={newData2} />}
    </div>
  )
}

export default SelectCesar