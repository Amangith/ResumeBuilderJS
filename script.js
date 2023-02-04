function submitForm(e) {
    e.preventDefault()
    const image_url = document.querySelector("#image-url").value
    const name = document.querySelector("#name").value
    const address = document.querySelector("#address").value
    const phone = document.querySelector("#phone").value
    const email = document.querySelector("#email").value
    const website = document.querySelector("#web").value
    const obj = document.querySelector("#obj").value


    const imageEle = document.querySelector(".image-container img")
    imageEle.src = image_url;

    const nameEle = document.querySelector(".name")
    nameEle.innerText = name;

    const addressEle = document.querySelector("#add")
    addressEle.innerText = address;

    const phoneEle = document.querySelector("#phone-num")
    phoneEle.innerText = phone;

    const emailEle = document.querySelector("#mail")
    emailEle.innerText = email;

    const websiteEle = document.querySelector("#website")
    websiteEle.innerText = website;

    const skills = document.querySelector("#skills").value
    const skillsArr = skills.split(',')
    let str = ""
    for(let i = 0;i < skillsArr.length; i++) {
        str = str + `<div class="value">${skillsArr[i]}</div>`
    }
    document.querySelector(".skills-details").innerHTML = str;

    const objEle = document.querySelector(".obj-description")
    objEle.innerText = obj;

    const experienceEle = document.getElementsByClassName("experience-input-field")
    const designEle = document.getElementsByClassName("desig")
    const descriptionEle = document.getElementsByClassName("descrip")
    const expHolderEle = document.getElementById("experiences-holder")
    expHolderEle.innerHTML = ""
    for(let i = 0; i < experienceEle.length; i++) {
        const exp = experienceEle[i].value
        const expRole = designEle[i].value
        const expProj = descriptionEle[i].value
        const newDiv = document.createElement("div")
        const newDiv1 = document.createElement("div")
        const newDiv2 = document.createElement("div")
        newDiv.innerHTML = exp
        newDiv1.innerHTML = expRole
        newDiv2.innerHTML = expProj
        expHolderEle.appendChild(newDiv);
        expHolderEle.appendChild(newDiv1);
        expHolderEle.appendChild(newDiv2);
    }
    const educationELe = document.getElementsByClassName("education-input-field")
    const educationDeg = document.getElementsByClassName("education-deg-field")
    const educationHolder = document.getElementById("edu-details")
    educationHolder.innerHTML = ""
    for(let i = 0; i < educationELe.length; i++) {
        const college = educationELe[i].value
        const deg = educationDeg[i].value
        const new1Div = document.createElement("div")
        const new2Div = document.createElement("div")
        new1Div.innerHTML = college
        new2Div.innerHTML = deg
        educationHolder.appendChild(new1Div)
        educationHolder.appendChild(new2Div)
    }
}

function addExperienceField() {
    const inputEle = document.createElement("input")
    inputEle.type = "text"
    inputEle.className = "experience-input-field"
    const input1Ele = document.createElement("input")
    input1Ele.type = "text"
    input1Ele.className = "desig"
    const input2Ele = document.createElement("input")
    input2Ele.type = "text"
    input2Ele.className = "descrip"
    document.getElementById("companyName").appendChild(inputEle);
    document.getElementById("companyDes").appendChild(input1Ele);
    document.getElementById("companyDesc").appendChild(input2Ele);
}
function addEducationField() {
    const inputEle = document.createElement("input")
    inputEle.type = "text"
    inputEle.className = "education-input-field"
    document.getElementById("college-name-container").appendChild(inputEle);
    const inputEle1 = document.createElement("input")
    inputEle1.type = "text"
    inputEle1.className = "education-deg-field"
    document.getElementById("college-deg-container").appendChild(inputEle1);
}