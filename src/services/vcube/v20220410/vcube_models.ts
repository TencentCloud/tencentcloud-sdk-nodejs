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
 * DescribeVcubeApplicationAndLicense请求参数结构体
 */
export interface DescribeVcubeApplicationAndLicenseRequest {
  /**
   * 查询对应业务方的license，直播:live 点播：vod
   */
  BizType?: string
  /**
   * 应用类型测试：test，正式：formal
   */
  AppType?: string
  /**
   * 应用名称，模糊查询
   */
  AppName?: string
  /**
   * Ios包名，模糊查询
   */
  BundleId?: string
  /**
   * Android 包名，模糊查询
   */
  PackageName?: string
  /**
   * 平台信息，pc 或者 mobile
   */
  Platform?: string
  /**
   * Mac 进程名
   */
  MacBundleId?: string
  /**
   * Windows 进程名
   */
  WinProcessName?: string
}

/**
 * CreateLicense返回参数结构体
 */
export interface CreateLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApplicationAndVideo返回参数结构体
 */
export interface CreateApplicationAndVideoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApplicationAndBindLicense返回参数结构体
 */
export interface CreateApplicationAndBindLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFormalApplication返回参数结构体
 */
export interface ModifyFormalApplicationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 优图美视资源包
 */
export interface XMagicResourceSimpleInfo {
  /**
   * 资源Id
   */
  Id?: number
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 套餐类别
   */
  Plan?: string
  /**
   * 单位：年
   */
  Duration?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 更新时间
   */
  UpdatedAt?: string
  /**
   * 资源开始生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 资源结束生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 应用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Application?: AppInfo
  /**
   * 开通的优图功能信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  XMagic?: XMagicSimpleInfo
  /**
   * 优图资源状态
   */
  Status?: number
  /**
   * 操作日期记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation?: Array<string>
  /**
   * 是否可以使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUse?: boolean
  /**
   * single: 原子能力,combined:套餐
注意：此字段可能返回 null，表示取不到有效值。
   */
  XMagicType?: string
  /**
   * 功能模块名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 资源所属业务方 xmagic：优图，avatar：虚拟形象 
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizType?: string
  /**
   * 资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 资源自动续费状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
}

/**
 * DescribeXMagicResourceList请求参数结构体
 */
export interface DescribeXMagicResourceListRequest {
  /**
   * 分页页码 第一页是0
   */
  PageNumber: number
  /**
   * 每页数量
   */
  PageSize: number
  /**
   * 关联的应用名称
   */
  AppName?: string
  /**
   * 优图资源Id
   */
  ResourceId?: string
  /**
   * 查询关键字，资源Id、应用名称、包名
   */
  Word?: string
  /**
   * 平台信息，pc 或者 mobile
   */
  Platform?: string
  /**
   * 所属业务，xmagic：优图， avatar：虚拟人，不传查全部
   */
  BizType?: string
}

/**
 * DescribeVcubeResourcesList请求参数结构体
 */
export interface DescribeVcubeResourcesListRequest {
  /**
   * 查询资源页码
   */
  PageNumber: number
  /**
   * 每页的数据量
   */
  PageSize: number
  /**
   * 应用名称，模块查询
   */
  AppName?: string
  /**
   * 资源Id，资源包id或者license资源id
   */
  ResourceId?: string
  /**
   * 资源Id、应用名称、包名
   */
  Word?: string
  /**
   * 查询资源所属平台，web、mobile
   */
  Platform?: string
}

/**
 * DescribeTrialFeature返回参数结构体
 */
export interface DescribeTrialFeatureResponse {
  /**
   * 功能列表
   */
  FeatureList?: Array<Feature>
  /**
   * 可以开通的优图测试功能
注意：此字段可能返回 null，表示取不到有效值。
   */
  XMagicTrial?: XMagicTrial
  /**
   * 可以开通的优图测试功能列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  XMagicTrialList?: Array<XMagicTrial>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTrialLicense返回参数结构体
 */
export interface CreateTrialLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserConfig返回参数结构体
 */
export interface DescribeUserConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewTestXMagic返回参数结构体
 */
export interface RenewTestXMagicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewVideo返回参数结构体
 */
export interface RenewVideoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateXMagic请求参数结构体
 */
export interface UpdateXMagicRequest {
  /**
   * 要修改的XMagic Id
   */
  XMagicId: number
  /**
   * 资源id
   */
  XMagicResourceId?: string
  /**
   * 营业执照地址
   */
  CompanyPermit?: string
  /**
   * 公司类型
   */
  CompanyType?: string
  /**
   * 公司名称
   */
  CompanyName?: string
}

/**
 * DescribeVcubeResources请求参数结构体
 */
export interface DescribeVcubeResourcesRequest {
  /**
   * 查找那个平台的资源
   */
  Platform?: string
}

/**
 * CreateLicense请求参数结构体
 */
export interface CreateLicenseRequest {
  /**
   * 应用ID
   */
  ApplicationId: string
  /**
   * 资源包ID
   */
  ResourceIds: Array<string>
  /**
   * url地址分组
   */
  Group?: number
}

/**
 * CreateTrialApplicationAndLicense请求参数结构体
 */
export interface CreateTrialApplicationAndLicenseRequest {
  /**
   * 应用名
   */
  AppName: string
  /**
   * 应用ID
   */
  BundleId?: string
  /**
   * 包名
   */
  PackageName?: string
  /**
   * 功能 id 数组
   */
  FeatureIds?: Array<number | bigint>
  /**
   * 是否要开通优图功能
   */
  XMagic?: boolean
  /**
   * 营业执照
   */
  CompanyPermit?: string
  /**
   * 公司类型
   */
  CompanyType?: string
  /**
   * 公司名称
   */
  CompanyName?: string
  /**
   * 要开通的测试功能名称，基础套餐只能有一个
   */
  PlanList?: Array<string>
  /**
   * Mac 进程名
   */
  MacBundleId?: string
  /**
   * Windows 进程名
   */
  WinProcessName?: string
  /**
   * 要创建到哪个平台，web、mobile、pc，默认mobile
   */
  Platform?: string
  /**
   * 授权域名列表
   */
  DomainList?: Array<string>
}

/**
 * ModifyFormalApplication请求参数结构体
 */
export interface ModifyFormalApplicationRequest {
  /**
   * 应用Id
   */
  ApplicationId: number
  /**
   * 应用名称
   */
  AppName?: string
  /**
   * Ios 包名称
   */
  BundleId?: string
  /**
   * Android  包名称
   */
  PackageName?: string
}

/**
 * DescribeLicenseList请求参数结构体
 */
export type DescribeLicenseListRequest = null

/**
 * DescribeSTS请求参数结构体
 */
export type DescribeSTSRequest = null

/**
 * RenewLicense请求参数结构体
 */
export interface RenewLicenseRequest {
  /**
   * License 功能模块 Id
   */
  LicenseId: string
  /**
   * 资源包 Id
   */
  ResourceId: string
}

/**
 * license 资源信息
 */
export interface LicenseResourceInfo {
  /**
   * 授权功能Id
   */
  Id: number
  /**
   * 用户appid
   */
  AppId: string
  /**
   * 有效期时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration: string
  /**
   * 功能Id
   */
  FeatureId: number
  /**
   * 此license资源的开始生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime: string
  /**
   * 此license资源的生效结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime: string
  /**
   * 创建时间
   */
  CreatedAt: string
  /**
   * 更新时间
   */
  UpdatedAt: string
  /**
   * 此资源是否可用于续期和更新有效期
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUse: boolean
  /**
   * 此资源的状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 销毁时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolatedTimestamp: string
  /**
   * 功能模块名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 功能模块类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 资源包信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Package: Package
  /**
   * 应用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Application: AppInfo
  /**
   * 资源Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 自动续费状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
}

/**
 * license 资源信息
 */
export interface LicenseResourceSimpleInfo {
  /**
   * 授权功能Id
   */
  Id: number
  /**
   * 用户appid
   */
  AppId: string
  /**
   * 有效期时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration: string
  /**
   * 功能Id
   */
  FeatureId: number
  /**
   * 此license资源的开始生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime: string
  /**
   * 此license资源的生效结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime: string
  /**
   * 创建时间
   */
  CreatedAt: string
  /**
   * 更新时间
   */
  UpdatedAt: string
  /**
   * 此资源是否可用于续期和更新有效期
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUse: boolean
  /**
   * 此资源的状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 销毁时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolatedTimestamp: string
  /**
   * 功能模块名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 功能模块类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 资源包信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Package: Package
  /**
   * 资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 自动续费状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
}

/**
 * RenewLicense返回参数结构体
 */
export interface RenewLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVcubeApplicationAndPlayList请求参数结构体
 */
export interface DescribeVcubeApplicationAndPlayListRequest {
  /**
   * 查询对应业务方的license，直播:live 点播：vod
   */
  BizType?: string
  /**
   * 应用类型测试：test，正式：formal
   */
  AppType?: string
  /**
   * 应用名称，模糊查询
   */
  AppName?: string
  /**
   * Ios包名，模糊查询
   */
  BundleId?: string
  /**
   * Android 包名，模糊查询
   */
  PackageName?: string
  /**
   * 平台信息，pc 或者 mobile
   */
  Platform?: string
  /**
   * Mac 进程名
   */
  MacBundleId?: string
  /**
   * Windows 进程名
   */
  WinProcessName?: string
}

/**
 * 可以开通测试的功能
 */
export interface XMagicTrial {
  /**
   * 功能名称
   */
  Name: string
  /**
   * 可以申请的次数
   */
  TrialCount: number
  /**
   * 每次申请的时长单位：天
   */
  Duration: number
  /**
   * 功能类别
   */
  Plan: string
  /**
   * single: 原子能力,combined:套餐
   */
  XMagicType: string
}

/**
 * DescribeVcubeApplicationAndXMagicList请求参数结构体
 */
export interface DescribeVcubeApplicationAndXMagicListRequest {
  /**
   * 查询对应业务方的license，直播:live 点播：vod
   */
  BizType?: string
  /**
   * 应用类型测试：test，正式：formal
   */
  AppType?: string
  /**
   * 应用名称，模糊查询
   */
  AppName?: string
  /**
   * Ios包名，模糊查询
   */
  BundleId?: string
  /**
   * Android 包名，模糊查询
   */
  PackageName?: string
  /**
   * 平台信息，pc 或者 mobile
   */
  Platform?: string
  /**
   * Mac 进程名
   */
  MacBundleId?: string
  /**
   * Windows 进程名
   */
  WinProcessName?: string
}

/**
 * DescribeVcubeResourcesList返回参数结构体
 */
export interface DescribeVcubeResourcesListResponse {
  /**
   * 资源列表
   */
  ResourceList?: Array<LicenseResourceInfo>
  /**
   * 总数据量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视立方应用license
 */
export interface License {
  /**
   * license类型
   */
  Type?: string
  /**
   * 老系统迁移备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * license生效时间
   */
  StartTime?: string
  /**
   * license失效时间
   */
  EndTime?: string
  /**
   * license对应的功能Id
   */
  FeatureId?: number
  /**
   * license是测试：test还是正式：formal
   */
  LicenseType?: string
  /**
   * 测试license 是否可以续期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Renewal?: boolean
  /**
   * license索引
   */
  LicenseId?: number
  /**
   * license名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 测试license 是否升级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Update?: boolean
  /**
   * 兼容老的licenseUrl
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldLicenseUrl?: string
  /**
   * 视立方url分组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Group?: number
  /**
   * 过期：true ，未过期：其它
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expired?: boolean
  /**
   * 返回还有多少秒过期，过期返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestTime?: number
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
   * 计费资源相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resource?: RenewResource
  /**
   * 是否为马甲包
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVest?: boolean
}

/**
 * DescribeLicenseList返回参数结构体
 */
export interface DescribeLicenseListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplication返回参数结构体
 */
export interface ModifyApplicationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyXMagic请求参数结构体
 */
export interface ModifyXMagicRequest {
  /**
   * 资源Id
   */
  ResourceId: string
  /**
   * 优图licenseId
   */
  XMagicId: string
}

/**
 * 优图美视资源包
 */
export interface XMagicResource {
  /**
   * 资源Id
   */
  Id?: number
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 套餐类别
   */
  Plan?: string
  /**
   * 单位：年
   */
  Duration?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 更新时间
   */
  UpdatedAt?: string
  /**
   * 资源是否已使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  XMagic?: boolean
  /**
   * 资源开始生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 资源结束生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 资源包是否过期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expired?: boolean
  /**
   * 功能模块名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * single: 原子能力,combined:套餐
注意：此字段可能返回 null，表示取不到有效值。
   */
  XMagicType?: string
  /**
   * xmagic:优图， avatar：虚拟人
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizType?: string
  /**
   * 资源Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 资源是否可以使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUse?: boolean
}

/**
 * 自动续期资源info
 */
export interface RenewResource {
  /**
   * 资源Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 自动续期标记，0：默认，1：自动续期，2：不续期
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
  /**
   * 资源冻结时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolatedTimestamp?: string
  /**
   * 资源销毁状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Refund?: boolean
  /**
   * 子产品码
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubProductCode?: string
  /**
   * 资源到期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
}

/**
 * DescribeVcubeResources返回参数结构体
 */
export interface DescribeVcubeResourcesResponse {
  /**
   * 资源列表
   */
  ResourceList?: Array<LicenseResourceSimpleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNews请求参数结构体
 */
export interface DescribeNewsRequest {
  /**
   * 页码，从0开始
   */
  PageNumber: number
  /**
   * 每页数据量
   */
  PageSize: number
}

/**
 * CreateTestXMagic返回参数结构体
 */
export interface CreateTestXMagicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserConfig请求参数结构体
 */
export type DescribeUserConfigRequest = null

/**
 * RenewTestXMagic请求参数结构体
 */
export interface RenewTestXMagicRequest {
  /**
   * 优图美视Id
   */
  XMagicId: number
}

/**
 * UpdateXMagic返回参数结构体
 */
export interface UpdateXMagicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLicense请求参数结构体
 */
export interface ModifyLicenseRequest {
  /**
   * License 功能模块 Id
   */
  LicenseId: string
  /**
   * 资源包 Id
   */
  ResourceId: string
}

/**
 * CreateActivityLicense返回参数结构体
 */
export interface CreateActivityLicenseResponse {
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * app名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppName?: string
  /**
   * ios包名
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * 安卓包名
   */
  PackageName?: string
  /**
   * 有效时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * license秘钥
   */
  LicenseKey?: string
  /**
   * license 授权文件下载链接
   */
  LicenseUrl?: string
  /**
   * license剩余天数，最后一天以及过期显示0
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResidueDay?: number
  /**
   * license剩余秒数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Residue?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateTestXMagic返回参数结构体
 */
export interface UpdateTestXMagicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTrialApplicationAndLicense返回参数结构体
 */
export interface CreateTrialApplicationAndLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeXMagicResource请求参数结构体
 */
export interface DescribeXMagicResourceRequest {
  /**
   * 分页页码 第一页是0
   */
  PageNumber: number
  /**
   * 每页数量
   */
  PageSize: number
}

/**
 * ModifyPresetApplication返回参数结构体
 */
export interface ModifyPresetApplicationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateXMagic返回参数结构体
 */
export interface CreateXMagicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPresetApplication请求参数结构体
 */
export interface ModifyPresetApplicationRequest {
  /**
   * 应用Id
   */
  ApplicationId: number
  /**
   * 您的app名称
   */
  AppName?: string
  /**
   * ios包名
   */
  BundleId?: string
  /**
   * 安卓包名
   */
  PackageName?: string
}

/**
 * 应用包名信息
 */
export interface AppInfo {
  /**
   * 应用Id
   */
  Id?: number
  /**
   * 用户appid
   */
  AppId?: string
  /**
   * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppName?: string
  /**
   * Ios 包名
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * Andorid 包名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageName?: string
  /**
   * 应用详情
   */
  AppType?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 更新时间
   */
  UpdatedAt?: string
  /**
   * Mac 进程名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MacBundleId?: string
  /**
   * windows 进程名
注意：此字段可能返回 null，表示取不到有效值。
   */
  WinProcessName?: string
  /**
   * 允许的web域名列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainList?: Array<string>
}

/**
 * DescribeNews返回参数结构体
 */
export interface DescribeNewsResponse {
  /**
   * 产品动态详情列表
   */
  NewsList?: Array<NewsInfo>
  /**
   * 总数据量
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSTS返回参数结构体
 */
export interface DescribeSTSResponse {
  /**
   * 桶名称
   */
  Bucket?: string
  /**
   * 地区
   */
  Region?: string
  /**
   * 开始生效时间
   */
  StartTime?: number
  /**
   * 临时token过期时间
   */
  ExpiredTime?: number
  /**
   * 临时token
   */
  SessionToken?: string
  /**
   * 临时SecretId
   */
  TmpSecretId?: string
  /**
   * 临时秘钥
   */
  TmpSecretKey?: string
  /**
   * 上传的根路径，底下可以多层
   */
  Path?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源包结构
 */
export interface Package {
  /**
   * 资源包Id
   */
  Id: number
  /**
   * 资源包资源Id
   */
  BizResourceId: string
  /**
   * 站点 中国站还是国际站
   */
  Site: string
  /**
   * 资源包开始生效时间
   */
  StartTime: string
  /**
   * 资源包过期时间
   */
  EndTime: string
  /**
   * 资源包退费时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  RefundTime: string
  /**
   * 资源包名称
   */
  Name: string
  /**
   * 资源包类型ID,对应点播：PackageId 对应直播：TypeId
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
}

/**
 * DescribeXMagicResource返回参数结构体
 */
export interface DescribeXMagicResourceResponse {
  /**
   * 优图资源包信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources?: Array<XMagicResource>
  /**
   * 资源数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVcubeApplicationAndPlayList返回参数结构体
 */
export interface DescribeVcubeApplicationAndPlayListResponse {
  /**
   * 应用license列表
   */
  ApplicationInfoList?: Array<ApplicationInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频功能描述模型
 */
export interface VideoFeature {
  /**
   * 索引
   */
  Id?: number
  /**
   * 功能ID
   */
  FeatureId?: number
  /**
   * 功能名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 功能类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 是否可以申请试用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trial?: boolean
  /**
   * 可以试用的次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrialCount?: number
  /**
   * 可以试用的时长，单位天
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
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
   * 功能所属业务方
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizType?: string
  /**
   * 平台类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Platform?: string
}

/**
 * 功能描述模型
 */
export interface Feature {
  /**
   * 索引
   */
  Id: number
  /**
   * 功能ID
   */
  FeatureId: number
  /**
   * 功能名称
   */
  Name: string
  /**
   * 功能类型
   */
  Type: string
  /**
   * 是否可以申请试用
   */
  Trial: boolean
  /**
   * 可以试用的次数
   */
  TrialCount: number
  /**
   * 可以试用的时长，单位天
   */
  Duration: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt: string
}

/**
 * ModifyTrialLicense返回参数结构体
 */
export interface ModifyTrialLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateTrialLicense返回参数结构体
 */
export interface UpdateTrialLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplication请求参数结构体
 */
export interface ModifyApplicationRequest {
  /**
   * 应用ID
   */
  ApplicationId: number
  /**
   * 应用名
   */
  AppName?: string
  /**
   * 应用ID
   */
  BundleId?: string
  /**
   * 包名
   */
  PackageName?: string
  /**
   * Windows 进程名
   */
  WinProcessName?: string
  /**
   * Mac 进程名
   */
  MacBundleId?: string
  /**
   * 要追加的web域名列表
   */
  DomainList?: Array<string>
}

/**
 * CreateXMagic请求参数结构体
 */
export interface CreateXMagicRequest {
  /**
   * 应用ApplicationId
   */
  ApplicationId: number
  /**
   * 营业执照
   */
  CompanyPermit?: string
  /**
   * 公司类型
   */
  CompanyType?: string
  /**
   * 公司名称
   */
  CompanyName?: string
  /**
   * 优图资源id列表
   */
  XMagicResourceIds?: Array<string>
}

/**
 * RenewVideo请求参数结构体
 */
export interface RenewVideoRequest {
  /**
   * 要续期的视频播放license Id
   */
  LicenseId: number
}

/**
 * CreateApplicationAndVideo请求参数结构体
 */
export interface CreateApplicationAndVideoRequest {
  /**
   * 应用名称
   */
  AppName: string
  /**
   * Ios 包名
   */
  BundleId?: string
  /**
   * Android 包名
   */
  PackageName?: string
}

/**
 * DescribeVcubeApplicationAndLicense返回参数结构体
 */
export interface DescribeVcubeApplicationAndLicenseResponse {
  /**
   * 应用license列表
   */
  ApplicationInfoList?: Array<ApplicationInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTestXMagic请求参数结构体
 */
export interface CreateTestXMagicRequest {
  /**
   * 应用id
   */
  ApplicationId: number
  /**
   * 营业执照
   */
  CompanyPermit?: string
  /**
   * 公司类型
   */
  CompanyType?: string
  /**
   * 公司名称
   */
  CompanyName?: string
  /**
   * 测试套餐名称
   */
  PlanList?: Array<string>
}

/**
 * DescribeVcubeApplicationAndXMagicList返回参数结构体
 */
export interface DescribeVcubeApplicationAndXMagicListResponse {
  /**
   * 应用license列表
   */
  ApplicationInfoList?: Array<ApplicationInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTrialLicense请求参数结构体
 */
export interface CreateTrialLicenseRequest {
  /**
   * 应用ID
   */
  ApplicationId: string
  /**
   * 功能 ID 数组
   */
  FeatureIds: Array<number | bigint>
  /**
   * Url分组
   */
  Group?: number
}

/**
 * 优图简单信息
 */
export interface XMagicSimpleInfo {
  /**
   * XMagic 的Id
   */
  Id: number
  /**
   * XMagic 状态
   */
  Status: number
}

/**
 * 查询返回的优图信息
 */
export interface XMagicInfo {
  /**
   * 优图Id
   */
  Id?: number
  /**
   * 用户公司名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompanyName?: string
  /**
   * https://cos.xxx
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompanyPermit?: string
  /**
   * 用户公司行业类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompanyType?: string
  /**
   * 优图套餐类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Plan?: string
  /**
   * 测试版还是正式版 test | formal
   */
  LicenseType?: string
  /**
   * 0: 预申请，需要补充申请信息
   1: 审批通过，xmagic已签发，正在生效中
    2: 提交完申请资料后待运营审核状态
    3: 申请被驳回，需要重新修改申请资料
    4: 应用包名被修改后触发xmagic审批，当前xmagic已暂停生效
    5: 应用修改包名后，审批未通过状态，可以重新修改应用PB，状态会回到4
   */
  Status?: number
  /**
   * 测试license是否已经升级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Update?: boolean
  /**
   * 优图生效开始时间 Status为1的时候
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 优图生效结束时间 Status为1的时候
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 续期次数， LicenseType=test时有此字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewalCount?: number
  /**
   * 历次审批的回复
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reply?: Array<string>
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 修改时间
   */
  UpdatedAt?: string
  /**
   * 用户更新信息的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 是否过期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expired?: boolean
  /**
   * 返回还剩多少秒过期，过期后返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestTime?: number
  /**
   * single: 原子能力,combined:套餐
注意：此字段可能返回 null，表示取不到有效值。
   */
  XMagicType?: string
  /**
   * 优图模块名称，自动中英文
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 优图资源信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resource?: RenewResource
  /**
   * 是否是马甲包
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVest?: boolean
}

/**
 * DescribeFeatureList请求参数结构体
 */
export type DescribeFeatureListRequest = null

/**
 * 视立方license用户 应用结构
 */
export interface ApplicationInfo {
  /**
   * 应用名称
   */
  AppName?: string
  /**
   * Ios应用的唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * 应用类型，formal： 正式应用，test：测试应用
   */
  AppType?: string
  /**
   * license数组
   */
  Licenses?: Array<License>
  /**
   * license 秘钥
注意：此字段可能返回 null，表示取不到有效值。
   */
  LicenseKey?: string
  /**
   * 安卓应用的唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageName?: string
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
   * 用户应用Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplicationId?: number
  /**
   * 视立方下载license的url
注意：此字段可能返回 null，表示取不到有效值。
   */
  LicenseUrl?: string
  /**
   * 优图美视信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  XMagics?: Array<XMagicInfo>
  /**
   * Mac  进程名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MacBundleId?: string
  /**
   * windows 进程名
注意：此字段可能返回 null，表示取不到有效值。
   */
  WinProcessName?: string
  /**
   * web端Domain列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainList?: Array<string>
  /**
   * 账号AppId
   */
  AppId?: string
}

/**
 * CreateActivityLicense请求参数结构体
 */
export interface CreateActivityLicenseRequest {
  /**
   * 活动Id
   */
  Activity: string
}

/**
 * UpdateTrialLicense请求参数结构体
 */
export interface UpdateTrialLicenseRequest {
  /**
   * 执照ID
   */
  LicenseId: string
  /**
   * 资源包ID
   */
  ResourceId: string
}

/**
 * UpdateTestXMagic请求参数结构体
 */
export interface UpdateTestXMagicRequest {
  /**
   * 优图美视功能Id
   */
  XMagicId: number
  /**
   * XMagic套餐包Id
   */
  ResourceId: string
}

/**
 * ModifyLicense返回参数结构体
 */
export interface ModifyLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApplicationAndWebPlayerLicense返回参数结构体
 */
export interface CreateApplicationAndWebPlayerLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTrialLicense请求参数结构体
 */
export interface ModifyTrialLicenseRequest {
  /**
   * 执照ID
   */
  LicenseId: string
}

/**
 * 优图的的功能，Trial 为true的可以开通测试
 */
export interface XMagicFeature {
  /**
   * 功能名称
   */
  Name?: string
  /**
   * 可以申请的次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrialCount?: number
  /**
   * 每次申请的时长单位：天
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
  /**
   * 功能类别
   */
  Plan?: string
  /**
   * single: 原子能力,combined:套餐
   */
  XMagicType?: string
  /**
   * 此功能是否支持开通测试
   */
  Trial?: boolean
  /**
   * 功能所属业务方
   */
  BizType?: string
}

/**
 * ModifyXMagic返回参数结构体
 */
export interface ModifyXMagicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApplicationAndWebPlayerLicense请求参数结构体
 */
export interface CreateApplicationAndWebPlayerLicenseRequest {
  /**
   * 应用名称
   */
  AppName: string
  /**
   * 域名列表
   */
  DomainList: Array<string>
}

/**
 * CreateApplicationAndBindLicense请求参数结构体
 */
export interface CreateApplicationAndBindLicenseRequest {
  /**
   * 应用名
   */
  AppName: string
  /**
   * 应用ID
   */
  BundleId?: string
  /**
   * 包名
   */
  PackageName?: string
  /**
   * 资源包ID
   */
  ResourceIds?: Array<string>
  /**
   * 营业执照
   */
  CompanyPermit?: string
  /**
   * 公司类型
   */
  CompanyType?: string
  /**
   * 公司名称
   */
  CompanyName?: string
  /**
   * 优图资源id列表
   */
  XMagicResourceIds?: Array<string>
  /**
   * Mac 进程名
   */
  MacBundleId?: string
  /**
   * Windows 进程名
   */
  WinProcessName?: string
  /**
   * 要开通的域名列表
   */
  DomainList?: Array<string>
  /**
   * 要开通的端，web/mobile/pc
   */
  Platform?: string
}

/**
 * 视立方产品概览页新闻动态
 */
export type NewsInfo = null

/**
 * DescribeFeatureList返回参数结构体
 */
export interface DescribeFeatureListResponse {
  /**
   * 功能列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeatureList?: Array<VideoFeature>
  /**
   * 优图功能列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  XMagicFeatureList?: Array<XMagicFeature>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeXMagicResourceList返回参数结构体
 */
export interface DescribeXMagicResourceListResponse {
  /**
   * 优图资源包信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources?: Array<XMagicResourceSimpleInfo>
  /**
   * 资源数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrialFeature请求参数结构体
 */
export type DescribeTrialFeatureRequest = null
