const qboxList = document.querySelectorAll(".Q");
qboxList.forEach((el) =>
  el.addEventListener("click", function (e) {
    let clickedParent = e.target.parentElement;

    if (
      clickedParent.classList.contains("question") ||
      clickedParent.classList.contains("image")
    ) {
      let parent = clickedParent;
      let QAbox = parent.parentElement.parentElement;
      //----collapsing code---------
      if (QAbox.querySelector(".question").classList.contains("bolder")) {
        QAbox.querySelector(".answer").classList.add("hidden");
        QAbox.querySelector(".question").classList.remove("bolder");
        QAbox.querySelector(".image").classList.remove("upside");
        return;
      }

      //----resetter code--------//
      const answer = document.querySelectorAll(".answer");
      answer.forEach((el) => el.classList.add("hidden"));

      qboxList.forEach((el) =>
        el.querySelector(".question").classList.remove("bolder")
      );

      const arrow = document.querySelectorAll(".image");
      arrow.forEach((el) => el.classList.remove("upside"));

      //----Working code-------//

      QAbox.querySelector(".answer").classList.remove("hidden");
      QAbox.querySelector(".question").classList.add("bolder");
      QAbox.querySelector(".image").classList.add("upside");
    }
  })
);
