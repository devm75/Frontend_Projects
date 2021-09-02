let count = 0;
let k = 0;
const radioMain = document.getElementById("radiomain");
const checkuncheck = function () {
  document.getElementById("radiomain").checked = true;
  setTimeout(() => {
    document.getElementById("radiomain").checked = false;
  }, 100);
};
const inputText = document.querySelector("#input-text");
inputText.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    radioMain.click();
  }
});
radioMain.addEventListener("click", function () {
  let todoitem = document.getElementById("input-text").value;
  if (todoitem == "") {
    return;
  }
  count++;
  document.getElementById("input-text").value = "";
  document
    .querySelector(".content1")
    .insertAdjacentHTML(
      "afterend",
      `<div class="content active uncomplete"><input id="radio" type="radio"><span id="content-text">${todoitem}</span>
       </div>`
    );
  k = document.querySelectorAll('.uncomplete').length;
  document.querySelector('#num').textContent = Number(k);

  //--------  complemented elements decorate by line-through------//


  if (count >= 1) {
    document.querySelectorAll('#radio').forEach(el => el.addEventListener('click', function () {
      el.parentElement.querySelector('#content-text').style.textDecorationLine = "line-through";
      el.parentElement.classList.add('complete');
      el.parentElement.classList.remove('active');
      el.parentElement.classList.remove('uncomplete');
      k = document.querySelectorAll('.uncomplete').length;
      document.querySelector('#num').textContent = Number(k);



    }));

  }

  //---removing completed tasks----//

  document.querySelector('#clearcompleted').addEventListener('click', function (e) {
    document.querySelectorAll('.complete').forEach(el => el.remove());
  })

  //------theme oriented changes---------//

  if (document.querySelector(".sun").classList.contains("moon")) {
    document.querySelectorAll(".content").forEach((el) => {
      el.style.backgroundColor = "white";
      el.style.color = "black";
    });
  }
});

//-----------Imlementing theme changes -------------------//

//---------- from  dark to light  -----------//

document.querySelector(".sun").addEventListener("click", function () {
  if (document.querySelector(".sun").classList.contains("moon")) {
    document.querySelector(".container").style.backgroundColor =
      "rgb(22,23,34)";
    document.querySelector(".image").removeAttribute("src");
    document
      .querySelector(".image")
      .setAttribute("src", "images/bg-desktop-dark.jpg");
    document.querySelector(".sun").removeAttribute("src");
    document.querySelector(".sun").setAttribute("src", "images/icon-sun.svg");
    document.querySelector(".sun").classList.remove("moon");
    document.getElementById("all").style.color = "white";
    document.getElementById("itemsleft").style.color = "white";
    document.getElementById("active").style.color = "white";
    document.getElementById("completed").style.color = "white";
    document.getElementById("clearcompleted").style.color = "white";
    document.querySelector(".content1").style.backgroundColor = "rgb(37,39,60)";
    document.getElementById("input-text").style.backgroundColor =
      "rgb(37,39,60)";
    document.querySelectorAll(".content").forEach((el) => {
      el.style.backgroundColor = "rgb(37,39,60)";
      el.style.color = "rgb(209, 168, 168)";
    });
return
  }
//----------from  light to dark----//

  const container = document.querySelector(".container");

  document.querySelector(".container").style.backgroundColor = "white";
  document.querySelector(".image").removeAttribute("src");
  document
    .querySelector(".image")
    .setAttribute("src", "images/bg-desktop-light.jpg");
  document.querySelector(".sun").removeAttribute("src");
  document.querySelector(".sun").removeAttribute("src");
  document.querySelector(".sun").setAttribute("src", "images/icon-moon.svg");
  document.querySelector(".sun").classList.add("moon");
  document.getElementById("all").style.color = "black";
  document.getElementById("itemsleft").style.color = "black";
  document.getElementById("active").style.color = "black";
  document.getElementById("completed").style.color = "black";
  document.getElementById("clearcompleted").style.color = "black";
  document.querySelector(".content1").style.backgroundColor = "white";
  document.getElementById("input-text").style.backgroundColor = "white";
  document.querySelectorAll(".content").forEach((el) => {
    el.style.backgroundColor = "white";
    el.style.color = "black";
  });
})

//--Showing completed tasks-----//

document.querySelector('#completed').addEventListener('click', function (e) {
  document.querySelectorAll('.content').forEach(el => {
    el.classList.remove('hide');
    if (el.classList.contains('uncomplete')) { el.classList.add('hide'); }
  })
})


//--Showing all tasks-------//

document.querySelector('#all').addEventListener('click', function (e) {
  document.querySelectorAll('.content').forEach(el => {
    el.classList.remove('hide');
  })

});


//--showing Active items------//

document.querySelector('#active').addEventListener('click', function () {
  document.querySelectorAll('.content').forEach(el => {
    el.classList.remove('hide');
    if (el.classList.contains('complete')) {
      el.classList.add('hide');
    }
  })
})


