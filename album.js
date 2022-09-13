let visibility = false;
var addAllow = true
var trackPageIndex = 0
const albumFields = document.querySelectorAll('._album_forms')
const albumValues = document.querySelectorAll('.album_track_fields')
const albumBlockValues = document.querySelectorAll('.album_field_for_block')
var AlbumTracks = [];
document.getElementById("TrackName-value").addEventListener("input", function () {
    if (UploadType == 2) {
        const AlbumElements = document.querySelectorAll('.AlbumTrackChild')
        AlbumElements[trackPageIndex].children[0].innerHTML = document.getElementById("TrackName-value").value
        AlbumTracks[trackPageIndex].TrackName = document.getElementById("TrackName-value").value
    }
})
var albumGlobalValid;
AlbumVisibility = function () {
    if (visibility) {
        for (let i = 0; i < albumFields.length; i++) {
            if (albumFields[i].classList.contains("_album_true")) {
                albumFields[i].classList.remove("_album_delete");
                albumFields[i].classList.add("_album_display");
            }
            else {
                albumFields[i].classList.remove("_album_display");
                albumFields[i].classList.add("_album_delete");
            }
        }
    }
    else {
        for (let i = 0; i < albumFields.length; i++) {
            if (albumFields[i].classList.contains("_album_false")) {
                albumFields[i].classList.remove("_album_delete");
                albumFields[i].classList.add("_album_display");
            }
            else {
                albumFields[i].classList.remove("_album_display");
                albumFields[i].classList.add("_album_delete");
            }
        }
    }
}
var FNCstartADD = false
var FNCstartTrackSelect = false
var lastPageIndex
AlbumTrackAdd = function () {
    if (!addAllow) {
        AlbumTrackValidate();
    }
    if (addAllow) {
        tempTrackName = "Название трека"
        if (FNCstartADD == true) {
            tempTrackName == AlbumTracks[trackPageIndex].TrackName
        }
        AlbumData();
        let personChild = document.createElement('div');
        personChild.innerHTML += /* html */`
                <div class="fname-of-person-block AlbumTrackChild" onclick="TrackClick(this)">
                    <h1 class="fname-person album_text">`+ tempTrackName + `</h1>
                    <span class="del-person track-del" onclick="TrackNameDelete()">
                        <img src="svg/del-person.svg" alt="" class="del-person-img">
                    </span>
                </div>`;
        document.getElementById("AlbumParent").appendChild(personChild);
        lastPageIndex = trackPageIndex
        if (FNCstartADD == false) {
            personChild.children[0].click();
        }
        else {
            personChild.children[0].click();
        }
        Clear();
        addAllow = false
    }
}
AlbumTrackValidate = function () {
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
        TextAuthorName = []
        SingerName = []
        ArrangerName = []
        MusicAuthorName = []
        TextAuthorName = humanValues.author
        SingerName = humanValues.singer
        ArrangerName = humanValues.aranj
        MusicAuthorName = humanValues.compozitor
        addAllow = true
    }
    else {
        addAllow = false
    }

}

AlbumData = function () {
    let trackValues = {
        Instrumental,
        InstrumentalLink,
        UploadType,
        Genre,
        NickName,
        TrackName,
        Email,
        TrackText,
        Promo,
        InstagramLink,
        Instagram2Link,
        VkPublicLink,
        SiteLink,
        AppleIdLink,
        SpotifyLink,
        ExplicitContent,
        Cover,
        CoverLink,
        TrackFile,
        TrackLink,
        PreviewStart,
        ReleaseDate: document.getElementById("date-picker-string").value,
        TextAuthorName: [],
        SingerName: [],
        ArrangerName: [],
        MusicAuthorName: [],

    }
    trackValues.TextAuthorName = TextAuthorName
    trackValues.SingerName = SingerName
    trackValues.ArrangerName = ArrangerName
    trackValues.MusicAuthorName = MusicAuthorName
    trackValues.UploadType = UploadType
    trackValues.NickName = NickName
    trackValues.TrackName = TrackName
    trackValues.Email = Email
    trackValues.TrackFile = TrackFile
    trackValues.TrackLink = TrackLink
    trackValues.Cover = Cover ? Cover[0] : undefined
    trackValues.CoverLink = CoverLink
    trackValues.TextAuthorName = TextAuthorName
    trackValues.SingerName = SingerName
    trackValues.ArrangerName = ArrangerName
    trackValues.MusicAuthorName = MusicAuthorName
    trackValues.Genre = Genre
    trackValues.ReleaseDate = ReleaseDate
    trackValues.PreviewStart = parseInt(PreviewStart + (parseInt(prevMin) * 60))
    trackValues.TrackText = TrackText
    trackValues.Promo = Promo
    trackValues.InstagramLink = InstagramLink
    trackValues.Instagram2Link = Instagram2Link
    trackValues.VkPublicLink = VkPublicLink
    trackValues.SiteLink = SiteLink
    trackValues.AppleIdLink = AppleIdLink
    trackValues.SpotifyLink = SpotifyLink
    trackValues.ExplicitContent = ExplicitContent
    trackValues.Instrumental = Instrumental
    trackValues.InstrumentalLink = InstrumentalLink
    AlbumTracks.push(trackValues);
}

AlbumDataSave = function () {
    AlbumTracks[trackPageIndex].TextAuthorName = TextAuthorName
    AlbumTracks[trackPageIndex].SingerName = SingerName
    AlbumTracks[trackPageIndex].ArrangerName = ArrangerName
    AlbumTracks[trackPageIndex].MusicAuthorName = MusicAuthorName
    AlbumTracks[trackPageIndex].UploadType = UploadType
    AlbumTracks[trackPageIndex].NickName = NickName
    AlbumTracks[trackPageIndex].TrackName = TrackName
    AlbumTracks[trackPageIndex].Email = Email
    AlbumTracks[trackPageIndex].TrackFile = TrackFile
    AlbumTracks[trackPageIndex].TrackLink = TrackLink
    AlbumTracks[trackPageIndex].Cover = Cover ? Cover[0] : undefined
    AlbumTracks[trackPageIndex].CoverLink = CoverLink
    AlbumTracks[trackPageIndex].TextAuthorName = TextAuthorName
    AlbumTracks[trackPageIndex].SingerName = SingerName
    AlbumTracks[trackPageIndex].ArrangerName = ArrangerName
    AlbumTracks[trackPageIndex].MusicAuthorName = MusicAuthorName
    AlbumTracks[trackPageIndex].Genre = Genre
    AlbumTracks[trackPageIndex].ReleaseDate = ReleaseDate
    AlbumTracks[trackPageIndex].PreviewStart = parseInt(PreviewStart + (prevMin * 60))
    AlbumTracks[trackPageIndex].TrackText = TrackText
    AlbumTracks[trackPageIndex].Promo = Promo
    AlbumTracks[trackPageIndex].InstagramLink = InstagramLink
    AlbumTracks[trackPageIndex].Instagram2Link = Instagram2Link
    AlbumTracks[trackPageIndex].VkPublicLink = VkPublicLink
    AlbumTracks[trackPageIndex].SiteLink = SiteLink
    AlbumTracks[trackPageIndex].AppleIdLink = AppleIdLink
    AlbumTracks[trackPageIndex].SpotifyLink = SpotifyLink
    AlbumTracks[trackPageIndex].ExplicitContent = ExplicitContent
    AlbumTracks[trackPageIndex].Instrumental = Instrumental
    AlbumTracks[trackPageIndex].InstrumentalLink = InstrumentalLink
}



function TrackNameDelete(delEl) {
    delTrack = true;
}

function Clear() {
    if (AlbumTracks.length > 1) {
        document.querySelectorAll('.album_track_fields').forEach(el => {
            if (el.dataset.key != "nick") {
                if (el.dataset.key != "Cover" && el.dataset.key != "Date") {
                    el.value = null;
                }
            }
            if (el.dataset.key == "Genre") {
                el.dataset.value = AlbumTracks[trackPageIndex].Genre
            }
            if (el.dataset.key == "Track") {
                TrackFile = []
                document.getElementById("display-track-name").innerText = 'Загрузите .wav'
            }
            if (el.dataset.key == "Inst") {
                Instrumental = []
                document.getElementById("display-track-name-second").innerText = 'Загрузите .wav'
            }
            if (["mins", "seconds"].includes(el.dataset.key)) {
                el.value = 0
            }
            if (el.dataset.key == "EXP") {
                el.checked = false;
            }
        });
    }
}
var personTrue = false;
let delTrack = false;
var pizda = false;
var SelectedTrack;
function TrackClick(e) {
    FNCstartADD = true
    FNCstartTrackSelect = true
    if (delTrack == true) {
        delTrack = false;
        var ib = 0
        const TrackButtons = document.querySelectorAll(`.AlbumTrackChild`)
        for (let i = 0; i < TrackButtons.length; i++) {
            if (e == TrackButtons[i]) {
                ib = i
                break
            }
        }
        if (AlbumTracks.length > 1) {
            e.remove()
            AlbumTracks.splice(ib, 1)
            if (trackPageIndex != 0) {
                if (trackPageIndex >= ib) {
                    trackPageIndex--
                }
                else {
                    trackPageIndex++
                }
            }
            AlbumDataVisual();
            TrackButtons[trackPageIndex].click();
            AlbumDataVisual();
        }
    }
    else {
        let posX = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        let posY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        AlbumTrackValidate();
        if (addAllow) {
            AlbumDataSave();
            Clear();
            SelectedTrack = e
            const TrackButtons = document.querySelectorAll(`.AlbumTrackChild`)
            for (let index = 0; index < TrackButtons.length; index++) {
                if (e == TrackButtons[index]) {
                    CopyLast();
                    trackPageIndex = index
                    break
                }
            }
            for (var t of document.querySelectorAll(`.AlbumTrackChild`)) {
                t.classList.remove("_selected_person")
            }
            e.classList.add('_selected_person');
            AlbumDataVisual();
            CompileAlbum();
            document.querySelector(".genre-picker").dataset.value = AlbumTracks[trackPageIndex].Genre
            document.querySelector(".genre-picker").children[0].children[0].innerText = AlbumTracks[trackPageIndex].Genre
            AlbumTracks[trackPageIndex].Cover = Cover[0]
            AlbumTracks[trackPageIndex].TrackFile = TrackFile
            AlbumTracks[trackPageIndex].Instrumental = Instrumental
            AlbumTracks[trackPageIndex].ReleaseDate = ReleaseDate
            if (AlbumTracks[trackPageIndex].Cover)
                if (AlbumTracks[trackPageIndex].Cover.length > 0)
                    blah.src = URL.createObjectURL(AlbumTracks[trackPageIndex].Cover[0])
            if (AlbumTracks[trackPageIndex].Cover == undefined) {
                blah.src = "svg/load/default-image.png";
            }
        }
        else {
            if (pizda == false) {
                window.scrollTo(posX, posY)
                pizda = true
                const docs = document.querySelectorAll("._error")
                docs.forEach(doc => {
                    doc.classList.remove("_error")
                });
            }
        }
    }
}
AlbumDataVisual = function () {
    if (UploadType == 2) {
        albumValues.forEach(element => {
            if (UploadType == 2) {
                if (element.dataset.key == "albumTrackName") {
                    if (AlbumTracks[trackPageIndex].TrackName != undefined
                        &&
                        AlbumTracks[trackPageIndex].TrackName != "") {
                        element.value = AlbumTracks[trackPageIndex].TrackName
                    }
                    else {
                        element.value = null
                    }
                }
                if (element.dataset.key == "albumTrackLink") {
                    if (AlbumTracks[trackPageIndex].TrackLink != undefined
                        &&
                        AlbumTracks[trackPageIndex].TrackLink != "") {
                        element.value = AlbumTracks[trackPageIndex].TrackLink
                    }
                    else {
                        element.value = null
                    }
                }
                if (element.dataset.key == "albumTrackText") {
                    if (AlbumTracks[trackPageIndex].TrackText != undefined
                        &&
                        AlbumTracks[trackPageIndex].TrackText != "") {
                        element.value = AlbumTracks[trackPageIndex].TrackText
                    }
                    else {
                        element.value = null
                    }
                }
                if (element.dataset.key == "albumInstumentalLink") {
                    if (AlbumTracks[trackPageIndex].InstrumentalLink != undefined
                        &&
                        AlbumTracks[trackPageIndex].InstrumentalLink != "") {
                        element.value = AlbumTracks[trackPageIndex].InstrumentalLink
                    }
                    else {
                        element.value = null
                    }
                }
                if (element.dataset.key == "nick") {
                    if (AlbumTracks[trackPageIndex].NickName != undefined
                        &&
                        AlbumTracks[trackPageIndex].NickName != "") {
                        element.value = AlbumTracks[trackPageIndex].NickName
                    }
                    else {
                        element.value = element.value
                    }
                }
                if (element.dataset.key == "Genre") {
                    if (AlbumTracks[trackPageIndex].Genre != undefined
                        &&
                        AlbumTracks[trackPageIndex].Genre != "") {
                        element.dataset.value = AlbumTracks[trackPageIndex].Genre
                    }
                    else {
                        element.dataset.value = null
                    }
                }
                if (element.dataset.key == "Track") {
                    if (AlbumTracks[trackPageIndex].TrackFile != undefined
                        &&
                        AlbumTracks[trackPageIndex].TrackFile != "") {
                        document.getElementById("display-track-name").innerText = AlbumTracks[trackPageIndex].TrackFile.name
                        TrackFile = AlbumTracks[trackPageIndex].TrackFile

                    }
                    else {
                        TrackFile = []
                        document.getElementById("display-track-name").innerText = 'Загрузите .wav'
                    }
                }
                if (element.dataset.key == "Inst") {
                    if (AlbumTracks[trackPageIndex].Instrumental != undefined
                        &&
                        AlbumTracks[trackPageIndex].Instrumental != "") {
                        document.getElementById("display-track-name-second").innerText = AlbumTracks[trackPageIndex].Instrumental.name
                        Instrumental = AlbumTracks[trackPageIndex].Instrumental

                    }
                    else {
                        Instrumental = []
                        document.getElementById("display-track-name-second").innerText = 'Загрузите .wav'
                    }
                }
                if (element.dataset.key == "Cover") {
                    if (AlbumTracks[trackPageIndex].Cover != undefined
                        &&
                        AlbumTracks[trackPageIndex].Cover != "") {
                        Cover[0] = AlbumTracks[trackPageIndex].Cover
                    }
                    else {
                        Cover[0] = undefined
                    }
                }
                if (element.dataset.key == "mins") {
                    if (AlbumTracks[trackPageIndex].PreviewStart != undefined
                        ||
                        AlbumTracks[trackPageIndex].PreviewStart != 0) {
                        element.value = Math.floor(AlbumTracks[trackPageIndex].PreviewStart / 60)
                        prevMin = element.value

                    }
                    else {
                        prevMin = 0
                    }

                }
                if (element.dataset.key == "seconds") {
                    if (AlbumTracks[trackPageIndex].PreviewStart != undefined
                        ||
                        AlbumTracks[trackPageIndex].PreviewStart != 0) {
                        element.value = Math.floor(AlbumTracks[trackPageIndex].PreviewStart % 60)


                    }
                    else {
                        prevMin = 0
                    }

                }
                if (element.dataset.key == "Date") {
                    if (AlbumTracks[trackPageIndex].ReleaseDate != undefined
                        ||
                        AlbumTracks[trackPageIndex].ReleaseDate != "") {
                        ReleaseDate = AlbumTracks[trackPageIndex].ReleaseDate
                        element.value = AlbumTracks[trackPageIndex].ReleaseDate
                    }
                    else {
                        element.value = ReleaseDate
                    }


                }
                if (element.dataset.key == "EXP") {
                    if (AlbumTracks[trackPageIndex].ExplicitContent != undefined
                        ||
                        AlbumTracks[trackPageIndex].ExplicitContent != "") {
                        ExplicitContent = AlbumTracks[trackPageIndex].ExplicitContent
                        element.checked = AlbumTracks[trackPageIndex].ExplicitContent
                    }
                    else {
                        element.checked = false
                    }


                }










            }
        })
    }
    //.log('секи');
    //.log(AlbumTracks[trackPageIndex].PreviewStart);
    //.log('-----');
    //.log('дата');
    //.log(AlbumTracks[trackPageIndex].ReleaseDate);
    //.log('-----');
}

function ClearHumanValues() {
    for (var k of Object.keys(humanValues)) {
        humanValues[k] = []
    }
}

var parentBlock
CompileAlbum = function () {


    ClearHumanValues()


    const data = [
        { data: AlbumTracks[trackPageIndex].TextAuthorName, type: "author" },
        { data: AlbumTracks[trackPageIndex].SingerName, type: "singer" },
        { data: AlbumTracks[trackPageIndex].ArrangerName, type: "aranj" },
        { data: AlbumTracks[trackPageIndex].MusicAuthorName, type: "compozitor" },
    ]

    for (var d of data) {

        var parentBlock = document.querySelector(`.head-persons-${d.type}`)
        parentBlock.querySelectorAll(".person-tab").forEach(i => {
            i.remove()
        })
        //("DATA");
        //(d.data)
        for (var p of d.data) {
            PersonsReCreate(p, d.type, parentBlock)
        }
    }
}



// //("---TextAuthorName---");
// //(AlbumTracks[trackPageIndex].TextAuthorName);
// //("------");
// //("---SingerName---");
// //(AlbumTracks[trackPageIndex].SingerName);
// //("------");
// //("---ArrangerName---");
// //(AlbumTracks[trackPageIndex].ArrangerName);
// //("------");
// //("---MusicAuthorName---");
// //(AlbumTracks[trackPageIndex].MusicAuthorName);
// //("------");




function PersonsReCreate(el, type, parentBlock) {
    let personChild = document.createElement('div');
    personChild.classList.add('fname-of-person-block');
    personChild.classList.add('person-tab');
    personChild.classList.add(`${type}`);
    personChild.id = ("parent-block-for-delete");
    personChild.setAttribute("name", "selectedPerson");
    personChild.setAttribute("onclick", "WhatWeWont(this)");
    personChild.dataset.type = type
    personChild.innerHTML += /* html */`
        <h1 class="fname-person" id="fname-person-visual" data-type="${type}">${el.lname}</h1>
        <span onclick="PersonsNameDelete()" class="del-person" id="delete-person-btn">
            <img src=`+ delPersonImg + ` alt="" class="del-person-img">
        </span>
    `;


    // PersonsBlock.appendChild(personChild);

    // PersonsAr.push(personChild)
    humanValues[type].push(el)



    //el.parentElement.parentElement.appendChild(personChild);

    parentBlock.appendChild(personChild)

    personChild.click()

}


function ClearPersons() {
    //("---");
    //("индекс персоны " + trackPageIndex);
    //("---");
    const persons = document.querySelectorAll('.person-tab')
    persons.forEach(i => {
        i.remove()
    })



    //("хуман до удаления");
    //(humanValues);
    humanValues = null;
    humanValues = {
        author: [],
        aranj: [],
        singer: [],
        compozitor: []
    }
    selectedPageIndex = {
        author: 0,
        aranj: 0,
        singer: 0,
        compozitor: 0
    }

    document.querySelectorAll(".Aut-Values").forEach(i => {
        i.value = ""
    })
    document.querySelectorAll(".heade-of-block-flex").forEach(b => {
        b.querySelector(".add-new-person").click()
    })



}

const copyValues = document.querySelectorAll('.kilo');
//(copyValues);
function CopyLast() {
    if (UploadType == 2) {
        copyValues.forEach(element => {
            if (element.dataset.key == 'nick') {
                //.log('element value copy before change index');
                //.log(element.value);
                element.value = AlbumTracks[trackPageIndex].NickName
            }
        });
    }
}

let tempsex
let tempmin
const sexc = document.querySelectorAll('.sexc');
function VisualSex(full) {
    AlbumTracks[trackPageIndex].PreviewStart / 60
    sexc.forEach(element => {
        if (element.dataset.key == "mins") {
            if (AlbumTracks[trackPageIndex].PreviewStart / 60) {
                element.value = 0
            }
            else {
                element.value = Math.round(AlbumTracks[trackPageIndex].PreviewStart / 60)
            }

            //AlbumTracks[trackPageIndex].PreviewStart+=element.value

        }
        else {
            element.value = Math.round(60 - AlbumTracks[trackPageIndex].PreviewStart % 60)
            //AlbumTracks[trackPageIndex].PreviewStart+=element.value
        }

    });
}



