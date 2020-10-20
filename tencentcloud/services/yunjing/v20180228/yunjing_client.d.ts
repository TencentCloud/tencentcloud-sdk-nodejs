import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ExportBashEventsRequest, ModifyAutoOpenProVersionConfigRequest, DescribeProcessTaskStatusResponse, ExportReverseShellEventsResponse, DescribeBashRulesRequest, ExportPrivilegeEventsResponse, DescribeAlarmAttributeResponse, DescribeWeeklyReportBruteAttacksResponse, DescribeAgentVulsRequest, DescribeTagsRequest, AddMachineTagResponse, DescribeReverseShellRulesRequest, SetBashEventsStatusRequest, DescribeAccountsRequest, DescribeReverseShellEventsRequest, DescribeWeeklyReportBruteAttacksRequest, CreateUsualLoginPlacesRequest, DescribeProcessTaskStatusRequest, DescribeVulScanResultResponse, ModifyAlarmAttributeRequest, DescribeAttackLogsRequest, InquiryPriceOpenProVersionPrepaidRequest, ExportMalwaresRequest, DescribeProcessesResponse, DeleteBashEventsResponse, ExportPrivilegeEventsRequest, CreateBaselineStrategyRequest, DescribeSecurityTrendsRequest, DescribeReverseShellEventsResponse, DescribePrivilegeRulesRequest, DescribeOpenPortsRequest, DescribeImpactedHostsRequest, DescribeMaliciousRequestsResponse, CreateProcessTaskResponse, RenewProVersionRequest, DescribeComponentsRequest, DescribeNonlocalLoginPlacesRequest, DeleteMachineTagRequest, CreateBaselineStrategyResponse, EditPrivilegeRuleResponse, DescribeHistoryAccountsResponse, UntrustMalwaresRequest, ExportAttackLogsResponse, DescribeAccountsResponse, DescribeLoginWhiteListRequest, UntrustMaliciousRequestRequest, ExportNonlocalLoginPlacesRequest, DescribeComponentInfoResponse, DescribeAccountStatisticsResponse, OpenProVersionPrepaidRequest, ModifyLoginWhiteListResponse, DescribeTagsResponse, DescribeProVersionInfoRequest, CreateProcessTaskRequest, DeleteMaliciousRequestsResponse, ExportBruteAttacksResponse, EditReverseShellRuleResponse, ExportBruteAttacksRequest, DeleteMachineResponse, DeleteLoginWhiteListRequest, DescribeAttackLogInfoResponse, DescribePrivilegeEventsResponse, DescribeOverviewStatisticsResponse, RecoverMalwaresRequest, TrustMalwaresResponse, DescribeWeeklyReportInfoRequest, EditTagsRequest, AddLoginWhiteListRequest, DeleteReverseShellRulesRequest, DescribeWeeklyReportsRequest, DescribeBashRulesResponse, DescribeImpactedHostsResponse, RescanImpactedHostRequest, DescribeBashEventsResponse, ModifyLoginWhiteListRequest, DescribeBashEventsRequest, DeleteTagsRequest, DescribeOpenPortStatisticsRequest, ExportAttackLogsRequest, DeleteMachineRequest, DescribeVulInfoRequest, UntrustMaliciousRequestResponse, DescribeComponentStatisticsResponse, SwitchBashRulesResponse, DeleteUsualLoginPlacesResponse, DeleteNonlocalLoginPlacesResponse, DescribeNonlocalLoginPlacesResponse, DeleteReverseShellRulesResponse, ExportMalwaresResponse, UntrustMalwaresResponse, DeletePrivilegeRulesResponse, CreateOpenPortTaskResponse, EditBashRuleRequest, DeletePrivilegeEventsResponse, InquiryPriceOpenProVersionPrepaidResponse, CloseProVersionRequest, SetBashEventsStatusResponse, DescribeUsualLoginPlacesResponse, DescribeProcessStatisticsResponse, MisAlarmNonlocalLoginPlacesRequest, TrustMaliciousRequestRequest, ExportMaliciousRequestsResponse, DescribeAttackLogInfoRequest, DescribeWeeklyReportMalwaresRequest, DescribeBruteAttacksResponse, ExportNonlocalLoginPlacesResponse, DescribeComponentStatisticsRequest, DescribeOverviewStatisticsRequest, DescribeOpenPortStatisticsResponse, DeleteAttackLogsResponse, DescribeLoginWhiteListResponse, DescribeVulInfoResponse, DescribeTagMachinesRequest, EditReverseShellRuleRequest, DescribeProVersionInfoResponse, DeleteTagsResponse, DeleteBruteAttacksRequest, DescribeWeeklyReportVulsRequest, AddLoginWhiteListResponse, DescribeOpenPortTaskStatusResponse, DescribeWeeklyReportNonlocalLoginPlacesResponse, SeparateMalwaresRequest, RenewProVersionResponse, DescribeTagMachinesResponse, DescribeSecurityTrendsResponse, CreateOpenPortTaskRequest, DescribeWeeklyReportInfoResponse, DescribeSecurityDynamicsResponse, DeleteReverseShellEventsResponse, DeletePrivilegeEventsRequest, DeleteBashRulesRequest, CloseProVersionResponse, DeleteAttackLogsRequest, DescribeOpenPortsResponse, EditBashRuleResponse, OpenProVersionResponse, DescribeMachineInfoRequest, DescribeMaliciousRequestsRequest, DescribeProcessesRequest, DeleteUsualLoginPlacesRequest, DescribeOpenPortTaskStatusRequest, DeleteLoginWhiteListResponse, DescribeAccountStatisticsRequest, DescribeAttackLogsResponse, OpenProVersionPrepaidResponse, MisAlarmNonlocalLoginPlacesResponse, DeleteMalwaresResponse, DescribeWeeklyReportNonlocalLoginPlacesRequest, SeparateMalwaresResponse, DescribeBruteAttacksRequest, DescribeVulScanResultRequest, DescribePrivilegeEventsRequest, DescribeWeeklyReportMalwaresResponse, DescribeSecurityDynamicsRequest, ExportBashEventsResponse, DescribeReverseShellRulesResponse, DescribeComponentInfoRequest, DeleteNonlocalLoginPlacesRequest, EditPrivilegeRuleRequest, ExportMaliciousRequestsRequest, DescribeMachinesResponse, CreateUsualLoginPlacesResponse, DescribePrivilegeRulesResponse, ModifyProVersionRenewFlagResponse, TrustMalwaresRequest, DescribeWeeklyReportVulsResponse, ModifyProVersionRenewFlagRequest, TrustMaliciousRequestResponse, DescribeUsualLoginPlacesRequest, DescribeVulsRequest, DescribeAgentVulsResponse, SwitchBashRulesRequest, DescribeProcessStatisticsRequest, DeleteMachineTagResponse, DescribeHistoryAccountsRequest, DescribeMachineInfoResponse, OpenProVersionRequest, DeleteBashRulesResponse, IgnoreImpactedHostsResponse, DeleteBashEventsRequest, DescribeComponentsResponse, RescanImpactedHostResponse, AddMachineTagRequest, DescribeWeeklyReportsResponse, DeleteReverseShellEventsRequest, ModifyAutoOpenProVersionConfigResponse, ExportReverseShellEventsRequest, DescribeVulsResponse, RecoverMalwaresResponse, EditTagsResponse, IgnoreImpactedHostsRequest, DescribeAlarmAttributeRequest, DescribeMalwaresRequest, DeleteBruteAttacksResponse, DeleteMaliciousRequestsRequest, DescribeMachinesRequest, ModifyAlarmAttributeResponse, DeleteMalwaresRequest, DescribeMalwaresResponse, DeletePrivilegeRulesRequest } from "./yunjing_models";
/**
 * yunjing client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除标签
     */
    DeleteTags(req: DeleteTagsRequest, cb?: (error: string, rep: DeleteTagsResponse) => void): Promise<DeleteTagsResponse>;
    /**
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     */
    TrustMalwares(req: TrustMalwaresRequest, cb?: (error: string, rep: TrustMalwaresResponse) => void): Promise<TrustMalwaresResponse>;
    /**
     * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
     */
    DescribeComponentStatistics(req: DescribeComponentStatisticsRequest, cb?: (error: string, rep: DescribeComponentStatisticsResponse) => void): Promise<DescribeComponentStatisticsResponse>;
    /**
     * 删除服务器关联的标签
     */
    DeleteMachineTag(req: DeleteMachineTagRequest, cb?: (error: string, rep: DeleteMachineTagResponse) => void): Promise<DeleteMachineTagResponse>;
    /**
     * 按分页形式展示网络攻击日志列表
     */
    DescribeAttackLogs(req: DescribeAttackLogsRequest, cb?: (error: string, rep: DescribeAttackLogsResponse) => void): Promise<DescribeAttackLogsResponse>;
    /**
     * 本接口 (OpenProVersion) 用于开通专业版。
     */
    OpenProVersion(req: OpenProVersionRequest, cb?: (error: string, rep: OpenProVersionResponse) => void): Promise<OpenProVersionResponse>;
    /**
     * 本接口 (DescribeWeeklyReportMalwares) 用于获取专业周报木马数据。
     */
    DescribeWeeklyReportMalwares(req: DescribeWeeklyReportMalwaresRequest, cb?: (error: string, rep: DescribeWeeklyReportMalwaresResponse) => void): Promise<DescribeWeeklyReportMalwaresResponse>;
    /**
     * 本接口 (DescribeVulInfo) 用于获取漏洞详情。
     */
    DescribeVulInfo(req: DescribeVulInfoRequest, cb?: (error: string, rep: DescribeVulInfoResponse) => void): Promise<DescribeVulInfoResponse>;
    /**
     * 新增或修改高危命令规则
     */
    EditBashRule(req: EditBashRuleRequest, cb?: (error: string, rep: EditBashRuleResponse) => void): Promise<EditBashRuleResponse>;
    /**
     * 本接口（DeleteUsualLoginPlaces）用于删除常用登录地。
     */
    DeleteUsualLoginPlaces(req: DeleteUsualLoginPlacesRequest, cb?: (error: string, rep: DeleteUsualLoginPlacesResponse) => void): Promise<DeleteUsualLoginPlacesResponse>;
    /**
     * 本接口 (DescribeVuls) 用于获取漏洞列表数据。
     */
    DescribeVuls(req: DescribeVulsRequest, cb?: (error: string, rep: DescribeVulsResponse) => void): Promise<DescribeVulsResponse>;
    /**
     * 本接口{MisAlarmNonlocalLoginPlaces}将设置当前地点为常用登录地。
     */
    MisAlarmNonlocalLoginPlaces(req: MisAlarmNonlocalLoginPlacesRequest, cb?: (error: string, rep: MisAlarmNonlocalLoginPlacesResponse) => void): Promise<MisAlarmNonlocalLoginPlacesResponse>;
    /**
     * 根据策略信息创建基线策略
     */
    CreateBaselineStrategy(req: CreateBaselineStrategyRequest, cb?: (error: string, rep: CreateBaselineStrategyResponse) => void): Promise<CreateBaselineStrategyResponse>;
    /**
     * 获取高危命令规则列表
     */
    DescribeBashRules(req: DescribeBashRulesRequest, cb?: (error: string, rep: DescribeBashRulesResponse) => void): Promise<DescribeBashRulesResponse>;
    /**
     * 根据Ids删除本地提权
     */
    DeletePrivilegeEvents(req: DeletePrivilegeEventsRequest, cb?: (error: string, rep: DeletePrivilegeEventsResponse) => void): Promise<DeletePrivilegeEventsResponse>;
    /**
     * 本接口 (RenewProVersion) 用于续费专业版(包年包月)。
     */
    RenewProVersion(req: RenewProVersionRequest, cb?: (error: string, rep: RenewProVersionResponse) => void): Promise<RenewProVersionResponse>;
    /**
     * 导出网络攻击日志
     */
    ExportAttackLogs(req?: ExportAttackLogsRequest, cb?: (error: string, rep: ExportAttackLogsResponse) => void): Promise<ExportAttackLogsResponse>;
    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     */
    DescribeUsualLoginPlaces(req: DescribeUsualLoginPlacesRequest, cb?: (error: string, rep: DescribeUsualLoginPlacesResponse) => void): Promise<DescribeUsualLoginPlacesResponse>;
    /**
     * 根据Ids删除高危命令事件
     */
    DeleteBashEvents(req: DeleteBashEventsRequest, cb?: (error: string, rep: DeleteBashEventsResponse) => void): Promise<DeleteBashEventsResponse>;
    /**
     * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
     */
    DeleteMaliciousRequests(req: DeleteMaliciousRequestsRequest, cb?: (error: string, rep: DeleteMaliciousRequestsResponse) => void): Promise<DeleteMaliciousRequestsResponse>;
    /**
     * 获取反弹Shell规则列表
     */
    DescribeReverseShellRules(req: DescribeReverseShellRulesRequest, cb?: (error: string, rep: DescribeReverseShellRulesResponse) => void): Promise<DescribeReverseShellRulesResponse>;
    /**
     * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
     */
    RecoverMalwares(req: RecoverMalwaresRequest, cb?: (error: string, rep: RecoverMalwaresResponse) => void): Promise<RecoverMalwaresResponse>;
    /**
     * 删除反弹Shell规则
     */
    DeleteReverseShellRules(req: DeleteReverseShellRulesRequest, cb?: (error: string, rep: DeleteReverseShellRulesResponse) => void): Promise<DeleteReverseShellRulesResponse>;
    /**
     * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
     */
    DeleteBruteAttacks(req: DeleteBruteAttacksRequest, cb?: (error: string, rep: DeleteBruteAttacksResponse) => void): Promise<DeleteBruteAttacksResponse>;
    /**
     * 导出高危命令事件
     */
    ExportBashEvents(req?: ExportBashEventsRequest, cb?: (error: string, rep: ExportBashEventsResponse) => void): Promise<ExportBashEventsResponse>;
    /**
     * 本接口 (CreateProcessTask) 用于创建实时拉取进程任务。
     */
    CreateProcessTask(req: CreateProcessTaskRequest, cb?: (error: string, rep: CreateProcessTaskResponse) => void): Promise<CreateProcessTaskResponse>;
    /**
     * 编辑反弹Shell规则
     */
    EditReverseShellRule(req: EditReverseShellRuleRequest, cb?: (error: string, rep: EditReverseShellRuleResponse) => void): Promise<EditReverseShellRuleResponse>;
    /**
     * 本接口 (DescribeProcesses) 用于获取进程列表数据。
     */
    DescribeProcesses(req: DescribeProcessesRequest, cb?: (error: string, rep: DescribeProcessesResponse) => void): Promise<DescribeProcessesResponse>;
    /**
     * 本接口（DescribeMalwares）用于获取木马事件列表。
     */
    DescribeMalwares(req: DescribeMalwaresRequest, cb?: (error: string, rep: DescribeMalwaresResponse) => void): Promise<DescribeMalwaresResponse>;
    /**
     * 编辑白名单规则
     */
    ModifyLoginWhiteList(req: ModifyLoginWhiteListRequest, cb?: (error: string, rep: ModifyLoginWhiteListResponse) => void): Promise<ModifyLoginWhiteListResponse>;
    /**
     * 获取本地提权规则列表
     */
    DescribePrivilegeRules(req: DescribePrivilegeRulesRequest, cb?: (error: string, rep: DescribePrivilegeRulesResponse) => void): Promise<DescribePrivilegeRulesResponse>;
    /**
     * 本接口 (UntrustMaliciousRequest) 用于取消信任恶意请求。
     */
    UntrustMaliciousRequest(req: UntrustMaliciousRequestRequest, cb?: (error: string, rep: UntrustMaliciousRequestResponse) => void): Promise<UntrustMaliciousRequestResponse>;
    /**
     * 本接口 (DescribeImpactedHosts) 用于获取漏洞受影响机器列表。
     */
    DescribeImpactedHosts(req: DescribeImpactedHostsRequest, cb?: (error: string, rep: DescribeImpactedHostsResponse) => void): Promise<DescribeImpactedHostsResponse>;
    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     */
    DeleteNonlocalLoginPlaces(req: DeleteNonlocalLoginPlacesRequest, cb?: (error: string, rep: DeleteNonlocalLoginPlacesResponse) => void): Promise<DeleteNonlocalLoginPlacesResponse>;
    /**
     * 本接口 (DescribeOpenPorts) 用于获取端口列表数据。

     */
    DescribeOpenPorts(req: DescribeOpenPortsRequest, cb?: (error: string, rep: DescribeOpenPortsResponse) => void): Promise<DescribeOpenPortsResponse>;
    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     */
    ExportMaliciousRequests(req?: ExportMaliciousRequestsRequest, cb?: (error: string, rep: ExportMaliciousRequestsResponse) => void): Promise<ExportMaliciousRequestsResponse>;
    /**
     * 获取指定标签关联的服务器信息
     */
    DescribeTagMachines(req: DescribeTagMachinesRequest, cb?: (error: string, rep: DescribeTagMachinesResponse) => void): Promise<DescribeTagMachinesResponse>;
    /**
     * 本接口(DescribeNonlocalLoginPlaces)用于获取异地登录事件。
     */
    DescribeNonlocalLoginPlaces(req: DescribeNonlocalLoginPlacesRequest, cb?: (error: string, rep: DescribeNonlocalLoginPlacesResponse) => void): Promise<DescribeNonlocalLoginPlacesResponse>;
    /**
     * 导出本地提权事件
     */
    ExportPrivilegeEvents(req?: ExportPrivilegeEventsRequest, cb?: (error: string, rep: ExportPrivilegeEventsResponse) => void): Promise<ExportPrivilegeEventsResponse>;
    /**
     * 本接口用于（DescribeOverviewStatistics）获取概览统计数据。
     */
    DescribeOverviewStatistics(req?: DescribeOverviewStatisticsRequest, cb?: (error: string, rep: DescribeOverviewStatisticsResponse) => void): Promise<DescribeOverviewStatisticsResponse>;
    /**
     * 本接口 (DescribeOpenPortTaskStatus) 用于获取实时拉取端口任务状态。
     */
    DescribeOpenPortTaskStatus(req: DescribeOpenPortTaskStatusRequest, cb?: (error: string, rep: DescribeOpenPortTaskStatusResponse) => void): Promise<DescribeOpenPortTaskStatusResponse>;
    /**
     * 本接口 (DescribeSecurityDynamics) 用于获取安全事件消息数据。
     */
    DescribeSecurityDynamics(req: DescribeSecurityDynamicsRequest, cb?: (error: string, rep: DescribeSecurityDynamicsResponse) => void): Promise<DescribeSecurityDynamicsResponse>;
    /**
     * 根据Ids删除反弹Shell事件
     */
    DeleteReverseShellEvents(req: DeleteReverseShellEventsRequest, cb?: (error: string, rep: DeleteReverseShellEventsResponse) => void): Promise<DeleteReverseShellEventsResponse>;
    /**
     * 删除本地提权规则
     */
    DeletePrivilegeRules(req: DeletePrivilegeRulesRequest, cb?: (error: string, rep: DeletePrivilegeRulesResponse) => void): Promise<DeletePrivilegeRulesResponse>;
    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     */
    DeleteMalwares(req: DeleteMalwaresRequest, cb?: (error: string, rep: DeleteMalwaresResponse) => void): Promise<DeleteMalwaresResponse>;
    /**
     * 本接口 (DescribeWeeklyReportNonlocalLoginPlaces) 用于获取专业周报异地登录数据。
     */
    DescribeWeeklyReportNonlocalLoginPlaces(req: DescribeWeeklyReportNonlocalLoginPlacesRequest, cb?: (error: string, rep: DescribeWeeklyReportNonlocalLoginPlacesResponse) => void): Promise<DescribeWeeklyReportNonlocalLoginPlacesResponse>;
    /**
     * 删除白名单规则
     */
    DeleteLoginWhiteList(req: DeleteLoginWhiteListRequest, cb?: (error: string, rep: DeleteLoginWhiteListResponse) => void): Promise<DeleteLoginWhiteListResponse>;
    /**
     * 本接口 (CreateOpenPortTask) 用于创建实时获取端口任务。
     */
    CreateOpenPortTask(req: CreateOpenPortTaskRequest, cb?: (error: string, rep: CreateOpenPortTaskResponse) => void): Promise<CreateOpenPortTaskResponse>;
    /**
     * 本接口 (CloseProVersion) 用于关闭专业版。
     */
    CloseProVersion(req: CloseProVersionRequest, cb?: (error: string, rep: CloseProVersionResponse) => void): Promise<CloseProVersionResponse>;
    /**
     * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
     */
    DescribeAccountStatistics(req: DescribeAccountStatisticsRequest, cb?: (error: string, rep: DescribeAccountStatisticsResponse) => void): Promise<DescribeAccountStatisticsResponse>;
    /**
     * 本接口（ModifyAlarmAttribute）用于修改告警设置。
     */
    ModifyAlarmAttribute(req: ModifyAlarmAttributeRequest, cb?: (error: string, rep: ModifyAlarmAttributeResponse) => void): Promise<ModifyAlarmAttributeResponse>;
    /**
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     */
    DescribeOpenPortStatistics(req: DescribeOpenPortStatisticsRequest, cb?: (error: string, rep: DescribeOpenPortStatisticsResponse) => void): Promise<DescribeOpenPortStatisticsResponse>;
    /**
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     */
    ExportBruteAttacks(req?: ExportBruteAttacksRequest, cb?: (error: string, rep: ExportBruteAttacksResponse) => void): Promise<ExportBruteAttacksResponse>;
    /**
     * 本接口 (TrustMaliciousRequest) 用于恶意请求添加信任。
     */
    TrustMaliciousRequest(req: TrustMaliciousRequestRequest, cb?: (error: string, rep: TrustMaliciousRequestResponse) => void): Promise<TrustMaliciousRequestResponse>;
    /**
     * 切换高危命令规则状态
     */
    SwitchBashRules(req: SwitchBashRulesRequest, cb?: (error: string, rep: SwitchBashRulesResponse) => void): Promise<SwitchBashRulesResponse>;
    /**
     * 新增或修改本地提权规则
     */
    EditPrivilegeRule(req: EditPrivilegeRuleRequest, cb?: (error: string, rep: EditPrivilegeRuleResponse) => void): Promise<EditPrivilegeRuleResponse>;
    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     */
    ExportMalwares(req?: ExportMalwaresRequest, cb?: (error: string, rep: ExportMalwaresResponse) => void): Promise<ExportMalwaresResponse>;
    /**
     * 本接口{DescribeBruteAttacks}用于获取暴力破解事件列表。
     */
    DescribeBruteAttacks(req: DescribeBruteAttacksRequest, cb?: (error: string, rep: DescribeBruteAttacksResponse) => void): Promise<DescribeBruteAttacksResponse>;
    /**
     * 本接口 (OpenProVersionPrepaid) 用于开通专业版(包年包月)。
     */
    OpenProVersionPrepaid(req: OpenProVersionPrepaidRequest, cb?: (error: string, rep: OpenProVersionPrepaidResponse) => void): Promise<OpenProVersionPrepaidResponse>;
    /**
     * 增加机器关联标签
     */
    AddMachineTag(req: AddMachineTagRequest, cb?: (error: string, rep: AddMachineTagResponse) => void): Promise<AddMachineTagResponse>;
    /**
     * 新增或编辑标签
     */
    EditTags(req: EditTagsRequest, cb?: (error: string, rep: EditTagsResponse) => void): Promise<EditTagsResponse>;
    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     */
    SeparateMalwares(req: SeparateMalwaresRequest, cb?: (error: string, rep: SeparateMalwaresResponse) => void): Promise<SeparateMalwaresResponse>;
    /**
     * 本接口（AddLoginWhiteList）用于添加白名单规则
     */
    AddLoginWhiteList(req: AddLoginWhiteListRequest, cb?: (error: string, rep: AddLoginWhiteListResponse) => void): Promise<AddLoginWhiteListResponse>;
    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     */
    ExportNonlocalLoginPlaces(req?: ExportNonlocalLoginPlacesRequest, cb?: (error: string, rep: ExportNonlocalLoginPlacesResponse) => void): Promise<ExportNonlocalLoginPlacesResponse>;
    /**
     * 本接口 (DescribeMaliciousRequests) 用于获取恶意请求数据。
     */
    DescribeMaliciousRequests(req: DescribeMaliciousRequestsRequest, cb?: (error: string, rep: DescribeMaliciousRequestsResponse) => void): Promise<DescribeMaliciousRequestsResponse>;
    /**
     * 删除高危命令规则
     */
    DeleteBashRules(req: DeleteBashRulesRequest, cb?: (error: string, rep: DeleteBashRulesResponse) => void): Promise<DeleteBashRulesResponse>;
    /**
     * 获取反弹Shell列表
     */
    DescribeReverseShellEvents(req: DescribeReverseShellEventsRequest, cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void): Promise<DescribeReverseShellEventsResponse>;
    /**
     * 本接口 (ModifyAutoOpenProVersionConfig) 用于设置新增主机自动开通专业版配置。
     */
    ModifyAutoOpenProVersionConfig(req: ModifyAutoOpenProVersionConfigRequest, cb?: (error: string, rep: ModifyAutoOpenProVersionConfigResponse) => void): Promise<ModifyAutoOpenProVersionConfigResponse>;
    /**
     * 本接口 (DescribeAgentVuls) 用于获取单台主机的漏洞列表。
     */
    DescribeAgentVuls(req: DescribeAgentVulsRequest, cb?: (error: string, rep: DescribeAgentVulsResponse) => void): Promise<DescribeAgentVulsResponse>;
    /**
     * 本接口 (DescribeAccounts) 用于获取帐号列表数据。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 本接口 (DescribeWeeklyReports) 用于获取周报列表数据。
     */
    DescribeWeeklyReports(req: DescribeWeeklyReportsRequest, cb?: (error: string, rep: DescribeWeeklyReportsResponse) => void): Promise<DescribeWeeklyReportsResponse>;
    /**
     * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
     */
    DescribeProVersionInfo(req?: DescribeProVersionInfoRequest, cb?: (error: string, rep: DescribeProVersionInfoResponse) => void): Promise<DescribeProVersionInfoResponse>;
    /**
     * 获取本地提权事件列表
     */
    DescribePrivilegeEvents(req: DescribePrivilegeEventsRequest, cb?: (error: string, rep: DescribePrivilegeEventsResponse) => void): Promise<DescribePrivilegeEventsResponse>;
    /**
     * 本接口（DescribeMachineInfo）用于获取机器详细信息。
     */
    DescribeMachineInfo(req: DescribeMachineInfoRequest, cb?: (error: string, rep: DescribeMachineInfoResponse) => void): Promise<DescribeMachineInfoResponse>;
    /**
     * 本接口 (DescribeAlarmAttribute) 用于获取告警设置。
     */
    DescribeAlarmAttribute(req?: DescribeAlarmAttributeRequest, cb?: (error: string, rep: DescribeAlarmAttributeResponse) => void): Promise<DescribeAlarmAttributeResponse>;
    /**
     * 本接口 (DescribeComponents) 用于获取组件列表数据。
     */
    DescribeComponents(req: DescribeComponentsRequest, cb?: (error: string, rep: DescribeComponentsResponse) => void): Promise<DescribeComponentsResponse>;
    /**
     * 获取异地登录白名单列表
     */
    DescribeLoginWhiteList(req: DescribeLoginWhiteListRequest, cb?: (error: string, rep: DescribeLoginWhiteListResponse) => void): Promise<DescribeLoginWhiteListResponse>;
    /**
     * 本接口 (DescribeVulScanResult) 用于获取漏洞检测结果。

     */
    DescribeVulScanResult(req?: DescribeVulScanResultRequest, cb?: (error: string, rep: DescribeVulScanResultResponse) => void): Promise<DescribeVulScanResultResponse>;
    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     */
    DescribeHistoryAccounts(req: DescribeHistoryAccountsRequest, cb?: (error: string, rep: DescribeHistoryAccountsResponse) => void): Promise<DescribeHistoryAccountsResponse>;
    /**
     * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
     */
    DescribeProcessStatistics(req: DescribeProcessStatisticsRequest, cb?: (error: string, rep: DescribeProcessStatisticsResponse) => void): Promise<DescribeProcessStatisticsResponse>;
    /**
     * 本接口 (DescribeWeeklyReportBruteAttacks) 用于获取专业周报密码破解数据。
     */
    DescribeWeeklyReportBruteAttacks(req: DescribeWeeklyReportBruteAttacksRequest, cb?: (error: string, rep: DescribeWeeklyReportBruteAttacksResponse) => void): Promise<DescribeWeeklyReportBruteAttacksResponse>;
    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     */
    UntrustMalwares(req: UntrustMalwaresRequest, cb?: (error: string, rep: UntrustMalwaresResponse) => void): Promise<UntrustMalwaresResponse>;
    /**
     * 本接口 (DescribeWeeklyReportVuls) 用于专业版周报漏洞数据。

     */
    DescribeWeeklyReportVuls(req: DescribeWeeklyReportVulsRequest, cb?: (error: string, rep: DescribeWeeklyReportVulsResponse) => void): Promise<DescribeWeeklyReportVulsResponse>;
    /**
     * 本接口 (DescribeWeeklyReportInfo) 用于获取专业周报详情数据。
     */
    DescribeWeeklyReportInfo(req: DescribeWeeklyReportInfoRequest, cb?: (error: string, rep: DescribeWeeklyReportInfoResponse) => void): Promise<DescribeWeeklyReportInfoResponse>;
    /**
     * 本接口 (DescribeComponentInfo) 用于获取组件信息数据。
     */
    DescribeComponentInfo(req: DescribeComponentInfoRequest, cb?: (error: string, rep: DescribeComponentInfoResponse) => void): Promise<DescribeComponentInfoResponse>;
    /**
     * 本接口 (ModifyProVersionRenewFlag) 用于修改专业版包年包月续费标识。
     */
    ModifyProVersionRenewFlag(req: ModifyProVersionRenewFlagRequest, cb?: (error: string, rep: ModifyProVersionRenewFlagResponse) => void): Promise<ModifyProVersionRenewFlagResponse>;
    /**
     * 设置高危命令事件状态
     */
    SetBashEventsStatus(req: SetBashEventsStatusRequest, cb?: (error: string, rep: SetBashEventsStatusResponse) => void): Promise<SetBashEventsStatusResponse>;
    /**
     * 导出反弹Shell事件
     */
    ExportReverseShellEvents(req?: ExportReverseShellEventsRequest, cb?: (error: string, rep: ExportReverseShellEventsResponse) => void): Promise<ExportReverseShellEventsResponse>;
    /**
     * 删除网络攻击日志
     */
    DeleteAttackLogs(req: DeleteAttackLogsRequest, cb?: (error: string, rep: DeleteAttackLogsResponse) => void): Promise<DeleteAttackLogsResponse>;
    /**
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     */
    DeleteMachine(req: DeleteMachineRequest, cb?: (error: string, rep: DeleteMachineResponse) => void): Promise<DeleteMachineResponse>;
    /**
     * 本接口 (DescribeProcessTaskStatus) 用于获取实时拉取进程任务状态。
     */
    DescribeProcessTaskStatus(req: DescribeProcessTaskStatusRequest, cb?: (error: string, rep: DescribeProcessTaskStatusResponse) => void): Promise<DescribeProcessTaskStatusResponse>;
    /**
     * 本接口 (RescanImpactedHost) 用于漏洞重新检测。
     */
    RescanImpactedHost(req: RescanImpactedHostRequest, cb?: (error: string, rep: RescanImpactedHostResponse) => void): Promise<RescanImpactedHostResponse>;
    /**
     * 获取所有主机标签
     */
    DescribeTags(req: DescribeTagsRequest, cb?: (error: string, rep: DescribeTagsResponse) => void): Promise<DescribeTagsResponse>;
    /**
     * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
     */
    DescribeSecurityTrends(req: DescribeSecurityTrendsRequest, cb?: (error: string, rep: DescribeSecurityTrendsResponse) => void): Promise<DescribeSecurityTrendsResponse>;
    /**
     * 网络攻击日志详情
     */
    DescribeAttackLogInfo(req: DescribeAttackLogInfoRequest, cb?: (error: string, rep: DescribeAttackLogInfoResponse) => void): Promise<DescribeAttackLogInfoResponse>;
    /**
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     */
    IgnoreImpactedHosts(req: IgnoreImpactedHostsRequest, cb?: (error: string, rep: IgnoreImpactedHostsResponse) => void): Promise<IgnoreImpactedHostsResponse>;
    /**
     * 获取高危命令列表
     */
    DescribeBashEvents(req: DescribeBashEventsRequest, cb?: (error: string, rep: DescribeBashEventsResponse) => void): Promise<DescribeBashEventsResponse>;
    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     */
    DescribeMachines(req: DescribeMachinesRequest, cb?: (error: string, rep: DescribeMachinesResponse) => void): Promise<DescribeMachinesResponse>;
    /**
     * 此接口（CreateUsualLoginPlaces）用于添加常用登录地。
     */
    CreateUsualLoginPlaces(req: CreateUsualLoginPlacesRequest, cb?: (error: string, rep: CreateUsualLoginPlacesResponse) => void): Promise<CreateUsualLoginPlacesResponse>;
    /**
     * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
     */
    InquiryPriceOpenProVersionPrepaid(req: InquiryPriceOpenProVersionPrepaidRequest, cb?: (error: string, rep: InquiryPriceOpenProVersionPrepaidResponse) => void): Promise<InquiryPriceOpenProVersionPrepaidResponse>;
}
