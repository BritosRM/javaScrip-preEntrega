// Array de lista presupuesto
const presupuesto = []



// Orden de productos
const ordenMenaMay = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarLista()
}

const ordenMayaMen = () => {
    productos.sort((a, b) => b.precio - a.precio)
    mostrarLista()
}



// Agregar productos al presupueto 
const agregarProductos = (producto, productoId, metrosCable) => {
    const productoRepetido = presupuesto.find(producto => producto.id === productoId)

    if (productoRepetido) {
        productoRepetido.metros += metrosCable
    } else {
        producto.metros += metrosCable
        presupuesto.push(producto)
    }
    
    console.log(presupuesto)
}



// Muestra de lista
const mostrarLista = () => {
    const lista = productos.map(producto => {
        return '- '+producto.nombre+' de '+producto.tension+' tension $'+producto.precio+' por metro (+iva)'
    })
    alert('Lista de productos disponibles: '+'\n\n'+lista.join('\n'))
    seleccionarProductos(lista)
}



// Ingreso de productos a presupuestar
const seleccionarProductos = (lista) => {
    tensionCable = ''
    metrosCable = 0
    otroProducto = false

    do {
        tensionCable = prompt('¿Que tension de cable necesita?'+'\n\n'+lista.join('\n'))
        metrosCable = parseInt(prompt('¿Cuantos metros necesita?'))

        cable = productos.find(cable => cable.tension.toLocaleLowerCase() === tensionCable.toLocaleLowerCase())

        if (cable) {
            agregarProductos(cable, cable.id, metrosCable)
        } else {
            alert('El cable no se encuentra en el catalogo')
        }

        otroProducto = confirm('Agregar otro producto')
    } while (otroProducto);
    confirmarPresupuesto()
}




// Eliminar productos del presupuesto
const eliminarProducto = (cableAEliminar, metrosAEliminar) => {
    presupuesto.forEach((cable, index) => {
        if (cable.tension.toLocaleLowerCase() === cableAEliminar.toLocaleLowerCase()){
            if (cable.metros > metrosAEliminar) {
                cable.metros -= metrosAEliminar
            } else {
                presupuesto.splice(index, 1)
            }
            
        }
    })
    confirmarPresupuesto()
}



// Confirmacion de presupuesto
const confirmarPresupuesto = () => {
    const listaPresupuesto = presupuesto.map(cable => {
        return '- '+cable.metros+'m de Cable de '+cable.tension+' tension'
    })

    const checkout = confirm('Presupuesto: '
    +'\n\n'+listaPresupuesto.join('\n')
    +'\n\nPara confirmar el presupuesto precione aceptar o Cancelar para eliminar un producto'
    )

    if (checkout) {
        presupuestoFinal(listaPresupuesto)
    } else {
        const productoAEliminar = prompt('Ingrese la tension del cable que desea eliminar')
        const cantidadDeMetrosAEliminar = prompt('Ingrese los metros que desea eliminar')

        eliminarProducto(productoAEliminar, cantidadDeMetrosAEliminar)
    }
}



// Mostrar presupuesto
const presupuestoFinal = (listaPresupuesto) => {
    const precioTotal = presupuesto.reduce((acc , item) => acc +item.metros * item.precio, 0)

    alert('Su presupuesto: '
    +'\n\n'+listaPresupuesto.join('\n')
    +'\n\nSubtotal: $'+precioTotal
    +'\nIva: $'+precioTotal * 0.21
    +'\nTotal: $'+precioTotal * 1.21    
    +'\n\nLapso estimativo de entrega 7 dias habiles'
    
    )
}



// Seleccion de orden
const orden = () => {
    const ordenDeProductos = confirm('¿Desear ordenar los productos de menor a mayor precio?')

    if (ordenDeProductos) {
        ordenMenaMay()
    } else {
        ordenMayaMen()
    }
}



// Ejecucion
orden()