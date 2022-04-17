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
  DescribeMappingResultsResponse,
  DescribeAssetDetailRequest,
  DescribeSocCheckItemListResponse,
  DescribeVulListResponse,
  DescribeSocAlertDetailsRequest,
  DescribeComplianceAssetListResponse,
  DataCheck,
  DescribeSocCheckResultListResponse,
  SocProductionItem,
  MappingResult,
  DescribeCheckConfigAssetListRequest,
  Asset,
  SaDivulgeDataQueryPubRequest,
  DescribeComplianceListResponse,
  DescribeConfigListResponse,
  AggregationObj,
  DescribeCheckConfigDetailResponse,
  DescribeAssetListResponse,
  DescribeSocAlertDetailsResponse,
  VulItem,
  DescribeCheckConfigAssetListResponse,
  Tag,
  SocCheckResult,
  AlertListData,
  SaDivulgeDataQueryPub,
  SocComplianceInfoResp,
  DescribeAssetListRequest,
  DescribeComplianceDetailResponse,
  DescribeAssetsMappingListResponse,
  DescribeSocAlertListResponse,
  SocComplianceItem,
  SecurityStatus,
  QuerySort,
  DescribeComplianceListRequest,
  DescribeVulListRequest,
  DescribeLeakDetectionListRequest,
  SocCheckItemV1,
  DescribeEventDetailResponse,
  DescribeSafetyEventListResponse,
  SaDivulgeDataQueryPubList,
  DescribeSocCheckResultListRequest,
  DescribeSafetyEventListRequest,
  AssetQueryFilter,
  AlertType,
  DescribeSocAlertListRequest,
  ComplianceCheckDetail,
  SaDivulgeDataQueryPubResponse,
  Bucket,
  DescribeConfigListRequest,
  DescribeSocCspmComplianceResponse,
  DescribeMappingResultsRequest,
  Filter,
  AssetList,
  DataAssetMapping,
  DescribeCheckConfigDetailRequest,
  VulList,
  DescribeLeakDetectionListResponse,
  DataEvent,
  DescribeSocCheckItemListRequest,
  CheckConfigDetail,
  DescribeSocCheckItemListRspRsp,
  SocCheckItem,
  DescribeEventDetailRequest,
  CheckAssetItem,
  AssetTypeStatistic,
  DescribeSocCheckResultListRspRsp,
  DescribeVulDetailRequest,
  ConcernInfo,
  DescribeAssetsMappingListRequest,
  DataCompliance,
  Results,
  AssetDetail,
  DescribeComplianceAssetListRequest,
  QueryFilter,
  DescribeAssetDetailResponse,
  DescribeVulDetailResponse,
  DescribeSocCspmComplianceRequest,
  AlertDetail,
  DescribeComplianceDetailRequest,
} from "./ssa_models"

/**
 * ssa client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ssa.tencentcloudapi.com", "2018-06-08", clientConfig)
  }

  /**
   * 合规管理总览页检查项列表
   */
  async DescribeComplianceList(
    req: DescribeComplianceListRequest,
    cb?: (error: string, rep: DescribeComplianceListResponse) => void
  ): Promise<DescribeComplianceListResponse> {
    return this.request("DescribeComplianceList", req, cb)
  }

  /**
   * 云配置检查项总览页检查项列表
   */
  async DescribeConfigList(
    req: DescribeConfigListRequest,
    cb?: (error: string, rep: DescribeConfigListResponse) => void
  ): Promise<DescribeConfigListResponse> {
    return this.request("DescribeConfigList", req, cb)
  }

  /**
   * 资产安全资产列表
   */
  async DescribeAssetList(
    req: DescribeAssetListRequest,
    cb?: (error: string, rep: DescribeAssetListResponse) => void
  ): Promise<DescribeAssetListResponse> {
    return this.request("DescribeAssetList", req, cb)
  }

  /**
   * 获取安全事件详情
   */
  async DescribeEventDetail(
    req: DescribeEventDetailRequest,
    cb?: (error: string, rep: DescribeEventDetailResponse) => void
  ): Promise<DescribeEventDetailResponse> {
    return this.request("DescribeEventDetail", req, cb)
  }

  /**
   * 查询【通用字段】【泄露监测数据列表】
   */
  async SaDivulgeDataQueryPub(
    req: SaDivulgeDataQueryPubRequest,
    cb?: (error: string, rep: SaDivulgeDataQueryPubResponse) => void
  ): Promise<SaDivulgeDataQueryPubResponse> {
    return this.request("SaDivulgeDataQueryPub", req, cb)
  }

  /**
   * 合规管理-资产列表
   */
  async DescribeComplianceAssetList(
    req: DescribeComplianceAssetListRequest,
    cb?: (error: string, rep: DescribeComplianceAssetListResponse) => void
  ): Promise<DescribeComplianceAssetListResponse> {
    return this.request("DescribeComplianceAssetList", req, cb)
  }

  /**
   * 云安全配置管理资产组列表
   */
  async DescribeCheckConfigAssetList(
    req: DescribeCheckConfigAssetListRequest,
    cb?: (error: string, rep: DescribeCheckConfigAssetListResponse) => void
  ): Promise<DescribeCheckConfigAssetListResponse> {
    return this.request("DescribeCheckConfigAssetList", req, cb)
  }

  /**
   * 获取泄露列表
   */
  async DescribeLeakDetectionList(
    req: DescribeLeakDetectionListRequest,
    cb?: (error: string, rep: DescribeLeakDetectionListResponse) => void
  ): Promise<DescribeLeakDetectionListResponse> {
    return this.request("DescribeLeakDetectionList", req, cb)
  }

  /**
   * 资产测绘-测绘列表
   */
  async DescribeAssetsMappingList(
    req: DescribeAssetsMappingListRequest,
    cb?: (error: string, rep: DescribeAssetsMappingListResponse) => void
  ): Promise<DescribeAssetsMappingListResponse> {
    return this.request("DescribeAssetsMappingList", req, cb)
  }

  /**
   * 合规详情项
   */
  async DescribeSocCspmCompliance(
    req?: DescribeSocCspmComplianceRequest,
    cb?: (error: string, rep: DescribeSocCspmComplianceResponse) => void
  ): Promise<DescribeSocCspmComplianceResponse> {
    return this.request("DescribeSocCspmCompliance", req, cb)
  }

  /**
   * 获取测绘列表
   */
  async DescribeMappingResults(
    req: DescribeMappingResultsRequest,
    cb?: (error: string, rep: DescribeMappingResultsResponse) => void
  ): Promise<DescribeMappingResultsResponse> {
    return this.request("DescribeMappingResults", req, cb)
  }

  /**
   * 云安全配置检查项列表
   */
  async DescribeSocCheckItemList(
    req: DescribeSocCheckItemListRequest,
    cb?: (error: string, rep: DescribeSocCheckItemListResponse) => void
  ): Promise<DescribeSocCheckItemListResponse> {
    return this.request("DescribeSocCheckItemList", req, cb)
  }

  /**
   * 漏洞管理页，获取漏洞列表
   */
  async DescribeVulList(
    req: DescribeVulListRequest,
    cb?: (error: string, rep: DescribeVulListResponse) => void
  ): Promise<DescribeVulListResponse> {
    return this.request("DescribeVulList", req, cb)
  }

  /**
   * 资产安全页资产详情
   */
  async DescribeAssetDetail(
    req: DescribeAssetDetailRequest,
    cb?: (error: string, rep: DescribeAssetDetailResponse) => void
  ): Promise<DescribeAssetDetailResponse> {
    return this.request("DescribeAssetDetail", req, cb)
  }

  /**
   * 云安全配置检查项详情
   */
  async DescribeCheckConfigDetail(
    req: DescribeCheckConfigDetailRequest,
    cb?: (error: string, rep: DescribeCheckConfigDetailResponse) => void
  ): Promise<DescribeCheckConfigDetailResponse> {
    return this.request("DescribeCheckConfigDetail", req, cb)
  }

  /**
   * 合规管理检查项详情
   */
  async DescribeComplianceDetail(
    req: DescribeComplianceDetailRequest,
    cb?: (error: string, rep: DescribeComplianceDetailResponse) => void
  ): Promise<DescribeComplianceDetailResponse> {
    return this.request("DescribeComplianceDetail", req, cb)
  }

  /**
   * 获取安全事件列表
   */
  async DescribeSafetyEventList(
    req: DescribeSafetyEventListRequest,
    cb?: (error: string, rep: DescribeSafetyEventListResponse) => void
  ): Promise<DescribeSafetyEventListResponse> {
    return this.request("DescribeSafetyEventList", req, cb)
  }

  /**
   * 返回告警详情
   */
  async DescribeSocAlertDetails(
    req: DescribeSocAlertDetailsRequest,
    cb?: (error: string, rep: DescribeSocAlertDetailsResponse) => void
  ): Promise<DescribeSocAlertDetailsResponse> {
    return this.request("DescribeSocAlertDetails", req, cb)
  }

  /**
   * 拉取告警列表
   */
  async DescribeSocAlertList(
    req: DescribeSocAlertListRequest,
    cb?: (error: string, rep: DescribeSocAlertListResponse) => void
  ): Promise<DescribeSocAlertListResponse> {
    return this.request("DescribeSocAlertList", req, cb)
  }

  /**
   * 漏洞列表页，获取漏洞详情信息
   */
  async DescribeVulDetail(
    req: DescribeVulDetailRequest,
    cb?: (error: string, rep: DescribeVulDetailResponse) => void
  ): Promise<DescribeVulDetailResponse> {
    return this.request("DescribeVulDetail", req, cb)
  }

  /**
   * 云安全配置检查项结果列表
   */
  async DescribeSocCheckResultList(
    req: DescribeSocCheckResultListRequest,
    cb?: (error: string, rep: DescribeSocCheckResultListResponse) => void
  ): Promise<DescribeSocCheckResultListResponse> {
    return this.request("DescribeSocCheckResultList", req, cb)
  }
}
