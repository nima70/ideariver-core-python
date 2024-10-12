# Org.OpenAPITools.Model.PluginMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Guid** | Unique identifier for the plugin | 
**VarVersion** | **string** | Version of the plugin, following semantic versioning | 
**ExecutableFile** | **string** | Path to the main executable file for the plugin | 
**Author** | [**PluginMetadataAuthor**](PluginMetadataAuthor.md) |  | 
**Inputs** | **Dictionary&lt;string, Object&gt;** | Input validation schema for the plugin | 
**Outputs** | **Dictionary&lt;string, Object&gt;** | Expected output from the plugin | [optional] 
**Description** | **string** | Brief description of the plugin&#39;s functionality | 
**Status** | **string** | The current status of the plugin | 
**CreatedAt** | **DateTime** | Timestamp when the plugin was first created | 
**UpdatedAt** | **DateTime** | Timestamp when the plugin was last updated | 
**Tags** | **List&lt;string&gt;** | Tags associated with the plugin for easy categorization | [optional] 
**ThumbnailUrl** | **string** | URL of the thumbnail image | [optional] 
**ImageUrls** | **List&lt;string&gt;** | List of URLs for additional images | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

