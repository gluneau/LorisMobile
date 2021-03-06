/**
 * LORIS API
 * This document specifies the LORIS REST API.
 *
 * OpenAPI spec version: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Data', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Data'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.LorisApi) {
      root.LorisApi = {};
    }
    root.LorisApi.LoginApi = factory(root.LorisApi.ApiClient, root.LorisApi.Data, root.LorisApi.InlineResponse200);
  }
}(this, function(ApiClient, Data, InlineResponse200) {
  'use strict';

  /**
   * Login service.
   * @module api/LoginApi
   * @version 0.0.3
   */

  /**
   * Constructs a new LoginApi. 
   * @alias module:api/LoginApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the authentication operation.
     * @callback module:api/LoginApi~authenticationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Users can be be authenticated using JSON Web Tokens by sending a POST request with their username and password
     * @param {module:model/Data} data Request payload
     * @param {module:api/LoginApi~authenticationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.authentication = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data == undefined || data == null) {
        throw new Error("Missing the required parameter 'data' when calling authentication");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
