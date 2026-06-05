const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");
const image = document.getElementById("modal-Image");
const video = document.getElementById("modal-video");


function openModal(tit, te, ima, vid){
    title.textContent = tit;
    text.textContent = te;
    image.src = ima;
    modal.classList.remove("hidden");
    document.body.className = "no-scroll";
    if(vid != null){
        video.classList.remove("hidden");
        video.getElementsByTagName("source")[0].src = vid;
        video.load();
    }
}

document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
    video.classList.add("hidden");
    document.body.className = ""
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// SLIDER

