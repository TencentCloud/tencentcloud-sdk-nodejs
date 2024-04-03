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
 * DescribeWorkSpaceBuildingCountAndArea请求参数结构体
 */
export interface DescribeWorkSpaceBuildingCountAndAreaRequest {
  /**
   * 工作空间ID列表
   */
  WorkspaceIdList: Array<string>
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 应用列表
 */
export interface ApplicationList {
  /**
   * 应用列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationInfoList?: Array<ApplicationInfo>
  /**
   * 当前查询条件命中的数据总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: string
}

/**
 * SaveDeviceGroup请求参数结构体
 */
export interface SaveDeviceGroupRequest {
  /**
   * 分组名称
   */
  Name: string
  /**
   * 分组描述
   */
  Description: string
  /**
   * 空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 分组id, 携带则为修改, 不携带则为新增
   */
  Id?: number
  /**
   * 分组父级id
   */
  ParentId?: number
}

/**
 * 分组信息实体类
 */
export interface DescribeGroupInfo {
  /**
   * 分组
   */
  Id?: number
  /**
   * 设备分组名称
   */
  Name?: string
  /**
   * 分组描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 分组父级ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: number
}

/**
 * 告警信息
 */
export interface AlarmInfo {
  /**
   * 工作空间id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: number
  /**
   * 告警ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 告警状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 告警时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: number
  /**
   * 告警业务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 告警业务类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeName?: string
  /**
   * 子告警类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubType?: string
  /**
   * 子告警类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubTypeName?: string
  /**
   * 告警级别id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: number
  /**
   * 告警级别名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LevelName?: string
  /**
   * 上报应用appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 设备wid
注意：此字段可能返回 null，表示取不到有效值。
   */
  WID?: string
  /**
   * 设备名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceName?: string
  /**
   * 空间位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position?: string
  /**
   * 上报图片
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportImg?: ReportImg
  /**
   * 告警描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc?: string
  /**
   * 处理人
注意：此字段可能返回 null，表示取不到有效值。
   */
  HandlePersonSet?: Array<HandlerPersonInfo>
  /**
   * 处理记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  HandleRecordSet?: Array<HandleRecordInfo>
  /**
   * 扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extend?: string
  /**
   * 应用扩展字段1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtendOne?: string
  /**
   * 应用扩展字段2
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtendTwo?: string
  /**
   * 应用透传字段,有效字段为x-json后的字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Echo?: string
}

/**
 * 设备数据信息
 */
export interface DeviceDataInfo {
  /**
   * 设备ID， wid
注意：此字段可能返回 null，表示取不到有效值。
   */
  WID?: string
  /**
   * 设备名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceName?: string
  /**
   * 设备类型Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceTypeCode?: string
  /**
   * 设备类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceTypeName?: string
  /**
   * 产品Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: number
  /**
   * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName?: string
  /**
   * 产品能力:信令数据、音视频。二进制数值中第0位表示信令数据、第1位表示音视频 。1（信令数据），3（具有信令数据以及音视频能力）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductAbility?: number
  /**
   * 设备位置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceInfoSet?: Array<DeviceSpaceInfo>
  /**
   * 模型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * 设备标签名，非必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceTagSet?: Array<string>
  /**
   * 激活状态（1激活、0未激活）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsActive?: number
  /**
   *  激活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveTime?: string
  /**
   * 推流状态（推流中、未推流） 仅摄像机有的状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLive?: boolean
  /**
   * 设备所属父设备id（子设备才有）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentWID?: string
  /**
   * 设备所有父设备名称（子设备才有）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentWIDName?: string
  /**
   * 序列号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SN?: string
  /**
   * 设备点位坐标值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: DeviceLocation
  /**
   * 自定义字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldList?: Array<CustomFieldInfo>
  /**
   * 分组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupInfo?: string
  /**
   * 通信在/离线状态（online=normal+fault，offline）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceStatus?: string
  /**
   * 设备业务状态（normal、fault、offline）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * 查询建筑信息响应体
 */
export interface BuildingProfileRes {
  /**
   * 建筑概要信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingProfile?: BuildingProfile
}

/**
 * DescribeAlarmTypeList返回参数结构体
 */
export interface DescribeAlarmTypeListResponse {
  /**
   * 告警类型列表查询
   */
  Result?: DescribeAlarmTypeListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceStatusStat请求参数结构体
 */
export interface DescribeDeviceStatusStatRequest {
  /**
   * 所属空间地理层级，必填。0表示查询所有层级（1、2）的设备状态，1表示楼栋，2表示楼层
   */
  Level: number
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 空间位置，非必填。为空表示查询所有（1，2）层级
   */
  SpaceCodeSet?: Array<string>
  /**
   * 设备类型，非必填。为空表示查询所有设备类型
   */
  DeviceTypeSet?: Array<string>
}

/**
 * 产品列表查询结果
 */
export interface ProductSet {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 产品信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Product?: Array<ProductInfo>
}

/**
 * 动作信息
 */
export interface Action {
  /**
   * 动作id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 动作名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * DescribeTenantBuildingCountAndArea请求参数结构体
 */
export interface DescribeTenantBuildingCountAndAreaRequest {
  /**
   * 租户所有工作空间ID列表
   */
  WorkspaceIdList: Array<string>
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * AddAlarmProcessRecord请求参数结构体
 */
export interface AddAlarmProcessRecordRequest {
  /**
   * 处理记录项
   */
  RecordSet: Array<ProcessRecordInfo>
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 非孪生平台外部应用appid
   */
  ApplicationId?: number
  /**
   * 此字段填写的是非孪生中台的用户id（多个用逗号分隔），如果是非孪生中台用户必填该字段

   */
  ExtendOne?: string
}

/**
 * DescribeInterfaceList返回参数结构体
 */
export interface DescribeInterfaceListResponse {
  /**
   * API列表
   */
  Result?: ApiInfoList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 上报消息概要
 */
export interface MessageProfile {
  /**
   * 应用类型
   */
  AppType: string
  /**
   * 模型Id
   */
  ModelId?: string
  /**
   * 设备类型
   */
  PoiCode?: string
}

/**
 * 设备标签修改信息入参
 */
export interface ModifyDeviceTagInfo {
  /**
   * 设备id
   */
  WID: string
  /**
   * 设备标签名称集合
   */
  NameSet: Array<string>
}

/**
 * ModifyDeviceName返回参数结构体
 */
export interface ModifyDeviceNameResponse {
  /**
   * 返回请求结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdgeApplicationToken返回参数结构体
 */
export interface DescribeEdgeApplicationTokenResponse {
  /**
   * 边缘应用令牌信息
   */
  Result?: ApplicationTokenInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备点位坐标值
 */
export interface DeviceLocation {
  /**
   * 点位X坐标值
注意：此字段可能返回 null，表示取不到有效值。
   */
  X?: number
  /**
   * 点位Y坐标值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Y?: number
  /**
   * 点位Z坐标值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Z?: number
}

/**
 * 租户人员结果
 */
export interface SsoUserResult {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 租户人员数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Users?: Array<SsoUser>
}

/**
 * 部门用户
 */
export interface SsoTeamUser {
  /**
   * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealName?: string
  /**
   * 用户类型，1-超级管理员；2-1号管理员；3-普通管理员；99-普通用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserType?: string
  /**
   * 所属租户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: string
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 电话
注意：此字段可能返回 null，表示取不到有效值。
   */
  Phone?: string
  /**
   * 用户状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateAt?: number
  /**
   * 部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentId?: string
  /**
   * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentName?: string
  /**
   * 是否关联权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkFilter?: number
}

/**
 * 添加设备信息
 */
export interface AddDeviceInfo {
  /**
   * 产品id
   */
  ProductId: number
  /**
   * 设备sn序列号
   */
  SN: string
  /**
   * 父设备wid，不为空表示导入子设备
   */
  ParentWID?: string
  /**
   * 密钥来源：0-使用产品密钥 1-使用设备特有的密钥
   */
  KeySource?: number
}

/**
 * 空结果返回
 */
export interface EmptyRes {
  /**
   * 返回请求状态,成功ok，失败error
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
}

/**
 * API参数信息
 */
export interface ApiContent {
  /**
   * 所属API的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 参数名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 参数类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 是否为动态值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dynamic?: boolean
  /**
   * 是否必填
注意：此字段可能返回 null，表示取不到有效值。
   */
  Required?: boolean
  /**
   * 参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultValue?: string
}

/**
 * DescribeWorkspaceList返回参数结构体
 */
export interface DescribeWorkspaceListResponse {
  /**
   * 项目空间列表
   */
  Result?: WorkspaceInfoList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备-空间绑定关系响应体
 */
export interface SpaceDeviceRelationRes {
  /**
   * 设备空间绑定关系列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceDeviceRelationList?: Array<SpaceDeviceRelation>
}

/**
 * 产品信息
 */
export interface ProductInfo {
  /**
   * 工作空间id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: number
  /**
   * 产品PID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: number
  /**
   * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName?: string
  /**
   * 设备类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceTypeName?: string
  /**
   * 设备类型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceTypeId?: string
  /**
   * 产品属性，如：网关（1）、直连设备（2）、子设备（3）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Attribute?: number
  /**
   * 产品型号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductType?: string
  /**
   * 产品能力:信令数据、音视频。二进制数值中第0位表示信令数据、第1位表示音视频 。1（信令数据），3（具有信令数据以及音视频能力）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductAbility?: number
  /**
   * 生产厂商
注意：此字段可能返回 null，表示取不到有效值。
   */
  Manufacturer?: string
  /**
   * 维保厂商
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaintenanceMfr?: string
  /**
   * 物模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * 物模型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
  /**
   * 物模型类型，产品模型/标准模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: number
}

/**
 * API描述
 */
export interface ApiInfo {
  /**
   * API的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiId?: string
  /**
   * API名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * API所属应用的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * API所属的项目空间的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: string
  /**
   * API所属目录的编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoiCode?: string
  /**
   *  接口分类0. 其他服务 1. IOT服务 2. 空间服务 3.微应用服务 4.场景服务 5.AI算法服务 6.任务算法服务 7.第三方服务
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 数据授权 0:否 1:是
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataAudit?: number
  /**
   * 是否需要申请 0:否 1:是
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplyAudit?: number
  /**
   * API详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * API地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address?: string
  /**
   * 请求方法类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Method?: string
  /**
   * API状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * API预览地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreviewUrl?: string
  /**
   * query参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueryParams?: Array<ApiContent>
  /**
   * 路径参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PathParams?: Array<ApiContent>
  /**
   * 请求头
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestHeaders?: Array<ApiContent>
  /**
   * 响应头
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResponseHeaders?: Array<ApiContent>
  /**
   * 是否为公共空间接口
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCommonSpace?: boolean
  /**
   * 请求体（base64编码）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Body?: string
  /**
   * 响应体（base64编码）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResponseBody?: string
  /**
   * 接口方式 1.http 2消息通知服务
注意：此字段可能返回 null，表示取不到有效值。
   */
  Style?: number
}

/**
 * DescribeModelList返回参数结构体
 */
export interface DescribeModelListResponse {
  /**
   * 模型列表查询结果
   */
  Result?: ModelSet
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleDetail请求参数结构体
 */
export interface DescribeRuleDetailRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: string
  /**
   * 联动id
   */
  Id: string
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * BatchCreateDevice返回参数结构体
 */
export interface BatchCreateDeviceResponse {
  /**
   * 批量新增设备返回结果
   */
  Result?: BatchCreateDeviceRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 构件属性信息响应体
 */
export interface ElementPropertyRes {
  /**
   * 建筑id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingId?: string
  /**
   * 构件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementId?: string
  /**
   * 构件属性集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  PropertySet?: Array<ElementProperty>
  /**
   * 构件地理坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Coordinates?: ElementCoordinates
  /**
   * 构件偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Translate?: ElementTranslate
  /**
   * 构件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementName?: string
  /**
   * 构件类型代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  EntityTypeCode?: string
  /**
   * 构件类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EntityTypeName?: string
}

/**
 * CreateApplicationToken返回参数结构体
 */
export interface CreateApplicationTokenResponse {
  /**
   * 应用令牌信息
   */
  Result?: ApplicationTokenInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTenantUserList请求参数结构体
 */
export interface DescribeTenantUserListRequest {
  /**
   * 翻页页码
   */
  Offset: number
  /**
   * 翻页大小
   */
  Limit: number
  /**
   * token
   */
  ApplicationToken: string
  /**
   * 租户ID
   */
  TenantId?: string
  /**
   * 更新时间戳，单位秒
   */
  UpdateAt?: number
  /**
   * 部门ID
   */
  DepartmentId?: string
  /**
   * 用户id
   */
  Cursor?: string
  /**
   * 状态，0，获取所有数据，1正常启用，2禁用
   */
  Status?: number
  /**
   * 项目空间id
   */
  WorkspaceId?: string
  /**
   * 关键词
   */
  Keyword?: string
  /**
   * 是否递归获取子级数据，0需要，1不需要，默认为0
   */
  NoRecursive?: string
}

/**
 * BatchReportAppMessage返回参数结构体
 */
export interface BatchReportAppMessageResponse {
  /**
   * 批量消息上报结果
   */
  Result?: BatchReportAppMessageRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceStatusList返回参数结构体
 */
export interface DescribeDeviceStatusListResponse {
  /**
   * 查询设备状态结果
   */
  Result?: DeviceStatusRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDeviceName请求参数结构体
 */
export interface ModifyDeviceNameRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 设备修改信息集合
   */
  Set: Array<DeviceModifyInfo>
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * DeleteDeviceGroup返回参数结构体
 */
export interface DeleteDeviceGroupResponse {
  /**
   * 无返回信息
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmStatusList请求参数结构体
 */
export interface DescribeAlarmStatusListRequest {
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 工作空间ID
   */
  WorkspaceId: string
}

/**
 * DescribeFileDownloadURL返回参数结构体
 */
export interface DescribeFileDownloadURLResponse {
  /**
   * 文件下载URL地址
   */
  Result?: FileDownloadURL
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleDetail返回参数结构体
 */
export interface DescribeRuleDetailResponse {
  /**
   * 规则详情查询结果
   */
  Result?: RuleDetailRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 上报消息结果
 */
export interface ReportMsgRes {
  /**
   * 上报消息对应下标的16位标识Id, 即第几个消息

注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportId?: string
  /**
   * 上报消息结果，1表示成功推送，0表示推送失败

注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportStatus?: number
}

/**
 * 设备分组信息
 */
export interface DescribeDeviceGroupListRes {
  /**
   * 设备分组list
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<DescribeGroupInfo>
}

/**
 * DescribeSpaceInfoByDeviceId返回参数结构体
 */
export interface DescribeSpaceInfoByDeviceIdResponse {
  /**
   * 设备绑定的空间信息出参
   */
  Result?: DeviceSpaceInfoRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationList请求参数结构体
 */
export interface DescribeApplicationListRequest {
  /**
   * 项目空间id，本次查询返回的应用均关联至该空间
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 应用id数组，可选，填了则表示根据id批量查询
   */
  ApplicationId?: Array<number | bigint>
  /**
   * 请求页号
   */
  PageNumber?: number
  /**
   * 页容量，默认为10
   */
  PageSize?: number
}

/**
 * 构件树节点信息
 */
export interface ElementProfileTreeNode {
  /**
   * 构件概要信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementProfile?: ElementProfile
  /**
   * 子节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<ElementProfileTreeNode>
}

/**
 * 工作空间信息描述
 */
export interface WorkspaceInfo {
  /**
   * 工作空间Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: number
  /**
   * 工作空间中文名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChineseName?: string
  /**
   * 工作空间描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 工作空间是否删除状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 该工作空间绑定的区/县的行政区名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParkName?: string
  /**
   * 该工作空间绑定的区/县的行政区编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParkNum?: string
  /**
   * 获取该工作空间绑定的区/县的上级行政区划信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdministrativeDetailSet?: Array<AdministrativeDetail>
}

/**
 * DescribeSceneList请求参数结构体
 */
export interface DescribeSceneListRequest {
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * DescribeDeviceList请求参数结构体
 */
export interface DescribeDeviceListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 分页查询，第几页，必传，大于0
   */
  PageNumber: number
  /**
   * 每页条数，必传大于0
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 设备类型，非必填
   */
  DeviceTypeSet?: Array<string>
  /**
   * 产品 pid，非必填
   */
  ProductIdSet?: Array<number | bigint>
  /**
   * 设备标签，非必填
   */
  TagIdSet?: Array<number | bigint>
  /**
   * 空间层级
   */
  SpaceCodeSet?: Array<string>
  /**
   * 设备标签名，非必填
   */
  DeviceTagSet?: Array<string>
  /**
   * 设备wid,非必填
   */
  WIDSet?: Array<string>
  /**
   * 自定义字段
   */
  Field?: CustomField
  /**
   * 分组id列表，非必填
   */
  GroupIdSet?: Array<number | bigint>
  /**
   * 是否激活，默认全部，"1"激活，"0"未激活
   */
  IsActive?: string
  /**
   * 是否为摄像头，默认全部，"true"摄像头，"false"非摄像头
   */
  IsCamera?: string
}

/**
 * DescribeSpaceRelationByDeviceId请求参数结构体
 */
export interface DescribeSpaceRelationByDeviceIdRequest {
  /**
   * 设备id
   */
  DeviceId: string
  /**
   * 工作空间id
   */
  WorkspaceId: string
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 告警类型详情信息
 */
export interface AlarmTypeDetailInfo {
  /**
   * 告警类型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 父节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: number
  /**
   * 0-标准告警类型，1-自定义告警类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 告警名称类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 告警类型英文名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnglishName?: string
}

/**
 * ChangeAlarmStatus返回参数结构体
 */
export interface ChangeAlarmStatusResponse {
  /**
   * 返回空结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBuildingModel返回参数结构体
 */
export interface DescribeBuildingModelResponse {
  /**
   * 建模模型信息出参
   */
  Result?: BuildingModelRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceGroupList返回参数结构体
 */
export interface DescribeDeviceGroupListResponse {
  /**
   * 分组信息
   */
  Result?: DescribeDeviceGroupListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeElementProfilePage请求参数结构体
 */
export interface DescribeElementProfilePageRequest {
  /**
   * 建筑id
   */
  BuildingId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 页容量
   */
  PageSize: number
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 父级构件id
   */
  ParentElementIds?: Array<string>
  /**
   * 空间层级
   */
  Level?: number
  /**
   * 空间分类代码
   */
  SpaceTypeCode?: string
  /**
   * 构件类型
   */
  EntityTypes?: Array<string>
  /**
   * 是否包含已删除构件
   */
  IncludeDelete?: boolean
  /**
   * 时间范围-开始
   */
  StartTime?: number
  /**
   * 时间范围-结束
   */
  EndTime?: number
}

/**
 * DescribePropertyList返回参数结构体
 */
export interface DescribePropertyListResponse {
  /**
   * 构件属性信息出参
   */
  Result?: ElementPropertyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceDeviceRelationList请求参数结构体
 */
export interface DescribeSpaceDeviceRelationListRequest {
  /**
   * 构件id列表
   */
  ElementIds: Array<string>
  /**
   * 是否级联
   */
  IsCascade: boolean
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 页容量
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 获取文件上传URL接口回包
 */
export interface FileUploadURL {
  /**
   * 上传地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  UploadURL?: string
  /**
   * 文件Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileId?: string
  /**
   * 下载地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownloadURL?: string
}

/**
 * DescribeApplicationList返回参数结构体
 */
export interface DescribeApplicationListResponse {
  /**
   * 应用列表
   */
  Result?: ApplicationList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 构件属性信息
 */
export interface ElementProperty {
  /**
   * 属性名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 属性描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 属性内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
}

/**
 * 建筑列表响应体
 */
export interface BuildingListRes {
  /**
   * 建筑列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingProfileList?: Array<BuildingProfile>
}

/**
 * 设备位置信息
 */
export interface DeviceSpaceInfo {
  /**
   * 空间Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 空间名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 空间级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: number
  /**
   * 空间编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
}

/**
 * DescribeFileDownloadURL请求参数结构体
 */
export interface DescribeFileDownloadURLRequest {
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 文件Id
   */
  FileId: string
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 设备状态统计结果
 */
export interface DeviceStatusStatRes {
  /**
   * 工作空间Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: number
  /**
   * 汇总数。在线（正常+故障） + 离线
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 正常数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NormalSum?: number
  /**
   * 离线数
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineSum?: number
  /**
   * 故障数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FaultSum?: number
  /**
   * 设备类型概览列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceTypeOverviewSet?: Array<DeviceTypeOverview>
  /**
   * 设备类型统计列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatLevelSet?: Array<StatLevel>
}

/**
 * 告警处理人列表
 */
export interface HandlerPersonInfo {
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * 事件信息
 */
export interface Event {
  /**
   * 事件id或动作Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 事件名称或动作名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * StopVideoStreaming请求参数结构体
 */
export interface StopVideoStreamingRequest {
  /**
   * 流的唯一标识，播放链接尾缀
   */
  Stream: string
  /**
   * 设备的唯一标识

   */
  WID: string
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 项目空间楼栋数量与建筑面积出参
 */
export interface SpaceDataStats {
  /**
   * 工作空间ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: string
  /**
   * 工作空间名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceName?: string
  /**
   * 楼栋数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingCount?: number
  /**
   * 建筑面积
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingArea?: number
}

/**
 * DescribeSpaceTypeList请求参数结构体
 */
export interface DescribeSpaceTypeListRequest {
  /**
   * 项目空间ID
   */
  WorkspaceId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 页容量
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 项目空间详细信息
 */
export interface SpaceInfo {
  /**
   * 项目空间id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: number
  /**
   * 租户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: number
  /**
   * 英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnglishName?: string
  /**
   * 中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChineseName?: string
  /**
   * 项目空间描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 项目空间状态:0 启用 1 停用 -1 已删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 是否是公共空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCommWorkspace?: boolean
  /**
   * 有效期开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidityStartTime?: string
  /**
   * 有效期结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidityEndTime?: string
  /**
   * 选中状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Selected?: number
  /**
   * 系统生成状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSystem?: number
}

/**
 * DescribeModelList请求参数结构体
 */
export interface DescribeModelListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 分页查询，第几页，大于0
   */
  PageNumber: number
  /**
   * 每页条数，大于0
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 设备类型
   */
  DeviceTypeSet?: Array<string>
  /**
   * 产品 pid
   */
  ProductIdSet?: Array<number | bigint>
  /**
   * 模型id
   */
  ModelIdSet?: Array<string>
}

/**
 * 云录像接口结果
 */
export interface VideoCloudRecordRes {
  /**
   * 录像信息总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 录像信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordSet?: Array<RecordInfo>
}

/**
 * 部门用户结果
 */
export interface SsoDepartmentsResult {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 部门列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Departments?: Array<SsoDepartment>
}

/**
 * 视频流查询结果
 */
export interface VideoRecordStreamRes {
  /**
   * FLV协议格式视频流
注意：此字段可能返回 null，表示取不到有效值。
   */
  FLV?: string
  /**
   * RTMP协议格式视频流
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTMP?: string
  /**
   * HLS协议格式视频流
注意：此字段可能返回 null，表示取不到有效值。
   */
  HLS?: string
  /**
   * WebRtc协议格式视频流
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebRTC?: string
  /**
   * RAW协议格式视频流
注意：此字段可能返回 null，表示取不到有效值。
   */
  RAW?: RawInfo
  /**
   * 视频流的唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Stream?: string
}

/**
 * 设备控制结果
 */
export interface ControlDeviceRes {
  /**
   * 设备Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WID?: string
  /**
   * 指令接受, 0表示成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: number
  /**
   * 控制结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: string
  /**
   * 批量大于1时，可用此seq进行链路追踪
注意：此字段可能返回 null，表示取不到有效值。
   */
  Seq?: string
}

/**
 * 项目空间列表
 */
export interface WorkspaceInfoList {
  /**
   * 项目空间列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<SpaceInfo>
}

/**
 * 建模模型信息响应体
 */
export interface BuildingModelRes {
  /**
   * 建模模型信息出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Models?: Array<BuildingModel>
}

/**
 * DescribeBuildingList返回参数结构体
 */
export interface DescribeBuildingListResponse {
  /**
   * 查询建筑列表出参
   */
  Result?: BuildingListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeleteDevice返回参数结构体
 */
export interface BatchDeleteDeviceResponse {
  /**
   * 返回请求结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 空间层级关系响应体
 */
export interface SpaceRelationRes {
  /**
   * 空间层级关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceRelation?: SpaceRelation
}

/**
 * 空间用户结果
 */
export interface SsoTeamUserResult {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 部门用户列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Users?: Array<SsoTeamUser>
}

/**
 * DescribeWorkspaceUserList返回参数结构体
 */
export interface DescribeWorkspaceUserListResponse {
  /**
   * 返回数据
   */
  Result?: SsoTeamUserResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePropertyList请求参数结构体
 */
export interface DescribePropertyListRequest {
  /**
   * 建筑id
   */
  BuildingId: string
  /**
   * 构件id
   */
  ElementId: string
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 事件列表查询结果
 */
export interface DescribeEventListRes {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 事件信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventDetailSet?: Array<EventDetail>
}

/**
 * DescribeProductList请求参数结构体
 */
export interface DescribeProductListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 分页查询，第几页
   */
  PageNumber: number
  /**
   * 每页条数，大于0
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 设备类型
   */
  DeviceTypeSet?: Array<string>
  /**
   * 产品 pid
   */
  ProductIdSet?: Array<number | bigint>
  /**
   * 模型id
   */
  ModelIdSet?: Array<string>
}

/**
 * 应用logo
 */
export interface ApplicationLogo {
  /**
   * logo图片对应的fileId
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileId?: string
  /**
   * logo图片地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
}

/**
 * 联动规则列表查询结果
 */
export interface DescribeLinkRuleListRes {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 联动规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkRuleSet?: Array<LinkRuleInfo>
}

/**
 * 导入失败设备信息
 */
export interface CreateDeviceFailed {
  /**
   * 产品id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: number
  /**
   * 父设备wid，不为空表示导入自设备
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentWID?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 设备sn序列号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SN?: string
}

/**
 * 构件平移信息
 */
export interface ElementTranslate {
  /**
   * X方向偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  X?: number
  /**
   * Y方向偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Y?: number
  /**
   * Z方向偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Z?: number
}

/**
 * ControlCameraPTZ返回参数结构体
 */
export interface ControlCameraPTZResponse {
  /**
   * 控制摄像头结果返回
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkspaceList请求参数结构体
 */
export interface DescribeWorkspaceListRequest {
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 工作空间id，非必填，填了则表示根据id进行批量查询
   */
  WorkspaceId?: number
}

/**
 * ModifyDeviceField返回参数结构体
 */
export interface ModifyDeviceFieldResponse {
  /**
   * 返回请求结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ControlDevice请求参数结构体
 */
export interface ControlDeviceRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 设备wid，最大100个
   */
  WIDSet: Array<string>
  /**
   * 控制内容
   */
  ControlData: string
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 是否同步返回设备下控ack结果
   */
  IsSynchronized?: boolean
}

/**
 * DescribeDeviceTypeList返回参数结构体
 */
export interface DescribeDeviceTypeListResponse {
  /**
   * 设备的设备类型列表
   */
  Result?: DeviceTypeSet
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警状态返回结构体
 */
export interface AlarmStatusData {
  /**
   * 告警状态ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusID?: string
  /**
   * 告警状态名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusName?: string
  /**
   * 告警状态类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusType?: string
}

/**
 * 录像信息
 */
export interface RecordInfo {
  /**
   * 本录像片段开始时间（s）
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: number
  /**
   * 本录像片段结束时间（s）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: number
  /**
   * 录像片段文件url
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoURL?: string
}

/**
 * DescribeVideoRecordStream返回参数结构体
 */
export interface DescribeVideoRecordStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 导入成功设备信息
 */
export interface CreateDeviceSucceeded {
  /**
   * 产品id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: number
  /**
   * 父设备wid，不为空表示导入自设备
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentWID?: string
  /**
   * 设备编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  WID?: string
  /**
   * 设备sn序列号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SN?: string
}

/**
 * 场景信息
 */
export interface SceneInfo {
  /**
   * 场景id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SceneId?: string
  /**
   * 场景名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SceneName?: string
  /**
   * 场景版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
}

/**
 * 规则详情查询结果
 */
export interface RuleDetailRes {
  /**
   * 联动id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: number
  /**
   * 联动名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName?: string
  /**
   * 联动说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleDesc?: string
  /**
   * 1 全天有效，0：固定时间段有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidType?: number
  /**
   * 有效期，json字符串（全天有效时为空）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidPeriod?: string
  /**
   * 起始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginDate?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndDate?: string
  /**
   * 启用状态。1-启用，0-停用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 触发规则，事件的组合
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventRule?: string
  /**
   * 事件对象集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventInfoSet?: Array<EventObj>
  /**
   * 动作对象集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActionInfoSet?: Array<ActionObj>
}

/**
 * DescribeAlarmLevelList请求参数结构体
 */
export interface DescribeAlarmLevelListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * BatchReportAppMessage请求参数结构体
 */
export interface BatchReportAppMessageRequest {
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 消息上报请求列表
   */
  ReportSet?: Array<ReportAppMessage>
}

/**
 * DescribeDeviceStatusStat返回参数结构体
 */
export interface DescribeDeviceStatusStatResponse {
  /**
   * 设备状态统计结果
   */
  Result?: DeviceStatusStatRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备影子查询列表
 */
export interface DeviceShadowRes {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 设备影子列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Set?: Array<DeviceShadowInfo>
}

/**
 * 告警类型列表回包
 */
export interface DescribeAlarmTypeListRes {
  /**
   * 告警类型查询列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmTypeSet?: Array<AlarmTypeDetailInfo>
}

/**
 * DescribeBuildingModel请求参数结构体
 */
export interface DescribeBuildingModelRequest {
  /**
   * 建筑id
   */
  BuildingId: string
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 用户结果
 */
export interface SsoUser {
  /**
   * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 用户昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealName?: string
  /**
   * 用户类型，1-超级管理员；2-1号管理员；3-普通管理员；99-普通用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserType?: string
  /**
   * 所属租户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: string
  /**
   * 所属组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserGroup?: string
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 电话
注意：此字段可能返回 null，表示取不到有效值。
   */
  Phone?: string
  /**
   * 用户状态，0待审核，1正常启用，2禁用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateAt?: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateAt?: number
  /**
   * 是否属于团队，0不可用，1属于，2不属
注意：此字段可能返回 null，表示取不到有效值。
   */
  BelongTeam?: number
  /**
   * 部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentId?: string
  /**
   * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentName?: string
  /**
   * 子账户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentUserId?: number
  /**
   * 密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
}

/**
 * 行政区划详情
 */
export interface AdministrativeDetail {
  /**
   * 行政区域类型编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdministrativeTypeCode?: string
  /**
   * 行政区域编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdministrativeCode?: string
  /**
   * 行政区域名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdministrativeName?: string
}

/**
 * 建筑模型信息
 */
export interface BuildingModel {
  /**
   * 构件ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementId?: string
  /**
   * 构件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementName?: string
  /**
   * 模型类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * 模型URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelUrl?: string
}

/**
 * 设备-空间绑定关系
 */
export interface SpaceDeviceRelation {
  /**
   * 设备id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceId?: string
  /**
   * 构件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementId?: string
}

/**
 * ControlCameraPTZ请求参数结构体
 */
export interface ControlCameraPTZRequest {
  /**
   * 设备的唯一标识
   */
  WID: string
  /**
   * ptz指令
left - 向左移动
right - 向右移动
up - 向上移动
down - 向下
zoomOut - 镜头缩小
zoomIn - 镜头放大
irisIn - 光圈缩小
irisOut - 光圈放大
focusIn - 焦距变近
focusOut - 焦距变远

   */
  CMD: string
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 行政区划数据结构
 */
export interface AdministrationData {
  /**
   * 行政区划编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdministrationCode?: string
  /**
   * 行政区划名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdministrationName?: string
}

/**
 * DescribeSpaceDeviceIdList返回参数结构体
 */
export interface DescribeSpaceDeviceIdListResponse {
  /**
   * 设备ID列表
   */
  Result?: SpaceDeviceIdListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeElementProfileTree返回参数结构体
 */
export interface DescribeElementProfileTreeResponse {
  /**
   * 构件树出参
   */
  Result?: ElementProfileTreeRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备自定义值修改信息入参
 */
export interface ModifyDeviceFieldInfo {
  /**
   * 设备id
   */
  WID: string
  /**
   * 自定义字段key
   */
  Key: string
  /**
   * 自定义字段值
   */
  Val: string
}

/**
 * DescribeTenantDepartmentList请求参数结构体
 */
export interface DescribeTenantDepartmentListRequest {
  /**
   * 翻页页码
   */
  Offset: number
  /**
   * 翻页大小
   */
  Limit: number
  /**
   * token
   */
  ApplicationToken: string
  /**
   * 租户ID
   */
  TenantId?: string
  /**
   * 更新时间戳，单位秒
   */
  UpdateAt?: number
  /**
   * 部门ID
   */
  DepartmentId?: string
  /**
   * 用户id
   */
  Cursor?: string
}

/**
 * StopVideoStreaming返回参数结构体
 */
export interface StopVideoStreamingResponse {
  /**
   * 停流接口返回结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量消息上报结果
 */
export interface BatchReportAppMessageRes {
  /**
   * 上报数量

注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalElements?: number
  /**
   * 提交数量（推送成功）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Commit?: number
  /**
   * 消息推送结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpanMap?: Array<ReportMsgRes>
}

/**
 * DescribeBuildingProfile请求参数结构体
 */
export interface DescribeBuildingProfileRequest {
  /**
   * 建筑id
   */
  BuildingId: string
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * DescribeDeviceShadowList返回参数结构体
 */
export interface DescribeDeviceShadowListResponse {
  /**
   * 获取设备影子结果
   */
  Result?: DeviceShadowRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询租户楼栋数量和楼栋建筑面积相应体
 */
export interface SpaceDataTotalStatsRes {
  /**
   * 总楼栋数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingCount?: number
  /**
   * 总建筑面积
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingArea?: number
}

/**
 * 通过城市id查询工作空间列表
 */
export interface DescribeCityWorkspaceListRes {
  /**
   * 通过城市id查询工作空间列表结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceSet?: Array<WorkspaceInfo>
}

/**
 * 设备类型列表
 */
export interface DeviceTypeSet {
  /**
   * 设备类型列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Set?: Array<DeviceType>
}

/**
 * DescribeBuildingList请求参数结构体
 */
export interface DescribeBuildingListRequest {
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 是否有模型文件
   */
  HasModel?: boolean
  /**
   * 空间编码
   */
  SpaceCodes?: Array<string>
}

/**
 * 设备组修改信息入参
 */
export interface ModifyDeviceGroupInfo {
  /**
   * 设备id
   */
  WID: string
  /**
   * 设备分组id
   */
  GroupId: number
}

/**
 * 层级统计
 */
export interface StatLevel {
  /**
   * 汇总数。在线（正常+故障） + 离线
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 正常数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NormalSum?: number
  /**
   * 离线数
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineSum?: number
  /**
   * 故障数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FaultSum?: number
  /**
   * 空间id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceCode?: string
  /**
   * 设备类型统计列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatDeviceTypeSet?: Array<StatDeviceType>
}

/**
 * DescribeWorkspaceUserList请求参数结构体
 */
export interface DescribeWorkspaceUserListRequest {
  /**
   * 翻页页码
   */
  Offset: number
  /**
   * 翻页大小
   */
  Limit: number
  /**
   * 工作空间ID
   */
  WorkspaceId: string
  /**
   * token
   */
  ApplicationToken: string
  /**
   * 租户ID
   */
  TenantId?: string
  /**
   * 更新时间戳，单位秒
   */
  UpdateAt?: number
}

/**
 * 设备控制后返回结果集合
 */
export interface ControlDeviceSet {
  /**
   * 设备控制后返回结果集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Set?: Array<ControlDeviceRes>
}

/**
 * 批量新增设备接口返回结果
 */
export interface BatchCreateDeviceRes {
  /**
   * 新增成功的设备列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessSet?: Array<CreateDeviceSucceeded>
  /**
   * 新增失败的设备列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailSet?: Array<CreateDeviceFailed>
}

/**
 * DescribeVideoCloudRecord返回参数结构体
 */
export interface DescribeVideoCloudRecordResponse {
  /**
   * 获取云录像结果
   */
  Result?: VideoCloudRecordRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 保存or修改设备分组回包
 */
export interface SaveDeviceGroupRes {
  /**
   * 保存or修改设备分组回包信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
}

/**
 * 设备列表查询结果
 */
export interface DescribeDeviceListRes {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 设备信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceDataSet?: Array<DeviceDataInfo>
}

/**
 * DescribeSpaceDeviceRelationList返回参数结构体
 */
export interface DescribeSpaceDeviceRelationListResponse {
  /**
   * 查询指定空间下设备与构件绑定关系列表出参
   */
  Result?: SpaceDeviceRelationRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateWorkspaceParkAttributes请求参数结构体
 */
export interface UpdateWorkspaceParkAttributesRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 园区简称
   */
  ParkName?: string
  /**
   * 园区编号
   */
  ParkNum?: string
}

/**
 * ModifyDeviceTag请求参数结构体
 */
export interface ModifyDeviceTagRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 设备标签修改信息集合
   */
  Set: Array<ModifyDeviceTagInfo>
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * ModifyDeviceGroup返回参数结构体
 */
export interface ModifyDeviceGroupResponse {
  /**
   * 返回请求结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLinkRuleList返回参数结构体
 */
export interface DescribeLinkRuleListResponse {
  /**
   * 联动规则列表查询结果
   */
  Result?: DescribeLinkRuleListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceTypeList返回参数结构体
 */
export interface DescribeSpaceTypeListResponse {
  /**
   * 空间分类列表出参
   */
  Result?: SpaceTypeListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 建筑概要信息
 */
export interface BuildingProfile {
  /**
   * 建筑id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingId?: string
  /**
   * 建筑名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingName?: string
  /**
   * 空间编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceCode?: string
  /**
   * 经度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Longitude?: number
  /**
   * 纬度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Latitude?: number
  /**
   * 地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address?: string
}

/**
 * 应用Token令牌信息
 */
export interface ApplicationTokenInfo {
  /**
   * 应用申请调用API的令牌
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token?: string
}

/**
 * DescribeAlarmLevelList返回参数结构体
 */
export interface DescribeAlarmLevelListResponse {
  /**
   * 告警级别列表查询结果
   */
  Result?: DescribeAlarmLevelListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警级别详情
 */
export interface AlarmLevelInfo {
  /**
   * 级别id
注意：此字段可能返回 null，表示取不到有效值。
   */
  LevelId?: number
  /**
   * 级别名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LevelName?: string
}

/**
 * 告警处理记录
 */
export interface HandleRecordInfo {
  /**
   * 告警处理记录id

注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperationType?: string
  /**
   * 处理时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: string
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 文件列表

注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSet?: Array<FileInfo>
  /**
   * 应用appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 扩展字段1，存非孪生中台用户id

注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtendOne?: string
}

/**
 * 构件树响应体
 */
export interface ElementProfileTreeRes {
  /**
   * 建筑id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingId?: string
  /**
   * 父级构件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentElementId?: string
  /**
   * 构件树
注意：此字段可能返回 null，表示取不到有效值。
   */
  Root?: ElementProfileTreeNode
}

/**
 * 设备标签列表查询结果
 */
export interface DeviceTagRes {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 设备标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Set?: Array<DeviceTagInfo>
}

/**
 * BatchDeleteDevice请求参数结构体
 */
export interface BatchDeleteDeviceRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 设备wid数组列表
   */
  WIDSet: Array<string>
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * DescribeDeviceGroupList请求参数结构体
 */
export interface DescribeDeviceGroupListRequest {
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 工作空间ID
   */
  WorkspaceId: number
  /**
   * 分组id, 不传默认全部
   */
  GroupId?: number
}

/**
 * 详细动作信息
 */
export interface ActionDetail {
  /**
   * 动作id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 动作名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 动作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActionType?: string
  /**
   * 动作说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActionDesc?: string
  /**
   * 消息类型，orgin/custom/model
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgType?: string
  /**
   * 消息内容,有效值为x-json:后的字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgContent?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  WID?: string
  /**
   * 关联故障列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkRuleSet?: Array<LinkRule>
  /**
   * 动作下沉配置,有效值为x-json:后的字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  SinkConfig?: string
}

/**
 * 根据Tag获取行政区划列表返回结构
 */
export interface DescribeAdministrationByTagRes {
  /**
   * 行政区划列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<AdministrationData>
}

/**
 * DescribeCityWorkspaceList请求参数结构体
 */
export interface DescribeCityWorkspaceListRequest {
  /**
   * 行政区编码集合
   */
  AdministrativeCodeSet: Array<string>
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * UpdateWorkspaceParkAttributes返回参数结构体
 */
export interface UpdateWorkspaceParkAttributesResponse {
  /**
   * 修改工作空间园区属性结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDeviceGroup请求参数结构体
 */
export interface DeleteDeviceGroupRequest {
  /**
   * 设备分组的id
   */
  Id: number
  /**
   * 工作空间的id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * DescribeCityWorkspaceList返回参数结构体
 */
export interface DescribeCityWorkspaceListResponse {
  /**
   * 工作空间信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: DescribeCityWorkspaceListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchCreateDevice请求参数结构体
 */
export interface BatchCreateDeviceRequest {
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 设备信息项

   */
  AddDeviceSet: Array<AddDeviceInfo>
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * BatchKillAlarm请求参数结构体
 */
export interface BatchKillAlarmRequest {
  /**
   * 告警开始时间，必填,时间戳秒
   */
  BeginTime: number
  /**
   * 告警结束时间，必填，时间戳秒
   */
  EndTime: number
  /**
   * 告警状态: unprocessed processing

   */
  StatusSet: Array<string>
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 当前操作用户id
   */
  UserId: string
  /**
   * 当前操作用户名称
   */
  UserName: string
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 当前告警处理人，填孪生中台用户id,多个用逗号分隔

   */
  ProcessorId?: string
  /**
   * 告警子类型(如果传告警子类型，则必传父类型)

   */
  AlarmTypeSet?: Array<AlarmTypeInfo>
  /**
   * 告警级别,包括1~5
   */
  LevelSet?: Array<number | bigint>
  /**
   * 设备id
   */
  WIDSet?: Array<string>
  /**
   * 告警id
   */
  IdSet?: Array<string>
  /**
   * 告警处理的说明
   */
  Desc?: string
}

/**
 * 动作列表查询结果
 */
export interface DescribeActionListRes {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 动作列表查询集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActionDetailSet?: Array<ActionDetail>
}

/**
 * 联动规则信息
 */
export interface LinkRuleInfo {
  /**
   * 联动id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 联动名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventSet?: Array<Event>
  /**
   * 动作列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActionSet?: Array<Action>
  /**
   * 状态：0开，-1关
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 起始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginDate?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndDate?: string
  /**
   * 有效周期内容,有效字段为x-json后的字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidPeriod?: string
}

/**
 * 设备类型统计
 */
export interface StatDeviceType {
  /**
   * 汇总数。在线（正常+故障） + 离线
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 正常数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Normal?: number
  /**
   * 离线数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offline?: number
  /**
   * 故障数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fault?: number
  /**
   * 设备名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 设备类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceType?: string
}

/**
 * ModifyDeviceGroup请求参数结构体
 */
export interface ModifyDeviceGroupRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 设备组修改信息集合
   */
  Set: Array<ModifyDeviceGroupInfo>
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * DescribeElementProfileTree请求参数结构体
 */
export interface DescribeElementProfileTreeRequest {
  /**
   * 建筑id
   */
  BuildingId: string
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 父级构件id
   */
  ElementId?: string
  /**
   * 构件级别
   */
  Level?: number
  /**
   * 空间分类代码
   */
  SpaceTypeCode?: string
}

/**
 * DescribeLinkRuleList请求参数结构体
 */
export interface DescribeLinkRuleListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 分页查询，第几页，必传，大于0
   */
  PageNumber: number
  /**
   * 每页条数，必传大于0
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 事件触发类型
   */
  TriggerType?: string
  /**
   * 联动id
   */
  IdSet?: Array<number | bigint>
}

/**
 * DescribeEventList返回参数结构体
 */
export interface DescribeEventListResponse {
  /**
   * 事件列表查询结果
   */
  Result?: DescribeEventListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备标签信息
 */
export interface DeviceTagInfo {
  /**
   * 标签Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagId?: number
  /**
   * 标签名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagName?: string
}

/**
 * 设备类型
 */
export interface DeviceType {
  /**
   * 设备类型编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
  /**
   * 设备类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 父设备类型编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentCode?: string
  /**
   * 父设备类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentName?: string
  /**
   * 是否子系统，1是

注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSubsystem?: number
}

/**
 * DescribeDeviceTagList请求参数结构体
 */
export interface DescribeDeviceTagListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 分页查询，第几页，必传，大于0
   */
  PageNumber: number
  /**
   * 每页条数，必传大于0
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 空间层级关系
 */
export interface SpaceRelation {
  /**
   * 构件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementId?: string
  /**
   * 构件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementName?: string
  /**
   * 空间层级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: number
  /**
   * 空间编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceCode?: string
  /**
   * 父级空间编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentSpaceCode?: string
  /**
   * 子构件信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<SpaceRelation>
}

/**
 * DescribeBuildingProfile返回参数结构体
 */
export interface DescribeBuildingProfileResponse {
  /**
   * 查询建筑信息出参
   */
  Result?: BuildingProfileRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件信息
 */
export interface FileInfo {
  /**
   * 文件id

注意：此字段可能返回 null，表示取不到有效值。
   */
  FileId?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportName?: string
}

/**
 * ReportAppMessage请求参数结构体
 */
export interface ReportAppMessageRequest {
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 消息定义
   */
  Profile: MessageProfile
  /**
   * 数据上报时间
   */
  ReportTs: number
  /**
   * 属性定义 - KV的json格式,有效字段为x-json:后的字段
   */
  Properties: string
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 事件定义 - KKV的json格式,有效字段为x-json:后的字段
   */
  EventSet?: string
  /**
   * 服务定义 - KKV的json格式,有效字段为x-json:后的字段
   */
  ServiceSet?: string
  /**
   * 扩展字段2，如：算法上报id，若为json格式，需传x-json:{}，有效字段为x-json:后的字段
   */
  ExtendTwo?: string
  /**
   * 透传信息，若为json格式，需传x-json:{}，有效字段为x-json:后的字段
   */
  Echo?: string
}

/**
 * 部门用户
 */
export interface SsoDepartment {
  /**
   * 部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentId?: string
  /**
   * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 父级部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentDepartmentId?: string
}

/**
 * 应用描述
 */
export interface ApplicationInfo {
  /**
   * 应用分配的appId
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationId?: string
  /**
   * 应用中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 应用地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address?: string
  /**
   * 应用logo
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationLogo?: ApplicationLogo
  /**
   * 应用类型，0:saas应用 1:平台应用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * engine
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnglishName?: string
  /**
   * 能源管理应用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * DescribeFileUploadURL请求参数结构体
 */
export interface DescribeFileUploadURLRequest {
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 文件名称
   */
  FileName: string
  /**
   * 文件大小
   */
  FileSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 文件MD5
   */
  FileMD5?: string
  /**
   * 存储类型
   */
  SaveType?: string
  /**
   * 过期时间，过期时间戳，精确到秒的时间戳，noExpireFlag为false时必填

   */
  FileExpireTime?: number
  /**
   * 永不过期标记
   */
  NoExpireFlag?: boolean
}

/**
 * DescribeDeviceStatusList请求参数结构体
 */
export interface DescribeDeviceStatusListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 分页查询，第几页，必传，大于0
   */
  PageNumber: number
  /**
   * 每页条数，必传大于0
   */
  PageSize: number
  /**
   * 设备类型
   */
  DeviceTypeSet?: Array<string>
  /**
   * 产品 pid
   */
  ProductIdSet?: Array<number | bigint>
  /**
   * 设备标签id

   */
  TagIdSet?: Array<number | bigint>
  /**
   * 空间位置（支持空间多层，比如具体建筑、具体楼层）
   */
  SpaceCodeSet?: Array<string>
  /**
   * 设备编号列表

   */
  WIDSet?: Array<string>
  /**
   * 设备标签名，非必填
   */
  DeviceTagSet?: Array<string>
  /**
   * 通信在/离线状态（online=normal+fault、offline）
   */
  DeviceStatusSet?: Array<string>
  /**
   * 设备业务状态
（正常-normal、故障-fault、离线-offline）

   */
  StatusSet?: Array<string>
  /**
   * 推流状态，推流中-true，未推流-false 仅摄像头有的状态
   */
  IsAlive?: Array<boolean>
}

/**
 * DescribeDeviceTagList返回参数结构体
 */
export interface DescribeDeviceTagListResponse {
  /**
   * 设备标签查询结果
   */
  Result?: DeviceTagRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoCloudRecord请求参数结构体
 */
export interface DescribeVideoCloudRecordRequest {
  /**
   * 设备的唯一标识
   */
  WID: string
  /**
   * 录像开始时间（s）
   */
  StartTime: number
  /**
   * 录像结束时间（s）

   */
  EndTime: number
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 构件分页查询响应体
 */
export interface ElementProfilePageRes {
  /**
   * 构件总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 构件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<ElementProfile>
}

/**
 * DescribeAdministrationByTag请求参数结构体
 */
export interface DescribeAdministrationByTagRequest {
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 工作空间ID
   */
  WorkspaceId: number
  /**
   * 标签值
   */
  Tag: string
}

/**
 * 上报图片列表
 */
export interface ReportImg {
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
}

/**
 * 事件详细信息
 */
export interface EventDetail {
  /**
   * 事件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 事件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 事件触发类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: string
  /**
   * 事件触发条件，返回为x-json后的字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerCondition?: string
  /**
   * 有效期
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidPeriod?: string
  /**
   * 关联规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkRuleSet?: Array<LinkRule>
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 设备类型，当触发类型为deviceType时返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceType?: string
  /**
   * 设备的wid，当触发类型是device返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  WID?: string
}

/**
 * 设备修改信息入参
 */
export interface DeviceModifyInfo {
  /**
   * 设备id
   */
  WID: string
  /**
   * 修改后的设备名字
   */
  DeviceName: string
}

/**
 * ControlDevice返回参数结构体
 */
export interface ControlDeviceResponse {
  /**
   * 设备控制后结果集
   */
  Result?: ControlDeviceSet
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警级别枚举获取
 */
export interface DescribeAlarmLevelListRes {
  /**
   * 告警级别枚举获取数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevelSet?: Array<AlarmLevelInfo>
}

/**
 * 告警列表回包
 */
export interface DescribeAlarmListRes {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 告警列表集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmInfoSet?: Array<AlarmInfo>
}

/**
 * 视频扩展信息结果
 */
export interface CameraExtendInfoRes {
  /**
   * 存储方式 (nvr或cosmtav)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SaveType?: string
  /**
   * 云存储天数（save_type是cosmtav时这个参数才有效）

注意：此字段可能返回 null，表示取不到有效值。
   */
  SaveDay?: number
  /**
   * 实时分辨率
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiveResolution?: number
  /**
   * 历史分辨率
注意：此字段可能返回 null，表示取不到有效值。
   */
  HistoryResolution?: number
}

/**
 * 自定义字段
 */
export interface CustomField {
  /**
   * 字段id
   */
  Id?: number
  /**
   * 字段内容
   */
  Val?: string
}

/**
 * DescribeAlarmList返回参数结构体
 */
export interface DescribeAlarmListResponse {
  /**
   * 告警列表查询结果
   */
  Result?: DescribeAlarmListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceRelationByDeviceId返回参数结构体
 */
export interface DescribeSpaceRelationByDeviceIdResponse {
  /**
   * 空间层级关系出参
   */
  Result?: SpaceRelationRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddAlarmProcessRecord返回参数结构体
 */
export interface AddAlarmProcessRecordResponse {
  /**
   * 添加告警处理记录结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeActionList返回参数结构体
 */
export interface DescribeActionListResponse {
  /**
   * 动作列表查询结果
   */
  Result?: DescribeActionListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInterfaceList请求参数结构体
 */
export interface DescribeInterfaceListRequest {
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 请求页号
   */
  PageNumber?: number
  /**
   * 请求页容量，默认全量返回
   */
  PageSize?: number
  /**
   * 查询关键字
   */
  Keyword?: string
  /**
   * 接口方式 1.http 2消息通知服务
   */
  Style?: Array<number | bigint>
  /**
   * 接口分类0. 其他服务 1. IOT服务 2. 空间服务 3.微应用服务 4.场景服务 5.AI算法服务 6.任务算法服务 7.第三方服务 8.3DTiles服务
   */
  Type?: Array<number | bigint>
}

/**
 * 设备类型概览信息
 */
export interface DeviceTypeOverview {
  /**
   * 设备类型值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceType?: string
  /**
   * 设备类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 汇总数。在线（正常+故障） + 离线
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 正常数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Normal?: number
  /**
   * 离线数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offline?: number
  /**
   * 故障数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fault?: number
}

/**
 * DescribeProductList返回参数结构体
 */
export interface DescribeProductListResponse {
  /**
   * 产品列表查询结果
   */
  Result?: ProductSet
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单条消息上报请求
 */
export interface ReportAppMessage {
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 消息定义
   */
  Profile?: MessageProfile
  /**
   * 数据上报时间
   */
  ReportTs?: number
  /**
   * 属性定义 - KV，若为json格式，需在前加上x-json:，有效字段为x-json:后的字段
   */
  Properties?: string
  /**
   * 事件定义 - KKV，若为json格式，需在前加上x-json:，有效字段为x-json:后的字段
   */
  EventSet?: string
  /**
   * 服务定义 - KKV,若为json格式，需在前加上x-json:，有效字段为x-json:后的字段
   */
  ServiceSet?: string
  /**
   * 扩展字段2，如：算法上报id，若为json格式，需在前加上x-json:
   */
  ExtendTwo?: string
  /**
   * 透传信息，若为json格式，需在前加上x-json:，有效字段为x-json:后的字段
   */
  Echo?: string
}

/**
 * DescribeVideoRecordStream请求参数结构体
 */
export interface DescribeVideoRecordStreamRequest {
  /**
   * 设备唯一标识
   */
  WID: string
  /**
   * 枚举如下：
flvsh
rtmp
hls
webrtc
raw (视频原始帧)
   */
  Protocol: string
  /**
   * 开始时间（精确到毫秒）
   */
  StartTime: number
  /**
   * 结束时间（精确到毫秒）
   */
  EndTime: number
  /**
   * 倍速 0.5、1、2、4
   */
  PlayBackRate: number
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 流的唯一标识，播放链接尾缀
   */
  Stream?: string
  /**
   * 公有云私有化项目传0或者不传；混合云项目一般传空间id
   */
  Env?: string
}

/**
 * 场景列表响应体
 */
export interface SceneListRes {
  /**
   * 场景列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SceneList?: Array<SceneInfo>
}

/**
 * API列表
 */
export interface ApiInfoList {
  /**
   * API列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiInfo?: Array<ApiInfo>
  /**
   * 数据总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
}

/**
 * DescribeAlarmStatusList返回参数结构体
 */
export interface DescribeAlarmStatusListResponse {
  /**
   * 告警状态返回结构
   */
  Result?: DescribeAlarmStatusListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApplicationToken请求参数结构体
 */
export interface CreateApplicationTokenRequest {
  /**
   * 应用id
   */
  ApplicationId: number
  /**
   * 一个随机数或者时间戳，用于防止重放攻击，每个请求唯一，建议用uuid
   */
  Nonce: string
  /**
   * 租户id
   */
  TenantId: number
  /**
   * 请求时间，当前时间的unix毫秒时间戳
   */
  RequestTime: number
  /**
   * 签名方法见用户使用文档
   */
  Signature: string
}

/**
 * DescribeFileUploadURL返回参数结构体
 */
export interface DescribeFileUploadURLResponse {
  /**
   * 获取文件上传地址结果
   */
  Result?: FileUploadURL
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SaveDeviceGroup返回参数结构体
 */
export interface SaveDeviceGroupResponse {
  /**
   * 新增/修改的设备分组记录的id
   */
  Result?: SaveDeviceGroupRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 构件概要信息
 */
export interface ElementProfile {
  /**
   * 建筑id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingId?: string
  /**
   * 构件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementId?: string
  /**
   * 构件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EntityType?: string
  /**
   * 构件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementName?: string
  /**
   * 构件空间级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: number
  /**
   * 底部标高（单位mm）
注意：此字段可能返回 null，表示取不到有效值。
   */
  BottomHeight?: number
  /**
   * 排序
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sort?: number
  /**
   * 空间编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceCode?: string
  /**
   * 空间分类编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceTypeCode?: string
  /**
   * 空间分类名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceTypeName?: string
  /**
   * 父级构件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentElementId?: string
  /**
   * 空间层级类型编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpacePoiId?: string
  /**
   * 构件描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementDesc?: string
  /**
   * 删除标记
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDelete?: number
}

/**
 * DescribeTenantDepartmentList返回参数结构体
 */
export interface DescribeTenantDepartmentListResponse {
  /**
   * 返回数据
   */
  Result?: SsoDepartmentsResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkSpaceBuildingCountAndArea返回参数结构体
 */
export interface DescribeWorkSpaceBuildingCountAndAreaResponse {
  /**
   * 查询项目空间楼栋数量与建筑面积出参
   */
  Result?: SpaceDataListStatsRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 事件对象
 */
export interface EventObj {
  /**
   * 事件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 事件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 事件触发类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 时间触发条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Condition?: string
}

/**
 * 自定义字段
 */
export interface CustomFieldInfo {
  /**
   * 字段id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 字段key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 字段名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 字段值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Val?: string
}

/**
 * 告警类型
 */
export interface AlarmTypeInfo {
  /**
   * 告警父类型
   */
  Type: string
  /**
   * 告警子类型(如果传告警子类型，则必传父类型)
   */
  SubType?: string
}

/**
 * 空间分类列表响应体
 */
export interface SpaceTypeListRes {
  /**
   * 空间分类列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceTypeList?: Array<SpaceType>
}

/**
 * ReportAppMessage返回参数结构体
 */
export interface ReportAppMessageResponse {
  /**
   * 上报单条信息结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmList请求参数结构体
 */
export interface DescribeAlarmListRequest {
  /**
   * 告警开始时间，必填,时间戳秒
   */
  BeginTime: number
  /**
   * 告警结束时间，必填，时间戳秒
   */
  EndTime: number
  /**
   * 分页查询，第几页
   */
  PageNumber: number
  /**
   * 每页条数
   */
  PageSize: number
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 告警状态
   */
  Statuses?: Array<string>
  /**
   * 告警类型
   */
  AlarmTypeSet?: Array<AlarmTypeInfo>
  /**
   * 告警级别id
   */
  LevelSet?: Array<number | bigint>
  /**
   * 告警id
   */
  IdSet?: Array<string>
  /**
   * 应用id
   */
  AppIdSet?: Array<number | bigint>
  /**
   * 设备id
   */
  WIDSet?: Array<string>
  /**
   * 空间层级
   */
  SpaceCodeSet?: Array<string>
  /**
   * 应用扩展字段1
   */
  ExtendOne?: Array<string>
  /**
   * 应用扩展字段2
   */
  ExtendTwo?: Array<string>
  /**
   * 当前告警处理人，填孪生中台的用户id
   */
  ProcessorSet?: Array<string>
  /**
   * 分组id
   */
  GroupIdSet?: Array<number | bigint>
}

/**
 * DescribeAdministrationByTag返回参数结构体
 */
export interface DescribeAdministrationByTagResponse {
  /**
   * 行政区划返回结构
   */
  Result?: DescribeAdministrationByTagRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 关联规则信息
 */
export interface LinkRule {
  /**
   * 关联联动规则id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 关联联动规则名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * 空间分类
 */
export interface SpaceType {
  /**
   * 空间分类编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceTypeCode?: string
  /**
   * 空间分类名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceTypeName?: string
}

/**
 * 动作对象
 */
export interface ActionObj {
  /**
   * 动作id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 动作名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 动作类型。（app/推送消息至应用-携带空间设备：无,appWithNearbyDevices/推送至应用-携带空间设备：携带,device/推送消息至设备-指定设备,nearbyDevices/推送消息至设备-事件所在范围内的设备,toAlarm/转换为告警,toNotification/转换为通知）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 动作说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc?: string
  /**
   * 消息类型，orgin/custom/model
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgType?: string
  /**
   * 消息内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgContent?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 动作下沉配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  SinkConfig?: string
  /**
   *  具体应用（appid）/具体设备（DIN/subID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplyDevice?: string
}

/**
 * 模型基础信息
 */
export interface ModelInfo {
  /**
   * 工作空间id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: number
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * 物模型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
  /**
   * 关联产品信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelatedProduct?: Array<RelatedProduct>
  /**
   * 设备类型名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceTypeName?: string
  /**
   * 设备类型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceType?: string
  /**
   * 物模型类型，产品模型/标准模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: number
  /**
   * 模型参数内容,有效字段为"x-json:"后的字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelParams?: string
}

/**
 * 设备状态信息
 */
export interface DeviceStatusInfo {
  /**
   * 设备ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WID?: string
  /**
   * 设备状态（online=normal+fault、offline）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceStatus?: string
  /**
   * 设备状态更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceStatusUpdateTime?: string
  /**
   * 设备业务状态（normal、fault、offline）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 推流状态。推流中-true，未推流-false
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAlive?: boolean
}

/**
 * 设备状态获取接口结果
 */
export interface DeviceStatusRes {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 设备状态信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceStatusSet?: Array<DeviceStatusInfo>
}

/**
 * BatchKillAlarm返回参数结构体
 */
export interface BatchKillAlarmResponse {
  /**
   * 批量消警结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备影子信息
 */
export interface DeviceShadowInfo {
  /**
   * 设备ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WID?: string
  /**
   * 设备影子数据,返回有效数据为"x-json:"后字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceShadow?: string
  /**
   * 设备影子更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceShadowUpdateTime?: string
}

/**
 * 设备挂接的空间信息
 */
export interface DeviceSpaceInfoRes {
  /**
   * 建筑id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildingId?: string
  /**
   * 构件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementId?: string
  /**
   * 构件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EntityType?: string
  /**
   * 构件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElementName?: string
  /**
   * 构件级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: number
  /**
   * 底部标高（单位mm）
注意：此字段可能返回 null，表示取不到有效值。
   */
  BottomHeight?: number
  /**
   * 空间编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceCode?: string
}

/**
 * DescribeDeviceTypeList请求参数结构体
 */
export interface DescribeDeviceTypeListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 默认0只拉取设备列表关联的设备类型列表；1拉取空间下所有的设备类型列表
   */
  Flag?: number
}

/**
 * DescribeDeviceShadowList请求参数结构体
 */
export interface DescribeDeviceShadowListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * WID
   */
  WIDSet: Array<string>
  /**
   * 分页查询，第几页
   */
  PageNumber: number
  /**
   * 每页条数
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 设备类型code
   */
  DeviceTypeSet?: Array<string>
  /**
   * 产品 pid
   */
  ProductIdSet?: Array<number | bigint>
  /**
   * 设备标签id
   */
  TagIdSet?: Array<number | bigint>
  /**
   * 空间层级，（支持空间多层，比如具体建筑、具体楼层）
   */
  SpaceCodeSet?: Array<string>
  /**
   * 设备标签名
   */
  DeviceTagSet?: Array<string>
}

/**
 * 处理记录项
 */
export interface ProcessRecordInfo {
  /**
   * 告警的id
   */
  Id: string
  /**
   * 处理时间，毫秒

   */
  ProcessTime: number
  /**
   * 处理类型，此处操作类型固定填add_record

   */
  ProcessType: string
  /**
   * 注:此字段填写的是孪生中台的用户，非孪生中台用户不填该字段
[{\"id\":\"123\",\"name\":\"tes\"}]

   */
  Processor?: string
  /**
   * 处理描述信息
   */
  ProcessDescription?: string
  /**
   * 附加文件标识
   */
  AttachedFileId?: string
}

/**
 * DescribeSceneList返回参数结构体
 */
export interface DescribeSceneListResponse {
  /**
   * 场景列表出参
   */
  Result?: SceneListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceList返回参数结构体
 */
export interface DescribeDeviceListResponse {
  /**
   * 查询设备列表结果
   */
  Result?: DescribeDeviceListRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTenantBuildingCountAndArea返回参数结构体
 */
export interface DescribeTenantBuildingCountAndAreaResponse {
  /**
   * 租户所有项目空间楼栋数量与建筑面积统计结果
   */
  Result?: SpaceDataTotalStatsRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询项目空间楼栋数量与建筑面积响应体
 */
export interface SpaceDataListStatsRes {
  /**
   * 楼栋数量与建筑面积列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<SpaceDataStats>
}

/**
 * 视频流Raw协议信息
 */
export interface RawInfo {
  /**
   * 加密向量（如果视频网关选择流为非加密传输这个参数可忽略）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SM4Vector?: string
  /**
   * 专线ip (非专线接入可忽略)
注意：此字段可能返回 null，表示取不到有效值。
   */
  NATIP?: string
  /**
   * 客户端握手鉴权参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamToken?: string
  /**
   * 拉流端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 视频流加密key,目前为AES128加密KEY（如果视频网关选择流为非加密传输这个参数可忽略）
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamEnKey?: string
  /**
   * 拉流公网地址（非公网接入时，这个地址是内网地址）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IP?: string
  /**
   * 拉流内网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerIP?: string
}

/**
 * 文件下载URL
 */
export interface FileDownloadURL {
  /**
   * 下载地址

注意：此字段可能返回 null，表示取不到有效值。
   */
  FileURL?: string
}

/**
 * 告警状态列表返回
 */
export interface DescribeAlarmStatusListRes {
  /**
   * 告警状态返回结构
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<AlarmStatusData>
}

/**
 * ModifyDeviceTag返回参数结构体
 */
export interface ModifyDeviceTagResponse {
  /**
   * 返回请求结果
   */
  Result?: EmptyRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoLiveStream请求参数结构体
 */
export interface DescribeVideoLiveStreamRequest {
  /**
   * 设备的唯一标识

   */
  WID: string
  /**
   * 枚举如下：
flv
rtmp
hls
webrtc
raw (视频原始帧)
   */
  Protocol: string
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 主码流传0，子码流传1，默认主码流

   */
  StreamId?: number
  /**
   * 设备所在环境，公有云私有化项目传0或者不传，混合云项目一般传空间id
   */
  Env?: string
}

/**
 * 模型列表查询结果
 */
export interface ModelSet {
  /**
   * 第几页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRow?: number
  /**
   * 模型基础信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Set?: Array<ModelInfo>
}

/**
 * ChangeAlarmStatus请求参数结构体
 */
export interface ChangeAlarmStatusRequest {
  /**
   * 告警的id，返回的列表中的id
   */
  Id: string
  /**
   * 告警状态 processed unprocessed processing misreport shield
   */
  Status: string
  /**
   * 告警处理时间
   */
  ProcessTime: number
  /**
   * 处理类型
   */
  ProcessType: string
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 当前操作用户id
   */
  UserId: string
  /**
   * 当前操作用户名称
   */
  UserName: string
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 平台告警处理人
   */
  Processor?: string
  /**
   * 告警处理的描述信息
   */
  ProcessDescription?: string
  /**
   * 告警处理的扩展信息，可以为JSON字符串
   */
  ProcessExtend?: string
  /**
   * 扩展字段1，目前存的应用告警处理人
   */
  ExtendOne?: string
  /**
   * 应用id
   */
  ApplicationId?: number
}

/**
 * DescribeAlarmTypeList请求参数结构体
 */
export interface DescribeAlarmTypeListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 一级类型
   */
  ParentType?: string
}

/**
 * DescribeCameraExtendInfo返回参数结构体
 */
export interface DescribeCameraExtendInfoResponse {
  /**
   * 获取视频扩展信息结果
   */
  Result?: CameraExtendInfoRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceInfoByDeviceId请求参数结构体
 */
export interface DescribeSpaceInfoByDeviceIdRequest {
  /**
   * 设备id
   */
  DeviceId: string
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * DescribeCameraExtendInfo请求参数结构体
 */
export interface DescribeCameraExtendInfoRequest {
  /**
   * 设备的唯一标识

   */
  WID: string
  /**
   * 工作空间Id
   */
  WorkspaceId: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 构件地理坐标
 */
export interface ElementCoordinates {
  /**
   * 经度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Longitude?: number
  /**
   * 纬度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Latitude?: number
  /**
   * 高程
注意：此字段可能返回 null，表示取不到有效值。
   */
  Altitude?: number
}

/**
 * DescribeVideoLiveStream返回参数结构体
 */
export interface DescribeVideoLiveStreamResponse {
  /**
   * 视频实时流获取结果
   */
  Result?: VideoRecordStreamRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTenantUserList返回参数结构体
 */
export interface DescribeTenantUserListResponse {
  /**
   * 返回数据
   */
  Result?: SsoUserResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询指定空间id列表响应
 */
export interface SpaceDeviceIdListRes {
  /**
   * 设备id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceIds?: Array<string>
}

/**
 * DescribeEventList请求参数结构体
 */
export interface DescribeEventListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 分页查询，第几页，必传，大于0
   */
  PageNumber: number
  /**
   * 每页条数，必传大于0
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 事件触发类型，(app, device, timer)
   */
  TriggerType?: string
  /**
   * 事件id详情
   */
  IdSet?: Array<number | bigint>
}

/**
 * DescribeElementProfilePage返回参数结构体
 */
export interface DescribeElementProfilePageResponse {
  /**
   * 分页查询构件出参
   */
  Result?: ElementProfilePageRes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceDeviceIdList请求参数结构体
 */
export interface DescribeSpaceDeviceIdListRequest {
  /**
   * 构件id列表
   */
  ElementIds: Array<string>
  /**
   * 是否级联
   */
  IsCascade: boolean
  /**
   * 项目空间id
   */
  WorkspaceId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 页容量
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * 关联产品信息
 */
export interface RelatedProduct {
  /**
   * 关联产品pid
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 关联产品名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * ModifyDeviceField请求参数结构体
 */
export interface ModifyDeviceFieldRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 设备自定义字段修改信息集合
   */
  Set: Array<ModifyDeviceFieldInfo>
  /**
   * 应用token
   */
  ApplicationToken: string
}

/**
 * DescribeActionList请求参数结构体
 */
export interface DescribeActionListRequest {
  /**
   * 工作空间id
   */
  WorkspaceId: number
  /**
   * 分页查询，第几页，必传，大于0
   */
  PageNumber: number
  /**
   * 每页条数，必传大于0
   */
  PageSize: number
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 动作类型，（app,device,toAlarm,toNotification）
   */
  ActionType?: string
  /**
   * 事件id详情
   */
  IdSet?: Array<number | bigint>
}

/**
 * DescribeEdgeApplicationToken请求参数结构体
 */
export interface DescribeEdgeApplicationTokenRequest {
  /**
   * 应用token
   */
  ApplicationToken: string
  /**
   * 是否刷新token，默认为false
   */
  Refresh?: boolean
}
