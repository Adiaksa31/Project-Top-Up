const navbarToggler = document.querySelector('.navbar-toggler');
const initialSymbol = document.querySelector('#initialSymbol');


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY ) {
        navbar.classList.add('shadow', 'blur');
    } else {
        navbar.classList.remove('shadow', 'blur');
    }
});


    const toggleButton = document.querySelector(".navbar-toggler");
    const containerDiv = document.querySelector(".container");

    toggleButton.addEventListener("click", function () {
      if (containerDiv.style.backgroundColor === "") {
        containerDiv.style.backgroundColor = "#242424";
      } else {
        containerDiv.style.backgroundColor = "";
      }
    });

 
    const toggleIcon = document.getElementById("toggleCard");
    const cardBody = document.getElementById("cardBody");
    

    toggleIcon.addEventListener("click", function() {
        if (cardBody.classList.contains("d-none")) {
            cardBody.classList.remove("d-none");
        } else {
            cardBody.classList.add("d-none");
        }
    });

    var icon = document.getElementById("toggleCard");

    // Tambahkan event listener untuk menangani klik
    icon.addEventListener("click", function() {
      // Periksa apakah ikon memiliki kelas "rotate"
      if (icon.classList.contains("rotate")) {
        // Jika iya, hapus kelas "rotate" untuk mengembalikan ikon ke posisi semula
        icon.classList.remove("rotate");
      } else {
        // Jika tidak, tambahkan kelas "rotate" untuk memutar ikon 90 derajat
        icon.classList.add("rotate");
      }
    });