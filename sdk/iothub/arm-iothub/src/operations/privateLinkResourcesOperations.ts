/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/privateLinkResourcesOperationsMappers";
import * as Parameters from "../models/parameters";
import { IotHubClientContext } from "../iotHubClientContext";

/** Class representing a PrivateLinkResourcesOperations. */
export class PrivateLinkResourcesOperations {
  private readonly client: IotHubClientContext;

  /**
   * Create a PrivateLinkResourcesOperations.
   * @param {IotHubClientContext} client Reference to the service client.
   */
  constructor(client: IotHubClientContext) {
    this.client = client;
  }

  /**
   * List private link resources for the given IotHub
   * @summary List private link resources
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesListResponse>
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.PrivateLinkResourcesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param callback The callback
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    callback: msRest.ServiceCallback<Models.PrivateLinkResources>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.PrivateLinkResources>
  ): void;
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResources>,
    callback?: msRest.ServiceCallback<Models.PrivateLinkResources>
  ): Promise<Models.PrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listOperationSpec,
      callback
    ) as Promise<Models.PrivateLinkResourcesListResponse>;
  }

  /**
   * Get the specified private link resource for the given IotHub
   * @summary Get the specified private link resource
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param groupId The name of the private link resource
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesGetResponse>
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    groupId: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.PrivateLinkResourcesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param groupId The name of the private link resource
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    groupId: string,
    callback: msRest.ServiceCallback<Models.GroupIdInformation>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param groupId The name of the private link resource
   * @param options The optional parameters
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    groupId: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.GroupIdInformation>
  ): void;
  get(
    resourceGroupName: string,
    resourceName: string,
    groupId: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GroupIdInformation>,
    callback?: msRest.ServiceCallback<Models.GroupIdInformation>
  ): Promise<Models.PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        groupId,
        options
      },
      getOperationSpec,
      callback
    ) as Promise<Models.PrivateLinkResourcesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources",
  urlParameters: [Parameters.subscriptionId, Parameters.resourceGroupName, Parameters.resourceName],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResources
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources/{groupId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.groupId
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.GroupIdInformation
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};
