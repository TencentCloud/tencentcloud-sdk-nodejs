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
  AudioStreamInfo,
  DescribeTeamsRequest,
  DeleteProjectRequest,
  ImportMaterialResponse,
  DescribeTeamsResponse,
  DescribeTaskDetailResponse,
  ExportVideoEditProjectRequest,
  ClassInfo,
  DeleteMaterialResponse,
  IntegerRange,
  SearchMaterialRequest,
  DeleteTeamResponse,
  RevokeResourceAuthorizationResponse,
  DescribeTasksResponse,
  ProjectInfo,
  DeleteTeamRequest,
  ModifyMaterialResponse,
  LinkMaterial,
  SwitcherProjectInput,
  FlattenListMediaRequest,
  AudioMaterial,
  AddMemberInfo,
  Entity,
  TeamInfo,
  ExportVideoByEditorTrackDataRequest,
  MaterialTagInfo,
  VideoEditProjectOutput,
  CreateProjectRequest,
  ModifyMaterialRequest,
  Authorizer,
  DescribeTasksRequest,
  TimeRange,
  DescribeLoginStatusRequest,
  DeleteLoginStatusResponse,
  Resource,
  CreateLinkResponse,
  ListMediaResponse,
  SearchMaterialResponse,
  DescribeJoinTeamsRequest,
  DeleteMaterialRequest,
  CreateProjectResponse,
  DeleteProjectResponse,
  DeleteClassRequest,
  CreateLinkRequest,
  CreateClassRequest,
  DescribeMaterialsResponse,
  GrantResourceAuthorizationResponse,
  SwitcherPgmOutputConfig,
  CMEExportInfo,
  ImportMediaToProjectRequest,
  VODExportInfo,
  SortBy,
  ImageMaterial,
  DescribeClassRequest,
  MoveClassRequest,
  DeleteTeamMembersResponse,
  MoveClassResponse,
  ImportMediaToProjectResponse,
  ModifyTeamMemberResponse,
  DescribeTeamMembersResponse,
  AddTeamMemberResponse,
  CreateTeamResponse,
  ModifyTeamRequest,
  ModifyTeamMemberRequest,
  CreateTeamRequest,
  MaterialBasicInfo,
  JoinTeamInfo,
  DescribeResourceAuthorizationRequest,
  CreateClassResponse,
  VideoStreamInfo,
  AddTeamMemberRequest,
  ExportVideoEditProjectResponse,
  ListMediaRequest,
  ModifyTeamResponse,
  DeleteLoginStatusRequest,
  DeleteTeamMembersRequest,
  DescribeSharedSpaceResponse,
  SearchScope,
  VideoMaterial,
  DescribeResourceAuthorizationResponse,
  FlattenListMediaResponse,
  DescribeProjectsRequest,
  DescribeLoginStatusResponse,
  TeamMemberInfo,
  DescribeJoinTeamsResponse,
  DescribeTeamMembersRequest,
  MaterialStatus,
  MediaImageSpriteInfo,
  AuthorizationInfo,
  ModifyProjectResponse,
  RevokeResourceAuthorizationRequest,
  DescribeTaskDetailRequest,
  ModifyProjectRequest,
  MaterialInfo,
  LoginStatusInfo,
  DescribeClassResponse,
  MediaMetaData,
  DescribeSharedSpaceRequest,
  TaskBaseInfo,
  DeleteClassResponse,
  GrantResourceAuthorizationRequest,
  LinkMaterialInfo,
  ExportVideoByEditorTrackDataResponse,
  DescribeProjectsResponse,
  ImportMaterialRequest,
  DescribeMaterialsRequest,
} from "./cme_models"

/**
 * cme client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cme.tencentcloudapi.com", "2019-10-29", clientConfig)
  }

  /**
   * 根据素材 Id 批量获取素材详情。
   */
  async DescribeMaterials(
    req: DescribeMaterialsRequest,
    cb?: (error: string, rep: DescribeMaterialsResponse) => void
  ): Promise<DescribeMaterialsResponse> {
    return this.request("DescribeMaterials", req, cb)
  }

  /**
   * 获取指定团队的信息。
   */
  async DescribeTeams(
    req: DescribeTeamsRequest,
    cb?: (error: string, rep: DescribeTeamsResponse) => void
  ): Promise<DescribeTeamsResponse> {
    return this.request("DescribeTeams", req, cb)
  }

  /**
   * 导出视频编辑项目，支持指定输出的模板。
   */
  async ExportVideoEditProject(
    req: ExportVideoEditProjectRequest,
    cb?: (error: string, rep: ExportVideoEditProjectResponse) => void
  ): Promise<ExportVideoEditProjectResponse> {
    return this.request("ExportVideoEditProject", req, cb)
  }

  /**
   * 获取共享空间。当实体A对实体B授权某资源以后，实体B的共享空间就会增加实体A。
   */
  async DescribeSharedSpace(
    req: DescribeSharedSpaceRequest,
    cb?: (error: string, rep: DescribeSharedSpaceResponse) => void
  ): Promise<DescribeSharedSpaceResponse> {
    return this.request("DescribeSharedSpace", req, cb)
  }

  /**
   * 资源所属实体对目标实体授予目标资源的相应权限。
   */
  async GrantResourceAuthorization(
    req: GrantResourceAuthorizationRequest,
    cb?: (error: string, rep: GrantResourceAuthorizationResponse) => void
  ): Promise<GrantResourceAuthorizationResponse> {
    return this.request("GrantResourceAuthorization", req, cb)
  }

  /**
   * 根据检索条件搜索素材，返回素材的基本信息。
   */
  async SearchMaterial(
    req: SearchMaterialRequest,
    cb?: (error: string, rep: SearchMaterialResponse) => void
  ): Promise<SearchMaterialResponse> {
    return this.request("SearchMaterial", req, cb)
  }

  /**
   *  资源所属实体对目标实体回收目标资源的相应权限，若原本没有相应权限则不产生变更。
   */
  async RevokeResourceAuthorization(
    req: RevokeResourceAuthorizationRequest,
    cb?: (error: string, rep: RevokeResourceAuthorizationResponse) => void
  ): Promise<RevokeResourceAuthorizationResponse> {
    return this.request("RevokeResourceAuthorization", req, cb)
  }

  /**
   * 获取指定的团队成员所加入的团队列表。
   */
  async DescribeJoinTeams(
    req: DescribeJoinTeamsRequest,
    cb?: (error: string, rep: DescribeJoinTeamsResponse) => void
  ): Promise<DescribeJoinTeamsResponse> {
    return this.request("DescribeJoinTeams", req, cb)
  }

  /**
   * 查询指定资源的授权列表。
   */
  async DescribeResourceAuthorization(
    req: DescribeResourceAuthorizationRequest,
    cb?: (error: string, rep: DescribeResourceAuthorizationResponse) => void
  ): Promise<DescribeResourceAuthorizationResponse> {
    return this.request("DescribeResourceAuthorization", req, cb)
  }

  /**
   * 将云点播媒资文件导入到云剪素材库。
   */
  async ImportMaterial(
    req: ImportMaterialRequest,
    cb?: (error: string, rep: ImportMaterialResponse) => void
  ): Promise<ImportMaterialResponse> {
    return this.request("ImportMaterial", req, cb)
  }

  /**
   * 使用在线编辑轨道数据直接导出视频。
   */
  async ExportVideoByEditorTrackData(
    req: ExportVideoByEditorTrackDataRequest,
    cb?: (error: string, rep: ExportVideoByEditorTrackDataResponse) => void
  ): Promise<ExportVideoByEditorTrackDataResponse> {
    return this.request("ExportVideoByEditorTrackData", req, cb)
  }

  /**
     * 获取任务详情信息，包含下面几个部分：
<li>任务基础信息：包括任务状态、错误信息、创建时间等；</li>
<li>导出项目输出信息：包括输出的素材 Id 等。</li>
     */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
   *  创建素材链接或分类路径链接，将源资源信息链接到目标。
   */
  async CreateLink(
    req: CreateLinkRequest,
    cb?: (error: string, rep: CreateLinkResponse) => void
  ): Promise<CreateLinkResponse> {
    return this.request("CreateLink", req, cb)
  }

  /**
     * 修改团队信息，目前支持修改的操作有：
<li>修改团队名称。</li>
     */
  async ModifyTeam(
    req: ModifyTeamRequest,
    cb?: (error: string, rep: ModifyTeamResponse) => void
  ): Promise<ModifyTeamResponse> {
    return this.request("ModifyTeam", req, cb)
  }

  /**
   * 根据素材 Id 删除素材。
   */
  async DeleteMaterial(
    req: DeleteMaterialRequest,
    cb?: (error: string, rep: DeleteMaterialResponse) => void
  ): Promise<DeleteMaterialResponse> {
    return this.request("DeleteMaterial", req, cb)
  }

  /**
   * 修改素材信息，支持修改素材名称、分类路径、标签等信息。
   */
  async ModifyMaterial(
    req: ModifyMaterialRequest,
    cb?: (error: string, rep: ModifyMaterialResponse) => void
  ): Promise<ModifyMaterialResponse> {
    return this.request("ModifyMaterial", req, cb)
  }

  /**
     * 删除一个团队。
<li>要删除的团队必须没有归属的素材；</li>
<li>要删除的团队必须没有归属的分类。</li>
     */
  async DeleteTeam(
    req: DeleteTeamRequest,
    cb?: (error: string, rep: DeleteTeamResponse) => void
  ): Promise<DeleteTeamResponse> {
    return this.request("DeleteTeam", req, cb)
  }

  /**
   * 向一个团队中团队成员，并且指定成员的角色。
   */
  async AddTeamMember(
    req: AddTeamMemberRequest,
    cb?: (error: string, rep: AddTeamMemberResponse) => void
  ): Promise<AddTeamMemberResponse> {
    return this.request("AddTeamMember", req, cb)
  }

  /**
     * 移动某一个分类到另外一个分类下，也可用于分类重命名。
<li>如果 SourceClassPath = /素材/视频/NBA，DestinationClassPath = /素材/视频/篮球，当 DestinationClassPath 不存在时候，操作结果为重命名 ClassPath，如果 DestinationClassPath 存在时候，操作结果为产生新目录 /素材/视频/篮球/NBA。</li>
     */
  async MoveClass(
    req: MoveClassRequest,
    cb?: (error: string, rep: MoveClassResponse) => void
  ): Promise<MoveClassResponse> {
    return this.request("MoveClass", req, cb)
  }

  /**
   * 修改团队成员信息，包括成员备注、角色等。
   */
  async ModifyTeamMember(
    req: ModifyTeamMemberRequest,
    cb?: (error: string, rep: ModifyTeamMemberResponse) => void
  ): Promise<ModifyTeamMemberResponse> {
    return this.request("ModifyTeamMember", req, cb)
  }

  /**
   * 将团队成员从团队中删除，默认只有 Owner 及管理员才有此权限。
   */
  async DeleteTeamMembers(
    req: DeleteTeamMembersRequest,
    cb?: (error: string, rep: DeleteTeamMembersResponse) => void
  ): Promise<DeleteTeamMembersResponse> {
    return this.request("DeleteTeamMembers", req, cb)
  }

  /**
   * 删除用户登录态，使用户登出云剪平台。
   */
  async DeleteLoginStatus(
    req: DeleteLoginStatusRequest,
    cb?: (error: string, rep: DeleteLoginStatusResponse) => void
  ): Promise<DeleteLoginStatusResponse> {
    return this.request("DeleteLoginStatus", req, cb)
  }

  /**
   * 支持根据多种条件过滤出项目列表。
   */
  async DescribeProjects(
    req: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
  }

  /**
   * 查询指定用户的登录态。
   */
  async DescribeLoginStatus(
    req: DescribeLoginStatusRequest,
    cb?: (error: string, rep: DescribeLoginStatusResponse) => void
  ): Promise<DescribeLoginStatusResponse> {
    return this.request("DescribeLoginStatus", req, cb)
  }

  /**
   * 获取任务列表，支持条件筛选，返回对应的任务基础信息列表。
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 获取指定归属者下所有的分类信息。
   */
  async DescribeClass(
    req: DescribeClassRequest,
    cb?: (error: string, rep: DescribeClassResponse) => void
  ): Promise<DescribeClassResponse> {
    return this.request("DescribeClass", req, cb)
  }

  /**
   * 创建一个团队。
   */
  async CreateTeam(
    req: CreateTeamRequest,
    cb?: (error: string, rep: CreateTeamResponse) => void
  ): Promise<CreateTeamResponse> {
    return this.request("CreateTeam", req, cb)
  }

  /**
   * 修改云剪编辑项目的信息。
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
  }

  /**
     * 新增分类，用于管理素材。
<li>分类层数不能超过10；</li>
<li>子分类数不能超过10。</li>
     */
  async CreateClass(
    req: CreateClassRequest,
    cb?: (error: string, rep: CreateClassResponse) => void
  ): Promise<CreateClassResponse> {
    return this.request("CreateClass", req, cb)
  }

  /**
   * 将云点播中的媒资添加到素材库中，供后续视频编辑使用。
   */
  async ImportMediaToProject(
    req: ImportMediaToProjectRequest,
    cb?: (error: string, rep: ImportMediaToProjectResponse) => void
  ): Promise<ImportMediaToProjectResponse> {
    return this.request("ImportMediaToProject", req, cb)
  }

  /**
   *  浏览当前分类路径下的资源，包括素材和子分类。
   */
  async ListMedia(
    req: ListMediaRequest,
    cb?: (error: string, rep: ListMediaResponse) => void
  ): Promise<ListMediaResponse> {
    return this.request("ListMedia", req, cb)
  }

  /**
     * 创建云剪的编辑项目，支持创建视频剪辑、直播剪辑及导播台项目。

     */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
     * 删除分类信息，删除时检验下述限制：
<li>分类路径必须存在；</li>
<li>分类下没有绑定素材。</li>
     */
  async DeleteClass(
    req: DeleteClassRequest,
    cb?: (error: string, rep: DeleteClassResponse) => void
  ): Promise<DeleteClassResponse> {
    return this.request("DeleteClass", req, cb)
  }

  /**
   * 删除云剪编辑项目。
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 平铺分类路径下及其子分类下的所有素材。
   */
  async FlattenListMedia(
    req: FlattenListMediaRequest,
    cb?: (error: string, rep: FlattenListMediaResponse) => void
  ): Promise<FlattenListMediaResponse> {
    return this.request("FlattenListMedia", req, cb)
  }

  /**
   * 获取指定成员 ID 的信息，同时支持拉取所有团队成员信息。
   */
  async DescribeTeamMembers(
    req: DescribeTeamMembersRequest,
    cb?: (error: string, rep: DescribeTeamMembersResponse) => void
  ): Promise<DescribeTeamMembersResponse> {
    return this.request("DescribeTeamMembers", req, cb)
  }
}
