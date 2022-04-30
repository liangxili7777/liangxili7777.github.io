let descriptiveBox = document.getElementById("fadedBackground");
let descriptiveBox2 = document.getElementById("descriptiveBox2")
let descriptiveText = document.getElementById("descriptiveText2");
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
let historySide = document.getElementById("historySide");
let sideBar = document.getElementById("sidebar");
let hiddenMenu = document.getElementById("menu");
let sideBarOpen = false;

let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");


clickHandler = (jobName) => {

    if (jobName==="debtReport"){
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

    descriptiveBox.style.display = "block";

}


colorSideBar = () => {

    // let pageHeight = document.body.clientHeight;
    let firstBreak = line1.offsetTop/2;
    let secondBreak = (line2.offsetTop + line1.offsetTop)/2;
    let thirdBreak = (line3.offsetTop + line2.offsetTop)/2;
    let fourthBreak = (line4.offsetTop + line3.offsetTop)/2;

    let currentHeight = document.documentElement.scrollTop;
    let normalColor = "rgba(228, 235, 232, 0.897)";
    let currentColor = "rgb(67, 94, 95)";
    let currentTextColor = "rgb(255,255,255)"
    let normalTextColor = "rgb(64,64,64)";

    if (currentHeight <= firstBreak) {
        homeSide.style.backgroundColor = currentColor;
        homeSide.style.color = currentTextColor;
        aboutMeSide.style.backgroundColor = normalColor;
        aboutMeSide.style.color = normalTextColor;
        resumeSide.style.backgroundColor = normalColor;
        resumeSide.style.color = normalTextColor;
        contactSide.style.backgroundColor = normalColor;
        contactSide.style.color = normalTextColor;
        historySide.style.backgroundColor = normalColor;
        historySide.style.color = normalTextColor;
    } else if (currentHeight > firstBreak && currentHeight <= secondBreak){
        homeSide.style.backgroundColor = normalColor;
        homeSide.style.color = normalTextColor;
        aboutMeSide.style.backgroundColor = currentColor;
        aboutMeSide.style.color = currentTextColor;
        resumeSide.style.backgroundColor = normalColor;
        resumeSide.style.color = normalTextColor;
        contactSide.style.backgroundColor = normalColor;
        contactSide.style.color = normalTextColor;
        historySide.style.backgroundColor = normalColor;
        historySide.style.color = normalTextColor;
    } else if (currentHeight > secondBreak && currentHeight <= thirdBreak){
        homeSide.style.backgroundColor = normalColor;
        homeSide.style.color = normalTextColor;
        aboutMeSide.style.backgroundColor = normalColor;
        aboutMeSide.style.color = normalTextColor;
        resumeSide.style.backgroundColor = normalColor;
        resumeSide.style.color = normalTextColor;
        contactSide.style.backgroundColor = normalColor;
        contactSide.style.color = normalTextColor;
        historySide.style.backgroundColor = currentColor;
        historySide.style.color = currentTextColor;
    } else if (currentHeight > thirdBreak && currentHeight <= fourthBreak){
        homeSide.style.backgroundColor = normalColor;
        homeSide.style.color = normalTextColor;
        aboutMeSide.style.backgroundColor = normalColor;
        aboutMeSide.style.color = normalTextColor;
        resumeSide.style.backgroundColor = currentColor;
        resumeSide.style.color = currentTextColor;
        contactSide.style.backgroundColor = normalColor;
        contactSide.style.color = normalTextColor;
        historySide.style.backgroundColor = normalColor;
        historySide.style.color = normalTextColor;
    } else {
        homeSide.style.backgroundColor = normalColor;
        homeSide.style.color = normalTextColor;
        aboutMeSide.style.backgroundColor = normalColor;
        aboutMeSide.style.color = normalTextColor;
        resumeSide.style.backgroundColor = normalColor;
        resumeSide.style.color = normalTextColor;
        contactSide.style.backgroundColor = currentColor;
        contactSide.style.color = currentTextColor;
        historySide.style.backgroundColor = normalColor;
        historySide.style.color = normalTextColor;
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
crossIcon.addEventListener('click',()=>{descriptiveBox.style.display = "none"})
descriptiveBox.addEventListener('click',(event) => {
    if (event.srcElement.id !== 'descriptiveBox2' && event.srcElement.id !== 'descriptiveText2' && event.srcElement.id !== 'descriptiveBoxBanner'){
        descriptiveBox.style.display = "none";}})
document.addEventListener('scroll',colorSideBar);

homeSide.addEventListener('click',()=>{document.getElementById('homeLink').click()});
aboutMeSide.addEventListener('click',()=>{document.getElementById('aboutMeLink').click()});
resumeSide.addEventListener('click',()=>{document.getElementById('resumeLink').click()});
contactSide.addEventListener('click',()=>{document.getElementById('contactLink').click()});
historySide.addEventListener('click',()=>{document.getElementById('historyLink').click()});

hiddenMenu.addEventListener('click',showSideBar.bind(this));

window.addEventListener('resize',()=>{

    if(window.innerWidth > 970){
        sideBar.style.display = 'flex';
    } else {
        sideBar.style.display = 'none';
    }

});

document.addEventListener('click',closeSideBar.bind(this));

