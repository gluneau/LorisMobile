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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LorisApi);
  }
}(this, function(expect, LorisApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LorisApi.CandidateApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CandidateApi', function() {
    describe('candidatesCandidGet', function() {
      it('should call candidatesCandidGet successfully', function(done) {
        //uncomment below and update the code to test candidatesCandidGet
        //instance.candidatesCandidGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('candidatesCandidVisitGet', function() {
      it('should call candidatesCandidVisitGet successfully', function(done) {
        //uncomment below and update the code to test candidatesCandidVisitGet
        //instance.candidatesCandidVisitGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('candidatesCandidVisitInstrumentsGet', function() {
      it('should call candidatesCandidVisitInstrumentsGet successfully', function(done) {
        //uncomment below and update the code to test candidatesCandidVisitInstrumentsGet
        //instance.candidatesCandidVisitInstrumentsGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('candidatesCandidVisitInstrumentsInstrumentDdeGet', function() {
      it('should call candidatesCandidVisitInstrumentsInstrumentDdeGet successfully', function(done) {
        //uncomment below and update the code to test candidatesCandidVisitInstrumentsInstrumentDdeGet
        //instance.candidatesCandidVisitInstrumentsInstrumentDdeGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('candidatesCandidVisitInstrumentsInstrumentGet', function() {
      it('should call candidatesCandidVisitInstrumentsInstrumentGet successfully', function(done) {
        //uncomment below and update the code to test candidatesCandidVisitInstrumentsInstrumentGet
        //instance.candidatesCandidVisitInstrumentsInstrumentGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('candidatesGet', function() {
      it('should call candidatesGet successfully', function(done) {
        //uncomment below and update the code to test candidatesGet
        //instance.candidatesGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('candidatesPost', function() {
      it('should call candidatesPost successfully', function(done) {
        //uncomment below and update the code to test candidatesPost
        //instance.candidatesPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
