function generarTablas() {
    // 10.b: Obtenemos el contenedor con el id "tablaMultiplicar"
    let contenedor = document.getElementById("tablaMultiplicar");
    
    // 11.1: Creamos una variable acumuladora vacía
    let contenido = "";
    
    // 11.2: Usamos el bucle for para generar cada fila dinámicamente
    for (let i = 1; i <= 12; i++) {
        let resultado = 5 * i; // (Nota: Si quieres la del 5 como pide la guía, solo cambia el 3 por 5 aquí)
        contenido += `<div class="fila">5 × ${i} = <span>${resultado}</span></div>`;
    }
    
    // 11.3: Inyectamos el contenido generado dentro del contenedor
    contenedor.innerHTML = contenido;
}