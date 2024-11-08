import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { InquireAuditCreditResponse, StopLoggingRequest, GetAttributeKeyRequest, DescribeAuditTracksResponse, StartLoggingRequest, ModifyAuditTrackResponse, InquireAuditCreditRequest, DescribeEventsResponse, ListCosEnableRegionResponse, LookUpEventsRequest, DescribeAuditTrackRequest, UpdateAuditRequest, DescribeAuditTracksRequest, CreateEventsAuditTrackResponse, DeleteAuditTrackRequest, StartLoggingResponse, ListCosEnableRegionRequest, ListKeyAliasByRegionResponse, CreateAuditTrackResponse, ListAuditsRequest, ModifyAuditTrackRequest, StopLoggingResponse, CreateAuditTrackRequest, ListAuditsResponse, DescribeEventsRequest, UpdateAuditResponse, DescribeAuditRequest, ListKeyAliasByRegionRequest, ListCmqEnableRegionRequest, GetAttributeKeyResponse, ModifyEventsAuditTrackResponse, ListCmqEnableRegionResponse, LookUpEventsResponse, CreateEventsAuditTrackRequest, DeleteAuditTrackResponse, DescribeAuditTrackResponse, ModifyEventsAuditTrackRequest, DescribeAuditResponse } from "./cloudaudit_models";
/**
 * cloudaudit client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改操作审计跟踪集
     */
    ModifyAuditTrack(req: ModifyAuditTrackRequest, cb?: (error: string, rep: ModifyAuditTrackResponse) => void): Promise<ModifyAuditTrackResponse>;
    /**
     * 开启跟踪集
     */
    StartLogging(req: StartLoggingRequest, cb?: (error: string, rep: StartLoggingResponse) => void): Promise<StartLoggingResponse>;
    /**
     * 查询操作审计跟踪集详情
     */
    DescribeAuditTrack(req: DescribeAuditTrackRequest, cb?: (error: string, rep: DescribeAuditTrackResponse) => void): Promise<DescribeAuditTrackResponse>;
    /**
     * 查询AttributeKey的有效取值范围
     */
    GetAttributeKey(req: GetAttributeKeyRequest, cb?: (error: string, rep: GetAttributeKeyResponse) => void): Promise<GetAttributeKeyResponse>;
    /**
     * 创建操作审计跟踪集
     */
    CreateAuditTrack(req: CreateAuditTrackRequest, cb?: (error: string, rep: CreateAuditTrackResponse) => void): Promise<CreateAuditTrackResponse>;
    /**
     * 查询操作审计支持的cmq的可用区
     */
    ListCmqEnableRegion(req: ListCmqEnableRegionRequest, cb?: (error: string, rep: ListCmqEnableRegionResponse) => void): Promise<ListCmqEnableRegionResponse>;
    /**
     * 创建操作审计跟踪集
     */
    CreateEventsAuditTrack(req: CreateEventsAuditTrackRequest, cb?: (error: string, rep: CreateEventsAuditTrackResponse) => void): Promise<CreateEventsAuditTrackResponse>;
    /**
     * 查询操作审计日志
     */
    DescribeEvents(req: DescribeEventsRequest, cb?: (error: string, rep: DescribeEventsResponse) => void): Promise<DescribeEventsResponse>;
    /**
     * 修改操作审计跟踪集
     */
    ModifyEventsAuditTrack(req: ModifyEventsAuditTrackRequest, cb?: (error: string, rep: ModifyEventsAuditTrackResponse) => void): Promise<ModifyEventsAuditTrackResponse>;
    /**
     * 关闭跟踪集
     */
    StopLogging(req: StopLoggingRequest, cb?: (error: string, rep: StopLoggingResponse) => void): Promise<StopLoggingResponse>;
    /**
     * 查询操作审计支持的cos可用区
     */
    ListCosEnableRegion(req: ListCosEnableRegionRequest, cb?: (error: string, rep: ListCosEnableRegionResponse) => void): Promise<ListCosEnableRegionResponse>;
    /**
     * 查询操作审计跟踪集列表
     */
    DescribeAuditTracks(req: DescribeAuditTracksRequest, cb?: (error: string, rep: DescribeAuditTracksResponse) => void): Promise<DescribeAuditTracksResponse>;
    /**
     * 查询用户可创建跟踪集的数量
     */
    InquireAuditCredit(req?: InquireAuditCreditRequest, cb?: (error: string, rep: InquireAuditCreditResponse) => void): Promise<InquireAuditCreditResponse>;
    /**
     * 参数要求：
1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
     */
    UpdateAudit(req: UpdateAuditRequest, cb?: (error: string, rep: UpdateAuditResponse) => void): Promise<UpdateAuditResponse>;
    /**
     * 根据地域获取KMS密钥别名
     */
    ListKeyAliasByRegion(req: ListKeyAliasByRegionRequest, cb?: (error: string, rep: ListKeyAliasByRegionResponse) => void): Promise<ListKeyAliasByRegionResponse>;
    /**
     * 查询跟踪集详情
     */
    DescribeAudit(req: DescribeAuditRequest, cb?: (error: string, rep: DescribeAuditResponse) => void): Promise<DescribeAuditResponse>;
    /**
     * 删除操作审计跟踪集
     */
    DeleteAuditTrack(req: DeleteAuditTrackRequest, cb?: (error: string, rep: DeleteAuditTrackResponse) => void): Promise<DeleteAuditTrackResponse>;
    /**
     * 用于对操作日志进行检索，便于用户进行查询相关的操作信息。
     */
    LookUpEvents(req: LookUpEventsRequest, cb?: (error: string, rep: LookUpEventsResponse) => void): Promise<LookUpEventsResponse>;
    /**
     * 查询跟踪集概要
     */
    ListAudits(req?: ListAuditsRequest, cb?: (error: string, rep: ListAuditsResponse) => void): Promise<ListAuditsResponse>;
}
