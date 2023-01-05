import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeTagsResponse, DescribeLinkResponse, DeleteRuleResponse, CreateTacticRequest, DeleteTagRequest, DescribeOrdersResponse, ModifyTacticRequest, DeleteRuleRequest, DescribeRulesRequest, ModifyLinkAdvancedLogRequest, DescribeRuleResponse, ModifyRuleRequest, ModifyTagResponse, CreateRuleRequest, DescribeRuleRequest, ModifyRuleStatusResponse, ModifyLinkTacticResponse, DescribeTagsRequest, DescribeLinksResponse, ModifyTacticResponse, ModifyRuleStatusRequest, DescribeTacticsRequest, RenewLinkInfoRequest, CreateTagRequest, DeleteTacticResponse, DeleteTacticRequest, DescribeTacticResponse, ModifyLinkTacticRequest, DescribeTacticRequest, CreateTagResponse, DescribeLinksRequest, CreateRuleResponse, DescribeTacticsResponse, RenewLinkInfoResponse, DescribeRulesResponse, DeleteTagResponse, ModifyLinkTeleResponse, ModifyTagRequest, CreateTacticResponse, DescribeOrdersRequest, ModifyLinkTeleRequest, DescribeLinkRequest, ModifyLinkAdvancedLogResponse, ModifyRuleResponse } from "./hasim_models";
/**
 * hasim client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除策略
     */
    DeleteTactic(req: DeleteTacticRequest, cb?: (error: string, rep: DeleteTacticResponse) => void): Promise<DeleteTacticResponse>;
    /**
     * 查询订单列表
     */
    DescribeOrders(req: DescribeOrdersRequest, cb?: (error: string, rep: DescribeOrdersResponse) => void): Promise<DescribeOrdersResponse>;
    /**
     * 查询云兔切换策略列表
     */
    DescribeTactics(req: DescribeTacticsRequest, cb?: (error: string, rep: DescribeTacticsResponse) => void): Promise<DescribeTacticsResponse>;
    /**
     * 创建自动化规则
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 删除标签
     */
    DeleteTag(req: DeleteTagRequest, cb?: (error: string, rep: DeleteTagResponse) => void): Promise<DeleteTagResponse>;
    /**
     * 查询云兔连接列表
     */
    DescribeLinks(req: DescribeLinksRequest, cb?: (error: string, rep: DescribeLinksResponse) => void): Promise<DescribeLinksResponse>;
    /**
     * 删除自动化规则
     */
    DeleteRule(req: DeleteRuleRequest, cb?: (error: string, rep: DeleteRuleResponse) => void): Promise<DeleteRuleResponse>;
    /**
     * 编辑自动化规则状态
     */
    ModifyRuleStatus(req: ModifyRuleStatusRequest, cb?: (error: string, rep: ModifyRuleStatusResponse) => void): Promise<ModifyRuleStatusResponse>;
    /**
     * 编辑云兔高级日志状态
     */
    ModifyLinkAdvancedLog(req: ModifyLinkAdvancedLogRequest, cb?: (error: string, rep: ModifyLinkAdvancedLogResponse) => void): Promise<ModifyLinkAdvancedLogResponse>;
    /**
     * 创建标签
     */
    CreateTag(req: CreateTagRequest, cb?: (error: string, rep: CreateTagResponse) => void): Promise<CreateTagResponse>;
    /**
     * 修改云兔运营商
     */
    ModifyLinkTele(req: ModifyLinkTeleRequest, cb?: (error: string, rep: ModifyLinkTeleResponse) => void): Promise<ModifyLinkTeleResponse>;
    /**
     * 查询自动化规则
     */
    DescribeRule(req: DescribeRuleRequest, cb?: (error: string, rep: DescribeRuleResponse) => void): Promise<DescribeRuleResponse>;
    /**
     * 查询标签列表
     */
    DescribeTags(req: DescribeTagsRequest, cb?: (error: string, rep: DescribeTagsResponse) => void): Promise<DescribeTagsResponse>;
    /**
     * 编辑自动化规则
     */
    ModifyRule(req: ModifyRuleRequest, cb?: (error: string, rep: ModifyRuleResponse) => void): Promise<ModifyRuleResponse>;
    /**
     * 查询云兔连接详细信息
     */
    DescribeLink(req: DescribeLinkRequest, cb?: (error: string, rep: DescribeLinkResponse) => void): Promise<DescribeLinkResponse>;
    /**
     * 创建云兔切换策略
     */
    CreateTactic(req: CreateTacticRequest, cb?: (error: string, rep: CreateTacticResponse) => void): Promise<CreateTacticResponse>;
    /**
     * 刷新云兔连接信息同步
     */
    RenewLinkInfo(req: RenewLinkInfoRequest, cb?: (error: string, rep: RenewLinkInfoResponse) => void): Promise<RenewLinkInfoResponse>;
    /**
     * 修改云兔切换策略
     */
    ModifyTactic(req: ModifyTacticRequest, cb?: (error: string, rep: ModifyTacticResponse) => void): Promise<ModifyTacticResponse>;
    /**
     * 查询云兔切换策略信息
     */
    DescribeTactic(req: DescribeTacticRequest, cb?: (error: string, rep: DescribeTacticResponse) => void): Promise<DescribeTacticResponse>;
    /**
     * 查询自动化规则列表
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 编辑云兔策略
     */
    ModifyLinkTactic(req: ModifyLinkTacticRequest, cb?: (error: string, rep: ModifyLinkTacticResponse) => void): Promise<ModifyLinkTacticResponse>;
    /**
     * 编辑标签
     */
    ModifyTag(req: ModifyTagRequest, cb?: (error: string, rep: ModifyTagResponse) => void): Promise<ModifyTagResponse>;
}
