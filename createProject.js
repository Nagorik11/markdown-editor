const fs = require('fs');
const path = require('path');

// Función para crear directorios recursivamente
function createDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Función para crear archivos con contenido
function createFile(filePath, content) {
    fs.writeFileSync(filePath, content);
}

// Directorio actual (donde se ejecuta el script)
const rootDir = process.cwd();

// Estructura de directorios y archivos
const structure = {
    src: {
        components: [],
        pages: ['index.astro'],
        styles: ['global.css']
    },
    public: ['index.html', 'app.js', 'app.css'],
    'package.json': JSON.stringify({
        name: 'nombre_del_proyecto',
        version: '1.0.0',
        description: '',
        scripts: {
            start: 'node server.js'
        },
        dependencies: {
            // Dependencias del proyecto
        }
    }, null, 2)
};

// Crear la estructura de directorios y archivos
function createProjectStructure(baseDir, structure) {
    for (const [name, content] of Object.entries(structure)) {
        const currentPath = path.join(baseDir, name);
        if (Array.isArray(content)) {
            // Crear archivos
            createDirectory(currentPath);
            content.forEach(fileName => {
                const filePath = path.join(currentPath, fileName);
                createFile(filePath, '');
            });
        } else {
            // Crear directorios y archivos internos
            createDirectory(currentPath);
            createProjectStructure(currentPath, content);
        }
    }
}

// Crear el proyecto
createProjectStructure(rootDir, structure);

console.log('¡Estructura del proyecto creada con éxito!');