document.addEventListener("DOMContentLoaded", function(){
    const imgBtn = document.querySelector(".InputImg");
    const imgInput = document.getElementById("InputImg");

    imgBtn.addEventListener("click", function(){
        imgInput.click();
    });
    imgInput.addEventListener("change", function(){
        HandleImageUpload(imgInput.files[0]);
    });

    function HandleImageUpload(file){
        if(file){
            const READER = new FileReader();
            READER.onload = function(e){
                const img = document.createElement("img");
                img.src= e.target.result;
                img.alt = "Uploaded Image";
                img.classList.add("Uploaded-Image");
                const uploadedImagesContainer = document.querySelector(".Uploaded-Images");
                uploadedImagesContainer.appendChild(img);

            };
            READER.readAsDataURL(file);
        }
    }

});

