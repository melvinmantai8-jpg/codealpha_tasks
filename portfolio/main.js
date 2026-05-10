

$(document).ready(function($){
	"use strict"
	
	//Scroll Spy =============>		
		$('body').scrollspy({ target: '.navbar' })
	//smoothScroll
		smoothScroll.init();


	// Sticky Nav==========>
     	 $(".menu").sticky({ topSpacing: 0 });

	
  	// cursor effect =================== >>>
		new kursor({
		type: 1,
		color: "#121111"
		});


	// header parallax effect =================== >>>
	$(document).ready(function(){
		$('.parallax--bg').parallaxie({
			speed: 1.1,
			offset: 0,
			positionX: 0
		});
	});


	// typed =============>
		var typed = new Typed('.type', {
			strings: ['Social Media Management',
			'Web Design',
			'Google Ads',
			'Website SEO',
			'Canva Design'],
			typeSpeed: 70,
			backSpeed: 70,
			backDelay: 300,
			startDelay: 1000,
			loop:true
		});
	  

	// HEADER-img ========= >>
	  // HEADER-img ========= >>
const headerImg = document.querySelector(".header-img");

if (headerImg) {
    VanillaTilt.init(headerImg, {
        max: 5,
        speed: 400
    });
}
	//jQuery Counter =============>
		$('.counter').counterUp({
			time : 3000
		});


	// Isotope Gallery =============>

		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			columnWidth : '.grid-item'
		  }
		});

		var filterFns = {
		  numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt( number, 10 ) > 50;
		  },

		  ium: function() {
			var name = $(this).find('.name').text();
			return name.match( /ium$/ );
		  }
		};

		$('.filters-button-group').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  filterValue = filterFns[ filterValue ] || filterValue;
		  $grid.isotope({ filter: filterValue });
		});

		$('.button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		  });
		});

		
	//======== Slider ===============    
		$('.testumonial-slider').owlCarousel({
			margin:20,
			nav:true,
			dots:false,
			autoplay:true,
			autoplayTimeout: 8000,
			autoplayHoverPause: true,
			autoplaySpeed: 1000,
			pauseOnHover: true,
			loop:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
			responsive:{
				0:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})
		
		
	//*====  preloader js =====*/
		setTimeout(function() {
			$('body').addClass('loaded');
		}, 500);
		

	// Aos animation js ============= >>
		AOS.init({
			offset: 130,
			duration: 800
		});


	// success massage ============= >>
		document.getElementById("contactForm").addEventListener("submit", function(e) {
			e.preventDefault();

			document.getElementById("success-message").style.display = "block";

			this.reset();
		});

});

// Close the navbar when a link is clicked =====> 
	document.addEventListener("DOMContentLoaded", function () {
		var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
		var navbarCollapse = document.querySelector('.navbar-collapse');
		navLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				if (navbarCollapse.classList.contains('show')) {
					$('.navbar-collapse').collapse('hide');
				}
			});
		});
	});