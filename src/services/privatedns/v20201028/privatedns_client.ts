/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  DescribeQuotaUsageResponse,
  ModifyPrivateZoneVpcRequest,
  DescribeAuditLogResponse,
  DescribePrivateDNSAccountListResponse,
  DescribePrivateZoneRecordListRequest,
  PrivateDNSAccount,
  QueryAsyncBindVpcStatusResponse,
  DescribePrivateZoneRecordListResponse,
  DescribePrivateZoneListResponse,
  AccountVpcInfoOutput,
  DescribePrivateZoneRequest,
  ModifyRecordsStatusResponse,
  DatePoint,
  DeleteSpecifyPrivateZoneVpcResponse,
  DescribeAccountVpcListResponse,
  DescribePrivateZoneServiceRequest,
  PrivateZoneRecord,
  AddSpecifyPrivateZoneVpcResponse,
  AuditLogInfo,
  AddSpecifyPrivateZoneVpcRequest,
  DescribeRequestDataRequest,
  ModifyPrivateZoneRecordResponse,
  DescribeAccountVpcListRequest,
  DescribeRequestDataResponse,
  ModifyPrivateZoneRequest,
  TagInfo,
  TldQuota,
  CreatePrivateZoneRequest,
  VpcInfo,
  AccountVpcInfoOut,
  AccountVpcInfo,
  ModifyPrivateZoneResponse,
  DeleteSpecifyPrivateZoneVpcRequest,
  DescribeRecordRequest,
  DescribeRecordResponse,
  SubscribePrivateZoneServiceRequest,
  DescribePrivateZoneResponse,
  CreatePrivateZoneResponse,
  DescribeDashboardResponse,
  CreatePrivateZoneRecordResponse,
  RecordInfo,
  DescribePrivateZoneServiceResponse,
  CreatePrivateDNSAccountResponse,
  DescribeAuditLogRequest,
  DescribeDashboardRequest,
  DeletePrivateZoneRequest,
  AuditLog,
  SubscribePrivateZoneServiceResponse,
  DeletePrivateDNSAccountRequest,
  DeletePrivateZoneRecordRequest,
  Filter,
  DeletePrivateZoneResponse,
  ModifyRecordsStatusRequest,
  CreatePrivateDNSAccountRequest,
  QueryAsyncBindVpcStatusRequest,
  MetricData,
  DescribePrivateDNSAccountListRequest,
  PrivateZone,
  CreatePrivateZoneRecordRequest,
  DescribeQuotaUsageRequest,
  ModifyPrivateZoneRecordRequest,
  DescribePrivateZoneListRequest,
  DeletePrivateDNSAccountResponse,
  FlowUsage,
  DeletePrivateZoneRecordResponse,
  ModifyPrivateZoneVpcResponse,
} from "./privatedns_models"

/**
 * privatedns client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("privatedns.tencentcloudapi.com", "2020-10-28", clientConfig)
  }

  /**
   * 跨账号关联VPC时绑定其他账号
   */
  async CreatePrivateDNSAccount(
    req: CreatePrivateDNSAccountRequest,
    cb?: (error: string, rep: CreatePrivateDNSAccountResponse) => void
  ): Promise<CreatePrivateDNSAccountResponse> {
    return this.request("CreatePrivateDNSAccount", req, cb)
  }

  /**
   * 获取私有域信息
   */
  async DescribePrivateZone(
    req: DescribePrivateZoneRequest,
    cb?: (error: string, rep: DescribePrivateZoneResponse) => void
  ): Promise<DescribePrivateZoneResponse> {
    return this.request("DescribePrivateZone", req, cb)
  }

  /**
   * 获取私有域记录列表
   */
  async DescribePrivateZoneRecordList(
    req: DescribePrivateZoneRecordListRequest,
    cb?: (error: string, rep: DescribePrivateZoneRecordListResponse) => void
  ): Promise<DescribePrivateZoneRecordListResponse> {
    return this.request("DescribePrivateZoneRecordList", req, cb)
  }

  /**
   * 查询额度使用情况
   */
  async DescribeQuotaUsage(
    req?: DescribeQuotaUsageRequest,
    cb?: (error: string, rep: DescribeQuotaUsageResponse) => void
  ): Promise<DescribeQuotaUsageResponse> {
    return this.request("DescribeQuotaUsage", req, cb)
  }

  /**
   * 获取操作日志列表
   */
  async DescribeAuditLog(
    req: DescribeAuditLogRequest,
    cb?: (error: string, rep: DescribeAuditLogResponse) => void
  ): Promise<DescribeAuditLogResponse> {
    return this.request("DescribeAuditLog", req, cb)
  }

  /**
   * 添加私有域解析记录
   */
  async CreatePrivateZoneRecord(
    req: CreatePrivateZoneRecordRequest,
    cb?: (error: string, rep: CreatePrivateZoneRecordResponse) => void
  ): Promise<CreatePrivateZoneRecordResponse> {
    return this.request("CreatePrivateZoneRecord", req, cb)
  }

  /**
   * 创建私有域
   */
  async CreatePrivateZone(
    req: CreatePrivateZoneRequest,
    cb?: (error: string, rep: CreatePrivateZoneResponse) => void
  ): Promise<CreatePrivateZoneResponse> {
    return this.request("CreatePrivateZone", req, cb)
  }

  /**
   * 获取私有域列表
   */
  async DescribePrivateZoneList(
    req: DescribePrivateZoneListRequest,
    cb?: (error: string, rep: DescribePrivateZoneListResponse) => void
  ): Promise<DescribePrivateZoneListResponse> {
    return this.request("DescribePrivateZoneList", req, cb)
  }

  /**
   * 追加与私有域关联的VPC
   */
  async AddSpecifyPrivateZoneVpc(
    req: AddSpecifyPrivateZoneVpcRequest,
    cb?: (error: string, rep: AddSpecifyPrivateZoneVpcResponse) => void
  ): Promise<AddSpecifyPrivateZoneVpcResponse> {
    return this.request("AddSpecifyPrivateZoneVpc", req, cb)
  }

  /**
   * 查询异步绑定vpc操作状态
   */
  async QueryAsyncBindVpcStatus(
    req: QueryAsyncBindVpcStatusRequest,
    cb?: (error: string, rep: QueryAsyncBindVpcStatusResponse) => void
  ): Promise<QueryAsyncBindVpcStatusResponse> {
    return this.request("QueryAsyncBindVpcStatus", req, cb)
  }

  /**
   * 修改私有域信息
   */
  async ModifyPrivateZone(
    req: ModifyPrivateZoneRequest,
    cb?: (error: string, rep: ModifyPrivateZoneResponse) => void
  ): Promise<ModifyPrivateZoneResponse> {
    return this.request("ModifyPrivateZone", req, cb)
  }

  /**
   * 修改私有域解析记录
   */
  async ModifyPrivateZoneRecord(
    req: ModifyPrivateZoneRecordRequest,
    cb?: (error: string, rep: ModifyPrivateZoneRecordResponse) => void
  ): Promise<ModifyPrivateZoneRecordResponse> {
    return this.request("ModifyPrivateZoneRecord", req, cb)
  }

  /**
   * 删除私有域解析账号
   */
  async DeletePrivateDNSAccount(
    req: DeletePrivateDNSAccountRequest,
    cb?: (error: string, rep: DeletePrivateDNSAccountResponse) => void
  ): Promise<DeletePrivateDNSAccountResponse> {
    return this.request("DeletePrivateDNSAccount", req, cb)
  }

  /**
   * 开通私有域解析
   */
  async SubscribePrivateZoneService(
    req?: SubscribePrivateZoneServiceRequest,
    cb?: (error: string, rep: SubscribePrivateZoneServiceResponse) => void
  ): Promise<SubscribePrivateZoneServiceResponse> {
    return this.request("SubscribePrivateZoneService", req, cb)
  }

  /**
   * 获取私有域解析概览
   */
  async DescribeDashboard(
    req?: DescribeDashboardRequest,
    cb?: (error: string, rep: DescribeDashboardResponse) => void
  ): Promise<DescribeDashboardResponse> {
    return this.request("DescribeDashboard", req, cb)
  }

  /**
   * 修改私有域关联的VPC
   */
  async ModifyPrivateZoneVpc(
    req: ModifyPrivateZoneVpcRequest,
    cb?: (error: string, rep: ModifyPrivateZoneVpcResponse) => void
  ): Promise<ModifyPrivateZoneVpcResponse> {
    return this.request("ModifyPrivateZoneVpc", req, cb)
  }

  /**
   * 删除私有域并停止解析
   */
  async DeletePrivateZone(
    req: DeletePrivateZoneRequest,
    cb?: (error: string, rep: DeletePrivateZoneResponse) => void
  ): Promise<DeletePrivateZoneResponse> {
    return this.request("DeletePrivateZone", req, cb)
  }

  /**
   * 获取私有域解析账号的VPC列表
   */
  async DescribeAccountVpcList(
    req: DescribeAccountVpcListRequest,
    cb?: (error: string, rep: DescribeAccountVpcListResponse) => void
  ): Promise<DescribeAccountVpcListResponse> {
    return this.request("DescribeAccountVpcList", req, cb)
  }

  /**
   * 获取私有域记录
   */
  async DescribeRecord(
    req: DescribeRecordRequest,
    cb?: (error: string, rep: DescribeRecordResponse) => void
  ): Promise<DescribeRecordResponse> {
    return this.request("DescribeRecord", req, cb)
  }

  /**
   * 修改解析记录状态
   */
  async ModifyRecordsStatus(
    req: ModifyRecordsStatusRequest,
    cb?: (error: string, rep: ModifyRecordsStatusResponse) => void
  ): Promise<ModifyRecordsStatusResponse> {
    return this.request("ModifyRecordsStatus", req, cb)
  }

  /**
   * 删除与私有域关联的VPC
   */
  async DeleteSpecifyPrivateZoneVpc(
    req: DeleteSpecifyPrivateZoneVpcRequest,
    cb?: (error: string, rep: DeleteSpecifyPrivateZoneVpcResponse) => void
  ): Promise<DeleteSpecifyPrivateZoneVpcResponse> {
    return this.request("DeleteSpecifyPrivateZoneVpc", req, cb)
  }

  /**
   * 查询私有域解析开通状态
   */
  async DescribePrivateZoneService(
    req?: DescribePrivateZoneServiceRequest,
    cb?: (error: string, rep: DescribePrivateZoneServiceResponse) => void
  ): Promise<DescribePrivateZoneServiceResponse> {
    return this.request("DescribePrivateZoneService", req, cb)
  }

  /**
   * 删除私有域解析记录
   */
  async DeletePrivateZoneRecord(
    req: DeletePrivateZoneRecordRequest,
    cb?: (error: string, rep: DeletePrivateZoneRecordResponse) => void
  ): Promise<DeletePrivateZoneRecordResponse> {
    return this.request("DeletePrivateZoneRecord", req, cb)
  }

  /**
   * 获取私有域解析请求量
   */
  async DescribeRequestData(
    req: DescribeRequestDataRequest,
    cb?: (error: string, rep: DescribeRequestDataResponse) => void
  ): Promise<DescribeRequestDataResponse> {
    return this.request("DescribeRequestData", req, cb)
  }

  /**
   * 获取私有域解析账号列表
   */
  async DescribePrivateDNSAccountList(
    req: DescribePrivateDNSAccountListRequest,
    cb?: (error: string, rep: DescribePrivateDNSAccountListResponse) => void
  ): Promise<DescribePrivateDNSAccountListResponse> {
    return this.request("DescribePrivateDNSAccountList", req, cb)
  }
}
