import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyEWRuleStatusResponse, DescribeNatFwInstanceRequest, DescribeNatFwInstanceWithRegionRequest, DescribeLogsRequest, ModifyFwGroupSwitchRequest, ModifySecurityGroupRuleRequest, ModifyAssetSyncResponse, ModifyNatFwVpcDnsSwitchResponse, CreateBlockIgnoreRuleNewRequest, ModifyAddressTemplateRequest, DescribeRuleOverviewResponse, ModifyEnterpriseSecurityGroupRuleResponse, ModifySequenceRulesRequest, DescribeNatAcRuleResponse, ModifyBlockTopRequest, AddAclRuleRequest, DescribeVpcFwGroupSwitchRequest, CreateAlertCenterIsolateResponse, ModifyNatAcRuleRequest, ModifyAclRuleRequest, ModifyAcRuleResponse, ModifyAssetScanResponse, ModifyNatSequenceRulesRequest, DescribeAclRuleResponse, DescribeNatFwInstanceWithRegionResponse, DescribeTLogInfoRequest, ModifyFwGroupSwitchResponse, DeleteNatFwInstanceResponse, DeleteBlockIgnoreRuleNewResponse, DeleteAllAccessControlRuleRequest, ModifyEdgeIpSwitchRequest, DescribeNatFwVpcDnsLstRequest, DescribeCfwEipsRequest, DescribeTLogInfoResponse, DescribeUnHandleEventTabListRequest, ModifyNatInstanceRequest, DescribeNatFwDnatRuleRequest, DescribeAssociatedInstanceListResponse, CreateBlockIgnoreRuleListRequest, RemoveAcRuleResponse, ModifyNatAcRuleResponse, DescribeAclRuleRequest, CreateSecurityGroupRulesResponse, ExpandCfwVerticalRequest, ModifyAllPublicIPSwitchStatusResponse, SyncFwOperateRequest, ModifyAssetScanRequest, ModifyBlockIgnoreListRequest, AddEnterpriseSecurityGroupRulesRequest, ModifySecurityGroupSequenceRulesResponse, DeleteIdsWhiteRuleRequest, ModifyNatFwSwitchResponse, ModifyAclRuleResponse, CreateNatFwInstanceRequest, ModifySecurityGroupItemRuleStatusResponse, DescribeEnterpriseSecurityGroupRuleResponse, DeleteBlockIgnoreRuleListResponse, CreateVpcFwGroupResponse, DescribeEnterpriseSecurityGroupRuleRequest, CreateAlertCenterRuleRequest, ModifyNatFwReSelectResponse, CreateAlertCenterOmitRequest, DescribeVpcAcRuleRequest, DeleteRemoteAccessDomainResponse, DescribeSwitchListsRequest, AddAclRuleResponse, DeleteRemoteAccessDomainRequest, SetNatFwEipResponse, DeleteSecurityGroupRuleResponse, ModifyStorageSettingResponse, ModifySecurityGroupItemRuleStatusRequest, ModifyBlockIgnoreRuleNewResponse, DescribeSourceAssetRequest, DescribeFwGroupInstanceInfoResponse, DescribeSourceAssetResponse, DescribeFwGroupInstanceInfoRequest, ModifyBlockIgnoreRuleRequest, DescribeEnterpriseSGRuleProgressRequest, DescribeTLogIpListRequest, DescribeNatFwInstancesInfoRequest, AddVpcAcRuleRequest, DescribeTableStatusRequest, ModifyNatSequenceRulesResponse, DescribeAssetSyncResponse, DescribeSecurityGroupListRequest, ModifyAddressTemplateResponse, CreateNatFwInstanceResponse, DescribeNatFwInfoCountResponse, DescribeDefenseSwitchRequest, ModifyVpcFwGroupRequest, ModifyEnterpriseSecurityDispatchStatusResponse, CreateIdsWhiteRuleResponse, ModifyResourceGroupRequest, ModifySequenceAclRulesRequest, ModifyVpcAcRuleRequest, CreateNatFwInstanceWithDomainResponse, DescribeFwSyncStatusRequest, ModifyEnterpriseSecurityGroupRuleRequest, RemoveNatAcRuleRequest, DescribeAssetSyncRequest, DeleteVpcFwGroupRequest, DescribeAcListsResponse, ModifyAllPublicIPSwitchStatusRequest, ModifySequenceAclRulesResponse, CreateAddressTemplateRequest, CreateBlockIgnoreRuleNewResponse, AddNatAcRuleRequest, ModifySecurityGroupSequenceRulesRequest, CreateDatabaseWhiteListRulesResponse, DeleteBlockIgnoreRuleListRequest, SyncFwOperateResponse, DeleteVpcFwGroupResponse, CreateChooseVpcsResponse, DescribeUnHandleEventTabListResponse, ModifyRunSyncAssetResponse, AddVpcAcRuleResponse, DescribeSecurityGroupListResponse, DescribeVpcAcRuleResponse, AddEnterpriseSecurityGroupRulesResponse, RemoveEnterpriseSecurityGroupRuleRequest, DeleteResourceGroupRequest, DescribeBlockByIpTimesListRequest, DescribeIdsWhiteRuleResponse, RemoveEnterpriseSecurityGroupRuleResponse, DescribeEnterpriseSecurityGroupRuleListRequest, CreateAddressTemplateResponse, DescribeTableStatusResponse, ModifySequenceRulesResponse, DeleteIdsWhiteRuleResponse, CreateAlertCenterOmitResponse, DescribeResourceGroupNewResponse, ModifyEdgeIpSwitchResponse, DescribeResourceGroupNewRequest, DescribeAddressTemplateListRequest, RemoveAclRuleRequest, DeleteAcRuleResponse, DescribeIPStatusListRequest, DescribeNatFwDnatRuleResponse, ModifyNatFwVpcDnsSwitchRequest, DescribeFwSyncStatusResponse, DescribeBlockByIpTimesListResponse, ModifyAllRuleStatusRequest, SetNatFwDnatRuleResponse, DescribeRuleOverviewRequest, DescribeDefenseSwitchResponse, DescribeAcListsRequest, DescribeGuideScanInfoRequest, DescribeAssociatedInstanceListRequest, ModifyVpcAcRuleResponse, ModifyBlockIgnoreRuleNewRequest, ModifyEWRuleStatusRequest, DeleteAcRuleRequest, DeleteAllAccessControlRuleResponse, ModifyNatFwSwitchRequest, DeleteBlockIgnoreRuleNewRequest, RemoveNatAcRuleResponse, DescribeFwEdgeIpsResponse, DescribeIPStatusListResponse, CreateDatabaseWhiteListRulesRequest, DescribeVpcFwGroupSwitchResponse, ModifyBlockIgnoreRuleResponse, DescribeTLogIpListResponse, StopSecurityGroupRuleDispatchResponse, DescribeNatFwInfoCountRequest, RemoveAcRuleRequest, ModifyNatFwReSelectRequest, ModifyVpcFwSequenceRulesResponse, SetNatFwDnatRuleRequest, ModifyAllRuleStatusResponse, StopSecurityGroupRuleDispatchRequest, SetNatFwEipRequest, DescribeBlockIgnoreListRequest, ModifyBlockTopResponse, RemoveAclRuleResponse, DeleteNatFwInstanceRequest, ModifyVpcFwSequenceRulesRequest, ModifyStorageSettingRequest, DescribeIdsWhiteRuleRequest, ModifyAssetSyncRequest, DescribeNatFwVpcDnsLstResponse, CreateChooseVpcsRequest, ExpandCfwVerticalResponse, DescribeBlockStaticListRequest, DescribeLogsResponse, CreateSecurityGroupRulesRequest, CreateVpcFwGroupRequest, CreateNatFwInstanceWithDomainRequest, RemoveVpcAcRuleRequest, DescribeResourceGroupResponse, DeleteAddressTemplateResponse, CreateBlockIgnoreRuleListResponse, DescribeCfwEipsResponse, ModifyResourceGroupResponse, ModifyVpcFwGroupResponse, DeleteResourceGroupResponse, DeleteSecurityGroupRuleRequest, CreateAlertCenterIsolateRequest, DescribeNatAcRuleRequest, DescribeEnterpriseSecurityGroupRuleListResponse, ModifyRunSyncAssetRequest, DeleteAddressTemplateRequest, CreateAcRulesResponse, DescribeEnterpriseSGRuleProgressResponse, DescribeSwitchListsResponse, ModifyAcRuleRequest, RemoveVpcAcRuleResponse, DescribeNatFwInstancesInfoResponse, AddNatAcRuleResponse, ModifyBlockIgnoreListResponse, DescribeNatFwInstanceResponse, ModifySecurityGroupRuleResponse, DescribeFwEdgeIpsRequest, DescribeResourceGroupRequest, CreateAcRulesRequest, ModifyEnterpriseSecurityDispatchStatusRequest, DescribeBlockIgnoreListResponse, ModifyNatInstanceResponse, ModifyTableStatusRequest, ModifyTableStatusResponse, DescribeBlockStaticListResponse, DescribeGuideScanInfoResponse, CreateAlertCenterRuleResponse, DescribeAddressTemplateListResponse, CreateIdsWhiteRuleRequest } from "./cfw_models";
/**
 * cfw client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除VPC间规则
     */
    RemoveVpcAcRule(req: RemoveVpcAcRuleRequest, cb?: (error: string, rep: RemoveVpcAcRuleResponse) => void): Promise<RemoveVpcAcRuleResponse>;
    /**
     * 批量删除入侵防御封禁列表、放通列表规则（新）
     */
    DeleteBlockIgnoreRuleNew(req: DeleteBlockIgnoreRuleNewRequest, cb?: (error: string, rep: DeleteBlockIgnoreRuleNewResponse) => void): Promise<DeleteBlockIgnoreRuleNewResponse>;
    /**
     * VPC防火墙(组)开关列表
     */
    DescribeVpcFwGroupSwitch(req: DescribeVpcFwGroupSwitchRequest, cb?: (error: string, rep: DescribeVpcFwGroupSwitchResponse) => void): Promise<DescribeVpcFwGroupSwitchResponse>;
    /**
     * 启用停用VPC间规则或Nat边界规则
VPC间规则需指定EdgeId。Nat边界规则需指定地域Region与Direction。
     */
    ModifyEWRuleStatus(req: ModifyEWRuleStatusRequest, cb?: (error: string, rep: ModifyEWRuleStatusResponse) => void): Promise<ModifyEWRuleStatusResponse>;
    /**
     * 中止安全组规则下发
     */
    StopSecurityGroupRuleDispatch(req: StopSecurityGroupRuleDispatchRequest, cb?: (error: string, rep: StopSecurityGroupRuleDispatchResponse) => void): Promise<StopSecurityGroupRuleDispatchResponse>;
    /**
     * ModifyResourceGroup-资产中心资产组信息修改
     */
    ModifyResourceGroup(req: ModifyResourceGroupRequest, cb?: (error: string, rep: ModifyResourceGroupResponse) => void): Promise<ModifyResourceGroupResponse>;
    /**
     * 资产中心资产组数数据信息查询
     */
    DescribeResourceGroupNew(req: DescribeResourceGroupNewRequest, cb?: (error: string, rep: DescribeResourceGroupNewResponse) => void): Promise<DescribeResourceGroupNewResponse>;
    /**
     * 编辑VPC间防火墙(防火墙组)
     */
    ModifyVpcFwGroup(req: ModifyVpcFwGroupRequest, cb?: (error: string, rep: ModifyVpcFwGroupResponse) => void): Promise<ModifyVpcFwGroupResponse>;
    /**
     * 资产同步
     */
    ModifyAssetSync(req?: ModifyAssetSyncRequest, cb?: (error: string, rep: ModifyAssetSyncResponse) => void): Promise<ModifyAssetSyncResponse>;
    /**
     * 删除防火墙(组)，或者删除其中实例
     */
    DeleteVpcFwGroup(req: DeleteVpcFwGroupRequest, cb?: (error: string, rep: DeleteVpcFwGroupResponse) => void): Promise<DeleteVpcFwGroupResponse>;
    /**
     * 添加VPC内网间规则
     */
    AddVpcAcRule(req: AddVpcAcRuleRequest, cb?: (error: string, rep: AddVpcAcRuleResponse) => void): Promise<AddVpcAcRuleResponse>;
    /**
     * 创建新企业安全组规则
     */
    AddEnterpriseSecurityGroupRules(req: AddEnterpriseSecurityGroupRulesRequest, cb?: (error: string, rep: AddEnterpriseSecurityGroupRulesResponse) => void): Promise<AddEnterpriseSecurityGroupRulesResponse>;
    /**
     * 查询规则表状态
     */
    DescribeTableStatus(req: DescribeTableStatusRequest, cb?: (error: string, rep: DescribeTableStatusResponse) => void): Promise<DescribeTableStatusResponse>;
    /**
     * 企业安全组规则快速排序
     */
    ModifySecurityGroupSequenceRules(req: ModifySecurityGroupSequenceRulesRequest, cb?: (error: string, rep: ModifySecurityGroupSequenceRulesResponse) => void): Promise<ModifySecurityGroupSequenceRulesResponse>;
    /**
     * 删除新企业安全组规则
     */
    RemoveEnterpriseSecurityGroupRule(req: RemoveEnterpriseSecurityGroupRuleRequest, cb?: (error: string, rep: RemoveEnterpriseSecurityGroupRuleResponse) => void): Promise<RemoveEnterpriseSecurityGroupRuleResponse>;
    /**
     * NAT防火墙规则快速排序
     */
    ModifyNatSequenceRules(req: ModifyNatSequenceRulesRequest, cb?: (error: string, rep: ModifyNatSequenceRulesResponse) => void): Promise<ModifyNatSequenceRulesResponse>;
    /**
     * DescribeUnHandleEventTabList 告警中心伪攻击链事件未处置接口
     */
    DescribeUnHandleEventTabList(req: DescribeUnHandleEventTabListRequest, cb?: (error: string, rep: DescribeUnHandleEventTabListResponse) => void): Promise<DescribeUnHandleEventTabListResponse>;
    /**
     * 创建NAT防火墙实例（Region参数必填）
     */
    CreateNatFwInstance(req: CreateNatFwInstanceRequest, cb?: (error: string, rep: CreateNatFwInstanceResponse) => void): Promise<CreateNatFwInstanceResponse>;
    /**
     * ModifyBlockTop取消置顶接口
     */
    ModifyBlockTop(req: ModifyBlockTopRequest, cb?: (error: string, rep: ModifyBlockTopResponse) => void): Promise<ModifyBlockTopResponse>;
    /**
     * 删除远程运维域名
     */
    DeleteRemoteAccessDomain(req: DeleteRemoteAccessDomainRequest, cb?: (error: string, rep: DeleteRemoteAccessDomainResponse) => void): Promise<DeleteRemoteAccessDomainResponse>;
    /**
     * 删除互联网边界访问控制规则
     */
    RemoveAclRule(req: RemoveAclRuleRequest, cb?: (error: string, rep: RemoveAclRuleResponse) => void): Promise<RemoveAclRuleResponse>;
    /**
     * 销毁防火墙实例
     */
    DeleteNatFwInstance(req: DeleteNatFwInstanceRequest, cb?: (error: string, rep: DeleteNatFwInstanceResponse) => void): Promise<DeleteNatFwInstanceResponse>;
    /**
     * 批量添加入侵防御封禁列表、放通列表规则
     */
    CreateBlockIgnoreRuleList(req: CreateBlockIgnoreRuleListRequest, cb?: (error: string, rep: CreateBlockIgnoreRuleListResponse) => void): Promise<CreateBlockIgnoreRuleListResponse>;
    /**
     * 编辑单条入侵防御封禁列表、放通列表规则（新）
     */
    ModifyBlockIgnoreRuleNew(req: ModifyBlockIgnoreRuleNewRequest, cb?: (error: string, rep: ModifyBlockIgnoreRuleNewResponse) => void): Promise<ModifyBlockIgnoreRuleNewResponse>;
    /**
     * 修改边界防火墙开关(旁路、串行)
     */
    ModifyEdgeIpSwitch(req: ModifyEdgeIpSwitchRequest, cb?: (error: string, rep: ModifyEdgeIpSwitchResponse) => void): Promise<ModifyEdgeIpSwitchResponse>;
    /**
     * DescribeBlockByIpTimesList 告警中心阻断IP折线图
     */
    DescribeBlockByIpTimesList(req: DescribeBlockByIpTimesListRequest, cb?: (error: string, rep: DescribeBlockByIpTimesListResponse) => void): Promise<DescribeBlockByIpTimesListResponse>;
    /**
     * 查询Nat防火墙Dnat规则
     */
    DescribeNatFwDnatRule(req: DescribeNatFwDnatRuleRequest, cb?: (error: string, rep: DescribeNatFwDnatRuleResponse) => void): Promise<DescribeNatFwDnatRuleResponse>;
    /**
     * 查询新版安全组下发进度
     */
    DescribeEnterpriseSGRuleProgress(req?: DescribeEnterpriseSGRuleProgressRequest, cb?: (error: string, rep: DescribeEnterpriseSGRuleProgressResponse) => void): Promise<DescribeEnterpriseSGRuleProgressResponse>;
    /**
     * 获取当前用户接入nat防火墙的所有子网数及natfw实例个数
     */
    DescribeNatFwInfoCount(req?: DescribeNatFwInfoCountRequest, cb?: (error: string, rep: DescribeNatFwInfoCountResponse) => void): Promise<DescribeNatFwInfoCountResponse>;
    /**
     * 展示当前natfw 实例对应的vpc dns开关
     */
    DescribeNatFwVpcDnsLst(req: DescribeNatFwVpcDnsLstRequest, cb?: (error: string, rep: DescribeNatFwVpcDnsLstResponse) => void): Promise<DescribeNatFwVpcDnsLstResponse>;
    /**
     * 编辑单条入侵防御封禁列表、放通列表规则
     */
    ModifyBlockIgnoreRule(req: ModifyBlockIgnoreRuleRequest, cb?: (error: string, rep: ModifyBlockIgnoreRuleResponse) => void): Promise<ModifyBlockIgnoreRuleResponse>;
    /**
     * 查询互联网边界访问控制列表
     */
    DescribeAclRule(req: DescribeAclRuleRequest, cb?: (error: string, rep: DescribeAclRuleResponse) => void): Promise<DescribeAclRuleResponse>;
    /**
     * 编辑单条安全组规则
     */
    ModifySecurityGroupRule(req: ModifySecurityGroupRuleRequest, cb?: (error: string, rep: ModifySecurityGroupRuleResponse) => void): Promise<ModifySecurityGroupRuleResponse>;
    /**
     * 全部删除规则
     */
    DeleteAllAccessControlRule(req: DeleteAllAccessControlRuleRequest, cb?: (error: string, rep: DeleteAllAccessControlRuleResponse) => void): Promise<DeleteAllAccessControlRuleResponse>;
    /**
     * 查询安全组规则列表
     */
    DescribeSecurityGroupList(req: DescribeSecurityGroupListRequest, cb?: (error: string, rep: DescribeSecurityGroupListResponse) => void): Promise<DescribeSecurityGroupListResponse>;
    /**
     * 修改内网间访问控制规则
     */
    ModifyVpcAcRule(req: ModifyVpcAcRuleRequest, cb?: (error: string, rep: ModifyVpcAcRuleResponse) => void): Promise<ModifyVpcAcRuleResponse>;
    /**
     * 资产同步状态查询
     */
    DescribeAssetSync(req?: DescribeAssetSyncRequest, cb?: (error: string, rep: DescribeAssetSyncResponse) => void): Promise<DescribeAssetSyncResponse>;
    /**
     * 创建企业安全组规则
     */
    CreateSecurityGroupRules(req: CreateSecurityGroupRulesRequest, cb?: (error: string, rep: CreateSecurityGroupRulesResponse) => void): Promise<CreateSecurityGroupRulesResponse>;
    /**
     * 获取入侵防御按钮列表
     */
    DescribeDefenseSwitch(req?: DescribeDefenseSwitchRequest, cb?: (error: string, rep: DescribeDefenseSwitchResponse) => void): Promise<DescribeDefenseSwitchResponse>;
    /**
     * 获取租户所有VPC防火墙(组)及VPC防火墙实例卡片信息
     */
    DescribeFwGroupInstanceInfo(req: DescribeFwGroupInstanceInfoRequest, cb?: (error: string, rep: DescribeFwGroupInstanceInfoResponse) => void): Promise<DescribeFwGroupInstanceInfoResponse>;
    /**
     * nat 防火墙VPC DNS 开关切换
     */
    ModifyNatFwVpcDnsSwitch(req: ModifyNatFwVpcDnsSwitchRequest, cb?: (error: string, rep: ModifyNatFwVpcDnsSwitchResponse) => void): Promise<ModifyNatFwVpcDnsSwitchResponse>;
    /**
     * 启用停用单条企业安全组规则
     */
    ModifySecurityGroupItemRuleStatus(req: ModifySecurityGroupItemRuleStatusRequest, cb?: (error: string, rep: ModifySecurityGroupItemRuleStatusResponse) => void): Promise<ModifySecurityGroupItemRuleStatusResponse>;
    /**
     * GetNatFwInstanceWithRegion 获取租户新增运维的NAT实例，带上地域
     */
    DescribeNatFwInstanceWithRegion(req?: DescribeNatFwInstanceWithRegionRequest, cb?: (error: string, rep: DescribeNatFwInstanceWithRegionResponse) => void): Promise<DescribeNatFwInstanceWithRegionResponse>;
    /**
     * 删除入侵防御规则白名单接口
     */
    DeleteIdsWhiteRule(req: DeleteIdsWhiteRuleRequest, cb?: (error: string, rep: DeleteIdsWhiteRuleResponse) => void): Promise<DeleteIdsWhiteRuleResponse>;
    /**
     * 批量添加入侵防御封禁列表、放通列表规则
     */
    CreateBlockIgnoreRuleNew(req: CreateBlockIgnoreRuleNewRequest, cb?: (error: string, rep: CreateBlockIgnoreRuleNewResponse) => void): Promise<CreateBlockIgnoreRuleNewResponse>;
    /**
     * DescribeSourceAsset-查询全部资产信息
     */
    DescribeSourceAsset(req: DescribeSourceAssetRequest, cb?: (error: string, rep: DescribeSourceAssetResponse) => void): Promise<DescribeSourceAssetResponse>;
    /**
     * DeleteResourceGroup-资产中心资产组删除
     */
    DeleteResourceGroup(req: DeleteResourceGroupRequest, cb?: (error: string, rep: DeleteResourceGroupResponse) => void): Promise<DeleteResourceGroupResponse>;
    /**
     * 删除互联网边界规则
     */
    RemoveAcRule(req: RemoveAcRuleRequest, cb?: (error: string, rep: RemoveAcRuleResponse) => void): Promise<RemoveAcRuleResponse>;
    /**
     * vpc间规则快速排序
     */
    ModifyVpcFwSequenceRules(req: ModifyVpcFwSequenceRulesRequest, cb?: (error: string, rep: ModifyVpcFwSequenceRulesResponse) => void): Promise<ModifyVpcFwSequenceRulesResponse>;
    /**
     * 用户告警中心-忽略处置按钮
     */
    CreateAlertCenterOmit(req: CreateAlertCenterOmitRequest, cb?: (error: string, rep: CreateAlertCenterOmitResponse) => void): Promise<CreateAlertCenterOmitResponse>;
    /**
     * 创建入侵防御规则白名单接口
     */
    CreateIdsWhiteRule(req: CreateIdsWhiteRuleRequest, cb?: (error: string, rep: CreateIdsWhiteRuleResponse) => void): Promise<CreateIdsWhiteRuleResponse>;
    /**
     * 查询内网间访问控制列表
     */
    DescribeVpcAcRule(req: DescribeVpcAcRuleRequest, cb?: (error: string, rep: DescribeVpcAcRuleResponse) => void): Promise<DescribeVpcAcRuleResponse>;
    /**
     * 编辑新企业安全组规则
     */
    ModifyEnterpriseSecurityGroupRule(req: ModifyEnterpriseSecurityGroupRuleRequest, cb?: (error: string, rep: ModifyEnterpriseSecurityGroupRuleResponse) => void): Promise<ModifyEnterpriseSecurityGroupRuleResponse>;
    /**
     * 添加互联网边界访问控制规则
     */
    AddAclRule(req: AddAclRuleRequest, cb?: (error: string, rep: AddAclRuleResponse) => void): Promise<AddAclRuleResponse>;
    /**
     * 修改NAT访问控制规则
     */
    ModifyNatAcRule(req: ModifyNatAcRuleRequest, cb?: (error: string, rep: ModifyNatAcRuleResponse) => void): Promise<ModifyNatAcRuleResponse>;
    /**
     * 删除规则
     */
    DeleteSecurityGroupRule(req: DeleteSecurityGroupRuleRequest, cb?: (error: string, rep: DeleteSecurityGroupRuleResponse) => void): Promise<DeleteSecurityGroupRuleResponse>;
    /**
     * 修改地址模板
     */
    ModifyAddressTemplate(req: ModifyAddressTemplateRequest, cb?: (error: string, rep: ModifyAddressTemplateResponse) => void): Promise<ModifyAddressTemplateResponse>;
    /**
     * 防火墙开关列表，已废弃，请使用DescribeFwEdgeIps
     */
    DescribeSwitchLists(req: DescribeSwitchListsRequest, cb?: (error: string, rep: DescribeSwitchListsResponse) => void): Promise<DescribeSwitchListsResponse>;
    /**
     * 修改规则表状态
     */
    ModifyTableStatus(req: ModifyTableStatusRequest, cb?: (error: string, rep: ModifyTableStatusResponse) => void): Promise<ModifyTableStatusResponse>;
    /**
     * 用户告警中心-封隔离处置按钮
     */
    CreateAlertCenterIsolate(req: CreateAlertCenterIsolateRequest, cb?: (error: string, rep: CreateAlertCenterIsolateResponse) => void): Promise<CreateAlertCenterIsolateResponse>;
    /**
     * 支持对封禁列表、放通列表如下操作：
批量增加封禁IP、放通IP/域名
批量删除封禁IP、放通IP/域名
批量修改封禁IP、放通IP/域名生效事件
     */
    ModifyBlockIgnoreList(req: ModifyBlockIgnoreListRequest, cb?: (error: string, rep: ModifyBlockIgnoreListResponse) => void): Promise<ModifyBlockIgnoreListResponse>;
    /**
     * 创建、选择vpc
     */
    CreateChooseVpcs(req: CreateChooseVpcsRequest, cb?: (error: string, rep: CreateChooseVpcsResponse) => void): Promise<CreateChooseVpcsResponse>;
    /**
     * 资产扫描
     */
    ModifyAssetScan(req: ModifyAssetScanRequest, cb?: (error: string, rep: ModifyAssetScanResponse) => void): Promise<ModifyAssetScanResponse>;
    /**
     * 删除地址模板规则
     */
    DeleteAddressTemplate(req: DeleteAddressTemplateRequest, cb?: (error: string, rep: DeleteAddressTemplateResponse) => void): Promise<DeleteAddressTemplateResponse>;
    /**
     * 修改规则执行顺序
     */
    ModifySequenceRules(req: ModifySequenceRulesRequest, cb?: (error: string, rep: ModifySequenceRulesResponse) => void): Promise<ModifySequenceRulesResponse>;
    /**
     * 互联网边界规则快速排序
     */
    ModifySequenceAclRules(req: ModifySequenceAclRulesRequest, cb?: (error: string, rep: ModifySequenceAclRulesResponse) => void): Promise<ModifySequenceAclRulesResponse>;
    /**
     * 查询规则列表概况
     */
    DescribeRuleOverview(req: DescribeRuleOverviewRequest, cb?: (error: string, rep: DescribeRuleOverviewResponse) => void): Promise<DescribeRuleOverviewResponse>;
    /**
     * IP防护状态查询
     */
    DescribeIPStatusList(req: DescribeIPStatusListRequest, cb?: (error: string, rep: DescribeIPStatusListResponse) => void): Promise<DescribeIPStatusListResponse>;
    /**
     * 查询新企业安全组规则
     */
    DescribeEnterpriseSecurityGroupRule(req: DescribeEnterpriseSecurityGroupRuleRequest, cb?: (error: string, rep: DescribeEnterpriseSecurityGroupRuleResponse) => void): Promise<DescribeEnterpriseSecurityGroupRuleResponse>;
    /**
     * 修改防火墙(组)开关(支持单点模式、多点模式、全互通模式)
     */
    ModifyFwGroupSwitch(req: ModifyFwGroupSwitchRequest, cb?: (error: string, rep: ModifyFwGroupSwitchResponse) => void): Promise<ModifyFwGroupSwitchResponse>;
    /**
     * 日志审计日志查询
     */
    DescribeLogs(req: DescribeLogsRequest, cb?: (error: string, rep: DescribeLogsResponse) => void): Promise<DescribeLogsResponse>;
    /**
     * 配置防火墙Dnat规则
     */
    SetNatFwDnatRule(req: SetNatFwDnatRuleRequest, cb?: (error: string, rep: SetNatFwDnatRuleResponse) => void): Promise<SetNatFwDnatRuleResponse>;
    /**
     * 启用停用全部规则
     */
    ModifyAllRuleStatus(req: ModifyAllRuleStatusRequest, cb?: (error: string, rep: ModifyAllRuleStatusResponse) => void): Promise<ModifyAllRuleStatusResponse>;
    /**
     * 批量删除入侵防御封禁列表、放通列表规则
     */
    DeleteBlockIgnoreRuleList(req: DeleteBlockIgnoreRuleListRequest, cb?: (error: string, rep: DeleteBlockIgnoreRuleListResponse) => void): Promise<DeleteBlockIgnoreRuleListResponse>;
    /**
     * 设置防火墙实例弹性公网ip，目前仅支持新增模式的防火墙实例
     */
    SetNatFwEip(req: SetNatFwEipRequest, cb?: (error: string, rep: SetNatFwEipResponse) => void): Promise<SetNatFwEipResponse>;
    /**
     * 用户告警中心-封禁、放通处置按钮
     */
    CreateAlertCenterRule(req: CreateAlertCenterRuleRequest, cb?: (error: string, rep: CreateAlertCenterRuleResponse) => void): Promise<CreateAlertCenterRuleResponse>;
    /**
     * 修改互联网边界访问控制规则
     */
    ModifyAclRule(req: ModifyAclRuleRequest, cb?: (error: string, rep: ModifyAclRuleResponse) => void): Promise<ModifyAclRuleResponse>;
    /**
     * 查询新企业安全组规则  从node接口迁移   原接口DescribeSecurityGroupNewList
     */
    DescribeEnterpriseSecurityGroupRuleList(req: DescribeEnterpriseSecurityGroupRuleListRequest, cb?: (error: string, rep: DescribeEnterpriseSecurityGroupRuleListResponse) => void): Promise<DescribeEnterpriseSecurityGroupRuleListResponse>;
    /**
     * 查询防火墙弹性公网IP
     */
    DescribeCfwEips(req: DescribeCfwEipsRequest, cb?: (error: string, rep: DescribeCfwEipsResponse) => void): Promise<DescribeCfwEipsResponse>;
    /**
     * 查询入侵防御放通封禁列表
     */
    DescribeBlockIgnoreList(req: DescribeBlockIgnoreListRequest, cb?: (error: string, rep: DescribeBlockIgnoreListResponse) => void): Promise<DescribeBlockIgnoreListResponse>;
    /**
     * 删除NAT访问控制规则
     */
    RemoveNatAcRule(req: RemoveNatAcRuleRequest, cb?: (error: string, rep: RemoveNatAcRuleResponse) => void): Promise<RemoveNatAcRuleResponse>;
    /**
     * 访问控制列表
     */
    DescribeAcLists(req: DescribeAcListsRequest, cb?: (error: string, rep: DescribeAcListsResponse) => void): Promise<DescribeAcListsResponse>;
    /**
     * 防火墙垂直扩容
     */
    ExpandCfwVertical(req: ExpandCfwVerticalRequest, cb?: (error: string, rep: ExpandCfwVerticalResponse) => void): Promise<ExpandCfwVerticalResponse>;
    /**
     * 创建VPC间防火墙(防火墙组)
     */
    CreateVpcFwGroup(req: CreateVpcFwGroupRequest, cb?: (error: string, rep: CreateVpcFwGroupResponse) => void): Promise<CreateVpcFwGroupResponse>;
    /**
     * 互联网边界防火墙一键开关
     */
    ModifyAllPublicIPSwitchStatus(req: ModifyAllPublicIPSwitchStatusRequest, cb?: (error: string, rep: ModifyAllPublicIPSwitchStatusResponse) => void): Promise<ModifyAllPublicIPSwitchStatusResponse>;
    /**
     * 获取安全组关联实例列表
     */
    DescribeAssociatedInstanceList(req: DescribeAssociatedInstanceListRequest, cb?: (error: string, rep: DescribeAssociatedInstanceListResponse) => void): Promise<DescribeAssociatedInstanceListResponse>;
    /**
     * 编辑NAT防火墙
     */
    ModifyNatInstance(req: ModifyNatInstanceRequest, cb?: (error: string, rep: ModifyNatInstanceResponse) => void): Promise<ModifyNatInstanceResponse>;
    /**
     * 删除规则
     */
    DeleteAcRule(req: DeleteAcRuleRequest, cb?: (error: string, rep: DeleteAcRuleResponse) => void): Promise<DeleteAcRuleResponse>;
    /**
     * 查询NAT访问控制列表
     */
    DescribeNatAcRule(req: DescribeNatAcRuleRequest, cb?: (error: string, rep: DescribeNatAcRuleResponse) => void): Promise<DescribeNatAcRuleResponse>;
    /**
     * 获取防火墙同步状态，一般在执行同步操作后查询
     */
    DescribeFwSyncStatus(req: DescribeFwSyncStatusRequest, cb?: (error: string, rep: DescribeFwSyncStatusResponse) => void): Promise<DescribeFwSyncStatusResponse>;
    /**
     * DescribeNatFwInstance 获取租户所有NAT实例
     */
    DescribeNatFwInstance(req?: DescribeNatFwInstanceRequest, cb?: (error: string, rep: DescribeNatFwInstanceResponse) => void): Promise<DescribeNatFwInstanceResponse>;
    /**
     * 创建暴露数据库白名单规则
     */
    CreateDatabaseWhiteListRules(req: CreateDatabaseWhiteListRulesRequest, cb?: (error: string, rep: CreateDatabaseWhiteListRulesResponse) => void): Promise<CreateDatabaseWhiteListRulesResponse>;
    /**
     * 创建防火墙实例和接入域名（Region参数必填）
     */
    CreateNatFwInstanceWithDomain(req: CreateNatFwInstanceWithDomainRequest, cb?: (error: string, rep: CreateNatFwInstanceWithDomainResponse) => void): Promise<CreateNatFwInstanceWithDomainResponse>;
    /**
     * 创建访问控制规则
     */
    CreateAcRules(req: CreateAcRulesRequest, cb?: (error: string, rep: CreateAcRulesResponse) => void): Promise<CreateAcRulesResponse>;
    /**
     * 修改企业安全组下发状态
     */
    ModifyEnterpriseSecurityDispatchStatus(req: ModifyEnterpriseSecurityDispatchStatusRequest, cb?: (error: string, rep: ModifyEnterpriseSecurityDispatchStatusResponse) => void): Promise<ModifyEnterpriseSecurityDispatchStatusResponse>;
    /**
     * DescribeTLogInfo告警中心概况查询
     */
    DescribeTLogInfo(req: DescribeTLogInfoRequest, cb?: (error: string, rep: DescribeTLogInfoResponse) => void): Promise<DescribeTLogInfoResponse>;
    /**
     * 同步资产-互联网&VPC（新）
     */
    ModifyRunSyncAsset(req: ModifyRunSyncAssetRequest, cb?: (error: string, rep: ModifyRunSyncAssetResponse) => void): Promise<ModifyRunSyncAssetResponse>;
    /**
     * DescribeGuideScanInfo新手引导扫描接口信息
     */
    DescribeGuideScanInfo(req?: DescribeGuideScanInfoRequest, cb?: (error: string, rep: DescribeGuideScanInfoResponse) => void): Promise<DescribeGuideScanInfoResponse>;
    /**
     * 查询地址模板列表
     */
    DescribeAddressTemplateList(req: DescribeAddressTemplateListRequest, cb?: (error: string, rep: DescribeAddressTemplateListResponse) => void): Promise<DescribeAddressTemplateListResponse>;
    /**
     * GetNatInstance 获取租户所有NAT实例及实例卡片信息
     */
    DescribeNatFwInstancesInfo(req: DescribeNatFwInstancesInfoRequest, cb?: (error: string, rep: DescribeNatFwInstancesInfoResponse) => void): Promise<DescribeNatFwInstancesInfoResponse>;
    /**
     * 防火墙实例重新选择vpc或nat
     */
    ModifyNatFwReSelect(req: ModifyNatFwReSelectRequest, cb?: (error: string, rep: ModifyNatFwReSelectResponse) => void): Promise<ModifyNatFwReSelectResponse>;
    /**
     * 日志存储设置，可以修改存储时间和清空日志
     */
    ModifyStorageSetting(req?: ModifyStorageSettingRequest, cb?: (error: string, rep: ModifyStorageSettingResponse) => void): Promise<ModifyStorageSettingResponse>;
    /**
     * DescribeResourceGroup资产中心资产树信息
     */
    DescribeResourceGroup(req: DescribeResourceGroupRequest, cb?: (error: string, rep: DescribeResourceGroupResponse) => void): Promise<DescribeResourceGroupResponse>;
    /**
     * 同步防火墙操作，包括同步防火墙路由（若vpc，专线网关等增加了Cidr，需要手动同步一下路由使之在防火墙上生效）等。
     */
    SyncFwOperate(req: SyncFwOperateRequest, cb?: (error: string, rep: SyncFwOperateResponse) => void): Promise<SyncFwOperateResponse>;
    /**
     * 修改规则
     */
    ModifyAcRule(req: ModifyAcRuleRequest, cb?: (error: string, rep: ModifyAcRuleResponse) => void): Promise<ModifyAcRuleResponse>;
    /**
     * 串行防火墙IP开关列表
     */
    DescribeFwEdgeIps(req: DescribeFwEdgeIpsRequest, cb?: (error: string, rep: DescribeFwEdgeIpsResponse) => void): Promise<DescribeFwEdgeIpsResponse>;
    /**
     * 修改NAT防火墙开关
     */
    ModifyNatFwSwitch(req: ModifyNatFwSwitchRequest, cb?: (error: string, rep: ModifyNatFwSwitchResponse) => void): Promise<ModifyNatFwSwitchResponse>;
    /**
     * DescribeTLogIpList告警中心IP柱形图
     */
    DescribeTLogIpList(req: DescribeTLogIpListRequest, cb?: (error: string, rep: DescribeTLogIpListResponse) => void): Promise<DescribeTLogIpListResponse>;
    /**
     * 创建地址模板规则
     */
    CreateAddressTemplate(req: CreateAddressTemplateRequest, cb?: (error: string, rep: CreateAddressTemplateResponse) => void): Promise<CreateAddressTemplateResponse>;
    /**
     * 添加nat访问控制规则
     */
    AddNatAcRule(req: AddNatAcRuleRequest, cb?: (error: string, rep: AddNatAcRuleResponse) => void): Promise<AddNatAcRuleResponse>;
    /**
     * DescribeBlockStaticList 告警中心柱形图
     */
    DescribeBlockStaticList(req: DescribeBlockStaticListRequest, cb?: (error: string, rep: DescribeBlockStaticListResponse) => void): Promise<DescribeBlockStaticListResponse>;
    /**
     * 查询入侵防御规则白名单接口
     */
    DescribeIdsWhiteRule(req: DescribeIdsWhiteRuleRequest, cb?: (error: string, rep: DescribeIdsWhiteRuleResponse) => void): Promise<DescribeIdsWhiteRuleResponse>;
}
