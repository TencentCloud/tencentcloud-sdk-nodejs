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
 * 环境风险评估返回结果
 */
export interface AssessEnvironmentRiskRsp {
  /**
   * <p>环境风险分信息</p>
   */
  Score?: DataScore
  /**
   * <p>环境基础信息</p>
   */
  Environment?: Environment
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
 * AssessEnvironmentRisk请求参数结构体
 */
export interface AssessEnvironmentRiskRequest {
  /**
   * <p>客户端 IP 地址</p>
   */
  UserIp: string
}
