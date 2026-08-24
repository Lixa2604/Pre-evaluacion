const boton_facturas = document.getElementById("traer-facturas")
const lista_facturas = document.getElementById("lista-facturas")

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

boton_productos.addEventListener("click", async (event) => {
    try {
        const url = "http://localhost:8000/facturas"

        const respuesta = await fetch(url)

        if (!repuesta.ok) {
            throw new Error("Estado: ", respuesta.status)
        }

        const resultado = await respuesta.json()

        console.log(resultado)

    } catch (error) {
        console.error(error)
    }
})