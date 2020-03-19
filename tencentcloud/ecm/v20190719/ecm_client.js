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
const City = models.City;
const PrivateIPAddressInfo = models.PrivateIPAddressInfo;
const ResetInstancesRequest = models.ResetInstancesRequest;
const ModifyModuleNameResponse = models.ModifyModuleNameResponse;
const Area = models.Area;
const DescribeNodeRequest = models.DescribeNodeRequest;
const DescribeConfigRequest = models.DescribeConfigRequest;
const SimpleModule = models.SimpleModule;
const ISP = models.ISP;
const ISPCounter = models.ISPCounter;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DescribeModuleResponse = models.DescribeModuleResponse;
const DescribePeakNetworkOverviewRequest = models.DescribePeakNetworkOverviewRequest;
const EnhancedService = models.EnhancedService;
const DescribeInstancesDeniedActionsRequest = models.DescribeInstancesDeniedActionsRequest;
const Internet = models.Internet;
const DeleteModuleResponse = models.DeleteModuleResponse;
const DescribeInstanceTypeConfigRequest = models.DescribeInstanceTypeConfigRequest;
const RebootInstancesResponse = models.RebootInstancesResponse;
const ModifyInstancesAttributeResponse = models.ModifyInstancesAttributeResponse;
const DescribeModuleDetailRequest = models.DescribeModuleDetailRequest;
const DescribeInstancesDeniedActionsResponse = models.DescribeInstancesDeniedActionsResponse;
const PeakFamilyInfo = models.PeakFamilyInfo;
const DescribePeakNetworkOverviewResponse = models.DescribePeakNetworkOverviewResponse;
const OperatorAction = models.OperatorAction;
const DescribePeakBaseOverviewResponse = models.DescribePeakBaseOverviewResponse;
const TerminateInstancesRequest = models.TerminateInstancesRequest;
const RegionInfo = models.RegionInfo;
const DescribeImageResponse = models.DescribeImageResponse;
const ModuleCounter = models.ModuleCounter;
const DescribePeakBaseOverviewRequest = models.DescribePeakBaseOverviewRequest;
const PeakNetworkRegionInfo = models.PeakNetworkRegionInfo;
const DescribeBaseOverviewRequest = models.DescribeBaseOverviewRequest;
const DeleteImageResponse = models.DeleteImageResponse;
const DiskInfo = models.DiskInfo;
const InstanceTypeConfig = models.InstanceTypeConfig;
const ResetInstancesMaxBandwidthResponse = models.ResetInstancesMaxBandwidthResponse;
const NodeInstanceNum = models.NodeInstanceNum;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const PublicIPAddressInfo = models.PublicIPAddressInfo;
const Node = models.Node;
const NetworkStorageRange = models.NetworkStorageRange;
const CreateModuleRequest = models.CreateModuleRequest;
const ModifyModuleNameRequest = models.ModifyModuleNameRequest;
const InstanceFamilyConfig = models.InstanceFamilyConfig;
const DescribeInstanceTypeConfigResponse = models.DescribeInstanceTypeConfigResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const Country = models.Country;
const DescribeNodeResponse = models.DescribeNodeResponse;
const ModifyModuleImageResponse = models.ModifyModuleImageResponse;
const Filter = models.Filter;
const Tag = models.Tag;
const ZoneInfo = models.ZoneInfo;
const TerminateInstancesResponse = models.TerminateInstancesResponse;
const DescribeModuleRequest = models.DescribeModuleRequest;
const ModifyModuleImageRequest = models.ModifyModuleImageRequest;
const Position = models.Position;
const DeleteModuleRequest = models.DeleteModuleRequest;
const CreateModuleResponse = models.CreateModuleResponse;
const RebootInstancesRequest = models.RebootInstancesRequest;
const Province = models.Province;
const ResetInstancesMaxBandwidthRequest = models.ResetInstancesMaxBandwidthRequest;
const SrcImage = models.SrcImage;
const PeakBase = models.PeakBase;
const ZoneInstanceInfo = models.ZoneInstanceInfo;
const ModifyModuleNetworkResponse = models.ModifyModuleNetworkResponse;
const ModuleItem = models.ModuleItem;
const Instance = models.Instance;
const DeleteImageRequest = models.DeleteImageRequest;
const Image = models.Image;
const ModifyModuleNetworkRequest = models.ModifyModuleNetworkRequest;
const PeakNetwork = models.PeakNetwork;
const DescribeConfigResponse = models.DescribeConfigResponse;
const DescribeBaseOverviewResponse = models.DescribeBaseOverviewResponse;
const ModifyInstancesAttributeRequest = models.ModifyInstancesAttributeRequest;
const InstanceFamilyTypeConfig = models.InstanceFamilyTypeConfig;
const ResetInstancesResponse = models.ResetInstancesResponse;
const DescribeImageRequest = models.DescribeImageRequest;
const InstanceOperator = models.InstanceOperator;
const Module = models.Module;
const DescribeModuleDetailResponse = models.DescribeModuleDetailResponse;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;


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


}
module.exports = EcmClient;
