const mainMenuPage = document.getElementById("mainMenuPage");
const gamePage = document.getElementById("gamePage");
const startButton = document.getElementById("startButton");

const shirtAndPantsButton = document.getElementById("shirtAndPantsButton");
const pantsAndShoesBUtton = document.getElementById("pantsAndShoesButton");
let shirtAndPantsIcon = document.getElementById("shirtAndPantsIcon");
let pantsAndShoesIcon = document.getElementById("pantsAndShoesIcon");

const shirtAndPantsLayers =
{
    "shirtInFront" : "assets/dress_up_layer_icons/shirt_over_pants_icon.png",
    "pantsInFront" : "assets/dress_up_layer_icons/pants_over_shirt_icon.png"
}

const pantsAndShoesLayers =
{
    "pantsInFront" : "assets/dress_up_layer_icons/pants_over_shoes_icon.png",
    "shoesInFront" : "assets/dress_up_layer_icons/shoes_over_pants_icon.png"
}

const zoomCheckbox = document.getElementById("zoomCheckbox");
const doneButton = document.getElementById("doneButton");
const popUpMessage = document.getElementById("popUpMessage");
const restartGameButton = document.getElementById("restartGameButton");
const closetContainer = document.getElementById("closetContainer");
const characterContainer = document.getElementById("characterContainer");
const widthLimit = window.matchMedia("(max-width: 850px)");

const optionButton = document.getElementsByClassName("optionButton");

const skinButton = document.getElementById("skinButton");
const hairButton = document.getElementById("hairButton");
const shirtButton = document.getElementById("shirtButton");
const pantsButton = document.getElementById("pantsButton");
const dressButton = document.getElementById("dressButton");
const sockButton = document.getElementById("sockButton");
const shoeButton = document.getElementById("shoeButton");
let allSelections = document.getElementsByClassName("selectionContainer");

let skinOptions = document.getElementsByClassName("skinOptions");
let hairOptions = document.getElementsByClassName("hairOptions");
let pantsOptions = document.getElementsByClassName("pantsOptions");
let shirtOptions = document.getElementsByClassName("shirtOptions");
let dressOptions = document.getElementsByClassName("dressOptions");
let sockOptions = document.getElementsByClassName("sockOptions");
let shoeOptions = document.getElementsByClassName("shoeOptions");

const skinList =
[
    "assets/dress_up_elements/skins/skin_1.png",
    "assets/dress_up_elements/skins/skin_2.png",
    "assets/dress_up_elements/skins/skin_3.png",
    "assets/dress_up_elements/skins/skin_4.png",
    "assets/dress_up_elements/skins/skin_5.png",
    "assets/dress_up_elements/skins/skin_6.png",
    "assets/dress_up_elements/skins/skin_7.png",
    "assets/dress_up_elements/skins/skin_8.png",
    "assets/dress_up_elements/skins/skin_9.png",
    "assets/dress_up_elements/skins/skin_10.png"
];

const hairList =
[
    "assets/dress_up_elements/hair/hair_1.png",
    "assets/dress_up_elements/hair/hair_2.png",
    "assets/dress_up_elements/hair/hair_3.png",
    "assets/dress_up_elements/hair/hair_4.png",
    "assets/dress_up_elements/hair/hair_5.png",
    "assets/dress_up_elements/hair/hair_6.png",
    "assets/dress_up_elements/hair/hair_7.png",
    "assets/dress_up_elements/hair/hair_8.png",
    "assets/dress_up_elements/hair/hair_9.png",
    "assets/dress_up_elements/front_hair/front_hair_1.png",
    "assets/dress_up_elements/front_hair/front_hair_2.png"
];

const shirtList =
[
    "assets/dress_up_elements/shirts/shirt_1.png",
    "assets/dress_up_elements/shirts/shirt_2.png",
    "assets/dress_up_elements/shirts/shirt_3.png",
    "assets/dress_up_elements/shirts/shirt_4.png",
    "assets/dress_up_elements/shirts/shirt_5.png",
    "assets/dress_up_elements/shirts/shirt_6.png",
    "assets/dress_up_elements/shirts/shirt_7.png",
    "assets/dress_up_elements/shirts/shirt_8.png"
];

const pantsList =
[
    "assets/dress_up_elements/pants/pants_1.png",
    "assets/dress_up_elements/pants/pants_2.png",
    "assets/dress_up_elements/pants/pants_3.png",
    "assets/dress_up_elements/pants/pants_4.png",
    "assets/dress_up_elements/pants/pants_5.png",
    "assets/dress_up_elements/pants/pants_6.png",
    "assets/dress_up_elements/pants/pants_7.png",
    "assets/dress_up_elements/pants/pants_8.png",
    "assets/dress_up_elements/pants/pants_9.png",
    "assets/dress_up_elements/pants/pants_10.png",
    "assets/dress_up_elements/pants/pants_11.png"
];

const dressList =
[
    "assets/dress_up_elements/dresses/dress_1.png",
    "assets/dress_up_elements/dresses/dress_2.png",
    "assets/dress_up_elements/dresses/dress_3.png",
    "assets/dress_up_elements/dresses/dress_4.png",
    "assets/dress_up_elements/dresses/dress_5.png",
    "assets/dress_up_elements/dresses/dress_6.png",
    "assets/dress_up_elements/dresses/dress_7.png",
    "assets/dress_up_elements/dresses/dress_8.png",
    "assets/dress_up_elements/dresses/dress_9.png"
];

const sockList =
[
    "assets/dress_up_elements/socks/socks_1.png",
    "assets/dress_up_elements/socks/socks_2.png",
    "assets/dress_up_elements/socks/socks_3.png",
    "assets/dress_up_elements/socks/socks_4.png",
    "assets/dress_up_elements/socks/socks_5.png",
    "assets/dress_up_elements/socks/socks_6.png"
];

const shoeList =
[
    "assets/dress_up_elements/shoes/shoes_1.png",
    "assets/dress_up_elements/shoes/shoes_2.png",
    "assets/dress_up_elements/shoes/shoes_3.png",
    "assets/dress_up_elements/shoes/shoes_4.png",
    "assets/dress_up_elements/shoes/shoes_5.png",
    "assets/dress_up_elements/shoes/shoes_6.png",
    "assets/dress_up_elements/shoes/shoes_7.png"
];

let mainBody = document.getElementById("mainBody");
let hair = document.getElementById("hair");
let pants = document.getElementById("pants");
let shirt = document.getElementById("shirt");
let dress = document.getElementById("dress");
let frontHair = document.getElementById("frontHair");
let socks = document.getElementById("socks");
let shoes = document.getElementById("shoes");

const fullOutfit = [hair, shirt, pants, dress, socks, shoes];

const resetSectionButton = document.getElementsByClassName("resetSectionButton");
const resetAllButton = document.getElementsByClassName("resetAllButton");

const backgroundMusic = document.getElementById("backgroundMusic");
const clickSound = document.getElementById("clickSound");

const musicButton = document.getElementById("musicButton");
const sfxButton = document.getElementById("sfxButton");
let musicIcon = document.getElementById("musicIcon");
let sfxIcon = document.getElementById("sfxIcon");

const musicPics =
{
    "unmuted" : "assets/audio_icons/music_icon.png",
    "muted" : "assets/audio_icons/music_muted_icon.png"
}

const sfxPics =
{
    "unmuted" : "assets/audio_icons/sfx_icon.png",
    "muted" : "assets/audio_icons/sfx_muted_icon.png"
}

const allButtons = document.getElementsByTagName("button");

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function fadeInAndOutPages(page1, page2) {
    page1.style.animation = "none";
    page2.style.animation = "none";
    await timer(100);
    page1.style.cssText = "animation:fadeOut 0.5s ease; animation-fill-mode: forwards";
    await timer(500);
    page1.style.display = "none";
    page2.style.cssText = "animation:fadeIn 0.5s ease; animation-fill-mode: forwards";
    await timer(500);
    page2.style.display = "flex";
}

if (startButton) {
    startButton.addEventListener("click", event => {
        fadeInAndOutPages(mainMenuPage, gamePage);
    })
}

if (zoomCheckbox) {
    zoomCheckbox.addEventListener("click", event => {
        if (zoomCheckbox.checked) {
            shirtAndPantsButton.style.display = "none";
            pantsAndShoesButton.style.display = "none";
            doneButton.style.display = "none";
        }
        else {
            shirtAndPantsButton.style.display = "block";
            pantsAndShoesButton.style.display = "block";
            doneButton.style.display = "block";
        }
    })
}

if (shirtAndPantsButton) {
    shirtAndPantsButton.addEventListener("click", event => {
        let shirtLayer = parseInt(window.getComputedStyle(shirt).getPropertyValue("z-index"));
        let pantsLayer = parseInt(window.getComputedStyle(pants).getPropertyValue("z-index"));
        let newShirtLayer = 0;
        if (shirtLayer > pantsLayer) {
            newShirtLayer = shirtLayer - 2;
            shirtAndPantsIcon.src = shirtAndPantsLayers["pantsInFront"];
        }
        else {
            newShirtLayer = shirtLayer + 2;
            shirtAndPantsIcon.src = shirtAndPantsLayers["shirtInFront"];
        }
        console.log(newShirtLayer);
        shirt.style.zIndex = newShirtLayer.toString();
    })
}

if (pantsAndShoesButton) {
    pantsAndShoesButton.addEventListener("click", event => {
        let pantsLayer = parseInt(window.getComputedStyle(pants).getPropertyValue("z-index"));
        let shoesLayer = parseInt(window.getComputedStyle(shoes).getPropertyValue("z-index"));
        let newShoesLayer = 0;
        if (pantsLayer > shoesLayer) {
            newShoesLayer = shoesLayer + 2;
            pantsAndShoesIcon.src = pantsAndShoesLayers["shoesInFront"];
        }
        else {
            newShoesLayer = shoesLayer - 2;
            pantsAndShoesIcon.src = pantsAndShoesLayers["pantsInFront"];
        }
        shoes.style.zIndex = newShoesLayer.toString();
    })
}

function fullyClothed() {
    if (shirt.style.display == "none" && dress.style.display == "none") {
        popUpMessage.innerHTML = "You don't have a shirt on!";
    }
    else if (pants.style.display == "none" && dress.style.display == "none") {
        popUpMessage.innerHTML = "You don't have pants on!";
    }
    else if (shoes.style.display == "none") {
        popUpMessage.innerHTML = "You don't have any shoes on!";
    }
    else {
        popUpMessage.innerHTML = "";
        popUpMessage.style.display = "none";
    }

    if (popUpMessage.innerHTML == "") {
        return true;
    }

    popUpMessage.style.display = "block";
    popUpMessage.style.cssText = "animation:fadeIn 0.5s ease;";
    setTimeout(function() {
        popUpMessage.style.cssText = "animation:fadeOut 0.5s ease; animation-fill-mode: forwards";
    }, 5000);
    return false;
}

if (doneButton) {
    doneButton.addEventListener("click", event => {
        if (!fullyClothed()) {
            return;
        }
        if (!widthLimit.matches) {
            closetContainer.style.cssText = "animation:slideOut .5s ease; animation-fill-mode: forwards;";
            setTimeout(function() {
                closetContainer.style.display = "none";
            }, 500);
            characterContainer.style.cssText = "animation:slideIn .5s ease; animation-fill-mode: forwards";
        }
        else {
            closetContainer.style.cssText = "animation:slideDown .5s ease; animation-fill-mode: forwards;";
            setTimeout(function() {
                closetContainer.style.display = "none";
            }, 500);
            characterContainer.style.cssText = "animation:stretchOut .5s ease; animation-fill-mode: forwards";
        }
        zoomCheckbox.disabled = true;
        shirtAndPantsButton.style.display = "none";
        pantsAndShoesButton.style.display = "none";
        doneButton.style.display = "none";
        restartGameButton.style.display = "block";
    })
}

if (restartGameButton) {
    restartGameButton.addEventListener("click", event => {
        fadeInAndOutPages(gamePage, mainMenuPage);
        setTimeout(function() {
            resetAllClothes();
            closetContainer.style.display = "flex";
            closetContainer.style.animation = "none";
            document.querySelector(".selected")?.classList.remove("selected");
            optionButton[0].classList.add("selected");
            displayCurrentSelection("skinSelection")
            characterContainer.style.animation = "none";
            zoomCheckbox.disabled = false;
            shirtAndPantsButton.style.display = "block";
            pantsAndShoesButton.style.display = "block";
            doneButton.style.display = "block";
            restartGameButton.style.display = "none";
        }, 1100);
    })
}

optionButton[0].classList.add("selected");
if (optionButton) {
    for (let i = 0; i < optionButton.length; i++) {
        optionButton[i].addEventListener("click", event => {
            document.querySelector(".selected")?.classList.remove("selected");
            optionButton[i].classList.add("selected");
        })
    }
}

function displayCurrentSelection(selection) {
    for (let i = 0; i < allSelections.length; i++) {
        if (allSelections[i].getAttribute('id') === selection) {
            allSelections[i].style.display = "flex";
        }
        else {
            allSelections[i].style.display = "none";
        }
    }
}

if (skinButton) {
    skinButton.addEventListener("click", event => {
        displayCurrentSelection("skinSelection")
    });
}

if (hairButton) {
    hairButton.addEventListener("click", event => {
        displayCurrentSelection("hairSelection")
    });
}

if (shirtButton) {
    shirtButton.addEventListener("click", event => {
        displayCurrentSelection("shirtSelection")
    });
}

if (pantsButton) {
    pantsButton.addEventListener("click", event => {
        displayCurrentSelection("pantsSelection")
    });
}

if (dressButton) {
    dressButton.addEventListener("click", event => {
        displayCurrentSelection("dressSelection")
    });
}

if (sockButton) {
    sockButton.addEventListener("click", event => {
        displayCurrentSelection("sockSelection")
    });
}

if (shoeButton) {
    shoeButton.addEventListener("click", event => {
        displayCurrentSelection("shoeSelection")
    });
}

if (skinOptions) {
    for (let i = 0; i < skinOptions.length; i++) {
        skinOptions[i].addEventListener("click", event => {
            mainBody.src = skinList[i];
            playSFX();
        })
    }
}

if (hairOptions) {
    for (let i = 0; i < hairOptions.length; i++) {
        hairOptions[i].addEventListener("click", event => {
            if (i >= 9) {
                hair.style.display = "none";
                frontHair.style.display = "block";
                frontHair.src = hairList[i];
            }
            else if (i == 7) {
                hair.style.display = "block";
                hair.src = hairList[i];
                frontHair.style.display = "block";
                frontHair.src = "assets/dress_up_elements/front_hair/bangs_8.png";
            }
            else if (i == 8) {
                hair.style.display = "block";
                hair.src = hairList[i];
                frontHair.style.display = "block";
                frontHair.src = "assets/dress_up_elements/front_hair/bangs_9.png";
            }
            else {
                frontHair.style.display = "none";
                hair.style.display = "block";
                hair.src = hairList[i];
            }
            playSFX();
        })
    }
}

if (pantsOptions) {
    for (let i = 0; i < pantsOptions.length; i++) {
        pantsOptions[i].addEventListener("click", event => {
            dress.style.display = "none";
            pants.style.display = "block";
            pants.src = pantsList[i];
            playSFX();
        })
    }
}

if (shirtOptions) {
    for (let i = 0; i < shirtOptions.length; i++) {
        shirtOptions[i].addEventListener("click", event => {
            dress.style.display = "none";
            shirt.style.display = "block";
            shirt.src = shirtList[i];
            playSFX();
        })
    }
}

if (dressOptions) {
    for (let i = 0; i < dressOptions.length; i++) {
        dressOptions[i].addEventListener("click", event => {
            pants.style.display = "none";
            shirt.style.display = "none";
            dress.style.display = "block";
            dress.src = dressList[i];
            playSFX();
        })
    }
}

if (sockOptions) {
    for (let i = 0; i < sockOptions.length; i++) {
        sockOptions[i].addEventListener("click", event => {
            socks.style.display = "block";
            socks.src = sockList[i];
            playSFX();
        })
    }
}

if (shoeOptions) {
    for (let i = 0; i < shoeOptions.length; i++) {
        shoeOptions[i].addEventListener("click", event => {
            shoes.style.display = "block";
            shoes.src = shoeList[i];
            playSFX();
        })
    }
}

if (resetSectionButton) {
    for (let i = 0; i < resetSectionButton.length; i++) {
        resetSectionButton[i].addEventListener("click", event => {
            if (i == 0) {
                frontHair.style.display = "none";
            }
            fullOutfit[i].style.display = "none";
        })
    }
}

function resetAllClothes() {
    for (let i = 0; i < fullOutfit.length; i++) {
        fullOutfit[i].style.display = "none";
    }
    frontHair.style.display = "none";
}

if (resetAllButton) {
    for (let i = 0; i < resetAllButton.length; i++) {
        resetAllButton[i].addEventListener("click", event => {
            resetAllClothes();
        })
    }
}

if (musicButton) {
    musicButton.addEventListener("click", event => {
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
            backgroundMusic.play();
            musicIcon.src = musicPics["unmuted"];
        }
        else {
            backgroundMusic.muted = true;
            backgroundMusic.pause();
            musicIcon.src = musicPics["muted"];
        }
    })
}

if (sfxButton) {
    sfxButton.addEventListener("click", event => {
        if (clickSound.muted) {
            clickSound.muted = false;
            sfxIcon.src = sfxPics["unmuted"];
        }
        else {
            clickSound.muted = true;
            sfxIcon.src = sfxPics["muted"];
        };
    })
}

if (allButtons) {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", event => {
            playSFX();
        })
    }
}

function playSFX() {
    if (!clickSound.muted) {
        clickSound.currentTime = 0;
        clickSound.play();
    }
}