'use strict'

import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/ads'

const video = document.querySelector('video')
const btnPlayPause = document.getElementById('btn-play-pause')
const btnMuteUnmute = document.getElementById('btn-mute-unmute')

const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
  ]
})

btnPlayPause.onclick = () => player.togglePlay()
btnMuteUnmute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(e => {
      console.log(e.message)
    })
}
