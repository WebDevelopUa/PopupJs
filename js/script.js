var modal = document.querySelector('.alert-modal');
var openButton = document.getElementById('openModalBtn');
var closeButton1 = document.querySelector('.close-btn');
var closeButton2 = document.querySelector('.default-btn');
var closeButton3 = document.querySelector('.red-btn');

function toggleModal() {
    modal.classList.toggle('show-modal');
}

// When the user clicks Uninstall button, closes modal and alert('DONE)
function uninstallBtnClick(event) {
    if (event.target === closeButton3) {
        toggleModal();
    }
    setTimeout(function () {
        alert('DONE');
    }, 500);
}

// When the user clicks anywhere outside of the modal, close it
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

openButton.addEventListener('click', toggleModal);
closeButton1.addEventListener('click', toggleModal);
closeButton2.addEventListener('click', toggleModal);
closeButton3.addEventListener('click', uninstallBtnClick);
window.addEventListener('click', windowOnClick);
