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

/**
 * weda用户
 */
export interface WedaUser {
  /**
   * 腾讯云主账号uin
   */
  Uin?: number
  /**
   * 名字
   */
  Name?: string
  /**
   * 环境
   */
  Env?: number
  /**
   * 类型
   */
  Type?: number
  /**
   * 昵称
   */
  NickName?: string
  /**
   * 邮箱
   */
  Email?: string
  /**
   * 手机号
   */
  Phone?: string
  /**
   * 项目id
   */
  ProjectId?: number
  /**
   * 用户uuid
   */
  Uuid?: string
  /**
   * 渠道，1:自建；2:企业微信导入
   */
  Source?: number
  /**
   * 微信openid
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenId?: string
  /**
   * 关联角色
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelatedRoles?: Array<WedaRole>
  /**
   * 企业微信userid
注意：此字段可能返回 null，表示取不到有效值。
   */
  WechatUserId?: string
  /**
   * 内部用户类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternalUserType?: number
  /**
   * 微搭用户id
   */
  UserId?: number
  /**
   * 所属部门名称
   */
  OrgName?: string
  /**
   * 用户schema
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserSchema?: string
  /**
   * 用户扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserExtend?: string
  /**
   * 用户是否授权License
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLicensed?: boolean
  /**
   * 权限组数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelatedRoleGroups?: Array<RoleGroup>
  /**
   * 兼岗部门
注意：此字段可能返回 null，表示取不到有效值。
   */
  Orgs?: Array<OrgResp>
  /**
   * 主岗部门
注意：此字段可能返回 null，表示取不到有效值。
   */
  MainOrg?: Array<OrgResp>
  /**
   * 直属上级
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentUserId?: number
  /**
   * 主列字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrimaryColumn?: string
  /**
   * 用户头像
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvatarUrl?: string
  /**
   * 最后登录时间
   */
  LastLoginTime?: string
}

/**
 * DescribeKnowledgeSetList请求参数结构体
 */
export interface DescribeKnowledgeSetListRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 知识库标识，精准查询
   */
  Name?: string
  /**
   * 知识库名称，精准查询
   */
  Title?: string
  /**
   * 分页起始位
   */
  Offset?: number
  /**
   * 查询条数
   */
  Limit?: number
  /**
   * NoPage标识不分页
   */
  QueryMode?: string
}

/**
 * 文档信息
 */
export interface KnowledgeDocumentSetInfo {
  /**
   * 文件的字符数。
   */
  TextLength?: number
  /**
   * 文件的字节数。
   */
  ByteLength?: number
  /**
   * 文件被预处理、Embedding 向量化的进度。
   */
  IndexedProgress?: number
  /**
   * 文件预处理、Embedding 向量化的状态。
New：等待解析。
Loading：文件解析中。
Failure：文件解析、写入出错。
Ready：文件解析、写入完成。

   */
  IndexedStatus?: string
  /**
   * 文件创建时间。
   */
  CreateTime?: string
  /**
   * 文件最后更新时间。
   */
  LastUpdateTime?: string
  /**
   * 文件关键字。
   */
  Keywords?: string
}

/**
 * 删除文档出参
 */
export interface DeleteKnowledgeDocumentSetRsp {
  /**
   * 删除文档数量。
   */
  AffectedCount?: number
}

/**
 * UploadKnowledgeDocumentSet请求参数结构体
 */
export interface UploadKnowledgeDocumentSetRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 知识库标识
   */
  CollectionView: string
  /**
   * 状态;ENABLED启用；NOT_ENABLED不启用
   */
  FileName: string
  /**
   * 腾讯云文件存储位置的可读地址
   */
  CosUrl: string
  /**
   * 文件类型，例如: .docx, .md
   */
  DocumentType?: string
  /**
   * 对文件的描述
   */
  DocumentDesc?: string
  /**
   * 文件标题
   */
  FileTitle?: string
  /**
   * 文件元信息，为jsonstring
   */
  FileMetaData?: string
  /**
   * 文件id
   */
  DocumentSetId?: string
  /**
   * 使用 regex 分割文档
   */
  Delimiter?: string
  /**
   * Cos存储文件ID
   */
  FileId?: string
}

/**
 * UpdateKnowledgeSet返回参数结构体
 */
export interface UpdateKnowledgeSetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApps请求参数结构体
 */
export interface DescribeAppsRequest {
  /**
   * 分页每页个数
   */
  Limit: number
  /**
   * 分页Offset
   */
  Offset: number
  /**
   * 环境id
   */
  EnvId?: string
  /**
   * 搜索关键词
   */
  Keyword?: string
  /**
   * 应用id
   */
  AppIds?: Array<string>
  /**
   * 来源类型
   */
  Channel?: string
  /**
   * 1-自定义应用；2-模型应用
   */
  Type?: number
  /**
   * 应用是否收藏
   */
  Favorite?: boolean
}

/**
 * DescribeKnowledgeDocumentSetList返回参数结构体
 */
export interface DescribeKnowledgeDocumentSetListResponse {
  /**
   * 新增文件返回信息
   */
  Data?: DescribeKnowledgeDocumentSetListRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAppBindWxApp返回参数结构体
 */
export interface DeleteAppBindWxAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源模糊查询参数
 */
export interface DataSourceQueryOption {
  /**
   * 数据源标识模糊匹配
   */
  LikeName?: string
  /**
   * 数据源名称模糊匹配
   */
  LikeTitle?: string
}

/**
 * 权限组
 */
export interface RoleGroup {
  /**
   * 权限组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: number
  /**
   * 权限组名称
   */
  Name: string
  /**
   * 权限组标识
   */
  GroupIdentity: string
  /**
   * 权限组描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupDesc: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: string
  /**
   * 角色数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleList: Array<WedaRole>
}

/**
 * 查询条件
 */
export interface PageQuery {
  /**
   * 文件id数组，表示要查询的文件的所有 ID，支持批量查询，数组元素范围[1,20]。
   */
  DocumentSetId?: Array<string>
  /**
   * 表示要查询的文档名称，支持批量查询，数组元素范围[1,20]。
   */
  DocumentSetName?: Array<string>
  /**
   * 取值范围：[1,16384]
   */
  Limit?: number
  /**
   * 设置分页偏移量，用于控制分页查询返回结果的起始位置，方便用户对数据进行分页展示和浏览。
取值：为 limit 整数倍。
计算公式：offset=limit*(page-1)。
例如：当 limit = 10，page = 2 时，分页偏移量 offset = 10 * (2 - 1) = 10，表示从查询结果的第 11 条记录开始返回数据。

   */
  Offset?: number
  /**
   * 设置后，其他字段为空值
   */
  OutputFields?: Array<string>
  /**
   * 使用创建 CollectionView 指定的 Filter 索引的字段设置查询过滤表达式。
   */
  Filter?: string
}

/**
 * CheckDeployApp返回参数结构体
 */
export interface CheckDeployAppResponse {
  /**
   * 状态：success、building、reviewFail、releaseSuccess、underReview
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchDocList返回参数结构体
 */
export interface SearchDocListResponse {
  /**
   * 知识库文档搜索数据
   */
  Data?: SearchDocRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源关联的的信息
 */
export interface RelationField {
  /**
   * 关联关系字段
   */
  Field?: string
  /**
   * 关联关系格式
   */
  Format?: string
  /**
   * 关联数据源名称
   */
  RelateDataSourceName?: string
}

/**
 * CheckDeployApp请求参数结构体
 */
export interface CheckDeployAppRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 应用id
   */
  Id: string
  /**
   * 构建 Id
   */
  BuildId: string
}

/**
 * DescribeKnowledgeDocumentSetList请求参数结构体
 */
export interface DescribeKnowledgeDocumentSetListRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 知识库标识
   */
  CollectionView: string
  /**
   * 查询条件
   */
  Query?: PageQuery
}

/**
 * 上传知识库文档返回结果
 */
export interface UploadKnowledgeDocumentSetRsp {
  /**
   * 给文件分配的 ID 信息。
   * @deprecated
   */
  DocumentSetId?: string
  /**
   * 文件名
   */
  DocumentSetName?: string
  /**
   * 文件标题
   */
  FileTitle?: string
  /**
   * 文件元信息，为jsonstring
   */
  FileMetaData?: string
  /**
   * Cos存储文件ID
   */
  FileId?: string
}

/**
 * PutWxAppIdToWeApp请求参数结构体
 */
export interface PutWxAppIdToWeAppRequest {
  /**
   * 应用ID
   */
  WeAppId: string
  /**
   * 微信AppId
   */
  WxAppId: string
}

/**
 * 删除文档时查询入参
 */
export interface DocumentQuery {
  /**
   * 文件ids
   */
  DocumentSetId?: Array<string>
  /**
   * 文件名集合
   */
  DocumentSetName?: Array<string>
  /**
   * 使用创建 CollectionView 指定的 Filter 索引的字段设置查询过滤表达式
   */
  Filter?: string
}

/**
 * 低码应用详情
 */
export interface Weapp {
  /**
   * 应用id
   */
  Id?: string
  /**
   * 应用所属者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 标识
   */
  Name?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 应用名称
   */
  Title?: string
  /**
   * 环境信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env?: string
  /**
   * 状态.
0:已经安装
3:安装中
4:安装失败
   */
  Status?: number
  /**
   * 环境信息
   */
  EnvId?: string
  /**
   * 环境地域
   */
  EnvRegion?: string
  /**
   * 资源包
   */
  PkgId?: string
  /**
   * 应用信息是否安装到cms
注意：此字段可能返回 null，表示取不到有效值。
   */
  CmsProject?: number
  /**
   * 渠道
注意：此字段可能返回 null，表示取不到有效值。
   */
  Channel?: string
  /**
   * 模板id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * 是否计费应用
   */
  IsFree?: boolean
  /**
   * 应用内容类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContentType?: string
  /**
   * 应用类型，是否为B端应用
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppType?: number
  /**
   * 关联B端一样id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttachAppId?: string
  /**
   * 应用类型，是否为企业应用
注意：此字段可能返回 null，表示取不到有效值。
   */
  EType?: number
  /**
   * 企业应用数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  EData?: string
  /**
   * 最新一次小程序构建id
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastMpCiId?: string
  /**
   * 最新一次小程序状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastMpCiStatus?: string
  /**
   * 最新一次web构建id
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastWebCiId?: string
  /**
   * 最新一次web状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastWebCiStatus?: string
  /**
   * 最新部署时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastDeployTime?: string
  /**
   * 安装任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 任务详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobInfo?: AppJobInfo
  /**
   * 应用端
注意：此字段可能返回 null，表示取不到有效值。
   */
  Platform?: string
  /**
   * 最新一次web构建模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastWebCiMode?: number
  /**
   * 最新一次小程序构建模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastMpCiMode?: number
  /**
   * 应用场景化入口类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SceneType?: string
  /**
   * client_Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientId?: string
  /**
   * 图标地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  IconUrl?: string
  /**
   * 页面图标地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  FaviconUrl?: string
  /**
   * 图标背景色
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackgroundColor?: string
  /**
   * 应用是否收藏
   */
  Favorite?: boolean
  /**
   * 发布平台：web、mp、pc、adminPortal、xPagePC、cloudAdmin
   */
  PublishPlatform?: string
}

/**
 * UpdateKnowledgeSet请求参数结构体
 */
export interface UpdateKnowledgeSetRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 知识库标识
   */
  Name: string
  /**
   * 知识库名称
   */
  Title?: string
  /**
   * 描述
   */
  Desc?: string
  /**
   * 状态;ENABLED启用；NOT_ENABLED不启用
   */
  Active?: string
  /**
   * 知识库的meta信息
   */
  Meta?: string
}

/**
 * 角色分页
 */
export interface RoleListPage {
  /**
   * 角色列表
   */
  RoleList: Array<WedaRole>
  /**
   * 总数
   */
  Total: number
}

/**
 * 知识库搜索文档信息
 */
export interface SearchDocInfo {
  /**
   * 知识库名称
   */
  CollectionViewName?: string
  /**
   * 文档Id
   */
  DocSetId?: string
  /**
   * 文档Name
   */
  DocSetName?: string
  /**
   * 文档类型
   */
  DocType?: string
  /**
   * 文档标题
   */
  FileTitle?: string
  /**
   * 文档元信息
   */
  FileMetaData?: string
  /**
   * 文档描述
   */
  DocDesc?: string
  /**
   * 文档大小
   */
  FileSize?: number
  /**
   * Cos存储文件ID
   */
  FileId?: string
}

/**
 * 数据源详情列表
 */
export interface DataSourceDetail {
  /**
   * 数据源 ID
   */
  Id?: string
  /**
   * 数据源名称
   */
  Title?: string
  /**
   * 数据源标识
   */
  Name?: string
  /**
   * 数据源类型
   */
  Type?: string
  /**
   * 数据源描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 数据源配置
   */
  Schema?: string
  /**
   * cms 项目状态, 0: 重新获取详情信息，1： 不需要重新获取详情信息
   */
  CmsProject?: string
  /**
   * 当前为环境 id
   */
  PkgId?: string
  /**
   * schema 版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaVersion?: string
  /**
   * 创建者用户 ID
   */
  CreatorId?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * 环境 id
   */
  EnvId?: string
  /**
   * 版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceVersion?: string
  /**
   * 所属应用数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUsageList?: Array<DataSourceLinkApp>
  /**
   * 发布时间
   */
  PublishedAt?: string
  /**
   * 子数据源ids
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildDataSourceIds?: Array<string>
  /**
   * 数据源发布信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fun?: string
  /**
   * 云函数状态 1 Active 2 Creating 3 Updating 4 Deleting  9 Deleted 11 CreatFailed  12 UpdateFailed 13 DeleteFailed 21 UpdateTimeOut
   */
  ScfStatus?: number
  /**
   * 自定义方法
   */
  Methods?: string
  /**
   * 子数据源名数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildDataSourceNames?: Array<string>
  /**
   * 是否旧数据源 1 新 0 旧
   */
  IsNewDataSource?: number
  /**
   * 数据源视图id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewId?: string
  /**
   * 数据源属性配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Configuration?: string
  /**
   * 外部数据源模板code
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateCode?: string
  /**
   * 外部数据源模板来源 0 空模板 1 腾讯文档 2 腾讯会议 3 企业微信 4 微信电商
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: number
  /**
   * 发布版本
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  PublishVersion?: string
  /**
   * 发布视图id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublishViewId?: string
  /**
   * 数据源子类型   "database" 标准模型 "custom-database" 自定义模型 "system" 系统模型 "connector" 连接器 "custom-connector" 自定义连接器 "hidden" 隐藏数据源
   */
  SubType?: string
  /**
   * 授权状态  0 授权无效 1 授权有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthStatus?: number
  /**
   * 数据源授权信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthInfo?: TicketAuthInfo
  /**
   * 1发布0未发布
   */
  PublishStatus?: number
  /**
   * 更新版本
   */
  UpdateVersion?: number
  /**
   * 模型关联关系字段列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelationFieldList?: Array<RelationField>
  /**
   * db实例类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbInstanceType?: string
  /**
   * 体验环境db表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreviewTableName?: string
  /**
   * 正式环境db表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublishedTableName?: string
  /**
   * DB来源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbSourceType?: string
  /**
   * 模型预览状态开关
   */
  StagingSwitch?: boolean
}

/**
 * 知识库信息
 */
export interface KnowledgeSet {
  /**
   * 知识库标识
   */
  Name?: string
  /**
   * 知识库名称
   */
  Title?: string
  /**
   * 描述
   */
  Desc?: string
  /**
   * 状态，
NOT_ENABLED未启用
ENABLED 已启用
   */
  Active?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 知识库的meta信息
   */
  Meta?: string
  /**
   * 知识库容量,单位字节
   */
  TotalSize?: string
}

/**
 * DeployApp请求参数结构体
 */
export interface DeployAppRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 应用id
   */
  Id: string
  /**
   * 发布体验preview/正式upload
   */
  Mode?: string
  /**
   * 构建类型：mp、pc、web、adminPortal
   */
  BuildType?: string
  /**
   * 子包数组
   */
  SubAppIds?: Array<string>
}

/**
 * 文件拆分信息
 */
export interface KnowledgeSplitterPreprocess {
  /**
   * 在对文件拆分时，配置是否将 Title 追加到切分后的段落后面一并 Embedding。取值如下所示：
false：不追加。
true：将段落 Title 追加到切分后的段落。

   */
  AppendTitleToChunk?: boolean
  /**
   * 在对文件拆分时，配置是否将关键字 keywords 追加到切分后的段落一并 Embedding。取值如下所示：
false：不追加。
true：将全文的 keywords 追加到切分后的段落。

   */
  AppendKeywordsToChunk?: boolean
}

/**
 * DescribeKnowledgeDocumentSetDetail请求参数结构体
 */
export interface DescribeKnowledgeDocumentSetDetailRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 知识库标识
   */
  CollectionView: string
  /**
   * 文件名
   */
  DocumentSetName?: string
  /**
   * 文件id
   */
  DocumentSetId?: string
}

/**
 * DeployApp返回参数结构体
 */
export interface DeployAppResponse {
  /**
   * 构建id
   */
  BuildId?: string
  /**
   * 发布错误code
   */
  DeployErrCode?: number
  /**
   * 发布错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployErrMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteKnowledgeSet请求参数结构体
 */
export interface DeleteKnowledgeSetRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 知识库标识
   */
  Name: string
}

/**
 * 安装应用，任务详情
 */
export interface AppJobInfo {
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 当前步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  Step: number
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: number
  /**
   * 任务总共步骤数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalStep: number
  /**
   * 当前步骤详情
   */
  StepDesc: string
  /**
   * 错误信息
   */
  ErrMsg: string
}

/**
 * 查询知识库列表返回
 */
export interface KnowledgeSetRsp {
  /**
   * 总数
   */
  Total?: number
  /**
   * 知识库列表
   */
  KnowledgeSets?: Array<KnowledgeSet>
}

/**
 * DeleteKnowledgeSet返回参数结构体
 */
export interface DeleteKnowledgeSetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSourceList请求参数结构体
 */
export interface DescribeDataSourceListRequest {
  /**
   * 每页条数
   */
  PageSize: number
  /**
   * 页码
   */
  PageIndex: number
  /**
   * 环境 id
   */
  EnvId: string
  /**
   * 应用id数组
   */
  Appids?: Array<string>
  /**
   * 数据源id数组
   */
  DataSourceIds?: Array<string>
  /**
   * 数据源名称数组
   */
  DataSourceNames?: Array<string>
  /**
   * 数据源类型 database-自建数据源；cloud-integration-自定义数据源
   */
  DataSourceType?: string
  /**
   * 数据源模糊查询参数
   */
  QueryOption?: DataSourceQueryOption
  /**
   * 数据源视图Id数组
   */
  ViewIds?: Array<string>
  /**
   * 查询未关联应用的数据源，0:未关联，该参数配合 AppIds 参数一块使用
   */
  AppLinkStatus?: number
  /**
   * 查询应用绑定数据源: 0: 否,1: 是
   */
  QueryBindToApp?: number
  /**
   * 查询连接器 0 数据模型 1 连接器 2 自定义连接器
   */
  QueryConnector?: number
  /**
   * 废弃中
   */
  NotQuerySubTypeList?: Array<string>
  /**
   * 查询channelList
   */
  ChannelList?: Array<string>
  /**
   * 是否查询数据源关联关系
   */
  QueryDataSourceRelationList?: boolean
  /**
   * db实例类型
   */
  DbInstanceType?: string
  /**
   * 数据库表名列表
   */
  DatabaseTableNames?: Array<string>
  /**
   * 是否查询系统模型，默认为true，需要显示设置为False才能过滤系统模型
   */
  QuerySystemModel?: boolean
}

/**
 * DeleteKnowledgeDocumentSet请求参数结构体
 */
export interface DeleteKnowledgeDocumentSetRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 知识库标识
   */
  CollectionView: string
  /**
   * 删除时制定的条件
   */
  Query?: DocumentQuery
}

/**
 * DescribeResourceRoleList返回参数结构体
 */
export interface DescribeResourceRoleListResponse {
  /**
   * 角色列表
   */
  Data?: RoleListPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRelatedUsers返回参数结构体
 */
export interface DescribeRelatedUsersResponse {
  /**
   * 关联的用户列表
   */
  Data?: Array<WedaUser>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 搜索数据的集合
 */
export interface QureyKnowledgeDocumentSet {
  /**
   * 文件id
   */
  DocumentSetId?: string
  /**
   * 文件名
   */
  DocumentSetName?: string
  /**
   * 文件内容前 200个字符。
   */
  TextPrefix?: string
  /**
   * 文件拆分信息
   */
  SplitterPreprocess?: KnowledgeSplitterPreprocess
  /**
   * 文件详情
   */
  DocumentSetInfo?: QureyKnowledgeDocumentSetInfo
  /**
   * 文件标题
   */
  FileTitle?: string
  /**
   * 文件元信息，必须为jsonstring
   */
  FileMetaData?: string
  /**
   * name
   */
  Name?: string
  /**
   * 作者
   */
  Author?: string
  /**
   * 文档上传状态
   */
  DocStatus?: string
  /**
   * 上传文件失败时具体的错误消息
   */
  ErrMsg?: string
  /**
   * Cos存储文件ID
   */
  FileId?: string
}

/**
 * DescribeKnowledgeSetList返回参数结构体
 */
export interface DescribeKnowledgeSetListResponse {
  /**
   * 知识库列表
   */
  Data?: KnowledgeSetRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSourceList返回参数结构体
 */
export interface DescribeDataSourceListResponse {
  /**
   * data 数据
   */
  Data?: DataSourceDetailItems
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApps返回参数结构体
 */
export interface DescribeAppsResponse {
  /**
   * 应用列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weapps?: Array<Weapp>
  /**
   * 应用个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAppBindWxApp请求参数结构体
 */
export interface DeleteAppBindWxAppRequest {
  /**
   * 应用id
   */
  WeappId: string
}

/**
 * UploadKnowledgeDocumentSet返回参数结构体
 */
export interface UploadKnowledgeDocumentSetResponse {
  /**
   * 新增文件返回信息
   */
  Data?: UploadKnowledgeDocumentSetRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteKnowledgeDocumentSet返回参数结构体
 */
export interface DeleteKnowledgeDocumentSetResponse {
  /**
   * 新增文件返回信息
   */
  Data?: DeleteKnowledgeDocumentSetRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源授权信息
 */
export interface TicketAuthInfo {
  /**
   * 授权用户
   */
  AuthUser?: string
}

/**
 * CreateKnowledgeSet请求参数结构体
 */
export interface CreateKnowledgeSetRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 知识库标识
   */
  Name: string
  /**
   * 知识库名称
   */
  Title: string
  /**
   * 描述
   */
  Desc?: string
  /**
   * 知识库的meta信息
   */
  Meta?: string
}

/**
 * 上传知识库文档返回结果
 */
export interface DescribeKnowledgeDocumentSetDetailRsp {
  /**
   * 获取的数量。
   */
  Count?: number
  /**
   * 文档信息
   */
  DocumentSet?: KnowledgeDocumentSet
}

/**
 * 查询文件集合信息详情
 */
export interface QureyKnowledgeDocumentSetInfo {
  /**
   * 文件的字符数。
   */
  TextLength?: number
  /**
   * 文件的字节数。
   */
  ByteLength?: number
  /**
   * 文件被预处理、Embedding 向量化的进度。
   */
  IndexedProgress?: number
  /**
   * 文件预处理、Embedding 向量化的状态。
New：等待解析。
Loading：文件解析中。
Failure：文件解析、写入出错。
Ready：文件解析、写入完成。

   */
  IndexedStatus?: string
  /**
   * 错误信息
   */
  IndexedErrorMsg?: string
  /**
   * 文件创建时间。
   */
  CreateTime?: string
  /**
   * 文件最后更新时间。
   */
  LastUpdateTime?: string
  /**
   * 文件关键字。
   */
  Keywords?: string
}

/**
 * 删除文档出参
 */
export interface DescribeKnowledgeDocumentSetListRsp {
  /**
   * 文件集
   */
  DocumentSets?: Array<QureyKnowledgeDocumentSet>
  /**
   * 条数
   */
  Count?: number
}

/**
 * 文档信息
 */
export interface KnowledgeDocumentSet {
  /**
   * 文档id
   */
  DocumentSetId?: string
  /**
   * 文档名
   */
  DocumentSetName?: string
  /**
   * 文件完整内容。
   */
  Text?: string
  /**
   * 文件内容前 200个字符。
   */
  TextPrefix?: string
  /**
   * 文件详情
   */
  DocumentSetInfo?: KnowledgeDocumentSetInfo
  /**
   * 文件拆分信息
   */
  SplitterPreprocess?: KnowledgeSplitterPreprocess
  /**
   * 未使用
   */
  Name?: string
  /**
   * 文档标题
   */
  FileTitle?: string
  /**
   * 文档元信息，必须为jsonstring
   */
  FileMetaData?: string
  /**
   * 作者
   */
  Author?: string
  /**
   * 上传文件状态
   */
  DocStatus?: string
  /**
   * 文件上传失败的具体原因
   */
  ErrMsg?: string
  /**
   * Cos存储文件ID
   */
  FileId?: string
}

/**
 * DescribeKnowledgeDocumentSetDetail返回参数结构体
 */
export interface DescribeKnowledgeDocumentSetDetailResponse {
  /**
   * 新增文件返回信息
   */
  Data?: DescribeKnowledgeDocumentSetDetailRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchDocList请求参数结构体
 */
export interface SearchDocListRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 知识库名称
   */
  CollectionView?: string
  /**
   * 搜索模式
   */
  SearchKey?: string
  /**
   * 搜索值
   */
  SearchValue?: string
  /**
   * 页码
   */
  PageNo?: number
  /**
   * 页大小
   */
  PageSize?: number
}

/**
 * DescribeResourceRoleList请求参数结构体
 */
export interface DescribeResourceRoleListRequest {
  /**
   * 资源id
   */
  ResourceId: string
  /**
   * 资源类型
   */
  ResourceType: string
  /**
   * 预览：pre；非预览：prod
   */
  EnvType: string
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 子资源类型
   */
  SubType?: string
  /**
   * 页码
   */
  PageNo?: number
  /**
   * 分页大小
   */
  PageSize?: number
}

/**
 * 数据源关联App信息
 */
export interface DataSourceLinkApp {
  /**
   * 应用Id
   */
  Id?: string
  /**
   * 应用名称
   */
  Title?: string
  /**
   * 是否编辑状态使用
   */
  EditStatusUse?: number
  /**
   * 是否预览状态使用
   */
  PreviewStatusUse?: number
  /**
   * 是否正式状态使用
   */
  OnlineStatusUse?: number
  /**
   * 数据源ID
   */
  DataSourceId?: string
}

/**
 * 知识库文档搜索结果
 */
export interface SearchDocRsp {
  /**
   * 文档基本信息
   */
  DocInfos?: Array<SearchDocInfo>
  /**
   * 文档总数
   */
  Total?: number
}

/**
 * DescribeRelatedUsers请求参数结构体
 */
export interface DescribeRelatedUsersRequest {
  /**
   * 角色id
   */
  RoleId: number
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 页码
   */
  PageNo: number
  /**
   * 页面含量
   */
  PageSize: number
  /**
   * 环境类型
   */
  EnvType?: string
  /**
   * 新角色id
   */
  RoleStringId?: string
}

/**
 * 数据详情列表
 */
export interface DataSourceDetailItems {
  /**
   * 数据详情列表
   */
  Rows?: Array<DataSourceDetail>
  /**
   * 数据源列表总个数
   */
  Count?: number
}

/**
 * 组织架构返回参数
 */
export interface OrgResp {
  /**
   * 部门id
   */
  OrgId: string
  /**
   * 部门名称
   */
  OrgName: string
  /**
   * 部门标识
   */
  OrgIdentity: string
  /**
   * 部门层级
   */
  Level: string
  /**
   * 主键字段
   */
  PrimaryColumn: string
}

/**
 * PutWxAppIdToWeApp返回参数结构体
 */
export interface PutWxAppIdToWeAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateKnowledgeSet返回参数结构体
 */
export interface CreateKnowledgeSetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * weda角色
 */
export interface WedaRole {
  /**
   * 角色名称
   */
  Name: string
  /**
   * 角色标识
   */
  RoleIdentity: string
  /**
   * 角色id
   */
  Id: number
  /**
   * 父角色id
   */
  ParentRoleId: number
  /**
   * 子角色id
   */
  ChildRoleId: number
  /**
   * 环境标识
   */
  EnvIdentity: string
  /**
   * 是否已发布
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsReleased: boolean
}
