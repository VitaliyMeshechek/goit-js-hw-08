import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('#vimeo-player'),
};
    const player = new Vimeo.Player(refs.iframe);

    player.on('timeupdate', throttle(data => {
      localStorage.setItem('videoplayer-current-time', data.seconds)}, 1000));

    const saveTime = localStorage.getItem('videoplayer-current-time');
    player.setCurrentTime(saveTime).then(function(seconds) {
      seconds;// seconds = the actual time that the player seeked to
  }).catch(function(error) {
      switch (error.name) {
          case 'RangeError':
              // the time was less than 0 or greater than the video’s duration
              break;

          default:
              // some other error occurred
              break;
      }
  });






