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
const SnapshotStatistics = models.SnapshotStatistics;
const DescribeCfsPGroupsResponse = models.DescribeCfsPGroupsResponse;
const DescribeMountTargetsResponse = models.DescribeMountTargetsResponse;
const DescribeSnapshotOperationLogsRequest = models.DescribeSnapshotOperationLogsRequest;
const FileSystemClient = models.FileSystemClient;
const DescribeCfsFileSystemsResponse = models.DescribeCfsFileSystemsResponse;
const CreateCfsFileSystemResponse = models.CreateCfsFileSystemResponse;
const FileSystemInfo = models.FileSystemInfo;
const BindAutoSnapshotPolicyRequest = models.BindAutoSnapshotPolicyRequest;
const CreateCfsPGroupRequest = models.CreateCfsPGroupRequest;
const DescribeAutoSnapshotPoliciesRequest = models.DescribeAutoSnapshotPoliciesRequest;
const DescribeAvailableZoneInfoRequest = models.DescribeAvailableZoneInfoRequest;
const DescribeMountTargetsRequest = models.DescribeMountTargetsRequest;
const BindAutoSnapshotPolicyResponse = models.BindAutoSnapshotPolicyResponse;
const SignUpCfsServiceRequest = models.SignUpCfsServiceRequest;
const SignUpCfsServiceResponse = models.SignUpCfsServiceResponse;
const AutoSnapshotPolicyInfo = models.AutoSnapshotPolicyInfo;
const DescribeCfsRulesRequest = models.DescribeCfsRulesRequest;
const DeleteCfsPGroupRequest = models.DeleteCfsPGroupRequest;
const UpdateCfsPGroupResponse = models.UpdateCfsPGroupResponse;
const DeleteAutoSnapshotPolicyRequest = models.DeleteAutoSnapshotPolicyRequest;
const DeleteCfsFileSystemResponse = models.DeleteCfsFileSystemResponse;
const UpdateCfsRuleRequest = models.UpdateCfsRuleRequest;
const DeleteUserQuotaRequest = models.DeleteUserQuotaRequest;
const DescribeAvailableZoneInfoResponse = models.DescribeAvailableZoneInfoResponse;
const DeleteCfsSnapshotResponse = models.DeleteCfsSnapshotResponse;
const DescribeCfsFileSystemClientsResponse = models.DescribeCfsFileSystemClientsResponse;
const DeleteMountTargetResponse = models.DeleteMountTargetResponse;
const CreateCfsSnapshotRequest = models.CreateCfsSnapshotRequest;
const DeleteCfsRuleRequest = models.DeleteCfsRuleRequest;
const DescribeCfsRulesResponse = models.DescribeCfsRulesResponse;
const DescribeSnapshotOperationLogsResponse = models.DescribeSnapshotOperationLogsResponse;
const UpdateCfsFileSystemPGroupResponse = models.UpdateCfsFileSystemPGroupResponse;
const DeleteCfsFileSystemRequest = models.DeleteCfsFileSystemRequest;
const CreateCfsPGroupResponse = models.CreateCfsPGroupResponse;
const DescribeCfsServiceStatusRequest = models.DescribeCfsServiceStatusRequest;
const DeleteUserQuotaResponse = models.DeleteUserQuotaResponse;
const PGroup = models.PGroup;
const SetUserQuotaRequest = models.SetUserQuotaRequest;
const CreateAutoSnapshotPolicyResponse = models.CreateAutoSnapshotPolicyResponse;
const AvailableType = models.AvailableType;
const UpdateCfsSnapshotAttributeRequest = models.UpdateCfsSnapshotAttributeRequest;
const UserQuota = models.UserQuota;
const DeleteMountTargetRequest = models.DeleteMountTargetRequest;
const CreateCfsRuleRequest = models.CreateCfsRuleRequest;
const UpdateCfsFileSystemNameRequest = models.UpdateCfsFileSystemNameRequest;
const SnapshotOperateLog = models.SnapshotOperateLog;
const DescribeUserQuotaRequest = models.DescribeUserQuotaRequest;
const UpdateCfsFileSystemNameResponse = models.UpdateCfsFileSystemNameResponse;
const DescribeCfsSnapshotOverviewResponse = models.DescribeCfsSnapshotOverviewResponse;
const DeleteCfsSnapshotRequest = models.DeleteCfsSnapshotRequest;
const DescribeCfsFileSystemClientsRequest = models.DescribeCfsFileSystemClientsRequest;
const AvailableProtoStatus = models.AvailableProtoStatus;
const DescribeCfsFileSystemsRequest = models.DescribeCfsFileSystemsRequest;
const AvailableRegion = models.AvailableRegion;
const CreateCfsFileSystemRequest = models.CreateCfsFileSystemRequest;
const AvailableZone = models.AvailableZone;
const Filter = models.Filter;
const UnbindAutoSnapshotPolicyRequest = models.UnbindAutoSnapshotPolicyRequest;
const UnbindAutoSnapshotPolicyResponse = models.UnbindAutoSnapshotPolicyResponse;
const DescribeCfsServiceStatusResponse = models.DescribeCfsServiceStatusResponse;
const PGroupRuleInfo = models.PGroupRuleInfo;
const DescribeCfsSnapshotsRequest = models.DescribeCfsSnapshotsRequest;
const UpdateCfsFileSystemSizeLimitResponse = models.UpdateCfsFileSystemSizeLimitResponse;
const UpdateAutoSnapshotPolicyRequest = models.UpdateAutoSnapshotPolicyRequest;
const UpdateCfsFileSystemSizeLimitRequest = models.UpdateCfsFileSystemSizeLimitRequest;
const UpdateCfsRuleResponse = models.UpdateCfsRuleResponse;
const UpdateCfsPGroupRequest = models.UpdateCfsPGroupRequest;
const UpdateAutoSnapshotPolicyResponse = models.UpdateAutoSnapshotPolicyResponse;
const FileSystemByPolicy = models.FileSystemByPolicy;
const SnapshotInfo = models.SnapshotInfo;
const MountInfo = models.MountInfo;
const CreateCfsSnapshotResponse = models.CreateCfsSnapshotResponse;
const UpdateCfsFileSystemPGroupRequest = models.UpdateCfsFileSystemPGroupRequest;
const DeleteAutoSnapshotPolicyResponse = models.DeleteAutoSnapshotPolicyResponse;
const DeleteCfsRuleResponse = models.DeleteCfsRuleResponse;
const UpdateCfsSnapshotAttributeResponse = models.UpdateCfsSnapshotAttributeResponse;
const SetUserQuotaResponse = models.SetUserQuotaResponse;
const TagInfo = models.TagInfo;
const DescribeCfsPGroupsRequest = models.DescribeCfsPGroupsRequest;
const DeleteCfsPGroupResponse = models.DeleteCfsPGroupResponse;
const DescribeUserQuotaResponse = models.DescribeUserQuotaResponse;
const PGroupInfo = models.PGroupInfo;
const CreateCfsRuleResponse = models.CreateCfsRuleResponse;
const DescribeCfsSnapshotsResponse = models.DescribeCfsSnapshotsResponse;
const DescribeAutoSnapshotPoliciesResponse = models.DescribeAutoSnapshotPoliciesResponse;
const DescribeCfsSnapshotOverviewRequest = models.DescribeCfsSnapshotOverviewRequest;
const CreateAutoSnapshotPolicyRequest = models.CreateAutoSnapshotPolicyRequest;


/**
 * cfs client
 * @class
 */
class CfsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cfs.tencentcloudapi.com", "2019-07-19", credential, region, profile);
    }
    
    /**
     * 本接口（DescribeCfsRules）用于查询权限组规则列表。
     * @param {DescribeCfsRulesRequest} req
     * @param {function(string, DescribeCfsRulesResponse):void} cb
     * @public
     */
    DescribeCfsRules(req, cb) {
        let resp = new DescribeCfsRulesResponse();
        this.request("DescribeCfsRules", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsFileSystemPGroup）用于更新文件系统所使用的权限组
     * @param {UpdateCfsFileSystemPGroupRequest} req
     * @param {function(string, UpdateCfsFileSystemPGroupResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemPGroup(req, cb) {
        let resp = new UpdateCfsFileSystemPGroupResponse();
        this.request("UpdateCfsFileSystemPGroup", req, resp, cb);
    }

    /**
     * 本接口（SignUpCfsService）用于开通CFS服务。
     * @param {SignUpCfsServiceRequest} req
     * @param {function(string, SignUpCfsServiceResponse):void} cb
     * @public
     */
    SignUpCfsService(req, cb) {
        let resp = new SignUpCfsServiceResponse();
        this.request("SignUpCfsService", req, resp, cb);
    }

    /**
     * 删除文件系统快照
     * @param {DeleteCfsSnapshotRequest} req
     * @param {function(string, DeleteCfsSnapshotResponse):void} cb
     * @public
     */
    DeleteCfsSnapshot(req, cb) {
        let resp = new DeleteCfsSnapshotResponse();
        this.request("DeleteCfsSnapshot", req, resp, cb);
    }

    /**
     * 本接口（DescribeCfsPGroups）用于查询权限组列表。
     * @param {DescribeCfsPGroupsRequest} req
     * @param {function(string, DescribeCfsPGroupsResponse):void} cb
     * @public
     */
    DescribeCfsPGroups(req, cb) {
        let resp = new DescribeCfsPGroupsResponse();
        this.request("DescribeCfsPGroups", req, resp, cb);
    }

    /**
     * 设置文件系统配额，提供UID/GID的配额设置的接口
     * @param {SetUserQuotaRequest} req
     * @param {function(string, SetUserQuotaResponse):void} cb
     * @public
     */
    SetUserQuota(req, cb) {
        let resp = new SetUserQuotaResponse();
        this.request("SetUserQuota", req, resp, cb);
    }

    /**
     * 查询文件系统快照定期策略列表信息
     * @param {DescribeAutoSnapshotPoliciesRequest} req
     * @param {function(string, DescribeAutoSnapshotPoliciesResponse):void} cb
     * @public
     */
    DescribeAutoSnapshotPolicies(req, cb) {
        let resp = new DescribeAutoSnapshotPoliciesResponse();
        this.request("DescribeAutoSnapshotPolicies", req, resp, cb);
    }

    /**
     * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
     * @param {DescribeMountTargetsRequest} req
     * @param {function(string, DescribeMountTargetsResponse):void} cb
     * @public
     */
    DescribeMountTargets(req, cb) {
        let resp = new DescribeMountTargetsResponse();
        this.request("DescribeMountTargets", req, resp, cb);
    }

    /**
     * 本接口（DeleteCfsPGroup）用于删除权限组。
     * @param {DeleteCfsPGroupRequest} req
     * @param {function(string, DeleteCfsPGroupResponse):void} cb
     * @public
     */
    DeleteCfsPGroup(req, cb) {
        let resp = new DeleteCfsPGroupResponse();
        this.request("DeleteCfsPGroup", req, resp, cb);
    }

    /**
     * 查询挂载该文件系统的客户端。此功能需要客户端安装CFS监控插件。
     * @param {DescribeCfsFileSystemClientsRequest} req
     * @param {function(string, DescribeCfsFileSystemClientsResponse):void} cb
     * @public
     */
    DescribeCfsFileSystemClients(req, cb) {
        let resp = new DescribeCfsFileSystemClientsResponse();
        this.request("DescribeCfsFileSystemClients", req, resp, cb);
    }

    /**
     * 本接口（DescribeCfsServiceStatus）用于查询用户使用CFS的服务状态。
     * @param {DescribeCfsServiceStatusRequest} req
     * @param {function(string, DescribeCfsServiceStatusResponse):void} cb
     * @public
     */
    DescribeCfsServiceStatus(req, cb) {
        let resp = new DescribeCfsServiceStatusResponse();
        this.request("DescribeCfsServiceStatus", req, resp, cb);
    }

    /**
     * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
     * @param {DescribeAvailableZoneInfoRequest} req
     * @param {function(string, DescribeAvailableZoneInfoResponse):void} cb
     * @public
     */
    DescribeAvailableZoneInfo(req, cb) {
        let resp = new DescribeAvailableZoneInfoResponse();
        this.request("DescribeAvailableZoneInfo", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
     * @param {UpdateCfsFileSystemNameRequest} req
     * @param {function(string, UpdateCfsFileSystemNameResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemName(req, cb) {
        let resp = new UpdateCfsFileSystemNameResponse();
        this.request("UpdateCfsFileSystemName", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
     * @param {UpdateCfsFileSystemSizeLimitRequest} req
     * @param {function(string, UpdateCfsFileSystemSizeLimitResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemSizeLimit(req, cb) {
        let resp = new UpdateCfsFileSystemSizeLimitResponse();
        this.request("UpdateCfsFileSystemSizeLimit", req, resp, cb);
    }

    /**
     * 创建定期快照策略
     * @param {CreateAutoSnapshotPolicyRequest} req
     * @param {function(string, CreateAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    CreateAutoSnapshotPolicy(req, cb) {
        let resp = new CreateAutoSnapshotPolicyResponse();
        this.request("CreateAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * 用于删除文件系统
     * @param {DeleteCfsFileSystemRequest} req
     * @param {function(string, DeleteCfsFileSystemResponse):void} cb
     * @public
     */
    DeleteCfsFileSystem(req, cb) {
        let resp = new DeleteCfsFileSystemResponse();
        this.request("DeleteCfsFileSystem", req, resp, cb);
    }

    /**
     * 用于添加新文件系统
     * @param {CreateCfsFileSystemRequest} req
     * @param {function(string, CreateCfsFileSystemResponse):void} cb
     * @public
     */
    CreateCfsFileSystem(req, cb) {
        let resp = new CreateCfsFileSystemResponse();
        this.request("CreateCfsFileSystem", req, resp, cb);
    }

    /**
     * 更新文件系统快照名称及保留时长
     * @param {UpdateCfsSnapshotAttributeRequest} req
     * @param {function(string, UpdateCfsSnapshotAttributeResponse):void} cb
     * @public
     */
    UpdateCfsSnapshotAttribute(req, cb) {
        let resp = new UpdateCfsSnapshotAttributeResponse();
        this.request("UpdateCfsSnapshotAttribute", req, resp, cb);
    }

    /**
     * 文件系统快照概览
     * @param {DescribeCfsSnapshotOverviewRequest} req
     * @param {function(string, DescribeCfsSnapshotOverviewResponse):void} cb
     * @public
     */
    DescribeCfsSnapshotOverview(req, cb) {
        let resp = new DescribeCfsSnapshotOverviewResponse();
        this.request("DescribeCfsSnapshotOverview", req, resp, cb);
    }

    /**
     * 查询文件系统配额
     * @param {DescribeUserQuotaRequest} req
     * @param {function(string, DescribeUserQuotaResponse):void} cb
     * @public
     */
    DescribeUserQuota(req, cb) {
        let resp = new DescribeUserQuotaResponse();
        this.request("DescribeUserQuota", req, resp, cb);
    }

    /**
     * 更新定期自动快照策略
     * @param {UpdateAutoSnapshotPolicyRequest} req
     * @param {function(string, UpdateAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    UpdateAutoSnapshotPolicy(req, cb) {
        let resp = new UpdateAutoSnapshotPolicyResponse();
        this.request("UpdateAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * 本接口（DescribeCfsFileSystems）用于查询文件系统
     * @param {DescribeCfsFileSystemsRequest} req
     * @param {function(string, DescribeCfsFileSystemsResponse):void} cb
     * @public
     */
    DescribeCfsFileSystems(req, cb) {
        let resp = new DescribeCfsFileSystemsResponse();
        this.request("DescribeCfsFileSystems", req, resp, cb);
    }

    /**
     * 查询文件系统快照列表
     * @param {DescribeCfsSnapshotsRequest} req
     * @param {function(string, DescribeCfsSnapshotsResponse):void} cb
     * @public
     */
    DescribeCfsSnapshots(req, cb) {
        let resp = new DescribeCfsSnapshotsResponse();
        this.request("DescribeCfsSnapshots", req, resp, cb);
    }

    /**
     * 文件系统绑定快照策略，可以同时绑定多个fs，一个fs 只能跟一个策略绑定
     * @param {BindAutoSnapshotPolicyRequest} req
     * @param {function(string, BindAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    BindAutoSnapshotPolicy(req, cb) {
        let resp = new BindAutoSnapshotPolicyResponse();
        this.request("BindAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * 本接口（DeleteCfsRule）用于删除权限组规则。
     * @param {DeleteCfsRuleRequest} req
     * @param {function(string, DeleteCfsRuleResponse):void} cb
     * @public
     */
    DeleteCfsRule(req, cb) {
        let resp = new DeleteCfsRuleResponse();
        this.request("DeleteCfsRule", req, resp, cb);
    }

    /**
     * 本接口（DeleteMountTarget）用于删除挂载点
     * @param {DeleteMountTargetRequest} req
     * @param {function(string, DeleteMountTargetResponse):void} cb
     * @public
     */
    DeleteMountTarget(req, cb) {
        let resp = new DeleteMountTargetResponse();
        this.request("DeleteMountTarget", req, resp, cb);
    }

    /**
     * 指定条件删除文件系统配额
     * @param {DeleteUserQuotaRequest} req
     * @param {function(string, DeleteUserQuotaResponse):void} cb
     * @public
     */
    DeleteUserQuota(req, cb) {
        let resp = new DeleteUserQuotaResponse();
        this.request("DeleteUserQuota", req, resp, cb);
    }

    /**
     * 本接口（CreateCfsPGroup）用于创建权限组
     * @param {CreateCfsPGroupRequest} req
     * @param {function(string, CreateCfsPGroupResponse):void} cb
     * @public
     */
    CreateCfsPGroup(req, cb) {
        let resp = new CreateCfsPGroupResponse();
        this.request("CreateCfsPGroup", req, resp, cb);
    }

    /**
     * 删除快照定期策略
     * @param {DeleteAutoSnapshotPolicyRequest} req
     * @param {function(string, DeleteAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    DeleteAutoSnapshotPolicy(req, cb) {
        let resp = new DeleteAutoSnapshotPolicyResponse();
        this.request("DeleteAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * 创建文件系统快照
     * @param {CreateCfsSnapshotRequest} req
     * @param {function(string, CreateCfsSnapshotResponse):void} cb
     * @public
     */
    CreateCfsSnapshot(req, cb) {
        let resp = new CreateCfsSnapshotResponse();
        this.request("CreateCfsSnapshot", req, resp, cb);
    }

    /**
     * 解除文件系统绑定的快照策略
     * @param {UnbindAutoSnapshotPolicyRequest} req
     * @param {function(string, UnbindAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    UnbindAutoSnapshotPolicy(req, cb) {
        let resp = new UnbindAutoSnapshotPolicyResponse();
        this.request("UnbindAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * 查询快照操作日志
     * @param {DescribeSnapshotOperationLogsRequest} req
     * @param {function(string, DescribeSnapshotOperationLogsResponse):void} cb
     * @public
     */
    DescribeSnapshotOperationLogs(req, cb) {
        let resp = new DescribeSnapshotOperationLogsResponse();
        this.request("DescribeSnapshotOperationLogs", req, resp, cb);
    }

    /**
     * 本接口（CreateCfsRule）用于创建权限组规则。
     * @param {CreateCfsRuleRequest} req
     * @param {function(string, CreateCfsRuleResponse):void} cb
     * @public
     */
    CreateCfsRule(req, cb) {
        let resp = new CreateCfsRuleResponse();
        this.request("CreateCfsRule", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsRule）用于更新权限规则。
     * @param {UpdateCfsRuleRequest} req
     * @param {function(string, UpdateCfsRuleResponse):void} cb
     * @public
     */
    UpdateCfsRule(req, cb) {
        let resp = new UpdateCfsRuleResponse();
        this.request("UpdateCfsRule", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsPGroup）更新权限组信息。
     * @param {UpdateCfsPGroupRequest} req
     * @param {function(string, UpdateCfsPGroupResponse):void} cb
     * @public
     */
    UpdateCfsPGroup(req, cb) {
        let resp = new UpdateCfsPGroupResponse();
        this.request("UpdateCfsPGroup", req, resp, cb);
    }


}
module.exports = CfsClient;
