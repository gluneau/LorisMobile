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
    define(['ApiClient', 'model/VisitsDataMeta', 'model/VisitsDataStages'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VisitsDataMeta'), require('./VisitsDataStages'));
  } else {
    // Browser globals (root is window)
    if (!root.LorisApi) {
      root.LorisApi = {};
    }
    root.LorisApi.VisitsData = factory(root.LorisApi.ApiClient, root.LorisApi.VisitsDataMeta, root.LorisApi.VisitsDataStages);
  }
}(this, function(ApiClient, VisitsDataMeta, VisitsDataStages) {
  'use strict';




  /**
   * The VisitsData model module.
   * @module model/VisitsData
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>VisitsData</code>.
   * @alias module:model/VisitsData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VisitsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VisitsData} obj Optional instance to populate.
   * @return {module:model/VisitsData} The populated <code>VisitsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Meta')) {
        obj['Meta'] = VisitsDataMeta.constructFromObject(data['Meta']);
      }
      if (data.hasOwnProperty('Stages')) {
        obj['Stages'] = VisitsDataStages.constructFromObject(data['Stages']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VisitsDataMeta} Meta
   */
  exports.prototype['Meta'] = undefined;
  /**
   * @member {module:model/VisitsDataStages} Stages
   */
  exports.prototype['Stages'] = undefined;



  return exports;
}));


