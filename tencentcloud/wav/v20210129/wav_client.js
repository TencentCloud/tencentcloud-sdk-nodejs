/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ActivityJoinDetail = models.ActivityJoinDetail;
const QueryVehicleInfoListResponse = models.QueryVehicleInfoListResponse;
const CreateCorpTagResponse = models.CreateCorpTagResponse;
const QueryChatArchivingListResponse = models.QueryChatArchivingListResponse;
const LicenseInfo = models.LicenseInfo;
const CustomerActionEventDetail = models.CustomerActionEventDetail;
const QueryCustomerEventDetailStatisticsResponse = models.QueryCustomerEventDetailStatisticsResponse;
const QueryExternalContactDetailRequest = models.QueryExternalContactDetailRequest;
const QueryExternalUserMappingInfoResponse = models.QueryExternalUserMappingInfoResponse;
const QueryStaffEventDetailStatisticsRequest = models.QueryStaffEventDetailStatisticsRequest;
const QueryUserInfoListRequest = models.QueryUserInfoListRequest;
const ExternalUserEventInfo = models.ExternalUserEventInfo;
const ChannelCodeInnerDetail = models.ChannelCodeInnerDetail;
const ExternalContact = models.ExternalContact;
const QueryExternalUserEventListRequest = models.QueryExternalUserEventListRequest;
const TagInfo = models.TagInfo;
const TagDetailInfo = models.TagDetailInfo;
const VehicleInfo = models.VehicleInfo;
const ChatArchivingMsgTypeVideo = models.ChatArchivingMsgTypeVideo;
const QueryMaterialListRequest = models.QueryMaterialListRequest;
const CreateLeadResponse = models.CreateLeadResponse;
const QueryUserInfoListResponse = models.QueryUserInfoListResponse;
const QueryVehicleInfoListRequest = models.QueryVehicleInfoListRequest;
const QueryExternalUserEventListResponse = models.QueryExternalUserEventListResponse;
const QueryExternalContactListRequest = models.QueryExternalContactListRequest;
const MiniAppCodeInfo = models.MiniAppCodeInfo;
const QueryClueInfoListResponse = models.QueryClueInfoListResponse;
const CreateChannelCodeRequest = models.CreateChannelCodeRequest;
const QueryExternalContactDetailResponse = models.QueryExternalContactDetailResponse;
const FollowUser = models.FollowUser;
const QueryExternalContactListResponse = models.QueryExternalContactListResponse;
const ExternalContactSimpleInfo = models.ExternalContactSimpleInfo;
const QueryActivityLiveCodeListResponse = models.QueryActivityLiveCodeListResponse;
const CreateCorpTagRequest = models.CreateCorpTagRequest;
const ExternalUserMappingInfo = models.ExternalUserMappingInfo;
const QueryLicenseInfoResponse = models.QueryLicenseInfoResponse;
const CorpUserInfo = models.CorpUserInfo;
const QueryClueInfoListRequest = models.QueryClueInfoListRequest;
const CrmStatisticsData = models.CrmStatisticsData;
const MaterialInfo = models.MaterialInfo;
const ActivityDetail = models.ActivityDetail;
const LiveCodeDetail = models.LiveCodeDetail;
const TagGroup = models.TagGroup;
const ExternalContactTag = models.ExternalContactTag;
const ChatArchivingDetail = models.ChatArchivingDetail;
const QueryActivityListResponse = models.QueryActivityListResponse;
const QueryStaffEventDetailStatisticsResponse = models.QueryStaffEventDetailStatisticsResponse;
const QueryActivityJoinListRequest = models.QueryActivityJoinListRequest;
const DealerInfo = models.DealerInfo;
const QueryExternalUserMappingInfoRequest = models.QueryExternalUserMappingInfoRequest;
const QueryCrmStatisticsResponse = models.QueryCrmStatisticsResponse;
const QueryChannelCodeListRequest = models.QueryChannelCodeListRequest;
const QueryDealerInfoListResponse = models.QueryDealerInfoListResponse;
const WeComTagDetail = models.WeComTagDetail;
const QueryActivityLiveCodeListRequest = models.QueryActivityLiveCodeListRequest;
const QueryActivityJoinListResponse = models.QueryActivityJoinListResponse;
const ClueInfoDetail = models.ClueInfoDetail;
const QueryDealerInfoListRequest = models.QueryDealerInfoListRequest;
const QueryMiniAppCodeListResponse = models.QueryMiniAppCodeListResponse;
const CreateChannelCodeResponse = models.CreateChannelCodeResponse;
const QueryLicenseInfoRequest = models.QueryLicenseInfoRequest;
const QueryCustomerEventDetailStatisticsRequest = models.QueryCustomerEventDetailStatisticsRequest;
const QueryCrmStatisticsRequest = models.QueryCrmStatisticsRequest;
const QueryActivityListRequest = models.QueryActivityListRequest;
const QueryMiniAppCodeListRequest = models.QueryMiniAppCodeListRequest;
const QueryChatArchivingListRequest = models.QueryChatArchivingListRequest;
const CreateLeadRequest = models.CreateLeadRequest;
const QueryChannelCodeListResponse = models.QueryChannelCodeListResponse;
const SalesActionEventDetail = models.SalesActionEventDetail;
const QueryMaterialListResponse = models.QueryMaterialListResponse;


/**
 * wav client
 * @class
 */
class WavClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("wav.tencentcloudapi.com", "2021-01-29", credential, region, profile);
    }
    
    /**
     * 根据游标拉取活动活码列表信息
     * @param {QueryActivityLiveCodeListRequest} req
     * @param {function(string, QueryActivityLiveCodeListResponse):void} cb
     * @public
     */
    QueryActivityLiveCodeList(req, cb) {
        let resp = new QueryActivityLiveCodeListResponse();
        this.request("QueryActivityLiveCodeList", req, resp, cb);
    }

    /**
     * 根据游标拉取活动列表信息
     * @param {QueryActivityListRequest} req
     * @param {function(string, QueryActivityListResponse):void} cb
     * @public
     */
    QueryActivityList(req, cb) {
        let resp = new QueryActivityListResponse();
        this.request("QueryActivityList", req, resp, cb);
    }

    /**
     * 通过接口拉取SaaS内C端外部联系人在指定时间范围内的行为事件明细。此接口提供的数据以天为维度，查询的时间范围为[start_time,end_time]，即前后均为闭区间，支持的最大查询跨度为365天。
     * @param {QueryCustomerEventDetailStatisticsRequest} req
     * @param {function(string, QueryCustomerEventDetailStatisticsResponse):void} cb
     * @public
     */
    QueryCustomerEventDetailStatistics(req, cb) {
        let resp = new QueryCustomerEventDetailStatisticsResponse();
        this.request("QueryCustomerEventDetailStatistics", req, resp, cb);
    }

    /**
     * 根据游标拉取活动参与列表信息
     * @param {QueryActivityJoinListRequest} req
     * @param {function(string, QueryActivityJoinListResponse):void} cb
     * @public
     */
    QueryActivityJoinList(req, cb) {
        let resp = new QueryActivityJoinListResponse();
        this.request("QueryActivityJoinList", req, resp, cb);
    }

    /**
     * 根据游标拉取渠道活码列表信息
     * @param {QueryChannelCodeListRequest} req
     * @param {function(string, QueryChannelCodeListResponse):void} cb
     * @public
     */
    QueryChannelCodeList(req, cb) {
        let resp = new QueryChannelCodeListResponse();
        this.request("QueryChannelCodeList", req, resp, cb);
    }

    /**
     * 企业可通过此接口基于外部联系人获取指定成员添加的客户列表。客户是指配置了客户联系功能的成员所添加的外部联系人。没有配置客户联系功能的成员，所添加的外部联系人将不会作为客户返回。
     * @param {QueryExternalContactListRequest} req
     * @param {function(string, QueryExternalContactListResponse):void} cb
     * @public
     */
    QueryExternalContactList(req, cb) {
        let resp = new QueryExternalContactListResponse();
        this.request("QueryExternalContactList", req, resp, cb);
    }

    /**
     * 查询企业成员信息列表接口
     * @param {QueryUserInfoListRequest} req
     * @param {function(string, QueryUserInfoListResponse):void} cb
     * @public
     */
    QueryUserInfoList(req, cb) {
        let resp = new QueryUserInfoListResponse();
        this.request("QueryUserInfoList", req, resp, cb);
    }

    /**
     * 通过接口拉取租户在指定时间范围内的外部联系人添加/删除明细，此接口提供的数据以天为维度，查询的时间范围为[StarTime, EndTime]，即前后均为闭区间，支持的最大查询跨度为365天；
     * @param {QueryExternalUserEventListRequest} req
     * @param {function(string, QueryExternalUserEventListResponse):void} cb
     * @public
     */
    QueryExternalUserEventList(req, cb) {
        let resp = new QueryExternalUserEventListResponse();
        this.request("QueryExternalUserEventList", req, resp, cb);
    }

    /**
     * 该接口获取license对应的详细信息
     * @param {QueryLicenseInfoRequest} req
     * @param {function(string, QueryLicenseInfoResponse):void} cb
     * @public
     */
    QueryLicenseInfo(req, cb) {
        let resp = new QueryLicenseInfoResponse();
        this.request("QueryLicenseInfo", req, resp, cb);
    }

    /**
     * 企业可通过此接口获取线索列表。
     * @param {QueryClueInfoListRequest} req
     * @param {function(string, QueryClueInfoListResponse):void} cb
     * @public
     */
    QueryClueInfoList(req, cb) {
        let resp = new QueryClueInfoListResponse();
        this.request("QueryClueInfoList", req, resp, cb);
    }

    /**
     * 企业可通过此接口，根据外部联系人的userid，拉取外部联系人详情
     * @param {QueryExternalContactDetailRequest} req
     * @param {function(string, QueryExternalContactDetailResponse):void} cb
     * @public
     */
    QueryExternalContactDetail(req, cb) {
        let resp = new QueryExternalContactDetailResponse();
        this.request("QueryExternalContactDetail", req, resp, cb);
    }

    /**
     * 线索回收接口
     * @param {CreateLeadRequest} req
     * @param {function(string, CreateLeadResponse):void} cb
     * @public
     */
    CreateLead(req, cb) {
        let resp = new CreateLeadResponse();
        this.request("CreateLead", req, resp, cb);
    }

    /**
     * 通过接口拉取SaaS内企业成员在指定时间范围内的行为事件明细。此接口提供的数据以天为维度，查询的时间范围为[start_time,end_time]，即前后均为闭区间，支持的最大查询跨度为365天。
     * @param {QueryStaffEventDetailStatisticsRequest} req
     * @param {function(string, QueryStaffEventDetailStatisticsResponse):void} cb
     * @public
     */
    QueryStaffEventDetailStatistics(req, cb) {
        let resp = new QueryStaffEventDetailStatisticsResponse();
        this.request("QueryStaffEventDetailStatistics", req, resp, cb);
    }

    /**
     * 企业可通过此接口获取企微SaaS平台上的车系车型信息。
     * @param {QueryVehicleInfoListRequest} req
     * @param {function(string, QueryVehicleInfoListResponse):void} cb
     * @public
     */
    QueryVehicleInfoList(req, cb) {
        let resp = new QueryVehicleInfoListResponse();
        this.request("QueryVehicleInfoList", req, resp, cb);
    }

    /**
     * 根据游标拉取会话存档列表信息
     * @param {QueryChatArchivingListRequest} req
     * @param {function(string, QueryChatArchivingListResponse):void} cb
     * @public
     */
    QueryChatArchivingList(req, cb) {
        let resp = new QueryChatArchivingListResponse();
        this.request("QueryChatArchivingList", req, resp, cb);
    }

    /**
     * 该接口用户设置标签库, 每个企业最多可配置3000个企业标签。
     * @param {CreateCorpTagRequest} req
     * @param {function(string, CreateCorpTagResponse):void} cb
     * @public
     */
    CreateCorpTag(req, cb) {
        let resp = new CreateCorpTagResponse();
        this.request("CreateCorpTag", req, resp, cb);
    }

    /**
     * 通过接口拉取租户/指定成员/部门在指定日期范围内的CRM跟进统计数据
     * @param {QueryCrmStatisticsRequest} req
     * @param {function(string, QueryCrmStatisticsResponse):void} cb
     * @public
     */
    QueryCrmStatistics(req, cb) {
        let resp = new QueryCrmStatisticsResponse();
        this.request("QueryCrmStatistics", req, resp, cb);
    }

    /**
     * 通过接口按类型拉取租户当前的素材列表及关键信息
     * @param {QueryMaterialListRequest} req
     * @param {function(string, QueryMaterialListResponse):void} cb
     * @public
     */
    QueryMaterialList(req, cb) {
        let resp = new QueryMaterialListResponse();
        this.request("QueryMaterialList", req, resp, cb);
    }

    /**
     * 新增渠道活码接口
     * @param {CreateChannelCodeRequest} req
     * @param {function(string, CreateChannelCodeResponse):void} cb
     * @public
     */
    CreateChannelCode(req, cb) {
        let resp = new CreateChannelCodeResponse();
        this.request("CreateChannelCode", req, resp, cb);
    }

    /**
     * 查询小程序码列表接口
     * @param {QueryMiniAppCodeListRequest} req
     * @param {function(string, QueryMiniAppCodeListResponse):void} cb
     * @public
     */
    QueryMiniAppCodeList(req, cb) {
        let resp = new QueryMiniAppCodeListResponse();
        this.request("QueryMiniAppCodeList", req, resp, cb);
    }

    /**
     * 企业可通过此接口获取录入在企微SaaS平台上的经销商信息。
     * @param {QueryDealerInfoListRequest} req
     * @param {function(string, QueryDealerInfoListResponse):void} cb
     * @public
     */
    QueryDealerInfoList(req, cb) {
        let resp = new QueryDealerInfoListResponse();
        this.request("QueryDealerInfoList", req, resp, cb);
    }

    /**
     * 企业可通过此接口将企业主体对应的外部联系人id转换为乐销车应用主体对应的外部联系人。
     * @param {QueryExternalUserMappingInfoRequest} req
     * @param {function(string, QueryExternalUserMappingInfoResponse):void} cb
     * @public
     */
    QueryExternalUserMappingInfo(req, cb) {
        let resp = new QueryExternalUserMappingInfoResponse();
        this.request("QueryExternalUserMappingInfo", req, resp, cb);
    }


}
module.exports = WavClient;
