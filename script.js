const DEFAULT_VIDEO_ID = "JCrxyVUbA0A";

// coloque seu .wav em /assets/beat.wav
const AUDIO_FILE_PATH = "assets/audio/666.wav";
const AUDIO_DOWNLOAD_NAME = "666.wav";

const yt = document.getElementById("yt");
const downloadBtn = document.getElementById("downloadBtn");

function getVideoId() {
  const params = new URLSearchParams(window.location.search);
  const v = params.get("v");
  if (v && /^[a-zA-Z0-9_-]{6,}$/.test(v)) return v;
  return DEFAULT_VIDEO_ID;
}

(function init(){
  const id = getVideoId();

  yt.src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;

  downloadBtn.href = AUDIO_FILE_PATH;
  downloadBtn.setAttribute("download", AUDIO_DOWNLOAD_NAME);
})();
