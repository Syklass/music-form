//let PersonsArValueAut = []



var humanValues = {
    author:[],
    aranj:[],
    singer:[],
    compozitor:[]
}


var selectedPageIndex = {
    author:0,
    aranj:0,
    singer:0,
    compozitor:0   
}

var inputs = {
    author:[],
    aranj:[],
    singer:[],
    compozitor:[]
}


var defaultNames = {
    author:"Автор",
    aranj:"Аранжировщик",
    singer:"Исполнитель",
    compozitor:"Композитор"
}

// let fullnameaut = {
//     lname: "",
//     fname: "",
//     mname: "",
//     checkbox: false,
//     isComlete: false
// };

let functionStart = false;

let mnameTemp;



//gShape must be an array of HTMLElement


const autMas = document.querySelectorAll(".Aut-Values");

let CurrentSelectedValue = 0;
autMas.forEach(element => {

    inputs[element.dataset.type].push(element)

            element.addEventListener("input", function () {
                const type = this.dataset.type
                humanValues[type][selectedPageIndex[type]][this.dataset.key] = this.value
                if(this.dataset.key == "lname"){
                    const textContainer = document.querySelectorAll(`.person-tab.${type}`)[selectedPageIndex[type]].querySelector("h1") 
                    if(this.value == ""){
                        textContainer.innerHTML = defaultNames[type]
                    }else{
                        textContainer.innerHTML = this.value
                    }
                    
                }
                validateInputs(this)
                //debugger;
            })


    
});

document.querySelectorAll(".fatherBox").forEach(ch =>{
    ch.addEventListener("change",function(){
        ////(this.checked)
        humanValues[this.dataset.type][selectedPageIndex[this.dataset.type]]["checkbox"] = this.checked

        inputs[this.dataset.type].forEach(i =>{
            if(i.dataset.key == "mname"){
                i.classList.toggle("_u-cant-input")
                i.disabled = i.classList.contains("_u-cant-input")
                i.value = ""
                humanValues[this.dataset.type][selectedPageIndex[this.dataset.type]]["mname"] = ""
                if(this.checked){
                    i.classList.remove("_error")
                }
                else{
                    i.classList.add("_error")
                    i.disabled=i.classList.contains("_u-cant-input")
                }
                
                
                humanValues[this.dataset.type][selectedPageIndex[this.dataset.type]]["mname"] = ""
            }
            
        })
    })
})





var PersonsAr = []; //хранит дивы
var PersonAuthorValueAr = []; //хранит буковки
let PersonValue;
let delMe = false;

delPersonImg = "svg/del-person.svg";
let PersonsBlock = document.querySelector(".heade-of-block-flex");




var personVisualChangeFname = document.getElementById('person-change-fname-visual');



function PersonsNameDelete(delEl) {
    delMe = true;
}



// PersonsNameAdder();


function WhatWeWont(e) {
    

    if (delMe == true) {
        //allEls[CurrentSelectedValue-1].classList.add("_selected_person")
        delMe = false;

        const buttons = document.querySelectorAll(`.person-tab.${e.dataset.type}`)
        var ib = 0
        for (let index = 0; index < buttons.length; index++) {
            if(e == buttons[index]){
                ib = index
                break
            }
            
        }

        if(humanValues[e.dataset.type].length > 1){
            e.remove()
            humanValues[e.dataset.type].splice(ib,1)
            if(selectedPageIndex[e.dataset.type] != 0){
                if(selectedPageIndex[e.dataset.type] > ib){
                    selectedPageIndex[e.dataset.type]--
                }
                else{
                    selectedPageIndex[e.dataset.type]++
                }
            }
            

            
            document.querySelectorAll(`.person-tab.${e.dataset.type}`)[selectedPageIndex[e.dataset.type]].click()

        //debugger;
        } 

    }else{
        PersonValue = e

        const buttons = document.querySelectorAll(`.person-tab.${e.dataset.type}`)

        for (let index = 0; index < buttons.length; index++) {
            if(e == buttons[index]){
                selectedPageIndex[e.dataset.type] = index
                break
            }
            
        }
        
        ////(selectedPageIndex[e.dataset.type])
        for(var t of document.querySelectorAll(`.person-tab.${e.dataset.type}`)){
            t.classList.remove("_selected_person")
        }

        e.classList.add('_selected_person');

        for(var i of inputs[e.dataset.type]){
            i.value = humanValues[e.dataset.type][selectedPageIndex[e.dataset.type]][i.dataset.key];
            validateInputs(i)
        }

    }
   
}







var selectedPerson = document.querySelectorAll(".fname-of-person-block")

let NumberOfPersonsGive = false;


function PersonsNameAdder(el) {
    let personChild = document.createElement('div');
    personChild.classList.add('fname-of-person-block');
    personChild.classList.add('person-tab');
    personChild.classList.add(`${el.dataset.type}`);
    personChild.id = ("parent-block-for-delete");
    personChild.setAttribute("name", "selectedPerson");
    personChild.setAttribute("onclick", "WhatWeWont(this)");
    personChild.dataset.type = el.dataset.type
    personChild.innerHTML += /* html */`
        <h1 class="fname-person" id="fname-person-visual" data-type="${el.dataset.type}">${defaultNames[el.dataset.type]}</h1>
        <span onclick="PersonsNameDelete()" class="del-person" id="delete-person-btn">
            <img src=`+ delPersonImg + ` alt="" class="del-person-img">
        </span>
    `;


    // PersonsBlock.appendChild(personChild);

    // PersonsAr.push(personChild)

    
    functionStart = true;

    var dataPattern = {
        lname: "",
        fname: "",
        mname: "",
        checkbox: false,
    };
    humanValues[el.dataset.type].push(dataPattern)


    
    el.parentElement.parentElement.appendChild(personChild);
    personChild.click()



}

function validateInputs(input){
    ////("INPUT")
    // ////(input)
    if (input.value){   
        input.classList.remove("_error")
    }

    if (input.dataset.key == "mname") {
        var checkbox = null
        document.querySelectorAll(".fatherBox").forEach(fB =>{
            if(fB.dataset.type == input.dataset.type){
                checkbox = fB
            }
        })
        if(humanValues[input.dataset.type][selectedPageIndex[input.dataset.type]]["checkbox"] == true){
            input.classList.remove("_error");
            input.classList.add("_u-cant-input");
            
            checkbox.checked = true
            
            
        }else{
            
            input.classList.remove("_u-cant-input")
            
            checkbox.checked = false
            
            
        }
        input.disabled=input.classList.contains("_u-cant-input")
        if (input.classList.contains("_u-cant-input")) {
            input.value=""
        }

    }
}

function PersonsValidate(){
    var br = false
    for(var t of Object.keys(humanValues)){
        for (var h = 0; h < humanValues[t].length; h++) {
            for(var k of Object.keys(humanValues[t][h])){
                ////(humanValues[t][h])
                if(humanValues[t][h][k] === ""){
                    ////("PIZDEC")
                    if(!(k == "mname" && humanValues[t][h]["checkbox"] == true)){
                        if(isValid){
                            document.querySelectorAll(`.person-tab.${t}`)[h].click()
                            inputs[t].forEach(i =>{
                                
                                if(i.dataset.key == k){
                                    i.scrollIntoView({ block: "center", behavior: "auto" });
                                    br = true
                                }
                            })
                        }
                        isValid = false
                    }else{
                        ////("ANRI PIZDEC)
                    }
                }
                if(br)
                    break
            }
            if(br)
                break
        }
        if(br)
            break
    }

}





document.querySelectorAll(".add-new-person").forEach(b =>{
    b.click()
})