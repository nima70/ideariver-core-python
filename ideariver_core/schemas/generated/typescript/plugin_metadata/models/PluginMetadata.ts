/* tslint:disable */
/* eslint-disable */
/**
 * Plugin Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PluginMetadataAuthor } from './PluginMetadataAuthor';
import {
    PluginMetadataAuthorFromJSON,
    PluginMetadataAuthorFromJSONTyped,
    PluginMetadataAuthorToJSON,
    PluginMetadataAuthorToJSONTyped,
} from './PluginMetadataAuthor';

/**
 * 
 * @export
 * @interface PluginMetadata
 */
export interface PluginMetadata {
    /**
     * Unique identifier for the plugin
     * @type {string}
     * @memberof PluginMetadata
     */
    id: string;
    /**
     * Version of the plugin, following semantic versioning
     * @type {string}
     * @memberof PluginMetadata
     */
    version: string;
    /**
     * Path to the main executable file for the plugin
     * @type {string}
     * @memberof PluginMetadata
     */
    executableFile: string;
    /**
     * 
     * @type {PluginMetadataAuthor}
     * @memberof PluginMetadata
     */
    author: PluginMetadataAuthor;
    /**
     * Input validation schema for the plugin
     * @type {{ [key: string]: any; }}
     * @memberof PluginMetadata
     */
    inputs: { [key: string]: any; };
    /**
     * Expected output from the plugin
     * @type {{ [key: string]: any; }}
     * @memberof PluginMetadata
     */
    outputs?: { [key: string]: any; };
    /**
     * Brief description of the plugin's functionality
     * @type {string}
     * @memberof PluginMetadata
     */
    description: string;
    /**
     * The current status of the plugin
     * @type {string}
     * @memberof PluginMetadata
     */
    status: PluginMetadataStatusEnum;
    /**
     * Timestamp when the plugin was first created
     * @type {Date}
     * @memberof PluginMetadata
     */
    createdAt: Date;
    /**
     * Timestamp when the plugin was last updated
     * @type {Date}
     * @memberof PluginMetadata
     */
    updatedAt: Date;
    /**
     * Tags associated with the plugin for easy categorization
     * @type {Array<string>}
     * @memberof PluginMetadata
     */
    tags?: Array<string>;
    /**
     * URL of the thumbnail image
     * @type {string}
     * @memberof PluginMetadata
     */
    thumbnailUrl?: string;
    /**
     * List of URLs for additional images
     * @type {Array<string>}
     * @memberof PluginMetadata
     */
    imageUrls?: Array<string>;
}


/**
 * @export
 */
export const PluginMetadataStatusEnum = {
    Active: 'active',
    Deprecated: 'deprecated',
    Pending: 'pending'
} as const;
export type PluginMetadataStatusEnum = typeof PluginMetadataStatusEnum[keyof typeof PluginMetadataStatusEnum];


/**
 * Check if a given object implements the PluginMetadata interface.
 */
export function instanceOfPluginMetadata(value: object): value is PluginMetadata {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('executableFile' in value) || value['executableFile'] === undefined) return false;
    if (!('author' in value) || value['author'] === undefined) return false;
    if (!('inputs' in value) || value['inputs'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function PluginMetadataFromJSON(json: any): PluginMetadata {
    return PluginMetadataFromJSONTyped(json, false);
}

export function PluginMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'version': json['version'],
        'executableFile': json['executableFile'],
        'author': PluginMetadataAuthorFromJSON(json['author']),
        'inputs': json['inputs'],
        'outputs': json['outputs'] == null ? undefined : json['outputs'],
        'description': json['description'],
        'status': json['status'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'tags': json['tags'] == null ? undefined : json['tags'],
        'thumbnailUrl': json['thumbnailUrl'] == null ? undefined : json['thumbnailUrl'],
        'imageUrls': json['imageUrls'] == null ? undefined : json['imageUrls'],
    };
}

  export function PluginMetadataToJSON(json: any): PluginMetadata {
      return PluginMetadataToJSONTyped(json, false);
  }

  export function PluginMetadataToJSONTyped(value?: PluginMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'version': value['version'],
        'executableFile': value['executableFile'],
        'author': PluginMetadataAuthorToJSON(value['author']),
        'inputs': value['inputs'],
        'outputs': value['outputs'],
        'description': value['description'],
        'status': value['status'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'tags': value['tags'],
        'thumbnailUrl': value['thumbnailUrl'],
        'imageUrls': value['imageUrls'],
    };
}

