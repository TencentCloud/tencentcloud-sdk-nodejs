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
const ModifyZoneNameRequest = models.ModifyZoneNameRequest;
const IdlFileInfo = models.IdlFileInfo;
const ClearTablesRequest = models.ClearTablesRequest;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DescribeIdlFileInfosResponse = models.DescribeIdlFileInfosResponse;
const ModifyAppNameRequest = models.ModifyAppNameRequest;
const DescribeTablesInRecycleRequest = models.DescribeTablesInRecycleRequest;
const DescribeAppsRequest = models.DescribeAppsRequest;
const DeleteZoneRequest = models.DeleteZoneRequest;
const TableResult = models.TableResult;
const ClearTablesResponse = models.ClearTablesResponse;
const DescribeIdlFileInfosRequest = models.DescribeIdlFileInfosRequest;
const ParsedTableInfo = models.ParsedTableInfo;
const CreateTablesRequest = models.CreateTablesRequest;
const ModifyTableMemosRequest = models.ModifyTableMemosRequest;
const RecoverRecycleTablesResponse = models.RecoverRecycleTablesResponse;
const RegionInfo = models.RegionInfo;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DeleteAppRequest = models.DeleteAppRequest;
const DescribeTablesInRecycleResponse = models.DescribeTablesInRecycleResponse;
const DescribeTablesResponse = models.DescribeTablesResponse;
const ModifyAppPasswordResponse = models.ModifyAppPasswordResponse;
const DeleteIdlFilesRequest = models.DeleteIdlFilesRequest;
const ModifyTablesResponse = models.ModifyTablesResponse;
const SelectedTableInfo = models.SelectedTableInfo;
const VerifyIdlFilesResponse = models.VerifyIdlFilesResponse;
const TableRollbackResult = models.TableRollbackResult;
const ModifyTableQuotasResponse = models.ModifyTableQuotasResponse;
const AppInfo = models.AppInfo;
const RollbackTablesRequest = models.RollbackTablesRequest;
const RecoverRecycleTablesRequest = models.RecoverRecycleTablesRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DeleteTablesRequest = models.DeleteTablesRequest;
const DescribeUinInWhitelistRequest = models.DescribeUinInWhitelistRequest;
const Filter = models.Filter;
const ZoneInfo = models.ZoneInfo;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const CreateZoneResponse = models.CreateZoneResponse;
const ModifyZoneNameResponse = models.ModifyZoneNameResponse;
const CompareIdlFilesRequest = models.CompareIdlFilesRequest;
const VerifyIdlFilesRequest = models.VerifyIdlFilesRequest;
const DescribeAppsResponse = models.DescribeAppsResponse;
const DeleteZoneResponse = models.DeleteZoneResponse;
const IdlFileInfoWithoutContent = models.IdlFileInfoWithoutContent;
const ModifyTableMemosResponse = models.ModifyTableMemosResponse;
const TableInfo = models.TableInfo;
const RollbackTablesResponse = models.RollbackTablesResponse;
const ErrorInfo = models.ErrorInfo;
const ModifyTableQuotasRequest = models.ModifyTableQuotasRequest;
const CompareIdlFilesResponse = models.CompareIdlFilesResponse;
const ModifyTablesRequest = models.ModifyTablesRequest;
const CreateAppRequest = models.CreateAppRequest;
const CreateTablesResponse = models.CreateTablesResponse;
const ModifyAppPasswordRequest = models.ModifyAppPasswordRequest;
const CreateAppResponse = models.CreateAppResponse;
const DescribeTablesRequest = models.DescribeTablesRequest;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const CreateZoneRequest = models.CreateZoneRequest;
const ModifyAppNameResponse = models.ModifyAppNameResponse;
const DeleteIdlFilesResponse = models.DeleteIdlFilesResponse;
const DeleteTablesResponse = models.DeleteTablesResponse;
const DeleteAppResponse = models.DeleteAppResponse;
const TaskInfo = models.TaskInfo;


/**
 * tcaplusdb client
 * @class
 */
class TcaplusdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcaplusdb.tencentcloudapi.com", "2019-08-23", credential, region, profile);
    }
    
    /**
     * 修改指定AppInstanceId的实例密码，后台将在旧密码失效之前同时支持TcaplusDB SDK使用旧密码和新密码访问数据库。在旧密码失效之前不能提交新的密码修改请求，在旧密码失效之后不能提交修改旧密码过期时间的请求。
     * @param {ModifyAppPasswordRequest} req
     * @param {function(string, ModifyAppPasswordResponse):void} cb
     * @public
     */
    ModifyAppPassword(req, cb) {
        let resp = new ModifyAppPasswordResponse();
        this.request("ModifyAppPassword", req, resp, cb);
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
     * 表数据回档
     * @param {RollbackTablesRequest} req
     * @param {function(string, RollbackTablesResponse):void} cb
     * @public
     */
    RollbackTables(req, cb) {
        let resp = new RollbackTablesResponse();
        this.request("RollbackTables", req, resp, cb);
    }

    /**
     * 在TcaplusDB应用下创建大区
     * @param {CreateZoneRequest} req
     * @param {function(string, CreateZoneResponse):void} cb
     * @public
     */
    CreateZone(req, cb) {
        let resp = new CreateZoneResponse();
        this.request("CreateZone", req, resp, cb);
    }

    /**
     * 指定应用ID和待删除IDL文件的信息，删除目标文件，如果文件正在被表关联则删除失败。
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
     * 删除TcaplusDB应用实例，必须在应用实例所属所有资源（包括大区，表）都已经释放的情况下才会成功。
     * @param {DeleteAppRequest} req
     * @param {function(string, DeleteAppResponse):void} cb
     * @public
     */
    DeleteApp(req, cb) {
        let resp = new DeleteAppResponse();
        this.request("DeleteApp", req, resp, cb);
    }

    /**
     * 根据选择的IDL文件列表，批量创建表
     * @param {CreateTablesRequest} req
     * @param {function(string, CreateTablesResponse):void} cb
     * @public
     */
    CreateTables(req, cb) {
        let resp = new CreateTablesResponse();
        this.request("CreateTables", req, resp, cb);
    }

    /**
     * 表扩缩容
     * @param {ModifyTableQuotasRequest} req
     * @param {function(string, ModifyTableQuotasResponse):void} cb
     * @public
     */
    ModifyTableQuotas(req, cb) {
        let resp = new ModifyTableQuotasResponse();
        this.request("ModifyTableQuotas", req, resp, cb);
    }

    /**
     * 查询大区列表
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * 删除大区
     * @param {DeleteZoneRequest} req
     * @param {function(string, DeleteZoneResponse):void} cb
     * @public
     */
    DeleteZone(req, cb) {
        let resp = new DeleteZoneResponse();
        this.request("DeleteZone", req, resp, cb);
    }

    /**
     * 查询TcaplusDB应用列表，包含应用详细信息。
     * @param {DescribeAppsRequest} req
     * @param {function(string, DescribeAppsResponse):void} cb
     * @public
     */
    DescribeApps(req, cb) {
        let resp = new DescribeAppsResponse();
        this.request("DescribeApps", req, resp, cb);
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
     * 修改TcaplusDB大区名称
     * @param {ModifyZoneNameRequest} req
     * @param {function(string, ModifyZoneNameResponse):void} cb
     * @public
     */
    ModifyZoneName(req, cb) {
        let resp = new ModifyZoneNameResponse();
        this.request("ModifyZoneName", req, resp, cb);
    }

    /**
     * 本接口用于创建TcaplusDB应用
     * @param {CreateAppRequest} req
     * @param {function(string, CreateAppResponse):void} cb
     * @public
     */
    CreateApp(req, cb) {
        let resp = new CreateAppResponse();
        this.request("CreateApp", req, resp, cb);
    }

    /**
     * 选中目标表，上传并校验改表文件，返回是否允许修改表结构
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
     * 上传并校验加表文件，返回校验合法的表定义
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
