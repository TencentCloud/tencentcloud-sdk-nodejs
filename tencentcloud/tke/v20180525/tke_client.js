/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeClusterEndpointVipStatusRequest = models.DescribeClusterEndpointVipStatusRequest;
const DescribeClusterSecurityRequest = models.DescribeClusterSecurityRequest;
const EksCiVolume = models.EksCiVolume;
const GetTkeAppChartListRequest = models.GetTkeAppChartListRequest;
const DescribeEdgeCVMInstancesRequest = models.DescribeEdgeCVMInstancesRequest;
const InstallLogAgentRequest = models.InstallLogAgentRequest;
const DescribeClusterEndpointVipStatusResponse = models.DescribeClusterEndpointVipStatusResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const ContainerState = models.ContainerState;
const CreateClusterRouteTableResponse = models.CreateClusterRouteTableResponse;
const SubnetInfos = models.SubnetInfos;
const CbsVolume = models.CbsVolume;
const DescribeEKSClustersRequest = models.DescribeEKSClustersRequest;
const DescribePrometheusInstancesOverviewRequest = models.DescribePrometheusInstancesOverviewRequest;
const ServiceAccountAuthenticationOptions = models.ServiceAccountAuthenticationOptions;
const CreateClusterNodePoolRequest = models.CreateClusterNodePoolRequest;
const UpgradeClusterReleaseRequest = models.UpgradeClusterReleaseRequest;
const DescribeEdgeClusterUpgradeInfoRequest = models.DescribeEdgeClusterUpgradeInfoRequest;
const RunInstancesForNode = models.RunInstancesForNode;
const DisableVpcCniNetworkTypeResponse = models.DisableVpcCniNetworkTypeResponse;
const DescribeClusterControllersResponse = models.DescribeClusterControllersResponse;
const DescribeExistedInstancesRequest = models.DescribeExistedInstancesRequest;
const DeletePrometheusClusterAgentRequest = models.DeletePrometheusClusterAgentRequest;
const ClusterLevelChangeRecord = models.ClusterLevelChangeRecord;
const ModifyPrometheusAlertRuleResponse = models.ModifyPrometheusAlertRuleResponse;
const DescribeEKSContainerInstanceEventResponse = models.DescribeEKSContainerInstanceEventResponse;
const RouteTableInfo = models.RouteTableInfo;
const EnableClusterDeletionProtectionResponse = models.EnableClusterDeletionProtectionResponse;
const ClusterAsGroup = models.ClusterAsGroup;
const PrometheusTempModify = models.PrometheusTempModify;
const EnableClusterAuditResponse = models.EnableClusterAuditResponse;
const EnvironmentVariable = models.EnvironmentVariable;
const UpdateImageCacheRequest = models.UpdateImageCacheRequest;
const ManuallyAdded = models.ManuallyAdded;
const Tag = models.Tag;
const DescribePrometheusAgentInstancesRequest = models.DescribePrometheusAgentInstancesRequest;
const ModifyClusterAttributeRequest = models.ModifyClusterAttributeRequest;
const AutoscalingAdded = models.AutoscalingAdded;
const DescribeClustersRequest = models.DescribeClustersRequest;
const UpgradeClusterInstancesRequest = models.UpgradeClusterInstancesRequest;
const ExtensionAddon = models.ExtensionAddon;
const DescribeResourceUsageRequest = models.DescribeResourceUsageRequest;
const PrometheusRecordRuleYamlItem = models.PrometheusRecordRuleYamlItem;
const Label = models.Label;
const PodLimitsByType = models.PodLimitsByType;
const DeletePrometheusTemplateSyncRequest = models.DeletePrometheusTemplateSyncRequest;
const DisableVpcCniNetworkTypeRequest = models.DisableVpcCniNetworkTypeRequest;
const DescribeClusterReleaseDetailsResponse = models.DescribeClusterReleaseDetailsResponse;
const SyncPrometheusTempResponse = models.SyncPrometheusTempResponse;
const CreateEdgeLogConfigRequest = models.CreateEdgeLogConfigRequest;
const CreatePrometheusDashboardResponse = models.CreatePrometheusDashboardResponse;
const CancelClusterReleaseRequest = models.CancelClusterReleaseRequest;
const DescribeTKEEdgeClusterStatusResponse = models.DescribeTKEEdgeClusterStatusResponse;
const ModifyClusterAsGroupOptionAttributeRequest = models.ModifyClusterAsGroupOptionAttributeRequest;
const DescribeClusterStatusRequest = models.DescribeClusterStatusRequest;
const PrometheusConfigItem = models.PrometheusConfigItem;
const DeleteClusterNodePoolRequest = models.DeleteClusterNodePoolRequest;
const DescribeEKSClusterCredentialResponse = models.DescribeEKSClusterCredentialResponse;
const CheckInstancesUpgradeAbleRequest = models.CheckInstancesUpgradeAbleRequest;
const ModifyPrometheusTemplateRequest = models.ModifyPrometheusTemplateRequest;
const DeleteClusterVirtualNodePoolRequest = models.DeleteClusterVirtualNodePoolRequest;
const DescribeImageCachesRequest = models.DescribeImageCachesRequest;
const DescribePrometheusAlertRuleRequest = models.DescribePrometheusAlertRuleRequest;
const DescribeEdgeAvailableExtraArgsRequest = models.DescribeEdgeAvailableExtraArgsRequest;
const ExistedInstance = models.ExistedInstance;
const AddNodeToNodePoolResponse = models.AddNodeToNodePoolResponse;
const PrometheusInstancesOverview = models.PrometheusInstancesOverview;
const DescribePrometheusInstanceInitStatusResponse = models.DescribePrometheusInstanceInitStatusResponse;
const DisableEventPersistenceResponse = models.DisableEventPersistenceResponse;
const UpdateEKSContainerInstanceRequest = models.UpdateEKSContainerInstanceRequest;
const CUDNN = models.CUDNN;
const GetMostSuitableImageCacheResponse = models.GetMostSuitableImageCacheResponse;
const DescribeEdgeAvailableExtraArgsResponse = models.DescribeEdgeAvailableExtraArgsResponse;
const CreatePrometheusRecordRuleYamlRequest = models.CreatePrometheusRecordRuleYamlRequest;
const DescribeEnableVpcCniProgressRequest = models.DescribeEnableVpcCniProgressRequest;
const Instance = models.Instance;
const ModifyClusterAttributeResponse = models.ModifyClusterAttributeResponse;
const RunAutomationServiceEnabled = models.RunAutomationServiceEnabled;
const CreateClusterResponse = models.CreateClusterResponse;
const PrometheusClusterAgentPodConfig = models.PrometheusClusterAgentPodConfig;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const ImageCache = models.ImageCache;
const DeletePrometheusAlertRuleResponse = models.DeletePrometheusAlertRuleResponse;
const DescribeClusterPendingReleasesRequest = models.DescribeClusterPendingReleasesRequest;
const DeletePrometheusConfigResponse = models.DeletePrometheusConfigResponse;
const DescribeEksContainerInstanceLogRequest = models.DescribeEksContainerInstanceLogRequest;
const CreatePrometheusRecordRuleYamlResponse = models.CreatePrometheusRecordRuleYamlResponse;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const PodLimitsInstance = models.PodLimitsInstance;
const ModifyPrometheusTempRequest = models.ModifyPrometheusTempRequest;
const ControllerStatus = models.ControllerStatus;
const DeletePrometheusTempSyncResponse = models.DeletePrometheusTempSyncResponse;
const DescribePrometheusRecordRulesRequest = models.DescribePrometheusRecordRulesRequest;
const VirtualNodePool = models.VirtualNodePool;
const DescribeTKEEdgeClusterStatusRequest = models.DescribeTKEEdgeClusterStatusRequest;
const AcquireClusterAdminRoleResponse = models.AcquireClusterAdminRoleResponse;
const DescribeEdgeClusterInstancesResponse = models.DescribeEdgeClusterInstancesResponse;
const UpdateEdgeClusterVersionRequest = models.UpdateEdgeClusterVersionRequest;
const GetTkeAppChartListResponse = models.GetTkeAppChartListResponse;
const DescribePrometheusTemplateSyncRequest = models.DescribePrometheusTemplateSyncRequest;
const UpgradeAbleInstancesItem = models.UpgradeAbleInstancesItem;
const UpgradeClusterInstancesResponse = models.UpgradeClusterInstancesResponse;
const CustomDriver = models.CustomDriver;
const DescribeClusterAsGroupOptionRequest = models.DescribeClusterAsGroupOptionRequest;
const DescribePrometheusAgentInstancesResponse = models.DescribePrometheusAgentInstancesResponse;
const AddExistedInstancesRequest = models.AddExistedInstancesRequest;
const ClusterAsGroupOption = models.ClusterAsGroupOption;
const DeletePrometheusTempResponse = models.DeletePrometheusTempResponse;
const DescribeClusterNodePoolsRequest = models.DescribeClusterNodePoolsRequest;
const DescribeClusterRouteTablesRequest = models.DescribeClusterRouteTablesRequest;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DeleteClusterRouteRequest = models.DeleteClusterRouteRequest;
const DeleteClusterEndpointRequest = models.DeleteClusterEndpointRequest;
const DeleteClusterVirtualNodeRequest = models.DeleteClusterVirtualNodeRequest;
const DescribeClusterNodePoolDetailRequest = models.DescribeClusterNodePoolDetailRequest;
const DescribePrometheusTempSyncRequest = models.DescribePrometheusTempSyncRequest;
const DescribePrometheusGlobalConfigResponse = models.DescribePrometheusGlobalConfigResponse;
const DescribeClusterReleaseHistoryResponse = models.DescribeClusterReleaseHistoryResponse;
const DescribeImagesRequest = models.DescribeImagesRequest;
const UninstallEdgeLogAgentResponse = models.UninstallEdgeLogAgentResponse;
const AddVpcCniSubnetsRequest = models.AddVpcCniSubnetsRequest;
const DescribePrometheusAlertHistoryResponse = models.DescribePrometheusAlertHistoryResponse;
const ExistedInstancesPara = models.ExistedInstancesPara;
const DescribeClusterAsGroupOptionResponse = models.DescribeClusterAsGroupOptionResponse;
const CreateTKEEdgeClusterResponse = models.CreateTKEEdgeClusterResponse;
const DescribeEdgeClusterExtraArgsResponse = models.DescribeEdgeClusterExtraArgsResponse;
const ResourceDeleteOption = models.ResourceDeleteOption;
const InstallEdgeLogAgentRequest = models.InstallEdgeLogAgentRequest;
const CheckEdgeClusterCIDRRequest = models.CheckEdgeClusterCIDRRequest;
const CreateImageCacheRequest = models.CreateImageCacheRequest;
const UpdateClusterVersionRequest = models.UpdateClusterVersionRequest;
const Probe = models.Probe;
const NodeCountSummary = models.NodeCountSummary;
const EdgeCluster = models.EdgeCluster;
const DescribeClusterNodePoolDetailResponse = models.DescribeClusterNodePoolDetailResponse;
const DescribeEKSContainerInstanceEventRequest = models.DescribeEKSContainerInstanceEventRequest;
const ScaleOutClusterMasterResponse = models.ScaleOutClusterMasterResponse;
const Toleration = models.Toleration;
const CreateEKSContainerInstancesResponse = models.CreateEKSContainerInstancesResponse;
const DeleteEdgeCVMInstancesResponse = models.DeleteEdgeCVMInstancesResponse;
const DescribeClusterKubeconfigResponse = models.DescribeClusterKubeconfigResponse;
const DescribeClusterCommonNamesRequest = models.DescribeClusterCommonNamesRequest;
const NfsVolume = models.NfsVolume;
const PrometheusNotification = models.PrometheusNotification;
const ClusterCondition = models.ClusterCondition;
const NodePool = models.NodePool;
const DescribeEKSClustersResponse = models.DescribeEKSClustersResponse;
const VolumeMount = models.VolumeMount;
const DeleteClusterRequest = models.DeleteClusterRequest;
const DescribeTKEEdgeClustersResponse = models.DescribeTKEEdgeClustersResponse;
const DescribeAvailableTKEEdgeVersionRequest = models.DescribeAvailableTKEEdgeVersionRequest;
const DeleteClusterAsGroupsRequest = models.DeleteClusterAsGroupsRequest;
const ModifyPrometheusAlertPolicyRequest = models.ModifyPrometheusAlertPolicyRequest;
const ForwardApplicationRequestV3Request = models.ForwardApplicationRequestV3Request;
const PrometheusAlertHistoryItem = models.PrometheusAlertHistoryItem;
const PrometheusTemplateSyncTarget = models.PrometheusTemplateSyncTarget;
const DescribePrometheusTemplatesRequest = models.DescribePrometheusTemplatesRequest;
const DescribePrometheusAlertPolicyResponse = models.DescribePrometheusAlertPolicyResponse;
const EnableVpcCniNetworkTypeResponse = models.EnableVpcCniNetworkTypeResponse;
const DescribePrometheusAlertRuleResponse = models.DescribePrometheusAlertRuleResponse;
const EksCiRegionInfo = models.EksCiRegionInfo;
const DescribeEdgeClusterInstancesRequest = models.DescribeEdgeClusterInstancesRequest;
const DisableClusterAuditRequest = models.DisableClusterAuditRequest;
const DescribePrometheusRecordRulesResponse = models.DescribePrometheusRecordRulesResponse;
const DescribePrometheusGlobalNotificationResponse = models.DescribePrometheusGlobalNotificationResponse;
const HttpGet = models.HttpGet;
const ResourceUsage = models.ResourceUsage;
const CreateClusterVirtualNodeRequest = models.CreateClusterVirtualNodeRequest;
const DescribeTKEEdgeClustersRequest = models.DescribeTKEEdgeClustersRequest;
const DescribePrometheusAlertHistoryRequest = models.DescribePrometheusAlertHistoryRequest;
const SetNodePoolNodeProtectionResponse = models.SetNodePoolNodeProtectionResponse;
const DeletePrometheusAlertPolicyRequest = models.DeletePrometheusAlertPolicyRequest;
const ModifyPrometheusAgentExternalLabelsResponse = models.ModifyPrometheusAgentExternalLabelsResponse;
const RollbackClusterReleaseRequest = models.RollbackClusterReleaseRequest;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const UpgradeNodeResetParam = models.UpgradeNodeResetParam;
const DriverVersion = models.DriverVersion;
const CreateClusterInstancesRequest = models.CreateClusterInstancesRequest;
const ClusterCIDRSettings = models.ClusterCIDRSettings;
const Taint = models.Taint;
const ModifyNodePoolInstanceTypesRequest = models.ModifyNodePoolInstanceTypesRequest;
const AddClusterCIDRRequest = models.AddClusterCIDRRequest;
const OIDCConfigAuthenticationOptions = models.OIDCConfigAuthenticationOptions;
const CreateClusterRequest = models.CreateClusterRequest;
const CreateEdgeCVMInstancesRequest = models.CreateEdgeCVMInstancesRequest;
const DescribeClusterReleaseHistoryRequest = models.DescribeClusterReleaseHistoryRequest;
const NodePoolOption = models.NodePoolOption;
const DescribeEdgeClusterExtraArgsRequest = models.DescribeEdgeClusterExtraArgsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DeleteClusterVirtualNodeResponse = models.DeleteClusterVirtualNodeResponse;
const PrometheusAgentInfo = models.PrometheusAgentInfo;
const CreateEdgeCVMInstancesResponse = models.CreateEdgeCVMInstancesResponse;
const DescribeEdgeLogSwitchesResponse = models.DescribeEdgeLogSwitchesResponse;
const CreatePrometheusClusterAgentResponse = models.CreatePrometheusClusterAgentResponse;
const DescribePrometheusTemplatesResponse = models.DescribePrometheusTemplatesResponse;
const UpdateEKSContainerInstanceResponse = models.UpdateEKSContainerInstanceResponse;
const DnsServerConf = models.DnsServerConf;
const EksCluster = models.EksCluster;
const ModifyNodePoolInstanceTypesResponse = models.ModifyNodePoolInstanceTypesResponse;
const PrometheusAlertManagerConfig = models.PrometheusAlertManagerConfig;
const GetClusterLevelPriceResponse = models.GetClusterLevelPriceResponse;
const DescribeResourceUsageResponse = models.DescribeResourceUsageResponse;
const EdgeClusterInternalLB = models.EdgeClusterInternalLB;
const DescribeClusterRoutesResponse = models.DescribeClusterRoutesResponse;
const DescribeAvailableClusterVersionRequest = models.DescribeAvailableClusterVersionRequest;
const UpgradeClusterReleaseResponse = models.UpgradeClusterReleaseResponse;
const DescribePrometheusAlertPolicyRequest = models.DescribePrometheusAlertPolicyRequest;
const DeleteClusterAsGroupsResponse = models.DeleteClusterAsGroupsResponse;
const RegionInstance = models.RegionInstance;
const DescribePrometheusConfigRequest = models.DescribePrometheusConfigRequest;
const DescribeEdgeLogSwitchesRequest = models.DescribeEdgeLogSwitchesRequest;
const DeletePrometheusTemplateRequest = models.DeletePrometheusTemplateRequest;
const DeletePrometheusRecordRuleYamlResponse = models.DeletePrometheusRecordRuleYamlResponse;
const DescribePrometheusTempSyncResponse = models.DescribePrometheusTempSyncResponse;
const Cluster = models.Cluster;
const DescribeClusterEndpointStatusResponse = models.DescribeClusterEndpointStatusResponse;
const DescribeExternalClusterSpecResponse = models.DescribeExternalClusterSpecResponse;
const AddExistedInstancesResponse = models.AddExistedInstancesResponse;
const RestartEKSContainerInstancesResponse = models.RestartEKSContainerInstancesResponse;
const DisableClusterDeletionProtectionResponse = models.DisableClusterDeletionProtectionResponse;
const EnableVpcCniNetworkTypeRequest = models.EnableVpcCniNetworkTypeRequest;
const Container = models.Container;
const CreateClusterEndpointRequest = models.CreateClusterEndpointRequest;
const Exec = models.Exec;
const DescribePrometheusInstanceResponse = models.DescribePrometheusInstanceResponse;
const Capabilities = models.Capabilities;
const UpdateTKEEdgeClusterRequest = models.UpdateTKEEdgeClusterRequest;
const DescribeTKEEdgeExternalKubeconfigResponse = models.DescribeTKEEdgeExternalKubeconfigResponse;
const CreateClusterInstancesResponse = models.CreateClusterInstancesResponse;
const ModifyClusterVirtualNodePoolResponse = models.ModifyClusterVirtualNodePoolResponse;
const InstanceUpgradeClusterStatus = models.InstanceUpgradeClusterStatus;
const DescribeClusterRoutesRequest = models.DescribeClusterRoutesRequest;
const DeleteECMInstancesRequest = models.DeleteECMInstancesRequest;
const ClusterLevelAttribute = models.ClusterLevelAttribute;
const RemoveNodeFromNodePoolResponse = models.RemoveNodeFromNodePoolResponse;
const SetNodePoolNodeProtectionRequest = models.SetNodePoolNodeProtectionRequest;
const EnableClusterAuditRequest = models.EnableClusterAuditRequest;
const CreateClusterRouteTableRequest = models.CreateClusterRouteTableRequest;
const DisableClusterAuditResponse = models.DisableClusterAuditResponse;
const DescribeClusterEndpointsResponse = models.DescribeClusterEndpointsResponse;
const RemoveNodeFromNodePoolRequest = models.RemoveNodeFromNodePoolRequest;
const UninstallEdgeLogAgentRequest = models.UninstallEdgeLogAgentRequest;
const DescribeClusterLevelChangeRecordsRequest = models.DescribeClusterLevelChangeRecordsRequest;
const UpdateClusterVersionResponse = models.UpdateClusterVersionResponse;
const InstanceUpgradePreCheckResultItem = models.InstanceUpgradePreCheckResultItem;
const DeleteClusterNodePoolResponse = models.DeleteClusterNodePoolResponse;
const DeleteImageCachesRequest = models.DeleteImageCachesRequest;
const ReleaseValues = models.ReleaseValues;
const CreateClusterNodePoolResponse = models.CreateClusterNodePoolResponse;
const Filter = models.Filter;
const UpdateTKEEdgeClusterResponse = models.UpdateTKEEdgeClusterResponse;
const EipAttribute = models.EipAttribute;
const DescribeEKSContainerInstancesRequest = models.DescribeEKSContainerInstancesRequest;
const DescribeClusterControllersRequest = models.DescribeClusterControllersRequest;
const ModifyPrometheusAlertRuleRequest = models.ModifyPrometheusAlertRuleRequest;
const DescribeClusterSecurityResponse = models.DescribeClusterSecurityResponse;
const RouteInfo = models.RouteInfo;
const ModifyNodePoolDesiredCapacityAboutAsgResponse = models.ModifyNodePoolDesiredCapacityAboutAsgResponse;
const CreateClusterRouteRequest = models.CreateClusterRouteRequest;
const ModifyClusterEndpointSPRequest = models.ModifyClusterEndpointSPRequest;
const DeleteClusterEndpointResponse = models.DeleteClusterEndpointResponse;
const PrometheusTemplateModify = models.PrometheusTemplateModify;
const RollbackClusterReleaseResponse = models.RollbackClusterReleaseResponse;
const ClusterVersion = models.ClusterVersion;
const InstanceUpgradeProgressItem = models.InstanceUpgradeProgressItem;
const DescribeClusterVirtualNodePoolsRequest = models.DescribeClusterVirtualNodePoolsRequest;
const GetMostSuitableImageCacheRequest = models.GetMostSuitableImageCacheRequest;
const SecurityContext = models.SecurityContext;
const DNSConfig = models.DNSConfig;
const ModifyPrometheusConfigResponse = models.ModifyPrometheusConfigResponse;
const DescribeTKEEdgeExternalKubeconfigRequest = models.DescribeTKEEdgeExternalKubeconfigRequest;
const CreatePrometheusAlertPolicyResponse = models.CreatePrometheusAlertPolicyResponse;
const DNSConfigOption = models.DNSConfigOption;
const DescribeClusterVirtualNodeRequest = models.DescribeClusterVirtualNodeRequest;
const DescribeClusterReleasesResponse = models.DescribeClusterReleasesResponse;
const AddNodeToNodePoolRequest = models.AddNodeToNodePoolRequest;
const DescribeExternalClusterSpecRequest = models.DescribeExternalClusterSpecRequest;
const ModifyPrometheusGlobalNotificationResponse = models.ModifyPrometheusGlobalNotificationResponse;
const UninstallClusterReleaseRequest = models.UninstallClusterReleaseRequest;
const VirtualNode = models.VirtualNode;
const ForwardTKEEdgeApplicationRequestV3Response = models.ForwardTKEEdgeApplicationRequestV3Response;
const CreateClusterVirtualNodePoolRequest = models.CreateClusterVirtualNodePoolRequest;
const ModifyPrometheusConfigRequest = models.ModifyPrometheusConfigRequest;
const AutoScalingGroupRange = models.AutoScalingGroupRange;
const DescribePrometheusGlobalNotificationRequest = models.DescribePrometheusGlobalNotificationRequest;
const ClusterPublicLB = models.ClusterPublicLB;
const DescribePrometheusTemplateSyncResponse = models.DescribePrometheusTemplateSyncResponse;
const ModifyPrometheusTemplateResponse = models.ModifyPrometheusTemplateResponse;
const ModifyPrometheusAlertPolicyResponse = models.ModifyPrometheusAlertPolicyResponse;
const DescribePrometheusClusterAgentsResponse = models.DescribePrometheusClusterAgentsResponse;
const CreatePrometheusConfigResponse = models.CreatePrometheusConfigResponse;
const DescribeClusterAuthenticationOptionsRequest = models.DescribeClusterAuthenticationOptionsRequest;
const DescribeEksContainerInstanceLogResponse = models.DescribeEksContainerInstanceLogResponse;
const DeleteEKSClusterResponse = models.DeleteEKSClusterResponse;
const VersionInstance = models.VersionInstance;
const EksCi = models.EksCi;
const UpdateImageCacheResponse = models.UpdateImageCacheResponse;
const CreatePrometheusConfigRequest = models.CreatePrometheusConfigRequest;
const CreateClusterVirtualNodeResponse = models.CreateClusterVirtualNodeResponse;
const ImageCacheEvent = models.ImageCacheEvent;
const CreatePrometheusClusterAgentRequest = models.CreatePrometheusClusterAgentRequest;
const DescribeClusterNodePoolsResponse = models.DescribeClusterNodePoolsResponse;
const DescribePrometheusInstancesOverviewResponse = models.DescribePrometheusInstancesOverviewResponse;
const DescribeEKSClusterCredentialRequest = models.DescribeEKSClusterCredentialRequest;
const EnableClusterDeletionProtectionRequest = models.EnableClusterDeletionProtectionRequest;
const RestartEKSContainerInstancesRequest = models.RestartEKSContainerInstancesRequest;
const DrainClusterVirtualNodeRequest = models.DrainClusterVirtualNodeRequest;
const DescribeClusterLevelAttributeRequest = models.DescribeClusterLevelAttributeRequest;
const DescribeClusterReleaseDetailsRequest = models.DescribeClusterReleaseDetailsRequest;
const CreateECMInstancesRequest = models.CreateECMInstancesRequest;
const DescribeClusterReleasesRequest = models.DescribeClusterReleasesRequest;
const ClusterCredential = models.ClusterCredential;
const DescribePrometheusOverviewsRequest = models.DescribePrometheusOverviewsRequest;
const DescribeClusterPendingReleasesResponse = models.DescribeClusterPendingReleasesResponse;
const DataDisk = models.DataDisk;
const DeleteEKSClusterRequest = models.DeleteEKSClusterRequest;
const GetUpgradeInstanceProgressResponse = models.GetUpgradeInstanceProgressResponse;
const DescribeExistedInstancesResponse = models.DescribeExistedInstancesResponse;
const CreatePrometheusTemplateRequest = models.CreatePrometheusTemplateRequest;
const DescribeEKSContainerInstancesResponse = models.DescribeEKSContainerInstancesResponse;
const CreatePrometheusAlertRuleResponse = models.CreatePrometheusAlertRuleResponse;
const ECMEnhancedService = models.ECMEnhancedService;
const ModifyClusterAuthenticationOptionsResponse = models.ModifyClusterAuthenticationOptionsResponse;
const EdgeClusterPublicLB = models.EdgeClusterPublicLB;
const EnableEventPersistenceResponse = models.EnableEventPersistenceResponse;
const EnhancedService = models.EnhancedService;
const DeleteEKSContainerInstancesResponse = models.DeleteEKSContainerInstancesResponse;
const UninstallLogAgentRequest = models.UninstallLogAgentRequest;
const TcpSocket = models.TcpSocket;
const TagSpecification = models.TagSpecification;
const PrometheusNotificationItem = models.PrometheusNotificationItem;
const DeleteEdgeClusterInstancesResponse = models.DeleteEdgeClusterInstancesResponse;
const DeleteTKEEdgeClusterRequest = models.DeleteTKEEdgeClusterRequest;
const CreatePrometheusGlobalNotificationResponse = models.CreatePrometheusGlobalNotificationResponse;
const DescribeClusterAuthenticationOptionsResponse = models.DescribeClusterAuthenticationOptionsResponse;
const DeletePrometheusClusterAgentResponse = models.DeletePrometheusClusterAgentResponse;
const CreateClusterReleaseRequest = models.CreateClusterReleaseRequest;
const DescribePrometheusAgentsRequest = models.DescribePrometheusAgentsRequest;
const AddClusterCIDRResponse = models.AddClusterCIDRResponse;
const ReleaseDetails = models.ReleaseDetails;
const DescribePrometheusInstanceInitStatusRequest = models.DescribePrometheusInstanceInitStatusRequest;
const DescribeClusterLevelAttributeResponse = models.DescribeClusterLevelAttributeResponse;
const PrometheusGrafanaInfo = models.PrometheusGrafanaInfo;
const ImageInstance = models.ImageInstance;
const CreatePrometheusAlertPolicyRequest = models.CreatePrometheusAlertPolicyRequest;
const DescribeImageCachesResponse = models.DescribeImageCachesResponse;
const ResourceUsageDetail = models.ResourceUsageDetail;
const DescribeClusterVirtualNodePoolsResponse = models.DescribeClusterVirtualNodePoolsResponse;
const CheckEdgeClusterCIDRResponse = models.CheckEdgeClusterCIDRResponse;
const DescribePrometheusClusterAgentsRequest = models.DescribePrometheusClusterAgentsRequest;
const EdgeArgsFlag = models.EdgeArgsFlag;
const CheckInstancesUpgradeAbleResponse = models.CheckInstancesUpgradeAbleResponse;
const CreatePrometheusTempRequest = models.CreatePrometheusTempRequest;
const CreatePrometheusDashboardRequest = models.CreatePrometheusDashboardRequest;
const DeleteClusterRouteTableResponse = models.DeleteClusterRouteTableResponse;
const DisableClusterDeletionProtectionRequest = models.DisableClusterDeletionProtectionRequest;
const PrometheusJobTargets = models.PrometheusJobTargets;
const ModifyClusterAsGroupOptionAttributeResponse = models.ModifyClusterAsGroupOptionAttributeResponse;
const UninstallLogAgentResponse = models.UninstallLogAgentResponse;
const PrometheusClusterAgentBasic = models.PrometheusClusterAgentBasic;
const DeleteTKEEdgeClusterResponse = models.DeleteTKEEdgeClusterResponse;
const CreatePrometheusTempResponse = models.CreatePrometheusTempResponse;
const DescribePrometheusTargetsRequest = models.DescribePrometheusTargetsRequest;
const RunPrometheusInstanceResponse = models.RunPrometheusInstanceResponse;
const DeletePrometheusTemplateSyncResponse = models.DeletePrometheusTemplateSyncResponse;
const DescribeClusterAsGroupsRequest = models.DescribeClusterAsGroupsRequest;
const ECMRunMonitorServiceEnabled = models.ECMRunMonitorServiceEnabled;
const SyncPrometheusTempRequest = models.SyncPrometheusTempRequest;
const ModifyClusterEndpointSPResponse = models.ModifyClusterEndpointSPResponse;
const ECMRunSecurityServiceEnabled = models.ECMRunSecurityServiceEnabled;
const SyncPrometheusTemplateResponse = models.SyncPrometheusTemplateResponse;
const UninstallClusterReleaseResponse = models.UninstallClusterReleaseResponse;
const ClusterAsGroupAttribute = models.ClusterAsGroupAttribute;
const ForwardTKEEdgeApplicationRequestV3Request = models.ForwardTKEEdgeApplicationRequestV3Request;
const DisableEventPersistenceRequest = models.DisableEventPersistenceRequest;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const CreateEKSContainerInstancesRequest = models.CreateEKSContainerInstancesRequest;
const DescribeTKEEdgeClusterCredentialResponse = models.DescribeTKEEdgeClusterCredentialResponse;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const CancelClusterReleaseResponse = models.CancelClusterReleaseResponse;
const UpdateEdgeClusterVersionResponse = models.UpdateEdgeClusterVersionResponse;
const ModifyClusterAsGroupAttributeRequest = models.ModifyClusterAsGroupAttributeRequest;
const DescribeClusterAsGroupsResponse = models.DescribeClusterAsGroupsResponse;
const DescribePrometheusConfigResponse = models.DescribePrometheusConfigResponse;
const ScaleOutClusterMasterRequest = models.ScaleOutClusterMasterRequest;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const CreatePrometheusGlobalNotificationRequest = models.CreatePrometheusGlobalNotificationRequest;
const ModifyPrometheusTempResponse = models.ModifyPrometheusTempResponse;
const PrometheusAlertRuleDetail = models.PrometheusAlertRuleDetail;
const ReleaseHistory = models.ReleaseHistory;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const CreatePrometheusAlertRuleRequest = models.CreatePrometheusAlertRuleRequest;
const UpdateEKSClusterRequest = models.UpdateEKSClusterRequest;
const CreateTKEEdgeClusterRequest = models.CreateTKEEdgeClusterRequest;
const CreateClusterVirtualNodePoolResponse = models.CreateClusterVirtualNodePoolResponse;
const CreateEKSClusterResponse = models.CreateEKSClusterResponse;
const CreateImageCacheResponse = models.CreateImageCacheResponse;
const CreateEdgeLogConfigResponse = models.CreateEdgeLogConfigResponse;
const DescribeAvailableTKEEdgeVersionResponse = models.DescribeAvailableTKEEdgeVersionResponse;
const ModifyPrometheusRecordRuleYamlRequest = models.ModifyPrometheusRecordRuleYamlRequest;
const DeletePrometheusAlertPolicyResponse = models.DeletePrometheusAlertPolicyResponse;
const InstallEdgeLogAgentResponse = models.InstallEdgeLogAgentResponse;
const EdgeAvailableExtraArgs = models.EdgeAvailableExtraArgs;
const IPAddress = models.IPAddress;
const DescribeTKEEdgeClusterCredentialRequest = models.DescribeTKEEdgeClusterCredentialRequest;
const AutoUpgradeClusterLevel = models.AutoUpgradeClusterLevel;
const CreateEKSClusterRequest = models.CreateEKSClusterRequest;
const CommonName = models.CommonName;
const EnableEventPersistenceRequest = models.EnableEventPersistenceRequest;
const ModifyClusterVirtualNodePoolRequest = models.ModifyClusterVirtualNodePoolRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const CreateClusterRouteResponse = models.CreateClusterRouteResponse;
const Release = models.Release;
const DescribeEKSContainerInstanceRegionsRequest = models.DescribeEKSContainerInstanceRegionsRequest;
const DescribeECMInstancesRequest = models.DescribeECMInstancesRequest;
const DrainClusterVirtualNodeResponse = models.DrainClusterVirtualNodeResponse;
const DescribeVpcCniPodLimitsResponse = models.DescribeVpcCniPodLimitsResponse;
const DescribeVersionsResponse = models.DescribeVersionsResponse;
const ScaleInClusterMasterRequest = models.ScaleInClusterMasterRequest;
const DeleteEdgeClusterInstancesRequest = models.DeleteEdgeClusterInstancesRequest;
const PrometheusAlertRule = models.PrometheusAlertRule;
const VirtualNodeSpec = models.VirtualNodeSpec;
const ClusterNetworkSettings = models.ClusterNetworkSettings;
const DescribeImagesResponse = models.DescribeImagesResponse;
const ClusterExtraArgs = models.ClusterExtraArgs;
const DeleteClusterVirtualNodePoolResponse = models.DeleteClusterVirtualNodePoolResponse;
const CreateClusterEndpointVipResponse = models.CreateClusterEndpointVipResponse;
const TaskStepInfo = models.TaskStepInfo;
const ECMZoneInstanceCountISP = models.ECMZoneInstanceCountISP;
const DescribeRouteTableConflictsRequest = models.DescribeRouteTableConflictsRequest;
const DeleteClusterEndpointVipResponse = models.DeleteClusterEndpointVipResponse;
const ClusterBasicSettings = models.ClusterBasicSettings;
const PrometheusTemp = models.PrometheusTemp;
const InstanceDataDiskMountSetting = models.InstanceDataDiskMountSetting;
const ModifyClusterAsGroupAttributeResponse = models.ModifyClusterAsGroupAttributeResponse;
const DeletePrometheusTempRequest = models.DeletePrometheusTempRequest;
const DescribeTKEEdgeScriptResponse = models.DescribeTKEEdgeScriptResponse;
const DescribeClusterRouteTablesResponse = models.DescribeClusterRouteTablesResponse;
const DescribeClusterKubeconfigRequest = models.DescribeClusterKubeconfigRequest;
const DeletePrometheusTempSyncRequest = models.DeletePrometheusTempSyncRequest;
const CreatePrometheusTemplateResponse = models.CreatePrometheusTemplateResponse;
const CreateClusterEndpointVipRequest = models.CreateClusterEndpointVipRequest;
const ClusterInternalLB = models.ClusterInternalLB;
const DescribePrometheusGlobalConfigRequest = models.DescribePrometheusGlobalConfigRequest;
const CreateECMInstancesResponse = models.CreateECMInstancesResponse;
const ModifyPrometheusGlobalNotificationRequest = models.ModifyPrometheusGlobalNotificationRequest;
const UnavailableReason = models.UnavailableReason;
const GetUpgradeInstanceProgressRequest = models.GetUpgradeInstanceProgressRequest;
const UpdateEKSClusterResponse = models.UpdateEKSClusterResponse;
const DescribeEdgeCVMInstancesResponse = models.DescribeEdgeCVMInstancesResponse;
const Event = models.Event;
const ModifyNodePoolDesiredCapacityAboutAsgRequest = models.ModifyNodePoolDesiredCapacityAboutAsgRequest;
const DeleteClusterRouteResponse = models.DeleteClusterRouteResponse;
const DeletePrometheusConfigRequest = models.DeletePrometheusConfigRequest;
const DescribeEdgeClusterUpgradeInfoResponse = models.DescribeEdgeClusterUpgradeInfoResponse;
const ModifyClusterNodePoolResponse = models.ModifyClusterNodePoolResponse;
const PrometheusAlertPolicyItem = models.PrometheusAlertPolicyItem;
const ModifyPrometheusAgentExternalLabelsRequest = models.ModifyPrometheusAgentExternalLabelsRequest;
const EdgeClusterAdvancedSettings = models.EdgeClusterAdvancedSettings;
const PrometheusTarget = models.PrometheusTarget;
const LoginSettings = models.LoginSettings;
const DescribePrometheusTempResponse = models.DescribePrometheusTempResponse;
const SyncPrometheusTemplateRequest = models.SyncPrometheusTemplateRequest;
const DescribeClusterEndpointStatusRequest = models.DescribeClusterEndpointStatusRequest;
const DescribeClusterStatusResponse = models.DescribeClusterStatusResponse;
const ImageRegistryCredential = models.ImageRegistryCredential;
const DescribeRouteTableConflictsResponse = models.DescribeRouteTableConflictsResponse;
const DescribeVersionsRequest = models.DescribeVersionsRequest;
const DescribePrometheusTempRequest = models.DescribePrometheusTempRequest;
const DeleteClusterRouteTableRequest = models.DeleteClusterRouteTableRequest;
const DescribeClusterEndpointsRequest = models.DescribeClusterEndpointsRequest;
const InstanceExtraArgs = models.InstanceExtraArgs;
const AcquireClusterAdminRoleRequest = models.AcquireClusterAdminRoleRequest;
const DeletePrometheusTemplateResponse = models.DeletePrometheusTemplateResponse;
const DescribeECMInstancesResponse = models.DescribeECMInstancesResponse;
const DescribePrometheusInstanceRequest = models.DescribePrometheusInstanceRequest;
const DeletePrometheusAlertRuleRequest = models.DeletePrometheusAlertRuleRequest;
const CreateClusterReleaseResponse = models.CreateClusterReleaseResponse;
const EdgeClusterExtraArgs = models.EdgeClusterExtraArgs;
const DescribePrometheusTargetsResponse = models.DescribePrometheusTargetsResponse;
const DescribeEnableVpcCniProgressResponse = models.DescribeEnableVpcCniProgressResponse;
const PrometheusAgentOverview = models.PrometheusAgentOverview;
const AppChart = models.AppChart;
const DeleteEdgeCVMInstancesRequest = models.DeleteEdgeCVMInstancesRequest;
const ModifyClusterNodePoolRequest = models.ModifyClusterNodePoolRequest;
const InstallLogAgentResponse = models.InstallLogAgentResponse;
const GetClusterLevelPriceRequest = models.GetClusterLevelPriceRequest;
const CreateClusterEndpointResponse = models.CreateClusterEndpointResponse;
const ClusterAdvancedSettings = models.ClusterAdvancedSettings;
const ForwardApplicationRequestV3Response = models.ForwardApplicationRequestV3Response;
const ModifyClusterAuthenticationOptionsRequest = models.ModifyClusterAuthenticationOptionsRequest;
const DeleteClusterEndpointVipRequest = models.DeleteClusterEndpointVipRequest;
const LivenessOrReadinessProbe = models.LivenessOrReadinessProbe;
const DescribeClusterLevelChangeRecordsResponse = models.DescribeClusterLevelChangeRecordsResponse;
const ClusterStatus = models.ClusterStatus;
const DescribePrometheusAgentsResponse = models.DescribePrometheusAgentsResponse;
const DescribeVpcCniPodLimitsRequest = models.DescribeVpcCniPodLimitsRequest;
const DeleteImageCachesResponse = models.DeleteImageCachesResponse;
const DescribeEKSContainerInstanceRegionsResponse = models.DescribeEKSContainerInstanceRegionsResponse;
const ModifyPrometheusRecordRuleYamlResponse = models.ModifyPrometheusRecordRuleYamlResponse;
const DescribeTKEEdgeScriptRequest = models.DescribeTKEEdgeScriptRequest;
const AddVpcCniSubnetsResponse = models.AddVpcCniSubnetsResponse;
const ExistedInstancesForNode = models.ExistedInstancesForNode;
const DescribePrometheusOverviewsResponse = models.DescribePrometheusOverviewsResponse;
const DeletePrometheusRecordRuleYamlRequest = models.DeletePrometheusRecordRuleYamlRequest;
const InstanceUpgradePreCheckResult = models.InstanceUpgradePreCheckResult;
const ScaleInClusterMasterResponse = models.ScaleInClusterMasterResponse;
const DescribeAvailableClusterVersionResponse = models.DescribeAvailableClusterVersionResponse;
const DeleteEKSContainerInstancesRequest = models.DeleteEKSContainerInstancesRequest;
const DescribeClusterCommonNamesResponse = models.DescribeClusterCommonNamesResponse;
const DeleteECMInstancesResponse = models.DeleteECMInstancesResponse;
const PrometheusTemplate = models.PrometheusTemplate;
const GPUArgs = models.GPUArgs;
const RouteTableConflict = models.RouteTableConflict;
const PrometheusInstanceOverview = models.PrometheusInstanceOverview;
const DescribeClusterVirtualNodeResponse = models.DescribeClusterVirtualNodeResponse;
const ScaleInMaster = models.ScaleInMaster;
const RunPrometheusInstanceRequest = models.RunPrometheusInstanceRequest;
const PendingRelease = models.PendingRelease;


/**
 * tke client
 * @class
 */
class TkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tke.tencentcloudapi.com", "2018-05-25", credential, region, profile);
    }
    
    /**
     * 解除TMP实例的集群关联
     * @param {DeletePrometheusClusterAgentRequest} req
     * @param {function(string, DeletePrometheusClusterAgentResponse):void} cb
     * @public
     */
    DeletePrometheusClusterAgent(req, cb) {
        let resp = new DeletePrometheusClusterAgentResponse();
        this.request("DeletePrometheusClusterAgent", req, resp, cb);
    }

    /**
     * 创建边缘计算ECM机器
     * @param {CreateECMInstancesRequest} req
     * @param {function(string, CreateECMInstancesResponse):void} cb
     * @public
     */
    CreateECMInstances(req, cb) {
        let resp = new CreateECMInstancesResponse();
        this.request("CreateECMInstances", req, resp, cb);
    }

    /**
     * 查看虚拟节点列表
     * @param {DescribeClusterVirtualNodeRequest} req
     * @param {function(string, DescribeClusterVirtualNodeResponse):void} cb
     * @public
     */
    DescribeClusterVirtualNode(req, cb) {
        let resp = new DescribeClusterVirtualNodeResponse();
        this.request("DescribeClusterVirtualNode", req, resp, cb);
    }

    /**
     * 创建集群
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }

    /**
     * 在tke@edge集群的边缘节点上安装日志采集组件
     * @param {InstallEdgeLogAgentRequest} req
     * @param {function(string, InstallEdgeLogAgentResponse):void} cb
     * @public
     */
    InstallEdgeLogAgent(req, cb) {
        let resp = new InstallEdgeLogAgentResponse();
        this.request("InstallEdgeLogAgent", req, resp, cb);
    }

    /**
     * 创建虚拟节点池
     * @param {CreateClusterVirtualNodePoolRequest} req
     * @param {function(string, CreateClusterVirtualNodePoolResponse):void} cb
     * @public
     */
    CreateClusterVirtualNodePool(req, cb) {
        let resp = new CreateClusterVirtualNodePoolResponse();
        this.request("CreateClusterVirtualNodePool", req, resp, cb);
    }

    /**
     * 修改集群弹性伸缩属性
     * @param {ModifyClusterAsGroupOptionAttributeRequest} req
     * @param {function(string, ModifyClusterAsGroupOptionAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAsGroupOptionAttribute(req, cb) {
        let resp = new ModifyClusterAsGroupOptionAttributeResponse();
        this.request("ModifyClusterAsGroupOptionAttribute", req, resp, cb);
    }

    /**
     * GR集群可以通过本接口附加vpc-cni容器网络插件，开启vpc-cni容器网络能力
     * @param {EnableVpcCniNetworkTypeRequest} req
     * @param {function(string, EnableVpcCniNetworkTypeResponse):void} cb
     * @public
     */
    EnableVpcCniNetworkType(req, cb) {
        let resp = new EnableVpcCniNetworkTypeResponse();
        this.request("EnableVpcCniNetworkType", req, resp, cb);
    }

    /**
     * 删除集群(YUNAPI V3版本)
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        let resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }

    /**
     * 从tke@edge集群边缘节点上卸载日志采集组件
     * @param {UninstallEdgeLogAgentRequest} req
     * @param {function(string, UninstallEdgeLogAgentResponse):void} cb
     * @public
     */
    UninstallEdgeLogAgent(req, cb) {
        let resp = new UninstallEdgeLogAgentResponse();
        this.request("UninstallEdgeLogAgent", req, resp, cb);
    }

    /**
     * 删除边缘计算实例
     * @param {DeleteEdgeClusterInstancesRequest} req
     * @param {function(string, DeleteEdgeClusterInstancesResponse):void} cb
     * @public
     */
    DeleteEdgeClusterInstances(req, cb) {
        let resp = new DeleteEdgeClusterInstancesResponse();
        this.request("DeleteEdgeClusterInstances", req, resp, cb);
    }

    /**
     * 修改告警规则
     * @param {ModifyPrometheusAlertRuleRequest} req
     * @param {function(string, ModifyPrometheusAlertRuleResponse):void} cb
     * @public
     */
    ModifyPrometheusAlertRule(req, cb) {
        let resp = new ModifyPrometheusAlertRuleResponse();
        this.request("ModifyPrometheusAlertRule", req, resp, cb);
    }

    /**
     * 仅能设置节点池中处于伸缩组的节点
     * @param {SetNodePoolNodeProtectionRequest} req
     * @param {function(string, SetNodePoolNodeProtectionResponse):void} cb
     * @public
     */
    SetNodePoolNodeProtection(req, cb) {
        let resp = new SetNodePoolNodeProtectionResponse();
        this.request("SetNodePoolNodeProtection", req, resp, cb);
    }

    /**
     * 查询容器实例的事件
     * @param {DescribeEKSContainerInstanceEventRequest} req
     * @param {function(string, DescribeEKSContainerInstanceEventResponse):void} cb
     * @public
     */
    DescribeEKSContainerInstanceEvent(req, cb) {
        let resp = new DescribeEKSContainerInstanceEventResponse();
        this.request("DescribeEKSContainerInstanceEvent", req, resp, cb);
    }

    /**
     * 查询边缘容器集群可用的自定义参数
     * @param {DescribeEdgeAvailableExtraArgsRequest} req
     * @param {function(string, DescribeEdgeAvailableExtraArgsResponse):void} cb
     * @public
     */
    DescribeEdgeAvailableExtraArgs(req, cb) {
        let resp = new DescribeEdgeAvailableExtraArgsResponse();
        this.request("DescribeEdgeAvailableExtraArgs", req, resp, cb);
    }

    /**
     * 获取指定子账户在RBAC授权模式中对应kube-apiserver客户端证书的CommonName字段，如果没有客户端证书，将会签发一个，此接口有最大传入子账户数量上限，当前为50
     * @param {DescribeClusterCommonNamesRequest} req
     * @param {function(string, DescribeClusterCommonNamesResponse):void} cb
     * @public
     */
    DescribeClusterCommonNames(req, cb) {
        let resp = new DescribeClusterCommonNamesResponse();
        this.request("DescribeClusterCommonNames", req, resp, cb);
    }

    /**
     * 开启事件持久化功能
     * @param {EnableEventPersistenceRequest} req
     * @param {function(string, EnableEventPersistenceResponse):void} cb
     * @public
     */
    EnableEventPersistence(req, cb) {
        let resp = new EnableEventPersistenceResponse();
        this.request("EnableEventPersistence", req, resp, cb);
    }

    /**
     * 获取告警历史
     * @param {DescribePrometheusAlertHistoryRequest} req
     * @param {function(string, DescribePrometheusAlertHistoryResponse):void} cb
     * @public
     */
    DescribePrometheusAlertHistory(req, cb) {
        let resp = new DescribePrometheusAlertHistoryResponse();
        this.request("DescribePrometheusAlertHistory", req, resp, cb);
    }

    /**
     * 创建集群路由表
     * @param {CreateClusterRouteTableRequest} req
     * @param {function(string, CreateClusterRouteTableResponse):void} cb
     * @public
     */
    CreateClusterRouteTable(req, cb) {
        let resp = new CreateClusterRouteTableResponse();
        this.request("CreateClusterRouteTable", req, resp, cb);
    }

    /**
     * 获得节点升级当前的进度
     * @param {GetUpgradeInstanceProgressRequest} req
     * @param {function(string, GetUpgradeInstanceProgressResponse):void} cb
     * @public
     */
    GetUpgradeInstanceProgress(req, cb) {
        let resp = new GetUpgradeInstanceProgressResponse();
        this.request("GetUpgradeInstanceProgress", req, resp, cb);
    }

    /**
     * 创建一个云原生Prometheus模板实例
     * @param {CreatePrometheusTemplateRequest} req
     * @param {function(string, CreatePrometheusTemplateResponse):void} cb
     * @public
     */
    CreatePrometheusTemplate(req, cb) {
        let resp = new CreatePrometheusTemplateResponse();
        this.request("CreatePrometheusTemplate", req, resp, cb);
    }

    /**
     * 在TKE集群中安装CLS日志采集组件
     * @param {InstallLogAgentRequest} req
     * @param {function(string, InstallLogAgentResponse):void} cb
     * @public
     */
    InstallLogAgent(req, cb) {
        let resp = new InstallLogAgentResponse();
        this.request("InstallLogAgent", req, resp, cb);
    }

    /**
     * 根据镜像列表，查询匹配的镜像缓存
     * @param {GetMostSuitableImageCacheRequest} req
     * @param {function(string, GetMostSuitableImageCacheResponse):void} cb
     * @public
     */
    GetMostSuitableImageCache(req, cb) {
        let resp = new GetMostSuitableImageCacheResponse();
        this.request("GetMostSuitableImageCache", req, resp, cb);
    }

    /**
     * 删除虚拟节点
     * @param {DeleteClusterVirtualNodeRequest} req
     * @param {function(string, DeleteClusterVirtualNodeResponse):void} cb
     * @public
     */
    DeleteClusterVirtualNode(req, cb) {
        let resp = new DeleteClusterVirtualNodeResponse();
        this.request("DeleteClusterVirtualNode", req, resp, cb);
    }

    /**
     * 获取边缘脚本链接，此接口用于添加第三方节点，通过下载脚本从而将节点添加到边缘集群。
     * @param {DescribeTKEEdgeScriptRequest} req
     * @param {function(string, DescribeTKEEdgeScriptResponse):void} cb
     * @public
     */
    DescribeTKEEdgeScript(req, cb) {
        let resp = new DescribeTKEEdgeScriptResponse();
        this.request("DescribeTKEEdgeScript", req, resp, cb);
    }

    /**
     * 边缘计算支持版本和k8s版本
     * @param {DescribeAvailableTKEEdgeVersionRequest} req
     * @param {function(string, DescribeAvailableTKEEdgeVersionResponse):void} cb
     * @public
     */
    DescribeAvailableTKEEdgeVersion(req, cb) {
        let resp = new DescribeAvailableTKEEdgeVersionResponse();
        this.request("DescribeAvailableTKEEdgeVersion", req, resp, cb);
    }

    /**
     * 查询边缘集群列表
     * @param {DescribeTKEEdgeClustersRequest} req
     * @param {function(string, DescribeTKEEdgeClustersResponse):void} cb
     * @public
     */
    DescribeTKEEdgeClusters(req, cb) {
        let resp = new DescribeTKEEdgeClustersResponse();
        this.request("DescribeTKEEdgeClusters", req, resp, cb);
    }

    /**
     * 从TKE集群中卸载CLS日志采集组件
     * @param {UninstallLogAgentRequest} req
     * @param {function(string, UninstallLogAgentResponse):void} cb
     * @public
     */
    UninstallLogAgent(req, cb) {
        let resp = new UninstallLogAgentResponse();
        this.request("UninstallLogAgent", req, resp, cb);
    }

    /**
     * 获取集群版本信息
     * @param {DescribeVersionsRequest} req
     * @param {function(string, DescribeVersionsResponse):void} cb
     * @public
     */
    DescribeVersions(req, cb) {
        let resp = new DescribeVersionsResponse();
        this.request("DescribeVersions", req, resp, cb);
    }

    /**
     * 操作TKE集群的addon
     * @param {ForwardApplicationRequestV3Request} req
     * @param {function(string, ForwardApplicationRequestV3Response):void} cb
     * @public
     */
    ForwardApplicationRequestV3(req, cb) {
        let resp = new ForwardApplicationRequestV3Response();
        this.request("ForwardApplicationRequestV3", req, resp, cb);
    }

    /**
     * 修改被关联集群的external labels
     * @param {ModifyPrometheusAgentExternalLabelsRequest} req
     * @param {function(string, ModifyPrometheusAgentExternalLabelsResponse):void} cb
     * @public
     */
    ModifyPrometheusAgentExternalLabels(req, cb) {
        let resp = new ModifyPrometheusAgentExternalLabelsResponse();
        this.request("ModifyPrometheusAgentExternalLabels", req, resp, cb);
    }

    /**
     * 删除弹性集群(yunapiv3)
     * @param {DeleteEKSClusterRequest} req
     * @param {function(string, DeleteEKSClusterResponse):void} cb
     * @public
     */
    DeleteEKSCluster(req, cb) {
        let resp = new DeleteEKSClusterResponse();
        this.request("DeleteEKSCluster", req, resp, cb);
    }

    /**
     * 获取事件、审计和日志的状态
     * @param {DescribeEdgeLogSwitchesRequest} req
     * @param {function(string, DescribeEdgeLogSwitchesResponse):void} cb
     * @public
     */
    DescribeEdgeLogSwitches(req, cb) {
        let resp = new DescribeEdgeLogSwitchesResponse();
        this.request("DescribeEdgeLogSwitches", req, resp, cb);
    }

    /**
     * 升级边缘集群组件到指定版本，此版本为TKEEdge专用版本。
     * @param {UpdateEdgeClusterVersionRequest} req
     * @param {function(string, UpdateEdgeClusterVersionResponse):void} cb
     * @public
     */
    UpdateEdgeClusterVersion(req, cb) {
        let resp = new UpdateEdgeClusterVersionResponse();
        this.request("UpdateEdgeClusterVersion", req, resp, cb);
    }

    /**
     * 获取边缘计算外部访问的kubeconfig
     * @param {DescribeTKEEdgeExternalKubeconfigRequest} req
     * @param {function(string, DescribeTKEEdgeExternalKubeconfigResponse):void} cb
     * @public
     */
    DescribeTKEEdgeExternalKubeconfig(req, cb) {
        let resp = new DescribeTKEEdgeExternalKubeconfigResponse();
        this.request("DescribeTKEEdgeExternalKubeconfig", req, resp, cb);
    }

    /**
     * 开启集群审计
     * @param {EnableClusterAuditRequest} req
     * @param {function(string, EnableClusterAuditResponse):void} cb
     * @public
     */
    EnableClusterAudit(req, cb) {
        let resp = new EnableClusterAuditResponse();
        this.request("EnableClusterAudit", req, resp, cb);
    }

    /**
     * 查询边缘集群自定义参数
     * @param {DescribeEdgeClusterExtraArgsRequest} req
     * @param {function(string, DescribeEdgeClusterExtraArgsResponse):void} cb
     * @public
     */
    DescribeEdgeClusterExtraArgs(req, cb) {
        let resp = new DescribeEdgeClusterExtraArgsResponse();
        this.request("DescribeEdgeClusterExtraArgs", req, resp, cb);
    }

    /**
     * 修改虚拟节点池
     * @param {ModifyClusterVirtualNodePoolRequest} req
     * @param {function(string, ModifyClusterVirtualNodePoolResponse):void} cb
     * @public
     */
    ModifyClusterVirtualNodePool(req, cb) {
        let resp = new ModifyClusterVirtualNodePoolResponse();
        this.request("ModifyClusterVirtualNodePool", req, resp, cb);
    }

    /**
     * 查询节点池列表
     * @param {DescribeClusterNodePoolsRequest} req
     * @param {function(string, DescribeClusterNodePoolsResponse):void} cb
     * @public
     */
    DescribeClusterNodePools(req, cb) {
        let resp = new DescribeClusterNodePoolsResponse();
        this.request("DescribeClusterNodePools", req, resp, cb);
    }

    /**
     * 升级集群 Master 组件到指定版本
     * @param {UpdateClusterVersionRequest} req
     * @param {function(string, UpdateClusterVersionResponse):void} cb
     * @public
     */
    UpdateClusterVersion(req, cb) {
        let resp = new UpdateClusterVersionResponse();
        this.request("UpdateClusterVersion", req, resp, cb);
    }

    /**
     * 在应用市场中查询正在安装中的应用列表
     * @param {DescribeClusterPendingReleasesRequest} req
     * @param {function(string, DescribeClusterPendingReleasesResponse):void} cb
     * @public
     */
    DescribeClusterPendingReleases(req, cb) {
        let resp = new DescribeClusterPendingReleasesResponse();
        this.request("DescribeClusterPendingReleases", req, resp, cb);
    }

    /**
     * 以Yaml的方式创建聚合规则
     * @param {CreatePrometheusRecordRuleYamlRequest} req
     * @param {function(string, CreatePrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    CreatePrometheusRecordRuleYaml(req, cb) {
        let resp = new CreatePrometheusRecordRuleYamlResponse();
        this.request("CreatePrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * 获取集群可以升级的所有版本
     * @param {DescribeAvailableClusterVersionRequest} req
     * @param {function(string, DescribeAvailableClusterVersionResponse):void} cb
     * @public
     */
    DescribeAvailableClusterVersion(req, cb) {
        let resp = new DescribeAvailableClusterVersionResponse();
        this.request("DescribeAvailableClusterVersion", req, resp, cb);
    }

    /**
     * 批量删除镜像缓存
     * @param {DeleteImageCachesRequest} req
     * @param {function(string, DeleteImageCachesResponse):void} cb
     * @public
     */
    DeleteImageCaches(req, cb) {
        let resp = new DeleteImageCachesResponse();
        this.request("DeleteImageCaches", req, resp, cb);
    }

    /**
     * 删除集群路由表
     * @param {DeleteClusterRouteTableRequest} req
     * @param {function(string, DeleteClusterRouteTableResponse):void} cb
     * @public
     */
    DeleteClusterRouteTable(req, cb) {
        let resp = new DeleteClusterRouteTableResponse();
        this.request("DeleteClusterRouteTable", req, resp, cb);
    }

    /**
     * 修改2.0实例告警策略
     * @param {ModifyPrometheusAlertPolicyRequest} req
     * @param {function(string, ModifyPrometheusAlertPolicyResponse):void} cb
     * @public
     */
    ModifyPrometheusAlertPolicy(req, cb) {
        let resp = new ModifyPrometheusAlertPolicyResponse();
        this.request("ModifyPrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * 查看集群认证配置
     * @param {DescribeClusterAuthenticationOptionsRequest} req
     * @param {function(string, DescribeClusterAuthenticationOptionsResponse):void} cb
     * @public
     */
    DescribeClusterAuthenticationOptions(req, cb) {
        let resp = new DescribeClusterAuthenticationOptionsResponse();
        this.request("DescribeClusterAuthenticationOptions", req, resp, cb);
    }

    /**
     * 删除ECM实例
     * @param {DeleteECMInstancesRequest} req
     * @param {function(string, DeleteECMInstancesResponse):void} cb
     * @public
     */
    DeleteECMInstances(req, cb) {
        let resp = new DeleteECMInstancesResponse();
        this.request("DeleteECMInstances", req, resp, cb);
    }

    /**
     * 查询节点池详情
     * @param {DescribeClusterNodePoolDetailRequest} req
     * @param {function(string, DescribeClusterNodePoolDetailResponse):void} cb
     * @public
     */
    DescribeClusterNodePoolDetail(req, cb) {
        let resp = new DescribeClusterNodePoolDetailResponse();
        this.request("DescribeClusterNodePoolDetail", req, resp, cb);
    }

    /**
     * 取消模板同步，这将会删除目标中该模板所生产的配置
     * @param {DeletePrometheusTemplateSyncRequest} req
     * @param {function(string, DeletePrometheusTemplateSyncResponse):void} cb
     * @public
     */
    DeletePrometheusTemplateSync(req, cb) {
        let resp = new DeletePrometheusTemplateSyncResponse();
        this.request("DeletePrometheusTemplateSync", req, resp, cb);
    }

    /**
     * 扩展(新建)集群节点
     * @param {CreateClusterInstancesRequest} req
     * @param {function(string, CreateClusterInstancesResponse):void} cb
     * @public
     */
    CreateClusterInstances(req, cb) {
        let resp = new CreateClusterInstancesResponse();
        this.request("CreateClusterInstances", req, resp, cb);
    }

    /**
     * 修改集群属性
     * @param {ModifyClusterAttributeRequest} req
     * @param {function(string, ModifyClusterAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAttribute(req, cb) {
        let resp = new ModifyClusterAttributeResponse();
        this.request("ModifyClusterAttribute", req, resp, cb);
    }

    /**
     * 删除集群伸缩组
     * @param {DeleteClusterAsGroupsRequest} req
     * @param {function(string, DeleteClusterAsGroupsResponse):void} cb
     * @public
     */
    DeleteClusterAsGroups(req, cb) {
        let resp = new DeleteClusterAsGroupsResponse();
        this.request("DeleteClusterAsGroups", req, resp, cb);
    }

    /**
     * 删除集群路由
     * @param {DeleteClusterRouteRequest} req
     * @param {function(string, DeleteClusterRouteResponse):void} cb
     * @public
     */
    DeleteClusterRoute(req, cb) {
        let resp = new DeleteClusterRouteResponse();
        this.request("DeleteClusterRoute", req, resp, cb);
    }

    /**
     * 在应用市场中集群删除某个应用
     * @param {UninstallClusterReleaseRequest} req
     * @param {function(string, UninstallClusterReleaseResponse):void} cb
     * @public
     */
    UninstallClusterRelease(req, cb) {
        let resp = new UninstallClusterReleaseResponse();
        this.request("UninstallClusterRelease", req, resp, cb);
    }

    /**
     * 针对VPC-CNI模式的集群，增加集群容器网络可使用的子网
     * @param {AddVpcCniSubnetsRequest} req
     * @param {function(string, AddVpcCniSubnetsResponse):void} cb
     * @public
     */
    AddVpcCniSubnets(req, cb) {
        let resp = new AddVpcCniSubnetsResponse();
        this.request("AddVpcCniSubnets", req, resp, cb);
    }

    /**
     * 获取镜像信息
     * @param {DescribeImagesRequest} req
     * @param {function(string, DescribeImagesResponse):void} cb
     * @public
     */
    DescribeImages(req, cb) {
        let resp = new DescribeImagesResponse();
        this.request("DescribeImages", req, resp, cb);
    }

    /**
     * 查询已经存在的节点，判断是否可以加入集群
     * @param {DescribeExistedInstancesRequest} req
     * @param {function(string, DescribeExistedInstancesResponse):void} cb
     * @public
     */
    DescribeExistedInstances(req, cb) {
        let resp = new DescribeExistedInstancesResponse();
        this.request("DescribeExistedInstances", req, resp, cb);
    }

    /**
     * 获取2.0实例初始化任务状态
     * @param {DescribePrometheusInstanceInitStatusRequest} req
     * @param {function(string, DescribePrometheusInstanceInitStatusResponse):void} cb
     * @public
     */
    DescribePrometheusInstanceInitStatus(req, cb) {
        let resp = new DescribePrometheusInstanceInitStatusResponse();
        this.request("DescribePrometheusInstanceInitStatus", req, resp, cb);
    }

    /**
     * 获取边缘计算集群的认证信息
     * @param {DescribeTKEEdgeClusterCredentialRequest} req
     * @param {function(string, DescribeTKEEdgeClusterCredentialResponse):void} cb
     * @public
     */
    DescribeTKEEdgeClusterCredential(req, cb) {
        let resp = new DescribeTKEEdgeClusterCredentialResponse();
        this.request("DescribeTKEEdgeClusterCredential", req, resp, cb);
    }

    /**
     * 给集群的一批work节点进行升级
     * @param {UpgradeClusterInstancesRequest} req
     * @param {function(string, UpgradeClusterInstancesResponse):void} cb
     * @public
     */
    UpgradeClusterInstances(req, cb) {
        let resp = new UpgradeClusterInstancesResponse();
        this.request("UpgradeClusterInstances", req, resp, cb);
    }

    /**
     * 查询集群路由表
     * @param {DescribeClusterRouteTablesRequest} req
     * @param {function(string, DescribeClusterRouteTablesResponse):void} cb
     * @public
     */
    DescribeClusterRouteTables(req, cb) {
        let resp = new DescribeClusterRouteTablesResponse();
        this.request("DescribeClusterRouteTables", req, resp, cb);
    }

    /**
     * 删除边缘容器CVM实例
     * @param {DeleteEdgeCVMInstancesRequest} req
     * @param {function(string, DeleteEdgeCVMInstancesResponse):void} cb
     * @public
     */
    DeleteEdgeCVMInstances(req, cb) {
        let resp = new DeleteEdgeCVMInstancesResponse();
        this.request("DeleteEdgeCVMInstances", req, resp, cb);
    }

    /**
     * 将集群内节点移入节点池
     * @param {AddNodeToNodePoolRequest} req
     * @param {function(string, AddNodeToNodePoolResponse):void} cb
     * @public
     */
    AddNodeToNodePool(req, cb) {
        let resp = new AddNodeToNodePoolResponse();
        this.request("AddNodeToNodePool", req, resp, cb);
    }

    /**
     * 查询集群列表
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @param {DescribeClusterEndpointStatusRequest} req
     * @param {function(string, DescribeClusterEndpointStatusResponse):void} cb
     * @public
     */
    DescribeClusterEndpointStatus(req, cb) {
        let resp = new DescribeClusterEndpointStatusResponse();
        this.request("DescribeClusterEndpointStatus", req, resp, cb);
    }

    /**
     * 更新镜像缓存接口
     * @param {UpdateImageCacheRequest} req
     * @param {function(string, UpdateImageCacheResponse):void} cb
     * @public
     */
    UpdateImageCache(req, cb) {
        let resp = new UpdateImageCacheResponse();
        this.request("UpdateImageCache", req, resp, cb);
    }

    /**
     * 获取容器服务支持的所有地域
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 同步模板到实例或者集群
     * @param {SyncPrometheusTemplateRequest} req
     * @param {function(string, SyncPrometheusTemplateResponse):void} cb
     * @public
     */
    SyncPrometheusTemplate(req, cb) {
        let resp = new SyncPrometheusTemplateResponse();
        this.request("SyncPrometheusTemplate", req, resp, cb);
    }

    /**
     * 添加已经存在的实例到集群
     * @param {AddExistedInstancesRequest} req
     * @param {function(string, AddExistedInstancesResponse):void} cb
     * @public
     */
    AddExistedInstances(req, cb) {
        let resp = new AddExistedInstancesResponse();
        this.request("AddExistedInstances", req, resp, cb);
    }

    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     * @param {ModifyClusterEndpointSPRequest} req
     * @param {function(string, ModifyClusterEndpointSPResponse):void} cb
     * @public
     */
    ModifyClusterEndpointSP(req, cb) {
        let resp = new ModifyClusterEndpointSPResponse();
        this.request("ModifyClusterEndpointSP", req, resp, cb);
    }

    /**
     * 关闭集群删除保护
     * @param {DisableClusterDeletionProtectionRequest} req
     * @param {function(string, DisableClusterDeletionProtectionResponse):void} cb
     * @public
     */
    DisableClusterDeletionProtection(req, cb) {
        let resp = new DisableClusterDeletionProtectionResponse();
        this.request("DisableClusterDeletionProtection", req, resp, cb);
    }

    /**
     * 获取targets信息
     * @param {DescribePrometheusTargetsRequest} req
     * @param {function(string, DescribePrometheusTargetsResponse):void} cb
     * @public
     */
    DescribePrometheusTargets(req, cb) {
        let resp = new DescribePrometheusTargetsResponse();
        this.request("DescribePrometheusTargets", req, resp, cb);
    }

    /**
     * 删除容器实例，可批量删除
     * @param {DeleteEKSContainerInstancesRequest} req
     * @param {function(string, DeleteEKSContainerInstancesResponse):void} cb
     * @public
     */
    DeleteEKSContainerInstances(req, cb) {
        let resp = new DeleteEKSContainerInstancesResponse();
        this.request("DeleteEKSContainerInstances", req, resp, cb);
    }

    /**
     * 查询集群下节点实例信息
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        let resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }

    /**
     * 获取边缘容器CVM实例相关信息
     * @param {DescribeEdgeCVMInstancesRequest} req
     * @param {function(string, DescribeEdgeCVMInstancesResponse):void} cb
     * @public
     */
    DescribeEdgeCVMInstances(req, cb) {
        let resp = new DescribeEdgeCVMInstancesResponse();
        this.request("DescribeEdgeCVMInstances", req, resp, cb);
    }

    /**
     * 获取集群规模
     * @param {DescribeClusterLevelAttributeRequest} req
     * @param {function(string, DescribeClusterLevelAttributeResponse):void} cb
     * @public
     */
    DescribeClusterLevelAttribute(req, cb) {
        let resp = new DescribeClusterLevelAttributeResponse();
        this.request("DescribeClusterLevelAttribute", req, resp, cb);
    }

    /**
     * 删除边缘计算集群
     * @param {DeleteTKEEdgeClusterRequest} req
     * @param {function(string, DeleteTKEEdgeClusterResponse):void} cb
     * @public
     */
    DeleteTKEEdgeCluster(req, cb) {
        let resp = new DeleteTKEEdgeClusterResponse();
        this.request("DeleteTKEEdgeCluster", req, resp, cb);
    }

    /**
     * 给GR集群增加可用的ClusterCIDR
     * @param {AddClusterCIDRRequest} req
     * @param {function(string, AddClusterCIDRResponse):void} cb
     * @public
     */
    AddClusterCIDR(req, cb) {
        let resp = new AddClusterCIDRResponse();
        this.request("AddClusterCIDR", req, resp, cb);
    }

    /**
     * 创建镜像缓存的接口。创建过程中，请勿删除EKSCI实例和云盘，否则镜像缓存将创建失败。
     * @param {CreateImageCacheRequest} req
     * @param {function(string, CreateImageCacheResponse):void} cb
     * @public
     */
    CreateImageCache(req, cb) {
        let resp = new CreateImageCacheResponse();
        this.request("CreateImageCache", req, resp, cb);
    }

    /**
     * 删除虚拟节点池
     * @param {DeleteClusterVirtualNodePoolRequest} req
     * @param {function(string, DeleteClusterVirtualNodePoolResponse):void} cb
     * @public
     */
    DeleteClusterVirtualNodePool(req, cb) {
        let resp = new DeleteClusterVirtualNodePoolResponse();
        this.request("DeleteClusterVirtualNodePool", req, resp, cb);
    }

    /**
     * 更新容器实例
     * @param {UpdateEKSContainerInstanceRequest} req
     * @param {function(string, UpdateEKSContainerInstanceResponse):void} cb
     * @public
     */
    UpdateEKSContainerInstance(req, cb) {
        let resp = new UpdateEKSContainerInstanceResponse();
        this.request("UpdateEKSContainerInstance", req, resp, cb);
    }

    /**
     * 拉取模板列表，默认模板将总是在最前面
     * @param {DescribePrometheusTempRequest} req
     * @param {function(string, DescribePrometheusTempResponse):void} cb
     * @public
     */
    DescribePrometheusTemp(req, cb) {
        let resp = new DescribePrometheusTempResponse();
        this.request("DescribePrometheusTemp", req, resp, cb);
    }

    /**
     * 获取告警规则列表
     * @param {DescribePrometheusAlertRuleRequest} req
     * @param {function(string, DescribePrometheusAlertRuleResponse):void} cb
     * @public
     */
    DescribePrometheusAlertRule(req, cb) {
        let resp = new DescribePrometheusAlertRuleResponse();
        this.request("DescribePrometheusAlertRule", req, resp, cb);
    }

    /**
     * 驱逐虚拟节点
     * @param {DrainClusterVirtualNodeRequest} req
     * @param {function(string, DrainClusterVirtualNodeResponse):void} cb
     * @public
     */
    DrainClusterVirtualNode(req, cb) {
        let resp = new DrainClusterVirtualNodeResponse();
        this.request("DrainClusterVirtualNode", req, resp, cb);
    }

    /**
     * 重启弹性容器实例，支持批量操作
     * @param {RestartEKSContainerInstancesRequest} req
     * @param {function(string, RestartEKSContainerInstancesResponse):void} cb
     * @public
     */
    RestartEKSContainerInstances(req, cb) {
        let resp = new RestartEKSContainerInstancesResponse();
        this.request("RestartEKSContainerInstances", req, resp, cb);
    }

    /**
     * 删除Prometheus配置，如果目标不存在，将返回成功
     * @param {DeletePrometheusConfigRequest} req
     * @param {function(string, DeletePrometheusConfigResponse):void} cb
     * @public
     */
    DeletePrometheusConfig(req, cb) {
        let resp = new DeletePrometheusConfigResponse();
        this.request("DeletePrometheusConfig", req, resp, cb);
    }

    /**
     * 修改节点池关联伸缩组的期望实例数
     * @param {ModifyNodePoolDesiredCapacityAboutAsgRequest} req
     * @param {function(string, ModifyNodePoolDesiredCapacityAboutAsgResponse):void} cb
     * @public
     */
    ModifyNodePoolDesiredCapacityAboutAsg(req, cb) {
        let resp = new ModifyNodePoolDesiredCapacityAboutAsgResponse();
        this.request("ModifyNodePoolDesiredCapacityAboutAsg", req, resp, cb);
    }

    /**
     * 修改集群认证配置
     * @param {ModifyClusterAuthenticationOptionsRequest} req
     * @param {function(string, ModifyClusterAuthenticationOptionsResponse):void} cb
     * @public
     */
    ModifyClusterAuthenticationOptions(req, cb) {
        let resp = new ModifyClusterAuthenticationOptionsResponse();
        this.request("ModifyClusterAuthenticationOptions", req, resp, cb);
    }

    /**
     * 创建弹性集群
     * @param {CreateEKSClusterRequest} req
     * @param {function(string, CreateEKSClusterResponse):void} cb
     * @public
     */
    CreateEKSCluster(req, cb) {
        let resp = new CreateEKSClusterResponse();
        this.request("CreateEKSCluster", req, resp, cb);
    }

    /**
     * 本接口查询当前用户和地域在指定可用区下的机型可支持的最大 TKE VPC-CNI 网络模式的 Pod 数量
     * @param {DescribeVpcCniPodLimitsRequest} req
     * @param {function(string, DescribeVpcCniPodLimitsResponse):void} cb
     * @public
     */
    DescribeVpcCniPodLimits(req, cb) {
        let resp = new DescribeVpcCniPodLimitsResponse();
        this.request("DescribeVpcCniPodLimits", req, resp, cb);
    }

    /**
     * 修改节点池的机型配置
     * @param {ModifyNodePoolInstanceTypesRequest} req
     * @param {function(string, ModifyNodePoolInstanceTypesResponse):void} cb
     * @public
     */
    ModifyNodePoolInstanceTypes(req, cb) {
        let resp = new ModifyNodePoolInstanceTypesResponse();
        this.request("ModifyNodePoolInstanceTypes", req, resp, cb);
    }

    /**
     * 修改集群伸缩组属性
     * @param {ModifyClusterAsGroupAttributeRequest} req
     * @param {function(string, ModifyClusterAsGroupAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAsGroupAttribute(req, cb) {
        let resp = new ModifyClusterAsGroupAttributeResponse();
        this.request("ModifyClusterAsGroupAttribute", req, resp, cb);
    }

    /**
     * 创建一个云原生Prometheus模板
     * @param {CreatePrometheusTempRequest} req
     * @param {function(string, CreatePrometheusTempResponse):void} cb
     * @public
     */
    CreatePrometheusTemp(req, cb) {
        let resp = new CreatePrometheusTempResponse();
        this.request("CreatePrometheusTemp", req, resp, cb);
    }

    /**
     * 获取模板同步信息
     * @param {DescribePrometheusTemplateSyncRequest} req
     * @param {function(string, DescribePrometheusTemplateSyncResponse):void} cb
     * @public
     */
    DescribePrometheusTemplateSync(req, cb) {
        let resp = new DescribePrometheusTemplateSyncResponse();
        this.request("DescribePrometheusTemplateSync", req, resp, cb);
    }

    /**
     * 提供给附加了VPC-CNI能力的Global-Route集群关闭VPC-CNI
     * @param {DisableVpcCniNetworkTypeRequest} req
     * @param {function(string, DisableVpcCniNetworkTypeResponse):void} cb
     * @public
     */
    DisableVpcCniNetworkType(req, cb) {
        let resp = new DisableVpcCniNetworkTypeResponse();
        this.request("DisableVpcCniNetworkType", req, resp, cb);
    }

    /**
     * 获取实例详细信息
     * @param {DescribePrometheusInstanceRequest} req
     * @param {function(string, DescribePrometheusInstanceResponse):void} cb
     * @public
     */
    DescribePrometheusInstance(req, cb) {
        let resp = new DescribePrometheusInstanceResponse();
        this.request("DescribePrometheusInstance", req, resp, cb);
    }

    /**
     * 创建全局告警通知渠道
     * @param {CreatePrometheusGlobalNotificationRequest} req
     * @param {function(string, CreatePrometheusGlobalNotificationResponse):void} cb
     * @public
     */
    CreatePrometheusGlobalNotification(req, cb) {
        let resp = new CreatePrometheusGlobalNotificationResponse();
        this.request("CreatePrometheusGlobalNotification", req, resp, cb);
    }

    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     * @param {DescribeClusterEndpointVipStatusRequest} req
     * @param {function(string, DescribeClusterEndpointVipStatusResponse):void} cb
     * @public
     */
    DescribeClusterEndpointVipStatus(req, cb) {
        let resp = new DescribeClusterEndpointVipStatusResponse();
        this.request("DescribeClusterEndpointVipStatus", req, resp, cb);
    }

    /**
     * 查询容器实例
     * @param {DescribeEKSContainerInstancesRequest} req
     * @param {function(string, DescribeEKSContainerInstancesResponse):void} cb
     * @public
     */
    DescribeEKSContainerInstances(req, cb) {
        let resp = new DescribeEKSContainerInstancesResponse();
        this.request("DescribeEKSContainerInstances", req, resp, cb);
    }

    /**
     * 查询路由表冲突列表
     * @param {DescribeRouteTableConflictsRequest} req
     * @param {function(string, DescribeRouteTableConflictsResponse):void} cb
     * @public
     */
    DescribeRouteTableConflicts(req, cb) {
        let resp = new DescribeRouteTableConflictsResponse();
        this.request("DescribeRouteTableConflicts", req, resp, cb);
    }

    /**
     * 通过此接口，可以获取集群的tke:admin的ClusterRole，即管理员角色，可以用于CAM侧高权限的用户，通过CAM策略给予子账户此接口权限，进而可以通过此接口直接获取到kubernetes集群内的管理员角色。
     * @param {AcquireClusterAdminRoleRequest} req
     * @param {function(string, AcquireClusterAdminRoleResponse):void} cb
     * @public
     */
    AcquireClusterAdminRole(req, cb) {
        let resp = new AcquireClusterAdminRoleResponse();
        this.request("AcquireClusterAdminRole", req, resp, cb);
    }

    /**
     * 创建集群路由
     * @param {CreateClusterRouteRequest} req
     * @param {function(string, CreateClusterRouteResponse):void} cb
     * @public
     */
    CreateClusterRoute(req, cb) {
        let resp = new CreateClusterRouteResponse();
        this.request("CreateClusterRoute", req, resp, cb);
    }

    /**
     * 获取导入第三方集群YAML定义
     * @param {DescribeExternalClusterSpecRequest} req
     * @param {function(string, DescribeExternalClusterSpecResponse):void} cb
     * @public
     */
    DescribeExternalClusterSpec(req, cb) {
        let resp = new DescribeExternalClusterSpecResponse();
        this.request("DescribeExternalClusterSpec", req, resp, cb);
    }

    /**
     * 查询集群在应用市场中某个已安装应用的版本历史
     * @param {DescribeClusterReleaseHistoryRequest} req
     * @param {function(string, DescribeClusterReleaseHistoryResponse):void} cb
     * @public
     */
    DescribeClusterReleaseHistory(req, cb) {
        let resp = new DescribeClusterReleaseHistoryResponse();
        this.request("DescribeClusterReleaseHistory", req, resp, cb);
    }

    /**
     * 编辑节点池
     * @param {ModifyClusterNodePoolRequest} req
     * @param {function(string, ModifyClusterNodePoolResponse):void} cb
     * @public
     */
    ModifyClusterNodePool(req, cb) {
        let resp = new ModifyClusterNodePoolResponse();
        this.request("ModifyClusterNodePool", req, resp, cb);
    }

    /**
     * 创建容器实例
     * @param {CreateEKSContainerInstancesRequest} req
     * @param {function(string, CreateEKSContainerInstancesResponse):void} cb
     * @public
     */
    CreateEKSContainerInstances(req, cb) {
        let resp = new CreateEKSContainerInstancesResponse();
        this.request("CreateEKSContainerInstances", req, resp, cb);
    }

    /**
     * 获取聚合规则列表，包含关联集群内crd资源创建的record rule
     * @param {DescribePrometheusRecordRulesRequest} req
     * @param {function(string, DescribePrometheusRecordRulesResponse):void} cb
     * @public
     */
    DescribePrometheusRecordRules(req, cb) {
        let resp = new DescribePrometheusRecordRulesResponse();
        this.request("DescribePrometheusRecordRules", req, resp, cb);
    }

    /**
     * 删除告警规则
     * @param {DeletePrometheusAlertRuleRequest} req
     * @param {function(string, DeletePrometheusAlertRuleResponse):void} cb
     * @public
     */
    DeletePrometheusAlertRule(req, cb) {
        let resp = new DeletePrometheusAlertRuleResponse();
        this.request("DeletePrometheusAlertRule", req, resp, cb);
    }

    /**
     * 查询全局告警通知渠道
     * @param {DescribePrometheusGlobalNotificationRequest} req
     * @param {function(string, DescribePrometheusGlobalNotificationResponse):void} cb
     * @public
     */
    DescribePrometheusGlobalNotification(req, cb) {
        let resp = new DescribePrometheusGlobalNotificationResponse();
        this.request("DescribePrometheusGlobalNotification", req, resp, cb);
    }

    /**
     * 缩容独立集群master节点
     * @param {ScaleInClusterMasterRequest} req
     * @param {function(string, ScaleInClusterMasterResponse):void} cb
     * @public
     */
    ScaleInClusterMaster(req, cb) {
        let resp = new ScaleInClusterMasterResponse();
        this.request("ScaleInClusterMaster", req, resp, cb);
    }

    /**
     * 查询集群变配记录
     * @param {DescribeClusterLevelChangeRecordsRequest} req
     * @param {function(string, DescribeClusterLevelChangeRecordsResponse):void} cb
     * @public
     */
    DescribeClusterLevelChangeRecords(req, cb) {
        let resp = new DescribeClusterLevelChangeRecordsResponse();
        this.request("DescribeClusterLevelChangeRecords", req, resp, cb);
    }

    /**
     * 创建集群访问端口
     * @param {CreateClusterEndpointRequest} req
     * @param {function(string, CreateClusterEndpointResponse):void} cb
     * @public
     */
    CreateClusterEndpoint(req, cb) {
        let resp = new CreateClusterEndpointResponse();
        this.request("CreateClusterEndpoint", req, resp, cb);
    }

    /**
     * 修改全局告警通知渠道
     * @param {ModifyPrometheusGlobalNotificationRequest} req
     * @param {function(string, ModifyPrometheusGlobalNotificationResponse):void} cb
     * @public
     */
    ModifyPrometheusGlobalNotification(req, cb) {
        let resp = new ModifyPrometheusGlobalNotificationResponse();
        this.request("ModifyPrometheusGlobalNotification", req, resp, cb);
    }

    /**
     * 查看集群状态列表
     * @param {DescribeClusterStatusRequest} req
     * @param {function(string, DescribeClusterStatusResponse):void} cb
     * @public
     */
    DescribeClusterStatus(req, cb) {
        let resp = new DescribeClusterStatusResponse();
        this.request("DescribeClusterStatus", req, resp, cb);
    }

    /**
     * 获取关联目标集群的实例列表
     * @param {DescribePrometheusAgentInstancesRequest} req
     * @param {function(string, DescribePrometheusAgentInstancesResponse):void} cb
     * @public
     */
    DescribePrometheusAgentInstances(req, cb) {
        let resp = new DescribePrometheusAgentInstancesResponse();
        this.request("DescribePrometheusAgentInstances", req, resp, cb);
    }

    /**
     * 扩容独立集群master节点
     * @param {ScaleOutClusterMasterRequest} req
     * @param {function(string, ScaleOutClusterMasterResponse):void} cb
     * @public
     */
    ScaleOutClusterMaster(req, cb) {
        let resp = new ScaleOutClusterMasterResponse();
        this.request("ScaleOutClusterMaster", req, resp, cb);
    }

    /**
     * 创建告警规则
     * @param {CreatePrometheusAlertRuleRequest} req
     * @param {function(string, CreatePrometheusAlertRuleResponse):void} cb
     * @public
     */
    CreatePrometheusAlertRule(req, cb) {
        let resp = new CreatePrometheusAlertRuleResponse();
        this.request("CreatePrometheusAlertRule", req, resp, cb);
    }

    /**
     * 删除聚合实例
     * @param {DeletePrometheusRecordRuleYamlRequest} req
     * @param {function(string, DeletePrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    DeletePrometheusRecordRuleYaml(req, cb) {
        let resp = new DeletePrometheusRecordRuleYamlResponse();
        this.request("DeletePrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * 修改prometheus配置，如果配置项不存在，则会新增
     * @param {ModifyPrometheusConfigRequest} req
     * @param {function(string, ModifyPrometheusConfigResponse):void} cb
     * @public
     */
    ModifyPrometheusConfig(req, cb) {
        let resp = new ModifyPrometheusConfigResponse();
        this.request("ModifyPrometheusConfig", req, resp, cb);
    }

    /**
     * 修改模板内容
     * @param {ModifyPrometheusTempRequest} req
     * @param {function(string, ModifyPrometheusTempResponse):void} cb
     * @public
     */
    ModifyPrometheusTemp(req, cb) {
        let resp = new ModifyPrometheusTempResponse();
        this.request("ModifyPrometheusTemp", req, resp, cb);
    }

    /**
     * 通过yaml的方式修改Prometheus聚合实例
     * @param {ModifyPrometheusRecordRuleYamlRequest} req
     * @param {function(string, ModifyPrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    ModifyPrometheusRecordRuleYaml(req, cb) {
        let resp = new ModifyPrometheusRecordRuleYamlResponse();
        this.request("ModifyPrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * 用于查询Kubernetes的各个原生控制器是否开启
     * @param {DescribeClusterControllersRequest} req
     * @param {function(string, DescribeClusterControllersResponse):void} cb
     * @public
     */
    DescribeClusterControllers(req, cb) {
        let resp = new DescribeClusterControllersResponse();
        this.request("DescribeClusterControllers", req, resp, cb);
    }

    /**
     * 集群的密钥信息
     * @param {DescribeClusterSecurityRequest} req
     * @param {function(string, DescribeClusterSecurityResponse):void} cb
     * @public
     */
    DescribeClusterSecurity(req, cb) {
        let resp = new DescribeClusterSecurityResponse();
        this.request("DescribeClusterSecurity", req, resp, cb);
    }

    /**
     * 获取TMP实例关联集群列表
     * @param {DescribePrometheusClusterAgentsRequest} req
     * @param {function(string, DescribePrometheusClusterAgentsResponse):void} cb
     * @public
     */
    DescribePrometheusClusterAgents(req, cb) {
        let resp = new DescribePrometheusClusterAgentsResponse();
        this.request("DescribePrometheusClusterAgents", req, resp, cb);
    }

    /**
     * 删除节点池
     * @param {DeleteClusterNodePoolRequest} req
     * @param {function(string, DeleteClusterNodePoolResponse):void} cb
     * @public
     */
    DeleteClusterNodePool(req, cb) {
        let resp = new DeleteClusterNodePoolResponse();
        this.request("DeleteClusterNodePool", req, resp, cb);
    }

    /**
     * 创建边缘计算集群
     * @param {CreateTKEEdgeClusterRequest} req
     * @param {function(string, CreateTKEEdgeClusterResponse):void} cb
     * @public
     */
    CreateTKEEdgeCluster(req, cb) {
        let resp = new CreateTKEEdgeClusterResponse();
        this.request("CreateTKEEdgeCluster", req, resp, cb);
    }

    /**
     * 获取集群资源使用量
     * @param {DescribeResourceUsageRequest} req
     * @param {function(string, DescribeResourceUsageResponse):void} cb
     * @public
     */
    DescribeResourceUsage(req, cb) {
        let resp = new DescribeResourceUsageResponse();
        this.request("DescribeResourceUsage", req, resp, cb);
    }

    /**
     * 获取模板关联实例信息，针对V2版本实例
     * @param {DescribePrometheusTempSyncRequest} req
     * @param {function(string, DescribePrometheusTempSyncResponse):void} cb
     * @public
     */
    DescribePrometheusTempSync(req, cb) {
        let resp = new DescribePrometheusTempSyncResponse();
        this.request("DescribePrometheusTempSync", req, resp, cb);
    }

    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @param {DeleteClusterEndpointVipRequest} req
     * @param {function(string, DeleteClusterEndpointVipResponse):void} cb
     * @public
     */
    DeleteClusterEndpointVip(req, cb) {
        let resp = new DeleteClusterEndpointVipResponse();
        this.request("DeleteClusterEndpointVip", req, resp, cb);
    }

    /**
     * 获取ECM实例相关信息
     * @param {DescribeECMInstancesRequest} req
     * @param {function(string, DescribeECMInstancesResponse):void} cb
     * @public
     */
    DescribeECMInstances(req, cb) {
        let resp = new DescribeECMInstancesResponse();
        this.request("DescribeECMInstances", req, resp, cb);
    }

    /**
     * 获取集群的访问地址，包括内网地址，外网地址，外网域名，外网访问安全策略
     * @param {DescribeClusterEndpointsRequest} req
     * @param {function(string, DescribeClusterEndpointsResponse):void} cb
     * @public
     */
    DescribeClusterEndpoints(req, cb) {
        let resp = new DescribeClusterEndpointsResponse();
        this.request("DescribeClusterEndpoints", req, resp, cb);
    }

    /**
     * 与云监控融合的2.0实例关联集群
     * @param {CreatePrometheusClusterAgentRequest} req
     * @param {function(string, CreatePrometheusClusterAgentResponse):void} cb
     * @public
     */
    CreatePrometheusClusterAgent(req, cb) {
        let resp = new CreatePrometheusClusterAgentResponse();
        this.request("CreatePrometheusClusterAgent", req, resp, cb);
    }

    /**
     * 删除2.0实例告警策略
     * @param {DeletePrometheusAlertPolicyRequest} req
     * @param {function(string, DeletePrometheusAlertPolicyResponse):void} cb
     * @public
     */
    DeletePrometheusAlertPolicy(req, cb) {
        let resp = new DeletePrometheusAlertPolicyResponse();
        this.request("DeletePrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * 获取弹性容器集群的接入认证信息
     * @param {DescribeEKSClusterCredentialRequest} req
     * @param {function(string, DescribeEKSClusterCredentialResponse):void} cb
     * @public
     */
    DescribeEKSClusterCredential(req, cb) {
        let resp = new DescribeEKSClusterCredentialResponse();
        this.request("DescribeEKSClusterCredential", req, resp, cb);
    }

    /**
     * 查询通过应用市场安装的某个应用详情
     * @param {DescribeClusterReleaseDetailsRequest} req
     * @param {function(string, DescribeClusterReleaseDetailsResponse):void} cb
     * @public
     */
    DescribeClusterReleaseDetails(req, cb) {
        let resp = new DescribeClusterReleaseDetailsResponse();
        this.request("DescribeClusterReleaseDetails", req, resp, cb);
    }

    /**
     * 关闭集群审计
     * @param {DisableClusterAuditRequest} req
     * @param {function(string, DisableClusterAuditResponse):void} cb
     * @public
     */
    DisableClusterAudit(req, cb) {
        let resp = new DisableClusterAuditResponse();
        this.request("DisableClusterAudit", req, resp, cb);
    }

    /**
     * 创建边缘容器CVM机器
     * @param {CreateEdgeCVMInstancesRequest} req
     * @param {function(string, CreateEdgeCVMInstancesResponse):void} cb
     * @public
     */
    CreateEdgeCVMInstances(req, cb) {
        let resp = new CreateEdgeCVMInstancesResponse();
        this.request("CreateEdgeCVMInstances", req, resp, cb);
    }

    /**
     * 查询集群路由
     * @param {DescribeClusterRoutesRequest} req
     * @param {function(string, DescribeClusterRoutesResponse):void} cb
     * @public
     */
    DescribeClusterRoutes(req, cb) {
        let resp = new DescribeClusterRoutesResponse();
        this.request("DescribeClusterRoutes", req, resp, cb);
    }

    /**
     * 获得实例级别抓取配置
     * @param {DescribePrometheusGlobalConfigRequest} req
     * @param {function(string, DescribePrometheusGlobalConfigResponse):void} cb
     * @public
     */
    DescribePrometheusGlobalConfig(req, cb) {
        let resp = new DescribePrometheusGlobalConfigResponse();
        this.request("DescribePrometheusGlobalConfig", req, resp, cb);
    }

    /**
     * 同步模板到实例或者集群，针对V2版本实例
     * @param {SyncPrometheusTempRequest} req
     * @param {function(string, SyncPrometheusTempResponse):void} cb
     * @public
     */
    SyncPrometheusTemp(req, cb) {
        let resp = new SyncPrometheusTempResponse();
        this.request("SyncPrometheusTemp", req, resp, cb);
    }

    /**
     * 查询容器实例中容器日志
     * @param {DescribeEksContainerInstanceLogRequest} req
     * @param {function(string, DescribeEksContainerInstanceLogResponse):void} cb
     * @public
     */
    DescribeEksContainerInstanceLog(req, cb) {
        let resp = new DescribeEksContainerInstanceLogResponse();
        this.request("DescribeEksContainerInstanceLog", req, resp, cb);
    }

    /**
     * 检查给定节点列表中哪些是可升级的
     * @param {CheckInstancesUpgradeAbleRequest} req
     * @param {function(string, CheckInstancesUpgradeAbleResponse):void} cb
     * @public
     */
    CheckInstancesUpgradeAble(req, cb) {
        let resp = new CheckInstancesUpgradeAbleResponse();
        this.request("CheckInstancesUpgradeAble", req, resp, cb);
    }

    /**
     * 创建grafana监控面板
     * @param {CreatePrometheusDashboardRequest} req
     * @param {function(string, CreatePrometheusDashboardResponse):void} cb
     * @public
     */
    CreatePrometheusDashboard(req, cb) {
        let resp = new CreatePrometheusDashboardResponse();
        this.request("CreatePrometheusDashboard", req, resp, cb);
    }

    /**
     * 获取实例列表
     * @param {DescribePrometheusOverviewsRequest} req
     * @param {function(string, DescribePrometheusOverviewsResponse):void} cb
     * @public
     */
    DescribePrometheusOverviews(req, cb) {
        let resp = new DescribePrometheusOverviewsResponse();
        this.request("DescribePrometheusOverviews", req, resp, cb);
    }

    /**
     * 获取边缘计算集群的当前状态以及过程信息
     * @param {DescribeTKEEdgeClusterStatusRequest} req
     * @param {function(string, DescribeTKEEdgeClusterStatusResponse):void} cb
     * @public
     */
    DescribeTKEEdgeClusterStatus(req, cb) {
        let resp = new DescribeTKEEdgeClusterStatusResponse();
        this.request("DescribeTKEEdgeClusterStatus", req, resp, cb);
    }

    /**
     * 创建告警策略
     * @param {CreatePrometheusAlertPolicyRequest} req
     * @param {function(string, CreatePrometheusAlertPolicyResponse):void} cb
     * @public
     */
    CreatePrometheusAlertPolicy(req, cb) {
        let resp = new CreatePrometheusAlertPolicyResponse();
        this.request("CreatePrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * 删除一个云原生Prometheus配置模板
     * @param {DeletePrometheusTemplateRequest} req
     * @param {function(string, DeletePrometheusTemplateResponse):void} cb
     * @public
     */
    DeletePrometheusTemplate(req, cb) {
        let resp = new DeletePrometheusTemplateResponse();
        this.request("DeletePrometheusTemplate", req, resp, cb);
    }

    /**
     * 获取2.0实例告警策略列表
     * @param {DescribePrometheusAlertPolicyRequest} req
     * @param {function(string, DescribePrometheusAlertPolicyResponse):void} cb
     * @public
     */
    DescribePrometheusAlertPolicy(req, cb) {
        let resp = new DescribePrometheusAlertPolicyResponse();
        this.request("DescribePrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * 获取被关联集群列表
     * @param {DescribePrometheusAgentsRequest} req
     * @param {function(string, DescribePrometheusAgentsResponse):void} cb
     * @public
     */
    DescribePrometheusAgents(req, cb) {
        let resp = new DescribePrometheusAgentsResponse();
        this.request("DescribePrometheusAgents", req, resp, cb);
    }

    /**
     * 关闭事件持久化功能
     * @param {DisableEventPersistenceRequest} req
     * @param {function(string, DisableEventPersistenceResponse):void} cb
     * @public
     */
    DisableEventPersistence(req, cb) {
        let resp = new DisableEventPersistenceResponse();
        this.request("DisableEventPersistence", req, resp, cb);
    }

    /**
     * 删除集群访问端口
     * @param {DeleteClusterEndpointRequest} req
     * @param {function(string, DeleteClusterEndpointResponse):void} cb
     * @public
     */
    DeleteClusterEndpoint(req, cb) {
        let resp = new DeleteClusterEndpointResponse();
        this.request("DeleteClusterEndpoint", req, resp, cb);
    }

    /**
     * 在应用市场中给集群创建应用
     * @param {CreateClusterReleaseRequest} req
     * @param {function(string, CreateClusterReleaseResponse):void} cb
     * @public
     */
    CreateClusterRelease(req, cb) {
        let resp = new CreateClusterReleaseResponse();
        this.request("CreateClusterRelease", req, resp, cb);
    }

    /**
     * 查看虚拟节点池列表
     * @param {DescribeClusterVirtualNodePoolsRequest} req
     * @param {function(string, DescribeClusterVirtualNodePoolsResponse):void} cb
     * @public
     */
    DescribeClusterVirtualNodePools(req, cb) {
        let resp = new DescribeClusterVirtualNodePoolsResponse();
        this.request("DescribeClusterVirtualNodePools", req, resp, cb);
    }

    /**
     * 获取集群规模价格
     * @param {GetClusterLevelPriceRequest} req
     * @param {function(string, GetClusterLevelPriceResponse):void} cb
     * @public
     */
    GetClusterLevelPrice(req, cb) {
        let resp = new GetClusterLevelPriceResponse();
        this.request("GetClusterLevelPrice", req, resp, cb);
    }

    /**
     * 修改模板内容
     * @param {ModifyPrometheusTemplateRequest} req
     * @param {function(string, ModifyPrometheusTemplateResponse):void} cb
     * @public
     */
    ModifyPrometheusTemplate(req, cb) {
        let resp = new ModifyPrometheusTemplateResponse();
        this.request("ModifyPrometheusTemplate", req, resp, cb);
    }

    /**
     * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
     * @param {DescribeClusterKubeconfigRequest} req
     * @param {function(string, DescribeClusterKubeconfigResponse):void} cb
     * @public
     */
    DescribeClusterKubeconfig(req, cb) {
        let resp = new DescribeClusterKubeconfigResponse();
        this.request("DescribeClusterKubeconfig", req, resp, cb);
    }

    /**
     * 可以查询边缘集群升级信息，包含可以升级的组件，当前升级状态和升级错误信息
     * @param {DescribeEdgeClusterUpgradeInfoRequest} req
     * @param {function(string, DescribeEdgeClusterUpgradeInfoResponse):void} cb
     * @public
     */
    DescribeEdgeClusterUpgradeInfo(req, cb) {
        let resp = new DescribeEdgeClusterUpgradeInfoResponse();
        this.request("DescribeEdgeClusterUpgradeInfo", req, resp, cb);
    }

    /**
     * 在应用市场中集群回滚应用至某个历史版本
     * @param {RollbackClusterReleaseRequest} req
     * @param {function(string, RollbackClusterReleaseResponse):void} cb
     * @public
     */
    RollbackClusterRelease(req, cb) {
        let resp = new RollbackClusterReleaseResponse();
        this.request("RollbackClusterRelease", req, resp, cb);
    }

    /**
     * 拉取Prometheus配置
     * @param {DescribePrometheusConfigRequest} req
     * @param {function(string, DescribePrometheusConfigResponse):void} cb
     * @public
     */
    DescribePrometheusConfig(req, cb) {
        let resp = new DescribePrometheusConfigResponse();
        this.request("DescribePrometheusConfig", req, resp, cb);
    }

    /**
     * 在应用市场中取消安装失败的应用
     * @param {CancelClusterReleaseRequest} req
     * @param {function(string, CancelClusterReleaseResponse):void} cb
     * @public
     */
    CancelClusterRelease(req, cb) {
        let resp = new CancelClusterReleaseResponse();
        this.request("CancelClusterRelease", req, resp, cb);
    }

    /**
     * 查询边缘计算集群的节点信息
     * @param {DescribeEdgeClusterInstancesRequest} req
     * @param {function(string, DescribeEdgeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeEdgeClusterInstances(req, cb) {
        let resp = new DescribeEdgeClusterInstancesResponse();
        this.request("DescribeEdgeClusterInstances", req, resp, cb);
    }

    /**
     * 集群弹性伸缩配置
     * @param {DescribeClusterAsGroupOptionRequest} req
     * @param {function(string, DescribeClusterAsGroupOptionResponse):void} cb
     * @public
     */
    DescribeClusterAsGroupOption(req, cb) {
        let resp = new DescribeClusterAsGroupOptionResponse();
        this.request("DescribeClusterAsGroupOption", req, resp, cb);
    }

    /**
     * 查询弹性集群列表
     * @param {DescribeEKSClustersRequest} req
     * @param {function(string, DescribeEKSClustersResponse):void} cb
     * @public
     */
    DescribeEKSClusters(req, cb) {
        let resp = new DescribeEKSClustersResponse();
        this.request("DescribeEKSClusters", req, resp, cb);
    }

    /**
     * 集群关联的伸缩组列表
     * @param {DescribeClusterAsGroupsRequest} req
     * @param {function(string, DescribeClusterAsGroupsResponse):void} cb
     * @public
     */
    DescribeClusterAsGroups(req, cb) {
        let resp = new DescribeClusterAsGroupsResponse();
        this.request("DescribeClusterAsGroups", req, resp, cb);
    }

    /**
     * 创建节点池
     * @param {CreateClusterNodePoolRequest} req
     * @param {function(string, CreateClusterNodePoolResponse):void} cb
     * @public
     */
    CreateClusterNodePool(req, cb) {
        let resp = new CreateClusterNodePoolResponse();
        this.request("CreateClusterNodePool", req, resp, cb);
    }

    /**
     * 创建边缘集群日志采集配置
     * @param {CreateEdgeLogConfigRequest} req
     * @param {function(string, CreateEdgeLogConfigResponse):void} cb
     * @public
     */
    CreateEdgeLogConfig(req, cb) {
        let resp = new CreateEdgeLogConfigResponse();
        this.request("CreateEdgeLogConfig", req, resp, cb);
    }

    /**
     * 删除一个云原生Prometheus配置模板
     * @param {DeletePrometheusTempRequest} req
     * @param {function(string, DeletePrometheusTempResponse):void} cb
     * @public
     */
    DeletePrometheusTemp(req, cb) {
        let resp = new DeletePrometheusTempResponse();
        this.request("DeletePrometheusTemp", req, resp, cb);
    }

    /**
     * 本接口用于查询开启vpc-cni模式的任务进度
     * @param {DescribeEnableVpcCniProgressRequest} req
     * @param {function(string, DescribeEnableVpcCniProgressResponse):void} cb
     * @public
     */
    DescribeEnableVpcCniProgress(req, cb) {
        let resp = new DescribeEnableVpcCniProgressResponse();
        this.request("DescribeEnableVpcCniProgress", req, resp, cb);
    }

    /**
     * 启用集群删除保护
     * @param {EnableClusterDeletionProtectionRequest} req
     * @param {function(string, EnableClusterDeletionProtectionResponse):void} cb
     * @public
     */
    EnableClusterDeletionProtection(req, cb) {
        let resp = new EnableClusterDeletionProtectionResponse();
        this.request("EnableClusterDeletionProtection", req, resp, cb);
    }

    /**
     * 操作TKEEdge集群的addon
     * @param {ForwardTKEEdgeApplicationRequestV3Request} req
     * @param {function(string, ForwardTKEEdgeApplicationRequestV3Response):void} cb
     * @public
     */
    ForwardTKEEdgeApplicationRequestV3(req, cb) {
        let resp = new ForwardTKEEdgeApplicationRequestV3Response();
        this.request("ForwardTKEEdgeApplicationRequestV3", req, resp, cb);
    }

    /**
     * 查询镜像缓存信息接口
     * @param {DescribeImageCachesRequest} req
     * @param {function(string, DescribeImageCachesResponse):void} cb
     * @public
     */
    DescribeImageCaches(req, cb) {
        let resp = new DescribeImageCachesResponse();
        this.request("DescribeImageCaches", req, resp, cb);
    }

    /**
     * 查询集群在应用市场中已安装应用列表
     * @param {DescribeClusterReleasesRequest} req
     * @param {function(string, DescribeClusterReleasesResponse):void} cb
     * @public
     */
    DescribeClusterReleases(req, cb) {
        let resp = new DescribeClusterReleasesResponse();
        this.request("DescribeClusterReleases", req, resp, cb);
    }

    /**
     * 升级集群中已安装的应用
     * @param {UpgradeClusterReleaseRequest} req
     * @param {function(string, UpgradeClusterReleaseResponse):void} cb
     * @public
     */
    UpgradeClusterRelease(req, cb) {
        let resp = new UpgradeClusterReleaseResponse();
        this.request("UpgradeClusterRelease", req, resp, cb);
    }

    /**
     * 查询容器实例支持的地域
     * @param {DescribeEKSContainerInstanceRegionsRequest} req
     * @param {function(string, DescribeEKSContainerInstanceRegionsResponse):void} cb
     * @public
     */
    DescribeEKSContainerInstanceRegions(req, cb) {
        let resp = new DescribeEKSContainerInstanceRegionsResponse();
        this.request("DescribeEKSContainerInstanceRegions", req, resp, cb);
    }

    /**
     * 修改边缘计算集群名称等属性 
     * @param {UpdateTKEEdgeClusterRequest} req
     * @param {function(string, UpdateTKEEdgeClusterResponse):void} cb
     * @public
     */
    UpdateTKEEdgeCluster(req, cb) {
        let resp = new UpdateTKEEdgeClusterResponse();
        this.request("UpdateTKEEdgeCluster", req, resp, cb);
    }

    /**
     * 移出节点池节点，但保留在集群内
     * @param {RemoveNodeFromNodePoolRequest} req
     * @param {function(string, RemoveNodeFromNodePoolResponse):void} cb
     * @public
     */
    RemoveNodeFromNodePool(req, cb) {
        let resp = new RemoveNodeFromNodePoolResponse();
        this.request("RemoveNodeFromNodePool", req, resp, cb);
    }

    /**
     * 拉取模板列表，默认模板将总是在最前面
     * @param {DescribePrometheusTemplatesRequest} req
     * @param {function(string, DescribePrometheusTemplatesResponse):void} cb
     * @public
     */
    DescribePrometheusTemplates(req, cb) {
        let resp = new DescribePrometheusTemplatesResponse();
        this.request("DescribePrometheusTemplates", req, resp, cb);
    }

    /**
     * 获取与云监控融合实例列表
     * @param {DescribePrometheusInstancesOverviewRequest} req
     * @param {function(string, DescribePrometheusInstancesOverviewResponse):void} cb
     * @public
     */
    DescribePrometheusInstancesOverview(req, cb) {
        let resp = new DescribePrometheusInstancesOverviewResponse();
        this.request("DescribePrometheusInstancesOverview", req, resp, cb);
    }

    /**
     * 删除集群中的实例
     * @param {DeleteClusterInstancesRequest} req
     * @param {function(string, DeleteClusterInstancesResponse):void} cb
     * @public
     */
    DeleteClusterInstances(req, cb) {
        let resp = new DeleteClusterInstancesResponse();
        this.request("DeleteClusterInstances", req, resp, cb);
    }

    /**
     * 解除模板同步，这将会删除目标中该模板所生产的配置，针对V2版本实例
     * @param {DeletePrometheusTempSyncRequest} req
     * @param {function(string, DeletePrometheusTempSyncResponse):void} cb
     * @public
     */
    DeletePrometheusTempSync(req, cb) {
        let resp = new DeletePrometheusTempSyncResponse();
        this.request("DeletePrometheusTempSync", req, resp, cb);
    }

    /**
     * 创建prometheus配置
     * @param {CreatePrometheusConfigRequest} req
     * @param {function(string, CreatePrometheusConfigResponse):void} cb
     * @public
     */
    CreatePrometheusConfig(req, cb) {
        let resp = new CreatePrometheusConfigResponse();
        this.request("CreatePrometheusConfig", req, resp, cb);
    }

    /**
     * 初始化TMP实例，开启集成中心时调用
     * @param {RunPrometheusInstanceRequest} req
     * @param {function(string, RunPrometheusInstanceResponse):void} cb
     * @public
     */
    RunPrometheusInstance(req, cb) {
        let resp = new RunPrometheusInstanceResponse();
        this.request("RunPrometheusInstance", req, resp, cb);
    }

    /**
     * 修改弹性集群名称等属性 
     * @param {UpdateEKSClusterRequest} req
     * @param {function(string, UpdateEKSClusterResponse):void} cb
     * @public
     */
    UpdateEKSCluster(req, cb) {
        let resp = new UpdateEKSClusterResponse();
        this.request("UpdateEKSCluster", req, resp, cb);
    }

    /**
     * 获取TKE支持的App列表
     * @param {GetTkeAppChartListRequest} req
     * @param {function(string, GetTkeAppChartListResponse):void} cb
     * @public
     */
    GetTkeAppChartList(req, cb) {
        let resp = new GetTkeAppChartListResponse();
        this.request("GetTkeAppChartList", req, resp, cb);
    }

    /**
     * 创建虚拟节点
     * @param {CreateClusterVirtualNodeRequest} req
     * @param {function(string, CreateClusterVirtualNodeResponse):void} cb
     * @public
     */
    CreateClusterVirtualNode(req, cb) {
        let resp = new CreateClusterVirtualNodeResponse();
        this.request("CreateClusterVirtualNode", req, resp, cb);
    }

    /**
     * 检查边缘计算集群的CIDR是否冲突
     * @param {CheckEdgeClusterCIDRRequest} req
     * @param {function(string, CheckEdgeClusterCIDRResponse):void} cb
     * @public
     */
    CheckEdgeClusterCIDR(req, cb) {
        let resp = new CheckEdgeClusterCIDRResponse();
        this.request("CheckEdgeClusterCIDR", req, resp, cb);
    }

    /**
     * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @param {CreateClusterEndpointVipRequest} req
     * @param {function(string, CreateClusterEndpointVipResponse):void} cb
     * @public
     */
    CreateClusterEndpointVip(req, cb) {
        let resp = new CreateClusterEndpointVipResponse();
        this.request("CreateClusterEndpointVip", req, resp, cb);
    }


}
module.exports = TkeClient;
