angular.module('video-player')
.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
  },
  templateUrl: 'src/templates/app.html',
  bindings: {
    
  }
});