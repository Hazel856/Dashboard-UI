document.addEventListener("DOMContentLoaded", function() {
    const checkBox = document.getElementById("check-box");
    const root = document.querySelector(":root");
    const switchBtn = document.querySelector(".check-switch");
    const themePanel = document.querySelector(".theme-panel");
    const checkLabel =  document.querySelector(".check-label");


    const themeText = document.querySelector(".theme-text");


    checkLabel.addEventListener("click", function(){
        // console.log(checkBox.checked);
        if (checkBox.checked) {
            // console.log(`hi`);
            
            themeText.innerHTML = `<h2 class="theme-text">Dark Mode</h2>`;
            switchBtn.style.transform = `scale(.8) translateX(-100%)`;
            
            
            root.style.setProperty("--primary-color", 'linear-gradient(90deg, #238ae7 0%, #3cd18d 100%)');
            root.style.setProperty("--body-color", '#212121');
            root.style.setProperty("--div-color", '#252b43');
            root.style.setProperty("--lm-txt-dark", '#d6d9e6');
            root.style.setProperty("--lm-txt-light", '#a0aeff');


            
            
            
        }else{
            // console.log(`bye`);
            themeText.textContent="";
            
            themeText.innerHTML = `<h2 class="theme-text">Light Mode</h2>`;
            switchBtn.style.transform = `scale(.8) translateX(0%)`;
            
            
            root.style.setProperty("--primary-color", '#6d707f');
            root.style.setProperty("--body-color", '#ffffff');
            root.style.setProperty("--div-color", '#f0f3fa');
            root.style.setProperty("--lm-txt-dark", '#1b1e27');
            root.style.setProperty("--lm-txt-light", '#6d707f');
            

        }
    })







});