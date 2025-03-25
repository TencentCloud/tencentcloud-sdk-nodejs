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
  CreatePersonnelVisitWorkOrderRequest,
  WorkOrderTinyInfo,
  DescribePositionsRequest,
  ModelEvaluationBaseInfo,
  DescribeIdcUnitAssetDetailRequest,
  CreateMovingWorkOrderRequest,
  Position,
  SelfOperation,
  CreateServerModelRequest,
  WorkOrderTypeDetail,
  DescribeModelVersionListResponse,
  CreateModelEvaluationWorkOrderRequest,
  DescribeModelVersionListRequest,
  CreateNetDeviceModelRequest,
  IdcUnitInfo,
  ServerModel,
  DescribeIdcUnitDetailResponse,
  DescribeIdcsRequest,
  DescribeIdcUnitAssetDetailResponse,
  DescribePositionsResponse,
  WorkOrderFamilyDetail,
  DescribePositionStatusSummaryResponse,
  DescribeDeviceListRequest,
  ConfirmCommonServiceWorkOrderRequest,
  OtherDevReceivingInfo,
  DescribeModelEvaluationWorkOrderDetailRequest,
  TemplateOption,
  CreateReceivingWorkOrderRequest,
  DescribeWorkOrderStatisticsRequest,
  DescribeResourceUsageRequest,
  LogisticsReceipt,
  CreateCommonServiceWorkOrderRequest,
  CreateCommonServiceWorkOrderResponse,
  DescribeIdcUnitDetailRequest,
  DescribeAvailableModelListRequest,
  CreatePersonnelVisitWorkOrderResponse,
  ExpressDelivery,
  DescribeModelRequest,
  ModelVersionDetail,
  CreateRackOffWorkOrderRequest,
  AvailableModelVersion,
  CustomerReceipt,
  Cage,
  PowerOffConfirm,
  DeviceRackOn,
  DescribeModelTemplateResponse,
  DescribeWorkOrderListRequest,
  DescribeWorkOrderTypesResponse,
  Distribution,
  Rack,
  DescribePositionStatusSummaryRequest,
  DescribeWorkOrderTypesRequest,
  CreateRackOnWorkOrderRequest,
  NetReceivingInfo,
  DescribeCampusListResponse,
  WireReceivingInfo,
  DescribeRacksDistributionResponse,
  DeviceOrderBaseInfo,
  CreateMovingWorkOrderResponse,
  Campus,
  WorkOrderData,
  NetDeviceModel,
  ModelVersion,
  DescribeResourceUsageResponse,
  CreateRackOffWorkOrderResponse,
  RackUsage,
  CommonServiceBaseInfo,
  CreatePowerOnWorkOrderResponse,
  CreateRackOnWorkOrderResponse,
  DescribePersonnelVisitWorkOrderDetailRequest,
  DescribeCustomerInfoResponse,
  Device,
  CreateServerModelResponse,
  DescribeCampusListRequest,
  Filter,
  OptionValueItem,
  IdcUnit,
  ModifyWorkOrderTypeCollectFlagResponse,
  DescribeRacksDistributionRequest,
  DescribeCommonServiceWorkOrderDetailResponse,
  ModifyWorkOrderTypeCollectFlagRequest,
  CreateNetDeviceModelResponse,
  DescribeCommonServiceWorkOrderDetailRequest,
  ServerReceivingInfo,
  CustomerInfo,
  ModelVersionCount,
  CreateModelEvaluationWorkOrderResponse,
  DescribeWorkOrderListResponse,
  DescribeAvailableModelListResponse,
  Personnel,
  DescribeWorkOrderStatisticsResponse,
  CreateReceivingWorkOrderResponse,
  DescribePersonnelVisitWorkOrderDetailResponse,
  CreateQuitWorkOrderRequest,
  PositionStatusItem,
  DescribeModelResponse,
  CreatePowerOnWorkOrderRequest,
  OrderStep,
  CreatePowerOffWorkOrderResponse,
  DeviceHistory,
  PersonnelVisitBaseInfo,
  ConfirmCommonServiceWorkOrderResponse,
  CreatePowerOffWorkOrderRequest,
  CreateQuitWorkOrderResponse,
  DevicePosition,
  DescribeModelTemplateRequest,
  DescribeCustomerInfoRequest,
  DescribeDeviceListResponse,
  DescribeDeviceWorkOrderDetailRequest,
  DescribeModelEvaluationWorkOrderDetailResponse,
  Idc,
  DescribeRacksResponse,
  DescribeRacksRequest,
  DescribeIdcsResponse,
  DescribeDeviceWorkOrderDetailResponse,
} from "./chc_models"

/**
 * chc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("chc.tencentcloudapi.com", "2023-04-18", clientConfig)
  }

  /**
   * 创建设备退出工单
   */
  async CreateQuitWorkOrder(
    req: CreateQuitWorkOrderRequest,
    cb?: (error: string, rep: CreateQuitWorkOrderResponse) => void
  ): Promise<CreateQuitWorkOrderResponse> {
    return this.request("CreateQuitWorkOrder", req, cb)
  }

  /**
   * 获取用户可用的工单类型
   */
  async DescribeWorkOrderTypes(
    req?: DescribeWorkOrderTypesRequest,
    cb?: (error: string, rep: DescribeWorkOrderTypesResponse) => void
  ): Promise<DescribeWorkOrderTypesResponse> {
    return this.request("DescribeWorkOrderTypes", req, cb)
  }

  /**
   * 查询设备型号详情
   */
  async DescribeModel(
    req: DescribeModelRequest,
    cb?: (error: string, rep: DescribeModelResponse) => void
  ): Promise<DescribeModelResponse> {
    return this.request("DescribeModel", req, cb)
  }

  /**
   * 获取机架列表
   */
  async DescribeRacks(
    req: DescribeRacksRequest,
    cb?: (error: string, rep: DescribeRacksResponse) => void
  ): Promise<DescribeRacksResponse> {
    return this.request("DescribeRacks", req, cb)
  }

  /**
   * 创建设备型号评估工单
   */
  async CreateModelEvaluationWorkOrder(
    req: CreateModelEvaluationWorkOrderRequest,
    cb?: (error: string, rep: CreateModelEvaluationWorkOrderResponse) => void
  ): Promise<CreateModelEvaluationWorkOrderResponse> {
    return this.request("CreateModelEvaluationWorkOrder", req, cb)
  }

  /**
   * 新增服务器设备型号
   */
  async CreateServerModel(
    req: CreateServerModelRequest,
    cb?: (error: string, rep: CreateServerModelResponse) => void
  ): Promise<CreateServerModelResponse> {
    return this.request("CreateServerModel", req, cb)
  }

  /**
   * 创建设备下架工单
   */
  async CreateRackOffWorkOrder(
    req: CreateRackOffWorkOrderRequest,
    cb?: (error: string, rep: CreateRackOffWorkOrderResponse) => void
  ): Promise<CreateRackOffWorkOrderResponse> {
    return this.request("CreateRackOffWorkOrder", req, cb)
  }

  /**
   * 获取用户的型号和对应的版本数量
   */
  async DescribeModelVersionList(
    req: DescribeModelVersionListRequest,
    cb?: (error: string, rep: DescribeModelVersionListResponse) => void
  ): Promise<DescribeModelVersionListResponse> {
    return this.request("DescribeModelVersionList", req, cb)
  }

  /**
   * 查询通用服务工单详情
   */
  async DescribeCommonServiceWorkOrderDetail(
    req: DescribeCommonServiceWorkOrderDetailRequest,
    cb?: (error: string, rep: DescribeCommonServiceWorkOrderDetailResponse) => void
  ): Promise<DescribeCommonServiceWorkOrderDetailResponse> {
    return this.request("DescribeCommonServiceWorkOrderDetail", req, cb)
  }

  /**
   * 如果当前该工单类型是收藏状态，调用接口后变成未收藏状态，如果是未收藏状态，调用该接口变为收藏状态
   */
  async ModifyWorkOrderTypeCollectFlag(
    req: ModifyWorkOrderTypeCollectFlagRequest,
    cb?: (error: string, rep: ModifyWorkOrderTypeCollectFlagResponse) => void
  ): Promise<ModifyWorkOrderTypeCollectFlagResponse> {
    return this.request("ModifyWorkOrderTypeCollectFlag", req, cb)
  }

  /**
   * 查询设备型号评估工单详情
   */
  async DescribeModelEvaluationWorkOrderDetail(
    req: DescribeModelEvaluationWorkOrderDetailRequest,
    cb?: (error: string, rep: DescribeModelEvaluationWorkOrderDetailResponse) => void
  ): Promise<DescribeModelEvaluationWorkOrderDetailResponse> {
    return this.request("DescribeModelEvaluationWorkOrderDetail", req, cb)
  }

  /**
   * 查询客户信息
   */
  async DescribeCustomerInfo(
    req?: DescribeCustomerInfoRequest,
    cb?: (error: string, rep: DescribeCustomerInfoResponse) => void
  ): Promise<DescribeCustomerInfoResponse> {
    return this.request("DescribeCustomerInfo", req, cb)
  }

  /**
   * 获取用户可操作的园区列表
   */
  async DescribeCampusList(
    req?: DescribeCampusListRequest,
    cb?: (error: string, rep: DescribeCampusListResponse) => void
  ): Promise<DescribeCampusListResponse> {
    return this.request("DescribeCampusList", req, cb)
  }

  /**
   * 获取机房管理单元的机位分布
   */
  async DescribeRacksDistribution(
    req: DescribeRacksDistributionRequest,
    cb?: (error: string, rep: DescribeRacksDistributionResponse) => void
  ): Promise<DescribeRacksDistributionResponse> {
    return this.request("DescribeRacksDistribution", req, cb)
  }

  /**
   * 获取机位列表
   */
  async DescribePositions(
    req: DescribePositionsRequest,
    cb?: (error: string, rep: DescribePositionsResponse) => void
  ): Promise<DescribePositionsResponse> {
    return this.request("DescribePositions", req, cb)
  }

  /**
   * 创建通用工单
   */
  async CreateCommonServiceWorkOrder(
    req: CreateCommonServiceWorkOrderRequest,
    cb?: (error: string, rep: CreateCommonServiceWorkOrderResponse) => void
  ): Promise<CreateCommonServiceWorkOrderResponse> {
    return this.request("CreateCommonServiceWorkOrder", req, cb)
  }

  /**
   * 用于查询设备类工单的工单详情，如：'receiving', 'rackOn', 'powerOn', 'powerOff', 'rackOff', 'quit'
   */
  async DescribeDeviceWorkOrderDetail(
    req: DescribeDeviceWorkOrderDetailRequest,
    cb?: (error: string, rep: DescribeDeviceWorkOrderDetailResponse) => void
  ): Promise<DescribeDeviceWorkOrderDetailResponse> {
    return this.request("DescribeDeviceWorkOrderDetail", req, cb)
  }

  /**
   * 获取机房内可用的型号列表
   */
  async DescribeAvailableModelList(
    req: DescribeAvailableModelListRequest,
    cb?: (error: string, rep: DescribeAvailableModelListResponse) => void
  ): Promise<DescribeAvailableModelListResponse> {
    return this.request("DescribeAvailableModelList", req, cb)
  }

  /**
   * 获取设备列表
   */
  async DescribeDeviceList(
    req: DescribeDeviceListRequest,
    cb?: (error: string, rep: DescribeDeviceListResponse) => void
  ): Promise<DescribeDeviceListResponse> {
    return this.request("DescribeDeviceList", req, cb)
  }

  /**
   * 创建设备开电工单
   */
  async CreatePowerOnWorkOrder(
    req: CreatePowerOnWorkOrderRequest,
    cb?: (error: string, rep: CreatePowerOnWorkOrderResponse) => void
  ): Promise<CreatePowerOnWorkOrderResponse> {
    return this.request("CreatePowerOnWorkOrder", req, cb)
  }

  /**
   * 获取机架总数及各状态对应的数量汇总
   */
  async DescribePositionStatusSummary(
    req: DescribePositionStatusSummaryRequest,
    cb?: (error: string, rep: DescribePositionStatusSummaryResponse) => void
  ): Promise<DescribePositionStatusSummaryResponse> {
    return this.request("DescribePositionStatusSummary", req, cb)
  }

  /**
   * 查询机房管理单元资产详情
   */
  async DescribeIdcUnitAssetDetail(
    req: DescribeIdcUnitAssetDetailRequest,
    cb?: (error: string, rep: DescribeIdcUnitAssetDetailResponse) => void
  ): Promise<DescribeIdcUnitAssetDetailResponse> {
    return this.request("DescribeIdcUnitAssetDetail", req, cb)
  }

  /**
   * 创建设备关电工单
   */
  async CreatePowerOffWorkOrder(
    req: CreatePowerOffWorkOrderRequest,
    cb?: (error: string, rep: CreatePowerOffWorkOrderResponse) => void
  ): Promise<CreatePowerOffWorkOrderResponse> {
    return this.request("CreatePowerOffWorkOrder", req, cb)
  }

  /**
   * 创建人员到访工单
   */
  async CreatePersonnelVisitWorkOrder(
    req: CreatePersonnelVisitWorkOrderRequest,
    cb?: (error: string, rep: CreatePersonnelVisitWorkOrderResponse) => void
  ): Promise<CreatePersonnelVisitWorkOrderResponse> {
    return this.request("CreatePersonnelVisitWorkOrder", req, cb)
  }

  /**
   * 查询人员到访工单详情
   */
  async DescribePersonnelVisitWorkOrderDetail(
    req: DescribePersonnelVisitWorkOrderDetailRequest,
    cb?: (error: string, rep: DescribePersonnelVisitWorkOrderDetailResponse) => void
  ): Promise<DescribePersonnelVisitWorkOrderDetailResponse> {
    return this.request("DescribePersonnelVisitWorkOrderDetail", req, cb)
  }

  /**
   * 查询机房管理单元详情
   */
  async DescribeIdcUnitDetail(
    req: DescribeIdcUnitDetailRequest,
    cb?: (error: string, rep: DescribeIdcUnitDetailResponse) => void
  ): Promise<DescribeIdcUnitDetailResponse> {
    return this.request("DescribeIdcUnitDetail", req, cb)
  }

  /**
   * 确认通用服务工单
   */
  async ConfirmCommonServiceWorkOrder(
    req: ConfirmCommonServiceWorkOrderRequest,
    cb?: (error: string, rep: ConfirmCommonServiceWorkOrderResponse) => void
  ): Promise<ConfirmCommonServiceWorkOrderResponse> {
    return this.request("ConfirmCommonServiceWorkOrder", req, cb)
  }

  /**
   * 创建设备搬迁工单
   */
  async CreateMovingWorkOrder(
    req: CreateMovingWorkOrderRequest,
    cb?: (error: string, rep: CreateMovingWorkOrderResponse) => void
  ): Promise<CreateMovingWorkOrderResponse> {
    return this.request("CreateMovingWorkOrder", req, cb)
  }

  /**
   * 创建新的网络设备型号
   */
  async CreateNetDeviceModel(
    req: CreateNetDeviceModelRequest,
    cb?: (error: string, rep: CreateNetDeviceModelResponse) => void
  ): Promise<CreateNetDeviceModelResponse> {
    return this.request("CreateNetDeviceModel", req, cb)
  }

  /**
   * 工单统计数据查询
   */
  async DescribeWorkOrderStatistics(
    req?: DescribeWorkOrderStatisticsRequest,
    cb?: (error: string, rep: DescribeWorkOrderStatisticsResponse) => void
  ): Promise<DescribeWorkOrderStatisticsResponse> {
    return this.request("DescribeWorkOrderStatistics", req, cb)
  }

  /**
   * 查询资源汇总
   */
  async DescribeResourceUsage(
    req: DescribeResourceUsageRequest,
    cb?: (error: string, rep: DescribeResourceUsageResponse) => void
  ): Promise<DescribeResourceUsageResponse> {
    return this.request("DescribeResourceUsage", req, cb)
  }

  /**
   * 创建设备上架工单
   */
  async CreateRackOnWorkOrder(
    req: CreateRackOnWorkOrderRequest,
    cb?: (error: string, rep: CreateRackOnWorkOrderResponse) => void
  ): Promise<CreateRackOnWorkOrderResponse> {
    return this.request("CreateRackOnWorkOrder", req, cb)
  }

  /**
   * 获取机房和机房管理单元信息
   */
  async DescribeIdcs(
    req?: DescribeIdcsRequest,
    cb?: (error: string, rep: DescribeIdcsResponse) => void
  ): Promise<DescribeIdcsResponse> {
    return this.request("DescribeIdcs", req, cb)
  }

  /**
   * 创建设备收货工单
   */
  async CreateReceivingWorkOrder(
    req: CreateReceivingWorkOrderRequest,
    cb?: (error: string, rep: CreateReceivingWorkOrderResponse) => void
  ): Promise<CreateReceivingWorkOrderResponse> {
    return this.request("CreateReceivingWorkOrder", req, cb)
  }

  /**
   * 获取型号的填写模板
   */
  async DescribeModelTemplate(
    req: DescribeModelTemplateRequest,
    cb?: (error: string, rep: DescribeModelTemplateResponse) => void
  ): Promise<DescribeModelTemplateResponse> {
    return this.request("DescribeModelTemplate", req, cb)
  }

  /**
   * 查询工单列表
   */
  async DescribeWorkOrderList(
    req: DescribeWorkOrderListRequest,
    cb?: (error: string, rep: DescribeWorkOrderListResponse) => void
  ): Promise<DescribeWorkOrderListResponse> {
    return this.request("DescribeWorkOrderList", req, cb)
  }
}
