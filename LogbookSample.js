document.addEventListener("DOMContentLoaded", function() {
    const personalBtn = document.querySelector(".UploadPhoto");
    const personalInput = document.getElementById("UploadPhoto");
    personalBtn.addEventListener("click", function() {
        personalInput.click();
    });

    personalInput.addEventListener("change", function() {
        HandleImageUpload(personalInput.files[0]);
    });

  function HandleImageUpload(file) {
        if (file) {
            const READER = new FileReader();
            READER.onload = function(e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = "Uploaded Image";
                img.classList.add("Uploaded-Image");
                const uploadedImagesContainer = document.querySelector(".Uploaded-Images");
                uploadedImagesContainer.appendChild(img);
            };
            READER.readAsDataURL(file);
        }
    }
});