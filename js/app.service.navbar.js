(function() {

    angular.module('sportApp').service('TagNavBar', function() {
        var tagsData = [{tagName: 'Home', tagLink: '#/home'}, {tagName: 'Profile', tagLink: '#/profile'}, {tagName: ' Broadcasts', tagLink: '#/broadcasts'}];

        this.getTags = function() {
            return tagsData;
        };
    });
})();