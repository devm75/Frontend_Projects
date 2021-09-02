const playerCross = document.querySelector(".select-player-cross");
const playerCircle = document.querySelector(".select-player-circle");
const CircleBackgroundColor = playerCircle.style.backgroundColor;
const CrossBackgroundColor = playerCircle.style.backgroundColor;
const blocks = document.querySelector(".inner-container");
const innerContainer = document.querySelector(".inner-container");
const selectPlayer = document.querySelector(".select-player");

let filledBlocks = new Set();
let emptyBlocks = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let occupiedByCross = new Set();
let occupiedByCircle = new Set();
let arreyOccupiedByCross;
let arreyOccupiedByCircle;
const dark = "rgb(35, 83, 207)";
const light = "";
let signalCross;
let signalCircle;

const checkDraw = function () {
  if (emptyBlocks.size === 0) {
    document.querySelectorAll(".element").forEach(function (el) {
      el.classList.add("hidden");
    });
    document.querySelector(".no-result").classList.remove("hidden");
    innerContainer.classList.add("hidden");

    playerCircle.style.backgroundColor = "";
    playerCross.style.backgroundColor = "";
    selectPlayer.classList.add("hidden");
  }
};

const winAlgo = function (x) {
  if (
    (x.has(1) && x.has(2) && x.has(3)) ||
    (x.has(4) && x.has(5) && x.has(6)) ||
    (x.has(7) && x.has(8) && x.has(9)) ||
    (x.has(1) && x.has(5) && x.has(9)) ||
    (x.has(3) && x.has(5) && x.has(7)) ||
    (x.has(1) && x.has(4) && x.has(7)) ||
    (x.has(2) && x.has(5) && x.has(8)) ||
    (x.has(3) && x.has(6) && x.has(9)) ||
    (x.has(7) && x.has(8) && x.has(9))
  )
    return true;
  else false;
};

//  Selecting player

playerCross.addEventListener("click", function () {
  playerCircle.style.backgroundColor = "";
  playerCross.style.backgroundColor = "#2353cf";
});

playerCircle.addEventListener("click", function () {
  playerCross.style.backgroundColor = "";
  playerCircle.style.backgroundColor = "#2353cf";
});

// Game begins

blocks.addEventListener("click", function (e) {
  if (!e.target.querySelector(".element").classList.contains("hidden")) return;
  else if (e.target.querySelector(".element").classList.contains("hidden")) {
    // If player Selected is Cross

    if (playerCross.style.backgroundColor === dark) {
      e.target.querySelector(".element").classList.remove("fa-circle");
      e.target.querySelector(".hidden").classList.remove("hidden");

      const name = e.target.className;

      let blockFilled = Number(name.substr(name.length - 1));
      occupiedByCross.add(blockFilled);
      emptyBlocks.delete(blockFilled);
      filledBlocks.add(blockFilled);

      let arrayedEmptyBlocks = Array.from(emptyBlocks);

      const randomFill =
        arrayedEmptyBlocks[
          Math.floor(Math.random() * arrayedEmptyBlocks.length)
        ];

      // win logic for person playing

      arreyOccupiedByCross = Array.from(occupiedByCross);

      if (arreyOccupiedByCross.length >= 3) {
        const sortedArreyOccupiedByCross = arreyOccupiedByCross.sort();
        let arr = sortedArreyOccupiedByCross;
        let sortedArreydaSet = new Set(arr);
        let setOccupied = sortedArreydaSet;

        if (winAlgo(setOccupied)) {
          signalCross = true;
          innerContainer.classList.add("hidden");
          document.querySelectorAll(".element").forEach(function (el) {
            el.classList.add("hidden");
          });
          document
            .querySelector(".winner-declaration")
            .classList.remove("hidden");
          innerContainer.classList.add("hidden");
          selectPlayer.classList.add("hidden");
        } else checkDraw();
      }

      // computer player turn

      if (!signalCross) {
        const pcTurn = e.target.parentElement.querySelector(
          `.box-${randomFill}`
        );

        pcTurn.querySelector(".element").classList.remove("fa-times");
        pcTurn.querySelector(".hidden").classList.remove("hidden");

        filledBlocks.add(randomFill);
        occupiedByCircle.add(randomFill);
        emptyBlocks.delete(randomFill);

        // Win Logic for computer player

        arreyOccupiedByCircle = Array.from(occupiedByCircle);

        if (arreyOccupiedByCircle.length >= 3) {
          const sortedArreyOccupiedByCircle = arreyOccupiedByCircle.sort();

          let arr = sortedArreyOccupiedByCircle;
          let sortedArreydaSet = new Set(arr);
          let setOccupied = sortedArreydaSet;

          if (winAlgo(setOccupied)) {
            document.querySelectorAll(".element").forEach(function (el) {
              el.classList.add("hidden");
            });
            document
              .querySelector(".losing-declaration")
              .classList.remove("hidden");
            innerContainer.classList.add("hidden");
            selectPlayer.classList.add("hidden");
          } else checkDraw();
        }
      }
    }
  }

  // If player selected is Circle

  if (playerCircle.style.backgroundColor === dark) {
    e.target.querySelector(".element").classList.remove("fa-times");
    e.target.querySelector(".hidden").classList.remove("hidden");

    const name = e.target.className;
    let blockFilled = Number(name.substr(name.length - 1));
    occupiedByCircle.add(blockFilled);
    emptyBlocks.delete(blockFilled);
    filledBlocks.add(blockFilled);

    // Human Win Logic

    arreyOccupiedByCircle = Array.from(occupiedByCircle);

    if (arreyOccupiedByCircle.length >= 3) {
      const sortedArreyOccupiedByCircle = arreyOccupiedByCircle.sort();

      let arr = sortedArreyOccupiedByCircle;
      let sortedArreydaSet = new Set(arr);
      let setOccupied = sortedArreydaSet;
      if (winAlgo(setOccupied)) {
        signalCircle = true;
        document.querySelectorAll(".element").forEach(function (el) {
          el.classList.add("hidden");
        });
        document
          .querySelector(".winner-declaration")
          .classList.remove("hidden");
        innerContainer.classList.add("hidden");
        selectPlayer.classList.add("hidden");
      } else checkDraw();
    }

    //Computer  Turn

    if (!signalCircle) {
      let arrayedEmptyBlocks = Array.from(emptyBlocks);
      const randomFill =
        arrayedEmptyBlocks[
          Math.floor(Math.random() * arrayedEmptyBlocks.length)
        ];

      const pcTurn = e.target.parentElement.querySelector(`.box-${randomFill}`);
      pcTurn.querySelector(".element").classList.remove("fa-circle");
      pcTurn.querySelector(".hidden").classList.remove("hidden");

      filledBlocks.add(randomFill);
      occupiedByCross.add(randomFill);
      emptyBlocks.delete(randomFill);

      // Win Logic for computer player

      arreyOccupiedByCross = Array.from(occupiedByCross);

      if (arreyOccupiedByCross.length >= 3) {
        checkDraw();
        const sortedArreyOccupiedByCross = arreyOccupiedByCross.sort();
        let arr = sortedArreyOccupiedByCross;
        let sortedArreydaSet = new Set(arr);
        let setOccupied = sortedArreydaSet;
        if (winAlgo(setOccupied)) {
          document.querySelectorAll(".element").forEach(function (el) {
            el.classList.add("hidden");
          });
          document
            .querySelector(".losing-declaration")
            .classList.remove("hidden");
          selectPlayer.classList.add("hidden");
        } else checkDraw();
      }
    }
  }
});

function refreshPage() {
  window.location.reload();
}
