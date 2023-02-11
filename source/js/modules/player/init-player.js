const mediaLayer = document.querySelector('.about__cover');
const playMedia = document.querySelector('.about__player-wrapper img');
const iframe = document.getElementById('iframe');


function removeLayer() {
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1');
  mediaLayer.style.display = 'none';
  playMedia.style.display = 'none';
}

playMedia.addEventListener('click', removeLayer);
playMedia.addEventListener('keyup', (event)=>{
  if (event.keyCode === 13) {
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1');
    mediaLayer.style.display = 'none';
    playMedia.style.display = 'none';
  }
});
