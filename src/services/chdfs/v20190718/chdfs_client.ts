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
  CreateFileSystemResponse,
  AccessRule,
  DescribeFileSystemResponse,
  AccessGroup,
  ModifyFileSystemResponse,
  ModifyFileSystemRequest,
  DescribeLifeCycleRulesRequest,
  ModifyAccessGroupRequest,
  DescribeFileSystemsResponse,
  DescribeFileSystemRequest,
  CreateMountPointRequest,
  DeleteAccessGroupRequest,
  ModifyLifeCycleRulesRequest,
  CreateRestoreTasksResponse,
  DeleteFileSystemRequest,
  DescribeMountPointsRequest,
  DescribeMountPointRequest,
  DescribeAccessGroupsRequest,
  DeleteAccessGroupResponse,
  ModifyLifeCycleRulesResponse,
  DeleteMountPointResponse,
  CreateMountPointResponse,
  CreateFileSystemRequest,
  ModifyResourceTagsRequest,
  DescribeResourceTagsResponse,
  DescribeAccessGroupsResponse,
  DeleteMountPointRequest,
  DeleteFileSystemResponse,
  CreateLifeCycleRulesRequest,
  Filter,
  CreateAccessGroupResponse,
  DeleteLifeCycleRulesRequest,
  FileSystem,
  RestoreTask,
  ModifyMountPointRequest,
  DeleteLifeCycleRulesResponse,
  CreateRestoreTasksRequest,
  Transition,
  DescribeRestoreTasksResponse,
  DescribeLifeCycleRulesResponse,
  CreateAccessRulesResponse,
  DeleteAccessRulesRequest,
  DeleteAccessRulesResponse,
  DescribeFileSystemsRequest,
  DescribeResourceTagsRequest,
  ModifyResourceTagsResponse,
  LifeCycleRule,
  CreateAccessRulesRequest,
  DescribeAccessRulesResponse,
  MountPoint,
  DescribeMountPointsResponse,
  DescribeRestoreTasksRequest,
  DescribeAccessRulesRequest,
  ModifyAccessRulesResponse,
  CreateLifeCycleRulesResponse,
  ModifyAccessGroupResponse,
  Tag,
  ModifyMountPointResponse,
  ModifyAccessRulesRequest,
  CreateAccessGroupRequest,
  DescribeMountPointResponse,
} from "./chdfs_models"

/**
 * chdfs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("chdfs.tencentcloudapi.com", "2019-07-18", clientConfig)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

批量创建回热任务，回热任务ID、状态和创建时间无需填写。
     */
  async CreateRestoreTasks(
    req: CreateRestoreTasksRequest,
    cb?: (error: string, rep: CreateRestoreTasksResponse) => void
  ): Promise<CreateRestoreTasksResponse> {
    return this.request("CreateRestoreTasks", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

批量创建生命周期规则，生命周期规则ID和创建时间无需填写。
     */
  async CreateLifeCycleRules(
    req: CreateLifeCycleRulesRequest,
    cb?: (error: string, rep: CreateLifeCycleRulesResponse) => void
  ): Promise<CreateLifeCycleRulesResponse> {
    return this.request("CreateLifeCycleRules", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

修改挂载点属性。
     */
  async ModifyMountPoint(
    req: ModifyMountPointRequest,
    cb?: (error: string, rep: ModifyMountPointResponse) => void
  ): Promise<ModifyMountPointResponse> {
    return this.request("ModifyMountPoint", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

批量修改权限规则属性，需要指定权限规则ID，支持修改权限规则地址、访问模式和优先级。
     */
  async ModifyAccessRules(
    req: ModifyAccessRulesRequest,
    cb?: (error: string, rep: ModifyAccessRulesResponse) => void
  ): Promise<ModifyAccessRulesResponse> {
    return this.request("ModifyAccessRules", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

删除挂载点。
     */
  async DeleteMountPoint(
    req: DeleteMountPointRequest,
    cb?: (error: string, rep: DeleteMountPointResponse) => void
  ): Promise<DeleteMountPointResponse> {
    return this.request("DeleteMountPoint", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

查看挂载点详细信息。
     */
  async DescribeMountPoint(
    req: DescribeMountPointRequest,
    cb?: (error: string, rep: DescribeMountPointResponse) => void
  ): Promise<DescribeMountPointResponse> {
    return this.request("DescribeMountPoint", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

批量删除权限规则。
     */
  async DeleteAccessRules(
    req: DeleteAccessRulesRequest,
    cb?: (error: string, rep: DeleteAccessRulesResponse) => void
  ): Promise<DeleteAccessRulesResponse> {
    return this.request("DeleteAccessRules", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

修改权限组属性。
     */
  async ModifyAccessGroup(
    req: ModifyAccessGroupRequest,
    cb?: (error: string, rep: ModifyAccessGroupResponse) => void
  ): Promise<ModifyAccessGroupResponse> {
    return this.request("ModifyAccessGroup", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

创建文件系统挂载点，仅限于创建成功的文件系统。
     */
  async CreateMountPoint(
    req: CreateMountPointRequest,
    cb?: (error: string, rep: CreateMountPointResponse) => void
  ): Promise<CreateMountPointResponse> {
    return this.request("CreateMountPoint", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

批量修改生命周期规则属性，需要指定生命周期规则ID，支持修改生命周期规则名称、路径、转换列表和状态。
     */
  async ModifyLifeCycleRules(
    req: ModifyLifeCycleRulesRequest,
    cb?: (error: string, rep: ModifyLifeCycleRulesResponse) => void
  ): Promise<ModifyLifeCycleRulesResponse> {
    return this.request("ModifyLifeCycleRules", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

查看权限组列表。
     */
  async DescribeAccessGroups(
    req: DescribeAccessGroupsRequest,
    cb?: (error: string, rep: DescribeAccessGroupsResponse) => void
  ): Promise<DescribeAccessGroupsResponse> {
    return this.request("DescribeAccessGroups", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

删除文件系统，不允许删除非空文件系统。
     */
  async DeleteFileSystem(
    req: DeleteFileSystemRequest,
    cb?: (error: string, rep: DeleteFileSystemResponse) => void
  ): Promise<DeleteFileSystemResponse> {
    return this.request("DeleteFileSystem", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

查看文件系统详细信息。
     */
  async DescribeFileSystem(
    req: DescribeFileSystemRequest,
    cb?: (error: string, rep: DescribeFileSystemResponse) => void
  ): Promise<DescribeFileSystemResponse> {
    return this.request("DescribeFileSystem", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

创建文件系统（异步）。
     */
  async CreateFileSystem(
    req: CreateFileSystemRequest,
    cb?: (error: string, rep: CreateFileSystemResponse) => void
  ): Promise<CreateFileSystemResponse> {
    return this.request("CreateFileSystem", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

通过权限组ID查看权限规则列表。
     */
  async DescribeAccessRules(
    req: DescribeAccessRulesRequest,
    cb?: (error: string, rep: DescribeAccessRulesResponse) => void
  ): Promise<DescribeAccessRulesResponse> {
    return this.request("DescribeAccessRules", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

批量删除生命周期规则。
     */
  async DeleteLifeCycleRules(
    req: DeleteLifeCycleRulesRequest,
    cb?: (error: string, rep: DeleteLifeCycleRulesResponse) => void
  ): Promise<DeleteLifeCycleRulesResponse> {
    return this.request("DeleteLifeCycleRules", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

批量创建权限规则，权限规则ID和创建时间无需填写。
     */
  async CreateAccessRules(
    req: CreateAccessRulesRequest,
    cb?: (error: string, rep: CreateAccessRulesResponse) => void
  ): Promise<CreateAccessRulesResponse> {
    return this.request("CreateAccessRules", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

修改文件系统属性，仅限于创建成功的文件系统。
     */
  async ModifyFileSystem(
    req: ModifyFileSystemRequest,
    cb?: (error: string, rep: ModifyFileSystemResponse) => void
  ): Promise<ModifyFileSystemResponse> {
    return this.request("ModifyFileSystem", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

查看文件系统列表。
     */
  async DescribeFileSystems(
    req: DescribeFileSystemsRequest,
    cb?: (error: string, rep: DescribeFileSystemsResponse) => void
  ): Promise<DescribeFileSystemsResponse> {
    return this.request("DescribeFileSystems", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

通过文件系统ID或者权限组ID查看挂载点列表。
     */
  async DescribeMountPoints(
    req: DescribeMountPointsRequest,
    cb?: (error: string, rep: DescribeMountPointsResponse) => void
  ): Promise<DescribeMountPointsResponse> {
    return this.request("DescribeMountPoints", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

通过文件系统ID查看资源标签列表。
     */
  async DescribeResourceTags(
    req: DescribeResourceTagsRequest,
    cb?: (error: string, rep: DescribeResourceTagsResponse) => void
  ): Promise<DescribeResourceTagsResponse> {
    return this.request("DescribeResourceTags", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

通过文件系统ID查看回热任务列表。
     */
  async DescribeRestoreTasks(
    req: DescribeRestoreTasksRequest,
    cb?: (error: string, rep: DescribeRestoreTasksResponse) => void
  ): Promise<DescribeRestoreTasksResponse> {
    return this.request("DescribeRestoreTasks", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

修改资源标签列表，全量覆盖。
     */
  async ModifyResourceTags(
    req: ModifyResourceTagsRequest,
    cb?: (error: string, rep: ModifyResourceTagsResponse) => void
  ): Promise<ModifyResourceTagsResponse> {
    return this.request("ModifyResourceTags", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

通过文件系统ID查看生命周期规则列表。
     */
  async DescribeLifeCycleRules(
    req: DescribeLifeCycleRulesRequest,
    cb?: (error: string, rep: DescribeLifeCycleRulesResponse) => void
  ): Promise<DescribeLifeCycleRulesResponse> {
    return this.request("DescribeLifeCycleRules", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

删除权限组。
     */
  async DeleteAccessGroup(
    req: DeleteAccessGroupRequest,
    cb?: (error: string, rep: DeleteAccessGroupResponse) => void
  ): Promise<DeleteAccessGroupResponse> {
    return this.request("DeleteAccessGroup", req, cb)
  }

  /**
     * 云API旧版本2019-07-18预下线，所有功能由新版本2020-11-12替代，目前云API主要用作控制台使用。

创建权限组。
     */
  async CreateAccessGroup(
    req: CreateAccessGroupRequest,
    cb?: (error: string, rep: CreateAccessGroupResponse) => void
  ): Promise<CreateAccessGroupResponse> {
    return this.request("CreateAccessGroup", req, cb)
  }
}
