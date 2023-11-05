const carrito = []

function buscarComputadora(id) {
    let idBuscado = productos.find((producto) => producto.id === id)
    return idBuscado
}

function comprar() {
    let id = prompt('Agrega el id numerico de la compu que quieras comprar:')
    computadoraElegida = buscarComputadora(parseInt(id))

    if(computadoraElegida !== undefined) {
        carrito.push(computadoraElegida)
        console.table(carrito)
        let respuesta = confirm('¿Quieres elegir otra computadora?')
        if(respuesta === true) {
            comprar()
        }else{
            const compra = new Compra(carrito)
            let total = compra.obtenerTotal()
            alert('El total de tu compra es de: $' + total + '.\nMuchas gracias por elegirnos')
        }
    }else{
        alert('Lo siento, pero la computadora no existe')
    }    
}