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
const DescribeUploadInfoResponse = models.DescribeUploadInfoResponse;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const DescribeMicroserviceRequest = models.DescribeMicroserviceRequest;
const CosCredentials = models.CosCredentials;
const ExpandGroupRequest = models.ExpandGroupRequest;
const DescribeImageTagsRequest = models.DescribeImageTagsRequest;
const TsfPageSimpleGroup = models.TsfPageSimpleGroup;
const PkgInfo = models.PkgInfo;
const VmGroup = models.VmGroup;
const ModifyUploadInfoRequest = models.ModifyUploadInfoRequest;
const StopContainerGroupResponse = models.StopContainerGroupResponse;
const CreateGroupRequest = models.CreateGroupRequest;
const ModifyMicroserviceRequest = models.ModifyMicroserviceRequest;
const CreateContainGroupResponse = models.CreateContainGroupResponse;
const DescribeContainerGroupDetailResponse = models.DescribeContainerGroupDetailResponse;
const DescribeSimpleClustersResponse = models.DescribeSimpleClustersResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const StartGroupRequest = models.StartGroupRequest;
const DescribeApplicationAttributeResponse = models.DescribeApplicationAttributeResponse;
const DescribeApplicationsResponse = models.DescribeApplicationsResponse;
const ModifyContainerReplicasRequest = models.ModifyContainerReplicasRequest;
const TsfPageMsInstance = models.TsfPageMsInstance;
const DeleteMicroserviceRequest = models.DeleteMicroserviceRequest;
const RemoveInstancesResponse = models.RemoveInstancesResponse;
const DescribeContainerGroupsRequest = models.DescribeContainerGroupsRequest;
const Namespace = models.Namespace;
const DescribeGroupResponse = models.DescribeGroupResponse;
const Env = models.Env;
const DeleteContainerGroupResponse = models.DeleteContainerGroupResponse;
const DeletePkgsResponse = models.DeletePkgsResponse;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const DeleteImageTagsResponse = models.DeleteImageTagsResponse;
const ModifyUploadInfoResponse = models.ModifyUploadInfoResponse;
const DescribeImageTagsResponse = models.DescribeImageTagsResponse;
const DeleteGroupRequest = models.DeleteGroupRequest;
const DescribeApplicationResponse = models.DescribeApplicationResponse;
const SimpleApplication = models.SimpleApplication;
const DescribeSimpleGroupsResponse = models.DescribeSimpleGroupsResponse;
const ContainerGroupDetail = models.ContainerGroupDetail;
const TsfPageCluster = models.TsfPageCluster;
const DeleteNamespaceResponse = models.DeleteNamespaceResponse;
const CreateMicroserviceRequest = models.CreateMicroserviceRequest;
const DescribePkgsRequest = models.DescribePkgsRequest;
const ShrinkInstancesRequest = models.ShrinkInstancesRequest;
const ShrinkInstancesResponse = models.ShrinkInstancesResponse;
const DeleteImageTagsRequest = models.DeleteImageTagsRequest;
const DescribeApplicationAttributeRequest = models.DescribeApplicationAttributeRequest;
const ModifyContainerReplicasResponse = models.ModifyContainerReplicasResponse;
const TsfPageApplication = models.TsfPageApplication;
const TsfPageNamespace = models.TsfPageNamespace;
const DescribeSimpleApplicationsRequest = models.DescribeSimpleApplicationsRequest;
const DescribeSimpleNamespacesRequest = models.DescribeSimpleNamespacesRequest;
const SimpleGroup = models.SimpleGroup;
const MsInstance = models.MsInstance;
const ExpandGroupResponse = models.ExpandGroupResponse;
const ModifyContainerGroupResponse = models.ModifyContainerGroupResponse;
const AddInstancesResponse = models.AddInstancesResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const DescribeSimpleClustersRequest = models.DescribeSimpleClustersRequest;
const StartContainerGroupRequest = models.StartContainerGroupRequest;
const StopGroupResponse = models.StopGroupResponse;
const VmGroupSimple = models.VmGroupSimple;
const Instance = models.Instance;
const CreateClusterResponse = models.CreateClusterResponse;
const CreateMicroserviceResponse = models.CreateMicroserviceResponse;
const CreateClusterRequest = models.CreateClusterRequest;
const StopGroupRequest = models.StopGroupRequest;
const ShrinkGroupResponse = models.ShrinkGroupResponse;
const CosUploadInfo = models.CosUploadInfo;
const DeleteContainerGroupRequest = models.DeleteContainerGroupRequest;
const DescribeContainerGroupDetailRequest = models.DescribeContainerGroupDetailRequest;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const PkgList = models.PkgList;
const DescribeUploadInfoRequest = models.DescribeUploadInfoRequest;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const StopContainerGroupRequest = models.StopContainerGroupRequest;
const DescribeGroupRequest = models.DescribeGroupRequest;
const ImageTagsResult = models.ImageTagsResult;
const ProtocolPort = models.ProtocolPort;
const TsfPageVmGroup = models.TsfPageVmGroup;
const DescribePkgsResponse = models.DescribePkgsResponse;
const DescribeSimpleNamespacesResponse = models.DescribeSimpleNamespacesResponse;
const ApplicationAttribute = models.ApplicationAttribute;
const DeleteImageTag = models.DeleteImageTag;
const DescribeSimpleGroupsRequest = models.DescribeSimpleGroupsRequest;
const DescribeGroupsResponse = models.DescribeGroupsResponse;
const Cluster = models.Cluster;
const ModifyMicroserviceResponse = models.ModifyMicroserviceResponse;
const DescribeMicroservicesResponse = models.DescribeMicroservicesResponse;
const DescribeDownloadInfoResponse = models.DescribeDownloadInfoResponse;
const DescribeApplicationRequest = models.DescribeApplicationRequest;
const Microservice = models.Microservice;
const ApplicationForPage = models.ApplicationForPage;
const DeployContainerGroupResponse = models.DeployContainerGroupResponse;
const StartGroupResponse = models.StartGroupResponse;
const DeleteMicroserviceResponse = models.DeleteMicroserviceResponse;
const ContainGroupResult = models.ContainGroupResult;
const DescribeMicroservicesRequest = models.DescribeMicroservicesRequest;
const ShrinkGroupRequest = models.ShrinkGroupRequest;
const TsfPageSimpleApplication = models.TsfPageSimpleApplication;
const DescribeContainerGroupsResponse = models.DescribeContainerGroupsResponse;
const DescribeGroupsRequest = models.DescribeGroupsRequest;
const ModifyContainerGroupRequest = models.ModifyContainerGroupRequest;
const TsfPageMicroservice = models.TsfPageMicroservice;
const AddInstancesRequest = models.AddInstancesRequest;
const DescribeApplicationsRequest = models.DescribeApplicationsRequest;
const StartContainerGroupResponse = models.StartContainerGroupResponse;
const CreateApplicationRequest = models.CreateApplicationRequest;
const DeleteNamespaceRequest = models.DeleteNamespaceRequest;
const RemoveInstancesRequest = models.RemoveInstancesRequest;
const DeployGroupRequest = models.DeployGroupRequest;
const TsfPageInstance = models.TsfPageInstance;
const DescribeMicroserviceResponse = models.DescribeMicroserviceResponse;
const DeleteGroupResponse = models.DeleteGroupResponse;
const DeployContainerGroupRequest = models.DeployContainerGroupRequest;
const CosDownloadInfo = models.CosDownloadInfo;
const DeletePkgsRequest = models.DeletePkgsRequest;
const CreateContainGroupRequest = models.CreateContainGroupRequest;
const ContainGroup = models.ContainGroup;
const CreateApplicationResponse = models.CreateApplicationResponse;
const DeployGroupResponse = models.DeployGroupResponse;
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
