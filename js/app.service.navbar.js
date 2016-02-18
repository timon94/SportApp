(function() {

    angular.module('sportApp').service('TagNavBar', function() {
        var tagsData = [{tagName: 'Home', tagLink: '#/home'}, {tagName: 'Profile', tagLink: '#/profile'}, {tagName: 'Messages', tagLink: ''}, {tagName: 'Sign In', tagLink: ''}];

        this.getTags = function() {
            return tagsData;
        };
    });
})();