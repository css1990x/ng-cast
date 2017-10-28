angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.cvFullDetails = '';
    this.autoPlay = 0;
    this.lastQuery = '';
    this.prevPageToken = '';
    this.nextPageToken = '';
    
    this.selectVideo = (video) => {
      this.currentVideo = video;
      this.cvFullDetails = '';
    };
    
    this.search = (query) => {
      this.lastQuery = query;
      youTube.search(query, this.searchResults);
    };
    
    this.searchResults = (results) => {
      this.videos = results.items;
      this.currentVideo = results.items[0];
      this.cvFullDetails = '';
      this.prevPageToken = results.prevPageToken;
      this.nextPageToken = results.nextPageToken;
      console.log('p', this.prevPageToken);
      console.log('n', this.nextPageToken);
    };
    
    this.getFullDetails = () => {
      youTube.ytFullDetails(this.currentVideo, this.setFullDetails);
    };
    
    this.setFullDetails = (results) => {
      console.log('results', results);
      this.cvFullDetails = results;
    };
    
    this.toggleAutoPlay = (autoPlayState) => {
      this.autoPlay = (this.autoPlay + 1) % 2;
    };
    
    this.changeResults = (direction) => {
      if (direction === 'prev') {
        youTube.search(this.lastQuery, this.searchResults, this.prevPageToken);
      }
    };
    
    
    youTube.search('Sometimes things that are expensive', this.searchResults);
  },
  templateUrl: 'src/templates/app.html'
});