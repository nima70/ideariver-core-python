# Org.OpenAPITools.Model.EventMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventId** | **string** | Unique identifier for the event | 
**AggregateId** | **string** | ID of the entity (aggregate) that this event relates to | 
**AggregateType** | **string** | Type of the aggregate, e.g., &#39;plugin&#39;, &#39;user&#39;, etc. | [optional] 
**VarVersion** | **decimal** | Version of the aggregate&#39;s state after this event | [default to 1M]
**EventType** | **string** | Type of the event, e.g., &#39;PLUGIN_RUN&#39;, &#39;USER_ACTION&#39; | 
**EventSchemaVersion** | **string** | Version of the event schema | [default to "1.0"]
**Source** | **string** | Origin or source of the event, typically the service name | 
**Timestamp** | **DateTime** | ISO 8601 timestamp for when the event occurred | 
**Payload** | **Dictionary&lt;string, Object&gt;** | Data related to the event, this varies depending on event type | [optional] 
**UserId** | **string** | ID of the user initiating the event | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

