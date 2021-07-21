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
  DescribePrivateCABindedProductsRequest,
  DescribePrivateCAsResponse,
  UpdateDevicesEnableStateResponse,
  DescribePrivateCARequest,
  DescribeProductCAResponse,
  DeletePrivateCAResponse,
  UpdatePrivateCARequest,
  DescribePrivateCABindedProductsResponse,
  DeleteDeviceRequest,
  DeleteProductResponse,
  CreatePrivateCAResponse,
  BindProductInfo,
  DescribeDevicesResponse,
  DeviceTag,
  DescribeProductCARequest,
  CreatePrivateCARequest,
  DescribeProductResponse,
  DescribeDeviceRequest,
  DeviceLabel,
  CertInfo,
  ProductMetadata,
  DescribePrivateCAsRequest,
  UpdatePrivateCAResponse,
  DescribeDevicesRequest,
  UpdateDeviceLogLevelRequest,
  DescribePrivateCAResponse,
  UpdateDeviceLogLevelResponse,
  CreateDeviceResponse,
  UpdateDevicesEnableStateRequest,
  CreateDeviceRequest,
  DescribeProductRequest,
  Attribute,
  DeleteDeviceResponse,
  DeletePrivateCARequest,
  DeviceInfo,
  ProductProperties,
  DescribeDeviceResponse,
} from "./iotcloud_models"

/**
 * iotcloud client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iotcloud.tencentcloudapi.com", "2021-04-08", clientConfig)
  }

  /**
   * 设置设备上报的日志级别
   */
  async UpdateDeviceLogLevel(
    req: UpdateDeviceLogLevelRequest,
    cb?: (error: string, rep: UpdateDeviceLogLevelResponse) => void
  ): Promise<UpdateDeviceLogLevelResponse> {
    return this.request("UpdateDeviceLogLevel", req, cb)
  }

  /**
   * 查询私有CA绑定的产品列表
   */
  async DescribePrivateCABindedProducts(
    req: DescribePrivateCABindedProductsRequest,
    cb?: (error: string, rep: DescribePrivateCABindedProductsResponse) => void
  ): Promise<DescribePrivateCABindedProductsResponse> {
    return this.request("DescribePrivateCABindedProducts", req, cb)
  }

  /**
   * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
  }

  /**
   * 本接口（CreateDevice）用于新建一个物联网通信设备。
   */
  async CreateDevice(
    req: CreateDeviceRequest,
    cb?: (error: string, rep: CreateDeviceResponse) => void
  ): Promise<CreateDeviceResponse> {
    return this.request("CreateDevice", req, cb)
  }

  /**
   * 查询产品绑定的CA证书
   */
  async DescribeProductCA(
    req: DescribeProductCARequest,
    cb?: (error: string, rep: DescribeProductCAResponse) => void
  ): Promise<DescribeProductCAResponse> {
    return this.request("DescribeProductCA", req, cb)
  }

  /**
   * 查询私有化CA信息
   */
  async DescribePrivateCA(
    req: DescribePrivateCARequest,
    cb?: (error: string, rep: DescribePrivateCAResponse) => void
  ): Promise<DescribePrivateCAResponse> {
    return this.request("DescribePrivateCA", req, cb)
  }

  /**
   * 创建私有CA证书
   */
  async CreatePrivateCA(
    req: CreatePrivateCARequest,
    cb?: (error: string, rep: CreatePrivateCAResponse) => void
  ): Promise<CreatePrivateCAResponse> {
    return this.request("CreatePrivateCA", req, cb)
  }

  /**
   * 本接口（DeleteProduct）用于删除一个物联网通信产品
   */
  async DeleteProduct(
    req: DeleteProductRequest,
    cb?: (error: string, rep: DeleteProductResponse) => void
  ): Promise<DeleteProductResponse> {
    return this.request("DeleteProduct", req, cb)
  }

  /**
   * 更新私有CA证书
   */
  async UpdatePrivateCA(
    req: UpdatePrivateCARequest,
    cb?: (error: string, rep: UpdatePrivateCAResponse) => void
  ): Promise<UpdatePrivateCAResponse> {
    return this.request("UpdatePrivateCA", req, cb)
  }

  /**
   * 查询私有CA证书列表
   */
  async DescribePrivateCAs(
    req?: DescribePrivateCAsRequest,
    cb?: (error: string, rep: DescribePrivateCAsResponse) => void
  ): Promise<DescribePrivateCAsResponse> {
    return this.request("DescribePrivateCAs", req, cb)
  }

  /**
   * 删除私有CA证书
   */
  async DeletePrivateCA(
    req: DeletePrivateCARequest,
    cb?: (error: string, rep: DeletePrivateCAResponse) => void
  ): Promise<DeletePrivateCAResponse> {
    return this.request("DeletePrivateCA", req, cb)
  }

  /**
   * 本接口（DescribeDevice）用于查看设备信息
   */
  async DescribeDevice(
    req: DescribeDeviceRequest,
    cb?: (error: string, rep: DescribeDeviceResponse) => void
  ): Promise<DescribeDeviceResponse> {
    return this.request("DescribeDevice", req, cb)
  }

  /**
   * 批量启用或者禁用设备
   */
  async UpdateDevicesEnableState(
    req: UpdateDevicesEnableStateRequest,
    cb?: (error: string, rep: UpdateDevicesEnableStateResponse) => void
  ): Promise<UpdateDevicesEnableStateResponse> {
    return this.request("UpdateDevicesEnableState", req, cb)
  }

  /**
   * 本接口（DeleteDevice）用于删除物联网通信设备。
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 本接口（DescribeProduct）用于查看产品详情
   */
  async DescribeProduct(
    req: DescribeProductRequest,
    cb?: (error: string, rep: DescribeProductResponse) => void
  ): Promise<DescribeProductResponse> {
    return this.request("DescribeProduct", req, cb)
  }
}
