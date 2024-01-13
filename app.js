const stars = document.querySelectorAll(".star");
const starsDiv = document.querySelector(".star-rating");

[...stars].forEach((star, i) => {
  star.addEventListener("mouseenter", () => {
    const rating = i + 1;
    starsDiv.classList.add(`star-${rating}`);

    for (let j = 1; j <= 5; j++) {
      if (j !== rating) {
        starsDiv.classList.remove(`star-${j}`);
      }
    }

    // Alternative way to remove classes

    // if (rating === 1) {
    //   starsDiv.classList.remove("star-2", "star-3", "star-4", "star-5");
    // }

    // if (rating === 2) {
    //   starsDiv.classList.remove("star-1", "star-3", "star-4", "star-5");
    // }

    // if (rating === 3) {
    //   starsDiv.classList.remove("star-1", "star-2", "star-4", "star-5");
    // }

    // if (rating === 4) {
    //   starsDiv.classList.remove("star-1", "star-2", "star-3", "star-5");
    // }

    // if (rating === 5) {
    //   starsDiv.classList.remove("star-1", "star-2", "star-3", "star-4");
    // }
  });
});

starsDiv.addEventListener("mouseleave", () => {
  starsDiv.classList.remove("star-1", "star-2", "star-3", "star-4", "star-5");
});
