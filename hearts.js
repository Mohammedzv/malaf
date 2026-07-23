setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = Math.random() > 0.5 ? "?" : "?";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 6s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-${window.innerHeight + 200}px) rotate(${360 + Math.random() * 360}deg)`;
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6200);

}, 700);