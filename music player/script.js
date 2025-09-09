<script>
  const songs = [
    {
      title: "Firestrom",
      artist: "Thaman SS",
      src: "https://open.spotify.com/track/3lLX2Vm99sMD5kuZqnr2T0?si=3a1f79b430604718",
      img: "firestrom.jpeg"
    },
    {
      title: "Meerai Bhakti Mantra",
      artist: "R Sanju",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      img: "https://c.saavncdn.com/477/Meerai-Bhakti-Mantra-Hindi-2022-20221210034200-500x500.jpg"
    },
    {
      title: "Hare Krishnaa",
      artist: "R Sanju",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Krishna_Artwork.jpg/640px-Krishna_Artwork.jpg"
    }
  ];

  let currentIndex = 0;
  let isPlaying = false;

  const audio = new Audio();

  const playBtn = document.getElementById("playBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const volumeSlider = document.getElementById("volumeSlider");

  const nowPlaying = document.getElementById("nowPlaying");

  function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    audio.load();
    updateNowPlaying(song);
  }

  function updateNowPlaying(song) {
    nowPlaying.textContent = `${song.title} - ${song.artist}`;
    document.body.style.backgroundImage = `url('${song.img}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background 1s ease";
  }

  function playPause() {
    if (isPlaying) {
      audio.pause();
      playBtn.innerHTML = "▶️"; // play icon
    } else {
      audio.play();
      playBtn.innerHTML = "⏸️"; // pause icon
    }
    isPlaying = !isPlaying;
  }

  function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    if (isPlaying) audio.play();
  }

  function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    if (isPlaying) audio.play();
  }

  playBtn.addEventListener("click", playPause);
  nextBtn.addEventListener("click", nextSong);
  prevBtn.addEventListener("click", prevSong);

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
  });

  loadSong(currentIndex);

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentIndex = index;
      loadSong(currentIndex);
      audio.play();
      playBtn.innerHTML = "⏸️"; // switch to pause
      isPlaying = true;
    });
  });
</script>
