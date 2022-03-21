/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Handles requests to list all resources in an App.
 *
 * @summary Handles requests to list all resources in an App.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-03-01-preview/examples/Bindings_List.json
 */
async function bindingsList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.bindings.list(resourceGroupName, serviceName, appName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

bindingsList().catch(console.error);