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
const SecurityGroupLimitSet = models.SecurityGroupLimitSet;
const CreateRoutesRequest = models.CreateRoutesRequest;
const DescribeHaVipsResponse = models.DescribeHaVipsResponse;
const ModifyModuleSecurityGroupsRequest = models.ModifyModuleSecurityGroupsRequest;
const TerminateInstancesResponse = models.TerminateInstancesResponse;
const DescribeMonthPeakNetworkResponse = models.DescribeMonthPeakNetworkResponse;
const DescribeNetworkInterfacesRequest = models.DescribeNetworkInterfacesRequest;
const CreateSecurityGroupPoliciesResponse = models.CreateSecurityGroupPoliciesResponse;
const InstancePricesPartDetail = models.InstancePricesPartDetail;
const DescribeMonthPeakNetworkRequest = models.DescribeMonthPeakNetworkRequest;
const SystemDisk = models.SystemDisk;
const DescribeNodeResponse = models.DescribeNodeResponse;
const DescribeModuleRequest = models.DescribeModuleRequest;
const RebootInstancesRequest = models.RebootInstancesRequest;
const CreateDisksRequest = models.CreateDisksRequest;
const AttachDisksRequest = models.AttachDisksRequest;
const DescribeSnapshotsRequest = models.DescribeSnapshotsRequest;
const RemovePrivateIpAddressesRequest = models.RemovePrivateIpAddressesRequest;
const InstanceFamilyTypeConfig = models.InstanceFamilyTypeConfig;
const DescribeImageRequest = models.DescribeImageRequest;
const OsVersion = models.OsVersion;
const DescribeListenersResponse = models.DescribeListenersResponse;
const TargetsWeightRule = models.TargetsWeightRule;
const StartInstancesResponse = models.StartInstancesResponse;
const CreateVpcResponse = models.CreateVpcResponse;
const AssistantCidr = models.AssistantCidr;
const ModifyModuleIpDirectRequest = models.ModifyModuleIpDirectRequest;
const InstanceNetworkInfo = models.InstanceNetworkInfo;
const ResetInstancesMaxBandwidthResponse = models.ResetInstancesMaxBandwidthResponse;
const NodeInstanceNum = models.NodeInstanceNum;
const DeleteListenerRequest = models.DeleteListenerRequest;
const ResetInstancesMaxBandwidthRequest = models.ResetInstancesMaxBandwidthRequest;
const LoadBalancerInternetAccessible = models.LoadBalancerInternetAccessible;
const ResetRoutesRequest = models.ResetRoutesRequest;
const TerminateDisksRequest = models.TerminateDisksRequest;
const SecurityGroupAssociationStatistics = models.SecurityGroupAssociationStatistics;
const ModifyDefaultSubnetResponse = models.ModifyDefaultSubnetResponse;
const DescribeRouteTablesResponse = models.DescribeRouteTablesResponse;
const StopInstancesRequest = models.StopInstancesRequest;
const DetachNetworkInterfaceResponse = models.DetachNetworkInterfaceResponse;
const ImageTask = models.ImageTask;
const ModifyListenerRequest = models.ModifyListenerRequest;
const CreateImageRequest = models.CreateImageRequest;
const Instance = models.Instance;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DeleteLoadBalancerRequest = models.DeleteLoadBalancerRequest;
const DescribeVpcsRequest = models.DescribeVpcsRequest;
const DescribeRouteConflictsResponse = models.DescribeRouteConflictsResponse;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const BatchDeregisterTargetsRequest = models.BatchDeregisterTargetsRequest;
const ModifyListenerResponse = models.ModifyListenerResponse;
const DescribeTargetHealthResponse = models.DescribeTargetHealthResponse;
const ModifyDefaultSubnetRequest = models.ModifyDefaultSubnetRequest;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const Snapshot = models.Snapshot;
const AttachDisksResponse = models.AttachDisksResponse;
const DescribeLoadBalancersRequest = models.DescribeLoadBalancersRequest;
const DeleteRoutesResponse = models.DeleteRoutesResponse;
const DescribeCustomImageTaskRequest = models.DescribeCustomImageTaskRequest;
const DescribeSecurityGroupAssociationStatisticsResponse = models.DescribeSecurityGroupAssociationStatisticsResponse;
const AssignPrivateIpAddressesResponse = models.AssignPrivateIpAddressesResponse;
const PriceDetail = models.PriceDetail;
const ImportImageResponse = models.ImportImageResponse;
const DescribeSecurityGroupsRequest = models.DescribeSecurityGroupsRequest;
const DescribePriceRunInstanceResponse = models.DescribePriceRunInstanceResponse;
const DeleteImageResponse = models.DeleteImageResponse;
const ModifySubnetAttributeResponse = models.ModifySubnetAttributeResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const NetworkInterface = models.NetworkInterface;
const KeyPair = models.KeyPair;
const DescribeVpcsResponse = models.DescribeVpcsResponse;
const ModifySecurityGroupAttributeRequest = models.ModifySecurityGroupAttributeRequest;
const DescribePackingQuotaGroupResponse = models.DescribePackingQuotaGroupResponse;
const LoadBalancer = models.LoadBalancer;
const ModifyModuleNameResponse = models.ModifyModuleNameResponse;
const DescribePeakBaseOverviewRequest = models.DescribePeakBaseOverviewRequest;
const BatchModifyTargetWeightResponse = models.BatchModifyTargetWeightResponse;
const InstanceStatistic = models.InstanceStatistic;
const DeleteSecurityGroupPoliciesRequest = models.DeleteSecurityGroupPoliciesRequest;
const ImportCustomImageResponse = models.ImportCustomImageResponse;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const RouteConflict = models.RouteConflict;
const DeleteSubnetResponse = models.DeleteSubnetResponse;
const ISP = models.ISP;
const Address = models.Address;
const PeakBase = models.PeakBase;
const ReplaceRouteTableAssociationRequest = models.ReplaceRouteTableAssociationRequest;
const ModifyTargetWeightResponse = models.ModifyTargetWeightResponse;
const DescribeCustomImageTaskResponse = models.DescribeCustomImageTaskResponse;
const ISPCounter = models.ISPCounter;
const CreateModuleResponse = models.CreateModuleResponse;
const DescribePackingQuotaGroupRequest = models.DescribePackingQuotaGroupRequest;
const SecurityGroupPolicy = models.SecurityGroupPolicy;
const TerminateDisksResponse = models.TerminateDisksResponse;
const LoadBalancerHealth = models.LoadBalancerHealth;
const CreateListenerResponse = models.CreateListenerResponse;
const DeleteVpcRequest = models.DeleteVpcRequest;
const Disk = models.Disk;
const CreateSubnetResponse = models.CreateSubnetResponse;
const DescribeSecurityGroupPoliciesResponse = models.DescribeSecurityGroupPoliciesResponse;
const ModifySecurityGroupPoliciesRequest = models.ModifySecurityGroupPoliciesRequest;
const NetworkStorageRange = models.NetworkStorageRange;
const ReplaceRoutesRequest = models.ReplaceRoutesRequest;
const DescribeTargetHealthRequest = models.DescribeTargetHealthRequest;
const ModifyInstancesAttributeResponse = models.ModifyInstancesAttributeResponse;
const ModifySubnetAttributeRequest = models.ModifySubnetAttributeRequest;
const DisassociateAddressRequest = models.DisassociateAddressRequest;
const ModuleCounter = models.ModuleCounter;
const TaskInput = models.TaskInput;
const ModifyLoadBalancerAttributesResponse = models.ModifyLoadBalancerAttributesResponse;
const Tag = models.Tag;
const DescribeDefaultSubnetRequest = models.DescribeDefaultSubnetRequest;
const RunInstancesResponse = models.RunInstancesResponse;
const TargetHealth = models.TargetHealth;
const DescribeSecurityGroupLimitsResponse = models.DescribeSecurityGroupLimitsResponse;
const DisassociateInstancesKeyPairsRequest = models.DisassociateInstancesKeyPairsRequest;
const RouteTableAssociation = models.RouteTableAssociation;
const ModifyTargetPortResponse = models.ModifyTargetPortResponse;
const MonthNetwork = models.MonthNetwork;
const ResetRoutesResponse = models.ResetRoutesResponse;
const AllocateAddressesResponse = models.AllocateAddressesResponse;
const CreateImageResponse = models.CreateImageResponse;
const ModifyModuleNetworkRequest = models.ModifyModuleNetworkRequest;
const AddressTemplateSpecification = models.AddressTemplateSpecification;
const AssignIpv6AddressesRequest = models.AssignIpv6AddressesRequest;
const DescribeModuleDetailResponse = models.DescribeModuleDetailResponse;
const Backend = models.Backend;
const ModifyIpv6AddressesAttributeResponse = models.ModifyIpv6AddressesAttributeResponse;
const ImageUrl = models.ImageUrl;
const ModifyModuleSecurityGroupsResponse = models.ModifyModuleSecurityGroupsResponse;
const ReplaceSecurityGroupPolicyRequest = models.ReplaceSecurityGroupPolicyRequest;
const CreateKeyPairResponse = models.CreateKeyPairResponse;
const DeleteModuleResponse = models.DeleteModuleResponse;
const DescribeModuleDetailRequest = models.DescribeModuleDetailRequest;
const ModifyRouteTableAttributeRequest = models.ModifyRouteTableAttributeRequest;
const ModifyModuleNetworkResponse = models.ModifyModuleNetworkResponse;
const DescribeImportImageOsRequest = models.DescribeImportImageOsRequest;
const CreateKeyPairRequest = models.CreateKeyPairRequest;
const ModifyModuleIpDirectResponse = models.ModifyModuleIpDirectResponse;
const ResetInstancesPasswordRequest = models.ResetInstancesPasswordRequest;
const AssociateAddressResponse = models.AssociateAddressResponse;
const DescribeAddressesRequest = models.DescribeAddressesRequest;
const DescribeSecurityGroupPoliciesRequest = models.DescribeSecurityGroupPoliciesRequest;
const CreateSecurityGroupResponse = models.CreateSecurityGroupResponse;
const DeleteListenerResponse = models.DeleteListenerResponse;
const ResetInstancesRequest = models.ResetInstancesRequest;
const DeleteImageRequest = models.DeleteImageRequest;
const PeakNetworkRegionInfo = models.PeakNetworkRegionInfo;
const ModifyHaVipAttributeRequest = models.ModifyHaVipAttributeRequest;
const ModifyAddressesBandwidthRequest = models.ModifyAddressesBandwidthRequest;
const InstancesPrice = models.InstancesPrice;
const ModifyImageAttributeResponse = models.ModifyImageAttributeResponse;
const SimpleModule = models.SimpleModule;
const TagInfo = models.TagInfo;
const ModifyImageAttributeRequest = models.ModifyImageAttributeRequest;
const InstanceNetworkLimitConfig = models.InstanceNetworkLimitConfig;
const CreateModuleRequest = models.CreateModuleRequest;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const SetLoadBalancerSecurityGroupsRequest = models.SetLoadBalancerSecurityGroupsRequest;
const DescribeImportImageOsResponse = models.DescribeImportImageOsResponse;
const MigrateNetworkInterfaceResponse = models.MigrateNetworkInterfaceResponse;
const Module = models.Module;
const ListenerHealth = models.ListenerHealth;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const RunEIPDirectServiceEnabled = models.RunEIPDirectServiceEnabled;
const ModifyTargetPortRequest = models.ModifyTargetPortRequest;
const Ipv6Address = models.Ipv6Address;
const CreateNetworkInterfaceRequest = models.CreateNetworkInterfaceRequest;
const SetSecurityGroupForLoadbalancersRequest = models.SetSecurityGroupForLoadbalancersRequest;
const DescribeInstancesDeniedActionsRequest = models.DescribeInstancesDeniedActionsRequest;
const ModifyLoadBalancerAttributesRequest = models.ModifyLoadBalancerAttributesRequest;
const DeleteHaVipResponse = models.DeleteHaVipResponse;
const Province = models.Province;
const DescribeSubnetsRequest = models.DescribeSubnetsRequest;
const CreateSubnetRequest = models.CreateSubnetRequest;
const HaVip = models.HaVip;
const ModifyAddressesBandwidthResponse = models.ModifyAddressesBandwidthResponse;
const RunInstancesRequest = models.RunInstancesRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const InstanceTypeConfig = models.InstanceTypeConfig;
const AllocateAddressesRequest = models.AllocateAddressesRequest;
const ZoneInfo = models.ZoneInfo;
const ModifyInstancesAttributeRequest = models.ModifyInstancesAttributeRequest;
const ResetInstancesResponse = models.ResetInstancesResponse;
const DescribeNodeRequest = models.DescribeNodeRequest;
const ModifySecurityGroupAttributeResponse = models.ModifySecurityGroupAttributeResponse;
const ModifyModuleConfigRequest = models.ModifyModuleConfigRequest;
const Area = models.Area;
const ModifyAddressAttributeResponse = models.ModifyAddressAttributeResponse;
const DescribeInstanceVncUrlRequest = models.DescribeInstanceVncUrlRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const ReplaceRouteTableAssociationResponse = models.ReplaceRouteTableAssociationResponse;
const DescribeInstancesDeniedActionsResponse = models.DescribeInstancesDeniedActionsResponse;
const ReleaseIpv6AddressesRequest = models.ReleaseIpv6AddressesRequest;
const TaskOutput = models.TaskOutput;
const PhysicalPosition = models.PhysicalPosition;
const Listener = models.Listener;
const StartInstancesRequest = models.StartInstancesRequest;
const DeleteSnapshotsRequest = models.DeleteSnapshotsRequest;
const Placement = models.Placement;
const Target = models.Target;
const DeleteSnapshotsResponse = models.DeleteSnapshotsResponse;
const DescribeAddressesResponse = models.DescribeAddressesResponse;
const ModifyIpv6AddressesAttributeRequest = models.ModifyIpv6AddressesAttributeRequest;
const DeleteModuleRequest = models.DeleteModuleRequest;
const DisableRoutesResponse = models.DisableRoutesResponse;
const DescribeConfigResponse = models.DescribeConfigResponse;
const DataDisk = models.DataDisk;
const ModifyVpcAttributeResponse = models.ModifyVpcAttributeResponse;
const PrivateIpAddressSpecification = models.PrivateIpAddressSpecification;
const MigratePrivateIpAddressResponse = models.MigratePrivateIpAddressResponse;
const DeleteRouteTableResponse = models.DeleteRouteTableResponse;
const ModifyModuleDisableWanIpResponse = models.ModifyModuleDisableWanIpResponse;
const EnhancedService = models.EnhancedService;
const DescribeLoadBalanceTaskStatusRequest = models.DescribeLoadBalanceTaskStatusRequest;
const ModifyHaVipAttributeResponse = models.ModifyHaVipAttributeResponse;
const ModifyVpcAttributeRequest = models.ModifyVpcAttributeRequest;
const TagSpecification = models.TagSpecification;
const AttachNetworkInterfaceResponse = models.AttachNetworkInterfaceResponse;
const DescribeRouteTablesRequest = models.DescribeRouteTablesRequest;
const DescribeBaseOverviewRequest = models.DescribeBaseOverviewRequest;
const CreateHaVipResponse = models.CreateHaVipResponse;
const ImportImageRequest = models.ImportImageRequest;
const DiskChargePrepaid = models.DiskChargePrepaid;
const DisableRoutesRequest = models.DisableRoutesRequest;
const StopInstancesResponse = models.StopInstancesResponse;
const ModifyModuleNameRequest = models.ModifyModuleNameRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CreateListenerRequest = models.CreateListenerRequest;
const ReleaseAddressesRequest = models.ReleaseAddressesRequest;
const CreateRouteTableRequest = models.CreateRouteTableRequest;
const ModifyModuleConfigResponse = models.ModifyModuleConfigResponse;
const MigrateNetworkInterfaceRequest = models.MigrateNetworkInterfaceRequest;
const SrcImage = models.SrcImage;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const ModifyAddressAttributeRequest = models.ModifyAddressAttributeRequest;
const DescribePriceRunInstanceRequest = models.DescribePriceRunInstanceRequest;
const DescribeTargetsResponse = models.DescribeTargetsResponse;
const ImageOsList = models.ImageOsList;
const BatchModifyTargetWeightRequest = models.BatchModifyTargetWeightRequest;
const BatchTarget = models.BatchTarget;
const City = models.City;
const PeakNetwork = models.PeakNetwork;
const RebootInstancesResponse = models.RebootInstancesResponse;
const DeleteSecurityGroupPoliciesResponse = models.DeleteSecurityGroupPoliciesResponse;
const DescribeHaVipsRequest = models.DescribeHaVipsRequest;
const BatchRegisterTargetsRequest = models.BatchRegisterTargetsRequest;
const RemovePrivateIpAddressesResponse = models.RemovePrivateIpAddressesResponse;
const PublicIPAddressInfo = models.PublicIPAddressInfo;
const ModifyModuleImageResponse = models.ModifyModuleImageResponse;
const DeleteLoadBalancerListenersResponse = models.DeleteLoadBalancerListenersResponse;
const VpcInfo = models.VpcInfo;
const ModuleItem = models.ModuleItem;
const CreateSecurityGroupPoliciesRequest = models.CreateSecurityGroupPoliciesRequest;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const ModifyRouteTableAttributeResponse = models.ModifyRouteTableAttributeResponse;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const ReleaseIpv6AddressesResponse = models.ReleaseIpv6AddressesResponse;
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const BatchDeregisterTargetsResponse = models.BatchDeregisterTargetsResponse;
const SetLoadBalancerSecurityGroupsResponse = models.SetLoadBalancerSecurityGroupsResponse;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const Internet = models.Internet;
const DescribeModuleResponse = models.DescribeModuleResponse;
const ImageLimitConfig = models.ImageLimitConfig;
const EipQuota = models.EipQuota;
const DescribeSubnetsResponse = models.DescribeSubnetsResponse;
const SetSecurityGroupForLoadbalancersResponse = models.SetSecurityGroupForLoadbalancersResponse;
const DescribeDefaultSubnetResponse = models.DescribeDefaultSubnetResponse;
const DeleteSubnetRequest = models.DeleteSubnetRequest;
const Position = models.Position;
const RouteTable = models.RouteTable;
const DeleteNetworkInterfaceRequest = models.DeleteNetworkInterfaceRequest;
const DescribeTargetsRequest = models.DescribeTargetsRequest;
const ReplaceRoutesResponse = models.ReplaceRoutesResponse;
const DeleteHaVipRequest = models.DeleteHaVipRequest;
const DeleteLoadBalancerListenersRequest = models.DeleteLoadBalancerListenersRequest;
const MigratePrivateIpAddressRequest = models.MigratePrivateIpAddressRequest;
const DeleteRouteTableRequest = models.DeleteRouteTableRequest;
const DetachDisksRequest = models.DetachDisksRequest;
const DescribeConfigRequest = models.DescribeConfigRequest;
const NetworkInterfaceAttachment = models.NetworkInterfaceAttachment;
const BatchRegisterTargetsResponse = models.BatchRegisterTargetsResponse;
const ImportCustomImageRequest = models.ImportCustomImageRequest;
const ReleaseAddressesResponse = models.ReleaseAddressesResponse;
const ReplaceSecurityGroupPolicyResponse = models.ReplaceSecurityGroupPolicyResponse;
const ModifyPrivateIpAddressesAttributeResponse = models.ModifyPrivateIpAddressesAttributeResponse;
const RuleHealth = models.RuleHealth;
const DeleteSecurityGroupResponse = models.DeleteSecurityGroupResponse;
const CreateNetworkInterfaceResponse = models.CreateNetworkInterfaceResponse;
const Node = models.Node;
const DescribeDisksResponse = models.DescribeDisksResponse;
const ZoneInstanceCountISP = models.ZoneInstanceCountISP;
const DescribeAddressQuotaRequest = models.DescribeAddressQuotaRequest;
const DescribeInstanceTypeConfigResponse = models.DescribeInstanceTypeConfigResponse;
const HealthCheck = models.HealthCheck;
const SecurityGroupPolicySet = models.SecurityGroupPolicySet;
const AssignIpv6AddressesResponse = models.AssignIpv6AddressesResponse;
const CreateRoutesResponse = models.CreateRoutesResponse;
const DescribeSecurityGroupsResponse = models.DescribeSecurityGroupsResponse;
const InstanceFamilyConfig = models.InstanceFamilyConfig;
const ModifySecurityGroupPoliciesResponse = models.ModifySecurityGroupPoliciesResponse;
const ServiceTemplateSpecification = models.ServiceTemplateSpecification;
const PackingQuotaInfo = models.PackingQuotaInfo;
const Image = models.Image;
const DetachNetworkInterfaceRequest = models.DetachNetworkInterfaceRequest;
const ModifyTargetWeightRequest = models.ModifyTargetWeightRequest;
const DescribeRouteConflictsRequest = models.DescribeRouteConflictsRequest;
const Subnet = models.Subnet;
const AttachNetworkInterfaceRequest = models.AttachNetworkInterfaceRequest;
const ResetInstancesPasswordResponse = models.ResetInstancesPasswordResponse;
const SecurityGroup = models.SecurityGroup;
const ModifyModuleDisableWanIpRequest = models.ModifyModuleDisableWanIpRequest;
const DescribeInstanceVncUrlResponse = models.DescribeInstanceVncUrlResponse;
const DisassociateAddressResponse = models.DisassociateAddressResponse;
const DescribeInstanceTypeConfigRequest = models.DescribeInstanceTypeConfigRequest;
const DeleteRoutesRequest = models.DeleteRoutesRequest;
const AssociateAddressRequest = models.AssociateAddressRequest;
const DescribePeakNetworkOverviewResponse = models.DescribePeakNetworkOverviewResponse;
const DescribeLoadBalanceTaskStatusResponse = models.DescribeLoadBalanceTaskStatusResponse;
const DiskInfo = models.DiskInfo;
const Filter = models.Filter;
const DescribeSnapshotsResponse = models.DescribeSnapshotsResponse;
const CreateHaVipRequest = models.CreateHaVipRequest;
const CreateDisksResponse = models.CreateDisksResponse;
const DescribeAddressQuotaResponse = models.DescribeAddressQuotaResponse;
const ZoneInstanceInfo = models.ZoneInstanceInfo;
const DeleteLoadBalancerResponse = models.DeleteLoadBalancerResponse;
const DeleteSecurityGroupRequest = models.DeleteSecurityGroupRequest;
const CreateRouteTableResponse = models.CreateRouteTableResponse;
const DescribeDisksRequest = models.DescribeDisksRequest;
const ModifyPrivateIpAddressesAttributeRequest = models.ModifyPrivateIpAddressesAttributeRequest;
const DetachDisksResponse = models.DetachDisksResponse;
const CreateSecurityGroupRequest = models.CreateSecurityGroupRequest;
const DescribeSecurityGroupLimitsRequest = models.DescribeSecurityGroupLimitsRequest;
const PrivateIPAddressInfo = models.PrivateIPAddressInfo;
const DisassociateInstancesKeyPairsResponse = models.DisassociateInstancesKeyPairsResponse;
const TerminateInstancesRequest = models.TerminateInstancesRequest;
const DeleteNetworkInterfaceResponse = models.DeleteNetworkInterfaceResponse;
const DescribePeakNetworkOverviewRequest = models.DescribePeakNetworkOverviewRequest;
const EnableRoutesRequest = models.EnableRoutesRequest;
const OperatorAction = models.OperatorAction;
const PeakFamilyInfo = models.PeakFamilyInfo;
const DescribePeakBaseOverviewResponse = models.DescribePeakBaseOverviewResponse;
const DescribeImageResponse = models.DescribeImageResponse;
const ListenerBackend = models.ListenerBackend;
const RegionInfo = models.RegionInfo;
const PackingQuotaGroup = models.PackingQuotaGroup;
const DescribeNetworkInterfacesResponse = models.DescribeNetworkInterfacesResponse;
const EnableRoutesResponse = models.EnableRoutesResponse;
const AssignPrivateIpAddressesRequest = models.AssignPrivateIpAddressesRequest;
const CreateVpcRequest = models.CreateVpcRequest;
const DescribeSecurityGroupAssociationStatisticsRequest = models.DescribeSecurityGroupAssociationStatisticsRequest;
const Country = models.Country;
const Route = models.Route;
const DescribeListenersRequest = models.DescribeListenersRequest;
const DeleteVpcResponse = models.DeleteVpcResponse;
const ModifyModuleImageRequest = models.ModifyModuleImageRequest;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const InstanceOperator = models.InstanceOperator;
const DescribeBaseOverviewResponse = models.DescribeBaseOverviewResponse;
const AddressInfo = models.AddressInfo;


/**
 * ecm client
 * @class
 */
class EcmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ecm.tencentcloudapi.com", "2019-07-19", credential, region, profile);
    }
    
    /**
     * 替换单条安全组路由规则, 单个请求中只能替换单个方向的一条规则, 必须要指定索引（PolicyIndex）。
     * @param {ReplaceSecurityGroupPolicyRequest} req
     * @param {function(string, ReplaceSecurityGroupPolicyResponse):void} cb
     * @public
     */
    ReplaceSecurityGroupPolicy(req, cb) {
        let resp = new ReplaceSecurityGroupPolicyResponse();
        this.request("ReplaceSecurityGroupPolicy", req, resp, cb);
    }

    /**
     * 获取带宽硬盘等数据的限制
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        let resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }

    /**
     * 查询EIP异步任务执行结果
     * @param {DescribeTaskResultRequest} req
     * @param {function(string, DescribeTaskResultResponse):void} cb
     * @public
     */
    DescribeTaskResult(req, cb) {
        let resp = new DescribeTaskResultResponse();
        this.request("DescribeTaskResult", req, resp, cb);
    }

    /**
     * 修改模块名称
     * @param {ModifyModuleNameRequest} req
     * @param {function(string, ModifyModuleNameResponse):void} cb
     * @public
     */
    ModifyModuleName(req, cb) {
        let resp = new ModifyModuleNameResponse();
        this.request("ModifyModuleName", req, resp, cb);
    }

    /**
     * 查询路由表对象列表
     * @param {DescribeRouteTablesRequest} req
     * @param {function(string, DescribeRouteTablesResponse):void} cb
     * @public
     */
    DescribeRouteTables(req, cb) {
        let resp = new DescribeRouteTablesResponse();
        this.request("DescribeRouteTables", req, resp, cb);
    }

    /**
     * 创建了VPC后，系统会创建一个默认路由表，所有新建的子网都会关联到默认路由表。默认情况下您可以直接使用默认路由表来管理您的路由策略。当您的路由策略较多时，您可以调用创建路由表接口创建更多路由表管理您的路由策略。
     * @param {CreateRouteTableRequest} req
     * @param {function(string, CreateRouteTableResponse):void} cb
     * @public
     */
    CreateRouteTable(req, cb) {
        let resp = new CreateRouteTableResponse();
        this.request("CreateRouteTable", req, resp, cb);
    }

    /**
     * 批量解绑后端服务。
     * @param {BatchDeregisterTargetsRequest} req
     * @param {function(string, BatchDeregisterTargetsResponse):void} cb
     * @public
     */
    BatchDeregisterTargets(req, cb) {
        let resp = new BatchDeregisterTargetsResponse();
        this.request("BatchDeregisterTargets", req, resp, cb);
    }

    /**
     * 修改实例的属性。
     * @param {ModifyInstancesAttributeRequest} req
     * @param {function(string, ModifyInstancesAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesAttribute(req, cb) {
        let resp = new ModifyInstancesAttributeResponse();
        this.request("ModifyInstancesAttribute", req, resp, cb);
    }

    /**
     * 对某个路由表名称和所有路由策略（Route）进行重新设置
     * @param {ResetRoutesRequest} req
     * @param {function(string, ResetRoutesResponse):void} cb
     * @public
     */
    ResetRoutes(req, cb) {
        let resp = new ResetRoutesResponse();
        this.request("ResetRoutes", req, resp, cb);
    }

    /**
     * 用于修改弹性网卡内网IP属性。
     * @param {ModifyPrivateIpAddressesAttributeRequest} req
     * @param {function(string, ModifyPrivateIpAddressesAttributeResponse):void} cb
     * @public
     */
    ModifyPrivateIpAddressesAttribute(req, cb) {
        let resp = new ModifyPrivateIpAddressesAttributeResponse();
        this.request("ModifyPrivateIpAddressesAttribute", req, resp, cb);
    }

    /**
     * 创建ECM实例。
     * @param {RunInstancesRequest} req
     * @param {function(string, RunInstancesResponse):void} cb
     * @public
     */
    RunInstances(req, cb) {
        let resp = new RunInstancesResponse();
        this.request("RunInstances", req, resp, cb);
    }

    /**
     * 从CVM产品导入镜像到ECM
     * @param {ImportImageRequest} req
     * @param {function(string, ImportImageResponse):void} cb
     * @public
     */
    ImportImage(req, cb) {
        let resp = new ImportImageResponse();
        this.request("ImportImage", req, resp, cb);
    }

    /**
     * 查询弹性公网IP列表
     * @param {DescribeAddressesRequest} req
     * @param {function(string, DescribeAddressesResponse):void} cb
     * @public
     */
    DescribeAddresses(req, cb) {
        let resp = new DescribeAddressesResponse();
        this.request("DescribeAddresses", req, resp, cb);
    }

    /**
     * 修改模块的默认镜像
     * @param {ModifyModuleImageRequest} req
     * @param {function(string, ModifyModuleImageResponse):void} cb
     * @public
     */
    ModifyModuleImage(req, cb) {
        let resp = new ModifyModuleImageResponse();
        this.request("ModifyModuleImage", req, resp, cb);
    }

    /**
     * 查询负载均衡的监听器列表。
     * @param {DescribeListenersRequest} req
     * @param {function(string, DescribeListenersResponse):void} cb
     * @public
     */
    DescribeListeners(req, cb) {
        let resp = new DescribeListenersResponse();
        this.request("DescribeListeners", req, resp, cb);
    }

    /**
     * 本接口(CreateImage)用于将实例的系统盘制作为新镜像，创建后的镜像可以用于创建实例。
     * @param {CreateImageRequest} req
     * @param {function(string, CreateImageResponse):void} cb
     * @public
     */
    CreateImage(req, cb) {
        let resp = new CreateImageResponse();
        this.request("CreateImage", req, resp, cb);
    }

    /**
     * 获取节点列表
     * @param {DescribeNodeRequest} req
     * @param {function(string, DescribeNodeResponse):void} cb
     * @public
     */
    DescribeNode(req, cb) {
        let resp = new DescribeNodeResponse();
        this.request("DescribeNode", req, resp, cb);
    }

    /**
     * 查询导入镜像任务
     * @param {DescribeCustomImageTaskRequest} req
     * @param {function(string, DescribeCustomImageTaskResponse):void} cb
     * @public
     */
    DescribeCustomImageTask(req, cb) {
        let resp = new DescribeCustomImageTaskResponse();
        this.request("DescribeCustomImageTask", req, resp, cb);
    }

    /**
     * 修改子网关联的路由表，一个子网只能关联一个路由表。
     * @param {ReplaceRouteTableAssociationRequest} req
     * @param {function(string, ReplaceRouteTableAssociationResponse):void} cb
     * @public
     */
    ReplaceRouteTableAssociation(req, cb) {
        let resp = new ReplaceRouteTableAssociationResponse();
        this.request("ReplaceRouteTableAssociation", req, resp, cb);
    }

    /**
     * 查询负载均衡实例列表。
     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        let resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }

    /**
     * 查询负载均衡相关的任务状态
     * @param {DescribeLoadBalanceTaskStatusRequest} req
     * @param {function(string, DescribeLoadBalanceTaskStatusResponse):void} cb
     * @public
     */
    DescribeLoadBalanceTaskStatus(req, cb) {
        let resp = new DescribeLoadBalanceTaskStatusResponse();
        this.request("DescribeLoadBalanceTaskStatus", req, resp, cb);
    }

    /**
     * 查询私有网络列表
     * @param {DescribeVpcsRequest} req
     * @param {function(string, DescribeVpcsResponse):void} cb
     * @public
     */
    DescribeVpcs(req, cb) {
        let resp = new DescribeVpcsResponse();
        this.request("DescribeVpcs", req, resp, cb);
    }

    /**
     * 批量修改监听器绑定的后端机器的转发权重。
     * @param {BatchModifyTargetWeightRequest} req
     * @param {function(string, BatchModifyTargetWeightResponse):void} cb
     * @public
     */
    BatchModifyTargetWeight(req, cb) {
        let resp = new BatchModifyTargetWeightResponse();
        this.request("BatchModifyTargetWeight", req, resp, cb);
    }

    /**
     * 展示镜像列表
     * @param {DescribeImageRequest} req
     * @param {function(string, DescribeImageResponse):void} cb
     * @public
     */
    DescribeImage(req, cb) {
        let resp = new DescribeImageResponse();
        this.request("DescribeImage", req, resp, cb);
    }

    /**
     * 解绑安全组
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }

    /**
     * 弹性网卡迁移
     * @param {MigrateNetworkInterfaceRequest} req
     * @param {function(string, MigrateNetworkInterfaceResponse):void} cb
     * @public
     */
    MigrateNetworkInterface(req, cb) {
        let resp = new MigrateNetworkInterfaceResponse();
        this.request("MigrateNetworkInterface", req, resp, cb);
    }

    /**
     * 调整弹性公网IP带宽

     * @param {ModifyAddressesBandwidthRequest} req
     * @param {function(string, ModifyAddressesBandwidthResponse):void} cb
     * @public
     */
    ModifyAddressesBandwidth(req, cb) {
        let resp = new ModifyAddressesBandwidthResponse();
        this.request("ModifyAddressesBandwidth", req, resp, cb);
    }

    /**
     * 创建子网，若创建成功，则此子网会成为此可用区的默认子网。
     * @param {CreateSubnetRequest} req
     * @param {function(string, CreateSubnetResponse):void} cb
     * @public
     */
    CreateSubnet(req, cb) {
        let resp = new CreateSubnetResponse();
        this.request("CreateSubnet", req, resp, cb);
    }

    /**
     * 重置实例的最大带宽上限。
     * @param {ResetInstancesMaxBandwidthRequest} req
     * @param {function(string, ResetInstancesMaxBandwidthResponse):void} cb
     * @public
     */
    ResetInstancesMaxBandwidth(req, cb) {
        let resp = new ResetInstancesMaxBandwidthResponse();
        this.request("ResetInstancesMaxBandwidth", req, resp, cb);
    }

    /**
     * 获取模块列表
     * @param {DescribeModuleRequest} req
     * @param {function(string, DescribeModuleResponse):void} cb
     * @public
     */
    DescribeModule(req, cb) {
        let resp = new DescribeModuleResponse();
        this.request("DescribeModule", req, resp, cb);
    }

    /**
     * 只有状态为STOPPED的实例才可以进行此操作；接口调用成功时，实例会进入STARTING状态；启动实例成功时，实例会进入RUNNING状态。
     * @param {StartInstancesRequest} req
     * @param {function(string, StartInstancesResponse):void} cb
     * @public
     */
    StartInstances(req, cb) {
        let resp = new StartInstancesResponse();
        this.request("StartInstances", req, resp, cb);
    }

    /**
     * 删除负载均衡监听器。
     * @param {DeleteListenerRequest} req
     * @param {function(string, DeleteListenerResponse):void} cb
     * @public
     */
    DeleteListener(req, cb) {
        let resp = new DeleteListenerResponse();
        this.request("DeleteListener", req, resp, cb);
    }

    /**
     * 解绑弹性公网IP（简称 EIP）
只有状态为 BIND 和 BIND_ENI 的 EIP 才能进行解绑定操作。
EIP 如果被封堵，则不能进行解绑定操作。
     * @param {DisassociateAddressRequest} req
     * @param {function(string, DisassociateAddressResponse):void} cb
     * @public
     */
    DisassociateAddress(req, cb) {
        let resp = new DisassociateAddressResponse();
        this.request("DisassociateAddress", req, resp, cb);
    }

    /**
     * 创建私有网络
     * @param {CreateVpcRequest} req
     * @param {function(string, CreateVpcResponse):void} cb
     * @public
     */
    CreateVpc(req, cb) {
        let resp = new CreateVpcResponse();
        this.request("CreateVpc", req, resp, cb);
    }

    /**
     * 修改负载均衡实例的属性。
     * @param {ModifyLoadBalancerAttributesRequest} req
     * @param {function(string, ModifyLoadBalancerAttributesResponse):void} cb
     * @public
     */
    ModifyLoadBalancerAttributes(req, cb) {
        let resp = new ModifyLoadBalancerAttributesResponse();
        this.request("ModifyLoadBalancerAttributes", req, resp, cb);
    }

    /**
     * 本接口（AttachDisks）用于挂载云硬盘。
 
* 支持批量操作，将多块云盘挂载到同一云主机。如果多个云盘中存在不允许挂载的云盘，则操作不执行，返回特定的错误码。
* 本接口为异步接口，当挂载云盘的请求成功返回时，表示后台已发起挂载云盘的操作，可通过接口[DescribeDisks](/document/product/362/16315)来查询对应云盘的状态，如果云盘的状态由“ATTACHING”变为“ATTACHED”，则为挂载成功。
     * @param {AttachDisksRequest} req
     * @param {function(string, AttachDisksResponse):void} cb
     * @public
     */
    AttachDisks(req, cb) {
        let resp = new AttachDisksResponse();
        this.request("AttachDisks", req, resp, cb);
    }

    /**
     * 设置负载均衡实例的安全组。
     * @param {SetLoadBalancerSecurityGroupsRequest} req
     * @param {function(string, SetLoadBalancerSecurityGroupsResponse):void} cb
     * @public
     */
    SetLoadBalancerSecurityGroups(req, cb) {
        let resp = new SetLoadBalancerSecurityGroupsResponse();
        this.request("SetLoadBalancerSecurityGroups", req, resp, cb);
    }

    /**
     * 申请一个或多个弹性公网IP（简称 EIP）
     * @param {AllocateAddressesRequest} req
     * @param {function(string, AllocateAddressesResponse):void} cb
     * @public
     */
    AllocateAddresses(req, cb) {
        let resp = new AllocateAddressesResponse();
        this.request("AllocateAddresses", req, resp, cb);
    }

    /**
     * 修改模块是否禁止分配外网ip的属性。
     * @param {ModifyModuleDisableWanIpRequest} req
     * @param {function(string, ModifyModuleDisableWanIpResponse):void} cb
     * @public
     */
    ModifyModuleDisableWanIp(req, cb) {
        let resp = new ModifyModuleDisableWanIpResponse();
        this.request("ModifyModuleDisableWanIp", req, resp, cb);
    }

    /**
     * 修改负载均衡监听器属性。
     * @param {ModifyListenerRequest} req
     * @param {function(string, ModifyListenerResponse):void} cb
     * @public
     */
    ModifyListener(req, cb) {
        let resp = new ModifyListenerResponse();
        this.request("ModifyListener", req, resp, cb);
    }

    /**
     * 用于解除实例的密钥绑定关系。
     * @param {DisassociateInstancesKeyPairsRequest} req
     * @param {function(string, DisassociateInstancesKeyPairsResponse):void} cb
     * @public
     */
    DisassociateInstancesKeyPairs(req, cb) {
        let resp = new DisassociateInstancesKeyPairsResponse();
        this.request("DisassociateInstancesKeyPairs", req, resp, cb);
    }

    /**
     * 将弹性公网IP（简称 EIP）绑定到实例或弹性网卡的指定内网 IP 上。
将 EIP 绑定到实例（ECM）上，其本质是将 EIP 绑定到实例上主网卡的主内网 IP 上。
将 EIP 绑定到指定网卡的内网 IP上，内网IP已经绑定了EIP或普通公网IP，则反馈失败。必须先解绑该 EIP，才能再绑定新的。
只有状态为 UNBIND 的 EIP 才能够绑定内网IP。
     * @param {AssociateAddressRequest} req
     * @param {function(string, AssociateAddressResponse):void} cb
     * @public
     */
    AssociateAddress(req, cb) {
        let resp = new AssociateAddressResponse();
        this.request("AssociateAddress", req, resp, cb);
    }

    /**
     * 删除子网，若子网为可用区下的默认子网，则默认子网会回退到系统自动创建的默认子网，非用户最新创建的子网。若默认子网不满足需求，可调用设置默认子网接口设置。
     * @param {DeleteSubnetRequest} req
     * @param {function(string, DeleteSubnetResponse):void} cb
     * @public
     */
    DeleteSubnet(req, cb) {
        let resp = new DeleteSubnetResponse();
        this.request("DeleteSubnet", req, resp, cb);
    }

    /**
     * 批量绑定后端目标。
     * @param {BatchRegisterTargetsRequest} req
     * @param {function(string, BatchRegisterTargetsResponse):void} cb
     * @public
     */
    BatchRegisterTargets(req, cb) {
        let resp = new BatchRegisterTargetsResponse();
        this.request("BatchRegisterTargets", req, resp, cb);
    }

    /**
     * 通过实例id获取当前禁止的操作
     * @param {DescribeInstancesDeniedActionsRequest} req
     * @param {function(string, DescribeInstancesDeniedActionsResponse):void} cb
     * @public
     */
    DescribeInstancesDeniedActions(req, cb) {
        let resp = new DescribeInstancesDeniedActionsResponse();
        this.request("DescribeInstancesDeniedActions", req, resp, cb);
    }

    /**
     * 创建弹性网卡
     * @param {CreateNetworkInterfaceRequest} req
     * @param {function(string, CreateNetworkInterfaceResponse):void} cb
     * @public
     */
    CreateNetworkInterface(req, cb) {
        let resp = new CreateNetworkInterfaceResponse();
        this.request("CreateNetworkInterface", req, resp, cb);
    }

    /**
     * 只有处于"RUNNING"状态的实例才能够进行关机操作；
调用成功时，实例会进入STOPPING状态；关闭实例成功时，实例会进入STOPPED状态；
支持强制关闭，强制关机的效果等同于关闭物理计算机的电源开关，强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
     * @param {StopInstancesRequest} req
     * @param {function(string, StopInstancesResponse):void} cb
     * @public
     */
    StopInstances(req, cb) {
        let resp = new StopInstancesResponse();
        this.request("StopInstances", req, resp, cb);
    }

    /**
     * 查询外部导入镜像支持的OS列表
     * @param {DescribeImportImageOsRequest} req
     * @param {function(string, DescribeImportImageOsResponse):void} cb
     * @public
     */
    DescribeImportImageOs(req, cb) {
        let resp = new DescribeImportImageOsResponse();
        this.request("DescribeImportImageOs", req, resp, cb);
    }

    /**
     * 获取客户节点上的出入带宽月峰和计费带宽信息
     * @param {DescribeMonthPeakNetworkRequest} req
     * @param {function(string, DescribeMonthPeakNetworkResponse):void} cb
     * @public
     */
    DescribeMonthPeakNetwork(req, cb) {
        let resp = new DescribeMonthPeakNetworkResponse();
        this.request("DescribeMonthPeakNetwork", req, resp, cb);
    }

    /**
     * 弹性网卡解绑云主机
     * @param {DetachNetworkInterfaceRequest} req
     * @param {function(string, DetachNetworkInterfaceResponse):void} cb
     * @public
     */
    DetachNetworkInterface(req, cb) {
        let resp = new DetachNetworkInterfaceResponse();
        this.request("DetachNetworkInterface", req, resp, cb);
    }

    /**
     * 重装实例，若指定了ImageId参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装；若未指定密码，则密码通过站内信形式随后发送。
     * @param {ResetInstancesRequest} req
     * @param {function(string, ResetInstancesResponse):void} cb
     * @public
     */
    ResetInstances(req, cb) {
        let resp = new ResetInstancesResponse();
        this.request("ResetInstances", req, resp, cb);
    }

    /**
     * 本接口（TerminateDisks）用于退还云硬盘。

* 不再使用的云盘，可通过本接口主动退还。
* 本接口支持退还预付费云盘和按小时后付费云盘。按小时后付费云盘可直接退还，预付费云盘需符合退还规则。
* 支持批量操作，每次请求批量云硬盘的上限为50。如果批量云盘存在不允许操作的，请求会以特定错误码返回。
     * @param {TerminateDisksRequest} req
     * @param {function(string, TerminateDisksResponse):void} cb
     * @public
     */
    TerminateDisks(req, cb) {
        let resp = new TerminateDisksResponse();
        this.request("TerminateDisks", req, resp, cb);
    }

    /**
     * 修改监听器绑定的后端机器的端口。
     * @param {ModifyTargetPortRequest} req
     * @param {function(string, ModifyTargetPortResponse):void} cb
     * @public
     */
    ModifyTargetPort(req, cb) {
        let resp = new ModifyTargetPortResponse();
        this.request("ModifyTargetPort", req, resp, cb);
    }

    /**
     * 删除弹性网卡
     * @param {DeleteNetworkInterfaceRequest} req
     * @param {function(string, DeleteNetworkInterfaceResponse):void} cb
     * @public
     */
    DeleteNetworkInterface(req, cb) {
        let resp = new DeleteNetworkInterfaceResponse();
        this.request("DeleteNetworkInterface", req, resp, cb);
    }

    /**
     * 删除业务模块
     * @param {DeleteModuleRequest} req
     * @param {function(string, DeleteModuleResponse):void} cb
     * @public
     */
    DeleteModule(req, cb) {
        let resp = new DeleteModuleResponse();
        this.request("DeleteModule", req, resp, cb);
    }

    /**
     * 本接口（UnassignIpv6Addresses）用于释放弹性网卡IPv6地址。
     * @param {ReleaseIpv6AddressesRequest} req
     * @param {function(string, ReleaseIpv6AddressesResponse):void} cb
     * @public
     */
    ReleaseIpv6Addresses(req, cb) {
        let resp = new ReleaseIpv6AddressesResponse();
        this.request("ReleaseIpv6Addresses", req, resp, cb);
    }

    /**
     * 获取负载均衡后端服务的健康检查状态。
     * @param {DescribeTargetHealthRequest} req
     * @param {function(string, DescribeTargetHealthResponse):void} cb
     * @public
     */
    DescribeTargetHealth(req, cb) {
        let resp = new DescribeTargetHealthResponse();
        this.request("DescribeTargetHealth", req, resp, cb);
    }

    /**
     * 替换路由策略
     * @param {ReplaceRoutesRequest} req
     * @param {function(string, ReplaceRoutesResponse):void} cb
     * @public
     */
    ReplaceRoutes(req, cb) {
        let resp = new ReplaceRoutesResponse();
        this.request("ReplaceRoutes", req, resp, cb);
    }

    /**
     * 查询自定义路由策略与云联网路由策略冲突列表
     * @param {DescribeRouteConflictsRequest} req
     * @param {function(string, DescribeRouteConflictsResponse):void} cb
     * @public
     */
    DescribeRouteConflicts(req, cb) {
        let resp = new DescribeRouteConflictsResponse();
        this.request("DescribeRouteConflicts", req, resp, cb);
    }

    /**
     * 本接口（DetachDisks）用于卸载云硬盘。

* 支持批量操作，卸载挂载在同一主机上的多块云盘。如果多块云盘中存在不允许卸载的云盘，则操作不执行，返回特定的错误码。
* 本接口为异步接口，当请求成功返回时，云盘并未立即从主机卸载，可通过接口[DescribeDisks](/document/product/362/16315)来查询对应云盘的状态，如果云盘的状态由“ATTACHED”变为“UNATTACHED”，则为卸载成功。
     * @param {DetachDisksRequest} req
     * @param {function(string, DetachDisksResponse):void} cb
     * @public
     */
    DetachDisks(req, cb) {
        let resp = new DetachDisksResponse();
        this.request("DetachDisks", req, resp, cb);
    }

    /**
     * 禁用已启用的子网路由
     * @param {DisableRoutesRequest} req
     * @param {function(string, DisableRoutesResponse):void} cb
     * @public
     */
    DisableRoutes(req, cb) {
        let resp = new DisableRoutesResponse();
        this.request("DisableRoutes", req, resp, cb);
    }

    /**
     * 查询实例价格
     * @param {DescribePriceRunInstanceRequest} req
     * @param {function(string, DescribePriceRunInstanceResponse):void} cb
     * @public
     */
    DescribePriceRunInstance(req, cb) {
        let resp = new DescribePriceRunInstanceResponse();
        this.request("DescribePriceRunInstance", req, resp, cb);
    }

    /**
     * 本接口（ModifyIpv6AddressesAttribute）用于修改弹性网卡IPv6地址属性。
     * @param {ModifyIpv6AddressesAttributeRequest} req
     * @param {function(string, ModifyIpv6AddressesAttributeResponse):void} cb
     * @public
     */
    ModifyIpv6AddressesAttribute(req, cb) {
        let resp = new ModifyIpv6AddressesAttributeResponse();
        this.request("ModifyIpv6AddressesAttribute", req, resp, cb);
    }

    /**
     * 获取概览页统计的基本数据
     * @param {DescribeBaseOverviewRequest} req
     * @param {function(string, DescribeBaseOverviewResponse):void} cb
     * @public
     */
    DescribeBaseOverview(req, cb) {
        let resp = new DescribeBaseOverviewResponse();
        this.request("DescribeBaseOverview", req, resp, cb);
    }

    /**
     * 弹性网卡绑定云主机
     * @param {AttachNetworkInterfaceRequest} req
     * @param {function(string, AttachNetworkInterfaceResponse):void} cb
     * @public
     */
    AttachNetworkInterface(req, cb) {
        let resp = new AttachNetworkInterfaceResponse();
        this.request("AttachNetworkInterface", req, resp, cb);
    }

    /**
     * SecurityGroupPolicySet.Version 用于指定要操作的安全组的版本。传入 Version 版本号若不等于当前安全组的最新版本，将返回失败；若不传 Version 则直接删除指定PolicyIndex的规则。
     * @param {DeleteSecurityGroupPoliciesRequest} req
     * @param {function(string, DeleteSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    DeleteSecurityGroupPolicies(req, cb) {
        let resp = new DeleteSecurityGroupPoliciesResponse();
        this.request("DeleteSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 用于创建一个 OpenSSH RSA 密钥对，可以用于登录 Linux 实例。
     * @param {CreateKeyPairRequest} req
     * @param {function(string, CreateKeyPairResponse):void} cb
     * @public
     */
    CreateKeyPair(req, cb) {
        let resp = new CreateKeyPairResponse();
        this.request("CreateKeyPair", req, resp, cb);
    }

    /**
     * 修改模块配置，已关联实例的模块不支持调整配置。
     * @param {ModifyModuleConfigRequest} req
     * @param {function(string, ModifyModuleConfigResponse):void} cb
     * @public
     */
    ModifyModuleConfig(req, cb) {
        let resp = new ModifyModuleConfigResponse();
        this.request("ModifyModuleConfig", req, resp, cb);
    }

    /**
     * 修改安全组属性
     * @param {ModifySecurityGroupAttributeRequest} req
     * @param {function(string, ModifySecurityGroupAttributeResponse):void} cb
     * @public
     */
    ModifySecurityGroupAttribute(req, cb) {
        let resp = new ModifySecurityGroupAttributeResponse();
        this.request("ModifySecurityGroupAttribute", req, resp, cb);
    }

    /**
     * 展示模块详细信息
     * @param {DescribeModuleDetailRequest} req
     * @param {function(string, DescribeModuleDetailResponse):void} cb
     * @public
     */
    DescribeModuleDetail(req, cb) {
        let resp = new DescribeModuleDetailResponse();
        this.request("DescribeModuleDetail", req, resp, cb);
    }

    /**
     * 删除负载均衡实例。
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        let resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }

    /**
     * 获取机型配置列表
     * @param {DescribeInstanceTypeConfigRequest} req
     * @param {function(string, DescribeInstanceTypeConfigResponse):void} cb
     * @public
     */
    DescribeInstanceTypeConfig(req, cb) {
        let resp = new DescribeInstanceTypeConfigResponse();
        this.request("DescribeInstanceTypeConfig", req, resp, cb);
    }

    /**
     * 对某个路由表批量删除路由策略
     * @param {DeleteRoutesRequest} req
     * @param {function(string, DeleteRoutesResponse):void} cb
     * @public
     */
    DeleteRoutes(req, cb) {
        let resp = new DeleteRoutesResponse();
        this.request("DeleteRoutes", req, resp, cb);
    }

    /**
     * 修改安全组出站和入站规则
     * @param {ModifySecurityGroupPoliciesRequest} req
     * @param {function(string, ModifySecurityGroupPoliciesResponse):void} cb
     * @public
     */
    ModifySecurityGroupPolicies(req, cb) {
        let resp = new ModifySecurityGroupPoliciesResponse();
        this.request("ModifySecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 修改子网属性
     * @param {ModifySubnetAttributeRequest} req
     * @param {function(string, ModifySubnetAttributeResponse):void} cb
     * @public
     */
    ModifySubnetAttribute(req, cb) {
        let resp = new ModifySubnetAttributeResponse();
        this.request("ModifySubnetAttribute", req, resp, cb);
    }

    /**
     * 使用本接口获取某种机型在某些区域的装箱配额（当使用虚拟机型时，返回的是一组相互关联的装箱配额）。
     * @param {DescribePackingQuotaGroupRequest} req
     * @param {function(string, DescribePackingQuotaGroupResponse):void} cb
     * @public
     */
    DescribePackingQuotaGroup(req, cb) {
        let resp = new DescribePackingQuotaGroupResponse();
        this.request("DescribePackingQuotaGroup", req, resp, cb);
    }

    /**
     * 查询弹性网卡列表
     * @param {DescribeNetworkInterfacesRequest} req
     * @param {function(string, DescribeNetworkInterfacesResponse):void} cb
     * @public
     */
    DescribeNetworkInterfaces(req, cb) {
        let resp = new DescribeNetworkInterfacesResponse();
        this.request("DescribeNetworkInterfaces", req, resp, cb);
    }

    /**
     * 本接口（CreateDisks）用于创建云硬盘。

* 预付费云盘的购买会预先扣除本次云盘购买所需金额，在调用本接口前请确保账户余额充足。
* 本接口支持传入数据盘快照来创建云盘，实现将快照数据复制到新购云盘上。
* 本接口为异步接口，当创建请求下发成功后会返回一个新建的云盘ID列表，此时云盘的创建并未立即完成。可以通过调用[DescribeDisks](/document/product/362/16315)接口根据DiskId查询对应云盘，如果能查到云盘，且状态为'UNATTACHED'或'ATTACHED'，则表示创建成功。
     * @param {CreateDisksRequest} req
     * @param {function(string, CreateDisksResponse):void} cb
     * @public
     */
    CreateDisks(req, cb) {
        let resp = new CreateDisksResponse();
        this.request("CreateDisks", req, resp, cb);
    }

    /**
     * 绑定安全组
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口（ModifyImageAttribute）用于修改镜像属性。
     * @param {ModifyImageAttributeRequest} req
     * @param {function(string, ModifyImageAttributeResponse):void} cb
     * @public
     */
    ModifyImageAttribute(req, cb) {
        let resp = new ModifyImageAttributeResponse();
        this.request("ModifyImageAttribute", req, resp, cb);
    }

    /**
     * 本接口(DescribeTaskStatus)用于获取异步任务状态
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * 获取网络峰值数据
     * @param {DescribePeakNetworkOverviewRequest} req
     * @param {function(string, DescribePeakNetworkOverviewResponse):void} cb
     * @public
     */
    DescribePeakNetworkOverview(req, cb) {
        let resp = new DescribePeakNetworkOverviewResponse();
        this.request("DescribePeakNetworkOverview", req, resp, cb);
    }

    /**
     * 创建安全组
     * @param {CreateSecurityGroupRequest} req
     * @param {function(string, CreateSecurityGroupResponse):void} cb
     * @public
     */
    CreateSecurityGroup(req, cb) {
        let resp = new CreateSecurityGroupResponse();
        this.request("CreateSecurityGroup", req, resp, cb);
    }

    /**
     * 导入自定义镜像，支持 RAW、VHD、QCOW2、VMDK 镜像格式
     * @param {ImportCustomImageRequest} req
     * @param {function(string, ImportCustomImageResponse):void} cb
     * @public
     */
    ImportCustomImage(req, cb) {
        let resp = new ImportCustomImageResponse();
        this.request("ImportCustomImage", req, resp, cb);
    }

    /**
     * 本接口（DescribeSnapshots）用于查询快照的详细信息。

* 根据快照ID、创建快照的云硬盘ID、创建快照的云硬盘类型等对结果进行过滤，不同条件之间为与(AND)的关系，过滤信息详细请见过滤器`Filter`。
*  如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的快照列表。
     * @param {DescribeSnapshotsRequest} req
     * @param {function(string, DescribeSnapshotsResponse):void} cb
     * @public
     */
    DescribeSnapshots(req, cb) {
        let resp = new DescribeSnapshotsResponse();
        this.request("DescribeSnapshots", req, resp, cb);
    }

    /**
     * 销毁实例
     * @param {TerminateInstancesRequest} req
     * @param {function(string, TerminateInstancesResponse):void} cb
     * @public
     */
    TerminateInstances(req, cb) {
        let resp = new TerminateInstancesResponse();
        this.request("TerminateInstances", req, resp, cb);
    }

    /**
     * 查询实例管理终端地址
     * @param {DescribeInstanceVncUrlRequest} req
     * @param {function(string, DescribeInstanceVncUrlResponse):void} cb
     * @public
     */
    DescribeInstanceVncUrl(req, cb) {
        let resp = new DescribeInstanceVncUrlResponse();
        this.request("DescribeInstanceVncUrl", req, resp, cb);
    }

    /**
     * 删除路由表
     * @param {DeleteRouteTableRequest} req
     * @param {function(string, DeleteRouteTableResponse):void} cb
     * @public
     */
    DeleteRouteTable(req, cb) {
        let resp = new DeleteRouteTableResponse();
        this.request("DeleteRouteTable", req, resp, cb);
    }

    /**
     * 查询用户安全组配额
     * @param {DescribeSecurityGroupLimitsRequest} req
     * @param {function(string, DescribeSecurityGroupLimitsResponse):void} cb
     * @public
     */
    DescribeSecurityGroupLimits(req, cb) {
        let resp = new DescribeSecurityGroupLimitsResponse();
        this.request("DescribeSecurityGroupLimits", req, resp, cb);
    }

    /**
     * 绑定或解绑一个安全组到多个负载均衡实例。
     * @param {SetSecurityGroupForLoadbalancersRequest} req
     * @param {function(string, SetSecurityGroupForLoadbalancersResponse):void} cb
     * @public
     */
    SetSecurityGroupForLoadbalancers(req, cb) {
        let resp = new SetSecurityGroupForLoadbalancersResponse();
        this.request("SetSecurityGroupForLoadbalancers", req, resp, cb);
    }

    /**
     * 修改在一个可用区下创建实例时使用的默认子网（创建实例时，未填写VPC参数时使用的sunbetId）
     * @param {ModifyDefaultSubnetRequest} req
     * @param {function(string, ModifyDefaultSubnetResponse):void} cb
     * @public
     */
    ModifyDefaultSubnet(req, cb) {
        let resp = new ModifyDefaultSubnetResponse();
        this.request("ModifyDefaultSubnet", req, resp, cb);
    }

    /**
     * 只有状态为RUNNING的实例才可以进行此操作；接口调用成功时，实例会进入REBOOTING状态；重启实例成功时，实例会进入RUNNING状态；支持强制重启，强制重启的效果等同于关闭物理计算机的电源开关再重新启动。强制重启可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常重启时使用。
     * @param {RebootInstancesRequest} req
     * @param {function(string, RebootInstancesResponse):void} cb
     * @public
     */
    RebootInstances(req, cb) {
        let resp = new RebootInstancesResponse();
        this.request("RebootInstances", req, resp, cb);
    }

    /**
     * 本接口（AssignIpv6Addresses）用于弹性网卡申请IPv6地址。
     * @param {AssignIpv6AddressesRequest} req
     * @param {function(string, AssignIpv6AddressesResponse):void} cb
     * @public
     */
    AssignIpv6Addresses(req, cb) {
        let resp = new AssignIpv6AddressesResponse();
        this.request("AssignIpv6Addresses", req, resp, cb);
    }

    /**
     * 弹性网卡内网IP迁移。
该接口用于将一个内网IP从一个弹性网卡上迁移到另外一个弹性网卡，主IP地址不支持迁移。
迁移前后的弹性网卡必须在同一个子网内。
     * @param {MigratePrivateIpAddressRequest} req
     * @param {function(string, MigratePrivateIpAddressResponse):void} cb
     * @public
     */
    MigratePrivateIpAddress(req, cb) {
        let resp = new MigratePrivateIpAddressResponse();
        this.request("MigratePrivateIpAddress", req, resp, cb);
    }

    /**
     * 购买负载均衡实例。
     * @param {CreateLoadBalancerRequest} req
     * @param {function(string, CreateLoadBalancerResponse):void} cb
     * @public
     */
    CreateLoadBalancer(req, cb) {
        let resp = new CreateLoadBalancerResponse();
        this.request("CreateLoadBalancer", req, resp, cb);
    }

    /**
     * 修改模块默认带宽上限
     * @param {ModifyModuleNetworkRequest} req
     * @param {function(string, ModifyModuleNetworkResponse):void} cb
     * @public
     */
    ModifyModuleNetwork(req, cb) {
        let resp = new ModifyModuleNetworkResponse();
        this.request("ModifyModuleNetwork", req, resp, cb);
    }

    /**
     * 用于查询高可用虚拟IP（HAVIP）列表。
     * @param {DescribeHaVipsRequest} req
     * @param {function(string, DescribeHaVipsResponse):void} cb
     * @public
     */
    DescribeHaVips(req, cb) {
        let resp = new DescribeHaVipsResponse();
        this.request("DescribeHaVips", req, resp, cb);
    }

    /**
     * 弹性网卡申请内网 IP
     * @param {AssignPrivateIpAddressesRequest} req
     * @param {function(string, AssignPrivateIpAddressesResponse):void} cb
     * @public
     */
    AssignPrivateIpAddresses(req, cb) {
        let resp = new AssignPrivateIpAddressesResponse();
        this.request("AssignPrivateIpAddresses", req, resp, cb);
    }

    /**
     * 用于删除高可用虚拟IP（HAVIP）
     * @param {DeleteHaVipRequest} req
     * @param {function(string, DeleteHaVipResponse):void} cb
     * @public
     */
    DeleteHaVip(req, cb) {
        let resp = new DeleteHaVipResponse();
        this.request("DeleteHaVip", req, resp, cb);
    }

    /**
     * 查询您账户的弹性公网IP（简称 EIP）在当前地域的配额信息
     * @param {DescribeAddressQuotaRequest} req
     * @param {function(string, DescribeAddressQuotaResponse):void} cb
     * @public
     */
    DescribeAddressQuota(req, cb) {
        let resp = new DescribeAddressQuotaResponse();
        this.request("DescribeAddressQuota", req, resp, cb);
    }

    /**
     * 删除负载均衡多个监听器
     * @param {DeleteLoadBalancerListenersRequest} req
     * @param {function(string, DeleteLoadBalancerListenersResponse):void} cb
     * @public
     */
    DeleteLoadBalancerListeners(req, cb) {
        let resp = new DeleteLoadBalancerListenersResponse();
        this.request("DeleteLoadBalancerListeners", req, resp, cb);
    }

    /**
     * 删除私有网络
     * @param {DeleteVpcRequest} req
     * @param {function(string, DeleteVpcResponse):void} cb
     * @public
     */
    DeleteVpc(req, cb) {
        let resp = new DeleteVpcResponse();
        this.request("DeleteVpc", req, resp, cb);
    }

    /**
     * 查询子网列表
     * @param {DescribeSubnetsRequest} req
     * @param {function(string, DescribeSubnetsResponse):void} cb
     * @public
     */
    DescribeSubnets(req, cb) {
        let resp = new DescribeSubnetsResponse();
        this.request("DescribeSubnets", req, resp, cb);
    }

    /**
     * 获取实例的相关信息。
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 查看安全组
     * @param {DescribeSecurityGroupsRequest} req
     * @param {function(string, DescribeSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeSecurityGroups(req, cb) {
        let resp = new DescribeSecurityGroupsResponse();
        this.request("DescribeSecurityGroups", req, resp, cb);
    }

    /**
     * 查询安全组规则
     * @param {DescribeSecurityGroupPoliciesRequest} req
     * @param {function(string, DescribeSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    DescribeSecurityGroupPolicies(req, cb) {
        let resp = new DescribeSecurityGroupPoliciesResponse();
        this.request("DescribeSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 查询可用区的默认子网
     * @param {DescribeDefaultSubnetRequest} req
     * @param {function(string, DescribeDefaultSubnetResponse):void} cb
     * @public
     */
    DescribeDefaultSubnet(req, cb) {
        let resp = new DescribeDefaultSubnetResponse();
        this.request("DescribeDefaultSubnet", req, resp, cb);
    }

    /**
     * 重置处于运行中状态的实例的密码，需要显式指定强制关机参数ForceStop。如果没有显式指定强制关机参数，则只有处于关机状态的实例才允许执行重置密码操作。
     * @param {ResetInstancesPasswordRequest} req
     * @param {function(string, ResetInstancesPasswordResponse):void} cb
     * @public
     */
    ResetInstancesPassword(req, cb) {
        let resp = new ResetInstancesPasswordResponse();
        this.request("ResetInstancesPassword", req, resp, cb);
    }

    /**
     * 创建模块
     * @param {CreateModuleRequest} req
     * @param {function(string, CreateModuleResponse):void} cb
     * @public
     */
    CreateModule(req, cb) {
        let resp = new CreateModuleResponse();
        this.request("CreateModule", req, resp, cb);
    }

    /**
     * 启用已禁用的子网路由。
本接口会校验启用后，是否与已有路由冲突，如果冲突，则无法启用，失败处理。路由冲突时，需要先禁用与之冲突的路由，才能启用该路由。
     * @param {EnableRoutesRequest} req
     * @param {function(string, EnableRoutesResponse):void} cb
     * @public
     */
    EnableRoutes(req, cb) {
        let resp = new EnableRoutesResponse();
        this.request("EnableRoutes", req, resp, cb);
    }

    /**
     * 本接口（CreateHaVip）用于创建高可用虚拟IP（HAVIP）
     * @param {CreateHaVipRequest} req
     * @param {function(string, CreateHaVipResponse):void} cb
     * @public
     */
    CreateHaVip(req, cb) {
        let resp = new CreateHaVipResponse();
        this.request("CreateHaVip", req, resp, cb);
    }

    /**
     * 本接口（DescribeDisks）用于查询云硬盘列表。

* 可以根据云硬盘ID、云硬盘类型或者云硬盘状态等信息来查询云硬盘的详细信息，不同条件之间为与(AND)的关系，过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的云硬盘列表。
     * @param {DescribeDisksRequest} req
     * @param {function(string, DescribeDisksResponse):void} cb
     * @public
     */
    DescribeDisks(req, cb) {
        let resp = new DescribeDisksResponse();
        this.request("DescribeDisks", req, resp, cb);
    }

    /**
     * 只有当前账号下的安全组允许被删除。
安全组实例ID如果在其他安全组的规则中被引用，则无法直接删除。这种情况下，需要先进行规则修改，再删除安全组。
删除的安全组无法再找回，请谨慎调用。
     * @param {DeleteSecurityGroupRequest} req
     * @param {function(string, DeleteSecurityGroupResponse):void} cb
     * @public
     */
    DeleteSecurityGroup(req, cb) {
        let resp = new DeleteSecurityGroupResponse();
        this.request("DeleteSecurityGroup", req, resp, cb);
    }

    /**
     * 创建负载均衡监听器。
     * @param {CreateListenerRequest} req
     * @param {function(string, CreateListenerResponse):void} cb
     * @public
     */
    CreateListener(req, cb) {
        let resp = new CreateListenerResponse();
        this.request("CreateListener", req, resp, cb);
    }

    /**
     * 本接口（DeleteSnapshots）用于删除快照。

* 快照必须处于NORMAL状态，快照状态可以通过[DescribeSnapshots](/document/product/362/15647)接口查询，见输出参数中SnapshotState字段解释。
* 支持批量操作。如果多个快照存在无法删除的快照，则操作不执行，以返回特定的错误码返回。
     * @param {DeleteSnapshotsRequest} req
     * @param {function(string, DeleteSnapshotsResponse):void} cb
     * @public
     */
    DeleteSnapshots(req, cb) {
        let resp = new DeleteSnapshotsResponse();
        this.request("DeleteSnapshots", req, resp, cb);
    }

    /**
     * 修改路由表属性
     * @param {ModifyRouteTableAttributeRequest} req
     * @param {function(string, ModifyRouteTableAttributeResponse):void} cb
     * @public
     */
    ModifyRouteTableAttribute(req, cb) {
        let resp = new ModifyRouteTableAttributeResponse();
        this.request("ModifyRouteTableAttribute", req, resp, cb);
    }

    /**
     * 修改监听器绑定的后端机器的转发权重。
     * @param {ModifyTargetWeightRequest} req
     * @param {function(string, ModifyTargetWeightResponse):void} cb
     * @public
     */
    ModifyTargetWeight(req, cb) {
        let resp = new ModifyTargetWeightResponse();
        this.request("ModifyTargetWeight", req, resp, cb);
    }

    /**
     * 修改模块默认安全组
     * @param {ModifyModuleSecurityGroupsRequest} req
     * @param {function(string, ModifyModuleSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyModuleSecurityGroups(req, cb) {
        let resp = new ModifyModuleSecurityGroupsResponse();
        this.request("ModifyModuleSecurityGroups", req, resp, cb);
    }

    /**
     * 创建路由策略
     * @param {CreateRoutesRequest} req
     * @param {function(string, CreateRoutesResponse):void} cb
     * @public
     */
    CreateRoutes(req, cb) {
        let resp = new CreateRoutesResponse();
        this.request("CreateRoutes", req, resp, cb);
    }

    /**
     * 用于修改高可用虚拟IP（HAVIP）属性
     * @param {ModifyHaVipAttributeRequest} req
     * @param {function(string, ModifyHaVipAttributeResponse):void} cb
     * @public
     */
    ModifyHaVipAttribute(req, cb) {
        let resp = new ModifyHaVipAttributeResponse();
        this.request("ModifyHaVipAttribute", req, resp, cb);
    }

    /**
     * 释放一个或多个弹性公网IP（简称 EIP）。
该操作不可逆，释放后 EIP 关联的 IP 地址将不再属于您的名下。
只有状态为 UNBIND 的 EIP 才能进行释放操作。
     * @param {ReleaseAddressesRequest} req
     * @param {function(string, ReleaseAddressesResponse):void} cb
     * @public
     */
    ReleaseAddresses(req, cb) {
        let resp = new ReleaseAddressesResponse();
        this.request("ReleaseAddresses", req, resp, cb);
    }

    /**
     * 修改模块IP直通。
     * @param {ModifyModuleIpDirectRequest} req
     * @param {function(string, ModifyModuleIpDirectResponse):void} cb
     * @public
     */
    ModifyModuleIpDirect(req, cb) {
        let resp = new ModifyModuleIpDirectResponse();
        this.request("ModifyModuleIpDirect", req, resp, cb);
    }

    /**
     * 查询负载均衡绑定的后端服务列表。
     * @param {DescribeTargetsRequest} req
     * @param {function(string, DescribeTargetsResponse):void} cb
     * @public
     */
    DescribeTargets(req, cb) {
        let resp = new DescribeTargetsResponse();
        this.request("DescribeTargets", req, resp, cb);
    }

    /**
     * 修改私有网络（VPC）的相关属性
     * @param {ModifyVpcAttributeRequest} req
     * @param {function(string, ModifyVpcAttributeResponse):void} cb
     * @public
     */
    ModifyVpcAttribute(req, cb) {
        let resp = new ModifyVpcAttributeResponse();
        this.request("ModifyVpcAttribute", req, resp, cb);
    }

    /**
     * 查询安全组关联实例统计
     * @param {DescribeSecurityGroupAssociationStatisticsRequest} req
     * @param {function(string, DescribeSecurityGroupAssociationStatisticsResponse):void} cb
     * @public
     */
    DescribeSecurityGroupAssociationStatistics(req, cb) {
        let resp = new DescribeSecurityGroupAssociationStatisticsResponse();
        this.request("DescribeSecurityGroupAssociationStatistics", req, resp, cb);
    }

    /**
     * CPU 内存 硬盘等基础信息峰值数据
     * @param {DescribePeakBaseOverviewRequest} req
     * @param {function(string, DescribePeakBaseOverviewResponse):void} cb
     * @public
     */
    DescribePeakBaseOverview(req, cb) {
        let resp = new DescribePeakBaseOverviewResponse();
        this.request("DescribePeakBaseOverview", req, resp, cb);
    }

    /**
     * 修改弹性公网IP属性
     * @param {ModifyAddressAttributeRequest} req
     * @param {function(string, ModifyAddressAttributeResponse):void} cb
     * @public
     */
    ModifyAddressAttribute(req, cb) {
        let resp = new ModifyAddressAttributeResponse();
        this.request("ModifyAddressAttribute", req, resp, cb);
    }

    /**
     * 弹性网卡退还内网 IP。
退还弹性网卡上的辅助内网IP，接口自动解关联弹性公网 IP。不能退还弹性网卡的主内网IP。
     * @param {RemovePrivateIpAddressesRequest} req
     * @param {function(string, RemovePrivateIpAddressesResponse):void} cb
     * @public
     */
    RemovePrivateIpAddresses(req, cb) {
        let resp = new RemovePrivateIpAddressesResponse();
        this.request("RemovePrivateIpAddresses", req, resp, cb);
    }

    /**
     * <p>本接口（CreateSecurityGroupPolicies）用于创建安全组规则（SecurityGroupPolicy）。</p>
<p>在 SecurityGroupPolicySet 参数中：</p>
<ul>
<li>Version 安全组规则版本号，用户每次更新安全规则版本会自动加1，防止您更新的路由规则已过期，不填不考虑冲突。</li>
<li>在创建出站和入站规则（Egress 和 Ingress）时：<ul>
<li>Protocol 字段支持输入TCP, UDP, ICMP, GRE, ALL。</li>
<li>CidrBlock 字段允许输入符合cidr格式标准的任意字符串。在基础网络中，如果 CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
<li>SecurityGroupId 字段允许输入与待修改的安全组位于相同项目中的安全组 ID，包括这个安全组 ID 本身，代表安全组下所有云服务器的内网 IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个 ID 所关联的云服务器变化而变化，不需要重新修改。</li>
<li>Port 字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当 Protocol 字段是 TCP 或 UDP 时，Port 字段才被接受，即 Protocol 字段不是 TCP 或 UDP 时，Protocol 和 Port 排他关系，不允许同时输入，否则会接口报错。</li>
<li>Action 字段只允许输入 ACCEPT 或 DROP。</li>
<li>CidrBlock, SecurityGroupId, AddressTemplate 是排他关系，不允许同时输入，Protocol + Port 和 ServiceTemplate 二者是排他关系，不允许同时输入。</li>
<li>一次请求中只能创建单个方向的规则, 如果需要指定索引（PolicyIndex）参数, 多条规则的索引必须一致。</li>
</ul></li></ul>
<p>默认接口请求频率限制：20次/秒。</p>
     * @param {CreateSecurityGroupPoliciesRequest} req
     * @param {function(string, CreateSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    CreateSecurityGroupPolicies(req, cb) {
        let resp = new CreateSecurityGroupPoliciesResponse();
        this.request("CreateSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 删除镜像
     * @param {DeleteImageRequest} req
     * @param {function(string, DeleteImageResponse):void} cb
     * @public
     */
    DeleteImage(req, cb) {
        let resp = new DeleteImageResponse();
        this.request("DeleteImage", req, resp, cb);
    }


}
module.exports = EcmClient;
