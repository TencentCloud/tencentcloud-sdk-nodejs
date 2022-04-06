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
 * ListLog返回参数结构体
 */
export interface ListLogResponse {
  /**
   * 日志上下文
   */
  Context: string

  /**
   * 是否还有日志，如有仍有日志，下次查询的请求带上当前请求返回的Context
   */
  Listover: boolean

  /**
   * 日志列表
   */
  Results: Array<CLSLogItem>

  /**
   * 日志总条数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProduct请求参数结构体
 */
export interface DeleteProductRequest {
  /**
   * 需要删除的产品 ID
   */
  ProductId: string

  /**
   * 删除LoRa产品需要skey
   */
  Skey?: string
}

/**
 * DescribePrivateCABindedProducts请求参数结构体
 */
export interface DescribePrivateCABindedProductsRequest {
  /**
   * 证书名称
   */
  CertName: string

  /**
   * 查询偏移量
   */
  Offset: number

  /**
   * 查询的数据量，默认为20， 最大为200
   */
  Limit: number
}

/**
 * DeleteProductPrivateCA返回参数结构体
 */
export interface DeleteProductPrivateCAResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePrivateCA请求参数结构体
 */
export interface UpdatePrivateCARequest {
  /**
   * CA证书名称
   */
  CertName: string

  /**
   * CA证书内容
   */
  CertText: string

  /**
   * 校验CA证书的证书内容
   */
  VerifyCertText: string
}

/**
 * UpdateDevicesEnableState返回参数结构体
 */
export interface UpdateDevicesEnableStateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateCA请求参数结构体
 */
export interface DescribePrivateCARequest {
  /**
   * 私有化CA名称
   */
  CertName: string
}

/**
 * DescribeProductCA返回参数结构体
 */
export interface DescribeProductCAResponse {
  /**
   * CA证书列表
   */
  CAs: Array<CertInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 产品属性
 */
export interface ProductProperties {
  /**
   * 产品描述
   */
  ProductDescription?: string

  /**
   * 加密类型，1表示证书认证，2表示签名认证。如不填写，默认值是1
   */
  EncryptionType?: string

  /**
   * 产品所属区域，目前只支持广州（gz）
   */
  Region?: string

  /**
      * 产品类型，各个类型值代表的节点-类型如下：
0 普通产品，2 NB-IoT产品，4 LoRa产品，3 LoRa网关产品，5 普通网关产品   默认值是0
      */
  ProductType?: number

  /**
   * 数据格式，取值为json或者custom，默认值是json
   */
  Format?: string

  /**
   * 产品所属平台，默认值是0
   */
  Platform?: string

  /**
   * LoRa产品运营侧APPEUI，只有LoRa产品需要填写
   */
  Appeui?: string

  /**
   * 产品绑定的物模型ID，-1表示不绑定
   */
  ModelId?: string

  /**
   * 产品绑定的物模型名称
   */
  ModelName?: string

  /**
   * 产品密钥，suite产品才会有
   */
  ProductKey?: string

  /**
   * 动态注册类型 0-关闭, 1-预定义设备名 2-动态定义设备名
   */
  RegisterType?: number

  /**
   * 动态注册产品秘钥
   */
  ProductSecret?: string

  /**
   * RegisterType为2时，设备动态创建的限制数量
   */
  RegisterLimit?: number

  /**
   * 划归的产品，展示为源产品ID，其余为空
   */
  OriginProductId?: string

  /**
   * 私有CA名称
   */
  PrivateCAName?: string

  /**
   * 划归的产品，展示为源用户ID，其余为空
   */
  OriginUserId?: number
}

/**
 * UpdatePrivateCA返回参数结构体
 */
export interface UpdatePrivateCAResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateCA返回参数结构体
 */
export interface DeletePrivateCAResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateCAs返回参数结构体
 */
export interface DescribePrivateCAsResponse {
  /**
   * 私有CA证书列表
   */
  CAs: Array<CertInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProductPrivateCA请求参数结构体
 */
export interface DeleteProductPrivateCARequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * CLS日志
 */
export interface CLSLogItem {
  /**
   * 日志内容
   */
  Content: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 请求ID
   */
  RequestId: string

  /**
   * 结果
   */
  Result: string

  /**
   * 模块
   */
  Scene: string

  /**
   * 日志时间
   */
  Time: string

  /**
   * 腾讯云账号
   */
  Userid: string
}

/**
 * DescribePrivateCABindedProducts返回参数结构体
 */
export interface DescribePrivateCABindedProductsResponse {
  /**
   * 私有CA绑定的产品列表
   */
  Products: Array<BindProductInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDevice请求参数结构体
 */
export interface DeleteDeviceRequest {
  /**
   * 设备所属的产品 ID
   */
  ProductId: string

  /**
   * 需要删除的设备名称
   */
  DeviceName: string

  /**
   * 删除LoRa设备以及LoRa网关设备需要skey
   */
  Skey?: string
}

/**
 * DeleteProduct返回参数结构体
 */
export interface DeleteProductResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrivateCA返回参数结构体
 */
export interface CreatePrivateCAResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetProductsForbiddenStatus返回参数结构体
 */
export interface SetProductsForbiddenStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内容日志项
 */
export interface PayloadLogItem {
  /**
   * 账号id
   */
  Uin: string

  /**
   * 产品id
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 来源类型
   */
  SrcType: string

  /**
   * 来源名称
   */
  SrcName: string

  /**
   * 消息topic
   */
  Topic: string

  /**
   * 内容格式类型
   */
  PayloadFormatType: string

  /**
   * 内容信息
   */
  Payload: string

  /**
   * 请求ID
   */
  RequestId: string

  /**
   * 日期时间
   */
  DateTime: string
}

/**
 * UpdateProductPrivateCA请求参数结构体
 */
export interface UpdateProductPrivateCARequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 私有CA证书名称
   */
  CertName: string
}

/**
 * 子产品信息
 */
export interface BindProductInfo {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 产品名
   */
  ProductName: string
}

/**
 * DescribeDevices返回参数结构体
 */
export interface DescribeDevicesResponse {
  /**
   * 设备总数
   */
  TotalCount: number

  /**
   * 设备详细信息列表
   */
  Devices: Array<DeviceInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备属性
 */
export interface DeviceTag {
  /**
   * 属性名称
   */
  Tag: string

  /**
   * 属性值的类型，1 int，2 string
   */
  Type: number

  /**
   * 属性的值
   */
  Value: string

  /**
      * 属性描述名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string
}

/**
 * PublishBroadcastMessage返回参数结构体
 */
export interface PublishBroadcastMessageResponse {
  /**
   * 广播消息任务ID
   */
  TaskId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductCA请求参数结构体
 */
export interface DescribeProductCARequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * CreatePrivateCA请求参数结构体
 */
export interface CreatePrivateCARequest {
  /**
   * CA证书名称
   */
  CertName: string

  /**
   * CA证书内容
   */
  CertText: string

  /**
   * 校验CA证书的证书内容
   */
  VerifyCertText: string
}

/**
 * UpdateDevicePSK返回参数结构体
 */
export interface UpdateDevicePSKResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProduct返回参数结构体
 */
export interface DescribeProductResponse {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 产品名
   */
  ProductName: string

  /**
   * 产品元数据
   */
  ProductMetadata: ProductMetadata

  /**
   * 产品属性
   */
  ProductProperties: ProductProperties

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
}

/**
 * UpdateDevicesEnableState请求参数结构体
 */
export interface UpdateDevicesEnableStateRequest {
  /**
   * 设备所属产品id
   */
  ProductId: string

  /**
   * 设备名称集合
   */
  DeviceNames: Array<string>

  /**
   * 要设置的设备状态，1为启用，0为禁用
   */
  Status: number
}

/**
 * UpdateDeviceLogLevel请求参数结构体
 */
export interface UpdateDeviceLogLevelRequest {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 日志级别，0：关闭，1：错误，2：告警，3：信息，4：调试
   */
  LogLevel: number
}

/**
 * 设备标签
 */
export interface DeviceLabel {
  /**
   * 标签标识
   */
  Key: string

  /**
   * 标签值
   */
  Value: string
}

/**
 * UpdateProductDynamicRegister请求参数结构体
 */
export interface UpdateProductDynamicRegisterRequest {
  /**
   * 产品Id
   */
  ProductId: string

  /**
   * 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备
   */
  RegisterType: number

  /**
   * 动态注册设备上限
   */
  RegisterLimit: number
}

/**
 * X509证书信息
 */
export interface CertInfo {
  /**
   * 证书名称
   */
  CertName: string

  /**
   * 证书的序列号，16进制编码
   */
  CertSN: string

  /**
   * 证书颁发着名称
   */
  IssuerName: string

  /**
   * 证书主题
   */
  Subject: string

  /**
   * 证书创建时间，秒级时间戳
   */
  CreateTime: number

  /**
   * 证书生效时间，秒级时间戳
   */
  EffectiveTime: number

  /**
   * 证书失效时间，秒级时间戳
   */
  ExpireTime: number

  /**
   * X509证书内容
   */
  CertText: string
}

/**
 * 产品元数据
 */
export interface ProductMetadata {
  /**
   * 产品创建时间
   */
  CreationDate: number
}

/**
 * DescribePrivateCAs请求参数结构体
 */
export type DescribePrivateCAsRequest = null

/**
 * UpdateDevicePSK请求参数结构体
 */
export interface UpdateDevicePSKRequest {
  /**
   * 产品名
   */
  ProductId: string

  /**
   * 设备名
   */
  DeviceName: string

  /**
   * 设备的psk
   */
  Psk: string
}

/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
  /**
   * 需要查看设备列表的产品 ID
   */
  ProductId: string

  /**
   * 偏移量，Offset从0开始
   */
  Offset: number

  /**
   * 分页的大小，数值范围 10-250
   */
  Limit: number

  /**
   * 设备固件版本号，若不带此参数会返回所有固件版本的设备。传"None-FirmwareVersion"查询无版本号的设备
   */
  FirmwareVersion?: string

  /**
   * 需要过滤的设备名称
   */
  DeviceName?: string

  /**
   * 设备是否启用，0禁用状态1启用状态，默认不区分
   */
  EnableState?: number
}

/**
 * ListLogPayload返回参数结构体
 */
export interface ListLogPayloadResponse {
  /**
   * 日志上下文
   */
  Context: string

  /**
   * 是否还有日志，如有仍有日志，下次查询的请求带上当前请求返回的Context
   */
  Listover: boolean

  /**
   * 日志列表
   */
  Results: Array<PayloadLogItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateCA返回参数结构体
 */
export interface DescribePrivateCAResponse {
  /**
   * 私有化CA详情
   */
  CA: CertInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDeviceLogLevel返回参数结构体
 */
export interface UpdateDeviceLogLevelResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListSDKLog返回参数结构体
 */
export interface ListSDKLogResponse {
  /**
   * 日志检索上下文
   */
  Context: string

  /**
   * 是否还有日志，如有仍有日志，下次查询的请求带上当前请求返回的Context
   */
  Listover: boolean

  /**
   * 日志列表
   */
  Results: Array<SDKLogItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListLogPayload请求参数结构体
 */
export interface ListLogPayloadRequest {
  /**
   * 日志开始时间
   */
  MinTime: number

  /**
   * 日志结束时间
   */
  MaxTime: number

  /**
      * 查询关键字，可以同时支持键值查询和文本查询，例如，查询某key的值为value，并且包含某word的日志，该参数为：key:value word。键值或文本可以包含多个，以空格隔开。其中可以索引的key比如：RequestID、ProductID、DeviceName等。
一个典型的查询示例：ProductID:ABCDE12345 DeviceName:test publish
      */
  Keywords: string

  /**
   * 日志检索上下文
   */
  Context?: string

  /**
   * 日志最大条数
   */
  MaxNum?: number
}

/**
 * CreateDevice返回参数结构体
 */
export interface CreateDeviceResponse {
  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 对称加密密钥，base64编码。采用对称加密时返回该参数
   */
  DevicePsk: string

  /**
   * 设备证书，用于 TLS 建立链接时校验客户端身份。采用非对称加密时返回该参数
   */
  DeviceCert: string

  /**
   * 设备私钥，用于 TLS 建立链接时校验客户端身份，腾讯云后台不保存，请妥善保管。采用非对称加密时返回该参数
   */
  DevicePrivateKey: string

  /**
   * LoRa设备的DevEui，当设备是LoRa设备时，会返回该字段
   */
  LoraDevEui: string

  /**
   * LoRa设备的MoteType，当设备是LoRa设备时，会返回该字段
   */
  LoraMoteType: number

  /**
   * LoRa设备的AppKey，当设备是LoRa设备时，会返回该字段
   */
  LoraAppKey: string

  /**
   * LoRa设备的NwkKey，当设备是LoRa设备时，会返回该字段
   */
  LoraNwkKey: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListSDKLog请求参数结构体
 */
export interface ListSDKLogRequest {
  /**
   * 日志开始时间
   */
  MinTime: number

  /**
   * 日志结束时间
   */
  MaxTime: number

  /**
      * 查询关键字，可以同时支持键值查询和文本查询，
例如，查询某key的值为value，并且包含某word的日志，该参数为：key:value word。
键值或文本可以包含多个，以空格隔开。
其中可以索引的key包括：productid、devicename、loglevel
一个典型的查询示例：productid:7JK1G72JNE devicename:name publish loglevel:WARN一个典型的查询示例：productid:ABCDE12345 devicename:test scene:SHADOW publish
      */
  Keywords: string

  /**
   * 日志检索上下文
   */
  Context?: string

  /**
   * 查询条数
   */
  MaxNum?: number
}

/**
 * CreateDevice请求参数结构体
 */
export interface CreateDeviceRequest {
  /**
   * 产品 ID 。创建产品时腾讯云为用户分配全局唯一的 ID
   */
  ProductId: string

  /**
   * 设备名称。命名规则：[a-zA-Z0-9:_-]{1,48}。
   */
  DeviceName: string

  /**
   * 设备属性
   */
  Attribute?: Attribute

  /**
   * 是否使用自定义PSK，默认不使用
   */
  DefinedPsk?: string

  /**
   * 运营商类型，当产品是NB-IoT产品时，此字段必填。1表示中国电信，2表示中国移动，3表示中国联通
   */
  Isp?: number

  /**
   * IMEI，当产品是NB-IoT产品时，此字段必填
   */
  Imei?: string

  /**
   * LoRa设备的DevEui，当创建LoRa时，此字段必填
   */
  LoraDevEui?: string

  /**
   * LoRa设备的MoteType
   */
  LoraMoteType?: number

  /**
   * 创建LoRa设备需要skey
   */
  Skey?: string

  /**
   * LoRa设备的AppKey
   */
  LoraAppKey?: string

  /**
   * 私有CA创建的设备证书
   */
  TlsCrt?: string
}

/**
 * DescribeProduct请求参数结构体
 */
export interface DescribeProductRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * UpdateProductPrivateCA返回参数结构体
 */
export interface UpdateProductPrivateCAResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备属性
 */
export interface Attribute {
  /**
   * 属性列表
   */
  Tags?: Array<DeviceTag>
}

/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateCA请求参数结构体
 */
export interface DeletePrivateCARequest {
  /**
   * 私有CA证书名称
   */
  CertName: string
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
   * 设备是否在线，0不在线，1在线
   */
  Online: number

  /**
   * 设备登录时间
   */
  LoginTime: number

  /**
   * 设备版本
   */
  Version: string

  /**
   * 设备证书，证书加密的设备返回
   */
  DeviceCert: string

  /**
   * 设备密钥，密钥加密的设备返回
   */
  DevicePsk: string

  /**
   * 设备属性
   */
  Tags: Array<DeviceTag>

  /**
   * 设备类型
   */
  DeviceType: number

  /**
   * 国际移动设备识别码 IMEI
   */
  Imei: string

  /**
   * 运营商类型
   */
  Isp: number

  /**
   * NB IOT运营商处的DeviceID
   */
  NbiotDeviceID: string

  /**
   * IP地址
   */
  ConnIP: number

  /**
   * 设备最后更新时间
   */
  LastUpdateTime: number

  /**
   * LoRa设备的dev eui
   */
  LoraDevEui: string

  /**
   * LoRa设备的Mote type
   */
  LoraMoteType: number

  /**
      * 首次上线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstOnlineTime: number

  /**
      * 最近下线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastOfflineTime: number

  /**
      * 设备创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: number

  /**
      * 设备日志级别
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogLevel: number

  /**
      * 设备证书获取状态, 1 已获取过设备密钥，0 未获取过设备密钥
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertState: number

  /**
      * 设备可用状态，0禁用，1启用
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableState: number

  /**
      * 设备标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Labels: Array<DeviceLabel>

  /**
      * MQTT客户端IP地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientIP: string

  /**
      * ota最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirmwareUpdateTime: number
}

/**
 * SetProductsForbiddenStatus请求参数结构体
 */
export interface SetProductsForbiddenStatusRequest {
  /**
   * 要设置禁用状态的产品列表
   */
  ProductId: Array<string>

  /**
   * 0启用，1禁用
   */
  Status: number
}

/**
 * SDK日志项
 */
export interface SDKLogItem {
  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 设备名称
   */
  DeviceName: string

  /**
   * 日志等级
   */
  Level: string

  /**
   * 日志时间
   */
  DateTime: string

  /**
   * 日志内容
   */
  Content: string
}

/**
 * ListLog请求参数结构体
 */
export interface ListLogRequest {
  /**
   * 日志开始时间
   */
  MinTime: number

  /**
   * 日志结束时间
   */
  MaxTime: number

  /**
      * 查询关键字，可以同时支持键值查询和文本查询，例如，查询某key的值为value，并且包含某word的日志，该参数为：key:value word。键值或文本可以包含多个，以空格隔开。其中可以索引的key包括：requestid、productid、devicename、scene、content。
一个典型的查询示例：productid:ABCDE12345 devicename:test scene:SHADOW content:Device%20connect publish
      */
  Keywords?: string

  /**
   * 日志检索上下文
   */
  Context?: string

  /**
   * 查询条数
   */
  MaxNum?: number
}

/**
 * DescribeDevice返回参数结构体
 */
export interface DescribeDeviceResponse {
  /**
   * 设备名
   */
  DeviceName: string

  /**
   * 设备是否在线，0不在线，1在线
   */
  Online: number

  /**
   * 设备登录时间
   */
  LoginTime: number

  /**
   * 设备固件版本
   */
  Version: string

  /**
   * 设备最后更新时间
   */
  LastUpdateTime: number

  /**
   * 设备证书
   */
  DeviceCert: string

  /**
   * 设备密钥
   */
  DevicePsk: string

  /**
   * 设备属性
   */
  Tags: Array<DeviceTag>

  /**
   * 设备类型
   */
  DeviceType: number

  /**
   * 国际移动设备识别码 IMEI
   */
  Imei: string

  /**
   * 运营商类型
   */
  Isp: number

  /**
   * IP地址
   */
  ConnIP: number

  /**
   * NB IoT运营商处的DeviceID
   */
  NbiotDeviceID: string

  /**
   * Lora设备的dev eui
   */
  LoraDevEui: string

  /**
   * Lora设备的mote type
   */
  LoraMoteType: number

  /**
      * 设备的sdk日志等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogLevel: number

  /**
      * 首次上线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstOnlineTime: number

  /**
      * 最近下线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastOfflineTime: number

  /**
      * 设备创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: number

  /**
      * 设备证书获取状态，0 未获取过设备密钥, 1 已获取过设备密钥
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertState: number

  /**
      * 设备启用状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableState: number

  /**
      * 设备标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Labels: Array<DeviceLabel>

  /**
      * MQTT客户端IP地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientIP: string

  /**
      * 设备固件更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirmwareUpdateTime: number

  /**
      * 创建者账号ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateUserId: number

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
   * Payload内容的编码格式，取值为base64或空。base64表示云端将收到的请求数据进行base64解码后下发到设备，空则直接将原始内容下发到设备
   */
  PayloadEncoding?: string
}

/**
 * UpdateProductDynamicRegister返回参数结构体
 */
export interface UpdateProductDynamicRegisterResponse {
  /**
   * 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备
   */
  RegisterType: number

  /**
   * 动态注册产品密钥
   */
  ProductSecret: string

  /**
   * 动态注册设备上限
   */
  RegisterLimit: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
