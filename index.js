document.addEventListener("DOMContentLoaded", () => {
    const btnGenerar = document.getElementById("formulario");
    const btnCopiar = document.getElementById("btnCopiar");
    const mensaje2 = document.getElementById("mensaje2");
    const copiado = document.getElementById("copiado");

    //funcion para generar el mensaje
    btnGenerar.addEventListener('submit', function (e) {
        e.preventDefault();
        const numeroPedido = document.getElementById("numeroPedido").value.trim();
        const nombreCliente = document.getElementById("nombreCliente").value.trim();
        console.log(numeroPedido);
        console.log(nombreCliente);

        if (!nombreCliente || !numeroPedido) {
            alert("Por favor, complete todos los campos.");
            return;
        }
        
        const horaActual = new Date().getHours();
        let saludo = "Buenos dias";
        if (horaActual >= 12 && horaActual < 19) saludo = "Buenas tardes";
        else if (horaActual >= 19 || horaActual < 5 ) saludo = "Buenas noches";

        const minutoEspera = horaActual < 12 ? 5 : 3; 
        const texto = `${saludo} ${nombreCliente}, su pedido con numero ${numeroPedido} se encuentra en camino y estara llegando en aproximadamente ${minutoEspera} minutos. Gracias por confiar en nosotros.`;
        mensaje2.value = texto;
        console.log(texto);
    });
});