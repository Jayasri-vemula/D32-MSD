<script>
  const songs = [
    {
      title: "Firestrom",
      artist: "Thaman SS",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      img: "firestrom.jpeg"
    },
    {
      title: "Meerai Bhakti Mantra",
      artist: "R sanju",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      img: "https://c.saavncdn.com/477/Meerai-Bhakti-Mantra-Hindi-2022-20221210034200-500x500.jpg"
    },
    {
      title: "Hare Krishnaa",
      artist: "R sanju",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Krishna_Artwork.jpg/640px-Krishna_Artwork.jpg"
    }
  ];

  let currentIndex = 0;
  let isPlaying = false;

  const audio = new Audio();
  const playBtn = document.querySelector(".fa-play-circle");
  const nextBtn = document.querySelector(".fa-forward-step");
  const prevBtn = document.querySelector(".fa-backward-step");
  const timeDisplay = document.querySelector(".time span");
  const volumeSlider = document.querySelector(".volume input");

  function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    audio.load();
    updateNowPlaying(song);
  }

  function updateNowPlaying(song) {
    timeDisplay.textContent = `${song.title} - ${song.artist}`;
    document.body.style.backgroundImage = `url('${song.img}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.transition = 'background 1s ease';
  }

  function playPause() {
    if (isPlaying) {
      audio.pause();
      playBtn.classList.replace("fa-pause-circle", "fa-play-circle");
    } else {
      audio.play();
      playBtn.classList.replace("fa-play-circle", "fa-pause-circle");
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

  // Attach event listeners
  playBtn.addEventListener("click", playPause);
  nextBtn.addEventListener("click", nextSong);
  prevBtn.addEventListener("click", prevSong);
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
  });

  // Load the first song initially
  loadSong(currentIndex);

  // Card click to play specific song
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentIndex = index;
      loadSong(currentIndex);
      audio.play();
      playBtn.classList.replace("fa-play-circle", "fa-pause-circle");
      isPlaying = true;
    });
  });
</script>
