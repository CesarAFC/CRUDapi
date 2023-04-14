import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange, first }) => {

    const {data, error, loading} = useFetch(url);

    //console.log(data, error, loading);

    //if(!data) return null;

    if(error) {
        return <Message msg={`error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />
    }
    
    const departamentos = [
        {"region":"Región Caribe","c_digo_dane_del_departamento":"8","departamento":"Atlántico","c_digo_dane_del_municipio":"8.001","municipio":"Barranquilla"}
        // "Bolívar",
        // "Boyacá",
        // "Cesar",
        // "Córdoba",
        // "Cundinamarca",
        // "Chocó",
        // "Huila",
        // "La Guajira",
        // "Magdalena",
        // "Meta",
        // "Nariño",
        // "Quindío",
        // "Risaralda",
        // "Santander",
        // "Sucre",
        // "Tolima",
        // "Arauca",
        // "Casanare",
        // "Putumayo",
        // "Amazonas",
        // "Guainía",
        // "Vaupés",
        // "Guainía",
        // "Vichada",
        // "Caquetá",
        // "Atlántico",
        // "Archipiélago de San Andrés, Providencia y Santa Catalina",
    ]


    let id = `select-${title}`;
    let label = title.charAt(0).toUpperCase() + title.slice(1);
    //let listavacia;

  return (
    <>
    <label htmlFor={id}>{label} </label>
    {loading && <Loader/>}
        <select name={id} id={id} onChange={handleChange} >
            <option value="">Elige un {title}</option>

            { (data ? data : departamentos).map( (el) => <option value={el[title]} >{el[title]}</option> ) }

        </select>
    </>
  )
}

export default SelectList;