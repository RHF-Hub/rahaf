

// ****************************************************************************element toggle function*******************************************************************
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// *******************************************************************************sidebar variables**********************************************************************
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// ********************************************************************sidebar toggle functionality for mobile***********************************************************
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// ****************************************************************************custom select variables*******************************************************************
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// *************************************************************************add event in all select items***************************************************************
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// **************************************************************************filter variables***************************************************************************
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// **********************************************************add event in all filter button items for large screen******************************************************
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// **************************************************************************contact form variables*********************************************************************
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// ****************************************************************add event to all form input field*********************************************************************
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// **********************************************************************page navigation variables**********************************************************************
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

//******************************************************************** add event to all nav link***********************************************************************
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// *********************************************************************contact sender website (web3forms.com)***********************************************************
document.querySelector(".form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    document.getElementById("success-modal").style.display = "flex";
    form.reset();
  } else {
    alert(" something went wrong try again");
  }
});

document.getElementById("close-modal").addEventListener("click", function() {
  document.getElementById("success-modal").style.display = "none";
});
const certificateImages = document.querySelectorAll(".certificate-banner-box img");
const imgModal = document.getElementById("image-modal");
const imgModalImg = document.getElementById("image-modal-img");
const imgModalClose = document.getElementById("image-modal-close");

certificateImages.forEach(img => {
  img.addEventListener("click", () => {
    imgModal.style.display = "block";
    imgModalImg.src = img.src;
  });
});

imgModalClose.addEventListener("click", () => {
  imgModal.style.display = "none";
});

imgModal.addEventListener("click", (e) => {
  if (e.target === imgModal) {
    imgModal.style.display = "none";
  }
});


// *****************************************************************************stars operaiting ***********************************************************************

const canvas = document.getElementById("rahaf-stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    s.x += s.dx;
    s.y += s.dy;

    if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
    if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
  });

  requestAnimationFrame(animate);
}

animate();

// **********************************************************************portfolio click img*************************************************************************************


document.getElementById("close-modal").addEventListener("click", function() {
  document.getElementById("success-modal").style.display = "none";
});
const portfolioImages = document.querySelectorAll(".project-img ");//portfolio-banner-box
const imgModal2 = document.getElementById("image-modal2");
const imgModalImg2 = document.getElementById("image-modal-img2");
const imgModalClose2 = document.getElementById("image-modal-close2");


portfolioImages.forEach(item => {
  item.addEventListener("click", () => {

    const img = item.querySelector("img");

    imgModal2.style.display = "block";
    imgModalImg2.src = img.src;

  });
});

imgModalClose2.addEventListener("click", () => {
  imgModal2.style.display = "none";
});

imgModal2.addEventListener("click", (e) => {
  if (e.target === imgModal2) {
    imgModal2.style.display = "none";
  }
});


// *************************************************************************End of code**********************************************************************************