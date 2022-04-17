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
 * UpdateDevicesEnableState返回参数结构体
 */
export interface UpdateDevicesEnableStateResponse {
  /**
      * 删除的结果代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultCode: string

  /**
      * 删除的结果信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  ProjectId: string
}

/**
 * ProductId -> DeviceName
 */
export interface DevicesItem {
  /**
   * 产品id
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string
}

/**
 * DeleteFenceBind请求参数结构体
 */
export interface DeleteFenceBindRequest {
  /**
   * 围栏Id
   */
  FenceId: number

  /**
   * 围栏绑定的产品信息
   */
  Items: Array<FenceBindProductItem>
}

/**
 * DescribeModelDefinition返回参数结构体
 */
export interface DescribeModelDefinitionResponse {
  /**
   * 产品数据模板
   */
  Model: ProductModelDefinition

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindDevices请求参数结构体
 */
export interface UnbindDevicesRequest {
  /**
   * 网关设备的产品ID
   */
  GatewayProductId: string

  /**
   * 网关设备的设备名
   */
  GatewayDeviceName: string

  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名列表
   */
  DeviceNames: Array<string>
}

/**
 * DeleteDevices返回参数结构体
 */
export interface DeleteDevicesResponse {
  /**
      * 删除的结果代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultCode: string

  /**
      * 删除的结果信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultMessage: string

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
  Product: ProductEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetGatewaySubDeviceList返回参数结构体
 */
export interface GetGatewaySubDeviceListResponse {
  /**
      * 设备的总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
      * 设备列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceList: FamilySubDevice

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
 * BindDevices请求参数结构体
 */
export interface BindDevicesRequest {
  /**
   * 网关设备的产品ID。
   */
  GatewayProductId: string

  /**
   * 网关设备的设备名。
   */
  GatewayDeviceName: string

  /**
   * 被绑定设备的产品ID。
   */
  ProductId: string

  /**
   * 被绑定的多个设备名。
   */
  DeviceNames: Array<string>
}

/**
 * DescribeGatewaySubProducts返回参数结构体
 */
export interface DescribeGatewaySubProductsResponse {
  /**
   * 当前分页的可绑定或解绑的产品信息。
   */
  Products: Array<BindProductInfo>

  /**
   * 可绑定或解绑的产品总数
   */
  Total: number

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
  Devices: Array<DeviceInfo>

  /**
      * 产品下的设备总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteLoRaFrequency返回参数结构体
 */
export interface DeleteLoRaFrequencyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicPolicy请求参数结构体
 */
export interface DescribeTopicPolicyRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * Topic名字
   */
  TopicName: string
}

/**
 * 绑定、未绑定产品详细信息
 */
export interface BindProductInfo {
  /**
   * 产品ID。
   */
  ProductId: string

  /**
   * 产品名称。
   */
  ProductName: string

  /**
      * 产品所属项目ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId: string

  /**
      * 物模型类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataProtocol: number

  /**
      * 产品分组模板ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  CategoryId: number

  /**
      * 产品类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductType: number

  /**
      * 连接类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  NetType: string

  /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  DevStatus: string
}

/**
 * ModifyPositionFence请求参数结构体
 */
export type ModifyPositionFenceRequest = null

/**
 * 围栏信息
 */
export interface PositionFenceItem {
  /**
   * 围栏Id
   */
  FenceId: number

  /**
   * 位置空间Id
   */
  SpaceId: string

  /**
   * 围栏名称
   */
  FenceName: string

  /**
   * 围栏描述
   */
  FenceDesc: string

  /**
   * 围栏区域信息，采用 GeoJSON 格式
   */
  FenceArea: string
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
 * 位置点
 */
export interface PositionItem {
  /**
   * 位置点的时间
   */
  CreateTime: number

  /**
   * 位置点的经度
   */
  Longitude: number

  /**
   * 位置点的纬度
   */
  Latitude: number
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
  Product: ProductEntry

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
 * 产品设备位置信息
 */
export interface ProductDevicesPositionItem {
  /**
   * 设备位置列表
   */
  Items: Array<DevicePositionItem>

  /**
   * 产品标识
   */
  ProductId: string

  /**
   * 设备位置数量
   */
  Total: number
}

/**
 * DescribeDevicePositionList请求参数结构体
 */
export interface DescribeDevicePositionListRequest {
  /**
   * 产品标识列表
   */
  ProductIdList: Array<string>

  /**
   * 坐标类型
   */
  CoordinateType?: number

  /**
   * 分页偏移
   */
  Offset?: number

  /**
   * 分页的大小
   */
  Limit?: number
}

/**
 * GetDeviceLocationHistory返回参数结构体
 */
export interface GetDeviceLocationHistoryResponse {
  /**
   * 历史位置列表
   */
  Positions: Array<PositionItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateFirmware返回参数结构体
 */
export interface UpdateFirmwareResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPositionFence返回参数结构体
 */
export interface ModifyPositionFenceResponse {
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
 * ModifyPositionSpace返回参数结构体
 */
export interface ModifyPositionSpaceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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

  /**
      * 产品的连接类型的模型
注意：此字段可能返回 null，表示取不到有效值。
      */
  NetTypeModel: string
}

/**
 * ModifyFenceBind返回参数结构体
 */
export interface ModifyFenceBindResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBatchProduction请求参数结构体
 */
export interface CreateBatchProductionRequest {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 烧录方式，0为直接烧录，1为动态注册。
   */
  BurnMethod: number

  /**
   * 生成方式，0为系统生成，1为文件上传。
   */
  GenerationMethod: number

  /**
   * 文件上传URL，用于文件上传时填写。
   */
  UploadUrl?: string

  /**
   * 量产数量，用于系统生成时填写。
   */
  BatchCnt?: number

  /**
   * 是否生成二维码,0为不生成，1为生成。
   */
  GenerationQRCode?: number
}

/**
 * DeletePositionFence返回参数结构体
 */
export interface DeletePositionFenceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 围栏告警位置点
 */
export interface FenceAlarmPoint {
  /**
   * 围栏告警时间
   */
  AlarmTime: number

  /**
   * 围栏告警位置的经度
   */
  Longitude: number

  /**
   * 围栏告警位置的纬度
   */
  Latitude: number
}

/**
 * UploadFirmware请求参数结构体
 */
export interface UploadFirmwareRequest {
  /**
   * 产品ID
   */
  ProductID: string

  /**
   * 固件版本号
   */
  FirmwareVersion: string

  /**
   * 固件的MD5值
   */
  Md5sum: string

  /**
   * 固件的大小
   */
  FileSize: number

  /**
   * 固件名称
   */
  FirmwareName?: string

  /**
   * 固件描述
   */
  FirmwareDescription?: string

  /**
   * 固件升级模块；可选值 mcu|moudule
   */
  FwType?: string
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
 * 围栏绑定的产品信息
 */
export interface FenceBindProductItem {
  /**
   * 围栏绑定的设备信息
   */
  Devices: Array<FenceBindDeviceItem>

  /**
   * 围栏绑定的产品Id
   */
  ProductId: string
}

/**
 * PublishRRPCMessage请求参数结构体
 */
export interface PublishRRPCMessageRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 消息内容，utf8编码
   */
  Payload: string
}

/**
 * 设备位置详情
 */
export interface DevicePositionItem {
  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 位置信息时间
   */
  CreateTime: number

  /**
   * 设备经度信息
   */
  Longitude: number

  /**
   * 设备纬度信息
   */
  Latitude: number
}

/**
 * ListTopicPolicy返回参数结构体
 */
export interface ListTopicPolicyResponse {
  /**
   * Topic列表
   */
  Topics?: Array<TopicItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchPositionSpace返回参数结构体
 */
export interface SearchPositionSpaceResponse {
  /**
      * 位置空间列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<PositionSpaceInfo>

  /**
      * 符合条件的位置空间个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePositionFenceList返回参数结构体
 */
export interface DescribePositionFenceListResponse {
  /**
      * 围栏列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<PositionFenceInfo>

  /**
      * 围栏数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenSingleDeviceSignatureOfPublic返回参数结构体
 */
export interface GenSingleDeviceSignatureOfPublicResponse {
  /**
   * 设备签名
   */
  DeviceSignature: DeviceSignatureInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDevicePositionList返回参数结构体
 */
export interface DescribeDevicePositionListResponse {
  /**
   * 产品设备位置信息列表
   */
  Positions: Array<ProductDevicesPositionItem>

  /**
   * 产品设备位置信息的数目
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetProjectList返回参数结构体
 */
export interface GetProjectListResponse {
  /**
      * 项目列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Projects: Array<ProjectEntryEx>

  /**
      * 列表项个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeProject返回参数结构体
 */
export interface DescribeProjectResponse {
  /**
   * 返回信息
   */
  Project: ProjectEntryEx

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindProducts请求参数结构体
 */
export interface UnbindProductsRequest {
  /**
   * 网关产品ID
   */
  GatewayProductId: string

  /**
   * 待解绑的子产品ID数组
   */
  ProductIds: Array<string>
}

/**
 * SearchStudioProduct返回参数结构体
 */
export interface SearchStudioProductResponse {
  /**
   * 产品列表
   */
  Products: Array<ProductEntry>

  /**
   * 产品数量
   */
  Total: number

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
 * 围栏绑定的设备信息
 */
export interface FenceBindDeviceItem {
  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 告警条件(In，进围栏报警；Out，出围栏报警；InOrOut，进围栏或者出围栏均报警)
   */
  AlertCondition: string

  /**
   * 是否使能围栏(true，使能；false，禁用)
   */
  FenceEnable: boolean

  /**
   * 告警处理方法
   */
  Method: string
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
 * GetFamilyDeviceUserList返回参数结构体
 */
export interface GetFamilyDeviceUserListResponse {
  /**
      * 设备的用户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserList: Array<DeviceUser>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindDeviceInfo
 */
export interface BindDeviceInfo {
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

  /**
      * 应用数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationCount: number

  /**
      * 设备注册总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceCount: number
}

/**
 * DescribeBatchProduction返回参数结构体
 */
export interface DescribeBatchProductionResponse {
  /**
   * 量产数量。
   */
  BatchCnt: number

  /**
   * 烧录方式。
   */
  BurnMethod: number

  /**
   * 创建时间。
   */
  CreateTime: number

  /**
   * 下载URL。
   */
  DownloadUrl: string

  /**
   * 生成方式。
   */
  GenerationMethod: number

  /**
   * 上传URL。
   */
  UploadUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTopicPolicy请求参数结构体
 */
export interface ListTopicPolicyRequest {
  /**
   * 产品ID
   */
  ProductId: string
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

  /**
   * 是否删除绑定设备
   */
  ForceDelete?: boolean
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
 * ListFirmwares返回参数结构体
 */
export interface ListFirmwaresResponse {
  /**
   * 固件总数
   */
  TotalCount: number

  /**
   * 固件列表
   */
  Firmwares: Array<FirmwareInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeSpaceFenceEventList返回参数结构体
 */
export interface DescribeSpaceFenceEventListResponse {
  /**
      * 围栏告警事件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<FenceEventItem>

  /**
   * 围栏告警事件总数
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 围栏详细信息(包含创建时间及更新时间)
 */
export interface PositionFenceInfo {
  /**
   * 围栏信息
   */
  GeoFence: PositionFenceItem

  /**
   * 围栏创建时间
   */
  CreateTime: number

  /**
   * 围栏更新时间
   */
  UpdateTime: number
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
 * UnbindProducts返回参数结构体
 */
export interface UnbindProductsResponse {
  /**
   * 绑定了待解绑的LoRa产品下的设备的网关设备列表
   */
  GatewayDeviceNames: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicPolicy返回参数结构体
 */
export interface DescribeTopicPolicyResponse {
  /**
   * 产品ID
   */
  ProductId?: string

  /**
   * Topic名称
   */
  TopicName?: string

  /**
   * Topic权限
   */
  Privilege?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchPositionSpace请求参数结构体
 */
export interface SearchPositionSpaceRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 位置空间名字
   */
  SpaceName: string

  /**
   * 偏移量，从0开始
   */
  Offset: number

  /**
   * 最大获取数量
   */
  Limit: number
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
 * ModifyTopicPolicy返回参数结构体
 */
export interface ModifyTopicPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetPositionSpaceList请求参数结构体
 */
export interface GetPositionSpaceListRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 翻页偏移量，0起始
   */
  Offset: number

  /**
   * 最大返回结果数
   */
  Limit: number
}

/**
 * SearchTopicRule返回参数结构体
 */
export interface SearchTopicRuleResponse {
  /**
   * 搜索到的规则总数
   */
  TotalCnt: number

  /**
   * 规则信息列表
   */
  Rules: Array<TopicRuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFenceEventList返回参数结构体
 */
export interface DescribeFenceEventListResponse {
  /**
   * 围栏告警事件列表
   */
  List: Array<FenceEventItem>

  /**
   * 围栏告警事件总数
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDevicesEnableState请求参数结构体
 */
export interface UpdateDevicesEnableStateRequest {
  /**
   * 多个设备标识
   */
  DevicesItems: Array<DevicesItem>

  /**
   * 1：启用；0：禁用
   */
  Status: number
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
 * GetDeviceLocationHistory请求参数结构体
 */
export interface GetDeviceLocationHistoryRequest {
  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 设备名
   */
  DeviceName: string

  /**
   * 查询起始时间，Unix时间，单位为毫秒
   */
  StartTime: number

  /**
   * 查询结束时间，Unix时间，单位为毫秒
   */
  EndTime: number

  /**
   * 坐标类型
   */
  CoordinateType?: number
}

/**
 * CallDeviceActionSync返回参数结构体
 */
export interface CallDeviceActionSyncResponse {
  /**
   * 调用Id
   */
  ClientToken: string

  /**
      * 输出参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutputParams: string

  /**
   * 返回状态，当设备不在线等部分情况，会通过该 Status 返回。
   */
  Status: string

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
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * 返回信息
   */
  Project: ProjectEntry

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
  FieldName: string

  /**
      * 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Listover: boolean

  /**
      * 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Context: string

  /**
      * 历史数据结果数组，返回对应时间点及取值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results: Array<DeviceDataHistoryItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateTopicPolicy返回参数结构体
 */
export interface CreateTopicPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDevice返回参数结构体
 */
export interface CreateDeviceResponse {
  /**
   * 设备参数描述。
   */
  Data: DeviceData

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

  /**
   * 手动指定设备的PSK密钥
   */
  DefinedPsk?: string
}

/**
 * DeletePositionSpace请求参数结构体
 */
export interface DeletePositionSpaceRequest {
  /**
   * 位置空间Id
   */
  SpaceId: string
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
   * 偏移量
   */
  Offset?: number

  /**
   * 数量限制
   */
  Limit?: number
}

/**
 * DescribeFirmwareTask返回参数结构体
 */
export interface DescribeFirmwareTaskResponse {
  /**
      * 固件任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: number

  /**
      * 固件任务状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 固件任务创建时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: number

  /**
      * 固件任务升级类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: number

  /**
      * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductName: string

  /**
      * 固件任务升级模式。originalVersion（按版本号升级）、filename（提交文件升级）、devicenames（按设备名称升级）
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpgradeMode: string

  /**
      * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: string

  /**
      * 原始固件版本号，在UpgradeMode是originalVersion升级模式下会返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalVersion: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备固件详细信息
 */
export interface FirmwareInfo {
  /**
   * 固件版本
   */
  Version: string

  /**
   * 固件MD5值
   */
  Md5sum: string

  /**
   * 固件创建时间
   */
  CreateTime: number

  /**
      * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductName: string

  /**
      * 固件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 固件描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: string

  /**
      * 固件升级模块
注意：此字段可能返回 null，表示取不到有效值。
      */
  FwType: string

  /**
      * 创建者子 uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateUserId: number

  /**
      * 创建者昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatorNickName: string
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
 * GetCOSURL请求参数结构体
 */
export interface GetCOSURLRequest {
  /**
   * 产品ID
   */
  ProductID: string

  /**
   * 固件版本
   */
  FirmwareVersion: string

  /**
   * 文件大小
   */
  FileSize?: number
}

/**
 * DescribeStudioProduct返回参数结构体
 */
export interface DescribeStudioProductResponse {
  /**
   * 产品详情
   */
  Product: ProductEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFenceBind请求参数结构体
 */
export interface CreateFenceBindRequest {
  /**
   * 围栏Id
   */
  FenceId: number

  /**
   * 围栏绑定的产品列表
   */
  Items: Array<FenceBindProductItem>
}

/**
 * DescribeDevice返回参数结构体
 */
export interface DescribeDeviceResponse {
  /**
   * 设备信息
   */
  Device: DeviceInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishBroadcastMessage请求参数结构体
 */
export interface PublishBroadcastMessageRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 消息内容
   */
  Payload: string

  /**
   * 消息质量等级
   */
  Qos: number

  /**
   * ayload内容的编码格式，取值为base64或空。base64表示云端将收到的请求数据进行base64解码后下发到设备，空则直接将原始内容下发到设备
   */
  PayloadEncoding?: string
}

/**
 * ListFirmwares请求参数结构体
 */
export interface ListFirmwaresRequest {
  /**
   * 获取的页数
   */
  PageNum: number

  /**
   * 分页的大小
   */
  PageSize: number

  /**
   * 产品ID
   */
  ProductID?: string

  /**
   * 搜索过滤条件
   */
  Filters?: Array<SearchKeyword>
}

/**
 * GetStudioProductList返回参数结构体
 */
export interface GetStudioProductListResponse {
  /**
   * 产品列表
   */
  Products: Array<ProductEntry>

  /**
   * 产品数量
   */
  Total: number

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
 * 子设备详情
 */
export interface FamilySubDevice {
  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 设备ID
   */
  DeviceId: string

  /**
      * 设备别名
注意：此字段可能返回 null，表示取不到有效值。
      */
  AliasName: string

  /**
   * 设备绑定的家庭ID
   */
  FamilyId: string

  /**
      * 设备所在的房间ID，默认"0"
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoomId: string

  /**
      * 图标
注意：此字段可能返回 null，表示取不到有效值。
      */
  IconUrl: string

  /**
      * grid图标
注意：此字段可能返回 null，表示取不到有效值。
      */
  IconUrlGrid: string

  /**
   * 设备绑定时间戳
   */
  CreateTime: number

  /**
   * 设备更新时间戳
   */
  UpdateTime: number
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
 * GetDeviceList请求参数结构体
 */
export interface GetDeviceListRequest {
  /**
   * 需要查看设备列表的产品ID, -1代表ProjectId来筛选
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

  /**
   * 项目ID。产品 ID 为 -1 时，该参数必填
   */
  ProjectId?: string
}

/**
 * ModifySpaceProperty请求参数结构体
 */
export interface ModifySpacePropertyRequest {
  /**
   * 位置空间Id
   */
  SpaceId: string

  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 产品属性
   */
  Data: string
}

/**
 * GetPositionSpaceList返回参数结构体
 */
export interface GetPositionSpaceListResponse {
  /**
      * 位置空间列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<PositionSpaceInfo>

  /**
      * 位置空间数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCOSURL返回参数结构体
 */
export interface GetCOSURLResponse {
  /**
   * 固件URL
   */
  Url: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFenceBind请求参数结构体
 */
export interface ModifyFenceBindRequest {
  /**
   * 围栏Id
   */
  FenceId: number

  /**
   * 围栏绑定的产品列表
   */
  Items: Array<FenceBindProductItem>
}

/**
 * GetTopicRuleList返回参数结构体
 */
export interface GetTopicRuleListResponse {
  /**
   * 规则总数量
   */
  TotalCnt: number

  /**
   * 规则列表
   */
  Rules: Array<TopicRuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFenceEventList请求参数结构体
 */
export interface DescribeFenceEventListRequest {
  /**
   * 围栏告警信息的查询起始时间，Unix时间，单位为毫秒
   */
  StartTime: number

  /**
   * 围栏告警信息的查询结束时间，Unix时间，单位为毫秒
   */
  EndTime: number

  /**
   * 围栏Id
   */
  FenceId?: number

  /**
   * 翻页偏移量，0起始
   */
  Offset?: number

  /**
   * 最大返回结果数
   */
  Limit?: number

  /**
   * 告警对应的产品Id
   */
  ProductId?: string

  /**
   * 告警对应的设备名称
   */
  DeviceName?: string
}

/**
 * ModifyPositionSpace请求参数结构体
 */
export interface ModifyPositionSpaceRequest {
  /**
   * 位置空间Id
   */
  SpaceId: string

  /**
   * 位置空间名称
   */
  SpaceName: string

  /**
   * 授权类型
   */
  AuthorizeType: number

  /**
   * 产品列表
   */
  ProductIdList: Array<string>

  /**
   * 位置空间描述
   */
  Description?: string

  /**
   * 缩略图
   */
  Icon?: string
}

/**
 * GetLoRaGatewayList返回参数结构体
 */
export interface GetLoRaGatewayListResponse {
  /**
   * 返回总数
   */
  Total: number

  /**
      * 返回详情项
注意：此字段可能返回 null，表示取不到有效值。
      */
  Gateways: Array<LoRaGatewayItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyLoRaGateway返回参数结构体
 */
export interface ModifyLoRaGatewayResponse {
  /**
   * 返回网关数据
   */
  Gateway: LoRaGatewayItem

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DirectBindDeviceInFamily返回参数结构体
 */
export interface DirectBindDeviceInFamilyResponse {
  /**
   * 返回设备信息
   */
  AppDeviceInfo: AppDeviceInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CallDeviceActionAsync返回参数结构体
 */
export interface CallDeviceActionAsyncResponse {
  /**
   * 调用Id
   */
  ClientToken: string

  /**
   * 异步调用状态
   */
  Status: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFenceBind返回参数结构体
 */
export interface DeleteFenceBindResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTopicPolicy请求参数结构体
 */
export interface DeleteTopicPolicyRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * Topic名称
   */
  TopicName: string
}

/**
 * CreateFenceBind返回参数结构体
 */
export interface CreateFenceBindResponse {
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
  Rule: TopicRule

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePositionFence返回参数结构体
 */
export interface CreatePositionFenceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishBroadcastMessage返回参数结构体
 */
export interface PublishBroadcastMessageResponse {
  /**
   * 广播消息任务Id
   */
  TaskId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFenceBindList请求参数结构体
 */
export interface DescribeFenceBindListRequest {
  /**
   * 围栏Id
   */
  FenceId: number

  /**
   * 翻页偏移量，0起始
   */
  Offset?: number

  /**
   * 最大返回结果数
   */
  Limit?: number
}

/**
 * DescribeBindedProducts返回参数结构体
 */
export interface DescribeBindedProductsResponse {
  /**
   * 当前分页的子产品数组
   */
  Products: Array<BindProductInfo>

  /**
   * 绑定的子产品总数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备签名
 */
export interface DeviceSignatureInfo {
  /**
   * 设备名
   */
  DeviceName: string

  /**
   * 设备签名
   */
  DeviceSignature: string
}

/**
 * 位置空间详情
 */
export interface PositionSpaceInfo {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 位置空间Id
   */
  SpaceId: string

  /**
   * 位置空间名称
   */
  SpaceName: string

  /**
   * 授权类型
   */
  AuthorizeType: number

  /**
      * 描述备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
   * 产品列表
   */
  ProductIdList: Array<string>

  /**
   * 缩略图
   */
  Icon: string

  /**
   * 创建时间
   */
  CreateTime: number

  /**
   * 更新时间
   */
  UpdateTime: number

  /**
   * 用户自定义地图缩放
   */
  Zoom: number
}

/**
 * 网关坐标
 */
export interface LoRaGatewayLocation {
  /**
   * 纬度
   */
  Latitude: number

  /**
   * 精度
   */
  Longitude: number

  /**
   * 准确度
   */
  Accuracy?: number

  /**
   * 海拔
   */
  Altitude?: number
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
 * DescribePositionFenceList请求参数结构体
 */
export interface DescribePositionFenceListRequest {
  /**
   * 位置空间Id
   */
  SpaceId: string

  /**
   * 翻页偏移量，0起始
   */
  Offset?: number

  /**
   * 最大返回结果数
   */
  Limit?: number
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
 * DescribeBatchProduction请求参数结构体
 */
export interface DescribeBatchProductionRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 量产ID
   */
  BatchProductionId: string
}

/**
 * CreateTopicPolicy请求参数结构体
 */
export interface CreateTopicPolicyRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * Topic名称
   */
  TopicName: string

  /**
   * Topic权限，1发布，2订阅，3订阅和发布
   */
  Privilege: number
}

/**
 * DirectBindDeviceInFamily请求参数结构体
 */
export interface DirectBindDeviceInFamilyRequest {
  /**
   * 小程序appid
   */
  IotAppID: string

  /**
   * 用户ID
   */
  UserID: string

  /**
   * 家庭ID
   */
  FamilyId: string

  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名
   */
  DeviceName: string

  /**
   * 房间ID
   */
  RoomId?: string
}

/**
 * Topic信息, 包括Topic名字和权限
 */
export interface TopicItem {
  /**
   * Topic名称
   */
  TopicName: string

  /**
   * Topic权限 , 1上报  2下发
   */
  Privilege: number
}

/**
 * GetFamilyDeviceUserList请求参数结构体
 */
export interface GetFamilyDeviceUserListRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string
}

/**
 * DescribeBindedProducts请求参数结构体
 */
export interface DescribeBindedProductsRequest {
  /**
   * 网关产品ID
   */
  GatewayProductId: string

  /**
   * 分页偏移量
   */
  Offset: number

  /**
   * 分页大小
   */
  Limit: number
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

  /**
      * 创建人 UinId
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateUserId: number

  /**
      * 创建者昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatorNickName: string
}

/**
 * DescribeGatewaySubDeviceList返回参数结构体
 */
export interface DescribeGatewaySubDeviceListResponse {
  /**
      * 设备的总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
      * 设备列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceList: Array<FamilySubDevice>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceFenceEventList请求参数结构体
 */
export interface DescribeSpaceFenceEventListRequest {
  /**
   * 位置空间Id
   */
  SpaceId: string

  /**
   * 围栏告警信息的查询起始时间，Unix时间，单位为毫秒
   */
  StartTime: number

  /**
   * 围栏告警信息的查询结束时间，Unix时间，单位为毫秒
   */
  EndTime: number

  /**
   * 翻页偏移量，0起始
   */
  Offset?: number

  /**
   * 最大返回结果数
   */
  Limit?: number
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
 * 围栏事件详情
 */
export interface FenceEventItem {
  /**
   * 围栏事件的产品Id
   */
  ProductId: string

  /**
   * 围栏事件的设备名称
   */
  DeviceName: string

  /**
   * 围栏Id
   */
  FenceId: number

  /**
   * 围栏事件的告警类型（In，进围栏报警；Out，出围栏报警；InOrOut，进围栏或者出围栏均报警）
   */
  AlertType: string

  /**
   * 围栏事件的设备位置信息
   */
  Data: FenceAlarmPoint
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
 * UnbindDevices返回参数结构体
 */
export interface UnbindDevicesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * UploadFirmware返回参数结构体
 */
export interface UploadFirmwareResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTopicPolicy请求参数结构体
 */
export interface ModifyTopicPolicyRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 更新前Topic名
   */
  TopicName: string

  /**
   * 更新后Topic名
   */
  NewTopicName: string

  /**
   * Topic权限
   */
  Privilege: number
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
  Gateway: LoRaGatewayItem

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTopicPolicy返回参数结构体
 */
export interface DeleteTopicPolicyResponse {
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
 * DescribeDeviceBindGateway返回参数结构体
 */
export interface DescribeDeviceBindGatewayResponse {
  /**
      * 网关产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  GatewayProductId: string

  /**
      * 网关设备名
注意：此字段可能返回 null，表示取不到有效值。
      */
  GatewayDeviceName: string

  /**
      * 网关产品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  GatewayName: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGatewaySubDeviceList请求参数结构体
 */
export interface DescribeGatewaySubDeviceListRequest {
  /**
   * 网关产品ID
   */
  GatewayProductId: string

  /**
   * 网关设备名称
   */
  GatewayDeviceName: string

  /**
   * 分页偏移
   */
  Offset: number

  /**
   * 分页的大小
   */
  Limit: number
}

/**
 * ControlDeviceData返回参数结构体
 */
export interface ControlDeviceDataResponse {
  /**
   * 返回信息
   */
  Data: string

  /**
      * JSON字符串， 返回下发控制的结果信息, 
Sent = 1 表示设备已经在线并且订阅了控制下发的mqtt topic.
pushResult 是表示发送结果，其中 0 表示成功， 23101 表示设备未在线或没有订阅相关的 MQTT Topic。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

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
 * UpdateFirmware请求参数结构体
 */
export interface UpdateFirmwareRequest {
  /**
   * 产品ID
   */
  ProductID: string

  /**
   * 设备名
   */
  DeviceName: string

  /**
   * 固件新的版本号
   */
  FirmwareVersion: string

  /**
   * 固件原版本号
   */
  FirmwareOriVersion: string

  /**
   * 固件升级方式；0 静默升级 1 用户确认升级   不填默认静默升级
   */
  UpgradeMethod?: number
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
 * CreatePositionSpace返回参数结构体
 */
export interface CreatePositionSpaceResponse {
  /**
      * 空间Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpaceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBatchProduction返回参数结构体
 */
export interface CreateBatchProductionResponse {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 量产id
   */
  BatchProductionId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeletePositionFence请求参数结构体
 */
export interface DeletePositionFenceRequest {
  /**
   * 位置空间Id
   */
  SpaceId: string

  /**
   * 围栏Id
   */
  FenceId: number
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

  /**
   * 按项目ID搜索
   */
  ProjectId?: string

  /**
   * 按产品ID搜索
   */
  ProductId?: string

  /**
   * 加载 ProductCount、DeviceCount、ApplicationCount，可选值：ProductCount、DeviceCount、ApplicationCount，可多选
   */
  Includes?: Array<string>

  /**
   * 按项目名称搜索
   */
  ProjectName?: string
}

/**
 * DeletePositionSpace返回参数结构体
 */
export interface DeletePositionSpaceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceBindGateway请求参数结构体
 */
export interface DescribeDeviceBindGatewayRequest {
  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 设备名
   */
  DeviceName: string
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
 * EnableTopicRule返回参数结构体
 */
export interface EnableTopicRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetGatewaySubDeviceList请求参数结构体
 */
export interface GetGatewaySubDeviceListRequest {
  /**
   * 网关产品ID
   */
  GatewayProductId: string

  /**
   * 网关设备名称
   */
  GatewayDeviceName: string

  /**
   * 分页偏移
   */
  Offset: number

  /**
   * 分页的大小
   */
  Limit: number
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

  /**
   * 产品ID
   */
  ProductId?: string
}

/**
 * GenSingleDeviceSignatureOfPublic请求参数结构体
 */
export interface GenSingleDeviceSignatureOfPublicRequest {
  /**
   * 设备所属的产品ID
   */
  ProductId: string

  /**
   * 需要绑定的设备
   */
  DeviceName: string

  /**
   * 设备绑定签名的有效时间,以秒为单位。取值范围：0 < Expire <= 86400，Expire == -1（十年）
   */
  Expire: number
}

/**
 * DeleteDevices请求参数结构体
 */
export interface DeleteDevicesRequest {
  /**
   * 多个设备标识
   */
  DevicesItems: Array<DevicesItem>
}

/**
 * 云api直接绑定设备出参
 */
export interface AppDeviceInfo {
  /**
   * 产品ID/设备名
   */
  DeviceId: string

  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名
   */
  DeviceName: string

  /**
   * 设备别名
   */
  AliasName: string

  /**
   * icon地址
   */
  IconUrl: string

  /**
   * 家庭ID
   */
  FamilyId: string

  /**
   * 房间ID
   */
  RoomId: string

  /**
   * 设备类型
   */
  DeviceType: number

  /**
   * 创建时间
   */
  CreateTime: number

  /**
   * 更新时间
   */
  UpdateTime: number
}

/**
 * BindProducts返回参数结构体
 */
export interface BindProductsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 项目详情
   */
  Project: ProjectEntry

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取返回列表的详情。
 */
export interface BatchProductionInfo {
  /**
   * 量产ID
   */
  BatchProductionId: string

  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 烧录方式
   */
  BurnMethod: number

  /**
   * 创建时间
   */
  CreateTime: number

  /**
   * 产品名称
   */
  ProductName: string
}

/**
 * DescribeGatewayBindDevices请求参数结构体
 */
export interface DescribeGatewayBindDevicesRequest {
  /**
   * 网关设备的产品ID
   */
  GatewayProductId: string

  /**
   * 网关设备的设备名
   */
  GatewayDeviceName: string

  /**
   * 子产品的ID
   */
  ProductId: string

  /**
   * 分页的偏移
   */
  Offset: number

  /**
   * 分页的页大小
   */
  Limit: number
}

/**
 * DescribeGatewaySubProducts请求参数结构体
 */
export interface DescribeGatewaySubProductsRequest {
  /**
   * 网关产品ID
   */
  GatewayProductId: string

  /**
   * 分页的偏移量
   */
  Offset?: number

  /**
   * 分页的大小
   */
  Limit?: number

  /**
   * 项目Id
   */
  ProjectId?: string
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
 * BindProducts请求参数结构体
 */
export interface BindProductsRequest {
  /**
   * 网关产品ID。
   */
  GatewayProductId: string

  /**
   * 待绑定的子产品ID数组。
   */
  ProductIds: Array<string>
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
 * ModifySpaceProperty返回参数结构体
 */
export interface ModifySpacePropertyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * BindDevices返回参数结构体
 */
export interface BindDevicesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFenceBindList返回参数结构体
 */
export interface DescribeFenceBindListResponse {
  /**
   * 围栏绑定的产品设备列表
   */
  List: Array<FenceBindProductItem>

  /**
   * 围栏绑定的设备总数
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 搜索关键词
 */
export interface SearchKeyword {
  /**
   * 搜索条件的Key
   */
  Key: string

  /**
   * 搜索条件的值
   */
  Value?: string
}

/**
 * CreatePositionFence请求参数结构体
 */
export interface CreatePositionFenceRequest {
  /**
   * 位置空间Id
   */
  SpaceId: string

  /**
   * 围栏名称
   */
  FenceName: string

  /**
   * 围栏区域信息，采用 GeoJSON 格式
   */
  FenceArea: string

  /**
   * 围栏描述
   */
  FenceDesc?: string
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
 * EnableTopicRule请求参数结构体
 */
export interface EnableTopicRuleRequest {
  /**
   * 规则名称
   */
  RuleName: string
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
  Data: string

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
 * PublishRRPCMessage返回参数结构体
 */
export interface PublishRRPCMessageResponse {
  /**
      * RRPC消息ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  MessageId: number

  /**
      * 设备回复的消息内容，采用base64编码
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayloadBase64: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备的用户
 */
export interface DeviceUser {
  /**
   * 用户ID
   */
  UserId: string

  /**
   * 用户角色 1所有者，0：其他分享者
   */
  Role: number
}

/**
 * GetBatchProductionsList请求参数结构体
 */
export interface GetBatchProductionsListRequest {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 返回数量限制
   */
  Limit?: number
}

/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
  /**
      * 删除的结果代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultCode: string

  /**
      * 删除的结果信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultMessage: string

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

  /**
      * 创建人Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateUserId: number

  /**
      * 创建人昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatorNickName: string

  /**
      * 启用/禁用状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableState: number

  /**
      * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: string

  /**
      * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductName: string

  /**
      * 设备类型（设备、子设备、网关）
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceType: string
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
  Context: string

  /**
      * 搜索结果数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
      * 搜索结果是否已经结束
注意：此字段可能返回 null，表示取不到有效值。
      */
  Listover: boolean

  /**
      * 搜集结果集
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventHistory: Array<EventHistoryItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetBatchProductionsList返回参数结构体
 */
export interface GetBatchProductionsListResponse {
  /**
      * 返回详情信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchProductions: Array<BatchProductionInfo>

  /**
   * 返回数量。
   */
  TotalCnt: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGatewayBindDevices返回参数结构体
 */
export interface DescribeGatewayBindDevicesResponse {
  /**
   * 子设备信息。
   */
  Devices: Array<BindDeviceInfo>

  /**
   * 子设备总数。
   */
  Total: number

  /**
   * 子设备所属的产品名。
   */
  ProductName: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirmwareTask请求参数结构体
 */
export interface DescribeFirmwareTaskRequest {
  /**
   * 产品ID
   */
  ProductID: string

  /**
   * 固件版本号
   */
  FirmwareVersion: string

  /**
   * 固件任务ID
   */
  TaskId: number
}

/**
 * CreatePositionSpace请求参数结构体
 */
export interface CreatePositionSpaceRequest {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 空间名称
   */
  SpaceName: string

  /**
   * 授权类型，0：只读 1：读写
   */
  AuthorizeType: number

  /**
   * 产品列表
   */
  ProductIdList: Array<string>

  /**
   * 描述
   */
  Description?: string

  /**
   * 缩略图
   */
  Icon?: string
}
