export default function initializePage() {
    const contentDiv = document.getElementById('content');

    const aboutContentDiv = document.getElementById('about-content');

    const contactContentDiv = document.getElementById('contact-content');

    if (contentDiv) {
        
    }


    const slides = [
        {
            imgSrc: require('./images/hot_dog.png'),
            title: 'HOT DOG',
            description: 'Savor the simplicity of our classic hot dog! Imagine a perfectly grilled sausage in a warm bun, adorned with mustard, ketchup, and diced onions. Every bite is a delightful explosion of smoky goodness—a quick and delicious treat for any occasion!'
        },
        {
            imgSrc: require("./images/pizza.png"),
            title: "PIZZA",
            description: 'Savor pizza perfection with our irresistible masterpiece! Picture a golden, crispy crust, rich tomato sauce, premium mozzarella, and a symphony of toppings. Each bite, topped with Parmesan and fresh basil, is a celebration of flavors. Perfect for sharing or solo indulgence, our pizza is pure culinary bliss in every slice!'
        },
        {
            imgSrc: require("./images/fries.png"),
            title: 'FRENCH FRIES',
            description: "Indulge in crispy perfection with our irresistible French fries! Picture golden batons of potatoes, perfectly seasoned and fried to a golden crisp. Each bite delivers a satisfying crunch, revealing a fluffy interior that melts in your mouth. Whether enjoyed solo or paired with your favorite dipping sauce, our French fries are the ultimate sidekick for a snack that's simply irresistible!"
        },
        {
            imgSrc: require('./images/burger.png'),
            title: 'BURGER',
            description: "Indulge in burger bliss with our delectable masterpiece! Imagine a succulent, flame-grilled patty nestled in a soft, toasted bun, adorned with crisp lettuce, juicy tomatoes, and zesty pickles. Topped with creamy mayo and our secret sauce, each bite is a burst of flavor perfection. Whether you're sharing or savoring solo, our burger is a culinary delight that promises satisfaction in every mouthwatering bite!"
        },
    ]



    const slidesContainer = document.createElement('div');

    slides.forEach((slide) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');

        const image = document.createElement('img');
        image.src = slide.imgSrc;
        image.alt = slide.title;
        image.classList.add('food-img');

        const textDiv = document.createElement('div');
        textDiv.classList.add('text');

        const title = document.createElement('h1');
        title.textContent = slide.title;

        const description = document.createElement('p');
        description.textContent = slide.description;


        const bar = document.createElement('hr');
        textDiv.appendChild(title);

        textDiv.appendChild(bar);

        textDiv.appendChild(description);

        slideDiv.appendChild(image);
        slideDiv.appendChild(textDiv);

        slidesContainer.appendChild(slideDiv);

    });

    contentDiv.appendChild(slidesContainer);
    slidesContainer.classList.add('slidesContainer');

    const slideImage = () => {
        slidEs.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        })
    }

    const goNext = () => {
        counter = (counter + 1) % slides.length; 
        slideImage();
    }

    const goPrev = () => {
        counter = (counter - 1 + slides.length) % slides.length;
        slideImage();
    }

    


    const prevBtn = document.createElement('button');
    prevBtn.textContent = '<';
    prevBtn.id = 'prev-btn';
    prevBtn.onclick = goPrev;

    slidesContainer.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '>';
    nextBtn.id = 'next-btn';
    nextBtn.onclick = goNext;

    slidesContainer.appendChild(nextBtn);

    // console.log(slidesContainer);

    const slidEs = document.querySelectorAll('.slide');
    var counter = 0;
    slidEs.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    })


    


}