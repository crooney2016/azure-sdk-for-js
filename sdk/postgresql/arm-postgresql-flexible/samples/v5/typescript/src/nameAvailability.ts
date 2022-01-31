/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Check the availability of name for resource
 *
 * @summary Check the availability of name for resource
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2021-06-01/examples/CheckNameAvailability.json
 */
import {
  NameAvailabilityRequest,
  PostgreSQLManagementClient
} from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";

async function nameAvailability() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const nameAvailabilityRequest: NameAvailabilityRequest = {
    name: "name1",
    type: "Microsoft.DBforPostgreSQL/flexibleServers"
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementClient(credential, subscriptionId);
  const result = await client.checkNameAvailability.execute(
    nameAvailabilityRequest
  );
  console.log(result);
}

nameAvailability().catch(console.error);