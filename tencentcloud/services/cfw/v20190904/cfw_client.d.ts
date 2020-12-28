import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeVpcRuleOverviewResponse, DescribeSyncAssetStatusResponse, ModifyAllSwitchStatusRequest, ModifyAllRuleStatusResponse, DescribeRuleOverviewResponse, CreateSecurityGroupApiRulesRequest, DescribeSecurityGroupListResponse, ModifyItemSwitchStatusResponse, CreateSecurityGroupApiRulesResponse, ModifyAcRuleResponse, ModifySequenceRulesResponse, DescribeTableStatusResponse, DeleteAcRuleResponse, ModifySequenceRulesRequest, DescribeSwitchListsResponse, DescribeSyncAssetStatusRequest, DeleteAllAccessControlRuleRequest, RunSyncAssetResponse, RunSyncAssetRequest, DeleteSecurityGroupRuleRequest, ModifyTableStatusResponse, ModifyItemSwitchStatusRequest, DescribeRuleOverviewRequest, DescribeVpcRuleOverviewRequest, DescribeAcListsRequest, DescribeTableStatusRequest, CreateAcRulesResponse, DescribeAssociatedInstanceListResponse, DescribeAssociatedInstanceListRequest, ModifyAcRuleRequest, DescribeNatRuleOverviewResponse, DeleteAcRuleRequest, DeleteAllAccessControlRuleResponse, DeleteSecurityGroupAllRuleResponse, ModifySecurityGroupAllRuleStatusResponse, CreateAcRulesRequest, DescribeSecurityGroupListRequest, DescribeSwitchListsRequest, ModifyTableStatusRequest, DeleteSecurityGroupRuleResponse, DescribeNatRuleOverviewRequest, ModifySecurityGroupAllRuleStatusRequest, DeleteSecurityGroupAllRuleRequest, ModifyAllRuleStatusRequest, DescribeAcListsResponse, ModifyAllSwitchStatusResponse } from "./cfw_models";
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
     * 修改规则执行顺序
     */
    ModifySequenceRules(req: ModifySequenceRulesRequest, cb?: (error: string, rep: ModifySequenceRulesResponse) => void): Promise<ModifySequenceRulesResponse>;
    /**
     * 一键开启和关闭
     */
    ModifyAllSwitchStatus(req: ModifyAllSwitchStatusRequest, cb?: (error: string, rep: ModifyAllSwitchStatusResponse) => void): Promise<ModifyAllSwitchStatusResponse>;
    /**
     * 启用停用全部规则
     */
    ModifyAllRuleStatus(req: ModifyAllRuleStatusRequest, cb?: (error: string, rep: ModifyAllRuleStatusResponse) => void): Promise<ModifyAllRuleStatusResponse>;
    /**
     * 查询规则表状态
     */
    DescribeTableStatus(req: DescribeTableStatusRequest, cb?: (error: string, rep: DescribeTableStatusResponse) => void): Promise<DescribeTableStatusResponse>;
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
     * 访问控制列表
     */
    DescribeAcLists(req: DescribeAcListsRequest, cb?: (error: string, rep: DescribeAcListsResponse) => void): Promise<DescribeAcListsResponse>;
    /**
     * 全部删除规则
     */
    DeleteAllAccessControlRule(req: DeleteAllAccessControlRuleRequest, cb?: (error: string, rep: DeleteAllAccessControlRuleResponse) => void): Promise<DeleteAllAccessControlRuleResponse>;
    /**
     * 修改单个防火墙开关
     */
    ModifyItemSwitchStatus(req: ModifyItemSwitchStatusRequest, cb?: (error: string, rep: ModifyItemSwitchStatusResponse) => void): Promise<ModifyItemSwitchStatusResponse>;
}
