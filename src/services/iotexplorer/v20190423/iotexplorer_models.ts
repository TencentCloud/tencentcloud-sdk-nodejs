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
 * GetTWeCallPkgList请求参数结构体
 */
export interface GetTWeCallPkgListRequest {
  /**
   * appId
   * @deprecated
   */
  MiniProgramAppId?: string
  /**
   * 类型
   */
  PkgType?: Array<number | bigint>
  /**
   * 状态
   */
  Status?: Array<number | bigint>
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 每页数据大小
   */
  Limit?: number
}

/**
 * 云存套餐包消耗统计
 */
export interface PackageConsumeStat {
  /**
   * 云存套餐包id
   */
  PackageId?: string
  /**
   * 云存套餐包名称
   */
  PackageName?: string
  /**
   * 消耗个数
   */
  Cnt?: number
  /**
   * 套餐包单价，单位分
   */
  Price?: number
  /**
   * 消耗来源，1预付费
   */
  Source?: number
}

/**
 * DescribeCloudStoragePackageConsumeDetails返回参数结构体
 */
export interface DescribeCloudStoragePackageConsumeDetailsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TWeCall设备激活信息
 */
export interface TWeCallActiveInfo {
  /**
   * 小程序ID
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ModelId?: string
  /**
   * Sn信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sn?: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: number
  /**
   * 类型
   */
  PkgType?: number
}

/**
 * GetWechatDeviceTicket请求参数结构体
 */
export interface GetWechatDeviceTicketRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 产品名称
   */
  DeviceName: string
  /**
   * 是否第三方小程序
   */
  IsThirdApp?: number
  /**
   * 模板ID
   */
  ModelId?: string
  /**
   * 小程序APPID
   */
  MiniProgramAppId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteStudioProduct返回参数结构体
 */
export interface DeleteStudioProductResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDevicePackages请求参数结构体
 */
export interface DescribeDevicePackagesRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 分页拉取数量
   */
  Limit: number
  /**
   * 分页拉取偏移
   */
  Offset: number
  /**
   * 用户id
   */
  CSUserId?: string
  /**
   * 通道id
   */
  ChannelId?: number
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
 * 设备激活结果数据
 */
export interface DeviceActiveResult {
  /**
   * 模板ID
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ModelId?: string
  /**
   * SN信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sn?: string
  /**
   * 设备激活状态，0：激活成功；50011：系统错误；50012：产品不存在；50013：设备不存在；50014：产品无权限；50015：不是音视频产品；50016：SN格式错误；50017：激活码类型错误；50018：激活次数限频；50019：激活码不足；50020：SN已暂停；
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrCode?: number
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: number
}

/**
 * DeleteLoRaFrequency返回参数结构体
 */
export interface DeleteLoRaFrequencyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFreeCloudStorage返回参数结构体
 */
export interface CreateFreeCloudStorageResponse {
  /**
   * 订单金额，单位为分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Price?: number
  /**
   * 支付金额，单位为分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Amount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPositionFence返回参数结构体
 */
export interface ModifyPositionFenceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageAIServiceTask请求参数结构体
 */
export interface DescribeCloudStorageAIServiceTaskRequest {
  /**
   * 任务 ID
   */
  TaskId: string
}

/**
 * DescribeCloudStorageThumbnailList请求参数结构体
 */
export interface DescribeCloudStorageThumbnailListRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 缩略图文件名列表
   */
  ThumbnailList: Array<string>
}

/**
 * CheckFirmwareUpdate返回参数结构体
 */
export interface CheckFirmwareUpdateResponse {
  /**
   * 设备当前固件版本。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentVersion?: string
  /**
   * 固件可升级版本。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstVersion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageUsers返回参数结构体
 */
export interface DescribeCloudStorageUsersResponse {
  /**
   * 用户总数
   */
  TotalCount?: number
  /**
   * 用户信息
   */
  Users?: Array<CloudStorageUserInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStoragePackageConsumeDetails请求参数结构体
 */
export interface DescribeCloudStoragePackageConsumeDetailsRequest {
  /**
   * 开始日期
   */
  StartDate: string
  /**
   * 结束日期
   */
  EndDate: string
}

/**
 * DescribeActivateLicenseService返回参数结构体
 */
export interface DescribeActivateLicenseServiceResponse {
  /**
   * 增值服务激活码信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<LicenseServiceNumInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * wifi定位信息
 */
export interface WifiInfo {
  /**
   * mac地址
   */
  MAC: string
  /**
   * 信号强度
   */
  RSSI: number
}

/**
 * CreateCloudStorageAIServiceTask请求参数结构体
 */
export interface CreateCloudStorageAIServiceTaskRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存 AI 服务类型。可选值：
- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
- `VideoToText`：视频语义理解
   */
  ServiceType: string
  /**
   * 待分析云存的起始时间
   */
  StartTime: number
  /**
   * 待分析云存的结束时间
   */
  EndTime: number
  /**
   * 通道 ID
   */
  ChannelId?: number
  /**
   * 视频分析配置参数
   */
  Config?: string
  /**
   * 视频分析识别区域
   */
  ROI?: string
  /**
   * 分析外部传入的视频 URL 列表，支持 HLS 点播（m3u8）及常见视频格式（mp4 等）
   */
  VideoURLs?: Array<string>
  /**
   * 自定义任务 ID
   */
  CustomId?: string
}

/**
 * DescribeCloudStorageOrder请求参数结构体
 */
export interface DescribeCloudStorageOrderRequest {
  /**
   * 订单id
   */
  OrderId: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageEventsWithAITasks返回参数结构体
 */
export interface DescribeCloudStorageEventsWithAITasksResponse {
  /**
   * 云存事件列表
   */
  Events?: Array<CloudStorageEventWithAITasks>
  /**
   * 请求上下文, 用作查询游标
   */
  Context?: string
  /**
   * 拉取结果是否已经结束
   */
  Listover?: boolean
  /**
   * 内部结果数量，并不等同于事件总数。
   */
  Total?: number
  /**
   * 视频播放URL
   */
  VideoURL?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCloudStorageAIService返回参数结构体
 */
export interface ModifyCloudStorageAIServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceFirmWare请求参数结构体
 */
export interface DescribeDeviceFirmWareRequest {
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
 * BindCloudStorageUser请求参数结构体
 */
export interface BindCloudStorageUserRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 用户ID
   */
  UserId: string
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
  ChannelsDataUp?: Array<number | bigint>
  /**
   * 数据下行RX1信道
   */
  ChannelsDataRX1?: Array<number | bigint>
  /**
   * 数据下行RX2信道
   */
  ChannelsDataRX2?: Array<number | bigint>
  /**
   * 入网上行信道
   */
  ChannelsJoinUp?: Array<number | bigint>
  /**
   * 入网下行RX1信道
   */
  ChannelsJoinRX1?: Array<number | bigint>
  /**
   * 入网下行RX2信道
   */
  ChannelsJoinRX2?: Array<number | bigint>
  /**
   * 频点配置描述
   */
  Description?: string
}

/**
 * UpdateDeviceTWeCallAuthorizeStatus请求参数结构体
 */
export interface UpdateDeviceTWeCallAuthorizeStatusRequest {
  /**
   * TweCall授权状态：0未授权，1已授权
   */
  Status?: number
  /**
   * 产品ID
   */
  ProductId?: string
  /**
   * 设备名
   */
  DeviceName?: string
  /**
   * 微信用户的openId
   */
  WechatOpenId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTopicPolicy返回参数结构体
 */
export interface CreateTopicPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * InheritCloudStorageUser返回参数结构体
 */
export interface InheritCloudStorageUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTWeCallActiveStatus请求参数结构体
 */
export interface GetTWeCallActiveStatusRequest {
  /**
   * 参数已弃用，不用传参
   * @deprecated
   */
  MiniProgramAppId?: string
  /**
   * 设备列表
   */
  DeviceList?: Array<TWeCallInfo>
}

/**
 * GetAuthMiniProgramAppList请求参数结构体
 */
export interface GetAuthMiniProgramAppListRequest {
  /**
   * appId
   */
  MiniProgramAppId?: string
  /**
   * 页码
   */
  Offset?: number
  /**
   * 每页大小
   */
  Limit?: number
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
 * ActivateTWeCallLicense返回参数结构体
 */
export interface ActivateTWeCallLicenseResponse {
  /**
   * 设备激活返回数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceList?: Array<DeviceActiveResult>
  /**
   * 设备激活失败返回数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureList?: Array<DeviceActiveResult>
  /**
   * 设备激活成功返回数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessList?: Array<DeviceActiveResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ResetCloudStorageEvent请求参数结构体
 */
export interface ResetCloudStorageEventRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 通道ID
   */
  ChannelId?: number
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
 * CreateTRTCSignaturesWithRoomId请求参数结构体
 */
export interface CreateTRTCSignaturesWithRoomIdRequest {
  /**
   * TRTC进房间的用户名称数组，数组元素不可重复，最长不超过 10 个。
   */
  TRTCUserIds: Array<string>
  /**
   * 房间id
   */
  RoomId: string
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
 * 已注册通信类型信息
 */
export interface RegisteredDeviceNetTypeInfo {
  /**
   * 普通设备数
   */
  NormalDeviceNum: number
  /**
   * 蓝牙设备数
   */
  BluetoothDeviceNum: number
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
  /**
   * 每次请求的Filters的上限为10，Filter.Values的上限为1。
   */
  Filters?: Array<Filter>
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
 * DescribeCloudStorageThumbnailList返回参数结构体
 */
export interface DescribeCloudStorageThumbnailListResponse {
  /**
   * 缩略图访问地址
   */
  ThumbnailURLInfoList?: Array<ThumbnailURLInfoList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 项目详情
   */
  Project: ProjectEntry
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageThumbnail请求参数结构体
 */
export interface DescribeCloudStorageThumbnailRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 缩略图文件名
   */
  Thumbnail: string
}

/**
 * ModifyProductCloudStorageAIService请求参数结构体
 */
export interface ModifyProductCloudStorageAIServiceRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 开通状态
   */
  Enabled?: boolean
}

/**
 * CreateExternalSourceAIServiceTask请求参数结构体
 */
export interface CreateExternalSourceAIServiceTaskRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 云存 AI 服务类型。可选值：
- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
- `VideoToText`：视频语义理解
   */
  ServiceType: string
  /**
   * 分析外部传入的视频 URL 列表，支持 HLS 点播（m3u8）及常见视频格式（mp4 等）
   */
  VideoURLs: Array<string>
  /**
   * 自定义任务 ID
   */
  CustomId?: string
  /**
   * 视频分析配置参数
   */
  Config?: string
  /**
   * 视频分析识别区域
   */
  ROI?: string
}

/**
 * GetDeviceSumStatistics返回参数结构体
 */
export interface GetDeviceSumStatisticsResponse {
  /**
   * 激活设备总数
   */
  ActivationCount?: number
  /**
   * 在线设备总数
   */
  OnlineCount?: number
  /**
   * 前一天激活设备数
   */
  ActivationBeforeDay?: number
  /**
   * 前一天活跃设备数
   */
  ActiveBeforeDay?: number
  /**
   * 前一周激活设备数
   */
  ActivationWeekDayCount?: number
  /**
   * 前一周活跃设备数
   */
  ActiveWeekDayCount?: number
  /**
   * 上一周激活设备数
   */
  ActivationBeforeWeekDayCount?: number
  /**
   * 上一周活跃设备数
   */
  ActiveBeforeWeekDayCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InheritCloudStorageUser请求参数结构体
 */
export interface InheritCloudStorageUserRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 原始用户ID
   */
  UserId: string
  /**
   * 目标用户ID
   */
  ToUserId: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseTWeCallDevice请求参数结构体
 */
export interface PauseTWeCallDeviceRequest {
  /**
   * 设备列表
   */
  DeviceList?: Array<TWeCallInfo>
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  /**
   * 家庭ID，所有者带该参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FamilyId?: string
  /**
   * 家庭名称，所有者带该参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FamilyName?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例信息
公共实例过期时间 0001-01-01T00:00:00Z，公共实例是永久有效
 */
export interface InstanceDetail {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例类型（0 公共实例 1 标准企业实例 2新企业实例3新公共实例）
   */
  InstanceType?: number
  /**
   * 地域字母缩写
   */
  Region?: string
  /**
   * 区域全拼
   */
  ZoneId?: string
  /**
   * 支持设备总数
   */
  TotalDeviceNum?: number
  /**
   * 已注册设备数
   */
  UsedDeviceNum?: number
  /**
   * 项目数
   */
  ProjectNum?: number
  /**
   * 产品数
   */
  ProductNum?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 过期时间，公共实例过期时间 0001-01-01T00:00:00Z，公共实例是永久有效
   */
  ExpireTime?: string
  /**
   * 总设备数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalDevice?: number
  /**
   * 激活设备数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivateDevice?: number
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 消息上下行配置TPS
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpDownTPS?: number
  /**
   * 当前消息上下行TPS
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpDownCurrentTPS?: number
  /**
   * 消息转发配置TPS
注意：此字段可能返回 null，表示取不到有效值。
   */
  ForwardTPS?: number
  /**
   * 消息转发当前TPS
注意：此字段可能返回 null，表示取不到有效值。
   */
  ForwardCurrentTPS?: number
  /**
   * 实例单元数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CellNum?: number
  /**
   * 实例Tag
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingTag?: string
  /**
   * 每日消息数
注意：此字段可能返回 null，表示取不到有效值。
   */
  EverydayFreeMessageCount?: number
  /**
   * 最大在线设备数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxDeviceOnlineCount?: number
}

/**
 * TWeCall设备信息
 */
export interface TWeCallPkgInfo {
  /**
   * 包ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PkgId?: string
  /**
   * 包类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  PkgType?: number
  /**
   * 生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: number
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 已使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  LicenseUsedNum?: number
  /**
   * 总量
注意：此字段可能返回 null，表示取不到有效值。
   */
  LicenseTotalNum?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceFirmwares返回参数结构体
 */
export interface DescribeDeviceFirmwaresResponse {
  /**
   * 固件信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Firmwares: Array<DeviceFirmwareInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageUsers请求参数结构体
 */
export interface DescribeCloudStorageUsersRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 分页拉取数量
   */
  Limit: number
  /**
   * 分页拉取偏移
   */
  Offset: number
}

/**
 * TWeCall信息
 */
export interface TWeCallLicenseInfo {
  /**
   * voip类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TWeCallType?: string
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalNum?: number
  /**
   * 已使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedNum?: number
}

/**
 * DescribeCloudStorageDate请求参数结构体
 */
export interface DescribeCloudStorageDateRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 通道ID
   */
  ChannelId?: number
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
 * DescribeDeviceFirmwares请求参数结构体
 */
export interface DescribeDeviceFirmwaresRequest {
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
 * DeleteDevices请求参数结构体
 */
export interface DeleteDevicesRequest {
  /**
   * 多个设备标识
   */
  DevicesItems: Array<DevicesItem>
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
 * DeleteCloudStorageEvent返回参数结构体
 */
export interface DeleteCloudStorageEventResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageTime返回参数结构体
 */
export interface DescribeCloudStorageTimeResponse {
  /**
   * 接口返回数据
   */
  Data?: CloudStorageTimeData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeGatewaySubProducts返回参数结构体
 */
export interface DescribeGatewaySubProductsResponse {
  /**
   * 当前分页的可绑定或解绑的产品信息。
   */
  Products?: Array<BindProductInfo>
  /**
   * 可绑定或解绑的产品总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageMultiThumbnail返回参数结构体
 */
export interface DescribeCloudStorageMultiThumbnailResponse {
  /**
   * 缩略图访问地址
   */
  ThumbnailURLInfoList?: Array<ThumbnailURLInfoList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 产品拥有者名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductOwnerName: string
}

/**
 * DescribeFreeCloudStorageNum请求参数结构体
 */
export type DescribeFreeCloudStorageNumRequest = null

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
 * InvokeExternalSourceAIServiceTask返回参数结构体
 */
export interface InvokeExternalSourceAIServiceTaskResponse {
  /**
   * 任务是否执行完成
   */
  Completed?: boolean
  /**
   * 任务 ID
   */
  TaskId?: string
  /**
   * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskInfo?: CloudStorageAIServiceTask
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 产品类型 填写 ( 0 普通产品 ， 5 网关产品)
   */
  ProductType: number
  /**
   * 加密类型 ，1表示证书认证，2表示秘钥认证，21表示TID认证-SE方式，22表示TID认证-软加固方式
   */
  EncryptionType: string
  /**
   * 连接类型 可以填写 wifi、wifi-ble、cellular、5g、lorawan、ble、ethernet、wifi-ethernet、else、sub_zigbee、sub_ble、sub_433mhz、sub_else、sub_blemesh
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
  /**
   * 平均传输速率
   */
  Rate?: string
  /**
   * 期限
   */
  Period?: string
}

/**
 * TransferCloudStorage请求参数结构体
 */
export interface TransferCloudStorageRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 已开通云存的设备名称
   */
  DeviceName: string
  /**
   * 未开通云存的设备名称
   */
  ToDeviceName: string
  /**
   * 未开通云存的设备产品ID
   */
  ToProductId?: string
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
 * DescribeFirmware请求参数结构体
 */
export interface DescribeFirmwareRequest {
  /**
   * 产品ID
   */
  ProductID: string
  /**
   * 固件版本号
   */
  FirmwareVersion: string
}

/**
 * DescribeCloudStorageAIServiceCallback返回参数结构体
 */
export interface DescribeCloudStorageAIServiceCallbackResponse {
  /**
   * 推送类型。http：HTTP 回调
   */
  Type?: string
  /**
   * HTTP 回调 URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallbackUrl?: string
  /**
   * HTTP 回调鉴权 Token
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallbackToken?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeBatchProduction返回参数结构体
 */
export interface DescribeBatchProductionResponse {
  /**
   * 量产数量。
   */
  BatchCnt?: number
  /**
   * 烧录方式。
   */
  BurnMethod?: number
  /**
   * 创建时间。
   */
  CreateTime?: number
  /**
   * 下载URL。
   */
  DownloadUrl?: string
  /**
   * 生成方式。
   */
  GenerationMethod?: number
  /**
   * 上传URL。
   */
  UploadUrl?: string
  /**
   * 成功数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount?: number
  /**
   * 量产最后失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastFailedReason?: string
  /**
   * 量产状态  0：任务创建，未量产；1：处理中；2：量产结束上传结果中；3：任务完成
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductCloudStorageAIService返回参数结构体
 */
export interface DescribeProductCloudStorageAIServiceResponse {
  /**
   * 开通状态
   */
  Enabled?: boolean
  /**
   * 当前账号是否可开通
   */
  Available?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteCloudStorageEvent请求参数结构体
 */
export interface DeleteCloudStorageEventRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 事件id
   */
  EventId: string
  /**
   * 开始时间，unix时间
   */
  StartTime: number
  /**
   * 结束时间，unix时间
   */
  EndTime: number
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 通道ID
   */
  ChannelId?: number
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
 * BindDevices返回参数结构体
 */
export interface BindDevicesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 输出参数，取值设备端上报$thing/up/action method为action_reply 的 response字段，物模型协议参考https://cloud.tencent.com/document/product/1081/34916#.E8.AE.BE.E5.A4.87.E8.A1.8C.E4.B8.BA.E8.B0.83.E7.94.A8
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputParams: string
  /**
   * 返回状态，取值设备端上报$thing/up/action	method为action_reply 的 status字段，如果不包含status字段，则取默认值，空字符串，物模型协议参考https://cloud.tencent.com/document/product/1081/34916#.E8.AE.BE.E5.A4.87.E8.A1.8C.E4.B8.BA.E8.B0.83.E7.94.A8
   */
  Status: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TransferTWeCallDevice请求参数结构体
 */
export interface TransferTWeCallDeviceRequest {
  /**
   * sn信息，product_deviceName
   */
  TransferInDevice?: string
  /**
   * sn信息，product_deviceName
   */
  TransferOutDevice?: string
}

/**
 * 套餐包消耗任务列表
 */
export interface PackageConsumeTask {
  /**
   * 任务id
   */
  TaskId?: number
  /**
   * 任务创始时间
   */
  CreateTime?: string
  /**
   * 任务状态，1待处理，2处理中，3已完成
   */
  State?: number
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
 * CreateCloudStorageAIService请求参数结构体
 */
export interface CreateCloudStorageAIServiceRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存 AI 套餐 ID。可选值：

- `1m_low_od`：低功耗目标检测月套餐
- `1y_low_od`：低功耗目标检测年套餐
- `1m_ev_od`：事件目标检测月套餐
- `1y_ev_od`：事件目标检测年套餐
- `1m_ft_od`：全时目标检测月套餐
- `1y_ft_od`：全时目标检测年套餐
- `1m_low_hl`：低功耗视频浓缩月套餐
- `1y_low_hl`：低功耗视频浓缩年套餐
- `1m_ev_hl`：事件视频浓缩月套餐
- `1y_ev_hl`：事件视频浓缩年套餐
- `1m_ft_hl`：全时视频浓缩月套餐
- `1y_ft_hl`：全时视频浓缩年套餐
   */
  PackageId: string
  /**
   * 通道 ID
   */
  ChannelId?: number
  /**
   * 订单 ID
   */
  OrderId?: string
}

/**
 * DescribeDeviceLocationSolve返回参数结构体
 */
export interface DescribeDeviceLocationSolveResponse {
  /**
   * 经度
   */
  Longitude: number
  /**
   * 纬度
   */
  Latitude: number
  /**
   * 类型
   */
  LocationType: string
  /**
   * 误差精度预估，单位为米
注意：此字段可能返回 null，表示取不到有效值。
   */
  Accuracy: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIotVideoCloudStorage返回参数结构体
 */
export interface CreateIotVideoCloudStorageResponse {
  /**
   * 订单金额，单位为分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Price?: number
  /**
   * 支付金额，单位为分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Amount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePackageConsumeTask返回参数结构体
 */
export interface DescribePackageConsumeTaskResponse {
  /**
   * 文件下载的url，文件详情是套餐包消耗详情
   */
  URL?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckFirmwareUpdate请求参数结构体
 */
export interface CheckFirmwareUpdateRequest {
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
 * RemoveUserByRoomIdFromTRTC请求参数结构体
 */
export interface RemoveUserByRoomIdFromTRTCRequest {
  /**
   * 房间id
   */
  RoomId: string
  /**
   * 用户名称数组，数组元素不可重复，最长不超过 10 个。
   */
  TRTCUserIds: Array<string>
}

/**
 * 云存用户信息
 */
export interface CloudStorageUserInfo {
  /**
   * 用户ID
   */
  UserId?: string
}

/**
 * ModifyPositionSpace返回参数结构体
 */
export interface ModifyPositionSpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCloudStorageAIServiceCallback返回参数结构体
 */
export interface ModifyCloudStorageAIServiceCallbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  /**
   * 位置点的定位类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocationType: string
  /**
   * 位置点的精度预估，单位为米
注意：此字段可能返回 null，表示取不到有效值。
   */
  Accuracy: number
}

/**
 * CreateFenceBind返回参数结构体
 */
export interface CreateFenceBindResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyTopicRule返回参数结构体
 */
export interface ModifyTopicRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeCloudStorageAIServiceTask返回参数结构体
 */
export interface DescribeCloudStorageAIServiceTaskResponse {
  /**
   * 任务信息
   */
  TaskInfo?: CloudStorageAIServiceTask
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云存事件
 */
export interface CloudStorageEvent {
  /**
   * 事件起始时间（Unix 时间戳，秒级
   */
  StartTime: number
  /**
   * 事件结束时间（Unix 时间戳，秒级
   */
  EndTime: number
  /**
   * 事件缩略图
   */
  Thumbnail: string
  /**
   * 事件ID
   */
  EventId: string
  /**
   * 事件录像上传状态，Finished: 全部上传成功 Partial: 部分上传成功 Failed: 上传失败	
注意：此字段可能返回 null，表示取不到有效值。
   */
  UploadStatus?: string
  /**
   * 事件自定义数据	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
}

/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
  /**
   * 实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: InstanceDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * UploadFirmware返回参数结构体
 */
export interface UploadFirmwareResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 设备对应产品所属的主账号名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayProductOwnerName: string
  /**
   * 设备对应产品所属的主账号 UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayProductOwnerUin: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CreatePositionSpace返回参数结构体
 */
export interface CreatePositionSpaceResponse {
  /**
   * 空间Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetCloudStorageEvent返回参数结构体
 */
export interface ResetCloudStorageEventResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageAIServiceTasks返回参数结构体
 */
export interface DescribeCloudStorageAIServiceTasksResponse {
  /**
   * 任务列表
   */
  Tasks?: Array<CloudStorageAIServiceTask>
  /**
   * 任务数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePositionSpace返回参数结构体
 */
export interface DeletePositionSpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeActivateDevice返回参数结构体
 */
export interface DescribeActivateDeviceResponse {
  /**
   * 设备激活详情信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: ActivateDeviceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetTWeCallDevice返回参数结构体
 */
export interface ResetTWeCallDeviceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCloudStorage返回参数结构体
 */
export interface DescribeCloudStorageResponse {
  /**
   * 云存开启状态，1为开启，0为未开启或已过期
   */
  Status?: number
  /**
   * 云存类型，1为全时云存，2为事件云存
   */
  Type?: number
  /**
   * 云存套餐过期时间
   */
  ExpireTime?: number
  /**
   * 云存回看时长
   */
  ShiftDuration?: number
  /**
   * 云存用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageStreamData请求参数结构体
 */
export interface DescribeCloudStorageStreamDataRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 图片流事件开始时间
   */
  StartTime: number
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
  /**
   * 是否开通物联使能
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableOpenState: number
}

/**
 * PublishMessage返回参数结构体
 */
export interface PublishMessageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeModelDefinition请求参数结构体
 */
export interface DescribeModelDefinitionRequest {
  /**
   * 产品ID
   */
  ProductId: string
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
 * ActivateTWeCallLicense请求参数结构体
 */
export interface ActivateTWeCallLicenseRequest {
  /**
   * TWecall类型：0-体验套餐；1-家庭安防场景； 2-穿戴类场景； 3-生活娱乐场景； 4-对讲及其它场景
   */
  PkgType: number
  /**
   * 参数已弃用，不用传参
   * @deprecated
   */
  MiniProgramAppId?: string
  /**
   * 设备列表
   */
  DeviceList?: Array<TWeCallInfo>
}

/**
 * CreateTopicRule返回参数结构体
 */
export interface CreateTopicRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * InvokeCloudStorageAIServiceTask请求参数结构体
 */
export interface InvokeCloudStorageAIServiceTaskRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存 AI 服务类型。可选值：
- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
- `VideoToText`：视频语义理解
   */
  ServiceType: string
  /**
   * 待分析云存的起始时间
   */
  StartTime: number
  /**
   * 待分析云存的结束时间
   */
  EndTime: number
  /**
   * 通道 ID
   */
  ChannelId?: number
  /**
   * 视频分析配置参数
   */
  Config?: string
  /**
   * 视频分析识别区域
   */
  ROI?: string
  /**
   * 分析外部传入的视频 URL 列表，支持 HLS 点播（m3u8）及常见视频格式（mp4 等）
   */
  VideoURLs?: Array<string>
  /**
   * 自定义任务 ID
   */
  CustomId?: string
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

/**
 * DescribeCloudStorageEventsWithAITasks请求参数结构体
 */
export interface DescribeCloudStorageEventsWithAITasksRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 事件关联的视频 AI 分析服务类型（支持多选）。可选值：

- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
- `VideoToText`：视频语义理解
   */
  ServiceTypes: Array<string>
  /**
   * 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h
   */
  StartTime?: number
  /**
   * 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间
   */
  EndTime?: number
  /**
   * 请求上下文, 用作查询游标
   */
  Context?: string
  /**
   * 查询数据项目的最大数量, 默认为10。假设传Size=10，返回的实际事件数量为N，则 5 <= N <= 10。
   */
  Size?: number
  /**
   * 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。
   */
  EventId?: string
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 通道ID 非NVR设备则不填 NVR设备则必填 默认为无
   */
  ChannelId?: number
}

/**
 * DismissRoomByStrRoomIdFromTRTC请求参数结构体
 */
export interface DismissRoomByStrRoomIdFromTRTCRequest {
  /**
   * 房间id
   */
  RoomId: string
}

/**
 * 云存时间轴接口返回数据
 */
export interface CloudStorageTimeData {
  /**
   * 云存时间轴信息列表
   */
  TimeList?: Array<CloudStorageTimeInfo>
  /**
   * 播放地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoURL?: string
}

/**
 * DescribeDeviceLocationSolve请求参数结构体
 */
export interface DescribeDeviceLocationSolveRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 定位解析类型，wifi或GNSSNavigation
   */
  LocationType: string
  /**
   * LoRaEdge卫星导航电文
   */
  GNSSNavigation?: string
  /**
   * wifi信息
   */
  WiFiInfo?: Array<WifiInfo>
}

/**
 * DescribeVideoLicense请求参数结构体
 */
export interface DescribeVideoLicenseRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * DescribeCloudStorageAIService返回参数结构体
 */
export interface DescribeCloudStorageAIServiceResponse {
  /**
   * 云存 AI 套餐类型。可能取值：

- `1`：全时套餐
- `2`：事件套餐
- `3`：低功耗套餐
   */
  Type?: number
  /**
   * 云存 AI 套餐生效状态。可能取值：

- `0`：未开通或已过期
- `1`：生效中
   */
  Status?: number
  /**
   * 云存 AI 套餐过期时间 UNIX 时间戳
   */
  ExpireTime?: number
  /**
   * 用户 ID
   */
  UserId?: string
  /**
   * 视频分析启用状态
   */
  Enabled?: boolean
  /**
   * 视频分析配置参数
   */
  Config?: string
  /**
   * 视频分析识别区域
   */
  ROI?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssignTWeCallLicense请求参数结构体
 */
export interface AssignTWeCallLicenseRequest {
  /**
   * voip类型
   */
  PkgType: number
  /**
   * appId
   */
  MiniProgramAppId: string
  /**
   * License数，只支持50,500,1000,5000,10000,20000,50000
   */
  DeductNum: number
}

/**
 * 结构体（PackageInfo）记录了设备拥有的有效套餐信息，包括云存开启状态、云存类型、云存回看时长、云存套餐过期时间
 */
export interface PackageInfo {
  /**
   * 云存开启状态，0为未开启，2为正在生效，1为已过期
注：这里只返回状态为0的数据
   */
  Status?: number
  /**
   * 云存类型，1为全时云存，2为事件云存
   */
  CSType?: number
  /**
   * 云存回看时长
   */
  CSShiftDuration?: number
  /**
   * 云存套餐过期时间
   */
  CSExpiredTime?: number
  /**
   * 云存套餐创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: number
  /**
   * 云存套餐更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: number
  /**
   * 套餐id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageId?: string
  /**
   * 订单id
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrderId?: string
  /**
   * 通道id
   */
  ChannelId?: number
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CSUserId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribePackageConsumeTask请求参数结构体
 */
export interface DescribePackageConsumeTaskRequest {
  /**
   * 任务id
   */
  TaskId: number
}

/**
 * DismissRoomByStrRoomIdFromTRTC返回参数结构体
 */
export interface DismissRoomByStrRoomIdFromTRTCResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirmwareUpdateStatus返回参数结构体
 */
export interface DescribeFirmwareUpdateStatusResponse {
  /**
   * 升级任务源版本。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriVersion?: string
  /**
   * 升级任务目标版本。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstVersion?: string
  /**
   * 升级状态：- 0：设备离线。- 1：待处理。- 2：消息下发成功。- 3：下载中。- 4：烧录中。- 5：失败。- 6：升级完成。- 7：正在处理中。- 8：等待用户确认。- 10：升级超时。- 20：下载完成。
   */
  Status?: number
  /**
   * 进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Percent?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishFirmwareUpdateMessage返回参数结构体
 */
export interface PublishFirmwareUpdateMessageResponse {
  /**
   * 请求状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备固件信息
 */
export interface DeviceFirmwareInfo {
  /**
   * 固件类型
   */
  FwType: string
  /**
   * 固件版本
   */
  Version: string
  /**
   * 最后更新时间
   */
  UpdateTime: number
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
 * ResetCloudStorageAIService返回参数结构体
 */
export interface ResetCloudStorageAIServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InvokeCloudStorageAIServiceTask返回参数结构体
 */
export interface InvokeCloudStorageAIServiceTaskResponse {
  /**
   * 任务是否执行完成
   */
  Completed?: boolean
  /**
   * 任务 ID
   */
  TaskId?: string
  /**
   * 任务信息
   */
  TaskInfo?: CloudStorageAIServiceTask
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFenceBind返回参数结构体
 */
export interface ModifyFenceBindResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePositionFence返回参数结构体
 */
export interface DeletePositionFenceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAuthMiniProgramAppList返回参数结构体
 */
export interface GetAuthMiniProgramAppListResponse {
  /**
   * 小程序列表
   */
  MiniProgramList?: Array<AuthMiniProgramAppInfo>
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
 * UpdateDeviceTWeCallAuthorizeStatus返回参数结构体
 */
export interface UpdateDeviceTWeCallAuthorizeStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProductCloudStorageAIService返回参数结构体
 */
export interface ModifyProductCloudStorageAIServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeletePositionSpace请求参数结构体
 */
export interface DeletePositionSpaceRequest {
  /**
   * 位置空间Id
   */
  SpaceId: string
}

/**
 * DescribeActivateDevice请求参数结构体
 */
export interface DescribeActivateDeviceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
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
 * CreateCloudStorageAIService返回参数结构体
 */
export interface CreateCloudStorageAIServiceResponse {
  /**
   * 订单 ID
   */
  OrderId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetTWeCallActiveStatus返回参数结构体
 */
export interface GetTWeCallActiveStatusResponse {
  /**
   * 激活状态
   */
  TWeCallActiveInfos?: Array<TWeCallActiveInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseTWeCallDevice返回参数结构体
 */
export interface PauseTWeCallDeviceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListFirmwares返回参数结构体
 */
export interface ListFirmwaresResponse {
  /**
   * 固件总数
   */
  TotalCount?: number
  /**
   * 固件列表
   */
  Firmwares?: Array<FirmwareInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReleaseStudioProduct返回参数结构体
 */
export interface ReleaseStudioProductResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFirmware返回参数结构体
 */
export interface DescribeFirmwareResponse {
  /**
   * 固件版本号
   */
  Version?: string
  /**
   * 产品ID
   */
  ProductId?: string
  /**
   * 固件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 固件描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 固件Md5值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Md5sum?: string
  /**
   * 固件上传的秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  Createtime?: number
  /**
   * 产品名称
   */
  ProductName?: string
  /**
   * 固件升级模块
注意：此字段可能返回 null，表示取不到有效值。
   */
  FwType?: string
  /**
   * 固件用户自定义配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserDefined?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePackageConsumeTasks返回参数结构体
 */
export interface DescribePackageConsumeTasksResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 任务列表
   */
  List?: Array<PackageConsumeTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  ChannelsDataUp: Array<number | bigint>
  /**
   * 数据下行信道RX1
   */
  ChannelsDataRX1: Array<number | bigint>
  /**
   * 数据下行信道RX2
   */
  ChannelsDataRX2: Array<number | bigint>
  /**
   * 入网上行信道
   */
  ChannelsJoinUp: Array<number | bigint>
  /**
   * 入网下行RX1信道
   */
  ChannelsJoinRX1: Array<number | bigint>
  /**
   * 入网下行RX2信道
   */
  ChannelsJoinRX2: Array<number | bigint>
  /**
   * 创建时间
   */
  CreateTime: number
}

/**
 * DescribeDeviceFirmWare返回参数结构体
 */
export interface DescribeDeviceFirmWareResponse {
  /**
   * 固件信息
   */
  Data: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 已注册设备类型信息
 */
export interface RegisteredDeviceTypeInfo {
  /**
   * 已注册设备数
   */
  NormalDeviceNum: number
  /**
   * 已注册网关数
   */
  GatewayDeviceNum: number
  /**
   * 已注册子设备数
   */
  SubDeviceNum: number
}

/**
 * 缩略图信息
 */
export interface ThumbnailURLInfoList {
  /**
   * 缩略图访问地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThumbnailURL?: string
  /**
   * 缩略图访问地址的过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增值服务数量统计
 */
export interface LicenseServiceNumInfo {
  /**
   * 服务类型
   */
  LicenseType?: string
  /**
   * 授权总数
   */
  TotalNum?: number
  /**
   * 已使用授权数
   */
  UsedNum?: number
  /**
   * TWeCall激活码
注意：此字段可能返回 null，表示取不到有效值。
   */
  TWeCallLicense?: Array<TWeCallLicenseInfo>
}

/**
 * TRTC 的参数 可以用来加入房间
 */
export interface TRTCParams {
  /**
   * TRTC入参: TRTC的实例ID
   */
  SdkAppId: number
  /**
   * TRTC入参: 用户加入房间的ID
   */
  UserId: string
  /**
   * TRTC入参: 用户的签名用来鉴权
   */
  UserSig: string
  /**
   * TRTC入参: 加入的TRTC房间名称
   */
  StrRoomId: string
  /**
   * TRTC入参: 校验TRTC的KEY
   */
  PrivateKey: string
}

/**
 * ModifyCloudStorageAIService请求参数结构体
 */
export interface ModifyCloudStorageAIServiceRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存 AI 服务类型。可选值：
- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
   */
  ServiceType: string
  /**
   * 视频分析启用状态
   */
  Enabled?: boolean
  /**
   * 视频分析识别区域
   */
  ROI?: string
  /**
   * 视频分析配置参数
   */
  Config?: string
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
  TaskId?: number
  /**
   * 固件任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 固件任务创建时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 固件任务升级类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName?: string
  /**
   * 固件任务升级模式。originalVersion（按版本号升级）、filename（提交文件升级）、devicenames（按设备名称升级）
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpgradeMode?: string
  /**
   * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: string
  /**
   * 原始固件版本号，在UpgradeMode是originalVersion升级模式下会返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalVersion?: string
  /**
   * 创建账号ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserId?: number
  /**
   * 创建账号ID昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorNickName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableTopicRule返回参数结构体
 */
export interface DisableTopicRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  RuleName?: string
  /**
   * 规则描述
   */
  Description?: string
  /**
   * 创建时间
   */
  CreatedAt?: number
  /**
   * 规则是否禁用
   */
  RuleDisabled?: boolean
}

/**
 * DescribeCloudStorageAIServiceTasks请求参数结构体
 */
export interface DescribeCloudStorageAIServiceTasksRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存 AI 服务类型。可选值：
- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
- `VideoToText`：视频语义理解
   */
  ServiceType: string
  /**
   * 分页拉取数量
   */
  Limit: number
  /**
   * 分页拉取偏移
   */
  Offset?: number
  /**
   * 任务状态。可选值：
- （不传）：查询全部状态的任务
- `1`：失败
- `2`：成功但结果为空
- `3`：成功且结果非空
- `4`：执行中
   */
  Status?: number
  /**
   * 用户 ID
   */
  UserId?: string
  /**
   * 通道 ID
   */
  ChannelId?: number
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
 * 视频设备激活码统计
 */
export interface VideoLicenseEntity {
  /**
   * 激活码类型，取值范围如下：0_5_mbps、1_mbps、1_5_mbps、2_mbps
   */
  Type?: string
  /**
   * 有效激活码总数
   */
  TotalCount?: number
  /**
   * 待使用的激活码数量
   */
  UsedCount?: number
  /**
   * 即将过期的激活码数量
   */
  ExpiresSoonCount?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenerateCloudStorageAIServiceTaskFileURL返回参数结构体
 */
export interface GenerateCloudStorageAIServiceTaskFileURLResponse {
  /**
   * 文件下载 URL
   */
  FileURL?: string
  /**
   * 过期时间 UNIX 时间戳（最大不超过文件所属任务的过期时间）
   */
  ExpireTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备激活详情信息
 */
export interface ActivateDeviceInfo {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例类型
   */
  InstanceType: number
  /**
   * 设备激活信息
   */
  DeviceActivationDetails: DeviceActivationDetail
  /**
   * 已注册设备类型信息
   */
  RegisteredDeviceType: RegisteredDeviceTypeInfo
  /**
   * 已注册设备通信类型信息
   */
  RegisteredDeviceNetType: RegisteredDeviceNetTypeInfo
}

/**
 * ResetTWeCallDevice请求参数结构体
 */
export interface ResetTWeCallDeviceRequest {
  /**
   * 设备列表
   */
  DeviceList?: Array<TWeCallInfo>
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetPositionSpaceList返回参数结构体
 */
export interface GetPositionSpaceListResponse {
  /**
   * 位置空间列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<PositionSpaceInfo>
  /**
   * 位置空间数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePositionFence返回参数结构体
 */
export interface CreatePositionFenceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 规则绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  CamTag?: Array<CamTag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * TWeCall信息
 */
export interface TWeCallInfo {
  /**
   * Sn信息，SN格式：产品ID_设备名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sn: string
  /**
   * 小程序ID，参数已弃用，不用传参
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ModelId?: string
  /**
   * 激活数
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ActiveNum?: number
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
 * 标签数据结构
 */
export interface CamTag {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey?: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue?: string
}

/**
 * 微信硬件设备信息
 */
export interface WXDeviceInfo {
  /**
   * 设备ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceId?: string
  /**
   * 设备信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WXIoTDeviceInfo?: WXIoTDeviceInfo
}

/**
 * 云存事件及其关联的云存 AI 任务
 */
export interface CloudStorageEventWithAITasks {
  /**
   * 事件起始时间（Unix 时间戳，秒级
   */
  StartTime?: number
  /**
   * 事件结束时间（Unix 时间戳，秒级
   */
  EndTime?: number
  /**
   * 事件缩略图
   */
  Thumbnail?: string
  /**
   * 事件ID
   */
  EventId?: string
  /**
   * 事件录像上传状态，Finished: 全部上传成功 Partial: 部分上传成功 Failed: 上传失败
   */
  UploadStatus?: string
  /**
   * 事件自定义数据
   */
  Data?: string
  /**
   * 事件关联的云存 AI 任务列表
   */
  AITasks?: Array<CloudStorageAIServiceTask>
}

/**
 * CreateDeviceChannel请求参数结构体
 */
export interface CreateDeviceChannelRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 通道ID
   */
  ChannelId: number
}

/**
 * DescribeDevicePackages返回参数结构体
 */
export interface DescribeDevicePackagesResponse {
  /**
   * 有效云存套餐数量
   */
  TotalCount?: number
  /**
   * 有效云存套餐列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Packages?: Array<PackageInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoLicense返回参数结构体
 */
export interface DescribeVideoLicenseResponse {
  /**
   * 视频激活码分类概览
注意：此字段可能返回 null，表示取不到有效值。
   */
  License?: Array<VideoLicenseEntity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePackageConsumeTasks请求参数结构体
 */
export interface DescribePackageConsumeTasksRequest {
  /**
   * 分页单页量
   */
  Limit: number
  /**
   * 分页的偏移量，第一页为0
   */
  Offset: number
}

/**
 * GetFamilyDeviceUserList返回参数结构体
 */
export interface GetFamilyDeviceUserListResponse {
  /**
   * 设备的用户列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserList?: Array<DeviceUser>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLoRaGateway返回参数结构体
 */
export interface DeleteLoRaGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssignTWeCallLicense返回参数结构体
 */
export interface AssignTWeCallLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  ChannelsDataUp?: Array<number | bigint>
  /**
   * 数据下行信道RX1
   */
  ChannelsDataRX1?: Array<number | bigint>
  /**
   * 数据下行信道RX2
   */
  ChannelsDataRX2?: Array<number | bigint>
  /**
   * 入网上行信道
   */
  ChannelsJoinUp?: Array<number | bigint>
  /**
   * 入网下行信道RX1
   */
  ChannelsJoinRX1?: Array<number | bigint>
  /**
   * 入网下行信道RX2
   */
  ChannelsJoinRX2?: Array<number | bigint>
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableTopicRule返回参数结构体
 */
export interface EnableTopicRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  /**
   * 每次请求的Filters的上限为10，Filter.Values的上限为1。
   */
  Filters?: Array<Filter>
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
 * BindProducts返回参数结构体
 */
export interface BindProductsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 是否跨账号产品
   */
  ProductSource?: number
}

/**
 * CreateExternalSourceAIServiceTask返回参数结构体
 */
export interface CreateExternalSourceAIServiceTaskResponse {
  /**
   * 任务 ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyLoRaGateway返回参数结构体
 */
export interface ModifyLoRaGatewayResponse {
  /**
   * 返回网关数据
   */
  Gateway: LoRaGatewayItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageAIService请求参数结构体
 */
export interface DescribeCloudStorageAIServiceRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存 AI 服务类型。可选值：
- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
   */
  ServiceType: string
}

/**
 * DescribeCloudStorageOrder返回参数结构体
 */
export interface DescribeCloudStorageOrderResponse {
  /**
   * 云存套餐开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: number
  /**
   * 云存套餐过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: number
  /**
   * 套餐id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageId?: string
  /**
   * 套餐状态
0：等待生效
1: 已过期
2:生效
   */
  Status?: number
  /**
   * 通道id
   */
  ChannelId?: number
  /**
   * 订单金额，单位为分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Price?: number
  /**
   * 支付金额，单位为分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Amount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeActivateLicenseService请求参数结构体
 */
export interface DescribeActivateLicenseServiceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 激活码类型
   */
  LicenseType?: string
}

/**
 * CreateTRTCSignaturesWithRoomId返回参数结构体
 */
export interface CreateTRTCSignaturesWithRoomIdResponse {
  /**
   * 返回参数数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  TRTCParamList?: Array<TRTCParams>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageEvents请求参数结构体
 */
export interface DescribeCloudStorageEventsRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h
   */
  StartTime?: number
  /**
   * 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间
   */
  EndTime?: number
  /**
   * 请求上下文, 用作查询游标
   */
  Context?: string
  /**
   * 查询数据项目的最大数量, 默认为10。假设传Size=10，返回的实际事件数量为N，则 5 <= N <= 10。
   */
  Size?: number
  /**
   * 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。
   */
  EventId?: string
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 通道ID 非NVR设备则不填 NVR设备则必填 默认为无
   */
  ChannelId?: number
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
  /**
   * 是否是 lora 设备
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLora: boolean
}

/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 附加查询返回包含字段值，不传返回0，有效值 ProductNum、ProjectNum、UsedDeviceNum、TotalDevice、ActivateDevice
   */
  Include?: Array<string>
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 产品ID，-1 代表全部产品
   */
  ProductId?: string
}

/**
 * ResetCloudStorage请求参数结构体
 */
export interface ResetCloudStorageRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 通道ID 非NVR设备则不填 NVR设备则必填 默认为无
   */
  ChannelId?: number
  /**
   * 云存用户Id，为空则为默认云存空间。
   */
  UserId?: string
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
 * 云存套餐包信息
 */
export interface CloudStoragePackageInfo {
  /**
   * 套餐包id
   */
  PackageId?: string
  /**
   * 套餐包名字
   */
  PackageName?: string
  /**
   * 套餐包数量
   */
  Num?: number
  /**
   * 已使用数量
   */
  UsedNum?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenerateSignedVideoURL请求参数结构体
 */
export interface GenerateSignedVideoURLRequest {
  /**
   * 视频播放原始URL地址
   */
  VideoURL: string
  /**
   * 播放链接过期时间
   */
  ExpireTime: number
  /**
   * 通道ID 非NVR设备不填 NVR设备必填 默认为无
   */
  ChannelId?: number
}

/**
 * ModifyPositionFence请求参数结构体
 */
export type ModifyPositionFenceRequest = null

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
 * DeleteTopicRule返回参数结构体
 */
export interface DeleteTopicRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * TransferCloudStorage返回参数结构体
 */
export interface TransferCloudStorageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateFirmware返回参数结构体
 */
export interface UpdateFirmwareResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  /**
   * 传1或者2；1代表强踢，2代表非强踢。传其它值不做任何处理
   */
  BindStrategy?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelAssignTWeCallLicense请求参数结构体
 */
export interface CancelAssignTWeCallLicenseRequest {
  /**
   * 订单号
   */
  PkgId: string
}

/**
 * DescribeCloudStoragePackageConsumeStats返回参数结构体
 */
export interface DescribeCloudStoragePackageConsumeStatsResponse {
  /**
   * 统计列表详情
   */
  Stats?: Array<PackageConsumeStat>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 微信物联网硬件信息
 */
export interface WXIoTDeviceInfo {
  /**
   * sn信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SN?: string
  /**
   * 票据
注意：此字段可能返回 null，表示取不到有效值。
   */
  SNTicket?: string
  /**
   * 模板ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageMultiThumbnail请求参数结构体
 */
export interface DescribeCloudStorageMultiThumbnailRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 多个缩略图文件名根据 | 分割
   */
  MultiThumbnail: string
}

/**
 * DescribeFirmwareUpdateStatus请求参数结构体
 */
export interface DescribeFirmwareUpdateStatusRequest {
  /**
   * 产品 ID。
   */
  ProductId: string
  /**
   * 设备名。
   */
  DeviceName: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 产品详情
 */
export interface ProductEntry {
  /**
   * 产品ID
   */
  ProductId?: string
  /**
   * 产品名称
   */
  ProductName?: string
  /**
   * 产品分组模板ID
   */
  CategoryId?: number
  /**
   * 加密类型。1表示证书认证，2表示密钥认证，21表示TID认证-SE方式，22表示TID认证-软加固方式
   */
  EncryptionType?: string
  /**
   * 连接类型。如：
wifi、wifi-ble、cellular、5g、lorawan、ble、ethernet、wifi-ethernet、else、sub_zigbee、sub_ble、sub_433mhz、sub_else、sub_blemesh
   */
  NetType?: string
  /**
   * 数据协议 (1 使用物模型 2 为自定义类型)
   */
  DataProtocol?: number
  /**
   * 产品描述
   */
  ProductDesc?: string
  /**
   * 状态 如：all 全部, dev 开发中, audit 审核中 released 已发布
   */
  DevStatus?: string
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 更新时间
   */
  UpdateTime?: number
  /**
   * 区域
   */
  Region?: string
  /**
   * 产品类型。如： 0 普通产品 ， 5 网关产品
   */
  ProductType?: number
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 产品ModuleId
   */
  ModuleId?: number
  /**
   * 是否使用脚本进行二进制转json功能 可以取值 true / false
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableProductScript?: string
  /**
   * 创建人 UinId
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserId?: number
  /**
   * 创建者昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorNickName?: string
  /**
   * 绑定策略（1：强踢；2：非强踢；0：表示无意义）
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindStrategy?: number
  /**
   * 设备数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceCount?: number
  /**
   * 平均传输速率
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rate?: string
  /**
   * 有效期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Period?: string
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
 * 云存 AI 服务任务信息
 */
export interface CloudStorageAIServiceTask {
  /**
   * 云存 AI 服务任务 ID
   */
  TaskId?: string
  /**
   * 产品 ID
   */
  ProductId?: string
  /**
   * 设备名称
   */
  DeviceName?: string
  /**
   * 通道 ID
   */
  ChannelId?: number
  /**
   * 云存 AI 服务类型。可能取值：

- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
- `VideoToText`：视频语义理解
   */
  ServiceType?: string
  /**
   * 对应云存视频的起始时间
   */
  StartTime?: number
  /**
   * 对应云存视频的结束时间
   */
  EndTime?: number
  /**
   * 任务状态（1：失败；2：成功但结果为空；3：成功且结果非空；4：执行中）
   */
  Status?: number
  /**
   * 任务结果
   */
  Result?: string
  /**
   * 任务输出文件列表
   */
  Files?: Array<string>
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 最后更新时间
   */
  UpdateTime?: number
  /**
   * 自定义任务 ID
   */
  CustomId?: string
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
 * DeleteLoRaFrequency请求参数结构体
 */
export interface DeleteLoRaFrequencyRequest {
  /**
   * 频点唯一ID
   */
  FreqId?: string
}

/**
 * InvokeExternalSourceAIServiceTask请求参数结构体
 */
export interface InvokeExternalSourceAIServiceTaskRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 云存 AI 服务类型。可选值：
- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
- `VideoToText`：视频语义理解
   */
  ServiceType: string
  /**
   * 分析外部传入的视频 URL 列表，支持 HLS 点播（m3u8）及常见视频格式（mp4 等）
   */
  VideoURLs: Array<string>
  /**
   * 自定义任务 ID
   */
  CustomId?: string
  /**
   * 视频分析配置参数
   */
  Config?: string
  /**
   * 视频分析识别区域
   */
  ROI?: string
}

/**
 * DescribeProductCloudStorageAIService请求参数结构体
 */
export interface DescribeProductCloudStorageAIServiceRequest {
  /**
   * 产品 ID
   */
  ProductId: string
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
 * ModifyTopicPolicy返回参数结构体
 */
export interface ModifyTopicPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageStreamData返回参数结构体
 */
export interface DescribeCloudStorageStreamDataResponse {
  /**
   * 图片流视频地址
   */
  VideoStream?: string
  /**
   * 图片流音频地址
   */
  AudioStream?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TransferTWeCallDevice返回参数结构体
 */
export interface TransferTWeCallDeviceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyCloudStorageAIServiceCallback请求参数结构体
 */
export interface ModifyCloudStorageAIServiceCallbackRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 推送类型。可选值：
- `http`：HTTP 回调
   */
  Type: string
  /**
   * HTTP 回调 URL
   */
  CallbackUrl?: string
  /**
   * HTTP 回调鉴权 Token
   */
  CallbackToken?: string
}

/**
 * GetWechatDeviceTicket返回参数结构体
 */
export interface GetWechatDeviceTicketResponse {
  /**
   * 微信设备信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WXDeviceInfo?: WXDeviceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeWeCallDevice返回参数结构体
 */
export interface ResumeWeCallDeviceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ResetCloudStorage返回参数结构体
 */
export interface ResetCloudStorageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Version?: string
  /**
   * 固件MD5值
   */
  Md5sum?: string
  /**
   * 固件创建时间
   */
  CreateTime?: number
  /**
   * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName?: string
  /**
   * 固件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 固件描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: string
  /**
   * 固件升级模块
注意：此字段可能返回 null，表示取不到有效值。
   */
  FwType?: string
  /**
   * 创建者子 uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserId?: number
  /**
   * 创建者昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorNickName?: string
  /**
   * 固件用户自定义配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserDefined?: string
}

/**
 * ResumeWeCallDevice请求参数结构体
 */
export interface ResumeWeCallDeviceRequest {
  /**
   * 设备列表
   */
  DeviceList?: Array<TWeCallInfo>
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
 * 授权小程序信息
 */
export interface AuthMiniProgramAppInfo {
  /**
   * 小程序APPID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MiniProgramAppId?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 小程序名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MiniProgramName?: string
  /**
   * 激活码数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LicenseNum?: number
  /**
   * 应用ID 
注意：此字段可能返回 null，表示取不到有效值。
   */
  IotAppId?: string
  /**
   * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  IotAppName?: string
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
  /**
   * 固件用户自定义配置信息
   */
  FirmwareUserDefined?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeCloudStoragePackageConsumeStats请求参数结构体
 */
export interface DescribeCloudStoragePackageConsumeStatsRequest {
  /**
   * 开始日期
   */
  StartDate: string
  /**
   * 结束日期，开始与结束日期间隔不可超过一年
   */
  EndDate: string
}

/**
 * DeleteFenceBind返回参数结构体
 */
export interface DeleteFenceBindResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CreateDeviceChannel返回参数结构体
 */
export interface CreateDeviceChannelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CancelAssignTWeCallLicense返回参数结构体
 */
export interface CancelAssignTWeCallLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageEvents返回参数结构体
 */
export interface DescribeCloudStorageEventsResponse {
  /**
   * 云存事件列表
   */
  Events?: Array<CloudStorageEvent>
  /**
   * 请求上下文, 用作查询游标
   */
  Context?: string
  /**
   * 拉取结果是否已经结束
   */
  Listover?: boolean
  /**
   * 内部结果数量，并不等同于事件总数。
   */
  Total?: number
  /**
   * 视频播放URL
   */
  VideoURL?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

- 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。

- 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 需要过滤的字段
   */
  Name: string
  /**
   * 字段的过滤的一个或多个值
   */
  Values?: Array<string>
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
  /**
   * 是否跨账号绑定产品
   */
  ProductSource?: number
}

/**
 * CreateFreeCloudStorage请求参数结构体
 */
export interface CreateFreeCloudStorageRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存套餐ID：
lye1w3d：低功耗事件3天周套餐。
ye1w3d：事件3天周套餐
   */
  PackageId: string
  /**
   * 如果当前设备已开启云存套餐，Override=1会使用新套餐覆盖原有套餐。不传此参数则默认为0。
   */
  Override?: number
  /**
   * 套餐列表顺序：PackageQueue=front会立即使用新购买的套餐，新购套餐结束后，列表中下一个未过期的套餐继续生效；PackageQueue=end会等设备当前所有已购买套餐过期后才会生效新购套餐。与Override参数不能同时使用。
   */
  PackageQueue?: string
  /**
   * 订单id
   */
  OrderId?: string
  /**
   * 通道ID
   */
  ChannelId?: number
  /**
   * 云存视频存储区域，国内默认为ap-guangzhou。海外默认为东南亚ap-singapore，可选美东na-ashburn、欧洲eu-frankfurt。
   */
  StorageRegion?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudStorageAIServiceTask返回参数结构体
 */
export interface CreateCloudStorageAIServiceTaskResponse {
  /**
   * 任务 ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudStorageDate返回参数结构体
 */
export interface DescribeCloudStorageDateResponse {
  /**
   * 云存日期数组，["2021-01-05","2021-01-06"]
   */
  Data?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFreeCloudStorageNum返回参数结构体
 */
export interface DescribeFreeCloudStorageNumResponse {
  /**
   * 套餐包信息
   */
  PackageInfos?: Array<CloudStoragePackageInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云存时间轴信息
 */
export interface CloudStorageTimeInfo {
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 结束时间
   */
  EndTime?: number
}

/**
 * CreateIotVideoCloudStorage请求参数结构体
 */
export interface CreateIotVideoCloudStorageRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存套餐ID：
yc1m3d ： 全时3天存储月套餐。
yc1m7d ： 全时7天存储月套餐。
yc1m30d ：全时30天存储月套餐。
yc1y3d ：全时3天存储年套餐。
yc1y7d ：全时7天存储年套餐。
yc1y30d ：全时30天存储年套餐。
ye1m3d ：事件3天存储月套餐。
ye1m7d ：事件7天存储月套餐。
ye1m30d ：事件30天存储月套餐 。
ye1y3d ：事件3天存储年套餐。
ye1y7d ：事件7天存储年套餐。
ye1y30d ：事件30天存储年套餐。
yc1w7d : 全时7天存储周套餐。
ye1w7d : 事件7天存储周套餐。
lye1m3d：低功耗事件3天月套餐。
lye1m7d：低功耗事件7天月套餐。
lye1m30d：低功耗事件30天月套餐。
lye1y3d：低功耗事件3天年套餐。
lye1y7d：低功耗事件7天年套餐。
lye1y30d：低功耗事件30天年套餐。
   */
  PackageId: string
  /**
   * 如果当前设备已开启云存套餐，Override=1会使用新套餐覆盖原有套餐。不传此参数则默认为0。
   */
  Override?: number
  /**
   * 套餐列表顺序：PackageQueue=front会立即使用新购买的套餐，新购套餐结束后，列表中下一个未过期的套餐继续生效；PackageQueue=end会等设备当前所有已购买套餐过期后才会生效新购套餐。与Override参数不能同时使用。
   */
  PackageQueue?: string
  /**
   * 订单id
   */
  OrderId?: string
  /**
   * 通道ID
   */
  ChannelId?: number
  /**
   * 云存视频存储区域，国内默认为ap-guangzhou。海外默认为东南亚ap-singapore，可选美东na-ashburn、欧洲eu-frankfurt。
   */
  StorageRegion?: string
}

/**
 * GenerateCloudStorageAIServiceTaskFileURL请求参数结构体
 */
export interface GenerateCloudStorageAIServiceTaskFileURLRequest {
  /**
   * 产品 ID
   */
  TaskId: string
  /**
   * 文件名
   */
  FileName: string
  /**
   * 过期时间 UNIX 时间戳（默认值为当前时间 1 小时后，最大不超过文件所属任务的过期时间）
   */
  ExpireTime?: number
}

/**
 * BindCloudStorageUser返回参数结构体
 */
export interface BindCloudStorageUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTopicPolicy返回参数结构体
 */
export interface DeleteTopicPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备激活详情信息
 */
export interface DeviceActivationDetail {
  /**
   * 可注册设备数
   */
  TotalDeviceNum: number
  /**
   * 已注册设备数
   */
  UsedDeviceNum: number
  /**
   * 设备授权数
   */
  TotalNormalLicense: number
  /**
   * 已使用设备授权数
   */
  UsedNormalLicense: number
  /**
   * 蓝牙授权数
   */
  TotalBluetoothLicense: number
  /**
   * 已使用蓝牙授权数
   */
  UsedBluetoothLicense: number
}

/**
 * UnbindDevices返回参数结构体
 */
export interface UnbindDevicesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteStudioProduct请求参数结构体
 */
export interface DeleteStudioProductRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * GetDeviceSumStatistics请求参数结构体
 */
export interface GetDeviceSumStatisticsRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 产品id列表，长度为0则拉取项目内全部产品
   */
  ProductIds?: Array<string>
}

/**
 * DescribeCloudStorageAIServiceCallback请求参数结构体
 */
export interface DescribeCloudStorageAIServiceCallbackRequest {
  /**
   * 产品 ID
   */
  ProductId: string
}

/**
 * DescribeCloudStorage请求参数结构体
 */
export interface DescribeCloudStorageRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存用户ID
   */
  UserId?: string
  /**
   * 通道ID 非NVR设备不填 NVR设备必填 默认为无
   */
  ChannelId?: number
}

/**
 * GenerateSignedVideoURL返回参数结构体
 */
export interface GenerateSignedVideoURLResponse {
  /**
   * 视频防盗链播放URL
   */
  SignedVideoURL?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCloudStorageThumbnail返回参数结构体
 */
export interface DescribeCloudStorageThumbnailResponse {
  /**
   * 缩略图访问地址
   */
  ThumbnailURL?: string
  /**
   * 缩略图访问地址的过期时间
   */
  ExpireTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishFirmwareUpdateMessage请求参数结构体
 */
export interface PublishFirmwareUpdateMessageRequest {
  /**
   * 产品 ID。
   */
  ProductID: string
  /**
   * 设备名称。
   */
  DeviceName?: string
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
 * ResetCloudStorageAIService请求参数结构体
 */
export interface ResetCloudStorageAIServiceRequest {
  /**
   * 产品 ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存 AI 服务类型。可选值：
- `RealtimeObjectDetect`：目标检测
- `Highlight`：视频浓缩
   */
  ServiceType: string
  /**
   * 通道 ID
   */
  ChannelId?: number
  /**
   * 用户 ID
   */
  UserId?: string
}

/**
 * TWeCall分类统计数据
 */
export interface TWeCallCategoryPkgInfo {
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  PkgType?: number
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  All?: number
  /**
   * 已使用数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Used?: number
}

/**
 * ModifyModelDefinition返回参数结构体
 */
export interface ModifyModelDefinitionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveUserByRoomIdFromTRTC返回参数结构体
 */
export interface RemoveUserByRoomIdFromTRTCResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeCloudStorageTime请求参数结构体
 */
export interface DescribeCloudStorageTimeRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 云存日期，例如"2020-01-05"
   */
  Date: string
  /**
   * 开始时间，unix时间
   */
  StartTime?: number
  /**
   * 结束时间，unix时间
   */
  EndTime?: number
  /**
   * 用户ID
   */
  UserId?: string
  /**
   * 通道ID
   */
  ChannelId?: number
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
 * GetTWeCallPkgList返回参数结构体
 */
export interface GetTWeCallPkgListResponse {
  /**
   * 激活状态
   */
  TWeCallPkgList?: Array<TWeCallPkgInfo>
  /**
   * 总数
   */
  Total?: number
  /**
   * 分类统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  TWeCallCategoryPkgList?: Array<TWeCallCategoryPkgInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
