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
  ModifySmsTemplateResponse,
  SmsAddCrowdPackInfoResponse,
  PushMmsContentResponse,
  AddSmsTemplateDataStruct,
  DescribeMmsInstanceListRequest,
  DescribeMmsInstanceInfoResponse,
  SendSmsPaasDataStruct,
  AddCrowdPackInfoResponse,
  AddSmsSignRequest,
  AddSmsSignResponse,
  GetSmsCampaignStatusRequest,
  DescribeSmsTemplateListResponse,
  MmsInstanceInfoList,
  GetCrowdPackListResponse,
  CreateMmsInstanceResp,
  AddSmsTemplateRequest,
  DescribeMmsInstanceInfoRequest,
  CreateCampaignResponse,
  PushMmsContentResp,
  UploadFansInfoCosInfo,
  CreateCampaignRequest,
  SmsAmountDataStruct,
  AddCrowdPackInfoRequest,
  SmsSuccessResponse,
  SmsGetCrowdPackListResponse,
  DescribeSmsTemplateListDataStruct,
  DeleteMmsInstanceResponse,
  ModifySmsTemplateRequest,
  MmsInstanceStateInfo,
  CancelActivityData,
  SendSmsResponse,
  PaasStrategy,
  CancelCampaignResponse,
  SmsCampaignStatisticsCrowdData,
  DescribeSmsSignListRequest,
  GetCrowdUploadInfoResponse,
  SmsGetCrowdPackList,
  GetSmsAmountInfoResponse,
  DescribeSmsSignListDataStruct,
  GetCrowdPackListRequest,
  AddSmsTemplateResponse,
  PaasCreateSignResp,
  PaasSmsCampaignStatusResp,
  DelCrowdPackResponse,
  DelCrowdPackRequest,
  CreateMmsInstanceResponse,
  DescribeSmsTemplateListRequest,
  DeleteMmsInstanceRequest,
  DelMmsInstanceData,
  PaasStrategyItem,
  GetSmsAmountInfoRequest,
  DelTemplateRequest,
  SmsCreateCampaignResponse,
  ModifySmsTemplateDataStruct,
  PushMmsContentRequest,
  DescribeMmsInstanceListResponse,
  CreateMmsInstanceItem,
  GetCrowdUploadInfoRequest,
  CancelCampaignRequest,
  SmsCampaignStatisticsData,
  MmsInstanceInfo,
  DelTemplateResponse,
  SmsGetCrowdUploadInfoResponse,
  CreateMmsInstanceRequest,
  DescribeSmsSignListResponse,
  DescribeSmsCampaignStatisticsResponse,
  GetSmsCampaignStatusResponse,
  DescribeSmsCampaignStatisticsRequest,
  SendSmsRequest,
  SmsCampaignStatisticsTemplateData,
} from "./zj_models"

/**
 * zj client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("zj.tencentcloudapi.com", "2019-01-21", clientConfig)
  }

  /**
   * 获取彩信实例列表
   */
  async DescribeMmsInstanceList(
    req: DescribeMmsInstanceListRequest,
    cb?: (error: string, rep: DescribeMmsInstanceListResponse) => void
  ): Promise<DescribeMmsInstanceListResponse> {
    return this.request("DescribeMmsInstanceList", req, cb)
  }

  /**
   * 删除人群包
   */
  async DelCrowdPack(
    req: DelCrowdPackRequest,
    cb?: (error: string, rep: DelCrowdPackResponse) => void
  ): Promise<DelCrowdPackResponse> {
    return this.request("DelCrowdPack", req, cb)
  }

  /**
   * 删除短信模板
   */
  async DelTemplate(
    req: DelTemplateRequest,
    cb?: (error: string, rep: DelTemplateResponse) => void
  ): Promise<DelTemplateResponse> {
    return this.request("DelTemplate", req, cb)
  }

  /**
   * 添加短信人群包信息
   */
  async AddCrowdPackInfo(
    req: AddCrowdPackInfoRequest,
    cb?: (error: string, rep: AddCrowdPackInfoResponse) => void
  ): Promise<AddCrowdPackInfoResponse> {
    return this.request("AddCrowdPackInfo", req, cb)
  }

  /**
   * 创建普通短信签名信息
   */
  async AddSmsSign(
    req: AddSmsSignRequest,
    cb?: (error: string, rep: AddSmsSignResponse) => void
  ): Promise<AddSmsSignResponse> {
    return this.request("AddSmsSign", req, cb)
  }

  /**
   * 删除超级短信样例
   */
  async DeleteMmsInstance(
    req: DeleteMmsInstanceRequest,
    cb?: (error: string, rep: DeleteMmsInstanceResponse) => void
  ): Promise<DeleteMmsInstanceResponse> {
    return this.request("DeleteMmsInstance", req, cb)
  }

  /**
   * 获取人群包列表接口
   */
  async GetCrowdPackList(
    req: GetCrowdPackListRequest,
    cb?: (error: string, rep: GetCrowdPackListResponse) => void
  ): Promise<GetCrowdPackListResponse> {
    return this.request("GetCrowdPackList", req, cb)
  }

  /**
   * 根据短信标题、模板内容等创建短信模板
   */
  async AddSmsTemplate(
    req: AddSmsTemplateRequest,
    cb?: (error: string, rep: AddSmsTemplateResponse) => void
  ): Promise<AddSmsTemplateResponse> {
    return this.request("AddSmsTemplate", req, cb)
  }

  /**
   * 发送短信
   */
  async SendSms(
    req: SendSmsRequest,
    cb?: (error: string, rep: SendSmsResponse) => void
  ): Promise<SendSmsResponse> {
    return this.request("SendSms", req, cb)
  }

  /**
   * 获取短信活动状态信息
   */
  async GetSmsCampaignStatus(
    req: GetSmsCampaignStatusRequest,
    cb?: (error: string, rep: GetSmsCampaignStatusResponse) => void
  ): Promise<GetSmsCampaignStatusResponse> {
    return this.request("GetSmsCampaignStatus", req, cb)
  }

  /**
   * 获取普通短信签名信息
   */
  async DescribeSmsSignList(
    req: DescribeSmsSignListRequest,
    cb?: (error: string, rep: DescribeSmsSignListResponse) => void
  ): Promise<DescribeSmsSignListResponse> {
    return this.request("DescribeSmsSignList", req, cb)
  }

  /**
   * 获取模板信息
   */
  async DescribeSmsTemplateList(
    req: DescribeSmsTemplateListRequest,
    cb?: (error: string, rep: DescribeSmsTemplateListResponse) => void
  ): Promise<DescribeSmsTemplateListResponse> {
    return this.request("DescribeSmsTemplateList", req, cb)
  }

  /**
   * 获取短信超短活动统计数据
   */
  async DescribeSmsCampaignStatistics(
    req: DescribeSmsCampaignStatisticsRequest,
    cb?: (error: string, rep: DescribeSmsCampaignStatisticsResponse) => void
  ): Promise<DescribeSmsCampaignStatisticsResponse> {
    return this.request("DescribeSmsCampaignStatistics", req, cb)
  }

  /**
   * 创建超级短信的素材样例内容
   */
  async CreateMmsInstance(
    req: CreateMmsInstanceRequest,
    cb?: (error: string, rep: CreateMmsInstanceResponse) => void
  ): Promise<CreateMmsInstanceResponse> {
    return this.request("CreateMmsInstance", req, cb)
  }

  /**
   * 获取彩信实例信息
   */
  async DescribeMmsInstanceInfo(
    req: DescribeMmsInstanceInfoRequest,
    cb?: (error: string, rep: DescribeMmsInstanceInfoResponse) => void
  ): Promise<DescribeMmsInstanceInfoResponse> {
    return this.request("DescribeMmsInstanceInfo", req, cb)
  }

  /**
   * 取消短信推送活动
   */
  async CancelCampaign(
    req: CancelCampaignRequest,
    cb?: (error: string, rep: CancelCampaignResponse) => void
  ): Promise<CancelCampaignResponse> {
    return this.request("CancelCampaign", req, cb)
  }

  /**
   * 获取账号短信额度配置信息
   */
  async GetSmsAmountInfo(
    req: GetSmsAmountInfoRequest,
    cb?: (error: string, rep: GetSmsAmountInfoResponse) => void
  ): Promise<GetSmsAmountInfoResponse> {
    return this.request("GetSmsAmountInfo", req, cb)
  }

  /**
   * 推送超级短信
   */
  async PushMmsContent(
    req: PushMmsContentRequest,
    cb?: (error: string, rep: PushMmsContentResponse) => void
  ): Promise<PushMmsContentResponse> {
    return this.request("PushMmsContent", req, cb)
  }

  /**
   * 创建短信推送活动
   */
  async CreateCampaign(
    req: CreateCampaignRequest,
    cb?: (error: string, rep: CreateCampaignResponse) => void
  ): Promise<CreateCampaignResponse> {
    return this.request("CreateCampaign", req, cb)
  }

  /**
   * 获取短信人群包cos上传需要的信息
   */
  async GetCrowdUploadInfo(
    req: GetCrowdUploadInfoRequest,
    cb?: (error: string, rep: GetCrowdUploadInfoResponse) => void
  ): Promise<GetCrowdUploadInfoResponse> {
    return this.request("GetCrowdUploadInfo", req, cb)
  }

  /**
   * 对未审核或者审核未通过的短信模板内容进行编辑修改
   */
  async ModifySmsTemplate(
    req: ModifySmsTemplateRequest,
    cb?: (error: string, rep: ModifySmsTemplateResponse) => void
  ): Promise<ModifySmsTemplateResponse> {
    return this.request("ModifySmsTemplate", req, cb)
  }
}
