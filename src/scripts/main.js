document.addEventListener('DOMContentLoaded',()=> {
    document.getElementById('form-sorteador').addEventListener('submit', (evento) => {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = Number.parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerHTML = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})