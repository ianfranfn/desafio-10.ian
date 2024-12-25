import './css/estilos-1.css'


window.mostrarGatos = mostrarGatos
let salida = document.getElementById('salida')

let contador = 0
let ultimoGato = ''

function mostrarGatos(gato) {
    if (gato === ultimoGato) {
        contador++
    } else {
        contador = 1
        ultimoGato = gato
    }

    if (contador === 5) {
        let cajas = Array.from(salida.querySelectorAll('[data-caja]'))
        salida.innerHTML = ''
        cajas.forEach(caja => salida.appendChild(caja))
        let caja = document.createElement('span')
        caja.textContent = '⬛'
        caja.setAttribute('data-caja', 'true')
        salida.appendChild(caja)
        contador = 0
        ultimoGato = ''
    } else {
        let nuevoGato = document.createElement('span')
        nuevoGato.textContent = gato
        salida.appendChild(nuevoGato)
    }
}

