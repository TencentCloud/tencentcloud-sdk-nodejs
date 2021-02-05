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
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * 项目详情
 */
export interface ProjectEntry {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 项目名称
   */
  ProjectName: string

  /**
   * 项目描述
   */
  ProjectDesc: string

  /**
   * 创建时间，unix时间戳
   */
  CreateTime: number

  /**
   * 更新时间，unix时间戳
   */
  UpdateTime: number
}

/**
 * DescribeModelDefinition返回参数结构体
 */
export interface DescribeModelDefinitionResponse {
  /**
   * 产品数据模板
   */
  Model?: ProductModelDefinition

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyStudioProduct返回参数结构体
 */
export interface ModifyStudioProductResponse {
  /**
   * 产品描述
   */
  Product?: ProductEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteStudioProduct返回参数结构体
 */
export interface DeleteStudioProductResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDeviceList返回参数结构体
 */
export interface GetDeviceListResponse {
  /**
      * 返回的设备列表, 注意列表设备的 DevicePsk 为空, 要获取设备的 DevicePsk 请使用 DescribeDevice
注意：此字段可能返回 null，表示取不到有效值。
      */
  Devices?: Array<DeviceInfo>

  /**
      * 产品下的设备总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ControlDeviceData请求参数结构体
 */
export interface ControlDeviceDataRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 属性数据, JSON格式字符串, 注意字段需要在物模型属性里定义
   */
  Data: string

  /**
   * 请求类型 , 不填该参数或者 desired 表示下发属性给设备,  reported 表示模拟设备上报属性
   */
  Method?: string

  /**
   * 设备ID，该字段有值将代替 ProductId/DeviceName , 通常情况不需要填写
   */
  DeviceId?: string

  /**
   * 上报数据UNIX时间戳(毫秒), 仅对Method:reported有效
   */
  DataTimestamp?: number
}

/**
 * DeleteLoRaFrequency返回参数结构体
 */
export interface DeleteLoRaFrequencyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTopicRule返回参数结构体
 */
export interface DeleteTopicRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModelDefinition请求参数结构体
 */
export interface ModifyModelDefinitionRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 数据模板定义
   */
  ModelSchema: string
}

/**
 * CreateStudioProduct返回参数结构体
 */
export interface CreateStudioProductResponse {
  /**
   * 产品描述
   */
  Product?: ProductEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CallDeviceActionSync请求参数结构体
 */
export interface CallDeviceActionSyncRequest {
  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义
   */
  ActionId: string

  /**
   * 输入参数
   */
  InputParams?: string
}

/**
 * EnableTopicRule返回参数结构体
 */
export interface EnableTopicRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyStudioProduct请求参数结构体
 */
export interface ModifyStudioProductRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 产品名称
   */
  ProductName: string

  /**
   * 产品描述
   */
  ProductDesc: string

  /**
   * 模型ID
   */
  ModuleId: number

  /**
   * 是否打开二进制转Json功能, 取值为字符串 true/false
   */
  EnableProductScript?: string
}

/**
 * CreateStudioProduct请求参数结构体
 */
export interface CreateStudioProductRequest {
  /**
   * 产品名称，名称不能和已经存在的产品名称重复。命名规则：[a-zA-Z0-9:_-]{1,32}
   */
  ProductName: string

  /**
   * 产品分组模板ID , ( 自定义模板填写1 , 控制台调用会使用预置的其他ID)
   */
  CategoryId: number

  /**
   * 产品类型 填写 ( 0 普通产品 )
   */
  ProductType: number

  /**
   * 加密类型 加密类型，1表示证书认证，2表示签名认证。
   */
  EncryptionType: string

  /**
   * 连接类型 可以填写 wifi cellular else
   */
  NetType: string

  /**
   * 数据协议 (1 使用物模型 2 为自定义)
   */
  DataProtocol: number

  /**
   * 产品描述
   */
  ProductDesc: string

  /**
   * 产品的项目ID
   */
  ProjectId: string
}

/**
 * 产品模型定义
 */
export interface ProductModelDefinition {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 模型定义
   */
  ModelDefine: string

  /**
   * 更新时间，秒级时间戳
   */
  UpdateTime: number

  /**
   * 创建时间，秒级时间戳
   */
  CreateTime: number

  /**
      * 产品所属分类的模型快照（产品创建时刻的）
注意：此字段可能返回 null，表示取不到有效值。
      */
  CategoryModel: string
}

/**
 * ReleaseStudioProduct请求参数结构体
 */
export interface ReleaseStudioProductRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 产品DevStatus
   */
  DevStatus: string
}

/**
 * SearchTopicRule请求参数结构体
 */
export interface SearchTopicRuleRequest {
  /**
   * 规则名
   */
  RuleName: string
}

/**
 * DescribeDeviceData请求参数结构体
 */
export interface DescribeDeviceDataRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 设备ID，该字段有值将代替 ProductId/DeviceName
   */
  DeviceId?: string
}

/**
 * DescribeStudioProduct返回参数结构体
 */
export interface DescribeStudioProductResponse {
  /**
   * 产品详情
   */
  Product?: ProductEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProject返回参数结构体
 */
export interface DescribeProjectResponse {
  /**
   * 返回信息
   */
  Project?: ProjectEntryEx

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeviceData
 */
export interface DeviceData {
  /**
      * 设备证书，用于 TLS 建立链接时校验客户端身份。采用非对称加密时返回该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceCert: string

  /**
      * 设备名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceName: string

  /**
      * 设备私钥，用于 TLS 建立链接时校验客户端身份，腾讯云后台不保存，请妥善保管。采用非对称加密时返回该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DevicePrivateKey: string

  /**
      * 对称加密密钥，base64编码。采用对称加密时返回该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DevicePsk: string
}

/**
 * 设备历史数据结构
 */
export interface DeviceDataHistoryItem {
  /**
   * 时间点，毫秒时间戳
   */
  Time: string

  /**
   * 字段取值
   */
  Value: string
}

/**
 * 产品详情
 */
export interface ProductEntry {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 产品名称
   */
  ProductName: string

  /**
   * 产品分组模板ID
   */
  CategoryId: number

  /**
   * 加密类型
   */
  EncryptionType: string

  /**
   * 连接类型
   */
  NetType: string

  /**
   * 数据协议
   */
  DataProtocol: number

  /**
   * 产品描述
   */
  ProductDesc: string

  /**
   * 状态
   */
  DevStatus: string

  /**
   * 创建时间
   */
  CreateTime: number

  /**
   * 更新时间
   */
  UpdateTime: number

  /**
   * 区域
   */
  Region: string

  /**
   * 产品类型
   */
  ProductType: number

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 产品ModuleId
   */
  ModuleId: number

  /**
      * 是否使用脚本进行二进制转json功能 可以取值 true / false
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableProductScript: string
}

/**
 * 项目详情
 */
export interface ProjectEntryEx {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 项目名称
   */
  ProjectName: string

  /**
   * 项目描述
   */
  ProjectDesc: string

  /**
   * 项目创建时间，unix时间戳
   */
  CreateTime: number

  /**
   * 项目更新时间，unix时间戳
   */
  UpdateTime: number

  /**
   * 产品数量
   */
  ProductCount: number

  /**
   * NativeApp数量
   */
  NativeAppCount: number

  /**
   * WebApp数量
   */
  WebAppCount: number

  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string
}

/**
 * DescribeLoRaFrequency请求参数结构体
 */
export interface DescribeLoRaFrequencyRequest {
  /**
   * 频点唯一ID
   */
  FreqId?: string
}

/**
 * DeleteDevice请求参数结构体
 */
export interface DeleteDeviceRequest {
  /**
   * 产品ID。
   */
  ProductId: string

  /**
   * 设备名称。
   */
  DeviceName: string
}

/**
 * DeleteLoRaFrequency请求参数结构体
 */
export interface DeleteLoRaFrequencyRequest {
  /**
   * 频点唯一ID
   */
  FreqId?: string
}

/**
 * ListEventHistory请求参数结构体
 */
export interface ListEventHistoryRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 搜索的事件类型：alert 表示告警，fault 表示故障，info 表示信息，为空则表示查询上述所有类型事件
   */
  Type?: string

  /**
   * 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h
   */
  StartTime?: number

  /**
   * 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间
   */
  EndTime?: number

  /**
   * 搜索上下文, 用作查询游标
   */
  Context?: string

  /**
   * 单次获取的历史数据项目的最大数量, 缺省10
   */
  Size?: number

  /**
   * 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。
   */
  EventId?: string
}

/**
 * ReleaseStudioProduct返回参数结构体
 */
export interface ReleaseStudioProductResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLoRaGateway请求参数结构体
 */
export interface DeleteLoRaGatewayRequest {
  /**
   * LoRa 网关 Id
   */
  GatewayId: string
}

/**
 * LoRa自定义频点信息
 */
export interface LoRaFrequencyEntry {
  /**
   * 频点唯一ID
   */
  FreqId: string

  /**
   * 频点名称
   */
  FreqName: string

  /**
   * 频点描述
   */
  Description: string

  /**
   * 数据上行信道
   */
  ChannelsDataUp: Array<number>

  /**
   * 数据下行信道RX1
   */
  ChannelsDataRX1: Array<number>

  /**
   * 数据下行信道RX2
   */
  ChannelsDataRX2: Array<number>

  /**
   * 入网上行信道
   */
  ChannelsJoinUp: Array<number>

  /**
   * 入网下行RX1信道
   */
  ChannelsJoinRX1: Array<number>

  /**
   * 入网下行RX2信道
   */
  ChannelsJoinRX2: Array<number>

  /**
   * 创建时间
   */
  CreateTime: number
}

/**
 * SearchTopicRule返回参数结构体
 */
export interface SearchTopicRuleResponse {
  /**
   * 搜索到的规则总数
   */
  TotalCnt?: number

  /**
   * 规则信息列表
   */
  Rules?: Array<TopicRuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicRule请求参数结构体
 */
export interface DescribeTopicRuleRequest {
  /**
   * 规则名称。
   */
  RuleName: string
}

/**
 * CallDeviceActionSync返回参数结构体
 */
export interface CallDeviceActionSyncResponse {
  /**
   * 调用Id
   */
  ClientToken?: string

  /**
      * 输出参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutputParams?: string

  /**
   * 返回状态
   */
  Status?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLoRaGateway请求参数结构体
 */
export interface CreateLoRaGatewayRequest {
  /**
   * LoRa 网关Id
   */
  GatewayId: string

  /**
   * 网关名称
   */
  Name: string

  /**
   * 详情描述
   */
  Description: string

  /**
   * 位置坐标
   */
  Location: LoRaGatewayLocation

  /**
   * 位置信息
   */
  Position?: string

  /**
   * 位置详情
   */
  PositionDetails?: string

  /**
   * 是否公开
   */
  IsPublic?: boolean

  /**
   * 频点ID
   */
  FrequencyId?: string
}

/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * 返回信息
   */
  Project?: ProjectEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTopicRule请求参数结构体
 */
export interface ModifyTopicRuleRequest {
  /**
   * 规则名称
   */
  RuleName: string

  /**
   * 替换的规则包体
   */
  TopicRulePayload: TopicRulePayload
}

/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CallDeviceActionAsync请求参数结构体
 */
export interface CallDeviceActionAsyncRequest {
  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义
   */
  ActionId: string

  /**
   * 输入参数
   */
  InputParams?: string
}

/**
 * CreateDevice返回参数结构体
 */
export interface CreateDeviceResponse {
  /**
   * 设备参数描述。
   */
  Data?: DeviceData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDevice请求参数结构体
 */
export interface CreateDeviceRequest {
  /**
   * 产品ID。
   */
  ProductId: string

  /**
   * 设备名称。命名规则：[a-zA-Z0-9:_-]{1,48}。
   */
  DeviceName: string

  /**
   * LoRaWAN 设备地址
   */
  DevAddr?: string

  /**
   * LoRaWAN 应用密钥
   */
  AppKey?: string

  /**
   * LoRaWAN 设备唯一标识
   */
  DevEUI?: string

  /**
   * LoRaWAN 应用会话密钥
   */
  AppSKey?: string

  /**
   * LoRaWAN 网络会话密钥
   */
  NwkSKey?: string
}

/**
 * GetProjectList返回参数结构体
 */
export interface GetProjectListResponse {
  /**
      * 项目列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Projects?: Array<ProjectEntryEx>

  /**
      * 列表项个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetStudioProductList请求参数结构体
 */
export interface GetStudioProductListRequest {
  /**
   * 项目ID
   */
  ProjectId?: string

  /**
   * 产品DevStatus
   */
  DevStatus?: string

  /**
   * Offset
   */
  Offset?: number

  /**
   * Limit
   */
  Limit?: number
}

/**
 * DisableTopicRule返回参数结构体
 */
export interface DisableTopicRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则信息
 */
export interface TopicRuleInfo {
  /**
   * 规则名称
   */
  RuleName: string

  /**
   * 规则描述
   */
  Description: string

  /**
   * 创建时间
   */
  CreatedAt: number

  /**
   * 规则是否禁用
   */
  RuleDisabled: boolean
}

/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
  /**
   * 项目名称
   */
  ProjectName: string

  /**
   * 项目描述
   */
  ProjectDesc: string

  /**
   * 实例ID，不带实例ID，默认为公共实例
   */
  InstanceId?: string
}

/**
 * DescribeDevice返回参数结构体
 */
export interface DescribeDeviceResponse {
  /**
   * 设备信息
   */
  Device?: DeviceInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetStudioProductList返回参数结构体
 */
export interface GetStudioProductListResponse {
  /**
   * 产品列表
   */
  Products?: Array<ProductEntry>

  /**
   * 产品数量
   */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishMessage请求参数结构体
 */
export interface PublishMessageRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 消息发往的主题
   */
  Topic: string

  /**
   * 云端下发到设备的控制报文
   */
  Payload: string

  /**
   * 消息服务质量等级，取值为0或1
   */
  Qos?: number

  /**
   * Payload的内容编码格式，取值为base64或空。base64表示云端将接收到的base64编码后的报文再转换成二进制报文下发至设备，为空表示不作转换，透传下发至设备
   */
  PayloadEncoding?: string
}

/**
 * GetDeviceList请求参数结构体
 */
export interface GetDeviceListRequest {
  /**
   * 需要查看设备列表的产品 ID
   */
  ProductId: string

  /**
   * 分页偏移
   */
  Offset?: number

  /**
   * 分页的大小，数值范围 10-100
   */
  Limit?: number

  /**
   * 设备固件版本号，若不带此参数会返回所有固件版本的设备。传"None-FirmwareVersion"查询无版本号的设备
   */
  FirmwareVersion?: string

  /**
   * 需要过滤的设备名称
   */
  DeviceName?: string
}

/**
 * GetTopicRuleList返回参数结构体
 */
export interface GetTopicRuleListResponse {
  /**
   * 规则总数量
   */
  TotalCnt?: number

  /**
   * 规则列表
   */
  Rules?: Array<TopicRuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableTopicRule请求参数结构体
 */
export interface DisableTopicRuleRequest {
  /**
   * 规则名称
   */
  RuleName: string
}

/**
 * 设备事件的搜索结果项
 */
export interface EventHistoryItem {
  /**
      * 事件的时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeStamp: number

  /**
      * 事件的产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: string

  /**
      * 事件的设备名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceName: string

  /**
      * 事件的标识符ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventId: string

  /**
      * 事件的类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 事件的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: string
}

/**
 * TopicRule结构
 */
export interface TopicRule {
  /**
   * 规则名称。
   */
  RuleName: string

  /**
   * 规则的SQL语句，如： SELECT * FROM 'pid/dname/event'，然后对其进行base64编码，得：U0VMRUNUICogRlJPTSAncGlkL2RuYW1lL2V2ZW50Jw==
   */
  Sql: string

  /**
      * 规则描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 行为的JSON字符串。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Actions: string

  /**
      * 是否禁用规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleDisabled: boolean
}

/**
 * TopicRulePayload结构
 */
export interface TopicRulePayload {
  /**
   * 规则的SQL语句，如： SELECT * FROM 'pid/dname/event'，然后对其进行base64编码，得：U0VMRUNUICogRlJPTSAncGlkL2RuYW1lL2V2ZW50Jw==
   */
  Sql: string

  /**
      * 行为的JSON字符串，大部分种类举例如下：
[
{
"republish": {
"topic": "TEST/test"
}
},
{
"forward": {
"api": "http://test.com:8080"
}
},
{
"ckafka": {
"instance": {
"id": "ckafka-test",
"name": ""
},
"topic": {
"id": "topic-test",
"name": "test"
},
"region": "gz"
}
},
{
"cmqqueue": {
"queuename": "queue-test-TEST",
"region": "gz"
}
},
{
"mysql": {
"instanceid": "cdb-test",
"region": "gz",
"username": "test",
"userpwd": "*****",
"dbname": "d_mqtt",
"tablename": "t_test",
"fieldpairs": [
{
"field": "test",
"value": "test"
}
],
"devicetype": "CUSTOM"
}
}
]
      */
  Actions?: string

  /**
   * 规则描述
   */
  Description?: string

  /**
   * 是否禁用规则
   */
  RuleDisabled?: boolean
}

/**
 * CallDeviceActionAsync返回参数结构体
 */
export interface CallDeviceActionAsyncResponse {
  /**
   * 调用Id
   */
  ClientToken?: string

  /**
   * 异步调用状态
   */
  Status?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicRule返回参数结构体
 */
export interface DescribeTopicRuleResponse {
  /**
      * 规则描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rule?: TopicRule

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网关坐标
 */
export interface LoRaGatewayLocation {
  /**
   * 准确度
   */
  Accuracy: number

  /**
   * 海拔
   */
  Altitude: number

  /**
   * 纬度
   */
  Latitude: number

  /**
   * 精度
   */
  Longitude: number
}

/**
 * DescribeDevice请求参数结构体
 */
export interface DescribeDeviceRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名
   */
  DeviceName: string

  /**
   * 设备ID，该字段有值将代替 ProductId/DeviceName
   */
  DeviceId?: string
}

/**
 * ModifyTopicRule返回参数结构体
 */
export interface ModifyTopicRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoRaFrequency返回参数结构体
 */
export interface DescribeLoRaFrequencyResponse {
  /**
      * 返回详情项
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: LoRaFrequencyEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchStudioProduct返回参数结构体
 */
export interface SearchStudioProductResponse {
  /**
   * 产品列表
   */
  Products?: Array<ProductEntry>

  /**
   * 产品数量
   */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetLoRaGatewayList请求参数结构体
 */
export interface GetLoRaGatewayListRequest {
  /**
   * 是否是社区网关
   */
  IsCommunity: boolean

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制个数
   */
  Limit?: number
}

/**
 * DescribeProject请求参数结构体
 */
export interface DescribeProjectRequest {
  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * DeleteTopicRule请求参数结构体
 */
export interface DeleteTopicRuleRequest {
  /**
   * 规则名
   */
  RuleName: string
}

/**
 * CreateLoRaGateway返回参数结构体
 */
export interface CreateLoRaGatewayResponse {
  /**
   * LoRa 网关信息
   */
  Gateway?: LoRaGatewayItem

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLoRaGateway返回参数结构体
 */
export interface DeleteLoRaGatewayResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLoRaFrequency请求参数结构体
 */
export interface CreateLoRaFrequencyRequest {
  /**
   * 频点配置名称
   */
  FreqName?: string

  /**
   * 数据上行信道
   */
  ChannelsDataUp?: Array<number>

  /**
   * 数据下行RX1信道
   */
  ChannelsDataRX1?: Array<number>

  /**
   * 数据下行RX2信道
   */
  ChannelsDataRX2?: Array<number>

  /**
   * 入网上行信道
   */
  ChannelsJoinUp?: Array<number>

  /**
   * 入网下行RX1信道
   */
  ChannelsJoinRX1?: Array<number>

  /**
   * 入网下行RX2信道
   */
  ChannelsJoinRX2?: Array<number>

  /**
   * 频点配置描述
   */
  Description?: string
}

/**
 * LoRa 网关信息
 */
export interface LoRaGatewayItem {
  /**
   * LoRa 网关Id
   */
  GatewayId: string

  /**
   * 是否是公开网关
   */
  IsPublic: boolean

  /**
   * 网关描述
   */
  Description: string

  /**
   * 网关名称
   */
  Name: string

  /**
   * 网关位置信息
   */
  Position: string

  /**
   * 网关位置详情
   */
  PositionDetails: string

  /**
   * LoRa 网关位置坐标
   */
  Location: LoRaGatewayLocation

  /**
   * 最后更新时间
   */
  UpdatedAt: string

  /**
   * 创建时间
   */
  CreatedAt: string

  /**
   * 最后上报时间
   */
  LastSeenAt: string

  /**
   * 频点ID
   */
  FrequencyId?: string
}

/**
 * ControlDeviceData返回参数结构体
 */
export interface ControlDeviceDataResponse {
  /**
   * 返回信息
   */
  Data?: string

  /**
      * JSON字符串， 返回下发控制的结果信息, 
Sent = 1 表示设备已经在线并且订阅了控制下发的mqtt topic
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceDataHistory请求参数结构体
 */
export interface DescribeDeviceDataHistoryRequest {
  /**
   * 区间开始时间（Unix 时间戳，毫秒级）
   */
  MinTime: number

  /**
   * 区间结束时间（Unix 时间戳，毫秒级）
   */
  MaxTime: number

  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 属性字段名称，对应数据模板中功能属性的标识符
   */
  FieldName: string

  /**
   * 返回条数
   */
  Limit?: number

  /**
   * 检索上下文
   */
  Context?: string
}

/**
 * DescribeStudioProduct请求参数结构体
 */
export interface DescribeStudioProductRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * ModifyLoRaFrequency请求参数结构体
 */
export interface ModifyLoRaFrequencyRequest {
  /**
   * 频点唯一ID
   */
  FreqId?: string

  /**
   * 频点名称
   */
  FreqName?: string

  /**
   * 频点描述
   */
  Description?: string

  /**
   * 数据上行信道
   */
  ChannelsDataUp?: Array<number>

  /**
   * 数据下行信道RX1
   */
  ChannelsDataRX1?: Array<number>

  /**
   * 数据下行信道RX2
   */
  ChannelsDataRX2?: Array<number>

  /**
   * 入网上行信道
   */
  ChannelsJoinUp?: Array<number>

  /**
   * 入网下行信道RX1
   */
  ChannelsJoinRX1?: Array<number>

  /**
   * 入网下行信道RX2
   */
  ChannelsJoinRX2?: Array<number>
}

/**
 * ModifyModelDefinition返回参数结构体
 */
export interface ModifyModelDefinitionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetProjectList请求参数结构体
 */
export interface GetProjectListRequest {
  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 个数限制
   */
  Limit?: number

  /**
   * 实例ID
   */
  InstanceId?: string
}

/**
 * CreateLoRaFrequency返回参数结构体
 */
export interface CreateLoRaFrequencyResponse {
  /**
   * LoRa频点信息
   */
  Data: LoRaFrequencyEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchStudioProduct请求参数结构体
 */
export interface SearchStudioProductRequest {
  /**
   * 项目ID
   */
  ProjectId?: string

  /**
   * 产品名称
   */
  ProductName?: string

  /**
   * 列表Limit
   */
  Limit?: number

  /**
   * 列表Offset
   */
  Offset?: number

  /**
   * 产品Status
   */
  DevStatus?: string
}

/**
 * GetTopicRuleList请求参数结构体
 */
export interface GetTopicRuleListRequest {
  /**
   * 请求的页数
   */
  PageNum: number

  /**
   * 分页的大小
   */
  PageSize: number
}

/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 项目详情
   */
  Project?: ProjectEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteStudioProduct请求参数结构体
 */
export interface DeleteStudioProductRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 项目名称
   */
  ProjectName: string

  /**
   * 项目描述
   */
  ProjectDesc: string
}

/**
 * PublishMessage返回参数结构体
 */
export interface PublishMessageResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLoRaGateway返回参数结构体
 */
export interface ModifyLoRaGatewayResponse {
  /**
   * 返回网关数据
   */
  Gateway?: LoRaGatewayItem

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceDataHistory返回参数结构体
 */
export interface DescribeDeviceDataHistoryResponse {
  /**
      * 属性字段名称，对应数据模板中功能属性的标识符
注意：此字段可能返回 null，表示取不到有效值。
      */
  FieldName?: string

  /**
      * 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Listover?: boolean

  /**
      * 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Context?: string

  /**
      * 历史数据结果数组，返回对应时间点及取值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results?: Array<DeviceDataHistoryItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModelDefinition请求参数结构体
 */
export interface DescribeModelDefinitionRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * GetLoRaGatewayList返回参数结构体
 */
export interface GetLoRaGatewayListResponse {
  /**
   * 返回总数
   */
  Total?: number

  /**
      * 返回详情项
注意：此字段可能返回 null，表示取不到有效值。
      */
  Gateways?: Array<LoRaGatewayItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTopicRule返回参数结构体
 */
export interface CreateTopicRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceData返回参数结构体
 */
export interface DescribeDeviceDataResponse {
  /**
   * 设备数据
   */
  Data?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTopicRule请求参数结构体
 */
export interface CreateTopicRuleRequest {
  /**
   * 规则名称
   */
  RuleName: string

  /**
   * 规则内容
   */
  TopicRulePayload: TopicRulePayload
}

/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
  /**
      * 删除的结果代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultCode?: string

  /**
      * 删除的结果信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultMessage?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备详细信息
 */
export interface DeviceInfo {
  /**
   * 设备名
   */
  DeviceName: string

  /**
   * 0: 离线, 1: 在线, 2: 获取失败, 3 未激活
   */
  Status: number

  /**
   * 设备密钥，密钥加密的设备返回
   */
  DevicePsk: string

  /**
      * 首次上线时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstOnlineTime: number

  /**
      * 最后一次上线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoginTime: number

  /**
      * 设备创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: number

  /**
      * 设备固件版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Version: string

  /**
      * 设备证书
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceCert: string

  /**
      * 日志级别
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogLevel: number

  /**
      * LoRaWAN 设备地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  DevAddr: string

  /**
      * LoRaWAN 应用密钥
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppKey: string

  /**
      * LoRaWAN 设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  DevEUI: string

  /**
      * LoRaWAN 应用会话密钥
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppSKey: string

  /**
      * LoRaWAN 网络会话密钥
注意：此字段可能返回 null，表示取不到有效值。
      */
  NwkSKey: string
}

/**
 * ModifyLoRaFrequency返回参数结构体
 */
export interface ModifyLoRaFrequencyResponse {
  /**
   * 频点信息
   */
  Data: LoRaFrequencyEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLoRaGateway请求参数结构体
 */
export interface ModifyLoRaGatewayRequest {
  /**
   * 描述信息
   */
  Description: string

  /**
   * LoRa网关Id
   */
  GatewayId: string

  /**
   * LoRa网关位置坐标
   */
  Location: LoRaGatewayLocation

  /**
   * LoRa网关名称
   */
  Name: string

  /**
   * 是否公开可见
   */
  IsPublic?: boolean

  /**
   * 位置信息
   */
  Position?: string

  /**
   * 位置详情
   */
  PositionDetails?: string

  /**
   * 频点ID
   */
  FrequencyId?: string
}

/**
 * ListEventHistory返回参数结构体
 */
export interface ListEventHistoryResponse {
  /**
      * 搜索上下文, 用作查询游标
注意：此字段可能返回 null，表示取不到有效值。
      */
  Context?: string

  /**
      * 搜索结果数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total?: number

  /**
      * 搜索结果是否已经结束
注意：此字段可能返回 null，表示取不到有效值。
      */
  Listover?: boolean

  /**
      * 搜集结果集
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventHistory?: Array<EventHistoryItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableTopicRule请求参数结构体
 */
export interface EnableTopicRuleRequest {
  /**
   * 规则名称
   */
  RuleName: string
}
