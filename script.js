

//селект
var start = true

var isValid = true


const EXCEPTION_READY_KEYS = ["ExplicitContent1"]

var REQUEST_DATA = {
    Instrumental: ""
    // и тд
}
let AlbumName
var Instrumental;
var InstrumentalLink;
var UploadType=0;
var Genre;
var NickName;
var TrackName;
var Email;
var TrackText;
var TextAuthorName;
var ArrangerName;
var SingerName;
var MusicAuthorName;
var Promo;
var InstagramLink;
var Instagram2Link;
var VkPublicLink;
var SiteLink;
var AppleIdLink;
var SpotifyLink
var ExplicitContent;
var Cover=[];
var CoverLink;
var TrackFile;
var TrackLink;
var PreviewStart;
var ReleaseDate = document.getElementById("date-picker-string").value;

/*
const trackTemplate = {
    name:"",
    singer:"",
    authors:[{
        name:"",
        lastName:""
    }]
}

var tracks = []


function addTrack() {
    tracks.push({...trackTemplate})
}

function setTrack(index){
    const track = tracks[index]

    authorsContainer.innerHTML = ""

    for(var a of track.authors){
        authorsContainer.innerHTML += createButtonAuthor(a)
    }
    
    authorsContainer.querySelectorAll(".auythorButtton")[0].click()
}
*/


let select = function () {

    let selectHeader = document.querySelectorAll('.select-header');
    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let instrumentalDoc = document.querySelectorAll("._instumental");
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select-current');
        document.getElementById('arrow-swap-id').classList.remove("_arrow-rotate");
        document.getElementById('arrow-swap-id1').classList.remove("_arrow-rotate");


        currentValue = select.dataset.value
        currentTextValue = currentText.innerText



        currentText.innerText = text;
        select.dataset.value = this.dataset.value
        select.classList.remove('is-active');
        if (start) {
            this.remove()
            start = false
        } else {
            this.dataset.value = currentValue
            this.innerText = currentTextValue
        }

        UploadTypeSelectSet();
        
        if (UploadType == 1 && UploadType != undefined && UploadType != "") {
            document.getElementById("input__file-audio-second").value = [];
            document.getElementById("display-track-name-second").innerText = "Загрузите .wav";
            document.getElementById("InstrumentalLink-area").value = "";
            
            for (let i = 0; i < instrumentalDoc.length; i++) {
                instrumentalDoc[i].classList.add("_del_instrumental");
            }
        }

        if ((UploadType == 0 || UploadType == 2) && UploadType != undefined && UploadType != "") {
            for (let i = 0; i < instrumentalDoc.length; i++) {
                instrumentalDoc[i].classList.remove("_del_instrumental");
            }
        }
        if (UploadType == 2) {

            visibility = true;
            AlbumVisibility();
            if (FNCstartADD == false) {
                document.querySelectorAll(".add-new-track").forEach(b => {
                    b.click()
                })
            }
        }
        else if (UploadType == 1 || UploadType == 0) {
            visibility = false;
            AlbumVisibility();
        }
        
        for (let i = 0; i < selectItem.length; i++) {
            if (selectItem[i].textContent=="ВЫБРАТЬ ЖАНР"||selectItem[i].textContent=="ВЫБРАТЬ ТИП") {
                selectItem[i].remove();
            }
        }
        
    }

};





//секундочки
const hover_draghover = document.getElementById("kkk");
let zalupichsec = document.getElementById('track-second-value');
let zalupichmin = document.getElementById('track-second-min');
let prevMin = 0;




let TrackSecondWork = function () {
    next.onclick = function () {
        /*if (valueTrackSeconds >= 0) {
            valueTrackSeconds++;
            PreviewStart = parseInt(valueTrackSeconds);

            if (valueTrackSeconds < 0) {
                valueTrackSeconds = 0;
                PreviewStart = valueTrackSeconds; 
                

            }
        }*/
        var currentValue = document.getElementById('track-second-value').value;
        if (currentValue == "") {
            currentValue = 0;
        }
        if (currentValue > 58) {
            currentValue = -1;
            prevMin++;
            document.getElementById('track-second-min').value = parseInt(prevMin);
        }
        document.getElementById('track-second-value').value = parseInt(currentValue) + 1;
        PreviewStart = parseInt(document.getElementById('track-second-value').value);
        // //("минут "+prevMin+" сек"+PreviewStart);
    };
    prev.onclick = function () {
        /*if (valueTrackSeconds >= 0) {
            valueTrackSeconds--;
            PreviewStart = parseInt(valueTrackSeconds);
            //////(PreviewStart);
            if (valueTrackSeconds < 0) {
                valueTrackSeconds = 0;
                PreviewStart = valueTrackSeconds; 

                //////(PreviewStart);
            }

            const currentValue = document.getElementById('track-second-value').value
            document.getElementById('track-second-value').value = parseInt(currentValue) - 1
        }*/
        var currentValue = document.getElementById('track-second-value').value;
        if (currentValue == "") {
            currentValue = 0;
        }
        if (currentValue < 1) {
            currentValue = 1;
            if (prevMin > 0) {
                prevMin--;
                currentValue = 60;
                document.getElementById('track-second-min').value = parseInt(prevMin);
            }
            else {
                prevMin = 0;
                document.getElementById('track-second-min').value = parseInt(prevMin);
            }
            document.getElementById('track-second-min').value = parseInt(prevMin);

        }
        document.getElementById('track-second-value').value = parseInt(currentValue) - 1;
        PreviewStart = parseInt(document.getElementById('track-second-value').value);
        // //("минут "+prevMin+" сек"+" "+PreviewStart);
    };
};





zalupichsec.addEventListener("input", function () {
    let currentValue = document.getElementById('track-second-value').value;
    if (currentValue > 59) {
        currentValue = 0;
        document.getElementById('track-second-value').value = parseInt(currentValue);
        PreviewStart = currentValue;
        prevMin++;
        document.getElementById('track-second-min').value = parseInt(prevMin);
        // //(prevMin);
        // //(currentValue);
    }
    if (currentValue < 0) {
        currentValue = 0;
        PreviewStart = currentValue;
        if (prevMin > 0) {
            prevMin--;
            document.getElementById('track-second-min').value = parseInt(prevMin);
        }
        else {
            prevMin = 0;
            document.getElementById('track-second-min').value = parseInt(prevMin);
        }
    }

    // //("минут "+prevMin+" сек"+PreviewStart);
})

zalupichmin.addEventListener("input", function () {
    prevMin = document.getElementById('track-second-min').value;
    // //("минут "+prevMin+" сек"+PreviewStart);
})

//формы
document.querySelectorAll('.standart-input[data-error] .input-req').forEach(inpE1 => {

    inpE1.addEventListener('input', () => inpE1.parentElement.removeAttribute('data-error'));
});

/*подсказки*/

function popup() {
    var popup = document.getElementById("myPopupq");
    popup.classList.toggle("show-tip");
}
function popupq() {
    var popupq = document.getElementById("myPopup");
    popupq.classList.toggle("show-tip");

}
function popupe() {
    var popupe = document.getElementById("myPopupe");
    popupe.classList.toggle("show-tip");
}
function popups() {
    var popupel = document.getElementById("myPopupеl");
    popupel.classList.toggle("show-tip");
}



/* Сборка имён */











//логика добавяления дебиков































/*Валидация селекторов*/


/*Никнейм и Навзание трека валидация */


function getNameData(humans) {
    //(humans);
    result = ""
    for (var n in humans) {
        if (!humans[n]["checkbox"])
        {
            result += `${humans[n].lname} ${humans[n].fname} ${humans[n].mname}; `; 
        }
        else{
            result += `${humans[n].lname} ${humans[n].fname}; `;
        } 
    }
    return result
}


function getNameDataStock(key) {
    result = ""
    for (var n of humanValues[key]) {
        if (!n["checkbox"])
            result += `${n["lname"]} ${n["fname"]} ${n["mname"]}; `
        else
            result += `${n["lname"]} ${n["fname"]}; `
    }
    return result
}


function ArrowSwap() {
    arrow = document.getElementById('arrow-swap-id');
    arrow.classList.toggle("_arrow-rotate")

}
function ArrowSwap1() {
    arrow = document.getElementById('arrow-swap-id1');
    arrow.classList.toggle("_arrow-rotate")

}


/* ----------------------тут убираем всякие менюшки и всплывающие окна-------------------------------- */
const GenreValidateValues = ['African', 'Alternative', 'Arabic', 'Asian', 'Blues', 'Brazilian', 'Children Music', 'Christian & Gospel', 'Classical', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Folk', 'Hip Hop/Rap', 'Indian', 'Jazz', 'Latin', 'Metal', 'Pop', 'R&B/Soul', 'Reggae', 'Relaxation', 'Rock', 'Various', 'World Music / Regional Folklore'];

const bodick2 = document.getElementById('Genre-Type');

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(bodick2);

    if (!withinBoundaries) {
        document.getElementById('Genre-Type').classList.remove('is-active')
        document.getElementById('arrow-swap-id1').classList.remove('_arrow-rotate');
    }
})
const bodick1 = document.getElementById('Upload-Type');

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(bodick1);

    if (!withinBoundaries) {
        document.getElementById('Upload-Type').classList.remove('is-active')
        document.getElementById('arrow-swap-id').classList.remove('_arrow-rotate');
    }
})
const popupHEH1 = document.getElementById('popup-div2');

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(popupHEH1);

    if (!withinBoundaries) {
        document.getElementById('myPopupq').classList.remove('show-tip')
    }
})
const popupHEH2 = document.getElementById('popup-div1');

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(popupHEH2);

    if (!withinBoundaries) {
        document.getElementById('myPopup').classList.remove('show-tip')
    }
})
const popupHEH3 = document.getElementById('popup-div3');

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(popupHEH3);

    if (!withinBoundaries) {
        document.getElementById('myPopupe').classList.remove('show-tip')
    }
})
const popupHEH5 = document.getElementById('popup-div5');

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(popupHEH5);

    if (!withinBoundaries) {
        document.getElementById('myPopupеl').classList.remove('show-tip')
    }
})

function UploadTypeSelectSet() {
    if (document.getElementById("Upload-Type").dataset.value!=UploadType) {
        const docs = document.querySelectorAll("._error")
                    docs.forEach(doc => {
                        doc.classList.remove("_error")
                    });
    }
    UploadType = document.getElementById("Upload-Type").dataset.value;
    if (UploadType==2) {
        document.getElementById("dearArtist").innerText='Для загрузки Вашего альбома заполните форму. Треки в альбом добавляются нажатием "+" под полем "Что Вы выгружаете?".'
    }
    else{
        document.getElementById("dearArtist").innerText="Для загрузки Вашего трека потребуются следующие данные:"
    }
}

function UploadTypeValidate() {
    var UploadTypeVal = document.getElementById("Upload-Type").dataset.value;
    document.getElementById("UploadType-error-display").classList.remove("_error")
    if (UploadTypeVal == "0" || UploadTypeVal == "1" || UploadTypeVal == "2") {
        UploadType = parseInt(UploadTypeVal);

    }
    else {
        UploadTypeVal = "";
        document.getElementById("UploadType-error-display").classList.add("_error")
        if (isValid) {
            document.getElementById("UploadType-error-display").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"Аплоэд тайп");
    }
}



function GenreValidate() {
    document.getElementById("display-genre-error").classList.remove("_error")
    let CheckGenreValue = false;
    var GenreVal = document.getElementById("Genre-Type").dataset.value;
    for (let i = 0; i < GenreValidateValues.length; i++) {
        if (GenreVal == GenreValidateValues[i]) {
            CheckGenreValue = true;
            break;
        }
    }
    if (CheckGenreValue == true) {
        Genre = GenreVal;

    }
    else {
        GenreVal = null;
        document.getElementById("display-genre-error").classList.add("_error")
        if (isValid) {
            document.getElementById("display-genre-error").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"генре");
    }
}

function NickNameValidate() {
    NickNameValue = document.getElementById("nickname-value").value;
    document.getElementById("nickname-value").classList.remove("_error")
    if (NickNameValue != "") {
        NickName = NickNameValue;
    }
    else {

        document.getElementById("nickname-value").classList.add("_error")
        if (isValid) {
            document.getElementById("nickname-value").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"ник");
    }
}

function AlbumNameValidate() {
    if (UploadType == 2) {
        AlbumNameValue = document.getElementById("AlbumName-value").value;
        document.getElementById("AlbumName-value").classList.remove("_error")
        if (AlbumNameValue != "") {
            AlbumName = AlbumNameValue;
        }
        else {

            document.getElementById("AlbumName-value").classList.add("_error")
            if (isValid) {
                document.getElementById("AlbumName-value").scrollIntoView({ block: "center", behavior: "auto" });
            }
            isValid = false;
            //(isValid+"альбомнейм");
        }
    }
    else if (UploadType != 2) {
        AlbumName = "";
    }
}

function TrackNameValidate() {
    let TrackNameValue = document.getElementById("TrackName-value").value;
    //("NAME INPUT")
    //(document.getElementById("TrackName-value").value)
    document.getElementById("TrackName-value").classList.remove("_error")
    //("TRACK NAME IN MOMENT")
    //(TrackNameValue)
    if (TrackNameValue != "") {
        TrackName = TrackNameValue;
    }
    else {

        document.getElementById("TrackName-value").classList.add("_error")
        if (isValid) {
            document.getElementById("TrackName-value").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"трекнейм");
    }
    //("TRACK NAME IN VALUE")
    //(TrackName)
}


function ValidateEmailValue() {
    document.getElementById("email-display-error").classList.remove("_error")
    emailAddr = document.getElementById("email-display-error").value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddr) && emailAddr != null) {
        Email = emailAddr;
    }
    else {
        emailAddr = 0;
        document.getElementById("email-display-error").classList.add("_error")
        if (isValid) {
            document.getElementById("email-display-error").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"эмэйл");
    }
}


function TrackTextValidate() {
    TrackTextValue = document.getElementById("TrackText").value;
    //("TRACK TEXT REAL")
    //(TrackTextValue);
    //("TRACK TRACK");
    TrackTextCheck = document.getElementById("TrackTextCheck");
    document.getElementById("TrackText").classList.remove("_error")
    if (TrackTextCheck.checked) {
        TrackText = "<------Нет текста------>";

    }
    else {
        if (TrackTextValue == "") {
            document.getElementById("TrackText").classList.add("_error")
            if (isValid) {
                document.getElementById("TrackText").scrollIntoView({ block: "center", behavior: "auto" })
            }
            isValid = false
            //(isValid+"трек текст");
        }
        TrackText = TrackTextValue;

    }
    TrackTextValue = "";

    /*
    mnameCheckbox = document.getElementById("mnameAuthorCheck")
    let lname = document.getElementById("lnameAut").value;
    let fname = document.getElementById("fnameAut").value;
    let mname = document.getElementById("mnameAut").value;
    document.getElementById("lnameAut").classList.remove("_error");
    document.getElementById("fnameAut").classList.remove("_error");
    if (lname == "") {
        document.getElementById("lnameAut").classList.add("_error");
        isValid = false;
    }
    if (fname == "") {
        document.getElementById("fnameAut").classList.add("_error");
        isValid = false;
    }
    if (mnameCheckbox.checked) {
        FullName = lname + " " + fname
    }
    else {
        FullName = lname + " " + fname + " " + mname
    }
    TextAuthorName = FullName;
    //////(TextAuthorName + " -TextAuthorName"); 
    */


}


function imageAnyDrop() {
    document.getElementById("cover-error-display").classList.remove("_error");
    document.getElementById("CoverLink").classList.remove("_error");

    CoverLinkValue = document.getElementById("CoverLink").value
    if (coverValueOr == true || CoverLinkValue != "") {
        CoverLink = CoverLinkValue
    }
    else {
        if (coverValueOr == null) {
            document.getElementById("cover-error-display").classList.add("_error")
        }
        if (CoverLinkValue == "") {
            document.getElementById("CoverLink").classList.add("_error")
        }
        if (isValid) {
            document.getElementById("CoverLink").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"картинка");
    }
}
function audioAnyDrop() {
    document.getElementById("zzz").classList.remove("_error");
    document.getElementById("TrackLink-area").classList.remove("_error");

    TrackLinkValue = document.getElementById("TrackLink-area").value
    if (audioValueOr == true || TrackLinkValue != "") {
        //////("--- AUDIO UPLOAD OR HAVE A LINK ---");
        TrackLink = TrackLinkValue;
    }
    else {
        if (audioValueOr == null) {
            document.getElementById("zzz").classList.add("_error")
        }
        if (TrackLinkValue == "") {
            document.getElementById("TrackLink-area").classList.add("_error")
        }
        if (isValid) {
            document.getElementById("TrackLink-area").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"музяка");
    }

}

function ReleaseDateValueValidate() {
    ReleaseDateValue = document.getElementById("date-picker-string").value;
    ReleaseDate = ReleaseDateValue;
    //////(ReleaseDate);
}
var TextAuthorNameValueTemp
function TextAuthorNameValue() {
    mnameCheckbox = document.getElementById("mnameAuthorCheck")
    let lname = document.getElementById("lnameAut").value;
    let fname = document.getElementById("fnameAut").value;
    let mname = document.getElementById("mnameAut").value;
    document.getElementById("lnameAut").classList.remove("_error");
    document.getElementById("fnameAut").classList.remove("_error");
    document.getElementById("mnameAut").classList.remove("_error")
    if (lname == "") {
        document.getElementById("lnameAut").classList.add("_error");
        if (isValid) {
            document.getElementById("lnameAut").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"автор имя лнаме");
    }
    if (fname == "") {
        document.getElementById("fnameAut").classList.add("_error");
        if (isValid) {
            document.getElementById("fnameAut").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"фнаме автор");
    }
    if (mnameCheckbox.checked) {
        FullName = lname + " " + fname

    }
    else {
        if (mname == "") {
            document.getElementById("mnameAut").classList.add("_error")
            if (isValid) {
                document.getElementById("mnameAut").scrollIntoView({ block: "center", behavior: "auto" });
            }
            isValid = false;
            //(isValid+"мнаме автор");
        }
        FullName = lname + " " + fname + " " + mname

    }
    TextAuthorNameTemp = FullName;
}

var ArrangerNameTemp
function ArrangerNameValue() {
    mnameCheckbox = document.getElementById("mnameArjCheck")
    let lname = document.getElementById("lnameAranj").value;
    let fname = document.getElementById("fnameAranj").value;
    let mname = document.getElementById("mnameAranj").value;
    document.getElementById("lnameAranj").classList.remove("_error");
    document.getElementById("fnameAranj").classList.remove("_error");
    document.getElementById("mnameAranj").classList.remove("_error");
    if (lname == "") {
        document.getElementById("lnameAranj").classList.add("_error");
        if (isValid) {
            document.getElementById("lnameAranj").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"арангер нейм");
    }
    if (fname == "") {
        document.getElementById("fnameAranj").classList.add("_error");
        if (isValid) {
            document.getElementById("fnameAranj").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"арангер фнай");
    }
    if (mnameCheckbox.checked) {
        FullName = lname + " " + fname
    }
    else {
        if (mname == "") {
            document.getElementById("mnameAranj").classList.add("_error");
            if (isValid) {
                document.getElementById("mnameAranj").scrollIntoView({ block: "center", behavior: "auto" });
            }
            isValid = false;
            //(isValid+"арангер мнейм");
        }
        FullName = lname + " " + fname + " " + mname
    }
    ArrangerNameTemp = FullName;
    //////(ArrangerName + " -ArrangerName");
}


function SingerNameValue() {
    mnameCheckbox = document.getElementById("mnameIspolCheck")
    let lname = document.getElementById("lnameIspol").value;
    let fname = document.getElementById("fnameIspol").value;
    let mname = document.getElementById("mnameIspol").value;
    document.getElementById("lnameIspol").classList.remove("_error");
    document.getElementById("fnameIspol").classList.remove("_error");
    document.getElementById("mnameIspol").classList.remove("_error");
    if (lname == "") {
        document.getElementById("lnameIspol").classList.add("_error");
        if (isValid) {
            document.getElementById("lnameIspol").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"сингер нейм");
    }
    if (fname == "") {
        document.getElementById("fnameIspol").classList.add("_error");
        if (isValid) {
            document.getElementById("fnameIspol").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"сингер фнейм");
    }
    if (mnameCheckbox.checked) {
        FullName = lname + " " + fname
    }
    else {
        if (mname == "") {
            document.getElementById("mnameIspol").classList.add("_error");
            if (isValid) {
                document.getElementById("mnameIspol").scrollIntoView({ block: "center", behavior: "auto" });
            }
            isValid = false;
            //(isValid+"мнаме сингер");
        }
        FullName = lname + " " + fname + " " + mname
    }
    SingerNameTemp = FullName;
}
var SingerNameTemp
var MusicAuthorNameTemp
function MusicAuthorNameValue() {
    mnameCheckbox = document.getElementById("mnameKompCheck")
    let lname = document.getElementById("lnameKomp").value;
    let fname = document.getElementById("fnameKomp").value;
    let mname = document.getElementById("mnameKomp").value;
    document.getElementById("lnameKomp").classList.remove("_error");
    document.getElementById("fnameKomp").classList.remove("_error");
    document.getElementById("mnameKomp").classList.remove("_error");
    if (lname == "") {
        document.getElementById("lnameKomp").classList.add("_error");
        if (isValid) {
            document.getElementById("lnameKomp").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"лнаме автормузык");
    }
    if (fname == "") {
        document.getElementById("fnameKomp").classList.add("_error");
        if (isValid) {
            document.getElementById("fnameKomp").scrollIntoView({ block: "center", behavior: "auto" });
        }
        isValid = false;
        //(isValid+"фнаме музык");

    }

    if (mnameCheckbox.checked) {
        FullName = lname + " " + fname

    }
    else {
        if (mname == "") {
            document.getElementById("mnameKomp").classList.add("_error");
            if (isValid) {
                document.getElementById("mnameKomp").scrollIntoView({ block: "center", behavior: "auto" });
            }
            isValid = false;
            //(isValid+"мнамемузык");
        }
        FullName = lname + " " + fname + " " + mname
    }
    MusicAuthorNameTemp = FullName;

}

function PromoReady() {
    Promo = document.getElementById("Promo").value;
    //////(Promo+" promo");
}

function InputBlock5(el) {
    if (el.checked && el.id == "TrackTextCheck") {
        document.getElementById('TrackText').classList.add('_u-cant-input')
        document.getElementById('track-text-display-error').classList.remove('_error')
        document.getElementById('TrackText').disabled = true;
        document.getElementById('TrackText').value = "";
        //////("click");
    }
    else {
        document.getElementById('TrackText').classList.remove('_u-cant-input')
        document.getElementById('TrackText').disabled = false;
    }

}


function IsReadyParam() {
    for (var k of Object.keys(DATA_REQUEST)) {
        if (!EXCEPTION_READY_KEYS.includes(k)) {
            DATA_REQUEST[k] = document.getElementById(k).value
        } else {
            if (K == "ExplicitContent1")
                DATA_REQUEST[k] = document.getElementById(k).checked
        }
    }
}




function InstagramLinkReady() { // TODO Бессмысленный код
    InstagramLink = document.getElementById("InstagramLink").value;
    //////(InstagramLink+" ins");
}


function Instagram2LinkReady() {
    Instagram2Link = document.getElementById("Instagram2Link").value;
    //////(Instagram2Link+" inst2");
}


function VkPublicLinkReady() {
    VkPublicLink = document.getElementById("VkPublicLink").value;
    //////(VkPublicLink + " vk");
}


function SiteLinkReady() {
    SiteLink = document.getElementById("SiteLink").value;
    //////(SiteLink + "site");
}


function AppleIdReady() {
    AppleIdLink = document.getElementById("AppleIdLink").value;
    //////(AppleIdLink + " apple");
}


function SporifyReady() {
    SpotifyLink = document.getElementById("SpotifyLink").value;
    //////(SpotifyLink+ " spot");
}


function ExplicitContentCheck() {
    checkboxMat = document.getElementById("ExplicitContent1");
    ExplicitContent = checkboxMat.checked;
}

function checkValueBek() {
    var valueTrackSeconds = parseInt(document.getElementById('track-second-value').value);
    PreviewStart = valueTrackSeconds;
    if (document.getElementById('track-second-value').value != "") {
    }
    else {
        PreviewStart = 0;
    }
    if (document.getElementById('track-second-min').value != "") {
    }
    else {
        prevMin = 0;
    }

}

var CoverSize;
var CoverLoad = false;
var InstSize;
var InstLoad = false
var TrackFileSize;
var TrackLoad = false;

function FullValidateValues() {
    isValid = true

    

    UploadTypeValidate();
    
    GenreValidate();



    ReleaseDateValueValidate();

    AlbumNameValidate();
    NickNameValidate();
    TrackNameValidate();
    ValidateEmailValue();
    TrackTextValidate();




    imageAnyDrop();
    audioAnyDrop();
    instumentalAnyDrop();




    TextAuthorNameValue();
    ArrangerNameValue();
    SingerNameValue();
    MusicAuthorNameValue();





    PromoReady();
    InstagramLinkReady();
    Instagram2LinkReady();
    VkPublicLinkReady();
    SiteLinkReady();
    AppleIdReady();
    SporifyReady();
    ExplicitContentCheck();


    PersonsValidate();
    checkValueBek();





    


    if (isValid) {
        
        
        

        /*////("говно = " +
        '\n'+UploadType + " - что грузим",
        '\n'+Genre+ " - жанр",
        '\n'+NickName+ " - ник",
        '\n'+TrackName+ " - название трека",
        '\n'+Email+ " - мэил",
        '\n'+TrackText+ " - текст трека",
        '\n'+TextAuthorName+ " - автор текста",
        '\n'+ArrangerName+ " - арангер нейм",
        '\n'+SingerName+ " - сингер нейм",
        '\n'+MusicAuthorName+ " - музик автор нейм",
        '\n'+Promo+ " - промо",
        '\n'+InstagramLink+ " - инст",
        '\n'+Instagram2Link+ " - инст2",
        '\n'+VkPublicLink+ " - вк",
        '\n'+SiteLink+ " - сайт",
        '\n'+AppleIdLink+ " - эпл",
        '\n'+SpotifyLink+ " - спот",
        '\n'+ExplicitContent+ " - мат",
        '\n'+Cover+ " - обложка",
        '\n'+TrackFile+ " - трек",
        '\n'+TrackLink+ " - ссылка на трек",
        '\n'+PreviewStart+ " - секунды",
        '\n'+ReleaseDate+ " - дата",
        '\n'+CoverLink+ " - ссылка на обложку"
        );
        ////(Cover);
        ////(TrackFile);*/


        var data = new FormData()



        if (UploadType==2) {
            const trackBtn = document.querySelectorAll('.AlbumTrackChild')
            for (let i = 0; i < trackBtn.length; i++) {
                if (trackPageIndex==i) {
                    trackBtn[i].click();
                }
            }
        }
        else{
            AlbumTracks=[]
            TextAuthorName = getNameDataStock("author")
            SingerName = getNameDataStock("singer")
            ArrangerName = getNameDataStock("aranj")
            MusicAuthorName = getNameDataStock("compozitor")
            AlbumData();
        }

        ////(TextAuthorName)
        ////(SingerName)
        ////(ArrangerName)
        ////(MusicAuthorName)
        //("AlbumTracks");
        //("AlbumTracks");
        //("AlbumTracks");
        //("AlbumTracks");
        //("AlbumTracks");
        //("AlbumTracks");
        //("AlbumTracks");
        //(AlbumTracks);
        
        var index = 0
        for(var a of AlbumTracks){
            
            //("TextAuthorName "+index);
            AlbumTracks[index].TextAuthorName = getNameData(AlbumTracks[index].TextAuthorName)
            //("SingerName "+index);
            AlbumTracks[index].SingerName = getNameData(AlbumTracks[index].SingerName)
            //("ArrangerName "+index);
            AlbumTracks[index].ArrangerName = getNameData(AlbumTracks[index].ArrangerName)
            //("MusicAuthorName "+index);
            AlbumTracks[index].MusicAuthorName = getNameData(AlbumTracks[index].MusicAuthorName)

            if (a.Cover!=undefined) {
                if(a.Cover[0] != undefined){
                    AlbumTracks[index].CoverFileName = a.Cover[0].name
                    data.append("Cover" + index,a.Cover[0])
                }
            }
            if(a.TrackFile != undefined){
                AlbumTracks[index].TrackFileName = a.TrackFile.name
                data.append("TrackFile" + index,a.TrackFile)
            }
            if(a.Instrumental != undefined){
                AlbumTracks[index].InstrumentalFileName = a.Instrumental.name
                data.append("InstrumentalFile" + index,a.Instrumental)
            }          
            index++
        }

        if (UploadType != 2) {
            AlbumTracks[0].TextAuthorName = getNameData(humanValues.author)
            AlbumTracks[0].ArrangerName = getNameData(humanValues.aranj)
            AlbumTracks[0].SingerName = getNameData(humanValues.singer)
            AlbumTracks[0].MusicAuthorName = getNameData(humanValues.compozitor)
        }
        

        
        data.append("json",JSON.stringify({Tracks:AlbumTracks,AlbumName:AlbumName}))
        //(AlbumTracks);
        // // data.append("UploadType", UploadType)
        // // data.append("AlbumName", AlbumName)
        // // data.append("NickName", NickName)
        // // data.append("TrackName", TrackName)
        // // data.append("Email", Email)
        // // data.append("TrackFile", TrackFile)

        // data.append("TrackLink", TrackLink)
        // data.append("Cover", Cover ? Cover[0] : undefined)


        // data.append("CoverLink", CoverLink)

        // data.append("TextAuthorName", TextAuthorName)
        // data.append("SingerName", SingerName)
        // data.append("ArrangerName", ArrangerName)
        // data.append("MusicAuthorName", MusicAuthorName)

        // data.append("Genre", Genre)
        // data.append("ReleaseDate", ReleaseDate)
        // data.append("PreviewStart", PreviewStart + (prevMin * 60))
        // data.append("TrackText", TrackText)
        // data.append("Promo", Promo)
        // data.append("InstagramLink", InstagramLink)
        // data.append("Instagram2Link", Instagram2Link)
        // data.append("VkPublicLink", VkPublicLink)
        // data.append("SiteLink", SiteLink)
        // data.append("AppleIdLink", AppleIdLink)
        // data.append("SpotifyLink", SpotifyLink)
        // data.append("ExplicitContent", ExplicitContent)
        // data.append("InstrumentalFile", Instrumental)

        // data.append("InstrumentalLink", InstrumentalLink)







        // for(var k of Object.keys(REQUEST_DATA)){ TODO - ИСПОЛЬЗОВАТЬ
        //     data.append(k,REQUEST_DATA[k])
        // }

        document.querySelector(".modal-black").style.display = "flex"

        var request = new XMLHttpRequest();
        request.open("POST", "https://fsjkdfjsdkfk.ru/asdasdsdfjsdflkaodkfoq");

        request.onreadystatechange = function () {
            document.querySelector(".modal-black").style.display = "none"
            if (request.status == 200) {
                const a = document.createElement("a")

                //("отправилось");
                
                a.href = "/success.html"
                a.click()
            }
            if (request.status == 400) {
                alert(request.responseText);

            }
        }

        request.send(data);
    }
    /*else{
        ////("говно = " +
        '\n'+UploadType + " - что грузим",
        '\n'+Genre+ " - жанр",
        '\n'+NickName+ " - ник",
        '\n'+TrackName+ " - название трека",
        '\n'+Email+ " - мэил",
        '\n'+TrackText+ " - текст трека",
        '\n'+TextAuthorName+ " - автор текста",
        '\n'+ArrangerName+ " - арангер нейм",
        '\n'+SingerName+ " - сингер нейм",
        '\n'+MusicAuthorName+ " - музик автор нейм",
        '\n'+Promo+ " - промо",
        '\n'+InstagramLink+ " - инст",
        '\n'+Instagram2Link+ " - инст2",
        '\n'+VkPublicLink+ " - вк",
        '\n'+SiteLink+ " - сайт",
        '\n'+AppleIdLink+ " - эпл",
        '\n'+SpotifyLink+ " - спот",
        '\n'+ExplicitContent+ " - мат",
        '\n'+Cover+ " - обложка",
        '\n'+TrackFile+ " - трек",
        '\n'+TrackLink+ " - ссылка на трек",
        '\n'+PreviewStart+ " - секунды",
        '\n'+ReleaseDate+ " - дата",
        '\n'+CoverLink+ " - ссылка на обложку"
        );
        ////(Cover);
        ////(TrackFile);
    }
    //////(ReleaseDate);*/
    // ////(fullnameaut);
}

/* 
`${ReleaseDate.getFullYear()}-${ReleaseDate.getMonth() + 1}-${ReleaseDate.getDate()}`
UploadType
NickName
TrackName
Email
TrackFile
TrackLink
Cover
CoverLink
TextAuthorName
SingerName
ArrangerName
MusicAuthorName
Genre
ReleaseDate
PreviewStart
TrackText
Promo
InstagramLink
Instagram2Link
VkPublicLink
SiteLink
AppleIdLink
SpotifyLink
ExplicitContent
*/

/*сбор вторичных данных*/


/* ------------------------------------------------------ */

/*
input__file.onchange = evt => {
    
    const [file] = input__file.files
    //////(file.type)
    if (file) {
        blah.src = URL.createObjectURL(file)
    }
}
*/
var kkk1 = document.getElementById('kkk')
kkk1.addEventListener("drop", function (event) {
    // Cancel default actions
    event.preventDefault();
    hover_draghover.classList.remove("border-loaded-image")
    var files = event.dataTransfer.files;
    const inputFile = document.getElementById('input__file')
    inputFile.files = files;

    var file = document.getElementById("input__file").files[0];

    var t = file.type.split('/').pop().toLowerCase();




    if (t != "jpeg" && t != "jpg") {
        alert("Загрузите обложку в формате .JPG или .JPEG");
        coverValueOr = false;

        return false;
    }
    else {
        document.getElementById("cover-error-display").classList.remove("_error");
        document.getElementById("CoverLink").classList.remove("_error");
        Cover = input__file.files
        if (Cover[0].size < 1000) {
            alert("Вес файла вашего трека слишком мал! Файл загружен. Вес файла: " + Cover[0].size + " Байт")
        }


        //////(Cover);
        if (file) {
            blah.src = URL.createObjectURL(file)
        }
        coverValueOr = true;
        for (var i = 0; i < files.length; i++) {
            //////("Filename: " + files[i].name);
            //////("Type: " + files[i].type);
            //////("Size: " + files[i].size + " bytes");
        }
    }
}, false);


kkk1.addEventListener("dragover", function (event) {
    event.preventDefault();



    hover_draghover.classList.add("border-loaded-image")

}, false);
kkk1.addEventListener("dragleave", function (event) {
    event.preventDefault();



    hover_draghover.classList.remove("border-loaded-image")

}, false);


let coverValueOr;

function validateImage() {
    document.getElementById("cover-error-display").classList.remove("_error");
    document.getElementById("CoverLink").classList.remove("_error");

    //var formData = new FormData();
    var file = document.getElementById("input__file").files[0];
    //formData.append("Filedata", file);

    var t = file.type.split('/').pop().toLowerCase();
    if (t != "jpg" && t != "jpeg" || file.size < 100) {
        coverValueOr = false;

        document.getElementById("cover-error-display").classList.add("_error");
    }
    else {
        const [file] = input__file.files
        Cover[0] = input__file.files
        if (Cover[0].size < 1000) {
            alert("Вес файла вашего трека слишком мал! Файл загружен. Вес файла: " + Cover[0].size + " Байт")
        }


        if (file) {
            blah.src = URL.createObjectURL(file)
            coverValueOr = true;
        }
    }
}


let audioValueOr;
function validateAudio() {
    document.getElementById("zzz").classList.remove("_error");
    document.getElementById("TrackLink-area").classList.remove("_error");
    //var formData = new FormData();
    var file = document.getElementById("input__file-audio").files[0];
    //formData.append("Filedata", file);

    var fileName = file.name;
    //////(file);
    var t = file.type.toLowerCase().split('/').pop();
    if (t != "wav" && t != "x-wav" || file.size < 100) {
        alert("Загрузите трек в формате .WAV");
        audioValueOr = false;
    }
    else {
        document.getElementById("display-track-name").innerText = fileName;
        audioValueOr = true;
        TrackFile = file;
        if (TrackFile.size < 100) {
            alert("Вес файла вашего трека слишком мал! Файл загружен. Вес файла: " + TrackFile.size + " Байт")
        }

    }

}



//Instrumental
//InstrumentalLink

let isValidInstumental;
function validateAudioSecond() {
    document.getElementById("instumental_file").classList.remove("_error");
    document.getElementById("InstrumentalLink-area").classList.remove("_error");
    //var formData = new FormData();
    var file = document.getElementById("input__file-audio-second").files[0];
    //formData.append("Filedata", file);

    var fileName = file.name;
    //////(file);
    var t = file.type.toLowerCase().split('/').pop();
    if (t != "wav" && t != "x-wav" || file.size < 100) {
        alert("Загрузите трек в формате .WAV");
        isValidInstumental = false;
    }
    else {
        document.getElementById("display-track-name-second").innerText = fileName;
        isValidInstumental = true;
        Instrumental = file;
        if (Instrumental.size < 100) {
            alert("Вес файла вашего трека слишком мал! Файл загружен. Вес файла: " + Instrumental.size + " Байт")
        }

    }

}


function instumentalAnyDrop() {
    document.getElementById("instumental_file").classList.remove("_error");
    document.getElementById("InstrumentalLink-area").classList.remove("_error");
    //(InstrumentalLink);
    InstrumentalValue = document.getElementById("InstrumentalLink-area").value
    if (isValidInstumental == true || InstrumentalValue != "") {
        //////("--- AUDIO UPLOAD OR HAVE A LINK ---");
        InstrumentalLink = InstrumentalValue;
    }
    else {
        if (isValidInstumental == null) {
            document.getElementById("instumental_file").classList.add("_error")
        }
        if (InstrumentalLink == null) {
            document.getElementById("InstrumentalLink-area").classList.add("_error")
        }
        if (isValid) {
            document.getElementById("InstrumentalLink-area").scrollIntoView({ block: "center", behavior: "auto" });
        }
        if (UploadType != 1) {
            isValid = false;
            //(isValid+"инструментал энидроп");
        }
    }

}




//включаем компоненты

TrackSecondWork();
select();
