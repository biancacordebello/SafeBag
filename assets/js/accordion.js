// Evento de clique no botão para redirecionar
document.querySelectorAll('.id-mala').forEach(header => {
  header.addEventListener('click', () => {
    const url = header.getAttribute('data-url');
    if (url) {
      window.location.href = url;
    }
  });
});

// Evento de clique para expandir/colapsar o conteúdo
document.querySelectorAll('.info-mala-container').forEach(container => {
  container.addEventListener('click', () => {
    const info = container.querySelector('.info-mala');
    container.classList.toggle('active');
    if (container.classList.contains('active')) {
      info.style.maxHeight = info.scrollHeight + 'px';
    } else {
      info.style.maxHeight = 0;
    }
  });
});
