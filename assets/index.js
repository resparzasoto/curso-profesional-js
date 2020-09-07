'use strict'

import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const btnPlayPause = document.getElementById('btn-play-pause')
const btnMuteUnmute = document.getElementById('btn-mute-unmute')

const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ]
})

btnPlayPause.onclick = () => player.togglePlay()
btnMuteUnmute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(e => {
      console.log(e)
    })
}
