angular.module('video-player')
.component('app', {
  controller: function AppController() {
    this.videos = exampleVideoData;
    this.playing = exampleVideoData[0];
  },
  templateUrl: 'src/templates/app.html',
  bindings: {

  }
});
