// Script para mostrar información al hacer click en "Ver más" en productos

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.producto-card').forEach(function(card) {
        var btn = card.querySelector('.btn-success');
        var info = card.querySelector('p');
        if(btn && info) {
            info.style.display = 'none';
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if(info.style.display === 'none') {
                    info.style.display = 'block';
                    btn.textContent = 'Ver menos';
                } else {
                    info.style.display = 'none';
                    btn.textContent = 'Ver más';
                }
            });
        }
    });
});
