document.addEventListener('DOMContentLoaded', function() {
    var text = "enjoy my open source biolink";
    var loadInterval = 500;
    var deleteDelay = 1000; 
    var deleteInterval = 250;
    var currentIndex = 1;
    var textLength = text.length;
    var loadingText = document.getElementById('loadingText');

    function updateText() {
        if (currentIndex < textLength) {
            loadingText.innerHTML = text.substring(0, currentIndex + 1) + "<span class='caret'>|</span>";
            currentIndex++;
        } else {
            clearInterval(textInterval); 
            setTimeout(function() {
                deleteInterval = 250;
                deleteInterval = setInterval(deleteText, deleteInterval); 
            }, deleteDelay);
        }
    }

    var textInterval = setInterval(updateText, loadInterval); 

    function deleteText() {
        if (currentIndex > 1) {
            loadingText.innerHTML = text.substring(0, --currentIndex) + "<span class='caret'>|</span>";
        } else {
            clearInterval(deleteInterval); 
            currentIndex = 1; 
            textInterval = setInterval(updateText, loadInterval); 
        }
    }
});