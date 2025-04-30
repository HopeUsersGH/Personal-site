document.addEventListener('DOMContentLoaded', function() {
    
    const menuLinks = document.querySelectorAll('.header__menu-link');
    function changeColorMenu() {
        let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        menuLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if(section) {
                const sectionTop = section.offsetTop - 130;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });

        if (scrollPosition + windowHeight >= documentHeight) {
            menuLinks.forEach(link => link.classList.remove('active'));
            menuLinks[menuLinks.length - 1].classList.add('active');
        }

    };
    document.addEventListener('scroll', changeColorMenu)
    changeColorMenu();

    const verticalMenuLinks = document.querySelectorAll('.header__vertical-menu-link');
    function changeColorVerticalMenu() {
        let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        verticalMenuLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if(section) {
                const sectionTop = section.offsetTop - 130;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });

        if (scrollPosition + windowHeight >= documentHeight) {
            verticalMenuLinks.forEach(link => link.classList.remove('active'));
            verticalMenuLinks[verticalMenuLinks.length - 1].classList.add('active');
        }

    };
    document.addEventListener('scroll', changeColorVerticalMenu)
    changeColorVerticalMenu();
});