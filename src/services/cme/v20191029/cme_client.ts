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
  ClassDeletedEvent,
  ModifyMaterialResponse,
  DeleteProjectRequest,
  ExportVideoByVideoSegmentationDataResponse,
  MaterialDeletedEvent,
  ImportMaterialResponse,
  StreamConnectProjectInput,
  DescribeAccountsRequest,
  ExportVideoByVideoSegmentationDataRequest,
  MediaTransitionItem,
  DescribeTeamsResponse,
  DescribeTaskDetailResponse,
  ExportVideoEditProjectRequest,
  ClassInfo,
  ModifyProjectResponse,
  AudioTrackItem,
  StreamConnectProjectInfo,
  VideoEncodingPresetAudioSettingForUpdate,
  VideoEncodingPresetAudioSetting,
  IntegerRange,
  SearchMaterialRequest,
  DeleteTeamResponse,
  StreamConnectOutput,
  CopyProjectRequest,
  SearchScope,
  RevokeResourceAuthorizationResponse,
  DescribeTasksResponse,
  ProjectInfo,
  VideoTrackItem,
  DeleteTeamRequest,
  DescribeTeamsRequest,
  PlatformInfo,
  LinkMaterial,
  SwitcherProjectInput,
  FlattenListMediaRequest,
  RtmpPushInputInfo,
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
  DescribePlatformsResponse,
  DescribeTasksRequest,
  MediaTrackItem,
  StorageNewFileCreatedEvent,
  DescribeLoginStatusRequest,
  MediaTrack,
  DeleteLoginStatusResponse,
  WeiboPublishInfo,
  Resource,
  CreateLinkResponse,
  ExportVideoByTemplateResponse,
  StreamInputInfo,
  ListMediaResponse,
  SearchMaterialResponse,
  StreamConnectOutputInfo,
  ParseEventRequest,
  EmptyTrackItem,
  ClassMovedEvent,
  DeleteVideoEncodingPresetRequest,
  MaterialImportedEvent,
  ModifyVideoEncodingPresetResponse,
  DescribeJoinTeamsRequest,
  VideoSegmentationProjectInput,
  DeleteMaterialRequest,
  CreateProjectResponse,
  VideoEditProjectInput,
  DeleteProjectResponse,
  VideoEncodingPresetVideoSetting,
  MediaImageSpriteInfo,
  DeleteClassRequest,
  CreateLinkRequest,
  CreateClassRequest,
  DescribeMaterialsResponse,
  CreateVideoEncodingPresetResponse,
  VideoEncodingPresetVideoSettingForUpdate,
  GrantResourceAuthorizationResponse,
  SwitcherPgmOutputConfig,
  CMEExportInfo,
  MoveResourceRequest,
  LivePullInputInfo,
  ImportMediaToProjectRequest,
  VODExportInfo,
  SortBy,
  PenguinMediaPlatformPublishInfo,
  ImageMaterial,
  DescribeClassRequest,
  DescribeSharedSpaceResponse,
  DescribeAccountsResponse,
  MoveResourceResponse,
  MoveClassRequest,
  TextSlotInfo,
  DeleteTeamMembersResponse,
  MoveClassResponse,
  ImportMediaToProjectResponse,
  ModifyTeamMemberResponse,
  DescribeTeamMembersResponse,
  AddTeamMemberResponse,
  CreateTeamResponse,
  ModifyTeamRequest,
  ModifyTeamMemberRequest,
  MaterialMovedEvent,
  CreateTeamRequest,
  MaterialBasicInfo,
  VideoExportCompletedEvent,
  ResourceInfo,
  MediaPreprocessOperation,
  JoinTeamInfo,
  DescribeResourceAuthorizationRequest,
  CreateClassResponse,
  SlotInfo,
  MediaReplacementInfo,
  TaskBaseInfo,
  RecordReplayProjectInput,
  VideoStreamInfo,
  AddTeamMemberRequest,
  GrantResourceAuthorizationRequest,
  TimeRange,
  ThirdPartyPublishInfo,
  ListMediaRequest,
  DeleteVideoEncodingPresetResponse,
  VodPullInputInfo,
  ModifyTeamResponse,
  DeleteLoginStatusRequest,
  GenerateVideoSegmentationSchemeByAiRequest,
  LiveStreamClipProjectInput,
  MaterialModifiedEvent,
  HandleStreamConnectProjectResponse,
  DeleteTeamMembersRequest,
  ExportVideoByTemplateRequest,
  DescribePlatformsRequest,
  OtherMaterial,
  EventContent,
  VideoMaterial,
  DescribeVideoEncodingPresetsResponse,
  DescribeResourceAuthorizationResponse,
  FlattenListMediaResponse,
  AccountInfo,
  DescribeProjectsRequest,
  DescribeLoginStatusResponse,
  MaterialAddedEvent,
  CreateVideoEncodingPresetRequest,
  ProjectStreamConnectStatusChangedEvent,
  DescribeJoinTeamsResponse,
  DescribeTeamMembersRequest,
  MaterialStatus,
  DescribeProjectsResponse,
  AuthorizationInfo,
  VideoEditTemplateMaterial,
  VideoExportExtensionArgs,
  SlotReplacementInfo,
  ParseEventResponse,
  DeleteMaterialResponse,
  RevokeResourceAuthorizationRequest,
  DescribeTaskDetailRequest,
  ModifyVideoEncodingPresetRequest,
  TeamMemberInfo,
  CosPublishInputInfo,
  HandleStreamConnectProjectRequest,
  ModifyProjectRequest,
  MaterialInfo,
  DescribeVideoEncodingPresetsRequest,
  LoginStatusInfo,
  DescribeClassResponse,
  GenerateVideoSegmentationSchemeByAiResponse,
  PresetTagInfo,
  DescribeSharedSpaceRequest,
  KuaishouPublishInfo,
  CopyProjectResponse,
  DeleteClassResponse,
  ExportVideoEditProjectResponse,
  MediaMetaData,
  ProjectSwitcherStatusChangedEvent,
  ExternalMediaInfo,
  LinkMaterialInfo,
  ExportVideoByEditorTrackDataResponse,
  ClassCreatedEvent,
  VideoEncodingPreset,
  ImportMaterialRequest,
  TextReplacementInfo,
  ImportMediaInfo,
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
   * 获取任务列表，支持条件筛选，返回对应的任务基础信息列表。
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 获取指定团队的信息，拉取团队信息列表。
   */
  async DescribeTeams(
    req: DescribeTeamsRequest,
    cb?: (error: string, rep: DescribeTeamsResponse) => void
  ): Promise<DescribeTeamsResponse> {
    return this.request("DescribeTeams", req, cb)
  }

  /**
   * 查询视频编码配置信息。
   */
  async DescribeVideoEncodingPresets(
    req: DescribeVideoEncodingPresetsRequest,
    cb?: (error: string, rep: DescribeVideoEncodingPresetsResponse) => void
  ): Promise<DescribeVideoEncodingPresetsResponse> {
    return this.request("DescribeVideoEncodingPresets", req, cb)
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
   * 获取共享空间。当个人或团队A对个人或团队B授权某资源以后，个人或团队B的共享空间就会增加个人或团队A。
   */
  async DescribeSharedSpace(
    req: DescribeSharedSpaceRequest,
    cb?: (error: string, rep: DescribeSharedSpaceResponse) => void
  ): Promise<DescribeSharedSpaceResponse> {
    return this.request("DescribeSharedSpace", req, cb)
  }

  /**
     * <li>发起视频智能拆条任务，支持智能生成和平精英集锦、王者荣耀集锦、足球集锦、篮球集锦 、人物集锦、新闻拆条等任务。</li>
<li>和平精英集锦和王者荣耀集锦根据击杀场景进行拆条，足球集锦和篮球集锦根据进球场景进行拆条，人物集锦根据人物人脸特征进行拆条，新闻拆条根据导播进行拆条。</li>
<li>【本接口内测中，暂不建议使用】</li>
     */
  async GenerateVideoSegmentationSchemeByAi(
    req: GenerateVideoSegmentationSchemeByAiRequest,
    cb?: (error: string, rep: GenerateVideoSegmentationSchemeByAiResponse) => void
  ): Promise<GenerateVideoSegmentationSchemeByAiResponse> {
    return this.request("GenerateVideoSegmentationSchemeByAi", req, cb)
  }

  /**
   * 使用视频智能拆条数据导出视频，将指定的视频拆条片段导出为一个视频(内测中，请勿使用)。
   */
  async ExportVideoByVideoSegmentationData(
    req: ExportVideoByVideoSegmentationDataRequest,
    cb?: (error: string, rep: ExportVideoByVideoSegmentationDataResponse) => void
  ): Promise<ExportVideoByVideoSegmentationDataResponse> {
    return this.request("ExportVideoByVideoSegmentationData", req, cb)
  }

  /**
   * 资源归属者对个人或团队授予目标资源的相应权限。
   */
  async GrantResourceAuthorization(
    req: GrantResourceAuthorizationRequest,
    cb?: (error: string, rep: GrantResourceAuthorizationResponse) => void
  ): Promise<GrantResourceAuthorizationResponse> {
    return this.request("GrantResourceAuthorization", req, cb)
  }

  /**
   * 根据检索条件搜索媒体，返回媒体的基本信息。
   */
  async SearchMaterial(
    req: SearchMaterialRequest,
    cb?: (error: string, rep: SearchMaterialResponse) => void
  ): Promise<SearchMaterialResponse> {
    return this.request("SearchMaterial", req, cb)
  }

  /**
   * 该接口接受制作云回调给客户的事件内容，将其转化为对应的 EventContent 结构，请不要实际调用该接口，只需要将接收到的事件内容直接使用 JSON 解析到 EventContent  即可使用。
   */
  async ParseEvent(
    req: ParseEventRequest,
    cb?: (error: string, rep: ParseEventResponse) => void
  ): Promise<ParseEventResponse> {
    return this.request("ParseEvent", req, cb)
  }

  /**
   * 获取用户所加入的团队列表
   */
  async DescribeJoinTeams(
    req: DescribeJoinTeamsRequest,
    cb?: (error: string, rep: DescribeJoinTeamsResponse) => void
  ): Promise<DescribeJoinTeamsResponse> {
    return this.request("DescribeJoinTeams", req, cb)
  }

  /**
   * 查询资源被授权的情况。
   */
  async DescribeResourceAuthorization(
    req: DescribeResourceAuthorizationRequest,
    cb?: (error: string, rep: DescribeResourceAuthorizationResponse) => void
  ): Promise<DescribeResourceAuthorizationResponse> {
    return this.request("DescribeResourceAuthorization", req, cb)
  }

  /**
   * 将云点播媒资文件导入到多媒体创作引擎媒体资源库。支持导入媒体归属团队或者个人。
   */
  async ImportMaterial(
    req: ImportMaterialRequest,
    cb?: (error: string, rep: ImportMaterialResponse) => void
  ): Promise<ImportMaterialResponse> {
    return this.request("ImportMaterial", req, cb)
  }

  /**
   * 使用 [视频合成协议](https://cloud.tencent.com/document/product/1156/51225) 合成视频，支持导出视频到 CME 云媒资或者云点播媒资。
   */
  async ExportVideoByEditorTrackData(
    req: ExportVideoByEditorTrackDataRequest,
    cb?: (error: string, rep: ExportVideoByEditorTrackDataResponse) => void
  ): Promise<ExportVideoByEditorTrackDataResponse> {
    return this.request("ExportVideoByEditorTrackData", req, cb)
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
   * 指定导出的参数，创建一个视频编码配置
   */
  async CreateVideoEncodingPreset(
    req: CreateVideoEncodingPresetRequest,
    cb?: (error: string, rep: CreateVideoEncodingPresetResponse) => void
  ): Promise<CreateVideoEncodingPresetResponse> {
    return this.request("CreateVideoEncodingPreset", req, cb)
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
   * 根据媒体 Id 删除媒体。
   */
  async DeleteMaterial(
    req: DeleteMaterialRequest,
    cb?: (error: string, rep: DeleteMaterialResponse) => void
  ): Promise<DeleteMaterialResponse> {
    return this.request("DeleteMaterial", req, cb)
  }

  /**
   * 修改媒体信息，支持修改媒体名称、分类路径、标签等信息。
   */
  async ModifyMaterial(
    req: ModifyMaterialRequest,
    cb?: (error: string, rep: ModifyMaterialResponse) => void
  ): Promise<ModifyMaterialResponse> {
    return this.request("ModifyMaterial", req, cb)
  }

  /**
     * 删除一个团队。要删除团队，必须满足以下条件：
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
   * 向一个团队中添加团队成员，并且指定成员的角色。
   */
  async AddTeamMember(
    req: AddTeamMemberRequest,
    cb?: (error: string, rep: AddTeamMemberResponse) => void
  ): Promise<AddTeamMemberResponse> {
    return this.request("AddTeamMember", req, cb)
  }

  /**
     * 移动某一个分类到另外一个分类下，也可用于分类重命名。
如果 SourceClassPath = /素材/视频/NBA，DestinationClassPath = /素材/视频/篮球
<li>当 DestinationClassPath 不存在时候，操作结果为重命名 ClassPath；</li>
<li>当 DestinationClassPath 存在时候，操作结果为产生新目录 /素材/视频/篮球/NBA</li>
     */
  async MoveClass(
    req: MoveClassRequest,
    cb?: (error: string, rep: MoveClassResponse) => void
  ): Promise<MoveClassResponse> {
    return this.request("MoveClass", req, cb)
  }

  /**
   *  创建媒体链接或分类路径链接，将源资源信息链接到目标。
   */
  async CreateLink(
    req: CreateLinkRequest,
    cb?: (error: string, rep: CreateLinkResponse) => void
  ): Promise<CreateLinkResponse> {
    return this.request("CreateLink", req, cb)
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
   * 删除指定 ID 的视频编码配置
   */
  async DeleteVideoEncodingPreset(
    req: DeleteVideoEncodingPresetRequest,
    cb?: (error: string, rep: DeleteVideoEncodingPresetResponse) => void
  ): Promise<DeleteVideoEncodingPresetResponse> {
    return this.request("DeleteVideoEncodingPreset", req, cb)
  }

  /**
   * 将团队成员从团队中删除。
   */
  async DeleteTeamMembers(
    req: DeleteTeamMembersRequest,
    cb?: (error: string, rep: DeleteTeamMembersResponse) => void
  ): Promise<DeleteTeamMembersResponse> {
    return this.request("DeleteTeamMembers", req, cb)
  }

  /**
   * 删除用户登录态，使用户登出多媒体创作引擎平台。
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
   * 修改视频编码配置信息。
   */
  async ModifyVideoEncodingPreset(
    req: ModifyVideoEncodingPresetRequest,
    cb?: (error: string, rep: ModifyVideoEncodingPresetResponse) => void
  ): Promise<ModifyVideoEncodingPresetResponse> {
    return this.request("ModifyVideoEncodingPreset", req, cb)
  }

  /**
   * 根据媒体 Id 批量获取媒体详情。
   */
  async DescribeMaterials(
    req: DescribeMaterialsRequest,
    cb?: (error: string, rep: DescribeMaterialsResponse) => void
  ): Promise<DescribeMaterialsResponse> {
    return this.request("DescribeMaterials", req, cb)
  }

  /**
     * 对云转推项目进行操作。
### 操作类型<a id="Operation"></a>
- `AddInput`（添加输入源），包括：
	- 添加直播拉流输入源，参见 [示例1](#.E7.A4.BA.E4.BE.8B1-.E6.B7.BB.E5.8A.A0.E7.9B.B4.E6.92.AD.E6.8B.89.E6.B5.81.E8.BE.93.E5.85.A5.E6.BA.90)；
	- 添加直播推流输入源，参见 [示例2](#.E7.A4.BA.E4.BE.8B2-.E6.B7.BB.E5.8A.A0.E7.9B.B4.E6.92.AD.E6.8E.A8.E6.B5.81.E8.BE.93.E5.85.A5.E6.BA.90)；
	- 添加点播拉流输入源，参见 [示例3](#.E7.A4.BA.E4.BE.8B3-.E6.B7.BB.E5.8A.A0.E7.82.B9.E6.92.AD.E6.8B.89.E6.B5.81.E8.BE.93.E5.85.A5.E6.BA.90.E4.B8.94.E5.BE.AA.E7.8E.AF.E6.92.AD.E6.94.BE)、[示例4](#.E7.A4.BA.E4.BE.8B4-.E6.B7.BB.E5.8A.A0.E7.82.B9.E6.92.AD.E6.8B.89.E6.B5.81.E8.BE.93.E5.85.A5.E6.BA.90.E4.B8.94.E5.8D.95.E6.AC.A1.E6.92.AD.E6.94.BE)；
- `DeleteInput`（删除输入源），参见 [示例5](#.E7.A4.BA.E4.BE.8B5-.E5.88.A0.E9.99.A4.E8.BE.93.E5.85.A5.E6.BA.90)；
- `ModifyInput`（修改输入源），参见 [示例6](#.E7.A4.BA.E4.BE.8B6-.E4.BF.AE.E6.94.B9.E8.BE.93.E5.85.A5.E6.BA.90)；
- `AddOutput`（ 添加输出源），参见 [示例7](#.E7.A4.BA.E4.BE.8B7-.E6.B7.BB.E5.8A.A0.E8.BE.93.E5.87.BA.E6.BA.90)；
- `DeleteOutput`（删除输出源），参见 [示例8](#.E7.A4.BA.E4.BE.8B8-.E5.88.A0.E9.99.A4.E8.BE.93.E5.87.BA.E6.BA.90)；
- `ModifyOutput`（修改输出源），参见 [示例9](#.E7.A4.BA.E4.BE.8B9-.E4.BF.AE.E6.94.B9.E8.BE.93.E5.87.BA.E6.BA.90)；
- `Start`（开启转推），参见 [示例10](#.E7.A4.BA.E4.BE.8B10-.E5.BC.80.E5.90.AF.E4.BA.91.E8.BD.AC.E6.8E.A8)；
- `Stop`（停止转推），参见 [示例11](#.E7.A4.BA.E4.BE.8B11-.E5.81.9C.E6.AD.A2.E4.BA.91.E8.BD.AC.E6.8E.A8)；
- `SwitchInput`（切换输入源），参见 [示例12](#.E7.A4.BA.E4.BE.8B12-.E5.88.87.E6.8D.A2.E8.BE.93.E5.85.A5.E6.BA.90)；
- `ModifyCurrentStopTime`（修改当前计划结束时间），参见 [示例13](#.E7.A4.BA.E4.BE.8B13-.E4.BF.AE.E6.94.B9.E8.BD.AC.E6.8E.A8.E7.BB.93.E6.9D.9F.E6.97.B6.E9.97.B4)。
     */
  async HandleStreamConnectProject(
    req: HandleStreamConnectProjectRequest,
    cb?: (error: string, rep: HandleStreamConnectProjectResponse) => void
  ): Promise<HandleStreamConnectProjectResponse> {
    return this.request("HandleStreamConnectProject", req, cb)
  }

  /**
   * 获取平台中所有的已注册账号。
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
     * <li>支持获取所创建的所有平台列表信息；</li>
<li>支持获取指定的平台列表信息。</li>

关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。


     */
  async DescribePlatforms(
    req: DescribePlatformsRequest,
    cb?: (error: string, rep: DescribePlatformsResponse) => void
  ): Promise<DescribePlatformsResponse> {
    return this.request("DescribePlatforms", req, cb)
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
   * 修改项目信息。
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
  }

  /**
   * 新增分类，用于管理素材。分类层数不能超过20。
   */
  async CreateClass(
    req: CreateClassRequest,
    cb?: (error: string, rep: CreateClassResponse) => void
  ): Promise<CreateClassResponse> {
    return this.request("CreateClass", req, cb)
  }

  /**
   *  资源所属实体对目标实体撤销目标资源的相应权限，若原本没有相应权限则不产生变更。
   */
  async RevokeResourceAuthorization(
    req: RevokeResourceAuthorizationRequest,
    cb?: (error: string, rep: RevokeResourceAuthorizationResponse) => void
  ): Promise<RevokeResourceAuthorizationResponse> {
    return this.request("RevokeResourceAuthorization", req, cb)
  }

  /**
   * 将云点播中的媒资或者用户自有媒资文件添加到项目中与项目关联，供后续视频编辑使用。目前仅视频编辑项目和智能视频拆条项目有效。
   */
  async ImportMediaToProject(
    req: ImportMediaToProjectRequest,
    cb?: (error: string, rep: ImportMediaToProjectResponse) => void
  ): Promise<ImportMediaToProjectResponse> {
    return this.request("ImportMediaToProject", req, cb)
  }

  /**
   *  浏览当前分类路径下的资源，包括媒体文件和子分类，返回媒资基础信息和分类信息。
   */
  async ListMedia(
    req: ListMediaRequest,
    cb?: (error: string, rep: ListMediaResponse) => void
  ): Promise<ListMediaResponse> {
    return this.request("ListMedia", req, cb)
  }

  /**
     * 创建多媒体创作引擎项目，目前支持的项目类型有：
<li>视频剪辑项目：用于普通视频剪辑；</li>
<li>直播剪辑项目：用于直播流剪辑；</li>
<li>导播台项目：用于云导播台；</li>
<li>视频拆条：用于视频拆条；</li>
<li>录制回放项目：用于直播录制回放；</li>
<li>云转推项目：用于直播云转推。</li>
     */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
   * 使用视频剪辑模板直接导出视频。
   */
  async ExportVideoByTemplate(
    req: ExportVideoByTemplateRequest,
    cb?: (error: string, rep: ExportVideoByTemplateResponse) => void
  ): Promise<ExportVideoByTemplateResponse> {
    return this.request("ExportVideoByTemplate", req, cb)
  }

  /**
     * 移动资源，支持跨个人或团队移动媒体以及分类。如果填写了Operator，则需要校验用户对媒体和分类资源的访问以及写权限。
<li>当原始资源为媒体时，该接口效果为将该媒体移动到目标分类下面；</li>
<li>当原始资源为分类时，该接口效果为将原始分类移动到目标分类或者是重命名。</li>
 如果 SourceResource.Resource.Id = /素材/视频/NBA，DestinationResource.Resource.Id= /素材/视频/篮球 
<li>当 DestinationResource.Resource.Id 不存在时候且原始资源与目标资源归属相同，操作结果为重命名原始分类；</li>
<li>当 DestinationResource.Resource.Id 存在时候，操作结果为产生新目录 /素材/视频/篮球/NBA</li>

     */
  async MoveResource(
    req: MoveResourceRequest,
    cb?: (error: string, rep: MoveResourceResponse) => void
  ): Promise<MoveResourceResponse> {
    return this.request("MoveResource", req, cb)
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
   * 删除项目。
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 平铺分类路径下及其子分类下的所有媒体基础信息，返回当前分类及子分类中的所有媒体的基础信息。
   */
  async FlattenListMedia(
    req: FlattenListMediaRequest,
    cb?: (error: string, rep: FlattenListMediaResponse) => void
  ): Promise<FlattenListMediaResponse> {
    return this.request("FlattenListMedia", req, cb)
  }

  /**
   * 复制一个项目，包括项目素材及轨道数据。目前仅普通剪辑及模板制作项目可复制，其它类型的项目不支持复制。
   */
  async CopyProject(
    req: CopyProjectRequest,
    cb?: (error: string, rep: CopyProjectResponse) => void
  ): Promise<CopyProjectResponse> {
    return this.request("CopyProject", req, cb)
  }

  /**
   * 获取指定团队的成员信息。支持获取指定成员的信息，同时也支持分页拉取指定团队的所有成员信息。
   */
  async DescribeTeamMembers(
    req: DescribeTeamMembersRequest,
    cb?: (error: string, rep: DescribeTeamMembersResponse) => void
  ): Promise<DescribeTeamMembersResponse> {
    return this.request("DescribeTeamMembers", req, cb)
  }
}
