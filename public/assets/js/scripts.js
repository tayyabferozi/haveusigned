/**
 * @name _common
 * @function handle scroling
 * @function initial parallax, tooltip, carousel, etc
 */

var $header = $('header.header.app-bar');
var $pageNav = $("#page_nav");
var sticky = 0;

// Sticky header
if($("#header").length > 0) {
  sticky = $header[0].offsetTop + 80;
}

function fixedNav() {
  if (window.pageYOffset > sticky) {
    $header.addClass("fixed");
  } else {
    $header.removeClass("fixed");
  }
}

// Bottom right navigation,
function fixedFabNav() {
  if (window.pageYOffset > 500) {
    $pageNav.addClass("show");
  } else {
    $pageNav.removeClass("show");
  }
}

/**
 * @name Feature Progress
 * @function handle progress on scroll window
 */



$(document).ready(function(){
  // Fixed nav
  setTimeout(function() {
    window.onscroll = function() {
      fixedNav();
      fixedFabNav();
    };
  }, 500);
  // initial wow
  new WOW().init();
});


var $header = $('#header'),
    $menu = $('#mobile_menu'),
    $slideMenu = $('#slide-menu'),
    isOpen = false,
    isOpenHamburger = false;

$(document).ready(function(){
  // initial dropdown
  $('.dropdown-trigger').dropdown({
    closeOnClick: false,
    alignment: 'left'
  });

  // Dropdown list hover
  $('.droplist-trigger-hover').dropdown({
    closeOnClick: false,
    alignment: 'left',
    hover: true,
    coverTrigger: false,
  });

  $('.droplist-trigger-hover-child').dropdown({
    closeOnClick: false,
    alignment: 'right',
    hover: true,
    onOpenStart: function(elem) {
      var sibling = $(elem).parent().siblings().find('.droplist-trigger-hover-child');
      for(var i=0; i<sibling.length; i++) {
        M.Dropdown.getInstance(sibling[i]).close();
      }
    }
  });

  // Dropdown list click
  $('.droplist-trigger-click').dropdown({
    closeOnClick: false,
    alignment: 'left',
    coverTrigger: false,
  });

  $('.droplist-trigger-click-child').dropdown({
    closeOnClick: false,
    alignment: 'right',
    onOpenStart: function(elem) {
      var sibling = $(elem).parent().siblings().find('.droplist-trigger-click-child');
      for(var i=0; i<sibling.length; i++) {
        M.Dropdown.getInstance(sibling[i]).close();
      }
    }
  });

  // Initial sidenav for mobile menu
  $('#mobile_menu').click(function() {
    isOpen = !isOpen;
    if(isOpen) {
      $('.sidenav').sidenav('open')  
    } else {
      $('.sidenav').sidenav('close');
      return false;
    }
  });

  // Hamburger menu
  function openMenu() {
    $('#main_menu').fadeIn();
    $header.addClass('open-drawer');
    $menu.addClass('is-active');
    $slideMenu.addClass('menu-open');
  }

  function closeMenu() {
    $('#main_menu').fadeOut();
    $header.removeClass('open-drawer');
    $menu.removeClass('is-active');
    $slideMenu.removeClass('menu-open');
  }

  $('#hamburger_menu').click(function() {
    isOpenHamburger = !isOpenHamburger;
    if(isOpenHamburger) {
      openMenu();
      $(this).addClass('is-active');
    } else {
      closeMenu();
      $(this).removeClass('is-active');
    }
  });
  
  $('#main_menu a').click(function() {
    closeMenu();
    isOpenHamburger = false;
  })

  // SideNav
  $('.sidenav').sidenav({
    onOpenStart: function() {
      isOpen = true;
      $header.addClass('open-drawer');
      $menu.addClass('is-active');
      $slideMenu.addClass('menu-open');
    },
    onCloseEnd: function() {
      isOpen = false;
      $header.removeClass('open-drawer');
      $menu.removeClass('is-active');
      $slideMenu.removeClass('menu-open');
    }
  });
});
