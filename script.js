// Seleciona elementos
const toggleBtn = document.getElementById('toggleBtn');
const description = document.getElementById('description');

// Adiciona funcionalidade de mostrar/ocultar descrição
toggleBtn.addEventListener('click', () => {
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
});