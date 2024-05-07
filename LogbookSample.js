document.addEventListener("DOMContentLoaded", function() {
    const imageBoxes = document.querySelectorAll('.ImageBox');

    imageBoxes.forEach((box, index) => {
        const button = box.querySelector('.ImageButton');

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
                        createTextBox(box); // Call function to create text box
                    };

                    reader.readAsDataURL(file);
                }
            });

            document.body.appendChild(input);
            input.click();
            document.body.removeChild(input);
        });
    });

    function createTextBox(box) {
        const textBox = document.createElement('textarea');
        textBox.placeholder = 'Enter text here...';
        textBox.classList.add('ImageTextBox');
        box.appendChild(textBox);
    }
});
