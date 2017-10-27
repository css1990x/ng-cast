angular.module('video-player')
.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    
    this.titleClick = (video) => {
      console.log(video);
      this.currentVideo = video;
    }; 
  },
  templateUrl: 'src/templates/app.html'
});