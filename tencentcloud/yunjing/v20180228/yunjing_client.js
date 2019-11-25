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
const ExportBashEventsRequest = models.ExportBashEventsRequest;
const ModifyAutoOpenProVersionConfigRequest = models.ModifyAutoOpenProVersionConfigRequest;
const DescribeProcessTaskStatusResponse = models.DescribeProcessTaskStatusResponse;
const ExportReverseShellEventsResponse = models.ExportReverseShellEventsResponse;
const DescribeBashRulesRequest = models.DescribeBashRulesRequest;
const ExportPrivilegeEventsResponse = models.ExportPrivilegeEventsResponse;
const DescribeAlarmAttributeResponse = models.DescribeAlarmAttributeResponse;
const DescribeWeeklyReportBruteAttacksResponse = models.DescribeWeeklyReportBruteAttacksResponse;
const DescribeAgentVulsRequest = models.DescribeAgentVulsRequest;
const AddMachineTagResponse = models.AddMachineTagResponse;
const UsualPlace = models.UsualPlace;
const DescribeReverseShellRulesRequest = models.DescribeReverseShellRulesRequest;
const SetBashEventsStatusRequest = models.SetBashEventsStatusRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const DescribeReverseShellEventsRequest = models.DescribeReverseShellEventsRequest;
const WeeklyReportVul = models.WeeklyReportVul;
const DescribeWeeklyReportBruteAttacksRequest = models.DescribeWeeklyReportBruteAttacksRequest;
const CreateUsualLoginPlacesRequest = models.CreateUsualLoginPlacesRequest;
const DescribeProcessTaskStatusRequest = models.DescribeProcessTaskStatusRequest;
const DescribeVulScanResultResponse = models.DescribeVulScanResultResponse;
const ModifyAlarmAttributeRequest = models.ModifyAlarmAttributeRequest;
const DescribeAttackLogsRequest = models.DescribeAttackLogsRequest;
const ComponentStatistics = models.ComponentStatistics;
const InquiryPriceOpenProVersionPrepaidRequest = models.InquiryPriceOpenProVersionPrepaidRequest;
const ExportMalwaresRequest = models.ExportMalwaresRequest;
const DescribeProcessesResponse = models.DescribeProcessesResponse;
const DeleteBashEventsResponse = models.DeleteBashEventsResponse;
const ExportPrivilegeEventsRequest = models.ExportPrivilegeEventsRequest;
const WeeklyReportMalware = models.WeeklyReportMalware;
const DescribeBruteAttacksRequest = models.DescribeBruteAttacksRequest;
const DescribeSecurityTrendsRequest = models.DescribeSecurityTrendsRequest;
const Account = models.Account;
const DescribeReverseShellEventsResponse = models.DescribeReverseShellEventsResponse;
const DescribePrivilegeRulesRequest = models.DescribePrivilegeRulesRequest;
const BruteAttack = models.BruteAttack;
const DescribeOpenPortsRequest = models.DescribeOpenPortsRequest;
const DescribeImpactedHostsRequest = models.DescribeImpactedHostsRequest;
const DescribeMaliciousRequestsResponse = models.DescribeMaliciousRequestsResponse;
const NonLocalLoginPlace = models.NonLocalLoginPlace;
const CreateProcessTaskResponse = models.CreateProcessTaskResponse;
const SecurityDynamic = models.SecurityDynamic;
const RenewProVersionRequest = models.RenewProVersionRequest;
const DescribeComponentsRequest = models.DescribeComponentsRequest;
const DescribeNonlocalLoginPlacesRequest = models.DescribeNonlocalLoginPlacesRequest;
const DeleteMachineTagRequest = models.DeleteMachineTagRequest;
const ReverseShellRule = models.ReverseShellRule;
const OpenPortStatistics = models.OpenPortStatistics;
const EditPrivilegeRuleResponse = models.EditPrivilegeRuleResponse;
const DescribeHistoryAccountsResponse = models.DescribeHistoryAccountsResponse;
const AgentVul = models.AgentVul;
const UntrustMalwaresRequest = models.UntrustMalwaresRequest;
const ExportAttackLogsResponse = models.ExportAttackLogsResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeLoginWhiteListRequest = models.DescribeLoginWhiteListRequest;
const ReverseShell = models.ReverseShell;
const UntrustMaliciousRequestRequest = models.UntrustMaliciousRequestRequest;
const ExportNonlocalLoginPlacesRequest = models.ExportNonlocalLoginPlacesRequest;
const DescribeComponentInfoResponse = models.DescribeComponentInfoResponse;
const DescribeAccountStatisticsResponse = models.DescribeAccountStatisticsResponse;
const OpenProVersionPrepaidRequest = models.OpenProVersionPrepaidRequest;
const ModifyLoginWhiteListResponse = models.ModifyLoginWhiteListResponse;
const DescribeTagsResponse = models.DescribeTagsResponse;
const OpenPort = models.OpenPort;
const DescribeProVersionInfoRequest = models.DescribeProVersionInfoRequest;
const CreateProcessTaskRequest = models.CreateProcessTaskRequest;
const DeleteMaliciousRequestsResponse = models.DeleteMaliciousRequestsResponse;
const ExportBruteAttacksResponse = models.ExportBruteAttacksResponse;
const EditReverseShellRuleResponse = models.EditReverseShellRuleResponse;
const ExportBruteAttacksRequest = models.ExportBruteAttacksRequest;
const DeleteMachineResponse = models.DeleteMachineResponse;
const DeleteLoginWhiteListRequest = models.DeleteLoginWhiteListRequest;
const MachineTag = models.MachineTag;
const DescribeAttackLogInfoResponse = models.DescribeAttackLogInfoResponse;
const DescribePrivilegeEventsResponse = models.DescribePrivilegeEventsResponse;
const WeeklyReportNonlocalLoginPlace = models.WeeklyReportNonlocalLoginPlace;
const DescribeOverviewStatisticsResponse = models.DescribeOverviewStatisticsResponse;
const RecoverMalwaresRequest = models.RecoverMalwaresRequest;
const MaliciousRequest = models.MaliciousRequest;
const TrustMalwaresResponse = models.TrustMalwaresResponse;
const TagMachine = models.TagMachine;
const DescribeWeeklyReportInfoRequest = models.DescribeWeeklyReportInfoRequest;
const EditTagsRequest = models.EditTagsRequest;
const AddLoginWhiteListRequest = models.AddLoginWhiteListRequest;
const DeleteReverseShellRulesRequest = models.DeleteReverseShellRulesRequest;
const DescribeWeeklyReportsRequest = models.DescribeWeeklyReportsRequest;
const DescribeBashRulesResponse = models.DescribeBashRulesResponse;
const DescribeImpactedHostsResponse = models.DescribeImpactedHostsResponse;
const RescanImpactedHostRequest = models.RescanImpactedHostRequest;
const DescribeBashEventsResponse = models.DescribeBashEventsResponse;
const ModifyLoginWhiteListRequest = models.ModifyLoginWhiteListRequest;
const DescribeBashEventsRequest = models.DescribeBashEventsRequest;
const DeleteTagsRequest = models.DeleteTagsRequest;
const DescribeOpenPortStatisticsRequest = models.DescribeOpenPortStatisticsRequest;
const ExportAttackLogsRequest = models.ExportAttackLogsRequest;
const DeleteMachineRequest = models.DeleteMachineRequest;
const DescribeVulInfoRequest = models.DescribeVulInfoRequest;
const UntrustMaliciousRequestResponse = models.UntrustMaliciousRequestResponse;
const DescribeComponentStatisticsResponse = models.DescribeComponentStatisticsResponse;
const PrivilegeEscalationProcess = models.PrivilegeEscalationProcess;
const Place = models.Place;
const SwitchBashRulesResponse = models.SwitchBashRulesResponse;
const LoginWhiteLists = models.LoginWhiteLists;
const DeleteUsualLoginPlacesResponse = models.DeleteUsualLoginPlacesResponse;
const DeleteNonlocalLoginPlacesResponse = models.DeleteNonlocalLoginPlacesResponse;
const DescribeNonlocalLoginPlacesResponse = models.DescribeNonlocalLoginPlacesResponse;
const DeleteReverseShellRulesResponse = models.DeleteReverseShellRulesResponse;
const ExportMalwaresResponse = models.ExportMalwaresResponse;
const UntrustMalwaresResponse = models.UntrustMalwaresResponse;
const DeletePrivilegeRulesResponse = models.DeletePrivilegeRulesResponse;
const CreateOpenPortTaskResponse = models.CreateOpenPortTaskResponse;
const EditBashRuleRequest = models.EditBashRuleRequest;
const DeletePrivilegeEventsResponse = models.DeletePrivilegeEventsResponse;
const InquiryPriceOpenProVersionPrepaidResponse = models.InquiryPriceOpenProVersionPrepaidResponse;
const DescribeMachineInfoResponse = models.DescribeMachineInfoResponse;
const SetBashEventsStatusResponse = models.SetBashEventsStatusResponse;
const DescribeUsualLoginPlacesResponse = models.DescribeUsualLoginPlacesResponse;
const DescribeProcessStatisticsResponse = models.DescribeProcessStatisticsResponse;
const MisAlarmNonlocalLoginPlacesRequest = models.MisAlarmNonlocalLoginPlacesRequest;
const TrustMaliciousRequestRequest = models.TrustMaliciousRequestRequest;
const ExportMaliciousRequestsResponse = models.ExportMaliciousRequestsResponse;
const DescribeAttackLogInfoRequest = models.DescribeAttackLogInfoRequest;
const DescribeWeeklyReportMalwaresRequest = models.DescribeWeeklyReportMalwaresRequest;
const DescribeBruteAttacksResponse = models.DescribeBruteAttacksResponse;
const ExportNonlocalLoginPlacesResponse = models.ExportNonlocalLoginPlacesResponse;
const DescribeComponentStatisticsRequest = models.DescribeComponentStatisticsRequest;
const DescribeOverviewStatisticsRequest = models.DescribeOverviewStatisticsRequest;
const DescribeOpenPortStatisticsResponse = models.DescribeOpenPortStatisticsResponse;
const DeleteAttackLogsResponse = models.DeleteAttackLogsResponse;
const DescribeLoginWhiteListResponse = models.DescribeLoginWhiteListResponse;
const DescribeVulInfoResponse = models.DescribeVulInfoResponse;
const DescribeTagMachinesRequest = models.DescribeTagMachinesRequest;
const EditReverseShellRuleRequest = models.EditReverseShellRuleRequest;
const DescribeProVersionInfoResponse = models.DescribeProVersionInfoResponse;
const DeleteTagsResponse = models.DeleteTagsResponse;
const DeleteBruteAttacksRequest = models.DeleteBruteAttacksRequest;
const DescribeWeeklyReportVulsRequest = models.DescribeWeeklyReportVulsRequest;
const AddLoginWhiteListResponse = models.AddLoginWhiteListResponse;
const BashRule = models.BashRule;
const DescribeOpenPortTaskStatusResponse = models.DescribeOpenPortTaskStatusResponse;
const DescribeWeeklyReportNonlocalLoginPlacesResponse = models.DescribeWeeklyReportNonlocalLoginPlacesResponse;
const SeparateMalwaresRequest = models.SeparateMalwaresRequest;
const RenewProVersionResponse = models.RenewProVersionResponse;
const LoginWhiteListsRule = models.LoginWhiteListsRule;
const DescribeTagMachinesResponse = models.DescribeTagMachinesResponse;
const DescribeSecurityTrendsResponse = models.DescribeSecurityTrendsResponse;
const ProVersionMachine = models.ProVersionMachine;
const CreateOpenPortTaskRequest = models.CreateOpenPortTaskRequest;
const DescribeWeeklyReportInfoResponse = models.DescribeWeeklyReportInfoResponse;
const DescribeSecurityDynamicsResponse = models.DescribeSecurityDynamicsResponse;
const DeleteReverseShellEventsResponse = models.DeleteReverseShellEventsResponse;
const DeletePrivilegeEventsRequest = models.DeletePrivilegeEventsRequest;
const DeleteBashRulesRequest = models.DeleteBashRulesRequest;
const CloseProVersionResponse = models.CloseProVersionResponse;
const DeleteAttackLogsRequest = models.DeleteAttackLogsRequest;
const DescribeOpenPortsResponse = models.DescribeOpenPortsResponse;
const EditBashRuleResponse = models.EditBashRuleResponse;
const DescribeMachineInfoRequest = models.DescribeMachineInfoRequest;
const DescribeMaliciousRequestsRequest = models.DescribeMaliciousRequestsRequest;
const DescribeProcessesRequest = models.DescribeProcessesRequest;
const DeleteUsualLoginPlacesRequest = models.DeleteUsualLoginPlacesRequest;
const WeeklyReport = models.WeeklyReport;
const DescribeOpenPortTaskStatusRequest = models.DescribeOpenPortTaskStatusRequest;
const Filter = models.Filter;
const DeleteLoginWhiteListResponse = models.DeleteLoginWhiteListResponse;
const DescribeAccountStatisticsRequest = models.DescribeAccountStatisticsRequest;
const DescribeAttackLogsResponse = models.DescribeAttackLogsResponse;
const OpenProVersionPrepaidResponse = models.OpenProVersionPrepaidResponse;
const MisAlarmNonlocalLoginPlacesResponse = models.MisAlarmNonlocalLoginPlacesResponse;
const DeleteMalwaresResponse = models.DeleteMalwaresResponse;
const ChargePrepaid = models.ChargePrepaid;
const DescribeWeeklyReportNonlocalLoginPlacesRequest = models.DescribeWeeklyReportNonlocalLoginPlacesRequest;
const SeparateMalwaresResponse = models.SeparateMalwaresResponse;
const ProcessStatistics = models.ProcessStatistics;
const Process = models.Process;
const DescribeTagsRequest = models.DescribeTagsRequest;
const DescribeVulScanResultRequest = models.DescribeVulScanResultRequest;
const DescribePrivilegeEventsRequest = models.DescribePrivilegeEventsRequest;
const DescribeWeeklyReportMalwaresResponse = models.DescribeWeeklyReportMalwaresResponse;
const DescribeSecurityDynamicsRequest = models.DescribeSecurityDynamicsRequest;
const ExportBashEventsResponse = models.ExportBashEventsResponse;
const ImpactedHost = models.ImpactedHost;
const DescribeReverseShellRulesResponse = models.DescribeReverseShellRulesResponse;
const DescribeComponentInfoRequest = models.DescribeComponentInfoRequest;
const DeleteNonlocalLoginPlacesRequest = models.DeleteNonlocalLoginPlacesRequest;
const EditPrivilegeRuleRequest = models.EditPrivilegeRuleRequest;
const ExportMaliciousRequestsRequest = models.ExportMaliciousRequestsRequest;
const AccountStatistics = models.AccountStatistics;
const DescribeMachinesResponse = models.DescribeMachinesResponse;
const CreateUsualLoginPlacesResponse = models.CreateUsualLoginPlacesResponse;
const DescribePrivilegeRulesResponse = models.DescribePrivilegeRulesResponse;
const ModifyProVersionRenewFlagResponse = models.ModifyProVersionRenewFlagResponse;
const Machine = models.Machine;
const TrustMalwaresRequest = models.TrustMalwaresRequest;
const Malware = models.Malware;
const DescribeWeeklyReportVulsResponse = models.DescribeWeeklyReportVulsResponse;
const WeeklyReportBruteAttack = models.WeeklyReportBruteAttack;
const DefendAttackLog = models.DefendAttackLog;
const PrivilegeRule = models.PrivilegeRule;
const HistoryAccount = models.HistoryAccount;
const ModifyProVersionRenewFlagRequest = models.ModifyProVersionRenewFlagRequest;
const TrustMaliciousRequestResponse = models.TrustMaliciousRequestResponse;
const DescribeUsualLoginPlacesRequest = models.DescribeUsualLoginPlacesRequest;
const Component = models.Component;
const DescribeVulsRequest = models.DescribeVulsRequest;
const DescribeAgentVulsResponse = models.DescribeAgentVulsResponse;
const SwitchBashRulesRequest = models.SwitchBashRulesRequest;
const DescribeProcessStatisticsRequest = models.DescribeProcessStatisticsRequest;
const DeleteMachineTagResponse = models.DeleteMachineTagResponse;
const DescribeHistoryAccountsRequest = models.DescribeHistoryAccountsRequest;
const CloseProVersionRequest = models.CloseProVersionRequest;
const DeleteBashRulesResponse = models.DeleteBashRulesResponse;
const IgnoreImpactedHostsResponse = models.IgnoreImpactedHostsResponse;
const DeleteBashEventsRequest = models.DeleteBashEventsRequest;
const DescribeComponentsResponse = models.DescribeComponentsResponse;
const Tag = models.Tag;
const RescanImpactedHostResponse = models.RescanImpactedHostResponse;
const SecurityTrend = models.SecurityTrend;
const Vul = models.Vul;
const AddMachineTagRequest = models.AddMachineTagRequest;
const DescribeWeeklyReportsResponse = models.DescribeWeeklyReportsResponse;
const DeleteReverseShellEventsRequest = models.DeleteReverseShellEventsRequest;
const ModifyAutoOpenProVersionConfigResponse = models.ModifyAutoOpenProVersionConfigResponse;
const ExportReverseShellEventsRequest = models.ExportReverseShellEventsRequest;
const DescribeVulsResponse = models.DescribeVulsResponse;
const RecoverMalwaresResponse = models.RecoverMalwaresResponse;
const EditTagsResponse = models.EditTagsResponse;
const IgnoreImpactedHostsRequest = models.IgnoreImpactedHostsRequest;
const DescribeAlarmAttributeRequest = models.DescribeAlarmAttributeRequest;
const DescribeMalwaresRequest = models.DescribeMalwaresRequest;
const DeleteBruteAttacksResponse = models.DeleteBruteAttacksResponse;
const DeleteMaliciousRequestsRequest = models.DeleteMaliciousRequestsRequest;
const DescribeMachinesRequest = models.DescribeMachinesRequest;
const ModifyAlarmAttributeResponse = models.ModifyAlarmAttributeResponse;
const BashEvent = models.BashEvent;
const DeleteMalwaresRequest = models.DeleteMalwaresRequest;
const DescribeMalwaresResponse = models.DescribeMalwaresResponse;
const DeletePrivilegeRulesRequest = models.DeletePrivilegeRulesRequest;


/**
 * yunjing client
 * @class
 */
class YunjingClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("yunjing.tencentcloudapi.com", "2018-02-28", credential, region, profile);
    }
    
    /**
     * 删除标签
     * @param {DeleteTagsRequest} req
     * @param {function(string, DeleteTagsResponse):void} cb
     * @public
     */
    DeleteTags(req, cb) {
        let resp = new DeleteTagsResponse();
        this.request("DeleteTags", req, resp, cb);
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
     * 删除服务器关联的标签
     * @param {DeleteMachineTagRequest} req
     * @param {function(string, DeleteMachineTagResponse):void} cb
     * @public
     */
    DeleteMachineTag(req, cb) {
        let resp = new DeleteMachineTagResponse();
        this.request("DeleteMachineTag", req, resp, cb);
    }

    /**
     * 按分页形式展示网络攻击日志列表
     * @param {DescribeAttackLogsRequest} req
     * @param {function(string, DescribeAttackLogsResponse):void} cb
     * @public
     */
    DescribeAttackLogs(req, cb) {
        let resp = new DescribeAttackLogsResponse();
        this.request("DescribeAttackLogs", req, resp, cb);
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
     * 新增或修改高危命令规则
     * @param {EditBashRuleRequest} req
     * @param {function(string, EditBashRuleResponse):void} cb
     * @public
     */
    EditBashRule(req, cb) {
        let resp = new EditBashRuleResponse();
        this.request("EditBashRule", req, resp, cb);
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
     * 获取高危命令规则列表
     * @param {DescribeBashRulesRequest} req
     * @param {function(string, DescribeBashRulesResponse):void} cb
     * @public
     */
    DescribeBashRules(req, cb) {
        let resp = new DescribeBashRulesResponse();
        this.request("DescribeBashRules", req, resp, cb);
    }

    /**
     * 根据Ids删除本地提权
     * @param {DeletePrivilegeEventsRequest} req
     * @param {function(string, DeletePrivilegeEventsResponse):void} cb
     * @public
     */
    DeletePrivilegeEvents(req, cb) {
        let resp = new DeletePrivilegeEventsResponse();
        this.request("DeletePrivilegeEvents", req, resp, cb);
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
     * 导出网络攻击日志
     * @param {ExportAttackLogsRequest} req
     * @param {function(string, ExportAttackLogsResponse):void} cb
     * @public
     */
    ExportAttackLogs(req, cb) {
        let resp = new ExportAttackLogsResponse();
        this.request("ExportAttackLogs", req, resp, cb);
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
     * 根据Ids删除高危命令事件
     * @param {DeleteBashEventsRequest} req
     * @param {function(string, DeleteBashEventsResponse):void} cb
     * @public
     */
    DeleteBashEvents(req, cb) {
        let resp = new DeleteBashEventsResponse();
        this.request("DeleteBashEvents", req, resp, cb);
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
     * 获取反弹Shell规则列表
     * @param {DescribeReverseShellRulesRequest} req
     * @param {function(string, DescribeReverseShellRulesResponse):void} cb
     * @public
     */
    DescribeReverseShellRules(req, cb) {
        let resp = new DescribeReverseShellRulesResponse();
        this.request("DescribeReverseShellRules", req, resp, cb);
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
     * 删除反弹Shell规则
     * @param {DeleteReverseShellRulesRequest} req
     * @param {function(string, DeleteReverseShellRulesResponse):void} cb
     * @public
     */
    DeleteReverseShellRules(req, cb) {
        let resp = new DeleteReverseShellRulesResponse();
        this.request("DeleteReverseShellRules", req, resp, cb);
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
     * 导出高危命令事件
     * @param {ExportBashEventsRequest} req
     * @param {function(string, ExportBashEventsResponse):void} cb
     * @public
     */
    ExportBashEvents(req, cb) {
        let resp = new ExportBashEventsResponse();
        this.request("ExportBashEvents", req, resp, cb);
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
     * 编辑反弹Shell规则
     * @param {EditReverseShellRuleRequest} req
     * @param {function(string, EditReverseShellRuleResponse):void} cb
     * @public
     */
    EditReverseShellRule(req, cb) {
        let resp = new EditReverseShellRuleResponse();
        this.request("EditReverseShellRule", req, resp, cb);
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
     * 本接口（DescribeMalwares）用于获取木马事件列表。
     * @param {DescribeMalwaresRequest} req
     * @param {function(string, DescribeMalwaresResponse):void} cb
     * @public
     */
    DescribeMalwares(req, cb) {
        let resp = new DescribeMalwaresResponse();
        this.request("DescribeMalwares", req, resp, cb);
    }

    /**
     * 编辑白名单规则
     * @param {ModifyLoginWhiteListRequest} req
     * @param {function(string, ModifyLoginWhiteListResponse):void} cb
     * @public
     */
    ModifyLoginWhiteList(req, cb) {
        let resp = new ModifyLoginWhiteListResponse();
        this.request("ModifyLoginWhiteList", req, resp, cb);
    }

    /**
     * 获取本地提权规则列表
     * @param {DescribePrivilegeRulesRequest} req
     * @param {function(string, DescribePrivilegeRulesResponse):void} cb
     * @public
     */
    DescribePrivilegeRules(req, cb) {
        let resp = new DescribePrivilegeRulesResponse();
        this.request("DescribePrivilegeRules", req, resp, cb);
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
     * 获取指定标签关联的服务器信息
     * @param {DescribeTagMachinesRequest} req
     * @param {function(string, DescribeTagMachinesResponse):void} cb
     * @public
     */
    DescribeTagMachines(req, cb) {
        let resp = new DescribeTagMachinesResponse();
        this.request("DescribeTagMachines", req, resp, cb);
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
     * 导出本地提权事件
     * @param {ExportPrivilegeEventsRequest} req
     * @param {function(string, ExportPrivilegeEventsResponse):void} cb
     * @public
     */
    ExportPrivilegeEvents(req, cb) {
        let resp = new ExportPrivilegeEventsResponse();
        this.request("ExportPrivilegeEvents", req, resp, cb);
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
     * 本接口 (DescribeOpenPortTaskStatus) 用于获取实时拉取端口任务状态。
     * @param {DescribeOpenPortTaskStatusRequest} req
     * @param {function(string, DescribeOpenPortTaskStatusResponse):void} cb
     * @public
     */
    DescribeOpenPortTaskStatus(req, cb) {
        let resp = new DescribeOpenPortTaskStatusResponse();
        this.request("DescribeOpenPortTaskStatus", req, resp, cb);
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
     * 根据Ids删除反弹Shell事件
     * @param {DeleteReverseShellEventsRequest} req
     * @param {function(string, DeleteReverseShellEventsResponse):void} cb
     * @public
     */
    DeleteReverseShellEvents(req, cb) {
        let resp = new DeleteReverseShellEventsResponse();
        this.request("DeleteReverseShellEvents", req, resp, cb);
    }

    /**
     * 删除本地提权规则
     * @param {DeletePrivilegeRulesRequest} req
     * @param {function(string, DeletePrivilegeRulesResponse):void} cb
     * @public
     */
    DeletePrivilegeRules(req, cb) {
        let resp = new DeletePrivilegeRulesResponse();
        this.request("DeletePrivilegeRules", req, resp, cb);
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
     * 删除白名单规则
     * @param {DeleteLoginWhiteListRequest} req
     * @param {function(string, DeleteLoginWhiteListResponse):void} cb
     * @public
     */
    DeleteLoginWhiteList(req, cb) {
        let resp = new DeleteLoginWhiteListResponse();
        this.request("DeleteLoginWhiteList", req, resp, cb);
    }

    /**
     * 本接口 (CreateOpenPortTask) 用于创建实时获取端口任务。
     * @param {CreateOpenPortTaskRequest} req
     * @param {function(string, CreateOpenPortTaskResponse):void} cb
     * @public
     */
    CreateOpenPortTask(req, cb) {
        let resp = new CreateOpenPortTaskResponse();
        this.request("CreateOpenPortTask", req, resp, cb);
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
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     * @param {ExportBruteAttacksRequest} req
     * @param {function(string, ExportBruteAttacksResponse):void} cb
     * @public
     */
    ExportBruteAttacks(req, cb) {
        let resp = new ExportBruteAttacksResponse();
        this.request("ExportBruteAttacks", req, resp, cb);
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
     * 切换高危命令规则状态
     * @param {SwitchBashRulesRequest} req
     * @param {function(string, SwitchBashRulesResponse):void} cb
     * @public
     */
    SwitchBashRules(req, cb) {
        let resp = new SwitchBashRulesResponse();
        this.request("SwitchBashRules", req, resp, cb);
    }

    /**
     * 新增或修改本地提权规则
     * @param {EditPrivilegeRuleRequest} req
     * @param {function(string, EditPrivilegeRuleResponse):void} cb
     * @public
     */
    EditPrivilegeRule(req, cb) {
        let resp = new EditPrivilegeRuleResponse();
        this.request("EditPrivilegeRule", req, resp, cb);
    }

    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     * @param {ExportMalwaresRequest} req
     * @param {function(string, ExportMalwaresResponse):void} cb
     * @public
     */
    ExportMalwares(req, cb) {
        let resp = new ExportMalwaresResponse();
        this.request("ExportMalwares", req, resp, cb);
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
     * 增加机器关联标签
     * @param {AddMachineTagRequest} req
     * @param {function(string, AddMachineTagResponse):void} cb
     * @public
     */
    AddMachineTag(req, cb) {
        let resp = new AddMachineTagResponse();
        this.request("AddMachineTag", req, resp, cb);
    }

    /**
     * 新增或编辑标签
     * @param {EditTagsRequest} req
     * @param {function(string, EditTagsResponse):void} cb
     * @public
     */
    EditTags(req, cb) {
        let resp = new EditTagsResponse();
        this.request("EditTags", req, resp, cb);
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
     * 本接口（AddLoginWhiteList）用于添加白名单规则
     * @param {AddLoginWhiteListRequest} req
     * @param {function(string, AddLoginWhiteListResponse):void} cb
     * @public
     */
    AddLoginWhiteList(req, cb) {
        let resp = new AddLoginWhiteListResponse();
        this.request("AddLoginWhiteList", req, resp, cb);
    }

    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     * @param {ExportNonlocalLoginPlacesRequest} req
     * @param {function(string, ExportNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    ExportNonlocalLoginPlaces(req, cb) {
        let resp = new ExportNonlocalLoginPlacesResponse();
        this.request("ExportNonlocalLoginPlaces", req, resp, cb);
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
     * 删除高危命令规则
     * @param {DeleteBashRulesRequest} req
     * @param {function(string, DeleteBashRulesResponse):void} cb
     * @public
     */
    DeleteBashRules(req, cb) {
        let resp = new DeleteBashRulesResponse();
        this.request("DeleteBashRules", req, resp, cb);
    }

    /**
     * 获取反弹Shell列表
     * @param {DescribeReverseShellEventsRequest} req
     * @param {function(string, DescribeReverseShellEventsResponse):void} cb
     * @public
     */
    DescribeReverseShellEvents(req, cb) {
        let resp = new DescribeReverseShellEventsResponse();
        this.request("DescribeReverseShellEvents", req, resp, cb);
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
     * 本接口 (DescribeAgentVuls) 用于获取单台主机的漏洞列表。
     * @param {DescribeAgentVulsRequest} req
     * @param {function(string, DescribeAgentVulsResponse):void} cb
     * @public
     */
    DescribeAgentVuls(req, cb) {
        let resp = new DescribeAgentVulsResponse();
        this.request("DescribeAgentVuls", req, resp, cb);
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
     * 获取本地提权事件列表
     * @param {DescribePrivilegeEventsRequest} req
     * @param {function(string, DescribePrivilegeEventsResponse):void} cb
     * @public
     */
    DescribePrivilegeEvents(req, cb) {
        let resp = new DescribePrivilegeEventsResponse();
        this.request("DescribePrivilegeEvents", req, resp, cb);
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
     * 获取异地登录白名单列表
     * @param {DescribeLoginWhiteListRequest} req
     * @param {function(string, DescribeLoginWhiteListResponse):void} cb
     * @public
     */
    DescribeLoginWhiteList(req, cb) {
        let resp = new DescribeLoginWhiteListResponse();
        this.request("DescribeLoginWhiteList", req, resp, cb);
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
     * 设置高危命令事件状态
     * @param {SetBashEventsStatusRequest} req
     * @param {function(string, SetBashEventsStatusResponse):void} cb
     * @public
     */
    SetBashEventsStatus(req, cb) {
        let resp = new SetBashEventsStatusResponse();
        this.request("SetBashEventsStatus", req, resp, cb);
    }

    /**
     * 导出反弹Shell事件
     * @param {ExportReverseShellEventsRequest} req
     * @param {function(string, ExportReverseShellEventsResponse):void} cb
     * @public
     */
    ExportReverseShellEvents(req, cb) {
        let resp = new ExportReverseShellEventsResponse();
        this.request("ExportReverseShellEvents", req, resp, cb);
    }

    /**
     * 删除网络攻击日志
     * @param {DeleteAttackLogsRequest} req
     * @param {function(string, DeleteAttackLogsResponse):void} cb
     * @public
     */
    DeleteAttackLogs(req, cb) {
        let resp = new DeleteAttackLogsResponse();
        this.request("DeleteAttackLogs", req, resp, cb);
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
     * 本接口 (RescanImpactedHost) 用于漏洞重新检测。
     * @param {RescanImpactedHostRequest} req
     * @param {function(string, RescanImpactedHostResponse):void} cb
     * @public
     */
    RescanImpactedHost(req, cb) {
        let resp = new RescanImpactedHostResponse();
        this.request("RescanImpactedHost", req, resp, cb);
    }

    /**
     * 获取所有主机标签
     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        let resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
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
     * 网络攻击日志详情
     * @param {DescribeAttackLogInfoRequest} req
     * @param {function(string, DescribeAttackLogInfoResponse):void} cb
     * @public
     */
    DescribeAttackLogInfo(req, cb) {
        let resp = new DescribeAttackLogInfoResponse();
        this.request("DescribeAttackLogInfo", req, resp, cb);
    }

    /**
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     * @param {IgnoreImpactedHostsRequest} req
     * @param {function(string, IgnoreImpactedHostsResponse):void} cb
     * @public
     */
    IgnoreImpactedHosts(req, cb) {
        let resp = new IgnoreImpactedHostsResponse();
        this.request("IgnoreImpactedHosts", req, resp, cb);
    }

    /**
     * 获取高危命令列表
     * @param {DescribeBashEventsRequest} req
     * @param {function(string, DescribeBashEventsResponse):void} cb
     * @public
     */
    DescribeBashEvents(req, cb) {
        let resp = new DescribeBashEventsResponse();
        this.request("DescribeBashEvents", req, resp, cb);
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
     * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
     * @param {InquiryPriceOpenProVersionPrepaidRequest} req
     * @param {function(string, InquiryPriceOpenProVersionPrepaidResponse):void} cb
     * @public
     */
    InquiryPriceOpenProVersionPrepaid(req, cb) {
        let resp = new InquiryPriceOpenProVersionPrepaidResponse();
        this.request("InquiryPriceOpenProVersionPrepaid", req, resp, cb);
    }


}
module.exports = YunjingClient;
