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
const DescribeUinInWhitelistResponse = models.DescribeUinInWhitelistResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const IdlFileInfo = models.IdlFileInfo;
const ClearTablesRequest = models.ClearTablesRequest;
const DescribeClustersRequest = models.DescribeClustersRequest;
const ModifyTableQuotasResponse = models.ModifyTableQuotasResponse;
const DescribeIdlFileInfosResponse = models.DescribeIdlFileInfosResponse;
const ModifyAppNameRequest = models.ModifyAppNameRequest;
const CreateBackupRequest = models.CreateBackupRequest;
const ModifyTableGroupNameResponse = models.ModifyTableGroupNameResponse;
const RecoverRecycleTablesResponse = models.RecoverRecycleTablesResponse;
const ModifyClusterPasswordResponse = models.ModifyClusterPasswordResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const VerifyIdlFilesRequest = models.VerifyIdlFilesRequest;
const ModifyClusterNameRequest = models.ModifyClusterNameRequest;
const ClearTablesResponse = models.ClearTablesResponse;
const DescribeIdlFileInfosRequest = models.DescribeIdlFileInfosRequest;
const TableResultNew = models.TableResultNew;
const CreateClusterResponse = models.CreateClusterResponse;
const ErrorInfo = models.ErrorInfo;
const CreateTablesRequest = models.CreateTablesRequest;
const ClusterInfo = models.ClusterInfo;
const ParsedTableInfoNew = models.ParsedTableInfoNew;
const RegionInfo = models.RegionInfo;
const TableInfoNew = models.TableInfoNew;
const TaskInfoNew = models.TaskInfoNew;
const RollbackTablesResponse = models.RollbackTablesResponse;
const DescribeTablesInRecycleResponse = models.DescribeTablesInRecycleResponse;
const DescribeTableGroupsResponse = models.DescribeTableGroupsResponse;
const ModifyTablesResponse = models.ModifyTablesResponse;
const ModifyTableMemosResponse = models.ModifyTableMemosResponse;
const RollbackTablesRequest = models.RollbackTablesRequest;
const DeleteIdlFilesRequest = models.DeleteIdlFilesRequest;
const DeleteTableGroupResponse = models.DeleteTableGroupResponse;
const CreateBackupResponse = models.CreateBackupResponse;
const TableRollbackResultNew = models.TableRollbackResultNew;
const VerifyIdlFilesResponse = models.VerifyIdlFilesResponse;
const DeleteClusterRequest = models.DeleteClusterRequest;
const DescribeTablesResponse = models.DescribeTablesResponse;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const RecoverRecycleTablesRequest = models.RecoverRecycleTablesRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DeleteTablesRequest = models.DeleteTablesRequest;
const DescribeUinInWhitelistRequest = models.DescribeUinInWhitelistRequest;
const CreateTableGroupResponse = models.CreateTableGroupResponse;
const ModifyTableGroupNameRequest = models.ModifyTableGroupNameRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeTableGroupsRequest = models.DescribeTableGroupsRequest;
const CompareIdlFilesRequest = models.CompareIdlFilesRequest;
const SelectedTableInfoNew = models.SelectedTableInfoNew;
const IdlFileInfoWithoutContent = models.IdlFileInfoWithoutContent;
const ModifyClusterPasswordRequest = models.ModifyClusterPasswordRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const Filter = models.Filter;
const DeleteTablesResponse = models.DeleteTablesResponse;
const ModifyTableQuotasRequest = models.ModifyTableQuotasRequest;
const CompareIdlFilesResponse = models.CompareIdlFilesResponse;
const ModifyTablesRequest = models.ModifyTablesRequest;
const DeleteTableGroupRequest = models.DeleteTableGroupRequest;
const CreateTablesResponse = models.CreateTablesResponse;
const DescribeTablesInRecycleRequest = models.DescribeTablesInRecycleRequest;
const DescribeTablesRequest = models.DescribeTablesRequest;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const ModifyAppNameResponse = models.ModifyAppNameResponse;
const DeleteIdlFilesResponse = models.DeleteIdlFilesResponse;
const CreateTableGroupRequest = models.CreateTableGroupRequest;
const ModifyTableMemosRequest = models.ModifyTableMemosRequest;
const TableGroupInfo = models.TableGroupInfo;


/**
 * tcaplusdb client
 * @class
 */
class TcaplusdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcaplusdb.tencentcloudapi.com", "2019-08-23", credential, region, profile);
    }
    
    /**
     * 本接口用于创建TcaplusDB集群
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }

    /**
     * 查询本用户是否在白名单中，控制是否能创建TDR类型的APP或表
     * @param {DescribeUinInWhitelistRequest} req
     * @param {function(string, DescribeUinInWhitelistResponse):void} cb
     * @public
     */
    DescribeUinInWhitelist(req, cb) {
        let resp = new DescribeUinInWhitelistResponse();
        this.request("DescribeUinInWhitelist", req, resp, cb);
    }

    /**
     * 查询回收站中的表详情
     * @param {DescribeTablesInRecycleRequest} req
     * @param {function(string, DescribeTablesInRecycleResponse):void} cb
     * @public
     */
    DescribeTablesInRecycle(req, cb) {
        let resp = new DescribeTablesInRecycleResponse();
        this.request("DescribeTablesInRecycle", req, resp, cb);
    }

    /**
     * 表格数据回档
     * @param {RollbackTablesRequest} req
     * @param {function(string, RollbackTablesResponse):void} cb
     * @public
     */
    RollbackTables(req, cb) {
        let resp = new RollbackTablesResponse();
        this.request("RollbackTables", req, resp, cb);
    }

    /**
     * 修改指定的集群名称
     * @param {ModifyClusterNameRequest} req
     * @param {function(string, ModifyClusterNameResponse):void} cb
     * @public
     */
    ModifyClusterName(req, cb) {
        let resp = new ModifyClusterNameResponse();
        this.request("ModifyClusterName", req, resp, cb);
    }

    /**
     * 删除TcaplusDB集群，必须在集群所属所有资源（包括表格组，表）都已经释放的情况下才会成功。
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        let resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }

    /**
     * 修改指定集群的密码，后台将在旧密码失效之前同时支持TcaplusDB SDK使用旧密码和新密码访问数据库。在旧密码失效之前不能提交新的密码修改请求，在旧密码失效之后不能提交修改旧密码过期时间的请求。
     * @param {ModifyClusterPasswordRequest} req
     * @param {function(string, ModifyClusterPasswordResponse):void} cb
     * @public
     */
    ModifyClusterPassword(req, cb) {
        let resp = new ModifyClusterPasswordResponse();
        this.request("ModifyClusterPassword", req, resp, cb);
    }

    /**
     * 指定集群ID和待删除IDL文件的信息，删除目标文件，如果文件正在被表关联则删除失败。
     * @param {DeleteIdlFilesRequest} req
     * @param {function(string, DeleteIdlFilesResponse):void} cb
     * @public
     */
    DeleteIdlFiles(req, cb) {
        let resp = new DeleteIdlFilesResponse();
        this.request("DeleteIdlFiles", req, resp, cb);
    }

    /**
     * 恢复回收站中，用户自行删除的表。对欠费待释放的表无效。
     * @param {RecoverRecycleTablesRequest} req
     * @param {function(string, RecoverRecycleTablesResponse):void} cb
     * @public
     */
    RecoverRecycleTables(req, cb) {
        let resp = new RecoverRecycleTablesResponse();
        this.request("RecoverRecycleTables", req, resp, cb);
    }

    /**
     * 修改指定的应用名称
     * @param {ModifyAppNameRequest} req
     * @param {function(string, ModifyAppNameResponse):void} cb
     * @public
     */
    ModifyAppName(req, cb) {
        let resp = new ModifyAppNameResponse();
        this.request("ModifyAppName", req, resp, cb);
    }

    /**
     * 用户创建备份任务
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        let resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }

    /**
     * 根据选择的IDL文件列表，批量创建表格
     * @param {CreateTablesRequest} req
     * @param {function(string, CreateTablesResponse):void} cb
     * @public
     */
    CreateTables(req, cb) {
        let resp = new CreateTablesResponse();
        this.request("CreateTables", req, resp, cb);
    }

    /**
     * 表格扩缩容
     * @param {ModifyTableQuotasRequest} req
     * @param {function(string, ModifyTableQuotasResponse):void} cb
     * @public
     */
    ModifyTableQuotas(req, cb) {
        let resp = new ModifyTableQuotasResponse();
        this.request("ModifyTableQuotas", req, resp, cb);
    }

    /**
     * 查询TcaplusDB集群列表，包含集群详细信息。
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * 删除表格组
     * @param {DeleteTableGroupRequest} req
     * @param {function(string, DeleteTableGroupResponse):void} cb
     * @public
     */
    DeleteTableGroup(req, cb) {
        let resp = new DeleteTableGroupResponse();
        this.request("DeleteTableGroup", req, resp, cb);
    }

    /**
     * 修改TcaplusDB表格组名称
     * @param {ModifyTableGroupNameRequest} req
     * @param {function(string, ModifyTableGroupNameResponse):void} cb
     * @public
     */
    ModifyTableGroupName(req, cb) {
        let resp = new ModifyTableGroupNameResponse();
        this.request("ModifyTableGroupName", req, resp, cb);
    }

    /**
     * 在TcaplusDB集群下创建表格组
     * @param {CreateTableGroupRequest} req
     * @param {function(string, CreateTableGroupResponse):void} cb
     * @public
     */
    CreateTableGroup(req, cb) {
        let resp = new CreateTableGroupResponse();
        this.request("CreateTableGroup", req, resp, cb);
    }

    /**
     * 查询TcaplusDB服务支持的地域列表
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 查询任务列表
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 查询表格组列表
     * @param {DescribeTableGroupsRequest} req
     * @param {function(string, DescribeTableGroupsResponse):void} cb
     * @public
     */
    DescribeTableGroups(req, cb) {
        let resp = new DescribeTableGroupsResponse();
        this.request("DescribeTableGroups", req, resp, cb);
    }

    /**
     * 选中目标表格，上传并校验改表文件，返回是否允许修改表格结构的结果。
     * @param {CompareIdlFilesRequest} req
     * @param {function(string, CompareIdlFilesResponse):void} cb
     * @public
     */
    CompareIdlFiles(req, cb) {
        let resp = new CompareIdlFilesResponse();
        this.request("CompareIdlFiles", req, resp, cb);
    }

    /**
     * 查询表描述文件详情
     * @param {DescribeIdlFileInfosRequest} req
     * @param {function(string, DescribeIdlFileInfosResponse):void} cb
     * @public
     */
    DescribeIdlFileInfos(req, cb) {
        let resp = new DescribeIdlFileInfosResponse();
        this.request("DescribeIdlFileInfos", req, resp, cb);
    }

    /**
     * 根据指定的表信息删除目标表
     * @param {DeleteTablesRequest} req
     * @param {function(string, DeleteTablesResponse):void} cb
     * @public
     */
    DeleteTables(req, cb) {
        let resp = new DeleteTablesResponse();
        this.request("DeleteTables", req, resp, cb);
    }

    /**
     * 修改表备注信息
     * @param {ModifyTableMemosRequest} req
     * @param {function(string, ModifyTableMemosResponse):void} cb
     * @public
     */
    ModifyTableMemos(req, cb) {
        let resp = new ModifyTableMemosResponse();
        this.request("ModifyTableMemos", req, resp, cb);
    }

    /**
     * 上传并校验创建表格文件，返回校验合法的表格定义
     * @param {VerifyIdlFilesRequest} req
     * @param {function(string, VerifyIdlFilesResponse):void} cb
     * @public
     */
    VerifyIdlFiles(req, cb) {
        let resp = new VerifyIdlFilesResponse();
        this.request("VerifyIdlFiles", req, resp, cb);
    }

    /**
     * 根据用户选定的表定义IDL文件，批量修改指定的表
     * @param {ModifyTablesRequest} req
     * @param {function(string, ModifyTablesResponse):void} cb
     * @public
     */
    ModifyTables(req, cb) {
        let resp = new ModifyTablesResponse();
        this.request("ModifyTables", req, resp, cb);
    }

    /**
     * 查询表详情
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        let resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
    }

    /**
     * 根据给定的表信息，清除表数据。
     * @param {ClearTablesRequest} req
     * @param {function(string, ClearTablesResponse):void} cb
     * @public
     */
    ClearTables(req, cb) {
        let resp = new ClearTablesResponse();
        this.request("ClearTables", req, resp, cb);
    }


}
module.exports = TcaplusdbClient;
