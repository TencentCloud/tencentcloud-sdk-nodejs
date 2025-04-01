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
  Outbound,
  Network,
  RecoverInstanceRequest,
  NodeInfo,
  SecurityGroup,
  ModifyDBInstanceSecurityGroupsResponse,
  ScaleOutInstanceResponse,
  IsolateInstanceRequest,
  DescribeInstanceNodesRequest,
  CreateInstanceResponse,
  DestroyInstancesRequest,
  DescribeDBSecurityGroupsRequest,
  Inbound,
  AssociateSecurityGroupsRequest,
  ModifyInstanceMaintenanceWindowResponse,
  DescribeInstanceNodesResponse,
  Tag,
  CreateInstanceRequest,
  DescribeDBSecurityGroupsResponse,
  InstanceInfo,
  DescribeInstancesResponse,
  AssociateSecurityGroupsResponse,
  DescribeInstancesRequest,
  DisassociateSecurityGroupsRequest,
  IsolateInstanceResponse,
  DescribeInstanceMaintenanceWindowRequest,
  DescribeInstanceMaintenanceWindowResponse,
  ScaleOutInstanceRequest,
  DestroyInstancesResponse,
  ScaleUpInstanceRequest,
  CreateInstancesComponent,
  RecoverInstanceResponse,
  ModifyInstanceMaintenanceWindowRequest,
  DisassociateSecurityGroupsResponse,
  ScaleUpInstanceResponse,
  ModifyDBInstanceSecurityGroupsRequest,
} from "./vdb_models"

/**
 * vdb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vdb.tencentcloudapi.com", "2023-06-16", clientConfig)
  }

  /**
   * 本接口（DescribeInstanceMaintenanceWindow）用于查看实例维护时间窗。
   */
  async DescribeInstanceMaintenanceWindow(
    req: DescribeInstanceMaintenanceWindowRequest,
    cb?: (error: string, rep: DescribeInstanceMaintenanceWindowResponse) => void
  ): Promise<DescribeInstanceMaintenanceWindowResponse> {
    return this.request("DescribeInstanceMaintenanceWindow", req, cb)
  }

  /**
   * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定多个指定实例。
   */
  async AssociateSecurityGroups(
    req: AssociateSecurityGroupsRequest,
    cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void
  ): Promise<AssociateSecurityGroupsResponse> {
    return this.request("AssociateSecurityGroups", req, cb)
  }

  /**
   * 查询实例列表
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 本接口（ModifyInstanceMaintenanceWindow）用于修改实例维护时间窗范围。
   */
  async ModifyInstanceMaintenanceWindow(
    req: ModifyInstanceMaintenanceWindowRequest,
    cb?: (error: string, rep: ModifyInstanceMaintenanceWindowResponse) => void
  ): Promise<ModifyInstanceMaintenanceWindowResponse> {
    return this.request("ModifyInstanceMaintenanceWindow", req, cb)
  }

  /**
   * 本接口（CreateInstance）用于创建向量数据库实例。
   */
  async CreateInstance(
    req: CreateInstanceRequest,
    cb?: (error: string, rep: CreateInstanceResponse) => void
  ): Promise<CreateInstanceResponse> {
    return this.request("CreateInstance", req, cb)
  }

  /**
   * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
   */
  async ModifyDBInstanceSecurityGroups(
    req: ModifyDBInstanceSecurityGroupsRequest,
    cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void
  ): Promise<ModifyDBInstanceSecurityGroupsResponse> {
    return this.request("ModifyDBInstanceSecurityGroups", req, cb)
  }

  /**
   * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
   */
  async DescribeDBSecurityGroups(
    req: DescribeDBSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void
  ): Promise<DescribeDBSecurityGroupsResponse> {
    return this.request("DescribeDBSecurityGroups", req, cb)
  }

  /**
   * 查询实例pod列表
   */
  async DescribeInstanceNodes(
    req: DescribeInstanceNodesRequest,
    cb?: (error: string, rep: DescribeInstanceNodesResponse) => void
  ): Promise<DescribeInstanceNodesResponse> {
    return this.request("DescribeInstanceNodes", req, cb)
  }

  /**
   * 本接口（IsolateInstance）用于隔离实例于回收站，在回收站保护时长内可恢复实例。
   */
  async IsolateInstance(
    req: IsolateInstanceRequest,
    cb?: (error: string, rep: IsolateInstanceResponse) => void
  ): Promise<IsolateInstanceResponse> {
    return this.request("IsolateInstance", req, cb)
  }

  /**
   * 本接口（DestroyInstances）用于销毁实例。
   */
  async DestroyInstances(
    req: DestroyInstancesRequest,
    cb?: (error: string, rep: DestroyInstancesResponse) => void
  ): Promise<DestroyInstancesResponse> {
    return this.request("DestroyInstances", req, cb)
  }

  /**
   * 本接口（ScaleUpInstance）用于升级节点配置规格。
   */
  async ScaleUpInstance(
    req: ScaleUpInstanceRequest,
    cb?: (error: string, rep: ScaleUpInstanceResponse) => void
  ): Promise<ScaleUpInstanceResponse> {
    return this.request("ScaleUpInstance", req, cb)
  }

  /**
   * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
   */
  async DisassociateSecurityGroups(
    req: DisassociateSecurityGroupsRequest,
    cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void
  ): Promise<DisassociateSecurityGroupsResponse> {
    return this.request("DisassociateSecurityGroups", req, cb)
  }

  /**
   * 本接口（ScaleOutInstance）用于水平扩容节点数量。
   */
  async ScaleOutInstance(
    req: ScaleOutInstanceRequest,
    cb?: (error: string, rep: ScaleOutInstanceResponse) => void
  ): Promise<ScaleOutInstanceResponse> {
    return this.request("ScaleOutInstance", req, cb)
  }

  /**
   * 本接口（RecoverInstance）用于恢复在回收站隔离的实例。
   */
  async RecoverInstance(
    req: RecoverInstanceRequest,
    cb?: (error: string, rep: RecoverInstanceResponse) => void
  ): Promise<RecoverInstanceResponse> {
    return this.request("RecoverInstance", req, cb)
  }
}
