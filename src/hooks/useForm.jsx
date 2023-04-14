import {useState} from 'react'
import { helpHttp } from '../components/helpHttps';

export const useForm = (initialForm, validateform) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
        ...form,
        [name]: value,
    })
  };

  const handleBlur = (e) => {
    //handleChange(e);
    setError(validateform(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateform(form));

    if ( Object.keys(errors).length === 0 ) {
      alert('Enviando Formulario');
      setLoading(true);

      helpHttp()
      .post('https://formsubmit.co/ajax/cafc2030@gmail.com',{
        body: form,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      .then((res) => {
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        setTimeout(() =>  setResponse(false), 4000);
      })

    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
  
}
