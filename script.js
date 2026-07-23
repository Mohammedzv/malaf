// ≈‰‘«¡ «·‰ÃÊ„
const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";
    star.style.animationDelay = (Math.random() * 4) + "s";

    stars.appendChild(star);
}

// «·—”«∆·
const messages = [

"Ì„ﬂ‰ «·ﬂ·„«  „ ﬂÊ‰‘ √€·Ï ÂœÌ…...",

"·ﬂ‰ «·„‘«⁄— «·’«œﬁ… œ«Ì„« ·ÌÂ« ﬁÌ„… ﬂ»Ì—….",

"√ „‰Ï ﬂ· „—…  › ÕÌ ›ÌÂ« «·’›Õ… œÌ...  » ”„Ì.",

"·√‰ﬂ  ” ÕﬁÌ ﬂ· ŒÌ—. ??",

"ÊÃÊœﬂ ›Ì ÕÌ«… «··Ì ÕÊ«·ÌﬂÌ »Ì›—ﬁ √ﬂ — „„«   ŒÌ·Ì. ?"

];

const btn = document.getElementById("startBtn");
const text = document.getElementById("message");

btn.onclick = () => {

    btn.style.display = "none";

    showMessage(0);

};

// ﬂ «»… Õ—› Õ—›
function typeWriter(message, callback) {

    text.innerHTML = "";

    let i = 0;

    let timer = setInterval(() => {

        text.innerHTML += message.charAt(i);

        i++;

        if (i >= message.length) {

            clearInterval(timer);

            setTimeout(callback, 1800);

        }

    }, 45);

}

function showMessage(index) {

    if (index >= messages.length) {

        finish();

        return;

    }

    typeWriter(messages[index], () => {

        showMessage(index + 1);

    });

}

// «·‰Â«Ì…
function finish() {

    document.body.style.transition = "2s";

    document.body.style.background = "#020817";

    setTimeout(() => {

        document.querySelector(".card").style.display = "none";

        const ending = document.getElementById("ending");

        ending.style.display = "flex";

    }, 2000);

}