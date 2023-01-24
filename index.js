// sider bar buttons
const step1Btn = document.getElementById("step-1");
const step2Btn = document.getElementById("step-2");
const step3Btn = document.getElementById("step-3");
const step4Btn = document.getElementById("step-4");

// next buttons
const infoNextBtn = document.getElementById("form-next");
const planNextMonthly = document.getElementById("plan-next-mt");
const planBackwardMonthly = document.getElementById("plan-backward-mt");
const planNextYearly = document.getElementById("plan-next-yr");
const planBackwardYearly = document.getElementById("plan-backward-yr");
const addonNextMonthly = document.getElementById("add-ons-next_monthly");
const addonBackwardMonthly =document.getElementById("add-ons-back_monthly");
const addonNextYearly = document.getElementById("add-ons-next_yearly");
const addonBackwardYearly =document.getElementById("add-ons-back_yearly");
const summaryBackward = document.getElementById("sum-back");
const summaryConfirm = document.getElementById("sum-confirm");
const changePlan = document.getElementById("change-plan");


// inputs 
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const telephoneInput = document.getElementById("telephone-input");
const checkBoxMonthly = document.getElementById("checkbox");
const checkboxYearly = document.getElementById("checkbox-yearly");
const onlineservAddonMonthly = document.getElementById("online-service-mt");
const onlineservAddonYearly = document.getElementById("online-service-yr");
const storageservAddonMonthly = document.getElementById("Storage-mt");
const storageservAddonYearly = document.getElementById("Storage-yr");
const customservAddonMonthly = document.getElementById("custom-profile-mt");
const customservAddonYearly = document.getElementById("custom-profile-yr");



//section containers
const infoContainer = document.querySelector(".info-container")
const planContainerMonthly = document.querySelector(".select-plan");
const planContainerYearly = document.querySelector(".select-plan-yearly");
const addOnsContainerMonthly = document.querySelector (".add-ons-container");
const addOnsContainerYearly = document.querySelector (".add-ons-container-yearly");
const summaryContainer = document.querySelector(".summary-container");
const thankYouContainer = document.querySelector(".thank-you-container");

// plan cards 
const arcadeMonthly = document.getElementById("arcade-monthly");
const advancedMonthly = document.getElementById("advanced-monthly");
const proMonthly = document.getElementById("pro-monthly");
const arcadeYearly = document.getElementById("arcade-yearly");
const advancedYearly = document.getElementById("advanced-yearly");
const proYearly = document.getElementById("pro-yearly");

// text
const planSummaryText = document.getElementById("plan-text");
const planSummaryPrice = document.getElementById("plan-price");
const onlineSummaryText = document.getElementById("online-service-text");
const onlineSummaryPrice = document.getElementById("online-service-price");
const storageSummaryText = document.getElementById("storage-text");
const storageSummaryprice = document.getElementById("storage-price");
const customProfileText = document.getElementById("custom-text");
const customPrice = document.getElementById("custom-price");
const totalSummaryText = document.getElementById("total");




step1Btn.addEventListener("click", openStep1);
planBackwardMonthly.addEventListener("click", openStep1);
step2Btn.addEventListener("click", openStep2);
checkBoxMonthly.addEventListener("click", openStep2yearly);
checkboxYearly.addEventListener("click", openStep2Monthly);
planNextMonthly.addEventListener("click", openStep3);
planNextYearly.addEventListener("click", openStep3);
step3Btn.addEventListener("click", openStep3);
step4Btn.addEventListener("click", openStep4);
infoNextBtn.addEventListener("click", openStep2);
addonNextMonthly.addEventListener("click", openStep4);
addonBackwardMonthly.addEventListener("click", openStep2);
addonNextYearly.addEventListener("click", openStep4);
addonBackwardYearly.addEventListener("click", openStep2);
summaryBackward.addEventListener("click", openStep3);
summaryConfirm.addEventListener("click", thankYou);
changePlan.addEventListener("click", () =>  {
    openStep2()
    onlineservAddonMonthly.checked = false;
    storageservAddonMonthly.checked = false;
    customservAddonMonthly.checked = false;
});


arcadeMonthly.addEventListener("click", () => {
    arcadeMonthly.classList.add("active");
    advancedMonthly.classList.remove("active");
    proMonthly.classList.remove("active");
    arcadeYearly.classList.remove("active");
    advancedYearly.classList.remove("active");
    proYearly.classList.remove("active");
});
arcadeYearly.addEventListener("click", () => {
    arcadeYearly.classList.add("active");
    advancedYearly.classList.remove("active");
    proYearly.classList.remove("active");
    arcadeMonthly.classList.remove("active");
    advancedMonthly.classList.remove("active");
    proMonthly.classList.remove("active");
});

advancedMonthly.addEventListener("click", () => {
    advancedMonthly.classList.add("active");
    arcadeMonthly.classList.remove("active");
    proMonthly.classList.remove("active");
    advancedYearly.classList.remove("active");
    arcadeYearly.classList.remove("active");
    proYearly.classList.remove("active");
});
advancedYearly.addEventListener("click", () => {
    advancedYearly.classList.add("active");
    arcadeYearly.classList.remove("active");
    proYearly.classList.remove("active");
    advancedMonthly.classList.remove("active");
    arcadeMonthly.classList.remove("active");
    proMonthly.classList.remove("active");
});

proMonthly.addEventListener("click", () => {
    proMonthly.classList.add("active");
    arcadeMonthly.classList.remove("active");
    advancedMonthly.classList.remove("active");
    proYearly.classList.remove("active");
    arcadeYearly.classList.remove("active");
    advancedYearly.classList.remove("active");
});
proYearly.addEventListener("click", () => {
    proYearly.classList.add("active");
    arcadeYearly.classList.remove("active");
    advancedYearly.classList.remove("active");
    proMonthly.classList.remove("active");
    arcadeMonthly.classList.remove("active");
    advancedMonthly.classList.remove("active");
});

let arcadeSummaryMonthly = "Arcade (Monthly)";
let arcadeMonthlyPrice = "$9/mo";
let advanceSumMonthly = "Advanced (Monthly)";
let advanceSumMonthlyPrice = "$12/mo";
let proSumMonthly = "Pro (Monthly)";
let proSumMonthlyPrice = "$15/mo";
let onlineServMonth = "Online Service";
let onlineServMonthPrice = "$1/mo";
let largerStorageMOnthly = "Larger storage";
let largerStorageMOnthlyPrice = "$2/mo";
let customProfileMonth = "Customizable Profile";
let customProfileMonthPrice = "$2/mo";

let arcadeSummaryYearly = "Arcade (Yearly)";
let arcadeYearlyPrice = "$90/yr";
let advanceSumYearly = "Advanced (Yearly)";
let advanceSumYearlyPrice = "$120/mo";
let proSumYearly = "Pro (Yearly)";
let proSumYearlyPrice = "$150/mo";
let onlineServYear = "Online Service";
let onlineServYearPrice = "$10/yr";
let largerStorageYearly = "Larger storage";
let largerStorageYearlyPrice = "$20/yr";
let customProfileYear = "Customizable Profile";
let customProfileYearPrice = "$20/yr";

// script for the plan section 

arcadeMonthly.addEventListener("click", () => {
    planSummaryText.innerHTML = arcadeSummaryMonthly;
    planSummaryPrice.innerHTML = arcadeMonthlyPrice;
});
advancedMonthly.addEventListener("click", () => {
    planSummaryText.innerHTML = advanceSumMonthly;
    planSummaryPrice.innerHTML = advanceSumMonthlyPrice;
});
proMonthly.addEventListener("click", () => {
    planSummaryText.innerHTML = proSumMonthly;
    planSummaryPrice.innerHTML = proSumMonthlyPrice;
});
arcadeYearly.addEventListener("click", () => {
    planSummaryText.innerHTML = arcadeSummaryYearly;
    planSummaryPrice.innerHTML = arcadeYearlyPrice;
});
advancedYearly.addEventListener("click", () => {
    planSummaryText.innerHTML = advanceSumYearly;
    planSummaryPrice.innerHTML = advanceSumYearlyPrice;
});
proYearly.addEventListener("click", () => {
    planSummaryText.innerHTML = proSumYearly;
    planSummaryPrice.innerHTML = proSumYearlyPrice;
});


// Script for the summary section 

addonNextMonthly.addEventListener("click", () => {
    if (onlineservAddonMonthly.checked) {
        onlineSummaryText.innerHTML = onlineServMonth;
        onlineSummaryPrice.innerHTML = onlineServMonthPrice;
        
    } else { 
        onlineSummaryText.remove();
        onlineSummaryPrice.remove();
        
    }
    
    if (storageservAddonMonthly.checked) {
        storageSummaryText.innerHTML = largerStorageMOnthly;
        storageSummaryprice.innerHTML = largerStorageMOnthlyPrice;
        
    } else { 
        storageSummaryText.remove();
        storageSummaryprice.remove();
        
    }
    
    if (customservAddonMonthly.checked) {
        customProfileText.innerHTML = customProfileMonth;
        customPrice.innerHTML = customProfileMonthPrice;
        
    } else { 
        customProfileText.remove();
        customPrice.remove();
        
    }
    
    if (onlineservAddonMonthly.checked || storageservAddonMonthly.checked || customservAddonMonthly.checked) {
        totalSummaryText.innerHTML = "";
    } else {
        totalSummaryText.remove();
        
    }
    
});




function openStep1() {
    planContainerMonthly.classList.add("active");
    planContainerYearly.classList.add("active");
    addOnsContainerMonthly.classList.add("active");
    addOnsContainerYearly.classList.add("active");
    summaryContainer.classList.add("active");
    thankYouContainer.classList.add("active");
    step2Btn.classList.remove("sidebar-btn-active");
    step3Btn.classList.remove("sidebar-btn-active");
    step4Btn.classList.remove("sidebar-btn-active");
    infoContainer.classList.remove("active");
    step1Btn.classList.add("sidebar-btn-active");
}

function openStep2() {
    infoContainer.classList.add("active");
    planContainerYearly.classList.add("active");
    addOnsContainerMonthly.classList.add("active");
    addOnsContainerYearly.classList.add("active");
    summaryContainer.classList.add("active");
    thankYouContainer.classList.add("active");
    step1Btn.classList.remove("sidebar-btn-active");
    step3Btn.classList.remove("sidebar-btn-active");
    step4Btn.classList.remove("sidebar-btn-active");
    planContainerMonthly.classList.remove("active");
    step2Btn.classList.add("sidebar-btn-active");
    
}
function openStep2Monthly() {
    if (checkboxYearly.checked) {
        infoContainer.classList.add("active");
        planContainerYearly.classList.add("active");
        addOnsContainerMonthly.classList.add("active");
        addOnsContainerYearly.classList.add("active");
        summaryContainer.classList.add("active");
        thankYouContainer.classList.add("active");
        step1Btn.classList.remove("sidebar-btn-active");
        step3Btn.classList.remove("sidebar-btn-active");
        step4Btn.classList.remove("sidebar-btn-active");
        planContainerMonthly.classList.remove("active");
        step2Btn.classList.add("sidebar-btn-active");
        checkBoxMonthly.checked = false;   
    }
    
}

function openStep2yearly() {
    if (checkBoxMonthly.checked) {
        infoContainer.classList.add("active");
        planContainerMonthly.classList.add("active");
        addOnsContainerMonthly.classList.add("active");
        addOnsContainerYearly.classList.add("active");
        summaryContainer.classList.add("active");
        thankYouContainer.classList.add("active");
        step1Btn.classList.remove("sidebar-btn-active");
        step3Btn.classList.remove("sidebar-btn-active");
        step4Btn.classList.remove("sidebar-btn-active");
        planContainerYearly.classList.remove("active");
        step2Btn.classList.add("sidebar-btn-active");
        checkboxYearly.checked = false;
    }
    
}

function openStep3() {
    if (checkBoxMonthly.checked) {
        infoContainer.classList.add("active");
        planContainerMonthly.classList.add("active");
        planContainerYearly.classList.add("active");
        addOnsContainerMonthly.classList.add("active");
        summaryContainer.classList.add("active");
        thankYouContainer.classList.add("active");
        addOnsContainerYearly.classList.remove("active");
        step1Btn.classList.remove("sidebar-btn-active");
        step2Btn.classList.remove("sidebar-btn-active");
        step4Btn.classList.remove("sidebar-btn-active");
        step3Btn.classList.add("sidebar-btn-active");
    } else {
        infoContainer.classList.add("active");
        planContainerMonthly.classList.add("active");
        planContainerYearly.classList.add("active");
        addOnsContainerYearly.classList.add("active");
        summaryContainer.classList.add("active");
        thankYouContainer.classList.add("active");
        addOnsContainerMonthly.classList.remove("active");
        step1Btn.classList.remove("sidebar-btn-active");
        step2Btn.classList.remove("sidebar-btn-active");
        step4Btn.classList.remove("sidebar-btn-active");
        step3Btn.classList.add("sidebar-btn-active");
        
    }
    
}

function openStep4() {
    infoContainer.classList.add("active");
    planContainerMonthly.classList.add("active");
    planContainerYearly.classList.add("active");
    addOnsContainerMonthly.classList.add("active");
    addOnsContainerYearly.classList.add("active");
    thankYouContainer.classList.add("active");
    step1Btn.classList.remove("sidebar-btn-active");
    step2Btn.classList.remove("sidebar-btn-active");
    step3Btn.classList.remove("sidebar-btn-active");
    step4Btn.classList.add("sidebar-btn-active");
    summaryContainer.classList.remove("active");
    }

    function thankYou() {
        infoContainer.classList.add("active");
        planContainerMonthly.classList.add("active");
        planContainerYearly.classList.add("active");
        addOnsContainerMonthly.classList.add("active");
        addOnsContainerYearly.classList.add("active");
        summaryContainer.classList.add("active");
        step1Btn.classList.remove("sidebar-btn-active");
        step2Btn.classList.remove("sidebar-btn-active");
        step3Btn.classList.remove("sidebar-btn-active");
        step4Btn.classList.remove("sidebar-btn-active");
        thankYouContainer.classList.remove("active");
    }

