var line1 = document.getElementById('line1')
var line2 = document.getElementById('line2')
var line3 = document.getElementById('line3')
function check() {
    if (document.getElementById('check').checked) {
        line1.style.cssText = 'all: none;'
        line2.style.cssText = 'all: none;'
        line3.style.cssText = 'all: none;'
    } else {
        line1.style.cssText = 'transform: rotate(-45deg) translate(-8px, 8px);'
        line2.style.cssText = 'opacity: 0;'
        line3.style.cssText = 'transform: rotate(45deg) translate(-5px, -7px);'
    }

}

$(document).ready(function () {
    $('#procedureslightSlider').lightSlider({
        auto: true,
        item: 3,
        loop: true,
        slideMove: 1,
        pause: 2500,
        speed: 800,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
    $('#testimonialsLightSlider').lightSlider({
        auto: true,
        item: 1,
        loop: true,
        slideMove: 1,
        pause: 5000,
        speed: 800,
        pauseOnHover: true,
    });
});
