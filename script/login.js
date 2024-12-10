

function verifyLogin() {
    const button = document.querySelector('#lbutton');
    const idInput = document.querySelector('#uid');
    const passInput = document.querySelector('#pword');
    if (idInput.value == 'alex' && passInput.value == '1234') {
        window.open('main.html');
        return;
    }
    alert('Wrong User Information, do it again bitch');
}

button.addEventListener(onclick, verifyLogin());
