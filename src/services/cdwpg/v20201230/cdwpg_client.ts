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
  ConfigParams,
  ModifyInstanceResponse,
  DescribeInstanceInfoRequest,
  DescribeUserHbaConfigResponse,
  AccessInfo,
  DescribeUserHbaConfigRequest,
  ModifyDBParametersResponse,
  InstanceStateInfo,
  NormQueryItem,
  DescribeInstanceStateRequest,
  AccountInfo,
  DescribeAccountsRequest,
  ScaleOutInstanceResponse,
  DescribeInstanceNodesRequest,
  RestartInstanceResponse,
  ChargeProperties,
  DestroyInstanceByApiRequest,
  UpgradeItem,
  DescribeDBConfigHistoryResponse,
  ResourceSpecNew,
  InstanceNode,
  DescribeDBConfigHistoryRequest,
  ErrorLogDetail,
  DescribeDBParamsRequest,
  CBSSpec,
  DescribeInstanceNodesResponse,
  ModifyInstanceRequest,
  DescribeSimpleInstancesResponse,
  UpgradeInstanceRequest,
  DescribeSlowLogResponse,
  ModifyUserHbaResponse,
  NodeConfigParams,
  InstanceInfo,
  DescribeDBParamsResponse,
  ParamDetail,
  DescribeInstancesResponse,
  ConfigHistory,
  ResetAccountPasswordResponse,
  DiskSpecPlus,
  ResetAccountPasswordRequest,
  RestartInstanceRequest,
  DescribeUpgradeListRequest,
  ResourceInfo,
  DescribeInstancesRequest,
  UpgradeInstanceResponse,
  DescribeInstanceOperationsResponse,
  CreateInstanceByApiResponse,
  DescribeSlowLogRequest,
  DescribeUpgradeListResponse,
  ScaleOutInstanceRequest,
  DescribeAccountsResponse,
  SearchTags,
  Range,
  InstanceNodeGroup,
  DescribeInstanceResponse,
  ModifyDBParametersRequest,
  DescribeErrorLogResponse,
  ModifyUserHbaRequest,
  ScaleUpInstanceRequest,
  CNResourceSpec,
  DestroyInstanceByApiResponse,
  ParamItem,
  CBSSpecInfo,
  HbaConfig,
  SimpleInstanceInfo,
  CreateInstanceByApiRequest,
  DescribeInstanceOperationsRequest,
  DescribeInstanceRequest,
  SlowLogDetail,
  ValueRange,
  Tag,
  DescribeInstanceStateResponse,
  InstanceOperation,
  InstanceSimpleInfoNew,
  DescribeSimpleInstancesRequest,
  DescribeErrorLogRequest,
  ScaleUpInstanceResponse,
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
   * user_hba
   */
  async DescribeUserHbaConfig(
    req: DescribeUserHbaConfigRequest,
    cb?: (error: string, rep: DescribeUserHbaConfigResponse) => void
  ): Promise<DescribeUserHbaConfigResponse> {
    return this.request("DescribeUserHbaConfig", req, cb)
  }

  /**
   * 修改账号密码
   */
  async ResetAccountPassword(
    req: ResetAccountPasswordRequest,
    cb?: (error: string, rep: ResetAccountPasswordResponse) => void
  ): Promise<ResetAccountPasswordResponse> {
    return this.request("ResetAccountPassword", req, cb)
  }

  /**
   * 集群配置下发
   */
  async ModifyDBParameters(
    req: ModifyDBParametersRequest,
    cb?: (error: string, rep: ModifyDBParametersResponse) => void
  ): Promise<ModifyDBParametersResponse> {
    return this.request("ModifyDBParameters", req, cb)
  }

  /**
   * 水平扩容
   */
  async ScaleOutInstance(
    req: ScaleOutInstanceRequest,
    cb?: (error: string, rep: ScaleOutInstanceResponse) => void
  ): Promise<ScaleOutInstanceResponse> {
    return this.request("ScaleOutInstance", req, cb)
  }

  /**
   * 控制台垂直变配集群
   */
  async ScaleUpInstance(
    req: ScaleUpInstanceRequest,
    cb?: (error: string, rep: ScaleUpInstanceResponse) => void
  ): Promise<ScaleUpInstanceResponse> {
    return this.request("ScaleUpInstance", req, cb)
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
   * 获取集群信息
   */
  async DescribeInstanceInfo(
    req: DescribeInstanceInfoRequest,
    cb?: (error: string, rep: DescribeInstanceInfoResponse) => void
  ): Promise<DescribeInstanceInfoResponse> {
    return this.request("DescribeInstanceInfo", req, cb)
  }

  /**
   * 用户在控制台主动发起重启实例
   */
  async RestartInstance(
    req: RestartInstanceRequest,
    cb?: (error: string, rep: RestartInstanceResponse) => void
  ): Promise<RestartInstanceResponse> {
    return this.request("RestartInstance", req, cb)
  }

  /**
   * DescribeDBConfigHistory1
   */
  async DescribeDBConfigHistory(
    req: DescribeDBConfigHistoryRequest,
    cb?: (error: string, rep: DescribeDBConfigHistoryResponse) => void
  ): Promise<DescribeDBConfigHistoryResponse> {
    return this.request("DescribeDBConfigHistory", req, cb)
  }

  /**
   * 配置描述
   */
  async DescribeDBParams(
    req: DescribeDBParamsRequest,
    cb?: (error: string, rep: DescribeDBParamsResponse) => void
  ): Promise<DescribeDBParamsResponse> {
    return this.request("DescribeDBParams", req, cb)
  }

  /**
   * 在集群详情页面，拉取该集群的操作
   */
  async DescribeInstanceOperations(
    req: DescribeInstanceOperationsRequest,
    cb?: (error: string, rep: DescribeInstanceOperationsResponse) => void
  ): Promise<DescribeInstanceOperationsResponse> {
    return this.request("DescribeInstanceOperations", req, cb)
  }

  /**
   * 修改用户Hba配置
   */
  async ModifyUserHba(
    req: ModifyUserHbaRequest,
    cb?: (error: string, rep: ModifyUserHbaResponse) => void
  ): Promise<ModifyUserHbaResponse> {
    return this.request("ModifyUserHba", req, cb)
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
   * 节点list
   */
  async DescribeInstanceNodes(
    req: DescribeInstanceNodesRequest,
    cb?: (error: string, rep: DescribeInstanceNodesResponse) => void
  ): Promise<DescribeInstanceNodesResponse> {
    return this.request("DescribeInstanceNodes", req, cb)
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
   * 升级记录
   */
  async DescribeUpgradeList(
    req: DescribeUpgradeListRequest,
    cb?: (error: string, rep: DescribeUpgradeListResponse) => void
  ): Promise<DescribeUpgradeListResponse> {
    return this.request("DescribeUpgradeList", req, cb)
  }

  /**
   * 获取云原生实例对应的账号列表
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 在线升级
   */
  async UpgradeInstance(
    req: UpgradeInstanceRequest,
    cb?: (error: string, rep: UpgradeInstanceResponse) => void
  ): Promise<UpgradeInstanceResponse> {
    return this.request("UpgradeInstance", req, cb)
  }

  /**
   * 查询慢SQL日志
   */
  async DescribeSlowLog(
    req: DescribeSlowLogRequest,
    cb?: (error: string, rep: DescribeSlowLogResponse) => void
  ): Promise<DescribeSlowLogResponse> {
    return this.request("DescribeSlowLog", req, cb)
  }

  /**
   * 查询错误日志
   */
  async DescribeErrorLog(
    req: DescribeErrorLogRequest,
    cb?: (error: string, rep: DescribeErrorLogResponse) => void
  ): Promise<DescribeErrorLogResponse> {
    return this.request("DescribeErrorLog", req, cb)
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
