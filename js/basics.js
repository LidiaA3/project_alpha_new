// Funcionamiento menu mobile //
const toggle_button = document.querySelector('#js-button-toggle');
const menu = document.querySelector('#js-id-menu');
const tz_toggle = document.querySelector('#js-open-menu');
const tz_blade = document.querySelector('#js-close-menu');

function toggle_menu () {
    menu.classList.toggle('menu--hidden');
    tz_toggle.classList.toggle('display-none');
    tz_blade.classList.toggle('display-none');
}

toggle_button.addEventListener ('click', toggle_menu);


// Funcionamiento mostrar/ocultar modal //
const intro = document.querySelector('#js-intro-container');
intro.style.display = 'flex';

const body = document.querySelector('body');
body.style.overflowY = 'hidden';

function introDisplayNone () {
    intro.style.display = 'none';
    toggle_button.style.stroke = 'var(--accent-color)';
    body.style.overflowY = 'scroll';
    menu.style.color = 'var(--accent-color)';
    menu.style.background = 'var(--bg-color-menu)';
    window.addEventListener('scroll', 
        function() {
            const scrollPosition = window.scrollY;
            if (window.innerWidth < 750) {
                //mobile
                menu.style.top = 0;
            } else {
                //desktop
                if (intro.style.display === 'flex') {
                    menu.style.top = 0;
                } else {
                    if (window.scrollY > 30) {
                        menu.style.top = 0;
                    } else {
                        menu.style.top = '8rem';
                    }
                }
            }
    })
}

function menuA8Rem () {
    if (window.innerWidth < 750) {
        menu.style.top = 0;
    } else {
        if (intro.style.display === 'flex') {
            menu.style.top = 0;
        } else {
            menu.style.top = '8rem';
        }
    }
}

function introDisplayFlex () {
    intro.style.display = 'flex';
    menu.style.top = 0;
    toggle_button.style.stroke = '#faf5f4';
    body.style.overflowY = 'hidden';
    menu.style.color = '#faf5f4';
    if (window.innerWidth > 750) {
        menu.style.background = 'transparent';
    }
}


// Funcionamiento theme switch //
function theme_mode () {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}


// Reposicionamiento del menú al escalar la ventana //
window.addEventListener('resize',
    function() {
        if (window.innerWidth < 750) {
            //mobile
            menu.style.top = 0;
            menu.style.background = 'var(--bg-color-menu)';
            } else {
                //desktop
                if (intro.style.display === 'flex') {
                    menu.style.top = 0;
                    menu.style.background = 'transparent';
                } else {
                    menu.style.background = 'var(--bg-color-menu)';
                    if (window.scrollY > 30) {
                        menu.style.top = 0;
                    } else {
                        menu.style.top = '8rem';
                    }
                }
            }
    })

