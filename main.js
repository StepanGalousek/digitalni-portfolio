function openModal(element) {
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

// --- SCROLL ANIMACE PRO KARTY ---
function checkCardScroll() {
    const elements = document.querySelectorAll('.card-wrapper, .semester-label');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// --- OTÁČENÍ FOTKY PŘI PRVNÍM SCROLLU ---
let hasFlippedOnScroll = false; // Příznak, aby se animace spustila jen jednou

function handleFirstScroll() {
    // Spustí se pouze jednou, pokud uživatel začal rolovat a animace ještě neproběhla
    if (window.scrollY > 50 && !hasFlippedOnScroll) {
        const photoContainer = document.querySelector('.profile-pic-container');
        
        if (photoContainer) {
            hasFlippedOnScroll = true; // Označíme, že animace proběhla

            // Přidáme třídu pro otočení
            photoContainer.classList.add('flipped');

            // Po 2.5 sekundách fotku otočíme zpět, aby fungoval hover
            setTimeout(() => {
                photoContainer.classList.remove('flipped');
            }, 2500);
            
            // Odstraníme tento posluchač, aby se už nespouštěl
            window.removeEventListener('scroll', handleFirstScroll);
        }
    }
}


// --- INICIALIZACE POSLUCHAČŮ ---

// Spustit animace karet při načtení a scrollování
window.addEventListener('load', checkCardScroll);
window.addEventListener('scroll', checkCardScroll);

// Spustit animaci fotky při prvním scrollu
window.addEventListener('scroll', handleFirstScroll);
