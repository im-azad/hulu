// Modal active
const modal = document.querySelector('.modal-area');
const logInBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

logInBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
	modal.style.display = 'block';
}
function closeModal() {
	modal.style.display = 'none';
}
function outsideClick(e) {
	if (e.target == modal) {
		closeModal();
	}
}
