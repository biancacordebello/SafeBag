document.querySelectorAll('.id-mala').forEach(header => {
    header.addEventListener('click', () => {
      const info = header.nextElementSibling;
      header.classList.toggle('active');
      if (header.classList.contains('active')) {
        info.style.maxHeight = info.scrollHeight + 'px';
      } else {
        info.style.maxHeight = 0;
      }
    });
  });
  