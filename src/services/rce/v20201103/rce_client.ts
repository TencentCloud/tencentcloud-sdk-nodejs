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
  DataContentInfo,
  OutputDescribeNameListFrontFix,
  DescribeNameListResponse,
  OutputDescribeDataListFront,
  InputCreateNameListFront,
  ManageMarketingRiskRequest,
  InputDeleteNameListFront,
  WeChatAccountInfo,
  InputDescribeNameListFront,
  AccountInfo,
  ModifyNameListDataRequest,
  OuntputDescribeDataListInfo,
  InputDescribeNameListDetail,
  OutputManageMarketingRiskValue,
  CreateNameListRequest,
  DeleteNameListDataResponse,
  DescribeUserUsageCntRequest,
  ImportNameListDataResponse,
  DeleteNameListRequest,
  OutputDescribeUserUsageCnt,
  DescribeNameListDetailResponse,
  OutputDescribeNameListInfo,
  ManageMarketingRiskResponse,
  OutputDescribeNameListFrontFixListData,
  OutputDeleteNameListData,
  OutputModifyNameFront,
  InputDetails,
  ModifyNameListRequest,
  OutputModifyNameListFront,
  DescribeNameListDetailRequest,
  DescribeNameListDataListResponse,
  DeleteNameListDataRequest,
  InputModifyNameListDataFront,
  OutputManageMarketingRisk,
  InputDescribeDataListFront,
  InputImportNameListDataFront,
  DescribeNameListDataListRequest,
  InputCryptoManageMarketingRisk,
  DescribeNameListRequest,
  OutputImportNameListDataFront,
  InputModifyNameFront,
  SponsorInfo,
  CreateNameListResponse,
  OtherAccountInfo,
  OutputDescribeDataListFrontData,
  OutputDescribeNameListDetailFront,
  OutputDescribeNameListDetail,
  OnlineScamInfo,
  QQAccountInfo,
  ModifyNameListDataResponse,
  InputManageMarketingRisk,
  OutputCreateNameListFront,
  OutputDescribeUserUsageCntData,
  ModifyNameListResponse,
  OutputDeleteNameListFront,
  InputDeleteNameListData,
  ImportNameListDataRequest,
  DataAuthorizationInfo,
  DeleteNameListResponse,
  InputModifyNameListDataFrontListData,
  DescribeUserUsageCntResponse,
} from "./rce_models"

/**
 * rce client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("rce.tencentcloudapi.com", "2020-11-03", clientConfig)
  }

  /**
   * 修改黑白名单列表详情 详情内容 开始和结束时间 状态 备注等
   */
  async ModifyNameListData(
    req: ModifyNameListDataRequest,
    cb?: (error: string, rep: ModifyNameListDataResponse) => void
  ): Promise<ModifyNameListDataResponse> {
    return this.request("ModifyNameListData", req, cb)
  }

  /**
   * 删除黑白名单数据
   */
  async DeleteNameListData(
    req: DeleteNameListDataRequest,
    cb?: (error: string, rep: DeleteNameListDataResponse) => void
  ): Promise<DeleteNameListDataResponse> {
    return this.request("DeleteNameListData", req, cb)
  }

  /**
   * 黑白名单详情数据展示 名单id 客户appid uin 数据内容 开始时间和结束时间 状态 描述
   */
  async DescribeNameListDataList(
    req: DescribeNameListDataListRequest,
    cb?: (error: string, rep: DescribeNameListDataListResponse) => void
  ): Promise<DescribeNameListDataListResponse> {
    return this.request("DescribeNameListDataList", req, cb)
  }

  /**
   * 查询黑白名单列表详情
   */
  async DescribeNameListDetail(
    req: DescribeNameListDetailRequest,
    cb?: (error: string, rep: DescribeNameListDetailResponse) => void
  ): Promise<DescribeNameListDetailResponse> {
    return this.request("DescribeNameListDetail", req, cb)
  }

  /**
   * 全栈式风控引擎（RiskControlEngine，RCE）是基于人工智能技术和腾讯20年风控实战沉淀，依托腾讯海量业务构建的风控引擎，以轻量级的 SaaS 服务方式接入，帮助您快速解决注册、登录、营销活动等关键场景遇到的欺诈问题，实时防御黑灰产作恶。
   */
  async ManageMarketingRisk(
    req: ManageMarketingRiskRequest,
    cb?: (error: string, rep: ManageMarketingRiskResponse) => void
  ): Promise<ManageMarketingRiskResponse> {
    return this.request("ManageMarketingRisk", req, cb)
  }

  /**
   * 修改列表数据 列表名称 列表类型 数据类型 状态 备注
   */
  async ModifyNameList(
    req: ModifyNameListRequest,
    cb?: (error: string, rep: ModifyNameListResponse) => void
  ): Promise<ModifyNameListResponse> {
    return this.request("ModifyNameList", req, cb)
  }

  /**
   * 创建黑白名单，黑白名单数量上限为100
   */
  async CreateNameList(
    req: CreateNameListRequest,
    cb?: (error: string, rep: CreateNameListResponse) => void
  ): Promise<CreateNameListResponse> {
    return this.request("CreateNameList", req, cb)
  }

  /**
   * 修改黑白名单状态 关闭 开启 删除
   */
  async DeleteNameList(
    req: DeleteNameListRequest,
    cb?: (error: string, rep: DeleteNameListResponse) => void
  ): Promise<DeleteNameListResponse> {
    return this.request("DeleteNameList", req, cb)
  }

  /**
   * RCE控制台预付费和后付费次数展示
   */
  async DescribeUserUsageCnt(
    req?: DescribeUserUsageCntRequest,
    cb?: (error: string, rep: DescribeUserUsageCntResponse) => void
  ): Promise<DescribeUserUsageCntResponse> {
    return this.request("DescribeUserUsageCnt", req, cb)
  }

  /**
   * 新增黑白名单数据，所有黑白名单数据总量上限为10000
   */
  async ImportNameListData(
    req: ImportNameListDataRequest,
    cb?: (error: string, rep: ImportNameListDataResponse) => void
  ): Promise<ImportNameListDataResponse> {
    return this.request("ImportNameListData", req, cb)
  }

  /**
   * 列表展示黑白名单列表数据, 包含列表名称, 名单类型, 数据类型, 数据来源, 描述, 状态等
   */
  async DescribeNameList(
    req: DescribeNameListRequest,
    cb?: (error: string, rep: DescribeNameListResponse) => void
  ): Promise<DescribeNameListResponse> {
    return this.request("DescribeNameList", req, cb)
  }
}
