const cookieNotice = document.querySelector('#cookie-notice');
const acceptBtn = document.querySelector('#accept-btn');
const declineBtn = document.querySelector('#decline-btn');


const displayCookie = () => {
    const displayNotice = localStorage.getItem('cookie-notice-displayed');

    if (displayNotice === 'true') return false
    return true;
}

if(displayCookie()) {
    cookieNotice.classList.remove('hidden');
}

// gdy zakceptuje oplitykę prywatnosci
acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookie-notice-displayed', true);
    cookieNotice.classList.add('hidden');
});

// gdy NIE zakceptuje oplitykę prywatnosci
declineBtn.addEventListener('click', () => {
    window.location.replace('https://www.google.pl');
})

console.log("działa");