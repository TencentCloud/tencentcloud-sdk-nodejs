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
  CreateCorpTagResponse,
  QueryChatArchivingListResponse,
  LicenseInfo,
  QueryExternalContactDetailRequest,
  QueryExternalUserMappingInfoResponse,
  ChannelCodeInnerDetail,
  ExternalContact,
  ExternalContactSimpleInfo,
  TagInfo,
  TagDetailInfo,
  ChatArchivingMsgTypeVideo,
  QueryExternalContactListRequest,
  MiniAppCodeInfo,
  QueryClueInfoListResponse,
  CreateChannelCodeRequest,
  QueryExternalContactDetailResponse,
  LiveCodeDetail,
  QueryExternalContactListResponse,
  FollowUser,
  QueryActivityLiveCodeListResponse,
  QueryActivityJoinListResponse,
  ExternalUserMappingInfo,
  QueryLicenseInfoResponse,
  QueryClueInfoListRequest,
  ActivityDetail,
  ExternalContactTag,
  ChatArchivingDetail,
  QueryActivityListResponse,
  QueryActivityJoinListRequest,
  TagGroup,
  QueryChannelCodeListRequest,
  WeComTagDetail,
  QueryActivityLiveCodeListRequest,
  CreateCorpTagRequest,
  ClueInfoDetail,
  QueryMiniAppCodeListResponse,
  CreateChannelCodeResponse,
  QueryLicenseInfoRequest,
  QueryActivityListRequest,
  QueryMiniAppCodeListRequest,
  QueryChatArchivingListRequest,
  QueryExternalUserMappingInfoRequest,
  QueryChannelCodeListResponse,
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
   * 根据游标拉取渠道活码列表信息
   */
  async QueryChannelCodeList(
    req: QueryChannelCodeListRequest,
    cb?: (error: string, rep: QueryChannelCodeListResponse) => void
  ): Promise<QueryChannelCodeListResponse> {
    return this.request("QueryChannelCodeList", req, cb)
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
   * 企业可通过此接口，根据外部联系人的userid，拉取客户详情
   */
  async QueryExternalContactDetail(
    req: QueryExternalContactDetailRequest,
    cb?: (error: string, rep: QueryExternalContactDetailResponse) => void
  ): Promise<QueryExternalContactDetailResponse> {
    return this.request("QueryExternalContactDetail", req, cb)
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
   * 企业可通过此接口获取线索列表。
   */
  async QueryClueInfoList(
    req: QueryClueInfoListRequest,
    cb?: (error: string, rep: QueryClueInfoListResponse) => void
  ): Promise<QueryClueInfoListResponse> {
    return this.request("QueryClueInfoList", req, cb)
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
   * 企业可通过此接口获取指定成员添加的客户列表。客户是指配置了客户联系功能的成员所添加的外部联系人。没有配置客户联系功能的成员，所添加的外部联系人将不会作为客户返回。
   */
  async QueryExternalContactList(
    req: QueryExternalContactListRequest,
    cb?: (error: string, rep: QueryExternalContactListResponse) => void
  ): Promise<QueryExternalContactListResponse> {
    return this.request("QueryExternalContactList", req, cb)
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
   * 新增渠道活码接口
   */
  async CreateChannelCode(
    req: CreateChannelCodeRequest,
    cb?: (error: string, rep: CreateChannelCodeResponse) => void
  ): Promise<CreateChannelCodeResponse> {
    return this.request("CreateChannelCode", req, cb)
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
   * 该接口获取license对应的详细信息
   */
  async QueryLicenseInfo(
    req: QueryLicenseInfoRequest,
    cb?: (error: string, rep: QueryLicenseInfoResponse) => void
  ): Promise<QueryLicenseInfoResponse> {
    return this.request("QueryLicenseInfo", req, cb)
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
}
