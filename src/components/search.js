angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    onSearch: '<',
    callSearch: '<'
  },
  controller: function() {
    this.searchString = '';
    
    this.debouncedSearch = _.debounce(() => {
      this.onSearch(this.searchString);
    }, 500);
    
    this.searchClickMethodWrapper = () => {
      this.debouncedSearch.cancel();
      this.onSearch(this.searchString);
      this.searchString = '';
    };
  }
});
