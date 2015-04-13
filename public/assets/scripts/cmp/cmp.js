(function(window, angular, undefined) {'use strict';

var urlBase = "http://127.0.0.1:3000/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use User.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.manager() instead.
        "prototype$__get__manager": {
          url: urlBase + "/Users/:id/manager",
          method: "GET"
        },

        // INTERNAL. Use User.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Users/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use User.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/Users/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use User.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        // INTERNAL. Use User.manager() instead.
        "::get::User::manager": {
          url: urlBase + "/Users/:id/manager",
          method: "GET"
        },

        // INTERNAL. Use User.owner() instead.
        "::get::User::owner": {
          url: urlBase + "/Users/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use User.modifier() instead.
        "::get::User::modifier": {
          url: urlBase + "/Users/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use AccessToken.user() instead.
        "::get::AccessToken::user": {
          url: urlBase + "/AccessTokens/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Item.owner() instead.
        "::get::Item::owner": {
          url: urlBase + "/Items/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Item.modifier() instead.
        "::get::Item::modifier": {
          url: urlBase + "/Items/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use View.owner() instead.
        "::get::View::owner": {
          url: urlBase + "/Views/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use View.modifier() instead.
        "::get::View::modifier": {
          url: urlBase + "/Views/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Task.owner() instead.
        "::get::Task::owner": {
          url: urlBase + "/Tasks/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Task.modifier() instead.
        "::get::Task::modifier": {
          url: urlBase + "/Tasks/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use WorkflowInstance.initiator() instead.
        "::get::WorkflowInstance::initiator": {
          url: urlBase + "/WorkflowInstances/:id/initiator",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.owner() instead.
        "::get::WorkflowTask::owner": {
          url: urlBase + "/WorkflowTasks/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.modifier() instead.
        "::get::WorkflowTask::modifier": {
          url: urlBase + "/WorkflowTasks/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Post.owner() instead.
        "::get::Post::owner": {
          url: urlBase + "/Posts/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Post.modifier() instead.
        "::get::Post::modifier": {
          url: urlBase + "/Posts/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Person.owner() instead.
        "::get::Person::owner": {
          url: urlBase + "/People/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Person.modifier() instead.
        "::get::Person::modifier": {
          url: urlBase + "/People/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.owner() instead.
        "::get::TravelRequest::owner": {
          url: urlBase + "/TravelRequests/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.modifier() instead.
        "::get::TravelRequest::modifier": {
          url: urlBase + "/TravelRequests/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.owner() instead.
        "::get::ExpensesClaimRequest::owner": {
          url: urlBase + "/ExpensesClaimRequests/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.modifier() instead.
        "::get::ExpensesClaimRequest::modifier": {
          url: urlBase + "/ExpensesClaimRequests/:id/modifier",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.accessTokens
     * @header lbServices.User.accessTokens
     * @object
     * @description
     *
     * The object `User.accessTokens` groups methods
     * manipulating `AccessToken` instances related to `User`.
     *
     * Call {@link lbServices.User#accessTokens User.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::get::User::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#count
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::count::User::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#create
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::create::User::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#destroyAll
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::delete::User::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#destroyById
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::destroyById::User::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#findById
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::findById::User::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#updateById
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::updateById::User::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User#manager
         * @methodOf lbServices.User
         *
         * @description
         *
         * Fetches belongsTo relation manager
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.manager = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::User::manager"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User#owner
         * @methodOf lbServices.User
         *
         * @description
         *
         * Fetches belongsTo relation owner
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::User::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User#modifier
         * @methodOf lbServices.User
         *
         * @description
         *
         * Fetches belongsTo relation modifier
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.modifier = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::User::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.AccessToken
 * @header lbServices.AccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccessToken",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/AccessTokens/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use AccessToken.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/AccessTokens/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#create
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#upsert
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/AccessTokens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#exists
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/AccessTokens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/AccessTokens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#find
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findOne
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/AccessTokens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateAll
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/AccessTokens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#deleteById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/AccessTokens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#count
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/AccessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$updateAttributes
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/AccessTokens/:id",
          method: "PUT"
        },

        // INTERNAL. Use User.accessTokens.findById() instead.
        "::findById::User::accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.destroyById() instead.
        "::destroyById::User::accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.updateById() instead.
        "::updateById::User::accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.accessTokens() instead.
        "::get::User::accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.create() instead.
        "::create::User::accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use User.accessTokens.destroyAll() instead.
        "::delete::User::accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.count() instead.
        "::count::User::accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateOrCreate
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#update
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#destroyById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#removeById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.AccessToken#modelName
    * @propertyOf lbServices.AccessToken
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AccessToken`.
    */
    R.modelName = "AccessToken";


        /**
         * @ngdoc method
         * @name lbServices.AccessToken#user
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Fetches belongsTo relation user
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::AccessToken::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Role
 * @header lbServices.Role
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Role` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Role",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Roles/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Role.principals.findById() instead.
        "prototype$__findById__principals": {
          url: urlBase + "/Roles/:id/principals/:fk",
          method: "GET"
        },

        // INTERNAL. Use Role.principals.destroyById() instead.
        "prototype$__destroyById__principals": {
          url: urlBase + "/Roles/:id/principals/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Role.principals.updateById() instead.
        "prototype$__updateById__principals": {
          url: urlBase + "/Roles/:id/principals/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Role.principals() instead.
        "prototype$__get__principals": {
          isArray: true,
          url: urlBase + "/Roles/:id/principals",
          method: "GET"
        },

        // INTERNAL. Use Role.principals.create() instead.
        "prototype$__create__principals": {
          url: urlBase + "/Roles/:id/principals",
          method: "POST"
        },

        // INTERNAL. Use Role.principals.destroyAll() instead.
        "prototype$__delete__principals": {
          url: urlBase + "/Roles/:id/principals",
          method: "DELETE"
        },

        // INTERNAL. Use Role.principals.count() instead.
        "prototype$__count__principals": {
          url: urlBase + "/Roles/:id/principals/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#create
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Roles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#upsert
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Roles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#exists
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Roles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#findById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Roles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#find
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Roles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#findOne
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Roles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#updateAll
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Roles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#deleteById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Roles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#count
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Roles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$updateAttributes
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Roles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#getRoles
         * @methodOf lbServices.Role
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `context` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `roles` – `{array=}` - 
         */
        "getRoles": {
          url: urlBase + "/Roles/getRoles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#isInRole
         * @methodOf lbServices.Role
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `role` – `{string}` - 
         *
         *  - `context` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "isInRole": {
          url: urlBase + "/Roles/isInRole",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#selector
         * @methodOf lbServices.Role
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `userOnly` – `{boolean=}` - 
         *
         *  - `roleOnly` – `{boolean=}` - 
         *
         *  - `role` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "selector": {
          isArray: true,
          url: urlBase + "/Roles/selector",
          method: "POST"
        },

        // INTERNAL. Use RoleMapping.role() instead.
        "::get::RoleMapping::role": {
          url: urlBase + "/RoleMappings/:id/role",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Role#updateOrCreate
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Role#update
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Role#destroyById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Role#removeById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Role#modelName
    * @propertyOf lbServices.Role
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Role`.
    */
    R.modelName = "Role";

    /**
     * @ngdoc object
     * @name lbServices.Role.principals
     * @header lbServices.Role.principals
     * @object
     * @description
     *
     * The object `Role.principals` groups methods
     * manipulating `RoleMapping` instances related to `Role`.
     *
     * Call {@link lbServices.Role#principals Role.principals()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Role#principals
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Queries principals of Role.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.principals = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::get::Role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#count
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Counts principals of Role.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.principals.count = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::count::Role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#create
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Creates a new instance in principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.principals.create = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::create::Role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#destroyAll
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Deletes all principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.principals.destroyAll = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::delete::Role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#destroyById
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Delete a related item by id for principals
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.principals.destroyById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::destroyById::Role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#findById
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Find a related item by id for principals
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.principals.findById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::findById::Role::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Role.principals#updateById
         * @methodOf lbServices.Role.principals
         *
         * @description
         *
         * Update a related item by id for principals
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R.principals.updateById = function() {
          var TargetResource = $injector.get("RoleMapping");
          var action = TargetResource["::updateById::Role::principals"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RoleMapping
 * @header lbServices.RoleMapping
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RoleMapping` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RoleMapping",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RoleMappings/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use RoleMapping.role() instead.
        "prototype$__get__role": {
          url: urlBase + "/RoleMappings/:id/role",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#create
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RoleMappings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#upsert
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RoleMappings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#exists
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RoleMappings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#findById
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RoleMappings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#find
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RoleMappings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#findOne
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RoleMappings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#updateAll
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/RoleMappings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#deleteById
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/RoleMappings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#count
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/RoleMappings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#prototype$updateAttributes
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RoleMappings/:id",
          method: "PUT"
        },

        // INTERNAL. Use Role.principals.findById() instead.
        "::findById::Role::principals": {
          url: urlBase + "/Roles/:id/principals/:fk",
          method: "GET"
        },

        // INTERNAL. Use Role.principals.destroyById() instead.
        "::destroyById::Role::principals": {
          url: urlBase + "/Roles/:id/principals/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Role.principals.updateById() instead.
        "::updateById::Role::principals": {
          url: urlBase + "/Roles/:id/principals/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Role.principals() instead.
        "::get::Role::principals": {
          isArray: true,
          url: urlBase + "/Roles/:id/principals",
          method: "GET"
        },

        // INTERNAL. Use Role.principals.create() instead.
        "::create::Role::principals": {
          url: urlBase + "/Roles/:id/principals",
          method: "POST"
        },

        // INTERNAL. Use Role.principals.destroyAll() instead.
        "::delete::Role::principals": {
          url: urlBase + "/Roles/:id/principals",
          method: "DELETE"
        },

        // INTERNAL. Use Role.principals.count() instead.
        "::count::Role::principals": {
          url: urlBase + "/Roles/:id/principals/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#updateOrCreate
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RoleMapping` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#update
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#destroyById
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#removeById
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RoleMapping#modelName
    * @propertyOf lbServices.RoleMapping
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RoleMapping`.
    */
    R.modelName = "RoleMapping";


        /**
         * @ngdoc method
         * @name lbServices.RoleMapping#role
         * @methodOf lbServices.RoleMapping
         *
         * @description
         *
         * Fetches belongsTo relation role
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R.role = function() {
          var TargetResource = $injector.get("Role");
          var action = TargetResource["::get::RoleMapping::role"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ACL
 * @header lbServices.ACL
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ACL` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ACL",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ACLs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ACL#create
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ACL` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ACLs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#upsert
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ACL` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ACLs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#exists
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ACLs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#findById
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ACL` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ACLs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#find
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ACL` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ACLs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#findOne
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ACL` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ACLs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#updateAll
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ACLs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#deleteById
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ACLs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#count
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ACLs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#prototype$updateAttributes
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ACL` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ACLs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ACL#checkPermission
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `principalType` – `{string}` - 
         *
         *  - `principalId` – `{string}` - 
         *
         *  - `model` – `{string}` - 
         *
         *  - `property` – `{string=}` - 
         *
         *  - `accessType` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ACL` object.)
         * </em>
         */
        "checkPermission": {
          url: urlBase + "/ACLs/checkPermission",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ACL#updateOrCreate
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ACL` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ACL#update
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ACL#destroyById
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ACL#removeById
         * @methodOf lbServices.ACL
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ACL#modelName
    * @propertyOf lbServices.ACL
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ACL`.
    */
    R.modelName = "ACL";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Item
 * @header lbServices.Item
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Item` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Item",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Items/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Item.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Items/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Item.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/Items/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Item.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/Items/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Item.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/Items/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Item.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/Items/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Item.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/Items/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Item.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Items/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Item.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Items/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Item.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Items/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Item.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Items/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#create
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Items",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#upsert
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Items",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#exists
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Items/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#findById
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Items/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#find
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Items",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#findOne
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Items/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#updateAll
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Items/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#deleteById
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Items/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#count
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Items/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#prototype$updateAttributes
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Items/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Item#updateOrCreate
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Item#update
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Item#destroyById
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Item#removeById
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Item#modelName
    * @propertyOf lbServices.Item
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Item`.
    */
    R.modelName = "Item";


        /**
         * @ngdoc method
         * @name lbServices.Item#owner
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Fetches belongsTo relation owner
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Item::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item#modifier
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Fetches belongsTo relation modifier
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.modifier = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Item::modifier"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Item.comments
     * @header lbServices.Item.comments
     * @object
     * @description
     *
     * The object `Item.comments` groups methods
     * manipulating `ModerationComment` instances related to `Item`.
     *
     * Call {@link lbServices.Item#comments Item.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Item#comments
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Queries comments of Item.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::get::Item::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.comments#count
         * @methodOf lbServices.Item.comments
         *
         * @description
         *
         * Counts comments of Item.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::count::Item::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.comments#create
         * @methodOf lbServices.Item.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::create::Item::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.comments#destroyAll
         * @methodOf lbServices.Item.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::delete::Item::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.comments#destroyById
         * @methodOf lbServices.Item.comments
         *
         * @description
         *
         * Delete a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::destroyById::Item::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.comments#findById
         * @methodOf lbServices.Item.comments
         *
         * @description
         *
         * Find a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::findById::Item::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.comments#updateById
         * @methodOf lbServices.Item.comments
         *
         * @description
         *
         * Update a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::updateById::Item::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item#instance
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Fetches belongsTo relation instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instance = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::get::Item::instance"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.List
 * @header lbServices.List
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `List` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "List",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Lists/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use List.views.findById() instead.
        "prototype$__findById__views": {
          url: urlBase + "/Lists/:id/views/:fk",
          method: "GET"
        },

        // INTERNAL. Use List.views.destroyById() instead.
        "prototype$__destroyById__views": {
          url: urlBase + "/Lists/:id/views/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use List.views.updateById() instead.
        "prototype$__updateById__views": {
          url: urlBase + "/Lists/:id/views/:fk",
          method: "PUT"
        },

        // INTERNAL. Use List.workflowTemplates.findById() instead.
        "prototype$__findById__workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/:fk",
          method: "GET"
        },

        // INTERNAL. Use List.workflowTemplates.destroyById() instead.
        "prototype$__destroyById__workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use List.workflowTemplates.updateById() instead.
        "prototype$__updateById__workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/:fk",
          method: "PUT"
        },

        // INTERNAL. Use List.workflowTemplates.link() instead.
        "prototype$__link__workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use List.workflowTemplates.unlink() instead.
        "prototype$__unlink__workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use List.workflowTemplates.exists() instead.
        "prototype$__exists__workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use List.views() instead.
        "prototype$__get__views": {
          isArray: true,
          url: urlBase + "/Lists/:id/views",
          method: "GET"
        },

        // INTERNAL. Use List.views.create() instead.
        "prototype$__create__views": {
          url: urlBase + "/Lists/:id/views",
          method: "POST"
        },

        // INTERNAL. Use List.views.destroyAll() instead.
        "prototype$__delete__views": {
          url: urlBase + "/Lists/:id/views",
          method: "DELETE"
        },

        // INTERNAL. Use List.views.count() instead.
        "prototype$__count__views": {
          url: urlBase + "/Lists/:id/views/count",
          method: "GET"
        },

        // INTERNAL. Use List.workflowTemplates() instead.
        "prototype$__get__workflowTemplates": {
          isArray: true,
          url: urlBase + "/Lists/:id/workflowTemplates",
          method: "GET"
        },

        // INTERNAL. Use List.workflowTemplates.create() instead.
        "prototype$__create__workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates",
          method: "POST"
        },

        // INTERNAL. Use List.workflowTemplates.destroyAll() instead.
        "prototype$__delete__workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates",
          method: "DELETE"
        },

        // INTERNAL. Use List.workflowTemplates.count() instead.
        "prototype$__count__workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#create
         * @methodOf lbServices.List
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Lists",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#upsert
         * @methodOf lbServices.List
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Lists",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#exists
         * @methodOf lbServices.List
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Lists/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#findById
         * @methodOf lbServices.List
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Lists/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#find
         * @methodOf lbServices.List
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Lists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#findOne
         * @methodOf lbServices.List
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Lists/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#updateAll
         * @methodOf lbServices.List
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Lists/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#deleteById
         * @methodOf lbServices.List
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Lists/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#count
         * @methodOf lbServices.List
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Lists/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#prototype$updateAttributes
         * @methodOf lbServices.List
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Lists/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.List#debugColDef
         * @methodOf lbServices.List
         *
         * @description
         *
         * 获取列定义
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `modelName` – `{string}` - 模型
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        "debugColDef": {
          isArray: true,
          url: urlBase + "/Lists/debugColDef",
          method: "POST"
        },

        // INTERNAL. Use View.list() instead.
        "::get::View::list": {
          url: urlBase + "/Views/:id/list",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTemplate.lists.findById() instead.
        "::findById::WorkflowTemplate::lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTemplate.lists.destroyById() instead.
        "::destroyById::WorkflowTemplate::lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTemplate.lists.updateById() instead.
        "::updateById::WorkflowTemplate::lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowTemplate.lists.link() instead.
        "::link::WorkflowTemplate::lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowTemplate.lists.unlink() instead.
        "::unlink::WorkflowTemplate::lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTemplate.lists.exists() instead.
        "::exists::WorkflowTemplate::lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use WorkflowTemplate.lists() instead.
        "::get::WorkflowTemplate::lists": {
          isArray: true,
          url: urlBase + "/WorkflowTemplates/:id/lists",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTemplate.lists.create() instead.
        "::create::WorkflowTemplate::lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists",
          method: "POST"
        },

        // INTERNAL. Use WorkflowTemplate.lists.destroyAll() instead.
        "::delete::WorkflowTemplate::lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTemplate.lists.count() instead.
        "::count::WorkflowTemplate::lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/count",
          method: "GET"
        },

        // INTERNAL. Use WorkflowAssociation.list() instead.
        "::get::WorkflowAssociation::list": {
          url: urlBase + "/WorkflowAssociations/:id/list",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.List#updateOrCreate
         * @methodOf lbServices.List
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.List#update
         * @methodOf lbServices.List
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.List#destroyById
         * @methodOf lbServices.List
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.List#removeById
         * @methodOf lbServices.List
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.List#modelName
    * @propertyOf lbServices.List
    * @description
    * The name of the model represented by this $resource,
    * i.e. `List`.
    */
    R.modelName = "List";

    /**
     * @ngdoc object
     * @name lbServices.List.views
     * @header lbServices.List.views
     * @object
     * @description
     *
     * The object `List.views` groups methods
     * manipulating `View` instances related to `List`.
     *
     * Call {@link lbServices.List#views List.views()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.List#views
         * @methodOf lbServices.List
         *
         * @description
         *
         * Queries views of List.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        R.views = function() {
          var TargetResource = $injector.get("View");
          var action = TargetResource["::get::List::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.views#count
         * @methodOf lbServices.List.views
         *
         * @description
         *
         * Counts views of List.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.views.count = function() {
          var TargetResource = $injector.get("View");
          var action = TargetResource["::count::List::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.views#create
         * @methodOf lbServices.List.views
         *
         * @description
         *
         * Creates a new instance in views of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        R.views.create = function() {
          var TargetResource = $injector.get("View");
          var action = TargetResource["::create::List::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.views#destroyAll
         * @methodOf lbServices.List.views
         *
         * @description
         *
         * Deletes all views of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.views.destroyAll = function() {
          var TargetResource = $injector.get("View");
          var action = TargetResource["::delete::List::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.views#destroyById
         * @methodOf lbServices.List.views
         *
         * @description
         *
         * Delete a related item by id for views
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for views
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.views.destroyById = function() {
          var TargetResource = $injector.get("View");
          var action = TargetResource["::destroyById::List::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.views#findById
         * @methodOf lbServices.List.views
         *
         * @description
         *
         * Find a related item by id for views
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for views
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        R.views.findById = function() {
          var TargetResource = $injector.get("View");
          var action = TargetResource["::findById::List::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.views#updateById
         * @methodOf lbServices.List.views
         *
         * @description
         *
         * Update a related item by id for views
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for views
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        R.views.updateById = function() {
          var TargetResource = $injector.get("View");
          var action = TargetResource["::updateById::List::views"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.List.workflowTemplates
     * @header lbServices.List.workflowTemplates
     * @object
     * @description
     *
     * The object `List.workflowTemplates` groups methods
     * manipulating `WorkflowTemplate` instances related to `List`.
     *
     * Call {@link lbServices.List#workflowTemplates List.workflowTemplates()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.List#workflowTemplates
         * @methodOf lbServices.List
         *
         * @description
         *
         * Queries workflowTemplates of List.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        R.workflowTemplates = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::get::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.workflowTemplates#count
         * @methodOf lbServices.List.workflowTemplates
         *
         * @description
         *
         * Counts workflowTemplates of List.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.workflowTemplates.count = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::count::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.workflowTemplates#create
         * @methodOf lbServices.List.workflowTemplates
         *
         * @description
         *
         * Creates a new instance in workflowTemplates of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        R.workflowTemplates.create = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::create::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.workflowTemplates#destroyAll
         * @methodOf lbServices.List.workflowTemplates
         *
         * @description
         *
         * Deletes all workflowTemplates of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.workflowTemplates.destroyAll = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::delete::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.workflowTemplates#destroyById
         * @methodOf lbServices.List.workflowTemplates
         *
         * @description
         *
         * Delete a related item by id for workflowTemplates
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for workflowTemplates
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.workflowTemplates.destroyById = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::destroyById::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.workflowTemplates#exists
         * @methodOf lbServices.List.workflowTemplates
         *
         * @description
         *
         * Check the existence of workflowTemplates relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for workflowTemplates
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        R.workflowTemplates.exists = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::exists::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.workflowTemplates#findById
         * @methodOf lbServices.List.workflowTemplates
         *
         * @description
         *
         * Find a related item by id for workflowTemplates
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for workflowTemplates
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        R.workflowTemplates.findById = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::findById::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.workflowTemplates#link
         * @methodOf lbServices.List.workflowTemplates
         *
         * @description
         *
         * Add a related item by id for workflowTemplates
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for workflowTemplates
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        R.workflowTemplates.link = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::link::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.workflowTemplates#unlink
         * @methodOf lbServices.List.workflowTemplates
         *
         * @description
         *
         * Remove the workflowTemplates relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for workflowTemplates
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.workflowTemplates.unlink = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::unlink::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.List.workflowTemplates#updateById
         * @methodOf lbServices.List.workflowTemplates
         *
         * @description
         *
         * Update a related item by id for workflowTemplates
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for workflowTemplates
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        R.workflowTemplates.updateById = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::updateById::List::workflowTemplates"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ColumnDef
 * @header lbServices.ColumnDef
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ColumnDef` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ColumnDef",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ColumnDefs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#create
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ColumnDef` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ColumnDefs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#upsert
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ColumnDef` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ColumnDefs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#exists
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ColumnDefs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#findById
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ColumnDef` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ColumnDefs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#find
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ColumnDef` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ColumnDefs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#findOne
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ColumnDef` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ColumnDefs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#updateAll
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ColumnDefs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#deleteById
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ColumnDefs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#count
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ColumnDefs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#prototype$updateAttributes
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ColumnDef` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ColumnDefs/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#updateOrCreate
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ColumnDef` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#update
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#destroyById
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ColumnDef#removeById
         * @methodOf lbServices.ColumnDef
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ColumnDef#modelName
    * @propertyOf lbServices.ColumnDef
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ColumnDef`.
    */
    R.modelName = "ColumnDef";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.View
 * @header lbServices.View
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `View` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "View",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Views/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use View.list() instead.
        "prototype$__get__list": {
          url: urlBase + "/Views/:id/list",
          method: "GET"
        },

        // INTERNAL. Use View.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Views/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use View.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/Views/:id/modifier",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#create
         * @methodOf lbServices.View
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Views",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#upsert
         * @methodOf lbServices.View
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Views",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#exists
         * @methodOf lbServices.View
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Views/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#findById
         * @methodOf lbServices.View
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Views/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#find
         * @methodOf lbServices.View
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Views",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#findOne
         * @methodOf lbServices.View
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Views/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#updateAll
         * @methodOf lbServices.View
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Views/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#deleteById
         * @methodOf lbServices.View
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Views/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#count
         * @methodOf lbServices.View
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Views/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.View#prototype$updateAttributes
         * @methodOf lbServices.View
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Views/:id",
          method: "PUT"
        },

        // INTERNAL. Use List.views.findById() instead.
        "::findById::List::views": {
          url: urlBase + "/Lists/:id/views/:fk",
          method: "GET"
        },

        // INTERNAL. Use List.views.destroyById() instead.
        "::destroyById::List::views": {
          url: urlBase + "/Lists/:id/views/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use List.views.updateById() instead.
        "::updateById::List::views": {
          url: urlBase + "/Lists/:id/views/:fk",
          method: "PUT"
        },

        // INTERNAL. Use List.views() instead.
        "::get::List::views": {
          isArray: true,
          url: urlBase + "/Lists/:id/views",
          method: "GET"
        },

        // INTERNAL. Use List.views.create() instead.
        "::create::List::views": {
          url: urlBase + "/Lists/:id/views",
          method: "POST"
        },

        // INTERNAL. Use List.views.destroyAll() instead.
        "::delete::List::views": {
          url: urlBase + "/Lists/:id/views",
          method: "DELETE"
        },

        // INTERNAL. Use List.views.count() instead.
        "::count::List::views": {
          url: urlBase + "/Lists/:id/views/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.View#updateOrCreate
         * @methodOf lbServices.View
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `View` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.View#update
         * @methodOf lbServices.View
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.View#destroyById
         * @methodOf lbServices.View
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.View#removeById
         * @methodOf lbServices.View
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.View#modelName
    * @propertyOf lbServices.View
    * @description
    * The name of the model represented by this $resource,
    * i.e. `View`.
    */
    R.modelName = "View";


        /**
         * @ngdoc method
         * @name lbServices.View#list
         * @methodOf lbServices.View
         *
         * @description
         *
         * Fetches belongsTo relation list
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        R.list = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::get::View::list"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.View#owner
         * @methodOf lbServices.View
         *
         * @description
         *
         * Fetches belongsTo relation owner
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::View::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.View#modifier
         * @methodOf lbServices.View
         *
         * @description
         *
         * Fetches belongsTo relation modifier
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.modifier = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::View::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Attachment
 * @header lbServices.Attachment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Attachment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Attachment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Attachments/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Attachment#getContainers
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/Attachments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#createContainer
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/Attachments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#destroyContainer
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/Attachments/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#getContainer
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/Attachments/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#getFiles
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/Attachments/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#getFile
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Attachment` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/Attachments/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#removeFile
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/Attachments/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#upload
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/Attachments/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Attachment#download
         * @methodOf lbServices.Attachment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/Attachments/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Attachment#modelName
    * @propertyOf lbServices.Attachment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Attachment`.
    */
    R.modelName = "Attachment";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ModerationComment
 * @header lbServices.ModerationComment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ModerationComment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ModerationComment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ModerationComments/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#create
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ModerationComments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#upsert
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ModerationComments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#exists
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ModerationComments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#findById
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ModerationComments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#find
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ModerationComments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#findOne
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ModerationComments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#updateAll
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ModerationComments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#deleteById
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ModerationComments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#count
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ModerationComments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#prototype$updateAttributes
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ModerationComments/:id",
          method: "PUT"
        },

        // INTERNAL. Use Item.comments.findById() instead.
        "::findById::Item::comments": {
          url: urlBase + "/Items/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Item.comments.destroyById() instead.
        "::destroyById::Item::comments": {
          url: urlBase + "/Items/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Item.comments.updateById() instead.
        "::updateById::Item::comments": {
          url: urlBase + "/Items/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Item.comments() instead.
        "::get::Item::comments": {
          isArray: true,
          url: urlBase + "/Items/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Item.comments.create() instead.
        "::create::Item::comments": {
          url: urlBase + "/Items/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Item.comments.destroyAll() instead.
        "::delete::Item::comments": {
          url: urlBase + "/Items/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Item.comments.count() instead.
        "::count::Item::comments": {
          url: urlBase + "/Items/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Task.comments.findById() instead.
        "::findById::Task::comments": {
          url: urlBase + "/Tasks/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Task.comments.destroyById() instead.
        "::destroyById::Task::comments": {
          url: urlBase + "/Tasks/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Task.comments.updateById() instead.
        "::updateById::Task::comments": {
          url: urlBase + "/Tasks/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Task.comments() instead.
        "::get::Task::comments": {
          isArray: true,
          url: urlBase + "/Tasks/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Task.comments.create() instead.
        "::create::Task::comments": {
          url: urlBase + "/Tasks/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Task.comments.destroyAll() instead.
        "::delete::Task::comments": {
          url: urlBase + "/Tasks/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Task.comments.count() instead.
        "::count::Task::comments": {
          url: urlBase + "/Tasks/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.comments.findById() instead.
        "::findById::WorkflowTask::comments": {
          url: urlBase + "/WorkflowTasks/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.comments.destroyById() instead.
        "::destroyById::WorkflowTask::comments": {
          url: urlBase + "/WorkflowTasks/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTask.comments.updateById() instead.
        "::updateById::WorkflowTask::comments": {
          url: urlBase + "/WorkflowTasks/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowTask.comments() instead.
        "::get::WorkflowTask::comments": {
          isArray: true,
          url: urlBase + "/WorkflowTasks/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.comments.create() instead.
        "::create::WorkflowTask::comments": {
          url: urlBase + "/WorkflowTasks/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use WorkflowTask.comments.destroyAll() instead.
        "::delete::WorkflowTask::comments": {
          url: urlBase + "/WorkflowTasks/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTask.comments.count() instead.
        "::count::WorkflowTask::comments": {
          url: urlBase + "/WorkflowTasks/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.findById() instead.
        "::findById::Post::comments": {
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.destroyById() instead.
        "::destroyById::Post::comments": {
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.updateById() instead.
        "::updateById::Post::comments": {
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.comments() instead.
        "::get::Post::comments": {
          isArray: true,
          url: urlBase + "/Posts/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.create() instead.
        "::create::Post::comments": {
          url: urlBase + "/Posts/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Post.comments.destroyAll() instead.
        "::delete::Post::comments": {
          url: urlBase + "/Posts/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.count() instead.
        "::count::Post::comments": {
          url: urlBase + "/Posts/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Person.comments.findById() instead.
        "::findById::Person::comments": {
          url: urlBase + "/People/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.comments.destroyById() instead.
        "::destroyById::Person::comments": {
          url: urlBase + "/People/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.comments.updateById() instead.
        "::updateById::Person::comments": {
          url: urlBase + "/People/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.comments() instead.
        "::get::Person::comments": {
          isArray: true,
          url: urlBase + "/People/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Person.comments.create() instead.
        "::create::Person::comments": {
          url: urlBase + "/People/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Person.comments.destroyAll() instead.
        "::delete::Person::comments": {
          url: urlBase + "/People/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Person.comments.count() instead.
        "::count::Person::comments": {
          url: urlBase + "/People/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.comments.findById() instead.
        "::findById::TravelRequest::comments": {
          url: urlBase + "/TravelRequests/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.comments.destroyById() instead.
        "::destroyById::TravelRequest::comments": {
          url: urlBase + "/TravelRequests/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use TravelRequest.comments.updateById() instead.
        "::updateById::TravelRequest::comments": {
          url: urlBase + "/TravelRequests/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use TravelRequest.comments() instead.
        "::get::TravelRequest::comments": {
          isArray: true,
          url: urlBase + "/TravelRequests/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.comments.create() instead.
        "::create::TravelRequest::comments": {
          url: urlBase + "/TravelRequests/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use TravelRequest.comments.destroyAll() instead.
        "::delete::TravelRequest::comments": {
          url: urlBase + "/TravelRequests/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use TravelRequest.comments.count() instead.
        "::count::TravelRequest::comments": {
          url: urlBase + "/TravelRequests/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.findById() instead.
        "::findById::ExpensesClaimRequest::comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.destroyById() instead.
        "::destroyById::ExpensesClaimRequest::comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.updateById() instead.
        "::updateById::ExpensesClaimRequest::comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments() instead.
        "::get::ExpensesClaimRequest::comments": {
          isArray: true,
          url: urlBase + "/ExpensesClaimRequests/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.create() instead.
        "::create::ExpensesClaimRequest::comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.destroyAll() instead.
        "::delete::ExpensesClaimRequest::comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.count() instead.
        "::count::ExpensesClaimRequest::comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#updateOrCreate
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#update
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#destroyById
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ModerationComment#removeById
         * @methodOf lbServices.ModerationComment
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ModerationComment#modelName
    * @propertyOf lbServices.ModerationComment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ModerationComment`.
    */
    R.modelName = "ModerationComment";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Task
 * @header lbServices.Task
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Task` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Task",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Tasks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Task.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/Tasks/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Task.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/Tasks/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Task.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/Tasks/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Task.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Tasks/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Task.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/Tasks/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Task.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/Tasks/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Task.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Tasks/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Task.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Tasks/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Task.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Tasks/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Task.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Tasks/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#create
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Tasks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#upsert
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Tasks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#exists
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Tasks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#findById
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Tasks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#find
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Tasks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#findOne
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Tasks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#updateAll
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Tasks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#deleteById
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Tasks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#count
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Tasks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#prototype$updateAttributes
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Tasks/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Task#updateOrCreate
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Task#update
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Task#destroyById
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Task#removeById
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Task#modelName
    * @propertyOf lbServices.Task
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Task`.
    */
    R.modelName = "Task";

    /**
     * @ngdoc object
     * @name lbServices.Task.comments
     * @header lbServices.Task.comments
     * @object
     * @description
     *
     * The object `Task.comments` groups methods
     * manipulating `ModerationComment` instances related to `Task`.
     *
     * Call {@link lbServices.Task#comments Task.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Task#comments
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Queries comments of Task.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::get::Task::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.comments#count
         * @methodOf lbServices.Task.comments
         *
         * @description
         *
         * Counts comments of Task.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::count::Task::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.comments#create
         * @methodOf lbServices.Task.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::create::Task::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.comments#destroyAll
         * @methodOf lbServices.Task.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::delete::Task::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.comments#destroyById
         * @methodOf lbServices.Task.comments
         *
         * @description
         *
         * Delete a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::destroyById::Task::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.comments#findById
         * @methodOf lbServices.Task.comments
         *
         * @description
         *
         * Find a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::findById::Task::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.comments#updateById
         * @methodOf lbServices.Task.comments
         *
         * @description
         *
         * Update a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::updateById::Task::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task#owner
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Fetches belongsTo relation owner
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Task::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task#modifier
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Fetches belongsTo relation modifier
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.modifier = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Task::modifier"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task#instance
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Fetches belongsTo relation instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instance = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::get::Task::instance"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WorkflowTemplate
 * @header lbServices.WorkflowTemplate
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WorkflowTemplate` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WorkflowTemplate",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WorkflowTemplates/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use WorkflowTemplate.lists.findById() instead.
        "prototype$__findById__lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTemplate.lists.destroyById() instead.
        "prototype$__destroyById__lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTemplate.lists.updateById() instead.
        "prototype$__updateById__lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowTemplate.lists.link() instead.
        "prototype$__link__lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowTemplate.lists.unlink() instead.
        "prototype$__unlink__lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTemplate.lists.exists() instead.
        "prototype$__exists__lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use WorkflowTemplate.lists() instead.
        "prototype$__get__lists": {
          isArray: true,
          url: urlBase + "/WorkflowTemplates/:id/lists",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTemplate.lists.create() instead.
        "prototype$__create__lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists",
          method: "POST"
        },

        // INTERNAL. Use WorkflowTemplate.lists.destroyAll() instead.
        "prototype$__delete__lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTemplate.lists.count() instead.
        "prototype$__count__lists": {
          url: urlBase + "/WorkflowTemplates/:id/lists/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#create
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WorkflowTemplates",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#upsert
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WorkflowTemplates",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#exists
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WorkflowTemplates/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#findById
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WorkflowTemplates/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#find
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WorkflowTemplates",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#findOne
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WorkflowTemplates/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#updateAll
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/WorkflowTemplates/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#deleteById
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/WorkflowTemplates/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#count
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WorkflowTemplates/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#prototype$updateAttributes
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WorkflowTemplates/:id",
          method: "PUT"
        },

        // INTERNAL. Use List.workflowTemplates.findById() instead.
        "::findById::List::workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/:fk",
          method: "GET"
        },

        // INTERNAL. Use List.workflowTemplates.destroyById() instead.
        "::destroyById::List::workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use List.workflowTemplates.updateById() instead.
        "::updateById::List::workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/:fk",
          method: "PUT"
        },

        // INTERNAL. Use List.workflowTemplates.link() instead.
        "::link::List::workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use List.workflowTemplates.unlink() instead.
        "::unlink::List::workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use List.workflowTemplates.exists() instead.
        "::exists::List::workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use List.workflowTemplates() instead.
        "::get::List::workflowTemplates": {
          isArray: true,
          url: urlBase + "/Lists/:id/workflowTemplates",
          method: "GET"
        },

        // INTERNAL. Use List.workflowTemplates.create() instead.
        "::create::List::workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates",
          method: "POST"
        },

        // INTERNAL. Use List.workflowTemplates.destroyAll() instead.
        "::delete::List::workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates",
          method: "DELETE"
        },

        // INTERNAL. Use List.workflowTemplates.count() instead.
        "::count::List::workflowTemplates": {
          url: urlBase + "/Lists/:id/workflowTemplates/count",
          method: "GET"
        },

        // INTERNAL. Use WorkflowAssociation.workflowTemplate() instead.
        "::get::WorkflowAssociation::workflowTemplate": {
          url: urlBase + "/WorkflowAssociations/:id/workflowTemplate",
          method: "GET"
        },

        // INTERNAL. Use WorkflowInstance.workflowTemplate() instead.
        "::get::WorkflowInstance::workflowTemplate": {
          url: urlBase + "/WorkflowInstances/:id/workflowTemplate",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#updateOrCreate
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#update
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#destroyById
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#removeById
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.WorkflowTemplate#modelName
    * @propertyOf lbServices.WorkflowTemplate
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WorkflowTemplate`.
    */
    R.modelName = "WorkflowTemplate";

    /**
     * @ngdoc object
     * @name lbServices.WorkflowTemplate.lists
     * @header lbServices.WorkflowTemplate.lists
     * @object
     * @description
     *
     * The object `WorkflowTemplate.lists` groups methods
     * manipulating `List` instances related to `WorkflowTemplate`.
     *
     * Call {@link lbServices.WorkflowTemplate#lists WorkflowTemplate.lists()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate#lists
         * @methodOf lbServices.WorkflowTemplate
         *
         * @description
         *
         * Queries lists of WorkflowTemplate.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        R.lists = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::get::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate.lists#count
         * @methodOf lbServices.WorkflowTemplate.lists
         *
         * @description
         *
         * Counts lists of WorkflowTemplate.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.lists.count = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::count::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate.lists#create
         * @methodOf lbServices.WorkflowTemplate.lists
         *
         * @description
         *
         * Creates a new instance in lists of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        R.lists.create = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::create::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate.lists#destroyAll
         * @methodOf lbServices.WorkflowTemplate.lists
         *
         * @description
         *
         * Deletes all lists of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lists.destroyAll = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::delete::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate.lists#destroyById
         * @methodOf lbServices.WorkflowTemplate.lists
         *
         * @description
         *
         * Delete a related item by id for lists
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lists
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lists.destroyById = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::destroyById::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate.lists#exists
         * @methodOf lbServices.WorkflowTemplate.lists
         *
         * @description
         *
         * Check the existence of lists relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lists
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        R.lists.exists = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::exists::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate.lists#findById
         * @methodOf lbServices.WorkflowTemplate.lists
         *
         * @description
         *
         * Find a related item by id for lists
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lists
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        R.lists.findById = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::findById::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate.lists#link
         * @methodOf lbServices.WorkflowTemplate.lists
         *
         * @description
         *
         * Add a related item by id for lists
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lists
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        R.lists.link = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::link::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate.lists#unlink
         * @methodOf lbServices.WorkflowTemplate.lists
         *
         * @description
         *
         * Remove the lists relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lists
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.lists.unlink = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::unlink::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTemplate.lists#updateById
         * @methodOf lbServices.WorkflowTemplate.lists
         *
         * @description
         *
         * Update a related item by id for lists
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for lists
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        R.lists.updateById = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::updateById::WorkflowTemplate::lists"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WorkflowAssociation
 * @header lbServices.WorkflowAssociation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WorkflowAssociation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WorkflowAssociation",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WorkflowAssociations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use WorkflowAssociation.list() instead.
        "prototype$__get__list": {
          url: urlBase + "/WorkflowAssociations/:id/list",
          method: "GET"
        },

        // INTERNAL. Use WorkflowAssociation.workflowTemplate() instead.
        "prototype$__get__workflowTemplate": {
          url: urlBase + "/WorkflowAssociations/:id/workflowTemplate",
          method: "GET"
        },

        // INTERNAL. Use WorkflowAssociation.instances.findById() instead.
        "prototype$__findById__instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkflowAssociation.instances.destroyById() instead.
        "prototype$__destroyById__instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowAssociation.instances.updateById() instead.
        "prototype$__updateById__instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowAssociation.instances() instead.
        "prototype$__get__instances": {
          isArray: true,
          url: urlBase + "/WorkflowAssociations/:id/instances",
          method: "GET"
        },

        // INTERNAL. Use WorkflowAssociation.instances.create() instead.
        "prototype$__create__instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances",
          method: "POST"
        },

        // INTERNAL. Use WorkflowAssociation.instances.destroyAll() instead.
        "prototype$__delete__instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowAssociation.instances.count() instead.
        "prototype$__count__instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#create
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowAssociation` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WorkflowAssociations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#upsert
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowAssociation` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WorkflowAssociations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#exists
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WorkflowAssociations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#findById
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowAssociation` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WorkflowAssociations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#find
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowAssociation` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WorkflowAssociations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#findOne
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowAssociation` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WorkflowAssociations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#updateAll
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/WorkflowAssociations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#deleteById
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/WorkflowAssociations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#count
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WorkflowAssociations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#prototype$updateAttributes
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowAssociation` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WorkflowAssociations/:id",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowInstance.workflowAssociation() instead.
        "::get::WorkflowInstance::workflowAssociation": {
          url: urlBase + "/WorkflowInstances/:id/workflowAssociation",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.workflowAssociation() instead.
        "::get::WorkflowTask::workflowAssociation": {
          url: urlBase + "/WorkflowTasks/:id/workflowAssociation",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#updateOrCreate
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowAssociation` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#update
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#destroyById
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#removeById
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.WorkflowAssociation#modelName
    * @propertyOf lbServices.WorkflowAssociation
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WorkflowAssociation`.
    */
    R.modelName = "WorkflowAssociation";


        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#list
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Fetches belongsTo relation list
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `List` object.)
         * </em>
         */
        R.list = function() {
          var TargetResource = $injector.get("List");
          var action = TargetResource["::get::WorkflowAssociation::list"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#workflowTemplate
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Fetches belongsTo relation workflowTemplate
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        R.workflowTemplate = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::get::WorkflowAssociation::workflowTemplate"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.WorkflowAssociation.instances
     * @header lbServices.WorkflowAssociation.instances
     * @object
     * @description
     *
     * The object `WorkflowAssociation.instances` groups methods
     * manipulating `WorkflowInstance` instances related to `WorkflowAssociation`.
     *
     * Call {@link lbServices.WorkflowAssociation#instances WorkflowAssociation.instances()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation#instances
         * @methodOf lbServices.WorkflowAssociation
         *
         * @description
         *
         * Queries instances of WorkflowAssociation.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instances = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::get::WorkflowAssociation::instances"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation.instances#count
         * @methodOf lbServices.WorkflowAssociation.instances
         *
         * @description
         *
         * Counts instances of WorkflowAssociation.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.instances.count = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::count::WorkflowAssociation::instances"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation.instances#create
         * @methodOf lbServices.WorkflowAssociation.instances
         *
         * @description
         *
         * Creates a new instance in instances of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instances.create = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::create::WorkflowAssociation::instances"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation.instances#destroyAll
         * @methodOf lbServices.WorkflowAssociation.instances
         *
         * @description
         *
         * Deletes all instances of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.instances.destroyAll = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::delete::WorkflowAssociation::instances"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation.instances#destroyById
         * @methodOf lbServices.WorkflowAssociation.instances
         *
         * @description
         *
         * Delete a related item by id for instances
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.instances.destroyById = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::destroyById::WorkflowAssociation::instances"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation.instances#findById
         * @methodOf lbServices.WorkflowAssociation.instances
         *
         * @description
         *
         * Find a related item by id for instances
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instances.findById = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::findById::WorkflowAssociation::instances"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowAssociation.instances#updateById
         * @methodOf lbServices.WorkflowAssociation.instances
         *
         * @description
         *
         * Update a related item by id for instances
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instances.updateById = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::updateById::WorkflowAssociation::instances"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WorkflowInstance
 * @header lbServices.WorkflowInstance
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WorkflowInstance` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WorkflowInstance",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WorkflowInstances/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use WorkflowInstance.initiator() instead.
        "prototype$__get__initiator": {
          url: urlBase + "/WorkflowInstances/:id/initiator",
          method: "GET"
        },

        // INTERNAL. Use WorkflowInstance.workflowTemplate() instead.
        "prototype$__get__workflowTemplate": {
          url: urlBase + "/WorkflowInstances/:id/workflowTemplate",
          method: "GET"
        },

        // INTERNAL. Use WorkflowInstance.workflowAssociation() instead.
        "prototype$__get__workflowAssociation": {
          url: urlBase + "/WorkflowInstances/:id/workflowAssociation",
          method: "GET"
        },

        // INTERNAL. Use WorkflowInstance.logs.findById() instead.
        "prototype$__findById__logs": {
          url: urlBase + "/WorkflowInstances/:id/logs/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkflowInstance.logs.destroyById() instead.
        "prototype$__destroyById__logs": {
          url: urlBase + "/WorkflowInstances/:id/logs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowInstance.logs.updateById() instead.
        "prototype$__updateById__logs": {
          url: urlBase + "/WorkflowInstances/:id/logs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowInstance.logs() instead.
        "prototype$__get__logs": {
          isArray: true,
          url: urlBase + "/WorkflowInstances/:id/logs",
          method: "GET"
        },

        // INTERNAL. Use WorkflowInstance.logs.create() instead.
        "prototype$__create__logs": {
          url: urlBase + "/WorkflowInstances/:id/logs",
          method: "POST"
        },

        // INTERNAL. Use WorkflowInstance.logs.destroyAll() instead.
        "prototype$__delete__logs": {
          url: urlBase + "/WorkflowInstances/:id/logs",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowInstance.logs.count() instead.
        "prototype$__count__logs": {
          url: urlBase + "/WorkflowInstances/:id/logs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#create
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WorkflowInstances",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#upsert
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WorkflowInstances",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#exists
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WorkflowInstances/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#findById
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WorkflowInstances/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#find
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WorkflowInstances",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#findOne
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WorkflowInstances/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#updateAll
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/WorkflowInstances/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#deleteById
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/WorkflowInstances/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#count
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WorkflowInstances/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#prototype$updateAttributes
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WorkflowInstances/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#initialWorkflow
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * 启动工作流
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `initiator` – `{number}` - 流程启动者
         *
         *  - `initialItem` – `{object}` - 流程启动项
         *
         *  - `association` – `{object}` - 工作流关联
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        "initialWorkflow": {
          url: urlBase + "/WorkflowInstances/initialWorkflow",
          method: "POST"
        },

        // INTERNAL. Use Item.instance() instead.
        "::get::Item::instance": {
          url: urlBase + "/Items/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Task.instance() instead.
        "::get::Task::instance": {
          url: urlBase + "/Tasks/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use WorkflowAssociation.instances.findById() instead.
        "::findById::WorkflowAssociation::instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkflowAssociation.instances.destroyById() instead.
        "::destroyById::WorkflowAssociation::instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowAssociation.instances.updateById() instead.
        "::updateById::WorkflowAssociation::instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowAssociation.instances() instead.
        "::get::WorkflowAssociation::instances": {
          isArray: true,
          url: urlBase + "/WorkflowAssociations/:id/instances",
          method: "GET"
        },

        // INTERNAL. Use WorkflowAssociation.instances.create() instead.
        "::create::WorkflowAssociation::instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances",
          method: "POST"
        },

        // INTERNAL. Use WorkflowAssociation.instances.destroyAll() instead.
        "::delete::WorkflowAssociation::instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowAssociation.instances.count() instead.
        "::count::WorkflowAssociation::instances": {
          url: urlBase + "/WorkflowAssociations/:id/instances/count",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.instance() instead.
        "::get::WorkflowTask::instance": {
          url: urlBase + "/WorkflowTasks/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Post.instance() instead.
        "::get::Post::instance": {
          url: urlBase + "/Posts/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Person.instance() instead.
        "::get::Person::instance": {
          url: urlBase + "/People/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.instance() instead.
        "::get::TravelRequest::instance": {
          url: urlBase + "/TravelRequests/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.instance() instead.
        "::get::ExpensesClaimRequest::instance": {
          url: urlBase + "/ExpensesClaimRequests/:id/instance",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#updateOrCreate
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#update
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#destroyById
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#removeById
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.WorkflowInstance#modelName
    * @propertyOf lbServices.WorkflowInstance
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WorkflowInstance`.
    */
    R.modelName = "WorkflowInstance";


        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#initiator
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Fetches belongsTo relation initiator
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.initiator = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::WorkflowInstance::initiator"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#workflowTemplate
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Fetches belongsTo relation workflowTemplate
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTemplate` object.)
         * </em>
         */
        R.workflowTemplate = function() {
          var TargetResource = $injector.get("WorkflowTemplate");
          var action = TargetResource["::get::WorkflowInstance::workflowTemplate"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#workflowAssociation
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Fetches belongsTo relation workflowAssociation
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowAssociation` object.)
         * </em>
         */
        R.workflowAssociation = function() {
          var TargetResource = $injector.get("WorkflowAssociation");
          var action = TargetResource["::get::WorkflowInstance::workflowAssociation"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.WorkflowInstance.logs
     * @header lbServices.WorkflowInstance.logs
     * @object
     * @description
     *
     * The object `WorkflowInstance.logs` groups methods
     * manipulating `WorkflowLog` instances related to `WorkflowInstance`.
     *
     * Call {@link lbServices.WorkflowInstance#logs WorkflowInstance.logs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance#logs
         * @methodOf lbServices.WorkflowInstance
         *
         * @description
         *
         * Queries logs of WorkflowInstance.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        R.logs = function() {
          var TargetResource = $injector.get("WorkflowLog");
          var action = TargetResource["::get::WorkflowInstance::logs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance.logs#count
         * @methodOf lbServices.WorkflowInstance.logs
         *
         * @description
         *
         * Counts logs of WorkflowInstance.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.logs.count = function() {
          var TargetResource = $injector.get("WorkflowLog");
          var action = TargetResource["::count::WorkflowInstance::logs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance.logs#create
         * @methodOf lbServices.WorkflowInstance.logs
         *
         * @description
         *
         * Creates a new instance in logs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        R.logs.create = function() {
          var TargetResource = $injector.get("WorkflowLog");
          var action = TargetResource["::create::WorkflowInstance::logs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance.logs#destroyAll
         * @methodOf lbServices.WorkflowInstance.logs
         *
         * @description
         *
         * Deletes all logs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.logs.destroyAll = function() {
          var TargetResource = $injector.get("WorkflowLog");
          var action = TargetResource["::delete::WorkflowInstance::logs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance.logs#destroyById
         * @methodOf lbServices.WorkflowInstance.logs
         *
         * @description
         *
         * Delete a related item by id for logs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for logs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.logs.destroyById = function() {
          var TargetResource = $injector.get("WorkflowLog");
          var action = TargetResource["::destroyById::WorkflowInstance::logs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance.logs#findById
         * @methodOf lbServices.WorkflowInstance.logs
         *
         * @description
         *
         * Find a related item by id for logs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for logs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        R.logs.findById = function() {
          var TargetResource = $injector.get("WorkflowLog");
          var action = TargetResource["::findById::WorkflowInstance::logs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowInstance.logs#updateById
         * @methodOf lbServices.WorkflowInstance.logs
         *
         * @description
         *
         * Update a related item by id for logs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for logs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        R.logs.updateById = function() {
          var TargetResource = $injector.get("WorkflowLog");
          var action = TargetResource["::updateById::WorkflowInstance::logs"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WorkflowTask
 * @header lbServices.WorkflowTask
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WorkflowTask` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WorkflowTask",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WorkflowTasks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use WorkflowTask.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/WorkflowTasks/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/WorkflowTasks/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/WorkflowTasks/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTask.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/WorkflowTasks/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowTask.workflowAssociation() instead.
        "prototype$__get__workflowAssociation": {
          url: urlBase + "/WorkflowTasks/:id/workflowAssociation",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/WorkflowTasks/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/WorkflowTasks/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/WorkflowTasks/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use WorkflowTask.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/WorkflowTasks/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use WorkflowTask.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/WorkflowTasks/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowTask.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/WorkflowTasks/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#create
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTask` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WorkflowTasks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#upsert
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTask` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WorkflowTasks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#exists
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WorkflowTasks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#findById
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTask` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WorkflowTasks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#find
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTask` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WorkflowTasks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#findOne
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTask` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WorkflowTasks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#updateAll
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/WorkflowTasks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#deleteById
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/WorkflowTasks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#count
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WorkflowTasks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#prototype$updateAttributes
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTask` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WorkflowTasks/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#updateOrCreate
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowTask` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#update
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#destroyById
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#removeById
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.WorkflowTask#modelName
    * @propertyOf lbServices.WorkflowTask
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WorkflowTask`.
    */
    R.modelName = "WorkflowTask";


        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#instance
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Fetches belongsTo relation instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instance = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::get::WorkflowTask::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.WorkflowTask.comments
     * @header lbServices.WorkflowTask.comments
     * @object
     * @description
     *
     * The object `WorkflowTask.comments` groups methods
     * manipulating `ModerationComment` instances related to `WorkflowTask`.
     *
     * Call {@link lbServices.WorkflowTask#comments WorkflowTask.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#comments
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Queries comments of WorkflowTask.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::get::WorkflowTask::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask.comments#count
         * @methodOf lbServices.WorkflowTask.comments
         *
         * @description
         *
         * Counts comments of WorkflowTask.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::count::WorkflowTask::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask.comments#create
         * @methodOf lbServices.WorkflowTask.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::create::WorkflowTask::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask.comments#destroyAll
         * @methodOf lbServices.WorkflowTask.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::delete::WorkflowTask::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask.comments#destroyById
         * @methodOf lbServices.WorkflowTask.comments
         *
         * @description
         *
         * Delete a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::destroyById::WorkflowTask::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask.comments#findById
         * @methodOf lbServices.WorkflowTask.comments
         *
         * @description
         *
         * Find a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::findById::WorkflowTask::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask.comments#updateById
         * @methodOf lbServices.WorkflowTask.comments
         *
         * @description
         *
         * Update a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::updateById::WorkflowTask::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#workflowAssociation
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Fetches belongsTo relation workflowAssociation
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowAssociation` object.)
         * </em>
         */
        R.workflowAssociation = function() {
          var TargetResource = $injector.get("WorkflowAssociation");
          var action = TargetResource["::get::WorkflowTask::workflowAssociation"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#owner
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Fetches belongsTo relation owner
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::WorkflowTask::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.WorkflowTask#modifier
         * @methodOf lbServices.WorkflowTask
         *
         * @description
         *
         * Fetches belongsTo relation modifier
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Task id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.modifier = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::WorkflowTask::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WorkflowLog
 * @header lbServices.WorkflowLog
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WorkflowLog` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WorkflowLog",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WorkflowLogs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#create
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WorkflowLogs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#upsert
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WorkflowLogs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#exists
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WorkflowLogs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#findById
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WorkflowLogs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#find
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WorkflowLogs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#findOne
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WorkflowLogs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#updateAll
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/WorkflowLogs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#deleteById
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/WorkflowLogs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#count
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WorkflowLogs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#prototype$updateAttributes
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WorkflowLogs/:id",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowInstance.logs.findById() instead.
        "::findById::WorkflowInstance::logs": {
          url: urlBase + "/WorkflowInstances/:id/logs/:fk",
          method: "GET"
        },

        // INTERNAL. Use WorkflowInstance.logs.destroyById() instead.
        "::destroyById::WorkflowInstance::logs": {
          url: urlBase + "/WorkflowInstances/:id/logs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowInstance.logs.updateById() instead.
        "::updateById::WorkflowInstance::logs": {
          url: urlBase + "/WorkflowInstances/:id/logs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use WorkflowInstance.logs() instead.
        "::get::WorkflowInstance::logs": {
          isArray: true,
          url: urlBase + "/WorkflowInstances/:id/logs",
          method: "GET"
        },

        // INTERNAL. Use WorkflowInstance.logs.create() instead.
        "::create::WorkflowInstance::logs": {
          url: urlBase + "/WorkflowInstances/:id/logs",
          method: "POST"
        },

        // INTERNAL. Use WorkflowInstance.logs.destroyAll() instead.
        "::delete::WorkflowInstance::logs": {
          url: urlBase + "/WorkflowInstances/:id/logs",
          method: "DELETE"
        },

        // INTERNAL. Use WorkflowInstance.logs.count() instead.
        "::count::WorkflowInstance::logs": {
          url: urlBase + "/WorkflowInstances/:id/logs/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#updateOrCreate
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowLog` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#update
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#destroyById
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WorkflowLog#removeById
         * @methodOf lbServices.WorkflowLog
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.WorkflowLog#modelName
    * @propertyOf lbServices.WorkflowLog
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WorkflowLog`.
    */
    R.modelName = "WorkflowLog";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Post
 * @header lbServices.Post
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Post` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Post",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Posts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Post.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/Posts/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Posts/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Post.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/Posts/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Post.person() instead.
        "prototype$__get__person": {
          url: urlBase + "/Posts/:id/person",
          method: "GET"
        },

        // INTERNAL. Use Post.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Posts/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Posts/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Post.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Posts/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Posts/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#create
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Posts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#upsert
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Posts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#exists
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Posts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#findById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Posts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#find
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Posts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#findOne
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Posts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#updateAll
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Posts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#deleteById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Posts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#count
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Posts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#prototype$updateAttributes
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Posts/:id",
          method: "PUT"
        },

        // INTERNAL. Use Person.posts.findById() instead.
        "::findById::Person::posts": {
          url: urlBase + "/People/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.posts.destroyById() instead.
        "::destroyById::Person::posts": {
          url: urlBase + "/People/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.posts.updateById() instead.
        "::updateById::Person::posts": {
          url: urlBase + "/People/:id/posts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.posts() instead.
        "::get::Person::posts": {
          isArray: true,
          url: urlBase + "/People/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use Person.posts.create() instead.
        "::create::Person::posts": {
          url: urlBase + "/People/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Person.posts.destroyAll() instead.
        "::delete::Person::posts": {
          url: urlBase + "/People/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use Person.posts.count() instead.
        "::count::Person::posts": {
          url: urlBase + "/People/:id/posts/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Post#updateOrCreate
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Post#update
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Post#destroyById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Post#removeById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Post#modelName
    * @propertyOf lbServices.Post
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Post`.
    */
    R.modelName = "Post";


        /**
         * @ngdoc method
         * @name lbServices.Post#instance
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Fetches belongsTo relation instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instance = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::get::Post::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Post.comments
     * @header lbServices.Post.comments
     * @object
     * @description
     *
     * The object `Post.comments` groups methods
     * manipulating `ModerationComment` instances related to `Post`.
     *
     * Call {@link lbServices.Post#comments Post.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Post#comments
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Queries comments of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::get::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#count
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Counts comments of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::count::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#create
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::create::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#destroyAll
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::delete::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#destroyById
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Delete a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::destroyById::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#findById
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Find a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::findById::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#updateById
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Update a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::updateById::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post#owner
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Fetches belongsTo relation owner
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Post::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post#modifier
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Fetches belongsTo relation modifier
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.modifier = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Post::modifier"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post#person
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Fetches belongsTo relation person
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::Post::person"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Person
 * @header lbServices.Person
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Person` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Person",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/People/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Person.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/People/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Person.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/People/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/People/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/People/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.posts.findById() instead.
        "prototype$__findById__posts": {
          url: urlBase + "/People/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.posts.destroyById() instead.
        "prototype$__destroyById__posts": {
          url: urlBase + "/People/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.posts.updateById() instead.
        "prototype$__updateById__posts": {
          url: urlBase + "/People/:id/posts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/People/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Person.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/People/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Person.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/People/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Person.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/People/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Person.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/People/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Person.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/People/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Person.posts() instead.
        "prototype$__get__posts": {
          isArray: true,
          url: urlBase + "/People/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use Person.posts.create() instead.
        "prototype$__create__posts": {
          url: urlBase + "/People/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Person.posts.destroyAll() instead.
        "prototype$__delete__posts": {
          url: urlBase + "/People/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use Person.posts.count() instead.
        "prototype$__count__posts": {
          url: urlBase + "/People/:id/posts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#create
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/People",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#upsert
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/People",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#exists
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/People/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#findById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/People/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#find
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/People",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#findOne
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/People/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#updateAll
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/People/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#deleteById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/People/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#count
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/People/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$updateAttributes
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/People/:id",
          method: "PUT"
        },

        // INTERNAL. Use Post.person() instead.
        "::get::Post::person": {
          url: urlBase + "/Posts/:id/person",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Person#updateOrCreate
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Person#update
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Person#destroyById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Person#removeById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Person#modelName
    * @propertyOf lbServices.Person
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Person`.
    */
    R.modelName = "Person";


        /**
         * @ngdoc method
         * @name lbServices.Person#instance
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Fetches belongsTo relation instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instance = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::get::Person::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Person.comments
     * @header lbServices.Person.comments
     * @object
     * @description
     *
     * The object `Person.comments` groups methods
     * manipulating `ModerationComment` instances related to `Person`.
     *
     * Call {@link lbServices.Person#comments Person.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Person#comments
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Queries comments of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::get::Person::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.comments#count
         * @methodOf lbServices.Person.comments
         *
         * @description
         *
         * Counts comments of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::count::Person::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.comments#create
         * @methodOf lbServices.Person.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::create::Person::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.comments#destroyAll
         * @methodOf lbServices.Person.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::delete::Person::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.comments#destroyById
         * @methodOf lbServices.Person.comments
         *
         * @description
         *
         * Delete a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::destroyById::Person::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.comments#findById
         * @methodOf lbServices.Person.comments
         *
         * @description
         *
         * Find a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::findById::Person::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.comments#updateById
         * @methodOf lbServices.Person.comments
         *
         * @description
         *
         * Update a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::updateById::Person::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Person.posts
     * @header lbServices.Person.posts
     * @object
     * @description
     *
     * The object `Person.posts` groups methods
     * manipulating `Post` instances related to `Person`.
     *
     * Call {@link lbServices.Person#posts Person.posts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Person#posts
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Queries posts of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Person::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.posts#count
         * @methodOf lbServices.Person.posts
         *
         * @description
         *
         * Counts posts of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.posts.count = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::count::Person::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.posts#create
         * @methodOf lbServices.Person.posts
         *
         * @description
         *
         * Creates a new instance in posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.create = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::create::Person::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.posts#destroyAll
         * @methodOf lbServices.Person.posts
         *
         * @description
         *
         * Deletes all posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyAll = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::delete::Person::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.posts#destroyById
         * @methodOf lbServices.Person.posts
         *
         * @description
         *
         * Delete a related item by id for posts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::destroyById::Person::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.posts#findById
         * @methodOf lbServices.Person.posts
         *
         * @description
         *
         * Find a related item by id for posts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.findById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::findById::Person::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.posts#updateById
         * @methodOf lbServices.Person.posts
         *
         * @description
         *
         * Update a related item by id for posts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.updateById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::updateById::Person::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person#owner
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Fetches belongsTo relation owner
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Person::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person#modifier
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Fetches belongsTo relation modifier
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.modifier = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Person::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Alert
 * @header lbServices.Alert
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Alert` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Alert",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Alerts/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Alert#create
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Alert` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Alerts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Alert#upsert
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Alert` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Alerts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Alert#exists
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Alerts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Alert#findById
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Alert` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Alerts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Alert#find
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Alert` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Alerts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Alert#findOne
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Alert` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Alerts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Alert#updateAll
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Alerts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Alert#deleteById
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Alerts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Alert#count
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Alerts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Alert#prototype$updateAttributes
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Alert` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Alerts/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Alert#updateOrCreate
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Alert` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Alert#update
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Alert#destroyById
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Alert#removeById
         * @methodOf lbServices.Alert
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Alert#modelName
    * @propertyOf lbServices.Alert
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Alert`.
    */
    R.modelName = "Alert";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.DocumentLibrary
 * @header lbServices.DocumentLibrary
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DocumentLibrary` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DocumentLibrary",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DocumentLibraries/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.DocumentLibrary#getContainers
         * @methodOf lbServices.DocumentLibrary
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DocumentLibrary` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/DocumentLibraries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DocumentLibrary#createContainer
         * @methodOf lbServices.DocumentLibrary
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DocumentLibrary` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/DocumentLibraries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DocumentLibrary#destroyContainer
         * @methodOf lbServices.DocumentLibrary
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/DocumentLibraries/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DocumentLibrary#getContainer
         * @methodOf lbServices.DocumentLibrary
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DocumentLibrary` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/DocumentLibraries/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DocumentLibrary#getFiles
         * @methodOf lbServices.DocumentLibrary
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DocumentLibrary` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/DocumentLibraries/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DocumentLibrary#getFile
         * @methodOf lbServices.DocumentLibrary
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DocumentLibrary` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/DocumentLibraries/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DocumentLibrary#removeFile
         * @methodOf lbServices.DocumentLibrary
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/DocumentLibraries/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DocumentLibrary#upload
         * @methodOf lbServices.DocumentLibrary
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/DocumentLibraries/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DocumentLibrary#download
         * @methodOf lbServices.DocumentLibrary
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/DocumentLibraries/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.DocumentLibrary#modelName
    * @propertyOf lbServices.DocumentLibrary
    * @description
    * The name of the model represented by this $resource,
    * i.e. `DocumentLibrary`.
    */
    R.modelName = "DocumentLibrary";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.General
 * @header lbServices.General
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `General` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "General",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Generals/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.General#create
         * @methodOf lbServices.General
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `General` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Generals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.General#upsert
         * @methodOf lbServices.General
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `General` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Generals",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.General#exists
         * @methodOf lbServices.General
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Generals/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.General#findById
         * @methodOf lbServices.General
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `General` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Generals/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.General#find
         * @methodOf lbServices.General
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `General` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Generals",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.General#findOne
         * @methodOf lbServices.General
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `General` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Generals/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.General#updateAll
         * @methodOf lbServices.General
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Generals/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.General#deleteById
         * @methodOf lbServices.General
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Generals/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.General#count
         * @methodOf lbServices.General
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Generals/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.General#prototype$updateAttributes
         * @methodOf lbServices.General
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `General` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Generals/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.General#updateOrCreate
         * @methodOf lbServices.General
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `General` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.General#update
         * @methodOf lbServices.General
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.General#destroyById
         * @methodOf lbServices.General
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.General#removeById
         * @methodOf lbServices.General
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.General#modelName
    * @propertyOf lbServices.General
    * @description
    * The name of the model represented by this $resource,
    * i.e. `General`.
    */
    R.modelName = "General";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.TravelRequest
 * @header lbServices.TravelRequest
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `TravelRequest` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "TravelRequest",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/TravelRequests/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use TravelRequest.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/TravelRequests/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/TravelRequests/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/TravelRequests/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use TravelRequest.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/TravelRequests/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use TravelRequest.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/TravelRequests/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/TravelRequests/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/TravelRequests/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use TravelRequest.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/TravelRequests/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use TravelRequest.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/TravelRequests/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use TravelRequest.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/TravelRequests/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#create
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TravelRequest` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/TravelRequests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#upsert
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TravelRequest` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/TravelRequests",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#exists
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/TravelRequests/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#findById
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TravelRequest` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/TravelRequests/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#find
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TravelRequest` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/TravelRequests",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#findOne
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TravelRequest` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/TravelRequests/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#updateAll
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/TravelRequests/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#deleteById
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/TravelRequests/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#count
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/TravelRequests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#prototype$updateAttributes
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TravelRequest` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/TravelRequests/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#updateOrCreate
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TravelRequest` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#update
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#destroyById
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#removeById
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.TravelRequest#modelName
    * @propertyOf lbServices.TravelRequest
    * @description
    * The name of the model represented by this $resource,
    * i.e. `TravelRequest`.
    */
    R.modelName = "TravelRequest";


        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#instance
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Fetches belongsTo relation instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instance = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::get::TravelRequest::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.TravelRequest.comments
     * @header lbServices.TravelRequest.comments
     * @object
     * @description
     *
     * The object `TravelRequest.comments` groups methods
     * manipulating `ModerationComment` instances related to `TravelRequest`.
     *
     * Call {@link lbServices.TravelRequest#comments TravelRequest.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#comments
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Queries comments of TravelRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::get::TravelRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest.comments#count
         * @methodOf lbServices.TravelRequest.comments
         *
         * @description
         *
         * Counts comments of TravelRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::count::TravelRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest.comments#create
         * @methodOf lbServices.TravelRequest.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::create::TravelRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest.comments#destroyAll
         * @methodOf lbServices.TravelRequest.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::delete::TravelRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest.comments#destroyById
         * @methodOf lbServices.TravelRequest.comments
         *
         * @description
         *
         * Delete a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::destroyById::TravelRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest.comments#findById
         * @methodOf lbServices.TravelRequest.comments
         *
         * @description
         *
         * Find a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::findById::TravelRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest.comments#updateById
         * @methodOf lbServices.TravelRequest.comments
         *
         * @description
         *
         * Update a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::updateById::TravelRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#owner
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Fetches belongsTo relation owner
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::TravelRequest::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.TravelRequest#modifier
         * @methodOf lbServices.TravelRequest
         *
         * @description
         *
         * Fetches belongsTo relation modifier
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.modifier = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::TravelRequest::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ExpensesClaimRequest
 * @header lbServices.ExpensesClaimRequest
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ExpensesClaimRequest` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ExpensesClaimRequest",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ExpensesClaimRequests/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ExpensesClaimRequest.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/ExpensesClaimRequests/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExpensesClaimRequest.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/ExpensesClaimRequests/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/ExpensesClaimRequests/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/ExpensesClaimRequests/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use ExpensesClaimRequest.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/ExpensesClaimRequests/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#create
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExpensesClaimRequest` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ExpensesClaimRequests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#upsert
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExpensesClaimRequest` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ExpensesClaimRequests",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#exists
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ExpensesClaimRequests/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#findById
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExpensesClaimRequest` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ExpensesClaimRequests/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#find
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExpensesClaimRequest` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ExpensesClaimRequests",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#findOne
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExpensesClaimRequest` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ExpensesClaimRequests/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#updateAll
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ExpensesClaimRequests/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#deleteById
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ExpensesClaimRequests/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#count
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ExpensesClaimRequests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#prototype$updateAttributes
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExpensesClaimRequest` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ExpensesClaimRequests/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#updateOrCreate
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExpensesClaimRequest` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#update
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#destroyById
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#removeById
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ExpensesClaimRequest#modelName
    * @propertyOf lbServices.ExpensesClaimRequest
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ExpensesClaimRequest`.
    */
    R.modelName = "ExpensesClaimRequest";


        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#instance
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Fetches belongsTo relation instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WorkflowInstance` object.)
         * </em>
         */
        R.instance = function() {
          var TargetResource = $injector.get("WorkflowInstance");
          var action = TargetResource["::get::ExpensesClaimRequest::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ExpensesClaimRequest.comments
     * @header lbServices.ExpensesClaimRequest.comments
     * @object
     * @description
     *
     * The object `ExpensesClaimRequest.comments` groups methods
     * manipulating `ModerationComment` instances related to `ExpensesClaimRequest`.
     *
     * Call {@link lbServices.ExpensesClaimRequest#comments ExpensesClaimRequest.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#comments
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Queries comments of ExpensesClaimRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::get::ExpensesClaimRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest.comments#count
         * @methodOf lbServices.ExpensesClaimRequest.comments
         *
         * @description
         *
         * Counts comments of ExpensesClaimRequest.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::count::ExpensesClaimRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest.comments#create
         * @methodOf lbServices.ExpensesClaimRequest.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::create::ExpensesClaimRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest.comments#destroyAll
         * @methodOf lbServices.ExpensesClaimRequest.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::delete::ExpensesClaimRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest.comments#destroyById
         * @methodOf lbServices.ExpensesClaimRequest.comments
         *
         * @description
         *
         * Delete a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::destroyById::ExpensesClaimRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest.comments#findById
         * @methodOf lbServices.ExpensesClaimRequest.comments
         *
         * @description
         *
         * Find a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::findById::ExpensesClaimRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest.comments#updateById
         * @methodOf lbServices.ExpensesClaimRequest.comments
         *
         * @description
         *
         * Update a related item by id for comments
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModerationComment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("ModerationComment");
          var action = TargetResource["::updateById::ExpensesClaimRequest::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#owner
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Fetches belongsTo relation owner
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::ExpensesClaimRequest::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExpensesClaimRequest#modifier
         * @methodOf lbServices.ExpensesClaimRequest
         *
         * @description
         *
         * Fetches belongsTo relation modifier
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Item id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.modifier = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::ExpensesClaimRequest::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);

angular.module("cmp.tpl", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/blank.html","<div class=page-content><div class=row><div class=col-md-12><h3 class=page-title>Blank Page <small>blank page</small></h3><div ncy-breadcrumb></div></div></div><div class=row><div class=col-md-12>Page content goes here</div></div></div>");
$templateCache.put("views/grid.html","<div class=page-content><div class=row><div class=col-md-12><h3 class=page-title>Blank Page <small>blank page</small></h3><div ncy-breadcrumb></div></div></div><div class=row><div class=col-md-12><div class=grid ui-grid=gridOptions ui-grid-edit ui-grid-move-columns ui-grid-auto-resize ui-grid-pinning ui-grid-resize-columns ui-grid-selection></div></div></div></div>");
$templateCache.put("views/login.html","<div class=login><form class=login-form ng-submit=submit()><h3 class=form-title>Login to your account</h3><div class=\"alert alert-danger display-hide\"><button class=close data-close=alert></button> <span>Enter any username and password.</span></div><div class=form-group><label class=\"control-label visible-ie8 visible-ie9\">Username</label><div class=input-icon><i class=\"fa fa-user\"></i> <input class=\"form-control placeholder-no-fix\" autocomplete=off placeholder=Username name=\"username\"></div></div><div class=form-group><label class=\"control-label visible-ie8 visible-ie9\">Password</label><div class=input-icon><i class=\"fa fa-lock\"></i> <input class=\"form-control placeholder-no-fix\" type=password autocomplete=off placeholder=Password name=\"password\"></div></div><div class=form-actions><label class=checkbox><input type=checkbox name=remember value=\"1\"> Remember me</label><button type=submit class=\"btn blue pull-right\">Login <i class=\"m-icon-swapright m-icon-white\"></i></button></div><div class=forget-password><h4>Forgot your password ?</h4><p>no worries, click <a href=javascript:; id=forget-password>here</a> to reset your password.</p></div><div class=create-account><p>Don\'t have an account yet ?&nbsp; <a href=javascript:; id=register-btn>Create an account</a></p></div></form></div>");
$templateCache.put("views/test.html","test");
$templateCache.put("views/upload.html","<div class=page-content><div class=row><div class=col-md-12><h3 class=page-title>Blank Page <small>blank page</small></h3><div ncy-breadcrumb></div></div></div><div class=row><div class=col-md-12><form class=form-horizontal role=form><div class=form-group><label for=inputEmail3 class=\"col-sm-2 control-label\">Email</label><div class=col-sm-10><input type=email class=form-control id=inputEmail3 placeholder=Email></div></div><div class=form-group><label for=inputPassword3 class=\"col-sm-2 control-label\">Password</label><div class=col-sm-10><input type=password class=form-control id=inputPassword3 placeholder=Password></div></div><div class=form-group><label for=inputPassword3 class=\"col-sm-2 control-label\">附件</label><div class=col-sm-10 attachment=\"{container:\'1\'}\"></div></div><div class=form-group><div class=\"col-sm-offset-2 col-sm-10\"><button type=submit class=\"btn btn-default\">Sign in</button></div></div></form></div></div></div>");
$templateCache.put("views/main/breadcrumb.html","<ul class=\"page-breadcrumb breadcrumb\"><li ng-repeat=\"step in steps\"><a href={{step.ncyBreadcrumbLink}} ng-bind-html=step.ncyBreadcrumbLabel></a> <i class=\"fa fa-angle-right\" ng-show=!$last></i></li></ul>");
$templateCache.put("views/main/footer.html","<div class=footer-inner>2014 &copy; Harttech.</div><div class=footer-tools><span class=go-top><i class=\"fa fa-angle-up\"></i></span></div>");
$templateCache.put("views/main/header.html","<div class=header-inner><a class=navbar-brand href=index.html><img src=assets/img/logo.png alt=logo class=\"img-responsive\"></a> <a href=javascript:; class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><img src=assets/img/menu-toggler.png alt=\"\"></a><ul class=\"nav navbar-nav pull-right\"><li class=dropdown id=header_notification_bar><a href=# class=dropdown-toggle data-toggle=dropdown data-hover=dropdown data-close-others=true><i class=\"fa fa-warning\"></i> <span class=badge>6</span></a><ul class=\"dropdown-menu extended notification\"><li><p>You have 14 new notifications</p></li><li><ul class=\"dropdown-menu-list scroller\" style=\"height: 250px\"><li><a href=#><span class=\"label label-icon label-success\"><i class=\"fa fa-plus\"></i></span> New user registered. <span class=time>Just now</span></a></li><li><a href=#><span class=\"label label-icon label-danger\"><i class=\"fa fa-bolt\"></i></span> Server #12 overloaded. <span class=time>15 mins</span></a></li><li><a href=#><span class=\"label label-icon label-warning\"><i class=\"fa fa-bell-o\"></i></span> Server #2 not responding. <span class=time>22 mins</span></a></li><li><a href=#><span class=\"label label-icon label-info\"><i class=\"fa fa-bullhorn\"></i></span> Application error. <span class=time>40 mins</span></a></li><li><a href=#><span class=\"label label-icon label-danger\"><i class=\"fa fa-bolt\"></i></span> Database overloaded 68%. <span class=time>2 hrs</span></a></li><li><a href=#><span class=\"label label-icon label-danger\"><i class=\"fa fa-bolt\"></i></span> 2 user IP blocked. <span class=time>5 hrs</span></a></li><li><a href=#><span class=\"label label-icon label-warning\"><i class=\"fa fa-bell-o\"></i></span> Storage Server #4 not responding. <span class=time>45 mins</span></a></li><li><a href=#><span class=\"label label-icon label-info\"><i class=\"fa fa-bullhorn\"></i></span> System Error. <span class=time>55 mins</span></a></li><li><a href=#><span class=\"label label-icon label-danger\"><i class=\"fa fa-bolt\"></i></span> Database overloaded 68%. <span class=time>2 hrs</span></a></li></ul></li><li class=external><a href=#>See all notifications <i class=m-icon-swapright></i></a></li></ul></li><li class=dropdown id=header_inbox_bar><a href=# class=dropdown-toggle data-toggle=dropdown data-hover=dropdown data-close-others=true><i class=\"fa fa-envelope\"></i> <span class=badge>5</span></a><ul class=\"dropdown-menu extended inbox\"><li><p>You have 12 new messages</p></li><li><ul class=\"dropdown-menu-list scroller\" style=\"height: 250px\"><li><a href=\"inbox.html?a=view\"><span class=photo><img src=./assets/img/avatar2.jpg alt=\"\"></span> <span class=subject><span class=from>Lisa Wong</span> <span class=time>Just Now</span></span> <span class=message>Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh...</span></a></li><li><a href=\"inbox.html?a=view\"><span class=photo><img src=./assets/img/avatar3.jpg alt=\"\"></span> <span class=subject><span class=from>Richard Doe</span> <span class=time>16 mins</span></span> <span class=message>Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh...</span></a></li><li><a href=\"inbox.html?a=view\"><span class=photo><img src=./assets/img/avatar1.jpg alt=\"\"></span> <span class=subject><span class=from>Bob Nilson</span> <span class=time>2 hrs</span></span> <span class=message>Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh...</span></a></li><li><a href=\"inbox.html?a=view\"><span class=photo><img src=./assets/img/avatar2.jpg alt=\"\"></span> <span class=subject><span class=from>Lisa Wong</span> <span class=time>40 mins</span></span> <span class=message>Vivamus sed auctor 40% nibh congue nibh...</span></a></li><li><a href=\"inbox.html?a=view\"><span class=photo><img src=./assets/img/avatar3.jpg alt=\"\"></span> <span class=subject><span class=from>Richard Doe</span> <span class=time>46 mins</span></span> <span class=message>Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh...</span></a></li></ul></li><li class=external><a href=inbox.html>See all messages <i class=m-icon-swapright></i></a></li></ul></li><li class=dropdown id=header_task_bar><a href=# class=dropdown-toggle data-toggle=dropdown data-hover=dropdown data-close-others=true><i class=\"fa fa-tasks\"></i> <span class=badge ng-bind=tasks.length></span></a><ul class=\"dropdown-menu extended tasks\"><li><p>You have {{tasks.length}} pending tasks</p></li><li><ul class=\"dropdown-menu-list scroller\"><li ng-repeat=\"task in tasks | orderBy:\'startDate\'\"><a ng-click=editTask(task) popover={{task.instance.initialItem.title}} popover-title=InitialItem popover-trigger=mouseenter><span class=task><span class=desc ng-bind=task.title></span> <span class=percent ng-bind=\"task.percent+\'%\'\"></span></span><progressbar value=task.percent></progressbar></a></li></ul></li><li class=external><a href=#>See all tasks <i class=m-icon-swapright></i></a></li></ul></li><li class=\"language dropdown\"><a class=\"dropdown-toggle btn\" data-toggle=dropdown data-hover=dropdown data-delay=1000 data-close-others=false><img alt=\"\" ng-src=\"assets/img/flags/{{language}}.png\"> <span class=username ng-bind=\"language | uppercase\"></span> <i class=\"fa fa-angle-down\"></i></a><ul class=dropdown-menu><li><a ng-click=\"changeLanguage(\'us\')\"><img alt=\"\" src=\"assets/img/flags/us.png\"> English</a></li><li><a ng-click=\"changeLanguage(\'cn\')\"><img alt=\"\" src=\"assets/img/flags/cn.png\"> Chinese</a></li></ul></li><li class=\"dropdown user\"><a href=# class=dropdown-toggle data-toggle=dropdown data-hover=dropdown data-close-others=true><img alt=\"\" src=\"assets/img/avatar1_small.jpg\"> <span class=username ng-bind=user.title></span> <i class=\"fa fa-angle-down\"></i></a><ul class=dropdown-menu><li><a ui-sref=main.profile><i class=\"fa fa-user\"></i> My Profile</a></li><li><a ui-sref=main.calendar><i class=\"fa fa-calendar\"></i> My Calendar</a></li><li><a href=inbox.html><i class=\"fa fa-envelope\"></i> My Inbox <span class=\"badge badge-danger\">3</span></a></li><li><a href=#><i class=\"fa fa-tasks\"></i> My Tasks <span class=\"badge badge-success\">7</span></a></li><li class=divider></li><li><a href=javascript:; id=trigger_fullscreen><i class=\"fa fa-arrows\"></i> Full Screen</a></li><li><a href=extra_lock.html><i class=\"fa fa-lock\"></i> Lock Screen</a></li><li><a ng-click=logOut()><i class=\"fa fa-key\"></i> Log Out</a></li></ul></li></ul></div>");
$templateCache.put("views/main/index.html","<div class=page-header-fixed><div class=\"header navbar navbar-fixed-top\" ui-view=header></div><div class=clearfix></div><div class=page-container><div class=page-sidebar-wrapper ui-view=sidebar></div><div class=page-content-wrapper ui-view></div></div><div class=footer ui-view=footer></div></div>");
$templateCache.put("views/main/sidebar.html","<div class=\"page-sidebar navbar-collapse collapse\"><ul class=page-sidebar-menu data-auto-scroll=true data-slide-speed=200><li class=sidebar-toggler-wrapper><div class=\"sidebar-toggler hidden-phone\"></div></li><li class=sidebar-search-wrapper><form class=sidebar-search><div class=form-container><div class=input-box><a href class=remove></a> <input placeholder=\"Search...\"> <input type=button class=submit></div></div></form></li><li class=start><a ui-sref=main.index><i class=\"fa fa-home\"></i> <span class=title>Home</span></a></li><li><a ui-sref=main.index><i class=\"fa fa-tasks\"></i> <span class=title translate=\"MY TASK\">我的任务</span></a></li><li><a ui-sref=main.index><i class=\"fa fa-pencil-square-o\"></i> <span class=title translate=\"MY APPLICATION\">我的申请</span></a></li><li><a><i class=\"fa fa-calendar\"></i> <span class=title translate=CALENDAR>行事历</span> <span class=arrow></span></a><ul class=sub-menu><li><a ui-sref=\"main.list({list:\'Group\'})\"><i class=\"fa fa-group\"></i> Group</a></li><li><a ui-sref=\"main.list({list:\'User\'})\"><i class=\"fa fa-user\"></i> User</a></li></ul></li><li><a ui-sref=\"main.list({list:\'Announcement\'})\"><i class=\"fa fa-folder\"></i> <span class=title translate=FOLDER>文件夹</span></a></li><li><a href><i class=\"fa fa-phone-square\"></i> <span class=title translate=CONTACTS>通讯录</span></a></li><li><a href><i class=\"fa fa-laptop\"></i> <span class=title translate=\"PERSONAL OFFICE\">个人办公</span> <span class=arrow></span></a><ul class=sub-menu><li><a href><i class=\"fa fa-folder-open\"></i> Item 1 <span class=arrow></span></a><ul class=sub-menu><li><a href><i class=\"fa fa-angle-double-right\"></i> Sample Link 1 <span class=arrow></span></a><ul class=sub-menu><li><a href=#><i class=\"fa fa-angle-double-right\"></i> Sample Link 1</a></li><li><a href=#><i class=\"fa fa-angle-double-right\"></i> Sample Link 1</a></li><li><a href=#><i class=\"fa fa-angle-double-right\"></i> Sample Link 1</a></li></ul></li><li><a href=#><i class=\"fa fa-angle-double-right\"></i> Sample Link 1</a></li><li><a href=#><i class=\"fa fa-angle-double-right\"></i> Sample Link 2</a></li><li><a href=#><i class=\"fa fa-angle-double-right\"></i> Sample Link 3</a></li></ul></li><li><a href><i class=\"fa fa-folder-open\"></i> Item 2 <span class=arrow></span></a><ul class=sub-menu><li><a href=#><i class=\"fa fa-angle-double-right\"></i> Sample Link 1</a></li><li><a href=#><i class=\"fa fa-angle-double-right\"></i> Sample Link 1</a></li><li><a href=#><i class=\"fa fa-angle-double-right\"></i> Sample Link 1</a></li></ul></li><li><a href=#><i class=\"fa fa-folder-open\"></i> Item 3</a></li></ul></li><li><a href><i class=\"fa fa-briefcase\"></i> <span class=title translate=ADMINISTRATIVE>综合行政</span> <span class=arrow></span></a><ul class=sub-menu><li><a ui-sref=\"main.list({list:\'TravelRequest\'})\"><i class=\"fa fa-file-o\"></i> Travel Request</a></li><li><a ui-sref=\"main.list({list:\'TravelExpenseReport\'})\"><i class=\"fa fa-file-o\"></i> Travel Expense Report</a></li></ul></li><li class=last><a href><i class=\"fa fa-cog\"></i> <span class=title translate=\"KNOWLEDGE MANAGEMENT\">知识管理</span> <span class=arrow></span></a><ul class=sub-menu><li><a ui-sref=main.report-TravelExpenseReport><i class=\"fa fa-file-o\"></i> Travel Expense Report</a></li></ul></li><li class=last><a href><i class=\"fa fa-files-o\"></i> <span class=title translate=REPORT>报告</span> <span class=arrow></span></a><ul class=sub-menu><li><a ui-sref=main.report-TravelExpenseReport><i class=\"fa fa-file-o\"></i> Travel Expense Report</a></li></ul></li></ul></div>");
$templateCache.put("views/workflow/addWrk.html","<form class=form-horizontal name=frm ng-submit=submit()><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title translate=\"Add Workflow\"></h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label for=title class=\"control-label col-sm-3\" translate=Title></label><div class=col-sm-9><input class=form-control id=title name=title ng-model=doc.title required unique=WorkflowAssociation ui-message=\"\"> <span class=help-block>键入此工作流的名称。 该名称将用于向此列表的用户标识此工作流。</span></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" translate=\"Workflow Template\"></label><div class=col-sm-9><ui-select class=form-control ng-model=doc.workflowTemplateId selector=\"{service:\'WorkflowTemplate\'}\" required ui-message=\"\"><ui-select-match>{{$select.selected.title}}</ui-select-match><ui-select-choices repeat=\"item.id as item in WorkflowTemplateSelector | filter: $select.search\"><div ng-bind-html=\"item.title | highlight: $select.search\"></div></ui-select-choices></ui-select><span class=help-block>传送文档供审批。审批者可以批准或拒绝文档、重新分配审批任务或请求更改文档。</span></div></div></div></div></div><div class=modal-footer><button type=submit class=\"btn btn-primary\" translate=Submit data-ng-disabled=\"frm.$invalid && !doc.associateData\"></button> <button type=button class=\"btn btn-default\" translate=Cancel ui-sref=main.wrkSetting({list:$stateParams.list})></button></div></form>");
$templateCache.put("views/workflow/workflow.html","<div class=page-content><div class=row><div class=col-md-12><h3 class=page-title>{{\'Workflow History\' | translate}} <small></small></h3><div ncy-breadcrumb></div></div></div><div class=\"panel panel-warning\"><div class=panel-heading><h3 class=panel-title>开始新的工作流</h3></div><div class=panel-body><p>Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div><ul class=list-group><a class=list-group-item ng-repeat=\"ass in wfAss\" ng-bind=ass.title href ng-click=initialWorkflow(ass)></a></ul></div><div class=\"panel panel-warning\"><div class=panel-heading><h3 class=panel-title>Panel Title</h3></div><div class=panel-body><p>Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div><div class=list-group><a ui-sref=main.wrkStat({workflow:log.association.title,instanceId:log.id}) class=list-group-item ng-repeat=\"log in workflowLog | orderBy:[\'-workflowState\',\'-completeAt\',\'-created\']\">{{log}} {{log.association.title}} //TODO:时间 <span ng-bind=\"log.created | date:\'yyyy-MM-dd HH:mm:ss\'\"></span> <span ng-bind=\"log.completeAt | date:\'yyyy-MM-dd HH:mm:ss\'\"></span> <span class=\"badge badge-info\" ng-bind=log.workflowState></span></a></div></div></div>");
$templateCache.put("views/workflow/wrkStat.html","<div class=page-content><div class=row><div class=col-md-12><h3 class=page-title>{{\'Workflow History\' | translate}} <small></small></h3><div ncy-breadcrumb></div></div></div><div class=\"panel panel-success\"><div class=panel-heading><h3 class=panel-title translate=\"Workflow Information\"></h3></div><div class=panel-body><div class=row><div class=col-md-6><label class=col-md-4 translate=\"Workflow Initiator\"></label><div class=col-md-8><p ng-bind=instance.initiator.username></p></div></div><div class=col-md-6><label class=col-md-4 translate=\"Workflow InitialItem\"></label><div class=col-md-8><a href title-link={title:instance.workflowItemTitle,id:instance.workflowItemId,__t:instance.workflowList}></a></div></div></div><div class=row><div class=col-md-6><label class=col-md-4 translate=\"Workflow StartDate\"></label><div class=col-md-8><p ng-bind=\"instance.created | date:\'yyyy-MM-dd HH:mm:ss\'\"></p></div></div><div class=col-md-6><label class=col-md-4 translate=\"Workflow Status\"></label><div class=col-md-8><p ng-bind=\"instance.workflowState | translate\"></p></div></div></div><div class=row><div class=col-md-12><label class=col-md-2 translate=\"Workflow Last RunTime\"></label><div class=col-md-10><p ng-bind=\"instance.modified | date:\'yyyy-MM-dd HH:mm:ss\'\"></p></div></div></div></div></div><div class=\"panel panel-success\"><div class=panel-heading><h3 class=panel-title translate=\"Workflow Task\"></h3></div><div class=panel-body><table class=table><thead><tr><th translate=\"Task Assigned\"></th><th translate=Title></th><th translate=\"Task DueDate\"></th><th translate=\"Task Status\"></th><th translate=\"Task Outcome\"></th></tr></thead><tbody><tr ng-repeat=\"task in tasks\"><td ng-bind=task.assigned.title></td><td><a href ng-bind=task.title ng-click=viewTask(task)></a></td><td ng-bind=\"task.dueDate | date:\'yyyy-MM-dd HH:mm\'\"></td><td ng-bind=\"task.status | translate\"></td><td ng-bind=task.outcome></td></tr></tbody></table></div></div><div class=\"panel panel-info\"><div class=panel-heading><h3 class=panel-title translate=Workflow　Log></h3></div><div class=panel-body><table class=table><thead><tr><th translate=Date></th><th translate=EventType></th><th translate=Body></th></tr></thead><tbody><tr ng-repeat=\"log in instance.workflowLogs\"><td ng-bind=\"log.created | date:\'yyyy-MM-dd HH:mm\'\"></td><td ng-bind=log.type></td><td ng-bind=log.body></td></tr></tbody></table></div></div></div>");
$templateCache.put("views/list/content.html","<style>.grid {\n    width: 100%;\n    height: 400px;\n  }</style><div class=page-content><div class=row><div class=col-md-12><h3 class=page-title>{{list.displayName || list.name}} <small ng-bind=list.description></small></h3><div ncy-breadcrumb></div></div></div><div class=row ng-show=false><div class=col-md-12><form class=form-horizontal ng-submit=getPagedDate()><div class=form-body><div class=form-group><label class=\"control-label col-md-3\">id</label><div class=col-md-4><div class=input-group><input type=number class=form-control name=id ng-model=filter.where.id.gt> <span class=input-group-addon>to</span> <input type=number class=form-control ng-model=filter.where.id.lt></div></div></div><div class=form-group><label class=\"col-md-3 control-label\">Title</label><div class=col-md-4><div class=\"input-icon right\"><i class=\"glyphicon glyphicon-remove\" ng-click=\"deleteFilter(\'title\')\" ng-show=filter.where.title.like></i> <input name=title ng-model=filter.where.title.like class=form-control placeholder=title></div></div></div><div class=form-group><label class=\"control-label col-md-3\">Date Range</label><div class=col-md-4><div class=input-group><input class=form-control name=created ng-model=filter.where.created.gt datetime-picker> <span class=input-group-addon>to</span> <input class=form-control name=created ng-model=filter.where.created.lt datetime-picker></div></div></div></div><div class=input-group><input type=search placeholder=Search... class=form-control required ui-message ng-model=search><div class=input-group-btn><button type=button class=\"btn green\" data-toggle=dropdown>Search <i class=\"m-icon-swapright m-icon-white\"></i></button></div></div></form></div></div><div class=row><div class=col-md-12><form class=form-inline role=form><div class=form-group><label for=exampleInputEmail2>Email address</label><input type=email class=form-control id=exampleInputEmail2 placeholder=\"Enter email\"></div><div class=form-group><label for=exampleInputPassword2>Password</label><ui-select class=form-control ng-model=q.assignTo style=\"min-width: 300px\"><ui-select-match>{{$select.selected }}</ui-select-match><ui-select-choices repeat=\"item as item in [1,3,4,5] | filter: $select.search\"><div ng-bind-html=\"item | highlight: $select.search\"></div></ui-select-choices></ui-select></div><div class=input-group><div class=input-group-btn><button type=button class=\"btn green\" data-toggle=dropdown>Search <i class=\"m-icon-swapright m-icon-white\"></i></button></div></div></form></div></div><div class=row><div class=col-md-4><div class=btn-group><button type=button class=\"btn btn-default\" ng-repeat=\"view in views\" ng-bind=view.title ng-click=\"currentView=view\"></button><div class=btn-group><button type=button class=\"btn btn-default dropdown-toggle\" data-toggle=dropdown><i class=\"fa fa-ellipsis-horizontal\"></i> More <i class=\"fa fa-angle-down\"></i></button><ul class=dropdown-menu><li><a href>创建视图</a></li><li><a href>修改视图</a></li></ul></div></div></div><div class=col-md-4><div class=input-group><input type=search placeholder=Search... class=form-control required ui-message ng-model=search><div class=input-group-btn><button type=button class=\"btn green\" data-toggle=dropdown>Search <i class=\"m-icon-swapright m-icon-white\"></i></button></div></div></div><div class=col-md-4><div class=pull-right><div class=btn-group><button type=button class=\"btn btn-default\" ng-click=gridAction.add()><i class=\"fa fa-plus\"></i> New</button><div class=btn-group><button type=button class=\"btn btn-default dropdown-toggle\" data-toggle=dropdown><i class=\"fa fa-bullhorn\"></i> Alert <i class=\"fa fa-angle-down\"></i></button><ul class=dropdown-menu><li><a href=#>创建通知</a></li><li><a href=#>管理我的通知</a></li></ul></div><button type=button class=\"btn btn-default\" ui-sref=\"main.listSetting({list: $stateParams.list})\"><i class=\"fa fa-cogs\"></i> Settings</button><div class=btn-group><button type=button class=\"btn btn-default dropdown-toggle\" data-toggle=dropdown><i class=\"fa fa-ellipsis-horizontal\"></i> More <i class=\"fa fa-angle-down\"></i></button><ul class=dropdown-menu><li><a href=#>Dropdown link</a></li><li><a href=#>Dropdown link</a></li></ul></div></div></div></div></div><div class=row><div class=col-md-12><div class=grid ui-grid=gridOptions external-scopes=gridAction ui-grid-edit ui-grid-auto-resize ui-grid-pinning ui-grid-resize-columns ui-grid-selection></div></div></div><div class=row><div class=\"col-md-5 col-sm-12\"><div class=dataTables_info>Showing <span ng-bind=(filter.page-1)*filter.limit+1></span> to <span ng-bind=\"filter.page*filter.limit > totalServerItems ? totalServerItems : filter.page*filter.limit\"></span> of <span ng-bind=totalServerItems></span> entries</div></div><div class=\"col-md-7 col-sm-12\"><pagination total-items=totalServerItems ng-model=filter.page items-per-page=filter.limit ng-change=getPagedDate()></pagination></div></div><div block-ui=gridBlock></div></div>");
$templateCache.put("views/list/setting.html","<div class=page-content><div class=row><div class=col-md-12><h3 class=page-title>Blank Page <small>blank page</small></h3><div ncy-breadcrumb></div></div></div><div class=row><div class=col-md-12>setting<tabset><tab heading=常规设置></tab><tab heading=视图设置></tab><tab heading=权限设置></tab><tab heading=工作流设置></tab></tabset><a ui-sref=main.wrkSetting({list:$stateParams.list}) translate=\"Workflow Setting\"></a></div></div></div>");
$templateCache.put("views/list/wrkSetting.html","<div class=page-content><div class=row><div class=col-md-12><h3 class=page-title>Workflow Setting <small>blank page</small></h3><div ncy-breadcrumb></div></div></div><div class=row><div class=col-md-12><accordion><accordion-group heading={{ass.title}} ng-repeat=\"ass in wfAss\"><accordion-heading>{{ass.title}} <span class=\"badge badge-info\" ng-bind=ass.instances.length></span> <button type=button class=\"btn btn-info\" translate=\"Associate Data\" ng-click=setAssociateData(ass) popover=\"click here to set the associate data\" popover-trigger=mouseenter></button></accordion-heading><div class=list-group><a ui-sref=main.wrkStat({workflow:ass.title,instanceId:log.id}) class=list-group-item ng-repeat=\"instance in ass.instances | orderBy:[\'-workflowState\',\'-completeAt\',\'-created\']\">{{log}} <span ng-bind=\"instance.created | date:\'yyyy-MM-dd HH:mm:ss\'\"></span> <span ng-bind=\"instance.completeAt | date:\'yyyy-MM-dd HH:mm:ss\'\"></span> <span class=\"badge badge-info\" ng-bind=instance.workflowState></span></a></div></accordion-group></accordion><p><button type=button class=\"btn btn-default\" ng-click=addWorkflowAss() translate=\"Add Workflow\"></button></p></div></div></div>");
$templateCache.put("views/workflow-associate/ApproveWorkflow.html","<form class=form-horizontal name=frm ng-submit=submit()><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title translate=ApproveWorkflow></h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-2\" translate=Approvers></label><div class=col-sm-10><table class=\"table table-bordered\"><thead><tr><th translate=\"Assign To\"></th><th translate=Order></th><th translate=Signature></th><th><a href class=\"btn btn-xs\" ng-click=\"doc.queue.push({assignTo:[],type:\'serial\',signature:null})\"><i class=\"fa fa-plus\"></i></a></th></tr></thead><tbody><tr ng-repeat=\"q in doc.queue\"><td><ui-select class=form-control multiple ng-model=q.assignTo><ui-select-match>{{$item.title}}</ui-select-match><ui-select-choices repeat=\"[item.__t,item.title,item.id].join(\'#\') as item in UserRoleSelector | filter: $select.search\"><div ng-bind-html=\"item.title | highlight: $select.search\"></div></ui-select-choices></ui-select></td><td><select class=\"form-control input-small\" ng-model=q.type required ui-message=\"\"><option value=serial translate=Serial></option><option value=parallel translate=Parallel></option></select></td><td><input class=\"form-control input-small\" name=signature id=signature ng-model=\"q.signature\"></td><td><a href class=\"btn btn-xs\" ng-click=\"doc.queue.splice($index, 1);\"><i class=\"fa fa-minus\"></i></a></td></tr></tbody></table><span class=help-block>输入用户名，以便工作流向其分配任务，并选择任务分配的顺序。您也可以添加阶段，以不同的顺序将任务分配给更多人员。 请确保指定您希望的分配方式：应一次分配一个任务（串行），还是一次分配所有任务（并行）。</span></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label for=expand class=\"control-label col-sm-2\" translate=\"Expand Groups\"></label><div class=col-sm-10><input type=checkbox class=form-control id=expand name=expand bs-switch ng-model=\"doc.expand\"> <span class=help-block>对于输入的每个组，请向该组的每个成员分配一项任务</span></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-2\" translate=CC></label><div class=col-sm-10><ui-select class=form-control multiple ng-model=doc.copyTo><ui-select-match>{{$item.username}} &lt;{{$item.email}}&gt;</ui-select-match><ui-select-choices repeat=\"[item.username,item.email,item.id].join(\'#\') as item in UserSelector | filter: $select.search\"><div ng-bind-html-unsafe=\"item.id | highlight: $select.search\"></div><small>Email: {{item.email}}</small></ui-select-choices></ui-select>{{UserSelector}} <span class=help-block>此工作流启动时通知其他人员，而结束时不向其分配任务。</span></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label for=ctApprove class=\"control-label col-sm-2\" translate=\"Enable Content Approval\"></label><div class=col-sm-10><input type=checkbox class=form-control id=ctApprove name=ctApprove bs-switch ng-model=\"doc.ctApprove\"> <span class=help-block>在此工作流完成后更新审批状态(使用此工作流控制内容审批)。</span></div></div></div></div></div><div class=modal-footer><button type=submit class=\"btn btn-primary\" translate=Submit data-ng-disabled=frm.$invalid></button> <button type=button class=\"btn btn-default\" ng-click=$dismiss() translate=Cancel></button></div>{{doc}}</form>");
$templateCache.put("views/plugins/angular-block-ui.html","<div ng-show=\"state.blockCount > 0\" class=block-ui-overlay ng-class=\"{ \'block-ui-visible\': state.blocking }\"></div><div ng-show=state.blocking class=block-ui-message-container><div class=loading-message><img src=./assets/img/loading-spinner-grey.gif> <span>&nbsp;&nbsp;{{ state.message }}</span></div></div>");
$templateCache.put("views/plugins/attachment.html","<div ng-show=\"uploader.isHTML5 && state!==\'View\'\" class=well nv-file-over nv-file-drop uploader=uploader>Drop files here</div><input ng-hide=\"state===\'View\'\" nv-file-select type=file uploader=uploader multiple><table class=table ng-show=\"uploader.queue.length>0 || doc.attachments.length>0\"><thead><tr><th width=50%>Name</th><th ng-show=uploader.isHTML5>Progress</th><th>Status</th><th ng-hide=\"state===\'View\'\">Actions</th></tr></thead><tbody><tr ng-repeat=\"item in uploader.queue\" ng-hide=\"state===\'View\'\"><td><strong ng-bind=item.file.name></strong></td><td ng-show=uploader.isHTML5><div class=progress style=\"margin-bottom: 0\"><div class=progress-bar role=progressbar ng-style=\"{ \'width\': item.progress + \'%\' }\"></div></div></td><td class=text-center><span ng-show=item.isSuccess><i class=\"glyphicon glyphicon-ok\"></i></span> <span ng-show=item.isCancel><i class=\"glyphicon glyphicon-ban-circle\"></i></span> <span ng-show=item.isError><i class=\"glyphicon glyphicon-remove\"></i></span></td><td nowrap><div class=btn-group><button type=button class=\"btn btn-success btn-xs\" ng-click=item.upload() ng-hide=\"item.isReady || item.isUploading || item.isSuccess\" tooltip=Upload><span class=\"glyphicon glyphicon-upload\"></span> Upload</button> <button type=button class=\"btn btn-warning btn-xs\" ng-click=item.cancel() ng-disabled=!item.isUploading tooltip=Cancel><span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel</button> <button type=button class=\"btn btn-danger btn-xs\" ng-click=delete(item) tooltip=Remove><span class=\"glyphicon glyphicon-trash\"></span> Remove</button></div></td></tr><tr ng-repeat=\"item in doc.attachments\"><td><a href=\"{{attachmentConfig.url + doc.__t }}/download/{{item}}\" traget=_blank><strong ng-bind=item></strong></a></td><td ng-show=uploader.isHTML5><div class=progress style=\"margin-bottom: 0\"><div class=progress-bar role=progressbar1 style=width:100%></div></div></td><td><span><i class=\"glyphicon glyphicon-ok\"></i></span></td><td ng-hide=\"state===\'View\'\"><button type=button class=\"btn btn-danger btn-xs\" ng-click=delAttachment($index,item) title=\"Delete the file\"><span class=\"glyphicon glyphicon-trash\"></span> Remove</button></td></tr></tbody></table>");
$templateCache.put("views/plugins/repeat-table.html","<div class=btn-group><button type=button class=\"btn btn-default dropdown-toggle\" data-toggle=dropdown><span class=caret></span></button><ul class=dropdown-menu role=menu><li><a href translate=\"Insert after this row\" ng-click=insert($index+1) ng-hide=\"rows.length>5\"></a></li><li><a href translate=\"Insert before this row\" ng-click=insert($index)></a></li><li><a href translate=\"Delete this row\" ng-click=del($index)></a></li></ul></div>");
$templateCache.put("views/Post/Edit.html","<form class=form-horizontal role=form name=frm><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>Task</h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\">Title</label><div class=col-sm-9><p class=form-control-static ng-bind=doc.title></p></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=Status></label><div class=col-sm-9><p class=form-control-static ng-bind=\"doc.status | translate\"></p></div></div></div></div><div class=row><div class=col-sm-12></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Requested By\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Consolidated Comments\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=\"row form-group\"><label class=\"col-sm-3 control-label\" translate=Comments></label><div class=col-sm-9><textarea class=form-control name=\"\" cols=30 rows=5 ng-model=doc.remark></textarea></div></div></div></div></div><div class=modal-footer><button type=button class=\"btn btn-success\" ng-click=submit() data-ng-disabled=frm.$invalid translate=Approve></button> <button type=button class=\"btn btn-danger\" ng-click=$dismiss() translate=Reject></button> <button type=button class=\"btn btn-info\" ng-click=cancel() translate=\"Request Change\"></button> <button type=button class=\"btn btn-warning\" ng-click=cancel() translate=\"ReAssign Task\"></button> <button type=button class=\"btn btn-default\" ng-click=$dismiss() translate=Cancel></button></div></form>");
$templateCache.put("views/Post/New.html","<form class=form-horizontal role=form name=frm ng-submit=submit()><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>Post</h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=title>Title</label><div class=col-sm-9><input class=form-control id=title name=title ng-model=doc.title required></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=status>Status</label><div class=col-sm-9><input type=checkbox class=form-control id=status name=status bs-switch ng-model=doc.status></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label for=select class=\"col-sm-3 control-label\">Select</label><div class=col-sm-9><select class=form-control id=select name=select ui-select2 ng-model=doc.select2><option value=one>First</option><option value=two>Second</option><option value=three>Third</option></select></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=remark>Remark</label><div class=col-sm-9><textarea class=form-control name=remark id=remark cols=30 rows=3 ng-model=doc.remark></textarea></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\">附件</label><div class=col-sm-9 ng-attachment></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=control-label>富文本1</label><div ng-model=doc.fulltext text-angular=\"\"></div></div></div></div></div><div class=modal-footer><button type=submit class=\"btn btn-primary\">Submit</button> <button type=button class=\"btn btn-default\" data-dismiss=modal ng-click=$dismiss()>Cancel</button></div></form>");
$templateCache.put("views/Post/View.html","<form class=form-horizontal role=form name=taskForm><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=cancel()></button><h4 class=modal-title>Task</h4></div><div class=modal-body><div class=form-group><label class=\"col-sm-2 control-label\">Title</label><div class=col-sm-10><p class=form-control-static ng-bind=doc.title></p></div></div><div class=form-group><label class=\"col-sm-2 control-label\">附件</label><div class=col-sm-10 ng-attachment=View></div></div></div><div class=modal-footer></div></form>");
$templateCache.put("views/User/Edit.html","<form class=form-horizontal ng-submit=submit() novalidate><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=cancel()></button><h4 class=modal-title>User</h4></div><div class=\"modal-body padding-0\"><div class=form-body><tabset><tab heading=General><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">First Name</label><div class=col-md-9><input class=form-control ng-model=doc.firstName ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Last Name</label><div class=col-md-9><input class=form-control ng-model=doc.lastName ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Initial</label><div class=col-md-9><input class=form-control ng-model=doc.initial ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">DisplayName</label><div class=col-md-9><input class=form-control ng-model=\"doc.displayName\"></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Description</label><div class=col-md-9><input class=form-control ng-model=\"doc.description\"></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Office</label><div class=col-md-9><input class=form-control ng-model=doc.office ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Telephones</label><div class=col-md-9><input class=form-control ng-model=doc.telephones ng-list></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Email</label><div class=col-md-9><input class=form-control ng-model=\"doc.email\"></div></div></div></div></tab><tab heading=Account><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Login Name</label><div class=col-md-9><p class=form-control-static ng-bind=doc.title></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Status</label><div class=col-md-9><div class=btn-group><input type=checkbox class=form-control id=status name=status bs-switch ng-model=doc.status disabled></div></div></div></div></div></tab><tab heading=Organization><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Company</label><div class=col-md-9><input class=form-control ng-model=doc.company ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Department</label><div class=col-md-9><input class=form-control ng-model=doc.department ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Job</label><div class=col-md-9><input class=form-control name=.job&quot; ng-model=doc.job ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Manager</label><div class=col-md-9><ui-select class=form-control ng-model=doc.managerId selector=\"{service:\'User\',filter:{fields:[\'id\',\'username\']}}\"><ui-select-match allow-clear=true>{{$select.selected.username}}</ui-select-match><ui-select-choices repeat=\"item.id as item in UserSelector | filter: $select.search\"><div ng-bind-html=\"item.username | highlight: $select.search\"></div></ui-select-choices></ui-select></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Director Reports</label><div class=col-md-9><div class=\"table-responsive flip-scroll\"><table class=\"table table-striped table-bordered table-condensed table-hover flip-content\"><thead><tr><th>LoginName</th><th>Description</th></tr></thead><tbody><tr ng-repeat=\"item in reporters\"><td ng-bind=item.title></td><td ng-bind=item.description></td></tr></tbody></table></div></div></div></div></div></tab><tab heading=MemberOf><div class=row><dic class=col-md-12><div class=\"table-responsive flip-scroll\"><table class=\"table table-striped table-bordered table-condensed table-hover flip-content\"><thead><tr><th>Title</th><th>Description</th></tr></thead><tbody><tr ng-repeat=\"group in groups\"><td ng-bind=group.title></td><td ng-bind=group.description></td></tr></tbody></table></div></dic></div></tab></tabset></div></div><div class=modal-footer><button type=button class=\"btn default\" data-dismiss=modal ng-click=cancel()>Cancel</button> <button type=submit class=\"btn blue\">Submit</button></div></form>");
$templateCache.put("views/User/New.html","<form class=form-horizontal ng-submit=$dismiss()><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>User</h4></div><div class=modal-body><tabset><tab heading=General><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=firstName>First Name</label><div class=col-sm-9><input class=form-control id=firstName name=firstName ng-model=doc.firstName ui-message></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=lastName>Last Name</label><div class=col-sm-9><input class=form-control id=lastName ng-model=doc.lastName ui-message></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=initial>Initial</label><div class=col-sm-9><input class=form-control id=initial ng-model=doc.initial ui-message></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=displayName>DisplayName</label><div class=col-sm-9><input class=form-control id=displayName ng-model=\"doc.displayName\"></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=description>Description</label><div class=col-sm-9><input class=form-control id=description ng-model=\"doc.description\"></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=office>Office</label><div class=col-sm-9><input class=form-control id=office ng-model=doc.office ui-message></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=telephones>Telephones</label><div class=col-sm-9><input class=form-control id=telephones ng-model=doc.telephones ng-list></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=email>Email</label><div class=col-sm-9><input class=form-control id=email ng-model=doc.email required ui-message></div></div></div></div></tab><tab heading=Account><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=username>Login Name</label><div class=col-sm-9><input class=form-control id=username unique=User ng-model=doc.username ui-message></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\">Status</label><div class=col-sm-9><div class=btn-group><input type=checkbox class=form-control id=status name=status bs-switch ng-model=doc.status></div></div></div></div></div></tab><tab heading=Organization><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=company>Company</label><div class=col-sm-9><input class=form-control id=company ng-model=doc.company ui-message></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=department>Department</label><div class=col-sm-9><input class=form-control id=department ng-model=doc.department ui-message></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\" for=job>Job</label><div class=col-sm-9><input class=form-control id=job ng-model=doc.job ui-message></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\">Manager</label><div class=col-sm-9><ui-select class=form-control ng-model=doc.managerId selector=\"{service:\'User\',filter:{fields:[\'id\',\'username\']}}\"><ui-select-match allow-clear=true>{{$select.selected.username}}</ui-select-match><ui-select-choices repeat=\"item.id as item in UserSelector | filter: $select.search\"><div ng-bind-html=\"item.username | highlight: $select.search\"></div></ui-select-choices></ui-select></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"control-label col-sm-3\">Director Reports</label><div class=col-sm-9><div class=\"table-responsive flip-scroll\"><table class=\"table table-striped table-bordered table-condensed table-hover flip-content\"><thead><tr><th>LoginName</th><th>Description</th></tr></thead><tbody><tr ng-repeat=\"item in reporters\"><td ng-bind=item.title></td><td ng-bind=item.description></td></tr></tbody></table></div></div></div></div></div></tab><tab heading=MemberOf><div class=row><dic class=col-sm-12><div class=\"table-responsive flip-scroll\"><table class=\"table table-striped table-bordered table-condensed table-hover flip-content\"><thead><tr><th>Title</th><th>Description</th></tr></thead><tbody><tr ng-repeat=\"group in groups\"><td ng-bind=group.title></td><td ng-bind=group.description></td></tr></tbody></table></div></dic></div></tab></tabset></div><div class=modal-footer><button type=button class=\"btn btn-default\" data-dismiss=modal ng-click=$dismiss()>Cancel</button> <button type=submit class=\"btn btn-primary\" ng-click=submit()>Submit</button></div></form>");
$templateCache.put("views/User/View.html","<form class=form-horizontal ng-submit=submit()><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>User</h4></div><div class=\"modal-body padding-0\"><div class=form-body><tabset><tab heading=General><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">First Name</label><div class=col-md-9><p class=form-control-static ng-bind=doc.firstName></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Last Name</label><div class=col-md-9><p class=form-control-static ng-bind=doc.lastName></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Initial</label><div class=col-md-9><p class=form-control-static ng-bind=doc.initial></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">DisplayName</label><div class=col-md-9><p class=form-control-static ng-bind=doc.displayName></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Description</label><div class=col-md-9><p class=form-control-static ng-bind=doc.description></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Office</label><div class=col-md-9><p class=form-control-static ng-bind=doc.office></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Telephones</label><div class=col-md-9><p class=form-control-static ng-bind=\"doc.telephones.join(\',\')\"></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Email</label><div class=col-md-9><p class=form-control-static ng-bind=doc.email></p></div></div></div></div></tab><tab heading=Account><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Login Name</label><div class=col-md-9><p class=form-control-static ng-bind=doc.username></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Status</label><div class=col-md-9><input type=checkbox class=form-control id=status name=status bs-switch ng-model=doc.status disabled></div></div></div></div></tab><tab heading=Organization><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Company</label><div class=col-md-9><p class=form-control-static ng-bind=doc.company></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Department</label><div class=col-md-9><p class=form-control-static ng-bind=doc.department></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Job</label><div class=col-md-9><p class=form-control-static ng-bind=doc.job></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Manager</label><div class=col-md-9><p class=form-control-static ng-bind=doc.manager.title></p></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Director Reports</label><div class=col-md-9><div class=\"table-responsive flip-scroll\"><table class=\"table table-striped table-bordered table-condensed table-hover flip-content\"><thead><tr><th>LoginName</th><th>Description</th></tr></thead><tbody><tr ng-repeat=\"item in reporters\"><td ng-bind=item.title></td><td ng-bind=item.description></td></tr></tbody></table></div></div></div></div></div></tab><tab heading=MemberOf><div class=row><div class=col-md-12><div class=\"table-responsive flip-scroll\"><table class=\"table table-striped table-bordered table-condensed table-hover flip-content\"><thead><tr><th>Title</th><th>Description</th></tr></thead><tbody><tr ng-repeat=\"group in groups\"><td ng-bind=group.title></td><td ng-bind=group.description></td></tr></tbody></table></div></div></div></tab></tabset></div></div></form>");
$templateCache.put("views/User/acc.html","<accordion close-others=true><accordion-group heading=General><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">First Name</label><div class=col-md-9><input class=form-control ng-model=doc.general.firstName required ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Last Name</label><div class=col-md-9><input class=form-control ng-model=doc.general.lastName required ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Initial</label><div class=col-md-9><input class=form-control ng-model=doc.general.initial required ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">DisplayName</label><div class=col-md-9><input class=form-control ng-model=\"doc.general.displayName\"></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Description</label><div class=col-md-9><input class=form-control ng-model=\"doc.general.description\"></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Office</label><div class=col-md-9><input class=form-control ng-model=doc.general.office required ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Telephones</label><div class=col-md-9><input class=form-control ng-model=doc.general.telephones ng-list></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Email</label><div class=col-md-9><input class=form-control ng-model=\"doc.general.email\"></div></div></div></div></accordion-group><accordion-group heading=Account><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Login Name</label><div class=col-md-9><input class=form-control ng-unique=User ng-model=doc.title required ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Status</label><div class=col-md-9><div class=btn-group><label class=\"btn btn-success\" ng-model=doc.status btn-radio=\"\'NORMAL\'\">Normal</label><label class=\"btn btn-success\" ng-model=doc.status btn-radio=\"\'LOCK\'\">LOCK</label></div></div></div></div></div></accordion-group><accordion-group heading=Organization><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Company</label><div class=col-md-9><input class=form-control ng-model=doc.organization.company required ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Department</label><div class=col-md-9><input class=form-control ng-model=doc.organization.department required ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Job</label><div class=col-md-9><input class=form-control ng-model=doc.organization.job required ui-message></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Manager</label><div class=col-md-9><select class=form-control name=doc.organization.manager id=doc.organization.manager ng-model=doc.organization.manager ui-select2 required ui-message><option value=\"\"></option><option ng-repeat=\"user in UserSelector\" value=\"{{user._id }}\" ng-bind=user.title></option></select></div></div></div></div><div class=row><div class=col-md-12><div class=form-group><label class=\"control-label col-md-3\">Director Reports</label><div class=col-md-9><div class=\"table-responsive flip-scroll\"><table class=\"table table-striped table-bordered table-condensed table-hover flip-content\"><thead><tr><th>LoginName</th><th>Description</th></tr></thead><tbody><tr ng-repeat=\"item in reporters\"><td ng-bind=item.title></td><td ng-bind=item.description></td></tr></tbody></table></div></div></div></div></div></accordion-group><accordion-group heading=MemberOf><div class=row><dic class=col-md-12><div class=\"table-responsive flip-scroll\"><table class=\"table table-striped table-bordered table-condensed table-hover flip-content\"><thead><tr><th>Title</th><th>Description</th></tr></thead><tbody><tr ng-repeat=\"group in groups\"><td ng-bind=group.title></td><td ng-bind=group.description></td></tr></tbody></table></div></dic></div></accordion-group></accordion>");
$templateCache.put("views/AssignTask/Edit.html","<form class=form-horizontal role=form name=frm><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>Task</h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=Title></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.title></p></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=Status></label><div class=col-sm-9><p class=form-control-static ng-bind=\"doc.status | translate\"></p></div></div></div></div><div class=row><div class=col-sm-12></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Requested By\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Consolidated Comments\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=\"row form-group\"><label class=\"col-sm-3 control-label\" translate=Comments></label><div class=col-sm-9><textarea class=form-control name=\"\" cols=30 rows=5 ng-model=doc.remark></textarea></div></div></div></div></div><div class=modal-footer><button type=button class=\"btn btn-primary\" ng-click=approve() data-ng-disabled=frm.$invalid translate=Approve></button> <button type=button class=\"btn btn-danger\" ng-click=reject() translate=Reject></button> <button type=button class=\"btn btn-default\" ng-click=$dismiss() translate=Cancel></button> <button type=button class=\"btn btn-info\" ng-click=requestChange() translate=\"Request Change\"></button> <button type=button class=\"btn btn-warning\" ng-click=reAssignTask() translate=\"ReAssign Task\"></button></div></form>");
$templateCache.put("views/AssignTask/New.html","<form class=form-horizontal role=form name=frm><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>Task</h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\">Title</label><div class=col-sm-9><p class=form-control-static ng-bind=doc.title></p></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=Status></label><div class=col-sm-9><p class=form-control-static ng-bind=\"doc.status | translate\"></p></div></div></div></div><div class=row><div class=col-sm-12></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Requested By\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Consolidated Comments\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=\"row form-group\"><label class=\"col-sm-3 control-label\" translate=Comments></label><div class=col-sm-9><textarea class=form-control name=\"\" cols=30 rows=5 ng-model=doc.remark></textarea></div></div></div></div></div><div class=modal-footer><button type=button class=\"btn btn-success\" ng-click=submit() data-ng-disabled=frm.$invalid translate=Approve></button> <button type=button class=\"btn btn-danger\" ng-click=$dismiss() translate=Reject></button> <button type=button class=\"btn btn-info\" ng-click=cancel() translate=\"Request Change\"></button> <button type=button class=\"btn btn-warning\" ng-click=cancel() translate=\"ReAssign Task\"></button> <button type=button class=\"btn btn-default\" ng-click=$dismiss() translate=Cancel></button></div></form>");
$templateCache.put("views/AssignTask/View.html","<form class=form-horizontal role=form name=frm><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>Task</h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\">Title</label><div class=col-sm-9><p class=form-control-static ng-bind=doc.title></p></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=Status></label><div class=col-sm-9><p class=form-control-static ng-bind=\"doc.status | translate\"></p></div></div></div></div><div class=row><div class=col-sm-12></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Requested By\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Consolidated Comments\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=\"row form-group\"><label class=\"col-sm-3 control-label\" translate=Comments></label><div class=col-sm-9><textarea class=form-control name=\"\" cols=30 rows=5 ng-model=doc.remark></textarea></div></div></div></div></div><div class=modal-footer><button type=button class=\"btn btn-success\" ng-click=submit() data-ng-disabled=frm.$invalid translate=Approve></button> <button type=button class=\"btn btn-danger\" ng-click=$dismiss() translate=Reject></button> <button type=button class=\"btn btn-info\" ng-click=cancel() translate=\"Request Change\"></button> <button type=button class=\"btn btn-warning\" ng-click=cancel() translate=\"ReAssign Task\"></button> <button type=button class=\"btn btn-default\" ng-click=$dismiss() translate=Cancel></button></div></form>");
$templateCache.put("views/WorkflowApproveTask/Edit.html","<form class=form-horizontal role=form name=frm><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>Task</h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=Title></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.title></p></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=Status></label><div class=col-sm-9><p class=form-control-static ng-bind=\"doc.status | translate\"></p></div></div></div></div><div class=row><div class=col-sm-12></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Requested By\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Consolidated Comments\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=\"row form-group\"><label class=\"col-sm-3 control-label\" translate=Comments></label><div class=col-sm-9><textarea class=form-control name=\"\" cols=30 rows=5 ng-model=doc.remark></textarea></div></div></div></div></div><div class=modal-footer><button type=button class=\"btn btn-primary\" ng-click=approve() data-ng-disabled=frm.$invalid translate=Approve></button> <button type=button class=\"btn btn-danger\" ng-click=reject() translate=Reject></button> <button type=button class=\"btn btn-default\" ng-click=$dismiss() translate=Cancel></button> <button type=button class=\"btn btn-info\" ng-click=requestChange() translate=\"Request Change\"></button> <button type=button class=\"btn btn-warning\" ng-click=reAssignTask() translate=\"ReAssign Task\"></button></div></form>");
$templateCache.put("views/WorkflowApproveTask/New.html","<form class=form-horizontal role=form name=frm><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>Task</h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\">Title</label><div class=col-sm-9><p class=form-control-static ng-bind=doc.title></p></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=Status></label><div class=col-sm-9><p class=form-control-static ng-bind=\"doc.status | translate\"></p></div></div></div></div><div class=row><div class=col-sm-12></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Requested By\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Consolidated Comments\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=\"row form-group\"><label class=\"col-sm-3 control-label\" translate=Comments></label><div class=col-sm-9><textarea class=form-control name=\"\" cols=30 rows=5 ng-model=doc.remark></textarea></div></div></div></div></div><div class=modal-footer><button type=button class=\"btn btn-success\" ng-click=submit() data-ng-disabled=frm.$invalid translate=Approve></button> <button type=button class=\"btn btn-danger\" ng-click=$dismiss() translate=Reject></button> <button type=button class=\"btn btn-info\" ng-click=cancel() translate=\"Request Change\"></button> <button type=button class=\"btn btn-warning\" ng-click=cancel() translate=\"ReAssign Task\"></button> <button type=button class=\"btn btn-default\" ng-click=$dismiss() translate=Cancel></button></div></form>");
$templateCache.put("views/WorkflowApproveTask/View.html","<form class=form-horizontal role=form name=frm><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true ng-click=$dismiss()></button><h4 class=modal-title>Task</h4></div><div class=modal-body><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\">Title</label><div class=col-sm-9><p class=form-control-static ng-bind=doc.title></p></div></div></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=Status></label><div class=col-sm-9><p class=form-control-static ng-bind=\"doc.status | translate\"></p></div></div></div></div><div class=row><div class=col-sm-12></div></div><div class=row><div class=col-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Requested By\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=form-group><label class=\"col-sm-3 control-label\" translate=\"Consolidated Comments\"></label><div class=col-sm-9><p class=form-control-static ng-bind=doc.requester></p></div></div></div></div><div class=row><div class=clo-sm-12><div class=\"row form-group\"><label class=\"col-sm-3 control-label\" translate=Comments></label><div class=col-sm-9><textarea class=form-control name=\"\" cols=30 rows=5 ng-model=doc.remark></textarea></div></div></div></div></div><div class=modal-footer><button type=button class=\"btn btn-success\" ng-click=submit() data-ng-disabled=frm.$invalid translate=Approve></button> <button type=button class=\"btn btn-danger\" ng-click=$dismiss() translate=Reject></button> <button type=button class=\"btn btn-info\" ng-click=cancel() translate=\"Request Change\"></button> <button type=button class=\"btn btn-warning\" ng-click=cancel() translate=\"ReAssign Task\"></button> <button type=button class=\"btn btn-default\" ng-click=$dismiss() translate=Cancel></button></div></form>");}]);
angular.module('cmp', [
  'cmp.tpl',
  'lbServices',

  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'ui.utils',
  'angular-lodash',
  'pascalprecht.translate',
  'LocalStorageModule',
  'toastr',
  'blockUI',
  'ncy-angular-breadcrumb',

  //'angular-chosen',
  //'localytics.directives',
  'ui.select',
  'angularFileUpload',
  'frapontillo.bootstrap-switch',

  'ui.grid',
  'ui.grid.edit',
  'ui.grid.moveColumns',
  'ui.grid.autoResize',
  'ui.grid.pinning',
  'ui.grid.resizeColumns',
  'ui.grid.selection',

  'textAngular'
]).config(['$httpProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', 'blockUIConfig', '$translateProvider', 'uiSelectConfig',
  function ($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider, blockUIConfig, $translateProvider, uiSelectConfig) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    $httpProvider.interceptors.push(function ($q, $location) {
      return {
        responseError: function (rejection) {
          if (rejection.status == 401) {
            var nextAfterLogin = $location.path();
            if (nextAfterLogin !== '/login') {
              $location.nextAfterLogin = $location.path();
            }
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'languages/',
      suffix: '.json'
    });

    blockUIConfig.templateUrl = 'views/plugins/angular-block-ui.html';
    blockUIConfig.autoBlock = false;
    blockUIConfig.message = 'processing';
    blockUIConfig.resetOnException = true;

    uiSelectConfig.theme = 'select2';

    $urlRouterProvider
      .when('/', '/index')
      .when('', '/index');
    //.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('main', {
        url: '',
        views: {
          '@': {
            templateUrl: 'views/main/index.html',
            controller: 'MainCtrl'
          },
          'header@main': {
            templateUrl: 'views/main/header.html',
            controller: 'HeaderCtrl'
          },
          'sidebar@main': {
            templateUrl: 'views/main/sidebar.html',
            controller: 'SideBarCtrl'
          },
          'footer@main': {
            templateUrl: 'views/main/footer.html'
          }
        },
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('main.index', {
        url: '/index',
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl',
        data: {
          ncyBreadcrumbSkip: true
        }
      })
      .state('main.list', {//列表页面
        url: '/list/:list?view&filter',
        templateUrl: 'views/list/content.html',
        controller: 'ListCtrl',
        ncyBreadcrumb: {
          label: '{{ $stateParams.list }}'
        }
      })
      .state('main.listSetting', {
        url: '/listSetting/:list',
        templateUrl: 'views/list/setting.html',
        controller: 'ListSettingCtrl',
        ncyBreadcrumb: {
          parent: 'main.list',
          label: 'List Setting'
        }
      })
      .state('main.wrkSetting', {
        url: '/wrkSetting/:list',
        templateUrl: 'views/list/wrkSetting.html',
        controller: 'WorkflowSettingCtrl',
        ncyBreadcrumb: {
          parent: 'main.listSetting',
          label: 'Workflow Setting'
        }
      })
      .state('main.addWrk', {
        url: '/addWrk/:list',
        templateUrl: 'views/workflow/addWrk.html',
        controller: 'AddWrkCtrl',
        ncyBreadcrumb: {
          parent: 'main.wrkSetting',
          label: 'Add Workflow'
        }
      })
      .state('main.wrkAss', {
        url: '/wrkAss/:list/:ass/:wft',
        templateUrl: function ($stateParams) {
          return 'views/workflow-associate/' + $stateParams.wft + '.html';
        },
        controllerProvider: function ($stateParams) {
          return $stateParams.wft + 'AssCtrl';
        },
        ncyBreadcrumb: {
          parent: 'main.wrkSetting',
          label: 'Set Workflow Association Data'
        }
      })
      .state('main.workflow', {
        url: '/workflow/:list?id&title',
        templateUrl: 'views/workflow/workflow.html',
        controller: 'WorkflowCtrl',
        ncyBreadcrumb: {
          parent: 'main.list',
          label: '{{ $stateParams.title }}'
        }
      })
      .state('main.wrkStat', {//工作流历史界面
        url: '/WrkStat/:workflow/:instanceId',
        templateUrl: 'views/workflow/wrkStat.html',
        controller: 'WorkflowStateCtrl',
        ncyBreadcrumb: {
          label: 'Workflow State : {{ $stateParams.workflow }}'
        }
      })

      .state('main.profile', {
        url: '/profile',
        templateUrl: 'views/extra/profile/index.html'
      })
      .state('main.calendar', {
        url: '/calendar',
        templateUrl: 'views/extra/calendar.html'
      });

    $stateProvider
      .state('main.test', {
        url: '/test',
        templateUrl: 'views/test.html'
      })
      .state('main.upload', {
        url: '/upload',
        templateUrl: 'views/upload.html',
        controller: ['$scope', function ($scope) {
          $scope.doc = {};
        }]
      })
      .state('main.grid', {
        url: '/grid',
        templateUrl: 'views/grid.html',
        controller: 'GridCtrl'
      })
  }
]).run(['$rootScope', '$modal', '$state', '$stateParams', 'localStorageService', '$translate',
  function ($rootScope, $modal, $state, $stateParams, localStorageService, $translate) {
    if (!localStorageService.get('lang')) {
      localStorageService.set('lang', 'us');
    }
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.localStorageService = localStorageService;
    $translate.use(localStorageService.get('lang'));
  }]);

/**
 * Created by 烬云 on 2014/11/1.
 */
angular.module('cmp')
  .factory('UserUtil', [function () {
    return {
      include: []
    }
  }])
  .controller('UserNewCtrl', ['$scope', '$modalInstance', 'User', 'toastr', 'doc',
    function ($scope, $modalInstance, User, toastr, doc) {
      $scope.doc = doc;
      $scope.doc.password='888888';
      $scope.submit=function(){
        User.save($scope.doc).$promise
          .then(function(res){
            $modalInstance.close()
          })
          .then(null,function(res){
          })
      };
    }])
  .controller('UserEditCtrl', ['$scope', '$modalInstance', 'User', 'id', 'toastr',
    function ($scope, $modalInstance, User, id, toastr) {
      $scope.doc = User.findById({id: id});
      $scope.UserSelector=User.find();
//      User.general({id: id});
      $scope.submit = function () {
        $scope.doc.$prototype$updateAttributes()
          .then(function (result) {
            toastr.success('修改成功');
            $modalInstance.close(result);
          })
      }
    }])
  .controller('UserViewCtrl', ['$scope', '$modalInstance', 'User', 'id',
    function ($scope, $modalInstance, User, id) {
      $scope.doc = User.findById({id: id});
    }]);

/**
 * Created by Administrator on 2014/10/24.
 */
angular.module('cmp')
  .controller('IndexCtrl', ['$scope', '$state', '$http', 'User', '$rootScope', 'toastr', '$location', 'localStorageService',
    function ($scope, $state, $http, User, $rootScope, toastr, $location, localStorageService) {
      console.log('index ctrl');
    }
  ]);

angular.module('cmp')
  .controller('LoginCtrl', ['$scope', '$state', '$http', 'User', '$rootScope', 'toastr', '$location', 'localStorageService',
    function ($scope, $state, $http, User, $rootScope, toastr, $location, localStorageService) {
      $scope.credentials = {
        username: 'nemo',
        password: '123456'
      };
      $scope.submit = function () {
        User.login($scope.credentials).$promise
          .then(function (result) {
            localStorageService.set('user', result.user);
            var next = $location.nextAfterLogin || '/';
            $location.nextAfterLogin = null;
            //$location.path(next);
            $state.go('main.list', {
              list: 'Post'
            });
          }, function (reason) {
            toastr.error(reason.data.error.message);
          });
      };
      $scope.submit();
    }]);

/**
 * Created by 烬云 on 14-4-12.
 */
angular.module('cmp')
  .controller('MainCtrl', ['$scope', '$state', 'localStorageService',
    function ($scope, $state, localStorageService) {

      //登出
      $scope.singOut = function () {
        window.localStorage.clear();
        $state.go('login');
      };
    }])
  .controller('SideBarCtrl', ['$scope', '$state',
    function ($scope, $state) {
      var sidebarWidth = 225;
      var sidebarCollapsedWidth = 35;
      var _getViewPort = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
          a = 'client';
          e = document.documentElement || document.body;
        }
        return {
          width: e[a + 'Width'],
          height: e[a + 'Height']
        }
      }
      var handleSidebarState = function () {
        // remove sidebar toggler if window width smaller than 992(for tablet and phone mode)
        var viewport = _getViewPort();
        if (viewport.width < 992) {
          $('body').removeClass("page-sidebar-closed");
        }
      }

      // Set proper height for sidebar and content. The content and sidebar height must be synced always.
      var handleSidebarAndContentHeight = function () {
        var content = $('.page-content');
        var sidebar = $('.page-sidebar');
        var body = $('body');
        var height;

        if (body.hasClass("page-footer-fixed") === true && body.hasClass("page-sidebar-fixed") === false) {
          var available_height = $(window).height() - $('.footer').outerHeight() - $('.header').outerHeight();
          if (content.height() < available_height) {
            content.attr('style', 'min-height:' + available_height + 'px !important');
          }
        } else {
          if (body.hasClass('page-sidebar-fixed')) {
            height = _calculateFixedSidebarViewportHeight();
          } else {
            height = sidebar.height() + 20;
            var headerHeight = $('.header').outerHeight();
            var footerHeight = $('.footer').outerHeight();
            if ($(window).width() > 1024 && (height + headerHeight + footerHeight) < $(window).height()) {
              height = $(window).height() - headerHeight - footerHeight;
            }
          }
          if (height >= content.height()) {
            content.attr('style', 'min-height:' + height + 'px !important');
          }
        }
      }

      // Handle sidebar menu
      var handleSidebarMenu = function () {
        jQuery('.page-sidebar').on('click', 'li > a', function (e) {
          if ($(this).next().hasClass('sub-menu') == false) {
            if ($('.btn-navbar').hasClass('collapsed') == false) {
              $('.btn-navbar').click();
            }
            return;
          }

          if ($(this).next().hasClass('sub-menu always-open')) {
            return;
          }

          var parent = $(this).parent().parent();
          var the = $(this);
          var menu = $('.page-sidebar-menu');
          var sub = jQuery(this).next();

          var autoScroll = menu.data("auto-scroll") ? menu.data("auto-scroll") : true;
          var slideSpeed = menu.data("slide-speed") ? parseInt(menu.data("slide-speed")) : 200;

          parent.children('li.open').children('a').children('.arrow').removeClass('open');
          parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(200);
          parent.children('li.open').removeClass('open');

          var slideOffeset = -200;

          if (sub.is(":visible")) {
            jQuery('.arrow', jQuery(this)).removeClass("open");
            jQuery(this).parent().removeClass("open");
            sub.slideUp(slideSpeed, function () {
              if (autoScroll == true && $('body').hasClass('page-sidebar-closed') == false) {
                if ($('body').hasClass('page-sidebar-fixed')) {
                  menu.slimScroll({'scrollTo': (the.position()).top});
                } else {
                  App.scrollTo(the, slideOffeset);
                }
              }
              handleSidebarAndContentHeight();
            });
          } else {
            jQuery('.arrow', jQuery(this)).addClass("open");
            jQuery(this).parent().addClass("open");
            sub.slideDown(slideSpeed, function () {
              if (autoScroll == true && $('body').hasClass('page-sidebar-closed') == false) {
                if ($('body').hasClass('page-sidebar-fixed')) {
                  menu.slimScroll({'scrollTo': (the.position()).top});
                } else {
                  App.scrollTo(the, slideOffeset);
                }
              }
              handleSidebarAndContentHeight();
            });
          }

          e.preventDefault();
        });

        // handle ajax links within sidebar menu
        jQuery('.page-sidebar').on('click', ' li > a.ajaxify', function (e) {
          e.preventDefault();
          App.scrollTop();

          var url = $(this).attr("href");
          var menuContainer = jQuery('.page-sidebar ul');
          var pageContent = $('.page-content');
          var pageContentBody = $('.page-content .page-content-body');

          menuContainer.children('li.active').removeClass('active');
          menuContainer.children('arrow.open').removeClass('open');

          $(this).parents('li').each(function () {
            $(this).addClass('active');
            $(this).children('a > span.arrow').addClass('open');
          });
          $(this).parents('li').addClass('active');

          App.startPageLoading();

          if ($(window).width() <= 991 && $('.page-sidebar').hasClass("in")) {
            $('.navbar-toggle').click();
          }

          $.ajax({
            type: "GET",
            cache: false,
            url: url,
            dataType: "html",
            success: function (res) {
              App.stopPageLoading();
              pageContentBody.html(res);
              App.fixContentHeight(); // fix content height
              App.initAjax(); // initialize core stuff
            },
            error: function (xhr, ajaxOptions, thrownError) {
              pageContentBody.html('<h4>Could not load the requested content.</h4>');
              App.stopPageLoading();
            }
          });
        });

        // handle ajax link within main content
        jQuery('.page-content').on('click', '.ajaxify', function (e) {
          e.preventDefault();
          App.scrollTop();

          var url = $(this).attr("href");
          var pageContent = $('.page-content');
          var pageContentBody = $('.page-content .page-content-body');

          App.startPageLoading();

          if ($(window).width() <= 991 && $('.page-sidebar').hasClass("in")) {
            $('.navbar-toggle').click();
          }

          $.ajax({
            type: "GET",
            cache: false,
            url: url,
            dataType: "html",
            success: function (res) {
              App.stopPageLoading();
              pageContentBody.html(res);
              App.fixContentHeight(); // fix content height
              App.initAjax(); // initialize core stuff
            },
            error: function (xhr, ajaxOptions, thrownError) {
              pageContentBody.html('<h4>Could not load the requested content.</h4>');
              App.stopPageLoading();
            }
          });
        });
      }

      // Helper function to calculate sidebar height for fixed sidebar layout.
      var _calculateFixedSidebarViewportHeight = function () {
        var sidebarHeight = $(window).height() - $('.header').height() + 1;
        if ($('body').hasClass("page-footer-fixed")) {
          sidebarHeight = sidebarHeight - $('.footer').outerHeight();
        }

        return sidebarHeight;
      }

      // Handles fixed sidebar
      var handleFixedSidebar = function () {
        var menu = $('.page-sidebar-menu');

        if (menu.parent('.slimScrollDiv').size() === 1) { // destroy existing instance before updating the height
          menu.slimScroll({
            destroy: true
          });
          menu.removeAttr('style');
          $('.page-sidebar').removeAttr('style');
        }

        if ($('.page-sidebar-fixed').size() === 0) {
          handleSidebarAndContentHeight();
          return;
        }

        var viewport = _getViewPort();
        if (viewport.width >= 992) {
          var sidebarHeight = _calculateFixedSidebarViewportHeight();

          menu.slimScroll({
            size: '7px',
            color: '#a1b2bd',
            opacity: .3,
            position: isRTL ? 'left' : 'right',
            height: sidebarHeight,
            allowPageScroll: false,
            disableFadeOut: false
          });
          handleSidebarAndContentHeight();
        }
      }

      // Handles the sidebar menu hover effect for fixed sidebar.
      var handleFixedSidebarHoverable = function () {
        if ($('body').hasClass('page-sidebar-fixed') === false) {
          return;
        }

        $('.page-sidebar').off('mouseenter').on('mouseenter', function () {
          var body = $('body');

          if ((body.hasClass('page-sidebar-closed') === false || body.hasClass('page-sidebar-fixed') === false) || $(this).hasClass('page-sidebar-hovering')) {
            return;
          }

          body.removeClass('page-sidebar-closed').addClass('page-sidebar-hover-on');

          if (body.hasClass("page-sidebar-reversed")) {
            $(this).width(sidebarWidth);
          } else {
            $(this).addClass('page-sidebar-hovering');
            $(this).animate({
              width: sidebarWidth
            }, 400, '', function () {
              $(this).removeClass('page-sidebar-hovering');
            });
          }
        });

        $('.page-sidebar').off('mouseleave').on('mouseleave', function () {
          var body = $('body');

          if ((body.hasClass('page-sidebar-hover-on') === false || body.hasClass('page-sidebar-fixed') === false) || $(this).hasClass('page-sidebar-hovering')) {
            return;
          }

          if (body.hasClass("page-sidebar-reversed")) {
            $('body').addClass('page-sidebar-closed').removeClass('page-sidebar-hover-on');
            $(this).width(sidebarCollapsedWidth);
          } else {
            $(this).addClass('page-sidebar-hovering');
            $(this).animate({
              width: sidebarCollapsedWidth
            }, 400, '', function () {
              $('body').addClass('page-sidebar-closed').removeClass('page-sidebar-hover-on');
              $(this).removeClass('page-sidebar-hovering');
            });
          }
        });
      }

      // Handles sidebar toggler to close/hide the sidebar.
      var handleSidebarToggler = function () {
        var viewport = _getViewPort();
        if ($.cookie && $.cookie('sidebar_closed') === '1' && viewport.width >= 992) {
          $('body').addClass('page-sidebar-closed');
        }

        // handle sidebar show/hide
        $('.page-sidebar, .header').on('click', '.sidebar-toggler', function (e) {
          var body = $('body');
          var sidebar = $('.page-sidebar');

          if ((body.hasClass("page-sidebar-hover-on") && body.hasClass('page-sidebar-fixed')) || sidebar.hasClass('page-sidebar-hovering')) {
            body.removeClass('page-sidebar-hover-on');
            sidebar.css('width', '').hide().show();
            handleSidebarAndContentHeight(); //fix content & sidebar height
            if ($.cookie) {
              $.cookie('sidebar_closed', '0');
            }
            e.stopPropagation();
            runResponsiveHandlers();
            return;
          }

          $(".sidebar-search", sidebar).removeClass("open");

          if (body.hasClass("page-sidebar-closed")) {
            body.removeClass("page-sidebar-closed");
            if (body.hasClass('page-sidebar-fixed')) {
              sidebar.css('width', '');
            }
            if ($.cookie) {
              $.cookie('sidebar_closed', '0');
            }
          } else {
            body.addClass("page-sidebar-closed");
            if ($.cookie) {
              $.cookie('sidebar_closed', '1');
            }
          }
          handleSidebarAndContentHeight(); //fix content & sidebar height
          runResponsiveHandlers();
        });

        // handle the search bar close
        $('.page-sidebar').on('click', '.sidebar-search .remove', function (e) {
          e.preventDefault();
          $('.sidebar-search').removeClass("open");
        });

        // handle the search query submit on enter press
        $('.page-sidebar .sidebar-search').on('keypress', 'input.form-control', function (e) {
          if (e.which == 13) {
            $('.sidebar-search').submit();
            return false; //<---- Add this line
          }
        });

        // handle the search submit(for sidebar search and responsive mode of the header search)
        $('.sidebar-search .submit').on('click', function (e) {
          e.preventDefault();
          if ($('body').hasClass("page-sidebar-closed")) {
            if ($('.sidebar-search').hasClass('open') == false) {
              if ($('.page-sidebar-fixed').size() === 1) {
                $('.page-sidebar .sidebar-toggler').click(); //trigger sidebar toggle button
              }
              $('.sidebar-search').addClass("open");
            } else {
              $('.sidebar-search').submit();
            }
          } else {
            $('.sidebar-search').submit();
          }
        });

        // header search box:

        // handle the search query submit on enter press
        $('.header .search-form').on('keypress', 'input.form-control', function (e) {
          if (e.which == 13) {
            $('.sidebar-search').submit();
            return false; //<---- Add this line
          }
        });

        //handle header search button click
        $('.header .search-form .submit').on('click', function (e) {
          e.preventDefault();
          $('.header .search-form').submit();
        });
      }
      //layout handlers
      handleFixedSidebar(); // handles fixed sidebar menu
      handleFixedSidebarHoverable(); // handles fixed sidebar on hover effect
      handleSidebarMenu(); // handles main menu
      handleSidebarToggler(); // handles sidebar hide/show
    }])
  .controller('HeaderCtrl', ['$scope', 'Task', '$modal', '$translate', '$state',
    function ($scope, Task, $modal, $translate, $state) {
      $scope.editTask = function (task) {
        $modal.open({
          templateUrl: task.form + '/Edit.html',
          resolve: {
            _id: function () {
              return task._id;
            }
          },
          size: 'lg',
          controller: task.controller//'TaskEditCtrl'
        }).result.then(function () {
            $scope.tasks = Task.selector({filter: JSON.stringify({percent: {$lt: 100}})});
          })
      };

      $scope.changeLanguage = function (language) {
        $scope.$root.language = language;
        window.localStorage.setItem('lang', language);
        $translate.use(language);
      };

      $scope.logOut = function () {
        window.localStorage.clear();
        $state.go('login');
      };
    }])

/**
 * Created by 烬云 on 2014/11/1.
 */
angular.module('cmp')
  .factory('PostUtil', [function () {
    return {
      include: [
        {
          relation: 'owner',
          scope: {
            fields: ['username', 'email']
          }
        },
        {
          relation: 'modifier',
          scope: {
            fields: ['username', 'email']
          }
        }
      ],
      menu: [
        '<li role="presentation"><a href role="menuitem" ng-click="getExternalScopes().addFn(row.entity)"><i class="fa fa-eye"></i>View</a></li>'
      ],
      fn: {
        addFn: function () {
          alert('我是扩展的函数')
        }
      }
    }
  }])
  .controller('PostNewCtrl', ['$scope', '$modalInstance', 'Post', 'toastr', 'doc',
    function ($scope, $modalInstance, Post, toastr, doc) {
      $scope.doc = doc;
      $scope.submit = function () {
        Post.create($scope.doc).$promise
          .then(function (result) {
            toastr.success('success');
            $modalInstance.close(result);
          }, function (reason) {
            toastr.error(reason.data.error.message);
          })
      };
    }])
  .controller('PostEditCtrl', ['$scope', '$modalInstance', 'Post', 'toastr', 'doc', 'Person',
    function ($scope, $modalInstance, Post, toastr, doc, Person) {
      $scope.doc = Post.findById({id: doc.id});
      $scope.submit = function () {
        $scope.doc.$prototype$updateAttributes()
          .then(function (result) {
            toastr.success('修改成功');
            $modalInstance.close(result);
          })
      }
    }])
  .controller('PostViewCtrl', ['$scope', '$modalInstance', 'Post', 'id',
    function ($scope, $modalInstance, Post, id) {
      console.log(id);
      $scope.doc = Post.findById({id: id});
    }]);

/**
 * Created by 烬云 on 2014/10/22.
 */
angular.module('cmp')
  .controller('GridCtrl', ['$scope', 'Post', function ($scope, Post) {
    $scope.columns = [
      {
        id: 'ff599720-96ea-4ac1-9b4c-573dbde9c258',
        name: 'title',
        type: 'string',
        displayName: 'title',
        enableCellEdit: false,
        cellTemplate: '<div class=\"ui-grid-cell-contents\"><a href title-link="row.entity"></a></div>'
      },
      {
        name: 'action',
        displayName: 'Action',
        enableCellEdit: false,
        enableFiltering: false,
        width: 50,
        enableSorting: false,
        enableColumnMenu: false,
        cellTemplate: '<span class="dropdown">' +
        '<a href class="dropdown-toggle" aria-haspopup="true" aria-expanded="true"><i class="fa fa-ellipsis-h"></i></a>' +
        '<ul class="dropdown-menu">' +
        '<li role="presentation"><a role="menuitem" tabindex="-1" ng-click="view(row)"><i class="fa fa-eye"></i>View</a></li>' +
        '<li role="presentation"><a role="menuitem" tabindex="-1" ng-click="edit(row)"><i class="fa fa-pencil"></i>Edit</a></li>' +
        '<li role="presentation"><a role="menuitem" tabindex="-1" ng-click="del(row)"><i class="fa fa-trash-o"></i> Delete</a></li>'+
        '<li role="presentation"><a role="menuitem" tabindex="-1"><i class="fa fa-check-square-o"></i>Workflow</a></li>' +
        '</ul></span>'
      },
      {
        id: '74f29f07-ec77-4f6d-becd-7415562dd0c9',
        name: 'created',
        type: 'date',
        displayName: 'created',
        cellFilter: 'date:"yy-MM-dd HH:mm"'
      }
    ];
    $scope.gridOptions = {
      enableFiltering: true,
      multiSelect: false,
      data: 'data',
      columnDefs: $scope.columns,
      excludeProperties: ['id', '__t', '__v', '_attachments', '_lk_remove', '_lk_update', '_lk_workflow', '_m_status', 'moderationComments', 'remark', 'instanceId']
    };
    $scope.data = Post.find();

    setTimeout(function () {
      $scope.columns = [
        {field: 'title', displayName: 'aaaaaaaaaaaaaaaaaaaa'}
      ];
    }, 3000)


  }]
);

/**
 * Created by Administrator on 2014/7/14.
 */
angular.module('cmp')
  .directive('datetimePicker', ['$filter', function ($filter) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function ($scope, $element, $attrs, $ctrl) {
        $element.attr('readonly', true);
        var defaultOption = {
          autoclose: true,
          pickerPosition: "bottom-right",
          language: 'zh-CN',
          todayBtn:true
        };
        var option = angular.extend(defaultOption, $scope.$eval($attrs.datetimePicker));
        $element.datetimepicker(option)
          .on('changeDate', function (event) {
            $ctrl.$setViewValue(event.date);
          });
      }
    }
  }]
);

/**
 * Created by Administrator on 2014/11/18.
 */
angular.module('cmp')
  .value('attachmentOption', {
    url: '/api/AttachmentStorages/',
    target: 'doc',
    attr: 'attachments'
  })
  .run(['$rootScope', function ($rootScope) {
    $rootScope.attachmentConfig = {
      url: '/api/Attachments/',
      target: 'doc',
      attr: 'attachments'
    }
  }])
  .directive('ngAttachment', ['FileUploader', 'toastr', '$http', function (FileUploader, toastr, $http) {
    return {
      restrict: 'A',
      //scope: true,
      templateUrl: 'views/plugins/attachment.html',
      compile: function () {
        return {
          pre: function (scope, element, attributes) {
            scope.state=attributes.ngAttachment;
            scope.$watch(scope.attachmentConfig.target, function (newVal, oldVal) {
              if (newVal && !newVal.attachment) {
                newVal[scope.attachmentConfig.attr] = [];
              }
            });
            scope.uploader = new FileUploader({
              scope: scope,
              url: scope.attachmentConfig.url + scope.doc.__t + '/upload'
            });
          },
          post: function (scope, element, attributes) {
            //var options = angular.extend(scope.$eval(attributes.ngAttachment), attachmentOption);
            scope.delAttachment = function ($index, item) {
              $http.delete(scope.attachmentConfig.url + scope.doc.__t + '/files/' + item).success(function (data, status, headers) {
                scope.doc[scope.attachmentConfig.attr].splice($index, 1);
                toastr.success('删除成功');
              });
            };
            scope.uploader.onSuccessItem = function (item, response, status, headers) {
              scope.doc[scope.attachmentConfig.attr].push(item.file.name);
              toastr.success('上传成功');
              item.remove();
            };
          }
        };
      }
    }
  }]);

/**
 * Created by Administrator on 2014/12/5.
 */
angular.module('cmp')
  .directive('repeatTable', ['toastr', function (toastr) {
    return {
      restrict: 'A',
      templateUrl: 'views/plugins/repeat-table.html',
      link:function (scope, element, attributes) {
        var option = scope.$eval(attributes.repeatTable);
        var rows = scope.$eval(option.rows);
        scope.insert = function (location) {
          rows.splice(location, 0, option.item);
        };
        scope.del = function ($index) {
          console.log($index);
          rows.splice($index, 1);
        }
      }
    }
  }]);

/**
 * Created by Administrator on 2014/12/9.
 */
angular.module('cmp')
  .directive('selector', ['$injector', function ($injector) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var selector = scope.$eval(attrs.selector);
        if (scope[selector.service + 'Selector'])return;
        if ($injector.has(selector.service)) {
          $injector.get(selector.service).find({filter: selector.filter}).$promise.then(function (res) {
            scope.$parent[selector.service + 'Selector'] = res;
          });
        } else {
          console.error('Service ' + selector.service + ' Not Found');
        }
      }
    };
  }]);

/**
 * Created by 烬云 on 2014/11/1.
 */
angular.module('cmp')
  .directive('titleLink', ['$filter', 'ListUtil', function ($filter, ListUtil) {
    return {
      link: function (scope, element, attrs) {
        scope.$watch(attrs.titleLink, function () {
          var entity = scope.$eval(attrs.titleLink);
          if (typeof entity === 'string') {
            entity = $filter('source')(entity);
          }
          if (entity.id && entity.__t && entity.title) {
            if (entity) {
              element.text(entity.title)
                .on('click', function () {
                  return ListUtil.action('View', entity);
                });
            }
          }

        }, true);
      }
    };
  }]);

/**
 * Created by Administrator on 2014/12/8.
 */
angular.module('cmp')
  .directive('uiMessage', ['$filter', function ($filter) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        function apply_tooltip_options(element, message) {
          return {
            /* Using Twitter Bootstrap Defaults if no settings are given */
            animation: $(element).data('animation') || true,
            html: $(element).data('html') || false,
            placement: $(element).data('placement') || 'bottom',
            title: $(element).attr('title') || message,
            trigger: $.trim('manual ' + ($(element).data('trigger') || '')),
            delay: $(element).data('delay') || 0,
            container: $(element).data('container') || false
          };
        }

        var defaultMessages = {
          required: 'Required',// "请填写此字段。",
          remote: "请填写此字段。",
          email: "请输入电子邮件地址。",
          url: "请输入一个url。",
          date: "请输入合法的日期",
          dateISO: "请输入合法的日期 (ISO).",
          number: 'Invalid Number',//"请输入合法的数字。",
          equalTo: "请再次输入相同的值",
          accept: "请输入拥有合法后缀名的字符串",
          unique: '您输入的内容已经存在！',
          editable: '请从提示内容中选择一个选项',
          exist: '您输入的内容不存在！',
          undef: 'Please fix this filed'
        };

        element.bind('blur', function () {
          var messages = angular.extend(defaultMessages, scope.$eval(attrs.uiMessage));
          $(element).tooltip('destroy');
          _.some(ngModel.$error, function (value, key) {
            if (value) {
              return $(element).tooltip(apply_tooltip_options(element, messages[key] || messages.undef)).tooltip('show');
            }
          });
        });
      }
    };
  }]);

/**
 * Created by Administrator on 2014/12/10.
 */
angular.module('cmp')
  .directive('unique', ['$injector', function ($injector) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var service = $injector.get(attrs.unique);
        var where = {};
        //scope.$watch(attrs.ngModel, _.throttle(function () {
        //  if (ngModel.$modelValue) {
        //    where[attrs.name] = ngModel.$modelValue;
        //    service.count({where: where}, function (res) {
        //      ngModel.$setValidity('unique', res.count === 0);
        //    });
        //  }else{
        //    ngModel.$setValidity('unique', true);
        //  }
        //}, 500));
        scope.$watch(attrs.ngModel, function () {
          if (ngModel.$modelValue) {
            where[attrs.name] = ngModel.$modelValue;
            service.count({where: where}, function (res) {
              ngModel.$setValidity('unique', res.count === 0);
            });
          }else{
            ngModel.$setValidity('unique', true);
          }
        });
      }
    };
  }]);

/**
 * Created by 烬云 on 2014/11/4.
 */

/**
 * Created by Administrator on 2014/12/12.
 */
angular.module('cmp')
  .filter('source', [function () {
    return function (input) {
      var t = input.split('#');
      return {
        __t: t[0],
        title: t[1],
        id: Number(t[2])
      };
    }
  }]);

/**
 * Created by 烬云 on 2014/11/1.
 */
angular.module('cmp')
  .controller('ListCtrl', ['$scope', '$injector', '$state', '$stateParams', '$q', 'List', 'ACL', 'ListUtil', 'toastr', 'blockUI', 'localStorageService',
    function ($scope, $injector, $state, $stateParams, $q, List, ACL, ListUtil, toastr, blockUI, localStorageService) {
      //检查权限
      console.log(ACL);
      //ACL.checkPermission({
      //  model: $stateParams.list,
      //  principalType: 'USER',
      //  principalId: localStorageService.get('user').id,
      //  property: 'find',
      //  accessType: 'EXECUTE'
      //}).$promise.then(function (perm) {
      //    if (perm.permission === 'DENY') {
      //      toastr.error('Permission Denied');
      //    }
      //  });

      //设置默认gridOptions
      $scope.gridOptions = {
        useExternalSorting: true,
        useExternalFiltering: true,
        multiSelect: false,
        data: 'data',
        columnDefs: [],
        orderByColumnDefs:false,
        excludeProperties: ['id', '__t', '__v', '_attachments', '_lk_remove', '_lk_update', '_lk_workflow', 'moderationComments', 'remark', 'instanceId']
      };
      //grid相关的操作
      $scope.gridAction = {
        add: function () {
          ListUtil.action('New', {__t: $stateParams.list}).result.then(function () {
            $scope.getPagedDate();
          })
        },
        edit: function (entity) {
          ListUtil.action('Edit', entity).result.then(function () {
            $scope.getPagedDate();
          })
        },
        view: function (entity) {
          ListUtil.action('View', entity);
        },
        del: function (entity) {
          entity.$deleteById().then(function (result) {
            toastr.success('删除成功');
            $scope.getPagedDate();
          }, function (reason) {
            toastr.error(reason.data.error.message);
          });
        }
      };

      var service = $injector.get($stateParams.list);
      if ($injector.has($stateParams.list + 'Util')) {
        var util = $injector.get($stateParams.list + 'Util');
        $scope.gridAction = angular.extend($scope.gridAction, util.fn || {});
      }
      var actionMenu = ListUtil.getActionMenu(util ? util.menu : []);

      //List.debugColDef({modelName: $stateParams.list}).$promise.then(function (result) {
      //  $scope.gridOptions.columnDefs = result;
      //  $scope.gridOptions.columnDefs.splice(1, 0, actionMenu);
      //});

      //获取list信息
      $scope.list = List.findOne({
        filter: {
          where: {id: $stateParams.list},
          include: ['views']
        }
      }).$promise.then(function (result) {
          $scope.list = result;
          $scope.views = result.views;
          $scope.currentView = $scope.views[0];
          $scope.currentView.columns.splice(1, 0, actionMenu);
          $scope.gridOptions.columnDefs = $scope.currentView.columns;
          $scope.getPagedDate();
        });

      $scope.filter = {
        include: util ? util.include : [],
        limit: 20,
        page: 1,
        where: {
          //ownerId: 1
        }
      };

      $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;
        $scope.gridApi.core.on.sortChanged($scope, function (grid, sortColumns) {
          $scope.filter.order = _.map(_.sortBy(sortColumns, function (col) {
            return col.sort.priority;
          }), function (col) {
            return [col.name, col.sort.direction.toUpperCase()].join(' ');
          }).join(',');
          $scope.getPagedDate();
        });
      };

      $scope.getPagedDate = function () {
        $scope.filter.offset = ($scope.filter.page - 1) * $scope.filter.limit;
        var gridBlock = blockUI.instances.get('gridBlock');
        gridBlock.start();
        $q.all([
          service.find({filter: $scope.filter}).$promise,
          service.count({where: $scope.filter.where}).$promise
        ]).then(function (result) {
          $scope.data = result[0];
          $scope.totalServerItems = result[1].count;
          gridBlock.stop();
        }, function (reason) {
          toastr.error(reason.data.error.message);
          gridBlock.stop();
        });
      };

    }])
  .controller('ListSettingCtrl', ['$scope', '$injector', '$state', '$stateParams', '$q', 'List', 'ACL', 'ListUtil', 'toastr', 'blockUI', 'localStorageService',
    function ($scope, $injector, $state, $stateParams, $q, List, ACL, ListUtil, toastr, blockUI, localStorageService) {
      console.log('ListSettingCtrl');
      $scope.list = List.findOne({
        filter: {
          where: {title: $stateParams.list},
          include: ['views']
        }
      })
    }]);

/**
 * Created by 烬云 on 2014/11/6.
 */
angular.module('cmp')
  .controller('WorkflowCtrl', ['$scope', '$state', '$stateParams', 'List', 'WorkflowInstance', 'WorkflowAssociation', 'toastr', 'blockUI',
    function ($scope, $state, $stateParams, List, WorkflowInstance, WorkflowAssociation, toastr, blockUI) {

      $scope.wfAss = WorkflowAssociation.find({
        filter: {
          where: {listId: $stateParams.list},
          include: [
            {
              relation: 'workflowTemplate',
              scope: {
                fields: ['title']
              }
            }
          ]
        }
      });

      $scope.initialWorkflow = function (ass) {
        blockUI.start();
        WorkflowInstance.initialWorkflow({
          association: ass,
          initialItem: {
            id: $stateParams.id,
            title: $stateParams.title,
            __t: $stateParams.list
          }
        }).$promise.then(function (res) {
            toastr.success('流程启动成功');
            blockUI.stop();
            $state.reload();
          }, function (reason) {
            blockUI.stop();
            toastr.error(reason.data.error.message);
          })
      };

      $scope.workflowLog = WorkflowInstance.find({
        filter: {
          fields: ['id', 'created', 'workflowState', 'workflowAssociationId'],
          where: {
            workflowList: $stateParams.list,
            workflowItemId: $stateParams.id
          },
          include: [
            {
              relation: 'workflowAssociation',
              scope: {
                fields: ['title']
              }
            }
          ]
        }
      });
    }])
  .controller('WorkflowStateCtrl', ['$scope', '$stateParams', '$state', 'WorkflowInstance',
    function ($scope, $stateParams, $state, WorkflowInstance) {
      $scope.instance = WorkflowInstance.findOne({
        where: {
          id: $stateParams.instanceId
        },
        filter: {
          include: [
            {
              relation: 'initiator',
              scope: {
                fields: ['username', 'email']
              }
            },
            {
              relation: 'workflowAssociation',
              scope: {
                fields: ['title']
              }
            }
          ]
        }
      });
      $scope.cancelWorkflow = function (_id) {
        WorkflowInstance.cancel({_id: _id}).$promise.then(function () {
          $state.transitionTo($state.current, $stateParams, {
            reload: true, inherit: true, notify: true
          });
        })
      };
      //$scope.tasks = Task.selector({filter: JSON.stringify({instance: $stateParams.instanceId})});
      //$scope.isAdmin = Group.inGroup({key: 'title', value: 'Administrator'});
      $scope.examine = function (task) {
        $modal.open({
          templateUrl: task.form + '/view.html',
          resolve: {
            _id: function () {
              return task._id;
            }
          },
          controller: 'TaskViewCtrl'
        })
      };
    }])


/**
 * Created by Administrator on 2014/12/8.
 */
angular.module('cmp')
  .controller('WorkflowSettingCtrl', ['$scope', '$state', '$stateParams', 'List', 'WorkflowInstance', 'WorkflowAssociation', 'toastr', 'blockUI', '$modal',
    function ($scope, $state, $stateParams, List, WorkflowInstance, WorkflowAssociation, toastr, blockUI, $modal) {
      WorkflowAssociation.find({
        filter: {
          where: {listId: $stateParams.list},
          include: [
            {
              relation: 'workflowTemplate',
              scope: {
                fields: ['title']
              }
            },
            {
              relation: 'instances'
            }
          ]
        }
      }).$promise.then(function (associations) {
          $scope.wfAss = associations;
        });
      $scope.addWorkflowAss = function () {
        $modal.open({
          templateUrl: 'views/workflow/addWrk.html',
          controller: 'AddWrkCtrl',
          resolve: {
            doc: function () {
              return {listId: $stateParams.list}
            }
          },
          backdrop: 'static'
        }).result.then(function () {
            $state.reload();
          });
      };

      $scope.setAssociateData = function (ass) {
        $modal.open({
          templateUrl: 'views/workflow-associate/' + ass.workflowTemplate.title + '.html',
          controller: ass.workflowTemplate.title + 'AssCtrl',
          resolve: {
            associateData: function () {
              return angular.copy(ass.associatedData);
            }
          },
          size: 'lg',
          backdrop: 'static'
        }).result.then(function (associateData) {
            ass.associatedData = associateData;
            console.log(associateData);
            return ass.$prototype$updateAttributes().$promoise
          }).then(function (result) {
            toastr.success('Set association data success');
            $state.reload();
          })
      };
    }])
  .controller('AddWrkCtrl', ['$scope', '$state', '$stateParams', 'WorkflowTemplate', 'WorkflowAssociation', 'toastr', 'blockUI', 'doc', '$modalInstance',
    function ($scope, $state, $stateParams, WorkflowTemplate, WorkflowAssociation, toastr, blockUI, doc, $modalInstance) {
      $scope.doc = doc;
      $scope.submit = function () {
        WorkflowAssociation.save($scope.doc).$promise.then(function (ass) {
          toastr.success('Create workflow association success');
          toastr.info('Please set association data');
          $modalInstance.close(ass);
        })
      };
    }]);

/**
 * Created by 烬云 on 2014/11/1.
 */
angular.module('cmp')
  .factory('ListUtil', ['$modal', function ($modal) {
    var listUtil = {};
    listUtil.action = function (action, entity) {
      return $modal.open({
        templateUrl: 'views/' + entity.__t + '/' + action + '.html',
        resolve: {
          id: function () {
            return entity.id || null;
          },
          doc: function () {
            return _.defaults({}, entity);
          }
        },
        //size: 'lg',
        backdrop: 'static',
        controller: entity.__t + action + 'Ctrl'
      });
    };
    listUtil.coreActionMenu = {
      view: '<li role="presentation"><a href role="menuitem" ng-click="col.grid.appScope.gridAction.view(row.entity)"><i class="fa fa-eye"></i>View</a></li>',
      edit: '<li role="presentation"><a href role="menuitem" ng-click="col.grid.appScope.gridAction.edit(row.entity)"><i class="fa fa-pencil"></i>Edit</a></li>',
      del: '<li role="presentation"><a href role="menuitem" ng-click="col.grid.appScope.gridAction.del(row.entity)"><i class="fa fa-trash-o"></i>Delete</a></li>',
      workflow: '<li role="presentation"><a ui-sref="main.workflow({list:row.entity.__t,id:row.entity.id,title:row.entity.title})" role="menuitem" ><i class="fa fa-check-square-o"></i>Workflow</a></li>'
    };
    listUtil.getActionMenu = function (menu) {
      return {
        field: 'action',
        name: 'action',
        displayName: '',
        enableCellEdit: false,
        enableFiltering: false,
        width: 50,
        enableSorting: false,
        enableColumnMenu: false,
        cellTemplate: '<span class="dropdown" dropdown>' +
        '<a href class="dropdown-toggle" dropdown-toggle><i class="fa fa-ellipsis-h"></i></a>' +
        '<ul class="dropdown-menu">' +
        listUtil.coreActionMenu.view +
        listUtil.coreActionMenu.edit +
        listUtil.coreActionMenu.del +
        listUtil.coreActionMenu.workflow +
        menu.join('') +
        '</ul></span>'
      }
    };

    //$scope.buildAction = function () {
    //  if ($scope.addOn) $scope.actionMenu.push($scope.addOn);
    //  var cellTemplate = '<div class="dropdown">' +
    //    '<a data-toggle="dropdown" class="none" ng-click="col.grid.appScope.setPermission(row.entity)"><div class="operate-icon"></div></a>' +
    //    '<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">' + $filter('buildAction')($scope.actionMenu) +
    //    '</ul>' +
    //    '</div>';
    //
    //  return {
    //    field: 'action',
    //    "displayName": '操作',
    //    "cellClass": "align-center",
    //    "groupable": false,
    //    "pinnable": false,
    //    enableColumnResizing: false,
    //    enableSorting: false,
    //    searchable: false,
    //    "minWidth": "50",
    //    "width": "50",
    //    "cellTemplate": cellTemplate
    //  };
    //}
    return listUtil;
  }]);

/**
 * Created by Administrator on 2014/12/10.
 */
angular.module('cmp')
  .controller('ApproveWorkflowAssCtrl', ['$scope', 'User', 'Role', 'toastr', '$modalInstance', 'associateData',
    function ($scope, User, Role, toastr, $modalInstance, associateData) {
      $scope.doc = {copyTo: []};
      Role.selector().$promise.then(function (result) {
        $scope.UserRoleSelector = result;
        return User.find({
          filter: {
            fields: ['id', 'username', 'email']
          }
        }).$promise
      }).then(function (result) {
        $scope.UserSelector = result;
        $scope.doc = associateData || $scope.doc;
        $scope.doc.queue = $scope.doc.queue || [{assignTo: [], type: 'serial'}];
      });
      $scope.submit = function () {
        $modalInstance.close($scope.doc);
      };
    }]);

/**
 * Created by 烬云 on 2014/12/14.
 */

/**
 * Created by Administrator on 2014/12/11.
 */
angular.module('cmp')
  .controller('WorkflowApproveTaskNewCtrl', ['$scope', function ($scope) {

  }])
  .controller('WorkflowApproveTaskEditCtrl', ['$scope', '$modalInstance', '$modal', 'WorkflowTask', 'toastr', 'doc',
    function ($scope, $modalInstance, $modal, WorkflowTask, toastr, doc) {
      $scope.doc = WorkflowTask.findOne({filter: {where: {id: doc.id}}});

      $scope.approve = function (outcome) {
        $scope.doc.status = 'Completed';
        $scope.doc.outcome = 'Approved';
        $scope.submit();
      };
      $scope.reject = function () {
        $scope.doc.status = 'Completed';
        $scope.doc.outcome = 'Rejected';
        $scope.submit();
      };
      $scope.reAssignTask = function () {
        $modal.open({
          templateUrl: 'views/workflow-task/AssignTask/New.html',
          controller: 'ReassignTaskCtrl'
        }).result.then(function (result) {
            $scope.doc.status = 'Completed';
            $scope.doc.outcome = 'ReAssign';
            $scope.doc.extendProp = result;
          });
      };
      $scope.requestChange = function () {
        $scope.doc.status = 'Completed';
        $scope.doc.outcome = 'RequestChange';
      };

      $scope.submit = function () {
        $scope.doc.$prototype$updateAttributes().then(function (result) {
          toastr.success('submit success');
          $modalInstance.close(result);
        })
      }
    }])
  .controller('WorkflowApproveTaskViewCtrl', ['$scope', '$modalInstance', function ($scope) {

  }]);

/**
 * Created by 烬云 on 2014/12/14.
 */
angular.module('cmp')
.factory('WorkflowTaskUtil', [function () {
  return {
    include: [
      {
        relation: 'owner',
        scope: {
          fields: ['username', 'email']
        }
      },
      {
        relation: 'modifier',
        scope: {
          fields: ['username', 'email']
        }
      },
      {
        relation: 'workflowAssociation',
        scope: {
          fields: ['title']
        }
      },
      {
        relation: 'instance',
        scope: {
          fields: ['workflowState']
        }
      },
    ]
  }
}])
