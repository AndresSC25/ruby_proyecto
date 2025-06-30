import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        // Obtiene el token CSRF de las etiquetas meta de Rails
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        axios.post('/posts.json', { post: { title, body } }, {
            headers: {
                'X-CSRF-Token': csrfToken
            }
        })
            .then(response => {
                // Llama a la función del componente padre para actualizar la lista de posts
                onPostCreated(response.data);
                // Limpia el formulario y los errores
                setTitle('');
                setBody('');
                setErrors({});
            })
            .catch(error => {
                // Si hay errores de validación, los establece en el estado
                if (error.response && error.response.status === 422) {
                    setErrors(error.response.data);
                }
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Nuevo Post</h2>
            {errors.title && <p style={{ color: 'red' }}>Título: {errors.title.join(', ')}</p>}
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <br />
            {errors.body && <p style={{ color: 'red' }}>Cuerpo: {errors.body.join(', ')}</p>}
            <div>
                <label>Cuerpo:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <br />
            <button type="submit">Crear Post</button>
        </form>
    );
};

export default PostForm;