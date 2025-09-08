// Script único para mostrar información y adaptar el cuadro en móviles

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.producto-card').forEach(function(card) {
        var btn = card.querySelector('.btn-success');
        var info = card.querySelector('p');
        if(btn && info) {
            info.style.display = 'none';
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                var isMobile = window.matchMedia('(max-width: 700px)').matches;
                if(info.style.display === 'none') {
                    info.style.display = 'block';
                    btn.textContent = 'Ver menos';
                    if(isMobile) {
                        info.style.maxWidth = '88vw';
                        info.style.margin = '0 auto';
                        info.style.padding = '8px';
                        info.style.borderRadius = '12px';
                        info.style.background = 'rgba(255,255,255,0.95)';
                        info.style.boxShadow = '0 2px 10px rgba(0,0,0,0.10)';
                    } else {
                        info.style.maxWidth = '';
                        info.style.margin = '';
                        info.style.padding = '';
                        info.style.borderRadius = '';
                        info.style.background = '';
                        info.style.boxShadow = '';
                    }
                } else {
                    info.style.display = 'none';
                    btn.textContent = 'Ver más';
                }
            });
        }
    });
});
