import React from 'react'
import { useForm } from '../hooks/useForm'
import Loader from './Loader';
import Message from './Message';

const initialForm = {
    subject: "",
    name: "",
    email: "",
    comments: "",
};
const validationsForm = (formData) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    //trim quita los espacios al inicio o al final
    if (!formData.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(formData.name.trim())) {
        errors.name = "El campo 'Nombre' solo acepta letras";
    }

    if (!formData.email.trim()) {
        errors.email = "El campo 'email' es requerido";
    } else if (!regexEmail.test(formData.email.trim())) {
        errors.email = "El campo 'email' es incorrecto";
    }

    if (!formData.subject.trim()) {
        errors.subject = "El campo 'Asunto' es requerido";
    }
    if (!formData.comments.trim()) {
        errors.comments = "El campo 'Comentarios' es requerido";
    } else if (!regexComments.test(formData.comments.trim())) {
        errors.comments = "El campo 'Comentarios' no debe exceder los 255 caracteres";
    }
    

    return errors;
}

let styles = {
    fontWeight: 'bold',
    color: "#dc3545",
    fontSize: '12px'
}

const ContactForm = () => {

    const {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleBlur,
      handleSubmit,
    } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          value={form.name}
          requeired
          onBlur={handleBlur}
        />
        {errors.name && <p style={styles}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          value={form.email}
          requeired
          onBlur={handleBlur}
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          value={form.subject}
          requeired
          onBlur={handleBlur}
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}

        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onChange={handleChange}
          value={form.comments}
          requeired
          onBlur={handleBlur}
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}

        <input type="submit" value="Enviar" />
      </form>

      { loading && <Loader/> }
      { response && <Message msg='Los datos han sido enviados' bgColor='#198754' /> }
    </div>
  );
}

export default ContactForm