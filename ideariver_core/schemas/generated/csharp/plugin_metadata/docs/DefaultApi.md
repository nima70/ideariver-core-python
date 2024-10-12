# Org.OpenAPITools.Api.DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**PluginsIdDelete**](DefaultApi.md#pluginsiddelete) | **DELETE** /plugins/{id} | Delete a plugin by ID |
| [**PluginsIdGet**](DefaultApi.md#pluginsidget) | **GET** /plugins/{id} | Get plugin metadata by ID |
| [**PluginsIdImagesFilenameDelete**](DefaultApi.md#pluginsidimagesfilenamedelete) | **DELETE** /plugins/{id}/images/{filename} | Delete a specific image of a plugin |
| [**PluginsIdImagesGet**](DefaultApi.md#pluginsidimagesget) | **GET** /plugins/{id}/images | Get all images of a plugin |
| [**PluginsIdImagesPost**](DefaultApi.md#pluginsidimagespost) | **POST** /plugins/{id}/images | Upload multiple images for a plugin |
| [**PluginsIdImagesThumbnailPut**](DefaultApi.md#pluginsidimagesthumbnailput) | **PUT** /plugins/{id}/images/thumbnail | Set or update the thumbnail image for a plugin |
| [**PluginsIdPut**](DefaultApi.md#pluginsidput) | **PUT** /plugins/{id} | Update plugin metadata |
| [**PluginsPost**](DefaultApi.md#pluginspost) | **POST** /plugins | Upload a new plugin |

<a id="pluginsiddelete"></a>
# **PluginsIdDelete**
> void PluginsIdDelete (Guid id)

Delete a plugin by ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PluginsIdDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new DefaultApi(config);
            var id = "id_example";  // Guid | 

            try
            {
                // Delete a plugin by ID
                apiInstance.PluginsIdDelete(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PluginsIdDelete: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PluginsIdDeleteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a plugin by ID
    apiInstance.PluginsIdDeleteWithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PluginsIdDeleteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** |  |  |

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
| **204** | Plugin successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="pluginsidget"></a>
# **PluginsIdGet**
> PluginMetadata PluginsIdGet (Guid id)

Get plugin metadata by ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PluginsIdGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new DefaultApi(config);
            var id = "id_example";  // Guid | 

            try
            {
                // Get plugin metadata by ID
                PluginMetadata result = apiInstance.PluginsIdGet(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PluginsIdGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PluginsIdGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get plugin metadata by ID
    ApiResponse<PluginMetadata> response = apiInstance.PluginsIdGetWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PluginsIdGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** |  |  |

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
| **200** | Returns plugin metadata |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="pluginsidimagesfilenamedelete"></a>
# **PluginsIdImagesFilenameDelete**
> void PluginsIdImagesFilenameDelete (Guid id, string filename)

Delete a specific image of a plugin

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PluginsIdImagesFilenameDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new DefaultApi(config);
            var id = "id_example";  // Guid | 
            var filename = "filename_example";  // string | 

            try
            {
                // Delete a specific image of a plugin
                apiInstance.PluginsIdImagesFilenameDelete(id, filename);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PluginsIdImagesFilenameDelete: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PluginsIdImagesFilenameDeleteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a specific image of a plugin
    apiInstance.PluginsIdImagesFilenameDeleteWithHttpInfo(id, filename);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PluginsIdImagesFilenameDeleteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** |  |  |
| **filename** | **string** |  |  |

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
| **204** | Image successfully deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="pluginsidimagesget"></a>
# **PluginsIdImagesGet**
> PluginsIdImagesGet200Response PluginsIdImagesGet (Guid id)

Get all images of a plugin

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PluginsIdImagesGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new DefaultApi(config);
            var id = "id_example";  // Guid | 

            try
            {
                // Get all images of a plugin
                PluginsIdImagesGet200Response result = apiInstance.PluginsIdImagesGet(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PluginsIdImagesGet: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PluginsIdImagesGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get all images of a plugin
    ApiResponse<PluginsIdImagesGet200Response> response = apiInstance.PluginsIdImagesGetWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PluginsIdImagesGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** |  |  |

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
| **200** | Returns all images of the plugin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="pluginsidimagespost"></a>
# **PluginsIdImagesPost**
> void PluginsIdImagesPost (Guid id, List<System.IO.Stream>? images = null)

Upload multiple images for a plugin

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PluginsIdImagesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new DefaultApi(config);
            var id = "id_example";  // Guid | 
            var images = new List<System.IO.Stream>?(); // List<System.IO.Stream>? | Images to upload (optional) 

            try
            {
                // Upload multiple images for a plugin
                apiInstance.PluginsIdImagesPost(id, images);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PluginsIdImagesPost: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PluginsIdImagesPostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Upload multiple images for a plugin
    apiInstance.PluginsIdImagesPostWithHttpInfo(id, images);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PluginsIdImagesPostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** |  |  |
| **images** | **List&lt;System.IO.Stream&gt;?** | Images to upload | [optional]  |

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
| **201** | Images successfully uploaded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="pluginsidimagesthumbnailput"></a>
# **PluginsIdImagesThumbnailPut**
> void PluginsIdImagesThumbnailPut (Guid id, PluginsIdImagesThumbnailPutRequest? pluginsIdImagesThumbnailPutRequest = null)

Set or update the thumbnail image for a plugin

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PluginsIdImagesThumbnailPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new DefaultApi(config);
            var id = "id_example";  // Guid | 
            var pluginsIdImagesThumbnailPutRequest = new PluginsIdImagesThumbnailPutRequest?(); // PluginsIdImagesThumbnailPutRequest? |  (optional) 

            try
            {
                // Set or update the thumbnail image for a plugin
                apiInstance.PluginsIdImagesThumbnailPut(id, pluginsIdImagesThumbnailPutRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PluginsIdImagesThumbnailPut: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PluginsIdImagesThumbnailPutWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Set or update the thumbnail image for a plugin
    apiInstance.PluginsIdImagesThumbnailPutWithHttpInfo(id, pluginsIdImagesThumbnailPutRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PluginsIdImagesThumbnailPutWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** |  |  |
| **pluginsIdImagesThumbnailPutRequest** | [**PluginsIdImagesThumbnailPutRequest?**](PluginsIdImagesThumbnailPutRequest?.md) |  | [optional]  |

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
| **200** | Thumbnail successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="pluginsidput"></a>
# **PluginsIdPut**
> void PluginsIdPut (Guid id, PluginMetadata? pluginMetadata = null)

Update plugin metadata

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PluginsIdPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new DefaultApi(config);
            var id = "id_example";  // Guid | 
            var pluginMetadata = new PluginMetadata?(); // PluginMetadata? |  (optional) 

            try
            {
                // Update plugin metadata
                apiInstance.PluginsIdPut(id, pluginMetadata);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PluginsIdPut: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PluginsIdPutWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update plugin metadata
    apiInstance.PluginsIdPutWithHttpInfo(id, pluginMetadata);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PluginsIdPutWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** |  |  |
| **pluginMetadata** | [**PluginMetadata?**](PluginMetadata?.md) |  | [optional]  |

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
| **200** | Plugin metadata successfully updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="pluginspost"></a>
# **PluginsPost**
> void PluginsPost (PluginMetadata? pluginMetadata = null)

Upload a new plugin

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class PluginsPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost";
            var apiInstance = new DefaultApi(config);
            var pluginMetadata = new PluginMetadata?(); // PluginMetadata? |  (optional) 

            try
            {
                // Upload a new plugin
                apiInstance.PluginsPost(pluginMetadata);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.PluginsPost: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PluginsPostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Upload a new plugin
    apiInstance.PluginsPostWithHttpInfo(pluginMetadata);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DefaultApi.PluginsPostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **pluginMetadata** | [**PluginMetadata?**](PluginMetadata?.md) |  | [optional]  |

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
| **201** | Plugin successfully created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

