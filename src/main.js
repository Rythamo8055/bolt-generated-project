document.querySelectorAll('.nav-buttons button, .deployment-buttons button, .hero-buttons button').forEach(button => {
      button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
          this.classList.remove('clicked');
        }, 200);
      });
    });

    const cloudButton = document.querySelector('.cloud-button');
    const localButton = document.querySelector('.local-button');
    const guideContainer = document.querySelector('.guide-container');
    const projectIdxGuide = document.querySelector('.project-idx-guide');
    const resourcesSection = document.querySelector('.resources-section');

    function checkVisibility() {
      if (guideContainer.style.display === 'none' && projectIdxGuide.style.display === 'none') {
        resourcesSection.style.display = 'block';
      } else {
        resourcesSection.style.display = 'none';
      }
    }

    checkVisibility();

    cloudButton.addEventListener('click', () => {
      if (guideContainer.style.display === 'none') {
        guideContainer.style.display = 'block';
        projectIdxGuide.style.display = 'none';
        resourcesSection.style.display = 'none';
      } else {
        guideContainer.style.display = 'none';
        resourcesSection.style.display = 'none';
      }
    });

    localButton.addEventListener('click', () => {
      if (projectIdxGuide.style.display === 'none') {
        projectIdxGuide.style.display = 'block';
        guideContainer.style.display = 'none';
        resourcesSection.style.display = 'none';
      } else {
        projectIdxGuide.style.display = 'none';
        resourcesSection.style.display = 'none';
      }
    });
