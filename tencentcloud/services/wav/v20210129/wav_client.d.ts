import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateCorpTagResponse, QueryChatArchivingListResponse, QueryExternalContactDetailRequest, QueryExternalUserMappingInfoResponse, CreateLeadResponse, QueryVehicleInfoListResponse, QueryVehicleInfoListRequest, QueryExternalContactListRequest, QueryClueInfoListResponse, CreateChannelCodeRequest, QueryExternalContactDetailResponse, QueryExternalContactListResponse, QueryActivityLiveCodeListResponse, CreateCorpTagRequest, QueryLicenseInfoResponse, QueryClueInfoListRequest, QueryActivityListResponse, QueryActivityJoinListRequest, QueryExternalUserMappingInfoRequest, QueryChannelCodeListRequest, QueryDealerInfoListResponse, QueryActivityLiveCodeListRequest, QueryActivityJoinListResponse, QueryDealerInfoListRequest, QueryMiniAppCodeListResponse, CreateChannelCodeResponse, QueryLicenseInfoRequest, QueryActivityListRequest, QueryMiniAppCodeListRequest, QueryChatArchivingListRequest, CreateLeadRequest, QueryChannelCodeListResponse } from "./wav_models";
/**
 * wav client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据游标拉取渠道活码列表信息
     */
    QueryChannelCodeList(req: QueryChannelCodeListRequest, cb?: (error: string, rep: QueryChannelCodeListResponse) => void): Promise<QueryChannelCodeListResponse>;
    /**
     * 根据游标拉取活动活码列表信息
     */
    QueryActivityLiveCodeList(req: QueryActivityLiveCodeListRequest, cb?: (error: string, rep: QueryActivityLiveCodeListResponse) => void): Promise<QueryActivityLiveCodeListResponse>;
    /**
     * 企业可通过此接口，根据外部联系人的userid，拉取外部联系人详情
     */
    QueryExternalContactDetail(req: QueryExternalContactDetailRequest, cb?: (error: string, rep: QueryExternalContactDetailResponse) => void): Promise<QueryExternalContactDetailResponse>;
    /**
     * 根据游标拉取活动列表信息
     */
    QueryActivityList(req: QueryActivityListRequest, cb?: (error: string, rep: QueryActivityListResponse) => void): Promise<QueryActivityListResponse>;
    /**
     * 企业可通过此接口获取录入在企微SaaS平台上的经销商信息。
     */
    QueryDealerInfoList(req: QueryDealerInfoListRequest, cb?: (error: string, rep: QueryDealerInfoListResponse) => void): Promise<QueryDealerInfoListResponse>;
    /**
     * 企业可通过此接口获取企微SaaS平台上的车系车型信息。
     */
    QueryVehicleInfoList(req: QueryVehicleInfoListRequest, cb?: (error: string, rep: QueryVehicleInfoListResponse) => void): Promise<QueryVehicleInfoListResponse>;
    /**
     * 线索回收接口
     */
    CreateLead(req: CreateLeadRequest, cb?: (error: string, rep: CreateLeadResponse) => void): Promise<CreateLeadResponse>;
    /**
     * 企业可通过此接口获取线索列表。
     */
    QueryClueInfoList(req: QueryClueInfoListRequest, cb?: (error: string, rep: QueryClueInfoListResponse) => void): Promise<QueryClueInfoListResponse>;
    /**
     * 根据游标拉取会话存档列表信息
     */
    QueryChatArchivingList(req: QueryChatArchivingListRequest, cb?: (error: string, rep: QueryChatArchivingListResponse) => void): Promise<QueryChatArchivingListResponse>;
    /**
     * 企业可通过此接口基于外部联系人获取指定成员添加的客户列表。客户是指配置了客户联系功能的成员所添加的外部联系人。没有配置客户联系功能的成员，所添加的外部联系人将不会作为客户返回。
     */
    QueryExternalContactList(req: QueryExternalContactListRequest, cb?: (error: string, rep: QueryExternalContactListResponse) => void): Promise<QueryExternalContactListResponse>;
    /**
     * 该接口用户设置标签库, 每个企业最多可配置3000个企业标签。
     */
    CreateCorpTag(req: CreateCorpTagRequest, cb?: (error: string, rep: CreateCorpTagResponse) => void): Promise<CreateCorpTagResponse>;
    /**
     * 新增渠道活码接口
     */
    CreateChannelCode(req: CreateChannelCodeRequest, cb?: (error: string, rep: CreateChannelCodeResponse) => void): Promise<CreateChannelCodeResponse>;
    /**
     * 企业可通过此接口将企业主体对应的外部联系人id转换为乐销车应用主体对应的外部联系人。
     */
    QueryExternalUserMappingInfo(req: QueryExternalUserMappingInfoRequest, cb?: (error: string, rep: QueryExternalUserMappingInfoResponse) => void): Promise<QueryExternalUserMappingInfoResponse>;
    /**
     * 根据游标拉取活动参与列表信息
     */
    QueryActivityJoinList(req: QueryActivityJoinListRequest, cb?: (error: string, rep: QueryActivityJoinListResponse) => void): Promise<QueryActivityJoinListResponse>;
    /**
     * 该接口获取license对应的详细信息
     */
    QueryLicenseInfo(req: QueryLicenseInfoRequest, cb?: (error: string, rep: QueryLicenseInfoResponse) => void): Promise<QueryLicenseInfoResponse>;
    /**
     * 查询小程序码列表接口
     */
    QueryMiniAppCodeList(req: QueryMiniAppCodeListRequest, cb?: (error: string, rep: QueryMiniAppCodeListResponse) => void): Promise<QueryMiniAppCodeListResponse>;
}
