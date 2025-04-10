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
 * CreatePersonnelVisitWorkOrder请求参数结构体
 */
export interface CreatePersonnelVisitWorkOrderRequest {
  /**
   * 到访人员信息
   */
  PersonnelSet: Array<Personnel>
  /**
   * 机房 ID
   */
  IdcId: number
  /**
   * 机房管理单元列表
   */
  IdcUnitIdSet: Array<number | bigint>
  /**
   * 到访开始时间
   */
  EnterStartTime: string
  /**
   * 到访结束时间
   */
  EnterEndTime: string
  /**
   * 到访原因，映射关系：IT_OPERATION IT运维 OTHER 其他
   */
  VisitReason: Array<string>
  /**
   * 到访说明
   */
  VisitRemark: string
}

/**
 * 工单信息的简要，一般用于工单创建的返回
 */
export interface WorkOrderTinyInfo {
  /**
   * 工单id
   */
  WorkOrderId?: string
  /**
   * 服务类型，一个服务可能会产生多个工单
   */
  ServiceType?: string
  /**
   * 工单类型
   */
  OrderType?: string
}

/**
 * DescribePositions请求参数结构体
 */
export interface DescribePositionsRequest {
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
   */
  Limit?: number
  /**
   * <li><strong>rack-id</strong></li> <p style="padding-left: 30px;">按照【<strong>机架ID</strong>】进行过滤。例如：15082。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;"></p> <li><strong> rack-name</strong></li> <p style="padding-left: 30px;">按照【<strong>机架名称</strong>】进行过滤，机架名称例如：M301-E10。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p> <li><strong> idc-id</strong></li> <p style="padding-left: 30px;">按照【<strong>机房ID</strong>】进行过滤，机房ID例如：159。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>  <li><strong>idc-unit-id </strong></li> <p style="padding-left: 30px;">按照【<strong>机房管理单元ID</strong>】进行过滤，机房管理ID例如：568。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p> <li><strong>position-status</strong></li> <p style="padding-left: 30px;">按照【<strong>机位状态</strong>】进行过滤，机位状态只包含以下四种：机位状态,0 空闲,1 已用,2 不可用,3 预占用,4 预留，例如： 0。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>op-status</strong></li> <p style="padding-left: 30px;">按照【<strong>操作状态</strong>】进行过滤，操作状态只包含两种：FINISH 操作完成，PENDING 操作中，例如： PENDING。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>

   */
  Filters?: Array<Filter>
}

/**
 * 设备评估工单基本信息
 */
export interface ModelEvaluationBaseInfo {
  /**
   * 客户名称
   */
  CustomerName?: string
  /**
   * server 服务器  netDevice 网络设备
   */
  DeviceType?: string
  /**
   * 园区名称
   */
  CampusName?: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeIdcUnitAssetDetail请求参数结构体
 */
export interface DescribeIdcUnitAssetDetailRequest {
  /**
   * 机房管理单元ID
   */
  IdcUnitId?: number
}

/**
 * CreateMovingWorkOrder请求参数结构体
 */
export interface CreateMovingWorkOrderRequest {
  /**
   * 机房id
   */
  IdcId: number
  /**
   * 设备类型，server, netDevice
   */
  DeviceType: string
  /**
   * 上架后是否开电
   */
  WithPowerOn: boolean
  /**
   * 设备搬迁信息列表
   */
  DeviceMovingList: Array<DeviceRackOn>
  /**
   * 备注
   */
  Remark?: string
}

/**
 * 机位信息
 */
export interface Position {
  /**
   * 机位ID
   */
  PositionId?: number
  /**
   * 机位高度
   */
  Height?: number
  /**
   * 机位编号
   */
  PositionCode?: string
  /**
   * 机位状态,0 空闲,1 已用,2 不可用,3 预占用,4 预留
   */
  PositionStatus?: number
  /**
   * 设备规划类型ID
   */
  PlanDeviceType?: number
  /**
   * 机位所属的机房管理单元ID
   */
  IdcUnitId?: number
  /**
   * 机位所属的机架ID
   */
  RackId?: number
  /**
   * 机位所属的机架名称
   */
  RackName?: string
  /**
   * 机位所属的机房管理单元名称
   */
  IdcUnitName?: string
  /**
   * 机位所属的机房名称
   */
  IdcName?: string
  /**
   * 机位所属的机房ID
   */
  IdcId?: number
  /**
   * 机位上如果有设备，该字段代表设备的 SN 码，如果是空闲机位，不返回该字段。
   */
  Sn?: string
  /**
   * 机位上如果有设备，该字段代表设备的固资号，如果是空闲机位，不返回该字段。
   */
  AssetId?: string
  /**
   * 机位上如果有设备，该字段代表设备的设备型号加版本号，如果是空闲机位，不返回该字段。
   */
  ModelVersion?: string
}

/**
 * 客户自行上门信息
 */
export interface SelfOperation {
  /**
   * 联系人员电话
   */
  StuffContact: string
  /**
   * 身份证号
   */
  StuffIDCard: string
  /**
   * 人员姓名
   */
  StuffName: string
  /**
   * 上门时间
   */
  OperationTime: string
}

/**
 * CreateServerModel请求参数结构体
 */
export interface CreateServerModelRequest {
  /**
   * 设备型号详情
   */
  ModelDetail: ServerModel
}

/**
 * 工单类型详情
 */
export interface WorkOrderTypeDetail {
  /**
   * 工单类型所属的大类
   */
  WorkOrderFamily?: string
  /**
   * 工单类型名称
   */
  WorkOrderName?: string
  /**
   * 工单类型的唯一英文标识
   */
  WorkOrderType?: string
  /**
   * 工单类型简述
   */
  WorkOrderDescription?: string
  /**
   * 是否被收藏
   */
  CollectFlag?: boolean
  /**
   * 服务时效
   */
  SlaMessage?: string
}

/**
 * DescribeModelVersionList返回参数结构体
 */
export interface DescribeModelVersionListResponse {
  /**
   * 型号和对应的版本数量
   */
  ModelVersionSet?: Array<ModelVersionCount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateModelEvaluationWorkOrder请求参数结构体
 */
export interface CreateModelEvaluationWorkOrderRequest {
  /**
   * 设备名称及型号
   */
  ModelSet: Array<ModelVersion>
  /**
   * 园区ID
   */
  CampusId: number
  /**
   * 只支持传入 server 和 netDevice
   */
  DeviceType: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeModelVersionList请求参数结构体
 */
export interface DescribeModelVersionListRequest {
  /**
   * 型号类型，只支持传入 netDevice 和 server
   */
  DeviceType: string
  /**
   * model-name  型号名称  类型：String  必选：否
   */
  Filters?: Array<Filter>
  /**
   * 是否已评估
   */
  Checked?: boolean
  /**
   * 园区ID，当 Checked 参数传 True 时，该参数必须传值
   */
  CampusId?: number
}

/**
 * CreateNetDeviceModel请求参数结构体
 */
export interface CreateNetDeviceModelRequest {
  /**
   * 网络设备型号
   */
  ModelDetail: NetDeviceModel
}

/**
 * 机房管理单元
 */
export interface IdcUnitInfo {
  /**
   * 机房管理单元地址
   */
  Address?: string
  /**
   * 机房经理
   */
  Operator?: string
  /**
   * 联系电话
   */
  TelNumber?: string
  /**
   * 资产管理员
   */
  AssetManager?: string
  /**
   * 资产管理员电话
   */
  AssetManagerTelNumber?: string
}

/**
 * 服务器设备型号
 */
export interface ServerModel {
  /**
   * 型号名称
   */
  DevModel?: string
  /**
   * 节点数
   */
  DevNode?: string
  /**
   * 设备高度
   */
  DevHeight?: string
  /**
   * 功耗
   */
  PowerEnergy?: string
  /**
   * 电源接口型号
   */
  PowerportType?: string
  /**
   * 电源模块数量
   */
  PowermoduleNum?: string
  /**
   * 进风口位置
   */
  InwindPosition?: string
  /**
   * 出风口位置
   */
  OutwindPosition?: string
  /**
   * 网卡接口位置
   */
  NetportPosition?: string
  /**
   * 宽度
   */
  DevWidth?: string
  /**
   * 深度
   */
  DevDepth?: string
  /**
   * 重量
   */
  DevWeight?: string
  /**
   * 电源模块
   */
  PowerModule?: string
  /**
   * 电源模块位置
   */
  PowermodulePosition?: string
  /**
   * 网络接口类型
   */
  NetportType?: string
  /**
   * 网卡速率
   */
  NetSpeed?: string
  /**
   * 0 代表在当前园区没评估过，1 代表完全满足IDC准入标准 2 代表存在托管风险 3 代表不满足IDC准入标准
   */
  CheckResult?: number
  /**
   * 版本号
   */
  Version?: string
  /**
   * 型号和版本的组合名称
   */
  ModelVersion?: string
}

/**
 * DescribeIdcUnitDetail返回参数结构体
 */
export interface DescribeIdcUnitDetailResponse {
  /**
   * 机房管理单元详情
   */
  IdcUnitDetail?: IdcUnitInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIdcs请求参数结构体
 */
export type DescribeIdcsRequest = null

/**
 * DescribeIdcUnitAssetDetail返回参数结构体
 */
export interface DescribeIdcUnitAssetDetailResponse {
  /**
   * 机房管理单元详情
   */
  IdcUnitDetail?: IdcUnitInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePositions返回参数结构体
 */
export interface DescribePositionsResponse {
  /**
   * 客户拥有的机位列表
   */
  PositionSet?: Array<Position>
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
 * 带有分类的工单类型列表
 */
export interface WorkOrderFamilyDetail {
  /**
   * 工单类型大类的名称
   */
  WorkOrderFamily?: string
  /**
   * 工单类型详情列表
   */
  WorkOrderTypeSet?: Array<WorkOrderTypeDetail>
}

/**
 * DescribePositionStatusSummary返回参数结构体
 */
export interface DescribePositionStatusSummaryResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 状态及对应数量
   */
  StatusCountSet?: Array<PositionStatusItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceList请求参数结构体
 */
export interface DescribeDeviceListRequest {
  /**
   * 设备类型 server 服务器，netDevice 网络设备，otherDevice 其他设备
   */
  DeviceType: string
  /**
   * 
<li><strong>rack-id</strong></li> <p style="padding-left: 30px;">按照【<strong>机架ID</strong>】进行过滤。例如：15082。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;"></p> <li><strong> sn</strong></li> <p style="padding-left: 30px;">按照【<strong>设备 SN 码</strong>】进行过滤，设备 SN 例如：TEN948P004。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p> <li><strong> idc-id</strong></li> <p style="padding-left: 30px;">按照【<strong>机房ID</strong>】进行过滤，机房ID例如：159。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>  <li><strong>idc-unit-id </strong></li> <p style="padding-left: 30px;">按照【<strong>机房管理单元ID</strong>】进行过滤，机房管理ID例如：568。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p> <li><strong>server-type-id</strong></li> <p style="padding-left: 30px;">按照【<strong>机器子类型</strong>】进行过滤，只包含以下几种：1:服务器, 2:Twins主机, 3:Twins子机,5:虚拟机, 6:2U4S主机, 7:2U4S子机,8 Rack主机,9 Rack子机，例如： 1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>status</strong></li> <p style="padding-left: 30px;">按照【<strong>设备状态</strong>】进行过滤，操作状态只包含：POWER_ON 设备开电，POWER_OFF 设备关电，RACK_OFF 未上架，MOVING 搬迁中 。例如： POWER_OFF。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>svr-is-special</strong></li> <p style="padding-left: 30px;">按照【<strong>是否</strong>】进行过滤，支持 0：自有，1 租用。例如： 1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>

   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为1000
   */
  Limit?: number
  /**
   * 传入目标服务，返回允许进行此服务的设备列表；可以和Filters一起使用。允许的值：('rackOn', 'powerOn', 'powerOff', 'rackOff', 'quit', 'moving'，'netDeviceCommon', 'serverCommon')
   */
  DstService?: string
}

/**
 * CreateSpeciallyQuitWorkOrder请求参数结构体
 */
export interface CreateSpeciallyQuitWorkOrderRequest {
  /**
   * 机房id
   */
  IdcId: number
  /**
   * 设备类型：otherDevice。此接口只支持其他设备
   */
  DeviceType: string
  /**
   * 交接方式 1.物流上门收货 2.客户上门自提
   */
  HandoverMethod: string
  /**
   * 物流上门收货必传
   */
  LogisticsReceipt?: LogisticsReceipt
  /**
   * 客户上门自提必传
   */
  CustomerReceipt?: CustomerReceipt
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 当设备类型为otherDevice，此参数必传
   */
  OtherDeviceList?: Array<OtherDevReceivingInfo>
}

/**
 * ConfirmCommonServiceWorkOrder请求参数结构体
 */
export interface ConfirmCommonServiceWorkOrderRequest {
  /**
   * 工单ID
   */
  OrderId: string
}

/**
 * 其他设备收货信息
 */
export interface OtherDevReceivingInfo {
  /**
   * 设备sn
   */
  DeviceSn: string
  /**
   * 'USB', '移动硬盘', '网络设备板卡', '网络设备模块', '服务器硬盘', '服务器内存', '其他'
   */
  TypeName: string
  /**
   * 厂商
   */
  Manufacturer?: string
  /**
   * 硬件备注
   */
  HardwareMemo?: string
}

/**
 * DescribeModelEvaluationWorkOrderDetail请求参数结构体
 */
export interface DescribeModelEvaluationWorkOrderDetailRequest {
  /**
   * 工单ID
   */
  OrderId: string
}

/**
 * 型号模板的选项
 */
export interface TemplateOption {
  /**
   * 选项名称
   */
  OptionName?: string
  /**
   * 腾讯的标准
   */
  Standard?: string
  /**
   * 腾讯标准的展示字段
   */
  StandardInfo?: string
  /**
   * 选项的唯一标识
   */
  OptionKey?: string
  /**
   * 输入的类型
   */
  InputType?: string
  /**
   * 输入值的类型
   */
  ValueType?: string
  /**
   * 是否符合腾讯标准的比较方式，-- 为不做比较
   */
  CompareType?: string
  /**
   * 下拉列表中填充的选项值
   */
  OptionValueSet?: Array<OptionValueItem>
  /**
   * 输入框中的占位的提示符
   */
  InputHint?: string
  /**
   * 输入框下方的提示文案
   */
  InputInfo?: string
  /**
   * 客户写入的值
   */
  OptionValue?: string
}

/**
 * CreateReceivingWorkOrder请求参数结构体
 */
export interface CreateReceivingWorkOrderRequest {
  /**
   * 机房id
   */
  IdcId: number
  /**
   * 设备类型，server, netDevice, wire, otherDevice
   */
  DeviceType: string
  /**
   * 进入时间
   */
  EntryTime: string
  /**
   * 1.收货-仅核对外包装完整和数量，不开箱 2.验收-开箱核对型号SN一致
   */
  ReceivingOperation: string
  /**
   * 是否快递寄件
   */
  IsExpressDelivery?: boolean
  /**
   * 快递寄件信息,快递寄件必填
   */
  ExpressInfo?: ExpressDelivery
  /**
   * 备注
   */
  Remark?: string
  /**
   * 服务器收货列表
   */
  ServerDeviceList?: Array<ServerReceivingInfo>
  /**
   * 网络设备收货列表
   */
  NetDeviceList?: Array<NetReceivingInfo>
  /**
   * 线材收货列表
   */
  WireDeviceList?: Array<WireReceivingInfo>
  /**
   * 其他设备收货列表
   */
  OtherDeviceList?: Array<OtherDevReceivingInfo>
}

/**
 * DescribeWorkOrderStatistics请求参数结构体
 */
export type DescribeWorkOrderStatisticsRequest = null

/**
 * DescribeResourceUsage请求参数结构体
 */
export interface DescribeResourceUsageRequest {
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
}

/**
 * 物流上门收货信息
 */
export interface LogisticsReceipt {
  /**
   * 物流预计上门时间
   */
  LogisticsArrivalTime: string
  /**
   * 物流公司名称
   */
  LogisticsCompany: string
  /**
   * 物流联系人
   */
  LogisticsStuff: string
  /**
   * 物流电话
   */
  LogisticsStuffContact: string
  /**
   * 收货人电话
   */
  ReceiverContact: string
  /**
   * 收货人姓名
   */
  ReceiverName: string
  /**
   * 收货地址
   */
  ShippingAddress: string
}

/**
 * CreateCommonServiceWorkOrder请求参数结构体
 */
export interface CreateCommonServiceWorkOrderRequest {
  /**
   * 设备及位置信息列表
   */
  DevicePositionSet: Array<DevicePosition>
  /**
   * 服务级别，只支持传入 1、2、3，分别对应 L1、L2、L3
   */
  ServiceLevel: number
  /**
   * 操作预授权
   */
  PreAuthorization: boolean
  /**
   * 业务联系人
   */
  ContactName: string
  /**
   * 联系人电话
   */
  ContactPhone: string
  /**
   * 设备类型 server 服务器，netDevice 网络设备
   */
  DeviceType: string
  /**
   * 操作说明
   */
  Instructions: string
}

/**
 * CreateCommonServiceWorkOrder返回参数结构体
 */
export interface CreateCommonServiceWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIdcUnitDetail请求参数结构体
 */
export interface DescribeIdcUnitDetailRequest {
  /**
   * 机房管理单元ID
   */
  IdcUnitId?: number
}

/**
 * DescribeAvailableModelList请求参数结构体
 */
export interface DescribeAvailableModelListRequest {
  /**
   * 机房ID
   */
  IdcId: number
  /**
   * server 服务器，netDevice 网络设备
   */
  DeviceType: string
}

/**
 * CreatePersonnelVisitWorkOrder返回参数结构体
 */
export interface CreatePersonnelVisitWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快递寄件信息,快递寄件必填
 */
export interface ExpressDelivery {
  /**
   * 物流公司
   */
  LogisticsCompany: string
  /**
   * 快递单号
   */
  ExpressNumber: string
}

/**
 * DescribeModel请求参数结构体
 */
export interface DescribeModelRequest {
  /**
   * 服务器设备型号
   */
  DevModel: string
  /**
   * 园区ID
   */
  CampusId: number
  /**
   * 设备类型，服务器传入 server，网络设备传入 netDevice
   */
  DeviceType: string
  /**
   * 是否只返回已评估的版本
   */
  Checked?: boolean
}

/**
 * 带有园区评估记录的型号详情
 */
export interface ModelVersionDetail {
  /**
   * 版本号
   */
  Version?: string
  /**
   * 0 代表在当前园区没评估过，1 代表完全满足IDC准入标准 2 代表存在托管风险 3 代表不满足IDC准入标准
   */
  CheckResult?: number
  /**
   * 型号各个配置项的详情
   */
  OptionSet?: Array<TemplateOption>
  /**
   * 设备型号名称及版本
   */
  ModelVersion?: string
}

/**
 * CreateRackOffWorkOrder请求参数结构体
 */
export interface CreateRackOffWorkOrderRequest {
  /**
   * 机房id
   */
  IdcId: number
  /**
   * 设备类型，server, netDevice
   */
  DeviceType: string
  /**
   * 下架人员 1.自行解决 2.由腾讯IDC负责
   */
  StuffOption: string
  /**
   * 关电确认 1.授权时关电 2.关电前需要确认
   */
  IsPowerOffConfirm: string
  /**
   * 设备sn列表
   */
  DeviceSnList: Array<string>
  /**
   * 自行解决必填
   */
  SelfOperationInfo?: SelfOperation
  /**
   * 关电前需要确认时必填
   */
  PowerOffConfirmInfo?: PowerOffConfirm
  /**
   * 备注
   */
  Remark?: string
}

/**
 * 已通过设备型号评估的型号信息
 */
export interface AvailableModelVersion {
  /**
   * 带有版本号的设备型号
   */
  ModelVersion?: string
  /**
   * 设备高度
   */
  DevHeight?: string
  /**
   * 设备类型，server 服务器，netDevice 网络设备
   */
  DeviceType?: string
}

/**
 * 客户上门自提信息
 */
export interface CustomerReceipt {
  /**
   * 自提人员姓名
   */
  PickUpStuff: string
  /**
   * 自提人电话
   */
  PickUpStuffContact: string
  /**
   * 自提人身份证号
   */
  PickUpStuffIDCard: string
  /**
   * 自提时间
   */
  PickUpTime: string
}

/**
 * 围笼
 */
export interface Cage {
  /**
   * 围笼名称
   */
  CageName: string
  /**
   * 围笼审核人账号ID
   */
  CheckerSet: Array<string>
}

/**
 * 关电确认信息
 */
export interface PowerOffConfirm {
  /**
   * 联系人
   */
  ConfirmContact: string
  /**
   * 联系人电话
   */
  ConfirmContactNumber: string
}

/**
 * 设备上架信息
 */
export interface DeviceRackOn {
  /**
   * 设备sn
   */
  DeviceSn: string
  /**
   * 目标机架
   */
  DstRackName: string
  /**
   * 目标机位,服务器必传,网络设备不用传
   */
  DstPositionCode?: string
  /**
   * 设备ip
   */
  DstIp?: string
}

/**
 * DescribeModelTemplate返回参数结构体
 */
export interface DescribeModelTemplateResponse {
  /**
   * 该型号模板的选项列表
   */
  TemplateDetail?: Array<TemplateOption>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkOrderList请求参数结构体
 */
export interface DescribeWorkOrderListRequest {
  /**
   * 过滤条件。支持：service-type、order-type、order-status、order-id
   */
  Filters?: Array<Filter>
  /**
   * 通过sn过滤工单，上限10个
   */
  SnList?: Array<string>
  /**
   * 起始
   */
  Offset?: number
  /**
   * 长度
   */
  Limit?: number
}

/**
 * DescribeWorkOrderTypes返回参数结构体
 */
export interface DescribeWorkOrderTypesResponse {
  /**
   * 已收藏的工单类型列表
   */
  CollectedWorkOderTypeSet?: Array<WorkOrderTypeDetail>
  /**
   * 全部工单类型列表
   */
  WorkOrderFamilySet?: Array<WorkOrderFamilyDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机架用量分布
 */
export interface Distribution {
  /**
   * 机架编号
   */
  RackNumber?: string
  /**
   * 机架的用量分布
   */
  RackUsageSet?: Array<RackUsage>
}

/**
 * 机架的信息
 */
export interface Rack {
  /**
   * 机架名称
   */
  RackName?: string
  /**
   * 机架所属的机房管理单元ID
   */
  IdcUnitId?: number
  /**
   * 机架所属的机房管理单元名称
   */
  IdcUnitName?: string
  /**
   * 机架所属的机房名称
   */
  IdcName?: string
  /**
   * 机架所属的机房ID
   */
  IdcId?: number
  /**
   * 机架ID
   */
  RackId?: number
  /**
   * 是否开电
   */
  IsPowerOn?: boolean
  /**
   * 机架最近一次开电时间，YYYY-MM-DD 格式
   */
  RackOpenTime?: string
  /**
   * 托管类型
   */
  HostingType?: string
}

/**
 * DescribePositionStatusSummary请求参数结构体
 */
export interface DescribePositionStatusSummaryRequest {
  /**
   * <li><strong>rack-id</strong></li> <p style="padding-left: 30px;">按照【<strong>机架ID</strong>】进行过滤。例如：15082。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;"></p> <li><strong> rack-name</strong></li> <p style="padding-left: 30px;">按照【<strong>机架名称</strong>】进行过滤，机架名称例如：M301-E10。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p> <li><strong> idc-id</strong></li> <p style="padding-left: 30px;">按照【<strong>机房ID</strong>】进行过滤，机房ID例如：159。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>  <li><strong>idc-unit-id </strong></li> <p style="padding-left: 30px;">按照【<strong>机房管理单元ID</strong>】进行过滤，机房管理ID例如：568。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p> <li><strong>position-status</strong></li> <p style="padding-left: 30px;">按照【<strong>机位状态</strong>】进行过滤，机位状态只包含以下四种：机位状态,0 空闲,1 已用,2 不可用,3 预占用,4 预留，例如： 0。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p> <li><strong>op-status</strong></li> <p style="padding-left: 30px;">按照【<strong>操作状态</strong>】进行过滤，操作状态只包含两种：FINISH 操作完成，PENDING 操作中，例如： PENDING。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
   */
  Filters?: Array<Filter>
}

/**
 * DescribeWorkOrderTypes请求参数结构体
 */
export type DescribeWorkOrderTypesRequest = null

/**
 * CreateRackOnWorkOrder请求参数结构体
 */
export interface CreateRackOnWorkOrderRequest {
  /**
   * 机房id
   */
  IdcId: number
  /**
   * 设备类型，server, netDevice
   */
  DeviceType: string
  /**
   * 上架人员 1.自行解决 2.由腾讯IDC负责
   */
  StuffOption: string
  /**
   * 上架后是否开电
   */
  WithPowerOn: boolean
  /**
   * 服务器收货列表
   */
  DeviceRackOnList: Array<DeviceRackOn>
  /**
   * 自行解决必填
   */
  SelfOperationInfo?: SelfOperation
}

/**
 * 网络设备收货详情
 */
export interface NetReceivingInfo {
  /**
   * 设备sn
   */
  DeviceSn: string
  /**
   * 设备型号-版本
   */
  ModelVersion: string
  /**
   * 硬件备注
   */
  HardwareMemo?: string
  /**
   * 厂商
   */
  Manufacturer?: string
}

/**
 * DescribeCampusList返回参数结构体
 */
export interface DescribeCampusListResponse {
  /**
   * 客户可操作的园区列表
   */
  CampusSet?: Array<Campus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 线材收货信息
 */
export interface WireReceivingInfo {
  /**
   * '光纤', '网线', '电源线'
   */
  TypeName: string
  /**
   * 数量
   */
  Quantity: number
  /**
   * '箱', '卷', '套'
   */
  Unit: string
  /**
   * 收货凭证号
   */
  ReceiptNumber: string
  /**
   * 硬件备注
   */
  HardwareMemo?: string
}

/**
 * DescribeModelTemplate请求参数结构体
 */
export interface DescribeModelTemplateRequest {
  /**
   * 型号类型，只支持传入 server 和 netDevice
   */
  DeviceType: string
}

/**
 * 设备类工单的基础历史入参信息
 */
export interface DeviceOrderBaseInfo {
  /**
   * 机房id
   */
  IdcId?: number
  /**
   * 机房名称
   */
  IdcName?: string
  /**
   * 设备类型
   */
  DeviceType?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 1.收货-仅核对外包装完整和数量，不开箱 2.验收-开箱核对型号SN一致
   */
  ReceivingOperation?: string
  /**
   * 设备收货-进入时间
   */
  EntryTime?: string
  /**
   * 设备收货-是否快递寄件
   */
  IsExpressDelivery?: boolean
  /**
   * 设备收货-快递寄件信息
   */
  ExpressInfo?: ExpressDelivery
  /**
   * 上/下架人员 1.自行解决 2.由腾讯IDC负责
   */
  StuffOption?: string
  /**
   * 上/下架自行解决信息
   */
  SelfOperationInfo?: SelfOperation
  /**
   * 上架后开电
   */
  WithPowerOn?: boolean
  /**
   * 关电确认 1.授权时关电 2.关电前需要确认
   */
  IsPowerOffConfirm?: string
  /**
   * 关电前需要确认信息
   */
  PowerOffConfirmInfo?: PowerOffConfirm
  /**
   * 退出交接方式 1.物流上门收货 2.客户上门自提
   */
  HandoverMethod?: string
  /**
   * 客户上门自提信息
   */
  CustomerReceipt?: CustomerReceipt
  /**
   * 物流上门收货信息
   */
  LogisticsReceipt?: LogisticsReceipt
}

/**
 * CreateMovingWorkOrder返回参数结构体
 */
export interface CreateMovingWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 园区信息
 */
export interface Campus {
  /**
   * 园区ID
   */
  CampusId?: number
  /**
   * 园区名称
   */
  CampusName?: string
}

/**
 * 工单的常用信息返回
 */
export interface WorkOrderData {
  /**
   * 工单号
   */
  WorkOrderId?: string
  /**
   * 服务类型，一个服务可能会产生多个工单
   */
  ServiceType?: string
  /**
   * 工单类型
   */
  OrderType?: string
  /**
   * 工单状态
   */
  OrderStatus?: string
  /**
   * 工单创建人
   */
  Creator?: string
  /**
   * 工单创建时间
   */
  CreateTime?: string
  /**
   * 工单完成时间
   */
  FinishTime?: string
}

/**
 * 网络设备型号详情
 */
export interface NetDeviceModel {
  /**
   * 版本号
   */
  Version?: string
  /**
   * 型号和版本的组合名称
   */
  ModelVersion?: string
  /**
   * 型号名
   */
  DevModel?: string
  /**
   * 宽度
   */
  DevWidth?: string
  /**
   * 深度
   */
  DevDepth?: string
  /**
   * 重量
   */
  DevWeight?: string
  /**
   * 是否携带挂耳
   */
  MountEar?: string
  /**
   * 是否符合CCC认证
   */
  AccordCCC?: string
  /**
   * 是否通过入网许可认证
   */
  PassNetwork?: string
  /**
   * 电源接口型号
   */
  PowerportType?: string
  /**
   * 电源模块
   */
  PowerModule?: string
  /**
   * 电源模块数量
   */
  PowermoduleNum?: string
  /**
   * 电源模块位置
   */
  PowermodulePosition?: string
  /**
   * 高压直流自适应
   */
  HighVoltageAdapt?: string
  /**
   * 实际工作功耗(W)
   */
  PowerEnergy?: string
  /**
   * 进风口位置
   */
  InwindPosition?: string
  /**
   * 出风口位置
   */
  OutwindPosition?: string
  /**
   * 业务端口位置
   */
  BusinessPortPosition?: string
  /**
   * 带有理线器
   */
  LineManager?: string
  /**
   * 0 代表在当前园区没评估过，1 代表完全满足IDC准入标准  2 代表存在托管风险  3 代表不满足IDC准入标准
   */
  CheckResult?: number
  /**
   * 设备高度
   */
  DevHeight?: string
}

/**
 * 型号以及版本号
 */
export interface ModelVersion {
  /**
   * 型号名称
   */
  DevModel: string
  /**
   * 版本
   */
  Version: string
}

/**
 * DescribeResourceUsage返回参数结构体
 */
export interface DescribeResourceUsageResponse {
  /**
   * 托管服务器数量
   */
  HostingServerCount?: number
  /**
   * 租用服务器数量
   */
  RentServerCount?: number
  /**
   * 网络设备数量
   */
  NetDeviceCount?: number
  /**
   * 机架总数
   */
  RackTotalCount?: number
  /**
   * 开电机架总数
   */
  RackPowerOnCount?: number
  /**
   * 机位使用数量
   */
  PositionUsedCount?: number
  /**
   * 机位总数
   */
  PositionTotalCount?: number
  /**
   * 机架开电率，保留一位小数
   */
  RackPowerOnRate?: string
  /**
   * 机位使用率，
   */
  PositionUsedRate?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRackOffWorkOrder返回参数结构体
 */
export interface CreateRackOffWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机架用量
 */
export interface RackUsage {
  /**
   * 机架ID
   */
  RackId?: number
  /**
   * 已使用的机位数量
   */
  UsedNum?: number
  /**
   * 空闲机位数量
   */
  UnusedNum?: number
  /**
   * 机架简称
   */
  RackShortName?: string
  /**
   * 机位总数
   */
  TotalNum?: number
  /**
   * 机位使用率
   */
  UsedRate?: number
}

/**
 * 通用服务的基本信息
 */
export interface CommonServiceBaseInfo {
  /**
   * 机房名称
   */
  IdcName?: string
  /**
   * 业务联系人
   */
  ContactName?: string
  /**
   * 联系人电话
   */
  ContactPhone?: string
  /**
   * 操作说明
   */
  Instructions?: string
  /**
   * 1 、2 、3 分别代表 L1、L2、L3
   */
  ServiceLevel?: number
  /**
   * 操作预授权
   */
  PreAuthorization?: boolean
}

/**
 * CreatePowerOnWorkOrder返回参数结构体
 */
export interface CreatePowerOnWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRackOnWorkOrder返回参数结构体
 */
export interface CreateRackOnWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePersonnelVisitWorkOrderDetail请求参数结构体
 */
export interface DescribePersonnelVisitWorkOrderDetailRequest {
  /**
   * 工单ID
   */
  OrderId: string
}

/**
 * DescribeCustomerInfo返回参数结构体
 */
export interface DescribeCustomerInfoResponse {
  /**
   * 客户信息
   */
  CustomerInfo?: CustomerInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务器信息
 */
export interface Device {
  /**
   * 设备 SN 码
   */
  Sn?: string
  /**
   * 设备型号版本
   */
  ModelVersion?: string
  /**
   * 设备固资号。只有设备类型为服务器时才返回
   */
  AssetId?: string
  /**
   * 0 自有，1 租用。只有设备类型为服务器时才返回
   */
  SvrIsSpecial?: number
  /**
   * IP。
   */
  Ip?: string
  /**
   * 设备所属的机房名称
   */
  IdcName?: string
  /**
   * 设备所属的机房ID
   */
  IdcId?: number
  /**
   * 设备所属的机房管理单元ID
   */
  IdcUnitId?: number
  /**
   * 设备所属的机房管理单元名称
   */
  IdcUnitName?: string
  /**
   * 已上架设备所在的机架ID，未上架设备不返回
   */
  RackId?: number
  /**
   * 服务器类型， 1 代表服务器， 7 代表 2U4S。只有设备类型为服务器时才返回
   */
  ServerTypeId?: number
  /**
   * 已上架设备所在的机架名称，未上架设备不返回
   */
  RackName?: string
  /**
   * 已上架设备所在的机位编号，未上架设备不返回。只有设备类型为服务器时才返回
   */
  PositionCode?: number
  /**
   * 设备状态：POWER_ON 已开电 POWER_OFF 未开电 RACK_OFF 未上架 MOVING 搬迁中
   */
  Status?: string
  /**
   * 设备最近一次的开电时间，YYYY-MM-DD 格式。
   */
  PowerOnTime?: string
  /**
   * 设备最近一次的上架时间，YYYY-MM-DD 格式。
   */
  OnshelfDate?: string
  /**
   * 设备类型 server 服务器，netDevice 网络设备
   */
  DeviceType?: string
  /**
   * 厂商
   */
  Manufacturer?: string
  /**
   * 其他设备-设备子类型
   */
  TypeName?: string
  /**
   * 硬件备注
   */
  HardwareMemo?: string
}

/**
 * CreateServerModel返回参数结构体
 */
export interface CreateServerModelResponse {
  /**
   * 型号名称
   */
  DevModel?: string
  /**
   * 版本
   */
  Version?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCampusList请求参数结构体
 */
export type DescribeCampusListRequest = null

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Name: string
  /**
   * 字段的过滤值。
   */
  Values: Array<string>
}

/**
 * 型号选项下拉框中的选项值
 */
export interface OptionValueItem {
  /**
   * 选项的值
   */
  OptionValue: string
  /**
   * 是否默认选中
   */
  Selected: boolean
}

/**
 * 机房管理单元
 */
export interface IdcUnit {
  /**
   * 机房管理单元 ID
   */
  IdcUnitId?: number
  /**
   * 机房管理单元名称
   */
  IdcUnitName?: string
  /**
   * 围笼列表
   */
  CageSet?: Array<Cage>
}

/**
 * ModifyWorkOrderTypeCollectFlag返回参数结构体
 */
export interface ModifyWorkOrderTypeCollectFlagResponse {
  /**
   * 工单类型当前的收藏状态
   */
  CurrentCollectFlag?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRacksDistribution请求参数结构体
 */
export interface DescribeRacksDistributionRequest {
  /**
   * 机房管理单元ID
   */
  IdcUnitId: number
}

/**
 * DescribeCommonServiceWorkOrderDetail返回参数结构体
 */
export interface DescribeCommonServiceWorkOrderDetailResponse {
  /**
   * 进度
   */
  StepSet?: Array<OrderStep>
  /**
   * 基本信息
   */
  BaseInfo?: CommonServiceBaseInfo
  /**
   * 设备信息
   */
  DeviceSet?: Array<DevicePosition>
  /**
   * 工单状态
   */
  OrderStatus?: string
  /**
   * 拒绝原因
   */
  RejectReason?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWorkOrderTypeCollectFlag请求参数结构体
 */
export interface ModifyWorkOrderTypeCollectFlagRequest {
  /**
   * 工单类型的唯一英文标识
   */
  WorkOrderType: string
}

/**
 * CreateNetDeviceModel返回参数结构体
 */
export interface CreateNetDeviceModelResponse {
  /**
   * 型号名称
   */
  DevModel?: string
  /**
   * 版本号
   */
  Version?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCommonServiceWorkOrderDetail请求参数结构体
 */
export interface DescribeCommonServiceWorkOrderDetailRequest {
  /**
   * 工单ID
   */
  OrderId: string
}

/**
 * 服务器收货信息
 */
export interface ServerReceivingInfo {
  /**
   * 设备sn
   */
  DeviceSn: string
  /**
   * 设备型号-版本
   */
  ModelVersion: string
  /**
   * 需要万兆机位
   */
  Need10GbSlot?: string
  /**
   * 需要直流电
   */
  NeedDCPower?: string
  /**
   * 需要外网
   */
  NeedExtranet?: string
  /**
   * 需要虚拟化
   */
  NeedVirtualization?: string
  /**
   * 硬件备注
   */
  HardwareMemo?: string
}

/**
 * 客户信息
 */
export interface CustomerInfo {
  /**
   * 公司全称
   */
  CustomerName?: string
  /**
   * 公司简称
   */
  ShortCustomerName?: string
  /**
   * 是否全托管用户
   */
  WholeFlag?: boolean
}

/**
 * 型号和对应的版本数量
 */
export interface ModelVersionCount {
  /**
   * 型号名称
   */
  DevModel?: string
  /**
   * 版本数量
   */
  VersionCount?: number
}

/**
 * CreateModelEvaluationWorkOrder返回参数结构体
 */
export interface CreateModelEvaluationWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkOrderList返回参数结构体
 */
export interface DescribeWorkOrderListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 查询结果
   */
  WorkOrderSet?: Array<WorkOrderData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAvailableModelList返回参数结构体
 */
export interface DescribeAvailableModelListResponse {
  /**
   * 机房内可用的设备型号及版本列表
   */
  ModelVersionSet?: Array<AvailableModelVersion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 到访人员
 */
export interface Personnel {
  /**
   * 证件号码
   */
  IDCardNumber: string
  /**
   * 证件类型。对应关系如下：IDENTITY_CARD: 身份证,
HONG_KONG_AND_MACAO_PASS: 港澳通行证',
PASSPORT: 护照,
DRIVING_LICENSE: 驾照,
OTHER: 其他
   */
  IDCardType: string
  /**
   * 公司名称
   */
  Company: string
  /**
   * 语言。对应关系：ENGLISH: 英文, CHINESE: 中文
   */
  LanguageType: string
  /**
   * 姓名
   */
  Name: string
  /**
   * 电话
   */
  TelNumber: string
  /**
   * 职位
   */
  Position?: string
  /**
   * 微信
   */
  Wechat?: string
  /**
   * 邮箱
   */
  Email?: string
}

/**
 * DescribeWorkOrderStatistics返回参数结构体
 */
export interface DescribeWorkOrderStatisticsResponse {
  /**
   * 总工单数量
   */
  TotalNum?: number
  /**
   * 进行中的工单数量
   */
  ProcessingNum?: number
  /**
   * 待确认的工单数量
   */
  ConfirmingNum?: number
  /**
   * 完成的工单数量
   */
  FinishNum?: number
  /**
   * 拒绝的工单数量
   */
  RejectNum?: number
  /**
   * 异常的工单数量
   */
  ExceptionNum?: number
  /**
   * 客户取消的工单数量
   */
  CancelNum?: number
  /**
   * 围笼进出审核的工单数量
   */
  CheckingNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReceivingWorkOrder返回参数结构体
 */
export interface CreateReceivingWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePersonnelVisitWorkOrderDetail返回参数结构体
 */
export interface DescribePersonnelVisitWorkOrderDetailResponse {
  /**
   * 工单进度
   */
  StepSet?: Array<OrderStep>
  /**
   * 工单详情
   */
  BaseInfo?: PersonnelVisitBaseInfo
  /**
   * 到访人员详情
   */
  PersonnelSet?: Array<Personnel>
  /**
   * 工单状态 订单状态, processing 处理中 ，reject 已拒绝 ，finish 已完成，exception 异常
   */
  OrderStatus?: string
  /**
   * 拒绝原因
   */
  RejectReason?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateQuitWorkOrder请求参数结构体
 */
export interface CreateQuitWorkOrderRequest {
  /**
   * 机房id
   */
  IdcId: number
  /**
   * 设备类型，server, netDevice, otherDevice
   */
  DeviceType: string
  /**
   * 下架选择 1.自行解决 2.由腾讯IDC负责
   */
  StuffOption: string
  /**
   * 关电确认 1.授权时关电 2.关电前需要确认
   */
  IsPowerOffConfirm: string
  /**
   * 设备sn列表
   */
  DeviceSnList: Array<string>
  /**
   * 交接方式 1.物流上门收货 2.客户上门自提
   */
  HandoverMethod: string
  /**
   * 自行解决必填
   */
  SelfOperationInfo?: SelfOperation
  /**
   * 关电前需要确认时必填
   */
  PowerOffConfirmInfo?: PowerOffConfirm
  /**
   * 备注
   */
  Remark?: string
  /**
   * 物流上门收货必传
   */
  LogisticsReceipt?: LogisticsReceipt
  /**
   * 客户上门自提必传
   */
  CustomerReceipt?: CustomerReceipt
}

/**
 * 机位状态及对应的数量
 */
export interface PositionStatusItem {
  /**
   * 状态值
   */
  PositionStatus?: number
  /**
   * 对应的机位数量
   */
  Count?: number
}

/**
 * DescribeModel返回参数结构体
 */
export interface DescribeModelResponse {
  /**
   * 设备型号详情
   */
  ModelSet?: Array<ModelVersionDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePowerOnWorkOrder请求参数结构体
 */
export interface CreatePowerOnWorkOrderRequest {
  /**
   * 机房id
   */
  IdcId: number
  /**
   * 设备类型，server, netDevice
   */
  DeviceType: string
  /**
   * 设备sn列表
   */
  DeviceSnList: Array<string>
}

/**
 * 工单详情中的工单流程步骤
 */
export interface OrderStep {
  /**
   * 步骤名
   */
  StepName?: string
  /**
   * 处理人
   */
  OwnerName?: string
  /**
   * 完成时间
   */
  FinishTime?: string
  /**
   * 此步骤状态
   */
  StepStatus?: string
}

/**
 * CreatePowerOffWorkOrder返回参数结构体
 */
export interface CreatePowerOffWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSpeciallyQuitWorkOrder返回参数结构体
 */
export interface CreateSpeciallyQuitWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工单的设备信息
 */
export interface DeviceHistory {
  /**
   * 设备sn
   */
  Sn?: string
  /**
   * 设备类型
   */
  DeviceType?: string
  /**
   * 机架名
   */
  RackName?: string
  /**
   * 机位号
   */
  PositionCode?: number
  /**
   * 机房id
   */
  IdcId?: number
  /**
   * 机房名称
   */
  IdcName?: string
  /**
   * 机房管理单元id
   */
  IdcUnitId?: number
  /**
   * 机房管理单元名称
   */
  IdcUnitName?: string
  /**
   * 固资号
   */
  AssetId?: string
  /**
   * 设备型号-版本，只有收货单详情返回
   */
  ModelVersion?: string
  /**
   * 设备高度，只有收货单详情返回
   */
  DeviceHeight?: string
  /**
   * 需要万兆机位，只有收货单详情返回
   */
  Need10GbSlot?: string
  /**
   * 需要直流电，只有收货单详情返回
   */
  NeedDCPower?: string
  /**
   * 需要外网，只有收货单详情返回
   */
  NeedExtranet?: string
  /**
   * 需要虚拟化，只有收货单详情返回
   */
  NeedVirtualization?: string
  /**
   * 厂商,只有收货单详情返回
   */
  Manufacturer?: string
  /**
   * 硬件备注
   */
  HardwareMemo?: string
  /**
   * 目标机架
   */
  DstRackName?: string
  /**
   * 目标机位
   */
  DstPositionCode?: string
  /**
   * 目标ip
   */
  DstIp?: string
  /**
   * 设备子类型, 其他设备/线材用
   */
  TypeName?: string
  /**
   * 线材-数量，只有收货单详情返回
   */
  Quantity?: number
  /**
   * 计量单位，，只有收货单详情返回，'箱', '卷', '套'
   */
  Unit?: string
  /**
   * 线材-收货凭证号，只有收货单详情返回
   */
  ReceiptNumber?: string
}

/**
 * 人员到访工单基本信息
 */
export interface PersonnelVisitBaseInfo {
  /**
   * 机房名称
   */
  IdcName?: string
  /**
   * 到访原因。到访原因，映射关系：DEVICE_MAINTENANCE 设备维护 DEVICE_MOVE 设备收货上下架 CHECK 盘点 OTHER 其他
   */
  VisitReason?: Array<string>
  /**
   * 到访原因
   */
  VisitRemark?: string
  /**
   * 到访结束时间
   */
  EnterStartTime?: string
  /**
   * 到访开始时间
   */
  EnterEndTime?: string
  /**
   * 机房管理单元列表
   */
  IdcUnitNameList?: Array<string>
}

/**
 * ConfirmCommonServiceWorkOrder返回参数结构体
 */
export interface ConfirmCommonServiceWorkOrderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePowerOffWorkOrder请求参数结构体
 */
export interface CreatePowerOffWorkOrderRequest {
  /**
   * 机房id
   */
  IdcId: number
  /**
   * 设备类型，server, netDevice
   */
  DeviceType: string
  /**
   * 关电确认，1.授权时关电 2.关电前需要确认
   */
  IsPowerOffConfirm: string
  /**
   * 设备sn列表
   */
  DeviceSnList: Array<string>
  /**
   * 关电前需要确认时必填
   */
  PowerOffConfirmInfo?: PowerOffConfirm
  /**
   * 备注
   */
  Remark?: string
}

/**
 * CreateQuitWorkOrder返回参数结构体
 */
export interface CreateQuitWorkOrderResponse {
  /**
   * 创建的工单信息
   */
  WorkOrderSet?: Array<WorkOrderTinyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备及位置信息
 */
export interface DevicePosition {
  /**
   * 设备SN
   */
  Sn: string
  /**
   * 机架名称
   */
  RackName: string
  /**
   * 机房管理单元ID
   */
  IdcUnitId: number
  /**
   * 机房名称
   */
  IdcName?: string
  /**
   * 机房管理单元名称
   */
  IdcUnitName?: string
  /**
   * 设备固资。只有服务器设备才需要这个值
   */
  AssetId?: string
  /**
   * 机位编号，只有服务器设备才需要传这个值
   */
  PositionCode?: number
  /**
   * server 代表服务器，netDevice 代表网络设备
   */
  DeviceType?: string
}

/**
 * DescribeRacksDistribution返回参数结构体
 */
export interface DescribeRacksDistributionResponse {
  /**
   * 机架的用量分布
   */
  DistributionSet?: Array<Distribution>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCustomerInfo请求参数结构体
 */
export type DescribeCustomerInfoRequest = null

/**
 * DescribeDeviceList返回参数结构体
 */
export interface DescribeDeviceListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 服务器列表
   */
  DeviceSet?: Array<Device>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceWorkOrderDetail请求参数结构体
 */
export interface DescribeDeviceWorkOrderDetailRequest {
  /**
   * 工单ID
   */
  OrderId: string
}

/**
 * DescribeModelEvaluationWorkOrderDetail返回参数结构体
 */
export interface DescribeModelEvaluationWorkOrderDetailResponse {
  /**
   * 工单进度
   */
  StepSet?: Array<OrderStep>
  /**
   * 工单详情
   */
  BaseInfo?: ModelEvaluationBaseInfo
  /**
   * 评估中的网络设备型号详情
   */
  NetDeviceModelSet?: Array<ModelVersionDetail>
  /**
   * 评估中的服务器型号详情
   */
  ServerModelSet?: Array<ModelVersionDetail>
  /**
   * 订单状态, process 处理中 ，reject 已拒绝 ，finish 已完成，exception 异常
   */
  OrderStatus?: string
  /**
   * 工单拒绝原因
   */
  RejectReason?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机房信息
 */
export interface Idc {
  /**
   * 机房名称
   */
  IdcName?: string
  /**
   * 机房ID
   */
  IdcId?: number
  /**
   * 机房管理单元详情列表
   */
  IdcUnitSet?: Array<IdcUnit>
}

/**
 * DescribeRacks返回参数结构体
 */
export interface DescribeRacksResponse {
  /**
   * 客户拥有的机架列表
   */
  RackSet?: Array<Rack>
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
 * DescribeRacks请求参数结构体
 */
export interface DescribeRacksRequest {
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
   */
  Limit?: number
  /**
   * 过滤条件

rack-id
按照机架id进行过滤。
类型：String
必选：否

rack-name
按照机架名称进行过滤。
类型：String
必选：否

idc-id
按照机房id进行过滤。
类型：String
必选：否

idc-unit-id
按照机房管理单元id过滤
类型： String
必选： 否

is-power-on
按照是否开电进行过滤，支持传入 0 和 1。1 代表开电，0 代表关电
类型： String
必选： 否

hosting-type
按照托管类型进行过滤。支持传入 CUSTOMER_MIX 代表客户混合，CUSTOMER_ONLY 代表客户独享 ，NOT_INIT 代表未初始化
类型： String
必选： 否


   */
  Filters?: Array<Filter>
  /**
   * 传入目标服务，返回允许进行此服务的机架列表；可以和Filters一起使用。允许的值：('rackPowerOn', 'rackPowerOff')
   */
  DstService?: string
}

/**
 * DescribeIdcs返回参数结构体
 */
export interface DescribeIdcsResponse {
  /**
   * 机房管理单元列表
   */
  IdcSet?: Array<Idc>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceWorkOrderDetail返回参数结构体
 */
export interface DescribeDeviceWorkOrderDetailResponse {
  /**
   * 工单ID
   */
  OrderId?: string
  /**
   * 服务类型
   */
  ServiceType?: string
  /**
   * 工单类型
   */
  OrderType?: string
  /**
   * 工单状态
   */
  OrderStatus?: string
  /**
   * 工单流程状态
   */
  StepSet?: Array<OrderStep>
  /**
   * 工单设备信息
   */
  DeviceSet?: Array<DeviceHistory>
  /**
   * 工单的入参信息
   */
  BaseInfo?: DeviceOrderBaseInfo
  /**
   * 工单的拒绝原因，工单状态为reject的时候返回
   */
  RejectReason?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
