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
  ListRuntimesMCResponse,
  RuntimeMC,
  GetRuntimeResourceMonitorMetricMCResponse,
  ListRuntimeDeployedInstancesMCRequest,
  RuntimeExtensionMC,
  ListDeployableRuntimesMCResponse,
  GetRuntimeMCResponse,
  ListDeployableRuntimesMCRequest,
  ListRuntimesMCRequest,
  GetRuntimeMCRequest,
  MetricValueMC,
  GetRuntimeResourceMonitorMetricMCRequest,
  AbstractRuntimeMC,
  ListRuntimeDeployedInstancesMCResponse,
  RuntimeDeployedInstanceMC,
} from "./eis_models"

/**
 * eis client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("eis.tencentcloudapi.com", "2021-06-01", clientConfig)
  }

  /**
   * 获取运行时详情
   */
  async GetRuntimeMC(
    req: GetRuntimeMCRequest,
    cb?: (error: string, rep: GetRuntimeMCResponse) => void
  ): Promise<GetRuntimeMCResponse> {
    return this.request("GetRuntimeMC", req, cb)
  }

  /**
   * 返回用户可用的运行时列表，发布应用时返回的运行时环境，仅shared和private运行时，无sandbox运行时，并且只有running/scaling状态的
   */
  async ListDeployableRuntimesMC(
    req: ListDeployableRuntimesMCRequest,
    cb?: (error: string, rep: ListDeployableRuntimesMCResponse) => void
  ): Promise<ListDeployableRuntimesMCResponse> {
    return this.request("ListDeployableRuntimesMC", req, cb)
  }

  /**
   * 获取运行时资源监控详情，cpu，memory，bandwidth
   */
  async GetRuntimeResourceMonitorMetricMC(
    req: GetRuntimeResourceMonitorMetricMCRequest,
    cb?: (error: string, rep: GetRuntimeResourceMonitorMetricMCResponse) => void
  ): Promise<GetRuntimeResourceMonitorMetricMCResponse> {
    return this.request("GetRuntimeResourceMonitorMetricMC", req, cb)
  }

  /**
   * 获取运行时部署的应用实例列表
   */
  async ListRuntimeDeployedInstancesMC(
    req: ListRuntimeDeployedInstancesMCRequest,
    cb?: (error: string, rep: ListRuntimeDeployedInstancesMCResponse) => void
  ): Promise<ListRuntimeDeployedInstancesMCResponse> {
    return this.request("ListRuntimeDeployedInstancesMC", req, cb)
  }

  /**
   * 返回用户的运行时列表，运行时管理主页使用，包含沙箱、共享运行时及独立运行时环境，不包含已经删除的运行时
   */
  async ListRuntimesMC(
    req: ListRuntimesMCRequest,
    cb?: (error: string, rep: ListRuntimesMCResponse) => void
  ): Promise<ListRuntimesMCResponse> {
    return this.request("ListRuntimesMC", req, cb)
  }
}
