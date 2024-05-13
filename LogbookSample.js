document.addEventListener("DOMContentLoaded", function(){
    const imgBtn = document.querySelector(".InputImg");
    const imgInput = document.getElementById("InputImg");
    const uploadedImagesContainer = document.querySelector(".Uploaded-Images"); 
    let imageCount = 0; 

    imgBtn.addEventListener("click", function(){
        imgInput.click();
    });

    imgInput.addEventListener("change", function(){
        HandleImageUpload(imgInput.files[0]);
    });

    function HandleImageUpload(file){
        if(file && imageCount < 4){ 
            const READER = new FileReader();
            READER.onload = function(e){
                const imgDiv = document.createElement("div"); 
                imgDiv.classList.add("image-container");

                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = "Uploaded Image";
                img.classList.add("Uploaded-Image");

                const textBox = document.createElement("input"); 
                textBox.type = "text";
                textBox.placeholder = "Enter description";

                imgDiv.appendChild(img); 
                imgDiv.appendChild(textBox);

                if(imageCount === 4){ 
                    uploadedImagesContainer.replaceChild(imgDiv, uploadedImagesContainer.firstChild); 
                } else {
                    uploadedImagesContainer.appendChild(imgDiv); 
                    imageCount++; 
                }
            };
            READER.readAsDataURL(file);
        }
    }
});


// chatgpt method
document.addEventListener("DOMContentLoaded", function() {
    const inputField1 = document.getElementById('inputField1');
    const optionsContainer1 = document.getElementById('optionsContainer1');
    const inputField2 = document.getElementById('inputField2');
    const optionsContainer2 = document.getElementById('optionsContainer2');
    const optionsContainer3 = document.getElementById('optionsContainer3');
    const inputField3 = document.getElementById('inputField3');

    inputField1.addEventListener('click', function() {
        optionsContainer1.style.display = 'block';
    });

    document.addEventListener('click', function(e) {
        if (!optionsContainer1.contains(e.target) && e.target !== inputField1) {
            optionsContainer1.style.display = 'none';
        }
    });

    optionsContainer1.addEventListener('click', function(e) {
        if (e.target.classList.contains('option')) {
            inputField1.value = e.target.textContent;
            optionsContainer1.style.display = 'none';
        }
    });

    inputField2.addEventListener('click', function() {
        optionsContainer2.style.display = 'block';
    });

    document.addEventListener('click', function(e) {
        if (!optionsContainer2.contains(e.target) && e.target !== inputField2) {
            optionsContainer2.style.display = 'none';
        }
    });

    optionsContainer2.addEventListener('click', function(e) {
        if (e.target.classList.contains('option')) {
            inputField2.value = e.target.textContent;
            optionsContainer2.style.display = 'none';
        }
    });

    inputField3.addEventListener('click', function() {
        optionsContainer3.style.display = 'block';
    });

    document.addEventListener('click', function(e) {
        if (!optionsContainer3.contains(e.target) && e.target !== inputField3) {
            optionsContainer3.style.display = 'none';
        }
    });

    optionsContainer3.addEventListener('click', function(e) {
        if (e.target.classList.contains('option')) {
            inputField3.value = e.target.textContent;
            optionsContainer3.style.display = 'none';
        }
    });
});
