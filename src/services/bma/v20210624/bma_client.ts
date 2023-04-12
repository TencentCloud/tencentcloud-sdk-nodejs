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
  ProtectURLInfo,
  ModifyCRWhiteListRequest,
  CreateCRUserVerifyRequest,
  CreateBPFalseTicketResponse,
  CreateCRRightFileRequest,
  CreateCRRightResponse,
  CreateCRWorkResponse,
  CreateCRRightRequest,
  CreateBPOfflineTicketResponse,
  CreateCRTortRequest,
  UpdateCRWorkRequest,
  DescribeBPFakeURLsRequest,
  ModifyCRBlockStatusResponse,
  Monitor,
  ModifyCRObtainStatusRequest,
  ReportFakeURLInfo,
  DescribeCRWorkInfoRequest,
  ModifyBPOfflineAttachmentRequest,
  DescribeBPFakeURLsResponse,
  CreateBPOfflineAttachmentResponse,
  DescribeBPReportFakeURLsRequest,
  DescribeCRMonitorDetailResponse,
  MonitorTort,
  CreateBPFakeURLRequest,
  CreateBPProtectURLsResponse,
  DescribeBPProtectURLsResponse,
  DescribeCRMonitorsResponse,
  CreateCRCompanyVerifyResponse,
  CreateBPOfflineAttachmentRequest,
  CreateCRDesktopCodeResponse,
  CreateBPProtectURLsRequest,
  UpdateCRWorkResponse,
  ModifyCRBlockStatusRequest,
  ModifyCRMonitorRequest,
  CreateCRDesktopCodeRequest,
  CreateCRWorkRequest,
  DescribeBPCompanyInfoRequest,
  DescribeCRObtainDetailRequest,
  DescribeBPReportFakeURLsResponse,
  DescribeCRMonitorDetailRequest,
  Filter,
  CreateCRBlockResponse,
  ModifyCRRightStatusRequest,
  DescribeCRMonitorsRequest,
  DescribeCRWorkInfoResponse,
  DescribeCRObtainDetailResponse,
  CreateCRRightFileResponse,
  ModifyCRWhiteListResponse,
  FakeURLInfo,
  CreateBPOfflineTicketRequest,
  CreateCRUserVerifyResponse,
  BrandData,
  ModifyCRRightStatusResponse,
  DescribeBPCompanyInfoResponse,
  ModifyBPOfflineAttachmentResponse,
  CreateCRBlockRequest,
  CreateBPFakeURLResponse,
  CreateCRTortResponse,
  CreateBPFalseTicketRequest,
  ModifyCRMonitorResponse,
  File,
  DescribeBPProtectURLsRequest,
  ModifyCRObtainStatusResponse,
  CreateCRCompanyVerifyRequest,
} from "./bma_models"

/**
 * bma client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bma.tencentcloudapi.com", "2021-06-24", clientConfig)
  }

  /**
   * 更新作品
   */
  async UpdateCRWork(
    req: UpdateCRWorkRequest,
    cb?: (error: string, rep: UpdateCRWorkResponse) => void
  ): Promise<UpdateCRWorkResponse> {
    return this.request("UpdateCRWork", req, cb)
  }

  /**
   * 新建过程取证码
   */
  async CreateCRDesktopCode(
    req: CreateCRDesktopCodeRequest,
    cb?: (error: string, rep: CreateCRDesktopCodeResponse) => void
  ): Promise<CreateCRDesktopCodeResponse> {
    return this.request("CreateCRDesktopCode", req, cb)
  }

  /**
   * 查询企业信息
   */
  async DescribeBPCompanyInfo(
    req?: DescribeBPCompanyInfoRequest,
    cb?: (error: string, rep: DescribeBPCompanyInfoResponse) => void
  ): Promise<DescribeBPCompanyInfoResponse> {
    return this.request("DescribeBPCompanyInfo", req, cb)
  }

  /**
   * 本接口用于个人认证，新接入用户必须认证后才可以进行后续操作（个人认证和企业认证二选一），只需认证一次即可
   */
  async CreateCRUserVerify(
    req: CreateCRUserVerifyRequest,
    cb?: (error: string, rep: CreateCRUserVerifyResponse) => void
  ): Promise<CreateCRUserVerifyResponse> {
    return this.request("CreateCRUserVerify", req, cb)
  }

  /**
   * 新建作品
   */
  async CreateCRWork(
    req: CreateCRWorkRequest,
    cb?: (error: string, rep: CreateCRWorkResponse) => void
  ): Promise<CreateCRWorkResponse> {
    return this.request("CreateCRWork", req, cb)
  }

  /**
   * 添加下线工单
   */
  async CreateBPOfflineTicket(
    req: CreateBPOfflineTicketRequest,
    cb?: (error: string, rep: CreateBPOfflineTicketResponse) => void
  ): Promise<CreateBPOfflineTicketResponse> {
    return this.request("CreateBPOfflineTicket", req, cb)
  }

  /**
   * 查询取证详情
   */
  async DescribeCRObtainDetail(
    req: DescribeCRObtainDetailRequest,
    cb?: (error: string, rep: DescribeCRObtainDetailResponse) => void
  ): Promise<DescribeCRObtainDetailResponse> {
    return this.request("DescribeCRObtainDetail", req, cb)
  }

  /**
     * 新建协查处置

     */
  async CreateCRBlock(
    req: CreateCRBlockRequest,
    cb?: (error: string, rep: CreateCRBlockResponse) => void
  ): Promise<CreateCRBlockResponse> {
    return this.request("CreateCRBlock", req, cb)
  }

  /**
   * 取证申请
   */
  async ModifyCRObtainStatus(
    req: ModifyCRObtainStatusRequest,
    cb?: (error: string, rep: ModifyCRObtainStatusResponse) => void
  ): Promise<ModifyCRObtainStatusResponse> {
    return this.request("ModifyCRObtainStatus", req, cb)
  }

  /**
   * 版权保护-新建发函接口
   */
  async CreateCRRight(
    req: CreateCRRightRequest,
    cb?: (error: string, rep: CreateCRRightResponse) => void
  ): Promise<CreateCRRightResponse> {
    return this.request("CreateCRRight", req, cb)
  }

  /**
   * 修改下线材料
   */
  async ModifyBPOfflineAttachment(
    req: ModifyBPOfflineAttachmentRequest,
    cb?: (error: string, rep: ModifyBPOfflineAttachmentResponse) => void
  ): Promise<ModifyBPOfflineAttachmentResponse> {
    return this.request("ModifyBPOfflineAttachment", req, cb)
  }

  /**
   * 开启/关闭监测
   */
  async ModifyCRMonitor(
    req: ModifyCRMonitorRequest,
    cb?: (error: string, rep: ModifyCRMonitorResponse) => void
  ): Promise<ModifyCRMonitorResponse> {
    return this.request("ModifyCRMonitor", req, cb)
  }

  /**
   * 版权保护-查询作品监测详情接口
   */
  async DescribeCRMonitorDetail(
    req: DescribeCRMonitorDetailRequest,
    cb?: (error: string, rep: DescribeCRMonitorDetailResponse) => void
  ): Promise<DescribeCRMonitorDetailResponse> {
    return this.request("DescribeCRMonitorDetail", req, cb)
  }

  /**
   * 添加仿冒链接（举报）
   */
  async CreateBPFakeURL(
    req: CreateBPFakeURLRequest,
    cb?: (error: string, rep: CreateBPFakeURLResponse) => void
  ): Promise<CreateBPFakeURLResponse> {
    return this.request("CreateBPFakeURL", req, cb)
  }

  /**
   * 权属文件添加
   */
  async CreateCRRightFile(
    req: CreateCRRightFileRequest,
    cb?: (error: string, rep: CreateCRRightFileResponse) => void
  ): Promise<CreateCRRightFileResponse> {
    return this.request("CreateCRRightFile", req, cb)
  }

  /**
   * 修改白名单列表
   */
  async ModifyCRWhiteList(
    req: ModifyCRWhiteListRequest,
    cb?: (error: string, rep: ModifyCRWhiteListResponse) => void
  ): Promise<ModifyCRWhiteListResponse> {
    return this.request("ModifyCRWhiteList", req, cb)
  }

  /**
   * 协查处置申请
   */
  async ModifyCRBlockStatus(
    req: ModifyCRBlockStatusRequest,
    cb?: (error: string, rep: ModifyCRBlockStatusResponse) => void
  ): Promise<ModifyCRBlockStatusResponse> {
    return this.request("ModifyCRBlockStatus", req, cb)
  }

  /**
   * 添加误报工单
   */
  async CreateBPFalseTicket(
    req: CreateBPFalseTicketRequest,
    cb?: (error: string, rep: CreateBPFalseTicketResponse) => void
  ): Promise<CreateBPFalseTicketResponse> {
    return this.request("CreateBPFalseTicket", req, cb)
  }

  /**
   * 添加保护网站
   */
  async CreateBPProtectURLs(
    req: CreateBPProtectURLsRequest,
    cb?: (error: string, rep: CreateBPProtectURLsResponse) => void
  ): Promise<CreateBPProtectURLsResponse> {
    return this.request("CreateBPProtectURLs", req, cb)
  }

  /**
   * 查询举报列表
   */
  async DescribeBPReportFakeURLs(
    req: DescribeBPReportFakeURLsRequest,
    cb?: (error: string, rep: DescribeBPReportFakeURLsResponse) => void
  ): Promise<DescribeBPReportFakeURLsResponse> {
    return this.request("DescribeBPReportFakeURLs", req, cb)
  }

  /**
   * 查询仿冒链接
   */
  async DescribeBPFakeURLs(
    req: DescribeBPFakeURLsRequest,
    cb?: (error: string, rep: DescribeBPFakeURLsResponse) => void
  ): Promise<DescribeBPFakeURLsResponse> {
    return this.request("DescribeBPFakeURLs", req, cb)
  }

  /**
   * 查询作品基本信息
   */
  async DescribeCRWorkInfo(
    req: DescribeCRWorkInfoRequest,
    cb?: (error: string, rep: DescribeCRWorkInfoResponse) => void
  ): Promise<DescribeCRWorkInfoResponse> {
    return this.request("DescribeCRWorkInfo", req, cb)
  }

  /**
   * 版权保护-查询监测列表接口
   */
  async DescribeCRMonitors(
    req: DescribeCRMonitorsRequest,
    cb?: (error: string, rep: DescribeCRMonitorsResponse) => void
  ): Promise<DescribeCRMonitorsResponse> {
    return this.request("DescribeCRMonitors", req, cb)
  }

  /**
   * 发函申请
   */
  async ModifyCRRightStatus(
    req: ModifyCRRightStatusRequest,
    cb?: (error: string, rep: ModifyCRRightStatusResponse) => void
  ): Promise<ModifyCRRightStatusResponse> {
    return this.request("ModifyCRRightStatus", req, cb)
  }

  /**
   * 添加下线材料
   */
  async CreateBPOfflineAttachment(
    req: CreateBPOfflineAttachmentRequest,
    cb?: (error: string, rep: CreateBPOfflineAttachmentResponse) => void
  ): Promise<CreateBPOfflineAttachmentResponse> {
    return this.request("CreateBPOfflineAttachment", req, cb)
  }

  /**
   * 查询保护网站
   */
  async DescribeBPProtectURLs(
    req: DescribeBPProtectURLsRequest,
    cb?: (error: string, rep: DescribeBPProtectURLsResponse) => void
  ): Promise<DescribeBPProtectURLsResponse> {
    return this.request("DescribeBPProtectURLs", req, cb)
  }

  /**
   * 举报侵权链接
   */
  async CreateCRTort(
    req: CreateCRTortRequest,
    cb?: (error: string, rep: CreateCRTortResponse) => void
  ): Promise<CreateCRTortResponse> {
    return this.request("CreateCRTort", req, cb)
  }

  /**
   * 本接口用于企业认证，新接入用户必须认证后才可以进行后续操作（个人认证和企业认证二选一），只需认证一次即可
   */
  async CreateCRCompanyVerify(
    req: CreateCRCompanyVerifyRequest,
    cb?: (error: string, rep: CreateCRCompanyVerifyResponse) => void
  ): Promise<CreateCRCompanyVerifyResponse> {
    return this.request("CreateCRCompanyVerify", req, cb)
  }
}
