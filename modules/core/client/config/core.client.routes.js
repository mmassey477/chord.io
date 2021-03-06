(function () {
  'use strict';

  angular
    .module('core.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path();
      var hasTrailingSlash = path.length > 1 && path[path.length - 1] === '/';

      if (hasTrailingSlash) {
        // if last character is a slash, return the same url without the slash
        var newPath = path.substr(0, path.length - 1);
        $location.replace().path(newPath);
      }
    });

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('party', {
        url: '/party/:partyId',
        templateUrl: 'modules/party/client/views/listQueue.client.view.html',
        controller: 'DjController',
        controllerAs: 'vm',
        resolve: {
          partyResolve: getParty
        }
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'modules/users/client/views/signin.client.view.html',
        controller: 'AuthenticationController'
      })
      .state('spotify', {
        url: '/spotify',
        templateUrl: '/modules/party/client/views/create-join-party.client.view.html',
        controller: 'SpotifyController',
        controllerAs: 'vm'
      })
      .state('spotifyURI', {
        url: '/spotifyURI',
        controller: 'SpotifyURIController',
        controllerAs: 'vm'
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: '/modules/core/client/views/404.client.view.html',
        controller: 'ErrorController',
        controllerAs: 'vm',
        params: {
          message: function ($stateParams) {
            return $stateParams.message;
          }
        },
        data: {
          ignoreState: true
        }
      })
      .state('bad-request', {
        url: '/bad-request',
        templateUrl: '/modules/core/client/views/400.client.view.html',
        controller: 'ErrorController',
        controllerAs: 'vm',
        params: {
          message: function ($stateParams) {
            return $stateParams.message;
          }
        },
        data: {
          ignoreState: true
        }
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: '/modules/core/client/views/403.client.view.html',
        data: {
          ignoreState: true
        }
      });
  }

  getUser.$inject = ['Authentication'];

  function getUser(Authentication) {
    var user = Authentication.user;
    console.log('Userrr', user);
    return user.$promise;
  }

  getParty.$inject = ['$stateParams', 'PartyService'];

    function getParty($stateParams, PartyService) {
      var party = PartyService.party.get({
        partyId: $stateParams.partyId
      }).$promise;
      console.log("partty", party);
      return party
      
    }

}());
