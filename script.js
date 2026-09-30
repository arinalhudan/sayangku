/* =========================================
   ELEMENTS
========================================= */

const enterButton = document.getElementById("enterButton");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const playButton = document.getElementById("playButton");

const giftBox = document.getElementById("giftBox");

const backButton = document.getElementById("backButton");


/* =========================================
   ENTER WEBSITE
========================================= */

enterButton.addEventListener("click", function () {

    opening.style.transition = "1.2s ease";

    opening.style.opacity = "0";

    setTimeout(function () {

        opening.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        startMusic();

    }, 1200);

});


/* =========================================
   MUSIC
========================================= */

let musicPlaying = false;


function startMusic() {

    music.volume = 0.35;

    music.play()
        .then(function () {

            musicPlaying = true;

            musicButton.innerHTML = "♫";

        })
        .catch(function () {

            musicPlaying = false;

        });

}


function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "🔇";

    } else {

        music.play();

        musicPlaying = true;

        musicButton.innerHTML = "♫";

    }

}


musicButton.addEventListener("click", toggleMusic);


playButton.addEventListener("click", function () {

    if (!musicPlaying) {

        music.play();

        musicPlaying = true;

        playButton.innerHTML = "❚❚ MUSIK SEDANG DIPUTAR";

    } else {

        music.pause();

        musicPlaying = false;

        playButton.innerHTML = "▶ PUTAR MUSIK";

    }

});


/* =========================================
   GIFT
========================================= */

giftBox.addEventListener("click", function () {

    giftBox.classList.add("open");

    setTimeout(function () {

        document.getElementById("letter").scrollIntoView({
            behavior: "smooth"
        });

    }, 900);

});


/* =========================================
   SCROLL ANIMATION
========================================= */

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


const animatedElements = document.querySelectorAll(
    ".hero, .memory, .audio-section, .big-photo, .gift-section, .letter-section, .ending"
);


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(element);

});


/* =========================================
   BACK TO START
========================================= */

backButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(function () {

        location.reload();

    }, 800);

});


/* =========================================
   PREVENT MUSIC ERROR
========================================= */

music.addEventListener("error", function () {

    console.log(
        "File music.mp3 belum ditemukan di folder assets."
    );

});