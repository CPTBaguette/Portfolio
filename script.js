



const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");
const image = document.getElementById("modal-Image");
const video = document.getElementById("modal-video");
var displaying = false;


i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,

    backend: {
      loadPath: './locales/{{lng}}.json'
      crossDomain: true
    }
  }, function(err, t) {
    // init set content
    updateContent();
  });


// just set some content and react to language changes
// could be optimized using vue-i18next, jquery-i18next, react-i18next, ...
function updateContent() {
    document.getElementById('top1').innerHTML = i18next.t('top1');
    document.getElementById('top2').innerHTML = i18next.t('top2');
    document.getElementById('top3').innerHTML = i18next.t('top3');
    document.getElementById('top4').innerHTML = i18next.t('top4');
    document.getElementById('top5').innerHTML = i18next.t('top5');
    document.getElementById('student').innerHTML = i18next.t('student');
    document.getElementById('test1').innerHTML = i18next.t('test1');
    document.getElementById('test2').innerHTML = i18next.t('test2');
    document.getElementById('comp1').innerHTML = i18next.t('comp1');
    document.getElementById('comp21').innerHTML = i18next.t('comp21');
    document.getElementById('comp22').innerHTML = i18next.t('comp22');
    document.getElementById('comp31').innerHTML = i18next.t('comp31');
    document.getElementById('comp32').innerHTML = i18next.t('comp32');
    document.getElementById('comp41').innerHTML = i18next.t('comp41');
    document.getElementById('comp42').innerHTML = i18next.t('comp42');
    document.getElementById('Port1').innerHTML = i18next.t('Port1');
    document.getElementById('Port2').innerHTML = i18next.t('Port2');
    document.getElementById('Card11').innerHTML = i18next.t('Card11');
    document.getElementById('Card12').innerHTML = i18next.t('Card12');
    document.getElementById('Card21').innerHTML = i18next.t('Card21');
    document.getElementById('Card22').innerHTML = i18next.t('Card22');
    document.getElementById('Card31').innerHTML = i18next.t('Card31');
    document.getElementById('Card32').innerHTML = i18next.t('Card32');
    document.getElementById('Card41').innerHTML = i18next.t('Card41');
    document.getElementById('Card42').innerHTML = i18next.t('Card42');
    document.getElementById('Card51').innerHTML = i18next.t('Card51');
    document.getElementById('Card52').innerHTML = i18next.t('Card52');
    document.getElementById('Card1').onclick = () => {
        openModal(
            i18next.t('Card1T'),
            i18next.t('Card1Tex'),
            'Desert.png',
            'terrain.mp4'
        );
    };
    document.getElementById('Card2').onclick = () => {
        openModal(
            i18next.t('Card2T'),
            i18next.t('Card2Tex'),
            'Andy.jpg', null
        );
    };
    document.getElementById('Card3').onclick = () => {
        openModal(
            i18next.t('Card3T'),
            i18next.t('Card3Tex'),
            'PP.png', 'PP.mp4'
        );
    };
    document.getElementById('Card4').onclick = () => {
        openModal(
            i18next.t('Card4T'),
            i18next.t('Card4Tex'),
           'RealBlow.png', 'RealBLOW.mp4'
        );
    };
    document.getElementById('Card5').onclick = () => {
        openModal(
            i18next.t('Card5T'),
            i18next.t('Card5Tex'),
            'py2.jpg', null
        );
    };
    document.getElementById('formt').innerHTML = i18next.t('formt');
    document.getElementById('CV').innerHTML = i18next.t('CV');
    document.getElementById('DL').innerHTML = i18next.t('DL');
    document.getElementById('TJ').innerHTML = i18next.t('TJ');
    document.getElementById('fot').innerHTML = i18next.t('fot');
    document.getElementById('end').innerHTML = i18next.t('end');
    document.getElementById('closeModal').innerHTML = i18next.t('closeModal');
    document.getElementById('formI').src = i18next.t('formI');

    Display();
    
}


function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

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

let top1 = document.getElementById("top");
let top2 = document.getElementById("comp");
let top3 = document.getElementById("Portfolio");
let top4 = document.getElementById("form");
let top5 = document.getElementById("Contact");

let he1 = document.getElementById("top1");
let he2 = document.getElementById("top2");
let he3 = document.getElementById("top3");
let he4 = document.getElementById("top4");
let he5 = document.getElementById("top5");

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }
    const rect1 = top1.getBoundingClientRect();
    const rect2 = top2.getBoundingClientRect();
    const rect3 = top3.getBoundingClientRect();
    const rect4 = top4.getBoundingClientRect();
    const rect5 = top5.getBoundingClientRect();
    const center = window.innerHeight / 2;
    if (rect1.top <= center && rect2.top>= center) {
        he1.classList.add("Important");
    }else{
        he1.classList.remove("Important");
    }
    if (rect2.top <= center && rect3.top>= center) {
        he2.classList.add("Important");
    }else{
        he2.classList.remove("Important");
    }
    if (rect3.top <= center && rect4.top>= center) {
        he3.classList.add("Important");
    }else{
        he3.classList.remove("Important");
    }
    if (rect4.top <= center && rect5.top>= center) {
        he4.classList.add("Important");
    }else{
        he4.classList.remove("Important");
    }
    if (rect5.top <= center) {
        he5.classList.add("Important");
    }else{
        he5.classList.remove("Important");
    }



});


let displayId = 0;

async function Display() {
    const myId = ++displayId;

    const box = document.getElementById("student");
    const text = i18next.t("student");

    displaying = true;

    for (let i = 0; i < text.length; i++) {
        // Une nouvelle animation a démarré
        if (myId !== displayId) {
            return;
        }

        box.innerHTML = text.substring(0, i + 1);
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    // On ne met displaying à false que si on est encore l'animation active
    if (myId === displayId) {
        displaying = false;
    }
}
// SLIDER

