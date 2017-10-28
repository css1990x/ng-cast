angular.module('video-player')
.service('youTube', function() {
  this.jurassicPark = function() {
    console.log('hold on to your butts');
  };
  // var url = new URL('https://www.googleapis.com/youtube/v3/search');
  // var data = {
  //   maxResults: 5,
  //   key: YOUTUBE_API_KEY,
  //   part: 'snippet',
  //   q: 'James Terry',
  //   type: 'video',
  //   videoEmbeddable: 'true'
  // };
  // url = appendDataToUrl(url, data);
});

var appendDataToUrl = (url, data) => {
  Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
  return url;
};