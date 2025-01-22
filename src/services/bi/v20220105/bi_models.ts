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
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
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
   * 返回数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
  /**
   * 项目ID
   */
  Id: number
  /**
   * 随机数
   */
  Seed?: string
  /**
   * 默认看板
   */
  DefaultPanelType?: number
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
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: CorpUserListData
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDatasource请求参数结构体
 */
export interface CreateDatasourceRequest {
  /**
   * HOST
   */
  DbHost: string
  /**
   * 端口
   */
  DbPort: number
  /**
   * 后端提供字典：域类型，1、腾讯云，2、本地
   */
  ServiceType: string
  /**
   * 驱动
   */
  DbType: string
  /**
   * 数据库编码
   */
  Charset: string
  /**
   * 用户名
   */
  DbUser: string
  /**
   * 密码
   */
  DbPwd: string
  /**
   * 数据库名称
   */
  DbName: string
  /**
   * 数据库别名
   */
  SourceName: string
  /**
   * 项目id
   */
  ProjectId: number
  /**
   * catalog值
   */
  Catalog?: string
  /**
   * 第三方数据源标识
   */
  DataOrigin?: string
  /**
   * 第三方项目id
   */
  DataOriginProjectId?: string
  /**
   * 第三方数据源id
   */
  DataOriginDatasourceId?: string
  /**
   * 扩展参数
   */
  ExtraParam?: string
  /**
   * 腾讯云私有网络统一标识
   */
  UniqVpcId?: string
  /**
   * 私有网络ip
   */
  Vip?: string
  /**
   * 私有网络端口
   */
  Vport?: string
  /**
   * 腾讯云私有网络标识
   */
  VpcId?: string
  /**
   * 操作权限限制
   */
  OperationAuthLimit?: Array<string>
  /**
   * 开启vpc
   */
  UseVPC?: boolean
  /**
   * 地域
   */
  RegionId?: string
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
 * ModifyDatasource返回参数结构体
 */
export interface ModifyDatasourceResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ApplyEmbedInterval请求参数结构体
 */
export interface ApplyEmbedIntervalRequest {
  /**
   * 分享项目id，必选
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
   * 配置名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleId?: string
  /**
   * 配置方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeType?: string
  /**
   * 额外参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
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
 * DescribeUserProjectList请求参数结构体
 */
export interface DescribeUserProjectListRequest {
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 无
   */
  AllPage?: boolean
  /**
   * 无
   */
  PageNo?: number
  /**
   * 无
   */
  PageSize?: number
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
 * CreateDatasourceCloud返回参数结构体
 */
export interface CreateDatasourceCloudResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 成功无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: IdDTO
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 提示
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
 * DeleteUserRole请求参数结构体
 */
export interface DeleteUserRoleRequest {
  /**
   * 用户ID
   */
  UserId: string
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
   */
  UserList?: Array<UserIdAndUserName>
  /**
   * 用户列表（新）
   */
  UserInfoList?: Array<UserInfo>
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
 * 仅包含id的对象
 */
export interface IdDTO {
  /**
   * 请求id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: number
  /**
   * key
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessKey?: string
  /**
   * id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: number
  /**
   * 事务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 事务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranStatus?: number
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
   * 100 不绑定用户  200 单用户单token  300 单用户多token
   */
  TokenType?: number
  /**
   * 一次创建的token数
   */
  TokenNum?: number
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
 * DescribeProjectInfo请求参数结构体
 */
export interface DescribeProjectInfoRequest {
  /**
   * 项目Id
   */
  Id: number
  /**
   * 默认看板
   */
  DefaultPanelType?: number
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
  Id: number
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
 * ModifyDatasourceCloud返回参数结构体
 */
export interface ModifyDatasourceCloudResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 成功无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDatasourceCloud请求参数结构体
 */
export interface ModifyDatasourceCloudRequest {
  /**
   * 后端提供字典：域类型，1、腾讯云，2、本地
   */
  ServiceType: string
  /**
   * 驱动
   */
  DbType: string
  /**
   * 数据库编码
   */
  Charset: string
  /**
   * 用户名
   */
  DbUser: string
  /**
   * 密码
   */
  DbPwd: string
  /**
   * 数据库名称
   */
  DbName: string
  /**
   * 数据库别名
   */
  SourceName: string
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 住键
   */
  Id: number
  /**
   * 公有云内网ip
   */
  Vip?: string
  /**
   * 公有云内网端口
   */
  Vport?: string
  /**
   * vpc标识
   */
  VpcId?: string
  /**
   * 统一vpc标识
   */
  UniqVpcId?: string
  /**
   * 区域标识（gz,bj)
   */
  RegionId?: string
  /**
   * 扩展参数
   */
  ExtraParam?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 数据源产品名
   */
  ProdDbName?: string
  /**
   * 第三方数据源标识
   */
  DataOrigin?: string
  /**
   * 第三方项目id
   */
  DataOriginProjectId?: string
  /**
   * 第三方数据源id
   */
  DataOriginDatasourceId?: string
  /**
   * 集群id
   */
  ClusterId?: string
}

/**
 * ModifyDatasource请求参数结构体
 */
export interface ModifyDatasourceRequest {
  /**
   * HOST
   */
  DbHost: string
  /**
   * 端口
   */
  DbPort: number
  /**
   * 后端提供字典：域类型，1、腾讯云，2、本地
   */
  ServiceType: string
  /**
   * 驱动
   */
  DbType: string
  /**
   * 数据库编码
   */
  Charset: string
  /**
   * 用户名
   */
  DbUser: string
  /**
   * 密码
   */
  DbPwd: string
  /**
   * 数据库名称
   */
  DbName: string
  /**
   * 数据库别名
   */
  SourceName: string
  /**
   * 数据源id
   */
  Id: number
  /**
   * 项目ID
   */
  ProjectId: number
  /**
   * catalog值
   */
  Catalog?: string
  /**
   * 第三方数据源标识
   */
  DataOrigin?: string
  /**
   * 第三方项目id
   */
  DataOriginProjectId?: string
  /**
   * 第三方数据源id
   */
  DataOriginDatasourceId?: string
  /**
   * 扩展参数
   */
  ExtraParam?: string
  /**
   * 腾讯云私有网络统一标识
   */
  UniqVpcId?: string
  /**
   * 私有网络ip
   */
  Vip?: string
  /**
   * 私有网络端口
   */
  Vport?: string
  /**
   * 腾讯云私有网络标识
   */
  VpcId?: string
  /**
   * 开启vpc
   */
  UseVPC?: boolean
  /**
   * 地域
   */
  RegionId?: string
}

/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
  /**
   * 项目Id
   */
  Id: number
  /**
   * 名字
   */
  Name?: string
  /**
   * 颜色值
   */
  ColorCode?: string
  /**
   * 图标
   */
  Logo?: string
  /**
   * 备注
   */
  Mark?: string
  /**
   * 可申请
   */
  IsApply?: boolean
  /**
   * 种子
   */
  Seed?: string
  /**
   * 默认看板
   */
  DefaultPanelType?: number
  /**
   * 2
   */
  PanelScope?: string
  /**
   * 项目管理平台
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
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 额外数据
   */
  Extra?: string
  /**
   * 数据
   */
  Data?: Data
  /**
   * 返回信息
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
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 项目详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Project
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * ”“
   */
  Extra?: string
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * ""
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateUserRoleProject请求参数结构体
 */
export interface CreateUserRoleProjectRequest {
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 角色ID列表
   */
  RoleIdList?: Array<number | bigint>
  /**
   * 用户列表（废弃）
   */
  UserList?: Array<UserIdAndUserName>
  /**
   * 用户列表（新）
   */
  UserInfoList?: Array<UserInfo>
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
 * CreateDatasource返回参数结构体
 */
export interface CreateDatasourceResponse {
  /**
   * 自定义错误信息对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ErrorInfo
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: IdDTO
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateDatasourceCloud请求参数结构体
 */
export interface CreateDatasourceCloudRequest {
  /**
   * 后端提供字典：域类型，1、腾讯云，2、本地
   */
  ServiceType: string
  /**
   * 驱动
   */
  DbType: string
  /**
   * 数据库编码
   */
  Charset: string
  /**
   * 用户名
   */
  DbUser: string
  /**
   * 密码
   */
  DbPwd: string
  /**
   * 数据库名称
   */
  DbName: string
  /**
   * 数据库别名
   */
  SourceName: string
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 公有云内网ip
   */
  Vip?: string
  /**
   * 公有云内网端口
   */
  Vport?: string
  /**
   * vpc标识
   */
  VpcId?: string
  /**
   * 统一vpc标识
   */
  UniqVpcId?: string
  /**
   * 区域标识（gz,bj)
   */
  RegionId?: string
  /**
   * 扩展参数
   */
  ExtraParam?: string
  /**
   * 实例Id
   */
  InstanceId?: string
  /**
   * 数据源产品名
   */
  ProdDbName?: string
  /**
   * 第三方数据源标识
   */
  DataOrigin?: string
  /**
   * 第三方项目id
   */
  DataOriginProjectId?: string
  /**
   * 第三方数据源id
   */
  DataOriginDatasourceId?: string
  /**
   * 集群id
   */
  ClusterId?: string
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
 * 用户ID和用户名
 */
export interface UserIdAndUserName {
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpId?: string
  /**
   * 电子邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 最后一次登录时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastLogin?: string
  /**
   * 停启用状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 首次登陆是否修改密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstModify?: number
  /**
   * 手机号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNumber?: string
  /**
   * 手机区号
注意：此字段可能返回 null，表示取不到有效值。
   */
  AreaCode?: string
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
   * 更改人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedUser?: string
  /**
   * 更改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * 全局角色
注意：此字段可能返回 null，表示取不到有效值。
   */
  GlobalUserName?: string
  /**
   * 手机号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mobile?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserId?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserAliasName?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppUserName?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  InValidateAppRange?: boolean
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
   * 项目名称
   */
  Name: string
  /**
   * logo底色
   */
  ColorCode: string
  /**
   * 项目Logo
   */
  Logo?: string
  /**
   * 备注
   */
  Mark?: string
  /**
   * 是否允许用户申请
   */
  IsApply?: boolean
  /**
   * 默认看板
   */
  DefaultPanelType?: number
  /**
   * 管理平台
   */
  ManagePlatform?: string
}

/**
 * 商业版本权限单元
 */
export interface PermissionComponent {
  /**
   * 权限值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleId?: string
  /**
   * 可见/可用
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeType?: string
  /**
   * 目标升级版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpgradeVersionType?: string
  /**
   * 补充信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tips?: string
  /**
   * 补充信息的key值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TipsKey?: string
}
