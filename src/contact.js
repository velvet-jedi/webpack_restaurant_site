// contact.js
import './style.css';

function initializeContactPage() {
    const contactContentDiv = document.querySelector('.contact-content');

    const containerDiv = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = "CONTACT US";
    h1.style.color = 'yellow';
    

    const contactForm = `
        <form>
            <fieldset id="row1">
                <label for="first-name"></label>
                <input type="text" required id="first-name" placeholder="First name"/>
                <label for="last-name"></label>
                <input type="text" required id="last-name" placeholder="Last name"/>
            </fieldset>

            <fieldset id="row2">
                <label for="phone"></label>
                <input type="text" pattern="(7|8|9)\d{9}" required id="phone" placeholder="Phone number"/>
                <label for="email"></label>
                <input type="email" required id="email" placeholder="Email"/>
            </fieldset>

            <label for="description"></label>
            <textarea type="text" required id="description" placeholder="Subject"></textarea>

            <fieldset id="row-btn">
                <button type="submit">Send</button>
                <button type="reset">Reset form</button>
            </fieldset>

        </form>
    `;

    contactContentDiv.appendChild(h1);
    containerDiv.innerHTML = contactForm;
    contactContentDiv.appendChild(containerDiv);

}

document.addEventListener('DOMContentLoaded', () => {
    initializeContactPage();
})
    
    
