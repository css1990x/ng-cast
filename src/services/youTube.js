angular.module('video-player')
.service('youTube', function($http) {
  this.jurassicPark = function() {
    console.log('hold on to your butts');
  };
  
  this.search = function (query, callback) {
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var data = {
      params: {
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        safeSearch: 'strict',
        type: 'video',
        videoEmbeddable: 'true'
      }
    };
    // url = appendDataToUrl(url, data);
    console.log('window', window.YOUTUBE_API_KEY);
    
    $http.get(url, data).then(function success(response) {
      console.log('Success:', response);
      callback(response.data);
    }, function error(response) {
      console.log('Failure:', response);
    });
  };
});

var appendDataToUrl = (url, data) => {
  Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
  return url;
};