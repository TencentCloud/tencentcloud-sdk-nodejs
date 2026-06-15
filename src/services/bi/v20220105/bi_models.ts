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
 * 页面截图信息
 */
export interface PageScreenVO {
  /**
   * 截图base64或 url
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * 组件Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WidgetId?: string
}

/**
 * DescribeUserRoleList请求参数结构体
 */
export interface DescribeUserRoleListRequest {
  /**
   * 页码
   */
  PageNo: number
  /**
   * 页数
   */
  PageSize: number
  /**
   * 全部页码
   */
  AllPage?: boolean
  /**
   * 0 企业用户 1 访客 不填表示所有用户
   */
  UserType?: string
  /**
   * 模糊搜索的关键字
   */
  Keyword?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 是否只获取绑定企微应用的
   */
  IsOnlyBindAppUser?: boolean
}

/**
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
  /**
   * <p>项目ID</p>
   */
  Id: number
  /**
   * <p>随机数</p>
   */
  Seed?: string
  /**
   * <p>默认看板</p><p>枚举值：</p><ul><li>1： 项目看板</li><li>2： 我的看板</li></ul>
   */
  DefaultPanelType?: number
}

/**
 * ModifyUserDetailInfo请求参数结构体
 */
export interface ModifyUserDetailInfoRequest {
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 角色ID 列表
   */
  RoleIdList?: Array<number | bigint>
  /**
   * 邮箱
   */
  Email?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 手机号
   */
  PhoneNumber?: string
  /**
   * 手机区号
   */
  AreaCode?: string
  /**
   * 企业微信应用用户id
   */
  AppUserId?: string
  /**
   * 是否开启手机验证码登录（0 关闭，1 开启）
   */
  LoginSecurityStatus?: number
  /**
   * 是否开启密码过期提醒（0 关闭，1 开启
   */
  ResetPassWordTip?: number
  /**
   * 强制修改密码（0 关闭，1 开启）
   */
  ForceResetPassWord?: number
  /**
   * 密码过期提醒时间，30、60、90（默认）、180天
   */
  PasswordExpired?: number
  /**
   * 用户组id
   */
  UserGroupIdList?: Array<number | bigint>
}

/**
 * DescribeUserGroupTreeList请求参数结构体
 */
export interface DescribeUserGroupTreeListRequest {
  /**
   * 项目Id
   */
  ProjectId?: number
  /**
   * 是否分页
   */
  AllPage?: number
  /**
   * 页码
   */
  PageNo?: number
  /**
   * 每页条数
   */
  PageSize?: number
  /**
   * 标签过滤条件
   */
  TagValueList?: Array<ResourceTagValue>
  /**
   * 节点集合
   */
  Nodes?: Array<UserGroupTreeNodeDTO>
  /**
   * 用户组id集合
   */
  GroupIds?: Array<number | bigint>
  /**
   * 查询下一个code
   */
  QueryNextNode?: boolean
  /**
   * 父id集合
   */
  ParentIds?: Array<number | bigint>
  /**
   * 是否查询所有节点
   */
  QueryAllNode?: boolean
  /**
   * 过滤组id集合
   */
  FilterGroupIds?: Array<number | bigint>
  /**
   * 模糊搜索关键字
   */
  Keyword?: string
}

/**
 * 角色
 */
export interface Role {
  /**
   * 角色ID
   */
  Id?: number
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * 企业ID
   */
  CorpId?: string
  /**
   * 角色类型
   */
  RoleType?: string
  /**
   * 范围
   */
  Scope?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedUser?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * 更新人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedUser?: string
  /**
   * 是否为全局角色（0 不是， 1 是）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScopeType?: number
  /**
   * 是否可被选
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanChoose?: boolean
  /**
   * 角色key
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleCollection?: string
}

/**
 * ApplyEmbedInterval请求参数结构体
 */
export interface ApplyEmbedIntervalRequest {
  /**
   * 分享项目id
   */
  ProjectId?: number
  /**
   * 分享页面id，嵌出看板时此为空值0，ChatBI嵌出时不传

   */
  PageId?: number
  /**
   * 需要申请延期的Token
   */
  BIToken?: string
  /**
   * 备用字段
   */
  ExtraParam?: string
  /**
   * embed：页面/看板嵌出
chatBIEmbed：ChatBI嵌出
   */
  Intention?: string
  /**
   * panel, 看板；page，页面
project，ChatBI嵌出时
   */
  Scope?: string
}

/**
 * 定制化查询
 */
export interface ProjectConfigResult {
  /**
   * <p>配置名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleId?: string
  /**
   * <p>配置方式</p><p>枚举值：</p><ul><li>usable： 可用</li><li>visible： 可见</li><li>disabled： 不可用</li><li>hidden： 隐藏</li></ul><p>默认值：disabled</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeType?: string
  /**
   * <p>额外参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
}

/**
 * ModifyUserGroup返回参数结构体
 */
export interface ModifyUserGroupResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>结果信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<UserGroupVO>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserRole返回参数结构体
 */
export interface DeleteUserRoleResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserProjectList请求参数结构体
 */
export interface DescribeUserProjectListRequest {
  /**
   * <p>项目ID</p>
   */
  ProjectId?: number
  /**
   * <p>无</p>
   */
  AllPage?: boolean
  /**
   * <p>无</p>
   */
  PageNo?: number
  /**
   * <p>无</p>
   */
  PageSize?: number
  /**
   * <p>是否过滤掉企业管理员</p>
   */
  IsFilterPerAuthUser?: boolean
  /**
   * <p>是否过滤掉当前用户</p>
   */
  IsFilterCurrentUser?: boolean
  /**
   * <p>关键字</p>
   */
  Keyword?: string
}

/**
 * ModifyResourceUser请求参数结构体
 */
export interface ModifyResourceUserRequest {
  /**
   * 项目Id
   */
  ProjectId?: number
  /**
   * 用户id
   */
  UserId?: string
  /**
   * 资源
   */
  Resource?: UserResourceDTO
  /**
   * 实体类
   */
  EntityIds?: Array<number | bigint>
  /**
   * 资源类型
   */
  ResourceType?: string
}

/**
 * 企业用户列表
 */
export interface CorpUserListData {
  /**
   * 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<UserIdAndUserName>
  /**
   * 总数
   */
  Total: number
  /**
   * 页数
   */
  TotalPages: number
}

/**
 * 用户组更新入参
 */
export interface UserGroupUpdateDTO {
  /**
   * 组管理员
   */
  AdminUserId?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 用户组名称
   */
  GroupName?: string
  /**
   * 排序位置
   */
  Location?: number
  /**
   * 父节点id
   */
  ParentId?: number
  /**
   * 用户组id
   */
  Id?: number
  /**
   * 父节点名称
   */
  ParentName?: string
}

/**
 * 行列权限配置
 */
export interface RowColumnConfig {
  /**
   * 行列权限规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  RulerInfo?: string
  /**
   * 标签值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValueList?: Array<RowColumnTagValue>
}

/**
 * DescribeProjectList返回参数结构体
 */
export interface DescribeProjectListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 接口信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ProjectListData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryUserGroupMember请求参数结构体
 */
export interface QueryUserGroupMemberRequest {
  /**
   * <p>用户组id集合</p>
   */
  GroupIds?: Array<number | bigint>
  /**
   * <p>搜索关键字</p>
   */
  Keyword?: string
  /**
   * <p>分页大小</p>
   */
  PageSize?: number
  /**
   * <p>分页页码</p>
   */
  PageNo?: number
  /**
   * <p>是否需要分页</p>
   */
  AllPage?: boolean
  /**
   * <p>用户组节点信息</p>
   */
  Nodes?: Array<UserGroupTreeNodeDTO>
  /**
   * <p>标签值</p>
   */
  TagValueList?: Array<ResourceTagValue>
  /**
   * <p>需要过滤的用户组</p>
   */
  FilterGroupIds?: Array<number | bigint>
}

/**
 * 页面截图列表
 */
export interface PageScreenListVO {
  /**
   * 图片导出类型。base64；url
注意：此字段可能返回 null，表示取不到有效值。
   */
  PicType?: string
  /**
   * 图片列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<PageScreenVO>
  /**
   * 异步事务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 事务状态
1: 处理中; 2: 处理成功; 3 处理失败(错误内容见外层Msg)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranStatus?: number
}

/**
 * DescribeSourceFieldList返回参数结构体
 */
export interface DescribeSourceFieldListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 表中字段的列表
   */
  Data?: TableColumnListData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserGroupMember返回参数结构体
 */
export interface DeleteUserGroupMemberResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>结果信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户资源入参
 */
export interface UserResourceDTO {
  /**
   * 企业id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpId?: string
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 资源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceList?: Array<ResourceItem>
}

/**
 * ModifyDatasourceCloud返回参数结构体
 */
export interface ModifyDatasourceCloudResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>无</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>提示</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserRole返回参数结构体
 */
export interface CreateUserRoleResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DataId
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 申请Token延期
 */
export interface ApplyEmbedTokenInfo {
  /**
   * 申请结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result: boolean
}

/**
 * ModifyResourceUserGroup返回参数结构体
 */
export interface ModifyResourceUserGroupResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 项目信息描述
 */
export interface Project {
  /**
   * 项目ID
   */
  Id?: number
  /**
   * 项目Logo
注意：此字段可能返回 null，表示取不到有效值。
   */
  Logo?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * logo底色
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColorCode?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedUser?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 成员个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemberCount?: number
  /**
   * 页面个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 最后修改报表、简报名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastModifyName?: string
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  Apply?: boolean
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedUser?: string
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpId?: string
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mark?: string
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  Seed?: string
  /**
   * 项目内权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthList?: Array<string>
  /**
   * 默认看板
注意：此字段可能返回 null，表示取不到有效值。
   */
  PanelScope?: string
  /**
   * 是否被托管
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsExternalManage?: boolean
  /**
   * 托管平台名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManagePlatform?: string
  /**
   * 定制化参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigList?: Array<ProjectConfigList>
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedUserName?: string
  /**
   * 所属人id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 所属人
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerName?: string
  /**
   * 仪表盘页面数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NormalCount?: number
  /**
   * 自由画布页面数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FreeCount?: number
  /**
   * 即席分析页面数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdhocCount?: number
  /**
   * 简报页面数
注意：此字段可能返回 null，表示取不到有效值。
   */
  BriefingCount?: number
}

/**
 * ExportScreenPage请求参数结构体
 */
export interface ExportScreenPageRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 页面id
   */
  PageId: string
  /**
   * 画布类型。栅格画布：GRID；自由画布：FREE
   */
  CanvasType?: string
  /**
   * 图片导出类型。base64；url（有效期：1天）
   */
  PicType?: string
  /**
   * 组件Ids。为空时，导出整个页面
   */
  WidgetIds?: Array<string>
  /**
   * 是否是异步请求
   */
  AsyncRequest?: boolean
  /**
   * 事务id
   */
  TranId?: string
}

/**
 * DeleteUserGroupMember请求参数结构体
 */
export interface DeleteUserGroupMemberRequest {
  /**
   * <p>用户组id</p>
   */
  GroupId?: number
  /**
   * <p>用户id集合</p>
   */
  UserIdList?: Array<string>
}

/**
 * 多表关联原始表信息
 */
export interface JoinSourceTable {
  /**
   * 1:数据源原表,2:本地表,3:Excel表,4:API表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableNodeType?: number
  /**
   * 原始表节点Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableNodeId?: string
  /**
   * 父节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: string
  /**
   * 非必填, 数据源原表没有ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 必填,数据源原表用原始表名, 其他类型用BI的逻辑表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 原始表需要展示的字段列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fields?: Array<TableField>
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: number
  /**
   * 非必填,前端展示的数据源别名,excel建表需要
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableAlias?: string
}

/**
 * CreateUserRoleProject请求参数结构体
 */
export interface CreateUserRoleProjectRequest {
  /**
   * <p>项目ID</p>
   */
  ProjectId?: number
  /**
   * <p>角色ID列表</p>
   */
  RoleIdList?: Array<number | bigint>
  /**
   * <p>用户列表（废弃）</p>
   * @deprecated
   */
  UserList?: Array<UserIdAndUserName>
  /**
   * <p>用户列表（新）</p>
   */
  UserInfoList?: Array<UserInfo>
}

/**
 * 组件信息
 */
export interface WidgetVO {
  /**
   * 组件Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WidgetId?: string
  /**
   * 组件name
注意：此字段可能返回 null，表示取不到有效值。
   */
  WidgetName?: string
}

/**
 * 行列权限初始状态
 */
export interface RowColumnStatus {
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenStatus: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleType: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleId: number
}

/**
 * DescribePermissionStatusInfo请求参数结构体
 */
export interface DescribePermissionStatusInfoRequest {
  /**
   * <p>页数</p>
   */
  TableId?: number
  /**
   * <p>类型</p><p>枚举值：</p><ul><li>ROW： 行权限</li><li>COLUMN： 列权限</li></ul><p>默认值：ROW</p>
   */
  Type?: string
  /**
   * <p>1</p>
   */
  ProjectId?: string
}

/**
 * CreateDatasource返回参数结构体
 */
export interface CreateDatasourceResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>数据源id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: IdDTO
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>提示</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询页面列表
 */
export interface DescribeUserGroupMemberPageListContainer {
  /**
   * 列表数据集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<UserGroupMemberVO>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPages?: number
}

/**
 * 表的全部列名数据列表
 */
export interface TableColumnListData {
  /**
   * 表中的列的列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<TableColumn>
  /**
   * 异步事务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 异步事务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranStatus?: number
}

/**
 * CreateUserGroup请求参数结构体
 */
export interface CreateUserGroupRequest {
  /**
   * <p>组管理员</p>
   */
  AdminUserId?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>用户组名称</p>
   */
  GroupName?: string
  /**
   * <p>位置</p>
   */
  Location?: number
  /**
   * <p>父用户组id</p>
   */
  ParentId?: number
}

/**
 * CreateAuthApiKey返回参数结构体
 */
export interface CreateAuthApiKeyResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>&quot;&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>&quot;success&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ApiKeyAuthApplyVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDatasource返回参数结构体
 */
export interface DeleteDatasourceResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 扩展
   */
  Extra?: string
  /**
   * 信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
  /**
   * <p>项目名称</p>
   */
  Name: string
  /**
   * <p>logo底色</p>
   */
  ColorCode: string
  /**
   * <p>项目Logo</p>
   */
  Logo?: string
  /**
   * <p>备注</p>
   */
  Mark?: string
  /**
   * <p>是否允许用户申请</p>
   */
  IsApply?: boolean
  /**
   * <p>默认看板</p><p>枚举值：</p><ul><li>1： 项目看板</li><li>2： 我的看板</li></ul>
   */
  DefaultPanelType?: number
  /**
   * <p>管理平台</p>
   */
  ManagePlatform?: string
}

/**
 * 用户角色列表角色信息
 */
export interface UserRoleListDataRoleInfo {
  /**
   * 角色名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleName?: string
  /**
   * 角色ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleId?: number
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: number
  /**
   * 项目名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 是否为全局角色（0 不是 1 是）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScopeType?: number
  /**
   * 角色key
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleCollection?: string
}

/**
 * ExportScreenPage返回参数结构体
 */
export interface ExportScreenPageResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 返回数据结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: PageScreenListVO
  /**
   * 返回消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApiKey列表
 */
export interface ApiKeyAuthApplyVOList {
  /**
   * <p>总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * <p>页数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPages?: number
  /**
   * <p>列表数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<ApiKeyAuthApplyVO>
}

/**
 * ModifyResourceUser返回参数结构体
 */
export interface ModifyResourceUserResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataTable请求参数结构体
 */
export interface CreateDataTableRequest {
  /**
   * 后端提供字典：数据表类型，1、数据库建表，2、SQL建表，3、Excel上传，4、API接入，5、腾讯文档，6、云数据库，7、手工输入，8、关联查询
   */
  Type: number
  /**
   * 数据表名称
   */
  Name: string
  /**
   * 无
   */
  ProjectId: number
  /**
   * 所属文件夹
   */
  FoldId?: number
  /**
   * 数据源Id
   */
  DatasourceId?: string
  /**
   * 物理表名
   */
  TableName?: string
  /**
   * sql语句
   */
  Sql?: string
  /**
   * excel地址
   */
  ExcelUrl?: string
  /**
   * 字段配置
   */
  Fields?: Array<TableField>
  /**
   * 多表关联使用: 1:数据源原表,2:本地表,3:Excel表,4:API表
   */
  TableNodeType?: number
  /**
   * 多表关联的原始表信息
   */
  Tables?: Array<JoinSourceTable>
  /**
   * 多表关联的关联信息
   */
  Joins?: Array<JoinRelation>
  /**
   * 补充信息，如api数据源信息，腾讯文档接入信息等
   */
  ExtInfo?: string
  /**
   * 是否是异步
   */
  AsyncRequest?: boolean
  /**
   * 依赖的异步事务id
   */
  ParentTranId?: string
  /**
   * API数据源配置
   */
  ApiDatasourceConfig?: ApiDatasourceConfig
  /**
   * 1
   */
  ParamList?: Array<ParamCreateDTO>
  /**
   * dlc高级参数
   */
  DlcExtInfo?: string
  /**
   * 是否查询数据库
   */
  QueryDbData?: string
  /**
   * 数据表备注
   */
  TableComment?: string
  /**
   * 是否查询字段备注
   */
  QueryFieldRemark?: number
  /**
   * 字段备注列表
   */
  FieldRemarkList?: Array<FieldRemarkDTO>
}

/**
 * CreatePermissionRanks请求参数结构体
 */
export interface CreatePermissionRanksRequest {
  /**
   * <p>页数</p>
   */
  TableId?: number
  /**
   * <p>模式</p><p>枚举值：</p><ul><li>ALL： 全部</li><li>Specify： 指定</li><li>TAG： 标签</li></ul><p>默认值：ALL</p>
   */
  Mode?: string
  /**
   * <p>角色类型</p><p>枚举值：</p><ul><li>ROLES： 按角色</li><li>Others： 其它</li></ul><p>默认值：Others</p>
   */
  RoleType?: string
  /**
   * <p>所有页码</p>
   */
  RoleId?: number
  /**
   * <p>规则信息</p>
   */
  RulerInfo?: string
  /**
   * <p>类型</p><p>枚举值：</p><ul><li>ROW： 行权限</li><li>COLUMN： 列权限</li></ul><p>默认值：ROW</p>
   */
  Type?: string
  /**
   * <p>开启状态</p><p>枚举值：</p><ul><li>Open： 开启</li><li>Close： 关闭</li></ul><p>默认值：Close</p>
   */
  OpenStatus?: string
  /**
   * <p>项目id</p>
   */
  ProjectId?: number
  /**
   * <p>行列权限配置</p>
   */
  RowColumnConfigList?: Array<RowColumnConfig>
}

/**
 * ModifyResourceUserGroupResource请求参数结构体
 */
export interface ModifyResourceUserGroupResourceRequest {
  /**
   * 项目Id
   */
  ProjectId?: number
  /**
   * 用户id
   */
  UserGroupId?: number
  /**
   * 资源
   */
  Resource?: UserResourceDTO
  /**
   * 实体类
   */
  EntityIds?: Array<number | bigint>
  /**
   * 资源类型
   */
  ResourceType?: string
}

/**
 * DescribeProjectInfo请求参数结构体
 */
export interface DescribeProjectInfoRequest {
  /**
   * <p>项目Id</p>
   */
  Id: number
  /**
   * <p>默认看板</p><p>枚举值：</p><ul><li>1： 项目看板</li><li>2： 我的看板</li></ul>
   */
  DefaultPanelType?: number
}

/**
 * DescribeResourceUserGroupPageList返回参数结构体
 */
export interface DescribeResourceUserGroupPageListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: UserGroupPageTreeVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserRole请求参数结构体
 */
export interface ModifyUserRoleRequest {
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 角色ID 列表
   */
  RoleIdList?: Array<number | bigint>
  /**
   * 邮箱
   */
  Email?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 手机号
   */
  PhoneNumber?: string
  /**
   * 手机区号
   */
  AreaCode?: string
  /**
   * 企业微信应用用户id
   */
  AppUserId?: string
  /**
   * 是否开启手机验证码登录（0 关闭，1 开启）
   */
  LoginSecurityStatus?: number
  /**
   * 是否开启密码过期提醒（0 关闭，1 开启
   */
  ResetPassWordTip?: number
  /**
   * 强制修改密码（0 关闭，1 开启）
   */
  ForceResetPassWord?: number
  /**
   * 密码过期提醒时间，30、60、90（默认）、180天
   */
  PasswordExpired?: number
}

/**
 * CreateUserRole请求参数结构体
 */
export interface CreateUserRoleRequest {
  /**
   * 角色ID列表
   */
  RoleIdList?: Array<number | bigint>
  /**
   * 用户列表（废弃）
   * @deprecated
   */
  UserList?: Array<UserIdAndUserName>
  /**
   * 用户列表（新）
   */
  UserInfoList?: Array<UserInfo>
  /**
   * 用户组id列表
   */
  UserGroups?: Array<number | bigint>
}

/**
 * CreateEmbedToken请求参数结构体
 */
export interface CreateEmbedTokenRequest {
  /**
   * 分享项目id
   */
  ProjectId?: number
  /**
   * 分享页面id，嵌出看板时此为空值0，ChatBI嵌出时不传
   */
  PageId?: number
  /**
   * embed表示页面看板嵌出，chatBIEmbed表示ChatBI嵌出
   */
  Intention?: string
  /**
   * page表示嵌出页面，panel表示嵌出整个看板，ChatBI嵌出时使用project
   */
  Scope?: string
  /**
   * 过期时间。 单位：分钟 最大值：240。即，4小时 默认值：240
   */
  ExpireTime?: string
  /**
   * 备用字段
   */
  ExtraParam?: string
  /**
   * 使用者企业Id(仅用于多用户)
   */
  UserCorpId?: string
  /**
   * 使用者Id(仅用于多用户)
   */
  UserId?: string
  /**
   * 访问次数限制，限制范围1-99999，为空则不设置访问次数限制
   */
  TicketNum?: number
  /**
   * 全局筛选参数 报表过滤条件的全局参数。 格式为JSON格式的字符串
**目前仅支持字符类型页面参数绑定到全局参数
**
[
    {
        "ParamKey": "name",  //页面参数名称
        "JoinType": "AND",     // 连接方式,目前仅支持AND
        "WhereList": [
            {
                "Operator": "-neq",   // 操作符，参考以下说明
                "Value": [                   //操作值，单值数组只传一个值
                    "zZWJMD",
                    "ZzVGHX",
                    "湖南省",
                    "河北省"
                ]
            }
        ]
    },
    {
        "ParamKey": "genderParam",
        "JoinType": "AND",
        "WhereList": [
            {
                "Operator": "-neq",
                "Value": [
                    "男"
                ]
            }
        ]
    }
]



Operator 目前支持
-neq  不等于!=操作符
-eq  等于=操作符
-is     in操作符

   */
  GlobalParam?: string
  /**
   * 100 不绑定用户, 一次创建一个token，UserCorpId和UserId 非必填，不支持 ChatBI 嵌出
200 单用户单token , 一次创建一个token， UserCorpId和UserId 必填
300 单用户多token, 一次创建多个token，UserCorpId和UserId 必填
   */
  TokenType?: number
  /**
   * 一次创建的token数
   */
  TokenNum?: number
  /**
   * 嵌出显示配置，目前为ChatBI嵌出场景用，TableFilter表示数据表列表过滤，SqlView表示sql查看功能
   */
  ConfigParam?: string
}

/**
 * DescribeAuthApiKeyInfo返回参数结构体
 */
export interface DescribeAuthApiKeyInfoResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>&quot;&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>&quot;success&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ApiKeyAuthApplyVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDatasource请求参数结构体
 */
export interface ModifyDatasourceRequest {
  /**
   * <p>HOST</p>
   */
  DbHost: string
  /**
   * <p>端口</p>
   */
  DbPort: number
  /**
   * <p>后端提供字典：域类型，1、腾讯云，2、本地</p>
   */
  ServiceType: string
  /**
   * <p>驱动</p><p>枚举值：</p><ul><li>MYSQL： MySQL数据库</li><li>PRESTO： PRESTO数据库</li><li>POSTGRE： PostgreSQL数据库</li><li>DLC： DLC数据库</li><li>MSSQL： 微软SQL Server数据库</li></ul>
   */
  DbType: string
  /**
   * <p>数据库编码</p>
   */
  Charset: string
  /**
   * <p>用户名</p>
   */
  DbUser: string
  /**
   * <p>密码</p>
   */
  DbPwd: string
  /**
   * <p>数据库名称</p>
   */
  DbName: string
  /**
   * <p>数据库别名</p>
   */
  SourceName: string
  /**
   * <p>数据源id</p>
   */
  Id: number
  /**
   * <p>项目ID</p>
   */
  ProjectId: number
  /**
   * <p>catalog值</p>
   */
  Catalog?: string
  /**
   * <p>第三方数据源标识</p>
   */
  DataOrigin?: string
  /**
   * <p>第三方项目id</p>
   */
  DataOriginProjectId?: string
  /**
   * <p>第三方数据源id</p>
   */
  DataOriginDatasourceId?: string
  /**
   * <p>扩展参数</p>
   */
  ExtraParam?: string
  /**
   * <p>腾讯云私有网络统一标识</p>
   */
  UniqVpcId?: string
  /**
   * <p>私有网络ip</p>
   */
  Vip?: string
  /**
   * <p>私有网络端口</p>
   */
  Vport?: string
  /**
   * <p>腾讯云私有网络标识</p>
   */
  VpcId?: string
  /**
   * <p>开启vpc</p>
   */
  UseVPC?: boolean
  /**
   * <p>地域</p>
   */
  RegionId?: string
  /**
   * <p>数据库schema</p>
   */
  Schema?: string
  /**
   * <p>数据库版本</p>
   */
  DbVersion?: string
}

/**
 * CreatePermissionRanks返回参数结构体
 */
export interface CreatePermissionRanksResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>消息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>112</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataTable返回参数结构体
 */
export interface CreateDataTableResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 成功返回数据表的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: IdDTO
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 错误提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>额外数据</p>
   */
  Extra?: string
  /**
   * <p>数据</p>
   */
  Data?: Data
  /**
   * <p>返回信息</p>
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjectInfo返回参数结构体
 */
export interface DescribeProjectInfoResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>&quot;&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>&quot;&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>项目详情</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Project
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>”“</p>
   */
  Extra?: string
  /**
   * <p>&quot;&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * <p>&quot;&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAuthApiKey请求参数结构体
 */
export interface ModifyAuthApiKeyRequest {
  /**
   * <p>ApiKey</p>
   */
  ApiKey: string
  /**
   * <p>默认用户</p>
   */
  DefaultUser?: string
}

/**
 * DescribeUserGroupInfo返回参数结构体
 */
export interface DescribeUserGroupInfoResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyEmbedInterval返回参数结构体
 */
export interface ApplyEmbedIntervalResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 额外参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 结果数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ApplyEmbedTokenInfo
  /**
   * 结果描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源
 */
export interface ResourceItem {
  /**
   * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceName?: string
  /**
   * 资源值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceValue?: boolean
  /**
   * 是否可变更
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanChange?: boolean
  /**
   * 提示信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tips?: string
}

/**
 * CreateUserGroupMember返回参数结构体
 */
export interface CreateUserGroupMemberResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>结果信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 行列权限内容
 */
export interface RankInfo {
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode: string
  /**
   * `
注意：此字段可能返回 null，表示取不到有效值。
   */
  RulerInfo: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleId: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleType: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: number
  /**
   * 行列权限配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  RowColumnConfigList?: Array<RowColumnConfig>
}

/**
 * DescribeUserGroupTreeList返回参数结构体
 */
export interface DescribeUserGroupTreeListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<UserGroupTreeVO>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户ID和用户名
 */
export interface UserInfo {
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 手机号
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNumber?: string
  /**
   * 手机号区号
注意：此字段可能返回 null，表示取不到有效值。
   */
  AreaCode?: string
  /**
   * 企微账号id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserId?: string
  /**
   * 企微账号名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserName?: string
}

/**
 * 用户ID和用户名
 */
export interface UserIdAndUserName {
  /**
   * <p>用户ID</p>
   */
  UserId?: string
  /**
   * <p>用户名</p>
   */
  UserName?: string
  /**
   * <p>企业ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpId?: string
  /**
   * <p>电子邮箱</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * <p>最后一次登录时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastLogin?: string
  /**
   * <p>用户状态</p><p>枚举值：</p><ul><li>1： 启用</li><li>0： 停用</li></ul><p>默认值：1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * <p>首次登录是否修改密码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstModify?: number
  /**
   * <p>手机号码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNumber?: string
  /**
   * <p>手机区号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AreaCode?: string
  /**
   * <p>创建人</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedUser?: string
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * <p>修改人</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedUser?: string
  /**
   * <p>更改时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * <p>系统全局角色</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GlobalUserName?: string
  /**
   * <p>系统全局角色编码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GlobalUserCode?: string
  /**
   * <p>手机号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mobile?: string
  /**
   * <p>1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * <p>1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserId?: string
  /**
   * <p>1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserAliasName?: string
  /**
   * <p>1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserName?: string
  /**
   * <p>1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InValidateAppRange?: boolean
  /**
   * <p>-1 免激活  0 未激活  1 已激活 空代表待绑定</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EmailActivationStatus?: number
  /**
   * <p>1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
}

/**
 * 空值展示样式配置值结构
 */
export interface EmptyValue {
  /**
   * 空值展示样式类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 空值展示样式类型对应具体的展示字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  Custom?: string
}

/**
 * DescribeUserRoleList返回参数结构体
 */
export interface DescribeUserRoleListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展描述信息(提供更多异常信息,用于辅助判断)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: UserRoleListData
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 行列权限标签出入参
 */
export interface RowColumnTagValue {
  /**
   * 标签id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 标签值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values?: Array<string>
}

/**
 * 用户组返回参数
 */
export interface UserGroupUserInfoVO {
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
}

/**
 * DescribeResourceUserGroupPageList请求参数结构体
 */
export interface DescribeResourceUserGroupPageListRequest {
  /**
   * 项目Id
   */
  ProjectId?: number
  /**
   * 页面Id
   */
  PageId?: number
  /**
   * 资源类型
   */
  ResourceType?: string
  /**
   * 是否分页
   */
  AllPage?: number
  /**
   * 模糊搜索关键字
   */
  Keyword?: string
  /**
   * 页码
   */
  PageNo?: number
  /**
   * 每页条数
   */
  PageSize?: number
  /**
   * 标签过滤条件
   */
  TagValueList?: Array<ResourceTagValue>
  /**
   * 角色
   */
  ModuleCollection?: string
  /**
   * 是否授权
   */
  ResourceValue?: string
  /**
   * 权限类型
   */
  ResourceName?: string
  /**
   * 父id
   */
  ParentId?: number
  /**
   * 资源id
   */
  EntityId?: number
}

/**
 * DeleteAuthApiKey返回参数结构体
 */
export interface DeleteAuthApiKeyResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>&quot;&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>&quot;success&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 操作的资源权限
 */
export interface ResourceListDTO {
  /**
   * 资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  EntityId?: number
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeType?: number
  /**
   * 资源权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceList?: Array<ResourceItem>
}

/**
 * DescribePermissionStatusInfo返回参数结构体
 */
export interface DescribePermissionStatusInfoResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>消息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>112</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RowColumnStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户组数节点
 */
export interface UserGroupTreeNodeDTO {
  /**
   * 用户组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: number
  /**
   * 是否查询子节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueryChildNodes?: boolean
}

/**
 * 报表嵌出数据结构-强鉴权
 */
export interface EmbedTokenInfo {
  /**
   * 信息标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 令牌
注意：此字段可能返回 null，表示取不到有效值。
   */
  BIToken?: string
  /**
   * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedUser?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 更新人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedUser?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * 页面Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageId?: string
  /**
   * 备用
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraParam?: string
  /**
   * 嵌出类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scope?: string
  /**
   * 过期时间，分钟为单位，最大240
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: number
  /**
   * 使用者企业Id(仅用于多用户)
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserCorpId?: string
  /**
   * 使用者Id(仅用于多用户)
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 访问次数限制，限制范围1-99999，为空则不设置访问次数限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  TicketNum?: number
  /**
   * 全局参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  GlobalParam?: string
  /**
   * embed表示页面看板嵌出，chatBIEmbed表示ChatBI嵌出
注意：此字段可能返回 null，表示取不到有效值。
   */
  Intention?: string
  /**
   * 100 无绑定用户
200 单用户单token
300 单用户 多token
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenType?: number
  /**
   * token 数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenNum?: number
  /**
   * 是否单用户多token
注意：此字段可能返回 null，表示取不到有效值。
   */
  SingleUserMultiToken?: boolean
  /**
   * 嵌出显示配置，目前为ChatBI嵌出场景用，TableFilter表示数据表列表过滤，SqlView表示sql查看功能
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigParam?: string
}

/**
 * 多表关联原始表之间使用的关联字段信息
 */
export interface JoinRelationField {
  /**
   * 字段关联关系id,前端使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldJoinId?: string
  /**
   * 原表字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceField?: TableField
  /**
   * 目标表字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetField?: TableField
}

/**
 * 字段备注信息
 */
export interface FieldRemarkDTO {
  /**
   * 字段名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldName?: string
  /**
   * 字段备注列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: Array<string>
}

/**
 * 多表关联原始表之间的关联信息
 */
export interface JoinRelation {
  /**
   * 表关联关系id,前端使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  JoinId?: string
  /**
   * 原表节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceTableNodeId?: string
  /**
   * 目标表节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetTableNodeId?: string
  /**
   * 多表关联的关联类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  JoinType?: string
  /**
   * 多表关联的字段列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fields?: Array<JoinRelationField>
}

/**
 * 创建ApiKey接口出参
 */
export interface ApiKeyAuthApplyVO {
  /**
   * <p>id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * <p>企业id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpId?: string
  /**
   * <p>apiKey</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKey?: string
  /**
   * <p>默认用户</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultUser?: string
  /**
   * <p>创建人</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedUser?: string
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * <p>更新人</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedUser?: string
  /**
   * <p>更新时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
}

/**
 * DeleteAuthApiKey请求参数结构体
 */
export interface DeleteAuthApiKeyRequest {
  /**
   * <p>ApiKey</p>
   */
  ApiKey: string
}

/**
 * 表的列数据抽象
 */
export interface TableColumn {
  /**
   * 列名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * 列的别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AliasName?: string
  /**
   * 列的类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbType?: string
  /**
   * 段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldType?: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mark?: string
  /**
   * excel名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcelName?: string
  /**
   * 关联的字典表Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DictId?: number
  /**
   * 关联的字典表表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DictName?: string
  /**
   * 多表关联新增字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableNodeId?: string
  /**
   * 字段所属的表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 用户设置的带格式的目标复杂格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldComplexType?: string
  /**
   * 格式规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  FormatRule?: string
  /**
   * 数据字段是否过滤空值
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFilter?: boolean
  /**
   * 计算字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcType?: string
  /**
   * 计算字段的公式内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcFormula?: string
  /**
   * 计算字段的中文公式内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcDesc?: string
  /**
   * Api数据源json路径名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  JsonPathName?: string
  /**
   * 地理类型标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Granularity?: string
  /**
   * 自定义地图Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  GeoJsonId?: number
  /**
   * 空值展示样式配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  EmptyValueConfig?: EmptyValueConfig
  /**
   * 原列名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbFieldName?: string
  /**
   * 是否是复制字段操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCopyOperation?: boolean
  /**
   * 是否从普通字段复制
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCopyFromNormal?: boolean
}

/**
 * 数据源详情列表
 */
export interface DatasourceInfoData {
  /**
   * 数据源详情列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<DatasourceInfo>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPages?: number
}

/**
 * DescribePermissionRoleInfo返回参数结构体
 */
export interface DescribePermissionRoleInfoResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<Role>
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 112 
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePageWidgetList请求参数结构体
 */
export interface DescribePageWidgetListRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 页面id
   */
  PageId: string
}

/**
 * DescribeUserRoleProjectList请求参数结构体
 */
export interface DescribeUserRoleProjectListRequest {
  /**
   * 页码
   */
  PageNo: number
  /**
   * 页数
   */
  PageSize: number
  /**
   * 项目ID
   */
  ProjectId: number
  /**
   * 是否只获取绑定企微应用的
   */
  IsOnlyBindAppUser?: boolean
  /**
   * 是否获取全部数据
   */
  AllPage?: boolean
  /**
   * 角色编码
   */
  RoleCode?: string
  /**
   * 用户id列表
   */
  UserIdList?: Array<string>
  /**
   * 搜索关键词
   */
  Keyword?: string
}

/**
 * 列表查询返回的每条记录的操作属性
 */
export interface BaseStateAction {
  /**
   * 编辑是否可见
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowEdit?: boolean
  /**
   * 编辑是否可点击
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEdit?: boolean
  /**
   * 编辑按钮的文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  EditText?: string
  /**
   * 编辑不可用时的提示文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  EditTips?: string
  /**
   * 删除是否可见
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowDel?: boolean
  /**
   * 删除是否可点击
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDel?: boolean
  /**
   * 删除按钮的文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelText?: string
  /**
   * 删除不可用时的提示文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelTips?: string
  /**
   * 复制是否可见
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowCopy?: boolean
  /**
   * 是否可见
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowView?: boolean
  /**
   * 是否可重命名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowRename?: boolean
}

/**
 * 数据
 */
export interface Data {
  /**
   * 项目Id
   */
  Id?: number
  /**
   * url
注意：此字段可能返回 null，表示取不到有效值。
   */
  EditUrl?: string
}

/**
 * DescribeUserRoleProjectList返回参数结构体
 */
export interface DescribeUserRoleProjectListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: UserRoleListData
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryUserGroupMember返回参数结构体
 */
export interface QueryUserGroupMemberResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>结果信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeUserGroupMemberPageListContainer
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserGroup请求参数结构体
 */
export interface ModifyUserGroupRequest {
  /**
   * <p>用户组更新list</p>
   */
  UpdateList?: Array<UserGroupUpdateDTO>
}

/**
 * DeleteUserRole请求参数结构体
 */
export interface DeleteUserRoleRequest {
  /**
   * 用户ID
   */
  UserId: string
}

/**
 * 用户角色信息
 */
export interface UserRoleListData {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPages: number
  /**
   * 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<UserRoleListDataUserRoleInfo>
}

/**
 * CreateUserRoleProject返回参数结构体
 */
export interface CreateUserRoleProjectResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>扩展</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DataId
  /**
   * <p>消息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserRoleProject请求参数结构体
 */
export interface DeleteUserRoleProjectRequest {
  /**
   * 项目ID
   */
  ProjectId: number
  /**
   * 用户ID
   */
  UserId: string
}

/**
 * DescribeAuthApiKeyList请求参数结构体
 */
export interface DescribeAuthApiKeyListRequest {
  /**
   * <p>全部</p><p>默认值：false</p>
   */
  AllPage?: boolean
  /**
   * <p>页码</p><p>默认值：0</p>
   */
  PageNo?: number
  /**
   * <p>分页大小</p><p>默认值：10</p>
   */
  PageSize?: number
  /**
   * <p>关键字过滤</p>
   */
  Keyword?: string
}

/**
 * ClearEmbedToken返回参数结构体
 */
export interface ClearEmbedTokenResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 额外消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 提示消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 1
 */
export interface ParamCreateDTO {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamName?: string
  /**
   * 默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultValue?: string
  /**
   * 参数类型，string/datetime/number
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamType?: string
  /**
   * 格式化类型，yyyy-MM-dd HH:mm:ss.SSS（只有时间必填）
注意：此字段可能返回 null，表示取不到有效值。
   */
  FormatRule?: string
  /**
   * 复杂类型，格式化的另一种表达，例如YYYY-MM
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComplexType?: string
  /**
   * 作用域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scope?: string
}

/**
 * DescribeAuthApiKeyInfo请求参数结构体
 */
export interface DescribeAuthApiKeyInfoRequest {
  /**
   * <p>ApiKey</p>
   */
  ApiKey: string
}

/**
 * DescribeSourceFieldList请求参数结构体
 */
export interface DescribeSourceFieldListRequest {
  /**
   * 数据源Id
   */
  DataSourceId?: number
  /**
   * 表名
   */
  TableName?: string
  /**
   * sql内容
   */
  Sql?: string
  /**
   * 项目id
   */
  ProjectId?: number
  /**
   * 是否是异步
   */
  AsyncRequest?: boolean
  /**
   * 异步事务id
   */
  TranId?: string
  /**
   * 11
   */
  ParamList?: Array<ParamCreateDTO>
  /**
   * DLC扩展参数
   */
  DlcExtInfo?: string
  /**
   * 是否查询数据库
   */
  QueryDbData?: string
  /**
   * 数据表 Id
   */
  TableId?: string
  /**
   * 后端提供字典：数据表类型，1、数据库建表，2、SQL建表，3、Excel上传，4、API接入，5、腾讯文档，6、云数据库，7、手工输入，8、关联查询
   */
  TableType?: number
}

/**
 * 空值展示样式配置结构
 */
export interface EmptyValueConfig {
  /**
   * 数值类字段空值样式配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Number?: EmptyValue
  /**
   * 字符串字段空置样式配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  String?: EmptyValue
}

/**
 * CreateAuthApiKey请求参数结构体
 */
export interface CreateAuthApiKeyRequest {
  /**
   * <p>默认用户</p>
   */
  DefaultUser?: string
}

/**
 * DeleteUserRoleProject返回参数结构体
 */
export interface DeleteUserRoleProjectResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePermissionRoleInfo请求参数结构体
 */
export interface DescribePermissionRoleInfoRequest {
  /**
   * 项目ID
   */
  ProjectId: number
  /**
   * 页数
   */
  PageNo?: number
  /**
   * 条数
   */
  PageSize?: number
  /**
   * 所有页码
   */
  AllPage?: boolean
}

/**
 * CreateDatasourceCloud请求参数结构体
 */
export interface CreateDatasourceCloudRequest {
  /**
   * <p>后端提供字典：域类型，1、腾讯云，2、本地</p>
   */
  ServiceType: string
  /**
   * <p>驱动</p><p>枚举值：</p><ul><li>MYSQL： MySQL数据库</li><li>PRESTO： PRESTO数据库</li><li>POSTGRE： PostgreSQL数据库</li><li>DLC： DLC数据库</li><li>MSSQL： 微软SQL Server数据库</li></ul>
   */
  DbType: string
  /**
   * <p>数据库编码</p>
   */
  Charset: string
  /**
   * <p>用户名</p>
   */
  DbUser: string
  /**
   * <p>密码</p>
   */
  DbPwd: string
  /**
   * <p>数据库名称</p>
   */
  DbName: string
  /**
   * <p>数据库别名</p>
   */
  SourceName: string
  /**
   * <p>项目ID</p>
   */
  ProjectId: string
  /**
   * <p>公有云内网ip</p>
   */
  Vip?: string
  /**
   * <p>公有云内网端口</p>
   */
  Vport?: string
  /**
   * <p>vpc标识</p>
   */
  VpcId?: string
  /**
   * <p>统一vpc标识</p>
   */
  UniqVpcId?: string
  /**
   * <p>区域标识（gz,bj)</p>
   */
  RegionId?: string
  /**
   * <p>扩展参数</p>
   */
  ExtraParam?: string
  /**
   * <p>实例Id</p>
   */
  InstanceId?: string
  /**
   * <p>数据源产品名</p>
   */
  ProdDbName?: string
  /**
   * <p>第三方数据源标识</p>
   */
  DataOrigin?: string
  /**
   * <p>第三方项目id</p>
   */
  DataOriginProjectId?: string
  /**
   * <p>第三方数据源id</p>
   */
  DataOriginDatasourceId?: string
  /**
   * <p>集群id</p>
   */
  ClusterId?: string
  /**
   * <p>数据库schema</p>
   */
  Schema?: string
  /**
   * <p>数据库版本</p>
   */
  DbVersion?: string
}

/**
 * ModifyResourceUserGroup请求参数结构体
 */
export interface ModifyResourceUserGroupRequest {
  /**
   * 项目Id
   */
  ProjectId?: number
  /**
   * 用户组id集合
   */
  UserGroupIds?: Array<number | bigint>
  /**
   * 操作的资源权限
   */
  Resource?: ResourceListDTO
  /**
   * 资源类型
   */
  ResourceType?: string
  /**
   * 是否查询所有孩子节点
   */
  QueryChildren?: boolean
}

/**
 * 仅包含id的对象
 */
export interface IdDTO {
  /**
   * <p>请求id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: number
  /**
   * <p>key</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessKey?: string
  /**
   * <p>id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: number
  /**
   * <p>事务id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * <p>事务状态</p><p>枚举值：</p><ul><li>1： 处理中</li><li>2： 处理成功</li><li>3： 处理失败</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranStatus?: number
}

/**
 * ModifyDatasourceCloud请求参数结构体
 */
export interface ModifyDatasourceCloudRequest {
  /**
   * <p>后端提供字典：域类型，1、腾讯云，2、本地</p>
   */
  ServiceType: string
  /**
   * <p>驱动</p><p>枚举值：</p><ul><li>MYSQL： MySQL数据库</li><li>PRESTO： PRESTO数据库</li><li>POSTGRE： PostgreSQL数据库</li><li>DLC： DLC数据库</li><li>MSSQL： 微软SQL Server数据库</li></ul>
   */
  DbType: string
  /**
   * <p>数据库编码</p>
   */
  Charset: string
  /**
   * <p>用户名</p>
   */
  DbUser: string
  /**
   * <p>密码</p>
   */
  DbPwd: string
  /**
   * <p>数据库名称</p>
   */
  DbName: string
  /**
   * <p>数据库别名</p>
   */
  SourceName: string
  /**
   * <p>项目ID</p>
   */
  ProjectId: string
  /**
   * <p>住键</p>
   */
  Id: number
  /**
   * <p>公有云内网ip</p>
   */
  Vip?: string
  /**
   * <p>公有云内网端口</p>
   */
  Vport?: string
  /**
   * <p>vpc标识</p>
   */
  VpcId?: string
  /**
   * <p>统一vpc标识</p>
   */
  UniqVpcId?: string
  /**
   * <p>区域标识（gz,bj)</p>
   */
  RegionId?: string
  /**
   * <p>扩展参数</p>
   */
  ExtraParam?: string
  /**
   * <p>实例id</p>
   */
  InstanceId?: string
  /**
   * <p>数据源产品名</p>
   */
  ProdDbName?: string
  /**
   * <p>第三方数据源标识</p>
   */
  DataOrigin?: string
  /**
   * <p>第三方项目id</p>
   */
  DataOriginProjectId?: string
  /**
   * <p>第三方数据源id</p>
   */
  DataOriginDatasourceId?: string
  /**
   * <p>集群id</p>
   */
  ClusterId?: string
  /**
   * <p>数据库schema</p>
   */
  Schema?: string
  /**
   * <p>数据库版本</p>
   */
  DbVersion?: string
}

/**
 * DescribeDatasourceList请求参数结构体
 */
export interface DescribeDatasourceListRequest {
  /**
   * 无
   */
  ProjectId: number
  /**
   * 返回所有页面，默认false
   */
  AllPage?: boolean
  /**
   * 数据库名称检索
   */
  DbName?: string
  /**
   * 无
   */
  PageNo?: number
  /**
   * 无
   */
  PageSize?: number
  /**
   * 搜索关键词
   */
  Keyword?: string
  /**
   * 过滤无权限列表的参数（0 全量，1 使用权限，2 编辑权限）
   */
  PermissionType?: number
}

/**
 * 数据ID
 */
export interface DataId {
  /**
   * 数据id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: number
}

/**
 * ClearEmbedToken请求参数结构体
 */
export interface ClearEmbedTokenRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 主账号id
   */
  UserCorpId: string
  /**
   * panel , page
   */
  Scope: string
  /**
   * page id
   */
  PageId?: string
}

/**
 * 基础用户信息
 */
export interface UserVO {
  /**
   * u1
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * zhang
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
}

/**
 * DescribeUserGroupMemberList返回参数结构体
 */
export interface DescribeUserGroupMemberListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>结果信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeUserGroupMemberPageListContainer
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户组成员VO出参
 */
export interface UserGroupMemberVO {
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedBy?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
}

/**
 * DescribeUserProjectList返回参数结构体
 */
export interface DescribeUserProjectListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: CorpUserListData
  /**
   * <p>扩展</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>消息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDatasource请求参数结构体
 */
export interface CreateDatasourceRequest {
  /**
   * <p>HOST</p>
   */
  DbHost: string
  /**
   * <p>端口</p>
   */
  DbPort: number
  /**
   * <p>后端提供字典：域类型，1、腾讯云，2、本地</p>
   */
  ServiceType: string
  /**
   * <p>驱动</p><p>枚举值：</p><ul><li>MYSQL： MySQL数据库</li><li>PRESTO： PRESTO数据库</li><li>POSTGRE： PostgreSQL数据库</li><li>DLC： DLC数据库</li><li>MSSQL： 微软SQL Server数据库</li></ul>
   */
  DbType: string
  /**
   * <p>数据库编码</p>
   */
  Charset: string
  /**
   * <p>用户名</p>
   */
  DbUser: string
  /**
   * <p>密码</p>
   */
  DbPwd: string
  /**
   * <p>数据库名称</p>
   */
  DbName: string
  /**
   * <p>数据库别名</p>
   */
  SourceName: string
  /**
   * <p>项目id</p>
   */
  ProjectId: number
  /**
   * <p>catalog值</p>
   */
  Catalog?: string
  /**
   * <p>第三方数据源标识</p>
   */
  DataOrigin?: string
  /**
   * <p>第三方项目id</p>
   */
  DataOriginProjectId?: string
  /**
   * <p>第三方数据源id</p>
   */
  DataOriginDatasourceId?: string
  /**
   * <p>扩展参数</p>
   */
  ExtraParam?: string
  /**
   * <p>腾讯云私有网络统一标识</p>
   */
  UniqVpcId?: string
  /**
   * <p>私有网络ip</p>
   */
  Vip?: string
  /**
   * <p>私有网络端口</p>
   */
  Vport?: string
  /**
   * <p>腾讯云私有网络标识</p>
   */
  VpcId?: string
  /**
   * <p>操作权限限制</p>
   */
  OperationAuthLimit?: Array<string>
  /**
   * <p>开启vpc</p>
   */
  UseVPC?: boolean
  /**
   * <p>地域</p>
   */
  RegionId?: string
  /**
   * <p>数据库schema</p>
   */
  Schema?: string
  /**
   * <p>数据库版本</p>
   */
  DbVersion?: string
}

/**
 * DeleteDatasource请求参数结构体
 */
export interface DeleteDatasourceRequest {
  /**
   * 数据源id
   */
  Id: number
  /**
   * 项目id
   */
  ProjectId: number
}

/**
 * 页面组件信息
 */
export interface WidgetListVO {
  /**
   * uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpId?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 页面id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageId?: string
  /**
   * 组件数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  WidgetList?: Array<WidgetVO>
}

/**
 * ModifyDatasource返回参数结构体
 */
export interface ModifyDatasourceResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>无</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>提示</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePageWidgetList返回参数结构体
 */
export interface DescribePageWidgetListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 返回数据结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: WidgetListVO
  /**
   * 返回消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户组返回参数
 */
export interface UserGroupVO {
  /**
   * 用户组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 用户组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 所属用户组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: number
  /**
   * 所属用户组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentName?: string
  /**
   * 是否默认用户组
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDefault?: number
  /**
   * 用户组管理员
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminUserId?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 排序位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: number
  /**
   * 用户信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserList?: Array<UserGroupUserInfoVO>
}

/**
 * 用户组权限树
 */
export interface UserGroupPageTreeVO {
  /**
   * 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<UserGroupTreeVO>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPages?: number
}

/**
 * CreateDatasourceCloud返回参数结构体
 */
export interface CreateDatasourceCloudResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>成功无</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: IdDTO
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>提示</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 定制化查询
 */
export interface ProjectConfigList {
  /**
   * 模块组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleGroup?: string
  /**
   * 内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Components?: Array<ProjectConfigResult>
}

/**
 * 商业化版本权限分组
 */
export interface PermissionGroup {
  /**
   * 分组名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleGroup?: string
  /**
   * 权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Components?: Array<PermissionComponent>
}

/**
 * API数据源连接配置
 */
export interface ApiDatasourceConfig {
  /**
   * API数据源解析结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldsJsonData?: string
  /**
   * 连接类型1:直连 2:抽取
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectionType?: number
  /**
   * 抽取频率配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrequencyConfig?: FrequencyConfig
  /**
   * 请求URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 1:GET 2:POST
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestMethod?: number
  /**
   * 请求头
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestHeader?: string
  /**
   * 请求参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestParams?: string
  /**
   * 请求体
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestBody?: string
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
  /**
   * 1: 无鉴权 2:BASIC_AUTH
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizationType?: number
  /**
   * 表id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: number
  /**
   * 路径DbName映射
注意：此字段可能返回 null，表示取不到有效值。
   */
  JsonPathDbNameMap?: string
  /**
   * 鉴权API
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthApi?: string
  /**
   * 应用Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppKey?: string
  /**
   * 应用密钥
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppSecret?: string
  /**
   * 数据密钥Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretKey?: string
  /**
   * 数据密钥初始化向量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretIv?: string
}

/**
 * 用户组
 */
export interface UserGroupDTO {
  /**
   * id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 用户组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 父节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: number
  /**
   * 是否为默认
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDefault?: number
  /**
   * 管理员用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminUserId?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 定位
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: number
}

/**
 * DescribeAuthApiKeyList返回参数结构体
 */
export interface DescribeAuthApiKeyListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>{}</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ApiKeyAuthApplyVOList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserGroup返回参数结构体
 */
export interface CreateUserGroupResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>结果信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: UserGroupVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserGroupInfo请求参数结构体
 */
export interface DescribeUserGroupInfoRequest {
  /**
   * 用户组id
   */
  Id?: number
}

/**
 * CreateUserGroupMember请求参数结构体
 */
export interface CreateUserGroupMemberRequest {
  /**
   * <p>用户组id</p>
   */
  GroupId?: number
  /**
   * <p>用户id集合</p>
   */
  UserIdList?: Array<string>
}

/**
 * ModifyAuthApiKey返回参数结构体
 */
export interface ModifyAuthApiKeyResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>&quot;&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>&quot;success&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ApiKeyAuthApplyVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>返回数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * <p>结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserRole返回参数结构体
 */
export interface ModifyUserRoleResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserDetailInfo返回参数结构体
 */
export interface ModifyUserDetailInfoResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePermissionRanksInfo返回参数结构体
 */
export interface DescribePermissionRanksInfoResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>消息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>112</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>无</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RankInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserRoleProject返回参数结构体
 */
export interface ModifyUserRoleProjectResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表字段描述
 */
export interface TableField {
  /**
   * db里的字段column名
   */
  DbName: string
  /**
   * bi展示名
   */
  AliasName: string
  /**
   * db里的字段类型
   */
  DbType: string
  /**
   * BI归类后的抽象字段类型,比如字符串,数字,时间
   */
  FieldType: string
  /**
   * 字段组合计算公式后生成的复杂明细类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldComplexType?: string
  /**
   * 字段描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mark?: string
  /**
   * 字段计算公式
注意：此字段可能返回 null，表示取不到有效值。
   */
  FormatRule?: string
  /**
   * 数据字段是否过滤空值
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFilter?: boolean
  /**
   * 计算字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcType?: string
  /**
   * 计算字段的公式内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcFormula?: string
  /**
   * 计算字段的中文公式内容, 前端展示使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcDesc?: string
  /**
   * 关联字典表id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DictId?: number
  /**
   * 关联字典表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DictName?: string
  /**
   * 非必填, 多表关联新增字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableNodeId?: string
  /**
   * excel
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcelName?: string
  /**
   * 非必填,多表关联新增字段,字段所属的表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * api数据源路径名
注意：此字段可能返回 null，表示取不到有效值。
   */
  JsonPathName?: string
  /**
   * 地理字段标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Granularity?: string
  /**
   * 地图id
注意：此字段可能返回 null，表示取不到有效值。
   */
  GeoJsonId?: number
  /**
   * 空值展示样式配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  EmptyValueConfig?: EmptyValueConfig
  /**
   * 原列名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbFieldName?: string
  /**
   * 是否是复制字段操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCopyOperation?: boolean
  /**
   * 是否从普通字段复制
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCopyFromNormal?: boolean
}

/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
  /**
   * <p>项目Id</p>
   */
  Id: number
  /**
   * <p>名字</p>
   */
  Name?: string
  /**
   * <p>颜色值</p>
   */
  ColorCode?: string
  /**
   * <p>图标</p>
   */
  Logo?: string
  /**
   * <p>备注</p>
   */
  Mark?: string
  /**
   * <p>可申请</p>
   */
  IsApply?: boolean
  /**
   * <p>种子</p>
   */
  Seed?: string
  /**
   * <p>默认看板</p><p>枚举值：</p><ul><li>1： 项目看板</li><li>2： 我的看板</li></ul>
   */
  DefaultPanelType?: number
  /**
   * <p>2</p>
   */
  PanelScope?: string
  /**
   * <p>项目管理平台</p>
   */
  ManagePlatform?: string
}

/**
 * ModifyUserRoleProject请求参数结构体
 */
export interface ModifyUserRoleProjectRequest {
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 角色ID 列表
   */
  RoleIdList?: Array<number | bigint>
  /**
   * 邮箱
   */
  Email?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 企业微信应用用户id
   */
  AppUserId?: string
}

/**
 * ModifyResourceUserGroupResource返回参数结构体
 */
export interface ModifyResourceUserGroupResourceResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjectList请求参数结构体
 */
export interface DescribeProjectListRequest {
  /**
   * 页容，初版默认20，将来可能根据屏幕宽度动态变化
   */
  PageSize?: number
  /**
   * 页标
   */
  PageNo?: number
  /**
   * 检索模糊字段
   */
  Keyword?: string
  /**
   * 是否全部展示，如果是ture，则忽略分页
   */
  AllPage?: boolean
  /**
   * 角色信息
   */
  ModuleCollection?: string
  /**
   * moduleId集合
   */
  ModuleIdList?: Array<string>
}

/**
 * 用户角色信息
 */
export interface UserRoleListDataUserRoleInfo {
  /**
   * 业务ID
   */
  Id?: number
  /**
   * 角色列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleList?: Array<UserRoleListDataRoleInfo>
  /**
   * 角色ID列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleIdList?: Array<number | bigint>
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 企业ID
   */
  CorpId?: string
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedUser?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 更新人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedUser?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * 最后一次登录时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastLogin?: string
  /**
   * 账号状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 手机号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNumber?: string
  /**
   * 手机号区号
注意：此字段可能返回 null，表示取不到有效值。
   */
  AreaCode?: string
  /**
   * 是否为主账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  RootAccount?: boolean
  /**
   * 是否为企业管理员
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpAdmin?: boolean
  /**
   * 企微用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserId?: string
  /**
   * 昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserAliasName?: string
  /**
   * 应用用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserName?: string
  /**
   * 是否在可见范围内
注意：此字段可能返回 null，表示取不到有效值。
   */
  InValidateAppRange?: boolean
  /**
   * 用户openid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppOpenUserId?: string
  /**
   * 邮箱激活状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  EmailActivationStatus?: number
  /**
   * 用户组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserGroupList?: Array<UserGroupDTO>
}

/**
 * DeleteUserGroup返回参数结构体
 */
export interface DeleteUserGroupResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * <p>额外信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * <p>结果信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户组权限树
 */
export interface UserGroupTreeVO {
  /**
   * 当前实体ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 用户组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 父id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: number
  /**
   * 父节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentName?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDefault?: number
  /**
   * 管理员账号id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminUserId?: string
  /**
   * 用户集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserList?: Array<UserVO>
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 排序
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: number
  /**
   * 孩子节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<UserGroupTreeVO>
  /**
   * 是否有孩子节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasChildren?: boolean
  /**
   * 资源集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceList?: Array<ResourceDTO>
}

/**
 * 数据源详情
 */
export interface DatasourceInfo {
  /**
   * 数据库ID
   */
  Id?: number
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 域类型，1、腾讯云，2、本地
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceType?: string
  /**
   * 数据库别名
   */
  SourceName?: string
  /**
   * 数据库驱动
   */
  DbType?: string
  /**
   * HOST
   */
  DbHost?: string
  /**
   * 端口
   */
  DbPort?: number
  /**
   * 用户名
   */
  DbUser?: string
  /**
   * 数据库编码
   */
  Charset?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 修改时间
   */
  UpdatedAt?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedUser?: string
  /**
   * catalog值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Catalog?: string
  /**
   * 连接类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectType?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 数据源描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc?: string
  /**
   * 数据源状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 来源平台
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourcePlat?: string
  /**
   * 扩展参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraParam?: string
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddInfo?: string
  /**
   * 项目名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 引擎类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineType?: string
  /**
   * 数据源负责人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Manager?: string
  /**
   * 特定操作人员白名单
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorWhitelist?: string
  /**
   * 数据源的vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 数据源的uniqVpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqVpcId?: string
  /**
   * 数据源的地域信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionId?: string
  /**
   * 操作属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  StateAction?: BaseStateAction
  /**
   * 更新人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedUser?: string
  /**
   * 权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PermissionList?: Array<PermissionGroup>
  /**
   * 权限值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthList?: Array<string>
  /**
   * 第三方数据源标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataOrigin?: string
  /**
   * 第三方项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataOriginProjectId?: string
  /**
   * 第三方数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataOriginDatasourceId?: string
  /**
   * 集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbTypeName?: string
  /**
   * 开启vpc
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseVPC?: boolean
  /**
   * 所属人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 所属人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerName?: string
  /**
   * 数据库schema
注意：此字段可能返回 null，表示取不到有效值。
   */
  Schema?: string
  /**
   * 数据库版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbVersion?: string
}

/**
 * 资源权限信息
 */
export interface ResourceDTO {
  /**
   * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceName?: string
  /**
   * 是否启用
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceValue?: boolean
  /**
   * 能否变更
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanChange?: boolean
  /**
   * 提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tips?: string
}

/**
 * 项目列表数据
 */
export interface ProjectListData {
  /**
   * 数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<Project>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPages: number
}

/**
 * CreateEmbedToken返回参数结构体
 */
export interface CreateEmbedTokenResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: EmbedTokenInfo
  /**
   * 结果描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserGroup请求参数结构体
 */
export interface DeleteUserGroupRequest {
  /**
   * <p>用户组id</p>
   */
  Id?: number
}

/**
 * 定时任务执行频率配置
 */
export interface FrequencyConfig {
  /**
   * 周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Frequency?: string
  /**
   * 日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dates?: Array<number | bigint>
  /**
   * 时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: string
  /**
   * 间隔时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntervalTime?: number
  /**
   * 1:SECOND,2:MINUTE,3:HOUR,4:DAY
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntervalTimeUnit?: number
  /**
   * 小时列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hours?: Array<number | bigint>
  /**
   * 分钟列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Minute?: Array<number | bigint>
}

/**
 * 资源权限标签过滤参数
 */
export interface ResourceTagValue {
  /**
   * 标签id
   */
  Id?: number
  /**
   * 标签名称
   */
  Name?: string
  /**
   * 标签值列表
   */
  Values?: Array<string>
}

/**
 * DescribePermissionRanksInfo请求参数结构体
 */
export interface DescribePermissionRanksInfoRequest {
  /**
   * <p>页数</p>
   */
  TableId?: number
  /**
   * <p>模式</p><p>枚举值：</p><ul><li>ALL： 全部</li><li>Specify： 指定</li><li>TAG： 标签</li></ul><p>默认值：ALL</p>
   */
  Mode?: string
  /**
   * <p>角色类型</p><p>枚举值：</p><ul><li>ROLES： 按角色</li><li>Others： 其它</li></ul><p>默认值：Others</p>
   */
  RoleType?: string
  /**
   * <p>所有页码</p>
   */
  RoleId?: number
  /**
   * <p>类型</p><p>枚举值：</p><ul><li>ROW： 行权限</li><li>COLUMN： 列权限</li></ul><p>默认值：ROW</p>
   */
  Type?: string
  /**
   * <p>项目id</p>
   */
  ProjectId?: number
}

/**
 * DescribeUserGroupMemberList请求参数结构体
 */
export interface DescribeUserGroupMemberListRequest {
  /**
   * <p>用户组id集合</p>
   */
  GroupIds?: Array<number | bigint>
  /**
   * <p>asc正序,desc倒序</p>
   */
  CreatedOnOrder?: string
  /**
   * <p>搜索关键字</p>
   */
  Keyword?: string
  /**
   * <p>分页大小</p>
   */
  PageSize?: number
  /**
   * <p>分页页码</p>
   */
  PageNo?: number
  /**
   * <p>是否需要分页</p>
   */
  AllPage?: boolean
}

/**
 * DescribeDatasourceList返回参数结构体
 */
export interface DescribeDatasourceListResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 列表详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DatasourceInfoData
  /**
   * 信息
   */
  Extra?: string
  /**
   * 信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义错误信息对象
 */
export interface ErrorInfo {
  /**
   * 错误说明字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorTip?: string
  /**
   * 原始异常信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 错误等级字段
ERROR
WARN
INFO
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorLevel?: string
  /**
   * 指引文档链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocLink?: string
  /**
   * 快速指引说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  FAQ?: string
  /**
   * 预留字段1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReservedField?: string
}

/**
 * 商业版本权限单元
 */
export interface PermissionComponent {
  /**
   * <p>权限值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleId?: string
  /**
   * <p>可用性</p><p>枚举值：</p><ul><li>usable： 可用</li><li>visible： 可见</li><li>disabled： 不可用</li><li>hidden： 隐藏</li></ul><p>默认值：disabled</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeType?: string
  /**
   * <p>目标升级版本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpgradeVersionType?: string
  /**
   * <p>补充信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tips?: string
  /**
   * <p>补充信息的key值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TipsKey?: string
}
