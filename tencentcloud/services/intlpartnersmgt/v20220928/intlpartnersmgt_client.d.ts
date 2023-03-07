import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetCountryCodesRequest, QueryPartnerCreditResponse, QueryVoucherListByUinRequest, QueryVoucherAmountByUinResponse, AllocateCustomerCreditRequest, GetCountryCodesResponse, QueryCustomersCreditRequest, QueryCreditByUinListRequest, CreateAccountResponse, QueryPartnerCreditRequest, QueryCreditByUinListResponse, QueryVoucherPoolResponse, QueryCreditAllocationHistoryResponse, CreateAccountRequest, QueryDirectCustomersCreditRequest, AllocateCustomerCreditResponse, QueryVoucherAmountByUinRequest, QueryCreditAllocationHistoryRequest, QueryDirectCustomersCreditResponse, QueryVoucherListByUinResponse, QueryVoucherPoolRequest, QueryCustomersCreditResponse } from "./intlpartnersmgt_models";
/**
 * intlpartnersmgt client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询用户列表信用
     */
    QueryCreditByUinList(req: QueryCreditByUinListRequest, cb?: (error: string, rep: QueryCreditByUinListResponse) => void): Promise<QueryCreditByUinListResponse>;
    /**
     * 查询代金券额度池
     */
    QueryVoucherPool(req?: QueryVoucherPoolRequest, cb?: (error: string, rep: QueryVoucherPoolResponse) => void): Promise<QueryVoucherPoolResponse>;
    /**
     * 查询直接子客信用
     */
    QueryDirectCustomersCredit(req?: QueryDirectCustomersCreditRequest, cb?: (error: string, rep: QueryDirectCustomersCreditResponse) => void): Promise<QueryDirectCustomersCreditResponse>;
    /**
     * 在合作伙伴平台，创建腾讯云账号，子客户注册完成后，自动与合作伙伴账号绑定。

注意事项：<br>
1、创建腾讯云账号，输入的邮箱、手机号，需要合作伙伴做有效性验证。<br>
2、客户首次登录需要补充个人信息
     */
    CreateAccount(req: CreateAccountRequest, cb?: (error: string, rep: CreateAccountResponse) => void): Promise<CreateAccountResponse>;
    /**
     * 根据客户uin查询代金券列表
     */
    QueryVoucherListByUin(req: QueryVoucherListByUinRequest, cb?: (error: string, rep: QueryVoucherListByUinResponse) => void): Promise<QueryVoucherListByUinResponse>;
    /**
     * 查询合作伙伴自己的总信用额度、可用信用额度、已使用信用额度，单位为美元
     */
    QueryPartnerCredit(req?: QueryPartnerCreditRequest, cb?: (error: string, rep: QueryPartnerCreditResponse) => void): Promise<QueryPartnerCreditResponse>;
    /**
     * 合作伙伴可以为关联客户设置信用额度，包括调高额度、降低额度、设置额度为0
1、信用额度长期有效，不会定期清0；
2、可用信用额度为0，会触发客户停服，请谨慎操作；
3、如需限制客户新购，但不影响已购产品使用，可与渠道经理申请客户欠费不停服特权后，设置可用信用额度为0；
4、设置的额度，为当前可用信用额度的增量，最大不能超过合作伙伴可分配的剩余额度，设置负数代表回收额度，可用信用额度最低设置为0。
     */
    AllocateCustomerCredit(req: AllocateCustomerCreditRequest, cb?: (error: string, rep: AllocateCustomerCreditResponse) => void): Promise<AllocateCustomerCreditResponse>;
    /**
     * 获取国家和地区的代码
     */
    GetCountryCodes(req?: GetCountryCodesRequest, cb?: (error: string, rep: GetCountryCodesResponse) => void): Promise<GetCountryCodesResponse>;
    /**
     * 查询单个客户的全部历史分配记录
     */
    QueryCreditAllocationHistory(req: QueryCreditAllocationHistoryRequest, cb?: (error: string, rep: QueryCreditAllocationHistoryResponse) => void): Promise<QueryCreditAllocationHistoryResponse>;
    /**
     * 合作伙伴可以查询关联客户的信用额度，以及客户的基础信息
     */
    QueryCustomersCredit(req: QueryCustomersCreditRequest, cb?: (error: string, rep: QueryCustomersCreditResponse) => void): Promise<QueryCustomersCreditResponse>;
    /**
     * 根据客户uin查询代金券额度
     */
    QueryVoucherAmountByUin(req: QueryVoucherAmountByUinRequest, cb?: (error: string, rep: QueryVoucherAmountByUinResponse) => void): Promise<QueryVoucherAmountByUinResponse>;
}
