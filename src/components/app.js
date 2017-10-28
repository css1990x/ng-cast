angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    
    this.search = () => {
      youTube.jurassicPark();
    };
  },
  templateUrl: 'src/templates/app.html'
});