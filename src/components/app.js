angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.cvFullDetails = '';
    
    this.selectVideo = (video) => {
      this.currentVideo = video;
      this.cvFullDetails = '';
    };
    
    this.search = (query) => {
      youTube.search(query, this.searchResults);
    };
    
    this.searchResults = (results) => {
      this.videos = results.items;
      this.currentVideo = results.items[0];
      this.cvFullDetails = '';
    };
    
    this.getFullDetails = () => {
      youTube.ytFullDetails(this.currentVideo, this.setFullDetails);
    };
    
    this.setFullDetails = (results) => {
      console.log('results', results);
      this.cvFullDetails = results;
    };
    
    youTube.search('Sometimes things that are expensive', this.searchResults);
  },
  templateUrl: 'src/templates/app.html'
});