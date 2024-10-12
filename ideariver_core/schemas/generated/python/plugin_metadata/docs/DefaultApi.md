# openapi_client.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**plugins_id_delete**](DefaultApi.md#plugins_id_delete) | **DELETE** /plugins/{id} | Delete a plugin by ID
[**plugins_id_get**](DefaultApi.md#plugins_id_get) | **GET** /plugins/{id} | Get plugin metadata by ID
[**plugins_id_images_filename_delete**](DefaultApi.md#plugins_id_images_filename_delete) | **DELETE** /plugins/{id}/images/{filename} | Delete a specific image of a plugin
[**plugins_id_images_get**](DefaultApi.md#plugins_id_images_get) | **GET** /plugins/{id}/images | Get all images of a plugin
[**plugins_id_images_post**](DefaultApi.md#plugins_id_images_post) | **POST** /plugins/{id}/images | Upload multiple images for a plugin
[**plugins_id_images_thumbnail_put**](DefaultApi.md#plugins_id_images_thumbnail_put) | **PUT** /plugins/{id}/images/thumbnail | Set or update the thumbnail image for a plugin
[**plugins_id_put**](DefaultApi.md#plugins_id_put) | **PUT** /plugins/{id} | Update plugin metadata
[**plugins_post**](DefaultApi.md#plugins_post) | **POST** /plugins | Upload a new plugin


# **plugins_id_delete**
> plugins_id_delete(id)

Delete a plugin by ID

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a plugin by ID
        api_instance.plugins_id_delete(id)
    except Exception as e:
        print("Exception when calling DefaultApi->plugins_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Plugin successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plugins_id_get**
> PluginMetadata plugins_id_get(id)

Get plugin metadata by ID

### Example


```python
import openapi_client
from openapi_client.models.plugin_metadata import PluginMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get plugin metadata by ID
        api_response = api_instance.plugins_id_get(id)
        print("The response of DefaultApi->plugins_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->plugins_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**PluginMetadata**](PluginMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns plugin metadata |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plugins_id_images_filename_delete**
> plugins_id_images_filename_delete(id, filename)

Delete a specific image of a plugin

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 
    filename = 'filename_example' # str | 

    try:
        # Delete a specific image of a plugin
        api_instance.plugins_id_images_filename_delete(id, filename)
    except Exception as e:
        print("Exception when calling DefaultApi->plugins_id_images_filename_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **filename** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Image successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plugins_id_images_get**
> PluginsIdImagesGet200Response plugins_id_images_get(id)

Get all images of a plugin

### Example


```python
import openapi_client
from openapi_client.models.plugins_id_images_get200_response import PluginsIdImagesGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get all images of a plugin
        api_response = api_instance.plugins_id_images_get(id)
        print("The response of DefaultApi->plugins_id_images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->plugins_id_images_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**PluginsIdImagesGet200Response**](PluginsIdImagesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all images of the plugin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plugins_id_images_post**
> plugins_id_images_post(id, images=images)

Upload multiple images for a plugin

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 
    images = None # List[bytearray] | Images to upload (optional)

    try:
        # Upload multiple images for a plugin
        api_instance.plugins_id_images_post(id, images=images)
    except Exception as e:
        print("Exception when calling DefaultApi->plugins_id_images_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **images** | **List[bytearray]**| Images to upload | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Images successfully uploaded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plugins_id_images_thumbnail_put**
> plugins_id_images_thumbnail_put(id, plugins_id_images_thumbnail_put_request=plugins_id_images_thumbnail_put_request)

Set or update the thumbnail image for a plugin

### Example


```python
import openapi_client
from openapi_client.models.plugins_id_images_thumbnail_put_request import PluginsIdImagesThumbnailPutRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 
    plugins_id_images_thumbnail_put_request = openapi_client.PluginsIdImagesThumbnailPutRequest() # PluginsIdImagesThumbnailPutRequest |  (optional)

    try:
        # Set or update the thumbnail image for a plugin
        api_instance.plugins_id_images_thumbnail_put(id, plugins_id_images_thumbnail_put_request=plugins_id_images_thumbnail_put_request)
    except Exception as e:
        print("Exception when calling DefaultApi->plugins_id_images_thumbnail_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **plugins_id_images_thumbnail_put_request** | [**PluginsIdImagesThumbnailPutRequest**](PluginsIdImagesThumbnailPutRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Thumbnail successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plugins_id_put**
> plugins_id_put(id, plugin_metadata=plugin_metadata)

Update plugin metadata

### Example


```python
import openapi_client
from openapi_client.models.plugin_metadata import PluginMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 
    plugin_metadata = openapi_client.PluginMetadata() # PluginMetadata |  (optional)

    try:
        # Update plugin metadata
        api_instance.plugins_id_put(id, plugin_metadata=plugin_metadata)
    except Exception as e:
        print("Exception when calling DefaultApi->plugins_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **plugin_metadata** | [**PluginMetadata**](PluginMetadata.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plugin metadata successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **plugins_post**
> plugins_post(plugin_metadata=plugin_metadata)

Upload a new plugin

### Example


```python
import openapi_client
from openapi_client.models.plugin_metadata import PluginMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    plugin_metadata = openapi_client.PluginMetadata() # PluginMetadata |  (optional)

    try:
        # Upload a new plugin
        api_instance.plugins_post(plugin_metadata=plugin_metadata)
    except Exception as e:
        print("Exception when calling DefaultApi->plugins_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plugin_metadata** | [**PluginMetadata**](PluginMetadata.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Plugin successfully created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

