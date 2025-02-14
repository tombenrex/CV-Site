const modal = document.getElementById("pdfModal");

const btn = document.getElementById("pdf-link");

const span = document.getElementsByClassName("close")[0];

if (modal && btn && span) {
  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
