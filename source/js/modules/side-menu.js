const burgerSideMenu = document.querySelector('[data-burger-side-menu]');
const burgerHeader = document.querySelector('[data-burger-header]');
const searchButton = document.querySelector('[data-search-side-menu]');
const searchInput = searchButton.querySelector('[data-search-side-menu-input]');
const navMenu = document.querySelector('[data-side-menu]');
const body = document.querySelector('body');

export const sideMenu = () => {
    if (burgerSideMenu && searchInput) {
        let isOpen = false;

        const openMenu = () => {
            navMenu.classList.add('active');
            burgerSideMenu.classList.add('active');
            body.classList.add('no-scroll');
            isOpen = true;
        };

        const closeMenu = () => {
            navMenu.classList.remove('active');
            burgerSideMenu.classList.remove('active');
            body.classList.remove('no-scroll');
            isOpen = false;
        };

        burgerSideMenu.addEventListener('click', () => {
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        document.body.clientWidth > 768 && searchButton.addEventListener('click', () => {
            if (!isOpen) {
                openMenu();
                searchInput.focus();
            }
        });

        navMenu.addEventListener('click', (evt) => {
            if (evt.target.closest('.side-menu_wrapper') && isOpen) {
                return;
            }
            closeMenu();
        });

        burgerHeader.addEventListener('click', () => {
            if (isOpen) {
                burgerHeader.classList.remove('active');
                closeMenu();
            } else {
                burgerHeader.classList.add('active');
                openMenu();
            }
        });
    }
};
