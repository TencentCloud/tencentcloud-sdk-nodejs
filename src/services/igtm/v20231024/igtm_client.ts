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
  AddressPool,
  AddressPoolDetail,
  DescribeMonitorsResponse,
  DescribeDetectorsResponse,
  DeleteAddressPoolResponse,
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
  ModifyAddressPoolResponse,
  AddressLocation,
  CreateAddressPoolRequest,
  DescribeAddressPoolDetailResponse,
  DescribeQuotasRequest,
  MainAddressPool,
  Quota,
  ModifyMonitorRequest,
  ModifyStrategyRequest,
  DescribeDetectorsRequest,
  DeleteStrategyRequest,
  CreateInstanceRequest,
  DescribeAddressPoolDetailRequest,
  CreateMonitorRequest,
  DescribeStrategyListResponse,
  CreateStrategyRequest,
  DescribeDnsLineListResponse,
  DescribeInstanceDetailResponse,
  DescribeMonitorDetailResponse,
  DescribeInstanceDetailRequest,
  GroupLine,
  Address,
  CreateInstanceResponse,
  DetectorGroup,
  ModifyInstanceConfigRequest,
  MainPoolWeight,
  CreateAddressPoolResponse,
  InstanceInfo,
  DescribeStrategyDetailResponse,
  DescribeMonitorsRequest,
  ModifyMonitorResponse,
  InstanceConfig,
  DescribeAddressLocationRequest,
  DescribeStrategyListRequest,
  DescribeMonitorDetailRequest,
  Instance,
  MonitorDetail,
  DescribeAddressPoolListResponse,
  CreateMonitorResponse,
  DeleteStrategyResponse,
  ModifyAddressPoolRequest,
  InstanceDetail,
  StrategyDetail,
  DescribeQuotasResponse,
  DescribeAddressLocationResponse,
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
    req?: DescribeInstanceDetailRequest,
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
   * 查询监控器详情接口
   */
  async DescribeMonitorDetail(
    req: DescribeMonitorDetailRequest,
    cb?: (error: string, rep: DescribeMonitorDetailResponse) => void
  ): Promise<DescribeMonitorDetailResponse> {
    return this.request("DescribeMonitorDetail", req, cb)
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
}
