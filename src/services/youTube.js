angular.module('video-player')
.service('youTube', function($http) {
  this.jurassicPark = function() {
    console.log('hold on to your butts');
  };
  
  this.search = function(query, callback, token = '') {
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var data = {
      params: {
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        safeSearch: 'moderate',
        type: 'video',
        videoEmbeddable: 'true',
        pageToken: 'CAUQAA'
      }
    };
    
    $http.get(url, data).then(function success(response) {
      console.log('Success:', response);
      callback(response.data);
    }, function error(response) {
      console.log('Failure:', response);
    });
  };
  
  this.ytFullDetails = function(video, callback) {
    var url = 'https://www.googleapis.com/youtube/v3/videos';
    var data = {
      params: {
        key: window.YOUTUBE_API_KEY,
        id: video.id.videoId,
        part: 'snippet'
      }
    };
    
    $http.get(url, data).then(function success(response) {
      console.log('Success:', response);
      callback(response.data.items[0].snippet.description);
    }, function error(response) {
      console.log('Failure:', response);
    });
  };
  
});