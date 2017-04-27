# LorisApi.ProjectApi

All URIs are relative to *http://greg-dev.loris.ca/api/v0.0.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectsGet**](ProjectApi.md#projectsGet) | **GET** /projects | 
[**projectsNameCandidatesGet**](ProjectApi.md#projectsNameCandidatesGet) | **GET** /projects/{name}/candidates | 
[**projectsNameGet**](ProjectApi.md#projectsNameGet) | **GET** /projects/{name} | 
[**projectsNameInstrumentsGet**](ProjectApi.md#projectsNameInstrumentsGet) | **GET** /projects/{name}/instruments | 
[**projectsNameInstrumentsInstrumentGet**](ProjectApi.md#projectsNameInstrumentsInstrumentGet) | **GET** /projects/{name}/instruments/{instrument} | 


<a name="projectsGet"></a>
# **projectsGet**
> [&#39;String&#39;] projectsGet()



Return a list of the project names in this Loris instance

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ProjectApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectsNameCandidatesGet"></a>
# **projectsNameCandidatesGet**
> [&#39;String&#39;] projectsNameCandidatesGet(name)



Returns all the active candidates in this project

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ProjectApi();

var name = "name_example"; // String | The name of the project


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectsNameCandidatesGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the project | 

### Return type

**[&#39;String&#39;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectsNameGet"></a>
# **projectsNameGet**
> Project projectsNameGet(name)



Return the project definition

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ProjectApi();

var name = "name_example"; // String | The name of the project


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectsNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the project | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectsNameInstrumentsGet"></a>
# **projectsNameInstrumentsGet**
> [Instrument] projectsNameInstrumentsGet(name)



Returns all the instruments used/installed in this project&#39;s test batteries

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ProjectApi();

var name = "name_example"; // String | The name of the project


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectsNameInstrumentsGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the project | 

### Return type

[**[Instrument]**](Instrument.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectsNameInstrumentsInstrumentGet"></a>
# **projectsNameInstrumentsInstrumentGet**
> InstrumentForm projectsNameInstrumentsInstrumentGet(name, instrument)



Returns JSON representation of that instrument

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.ProjectApi();

var name = "name_example"; // String | The name of the project

var instrument = "instrument_example"; // String | The name of the instrument


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectsNameInstrumentsInstrumentGet(name, instrument, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the project | 
 **instrument** | **String**| The name of the instrument | 

### Return type

[**InstrumentForm**](InstrumentForm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

