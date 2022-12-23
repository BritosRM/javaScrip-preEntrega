const presupuesto = () => {
    let producto = ""
    let metros = 0
    let precio = 0
    let totalPresupuesto = 0
    let entrega = ''

        do {
            alert('Realizamos presupuestos por metro de cables de: \nalta tension (10mm), media tension (4mm) y baja tension (1.5mm)');
            producto = prompt('¿Que cable desea presupuestar? \n"alta tension", "media tension" o "baja tension"');
            metros = parseInt(prompt('Ingrese los metros que desea'));


            let metrosdValidados = validarMetros(metros);


            switch (producto) {
                case 'alta tension':
                    precio = 1000;
                    break;
                case 'media tension':
                    precio = 500;
                    break;
                case 'baja tension':
                    precio = 150;
                    break;
                default:
                    alert('Tipo de clabe mal ingresado');
                    precio = 0;
                    metros = 0;
            }

            totalPresupuesto = precio * metrosdValidados
            alert('El total del presupuesto de ' +metros+ 'm de cable de ' +producto+ ' es de $' +totalPresupuesto)


            let entrega = plazoDeEntrega(producto, metros)
            alert('El plazo de entrega es ' +entrega)

        }



        while(false)
}

const validarMetros = (metros) => {
    while (Number.isNaN(metros) || metros === 0) {
        if (metros !== 0) {
            alert('Debe ingresar un numero')
        }
        else {
            alert('La cantidad debe ser mayor a 0')
        }
        parseInt(prompt('Ingrese nuevamente la cantidad que desea'));
    }
    return metros;
}


const plazoDeEntrega = (producto, metros) => {
    if (producto === 'baja tension' & metros <= 100) {
        entrega = 'inmediato'
    }
    else if  (producto === 'media tension' & metros <= 50) {
        entrega = 'inmediato'
    }
    else if  (producto === 'media tension' & metros <= 100) {
        entrega = 'de 7 a 15 dias'
    }
    else {
        entrega = '30 dias'
    }
    return entrega;
}


presupuesto();
