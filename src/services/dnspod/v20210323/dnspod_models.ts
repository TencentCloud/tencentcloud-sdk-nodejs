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
 * CreateRecord请求参数结构体
 */
export interface CreateRecordRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录类型，通过 API 记录类型获得，大写英文，比如：A 。
   */
  RecordType: string
  /**
   * 记录线路，通过 API 记录线路获得，中文，比如：默认。
   */
  RecordLine: string
  /**
   * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
   */
  Value: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
  /**
   * 主机记录，如 www，如果不传，默认为 @。
   */
  SubDomain?: string
  /**
   * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
   */
  RecordLineId?: string
  /**
   * MX 优先级，当记录类型是 MX 时有效，范围1-20，MX 记录时必选。
   */
  MX?: number
  /**
   * TTL，范围1-604800，不同套餐域名最小值不同。
   */
  TTL?: number
  /**
   * 权重信息，0到100的整数。0 表示关闭，不传该参数，表示不设置权重信息。
   */
  Weight?: number
  /**
   * 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
   */
  Status?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 开启DNSSEC时，强制添加CNAME/URL记录
   */
  DnssecConflictMode?: string
  /**
   * 记录分组 Id。可以通过接口 DescribeRecordGroupList 接口 GroupId 字段获取。
   */
  GroupId?: number
}

/**
 * DescribeRecordFilterList返回参数结构体
 */
export interface DescribeRecordFilterListResponse {
  /**
   * 记录的数量统计信息
   */
  RecordCountInfo?: RecordCountInfo
  /**
   * 获取的记录列表
   */
  RecordList?: Array<RecordListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSubdomainValidateTXTValue请求参数结构体
 */
export interface CreateSubdomainValidateTXTValueRequest {
  /**
   * 要添加的子域名 Zone 域。
   */
  DomainZone: string
}

/**
 * CreateTXTRecord返回参数结构体
 */
export interface CreateTXTRecordResponse {
  /**
   * 记录ID
   */
  RecordId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查看任务详情返回结构
 */
export interface DescribeBatchTaskDetail {
  /**
   * 见BatchRecordInfo
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordList: Array<BatchRecordInfo>
  /**
   * 任务编号
   */
  Id: number
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain: string
  /**
   * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainGrade: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg: string
  /**
   * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation: string
  /**
   * 域名ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainId: number
}

/**
 * ModifyDomainToGroup请求参数结构体
 */
export interface ModifyDomainToGroupRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名分组ID
   */
  GroupId: number
  /**
   * 域名ID,域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain
   */
  DomainId?: number
}

/**
 * RollbackSnapshot请求参数结构体
 */
export interface RollbackSnapshotRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 快照记录 ID
   */
  SnapshotId: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
  /**
   * 指定需要回滚的记录
   */
  RecordList?: Array<SnapshotRecord>
}

/**
 * DeleteDomainAlias返回参数结构体
 */
export interface DeleteDomainAliasResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLineGroup返回参数结构体
 */
export interface CreateLineGroupResponse {
  /**
   * 自定义线路分组详情
   */
  Data?: LineGroupDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainShareUserList返回参数结构体
 */
export interface DescribeDomainShareUserListResponse {
  /**
   * 域名套餐信息
   */
  DomainShareList?: Array<DomainShareUserInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVASStatistic请求参数结构体
 */
export interface DescribeVASStatisticRequest {
  /**
   * 域名ID
   */
  DomainId: number
}

/**
 * DeleteDomainBatch返回参数结构体
 */
export interface DeleteDomainBatchResponse {
  /**
   * 任务 ID
   */
  JobId?: number
  /**
   * 任务详情数组
   */
  DetailList?: Array<DeleteDomainBatchDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 解析记录分组信息
 */
export interface RecordGroupInfo {
  /**
   * 分组 ID
   */
  GroupId: number
  /**
   * 分组名称
   */
  GroupName: string
  /**
   * 分组类型：system-系统；user-用户
   */
  GroupType: string
}

/**
 * ModifySubdomainStatus请求参数结构体
 */
export interface ModifySubdomainStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录类型。允许的值为A、CNAME、MX、TXT、NS、AAAA、SPF、SRV、CAA、URL、URL1。若要传多个，用英文逗号分隔，例如A,TXT,CNAME。
   */
  RecordType: string
  /**
   * 记录状态。允许的值为disable。
   */
  Status: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
  /**
   * 主机记录，如 www，如果不传，默认为 @。
   */
  SubDomain?: string
}

/**
 * DownloadSnapshot请求参数结构体
 */
export interface DownloadSnapshotRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 快照记录 ID
   */
  SnapshotId: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * CreateRecordBatch返回参数结构体
 */
export interface CreateRecordBatchResponse {
  /**
   * 批量添加域名信息
   */
  DetailList?: Array<CreateRecordBatchDetail>
  /**
   * 批量任务的ID
   */
  JobId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotList返回参数结构体
 */
export interface DescribeSnapshotListResponse {
  /**
   * 分页信息
   */
  Info?: SnapshotPageInfo
  /**
   * 快照列表
   */
  SnapshotList?: Array<SnapshotInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量添加域名任务中的记录信息
 */
export interface CreateDomainBatchRecord {
  /**
   * 子域名(主机记录)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubDomain: string
  /**
   * 记录类型, 详见 DescribeRecordType 接口
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordType: string
  /**
   * 解析记录的线路，详见 DescribeRecordLineList 接口
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordLine: string
  /**
   * 记录值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
  /**
   * 记录的 TTL 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TTL: number
  /**
   * 记录添加状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg: string
  /**
   * 此条记录在列表中的ID
   */
  Id: number
}

/**
 * 域名解析量统计查询信息
 */
export interface DomainAnalyticsInfo {
  /**
   * DATE:按天维度统计 HOUR:按小时维度统计
   */
  DnsFormat: string
  /**
   * 当前统计周期解析量总计
   */
  DnsTotal: number
  /**
   * 当前查询的域名
   */
  Domain: string
  /**
   * 当前统计周期开始时间
   */
  StartDate: string
  /**
   * 当前统计周期结束时间
   */
  EndDate: string
}

/**
 * ModifyRecordGroup请求参数结构体
 */
export interface ModifyRecordGroupRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 分组名称
   */
  GroupName: string
  /**
   * 要修改的分组 ID
   */
  GroupId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * DescribeVASStatistic返回参数结构体
 */
export interface DescribeVASStatisticResponse {
  /**
   * 增值服务用量列表
   */
  VASList?: Array<VASStatisticItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBatchTask请求参数结构体
 */
export interface DescribeBatchTaskRequest {
  /**
   * 任务ID。操作批量接口时会返回JobId
   */
  JobId: number
}

/**
 * 当前统计维度解析量小计
 */
export interface DomainAnalyticsDetail {
  /**
   * 当前统计维度解析量小计
   */
  Num: number
  /**
   * 按天统计时，为统计日期
   */
  DateKey: string
  /**
   * 按小时统计时，为统计的当前时间的小时数(0-23)，例：HourKey为23时，统计周期为22点-23点的解析量
注意：此字段可能返回 null，表示取不到有效值。
   */
  HourKey: number
}

/**
 * CreateSnapshot返回参数结构体
 */
export interface CreateSnapshotResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainCustomLineList请求参数结构体
 */
export interface DescribeDomainCustomLineListRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId
   */
  DomainId?: number
}

/**
 * DeleteRecordGroup请求参数结构体
 */
export interface DeleteRecordGroupRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 分组 ID
   */
  GroupId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * PayOrderWithBalance返回参数结构体
 */
export interface PayOrderWithBalanceResponse {
  /**
   * 此次操作支付成功的订单id数组
   */
  DealIdList?: Array<string>
  /**
   * 此次操作支付成功的大订单号数组
   */
  BigDealIdList?: Array<string>
  /**
   * 此次操作支付成功的订单号数组
   */
  DealNameList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordType返回参数结构体
 */
export interface DescribeRecordTypeResponse {
  /**
   * 记录类型列表
   */
  TypeList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomain返回参数结构体
 */
export interface DescribeDomainResponse {
  /**
   * 域名信息
   */
  DomainInfo?: DomainInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotList请求参数结构体
 */
export interface DescribeSnapshotListRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * DescribePackageDetail返回参数结构体
 */
export interface DescribePackageDetailResponse {
  /**
   * 套餐配置详情
   */
  Info?: Array<PackageDetailItem>
  /**
   * 套餐代码列表
   */
  LevelMap?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainFilterList返回参数结构体
 */
export interface DescribeDomainFilterListResponse {
  /**
   * 列表页统计信息
   */
  DomainCountInfo?: DomainCountInfo
  /**
   * 域名列表
   */
  DomainList?: Array<DomainListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordLineList返回参数结构体
 */
export interface DescribeRecordLineListResponse {
  /**
   * 线路列表。
   */
  LineList?: Array<LineInfo>
  /**
   * 线路分组列表。
   */
  LineGroupList?: Array<LineGroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快照列表分页信息
 */
export interface SnapshotPageInfo {
  /**
   * 快照总数
   */
  Total: number
}

/**
 * 域名详情
 */
export interface DomainInfo {
  /**
   * 域名ID
   */
  DomainId?: number
  /**
   * 域名状态
   */
  Status?: string
  /**
   * 域名套餐等级
   */
  Grade?: string
  /**
   * 域名分组ID
   */
  GroupId?: number
  /**
   * 是否星标域名
   */
  IsMark?: string
  /**
   * TTL(DNS记录缓存时间)
   */
  TTL?: number
  /**
   * cname加速启用状态
   */
  CnameSpeedup?: string
  /**
   * 域名备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 域名Punycode
   */
  Punycode?: string
  /**
   * 域名DNS状态
   */
  DnsStatus?: string
  /**
   * 域名的NS列表
   */
  DnspodNsList?: Array<string>
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名等级代号
   */
  GradeLevel?: number
  /**
   * 域名所属的用户ID
   */
  UserId?: number
  /**
   * 是否为付费域名
   */
  IsVip?: string
  /**
   * 域名所有者的账号
   */
  Owner?: string
  /**
   * 域名等级的描述
   */
  GradeTitle?: string
  /**
   * 域名创建时间
   */
  CreatedOn?: string
  /**
   * 最后操作时间
   */
  UpdatedOn?: string
  /**
   * 腾讯云账户Uin
   */
  Uin?: string
  /**
   * 域名实际使用的NS列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActualNsList?: Array<string>
  /**
   * 域名的记录数量
   */
  RecordCount?: number
  /**
   * 域名所有者的账户昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerNick?: string
  /**
   * 是否在付费套餐宽限期
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsGracePeriod?: string
  /**
   * 是否在付费套餐缓冲期
注意：此字段可能返回 null，表示取不到有效值。
   */
  VipBuffered?: string
  /**
   * VIP套餐有效期开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  VipStartAt?: string
  /**
   * VIP套餐有效期结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  VipEndAt?: string
  /**
   * VIP套餐自动续费标识。可能的值为：default-默认；no-不自动续费；yes-自动续费
注意：此字段可能返回 null，表示取不到有效值。
   */
  VipAutoRenew?: string
  /**
   * VIP套餐资源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VipResourceId?: string
  /**
   * 是否是子域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSubDomain?: boolean
  /**
   * 域名关联的标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<TagItem>
  /**
   * 是否启用搜索引擎推送
   */
  SearchEnginePush?: string
  /**
   * 是否开启辅助 DNS
   */
  SlaveDNS?: string
}

/**
 * CreateDomainBatch请求参数结构体
 */
export interface CreateDomainBatchRequest {
  /**
   * 域名数组
   */
  DomainList: Array<string>
  /**
   * 每个域名添加 @ 和 www 的 A 记录值，记录值为IP，如果不传此参数或者传空，将只添加域名，不添加记录。
   */
  RecordValue?: string
}

/**
 * ModifyRecordGroup返回参数结构体
 */
export interface ModifyRecordGroupResponse {
  /**
   * 修改的分组 ID
   */
  GroupId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainShareInfo请求参数结构体
 */
export interface DescribeDomainShareInfoRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * 域名列表元素
 */
export interface DomainListItem {
  /**
   * 系统分配给域名的唯一标识
   */
  DomainId?: number
  /**
   * 域名的原始格式
   */
  Name?: string
  /**
   * 域名的状态，正常：ENABLE，暂停：PAUSE，封禁：SPAM
   */
  Status?: string
  /**
   * 域名默认的解析记录默认TTL值
   */
  TTL?: number
  /**
   * 是否开启CNAME加速，开启：ENABLE，未开启：DISABLE
   */
  CNAMESpeedup?: string
  /**
   * DNS 设置状态，错误：DNSERROR，正常：空字符串
   */
  DNSStatus?: string
  /**
   * 域名的套餐等级代码
   */
  Grade?: string
  /**
   * 域名所属的分组Id
   */
  GroupId?: number
  /**
   * 是否开启搜索引擎推送优化，是：YES，否：NO
   */
  SearchEnginePush?: string
  /**
   * 域名备注说明
   */
  Remark?: string
  /**
   * 经过punycode编码后的域名格式
   */
  Punycode?: string
  /**
   * 系统为域名分配的有效DNS
   */
  EffectiveDNS?: Array<string>
  /**
   * 域名套餐等级对应的序号
   */
  GradeLevel?: number
  /**
   * 套餐名称
   */
  GradeTitle?: string
  /**
   * 是否是付费套餐
   */
  IsVip?: string
  /**
   * 付费套餐开通时间
   */
  VipStartAt?: string
  /**
   * 付费套餐到期时间
   */
  VipEndAt?: string
  /**
   * 域名是否开通VIP自动续费，是：YES，否：NO，默认：DEFAULT
   */
  VipAutoRenew?: string
  /**
   * 域名下的记录数量
   */
  RecordCount?: number
  /**
   * 域名添加时间
   */
  CreatedOn?: string
  /**
   * 域名更新时间
   */
  UpdatedOn?: string
  /**
   * 域名所属账号
   */
  Owner?: string
  /**
   * 域名关联的标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<TagItem>
}

/**
 * DeleteDomainBatch请求参数结构体
 */
export interface DeleteDomainBatchRequest {
  /**
   * 域名数组
   */
  DomainList: Array<string>
}

/**
 * 自定义线路分组详细信息
 */
export interface LineGroupDetail {
  /**
   * 自定义线路分组ID
   */
  Id: number
  /**
   * 自定线路分组名称
   */
  Name: string
  /**
   * 自定义线路分组包含的线路列表
   */
  Lines: Array<string>
}

/**
 * DeleteDomainCustomLine请求参数结构体
 */
export interface DeleteDomainCustomLineRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 自定义线路名称
   */
  Name: string
  /**
   * 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId
   */
  DomainId?: number
}

/**
 * DescribeSnapshotRollbackResult返回参数结构体
 */
export interface DescribeSnapshotRollbackResultResponse {
  /**
   * 快照所属域名
   */
  Domain?: string
  /**
   * 回滚剩余时间（分钟）
   */
  LeftMinutes?: number
  /**
   * 回滚进度百分比
   */
  Progress?: number
  /**
   * 快照 ID
   */
  SnapshotId?: string
  /**
   * 回滚状态
   */
  Status?: string
  /**
   * 快照回滚任务 ID
   */
  TaskId?: number
  /**
   * 成功数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Success?: number
  /**
   * 失败数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Failed?: number
  /**
   * 总数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 失败详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedRecordList?: Array<SnapshotRecord>
  /**
   * 快照的下载地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签过滤条件
 */
export interface TagItemFilter {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签键
   */
  TagValue?: Array<string>
}

/**
 * DescribeRecordLineCategoryList返回参数结构体
 */
export interface DescribeRecordLineCategoryListResponse {
  /**
   * 按分类返回的线路列表。
   */
  LineList?: Array<LineItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLineGroupCopy请求参数结构体
 */
export interface CreateLineGroupCopyRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 要复制的域名ID。要从多个域名复制线路分组时，用英文逗号分隔，例如1002,1005
   */
  DomainIds: string
  /**
   * 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId
   */
  DomainId?: number
}

/**
 * DescribeLineGroupList请求参数结构体
 */
export interface DescribeLineGroupListRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 限制数量，传0或不传会返回所有。
   */
  Length?: number
  /**
   * 按自定义线路分组名称排序的方向。升序传asc，降序传desc。
   */
  SortType?: string
  /**
   * 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId
   */
  DomainId?: number
}

/**
 * ModifyRecord返回参数结构体
 */
export interface ModifyRecordResponse {
  /**
   * 记录ID
   */
  RecordId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSnapshot请求参数结构体
 */
export interface DeleteSnapshotRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 快照记录 ID
   */
  SnapshotId: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * DeleteRecordBatch返回参数结构体
 */
export interface DeleteRecordBatchResponse {
  /**
   * 批量任务 ID
   */
  JobId?: number
  /**
   * 任务详情
   */
  DetailList?: Array<DeleteRecordBatchDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainAliasList返回参数结构体
 */
export interface DescribeDomainAliasListResponse {
  /**
   * 域名别名列表
   */
  DomainAliasList?: Array<DomainAliasInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLineGroup请求参数结构体
 */
export interface ModifyLineGroupRequest {
  /**
   * 自定义线路分组的名称。
   */
  Name: string
  /**
   * 自定义线路分组包含的线路列表，包含多个线路时用英文逗号分隔。例如，铁通,奇虎
   */
  Lines: string
  /**
   * 域名
   */
  Domain: string
  /**
   * 自定义线路分组ID
   */
  LineGroupId: number
  /**
   * 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId
   */
  DomainId?: number
}

/**
 * RollbackRecordSnapshot请求参数结构体
 */
export interface RollbackRecordSnapshotRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 快照 ID
   */
  SnapshotId: string
  /**
   * 解析记录信息
   */
  RecordList: Array<SnapshotRecord>
  /**
   * 之前的快照回滚任务 ID
   */
  TaskId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * ModifyRecordToGroup请求参数结构体
 */
export interface ModifyRecordToGroupRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 分组 ID
   */
  GroupId: number
  /**
   * 记录 ID，多个 ID 用竖线“|”分割
   */
  RecordId: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * DescribeSnapshotConfig返回参数结构体
 */
export interface DescribeSnapshotConfigResponse {
  /**
   * 解析快照配置
   */
  SnapshotConfig?: SnapshotConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询记录列表的数量统计信息
 */
export interface RecordCountInfo {
  /**
   * 子域名数量
   */
  SubdomainCount: number
  /**
   * 列表返回的记录数
   */
  ListCount: number
  /**
   * 总的记录数
   */
  TotalCount: number
}

/**
 * DeleteShareDomain返回参数结构体
 */
export interface DeleteShareDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 套餐配置明细
 */
export interface PackageDetailItem {
  /**
   * 套餐原价
   */
  RealPrice: number
  /**
   * 可更换域名次数
   */
  ChangedTimes: number
  /**
   * 允许设置的最小 TTL 值
   */
  MinTtl: number
  /**
   * 负载均衡数量
   */
  RecordRoll: number
  /**
   * 子域名级数
   */
  SubDomainLevel: number
  /**
   * 泛解析级数
   */
  MaxWildcard: number
  /**
   * DNS 服务集群个数
   */
  DnsServerRegion: string
  /**
   * 套餐名称
   */
  DomainGradeCn: string
  /**
   * 套餐代号
   */
  GradeLevel: number
  /**
   * 套餐对应的 NS
   */
  Ns: Array<string>
  /**
   * 套餐代码
   */
  DomainGrade: string
}

/**
 * ModifyDomainRemark返回参数结构体
 */
export interface ModifyDomainRemarkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量任务中的记录信息
 */
export interface BatchRecordInfo {
  /**
   * 记录 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordId: number
  /**
   * 子域名(主机记录)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubDomain: string
  /**
   * 记录类型, 详见 DescribeRecordType 接口
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordType: string
  /**
   * 解析记录的线路，详见 DescribeRecordLineList 接口
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordLine: string
  /**
   * 记录值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
  /**
   * 记录的 TTL 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TTL: number
  /**
   * 记录添加状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg: string
  /**
   * 此条记录在列表中的ID
   */
  Id: number
  /**
   * 记录生效状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled: number
  /**
   * 记录的MX权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  MX: number
  /**
   * 记录权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * 线路分组信息
 */
export interface LineGroupInfo {
  /**
   * 线路分组ID
   */
  LineId?: string
  /**
   * 线路分组名称
   */
  Name?: string
  /**
   * 分组类型
   */
  Type?: string
  /**
   * 线路分组包含的线路列表
   */
  LineList?: Array<string>
}

/**
 * DeleteDomain请求参数结构体
 */
export interface DeleteDomainRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * ModifyDomainOwner请求参数结构体
 */
export interface ModifyDomainOwnerRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名需要转入的账号，支持Uin或者邮箱格式
   */
  Account: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * DescribeSubdomainAnalytics返回参数结构体
 */
export interface DescribeSubdomainAnalyticsResponse {
  /**
   * 当前统计维度解析量小计
   */
  Data?: Array<DomainAnalyticsDetail>
  /**
   * 子域名解析量统计查询信息
   */
  Info?: SubdomainAnalyticsInfo
  /**
   * 子域名别名解析量统计信息
   */
  AliasData?: Array<SubdomainAliasAnalyticsItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量删除记录详情
 */
export interface DeleteRecordBatchDetail {
  /**
   * 域名 ID
   */
  DomainId?: number
  /**
   * 域名
   */
  Domain?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
  /**
   * 删除状态
   */
  Status?: string
  /**
   * 操作
   */
  Operation?: string
  /**
   * 解析记录列表，json 序列化之后的字符串形式
   */
  RecordList?: string
}

/**
 * 域名共享信息
 */
export interface DomainShareInfo {
  /**
   * 域名共享对象的账号
   */
  ShareTo: string
  /**
   * 共享模式，“rw”：可读写。 “r”:：只读
   */
  Mode: string
  /**
   * 共享状态“enabled”：共享成功。“pending”：共享到的账号不存在, 等待注册
   */
  Status: string
}

/**
 * DescribeSnapshotConfig请求参数结构体
 */
export interface DescribeSnapshotConfigRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * 解析线路信息
 */
export interface LineInfo {
  /**
   * 线路名称
   */
  Name: string
  /**
   * 线路ID
   */
  LineId: string
}

/**
 * DeleteLineGroup返回参数结构体
 */
export interface DeleteLineGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordLineList请求参数结构体
 */
export interface DescribeRecordLineListRequest {
  /**
   * 域名。
   */
  Domain: string
  /**
   * 域名套餐等级。  旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 、DP_EXTRA 分别对应免费套餐、个人豪华、企业 I、企业 II、企业 III、企业基础版。 新套餐：DP_FREE、DP_PLUS、DP_EXPERT、DP_ULTRA 分别对应新免费、专业版、企业版、尊享版。
   */
  DomainGrade: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * DescribeRecordList返回参数结构体
 */
export interface DescribeRecordListResponse {
  /**
   * 记录的数量统计信息
   */
  RecordCountInfo?: RecordCountInfo
  /**
   * 获取的记录列表
   */
  RecordList?: Array<RecordListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRecordBatch请求参数结构体
 */
export interface CreateRecordBatchRequest {
  /**
   * 域名ID，多个 domain_id 用英文逗号进行分割。
   */
  DomainIdList: Array<string>
  /**
   * 记录数组
   */
  RecordList: Array<AddRecordBatch>
}

/**
 * ModifyDomainToGroup返回参数结构体
 */
export interface ModifyDomainToGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDomainAlias请求参数结构体
 */
export interface DeleteDomainAliasRequest {
  /**
   * 域名别名ID。可以通过接口DescribeDomainAliasList查到所有的域名别名列表以及对应的ID
   */
  DomainAliasId: number
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * 域名别名信息
 */
export interface DomainAliasInfo {
  /**
   * 域名别名ID
   */
  Id: number
  /**
   * 域名别名
   */
  DomainAlias: string
  /**
   * 别名状态：1-DNS不正确；2-正常；3-封禁。
   */
  Status?: number
}

/**
 * CreateDeal请求参数结构体
 */
export interface CreateDealRequest {
  /**
   * 询价类型，1 新购，2 续费，3 套餐升级（增值服务暂时只支持新购）
   */
  DealType: number
  /**
   * 商品类型，1 域名套餐 2 增值服务
   */
  GoodsType: number
  /**
   * 套餐类型：
DP_PLUS：专业版
DP_EXPERT：企业版
DP_ULTRA：尊享版

增值服务类型
LB：负载均衡
URL：URL转发
DMONITOR_TASKS：D监控任务数
DMONITOR_IP：D监控备用 IP 数
CUSTOMLINE：自定义线路数
   */
  GoodsChildType: string
  /**
   * 增值服务购买数量，如果是域名套餐固定为1，如果是增值服务则按以下规则：
负载均衡、D监控任务数、D监控备用 IP 数、自定义线路数、URL 转发（必须是5的正整数倍，如 5、10、15 等）
   */
  GoodsNum: number
  /**
   * 是否开启自动续费，1 开启，2 不开启（增值服务暂不支持自动续费），默认值为 2 不开启
   */
  AutoRenew: number
  /**
   * 需要绑定套餐的域名，如 dnspod.cn，如果是续费或升级，domain 参数必须要传，新购可不传。
   */
  Domain?: string
  /**
   * 套餐时长：
1. 套餐以月为单位（按月只能是 3、6 还有 12 的倍数），套餐例如购买一年则传12，最大120 。（续费最低一年）
2. 升级套餐时不需要传。
3. 增值服务的时长单位为年，买一年传1（增值服务新购按年只能是 1，增值服务续费最大为 10）
   */
  TimeSpan?: number
  /**
   * 套餐类型，需要升级到的套餐类型，只有升级时需要。
   */
  NewPackageType?: string
}

/**
 * ModifyDomainLock请求参数结构体
 */
export interface ModifyDomainLockRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名要锁定的天数，最多可锁定的天数可以通过获取域名权限接口获取。
   */
  LockDays: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * DescribeDomainWhois请求参数结构体
 */
export interface DescribeDomainWhoisRequest {
  /**
   * 域名
   */
  Domain: string
}

/**
 * ModifyTXTRecord请求参数结构体
 */
export interface ModifyTXTRecordRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录线路，通过 API 记录线路获得，中文，比如：默认。
   */
  RecordLine: string
  /**
   * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
   */
  Value: string
  /**
   * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
   */
  RecordId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
  /**
   * 主机记录，如 www，如果不传，默认为 @。
   */
  SubDomain?: string
  /**
   * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
   */
  RecordLineId?: string
  /**
   * TTL，范围1-604800，不同等级域名最小值不同。
   */
  TTL?: number
  /**
   * 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
   */
  Status?: string
  /**
   * 记录的备注信息。传空删除备注。
   */
  Remark?: string
}

/**
 * ModifyDomainStatus返回参数结构体
 */
export interface ModifyDomainStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量添加的记录
 */
export interface AddRecordBatch {
  /**
   * 记录类型, 详见 DescribeRecordType 接口。
   */
  RecordType: string
  /**
   * 记录值。
   */
  Value: string
  /**
   * 子域名(主机记录)，默认为@。
   */
  SubDomain?: string
  /**
   * 解析记录的线路，详见 DescribeRecordLineList 接口，RecordLine和RecordLineId都未填时，默认为「默认」线路。
   */
  RecordLine?: string
  /**
   * 解析记录的线路 ID，RecordLine和RecordLineId都有时，系统优先取 RecordLineId。
   */
  RecordLineId?: string
  /**
   * 记录权重值(暂未支持)。
   */
  Weight?: number
  /**
   * 记录的 MX 记录值，非 MX 记录类型，默认为 0，MX记录则必选。
   */
  MX?: number
  /**
   * 记录的 TTL 值，默认600。
   */
  TTL?: number
  /**
   * 记录状态(暂未支持)。0表示禁用，1表示启用。默认启用。
   */
  Enabled?: number
  /**
   * 记录备注(暂未支持)。
   */
  Remark?: string
}

/**
 * DescribeRecord请求参数结构体
 */
export interface DescribeRecordRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
   */
  RecordId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * CreateDomainGroup返回参数结构体
 */
export interface CreateDomainGroupResponse {
  /**
   * 域名分组ID
   */
  GroupId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubdomainAnalytics请求参数结构体
 */
export interface DescribeSubdomainAnalyticsRequest {
  /**
   * 要查询解析量的域名
   */
  Domain: string
  /**
   * 查询的开始时间，格式：YYYY-MM-DD
   */
  StartDate: string
  /**
   * 查询的结束时间，格式：YYYY-MM-DD
   */
  EndDate: string
  /**
   * 要查询解析量的子域名
   */
  Subdomain: string
  /**
   * DATE:按天维度统计 HOUR:按小时维度统计
   */
  DnsFormat?: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * DeleteRecord请求参数结构体
 */
export interface DeleteRecordRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
   */
  RecordId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * DescribeDomain请求参数结构体
 */
export interface DescribeDomainRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * 域名分组列表
 */
export interface GroupInfo {
  /**
   * 分组ID
   */
  GroupId: number
  /**
   * 分组名称
   */
  GroupName: string
  /**
   * 分组类型
   */
  GroupType: string
  /**
   * 该分组中域名个数
   */
  Size: number
}

/**
 * DeleteLineGroup请求参数结构体
 */
export interface DeleteLineGroupRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 自定义线路分组ID
   */
  LineGroupId: number
  /**
   * 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId
   */
  DomainId?: number
}

/**
 * ModifyRecordStatus请求参数结构体
 */
export interface ModifyRecordStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
   */
  RecordId: number
  /**
   * 记录的状态。取值范围为 ENABLE 和 DISABLE。如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
   */
  Status: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * CreateRecord返回参数结构体
 */
export interface CreateRecordResponse {
  /**
   * 记录ID
   */
  RecordId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRecordGroup返回参数结构体
 */
export interface DeleteRecordGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 记录信息
 */
export interface RecordInfo {
  /**
   * 记录 ID 。
   */
  Id: number
  /**
   * 子域名(主机记录)。
   */
  SubDomain: string
  /**
   * 记录类型, 详见 DescribeRecordType 接口。
   */
  RecordType: string
  /**
   * 解析记录的线路，详见 DescribeRecordLineList 接口。
   */
  RecordLine: string
  /**
   * 解析记录的线路 ID ，详见 DescribeRecordLineList 接口。
   */
  RecordLineId: string
  /**
   * 记录值。
   */
  Value: string
  /**
   * 记录权重值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight: number
  /**
   * 记录的 MX 记录值，非 MX 记录类型，默认为 0。
   */
  MX: number
  /**
   * 记录的 TTL 值。
   */
  TTL: number
  /**
   * 记录状态。0表示禁用，1表示启用。
   */
  Enabled: number
  /**
   * 该记录的 D 监控状态。
"Ok" : 服务器正常。
"Warn" : 该记录有报警, 服务器返回 4XX。
"Down" : 服务器宕机。
"" : 该记录未开启 D 监控。
   */
  MonitorStatus: string
  /**
   * 记录的备注。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
  /**
   * 记录最后更新时间。
   */
  UpdatedOn: string
  /**
   * 域名 ID 。
   */
  DomainId: number
}

/**
 * DescribeSnapshotRollbackTask请求参数结构体
 */
export interface DescribeSnapshotRollbackTaskRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * CheckRecordSnapshotRollback返回参数结构体
 */
export interface CheckRecordSnapshotRollbackResponse {
  /**
   * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户信息
 */
export interface UserInfo {
  /**
   * 用户昵称
   */
  Nick: string
  /**
   * 用户ID
   */
  Id: number
  /**
   * 用户账号, 邮箱格式
   */
  Email: string
  /**
   * 账号状态：”enabled”: 正常；”disabled”: 被封禁
   */
  Status: string
  /**
   * 电话号码
   */
  Telephone: string
  /**
   * 邮箱是否通过验证：”yes”: 通过；”no”: 未通过
   */
  EmailVerified: string
  /**
   * 手机是否通过验证：”yes”: 通过；”no”: 未通过
   */
  TelephoneVerified: string
  /**
   * 账号等级, 按照用户账号下域名等级排序, 选取一个最高等级为账号等级, 具体对应情况参见域名等级。
   */
  UserGrade: string
  /**
   * 用户名称, 企业用户对应为公司名称
   */
  RealName: string
  /**
   * 是否绑定微信：”yes”: 通过；”no”: 未通过
   */
  WechatBinded: string
  /**
   * 用户UIN
   */
  Uin: number
  /**
   * 所属 DNS 服务器
   */
  FreeNs: Array<string>
}

/**
 * DescribeDomainPreview请求参数结构体
 */
export interface DescribeDomainPreviewRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * 批量添加记录返回结构
 */
export interface CreateRecordBatchDetail {
  /**
   * 见RecordInfoBatch
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordList: Array<CreateRecordBatchRecord>
  /**
   * 任务编号
   */
  Id: number
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain: string
  /**
   * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainGrade: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg: string
  /**
   * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation: string
  /**
   * 域名ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainId: number
}

/**
 * Whois联系信息
 */
export interface WhoisContact {
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Admin: WhoisContactAddress
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Billing: WhoisContactAddress
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Registrant: WhoisContactAddress
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tech: WhoisContactAddress
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
 * DescribeRecordLineCategoryList请求参数结构体
 */
export interface DescribeRecordLineCategoryListRequest {
  /**
   * 要查询线路列表的域名。
   */
  Domain: string
  /**
   * 要查询线路列表的域名 ID。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口 DescribeDomainList 查到所有的 Domain 以及 DomainId。
   */
  DomainId?: number
}

/**
 * ModifyRecordToGroup返回参数结构体
 */
export interface ModifyRecordToGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLineGroupList返回参数结构体
 */
export interface DescribeLineGroupListResponse {
  /**
   * 自定义线路分组列表
   */
  LineGroups?: Array<LineGroupItem>
  /**
   * 自定义线路分组数量信息
   */
  Info?: LineGroupSum
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快照解析记录
 */
export interface SnapshotRecord {
  /**
   * 子域名
   */
  SubDomain: string
  /**
   * 记录类型
   */
  RecordType: string
  /**
   * 解析线路
   */
  RecordLine: string
  /**
   * 解析值
   */
  Value: string
  /**
   * TTL(秒)
   */
  TTL: string
  /**
   * 解析记录 ID
   */
  RecordId?: string
  /**
   * MX优先级
注意：此字段可能返回 null，表示取不到有效值。
   */
  MX?: string
  /**
   * 权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
}

/**
 * ModifyDomainUnlock返回参数结构体
 */
export interface ModifyDomainUnlockResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainLogList请求参数结构体
 */
export interface DescribeDomainLogListRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
  /**
   * 记录开始的偏移，第一条记录为 0，依次类推，默认为0
   */
  Offset?: number
  /**
   * 共要获取的日志条数，比如获取20条，则为20，默认为500条，单次最多获取500条。
   */
  Limit?: number
}

/**
 * DescribeDomainList返回参数结构体
 */
export interface DescribeDomainListResponse {
  /**
   * 列表页统计信息
   */
  DomainCountInfo?: DomainCountInfo
  /**
   * 域名列表
   */
  DomainList?: Array<DomainListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserDetail返回参数结构体
 */
export interface DescribeUserDetailResponse {
  /**
   * 账户信息
   */
  UserInfo?: UserInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRecordBatch请求参数结构体
 */
export interface ModifyRecordBatchRequest {
  /**
   * 记录ID数组。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
   */
  RecordIdList: Array<number | bigint>
  /**
   * 要修改的字段，可选值为 [“sub_domain”、”record_type”、”area”、”value”、”mx”、”ttl”、”status”] 中的某一个。
   */
  Change: string
  /**
   * 修改为，具体依赖 change 字段，必填参数。
   */
  ChangeTo: string
  /**
   * 要修改到的记录值，仅当 change 字段为 “record_type” 时为必填参数。
   */
  Value?: string
  /**
   * MX记录优先级，仅当修改为 MX 记录时为必填参数。
   */
  MX?: string
}

/**
 * Whois联系信息地址
 */
export interface WhoisContactAddress {
  /**
   * 城市
注意：此字段可能返回 null，表示取不到有效值。
   */
  City?: string
  /**
   * 国家
注意：此字段可能返回 null，表示取不到有效值。
   */
  Country?: string
  /**
   * 电子邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 传真
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fax?: string
  /**
   * 传真分机号
注意：此字段可能返回 null，表示取不到有效值。
   */
  FaxExt?: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Handle?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 组织机构
注意：此字段可能返回 null，表示取不到有效值。
   */
  Organization?: string
  /**
   * 电话
注意：此字段可能返回 null，表示取不到有效值。
   */
  Phone?: string
  /**
   * 邮编
注意：此字段可能返回 null，表示取不到有效值。
   */
  PostalCode?: string
  /**
   * 省份/州
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 街道地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Street?: string
}

/**
 * 域名解析快照配置
 */
export interface SnapshotConfig {
  /**
   * 配置类型：空字符串-不备份，half_hour-每半小时，hourly-每小时，daily-每天，monthly-每月
   */
  Config: string
  /**
   * 添加时间
   */
  CreatedOn: string
  /**
   * 所属域名 ID
   */
  DomainId: string
  /**
   * 配置 ID
   */
  Id: string
  /**
   * 快照数量
   */
  SnapshotCount: number
  /**
   * 状态：enable-启用，disable-禁用
   */
  Status: string
  /**
   * 更新时间
   */
  UpdatedOn: string
}

/**
 * ModifyRecordFields返回参数结构体
 */
export interface ModifyRecordFieldsResponse {
  /**
   * 记录ID
   */
  RecordId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRecord返回参数结构体
 */
export interface DeleteRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量添加记录任务中的记录信息
 */
export interface CreateRecordBatchRecord {
  /**
   * 子域名(主机记录)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubDomain: string
  /**
   * 记录类型, 详见 DescribeRecordType 接口
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordType: string
  /**
   * 解析记录的线路，详见 DescribeRecordLineList 接口
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordLine: string
  /**
   * 记录值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
  /**
   * 记录的 TTL 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TTL: number
  /**
   * 记录添加状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg: string
  /**
   * 此条记录在列表中的ID
   */
  Id: number
  /**
   * 记录的MX权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  MX: number
  /**
   * 记录的权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
}

/**
 * CreateDomain返回参数结构体
 */
export interface CreateDomainResponse {
  /**
   * 域名信息
   */
  DomainInfo?: DomainCreateInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 列表页分页统计信息
 */
export interface DomainCountInfo {
  /**
   * 符合条件的域名数量
   */
  DomainTotal: number
  /**
   * 用户可以查看的所有域名数量
   */
  AllTotal: number
  /**
   * 用户账号添加的域名数量
   */
  MineTotal: number
  /**
   * 共享给用户的域名数量
   */
  ShareTotal: number
  /**
   * 付费域名数量
   */
  VipTotal: number
  /**
   * 暂停的域名数量
   */
  PauseTotal: number
  /**
   * dns设置错误的域名数量
   */
  ErrorTotal: number
  /**
   * 锁定的域名数量
   */
  LockTotal: number
  /**
   * 封禁的域名数量
   */
  SpamTotal: number
  /**
   * 30天内即将到期的域名数量
   */
  VipExpire: number
  /**
   * 分享给其它人的域名数量
   */
  ShareOutTotal: number
  /**
   * 指定分组内的域名数量
   */
  GroupTotal: number
}

/**
 * CreateSubdomainValidateTXTValue返回参数结构体
 */
export interface CreateSubdomainValidateTXTValueResponse {
  /**
   * 需要添加 TXT 记录的域名。
   */
  Domain?: string
  /**
   * 需要添加 TXT 记录的主机记录。
   */
  Subdomain?: string
  /**
   * 需要添加记录类型。
   */
  RecordType?: string
  /**
   * 需要添加 TXT 记录的记录值。
   */
  Value?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPackageAutoRenew返回参数结构体
 */
export interface ModifyPackageAutoRenewResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRecordBatch返回参数结构体
 */
export interface ModifyRecordBatchResponse {
  /**
   * 批量任务ID
   */
  JobId?: number
  /**
   * 见modifyRecordBatchDetail
   */
  DetailList?: Array<ModifyRecordBatchDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckSnapshotRollback请求参数结构体
 */
export interface CheckSnapshotRollbackRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 快照记录 ID
   */
  SnapshotId: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * CheckSnapshotRollback返回参数结构体
 */
export interface CheckSnapshotRollbackResponse {
  /**
   * 快照记录 ID
   */
  SnapshotId?: string
  /**
   * 回滚时长（分钟）
   */
  CostMinutes?: number
  /**
   * 快照所属域名
   */
  Domain?: string
  /**
   * 解析记录总数
   */
  Total?: number
  /**
   * 值为 1，表示超时
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timeout?: number
  /**
   * 检查失败数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Failed?: number
  /**
   * 失败记录信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedRecordList?: Array<SnapshotRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordType请求参数结构体
 */
export interface DescribeRecordTypeRequest {
  /**
   * 域名等级。
+ 旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 分别对应免费套餐、个人豪华、企业1、企业2、企业3。
+ 新套餐：DP_FREE、DP_PLUS、DP_EXTRA、DP_EXPERT、DP_ULTRA 分别对应新免费、个人专业版、企业创业版、企业标准版、企业旗舰版。
   */
  DomainGrade: string
}

/**
 * DeleteDomainCustomLine返回参数结构体
 */
export interface DeleteDomainCustomLineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotRollbackTask返回参数结构体
 */
export interface DescribeSnapshotRollbackTaskResponse {
  /**
   * 快照所属域名
   */
  Domain?: string
  /**
   * 快照 ID
   */
  SnapshotId?: string
  /**
   * 回滚状态
   */
  Status?: string
  /**
   * 快照回滚任务 ID
   */
  TaskId?: number
  /**
   * 总数量
   */
  RecordCount?: number
  /**
   * 开始回滚时间
   */
  CreatedOn?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 记录列表元素
 */
export interface RecordListItem {
  /**
   * 记录Id
   */
  RecordId: number
  /**
   * 记录值
   */
  Value: string
  /**
   * 记录状态，启用：ENABLE，暂停：DISABLE
   */
  Status: string
  /**
   * 更新时间
   */
  UpdatedOn: string
  /**
   * 主机名
   */
  Name: string
  /**
   * 记录线路
   */
  Line: string
  /**
   * 线路Id
   */
  LineId: string
  /**
   * 记录类型
   */
  Type: string
  /**
   * 记录权重，用于负载均衡记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight: number
  /**
   * 记录监控状态，正常：OK，告警：WARN，宕机：DOWN，未设置监控或监控暂停则为空
   */
  MonitorStatus: string
  /**
   * 记录备注说明
   */
  Remark: string
  /**
   * 记录缓存时间
   */
  TTL: number
  /**
   * MX值，只有MX记录有
注意：此字段可能返回 null，表示取不到有效值。
   */
  MX: number
  /**
   * 是否是默认的ns记录
   */
  DefaultNS?: boolean
}

/**
 * DescribeDomainPreview返回参数结构体
 */
export interface DescribeDomainPreviewResponse {
  /**
   * 域名概览信息
   */
  Domain?: PreviewDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDomainBatch返回参数结构体
 */
export interface CreateDomainBatchResponse {
  /**
   * 批量添加域名信息
   */
  DetailList?: Array<CreateDomainBatchDetail>
  /**
   * 批量任务的ID
   */
  JobId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainShareInfo返回参数结构体
 */
export interface DescribeDomainShareInfoResponse {
  /**
   * 域名共享信息
   */
  ShareList?: Array<DomainShareInfo>
  /**
   * 域名拥有者账号
   */
  Owner?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名锁定信息
 */
export interface LockInfo {
  /**
   * 域名 ID
   */
  DomainId: number
  /**
   * 域名解锁码
   */
  LockCode: string
  /**
   * 域名自动解锁日期
   */
  LockEnd: string
}

/**
 * ModifyDomainOwner返回参数结构体
 */
export interface ModifyDomainOwnerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子域名解析量统计查询信息
 */
export interface SubdomainAnalyticsInfo {
  /**
   * DATE:按天维度统计 HOUR:按小时维度统计
   */
  DnsFormat: string
  /**
   * 当前统计周期解析量总计
   */
  DnsTotal: number
  /**
   * 当前查询的域名
   */
  Domain: string
  /**
   * 当前统计周期开始时间
   */
  StartDate: string
  /**
   * 当前统计周期结束时间
   */
  EndDate: string
  /**
   * 当前统计的子域名
   */
  Subdomain: string
}

/**
 * 自定义线路详情
 */
export interface CustomLineInfo {
  /**
   * 域名ID
   */
  DomainId: number
  /**
   * 自定义线路名称
   */
  Name: string
  /**
   * 自定义线路IP段
   */
  Area: string
  /**
   * 已使用IP段个数
   */
  UseCount: number
  /**
   * 允许使用IP段最大个数
   */
  MaxCount: number
}

/**
 * 批量添加记录返回结构
 */
export interface ModifyRecordBatchDetail {
  /**
   * 见RecordInfoBatchModify
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordList: Array<BatchRecordInfo>
  /**
   * 任务编号
   */
  Id: number
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain: string
  /**
   * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainGrade: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg: string
  /**
   * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation: string
  /**
   * 域名ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainId: number
}

/**
 * DescribeDomainShareUserList请求参数结构体
 */
export interface DescribeDomainShareUserListRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * 批量删除域名详情
 */
export interface DeleteDomainBatchDetail {
  /**
   * 域名 ID
   */
  DomainId?: number
  /**
   * 域名
   */
  Domain?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
  /**
   * 删除状态
   */
  Status?: string
  /**
   * 操作
   */
  Operation?: string
}

/**
 * CreateDomain请求参数结构体
 */
export interface CreateDomainRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名分组ID。可以通过接口DescribeDomainGroupList查看当前域名分组信息
   */
  GroupId?: number
  /**
   * 是否星标域名，”yes”、”no” 分别代表是和否。
   */
  IsMark?: string
  /**
   * 添加子域名时，是否迁移相关父域名的解析记录。不传默认为 true
   */
  TransferSubDomain?: boolean
  /**
   * 域名绑定的标签
   */
  Tags?: Array<TagItem>
}

/**
 * ModifyDomainCustomLine请求参数结构体
 */
export interface ModifyDomainCustomLineRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 修改后的自定义线路名称，如果不修改名称，需要和PreName保持一致
   */
  Name: string
  /**
   * 自定义线路IP段，用-分割
   */
  Area: string
  /**
   * 修改前的自定义线路名称
   */
  PreName: string
  /**
   * 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId
   */
  DomainId?: number
}

/**
 * 域名别名解析量统计信息
 */
export interface DomainAliasAnalyticsItem {
  /**
   * 域名解析量统计查询信息
   */
  Info: DomainAnalyticsInfo
  /**
   * 当前统计维度解析量小计
   */
  Data: Array<DomainAnalyticsDetail>
}

/**
 * DescribeDomainGroupList返回参数结构体
 */
export interface DescribeDomainGroupListResponse {
  /**
   * 分组列表
   */
  GroupList?: Array<GroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPackageAutoRenew请求参数结构体
 */
export interface ModifyPackageAutoRenewRequest {
  /**
   * 资源ID。可以在控制台查看所有的资源
   */
  ResourceId: string
  /**
   * enable 开启自动续费；disable 关闭自动续费
   */
  Status: string
}

/**
 * ModifyDomainRemark请求参数结构体
 */
export interface ModifyDomainRemarkRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
  /**
   * 域名备注，删除备注请提交空内容。
   */
  Remark?: string
}

/**
 * ModifyDomainCustomLine返回参数结构体
 */
export interface ModifyDomainCustomLineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 键值对
 */
export interface KeyValue {
  /**
   * 键
   */
  Key: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * CreateLineGroupCopy返回参数结构体
 */
export interface CreateLineGroupCopyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDomainAlias返回参数结构体
 */
export interface CreateDomainAliasResponse {
  /**
   * 域名别名ID
   */
  DomainAliasId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordList请求参数结构体
 */
export interface DescribeRecordListRequest {
  /**
   * 要获取的解析记录所属的域名
   */
  Domain: string
  /**
   * 要获取的解析记录所属的域名Id，如果传了DomainId，系统将会忽略Domain参数。 可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
  /**
   * 解析记录的主机头，如果传了此参数，则只会返回此主机头对应的解析记录
   */
  Subdomain?: string
  /**
   * 获取某种类型的解析记录，如 A，CNAME，NS，AAAA，显性URL，隐性URL，CAA，SPF等
   */
  RecordType?: string
  /**
   * 获取某条线路名称的解析记录。可以通过接口DescribeRecordLineList查看当前域名允许的线路信息
   */
  RecordLine?: string
  /**
   * 获取某个线路Id对应的解析记录，如果传RecordLineId，系统会忽略RecordLine参数。可以通过接口DescribeRecordLineList查看当前域名允许的线路信息
   */
  RecordLineId?: string
  /**
   * 获取某个分组下的解析记录时，传这个分组Id。
   */
  GroupId?: number
  /**
   * 通过关键字搜索解析记录，当前支持搜索主机头和记录值
   */
  Keyword?: string
  /**
   * 排序字段，支持 name,line,type,value,weight,mx,ttl,updated_on 几个字段。
   */
  SortField?: string
  /**
   * 排序方式，正序：ASC，逆序：DESC。默认值为ASC。
   */
  SortType?: string
  /**
   * 偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 限制数量，当前Limit最大支持3000。默认值为100。
   */
  Limit?: number
}

/**
 * PayOrderWithBalance请求参数结构体
 */
export interface PayOrderWithBalanceRequest {
  /**
   * 需要支付的大订单号数组
   */
  BigDealIdList: Array<string>
  /**
   * 代金券ID数组。可以从控制台查到拥有的代金券
   */
  VoucherIdList?: Array<string>
}

/**
 * CreateTXTRecord请求参数结构体
 */
export interface CreateTXTRecordRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录线路，通过 API 记录线路获得，中文，比如：默认。
   */
  RecordLine: string
  /**
   * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
   */
  Value: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
  /**
   * 主机记录，如 www，如果不传，默认为 @。
   */
  SubDomain?: string
  /**
   * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
   */
  RecordLineId?: string
  /**
   * TTL，范围1-604800，不同套餐域名最小值不同。
   */
  TTL?: number
  /**
   * 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
   */
  Status?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 记录分组 Id。可以通过接口 DescribeRecordGroupList 接口 GroupId 字段获取。
   */
  GroupId?: number
}

/**
 * DescribePackageDetail请求参数结构体
 */
export type DescribePackageDetailRequest = null

/**
 * DescribeRecordFilterList请求参数结构体
 */
export interface DescribeRecordFilterListRequest {
  /**
   * 要获取的解析记录所属的域名。
   */
  Domain: string
  /**
   * 要获取的解析记录所属的域名 Id，如果传了 DomainId，系统将会忽略 Domain 参数。 可以通过接口 DescribeDomainList 查到所有的 Domain 以及 DomainId。
   */
  DomainId?: number
  /**
   * 根据解析记录的主机头获取解析记录。默认模糊匹配。可以通过设置 IsExactSubdomain 参数为 true 进行精确查找。
   */
  SubDomain?: string
  /**
   * 获取某些类型的解析记录，如 A，CNAME，NS，AAAA，显性URL，隐性URL，CAA，SPF等。
   */
  RecordType?: Array<string>
  /**
   * 获取某些线路ID的解析记录。可以通过接口 DescribeRecordLineList 查看当前域名允许的线路信息。
   */
  RecordLine?: Array<string>
  /**
   * 获取某些分组下的解析记录时，传这个分组 Id。可以通过接口 DescribeRecordGroupList 接口 GroupId 字段获取。
   */
  GroupId?: Array<number | bigint>
  /**
   * 通过关键字搜索解析记录，当前支持搜索主机头和记录值
   */
  Keyword?: string
  /**
   * 排序字段，支持 NAME，LINE，TYPE，VALUE，WEIGHT，MX，TTL，UPDATED_ON 几个字段。
NAME：解析记录的主机头
LINE：解析记录线路
TYPE：解析记录类型
VALUE：解析记录值
WEIGHT：权重
MX：MX 优先级
TTL：解析记录缓存时间
UPDATED_ON：解析记录更新时间

   */
  SortField?: string
  /**
   * 排序方式，升序：ASC，降序：DESC。默认值为ASC。
   */
  SortType?: string
  /**
   * 偏移量，默认值为0。如果入参携带"Domain","ffset","Limit" 这3个以外的参数，记录结果限制最大3000条
   */
  Offset?: number
  /**
   * 限制数量，当前Limit最大支持3000。默认值为100。
   */
  Limit?: number
  /**
   * 根据解析记录的值获取解析记录
   */
  RecordValue?: string
  /**
   * 根据解析记录的状态获取解析记录。可取值为 ENABLE，DISABLE。
ENABLE：正常 
DISABLE：暂停 
   */
  RecordStatus?: Array<string>
  /**
   * 要获取解析记录权重查询区间起点。
   */
  WeightBegin?: number
  /**
   * 要获取解析记录权重查询区间终点。
   */
  WeightEnd?: number
  /**
   * 要获取解析记录 MX 优先级查询区间起点。
   */
  MXBegin?: number
  /**
   * 要获取解析记录 MX 优先级查询区间终点。
   */
  MXEnd?: number
  /**
   * 要获取解析记录 TTL 查询区间起点。
   */
  TTLBegin?: number
  /**
   * 要获取解析记录 TTL 查询区间终点。
   */
  TTLEnd?: number
  /**
   * 要获取解析记录更新时间查询区间起点。
   */
  UpdatedAtBegin?: string
  /**
   * 要获取解析记录更新时间查询区间终点。
   */
  UpdatedAtEnd?: string
  /**
   * 根据解析记录的备注获取解析记录。
   */
  Remark?: string
  /**
   * 是否根据 Subdomain 参数进行精确查找。
   */
  IsExactSubDomain?: boolean
  /**
   * 项目ID
   */
  ProjectId?: number
}

/**
 * ModifyVasAutoRenewStatus返回参数结构体
 */
export interface ModifyVasAutoRenewStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRecordFields请求参数结构体
 */
export interface ModifyRecordFieldsRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录 ID 。
   */
  RecordId: number
  /**
   * 要修改的记录属性和值，支持：sub_domain，record_line，record_line_id，record_type，value，ttl，status，mx，weight
   */
  FieldList: Array<KeyValue>
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * DeleteSnapshot返回参数结构体
 */
export interface DeleteSnapshotResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainPurview返回参数结构体
 */
export interface DescribeDomainPurviewResponse {
  /**
   * 域名权限列表
   */
  PurviewList?: Array<PurviewInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子订单号列表
 */
export interface Deals {
  /**
   * 子订单ID
   */
  DealId: string
  /**
   * 子订单号
   */
  DealName: string
}

/**
 * ModifySubdomainStatus返回参数结构体
 */
export interface ModifySubdomainStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubdomainValidateStatus返回参数结构体
 */
export interface DescribeSubdomainValidateStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainAnalytics返回参数结构体
 */
export interface DescribeDomainAnalyticsResponse {
  /**
   * 当前统计维度解析量小计
   */
  Data?: Array<DomainAnalyticsDetail>
  /**
   * 域名解析量统计查询信息
   */
  Info?: DomainAnalyticsInfo
  /**
   * 域名别名解析量统计信息
   */
  AliasData?: Array<DomainAliasAnalyticsItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRecordStatus返回参数结构体
 */
export interface ModifyRecordStatusResponse {
  /**
   * 记录ID。
   */
  RecordId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRecordGroup请求参数结构体
 */
export interface CreateRecordGroupRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 分组名称
   */
  GroupName: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * RollbackSnapshot返回参数结构体
 */
export interface RollbackSnapshotResponse {
  /**
   * 回滚任务 ID，用来查询回滚状态
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordGroupList返回参数结构体
 */
export interface DescribeRecordGroupListResponse {
  /**
   * 分组列表
   */
  GroupList?: Array<RecordGroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义线路分组元素
 */
export interface LineGroupItem {
  /**
   * 域名ID
   */
  DomainId: number
  /**
   * 自定义线路分组ID
   */
  Id: number
  /**
   * 自定义线路分组名称
   */
  Name: string
  /**
   * 自定义线路分组包含的线路
   */
  Lines: Array<string>
  /**
   * 创建时间
   */
  CreatedOn: string
  /**
   * 更新时间
   */
  UpdatedOn: string
}

/**
 * DescribeSubdomainValidateStatus请求参数结构体
 */
export interface DescribeSubdomainValidateStatusRequest {
  /**
   * 要查看 TXT 记录校验状态的子域名 Zone 域。
   */
  DomainZone: string
}

/**
 * CreateDomainGroup请求参数结构体
 */
export interface CreateDomainGroupRequest {
  /**
   * 域名分组
   */
  GroupName: string
}

/**
 * CreateSnapshot请求参数结构体
 */
export interface CreateSnapshotRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * DeleteDomain返回参数结构体
 */
export interface DeleteDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordSnapshotRollbackResult返回参数结构体
 */
export interface DescribeRecordSnapshotRollbackResultResponse {
  /**
   * 回滚任务 ID
   */
  JobId?: number
  /**
   * 回滚状态
   */
  Status?: string
  /**
   * 失败的记录信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedRecordList?: Array<SnapshotRecord>
  /**
   * 所属域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 回滚进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: number
  /**
   * 回滚剩余时间（单位：分钟）
注意：此字段可能返回 null，表示取不到有效值。
   */
  LeftMinutes?: number
  /**
   * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 失败记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Failed?: number
  /**
   * 成功记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Success?: number
  /**
   * 快照下载地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySnapshotConfig请求参数结构体
 */
export interface ModifySnapshotConfigRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 备件间隔：空字符串-不备份，half_hour-每半小时，hourly-每小时，daily-每天，monthly-每月
   */
  Period: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * DescribeDomainAliasList请求参数结构体
 */
export interface DescribeDomainAliasListRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID,域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * CreateDomainAlias请求参数结构体
 */
export interface CreateDomainAliasRequest {
  /**
   * 域名别名
   */
  DomainAlias: string
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * DeleteShareDomain请求参数结构体
 */
export interface DeleteShareDomainRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名共享的账号
   */
  Account: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * 域名增值服务用量
 */
export interface VASStatisticItem {
  /**
   * 增值服务名称
   */
  Name?: string
  /**
   * 增值服务标识
   */
  Key?: string
  /**
   * 增值服务最大用量
   */
  LimitCount?: number
  /**
   * 增值服务已使用的用量
   */
  UseCount?: number
}

/**
 * ModifyLineGroup返回参数结构体
 */
export interface ModifyLineGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快照信息
 */
export interface SnapshotInfo {
  /**
   * 快照的对象存储地址
   */
  CosUrl: string
  /**
   * 添加时间
   */
  CreatedOn: string
  /**
   * 所属域名
   */
  Domain: string
  /**
   * 快照记录 ID
   */
  Id: string
  /**
   * 域名解析记录数
   */
  RecordCount: string
  /**
   * 状态：normal-正常，create-备份中
   */
  Status: string
}

/**
 * ModifyDynamicDNS请求参数结构体
 */
export interface ModifyDynamicDNSRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录ID。 可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
   */
  RecordId: number
  /**
   * 记录线路，通过 API 记录线路获得，中文，比如：默认。
   */
  RecordLine: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
  /**
   * 主机记录，如 www，如果不传，默认为 @。
   */
  SubDomain?: string
  /**
   * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
   */
  RecordLineId?: string
  /**
   * IP 地址，支持 IPv4、IPv6，例如 119.29.29.29 或者 2402:4e00::
   */
  Value?: string
  /**
   * TTL值，如果不传，默认为域名的TTL值。
   */
  Ttl?: number
}

/**
 * DescribeRecordGroupList请求参数结构体
 */
export interface DescribeRecordGroupListRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
  /**
   * 分页开始位置
   */
  Offset?: number
  /**
   * 分页每页数
   */
  Limit?: number
}

/**
 * 子域名别名解析量统计信息
 */
export interface SubdomainAliasAnalyticsItem {
  /**
   * 子域名解析量统计查询信息
   */
  Info: SubdomainAnalyticsInfo
  /**
   * 当前统计维度解析量小计
   */
  Data: Array<DomainAnalyticsDetail>
}

/**
 * 自定义线路数量信息
 */
export interface LineGroupSum {
  /**
   * 本次请求返回自定义线路分组个数
   */
  NowTotal: number
  /**
   * 自定义线路分组总数
   */
  Total: number
  /**
   * 还可允许添加的自定义线路分组个数
   */
  AvailableCount: number
}

/**
 * DescribeDomainFilterList请求参数结构体
 */
export interface DescribeDomainFilterListRequest {
  /**
   * 根据域名分组类型获取域名。可取值为 ALL，MINE，SHARE，RECENT。
ALL：全部
MINE：我的域名
SHARE：共享给我的域名
RECENT：最近操作过的域名
   */
  Type: string
  /**
   * 记录开始的偏移, 第一条记录为 0, 依次类推。默认值为 0。
   */
  Offset?: number
  /**
   * 要获取的域名数量, 比如获取 20 个, 则为 20。默认值为 5000。如果账户中的域名数量超过了 5000, 将会强制分页并且只返回前 5000 条, 这时需要通过 Offset 和 Limit 参数去获取其它域名。
   */
  Limit?: number
  /**
   * 根据域名分组 id 获取域名，可通过 DescribeDomain 或 DescribeDomainList 接口 GroupId 字段获取。
   */
  GroupId?: Array<number | bigint>
  /**
   * 根据关键字获取域名。
   */
  Keyword?: string
  /**
   * 排序字段。可取值为 NAME，STATUS，RECORDS，GRADE，UPDATED_ON。
NAME：域名名称
STATUS：域名状态
RECORDS：记录数量
GRADE：套餐等级
UPDATED_ON：更新时间
   */
  SortField?: string
  /**
   * 排序类型，升序：ASC，降序：DESC。
   */
  SortType?: string
  /**
   * 根据域名状态获取域名。可取值为 ENABLE，LOCK，PAUSE，SPAM。
ENABLE：正常
LOCK：锁定
PAUSE：暂停
SPAM：封禁
   */
  Status?: Array<string>
  /**
   * 根据套餐获取域名，可通过 DescribeDomain 或 DescribeDomainList 接口 Grade 字段获取。
   */
  Package?: Array<string>
  /**
   * 根据备注信息获取域名。
   */
  Remark?: string
  /**
   * 要获取域名的更新时间起始时间点，如 '2021-05-01 03:00:00'。
   */
  UpdatedAtBegin?: string
  /**
   * 要获取域名的更新时间终止时间点，如 '2021-05-10 20:00:00'。
   */
  UpdatedAtEnd?: string
  /**
   * 要获取域名的记录数查询区间起点。
   */
  RecordCountBegin?: number
  /**
   * 要获取域名的记录数查询区间终点。
   */
  RecordCountEnd?: number
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 标签过滤
   */
  Tags?: Array<TagItemFilter>
}

/**
 * 域名权限项
 */
export interface PurviewInfo {
  /**
   * 权限名称
   */
  Name: string
  /**
   * 权限值
   */
  Value: string
}

/**
 * DescribeRecordExistExceptDefaultNS请求参数结构体
 */
export interface DescribeRecordExistExceptDefaultNSRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * ModifySnapshotConfig返回参数结构体
 */
export interface ModifySnapshotConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollbackRecordSnapshot返回参数结构体
 */
export interface RollbackRecordSnapshotResponse {
  /**
   * 回滚任务 ID
   */
  JobId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserDetail请求参数结构体
 */
export type DescribeUserDetailRequest = null

/**
 * ModifyDomainStatus请求参数结构体
 */
export interface ModifyDomainStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名状态，”enable” 、”disable” 分别代表启用和暂停
   */
  Status: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * ModifyRecordRemark返回参数结构体
 */
export interface ModifyRecordRemarkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainList请求参数结构体
 */
export interface DescribeDomainListRequest {
  /**
   * 域名分组类型，默认为ALL。可取值为ALL，MINE，SHARE，ISMARK，PAUSE，VIP，RECENT，SHARE_OUT，FREE。
   */
  Type?: string
  /**
   * 记录开始的偏移, 第一条记录为 0, 依次类推。默认值为0。
   */
  Offset?: number
  /**
   * 要获取的域名数量, 比如获取20个, 则为20。默认值为3000。
   */
  Limit?: number
  /**
   * 分组ID, 获取指定分组的域名
   */
  GroupId?: number
  /**
   * 根据关键字搜索域名
   */
  Keyword?: string
  /**
   * 标签过滤
   */
  Tags?: Array<TagItemFilter>
}

/**
 * 域名信息（创建域名时返回）
 */
export interface DomainCreateInfo {
  /**
   * 域名ID
   */
  Id: number
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名的punycode
   */
  Punycode: string
  /**
   * 域名的NS列表
   */
  GradeNsList: Array<string>
}

/**
 * DescribeDomainCustomLineList返回参数结构体
 */
export interface DescribeDomainCustomLineListResponse {
  /**
   * 自定义线路列表
   */
  LineList?: Array<CustomLineInfo>
  /**
   * 可添加的自定义线路条数
   */
  AvailableCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRecordRemark请求参数结构体
 */
export interface ModifyRecordRemarkRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
   */
  RecordId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
  /**
   * 解析记录备注，删除备注请提交空内容。
   */
  Remark?: string
}

/**
 * DeleteRecordBatch请求参数结构体
 */
export interface DeleteRecordBatchRequest {
  /**
   * 解析记录 ID 数组
   */
  RecordIdList: Array<number | bigint>
}

/**
 * DescribeDomainPurview请求参数结构体
 */
export interface DescribeDomainPurviewRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * 批量添加域名返回结构
 */
export interface CreateDomainBatchDetail {
  /**
   * 见RecordInfoBatch
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordList: Array<CreateDomainBatchRecord>
  /**
   * 任务编号
   */
  Id: number
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain: string
  /**
   * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainGrade: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg: string
  /**
   * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation: string
}

/**
 * ModifyDomainUnlock请求参数结构体
 */
export interface ModifyDomainUnlockRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名解锁码，锁定的时候会返回。
   */
  LockCode: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * DescribeRecordSnapshotRollbackResult请求参数结构体
 */
export interface DescribeRecordSnapshotRollbackResultRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 回滚任务 ID
   */
  JobId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * ModifyDomainLock返回参数结构体
 */
export interface ModifyDomainLockResponse {
  /**
   * 域名锁定信息
   */
  LockInfo?: LockInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLineGroup请求参数结构体
 */
export interface CreateLineGroupRequest {
  /**
   * 自定义线路分组的名称。
   */
  Name: string
  /**
   * 自定义线路分组包含的线路列表，包含多个线路时用英文逗号分隔。例如，铁通,奇虎
   */
  Lines: string
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId
   */
  DomainId?: number
}

/**
 * CreateDomainCustomLine请求参数结构体
 */
export interface CreateDomainCustomLineRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 自定义线路名称
   */
  Name: string
  /**
   * 自定义线路IP段，用-分割
   */
  Area: string
  /**
   * 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId
   */
  DomainId?: number
}

/**
 * 域名解析记录线路信息
 */
export interface LineItem {
  /**
   * 解析线路名称。
   */
  LineName?: string
  /**
   * 解析线路 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LineId?: string
  /**
   * 当前线路在当前域名下是否可用。
   */
  Useful?: boolean
  /**
   * 当前线路最低套餐等级要求。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Grade?: string
  /**
   * 当前线路分类下的子线路列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubGroup?: Array<LineItem>
  /**
   * 自定义线路分组内包含的线路。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Lines?: Array<string>
}

/**
 * CreateDeal返回参数结构体
 */
export interface CreateDealResponse {
  /**
   * 大订单号，一个大订单号下可以有多个子订单，说明是同一次下单
   */
  BigDealId?: string
  /**
   * 子订单列表
   */
  DealList?: Array<Deals>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordExistExceptDefaultNS返回参数结构体
 */
export interface DescribeRecordExistExceptDefaultNSResponse {
  /**
   * true 是 false 否
   */
  Exist?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTXTRecord返回参数结构体
 */
export interface ModifyTXTRecordResponse {
  /**
   * 记录ID
   */
  RecordId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVasAutoRenewStatus请求参数结构体
 */
export interface ModifyVasAutoRenewStatusRequest {
  /**
   * 资源ID。可以从控制台查看所有的资源
   */
  ResourceId: string
  /**
   * enable 开启自动续费；disable 关闭自动续费
   */
  Status: string
}

/**
 * Whois信息
 */
export interface WhoisInfo {
  /**
   * 联系信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Contacts?: WhoisContact
  /**
   * 域名注册时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreationDate?: string
  /**
   * 域名到期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpirationDate?: string
  /**
   * 是否是在腾讯云注册的域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsQcloud?: boolean
  /**
   * 是否当前操作账号注册的域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsQcloudOwner?: boolean
  /**
   * 域名配置的NS
注意：此字段可能返回 null，表示取不到有效值。
   */
  NameServers?: Array<string>
  /**
   * Whois原始信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Raw?: Array<string>
  /**
   * 域名注册商
注意：此字段可能返回 null，表示取不到有效值。
   */
  Registrar?: Array<string>
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: Array<string>
  /**
   * 更新日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedDate?: string
  /**
   * dnssec
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dnssec?: string
}

/**
 * DownloadSnapshot返回参数结构体
 */
export interface DownloadSnapshotResponse {
  /**
   * 快照下载链接
   */
  CosUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名概览明细
 */
export interface PreviewDetail {
  /**
   * 域名
   */
  Name: string
  /**
   * 域名套餐代码
   */
  Grade: string
  /**
   * 域名套餐名称
   */
  GradeTitle: string
  /**
   * 域名记录数
   */
  Records: number
  /**
   * 域名停靠状态。0 未开启 1 已开启 2 已暂停
   */
  DomainParkingStatus: number
  /**
   * 自定义线路数量
   */
  LineCount: number
  /**
   * 自定义线路分组数量
   */
  LineGroupCount: number
  /**
   * 域名别名数量
   */
  AliasCount: number
  /**
   * 允许添加的最大域名别名数量
   */
  MaxAliasCount: number
  /**
   * 昨天的解析量
   */
  ResolveCount: number
  /**
   * 增值服务数量
   */
  VASCount: number
}

/**
 * 域名共享信息
 */
export interface DomainShareUserInfo {
  /**
   * 共享记录ID
   */
  DomainShareId?: number
  /**
   * 共享模式。r-只读；w-可写；rw-可读写。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * 共享到的用户昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nickname?: string
  /**
   * 共享到的用户UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  QCloudUIN?: string
  /**
   * 共享状态。enabled-有效；pause-无效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 共享的子域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubDomain?: string
}

/**
 * 标签项
 */
export interface TagItem {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue?: string
}

/**
 * DescribeDomainWhois返回参数结构体
 */
export interface DescribeDomainWhoisResponse {
  /**
   * 域名Whois信息
   */
  Info?: WhoisInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRecordGroup返回参数结构体
 */
export interface CreateRecordGroupResponse {
  /**
   * 新增的分组 ID
   */
  GroupId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainGroupList请求参数结构体
 */
export type DescribeDomainGroupListRequest = null

/**
 * DescribeBatchTask返回参数结构体
 */
export interface DescribeBatchTaskResponse {
  /**
   * 批量任务详情
   */
  DetailList?: Array<DescribeBatchTaskDetail>
  /**
   * 总任务条数
   */
  TotalCount?: number
  /**
   * 成功条数
   */
  SuccessCount?: number
  /**
   * 失败条数
   */
  FailCount?: number
  /**
   * 批量任务类型
   */
  JobType?: string
  /**
   * 任务创建时间
   */
  CreatedAt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckRecordSnapshotRollback请求参数结构体
 */
export interface CheckRecordSnapshotRollbackRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 快照 ID
   */
  SnapshotId: string
  /**
   * 解析记录信息
   */
  Record: SnapshotRecord
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * CreateDomainCustomLine返回参数结构体
 */
export interface CreateDomainCustomLineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainAnalytics请求参数结构体
 */
export interface DescribeDomainAnalyticsRequest {
  /**
   * 要查询解析量的域名
   */
  Domain: string
  /**
   * 查询的开始时间，格式：YYYY-MM-DD
   */
  StartDate: string
  /**
   * 查询的结束时间，格式：YYYY-MM-DD
   */
  EndDate: string
  /**
   * DATE:按天维度统计 HOUR:按小时维度统计
   */
  DnsFormat?: string
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
}

/**
 * ModifyDynamicDNS返回参数结构体
 */
export interface ModifyDynamicDNSResponse {
  /**
   * 记录ID
   */
  RecordId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRecord请求参数结构体
 */
export interface ModifyRecordRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 记录类型，通过 API 记录类型获得，大写英文，比如：A 。
   */
  RecordType: string
  /**
   * 记录线路，通过 API 记录线路获得，中文，比如：默认。
   */
  RecordLine: string
  /**
   * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
   */
  Value: string
  /**
   * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
   */
  RecordId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
   */
  DomainId?: number
  /**
   * 主机记录，如 www，如果不传，默认为 @。
   */
  SubDomain?: string
  /**
   * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
   */
  RecordLineId?: string
  /**
   * MX 优先级，当记录类型是 MX 时有效，范围1-20，MX 记录时必选。
   */
  MX?: number
  /**
   * TTL，范围1-604800，不同等级域名最小值不同。
   */
  TTL?: number
  /**
   * 权重信息，0到100的整数。0 表示关闭，不传该参数，表示不设置权重信息。
   */
  Weight?: number
  /**
   * 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
   */
  Status?: string
  /**
   * 记录的备注信息。传空删除备注。
   */
  Remark?: string
  /**
   * 开启DNSSEC时，强制将其它记录修改为CNAME/URL记录
   */
  DnssecConflictMode?: string
}

/**
 * DescribeSnapshotRollbackResult请求参数结构体
 */
export interface DescribeSnapshotRollbackResultRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 快照回滚任务 ID
   */
  TaskId: number
  /**
   * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
   */
  DomainId?: number
}

/**
 * DescribeDomainLogList返回参数结构体
 */
export interface DescribeDomainLogListResponse {
  /**
   * 域名信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogList?: Array<string>
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 日志总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
