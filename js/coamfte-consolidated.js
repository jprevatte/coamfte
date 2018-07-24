
/*=== WRAP CONTENT IN DIV FOR FAQ COLLAPSE ===*/
jQuery(document).ready(function() {
	jQuery('.faq .ContentItemContainer').each(function(){
		jQuery(this).find('.ContentItemButtonPanel').remove();
		jQuery(this).find('h2').removeAttr('style').prependTo(this);
		jQuery(this).children('*:not(h2)').wrapAll('<div class="toggle-content"></div>');
		jQuery(this).find('h2').addClass('toggler');
	});
});
/*=== WRAP CONTENT IN DIV FOR ACCREDITATION PROCESS AT A GLANCE ===*/
jQuery(document).ready(function() {
	jQuery('.acrp .ContentItemContainer > div').each(function(){
		jQuery(this).find('.ContentItemButtonPanel').remove();
		jQuery(this).find('h2').removeAttr('style').prependTo(this);
		jQuery(this).children('*:not(h2)').wrapAll('<div class="toggle-content"></div>');
		jQuery(this).find('h2').addClass('toggler');
	});
});
/*=== EXPAND AND COLLAPSE CONTENT ====*/
jQuery(document).ready(function() {
	jQuery('.toggler').on('click', function(event) {
	    event.stopPropagation();
	    event.preventDefault();
		jQuery(this).toggleClass('open');
		jQuery(this).closest('.ContentItemContainer').find('div.toggle-content').slideToggle();
  });
});