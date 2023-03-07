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
  NacosReplica,
  DescribeNacosReplicasRequest,
  UpdateEngineInternetAccessRequest,
  ApolloEnvParam,
  UpdateEngineInternetAccessResponse,
  KVPair,
  DeleteEngineResponse,
  CreateEngineResponse,
  DescribeZookeeperReplicasRequest,
  DeleteEngineRequest,
  DescribeCloudNativeAPIGatewayNodesRequest,
  DescribeCloudNativeAPIGatewayNodesResult,
  ZookeeperReplica,
  EngineRegionInfo,
  DescribeNacosServerInterfacesRequest,
  SREInstance,
  DescribeSREInstanceAccessAddressResponse,
  DescribeSREInstancesResponse,
  ZookeeperServerInterface,
  ServiceGovernanceInfo,
  CloudNativeAPIGatewayNode,
  DescribeNacosReplicasResponse,
  DescribeZookeeperServerInterfacesResponse,
  BoundK8SInfo,
  DescribeSREInstancesRequest,
  DescribeCloudNativeAPIGatewayNodesResponse,
  DescribeZookeeperReplicasResponse,
  VpcInfo,
  EngineAdmin,
  PolarisLimiterAddress,
  CreateEngineRequest,
  DescribeInstanceRegionInfo,
  DescribeSREInstanceAccessAddressRequest,
  DescribeNacosServerInterfacesResponse,
  Filter,
  NacosServerInterface,
  DescribeZookeeperServerInterfacesRequest,
  EnvInfo,
  EnvAddressInfo,
  InstanceTagInfo,
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
   * 查询Zookeeper类型注册引擎实例副本信息
   */
  async DescribeZookeeperReplicas(
    req: DescribeZookeeperReplicasRequest,
    cb?: (error: string, rep: DescribeZookeeperReplicasResponse) => void
  ): Promise<DescribeZookeeperReplicasResponse> {
    return this.request("DescribeZookeeperReplicas", req, cb)
  }

  /**
   * 删除引擎实例
   */
  async DeleteEngine(
    req: DeleteEngineRequest,
    cb?: (error: string, rep: DeleteEngineResponse) => void
  ): Promise<DeleteEngineResponse> {
    return this.request("DeleteEngine", req, cb)
  }

  /**
   * 用于查询引擎实例列表
   */
  async DescribeSREInstances(
    req: DescribeSREInstancesRequest,
    cb?: (error: string, rep: DescribeSREInstancesResponse) => void
  ): Promise<DescribeSREInstancesResponse> {
    return this.request("DescribeSREInstances", req, cb)
  }

  /**
   * 查询Nacos类型引擎实例副本信息
   */
  async DescribeNacosReplicas(
    req: DescribeNacosReplicasRequest,
    cb?: (error: string, rep: DescribeNacosReplicasResponse) => void
  ): Promise<DescribeNacosReplicasResponse> {
    return this.request("DescribeNacosReplicas", req, cb)
  }

  /**
   * 获取云原生网关节点列表
   */
  async DescribeCloudNativeAPIGatewayNodes(
    req: DescribeCloudNativeAPIGatewayNodesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayNodesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayNodesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayNodes", req, cb)
  }

  /**
   * 查询zookeeper服务接口列表
   */
  async DescribeZookeeperServerInterfaces(
    req: DescribeZookeeperServerInterfacesRequest,
    cb?: (error: string, rep: DescribeZookeeperServerInterfacesResponse) => void
  ): Promise<DescribeZookeeperServerInterfacesResponse> {
    return this.request("DescribeZookeeperServerInterfaces", req, cb)
  }

  /**
   * 修改引擎公网访问配置
   */
  async UpdateEngineInternetAccess(
    req: UpdateEngineInternetAccessRequest,
    cb?: (error: string, rep: UpdateEngineInternetAccessResponse) => void
  ): Promise<UpdateEngineInternetAccessResponse> {
    return this.request("UpdateEngineInternetAccess", req, cb)
  }

  /**
   * 创建引擎实例
   */
  async CreateEngine(
    req: CreateEngineRequest,
    cb?: (error: string, rep: CreateEngineResponse) => void
  ): Promise<CreateEngineResponse> {
    return this.request("CreateEngine", req, cb)
  }

  /**
   * 查询nacos服务接口列表
   */
  async DescribeNacosServerInterfaces(
    req: DescribeNacosServerInterfacesRequest,
    cb?: (error: string, rep: DescribeNacosServerInterfacesResponse) => void
  ): Promise<DescribeNacosServerInterfacesResponse> {
    return this.request("DescribeNacosServerInterfaces", req, cb)
  }

  /**
   * 查询引擎实例访问地址
   */
  async DescribeSREInstanceAccessAddress(
    req: DescribeSREInstanceAccessAddressRequest,
    cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void
  ): Promise<DescribeSREInstanceAccessAddressResponse> {
    return this.request("DescribeSREInstanceAccessAddress", req, cb)
  }
}
