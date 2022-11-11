import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('#vimeo-player'),
};
    const player = new Vimeo.Player(refs.iframe);

    player.on('timeupdate', throttle(data => {
      localStorage.setItem('videoplayer-current-time', data.seconds)}, 1000));

      player.getCurrentTime().then(function(seconds) {
    }).catch(function(error) {
    });


    //   player.setCurrentTime(30.456).then(function(seconds) {
    //     // seconds = the actual time that the player seeked to
    // }).catch(function(error) {
    //     switch (error.name) {
    //         case 'RangeError':
    //             // the time was less than 0 or greater than the video’s duration
    //             break;

    //         default:
    //             // some other error occurred
    //             break;
    //     }
    // });





