// Script untuk menampilkan tanggal hari ini secara otomatis
document.addEventListener('DOMContentLoaded', () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const tanggalElemen = document.getElementById('tanggal');
    if (tanggalElemen) {
      tanggalElemen.textContent = new Date().toLocaleDateString('id-ID', options);
    }

    // Handle image hover effects
    const homeIcon = document.querySelector('img[alt="Home"]');
    const htmlIcon = document.querySelector('.html-icon');

    if (homeIcon) {
      const homeSrc = homeIcon.src;
      const homeHoverSrc = homeSrc.replace('home.png', 'homeon.png');
      
      homeIcon.addEventListener('mouseenter', () => {
        homeIcon.src = homeHoverSrc;
      });
      
      homeIcon.addEventListener('mouseleave', () => {
        homeIcon.src = homeSrc;
      });
    }

    if (htmlIcon) {
      const htmlSrc = htmlIcon.src;
      const htmlHoverSrc = htmlSrc.replace('html5.png', 'htmlon.png');
      
      htmlIcon.addEventListener('mouseenter', () => {
        htmlIcon.src = htmlHoverSrc;
      });
      
      htmlIcon.addEventListener('mouseleave', () => {
        htmlIcon.src = htmlSrc;
      });
    }
  });