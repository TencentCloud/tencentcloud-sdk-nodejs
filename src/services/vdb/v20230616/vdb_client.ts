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
  Network,
  AssociateSecurityGroupsResponse,
  Outbound,
  DescribeDBSecurityGroupsRequest,
  DescribeInstancesRequest,
  AssociateSecurityGroupsRequest,
  DisassociateSecurityGroupsRequest,
  DescribeInstanceNodesResponse,
  SecurityGroup,
  ModifyDBInstanceSecurityGroupsResponse,
  Inbound,
  Tag,
  DescribeDBSecurityGroupsResponse,
  DisassociateSecurityGroupsResponse,
  DescribeInstanceNodesRequest,
  InstanceInfo,
  NodeInfo,
  DescribeInstancesResponse,
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
   * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
   */
  async DescribeDBSecurityGroups(
    req: DescribeDBSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void
  ): Promise<DescribeDBSecurityGroupsResponse> {
    return this.request("DescribeDBSecurityGroups", req, cb)
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
   * 实例节点列表
   */
  async DescribeInstanceNodes(
    req: DescribeInstanceNodesRequest,
    cb?: (error: string, rep: DescribeInstanceNodesResponse) => void
  ): Promise<DescribeInstanceNodesResponse> {
    return this.request("DescribeInstanceNodes", req, cb)
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
}
