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
  CreateRecordRequest,
  DescribeSnapshotRollbackResultResponse,
  DownloadSnapshotRequest,
  DescribeBatchTaskDetail,
  ModifyVasAutoRenewStatusResponse,
  RollbackSnapshotRequest,
  DeleteDomainAliasResponse,
  DescribeVASStatisticRequest,
  DeleteDomainBatchResponse,
  RecordGroupInfo,
  ModifySubdomainStatusRequest,
  CreateRecordBatchResponse,
  DescribeSnapshotListResponse,
  CreateDomainBatchRecord,
  DomainAnalyticsInfo,
  ModifyRecordGroupRequest,
  DescribeVASStatisticResponse,
  DescribeBatchTaskRequest,
  DomainAnalyticsDetail,
  CreateSnapshotResponse,
  KeyValue,
  DeleteRecordGroupRequest,
  PayOrderWithBalanceResponse,
  DescribeDomainResponse,
  DescribeSnapshotListRequest,
  DescribePackageDetailResponse,
  DescribeRecordLineListResponse,
  SnapshotPageInfo,
  DomainInfo,
  CreateDomainBatchRequest,
  ModifyRecordGroupResponse,
  DescribeDomainShareInfoRequest,
  DomainListItem,
  DeleteDomainBatchRequest,
  DescribeRecordTypeResponse,
  ModifyDomainRemarkResponse,
  DeleteSnapshotRequest,
  DescribeDomainAliasListResponse,
  RollbackRecordSnapshotRequest,
  ModifyRecordToGroupRequest,
  DescribeSnapshotConfigResponse,
  RecordCountInfo,
  DeleteShareDomainResponse,
  ModifyRecordRequest,
  BatchRecordInfo,
  LineGroupInfo,
  DeleteDomainRequest,
  ModifyDomainOwnerRequest,
  ModifyPackageAutoRenewRequest,
  DomainShareInfo,
  DescribeSnapshotConfigRequest,
  LineInfo,
  DescribeRecordExistExceptDefaultNSRequest,
  DescribeRecordLineListRequest,
  DescribeRecordListResponse,
  CreateRecordBatchRequest,
  DeleteDomainAliasRequest,
  DomainAliasInfo,
  CreateDealRequest,
  ModifyDomainLockRequest,
  DescribeDomainWhoisRequest,
  SubdomainAliasAnalyticsItem,
  ModifyDomainStatusResponse,
  AddRecordBatch,
  DescribeRecordRequest,
  CreateDomainGroupResponse,
  DescribeSubdomainAnalyticsRequest,
  DeleteRecordRequest,
  DescribeDomainRequest,
  GroupInfo,
  ModifyRecordStatusRequest,
  CreateRecordResponse,
  DeleteRecordGroupResponse,
  RecordInfo,
  DescribeSnapshotRollbackTaskRequest,
  CheckRecordSnapshotRollbackResponse,
  DescribeDomainPreviewRequest,
  CreateRecordBatchDetail,
  WhoisContact,
  DescribeSubdomainAnalyticsResponse,
  ModifyRecordResponse,
  ModifyRecordToGroupResponse,
  SnapshotRecord,
  ModifyDomainUnlockResponse,
  DescribeDomainLogListRequest,
  DescribeDomainListResponse,
  ModifyRecordBatchRequest,
  WhoisContactAddress,
  SnapshotConfig,
  DeleteRecordResponse,
  CreateRecordBatchRecord,
  CreateDomainResponse,
  DomainCountInfo,
  UserInfo,
  ModifyRecordBatchResponse,
  CheckSnapshotRollbackRequest,
  CheckSnapshotRollbackResponse,
  DescribeRecordTypeRequest,
  DescribeSnapshotRollbackTaskResponse,
  RecordListItem,
  DescribeDomainPreviewResponse,
  CreateDomainBatchResponse,
  DescribeDomainGroupListResponse,
  LockInfo,
  ModifyDomainOwnerResponse,
  SubdomainAnalyticsInfo,
  ModifyRecordBatchDetail,
  DescribeUserDetailResponse,
  DeleteDomainBatchDetail,
  CreateDomainRequest,
  ModifyPackageAutoRenewResponse,
  DomainAliasAnalyticsItem,
  DescribeDomainShareInfoResponse,
  ModifyDomainRemarkRequest,
  CreateDomainAliasResponse,
  DescribeRecordListRequest,
  PayOrderWithBalanceRequest,
  DescribePackageDetailRequest,
  DescribeRecordResponse,
  ModifyRecordFieldsRequest,
  DeleteSnapshotResponse,
  DescribeDomainPurviewResponse,
  Deals,
  ModifySubdomainStatusResponse,
  DescribeDomainAnalyticsResponse,
  ModifyRecordStatusResponse,
  CreateRecordGroupRequest,
  RollbackSnapshotResponse,
  DescribeRecordGroupListResponse,
  CreateDomainGroupRequest,
  CreateSnapshotRequest,
  DeleteDomainResponse,
  DescribeRecordSnapshotRollbackResultResponse,
  ModifySnapshotConfigRequest,
  DescribeDomainAliasListRequest,
  CreateDomainAliasRequest,
  DeleteShareDomainRequest,
  VASStatisticItem,
  SnapshotInfo,
  ModifyDynamicDNSRequest,
  DescribeRecordGroupListRequest,
  ModifyRecordFieldsResponse,
  PurviewInfo,
  ModifyRecordRemarkRequest,
  ModifySnapshotConfigResponse,
  RollbackRecordSnapshotResponse,
  DescribeUserDetailRequest,
  ModifyDomainStatusRequest,
  ModifyRecordRemarkResponse,
  DescribeDomainListRequest,
  DomainCreateInfo,
  DescribeDomainPurviewRequest,
  CreateDomainBatchDetail,
  ModifyDomainUnlockRequest,
  DescribeRecordSnapshotRollbackResultRequest,
  ModifyDomainLockResponse,
  PackageDetailItem,
  CreateDealResponse,
  DescribeRecordExistExceptDefaultNSResponse,
  ModifyVasAutoRenewStatusRequest,
  WhoisInfo,
  DownloadSnapshotResponse,
  PreviewDetail,
  DescribeDomainWhoisResponse,
  CreateRecordGroupResponse,
  DescribeDomainGroupListRequest,
  DescribeBatchTaskResponse,
  CheckRecordSnapshotRollbackRequest,
  DescribeDomainAnalyticsRequest,
  ModifyDynamicDNSResponse,
  DescribeSnapshotRollbackResultRequest,
  DescribeDomainLogListResponse,
} from "./dnspod_models"

/**
 * dnspod client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dnspod.tencentcloudapi.com", "2021-03-23", clientConfig)
  }

  /**
   * 获取某个域名下的解析记录列表
   */
  async DescribeRecordList(
    req: DescribeRecordListRequest,
    cb?: (error: string, rep: DescribeRecordListResponse) => void
  ): Promise<DescribeRecordListResponse> {
    return this.request("DescribeRecordList", req, cb)
  }

  /**
   * 获取域名共享信息
   */
  async DescribeDomainShareInfo(
    req: DescribeDomainShareInfoRequest,
    cb?: (error: string, rep: DescribeDomainShareInfoResponse) => void
  ): Promise<DescribeDomainShareInfoResponse> {
    return this.request("DescribeDomainShareInfo", req, cb)
  }

  /**
   * 查询最近一次回滚
   */
  async DescribeSnapshotRollbackTask(
    req: DescribeSnapshotRollbackTaskRequest,
    cb?: (error: string, rep: DescribeSnapshotRollbackTaskResponse) => void
  ): Promise<DescribeSnapshotRollbackTaskResponse> {
    return this.request("DescribeSnapshotRollbackTask", req, cb)
  }

  /**
   * 获取域名权限
   */
  async DescribeDomainPurview(
    req: DescribeDomainPurviewRequest,
    cb?: (error: string, rep: DescribeDomainPurviewResponse) => void
  ): Promise<DescribeDomainPurviewResponse> {
    return this.request("DescribeDomainPurview", req, cb)
  }

  /**
   * 暂停子域名的解析记录
   */
  async ModifySubdomainStatus(
    req: ModifySubdomainStatusRequest,
    cb?: (error: string, rep: ModifySubdomainStatusResponse) => void
  ): Promise<ModifySubdomainStatusResponse> {
    return this.request("ModifySubdomainStatus", req, cb)
  }

  /**
   * 获取等级允许的记录类型
   */
  async DescribeRecordType(
    req: DescribeRecordTypeRequest,
    cb?: (error: string, rep: DescribeRecordTypeResponse) => void
  ): Promise<DescribeRecordTypeResponse> {
    return this.request("DescribeRecordType", req, cb)
  }

  /**
   * 删除记录分组
   */
  async DeleteRecordGroup(
    req: DeleteRecordGroupRequest,
    cb?: (error: string, rep: DeleteRecordGroupResponse) => void
  ): Promise<DeleteRecordGroupResponse> {
    return this.request("DeleteRecordGroup", req, cb)
  }

  /**
   * 修改域名状态
   */
  async ModifyDomainStatus(
    req: ModifyDomainStatusRequest,
    cb?: (error: string, rep: ModifyDomainStatusResponse) => void
  ): Promise<ModifyDomainStatusResponse> {
    return this.request("ModifyDomainStatus", req, cb)
  }

  /**
   * 获取域名别名列表
   */
  async DescribeDomainAliasList(
    req: DescribeDomainAliasListRequest,
    cb?: (error: string, rep: DescribeDomainAliasListResponse) => void
  ): Promise<DescribeDomainAliasListResponse> {
    return this.request("DescribeDomainAliasList", req, cb)
  }

  /**
   * 查询快照列表
   */
  async DescribeSnapshotList(
    req: DescribeSnapshotListRequest,
    cb?: (error: string, rep: DescribeSnapshotListResponse) => void
  ): Promise<DescribeSnapshotListResponse> {
    return this.request("DescribeSnapshotList", req, cb)
  }

  /**
   * 修改记录可选字段
   */
  async ModifyRecordFields(
    req: ModifyRecordFieldsRequest,
    cb?: (error: string, rep: ModifyRecordFieldsResponse) => void
  ): Promise<ModifyRecordFieldsResponse> {
    return this.request("ModifyRecordFields", req, cb)
  }

  /**
   * 批量删除域名
   */
  async DeleteDomainBatch(
    req: DeleteDomainBatchRequest,
    cb?: (error: string, rep: DeleteDomainBatchResponse) => void
  ): Promise<DeleteDomainBatchResponse> {
    return this.request("DeleteDomainBatch", req, cb)
  }

  /**
   * 下载快照
   */
  async DownloadSnapshot(
    req: DownloadSnapshotRequest,
    cb?: (error: string, rep: DownloadSnapshotResponse) => void
  ): Promise<DownloadSnapshotResponse> {
    return this.request("DownloadSnapshot", req, cb)
  }

  /**
   * 快照回滚前检查
   */
  async CheckSnapshotRollback(
    req: CheckSnapshotRollbackRequest,
    cb?: (error: string, rep: CheckSnapshotRollbackResponse) => void
  ): Promise<CheckSnapshotRollbackResponse> {
    return this.request("CheckSnapshotRollback", req, cb)
  }

  /**
   * 修改记录
   */
  async ModifyRecord(
    req: ModifyRecordRequest,
    cb?: (error: string, rep: ModifyRecordResponse) => void
  ): Promise<ModifyRecordResponse> {
    return this.request("ModifyRecord", req, cb)
  }

  /**
   * 获取域名Whois信息
   */
  async DescribeDomainWhois(
    req: DescribeDomainWhoisRequest,
    cb?: (error: string, rep: DescribeDomainWhoisResponse) => void
  ): Promise<DescribeDomainWhoisResponse> {
    return this.request("DescribeDomainWhois", req, cb)
  }

  /**
   * 查询解析记录分组列表
   */
  async DescribeRecordGroupList(
    req: DescribeRecordGroupListRequest,
    cb?: (error: string, rep: DescribeRecordGroupListResponse) => void
  ): Promise<DescribeRecordGroupListResponse> {
    return this.request("DescribeRecordGroupList", req, cb)
  }

  /**
   * 查询快照回滚结果
   */
  async DescribeSnapshotRollbackResult(
    req: DescribeSnapshotRollbackResultRequest,
    cb?: (error: string, rep: DescribeSnapshotRollbackResultResponse) => void
  ): Promise<DescribeSnapshotRollbackResultResponse> {
    return this.request("DescribeSnapshotRollbackResult", req, cb)
  }

  /**
   * 删除快照
   */
  async DeleteSnapshot(
    req: DeleteSnapshotRequest,
    cb?: (error: string, rep: DeleteSnapshotResponse) => void
  ): Promise<DeleteSnapshotResponse> {
    return this.request("DeleteSnapshot", req, cb)
  }

  /**
   * 域名锁定解锁
   */
  async ModifyDomainUnlock(
    req: ModifyDomainUnlockRequest,
    cb?: (error: string, rep: ModifyDomainUnlockResponse) => void
  ): Promise<ModifyDomainUnlockResponse> {
    return this.request("ModifyDomainUnlock", req, cb)
  }

  /**
   * 批量添加域名
   */
  async CreateDomainBatch(
    req: CreateDomainBatchRequest,
    cb?: (error: string, rep: CreateDomainBatchResponse) => void
  ): Promise<CreateDomainBatchResponse> {
    return this.request("CreateDomainBatch", req, cb)
  }

  /**
   * 获取域名分组列表
   */
  async DescribeDomainGroupList(
    req?: DescribeDomainGroupListRequest,
    cb?: (error: string, rep: DescribeDomainGroupListResponse) => void
  ): Promise<DescribeDomainGroupListResponse> {
    return this.request("DescribeDomainGroupList", req, cb)
  }

  /**
   * DNSPod商品下单
   */
  async CreateDeal(
    req: CreateDealRequest,
    cb?: (error: string, rep: CreateDealResponse) => void
  ): Promise<CreateDealResponse> {
    return this.request("CreateDeal", req, cb)
  }

  /**
   * 查询解析快照配置
   */
  async DescribeSnapshotConfig(
    req: DescribeSnapshotConfigRequest,
    cb?: (error: string, rep: DescribeSnapshotConfigResponse) => void
  ): Promise<DescribeSnapshotConfigResponse> {
    return this.request("DescribeSnapshotConfig", req, cb)
  }

  /**
   * 删除域名共享
   */
  async DeleteShareDomain(
    req: DeleteShareDomainRequest,
    cb?: (error: string, rep: DeleteShareDomainResponse) => void
  ): Promise<DeleteShareDomainResponse> {
    return this.request("DeleteShareDomain", req, cb)
  }

  /**
   * 增值服务自动续费设置
   */
  async ModifyVasAutoRenewStatus(
    req: ModifyVasAutoRenewStatusRequest,
    cb?: (error: string, rep: ModifyVasAutoRenewStatusResponse) => void
  ): Promise<ModifyVasAutoRenewStatusResponse> {
    return this.request("ModifyVasAutoRenewStatus", req, cb)
  }

  /**
   * 修改记录分组
   */
  async ModifyRecordGroup(
    req: ModifyRecordGroupRequest,
    cb?: (error: string, rep: ModifyRecordGroupResponse) => void
  ): Promise<ModifyRecordGroupResponse> {
    return this.request("ModifyRecordGroup", req, cb)
  }

  /**
   * 修改解析记录的状态
   */
  async ModifyRecordStatus(
    req: ModifyRecordStatusRequest,
    cb?: (error: string, rep: ModifyRecordStatusResponse) => void
  ): Promise<ModifyRecordStatusResponse> {
    return this.request("ModifyRecordStatus", req, cb)
  }

  /**
   * 获取域名信息
   */
  async DescribeDomain(
    req: DescribeDomainRequest,
    cb?: (error: string, rep: DescribeDomainResponse) => void
  ): Promise<DescribeDomainResponse> {
    return this.request("DescribeDomain", req, cb)
  }

  /**
   * 更新动态 DNS 记录
   */
  async ModifyDynamicDNS(
    req: ModifyDynamicDNSRequest,
    cb?: (error: string, rep: ModifyDynamicDNSResponse) => void
  ): Promise<ModifyDynamicDNSResponse> {
    return this.request("ModifyDynamicDNS", req, cb)
  }

  /**
   * 批量添加记录
   */
  async CreateRecordBatch(
    req: CreateRecordBatchRequest,
    cb?: (error: string, rep: CreateRecordBatchResponse) => void
  ): Promise<CreateRecordBatchResponse> {
    return this.request("CreateRecordBatch", req, cb)
  }

  /**
   * 获取帐户信息
   */
  async DescribeUserDetail(
    req?: DescribeUserDetailRequest,
    cb?: (error: string, rep: DescribeUserDetailResponse) => void
  ): Promise<DescribeUserDetailResponse> {
    return this.request("DescribeUserDetail", req, cb)
  }

  /**
   * 回滚快照
   */
  async RollbackSnapshot(
    req: RollbackSnapshotRequest,
    cb?: (error: string, rep: RollbackSnapshotResponse) => void
  ): Promise<RollbackSnapshotResponse> {
    return this.request("RollbackSnapshot", req, cb)
  }

  /**
   * 删除记录
   */
  async DeleteRecord(
    req: DeleteRecordRequest,
    cb?: (error: string, rep: DeleteRecordResponse) => void
  ): Promise<DeleteRecordResponse> {
    return this.request("DeleteRecord", req, cb)
  }

  /**
   * 获取记录信息
   */
  async DescribeRecord(
    req: DescribeRecordRequest,
    cb?: (error: string, rep: DescribeRecordResponse) => void
  ): Promise<DescribeRecordResponse> {
    return this.request("DescribeRecord", req, cb)
  }

  /**
   * 修改快照配置
   */
  async ModifySnapshotConfig(
    req: ModifySnapshotConfigRequest,
    cb?: (error: string, rep: ModifySnapshotConfigResponse) => void
  ): Promise<ModifySnapshotConfigResponse> {
    return this.request("ModifySnapshotConfig", req, cb)
  }

  /**
   * 获取各套餐配置详情
   */
  async DescribePackageDetail(
    req?: DescribePackageDetailRequest,
    cb?: (error: string, rep: DescribePackageDetailResponse) => void
  ): Promise<DescribePackageDetailResponse> {
    return this.request("DescribePackageDetail", req, cb)
  }

  /**
   * 获取等级允许的线路
   */
  async DescribeRecordLineList(
    req: DescribeRecordLineListRequest,
    cb?: (error: string, rep: DescribeRecordLineListResponse) => void
  ): Promise<DescribeRecordLineListResponse> {
    return this.request("DescribeRecordLineList", req, cb)
  }

  /**
   * 获取域名增值服务用量
   */
  async DescribeVASStatistic(
    req: DescribeVASStatisticRequest,
    cb?: (error: string, rep: DescribeVASStatisticResponse) => void
  ): Promise<DescribeVASStatisticResponse> {
    return this.request("DescribeVASStatistic", req, cb)
  }

  /**
   * 统计各个域名的解析量，帮助您了解流量情况、时间段分布。支持查看近 3 个月内的统计情况
   */
  async DescribeDomainAnalytics(
    req: DescribeDomainAnalyticsRequest,
    cb?: (error: string, rep: DescribeDomainAnalyticsResponse) => void
  ): Promise<DescribeDomainAnalyticsResponse> {
    return this.request("DescribeDomainAnalytics", req, cb)
  }

  /**
   * DNS 解析套餐自动续费设置
   */
  async ModifyPackageAutoRenew(
    req: ModifyPackageAutoRenewRequest,
    cb?: (error: string, rep: ModifyPackageAutoRenewResponse) => void
  ): Promise<ModifyPackageAutoRenewResponse> {
    return this.request("ModifyPackageAutoRenew", req, cb)
  }

  /**
   * 设置记录备注
   */
  async ModifyRecordRemark(
    req: ModifyRecordRemarkRequest,
    cb?: (error: string, rep: ModifyRecordRemarkResponse) => void
  ): Promise<ModifyRecordRemarkResponse> {
    return this.request("ModifyRecordRemark", req, cb)
  }

  /**
   * 创建域名别名
   */
  async CreateDomainAlias(
    req: CreateDomainAliasRequest,
    cb?: (error: string, rep: CreateDomainAliasResponse) => void
  ): Promise<CreateDomainAliasResponse> {
    return this.request("CreateDomainAlias", req, cb)
  }

  /**
   * 添加记录
   */
  async CreateRecord(
    req: CreateRecordRequest,
    cb?: (error: string, rep: CreateRecordResponse) => void
  ): Promise<CreateRecordResponse> {
    return this.request("CreateRecord", req, cb)
  }

  /**
   * 设置域名备注
   */
  async ModifyDomainRemark(
    req: ModifyDomainRemarkRequest,
    cb?: (error: string, rep: ModifyDomainRemarkResponse) => void
  ): Promise<ModifyDomainRemarkResponse> {
    return this.request("ModifyDomainRemark", req, cb)
  }

  /**
   * 判断是否有除系统默认的@-NS记录之外的记录存在
   */
  async DescribeRecordExistExceptDefaultNS(
    req: DescribeRecordExistExceptDefaultNSRequest,
    cb?: (error: string, rep: DescribeRecordExistExceptDefaultNSResponse) => void
  ): Promise<DescribeRecordExistExceptDefaultNSResponse> {
    return this.request("DescribeRecordExistExceptDefaultNS", req, cb)
  }

  /**
   * 域名过户
   */
  async ModifyDomainOwner(
    req: ModifyDomainOwnerRequest,
    cb?: (error: string, rep: ModifyDomainOwnerResponse) => void
  ): Promise<ModifyDomainOwnerResponse> {
    return this.request("ModifyDomainOwner", req, cb)
  }

  /**
   * 创建域名分组
   */
  async CreateDomainGroup(
    req: CreateDomainGroupRequest,
    cb?: (error: string, rep: CreateDomainGroupResponse) => void
  ): Promise<CreateDomainGroupResponse> {
    return this.request("CreateDomainGroup", req, cb)
  }

  /**
   * 添加记录分组
   */
  async CreateRecordGroup(
    req: CreateRecordGroupRequest,
    cb?: (error: string, rep: CreateRecordGroupResponse) => void
  ): Promise<CreateRecordGroupResponse> {
    return this.request("CreateRecordGroup", req, cb)
  }

  /**
   * 删除域名别名
   */
  async DeleteDomainAlias(
    req: DeleteDomainAliasRequest,
    cb?: (error: string, rep: DeleteDomainAliasResponse) => void
  ): Promise<DeleteDomainAliasResponse> {
    return this.request("DeleteDomainAlias", req, cb)
  }

  /**
   * 获取任务详情
   */
  async DescribeBatchTask(
    req: DescribeBatchTaskRequest,
    cb?: (error: string, rep: DescribeBatchTaskResponse) => void
  ): Promise<DescribeBatchTaskResponse> {
    return this.request("DescribeBatchTask", req, cb)
  }

  /**
   * 回滚前检查单条记录
   */
  async CheckRecordSnapshotRollback(
    req: CheckRecordSnapshotRollbackRequest,
    cb?: (error: string, rep: CheckRecordSnapshotRollbackResponse) => void
  ): Promise<CheckRecordSnapshotRollbackResponse> {
    return this.request("CheckRecordSnapshotRollback", req, cb)
  }

  /**
   * 获取域名概览信息
   */
  async DescribeDomainPreview(
    req: DescribeDomainPreviewRequest,
    cb?: (error: string, rep: DescribeDomainPreviewResponse) => void
  ): Promise<DescribeDomainPreviewResponse> {
    return this.request("DescribeDomainPreview", req, cb)
  }

  /**
   * 添加域名
   */
  async CreateDomain(
    req: CreateDomainRequest,
    cb?: (error: string, rep: CreateDomainResponse) => void
  ): Promise<CreateDomainResponse> {
    return this.request("CreateDomain", req, cb)
  }

  /**
   * 重新回滚指定解析记录快照
   */
  async RollbackRecordSnapshot(
    req: RollbackRecordSnapshotRequest,
    cb?: (error: string, rep: RollbackRecordSnapshotResponse) => void
  ): Promise<RollbackRecordSnapshotResponse> {
    return this.request("RollbackRecordSnapshot", req, cb)
  }

  /**
   * 将记录添加到分组
   */
  async ModifyRecordToGroup(
    req: ModifyRecordToGroupRequest,
    cb?: (error: string, rep: ModifyRecordToGroupResponse) => void
  ): Promise<ModifyRecordToGroupResponse> {
    return this.request("ModifyRecordToGroup", req, cb)
  }

  /**
   * DNSPod商品余额支付
   */
  async PayOrderWithBalance(
    req: PayOrderWithBalanceRequest,
    cb?: (error: string, rep: PayOrderWithBalanceResponse) => void
  ): Promise<PayOrderWithBalanceResponse> {
    return this.request("PayOrderWithBalance", req, cb)
  }

  /**
   * 统计子域名的解析量，帮助您了解流量情况、时间段分布。支持查看近 3 个月内的统计情况。仅付费套餐域名可用。
   */
  async DescribeSubdomainAnalytics(
    req: DescribeSubdomainAnalyticsRequest,
    cb?: (error: string, rep: DescribeSubdomainAnalyticsResponse) => void
  ): Promise<DescribeSubdomainAnalyticsResponse> {
    return this.request("DescribeSubdomainAnalytics", req, cb)
  }

  /**
   * 批量修改记录
   */
  async ModifyRecordBatch(
    req: ModifyRecordBatchRequest,
    cb?: (error: string, rep: ModifyRecordBatchResponse) => void
  ): Promise<ModifyRecordBatchResponse> {
    return this.request("ModifyRecordBatch", req, cb)
  }

  /**
   * 获取域名列表
   */
  async DescribeDomainList(
    req: DescribeDomainListRequest,
    cb?: (error: string, rep: DescribeDomainListResponse) => void
  ): Promise<DescribeDomainListResponse> {
    return this.request("DescribeDomainList", req, cb)
  }

  /**
   * 删除域名
   */
  async DeleteDomain(
    req: DeleteDomainRequest,
    cb?: (error: string, rep: DeleteDomainResponse) => void
  ): Promise<DeleteDomainResponse> {
    return this.request("DeleteDomain", req, cb)
  }

  /**
   * 获取域名日志
   */
  async DescribeDomainLogList(
    req: DescribeDomainLogListRequest,
    cb?: (error: string, rep: DescribeDomainLogListResponse) => void
  ): Promise<DescribeDomainLogListResponse> {
    return this.request("DescribeDomainLogList", req, cb)
  }

  /**
   * 锁定域名
   */
  async ModifyDomainLock(
    req: ModifyDomainLockRequest,
    cb?: (error: string, rep: ModifyDomainLockResponse) => void
  ): Promise<ModifyDomainLockResponse> {
    return this.request("ModifyDomainLock", req, cb)
  }

  /**
   * 创建快照
   */
  async CreateSnapshot(
    req: CreateSnapshotRequest,
    cb?: (error: string, rep: CreateSnapshotResponse) => void
  ): Promise<CreateSnapshotResponse> {
    return this.request("CreateSnapshot", req, cb)
  }

  /**
   * 查询解析记录重新回滚的结果
   */
  async DescribeRecordSnapshotRollbackResult(
    req: DescribeRecordSnapshotRollbackResultRequest,
    cb?: (error: string, rep: DescribeRecordSnapshotRollbackResultResponse) => void
  ): Promise<DescribeRecordSnapshotRollbackResultResponse> {
    return this.request("DescribeRecordSnapshotRollbackResult", req, cb)
  }
}
