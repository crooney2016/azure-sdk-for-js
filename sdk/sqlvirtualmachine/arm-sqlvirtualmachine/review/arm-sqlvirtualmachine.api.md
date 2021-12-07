## API Report File for "@azure/arm-sqlvirtualmachine"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export interface AdditionalFeaturesServerConfigurations {
    isRServicesEnabled?: boolean;
}

// @public
export interface AutoBackupSettings {
    backupScheduleType?: BackupScheduleType;
    backupSystemDbs?: boolean;
    enable?: boolean;
    enableEncryption?: boolean;
    fullBackupFrequency?: FullBackupFrequencyType;
    fullBackupStartTime?: number;
    fullBackupWindowHours?: number;
    logBackupFrequency?: number;
    password?: string;
    retentionPeriod?: number;
    storageAccessKey?: string;
    storageAccountUrl?: string;
}

// @public
export interface AutoPatchingSettings {
    dayOfWeek?: DayOfWeek;
    enable?: boolean;
    maintenanceWindowDuration?: number;
    maintenanceWindowStartingHour?: number;
}

// @public
export type AvailabilityGroupListener = ProxyResource & {
    readonly provisioningState?: string;
    availabilityGroupName?: string;
    loadBalancerConfigurations?: LoadBalancerConfiguration[];
    createDefaultAvailabilityGroupIfNotExist?: boolean;
    port?: number;
};

// @public
export interface AvailabilityGroupListenerListResult {
    readonly nextLink?: string;
    readonly value?: AvailabilityGroupListener[];
}

// @public
export interface AvailabilityGroupListeners {
    beginCreateOrUpdate(resourceGroupName: string, sqlVirtualMachineGroupName: string, availabilityGroupListenerName: string, parameters: AvailabilityGroupListener, options?: AvailabilityGroupListenersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<AvailabilityGroupListenersCreateOrUpdateResponse>, AvailabilityGroupListenersCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, sqlVirtualMachineGroupName: string, availabilityGroupListenerName: string, parameters: AvailabilityGroupListener, options?: AvailabilityGroupListenersCreateOrUpdateOptionalParams): Promise<AvailabilityGroupListenersCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, sqlVirtualMachineGroupName: string, availabilityGroupListenerName: string, options?: AvailabilityGroupListenersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, sqlVirtualMachineGroupName: string, availabilityGroupListenerName: string, options?: AvailabilityGroupListenersDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, sqlVirtualMachineGroupName: string, availabilityGroupListenerName: string, options?: AvailabilityGroupListenersGetOptionalParams): Promise<AvailabilityGroupListenersGetResponse>;
    listByGroup(resourceGroupName: string, sqlVirtualMachineGroupName: string, options?: AvailabilityGroupListenersListByGroupOptionalParams): PagedAsyncIterableIterator<AvailabilityGroupListener>;
}

// @public
export interface AvailabilityGroupListenersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type AvailabilityGroupListenersCreateOrUpdateResponse = AvailabilityGroupListener;

// @public
export interface AvailabilityGroupListenersDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface AvailabilityGroupListenersGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AvailabilityGroupListenersGetResponse = AvailabilityGroupListener;

// @public
export interface AvailabilityGroupListenersListByGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AvailabilityGroupListenersListByGroupNextResponse = AvailabilityGroupListenerListResult;

// @public
export interface AvailabilityGroupListenersListByGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AvailabilityGroupListenersListByGroupResponse = AvailabilityGroupListenerListResult;

// @public
export type BackupScheduleType = string;

// @public
export type ClusterConfiguration = string;

// @public
export type ClusterManagerType = string;

// @public
export type ConnectivityType = string;

// @public
export type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

// @public
export type DiskConfigurationType = string;

// @public
export type FullBackupFrequencyType = string;

// @public
export type IdentityType = string;

// @public
export interface KeyVaultCredentialSettings {
    azureKeyVaultUrl?: string;
    credentialName?: string;
    enable?: boolean;
    servicePrincipalName?: string;
    servicePrincipalSecret?: string;
}

// @public
export enum KnownBackupScheduleType {
    // (undocumented)
    Automated = "Automated",
    // (undocumented)
    Manual = "Manual"
}

// @public
export enum KnownClusterConfiguration {
    // (undocumented)
    Domainful = "Domainful"
}

// @public
export enum KnownClusterManagerType {
    // (undocumented)
    Wsfc = "WSFC"
}

// @public
export enum KnownConnectivityType {
    // (undocumented)
    Local = "LOCAL",
    // (undocumented)
    Private = "PRIVATE",
    // (undocumented)
    Public = "PUBLIC"
}

// @public
export enum KnownDiskConfigurationType {
    // (undocumented)
    ADD = "ADD",
    // (undocumented)
    Extend = "EXTEND",
    // (undocumented)
    NEW = "NEW"
}

// @public
export enum KnownFullBackupFrequencyType {
    // (undocumented)
    Daily = "Daily",
    // (undocumented)
    Weekly = "Weekly"
}

// @public
export enum KnownIdentityType {
    // (undocumented)
    SystemAssigned = "SystemAssigned"
}

// @public
export enum KnownOperationOrigin {
    // (undocumented)
    System = "system",
    // (undocumented)
    User = "user"
}

// @public
export enum KnownScaleType {
    // (undocumented)
    HA = "HA"
}

// @public
export enum KnownSqlImageSku {
    // (undocumented)
    Developer = "Developer",
    // (undocumented)
    Enterprise = "Enterprise",
    // (undocumented)
    Express = "Express",
    // (undocumented)
    Standard = "Standard",
    // (undocumented)
    Web = "Web"
}

// @public
export enum KnownSqlManagementMode {
    // (undocumented)
    Full = "Full",
    // (undocumented)
    LightWeight = "LightWeight",
    // (undocumented)
    NoAgent = "NoAgent"
}

// @public
export enum KnownSqlServerLicenseType {
    // (undocumented)
    Ahub = "AHUB",
    // (undocumented)
    DR = "DR",
    // (undocumented)
    Payg = "PAYG"
}

// @public
export enum KnownSqlVmGroupImageSku {
    // (undocumented)
    Developer = "Developer",
    // (undocumented)
    Enterprise = "Enterprise"
}

// @public
export enum KnownSqlWorkloadType {
    // (undocumented)
    DW = "DW",
    // (undocumented)
    General = "GENERAL",
    // (undocumented)
    Oltp = "OLTP"
}

// @public
export enum KnownStorageWorkloadType {
    // (undocumented)
    DW = "DW",
    // (undocumented)
    General = "GENERAL",
    // (undocumented)
    Oltp = "OLTP"
}

// @public
export interface LoadBalancerConfiguration {
    loadBalancerResourceId?: string;
    privateIpAddress?: PrivateIPAddress;
    probePort?: number;
    publicIpAddressResourceId?: string;
    sqlVirtualMachineInstances?: string[];
}

// @public
export interface Operation {
    readonly display?: OperationDisplay;
    readonly name?: string;
    readonly origin?: OperationOrigin;
    readonly properties?: {
        [propertyName: string]: Record<string, unknown>;
    };
}

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export type OperationOrigin = string;

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export interface PrivateIPAddress {
    ipAddress?: string;
    subnetResourceId?: string;
}

// @public
export type ProxyResource = Resource & {};

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface ResourceIdentity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: IdentityType;
}

// @public
export type ScaleType = string;

// @public
export interface ServerConfigurationsManagementSettings {
    additionalFeaturesServerConfigurations?: AdditionalFeaturesServerConfigurations;
    sqlConnectivityUpdateSettings?: SqlConnectivityUpdateSettings;
    sqlStorageUpdateSettings?: SqlStorageUpdateSettings;
    sqlWorkloadTypeUpdateSettings?: SqlWorkloadTypeUpdateSettings;
}

// @public
export interface SqlConnectivityUpdateSettings {
    connectivityType?: ConnectivityType;
    port?: number;
    sqlAuthUpdatePassword?: string;
    sqlAuthUpdateUserName?: string;
}

// @public
export type SqlImageSku = string;

// @public
export type SqlManagementMode = string;

// @public
export type SqlServerLicenseType = string;

// @public
export interface SQLStorageSettings {
    defaultFilePath?: string;
    luns?: number[];
}

// @public
export interface SqlStorageUpdateSettings {
    diskConfigurationType?: DiskConfigurationType;
    diskCount?: number;
    startingDeviceId?: number;
}

// @public
export type SqlVirtualMachine = TrackedResource & {
    identity?: ResourceIdentity;
    virtualMachineResourceId?: string;
    readonly provisioningState?: string;
    sqlImageOffer?: string;
    sqlServerLicenseType?: SqlServerLicenseType;
    sqlManagement?: SqlManagementMode;
    sqlImageSku?: SqlImageSku;
    sqlVirtualMachineGroupResourceId?: string;
    wsfcDomainCredentials?: WsfcDomainCredentials;
    autoPatchingSettings?: AutoPatchingSettings;
    autoBackupSettings?: AutoBackupSettings;
    keyVaultCredentialSettings?: KeyVaultCredentialSettings;
    serverConfigurationsManagementSettings?: ServerConfigurationsManagementSettings;
    storageConfigurationSettings?: StorageConfigurationSettings;
};

// @public
export type SqlVirtualMachineGroup = TrackedResource & {
    readonly provisioningState?: string;
    sqlImageOffer?: string;
    sqlImageSku?: SqlVmGroupImageSku;
    readonly scaleType?: ScaleType;
    readonly clusterManagerType?: ClusterManagerType;
    readonly clusterConfiguration?: ClusterConfiguration;
    wsfcDomainProfile?: WsfcDomainProfile;
};

// @public
export interface SqlVirtualMachineGroupListResult {
    readonly nextLink?: string;
    readonly value?: SqlVirtualMachineGroup[];
}

// @public
export interface SqlVirtualMachineGroups {
    beginCreateOrUpdate(resourceGroupName: string, sqlVirtualMachineGroupName: string, parameters: SqlVirtualMachineGroup, options?: SqlVirtualMachineGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SqlVirtualMachineGroupsCreateOrUpdateResponse>, SqlVirtualMachineGroupsCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, sqlVirtualMachineGroupName: string, parameters: SqlVirtualMachineGroup, options?: SqlVirtualMachineGroupsCreateOrUpdateOptionalParams): Promise<SqlVirtualMachineGroupsCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, sqlVirtualMachineGroupName: string, options?: SqlVirtualMachineGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, sqlVirtualMachineGroupName: string, options?: SqlVirtualMachineGroupsDeleteOptionalParams): Promise<void>;
    beginUpdate(resourceGroupName: string, sqlVirtualMachineGroupName: string, parameters: SqlVirtualMachineGroupUpdate, options?: SqlVirtualMachineGroupsUpdateOptionalParams): Promise<PollerLike<PollOperationState<SqlVirtualMachineGroupsUpdateResponse>, SqlVirtualMachineGroupsUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, sqlVirtualMachineGroupName: string, parameters: SqlVirtualMachineGroupUpdate, options?: SqlVirtualMachineGroupsUpdateOptionalParams): Promise<SqlVirtualMachineGroupsUpdateResponse>;
    get(resourceGroupName: string, sqlVirtualMachineGroupName: string, options?: SqlVirtualMachineGroupsGetOptionalParams): Promise<SqlVirtualMachineGroupsGetResponse>;
    list(options?: SqlVirtualMachineGroupsListOptionalParams): PagedAsyncIterableIterator<SqlVirtualMachineGroup>;
    listByResourceGroup(resourceGroupName: string, options?: SqlVirtualMachineGroupsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<SqlVirtualMachineGroup>;
}

// @public
export interface SqlVirtualMachineGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type SqlVirtualMachineGroupsCreateOrUpdateResponse = SqlVirtualMachineGroup;

// @public
export interface SqlVirtualMachineGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface SqlVirtualMachineGroupsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachineGroupsGetResponse = SqlVirtualMachineGroup;

// @public
export interface SqlVirtualMachineGroupsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachineGroupsListByResourceGroupNextResponse = SqlVirtualMachineGroupListResult;

// @public
export interface SqlVirtualMachineGroupsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachineGroupsListByResourceGroupResponse = SqlVirtualMachineGroupListResult;

// @public
export interface SqlVirtualMachineGroupsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachineGroupsListNextResponse = SqlVirtualMachineGroupListResult;

// @public
export interface SqlVirtualMachineGroupsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachineGroupsListResponse = SqlVirtualMachineGroupListResult;

// @public
export interface SqlVirtualMachineGroupsUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type SqlVirtualMachineGroupsUpdateResponse = SqlVirtualMachineGroup;

// @public
export interface SqlVirtualMachineGroupUpdate {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface SqlVirtualMachineListResult {
    readonly nextLink?: string;
    readonly value?: SqlVirtualMachine[];
}

// @public (undocumented)
export class SqlVirtualMachineManagementClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: SqlVirtualMachineManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    availabilityGroupListeners: AvailabilityGroupListeners;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    sqlVirtualMachineGroups: SqlVirtualMachineGroups;
    // (undocumented)
    sqlVirtualMachines: SqlVirtualMachines;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface SqlVirtualMachineManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface SqlVirtualMachines {
    beginCreateOrUpdate(resourceGroupName: string, sqlVirtualMachineName: string, parameters: SqlVirtualMachine, options?: SqlVirtualMachinesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SqlVirtualMachinesCreateOrUpdateResponse>, SqlVirtualMachinesCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, sqlVirtualMachineName: string, parameters: SqlVirtualMachine, options?: SqlVirtualMachinesCreateOrUpdateOptionalParams): Promise<SqlVirtualMachinesCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, sqlVirtualMachineName: string, options?: SqlVirtualMachinesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, sqlVirtualMachineName: string, options?: SqlVirtualMachinesDeleteOptionalParams): Promise<void>;
    beginUpdate(resourceGroupName: string, sqlVirtualMachineName: string, parameters: SqlVirtualMachineUpdate, options?: SqlVirtualMachinesUpdateOptionalParams): Promise<PollerLike<PollOperationState<SqlVirtualMachinesUpdateResponse>, SqlVirtualMachinesUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, sqlVirtualMachineName: string, parameters: SqlVirtualMachineUpdate, options?: SqlVirtualMachinesUpdateOptionalParams): Promise<SqlVirtualMachinesUpdateResponse>;
    get(resourceGroupName: string, sqlVirtualMachineName: string, options?: SqlVirtualMachinesGetOptionalParams): Promise<SqlVirtualMachinesGetResponse>;
    list(options?: SqlVirtualMachinesListOptionalParams): PagedAsyncIterableIterator<SqlVirtualMachine>;
    listByResourceGroup(resourceGroupName: string, options?: SqlVirtualMachinesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<SqlVirtualMachine>;
    listBySqlVmGroup(resourceGroupName: string, sqlVirtualMachineGroupName: string, options?: SqlVirtualMachinesListBySqlVmGroupOptionalParams): PagedAsyncIterableIterator<SqlVirtualMachine>;
}

// @public
export interface SqlVirtualMachinesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type SqlVirtualMachinesCreateOrUpdateResponse = SqlVirtualMachine;

// @public
export interface SqlVirtualMachinesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface SqlVirtualMachinesGetOptionalParams extends coreClient.OperationOptions {
    expand?: string;
}

// @public
export type SqlVirtualMachinesGetResponse = SqlVirtualMachine;

// @public
export interface SqlVirtualMachinesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachinesListByResourceGroupNextResponse = SqlVirtualMachineListResult;

// @public
export interface SqlVirtualMachinesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachinesListByResourceGroupResponse = SqlVirtualMachineListResult;

// @public
export interface SqlVirtualMachinesListBySqlVmGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachinesListBySqlVmGroupNextResponse = SqlVirtualMachineListResult;

// @public
export interface SqlVirtualMachinesListBySqlVmGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachinesListBySqlVmGroupResponse = SqlVirtualMachineListResult;

// @public
export interface SqlVirtualMachinesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachinesListNextResponse = SqlVirtualMachineListResult;

// @public
export interface SqlVirtualMachinesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SqlVirtualMachinesListResponse = SqlVirtualMachineListResult;

// @public
export interface SqlVirtualMachinesUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type SqlVirtualMachinesUpdateResponse = SqlVirtualMachine;

// @public
export interface SqlVirtualMachineUpdate {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type SqlVmGroupImageSku = string;

// @public
export type SqlWorkloadType = string;

// @public
export interface SqlWorkloadTypeUpdateSettings {
    sqlWorkloadType?: SqlWorkloadType;
}

// @public
export interface StorageConfigurationSettings {
    diskConfigurationType?: DiskConfigurationType;
    sqlDataSettings?: SQLStorageSettings;
    sqlLogSettings?: SQLStorageSettings;
    sqlTempDbSettings?: SQLStorageSettings;
    storageWorkloadType?: StorageWorkloadType;
}

// @public
export type StorageWorkloadType = string;

// @public
export type TrackedResource = Resource & {
    location: string;
    tags?: {
        [propertyName: string]: string;
    };
};

// @public
export interface WsfcDomainCredentials {
    clusterBootstrapAccountPassword?: string;
    clusterOperatorAccountPassword?: string;
    sqlServiceAccountPassword?: string;
}

// @public
export interface WsfcDomainProfile {
    clusterBootstrapAccount?: string;
    clusterOperatorAccount?: string;
    domainFqdn?: string;
    fileShareWitnessPath?: string;
    ouPath?: string;
    sqlServiceAccount?: string;
    storageAccountPrimaryKey?: string;
    storageAccountUrl?: string;
}

// (No @packageDocumentation comment for this package)

```