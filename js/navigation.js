// ===== NAVEGAÇÃO =====
function showSection(sectionId) {
    // Ocultar todas as seções
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar seção selecionada
    document.getElementById(sectionId).classList.add('active');

    // Atualizar botões de navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Parar qualquer áudio tocando
    if (typeof pauseAudio === 'function') {
        pauseAudio();
    }

    // Rolar para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== MENU HAMBÚRGUER MOBILE =====
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (nav) {
        nav.classList.toggle('active');
        
        // Atualizar ícone do botão
        if (menuBtn) {
            menuBtn.textContent = nav.classList.contains('active') ? '✕' : '☰';
        }
    }
}

// Fechar menu ao clicar em um link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.getElementById('mainNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                if (menuBtn) {
                    menuBtn.textContent = '☰';
                }
            }
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav && nav.contains(event.target);
        const isClickOnMenuBtn = menuBtn && menuBtn.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnMenuBtn && nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (menuBtn) {
                menuBtn.textContent = '☰';
            }
        }
    });
});
