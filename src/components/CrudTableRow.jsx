import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
  return (
    <>
        <tr>
            <td>{el.name}</td>
            <td>{el.universe}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(el.id)}>Eliminar</button>
            </td>
        </tr>
    </>
  )
}

export default CrudTableRow