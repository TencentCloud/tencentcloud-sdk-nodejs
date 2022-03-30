import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeAgentDealsCacheRequest, DescribeSalesmansRequest, DescribeAgentAuditedClientsRequest, RemovePayRelationForClientRequest, AgentPayDealsRequest, DescribeAgentClientGradeResponse, DescribeAgentDealsByCacheResponse, DescribeClientBalanceResponse, DescribeAgentSelfPayDealsResponse, DescribeAgentPayDealsV2Response, AgentTransferMoneyRequest, DescribeClientBalanceRequest, DescribeAgentPayDealsV2Request, RemovePayRelationForClientResponse, DescribeRebateInfosRequest, CreatePayRelationForClientResponse, DescribeAgentAuditedClientsResponse, DescribeAgentBillsResponse, DescribeAgentPayDealsRequest, AuditApplyClientRequest, ModifyClientRemarkResponse, DescribeAgentClientsResponse, DescribeAgentClientsRequest, DescribeAgentSelfPayDealsV2Request, DescribeSalesmansResponse, DescribeUnbindClientListRequest, DescribeAgentPayDealsResponse, DescribeAgentDealsByCacheRequest, DescribeAgentSelfPayDealsRequest, ModifyClientRemarkRequest, CreatePayRelationForClientRequest, AgentTransferMoneyResponse, DescribeUnbindClientListResponse, DescribeAgentSelfPayDealsV2Response, AuditApplyClientResponse, DescribeAgentDealsCacheResponse, DescribeAgentBillsRequest, AgentPayDealsResponse, DescribeClientBalanceNewRequest, DescribeRebateInfosResponse, DescribeAgentClientGradeRequest, DescribeClientBalanceNewResponse } from "./partners_models";
/**
 * partners client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 【该接口将逐步下线，请切换使用升级版本DescribeAgentSelfPayDealsV2】可以查询代理商下指定客户的自付订单
     */
    DescribeAgentSelfPayDeals(req: DescribeAgentSelfPayDealsRequest, cb?: (error: string, rep: DescribeAgentSelfPayDealsResponse) => void): Promise<DescribeAgentSelfPayDealsResponse>;
    /**
     * 【该接口将逐步下线，请切换使用升级版本DescribeAgentDealsByCache】代理商拉取缓存的全量客户订单
     */
    DescribeAgentDealsCache(req: DescribeAgentDealsCacheRequest, cb?: (error: string, rep: DescribeAgentDealsCacheResponse) => void): Promise<DescribeAgentDealsCacheResponse>;
    /**
     * 代理商可以对名下客户添加备注、修改备注
     */
    ModifyClientRemark(req: ModifyClientRemarkRequest, cb?: (error: string, rep: ModifyClientRemarkResponse) => void): Promise<ModifyClientRemarkResponse>;
    /**
     * 查询代理商名下指定代客的自付订单
     */
    DescribeAgentSelfPayDealsV2(req: DescribeAgentSelfPayDealsV2Request, cb?: (error: string, rep: DescribeAgentSelfPayDealsV2Response) => void): Promise<DescribeAgentSelfPayDealsV2Response>;
    /**
     * 代理商支付订单接口，支持自付/代付
     */
    AgentPayDeals(req: AgentPayDealsRequest, cb?: (error: string, rep: AgentPayDealsResponse) => void): Promise<AgentPayDealsResponse>;
    /**
     * 代理商可查询自己及名下代客所有业务明细
     */
    DescribeAgentBills(req: DescribeAgentBillsRequest, cb?: (error: string, rep: DescribeAgentBillsResponse) => void): Promise<DescribeAgentBillsResponse>;
    /**
     * 为合作伙伴提供转账给客户能力。仅支持合作伙伴为自己名下客户转账。
     */
    AgentTransferMoney(req: AgentTransferMoneyRequest, cb?: (error: string, rep: AgentTransferMoneyResponse) => void): Promise<AgentTransferMoneyResponse>;
    /**
     * 代理商可查询自己名下全部返佣信息
     */
    DescribeRebateInfos(req: DescribeRebateInfosRequest, cb?: (error: string, rep: DescribeRebateInfosResponse) => void): Promise<DescribeRebateInfosResponse>;
    /**
     * 代理商查询名下业务员列表信息
     */
    DescribeSalesmans(req: DescribeSalesmansRequest, cb?: (error: string, rep: DescribeSalesmansResponse) => void): Promise<DescribeSalesmansResponse>;
    /**
     * 合作伙伴为客户消除强代付关系
     */
    RemovePayRelationForClient(req: RemovePayRelationForClientRequest, cb?: (error: string, rep: RemovePayRelationForClientResponse) => void): Promise<RemovePayRelationForClientResponse>;
    /**
     * 为合作伙伴提供查询客户余额能力。调用者必须是合作伙伴，只能查询自己名下客户余额
     */
    DescribeClientBalanceNew(req: DescribeClientBalanceNewRequest, cb?: (error: string, rep: DescribeClientBalanceNewResponse) => void): Promise<DescribeClientBalanceNewResponse>;
    /**
     * 【该接口将逐步下线，请切换使用升级版本DescribeAgentPayDealsV2】可以查询代理商代付的所有订单
     */
    DescribeAgentPayDeals(req: DescribeAgentPayDealsRequest, cb?: (error: string, rep: DescribeAgentPayDealsResponse) => void): Promise<DescribeAgentPayDealsResponse>;
    /**
     * 代理商名下客户解绑记录查询接口
     */
    DescribeUnbindClientList(req: DescribeUnbindClientListRequest, cb?: (error: string, rep: DescribeUnbindClientListResponse) => void): Promise<DescribeUnbindClientListResponse>;
    /**
     * 代理商可查询自己名下待审核客户列表
     */
    DescribeAgentClients(req: DescribeAgentClientsRequest, cb?: (error: string, rep: DescribeAgentClientsResponse) => void): Promise<DescribeAgentClientsResponse>;
    /**
     * 【该接口将逐步下线，请切换使用升级版本DescribeClientBalanceNew】为合作伙伴提供查询客户余额能力。调用者必须是合作伙伴，只能查询自己名下客户余额.
     */
    DescribeClientBalance(req: DescribeClientBalanceRequest, cb?: (error: string, rep: DescribeClientBalanceResponse) => void): Promise<DescribeClientBalanceResponse>;
    /**
     * 传入代客uin，查客户级别，客户审核状态，客户实名认证状态
     */
    DescribeAgentClientGrade(req: DescribeAgentClientGradeRequest, cb?: (error: string, rep: DescribeAgentClientGradeResponse) => void): Promise<DescribeAgentClientGradeResponse>;
    /**
     * 可以查询代理商代付的所有订单
     */
    DescribeAgentPayDealsV2(req: DescribeAgentPayDealsV2Request, cb?: (error: string, rep: DescribeAgentPayDealsV2Response) => void): Promise<DescribeAgentPayDealsV2Response>;
    /**
     * 查询已审核客户列表
     */
    DescribeAgentAuditedClients(req: DescribeAgentAuditedClientsRequest, cb?: (error: string, rep: DescribeAgentAuditedClientsResponse) => void): Promise<DescribeAgentAuditedClientsResponse>;
    /**
     * 合作伙伴为客户创建强代付关系
     */
    CreatePayRelationForClient(req: CreatePayRelationForClientRequest, cb?: (error: string, rep: CreatePayRelationForClientResponse) => void): Promise<CreatePayRelationForClientResponse>;
    /**
     * 代理商可以审核其名下申请中代客
     */
    AuditApplyClient(req: AuditApplyClientRequest, cb?: (error: string, rep: AuditApplyClientResponse) => void): Promise<AuditApplyClientResponse>;
    /**
     * 供代理商拉取缓存的全量客户订单
     */
    DescribeAgentDealsByCache(req: DescribeAgentDealsByCacheRequest, cb?: (error: string, rep: DescribeAgentDealsByCacheResponse) => void): Promise<DescribeAgentDealsByCacheResponse>;
}
