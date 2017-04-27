# LorisApi.UploadApi

All URIs are relative to *http://greg-dev.loris.ca/api/v0.0.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**candidatesCandidVisitUploadsGet**](UploadApi.md#candidatesCandidVisitUploadsGet) | **GET** /candidates/{candid}/{visit}/uploads/ | 
[**candidatesCandidVisitUploadsImagingFilePut**](UploadApi.md#candidatesCandidVisitUploadsImagingFilePut) | **PUT** /candidates/{candid}/{visit}/uploads/{imaging_file} | 


<a name="candidatesCandidVisitUploadsGet"></a>
# **candidatesCandidVisitUploadsGet**
> &#39;String&#39; candidatesCandidVisitUploadsGet(candid, visit)



Get the list of the uploaded dicom files

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.UploadApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitUploadsGet(candid, visit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 

### Return type

**&#39;String&#39;**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitUploadsImagingFilePut"></a>
# **candidatesCandidVisitUploadsImagingFilePut**
> candidatesCandidVisitUploadsImagingFilePut(candid, visit, imagingFile)



Upload an imaging file

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.UploadApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit

var imagingFile = "/path/to/file.txt"; // File | The imaging file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.candidatesCandidVisitUploadsImagingFilePut(candid, visit, imagingFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 
 **imagingFile** | **File**| The imaging file | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

