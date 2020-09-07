"use strict";

class MediaPlayer {
  media: HTMLMediaElement;
  plugins: any[];

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    this.media.paused ? this.media.play() : this.media.pause();
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  toggleMute() {
    this.media.muted = !this.media.muted;
  }
}

export default MediaPlayer;
