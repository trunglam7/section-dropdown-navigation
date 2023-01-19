let menuToggle = false;
let featureMenuToggle = false;
let companyMenuToggle = false;

function toggleMenu(){
    menuToggle = !menuToggle;
    const mobileMenu = document.getElementById("mobile-menu");
    const menuBtn = document.getElementById("menu-btn");

    menuToggle ? (mobileMenu.style.display = "flex", menuBtn.src = "./images/icon-close-menu.svg") 
        : (mobileMenu.style.display = "none", menuBtn.src = "./images/icon-menu.svg");
}

function menuExpand(menu){
    if(menu.id === "feature-btn"){
        featureMenuToggle = !featureMenuToggle;
        const featureMenu = document.getElementById("feature-menu");
        const arrow = menu.firstElementChild.firstElementChild;

        featureMenuToggle ? (featureMenu.style.display = "grid", arrow.src = "./images/icon-arrow-up.svg") 
            : (featureMenu.style.display = "none", arrow.src = "./images/icon-arrow-down.svg");

        if(companyMenuToggle){
            companyMenuToggle = !companyMenuToggle;
            const companyMenu = document.getElementById("company-menu");
            const arrow = companyMenu.previousElementSibling.firstElementChild.firstElementChild;
    
            companyMenu.style.display = "none";
             arrow.src = "./images/icon-arrow-down.svg";
        }
    }
    else if(menu.id === "company-btn"){
        companyMenuToggle = !companyMenuToggle;
        const companyMenu = document.getElementById("company-menu");
        const arrow = menu.firstElementChild.firstElementChild;

        companyMenuToggle ? (companyMenu.style.display = "grid", arrow.src = "./images/icon-arrow-up.svg") 
            : (companyMenu.style.display = "none", arrow.src = "./images/icon-arrow-down.svg");

        if(featureMenuToggle){
            featureMenuToggle = !featureMenuToggle;
            const featureMenu = document.getElementById("feature-menu");
            const arrow = featureMenu.previousElementSibling.firstElementChild.firstElementChild;
    
            featureMenu.style.display = "none"; 
            arrow.src = "./images/icon-arrow-down.svg";
        }
    }
}

function mobileMenuExpand(menu){
    if(menu.id === "feature-btn"){
        featureMenuToggle = !featureMenuToggle;
        const featureMenu = document.getElementById("mobile-feature-menu");
        const arrow = menu.firstElementChild.firstElementChild;

        featureMenuToggle ? (featureMenu.style.display = "grid", arrow.src = "./images/icon-arrow-up.svg") 
            : (featureMenu.style.display = "none", arrow.src = "./images/icon-arrow-down.svg");
    }
    else if(menu.id === "company-btn"){
        companyMenuToggle = !companyMenuToggle;
        const companyMenu = document.getElementById("mobile-company-menu");
        const arrow = menu.firstElementChild.firstElementChild;

        companyMenuToggle ? (companyMenu.style.display = "grid", arrow.src = "./images/icon-arrow-up.svg") 
            : (companyMenu.style.display = "none", arrow.src = "./images/icon-arrow-down.svg");
    }
}