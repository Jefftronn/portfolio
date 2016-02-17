angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('Home', {
      url: '/home',
      templateUrl: 'js/home/home.html',
      controller: 'homeController'
    })

    .state('Profile', {
    	url: '/profile',
    	templateUrl: 'js/profile/profile.html',
    	controller: 'profileController'
    })

    .state('Skills', {
      url: '/skills',
      templateUrl: 'js/skills/skills.html'
    })

    .state('Portfolio', {
      url: '/portfolio',
      templateUrl: 'js/portfolio/portfolio.html'
    })

    .state('Resume', {
      url: '/resume',
      templateUrl: 'js/resume/resume.html'
    })

    .state('Contact', {
      url: '/contact',
      templateUrl: 'js/contact/contact.html',
      controller: 'contactController'
    })

    $urlRouterProvider.otherwise('/home');

});