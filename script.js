let bg_music = document.getElementById("bg-music");
let bg_music_icon = document.getElementById("music-icon");

bg_music.play();

function music_btn_pressed() {
  if (bg_music.duration > 0 && !bg_music.paused) {
    bg_music.pause();
    bg_music_icon.src = "Resources/background music/music_status/pause.png";
  } else {
    bg_music.play();
    bg_music_icon.src = "Resources/background music/music_status/play.png";
  }
}
