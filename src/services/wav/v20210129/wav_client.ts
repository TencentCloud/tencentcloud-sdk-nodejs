/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ActivityJoinDetail,
  QueryVehicleInfoListResponse,
  CreateCorpTagResponse,
  QueryChatArchivingListResponse,
  LicenseInfo,
  CustomerActionEventDetail,
  QueryCustomerEventDetailStatisticsResponse,
  QueryExternalContactDetailRequest,
  QueryExternalUserMappingInfoResponse,
  QueryStaffEventDetailStatisticsRequest,
  QueryUserInfoListRequest,
  ExternalUserEventInfo,
  ChannelCodeInnerDetail,
  ExternalContact,
  QueryExternalUserEventListRequest,
  TagInfo,
  TagDetailInfo,
  VehicleInfo,
  ChatArchivingMsgTypeVideo,
  QueryMaterialListRequest,
  CreateLeadResponse,
  QueryUserInfoListResponse,
  QueryVehicleInfoListRequest,
  QueryExternalUserEventListResponse,
  QueryExternalContactListRequest,
  MiniAppCodeInfo,
  QueryClueInfoListResponse,
  CreateChannelCodeRequest,
  QueryExternalContactDetailResponse,
  FollowUser,
  QueryExternalContactListResponse,
  ExternalContactSimpleInfo,
  QueryActivityLiveCodeListResponse,
  CreateCorpTagRequest,
  ExternalUserMappingInfo,
  QueryLicenseInfoResponse,
  CorpUserInfo,
  QueryClueInfoListRequest,
  CrmStatisticsData,
  MaterialInfo,
  ActivityDetail,
  LiveCodeDetail,
  TagGroup,
  ExternalContactTag,
  ChatArchivingDetail,
  QueryActivityListResponse,
  QueryStaffEventDetailStatisticsResponse,
  QueryActivityJoinListRequest,
  DealerInfo,
  QueryExternalUserMappingInfoRequest,
  QueryCrmStatisticsResponse,
  QueryChannelCodeListRequest,
  QueryDealerInfoListResponse,
  WeComTagDetail,
  QueryActivityLiveCodeListRequest,
  QueryActivityJoinListResponse,
  ClueInfoDetail,
  QueryDealerInfoListRequest,
  QueryMiniAppCodeListResponse,
  CreateChannelCodeResponse,
  QueryLicenseInfoRequest,
  QueryCustomerEventDetailStatisticsRequest,
  QueryCrmStatisticsRequest,
  QueryActivityListRequest,
  QueryMiniAppCodeListRequest,
  QueryChatArchivingListRequest,
  CreateLeadRequest,
  QueryChannelCodeListResponse,
  SalesActionEventDetail,
  QueryMaterialListResponse,
} from "./wav_models"

/**
 * wav client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("wav.tencentcloudapi.com", "2021-01-29", clientConfig)
  }

  /**
   * 根据游标拉取活动活码列表信息
   */
  async QueryActivityLiveCodeList(
    req: QueryActivityLiveCodeListRequest,
    cb?: (error: string, rep: QueryActivityLiveCodeListResponse) => void
  ): Promise<QueryActivityLiveCodeListResponse> {
    return this.request("QueryActivityLiveCodeList", req, cb)
  }

  /**
   * 根据游标拉取活动列表信息
   */
  async QueryActivityList(
    req: QueryActivityListRequest,
    cb?: (error: string, rep: QueryActivityListResponse) => void
  ): Promise<QueryActivityListResponse> {
    return this.request("QueryActivityList", req, cb)
  }

  /**
   * 通过接口拉取SaaS内C端外部联系人在指定时间范围内的行为事件明细。此接口提供的数据以天为维度，查询的时间范围为[start_time,end_time]，即前后均为闭区间，支持的最大查询跨度为365天。
   */
  async QueryCustomerEventDetailStatistics(
    req: QueryCustomerEventDetailStatisticsRequest,
    cb?: (error: string, rep: QueryCustomerEventDetailStatisticsResponse) => void
  ): Promise<QueryCustomerEventDetailStatisticsResponse> {
    return this.request("QueryCustomerEventDetailStatistics", req, cb)
  }

  /**
   * 根据游标拉取活动参与列表信息
   */
  async QueryActivityJoinList(
    req: QueryActivityJoinListRequest,
    cb?: (error: string, rep: QueryActivityJoinListResponse) => void
  ): Promise<QueryActivityJoinListResponse> {
    return this.request("QueryActivityJoinList", req, cb)
  }

  /**
   * 根据游标拉取渠道活码列表信息
   */
  async QueryChannelCodeList(
    req: QueryChannelCodeListRequest,
    cb?: (error: string, rep: QueryChannelCodeListResponse) => void
  ): Promise<QueryChannelCodeListResponse> {
    return this.request("QueryChannelCodeList", req, cb)
  }

  /**
   * 企业可通过此接口基于外部联系人获取指定成员添加的客户列表。客户是指配置了客户联系功能的成员所添加的外部联系人。没有配置客户联系功能的成员，所添加的外部联系人将不会作为客户返回。
   */
  async QueryExternalContactList(
    req: QueryExternalContactListRequest,
    cb?: (error: string, rep: QueryExternalContactListResponse) => void
  ): Promise<QueryExternalContactListResponse> {
    return this.request("QueryExternalContactList", req, cb)
  }

  /**
   * 查询企业成员信息列表接口
   */
  async QueryUserInfoList(
    req: QueryUserInfoListRequest,
    cb?: (error: string, rep: QueryUserInfoListResponse) => void
  ): Promise<QueryUserInfoListResponse> {
    return this.request("QueryUserInfoList", req, cb)
  }

  /**
   * 通过接口拉取租户在指定时间范围内的外部联系人添加/删除明细，此接口提供的数据以天为维度，查询的时间范围为[StarTime, EndTime]，即前后均为闭区间，支持的最大查询跨度为365天；
   */
  async QueryExternalUserEventList(
    req: QueryExternalUserEventListRequest,
    cb?: (error: string, rep: QueryExternalUserEventListResponse) => void
  ): Promise<QueryExternalUserEventListResponse> {
    return this.request("QueryExternalUserEventList", req, cb)
  }

  /**
   * 该接口获取license对应的详细信息
   */
  async QueryLicenseInfo(
    req: QueryLicenseInfoRequest,
    cb?: (error: string, rep: QueryLicenseInfoResponse) => void
  ): Promise<QueryLicenseInfoResponse> {
    return this.request("QueryLicenseInfo", req, cb)
  }

  /**
   * 企业可通过此接口获取线索列表。
   */
  async QueryClueInfoList(
    req: QueryClueInfoListRequest,
    cb?: (error: string, rep: QueryClueInfoListResponse) => void
  ): Promise<QueryClueInfoListResponse> {
    return this.request("QueryClueInfoList", req, cb)
  }

  /**
   * 企业可通过此接口，根据外部联系人的userid，拉取外部联系人详情
   */
  async QueryExternalContactDetail(
    req: QueryExternalContactDetailRequest,
    cb?: (error: string, rep: QueryExternalContactDetailResponse) => void
  ): Promise<QueryExternalContactDetailResponse> {
    return this.request("QueryExternalContactDetail", req, cb)
  }

  /**
   * 线索回收接口
   */
  async CreateLead(
    req: CreateLeadRequest,
    cb?: (error: string, rep: CreateLeadResponse) => void
  ): Promise<CreateLeadResponse> {
    return this.request("CreateLead", req, cb)
  }

  /**
   * 通过接口拉取SaaS内企业成员在指定时间范围内的行为事件明细。此接口提供的数据以天为维度，查询的时间范围为[start_time,end_time]，即前后均为闭区间，支持的最大查询跨度为365天。
   */
  async QueryStaffEventDetailStatistics(
    req: QueryStaffEventDetailStatisticsRequest,
    cb?: (error: string, rep: QueryStaffEventDetailStatisticsResponse) => void
  ): Promise<QueryStaffEventDetailStatisticsResponse> {
    return this.request("QueryStaffEventDetailStatistics", req, cb)
  }

  /**
   * 企业可通过此接口获取企微SaaS平台上的车系车型信息。
   */
  async QueryVehicleInfoList(
    req: QueryVehicleInfoListRequest,
    cb?: (error: string, rep: QueryVehicleInfoListResponse) => void
  ): Promise<QueryVehicleInfoListResponse> {
    return this.request("QueryVehicleInfoList", req, cb)
  }

  /**
   * 根据游标拉取会话存档列表信息
   */
  async QueryChatArchivingList(
    req: QueryChatArchivingListRequest,
    cb?: (error: string, rep: QueryChatArchivingListResponse) => void
  ): Promise<QueryChatArchivingListResponse> {
    return this.request("QueryChatArchivingList", req, cb)
  }

  /**
   * 该接口用户设置标签库, 每个企业最多可配置3000个企业标签。
   */
  async CreateCorpTag(
    req: CreateCorpTagRequest,
    cb?: (error: string, rep: CreateCorpTagResponse) => void
  ): Promise<CreateCorpTagResponse> {
    return this.request("CreateCorpTag", req, cb)
  }

  /**
   * 通过接口拉取租户/指定成员/部门在指定日期范围内的CRM跟进统计数据
   */
  async QueryCrmStatistics(
    req: QueryCrmStatisticsRequest,
    cb?: (error: string, rep: QueryCrmStatisticsResponse) => void
  ): Promise<QueryCrmStatisticsResponse> {
    return this.request("QueryCrmStatistics", req, cb)
  }

  /**
   * 通过接口按类型拉取租户当前的素材列表及关键信息
   */
  async QueryMaterialList(
    req: QueryMaterialListRequest,
    cb?: (error: string, rep: QueryMaterialListResponse) => void
  ): Promise<QueryMaterialListResponse> {
    return this.request("QueryMaterialList", req, cb)
  }

  /**
   * 新增渠道活码接口
   */
  async CreateChannelCode(
    req: CreateChannelCodeRequest,
    cb?: (error: string, rep: CreateChannelCodeResponse) => void
  ): Promise<CreateChannelCodeResponse> {
    return this.request("CreateChannelCode", req, cb)
  }

  /**
   * 查询小程序码列表接口
   */
  async QueryMiniAppCodeList(
    req: QueryMiniAppCodeListRequest,
    cb?: (error: string, rep: QueryMiniAppCodeListResponse) => void
  ): Promise<QueryMiniAppCodeListResponse> {
    return this.request("QueryMiniAppCodeList", req, cb)
  }

  /**
   * 企业可通过此接口获取录入在企微SaaS平台上的经销商信息。
   */
  async QueryDealerInfoList(
    req: QueryDealerInfoListRequest,
    cb?: (error: string, rep: QueryDealerInfoListResponse) => void
  ): Promise<QueryDealerInfoListResponse> {
    return this.request("QueryDealerInfoList", req, cb)
  }

  /**
   * 企业可通过此接口将企业主体对应的外部联系人id转换为乐销车应用主体对应的外部联系人。
   */
  async QueryExternalUserMappingInfo(
    req: QueryExternalUserMappingInfoRequest,
    cb?: (error: string, rep: QueryExternalUserMappingInfoResponse) => void
  ): Promise<QueryExternalUserMappingInfoResponse> {
    return this.request("QueryExternalUserMappingInfo", req, cb)
  }
}
