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
  ModifyInstanceResponse,
  DescribeInstanceInfoRequest,
  InstanceStateInfo,
  DescribeInstanceStateRequest,
  ChargeProperties,
  DestroyInstanceByApiRequest,
  InstanceNodeGroup,
  CBSSpec,
  ModifyInstanceRequest,
  DescribeSimpleInstancesResponse,
  ResourceInfo,
  InstanceInfo,
  DescribeInstancesResponse,
  ResourceSpecNew,
  DescribeInstancesRequest,
  CreateInstanceByApiResponse,
  SimpleInstanceInfo,
  DescribeInstanceResponse,
  DestroyInstanceByApiResponse,
  CBSSpecInfo,
  CreateInstanceByApiRequest,
  SearchTags,
  DescribeInstanceRequest,
  Tag,
  DescribeInstanceStateResponse,
  InstanceSimpleInfoNew,
  DescribeSimpleInstancesRequest,
  DescribeInstanceInfoResponse,
} from "./cdwpg_models"

/**
 * cdwpg client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cdwpg.tencentcloudapi.com", "2020-12-30", clientConfig)
  }

  /**
   * 获取云原生实例列表
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 集群详情页中显示集群状态、流程进度等
   */
  async DescribeInstanceState(
    req: DescribeInstanceStateRequest,
    cb?: (error: string, rep: DescribeInstanceStateResponse) => void
  ): Promise<DescribeInstanceStateResponse> {
    return this.request("DescribeInstanceState", req, cb)
  }

  /**
   * 销毁集群
   */
  async DestroyInstanceByApi(
    req: DestroyInstanceByApiRequest,
    cb?: (error: string, rep: DestroyInstanceByApiResponse) => void
  ): Promise<DestroyInstanceByApiResponse> {
    return this.request("DestroyInstanceByApi", req, cb)
  }

  /**
   * 根据实例ID查询某个实例的具体信息
   */
  async DescribeInstance(
    req: DescribeInstanceRequest,
    cb?: (error: string, rep: DescribeInstanceResponse) => void
  ): Promise<DescribeInstanceResponse> {
    return this.request("DescribeInstance", req, cb)
  }

  /**
   * 获取集群信息
   */
  async DescribeInstanceInfo(
    req: DescribeInstanceInfoRequest,
    cb?: (error: string, rep: DescribeInstanceInfoResponse) => void
  ): Promise<DescribeInstanceInfoResponse> {
    return this.request("DescribeInstanceInfo", req, cb)
  }

  /**
   * 创建集群
   */
  async CreateInstanceByApi(
    req: CreateInstanceByApiRequest,
    cb?: (error: string, rep: CreateInstanceByApiResponse) => void
  ): Promise<CreateInstanceByApiResponse> {
    return this.request("CreateInstanceByApi", req, cb)
  }

  /**
   * 获取集群实例列表
   */
  async DescribeSimpleInstances(
    req: DescribeSimpleInstancesRequest,
    cb?: (error: string, rep: DescribeSimpleInstancesResponse) => void
  ): Promise<DescribeSimpleInstancesResponse> {
    return this.request("DescribeSimpleInstances", req, cb)
  }

  /**
   * 修改实例信息，目前为实例名称
   */
  async ModifyInstance(
    req: ModifyInstanceRequest,
    cb?: (error: string, rep: ModifyInstanceResponse) => void
  ): Promise<ModifyInstanceResponse> {
    return this.request("ModifyInstance", req, cb)
  }
}
