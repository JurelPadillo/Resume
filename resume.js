var currentSection = 1;

        function nextSection() {
            var currentSectionElement = document.getElementById('section' + currentSection);
            currentSectionElement.classList.remove('active');
            
            currentSection++;
            if (currentSection > 4) {
                currentSection = 1;
            }

            var nextSectionElement = document.getElementById('section' + currentSection);
            nextSectionElement.classList.add('active');
          }
var currentSection = 1;

        function prevSection() {
            var currentSectionElement = document.getElementById('section' + currentSection);
            currentSectionElement.classList.remove('active');
            
            currentSection++;
            if (currentSection < 4) {
                currentSection = 1;
            }

            var nextSectionElement = document.getElementById('section' + currentSection);
            nextSectionElement.classList.add('active');
          }


        