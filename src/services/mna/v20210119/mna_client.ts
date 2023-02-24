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
  FlowDetails,
  GetDeviceResponse,
  GetFlowStatisticResponse,
  Capacity,
  GetFlowStatisticRequest,
  DestAddressInfo,
  DeleteQosRequest,
  NetDetails,
  DeviceNetInfo,
  GetMultiFlowStatisticResponse,
  SrcAddressInfo,
  UpdateNetInfo,
  CreateQosResponse,
  DescribeQosResponse,
  CreateEncryptedKeyRequest,
  DeleteDeviceRequest,
  CreateEncryptedKeyResponse,
  UpdateDeviceResponse,
  DeviceDetails,
  CreateQosRequest,
  GetStatisticDataRequest,
  UpdateDeviceRequest,
  GetPublicKeyResponse,
  GetMultiFlowStatisticRequest,
  DeviceBaseInfo,
  ExpectedThreshold,
  DeleteQosResponse,
  Context,
  AddDeviceResponse,
  GetDeviceRequest,
  GetDevicesResponse,
  DescribeQosRequest,
  NetworkData,
  DeleteDeviceResponse,
  GetStatisticDataResponse,
  DeviceInfo,
  GetDevicesRequest,
  AddDeviceRequest,
  GetPublicKeyRequest,
} from "./mna_models"

/**
 * mna client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mna.tencentcloudapi.com", "2021-01-19", clientConfig)
  }

  /**
   * 在用量统计页面下载流量数据
   */
  async GetStatisticData(
    req: GetStatisticDataRequest,
    cb?: (error: string, rep: GetStatisticDataResponse) => void
  ): Promise<GetStatisticDataResponse> {
    return this.request("GetStatisticData", req, cb)
  }

  /**
   * 更新设备信息
   */
  async UpdateDevice(
    req: UpdateDeviceRequest,
    cb?: (error: string, rep: UpdateDeviceResponse) => void
  ): Promise<UpdateDeviceResponse> {
    return this.request("UpdateDevice", req, cb)
  }

  /**
   * 新建设备记录
   */
  async AddDevice(
    req: AddDeviceRequest,
    cb?: (error: string, rep: AddDeviceResponse) => void
  ): Promise<AddDeviceResponse> {
    return this.request("AddDevice", req, cb)
  }

  /**
   * 获取Qos加速状态
   */
  async DescribeQos(
    req: DescribeQosRequest,
    cb?: (error: string, rep: DescribeQosResponse) => void
  ): Promise<DescribeQosResponse> {
    return this.request("DescribeQos", req, cb)
  }

  /**
   * 获取指定设备Id，指定时间点数据流量使用情况
   */
  async GetFlowStatistic(
    req: GetFlowStatisticRequest,
    cb?: (error: string, rep: GetFlowStatisticResponse) => void
  ): Promise<GetFlowStatisticResponse> {
    return this.request("GetFlowStatistic", req, cb)
  }

  /**
   * 获取设备信息列表
   */
  async GetDevices(
    req: GetDevicesRequest,
    cb?: (error: string, rep: GetDevicesResponse) => void
  ): Promise<GetDevicesResponse> {
    return this.request("GetDevices", req, cb)
  }

  /**
   * 获取公钥用于验签
   */
  async GetPublicKey(
    req?: GetPublicKeyRequest,
    cb?: (error: string, rep: GetPublicKeyResponse) => void
  ): Promise<GetPublicKeyResponse> {
    return this.request("GetPublicKey", req, cb)
  }

  /**
   * 通过此接口设置和更新预置密钥
   */
  async CreateEncryptedKey(
    req?: CreateEncryptedKeyRequest,
    cb?: (error: string, rep: CreateEncryptedKeyResponse) => void
  ): Promise<CreateEncryptedKeyResponse> {
    return this.request("CreateEncryptedKey", req, cb)
  }

  /**
   * 批量获取设备流量统计曲线
   */
  async GetMultiFlowStatistic(
    req: GetMultiFlowStatisticRequest,
    cb?: (error: string, rep: GetMultiFlowStatisticResponse) => void
  ): Promise<GetMultiFlowStatisticResponse> {
    return this.request("GetMultiFlowStatistic", req, cb)
  }

  /**
   * 删除设备信息
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 移动网络停止Qos加速过程
   */
  async DeleteQos(
    req: DeleteQosRequest,
    cb?: (error: string, rep: DeleteQosResponse) => void
  ): Promise<DeleteQosResponse> {
    return this.request("DeleteQos", req, cb)
  }

  /**
   * 通过指定设备的ID查找设备详细信息
   */
  async GetDevice(
    req: GetDeviceRequest,
    cb?: (error: string, rep: GetDeviceResponse) => void
  ): Promise<GetDeviceResponse> {
    return this.request("GetDevice", req, cb)
  }

  /**
   * 移动网络发起Qos加速过程
   */
  async CreateQos(
    req: CreateQosRequest,
    cb?: (error: string, rep: CreateQosResponse) => void
  ): Promise<CreateQosResponse> {
    return this.request("CreateQos", req, cb)
  }
}
