function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}


 function togleDropdown() {
  const dropdownContent = document.querySelector(".custom-dropdown-content");
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}



function dismissContent() {
  var dismissElement = document.getElementById("dismiss");
  var dismissBack = document.getElementById('dismissed');
  dismissElement.parentNode.removeChild(dismissElement);
  dismissBack.parentNode.removeChild(dismissBack);
}

document.addEventListener('DOMContentLoaded', function() {
  const collapseSection = document.getElementById('collapse');
  const chevronIcon = document.getElementById('chevron');

  chevronIcon.addEventListener('click', function () {
      const isCollapsed = collapseSection.classList.contains('collapsed');

      if (isCollapsed) {
     
          collapseSection.style.maxHeight = collapseSection.scrollHeight + 'px';
      } else {
       
          collapseSection.style.maxHeight = 0;
      }

    
      collapseSection.classList.toggle('collapsed');

     
      chevronIcon.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});


const rotatedStates = Array.from({ length: 5 }, () => false);

function rotateSVG(index) {
  const boot = document.querySelector(`.boot[data-index="${index}"]`);
  rotatedStates[index] = !rotatedStates[index];

  if (rotatedStates[index]) {
    boot.classList.add('rotated');
    playSequence(boot, index);
  } else {
    boot.classList.remove('rotated');
    resetToDefault(boot);
  }
}

function playSequence(boot, index) {
  const delay = 300;
const svgSequence = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none"><path d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none"><path d="M2 14C2 11.6266 2.70379 9.30655 4.02236 7.33316C5.34094 5.35977 7.21509 3.8217 9.4078 2.91345C11.6005 2.00519 14.0133 1.76755 16.3411 2.23058C18.6689 2.6936 20.8071 3.83649 22.4853 5.51472C24.1635 7.19295 25.3064 9.33114 25.7694 11.6589C26.2324 13.9867 25.9948 16.3995 25.0866 18.5922C24.1783 20.7849 22.6402 22.6591 20.6668 23.9776C18.6935 25.2962 16.3734 26 14 26"stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M13.2803 9.03033C13.5732 8.73744 13.5732 8.26256 13.2803 7.96967C12.9874 7.67678 12.5126 7.67678 12.2197 7.96967L9.25 10.9393L8.03033 9.71967C7.73744 9.42678 7.26256 9.42678 6.96967 9.71967C6.67678 10.0126 6.67678 10.4874 6.96967 10.7803L8.71967 12.5303C9.01256 12.8232 9.48744 12.8232 9.78033 12.5303L13.2803 9.03033Z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10Z" fill="#000"/></svg>',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#303030"></circle><path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z" fill="#fff"/></svg>',
];

  for (let i = 0; i < svgSequence.length; i++) {
    setTimeout(() => {
      boot.innerHTML = svgSequence[i];
    }, i * delay);
  }
}

function resetToDefault(boot) {
  boot.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#8A8A8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
    </svg>`;
}

// Adding click event listeners to each boot element
const boots = document.querySelectorAll('.boot');
boots.forEach((boot, index) => {
  boot.addEventListener('click', () => {
    rotateSVG(index + 1); // Index is 0-based, but your SVGs are 1-based
  });
});



  document.addEventListener('DOMContentLoaded', function() {
    let completedSections = 0;

    function updateProgressBar() {
        const rangeLabel = document.getElementById('range-label');
        const rangeInput = document.getElementById('range');
        
        rangeLabel.textContent = `${completedSections}/5 completed`;

        rangeInput.value = completedSections;
    }

    function handleSectionClick() {
        if (this.classList.contains('ticked')) {
            this.classList.remove('ticked');
            completedSections--;
        } else {
            this.classList.add('ticked');
            completedSections++;
        }

        updateProgressBar();

    }

    const bootSections = document.querySelectorAll('.boot');
    bootSections.forEach(section => {
        section.addEventListener('click', handleSectionClick);
    });

    const collapseSection = document.getElementById('collapse');
    collapseSection.style.transition = 'max-height 0.5s ease-in-out';
});

   function updateProgress() {
      const progressInput = document.getElementById('progressInput');
      
      const progressValue = progressInput.value;
      
      const progressBar = document.getElementById('progress');
      
      progressBar.style.width = progressValue + '%';
    }