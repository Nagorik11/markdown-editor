//app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar la solicitud GET a la raíz del servidor
app.get('/', (req, res) => {
    // Puedes enviar una respuesta HTML, redireccionar a otra página, o enviar algún otro contenido aquí
    res.send('¡Bienvenido al editor de Markdown!');
});

// Ruta para manejar la solicitud de guardar el texto (si la tienes)
app.post('/save', (req, res) => {
    // Aquí iría el código para guardar el texto en la base de datos o en un archivo
    res.send('¡Texto guardado!');
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
