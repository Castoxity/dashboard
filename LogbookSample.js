document.addEventListener("DOMContentLoaded", function() {
    const imageBoxes = document.querySelectorAll('.ImageBox');
    const imageIds = []; // Array to store image IDs
    let textBoxCreated = false; // Flag to track if text box is created

    imageBoxes.forEach((box, index) => {
        const button = box.querySelector('.ImageButton');
        const boxId = `ImageBox${index + 1}`; // Get the ID of the current box

        button.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.style.display = 'none';

            input.addEventListener('change', function() {
                const file = input.files[0];
                if (file) {
                    const reader = new FileReader();

                    reader.onload = function(e) {
                        box.style.backgroundImage = `url('${e.target.result}')`;
                        imageIds[index] = boxId; // store the image ID in the array
                        createTextBox(box); // create the text box if not already created
                    };

                    reader.readAsDataURL(file);
                }
            });

            document.body.appendChild(input); // Append input to the body
            input.click(); // Trigger file input click event
            document.body.removeChild(input); // Remove input after use
        });
    });

    function createTextBox(box) {
        if (!textBoxCreated) { // Check if text box is not already created
            const textBox = document.createElement('textarea');
            textBox.placeholder = 'Enter text here...';
            textBox.classList.add('ImageTextBox'); // Add a class for styling
            box.appendChild(textBox); // Append the text box to the box element
            textBoxCreated = true; // Set flag to true to indicate text box is created
        }
    }
});
