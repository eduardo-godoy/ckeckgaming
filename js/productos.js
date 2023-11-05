const productos = [
    {   
        id: 1,
        titulo: 'Computadora Gamer 1',
        imagen: '../assets/images/Compu1.png',
        descripcion: 'Computadora Gamers numero 1',
        precio: 1000,
        categoria: 'Computadoras'
    },
    {
        id: 2,
        titulo: 'Computadora Gamer 2',
        imagen: '../assets/images/Compu2.jpeg',
        descripcion: 'Computadora Gamers numero 2',
        precio: 2000,
        categoria: 'Computadoras'
    },
    {
        id: 3,
        titulo: 'Computadora Gamer 3',
        imagen: '../assets/images/Compu3.jpeg',
        descripcion: 'Computadora Gamers numero 3',
        precio: 3000,
        categoria: 'Computadoras'
    },
    {
        id: 4,
        titulo: 'Computadora Gamer 4',
        imagen: '../assets/images/Compu4.jpeg',
        descripcion: 'Computadora Gamers numero 4',
        precio: 4000,
        categoria: 'Computadoras'
    },
    {
        id: 5,
        titulo: 'Computadora Gamer 5',
        imagen: '../assets/images/Compu5.jpeg',
        descripcion: 'Computadora Gamers numero 5',
        precio: 5000,
        categoria: 'Computadoras'
    },
    {
        id: 6,
        titulo: 'Computadora Gamer 6',
        imagen: '../assets/images/Compu6.jpeg',
        descripcion: 'Computadora Gamers numero 6',
        precio: 6000,
        categoria: 'Computadoras'
    },
    {
        id: 7,
        titulo: 'Computadora Gamer 7',
        imagen: '../assets/images/Compu7.jpeg',
        descripcion: 'Computadora Gamers numero 7',
        precio: 7000,
        categoria: 'Computadoras'
    },
    {
        id: 8,
        titulo: 'Computadora Gamer 8',
        imagen: '../assets/images/Compu8.jpeg',
        descripcion: 'Computadora Gamers numero 8',
        precio: 8000,
        categoria: 'Computadoras'
    },
    {
        id: 9,
        titulo: 'Computadora Gamer 9',
        imagen: '../assets/images/Compu9.jpeg',
        descripcion: 'Computadora Gamers numero 9',
        precio: 9000,
        categoria: 'Computadoras'
    },
    {
        id: 10,
        titulo: 'Notebook Gamer 1',
        imagen: '../assets/images/note1.jpeg',
        descripcion: 'Notebook Gamers numero 1',
        precio: 10000,
        categoria: 'Notebooks'
    },
    {
        id: 11,
        titulo: 'Notebook Gamer 2',
        imagen: '../assets/images/note2.jpeg',
        descripcion: 'Notebook Gamers numero 2',
        precio: 11000,
        categoria: 'Notebooks'
    },
    {
        id: 12,
        titulo: 'Notebook Gamer 3',
        imagen: '../assets/images/note3.jpeg',
        descripcion: 'Notebook Gamers numero 3',
        precio: 13000,
        categoria: 'Notebooks'
    },
    {
        id: 13,
        titulo: 'Notebook Gamer 4',
        imagen: '../assets/images/note4.jpg',
        descripcion: 'Notebook Gamers numero 4',
        precio: 14000,
        categoria: 'Notebooks'
    },
    {
        id: 14,
        titulo: 'Notebook Gamer 5',
        imagen: '../assets/images/note5.jpg',
        descripcion: 'Notebook Gamers numero 5',
        precio: 15000,
        categoria: 'Notebooks'
    },

]

const contenedor = document.querySelector('section.main-section')

function crearCardError() {
    // return `<div class="div-card-error">
    //             <div class="imagen-error">🤦🏻‍♂️</div>
    //             <div class="leyenda-error">No pudimos cargar los productos</div>
    //             <div class="leyenda-intento">Intenta nuevamente en unos segundos.</div>
    //         </div>`
}

function crearCardHTML(producto) {
    return `<article class='article-card'>
                <img src='${producto.imagen}' class='imagen'/>
                <h2 class='h2-titulo'> Su ID es: ${producto.id}</h2>
                <h2 class='h2-titulo'>${producto.titulo}</h2>
                <h3 class='h2-titulo'>Precio: $${producto.precio}</h3>
                <button class='btn'>Agregar</button>
            </article>`
}

function cargarProductos() {
    if (productos.length > 0) {
        contenedor.innerHTML = ''
        productos.forEach((producto) => contenedor.innerHTML += crearCardHTML(producto))
        const botones = document.querySelectorAll('button.add-to-cart')
        console.log(botones)
    }
}

cargarProductos()