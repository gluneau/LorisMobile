# LorisApi.CandidateApi

All URIs are relative to *http://greg-dev.loris.ca/api/v0.0.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**candidatesCandidGet**](CandidateApi.md#candidatesCandidGet) | **GET** /candidates/{candid} | 
[**candidatesCandidVisitGet**](CandidateApi.md#candidatesCandidVisitGet) | **GET** /candidates/{candid}/{visit} | 
[**candidatesCandidVisitInstrumentsGet**](CandidateApi.md#candidatesCandidVisitInstrumentsGet) | **GET** /candidates/{candid}/{visit}/instruments | 
[**candidatesCandidVisitInstrumentsInstrumentDdeGet**](CandidateApi.md#candidatesCandidVisitInstrumentsInstrumentDdeGet) | **GET** /candidates/{candid}/{visit}/instruments/{instrument}/dde | 
[**candidatesCandidVisitInstrumentsInstrumentGet**](CandidateApi.md#candidatesCandidVisitInstrumentsInstrumentGet) | **GET** /candidates/{candid}/{visit}/instruments/{instrument} | 
[**candidatesGet**](CandidateApi.md#candidatesGet) | **GET** /candidates/ | 
[**candidatesPost**](CandidateApi.md#candidatesPost) | **POST** /candidates/ | 


<a name="candidatesCandidGet"></a>
# **candidatesCandidGet**
> InlineResponse2001 candidatesCandidGet(candid)



Get a specific candidate object along with a list of its visit labels

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.CandidateApi();

var candid = "candid_example"; // String | The id of the candidate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidGet(candid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitGet"></a>
# **candidatesCandidVisitGet**
> VisitsData candidatesCandidVisitGet(candid, visit)



Get an object representation of the metadata for that candidate&#39;s visit.

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.CandidateApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitGet(candid, visit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 

### Return type

[**VisitsData**](VisitsData.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitInstrumentsGet"></a>
# **candidatesCandidVisitInstrumentsGet**
> [&#39;String&#39;] candidatesCandidVisitInstrumentsGet(candid, visit)



Get a list of the instruments that were administered for that candidate at that visit

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.CandidateApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitInstrumentsGet(candid, visit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 

### Return type

**[&#39;String&#39;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitInstrumentsInstrumentDdeGet"></a>
# **candidatesCandidVisitInstrumentsInstrumentDdeGet**
> InstrumentData candidatesCandidVisitInstrumentsInstrumentDdeGet(candid, visit, instrument)



Get a list of the instruments that were administered for that candidate at that visit

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.CandidateApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit

var instrument = "instrument_example"; // String | The instrument short_name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitInstrumentsInstrumentDdeGet(candid, visit, instrument, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 
 **instrument** | **String**| The instrument short_name | 

### Return type

[**InstrumentData**](InstrumentData.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesCandidVisitInstrumentsInstrumentGet"></a>
# **candidatesCandidVisitInstrumentsInstrumentGet**
> InstrumentData candidatesCandidVisitInstrumentsInstrumentGet(candid, visit, instrument)



Get a list of the instruments that were administered for that candidate at that visit

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.CandidateApi();

var candid = "candid_example"; // String | The id of the candidate

var visit = "visit_example"; // String | The visit_label of that candidate's visit

var instrument = "instrument_example"; // String | The instrument short_name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesCandidVisitInstrumentsInstrumentGet(candid, visit, instrument, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candid** | **String**| The id of the candidate | 
 **visit** | **String**| The visit_label of that candidate&#39;s visit | 
 **instrument** | **String**| The instrument short_name | 

### Return type

[**InstrumentData**](InstrumentData.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesGet"></a>
# **candidatesGet**
> [Candidate] candidatesGet()



Return a list of all active candidates of the study

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.CandidateApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Candidate]**](Candidate.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="candidatesPost"></a>
# **candidatesPost**
> Candidate candidatesPost(candidate)



Create a new candidate

### Example
```javascript
var LorisApi = require('loris_api');
var defaultClient = LorisApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LorisApi.CandidateApi();

var candidate = new LorisApi.Candidate(); // Candidate | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.candidatesPost(candidate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candidate** | [**Candidate**](Candidate.md)|  | 

### Return type

[**Candidate**](Candidate.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

