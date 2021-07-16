import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeVpcRuleOverviewResponse, SetNatFwDnatRuleRequest, DescribeSyncAssetStatusResponse, ModifyAllSwitchStatusRequest, DescribeUnHandleEventTabListResponse, ModifyAllRuleStatusResponse, DescribeGuideScanInfoRequest, DescribeRuleOverviewResponse, DescribeBlockByIpTimesListResponse, ModifySequenceRulesRequest, DescribeBlockByIpTimesListRequest, ExpandCfwVerticalResponse, DescribeBlockStaticListRequest, ModifyItemSwitchStatusRequest, ModifyItemSwitchStatusResponse, DescribeTableStatusResponse, CreateSecurityGroupApiRulesResponse, ModifyAcRuleResponse, ModifySequenceRulesResponse, ModifyBlockTopRequest, DescribeTLogInfoResponse, DeleteAcRuleResponse, DescribeTLogInfoRequest, DescribeSecurityGroupListResponse, DescribeSwitchListsResponse, DescribeSyncAssetStatusRequest, ModifySecurityGroupAllRuleStatusResponse, DescribeCfwEipsResponse, DeleteAllAccessControlRuleRequest, RunSyncAssetResponse, RunSyncAssetRequest, DeleteSecurityGroupRuleRequest, DescribeTLogIpListRequest, ModifySecurityGroupAllRuleStatusRequest, SetNatFwDnatRuleResponse, DescribeCfwEipsRequest, DescribeRuleOverviewRequest, DescribeVpcRuleOverviewRequest, DescribeAcListsRequest, DescribeTableStatusRequest, CreateAcRulesResponse, DescribeAssociatedInstanceListResponse, ModifyBlockTopResponse, DescribeAssociatedInstanceListRequest, ModifyAcRuleRequest, DescribeNatRuleOverviewResponse, ModifyTableStatusResponse, DeleteAcRuleRequest, DeleteAllAccessControlRuleResponse, ModifyBlockIgnoreListResponse, DeleteSecurityGroupAllRuleResponse, ExpandCfwVerticalRequest, ModifyAllRuleStatusRequest, ModifyBlockIgnoreListRequest, CreateAcRulesRequest, DescribeSecurityGroupListRequest, DescribeSwitchListsRequest, ModifyTableStatusRequest, DeleteSecurityGroupRuleResponse, DescribeNatRuleOverviewRequest, DescribeUnHandleEventTabListRequest, CreateSecurityGroupApiRulesRequest, DeleteSecurityGroupAllRuleRequest, DescribeTLogIpListResponse, DescribeGuideScanInfoResponse, DescribeAcListsResponse, DescribeBlockStaticListResponse, ModifyAllSwitchStatusResponse } from "./cfw_models";
/**
 * cfw client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * nat规则列表概况
     */
    DescribeNatRuleOverview(req: DescribeNatRuleOverviewRequest, cb?: (error: string, rep: DescribeNatRuleOverviewResponse) => void): Promise<DescribeNatRuleOverviewResponse>;
    /**
     * 修改规则表状态
     */
    ModifyTableStatus(req: ModifyTableStatusRequest, cb?: (error: string, rep: ModifyTableStatusResponse) => void): Promise<ModifyTableStatusResponse>;
    /**
     * 获取安全组关联实例列表
     */
    DescribeAssociatedInstanceList(req: DescribeAssociatedInstanceListRequest, cb?: (error: string, rep: DescribeAssociatedInstanceListResponse) => void): Promise<DescribeAssociatedInstanceListResponse>;
    /**
     * vpc规则列表概况
     */
    DescribeVpcRuleOverview(req: DescribeVpcRuleOverviewRequest, cb?: (error: string, rep: DescribeVpcRuleOverviewResponse) => void): Promise<DescribeVpcRuleOverviewResponse>;
    /**
     * 删除规则
     */
    DeleteAcRule(req: DeleteAcRuleRequest, cb?: (error: string, rep: DeleteAcRuleResponse) => void): Promise<DeleteAcRuleResponse>;
    /**
     * 创建安全组API规则
     */
    CreateSecurityGroupApiRules(req: CreateSecurityGroupApiRulesRequest, cb?: (error: string, rep: CreateSecurityGroupApiRulesResponse) => void): Promise<CreateSecurityGroupApiRulesResponse>;
    /**
     * 同步资产状态查询-互联网&VPC
     */
    DescribeSyncAssetStatus(req: DescribeSyncAssetStatusRequest, cb?: (error: string, rep: DescribeSyncAssetStatusResponse) => void): Promise<DescribeSyncAssetStatusResponse>;
    /**
     * 查询安全组规则列表
     */
    DescribeSecurityGroupList(req: DescribeSecurityGroupListRequest, cb?: (error: string, rep: DescribeSecurityGroupListResponse) => void): Promise<DescribeSecurityGroupListResponse>;
    /**
     * 删除全部规则
     */
    DeleteSecurityGroupAllRule(req: DeleteSecurityGroupAllRuleRequest, cb?: (error: string, rep: DeleteSecurityGroupAllRuleResponse) => void): Promise<DeleteSecurityGroupAllRuleResponse>;
    /**
     * 创建规则
     */
    CreateAcRules(req: CreateAcRulesRequest, cb?: (error: string, rep: CreateAcRulesResponse) => void): Promise<CreateAcRulesResponse>;
    /**
     * 启用停用全部规则
     */
    ModifySecurityGroupAllRuleStatus(req: ModifySecurityGroupAllRuleStatusRequest, cb?: (error: string, rep: ModifySecurityGroupAllRuleStatusResponse) => void): Promise<ModifySecurityGroupAllRuleStatusResponse>;
    /**
     * 防火墙开关列表
     */
    DescribeSwitchLists(req: DescribeSwitchListsRequest, cb?: (error: string, rep: DescribeSwitchListsResponse) => void): Promise<DescribeSwitchListsResponse>;
    /**
     * 查询规则列表概况
     */
    DescribeRuleOverview(req: DescribeRuleOverviewRequest, cb?: (error: string, rep: DescribeRuleOverviewResponse) => void): Promise<DescribeRuleOverviewResponse>;
    /**
     * DescribeTLogInfo告警中心概况

     */
    DescribeTLogInfo(req: DescribeTLogInfoRequest, cb?: (error: string, rep: DescribeTLogInfoResponse) => void): Promise<DescribeTLogInfoResponse>;
    /**
     * 支持对拦截列表、忽略列表如下操作：
批量增加拦截IP、忽略IP/域名
批量删除拦截IP、忽略IP/域名
批量修改拦截IP、忽略IP/域名生效事件
     */
    ModifyBlockIgnoreList(req: ModifyBlockIgnoreListRequest, cb?: (error: string, rep: ModifyBlockIgnoreListResponse) => void): Promise<ModifyBlockIgnoreListResponse>;
    /**
     * DescribeGuideScanInfo新手引导扫描接口信息
     */
    DescribeGuideScanInfo(req?: DescribeGuideScanInfoRequest, cb?: (error: string, rep: DescribeGuideScanInfoResponse) => void): Promise<DescribeGuideScanInfoResponse>;
    /**
     * DescribeUnHandleEventTabList 告警中心伪攻击链事件未处置接口

     */
    DescribeUnHandleEventTabList(req: DescribeUnHandleEventTabListRequest, cb?: (error: string, rep: DescribeUnHandleEventTabListResponse) => void): Promise<DescribeUnHandleEventTabListResponse>;
    /**
     * 修改规则执行顺序
     */
    ModifySequenceRules(req: ModifySequenceRulesRequest, cb?: (error: string, rep: ModifySequenceRulesResponse) => void): Promise<ModifySequenceRulesResponse>;
    /**
     * 一键开启和关闭
     */
    ModifyAllSwitchStatus(req: ModifyAllSwitchStatusRequest, cb?: (error: string, rep: ModifyAllSwitchStatusResponse) => void): Promise<ModifyAllSwitchStatusResponse>;
    /**
     * 配置防火墙Dnat规则
     */
    SetNatFwDnatRule(req: SetNatFwDnatRuleRequest, cb?: (error: string, rep: SetNatFwDnatRuleResponse) => void): Promise<SetNatFwDnatRuleResponse>;
    /**
     * 启用停用全部规则
     */
    ModifyAllRuleStatus(req: ModifyAllRuleStatusRequest, cb?: (error: string, rep: ModifyAllRuleStatusResponse) => void): Promise<ModifyAllRuleStatusResponse>;
    /**
     * ModifyBlockTop取消置顶接口
     */
    ModifyBlockTop(req: ModifyBlockTopRequest, cb?: (error: string, rep: ModifyBlockTopResponse) => void): Promise<ModifyBlockTopResponse>;
    /**
     * 查询规则表状态
     */
    DescribeTableStatus(req: DescribeTableStatusRequest, cb?: (error: string, rep: DescribeTableStatusResponse) => void): Promise<DescribeTableStatusResponse>;
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
     * DescribeTLogIpList告警中心IP柱形图

     */
    DescribeTLogIpList(req: DescribeTLogIpListRequest, cb?: (error: string, rep: DescribeTLogIpListResponse) => void): Promise<DescribeTLogIpListResponse>;
    /**
     * 访问控制列表
     */
    DescribeAcLists(req: DescribeAcListsRequest, cb?: (error: string, rep: DescribeAcListsResponse) => void): Promise<DescribeAcListsResponse>;
    /**
     * 全部删除规则
     */
    DeleteAllAccessControlRule(req: DeleteAllAccessControlRuleRequest, cb?: (error: string, rep: DeleteAllAccessControlRuleResponse) => void): Promise<DeleteAllAccessControlRuleResponse>;
    /**
     * 防火墙垂直扩容
     */
    ExpandCfwVertical(req: ExpandCfwVerticalRequest, cb?: (error: string, rep: ExpandCfwVerticalResponse) => void): Promise<ExpandCfwVerticalResponse>;
    /**
     * DescribeBlockByIpTimesList 告警中心阻断IP折线图

     */
    DescribeBlockByIpTimesList(req: DescribeBlockByIpTimesListRequest, cb?: (error: string, rep: DescribeBlockByIpTimesListResponse) => void): Promise<DescribeBlockByIpTimesListResponse>;
    /**
     * DescribeBlockStaticList 告警中心柱形图

     */
    DescribeBlockStaticList(req: DescribeBlockStaticListRequest, cb?: (error: string, rep: DescribeBlockStaticListResponse) => void): Promise<DescribeBlockStaticListResponse>;
    /**
     * 修改单个防火墙开关
     */
    ModifyItemSwitchStatus(req: ModifyItemSwitchStatusRequest, cb?: (error: string, rep: ModifyItemSwitchStatusResponse) => void): Promise<ModifyItemSwitchStatusResponse>;
}
