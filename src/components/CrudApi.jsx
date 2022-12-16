import React, { useState, useEffect } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from './helpHttps';
import Loader from './Loader';
import Message from './Message';

export const CrudApi = () => {
    
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/Rick&Morty"; 


    useEffect(() => {

        setLoading(true);

        setTimeout(() => {
            
            helpHttp()
            .get(url)
            .then((res) => {
                //console.log(res);
                if (!res.err) {
                    setDb(res);
                    setError(null)
                } else {
                    setDb(null);
                    setError(res)
                }
                setLoading(false);
            });

        }, 3000);
        
      }, [url]);
    

    const createData = (data) => {

        data.id = Date.now();

        let options = {
            body: data, 
            headers: { "content-type": "application/json" }, 
        };

        api.post(url, options ).then( (res) => {

            console.log(res);
            
            if(!res.err) {
                setDb([...db, res])
            } else {
                setError(res);
            }
        });
    }

    const updateData = (data) => {

        let endPoint = `${url}/${data.id}`;

        let options = {
            body: data, 
            headers: { "content-type": "application/json" }, 
        };

        api.put(endPoint, options ).then( (res) => {

            //console.log(res);
            
            if(!res.err) {
                let newData = db.map(el => el.id === data.id ? data : el);
                setDb(newData);
            } else {
                setError(res);
            }
        });

    }

    const deleteData = (id) => {

        let endPoint = `${url}/${id}`;
        let options = {
            headers: { "content-type": "application/json" }, 
        };
        let isDelete = window.confirm('Estas seguro de eliminar el registro?');
        if(isDelete) {

            api.del(endPoint, options).then( (res) => {
                
                if(!res.err) {
                    let newData = db.filter(el => el.id !== id);
                    setDb(newData);

                } else {
                    setError(res);
                }
            });



        } else {
            return;
        }
    }

  return (
    <>
        <h2>Crud API</h2>
        <article className='grid-1-2'>

        <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit} 
            />
        {loading && <Loader/>}
        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}
        { db &&
            <CrudTable 
            data={db} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData} 
            />
        }
        
        </article>
    </> 
  )
}
