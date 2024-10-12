# PluginsIdImagesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thumbnail_url** | **str** | URL of the thumbnail image | [optional] 
**image_urls** | **List[str]** | List of image URLs | [optional] 

## Example

```python
from openapi_client.models.plugins_id_images_get200_response import PluginsIdImagesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PluginsIdImagesGet200Response from a JSON string
plugins_id_images_get200_response_instance = PluginsIdImagesGet200Response.from_json(json)
# print the JSON string representation of the object
print(PluginsIdImagesGet200Response.to_json())

# convert the object into a dict
plugins_id_images_get200_response_dict = plugins_id_images_get200_response_instance.to_dict()
# create an instance of PluginsIdImagesGet200Response from a dict
plugins_id_images_get200_response_from_dict = PluginsIdImagesGet200Response.from_dict(plugins_id_images_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


