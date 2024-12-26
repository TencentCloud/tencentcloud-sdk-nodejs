import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDbAssetInfoResponse, DeleteRiskScanTaskRequest, DescribeRiskCenterAssetViewWeakPasswordRiskListResponse, DescribeVULRiskAdvanceCFGListResponse, DescribeAssetViewVulRiskListResponse, DescribeOrganizationUserInfoRequest, ModifyUebaRuleSwitchResponse, DescribeSubnetAssetsRequest, DescribeScanReportListRequest, DescribeVULRiskDetailRequest, DescribeClusterAssetsRequest, DescribeTopAttackInfoResponse, DescribeVULRiskDetailResponse, DescribeDomainAssetsRequest, ModifyRiskCenterScanTaskResponse, DescribeRiskCenterAssetViewCFGRiskListRequest, DescribeRiskCenterWebsiteRiskListResponse, ModifyRiskCenterRiskStatusResponse, UpdateAlertStatusListResponse, DeleteDomainAndIpRequest, DescribeNICAssetsRequest, DescribeScanTaskListRequest, DescribeOrganizationInfoRequest, DescribeUebaRuleResponse, ModifyUebaRuleSwitchRequest, DescribeScanReportListResponse, DescribeSearchBugInfoRequest, DescribeOrganizationUserInfoResponse, DescribeListenerListResponse, CreateRiskCenterScanTaskResponse, DescribeSubnetAssetsResponse, DescribeRiskCenterAssetViewPortRiskListRequest, StopRiskCenterTaskResponse, DescribeOrganizationInfoResponse, DescribeVpcAssetsRequest, ModifyRiskCenterRiskStatusRequest, DescribeRiskCenterAssetViewWeakPasswordRiskListRequest, DescribeTopAttackInfoRequest, DescribeCVMAssetsResponse, DescribePublicIpAssetsRequest, DescribeCVMAssetInfoRequest, CreateRiskCenterScanTaskRequest, DescribeRiskCenterAssetViewCFGRiskListResponse, DescribeRiskCenterVULViewVULRiskListResponse, DescribeRiskCenterVULViewVULRiskListRequest, UpdateAlertStatusListRequest, StopRiskCenterTaskRequest, DescribeScanTaskListResponse, DescribeClusterPodAssetsRequest, DescribeCVMAssetInfoResponse, DescribePublicIpAssetsResponse, DescribeVulViewVulRiskListRequest, DescribeTaskLogURLResponse, ModifyOrganizationAccountStatusResponse, DescribeDbAssetInfoRequest, DescribeAssetViewVulRiskListRequest, DescribeUebaRuleRequest, DescribeVulViewVulRiskListResponse, DescribeRiskCenterWebsiteRiskListRequest, DescribeClusterPodAssetsResponse, DescribeCFWAssetStatisticsResponse, DescribeGatewayAssetsResponse, DescribeRiskCenterPortViewPortRiskListRequest, DescribeVpcAssetsResponse, DescribeRiskCenterPortViewPortRiskListResponse, DeleteDomainAndIpResponse, AddNewBindRoleUserResponse, DescribeAlertListResponse, DescribeDbAssetsRequest, DescribeVULRiskAdvanceCFGListRequest, DescribeRiskCenterAssetViewVULRiskListRequest, DescribeAlertListRequest, CreateDomainAndIpRequest, DescribeSearchBugInfoResponse, ModifyOrganizationAccountStatusRequest, DescribeClusterAssetsResponse, DescribeSubUserInfoResponse, DescribeDomainAssetsResponse, DescribeDbAssetsResponse, DescribeNICAssetsResponse, DescribeRiskCenterAssetViewVULRiskListResponse, DescribeCVMAssetsRequest, DescribeRiskCenterServerRiskListRequest, DescribeTaskLogListRequest, ModifyRiskCenterScanTaskRequest, DescribeRiskCenterServerRiskListResponse, DescribeListenerListRequest, DeleteRiskScanTaskResponse, DescribeGatewayAssetsRequest, DescribeCFWAssetStatisticsRequest, CreateDomainAndIpResponse, DescribeTaskLogListResponse, DescribeSubUserInfoRequest, DescribeRiskCenterAssetViewPortRiskListResponse, DescribeTaskLogURLRequest, AddNewBindRoleUserRequest } from "./csip_models";
/**
 * csip client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询用户行为分析策略列表
     */
    DescribeUebaRule(req: DescribeUebaRuleRequest, cb?: (error: string, rep: DescribeUebaRuleResponse) => void): Promise<DescribeUebaRuleResponse>;
    /**
     * 获取任务扫描报告列表
     */
    DescribeTaskLogList(req: DescribeTaskLogListRequest, cb?: (error: string, rep: DescribeTaskLogListResponse) => void): Promise<DescribeTaskLogListResponse>;
    /**
     * 删除域名和ip请求
     */
    DeleteDomainAndIp(req: DeleteDomainAndIpRequest, cb?: (error: string, rep: DeleteDomainAndIpResponse) => void): Promise<DeleteDomainAndIpResponse>;
    /**
     * db资产详情
     */
    DescribeDbAssetInfo(req: DescribeDbAssetInfoRequest, cb?: (error: string, rep: DescribeDbAssetInfoResponse) => void): Promise<DescribeDbAssetInfoResponse>;
    /**
     * 获取网卡列表
     */
    DescribeNICAssets(req: DescribeNICAssetsRequest, cb?: (error: string, rep: DescribeNICAssetsResponse) => void): Promise<DescribeNICAssetsResponse>;
    /**
     * 获取漏洞视角的漏洞风险列表
     */
    DescribeRiskCenterVULViewVULRiskList(req: DescribeRiskCenterVULViewVULRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterVULViewVULRiskListResponse) => void): Promise<DescribeRiskCenterVULViewVULRiskListResponse>;
    /**
     * 域名列表
     */
    DescribeDomainAssets(req: DescribeDomainAssetsRequest, cb?: (error: string, rep: DescribeDomainAssetsResponse) => void): Promise<DescribeDomainAssetsResponse>;
    /**
     * ip公网列表
     */
    DescribePublicIpAssets(req: DescribePublicIpAssetsRequest, cb?: (error: string, rep: DescribePublicIpAssetsResponse) => void): Promise<DescribePublicIpAssetsResponse>;
    /**
     * csip角色授权绑定接口
     */
    AddNewBindRoleUser(req?: AddNewBindRoleUserRequest, cb?: (error: string, rep: AddNewBindRoleUserResponse) => void): Promise<AddNewBindRoleUserResponse>;
    /**
     * 查询clb监听器列表
     */
    DescribeListenerList(req: DescribeListenerListRequest, cb?: (error: string, rep: DescribeListenerListResponse) => void): Promise<DescribeListenerListResponse>;
    /**
     * 停止扫风险中心扫描任务
     */
    StopRiskCenterTask(req: StopRiskCenterTaskRequest, cb?: (error: string, rep: StopRiskCenterTaskResponse) => void): Promise<StopRiskCenterTaskResponse>;
    /**
     * 删除风险中心扫描任务
     */
    DeleteRiskScanTask(req: DeleteRiskScanTaskRequest, cb?: (error: string, rep: DeleteRiskScanTaskResponse) => void): Promise<DeleteRiskScanTaskResponse>;
    /**
     * 获取资产视角的弱口令风险列表
     */
    DescribeRiskCenterAssetViewWeakPasswordRiskList(req: DescribeRiskCenterAssetViewWeakPasswordRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterAssetViewWeakPasswordRiskListResponse) => void): Promise<DescribeRiskCenterAssetViewWeakPasswordRiskListResponse>;
    /**
     * 获取资产视角的漏洞风险列表
     */
    DescribeRiskCenterAssetViewVULRiskList(req: DescribeRiskCenterAssetViewVULRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterAssetViewVULRiskListResponse) => void): Promise<DescribeRiskCenterAssetViewVULRiskListResponse>;
    /**
     * 集群pod列表
     */
    DescribeClusterPodAssets(req: DescribeClusterPodAssetsRequest, cb?: (error: string, rep: DescribeClusterPodAssetsResponse) => void): Promise<DescribeClusterPodAssetsResponse>;
    /**
     * 获取资产视角的配置风险列表
     */
    DescribeRiskCenterAssetViewCFGRiskList(req: DescribeRiskCenterAssetViewCFGRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterAssetViewCFGRiskListResponse) => void): Promise<DescribeRiskCenterAssetViewCFGRiskListResponse>;
    /**
     * 获取vpc列表
     */
    DescribeVpcAssets(req: DescribeVpcAssetsRequest, cb?: (error: string, rep: DescribeVpcAssetsResponse) => void): Promise<DescribeVpcAssetsResponse>;
    /**
     * 获取风险服务列表
     */
    DescribeRiskCenterServerRiskList(req: DescribeRiskCenterServerRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterServerRiskListResponse) => void): Promise<DescribeRiskCenterServerRiskListResponse>;
    /**
     * 获取cvm列表
     */
    DescribeCVMAssets(req: DescribeCVMAssetsRequest, cb?: (error: string, rep: DescribeCVMAssetsResponse) => void): Promise<DescribeCVMAssetsResponse>;
    /**
     * 修改风险中心扫描任务
     */
    ModifyRiskCenterScanTask(req: ModifyRiskCenterScanTaskRequest, cb?: (error: string, rep: ModifyRiskCenterScanTaskResponse) => void): Promise<ModifyRiskCenterScanTaskResponse>;
    /**
     * 云防资产中心统计数据
     */
    DescribeCFWAssetStatistics(req?: DescribeCFWAssetStatisticsRequest, cb?: (error: string, rep: DescribeCFWAssetStatisticsResponse) => void): Promise<DescribeCFWAssetStatisticsResponse>;
    /**
     * 获取资产视角的漏洞风险列表
     */
    DescribeAssetViewVulRiskList(req: DescribeAssetViewVulRiskListRequest, cb?: (error: string, rep: DescribeAssetViewVulRiskListResponse) => void): Promise<DescribeAssetViewVulRiskListResponse>;
    /**
     * 获取漏洞展开详情
     */
    DescribeVULRiskDetail(req: DescribeVULRiskDetailRequest, cb?: (error: string, rep: DescribeVULRiskDetailResponse) => void): Promise<DescribeVULRiskDetailResponse>;
    /**
     * 获取内容风险列表
     */
    DescribeRiskCenterWebsiteRiskList(req: DescribeRiskCenterWebsiteRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterWebsiteRiskListResponse) => void): Promise<DescribeRiskCenterWebsiteRiskListResponse>;
    /**
     * 查询集团账号详情
     */
    DescribeOrganizationInfo(req: DescribeOrganizationInfoRequest, cb?: (error: string, rep: DescribeOrganizationInfoResponse) => void): Promise<DescribeOrganizationInfoResponse>;
    /**
     * 获取报告下载的临时链接
     */
    DescribeTaskLogURL(req: DescribeTaskLogURLRequest, cb?: (error: string, rep: DescribeTaskLogURLResponse) => void): Promise<DescribeTaskLogURLResponse>;
    /**
     * 更新自定义策略的开关
     */
    ModifyUebaRuleSwitch(req: ModifyUebaRuleSwitchRequest, cb?: (error: string, rep: ModifyUebaRuleSwitchResponse) => void): Promise<ModifyUebaRuleSwitchResponse>;
    /**
     * 创建风险中心扫描任务
     */
    CreateRiskCenterScanTask(req: CreateRiskCenterScanTaskRequest, cb?: (error: string, rep: CreateRiskCenterScanTaskResponse) => void): Promise<CreateRiskCenterScanTaskResponse>;
    /**
     * 获取网关列表
     */
    DescribeGatewayAssets(req: DescribeGatewayAssetsRequest, cb?: (error: string, rep: DescribeGatewayAssetsResponse) => void): Promise<DescribeGatewayAssetsResponse>;
    /**
     * 查询TOP攻击信息
     */
    DescribeTopAttackInfo(req: DescribeTopAttackInfoRequest, cb?: (error: string, rep: DescribeTopAttackInfoResponse) => void): Promise<DescribeTopAttackInfoResponse>;
    /**
     * 立体防护中心查询漏洞信息
     */
    DescribeSearchBugInfo(req: DescribeSearchBugInfoRequest, cb?: (error: string, rep: DescribeSearchBugInfoResponse) => void): Promise<DescribeSearchBugInfoResponse>;
    /**
     * 查询集团的子账号列表
     */
    DescribeSubUserInfo(req: DescribeSubUserInfoRequest, cb?: (error: string, rep: DescribeSubUserInfoResponse) => void): Promise<DescribeSubUserInfoResponse>;
    /**
     * 获取漏洞视角的漏洞风险列表
     */
    DescribeVulViewVulRiskList(req: DescribeVulViewVulRiskListRequest, cb?: (error: string, rep: DescribeVulViewVulRiskListResponse) => void): Promise<DescribeVulViewVulRiskListResponse>;
    /**
     * 获取扫描报告列表
     */
    DescribeScanReportList(req: DescribeScanReportListRequest, cb?: (error: string, rep: DescribeScanReportListResponse) => void): Promise<DescribeScanReportListResponse>;
    /**
     * 创建域名、ip相关信息
     */
    CreateDomainAndIp(req: CreateDomainAndIpRequest, cb?: (error: string, rep: CreateDomainAndIpResponse) => void): Promise<CreateDomainAndIpResponse>;
    /**
     * 告警中心全量告警列表接口
     */
    DescribeAlertList(req: DescribeAlertListRequest, cb?: (error: string, rep: DescribeAlertListResponse) => void): Promise<DescribeAlertListResponse>;
    /**
     * 批量告警状态处理接口
     */
    UpdateAlertStatusList(req: UpdateAlertStatusListRequest, cb?: (error: string, rep: UpdateAlertStatusListResponse) => void): Promise<UpdateAlertStatusListResponse>;
    /**
     * 获取扫描任务列表
     */
    DescribeScanTaskList(req: DescribeScanTaskListRequest, cb?: (error: string, rep: DescribeScanTaskListResponse) => void): Promise<DescribeScanTaskListResponse>;
    /**
     * 数据库资产列表
     */
    DescribeDbAssets(req: DescribeDbAssetsRequest, cb?: (error: string, rep: DescribeDbAssetsResponse) => void): Promise<DescribeDbAssetsResponse>;
    /**
     * 获取端口视角的端口风险列表
     */
    DescribeRiskCenterPortViewPortRiskList(req: DescribeRiskCenterPortViewPortRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterPortViewPortRiskListResponse) => void): Promise<DescribeRiskCenterPortViewPortRiskListResponse>;
    /**
     * 获取资产视角的端口风险列表
     */
    DescribeRiskCenterAssetViewPortRiskList(req: DescribeRiskCenterAssetViewPortRiskListRequest, cb?: (error: string, rep: DescribeRiskCenterAssetViewPortRiskListResponse) => void): Promise<DescribeRiskCenterAssetViewPortRiskListResponse>;
    /**
     * 查询漏洞风险高级配置
     */
    DescribeVULRiskAdvanceCFGList(req: DescribeVULRiskAdvanceCFGListRequest, cb?: (error: string, rep: DescribeVULRiskAdvanceCFGListResponse) => void): Promise<DescribeVULRiskAdvanceCFGListResponse>;
    /**
     * 修改风险中心风险状态
     */
    ModifyRiskCenterRiskStatus(req: ModifyRiskCenterRiskStatusRequest, cb?: (error: string, rep: ModifyRiskCenterRiskStatusResponse) => void): Promise<ModifyRiskCenterRiskStatusResponse>;
    /**
     * 修改集团账号状态
     */
    ModifyOrganizationAccountStatus(req: ModifyOrganizationAccountStatusRequest, cb?: (error: string, rep: ModifyOrganizationAccountStatusResponse) => void): Promise<ModifyOrganizationAccountStatusResponse>;
    /**
     * 查询集团账号用户列表
     */
    DescribeOrganizationUserInfo(req: DescribeOrganizationUserInfoRequest, cb?: (error: string, rep: DescribeOrganizationUserInfoResponse) => void): Promise<DescribeOrganizationUserInfoResponse>;
    /**
     * 集群列表
     */
    DescribeClusterAssets(req: DescribeClusterAssetsRequest, cb?: (error: string, rep: DescribeClusterAssetsResponse) => void): Promise<DescribeClusterAssetsResponse>;
    /**
     * 获取子网列表
     */
    DescribeSubnetAssets(req: DescribeSubnetAssetsRequest, cb?: (error: string, rep: DescribeSubnetAssetsResponse) => void): Promise<DescribeSubnetAssetsResponse>;
    /**
     * cvm详情
     */
    DescribeCVMAssetInfo(req: DescribeCVMAssetInfoRequest, cb?: (error: string, rep: DescribeCVMAssetInfoResponse) => void): Promise<DescribeCVMAssetInfoResponse>;
}
