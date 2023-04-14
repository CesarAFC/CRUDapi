import React from 'react'

export const SelectListCex = ({title, data, handleChange}) => {

    let id = `select-${title}`;

  return (
    <>
    <label htmlFor={id}>{title}</label>
        <select name={id} id={id} onChange={handleChange}>
            <option value="">Elige un {title}</option>
            {data && data.map( (el) => <option value={el} >{el}</option> )}
        </select>
    </>
  )
}
