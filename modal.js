function openModal(id) {
    document.getElementById(id).style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = '';
}
window.onclick = function(event) {
    for (let i = 1; i <= 6; i++) {
        let modal = document.getElementById('modal' + i);
        if (modal && event.target === modal) {
            closeModal('modal' + i);
        }
    }
}
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        for (let i = 1; i <= 6; i++) closeModal('modal' + i);
    }
});