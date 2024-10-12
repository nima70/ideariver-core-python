# TopicMappingTopics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_queue** | **str** | The queue where tasks are submitted | [optional] 
**response_queue** | **str** | The queue where responses to tasks are sent | [optional] 

## Example

```python
from openapi_client.models.topic_mapping_topics import TopicMappingTopics

# TODO update the JSON string below
json = "{}"
# create an instance of TopicMappingTopics from a JSON string
topic_mapping_topics_instance = TopicMappingTopics.from_json(json)
# print the JSON string representation of the object
print(TopicMappingTopics.to_json())

# convert the object into a dict
topic_mapping_topics_dict = topic_mapping_topics_instance.to_dict()
# create an instance of TopicMappingTopics from a dict
topic_mapping_topics_from_dict = TopicMappingTopics.from_dict(topic_mapping_topics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


