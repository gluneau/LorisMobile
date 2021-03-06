# loris_api

LorisApi - JavaScript client for loris_api
This document specifies the LORIS REST API.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.3
- Package version: 0.0.3
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install loris_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/loris_api
then install it via:

```shell
    npm install YOUR_USERNAME/loris_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LorisApi = require('loris_api');

var defaultClient = LorisApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new LorisApi.CandidateApi()

var candid = "candid_example"; // {String} The id of the candidate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.candidatesCandidGet(candid, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://greg-dev.loris.ca/api/v0.0.3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LorisApi.CandidateApi* | [**candidatesCandidGet**](docs/CandidateApi.md#candidatesCandidGet) | **GET** /candidates/{candid} | 
*LorisApi.CandidateApi* | [**candidatesCandidVisitGet**](docs/CandidateApi.md#candidatesCandidVisitGet) | **GET** /candidates/{candid}/{visit} | 
*LorisApi.CandidateApi* | [**candidatesCandidVisitInstrumentsGet**](docs/CandidateApi.md#candidatesCandidVisitInstrumentsGet) | **GET** /candidates/{candid}/{visit}/instruments | 
*LorisApi.CandidateApi* | [**candidatesCandidVisitInstrumentsInstrumentDdeGet**](docs/CandidateApi.md#candidatesCandidVisitInstrumentsInstrumentDdeGet) | **GET** /candidates/{candid}/{visit}/instruments/{instrument}/dde | 
*LorisApi.CandidateApi* | [**candidatesCandidVisitInstrumentsInstrumentGet**](docs/CandidateApi.md#candidatesCandidVisitInstrumentsInstrumentGet) | **GET** /candidates/{candid}/{visit}/instruments/{instrument} | 
*LorisApi.CandidateApi* | [**candidatesGet**](docs/CandidateApi.md#candidatesGet) | **GET** /candidates/ | 
*LorisApi.CandidateApi* | [**candidatesPost**](docs/CandidateApi.md#candidatesPost) | **POST** /candidates/ | 
*LorisApi.ImagingApi* | [**candidatesCandidVisitImagesFilenameFormatBrainbrowserGet**](docs/ImagingApi.md#candidatesCandidVisitImagesFilenameFormatBrainbrowserGet) | **GET** /candidates/{candid}/{visit}/images/{filename}/format/brainbrowser | 
*LorisApi.ImagingApi* | [**candidatesCandidVisitImagesFilenameFormatRawGet**](docs/ImagingApi.md#candidatesCandidVisitImagesFilenameFormatRawGet) | **GET** /candidates/{candid}/{visit}/images/{filename}/format/raw | 
*LorisApi.ImagingApi* | [**candidatesCandidVisitImagesFilenameFormatThumbnailGet**](docs/ImagingApi.md#candidatesCandidVisitImagesFilenameFormatThumbnailGet) | **GET** /candidates/{candid}/{visit}/images/{filename}/format/thumbnail | 
*LorisApi.ImagingApi* | [**candidatesCandidVisitImagesFilenameGet**](docs/ImagingApi.md#candidatesCandidVisitImagesFilenameGet) | **GET** /candidates/{candid}/{visit}/images/{filename} | 
*LorisApi.ImagingApi* | [**candidatesCandidVisitImagesFilenameQcGet**](docs/ImagingApi.md#candidatesCandidVisitImagesFilenameQcGet) | **GET** /candidates/{candid}/{visit}/images/{filename}/qc | 
*LorisApi.ImagingApi* | [**candidatesCandidVisitImagesGet**](docs/ImagingApi.md#candidatesCandidVisitImagesGet) | **GET** /candidates/{candid}/{visit}/images | 
*LorisApi.ImagingApi* | [**candidatesCandidVisitQcImagingGet**](docs/ImagingApi.md#candidatesCandidVisitQcImagingGet) | **GET** /candidates/{candid}/{visit}/qc/imaging | 
*LorisApi.LoginApi* | [**authentication**](docs/LoginApi.md#authentication) | **POST** /login | 
*LorisApi.ProjectApi* | [**projectsGet**](docs/ProjectApi.md#projectsGet) | **GET** /projects | 
*LorisApi.ProjectApi* | [**projectsNameCandidatesGet**](docs/ProjectApi.md#projectsNameCandidatesGet) | **GET** /projects/{name}/candidates | 
*LorisApi.ProjectApi* | [**projectsNameGet**](docs/ProjectApi.md#projectsNameGet) | **GET** /projects/{name} | 
*LorisApi.ProjectApi* | [**projectsNameInstrumentsGet**](docs/ProjectApi.md#projectsNameInstrumentsGet) | **GET** /projects/{name}/instruments | 
*LorisApi.ProjectApi* | [**projectsNameInstrumentsInstrumentGet**](docs/ProjectApi.md#projectsNameInstrumentsInstrumentGet) | **GET** /projects/{name}/instruments/{instrument} | 
*LorisApi.UploadApi* | [**candidatesCandidVisitUploadsGet**](docs/UploadApi.md#candidatesCandidVisitUploadsGet) | **GET** /candidates/{candid}/{visit}/uploads/ | 
*LorisApi.UploadApi* | [**candidatesCandidVisitUploadsImagingFilePut**](docs/UploadApi.md#candidatesCandidVisitUploadsImagingFilePut) | **PUT** /candidates/{candid}/{visit}/uploads/{imaging_file} | 


## Documentation for Models

 - [LorisApi.BrainbrowserInfo](docs/BrainbrowserInfo.md)
 - [LorisApi.BrainbrowserSpace](docs/BrainbrowserSpace.md)
 - [LorisApi.Candidate](docs/Candidate.md)
 - [LorisApi.Data](docs/Data.md)
 - [LorisApi.FormElement](docs/FormElement.md)
 - [LorisApi.ImageFileDescription](docs/ImageFileDescription.md)
 - [LorisApi.InlineResponse200](docs/InlineResponse200.md)
 - [LorisApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [LorisApi.Instrument](docs/Instrument.md)
 - [LorisApi.InstrumentData](docs/InstrumentData.md)
 - [LorisApi.InstrumentForm](docs/InstrumentForm.md)
 - [LorisApi.InstrumentFormMeta](docs/InstrumentFormMeta.md)
 - [LorisApi.PSCIDSettings](docs/PSCIDSettings.md)
 - [LorisApi.Project](docs/Project.md)
 - [LorisApi.QcStatus](docs/QcStatus.md)
 - [LorisApi.VisitSummary](docs/VisitSummary.md)
 - [LorisApi.VisitsData](docs/VisitsData.md)
 - [LorisApi.VisitsDataMeta](docs/VisitsDataMeta.md)
 - [LorisApi.VisitsDataStages](docs/VisitsDataStages.md)


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

