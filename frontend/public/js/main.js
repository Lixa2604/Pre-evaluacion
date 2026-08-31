const boton_facturas = document.getElementById("traer-facturas")
const lista_facturas = document.getElementById("lista-facturas")

const boton_animales = document.getElementById("taer_animales")
const resultado = document.getElementById("resultado")

function crearLista(facturas) {

    if (facturas.length == 0) {
        lista_facturas.innerText = "No hay productos disponibles"
    } else {
        lista_facturas.innerText = ""

        facturas.forEach(factura => {
            const tarjeta = document.createElement("div")
            tarjeta.classList.add("card")

            const cuerpo_tarjeta = document.createElement("div")
            cuerpo_tarjeta.classList.add("card-body")

            const titulo = document.createElement("h5")
            titulo.classList.add("card-title")

            titulo.innerText = producto.nombre

            cuerpo_tarjeta.appendChild(titulo)
            tarjeta.appendChild(cuerpo_tarjeta)
            lista_facturas.appendChild(tarjeta)
        });
    }
}

boton_facturas.addEventListener("click", async (event) => {
    try {
        const url = "http://localhost:8000/facturas"

        const respuesta = await fetch(url)

        if (!repuesta.ok) {
            throw new Error("Estado: ", respuesta.status)
        }

        const factura = await respuesta.json()

        if (facturas.length > 0) {
            resultado.innerText = ""

            facturas.forEach((factura) => {
                const fila = document.createElement("tr")
            })
        }

    } catch (error) {
        console.error(error)
    }
})