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
  DeleteProductRequest,
  DescribeDeviceDataHistoryRequest,
  EventHistoryItem,
  CreateForwardRuleRequest,
  SetForwardAuthResponse,
  SetForwardAuthRequest,
  DeviceDataHistoryItem,
  DescribeBatchsRequest,
  DescribeCategoryResponse,
  DescribeModelDefinitionResponse,
  CreateBatchRequest,
  ImportModelDefinitionRequest,
  DescribeDeviceActionHistoryResponse,
  VideoBatch,
  DescribeDeviceCommLogResponse,
  DeleteDeviceRequest,
  DeleteProductResponse,
  DescribeProductsRequest,
  DescribeDeviceEventHistoryResponse,
  DescribeDeviceActionHistoryRequest,
  ImportModelDefinitionResponse,
  DescribeDevicesResponse,
  ModifyProductResponse,
  ProductTemplate,
  DescribeBatchResponse,
  ModifyProductRequest,
  ModifyModelDefinitionRequest,
  DescribeBatchsResponse,
  DeleteForwardRuleRequest,
  DescribeDeviceEventHistoryRequest,
  DescribeDeviceRequest,
  DescribeForwardRuleResponse,
  DescribeBatchRequest,
  ModifyForwardRuleRequest,
  DescribeCategoryRequest,
  DescribeDeviceCommLogRequest,
  CreateProductResponse,
  DescribeDeviceDataHistoryResponse,
  DescribeDevicesRequest,
  VideoProduct,
  ActionHistory,
  DescribeModelDefinitionRequest,
  ModifyForwardRuleResponse,
  CheckForwardAuthResponse,
  DescribeProductResponse,
  DescribeDeviceDataResponse,
  ModifyDeviceResponse,
  DescribeForwardRuleRequest,
  DeleteForwardRuleResponse,
  DescribeProductRequest,
  DescribeProductsResponse,
  CheckForwardAuthRequest,
  CreateProductRequest,
  DescribeDeviceDataRequest,
  DeleteDeviceResponse,
  DeviceInfo,
  ModifyModelDefinitionResponse,
  CreateForwardRuleResponse,
  ModifyDeviceRequest,
  DeviceCommLogItem,
  DescribeDeviceResponse,
  ProductModelDefinition,
  CreateBatchResponse,
} from "./iotvideo_models"

/**
 * iotvideo client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iotvideo.tencentcloudapi.com", "2020-12-15", clientConfig)
  }

  /**
   * 删除转发规则
   */
  async DeleteForwardRule(
    req: DeleteForwardRuleRequest,
    cb?: (error: string, rep: DeleteForwardRuleResponse) => void
  ): Promise<DeleteForwardRuleResponse> {
    return this.request("DeleteForwardRule", req, cb)
  }

  /**
   * 获取设备在指定时间范围内的通讯日志
   */
  async DescribeDeviceCommLog(
    req: DescribeDeviceCommLogRequest,
    cb?: (error: string, rep: DescribeDeviceCommLogResponse) => void
  ): Promise<DescribeDeviceCommLogResponse> {
    return this.request("DescribeDeviceCommLog", req, cb)
  }

  /**
   * 判断是否开启的转发的权限
   */
  async CheckForwardAuth(
    req: CheckForwardAuthRequest,
    cb?: (error: string, rep: CheckForwardAuthResponse) => void
  ): Promise<CheckForwardAuthResponse> {
    return this.request("CheckForwardAuth", req, cb)
  }

  /**
   * 获取设备属性数据
   */
  async DescribeDeviceData(
    req: DescribeDeviceDataRequest,
    cb?: (error: string, rep: DescribeDeviceDataResponse) => void
  ): Promise<DescribeDeviceDataResponse> {
    return this.request("DescribeDeviceData", req, cb)
  }

  /**
   * 修改产品信息
   */
  async ModifyProduct(
    req: ModifyProductRequest,
    cb?: (error: string, rep: ModifyProductResponse) => void
  ): Promise<ModifyProductResponse> {
    return this.request("ModifyProduct", req, cb)
  }

  /**
   * 查看设备详情
   */
  async DescribeDevice(
    req: DescribeDeviceRequest,
    cb?: (error: string, rep: DescribeDeviceResponse) => void
  ): Promise<DescribeDeviceResponse> {
    return this.request("DescribeDevice", req, cb)
  }

  /**
   * 获取产品详情
   */
  async DescribeProduct(
    req: DescribeProductRequest,
    cb?: (error: string, rep: DescribeProductResponse) => void
  ): Promise<DescribeProductResponse> {
    return this.request("DescribeProduct", req, cb)
  }

  /**
   * 修改设备信息
   */
  async ModifyDevice(
    req: ModifyDeviceRequest,
    cb?: (error: string, rep: ModifyDeviceResponse) => void
  ): Promise<ModifyDeviceResponse> {
    return this.request("ModifyDevice", req, cb)
  }

  /**
   * 修改转发规则
   */
  async ModifyForwardRule(
    req: ModifyForwardRuleRequest,
    cb?: (error: string, rep: ModifyForwardRuleResponse) => void
  ): Promise<ModifyForwardRuleResponse> {
    return this.request("ModifyForwardRule", req, cb)
  }

  /**
   * 获取批次列表
   */
  async DescribeBatchs(
    req: DescribeBatchsRequest,
    cb?: (error: string, rep: DescribeBatchsResponse) => void
  ): Promise<DescribeBatchsResponse> {
    return this.request("DescribeBatchs", req, cb)
  }

  /**
   * 创建产品
   */
  async CreateProduct(
    req: CreateProductRequest,
    cb?: (error: string, rep: CreateProductResponse) => void
  ): Promise<CreateProductResponse> {
    return this.request("CreateProduct", req, cb)
  }

  /**
   * 为用户提供获取动作历史的能力。
   */
  async DescribeDeviceActionHistory(
    req: DescribeDeviceActionHistoryRequest,
    cb?: (error: string, rep: DescribeDeviceActionHistoryResponse) => void
  ): Promise<DescribeDeviceActionHistoryResponse> {
    return this.request("DescribeDeviceActionHistory", req, cb)
  }

  /**
   * 获取产品列表
   */
  async DescribeProducts(
    req: DescribeProductsRequest,
    cb?: (error: string, rep: DescribeProductsResponse) => void
  ): Promise<DescribeProductsResponse> {
    return this.request("DescribeProducts", req, cb)
  }

  /**
   * 创建批次
   */
  async CreateBatch(
    req: CreateBatchRequest,
    cb?: (error: string, rep: CreateBatchResponse) => void
  ): Promise<CreateBatchResponse> {
    return this.request("CreateBatch", req, cb)
  }

  /**
   * 获取设备在指定时间范围内上报的历史数据。
   */
  async DescribeDeviceDataHistory(
    req: DescribeDeviceDataHistoryRequest,
    cb?: (error: string, rep: DescribeDeviceDataHistoryResponse) => void
  ): Promise<DescribeDeviceDataHistoryResponse> {
    return this.request("DescribeDeviceDataHistory", req, cb)
  }

  /**
   * 删除设备
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 获取批次详情
   */
  async DescribeBatch(
    req: DescribeBatchRequest,
    cb?: (error: string, rep: DescribeBatchResponse) => void
  ): Promise<DescribeBatchResponse> {
    return this.request("DescribeBatch", req, cb)
  }

  /**
   * 设置转发权限
   */
  async SetForwardAuth(
    req: SetForwardAuthRequest,
    cb?: (error: string, rep: SetForwardAuthResponse) => void
  ): Promise<SetForwardAuthResponse> {
    return this.request("SetForwardAuth", req, cb)
  }

  /**
   * 获取Category详情
   */
  async DescribeCategory(
    req: DescribeCategoryRequest,
    cb?: (error: string, rep: DescribeCategoryResponse) => void
  ): Promise<DescribeCategoryResponse> {
    return this.request("DescribeCategory", req, cb)
  }

  /**
   * 删除产品
   */
  async DeleteProduct(
    req: DeleteProductRequest,
    cb?: (error: string, rep: DeleteProductResponse) => void
  ): Promise<DeleteProductResponse> {
    return this.request("DeleteProduct", req, cb)
  }

  /**
   * 获取设备的历史事件
   */
  async DescribeDeviceEventHistory(
    req: DescribeDeviceEventHistoryRequest,
    cb?: (error: string, rep: DescribeDeviceEventHistoryResponse) => void
  ): Promise<DescribeDeviceEventHistoryResponse> {
    return this.request("DescribeDeviceEventHistory", req, cb)
  }

  /**
   * 导入其它产品的数据模板，覆盖现有数据模板的物模型和产品分类信息
   */
  async ImportModelDefinition(
    req: ImportModelDefinitionRequest,
    cb?: (error: string, rep: ImportModelDefinitionResponse) => void
  ): Promise<ImportModelDefinitionResponse> {
    return this.request("ImportModelDefinition", req, cb)
  }

  /**
   * 获取产品转发规则
   */
  async DescribeForwardRule(
    req: DescribeForwardRuleRequest,
    cb?: (error: string, rep: DescribeForwardRuleResponse) => void
  ): Promise<DescribeForwardRuleResponse> {
    return this.request("DescribeForwardRule", req, cb)
  }

  /**
   * 创建转发规则
   */
  async CreateForwardRule(
    req: CreateForwardRuleRequest,
    cb?: (error: string, rep: CreateForwardRuleResponse) => void
  ): Promise<CreateForwardRuleResponse> {
    return this.request("CreateForwardRule", req, cb)
  }

  /**
   * 提供修改产品的数据模板的能力
   */
  async ModifyModelDefinition(
    req: ModifyModelDefinitionRequest,
    cb?: (error: string, rep: ModifyModelDefinitionResponse) => void
  ): Promise<ModifyModelDefinitionResponse> {
    return this.request("ModifyModelDefinition", req, cb)
  }

  /**
   * 查询产品配置的数据模板信息
   */
  async DescribeModelDefinition(
    req: DescribeModelDefinitionRequest,
    cb?: (error: string, rep: DescribeModelDefinitionResponse) => void
  ): Promise<DescribeModelDefinitionResponse> {
    return this.request("DescribeModelDefinition", req, cb)
  }

  /**
   * 获取设备列表
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
  }
}
