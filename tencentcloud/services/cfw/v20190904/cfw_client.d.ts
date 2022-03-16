import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeVpcRuleOverviewResponse, DescribeNatFwInstanceRequest, ModifyNatFwVpcDnsSwitchResponse, DescribeNatFwInstanceWithRegionRequest, DescribeRuleOverviewResponse, ModifyPublicIPSwitchStatusResponse, ModifyAcRuleResponse, DescribeTableStatusResponse, AddAcRuleRequest, ModifyNatFwVpcDnsSwitchRequest, DeleteNatFwInstanceResponse, DeleteAllAccessControlRuleRequest, ModifySecurityGroupRuleRequest, ModifyAllVPCSwitchStatusResponse, CreateSecurityGroupRulesResponse, DescribeNatFwVpcDnsLstRequest, DescribeCfwEipsRequest, DescribeTLogInfoResponse, ModifyAllSwitchStatusRequest, DescribeUnHandleEventTabListRequest, DescribeAssociatedInstanceListResponse, DescribeResourceGroupResponse, DescribeNatRuleOverviewResponse, RemoveAcRuleResponse, DeleteNatFwInstanceRequest, ExpandCfwVerticalRequest, ModifyAllPublicIPSwitchStatusResponse, DeleteVpcInstanceResponse, ModifyAssetScanRequest, ModifyBlockIgnoreListRequest, AddEnterpriseSecurityGroupRulesRequest, DeleteSecurityGroupRuleResponse, ModifySecurityGroupAllRuleStatusRequest, ModifySequenceRulesRequest, DescribeAddrTemplateListRequest, CreateNatFwInstanceRequest, ModifySecurityGroupItemRuleStatusResponse, DescribeEnterpriseSecurityGroupRuleResponse, DescribeEnterpriseSecurityGroupRuleRequest, ModifyItemSwitchStatusResponse, ModifyNatFwReSelectResponse, DeleteSecurityGroupRuleRequest, SetNatFwEipRequest, SetNatFwEipResponse, ModifyPublicIPSwitchStatusRequest, CreateSecurityGroupApiRulesResponse, ModifySecurityGroupItemRuleStatusRequest, DescribeSourceAssetRequest, DescribeSourceAssetResponse, DescribeTLogInfoRequest, DescribeSecurityGroupListResponse, DescribeAddrTemplateListResponse, RunSyncAssetRequest, DescribeTLogIpListRequest, DescribeNatFwInstancesInfoRequest, DescribeTableStatusRequest, DescribeSecurityGroupListRequest, ModifyResourceGroupRequest, CreateNatFwInstanceResponse, ModifyAllSwitchStatusResponse, DescribeNatFwInfoCountResponse, CreateNatFwInstanceWithDomainResponse, RemoveAcRuleRequest, ModifyAllRuleStatusRequest, DescribeAcListsResponse, ModifyAllPublicIPSwitchStatusRequest, DescribeBlockStaticListResponse, ModifySecurityGroupSequenceRulesRequest, CreateDatabaseWhiteListRulesResponse, CreateChooseVpcsResponse, DescribeUnHandleEventTabListResponse, ModifyRunSyncAssetResponse, ModifySecurityGroupSequenceRulesResponse, AddEnterpriseSecurityGroupRulesResponse, RemoveEnterpriseSecurityGroupRuleRequest, DeleteResourceGroupRequest, DescribeBlockByIpTimesListRequest, ModifyVPCSwitchStatusResponse, RemoveEnterpriseSecurityGroupRuleResponse, ModifyAllVPCSwitchStatusRequest, ModifySequenceRulesResponse, DeleteSecurityGroupAllRuleResponse, DescribeResourceGroupNewResponse, DescribeNatFwInstanceWithRegionResponse, DescribeResourceGroupNewRequest, ModifyBlockTopRequest, DeleteAcRuleResponse, DescribeIPStatusListRequest, ModifyNatFwSwitchResponse, RunSyncAssetResponse, DescribeBlockByIpTimesListResponse, SetNatFwDnatRuleResponse, DescribeRuleOverviewRequest, DescribeAcListsRequest, DescribeVpcRuleOverviewRequest, DescribeAssociatedInstanceListRequest, DeleteAcRuleRequest, DeleteAllAccessControlRuleResponse, ModifyNatFwSwitchRequest, DescribeIPStatusListResponse, DescribeNatRuleOverviewRequest, CreateDatabaseWhiteListRulesRequest, DescribeResourceGroupRequest, DeleteSecurityGroupAllRuleRequest, DescribeTLogIpListResponse, StopSecurityGroupRuleDispatchResponse, DescribeNatFwInfoCountRequest, AddAcRuleResponse, ModifyNatFwReSelectRequest, SetNatFwDnatRuleRequest, DescribeSyncAssetStatusResponse, ModifyAllRuleStatusResponse, StopSecurityGroupRuleDispatchRequest, DescribeGuideScanInfoRequest, ModifyBlockTopResponse, CreateSecurityGroupApiRulesRequest, DescribeNatFwVpcDnsLstResponse, CreateChooseVpcsRequest, ExpandCfwVerticalResponse, DescribeBlockStaticListRequest, CreateSecurityGroupRulesRequest, DeleteVpcInstanceRequest, CreateNatFwInstanceWithDomainRequest, DescribeSwitchListsResponse, DescribeSyncAssetStatusRequest, DescribeCfwEipsResponse, ModifyResourceGroupResponse, DeleteResourceGroupResponse, DescribeSwitchListsRequest, ModifyItemSwitchStatusRequest, ModifyRunSyncAssetRequest, CreateAcRulesResponse, ModifyAssetScanResponse, ModifyAcRuleRequest, DescribeNatFwInstancesInfoResponse, ModifyVPCSwitchStatusRequest, ModifyBlockIgnoreListResponse, DescribeNatFwInstanceResponse, ModifySecurityGroupRuleResponse, ModifySecurityGroupAllRuleStatusResponse, CreateAcRulesRequest, ModifyTableStatusRequest, ModifyTableStatusResponse, DescribeGuideScanInfoResponse } from "./cfw_models";
/**
 * cfw client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取当前用户接入nat防火墙的所有子网数及natfw实例个数
     */
    DescribeNatFwInfoCount(req?: DescribeNatFwInfoCountRequest, cb?: (error: string, rep: DescribeNatFwInfoCountResponse) => void): Promise<DescribeNatFwInfoCountResponse>;
    /**
     * nat规则列表概况
     */
    DescribeNatRuleOverview(req: DescribeNatRuleOverviewRequest, cb?: (error: string, rep: DescribeNatRuleOverviewResponse) => void): Promise<DescribeNatRuleOverviewResponse>;
    /**
     * 中止安全组规则下发
     */
    StopSecurityGroupRuleDispatch(req: StopSecurityGroupRuleDispatchRequest, cb?: (error: string, rep: StopSecurityGroupRuleDispatchResponse) => void): Promise<StopSecurityGroupRuleDispatchResponse>;
    /**
     * 修改规则表状态
     */
    ModifyTableStatus(req: ModifyTableStatusRequest, cb?: (error: string, rep: ModifyTableStatusResponse) => void): Promise<ModifyTableStatusResponse>;
    /**
     * 展示当前natfw 实例对应的vpc dns开关
     */
    DescribeNatFwVpcDnsLst(req: DescribeNatFwVpcDnsLstRequest, cb?: (error: string, rep: DescribeNatFwVpcDnsLstResponse) => void): Promise<DescribeNatFwVpcDnsLstResponse>;
    /**
     * 互联网边界防火墙一键开关
     */
    ModifyAllPublicIPSwitchStatus(req: ModifyAllPublicIPSwitchStatusRequest, cb?: (error: string, rep: ModifyAllPublicIPSwitchStatusResponse) => void): Promise<ModifyAllPublicIPSwitchStatusResponse>;
    /**
     * 获取安全组关联实例列表
     */
    DescribeAssociatedInstanceList(req: DescribeAssociatedInstanceListRequest, cb?: (error: string, rep: DescribeAssociatedInstanceListResponse) => void): Promise<DescribeAssociatedInstanceListResponse>;
    /**
     * 创建、选择vpc
     */
    CreateChooseVpcs(req: CreateChooseVpcsRequest, cb?: (error: string, rep: CreateChooseVpcsResponse) => void): Promise<CreateChooseVpcsResponse>;
    /**
     * vpc规则列表概况
     */
    DescribeVpcRuleOverview(req: DescribeVpcRuleOverviewRequest, cb?: (error: string, rep: DescribeVpcRuleOverviewResponse) => void): Promise<DescribeVpcRuleOverviewResponse>;
    /**
     * GetNatFwInstanceWithRegion 获取租户新增运维的NAT实例，带上地域
     */
    DescribeNatFwInstanceWithRegion(req?: DescribeNatFwInstanceWithRegionRequest, cb?: (error: string, rep: DescribeNatFwInstanceWithRegionResponse) => void): Promise<DescribeNatFwInstanceWithRegionResponse>;
    /**
     * 删除规则
     */
    DeleteAcRule(req: DeleteAcRuleRequest, cb?: (error: string, rep: DeleteAcRuleResponse) => void): Promise<DeleteAcRuleResponse>;
    /**
     * ModifyResourceGroup-资产中心资产组信息修改


     */
    ModifyResourceGroup(req: ModifyResourceGroupRequest, cb?: (error: string, rep: ModifyResourceGroupResponse) => void): Promise<ModifyResourceGroupResponse>;
    /**
     * 创建安全组API规则
     */
    CreateSecurityGroupApiRules(req: CreateSecurityGroupApiRulesRequest, cb?: (error: string, rep: CreateSecurityGroupApiRulesResponse) => void): Promise<CreateSecurityGroupApiRulesResponse>;
    /**
     * DescribeResourceGroupNew资产中心资产树信息
     */
    DescribeResourceGroupNew(req: DescribeResourceGroupNewRequest, cb?: (error: string, rep: DescribeResourceGroupNewResponse) => void): Promise<DescribeResourceGroupNewResponse>;
    /**
     * 全部删除规则
     */
    DeleteAllAccessControlRule(req: DeleteAllAccessControlRuleRequest, cb?: (error: string, rep: DeleteAllAccessControlRuleResponse) => void): Promise<DeleteAllAccessControlRuleResponse>;
    /**
     * 查询安全组规则列表
     */
    DescribeSecurityGroupList(req: DescribeSecurityGroupListRequest, cb?: (error: string, rep: DescribeSecurityGroupListResponse) => void): Promise<DescribeSecurityGroupListResponse>;
    /**
     * 编辑单条安全组规则
     */
    ModifySecurityGroupRule(req: ModifySecurityGroupRuleRequest, cb?: (error: string, rep: ModifySecurityGroupRuleResponse) => void): Promise<ModifySecurityGroupRuleResponse>;
    /**
     * DescribeNatFwInstance 获取租户所有NAT实例
     */
    DescribeNatFwInstance(req?: DescribeNatFwInstanceRequest, cb?: (error: string, rep: DescribeNatFwInstanceResponse) => void): Promise<DescribeNatFwInstanceResponse>;
    /**
     * 资产扫描
     */
    ModifyAssetScan(req: ModifyAssetScanRequest, cb?: (error: string, rep: ModifyAssetScanResponse) => void): Promise<ModifyAssetScanResponse>;
    /**
     * 防火墙开关列表
     */
    DescribeSwitchLists(req: DescribeSwitchListsRequest, cb?: (error: string, rep: DescribeSwitchListsResponse) => void): Promise<DescribeSwitchListsResponse>;
    /**
     * 创建暴露数据库白名单规则
     */
    CreateDatabaseWhiteListRules(req: CreateDatabaseWhiteListRulesRequest, cb?: (error: string, rep: CreateDatabaseWhiteListRulesResponse) => void): Promise<CreateDatabaseWhiteListRulesResponse>;
    /**
     * 创建防火墙实例和接入域名
     */
    CreateNatFwInstanceWithDomain(req: CreateNatFwInstanceWithDomainRequest, cb?: (error: string, rep: CreateNatFwInstanceWithDomainResponse) => void): Promise<CreateNatFwInstanceWithDomainResponse>;
    /**
     * 删除全部规则
     */
    DeleteSecurityGroupAllRule(req: DeleteSecurityGroupAllRuleRequest, cb?: (error: string, rep: DeleteSecurityGroupAllRuleResponse) => void): Promise<DeleteSecurityGroupAllRuleResponse>;
    /**
     * 添加互联网边界规则
     */
    AddAcRule(req: AddAcRuleRequest, cb?: (error: string, rep: AddAcRuleResponse) => void): Promise<AddAcRuleResponse>;
    /**
     * 创建新企业安全组规则
     */
    AddEnterpriseSecurityGroupRules(req: AddEnterpriseSecurityGroupRulesRequest, cb?: (error: string, rep: AddEnterpriseSecurityGroupRulesResponse) => void): Promise<AddEnterpriseSecurityGroupRulesResponse>;
    /**
     * 创建规则
     */
    CreateAcRules(req: CreateAcRulesRequest, cb?: (error: string, rep: CreateAcRulesResponse) => void): Promise<CreateAcRulesResponse>;
    /**
     * 启用停用全部规则
     */
    ModifySecurityGroupAllRuleStatus(req: ModifySecurityGroupAllRuleStatusRequest, cb?: (error: string, rep: ModifySecurityGroupAllRuleStatusResponse) => void): Promise<ModifySecurityGroupAllRuleStatusResponse>;
    /**
     * 访问控制列表
     */
    DescribeAcLists(req: DescribeAcListsRequest, cb?: (error: string, rep: DescribeAcListsResponse) => void): Promise<DescribeAcListsResponse>;
    /**
     * 创建企业安全组规则
     */
    CreateSecurityGroupRules(req: CreateSecurityGroupRulesRequest, cb?: (error: string, rep: CreateSecurityGroupRulesResponse) => void): Promise<CreateSecurityGroupRulesResponse>;
    /**
     * 删除新企业安全组规则
     */
    RemoveEnterpriseSecurityGroupRule(req: RemoveEnterpriseSecurityGroupRuleRequest, cb?: (error: string, rep: RemoveEnterpriseSecurityGroupRuleResponse) => void): Promise<RemoveEnterpriseSecurityGroupRuleResponse>;
    /**
     * 查询规则列表概况
     */
    DescribeRuleOverview(req: DescribeRuleOverviewRequest, cb?: (error: string, rep: DescribeRuleOverviewResponse) => void): Promise<DescribeRuleOverviewResponse>;
    /**
     * ip防护状态查询
     */
    DescribeIPStatusList(req: DescribeIPStatusListRequest, cb?: (error: string, rep: DescribeIPStatusListResponse) => void): Promise<DescribeIPStatusListResponse>;
    /**
     * DescribeTLogInfo告警中心概况

     */
    DescribeTLogInfo(req: DescribeTLogInfoRequest, cb?: (error: string, rep: DescribeTLogInfoResponse) => void): Promise<DescribeTLogInfoResponse>;
    /**
     * 同步资产-互联网&VPC（新）
     */
    ModifyRunSyncAsset(req: ModifyRunSyncAssetRequest, cb?: (error: string, rep: ModifyRunSyncAssetResponse) => void): Promise<ModifyRunSyncAssetResponse>;
    /**
     * nat 防火墙VPC DNS 开关切换
     */
    ModifyNatFwVpcDnsSwitch(req: ModifyNatFwVpcDnsSwitchRequest, cb?: (error: string, rep: ModifyNatFwVpcDnsSwitchResponse) => void): Promise<ModifyNatFwVpcDnsSwitchResponse>;
    /**
     * 单个修改VPC火墙开关
     */
    ModifyVPCSwitchStatus(req: ModifyVPCSwitchStatusRequest, cb?: (error: string, rep: ModifyVPCSwitchStatusResponse) => void): Promise<ModifyVPCSwitchStatusResponse>;
    /**
     * VPC防火墙一键开关
     */
    ModifyAllVPCSwitchStatus(req: ModifyAllVPCSwitchStatusRequest, cb?: (error: string, rep: ModifyAllVPCSwitchStatusResponse) => void): Promise<ModifyAllVPCSwitchStatusResponse>;
    /**
     * 查询新企业安全组规则
     */
    DescribeEnterpriseSecurityGroupRule(req: DescribeEnterpriseSecurityGroupRuleRequest, cb?: (error: string, rep: DescribeEnterpriseSecurityGroupRuleResponse) => void): Promise<DescribeEnterpriseSecurityGroupRuleResponse>;
    /**
     * 支持对拦截列表、忽略列表如下操作：
批量增加拦截IP、忽略IP/域名
批量删除拦截IP、忽略IP/域名
批量修改拦截IP、忽略IP/域名生效事件
     */
    ModifyBlockIgnoreList(req: ModifyBlockIgnoreListRequest, cb?: (error: string, rep: ModifyBlockIgnoreListResponse) => void): Promise<ModifyBlockIgnoreListResponse>;
    /**
     * 删除防火墙实例
     */
    DeleteVpcInstance(req?: DeleteVpcInstanceRequest, cb?: (error: string, rep: DeleteVpcInstanceResponse) => void): Promise<DeleteVpcInstanceResponse>;
    /**
     * DescribeGuideScanInfo新手引导扫描接口信息
     */
    DescribeGuideScanInfo(req?: DescribeGuideScanInfoRequest, cb?: (error: string, rep: DescribeGuideScanInfoResponse) => void): Promise<DescribeGuideScanInfoResponse>;
    /**
     * DescribeUnHandleEventTabList 告警中心伪攻击链事件未处置接口

     */
    DescribeUnHandleEventTabList(req: DescribeUnHandleEventTabListRequest, cb?: (error: string, rep: DescribeUnHandleEventTabListResponse) => void): Promise<DescribeUnHandleEventTabListResponse>;
    /**
     * 设置防火墙实例弹性公网ip，目前仅支持新增模式的防火墙实例
     */
    SetNatFwEip(req: SetNatFwEipRequest, cb?: (error: string, rep: SetNatFwEipResponse) => void): Promise<SetNatFwEipResponse>;
    /**
     * DescribeSourceAsset-查询资产组全部资产信息

     */
    DescribeSourceAsset(req: DescribeSourceAssetRequest, cb?: (error: string, rep: DescribeSourceAssetResponse) => void): Promise<DescribeSourceAssetResponse>;
    /**
     * DeleteResourceGroup-资产中心资产组删除
     */
    DeleteResourceGroup(req: DeleteResourceGroupRequest, cb?: (error: string, rep: DeleteResourceGroupResponse) => void): Promise<DeleteResourceGroupResponse>;
    /**
     * 创建防火墙实例
     */
    CreateNatFwInstance(req: CreateNatFwInstanceRequest, cb?: (error: string, rep: CreateNatFwInstanceResponse) => void): Promise<CreateNatFwInstanceResponse>;
    /**
     * 配置防火墙Dnat规则
     */
    SetNatFwDnatRule(req: SetNatFwDnatRuleRequest, cb?: (error: string, rep: SetNatFwDnatRuleResponse) => void): Promise<SetNatFwDnatRuleResponse>;
    /**
     * 启用停用全部规则
     */
    ModifyAllRuleStatus(req: ModifyAllRuleStatusRequest, cb?: (error: string, rep: ModifyAllRuleStatusResponse) => void): Promise<ModifyAllRuleStatusResponse>;
    /**
     * 修改规则执行顺序
     */
    ModifySequenceRules(req: ModifySequenceRulesRequest, cb?: (error: string, rep: ModifySequenceRulesResponse) => void): Promise<ModifySequenceRulesResponse>;
    /**
     * 删除互联网边界规则
     */
    RemoveAcRule(req: RemoveAcRuleRequest, cb?: (error: string, rep: RemoveAcRuleResponse) => void): Promise<RemoveAcRuleResponse>;
    /**
     * ModifyBlockTop取消置顶接口
     */
    ModifyBlockTop(req: ModifyBlockTopRequest, cb?: (error: string, rep: ModifyBlockTopResponse) => void): Promise<ModifyBlockTopResponse>;
    /**
     * 查询规则表状态
     */
    DescribeTableStatus(req: DescribeTableStatusRequest, cb?: (error: string, rep: DescribeTableStatusResponse) => void): Promise<DescribeTableStatusResponse>;
    /**
     * GetNatInstance 获取租户所有NAT实例及实例卡片信息
     */
    DescribeNatFwInstancesInfo(req: DescribeNatFwInstancesInfoRequest, cb?: (error: string, rep: DescribeNatFwInstancesInfoResponse) => void): Promise<DescribeNatFwInstancesInfoResponse>;
    /**
     * 防火墙实例重新选择vpc或nat
     */
    ModifyNatFwReSelect(req: ModifyNatFwReSelectRequest, cb?: (error: string, rep: ModifyNatFwReSelectResponse) => void): Promise<ModifyNatFwReSelectResponse>;
    /**
     * DescribeResourceGroup资产中心资产树信息
     */
    DescribeResourceGroup(req: DescribeResourceGroupRequest, cb?: (error: string, rep: DescribeResourceGroupResponse) => void): Promise<DescribeResourceGroupResponse>;
    /**
     * 查询防火墙弹性公网IP
     */
    DescribeCfwEips(req: DescribeCfwEipsRequest, cb?: (error: string, rep: DescribeCfwEipsResponse) => void): Promise<DescribeCfwEipsResponse>;
    /**
     * 同步资产-互联网&VPC
     */
    RunSyncAsset(req: RunSyncAssetRequest, cb?: (error: string, rep: RunSyncAssetResponse) => void): Promise<RunSyncAssetResponse>;
    /**
     * 修改规则
     */
    ModifyAcRule(req: ModifyAcRuleRequest, cb?: (error: string, rep: ModifyAcRuleResponse) => void): Promise<ModifyAcRuleResponse>;
    /**
     * 删除规则
     */
    DeleteSecurityGroupRule(req: DeleteSecurityGroupRuleRequest, cb?: (error: string, rep: DeleteSecurityGroupRuleResponse) => void): Promise<DeleteSecurityGroupRuleResponse>;
    /**
     * 企业安全组规则快速排序
     */
    ModifySecurityGroupSequenceRules(req: ModifySecurityGroupSequenceRulesRequest, cb?: (error: string, rep: ModifySecurityGroupSequenceRulesResponse) => void): Promise<ModifySecurityGroupSequenceRulesResponse>;
    /**
     * 修改NAT防火墙开关
     */
    ModifyNatFwSwitch(req: ModifyNatFwSwitchRequest, cb?: (error: string, rep: ModifyNatFwSwitchResponse) => void): Promise<ModifyNatFwSwitchResponse>;
    /**
     * DescribeTLogIpList告警中心IP柱形图

     */
    DescribeTLogIpList(req: DescribeTLogIpListRequest, cb?: (error: string, rep: DescribeTLogIpListResponse) => void): Promise<DescribeTLogIpListResponse>;
    /**
     * 启用停用单条企业安全组规则
     */
    ModifySecurityGroupItemRuleStatus(req: ModifySecurityGroupItemRuleStatusRequest, cb?: (error: string, rep: ModifySecurityGroupItemRuleStatusResponse) => void): Promise<ModifySecurityGroupItemRuleStatusResponse>;
    /**
     * 一键开启和关闭
     */
    ModifyAllSwitchStatus(req: ModifyAllSwitchStatusRequest, cb?: (error: string, rep: ModifyAllSwitchStatusResponse) => void): Promise<ModifyAllSwitchStatusResponse>;
    /**
     * 销毁防火墙实例
     */
    DeleteNatFwInstance(req: DeleteNatFwInstanceRequest, cb?: (error: string, rep: DeleteNatFwInstanceResponse) => void): Promise<DeleteNatFwInstanceResponse>;
    /**
     * 单个修改互联网边界防火墙开关
     */
    ModifyPublicIPSwitchStatus(req: ModifyPublicIPSwitchStatusRequest, cb?: (error: string, rep: ModifyPublicIPSwitchStatusResponse) => void): Promise<ModifyPublicIPSwitchStatusResponse>;
    /**
     * 同步资产状态查询-互联网&VPC
     */
    DescribeSyncAssetStatus(req: DescribeSyncAssetStatusRequest, cb?: (error: string, rep: DescribeSyncAssetStatusResponse) => void): Promise<DescribeSyncAssetStatusResponse>;
    /**
     * 防火墙垂直扩容
     */
    ExpandCfwVertical(req: ExpandCfwVerticalRequest, cb?: (error: string, rep: ExpandCfwVerticalResponse) => void): Promise<ExpandCfwVerticalResponse>;
    /**
     * DescribeBlockByIpTimesList 告警中心阻断IP折线图

     */
    DescribeBlockByIpTimesList(req: DescribeBlockByIpTimesListRequest, cb?: (error: string, rep: DescribeBlockByIpTimesListResponse) => void): Promise<DescribeBlockByIpTimesListResponse>;
    /**
     * 获取地址模板列表
     */
    DescribeAddrTemplateList(req: DescribeAddrTemplateListRequest, cb?: (error: string, rep: DescribeAddrTemplateListResponse) => void): Promise<DescribeAddrTemplateListResponse>;
    /**
     * DescribeBlockStaticList 告警中心柱形图

     */
    DescribeBlockStaticList(req: DescribeBlockStaticListRequest, cb?: (error: string, rep: DescribeBlockStaticListResponse) => void): Promise<DescribeBlockStaticListResponse>;
    /**
     * 修改单个防火墙开关
     */
    ModifyItemSwitchStatus(req: ModifyItemSwitchStatusRequest, cb?: (error: string, rep: ModifyItemSwitchStatusResponse) => void): Promise<ModifyItemSwitchStatusResponse>;
}
