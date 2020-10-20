import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCallBackStatusRequest, DescribeCallBackCdrRequest, CreateCallBackRequest, DeleteCallBackRequest, GetVirtualNumResponse, DelVirtualNumResponse, DescribeCallerDisplayListRequest, DescribeCallerDisplayListResponse, CreateCallBackResponse, DelVirtualNumRequest, GetVirtualNumRequest, DeleteCallBackResponse, Get400CdrRequest, DescribeCallBackCdrResponse, Get400CdrResponse, DescribeCallBackStatusResponse } from "./npp_models";
/**
 * npp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 回拨呼叫取消
     */
    DeleteCallBack(req: DeleteCallBackRequest, cb?: (error: string, rep: DeleteCallBackResponse) => void): Promise<DeleteCallBackResponse>;
    /**
     * 回拨拉取主叫显号号码集合
     */
    DescribeCallerDisplayList(req: DescribeCallerDisplayListRequest, cb?: (error: string, rep: DescribeCallerDisplayListResponse) => void): Promise<DescribeCallerDisplayListResponse>;
    /**
     * 直拨解绑中间号
     */
    DelVirtualNum(req: DelVirtualNumRequest, cb?: (error: string, rep: DelVirtualNumResponse) => void): Promise<DelVirtualNumResponse>;
    /**
     * 直拨获取中间号（App 使用方发起）
     */
    GetVirtualNum(req: GetVirtualNumRequest, cb?: (error: string, rep: GetVirtualNumResponse) => void): Promise<GetVirtualNumResponse>;
    /**
     * 直拨话单获取接口
     */
    Get400Cdr(req: Get400CdrRequest, cb?: (error: string, rep: Get400CdrResponse) => void): Promise<Get400CdrResponse>;
    /**
     * 回拨通话状态获取
     */
    DescribeCallBackStatus(req: DescribeCallBackStatusRequest, cb?: (error: string, rep: DescribeCallBackStatusResponse) => void): Promise<DescribeCallBackStatusResponse>;
    /**
     * 回拨呼叫请求
     */
    CreateCallBack(req: CreateCallBackRequest, cb?: (error: string, rep: CreateCallBackResponse) => void): Promise<CreateCallBackResponse>;
    /**
     * 回拨话单获取接口
     */
    DescribeCallBackCdr(req: DescribeCallBackCdrRequest, cb?: (error: string, rep: DescribeCallBackCdrResponse) => void): Promise<DescribeCallBackCdrResponse>;
}
