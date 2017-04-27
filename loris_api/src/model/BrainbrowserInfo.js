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
    define(['ApiClient', 'model/BrainbrowserSpace'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BrainbrowserSpace'));
  } else {
    // Browser globals (root is window)
    if (!root.LorisApi) {
      root.LorisApi = {};
    }
    root.LorisApi.BrainbrowserInfo = factory(root.LorisApi.ApiClient, root.LorisApi.BrainbrowserSpace);
  }
}(this, function(ApiClient, BrainbrowserSpace) {
  'use strict';




  /**
   * The BrainbrowserInfo model module.
   * @module model/BrainbrowserInfo
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>BrainbrowserInfo</code>.
   * @alias module:model/BrainbrowserInfo
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>BrainbrowserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrainbrowserInfo} obj Optional instance to populate.
   * @return {module:model/BrainbrowserInfo} The populated <code>BrainbrowserInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('xspace')) {
        obj['xspace'] = BrainbrowserSpace.constructFromObject(data['xspace']);
      }
      if (data.hasOwnProperty('yspace')) {
        obj['yspace'] = BrainbrowserSpace.constructFromObject(data['yspace']);
      }
      if (data.hasOwnProperty('zspace')) {
        obj['zspace'] = BrainbrowserSpace.constructFromObject(data['zspace']);
      }
      if (data.hasOwnProperty('orderBy')) {
        obj['orderBy'] = ApiClient.convertToType(data['orderBy'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BrainbrowserSpace} xspace
   */
  exports.prototype['xspace'] = undefined;
  /**
   * @member {module:model/BrainbrowserSpace} yspace
   */
  exports.prototype['yspace'] = undefined;
  /**
   * @member {module:model/BrainbrowserSpace} zspace
   */
  exports.prototype['zspace'] = undefined;
  /**
   * @member {Array.<String>} orderBy
   */
  exports.prototype['orderBy'] = undefined;



  return exports;
}));

