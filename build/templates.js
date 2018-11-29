(function () {
  'use strict';

  angular
    .module('core')
    .run(templates);

 templates.$inject = ['$templateCache'];

  function templates($templateCache) {
   $templateCache.put('modules/core/client/views/400.client.view.html', '<div class=\"page-header\">\n  <h1>Bad Request</h1>\n</div>\n<div class=\"alert alert-danger\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Error:</span>\n  <span ng-if=\"vm.errorMessage\" ng-bind=\"vm.errorMessage\"></span>\n  <span ng-if=\"!vm.errorMessage\">You made a bad request</span>\n</div>\n');
   $templateCache.put('modules/core/client/views/403.client.view.html', '<div class=\"page-header\">\n  <h1>Forbidden</h1>\n</div>\n<div class=\"alert alert-danger\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Error:</span>\n  You are not authorized to access this resource\n</div>\n');
   $templateCache.put('modules/core/client/views/404.client.view.html', '<div class=\"page-header\">\n  <h1>Page Not Found</h1>\n</div>\n<div class=\"alert alert-danger\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span ng-if=\"vm.errorMessage\" ng-bind=\"vm.errorMessage\"></span>\n  <span ng-if=\"!vm.errorMessage\">Page Not Found</span>\n</div>\n');
   $templateCache.put('modules/core/client/views/header.client.view.html', '<div ng-controller=\"HeaderController as vm\" style=\"background-color: rgb(41, 41, 41); height: 50px;\">\n  <div class=\"navbar-header\">\n    <img ui-sref=\"home\" ng-src=\"/modules/core/client/img/chordLogo.png\" style=\"height: 40px; margin: 5px; cursor: pointer;\">\n  </div>\n  <nav class=\"navbar-collapse\" uib-collapse=\"!vm.isCollapsed\" role=\"navigation\">\n    <ul class=\"nav navauthenticationbar-nav navbar-right\">\n      <li class=\"divider-vertical\"></li>\n      <li class=\"dropdown\" uib-dropdown>\n        <a class=\"dropdown-toggle user-header-dropdown-toggle\" style=\"color: rgb(0, 160, 0); height: 50px;\" uib-dropdown-toggle role=\"button\">\n          <span>{{vm.user.display_name}}</span> <b class=\"caret\"></b>\n        </a>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li class=\"menuItemDiv\">\n            <span class=\"menuItem\" ng-click=\"vm.joinParty()\">\n                Join Party\n            </span>\n          </li>\n          <li class=\"menuItemDiv\">\n            <span class=\"menuItem\" ng-click=\"vm.createParty()\">\n              Create Party\n            </span>\n          </li>\n          <li class=\"divider\"></li>\n          <li class=\"menuItemDiv\">\n            <span class=\"menuItem\">Signout</span>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n</div>\n');
   $templateCache.put('modules/party/client/views/create-join-party.client.view.html', '<div>\n    <div layout=\"row\">\n        <button class=\"md-primary join-party\" ng-click=\"vm.joinParty()\">\n            Join a party\n        </button>\n    </div>\n    <div layout=\"row\">\n        <button class=\"md-primary create-party\" ng-click=\"vm.createParty()\">\n            Create a party\n        </button>\n    </div>\n</div>');
   $templateCache.put('modules/party/client/views/createParty.dialog.client.view.html', '<md-dialog id=\"dialogWidth\">\n    <md-dialog-content class=\"md-dialog-content\">\n        <h2 class=\"md-title\">Create a Party</h2>\n        <span>\n            Options:\n        </span>\n    </md-dialog-content>\n    <md-dialog-actions>\n        <md-button class=\"md-primary cancel-button\" ng-click=\"vm.close()\">CANCEL</md-button>\n        <md-button class=\"md-primary ok-button\" ng-click=\"vm.okay()\">OK</md-button>\n    </md-dialog-actions>\n</md-dialog>');
   $templateCache.put('modules/party/client/views/listQueue.client.view.html', '');
   $templateCache.put('modules/party/client/views/newParty.dialog.client.view.html', '<md-dialog id=\"dialogWidth\">\n    <md-dialog-content class=\"md-dialog-content\">\n        <h2>Join a Party</h2>\n        <h3 layout=\"row\">\n            Options:\n        </h3>\n        <div style=\"height: 100%; margin-left: 10px; margin-right: 10px; background-color: rgb(0, 160, 0);\">\n            <div layout=\"row\">\n                <span flex=\"50\" style=\"margin: 4px;\">\n                    Party Name:\n                </span>\n                <md-input-container flex=\"50\" style=\"margin: 0px 5px 0px 0px; right: 0;\">\n                    <input style=\"margin-right: 5px;\" type=\"text\" ng-model=\"vm.partyName\" required>\n                </md-input-container>\n            </div>\n        </div>\n    </md-dialog-content>\n    <md-dialog-actions>\n        <md-button class=\"md-primary cancel-button\" ng-click=\"vm.close()\">CANCEL</md-button>\n        <md-button class=\"md-primary ok-button\" ng-click=\"vm.okay()\">OK</md-button>\n    </md-dialog-actions>\n</md-dialog>');
   $templateCache.put('modules/party/client/views/party-queue.client.view.html', '<div style=\"background-color: rgb(0, 160, 0); width: 80%; height: 100%\">\n\n</div>');
   $templateCache.put('modules/users/client/views/signin.client.view.html', '<div ng-controller=\"AuthenticationController as vm\">\n    <div ng-if=\"!vm.user\" style=\"margin-top: 20px;\">\n        <center>\n                <h4>Welcome to Chord.io</h4>\n                Please <a ng-click=\"vm.login()\" style=\"cursor: pointer;\">sign in</a> to Spotify or sign up <a href=\"https://www.spotify.com/us/signup/\">here</a>\n        </center>\n    </div>\n  <script src=\"https://sdk.scdn.co/spotify-player.js\"></script>\n  </div>\n  '); }
})();
