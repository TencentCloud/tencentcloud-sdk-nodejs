import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryVehicleInfoListResponse, CreateCorpTagResponse, QueryChatArchivingListResponse, QueryCustomerEventDetailStatisticsResponse, QueryExternalContactDetailRequest, QueryExternalUserMappingInfoResponse, QueryStaffEventDetailStatisticsRequest, QueryUserInfoListRequest, QueryExternalUserEventListRequest, QueryMaterialListRequest, CreateLeadResponse, QueryUserInfoListResponse, QueryVehicleInfoListRequest, QueryExternalUserEventListResponse, QueryExternalContactListRequest, QueryClueInfoListResponse, CreateChannelCodeRequest, QueryExternalContactDetailResponse, QueryExternalContactListResponse, QueryActivityLiveCodeListResponse, CreateCorpTagRequest, QueryLicenseInfoResponse, QueryClueInfoListRequest, QueryActivityListResponse, QueryStaffEventDetailStatisticsResponse, QueryActivityJoinListRequest, QueryExternalUserMappingInfoRequest, QueryCrmStatisticsResponse, QueryChannelCodeListRequest, QueryDealerInfoListResponse, QueryActivityLiveCodeListRequest, QueryActivityJoinListResponse, QueryDealerInfoListRequest, QueryMiniAppCodeListResponse, CreateChannelCodeResponse, QueryLicenseInfoRequest, QueryCustomerEventDetailStatisticsRequest, QueryCrmStatisticsRequest, QueryActivityListRequest, QueryMiniAppCodeListRequest, QueryChatArchivingListRequest, CreateLeadRequest, QueryChannelCodeListResponse, QueryMaterialListResponse } from "./wav_models";
/**
 * wav client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据游标拉取活动活码列表信息
     */
    QueryActivityLiveCodeList(req: QueryActivityLiveCodeListRequest, cb?: (error: string, rep: QueryActivityLiveCodeListResponse) => void): Promise<QueryActivityLiveCodeListResponse>;
    /**
     * 根据游标拉取活动列表信息
     */
    QueryActivityList(req: QueryActivityListRequest, cb?: (error: string, rep: QueryActivityListResponse) => void): Promise<QueryActivityListResponse>;
    /**
     * 通过接口拉取SaaS内C端外部联系人在指定时间范围内的行为事件明细。此接口提供的数据以天为维度，查询的时间范围为[start_time,end_time]，即前后均为闭区间，支持的最大查询跨度为365天。
     */
    QueryCustomerEventDetailStatistics(req: QueryCustomerEventDetailStatisticsRequest, cb?: (error: string, rep: QueryCustomerEventDetailStatisticsResponse) => void): Promise<QueryCustomerEventDetailStatisticsResponse>;
    /**
     * 根据游标拉取活动参与列表信息
     */
    QueryActivityJoinList(req: QueryActivityJoinListRequest, cb?: (error: string, rep: QueryActivityJoinListResponse) => void): Promise<QueryActivityJoinListResponse>;
    /**
     * 根据游标拉取渠道活码列表信息
     */
    QueryChannelCodeList(req: QueryChannelCodeListRequest, cb?: (error: string, rep: QueryChannelCodeListResponse) => void): Promise<QueryChannelCodeListResponse>;
    /**
     * 企业可通过此接口基于外部联系人获取指定成员添加的客户列表。客户是指配置了客户联系功能的成员所添加的外部联系人。没有配置客户联系功能的成员，所添加的外部联系人将不会作为客户返回。
     */
    QueryExternalContactList(req: QueryExternalContactListRequest, cb?: (error: string, rep: QueryExternalContactListResponse) => void): Promise<QueryExternalContactListResponse>;
    /**
     * 查询企业成员信息列表接口
     */
    QueryUserInfoList(req: QueryUserInfoListRequest, cb?: (error: string, rep: QueryUserInfoListResponse) => void): Promise<QueryUserInfoListResponse>;
    /**
     * 通过接口拉取租户在指定时间范围内的外部联系人添加/删除明细，此接口提供的数据以天为维度，查询的时间范围为[StarTime, EndTime]，即前后均为闭区间，支持的最大查询跨度为365天；
     */
    QueryExternalUserEventList(req: QueryExternalUserEventListRequest, cb?: (error: string, rep: QueryExternalUserEventListResponse) => void): Promise<QueryExternalUserEventListResponse>;
    /**
     * 该接口获取license对应的详细信息
     */
    QueryLicenseInfo(req: QueryLicenseInfoRequest, cb?: (error: string, rep: QueryLicenseInfoResponse) => void): Promise<QueryLicenseInfoResponse>;
    /**
     * 企业可通过此接口获取线索列表。
     */
    QueryClueInfoList(req: QueryClueInfoListRequest, cb?: (error: string, rep: QueryClueInfoListResponse) => void): Promise<QueryClueInfoListResponse>;
    /**
     * 企业可通过此接口，根据外部联系人的userid，拉取外部联系人详情
     */
    QueryExternalContactDetail(req: QueryExternalContactDetailRequest, cb?: (error: string, rep: QueryExternalContactDetailResponse) => void): Promise<QueryExternalContactDetailResponse>;
    /**
     * 线索回收接口
     */
    CreateLead(req: CreateLeadRequest, cb?: (error: string, rep: CreateLeadResponse) => void): Promise<CreateLeadResponse>;
    /**
     * 通过接口拉取SaaS内企业成员在指定时间范围内的行为事件明细。此接口提供的数据以天为维度，查询的时间范围为[start_time,end_time]，即前后均为闭区间，支持的最大查询跨度为365天。
     */
    QueryStaffEventDetailStatistics(req: QueryStaffEventDetailStatisticsRequest, cb?: (error: string, rep: QueryStaffEventDetailStatisticsResponse) => void): Promise<QueryStaffEventDetailStatisticsResponse>;
    /**
     * 企业可通过此接口获取企微SaaS平台上的车系车型信息。
     */
    QueryVehicleInfoList(req: QueryVehicleInfoListRequest, cb?: (error: string, rep: QueryVehicleInfoListResponse) => void): Promise<QueryVehicleInfoListResponse>;
    /**
     * 根据游标拉取会话存档列表信息
     */
    QueryChatArchivingList(req: QueryChatArchivingListRequest, cb?: (error: string, rep: QueryChatArchivingListResponse) => void): Promise<QueryChatArchivingListResponse>;
    /**
     * 该接口用户设置标签库, 每个企业最多可配置3000个企业标签。
     */
    CreateCorpTag(req: CreateCorpTagRequest, cb?: (error: string, rep: CreateCorpTagResponse) => void): Promise<CreateCorpTagResponse>;
    /**
     * 通过接口拉取租户/指定成员/部门在指定日期范围内的CRM跟进统计数据
     */
    QueryCrmStatistics(req: QueryCrmStatisticsRequest, cb?: (error: string, rep: QueryCrmStatisticsResponse) => void): Promise<QueryCrmStatisticsResponse>;
    /**
     * 通过接口按类型拉取租户当前的素材列表及关键信息
     */
    QueryMaterialList(req: QueryMaterialListRequest, cb?: (error: string, rep: QueryMaterialListResponse) => void): Promise<QueryMaterialListResponse>;
    /**
     * 新增渠道活码接口
     */
    CreateChannelCode(req: CreateChannelCodeRequest, cb?: (error: string, rep: CreateChannelCodeResponse) => void): Promise<CreateChannelCodeResponse>;
    /**
     * 查询小程序码列表接口
     */
    QueryMiniAppCodeList(req: QueryMiniAppCodeListRequest, cb?: (error: string, rep: QueryMiniAppCodeListResponse) => void): Promise<QueryMiniAppCodeListResponse>;
    /**
     * 企业可通过此接口获取录入在企微SaaS平台上的经销商信息。
     */
    QueryDealerInfoList(req: QueryDealerInfoListRequest, cb?: (error: string, rep: QueryDealerInfoListResponse) => void): Promise<QueryDealerInfoListResponse>;
    /**
     * 企业可通过此接口将企业主体对应的外部联系人id转换为乐销车应用主体对应的外部联系人。
     */
    QueryExternalUserMappingInfo(req: QueryExternalUserMappingInfoRequest, cb?: (error: string, rep: QueryExternalUserMappingInfoResponse) => void): Promise<QueryExternalUserMappingInfoResponse>;
}
