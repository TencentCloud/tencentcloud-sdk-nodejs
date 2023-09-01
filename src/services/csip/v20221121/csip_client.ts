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
  DescribeDomainAssetsResponse,
  ScanTaskInfoList,
  DescribeDbAssetInfoResponse,
  CreateRiskCenterScanTaskRequest,
  ReportItemKey,
  DescribeScanReportListRequest,
  TaskLogURL,
  DescribeRiskCenterAssetViewVULRiskListRequest,
  TaskCenterCFGRiskInputParam,
  TaskCenterWeakPwdRiskInputParam,
  TaskLogInfo,
  CreateDomainAndIpRequest,
  DomainAssetVO,
  DescribeSearchBugInfoResponse,
  TaskCenterVulRiskInputParam,
  DescribeScanTaskListResponse,
  DescribeScanTaskListRequest,
  DescribeVpcAssetsResponse,
  FilterDataObject,
  DescribeDbAssetsRequest,
  CVMAssetVO,
  DescribeTaskLogListResponse,
  DescribeScanReportListResponse,
  DescribeSearchBugInfoRequest,
  BugInfoDetail,
  DescribeClusterPodAssetsRequest,
  DescribeSubnetAssetsRequest,
  AddNewBindRoleUserRequest,
  DescribeCVMAssetInfoResponse,
  DescribePublicIpAssetsResponse,
  DescribeTaskLogListRequest,
  Vpc,
  DescribeRiskCenterAssetViewVULRiskListResponse,
  DescribeCVMAssetsRequest,
  DescribeListenerListResponse,
  DescribeTaskLogURLResponse,
  DBAssetVO,
  DataSearchBug,
  AssetInfoDetail,
  ScanTaskInfo,
  SubnetAsset,
  CreateRiskCenterScanTaskResponse,
  DescribeRiskCenterAssetViewPortRiskListResponse,
  DescribeSubnetAssetsResponse,
  DescribeDbAssetInfoRequest,
  DescribeRiskCenterAssetViewPortRiskListRequest,
  ClbListenerListInfo,
  DescribeCVMAssetsResponse,
  DescribeVpcAssetsRequest,
  TaskAssetObject,
  Filter,
  DbAssetInfo,
  Tag,
  IpAssetListVO,
  AssetViewVULRisk,
  DescribeClusterPodAssetsResponse,
  AssetBaseInfoResponse,
  AssetViewPortRisk,
  DescribeListenerListRequest,
  DescribeDomainAssetsRequest,
  CreateDomainAndIpResponse,
  DescribePublicIpAssetsRequest,
  TaskAdvanceCFG,
  AssetClusterPod,
  DescribeDbAssetsResponse,
  AddNewBindRoleUserResponse,
  DescribeCVMAssetInfoRequest,
  WhereFilter,
  DescribeTaskLogURLRequest,
} from "./csip_models"

/**
 * csip client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("csip.tencentcloudapi.com", "2022-11-21", clientConfig)
  }

  /**
   * 获取报告下载的临时链接
   */
  async DescribeTaskLogURL(
    req: DescribeTaskLogURLRequest,
    cb?: (error: string, rep: DescribeTaskLogURLResponse) => void
  ): Promise<DescribeTaskLogURLResponse> {
    return this.request("DescribeTaskLogURL", req, cb)
  }

  /**
   * 获取任务扫描报告列表
   */
  async DescribeTaskLogList(
    req: DescribeTaskLogListRequest,
    cb?: (error: string, rep: DescribeTaskLogListResponse) => void
  ): Promise<DescribeTaskLogListResponse> {
    return this.request("DescribeTaskLogList", req, cb)
  }

  /**
   * 获取资产视角的漏洞风险列表
   */
  async DescribeRiskCenterAssetViewVULRiskList(
    req: DescribeRiskCenterAssetViewVULRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewVULRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewVULRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewVULRiskList", req, cb)
  }

  /**
   * 集群pod列表
   */
  async DescribeClusterPodAssets(
    req: DescribeClusterPodAssetsRequest,
    cb?: (error: string, rep: DescribeClusterPodAssetsResponse) => void
  ): Promise<DescribeClusterPodAssetsResponse> {
    return this.request("DescribeClusterPodAssets", req, cb)
  }

  /**
   * 获取子网列表
   */
  async DescribeSubnetAssets(
    req: DescribeSubnetAssetsRequest,
    cb?: (error: string, rep: DescribeSubnetAssetsResponse) => void
  ): Promise<DescribeSubnetAssetsResponse> {
    return this.request("DescribeSubnetAssets", req, cb)
  }

  /**
   * 获取vpc列表
   */
  async DescribeVpcAssets(
    req: DescribeVpcAssetsRequest,
    cb?: (error: string, rep: DescribeVpcAssetsResponse) => void
  ): Promise<DescribeVpcAssetsResponse> {
    return this.request("DescribeVpcAssets", req, cb)
  }

  /**
   * db资产详情
   */
  async DescribeDbAssetInfo(
    req: DescribeDbAssetInfoRequest,
    cb?: (error: string, rep: DescribeDbAssetInfoResponse) => void
  ): Promise<DescribeDbAssetInfoResponse> {
    return this.request("DescribeDbAssetInfo", req, cb)
  }

  /**
   * cvm列表
   */
  async DescribeCVMAssets(
    req: DescribeCVMAssetsRequest,
    cb?: (error: string, rep: DescribeCVMAssetsResponse) => void
  ): Promise<DescribeCVMAssetsResponse> {
    return this.request("DescribeCVMAssets", req, cb)
  }

  /**
   * 域名列表
   */
  async DescribeDomainAssets(
    req: DescribeDomainAssetsRequest,
    cb?: (error: string, rep: DescribeDomainAssetsResponse) => void
  ): Promise<DescribeDomainAssetsResponse> {
    return this.request("DescribeDomainAssets", req, cb)
  }

  /**
   * 立体防护中心查询漏洞信息
   */
  async DescribeSearchBugInfo(
    req: DescribeSearchBugInfoRequest,
    cb?: (error: string, rep: DescribeSearchBugInfoResponse) => void
  ): Promise<DescribeSearchBugInfoResponse> {
    return this.request("DescribeSearchBugInfo", req, cb)
  }

  /**
   * ip公网列表
   */
  async DescribePublicIpAssets(
    req: DescribePublicIpAssetsRequest,
    cb?: (error: string, rep: DescribePublicIpAssetsResponse) => void
  ): Promise<DescribePublicIpAssetsResponse> {
    return this.request("DescribePublicIpAssets", req, cb)
  }

  /**
   * csip角色授权绑定接口
   */
  async AddNewBindRoleUser(
    req?: AddNewBindRoleUserRequest,
    cb?: (error: string, rep: AddNewBindRoleUserResponse) => void
  ): Promise<AddNewBindRoleUserResponse> {
    return this.request("AddNewBindRoleUser", req, cb)
  }

  /**
   * 获取扫描报告列表
   */
  async DescribeScanReportList(
    req: DescribeScanReportListRequest,
    cb?: (error: string, rep: DescribeScanReportListResponse) => void
  ): Promise<DescribeScanReportListResponse> {
    return this.request("DescribeScanReportList", req, cb)
  }

  /**
   * 创建域名、ip相关信息
   */
  async CreateDomainAndIp(
    req: CreateDomainAndIpRequest,
    cb?: (error: string, rep: CreateDomainAndIpResponse) => void
  ): Promise<CreateDomainAndIpResponse> {
    return this.request("CreateDomainAndIp", req, cb)
  }

  /**
   * 获取资产视角的端口风险列表
   */
  async DescribeRiskCenterAssetViewPortRiskList(
    req: DescribeRiskCenterAssetViewPortRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewPortRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewPortRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewPortRiskList", req, cb)
  }

  /**
   * 查询clb监听器列表
   */
  async DescribeListenerList(
    req: DescribeListenerListRequest,
    cb?: (error: string, rep: DescribeListenerListResponse) => void
  ): Promise<DescribeListenerListResponse> {
    return this.request("DescribeListenerList", req, cb)
  }

  /**
   * 创建风险中心扫描任务
   */
  async CreateRiskCenterScanTask(
    req: CreateRiskCenterScanTaskRequest,
    cb?: (error: string, rep: CreateRiskCenterScanTaskResponse) => void
  ): Promise<CreateRiskCenterScanTaskResponse> {
    return this.request("CreateRiskCenterScanTask", req, cb)
  }

  /**
   * 获取扫描任务列表
   */
  async DescribeScanTaskList(
    req: DescribeScanTaskListRequest,
    cb?: (error: string, rep: DescribeScanTaskListResponse) => void
  ): Promise<DescribeScanTaskListResponse> {
    return this.request("DescribeScanTaskList", req, cb)
  }

  /**
   * 资产列表
   */
  async DescribeDbAssets(
    req: DescribeDbAssetsRequest,
    cb?: (error: string, rep: DescribeDbAssetsResponse) => void
  ): Promise<DescribeDbAssetsResponse> {
    return this.request("DescribeDbAssets", req, cb)
  }

  /**
   * cvm详情
   */
  async DescribeCVMAssetInfo(
    req: DescribeCVMAssetInfoRequest,
    cb?: (error: string, rep: DescribeCVMAssetInfoResponse) => void
  ): Promise<DescribeCVMAssetInfoResponse> {
    return this.request("DescribeCVMAssetInfo", req, cb)
  }
}
