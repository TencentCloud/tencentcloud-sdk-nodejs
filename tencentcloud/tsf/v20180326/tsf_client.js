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
const DescribeGroupInstancesResponse = models.DescribeGroupInstancesResponse;
const DescribeDownloadInfoRequest = models.DescribeDownloadInfoRequest;
const DescribeSimpleApplicationsResponse = models.DescribeSimpleApplicationsResponse;
const ImageTag = models.ImageTag;
const DescribePublicConfigSummaryRequest = models.DescribePublicConfigSummaryRequest;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const DescribeMicroserviceRequest = models.DescribeMicroserviceRequest;
const CosCredentials = models.CosCredentials;
const ExpandGroupRequest = models.ExpandGroupRequest;
const DeleteServerlessGroupRequest = models.DeleteServerlessGroupRequest;
const DescribeImageTagsRequest = models.DescribeImageTagsRequest;
const ReleaseConfigResponse = models.ReleaseConfigResponse;
const TsfPageSimpleGroup = models.TsfPageSimpleGroup;
const PkgInfo = models.PkgInfo;
const VmGroup = models.VmGroup;
const RevocationConfigRequest = models.RevocationConfigRequest;
const ModifyUploadInfoRequest = models.ModifyUploadInfoRequest;
const DescribeUploadInfoResponse = models.DescribeUploadInfoResponse;
const DescribeReleasedConfigRequest = models.DescribeReleasedConfigRequest;
const StopGroupResponse = models.StopGroupResponse;
const StopContainerGroupResponse = models.StopContainerGroupResponse;
const CreateGroupRequest = models.CreateGroupRequest;
const ModifyMicroserviceRequest = models.ModifyMicroserviceRequest;
const DescribeConfigReleasesRequest = models.DescribeConfigReleasesRequest;
const TsfPageConfigRelease = models.TsfPageConfigRelease;
const CreateContainGroupResponse = models.CreateContainGroupResponse;
const DescribeContainerGroupDetailResponse = models.DescribeContainerGroupDetailResponse;
const SimpleApplication = models.SimpleApplication;
const DescribePublicConfigSummaryResponse = models.DescribePublicConfigSummaryResponse;
const DescribeSimpleClustersResponse = models.DescribeSimpleClustersResponse;
const DescribePublicConfigReleaseLogsRequest = models.DescribePublicConfigReleaseLogsRequest;
const CreateServerlessGroupResponse = models.CreateServerlessGroupResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const StartGroupRequest = models.StartGroupRequest;
const DeployServerlessGroupResponse = models.DeployServerlessGroupResponse;
const DescribeConfigsResponse = models.DescribeConfigsResponse;
const DescribeApplicationAttributeResponse = models.DescribeApplicationAttributeResponse;
const DescribeApplicationsResponse = models.DescribeApplicationsResponse;
const ModifyContainerReplicasRequest = models.ModifyContainerReplicasRequest;
const TsfPageMsInstance = models.TsfPageMsInstance;
const DeleteMicroserviceRequest = models.DeleteMicroserviceRequest;
const CreatePublicConfigRequest = models.CreatePublicConfigRequest;
const RemoveInstancesResponse = models.RemoveInstancesResponse;
const DescribeContainerGroupsRequest = models.DescribeContainerGroupsRequest;
const ModifyContainerReplicasResponse = models.ModifyContainerReplicasResponse;
const DescribeConfigRequest = models.DescribeConfigRequest;
const Namespace = models.Namespace;
const TsfPageCluster = models.TsfPageCluster;
const DescribeGroupResponse = models.DescribeGroupResponse;
const DescribeGroupsResponse = models.DescribeGroupsResponse;
const Env = models.Env;
const DeleteContainerGroupResponse = models.DeleteContainerGroupResponse;
const DescribeSimpleGroupsRequest = models.DescribeSimpleGroupsRequest;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const DeleteServerlessGroupResponse = models.DeleteServerlessGroupResponse;
const DeleteImageTagsResponse = models.DeleteImageTagsResponse;
const ModifyUploadInfoResponse = models.ModifyUploadInfoResponse;
const DescribeImageTagsResponse = models.DescribeImageTagsResponse;
const DeleteGroupRequest = models.DeleteGroupRequest;
const TsfPageConfig = models.TsfPageConfig;
const ServerlessGroup = models.ServerlessGroup;
const DescribeApplicationResponse = models.DescribeApplicationResponse;
const DescribeConfigReleaseLogsResponse = models.DescribeConfigReleaseLogsResponse;
const RevocationConfigResponse = models.RevocationConfigResponse;
const DescribeSimpleGroupsResponse = models.DescribeSimpleGroupsResponse;
const ContainerGroupDetail = models.ContainerGroupDetail;
const DeletePublicConfigRequest = models.DeletePublicConfigRequest;
const DeleteNamespaceResponse = models.DeleteNamespaceResponse;
const CreateMicroserviceRequest = models.CreateMicroserviceRequest;
const DescribePkgsRequest = models.DescribePkgsRequest;
const ShrinkInstancesRequest = models.ShrinkInstancesRequest;
const ShrinkInstancesResponse = models.ShrinkInstancesResponse;
const DeleteImageTagsRequest = models.DeleteImageTagsRequest;
const DescribeApplicationAttributeRequest = models.DescribeApplicationAttributeRequest;
const RollbackConfigRequest = models.RollbackConfigRequest;
const DescribeConfigsRequest = models.DescribeConfigsRequest;
const DescribePublicConfigResponse = models.DescribePublicConfigResponse;
const DeleteConfigResponse = models.DeleteConfigResponse;
const TsfPageNamespace = models.TsfPageNamespace;
const DescribeSimpleApplicationsRequest = models.DescribeSimpleApplicationsRequest;
const DescribeConfigResponse = models.DescribeConfigResponse;
const DescribeSimpleNamespacesRequest = models.DescribeSimpleNamespacesRequest;
const SimpleGroup = models.SimpleGroup;
const MsInstance = models.MsInstance;
const ExpandGroupResponse = models.ExpandGroupResponse;
const DescribeServerlessGroupsResponse = models.DescribeServerlessGroupsResponse;
const DescribePublicConfigsResponse = models.DescribePublicConfigsResponse;
const AddInstancesResponse = models.AddInstancesResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const RevocationPublicConfigRequest = models.RevocationPublicConfigRequest;
const DescribeSimpleClustersRequest = models.DescribeSimpleClustersRequest;
const StartContainerGroupRequest = models.StartContainerGroupRequest;
const DeleteConfigRequest = models.DeleteConfigRequest;
const DescribePublicConfigReleaseLogsResponse = models.DescribePublicConfigReleaseLogsResponse;
const VmGroupSimple = models.VmGroupSimple;
const Instance = models.Instance;
const DeployServerlessGroupRequest = models.DeployServerlessGroupRequest;
const Config = models.Config;
const CreateClusterResponse = models.CreateClusterResponse;
const DeletePublicConfigResponse = models.DeletePublicConfigResponse;
const CreateMicroserviceResponse = models.CreateMicroserviceResponse;
const CreateClusterRequest = models.CreateClusterRequest;
const StopGroupRequest = models.StopGroupRequest;
const ConfigReleaseLog = models.ConfigReleaseLog;
const ShrinkGroupResponse = models.ShrinkGroupResponse;
const CosUploadInfo = models.CosUploadInfo;
const ConfigRelease = models.ConfigRelease;
const DeleteContainerGroupRequest = models.DeleteContainerGroupRequest;
const DescribeContainerGroupDetailRequest = models.DescribeContainerGroupDetailRequest;
const ReleaseConfigRequest = models.ReleaseConfigRequest;
const CreateConfigRequest = models.CreateConfigRequest;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const PkgList = models.PkgList;
const DescribeUploadInfoRequest = models.DescribeUploadInfoRequest;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const StopContainerGroupRequest = models.StopContainerGroupRequest;
const TsfPageApplication = models.TsfPageApplication;
const DescribeGroupRequest = models.DescribeGroupRequest;
const ImageTagsResult = models.ImageTagsResult;
const ProtocolPort = models.ProtocolPort;
const DescribeServerlessGroupRequest = models.DescribeServerlessGroupRequest;
const TsfPageVmGroup = models.TsfPageVmGroup;
const DescribePkgsResponse = models.DescribePkgsResponse;
const DescribeSimpleNamespacesResponse = models.DescribeSimpleNamespacesResponse;
const VpcConfig = models.VpcConfig;
const ApplicationAttribute = models.ApplicationAttribute;
const DeleteImageTag = models.DeleteImageTag;
const DeletePkgsResponse = models.DeletePkgsResponse;
const DescribeConfigReleasesResponse = models.DescribeConfigReleasesResponse;
const Cluster = models.Cluster;
const ModifyMicroserviceResponse = models.ModifyMicroserviceResponse;
const DescribeMicroservicesResponse = models.DescribeMicroservicesResponse;
const DescribeDownloadInfoResponse = models.DescribeDownloadInfoResponse;
const DescribeApplicationRequest = models.DescribeApplicationRequest;
const Microservice = models.Microservice;
const TsfPageConfigReleaseLog = models.TsfPageConfigReleaseLog;
const DescribePublicConfigRequest = models.DescribePublicConfigRequest;
const ApplicationForPage = models.ApplicationForPage;
const StartGroupResponse = models.StartGroupResponse;
const DeployContainerGroupResponse = models.DeployContainerGroupResponse;
const CreatePublicConfigResponse = models.CreatePublicConfigResponse;
const DeleteMicroserviceResponse = models.DeleteMicroserviceResponse;
const ContainGroupResult = models.ContainGroupResult;
const DescribeReleasedConfigResponse = models.DescribeReleasedConfigResponse;
const DescribeMicroservicesRequest = models.DescribeMicroservicesRequest;
const ShrinkGroupRequest = models.ShrinkGroupRequest;
const TsfPageSimpleApplication = models.TsfPageSimpleApplication;
const CreateConfigResponse = models.CreateConfigResponse;
const RevocationPublicConfigResponse = models.RevocationPublicConfigResponse;
const DescribeConfigReleaseLogsRequest = models.DescribeConfigReleaseLogsRequest;
const DescribeContainerGroupsResponse = models.DescribeContainerGroupsResponse;
const DescribeGroupsRequest = models.DescribeGroupsRequest;
const ModifyContainerGroupRequest = models.ModifyContainerGroupRequest;
const TsfPageMicroservice = models.TsfPageMicroservice;
const DescribePublicConfigsRequest = models.DescribePublicConfigsRequest;
const AddInstancesRequest = models.AddInstancesRequest;
const RollbackConfigResponse = models.RollbackConfigResponse;
const DescribeApplicationsRequest = models.DescribeApplicationsRequest;
const StartContainerGroupResponse = models.StartContainerGroupResponse;
const CreateApplicationRequest = models.CreateApplicationRequest;
const DescribePublicConfigReleasesRequest = models.DescribePublicConfigReleasesRequest;
const DeleteNamespaceRequest = models.DeleteNamespaceRequest;
const RemoveInstancesRequest = models.RemoveInstancesRequest;
const DeployGroupRequest = models.DeployGroupRequest;
const TsfPageInstance = models.TsfPageInstance;
const CreateServerlessGroupRequest = models.CreateServerlessGroupRequest;
const DescribeMicroserviceResponse = models.DescribeMicroserviceResponse;
const DeleteGroupResponse = models.DeleteGroupResponse;
const DescribeServerlessGroupsRequest = models.DescribeServerlessGroupsRequest;
const DeployContainerGroupRequest = models.DeployContainerGroupRequest;
const CosDownloadInfo = models.CosDownloadInfo;
const DeletePkgsRequest = models.DeletePkgsRequest;
const ServerlessGroupPage = models.ServerlessGroupPage;
const DescribeConfigSummaryResponse = models.DescribeConfigSummaryResponse;
const CreateContainGroupRequest = models.CreateContainGroupRequest;
const ContainGroup = models.ContainGroup;
const DescribePublicConfigReleasesResponse = models.DescribePublicConfigReleasesResponse;
const CreateApplicationResponse = models.CreateApplicationResponse;
const DescribeConfigSummaryRequest = models.DescribeConfigSummaryRequest;
const DeployGroupResponse = models.DeployGroupResponse;
const ModifyContainerGroupResponse = models.ModifyContainerGroupResponse;
const ReleasePublicConfigResponse = models.ReleasePublicConfigResponse;
const ReleasePublicConfigRequest = models.ReleasePublicConfigRequest;
const DescribeServerlessGroupResponse = models.DescribeServerlessGroupResponse;
const TaskId = models.TaskId;
const DescribeGroupInstancesRequest = models.DescribeGroupInstancesRequest;
const CreateGroupResponse = models.CreateGroupResponse;


/**
 * tsf client
 * @class
 */
class TsfClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tsf.tencentcloudapi.com", "2018-03-26", credential, region, profile);
    }
    
    /**
     * 停止容器部署组
     * @param {StopContainerGroupRequest} req
     * @param {function(string, StopContainerGroupResponse):void} cb
     * @public
     */
    StopContainerGroup(req, cb) {
        let resp = new StopContainerGroupResponse();
        this.request("StopContainerGroup", req, resp, cb);
    }

    /**
     * 删除公共配置项
     * @param {DeletePublicConfigRequest} req
     * @param {function(string, DeletePublicConfigResponse):void} cb
     * @public
     */
    DeletePublicConfig(req, cb) {
        let resp = new DeletePublicConfigResponse();
        this.request("DeletePublicConfig", req, resp, cb);
    }

    /**
     * 创建容器部署组
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        let resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
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
     * 无
     * @param {DescribePkgsRequest} req
     * @param {function(string, DescribePkgsResponse):void} cb
     * @public
     */
    DescribePkgs(req, cb) {
        let resp = new DescribePkgsResponse();
        this.request("DescribePkgs", req, resp, cb);
    }

    /**
     * 修改容器部署组实例数
     * @param {ModifyContainerReplicasRequest} req
     * @param {function(string, ModifyContainerReplicasResponse):void} cb
     * @public
     */
    ModifyContainerReplicas(req, cb) {
        let resp = new ModifyContainerReplicasResponse();
        this.request("ModifyContainerReplicas", req, resp, cb);
    }

    /**
     * 启动容器部署组
     * @param {StartContainerGroupRequest} req
     * @param {function(string, StartContainerGroupResponse):void} cb
     * @public
     */
    StartContainerGroup(req, cb) {
        let resp = new StartContainerGroupResponse();
        this.request("StartContainerGroup", req, resp, cb);
    }

    /**
     * 查询配置汇总列表
     * @param {DescribeConfigSummaryRequest} req
     * @param {function(string, DescribeConfigSummaryResponse):void} cb
     * @public
     */
    DescribeConfigSummary(req, cb) {
        let resp = new DescribeConfigSummaryResponse();
        this.request("DescribeConfigSummary", req, resp, cb);
    }

    /**
     * 部署容器应用
     * @param {DeployContainerGroupRequest} req
     * @param {function(string, DeployContainerGroupResponse):void} cb
     * @public
     */
    DeployContainerGroup(req, cb) {
        let resp = new DeployContainerGroupResponse();
        this.request("DeployContainerGroup", req, resp, cb);
    }

    /**
     * 查询Serverless部署组列表
     * @param {DescribeServerlessGroupsRequest} req
     * @param {function(string, DescribeServerlessGroupsResponse):void} cb
     * @public
     */
    DescribeServerlessGroups(req, cb) {
        let resp = new DescribeServerlessGroupsResponse();
        this.request("DescribeServerlessGroups", req, resp, cb);
    }

    /**
     * 创建命名空间
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        let resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }

    /**
     * 删除应用
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        let resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
    }

    /**
     * 删除微服务
     * @param {DeleteMicroserviceRequest} req
     * @param {function(string, DeleteMicroserviceResponse):void} cb
     * @public
     */
    DeleteMicroservice(req, cb) {
        let resp = new DeleteMicroserviceResponse();
        this.request("DeleteMicroservice", req, resp, cb);
    }

    /**
     * 从 TSF 集群中批量移除云主机节点
     * @param {RemoveInstancesRequest} req
     * @param {function(string, RemoveInstancesResponse):void} cb
     * @public
     */
    RemoveInstances(req, cb) {
        let resp = new RemoveInstancesResponse();
        this.request("RemoveInstances", req, resp, cb);
    }

    /**
     * 删除命名空间
     * @param {DeleteNamespaceRequest} req
     * @param {function(string, DeleteNamespaceResponse):void} cb
     * @public
     */
    DeleteNamespace(req, cb) {
        let resp = new DeleteNamespaceResponse();
        this.request("DeleteNamespace", req, resp, cb);
    }

    /**
     * 查询虚拟机部署组云主机列表
     * @param {DescribeGroupInstancesRequest} req
     * @param {function(string, DescribeGroupInstancesResponse):void} cb
     * @public
     */
    DescribeGroupInstances(req, cb) {
        let resp = new DescribeGroupInstancesResponse();
        this.request("DescribeGroupInstances", req, resp, cb);
    }

    /**
     * 删除配置项
     * @param {DeleteConfigRequest} req
     * @param {function(string, DeleteConfigResponse):void} cb
     * @public
     */
    DeleteConfig(req, cb) {
        let resp = new DeleteConfigResponse();
        this.request("DeleteConfig", req, resp, cb);
    }

    /**
     * 查询公共配置汇总列表
     * @param {DescribePublicConfigSummaryRequest} req
     * @param {function(string, DescribePublicConfigSummaryResponse):void} cb
     * @public
     */
    DescribePublicConfigSummary(req, cb) {
        let resp = new DescribePublicConfigSummaryResponse();
        this.request("DescribePublicConfigSummary", req, resp, cb);
    }

    /**
     * 从软件仓库批量删除程序包。
一次最多支持删除1000个包，数量超过1000，返回UpperDeleteLimit错误。
     * @param {DeletePkgsRequest} req
     * @param {function(string, DeletePkgsResponse):void} cb
     * @public
     */
    DeletePkgs(req, cb) {
        let resp = new DeletePkgsResponse();
        this.request("DeletePkgs", req, resp, cb);
    }

    /**
     * 容器部署组列表
     * @param {DescribeContainerGroupsRequest} req
     * @param {function(string, DescribeContainerGroupsResponse):void} cb
     * @public
     */
    DescribeContainerGroups(req, cb) {
        let resp = new DescribeContainerGroupsResponse();
        this.request("DescribeContainerGroups", req, resp, cb);
    }

    /**
     * 查询公共配置项列表
     * @param {DescribePublicConfigsRequest} req
     * @param {function(string, DescribePublicConfigsResponse):void} cb
     * @public
     */
    DescribePublicConfigs(req, cb) {
        let resp = new DescribePublicConfigsResponse();
        this.request("DescribePublicConfigs", req, resp, cb);
    }

    /**
     * 撤回已发布的配置
     * @param {RevocationConfigRequest} req
     * @param {function(string, RevocationConfigResponse):void} cb
     * @public
     */
    RevocationConfig(req, cb) {
        let resp = new RevocationConfigResponse();
        this.request("RevocationConfig", req, resp, cb);
    }

    /**
     * 查询配置项列表
     * @param {DescribeConfigsRequest} req
     * @param {function(string, DescribeConfigsResponse):void} cb
     * @public
     */
    DescribeConfigs(req, cb) {
        let resp = new DescribeConfigsResponse();
        this.request("DescribeConfigs", req, resp, cb);
    }

    /**
     * 查询Serverless部署组明细
     * @param {DescribeServerlessGroupRequest} req
     * @param {function(string, DescribeServerlessGroupResponse):void} cb
     * @public
     */
    DescribeServerlessGroup(req, cb) {
        let resp = new DescribeServerlessGroupResponse();
        this.request("DescribeServerlessGroup", req, resp, cb);
    }

    /**
     * 获取应用列表其它字段，如实例数量信息等
     * @param {DescribeApplicationAttributeRequest} req
     * @param {function(string, DescribeApplicationAttributeResponse):void} cb
     * @public
     */
    DescribeApplicationAttribute(req, cb) {
        let resp = new DescribeApplicationAttributeResponse();
        this.request("DescribeApplicationAttribute", req, resp, cb);
    }

    /**
     * 查询配置
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        let resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }

    /**
     * 获取微服务列表
     * @param {DescribeMicroservicesRequest} req
     * @param {function(string, DescribeMicroservicesResponse):void} cb
     * @public
     */
    DescribeMicroservices(req, cb) {
        let resp = new DescribeMicroservicesResponse();
        this.request("DescribeMicroservices", req, resp, cb);
    }

    /**
     * 删除容器部署组
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * 查询虚拟机部署组详情
     * @param {DescribeGroupRequest} req
     * @param {function(string, DescribeGroupResponse):void} cb
     * @public
     */
    DescribeGroup(req, cb) {
        let resp = new DescribeGroupResponse();
        this.request("DescribeGroup", req, resp, cb);
    }

    /**
     * 虚拟机部署组添加实例
     * @param {ExpandGroupRequest} req
     * @param {function(string, ExpandGroupResponse):void} cb
     * @public
     */
    ExpandGroup(req, cb) {
        let resp = new ExpandGroupResponse();
        this.request("ExpandGroup", req, resp, cb);
    }

    /**
     * 查询公共配置（单条）
     * @param {DescribePublicConfigRequest} req
     * @param {function(string, DescribePublicConfigResponse):void} cb
     * @public
     */
    DescribePublicConfig(req, cb) {
        let resp = new DescribePublicConfigResponse();
        this.request("DescribePublicConfig", req, resp, cb);
    }

    /**
     *  容器部署组详情
     * @param {DescribeContainerGroupDetailRequest} req
     * @param {function(string, DescribeContainerGroupDetailResponse):void} cb
     * @public
     */
    DescribeContainerGroupDetail(req, cb) {
        let resp = new DescribeContainerGroupDetailResponse();
        this.request("DescribeContainerGroupDetail", req, resp, cb);
    }

    /**
     * 删除容器部署组
     * @param {DeleteContainerGroupRequest} req
     * @param {function(string, DeleteContainerGroupResponse):void} cb
     * @public
     */
    DeleteContainerGroup(req, cb) {
        let resp = new DeleteContainerGroupResponse();
        this.request("DeleteContainerGroup", req, resp, cb);
    }

    /**
     * 回滚配置
     * @param {RollbackConfigRequest} req
     * @param {function(string, RollbackConfigResponse):void} cb
     * @public
     */
    RollbackConfig(req, cb) {
        let resp = new RollbackConfigResponse();
        this.request("RollbackConfig", req, resp, cb);
    }

    /**
     * 修改微服务详情
     * @param {ModifyMicroserviceRequest} req
     * @param {function(string, ModifyMicroserviceResponse):void} cb
     * @public
     */
    ModifyMicroservice(req, cb) {
        let resp = new ModifyMicroserviceResponse();
        this.request("ModifyMicroservice", req, resp, cb);
    }

    /**
     * 创建应用
     * @param {CreateApplicationRequest} req
     * @param {function(string, CreateApplicationResponse):void} cb
     * @public
     */
    CreateApplication(req, cb) {
        let resp = new CreateApplicationResponse();
        this.request("CreateApplication", req, resp, cb);
    }

    /**
     * 镜像版本列表
     * @param {DescribeImageTagsRequest} req
     * @param {function(string, DescribeImageTagsResponse):void} cb
     * @public
     */
    DescribeImageTags(req, cb) {
        let resp = new DescribeImageTagsResponse();
        this.request("DescribeImageTags", req, resp, cb);
    }

    /**
     * 查询配置发布信息
     * @param {DescribeConfigReleasesRequest} req
     * @param {function(string, DescribeConfigReleasesResponse):void} cb
     * @public
     */
    DescribeConfigReleases(req, cb) {
        let resp = new DescribeConfigReleasesResponse();
        this.request("DescribeConfigReleases", req, resp, cb);
    }

    /**
     * 撤回已发布的公共配置
     * @param {RevocationPublicConfigRequest} req
     * @param {function(string, RevocationPublicConfigResponse):void} cb
     * @public
     */
    RevocationPublicConfig(req, cb) {
        let resp = new RevocationPublicConfigResponse();
        this.request("RevocationPublicConfig", req, resp, cb);
    }

    /**
     * 虚拟机部署组下线实例
     * @param {ShrinkInstancesRequest} req
     * @param {function(string, ShrinkInstancesResponse):void} cb
     * @public
     */
    ShrinkInstances(req, cb) {
        let resp = new ShrinkInstancesResponse();
        this.request("ShrinkInstances", req, resp, cb);
    }

    /**
     * 部署虚拟机部署组应用
     * @param {DeployGroupRequest} req
     * @param {function(string, DeployGroupResponse):void} cb
     * @public
     */
    DeployGroup(req, cb) {
        let resp = new DeployGroupResponse();
        this.request("DeployGroup", req, resp, cb);
    }

    /**
     * 查询简单集群列表
     * @param {DescribeSimpleClustersRequest} req
     * @param {function(string, DescribeSimpleClustersResponse):void} cb
     * @public
     */
    DescribeSimpleClusters(req, cb) {
        let resp = new DescribeSimpleClustersResponse();
        this.request("DescribeSimpleClusters", req, resp, cb);
    }

    /**
     * 发布公共配置
     * @param {ReleasePublicConfigRequest} req
     * @param {function(string, ReleasePublicConfigResponse):void} cb
     * @public
     */
    ReleasePublicConfig(req, cb) {
        let resp = new ReleasePublicConfigResponse();
        this.request("ReleasePublicConfig", req, resp, cb);
    }

    /**
     * 发布配置
     * @param {ReleaseConfigRequest} req
     * @param {function(string, ReleaseConfigResponse):void} cb
     * @public
     */
    ReleaseConfig(req, cb) {
        let resp = new ReleaseConfigResponse();
        this.request("ReleaseConfig", req, resp, cb);
    }

    /**
     * 查询group发布的配置
     * @param {DescribeReleasedConfigRequest} req
     * @param {function(string, DescribeReleasedConfigResponse):void} cb
     * @public
     */
    DescribeReleasedConfig(req, cb) {
        let resp = new DescribeReleasedConfigResponse();
        this.request("DescribeReleasedConfig", req, resp, cb);
    }

    /**
     * 创建容器部署组
     * @param {CreateContainGroupRequest} req
     * @param {function(string, CreateContainGroupResponse):void} cb
     * @public
     */
    CreateContainGroup(req, cb) {
        let resp = new CreateContainGroupResponse();
        this.request("CreateContainGroup", req, resp, cb);
    }

    /**
     * 查询公共配置发布信息
     * @param {DescribePublicConfigReleasesRequest} req
     * @param {function(string, DescribePublicConfigReleasesResponse):void} cb
     * @public
     */
    DescribePublicConfigReleases(req, cb) {
        let resp = new DescribePublicConfigReleasesResponse();
        this.request("DescribePublicConfigReleases", req, resp, cb);
    }

    /**
     * 获取虚拟机部署组列表
     * @param {DescribeGroupsRequest} req
     * @param {function(string, DescribeGroupsResponse):void} cb
     * @public
     */
    DescribeGroups(req, cb) {
        let resp = new DescribeGroupsResponse();
        this.request("DescribeGroups", req, resp, cb);
    }

    /**
     * 查询简单命名空间列表 
     * @param {DescribeSimpleNamespacesRequest} req
     * @param {function(string, DescribeSimpleNamespacesResponse):void} cb
     * @public
     */
    DescribeSimpleNamespaces(req, cb) {
        let resp = new DescribeSimpleNamespacesResponse();
        this.request("DescribeSimpleNamespaces", req, resp, cb);
    }

    /**
     * 调用该接口和COS的上传接口后，需要调用此接口更新TSF中保存的程序包状态。
调用此接口完成后，才标志上传包流程结束。
     * @param {ModifyUploadInfoRequest} req
     * @param {function(string, ModifyUploadInfoResponse):void} cb
     * @public
     */
    ModifyUploadInfo(req, cb) {
        let resp = new ModifyUploadInfoResponse();
        this.request("ModifyUploadInfo", req, resp, cb);
    }

    /**
     * 修改容器部署组
     * @param {ModifyContainerGroupRequest} req
     * @param {function(string, ModifyContainerGroupResponse):void} cb
     * @public
     */
    ModifyContainerGroup(req, cb) {
        let resp = new ModifyContainerGroupResponse();
        this.request("ModifyContainerGroup", req, resp, cb);
    }

    /**
     * 下线部署组所有机器实例
     * @param {ShrinkGroupRequest} req
     * @param {function(string, ShrinkGroupResponse):void} cb
     * @public
     */
    ShrinkGroup(req, cb) {
        let resp = new ShrinkGroupResponse();
        this.request("ShrinkGroup", req, resp, cb);
    }

    /**
     * 部署Serverless应用
     * @param {DeployServerlessGroupRequest} req
     * @param {function(string, DeployServerlessGroupResponse):void} cb
     * @public
     */
    DeployServerlessGroup(req, cb) {
        let resp = new DeployServerlessGroupResponse();
        this.request("DeployServerlessGroup", req, resp, cb);
    }

    /**
     * 启动分组
     * @param {StartGroupRequest} req
     * @param {function(string, StartGroupResponse):void} cb
     * @public
     */
    StartGroup(req, cb) {
        let resp = new StartGroupResponse();
        this.request("StartGroup", req, resp, cb);
    }

    /**
     * 创建配置项
     * @param {CreateConfigRequest} req
     * @param {function(string, CreateConfigResponse):void} cb
     * @public
     */
    CreateConfig(req, cb) {
        let resp = new CreateConfigResponse();
        this.request("CreateConfig", req, resp, cb);
    }

    /**
     * 新增微服务
     * @param {CreateMicroserviceRequest} req
     * @param {function(string, CreateMicroserviceResponse):void} cb
     * @public
     */
    CreateMicroservice(req, cb) {
        let resp = new CreateMicroserviceResponse();
        this.request("CreateMicroservice", req, resp, cb);
    }

    /**
     * 批量删除镜像版本
     * @param {DeleteImageTagsRequest} req
     * @param {function(string, DeleteImageTagsResponse):void} cb
     * @public
     */
    DeleteImageTags(req, cb) {
        let resp = new DeleteImageTagsResponse();
        this.request("DeleteImageTags", req, resp, cb);
    }

    /**
     * 查询集群实例
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        let resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }

    /**
     * 创建公共配置项
     * @param {CreatePublicConfigRequest} req
     * @param {function(string, CreatePublicConfigResponse):void} cb
     * @public
     */
    CreatePublicConfig(req, cb) {
        let resp = new CreatePublicConfigResponse();
        this.request("CreatePublicConfig", req, resp, cb);
    }

    /**
     * 停止虚拟机部署组
     * @param {StopGroupRequest} req
     * @param {function(string, StopGroupResponse):void} cb
     * @public
     */
    StopGroup(req, cb) {
        let resp = new StopGroupResponse();
        this.request("StopGroup", req, resp, cb);
    }

    /**
     * TSF上传的程序包存放在腾讯云对象存储（COS）中，通过该API可以获取从COS下载程序包需要的信息，包括包所在的桶、存储路径、鉴权信息等，之后使用COS API（或SDK）进行下载。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     * @param {DescribeDownloadInfoRequest} req
     * @param {function(string, DescribeDownloadInfoResponse):void} cb
     * @public
     */
    DescribeDownloadInfo(req, cb) {
        let resp = new DescribeDownloadInfoResponse();
        this.request("DescribeDownloadInfo", req, resp, cb);
    }

    /**
     * 查询简单部署组列表
     * @param {DescribeSimpleGroupsRequest} req
     * @param {function(string, DescribeSimpleGroupsResponse):void} cb
     * @public
     */
    DescribeSimpleGroups(req, cb) {
        let resp = new DescribeSimpleGroupsResponse();
        this.request("DescribeSimpleGroups", req, resp, cb);
    }

    /**
     * 获取应用列表
     * @param {DescribeApplicationsRequest} req
     * @param {function(string, DescribeApplicationsResponse):void} cb
     * @public
     */
    DescribeApplications(req, cb) {
        let resp = new DescribeApplicationsResponse();
        this.request("DescribeApplications", req, resp, cb);
    }

    /**
     * TSF会将软件包上传到腾讯云对象存储（COS）。调用此接口获取上传信息，如目标地域，桶，包Id，存储路径，鉴权信息等，之后请使用COS API（或SDK）进行上传。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     * @param {DescribeUploadInfoRequest} req
     * @param {function(string, DescribeUploadInfoResponse):void} cb
     * @public
     */
    DescribeUploadInfo(req, cb) {
        let resp = new DescribeUploadInfoResponse();
        this.request("DescribeUploadInfo", req, resp, cb);
    }

    /**
     * 查询公共配置发布历史
     * @param {DescribePublicConfigReleaseLogsRequest} req
     * @param {function(string, DescribePublicConfigReleaseLogsResponse):void} cb
     * @public
     */
    DescribePublicConfigReleaseLogs(req, cb) {
        let resp = new DescribePublicConfigReleaseLogsResponse();
        this.request("DescribePublicConfigReleaseLogs", req, resp, cb);
    }

    /**
     * 查询配置发布历史
     * @param {DescribeConfigReleaseLogsRequest} req
     * @param {function(string, DescribeConfigReleaseLogsResponse):void} cb
     * @public
     */
    DescribeConfigReleaseLogs(req, cb) {
        let resp = new DescribeConfigReleaseLogsResponse();
        this.request("DescribeConfigReleaseLogs", req, resp, cb);
    }

    /**
     * 查询简单应用列表
     * @param {DescribeSimpleApplicationsRequest} req
     * @param {function(string, DescribeSimpleApplicationsResponse):void} cb
     * @public
     */
    DescribeSimpleApplications(req, cb) {
        let resp = new DescribeSimpleApplicationsResponse();
        this.request("DescribeSimpleApplications", req, resp, cb);
    }

    /**
     * 创建Serverless部署组
     * @param {CreateServerlessGroupRequest} req
     * @param {function(string, CreateServerlessGroupResponse):void} cb
     * @public
     */
    CreateServerlessGroup(req, cb) {
        let resp = new CreateServerlessGroupResponse();
        this.request("CreateServerlessGroup", req, resp, cb);
    }

    /**
     * 获取应用详情
     * @param {DescribeApplicationRequest} req
     * @param {function(string, DescribeApplicationResponse):void} cb
     * @public
     */
    DescribeApplication(req, cb) {
        let resp = new DescribeApplicationResponse();
        this.request("DescribeApplication", req, resp, cb);
    }

    /**
     * 查询微服务详情
     * @param {DescribeMicroserviceRequest} req
     * @param {function(string, DescribeMicroserviceResponse):void} cb
     * @public
     */
    DescribeMicroservice(req, cb) {
        let resp = new DescribeMicroserviceResponse();
        this.request("DescribeMicroservice", req, resp, cb);
    }

    /**
     * 删除Serverless部署组
     * @param {DeleteServerlessGroupRequest} req
     * @param {function(string, DeleteServerlessGroupResponse):void} cb
     * @public
     */
    DeleteServerlessGroup(req, cb) {
        let resp = new DeleteServerlessGroupResponse();
        this.request("DeleteServerlessGroup", req, resp, cb);
    }

    /**
     * 添加云主机节点至TSF集群
     * @param {AddInstancesRequest} req
     * @param {function(string, AddInstancesResponse):void} cb
     * @public
     */
    AddInstances(req, cb) {
        let resp = new AddInstancesResponse();
        this.request("AddInstances", req, resp, cb);
    }


}
module.exports = TsfClient;
