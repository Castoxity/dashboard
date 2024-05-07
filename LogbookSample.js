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

// chatgpt method
document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('inputField');
    const optionsContainer = document.getElementById('optionsContainer');

    inputField.addEventListener('click', function() {
        optionsContainer.style.display = 'block';
    });

    document.addEventListener('click', function(e) {
        if (!optionsContainer.contains(e.target) && e.target !== inputField) {
            optionsContainer.style.display = 'none';
        }
    });

    optionsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('option')) {
            inputField.value = e.target.textContent;
            optionsContainer.style.display = 'none';
        }
    });
});
