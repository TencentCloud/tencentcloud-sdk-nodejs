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
  DeleteCfsFileSystemResponse,
  AvailableZone,
  UpdateCfsRuleRequest,
  DescribeCfsFileSystemsRequest,
  DeleteMountTargetRequest,
  CreateCfsRuleRequest,
  PGroup,
  DescribeAvailableZoneInfoResponse,
  UpdateCfsFileSystemNameResponse,
  UpdateCfsFileSystemNameRequest,
  DescribeCfsPGroupsResponse,
  DescribeCfsFileSystemClientsResponse,
  DeleteMountTargetResponse,
  DescribeMountTargetsResponse,
  DeleteCfsRuleResponse,
  DeleteCfsRuleRequest,
  UpdateCfsPGroupRequest,
  MountInfo,
  UpdateCfsRuleResponse,
  FileSystemClient,
  DescribeCfsFileSystemsResponse,
  CreateCfsFileSystemResponse,
  FileSystemInfo,
  TagInfo,
  DescribeCfsPGroupsRequest,
  DescribeCfsFileSystemClientsRequest,
  CreateCfsPGroupRequest,
  DeleteCfsPGroupResponse,
  UpdateCfsFileSystemSizeLimitResponse,
  DescribeAvailableZoneInfoRequest,
  AvailableRegion,
  CreateCfsFileSystemRequest,
  DescribeMountTargetsRequest,
  CreateCfsPGroupResponse,
  SignUpCfsServiceRequest,
  DescribeCfsServiceStatusRequest,
  PGroupInfo,
  SignUpCfsServiceResponse,
  UpdateCfsFileSystemPGroupRequest,
  DescribeCfsServiceStatusResponse,
  CreateCfsRuleResponse,
  AvailableProtoStatus,
  DescribeCfsRulesRequest,
  PGroupRuleInfo,
  DeleteCfsPGroupRequest,
  AvailableType,
  UpdateCfsFileSystemSizeLimitRequest,
  DeleteCfsFileSystemRequest,
  UpdateCfsPGroupResponse,
  DescribeCfsRulesResponse,
  UpdateCfsFileSystemPGroupResponse,
} from "./cfs_models"

/**
 * cfs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cfs.tencentcloudapi.com", "2019-07-19", clientConfig)
  }

  /**
   * 用于添加新文件系统
   */
  async CreateCfsFileSystem(
    req: CreateCfsFileSystemRequest,
    cb?: (error: string, rep: CreateCfsFileSystemResponse) => void
  ): Promise<CreateCfsFileSystemResponse> {
    return this.request("CreateCfsFileSystem", req, cb)
  }

  /**
   * 本接口（DescribeCfsPGroups）用于查询权限组列表。
   */
  async DescribeCfsPGroups(
    req?: DescribeCfsPGroupsRequest,
    cb?: (error: string, rep: DescribeCfsPGroupsResponse) => void
  ): Promise<DescribeCfsPGroupsResponse> {
    return this.request("DescribeCfsPGroups", req, cb)
  }

  /**
   * 本接口（DescribeCfsRules）用于查询权限组规则列表。
   */
  async DescribeCfsRules(
    req: DescribeCfsRulesRequest,
    cb?: (error: string, rep: DescribeCfsRulesResponse) => void
  ): Promise<DescribeCfsRulesResponse> {
    return this.request("DescribeCfsRules", req, cb)
  }

  /**
   * 本接口（UpdateCfsFileSystemPGroup）用于更新文件系统所使用的权限组
   */
  async UpdateCfsFileSystemPGroup(
    req: UpdateCfsFileSystemPGroupRequest,
    cb?: (error: string, rep: UpdateCfsFileSystemPGroupResponse) => void
  ): Promise<UpdateCfsFileSystemPGroupResponse> {
    return this.request("UpdateCfsFileSystemPGroup", req, cb)
  }

  /**
   * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
   */
  async DescribeAvailableZoneInfo(
    req?: DescribeAvailableZoneInfoRequest,
    cb?: (error: string, rep: DescribeAvailableZoneInfoResponse) => void
  ): Promise<DescribeAvailableZoneInfoResponse> {
    return this.request("DescribeAvailableZoneInfo", req, cb)
  }

  /**
   * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
   */
  async UpdateCfsFileSystemName(
    req: UpdateCfsFileSystemNameRequest,
    cb?: (error: string, rep: UpdateCfsFileSystemNameResponse) => void
  ): Promise<UpdateCfsFileSystemNameResponse> {
    return this.request("UpdateCfsFileSystemName", req, cb)
  }

  /**
   * 用于删除文件系统
   */
  async DeleteCfsFileSystem(
    req: DeleteCfsFileSystemRequest,
    cb?: (error: string, rep: DeleteCfsFileSystemResponse) => void
  ): Promise<DeleteCfsFileSystemResponse> {
    return this.request("DeleteCfsFileSystem", req, cb)
  }

  /**
   * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
   */
  async UpdateCfsFileSystemSizeLimit(
    req: UpdateCfsFileSystemSizeLimitRequest,
    cb?: (error: string, rep: UpdateCfsFileSystemSizeLimitResponse) => void
  ): Promise<UpdateCfsFileSystemSizeLimitResponse> {
    return this.request("UpdateCfsFileSystemSizeLimit", req, cb)
  }

  /**
   * 本接口（CreateCfsPGroup）用于创建权限组
   */
  async CreateCfsPGroup(
    req: CreateCfsPGroupRequest,
    cb?: (error: string, rep: CreateCfsPGroupResponse) => void
  ): Promise<CreateCfsPGroupResponse> {
    return this.request("CreateCfsPGroup", req, cb)
  }

  /**
   * 本接口（UpdateCfsRule）用于更新权限规则。
   */
  async UpdateCfsRule(
    req: UpdateCfsRuleRequest,
    cb?: (error: string, rep: UpdateCfsRuleResponse) => void
  ): Promise<UpdateCfsRuleResponse> {
    return this.request("UpdateCfsRule", req, cb)
  }

  /**
   * 本接口（DescribeCfsServiceStatus）用于查询用户使用CFS的服务状态。
   */
  async DescribeCfsServiceStatus(
    req?: DescribeCfsServiceStatusRequest,
    cb?: (error: string, rep: DescribeCfsServiceStatusResponse) => void
  ): Promise<DescribeCfsServiceStatusResponse> {
    return this.request("DescribeCfsServiceStatus", req, cb)
  }

  /**
   * 本接口（DescribeCfsFileSystems）用于查询文件系统
   */
  async DescribeCfsFileSystems(
    req: DescribeCfsFileSystemsRequest,
    cb?: (error: string, rep: DescribeCfsFileSystemsResponse) => void
  ): Promise<DescribeCfsFileSystemsResponse> {
    return this.request("DescribeCfsFileSystems", req, cb)
  }

  /**
   * 本接口（SignUpCfsService）用于开通CFS服务。
   */
  async SignUpCfsService(
    req?: SignUpCfsServiceRequest,
    cb?: (error: string, rep: SignUpCfsServiceResponse) => void
  ): Promise<SignUpCfsServiceResponse> {
    return this.request("SignUpCfsService", req, cb)
  }

  /**
   * 本接口（CreateCfsRule）用于创建权限组规则。
   */
  async CreateCfsRule(
    req: CreateCfsRuleRequest,
    cb?: (error: string, rep: CreateCfsRuleResponse) => void
  ): Promise<CreateCfsRuleResponse> {
    return this.request("CreateCfsRule", req, cb)
  }

  /**
   * 本接口（DeleteCfsPGroup）用于删除权限组。
   */
  async DeleteCfsPGroup(
    req: DeleteCfsPGroupRequest,
    cb?: (error: string, rep: DeleteCfsPGroupResponse) => void
  ): Promise<DeleteCfsPGroupResponse> {
    return this.request("DeleteCfsPGroup", req, cb)
  }

  /**
   * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
   */
  async DescribeMountTargets(
    req: DescribeMountTargetsRequest,
    cb?: (error: string, rep: DescribeMountTargetsResponse) => void
  ): Promise<DescribeMountTargetsResponse> {
    return this.request("DescribeMountTargets", req, cb)
  }

  /**
   * 本接口（UpdateCfsPGroup）更新权限组信息。
   */
  async UpdateCfsPGroup(
    req: UpdateCfsPGroupRequest,
    cb?: (error: string, rep: UpdateCfsPGroupResponse) => void
  ): Promise<UpdateCfsPGroupResponse> {
    return this.request("UpdateCfsPGroup", req, cb)
  }

  /**
   * 本接口（DeleteCfsRule）用于删除权限组规则。
   */
  async DeleteCfsRule(
    req: DeleteCfsRuleRequest,
    cb?: (error: string, rep: DeleteCfsRuleResponse) => void
  ): Promise<DeleteCfsRuleResponse> {
    return this.request("DeleteCfsRule", req, cb)
  }

  /**
   * 查询挂载该文件系统的客户端。此功能需要客户端安装CFS监控插件。
   */
  async DescribeCfsFileSystemClients(
    req: DescribeCfsFileSystemClientsRequest,
    cb?: (error: string, rep: DescribeCfsFileSystemClientsResponse) => void
  ): Promise<DescribeCfsFileSystemClientsResponse> {
    return this.request("DescribeCfsFileSystemClients", req, cb)
  }

  /**
   * 本接口（DeleteMountTarget）用于删除挂载点
   */
  async DeleteMountTarget(
    req: DeleteMountTargetRequest,
    cb?: (error: string, rep: DeleteMountTargetResponse) => void
  ): Promise<DeleteMountTargetResponse> {
    return this.request("DeleteMountTarget", req, cb)
  }
}
