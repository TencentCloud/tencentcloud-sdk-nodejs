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
  DescribeSREInstancesRequest,
  ManageConfigRequest,
  SREInstance,
  DescribeSREInstanceAccessAddressResponse,
  DescribeConfigRequest,
  DescribeSREInstancesResponse,
  DescribeConfigResponse,
  Filter,
  EnvInfo,
  DescribeSREInstanceAccessAddressRequest,
  VpcInfo,
  ManageConfigResponse,
} from "./tse_models"

/**
 * tse client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tse.tencentcloudapi.com", "2020-12-07", clientConfig)
  }

  /**
   * 用于查询微服务引擎实例列表
   */
  async DescribeSREInstances(
    req: DescribeSREInstancesRequest,
    cb?: (error: string, rep: DescribeSREInstancesResponse) => void
  ): Promise<DescribeSREInstancesResponse> {
    return this.request("DescribeSREInstances", req, cb)
  }

  /**
   * 管理配置
   */
  async ManageConfig(
    req: ManageConfigRequest,
    cb?: (error: string, rep: ManageConfigResponse) => void
  ): Promise<ManageConfigResponse> {
    return this.request("ManageConfig", req, cb)
  }

  /**
   * 查询微服务注册引擎实例访问地址
   */
  async DescribeSREInstanceAccessAddress(
    req: DescribeSREInstanceAccessAddressRequest,
    cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void
  ): Promise<DescribeSREInstanceAccessAddressResponse> {
    return this.request("DescribeSREInstanceAccessAddress", req, cb)
  }

  /**
   * 查看配置项
   */
  async DescribeConfig(
    req: DescribeConfigRequest,
    cb?: (error: string, rep: DescribeConfigResponse) => void
  ): Promise<DescribeConfigResponse> {
    return this.request("DescribeConfig", req, cb)
  }
}
