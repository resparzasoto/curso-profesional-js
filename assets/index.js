'use strict'

import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const btnPlayPause = document.getElementById('btn-play-pause')
const btnMuteUnmute = document.getElementById('btn-mute-unmute')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] })

btnPlayPause.onclick = () => player.togglePlay()
btnMuteUnmute.onclick = () => player.toggleMute()
