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
  DescribeBlueprintsResponse,
  DescribeInstancesTrafficPackagesRequest,
  DeleteFirewallRulesRequest,
  LoginSettings,
  InstanceTrafficPackage,
  StartInstancesResponse,
  Instance,
  DescribeInstancesTrafficPackagesResponse,
  TrafficPackage,
  RebootInstancesResponse,
  DescribeBundlesRequest,
  Blueprint,
  Price,
  Bundle,
  StartInstancesRequest,
  DeleteFirewallRulesResponse,
  RebootInstancesRequest,
  DescribeBlueprintsRequest,
  DescribeInstancesResponse,
  InstancePrice,
  SystemDisk,
  ResetInstanceRequest,
  DescribeBundlesResponse,
  DescribeInstancesRequest,
  Filter,
  ResetInstanceResponse,
  CreateFirewallRulesRequest,
  DescribeFirewallRulesRequest,
  DescribeFirewallRulesResponse,
  FirewallRule,
  FirewallRuleInfo,
  CreateFirewallRulesResponse,
  StopInstancesResponse,
  InternetAccessible,
  StopInstancesRequest,
} from "./lighthouse_models"

/**
 * lighthouse client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("lighthouse.tencentcloudapi.com", "2020-03-24", clientConfig)
  }

  /**
   * 本接口（StopInstances）用于关闭一个或多个实例。
   * 只有状态为 RUNNING 的实例才可以进行此操作。
   * 接口调用成功时，实例会进入 STOPPING 状态；关闭实例成功时，实例会进入 STOPPED 状态。
   * 支持批量操作。每次请求批量实例的上限为 100。
   * 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
   */
  async StopInstances(
    req: StopInstancesRequest,
    cb?: (error: string, rep: StopInstancesResponse) => void
  ): Promise<StopInstancesResponse> {
    return this.request("StopInstances", req, cb)
  }

  /**
     * 本接口（DescribeInstances）用于查询一个或多个实例的详细信息。

* 可以根据实例 ID、实例名称或者实例的内网 IP 查询实例的详细信息。
* 过滤信息详细请见过滤器 [Filters](https://cloud.tencent.com/document/product/1207/47576#Filter) 。
* 如果参数为空，返回当前用户一定数量（Limit 所指定的数量，默认为 20）的实例。
* 支持查询实例的最新操作（LatestOperation）以及最新操作状态（LatestOperationState）。
     */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 本接口（DescribeInstancesTrafficPackages）用于查询一个或多个实例的流量包详情。
   */
  async DescribeInstancesTrafficPackages(
    req: DescribeInstancesTrafficPackagesRequest,
    cb?: (error: string, rep: DescribeInstancesTrafficPackagesResponse) => void
  ): Promise<DescribeInstancesTrafficPackagesResponse> {
    return this.request("DescribeInstancesTrafficPackages", req, cb)
  }

  /**
     * 本接口（RebootInstances）用于重启实例。

* 只有状态为 RUNNING 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 REBOOTING 状态；重启实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作，每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
  async RebootInstances(
    req: RebootInstancesRequest,
    cb?: (error: string, rep: RebootInstancesResponse) => void
  ): Promise<RebootInstancesResponse> {
    return this.request("RebootInstances", req, cb)
  }

  /**
     * 本接口（StartInstances）用于启动一个或多个实例。

* 只有状态为 STOPPED 的实例才可以进行此操作。
* 接口调用成功时，实例会进入 STARTING 状态；启动实例成功时，实例会进入 RUNNING 状态。
* 支持批量操作。每次请求批量实例的上限为 100。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
  async StartInstances(
    req: StartInstancesRequest,
    cb?: (error: string, rep: StartInstancesResponse) => void
  ): Promise<StartInstancesResponse> {
    return this.request("StartInstances", req, cb)
  }

  /**
     * 本接口（DeleteFirewallRules）用于删除实例的防火墙规则。

* Protocol 字段支持输入 TCP，UDP，或 ALL。

* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
     */
  async DeleteFirewallRules(
    req: DeleteFirewallRulesRequest,
    cb?: (error: string, rep: DeleteFirewallRulesResponse) => void
  ): Promise<DeleteFirewallRulesResponse> {
    return this.request("DeleteFirewallRules", req, cb)
  }

  /**
   * 本接口（DescribeBundles）用于查询套餐信息。
   */
  async DescribeBundles(
    req: DescribeBundlesRequest,
    cb?: (error: string, rep: DescribeBundlesResponse) => void
  ): Promise<DescribeBundlesResponse> {
    return this.request("DescribeBundles", req, cb)
  }

  /**
     * 本接口（CreateFirewallRules）用于在实例上添加防火墙规则。

* Protocol 字段支持输入 TCP，UDP，或 ALL。

* Port 字段允许输入 ALL，或者一个单独的端口号，或者用逗号分隔的离散端口号，或者用减号分隔的两个端口号代表的端口范围。当 Port 为范围时，减号分隔的第一个端口号小于第二个端口号。当 Protocol 字段不是 TCP 或 UDP 时，Port 字段只能为空或 ALL。Port 字段长度不得超过 64。
     */
  async CreateFirewallRules(
    req: CreateFirewallRulesRequest,
    cb?: (error: string, rep: CreateFirewallRulesResponse) => void
  ): Promise<CreateFirewallRulesResponse> {
    return this.request("CreateFirewallRules", req, cb)
  }

  /**
   * 本接口（DescribeBlueprints）用于查询镜像信息。
   */
  async DescribeBlueprints(
    req: DescribeBlueprintsRequest,
    cb?: (error: string, rep: DescribeBlueprintsResponse) => void
  ): Promise<DescribeBlueprintsResponse> {
    return this.request("DescribeBlueprints", req, cb)
  }

  /**
     * 本接口（ResetInstance）用于重装指定实例上的镜像。

* 如果指定了 BlueprintId 参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装。
* 系统盘将会被格式化，并重置；请确保系统盘中无重要文件。
* 目前不支持实例使用该接口实现 LINUX_UNIX 和 WINDOWS 操作系统切换。
* 本接口为异步接口，请求发送成功后会返回一个 RequestId，此时操作并未立即完成。实例操作结果可以通过调用 DescribeInstances 接口查询，如果实例的最新操作状态（LatestOperationState）为“SUCCESS”，则代表操作成功。
     */
  async ResetInstance(
    req: ResetInstanceRequest,
    cb?: (error: string, rep: ResetInstanceResponse) => void
  ): Promise<ResetInstanceResponse> {
    return this.request("ResetInstance", req, cb)
  }

  /**
   * 本接口（DescribeFirewallRules）用于查询实例的防火墙规则。
   */
  async DescribeFirewallRules(
    req: DescribeFirewallRulesRequest,
    cb?: (error: string, rep: DescribeFirewallRulesResponse) => void
  ): Promise<DescribeFirewallRulesResponse> {
    return this.request("DescribeFirewallRules", req, cb)
  }
}
