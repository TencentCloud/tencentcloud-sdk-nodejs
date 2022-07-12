import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDataResponse, DescribeMatchCodesRequest, DeleteRuleResponse, ModifyMatchRequest, StartMatchingResponse, CreateMatchRequest, DescribeMatchingProgressRequest, ModifyMatchResponse, CreateMatchResponse, DescribeMatchesRequest, DeleteRuleRequest, DescribeRulesRequest, DescribeTokenResponse, DescribeRuleResponse, DescribeMatchRequest, ModifyRuleRequest, DescribeTokenRequest, DescribeDataRequest, CreateRuleRequest, DescribeRuleRequest, DescribeMatchResponse, ModifyTokenResponse, DeleteMatchResponse, CancelMatchingRequest, StartMatchingBackfillRequest, CancelMatchingResponse, DescribeMatchCodesResponse, CreateRuleResponse, DescribeRulesResponse, ModifyTokenRequest, StartMatchingBackfillResponse, DescribeMatchesResponse, StartMatchingRequest, DeleteMatchRequest, DescribeMatchingProgressResponse, ModifyRuleResponse } from "./gpm_models";
/**
 * gpm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

取消匹配。
     */
    CancelMatching(req: CancelMatchingRequest, cb?: (error: string, rep: CancelMatchingResponse) => void): Promise<CancelMatchingResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

修改匹配Token。
     */
    ModifyToken(req: ModifyTokenRequest, cb?: (error: string, rep: ModifyTokenResponse) => void): Promise<ModifyTokenResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

查询匹配进度。
     */
    DescribeMatchingProgress(req: DescribeMatchingProgressRequest, cb?: (error: string, rep: DescribeMatchingProgressResponse) => void): Promise<DescribeMatchingProgressResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

创建匹配
     */
    CreateMatch(req: CreateMatchRequest, cb?: (error: string, rep: CreateMatchResponse) => void): Promise<CreateMatchResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

修改匹配
     */
    ModifyMatch(req: ModifyMatchRequest, cb?: (error: string, rep: ModifyMatchResponse) => void): Promise<ModifyMatchResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

查询匹配Token，Token用于push消息验证。
     */
    DescribeToken(req: DescribeTokenRequest, cb?: (error: string, rep: DescribeTokenResponse) => void): Promise<DescribeTokenResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

查询规则详情
     */
    DescribeRule(req: DescribeRuleRequest, cb?: (error: string, rep: DescribeRuleResponse) => void): Promise<DescribeRuleResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

通过调用StartMatchingBackfill，用户可以传入一个回填的匹配请求，GPM为回填请求搜索符合条件的ticket并形成一个新的match。
     */
    StartMatchingBackfill(req: StartMatchingBackfillRequest, cb?: (error: string, rep: StartMatchingBackfillResponse) => void): Promise<StartMatchingBackfillResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

查询匹配详情
     */
    DescribeMatch(req: DescribeMatchRequest, cb?: (error: string, rep: DescribeMatchResponse) => void): Promise<DescribeMatchResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

删除规则
     */
    DeleteRule(req: DeleteRuleRequest, cb?: (error: string, rep: DeleteRuleResponse) => void): Promise<DeleteRuleResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

删除匹配
     */
    DeleteMatch(req: DeleteMatchRequest, cb?: (error: string, rep: DeleteMatchResponse) => void): Promise<DeleteMatchResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

分页查询规则集列表
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

修改规则（描述、标签）
     */
    ModifyRule(req: ModifyRuleRequest, cb?: (error: string, rep: ModifyRuleResponse) => void): Promise<ModifyRuleResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

创建规则
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

支持传入一个玩家或多个玩家发起匹配，在同一个请求内的玩家将被分到同一个对局。
     */
    StartMatching(req: StartMatchingRequest, cb?: (error: string, rep: StartMatchingResponse) => void): Promise<StartMatchingResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

分页查询匹配列表
     */
    DescribeMatches(req: DescribeMatchesRequest, cb?: (error: string, rep: DescribeMatchesResponse) => void): Promise<DescribeMatchesResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

分页查询匹配Code
     */
    DescribeMatchCodes(req: DescribeMatchCodesRequest, cb?: (error: string, rep: DescribeMatchCodesResponse) => void): Promise<DescribeMatchCodesResponse>;
    /**
     * 此接口无法使用，游戏玩家匹配GPM已于6.1正式下架，感谢您的支持

统计数据
     */
    DescribeData(req: DescribeDataRequest, cb?: (error: string, rep: DescribeDataResponse) => void): Promise<DescribeDataResponse>;
}
