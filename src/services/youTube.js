angular.module('video-player')
.service('youTube', function($http) {
  this.jurassicPark = function() {
    console.log('hold on to your butts');
  };
  
  this.search = function () {
    var url = new URL('https://www.googleapis.com/youtube/v3/search');
    var data = {
      params: {
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: 'James Terry',
        type: 'video',
        videoEmbeddable: 'true'
      }
    };
    // url = appendDataToUrl(url, data);
    console.log('window', window.YOUTUBE_API_KEY);
    
    $http.get('https://www.googleapis.com/youtube/v3/search', data).then(function success(response) {
      console.log('Success:', response);
    }, function error(response) {
      console.log('Failure:', response);
    });
  };
});

var appendDataToUrl = (url, data) => {
  Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
  return url;
};