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
const ModifyAutoOpenProVersionConfigRequest = models.ModifyAutoOpenProVersionConfigRequest;
const DescribeProcessTaskStatusResponse = models.DescribeProcessTaskStatusResponse;
const DescribeAlarmAttributeResponse = models.DescribeAlarmAttributeResponse;
const DescribeWeeklyReportBruteAttacksResponse = models.DescribeWeeklyReportBruteAttacksResponse;
const DescribeAgentVulsRequest = models.DescribeAgentVulsRequest;
const UsualPlace = models.UsualPlace;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const WeeklyReportVul = models.WeeklyReportVul;
const DescribeWeeklyReportBruteAttacksRequest = models.DescribeWeeklyReportBruteAttacksRequest;
const CreateUsualLoginPlacesRequest = models.CreateUsualLoginPlacesRequest;
const DescribeProcessTaskStatusRequest = models.DescribeProcessTaskStatusRequest;
const ModifyAlarmAttributeRequest = models.ModifyAlarmAttributeRequest;
const ComponentStatistics = models.ComponentStatistics;
const InquiryPriceOpenProVersionPrepaidRequest = models.InquiryPriceOpenProVersionPrepaidRequest;
const DescribeBruteAttacksRequest = models.DescribeBruteAttacksRequest;
const DescribeSecurityTrendsRequest = models.DescribeSecurityTrendsRequest;
const Account = models.Account;
const RescanImpactedHostRequest = models.RescanImpactedHostRequest;
const BruteAttack = models.BruteAttack;
const DescribeOpenPortsRequest = models.DescribeOpenPortsRequest;
const DescribeImpactedHostsRequest = models.DescribeImpactedHostsRequest;
const DescribeMaliciousRequestsResponse = models.DescribeMaliciousRequestsResponse;
const NonLocalLoginPlace = models.NonLocalLoginPlace;
const CreateProcessTaskResponse = models.CreateProcessTaskResponse;
const RenewProVersionRequest = models.RenewProVersionRequest;
const DescribeComponentsRequest = models.DescribeComponentsRequest;
const DescribeNonlocalLoginPlacesRequest = models.DescribeNonlocalLoginPlacesRequest;
const OpenPortStatistics = models.OpenPortStatistics;
const DescribeHistoryAccountsResponse = models.DescribeHistoryAccountsResponse;
const DescribeVulScanResultResponse = models.DescribeVulScanResultResponse;
const UntrustMalwaresRequest = models.UntrustMalwaresRequest;
const DescribeWeeklyReportVulsRequest = models.DescribeWeeklyReportVulsRequest;
const TrustMalwaresRequest = models.TrustMalwaresRequest;
const UntrustMalwaresResponse = models.UntrustMalwaresResponse;
const UntrustMaliciousRequestRequest = models.UntrustMaliciousRequestRequest;
const DescribeComponentInfoResponse = models.DescribeComponentInfoResponse;
const DescribeAccountStatisticsResponse = models.DescribeAccountStatisticsResponse;
const OpenProVersionPrepaidRequest = models.OpenProVersionPrepaidRequest;
const OpenPort = models.OpenPort;
const DescribeProVersionInfoRequest = models.DescribeProVersionInfoRequest;
const CreateProcessTaskRequest = models.CreateProcessTaskRequest;
const DeleteMaliciousRequestsResponse = models.DeleteMaliciousRequestsResponse;
const DeleteMachineResponse = models.DeleteMachineResponse;
const MisAlarmNonlocalLoginPlacesResponse = models.MisAlarmNonlocalLoginPlacesResponse;
const WeeklyReportNonlocalLoginPlace = models.WeeklyReportNonlocalLoginPlace;
const DescribeOverviewStatisticsResponse = models.DescribeOverviewStatisticsResponse;
const RecoverMalwaresRequest = models.RecoverMalwaresRequest;
const MaliciousRequest = models.MaliciousRequest;
const TrustMalwaresResponse = models.TrustMalwaresResponse;
const DescribeWeeklyReportInfoRequest = models.DescribeWeeklyReportInfoRequest;
const DescribeProcessesResponse = models.DescribeProcessesResponse;
const WeeklyReportMalware = models.WeeklyReportMalware;
const DescribeWeeklyReportsRequest = models.DescribeWeeklyReportsRequest;
const DescribeVulsResponse = models.DescribeVulsResponse;
const DescribeImpactedHostsResponse = models.DescribeImpactedHostsResponse;
const AgentVul = models.AgentVul;
const DescribeOpenPortStatisticsRequest = models.DescribeOpenPortStatisticsRequest;
const DeleteMachineRequest = models.DeleteMachineRequest;
const DescribeVulInfoRequest = models.DescribeVulInfoRequest;
const DescribeComponentStatisticsResponse = models.DescribeComponentStatisticsResponse;
const Place = models.Place;
const DeleteUsualLoginPlacesResponse = models.DeleteUsualLoginPlacesResponse;
const DeleteNonlocalLoginPlacesResponse = models.DeleteNonlocalLoginPlacesResponse;
const DescribeNonlocalLoginPlacesResponse = models.DescribeNonlocalLoginPlacesResponse;
const DescribeWeeklyReportNonlocalLoginPlacesRequest = models.DescribeWeeklyReportNonlocalLoginPlacesRequest;
const InquiryPriceOpenProVersionPrepaidResponse = models.InquiryPriceOpenProVersionPrepaidResponse;
const DescribeMachineInfoResponse = models.DescribeMachineInfoResponse;
const DescribeUsualLoginPlacesResponse = models.DescribeUsualLoginPlacesResponse;
const DescribeComponentInfoRequest = models.DescribeComponentInfoRequest;
const MisAlarmNonlocalLoginPlacesRequest = models.MisAlarmNonlocalLoginPlacesRequest;
const TrustMaliciousRequestRequest = models.TrustMaliciousRequestRequest;
const DescribeWeeklyReportMalwaresRequest = models.DescribeWeeklyReportMalwaresRequest;
const DescribeBruteAttacksResponse = models.DescribeBruteAttacksResponse;
const DescribeComponentStatisticsRequest = models.DescribeComponentStatisticsRequest;
const DescribeOverviewStatisticsRequest = models.DescribeOverviewStatisticsRequest;
const DescribeOpenPortStatisticsResponse = models.DescribeOpenPortStatisticsResponse;
const UntrustMaliciousRequestResponse = models.UntrustMaliciousRequestResponse;
const SecurityDynamic = models.SecurityDynamic;
const DescribeVulInfoResponse = models.DescribeVulInfoResponse;
const DescribeProVersionInfoResponse = models.DescribeProVersionInfoResponse;
const DeleteBruteAttacksRequest = models.DeleteBruteAttacksRequest;
const DescribeWeeklyReportNonlocalLoginPlacesResponse = models.DescribeWeeklyReportNonlocalLoginPlacesResponse;
const SeparateMalwaresRequest = models.SeparateMalwaresRequest;
const RenewProVersionResponse = models.RenewProVersionResponse;
const DescribeSecurityTrendsResponse = models.DescribeSecurityTrendsResponse;
const ProVersionMachine = models.ProVersionMachine;
const ExportMaliciousRequestsResponse = models.ExportMaliciousRequestsResponse;
const DescribeWeeklyReportInfoResponse = models.DescribeWeeklyReportInfoResponse;
const DescribeSecurityDynamicsResponse = models.DescribeSecurityDynamicsResponse;
const TrustMaliciousRequestResponse = models.TrustMaliciousRequestResponse;
const CloseProVersionResponse = models.CloseProVersionResponse;
const DescribeOpenPortsResponse = models.DescribeOpenPortsResponse;
const DescribeMachineInfoRequest = models.DescribeMachineInfoRequest;
const DescribeMaliciousRequestsRequest = models.DescribeMaliciousRequestsRequest;
const DescribeProcessesRequest = models.DescribeProcessesRequest;
const DeleteUsualLoginPlacesRequest = models.DeleteUsualLoginPlacesRequest;
const WeeklyReport = models.WeeklyReport;
const Filter = models.Filter;
const DescribeAccountStatisticsRequest = models.DescribeAccountStatisticsRequest;
const OpenProVersionPrepaidResponse = models.OpenProVersionPrepaidResponse;
const DeleteMalwaresResponse = models.DeleteMalwaresResponse;
const ChargePrepaid = models.ChargePrepaid;
const SeparateMalwaresResponse = models.SeparateMalwaresResponse;
const ProcessStatistics = models.ProcessStatistics;
const Process = models.Process;
const DescribeVulScanResultRequest = models.DescribeVulScanResultRequest;
const DescribeWeeklyReportMalwaresResponse = models.DescribeWeeklyReportMalwaresResponse;
const DescribeSecurityDynamicsRequest = models.DescribeSecurityDynamicsRequest;
const ImpactedHost = models.ImpactedHost;
const DescribeProcessStatisticsResponse = models.DescribeProcessStatisticsResponse;
const DeleteNonlocalLoginPlacesRequest = models.DeleteNonlocalLoginPlacesRequest;
const Malware = models.Malware;
const ExportMaliciousRequestsRequest = models.ExportMaliciousRequestsRequest;
const AccountStatistics = models.AccountStatistics;
const DescribeMachinesResponse = models.DescribeMachinesResponse;
const CreateUsualLoginPlacesResponse = models.CreateUsualLoginPlacesResponse;
const ModifyProVersionRenewFlagResponse = models.ModifyProVersionRenewFlagResponse;
const Machine = models.Machine;
const DescribeWeeklyReportVulsResponse = models.DescribeWeeklyReportVulsResponse;
const WeeklyReportBruteAttack = models.WeeklyReportBruteAttack;
const HistoryAccount = models.HistoryAccount;
const ModifyProVersionRenewFlagRequest = models.ModifyProVersionRenewFlagRequest;
const DescribeUsualLoginPlacesRequest = models.DescribeUsualLoginPlacesRequest;
const Component = models.Component;
const DescribeVulsRequest = models.DescribeVulsRequest;
const DescribeAgentVulsResponse = models.DescribeAgentVulsResponse;
const DescribeProcessStatisticsRequest = models.DescribeProcessStatisticsRequest;
const DescribeHistoryAccountsRequest = models.DescribeHistoryAccountsRequest;
const CloseProVersionRequest = models.CloseProVersionRequest;
const ModifyAlarmAttributeResponse = models.ModifyAlarmAttributeResponse;
const IgnoreImpactedHostsResponse = models.IgnoreImpactedHostsResponse;
const DescribeComponentsResponse = models.DescribeComponentsResponse;
const RescanImpactedHostResponse = models.RescanImpactedHostResponse;
const SecurityTrend = models.SecurityTrend;
const Vul = models.Vul;
const DescribeWeeklyReportsResponse = models.DescribeWeeklyReportsResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const ModifyAutoOpenProVersionConfigResponse = models.ModifyAutoOpenProVersionConfigResponse;
const RecoverMalwaresResponse = models.RecoverMalwaresResponse;
const IgnoreImpactedHostsRequest = models.IgnoreImpactedHostsRequest;
const DescribeAlarmAttributeRequest = models.DescribeAlarmAttributeRequest;
const DescribeMalwaresRequest = models.DescribeMalwaresRequest;
const DeleteMaliciousRequestsRequest = models.DeleteMaliciousRequestsRequest;
const DescribeMachinesRequest = models.DescribeMachinesRequest;
const DeleteMalwaresRequest = models.DeleteMalwaresRequest;
const DescribeMalwaresResponse = models.DescribeMalwaresResponse;
const DeleteBruteAttacksResponse = models.DeleteBruteAttacksResponse;


/**
 * yunjing client
 * @class
 */
class YunjingClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("yunjing.tencentcloudapi.com", "2018-02-28", credential, region, profile);
    }
    
    /**
     * 本接口 (DescribeVulScanResult) 用于获取漏洞检测结果。

     * @param {DescribeVulScanResultRequest} req
     * @param {function(string, DescribeVulScanResultResponse):void} cb
     * @public
     */
    DescribeVulScanResult(req, cb) {
        let resp = new DescribeVulScanResultResponse();
        this.request("DescribeVulScanResult", req, resp, cb);
    }

    /**
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     * @param {TrustMalwaresRequest} req
     * @param {function(string, TrustMalwaresResponse):void} cb
     * @public
     */
    TrustMalwares(req, cb) {
        let resp = new TrustMalwaresResponse();
        this.request("TrustMalwares", req, resp, cb);
    }

    /**
     * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
     * @param {RecoverMalwaresRequest} req
     * @param {function(string, RecoverMalwaresResponse):void} cb
     * @public
     */
    RecoverMalwares(req, cb) {
        let resp = new RecoverMalwaresResponse();
        this.request("RecoverMalwares", req, resp, cb);
    }

    /**
     * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
     * @param {DescribeComponentStatisticsRequest} req
     * @param {function(string, DescribeComponentStatisticsResponse):void} cb
     * @public
     */
    DescribeComponentStatistics(req, cb) {
        let resp = new DescribeComponentStatisticsResponse();
        this.request("DescribeComponentStatistics", req, resp, cb);
    }

    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     * @param {DescribeHistoryAccountsRequest} req
     * @param {function(string, DescribeHistoryAccountsResponse):void} cb
     * @public
     */
    DescribeHistoryAccounts(req, cb) {
        let resp = new DescribeHistoryAccountsResponse();
        this.request("DescribeHistoryAccounts", req, resp, cb);
    }

    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     * @param {DeleteMalwaresRequest} req
     * @param {function(string, DeleteMalwaresResponse):void} cb
     * @public
     */
    DeleteMalwares(req, cb) {
        let resp = new DeleteMalwaresResponse();
        this.request("DeleteMalwares", req, resp, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportBruteAttacks) 用于获取专业周报密码破解数据。
     * @param {DescribeWeeklyReportBruteAttacksRequest} req
     * @param {function(string, DescribeWeeklyReportBruteAttacksResponse):void} cb
     * @public
     */
    DescribeWeeklyReportBruteAttacks(req, cb) {
        let resp = new DescribeWeeklyReportBruteAttacksResponse();
        this.request("DescribeWeeklyReportBruteAttacks", req, resp, cb);
    }

    /**
     * 本接口{DescribeBruteAttacks}用于获取暴力破解事件列表。
     * @param {DescribeBruteAttacksRequest} req
     * @param {function(string, DescribeBruteAttacksResponse):void} cb
     * @public
     */
    DescribeBruteAttacks(req, cb) {
        let resp = new DescribeBruteAttacksResponse();
        this.request("DescribeBruteAttacks", req, resp, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportVuls) 用于专业版周报漏洞数据。

     * @param {DescribeWeeklyReportVulsRequest} req
     * @param {function(string, DescribeWeeklyReportVulsResponse):void} cb
     * @public
     */
    DescribeWeeklyReportVuls(req, cb) {
        let resp = new DescribeWeeklyReportVulsResponse();
        this.request("DescribeWeeklyReportVuls", req, resp, cb);
    }

    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     * @param {UntrustMalwaresRequest} req
     * @param {function(string, UntrustMalwaresResponse):void} cb
     * @public
     */
    UntrustMalwares(req, cb) {
        let resp = new UntrustMalwaresResponse();
        this.request("UntrustMalwares", req, resp, cb);
    }

    /**
     * 本接口 (OpenProVersionPrepaid) 用于开通专业版(包年包月)。
     * @param {OpenProVersionPrepaidRequest} req
     * @param {function(string, OpenProVersionPrepaidResponse):void} cb
     * @public
     */
    OpenProVersionPrepaid(req, cb) {
        let resp = new OpenProVersionPrepaidResponse();
        this.request("OpenProVersionPrepaid", req, resp, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportMalwares) 用于获取专业周报木马数据。
     * @param {DescribeWeeklyReportMalwaresRequest} req
     * @param {function(string, DescribeWeeklyReportMalwaresResponse):void} cb
     * @public
     */
    DescribeWeeklyReportMalwares(req, cb) {
        let resp = new DescribeWeeklyReportMalwaresResponse();
        this.request("DescribeWeeklyReportMalwares", req, resp, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportInfo) 用于获取专业周报详情数据。
     * @param {DescribeWeeklyReportInfoRequest} req
     * @param {function(string, DescribeWeeklyReportInfoResponse):void} cb
     * @public
     */
    DescribeWeeklyReportInfo(req, cb) {
        let resp = new DescribeWeeklyReportInfoResponse();
        this.request("DescribeWeeklyReportInfo", req, resp, cb);
    }

    /**
     * 本接口 (DescribeComponentInfo) 用于获取组件信息数据。
     * @param {DescribeComponentInfoRequest} req
     * @param {function(string, DescribeComponentInfoResponse):void} cb
     * @public
     */
    DescribeComponentInfo(req, cb) {
        let resp = new DescribeComponentInfoResponse();
        this.request("DescribeComponentInfo", req, resp, cb);
    }

    /**
     * 本接口 (DescribeVulInfo) 用于获取漏洞详情。
     * @param {DescribeVulInfoRequest} req
     * @param {function(string, DescribeVulInfoResponse):void} cb
     * @public
     */
    DescribeVulInfo(req, cb) {
        let resp = new DescribeVulInfoResponse();
        this.request("DescribeVulInfo", req, resp, cb);
    }

    /**
     * 本接口 (ModifyProVersionRenewFlag) 用于修改专业版包年包月续费标识。
     * @param {ModifyProVersionRenewFlagRequest} req
     * @param {function(string, ModifyProVersionRenewFlagResponse):void} cb
     * @public
     */
    ModifyProVersionRenewFlag(req, cb) {
        let resp = new ModifyProVersionRenewFlagResponse();
        this.request("ModifyProVersionRenewFlag", req, resp, cb);
    }

    /**
     * 本接口（DeleteUsualLoginPlaces）用于删除常用登录地。
     * @param {DeleteUsualLoginPlacesRequest} req
     * @param {function(string, DeleteUsualLoginPlacesResponse):void} cb
     * @public
     */
    DeleteUsualLoginPlaces(req, cb) {
        let resp = new DeleteUsualLoginPlacesResponse();
        this.request("DeleteUsualLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     * @param {DeleteNonlocalLoginPlacesRequest} req
     * @param {function(string, DeleteNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DeleteNonlocalLoginPlaces(req, cb) {
        let resp = new DeleteNonlocalLoginPlacesResponse();
        this.request("DeleteNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口 (DescribeOpenPorts) 用于获取端口列表数据。

     * @param {DescribeOpenPortsRequest} req
     * @param {function(string, DescribeOpenPortsResponse):void} cb
     * @public
     */
    DescribeOpenPorts(req, cb) {
        let resp = new DescribeOpenPortsResponse();
        this.request("DescribeOpenPorts", req, resp, cb);
    }

    /**
     * 本接口{MisAlarmNonlocalLoginPlaces}将设置当前地点为常用登录地。
     * @param {MisAlarmNonlocalLoginPlacesRequest} req
     * @param {function(string, MisAlarmNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    MisAlarmNonlocalLoginPlaces(req, cb) {
        let resp = new MisAlarmNonlocalLoginPlacesResponse();
        this.request("MisAlarmNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     * @param {DescribeOpenPortStatisticsRequest} req
     * @param {function(string, DescribeOpenPortStatisticsResponse):void} cb
     * @public
     */
    DescribeOpenPortStatistics(req, cb) {
        let resp = new DescribeOpenPortStatisticsResponse();
        this.request("DescribeOpenPortStatistics", req, resp, cb);
    }

    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     * @param {ExportMaliciousRequestsRequest} req
     * @param {function(string, ExportMaliciousRequestsResponse):void} cb
     * @public
     */
    ExportMaliciousRequests(req, cb) {
        let resp = new ExportMaliciousRequestsResponse();
        this.request("ExportMaliciousRequests", req, resp, cb);
    }

    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     * @param {SeparateMalwaresRequest} req
     * @param {function(string, SeparateMalwaresResponse):void} cb
     * @public
     */
    SeparateMalwares(req, cb) {
        let resp = new SeparateMalwaresResponse();
        this.request("SeparateMalwares", req, resp, cb);
    }

    /**
     * 本接口(DescribeNonlocalLoginPlaces)用于获取异地登录事件。
     * @param {DescribeNonlocalLoginPlacesRequest} req
     * @param {function(string, DescribeNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DescribeNonlocalLoginPlaces(req, cb) {
        let resp = new DescribeNonlocalLoginPlacesResponse();
        this.request("DescribeNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     * @param {DeleteMachineRequest} req
     * @param {function(string, DeleteMachineResponse):void} cb
     * @public
     */
    DeleteMachine(req, cb) {
        let resp = new DeleteMachineResponse();
        this.request("DeleteMachine", req, resp, cb);
    }

    /**
     * 本接口 (DescribeProcessTaskStatus) 用于获取实时拉取进程任务状态。
     * @param {DescribeProcessTaskStatusRequest} req
     * @param {function(string, DescribeProcessTaskStatusResponse):void} cb
     * @public
     */
    DescribeProcessTaskStatus(req, cb) {
        let resp = new DescribeProcessTaskStatusResponse();
        this.request("DescribeProcessTaskStatus", req, resp, cb);
    }

    /**
     * 本接口用于（DescribeOverviewStatistics）获取概览统计数据。
     * @param {DescribeOverviewStatisticsRequest} req
     * @param {function(string, DescribeOverviewStatisticsResponse):void} cb
     * @public
     */
    DescribeOverviewStatistics(req, cb) {
        let resp = new DescribeOverviewStatisticsResponse();
        this.request("DescribeOverviewStatistics", req, resp, cb);
    }

    /**
     * 本接口 (UntrustMaliciousRequest) 用于取消信任恶意请求。
     * @param {UntrustMaliciousRequestRequest} req
     * @param {function(string, UntrustMaliciousRequestResponse):void} cb
     * @public
     */
    UntrustMaliciousRequest(req, cb) {
        let resp = new UntrustMaliciousRequestResponse();
        this.request("UntrustMaliciousRequest", req, resp, cb);
    }

    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     * @param {DescribeUsualLoginPlacesRequest} req
     * @param {function(string, DescribeUsualLoginPlacesResponse):void} cb
     * @public
     */
    DescribeUsualLoginPlaces(req, cb) {
        let resp = new DescribeUsualLoginPlacesResponse();
        this.request("DescribeUsualLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
     * @param {DescribeProcessStatisticsRequest} req
     * @param {function(string, DescribeProcessStatisticsResponse):void} cb
     * @public
     */
    DescribeProcessStatistics(req, cb) {
        let resp = new DescribeProcessStatisticsResponse();
        this.request("DescribeProcessStatistics", req, resp, cb);
    }

    /**
     * 本接口 (DescribeMaliciousRequests) 用于获取恶意请求数据。
     * @param {DescribeMaliciousRequestsRequest} req
     * @param {function(string, DescribeMaliciousRequestsResponse):void} cb
     * @public
     */
    DescribeMaliciousRequests(req, cb) {
        let resp = new DescribeMaliciousRequestsResponse();
        this.request("DescribeMaliciousRequests", req, resp, cb);
    }

    /**
     * 本接口 (DescribeSecurityDynamics) 用于获取安全事件消息数据。
     * @param {DescribeSecurityDynamicsRequest} req
     * @param {function(string, DescribeSecurityDynamicsResponse):void} cb
     * @public
     */
    DescribeSecurityDynamics(req, cb) {
        let resp = new DescribeSecurityDynamicsResponse();
        this.request("DescribeSecurityDynamics", req, resp, cb);
    }

    /**
     * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
     * @param {DeleteMaliciousRequestsRequest} req
     * @param {function(string, DeleteMaliciousRequestsResponse):void} cb
     * @public
     */
    DeleteMaliciousRequests(req, cb) {
        let resp = new DeleteMaliciousRequestsResponse();
        this.request("DeleteMaliciousRequests", req, resp, cb);
    }

    /**
     * 本接口 (RescanImpactedHosts) 用于漏洞重新检测。
     * @param {RescanImpactedHostRequest} req
     * @param {function(string, RescanImpactedHostResponse):void} cb
     * @public
     */
    RescanImpactedHost(req, cb) {
        let resp = new RescanImpactedHostResponse();
        this.request("RescanImpactedHost", req, resp, cb);
    }

    /**
     * 本接口 (DescribeImpactedHosts) 用于获取漏洞受影响机器列表。
     * @param {DescribeImpactedHostsRequest} req
     * @param {function(string, DescribeImpactedHostsResponse):void} cb
     * @public
     */
    DescribeImpactedHosts(req, cb) {
        let resp = new DescribeImpactedHostsResponse();
        this.request("DescribeImpactedHosts", req, resp, cb);
    }

    /**
     * 本接口 (ModifyAutoOpenProVersionConfig) 用于设置新增主机自动开通专业版配置。
     * @param {ModifyAutoOpenProVersionConfigRequest} req
     * @param {function(string, ModifyAutoOpenProVersionConfigResponse):void} cb
     * @public
     */
    ModifyAutoOpenProVersionConfig(req, cb) {
        let resp = new ModifyAutoOpenProVersionConfigResponse();
        this.request("ModifyAutoOpenProVersionConfig", req, resp, cb);
    }

    /**
     * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
     * @param {DescribeSecurityTrendsRequest} req
     * @param {function(string, DescribeSecurityTrendsResponse):void} cb
     * @public
     */
    DescribeSecurityTrends(req, cb) {
        let resp = new DescribeSecurityTrendsResponse();
        this.request("DescribeSecurityTrends", req, resp, cb);
    }

    /**
     * 本接口 (DescribeAgentVuls) 用于获取主机的漏洞列表。
     * @param {DescribeAgentVulsRequest} req
     * @param {function(string, DescribeAgentVulsResponse):void} cb
     * @public
     */
    DescribeAgentVuls(req, cb) {
        let resp = new DescribeAgentVulsResponse();
        this.request("DescribeAgentVuls", req, resp, cb);
    }

    /**
     * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
     * @param {DeleteBruteAttacksRequest} req
     * @param {function(string, DeleteBruteAttacksResponse):void} cb
     * @public
     */
    DeleteBruteAttacks(req, cb) {
        let resp = new DeleteBruteAttacksResponse();
        this.request("DeleteBruteAttacks", req, resp, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportNonlocalLoginPlaces) 用于获取专业周报异地登录数据。
     * @param {DescribeWeeklyReportNonlocalLoginPlacesRequest} req
     * @param {function(string, DescribeWeeklyReportNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DescribeWeeklyReportNonlocalLoginPlaces(req, cb) {
        let resp = new DescribeWeeklyReportNonlocalLoginPlacesResponse();
        this.request("DescribeWeeklyReportNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口 (DescribeAccounts) 用于获取帐号列表数据。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 本接口 (DescribeVuls) 用于获取漏洞列表数据。
     * @param {DescribeVulsRequest} req
     * @param {function(string, DescribeVulsResponse):void} cb
     * @public
     */
    DescribeVuls(req, cb) {
        let resp = new DescribeVulsResponse();
        this.request("DescribeVuls", req, resp, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReports) 用于获取周报列表数据。
     * @param {DescribeWeeklyReportsRequest} req
     * @param {function(string, DescribeWeeklyReportsResponse):void} cb
     * @public
     */
    DescribeWeeklyReports(req, cb) {
        let resp = new DescribeWeeklyReportsResponse();
        this.request("DescribeWeeklyReports", req, resp, cb);
    }

    /**
     * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
     * @param {InquiryPriceOpenProVersionPrepaidRequest} req
     * @param {function(string, InquiryPriceOpenProVersionPrepaidResponse):void} cb
     * @public
     */
    InquiryPriceOpenProVersionPrepaid(req, cb) {
        let resp = new InquiryPriceOpenProVersionPrepaidResponse();
        this.request("InquiryPriceOpenProVersionPrepaid", req, resp, cb);
    }

    /**
     * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
     * @param {DescribeProVersionInfoRequest} req
     * @param {function(string, DescribeProVersionInfoResponse):void} cb
     * @public
     */
    DescribeProVersionInfo(req, cb) {
        let resp = new DescribeProVersionInfoResponse();
        this.request("DescribeProVersionInfo", req, resp, cb);
    }

    /**
     * 本接口 (IngoreImpactedHosts) 用于忽略漏洞。
     * @param {IgnoreImpactedHostsRequest} req
     * @param {function(string, IgnoreImpactedHostsResponse):void} cb
     * @public
     */
    IgnoreImpactedHosts(req, cb) {
        let resp = new IgnoreImpactedHostsResponse();
        this.request("IgnoreImpactedHosts", req, resp, cb);
    }

    /**
     * 本接口 (CloseProVersion) 用于关闭专业版。
     * @param {CloseProVersionRequest} req
     * @param {function(string, CloseProVersionResponse):void} cb
     * @public
     */
    CloseProVersion(req, cb) {
        let resp = new CloseProVersionResponse();
        this.request("CloseProVersion", req, resp, cb);
    }

    /**
     * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
     * @param {DescribeAccountStatisticsRequest} req
     * @param {function(string, DescribeAccountStatisticsResponse):void} cb
     * @public
     */
    DescribeAccountStatistics(req, cb) {
        let resp = new DescribeAccountStatisticsResponse();
        this.request("DescribeAccountStatistics", req, resp, cb);
    }

    /**
     * 本接口 (CreateProcessTask) 用于创建实时拉取进程任务。
     * @param {CreateProcessTaskRequest} req
     * @param {function(string, CreateProcessTaskResponse):void} cb
     * @public
     */
    CreateProcessTask(req, cb) {
        let resp = new CreateProcessTaskResponse();
        this.request("CreateProcessTask", req, resp, cb);
    }

    /**
     * 本接口（ModifyAlarmAttribute）用于修改告警设置。
     * @param {ModifyAlarmAttributeRequest} req
     * @param {function(string, ModifyAlarmAttributeResponse):void} cb
     * @public
     */
    ModifyAlarmAttribute(req, cb) {
        let resp = new ModifyAlarmAttributeResponse();
        this.request("ModifyAlarmAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeMachineInfo）用于获取机器详细信息。
     * @param {DescribeMachineInfoRequest} req
     * @param {function(string, DescribeMachineInfoResponse):void} cb
     * @public
     */
    DescribeMachineInfo(req, cb) {
        let resp = new DescribeMachineInfoResponse();
        this.request("DescribeMachineInfo", req, resp, cb);
    }

    /**
     * 本接口 (DescribeAlarmAttribute) 用于获取告警设置。
     * @param {DescribeAlarmAttributeRequest} req
     * @param {function(string, DescribeAlarmAttributeResponse):void} cb
     * @public
     */
    DescribeAlarmAttribute(req, cb) {
        let resp = new DescribeAlarmAttributeResponse();
        this.request("DescribeAlarmAttribute", req, resp, cb);
    }

    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     * @param {DescribeMachinesRequest} req
     * @param {function(string, DescribeMachinesResponse):void} cb
     * @public
     */
    DescribeMachines(req, cb) {
        let resp = new DescribeMachinesResponse();
        this.request("DescribeMachines", req, resp, cb);
    }

    /**
     * 此接口（CreateUsualLoginPlaces）用于添加常用登录地。
     * @param {CreateUsualLoginPlacesRequest} req
     * @param {function(string, CreateUsualLoginPlacesResponse):void} cb
     * @public
     */
    CreateUsualLoginPlaces(req, cb) {
        let resp = new CreateUsualLoginPlacesResponse();
        this.request("CreateUsualLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口 (DescribeComponents) 用于获取组件列表数据。
     * @param {DescribeComponentsRequest} req
     * @param {function(string, DescribeComponentsResponse):void} cb
     * @public
     */
    DescribeComponents(req, cb) {
        let resp = new DescribeComponentsResponse();
        this.request("DescribeComponents", req, resp, cb);
    }

    /**
     * 本接口 (RenewProVersion) 用于续费专业版(包年包月)。
     * @param {RenewProVersionRequest} req
     * @param {function(string, RenewProVersionResponse):void} cb
     * @public
     */
    RenewProVersion(req, cb) {
        let resp = new RenewProVersionResponse();
        this.request("RenewProVersion", req, resp, cb);
    }

    /**
     * 本接口 (DescribeProcesses) 用于获取进程列表数据。
     * @param {DescribeProcessesRequest} req
     * @param {function(string, DescribeProcessesResponse):void} cb
     * @public
     */
    DescribeProcesses(req, cb) {
        let resp = new DescribeProcessesResponse();
        this.request("DescribeProcesses", req, resp, cb);
    }

    /**
     * 本接口 (TrustMaliciousRequest) 用于恶意请求添加信任。
     * @param {TrustMaliciousRequestRequest} req
     * @param {function(string, TrustMaliciousRequestResponse):void} cb
     * @public
     */
    TrustMaliciousRequest(req, cb) {
        let resp = new TrustMaliciousRequestResponse();
        this.request("TrustMaliciousRequest", req, resp, cb);
    }

    /**
     * 本接口（DescribeMalwares）用于获取木马事件列表。
     * @param {DescribeMalwaresRequest} req
     * @param {function(string, DescribeMalwaresResponse):void} cb
     * @public
     */
    DescribeMalwares(req, cb) {
        let resp = new DescribeMalwaresResponse();
        this.request("DescribeMalwares", req, resp, cb);
    }


}
module.exports = YunjingClient;
