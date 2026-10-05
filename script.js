const cartButtons = document.querySelectorAll('.cart');
cartButtons.forEach(cart => {
    cart.addEventListener('click', (e) => {
        e.preventDefault(); 
        alert("Add to cart this product");
    });
});
const signUpBtn = document.querySelector('#newsletter button');
const emailInput = document.querySelector('#newsletter input');

if (signUpBtn) {
    signUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(emailInput.value === '') {
            alert("Enter Your email address first ");
        } else {
            alert(`try aging  ${emailInput.value} to sign up for newsletter`);
            emailInput.value = '';
        }
    });
}
const heroBtn = document.querySelector('#hero button');
if (heroBtn) {
    heroBtn.addEventListener('click', () => {
        alert("You clicked on the hero button");
    });
}
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

