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
  DescribeBatchTaskDetail,
  DeleteDomainAliasResponse,
  ModifySubdomainStatusRequest,
  CreateRecordBatchResponse,
  CreateDomainBatchRecord,
  DescribeBatchTaskRequest,
  DescribeDomainResponse,
  DescribeRecordLineListResponse,
  DomainInfo,
  CreateDomainBatchRequest,
  DescribeDomainShareInfoRequest,
  DomainListItem,
  DescribeRecordTypeResponse,
  ModifyDomainRemarkResponse,
  DescribeDomainAliasListResponse,
  RecordCountInfo,
  DeleteShareDomainResponse,
  ModifyRecordRequest,
  BatchRecordInfo,
  LineGroupInfo,
  DeleteDomainRequest,
  ModifyDomainOwnerRequest,
  DomainShareInfo,
  DescribeRecordLineListRequest,
  DescribeRecordListResponse,
  CreateRecordBatchRequest,
  DeleteDomainAliasRequest,
  DomainAliasInfo,
  ModifyDomainLockRequest,
  ModifyDomainStatusRequest,
  ModifyDomainStatusResponse,
  AddRecordBatch,
  DescribeRecordRequest,
  CreateDomainGroupResponse,
  DeleteRecordRequest,
  DescribeDomainRequest,
  ModifyRecordStatusRequest,
  CreateRecordResponse,
  DescribeRecordResponse,
  RecordInfo,
  CreateRecordBatchDetail,
  ModifyRecordResponse,
  ModifyDomainUnlockResponse,
  DescribeDomainLogListRequest,
  DescribeDomainListResponse,
  ModifyRecordBatchRequest,
  DeleteRecordResponse,
  CreateRecordBatchRecord,
  CreateDomainResponse,
  DomainCountInfo,
  UserInfo,
  ModifyRecordBatchResponse,
  DescribeDomainLogListResponse,
  DescribeRecordTypeRequest,
  RecordListItem,
  CreateDomainBatchResponse,
  ModifyDomainOwnerResponse,
  ModifyRecordBatchDetail,
  DescribeUserDetailResponse,
  CreateDomainRequest,
  DescribeDomainShareInfoResponse,
  ModifyDomainRemarkRequest,
  CreateDomainAliasResponse,
  DescribeRecordListRequest,
  DescribeDomainPurviewResponse,
  ModifySubdomainStatusResponse,
  ModifyRecordStatusResponse,
  CreateDomainGroupRequest,
  LineInfo,
  DeleteDomainResponse,
  DescribeDomainAliasListRequest,
  CreateDomainAliasRequest,
  DeleteShareDomainRequest,
  ModifyDynamicDNSRequest,
  PurviewInfo,
  ModifyRecordRemarkRequest,
  DescribeUserDetailRequest,
  ModifyRecordRemarkResponse,
  DescribeDomainListRequest,
  DomainCreateInfo,
  DescribeDomainPurviewRequest,
  CreateDomainBatchDetail,
  ModifyDomainUnlockRequest,
  ModifyDomainLockResponse,
  LockInfo,
  DescribeBatchTaskResponse,
  ModifyDynamicDNSResponse,
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
   * 获取某个域名下的解析记录
   */
  async DescribeRecordList(
    req: DescribeRecordListRequest,
    cb?: (error: string, rep: DescribeRecordListResponse) => void
  ): Promise<DescribeRecordListResponse> {
    return this.request("DescribeRecordList", req, cb)
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
   * 删除记录
   */
  async DeleteRecord(
    req: DeleteRecordRequest,
    cb?: (error: string, rep: DeleteRecordResponse) => void
  ): Promise<DeleteRecordResponse> {
    return this.request("DeleteRecord", req, cb)
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
   * 修改解析记录的状态
   */
  async ModifyRecordStatus(
    req: ModifyRecordStatusRequest,
    cb?: (error: string, rep: ModifyRecordStatusResponse) => void
  ): Promise<ModifyRecordStatusResponse> {
    return this.request("ModifyRecordStatus", req, cb)
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
   * 获取域名共享信息
   */
  async DescribeDomainShareInfo(
    req: DescribeDomainShareInfoRequest,
    cb?: (error: string, rep: DescribeDomainShareInfoResponse) => void
  ): Promise<DescribeDomainShareInfoResponse> {
    return this.request("DescribeDomainShareInfo", req, cb)
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
     * 添加域名

     */
  async CreateDomain(
    req: CreateDomainRequest,
    cb?: (error: string, rep: CreateDomainResponse) => void
  ): Promise<CreateDomainResponse> {
    return this.request("CreateDomain", req, cb)
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
   * 获取等级允许的记录类型
   */
  async DescribeRecordType(
    req: DescribeRecordTypeRequest,
    cb?: (error: string, rep: DescribeRecordTypeResponse) => void
  ): Promise<DescribeRecordTypeResponse> {
    return this.request("DescribeRecordType", req, cb)
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
   * 获取等级允许的线路
   */
  async DescribeRecordLineList(
    req: DescribeRecordLineListRequest,
    cb?: (error: string, rep: DescribeRecordLineListResponse) => void
  ): Promise<DescribeRecordLineListResponse> {
    return this.request("DescribeRecordLineList", req, cb)
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
   * 批量添加记录
   */
  async CreateRecordBatch(
    req: CreateRecordBatchRequest,
    cb?: (error: string, rep: CreateRecordBatchResponse) => void
  ): Promise<CreateRecordBatchResponse> {
    return this.request("CreateRecordBatch", req, cb)
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
   * 批量修改记录
   */
  async ModifyRecordBatch(
    req: ModifyRecordBatchRequest,
    cb?: (error: string, rep: ModifyRecordBatchResponse) => void
  ): Promise<ModifyRecordBatchResponse> {
    return this.request("ModifyRecordBatch", req, cb)
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
}
