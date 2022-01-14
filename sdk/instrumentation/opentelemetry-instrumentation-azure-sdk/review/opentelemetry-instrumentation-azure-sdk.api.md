## API Report File for "@azure/opentelemetry-instrumentation-azure-sdk"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AzureLogger } from '@azure/logger';
import { Instrumentation } from '@opentelemetry/instrumentation';
import { InstrumentationConfig } from '@opentelemetry/instrumentation';

// @public
export interface AzureSdkInstrumentationOptions extends InstrumentationConfig {
}

// @public
export function createAzureSdkInstrumentation(options?: AzureSdkInstrumentationOptions): Instrumentation;

// @public
export const logger: AzureLogger;

// (No @packageDocumentation comment for this package)

```