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
    define(['ApiClient', 'model/VisitSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VisitSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.LorisApi) {
      root.LorisApi = {};
    }
    root.LorisApi.VisitsDataStages = factory(root.LorisApi.ApiClient, root.LorisApi.VisitSummary);
  }
}(this, function(ApiClient, VisitSummary) {
  'use strict';




  /**
   * The VisitsDataStages model module.
   * @module model/VisitsDataStages
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>VisitsDataStages</code>.
   * @alias module:model/VisitsDataStages
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>VisitsDataStages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VisitsDataStages} obj Optional instance to populate.
   * @return {module:model/VisitsDataStages} The populated <code>VisitsDataStages</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Screening')) {
        obj['Screening'] = VisitSummary.constructFromObject(data['Screening']);
      }
      if (data.hasOwnProperty('Visit')) {
        obj['Visit'] = VisitSummary.constructFromObject(data['Visit']);
      }
      if (data.hasOwnProperty('Approval')) {
        obj['Approval'] = VisitSummary.constructFromObject(data['Approval']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VisitSummary} Screening
   */
  exports.prototype['Screening'] = undefined;
  /**
   * @member {module:model/VisitSummary} Visit
   */
  exports.prototype['Visit'] = undefined;
  /**
   * @member {module:model/VisitSummary} Approval
   */
  exports.prototype['Approval'] = undefined;



  return exports;
}));


