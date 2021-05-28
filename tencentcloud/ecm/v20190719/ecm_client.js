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
const RunEIPDirectServiceEnabled = models.RunEIPDirectServiceEnabled;
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const Ipv6Address = models.Ipv6Address;
const BatchDeregisterTargetsResponse = models.BatchDeregisterTargetsResponse;
const DescribePeakBaseOverviewRequest = models.DescribePeakBaseOverviewRequest;
const SecurityGroupAssociationStatistics = models.SecurityGroupAssociationStatistics;
const SecurityGroupLimitSet = models.SecurityGroupLimitSet;
const DisassociateAddressResponse = models.DisassociateAddressResponse;
const BatchModifyTargetWeightResponse = models.BatchModifyTargetWeightResponse;
const InstanceStatistic = models.InstanceStatistic;
const CreateRoutesRequest = models.CreateRoutesRequest;
const SetSecurityGroupForLoadbalancersRequest = models.SetSecurityGroupForLoadbalancersRequest;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const DescribeHaVipsResponse = models.DescribeHaVipsResponse;
const ModifyModuleSecurityGroupsRequest = models.ModifyModuleSecurityGroupsRequest;
const Internet = models.Internet;
const DescribeModuleResponse = models.DescribeModuleResponse;
const ModifyLoadBalancerAttributesRequest = models.ModifyLoadBalancerAttributesRequest;
const DeleteSecurityGroupPoliciesRequest = models.DeleteSecurityGroupPoliciesRequest;
const ImageTask = models.ImageTask;
const Province = models.Province;
const DescribeMonthPeakNetworkResponse = models.DescribeMonthPeakNetworkResponse;
const ModifyModuleConfigResponse = models.ModifyModuleConfigResponse;
const NetworkStorageRange = models.NetworkStorageRange;
const ModifyModuleNameResponse = models.ModifyModuleNameResponse;
const DescribeNetworkInterfacesRequest = models.DescribeNetworkInterfacesRequest;
const DescribeSubnetsRequest = models.DescribeSubnetsRequest;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const StartInstancesRequest = models.StartInstancesRequest;
const ImageLimitConfig = models.ImageLimitConfig;
const HaVip = models.HaVip;
const RouteConflict = models.RouteConflict;
const SetLoadBalancerSecurityGroupsResponse = models.SetLoadBalancerSecurityGroupsResponse;
const EipQuota = models.EipQuota;
const DeleteSubnetResponse = models.DeleteSubnetResponse;
const ModifyAddressesBandwidthResponse = models.ModifyAddressesBandwidthResponse;
const DescribeSubnetsResponse = models.DescribeSubnetsResponse;
const Tag = models.Tag;
const RunInstancesRequest = models.RunInstancesRequest;
const ReleaseAddressesRequest = models.ReleaseAddressesRequest;
const DescribeLoadBalancersRequest = models.DescribeLoadBalancersRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeMonthPeakNetworkRequest = models.DescribeMonthPeakNetworkRequest;
const ImportImageRequest = models.ImportImageRequest;
const ModifyModuleSecurityGroupsResponse = models.ModifyModuleSecurityGroupsResponse;
const SrcImage = models.SrcImage;
const SetSecurityGroupForLoadbalancersResponse = models.SetSecurityGroupForLoadbalancersResponse;
const InstanceTypeConfig = models.InstanceTypeConfig;
const DescribeNodeResponse = models.DescribeNodeResponse;
const RemovePrivateIpAddressesResponse = models.RemovePrivateIpAddressesResponse;
const DescribeDefaultSubnetResponse = models.DescribeDefaultSubnetResponse;
const ReplaceRouteTableAssociationRequest = models.ReplaceRouteTableAssociationRequest;
const ReplaceSecurityGroupPolicyRequest = models.ReplaceSecurityGroupPolicyRequest;
const ModifyTargetWeightResponse = models.ModifyTargetWeightResponse;
const Node = models.Node;
const DescribeCustomImageTaskResponse = models.DescribeCustomImageTaskResponse;
const SecurityGroup = models.SecurityGroup;
const DeleteSubnetRequest = models.DeleteSubnetRequest;
const DescribeModuleRequest = models.DescribeModuleRequest;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const CreateNetworkInterfaceRequest = models.CreateNetworkInterfaceRequest;
const CreateModuleResponse = models.CreateModuleResponse;
const RebootInstancesRequest = models.RebootInstancesRequest;
const RuleHealth = models.RuleHealth;
const AllocateAddressesRequest = models.AllocateAddressesRequest;
const NetworkInterfaceAttachment = models.NetworkInterfaceAttachment;
const Instance = models.Instance;
const DeleteNetworkInterfaceRequest = models.DeleteNetworkInterfaceRequest;
const RemovePrivateIpAddressesRequest = models.RemovePrivateIpAddressesRequest;
const RouteTable = models.RouteTable;
const ZoneInstanceCountISP = models.ZoneInstanceCountISP;
const LoadBalancerHealth = models.LoadBalancerHealth;
const DescribeTargetsRequest = models.DescribeTargetsRequest;
const ModifyInstancesAttributeRequest = models.ModifyInstancesAttributeRequest;
const InstanceFamilyTypeConfig = models.InstanceFamilyTypeConfig;
const ResetInstancesResponse = models.ResetInstancesResponse;
const DeleteVpcRequest = models.DeleteVpcRequest;
const DeleteLoadBalancerListenersRequest = models.DeleteLoadBalancerListenersRequest;
const MigratePrivateIpAddressRequest = models.MigratePrivateIpAddressRequest;
const ModifySubnetAttributeResponse = models.ModifySubnetAttributeResponse;
const ZoneInfo = models.ZoneInfo;
const DescribeInstancesDeniedActionsRequest = models.DescribeInstancesDeniedActionsRequest;
const DeleteRouteTableRequest = models.DeleteRouteTableRequest;
const DescribeNodeRequest = models.DescribeNodeRequest;
const CreateSubnetResponse = models.CreateSubnetResponse;
const DescribeSecurityGroupPoliciesResponse = models.DescribeSecurityGroupPoliciesResponse;
const DescribeListenersResponse = models.DescribeListenersResponse;
const Area = models.Area;
const ModifySecurityGroupPoliciesRequest = models.ModifySecurityGroupPoliciesRequest;
const DescribeConfigRequest = models.DescribeConfigRequest;
const DescribeInstanceVncUrlRequest = models.DescribeInstanceVncUrlRequest;
const DescribeInstanceVncUrlResponse = models.DescribeInstanceVncUrlResponse;
const TargetsWeightRule = models.TargetsWeightRule;
const StopInstancesResponse = models.StopInstancesResponse;
const StartInstancesResponse = models.StartInstancesResponse;
const CreateVpcResponse = models.CreateVpcResponse;
const ModifyTargetPortResponse = models.ModifyTargetPortResponse;
const AssistantCidr = models.AssistantCidr;
const TerminateInstancesRequest = models.TerminateInstancesRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const BatchRegisterTargetsResponse = models.BatchRegisterTargetsResponse;
const CreateModuleRequest = models.CreateModuleRequest;
const ReplaceRouteTableAssociationResponse = models.ReplaceRouteTableAssociationResponse;
const InstanceNetworkInfo = models.InstanceNetworkInfo;
const ModifyInstancesAttributeResponse = models.ModifyInstancesAttributeResponse;
const ReleaseAddressesResponse = models.ReleaseAddressesResponse;
const ModifyVpcAttributeRequest = models.ModifyVpcAttributeRequest;
const DescribeInstancesDeniedActionsResponse = models.DescribeInstancesDeniedActionsResponse;
const DeleteHaVipResponse = models.DeleteHaVipResponse;
const ReleaseIpv6AddressesRequest = models.ReleaseIpv6AddressesRequest;
const TaskOutput = models.TaskOutput;
const ModuleCounter = models.ModuleCounter;
const ReplaceSecurityGroupPolicyResponse = models.ReplaceSecurityGroupPolicyResponse;
const ModifyPrivateIpAddressesAttributeResponse = models.ModifyPrivateIpAddressesAttributeResponse;
const ReplaceRoutesResponse = models.ReplaceRoutesResponse;
const PhysicalPosition = models.PhysicalPosition;
const Listener = models.Listener;
const ModifyLoadBalancerAttributesResponse = models.ModifyLoadBalancerAttributesResponse;
const SetLoadBalancerSecurityGroupsRequest = models.SetLoadBalancerSecurityGroupsRequest;
const DescribeDefaultSubnetRequest = models.DescribeDefaultSubnetRequest;
const ResetInstancesMaxBandwidthResponse = models.ResetInstancesMaxBandwidthResponse;
const DeleteSecurityGroupResponse = models.DeleteSecurityGroupResponse;
const VpcInfo = models.VpcInfo;
const Route = models.Route;
const DescribeImageRequest = models.DescribeImageRequest;
const CreateNetworkInterfaceResponse = models.CreateNetworkInterfaceResponse;
const ModifyListenerRequest = models.ModifyListenerRequest;
const RunInstancesResponse = models.RunInstancesResponse;
const DescribeAddressQuotaRequest = models.DescribeAddressQuotaRequest;
const ModifyModuleNameRequest = models.ModifyModuleNameRequest;
const DescribeInstanceTypeConfigResponse = models.DescribeInstanceTypeConfigResponse;
const NodeInstanceNum = models.NodeInstanceNum;
const HealthCheck = models.HealthCheck;
const DescribeSecurityGroupLimitsResponse = models.DescribeSecurityGroupLimitsResponse;
const DescribeAddressesResponse = models.DescribeAddressesResponse;
const AssignIpv6AddressesResponse = models.AssignIpv6AddressesResponse;
const CreateRoutesResponse = models.CreateRoutesResponse;
const NetworkInterface = models.NetworkInterface;
const DeleteListenerRequest = models.DeleteListenerRequest;
const DescribeSecurityGroupsResponse = models.DescribeSecurityGroupsResponse;
const ImportCustomImageResponse = models.ImportCustomImageResponse;
const DetachNetworkInterfaceResponse = models.DetachNetworkInterfaceResponse;
const InstanceFamilyConfig = models.InstanceFamilyConfig;
const MonthNetwork = models.MonthNetwork;
const ResetRoutesResponse = models.ResetRoutesResponse;
const DeleteModuleRequest = models.DeleteModuleRequest;
const CreateImageResponse = models.CreateImageResponse;
const ModifySecurityGroupPoliciesResponse = models.ModifySecurityGroupPoliciesResponse;
const ResetInstancesMaxBandwidthRequest = models.ResetInstancesMaxBandwidthRequest;
const LoadBalancerInternetAccessible = models.LoadBalancerInternetAccessible;
const OsVersion = models.OsVersion;
const ResetRoutesRequest = models.ResetRoutesRequest;
const DisableRoutesResponse = models.DisableRoutesResponse;
const PeakBase = models.PeakBase;
const ResetInstancesPasswordResponse = models.ResetInstancesPasswordResponse;
const ModifyModuleNetworkRequest = models.ModifyModuleNetworkRequest;
const Image = models.Image;
const TagSpecification = models.TagSpecification;
const DetachNetworkInterfaceRequest = models.DetachNetworkInterfaceRequest;
const AddressTemplateSpecification = models.AddressTemplateSpecification;
const DescribeConfigResponse = models.DescribeConfigResponse;
const AssignIpv6AddressesRequest = models.AssignIpv6AddressesRequest;
const ModifyModuleNetworkResponse = models.ModifyModuleNetworkResponse;
const ModifyDefaultSubnetResponse = models.ModifyDefaultSubnetResponse;
const ModifyTargetWeightRequest = models.ModifyTargetWeightRequest;
const CreateSubnetRequest = models.CreateSubnetRequest;
const DescribeModuleDetailResponse = models.DescribeModuleDetailResponse;
const TaskInput = models.TaskInput;
const ModifyModuleDisableWanIpRequest = models.ModifyModuleDisableWanIpRequest;
const Backend = models.Backend;
const Subnet = models.Subnet;
const ModifyVpcAttributeResponse = models.ModifyVpcAttributeResponse;
const DeleteLoadBalancerRequest = models.DeleteLoadBalancerRequest;
const ModifyIpv6AddressesAttributeResponse = models.ModifyIpv6AddressesAttributeResponse;
const DeleteVpcResponse = models.DeleteVpcResponse;
const Target = models.Target;
const RouteTableAssociation = models.RouteTableAssociation;
const SecurityGroupPolicySet = models.SecurityGroupPolicySet;
const DescribeVpcsResponse = models.DescribeVpcsResponse;
const ImageUrl = models.ImageUrl;
const ISP = models.ISP;
const PrivateIpAddressSpecification = models.PrivateIpAddressSpecification;
const ModifySecurityGroupAttributeResponse = models.ModifySecurityGroupAttributeResponse;
const ISPCounter = models.ISPCounter;
const MigratePrivateIpAddressResponse = models.MigratePrivateIpAddressResponse;
const CreateImageRequest = models.CreateImageRequest;
const DeleteRouteTableResponse = models.DeleteRouteTableResponse;
const ModifyModuleDisableWanIpResponse = models.ModifyModuleDisableWanIpResponse;
const EnhancedService = models.EnhancedService;
const CreateListenerResponse = models.CreateListenerResponse;
const DeleteModuleResponse = models.DeleteModuleResponse;
const DescribeInstanceTypeConfigRequest = models.DescribeInstanceTypeConfigRequest;
const DescribeLoadBalanceTaskStatusRequest = models.DescribeLoadBalanceTaskStatusRequest;
const ImportCustomImageRequest = models.ImportCustomImageRequest;
const ModifyHaVipAttributeResponse = models.ModifyHaVipAttributeResponse;
const ModifyIpv6AddressesAttributeRequest = models.ModifyIpv6AddressesAttributeRequest;
const DescribeModuleDetailRequest = models.DescribeModuleDetailRequest;
const DeleteRoutesRequest = models.DeleteRoutesRequest;
const AssociateAddressRequest = models.AssociateAddressRequest;
const ModifySecurityGroupAttributeRequest = models.ModifySecurityGroupAttributeRequest;
const ModifyModuleConfigRequest = models.ModifyModuleConfigRequest;
const Position = models.Position;
const DescribePeakNetworkOverviewResponse = models.DescribePeakNetworkOverviewResponse;
const AttachNetworkInterfaceResponse = models.AttachNetworkInterfaceResponse;
const SecurityGroupPolicy = models.SecurityGroupPolicy;
const DescribeVpcsRequest = models.DescribeVpcsRequest;
const DescribeRouteConflictsResponse = models.DescribeRouteConflictsResponse;
const DescribeRouteTablesRequest = models.DescribeRouteTablesRequest;
const DescribeBaseOverviewRequest = models.DescribeBaseOverviewRequest;
const CreateHaVipResponse = models.CreateHaVipResponse;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const DiskInfo = models.DiskInfo;
const ModifyRouteTableAttributeRequest = models.ModifyRouteTableAttributeRequest;
const BatchDeregisterTargetsRequest = models.BatchDeregisterTargetsRequest;
const DescribeImportImageOsRequest = models.DescribeImportImageOsRequest;
const DisableRoutesRequest = models.DisableRoutesRequest;
const ModifyListenerResponse = models.ModifyListenerResponse;
const DescribeTargetHealthResponse = models.DescribeTargetHealthResponse;
const DescribeLoadBalanceTaskStatusResponse = models.DescribeLoadBalanceTaskStatusResponse;
const EnableRoutesRequest = models.EnableRoutesRequest;
const ModifyDefaultSubnetRequest = models.ModifyDefaultSubnetRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CreateListenerRequest = models.CreateListenerRequest;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const AssociateAddressResponse = models.AssociateAddressResponse;
const Filter = models.Filter;
const CreateRouteTableRequest = models.CreateRouteTableRequest;
const PublicIPAddressInfo = models.PublicIPAddressInfo;
const TerminateInstancesResponse = models.TerminateInstancesResponse;
const CreateHaVipRequest = models.CreateHaVipRequest;
const DescribeAddressesRequest = models.DescribeAddressesRequest;
const DescribeSecurityGroupPoliciesRequest = models.DescribeSecurityGroupPoliciesRequest;
const MigrateNetworkInterfaceRequest = models.MigrateNetworkInterfaceRequest;
const DescribeAddressQuotaResponse = models.DescribeAddressQuotaResponse;
const CreateSecurityGroupPoliciesResponse = models.CreateSecurityGroupPoliciesResponse;
const CreateSecurityGroupResponse = models.CreateSecurityGroupResponse;
const ZoneInstanceInfo = models.ZoneInstanceInfo;
const DeleteLoadBalancerResponse = models.DeleteLoadBalancerResponse;
const DeleteSecurityGroupRequest = models.DeleteSecurityGroupRequest;
const ReplaceRoutesRequest = models.ReplaceRoutesRequest;
const CreateRouteTableResponse = models.CreateRouteTableResponse;
const ModifyModuleImageResponse = models.ModifyModuleImageResponse;
const DeleteRoutesResponse = models.DeleteRoutesResponse;
const ResetInstancesRequest = models.ResetInstancesRequest;
const PeakNetwork = models.PeakNetwork;
const DescribeCustomImageTaskRequest = models.DescribeCustomImageTaskRequest;
const DescribeSecurityGroupAssociationStatisticsResponse = models.DescribeSecurityGroupAssociationStatisticsResponse;
const ModifyPrivateIpAddressesAttributeRequest = models.ModifyPrivateIpAddressesAttributeRequest;
const DescribeTargetsResponse = models.DescribeTargetsResponse;
const ImageOsList = models.ImageOsList;
const InstanceOperator = models.InstanceOperator;
const ModifyAddressAttributeResponse = models.ModifyAddressAttributeResponse;
const ImportImageResponse = models.ImportImageResponse;
const BatchModifyTargetWeightRequest = models.BatchModifyTargetWeightRequest;
const CreateSecurityGroupRequest = models.CreateSecurityGroupRequest;
const DescribeSecurityGroupLimitsRequest = models.DescribeSecurityGroupLimitsRequest;
const BatchTarget = models.BatchTarget;
const City = models.City;
const PrivateIPAddressInfo = models.PrivateIPAddressInfo;
const DescribeTargetHealthRequest = models.DescribeTargetHealthRequest;
const EnableRoutesResponse = models.EnableRoutesResponse;
const DeleteNetworkInterfaceResponse = models.DeleteNetworkInterfaceResponse;
const SimpleModule = models.SimpleModule;
const DescribePeakNetworkOverviewRequest = models.DescribePeakNetworkOverviewRequest;
const ModifyModuleIpDirectResponse = models.ModifyModuleIpDirectResponse;
const AssignPrivateIpAddressesResponse = models.AssignPrivateIpAddressesResponse;
const DescribeSecurityGroupsRequest = models.DescribeSecurityGroupsRequest;
const PeakNetworkRegionInfo = models.PeakNetworkRegionInfo;
const ModifyHaVipAttributeRequest = models.ModifyHaVipAttributeRequest;
const RebootInstancesResponse = models.RebootInstancesResponse;
const ModifyModuleIpDirectRequest = models.ModifyModuleIpDirectRequest;
const ModifyAddressesBandwidthRequest = models.ModifyAddressesBandwidthRequest;
const DeleteSecurityGroupPoliciesResponse = models.DeleteSecurityGroupPoliciesResponse;
const ModifyAddressAttributeRequest = models.ModifyAddressAttributeRequest;
const PeakFamilyInfo = models.PeakFamilyInfo;
const DescribePeakBaseOverviewResponse = models.DescribePeakBaseOverviewResponse;
const ModifyImageAttributeResponse = models.ModifyImageAttributeResponse;
const DescribeHaVipsRequest = models.DescribeHaVipsRequest;
const BatchRegisterTargetsRequest = models.BatchRegisterTargetsRequest;
const DescribeImageResponse = models.DescribeImageResponse;
const ListenerBackend = models.ListenerBackend;
const RegionInfo = models.RegionInfo;
const TagInfo = models.TagInfo;
const DeleteImageResponse = models.DeleteImageResponse;
const Address = models.Address;
const DescribeNetworkInterfacesResponse = models.DescribeNetworkInterfacesResponse;
const DeleteHaVipRequest = models.DeleteHaVipRequest;
const AssignPrivateIpAddressesRequest = models.AssignPrivateIpAddressesRequest;
const ResetInstancesPasswordRequest = models.ResetInstancesPasswordRequest;
const ModifyImageAttributeRequest = models.ModifyImageAttributeRequest;
const InstanceNetworkLimitConfig = models.InstanceNetworkLimitConfig;
const OperatorAction = models.OperatorAction;
const CreateVpcRequest = models.CreateVpcRequest;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DescribeSecurityGroupAssociationStatisticsRequest = models.DescribeSecurityGroupAssociationStatisticsRequest;
const Country = models.Country;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const DescribeRouteTablesResponse = models.DescribeRouteTablesResponse;
const StopInstancesRequest = models.StopInstancesRequest;
const ModifySubnetAttributeRequest = models.ModifySubnetAttributeRequest;
const AllocateAddressesResponse = models.AllocateAddressesResponse;
const DisassociateAddressRequest = models.DisassociateAddressRequest;
const DeleteLoadBalancerListenersResponse = models.DeleteLoadBalancerListenersResponse;
const DescribeListenersRequest = models.DescribeListenersRequest;
const AttachNetworkInterfaceRequest = models.AttachNetworkInterfaceRequest;
const ModuleItem = models.ModuleItem;
const ModifyModuleImageRequest = models.ModifyModuleImageRequest;
const CreateSecurityGroupPoliciesRequest = models.CreateSecurityGroupPoliciesRequest;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const ModifyTargetPortRequest = models.ModifyTargetPortRequest;
const DescribeImportImageOsResponse = models.DescribeImportImageOsResponse;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const ModifyRouteTableAttributeResponse = models.ModifyRouteTableAttributeResponse;
const MigrateNetworkInterfaceResponse = models.MigrateNetworkInterfaceResponse;
const DeleteListenerResponse = models.DeleteListenerResponse;
const DeleteImageRequest = models.DeleteImageRequest;
const Module = models.Module;
const DescribeBaseOverviewResponse = models.DescribeBaseOverviewResponse;
const ServiceTemplateSpecification = models.ServiceTemplateSpecification;
const TargetHealth = models.TargetHealth;
const ListenerHealth = models.ListenerHealth;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const DescribeRouteConflictsRequest = models.DescribeRouteConflictsRequest;
const ReleaseIpv6AddressesResponse = models.ReleaseIpv6AddressesResponse;
const LoadBalancer = models.LoadBalancer;
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
