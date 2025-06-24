function mostrarMensagem() {
    document.getElementById('mensagem').style.display = 'block';
    soltarConfete();
}

function soltarConfete() {
    for (let i = 0; i < 80; i++) {
        let confete = document.createElement('div');
        confete.classList.add('confete');
        confete.style.left = Math.random() * window.innerWidth + 'px';
        confete.style.backgroundColor = 'hsl(' + Math.random() * 360 + ', 100%, 70%)';
        document.body.appendChild(confete);
        setTimeout(() => { confete.remove(); }, 5000);
    }
}
