function startSurprise() {

  document.querySelector(".opening").style.display = "none";

  document.getElementById("mainContent").style.display = "block";

  let music = document.getElementById("bgMusic");

  music.play().catch(() => {
    alert("Tap once again to play music 💙");
  });

  startSlideshow();

  createHearts();

  startTyping();
}

/* Slideshow */

function startSlideshow() {

  let slides = document.querySelectorAll(".slide");

  let index = 0;

  setInterval(() => {

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

  }, 3000);
}

/* Typing Message */

const message = `
Happiest Birthdayyy Alvineyy 💙🫂✨

June 14th will always be special…
Because my favourite person was born on this day 😚💋

Nee en life la vandhadhula irundhu
ellameyy romba azhaga maari pochu 🥺💫

Nee en love 💋
En happiness 🌍
En comfort place 🫶🏻
En strength 💪🏻
En kutty world 😌💙

Sometimes en 2nd father 😭✨
And ofcourse en favourite eruma maaduuuu 🐮😂💋

Seriously nee enakku everything da mama 🥹🫂

Namma rendu perum neraiya sanda potrukom 😤💢
Neraiya sirichirukom 😂❤️
Neraiya konjirukom 😚💋

Aana end of the day…
Neeum naanum dhaan 😌🫶🏻

No third person can replace our bond 💯💙

Evlo fights vandhalum 😭
Evlo kovam irundhalum 😤
Last ah unna vitutu ennaala iruka mudiyadhu 🥺💔

I never wanna lose you da chlowww 🫂💋

Namma bond ipdiye forever strong ah irukanum 🤞🏻💙

More memories 😚
More laughs 😂
More love 💋
More annoying moments 🐮✨

Together ah create pannanum 😌🫶🏻

Once again Happiest Birthday to my mamzzzz 🎂🥳💙✨

Love you sooo sooo sooo muchhhh da 😚💋🫂🌍
`;

function startTyping() {

  let i = 0;

  let speed = 35;

  let textArea = document.getElementById("typingText");

  function type() {

    if (i < message.length) {

      textArea.innerHTML += message.charAt(i);

      i++;

      setTimeout(type, speed);
    }
  }

  type();
}

/* Floating Hearts */

function createHearts() {

  setInterval(() => {

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
      ["💙", "💖", "💗", "✨"][Math.floor(Math.random() * 4)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
      (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);

  }, 350);
}

/* Click Burst */

document.addEventListener("click", function (e) {

  for (let i = 0; i < 6; i++) {

    let b = document.createElement("div");

    b.className = "burst";

    b.innerHTML = "💖";

    b.style.left = e.clientX + "px";

    b.style.top = e.clientY + "px";

    document.body.appendChild(b);

    setTimeout(() => {
      b.remove();
    }, 1000);
  }

});
