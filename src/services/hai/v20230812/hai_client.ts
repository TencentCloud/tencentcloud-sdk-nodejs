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
  NetworkStatus,
  InquirePriceRunInstancesResponse,
  ResizeInstanceDiskResponse,
  DescribeServiceLoginSettingsResponse,
  ResetInstancesPasswordResponse,
  DescribeInstanceNetworkStatusResponse,
  Instance,
  TerminateInstancesRequest,
  TerminateInstancesResponse,
  DescribeApplicationsResponse,
  StartInstanceRequest,
  LoginSetting,
  RegionInfo,
  ResizeInstanceDiskRequest,
  Price,
  StopInstanceRequest,
  DescribeMuskPromptsRequest,
  DescribeScenesResponse,
  DescribeApplicationsRequest,
  SceneInfo,
  CreateApplicationRequest,
  ResetInstancesPasswordRequest,
  RunInstancesRequest,
  DescribeInstancesResponse,
  SystemDisk,
  RunInstancesResponse,
  DescribeInstancesRequest,
  Filter,
  MuskPromptInfo,
  DescribeScenesRequest,
  DescribeRegionsResponse,
  InquirePriceRunInstancesRequest,
  StartInstanceResponse,
  CreateMuskPromptResponse,
  DescribeServiceLoginSettingsRequest,
  ApplicationInfo,
  CreateApplicationResponse,
  ItemPriceDetail,
  CreateMuskPromptRequest,
  DescribeRegionsRequest,
  ItemPrice,
  DescribeInstanceNetworkStatusRequest,
  LoginService,
  StopInstanceResponse,
  InstanceChargePrepaid,
  DescribeMuskPromptsResponse,
} from "./hai_models"

/**
 * hai client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("hai.tencentcloudapi.com", "2023-08-12", clientConfig)
  }

  /**
   * 本接口（DescribeInstances）用户查询实例
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 本接口（DescribeApplications）用于查询应用
   */
  async DescribeApplications(
    req: DescribeApplicationsRequest,
    cb?: (error: string, rep: DescribeApplicationsResponse) => void
  ): Promise<DescribeApplicationsResponse> {
    return this.request("DescribeApplications", req, cb)
  }

  /**
   * 获取prompt任务列表
   */
  async DescribeMuskPrompts(
    req: DescribeMuskPromptsRequest,
    cb?: (error: string, rep: DescribeMuskPromptsResponse) => void
  ): Promise<DescribeMuskPromptsResponse> {
    return this.request("DescribeMuskPrompts", req, cb)
  }

  /**
   * 本接口（DescribeScenes）用于查询场景
   */
  async DescribeScenes(
    req: DescribeScenesRequest,
    cb?: (error: string, rep: DescribeScenesResponse) => void
  ): Promise<DescribeScenesResponse> {
    return this.request("DescribeScenes", req, cb)
  }

  /**
   * 本接口（ResizeInstanceDisk）用于对指定HAI实例进行扩容云硬盘操作。
   */
  async ResizeInstanceDisk(
    req: ResizeInstanceDiskRequest,
    cb?: (error: string, rep: ResizeInstanceDiskResponse) => void
  ): Promise<ResizeInstanceDiskResponse> {
    return this.request("ResizeInstanceDisk", req, cb)
  }

  /**
   * 本接口（DescribeRegions）用于查询地域列表
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 本接口 (RunInstances) 用于创建一个或多个指定配置的实例。
   */
  async RunInstances(
    req: RunInstancesRequest,
    cb?: (error: string, rep: RunInstancesResponse) => void
  ): Promise<RunInstancesResponse> {
    return this.request("RunInstances", req, cb)
  }

  /**
     * 本接口 (StartInstance) 用于主动启动实例。
‘运行中’、‘预付费’的实例不支持启动实例
     */
  async StartInstance(
    req: StartInstanceRequest,
    cb?: (error: string, rep: StartInstanceResponse) => void
  ): Promise<StartInstanceResponse> {
    return this.request("StartInstance", req, cb)
  }

  /**
   * 本接口 (TerminateInstances) 用于主动退还实例。
   */
  async TerminateInstances(
    req: TerminateInstancesRequest,
    cb?: (error: string, rep: TerminateInstancesResponse) => void
  ): Promise<TerminateInstancesResponse> {
    return this.request("TerminateInstances", req, cb)
  }

  /**
   * 创建musk prompt 任务
   */
  async CreateMuskPrompt(
    req: CreateMuskPromptRequest,
    cb?: (error: string, rep: CreateMuskPromptResponse) => void
  ): Promise<CreateMuskPromptResponse> {
    return this.request("CreateMuskPrompt", req, cb)
  }

  /**
   * 本接口 (ResetInstancesPassword) 用于重置实例的用户密码。
   */
  async ResetInstancesPassword(
    req: ResetInstancesPasswordRequest,
    cb?: (error: string, rep: ResetInstancesPasswordResponse) => void
  ): Promise<ResetInstancesPasswordResponse> {
    return this.request("ResetInstancesPassword", req, cb)
  }

  /**
   * 本接口（DescribeInstanceNetworkStatus）用于查询实例的网络配置及消耗情况
   */
  async DescribeInstanceNetworkStatus(
    req: DescribeInstanceNetworkStatusRequest,
    cb?: (error: string, rep: DescribeInstanceNetworkStatusResponse) => void
  ): Promise<DescribeInstanceNetworkStatusResponse> {
    return this.request("DescribeInstanceNetworkStatus", req, cb)
  }

  /**
   * 本接口（DescribeServiceLoginSettings）用于查询服务登录配置
   */
  async DescribeServiceLoginSettings(
    req: DescribeServiceLoginSettingsRequest,
    cb?: (error: string, rep: DescribeServiceLoginSettingsResponse) => void
  ): Promise<DescribeServiceLoginSettingsResponse> {
    return this.request("DescribeServiceLoginSettings", req, cb)
  }

  /**
   * 本接口 (InquirePriceRunInstances) 用于实例询价。
   */
  async InquirePriceRunInstances(
    req: InquirePriceRunInstancesRequest,
    cb?: (error: string, rep: InquirePriceRunInstancesResponse) => void
  ): Promise<InquirePriceRunInstancesResponse> {
    return this.request("InquirePriceRunInstances", req, cb)
  }

  /**
     * 本接口 (StopInstance) 用于主动关闭实例。
‘已关机’、‘预付费’的实例不支持关机
     */
  async StopInstance(
    req: StopInstanceRequest,
    cb?: (error: string, rep: StopInstanceResponse) => void
  ): Promise<StopInstanceResponse> {
    return this.request("StopInstance", req, cb)
  }

  /**
   * 本接口（CreateApplication）用于对HAI实例制作自定义应用。
   */
  async CreateApplication(
    req: CreateApplicationRequest,
    cb?: (error: string, rep: CreateApplicationResponse) => void
  ): Promise<CreateApplicationResponse> {
    return this.request("CreateApplication", req, cb)
  }
}
