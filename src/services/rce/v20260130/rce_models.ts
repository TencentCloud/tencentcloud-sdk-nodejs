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
 * 风险标签
 */
export interface RiskLabel {
  /**
   * <p>风险ID</p>
   */
  Id?: string
  /**
   * <p>风险描述</p>
   */
  Reason?: string
}

/**
 * 环境基础信息
 */
export interface Environment {
  /**
   * <p>IP地理位置信息</p>
   */
  Location?: IPLocation
  /**
   * <p>IP基础网络信息</p>
   */
  Network?: IPNetwork
}

/**
 * 环境风险评估返回结果
 */
export interface AssessEnvironmentRiskRsp {
  /**
   * <p>IP环境风险分信息</p>
   */
  Score?: DataScore
  /**
   * <p>IP环境基础信息</p>
   */
  Environment?: Environment
}

/**
 * IP地理位置信息
 */
export interface IPLocation {
  /**
   * <p>IP地址所属国家</p>
   */
  Country?: string
  /**
   * <p>IP地址所属省份</p>
   */
  Region?: string
  /**
   * <p>IP地址所属城市</p>
   */
  City?: string
  /**
   * <p>IP地址所属地区</p>
   */
  District?: string
  /**
   * <p>IP地址的经度</p>
   */
  Longitude?: string
  /**
   * <p>IP地址的纬度</p>
   */
  Latitude?: string
  /**
   * <p>IP地址所属时区</p>
   */
  Timezone?: string
  /**
   * <p>IP地址的邮政编码</p>
   */
  ZipCode?: string
}

/**
 * 风险分信息
 */
export interface DataScore {
  /**
   * <p>风险等级</p>
   */
  RiskLevel?: number
  /**
   * <p>风险标签</p>
   */
  RiskLabels?: Array<RiskLabel>
}

/**
 * 设备风险评估基础版返回结果
 */
export interface AssessDeviceRiskRsp {
  /**
   * <p>设备风险分信息</p>
   */
  Score?: DataScore
  /**
   * <p>设备基础信息</p>
   */
  Device?: Device
}

/**
 * AssessEnvironmentRisk返回参数结构体
 */
export interface AssessEnvironmentRiskResponse {
  /**
   * <p>环境风险评估返回结果</p>
   */
  Data?: AssessEnvironmentRiskRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssessDeviceRiskPremiumPro返回参数结构体
 */
export interface AssessDeviceRiskPremiumProResponse {
  /**
   * <p>设备风险评估高级版返回结果</p>
   */
  Data?: AssessDeviceRiskPremiumRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssessDeviceRiskPro请求参数结构体
 */
export interface AssessDeviceRiskProRequest {
  /**
   * <p>用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取</p>
   */
  DeviceToken: string
  /**
   * <p>客户端 IP 地址（IPv4或IPv6）</p>
   */
  UserIp?: string
}

/**
 * AssessDeviceRiskPremiumPro请求参数结构体
 */
export interface AssessDeviceRiskPremiumProRequest {
  /**
   * <p>用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取</p>
   */
  DeviceToken: string
  /**
   * <p>客户端 IP 地址（IPv4或IPv6）</p>
   */
  UserIp?: string
}

/**
 * AssessDeviceRiskPro返回参数结构体
 */
export interface AssessDeviceRiskProResponse {
  /**
   * <p>设备风险评估基础版返回结果</p>
   */
  Data?: AssessDeviceRiskRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IP基础网络信息
 */
export interface IPNetwork {
  /**
   * <p>互联网服务提供商</p>
   */
  ISP?: string
  /**
   * <p>自治系统号</p>
   */
  ASN?: string
  /**
   * <p>IP注册组织名称</p>
   */
  Organization?: string
  /**
   * <p>是否保留IP</p>
   */
  IsReserved?: boolean
  /**
   * <p>是否网关IP</p>
   */
  IsGateway?: boolean
  /**
   * <p>是否任播网络</p>
   */
  IsAnycast?: boolean
  /**
   * <p>是否移动网络</p>
   */
  IsMobile?: boolean
  /**
   * <p>是否动态IP</p>
   */
  IsDynamic?: boolean
  /**
   * <p>是否网络出口</p>
   */
  IsEgress?: boolean
  /**
   * <p>是否域名解析</p>
   */
  IsDNS?: boolean
  /**
   * <p>是否教育机构</p>
   */
  IsEducation?: boolean
  /**
   * <p>是否组织机构</p>
   */
  IsInstitution?: boolean
  /**
   * <p>是否企业专线</p>
   */
  IsCompany?: boolean
  /**
   * <p>是否家用宽带</p>
   */
  IsResidence?: boolean
  /**
   * <p>是否云服务</p>
   */
  IsCloudService?: boolean
  /**
   * <p>是否基础设施</p>
   */
  IsInfrastructure?: boolean
  /**
   * <p>是否邮箱服务</p>
   */
  IsMXServer?: boolean
}

/**
 * 设备风险评估高级版返回结果
 */
export interface AssessDeviceRiskPremiumRsp {
  /**
   * <p>决策信息</p>
   */
  Decision?: Decision
  /**
   * <p>设备风险分信息</p>
   */
  Score?: DataScore
  /**
   * <p>设备基础信息</p>
   */
  Device?: Device
  /**
   * <p>IP环境基础信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Environment?: Environment
}

/**
 * AssessEnvironmentRisk请求参数结构体
 */
export interface AssessEnvironmentRiskRequest {
  /**
   * <p>客户端 IP 地址（IPv4或IPv6）</p>
   */
  UserIp: string
}

/**
 * 设备基础信息
 */
export interface Device {
  /**
   * <p>设备ID</p>
   */
  DeviceId?: string
  /**
   * <p>App版本信息</p>
   */
  AppVersion?: string
  /**
   * <p>品牌</p>
   */
  Brand?: string
  /**
   * <p>客户端IP</p>
   */
  ClientIp?: string
  /**
   * <p>机型</p>
   */
  Model?: string
  /**
   * <p>网络类型</p>
   */
  NetworkType?: string
  /**
   * <p>应用包名</p>
   */
  PackageName?: string
  /**
   * <p>平台</p><p>枚举值：</p><ul><li>2： Android</li><li>3： IOS</li><li>4： H5</li><li>5： 微信小程序</li></ul>
   */
  Platform?: string
  /**
   * <p>系统版本</p>
   */
  SystemVersion?: string
  /**
   * <p>SDK版本</p>
   */
  SdkBuildVersion?: string
}

/**
 * 决策信息
 */
export interface Decision {
  /**
   * <p>决策结果</p><ul><li>pass：通过</li><li>review：复审</li><li>reject：拒绝</li></ul>
   */
  DecisionResult?: string
}
