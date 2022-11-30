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
  DescribeInstanceShardsRequest,
  ModifyClusterConfigsRequest,
  CreateBackUpScheduleRequest,
  DescribeInstanceShardsResponse,
  OpenBackUpRequest,
  ModifyClusterConfigsResponse,
  DiskSpec,
  BackupTableContent,
  OpenBackUpResponse,
  ModifyUserNewPrivilegeRequest,
  DescribeSpecRequest,
  ConfigSubmitContext,
  ActionAlterCkUserResponse,
  DescribeCkSqlApisRequest,
  ActionAlterCkUserRequest,
  CkUserAlterInfo,
  CreateBackUpScheduleResponse,
  ResourceSpec,
  DescribeSpecResponse,
  DescribeCkSqlApisResponse,
  ModifyUserNewPrivilegeResponse,
} from "./cdwch_models"

/**
 * cdwch client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cdwch.tencentcloudapi.com", "2020-09-15", clientConfig)
  }

  /**
   * 创建或者修改备份策略
   */
  async CreateBackUpSchedule(
    req: CreateBackUpScheduleRequest,
    cb?: (error: string, rep: CreateBackUpScheduleResponse) => void
  ): Promise<CreateBackUpScheduleResponse> {
    return this.request("CreateBackUpSchedule", req, cb)
  }

  /**
   * 针对驱动sql命令查询ck集群接口
   */
  async DescribeCkSqlApis(
    req: DescribeCkSqlApisRequest,
    cb?: (error: string, rep: DescribeCkSqlApisResponse) => void
  ): Promise<DescribeCkSqlApisResponse> {
    return this.request("DescribeCkSqlApis", req, cb)
  }

  /**
   * 新增和修改用户接口
   */
  async ActionAlterCkUser(
    req: ActionAlterCkUserRequest,
    cb?: (error: string, rep: ActionAlterCkUserResponse) => void
  ): Promise<ActionAlterCkUserResponse> {
    return this.request("ActionAlterCkUser", req, cb)
  }

  /**
   * 开启或者关闭策略
   */
  async OpenBackUp(
    req: OpenBackUpRequest,
    cb?: (error: string, rep: OpenBackUpResponse) => void
  ): Promise<OpenBackUpResponse> {
    return this.request("OpenBackUp", req, cb)
  }

  /**
   * 在集群配置页面修改集群配置文件接口，xml模式
   */
  async ModifyClusterConfigs(
    req: ModifyClusterConfigsRequest,
    cb?: (error: string, rep: ModifyClusterConfigsResponse) => void
  ): Promise<ModifyClusterConfigsResponse> {
    return this.request("ModifyClusterConfigs", req, cb)
  }

  /**
   * 购买页拉取集群的数据节点和zookeeper节点的规格列表
   */
  async DescribeSpec(
    req: DescribeSpecRequest,
    cb?: (error: string, rep: DescribeSpecResponse) => void
  ): Promise<DescribeSpecResponse> {
    return this.request("DescribeSpec", req, cb)
  }

  /**
   * 针对ck账号的权限做管控（新版）
   */
  async ModifyUserNewPrivilege(
    req?: ModifyUserNewPrivilegeRequest,
    cb?: (error: string, rep: ModifyUserNewPrivilegeResponse) => void
  ): Promise<ModifyUserNewPrivilegeResponse> {
    return this.request("ModifyUserNewPrivilege", req, cb)
  }

  /**
   * 获取实例shard信息列表
   */
  async DescribeInstanceShards(
    req: DescribeInstanceShardsRequest,
    cb?: (error: string, rep: DescribeInstanceShardsResponse) => void
  ): Promise<DescribeInstanceShardsResponse> {
    return this.request("DescribeInstanceShards", req, cb)
  }
}
