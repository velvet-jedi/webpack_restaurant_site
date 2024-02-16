import initializePage from "./pageLoad";
import './style.css';

// const bg_images = [
//     {
//         URI: require('./images/top-left.png'),
//     },
//     {
//         URI: require('./images/top-right.png'),
//     },
//     {
//         URI: require('./images/bottom-left.png'),
//     },
//     {
//         URI: require('./images/bottom-right.png'),
//     }
// ]

// const dir_array = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

document.addEventListener('DOMContentLoaded', () => {
    
    initializePage();

    // // const bg = document.createElement('div');
    // // bg.className = 'bg';

    // // bg_images.forEach((bgImage, index) => {
    // //     const imgElement = document.createElement(`img`);
    // //     if (imgElement) {
    // //         imgElement.src = bgImage.URI;
    // //         imgElement.classList.add(dir_array[index]);
    // //         bg.appendChild(imgElement);
    // //     }
    // // });

    // document.body.appendChild(bg);

});