function openModal(element) {
    // Zkontroluje, zda kliknutí nebylo na odkaz projektu
    if (event.target.classList.contains('project-link')) {
        return; // Neotevře modální okno
    }

    var title = element.querySelector('h3').innerHTML;
    var fullText = element.querySelector('.full-text').innerHTML;

    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalBody').innerHTML = fullText;

    document.getElementById('myModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeModalOutside(event) {
    if (event.target.id === 'myModal') closeModal();
}

// --- SCROLL ANIMACE ---
function checkScroll() {
    const elements = document.querySelectorAll('.card-wrapper, .semester-label');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Element je viditelný, když je v dolní části obrazovky
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Spustit při načtení stránky
window.addEventListener('load', checkScroll);

// Spustit při scrollování
window.addEventListener('scroll', checkScroll);