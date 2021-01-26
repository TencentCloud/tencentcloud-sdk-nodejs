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
  ModifyClusterNameRequest,
  ModifyTableGroupNameResponse,
  DescribeTableTagsRequest,
  ModifyClusterPasswordResponse,
  DeleteClusterResponse,
  DeleteTableIndexResponse,
  TableRollbackResultNew,
  ServerMachineInfo,
  DescribeTablesResponse,
  DeleteClusterRequest,
  SelectedTableWithField,
  DeleteTableIndexRequest,
  ProxyMachineInfo,
  DescribeTasksResponse,
  DeleteTablesRequest,
  DescribeRegionsResponse,
  SelectedTableInfoNew,
  ModifyClusterPasswordRequest,
  DescribeMachineResponse,
  DeleteTableGroupRequest,
  TagsInfoOfTableGroup,
  CreateTableGroupRequest,
  ModifyClusterMachineResponse,
  TagsInfoOfTable,
  DeleteIdlFilesResponse,
  FieldInfo,
  ModifyTableTagsRequest,
  IdlFileInfo,
  DescribeTasksRequest,
  RecoverRecycleTablesResponse,
  ClearTablesResponse,
  DescribeIdlFileInfosRequest,
  ClusterInfo,
  DisableRestProxyRequest,
  DescribeTablesInRecycleResponse,
  ModifyTablesResponse,
  EnableRestProxyRequest,
  ModifyTableGroupTagsResponse,
  ModifyClusterTagsRequest,
  DescribeTableGroupTagsResponse,
  SetTableIndexRequest,
  ModifyTableQuotasResponse,
  RecoverRecycleTablesRequest,
  ModifyTableGroupNameRequest,
  DescribeTableGroupsRequest,
  ModifyTableTagsResponse,
  ModifyTableGroupTagsRequest,
  ModifyTableQuotasRequest,
  CompareIdlFilesResponse,
  CreateTablesResponse,
  DescribeRegionsRequest,
  DescribeClustersResponse,
  ModifyClusterTagsResponse,
  DescribeClusterTagsResponse,
  TagsInfoOfCluster,
  SetTableIndexResponse,
  ClearTablesRequest,
  DescribeIdlFileInfosResponse,
  DisableRestProxyResponse,
  TagInfoUnit,
  CreateClusterResponse,
  DescribeClustersRequest,
  ServerDetailInfo,
  TableInfoNew,
  TaskInfoNew,
  DeleteIdlFilesRequest,
  CreateBackupResponse,
  VerifyIdlFilesResponse,
  DescribeTableTagsResponse,
  CreateTableGroupResponse,
  VerifyIdlFilesRequest,
  EnableRestProxyResponse,
  ModifyClusterNameResponse,
  ModifyTablesRequest,
  DescribeTableGroupTagsRequest,
  DescribeTablesInRecycleRequest,
  DescribeTablesRequest,
  ModifyTableMemosRequest,
  DescribeUinInWhitelistResponse,
  ParsedTableInfoNew,
  RollbackTablesResponse,
  MachineInfo,
  CreateBackupRequest,
  CreateClusterRequest,
  TableResultNew,
  CreateTablesRequest,
  DescribeClusterTagsRequest,
  RegionInfo,
  DescribeTableGroupsResponse,
  DeleteTableGroupResponse,
  PoolInfo,
  DescribeMachineRequest,
  RollbackTablesRequest,
  DescribeUinInWhitelistRequest,
  CompareIdlFilesRequest,
  ProxyDetailInfo,
  IdlFileInfoWithoutContent,
  ModifyTableMemosResponse,
  ModifyClusterMachineRequest,
  Filter,
  DeleteTablesResponse,
  ErrorInfo,
  TableGroupInfo,
} from "./tcaplusdb_models"

/**
 * tcaplusdb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tcaplusdb.tencentcloudapi.com", "2019-08-23", clientConfig)
  }

  /**
   * 删除表格的分布式索引
   */
  async DeleteTableIndex(
    req: DeleteTableIndexRequest,
    cb?: (error: string, rep: DeleteTableIndexResponse) => void
  ): Promise<DeleteTableIndexResponse> {
    return this.request("DeleteTableIndex", req, cb)
  }

  /**
   * 获取表格标签
   */
  async DescribeTableTags(
    req: DescribeTableTagsRequest,
    cb?: (error: string, rep: DescribeTableTagsResponse) => void
  ): Promise<DescribeTableTagsResponse> {
    return this.request("DescribeTableTags", req, cb)
  }

  /**
   * 修改表格标签
   */
  async ModifyTableTags(
    req: ModifyTableTagsRequest,
    cb?: (error: string, rep: ModifyTableTagsResponse) => void
  ): Promise<ModifyTableTagsResponse> {
    return this.request("ModifyTableTags", req, cb)
  }

  /**
   * 本接口用于创建TcaplusDB集群
   */
  async CreateCluster(
    req: CreateClusterRequest,
    cb?: (error: string, rep: CreateClusterResponse) => void
  ): Promise<CreateClusterResponse> {
    return this.request("CreateCluster", req, cb)
  }

  /**
   * 查询独占集群可以申请的剩余机器
   */
  async DescribeMachine(
    req: DescribeMachineRequest,
    cb?: (error: string, rep: DescribeMachineResponse) => void
  ): Promise<DescribeMachineResponse> {
    return this.request("DescribeMachine", req, cb)
  }

  /**
   * 查询本用户是否在白名单中，控制是否能创建TDR类型的APP或表
   */
  async DescribeUinInWhitelist(
    req?: DescribeUinInWhitelistRequest,
    cb?: (error: string, rep: DescribeUinInWhitelistResponse) => void
  ): Promise<DescribeUinInWhitelistResponse> {
    return this.request("DescribeUinInWhitelist", req, cb)
  }

  /**
   * 查询回收站中的表详情
   */
  async DescribeTablesInRecycle(
    req: DescribeTablesInRecycleRequest,
    cb?: (error: string, rep: DescribeTablesInRecycleResponse) => void
  ): Promise<DescribeTablesInRecycleResponse> {
    return this.request("DescribeTablesInRecycle", req, cb)
  }

  /**
   * 当restful api为关闭状态时，可以通过此接口关闭restful api
   */
  async DisableRestProxy(
    req: DisableRestProxyRequest,
    cb?: (error: string, rep: DisableRestProxyResponse) => void
  ): Promise<DisableRestProxyResponse> {
    return this.request("DisableRestProxy", req, cb)
  }

  /**
   * 表格数据回档
   */
  async RollbackTables(
    req: RollbackTablesRequest,
    cb?: (error: string, rep: RollbackTablesResponse) => void
  ): Promise<RollbackTablesResponse> {
    return this.request("RollbackTables", req, cb)
  }

  /**
   * 修改指定的集群名称
   */
  async ModifyClusterName(
    req: ModifyClusterNameRequest,
    cb?: (error: string, rep: ModifyClusterNameResponse) => void
  ): Promise<ModifyClusterNameResponse> {
    return this.request("ModifyClusterName", req, cb)
  }

  /**
   * 删除TcaplusDB集群，必须在集群所属所有资源（包括表格组，表）都已经释放的情况下才会成功。
   */
  async DeleteCluster(
    req: DeleteClusterRequest,
    cb?: (error: string, rep: DeleteClusterResponse) => void
  ): Promise<DeleteClusterResponse> {
    return this.request("DeleteCluster", req, cb)
  }

  /**
   * 修改指定集群的密码，后台将在旧密码失效之前同时支持TcaplusDB SDK使用旧密码和新密码访问数据库。在旧密码失效之前不能提交新的密码修改请求，在旧密码失效之后不能提交修改旧密码过期时间的请求。
   */
  async ModifyClusterPassword(
    req: ModifyClusterPasswordRequest,
    cb?: (error: string, rep: ModifyClusterPasswordResponse) => void
  ): Promise<ModifyClusterPasswordResponse> {
    return this.request("ModifyClusterPassword", req, cb)
  }

  /**
   * 指定集群ID和待删除IDL文件的信息，删除目标文件，如果文件正在被表关联则删除失败。
   */
  async DeleteIdlFiles(
    req: DeleteIdlFilesRequest,
    cb?: (error: string, rep: DeleteIdlFilesResponse) => void
  ): Promise<DeleteIdlFilesResponse> {
    return this.request("DeleteIdlFiles", req, cb)
  }

  /**
   * 恢复回收站中，用户自行删除的表。对欠费待释放的表无效。
   */
  async RecoverRecycleTables(
    req: RecoverRecycleTablesRequest,
    cb?: (error: string, rep: RecoverRecycleTablesResponse) => void
  ): Promise<RecoverRecycleTablesResponse> {
    return this.request("RecoverRecycleTables", req, cb)
  }

  /**
   * 当restful api为关闭状态时，可以通过此接口开启restful apu
   */
  async EnableRestProxy(
    req: EnableRestProxyRequest,
    cb?: (error: string, rep: EnableRestProxyResponse) => void
  ): Promise<EnableRestProxyResponse> {
    return this.request("EnableRestProxy", req, cb)
  }

  /**
   * 用户创建备份任务
   */
  async CreateBackup(
    req: CreateBackupRequest,
    cb?: (error: string, rep: CreateBackupResponse) => void
  ): Promise<CreateBackupResponse> {
    return this.request("CreateBackup", req, cb)
  }

  /**
   * 根据选择的IDL文件列表，批量创建表格
   */
  async CreateTables(
    req: CreateTablesRequest,
    cb?: (error: string, rep: CreateTablesResponse) => void
  ): Promise<CreateTablesResponse> {
    return this.request("CreateTables", req, cb)
  }

  /**
   * 表格扩缩容
   */
  async ModifyTableQuotas(
    req: ModifyTableQuotasRequest,
    cb?: (error: string, rep: ModifyTableQuotasResponse) => void
  ): Promise<ModifyTableQuotasResponse> {
    return this.request("ModifyTableQuotas", req, cb)
  }

  /**
   * 查询TcaplusDB集群列表，包含集群详细信息。
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 修改独占集群机器
   */
  async ModifyClusterMachine(
    req: ModifyClusterMachineRequest,
    cb?: (error: string, rep: ModifyClusterMachineResponse) => void
  ): Promise<ModifyClusterMachineResponse> {
    return this.request("ModifyClusterMachine", req, cb)
  }

  /**
   * 删除表格组
   */
  async DeleteTableGroup(
    req: DeleteTableGroupRequest,
    cb?: (error: string, rep: DeleteTableGroupResponse) => void
  ): Promise<DeleteTableGroupResponse> {
    return this.request("DeleteTableGroup", req, cb)
  }

  /**
   * 修改TcaplusDB表格组名称
   */
  async ModifyTableGroupName(
    req: ModifyTableGroupNameRequest,
    cb?: (error: string, rep: ModifyTableGroupNameResponse) => void
  ): Promise<ModifyTableGroupNameResponse> {
    return this.request("ModifyTableGroupName", req, cb)
  }

  /**
   * 在TcaplusDB集群下创建表格组
   */
  async CreateTableGroup(
    req: CreateTableGroupRequest,
    cb?: (error: string, rep: CreateTableGroupResponse) => void
  ): Promise<CreateTableGroupResponse> {
    return this.request("CreateTableGroup", req, cb)
  }

  /**
   * 查询TcaplusDB服务支持的地域列表
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 查询任务列表
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 修改集群标签
   */
  async ModifyClusterTags(
    req: ModifyClusterTagsRequest,
    cb?: (error: string, rep: ModifyClusterTagsResponse) => void
  ): Promise<ModifyClusterTagsResponse> {
    return this.request("ModifyClusterTags", req, cb)
  }

  /**
   * 修改表格组标签
   */
  async ModifyTableGroupTags(
    req: ModifyTableGroupTagsRequest,
    cb?: (error: string, rep: ModifyTableGroupTagsResponse) => void
  ): Promise<ModifyTableGroupTagsResponse> {
    return this.request("ModifyTableGroupTags", req, cb)
  }

  /**
   * 设置表格分布式索引
   */
  async SetTableIndex(
    req: SetTableIndexRequest,
    cb?: (error: string, rep: SetTableIndexResponse) => void
  ): Promise<SetTableIndexResponse> {
    return this.request("SetTableIndex", req, cb)
  }

  /**
   * 获取表格组关联的标签列表
   */
  async DescribeTableGroupTags(
    req: DescribeTableGroupTagsRequest,
    cb?: (error: string, rep: DescribeTableGroupTagsResponse) => void
  ): Promise<DescribeTableGroupTagsResponse> {
    return this.request("DescribeTableGroupTags", req, cb)
  }

  /**
   * 查询表格组列表
   */
  async DescribeTableGroups(
    req: DescribeTableGroupsRequest,
    cb?: (error: string, rep: DescribeTableGroupsResponse) => void
  ): Promise<DescribeTableGroupsResponse> {
    return this.request("DescribeTableGroups", req, cb)
  }

  /**
   * 选中目标表格，上传并校验改表文件，返回是否允许修改表格结构的结果。
   */
  async CompareIdlFiles(
    req: CompareIdlFilesRequest,
    cb?: (error: string, rep: CompareIdlFilesResponse) => void
  ): Promise<CompareIdlFilesResponse> {
    return this.request("CompareIdlFiles", req, cb)
  }

  /**
   * 查询表描述文件详情
   */
  async DescribeIdlFileInfos(
    req: DescribeIdlFileInfosRequest,
    cb?: (error: string, rep: DescribeIdlFileInfosResponse) => void
  ): Promise<DescribeIdlFileInfosResponse> {
    return this.request("DescribeIdlFileInfos", req, cb)
  }

  /**
   * 删除指定的表,第一次调用此接口代表将表移动至回收站，再次调用代表将此表格从回收站中彻底删除。
   */
  async DeleteTables(
    req: DeleteTablesRequest,
    cb?: (error: string, rep: DeleteTablesResponse) => void
  ): Promise<DeleteTablesResponse> {
    return this.request("DeleteTables", req, cb)
  }

  /**
   * 修改表备注信息
   */
  async ModifyTableMemos(
    req: ModifyTableMemosRequest,
    cb?: (error: string, rep: ModifyTableMemosResponse) => void
  ): Promise<ModifyTableMemosResponse> {
    return this.request("ModifyTableMemos", req, cb)
  }

  /**
   * 上传并校验创建表格文件，返回校验合法的表格定义
   */
  async VerifyIdlFiles(
    req: VerifyIdlFilesRequest,
    cb?: (error: string, rep: VerifyIdlFilesResponse) => void
  ): Promise<VerifyIdlFilesResponse> {
    return this.request("VerifyIdlFiles", req, cb)
  }

  /**
   * 根据给定的表信息，清除表数据。
   */
  async ClearTables(
    req: ClearTablesRequest,
    cb?: (error: string, rep: ClearTablesResponse) => void
  ): Promise<ClearTablesResponse> {
    return this.request("ClearTables", req, cb)
  }

  /**
   * 根据用户选定的表定义IDL文件，批量修改指定的表
   */
  async ModifyTables(
    req: ModifyTablesRequest,
    cb?: (error: string, rep: ModifyTablesResponse) => void
  ): Promise<ModifyTablesResponse> {
    return this.request("ModifyTables", req, cb)
  }

  /**
   * 查询表详情
   */
  async DescribeTables(
    req: DescribeTablesRequest,
    cb?: (error: string, rep: DescribeTablesResponse) => void
  ): Promise<DescribeTablesResponse> {
    return this.request("DescribeTables", req, cb)
  }

  /**
   * 获取集群关联的标签列表
   */
  async DescribeClusterTags(
    req: DescribeClusterTagsRequest,
    cb?: (error: string, rep: DescribeClusterTagsResponse) => void
  ): Promise<DescribeClusterTagsResponse> {
    return this.request("DescribeClusterTags", req, cb)
  }
}
