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
  AddressPool,
  AddressPoolDetail,
  DescribeMonitorsResponse,
  ModifyPackageAutoRenewRequest,
  DescribeDetectorsResponse,
  DeleteAddressPoolResponse,
  CreatePackageAndPayRequest,
  Strategy,
  CreateStrategyResponse,
  DeleteAddressPoolRequest,
  ModifyInstanceConfigResponse,
  DescribeStrategyDetailRequest,
  DeleteMonitorRequest,
  DescribeAddressPoolListRequest,
  ModifyStrategyResponse,
  DescribeDnsLineListRequest,
  DescribeInstanceListRequest,
  Source,
  InstanceDetail,
  AddressLocation,
  DetectTaskPackage,
  CreateAddressPoolRequest,
  DescribeDetectTaskPackageListResponse,
  DescribeAddressPoolDetailResponse,
  ModifyPackageAutoRenewResponse,
  DescribeQuotasRequest,
  MainAddressPool,
  Quota,
  ModifyMonitorRequest,
  DescribeInstancePackageListResponse,
  Instance,
  ModifyStrategyRequest,
  DescribeDetectorsRequest,
  DeleteStrategyRequest,
  CreateInstanceRequest,
  Address,
  CreateMonitorRequest,
  DescribeDetectTaskPackageListRequest,
  DescribeStrategyListResponse,
  CreateStrategyRequest,
  DescribeDnsLineListResponse,
  DescribeInstanceDetailResponse,
  DescribeMonitorDetailResponse,
  DescribeInstanceDetailRequest,
  GroupLine,
  DescribeAddressPoolDetailRequest,
  CreateInstanceResponse,
  DetectorGroup,
  DescribeDetectPackageDetailRequest,
  MainPoolWeight,
  CreatePackageAndPayResponse,
  CreateAddressPoolResponse,
  DescribeInstancePackageListRequest,
  DescribeStrategyDetailResponse,
  DescribeMonitorsRequest,
  ModifyMonitorResponse,
  DescribeAddressLocationResponse,
  DescribeAddressLocationRequest,
  DescribeStrategyListRequest,
  DescribeMonitorDetailRequest,
  DescribeDetectPackageDetailResponse,
  MonitorDetail,
  DescribeAddressPoolListResponse,
  CreateMonitorResponse,
  InstanceInfo,
  InstancePackage,
  DeleteStrategyResponse,
  ModifyAddressPoolRequest,
  InstanceConfig,
  StrategyDetail,
  ModifyAddressPoolResponse,
  DescribeQuotasResponse,
  ModifyInstanceConfigRequest,
  CostItem,
  DescribeInstanceListResponse,
  ResourceFilter,
  DeleteMonitorResponse,
} from "./igtm_models"

/**
 * igtm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("igtm.tencentcloudapi.com", "2023-10-24", clientConfig)
  }

  /**
   * 地址池列表
   */
  async DescribeAddressPoolList(
    req: DescribeAddressPoolListRequest,
    cb?: (error: string, rep: DescribeAddressPoolListResponse) => void
  ): Promise<DescribeAddressPoolListResponse> {
    return this.request("DescribeAddressPoolList", req, cb)
  }

  /**
   * 修改地址池
   */
  async ModifyAddressPool(
    req: ModifyAddressPoolRequest,
    cb?: (error: string, rep: ModifyAddressPoolResponse) => void
  ): Promise<ModifyAddressPoolResponse> {
    return this.request("ModifyAddressPool", req, cb)
  }

  /**
   * 修改实例配置
   */
  async ModifyInstanceConfig(
    req: ModifyInstanceConfigRequest,
    cb?: (error: string, rep: ModifyInstanceConfigResponse) => void
  ): Promise<ModifyInstanceConfigResponse> {
    return this.request("ModifyInstanceConfig", req, cb)
  }

  /**
   * 探测任务包详情
   */
  async DescribeDetectPackageDetail(
    req: DescribeDetectPackageDetailRequest,
    cb?: (error: string, rep: DescribeDetectPackageDetailResponse) => void
  ): Promise<DescribeDetectPackageDetailResponse> {
    return this.request("DescribeDetectPackageDetail", req, cb)
  }

  /**
   * 创建地址池
   */
  async CreateAddressPool(
    req: CreateAddressPoolRequest,
    cb?: (error: string, rep: CreateAddressPoolResponse) => void
  ): Promise<CreateAddressPoolResponse> {
    return this.request("CreateAddressPool", req, cb)
  }

  /**
   * 实例详情
   */
  async DescribeInstanceDetail(
    req: DescribeInstanceDetailRequest,
    cb?: (error: string, rep: DescribeInstanceDetailResponse) => void
  ): Promise<DescribeInstanceDetailResponse> {
    return this.request("DescribeInstanceDetail", req, cb)
  }

  /**
   * 获取地址所属地域
   */
  async DescribeAddressLocation(
    req: DescribeAddressLocationRequest,
    cb?: (error: string, rep: DescribeAddressLocationResponse) => void
  ): Promise<DescribeAddressLocationResponse> {
    return this.request("DescribeAddressLocation", req, cb)
  }

  /**
   * 新建策略接口
   */
  async CreateStrategy(
    req: CreateStrategyRequest,
    cb?: (error: string, rep: CreateStrategyResponse) => void
  ): Promise<CreateStrategyResponse> {
    return this.request("CreateStrategy", req, cb)
  }

  /**
   * 获取探测节点列表接口
   */
  async DescribeDetectors(
    req?: DescribeDetectorsRequest,
    cb?: (error: string, rep: DescribeDetectorsResponse) => void
  ): Promise<DescribeDetectorsResponse> {
    return this.request("DescribeDetectors", req, cb)
  }

  /**
   * 删除策略接口
   */
  async DeleteStrategy(
    req: DeleteStrategyRequest,
    cb?: (error: string, rep: DeleteStrategyResponse) => void
  ): Promise<DeleteStrategyResponse> {
    return this.request("DeleteStrategy", req, cb)
  }

  /**
   * 删除监控器
   */
  async DeleteMonitor(
    req: DeleteMonitorRequest,
    cb?: (error: string, rep: DeleteMonitorResponse) => void
  ): Promise<DeleteMonitorResponse> {
    return this.request("DeleteMonitor", req, cb)
  }

  /**
   * 修改监控器
   */
  async ModifyMonitor(
    req: ModifyMonitorRequest,
    cb?: (error: string, rep: ModifyMonitorResponse) => void
  ): Promise<ModifyMonitorResponse> {
    return this.request("ModifyMonitor", req, cb)
  }

  /**
   * 获取所有监控器
   */
  async DescribeMonitors(
    req: DescribeMonitorsRequest,
    cb?: (error: string, rep: DescribeMonitorsResponse) => void
  ): Promise<DescribeMonitorsResponse> {
    return this.request("DescribeMonitors", req, cb)
  }

  /**
   * 新增监控器
   */
  async CreateMonitor(
    req: CreateMonitorRequest,
    cb?: (error: string, rep: CreateMonitorResponse) => void
  ): Promise<CreateMonitorResponse> {
    return this.request("CreateMonitor", req, cb)
  }

  /**
   * 查询分组线路列表接口
   */
  async DescribeDnsLineList(
    req: DescribeDnsLineListRequest,
    cb?: (error: string, rep: DescribeDnsLineListResponse) => void
  ): Promise<DescribeDnsLineListResponse> {
    return this.request("DescribeDnsLineList", req, cb)
  }

  /**
   * 创建实例接口，仅供免费实例使用
   */
  async CreateInstance(
    req: CreateInstanceRequest,
    cb?: (error: string, rep: CreateInstanceResponse) => void
  ): Promise<CreateInstanceResponse> {
    return this.request("CreateInstance", req, cb)
  }

  /**
   * 实例列表
   */
  async DescribeInstanceList(
    req: DescribeInstanceListRequest,
    cb?: (error: string, rep: DescribeInstanceListResponse) => void
  ): Promise<DescribeInstanceListResponse> {
    return this.request("DescribeInstanceList", req, cb)
  }

  /**
   * 设置自动续费接口
   */
  async ModifyPackageAutoRenew(
    req: ModifyPackageAutoRenewRequest,
    cb?: (error: string, rep: ModifyPackageAutoRenewResponse) => void
  ): Promise<ModifyPackageAutoRenewResponse> {
    return this.request("ModifyPackageAutoRenew", req, cb)
  }

  /**
   * 查询监控器详情接口
   */
  async DescribeMonitorDetail(
    req: DescribeMonitorDetailRequest,
    cb?: (error: string, rep: DescribeMonitorDetailResponse) => void
  ): Promise<DescribeMonitorDetailResponse> {
    return this.request("DescribeMonitorDetail", req, cb)
  }

  /**
   * 探测任务套餐列表
   */
  async DescribeDetectTaskPackageList(
    req: DescribeDetectTaskPackageListRequest,
    cb?: (error: string, rep: DescribeDetectTaskPackageListResponse) => void
  ): Promise<DescribeDetectTaskPackageListResponse> {
    return this.request("DescribeDetectTaskPackageList", req, cb)
  }

  /**
   * 策略列表接口
   */
  async DescribeStrategyList(
    req: DescribeStrategyListRequest,
    cb?: (error: string, rep: DescribeStrategyListResponse) => void
  ): Promise<DescribeStrategyListResponse> {
    return this.request("DescribeStrategyList", req, cb)
  }

  /**
   * 购买套餐并支付，此接口会在余额扣费，谨慎调用
   */
  async CreatePackageAndPay(
    req: CreatePackageAndPayRequest,
    cb?: (error: string, rep: CreatePackageAndPayResponse) => void
  ): Promise<CreatePackageAndPayResponse> {
    return this.request("CreatePackageAndPay", req, cb)
  }

  /**
   * 配额查询
   */
  async DescribeQuotas(
    req: DescribeQuotasRequest,
    cb?: (error: string, rep: DescribeQuotasResponse) => void
  ): Promise<DescribeQuotasResponse> {
    return this.request("DescribeQuotas", req, cb)
  }

  /**
   * 地址池详情
   */
  async DescribeAddressPoolDetail(
    req: DescribeAddressPoolDetailRequest,
    cb?: (error: string, rep: DescribeAddressPoolDetailResponse) => void
  ): Promise<DescribeAddressPoolDetailResponse> {
    return this.request("DescribeAddressPoolDetail", req, cb)
  }

  /**
   * 修改策略接口
   */
  async ModifyStrategy(
    req: ModifyStrategyRequest,
    cb?: (error: string, rep: ModifyStrategyResponse) => void
  ): Promise<ModifyStrategyResponse> {
    return this.request("ModifyStrategy", req, cb)
  }

  /**
   * 删除地址池
   */
  async DeleteAddressPool(
    req: DeleteAddressPoolRequest,
    cb?: (error: string, rep: DeleteAddressPoolResponse) => void
  ): Promise<DeleteAddressPoolResponse> {
    return this.request("DeleteAddressPool", req, cb)
  }

  /**
   * 策略详情
   */
  async DescribeStrategyDetail(
    req: DescribeStrategyDetailRequest,
    cb?: (error: string, rep: DescribeStrategyDetailResponse) => void
  ): Promise<DescribeStrategyDetailResponse> {
    return this.request("DescribeStrategyDetail", req, cb)
  }

  /**
   * 实例套餐列表
   */
  async DescribeInstancePackageList(
    req: DescribeInstancePackageListRequest,
    cb?: (error: string, rep: DescribeInstancePackageListResponse) => void
  ): Promise<DescribeInstancePackageListResponse> {
    return this.request("DescribeInstancePackageList", req, cb)
  }
}
