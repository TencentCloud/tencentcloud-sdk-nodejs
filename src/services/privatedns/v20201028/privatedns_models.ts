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
 * QueryAsyncBindVpcStatus返回参数结构体
 */
export interface QueryAsyncBindVpcStatusResponse {
  /**
   * processing 处理中，success 执行成功，
failed 执行失败
   */
  Status?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrivateZoneRecordList请求参数结构体
 */
export interface CreatePrivateZoneRecordListRequest {
  /**
   * 私有域ID数组
   */
  ZoneIds: Array<string>
  /**
   * 私有域解析记录数据
   */
  RecordsInfo: Array<RecordsInfo>
}

/**
 * 终端节点信息
 */
export interface SubnetIpInfo {
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * ip
   */
  SubnetVip?: string
}

/**
 * DescribeAccountVpcList请求参数结构体
 */
export interface DescribeAccountVpcListRequest {
  /**
   * 关联账号的uin
   */
  AccountUin: string
  /**
   * 分页偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页限制数目， 最大100，默认20
   */
  Limit?: number
  /**
   * 过滤参数
   */
  Filters?: Array<Filter>
}

/**
 * 关联的VPC出参
 */
export interface AccountVpcInfoOutput {
  /**
   * 关联账户的uin
   */
  Uin: string
  /**
   * vpcid
   */
  UniqVpcId: string
  /**
   * 地域
   */
  Region: string
}

/**
 * DescribePrivateZone请求参数结构体
 */
export interface DescribePrivateZoneRequest {
  /**
   * 私有域id
   */
  ZoneId: string
}

/**
 * DescribeAccountVpcList返回参数结构体
 */
export interface DescribeAccountVpcListResponse {
  /**
   * 关联账号VPC数量
   */
  TotalCount?: number
  /**
   * 关联账号VPC 列表
   */
  VpcSet?: Array<AccountVpcInfoOut>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateDNSAccount请求参数结构体
 */
export interface DeletePrivateDNSAccountRequest {
  /**
   * 私有域解析账号
   */
  Account: PrivateDNSAccount
}

/**
 * AddSpecifyPrivateZoneVpc请求参数结构体
 */
export interface AddSpecifyPrivateZoneVpcRequest {
  /**
   * 私有域id
   */
  ZoneId: string
  /**
   * 本次新增的vpc信息
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 本次新增关联账户vpc信息
   */
  AccountVpcSet?: Array<AccountVpcInfo>
  /**
   * 是否为同步操作
   */
  Sync?: boolean
}

/**
 * DescribeCreateRecordListResult返回参数结构体
 */
export interface DescribeCreateRecordListResultResponse {
  /**
   * 批量添加解析记录结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordsResult?: Array<RecordsInfoResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInboundEndpoint请求参数结构体
 */
export interface ModifyInboundEndpointRequest {
  /**
   * 终端节点ID
   */
  EndpointId: string
  /**
   * 终端节点名称
   */
  EndpointName: string
}

/**
 * Vpc信息
 */
export interface VpcInfo {
  /**
   * VpcId
   */
  UniqVpcId: string
  /**
   * Vpc所属地区: ap-guangzhou, ap-shanghai
   */
  Region: string
}

/**
 * CreatePrivateDNSAccount返回参数结构体
 */
export interface CreatePrivateDNSAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubscribePrivateZoneService请求参数结构体
 */
export type SubscribePrivateZoneServiceRequest = null

/**
 * DescribeCreateZoneListResult返回参数结构体
 */
export interface DescribeCreateZoneListResultResponse {
  /**
   * 私有域域名和zoneId
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZonesInfo?: Array<ZoneInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建私有域成功后返回私有域信息
 */
export interface ZoneInfo {
  /**
   * 私有域ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneId: string
  /**
   * 私有域域名
   */
  Domain: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason: string
}

/**
 * 私有域信息
 */
export interface PrivateZone {
  /**
   * 私有域id: zone-xxxxxxxx
   */
  ZoneId?: string
  /**
   * 域名所有者uin
   */
  OwnerUin?: number
  /**
   * 私有域名
   */
  Domain?: string
  /**
   * 创建时间
   */
  CreatedOn?: string
  /**
   * 修改时间
   */
  UpdatedOn?: string
  /**
   * 记录数
   */
  RecordCount?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 绑定的Vpc列表
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 私有域绑定VPC状态，未关联vpc：SUSPEND，已关联VPC：ENABLED
，关联VPC失败：FAILED
   */
  Status?: string
  /**
   * 域名递归解析状态：开通：ENABLED, 关闭，DISABLED
   */
  DnsForwardStatus?: string
  /**
   * 标签键值对集合
   */
  Tags?: Array<TagInfo>
  /**
   * 绑定的关联账号的vpc列表
   */
  AccountVpcSet?: Array<AccountVpcInfoOutput>
  /**
   * 是否自定义TLD
   */
  IsCustomTld?: boolean
  /**
   * CNAME加速状态：开通：ENABLED, 关闭，DISABLED
   */
  CnameSpeedupStatus?: string
  /**
   * 转发规则名称
   */
  ForwardRuleName?: string
  /**
   * 转发规则类型：云上到云下，DOWN；云下到云上，UP，目前只支持DOWN
   */
  ForwardRuleType?: string
  /**
   * 转发的地址
   */
  ForwardAddress?: string
  /**
   * 终端节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndPointName?: string
  /**
   * 已删除的vpc
   */
  DeletedVpcSet?: Array<VpcInfo>
}

/**
 * CreatePrivateDNSAccount请求参数结构体
 */
export interface CreatePrivateDNSAccountRequest {
  /**
   * 私有域解析账号，该账号不能与主账号一致且需要子账号授权
   */
  Account: PrivateDNSAccount
}

/**
 * 流量包用量
 */
export interface FlowUsage {
  /**
   * 流量包类型：ZONE 私有域；TRAFFIC 解析流量包
   */
  FlowType?: string
  /**
   * 流量包总额度
   */
  TotalQuantity?: number
  /**
   * 流量包可用额度
   */
  AvailableQuantity?: number
}

/**
 * CreateForwardRule返回参数结构体
 */
export interface CreateForwardRuleResponse {
  /**
   * 转发规则ID
   */
  RuleId: string
  /**
   * 转发规则名称
   */
  RuleName: string
  /**
   * 转发规则类型
   */
  RuleType: string
  /**
   * 私有域ID
   */
  ZoneId: string
  /**
   * 终端节点ID
   */
  EndPointId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrivateZoneVpc请求参数结构体
 */
export interface ModifyPrivateZoneVpcRequest {
  /**
   * 私有域ID
   */
  ZoneId: string
  /**
   * 私有域关联的全部VPC列表
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 私有域账号关联的全部VPC列表
   */
  AccountVpcSet?: Array<AccountVpcInfo>
}

/**
 * DescribePrivateDNSAccountList返回参数结构体
 */
export interface DescribePrivateDNSAccountListResponse {
  /**
   * 私有域解析账号数量
   */
  TotalCount?: number
  /**
   * 私有域解析账号列表
   */
  AccountSet?: Array<PrivateDNSAccount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateExtendEndpoint请求参数结构体
 */
export type CreateExtendEndpointRequest = null

/**
 * DescribeCreateRecordListResult请求参数结构体
 */
export interface DescribeCreateRecordListResultRequest {
  /**
   * 私有域ID数组
   */
  ZoneIds: Array<string>
  /**
   * 私有域解析记录数据
   */
  RecordsInfo: Array<RecordsInfo>
}

/**
 * 私有域信息
 */
export interface PrivateZoneRecord {
  /**
   * 记录id
   */
  RecordId?: string
  /**
   * 私有域id: zone-xxxxxxxx
   */
  ZoneId?: string
  /**
   * 子域名
   */
  SubDomain?: string
  /**
   * 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR"
   */
  RecordType?: string
  /**
   * 记录值
   */
  RecordValue?: string
  /**
   * 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600
   */
  TTL?: number
  /**
   * MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50
   */
  MX?: number
  /**
   * 记录状态：ENABLED
   */
  Status?: string
  /**
   * 记录权重，值为1-100
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
  /**
   * 记录创建时间
   */
  CreatedOn?: string
  /**
   * 记录更新时间
   */
  UpdatedOn?: string
  /**
   * 附加信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
  /**
   * 0暂停，1启用
   */
  Enabled?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * CreatePrivateZoneRecord请求参数结构体
 */
export interface CreatePrivateZoneRecordRequest {
  /**
   * 私有域ID
   */
  ZoneId: string
  /**
   * 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR"
   */
  RecordType: string
  /**
   * 子域名，例如 "www", "m", "@"
   */
  SubDomain: string
  /**
   * 记录值，例如 IP：192.168.10.2，CNAME：cname.qcloud.com.，MX：mail.qcloud.com.
   */
  RecordValue: string
  /**
   * 记录权重，值为1-100
   */
  Weight?: number
  /**
   * MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50
   */
  MX?: number
  /**
   * 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600
   */
  TTL?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * ModifyPrivateZoneRecord返回参数结构体
 */
export interface ModifyPrivateZoneRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateZoneRecordList返回参数结构体
 */
export interface DescribePrivateZoneRecordListResponse {
  /**
   * 解析记录数量
   */
  TotalCount?: number
  /**
   * 解析记录列表
   */
  RecordSet?: Array<PrivateZoneRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRequestData返回参数结构体
 */
export interface DescribeRequestDataResponse {
  /**
   * 请求量统计表
   */
  Data?: Array<MetricData>
  /**
   * 请求量单位时间: Day：天，Hour：小时
   */
  Interval?: string
  /**
   * 导出数据下载地址
   */
  Url?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteInboundEndpoint返回参数结构体
 */
export interface DeleteInboundEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecord请求参数结构体
 */
export interface DescribeRecordRequest {
  /**
   * 私有域ID
   */
  ZoneId: string
  /**
   * 记录ID
   */
  RecordId: string
}

/**
 * DeleteForwardRule请求参数结构体
 */
export interface DeleteForwardRuleRequest {
  /**
   * 转发规则ID数组
   */
  RuleIdSet?: Array<string>
}

/**
 * ModifyPrivateZone返回参数结构体
 */
export interface ModifyPrivateZoneResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSpecifyPrivateZoneVpc请求参数结构体
 */
export interface DeleteSpecifyPrivateZoneVpcRequest {
  /**
   * 私有域id
   */
  ZoneId: string
  /**
   * 本次删除的VPC
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 本次删除的关联账户VPC
   */
  AccountVpcSet?: Array<AccountVpcInfo>
  /**
   * 是否为同步操作
   */
  Sync?: boolean
}

/**
 * ModifyPrivateZone请求参数结构体
 */
export interface ModifyPrivateZoneRequest {
  /**
   * 私有域ID
   */
  ZoneId: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 是否开启子域名递归, ENABLED， DISABLED
   */
  DnsForwardStatus?: string
  /**
   * 是否开启CNAME加速：ENABLED， DISABLED
   */
  CnameSpeedupStatus?: string
}

/**
 * DescribeRecord返回参数结构体
 */
export interface DescribeRecordResponse {
  /**
   * 记录信息
   */
  RecordInfo?: RecordInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDashboard返回参数结构体
 */
export interface DescribeDashboardResponse {
  /**
   * 私有域解析总数
   */
  ZoneTotal?: number
  /**
   * 私有域关联VPC数量
   */
  ZoneVpcCount?: number
  /**
   * 历史请求量总数
   */
  RequestTotalCount?: number
  /**
   * 流量包用量
   */
  FlowUsage?: Array<FlowUsage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私有域信息
 */
export interface RecordInfo {
  /**
   * 记录id
   */
  RecordId?: string
  /**
   * 私有域id: zone-xxxxxxxx
   */
  ZoneId?: string
  /**
   * 子域名
   */
  SubDomain?: string
  /**
   * 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR"
   */
  RecordType?: string
  /**
   * 记录值
   */
  RecordValue?: string
  /**
   * 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600
   */
  TTL?: number
  /**
   * MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50
   */
  MX?: number
  /**
   * 记录权重，值为1-100
   */
  Weight?: number
  /**
   * 记录创建时间
   */
  CreatedOn?: string
  /**
   * 记录更新时间
   */
  UpdatedOn?: string
  /**
   * 0暂停，1启用
   */
  Enabled?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * ModifyForwardRule返回参数结构体
 */
export interface ModifyForwardRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubscribePrivateZoneService返回参数结构体
 */
export interface SubscribePrivateZoneServiceResponse {
  /**
   * 私有域解析服务开通状态
   */
  ServiceStatus?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志详情
 */
export interface AuditLogInfo {
  /**
   * 时间
   */
  Date?: string
  /**
   * 操作人uin
   */
  OperatorUin?: string
  /**
   * 日志内容
   */
  Content?: string
}

/**
 * ModifyRecordsStatus请求参数结构体
 */
export interface ModifyRecordsStatusRequest {
  /**
   * 私有域ID
   */
  ZoneId: string
  /**
   * 解析记录ID列表
   */
  RecordIds: Array<number | bigint>
  /**
   * enabled：生效，disabled：失效
   */
  Status: string
}

/**
 * CreateInboundEndpoint返回参数结构体
 */
export interface CreateInboundEndpointResponse {
  /**
   * 终端节点ID
   */
  EndpointId?: string
  /**
   * 名称
   */
  EndpointName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrivateZoneRecord请求参数结构体
 */
export interface ModifyPrivateZoneRecordRequest {
  /**
   * 私有域ID
   */
  ZoneId: string
  /**
   * 记录ID
   */
  RecordId: string
  /**
   * 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR"
   */
  RecordType: string
  /**
   * 子域名，例如 "www", "m", "@"
   */
  SubDomain: string
  /**
   * 记录值，例如 IP：192.168.10.2，CNAME：cname.qcloud.com.，MX：mail.qcloud.com.
   */
  RecordValue: string
  /**
   * 记录权重，值为1-100
   */
  Weight?: number
  /**
   * MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50
   */
  MX?: number
  /**
   * 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600
   */
  TTL?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribePrivateDNSAccountList请求参数结构体
 */
export interface DescribePrivateDNSAccountListRequest {
  /**
   * 分页偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页限制数目， 最大100，默认20
   */
  Limit?: number
  /**
   * 过滤参数
   */
  Filters?: Array<Filter>
}

/**
 * 终端节点信息
 */
export interface EndPointServiceInfo {
  /**
   * ip
   */
  EndPointVip?: string
  /**
   * 子网id
   */
  UniqSubnetId?: string
  /**
   * 网络侧状态，0 可用，1 待接受，3 拒绝
   */
  EndPointState?: number
  /**
   * 状态，1表示可用，0表示删除
   */
  EndPointStatus?: number
  /**
   * 备注信息
   */
  EndPointRemark?: string
  /**
   * 网络侧隔离状态，1：已隔离，0：未隔离
   */
  EndPointIsolateFlag?: number
}

/**
 * DescribePrivateZoneRecordList请求参数结构体
 */
export interface DescribePrivateZoneRecordListRequest {
  /**
   * 私有域ID: zone-12c5a6e8
   */
  ZoneId: string
  /**
   * 过滤参数（支持使用Value、RecordType过滤）
   */
  Filters?: Array<Filter>
  /**
   * 分页偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页限制数目， 最大200，默认20
   */
  Limit?: number
}

/**
 * 私有域解析账号
 */
export interface PrivateDNSAccount {
  /**
   * 主账号Uin
   */
  Uin: string
  /**
   * 主账号名称
   */
  Account?: string
  /**
   * 用户昵称
   */
  Nickname?: string
}

/**
 * DescribeForwardRuleList请求参数结构体
 */
export interface DescribeForwardRuleListRequest {
  /**
   * 分页偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页限制数目， 最大100，默认20
   */
  Limit?: number
  /**
   * 过滤参数
   */
  Filters?: Array<Filter>
}

/**
 * ModifyRecordsStatus返回参数结构体
 */
export interface ModifyRecordsStatusResponse {
  /**
   * 私有域ID
   */
  ZoneId?: string
  /**
   * 解析记录ID列表
   */
  RecordIds?: Array<number | bigint>
  /**
   * enabled：生效，disabled：失效
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时间统计值
 */
export interface DatePoint {
  /**
   * 时间
   */
  Date?: string
  /**
   * 值
   */
  Value?: number
}

/**
 * DeleteSpecifyPrivateZoneVpc返回参数结构体
 */
export interface DeleteSpecifyPrivateZoneVpcResponse {
  /**
   * 私有域id
   */
  ZoneId?: string
  /**
   * 本次删除的VPC
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 本次删除的关联账户的VPC
   */
  AccountVpcSet?: Array<AccountVpcInfo>
  /**
   * 唯一id
   */
  UniqId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEndPoint返回参数结构体
 */
export interface DeleteEndPointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEndPoint请求参数结构体
 */
export interface DeleteEndPointRequest {
  /**
   * 终端节点ID
   */
  EndPointId?: string
}

/**
 * DescribePrivateZoneList请求参数结构体
 */
export interface DescribePrivateZoneListRequest {
  /**
   * 分页偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页限制数目， 最大100，默认20
   */
  Limit?: number
  /**
   * 过滤参数
   */
  Filters?: Array<Filter>
}

/**
 * DescribeExtendEndpointList请求参数结构体
 */
export interface DescribeExtendEndpointListRequest {
  /**
   * 分页偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页限制数目， 最大100，默认20
   */
  Limit?: number
  /**
   * 过滤参数，支持EndpointName,EndpointId
   */
  Filters?: Array<Filter>
}

/**
 * 终端节点信息列表
 */
export interface InboundEndpointSet {
  /**
   * 终端节点ID
   */
  EndPointId?: string
  /**
   * 名称
   */
  EndPointName?: string
  /**
   * vpcid
   */
  UniqVpcId?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 更新时间
   */
  UpdatedAt?: string
  /**
   * 终端节点信息
   */
  EndPointService?: Array<EndPointServiceInfo>
}

/**
 * CreatePrivateZoneRecordList返回参数结构体
 */
export interface CreatePrivateZoneRecordListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询关联账号VPC列表出参
 */
export interface AccountVpcInfoOut {
  /**
   * VpcId
   */
  VpcId?: string
  /**
   * Vpc所属地区: ap-guangzhou, ap-shanghai
   */
  Region?: string
  /**
   * Vpc所属账号: 123456789
   */
  Uin?: string
  /**
   * vpc资源名称：testname
   */
  VpcName?: string
}

/**
 * 批量添加解析记录返回结果
 */
export interface RecordsInfoResult {
  /**
   * 私有域ID
   */
  ZoneId: string
  /**
   * 私有域域名
   */
  Domain: string
  /**
   * 私有域解析记录创建结果
   */
  RecordsStatus: Array<RecordsInfoStatus>
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
}

/**
 * CreatePrivateZone请求参数结构体
 */
export interface CreatePrivateZoneRequest {
  /**
   * 域名，格式必须是标准的TLD
   */
  Domain: string
  /**
   * 创建私有域的同时，为其打上标签
   */
  TagSet?: Array<TagInfo>
  /**
   * 创建私有域的同时，将其关联至VPC
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 备注
   */
  Remark?: string
  /**
   * 是否开启子域名递归, ENABLED， DISABLED。默认值为ENABLED
   */
  DnsForwardStatus?: string
  /**
   * 创建私有域的同时，将其关联至VPC
   * @deprecated
   */
  Vpcs?: Array<VpcInfo>
  /**
   * 创建私有域同时绑定关联账号的VPC
   */
  AccountVpcSet?: Array<AccountVpcInfo>
  /**
   * 是否CNAME加速：ENABLED，DISABLED，默认值为ENABLED
   */
  CnameSpeedupStatus?: string
}

/**
 * ModifyForwardRule请求参数结构体
 */
export interface ModifyForwardRuleRequest {
  /**
   * 转发规则ID
   */
  RuleId: string
  /**
   * 转发规则名称
   */
  RuleName?: string
  /**
   * 终端节点ID
   */
  EndPointId?: string
}

/**
 * DescribePrivateZone返回参数结构体
 */
export interface DescribePrivateZoneResponse {
  /**
   * 私有域详情
   */
  PrivateZone?: PrivateZone
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRequestData请求参数结构体
 */
export interface DescribeRequestDataRequest {
  /**
   * 请求量统计起始时间，格式：2020-11-22 00:00:00
   */
  TimeRangeBegin: string
  /**
   * 筛选参数：
   */
  Filters?: Array<Filter>
  /**
   * 请求量统计结束时间，格式：2020-11-22 23:59:59
   */
  TimeRangeEnd?: string
  /**
   * 是否导出：true导出，false不导出
   */
  Export?: boolean
}

/**
 * DescribePrivateZoneService返回参数结构体
 */
export interface DescribePrivateZoneServiceResponse {
  /**
   * 私有域解析服务开通状态。ENABLED已开通，DISABLED未开通
   */
  ServiceStatus?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDashboard请求参数结构体
 */
export type DescribeDashboardRequest = null

/**
 * 批量添加解析记录结果
 */
export interface RecordsInfoStatus {
  /**
   * 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR"
   */
  RecordType: string
  /**
   * 子域名，例如 "www", "m", "@"
   */
  SubDomain: string
  /**
   * 记录值，例如 IP：192.168.10.2，CNAME：cname.qcloud.com.，MX：mail.qcloud.com.
   */
  RecordValue: string
  /**
   * 记录权重，值为1-100
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight: number
  /**
   * 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600
注意：此字段可能返回 null，表示取不到有效值。
   */
  TTL: number
  /**
   * MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50
注意：此字段可能返回 null，表示取不到有效值。
   */
  MX: number
  /**
   * 是否添加成功：0是失败，1是成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 若status为0，则此处为失败原因描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message: string
}

/**
 * DescribeInboundEndpointList返回参数结构体
 */
export interface DescribeInboundEndpointListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 终端节点信息
   */
  InboundEndpointSet?: Array<InboundEndpointSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateZone返回参数结构体
 */
export interface DeletePrivateZoneResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私有域解析记录信息
 */
export interface RecordsInfo {
  /**
   * 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR"
   */
  RecordType: string
  /**
   * 子域名，例如 "www", "m", "@"
   */
  SubDomain: string
  /**
   * 记录值，例如 IP：192.168.10.2，CNAME：cname.qcloud.com.，MX：mail.qcloud.com.
   */
  RecordValue: string
  /**
   * 记录权重，值为1-100
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
  /**
   * 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600
注意：此字段可能返回 null，表示取不到有效值。
   */
  TTL?: number
  /**
   * MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50
注意：此字段可能返回 null，表示取不到有效值。
   */
  MX?: number
}

/**
 * DescribePrivateZoneList返回参数结构体
 */
export interface DescribePrivateZoneListResponse {
  /**
   * 私有域数量
   */
  TotalCount?: number
  /**
   * 私有域列表
   */
  PrivateZoneSet?: Array<PrivateZone>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateZoneService请求参数结构体
 */
export type DescribePrivateZoneServiceRequest = null

/**
 * CreatePrivateZoneList返回参数结构体
 */
export interface CreatePrivateZoneListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteInboundEndpoint请求参数结构体
 */
export interface DeleteInboundEndpointRequest {
  /**
   * 终端节点ID
   */
  EndpointId: string
}

/**
 * ModifyPrivateZoneVpc返回参数结构体
 */
export interface ModifyPrivateZoneVpcResponse {
  /**
   * 私有域ID, zone-12e45ds6
   */
  ZoneId?: string
  /**
   * 解析域关联的VPC列表
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 私有域账号关联的全部VPC列表
   */
  AccountVpcSet?: Array<AccountVpcInfoOutput>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeQuotaUsage返回参数结构体
 */
export interface DescribeQuotaUsageResponse {
  /**
   * Tld额度使用情况
   */
  TldQuota: TldQuota
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLog返回参数结构体
 */
export interface DescribeAuditLogResponse {
  /**
   * 操作日志列表
   */
  Data?: Array<AuditLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateForwardRule请求参数结构体
 */
export interface CreateForwardRuleRequest {
  /**
   * 转发规则名称
   */
  RuleName: string
  /**
   * 转发规则类型：云上到云下DOWN，云下到云上UP
   */
  RuleType: string
  /**
   * 私有域ID，可在私有域列表页面查看
   */
  ZoneId: string
  /**
   * 终端节点ID
   */
  EndPointId: string
}

/**
 * CreatePrivateZoneList请求参数结构体
 */
export interface CreatePrivateZoneListRequest {
  /**
   * 私有域域名数组，域名格式必须是标准的TLD
   */
  Domains: Array<string>
}

/**
 * AddSpecifyPrivateZoneVpc返回参数结构体
 */
export interface AddSpecifyPrivateZoneVpcResponse {
  /**
   * zone id
   */
  ZoneId?: string
  /**
   * 本次新增的vpc
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 本次新增的关联账号vpc
   */
  AccountVpcSet?: Array<AccountVpcInfo>
  /**
   * 唯一id
   */
  UniqId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateExtendEndpoint返回参数结构体
 */
export interface CreateExtendEndpointResponse {
  /**
   * 终端节点id
   */
  EndpointId?: string
  /**
   * 终端节点名称
   */
  EndpointName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInboundEndpoint请求参数结构体
 */
export interface CreateInboundEndpointRequest {
  /**
   * 名称
   */
  EndpointName: string
  /**
   * 地域
   */
  EndpointRegion: string
  /**
   * vpcid
   */
  EndpointVpc: string
  /**
   * 子网信息
   */
  SubnetIp: Array<SubnetIpInfo>
}

/**
 * 标签
 */
export interface TagInfo {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * Tld额度
 */
export interface TldQuota {
  /**
   * 总共额度
   */
  Total: number
  /**
   * 已使用额度
   */
  Used: number
  /**
   * 库存
   */
  Stock: number
  /**
   * 用户限额
   */
  Quota: number
}

/**
 * 私有域解析账号Vpc信息
 */
export interface AccountVpcInfo {
  /**
   * VpcId
   */
  UniqVpcId: string
  /**
   * Vpc所属地区
   */
  Region: string
  /**
   * Vpc所属账号
   */
  Uin: string
  /**
   * vpc资源名称
   */
  VpcName?: string
}

/**
 * 转发规则详情
 */
export interface ForwardRule {
  /**
   * 私有域名
   */
  Domain?: string
  /**
   * 转发规则名称
   */
  RuleName?: string
  /**
   * 规则id
   */
  RuleId?: string
  /**
   * 转发规则类型：云上到云下DOWN、云下到云上DOWN
   */
  RuleType?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 更新时间
   */
  UpdatedAt?: string
  /**
   * 终端节点名称
   */
  EndPointName?: string
  /**
   * 终端节点ID
   */
  EndPointId?: string
  /**
   * 转发地址
   */
  ForwardAddress?: Array<string>
  /**
   * 私有域绑定的vpc列表
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 绑定的私有域ID
   */
  ZoneId?: string
  /**
   * 标签
   */
  Tags?: Array<TagInfo>
}

/**
 * DescribeCreateZoneListResult请求参数结构体
 */
export interface DescribeCreateZoneListResultRequest {
  /**
   * 私有域域名数组，域名格式必须是标准的TLD
   */
  Domains: Array<string>
}

/**
 * CreatePrivateZone返回参数结构体
 */
export interface CreatePrivateZoneResponse {
  /**
   * 私有域ID, zone-12sa5ce78
   */
  ZoneId?: string
  /**
   * 私有域名
   */
  Domain?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrivateZoneRecord返回参数结构体
 */
export interface CreatePrivateZoneRecordResponse {
  /**
   * 记录Id
   */
  RecordId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeForwardRuleList返回参数结构体
 */
export interface DescribeForwardRuleListResponse {
  /**
   * 私有域数量
   */
  TotalCount?: number
  /**
   * 私有域列表
   */
  ForwardRuleSet?: Array<ForwardRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExtendEndpointList返回参数结构体
 */
export interface DescribeExtendEndpointListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLog请求参数结构体
 */
export interface DescribeAuditLogRequest {
  /**
   * 请求量统计起始时间
   */
  TimeRangeBegin: string
  /**
   * 筛选参数：ZoneId：私有域ID；Domain：私有域；OperatorUin：操作者账号ID
   */
  Filters?: Array<Filter>
  /**
   * 请求量统计结束时间
   */
  TimeRangeEnd?: string
  /**
   * 分页偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页限制数目， 最大100，默认20
   */
  Limit?: number
}

/**
 * DescribeQuotaUsage请求参数结构体
 */
export type DescribeQuotaUsageRequest = null

/**
 * DescribeInboundEndpointList请求参数结构体
 */
export interface DescribeInboundEndpointListRequest {
  /**
   * 分页偏移量，从0开始
   */
  Offset?: number
  /**
   * 分页限制数目， 最大100，默认20
   */
  Limit?: number
  /**
   * 过滤参数，支持EndPointName，EndpointName，EndPointId
   */
  Filters?: Array<Filter>
}

/**
 * DeletePrivateZone请求参数结构体
 */
export interface DeletePrivateZoneRequest {
  /**
   * 私有域ID
   */
  ZoneId?: string
  /**
   * 私有域ID数组，ZoneId 优先
   */
  ZoneIdSet?: Array<string>
}

/**
 * 操作日志
 */
export interface AuditLog {
  /**
   * 日志类型
   */
  Resource?: string
  /**
   * 日志表名
   */
  Metric?: string
  /**
   * 日志总数
   */
  TotalCount?: number
  /**
   * 日志列表
   */
  DataSet?: Array<AuditLogInfo>
}

/**
 * DeletePrivateZoneRecord请求参数结构体
 */
export interface DeletePrivateZoneRecordRequest {
  /**
   * 私有域ID
   */
  ZoneId?: string
  /**
   * 记录ID（调用DescribePrivateZoneRecordList可获取到RecordId）
   */
  RecordId?: string
  /**
   * 记录ID数组，RecordId 优先
   */
  RecordIdSet?: Array<string>
}

/**
 * 筛选参数
 */
export interface Filter {
  /**
   * 参数名
   */
  Name: string
  /**
   * 参数值数组
   */
  Values: Array<string>
}

/**
 * DeleteForwardRule返回参数结构体
 */
export interface DeleteForwardRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInboundEndpoint返回参数结构体
 */
export interface ModifyInboundEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 统计数据表
 */
export interface MetricData {
  /**
   * 资源描述
   */
  Resource?: string
  /**
   * 表名
   */
  Metric?: string
  /**
   * 表数据
   */
  DataSet?: Array<DatePoint>
  /**
   * 查询范围内的请求总量
   */
  MetricCount?: number
}

/**
 * QueryAsyncBindVpcStatus请求参数结构体
 */
export interface QueryAsyncBindVpcStatusRequest {
  /**
   * 唯一ID
   */
  UniqId: string
}

/**
 * DeletePrivateDNSAccount返回参数结构体
 */
export interface DeletePrivateDNSAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateZoneRecord返回参数结构体
 */
export interface DeletePrivateZoneRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
