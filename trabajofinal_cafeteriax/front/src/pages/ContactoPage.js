import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contactopage.css';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name] : value 
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault ();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }


    return (
        <main className="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <form className="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar"/></p>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </form>
        </div>
        <div class="datos">
            <h2>Otras vias de comunicación</h2>
            <p>Tambien oueden contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Teléfono: 3492-333333</li>
                <li>Email: contacto@cafeteriax.com.ar</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Skype</li>
            </ul>
        </div>
    </main>
    )
}

export default ContactoPage;