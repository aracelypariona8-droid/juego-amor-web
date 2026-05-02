function calcular() {
    let n1 = document.getElementById("nombre1").value;
    let n2 = document.getElementById("nombre2").value;

    if (n1 === "" || n2 === "") {
        document.getElementById("resultado").innerText = "⚠️ Ingresa ambos nombres";
        return;
    }

    let porcentaje = Math.floor(Math.random() * 101);

    let mensaje = "";

    if (porcentaje > 80) {
        mensaje = "😍 ¡Son el uno para el otro!";
    } else if (porcentaje > 60) {
        mensaje = "😊 Hay química...";
    } else if (porcentaje > 40) {
        mensaje = "😐 Puede funcionar...";
    } else {
        mensaje = "💔 Mejor como amigos...";
    }

    document.getElementById("resultado").innerText =
        `💘 ${n1} + ${n2} = ${porcentaje}%\n${mensaje}`;
}