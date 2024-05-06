
document.addEventListener("DOMContentLoaded", function() {
    // all upload buttons get selected with this hellhole
    const uploadButtons = document.querySelectorAll('.UploadButton');

    // loop through each upload button
    uploadButtons.forEach(function(button, index) {
        // get input element for this button
        const input = button.querySelector('input[type="file"]');

        // event listener for the button
        button.addEventListener('click', function() {
            // trigger click event on the input element
            input.click();
        });

        // add change event listener to the input element
        input.addEventListener('change', function() {
            // Cceck if a file is selected
            if (input.files && input.files[0]) {
                // create a FileReader object
                const reader = new FileReader();

                // set up the FileReader onload event
                reader.onload = function(e) {
                    // Create an image element
                    const img = document.createElement('img');
                    // set the image source to the uploaded file
                    img.src = e.target.result;
                    // set alt text for accessibility
                    img.alt = "Uploaded Image";

                    // Append the image to the corresponding container based on the button index
                    const imageContainer = document.querySelector(`.Uploaded-Images${index + 1}`);
                    imageContainer.appendChild(img);
                };

                // read the uploaded file as a data URL
                reader.readAsDataURL(input.files[0]);
            }
        });
    });
});

