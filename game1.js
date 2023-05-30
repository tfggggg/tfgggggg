document.getElementById("A").addEventListener("click", function() {
    this.classList.toggle("active");
});

document.getElementById("houtian").addEventListener("click", function() {
    this.classList.toggle("active");
});

document.getElementById("chientian").addEventListener("click", function() {
    this.classList.toggle("active");
});

function openPopup(text) {
    var popup = document.getElementById('popup');
    var popupContent = document.getElementById('popupContent');
    popupContent.textContent = text;
    popup.style.display = 'block';
}
