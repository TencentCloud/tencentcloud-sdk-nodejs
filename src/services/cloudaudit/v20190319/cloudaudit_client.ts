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
  InquireAuditCreditResponse,
  StopLoggingRequest,
  CmqRegionInfo,
  GetAttributeKeyRequest,
  Storage,
  DescribeAuditTracksResponse,
  StartLoggingRequest,
  ModifyAuditTrackResponse,
  InquireAuditCreditRequest,
  DescribeEventsResponse,
  ListCosEnableRegionResponse,
  LookUpEventsRequest,
  DescribeAuditTrackRequest,
  UpdateAuditRequest,
  DescribeAuditTracksRequest,
  CreateEventsAuditTrackResponse,
  DeleteAuditTrackRequest,
  StartLoggingResponse,
  AttributeKeyDetail,
  ListCosEnableRegionRequest,
  ListKeyAliasByRegionResponse,
  CreateAuditTrackResponse,
  Tracks,
  Resource,
  ListAuditsRequest,
  ModifyAuditTrackRequest,
  StopLoggingResponse,
  Filter,
  ResourceField,
  CreateAuditTrackRequest,
  LookupAttribute,
  ListAuditsResponse,
  KeyMetadata,
  DescribeEventsRequest,
  UpdateAuditResponse,
  DescribeAuditRequest,
  ListKeyAliasByRegionRequest,
  ListCmqEnableRegionRequest,
  GetAttributeKeyResponse,
  ModifyEventsAuditTrackResponse,
  ListCmqEnableRegionResponse,
  LookUpEventsResponse,
  CreateEventsAuditTrackRequest,
  DeleteAuditTrackResponse,
  CosRegionInfo,
  DescribeAuditTrackResponse,
  ModifyEventsAuditTrackRequest,
  DescribeAuditResponse,
  Event,
  AuditSummary,
} from "./cloudaudit_models"

/**
 * cloudaudit client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cloudaudit.tencentcloudapi.com", "2019-03-19", clientConfig)
  }

  /**
   * 修改操作审计跟踪集
   */
  async ModifyAuditTrack(
    req: ModifyAuditTrackRequest,
    cb?: (error: string, rep: ModifyAuditTrackResponse) => void
  ): Promise<ModifyAuditTrackResponse> {
    return this.request("ModifyAuditTrack", req, cb)
  }

  /**
   * 开启跟踪集
   */
  async StartLogging(
    req: StartLoggingRequest,
    cb?: (error: string, rep: StartLoggingResponse) => void
  ): Promise<StartLoggingResponse> {
    return this.request("StartLogging", req, cb)
  }

  /**
   * 查询操作审计跟踪集详情
   */
  async DescribeAuditTrack(
    req: DescribeAuditTrackRequest,
    cb?: (error: string, rep: DescribeAuditTrackResponse) => void
  ): Promise<DescribeAuditTrackResponse> {
    return this.request("DescribeAuditTrack", req, cb)
  }

  /**
   * 查询AttributeKey的有效取值范围
   */
  async GetAttributeKey(
    req: GetAttributeKeyRequest,
    cb?: (error: string, rep: GetAttributeKeyResponse) => void
  ): Promise<GetAttributeKeyResponse> {
    return this.request("GetAttributeKey", req, cb)
  }

  /**
   * 创建操作审计跟踪集
   */
  async CreateAuditTrack(
    req: CreateAuditTrackRequest,
    cb?: (error: string, rep: CreateAuditTrackResponse) => void
  ): Promise<CreateAuditTrackResponse> {
    return this.request("CreateAuditTrack", req, cb)
  }

  /**
   * 查询操作审计支持的cmq的可用区
   */
  async ListCmqEnableRegion(
    req: ListCmqEnableRegionRequest,
    cb?: (error: string, rep: ListCmqEnableRegionResponse) => void
  ): Promise<ListCmqEnableRegionResponse> {
    return this.request("ListCmqEnableRegion", req, cb)
  }

  /**
   * 创建操作审计跟踪集
   */
  async CreateEventsAuditTrack(
    req: CreateEventsAuditTrackRequest,
    cb?: (error: string, rep: CreateEventsAuditTrackResponse) => void
  ): Promise<CreateEventsAuditTrackResponse> {
    return this.request("CreateEventsAuditTrack", req, cb)
  }

  /**
   * 查询操作审计日志
   */
  async DescribeEvents(
    req: DescribeEventsRequest,
    cb?: (error: string, rep: DescribeEventsResponse) => void
  ): Promise<DescribeEventsResponse> {
    return this.request("DescribeEvents", req, cb)
  }

  /**
   * 修改操作审计跟踪集
   */
  async ModifyEventsAuditTrack(
    req: ModifyEventsAuditTrackRequest,
    cb?: (error: string, rep: ModifyEventsAuditTrackResponse) => void
  ): Promise<ModifyEventsAuditTrackResponse> {
    return this.request("ModifyEventsAuditTrack", req, cb)
  }

  /**
   * 关闭跟踪集
   */
  async StopLogging(
    req: StopLoggingRequest,
    cb?: (error: string, rep: StopLoggingResponse) => void
  ): Promise<StopLoggingResponse> {
    return this.request("StopLogging", req, cb)
  }

  /**
   * 查询操作审计支持的cos可用区
   */
  async ListCosEnableRegion(
    req: ListCosEnableRegionRequest,
    cb?: (error: string, rep: ListCosEnableRegionResponse) => void
  ): Promise<ListCosEnableRegionResponse> {
    return this.request("ListCosEnableRegion", req, cb)
  }

  /**
   * 查询操作审计跟踪集列表
   */
  async DescribeAuditTracks(
    req: DescribeAuditTracksRequest,
    cb?: (error: string, rep: DescribeAuditTracksResponse) => void
  ): Promise<DescribeAuditTracksResponse> {
    return this.request("DescribeAuditTracks", req, cb)
  }

  /**
   * 查询用户可创建跟踪集的数量
   */
  async InquireAuditCredit(
    req?: InquireAuditCreditRequest,
    cb?: (error: string, rep: InquireAuditCreditResponse) => void
  ): Promise<InquireAuditCreditResponse> {
    return this.request("InquireAuditCredit", req, cb)
  }

  /**
     * 参数要求：
1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
     */
  async UpdateAudit(
    req: UpdateAuditRequest,
    cb?: (error: string, rep: UpdateAuditResponse) => void
  ): Promise<UpdateAuditResponse> {
    return this.request("UpdateAudit", req, cb)
  }

  /**
   * 根据地域获取KMS密钥别名
   */
  async ListKeyAliasByRegion(
    req: ListKeyAliasByRegionRequest,
    cb?: (error: string, rep: ListKeyAliasByRegionResponse) => void
  ): Promise<ListKeyAliasByRegionResponse> {
    return this.request("ListKeyAliasByRegion", req, cb)
  }

  /**
   * 查询跟踪集详情
   */
  async DescribeAudit(
    req: DescribeAuditRequest,
    cb?: (error: string, rep: DescribeAuditResponse) => void
  ): Promise<DescribeAuditResponse> {
    return this.request("DescribeAudit", req, cb)
  }

  /**
   * 删除操作审计跟踪集
   */
  async DeleteAuditTrack(
    req: DeleteAuditTrackRequest,
    cb?: (error: string, rep: DeleteAuditTrackResponse) => void
  ): Promise<DeleteAuditTrackResponse> {
    return this.request("DeleteAuditTrack", req, cb)
  }

  /**
   * 用于对操作日志进行检索，便于用户进行查询相关的操作信息。
   */
  async LookUpEvents(
    req: LookUpEventsRequest,
    cb?: (error: string, rep: LookUpEventsResponse) => void
  ): Promise<LookUpEventsResponse> {
    return this.request("LookUpEvents", req, cb)
  }

  /**
   * 查询跟踪集概要
   */
  async ListAudits(
    req?: ListAuditsRequest,
    cb?: (error: string, rep: ListAuditsResponse) => void
  ): Promise<ListAuditsResponse> {
    return this.request("ListAudits", req, cb)
  }
}
