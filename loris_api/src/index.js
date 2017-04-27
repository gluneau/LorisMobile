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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BrainbrowserInfo', 'model/BrainbrowserSpace', 'model/Candidate', 'model/Data', 'model/FormElement', 'model/ImageFileDescription', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/Instrument', 'model/InstrumentData', 'model/InstrumentForm', 'model/InstrumentFormMeta', 'model/PSCIDSettings', 'model/Project', 'model/QcStatus', 'model/VisitSummary', 'model/VisitsData', 'model/VisitsDataMeta', 'model/VisitsDataStages', 'api/CandidateApi', 'api/ImagingApi', 'api/LoginApi', 'api/ProjectApi', 'api/UploadApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BrainbrowserInfo'), require('./model/BrainbrowserSpace'), require('./model/Candidate'), require('./model/Data'), require('./model/FormElement'), require('./model/ImageFileDescription'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/Instrument'), require('./model/InstrumentData'), require('./model/InstrumentForm'), require('./model/InstrumentFormMeta'), require('./model/PSCIDSettings'), require('./model/Project'), require('./model/QcStatus'), require('./model/VisitSummary'), require('./model/VisitsData'), require('./model/VisitsDataMeta'), require('./model/VisitsDataStages'), require('./api/CandidateApi'), require('./api/ImagingApi'), require('./api/LoginApi'), require('./api/ProjectApi'), require('./api/UploadApi'));
  }
}(function(ApiClient, BrainbrowserInfo, BrainbrowserSpace, Candidate, Data, FormElement, ImageFileDescription, InlineResponse200, InlineResponse2001, Instrument, InstrumentData, InstrumentForm, InstrumentFormMeta, PSCIDSettings, Project, QcStatus, VisitSummary, VisitsData, VisitsDataMeta, VisitsDataStages, CandidateApi, ImagingApi, LoginApi, ProjectApi, UploadApi) {
  'use strict';

  /**
   * This_document_specifies_the_LORIS_REST_API_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var LorisApi = require('index'); // See note below*.
   * var xxxSvc = new LorisApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new LorisApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new LorisApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new LorisApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BrainbrowserInfo model constructor.
     * @property {module:model/BrainbrowserInfo}
     */
    BrainbrowserInfo: BrainbrowserInfo,
    /**
     * The BrainbrowserSpace model constructor.
     * @property {module:model/BrainbrowserSpace}
     */
    BrainbrowserSpace: BrainbrowserSpace,
    /**
     * The Candidate model constructor.
     * @property {module:model/Candidate}
     */
    Candidate: Candidate,
    /**
     * The Data model constructor.
     * @property {module:model/Data}
     */
    Data: Data,
    /**
     * The FormElement model constructor.
     * @property {module:model/FormElement}
     */
    FormElement: FormElement,
    /**
     * The ImageFileDescription model constructor.
     * @property {module:model/ImageFileDescription}
     */
    ImageFileDescription: ImageFileDescription,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The Instrument model constructor.
     * @property {module:model/Instrument}
     */
    Instrument: Instrument,
    /**
     * The InstrumentData model constructor.
     * @property {module:model/InstrumentData}
     */
    InstrumentData: InstrumentData,
    /**
     * The InstrumentForm model constructor.
     * @property {module:model/InstrumentForm}
     */
    InstrumentForm: InstrumentForm,
    /**
     * The InstrumentFormMeta model constructor.
     * @property {module:model/InstrumentFormMeta}
     */
    InstrumentFormMeta: InstrumentFormMeta,
    /**
     * The PSCIDSettings model constructor.
     * @property {module:model/PSCIDSettings}
     */
    PSCIDSettings: PSCIDSettings,
    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project: Project,
    /**
     * The QcStatus model constructor.
     * @property {module:model/QcStatus}
     */
    QcStatus: QcStatus,
    /**
     * The VisitSummary model constructor.
     * @property {module:model/VisitSummary}
     */
    VisitSummary: VisitSummary,
    /**
     * The VisitsData model constructor.
     * @property {module:model/VisitsData}
     */
    VisitsData: VisitsData,
    /**
     * The VisitsDataMeta model constructor.
     * @property {module:model/VisitsDataMeta}
     */
    VisitsDataMeta: VisitsDataMeta,
    /**
     * The VisitsDataStages model constructor.
     * @property {module:model/VisitsDataStages}
     */
    VisitsDataStages: VisitsDataStages,
    /**
     * The CandidateApi service constructor.
     * @property {module:api/CandidateApi}
     */
    CandidateApi: CandidateApi,
    /**
     * The ImagingApi service constructor.
     * @property {module:api/ImagingApi}
     */
    ImagingApi: ImagingApi,
    /**
     * The LoginApi service constructor.
     * @property {module:api/LoginApi}
     */
    LoginApi: LoginApi,
    /**
     * The ProjectApi service constructor.
     * @property {module:api/ProjectApi}
     */
    ProjectApi: ProjectApi,
    /**
     * The UploadApi service constructor.
     * @property {module:api/UploadApi}
     */
    UploadApi: UploadApi
  };

  return exports;
}));
