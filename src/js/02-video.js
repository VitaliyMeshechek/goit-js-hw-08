import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('#vimeo-player'),
};
    const player = new Vimeo.Player(refs.iframe);

    player.on('timeupdate', throttle(data => {
      localStorage.setItem('videoplayer-current-time', data.seconds)
      }, 1000));


  player.setCurrentTime(30.456).then(function(seconds) {
    console.log(seconds);
});





