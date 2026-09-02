function setLang(lang) {
  document.body.className = "lang-" + lang;
  document.documentElement.lang = lang;
  document.getElementById("btn-en").className = lang === "en" ? "active" : "";
  document.getElementById("btn-es").className = lang === "es" ? "active" : "";
  try { localStorage.setItem("deauty-lang", lang); } catch (e) {}
}

(function () {
  try {
    var stored = localStorage.getItem("deauty-lang");
    if (stored === "es") setLang("es");
  } catch (e) {}
})();

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
