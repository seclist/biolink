document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const songs = ["/mp3/song1.mp3", "/mp3/song2.mp3", "/mp3/song3.mp3"];
    const audio = new Audio();

    function closeOverlay() {
        overlay.style.opacity = "0";
        const randomSongIndex = Math.floor(Math.random() * songs.length);
        const selectedSong = songs[randomSongIndex];
        console.log("Selected song:", selectedSong);
        audio.src = selectedSong;
        audio.play();
        setTimeout(() => {
            overlay.style.display = "none";
        }, 2000);
    }

    overlay.addEventListener("click", function () {
        closeOverlay();
    });


    audio.addEventListener("ended", function() {

        audio.currentTime = 0;
        audio.play();
    });
});


