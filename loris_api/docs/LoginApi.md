# LorisApi.LoginApi

All URIs are relative to *http://greg-dev.loris.ca/api/v0.0.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authentication**](LoginApi.md#authentication) | **POST** /login | 


<a name="authentication"></a>
# **authentication**
> InlineResponse200 authentication(data)



Users can be be authenticated using JSON Web Tokens by sending a POST request with their username and password

### Example
```javascript
var LorisApi = require('loris_api');

var apiInstance = new LorisApi.LoginApi();

var data = new LorisApi.Data(); // Data | Request payload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authentication(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Data**](Data.md)| Request payload | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

