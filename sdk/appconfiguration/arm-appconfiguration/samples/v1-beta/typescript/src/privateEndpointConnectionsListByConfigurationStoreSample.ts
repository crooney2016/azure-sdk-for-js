/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppConfigurationManagementClient } from "@azure/arm-appconfiguration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all private endpoint connections for a configuration store.
 *
 * @summary Lists all private endpoint connections for a configuration store.
 * x-ms-original-file: specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/preview/2021-10-01-preview/examples/ConfigurationStoresListPrivateEndpointConnections.json
 */
async function privateEndpointConnectionList() {
  const subscriptionId = "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName = "myResourceGroup";
  const configStoreName = "contoso";
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.privateEndpointConnections.listByConfigurationStore(
    resourceGroupName,
    configStoreName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

privateEndpointConnectionList().catch(console.error);