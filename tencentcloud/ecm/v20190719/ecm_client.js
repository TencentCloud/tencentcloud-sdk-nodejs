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
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const Ipv6Address = models.Ipv6Address;
const DescribePeakBaseOverviewRequest = models.DescribePeakBaseOverviewRequest;
const CreateNetworkInterfaceRequest = models.CreateNetworkInterfaceRequest;
const DescribeInstancesDeniedActionsRequest = models.DescribeInstancesDeniedActionsRequest;
const Internet = models.Internet;
const DescribeModuleResponse = models.DescribeModuleResponse;
const ImageTask = models.ImageTask;
const Province = models.Province;
const ImportCustomImageResponse = models.ImportCustomImageResponse;
const ModifyModuleNameResponse = models.ModifyModuleNameResponse;
const DescribeNetworkInterfacesRequest = models.DescribeNetworkInterfacesRequest;
const DescribeSubnetsRequest = models.DescribeSubnetsRequest;
const CreateSubnetRequest = models.CreateSubnetRequest;
const DeleteModuleResponse = models.DeleteModuleResponse;
const EipQuota = models.EipQuota;
const DeleteSubnetResponse = models.DeleteSubnetResponse;
const ModifyAddressesBandwidthResponse = models.ModifyAddressesBandwidthResponse;
const DescribeSubnetsResponse = models.DescribeSubnetsResponse;
const RunInstancesRequest = models.RunInstancesRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const ResetInstancesPasswordResponse = models.ResetInstancesPasswordResponse;
const SrcImage = models.SrcImage;
const InstanceTypeConfig = models.InstanceTypeConfig;
const DescribeNodeResponse = models.DescribeNodeResponse;
const RemovePrivateIpAddressesResponse = models.RemovePrivateIpAddressesResponse;
const DescribeDefaultSubnetResponse = models.DescribeDefaultSubnetResponse;
const VpcInfo = models.VpcInfo;
const DescribeCustomImageTaskResponse = models.DescribeCustomImageTaskResponse;
const SecurityGroup = models.SecurityGroup;
const DeleteSubnetRequest = models.DeleteSubnetRequest;
const DescribeModuleRequest = models.DescribeModuleRequest;
const Position = models.Position;
const CreateModuleResponse = models.CreateModuleResponse;
const RebootInstancesRequest = models.RebootInstancesRequest;
const AllocateAddressesRequest = models.AllocateAddressesRequest;
const DeleteNetworkInterfaceRequest = models.DeleteNetworkInterfaceRequest;
const RemovePrivateIpAddressesRequest = models.RemovePrivateIpAddressesRequest;
const ModifyInstancesAttributeRequest = models.ModifyInstancesAttributeRequest;
const InstanceFamilyTypeConfig = models.InstanceFamilyTypeConfig;
const ResetInstancesResponse = models.ResetInstancesResponse;
const DescribeImageRequest = models.DescribeImageRequest;
const MigratePrivateIpAddressRequest = models.MigratePrivateIpAddressRequest;
const ModifySubnetAttributeResponse = models.ModifySubnetAttributeResponse;
const ZoneInfo = models.ZoneInfo;
const DescribeNodeRequest = models.DescribeNodeRequest;
const CreateSubnetResponse = models.CreateSubnetResponse;
const ResetInstancesPasswordRequest = models.ResetInstancesPasswordRequest;
const Area = models.Area;
const DescribeConfigRequest = models.DescribeConfigRequest;
const DescribeInstanceVncUrlRequest = models.DescribeInstanceVncUrlRequest;
const NetworkStorageRange = models.NetworkStorageRange;
const StartInstancesResponse = models.StartInstancesResponse;
const CreateVpcResponse = models.CreateVpcResponse;
const AssistantCidr = models.AssistantCidr;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const NetworkInterface = models.NetworkInterface;
const CreateModuleRequest = models.CreateModuleRequest;
const ModifyInstancesAttributeResponse = models.ModifyInstancesAttributeResponse;
const ReleaseAddressesResponse = models.ReleaseAddressesResponse;
const DescribeInstancesDeniedActionsResponse = models.DescribeInstancesDeniedActionsResponse;
const DisassociateAddressRequest = models.DisassociateAddressRequest;
const TaskOutput = models.TaskOutput;
const ModuleCounter = models.ModuleCounter;
const ZoneInstanceCountISP = models.ZoneInstanceCountISP;
const TaskInput = models.TaskInput;
const StartInstancesRequest = models.StartInstancesRequest;
const Tag = models.Tag;
const DescribeDefaultSubnetRequest = models.DescribeDefaultSubnetRequest;
const ResetInstancesMaxBandwidthResponse = models.ResetInstancesMaxBandwidthResponse;
const DeleteVpcRequest = models.DeleteVpcRequest;
const CreateNetworkInterfaceResponse = models.CreateNetworkInterfaceResponse;
const Node = models.Node;
const RunInstancesResponse = models.RunInstancesResponse;
const DescribeAddressQuotaRequest = models.DescribeAddressQuotaRequest;
const DescribeInstanceTypeConfigResponse = models.DescribeInstanceTypeConfigResponse;
const NodeInstanceNum = models.NodeInstanceNum;
const DescribeAddressesResponse = models.DescribeAddressesResponse;
const ImportImageRequest = models.ImportImageRequest;
const DetachNetworkInterfaceResponse = models.DetachNetworkInterfaceResponse;
const InstanceFamilyConfig = models.InstanceFamilyConfig;
const DeleteModuleRequest = models.DeleteModuleRequest;
const DescribeVpcsRequest = models.DescribeVpcsRequest;
const ResetInstancesMaxBandwidthRequest = models.ResetInstancesMaxBandwidthRequest;
const OsVersion = models.OsVersion;
const PeakBase = models.PeakBase;
const ModifyModuleNetworkRequest = models.ModifyModuleNetworkRequest;
const Image = models.Image;
const TagSpecification = models.TagSpecification;
const DetachNetworkInterfaceRequest = models.DetachNetworkInterfaceRequest;
const DescribeConfigResponse = models.DescribeConfigResponse;
const ModifyDefaultSubnetResponse = models.ModifyDefaultSubnetResponse;
const DescribeImportImageOsResponse = models.DescribeImportImageOsResponse;
const DescribeModuleDetailResponse = models.DescribeModuleDetailResponse;
const StopInstancesRequest = models.StopInstancesRequest;
const Subnet = models.Subnet;
const ModifyVpcAttributeResponse = models.ModifyVpcAttributeResponse;
const DeleteVpcResponse = models.DeleteVpcResponse;
const ImageUrl = models.ImageUrl;
const ISP = models.ISP;
const PrivateIpAddressSpecification = models.PrivateIpAddressSpecification;
const ISPCounter = models.ISPCounter;
const MigratePrivateIpAddressResponse = models.MigratePrivateIpAddressResponse;
const CreateImageRequest = models.CreateImageRequest;
const Instance = models.Instance;
const EnhancedService = models.EnhancedService;
const DescribeInstanceVncUrlResponse = models.DescribeInstanceVncUrlResponse;
const DisassociateAddressResponse = models.DisassociateAddressResponse;
const DescribeInstanceTypeConfigRequest = models.DescribeInstanceTypeConfigRequest;
const ImportCustomImageRequest = models.ImportCustomImageRequest;
const DescribeModuleDetailRequest = models.DescribeModuleDetailRequest;
const AssociateAddressRequest = models.AssociateAddressRequest;
const ModifyVpcAttributeRequest = models.ModifyVpcAttributeRequest;
const DescribePeakNetworkOverviewResponse = models.DescribePeakNetworkOverviewResponse;
const AttachNetworkInterfaceResponse = models.AttachNetworkInterfaceResponse;
const CreateImageResponse = models.CreateImageResponse;
const DescribeBaseOverviewRequest = models.DescribeBaseOverviewRequest;
const ModifyModuleNetworkResponse = models.ModifyModuleNetworkResponse;
const DiskInfo = models.DiskInfo;
const DescribeImportImageOsRequest = models.DescribeImportImageOsRequest;
const NetworkInterfaceAttachment = models.NetworkInterfaceAttachment;
const StopInstancesResponse = models.StopInstancesResponse;
const ModifyModuleNameRequest = models.ModifyModuleNameRequest;
const ModifyDefaultSubnetRequest = models.ModifyDefaultSubnetRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const AssociateAddressResponse = models.AssociateAddressResponse;
const Filter = models.Filter;
const PublicIPAddressInfo = models.PublicIPAddressInfo;
const TerminateInstancesResponse = models.TerminateInstancesResponse;
const DescribeAddressesRequest = models.DescribeAddressesRequest;
const MigrateNetworkInterfaceRequest = models.MigrateNetworkInterfaceRequest;
const DescribeAddressQuotaResponse = models.DescribeAddressQuotaResponse;
const CreateSecurityGroupResponse = models.CreateSecurityGroupResponse;
const ZoneInstanceInfo = models.ZoneInstanceInfo;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const ModifyAddressAttributeRequest = models.ModifyAddressAttributeRequest;
const ModifyModuleImageResponse = models.ModifyModuleImageResponse;
const ResetInstancesRequest = models.ResetInstancesRequest;
const PeakNetwork = models.PeakNetwork;
const DescribeCustomImageTaskRequest = models.DescribeCustomImageTaskRequest;
const ImageOsList = models.ImageOsList;
const InstanceOperator = models.InstanceOperator;
const ModifyAddressAttributeResponse = models.ModifyAddressAttributeResponse;
const ImportImageResponse = models.ImportImageResponse;
const CreateSecurityGroupRequest = models.CreateSecurityGroupRequest;
const City = models.City;
const PrivateIPAddressInfo = models.PrivateIPAddressInfo;
const TerminateInstancesRequest = models.TerminateInstancesRequest;
const DeleteNetworkInterfaceResponse = models.DeleteNetworkInterfaceResponse;
const SimpleModule = models.SimpleModule;
const DescribePeakNetworkOverviewRequest = models.DescribePeakNetworkOverviewRequest;
const AssignPrivateIpAddressesResponse = models.AssignPrivateIpAddressesResponse;
const PeakNetworkRegionInfo = models.PeakNetworkRegionInfo;
const RebootInstancesResponse = models.RebootInstancesResponse;
const ModifyAddressesBandwidthRequest = models.ModifyAddressesBandwidthRequest;
const OperatorAction = models.OperatorAction;
const PeakFamilyInfo = models.PeakFamilyInfo;
const DescribePeakBaseOverviewResponse = models.DescribePeakBaseOverviewResponse;
const ModifyImageAttributeResponse = models.ModifyImageAttributeResponse;
const DescribeImageResponse = models.DescribeImageResponse;
const RegionInfo = models.RegionInfo;
const DeleteImageResponse = models.DeleteImageResponse;
const Address = models.Address;
const DescribeNetworkInterfacesResponse = models.DescribeNetworkInterfacesResponse;
const AssignPrivateIpAddressesRequest = models.AssignPrivateIpAddressesRequest;
const ModifyImageAttributeRequest = models.ModifyImageAttributeRequest;
const ReleaseAddressesRequest = models.ReleaseAddressesRequest;
const CreateVpcRequest = models.CreateVpcRequest;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const Country = models.Country;
const ModifySubnetAttributeRequest = models.ModifySubnetAttributeRequest;
const AllocateAddressesResponse = models.AllocateAddressesResponse;
const AttachNetworkInterfaceRequest = models.AttachNetworkInterfaceRequest;
const ModuleItem = models.ModuleItem;
const ModifyModuleImageRequest = models.ModifyModuleImageRequest;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const MigrateNetworkInterfaceResponse = models.MigrateNetworkInterfaceResponse;
const DescribeVpcsResponse = models.DescribeVpcsResponse;
const DeleteImageRequest = models.DeleteImageRequest;
const Module = models.Module;
const DescribeBaseOverviewResponse = models.DescribeBaseOverviewResponse;


/**
 * ecm client
 * @class
 */
class EcmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ecm.tencentcloudapi.com", "2019-07-19", credential, region, profile);
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
     * 创建ECM实例
     * @param {RunInstancesRequest} req
     * @param {function(string, RunInstancesResponse):void} cb
     * @public
     */
    RunInstances(req, cb) {
        let resp = new RunInstancesResponse();
        this.request("RunInstances", req, resp, cb);
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
     * 将弹性公网IP（简称 EIP）绑定到实例或弹性网卡的指定内网 IP 上。
将 EIP 绑定到实例（CVM）上，其本质是将 EIP 绑定到实例上主网卡的主内网 IP 上。
将 EIP 绑定到主网卡的主内网IP上，绑定过程会把其上绑定的普通公网 IP 自动解绑并释放。
将 EIP 绑定到指定网卡的内网 IP上（非主网卡的主内网IP），则必须先解绑该 EIP，才能再绑定新的。
将 EIP 绑定到NAT网关，请使用接口EipBindNatGateway
EIP 如果欠费或被封堵，则不能被绑定。
只有状态为 UNBIND 的 EIP 才能够被绑定。
     * @param {AssociateAddressRequest} req
     * @param {function(string, AssociateAddressResponse):void} cb
     * @public
     */
    AssociateAddress(req, cb) {
        let resp = new AssociateAddressResponse();
        this.request("AssociateAddress", req, resp, cb);
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
     * ModifyModuleImage
     * @param {ModifyModuleImageRequest} req
     * @param {function(string, ModifyModuleImageResponse):void} cb
     * @public
     */
    ModifyModuleImage(req, cb) {
        let resp = new ModifyModuleImageResponse();
        this.request("ModifyModuleImage", req, resp, cb);
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
     * 删除镜像
     * @param {DeleteImageRequest} req
     * @param {function(string, DeleteImageResponse):void} cb
     * @public
     */
    DeleteImage(req, cb) {
        let resp = new DeleteImageResponse();
        this.request("DeleteImage", req, resp, cb);
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
     * 创建子网，若创建成功，则此子网会成为此可用区的默认子网。
     * @param {CreateSubnetRequest} req
     * @param {function(string, CreateSubnetResponse):void} cb
     * @public
     */
    CreateSubnet(req, cb) {
        let resp = new CreateSubnetResponse();
        this.request("CreateSubnet", req, resp, cb);
    }


}
module.exports = EcmClient;
