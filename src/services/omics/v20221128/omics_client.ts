/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  DeleteVolumeDataRequest,
  RetryRunsResponse,
  EnvironmentRuntimeConfig,
  RebootHPCNodesRequest,
  CreateVolumeRequest,
  LimitRange,
  DescribeTablesResponse,
  RetryRunsRequest,
  HPCDisk,
  ClusterOption,
  TerminateRunGroupResponse,
  DescribeVolumesResponse,
  GitInfo,
  ApplicationVersion,
  RunGroup,
  Project,
  DescribeApplicationVersionsRequest,
  InputTemplate,
  ImportCommonApplicationResponse,
  GetRunStatusRequest,
  HPCInstance,
  CreateEnvironmentResponse,
  ImportTableFileResponse,
  ImportTableFileRequest,
  RunStatusCount,
  DescribeApplicationsResponse,
  DescribeEnvironmentsRequest,
  RunGroupNotification,
  CreateEnvironmentRequest,
  DescribeInputTemplatesRequest,
  Application,
  NextflowConfig,
  Run,
  NotificationType,
  DescribeTablesRowsRequest,
  Tag,
  ResourceQuota,
  CacheInfo,
  HPCInternetInfo,
  GetRunCallsResponse,
  GetRunMetadataFileRequest,
  ToolRepoTag,
  TableRow,
  StorageOption,
  RunOption,
  DescribeHPCNodesResponse,
  SecurityGroupOption,
  ExecutionTime,
  Environment,
  GetRunMetadataFileResponse,
  DeleteEnvironmentResponse,
  GetRunCallsRequest,
  RunWorkflowRequest,
  DescribeRunsRequest,
  RebootHPCNodesResponse,
  TableColumn,
  DescribeHPCNodesRequest,
  DescribeEnvironmentsResponse,
  RunApplicationResponse,
  DescribeInputTemplatesResponse,
  DescribeHPCClustersResponse,
  DeleteEnvironmentRequest,
  DatabaseOption,
  DescribePublicApplicationsRequest,
  Filter,
  PublicApplication,
  VolumeInfo,
  HPCCluster,
  VolumeAutoScaleUpRule,
  TerminateRunGroupRequest,
  GetRunStatusResponse,
  DescribeTablesRequest,
  DeleteVolumeDataResponse,
  DescribeVolumesRequest,
  RunWorkflowResponse,
  HPCGPUInfo,
  RunGroupTimeoutNotification,
  GetInputTemplateFileResponse,
  DescribeHPCClustersRequest,
  DescribeApplicationVersionsResponse,
  DescribeTablesRowsResponse,
  DescribeProjectsRequest,
  CreateVolumeResponse,
  DeleteVolumeRequest,
  DescribeProjectsResponse,
  Volume,
  ModifyVolumeResponse,
  DescribeApplicationsRequest,
  CosFileInfo,
  VPCOption,
  GetInputTemplateFileRequest,
  DeleteVolumeResponse,
  RunApplicationRequest,
  RunConstraints,
  CromwellConfig,
  ResourceIds,
  DescribeRunGroupsResponse,
  EnvironmentConfig,
  DescribeRunsResponse,
  RunMetadata,
  ModifyVolumeRequest,
  DescribeRunGroupsRequest,
  DescribePublicApplicationsResponse,
  HPCNode,
  NFOption,
  RunGroupResultNotification,
  Table,
  CVMOption,
  ImportCommonApplicationRequest,
} from "./omics_models"

/**
 * omics client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("omics.tencentcloudapi.com", "2022-11-28", clientConfig)
  }

  /**
   * 导入公共应用到项目
   */
  async ImportCommonApplication(
    req: ImportCommonApplicationRequest,
    cb?: (error: string, rep: ImportCommonApplicationResponse) => void
  ): Promise<ImportCommonApplicationResponse> {
    return this.request("ImportCommonApplication", req, cb)
  }

  /**
   * 查询应用版本列表
   */
  async DescribeApplicationVersions(
    req: DescribeApplicationVersionsRequest,
    cb?: (error: string, rep: DescribeApplicationVersionsResponse) => void
  ): Promise<DescribeApplicationVersionsResponse> {
    return this.request("DescribeApplicationVersions", req, cb)
  }

  /**
   * 查询任务详情。
   */
  async GetRunStatus(
    req: GetRunStatusRequest,
    cb?: (error: string, rep: GetRunStatusResponse) => void
  ): Promise<GetRunStatusResponse> {
    return this.request("GetRunStatus", req, cb)
  }

  /**
   * 创建缓存卷。
   */
  async CreateVolume(
    req: CreateVolumeRequest,
    cb?: (error: string, rep: CreateVolumeResponse) => void
  ): Promise<CreateVolumeResponse> {
    return this.request("CreateVolume", req, cb)
  }

  /**
   * 查询运行参数模板内容
   */
  async GetInputTemplateFile(
    req: GetInputTemplateFileRequest,
    cb?: (error: string, rep: GetInputTemplateFileResponse) => void
  ): Promise<GetInputTemplateFileResponse> {
    return this.request("GetInputTemplateFile", req, cb)
  }

  /**
   * 重试任务。
   */
  async RetryRuns(
    req: RetryRunsRequest,
    cb?: (error: string, rep: RetryRunsResponse) => void
  ): Promise<RetryRunsResponse> {
    return this.request("RetryRuns", req, cb)
  }

  /**
   * 导入表格文件。
   */
  async ImportTableFile(
    req: ImportTableFileRequest,
    cb?: (error: string, rep: ImportTableFileResponse) => void
  ): Promise<ImportTableFileResponse> {
    return this.request("ImportTableFile", req, cb)
  }

  /**
   * 终止任务批次。
   */
  async TerminateRunGroup(
    req: TerminateRunGroupRequest,
    cb?: (error: string, rep: TerminateRunGroupResponse) => void
  ): Promise<TerminateRunGroupResponse> {
    return this.request("TerminateRunGroup", req, cb)
  }

  /**
   * 运行应用。
   */
  async RunApplication(
    req: RunApplicationRequest,
    cb?: (error: string, rep: RunApplicationResponse) => void
  ): Promise<RunApplicationResponse> {
    return this.request("RunApplication", req, cb)
  }

  /**
   * 删除缓存卷。
   */
  async DeleteVolume(
    req: DeleteVolumeRequest,
    cb?: (error: string, rep: DeleteVolumeResponse) => void
  ): Promise<DeleteVolumeResponse> {
    return this.request("DeleteVolume", req, cb)
  }

  /**
   * 查询公共应用列表。
   */
  async DescribePublicApplications(
    req: DescribePublicApplicationsRequest,
    cb?: (error: string, rep: DescribePublicApplicationsResponse) => void
  ): Promise<DescribePublicApplicationsResponse> {
    return this.request("DescribePublicApplications", req, cb)
  }

  /**
   * 查询表格行数据。
   */
  async DescribeTablesRows(
    req: DescribeTablesRowsRequest,
    cb?: (error: string, rep: DescribeTablesRowsResponse) => void
  ): Promise<DescribeTablesRowsResponse> {
    return this.request("DescribeTablesRows", req, cb)
  }

  /**
   * 查询HPC集群列表。
   */
  async DescribeHPCClusters(
    req: DescribeHPCClustersRequest,
    cb?: (error: string, rep: DescribeHPCClustersResponse) => void
  ): Promise<DescribeHPCClustersResponse> {
    return this.request("DescribeHPCClusters", req, cb)
  }

  /**
   * 查询环境列表。
   */
  async DescribeEnvironments(
    req: DescribeEnvironmentsRequest,
    cb?: (error: string, rep: DescribeEnvironmentsResponse) => void
  ): Promise<DescribeEnvironmentsResponse> {
    return this.request("DescribeEnvironments", req, cb)
  }

  /**
   * 获取任务详情文件。
   */
  async GetRunMetadataFile(
    req: GetRunMetadataFileRequest,
    cb?: (error: string, rep: GetRunMetadataFileResponse) => void
  ): Promise<GetRunMetadataFileResponse> {
    return this.request("GetRunMetadataFile", req, cb)
  }

  /**
   * 重启HPC节点
   */
  async RebootHPCNodes(
    req: RebootHPCNodesRequest,
    cb?: (error: string, rep: RebootHPCNodesResponse) => void
  ): Promise<RebootHPCNodesResponse> {
    return this.request("RebootHPCNodes", req, cb)
  }

  /**
   * 查询项目列表
   */
  async DescribeProjects(
    req: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
  }

  /**
   * 运行工作流。
   */
  async RunWorkflow(
    req: RunWorkflowRequest,
    cb?: (error: string, rep: RunWorkflowResponse) => void
  ): Promise<RunWorkflowResponse> {
    return this.request("RunWorkflow", req, cb)
  }

  /**
   * 创建组学平台计算环境。
   */
  async CreateEnvironment(
    req: CreateEnvironmentRequest,
    cb?: (error: string, rep: CreateEnvironmentResponse) => void
  ): Promise<CreateEnvironmentResponse> {
    return this.request("CreateEnvironment", req, cb)
  }

  /**
   * 查询任务列表。
   */
  async DescribeRuns(
    req: DescribeRunsRequest,
    cb?: (error: string, rep: DescribeRunsResponse) => void
  ): Promise<DescribeRunsResponse> {
    return this.request("DescribeRuns", req, cb)
  }

  /**
   * 查询任务批次列表。
   */
  async DescribeRunGroups(
    req: DescribeRunGroupsRequest,
    cb?: (error: string, rep: DescribeRunGroupsResponse) => void
  ): Promise<DescribeRunGroupsResponse> {
    return this.request("DescribeRunGroups", req, cb)
  }

  /**
   * 删除环境。
   */
  async DeleteEnvironment(
    req: DeleteEnvironmentRequest,
    cb?: (error: string, rep: DeleteEnvironmentResponse) => void
  ): Promise<DeleteEnvironmentResponse> {
    return this.request("DeleteEnvironment", req, cb)
  }

  /**
   * 查询作业详情。
   */
  async GetRunCalls(
    req: GetRunCallsRequest,
    cb?: (error: string, rep: GetRunCallsResponse) => void
  ): Promise<GetRunCallsResponse> {
    return this.request("GetRunCalls", req, cb)
  }

  /**
   * 查询项目应用列表
   */
  async DescribeApplications(
    req: DescribeApplicationsRequest,
    cb?: (error: string, rep: DescribeApplicationsResponse) => void
  ): Promise<DescribeApplicationsResponse> {
    return this.request("DescribeApplications", req, cb)
  }

  /**
   * 删除缓存卷数据。
   */
  async DeleteVolumeData(
    req: DeleteVolumeDataRequest,
    cb?: (error: string, rep: DeleteVolumeDataResponse) => void
  ): Promise<DeleteVolumeDataResponse> {
    return this.request("DeleteVolumeData", req, cb)
  }

  /**
   * 查询缓存卷列表。
   */
  async DescribeVolumes(
    req: DescribeVolumesRequest,
    cb?: (error: string, rep: DescribeVolumesResponse) => void
  ): Promise<DescribeVolumesResponse> {
    return this.request("DescribeVolumes", req, cb)
  }

  /**
   * 查询运行参数模板列表
   */
  async DescribeInputTemplates(
    req: DescribeInputTemplatesRequest,
    cb?: (error: string, rep: DescribeInputTemplatesResponse) => void
  ): Promise<DescribeInputTemplatesResponse> {
    return this.request("DescribeInputTemplates", req, cb)
  }

  /**
   * 查询HPC节点列表。
   */
  async DescribeHPCNodes(
    req: DescribeHPCNodesRequest,
    cb?: (error: string, rep: DescribeHPCNodesResponse) => void
  ): Promise<DescribeHPCNodesResponse> {
    return this.request("DescribeHPCNodes", req, cb)
  }

  /**
   * 修改缓存卷。
   */
  async ModifyVolume(
    req: ModifyVolumeRequest,
    cb?: (error: string, rep: ModifyVolumeResponse) => void
  ): Promise<ModifyVolumeResponse> {
    return this.request("ModifyVolume", req, cb)
  }

  /**
   * 查询表格。
   */
  async DescribeTables(
    req: DescribeTablesRequest,
    cb?: (error: string, rep: DescribeTablesResponse) => void
  ): Promise<DescribeTablesResponse> {
    return this.request("DescribeTables", req, cb)
  }
}
