document.addEventListener("DOMContentLoaded", function () {
    function scrollToElement(elementClass) {
        var list = document.getElementsByClassName(elementClass);
        if (list.length > 0) {
            list.item(0).scrollIntoView({ behavior: 'smooth' });
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    var logoLink = document.querySelector('.logo_img');
    var contactLink = document.querySelector('.text-wrapper-2');
    var wantEshopLink = document.querySelector('.text-wrapper, .text-wrapper-5, .rectangle-2');
    var benefitLink = document.querySelector('.text-wrapper-3');
    var dropShippingLink = document.querySelector('.text-wrapper-4');
    
    logoLink.addEventListener('click', scrollToTop);
    contactLink.addEventListener('click', function () { scrollToElement('text-contact-wrapper'); });
    wantEshopLink.addEventListener('click', function () { scrollToElement('text-wrapper-24'); });
    benefitLink.addEventListener('click', function () { scrollToElement('text-wrapper-8'); });
    dropShippingLink.addEventListener('click', function () { scrollToElement('text-wrapper-7'); });
});
