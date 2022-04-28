let descriptiveBox = document.getElementById("descriptiveBox");
let descriptiveText = document.getElementById("descriptiveText");
let debtReport = document.getElementById("debtReport");
let vacantReport = document.getElementById("vacantReport");
let collectionReport = document.getElementById("collectionReport");
let billingReport = document.getElementById("billingReport");
let kaggle = document.getElementById("kaggle");
let award = document.getElementById("award");
let crossIcon = document.getElementById("crossIcon");
let achievementList = document.getElementById('achievementList');
let homeSide = document.getElementById("homeSide");
let aboutMeSide = document.getElementById("aboutMeSide");
let resumeSide = document.getElementById("resumeSide");
let contactSide = document.getElementById("contactSide");
let sideBar = document.getElementById("sidebar");
let hiddenMenu = document.getElementById("menu");
let sideBarOpen = false;

let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");


clickHandler = (jobName) => {

    if(jobName==="debtReport"){
        descriptiveText.innerHTML = "Debt report works out the debt level of single customer and can be filtered by a number of conditions, which enables a number of finance analysis to be done."
    } else if (jobName==="vacantReport"){
        descriptiveText.innerHTML = "Vacant consumption report sources data directly from raw metering data that helps convering the potential loss."
    } else if (jobName==="collectionReport"){
        descriptiveText.innerHTML = "Collection report divides ages of debt for each customer, in a most efficient way in terms of runtime, that can be used for collection of debt."
    } else if (jobName==="billingReport"){
        descriptiveText.innerHTML = "Billing report is a report indicating the billing performance each month, which gives idea of overall revenue and profit generation."
    } else if (jobName==="kaggle"){
        descriptiveText.innerHTML = "Kaggle, a subsidiary of Google LLC, is an online community of data scientists and machine learning practitioners."
    } else if (jobName==="award"){
        descriptiveText.innerHTML = "Five start award won on 2017, voted by colleages company wide."
    }

    descriptiveBox.style.display = "flex";
    descriptiveBox.style.flexDirection = "column";
    achievementList.style.display = "none";
}


colorSideBar = () => {

    // let pageHeight = document.body.clientHeight;
    let firstBreak = line1.offsetTop/2;
    let secondBreak = (line2.offsetTop + line1.offsetTop)/2;
    let thirdBreak = (line3.offsetTop + line2.offsetTop)/2;
    // let fourthBreak = (line4.offsetTop + line3.offsetTop)/2;

    let currentHeight = document.documentElement.scrollTop;
    let normalColor = "rgba(228, 235, 232, 0.897)";
    let currentColor = "rgb(67, 94, 95)";

    if (currentHeight <= firstBreak) {
        homeSide.style.backgroundColor = currentColor;
        aboutMeSide.style.backgroundColor = normalColor;
        resumeSide.style.backgroundColor = normalColor;
        contactSide.style.backgroundColor = normalColor;
    } else if (currentHeight > firstBreak && currentHeight <= secondBreak){
        homeSide.style.backgroundColor = normalColor;
        aboutMeSide.style.backgroundColor = currentColor;
        resumeSide.style.backgroundColor = normalColor;
        contactSide.style.backgroundColor = normalColor;
    } else if (currentHeight > secondBreak && currentHeight <= thirdBreak){
        homeSide.style.backgroundColor = normalColor;
        aboutMeSide.style.backgroundColor = normalColor;
        resumeSide.style.backgroundColor = currentColor;
        contactSide.style.backgroundColor = normalColor;
    } else {
        homeSide.style.backgroundColor = normalColor;
        aboutMeSide.style.backgroundColor = normalColor;
        resumeSide.style.backgroundColor = normalColor;
        contactSide.style.backgroundColor = currentColor;
    }
}

showSideBar = () => {

    if(!sideBarOpen) {
        sideBar.style.display = 'flex';
        sideBar.style.flexDirection = 'column';
        sideBar.style.justifyContent = 'flex-start';
        sideBarOpen = true;
    } else {
        sideBar.style.display = 'none';
        sideBarOpen = false;
    }

}

function closeSideBar(event) {
    let isClickInsideElement = sideBar.contains(event.target);
    let isClickOnMenu = hiddenMenu.contains(event.target);
    if(!isClickInsideElement && !isClickOnMenu && sideBarOpen===true){
        sideBar.style.display = 'none';
        sideBarOpen = false;
    }
}


debtReport.addEventListener('click',clickHandler.bind(this,"debtReport"));
vacantReport.addEventListener('click',clickHandler.bind(this,"vacantReport"));
collectionReport.addEventListener('click',clickHandler.bind(this,"collectionReport"));
billingReport.addEventListener('click',clickHandler.bind(this,"billingReport"));
award.addEventListener('click',clickHandler.bind(this,"award"));
kaggle.addEventListener('click',clickHandler.bind(this,"kaggle"));
crossIcon.addEventListener('click',()=>{descriptiveBox.style.display = "none";
achievementList.style.display = "block";})

document.addEventListener('scroll',colorSideBar);

homeSide.addEventListener('click',()=>{document.getElementById('homeLink').click()});
aboutMeSide.addEventListener('click',()=>{document.getElementById('aboutMeLink').click()});
resumeSide.addEventListener('click',()=>{document.getElementById('resumeLink').click()});
contactSide.addEventListener('click',()=>{document.getElementById('contactLink').click()});

hiddenMenu.addEventListener('click',showSideBar.bind(this));

window.addEventListener('resize',()=>{

    if(window.innerWidth > 970){
        sideBar.style.display = 'flex';
    } else {
        sideBar.style.display = 'none';
    }

});

document.addEventListener('click',closeSideBar.bind(this));

