# EventMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **str** | Unique identifier for the event | 
**aggregate_id** | **str** | ID of the entity (aggregate) that this event relates to | 
**aggregate_type** | **str** | Type of the aggregate, e.g., &#39;plugin&#39;, &#39;user&#39;, etc. | [optional] 
**version** | **float** | Version of the aggregate&#39;s state after this event | [default to 1]
**event_type** | **str** | Type of the event, e.g., &#39;PLUGIN_RUN&#39;, &#39;USER_ACTION&#39; | 
**event_schema_version** | **str** | Version of the event schema | [default to '1.0']
**source** | **str** | Origin or source of the event, typically the service name | 
**timestamp** | **datetime** | ISO 8601 timestamp for when the event occurred | 
**payload** | **Dict[str, object]** | Data related to the event, this varies depending on event type | [optional] 
**user_id** | **str** | ID of the user initiating the event | [optional] 

## Example

```python
from openapi_client.models.event_message import EventMessage

# TODO update the JSON string below
json = "{}"
# create an instance of EventMessage from a JSON string
event_message_instance = EventMessage.from_json(json)
# print the JSON string representation of the object
print(EventMessage.to_json())

# convert the object into a dict
event_message_dict = event_message_instance.to_dict()
# create an instance of EventMessage from a dict
event_message_from_dict = EventMessage.from_dict(event_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


