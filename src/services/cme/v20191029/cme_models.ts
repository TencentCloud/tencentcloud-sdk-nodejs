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

/**
 * 音频流信息。
 */
export interface AudioStreamInfo {
  /**
   * 码率，单位：bps。
   */
  Bitrate: number

  /**
   * 采样率，单位：hz。
   */
  SamplingRate: number

  /**
   * 编码格式。
   */
  Codec: string
}

/**
 * DescribeTeams请求参数结构体
 */
export interface DescribeTeamsRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 团队 ID 列表，限30个。
   */
  TeamIds: Array<string>
}

/**
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 项目 Id。
   */
  ProjectId: string
}

/**
 * ImportMaterial返回参数结构体
 */
export interface ImportMaterialResponse {
  /**
   * 素材 Id。
   */
  MaterialId?: string

  /**
   * 素材预处理任务 ID，如果未指定发起预处理任务则为空。
   */
  PreProcessTaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTeams返回参数结构体
 */
export interface DescribeTeamsResponse {
  /**
   * 团队列表。
   */
  TeamSet?: Array<TeamInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
  /**
      * 任务状态，取值有：
<li>PROCESSING：处理中：</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
      */
  Status?: string

  /**
   * 任务进度，取值为：0~100。
   */
  Progress?: number

  /**
      * 错误码。
<li>0：成功；</li>
<li>其他值：失败。</li>
      */
  ErrCode?: number

  /**
   * 错误信息。
   */
  ErrMsg?: string

  /**
      * 任务类型，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：视频编辑项目导出。</li>
      */
  TaskType?: string

  /**
      * 导出项目输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VideoEditProjectOutput?: VideoEditProjectOutput

  /**
   * 创建时间，格式按照 ISO 8601 标准表示。
   */
  CreateTime?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVideoEditProject请求参数结构体
 */
export interface ExportVideoEditProjectRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 项目 Id。
   */
  ProjectId: string

  /**
      * 导出模板 Id，目前不支持自定义创建，只支持下面的预置模板 Id。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
      */
  Definition: number

  /**
      * 导出目标。
<li>CME：云剪，即导出为云剪素材；</li>
<li>VOD：云点播，即导出为云点播媒资。</li>
      */
  ExportDestination: string

  /**
   * 导出的云剪素材信息。指定 ExportDestination = CME 时有效。
   */
  CMEExportInfo?: CMEExportInfo

  /**
   * 导出的云点播媒资信息。指定 ExportDestination = VOD 时有效。
   */
  VODExportInfo?: VODExportInfo
}

/**
 * 分类信息
 */
export interface ClassInfo {
  /**
   * 归属者。
   */
  Owner: Entity

  /**
   * 分类路径。
   */
  ClassPath: string
}

/**
 * DeleteMaterial返回参数结构体
 */
export interface DeleteMaterialResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 整型范围
 */
export interface IntegerRange {
  /**
   * 按整形代表值的下限检索。
   */
  LowerBound: number

  /**
   * 按整形代表值的上限检索。
   */
  UpperBound: number
}

/**
 * SearchMaterial请求参数结构体
 */
export interface SearchMaterialRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 指定搜索空间，数组长度不得超过5。
   */
  SearchScopes: Array<SearchScope>

  /**
      * 素材类型，取值：
<li>AUDIO：音频；</li>
<li>VIDEO：视频 ；</li>
<li>IMAGE：图片。</li>
      */
  MaterialTypes?: Array<string>

  /**
   * 搜索文本，模糊匹配素材名称或描述信息，匹配项越多，匹配度越高，排序越优先。长度限制：15个字符。
   */
  Text?: string

  /**
   * 按画质检索，取值为：LD/SD/HD/FHD/2K/4K。
   */
  Resolution?: string

  /**
   * 按素材时长检索，单位s。
   */
  DurationRange?: IntegerRange

  /**
   * 按照素材创建时间检索。
   */
  CreateTimeRange?: TimeRange

  /**
   * 按标签检索，填入检索的标签名。
   */
  Tags?: Array<string>

  /**
   * 排序方式。Sort.Field 可选值：CreateTime。指定 Text 搜索时，将根据匹配度排序，该字段无效。
   */
  Sort?: SortBy

  /**
   * 偏移量。默认值：0。
   */
  Offset?: number

  /**
   * 返回记录条数，默认值：50。
   */
  Limit?: number

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * DeleteTeam返回参数结构体
 */
export interface DeleteTeamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevokeResourceAuthorization返回参数结构体
 */
export interface RevokeResourceAuthorizationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
   * 符合搜索条件的记录总数。
   */
  TotalCount?: number

  /**
   * 任务基础信息列表。
   */
  TaskBaseInfoSet?: Array<TaskBaseInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 项目信息。
 */
export interface ProjectInfo {
  /**
   * 项目 Id。
   */
  ProjectId: string

  /**
   * 项目名称。
   */
  Name: string

  /**
   * 画布宽高比。
   */
  AspectRatio: string

  /**
   * 项目类别。
   */
  Category: string

  /**
   * 归属者。
   */
  Owner: Entity

  /**
   * 项目封面图片地址。
   */
  CoverUrl: string

  /**
   * 项目创建时间，格式按照 ISO 8601 标准表示。
   */
  CreateTime: string

  /**
   * 项目更新时间，格式按照 ISO 8601 标准表示。
   */
  UpdateTime: string
}

/**
 * DeleteTeam请求参数结构体
 */
export interface DeleteTeamRequest {
  /**
   * 平台名称，指定访问平台。
   */
  Platform: string

  /**
   * 要删除的团队  ID。
   */
  TeamId: string

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * ModifyMaterial返回参数结构体
 */
export interface ModifyMaterialResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 链接类型的素材信息
 */
export interface LinkMaterial {
  /**
      * 链接类型取值:
<li>CLASS: 分类链接;</li>
<li> MATERIAL：素材链接。</li>
      */
  LinkType: string

  /**
      * 链接状态取值：
<li> Normal：正常 ；</li>
<li>NotFound：链接目标不存在；</li> <li>Forbidden：无权限。</li>
      */
  LinkStatus: string

  /**
      * 素材链接详细信息，当LinkType="MATERIAL"时有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LinkMaterialInfo: LinkMaterialInfo

  /**
      * 分类链接目标信息，当LinkType=“CLASS”时有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LinkClassInfo: ClassInfo
}

/**
 * 导播台项目输入信息
 */
export interface SwitcherProjectInput {
  /**
   * 导播台停止时间。
   */
  StopTime?: string

  /**
   * 导播台主监输出配置信息。
   */
  PgmOutputConfig?: SwitcherPgmOutputConfig
}

/**
 * FlattenListMedia请求参数结构体
 */
export interface FlattenListMediaRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 素材分类路径，例如填写"/a/b"，则代表平铺该分类路径下及其子分类路径下的素材信息。
   */
  ClassPath: string

  /**
   * 素材路径的归属者。
   */
  Owner: Entity

  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number

  /**
   * 返回记录条数，默认值：10，最大值：50。
   */
  Limit?: number

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * 音频素材信息
 */
export interface AudioMaterial {
  /**
   * 素材元信息。
   */
  MetaData: MediaMetaData

  /**
   * 素材媒体文件的播放 URL 地址。
   */
  MaterialUrl: string

  /**
   * 素材媒体文件的封面图片地址。
   */
  CoverUrl: string

  /**
      * 素材状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaterialStatus: MaterialStatus

  /**
   * 素材媒体文件的原始 URL 地址。
   */
  OriginalUrl: string

  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string
}

/**
 * 添加的团队成员信息
 */
export interface AddMemberInfo {
  /**
   * 团队成员 ID。
   */
  MemberId: string

  /**
   * 团队成员备注。
   */
  Remark?: string
}

/**
 * 用于描述资源的归属实体。
 */
export interface Entity {
  /**
      * 类型，取值有：
<li>PERSON：个人。</li>
<li>TEAM：团队。</li>
      */
  Type: string

  /**
   * Id，当 Type=PERSON，取值为用户 Id，当 Type=TEAM，取值为团队 Id。
   */
  Id: string
}

/**
 * 团队信息
 */
export interface TeamInfo {
  /**
   * 团队 ID。
   */
  TeamId: string

  /**
   * 团队名称。
   */
  Name: string

  /**
   * 团队成员个数
   */
  MemberCount?: number

  /**
   * 团队创建时间，格式按照 ISO 8601 标准表示。
   */
  CreateTime?: string

  /**
   * 团队最后更新时间，格式按照 ISO 8601 标准表示。
   */
  UpdateTime: string
}

/**
 * ExportVideoByEditorTrackData请求参数结构体
 */
export interface ExportVideoByEditorTrackDataRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
      * 导出模板 Id，目前不支持自定义创建，只支持下面的预置模板 Id。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
      */
  Definition: number

  /**
      * 导出目标。
<li>CME：云剪，即导出为云剪素材；</li>
<li>VOD：云点播，即导出为云点播媒资。</li>
      */
  ExportDestination: string

  /**
   * 在线编辑轨道数据。
   */
  TrackData: string

  /**
   * 导出的云剪素材信息。指定 ExportDestination = CME 时有效。
   */
  CMEExportInfo?: CMEExportInfo

  /**
   * 导出的云点播媒资信息。指定 ExportDestination = VOD 时有效。
   */
  VODExportInfo?: VODExportInfo

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * 素材标签信息
 */
export interface MaterialTagInfo {
  /**
      * 标签类型，取值为：
<li>PRESET：预置标签；</li>
      */
  Type: string

  /**
   * 标签 Id 。当标签类型为 PRESET 时，标签 Id 为预置标签 Id 。
   */
  Id: string

  /**
   * 标签名称。
   */
  Name: string
}

/**
 * 项目导出信息。
 */
export interface VideoEditProjectOutput {
  /**
   * 导出的云剪素材 MaterialId，仅当导出为云剪素材时有效。
   */
  MaterialId: string

  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string

  /**
   * 导出的媒资 URL。
   */
  URL: string

  /**
      * 元信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MetaData: MediaMetaData
}

/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
      * 项目类别，取值有：
<li>VIDEO_EDIT：视频编辑。</li>
<li>SWITCHER：导播台。</li>
      */
  Category: string

  /**
   * 项目名称，不可超过30个字符。
   */
  Name: string

  /**
      * 画布宽高比，取值有：
<li>16:9；</li>
<li>9:16。</li>
      */
  AspectRatio: string

  /**
   * 归属者。
   */
  Owner: Entity

  /**
   * 项目描述信息。
   */
  Description?: string

  /**
   * 导播台信息，仅当项目类型为 SWITCHER 时有效。
   */
  SwitcherProjectInput?: SwitcherProjectInput
}

/**
 * ModifyMaterial请求参数结构体
 */
export interface ModifyMaterialRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 素材 Id。
   */
  MaterialId: string

  /**
   * 素材归属。
   */
  Owner: Entity

  /**
   * 素材名称，不能超过30个字符。
   */
  Name?: string

  /**
   * 素材分类路径，例如填写"/a/b"，则代表该素材存储的路径为"/a/b"。
   */
  ClassPath?: string

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * 授权者
 */
export interface Authorizer {
  /**
      * 授权者类型，取值有：
<li>PERSON：个人。</li>
<li>TEAM：团队。</li>
      */
  Type: string

  /**
   * Id，当 Type=PERSON，取值为用户 Id。当Type=TEAM，取值为团队 ID。
   */
  Id: string
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 项目 Id。
   */
  ProjectId?: string

  /**
      * 任务类型集合，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：视频编辑项目导出。</li>
      */
  TaskTypeSet?: Array<string>

  /**
      * 任务状态集合，取值有：
<li>PROCESSING：处理中；</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
      */
  StatusSet?: Array<string>

  /**
   * 分页返回的起始偏移量，默认值：0。
   */
  Offset?: number

  /**
   * 分页返回的记录条数，默认值：10。
   */
  Limit?: number
}

/**
 * 时间范围
 */
export interface TimeRange {
  /**
   * 开始时间，使用 ISO 日期格式。
   */
  StartTime: string

  /**
   * 结束时间，使用 ISO 日期格式。
   */
  EndTime: string
}

/**
 * DescribeLoginStatus请求参数结构体
 */
export interface DescribeLoginStatusRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 用户 Id 列表，N 从 0 开始取值，最大 19。
   */
  UserIds: Array<string>
}

/**
 * DeleteLoginStatus返回参数结构体
 */
export interface DeleteLoginStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于描述资源
 */
export interface Resource {
  /**
      * 类型，取值有：
<li>MATERIAL：素材。</li>
<li>CLASS：分类。</li>
      */
  Type: string

  /**
   * 资源 Id，当 Type 为 MATERIAL 时，取值为素材 Id；当 Type 为 CLASS 时，取值为分类路径 ClassPath。
   */
  Id: string
}

/**
 * CreateLink返回参数结构体
 */
export interface CreateLinkResponse {
  /**
   * 新建链接的素材 Id。
   */
  MaterialId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListMedia返回参数结构体
 */
export interface ListMediaResponse {
  /**
   * 符合条件的素材记录总数。
   */
  MaterialTotalCount?: number

  /**
   * 浏览分类路径下的素材列表信息。
   */
  MaterialInfoSet?: Array<MaterialInfo>

  /**
   * 浏览分类路径下的一级子类。
   */
  ClassInfoSet?: Array<ClassInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchMaterial返回参数结构体
 */
export interface SearchMaterialResponse {
  /**
   * 符合记录总条数。
   */
  TotalCount?: number

  /**
   * 素材信息，仅返回基础信息。
   */
  MaterialInfoSet?: Array<MaterialInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeJoinTeams请求参数结构体
 */
export interface DescribeJoinTeamsRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 团队成员　ID。
   */
  MemberId: string

  /**
   * 分页偏移量，默认值：0
   */
  Offset?: number

  /**
   * 返回记录条数，默认值：30，最大值：30。
   */
  Limit?: number
}

/**
 * DeleteMaterial请求参数结构体
 */
export interface DeleteMaterialRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 素材 Id。
   */
  MaterialId: string

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * 项目 Id。
   */
  ProjectId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClass请求参数结构体
 */
export interface DeleteClassRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 归属者。
   */
  Owner: Entity

  /**
   * 分类路径。
   */
  ClassPath: string

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * CreateLink请求参数结构体
 */
export interface CreateLinkRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
      * 链接类型，取值有:
<li>CLASS: 分类链接；</li>
<li> MATERIAL：素材链接。</li>
      */
  Type: string

  /**
   * 链接名称，不能超过30个字符。
   */
  Name: string

  /**
   * 链接归属实体。
   */
  Owner: Entity

  /**
      * 目标资源Id。取值：
<li>当 Type 为 MATERIAL 时填素材 ID；</li>
<li>当 Type 为 CLASS 时填写分类路径。</li>
      */
  DestinationId: string

  /**
   * 目标资源归属者。
   */
  DestinationOwner: Entity

  /**
   * 链接的分类路径，如填"/a/b"则代表链接属于该分类路径，不填则默认为根路径。
   */
  ClassPath?: string

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * CreateClass请求参数结构体
 */
export interface CreateClassRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 归属者。
   */
  Owner: Entity

  /**
   * 分类路径。
   */
  ClassPath: string

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * DescribeMaterials返回参数结构体
 */
export interface DescribeMaterialsResponse {
  /**
   * 素材列表信息。
   */
  MaterialInfoSet?: Array<MaterialInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GrantResourceAuthorization返回参数结构体
 */
export interface GrantResourceAuthorizationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 导播台主监输出配置信息
 */
export interface SwitcherPgmOutputConfig {
  /**
      * 导播台输出模板 ID，可取值：
<li>10001：分辨率为1080 P；</li>
<li>10002：分辨率为720 P；</li>
<li>10003：分辨率为480 P。</li>
      */
  TemplateId?: number

  /**
   * 导播台输出宽。
   */
  Width?: number

  /**
   * 导播台输出高。
   */
  Height?: number

  /**
   * 导播台输出帧率。
   */
  Fps?: number

  /**
   * 导播台输出码率。
   */
  BitRate?: number
}

/**
 * 云剪导出信息。
 */
export interface CMEExportInfo {
  /**
   * 导出的归属者。
   */
  Owner: Entity

  /**
   * 导出的素材名称，不得超过30个字符。
   */
  Name?: string

  /**
   * 导出的素材信息，不得超过50个字符。
   */
  Description?: string

  /**
   * 导出的素材分类路径，长度不能超过15字符。
   */
  ClassPath?: string

  /**
   * 导出的素材标签，单个标签不得超过10个字符。
   */
  TagSet?: Array<string>
}

/**
 * ImportMediaToProject请求参数结构体
 */
export interface ImportMediaToProjectRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 项目 Id。
   */
  ProjectId: string

  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string

  /**
   * 素材名称，不能超过30个字符。
   */
  Name?: string

  /**
      * 素材预处理任务模板 ID，取值：
<li>10：进行编辑预处理。</li>
注意：如果填0则不进行处理。
      */
  PreProcessDefinition?: number
}

/**
 * 云点播导出信息。
 */
export interface VODExportInfo {
  /**
   * 导出的媒资名称。
   */
  Name?: string

  /**
   * 导出的媒资分类 Id。
   */
  ClassId?: number
}

/**
 * 排序
 */
export interface SortBy {
  /**
   * 排序字段。
   */
  Field: string

  /**
   * 排序方式，可选值：Asc（升序）、Desc（降序），默认降序。
   */
  Order?: string
}

/**
 * 图片素材信息
 */
export interface ImageMaterial {
  /**
   * 图片高度，单位：px。
   */
  Height: number

  /**
   * 图片宽度，单位：px。
   */
  Width: number

  /**
   * 素材媒体文件的展示 URL 地址。
   */
  MaterialUrl: string

  /**
   * 图片大小，单位：字节。
   */
  Size: number

  /**
   * 素材媒体文件的原始 URL 地址。
   */
  OriginalUrl: string

  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string
}

/**
 * DescribeClass请求参数结构体
 */
export interface DescribeClassRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 归属者。
   */
  Owner: Entity

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * MoveClass请求参数结构体
 */
export interface MoveClassRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 归属者。
   */
  Owner: Entity

  /**
   * 源分类路径。
   */
  SourceClassPath: string

  /**
   * 目标分类路径。
   */
  DestinationClassPath: string

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * DeleteTeamMembers返回参数结构体
 */
export interface DeleteTeamMembersResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MoveClass返回参数结构体
 */
export interface MoveClassResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportMediaToProject返回参数结构体
 */
export interface ImportMediaToProjectResponse {
  /**
   * 素材 Id。
   */
  MaterialId?: string

  /**
   * 素材预处理任务 ID，如果未指定发起预处理任务则为空。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTeamMember返回参数结构体
 */
export interface ModifyTeamMemberResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTeamMembers返回参数结构体
 */
export interface DescribeTeamMembersResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number

  /**
   * 团队成员列表。
   */
  MemberSet?: Array<TeamMemberInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddTeamMember返回参数结构体
 */
export interface AddTeamMemberResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTeam返回参数结构体
 */
export interface CreateTeamResponse {
  /**
   * 创建的团队 ID。
   */
  TeamId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTeam请求参数结构体
 */
export interface ModifyTeamRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 团队 ID。
   */
  TeamId: string

  /**
   * 团队名称，不能超过 30 个字符。
   */
  Name?: string

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * ModifyTeamMember请求参数结构体
 */
export interface ModifyTeamMemberRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 团队 ID。
   */
  TeamId: string

  /**
   * 团队成员 ID。
   */
  MemberId: string

  /**
   * 成员备注，允许设置备注为空，不为空时长度不能超过15个字符。
   */
  Remark?: string

  /**
      * 成员角色，取值：
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
      */
  Role?: string

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * CreateTeam请求参数结构体
 */
export interface CreateTeamRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 团队名称，限30个字符。
   */
  Name: string

  /**
   * 团队所有者，指定用户 ID。
   */
  OwnerId: string

  /**
   * 团队所有者的备注，限30个字符。
   */
  OwnerRemark?: string

  /**
   * 自定义团队 ID。创建后不可修改，限20个英文字符及"-"。同时不能以 cmetid_开头。不填会生成默认团队 ID。
   */
  TeamId?: string
}

/**
 * 素材基本信息。
 */
export interface MaterialBasicInfo {
  /**
   * 素材 Id。
   */
  MaterialId: string

  /**
   * 素材类型，取值为：音频（AUDIO）、视频（VIDEO）、图片（IMAGE）、链接（LINK）、字幕 （SUBTITLE）、转场（TRANSITION）、滤镜（FILTER）、文本文字（TEXT）、图文动效（TEXT_IMAGE）。
   */
  MaterialType: string

  /**
   * 素材归属实体。
   */
  Owner: Entity

  /**
   * 素材名称。
   */
  Name: string

  /**
   * 素材文件的创建时间，使用 ISO 日期格式。
   */
  CreateTime: string

  /**
   * 素材文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 ISO 日期格式。
   */
  UpdateTime: string

  /**
   * 素材的分类目录路径。
   */
  ClassPath: string

  /**
      * 素材绑定的标签信息列表 。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagInfoSet: Array<MaterialTagInfo>

  /**
   * 素材媒体文件的预览图。
   */
  PreviewUrl: string
}

/**
 * 加入的团队信息
 */
export interface JoinTeamInfo {
  /**
   * 团队 ID。
   */
  TeamId: string

  /**
   * 团队名称。
   */
  Name: string

  /**
   * 团队成员个数
   */
  MemberCount: number

  /**
      * 成员在团队中的角色，取值有：
<li>Owner：团队所有者，添加团队成员及修改团队成员解决时不能填此角色；</li>
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
      */
  Role: string
}

/**
 * DescribeResourceAuthorization请求参数结构体
 */
export interface DescribeResourceAuthorizationRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 归属者。
   */
  Owner: Entity

  /**
   * 资源。
   */
  Resource: Resource

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * CreateClass返回参数结构体
 */
export interface CreateClassResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频流信息。
 */
export interface VideoStreamInfo {
  /**
   * 码率，单位：bps。
   */
  Bitrate: number

  /**
   * 高度，单位：px。
   */
  Height: number

  /**
   * 宽度，单位：px。
   */
  Width: number

  /**
   * 编码格式。
   */
  Codec: string

  /**
   * 帧率，单位：hz。
   */
  Fps: number
}

/**
 * AddTeamMember请求参数结构体
 */
export interface AddTeamMemberRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 团队 ID。
   */
  TeamId: string

  /**
   * 要添加的成员列表，一次最多添加30个成员。
   */
  TeamMembers: Array<AddMemberInfo>

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * ExportVideoEditProject返回参数结构体
 */
export interface ExportVideoEditProjectResponse {
  /**
   * 任务 Id。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListMedia请求参数结构体
 */
export interface ListMediaRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 素材分类路径，例如填写"/a/b"，则代表浏览该分类路径下的素材和子分类信息。
   */
  ClassPath: string

  /**
   * 素材和分类的归属者。
   */
  Owner: Entity

  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number

  /**
   * 返回记录条数，默认值：10，最大值：50。
   */
  Limit?: number

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * ModifyTeam返回参数结构体
 */
export interface ModifyTeamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLoginStatus请求参数结构体
 */
export interface DeleteLoginStatusRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 用户 Id 列表，N 从 0 开始取值，最大 19。
   */
  UserIds: Array<string>
}

/**
 * DeleteTeamMembers请求参数结构体
 */
export interface DeleteTeamMembersRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 团队 ID。
   */
  TeamId: string

  /**
   * 要删除的成员列表。
   */
  MemberIds: Array<string>

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * DescribeSharedSpace返回参数结构体
 */
export interface DescribeSharedSpaceResponse {
  /**
   * 查询到的共享空间总数。
   */
  TotalCount?: number

  /**
      * 各个共享空间对应的授权者信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AuthorizerSet?: Array<Authorizer>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 搜索空间
 */
export interface SearchScope {
  /**
   * 分类路径归属。
   */
  Owner: Entity

  /**
   * 按分类路径检索。 不填则默认按根分类路径检索。
   */
  ClassPath?: string
}

/**
 * 视频素材信息
 */
export interface VideoMaterial {
  /**
   * 素材元信息。
   */
  MetaData: MediaMetaData

  /**
   * 雪碧图信息。
   */
  ImageSpriteInfo: MediaImageSpriteInfo

  /**
   * 素材媒体文件的播放 URL 地址。
   */
  MaterialUrl: string

  /**
   * 素材媒体文件的封面图片地址。
   */
  CoverUrl: string

  /**
   * 媒体文件分辨率。取值为：LD/SD/HD/FHD/2K/4K。
   */
  Resolution: string

  /**
      * 素材状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaterialStatus: MaterialStatus

  /**
   * 素材媒体文件的原始 URL 地址。
   */
  OriginalUrl: string

  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string
}

/**
 * DescribeResourceAuthorization返回参数结构体
 */
export interface DescribeResourceAuthorizationResponse {
  /**
      * 符合条件的资源授权记录总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 授权信息列表。
   */
  AuthorizationInfoSet?: Array<AuthorizationInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FlattenListMedia返回参数结构体
 */
export interface FlattenListMediaResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number

  /**
   * 该分类路径下及其子分类下的所有素材。
   */
  MaterialInfoSet?: Array<MaterialInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjects请求参数结构体
 */
export interface DescribeProjectsRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 项目 Id 列表，N 从 0 开始取值，最大 19。
   */
  ProjectIds?: Array<string>

  /**
   * 画布宽高比集合。
   */
  AspectRatioSet?: Array<string>

  /**
   * 项目类别集合。
   */
  CategorySet?: Array<string>

  /**
      * 列表排序，支持下列排序字段：
<li>CreateTime：创建时间；</li>
<li>UpdateTime：更新时间。</li>
      */
  Sort?: SortBy

  /**
   * 项目归属者。
   */
  Owner?: Entity

  /**
   * 分页返回的起始偏移量，默认值：0。
   */
  Offset?: number

  /**
   * 分页返回的记录条数，默认值：10。
   */
  Limit?: number
}

/**
 * DescribeLoginStatus返回参数结构体
 */
export interface DescribeLoginStatusResponse {
  /**
   * 用户登录状态列表。
   */
  LoginStatusInfoSet?: Array<LoginStatusInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 团队成员信息
 */
export interface TeamMemberInfo {
  /**
   * 团队成员 ID。
   */
  MemberId: string

  /**
   * 团队成员备注。
   */
  Remark?: string

  /**
      * 团队成员角色，取值：
<li>Owner：团队所有者，添加团队成员及修改团队成员解决时不能填此角色；</li>
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
      */
  Role?: string
}

/**
 * DescribeJoinTeams返回参数结构体
 */
export interface DescribeJoinTeamsResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number

  /**
   * 团队列表
   */
  TeamSet?: Array<JoinTeamInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTeamMembers请求参数结构体
 */
export interface DescribeTeamMembersRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 团队 ID。
   */
  TeamId: string

  /**
   * 成员 ID 列表，限指定30个指定成员。
   */
  MemberIds?: Array<string>

  /**
   * 分页偏移量，默认值：0
   */
  Offset?: number

  /**
   * 返回记录条数，默认值：30，最大值：30。
   */
  Limit?: number

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * 素材的状态，目前仅包含素材编辑可用状态。
 */
export interface MaterialStatus {
  /**
      * 素材编辑可用状态，取值有：
<li>NORMAL：正常，可直接用于编辑；</li>
<li>ABNORMAL : 异常，不可用于编辑；</li>
<li>PROCESSING：处理中，暂不可用于编辑。</li>
      */
  EditorUsableStatus: string
}

/**
 * 雪碧图
 */
export interface MediaImageSpriteInfo {
  /**
   * 雪碧图小图的高度。
   */
  Height: number

  /**
   * 雪碧图小图的宽度。
   */
  Width: number

  /**
   * 雪碧图小图的总数量。
   */
  TotalCount: number

  /**
   * 截取雪碧图输出的地址。
   */
  ImageUrlSet: Array<string>

  /**
   * 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
   */
  WebVttUrl: string
}

/**
 * 资源权限信息
 */
export interface AuthorizationInfo {
  /**
   * 被授权者实体。
   */
  Authorizee: Entity

  /**
      * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
      */
  PermissionSet: Array<string>
}

/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevokeResourceAuthorization请求参数结构体
 */
export interface RevokeResourceAuthorizationRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 资源所属实体。
   */
  Owner: Entity

  /**
   * 被授权资源。
   */
  Resources: Array<Resource>

  /**
   * 被授权目标实体。
   */
  Authorizees: Array<Entity>

  /**
      * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
      */
  Permissions: Array<string>

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 任务 Id。
   */
  TaskId: string
}

/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 项目 Id。
   */
  ProjectId: string

  /**
   * 项目名称，不可超过30个字符。
   */
  Name?: string

  /**
      * 画布宽高比，取值有：
<li>16:9；</li>
<li>9:16。</li>
      */
  AspectRatio?: string

  /**
   * 归属者。
   */
  Owner?: Entity
}

/**
 * 素材详情信息
 */
export interface MaterialInfo {
  /**
   * 素材基本信息。
   */
  BasicInfo: MaterialBasicInfo

  /**
      * 视频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VideoMaterial: VideoMaterial

  /**
      * 音频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioMaterial: AudioMaterial

  /**
      * 图片素材信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageMaterial: ImageMaterial

  /**
      * 链接素材信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LinkMaterial: LinkMaterial
}

/**
 * 登录态信息
 */
export interface LoginStatusInfo {
  /**
   * 用户 Id。
   */
  UserId: string

  /**
      * 用户登录状态。
<li>Online：在线；</li>
<li>Offline：离线。</li>
      */
  Status: string
}

/**
 * DescribeClass返回参数结构体
 */
export interface DescribeClassResponse {
  /**
   * 分类信息列表。
   */
  ClassInfoSet?: Array<ClassInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件元信息。
 */
export interface MediaMetaData {
  /**
   * 大小。
   */
  Size: number

  /**
   * 容器类型。
   */
  Container: string

  /**
   * 视频流码率平均值与音频流码率平均值之和，单位：bps。
   */
  Bitrate: number

  /**
   * 视频流高度的最大值，单位：px。
   */
  Height: number

  /**
   * 视频流宽度的最大值，单位：px。
   */
  Width: number

  /**
   * 时长，单位：秒。
   */
  Duration: number

  /**
   * 视频拍摄时的选择角度，单位：度
   */
  Rotate: number

  /**
   * 视频流信息。
   */
  VideoStreamInfoSet: Array<VideoStreamInfo>

  /**
   * 音频流信息。
   */
  AudioStreamInfoSet: Array<AudioStreamInfo>
}

/**
 * DescribeSharedSpace请求参数结构体
 */
export interface DescribeSharedSpaceRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 被授权目标实体。
   */
  Authorizee: Entity

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * 任务基础信息。
 */
export interface TaskBaseInfo {
  /**
   * 任务 Id。
   */
  TaskId: string

  /**
      * 任务类型，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：项目导出。</li>
      */
  TaskType: string

  /**
      * 任务状态，取值有：
<li>PROCESSING：处理中：</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
      */
  Status: string

  /**
   * 任务进度，取值为：0~100。
   */
  Progress: number

  /**
      * 错误码。
<li>0：成功；</li>
<li>其他值：失败。</li>
      */
  ErrCode: number

  /**
   * 错误信息。
   */
  ErrMsg: string

  /**
   * 创建时间，格式按照 ISO 8601 标准表示。
   */
  CreateTime: string
}

/**
 * DeleteClass返回参数结构体
 */
export interface DeleteClassResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GrantResourceAuthorization请求参数结构体
 */
export interface GrantResourceAuthorizationRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 资源所属实体。
   */
  Owner: Entity

  /**
   * 被授权资源。
   */
  Resources: Array<Resource>

  /**
   * 被授权目标实体。
   */
  Authorizees: Array<Entity>

  /**
      * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
      */
  Permissions: Array<string>

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * 链接素材信息
 */
export interface LinkMaterialInfo {
  /**
   * 素材基本信息。
   */
  BasicInfo: MaterialBasicInfo

  /**
      * 视频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VideoMaterial: VideoMaterial

  /**
      * 音频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioMaterial: AudioMaterial

  /**
      * 图片素材信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageMaterial: ImageMaterial
}

/**
 * ExportVideoByEditorTrackData返回参数结构体
 */
export interface ExportVideoByEditorTrackDataResponse {
  /**
   * 任务 Id。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number

  /**
   * 项目信息列表。
   */
  ProjectInfoSet?: Array<ProjectInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportMaterial请求参数结构体
 */
export interface ImportMaterialRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string

  /**
   * 素材归属者。
   */
  Owner: Entity

  /**
   * 素材名称，不能超过30个字符。
   */
  Name: string

  /**
   * 素材分类路径，形如："/a/b"，层级数不能超过10，每个层级长度不能超过15字符。若不填则默认为根路径。
   */
  ClassPath?: string

  /**
      * 素材预处理任务模板 ID。取值：
<li>10：进行编辑预处理。</li>
      */
  PreProcessDefinition?: number

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * DescribeMaterials请求参数结构体
 */
export interface DescribeMaterialsRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string

  /**
   * 素材 ID 列表，N 从 0 开始取值，最大 19。
   */
  MaterialIds: Array<string>

  /**
      * 列表排序，支持下列排序字段：
<li>CreateTime：创建时间；</li>
<li>UpdateTime：更新时间。</li>
      */
  Sort?: SortBy

  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}
