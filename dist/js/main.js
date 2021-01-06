//Menu Toggle
//Select DOM elements
const menu = document.querySelector( '.menu' );
const menuBtn = document.querySelector( '.menu-btn' );
const menuNav = document.querySelector( '.menu-nav' );
const menuBd = document.querySelector( '.menu-branding' );
const navItems = document.querySelectorAll( '.nav-item' );

//Set Overlay State of Menu

let showMenu = false;

menuBtn.addEventListener( 'click', toggleMenu );
function toggleMenu ()
{
    if ( !showMenu )
    {
        menuBtn.classList.add( 'close' );
        menu.classList.add( 'show' );
        menuNav.classList.add( 'show' );
        menuBd.classList.add( 'show' );
        navItems.forEach( item => item.classList.add( 'show' ) );
        showMenu = true;
    } else
    {
        menuBtn.classList.remove( 'close' );
        menu.classList.remove( 'show' );
        menuNav.classList.remove( 'show' );
        menuBd.classList.remove( 'show' );
        navItems.forEach( item => item.classList.remove( 'show' ) );
        showMenu = false;
    }

}