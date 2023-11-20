const contenedorIndex = document.querySelector('section.main-section')
const tituloIndex = document.querySelector('h1.h1-index')
const numeroCarrito = document.querySelector('p.p-cart')
const inputBuscar = document.querySelector('input.input-index')
const botonComputadora = document.querySelector('li ul.ul-index-1')
const botonNotebooks = document.querySelector('li ul.ul-index-2')
const totalSection = document.querySelector('section.total-section')
const btnCart = document.querySelector('a.a-cart')
const logo = document.querySelector('a.logo-a')

let carrito = JSON.parse(localStorage.getItem('carrito')) || []


function crearCardError() {
    return `<div class="div-card-error">
                <div class="imagen-error">🤦🏻‍♂️</div>
                <div class="leyenda-error">No pudimos cargar los productos</div>
                <div class="leyenda-intento">Intenta nuevamente en unos segundos.</div>
           </div>`
}

function crearCardHTML(producto) {
    return `<article class='article-card'>
                <img src='${producto.imagen}' class='imagen'/>
                <h2 class='h2-titulo'>${producto.titulo}</h2>
                <h3 class='h2-titulo'>Precio: $${producto.precio}</h3>
                <button id="${producto.id}" class='btn'>Agregar</button>
            </article>`
}

function activarClickEnBotones() {
    const botonesAgregar = document.querySelectorAll("button.btn")
    botonesAgregar.forEach((boton)=> {
        boton.addEventListener("click", (e)=> {
            const id = parseInt(e.target.id)
            const productoSeleccionado = productos.find((producto) => producto.id === id)
            carrito.push(productoSeleccionado)
            numeroCarrito.innerHTML = carrito.length
            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
    })
}

function cargarProductos() {
    if (productos.length > 0) {
        contenedorIndex.innerHTML = ''
        tituloIndex.innerHTML = 'Productos'
        productos.forEach((producto) => contenedorIndex.innerHTML += crearCardHTML(producto))
        activarClickEnBotones()
        numeroCarrito.innerHTML = carrito.length || null
    } else {
        contenedorIndex.innerHTML = crearCardError()
    }
}

cargarProductos()

inputBuscar.addEventListener('search', ()=> {
    let textoAbuscar = inputBuscar.value.trim().toLowerCase()
    let resultado = productos.filter((producto)=> producto.titulo.toLowerCase().includes(textoAbuscar))
    console.log(resultado)
    if(resultado.length > 0){
        contenedorIndex.innerHTML = ""
        totalSection.innerHTML = ""
        tituloIndex.innerHTML = 'Productos'
        resultado.forEach((producto)=> contenedorIndex.innerHTML += crearCardHTML(producto))
        activarClickEnBotones()  
    } else {
        contenedorIndex.innerHTML = ""
        totalSection.innerHTML = ""
        tituloIndex.innerHTML = 'No hay resultados'
    }
    
})

botonNotebooks.addEventListener('click', () => {
    let productosASeparar = productos.filter((producto) => producto.categoria == "Notebooks")
    contenedorIndex.innerHTML = ""
    tituloIndex.innerHTML = 'Notebooks'
    productosASeparar.forEach((producto)=> contenedorIndex.innerHTML += crearCardHTML(producto))
    activarClickEnBotones()
})

botonComputadora.addEventListener('click', () => {
    let productosASeparar = productos.filter((producto) => producto.categoria == "Computadoras")
    contenedorIndex.innerHTML = ""
    tituloIndex.innerHTML = 'Computadoras'
    productosASeparar.forEach((producto)=> contenedorIndex.innerHTML += crearCardHTML(producto))
    activarClickEnBotones()
})

function crearCardHTMLError() {
    return `<h2>No hay productos en el carrito</h2>`
} 

function crearCardHTMLCart(producto) {
    return `<article class='article-card-cart'>
                <img src='${producto.imagen}' class='imagen-cart'/>
                <h2 class='h2-titulo-cart'>${producto.titulo}</h2>
                <h3 class='h3-titulo-cart'>Precio: $${producto.precio}</h3>
            </article>`
}

function mostrarTotal(){
    const compra = new Compra(carrito)
    let total = compra.obtenerTotal()
    totalSection.innerHTML = 'El total de su compra es de: $' + total
}

function cargarProductosEnCarrito() {
    if (carrito.length > 0) {
        tituloIndex.innerHTML = 'Carrito'
        contenedorIndex.innerHTML = ''
        carrito.forEach((producto) => contenedorIndex.innerHTML += crearCardHTMLCart(producto))
        mostrarTotal()
        totalSection
    } else {
        tituloIndex.innerHTML = ''
        contenedorIndex.innerHTML = crearCardHTMLError()
    }
}

btnCart.addEventListener('click', cargarProductosEnCarrito)

// function buscarComputadora(id) {
//     let idBuscado = productos.find((producto) => producto.id === id)
//     return idBuscado
// }

// function comprar() {
//     let id = prompt('Agrega el id numerico de la compu que quieras comprar:')
//     computadoraElegida = buscarComputadora(parseInt(id))

//     if(computadoraElegida !== undefined) {
//         carrito.push(computadoraElegida)
//         console.table(carrito)
//         let respuesta = confirm('¿Quieres elegir otra computadora?')
//         if(respuesta === true) {
//             comprar()
//         }else{
//             const compra = new Compra(carrito)
//             let total = compra.obtenerTotal()
//             alert('El total de tu compra es de: $' + total + '.\nMuchas gracias por elegirnos')
//         }
//     }else{
//         alert('Lo siento, pero la computadora no existe')
//     }    
// }