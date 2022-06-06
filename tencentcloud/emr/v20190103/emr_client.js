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
const ClusterSetting = models.ClusterSetting;
const PodSaleSpec = models.PodSaleSpec;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const PodVolume = models.PodVolume;
const SyncPodStateResponse = models.SyncPodStateResponse;
const CreateInstanceResponse = models.CreateInstanceResponse;
const TerminateTasksRequest = models.TerminateTasksRequest;
const HostVolumeContext = models.HostVolumeContext;
const Step = models.Step;
const SubnetInfo = models.SubnetInfo;
const MetaDbInfo = models.MetaDbInfo;
const DiskSpec = models.DiskSpec;
const COSSettings = models.COSSettings;
const ClusterInstancesInfo = models.ClusterInstancesInfo;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;
const QuotaEntity = models.QuotaEntity;
const TopologyInfo = models.TopologyInfo;
const Tag = models.Tag;
const EmrListInstance = models.EmrListInstance;
const ModifyResourceScheduleConfigResponse = models.ModifyResourceScheduleConfigResponse;
const EmrProductConfigOutter = models.EmrProductConfigOutter;
const VPCSettings = models.VPCSettings;
const DescribeInstancesListResponse = models.DescribeInstancesListResponse;
const DescribeInstanceRenewNodesRequest = models.DescribeInstanceRenewNodesRequest;
const JobResult = models.JobResult;
const PodSpec = models.PodSpec;
const InquiryPriceRenewInstanceResponse = models.InquiryPriceRenewInstanceResponse;
const DescribeJobFlowRequest = models.DescribeJobFlowRequest;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const TerminateInstanceRequest = models.TerminateInstanceRequest;
const JobFlowResourceSpec = models.JobFlowResourceSpec;
const Configuration = models.Configuration;
const DescribeResourceScheduleRequest = models.DescribeResourceScheduleRequest;
const Placement = models.Placement;
const PodParameter = models.PodParameter;
const DescribeUsersForUserManagerRequest = models.DescribeUsersForUserManagerRequest;
const RenewInstancesInfo = models.RenewInstancesInfo;
const RunJobFlowResponse = models.RunJobFlowResponse;
const MultiDisk = models.MultiDisk;
const SearchItem = models.SearchItem;
const MultiZoneSetting = models.MultiZoneSetting;
const TerminateInstanceResponse = models.TerminateInstanceResponse;
const InquiryPriceUpdateInstanceResponse = models.InquiryPriceUpdateInstanceResponse;
const NewResourceSpec = models.NewResourceSpec;
const PersistentVolumeContext = models.PersistentVolumeContext;
const DescribeResourceScheduleResponse = models.DescribeResourceScheduleResponse;
const ModifyResourceSchedulerRequest = models.ModifyResourceSchedulerRequest;
const LoginSettings = models.LoginSettings;
const RunJobFlowRequest = models.RunJobFlowRequest;
const PriceResource = models.PriceResource;
const CustomServiceDefine = models.CustomServiceDefine;
const DescribeCvmQuotaResponse = models.DescribeCvmQuotaResponse;
const BootstrapAction = models.BootstrapAction;
const DescribeCvmQuotaRequest = models.DescribeCvmQuotaRequest;
const DescribeClusterNodesRequest = models.DescribeClusterNodesRequest;
const SyncPodStateRequest = models.SyncPodStateRequest;
const CreateInstanceRequest = models.CreateInstanceRequest;
const Execution = models.Execution;
const UpdateInstanceSettings = models.UpdateInstanceSettings;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const InquiryPriceUpdateInstanceRequest = models.InquiryPriceUpdateInstanceRequest;
const DescribeInstancesListRequest = models.DescribeInstancesListRequest;
const OutterResource = models.OutterResource;
const ModifyResourcePoolsResponse = models.ModifyResourcePoolsResponse;
const TerminateTasksResponse = models.TerminateTasksResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeUsersForUserManagerResponse = models.DescribeUsersForUserManagerResponse;
const InquiryPriceRenewInstanceRequest = models.InquiryPriceRenewInstanceRequest;
const CdbInfo = models.CdbInfo;
const InquirePriceRenewEmrResponse = models.InquirePriceRenewEmrResponse;
const MultiDiskMC = models.MultiDiskMC;
const AddUsersForUserManagerRequest = models.AddUsersForUserManagerRequest;
const CustomMetaInfo = models.CustomMetaInfo;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const DescribeClusterNodesResponse = models.DescribeClusterNodesResponse;
const ModifyResourceScheduleConfigRequest = models.ModifyResourceScheduleConfigRequest;
const UserInfoForUserManager = models.UserInfoForUserManager;
const DynamicPodSpec = models.DynamicPodSpec;
const PodState = models.PodState;
const ExternalService = models.ExternalService;
const PreExecuteFileSettings = models.PreExecuteFileSettings;
const ClusterExternalServiceInfo = models.ClusterExternalServiceInfo;
const InquiryPriceScaleOutInstanceRequest = models.InquiryPriceScaleOutInstanceRequest;
const Resource = models.Resource;
const Filters = models.Filters;
const InquirePriceRenewEmrRequest = models.InquirePriceRenewEmrRequest;
const DescribeInstanceRenewNodesResponse = models.DescribeInstanceRenewNodesResponse;
const DiskGroup = models.DiskGroup;
const InquiryPriceScaleOutInstanceResponse = models.InquiryPriceScaleOutInstanceResponse;
const ModifyResourceSchedulerResponse = models.ModifyResourceSchedulerResponse;
const ShortNodeInfo = models.ShortNodeInfo;
const AddUsersForUserManagerResponse = models.AddUsersForUserManagerResponse;
const NodeHardwareInfo = models.NodeHardwareInfo;
const JobFlowResource = models.JobFlowResource;
const ModifyResourcePoolsRequest = models.ModifyResourcePoolsRequest;
const DescribeJobFlowResponse = models.DescribeJobFlowResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;


/**
 * emr client
 * @class
 */
class EmrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("emr.tencentcloudapi.com", "2019-01-03", credential, region, profile);
    }
    
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     * @param {TerminateInstanceRequest} req
     * @param {function(string, TerminateInstanceResponse):void} cb
     * @public
     */
    TerminateInstance(req, cb) {
        let resp = new TerminateInstanceResponse();
        this.request("TerminateInstance", req, resp, cb);
    }

    /**
     * 变配询价
     * @param {InquiryPriceUpdateInstanceRequest} req
     * @param {function(string, InquiryPriceUpdateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpdateInstance(req, cb) {
        let resp = new InquiryPriceUpdateInstanceResponse();
        this.request("InquiryPriceUpdateInstance", req, resp, cb);
    }

    /**
     * 批量导出用户
     * @param {DescribeUsersForUserManagerRequest} req
     * @param {function(string, DescribeUsersForUserManagerResponse):void} cb
     * @public
     */
    DescribeUsersForUserManager(req, cb) {
        let resp = new DescribeUsersForUserManagerResponse();
        this.request("DescribeUsersForUserManager", req, resp, cb);
    }

    /**
     * 续费询价。
     * @param {InquiryPriceRenewInstanceRequest} req
     * @param {function(string, InquiryPriceRenewInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewInstance(req, cb) {
        let resp = new InquiryPriceRenewInstanceResponse();
        this.request("InquiryPriceRenewInstance", req, resp, cb);
    }

    /**
     * 查询流程任务
     * @param {DescribeJobFlowRequest} req
     * @param {function(string, DescribeJobFlowResponse):void} cb
     * @public
     */
    DescribeJobFlow(req, cb) {
        let resp = new DescribeJobFlowResponse();
        this.request("DescribeJobFlow", req, resp, cb);
    }

    /**
     * 集群续费询价。
     * @param {InquirePriceRenewEmrRequest} req
     * @param {function(string, InquirePriceRenewEmrResponse):void} cb
     * @public
     */
    InquirePriceRenewEmr(req, cb) {
        let resp = new InquirePriceRenewEmrResponse();
        this.request("InquirePriceRenewEmr", req, resp, cb);
    }

    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     * @param {InquiryPriceScaleOutInstanceRequest} req
     * @param {function(string, InquiryPriceScaleOutInstanceResponse):void} cb
     * @public
     */
    InquiryPriceScaleOutInstance(req, cb) {
        let resp = new InquiryPriceScaleOutInstanceResponse();
        this.request("InquiryPriceScaleOutInstance", req, resp, cb);
    }

    /**
     * 获取账户的CVM配额
     * @param {DescribeCvmQuotaRequest} req
     * @param {function(string, DescribeCvmQuotaResponse):void} cb
     * @public
     */
    DescribeCvmQuota(req, cb) {
        let resp = new DescribeCvmQuotaResponse();
        this.request("DescribeCvmQuota", req, resp, cb);
    }

    /**
     * 实例扩容
     * @param {ScaleOutInstanceRequest} req
     * @param {function(string, ScaleOutInstanceResponse):void} cb
     * @public
     */
    ScaleOutInstance(req, cb) {
        let resp = new ScaleOutInstanceResponse();
        this.request("ScaleOutInstance", req, resp, cb);
    }

    /**
     * 查询EMR实例
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 创建流程作业
     * @param {RunJobFlowRequest} req
     * @param {function(string, RunJobFlowResponse):void} cb
     * @public
     */
    RunJobFlow(req, cb) {
        let resp = new RunJobFlowResponse();
        this.request("RunJobFlow", req, resp, cb);
    }

    /**
     * 新增用户列表（用户管理）
     * @param {AddUsersForUserManagerRequest} req
     * @param {function(string, AddUsersForUserManagerResponse):void} cb
     * @public
     */
    AddUsersForUserManager(req, cb) {
        let resp = new AddUsersForUserManagerResponse();
        this.request("AddUsersForUserManager", req, resp, cb);
    }

    /**
     * 预付费集群隔离后续费资源查询
     * @param {DescribeInstanceRenewNodesRequest} req
     * @param {function(string, DescribeInstanceRenewNodesResponse):void} cb
     * @public
     */
    DescribeInstanceRenewNodes(req, cb) {
        let resp = new DescribeInstanceRenewNodesResponse();
        this.request("DescribeInstanceRenewNodes", req, resp, cb);
    }

    /**
     * 修改了yarn的资源调度器，点击部署生效
     * @param {ModifyResourceSchedulerRequest} req
     * @param {function(string, ModifyResourceSchedulerResponse):void} cb
     * @public
     */
    ModifyResourceScheduler(req, cb) {
        let resp = new ModifyResourceSchedulerResponse();
        this.request("ModifyResourceScheduler", req, resp, cb);
    }

    /**
     * EMR同步TKE中POD状态
     * @param {SyncPodStateRequest} req
     * @param {function(string, SyncPodStateResponse):void} cb
     * @public
     */
    SyncPodState(req, cb) {
        let resp = new SyncPodStateResponse();
        this.request("SyncPodState", req, resp, cb);
    }

    /**
     * 创建EMR集群实例
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * 创建实例询价
     * @param {InquiryPriceCreateInstanceRequest} req
     * @param {function(string, InquiryPriceCreateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceCreateInstance(req, cb) {
        let resp = new InquiryPriceCreateInstanceResponse();
        this.request("InquiryPriceCreateInstance", req, resp, cb);
    }

    /**
     * 获取yarn资源调度页面的数据
     * @param {DescribeResourceScheduleRequest} req
     * @param {function(string, DescribeResourceScheduleResponse):void} cb
     * @public
     */
    DescribeResourceSchedule(req, cb) {
        let resp = new DescribeResourceScheduleResponse();
        this.request("DescribeResourceSchedule", req, resp, cb);
    }

    /**
     * 修改yarn资源调度的资源配置
     * @param {ModifyResourceScheduleConfigRequest} req
     * @param {function(string, ModifyResourceScheduleConfigResponse):void} cb
     * @public
     */
    ModifyResourceScheduleConfig(req, cb) {
        let resp = new ModifyResourceScheduleConfigResponse();
        this.request("ModifyResourceScheduleConfig", req, resp, cb);
    }

    /**
     * 缩容Task节点
     * @param {TerminateTasksRequest} req
     * @param {function(string, TerminateTasksResponse):void} cb
     * @public
     */
    TerminateTasks(req, cb) {
        let resp = new TerminateTasksResponse();
        this.request("TerminateTasks", req, resp, cb);
    }

    /**
     * 查询硬件节点信息
     * @param {DescribeClusterNodesRequest} req
     * @param {function(string, DescribeClusterNodesResponse):void} cb
     * @public
     */
    DescribeClusterNodes(req, cb) {
        let resp = new DescribeClusterNodesResponse();
        this.request("DescribeClusterNodes", req, resp, cb);
    }

    /**
     * EMR集群实例列表查询
     * @param {DescribeInstancesListRequest} req
     * @param {function(string, DescribeInstancesListResponse):void} cb
     * @public
     */
    DescribeInstancesList(req, cb) {
        let resp = new DescribeInstancesListResponse();
        this.request("DescribeInstancesList", req, resp, cb);
    }

    /**
     * 刷新动态资源池
     * @param {ModifyResourcePoolsRequest} req
     * @param {function(string, ModifyResourcePoolsResponse):void} cb
     * @public
     */
    ModifyResourcePools(req, cb) {
        let resp = new ModifyResourcePoolsResponse();
        this.request("ModifyResourcePools", req, resp, cb);
    }


}
module.exports = EmrClient;
