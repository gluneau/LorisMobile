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
    define(['ApiClient', 'model/PSCIDSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PSCIDSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.LorisApi) {
      root.LorisApi = {};
    }
    root.LorisApi.Project = factory(root.LorisApi.ApiClient, root.LorisApi.PSCIDSettings);
  }
}(this, function(ApiClient, PSCIDSettings) {
  'use strict';




  /**
   * The Project model module.
   * @module model/Project
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('useEDC')) {
        obj['useEDC'] = ApiClient.convertToType(data['useEDC'], 'Boolean');
      }
      if (data.hasOwnProperty('PSCID')) {
        obj['PSCID'] = PSCIDSettings.constructFromObject(data['PSCID']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} useEDC
   */
  exports.prototype['useEDC'] = undefined;
  /**
   * @member {module:model/PSCIDSettings} PSCID
   */
  exports.prototype['PSCID'] = undefined;



  return exports;
}));


