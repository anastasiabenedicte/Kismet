document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu_icon");
  const menuLinks = document.querySelector(".menu_links");
  const wrapper = document.querySelector(".menu_wrapper");
  const navBar = document.querySelector("#navbar");

  if (!menuIcon || !menuLinks || !wrapper) {
    console.warn(
      "Burger.js: Mangler nødvendige elementer – hopper over script.",
    );
    return;
  }

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menuLinks.classList.toggle("active");
    wrapper.classList.toggle("active");
    navBar.classList.toggle("active");
  });
});
