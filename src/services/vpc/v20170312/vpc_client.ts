/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  GenerateVpnConnectionDefaultHealthCheckIpRequest,
  CreateNetworkAclResponse,
  NetworkAcl,
  ModifyAddressTemplateAttributeResponse,
  DisassociateDhcpIpWithAddressIpRequest,
  SecurityGroupLimitSet,
  LockCcnsRequest,
  CreateRoutesRequest,
  DescribeHaVipsResponse,
  SecurityGroupAssociationStatistics,
  DeleteServiceTemplateResponse,
  CreateServiceTemplateRequest,
  CreateVpcPeeringConnectionRequest,
  ResetTrafficMirrorFilterRequest,
  DescribeBandwidthPackageResourcesRequest,
  DescribeVpnConnectionsRequest,
  CreateAssistantCidrRequest,
  RejectVpcPeeringConnectionRequest,
  DescribeNetworkInterfacesRequest,
  DescribeVpcLimitsRequest,
  ReleaseIp6AddressesBandwidthResponse,
  DescribeVpcIpv6AddressesRequest,
  SslVpnClient,
  SourceIpTranslationNatRule,
  DescribeRoutesResponse,
  ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse,
  ModifyIp6RuleResponse,
  DeleteCdcLDCXListResponse,
  SetVpnGatewaysRenewFlagRequest,
  ModifyCcnRegionBandwidthLimitsTypeResponse,
  DescribeVpnGatewaysResponse,
  ModifyNetworkAclQuintupleEntriesRequest,
  ServiceTemplateGroup,
  CreateDhcpIpResponse,
  SecurityGroupPolicy,
  DeleteVpnGatewaySslServerResponse,
  CreateHighPriorityRouteTableResponse,
  DescribeIpGeolocationInfosRequest,
  AddTemplateMemberResponse,
  ReplaceHighPriorityRouteTableAssociationRequest,
  CreateDefaultSecurityGroupRequest,
  CreateSnapshotPoliciesResponse,
  DescribeServiceTemplateGroupsResponse,
  DescribeVpcEndPointRequest,
  ResourceStatisticsItem,
  ModifyVpcPeeringConnectionRequest,
  DetachClassicLinkVpcRequest,
  DescribeBandwidthPackageBillUsageResponse,
  DeleteBandwidthPackageResponse,
  ModifyNatGatewayAttributeRequest,
  DescribeLocalGatewayRequest,
  FlowLog,
  DescribeVpcLimitsResponse,
  CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest,
  NatDirectConnectGatewayRoute,
  IpField,
  DescribeReserveIpAddressesRequest,
  AddBandwidthPackageResourcesRequest,
  AssignIpv6SubnetCidrBlockRequest,
  DeleteVpnGatewaySslClientResponse,
  DescribeCrossBorderComplianceRequest,
  CreateVpcResponse,
  AssistantCidr,
  ModifyVpnGatewaySslClientCertRequest,
  ModifyNetworkAclEntriesRequest,
  DescribeVpcPrivateIpAddressesRequest,
  AddressTemplate,
  StopTrafficMirrorResponse,
  DeleteHaVipResponse,
  VpnGatewayQuota,
  DeleteVpnGatewaySslClientRequest,
  DescribeBandwidthPackageBillUsageRequest,
  CcnRouteTableSelectPolicy,
  DescribeRouteTableSelectionPoliciesResponse,
  UnassignIpv6AddressesResponse,
  CreateIp6TranslatorsResponse,
  DescribeFlowLogsRequest,
  CcnRegionBandwidthLimitInfo,
  CloneSecurityGroupRequest,
  AssociateNatGatewayAddressRequest,
  DescribeFlowLogsResponse,
  InstanceBind,
  ModifyHighPriorityRouteAttributeResponse,
  CreateVpnGatewaySslServerRequest,
  CreateVpcEndPointRequest,
  ModifyBandwidthPackageAttributeRequest,
  TransformAddressResponse,
  DisassociateNetworkInterfaceSecurityGroupsRequest,
  DeleteNetworkAclEntriesRequest,
  SecurityGroupPolicySet,
  DescribeHighPriorityRoutesRequest,
  ModifyFlowLogAttributeRequest,
  UnassignIpv6SubnetCidrBlockResponse,
  ReplaceHighPriorityRoutesResponse,
  ModifyVpcEndPointServiceAttributeRequest,
  FilterObject,
  DescribeIpGeolocationInfosResponse,
  DescribeVpcTaskResultRequest,
  AssociateNetworkAclSubnetsResponse,
  DeletePrivateNatGatewayTranslationNatRuleRequest,
  DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest,
  ResetRoutesRequest,
  NetworkInterfaceAttachment,
  CheckDefaultSubnetRequest,
  PeerConnection,
  CheckNetDetectStateRequest,
  RouteTableAssociation,
  ModifyCustomerGatewayAttributeRequest,
  DescribeBandwidthPackageBandwidthRangeResponse,
  DeleteVpcEndPointServiceWhiteListRequest,
  DescribeTrafficMirrorsRequest,
  DetachSnapshotInstancesResponse,
  DetachNetworkInterfaceResponse,
  DeleteVpcEndPointServiceRequest,
  DeleteCcnResponse,
  ServiceTemplate,
  DescribeCcnAttachedInstancesRequest,
  AttachSnapshotInstancesResponse,
  DescribeNatGatewaySourceIpTranslationNatRulesRequest,
  DescribeNatGatewaysRequest,
  ModifyFlowLogAttributeResponse,
  InquiryPriceRenewVpnGatewayResponse,
  DeleteReserveIpAddressesResponse,
  ResetRoutesResponse,
  DescribePrivateNatGatewayRegionsResponse,
  ReplaceSecurityGroupPoliciesResponse,
  DescribeDirectConnectGatewaysRequest,
  DescribeSpecificTrafficPackageUsedDetailsResponse,
  DescribeIPv6AddressesResponse,
  AttachSnapshotInstancesRequest,
  ModifyIp6TranslatorResponse,
  CreateVpcEndPointServiceWhiteListResponse,
  AssociateInstancesToCcnRouteTableRequest,
  UnlockCcnBandwidthsRequest,
  DeleteIp6TranslatorsResponse,
  DescribeNatGatewaySourceIpTranslationNatRulesResponse,
  DescribeHighPriorityRouteTablesResponse,
  DescribeRouteConflictsResponse,
  AcceptAttachCcnInstancesRequest,
  CreateNetworkAclQuintupleEntriesResponse,
  DescribeGatewayFlowMonitorDetailResponse,
  IpGeolocationInfo,
  ResetTrafficMirrorTargetResponse,
  RemoveBandwidthPackageResourcesResponse,
  TranslationNatRuleInput,
  DeleteFlowLogRequest,
  DownloadVpnGatewaySslClientCertResponse,
  DescribeSnapshotFilesRequest,
  HaVipDisassociateAddressIpResponse,
  TranslationNatRuleDiff,
  DisassociateVpcEndPointSecurityGroupsRequest,
  IKEOptionsSpecification,
  DescribeTaskResultRequest,
  ModifyAddressInternetChargeTypeResponse,
  SetCcnRegionBandwidthLimitsResponse,
  UnassignIpv6SubnetCidrBlockRequest,
  ModifyIPv6AddressesBandwidthRequest,
  DeleteVpcEndPointServiceResponse,
  ModifyNetworkAclQuintupleEntriesResponse,
  AssignIpv6CidrBlockRequest,
  CreateSecurityGroupPoliciesResponse,
  UnassignIpv6CidrBlockResponse,
  ModifyVpnGatewayRoutesRequest,
  HaVipAssociateAddressIpRequest,
  DisassociateNatGatewayAddressResponse,
  DeleteRoutesResponse,
  ModifyDhcpIpAttributeRequest,
  CcnRouteTableInputPolicy,
  DescribeSecurityGroupAssociationStatisticsResponse,
  ModifyAssistantCidrResponse,
  CidrForCcn,
  NatGatewayAddress,
  ModifyHighPriorityRouteECMPAlgorithmResponse,
  DescribeVpcEndPointServiceResponse,
  ModifyNetworkAclEntriesResponse,
  DescribeCdcNetPlanesResponse,
  ModifyVpcEndPointAttributeResponse,
  DescribeFlowLogRequest,
  DescribeTenantCcnsRequest,
  DescribeIp6AddressesRequest,
  TrafficFlow,
  DescribeAccountAttributesRequest,
  AddIp6RulesRequest,
  DescribeAccountAttributesResponse,
  ModifyAddressesRenewFlagRequest,
  ModifyPrivateNatGatewayTranslationNatRuleRequest,
  AssignPrivateIpAddressesResponse,
  DescribeSecurityGroupsRequest,
  RefreshDirectConnectGatewayRouteToNatGatewayRequest,
  DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest,
  NetworkAclEntry,
  ModifyNetworkAclAttributeResponse,
  ModifyIPv6AddressesAttributesRequest,
  CreateVpnGatewayRoutesRequest,
  DisassociateNetworkAclSubnetsResponse,
  BandwidthRange,
  ModifyAddressInternetChargeTypeRequest,
  ModifyIp6AddressesBandwidthRequest,
  DisableVpnGatewaySslClientCertResponse,
  CreateLocalGatewayRequest,
  DescribeDirectConnectGatewaysResponse,
  AddBandwidthPackageResourcesResponse,
  DeleteHighPriorityRouteTablesRequest,
  CreateSecurityGroupWithPoliciesResponse,
  DeleteAddressTemplateResponse,
  ResumeSnapshotInstanceResponse,
  ModifySubnetAttributeResponse,
  ResetNatGatewayConnectionRequest,
  ResetHighPriorityRoutesResponse,
  ModifyCcnAttachedInstancesAttributeRequest,
  DescribeNetworkAccountTypeRequest,
  TrafficQosPolicySet,
  DeleteAddressTemplateRequest,
  CreateNatGatewaySourceIpTranslationNatRuleRequest,
  NetworkInterface,
  TransformAddressRequest,
  ReplaceDirectConnectGatewayCcnRoutesRequest,
  ReferredSecurityGroup,
  ModifyAddressTemplateAttributeRequest,
  CreateCdcLDCXListRequest,
  CreateNatGatewayResponse,
  DescribeVpnGatewaySslClientsRequest,
  ModifyDirectConnectGatewayAttributeRequest,
  VpcEndPointServiceUser,
  ModifyRouteTableSelectionPoliciesRequest,
  RejectVpcPeeringConnectionResponse,
  ClearRouteTableSelectionPoliciesRequest,
  CreateTrafficPackagesResponse,
  ModifySecurityGroupAttributeRequest,
  DescribeVpnGatewaySslServersRequest,
  ModifyNetDetectRequest,
  SetVpnGatewaysRenewFlagResponse,
  AssociateInstancesToCcnRouteTableResponse,
  DescribeNetDetectStatesResponse,
  DeleteVpnGatewaySslServerRequest,
  AllocateIp6AddressesBandwidthResponse,
  DescribeNetDetectStatesRequest,
  DescribeRouteConflictsRequest,
  DescribeFlowLogResponse,
  DownloadCustomerGatewayConfigurationResponse,
  DescribeBandwidthPackagesRequest,
  DeleteDirectConnectGatewayCcnRoutesResponse,
  HaVipAssociation,
  DescribeAssistantCidrResponse,
  DescribeHaVipsRequest,
  UpdateTrafficMirrorDirectionResponse,
  IpAddressStates,
  DescribeRouteTableSelectionPoliciesRequest,
  InstanceStatistic,
  InternetPriceDetail,
  CreateVpnConnectionRequest,
  PrivateNatGatewayLimit,
  CcnRoute,
  ResetTrafficMirrorFilterResponse,
  ModifyIpv6AddressesAttributeResponse,
  DescribeTrafficPackagesRequest,
  DeleteSecurityGroupPoliciesRequest,
  VpnConnection,
  DescribeCcnsRequest,
  ModifyNatGatewayAttributeResponse,
  DescribeNetDetectsRequest,
  CreateAddressTemplateGroupRequest,
  RouteECMPAlgorithm,
  AssociateIPv6AddressRequest,
  DescribeCustomerGatewayVendorsResponse,
  DeleteCdcLDCXListRequest,
  RouteConflict,
  DeleteSubnetResponse,
  EnableSnapshotPoliciesResponse,
  Vpc,
  CreateVpnGatewayResponse,
  DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse,
  FlowLogStorage,
  AllocateIp6AddressesBandwidthRequest,
  ResumeSnapshotInstanceRequest,
  DescribeVpcIpv6AddressesResponse,
  ResetAttachCcnInstancesResponse,
  Ip6RuleInfo,
  RejectAttachCcnInstancesRequest,
  DescribeTrafficQosPolicyRequest,
  ModifyCcnRegionBandwidthLimitsTypeRequest,
  DescribeRouteListResponse,
  DescribeVpcResourceDashboardRequest,
  ModifyIp6RuleRequest,
  ReplaceRouteTableAssociationRequest,
  PrivateNatCrossDomainInfo,
  LocalDestinationIpPortTranslationNatRule,
  AssociateNetworkAclSubnetsRequest,
  ModifyVpnGatewaySslServerResponse,
  AdjustPublicAddressResponse,
  DescribeVpnConnectionsResponse,
  RenewVpnGatewayRequest,
  AssociateIPv6AddressResponse,
  DescribeCdcNetPlanesRequest,
  DescribePrivateNatGatewayRegionsRequest,
  DescribeSnapshotPoliciesRequest,
  DeleteTrafficPackagesRequest,
  NotifyRoutesRequest,
  DeleteVpcRequest,
  DeleteCcnRouteTablesRequest,
  ModifyServiceTemplateAttributeResponse,
  DescribeCcnsResponse,
  ModifyCdcNetPlaneAttributeRequest,
  TemplateLimit,
  PolicyStatistics,
  CreateCdcLDCXListResponse,
  CreateSubnetResponse,
  DescribeAddressBandwidthRangeResponse,
  DescribeSecurityGroupPoliciesResponse,
  DescribeGatewayFlowQosResponse,
  ModifySecurityGroupPoliciesRequest,
  ModifyPrivateNatGatewayAttributeResponse,
  NatGateway,
  AssociateDhcpIpWithAddressIpRequest,
  ReplaceRoutesRequest,
  CreateCustomerGatewayResponse,
  TrafficPackage,
  CreateTrafficMirrorResponse,
  WithdrawNotifyRoutesRequest,
  ResourceDashboard,
  DescribeSubnetResourceDashboardRequest,
  DescribeIpGeolocationDatabaseUrlResponse,
  VpcTaskResultDetailInfo,
  DeleteServiceTemplateGroupResponse,
  DirectConnectSubnet,
  NetworkAclEntrySet,
  StartTrafficMirrorResponse,
  DeleteVpnConnectionResponse,
  DescribeVpnGatewaySslClientsResponse,
  ReleaseIPv6AddressesResponse,
  CreateCcnResponse,
  EnableCcnRoutesRequest,
  Tag,
  DescribeCcnAttachedInstancesResponse,
  DefaultVpcSubnet,
  DescribeIp6TranslatorsRequest,
  CreateSubnetsResponse,
  DescribeGatewayFlowMonitorDetailRequest,
  ResetTrafficMirrorSrcsRequest,
  InquiryPriceCreateVpnGatewayResponse,
  DescribeSecurityGroupLimitsResponse,
  CustomerGateway,
  DescribeCcnRouteTableInputPolicysResponse,
  ModifyBandwidthPackageAttributeResponse,
  CreateVpnGatewaySslServerResponse,
  DisassociateIPv6AddressRequest,
  PrivateNatDestinationIpPortTranslationNatRule,
  CreateHighPriorityRouteTableRequest,
  DeleteNetworkAclRequest,
  CreateHighPriorityRoutesRequest,
  NatGatewayDestinationIpPortTranslationNatRule,
  CloneSecurityGroupResponse,
  CcnBandwidth,
  ModifyIp6TranslatorRequest,
  CreateVpnConnectionResponse,
  DescribeCdcUsedIdcVlanResponse,
  AddressTemplateSpecification,
  VpcIpv6Address,
  AssignIpv6AddressesRequest,
  CreateServiceTemplateGroupResponse,
  NetDetect,
  VpnGatewayRouteModify,
  DisableSnapshotPoliciesRequest,
  MemberInfo,
  ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleRequest,
  ReplaceHighPriorityRoutesRequest,
  DeleteHighPriorityRoutesResponse,
  ReplaceSecurityGroupPolicyRequest,
  ModifyVpcEndPointServiceAttributeResponse,
  DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse,
  DescribeReserveIpAddressesResponse,
  DescribeSnapshotFilesResponse,
  CreateFlowLogResponse,
  CreateNetworkAclEntriesRequest,
  TrafficMirror,
  DeleteCustomerGatewayResponse,
  CreateVpnGatewayRoutesResponse,
  CreateNetDetectRequest,
  CreateAddressTemplateResponse,
  CreateNatGatewayDestinationIpPortTranslationNatRuleResponse,
  DeleteAddressTemplateGroupRequest,
  CreateVpnGatewaySslClientResponse,
  DescribeNetworkInterfaceLimitRequest,
  ModifyVpnGatewayRoutesResponse,
  AddressTemplateItem,
  DescribeIp6AddressesResponse,
  ModifyRouteTableAttributeRequest,
  ModifyDirectConnectGatewayAttributeResponse,
  DescribeVpnGatewaysRequest,
  NetDetectIpState,
  InternetPrice,
  ModifyIp6AddressesBandwidthResponse,
  CreateSubnetsRequest,
  DescribeVpcEndPointServiceRequest,
  DisableSnapshotPoliciesResponse,
  ResetTrafficMirrorSrcsResponse,
  ModifyServiceTemplateAttributeRequest,
  ModifyPrivateNatGatewayAttributeRequest,
  AssociateAddressResponse,
  AccessPolicy,
  ModifyCcnAttachedInstancesAttributeResponse,
  CreateNetworkAclRequest,
  DescribeAddressesRequest,
  DescribeVpcsRequest,
  DescribeSecurityGroupPoliciesRequest,
  ModifyIPv6AddressesAttributesResponse,
  InquiryPriceRenewAddressesRequest,
  CreateSecurityGroupResponse,
  DisassociateNetworkInterfaceSecurityGroupsResponse,
  DescribeIp6TranslatorQuotaRequest,
  DescribeHighPriorityRoutesResponse,
  DescribePrivateNatGatewayLimitsResponse,
  DescribeNetworkInterfaceLimitResponse,
  AssignIpv6CidrBlockResponse,
  CreateCcnRequest,
  DeleteTemplateMemberResponse,
  ModifyNatGatewaySourceIpTranslationNatRuleRequest,
  RemoveIp6RulesRequest,
  CreatePrivateNatGatewayTranslationNatRuleRequest,
  DescribeIpGeolocationDatabaseUrlRequest,
  DescribeVpcEndPointResponse,
  DescribeNetworkAclQuintupleEntriesRequest,
  NetDetectState,
  DescribeSnapshotPoliciesResponse,
  DisableGatewayFlowMonitorRequest,
  DescribeCcnRouteTableBroadcastPolicysResponse,
  EnableRoutesResponse,
  HaVipAssociateAddressIpResponse,
  DeletePrivateNatGatewayTranslationAclRuleResponse,
  DescribeSpecificTrafficPackageUsedDetailsRequest,
  DeleteVpnConnectionRequest,
  DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesRequest,
  DescribeDhcpIpsRequest,
  DescribeAssistantCidrRequest,
  RenewVpnGatewayResponse,
  DescribeCcnRouteTablesResponse,
  DeleteDirectConnectGatewayResponse,
  DescribeIPv6AddressesRequest,
  ResetVpnGatewayInternetMaxBandwidthRequest,
  EndPoint,
  RemoveIp6RulesResponse,
  DirectConnectGateway,
  DescribeProductQuotaResponse,
  Price,
  HaVipDisassociateAddressIpRequest,
  DescribeSgSnapshotFileContentResponse,
  ClearRouteTableSelectionPoliciesResponse,
  DescribeBandwidthPackageResourcesResponse,
  DescribeCrossBorderComplianceResponse,
  ModifyVpnGatewayAttributeResponse,
  AllocateIPv6AddressesRequest,
  AssociateDirectConnectGatewayNatGatewayResponse,
  EndPointService,
  DescribeVpcResourceDashboardResponse,
  DescribeVpnGatewayCcnRoutesRequest,
  DisassociateDirectConnectGatewayNatGatewayResponse,
  CreateServiceTemplateGroupRequest,
  CreateNetworkAclQuintupleEntriesRequest,
  DeleteHighPriorityRoutesRequest,
  DescribeClassicLinkInstancesResponse,
  ModifyCdcLDCXAttributeRequest,
  EnableVpnGatewaySslClientCertRequest,
  DeleteReserveIpAddressesRequest,
  DescribeVpnGatewayCcnRoutesResponse,
  DetachCcnInstancesRequest,
  ModifyVpcEndPointServiceWhiteListRequest,
  DescribeTenantCcnsResponse,
  Filter,
  MigrateNetworkInterfaceResponse,
  DeleteDirectConnectGatewayRequest,
  CreateNatGatewaySourceIpTranslationNatRuleResponse,
  DeleteNatGatewaySourceIpTranslationNatRuleResponse,
  BgpConfigAndAsn,
  DescribeAddressBandwidthRangeRequest,
  SecurityPolicyDatabase,
  CcnRouteTableInputPolicys,
  DescribeNetworkAccountTypeResponse,
  DescribeRoutesRequest,
  ModifyHighPriorityRouteTableAttributeRequest,
  CreateVpcEndPointServiceRequest,
  DescribePrivateNatGatewaysRequest,
  Ipv6Address,
  DescribePrivateNatGatewayTranslationAclRulesResponse,
  CreateNetworkInterfaceRequest,
  DeleteTrafficMirrorResponse,
  BandwidthPackageBillBandwidth,
  DescribePrivateNatGatewayTranslationAclRulesRequest,
  ConflictItem,
  CreateDirectConnectGatewayRequest,
  VpcPrivateIpAddress,
  CvmInstance,
  DescribeNetworkAclsRequest,
  DescribeNetworkAclQuintupleEntriesResponse,
  DescribeSubnetsRequest,
  CreateSubnetRequest,
  AddressTemplateGroup,
  DownloadCustomerGatewayConfigurationRequest,
  DeleteBandwidthPackageRequest,
  HaVip,
  DeleteTemplateMemberRequest,
  ModifyAddressesBandwidthResponse,
  LocalGateway,
  RejectAttachCcnInstancesResponse,
  DescribeCcnRouteTableInputPolicysRequest,
  ModifySnapshotPoliciesResponse,
  InquiryPriceRenewAddressesResponse,
  ReplaceCcnRouteTableInputPolicysResponse,
  DeleteCdcNetPlanesResponse,
  RenewAddressesResponse,
  ModifyVpnGatewaySslServerRequest,
  CcnInstanceWithoutRegion,
  DescribeCcnRoutesRequest,
  GenerateVpnConnectionDefaultHealthCheckIpResponse,
  CheckTrafficMirrorResponse,
  CreateAndAttachNetworkInterfaceRequest,
  DeleteVpcEndPointResponse,
  DeleteDhcpIpResponse,
  SslVpnSever,
  CcnRouteBroadcastPolicyRouteCondition,
  DeleteCdcNetPlanesRequest,
  DeleteNetDetectResponse,
  AllocateAddressesRequest,
  DeleteAssistantCidrResponse,
  DescribeDhcpIpsResponse,
  UnassignIpv6CidrBlockRequest,
  TranslationAclRule,
  ResetHighPriorityRoutesRequest,
  ModifyAssistantCidrRequest,
  CreateReserveIpAddressesResponse,
  CheckTrafficMirrorRequest,
  AssociateDhcpIpWithAddressIpResponse,
  ModifyTrafficMirrorAttributeResponse,
  ModifyGatewayFlowQosResponse,
  ModifyNetworkInterfaceQosResponse,
  ModifySecurityGroupAttributeResponse,
  AssociateDirectConnectGatewayNatGatewayRequest,
  DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest,
  CreatePrivateNatGatewayTranslationNatRuleResponse,
  ModifyAddressAttributeResponse,
  AttachClassicLinkVpcRequest,
  GatewayFlowMonitorDetail,
  CreateVpnGatewaySslClientRequest,
  ResetVpnConnectionResponse,
  CreateCdcNetPlanesResponse,
  DescribeVpnGatewaySslServersResponse,
  ModifyAddressesRenewFlagResponse,
  Subnet,
  DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse,
  DeleteVpnGatewayRequest,
  ReplaceRouteTableAssociationResponse,
  AttachCcnInstancesRequest,
  ModifyBandwidthPackageBandwidthResponse,
  DescribeDirectConnectGatewayCcnRoutesRequest,
  CcnInstance,
  DescribeLocalGatewayResponse,
  ItemPrice,
  DeleteNatGatewayRequest,
  ModifyBandwidthPackageBandwidthRequest,
  ModifyCustomerGatewayAttributeResponse,
  CreatePrivateNatGatewayTranslationAclRuleResponse,
  DeletePrivateNatGatewayTranslationNatRuleResponse,
  BgpConfig,
  CcnRouteTableBroadcastPolicys,
  AssignIpv6SubnetCidrBlockResponse,
  CreateVpcEndPointResponse,
  CreateReserveIpAddressesRequest,
  DescribeCcnRegionBandwidthLimitsResponse,
  ModifyTemplateMemberRequest,
  DisableCcnRoutesRequest,
  EnableSnapshotPoliciesRequest,
  ModifyVpnGatewaySslClientCertResponse,
  DescribeAddressesResponse,
  GatewayQos,
  DescribePrivateNatGatewayTranslationNatRulesRequest,
  DeleteCcnRouteTablesResponse,
  GetCcnRegionBandwidthLimitsRequest,
  ModifyIpv6AddressesAttributeRequest,
  DescribeCustomerGatewayVendorsRequest,
  NetworkAclQuintupleEntries,
  CcnFlowLock,
  DetachSnapshotInstancesRequest,
  ReplaceHighPriorityRouteTableAssociationResponse,
  DeleteLocalGatewayRequest,
  ResetVpnGatewayInternetMaxBandwidthResponse,
  LockCcnBandwidthsRequest,
  AddressChargePrepaid,
  DescribeCrossBorderFlowMonitorRequest,
  DestinationIpPortTranslationNatRuleDiff,
  PrivateNatGateway,
  DescribeVpnGatewayRoutesResponse,
  ModifyCcnRouteTablesResponse,
  DescribeNetworkAclsResponse,
  DescribeNatGatewayDirectConnectGatewayRouteRequest,
  DeleteFlowLogResponse,
  CreateVpnConnRoute,
  CreatePrivateNatGatewayRequest,
  CreateCcnRouteTablesRequest,
  CreateDefaultVpcResponse,
  ModifyVpcAttributeResponse,
  ModifyVpnConnectionAttributeResponse,
  DescribePrivateNatGatewayTranslationNatRulesResponse,
  PrivateIpAddressSpecification,
  AlgType,
  DestinationIpPortTranslationNatRule,
  DescribeUsedIpAddressRequest,
  DeleteRouteTableResponse,
  DescribeVpcInstancesResponse,
  AccountAttribute,
  AllocateIPv6AddressesResponse,
  DeleteDirectConnectGatewayCcnRoutesRequest,
  ModifyNatGatewaySourceIpTranslationNatRuleResponse,
  CreateDefaultVpcRequest,
  CreateNatGatewayDestinationIpPortTranslationNatRuleRequest,
  CreateFlowLogRequest,
  UsedDetail,
  Tags,
  InquirePriceCreateDirectConnectGatewayRequest,
  AttachNetworkInterfaceResponse,
  DisassociateNatGatewayAddressRequest,
  CreateHighPriorityRoutesResponse,
  CreateSnapshotPoliciesRequest,
  DescribeRouteTablesRequest,
  DescribeVpcPeeringConnectionsResponse,
  CreateHaVipResponse,
  DescribeSecurityGroupReferencesRequest,
  DescribeTemplateLimitsResponse,
  CheckDefaultSubnetResponse,
  DescribeVpcPrivateIpAddressesResponse,
  ModifyReserveIpAddressRequest,
  DisableRoutesRequest,
  DisassociateDirectConnectGatewayNatGatewayRequest,
  DescribeRouteTableAssociatedInstancesRequest,
  ReleaseIPv6AddressesRequest,
  DisassociateIPv6AddressResponse,
  DescribeAddressTemplateGroupsResponse,
  SetCcnRegionBandwidthLimitsRequest,
  ModifyPrivateNatGatewayTranslationAclRuleResponse,
  CreateDirectConnectGatewayCcnRoutesRequest,
  ModifyGatewayFlowQosRequest,
  StopTrafficMirrorRequest,
  ModifyHighPriorityRouteTableAttributeResponse,
  CreateDirectConnectGatewayCcnRoutesResponse,
  CreateRouteTableRequest,
  StartTrafficMirrorRequest,
  MigrateNetworkInterfaceRequest,
  DescribeCustomerGatewaysRequest,
  ModifyReserveIpAddressResponse,
  ProductQuota,
  DisableRoutesResponse,
  ModifySnapshotPoliciesRequest,
  ModifyAddressAttributeRequest,
  DhcpIp,
  DeleteAssistantCidrRequest,
  DisableVpnGatewaySslClientCertRequest,
  CreateRouteTableResponse,
  SubnetInput,
  DescribeNatGatewayDirectConnectGatewayRouteResponse,
  EnableVpcEndPointConnectResponse,
  CreateNetDetectResponse,
  InquiryPriceAllocateAddressesResponse,
  DeleteCcnRequest,
  TrafficMirrorTargetResourceInfo,
  ModifyLocalGatewayResponse,
  AssociateNetworkInterfaceSecurityGroupsResponse,
  EnableFlowLogsRequest,
  ModifyVpnGatewayAttributeRequest,
  CreateNatGatewayRequest,
  DeleteNetDetectRequest,
  IPSECOptionsSpecification,
  UnassignIpv6AddressesRequest,
  ModifyPrivateNatGatewayTranslationAclRuleRequest,
  CreateTrafficPackagesRequest,
  CreateAndAttachNetworkInterfaceResponse,
  ModifyCdcNetPlaneAttributeResponse,
  ModifyCcnAttributeRequest,
  TranslationNatRule,
  ResourceStatistics,
  DeleteSecurityGroupPoliciesResponse,
  DisassociateDhcpIpWithAddressIpResponse,
  CreateVpcEndPointServiceResponse,
  ModifyNetworkAclAttributeRequest,
  CreatePrivateNatGatewayTranslationAclRuleRequest,
  DeleteVpnGatewayResponse,
  BackupPolicy,
  SnapshotPolicy,
  InquiryPriceModifyAddressesBandwidthResponse,
  UnassignPrivateIpAddressesResponse,
  DescribeVpcPeeringConnectionsRequest,
  Address,
  VpnGateway,
  ModifyAddressesBandwidthRequest,
  VpnGatewayRoute,
  EnableVpcEndPointConnectRequest,
  EnableGatewayFlowMonitorResponse,
  ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleResponse,
  Resource,
  HighPriorityRouteTable,
  DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesResponse,
  DescribeBandwidthPackageBandwidthRangeRequest,
  DescribeRouteTablesResponse,
  DeleteDhcpIpRequest,
  AllocateAddressesResponse,
  DescribeCdcUsedIdcVlanRequest,
  BandwidthPackage,
  CcnBatchRouteTable,
  ModifyVpcAttributeRequest,
  DescribeIp6TranslatorsResponse,
  CreateSecurityGroupPoliciesRequest,
  DeleteVpcPeeringConnectionRequest,
  CreateBandwidthPackageRequest,
  CrossBorderFlowMonitorData,
  DescribeRouteTableAssociatedInstancesResponse,
  ModifyRouteTableAttributeResponse,
  ModifyIPv6AddressesBandwidthResponse,
  DescribeSecurityGroupReferencesResponse,
  AddIp6RulesResponse,
  CreateAddressTemplateGroupResponse,
  SslClientConfig,
  DescribeBandwidthPackageQuotaResponse,
  DescribeIp6TranslatorQuotaResponse,
  DeleteServiceTemplateGroupRequest,
  DeleteNatGatewayResponse,
  ReplaceSecurityGroupPoliciesRequest,
  DeletePrivateNatGatewayRequest,
  AdjustPublicAddressRequest,
  CreateDirectConnectGatewayResponse,
  AttachCcnInstancesResponse,
  ModifyVpcEndPointAttributeRequest,
  DescribeCcnRouteTablesRequest,
  DescribeTaskResultResponse,
  DisassociateNetworkAclSubnetsRequest,
  ModifyAddressTemplateGroupAttributeRequest,
  ModifyVpcPeeringConnectionResponse,
  ModifyServiceTemplateGroupAttributeRequest,
  ReturnNormalAddressesResponse,
  DeleteVpcEndPointRequest,
  InquiryPriceAllocateAddressesRequest,
  CCN,
  NetworkAclQuintupleEntry,
  ModifyHighPriorityRouteAttributeRequest,
  InquirePriceCreateDirectConnectGatewayResponse,
  DeleteIp6TranslatorsRequest,
  Ip6Translator,
  CheckAssistantCidrRequest,
  UpdateTrafficMirrorAllFilterRequest,
  DescribeTrafficMirrorsResponse,
  DeleteVpcPeeringConnectionResponse,
  DeleteSnapshotPoliciesRequest,
  CcnRouteTable,
  DeletePrivateNatGatewayResponse,
  DisableFlowLogsResponse,
  DescribeSubnetsResponse,
  DescribeCustomerGatewaysResponse,
  CheckAssistantCidrResponse,
  DescribeVpcTaskResultResponse,
  TrafficMirrorFilter,
  InquiryPriceRenewVpnGatewayRequest,
  HighPriorityModifyItem,
  EnableCcnRoutesResponse,
  DescribePrivateNatGatewaysResponse,
  ModifyVpnGatewayCcnRoutesResponse,
  DetachCcnInstancesResponse,
  ModifyServiceTemplateGroupAttributeResponse,
  DeleteNetworkAclQuintupleEntriesRequest,
  CcnRouteTableBroadcastPolicy,
  DeleteSubnetRequest,
  CreateCcnRouteTablesResponse,
  DescribeAddressTemplateGroupsRequest,
  MigratePrivateIpAddressResponse,
  CheckNetDetectStateResponse,
  DisassociateVpcEndPointSecurityGroupsResponse,
  DeleteSnapshotPoliciesResponse,
  AssociateNatGatewayAddressResponse,
  RemoveBandwidthPackageResourcesRequest,
  VpngwCcnRoutes,
  ModifyVpnConnectionAttributeRequest,
  DeleteNetworkInterfaceRequest,
  InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse,
  ReplaceCcnRouteTableBroadcastPolicysResponse,
  RouteTable,
  DescribeVpcEndPointServiceWhiteListRequest,
  DeleteAddressTemplateGroupResponse,
  ModifyNetworkInterfaceQosRequest,
  ModifyLocalGatewayRequest,
  DirectConnectGatewayCcnRoute,
  DeleteHaVipRequest,
  CreateLocalGatewayResponse,
  ModifyHighPriorityRouteECMPAlgorithmRequest,
  ServicesInfo,
  MigratePrivateIpAddressRequest,
  AssignPrivateIpAddressesRequest,
  DescribeCcnRouteTableBroadcastPolicysRequest,
  RefreshDirectConnectGatewayRouteToNatGatewayResponse,
  DescribeBandwidthPackagesResponse,
  DeleteRouteTableRequest,
  DescribeCdcLDCXListResponse,
  SnapshotInstance,
  CreateVpnGatewayRequest,
  DescribeVpcInstancesRequest,
  DeleteVpcEndPointServiceWhiteListResponse,
  DescribeServiceTemplatesResponse,
  AcceptVpcPeeringConnectionResponse,
  DescribeSgSnapshotFileContentRequest,
  CreateBandwidthPackageResponse,
  CreateNetworkAclEntriesResponse,
  ResetVpnConnectionRequest,
  ReleaseAddressesResponse,
  HighPriorityRoute,
  AuditCrossBorderComplianceResponse,
  InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest,
  DisableFlowLogsRequest,
  ReplaceSecurityGroupPolicyResponse,
  EnableGatewayFlowMonitorRequest,
  ModifyPrivateIpAddressesAttributeResponse,
  ReplaceRoutesResponse,
  ModifyHaVipAttributeResponse,
  CcnBandwidthInfo,
  CreateVpcPeeringConnectionResponse,
  DescribeCrossBorderCcnRegionBandwidthLimitsResponse,
  ReturnNormalAddressesRequest,
  DeleteSecurityGroupResponse,
  DeleteNetworkAclEntriesResponse,
  DescribeCdcLDCXListRequest,
  UpdateTrafficMirrorDirectionRequest,
  CreateNetworkInterfaceResponse,
  DescribeAddressQuotaRequest,
  LockCcnsResponse,
  BatchModifySnapshotPolicy,
  AssignIpv6AddressesResponse,
  CreateRoutesResponse,
  DescribeSecurityGroupsResponse,
  CreateVpcEndPointServiceWhiteListRequest,
  DeleteNatGatewaySourceIpTranslationNatRuleRequest,
  ModifyVpnGatewayCcnRoutesRequest,
  DescribeGatewayFlowQosRequest,
  ReplaceDirectConnectGatewayCcnRoutesResponse,
  ModifySecurityGroupPoliciesResponse,
  ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest,
  DescribeServiceTemplatesRequest,
  ModifyPrivateNatGatewayTranslationNatRuleResponse,
  ServiceTemplateSpecification,
  ResetTrafficMirrorTargetRequest,
  DetachNetworkInterfaceRequest,
  DescribeSnapshotAttachedInstancesResponse,
  ReserveIpAddressInfo,
  Ip6Rule,
  AttachClassicLinkVpcResponse,
  DownloadVpnGatewaySslClientCertRequest,
  CreateAddressTemplateRequest,
  DescribeNatGatewaysResponse,
  ModifyTrafficMirrorAttributeRequest,
  ModifyDhcpIpAttributeResponse,
  CreatePrivateNatGatewayResponse,
  ModifyRouteTableSelectionPoliciesResponse,
  AttachNetworkInterfaceRequest,
  DescribeCcnRoutesResponse,
  DescribeVpcsResponse,
  CcnInstanceInfo,
  SecurityGroup,
  UnlockCcnsResponse,
  DescribeRouteListRequest,
  DisableGatewayFlowMonitorResponse,
  DisassociateAddressResponse,
  DescribeTrafficPackagesResponse,
  DescribeVpnGatewayRoutesRequest,
  GetCcnRegionBandwidthLimitsResponse,
  DeleteRoutesRequest,
  AssociateAddressRequest,
  RouteSelectionPolicy,
  CcnRegionBandwidthLimit,
  ModifyCcnRouteTablesRequest,
  ResetAttachCcnInstancesRequest,
  UnlockCcnBandwidthsResponse,
  CreateDefaultSecurityGroupResponse,
  ClassicLinkInstance,
  DeleteLocalGatewayResponse,
  DescribeHighPriorityRouteTablesRequest,
  SnapshotFileInfo,
  ModifyRouteTableInfo,
  ModifyNetworkInterfaceAttributeRequest,
  DescribeTrafficQosPolicyResponse,
  ModifyTemplateMemberResponse,
  ModifyHaVipAttributeRequest,
  ModifyAddressTemplateGroupAttributeResponse,
  VpcLimit,
  NatRegionInfoWithArea,
  DetachClassicLinkVpcResponse,
  UnassignPrivateIpAddressesRequest,
  DeleteVpnGatewayRoutesRequest,
  DescribeProductQuotaRequest,
  ModifyNetDetectResponse,
  CreateHaVipRequest,
  Ipv6SubnetCidrBlock,
  EnableFlowLogsResponse,
  TrafficMirrorTarget,
  DeletePrivateNatGatewayTranslationAclRuleRequest,
  DescribeAddressQuotaResponse,
  DescribePrivateNatGatewayLimitsRequest,
  CreateCustomerGatewayRequest,
  DeleteSecurityGroupRequest,
  CrossBorderCompliance,
  CreateTrafficMirrorRequest,
  CreateIp6TranslatorsRequest,
  DescribeCrossBorderCcnRegionBandwidthLimitsRequest,
  ReplaceCcnRouteTableBroadcastPolicysRequest,
  UnlockCcnsRequest,
  DescribeSnapshotAttachedInstancesRequest,
  DescribeDirectConnectGatewayCcnRoutesResponse,
  ModifyPrivateIpAddressesAttributeRequest,
  ResetNatGatewayConnectionResponse,
  UpdateTrafficMirrorAllFilterResponse,
  AssociateNetworkInterfaceSecurityGroupsRequest,
  DeleteVpnGatewayRoutesResponse,
  DeleteHighPriorityRouteTablesResponse,
  CreateSecurityGroupRequest,
  ModifyCcnAttributeResponse,
  DescribeSecurityGroupLimitsRequest,
  DescribeClassicLinkInstancesRequest,
  ReleaseIp6AddressesBandwidthRequest,
  CreateServiceTemplateResponse,
  DeleteNetworkInterfaceResponse,
  DisableCcnRoutesResponse,
  DescribeCcnRegionBandwidthLimitsRequest,
  InquiryPriceCreateVpnGatewayRequest,
  HealthCheckConfig,
  CcnAttachedInstance,
  CreateAssistantCidrResponse,
  CustomerGatewayVendor,
  DescribeAddressTemplatesRequest,
  ConflictSource,
  CreateDhcpIpRequest,
  EnableRoutesRequest,
  DeleteTrafficPackagesResponse,
  DeleteCustomerGatewayRequest,
  LockCcnBandwidthsResponse,
  DescribeAddressTemplatesResponse,
  Quota,
  WithdrawNotifyRoutesResponse,
  AcceptVpcPeeringConnectionRequest,
  CreateCdcNetPlanesRequest,
  CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse,
  DeleteTrafficMirrorRequest,
  ModifyCdcLDCXAttributeResponse,
  DescribeNetworkInterfacesResponse,
  DeleteNetworkAclResponse,
  DeleteNetworkAclQuintupleEntriesResponse,
  DescribeServiceTemplateGroupsRequest,
  CreateSecurityGroupWithPoliciesRequest,
  ReleaseAddressesRequest,
  CreateVpcRequest,
  DescribeSubnetResourceDashboardResponse,
  DeleteServiceTemplateRequest,
  DescribeSecurityGroupAssociationStatisticsRequest,
  NotifyRoutesResponse,
  Route,
  EnableVpnGatewaySslClientCertResponse,
  ModifySubnetAttributeRequest,
  RenewAddressesRequest,
  ModifyVpcEndPointServiceWhiteListResponse,
  DisassociateAddressRequest,
  DescribeCrossBorderFlowMonitorResponse,
  DescribeBandwidthPackageQuotaRequest,
  DeleteVpcResponse,
  InquiryPriceModifyAddressesBandwidthRequest,
  ReplaceCcnRouteTableInputPolicysRequest,
  InstanceChargePrepaid,
  DescribeTemplateLimitsRequest,
  AddTemplateMemberRequest,
  ModifyNetworkInterfaceAttributeResponse,
  DescribeVpcEndPointServiceWhiteListResponse,
  AcceptAttachCcnInstancesResponse,
  DescribeUsedIpAddressResponse,
  DescribeNetDetectsResponse,
  AuditCrossBorderComplianceRequest,
  AddressInfo,
} from "./vpc_models"

/**
 * vpc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vpc.tencentcloudapi.com", "2017-03-12", clientConfig)
  }

  /**
   * 将专线网关与NAT网关绑定，专线网关默认路由指向NAT网关
   */
  async AssociateDirectConnectGatewayNatGateway(
    req: AssociateDirectConnectGatewayNatGatewayRequest,
    cb?: (error: string, rep: AssociateDirectConnectGatewayNatGatewayResponse) => void
  ): Promise<AssociateDirectConnectGatewayNatGatewayResponse> {
    return this.request("AssociateDirectConnectGatewayNatGateway", req, cb)
  }

  /**
   * 本接口（ModifyNatGatewayAttribute）用于修改NAT网关的属性。
   */
  async ModifyNatGatewayAttribute(
    req: ModifyNatGatewayAttributeRequest,
    cb?: (error: string, rep: ModifyNatGatewayAttributeResponse) => void
  ): Promise<ModifyNatGatewayAttributeResponse> {
    return this.request("ModifyNatGatewayAttribute", req, cb)
  }

  /**
   * 查询EIP异步任务执行结果
   */
  async DescribeTaskResult(
    req: DescribeTaskResultRequest,
    cb?: (error: string, rep: DescribeTaskResultResponse) => void
  ): Promise<DescribeTaskResultResponse> {
    return this.request("DescribeTaskResult", req, cb)
  }

  /**
   * 本接口（DescribeRouteTables）用于查询路由表。
   */
  async DescribeRouteTables(
    req: DescribeRouteTablesRequest,
    cb?: (error: string, rep: DescribeRouteTablesResponse) => void
  ): Promise<DescribeRouteTablesResponse> {
    return this.request("DescribeRouteTables", req, cb)
  }

  /**
   * 接口用于删除带宽包资源，包括[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)和[负载均衡](https://cloud.tencent.com/document/product/214/517)等
   */
  async RemoveBandwidthPackageResources(
    req: RemoveBandwidthPackageResourcesRequest,
    cb?: (error: string, rep: RemoveBandwidthPackageResourcesResponse) => void
  ): Promise<RemoveBandwidthPackageResourcesResponse> {
    return this.request("RemoveBandwidthPackageResources", req, cb)
  }

  /**
     * 本接口（ModifyServiceTemplateGroupAttribute）用于修改协议端口模板集合。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async ModifyServiceTemplateGroupAttribute(
    req: ModifyServiceTemplateGroupAttributeRequest,
    cb?: (error: string, rep: ModifyServiceTemplateGroupAttributeResponse) => void
  ): Promise<ModifyServiceTemplateGroupAttributeResponse> {
    return this.request("ModifyServiceTemplateGroupAttribute", req, cb)
  }

  /**
   * 该接口用于调整具有带宽属性弹性公网IP的网络计费模式
   * 支持BANDWIDTH_PREPAID_BY_MONTH和TRAFFIC_POSTPAID_BY_HOUR两种网络计费模式之间的切换。
   * 每个弹性公网IP支持调整两次，次数超出则无法调整。
   */
  async ModifyAddressInternetChargeType(
    req: ModifyAddressInternetChargeTypeRequest,
    cb?: (error: string, rep: ModifyAddressInternetChargeTypeResponse) => void
  ): Promise<ModifyAddressInternetChargeTypeResponse> {
    return this.request("ModifyAddressInternetChargeType", req, cb)
  }

  /**
     * 本接口（ModifyIPv6AddressesAttributes）用于修改弹性公网 IPv6（简称EIPv6）实例名称。

- 支持对弹性公网 IPv6 和传统弹性公网 IPv6 实例名称进行修改。
     */
  async ModifyIPv6AddressesAttributes(
    req: ModifyIPv6AddressesAttributesRequest,
    cb?: (error: string, rep: ModifyIPv6AddressesAttributesResponse) => void
  ): Promise<ModifyIPv6AddressesAttributesResponse> {
    return this.request("ModifyIPv6AddressesAttributes", req, cb)
  }

  /**
   * 本接口（CreatePrivateNatGateway）用于创建私网NAT网关。
   */
  async CreatePrivateNatGateway(
    req: CreatePrivateNatGatewayRequest,
    cb?: (error: string, rep: CreatePrivateNatGatewayResponse) => void
  ): Promise<CreatePrivateNatGatewayResponse> {
    return this.request("CreatePrivateNatGateway", req, cb)
  }

  /**
   * 本接口（AcceptVpcPeeringConnection）用于接受对等连接请求。
   */
  async AcceptVpcPeeringConnection(
    req: AcceptVpcPeeringConnectionRequest,
    cb?: (error: string, rep: AcceptVpcPeeringConnectionResponse) => void
  ): Promise<AcceptVpcPeeringConnectionResponse> {
    return this.request("AcceptVpcPeeringConnection", req, cb)
  }

  /**
   * 本接口（EnableGatewayFlowMonitor）用于开启网关流量监控。
   */
  async EnableGatewayFlowMonitor(
    req: EnableGatewayFlowMonitorRequest,
    cb?: (error: string, rep: EnableGatewayFlowMonitorResponse) => void
  ): Promise<EnableGatewayFlowMonitorResponse> {
    return this.request("EnableGatewayFlowMonitor", req, cb)
  }

  /**
   * 本接口 (DescribeAddresses) 用于查询一个或多个[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）的详细信息。
   * 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的 EIP。
   */
  async DescribeAddresses(
    req: DescribeAddressesRequest,
    cb?: (error: string, rep: DescribeAddressesResponse) => void
  ): Promise<DescribeAddressesResponse> {
    return this.request("DescribeAddresses", req, cb)
  }

  /**
   * 本接口（CreateCcnRouteTables）用于给指定的云联网实例新建路由表。
   */
  async CreateCcnRouteTables(
    req: CreateCcnRouteTablesRequest,
    cb?: (error: string, rep: CreateCcnRouteTablesResponse) => void
  ): Promise<CreateCcnRouteTablesResponse> {
    return this.request("CreateCcnRouteTables", req, cb)
  }

  /**
     * 本接口(ReplaceCcnRouteTableBroadcastPolicys)用于替换云联网路由表路由传播策略。
> 特别注意：是全量覆盖，非增量添加

**路由条件支持以下四种：**

- 实例类型: `instance-type`，可选值：私有网络 `VPC`、专线网关 `DIRECTCONNECT`、VPN网关 `VPNGW`
- 实例ID: `instance-id`，例如：`dcg-8zljkrft`、`vpc-jdevjrup`，暂不支持 `Edge` 实例
- 实例地域: `instance-region`，例如：`ap-guangzhou`<br />产品支持的所有地域列表可通过接口 [DescribeRegions](https://cloud.tencent.com/document/product/1596/77930) 查询，其中参数 `Product` 设置为 `ccn`
- 路由前缀: `cidr-block`，例如：`10.1.0.0/16`


**传播条件支持以下三种：**

- 实例类型: `instance-type`，格式同路由条件
- 实例ID: `instance-id`，格式同路由条件
- 实例地域: `instance-region`，格式同路由条件


**使用限制：**
- 一条策略内的单个条件类型，最大支持设置 `25` 个条件值
- 一张路由表，最大支持 `100` 条路由传播策略
- 路由条件类型中，只有 `cidr-block` 类型支持模糊匹配和精确匹配两种，其它类型只支持精确匹配一种模式
     */
  async ReplaceCcnRouteTableBroadcastPolicys(
    req: ReplaceCcnRouteTableBroadcastPolicysRequest,
    cb?: (error: string, rep: ReplaceCcnRouteTableBroadcastPolicysResponse) => void
  ): Promise<ReplaceCcnRouteTableBroadcastPolicysResponse> {
    return this.request("ReplaceCcnRouteTableBroadcastPolicys", req, cb)
  }

  /**
   * 更新SslVpnClient证书
   */
  async ModifyVpnGatewaySslClientCert(
    req: ModifyVpnGatewaySslClientCertRequest,
    cb?: (error: string, rep: ModifyVpnGatewaySslClientCertResponse) => void
  ): Promise<ModifyVpnGatewaySslClientCertResponse> {
    return this.request("ModifyVpnGatewaySslClientCert", req, cb)
  }

  /**
   * 本接口用于修改 SSL-VPN 服务端属性
   */
  async ModifyVpnGatewaySslServer(
    req: ModifyVpnGatewaySslServerRequest,
    cb?: (error: string, rep: ModifyVpnGatewaySslServerResponse) => void
  ): Promise<ModifyVpnGatewaySslServerResponse> {
    return this.request("ModifyVpnGatewaySslServer", req, cb)
  }

  /**
   * 本接口 (DescribeSpecificTrafficPackageUsedDetails) 用于查询指定 共享流量包 的用量明细。
   */
  async DescribeSpecificTrafficPackageUsedDetails(
    req: DescribeSpecificTrafficPackageUsedDetailsRequest,
    cb?: (error: string, rep: DescribeSpecificTrafficPackageUsedDetailsResponse) => void
  ): Promise<DescribeSpecificTrafficPackageUsedDetailsResponse> {
    return this.request("DescribeSpecificTrafficPackageUsedDetails", req, cb)
  }

  /**
   * 本接口（ReplaceRouteTableAssociation）用于修改子网（Subnet）关联的路由表（RouteTable）。
   * 一个子网只能关联一个路由表。
   */
  async ReplaceRouteTableAssociation(
    req: ReplaceRouteTableAssociationRequest,
    cb?: (error: string, rep: ReplaceRouteTableAssociationResponse) => void
  ): Promise<ReplaceRouteTableAssociationResponse> {
    return this.request("ReplaceRouteTableAssociation", req, cb)
  }

  /**
   * 删除共享带宽包（仅非活动状态的流量包可删除）。
   */
  async DeleteTrafficPackages(
    req: DeleteTrafficPackagesRequest,
    cb?: (error: string, rep: DeleteTrafficPackagesResponse) => void
  ): Promise<DeleteTrafficPackagesResponse> {
    return this.request("DeleteTrafficPackages", req, cb)
  }

  /**
   * 本接口（DescribeTemplateLimits）用于查询参数模板配额列表。
   */
  async DescribeTemplateLimits(
    req?: DescribeTemplateLimitsRequest,
    cb?: (error: string, rep: DescribeTemplateLimitsResponse) => void
  ): Promise<DescribeTemplateLimitsResponse> {
    return this.request("DescribeTemplateLimits", req, cb)
  }

  /**
   * 本接口（CheckNetDetectState）用于验证网络探测。
   */
  async CheckNetDetectState(
    req: CheckNetDetectStateRequest,
    cb?: (error: string, rep: CheckNetDetectStateResponse) => void
  ): Promise<CheckNetDetectStateResponse> {
    return this.request("CheckNetDetectState", req, cb)
  }

  /**
   * 本接口（InquiryPriceResetVpnGatewayInternetMaxBandwidth）用于调整VPN网关带宽上限询价。
   */
  async InquiryPriceResetVpnGatewayInternetMaxBandwidth(
    req: InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest,
    cb?: (error: string, rep: InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse) => void
  ): Promise<InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse> {
    return this.request("InquiryPriceResetVpnGatewayInternetMaxBandwidth", req, cb)
  }

  /**
   * 判断用户在网络侧的用户类型，如标准（带宽上移），传统（非上移）。
   */
  async DescribeNetworkAccountType(
    req?: DescribeNetworkAccountTypeRequest,
    cb?: (error: string, rep: DescribeNetworkAccountTypeResponse) => void
  ): Promise<DescribeNetworkAccountTypeResponse> {
    return this.request("DescribeNetworkAccountType", req, cb)
  }

  /**
   * 本接口（ModifyAddressesBandwidth）用于调整[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)(简称EIP)带宽，支持后付费EIP, 预付费EIP和带宽包EIP
   */
  async ModifyAddressesBandwidth(
    req: ModifyAddressesBandwidthRequest,
    cb?: (error: string, rep: ModifyAddressesBandwidthResponse) => void
  ): Promise<ModifyAddressesBandwidthResponse> {
    return this.request("ModifyAddressesBandwidth", req, cb)
  }

  /**
   * 本接口（CreateSubnet）用于创建子网。
   * 创建子网前必须创建好 VPC。
   * 子网创建成功后，子网网段不能修改。子网网段必须在VPC网段内，可以和VPC网段相同（VPC有且只有一个子网时），建议子网网段在VPC网段内，预留网段给其他子网使用。
   * 您可以创建的最小网段子网掩码为28（有16个IP地址），最大网段子网掩码为16（65,536个IP地址）。
   * 同一个VPC内，多个子网的网段不能重叠。
   * 子网创建后会自动关联到默认路由表。
   * 创建子网同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
   */
  async CreateSubnet(
    req: CreateSubnetRequest,
    cb?: (error: string, rep: CreateSubnetResponse) => void
  ): Promise<CreateSubnetResponse> {
    return this.request("CreateSubnet", req, cb)
  }

  /**
   * 创建SSL-VPN-CLIENT
   */
  async CreateVpnGatewaySslClient(
    req: CreateVpnGatewaySslClientRequest,
    cb?: (error: string, rep: CreateVpnGatewaySslClientResponse) => void
  ): Promise<CreateVpnGatewaySslClientResponse> {
    return this.request("CreateVpnGatewaySslClient", req, cb)
  }

  /**
     * 本接口（AllocateIp6AddressesBandwidth）用于为传统弹性公网 IPv6 地址开通 IPv6 公网带宽。

- 传统弹性公网 IPv6 地址默认仅具备内网通信能力，需通过控制台或 API 接口为其分配公网带宽后，才能具备 IPv6 公网通信能力、并于传统弹性公网 IPv6 列表页可见。
- 支持为一个或多个传统弹性公网 IPv6 实例开通公网带宽。
     */
  async AllocateIp6AddressesBandwidth(
    req: AllocateIp6AddressesBandwidthRequest,
    cb?: (error: string, rep: AllocateIp6AddressesBandwidthResponse) => void
  ): Promise<AllocateIp6AddressesBandwidthResponse> {
    return this.request("AllocateIp6AddressesBandwidth", req, cb)
  }

  /**
     * 本接口（LockCcnBandwidths）用户锁定云联网限速实例。
该接口一般用来封禁地域间限速的云联网实例下的限速实例, 目前联通内部运营系统通过云API调用, 如果是出口限速, 一般使用更粗的云联网实例粒度封禁（LockCcns）。
如有需要, 可以封禁任意限速实例, 可接入到内部运营系统。
     */
  async LockCcnBandwidths(
    req: LockCcnBandwidthsRequest,
    cb?: (error: string, rep: LockCcnBandwidthsResponse) => void
  ): Promise<LockCcnBandwidthsResponse> {
    return this.request("LockCcnBandwidths", req, cb)
  }

  /**
     * 本接口（DeleteServiceTemplateGroup）用于删除协议端口模板集合。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async DeleteServiceTemplateGroup(
    req: DeleteServiceTemplateGroupRequest,
    cb?: (error: string, rep: DeleteServiceTemplateGroupResponse) => void
  ): Promise<DeleteServiceTemplateGroupResponse> {
    return this.request("DeleteServiceTemplateGroup", req, cb)
  }

  /**
   * 接口用于添加带宽包资源，包括[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)和[负载均衡](https://cloud.tencent.com/document/product/214/517)等
   */
  async AddBandwidthPackageResources(
    req: AddBandwidthPackageResourcesRequest,
    cb?: (error: string, rep: AddBandwidthPackageResourcesResponse) => void
  ): Promise<AddBandwidthPackageResourcesResponse> {
    return this.request("AddBandwidthPackageResources", req, cb)
  }

  /**
   * 本接口 (AllocateAddresses) 用于申请一个或多个[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
   * EIP 是专为动态云计算设计的静态 IP 地址。借助 EIP，您可以快速将 EIP 重新映射到您的另一个实例上，从而屏蔽实例故障。
   * 您的 EIP 与腾讯云账户相关联，而不是与某个实例相关联。在您选择显式释放该地址，或欠费超过24小时之前，它会一直与您的腾讯云账户保持关联。
   * 一个腾讯云账户在每个地域能申请的 EIP 最大配额有所限制，可参见 [EIP 产品简介](https://cloud.tencent.com/document/product/213/5733)，上述配额可通过 DescribeAddressQuota 接口获取。
   */
  async AllocateAddresses(
    req: AllocateAddressesRequest,
    cb?: (error: string, rep: AllocateAddressesResponse) => void
  ): Promise<AllocateAddressesResponse> {
    return this.request("AllocateAddresses", req, cb)
  }

  /**
   * 删除 IDC通道
   */
  async DeleteCdcLDCXList(
    req?: DeleteCdcLDCXListRequest,
    cb?: (error: string, rep: DeleteCdcLDCXListResponse) => void
  ): Promise<DeleteCdcLDCXListResponse> {
    return this.request("DeleteCdcLDCXList", req, cb)
  }

  /**
   * 本接口（DescribeIp6Addresses）用于查询一个或多个传统弹性公网 IPv6 实例的详细信息。
   */
  async DescribeIp6Addresses(
    req: DescribeIp6AddressesRequest,
    cb?: (error: string, rep: DescribeIp6AddressesResponse) => void
  ): Promise<DescribeIp6AddressesResponse> {
    return this.request("DescribeIp6Addresses", req, cb)
  }

  /**
   * 本接口（DeleteNetworkAclQuintupleEntries）用于删除网络ACL五元组指定的入站规则和出站规则（但不是全量删除该ACL下的所有条目）。在NetworkAclQuintupleEntrySet参数中：NetworkAclQuintupleEntry需要提供NetworkAclQuintupleEntryId。
   */
  async DeleteNetworkAclQuintupleEntries(
    req: DeleteNetworkAclQuintupleEntriesRequest,
    cb?: (error: string, rep: DeleteNetworkAclQuintupleEntriesResponse) => void
  ): Promise<DeleteNetworkAclQuintupleEntriesResponse> {
    return this.request("DeleteNetworkAclQuintupleEntries", req, cb)
  }

  /**
     * 本接口（DeleteDirectConnectGateway）用于删除专线网关。
<li>如果是 NAT 网关，删除专线网关后，NAT 规则以及 ACL 策略都被清理了。</li>
<li>删除专线网关后，系统会删除路由表中跟该专线网关相关的路由策略。</li>
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`QueryTask`接口
     */
  async DeleteDirectConnectGateway(
    req: DeleteDirectConnectGatewayRequest,
    cb?: (error: string, rep: DeleteDirectConnectGatewayResponse) => void
  ): Promise<DeleteDirectConnectGatewayResponse> {
    return this.request("DeleteDirectConnectGateway", req, cb)
  }

  /**
     * 本接口（CreateNetworkInterface）用于创建弹性网卡。
* 创建弹性网卡时可以指定内网IP，并且可以指定一个主IP，指定的内网IP必须在弹性网卡所在子网内，而且不能被占用。
* 创建弹性网卡时可以指定需要申请的内网IP数量，系统会随机生成内网IP地址。
* 一个弹性网卡支持绑定的IP地址是有限制的，更多资源限制信息详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
* 创建弹性网卡同时可以绑定已有安全组。
* 创建弹性网卡同时可以绑定标签, 响应里的标签列表代表添加成功的标签。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async CreateNetworkInterface(
    req: CreateNetworkInterfaceRequest,
    cb?: (error: string, rep: CreateNetworkInterfaceResponse) => void
  ): Promise<CreateNetworkInterfaceResponse> {
    return this.request("CreateNetworkInterface", req, cb)
  }

  /**
   * 本接口(DescribeNetDetectStates)用于查询网络探测验证结果列表。
   */
  async DescribeNetDetectStates(
    req: DescribeNetDetectStatesRequest,
    cb?: (error: string, rep: DescribeNetDetectStatesResponse) => void
  ): Promise<DescribeNetDetectStatesResponse> {
    return this.request("DescribeNetDetectStates", req, cb)
  }

  /**
   * 修改虚拟连接
   */
  async ModifyCdcNetPlaneAttribute(
    req?: ModifyCdcNetPlaneAttributeRequest,
    cb?: (error: string, rep: ModifyCdcNetPlaneAttributeResponse) => void
  ): Promise<ModifyCdcNetPlaneAttributeResponse> {
    return this.request("ModifyCdcNetPlaneAttribute", req, cb)
  }

  /**
   * 本接口（DescribeCcns）用于查询云联网（CCN）列表。
   */
  async DescribeCcns(
    req: DescribeCcnsRequest,
    cb?: (error: string, rep: DescribeCcnsResponse) => void
  ): Promise<DescribeCcnsResponse> {
    return this.request("DescribeCcns", req, cb)
  }

  /**
   * 本接口（DeleteCcn）用于删除云联网。
   * 删除后，云联网关联的所有实例间路由将被删除，网络将会中断，请务必确认
   * 删除云联网是不可逆的操作，请谨慎处理。
   */
  async DeleteCcn(
    req: DeleteCcnRequest,
    cb?: (error: string, rep: DeleteCcnResponse) => void
  ): Promise<DeleteCcnResponse> {
    return this.request("DeleteCcn", req, cb)
  }

  /**
   * 本接口（ModifyNetworkAclEntries）用于修改（包括添加和删除）网络ACL的入站规则和出站规则。在NetworkAclEntrySet参数中：
   * 若同时传入入站规则和出站规则，则重置原有的入站规则和出站规则，并分别导入传入的规则。
   * 若仅传入入站规则，则仅重置原有的入站规则，并导入传入的规则，不影响原有的出站规则（若仅传入出站规则，处理方式类似入站方向）。
   */
  async ModifyNetworkAclEntries(
    req: ModifyNetworkAclEntriesRequest,
    cb?: (error: string, rep: ModifyNetworkAclEntriesResponse) => void
  ): Promise<ModifyNetworkAclEntriesResponse> {
    return this.request("ModifyNetworkAclEntries", req, cb)
  }

  /**
   * 该接口用于查询指定的云联网实例的路由表信息。
   */
  async DescribeCcnRouteTables(
    req: DescribeCcnRouteTablesRequest,
    cb?: (error: string, rep: DescribeCcnRouteTablesResponse) => void
  ): Promise<DescribeCcnRouteTablesResponse> {
    return this.request("DescribeCcnRouteTables", req, cb)
  }

  /**
     * 本接口（DetachNetworkInterface）用于弹性网卡解绑云服务器。
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async DetachNetworkInterface(
    req: DetachNetworkInterfaceRequest,
    cb?: (error: string, rep: DetachNetworkInterfaceResponse) => void
  ): Promise<DetachNetworkInterfaceResponse> {
    return this.request("DetachNetworkInterface", req, cb)
  }

  /**
   * 本接口（ModifyNetworkAclQuintupleEntries）用于修改网络ACL五元组的入站规则和出站规则。在NetworkAclQuintupleEntrySet参数中：NetworkAclQuintupleEntry需要提供NetworkAclQuintupleEntryId。
   */
  async ModifyNetworkAclQuintupleEntries(
    req: ModifyNetworkAclQuintupleEntriesRequest,
    cb?: (error: string, rep: ModifyNetworkAclQuintupleEntriesResponse) => void
  ): Promise<ModifyNetworkAclQuintupleEntriesResponse> {
    return this.request("ModifyNetworkAclQuintupleEntries", req, cb)
  }

  /**
   * 本接口（DeleteAssistantCidr）用于删除辅助CIDR。
   */
  async DeleteAssistantCidr(
    req: DeleteAssistantCidrRequest,
    cb?: (error: string, rep: DeleteAssistantCidrResponse) => void
  ): Promise<DeleteAssistantCidrResponse> {
    return this.request("DeleteAssistantCidr", req, cb)
  }

  /**
     * 本接口（DeleteNetworkInterface）用于删除弹性网卡。
* 弹性网卡上绑定了云服务器时，不能被删除。
* 删除指定弹性网卡，弹性网卡必须先和子机解绑才能删除。删除之后弹性网卡上所有内网IP都将被退还。

本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async DeleteNetworkInterface(
    req: DeleteNetworkInterfaceRequest,
    cb?: (error: string, rep: DeleteNetworkInterfaceResponse) => void
  ): Promise<DeleteNetworkInterfaceResponse> {
    return this.request("DeleteNetworkInterface", req, cb)
  }

  /**
   * 本接口（ModifyLocalGateway）用于修改CDC的本地网关。
   */
  async ModifyLocalGateway(
    req: ModifyLocalGatewayRequest,
    cb?: (error: string, rep: ModifyLocalGatewayResponse) => void
  ): Promise<ModifyLocalGatewayResponse> {
    return this.request("ModifyLocalGateway", req, cb)
  }

  /**
   * 本接口(DescribeSubnetResourceDashboard)用于查看Subnet资源信息。
   */
  async DescribeSubnetResourceDashboard(
    req: DescribeSubnetResourceDashboardRequest,
    cb?: (error: string, rep: DescribeSubnetResourceDashboardResponse) => void
  ): Promise<DescribeSubnetResourceDashboardResponse> {
    return this.request("DescribeSubnetResourceDashboard", req, cb)
  }

  /**
   * 本接口（DescribeFlowLog）用于查询流日志实例信息。
   */
  async DescribeFlowLog(
    req: DescribeFlowLogRequest,
    cb?: (error: string, rep: DescribeFlowLogResponse) => void
  ): Promise<DescribeFlowLogResponse> {
    return this.request("DescribeFlowLog", req, cb)
  }

  /**
   * 本接口（AssociateInstancesToCcnRouteTable）用于将指定的云联网实例关联到指定的云联网路由表。
   */
  async AssociateInstancesToCcnRouteTable(
    req: AssociateInstancesToCcnRouteTableRequest,
    cb?: (error: string, rep: AssociateInstancesToCcnRouteTableResponse) => void
  ): Promise<AssociateInstancesToCcnRouteTableResponse> {
    return this.request("AssociateInstancesToCcnRouteTable", req, cb)
  }

  /**
   * 该接口用于续费包月带宽计费模式的弹性公网IP
   */
  async RenewAddresses(
    req: RenewAddressesRequest,
    cb?: (error: string, rep: RenewAddressesResponse) => void
  ): Promise<RenewAddressesResponse> {
    return this.request("RenewAddresses", req, cb)
  }

  /**
   * 本接口（DescribeCcnRegionBandwidthLimits）用于查询云联网各地域出带宽上限，该接口只返回已关联网络实例包含的地域。
   */
  async DescribeCcnRegionBandwidthLimits(
    req: DescribeCcnRegionBandwidthLimitsRequest,
    cb?: (error: string, rep: DescribeCcnRegionBandwidthLimitsResponse) => void
  ): Promise<DescribeCcnRegionBandwidthLimitsResponse> {
    return this.request("DescribeCcnRegionBandwidthLimits", req, cb)
  }

  /**
     * 1. 该接口用于在转换实例下添加IPV6转换规则。
2. 支持在同一个转换实例下批量添加转换规则，一个账户在一个地域最多50个。
3. 一个完整的转换规则包括vip6:vport6:protocol:vip:vport，其中vip6:vport6:protocol必须是唯一。
     */
  async AddIp6Rules(
    req: AddIp6RulesRequest,
    cb?: (error: string, rep: AddIp6RulesResponse) => void
  ): Promise<AddIp6RulesResponse> {
    return this.request("AddIp6Rules", req, cb)
  }

  /**
   * 将专线网关与NAT网关解绑，解绑之后，专线网关将不能通过NAT网关访问公网
   */
  async DisassociateDirectConnectGatewayNatGateway(
    req: DisassociateDirectConnectGatewayNatGatewayRequest,
    cb?: (error: string, rep: DisassociateDirectConnectGatewayNatGatewayResponse) => void
  ): Promise<DisassociateDirectConnectGatewayNatGatewayResponse> {
    return this.request("DisassociateDirectConnectGatewayNatGateway", req, cb)
  }

  /**
     * 本接口(DescribeUsedIpAddress)用于查询Subnet或者Vpc内的ip的使用情况，
如ip被占用，返回占用ip的资源类别与id；如未被占用，返回空值
     */
  async DescribeUsedIpAddress(
    req: DescribeUsedIpAddressRequest,
    cb?: (error: string, rep: DescribeUsedIpAddressResponse) => void
  ): Promise<DescribeUsedIpAddressResponse> {
    return this.request("DescribeUsedIpAddress", req, cb)
  }

  /**
   * 本接口（DescribeCcnRoutes）用于查询已加入云联网（CCN）的路由。
   */
  async DescribeCcnRoutes(
    req: DescribeCcnRoutesRequest,
    cb?: (error: string, rep: DescribeCcnRoutesResponse) => void
  ): Promise<DescribeCcnRoutesResponse> {
    return this.request("DescribeCcnRoutes", req, cb)
  }

  /**
   * 本接口（ReplaceDirectConnectGatewayCcnRoutes）根据路由ID（RouteId）修改指定的路由（Route），支持批量修改。
   */
  async ReplaceDirectConnectGatewayCcnRoutes(
    req: ReplaceDirectConnectGatewayCcnRoutesRequest,
    cb?: (error: string, rep: ReplaceDirectConnectGatewayCcnRoutesResponse) => void
  ): Promise<ReplaceDirectConnectGatewayCcnRoutesResponse> {
    return this.request("ReplaceDirectConnectGatewayCcnRoutes", req, cb)
  }

  /**
   * 本接口（GetCcnRegionBandwidthLimits）用于查询云联网相关地域带宽信息，其中预付费模式的云联网仅支持地域间限速，后付费模式的云联网支持地域间限速和地域出口限速。
   */
  async GetCcnRegionBandwidthLimits(
    req: GetCcnRegionBandwidthLimitsRequest,
    cb?: (error: string, rep: GetCcnRegionBandwidthLimitsResponse) => void
  ): Promise<GetCcnRegionBandwidthLimitsResponse> {
    return this.request("GetCcnRegionBandwidthLimits", req, cb)
  }

  /**
   * 增加模板对象中的IP地址、协议端口、IP地址组、协议端口组。
   */
  async AddTemplateMember(
    req: AddTemplateMemberRequest,
    cb?: (error: string, rep: AddTemplateMemberResponse) => void
  ): Promise<AddTemplateMemberResponse> {
    return this.request("AddTemplateMember", req, cb)
  }

  /**
   * 查询指定EIP的带宽上下限范围。
   */
  async DescribeAddressBandwidthRange(
    req: DescribeAddressBandwidthRangeRequest,
    cb?: (error: string, rep: DescribeAddressBandwidthRangeResponse) => void
  ): Promise<DescribeAddressBandwidthRangeResponse> {
    return this.request("DescribeAddressBandwidthRange", req, cb)
  }

  /**
     * 本接口（DeleteAddressTemplate）用于删除IP地址模板。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async DeleteAddressTemplate(
    req: DeleteAddressTemplateRequest,
    cb?: (error: string, rep: DeleteAddressTemplateResponse) => void
  ): Promise<DeleteAddressTemplateResponse> {
    return this.request("DeleteAddressTemplate", req, cb)
  }

  /**
   * 本接口（WithdrawNotifyRoutes）用于撤销已发布到云联网的路由。路由表列表页操作增加“从云联网撤销”。
   */
  async WithdrawNotifyRoutes(
    req: WithdrawNotifyRoutesRequest,
    cb?: (error: string, rep: WithdrawNotifyRoutesResponse) => void
  ): Promise<WithdrawNotifyRoutesResponse> {
    return this.request("WithdrawNotifyRoutes", req, cb)
  }

  /**
   * 创建虚拟连接，用于支持 CDC 多租户模式
   */
  async CreateCdcNetPlanes(
    req?: CreateCdcNetPlanesRequest,
    cb?: (error: string, rep: CreateCdcNetPlanesResponse) => void
  ): Promise<CreateCdcNetPlanesResponse> {
    return this.request("CreateCdcNetPlanes", req, cb)
  }

  /**
   * 本接口(DeleteRoutes)用于对某个路由表批量删除路由策略（Route）。
   */
  async DeleteRoutes(
    req: DeleteRoutesRequest,
    cb?: (error: string, rep: DeleteRoutesResponse) => void
  ): Promise<DeleteRoutesResponse> {
    return this.request("DeleteRoutes", req, cb)
  }

  /**
   * 本接口（InquiryPriceCreateVpnGateway）用于创建VPN网关询价。
   */
  async InquiryPriceCreateVpnGateway(
    req: InquiryPriceCreateVpnGatewayRequest,
    cb?: (error: string, rep: InquiryPriceCreateVpnGatewayResponse) => void
  ): Promise<InquiryPriceCreateVpnGatewayResponse> {
    return this.request("InquiryPriceCreateVpnGateway", req, cb)
  }

  /**
   * 删除高优路由表
   */
  async DeleteHighPriorityRouteTables(
    req: DeleteHighPriorityRouteTablesRequest,
    cb?: (error: string, rep: DeleteHighPriorityRouteTablesResponse) => void
  ): Promise<DeleteHighPriorityRouteTablesResponse> {
    return this.request("DeleteHighPriorityRouteTables", req, cb)
  }

  /**
     * 本接口（DescribeCrossBorderCompliance）用于查询用户创建的合规化资质审批单。
服务商可以查询服务名下的任意 `APPID` 创建的审批单；非服务商，只能查询自己审批单。
     */
  async DescribeCrossBorderCompliance(
    req: DescribeCrossBorderComplianceRequest,
    cb?: (error: string, rep: DescribeCrossBorderComplianceResponse) => void
  ): Promise<DescribeCrossBorderComplianceResponse> {
    return this.request("DescribeCrossBorderCompliance", req, cb)
  }

  /**
   * 本接口（CreateSecurityGroup）用于创建新的安全组（SecurityGroup）。
   * 每个账户下每个地域的每个项目的<a href="https://cloud.tencent.com/document/product/213/12453">安全组数量限制</a>。
   * 新建的安全组的入站和出站规则默认都是全部拒绝，在创建后通常您需要再调用CreateSecurityGroupPolicies将安全组的规则设置为需要的规则。
   * 创建安全组同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
   */
  async CreateSecurityGroup(
    req: CreateSecurityGroupRequest,
    cb?: (error: string, rep: CreateSecurityGroupResponse) => void
  ): Promise<CreateSecurityGroupResponse> {
    return this.request("CreateSecurityGroup", req, cb)
  }

  /**
   * 本接口（ModifyNetworkInterfaceAttribute）用于修改弹性网卡属性。
   */
  async ModifyNetworkInterfaceAttribute(
    req: ModifyNetworkInterfaceAttributeRequest,
    cb?: (error: string, rep: ModifyNetworkInterfaceAttributeResponse) => void
  ): Promise<ModifyNetworkInterfaceAttributeResponse> {
    return this.request("ModifyNetworkInterfaceAttribute", req, cb)
  }

  /**
   * 本接口（ModifyVpcPeeringConnection）用于修改私有网络对等连接属性。
   */
  async ModifyVpcPeeringConnection(
    req: ModifyVpcPeeringConnectionRequest,
    cb?: (error: string, rep: ModifyVpcPeeringConnectionResponse) => void
  ): Promise<ModifyVpcPeeringConnectionResponse> {
    return this.request("ModifyVpcPeeringConnection", req, cb)
  }

  /**
     * 本接口（DescribeVpcLimits）用于获取私有网络配额，部分私有网络的配额有地域属性。
LimitTypes取值范围：
* appid-max-vpcs （每个开发商每个地域可创建的VPC数）。
* vpc-max-subnets（每个VPC可创建的子网数）。
* vpc-max-route-tables（每个VPC可创建的路由表数）。
* route-table-max-policies（每个路由表可添加的策略数）。
* vpc-max-vpn-gateways（每个VPC可创建的VPN网关数）。
* appid-max-custom-gateways（每个开发商可创建的对端网关数）。
* appid-max-vpn-connections（每个开发商可创建的VPN通道数）。
* custom-gateway-max-vpn-connections（每个对端网关可创建的VPN通道数）。
* vpn-gateway-max-custom-gateways（每个VPNGW可以创建的通道数）。
* vpc-max-network-acls（每个VPC可创建的网络ACL数）。
* network-acl-max-inbound-policies（每个网络ACL可添加的入站规则数）。
* network-acl-max-outbound-policies（每个网络ACL可添加的出站规则数）。
* vpc-max-vpcpeers（每个VPC可创建的对等连接数）。
* vpc-max-available-vpcpeers（每个VPC可创建的有效对等连接数）。
* vpc-max-basic-network-interconnections（每个VPC可创建的基础网络云主机与VPC互通数）。
* direct-connection-max-snats（每个专线网关可创建的SNAT数）。
* direct-connection-max-dnats（每个专线网关可创建的DNAT数）。
* direct-connection-max-snapts（每个专线网关可创建的SNAPT数）。
* direct-connection-max-dnapts（每个专线网关可创建的DNAPT数）。
* vpc-max-nat-gateways（每个VPC可创建的NAT网关数）。
* nat-gateway-max-eips（每个NAT可以购买的外网IP数量）。
* vpc-max-enis（每个VPC可创建弹性网卡数）。
* vpc-max-havips（每个VPC可创建HAVIP数）。
* eni-max-private-ips（每个ENI可以绑定的内网IP数（ENI未绑定子机））。
* nat-gateway-max-dnapts（每个NAT网关可创建的DNAPT数）。
* vpc-max-ipv6s（每个VPC可分配的IPv6地址数）。
* eni-max-ipv6s（每个ENI可分配的IPv6地址数）。
* vpc-max-assistant_cidrs（每个VPC可分配的辅助CIDR数）。
* appid-max-end-point-services （每个开发商每个地域可创建的终端节点服务个数）。
* appid-max-end-point-service-white-lists （每个开发商每个地域可创建的终端节点服务白名单个数）。
* vpc-max-cmcc-ipv6-cidrs （每个VPC可创建的移动IPv6 CIDR个数）。
* vpc-max-ctcc-ipv6-cidrs （每个VPC可创建的电信IPv6 CIDR个数）。
* vpc-max-cucc-ipv6-cidrs （每个VPC可创建的联调IPv6 CIDR个数）。
* vpc-max-bgp-ipv6-cidrs （每个VPC可创建的默认IPv6 CIDR个数）。
* vpc-max-custom-ipv6-cidrs （每个VPC可创建的自定义IPv6 CIDR个数）。
* vpc-max-ula-ipv6-cidrs （每个VPC可创建的ULA IPv6 CIDR个数）。
     */
  async DescribeVpcLimits(
    req: DescribeVpcLimitsRequest,
    cb?: (error: string, rep: DescribeVpcLimitsResponse) => void
  ): Promise<DescribeVpcLimitsResponse> {
    return this.request("DescribeVpcLimits", req, cb)
  }

  /**
   * 本接口（DescribeSnapshotAttachedInstances）用于查询快照策略关联实例列表。
   */
  async DescribeSnapshotAttachedInstances(
    req: DescribeSnapshotAttachedInstancesRequest,
    cb?: (error: string, rep: DescribeSnapshotAttachedInstancesResponse) => void
  ): Promise<DescribeSnapshotAttachedInstancesResponse> {
    return this.request("DescribeSnapshotAttachedInstances", req, cb)
  }

  /**
   * 本接口（DeleteTrafficMirror）用于删除流量镜像实例。
   */
  async DeleteTrafficMirror(
    req: DeleteTrafficMirrorRequest,
    cb?: (error: string, rep: DeleteTrafficMirrorResponse) => void
  ): Promise<DeleteTrafficMirrorResponse> {
    return this.request("DeleteTrafficMirror", req, cb)
  }

  /**
     * 本接口（DeleteHaVip）用于删除高可用虚拟IP（HAVIP）。<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async DeleteHaVip(
    req: DeleteHaVipRequest,
    cb?: (error: string, rep: DeleteHaVipResponse) => void
  ): Promise<DeleteHaVipResponse> {
    return this.request("DeleteHaVip", req, cb)
  }

  /**
   * 本接口（DescribeProductQuota）用于查询网络产品的配额信息。
   */
  async DescribeProductQuota(
    req: DescribeProductQuotaRequest,
    cb?: (error: string, rep: DescribeProductQuotaResponse) => void
  ): Promise<DescribeProductQuotaResponse> {
    return this.request("DescribeProductQuota", req, cb)
  }

  /**
   * 接口用于修改带宽包属性，包括带宽包名字等
   */
  async ModifyBandwidthPackageAttribute(
    req: ModifyBandwidthPackageAttributeRequest,
    cb?: (error: string, rep: ModifyBandwidthPackageAttributeResponse) => void
  ): Promise<ModifyBandwidthPackageAttributeResponse> {
    return this.request("ModifyBandwidthPackageAttribute", req, cb)
  }

  /**
   * 本接口（CreateVpnGatewaySslServer）用于创建SSL-VPN Server端。
   */
  async CreateVpnGatewaySslServer(
    req: CreateVpnGatewaySslServerRequest,
    cb?: (error: string, rep: CreateVpnGatewaySslServerResponse) => void
  ): Promise<CreateVpnGatewaySslServerResponse> {
    return this.request("CreateVpnGatewaySslServer", req, cb)
  }

  /**
   * 本接口（ModifyVpnGatewayAttribute）用于修改VPN网关属性。
   */
  async ModifyVpnGatewayAttribute(
    req: ModifyVpnGatewayAttributeRequest,
    cb?: (error: string, rep: ModifyVpnGatewayAttributeResponse) => void
  ): Promise<ModifyVpnGatewayAttributeResponse> {
    return this.request("ModifyVpnGatewayAttribute", req, cb)
  }

  /**
   * 本接口（DeleteVpc）用于删除私有网络。
   * 删除前请确保 VPC 内已经没有相关资源，例如云服务器、云数据库、NoSQL、VPN网关、专线网关、负载均衡、对等连接、与之互通的基础网络设备等。
   * 删除私有网络是不可逆的操作，请谨慎处理。
   */
  async DeleteVpc(
    req: DeleteVpcRequest,
    cb?: (error: string, rep: DeleteVpcResponse) => void
  ): Promise<DeleteVpcResponse> {
    return this.request("DeleteVpc", req, cb)
  }

  /**
   * 本接口（DescribeSubnets）用于查询子网列表。
   */
  async DescribeSubnets(
    req: DescribeSubnetsRequest,
    cb?: (error: string, rep: DescribeSubnetsResponse) => void
  ): Promise<DescribeSubnetsResponse> {
    return this.request("DescribeSubnets", req, cb)
  }

  /**
   * 本接口（ModifyPrivateNatGatewayTranslationAclRule）用于修改私网NAT网关源端转换访问控制规则
   */
  async ModifyPrivateNatGatewayTranslationAclRule(
    req: ModifyPrivateNatGatewayTranslationAclRuleRequest,
    cb?: (error: string, rep: ModifyPrivateNatGatewayTranslationAclRuleResponse) => void
  ): Promise<ModifyPrivateNatGatewayTranslationAclRuleResponse> {
    return this.request("ModifyPrivateNatGatewayTranslationAclRule", req, cb)
  }

  /**
   * 本接口（ModifyPrivateIpAddressesAttribute）用于修改弹性网卡内网IP属性。
   */
  async ModifyPrivateIpAddressesAttribute(
    req: ModifyPrivateIpAddressesAttributeRequest,
    cb?: (error: string, rep: ModifyPrivateIpAddressesAttributeResponse) => void
  ): Promise<ModifyPrivateIpAddressesAttributeResponse> {
    return this.request("ModifyPrivateIpAddressesAttribute", req, cb)
  }

  /**
     * 本接口(ReplaceRouteTableInputPolicys)用于替换云联网路由表路由接收策略。
> 特别注意：是全量覆盖，非增量添加

**路由条件支持以下四种：**

- 实例类型: `instance-type`，可选值：私有网络 `VPC`、专线网关 `DIRECTCONNECT`、专线网关 `VPNGW`
- 实例ID: `instance-id`，例如：`dcg-8zljkrft`、`vpc-jdevjrup`，暂不支持 `Edge` 实例
- 实例地域: `instance-region`，例如：`ap-guangzhou`<br />产品支持的所有地域列表可通过接口 [DescribeRegions](https://cloud.tencent.com/document/product/1596/77930) 查询，其中参数 `Product` 设置为 `ccn`
- 路由前缀: `cidr-block`，例如：`10.1.0.0/16`


**使用限制：**
- 一条策略内的单个条件类型，最大支持设置 `25` 个条件值
- 一张路由表，最大支持 `100` 条路由接收策略
- 路由条件类型中，只有 `cidr-block` 类型支持模糊匹配和精确匹配两种，其它类型只支持精确匹配一种模式
     */
  async ReplaceCcnRouteTableInputPolicys(
    req: ReplaceCcnRouteTableInputPolicysRequest,
    cb?: (error: string, rep: ReplaceCcnRouteTableInputPolicysResponse) => void
  ): Promise<ReplaceCcnRouteTableInputPolicysResponse> {
    return this.request("ReplaceCcnRouteTableInputPolicys", req, cb)
  }

  /**
   * 本接口（ModifyNetworkInterfaceQos）用于修改弹性网卡服务质量。
   */
  async ModifyNetworkInterfaceQos(
    req: ModifyNetworkInterfaceQosRequest,
    cb?: (error: string, rep: ModifyNetworkInterfaceQosResponse) => void
  ): Promise<ModifyNetworkInterfaceQosResponse> {
    return this.request("ModifyNetworkInterfaceQos", req, cb)
  }

  /**
     * 本接口（DetachCcnInstances）用于从云联网实例中解关联指定的网络实例。<br />
解关联网络实例后，相应的路由策略会一并删除。
     */
  async DetachCcnInstances(
    req: DetachCcnInstancesRequest,
    cb?: (error: string, rep: DetachCcnInstancesResponse) => void
  ): Promise<DetachCcnInstancesResponse> {
    return this.request("DetachCcnInstances", req, cb)
  }

  /**
   * 创建内网保留IP
   */
  async CreateReserveIpAddresses(
    req: CreateReserveIpAddressesRequest,
    cb?: (error: string, rep: CreateReserveIpAddressesResponse) => void
  ): Promise<CreateReserveIpAddressesResponse> {
    return this.request("CreateReserveIpAddresses", req, cb)
  }

  /**
     * 本接口（EnableRoutes）用于启用已禁用的子网路由。<br />
本接口会校验启用后，是否与已有路由冲突，如果冲突，则无法启用，失败处理。路由冲突时，需要先禁用与之冲突的路由，才能启用该路由。
     */
  async EnableRoutes(
    req: EnableRoutesRequest,
    cb?: (error: string, rep: EnableRoutesResponse) => void
  ): Promise<EnableRoutesResponse> {
    return this.request("EnableRoutes", req, cb)
  }

  /**
   * 本接口（SetCcnRegionBandwidthLimits）用于设置云联网（CCN）各地域出带宽上限，或者地域间带宽上限。
   */
  async SetCcnRegionBandwidthLimits(
    req: SetCcnRegionBandwidthLimitsRequest,
    cb?: (error: string, rep: SetCcnRegionBandwidthLimitsResponse) => void
  ): Promise<SetCcnRegionBandwidthLimitsResponse> {
    return this.request("SetCcnRegionBandwidthLimits", req, cb)
  }

  /**
   * 本接口（ModifyRouteTableAttribute）用于修改路由表（RouteTable）属性。
   */
  async ModifyRouteTableAttribute(
    req: ModifyRouteTableAttributeRequest,
    cb?: (error: string, rep: ModifyRouteTableAttributeResponse) => void
  ): Promise<ModifyRouteTableAttributeResponse> {
    return this.request("ModifyRouteTableAttribute", req, cb)
  }

  /**
   * 本接口（ModifyHaVipAttribute）用于修改高可用虚拟IP（HAVIP）属性。
   */
  async ModifyHaVipAttribute(
    req: ModifyHaVipAttributeRequest,
    cb?: (error: string, rep: ModifyHaVipAttributeResponse) => void
  ): Promise<ModifyHaVipAttributeResponse> {
    return this.request("ModifyHaVipAttribute", req, cb)
  }

  /**
   * 本接口 (ReleaseAddresses) 用于释放一个或多个[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
   * 该操作不可逆，释放后 EIP 关联的 IP 地址将不再属于您的名下。
   * 只有状态为 UNBIND 的 EIP 才能进行释放操作。
   */
  async ReleaseAddresses(
    req: ReleaseAddressesRequest,
    cb?: (error: string, rep: ReleaseAddressesResponse) => void
  ): Promise<ReleaseAddressesResponse> {
    return this.request("ReleaseAddresses", req, cb)
  }

  /**
   * 查询内网保留 IP
   */
  async DescribeReserveIpAddresses(
    req: DescribeReserveIpAddressesRequest,
    cb?: (error: string, rep: DescribeReserveIpAddressesResponse) => void
  ): Promise<DescribeReserveIpAddressesResponse> {
    return this.request("DescribeReserveIpAddresses", req, cb)
  }

  /**
   * 查询指定带宽包的带宽上下限范围
   */
  async DescribeBandwidthPackageBandwidthRange(
    req: DescribeBandwidthPackageBandwidthRangeRequest,
    cb?: (error: string, rep: DescribeBandwidthPackageBandwidthRangeResponse) => void
  ): Promise<DescribeBandwidthPackageBandwidthRangeResponse> {
    return this.request("DescribeBandwidthPackageBandwidthRange", req, cb)
  }

  /**
   * 本接口（ReplaceRoutes）根据路由策略ID（RouteId）修改指定的路由策略（Route），支持批量修改。
   */
  async ReplaceRoutes(
    req: ReplaceRoutesRequest,
    cb?: (error: string, rep: ReplaceRoutesResponse) => void
  ): Promise<ReplaceRoutesResponse> {
    return this.request("ReplaceRoutes", req, cb)
  }

  /**
     * 本接口（DescribeVpcPrivateIpAddresses）用于查询VPC内网IP信息。<br />
只能查询已使用的IP信息，当查询未使用的IP时，本接口不会报错，但不会出现在返回结果里。
     */
  async DescribeVpcPrivateIpAddresses(
    req: DescribeVpcPrivateIpAddressesRequest,
    cb?: (error: string, rep: DescribeVpcPrivateIpAddressesResponse) => void
  ): Promise<DescribeVpcPrivateIpAddressesResponse> {
    return this.request("DescribeVpcPrivateIpAddresses", req, cb)
  }

  /**
   * 该接口用于修改IP6转换实例属性，当前仅支持修改实例名称。
   */
  async ModifyIp6Translator(
    req: ModifyIp6TranslatorRequest,
    cb?: (error: string, rep: ModifyIp6TranslatorResponse) => void
  ): Promise<ModifyIp6TranslatorResponse> {
    return this.request("ModifyIp6Translator", req, cb)
  }

  /**
   * 本接口（DescribeAddressTemplates）用于查询IP地址模板。
   */
  async DescribeAddressTemplates(
    req: DescribeAddressTemplatesRequest,
    cb?: (error: string, rep: DescribeAddressTemplatesResponse) => void
  ): Promise<DescribeAddressTemplatesResponse> {
    return this.request("DescribeAddressTemplates", req, cb)
  }

  /**
   * 本接口（CreateAddressTemplate）用于创建IP地址模板。
   */
  async CreateAddressTemplate(
    req: CreateAddressTemplateRequest,
    cb?: (error: string, rep: CreateAddressTemplateResponse) => void
  ): Promise<CreateAddressTemplateResponse> {
    return this.request("CreateAddressTemplate", req, cb)
  }

  /**
   * 本接口 (TransformAddress) 用于将实例的普通公网 IP 转换为[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
   * 平台对用户每地域每日解绑 EIP 重新分配普通公网 IP 次数有所限制（可参见 [EIP 产品简介](/document/product/213/1941)）。上述配额可通过 [DescribeAddressQuota](https://cloud.tencent.com/document/api/213/1378) 接口获取。
   */
  async TransformAddress(
    req: TransformAddressRequest,
    cb?: (error: string, rep: TransformAddressResponse) => void
  ): Promise<TransformAddressResponse> {
    return this.request("TransformAddress", req, cb)
  }

  /**
   * 本接口（DescribeVpcEndPoint）用于查询终端节点列表。
   */
  async DescribeVpcEndPoint(
    req: DescribeVpcEndPointRequest,
    cb?: (error: string, rep: DescribeVpcEndPointResponse) => void
  ): Promise<DescribeVpcEndPointResponse> {
    return this.request("DescribeVpcEndPoint", req, cb)
  }

  /**
   * 查询账户在指定地域IPV6转换实例和规则的配额
   */
  async DescribeIp6TranslatorQuota(
    req: DescribeIp6TranslatorQuotaRequest,
    cb?: (error: string, rep: DescribeIp6TranslatorQuotaResponse) => void
  ): Promise<DescribeIp6TranslatorQuotaResponse> {
    return this.request("DescribeIp6TranslatorQuota", req, cb)
  }

  /**
   * 本接口（CreateVpcEndPointServiceWhiteList）创建终端服务白名单。
   */
  async CreateVpcEndPointServiceWhiteList(
    req: CreateVpcEndPointServiceWhiteListRequest,
    cb?: (error: string, rep: CreateVpcEndPointServiceWhiteListResponse) => void
  ): Promise<CreateVpcEndPointServiceWhiteListResponse> {
    return this.request("CreateVpcEndPointServiceWhiteList", req, cb)
  }

  /**
   * 本接口（DownloadCustomerGatewayConfiguration）用于下载VPN通道配置。
   */
  async DownloadCustomerGatewayConfiguration(
    req: DownloadCustomerGatewayConfigurationRequest,
    cb?: (error: string, rep: DownloadCustomerGatewayConfigurationResponse) => void
  ): Promise<DownloadCustomerGatewayConfigurationResponse> {
    return this.request("DownloadCustomerGatewayConfiguration", req, cb)
  }

  /**
   * 本接口（DescribeCustomerGateways）用于查询对端网关列表。
   */
  async DescribeCustomerGateways(
    req: DescribeCustomerGatewaysRequest,
    cb?: (error: string, rep: DescribeCustomerGatewaysResponse) => void
  ): Promise<DescribeCustomerGatewaysResponse> {
    return this.request("DescribeCustomerGateways", req, cb)
  }

  /**
   * 本接口（DescribeNetworkAcls）用于查询网络ACL列表。
   */
  async DescribeNetworkAcls(
    req: DescribeNetworkAclsRequest,
    cb?: (error: string, rep: DescribeNetworkAclsResponse) => void
  ): Promise<DescribeNetworkAclsResponse> {
    return this.request("DescribeNetworkAcls", req, cb)
  }

  /**
   * 本接口（DescribeServiceTemplateGroups）用于查询协议端口模板集合。
   */
  async DescribeServiceTemplateGroups(
    req: DescribeServiceTemplateGroupsRequest,
    cb?: (error: string, rep: DescribeServiceTemplateGroupsResponse) => void
  ): Promise<DescribeServiceTemplateGroupsResponse> {
    return this.request("DescribeServiceTemplateGroups", req, cb)
  }

  /**
   * 本接口（AssignIpv6CidrBlock）用于分配IPv6网段。
   * 使用本接口前，您需要已有VPC实例，如果没有可通过接口<a href="https://cloud.tencent.com/document/api/215/15774" title="CreateVpc" target="_blank">CreateVpc</a>创建。
   * 每个VPC只能申请一个IPv6网段。
   */
  async AssignIpv6CidrBlock(
    req: AssignIpv6CidrBlockRequest,
    cb?: (error: string, rep: AssignIpv6CidrBlockResponse) => void
  ): Promise<AssignIpv6CidrBlockResponse> {
    return this.request("AssignIpv6CidrBlock", req, cb)
  }

  /**
   * 本接口（DescribeNatGatewayDestinationIpPortTranslationNatRules）用于查询NAT网关端口转发规则对象数组。
   */
  async DescribeNatGatewayDestinationIpPortTranslationNatRules(
    req: DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest,
    cb?: (
      error: string,
      rep: DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse
    ) => void
  ): Promise<DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse> {
    return this.request("DescribeNatGatewayDestinationIpPortTranslationNatRules", req, cb)
  }

  /**
   * 本接口（DescribeCcnAttachedInstances）用于查询云联网实例下已关联的网络实例。
   */
  async DescribeCcnAttachedInstances(
    req: DescribeCcnAttachedInstancesRequest,
    cb?: (error: string, rep: DescribeCcnAttachedInstancesResponse) => void
  ): Promise<DescribeCcnAttachedInstancesResponse> {
    return this.request("DescribeCcnAttachedInstances", req, cb)
  }

  /**
   * 本接口（DescribePrivateNatGatewayRegions）用于查询查询私网NAT网关可支持地域
   */
  async DescribePrivateNatGatewayRegions(
    req?: DescribePrivateNatGatewayRegionsRequest,
    cb?: (error: string, rep: DescribePrivateNatGatewayRegionsResponse) => void
  ): Promise<DescribePrivateNatGatewayRegionsResponse> {
    return this.request("DescribePrivateNatGatewayRegions", req, cb)
  }

  /**
   * 修改内网保留 IP
   */
  async ModifyReserveIpAddress(
    req: ModifyReserveIpAddressRequest,
    cb?: (error: string, rep: ModifyReserveIpAddressResponse) => void
  ): Promise<ModifyReserveIpAddressResponse> {
    return this.request("ModifyReserveIpAddress", req, cb)
  }

  /**
   * 本接口（DisassociateNatGatewayAddress）用于NAT网关解绑弹性IP。
   */
  async DisassociateNatGatewayAddress(
    req: DisassociateNatGatewayAddressRequest,
    cb?: (error: string, rep: DisassociateNatGatewayAddressResponse) => void
  ): Promise<DisassociateNatGatewayAddressResponse> {
    return this.request("DisassociateNatGatewayAddress", req, cb)
  }

  /**
   * 本接口（DescribeGatewayFlowMonitorDetail）用于查询网关流量监控明细。
   * 只支持单个网关实例查询。即入参 `VpnId`、 `DirectConnectGatewayId`、 `PeeringConnectionId`、 `NatId` 最多只支持传一个，且必须传一个。
   * 如果网关有流量，但调用本接口没有返回数据，请在控制台对应网关详情页确认是否开启网关流量监控。
   */
  async DescribeGatewayFlowMonitorDetail(
    req: DescribeGatewayFlowMonitorDetailRequest,
    cb?: (error: string, rep: DescribeGatewayFlowMonitorDetailResponse) => void
  ): Promise<DescribeGatewayFlowMonitorDetailResponse> {
    return this.request("DescribeGatewayFlowMonitorDetail", req, cb)
  }

  /**
     * 本接口（UnassignIpv6Addresses）用于释放弹性网卡`IPv6`地址。<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async UnassignIpv6Addresses(
    req: UnassignIpv6AddressesRequest,
    cb?: (error: string, rep: UnassignIpv6AddressesResponse) => void
  ): Promise<UnassignIpv6AddressesResponse> {
    return this.request("UnassignIpv6Addresses", req, cb)
  }

  /**
     * 本接口（AssociateIPv6Address）用于将弹性公网IPv6（简称EIPv6）实例绑定到 CVM 或弹性网卡配置的内网 IPv6 地址上。

- 将 EIPv6 绑定到 CVM 上，其本质是将 EIPv6 绑定到 CVM 弹性网卡所配置的内网 IPv6 地址上。
- 将 EIPv6 绑定到指定网卡的内网 IPv6 时，需确保该内网 IPv6 地址为未绑定状态，才能执行绑定操作。
     */
  async AssociateIPv6Address(
    req: AssociateIPv6AddressRequest,
    cb?: (error: string, rep: AssociateIPv6AddressResponse) => void
  ): Promise<AssociateIPv6AddressResponse> {
    return this.request("AssociateIPv6Address", req, cb)
  }

  /**
     * 本接口（DeleteAddressTemplateGroup）用于删除IP地址模板集合。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async DeleteAddressTemplateGroup(
    req: DeleteAddressTemplateGroupRequest,
    cb?: (error: string, rep: DeleteAddressTemplateGroupResponse) => void
  ): Promise<DeleteAddressTemplateGroupResponse> {
    return this.request("DeleteAddressTemplateGroup", req, cb)
  }

  /**
   * 本接口（DescribeVpcTaskResult）用于查询VPC任务执行结果。
   */
  async DescribeVpcTaskResult(
    req: DescribeVpcTaskResultRequest,
    cb?: (error: string, rep: DescribeVpcTaskResultResponse) => void
  ): Promise<DescribeVpcTaskResultResponse> {
    return this.request("DescribeVpcTaskResult", req, cb)
  }

  /**
   * 本接口（CreateDirectConnectGateway）用于创建专线网关。
   */
  async CreateDirectConnectGateway(
    req: CreateDirectConnectGatewayRequest,
    cb?: (error: string, rep: CreateDirectConnectGatewayResponse) => void
  ): Promise<CreateDirectConnectGatewayResponse> {
    return this.request("CreateDirectConnectGateway", req, cb)
  }

  /**
   * 本接口(AssociateNatGatewayAddress)用于NAT网关绑定弹性IP（EIP）。
   */
  async AssociateNatGatewayAddress(
    req: AssociateNatGatewayAddressRequest,
    cb?: (error: string, rep: AssociateNatGatewayAddressResponse) => void
  ): Promise<AssociateNatGatewayAddressResponse> {
    return this.request("AssociateNatGatewayAddress", req, cb)
  }

  /**
   * 本接口（DeleteCcnRouteTables）用于删除云联网路由表。
   */
  async DeleteCcnRouteTables(
    req: DeleteCcnRouteTablesRequest,
    cb?: (error: string, rep: DeleteCcnRouteTablesResponse) => void
  ): Promise<DeleteCcnRouteTablesResponse> {
    return this.request("DeleteCcnRouteTables", req, cb)
  }

  /**
   * 本接口（ModifyPrivateNatGatewayTranslationNatRule）用于修改私网NAT网关源端转换规则
   */
  async ModifyPrivateNatGatewayTranslationNatRule(
    req: ModifyPrivateNatGatewayTranslationNatRuleRequest,
    cb?: (error: string, rep: ModifyPrivateNatGatewayTranslationNatRuleResponse) => void
  ): Promise<ModifyPrivateNatGatewayTranslationNatRuleResponse> {
    return this.request("ModifyPrivateNatGatewayTranslationNatRule", req, cb)
  }

  /**
   * 本接口（ModifyVpnGatewayRoutes）用于修改VPN路由是否启用。
   */
  async ModifyVpnGatewayRoutes(
    req: ModifyVpnGatewayRoutesRequest,
    cb?: (error: string, rep: ModifyVpnGatewayRoutesResponse) => void
  ): Promise<ModifyVpnGatewayRoutesResponse> {
    return this.request("ModifyVpnGatewayRoutes", req, cb)
  }

  /**
   * 检查流量镜像的采集端接收端（公网IP类型）
   */
  async CheckTrafficMirror(
    req: CheckTrafficMirrorRequest,
    cb?: (error: string, rep: CheckTrafficMirrorResponse) => void
  ): Promise<CheckTrafficMirrorResponse> {
    return this.request("CheckTrafficMirror", req, cb)
  }

  /**
   * 本接口（ModifyIPv6AddressesBandwidth）用于调整弹性公网 IPv6（简称EIPv6）实例的带宽上限。
   */
  async ModifyIPv6AddressesBandwidth(
    req: ModifyIPv6AddressesBandwidthRequest,
    cb?: (error: string, rep: ModifyIPv6AddressesBandwidthResponse) => void
  ): Promise<ModifyIPv6AddressesBandwidthResponse> {
    return this.request("ModifyIPv6AddressesBandwidth", req, cb)
  }

  /**
     * 本接口（DescribeCrossBorderCcnRegionBandwidthLimits）用于获取要锁定的限速实例列表。
该接口一般用来封禁地域间限速的云联网实例下的限速实例, 目前联通内部运营系统通过云API调用, 如果是出口限速, 一般使用更粗的云联网实例粒度封禁（DescribeTenantCcns）
如有需要, 可以封禁任意限速实例, 可接入到内部运营系统
     */
  async DescribeCrossBorderCcnRegionBandwidthLimits(
    req: DescribeCrossBorderCcnRegionBandwidthLimitsRequest,
    cb?: (error: string, rep: DescribeCrossBorderCcnRegionBandwidthLimitsResponse) => void
  ): Promise<DescribeCrossBorderCcnRegionBandwidthLimitsResponse> {
    return this.request("DescribeCrossBorderCcnRegionBandwidthLimits", req, cb)
  }

  /**
   * 本接口（ModifySnapshotPolicies）用于修改快照策略。
   */
  async ModifySnapshotPolicies(
    req: ModifySnapshotPoliciesRequest,
    cb?: (error: string, rep: ModifySnapshotPoliciesResponse) => void
  ): Promise<ModifySnapshotPoliciesResponse> {
    return this.request("ModifySnapshotPolicies", req, cb)
  }

  /**
   * 本接口（DeleteVpnGatewaySslClient）用于删除SSL-VPN-CLIENT。
   */
  async DeleteVpnGatewaySslClient(
    req: DeleteVpnGatewaySslClientRequest,
    cb?: (error: string, rep: DeleteVpnGatewaySslClientResponse) => void
  ): Promise<DeleteVpnGatewaySslClientResponse> {
    return this.request("DeleteVpnGatewaySslClient", req, cb)
  }

  /**
   * 本接口(CreateNatGatewayDestinationIpPortTranslationNatRule)用于创建NAT网关端口转发规则。
   */
  async CreateNatGatewayDestinationIpPortTranslationNatRule(
    req: CreateNatGatewayDestinationIpPortTranslationNatRuleRequest,
    cb?: (error: string, rep: CreateNatGatewayDestinationIpPortTranslationNatRuleResponse) => void
  ): Promise<CreateNatGatewayDestinationIpPortTranslationNatRuleResponse> {
    return this.request("CreateNatGatewayDestinationIpPortTranslationNatRule", req, cb)
  }

  /**
     * 本接口（ModifyAddressTemplateAttribute）用于修改IP地址模板。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async ModifyAddressTemplateAttribute(
    req: ModifyAddressTemplateAttributeRequest,
    cb?: (error: string, rep: ModifyAddressTemplateAttributeResponse) => void
  ): Promise<ModifyAddressTemplateAttributeResponse> {
    return this.request("ModifyAddressTemplateAttribute", req, cb)
  }

  /**
   * 删除模板对象中的IP地址、协议端口、IP地址组、协议端口组。
   */
  async DeleteTemplateMember(
    req: DeleteTemplateMemberRequest,
    cb?: (error: string, rep: DeleteTemplateMemberResponse) => void
  ): Promise<DeleteTemplateMemberResponse> {
    return this.request("DeleteTemplateMember", req, cb)
  }

  /**
   * 本接口（AssignIpv6SubnetCidrBlock）用于分配IPv6子网段。
   * 给子网分配 `IPv6` 网段，要求子网所属 `VPC` 已获得 `IPv6` 网段。如果尚未分配，请先通过接口 `AssignIpv6CidrBlock` 给子网所属 `VPC` 分配一个 `IPv6` 网段。否则无法分配 `IPv6` 子网段。
   * 每个子网只能分配一个IPv6网段。
   */
  async AssignIpv6SubnetCidrBlock(
    req: AssignIpv6SubnetCidrBlockRequest,
    cb?: (error: string, rep: AssignIpv6SubnetCidrBlockResponse) => void
  ): Promise<AssignIpv6SubnetCidrBlockResponse> {
    return this.request("AssignIpv6SubnetCidrBlock", req, cb)
  }

  /**
   * 本接口（DescribeVpnGatewayCcnRoutes）用于查询VPN网关云联网路由。
   */
  async DescribeVpnGatewayCcnRoutes(
    req: DescribeVpnGatewayCcnRoutesRequest,
    cb?: (error: string, rep: DescribeVpnGatewayCcnRoutesResponse) => void
  ): Promise<DescribeVpnGatewayCcnRoutesResponse> {
    return this.request("DescribeVpnGatewayCcnRoutes", req, cb)
  }

  /**
     * 本接口（AttachCcnInstances）用于将网络实例加载到云联网实例中，网络实例包括VPC和专线网关。<br />
每个云联网能够关联的网络实例个数是有限的，详情请参考产品文档。如果需要扩充请联系在线客服。
     */
  async AttachCcnInstances(
    req: AttachCcnInstancesRequest,
    cb?: (error: string, rep: AttachCcnInstancesResponse) => void
  ): Promise<AttachCcnInstancesResponse> {
    return this.request("AttachCcnInstances", req, cb)
  }

  /**
   * 本接口（DeleteSubnet）用于删除子网（Subnet）。
   * 删除子网前，请清理该子网下所有资源，包括云服务器、负载均衡、云数据、NoSQL、弹性网卡等资源。
   */
  async DeleteSubnet(
    req: DeleteSubnetRequest,
    cb?: (error: string, rep: DeleteSubnetResponse) => void
  ): Promise<DeleteSubnetResponse> {
    return this.request("DeleteSubnet", req, cb)
  }

  /**
     * 本接口(AttachClassicLinkVpc)用于创建私有网络和基础网络设备互通。
* 私有网络和基础网络设备必须在同一个地域。
* 私有网络和基础网络的区别详见vpc产品文档-<a href="https://cloud.tencent.com/document/product/215/30720">私有网络与基础网络</a>。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async AttachClassicLinkVpc(
    req: AttachClassicLinkVpcRequest,
    cb?: (error: string, rep: AttachClassicLinkVpcResponse) => void
  ): Promise<AttachClassicLinkVpcResponse> {
    return this.request("AttachClassicLinkVpc", req, cb)
  }

  /**
   * 修改模板对象中的IP地址、协议端口、IP地址组、协议端口组。
   */
  async ModifyTemplateMember(
    req: ModifyTemplateMemberRequest,
    cb?: (error: string, rep: ModifyTemplateMemberResponse) => void
  ): Promise<ModifyTemplateMemberResponse> {
    return this.request("ModifyTemplateMember", req, cb)
  }

  /**
   * 本接口 (DescribeTrafficPackages)  用于查询共享流量包详细信息，包括共享流量包唯一标识ID，名称，流量使用信息等
   */
  async DescribeTrafficPackages(
    req: DescribeTrafficPackagesRequest,
    cb?: (error: string, rep: DescribeTrafficPackagesResponse) => void
  ): Promise<DescribeTrafficPackagesResponse> {
    return this.request("DescribeTrafficPackages", req, cb)
  }

  /**
   * 本接口（CreateVpcEndPointService）用于创建终端节点服务。
   */
  async CreateVpcEndPointService(
    req: CreateVpcEndPointServiceRequest,
    cb?: (error: string, rep: CreateVpcEndPointServiceResponse) => void
  ): Promise<CreateVpcEndPointServiceResponse> {
    return this.request("CreateVpcEndPointService", req, cb)
  }

  /**
   * 本接口（ResetVpnConnection）用于重置VPN通道。
   */
  async ResetVpnConnection(
    req: ResetVpnConnectionRequest,
    cb?: (error: string, rep: ResetVpnConnectionResponse) => void
  ): Promise<ResetVpnConnectionResponse> {
    return this.request("ResetVpnConnection", req, cb)
  }

  /**
   * 本接口（ModifyVpnGatewayCcnRoutes）用于修改VPN网关云联网路由。
   */
  async ModifyVpnGatewayCcnRoutes(
    req: ModifyVpnGatewayCcnRoutesRequest,
    cb?: (error: string, rep: ModifyVpnGatewayCcnRoutesResponse) => void
  ): Promise<ModifyVpnGatewayCcnRoutesResponse> {
    return this.request("ModifyVpnGatewayCcnRoutes", req, cb)
  }

  /**
   * 本接口（DeletePrivateNatGatewayDestinationIpPortTranslationNatRule）用于删除私网NAT网关目的端口转换规则
   */
  async DeletePrivateNatGatewayDestinationIpPortTranslationNatRule(
    req: DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest,
    cb?: (
      error: string,
      rep: DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse
    ) => void
  ): Promise<DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse> {
    return this.request("DeletePrivateNatGatewayDestinationIpPortTranslationNatRule", req, cb)
  }

  /**
   * 本接口（ModifyDhcpIpAttribute）用于修改DhcpIp属性
   */
  async ModifyDhcpIpAttribute(
    req: ModifyDhcpIpAttributeRequest,
    cb?: (error: string, rep: ModifyDhcpIpAttributeResponse) => void
  ): Promise<ModifyDhcpIpAttributeResponse> {
    return this.request("ModifyDhcpIpAttribute", req, cb)
  }

  /**
   * 本接口 (DescribeBandwidthPackageResources) 用于根据共享带宽包唯一ID查询共享带宽包内的资源列表，支持按条件过滤查询结果和分页查询。
   */
  async DescribeBandwidthPackageResources(
    req: DescribeBandwidthPackageResourcesRequest,
    cb?: (error: string, rep: DescribeBandwidthPackageResourcesResponse) => void
  ): Promise<DescribeBandwidthPackageResourcesResponse> {
    return this.request("DescribeBandwidthPackageResources", req, cb)
  }

  /**
   * 查询私有网络对等连接。
   */
  async DescribeVpcPeeringConnections(
    req: DescribeVpcPeeringConnectionsRequest,
    cb?: (error: string, rep: DescribeVpcPeeringConnectionsResponse) => void
  ): Promise<DescribeVpcPeeringConnectionsResponse> {
    return this.request("DescribeVpcPeeringConnections", req, cb)
  }

  /**
   * 高优路由表创建
   */
  async CreateHighPriorityRouteTable(
    req: CreateHighPriorityRouteTableRequest,
    cb?: (error: string, rep: CreateHighPriorityRouteTableResponse) => void
  ): Promise<CreateHighPriorityRouteTableResponse> {
    return this.request("CreateHighPriorityRouteTable", req, cb)
  }

  /**
   * 本接口（InquiryPriceRenewAddresses）用于续费预付费弹性公网IP询价。
   */
  async InquiryPriceRenewAddresses(
    req: InquiryPriceRenewAddressesRequest,
    cb?: (error: string, rep: InquiryPriceRenewAddressesResponse) => void
  ): Promise<InquiryPriceRenewAddressesResponse> {
    return this.request("InquiryPriceRenewAddresses", req, cb)
  }

  /**
   * 本接口（ModifyGatewayFlowQos）用于调整网关流控带宽。
   */
  async ModifyGatewayFlowQos(
    req: ModifyGatewayFlowQosRequest,
    cb?: (error: string, rep: ModifyGatewayFlowQosResponse) => void
  ): Promise<ModifyGatewayFlowQosResponse> {
    return this.request("ModifyGatewayFlowQos", req, cb)
  }

  /**
   * 本接口（DescribeRouteConflicts）用于查询自定义路由策略与云联网路由策略冲突列表。
   */
  async DescribeRouteConflicts(
    req: DescribeRouteConflictsRequest,
    cb?: (error: string, rep: DescribeRouteConflictsResponse) => void
  ): Promise<DescribeRouteConflictsResponse> {
    return this.request("DescribeRouteConflicts", req, cb)
  }

  /**
   * 本接口（CreateDefaultSecurityGroup）用于创建（如果项目下未存在默认安全组，则创建；已存在则获取。）默认安全组（SecurityGroup）。
   * 每个账户下每个地域的每个项目的<a href="https://cloud.tencent.com/document/product/213/12453">安全组数量限制</a>。
   * 默认安全组会放通所有IPv4规则，在创建后通常您需要再调用CreateSecurityGroupPolicies将安全组的规则设置为需要的规则。
   * 创建安全组同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
   */
  async CreateDefaultSecurityGroup(
    req: CreateDefaultSecurityGroupRequest,
    cb?: (error: string, rep: CreateDefaultSecurityGroupResponse) => void
  ): Promise<CreateDefaultSecurityGroupResponse> {
    return this.request("CreateDefaultSecurityGroup", req, cb)
  }

  /**
     * 本接口（AssociateDhcpIpWithAddressIp）用于DhcpIp绑定弹性公网IP（EIP）。<br />
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async AssociateDhcpIpWithAddressIp(
    req: AssociateDhcpIpWithAddressIpRequest,
    cb?: (error: string, rep: AssociateDhcpIpWithAddressIpResponse) => void
  ): Promise<AssociateDhcpIpWithAddressIpResponse> {
    return this.request("AssociateDhcpIpWithAddressIp", req, cb)
  }

  /**
     * 本接口（DeleteServiceTemplate）用于删除协议端口模板。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async DeleteServiceTemplate(
    req: DeleteServiceTemplateRequest,
    cb?: (error: string, rep: DeleteServiceTemplateResponse) => void
  ): Promise<DeleteServiceTemplateResponse> {
    return this.request("DeleteServiceTemplate", req, cb)
  }

  /**
     * 本接口（UnassignPrivateIpAddresses）用于弹性网卡退还内网 IP。
* 退还弹性网卡上的辅助内网IP，接口自动解除关联弹性公网 IP。不能退还弹性网卡的主内网IP。

本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async UnassignPrivateIpAddresses(
    req: UnassignPrivateIpAddressesRequest,
    cb?: (error: string, rep: UnassignPrivateIpAddressesResponse) => void
  ): Promise<UnassignPrivateIpAddressesResponse> {
    return this.request("UnassignPrivateIpAddresses", req, cb)
  }

  /**
     * 本接口（ModifyAddressTemplateGroupAttribute）用于修改IP地址模板集合。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async ModifyAddressTemplateGroupAttribute(
    req: ModifyAddressTemplateGroupAttributeRequest,
    cb?: (error: string, rep: ModifyAddressTemplateGroupAttributeResponse) => void
  ): Promise<ModifyAddressTemplateGroupAttributeResponse> {
    return this.request("ModifyAddressTemplateGroupAttribute", req, cb)
  }

  /**
     * 1. 该接口用于创建IPV6转换IPV4实例，支持批量
2. 同一个账户在一个地域最多允许创建10个转换实例
     */
  async CreateIp6Translators(
    req: CreateIp6TranslatorsRequest,
    cb?: (error: string, rep: CreateIp6TranslatorsResponse) => void
  ): Promise<CreateIp6TranslatorsResponse> {
    return this.request("CreateIp6Translators", req, cb)
  }

  /**
     * 本接口（CreateDefaultVpc）用于创建默认私有网络(VPC）。

默认VPC适用于快速入门和启动公共实例，您可以像使用任何其他VPC一样使用默认VPC。如果您想创建标准VPC，即指定VPC名称、VPC网段、子网网段、子网可用区，请使用常规创建VPC接口（CreateVpc）

正常情况，本接口并不一定生产默认VPC，而是根据用户账号的网络属性（DescribeAccountAttributes）来决定的
* 支持基础网络、VPC，返回VpcId为0
* 只支持VPC，返回默认VPC信息

您也可以通过 Force 参数，强制返回默认VPC。
     */
  async CreateDefaultVpc(
    req: CreateDefaultVpcRequest,
    cb?: (error: string, rep: CreateDefaultVpcResponse) => void
  ): Promise<CreateDefaultVpcResponse> {
    return this.request("CreateDefaultVpc", req, cb)
  }

  /**
     * 本接口（AttachNetworkInterface）用于弹性网卡绑定云服务器。
* 一个弹性网卡请至少绑定一个安全组，如需绑定请参见<a href="https://cloud.tencent.com/document/product/215/43132">弹性网卡绑定安全组</a>。
* 一个云服务器可以绑定多个弹性网卡，但只能绑定一个主网卡。更多限制信息详见<a href="https://cloud.tencent.com/document/product/576/18527">弹性网卡使用限制</a>。
* 一个弹性网卡只能同时绑定一个云服务器。
* 只有运行中或者已关机状态的云服务器才能绑定弹性网卡，查看云服务器状态详见<a href="https://cloud.tencent.com/document/api/213/9452#InstanceStatus">腾讯云服务器信息</a>。
* 弹性网卡绑定的云服务器必须是私有网络的，而且云服务器所在可用区必须和弹性网卡子网的可用区相同。

本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async AttachNetworkInterface(
    req: AttachNetworkInterfaceRequest,
    cb?: (error: string, rep: AttachNetworkInterfaceResponse) => void
  ): Promise<AttachNetworkInterfaceResponse> {
    return this.request("AttachNetworkInterface", req, cb)
  }

  /**
   * 本接口（DeleteSecurityGroupPolicies）用于用于删除安全组规则（SecurityGroupPolicy）。
   * SecurityGroupPolicySet.Version 用于指定要操作的安全组的版本。传入 Version 版本号若不等于当前安全组的最新版本，将返回失败；若不传 Version 则直接删除指定PolicyIndex的规则。
   */
  async DeleteSecurityGroupPolicies(
    req: DeleteSecurityGroupPoliciesRequest,
    cb?: (error: string, rep: DeleteSecurityGroupPoliciesResponse) => void
  ): Promise<DeleteSecurityGroupPoliciesResponse> {
    return this.request("DeleteSecurityGroupPolicies", req, cb)
  }

  /**
   * 本接口（DescribeNetworkAclQuintupleEntries）查询入方向或出方向网络ACL五元组条目列表。
   */
  async DescribeNetworkAclQuintupleEntries(
    req: DescribeNetworkAclQuintupleEntriesRequest,
    cb?: (error: string, rep: DescribeNetworkAclQuintupleEntriesResponse) => void
  ): Promise<DescribeNetworkAclQuintupleEntriesResponse> {
    return this.request("DescribeNetworkAclQuintupleEntries", req, cb)
  }

  /**
   * 本接口（ModifySecurityGroupAttribute）用于修改安全组（SecurityGroupPolicy）属性。
   */
  async ModifySecurityGroupAttribute(
    req: ModifySecurityGroupAttributeRequest,
    cb?: (error: string, rep: ModifySecurityGroupAttributeResponse) => void
  ): Promise<ModifySecurityGroupAttributeResponse> {
    return this.request("ModifySecurityGroupAttribute", req, cb)
  }

  /**
   * 本接口（DeletePrivateNatGatewayTranslationAclRule）用于删除私网NAT网关源端转换访问控制规则
   */
  async DeletePrivateNatGatewayTranslationAclRule(
    req: DeletePrivateNatGatewayTranslationAclRuleRequest,
    cb?: (error: string, rep: DeletePrivateNatGatewayTranslationAclRuleResponse) => void
  ): Promise<DeletePrivateNatGatewayTranslationAclRuleResponse> {
    return this.request("DeletePrivateNatGatewayTranslationAclRule", req, cb)
  }

  /**
   * 本接口（DescribePrivateNatGatewayTranslationAclRules）用于查询私网NAT网关源端转换访问控制规则
   */
  async DescribePrivateNatGatewayTranslationAclRules(
    req: DescribePrivateNatGatewayTranslationAclRulesRequest,
    cb?: (error: string, rep: DescribePrivateNatGatewayTranslationAclRulesResponse) => void
  ): Promise<DescribePrivateNatGatewayTranslationAclRulesResponse> {
    return this.request("DescribePrivateNatGatewayTranslationAclRules", req, cb)
  }

  /**
   * 本接口（DisableFlowLogs）用于停止流日志。
   */
  async DisableFlowLogs(
    req: DisableFlowLogsRequest,
    cb?: (error: string, rep: DisableFlowLogsResponse) => void
  ): Promise<DisableFlowLogsResponse> {
    return this.request("DisableFlowLogs", req, cb)
  }

  /**
     * 本接口（ResetTrafficMirrorFilter）用于更新流量镜像实例过滤规则。
注意：每一个流量镜像实例，不能同时支持按nat网关和五元组两种规则过滤
     */
  async ResetTrafficMirrorFilter(
    req: ResetTrafficMirrorFilterRequest,
    cb?: (error: string, rep: ResetTrafficMirrorFilterResponse) => void
  ): Promise<ResetTrafficMirrorFilterResponse> {
    return this.request("ResetTrafficMirrorFilter", req, cb)
  }

  /**
   * 本接口（CreateCustomerGateway）用于创建对端网关。
   */
  async CreateCustomerGateway(
    req: CreateCustomerGatewayRequest,
    cb?: (error: string, rep: CreateCustomerGatewayResponse) => void
  ): Promise<CreateCustomerGatewayResponse> {
    return this.request("CreateCustomerGateway", req, cb)
  }

  /**
   * 本接口（CreateTrafficMirror）用于创建流量镜像实例。
   */
  async CreateTrafficMirror(
    req: CreateTrafficMirrorRequest,
    cb?: (error: string, rep: CreateTrafficMirrorResponse) => void
  ): Promise<CreateTrafficMirrorResponse> {
    return this.request("CreateTrafficMirror", req, cb)
  }

  /**
   * 本接口（AuditCrossBorderCompliance）用于服务商操作合规化资质审批。
   * 服务商只能操作提交到本服务商的审批单，后台会校验身份。即只授权给服务商的`APPID` 调用本接口。
   * `APPROVED` 状态的审批单，可以再次操作为 `DENY`；`DENY` 状态的审批单，也可以再次操作为 `APPROVED`。
   */
  async AuditCrossBorderCompliance(
    req: AuditCrossBorderComplianceRequest,
    cb?: (error: string, rep: AuditCrossBorderComplianceResponse) => void
  ): Promise<AuditCrossBorderComplianceResponse> {
    return this.request("AuditCrossBorderCompliance", req, cb)
  }

  /**
   * 本接口（DescribeVpcInstances）用于查询VPC下的云主机实例列表。
   */
  async DescribeVpcInstances(
    req: DescribeVpcInstancesRequest,
    cb?: (error: string, rep: DescribeVpcInstancesResponse) => void
  ): Promise<DescribeVpcInstancesResponse> {
    return this.request("DescribeVpcInstances", req, cb)
  }

  /**
   * 本接口（DescribeVpnGatewaySslServers）用于查询SSL-VPN SERVER 列表信息。
   */
  async DescribeVpnGatewaySslServers(
    req: DescribeVpnGatewaySslServersRequest,
    cb?: (error: string, rep: DescribeVpnGatewaySslServersResponse) => void
  ): Promise<DescribeVpnGatewaySslServersResponse> {
    return this.request("DescribeVpnGatewaySslServers", req, cb)
  }

  /**
   * 本接口（DeleteRouteTable）用于删除路由表。
   */
  async DeleteRouteTable(
    req: DeleteRouteTableRequest,
    cb?: (error: string, rep: DeleteRouteTableResponse) => void
  ): Promise<DeleteRouteTableResponse> {
    return this.request("DeleteRouteTable", req, cb)
  }

  /**
   * 本接口（DescribeAccountAttributes）用于查询用户账号私有属性。
   */
  async DescribeAccountAttributes(
    req?: DescribeAccountAttributesRequest,
    cb?: (error: string, rep: DescribeAccountAttributesResponse) => void
  ): Promise<DescribeAccountAttributesResponse> {
    return this.request("DescribeAccountAttributes", req, cb)
  }

  /**
     * 本接口（AssignIpv6Addresses）用于弹性网卡申请`IPv6`地址。<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
* 一个弹性网卡支持绑定的IP地址是有限制的，更多资源限制信息详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
* 可以指定`IPv6`地址申请，地址类型不能为主`IP`，`IPv6`地址暂时只支持作为辅助`IP`。
* 地址必须要在弹性网卡所在子网内，而且不能被占用。
* 在弹性网卡上申请一个到多个辅助`IPv6`地址，接口会在弹性网卡所在子网段内返回指定数量的辅助`IPv6`地址。
     */
  async AssignIpv6Addresses(
    req: AssignIpv6AddressesRequest,
    cb?: (error: string, rep: AssignIpv6AddressesResponse) => void
  ): Promise<AssignIpv6AddressesResponse> {
    return this.request("AssignIpv6Addresses", req, cb)
  }

  /**
   * 本接口（DescribeRouteTableSelectionPolicies）用于查询云联网路由表选择策略。
   */
  async DescribeRouteTableSelectionPolicies(
    req: DescribeRouteTableSelectionPoliciesRequest,
    cb?: (error: string, rep: DescribeRouteTableSelectionPoliciesResponse) => void
  ): Promise<DescribeRouteTableSelectionPoliciesResponse> {
    return this.request("DescribeRouteTableSelectionPolicies", req, cb)
  }

  /**
     * 本接口（DescribeIpGeolocationInfos）用于查询IP地址信息，包括地理位置信息和网络信息。
<font color="#FF0000">本接口即将下线，仅供存量客户使用，暂停新增用户。</font>
     */
  async DescribeIpGeolocationInfos(
    req: DescribeIpGeolocationInfosRequest,
    cb?: (error: string, rep: DescribeIpGeolocationInfosResponse) => void
  ): Promise<DescribeIpGeolocationInfosResponse> {
    return this.request("DescribeIpGeolocationInfos", req, cb)
  }

  /**
     * 本接口（UnassignIpv6CidrBlock）用于释放IPv6网段。<br />
网段如果还有IP占用且未回收，则网段无法释放。
     */
  async UnassignIpv6CidrBlock(
    req: UnassignIpv6CidrBlockRequest,
    cb?: (error: string, rep: UnassignIpv6CidrBlockResponse) => void
  ): Promise<UnassignIpv6CidrBlockResponse> {
    return this.request("UnassignIpv6CidrBlock", req, cb)
  }

  /**
   * 本接口(CreateNatGatewaySourceIpTranslationNatRule)用于创建NAT网关SNAT规则
   */
  async CreateNatGatewaySourceIpTranslationNatRule(
    req: CreateNatGatewaySourceIpTranslationNatRuleRequest,
    cb?: (error: string, rep: CreateNatGatewaySourceIpTranslationNatRuleResponse) => void
  ): Promise<CreateNatGatewaySourceIpTranslationNatRuleResponse> {
    return this.request("CreateNatGatewaySourceIpTranslationNatRule", req, cb)
  }

  /**
     * 1. 该接口用于删除IPV6转换规则
2. 支持批量删除同一个转换实例下的多个转换规则
     */
  async RemoveIp6Rules(
    req: RemoveIp6RulesRequest,
    cb?: (error: string, rep: RemoveIp6RulesResponse) => void
  ): Promise<RemoveIp6RulesResponse> {
    return this.request("RemoveIp6Rules", req, cb)
  }

  /**
   * 本接口（RejectVpcPeeringConnection）用于驳回对等连接请求。
   */
  async RejectVpcPeeringConnection(
    req: RejectVpcPeeringConnectionRequest,
    cb?: (error: string, rep: RejectVpcPeeringConnectionResponse) => void
  ): Promise<RejectVpcPeeringConnectionResponse> {
    return this.request("RejectVpcPeeringConnection", req, cb)
  }

  /**
   * 本接口（DescribePrivateNatGateways）用于查询私网NAT网关
   */
  async DescribePrivateNatGateways(
    req: DescribePrivateNatGatewaysRequest,
    cb?: (error: string, rep: DescribePrivateNatGatewaysResponse) => void
  ): Promise<DescribePrivateNatGatewaysResponse> {
    return this.request("DescribePrivateNatGateways", req, cb)
  }

  /**
     * 本接口（CreateVpnConnection）用于创建VPN通道。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async CreateVpnConnection(
    req: CreateVpnConnectionRequest,
    cb?: (error: string, rep: CreateVpnConnectionResponse) => void
  ): Promise<CreateVpnConnectionResponse> {
    return this.request("CreateVpnConnection", req, cb)
  }

  /**
   * 本接口（ModifyCustomerGatewayAttribute）用于修改对端网关信息。
   */
  async ModifyCustomerGatewayAttribute(
    req: ModifyCustomerGatewayAttributeRequest,
    cb?: (error: string, rep: ModifyCustomerGatewayAttributeResponse) => void
  ): Promise<ModifyCustomerGatewayAttributeResponse> {
    return this.request("ModifyCustomerGatewayAttribute", req, cb)
  }

  /**
     * 本接口（EnableCcnRoutes）用于启用已经加入云联网（CCN）的路由。<br />
本接口会校验启用后，是否与已有路由冲突，如果冲突，则无法启用，失败处理。路由冲突时，需要先禁用与之冲突的路由，才能启用该路由。
     */
  async EnableCcnRoutes(
    req: EnableCcnRoutesRequest,
    cb?: (error: string, rep: EnableCcnRoutesResponse) => void
  ): Promise<EnableCcnRoutesResponse> {
    return this.request("EnableCcnRoutes", req, cb)
  }

  /**
   * 本接口（CreatePrivateNatGatewayDestinationIpPortTranslationNatRule）用于创建私网NAT网关目的端口转换规则
   */
  async CreatePrivateNatGatewayDestinationIpPortTranslationNatRule(
    req: CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest,
    cb?: (
      error: string,
      rep: CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse
    ) => void
  ): Promise<CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse> {
    return this.request("CreatePrivateNatGatewayDestinationIpPortTranslationNatRule", req, cb)
  }

  /**
   * 本接口（DeleteSecurityGroup）用于删除安全组（SecurityGroup）。
   * 只有当前账号下的安全组允许被删除。
   * 安全组实例ID如果在其他安全组的规则中被引用，则无法直接删除。这种情况下，需要先进行规则修改，再删除安全组。
   * 删除的安全组无法再找回，请谨慎调用。
   */
  async DeleteSecurityGroup(
    req: DeleteSecurityGroupRequest,
    cb?: (error: string, rep: DeleteSecurityGroupResponse) => void
  ): Promise<DeleteSecurityGroupResponse> {
    return this.request("DeleteSecurityGroup", req, cb)
  }

  /**
   * 本接口（DescribeNatGatewaySourceIpTranslationNatRules）用于查询NAT网关SNAT转发规则对象数组。
   */
  async DescribeNatGatewaySourceIpTranslationNatRules(
    req: DescribeNatGatewaySourceIpTranslationNatRulesRequest,
    cb?: (error: string, rep: DescribeNatGatewaySourceIpTranslationNatRulesResponse) => void
  ): Promise<DescribeNatGatewaySourceIpTranslationNatRulesResponse> {
    return this.request("DescribeNatGatewaySourceIpTranslationNatRules", req, cb)
  }

  /**
   * 本接口(ModifyNetDetect)用于修改网络探测参数。
   */
  async ModifyNetDetect(
    req: ModifyNetDetectRequest,
    cb?: (error: string, rep: ModifyNetDetectResponse) => void
  ): Promise<ModifyNetDetectResponse> {
    return this.request("ModifyNetDetect", req, cb)
  }

  /**
   * 接口用于查询账户在当前地域的带宽包上限数量以及使用数量
   */
  async DescribeBandwidthPackageQuota(
    req?: DescribeBandwidthPackageQuotaRequest,
    cb?: (error: string, rep: DescribeBandwidthPackageQuotaResponse) => void
  ): Promise<DescribeBandwidthPackageQuotaResponse> {
    return this.request("DescribeBandwidthPackageQuota", req, cb)
  }

  /**
   * 本接口（CreateSnapshotPolicies）用于创建快照策略。
   */
  async CreateSnapshotPolicies(
    req: CreateSnapshotPoliciesRequest,
    cb?: (error: string, rep: CreateSnapshotPoliciesResponse) => void
  ): Promise<CreateSnapshotPoliciesResponse> {
    return this.request("CreateSnapshotPolicies", req, cb)
  }

  /**
   * 本接口（ResetAttachCcnInstances）用于跨账号关联实例申请过期时，重新申请关联操作。
   */
  async ResetAttachCcnInstances(
    req: ResetAttachCcnInstancesRequest,
    cb?: (error: string, rep: ResetAttachCcnInstancesResponse) => void
  ): Promise<ResetAttachCcnInstancesResponse> {
    return this.request("ResetAttachCcnInstances", req, cb)
  }

  /**
   * 本接口（ModifyVpcEndPointServiceAttribute）用于修改终端节点服务属性。
   */
  async ModifyVpcEndPointServiceAttribute(
    req: ModifyVpcEndPointServiceAttributeRequest,
    cb?: (error: string, rep: ModifyVpcEndPointServiceAttributeResponse) => void
  ): Promise<ModifyVpcEndPointServiceAttributeResponse> {
    return this.request("ModifyVpcEndPointServiceAttribute", req, cb)
  }

  /**
   * 接口用于查询带宽包详细信息，包括带宽包唯一标识ID，类型，计费模式，名称，资源信息等
   */
  async DescribeBandwidthPackages(
    req: DescribeBandwidthPackagesRequest,
    cb?: (error: string, rep: DescribeBandwidthPackagesResponse) => void
  ): Promise<DescribeBandwidthPackagesResponse> {
    return this.request("DescribeBandwidthPackages", req, cb)
  }

  /**
   * 本接口（DescribeRouteTableAssociatedInstances）用于查询指定的云联网关联的实例所绑定的路由表信息。
   */
  async DescribeRouteTableAssociatedInstances(
    req: DescribeRouteTableAssociatedInstancesRequest,
    cb?: (error: string, rep: DescribeRouteTableAssociatedInstancesResponse) => void
  ): Promise<DescribeRouteTableAssociatedInstancesResponse> {
    return this.request("DescribeRouteTableAssociatedInstances", req, cb)
  }

  /**
   * 本接口（CreateServiceTemplateGroup）用于创建协议端口模板集合。
   */
  async CreateServiceTemplateGroup(
    req: CreateServiceTemplateGroupRequest,
    cb?: (error: string, rep: CreateServiceTemplateGroupResponse) => void
  ): Promise<CreateServiceTemplateGroupResponse> {
    return this.request("CreateServiceTemplateGroup", req, cb)
  }

  /**
     * 本接口（ReleaseIp6AddressesBandwidth）用于为传统弹性公网 IPv6 实例关闭 IPv6 公网带宽。

- 传统弹性公网 IPv6 实例关闭公网带宽后，仍具备 IPv6 内网通信能力。
- 如需再次开通 IPv6 公网带宽，请使用 AllocateIp6AddressesBandwidth 接口进行开通。
     */
  async ReleaseIp6AddressesBandwidth(
    req: ReleaseIp6AddressesBandwidthRequest,
    cb?: (error: string, rep: ReleaseIp6AddressesBandwidthResponse) => void
  ): Promise<ReleaseIp6AddressesBandwidthResponse> {
    return this.request("ReleaseIp6AddressesBandwidth", req, cb)
  }

  /**
   * 本接口（ModifyCcnAttribute）用于修改云联网（CCN）的相关属性。
   */
  async ModifyCcnAttribute(
    req: ModifyCcnAttributeRequest,
    cb?: (error: string, rep: ModifyCcnAttributeResponse) => void
  ): Promise<ModifyCcnAttributeResponse> {
    return this.request("ModifyCcnAttribute", req, cb)
  }

  /**
   * 本接口（DescribePriceCreateDirectConnectGateway）用于创建专线网关询价。
   */
  async InquirePriceCreateDirectConnectGateway(
    req?: InquirePriceCreateDirectConnectGatewayRequest,
    cb?: (error: string, rep: InquirePriceCreateDirectConnectGatewayResponse) => void
  ): Promise<InquirePriceCreateDirectConnectGatewayResponse> {
    return this.request("InquirePriceCreateDirectConnectGateway", req, cb)
  }

  /**
   * 本接口（DescribeAddressTemplateGroups）用于查询IP地址模板集合。
   */
  async DescribeAddressTemplateGroups(
    req: DescribeAddressTemplateGroupsRequest,
    cb?: (error: string, rep: DescribeAddressTemplateGroupsResponse) => void
  ): Promise<DescribeAddressTemplateGroupsResponse> {
    return this.request("DescribeAddressTemplateGroups", req, cb)
  }

  /**
     * 本接口(DetachClassicLinkVpc)用于删除私有网络和基础网络设备互通。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async DetachClassicLinkVpc(
    req: DetachClassicLinkVpcRequest,
    cb?: (error: string, rep: DetachClassicLinkVpcResponse) => void
  ): Promise<DetachClassicLinkVpcResponse> {
    return this.request("DetachClassicLinkVpc", req, cb)
  }

  /**
     * 本接口（CreateSecurityGroupPolicies）用于创建安全组规则（SecurityGroupPolicy）。

在 SecurityGroupPolicySet 参数中：
<ul>
<li>Version 安全组规则版本号，用户每次更新安全规则版本会自动加1，防止您更新的路由规则已过期，不填不考虑冲突。</li>
<li>在创建出站和入站规则（Egress 和 Ingress）时：<ul>
<li>Protocol 字段支持输入TCP, UDP, ICMP, ICMPV6, GRE, ALL。</li>
<li>CidrBlock 字段允许输入符合cidr格式标准的任意字符串。在基础网络中，如果 CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
<li>Ipv6CidrBlock 字段允许输入符合IPv6 cidr格式标准的任意字符串。在基础网络中，如果Ipv6CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IPv6，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
<li>SecurityGroupId 字段允许输入与待修改的安全组位于相同项目中的安全组 ID，包括这个安全组 ID 本身，代表安全组下所有云服务器的内网 IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个 ID 所关联的云服务器变化而变化，不需要重新修改。</li>
<li>Port 字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当 Protocol 字段是 TCP 或 UDP 时，Port 字段才被接受，即 Protocol 字段不是 TCP 或 UDP 时，Protocol 和 Port 是排他关系，不允许同时输入，否则会接口报错。</li>
<li>Action 字段只允许输入 ACCEPT 或 DROP。</li>
<li>CidrBlock, Ipv6CidrBlock, SecurityGroupId, AddressTemplate 四者是排他关系，不允许同时输入，Protocol + Port 和 ServiceTemplate 二者是排他关系，不允许同时输入。IPv6CidrBlock和ICMP是排他关系，如需使用，请输入ICMPV6。</li>
<li>一次请求中只能创建单个方向的规则, 如果需要指定索引（PolicyIndex）参数, 多条规则的索引必须一致。如想在规则最前面插入一条，则填0即可，如果想在最后追加，该字段可不填。</li>
</ul></li></ul>
     */
  async CreateSecurityGroupPolicies(
    req: CreateSecurityGroupPoliciesRequest,
    cb?: (error: string, rep: CreateSecurityGroupPoliciesResponse) => void
  ): Promise<CreateSecurityGroupPoliciesResponse> {
    return this.request("CreateSecurityGroupPolicies", req, cb)
  }

  /**
   * 本接口（ResetNatGatewayConnection）用来NAT网关并发连接上限。
   */
  async ResetNatGatewayConnection(
    req: ResetNatGatewayConnectionRequest,
    cb?: (error: string, rep: ResetNatGatewayConnectionResponse) => void
  ): Promise<ResetNatGatewayConnectionResponse> {
    return this.request("ResetNatGatewayConnection", req, cb)
  }

  /**
   * 本接口（AttachSnapshotInstances）用于快照策略关联实例。
   */
  async AttachSnapshotInstances(
    req: AttachSnapshotInstancesRequest,
    cb?: (error: string, rep: AttachSnapshotInstancesResponse) => void
  ): Promise<AttachSnapshotInstancesResponse> {
    return this.request("AttachSnapshotInstances", req, cb)
  }

  /**
   * 本接口(DescribeVpcResourceDashboard)用于查看VPC资源信息。
   */
  async DescribeVpcResourceDashboard(
    req: DescribeVpcResourceDashboardRequest,
    cb?: (error: string, rep: DescribeVpcResourceDashboardResponse) => void
  ): Promise<DescribeVpcResourceDashboardResponse> {
    return this.request("DescribeVpcResourceDashboard", req, cb)
  }

  /**
     * 本接口（ReplaceSecurityGroupPolicy）用于替换单条安全组规则（SecurityGroupPolicy）。
单个请求中只能替换单个方向的一条规则, 必须要指定索引（PolicyIndex）。
     */
  async ReplaceSecurityGroupPolicy(
    req: ReplaceSecurityGroupPolicyRequest,
    cb?: (error: string, rep: ReplaceSecurityGroupPolicyResponse) => void
  ): Promise<ReplaceSecurityGroupPolicyResponse> {
    return this.request("ReplaceSecurityGroupPolicy", req, cb)
  }

  /**
   * 本接口 (AdjustPublicAddress) 用于更换IP地址，支持更换CVM实例的普通公网IP和包月带宽的EIP。
   */
  async AdjustPublicAddress(
    req: AdjustPublicAddressRequest,
    cb?: (error: string, rep: AdjustPublicAddressResponse) => void
  ): Promise<AdjustPublicAddressResponse> {
    return this.request("AdjustPublicAddress", req, cb)
  }

  /**
   * 本接口（CreateNetworkAcl）用于创建新的<a href="https://cloud.tencent.com/document/product/215/20088">网络ACL</a>。
   * 新建的网络ACL的入站和出站规则默认都是全部拒绝，在创建后通常您需要再调用ModifyNetworkAclEntries将网络ACL的规则设置为需要的规则。
   */
  async CreateNetworkAcl(
    req: CreateNetworkAclRequest,
    cb?: (error: string, rep: CreateNetworkAclResponse) => void
  ): Promise<CreateNetworkAclResponse> {
    return this.request("CreateNetworkAcl", req, cb)
  }

  /**
   * 本接口（UpdateTrafficMirrorAllFilter）用于更新流量镜像实例的过滤规则或者采集对象。
   */
  async UpdateTrafficMirrorAllFilter(
    req: UpdateTrafficMirrorAllFilterRequest,
    cb?: (error: string, rep: UpdateTrafficMirrorAllFilterResponse) => void
  ): Promise<UpdateTrafficMirrorAllFilterResponse> {
    return this.request("UpdateTrafficMirrorAllFilter", req, cb)
  }

  /**
   * 本接口 (CreateBandwidthPackage) 支持创建[设备带宽包](https://cloud.tencent.com/document/product/684/15245#bwptype)和[IP带宽包](https://cloud.tencent.com/document/product/684/15245#bwptype)。
   */
  async CreateBandwidthPackage(
    req: CreateBandwidthPackageRequest,
    cb?: (error: string, rep: CreateBandwidthPackageResponse) => void
  ): Promise<CreateBandwidthPackageResponse> {
    return this.request("CreateBandwidthPackage", req, cb)
  }

  /**
   * 本接口（DeleteFlowLog）用于删除流日志。
   */
  async DeleteFlowLog(
    req: DeleteFlowLogRequest,
    cb?: (error: string, rep: DeleteFlowLogResponse) => void
  ): Promise<DeleteFlowLogResponse> {
    return this.request("DeleteFlowLog", req, cb)
  }

  /**
   * 本接口（GenerateVpnConnectionDefaultHealthCheckIp）用于获取一对VPN通道健康检查地址。
   */
  async GenerateVpnConnectionDefaultHealthCheckIp(
    req: GenerateVpnConnectionDefaultHealthCheckIpRequest,
    cb?: (error: string, rep: GenerateVpnConnectionDefaultHealthCheckIpResponse) => void
  ): Promise<GenerateVpnConnectionDefaultHealthCheckIpResponse> {
    return this.request("GenerateVpnConnectionDefaultHealthCheckIp", req, cb)
  }

  /**
   * 删除SSL-VPN-SERVER 实例
   */
  async DeleteVpnGatewaySslServer(
    req: DeleteVpnGatewaySslServerRequest,
    cb?: (error: string, rep: DeleteVpnGatewaySslServerResponse) => void
  ): Promise<DeleteVpnGatewaySslServerResponse> {
    return this.request("DeleteVpnGatewaySslServer", req, cb)
  }

  /**
   * 本接口（DescribeNetworkInterfaceLimit）根据CVM实例ID或弹性网卡ID查询弹性网卡配额，返回该CVM实例或弹性网卡能绑定的弹性网卡配额，以及弹性网卡可以分配的IP配额。
   */
  async DescribeNetworkInterfaceLimit(
    req: DescribeNetworkInterfaceLimitRequest,
    cb?: (error: string, rep: DescribeNetworkInterfaceLimitResponse) => void
  ): Promise<DescribeNetworkInterfaceLimitResponse> {
    return this.request("DescribeNetworkInterfaceLimit", req, cb)
  }

  /**
   * 本接口（EnableSnapshotPolicies）用于启用快照策略。
   */
  async EnableSnapshotPolicies(
    req: EnableSnapshotPoliciesRequest,
    cb?: (error: string, rep: EnableSnapshotPoliciesResponse) => void
  ): Promise<EnableSnapshotPoliciesResponse> {
    return this.request("EnableSnapshotPolicies", req, cb)
  }

  /**
     * 本接口（DeleteVpnConnection）用于删除VPN通道。
>?本接口为异步接口
>
     */
  async DeleteVpnConnection(
    req: DeleteVpnConnectionRequest,
    cb?: (error: string, rep: DeleteVpnConnectionResponse) => void
  ): Promise<DeleteVpnConnectionResponse> {
    return this.request("DeleteVpnConnection", req, cb)
  }

  /**
   * 本接口（DescribeCustomerGatewayVendors）用于查询可支持的对端网关厂商信息。
   */
  async DescribeCustomerGatewayVendors(
    req?: DescribeCustomerGatewayVendorsRequest,
    cb?: (error: string, rep: DescribeCustomerGatewayVendorsResponse) => void
  ): Promise<DescribeCustomerGatewayVendorsResponse> {
    return this.request("DescribeCustomerGatewayVendors", req, cb)
  }

  /**
   * 删除虚拟连接
   */
  async DeleteCdcNetPlanes(
    req?: DeleteCdcNetPlanesRequest,
    cb?: (error: string, rep: DeleteCdcNetPlanesResponse) => void
  ): Promise<DeleteCdcNetPlanesResponse> {
    return this.request("DeleteCdcNetPlanes", req, cb)
  }

  /**
   * 本接口（DeleteLocalGateway）用于删除CDC的本地网关。
   */
  async DeleteLocalGateway(
    req: DeleteLocalGatewayRequest,
    cb?: (error: string, rep: DeleteLocalGatewayResponse) => void
  ): Promise<DeleteLocalGatewayResponse> {
    return this.request("DeleteLocalGateway", req, cb)
  }

  /**
     * 本接口（ModifyServiceTemplateAttribute）用于修改协议端口模板。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async ModifyServiceTemplateAttribute(
    req: ModifyServiceTemplateAttributeRequest,
    cb?: (error: string, rep: ModifyServiceTemplateAttributeResponse) => void
  ): Promise<ModifyServiceTemplateAttributeResponse> {
    return this.request("ModifyServiceTemplateAttribute", req, cb)
  }

  /**
   * 本接口（DisassociateNetworkAclSubnets）用于网络ACL解关联VPC下的子网。
   */
  async DisassociateNetworkAclSubnets(
    req: DisassociateNetworkAclSubnetsRequest,
    cb?: (error: string, rep: DisassociateNetworkAclSubnetsResponse) => void
  ): Promise<DisassociateNetworkAclSubnetsResponse> {
    return this.request("DisassociateNetworkAclSubnets", req, cb)
  }

  /**
   * 本接口（ModifyPrivateNatGatewayDestinationIpPortTranslationNatRule）用于修改私网NAT网关目的端口转换规则
   */
  async ModifyPrivateNatGatewayDestinationIpPortTranslationNatRule(
    req: ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleRequest,
    cb?: (
      error: string,
      rep: ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleResponse
    ) => void
  ): Promise<ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleResponse> {
    return this.request("ModifyPrivateNatGatewayDestinationIpPortTranslationNatRule", req, cb)
  }

  /**
   * 本接口（DescribeVpnGatewayRoutes）用于查询VPN网关路由。
   */
  async DescribeVpnGatewayRoutes(
    req: DescribeVpnGatewayRoutesRequest,
    cb?: (error: string, rep: DescribeVpnGatewayRoutesResponse) => void
  ): Promise<DescribeVpnGatewayRoutesResponse> {
    return this.request("DescribeVpnGatewayRoutes", req, cb)
  }

  /**
     * 本接口（ReplaceSecurityGroupPolicies）用于批量修改安全组规则（SecurityGroupPolicy）。
单个请求中只能替换单个方向的一条或多条规则, 必须要指定索引（PolicyIndex）。
     */
  async ReplaceSecurityGroupPolicies(
    req: ReplaceSecurityGroupPoliciesRequest,
    cb?: (error: string, rep: ReplaceSecurityGroupPoliciesResponse) => void
  ): Promise<ReplaceSecurityGroupPoliciesResponse> {
    return this.request("ReplaceSecurityGroupPolicies", req, cb)
  }

  /**
   * 本接口（DescribeTrafficMirrors）用于查询流量镜像实例信息。
   */
  async DescribeTrafficMirrors(
    req: DescribeTrafficMirrorsRequest,
    cb?: (error: string, rep: DescribeTrafficMirrorsResponse) => void
  ): Promise<DescribeTrafficMirrorsResponse> {
    return this.request("DescribeTrafficMirrors", req, cb)
  }

  /**
   * 本接口（CreateDirectConnectGatewayCcnRoutes）用于创建专线网关的云联网路由（IDC网段）
   */
  async CreateDirectConnectGatewayCcnRoutes(
    req: CreateDirectConnectGatewayCcnRoutesRequest,
    cb?: (error: string, rep: CreateDirectConnectGatewayCcnRoutesResponse) => void
  ): Promise<CreateDirectConnectGatewayCcnRoutesResponse> {
    return this.request("CreateDirectConnectGatewayCcnRoutes", req, cb)
  }

  /**
     * 本接口（AssignPrivateIpAddresses）用于弹性网卡申请内网 IP。
* 一个弹性网卡支持绑定的IP地址是有限制的，更多资源限制信息详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
* 可以指定内网IP地址申请，内网IP地址类型不能为主IP，主IP已存在，不能修改，内网IP必须要在弹性网卡所在子网内，而且不能被占用。
* 在弹性网卡上申请一个到多个辅助内网IP，接口会在弹性网卡所在子网网段内返回指定数量的辅助内网IP。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async AssignPrivateIpAddresses(
    req: AssignPrivateIpAddressesRequest,
    cb?: (error: string, rep: AssignPrivateIpAddressesResponse) => void
  ): Promise<AssignPrivateIpAddressesResponse> {
    return this.request("AssignPrivateIpAddresses", req, cb)
  }

  /**
   * 本接口（DescribeCrossBorderFlowMonitor）用于查询跨境带宽监控数据，该接口目前只提供给服务商联通使用。
   */
  async DescribeCrossBorderFlowMonitor(
    req: DescribeCrossBorderFlowMonitorRequest,
    cb?: (error: string, rep: DescribeCrossBorderFlowMonitorResponse) => void
  ): Promise<DescribeCrossBorderFlowMonitorResponse> {
    return this.request("DescribeCrossBorderFlowMonitor", req, cb)
  }

  /**
   * 本接口（CreateSubnets）用于批量创建子网。
   * 创建子网前必须创建好 VPC。
   * 子网创建成功后，子网网段不能修改。子网网段必须在VPC网段内，可以和VPC网段相同（VPC有且只有一个子网时），建议子网网段在VPC网段内，预留网段给其他子网使用。
   * 您可以创建的最小网段子网掩码为28（有16个IP地址），最大网段子网掩码为16（65,536个IP地址）。
   * 同一个VPC内，多个子网的网段不能重叠。
   * 子网创建后会自动关联到默认路由表。
   * 创建子网同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
   */
  async CreateSubnets(
    req: CreateSubnetsRequest,
    cb?: (error: string, rep: CreateSubnetsResponse) => void
  ): Promise<CreateSubnetsResponse> {
    return this.request("CreateSubnets", req, cb)
  }

  /**
   * 本接口（CreateVpcPeeringConnection）用于创建私有网络对等连接。
   */
  async CreateVpcPeeringConnection(
    req: CreateVpcPeeringConnectionRequest,
    cb?: (error: string, rep: CreateVpcPeeringConnectionResponse) => void
  ): Promise<CreateVpcPeeringConnectionResponse> {
    return this.request("CreateVpcPeeringConnection", req, cb)
  }

  /**
   * 本接口（DeleteDirectConnectGatewayCcnRoutes）用于删除专线网关的云联网路由（IDC网段）
   */
  async DeleteDirectConnectGatewayCcnRoutes(
    req: DeleteDirectConnectGatewayCcnRoutesRequest,
    cb?: (error: string, rep: DeleteDirectConnectGatewayCcnRoutesResponse) => void
  ): Promise<DeleteDirectConnectGatewayCcnRoutesResponse> {
    return this.request("DeleteDirectConnectGatewayCcnRoutes", req, cb)
  }

  /**
     * 本接口（RejectAttachCcnInstances）用于跨账号关联实例时，云联网所有者拒绝关联操作。

     */
  async RejectAttachCcnInstances(
    req: RejectAttachCcnInstancesRequest,
    cb?: (error: string, rep: RejectAttachCcnInstancesResponse) => void
  ): Promise<RejectAttachCcnInstancesResponse> {
    return this.request("RejectAttachCcnInstances", req, cb)
  }

  /**
   * 本接口（DescribeVpnConnections）用于查询VPN通道列表。
   */
  async DescribeVpnConnections(
    req: DescribeVpnConnectionsRequest,
    cb?: (error: string, rep: DescribeVpnConnectionsResponse) => void
  ): Promise<DescribeVpnConnectionsResponse> {
    return this.request("DescribeVpnConnections", req, cb)
  }

  /**
     * 本接口（DeleteDhcpIp）用于删除DhcpIp。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async DeleteDhcpIp(
    req: DeleteDhcpIpRequest,
    cb?: (error: string, rep: DeleteDhcpIpResponse) => void
  ): Promise<DeleteDhcpIpResponse> {
    return this.request("DeleteDhcpIp", req, cb)
  }

  /**
   * 本接口（DescribePrivateNatGatewayDestinationIpPortTranslationNatRules）用于查询私网NAT网关目的端口转换规则
   */
  async DescribePrivateNatGatewayDestinationIpPortTranslationNatRules(
    req: DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesRequest,
    cb?: (
      error: string,
      rep: DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesResponse
    ) => void
  ): Promise<DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesResponse> {
    return this.request("DescribePrivateNatGatewayDestinationIpPortTranslationNatRules", req, cb)
  }

  /**
   * 查询高优路由表条目信息。
   */
  async DescribeHighPriorityRoutes(
    req: DescribeHighPriorityRoutesRequest,
    cb?: (error: string, rep: DescribeHighPriorityRoutesResponse) => void
  ): Promise<DescribeHighPriorityRoutesResponse> {
    return this.request("DescribeHighPriorityRoutes", req, cb)
  }

  /**
   * 本接口 (DisassociateAddress) 用于解绑[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
   * 支持CVM实例，弹性网卡上的EIP解绑
   * 不支持NAT上的EIP解绑。NAT上的EIP解绑请参考[DisassociateNatGatewayAddress](https://cloud.tencent.com/document/api/215/36716)
   * 只有状态为 BIND 和 BIND_ENI 的 EIP 才能进行解绑定操作。
   */
  async DisassociateAddress(
    req: DisassociateAddressRequest,
    cb?: (error: string, rep: DisassociateAddressResponse) => void
  ): Promise<DisassociateAddressResponse> {
    return this.request("DisassociateAddress", req, cb)
  }

  /**
   * 查询 IDC通道信息
   */
  async DescribeCdcLDCXList(
    req?: DescribeCdcLDCXListRequest,
    cb?: (error: string, rep: DescribeCdcLDCXListResponse) => void
  ): Promise<DescribeCdcLDCXListResponse> {
    return this.request("DescribeCdcLDCXList", req, cb)
  }

  /**
   * 该接口用于修改IPV6转换规则，当前仅支持修改转换规则名称，IPV4地址和IPV4端口号
   */
  async ModifyIp6Rule(
    req: ModifyIp6RuleRequest,
    cb?: (error: string, rep: ModifyIp6RuleResponse) => void
  ): Promise<ModifyIp6RuleResponse> {
    return this.request("ModifyIp6Rule", req, cb)
  }

  /**
     * 本接口（DescribeVpcIpv6Addresses）用于查询 `VPC` `IPv6` 信息。
只能查询已使用的`IPv6`信息，当查询未使用的IP时，本接口不会报错，但不会出现在返回结果里。
     */
  async DescribeVpcIpv6Addresses(
    req: DescribeVpcIpv6AddressesRequest,
    cb?: (error: string, rep: DescribeVpcIpv6AddressesResponse) => void
  ): Promise<DescribeVpcIpv6AddressesResponse> {
    return this.request("DescribeVpcIpv6Addresses", req, cb)
  }

  /**
     * 本接口（UnlockCcnBandwidths）用户解锁云联网限速实例。
该接口一般用来封禁地域间限速的云联网实例下的限速实例, 目前联通内部运营系统通过云API调用, 如果是出口限速, 一般使用更粗的云联网实例粒度封禁（SecurityUnlockCcns）。
如有需要, 可以封禁任意限速实例, 可接入到内部运营系统。
     */
  async UnlockCcnBandwidths(
    req: UnlockCcnBandwidthsRequest,
    cb?: (error: string, rep: UnlockCcnBandwidthsResponse) => void
  ): Promise<UnlockCcnBandwidthsResponse> {
    return this.request("UnlockCcnBandwidths", req, cb)
  }

  /**
   * 本接口（DeleteCustomerGateway）用于删除对端网关。
   */
  async DeleteCustomerGateway(
    req: DeleteCustomerGatewayRequest,
    cb?: (error: string, rep: DeleteCustomerGatewayResponse) => void
  ): Promise<DeleteCustomerGatewayResponse> {
    return this.request("DeleteCustomerGateway", req, cb)
  }

  /**
   * 本接口（DescribeLocalGateway）用于查询CDC的本地网关。
   */
  async DescribeLocalGateway(
    req: DescribeLocalGatewayRequest,
    cb?: (error: string, rep: DescribeLocalGatewayResponse) => void
  ): Promise<DescribeLocalGatewayResponse> {
    return this.request("DescribeLocalGateway", req, cb)
  }

  /**
   * 本接口（DescribeNetDetects）用于查询网络探测列表。
   */
  async DescribeNetDetects(
    req: DescribeNetDetectsRequest,
    cb?: (error: string, rep: DescribeNetDetectsResponse) => void
  ): Promise<DescribeNetDetectsResponse> {
    return this.request("DescribeNetDetects", req, cb)
  }

  /**
   * 本接口 (DescribeBandwidthPackageBillUsage) 用于查询后付费共享带宽包当前的计费用量.
   */
  async DescribeBandwidthPackageBillUsage(
    req: DescribeBandwidthPackageBillUsageRequest,
    cb?: (error: string, rep: DescribeBandwidthPackageBillUsageResponse) => void
  ): Promise<DescribeBandwidthPackageBillUsageResponse> {
    return this.request("DescribeBandwidthPackageBillUsage", req, cb)
  }

  /**
   * 该接口用于修改云联网路由表名称和备注。
   */
  async ModifyCcnRouteTables(
    req: ModifyCcnRouteTablesRequest,
    cb?: (error: string, rep: ModifyCcnRouteTablesResponse) => void
  ): Promise<ModifyCcnRouteTablesResponse> {
    return this.request("ModifyCcnRouteTables", req, cb)
  }

  /**
   * 调整EIP续费标识
   */
  async ModifyAddressesRenewFlag(
    req: ModifyAddressesRenewFlagRequest,
    cb?: (error: string, rep: ModifyAddressesRenewFlagResponse) => void
  ): Promise<ModifyAddressesRenewFlagResponse> {
    return this.request("ModifyAddressesRenewFlag", req, cb)
  }

  /**
   * 修改高优路由表 HASH 策略。
   */
  async ModifyHighPriorityRouteECMPAlgorithm(
    req: ModifyHighPriorityRouteECMPAlgorithmRequest,
    cb?: (error: string, rep: ModifyHighPriorityRouteECMPAlgorithmResponse) => void
  ): Promise<ModifyHighPriorityRouteECMPAlgorithmResponse> {
    return this.request("ModifyHighPriorityRouteECMPAlgorithm", req, cb)
  }

  /**
   * 本接口（DeleteNatGatewaySourceIpTranslationNatRule）用于删除NAT网关端口SNAT转发规则。
   */
  async DeleteNatGatewaySourceIpTranslationNatRule(
    req: DeleteNatGatewaySourceIpTranslationNatRuleRequest,
    cb?: (error: string, rep: DeleteNatGatewaySourceIpTranslationNatRuleResponse) => void
  ): Promise<DeleteNatGatewaySourceIpTranslationNatRuleResponse> {
    return this.request("DeleteNatGatewaySourceIpTranslationNatRule", req, cb)
  }

  /**
     * 本接口（DisassociateIPv6Address）用于解绑弹性公网 IPv6（简称EIPv6）实例。

- 支持对 CVM、弹性网卡绑定的 EIPv6 实例进行解绑操作。
- 只有状态为 BIND 和 BIND_ENI 的 EIPv6 实例才能进行解绑操作。
     */
  async DisassociateIPv6Address(
    req: DisassociateIPv6AddressRequest,
    cb?: (error: string, rep: DisassociateIPv6AddressResponse) => void
  ): Promise<DisassociateIPv6AddressResponse> {
    return this.request("DisassociateIPv6Address", req, cb)
  }

  /**
   * 本接口（ModifyNatGatewaySourceIpTranslationNatRule）用于修改NAT网关SNAT转发规则。
   */
  async ModifyNatGatewaySourceIpTranslationNatRule(
    req: ModifyNatGatewaySourceIpTranslationNatRuleRequest,
    cb?: (error: string, rep: ModifyNatGatewaySourceIpTranslationNatRuleResponse) => void
  ): Promise<ModifyNatGatewaySourceIpTranslationNatRuleResponse> {
    return this.request("ModifyNatGatewaySourceIpTranslationNatRule", req, cb)
  }

  /**
     * 本接口（UnassignIpv6SubnetCidrBlock）用于释放IPv6子网段。<br />
子网段如果还有IP占用且未回收，则子网段无法释放。
     */
  async UnassignIpv6SubnetCidrBlock(
    req: UnassignIpv6SubnetCidrBlockRequest,
    cb?: (error: string, rep: UnassignIpv6SubnetCidrBlockResponse) => void
  ): Promise<UnassignIpv6SubnetCidrBlockResponse> {
    return this.request("UnassignIpv6SubnetCidrBlock", req, cb)
  }

  /**
   * 本接口（DisableRoutes）用于禁用已启用的子网路由
   */
  async DisableRoutes(
    req: DisableRoutesRequest,
    cb?: (error: string, rep: DisableRoutesResponse) => void
  ): Promise<DisableRoutesResponse> {
    return this.request("DisableRoutes", req, cb)
  }

  /**
   * 本接口（EnableVpnGatewaySslClientCert）用于启用SSL-VPN-CLIENT 证书。
   */
  async EnableVpnGatewaySslClientCert(
    req: EnableVpnGatewaySslClientCertRequest,
    cb?: (error: string, rep: EnableVpnGatewaySslClientCertResponse) => void
  ): Promise<EnableVpnGatewaySslClientCertResponse> {
    return this.request("EnableVpnGatewaySslClientCert", req, cb)
  }

  /**
   * 本接口（CreateAssistantCidr）用于批量创建辅助CIDR。
   */
  async CreateAssistantCidr(
    req: CreateAssistantCidrRequest,
    cb?: (error: string, rep: CreateAssistantCidrResponse) => void
  ): Promise<CreateAssistantCidrResponse> {
    return this.request("CreateAssistantCidr", req, cb)
  }

  /**
   * 本接口（DescribeVpnGatewaySslClients）用于查询SSL-VPN-CLIENT 列表。
   */
  async DescribeVpnGatewaySslClients(
    req: DescribeVpnGatewaySslClientsRequest,
    cb?: (error: string, rep: DescribeVpnGatewaySslClientsResponse) => void
  ): Promise<DescribeVpnGatewaySslClientsResponse> {
    return this.request("DescribeVpnGatewaySslClients", req, cb)
  }

  /**
     * 本接口(CreateNatGateway)用于创建NAT网关。
在对新建的NAT网关做其他操作前，需先确认此网关已被创建完成（DescribeNatGateway接口返回的实例State字段为AVAILABLE）。
     */
  async CreateNatGateway(
    req: CreateNatGatewayRequest,
    cb?: (error: string, rep: CreateNatGatewayResponse) => void
  ): Promise<CreateNatGatewayResponse> {
    return this.request("CreateNatGateway", req, cb)
  }

  /**
   * 本接口（DeleteNetDetect）用于删除网络探测实例。
   */
  async DeleteNetDetect(
    req: DeleteNetDetectRequest,
    cb?: (error: string, rep: DeleteNetDetectResponse) => void
  ): Promise<DeleteNetDetectResponse> {
    return this.request("DeleteNetDetect", req, cb)
  }

  /**
   * 本接口（NotifyRoutes）用于路由表列表页操作增加“发布到云联网”，发布路由到云联网。
   */
  async NotifyRoutes(
    req: NotifyRoutesRequest,
    cb?: (error: string, rep: NotifyRoutesResponse) => void
  ): Promise<NotifyRoutesResponse> {
    return this.request("NotifyRoutes", req, cb)
  }

  /**
   * 本接口（DeleteVpcEndPoint）用于删除终端节点。
   */
  async DeleteVpcEndPoint(
    req: DeleteVpcEndPointRequest,
    cb?: (error: string, rep: DeleteVpcEndPointResponse) => void
  ): Promise<DeleteVpcEndPointResponse> {
    return this.request("DeleteVpcEndPoint", req, cb)
  }

  /**
   * 删除高优路由表的路由条目。
   */
  async DeleteHighPriorityRoutes(
    req: DeleteHighPriorityRoutesRequest,
    cb?: (error: string, rep: DeleteHighPriorityRoutesResponse) => void
  ): Promise<DeleteHighPriorityRoutesResponse> {
    return this.request("DeleteHighPriorityRoutes", req, cb)
  }

  /**
   * 本接口（CreateServiceTemplate）用于创建协议端口模板。
   */
  async CreateServiceTemplate(
    req: CreateServiceTemplateRequest,
    cb?: (error: string, rep: CreateServiceTemplateResponse) => void
  ): Promise<CreateServiceTemplateResponse> {
    return this.request("CreateServiceTemplate", req, cb)
  }

  /**
   * 本接口（InquiryPriceAllocateAddresses）用于新购弹性公网IP询价。
   */
  async InquiryPriceAllocateAddresses(
    req: InquiryPriceAllocateAddressesRequest,
    cb?: (error: string, rep: InquiryPriceAllocateAddressesResponse) => void
  ): Promise<InquiryPriceAllocateAddressesResponse> {
    return this.request("InquiryPriceAllocateAddresses", req, cb)
  }

  /**
   * 本接口（ModifyDirectConnectGatewayAttribute）用于修改专线网关属性
   */
  async ModifyDirectConnectGatewayAttribute(
    req: ModifyDirectConnectGatewayAttributeRequest,
    cb?: (error: string, rep: ModifyDirectConnectGatewayAttributeResponse) => void
  ): Promise<ModifyDirectConnectGatewayAttributeResponse> {
    return this.request("ModifyDirectConnectGatewayAttribute", req, cb)
  }

  /**
   * 本接口（ModifySubnetAttribute）用于修改子网属性。
   */
  async ModifySubnetAttribute(
    req: ModifySubnetAttributeRequest,
    cb?: (error: string, rep: ModifySubnetAttributeResponse) => void
  ): Promise<ModifySubnetAttributeResponse> {
    return this.request("ModifySubnetAttribute", req, cb)
  }

  /**
   * 本接口（DescribeSgSnapshotFileContent）用于查询安全组快照文件内容。
   */
  async DescribeSgSnapshotFileContent(
    req: DescribeSgSnapshotFileContentRequest,
    cb?: (error: string, rep: DescribeSgSnapshotFileContentResponse) => void
  ): Promise<DescribeSgSnapshotFileContentResponse> {
    return this.request("DescribeSgSnapshotFileContent", req, cb)
  }

  /**
   * 本接口（DescribeNetworkInterfaces）用于查询弹性网卡列表。
   */
  async DescribeNetworkInterfaces(
    req: DescribeNetworkInterfacesRequest,
    cb?: (error: string, rep: DescribeNetworkInterfacesResponse) => void
  ): Promise<DescribeNetworkInterfacesResponse> {
    return this.request("DescribeNetworkInterfaces", req, cb)
  }

  /**
   * 本接口（DisableCcnRoutes）用于禁用已经启用的云联网（CCN）路由。
   */
  async DisableCcnRoutes(
    req: DisableCcnRoutesRequest,
    cb?: (error: string, rep: DisableCcnRoutesResponse) => void
  ): Promise<DisableCcnRoutesResponse> {
    return this.request("DisableCcnRoutes", req, cb)
  }

  /**
   * 本接口(DescribeCcnRouteTableBroadcastPolicys)用于查询指定云联网路由表的路由传播策略。
   */
  async DescribeCcnRouteTableBroadcastPolicys(
    req: DescribeCcnRouteTableBroadcastPolicysRequest,
    cb?: (error: string, rep: DescribeCcnRouteTableBroadcastPolicysResponse) => void
  ): Promise<DescribeCcnRouteTableBroadcastPolicysResponse> {
    return this.request("DescribeCcnRouteTableBroadcastPolicys", req, cb)
  }

  /**
   * 本接口（CreateAddressTemplateGroup）用于创建IP地址模板集合。
   */
  async CreateAddressTemplateGroup(
    req: CreateAddressTemplateGroupRequest,
    cb?: (error: string, rep: CreateAddressTemplateGroupResponse) => void
  ): Promise<CreateAddressTemplateGroupResponse> {
    return this.request("CreateAddressTemplateGroup", req, cb)
  }

  /**
   * 本接口（AssociateNetworkAclSubnets）用于网络ACL关联VPC下的子网。
   */
  async AssociateNetworkAclSubnets(
    req: AssociateNetworkAclSubnetsRequest,
    cb?: (error: string, rep: AssociateNetworkAclSubnetsResponse) => void
  ): Promise<AssociateNetworkAclSubnetsResponse> {
    return this.request("AssociateNetworkAclSubnets", req, cb)
  }

  /**
   * 本接口（DescribeVpnGateways）用于查询VPN网关列表。
   */
  async DescribeVpnGateways(
    req: DescribeVpnGatewaysRequest,
    cb?: (error: string, rep: DescribeVpnGatewaysResponse) => void
  ): Promise<DescribeVpnGatewaysResponse> {
    return this.request("DescribeVpnGateways", req, cb)
  }

  /**
   * 本接口（AssociateNetworkInterfaceSecurityGroups）用于弹性网卡绑定安全组（SecurityGroup）。
   */
  async AssociateNetworkInterfaceSecurityGroups(
    req: AssociateNetworkInterfaceSecurityGroupsRequest,
    cb?: (error: string, rep: AssociateNetworkInterfaceSecurityGroupsResponse) => void
  ): Promise<AssociateNetworkInterfaceSecurityGroupsResponse> {
    return this.request("AssociateNetworkInterfaceSecurityGroups", req, cb)
  }

  /**
   * 替换高优路由表和子网绑定关系。
   */
  async ReplaceHighPriorityRouteTableAssociation(
    req: ReplaceHighPriorityRouteTableAssociationRequest,
    cb?: (error: string, rep: ReplaceHighPriorityRouteTableAssociationResponse) => void
  ): Promise<ReplaceHighPriorityRouteTableAssociationResponse> {
    return this.request("ReplaceHighPriorityRouteTableAssociation", req, cb)
  }

  /**
     * 本接口（ReturnNormalAddresses）用于解绑并释放普通公网IP。
为完善公网IP的访问管理功能，此接口于2022年12月15日升级优化鉴权功能，升级后子用户调用此接口需向主账号申请CAM策略授权，否则可能调用失败。您可以提前为子账号配置操作授权，详情见[授权指南](https://cloud.tencent.com/document/product/598/34545)。
     */
  async ReturnNormalAddresses(
    req: ReturnNormalAddressesRequest,
    cb?: (error: string, rep: ReturnNormalAddressesResponse) => void
  ): Promise<ReturnNormalAddressesResponse> {
    return this.request("ReturnNormalAddresses", req, cb)
  }

  /**
   * 本接口（EnableFlowLogs）用于启动流日志。
   */
  async EnableFlowLogs(
    req: EnableFlowLogsRequest,
    cb?: (error: string, rep: EnableFlowLogsResponse) => void
  ): Promise<EnableFlowLogsResponse> {
    return this.request("EnableFlowLogs", req, cb)
  }

  /**
   * 创建 IDC 通道
   */
  async CreateCdcLDCXList(
    req?: CreateCdcLDCXListRequest,
    cb?: (error: string, rep: CreateCdcLDCXListResponse) => void
  ): Promise<CreateCdcLDCXListResponse> {
    return this.request("CreateCdcLDCXList", req, cb)
  }

  /**
   * 本接口（ModifyNatGatewayDestinationIpPortTranslationNatRule）用于修改NAT网关端口转发规则。
   */
  async ModifyNatGatewayDestinationIpPortTranslationNatRule(
    req: ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest,
    cb?: (error: string, rep: ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse) => void
  ): Promise<ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse> {
    return this.request("ModifyNatGatewayDestinationIpPortTranslationNatRule", req, cb)
  }

  /**
   * 禁用SSL-VPN-CLIENT 证书
   */
  async DisableVpnGatewaySslClientCert(
    req: DisableVpnGatewaySslClientCertRequest,
    cb?: (error: string, rep: DisableVpnGatewaySslClientCertResponse) => void
  ): Promise<DisableVpnGatewaySslClientCertResponse> {
    return this.request("DisableVpnGatewaySslClientCert", req, cb)
  }

  /**
   * 本接口（DescribeHaVips）用于查询高可用虚拟IP（HAVIP）列表。
   */
  async DescribeHaVips(
    req: DescribeHaVipsRequest,
    cb?: (error: string, rep: DescribeHaVipsResponse) => void
  ): Promise<DescribeHaVipsResponse> {
    return this.request("DescribeHaVips", req, cb)
  }

  /**
   * 本接口（CreateLocalGateway）用于创建用于CDC的本地网关。
   */
  async CreateLocalGateway(
    req: CreateLocalGatewayRequest,
    cb?: (error: string, rep: CreateLocalGatewayResponse) => void
  ): Promise<CreateLocalGatewayResponse> {
    return this.request("CreateLocalGateway", req, cb)
  }

  /**
   * 本接口（ResetVpnGatewayInternetMaxBandwidth）用于调整VPN网关带宽上限。VPN网关带宽目前仅支持部分带宽范围内升降配，如【5,100】Mbps和【200,1000】Mbps，在各自带宽范围内可提升配额，跨范围提升配额和降配暂不支持，如果是包年包月VPN网关需要在有效期内。
   */
  async ResetVpnGatewayInternetMaxBandwidth(
    req: ResetVpnGatewayInternetMaxBandwidthRequest,
    cb?: (error: string, rep: ResetVpnGatewayInternetMaxBandwidthResponse) => void
  ): Promise<ResetVpnGatewayInternetMaxBandwidthResponse> {
    return this.request("ResetVpnGatewayInternetMaxBandwidth", req, cb)
  }

  /**
   * 本接口（ModifyVpnConnectionAttribute）用于修改VPN通道。
   */
  async ModifyVpnConnectionAttribute(
    req: ModifyVpnConnectionAttributeRequest,
    cb?: (error: string, rep: ModifyVpnConnectionAttributeResponse) => void
  ): Promise<ModifyVpnConnectionAttributeResponse> {
    return this.request("ModifyVpnConnectionAttribute", req, cb)
  }

  /**
   * 本接口（DescribePrivateNatGatewayTranslationNatRules）用于查询私网NAT网关源端转换规则
   */
  async DescribePrivateNatGatewayTranslationNatRules(
    req: DescribePrivateNatGatewayTranslationNatRulesRequest,
    cb?: (error: string, rep: DescribePrivateNatGatewayTranslationNatRulesResponse) => void
  ): Promise<DescribePrivateNatGatewayTranslationNatRulesResponse> {
    return this.request("DescribePrivateNatGatewayTranslationNatRules", req, cb)
  }

  /**
     * 本接口（DisassociateDhcpIpWithAddressIp）用于将DhcpIp已绑定的弹性公网IP（EIP）解除绑定。<br />
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async DisassociateDhcpIpWithAddressIp(
    req: DisassociateDhcpIpWithAddressIpRequest,
    cb?: (error: string, rep: DisassociateDhcpIpWithAddressIpResponse) => void
  ): Promise<DisassociateDhcpIpWithAddressIpResponse> {
    return this.request("DisassociateDhcpIpWithAddressIp", req, cb)
  }

  /**
   * 本接口（CreateHaVip）用于创建高可用虚拟IP（HAVIP）。
   */
  async CreateHaVip(
    req: CreateHaVipRequest,
    cb?: (error: string, rep: CreateHaVipResponse) => void
  ): Promise<CreateHaVipResponse> {
    return this.request("CreateHaVip", req, cb)
  }

  /**
     * 本接口（DescribeTenantCcns）用于获取要锁定的云联网实例列表。
该接口一般用来封禁出口限速的云联网实例, 目前联通内部运营系统通过云API调用, 因为出口限速无法按地域间封禁, 只能按更粗的云联网实例粒度封禁, 如果是地域间限速, 一般可以通过更细的限速实例粒度封禁（DescribeCrossBorderCcnRegionBandwidthLimits）
如有需要, 可以封禁任意云联网实例, 可接入到内部运营系统
     */
  async DescribeTenantCcns(
    req: DescribeTenantCcnsRequest,
    cb?: (error: string, rep: DescribeTenantCcnsResponse) => void
  ): Promise<DescribeTenantCcnsResponse> {
    return this.request("DescribeTenantCcns", req, cb)
  }

  /**
   * 创建高优路由表条目。
   */
  async CreateHighPriorityRoutes(
    req: CreateHighPriorityRoutesRequest,
    cb?: (error: string, rep: CreateHighPriorityRoutesResponse) => void
  ): Promise<CreateHighPriorityRoutesResponse> {
    return this.request("CreateHighPriorityRoutes", req, cb)
  }

  /**
     * 本接口（LockCcns）用于锁定云联网实例

该接口一般用来封禁出口限速的云联网实例, 目前联通内部运营系统通过云API调用, 因为出口限速无法按地域间封禁, 只能按更粗的云联网实例粒度封禁, 如果是地域间限速, 一般可以通过更细的限速实例粒度封禁（LockCcnBandwidths）

如有需要, 可以封禁任意限速实例, 可接入到内部运营系统
     */
  async LockCcns(
    req?: LockCcnsRequest,
    cb?: (error: string, rep: LockCcnsResponse) => void
  ): Promise<LockCcnsResponse> {
    return this.request("LockCcns", req, cb)
  }

  /**
   * 本接口（CreateRoutes）用于创建路由策略。
   * 向指定路由表批量新增路由策略。
   */
  async CreateRoutes(
    req: CreateRoutesRequest,
    cb?: (error: string, rep: CreateRoutesResponse) => void
  ): Promise<CreateRoutesResponse> {
    return this.request("CreateRoutes", req, cb)
  }

  /**
   * 该接口用于编辑云联网路由表选择策略
   */
  async ModifyRouteTableSelectionPolicies(
    req: ModifyRouteTableSelectionPoliciesRequest,
    cb?: (error: string, rep: ModifyRouteTableSelectionPoliciesResponse) => void
  ): Promise<ModifyRouteTableSelectionPoliciesResponse> {
    return this.request("ModifyRouteTableSelectionPolicies", req, cb)
  }

  /**
   * 本接口（DescribeSecurityGroupAssociationStatistics）用于查询安全组关联的实例统计。
   */
  async DescribeSecurityGroupAssociationStatistics(
    req: DescribeSecurityGroupAssociationStatisticsRequest,
    cb?: (error: string, rep: DescribeSecurityGroupAssociationStatisticsResponse) => void
  ): Promise<DescribeSecurityGroupAssociationStatisticsResponse> {
    return this.request("DescribeSecurityGroupAssociationStatistics", req, cb)
  }

  /**
     * 本接口（DescribeIpGeolocationDatabaseUrl）用于获取IP地理位置库下载链接。
<font color="#FF0000">本接口即将下线，仅供存量用户使用，暂停新增用户。</font>
     */
  async DescribeIpGeolocationDatabaseUrl(
    req: DescribeIpGeolocationDatabaseUrlRequest,
    cb?: (error: string, rep: DescribeIpGeolocationDatabaseUrlResponse) => void
  ): Promise<DescribeIpGeolocationDatabaseUrlResponse> {
    return this.request("DescribeIpGeolocationDatabaseUrl", req, cb)
  }

  /**
   * 本接口 (ModifyAddressAttribute) 用于修改[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）的名称。
   */
  async ModifyAddressAttribute(
    req: ModifyAddressAttributeRequest,
    cb?: (error: string, rep: ModifyAddressAttributeResponse) => void
  ): Promise<ModifyAddressAttributeResponse> {
    return this.request("ModifyAddressAttribute", req, cb)
  }

  /**
   * 查询流量调度规则
   */
  async DescribeTrafficQosPolicy(
    req: DescribeTrafficQosPolicyRequest,
    cb?: (error: string, rep: DescribeTrafficQosPolicyResponse) => void
  ): Promise<DescribeTrafficQosPolicyResponse> {
    return this.request("DescribeTrafficQosPolicy", req, cb)
  }

  /**
     * 本接口（DescribeIPv6Addresses）用于查询一个或多个弹性公网 IPv6（简称 EIPv6）实例的详细信息。

- 支持查询您在指定地域的弹性公网 IPv6 和传统弹性公网 IPv6 实例信息
- 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的 EIPv6。
     */
  async DescribeIPv6Addresses(
    req: DescribeIPv6AddressesRequest,
    cb?: (error: string, rep: DescribeIPv6AddressesResponse) => void
  ): Promise<DescribeIPv6AddressesResponse> {
    return this.request("DescribeIPv6Addresses", req, cb)
  }

  /**
   * 本接口（CreateFlowLog）用于创建网络流日志。
   */
  async CreateFlowLog(
    req: CreateFlowLogRequest,
    cb?: (error: string, rep: CreateFlowLogResponse) => void
  ): Promise<CreateFlowLogResponse> {
    return this.request("CreateFlowLog", req, cb)
  }

  /**
   * 本接口(CreateRouteTable)用于创建路由表。
   * 创建了VPC后，系统会创建一个默认路由表，所有新建的子网都会关联到默认路由表。默认情况下您可以直接使用默认路由表来管理您的路由策略。当您的路由策略较多时，您可以调用创建路由表接口创建更多路由表管理您的路由策略。
   * 创建路由表同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
   */
  async CreateRouteTable(
    req: CreateRouteTableRequest,
    cb?: (error: string, rep: CreateRouteTableResponse) => void
  ): Promise<CreateRouteTableResponse> {
    return this.request("CreateRouteTable", req, cb)
  }

  /**
   * 本接口（ModifyPrivateNatGatewayAttribute）用于修改私网NAT网关属性
   */
  async ModifyPrivateNatGatewayAttribute(
    req: ModifyPrivateNatGatewayAttributeRequest,
    cb?: (error: string, rep: ModifyPrivateNatGatewayAttributeResponse) => void
  ): Promise<ModifyPrivateNatGatewayAttributeResponse> {
    return this.request("ModifyPrivateNatGatewayAttribute", req, cb)
  }

  /**
   * 本接口（DeleteNetworkAcl）用于删除网络ACL。
   */
  async DeleteNetworkAcl(
    req: DeleteNetworkAclRequest,
    cb?: (error: string, rep: DeleteNetworkAclResponse) => void
  ): Promise<DeleteNetworkAclResponse> {
    return this.request("DeleteNetworkAcl", req, cb)
  }

  /**
   * 本接口（DeleteVpcEndPointServiceWhiteList）用于删除终端节点服务白名单。
   */
  async DeleteVpcEndPointServiceWhiteList(
    req: DeleteVpcEndPointServiceWhiteListRequest,
    cb?: (error: string, rep: DeleteVpcEndPointServiceWhiteListResponse) => void
  ): Promise<DeleteVpcEndPointServiceWhiteListResponse> {
    return this.request("DeleteVpcEndPointServiceWhiteList", req, cb)
  }

  /**
   * 本接口（ModifyFlowLogAttribute）用于修改流日志属性。
   */
  async ModifyFlowLogAttribute(
    req: ModifyFlowLogAttributeRequest,
    cb?: (error: string, rep: ModifyFlowLogAttributeResponse) => void
  ): Promise<ModifyFlowLogAttributeResponse> {
    return this.request("ModifyFlowLogAttribute", req, cb)
  }

  /**
   * 本接口（DisassociateNetworkInterfaceSecurityGroups）用于弹性网卡解绑安全组。支持弹性网卡完全解绑安全组。
   */
  async DisassociateNetworkInterfaceSecurityGroups(
    req: DisassociateNetworkInterfaceSecurityGroupsRequest,
    cb?: (error: string, rep: DisassociateNetworkInterfaceSecurityGroupsResponse) => void
  ): Promise<DisassociateNetworkInterfaceSecurityGroupsResponse> {
    return this.request("DisassociateNetworkInterfaceSecurityGroups", req, cb)
  }

  /**
   * 本接口（ResetRoutes）用于对某个路由表名称和所有路由策略（Route）进行重新设置。<br /> 注意: 调用本接口时先删除当前路由表中所有路由策略, 再保存新提交的路由策略内容, 会引起网络中断。
   */
  async ResetRoutes(
    req: ResetRoutesRequest,
    cb?: (error: string, rep: ResetRoutesResponse) => void
  ): Promise<ResetRoutesResponse> {
    return this.request("ResetRoutes", req, cb)
  }

  /**
   * 本接口（DeleteNetworkAclEntries）用于删除三元组网络ACL的入站规则和出站规则。在NetworkAclEntrySet参数中：
   * 删除IPv4规则，需要传入NetworkAclIpv4EntryId。
   * 删除IPv6规则，需要传入NetworkAclIpv6EntryId。
   */
  async DeleteNetworkAclEntries(
    req: DeleteNetworkAclEntriesRequest,
    cb?: (error: string, rep: DeleteNetworkAclEntriesResponse) => void
  ): Promise<DeleteNetworkAclEntriesResponse> {
    return this.request("DeleteNetworkAclEntries", req, cb)
  }

  /**
   * 本接口（StopTrafficMirror）用于关闭流量镜像实例。
   */
  async StopTrafficMirror(
    req: StopTrafficMirrorRequest,
    cb?: (error: string, rep: StopTrafficMirrorResponse) => void
  ): Promise<StopTrafficMirrorResponse> {
    return this.request("StopTrafficMirror", req, cb)
  }

  /**
   * 本接口（ModifyCcnRegionBandwidthLimitsType）用于修改后付费云联网实例修改带宽限速策略。
   */
  async ModifyCcnRegionBandwidthLimitsType(
    req: ModifyCcnRegionBandwidthLimitsTypeRequest,
    cb?: (error: string, rep: ModifyCcnRegionBandwidthLimitsTypeResponse) => void
  ): Promise<ModifyCcnRegionBandwidthLimitsTypeResponse> {
    return this.request("ModifyCcnRegionBandwidthLimitsType", req, cb)
  }

  /**
   * 本接口(DescribeCcnRouteTableInputPolicys)用于查询指定云联网路由表的路由接收策略。
   */
  async DescribeCcnRouteTableInputPolicys(
    req: DescribeCcnRouteTableInputPolicysRequest,
    cb?: (error: string, rep: DescribeCcnRouteTableInputPolicysResponse) => void
  ): Promise<DescribeCcnRouteTableInputPolicysResponse> {
    return this.request("DescribeCcnRouteTableInputPolicys", req, cb)
  }

  /**
   * 本接口（InquiryPriceRenewVpnGateway）用于续费VPN网关询价。目前仅支持IPSEC类型网关的询价。
   */
  async InquiryPriceRenewVpnGateway(
    req: InquiryPriceRenewVpnGatewayRequest,
    cb?: (error: string, rep: InquiryPriceRenewVpnGatewayResponse) => void
  ): Promise<InquiryPriceRenewVpnGatewayResponse> {
    return this.request("InquiryPriceRenewVpnGateway", req, cb)
  }

  /**
   * 本接口（DeleteSnapshotPolicies）用于删除快照策略。
   */
  async DeleteSnapshotPolicies(
    req: DeleteSnapshotPoliciesRequest,
    cb?: (error: string, rep: DeleteSnapshotPoliciesResponse) => void
  ): Promise<DeleteSnapshotPoliciesResponse> {
    return this.request("DeleteSnapshotPolicies", req, cb)
  }

  /**
   * 本接口（DescribeVpcEndPointService）用于查询终端节点服务列表。
   */
  async DescribeVpcEndPointService(
    req: DescribeVpcEndPointServiceRequest,
    cb?: (error: string, rep: DescribeVpcEndPointServiceResponse) => void
  ): Promise<DescribeVpcEndPointServiceResponse> {
    return this.request("DescribeVpcEndPointService", req, cb)
  }

  /**
   * 刷新专线直连nat路由，更新nat到专线的路由表
   */
  async RefreshDirectConnectGatewayRouteToNatGateway(
    req: RefreshDirectConnectGatewayRouteToNatGatewayRequest,
    cb?: (error: string, rep: RefreshDirectConnectGatewayRouteToNatGatewayResponse) => void
  ): Promise<RefreshDirectConnectGatewayRouteToNatGatewayResponse> {
    return this.request("RefreshDirectConnectGatewayRouteToNatGateway", req, cb)
  }

  /**
   * 本接口（CreatePrivateNatGatewayTranslationNatRule）用于创建私网NAT网关源端转换规则。
   */
  async CreatePrivateNatGatewayTranslationNatRule(
    req: CreatePrivateNatGatewayTranslationNatRuleRequest,
    cb?: (error: string, rep: CreatePrivateNatGatewayTranslationNatRuleResponse) => void
  ): Promise<CreatePrivateNatGatewayTranslationNatRuleResponse> {
    return this.request("CreatePrivateNatGatewayTranslationNatRule", req, cb)
  }

  /**
   * 本接口（ModifyVpcEndPointAttribute）用于修改终端节点属性。
   */
  async ModifyVpcEndPointAttribute(
    req: ModifyVpcEndPointAttributeRequest,
    cb?: (error: string, rep: ModifyVpcEndPointAttributeResponse) => void
  ): Promise<ModifyVpcEndPointAttributeResponse> {
    return this.request("ModifyVpcEndPointAttribute", req, cb)
  }

  /**
   * 修改高优路由表条目属性。
   */
  async ModifyHighPriorityRouteAttribute(
    req: ModifyHighPriorityRouteAttributeRequest,
    cb?: (error: string, rep: ModifyHighPriorityRouteAttributeResponse) => void
  ): Promise<ModifyHighPriorityRouteAttributeResponse> {
    return this.request("ModifyHighPriorityRouteAttribute", req, cb)
  }

  /**
   * 本接口（DisassociateVpcEndPointSecurityGroups）用于终端节点解绑安全组。
   */
  async DisassociateVpcEndPointSecurityGroups(
    req: DisassociateVpcEndPointSecurityGroupsRequest,
    cb?: (error: string, rep: DisassociateVpcEndPointSecurityGroupsResponse) => void
  ): Promise<DisassociateVpcEndPointSecurityGroupsResponse> {
    return this.request("DisassociateVpcEndPointSecurityGroups", req, cb)
  }

  /**
   * 本接口（CloneSecurityGroup）用于根据存量的安全组，克隆创建出同样规则配置的安全组。默认仅克隆安全组及其规则信息，可通过入参开启克隆安全组标签信息。
   */
  async CloneSecurityGroup(
    req: CloneSecurityGroupRequest,
    cb?: (error: string, rep: CloneSecurityGroupResponse) => void
  ): Promise<CloneSecurityGroupResponse> {
    return this.request("CloneSecurityGroup", req, cb)
  }

  /**
   * 本接口（EnableVpcEndPointConnect）用于是否接受终端节点连接请求。
   */
  async EnableVpcEndPointConnect(
    req: EnableVpcEndPointConnectRequest,
    cb?: (error: string, rep: EnableVpcEndPointConnectResponse) => void
  ): Promise<EnableVpcEndPointConnectResponse> {
    return this.request("EnableVpcEndPointConnect", req, cb)
  }

  /**
     * 本接口（CreateAndAttachNetworkInterface）用于创建弹性网卡并绑定云服务器。
* 创建弹性网卡时可以指定内网IP，并且可以指定一个主IP，指定的内网IP必须在弹性网卡所在子网内，而且不能被占用。
* 创建弹性网卡时可以指定需要申请的内网IP数量，系统会随机生成内网IP地址。
* 一个弹性网卡支持绑定的IP地址是有限制的，更多资源限制信息详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
* 创建弹性网卡同时可以绑定已有安全组。
* 创建弹性网卡同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
>?本接口为异步接口，可调用 [DescribeVpcTaskResult](https://cloud.tencent.com/document/api/215/59037) 接口查询任务执行结果，待任务执行成功后再进行其他操作。
>
     */
  async CreateAndAttachNetworkInterface(
    req: CreateAndAttachNetworkInterfaceRequest,
    cb?: (error: string, rep: CreateAndAttachNetworkInterfaceResponse) => void
  ): Promise<CreateAndAttachNetworkInterfaceResponse> {
    return this.request("CreateAndAttachNetworkInterface", req, cb)
  }

  /**
   * 本接口（ModifyVpcEndPointServiceWhiteList）用于修改终端节点服务白名单属性。
   */
  async ModifyVpcEndPointServiceWhiteList(
    req: ModifyVpcEndPointServiceWhiteListRequest,
    cb?: (error: string, rep: ModifyVpcEndPointServiceWhiteListResponse) => void
  ): Promise<ModifyVpcEndPointServiceWhiteListResponse> {
    return this.request("ModifyVpcEndPointServiceWhiteList", req, cb)
  }

  /**
   * 本接口（DescribeNatGateways）用于查询 NAT 网关。
   */
  async DescribeNatGateways(
    req: DescribeNatGatewaysRequest,
    cb?: (error: string, rep: DescribeNatGatewaysResponse) => void
  ): Promise<DescribeNatGatewaysResponse> {
    return this.request("DescribeNatGateways", req, cb)
  }

  /**
   * 重置高优路由表。
   */
  async ResetHighPriorityRoutes(
    req: ResetHighPriorityRoutesRequest,
    cb?: (error: string, rep: ResetHighPriorityRoutesResponse) => void
  ): Promise<ResetHighPriorityRoutesResponse> {
    return this.request("ResetHighPriorityRoutes", req, cb)
  }

  /**
   * 本接口（DescribeVpcs）用于查询私有网络列表。
   */
  async DescribeVpcs(
    req: DescribeVpcsRequest,
    cb?: (error: string, rep: DescribeVpcsResponse) => void
  ): Promise<DescribeVpcsResponse> {
    return this.request("DescribeVpcs", req, cb)
  }

  /**
     * 本接口（MigrateNetworkInterface）用于弹性网卡迁移。
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async MigrateNetworkInterface(
    req: MigrateNetworkInterfaceRequest,
    cb?: (error: string, rep: MigrateNetworkInterfaceResponse) => void
  ): Promise<MigrateNetworkInterfaceResponse> {
    return this.request("MigrateNetworkInterface", req, cb)
  }

  /**
   * 查询高优路由表。
   */
  async DescribeHighPriorityRouteTables(
    req: DescribeHighPriorityRouteTablesRequest,
    cb?: (error: string, rep: DescribeHighPriorityRouteTablesResponse) => void
  ): Promise<DescribeHighPriorityRouteTablesResponse> {
    return this.request("DescribeHighPriorityRouteTables", req, cb)
  }

  /**
   * 本接口（AcceptAttachCcnInstances）用于跨账号关联实例时，云联网所有者接受并同意关联操作。
   */
  async AcceptAttachCcnInstances(
    req: AcceptAttachCcnInstancesRequest,
    cb?: (error: string, rep: AcceptAttachCcnInstancesResponse) => void
  ): Promise<AcceptAttachCcnInstancesResponse> {
    return this.request("AcceptAttachCcnInstances", req, cb)
  }

  /**
   * 本接口（DescribeGatewayFlowQos）用于查询网关来访IP流控带宽。
   */
  async DescribeGatewayFlowQos(
    req: DescribeGatewayFlowQosRequest,
    cb?: (error: string, rep: DescribeGatewayFlowQosResponse) => void
  ): Promise<DescribeGatewayFlowQosResponse> {
    return this.request("DescribeGatewayFlowQos", req, cb)
  }

  /**
     * 1. 该接口用于查询账户下的IPV6转换实例及其绑定的转换规则信息
2. 支持过滤查询
     */
  async DescribeIp6Translators(
    req: DescribeIp6TranslatorsRequest,
    cb?: (error: string, rep: DescribeIp6TranslatorsResponse) => void
  ): Promise<DescribeIp6TranslatorsResponse> {
    return this.request("DescribeIp6Translators", req, cb)
  }

  /**
   * 本接口（DisableGatewayFlowMonitor）用于关闭网关流量监控。
   */
  async DisableGatewayFlowMonitor(
    req: DisableGatewayFlowMonitorRequest,
    cb?: (error: string, rep: DisableGatewayFlowMonitorResponse) => void
  ): Promise<DisableGatewayFlowMonitorResponse> {
    return this.request("DisableGatewayFlowMonitor", req, cb)
  }

  /**
   * 本接口（CreateVpc）用于创建私有网络（VPC）。
   * 用户可以创建的最小网段子网掩码为28（有16个IP地址），10.0.0.0/12，172.16.0.0/12最大网段子网掩码为12（1,048,576个IP地址），192.168.0.0/16最大网段子网掩码为16（65,536个IP地址）如果需要规划VPC网段请参见[网络规划](https://cloud.tencent.com/document/product/215/30313)。
   * 同一个地域能创建的VPC资源个数也是有限制的，详见 <a href="https://cloud.tencent.com/doc/product/215/537" title="VPC使用限制">VPC使用限制</a>，如果需要申请更多资源，请提交[工单申请](https://console.cloud.tencent.com/workorder/category)。
   * 创建VPC同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
   */
  async CreateVpc(
    req: CreateVpcRequest,
    cb?: (error: string, rep: CreateVpcResponse) => void
  ): Promise<CreateVpcResponse> {
    return this.request("CreateVpc", req, cb)
  }

  /**
   * 本接口（CheckAssistantCidr）用于检查辅助CIDR是否与存量路由、对等连接（对端VPC的CIDR）等资源存在冲突。如果存在重叠，则返回重叠的资源。
   * 检测辅助CIDR是否与当前VPC的主CIDR和辅助CIDR存在重叠。
   * 检测辅助CIDR是否与当前VPC的路由的目的端存在重叠。
   * 检测辅助CIDR是否与当前VPC的对等连接，对端VPC下的主CIDR或辅助CIDR存在重叠。
   */
  async CheckAssistantCidr(
    req: CheckAssistantCidrRequest,
    cb?: (error: string, rep: CheckAssistantCidrResponse) => void
  ): Promise<CheckAssistantCidrResponse> {
    return this.request("CheckAssistantCidr", req, cb)
  }

  /**
   * 本接口（ModifyNetworkAclAttribute）用于修改网络ACL属性。
   */
  async ModifyNetworkAclAttribute(
    req: ModifyNetworkAclAttributeRequest,
    cb?: (error: string, rep: ModifyNetworkAclAttributeResponse) => void
  ): Promise<ModifyNetworkAclAttributeResponse> {
    return this.request("ModifyNetworkAclAttribute", req, cb)
  }

  /**
   * 本接口（DisableSnapshotPolicies）用于停用快照策略。
   */
  async DisableSnapshotPolicies(
    req: DisableSnapshotPoliciesRequest,
    cb?: (error: string, rep: DisableSnapshotPoliciesResponse) => void
  ): Promise<DisableSnapshotPoliciesResponse> {
    return this.request("DisableSnapshotPolicies", req, cb)
  }

  /**
   * 本接口（DeletePrivateNatGatewayTranslationNatRule）用于删除私网NAT网关源端转换规则
   */
  async DeletePrivateNatGatewayTranslationNatRule(
    req: DeletePrivateNatGatewayTranslationNatRuleRequest,
    cb?: (error: string, rep: DeletePrivateNatGatewayTranslationNatRuleResponse) => void
  ): Promise<DeletePrivateNatGatewayTranslationNatRuleResponse> {
    return this.request("DeletePrivateNatGatewayTranslationNatRule", req, cb)
  }

  /**
   * 本接口（DescribeDhcpIps）用于查询DhcpIp列表
   */
  async DescribeDhcpIps(
    req: DescribeDhcpIpsRequest,
    cb?: (error: string, rep: DescribeDhcpIpsResponse) => void
  ): Promise<DescribeDhcpIpsResponse> {
    return this.request("DescribeDhcpIps", req, cb)
  }

  /**
   * 本接口 (AssociateAddress) 用于将[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）绑定到实例或弹性网卡的指定内网 IP 上。
   * 将 EIP 绑定到实例（CVM）上，其本质是将 EIP 绑定到实例上主网卡的主内网 IP 上。
   * 将 EIP 绑定到主网卡的主内网IP时，如主内网IP已绑定普通公网IP，必须先退还才能绑定EIP。
   * 将 EIP 绑定到指定网卡的内网 IP上（非主网卡的主内网IP），则必须先解绑该 EIP，才能再绑定新的。
   * 将 EIP 绑定到内网型CLB实例的功能处于内测阶段，如需使用，请提交[内测申请](https://cloud.tencent.com/apply/p/4kxj7picqci)。
   * 将 EIP 绑定到NAT网关，请使用接口[AssociateNatGatewayAddress](https://cloud.tencent.com/document/product/215/36722)
   * EIP 如果欠费或被封堵，则不能被绑定。
   * 只有状态为 UNBIND 的 EIP 才能够被绑定。
   */
  async AssociateAddress(
    req: AssociateAddressRequest,
    cb?: (error: string, rep: AssociateAddressResponse) => void
  ): Promise<AssociateAddressResponse> {
    return this.request("AssociateAddress", req, cb)
  }

  /**
   * 本接口（DeleteVpcPeeringConnection）用于删除私有网络对等连接。
   */
  async DeleteVpcPeeringConnection(
    req: DeleteVpcPeeringConnectionRequest,
    cb?: (error: string, rep: DeleteVpcPeeringConnectionResponse) => void
  ): Promise<DeleteVpcPeeringConnectionResponse> {
    return this.request("DeleteVpcPeeringConnection", req, cb)
  }

  /**
   * 本接口（DescribeFlowLogs）用于查询获取流日志集合。
   */
  async DescribeFlowLogs(
    req: DescribeFlowLogsRequest,
    cb?: (error: string, rep: DescribeFlowLogsResponse) => void
  ): Promise<DescribeFlowLogsResponse> {
    return this.request("DescribeFlowLogs", req, cb)
  }

  /**
   * 本接口（DescribeDirectConnectGatewayCcnRoutes）用于查询专线网关的云联网路由（IDC网段）
   */
  async DescribeDirectConnectGatewayCcnRoutes(
    req: DescribeDirectConnectGatewayCcnRoutesRequest,
    cb?: (error: string, rep: DescribeDirectConnectGatewayCcnRoutesResponse) => void
  ): Promise<DescribeDirectConnectGatewayCcnRoutesResponse> {
    return this.request("DescribeDirectConnectGatewayCcnRoutes", req, cb)
  }

  /**
   * 本接口（CreateNetworkAclEntries）用于增量添加网络ACL三元组的入站规则和出站规则。
   */
  async CreateNetworkAclEntries(
    req: CreateNetworkAclEntriesRequest,
    cb?: (error: string, rep: CreateNetworkAclEntriesResponse) => void
  ): Promise<CreateNetworkAclEntriesResponse> {
    return this.request("CreateNetworkAclEntries", req, cb)
  }

  /**
   * 接口支持删除共享带宽包，包括[设备带宽包](https://cloud.tencent.com/document/product/684/15246#.E8.AE.BE.E5.A4.87.E5.B8.A6.E5.AE.BD.E5.8C.85)和[IP带宽包](https://cloud.tencent.com/document/product/684/15246#ip-.E5.B8.A6.E5.AE.BD.E5.8C.85)
   */
  async DeleteBandwidthPackage(
    req: DeleteBandwidthPackageRequest,
    cb?: (error: string, rep: DeleteBandwidthPackageResponse) => void
  ): Promise<DeleteBandwidthPackageResponse> {
    return this.request("DeleteBandwidthPackage", req, cb)
  }

  /**
     * 1. 该接口用于释放IPV6转换实例，支持批量。
2.  如果IPV6转换实例建立有转换规则，会一并删除。
     */
  async DeleteIp6Translators(
    req: DeleteIp6TranslatorsRequest,
    cb?: (error: string, rep: DeleteIp6TranslatorsResponse) => void
  ): Promise<DeleteIp6TranslatorsResponse> {
    return this.request("DeleteIp6Translators", req, cb)
  }

  /**
   * 本接口（DescribeRoutes）用于查询路由列表。
   */
  async DescribeRoutes(
    req: DescribeRoutesRequest,
    cb?: (error: string, rep: DescribeRoutesResponse) => void
  ): Promise<DescribeRoutesResponse> {
    return this.request("DescribeRoutes", req, cb)
  }

  /**
   * 本接口（DeleteVpnGatewayRoutes）用于删除VPN网关路由
   */
  async DeleteVpnGatewayRoutes(
    req: DeleteVpnGatewayRoutesRequest,
    cb?: (error: string, rep: DeleteVpnGatewayRoutesResponse) => void
  ): Promise<DeleteVpnGatewayRoutesResponse> {
    return this.request("DeleteVpnGatewayRoutes", req, cb)
  }

  /**
   * 替换高优路由表条目信息。
   */
  async ReplaceHighPriorityRoutes(
    req: ReplaceHighPriorityRoutesRequest,
    cb?: (error: string, rep: ReplaceHighPriorityRoutesResponse) => void
  ): Promise<ReplaceHighPriorityRoutesResponse> {
    return this.request("ReplaceHighPriorityRoutes", req, cb)
  }

  /**
   * 修改CCN关联实例属性，目前仅修改备注description
   */
  async ModifyCcnAttachedInstancesAttribute(
    req: ModifyCcnAttachedInstancesAttributeRequest,
    cb?: (error: string, rep: ModifyCcnAttachedInstancesAttributeResponse) => void
  ): Promise<ModifyCcnAttachedInstancesAttributeResponse> {
    return this.request("ModifyCcnAttachedInstancesAttribute", req, cb)
  }

  /**
   * 本接口（ResetTrafficMirrorTarget）用于更新流量镜像实例的接收目的信息。
   */
  async ResetTrafficMirrorTarget(
    req: ResetTrafficMirrorTargetRequest,
    cb?: (error: string, rep: ResetTrafficMirrorTargetResponse) => void
  ): Promise<ResetTrafficMirrorTargetResponse> {
    return this.request("ResetTrafficMirrorTarget", req, cb)
  }

  /**
     * 本接口（DeleteNatGateway）用于删除NAT网关。
删除 NAT 网关后，系统会自动删除路由表中包含此 NAT 网关的路由项，同时也会解绑弹性公网IP（EIP）。
     */
  async DeleteNatGateway(
    req: DeleteNatGatewayRequest,
    cb?: (error: string, rep: DeleteNatGatewayResponse) => void
  ): Promise<DeleteNatGatewayResponse> {
    return this.request("DeleteNatGateway", req, cb)
  }

  /**
   * 本接口（DescribeRouteList）用于查询路由条目列表。
   */
  async DescribeRouteList(
    req: DescribeRouteListRequest,
    cb?: (error: string, rep: DescribeRouteListResponse) => void
  ): Promise<DescribeRouteListResponse> {
    return this.request("DescribeRouteList", req, cb)
  }

  /**
   * 本接口（CreateNetDetect）用于创建网络探测。
   */
  async CreateNetDetect(
    req: CreateNetDetectRequest,
    cb?: (error: string, rep: CreateNetDetectResponse) => void
  ): Promise<CreateNetDetectResponse> {
    return this.request("CreateNetDetect", req, cb)
  }

  /**
   * 修改高优路由表属性
   */
  async ModifyHighPriorityRouteTableAttribute(
    req: ModifyHighPriorityRouteTableAttributeRequest,
    cb?: (error: string, rep: ModifyHighPriorityRouteTableAttributeResponse) => void
  ): Promise<ModifyHighPriorityRouteTableAttributeResponse> {
    return this.request("ModifyHighPriorityRouteTableAttribute", req, cb)
  }

  /**
     * 本接口（ReleaseIPv6Addresses）用于释放一个或多个弹性公网IPv6（简称EIPv6）实例。

- 支持对已申请到的弹性公网 IPv6 实例进行释放操作，如需再次使用，请重新申请。
- 只有状态为 UNBIND 的 EIPv6 实例才能进行释放操作。
     */
  async ReleaseIPv6Addresses(
    req: ReleaseIPv6AddressesRequest,
    cb?: (error: string, rep: ReleaseIPv6AddressesResponse) => void
  ): Promise<ReleaseIPv6AddressesResponse> {
    return this.request("ReleaseIPv6Addresses", req, cb)
  }

  /**
   * 删除内网保留IP
   */
  async DeleteReserveIpAddresses(
    req: DeleteReserveIpAddressesRequest,
    cb?: (error: string, rep: DeleteReserveIpAddressesResponse) => void
  ): Promise<DeleteReserveIpAddressesResponse> {
    return this.request("DeleteReserveIpAddresses", req, cb)
  }

  /**
   * 修改 IDC通道信息
   */
  async ModifyCdcLDCXAttribute(
    req?: ModifyCdcLDCXAttributeRequest,
    cb?: (error: string, rep: ModifyCdcLDCXAttributeResponse) => void
  ): Promise<ModifyCdcLDCXAttributeResponse> {
    return this.request("ModifyCdcLDCXAttribute", req, cb)
  }

  /**
   * 本接口（DeleteVpcEndPointService）用于删除终端节点服务。
   */
  async DeleteVpcEndPointService(
    req: DeleteVpcEndPointServiceRequest,
    cb?: (error: string, rep: DeleteVpcEndPointServiceResponse) => void
  ): Promise<DeleteVpcEndPointServiceResponse> {
    return this.request("DeleteVpcEndPointService", req, cb)
  }

  /**
   * 本接口（CreateNetworkAclQuintupleEntries）用于增量网络ACL五元组的入站规则和出站规则。
   */
  async CreateNetworkAclQuintupleEntries(
    req: CreateNetworkAclQuintupleEntriesRequest,
    cb?: (error: string, rep: CreateNetworkAclQuintupleEntriesResponse) => void
  ): Promise<CreateNetworkAclQuintupleEntriesResponse> {
    return this.request("CreateNetworkAclQuintupleEntries", req, cb)
  }

  /**
   * 本接口（DeleteVpnGateway）用于删除VPN网关。
   */
  async DeleteVpnGateway(
    req: DeleteVpnGatewayRequest,
    cb?: (error: string, rep: DeleteVpnGatewayResponse) => void
  ): Promise<DeleteVpnGatewayResponse> {
    return this.request("DeleteVpnGateway", req, cb)
  }

  /**
   * 本接口（DescribeVpcEndPointServiceWhiteList）用于查询终端节点服务的服务白名单列表。
   */
  async DescribeVpcEndPointServiceWhiteList(
    req: DescribeVpcEndPointServiceWhiteListRequest,
    cb?: (error: string, rep: DescribeVpcEndPointServiceWhiteListResponse) => void
  ): Promise<DescribeVpcEndPointServiceWhiteListResponse> {
    return this.request("DescribeVpcEndPointServiceWhiteList", req, cb)
  }

  /**
   * 接口用于调整[共享带宽包](https://cloud.tencent.com/document/product/684/15245)(BWP)带宽
   */
  async ModifyBandwidthPackageBandwidth(
    req: ModifyBandwidthPackageBandwidthRequest,
    cb?: (error: string, rep: ModifyBandwidthPackageBandwidthResponse) => void
  ): Promise<ModifyBandwidthPackageBandwidthResponse> {
    return this.request("ModifyBandwidthPackageBandwidth", req, cb)
  }

  /**
   * 本接口（DescribePrivateNatGatewayLimits）用于查询可创建的私网NAT网关配额数量
   */
  async DescribePrivateNatGatewayLimits(
    req: DescribePrivateNatGatewayLimitsRequest,
    cb?: (error: string, rep: DescribePrivateNatGatewayLimitsResponse) => void
  ): Promise<DescribePrivateNatGatewayLimitsResponse> {
    return this.request("DescribePrivateNatGatewayLimits", req, cb)
  }

  /**
     * 本接口（ModifySecurityGroupPolicies）用于重置安全组出站和入站规则（SecurityGroupPolicy）。

<ul>
<li>该接口不支持自定义索引 PolicyIndex。</li>
<li>在 SecurityGroupPolicySet 参数中：<ul>
	<li> 如果指定 SecurityGroupPolicySet.Version 为0, 表示清空所有规则，并忽略 Egress 和 Ingress。</li>
	<li> 如果指定 SecurityGroupPolicySet.Version 不为0, 在添加出站和入站规则（Egress 和 Ingress）时：<ul>
		<li>Protocol 字段支持输入 TCP, UDP, ICMP, ICMPV6, GRE, ALL。</li>
		<li>CidrBlock 字段允许输入符合 cidr 格式标准的任意字符串。在基础网络中，如果 CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
		<li>Ipv6CidrBlock 字段允许输入符合 IPv6 cidr 格式标准的任意字符串。在基础网络中，如果Ipv6CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IPv6，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
		<li>SecurityGroupId 字段允许输入与待修改的安全组位于相同项目中的安全组 ID，包括这个安全组 ID 本身，代表安全组下所有云服务器的内网 IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个ID所关联的云服务器变化而变化，不需要重新修改。</li>
		<li>Port 字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当 Protocol 字段是 TCP 或 UDP 时，Port 字段才被接受。</li>
		<li>Action 字段只允许输入 ACCEPT 或 DROP。</li>
		<li>CidrBlock, Ipv6CidrBlock, SecurityGroupId, AddressTemplate 四者是排他关系，不允许同时输入，Protocol + Port 和 ServiceTemplate 二者是排他关系，不允许同时输入。</li>
</ul></li></ul></li>
</ul>
     */
  async ModifySecurityGroupPolicies(
    req: ModifySecurityGroupPoliciesRequest,
    cb?: (error: string, rep: ModifySecurityGroupPoliciesResponse) => void
  ): Promise<ModifySecurityGroupPoliciesResponse> {
    return this.request("ModifySecurityGroupPolicies", req, cb)
  }

  /**
   * 本接口（ CreatePrivateNatGatewayTranslationAclRule）用于创建私网NAT网关源端转换访问控制规则
   */
  async CreatePrivateNatGatewayTranslationAclRule(
    req: CreatePrivateNatGatewayTranslationAclRuleRequest,
    cb?: (error: string, rep: CreatePrivateNatGatewayTranslationAclRuleResponse) => void
  ): Promise<CreatePrivateNatGatewayTranslationAclRuleResponse> {
    return this.request("CreatePrivateNatGatewayTranslationAclRule", req, cb)
  }

  /**
   * 本接口(DescribeSecurityGroupLimits)用于查询用户安全组配额。
   */
  async DescribeSecurityGroupLimits(
    req?: DescribeSecurityGroupLimitsRequest,
    cb?: (error: string, rep: DescribeSecurityGroupLimitsResponse) => void
  ): Promise<DescribeSecurityGroupLimitsResponse> {
    return this.request("DescribeSecurityGroupLimits", req, cb)
  }

  /**
   * 查询IDC使用的 VLAN
   */
  async DescribeCdcUsedIdcVlan(
    req?: DescribeCdcUsedIdcVlanRequest,
    cb?: (error: string, rep: DescribeCdcUsedIdcVlanResponse) => void
  ): Promise<DescribeCdcUsedIdcVlanResponse> {
    return this.request("DescribeCdcUsedIdcVlan", req, cb)
  }

  /**
   * 本接口（DescribeSecurityGroupReferences）用于查询安全组被引用信息。
   */
  async DescribeSecurityGroupReferences(
    req: DescribeSecurityGroupReferencesRequest,
    cb?: (error: string, rep: DescribeSecurityGroupReferencesResponse) => void
  ): Promise<DescribeSecurityGroupReferencesResponse> {
    return this.request("DescribeSecurityGroupReferences", req, cb)
  }

  /**
   * 本接口（ModifyIpv6AddressesAttribute）用于修改弹性网卡内网IPv6地址属性。
   */
  async ModifyIpv6AddressesAttribute(
    req: ModifyIpv6AddressesAttributeRequest,
    cb?: (error: string, rep: ModifyIpv6AddressesAttributeResponse) => void
  ): Promise<ModifyIpv6AddressesAttributeResponse> {
    return this.request("ModifyIpv6AddressesAttribute", req, cb)
  }

  /**
   * 本接口（DescribeDirectConnectGateways）用于查询专线网关。
   */
  async DescribeDirectConnectGateways(
    req: DescribeDirectConnectGatewaysRequest,
    cb?: (error: string, rep: DescribeDirectConnectGatewaysResponse) => void
  ): Promise<DescribeDirectConnectGatewaysResponse> {
    return this.request("DescribeDirectConnectGateways", req, cb)
  }

  /**
   * 本接口（RenewVpnGateway）用于预付费（包年包月）VPN网关续费。目前只支持IPSEC网关。
   */
  async RenewVpnGateway(
    req: RenewVpnGatewayRequest,
    cb?: (error: string, rep: RenewVpnGatewayResponse) => void
  ): Promise<RenewVpnGatewayResponse> {
    return this.request("RenewVpnGateway", req, cb)
  }

  /**
     * 本接口（MigratePrivateIpAddress）用于弹性网卡内网IP迁移。
* 该接口用于将一个内网IP从一个弹性网卡上迁移到另外一个弹性网卡，主IP地址不支持迁移。
* 迁移前后的弹性网卡必须在同一个子网内。  

本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async MigratePrivateIpAddress(
    req: MigratePrivateIpAddressRequest,
    cb?: (error: string, rep: MigratePrivateIpAddressResponse) => void
  ): Promise<MigratePrivateIpAddressResponse> {
    return this.request("MigratePrivateIpAddress", req, cb)
  }

  /**
   * 本接口（DetachSnapshotInstances）用于快照策略解关联实例。
   */
  async DetachSnapshotInstances(
    req: DetachSnapshotInstancesRequest,
    cb?: (error: string, rep: DetachSnapshotInstancesResponse) => void
  ): Promise<DetachSnapshotInstancesResponse> {
    return this.request("DetachSnapshotInstances", req, cb)
  }

  /**
   * 本接口（DescribeServiceTemplates）用于查询协议端口模板。
   */
  async DescribeServiceTemplates(
    req: DescribeServiceTemplatesRequest,
    cb?: (error: string, rep: DescribeServiceTemplatesResponse) => void
  ): Promise<DescribeServiceTemplatesResponse> {
    return this.request("DescribeServiceTemplates", req, cb)
  }

  /**
     * 本接口（HaVipDisassociateAddressIp）用于将高可用虚拟IP（HAVIP）已绑定的弹性公网IP（EIP）解除绑定。<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async HaVipDisassociateAddressIp(
    req: HaVipDisassociateAddressIpRequest,
    cb?: (error: string, rep: HaVipDisassociateAddressIpResponse) => void
  ): Promise<HaVipDisassociateAddressIpResponse> {
    return this.request("HaVipDisassociateAddressIp", req, cb)
  }

  /**
   * 查询专线绑定NAT的路由
   */
  async DescribeNatGatewayDirectConnectGatewayRoute(
    req: DescribeNatGatewayDirectConnectGatewayRouteRequest,
    cb?: (error: string, rep: DescribeNatGatewayDirectConnectGatewayRouteResponse) => void
  ): Promise<DescribeNatGatewayDirectConnectGatewayRouteResponse> {
    return this.request("DescribeNatGatewayDirectConnectGatewayRoute", req, cb)
  }

  /**
     * 本接口（UnlockCcns）用于解锁云联网实例

该接口一般用来解封禁出口限速的云联网实例, 目前联通内部运营系统通过云API调用, 因为出口限速无法按地域间解封禁, 只能按更粗的云联网实例粒度解封禁, 如果是地域间限速, 一般可以通过更细的限速实例粒度解封禁（UnlockCcnBandwidths）

如有需要, 可以封禁任意限速实例, 可接入到内部运营系统
     */
  async UnlockCcns(
    req?: UnlockCcnsRequest,
    cb?: (error: string, rep: UnlockCcnsResponse) => void
  ): Promise<UnlockCcnsResponse> {
    return this.request("UnlockCcns", req, cb)
  }

  /**
     * 本接口（HaVipAssociateAddressIp）用于高可用虚拟IP（HAVIP）绑定弹性公网IP（EIP）。<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`DescribeVpcTaskResult`接口。
     */
  async HaVipAssociateAddressIp(
    req: HaVipAssociateAddressIpRequest,
    cb?: (error: string, rep: HaVipAssociateAddressIpResponse) => void
  ): Promise<HaVipAssociateAddressIpResponse> {
    return this.request("HaVipAssociateAddressIp", req, cb)
  }

  /**
   * 本接口（CheckDefaultSubnet）用于预判是否可建默认子网。
   */
  async CheckDefaultSubnet(
    req: CheckDefaultSubnetRequest,
    cb?: (error: string, rep: CheckDefaultSubnetResponse) => void
  ): Promise<CheckDefaultSubnetResponse> {
    return this.request("CheckDefaultSubnet", req, cb)
  }

  /**
   * 本接口（DownloadVpnGatewaySslClientCert）用于下载SSL-VPN-CLIENT 客户端证书。
   */
  async DownloadVpnGatewaySslClientCert(
    req: DownloadVpnGatewaySslClientCertRequest,
    cb?: (error: string, rep: DownloadVpnGatewaySslClientCertResponse) => void
  ): Promise<DownloadVpnGatewaySslClientCertResponse> {
    return this.request("DownloadVpnGatewaySslClientCert", req, cb)
  }

  /**
   * 本接口 (DescribeAddressQuota) 用于查询您账户的[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）在当前地域的配额信息。配额详情可参见 [EIP 产品简介](https://cloud.tencent.com/document/product/213/5733)。
   */
  async DescribeAddressQuota(
    req?: DescribeAddressQuotaRequest,
    cb?: (error: string, rep: DescribeAddressQuotaResponse) => void
  ): Promise<DescribeAddressQuotaResponse> {
    return this.request("DescribeAddressQuota", req, cb)
  }

  /**
   * 本接口（UpdateTrafficMirrorDirection）用于更新流量镜像实例的采集方向。
   */
  async UpdateTrafficMirrorDirection(
    req: UpdateTrafficMirrorDirectionRequest,
    cb?: (error: string, rep: UpdateTrafficMirrorDirectionResponse) => void
  ): Promise<UpdateTrafficMirrorDirectionResponse> {
    return this.request("UpdateTrafficMirrorDirection", req, cb)
  }

  /**
   * 本接口（StartTrafficMirror）用于开启流量镜像实例。
   */
  async StartTrafficMirror(
    req: StartTrafficMirrorRequest,
    cb?: (error: string, rep: StartTrafficMirrorResponse) => void
  ): Promise<StartTrafficMirrorResponse> {
    return this.request("StartTrafficMirror", req, cb)
  }

  /**
   * 本接口（CreateCcn）用于创建云联网（CCN）。<br />
   * 创建云联网同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
   * 每个账号能创建的云联网实例个数是有限的，详请参考产品文档。如果需要扩充请联系在线客服。
   */
  async CreateCcn(
    req: CreateCcnRequest,
    cb?: (error: string, rep: CreateCcnResponse) => void
  ): Promise<CreateCcnResponse> {
    return this.request("CreateCcn", req, cb)
  }

  /**
   * 本接口（DescribeSecurityGroups）用于查询安全组。
   */
  async DescribeSecurityGroups(
    req: DescribeSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeSecurityGroupsResponse) => void
  ): Promise<DescribeSecurityGroupsResponse> {
    return this.request("DescribeSecurityGroups", req, cb)
  }

  /**
   * 本接口（CreateVpnGateway）用于创建VPN网关。
   */
  async CreateVpnGateway(
    req: CreateVpnGatewayRequest,
    cb?: (error: string, rep: CreateVpnGatewayResponse) => void
  ): Promise<CreateVpnGatewayResponse> {
    return this.request("CreateVpnGateway", req, cb)
  }

  /**
   * 本接口（DescribeSecurityGroupPolicies）用于查询安全组规则。
   */
  async DescribeSecurityGroupPolicies(
    req: DescribeSecurityGroupPoliciesRequest,
    cb?: (error: string, rep: DescribeSecurityGroupPoliciesResponse) => void
  ): Promise<DescribeSecurityGroupPoliciesResponse> {
    return this.request("DescribeSecurityGroupPolicies", req, cb)
  }

  /**
   * 本接口（DescribeAssistantCidr）用于查询辅助CIDR列表。
   */
  async DescribeAssistantCidr(
    req: DescribeAssistantCidrRequest,
    cb?: (error: string, rep: DescribeAssistantCidrResponse) => void
  ): Promise<DescribeAssistantCidrResponse> {
    return this.request("DescribeAssistantCidr", req, cb)
  }

  /**
   * 本接口（DescribeClassicLinkInstances）用于查询私有网络和基础网络设备互通列表。
   */
  async DescribeClassicLinkInstances(
    req: DescribeClassicLinkInstancesRequest,
    cb?: (error: string, rep: DescribeClassicLinkInstancesResponse) => void
  ): Promise<DescribeClassicLinkInstancesResponse> {
    return this.request("DescribeClassicLinkInstances", req, cb)
  }

  /**
   * 本接口（ClearRouteTableSelectionPolicies）用于清空指定云联网的路由表选择策略。
   */
  async ClearRouteTableSelectionPolicies(
    req: ClearRouteTableSelectionPoliciesRequest,
    cb?: (error: string, rep: ClearRouteTableSelectionPoliciesResponse) => void
  ): Promise<ClearRouteTableSelectionPoliciesResponse> {
    return this.request("ClearRouteTableSelectionPolicies", req, cb)
  }

  /**
   * EIP修改带宽询价
   */
  async InquiryPriceModifyAddressesBandwidth(
    req: InquiryPriceModifyAddressesBandwidthRequest,
    cb?: (error: string, rep: InquiryPriceModifyAddressesBandwidthResponse) => void
  ): Promise<InquiryPriceModifyAddressesBandwidthResponse> {
    return this.request("InquiryPriceModifyAddressesBandwidth", req, cb)
  }

  /**
     * 本接口（AllocateIPv6Addresses）用于申请一个或多个弹性公网IPv6（简称EIPv6）实例。

- EIPv6 是您在腾讯云某个地域可以独立申请和持有的，固定不变的公网 IPv6 地址，提供与弹性公网 IPv4 一致的产品体验。
- 通过弹性公网 IPv6，您可以快速将 EIPv6 实例绑定到云资源的内网 IPv6 地址上，实现为云资源快速开通 IPv6 公网带宽。
- 您还可以按需将 EIPv6 实例绑定到其他云资源上，从而屏蔽实例故障。
     */
  async AllocateIPv6Addresses(
    req: AllocateIPv6AddressesRequest,
    cb?: (error: string, rep: AllocateIPv6AddressesResponse) => void
  ): Promise<AllocateIPv6AddressesResponse> {
    return this.request("AllocateIPv6Addresses", req, cb)
  }

  /**
   * 本接口（ModifyAssistantCidr）用于批量修改辅助CIDR，支持新增和删除。
   */
  async ModifyAssistantCidr(
    req: ModifyAssistantCidrRequest,
    cb?: (error: string, rep: ModifyAssistantCidrResponse) => void
  ): Promise<ModifyAssistantCidrResponse> {
    return this.request("ModifyAssistantCidr", req, cb)
  }

  /**
   * 本接口（DeleteNatGatewayDestinationIpPortTranslationNatRule）用于删除NAT网关端口转发规则。
   */
  async DeleteNatGatewayDestinationIpPortTranslationNatRule(
    req: DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest,
    cb?: (error: string, rep: DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse) => void
  ): Promise<DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse> {
    return this.request("DeleteNatGatewayDestinationIpPortTranslationNatRule", req, cb)
  }

  /**
   * 本接口 (CreateTrafficPackages) 用于创建共享流量包。
   */
  async CreateTrafficPackages(
    req: CreateTrafficPackagesRequest,
    cb?: (error: string, rep: CreateTrafficPackagesResponse) => void
  ): Promise<CreateTrafficPackagesResponse> {
    return this.request("CreateTrafficPackages", req, cb)
  }

  /**
   * 本接口（DescribeSnapshotFiles）用于查询快照文件。
   */
  async DescribeSnapshotFiles(
    req: DescribeSnapshotFilesRequest,
    cb?: (error: string, rep: DescribeSnapshotFilesResponse) => void
  ): Promise<DescribeSnapshotFilesResponse> {
    return this.request("DescribeSnapshotFiles", req, cb)
  }

  /**
   * 本接口（CreateDhcpIp）用于创建DhcpIp。
   */
  async CreateDhcpIp(
    req: CreateDhcpIpRequest,
    cb?: (error: string, rep: CreateDhcpIpResponse) => void
  ): Promise<CreateDhcpIpResponse> {
    return this.request("CreateDhcpIp", req, cb)
  }

  /**
   * 本接口（ModifyVpcAttribute）用于修改私有网络（VPC）的相关属性。
   */
  async ModifyVpcAttribute(
    req: ModifyVpcAttributeRequest,
    cb?: (error: string, rep: ModifyVpcAttributeResponse) => void
  ): Promise<ModifyVpcAttributeResponse> {
    return this.request("ModifyVpcAttribute", req, cb)
  }

  /**
   * 本接口（ResumeSnapshotInstance）用于根据备份内容恢复安全组策略。
   */
  async ResumeSnapshotInstance(
    req: ResumeSnapshotInstanceRequest,
    cb?: (error: string, rep: ResumeSnapshotInstanceResponse) => void
  ): Promise<ResumeSnapshotInstanceResponse> {
    return this.request("ResumeSnapshotInstance", req, cb)
  }

  /**
   * 本接口（SetVpnGatewaysRenewFlag）用于设置VPNGW续费标记。
   */
  async SetVpnGatewaysRenewFlag(
    req: SetVpnGatewaysRenewFlagRequest,
    cb?: (error: string, rep: SetVpnGatewaysRenewFlagResponse) => void
  ): Promise<SetVpnGatewaysRenewFlagResponse> {
    return this.request("SetVpnGatewaysRenewFlag", req, cb)
  }

  /**
   * 本接口（DescribeSnapshotPolicies）用于查询快照策略。
   */
  async DescribeSnapshotPolicies(
    req: DescribeSnapshotPoliciesRequest,
    cb?: (error: string, rep: DescribeSnapshotPoliciesResponse) => void
  ): Promise<DescribeSnapshotPoliciesResponse> {
    return this.request("DescribeSnapshotPolicies", req, cb)
  }

  /**
     * 本接口（ModifyIp6AddressesBandwidth）用于调整传统弹性公网 IPv6 实例的带宽上限。

- 仅支持对传统弹性公网 IPv6 实例的带宽上限进行调整。
- 如需调整弹性公网 IPv6 实例的带宽上限，请使用 ModifyIPv6AddressesBandwidth 接口。
     */
  async ModifyIp6AddressesBandwidth(
    req: ModifyIp6AddressesBandwidthRequest,
    cb?: (error: string, rep: ModifyIp6AddressesBandwidthResponse) => void
  ): Promise<ModifyIp6AddressesBandwidthResponse> {
    return this.request("ModifyIp6AddressesBandwidth", req, cb)
  }

  /**
   * 本接口（CreateVpcEndPoint）用于创建终端节点。
   */
  async CreateVpcEndPoint(
    req: CreateVpcEndPointRequest,
    cb?: (error: string, rep: CreateVpcEndPointResponse) => void
  ): Promise<CreateVpcEndPointResponse> {
    return this.request("CreateVpcEndPoint", req, cb)
  }

  /**
     * 本接口（CreateSecurityGroupWithPolicies）用于创建新的安全组（SecurityGroup），并且可以同时添加安全组规则（SecurityGroupPolicy）。
* 每个账户下每个地域的每个项目的<a href="https://cloud.tencent.com/document/product/213/12453">安全组数量限制</a>。
* 新建的安全组的入站和出站规则默认都是全部拒绝，在创建后通常您需要再调用<a href="https://cloud.tencent.com/document/product/215/15807">CreateSecurityGroupPolicies</a>
将安全组的规则设置为需要的规则。

安全组规则说明：
* Version安全组规则版本号，用户每次更新安全规则版本会自动加1，防止您更新的路由规则已过期，不填不考虑冲突。
* Protocol字段支持输入TCP, UDP, ICMP, ICMPV6, GRE, ALL。
* CidrBlock字段允许输入符合cidr格式标准的任意字符串。(展开)在基础网络中，如果CidrBlock包含您的账户内的云服务器之外的设备在腾讯云的内网IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。
* Ipv6CidrBlock字段允许输入符合IPv6 cidr格式标准的任意字符串。(展开)在基础网络中，如果Ipv6CidrBlock包含您的账户内的云服务器之外的设备在腾讯云的内网IPv6，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。
* SecurityGroupId字段允许输入与待修改的安全组位于相同项目中的安全组ID，包括这个安全组ID本身，代表安全组下所有云服务器的内网IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个ID所关联的云服务器变化而变化，不需要重新修改。
* Port字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当Protocol字段是TCP或UDP时，Port字段才被接受，即Protocol字段不是TCP或UDP时，Protocol和Port是排他关系，不允许同时输入，否则会接口报错。
* Action字段只允许输入ACCEPT或DROP。
* CidrBlock, Ipv6CidrBlock, SecurityGroupId, AddressTemplate四者是排他关系，不允许同时输入，Protocol + Port和ServiceTemplate二者是排他关系，不允许同时输入。
* 请求中可以同时指定入站和出站两个方向的规则, 如果需要指定索引（PolicyIndex）参数, 多条规则的索引必须一致。
     */
  async CreateSecurityGroupWithPolicies(
    req: CreateSecurityGroupWithPoliciesRequest,
    cb?: (error: string, rep: CreateSecurityGroupWithPoliciesResponse) => void
  ): Promise<CreateSecurityGroupWithPoliciesResponse> {
    return this.request("CreateSecurityGroupWithPolicies", req, cb)
  }

  /**
   * 本接口（ResetTrafficMirrorSrcs）用于重置流量镜像实例采集对象。
   */
  async ResetTrafficMirrorSrcs(
    req: ResetTrafficMirrorSrcsRequest,
    cb?: (error: string, rep: ResetTrafficMirrorSrcsResponse) => void
  ): Promise<ResetTrafficMirrorSrcsResponse> {
    return this.request("ResetTrafficMirrorSrcs", req, cb)
  }

  /**
     * 本接口（ModifyTrafficMirrorAttribute）用于修改流量镜像实例属性。
注意：只支持修改名字和描述信息
     */
  async ModifyTrafficMirrorAttribute(
    req: ModifyTrafficMirrorAttributeRequest,
    cb?: (error: string, rep: ModifyTrafficMirrorAttributeResponse) => void
  ): Promise<ModifyTrafficMirrorAttributeResponse> {
    return this.request("ModifyTrafficMirrorAttribute", req, cb)
  }

  /**
   * 查询虚拟连接
   */
  async DescribeCdcNetPlanes(
    req?: DescribeCdcNetPlanesRequest,
    cb?: (error: string, rep: DescribeCdcNetPlanesResponse) => void
  ): Promise<DescribeCdcNetPlanesResponse> {
    return this.request("DescribeCdcNetPlanes", req, cb)
  }

  /**
   * 本接口（DeletePrivateNatGateway）用于删除私网NAT网关。
   */
  async DeletePrivateNatGateway(
    req: DeletePrivateNatGatewayRequest,
    cb?: (error: string, rep: DeletePrivateNatGatewayResponse) => void
  ): Promise<DeletePrivateNatGatewayResponse> {
    return this.request("DeletePrivateNatGateway", req, cb)
  }

  /**
   * 创建路由型VPN网关的目的路由
   */
  async CreateVpnGatewayRoutes(
    req: CreateVpnGatewayRoutesRequest,
    cb?: (error: string, rep: CreateVpnGatewayRoutesResponse) => void
  ): Promise<CreateVpnGatewayRoutesResponse> {
    return this.request("CreateVpnGatewayRoutes", req, cb)
  }
}
