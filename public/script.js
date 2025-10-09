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

if (resetAllButton) {
    for (let i = 0; i < resetAllButton.length; i++) {
        resetAllButton[i].addEventListener("click", event => {
            for (let k = 0; k < fullOutfit.length; k++) {
                fullOutfit[k].style.display = "none";
            }
            frontHair.style.display = "none";
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