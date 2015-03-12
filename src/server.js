(function(window, angular, undefined) {'use strict';

var urlBase = "http://localhost:3000/api";
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

        // INTERNAL. Use User.defaultAddress() instead.
        "prototype$__get__defaultAddress": {
          url: urlBase + "/Users/:id/defaultAddress",
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
         *  - `redirect` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
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

        /**
         * @ngdoc method
         * @name lbServices.User#register
         * @methodOf lbServices.User
         *
         * @description
         *
         * 注册
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
        "register": {
          url: urlBase + "/Users/register",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPwd
         * @methodOf lbServices.User
         *
         * @description
         *
         * 用户修改密码
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
        "resetPwd": {
          url: urlBase + "/Users/resetPwd",
          method: "POST"
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

        // INTERNAL. Use ProductCategory.owner() instead.
        "::get::ProductCategory::owner": {
          url: urlBase + "/ProductCategories/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use ProductCategory.modifier() instead.
        "::get::ProductCategory::modifier": {
          url: urlBase + "/ProductCategories/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Product.owner() instead.
        "::get::Product::owner": {
          url: urlBase + "/Products/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Product.modifier() instead.
        "::get::Product::modifier": {
          url: urlBase + "/Products/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Brand.owner() instead.
        "::get::Brand::owner": {
          url: urlBase + "/Brands/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Brand.modifier() instead.
        "::get::Brand::modifier": {
          url: urlBase + "/Brands/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Dealer.owner() instead.
        "::get::Dealer::owner": {
          url: urlBase + "/Dealers/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Dealer.modifier() instead.
        "::get::Dealer::modifier": {
          url: urlBase + "/Dealers/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.owner() instead.
        "::get::Manufacturer::owner": {
          url: urlBase + "/Manufacturers/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.modifier() instead.
        "::get::Manufacturer::modifier": {
          url: urlBase + "/Manufacturers/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use DeliverAddress.user() instead.
        "::get::DeliverAddress::user": {
          url: urlBase + "/DeliverAddresses/:id/user",
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
         * @name lbServices.User#defaultAddress
         * @methodOf lbServices.User
         *
         * @description
         *
         * Fetches hasOne relation defaultAddress
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
         * This usually means the response is a `DeliverAddress` object.)
         * </em>
         */
        R.defaultAddress = function() {
          var TargetResource = $injector.get("DeliverAddress");
          var action = TargetResource["::get::User::defaultAddress"];
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

        // INTERNAL. Use ProductCategory.comments.findById() instead.
        "::findById::ProductCategory::comments": {
          url: urlBase + "/ProductCategories/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use ProductCategory.comments.destroyById() instead.
        "::destroyById::ProductCategory::comments": {
          url: urlBase + "/ProductCategories/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ProductCategory.comments.updateById() instead.
        "::updateById::ProductCategory::comments": {
          url: urlBase + "/ProductCategories/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ProductCategory.comments() instead.
        "::get::ProductCategory::comments": {
          isArray: true,
          url: urlBase + "/ProductCategories/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use ProductCategory.comments.create() instead.
        "::create::ProductCategory::comments": {
          url: urlBase + "/ProductCategories/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use ProductCategory.comments.destroyAll() instead.
        "::delete::ProductCategory::comments": {
          url: urlBase + "/ProductCategories/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use ProductCategory.comments.count() instead.
        "::count::ProductCategory::comments": {
          url: urlBase + "/ProductCategories/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Product.comments.findById() instead.
        "::findById::Product::comments": {
          url: urlBase + "/Products/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.comments.destroyById() instead.
        "::destroyById::Product::comments": {
          url: urlBase + "/Products/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.comments.updateById() instead.
        "::updateById::Product::comments": {
          url: urlBase + "/Products/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.comments() instead.
        "::get::Product::comments": {
          isArray: true,
          url: urlBase + "/Products/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Product.comments.create() instead.
        "::create::Product::comments": {
          url: urlBase + "/Products/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Product.comments.destroyAll() instead.
        "::delete::Product::comments": {
          url: urlBase + "/Products/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Product.comments.count() instead.
        "::count::Product::comments": {
          url: urlBase + "/Products/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Brand.comments.findById() instead.
        "::findById::Brand::comments": {
          url: urlBase + "/Brands/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Brand.comments.destroyById() instead.
        "::destroyById::Brand::comments": {
          url: urlBase + "/Brands/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Brand.comments.updateById() instead.
        "::updateById::Brand::comments": {
          url: urlBase + "/Brands/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Brand.comments() instead.
        "::get::Brand::comments": {
          isArray: true,
          url: urlBase + "/Brands/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Brand.comments.create() instead.
        "::create::Brand::comments": {
          url: urlBase + "/Brands/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Brand.comments.destroyAll() instead.
        "::delete::Brand::comments": {
          url: urlBase + "/Brands/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Brand.comments.count() instead.
        "::count::Brand::comments": {
          url: urlBase + "/Brands/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Dealer.comments.findById() instead.
        "::findById::Dealer::comments": {
          url: urlBase + "/Dealers/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Dealer.comments.destroyById() instead.
        "::destroyById::Dealer::comments": {
          url: urlBase + "/Dealers/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Dealer.comments.updateById() instead.
        "::updateById::Dealer::comments": {
          url: urlBase + "/Dealers/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Dealer.comments() instead.
        "::get::Dealer::comments": {
          isArray: true,
          url: urlBase + "/Dealers/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Dealer.comments.create() instead.
        "::create::Dealer::comments": {
          url: urlBase + "/Dealers/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Dealer.comments.destroyAll() instead.
        "::delete::Dealer::comments": {
          url: urlBase + "/Dealers/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Dealer.comments.count() instead.
        "::count::Dealer::comments": {
          url: urlBase + "/Dealers/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.comments.findById() instead.
        "::findById::Manufacturer::comments": {
          url: urlBase + "/Manufacturers/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.comments.destroyById() instead.
        "::destroyById::Manufacturer::comments": {
          url: urlBase + "/Manufacturers/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Manufacturer.comments.updateById() instead.
        "::updateById::Manufacturer::comments": {
          url: urlBase + "/Manufacturers/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Manufacturer.comments() instead.
        "::get::Manufacturer::comments": {
          isArray: true,
          url: urlBase + "/Manufacturers/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.comments.create() instead.
        "::create::Manufacturer::comments": {
          url: urlBase + "/Manufacturers/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Manufacturer.comments.destroyAll() instead.
        "::delete::Manufacturer::comments": {
          url: urlBase + "/Manufacturers/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Manufacturer.comments.count() instead.
        "::count::Manufacturer::comments": {
          url: urlBase + "/Manufacturers/:id/comments/count",
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

        // INTERNAL. Use ProductCategory.instance() instead.
        "::get::ProductCategory::instance": {
          url: urlBase + "/ProductCategories/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Product.instance() instead.
        "::get::Product::instance": {
          url: urlBase + "/Products/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Brand.instance() instead.
        "::get::Brand::instance": {
          url: urlBase + "/Brands/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Dealer.instance() instead.
        "::get::Dealer::instance": {
          url: urlBase + "/Dealers/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.instance() instead.
        "::get::Manufacturer::instance": {
          url: urlBase + "/Manufacturers/:id/instance",
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

/**
 * @ngdoc object
 * @name lbServices.ProductCategory
 * @header lbServices.ProductCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProductCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ProductCategory",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ProductCategories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ProductCategory.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/ProductCategories/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use ProductCategory.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/ProductCategories/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use ProductCategory.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/ProductCategories/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ProductCategory.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/ProductCategories/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ProductCategory.parent() instead.
        "prototype$__get__parent": {
          url: urlBase + "/ProductCategories/:id/parent",
          method: "GET"
        },

        // INTERNAL. Use ProductCategory.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/ProductCategories/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use ProductCategory.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/ProductCategories/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use ProductCategory.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/ProductCategories/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use ProductCategory.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/ProductCategories/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use ProductCategory.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/ProductCategories/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use ProductCategory.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/ProductCategories/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#create
         * @methodOf lbServices.ProductCategory
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
         * This usually means the response is a `ProductCategory` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ProductCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#upsert
         * @methodOf lbServices.ProductCategory
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
         * This usually means the response is a `ProductCategory` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ProductCategories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#exists
         * @methodOf lbServices.ProductCategory
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
          url: urlBase + "/ProductCategories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#findById
         * @methodOf lbServices.ProductCategory
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
         * This usually means the response is a `ProductCategory` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ProductCategories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#find
         * @methodOf lbServices.ProductCategory
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
         * This usually means the response is a `ProductCategory` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ProductCategories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#findOne
         * @methodOf lbServices.ProductCategory
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
         * This usually means the response is a `ProductCategory` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ProductCategories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#updateAll
         * @methodOf lbServices.ProductCategory
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
          url: urlBase + "/ProductCategories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#deleteById
         * @methodOf lbServices.ProductCategory
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
          url: urlBase + "/ProductCategories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#count
         * @methodOf lbServices.ProductCategory
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
          url: urlBase + "/ProductCategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#prototype$updateAttributes
         * @methodOf lbServices.ProductCategory
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
         * This usually means the response is a `ProductCategory` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ProductCategories/:id",
          method: "PUT"
        },

        // INTERNAL. Use ProductCategory.parent() instead.
        "::get::ProductCategory::parent": {
          url: urlBase + "/ProductCategories/:id/parent",
          method: "GET"
        },

        // INTERNAL. Use Product.category() instead.
        "::get::Product::category": {
          url: urlBase + "/Products/:id/category",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#updateOrCreate
         * @methodOf lbServices.ProductCategory
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
         * This usually means the response is a `ProductCategory` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#update
         * @methodOf lbServices.ProductCategory
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
         * @name lbServices.ProductCategory#destroyById
         * @methodOf lbServices.ProductCategory
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
         * @name lbServices.ProductCategory#removeById
         * @methodOf lbServices.ProductCategory
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
    * @name lbServices.ProductCategory#modelName
    * @propertyOf lbServices.ProductCategory
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ProductCategory`.
    */
    R.modelName = "ProductCategory";


        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#instance
         * @methodOf lbServices.ProductCategory
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
          var action = TargetResource["::get::ProductCategory::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ProductCategory.comments
     * @header lbServices.ProductCategory.comments
     * @object
     * @description
     *
     * The object `ProductCategory.comments` groups methods
     * manipulating `ModerationComment` instances related to `ProductCategory`.
     *
     * Call {@link lbServices.ProductCategory#comments ProductCategory.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#comments
         * @methodOf lbServices.ProductCategory
         *
         * @description
         *
         * Queries comments of ProductCategory.
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
          var action = TargetResource["::get::ProductCategory::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory.comments#count
         * @methodOf lbServices.ProductCategory.comments
         *
         * @description
         *
         * Counts comments of ProductCategory.
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
          var action = TargetResource["::count::ProductCategory::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory.comments#create
         * @methodOf lbServices.ProductCategory.comments
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
          var action = TargetResource["::create::ProductCategory::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory.comments#destroyAll
         * @methodOf lbServices.ProductCategory.comments
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
          var action = TargetResource["::delete::ProductCategory::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory.comments#destroyById
         * @methodOf lbServices.ProductCategory.comments
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
          var action = TargetResource["::destroyById::ProductCategory::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory.comments#findById
         * @methodOf lbServices.ProductCategory.comments
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
          var action = TargetResource["::findById::ProductCategory::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory.comments#updateById
         * @methodOf lbServices.ProductCategory.comments
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
          var action = TargetResource["::updateById::ProductCategory::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#parent
         * @methodOf lbServices.ProductCategory
         *
         * @description
         *
         * Fetches belongsTo relation parent
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
         * This usually means the response is a `ProductCategory` object.)
         * </em>
         */
        R.parent = function() {
          var TargetResource = $injector.get("ProductCategory");
          var action = TargetResource["::get::ProductCategory::parent"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#owner
         * @methodOf lbServices.ProductCategory
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
          var action = TargetResource["::get::ProductCategory::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductCategory#modifier
         * @methodOf lbServices.ProductCategory
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
          var action = TargetResource["::get::ProductCategory::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Product
 * @header lbServices.Product
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Product` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Product",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Products/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Product.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/Products/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Product.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/Products/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/Products/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/Products/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.category() instead.
        "prototype$__get__category": {
          url: urlBase + "/Products/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Product.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Products/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Product.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/Products/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Product.brand() instead.
        "prototype$__get__brand": {
          url: urlBase + "/Products/:id/brand",
          method: "GET"
        },

        // INTERNAL. Use Product.manufacturer() instead.
        "prototype$__get__manufacturer": {
          url: urlBase + "/Products/:id/manufacturer",
          method: "GET"
        },

        // INTERNAL. Use Product.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Products/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Product.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Products/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Product.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Products/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Product.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Products/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#create
         * @methodOf lbServices.Product
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
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Products",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#upsert
         * @methodOf lbServices.Product
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
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Products",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#exists
         * @methodOf lbServices.Product
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
          url: urlBase + "/Products/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#findById
         * @methodOf lbServices.Product
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
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Products/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#find
         * @methodOf lbServices.Product
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
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Products",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#findOne
         * @methodOf lbServices.Product
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
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Products/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#updateAll
         * @methodOf lbServices.Product
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
          url: urlBase + "/Products/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#deleteById
         * @methodOf lbServices.Product
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
          url: urlBase + "/Products/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#count
         * @methodOf lbServices.Product
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
          url: urlBase + "/Products/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$updateAttributes
         * @methodOf lbServices.Product
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
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Products/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Product#updateOrCreate
         * @methodOf lbServices.Product
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
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Product#update
         * @methodOf lbServices.Product
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
         * @name lbServices.Product#destroyById
         * @methodOf lbServices.Product
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
         * @name lbServices.Product#removeById
         * @methodOf lbServices.Product
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
    * @name lbServices.Product#modelName
    * @propertyOf lbServices.Product
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Product`.
    */
    R.modelName = "Product";


        /**
         * @ngdoc method
         * @name lbServices.Product#instance
         * @methodOf lbServices.Product
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
          var action = TargetResource["::get::Product::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.comments
     * @header lbServices.Product.comments
     * @object
     * @description
     *
     * The object `Product.comments` groups methods
     * manipulating `ModerationComment` instances related to `Product`.
     *
     * Call {@link lbServices.Product#comments Product.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Product#comments
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries comments of Product.
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
          var action = TargetResource["::get::Product::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.comments#count
         * @methodOf lbServices.Product.comments
         *
         * @description
         *
         * Counts comments of Product.
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
          var action = TargetResource["::count::Product::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.comments#create
         * @methodOf lbServices.Product.comments
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
          var action = TargetResource["::create::Product::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.comments#destroyAll
         * @methodOf lbServices.Product.comments
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
          var action = TargetResource["::delete::Product::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.comments#destroyById
         * @methodOf lbServices.Product.comments
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
          var action = TargetResource["::destroyById::Product::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.comments#findById
         * @methodOf lbServices.Product.comments
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
          var action = TargetResource["::findById::Product::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.comments#updateById
         * @methodOf lbServices.Product.comments
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
          var action = TargetResource["::updateById::Product::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product#category
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Fetches belongsTo relation category
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
         * This usually means the response is a `ProductCategory` object.)
         * </em>
         */
        R.category = function() {
          var TargetResource = $injector.get("ProductCategory");
          var action = TargetResource["::get::Product::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product#owner
         * @methodOf lbServices.Product
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
          var action = TargetResource["::get::Product::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product#modifier
         * @methodOf lbServices.Product
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
          var action = TargetResource["::get::Product::modifier"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product#brand
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Fetches belongsTo relation brand
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
         * This usually means the response is a `Brand` object.)
         * </em>
         */
        R.brand = function() {
          var TargetResource = $injector.get("Brand");
          var action = TargetResource["::get::Product::brand"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product#manufacturer
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Fetches belongsTo relation manufacturer
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
         * This usually means the response is a `Manufacturer` object.)
         * </em>
         */
        R.manufacturer = function() {
          var TargetResource = $injector.get("Manufacturer");
          var action = TargetResource["::get::Product::manufacturer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Brand
 * @header lbServices.Brand
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Brand` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Brand",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Brands/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Brand.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/Brands/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Brand.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/Brands/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Brand.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/Brands/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Brand.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/Brands/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Brand.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Brands/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Brand.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/Brands/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Brand.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Brands/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Brand.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Brands/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Brand.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Brands/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Brand.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Brands/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#create
         * @methodOf lbServices.Brand
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
         * This usually means the response is a `Brand` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Brands",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#upsert
         * @methodOf lbServices.Brand
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
         * This usually means the response is a `Brand` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Brands",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#exists
         * @methodOf lbServices.Brand
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
          url: urlBase + "/Brands/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#findById
         * @methodOf lbServices.Brand
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
         * This usually means the response is a `Brand` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Brands/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#find
         * @methodOf lbServices.Brand
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
         * This usually means the response is a `Brand` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Brands",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#findOne
         * @methodOf lbServices.Brand
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
         * This usually means the response is a `Brand` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Brands/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#updateAll
         * @methodOf lbServices.Brand
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
          url: urlBase + "/Brands/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#deleteById
         * @methodOf lbServices.Brand
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
          url: urlBase + "/Brands/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#count
         * @methodOf lbServices.Brand
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
          url: urlBase + "/Brands/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Brand#prototype$updateAttributes
         * @methodOf lbServices.Brand
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
         * This usually means the response is a `Brand` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Brands/:id",
          method: "PUT"
        },

        // INTERNAL. Use Product.brand() instead.
        "::get::Product::brand": {
          url: urlBase + "/Products/:id/brand",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Brand#updateOrCreate
         * @methodOf lbServices.Brand
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
         * This usually means the response is a `Brand` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Brand#update
         * @methodOf lbServices.Brand
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
         * @name lbServices.Brand#destroyById
         * @methodOf lbServices.Brand
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
         * @name lbServices.Brand#removeById
         * @methodOf lbServices.Brand
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
    * @name lbServices.Brand#modelName
    * @propertyOf lbServices.Brand
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Brand`.
    */
    R.modelName = "Brand";


        /**
         * @ngdoc method
         * @name lbServices.Brand#instance
         * @methodOf lbServices.Brand
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
          var action = TargetResource["::get::Brand::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Brand.comments
     * @header lbServices.Brand.comments
     * @object
     * @description
     *
     * The object `Brand.comments` groups methods
     * manipulating `ModerationComment` instances related to `Brand`.
     *
     * Call {@link lbServices.Brand#comments Brand.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Brand#comments
         * @methodOf lbServices.Brand
         *
         * @description
         *
         * Queries comments of Brand.
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
          var action = TargetResource["::get::Brand::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Brand.comments#count
         * @methodOf lbServices.Brand.comments
         *
         * @description
         *
         * Counts comments of Brand.
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
          var action = TargetResource["::count::Brand::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Brand.comments#create
         * @methodOf lbServices.Brand.comments
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
          var action = TargetResource["::create::Brand::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Brand.comments#destroyAll
         * @methodOf lbServices.Brand.comments
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
          var action = TargetResource["::delete::Brand::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Brand.comments#destroyById
         * @methodOf lbServices.Brand.comments
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
          var action = TargetResource["::destroyById::Brand::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Brand.comments#findById
         * @methodOf lbServices.Brand.comments
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
          var action = TargetResource["::findById::Brand::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Brand.comments#updateById
         * @methodOf lbServices.Brand.comments
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
          var action = TargetResource["::updateById::Brand::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Brand#owner
         * @methodOf lbServices.Brand
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
          var action = TargetResource["::get::Brand::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Brand#modifier
         * @methodOf lbServices.Brand
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
          var action = TargetResource["::get::Brand::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Dealer
 * @header lbServices.Dealer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Dealer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Dealer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Dealers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Dealer.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/Dealers/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Dealer.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/Dealers/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Dealer.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/Dealers/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Dealer.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/Dealers/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Dealer.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Dealers/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Dealer.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/Dealers/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Dealer.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Dealers/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Dealer.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Dealers/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Dealer.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Dealers/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Dealer.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Dealers/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#create
         * @methodOf lbServices.Dealer
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
         * This usually means the response is a `Dealer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Dealers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#upsert
         * @methodOf lbServices.Dealer
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
         * This usually means the response is a `Dealer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Dealers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#exists
         * @methodOf lbServices.Dealer
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
          url: urlBase + "/Dealers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#findById
         * @methodOf lbServices.Dealer
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
         * This usually means the response is a `Dealer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Dealers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#find
         * @methodOf lbServices.Dealer
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
         * This usually means the response is a `Dealer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Dealers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#findOne
         * @methodOf lbServices.Dealer
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
         * This usually means the response is a `Dealer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Dealers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#updateAll
         * @methodOf lbServices.Dealer
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
          url: urlBase + "/Dealers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#deleteById
         * @methodOf lbServices.Dealer
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
          url: urlBase + "/Dealers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#count
         * @methodOf lbServices.Dealer
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
          url: urlBase + "/Dealers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Dealer#prototype$updateAttributes
         * @methodOf lbServices.Dealer
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
         * This usually means the response is a `Dealer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Dealers/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Dealer#updateOrCreate
         * @methodOf lbServices.Dealer
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
         * This usually means the response is a `Dealer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Dealer#update
         * @methodOf lbServices.Dealer
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
         * @name lbServices.Dealer#destroyById
         * @methodOf lbServices.Dealer
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
         * @name lbServices.Dealer#removeById
         * @methodOf lbServices.Dealer
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
    * @name lbServices.Dealer#modelName
    * @propertyOf lbServices.Dealer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Dealer`.
    */
    R.modelName = "Dealer";


        /**
         * @ngdoc method
         * @name lbServices.Dealer#instance
         * @methodOf lbServices.Dealer
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
          var action = TargetResource["::get::Dealer::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Dealer.comments
     * @header lbServices.Dealer.comments
     * @object
     * @description
     *
     * The object `Dealer.comments` groups methods
     * manipulating `ModerationComment` instances related to `Dealer`.
     *
     * Call {@link lbServices.Dealer#comments Dealer.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Dealer#comments
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Queries comments of Dealer.
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
          var action = TargetResource["::get::Dealer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Dealer.comments#count
         * @methodOf lbServices.Dealer.comments
         *
         * @description
         *
         * Counts comments of Dealer.
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
          var action = TargetResource["::count::Dealer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Dealer.comments#create
         * @methodOf lbServices.Dealer.comments
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
          var action = TargetResource["::create::Dealer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Dealer.comments#destroyAll
         * @methodOf lbServices.Dealer.comments
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
          var action = TargetResource["::delete::Dealer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Dealer.comments#destroyById
         * @methodOf lbServices.Dealer.comments
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
          var action = TargetResource["::destroyById::Dealer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Dealer.comments#findById
         * @methodOf lbServices.Dealer.comments
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
          var action = TargetResource["::findById::Dealer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Dealer.comments#updateById
         * @methodOf lbServices.Dealer.comments
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
          var action = TargetResource["::updateById::Dealer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Dealer#owner
         * @methodOf lbServices.Dealer
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
          var action = TargetResource["::get::Dealer::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Dealer#modifier
         * @methodOf lbServices.Dealer
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
          var action = TargetResource["::get::Dealer::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Manufacturer
 * @header lbServices.Manufacturer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Manufacturer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Manufacturer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Manufacturers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Manufacturer.instance() instead.
        "prototype$__get__instance": {
          url: urlBase + "/Manufacturers/:id/instance",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/Manufacturers/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/Manufacturers/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Manufacturer.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/Manufacturers/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Manufacturer.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Manufacturers/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.modifier() instead.
        "prototype$__get__modifier": {
          url: urlBase + "/Manufacturers/:id/modifier",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Manufacturers/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Manufacturer.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Manufacturers/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Manufacturer.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Manufacturers/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Manufacturer.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Manufacturers/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#create
         * @methodOf lbServices.Manufacturer
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
         * This usually means the response is a `Manufacturer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Manufacturers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#upsert
         * @methodOf lbServices.Manufacturer
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
         * This usually means the response is a `Manufacturer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Manufacturers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#exists
         * @methodOf lbServices.Manufacturer
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
          url: urlBase + "/Manufacturers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#findById
         * @methodOf lbServices.Manufacturer
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
         * This usually means the response is a `Manufacturer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Manufacturers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#find
         * @methodOf lbServices.Manufacturer
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
         * This usually means the response is a `Manufacturer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Manufacturers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#findOne
         * @methodOf lbServices.Manufacturer
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
         * This usually means the response is a `Manufacturer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Manufacturers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#updateAll
         * @methodOf lbServices.Manufacturer
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
          url: urlBase + "/Manufacturers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#deleteById
         * @methodOf lbServices.Manufacturer
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
          url: urlBase + "/Manufacturers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#count
         * @methodOf lbServices.Manufacturer
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
          url: urlBase + "/Manufacturers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#prototype$updateAttributes
         * @methodOf lbServices.Manufacturer
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
         * This usually means the response is a `Manufacturer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Manufacturers/:id",
          method: "PUT"
        },

        // INTERNAL. Use Product.manufacturer() instead.
        "::get::Product::manufacturer": {
          url: urlBase + "/Products/:id/manufacturer",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#updateOrCreate
         * @methodOf lbServices.Manufacturer
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
         * This usually means the response is a `Manufacturer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#update
         * @methodOf lbServices.Manufacturer
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
         * @name lbServices.Manufacturer#destroyById
         * @methodOf lbServices.Manufacturer
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
         * @name lbServices.Manufacturer#removeById
         * @methodOf lbServices.Manufacturer
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
    * @name lbServices.Manufacturer#modelName
    * @propertyOf lbServices.Manufacturer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Manufacturer`.
    */
    R.modelName = "Manufacturer";


        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#instance
         * @methodOf lbServices.Manufacturer
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
          var action = TargetResource["::get::Manufacturer::instance"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Manufacturer.comments
     * @header lbServices.Manufacturer.comments
     * @object
     * @description
     *
     * The object `Manufacturer.comments` groups methods
     * manipulating `ModerationComment` instances related to `Manufacturer`.
     *
     * Call {@link lbServices.Manufacturer#comments Manufacturer.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#comments
         * @methodOf lbServices.Manufacturer
         *
         * @description
         *
         * Queries comments of Manufacturer.
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
          var action = TargetResource["::get::Manufacturer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer.comments#count
         * @methodOf lbServices.Manufacturer.comments
         *
         * @description
         *
         * Counts comments of Manufacturer.
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
          var action = TargetResource["::count::Manufacturer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer.comments#create
         * @methodOf lbServices.Manufacturer.comments
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
          var action = TargetResource["::create::Manufacturer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer.comments#destroyAll
         * @methodOf lbServices.Manufacturer.comments
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
          var action = TargetResource["::delete::Manufacturer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer.comments#destroyById
         * @methodOf lbServices.Manufacturer.comments
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
          var action = TargetResource["::destroyById::Manufacturer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer.comments#findById
         * @methodOf lbServices.Manufacturer.comments
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
          var action = TargetResource["::findById::Manufacturer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer.comments#updateById
         * @methodOf lbServices.Manufacturer.comments
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
          var action = TargetResource["::updateById::Manufacturer::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#owner
         * @methodOf lbServices.Manufacturer
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
          var action = TargetResource["::get::Manufacturer::owner"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Manufacturer#modifier
         * @methodOf lbServices.Manufacturer
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
          var action = TargetResource["::get::Manufacturer::modifier"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.DeliverAddress
 * @header lbServices.DeliverAddress
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DeliverAddress` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DeliverAddress",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DeliverAddresses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use DeliverAddress.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/DeliverAddresses/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#create
         * @methodOf lbServices.DeliverAddress
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
         * This usually means the response is a `DeliverAddress` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/DeliverAddresses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#upsert
         * @methodOf lbServices.DeliverAddress
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
         * This usually means the response is a `DeliverAddress` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/DeliverAddresses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#exists
         * @methodOf lbServices.DeliverAddress
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
          url: urlBase + "/DeliverAddresses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#findById
         * @methodOf lbServices.DeliverAddress
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
         * This usually means the response is a `DeliverAddress` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/DeliverAddresses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#find
         * @methodOf lbServices.DeliverAddress
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
         * This usually means the response is a `DeliverAddress` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/DeliverAddresses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#findOne
         * @methodOf lbServices.DeliverAddress
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
         * This usually means the response is a `DeliverAddress` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/DeliverAddresses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#updateAll
         * @methodOf lbServices.DeliverAddress
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
          url: urlBase + "/DeliverAddresses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#deleteById
         * @methodOf lbServices.DeliverAddress
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
          url: urlBase + "/DeliverAddresses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#count
         * @methodOf lbServices.DeliverAddress
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
          url: urlBase + "/DeliverAddresses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#prototype$updateAttributes
         * @methodOf lbServices.DeliverAddress
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
         * This usually means the response is a `DeliverAddress` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/DeliverAddresses/:id",
          method: "PUT"
        },

        // INTERNAL. Use User.defaultAddress() instead.
        "::get::User::defaultAddress": {
          url: urlBase + "/Users/:id/defaultAddress",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#updateOrCreate
         * @methodOf lbServices.DeliverAddress
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
         * This usually means the response is a `DeliverAddress` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#update
         * @methodOf lbServices.DeliverAddress
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
         * @name lbServices.DeliverAddress#destroyById
         * @methodOf lbServices.DeliverAddress
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
         * @name lbServices.DeliverAddress#removeById
         * @methodOf lbServices.DeliverAddress
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
    * @name lbServices.DeliverAddress#modelName
    * @propertyOf lbServices.DeliverAddress
    * @description
    * The name of the model represented by this $resource,
    * i.e. `DeliverAddress`.
    */
    R.modelName = "DeliverAddress";


        /**
         * @ngdoc method
         * @name lbServices.DeliverAddress#user
         * @methodOf lbServices.DeliverAddress
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
          var action = TargetResource["::get::DeliverAddress::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Sms
 * @header lbServices.Sms
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Sms` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Sms",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Sms/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Sms#create
         * @methodOf lbServices.Sms
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
         * This usually means the response is a `Sms` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Sms",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#upsert
         * @methodOf lbServices.Sms
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
         * This usually means the response is a `Sms` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Sms",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#exists
         * @methodOf lbServices.Sms
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
          url: urlBase + "/Sms/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#findById
         * @methodOf lbServices.Sms
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
         * This usually means the response is a `Sms` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Sms/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#find
         * @methodOf lbServices.Sms
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
         * This usually means the response is a `Sms` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Sms",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#findOne
         * @methodOf lbServices.Sms
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
         * This usually means the response is a `Sms` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Sms/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#updateAll
         * @methodOf lbServices.Sms
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
          url: urlBase + "/Sms/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#deleteById
         * @methodOf lbServices.Sms
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
          url: urlBase + "/Sms/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#count
         * @methodOf lbServices.Sms
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
          url: urlBase + "/Sms/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#prototype$updateAttributes
         * @methodOf lbServices.Sms
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
         * This usually means the response is a `Sms` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Sms/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#send
         * @methodOf lbServices.Sms
         *
         * @description
         *
         * 发送短信验证码
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
         * This usually means the response is a `Sms` object.)
         * </em>
         */
        "send": {
          url: urlBase + "/Sms/send",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sms#validateCode
         * @methodOf lbServices.Sms
         *
         * @description
         *
         * 校验短信验证码
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
         * This usually means the response is a `Sms` object.)
         * </em>
         */
        "validateCode": {
          url: urlBase + "/Sms/validateCode",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Sms#updateOrCreate
         * @methodOf lbServices.Sms
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
         * This usually means the response is a `Sms` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Sms#update
         * @methodOf lbServices.Sms
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
         * @name lbServices.Sms#destroyById
         * @methodOf lbServices.Sms
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
         * @name lbServices.Sms#removeById
         * @methodOf lbServices.Sms
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
    * @name lbServices.Sms#modelName
    * @propertyOf lbServices.Sms
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Sms`.
    */
    R.modelName = "Sms";


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
