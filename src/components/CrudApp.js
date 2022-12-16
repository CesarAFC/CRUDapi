import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
    {
        id: 1,
        name: 'Rick',
        universe: 'C-137',
    },
    {
        id: 2,
        name: 'Morty',
        universe: 'C-137',
    },
    {
        id: 3,
        name: 'Beth',
        universe: 'C-137',
    },
    {
        id: 4,
        name: 'Big Boobed Waitress',
        universe: 'Fantasy World',
    },
    {
        id: 5,
        name: 'Gotron Pilot',
        universe: 'c-137',
    },
];

export const CrudApp = () => {

    const [db, setDb] = useState(initialDB);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data])
    }
    const updateData = (data) => {
        const newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    }

    const deleteData = (id) => {
        let isDelete = window.confirm('Estas seguro de eliminar el registro?');
        if(isDelete) {
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        } else {
            return;
        }
    }

  return (
    <>
        <h2>Crud App</h2>
        <article className='grid-1-2'>

        <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit} 
            />

        <CrudTable 
            data={db} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData} 
            />
            
        </article>
    </>
  )
}
