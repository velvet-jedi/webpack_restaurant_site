export default function initializePage() {
    const contentDiv = document.getElementById('content');

    const slides = [
        {
            imgSrc: "https://apheiro.github.io/restaurant_page/41419795e2a2ad3f83b6.png",
            title: "PIZZA",
            description: 'Savor pizza perfection with our irresistible masterpiece! Picture a golden, crispy crust, rich tomato sauce, premium mozzarella, and a symphony of toppings. Each bite, topped with Parmesan and fresh basil, is a celebration of flavors. Perfect for sharing or solo indulgence, our pizza is pure culinary bliss in every slice!'
        },
        {
            imgSrc: 'https://apheiro.github.io/restaurant_page/ae3c0fb9558fca9ffeea.png" alt="Hamburger',
            title: 'BURGER',
            description: "Indulge in burger bliss with our delectable masterpiece! Imagine a succulent, flame-grilled patty nestled in a soft, toasted bun, adorned with crisp lettuce, juicy tomatoes, and zesty pickles. Topped with creamy mayo and our secret sauce, each bite is a burst of flavor perfection. Whether you're sharing or savoring solo, our burger is a culinary delight that promises satisfaction in every mouthwatering bite!"
        },
        {
            imgSrc: 'https://apheiro.github.io/restaurant_page/93420905b048d48e4c74.png',
            title: 'HOT DOG',
            description: 'Savor the simplicity of our classic hot dog! Imagine a perfectly grilled sausage in a warm bun, adorned with mustard, ketchup, and diced onions. Every bite is a delightful explosion of smoky goodness—a quick and delicious treat for any occasion!'
        },
        {
            imgSrc: "https://apheiro.github.io/restaurant_page/f231df94bf646111906f.png",
            title: 'FRENCH FRIES',
            description: "Indulge in crispy perfection with our irresistible French fries! Picture golden batons of potatoes, perfectly seasoned and fried to a golden crisp. Each bite delivers a satisfying crunch, revealing a fluffy interior that melts in your mouth. Whether enjoyed solo or paired with your favorite dipping sauce, our French fries are the ultimate sidekick for a snack that's simply irresistible!"
        }
    ]

    slides.forEach((slide) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');

        const image = document.createElement('img');
        image.src = slide.imgSrc;
        image.alt = slide.title;

        const textDiv = document.createElement('div');
        textDiv.classList.add('text');

        const title = document.createElement('h2');
        title.textContent = slide.title;

        const description = document.createElement('p');
        description.textContent = slide.description;


        textDiv.appendChild(title);
        textDiv.appendChild(description);

        slideDiv.appendChild(image);
        slideDiv.appendChild(textDiv);

        contentDiv.appendChild(slideDiv);
    });

    const prevArrow = document.createElement('button');
    prevArrow.classList.add('prev');
    prevArrow.innerHTML = '&larr;';
    prevArrow.onclick = function () {
        changeSlide(-1);
    };

    const nextArrow = document.createElement('button');
    nextArrow.classList.add('next');
    nextArrow.innerHTML = '&rarr;';
    nextArrow.onclick = function () {
        changeSlide(1);
    };

    // Append navigation arrows to the content
    contentDiv.appendChild(prevArrow);
    contentDiv.appendChild(nextArrow);

    
}