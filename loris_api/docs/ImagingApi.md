# LorisApi.ImagingApi

All URIs are relative to *http://greg-dev.loris.ca/api/v0.0.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**candidatesCandidVisitImagesFilenameFormatBrainbrowserGet**](ImagingApi.md#candidatesCandidVisitImagesFilenameFormatBrainbrowserGet) | **GET** /candidates/{candid}/{visit}/images/{filename}/format/brainbrowser | 
[**candidatesCandidVisitImagesFilenameFormatRawGet**](ImagingApi.md#candidatesCandidVisitImagesFilenameFormatRawGet) | **GET** /candidates/{candid}/{visit}/images/{filename}/format/raw | 
[**candidatesCandidVisitImagesFilenameFormatThumbnailGet**](ImagingApi.md#candidatesCandidVisitImagesFilenameFormatThumbnailGet) | **GET** /candidates/{candid}/{visit}/images/{filename}/format/thumbnail | 
[**candidatesCandidVisitImagesFilenameGet**](ImagingApi.md#candidatesCandidVisitImagesFilenameGet) | **GET** /candidates/{candid}/{visit}/images/{filename} | 
[**candidatesCandidVisitImagesFilenameQcGet**](ImagingApi.md#candidatesCandidVisitImagesFilenameQcGet) | **GET** /candidates/{candid}/{visit}/images/{filename}/qc | 
[**candidatesCandidVisitImagesGet**](ImagingApi.md#candidatesCandidVisitImagesGet) | **GET** /candidates/{candid}/{visit}/images | 
[**candidatesCandidVisitQcImagingGet**](ImagingApi.md#candidatesCandidVisitQcImagingGet) | **GET** /candidates/{candid}/{visit}/qc/imaging | 


<a name="candidatesCandidVisitImagesFilenameFormatBrainbrowserGet"></a>
# **candidatesCandidVisitImagesFilenameFormatBrainbrowserGet**
> BrainbrowserInfo candidatesCandidVisitImagesFilenameFormatBrainbrowserGet(candid, visit, filename)



Get the binary file content with the appropriate MimeType

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ImagingApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit

var filename = "filename_example"; // String | The file name of the image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitImagesFilenameFormatBrainbrowserGet(candid, visit, filename, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 
 **filename** | **String**| The file name of the image | 

### Return type

[**BrainbrowserInfo**](BrainbrowserInfo.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitImagesFilenameFormatRawGet"></a>
# **candidatesCandidVisitImagesFilenameFormatRawGet**
> &#39;String&#39; candidatesCandidVisitImagesFilenameFormatRawGet(candid, visit, filename)



Get the binary file content with the appropriate MimeType

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ImagingApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit

var filename = "filename_example"; // String | The file name of the image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitImagesFilenameFormatRawGet(candid, visit, filename, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 
 **filename** | **String**| The file name of the image | 

### Return type

**&#39;String&#39;**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitImagesFilenameFormatThumbnailGet"></a>
# **candidatesCandidVisitImagesFilenameFormatThumbnailGet**
> &#39;String&#39; candidatesCandidVisitImagesFilenameFormatThumbnailGet(candid, visit, filename)



Get the thumbnail file from an image file as jpeg

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ImagingApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit

var filename = "filename_example"; // String | The file name of the image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitImagesFilenameFormatThumbnailGet(candid, visit, filename, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 
 **filename** | **String**| The file name of the image | 

### Return type

**&#39;String&#39;**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitImagesFilenameGet"></a>
# **candidatesCandidVisitImagesFilenameGet**
> &#39;String&#39; candidatesCandidVisitImagesFilenameGet(candid, visit, filename)



Get the raw file content with the appropriate MimeType

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ImagingApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit

var filename = "filename_example"; // String | The file name of the image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitImagesFilenameGet(candid, visit, filename, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 
 **filename** | **String**| The file name of the image | 

### Return type

**&#39;String&#39;**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitImagesFilenameQcGet"></a>
# **candidatesCandidVisitImagesFilenameQcGet**
> [QcStatus] candidatesCandidVisitImagesFilenameQcGet(candid, visit, filename)



Get the raw file content with the appropriate MimeType

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ImagingApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit

var filename = "filename_example"; // String | The file name of the image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitImagesFilenameQcGet(candid, visit, filename, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 
 **filename** | **String**| The file name of the image | 

### Return type

[**[QcStatus]**](QcStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitImagesGet"></a>
# **candidatesCandidVisitImagesGet**
> [ImageFileDescription] candidatesCandidVisitImagesGet(candid, visit)



Get a list of all the images which have been acquired for that visit

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ImagingApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitImagesGet(candid, visit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 

### Return type

[**[ImageFileDescription]**](ImageFileDescription.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitQcImagingGet"></a>
# **candidatesCandidVisitQcImagingGet**
> QcStatus candidatesCandidVisitQcImagingGet(candid, visit)



Retrieve the session level imaging QC data for a visit

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ImagingApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitQcImagingGet(candid, visit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 

### Return type

[**QcStatus**](QcStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

