//----Implementing smooth scroll scroll behavior---//

const links = document.querySelectorAll(".title-element");
links.forEach((el) => el.addEventListener("click", scroller));
function scroller(e) {
  e.preventDefault();
  const href = this.querySelector('#headerelementz').getAttribute("href");
  document.querySelector(href).scrollIntoView({ behavior: "smooth" });
}

document.querySelector('.showall').addEventListener('click',()=>{
  document.querySelectorAll('.hidden').forEach(el=>el.classList.remove('hidden'));

})