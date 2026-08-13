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
 * CreateReportPdf请求参数结构体
 */
export interface CreateReportPdfRequest {
  /**
   * <p>报表 Id</p>
   */
  Id: number
}

/**
 * IdWithName
 */
export interface IdWithName {
  /**
   * id
   */
  Id?: number
  /**
   * 名称
   */
  Name?: string
}

/**
 * 数据安全审计产品规格信息
 */
export interface DbauditTypesInfo {
  /**
   * 规格描述
   */
  InstanceVersionName?: string
  /**
   * 规格名称
   */
  InstanceVersionKey?: string
  /**
   * 最大吞吐量
   */
  Qps?: number
  /**
   * 最大实例数
   */
  MaxInstances?: number
  /**
   * 入库速率（每小时）
   */
  InsertSpeed?: number
  /**
   * 最大在线存储量，单位：条
   */
  OnlineStorageCapacity?: number
  /**
   * 最大归档存储量，单位：条
   */
  ArchivingStorageCapacity?: number
}

/**
 * ModifyDbauditInstancesRenewFlag请求参数结构体
 */
export interface ModifyDbauditInstancesRenewFlagRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 0，表示默认状态(用户未设置，即初始状态)；1，表示自动续费；2，表示明确不自动续费
   */
  AutoRenewFlag: number
}

/**
 * DescribeReportMissionList请求参数结构体
 */
export interface DescribeReportMissionListRequest {
  /**
   * 报表名 可模糊查询
   */
  TplName?: string
  /**
   * 报表类型 1:单次报表 2:周期报表 0全查
   */
  ReportType?: number
  /**
   * 报表模板 1:综合分析报告 2:等保合规报告 0全查
   */
  TemplateId?: number
  /**
   * 任务状态0全查 1:生成中 2:待生成 3:已生成 4:生成失败 5:已暂停
   */
  MissionStatus?: number
  /**
   * 排序字段 支持“NextStartTime” 与 “MissionStatus”
   */
  Field?: string
  /**
   * ‘desc' | 'asc'
   */
  Sort?: string
  /**
   * 限制条数
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
}

/**
 * DescribeAssetsList请求参数结构体
 */
export interface DescribeAssetsListRequest {
  /**
   * <p>限制数目</p>
   */
  Limit?: number
  /**
   * <p>偏移量</p>
   */
  Offset?: number
  /**
   * <p>实例Id/实例名称/资产名称</p>
   */
  SearchValues?: Array<NameValueString>
  /**
   * <p>数据资产类型</p>
   */
  AssetsType?: string
  /**
   * <p>查询的资产类型（1:cdb、2:cvm、3:others）</p>
   */
  AssetsAddType?: number
  /**
   * <p>地域</p>
   */
  RegionId?: string
  /**
   * <p>审计权限</p>
   */
  Permission?: number
  /**
   * <p>状态</p>
   */
  AliveStatus?: number
  /**
   * <p>1.代理开启 0.代理关闭 -1.全查</p>
   */
  CasbOn?: number
  /**
   * <p>1.Agent开启 0.Agent关闭 -1.全查</p>
   */
  AgentOn?: number
  /**
   * <p>0.关闭，1.开启，2.关闭中，3.开启中 -1.全查</p>
   */
  CdbOn?: number
  /**
   * <p>扩展分类，如sensitive，指定查询支持敏感数据识别的资产</p>
   */
  ExtendCategory?: string
  /**
   * <p>资产组Id（Id=0 暂未分组；id&gt;0 组Id）</p>
   */
  GroupIds?: Array<number | bigint>
  /**
   * <p>资产Id</p>
   */
  Aids?: Array<number | bigint>
  /**
   * <p>查询绑定状态（1:查询规则绑定数量；2:查询模型绑定数量）</p>
   */
  BindingState?: number
  /**
   * <p>网卡是否开启流量审计</p><p>取值范围：[-1, 1]</p>
   */
  TrafficMirrorOn?: number
}

/**
 * InquiryPriceDbauditInstance请求参数结构体
 */
export interface InquiryPriceDbauditInstanceRequest {
  /**
   * 实例规格，取值范围： cdsaudit，cdsaudit_adv， cdsaudit_ent 分别为合规版，高级版，企业版
   */
  InstanceVersion: string
  /**
   * 询价类型： renew，续费；newbuy，新购
   */
  InquiryType: string
  /**
   * 购买实例的时长。取值范围：1（y/m），2（y/m）,，3（y/m），4（m）， 5（m），6（m）， 7（m），8（m），9（m）， 10（m）
   */
  TimeSpan: number
  /**
   * 购买时长单位，y：年；m：月
   */
  TimeUnit: string
  /**
   * 实例所在地域
   */
  ServiceRegion: string
}

/**
 * CreateReportPdf返回参数结构体
 */
export interface CreateReportPdfResponse {
  /**
   * <p>下载地址</p>
   */
  Url?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDbauditInstanceType返回参数结构体
 */
export interface DescribeDbauditInstanceTypeResponse {
  /**
   * 数据安全审计产品规格信息列表
   */
  DbauditTypesSet?: Array<DbauditTypesInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资产列表数组
 */
export interface AssetsInfo {
  /**
   * <p>创建时间</p>
   */
  AddTime: number
  /**
   * <p>资产 ID</p>
   */
  Aid: number
  /**
   * <p>数据资产 IP</p>
   */
  AssetsIp: string
  /**
   * <p>数据资产名称</p>
   */
  AssetsName: string
  /**
   * <p>数据资产端口</p>
   */
  AssetsPort: number
  /**
   * <p>数据资产类型</p>
   */
  AssetsType: string
  /**
   * <p>资产版本</p>
   */
  AssetsVersion: string
  /**
   * <p>是否动态</p>
   */
  AssetsAddType: number
  /**
   * <p>是否删除</p>
   */
  Status: number
  /**
   * <p>最后一次修改时间</p>
   */
  UpdateTime: number
  /**
   * <p>资产的vpc</p>
   */
  VpcId: string
  /**
   * <p>地域</p>
   */
  RegionId: string
  /**
   * <p>审计权限</p>
   */
  Permission: number
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>实例名称</p>
   */
  InstanceName: string
  /**
   * <p>用来区分自建资产是已通过cvm还是添加ip的方式</p>
   */
  AddType: number
  /**
   * <p>子网Id</p>
   */
  AssetSubnetId: string
  /**
   * <p>是否已上传数据库私钥（0 否，1 是）</p>
   */
  UploadPem: number
  /**
   * <p>资产状态栏 0:正常 1:已删除（目前仅对tencentDB有效）</p>
   */
  AliveStatus: number
  /**
   * <p>开启agent(0:关闭;1:开启)</p>
   */
  AgentOn: number
  /**
   * <p>开启agent(0:关闭;1:开启)</p>
   */
  CasbOn: number
  /**
   * <p>只读组/集群ID</p>
   */
  GroupId: string
  /**
   * <p>PROXY_OFF: 未开启Casb代理;PROXY_ERROR:Casb代理接口返回异常;PROXY_BOUND:已绑定;PROXY_UNBOUND:未绑定;UNPAID:未购买;UNSUPPORTED:类型不支持;METADATA_NOT_FOUND:元数据不存在;QUOTA_EXCEEDED:Casb额度不足</p>
   */
  Available: string
  /**
   * <p>cdbOn</p>
   */
  CdbOn: number
  /**
   * <p>平台位数 32位 64位</p>
   */
  DbPlatform: string
  /**
   * <p>编码</p>
   */
  DbCharset: string
  /**
   * <p>操作系统</p>
   */
  OsPolicy: string
  /**
   * <p>是否开启双向审计</p>
   */
  BidirectionOn: number
  /**
   * <p>最大返回行数</p>
   */
  BidirectionMaxLine: number
  /**
   * <p>最大返回大小</p>
   */
  BidirectionMaxStorage: number
  /**
   * <p>是否允许开通双向审计(1.允许；0不允许)</p>
   */
  BidirectionAllow: number
  /**
   * <p>启双向审计的日志投递(1.开启;0.关闭)</p>
   */
  BidirectionDelivery: number
  /**
   * <p>只读状态</p>
   */
  RoStatus: string
  /**
   * <p>当前资产是否开启了对当前Agent的采集策略</p>
   */
  AgentBound: boolean
  /**
   * <p>错误信息</p>
   */
  CdbErrorMsg: string
  /**
   * <p>资产 DSGC 绑定信息</p>
   */
  DsgcBindingInfo: DsgcBindingInfo
  /**
   * <p>绑定的规则Ids</p>
   */
  BindingRules?: Array<IdWithName>
  /**
   * <p>绑定的模型Ids</p>
   */
  BindingModels?: Array<IdWithName>
  /**
   * <p>所属组名</p>
   */
  GroupName?: string
  /**
   * <p>资产组Id</p>
   */
  AssetGroupId?: number
  /**
   * <p>是否是新云原生审计流程</p>
   */
  IsNewCloudAudit?: boolean
  /**
   * <p>1</p><p>取值范围：[0, 1]</p>
   */
  TrafficMirrorOn?: number
  /**
   * <p>流量镜像审计范围</p><p>枚举值：</p><ul><li>ALL： 全地域</li><li>REGION： 资产所在地域</li><li>VPC： 资产所在VPC</li></ul><p>默认值：REGION</p>
   */
  AuditScope?: string
  /**
   * <p>实例集群ID</p>
   */
  InstanceGroupId?: string
  /**
   * <p>该资产所在的资产组</p>
   */
  AssetGroups?: Array<IdWithName>
}

/**
 * DescribeReportMissionList返回参数结构体
 */
export interface DescribeReportMissionListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 报表列表
   */
  List?: Array<ReportMission>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据安全产品实例信息
 */
export interface CdsAuditInstance {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 用户AppId
   */
  AppId?: string
  /**
   * 用户Uin
   */
  Uin?: string
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 续费标识
   */
  RenewFlag?: number
  /**
   * 所属地域
   */
  Region?: string
  /**
   * 付费模式（数据安全审计只支持预付费：1）
   */
  PayMode?: number
  /**
   * 实例状态： 0，未生效；1：正常运行； 2：被隔离； 3，已过期
   */
  Status?: number
  /**
   * 实例被隔离时间，格式：yyyy-mm-dd HH:ii:ss
   */
  IsolatedTimestamp?: string
  /**
   * 实例创建时间，格式： yyyy-mm-dd HH:ii:ss
   */
  CreateTime?: string
  /**
   * 实例过期时间，格式：yyyy-mm-dd HH:ii:ss
   */
  ExpireTime?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例公网IP
   */
  PublicIp?: string
  /**
   * 实例私网IP
   */
  PrivateIp?: string
  /**
   * 实例类型（版本）
   */
  InstanceType?: string
  /**
   * 实例域名
   */
  Pdomain?: string
}

/**
 * DescribeDbauditUsedRegions返回参数结构体
 */
export interface DescribeDbauditUsedRegionsResponse {
  /**
   * 可售卖地域信息列表
   */
  RegionSet?: Array<RegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTimerReport返回参数结构体
 */
export interface CreateTimerReportResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数盾地域信息
 */
export interface RegionInfo {
  /**
   * 地域ID
   */
  RegionId?: number
  /**
   * 地域名称
   */
  Region?: string
  /**
   * 地域描述
   */
  RegionName?: string
  /**
   * 地域可用状态
   */
  RegionState?: number
}

/**
 * DescribeDbauditInstances请求参数结构体
 */
export interface DescribeDbauditInstancesRequest {
  /**
   * 查询条件地域
   */
  SearchRegion?: string
  /**
   * 限制数目，默认10， 最大50
   */
  Limit?: number
  /**
   * 偏移量，默认1
   */
  Offset?: number
}

/**
 * ModifyDbauditInstancesRenewFlag返回参数结构体
 */
export interface ModifyDbauditInstancesRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDbauditUsedRegions请求参数结构体
 */
export type DescribeDbauditUsedRegionsRequest = null

/**
 * InquiryPriceDbauditInstance返回参数结构体
 */
export interface InquiryPriceDbauditInstanceResponse {
  /**
   * 总价，单位：元
   */
  TotalPrice?: number
  /**
   * 真实价钱，预支费用的折扣价，单位：元
   */
  RealTotalCost?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务对象
 */
export interface ReportMission {
  /**
   * 报表任务id
   */
  Id?: number
  /**
   * 任务名称
   */
  TplName?: string
  /**
   * 报表类型 1:单次报表 2:周期报表
   */
  ReportType?: number
  /**
   * 报告说明
   */
  Remark?: string
  /**
   * 报表模板 1:综合分析报告 2:等保合规报告
   */
  TemplateId?: number
  /**
   * 包含资产
   */
  AssetsList?: Array<AssetsInfo>
  /**
   * 下次启动时间
   */
  NextStartTime?: number
  /**
   * 任务状态 1:生成中 2:待生成3:已生成4:生成失败5:已暂停
   */
  MissionStatus?: number
  /**
   * 任务状态说明 仅生成中和生成失败有效
   */
  MissionStatusMessage?: string
  /**
   * 已生成报表数
   */
  ReportCount?: number
  /**
   * 任务起停 1:关闭 2:开启 仅周期报表有效
   */
  MissionStart?: number
  /**
   * 统计周期 1:24小时 7:近一周 30:近30天 90:近90天 180:
   */
  CntDay?: number
  /**
   * 重复周期 1:每天 2:每周 3:每月
   */
  CntCycle?: number
  /**
   * 执行日期 重复周期为天：无意义 周：星期几 1-7  月每月
   */
  CntTime?: number
  /**
   * 执行时间 格式15:04 到分钟
   */
  CntDate?: string
  /**
   * 创建者 0:内置 其余存放用户(uin)
   */
  Receivers?: string
  /**
   * Notification  int  1关闭 2开启 不变更为0
   */
  Notification?: number
}

/**
 * Name and String Value
 */
export interface NameValueString {
  /**
   * <p>名称</p>
   */
  Name: string
  /**
   * <p>值</p>
   */
  Value: string
}

/**
 * 报表列表字段数组
 */
export interface Reports {
  /**
   * 生成时间
   */
  AddTime?: number
  /**
   * 结束时间
   */
  EndTime?: number
  /**
   * 报告 ID
   */
  Id?: number
  /**
   * 审计 ID
   */
  InstanceId?: number
  /**
   * 是否已删除
   */
  IsDelete?: number
  /**
   * 发送目标
   */
  Receivers?: string
  /**
   * 报告说明
   */
  Remark?: string
  /**
   * 报告文件
   */
  ReportFile?: string
  /**
   * 状态
   */
  ReportStatus?: number
  /**
   * 状态
   */
  ReportTmpStatus?: number
  /**
   * 报告类型
   */
  ReportType?: number
  /**
   * 发送结果
   */
  SendResult?: string
  /**
   * 发送类型
   */
  SendType?: string
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 报告名称
   */
  Title?: string
  /**
   * 报表模板
   */
  TemplateId?: number
  /**
   * 包含资产
   */
  AssetsList?: Array<AssetsInfo>
  /**
   * 时间范围 1:24小时 7:近一周 30:近30天 90:近90天 180:近180天 不变更为0
   */
  CntDay?: number
}

/**
 * 资产 DSGC 绑定信息
 */
export interface DsgcBindingInfo {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * dspa绑定模板/合规组 id ComplianceGroupId
   */
  DspaCgId: number
  /**
   * dspa绑定模板/合规组名称
   */
  DspaCgName: string
  /**
   * dspa实例状态 0 正常 1 隔离 2 销毁
   */
  DspaStatus: number
  /**
   * 模板状态 0: 正常   1: 已删除
   */
  DspaCgStatus: number
}

/**
 * CreateTimerReport请求参数结构体
 */
export interface CreateTimerReportRequest {
  /**
   * 任务名称 不变更为""
   */
  TplName?: string
  /**
   * 执行日期 重复周期为天：无意义周：星期几1-7月每月几号 1-31
   */
  CntTime?: number
  /**
   * 重复周期
   */
  CntCycle?: number
  /**
   * 发送目标
   */
  Receivers?: string
  /**
   * 时间范围 1:24小时 7:近一周 30:近30天 90:近90天 180:近180天 不变更为0
   */
  CntDay?: number
  /**
   * 执行时间 格式15:04 到分钟
   */
  CntDate?: string
  /**
   * 报告说明
   */
  Remark?: string
  /**
   * 模版Id
   */
  TemplateId?: number
  /**
   * 报表类型
   */
  ReportType?: number
  /**
   * 关联的资产数组
   */
  AssetsId?: Array<number | bigint>
  /**
   * 报表通知 1关闭 2开启 不变更为0
   */
  Notification?: number
  /**
   * 任务起停 1:关闭 2:开启 单次报表默认为2
   */
  MissionStart?: number
}

/**
 * DescribeReportList返回参数结构体
 */
export interface DescribeReportListResponse {
  /**
   * 总数目
   */
  TotalCount?: number
  /**
   * 数据列表
   */
  List?: Array<Reports>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDbauditInstanceType请求参数结构体
 */
export type DescribeDbauditInstanceTypeRequest = null

/**
 * DescribeReportList请求参数结构体
 */
export interface DescribeReportListRequest {
  /**
   * 限制数目
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 报告名称
   */
  Name?: string
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 结束时间
   */
  EndTime?: number
  /**
   * 报告类型
   */
  ReportType?: number
  /**
   * 报告状态
   */
  ReportStatus?: number
  /**
   * 报表模版id
   */
  TemplateId?: number
  /**
   * 需要排序的字段
   */
  Field?: string
  /**
   * 排序顺序 asc desc
   */
  Sort?: string
  /**
   * 时间范围 1:24小时 7:近一周 30:近30天 90:近90天 180:近180天 不变更为0
   */
  CntDay?: number
}

/**
 * DescribeAssetsList返回参数结构体
 */
export interface DescribeAssetsListResponse {
  /**
   * <p>总数目</p>
   */
  TotalCount?: number
  /**
   * <p>数据列表</p>
   */
  List?: Array<AssetsInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDbauditInstances返回参数结构体
 */
export interface DescribeDbauditInstancesResponse {
  /**
   * 总实例数
   */
  TotalCount?: number
  /**
   * 数据安全审计实例信息列表
   */
  CdsAuditInstanceSet?: Array<CdsAuditInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
