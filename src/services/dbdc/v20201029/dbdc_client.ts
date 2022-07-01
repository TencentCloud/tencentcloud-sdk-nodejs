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
  InstanceDetail,
  DescribeInstanceDetailResponse,
  DescribeInstanceDetail,
  DescribeDBInstancesRequest,
  DescribeInstanceDetailRequest,
  HostDetail,
  InstanceDeviceInfo,
  DescribeInstancesRequest,
  DeviceInfo,
  DBInstanceDetail,
  ModifyInstanceNameResponse,
  InstanceExpand,
  DescribeHostListResponse,
  DescribeInstanceListResponse,
  DescribeDBInstancesResponse,
  DescribeHostListRequest,
  DescribeInstancesResponse,
  DescribeInstanceListRequest,
  ModifyInstanceNameRequest,
} from "./dbdc_models"

/**
 * dbdc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dbdc.tencentcloudapi.com", "2020-10-29", clientConfig)
  }

  /**
   * 本接口用于查询独享集群实例列表
   */
  async DescribeInstanceList(
    req: DescribeInstanceListRequest,
    cb?: (error: string, rep: DescribeInstanceListResponse) => void
  ): Promise<DescribeInstanceListResponse> {
    return this.request("DescribeInstanceList", req, cb)
  }

  /**
   * 根据不同地域不同用户，获取集群列表信息
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 本接口用于查询主机列表
   */
  async DescribeHostList(
    req: DescribeHostListRequest,
    cb?: (error: string, rep: DescribeHostListResponse) => void
  ): Promise<DescribeHostListResponse> {
    return this.request("DescribeHostList", req, cb)
  }

  /**
   * 本接口用于修改集群名称
   */
  async ModifyInstanceName(
    req: ModifyInstanceNameRequest,
    cb?: (error: string, rep: ModifyInstanceNameResponse) => void
  ): Promise<ModifyInstanceNameResponse> {
    return this.request("ModifyInstanceName", req, cb)
  }

  /**
   * 本接口用于查询独享集群详情
   */
  async DescribeInstanceDetail(
    req: DescribeInstanceDetailRequest,
    cb?: (error: string, rep: DescribeInstanceDetailResponse) => void
  ): Promise<DescribeInstanceDetailResponse> {
    return this.request("DescribeInstanceDetail", req, cb)
  }

  /**
   * 本接口用于查询独享集群内的DB实例列表
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
  }
}
