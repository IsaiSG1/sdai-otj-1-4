function fadeIn(element, duration) {
    let opacity = 0; // Initial opacity
    element.style.opacity = 0;
    element.style.display ='block';
   
    const increment = 50 / duration; // Amount to increment opacity
   
    function increase() {
        opacity += increment;
        if (opacity <= 1) {
            element.style.opacity = opacity;
            requestAnimationFrame(increase);
        }
    }
    
    increase();
}

    document.addEventListener('DOMContentLoaded', function() {
        const heroImage = document.querySelector('.image-trailer');
        fadeIn(heroImage, 10000);
    });
//image-trailer //Class-Food truck icon
//menu //id-Dev Dish's quarterly menu
//favorites //class/The Developer's Favorites
//location //ID-Location 


//console.log("Hello World, did it actually work?");
