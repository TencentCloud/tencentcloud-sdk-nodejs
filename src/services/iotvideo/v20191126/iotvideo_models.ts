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
 * DescribeRechargeRecords返回参数结构体
 */
export interface DescribeRechargeRecordsResponse {
  /**
   * 账户类型 1:设备接入 2:云存
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountType?: number
  /**
   * 充值记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Records?: Array<RechargeRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadOtaVersion返回参数结构体
 */
export interface UploadOtaVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateGencode返回参数结构体
 */
export interface CreateGencodeResponse {
  /**
   * 生成的源代码(zip压缩后的base64编码)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZipCode?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogs请求参数结构体
 */
export interface DescribeLogsRequest {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 当前分页的最大条数,0<取值范围<=100
   */
  Limit: number
  /**
   * 分页偏移量,取值范围>0
   */
  Offset: number
  /**
   * 日志类型 1.在线状态变更 2.ProConst变更 3.ProWritable变更 4.Action控制 5.ProReadonly变更 6.Event事件
   */
  LogType?: number
  /**
   * 查询的起始时间 UNIX时间戳，单位秒
   */
  StartTime?: number
  /**
   * 物模型对象索引，用于模糊查询，字符长度<=255，每层节点的字符长度<=16
   */
  DataObject?: string
  /**
   * 查询的结束时间 UNIX时间戳，单位秒
   */
  EndTime?: number
}

/**
 * CreateIotDataType请求参数结构体
 */
export interface CreateIotDataTypeRequest {
  /**
   * 用户自定义数据类型，json格式的字符串
   */
  IotDataType: string
}

/**
 * DescribePubVersions请求参数结构体
 */
export interface DescribePubVersionsRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * RefundStorageService返回参数结构体
 */
export interface RefundStorageServiceResponse {
  /**
   * 云存服务ID
   */
  ServiceId: string
  /**
   * 云存服务所在的区域
   */
  StorageRegion: string
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
   */
  ChnNum: number
  /**
   * 终端用户在IoT Video平台的注册ID
   */
  AccessId: string
  /**
   * 服务开始时间
   */
  StartTime: number
  /**
   * 服务失效时间
   */
  EndTime: number
  /**
   * 服务状态
1：正常使用中
2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。
3：已过期。查询不到设备保存在云端的数据。
4：等待服务生效。
   */
  Status: number
  /**
   * 有效云存定单列表
   */
  Data: Array<StorageOrder>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIotModel返回参数结构体
 */
export interface DescribeIotModelResponse {
  /**
   * 物模型定义，json格式的字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableDevice返回参数结构体
 */
export interface DisableDeviceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRunLog请求参数结构体
 */
export interface DescribeRunLogRequest {
  /**
   * 设备TID
   */
  Tid: string
}

/**
 * DescribeProducts请求参数结构体
 */
export interface DescribeProductsRequest {
  /**
   * 分页大小，当前页面中显示的最大数量，值范围 1-100
   */
  Limit: number
  /**
   * 分页偏移，Offset从0开始
   */
  Offset: number
  /**
   * 产器型号(APP产品,为APP包名)
   */
  ProductModel?: string
  /**
   * 开始时间 ，UNIX 时间戳，单位秒
   */
  StartTime?: number
  /**
   * 结束时间 ，UNIX 时间戳，单位秒
   */
  EndTime?: number
}

/**
 * DeleteTraceIds请求参数结构体
 */
export interface DeleteTraceIdsRequest {
  /**
   * 设备TID列表
   */
  Tids: Array<string>
}

/**
 * 物模型历史版本
 */
export interface IotModelData {
  /**
   * 版本号
   */
  Revision: number
  /**
   * 发布时间
   */
  ReleaseTime: number
}

/**
 * CreateStorageService请求参数结构体
 */
export interface CreateStorageServiceRequest {
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
   */
  PkgId: string
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 订单数量,可一次性创建多个订单
   */
  OrderCount: number
  /**
   * 云存服务所在的区域,如ap-guangzhou,ap-singapore, na-siliconvalley, eu-frankfurt
   */
  StorageRegion: string
  /**
   * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
   */
  ChnNum?: number
  /**
   * 设备主人用户在IoT Video平台的注册ID。该参数用于验证Paas/Saas平台的设备/用户关系链是否一致
   */
  AccessId?: string
  /**
   * 服务生效时间,若不指定此参数，服务立即生效
   */
  EnableTime?: number
}

/**
 * DescribeDevices返回参数结构体
 */
export interface DescribeDevicesResponse {
  /**
   * 设备信息 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<DevicesData>
  /**
   * 设备总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProduct返回参数结构体
 */
export interface ModifyProductResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProduct请求参数结构体
 */
export interface ModifyProductRequest {
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
  ProductDescription: string
  /**
   * 主芯片产商ID
   */
  ChipManufactureId?: string
  /**
   * 主芯片ID
   */
  ChipId?: string
}

/**
 * DisableDeviceStream请求参数结构体
 */
export interface DisableDeviceStreamRequest {
  /**
   * 设备TID列表
   */
  Tids: Array<string>
}

/**
 * CreateIotModel请求参数结构体
 */
export interface CreateIotModelRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 物模型json串
   */
  IotModel: string
}

/**
 * DescribeTraceStatus返回参数结构体
 */
export interface DescribeTraceStatusResponse {
  /**
   * 设备追踪状态列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<TraceStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUploadPath请求参数结构体
 */
export interface CreateUploadPathRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 固件文件名
   */
  FileName: string
}

/**
 * CreateDevToken请求参数结构体
 */
export interface CreateDevTokenRequest {
  /**
   * 客户的终端用户在IoT Video上的唯一标识ID
   */
  AccessId: string
  /**
   * 设备TID列表,0<元素数量<=100
   */
  Tids: Array<string>
  /**
   * Token的TTL(time to alive)分钟数
   */
  TtlMinutes: number
}

/**
 * DescribeStorageService返回参数结构体
 */
export interface DescribeStorageServiceResponse {
  /**
   * 云存服务ID
   */
  ServiceId?: string
  /**
   * 云存服务所在的区域
   */
  StorageRegion?: string
  /**
   * 设备TID
   */
  Tid?: string
  /**
   * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
   */
  ChnNum?: number
  /**
   * 终端用户在IoT Video平台的注册ID
   */
  AccessId?: string
  /**
   * 服务开始时间
   */
  StartTime?: number
  /**
   * 服务失效时间
   */
  EndTime?: number
  /**
   * 服务状态
1：正常使用中
2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。
3：已过期。查询不到设备保存在云端的数据。
4：等待服务生效。
   */
  Status?: number
  /**
   * 云存订单列表
   */
  Data?: Array<StorageOrder>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIotDataType请求参数结构体
 */
export interface DeleteIotDataTypeRequest {
  /**
   * 自定义数据类型的标识符
   */
  TypeId: string
}

/**
 * DescribeRechargeRecords请求参数结构体
 */
export interface DescribeRechargeRecordsRequest {
  /**
   * 账户类型 1:设备接入 2:云存。
   */
  AccountType: number
  /**
   * 从第几条记录开始显示, 默认值为0。
   */
  Offset?: number
  /**
   * 总共查询多少条记录，默认为值50。
   */
  Limit?: number
}

/**
 * ModifyVerContent返回参数结构体
 */
export interface ModifyVerContentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMessageQueue请求参数结构体
 */
export interface DescribeMessageQueueRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * DeleteAppUsr返回参数结构体
 */
export interface DeleteAppUsrResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegistrationStatus返回参数结构体
 */
export interface DescribeRegistrationStatusResponse {
  /**
   * 终端用户注册状态列表
   */
  Data?: Array<RegisteredStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeProducts返回参数结构体
 */
export interface DescribeProductsResponse {
  /**
   * 产品详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ProductData>
  /**
   * 产品总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 操作系统信息
 */
export interface OsData {
  /**
   * 芯片型号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChipId: string
  /**
   * 芯片厂商
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChipManufacture: string
}

/**
 * 设备证书及密钥
 */
export interface DeviceCertificate {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 设备初始证书信息，base64编码
   */
  Certificate: string
  /**
   * 设备私钥下载地址
   */
  WhiteBoxSoUrl: string
}

/**
 * UpgradeDevice请求参数结构体
 */
export interface UpgradeDeviceRequest {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 固件版本号
   */
  OtaVersion: string
  /**
   * 是否立即升级
   */
  UpgradeNow: boolean
}

/**
 * 设备日志信息
 */
export interface LogData {
  /**
   * 发生时间 UNIX时间戳，单位秒
   */
  Occurtime: number
  /**
   * 日志类型 1在线状态变更 2FP变更 3SP变更 4CO控制 5ST变更 6EV事件
   */
  LogType: number
  /**
   * 物模型对象索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataObject: string
  /**
   * 物模型旧值  json串
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldValue: string
  /**
   * 物模型新值  json串
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewValue: string
}

/**
 * DescribeModelDataRet返回参数结构体
 */
export interface DescribeModelDataRetResponse {
  /**
   * 设备响应结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDevToken返回参数结构体
 */
export interface CreateDevTokenResponse {
  /**
   * 返回的用户token列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<DevTokenInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunIotModel返回参数结构体
 */
export interface RunIotModelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunIotModel请求参数结构体
 */
export interface RunIotModelRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 物模型定义，json格式的字符串
   */
  IotModel: string
}

/**
 * 产品发布过的全部版本
 */
export interface OtaPubHistory {
  /**
   * 版本名称
   */
  OtaVersion: string
  /**
   * 发布时间，unix时间戳，单位：秒
   */
  PublishTime: number
}

/**
 * DeleteProduct请求参数结构体
 */
export interface DeleteProductRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * DescribeBindUsr返回参数结构体
 */
export interface DescribeBindUsrResponse {
  /**
   * 具有绑定关系的终端用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<BindUsrInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备信息
 */
export interface DeviceData {
  /**
   * 设备TID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tid: string
  /**
   * 激活时间 0代表未激活
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveTime: number
  /**
   * 设备是否被禁用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Disabled: boolean
  /**
   * 固件版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  OtaVersion: string
  /**
   * 设备在线状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Online: number
  /**
   * 设备最后上线时间（mqtt连接成功时间），UNIX时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastOnlineTime: number
  /**
   * 物模型json数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  IotModel: string
  /**
   * 设备名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceName: string
  /**
   * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId: string
  /**
   * 设备初始证书信息，base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Certificate: string
  /**
   * 设备私钥下载地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  WhiteBoxSoUrl: string
  /**
   * 设备推流状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamStatus: boolean
}

/**
 * DescribeStream请求参数结构体
 */
export interface DescribeStreamRequest {
  /**
   * 设备TID
   */
  Tid?: string
  /**
   * 终端用户ID
   */
  AccessId?: string
  /**
   * 直播协议, 可选值：RTSP、RTMP、HLS、HLS-fmp4
   */
  Protocol?: string
  /**
   * 音视频流地址
   */
  Address?: string
  /**
   * 设备访问token，访问用户未绑定的设备时，需提供该参数
   */
  AccessToken?: string
}

/**
 * 设备绑定的终端用户
 */
export interface BindUsrInfo {
  /**
   * IotVideo平台分配给终端用户的用户id
   */
  AccessId: string
  /**
   * 用户角色，owner：主人，guest：访客
   */
  Role: string
}

/**
 * DeleteOtaVersion请求参数结构体
 */
export interface DeleteOtaVersionRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
   */
  OtaVersion: string
  /**
   * 操作人
   */
  Operator?: string
}

/**
 * DescribeIotDataType返回参数结构体
 */
export interface DescribeIotDataTypeResponse {
  /**
   * 自定义数据类型，json格式的字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 产品信息
 */
export interface ProductData {
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
   * 产品描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductDescription: string
  /**
   * 创建时间，UNIX 时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: number
  /**
   * 物模型发布版本号,0代表物模型尚未发布
注意：此字段可能返回 null，表示取不到有效值。
   */
  IotModelRevision: number
  /**
   * 产品密钥
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretKey: string
  /**
   * 设备功能码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Features: Array<string>
  /**
   * 产器型号(APP产品,为APP包名)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductModel: string
  /**
   * 主芯片厂商id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChipManufactureId: string
  /**
   * 主芯片型号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChipId: string
  /**
   * 产品类别，0：普通视频设备；1：NVR设备
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductCate: number
  /**
   * 产品地区
China-Mainland（中国大陆）
China-Hong Kong, Macao and Taiwan（港澳台地区）
America（美国）
Europe（欧洲）
India（印度）
Other-Overseas（其他境外地区）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductRegion: string
  /**
   * 接入模型，bit0是0：公版小程序未接入，bit0是1：公版小程序已接入
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessMode: number
  /**
   * linux,android,liteos
注意：此字段可能返回 null，表示取不到有效值。
   */
  Os: string
}

/**
 * CreateBinding请求参数结构体
 */
export interface CreateBindingRequest {
  /**
   * 终端用户在IoT Video上的唯一标识ID
   */
  AccessId: string
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 用户角色，owner：主人，guest：访客
   */
  Role: string
  /**
   * 是否踢掉之前的主人，true：踢掉；false：不踢掉。当role为guest时，可以不填
   */
  ForceBind?: boolean
  /**
   * 设备昵称，最多不超过64个字符
   */
  Nick?: string
  /**
   * 绑定过程中的会话token，由设备通过SDK接口确认是否允许绑定的token，用于增加设备被绑定的安全性
   */
  BindToken?: string
}

/**
 * DeleteDevice请求参数结构体
 */
export interface DeleteDeviceRequest {
  /**
   * 设备TID列表
   */
  Tids: Array<string>
}

/**
 * 布尔值，标识指定设备是否在白名单中
 */
export interface TraceStatus {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 设备追踪状态
   */
  IsExist: boolean
}

/**
 * CreateAppUsr请求参数结构体
 */
export interface CreateAppUsrRequest {
  /**
   * 标识用户的唯一ID，防止同一个用户多次注册
   */
  CunionId: string
  /**
   * 用于小程序关联手机号
   */
  Mobile?: string
}

/**
 * ModifyDeviceProperty请求参数结构体
 */
export interface ModifyDevicePropertyRequest {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 如果设备处于休眠状态，是否唤醒设备
   */
  Wakeup: boolean
  /**
   * 物模型的分支路径
   */
  Branch: string
  /**
   * 写入的物模型数据，如果是json需要转义成字符串
   */
  Value: string
  /**
   * Value字段是否为数值（float、int）
   */
  IsNum?: boolean
}

/**
 * RunDeviceStream请求参数结构体
 */
export interface RunDeviceStreamRequest {
  /**
   * 设备TID 列表
   */
  Tids: Array<string>
}

/**
 * RunDevice返回参数结构体
 */
export interface RunDeviceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIotDataType返回参数结构体
 */
export interface DeleteIotDataTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTraceStatus请求参数结构体
 */
export interface DescribeTraceStatusRequest {
  /**
   * 设备TID列表
   */
  Tids: Array<string>
}

/**
 * CreateUsrToken返回参数结构体
 */
export interface CreateUsrTokenResponse {
  /**
   * 终端用户在IoT Video上的唯一标识ID
   */
  AccessId: string
  /**
   * IoT Video平台的AccessToken
   */
  AccessToken: string
  /**
   * Token的过期时间，单位秒(UTC时间)
   */
  ExpireTime: number
  /**
   * 终端ID
   */
  TerminalId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于终端用户临时访问设备的token授权信息
 */
export interface DevTokenInfo {
  /**
   * 客户的终端用户在IotVideo上的唯一标识id
   */
  AccessId: string
  /**
   * 设备TID
   */
  Tid: string
  /**
   * IotVideo平台的accessToken
   */
  AccessToken: string
  /**
   * Token的过期时间，单位秒(UTC时间)
   */
  ExpireTime: number
}

/**
 * CreateTraceIds请求参数结构体
 */
export interface CreateTraceIdsRequest {
  /**
   * 设备TID列表
   */
  Tids: Array<string>
}

/**
 * DeleteMessageQueue返回参数结构体
 */
export interface DeleteMessageQueueResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOtaVersions请求参数结构体
 */
export interface DescribeOtaVersionsRequest {
  /**
   * 分页偏移量
   */
  Offset: number
  /**
   * 每页数量，0<取值范围<=100
   */
  Limit: number
  /**
   * 产品ID，为空时查询客户所有产品的版本信息
   */
  ProductId?: string
  /**
   * 版本号，支持模糊匹配
   */
  OtaVersion?: string
  /**
   * 版本类型 1未发布 2测试发布 3正式发布 4禁用
   */
  PubStatus?: number
}

/**
 * DescribeTraceIds返回参数结构体
 */
export interface DescribeTraceIdsResponse {
  /**
   * 设备TID列表，列表元素之间以“,”分隔
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClearDeviceActiveCode返回参数结构体
 */
export interface ClearDeviceActiveCodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProduct返回参数结构体
 */
export interface CreateProductResponse {
  /**
   * 产品详细信息
   */
  Data?: ProductBase
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegistrationStatus请求参数结构体
 */
export interface DescribeRegistrationStatusRequest {
  /**
   * 终端用户的唯一ID列表，0<元素数量<=100
   */
  CunionIds: Array<string>
}

/**
 * CreateStorage请求参数结构体
 */
export interface CreateStorageRequest {
  /**
   * 云存套餐ID
   */
  PkgId: string
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 用户唯一标识，由厂商保证内部唯一性
   */
  UserTag: string
}

/**
 * UpgradeDevice返回参数结构体
 */
export interface UpgradeDeviceResponse {
  /**
   * 设备端返回的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableOtaVersion返回参数结构体
 */
export interface DisableOtaVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBindDev返回参数结构体
 */
export interface DescribeBindDevResponse {
  /**
   * 绑定的设备列表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<BindDevInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProduct请求参数结构体
 */
export interface CreateProductRequest {
  /**
   * 产器型号(APP产品,为APP包名)
   */
  ProductModel: string
  /**
   * 产品名称
仅支持中文、英文、数字、下划线，不超过32个字符
   */
  ProductName: string
  /**
   * 产品描述信息
不支持单引号、双引号、退格符、回车符、换行符、制表符、反斜杠、下划线、“%”、“#”、“$”，不超过128字符
   */
  ProductDescription: string
  /**
   * 设备功能码（ypsxth:音频双向通话 ，spdxth:视频单向通话）
   */
  Features?: Array<string>
  /**
   * 主芯片产商ID
   */
  ChipManufactureId?: string
  /**
   * 主芯片ID
   */
  ChipId?: string
  /**
   * 地域：
China-Mainland（中国大陆）
China-Hong Kong, Macao and Taiwan（港澳台地区）
America（美国）
Europe（欧洲）
India（印度）
Other-Overseas（其他境外地区）
   */
  ProductRegion?: string
  /**
   * 设备类型, 0-普通视频设备，1-NVR设备
   */
  ProductCate?: number
  /**
   * 接入模型，bit0是0：公版小程序未接入，bit0是1：公版小程序已接入
   */
  AccessMode?: number
  /**
   * Linux,Android,Liteos等系统
   */
  Os?: string
  /**
   * 芯片架构，只是针对操作系统为android的
   */
  ChipArch?: string
}

/**
 * 系统类型
 */
export interface SystemType {
  /**
   * 安卓系统
注意：此字段可能返回 null，表示取不到有效值。
   */
  Android: Array<OsData>
  /**
   * linux系统
注意：此字段可能返回 null，表示取不到有效值。
   */
  Linux: Array<OsData>
  /**
   * LiteOs系统
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiteOs: Array<OsData>
}

/**
 * RunTestOtaVersion返回参数结构体
 */
export interface RunTestOtaVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunTestOtaVersion请求参数结构体
 */
export interface RunTestOtaVersionRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
   */
  OtaVersion: string
  /**
   * 指定可升级的设备TID
   */
  Tids: Array<string>
  /**
   * 操作人
   */
  Operator?: string
  /**
   * 备注信息
   */
  Remark?: string
}

/**
 * DescribeDevice返回参数结构体
 */
export interface DescribeDeviceResponse {
  /**
   * 设备信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DeviceData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetMessageQueue返回参数结构体
 */
export interface SetMessageQueueResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewUploadTest返回参数结构体
 */
export interface RenewUploadTestResponse {
  /**
   * 刷新证书返回的信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RenewCertificate
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 版本发布的描述信息，需要国际化，可以为空
 */
export interface Contents {
  /**
   * 英文，长度不超过300个字符
注意：此字段可能返回 null，表示取不到有效值。
   */
  En?: string
  /**
   * 中文简体，长度不超过300个字符
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cn?: string
  /**
   * 中文繁体(Traditional Chinese)，长度不超过300个字符
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tc?: string
  /**
   * 默认语言，最多不超过300个字符
注意：此字段可能返回 null，表示取不到有效值。
   */
  Default?: string
}

/**
 * 刷新证书信息
 */
export interface RenewCertificate {
  /**
   * 刷新证书信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TempCertificate: CertificateInfo
}

/**
 * DeleteOtaVersion返回参数结构体
 */
export interface DeleteOtaVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadOtaVersion请求参数结构体
 */
export interface UploadOtaVersionRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
   */
  OtaVersion: string
  /**
   * 固件版本URL
   */
  VersionUrl: string
  /**
   * 文件大小，单位：byte
   */
  FileSize?: number
  /**
   * 文件md5校验码（32字符）
   */
  Md5?: string
  /**
   * 操作人
   */
  Operator?: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 版本发布的描述信息，需要国际化，可以为空
   */
  Contents?: Contents
}

/**
 * DescribeIotModels请求参数结构体
 */
export interface DescribeIotModelsRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * DescribeModelDataRet请求参数结构体
 */
export interface DescribeModelDataRetRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * CreateTraceIds返回参数结构体
 */
export interface CreateTraceIdsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOsList返回参数结构体
 */
export interface DescribeOsListResponse {
  /**
   * 系统类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: SystemType
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 申请上传证书回包
 */
export interface CosCertificate {
  /**
   * cos存储桶
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageBucket: string
  /**
   * cos存储园区
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageRegion: string
  /**
   * 存储路径，录制场景下该值为存储目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoragePath: string
  /**
   * 证书信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TempCertificate: CertificateInfo
  /**
   * SessionKey
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionKey: string
}

/**
 * ModifyVerContent请求参数结构体
 */
export interface ModifyVerContentRequest {
  /**
   * 产品id
   */
  ProductId: string
  /**
   * 需要修改的版本号
   */
  OtaVersion: string
  /**
   * 操作人,字符长度<=64
   */
  Operator?: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 版本发布的描述信息，需要国际化，可以为空
   */
  Contents?: Contents
}

/**
 * DeleteBinding请求参数结构体
 */
export interface DeleteBindingRequest {
  /**
   * 终端用户在IoT Video上的唯一标识ID
   */
  AccessId: string
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 用户角色，owner：主人，guest：访客
   */
  Role: string
}

/**
 * DescribeOtaVersions返回参数结构体
 */
export interface DescribeOtaVersionsResponse {
  /**
   * 版本数量
   */
  TotalCount?: number
  /**
   * 版本详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<VersionData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProduct返回参数结构体
 */
export interface DeleteProductResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunOtaVersion请求参数结构体
 */
export interface RunOtaVersionRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
   */
  OtaVersion: string
  /**
   * 灰度值,取值范围0-100，为0时相当于暂停发布
   */
  GrayValue: number
  /**
   * 指定的旧版本
   */
  OldVersions?: Array<string>
  /**
   * 操作人
   */
  Operator?: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 版本发布的描述信息，需要国际化，可以为空
   */
  Contents?: Contents
}

/**
 * CreateDevices返回参数结构体
 */
export interface CreateDevicesResponse {
  /**
   * 新创建设备的认证信息
   */
  Data?: Array<DeviceCertificate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备物模型数据
 */
export interface DeviceModelData {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 物模型分支路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Branch: string
  /**
   * 物模型数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  IotModel: string
}

/**
 * SetMessageQueue请求参数结构体
 */
export interface SetMessageQueueRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 消息队列类型 1-CMQ; 2-Ckafka
   */
  MsgQueueType: number
  /**
   * 消息类型,整型值（0-31）之间以“,”分隔
0.设备在线状态变更
1.常亮属性(ProConst)变更
2.可写属性(ProWritable)变更
3.只读属性(ProReadonly)变更
4.设备控制(Action)
5.设备事件(Event)
6.系统事件(System)
   */
  MsgType: string
  /**
   * 消息队列主题，不超过32字符
   */
  Topic: string
  /**
   * kafka消息队列的实例名，不超过64字符
   */
  Instance: string
  /**
   * 消息地域，不超过32字符
   */
  MsgRegion: string
}

/**
 * CreateStorageService返回参数结构体
 */
export interface CreateStorageServiceResponse {
  /**
   * 标志是否为续订
   */
  IsRenew: boolean
  /**
   * 云存服务ID
   */
  ServiceId: string
  /**
   * 云存服务所在的区域
   */
  StorageRegion: string
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
   */
  ChnNum: number
  /**
   * 终端用户在IoT Video平台的注册ID
   */
  AccessId: string
  /**
   * 服务开始时间
   */
  StartTime: number
  /**
   * 服务失效时间
   */
  EndTime: number
  /**
   * 服务状态
1：正常使用中
2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。
3：已过期。查询不到设备保存在云端的数据。
4：等待服务生效。
   */
  Status: number
  /**
   * 新增的云存定单列表
   */
  Data: Array<StorageOrder>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIotDataType请求参数结构体
 */
export interface DescribeIotDataTypeRequest {
  /**
   * 自定义数据类型的标识符，为空则返回全量自定义类型的列表
   */
  TypeId?: string
}

/**
 * SendOnlineMsg请求参数结构体
 */
export interface SendOnlineMsgRequest {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 如果设备处于休眠状态，是否唤醒设备
   */
  Wakeup: boolean
  /**
   * 等待回应类型
0：不等待设备回应直接响应请求;
1：要求设备确认消息已接收,或等待超时后返回;
2：要求设备进行响应处理,收到设备的响应数据后,将设备响应数据回应给请求方;
   */
  WaitResp: number
  /**
   * 消息主题
   */
  MsgTopic: string
  /**
   * 消息内容，最大长度不超过8k字节
   */
  MsgContent: string
}

/**
 * 接口DescribeStream输出参数
 */
export interface Data {
  /**
   * 直播协议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol: string
  /**
   * 流媒体播放地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  URI: string
  /**
   * 流媒体地址过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime: number
  /**
   * 视频编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoCodec: string
  /**
   * 音频编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioCodec: string
}

/**
 * DescribeDevice请求参数结构体
 */
export interface DescribeDeviceRequest {
  /**
   * 设备TID
   */
  Tid: string
}

/**
 * 证书信息
 */
export interface CertificateInfo {
  /**
   * SecretId
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretId: string
  /**
   * SecretKey
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretKey: string
  /**
   * Token
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token: string
  /**
   * 过期时间，UNIX时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredTime: number
}

/**
 * DescribeRunLog返回参数结构体
 */
export interface DescribeRunLogResponse {
  /**
   * 设备运行日志文本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeliverStorageService返回参数结构体
 */
export interface DeliverStorageServiceResponse {
  /**
   * 被转出的云存服务ID
   */
  SrcServiceId?: string
  /**
   * 被转入的云存服务ID
   */
  ServiceId?: string
  /**
   * 云存服务所在的区域
   */
  StorageRegion?: string
  /**
   * 设备TID
   */
  Tid?: string
  /**
   * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
   */
  ChnNum?: number
  /**
   * 终端用户在IoT Video平台的注册ID
   */
  AccessId?: string
  /**
   * 服务开始时间
   */
  StartTime?: number
  /**
   * 服务失效时间
   */
  EndTime?: number
  /**
   * 服务状态
1：正常使用中
2：待续费。设备云存服务已到期，但是历史云存数据未过期。续费后仍可查看这些历史数据。
3：已过期。查询不到设备保存在云端的数据。
4：等待服务生效。
   */
  Status?: number
  /**
   * 新增的云存订单列表
   */
  Data?: Array<StorageOrder>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIotModel请求参数结构体
 */
export interface DescribeIotModelRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 物模型版本号， -1表示最新编辑的（未发布）
   */
  Revision: number
}

/**
 * DescribeTraceIds请求参数结构体
 */
export type DescribeTraceIdsRequest = null

/**
 * CreateAppUsr返回参数结构体
 */
export interface CreateAppUsrResponse {
  /**
   * 厂商云标识用户的唯一ID
   */
  CunionId?: string
  /**
   * 客户的终端用户在IoT Video上的唯一标识ID
   */
  AccessId?: string
  /**
   * 用户是否为新创建
   */
  NewRegist?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTraceIds返回参数结构体
 */
export interface DeleteTraceIdsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMessageQueue请求参数结构体
 */
export interface DeleteMessageQueueRequest {
  /**
   * 产品ID
   */
  ProductId: string
}

/**
 * CreateUsrToken请求参数结构体
 */
export interface CreateUsrTokenRequest {
  /**
   * 终端用户在IoT Video上的唯一标识ID
   */
  AccessId: string
  /**
   * 终端唯一ID，用于区分同一个用户的多个终端
   */
  UniqueId: string
  /**
   * Token的TTL(time to alive)分钟数
   */
  TtlMinutes: number
  /**
   * 旧的AccessToken。续期Token时，此参数为必须。
   */
  OldAccessToken?: string
}

/**
 * RunDevice请求参数结构体
 */
export interface RunDeviceRequest {
  /**
   * TID列表 ≤100
   */
  Tids: Array<string>
}

/**
 * RunOtaVersion返回参数结构体
 */
export interface RunOtaVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDevice请求参数结构体
 */
export interface ModifyDeviceRequest {
  /**
   * 设备ID
   */
  Tid: string
  /**
   * 用户ID
   */
  AccessId: string
  /**
   * 设备昵称，最多不超过64个字符
   */
  Nick: string
}

/**
 * DescribeDeviceModel返回参数结构体
 */
export interface DescribeDeviceModelResponse {
  /**
   * 设备物模型信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DeviceModelData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStorageService请求参数结构体
 */
export interface DescribeStorageServiceRequest {
  /**
   * 云存服务ID
   */
  ServiceId: string
  /**
   * 是否返回已结束的订单信息(已过期/已退订/已转移)
   */
  GetFinishedOrder?: boolean
}

/**
 * 产品信息摘要
 */
export interface ProductBase {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 产器型号(APP产品,为APP包名)
   */
  ProductModel: string
  /**
   * 产品名称
   */
  ProductName: string
  /**
   * 产品描述信息
   */
  ProductDescription: string
  /**
   * 创建时间，UNIX 时间戳，单位秒
   */
  CreateTime: number
  /**
   * 物模型发布版本号,0代表物模型尚未发布
   */
  IotModelRevision: number
  /**
   * 产品密钥
   */
  SecretKey: string
  /**
   * 设备功能码
ypsxth : 音频双向通话;	
spdxth : 视频单向通话(监控);
NVR0824 : NVR设备,大于8路，小于等于24路;
WifiKeepalive : Wifi保活(低功耗产品);
Alexa : Alexa接入;
Google : Google接入;
注意：此字段可能返回 null，表示取不到有效值。
   */
  FuncCode: Array<string>
  /**
   * 产品类别，0 : 普通视频设备；1 : NVR设备
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductCate: number
  /**
   * 产品地域
China-Mainland（中国大陆）
China-Hong Kong, Macao and Taiwan（港澳台地区）
America（美国）
Europe（欧洲）
India（印度）
Other-Overseas（其他境外地区）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductRegion: string
}

/**
 * CreateGencode请求参数结构体
 */
export interface CreateGencodeRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 物模型发布版本号,-1代表未发布的，保存的是草稿箱的版本。1代表已发布的物模型。
   */
  Revision: number
}

/**
 * DescribePubVersions返回参数结构体
 */
export interface DescribePubVersionsResponse {
  /**
   * 历史发布的版本列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<OtaPubHistory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClearDeviceActiveCode请求参数结构体
 */
export interface ClearDeviceActiveCodeRequest {
  /**
   * 设备TID列表，0<元素数量<=100
   */
  Tids: Array<string>
}

/**
 * ModifyDeviceAction请求参数结构体
 */
export interface ModifyDeviceActionRequest {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 如果设备处于休眠状态，是否唤醒设备
   */
  Wakeup: boolean
  /**
   * 物模型的分支路径
   */
  Branch: string
  /**
   * 写入的物模型数据，如果是json需要转义成字符串
   */
  Value: string
  /**
   * Value字段的类型是否为数值（float、int）
   */
  IsNum?: boolean
}

/**
 * CreateIotModel返回参数结构体
 */
export interface CreateIotModelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 终端用户绑定的设备
 */
export interface BindDevInfo {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 设备型号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceModel: string
  /**
   * 用户角色，owner：主人，guest：访客
   */
  Role: string
}

/**
 * DescribeBindDev请求参数结构体
 */
export interface DescribeBindDevRequest {
  /**
   * 终端用户在IoT Video上的唯一标识ID
   */
  AccessId: string
}

/**
 * 云存订单信息
 */
export interface StorageOrder {
  /**
   * 定单唯一性ID
   */
  OrderId: string
  /**
   * 云存套餐ID
   */
  PkgId: string
  /**
   * 定单服务状态
1;订单正在使用。
2:订单未开始。
3:订单已经使用过，现在暂时未开始使用(该订单从其他服务转移而来)。
4:订单已过期。
5:订单已被退订。
6:定单已被转移到其他云存服务。
   */
  Status: number
  /**
   * 定单服务生效时间
   */
  StartTime: number
  /**
   * 定单服务失效时间
   */
  EndTime: number
}

/**
 * RenewUploadTest请求参数结构体
 */
export interface RenewUploadTestRequest {
  /**
   * package ID
   */
  PkgId: string
  /**
   * 设备TID
   */
  Tid: string
  /**
   * SessionKeys
   */
  SessionKey: string
}

/**
 * 产品转发消息队列配置
 */
export interface MsgQueueData {
  /**
   * 消息队列类型 1：CMQ 2：kafka
   */
  MsgQueueType: number
  /**
   * 消息类型列表，整型值（0-31）之间以“,”分隔
   */
  MsgType: string
  /**
   * 主题名称
   */
  Topic: string
  /**
   * 实例名称
   */
  Instance: string
  /**
   * 消息地域
   */
  MsgRegion: string
}

/**
 * 终端用户注册状态
 */
export interface RegisteredStatus {
  /**
   * 终端用户的唯一ID
   */
  CunionId: string
  /**
   * 注册状态
   */
  IsRegisted: boolean
}

/**
 * CreateAnonymousAccessToken请求参数结构体
 */
export interface CreateAnonymousAccessTokenRequest {
  /**
   * Token的TTL(time to alive)分钟数,最大值1440(即24小时)
   */
  TtlMinutes: number
  /**
   * 设备ID。创建Token时, 此参数为必须项
   */
  Tid?: string
  /**
   * 旧的AccessToken。续期Token时，此参数为必须
   */
  OldAccessToken?: string
}

/**
 * DeliverStorageService请求参数结构体
 */
export interface DeliverStorageServiceRequest {
  /**
   * 待转移的源云存服务ID
   */
  SrcServiceId: string
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 视频流通道号。(对于存在多路视频流的设备，如NVR设备，与设备实际视频流通道号对应)
   */
  ChnNum?: number
  /**
   * 设备主人用户在IoT Video平台的注册ID。该参数用于验证Paas/Saas平台的设备/用户关系链是否一致
   */
  AccessId?: string
}

/**
 * RunDeviceStream返回参数结构体
 */
export interface RunDeviceStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDevice返回参数结构体
 */
export interface ModifyDeviceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceModel请求参数结构体
 */
export interface DescribeDeviceModelRequest {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 物模型的分支路径
   */
  Branch?: string
}

/**
 * DescribeLogs返回参数结构体
 */
export interface DescribeLogsResponse {
  /**
   * 设备日志信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<LogData>
  /**
   * Data数组所包含的信息条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDeviceAction返回参数结构体
 */
export interface ModifyDeviceActionResponse {
  /**
   * 设备端的响应结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 任务ID
若设备端未能及时响应时，会返回此字段，用户可以通过DescribeModelDataRet获取设备的最终响应结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBinding返回参数结构体
 */
export interface CreateBindingResponse {
  /**
   * 访问设备的AccessToken
   */
  AccessToken: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountBalance请求参数结构体
 */
export interface DescribeAccountBalanceRequest {
  /**
   * 账户类型 1:设备接入 2:云存
   */
  AccountType: number
}

/**
 * CreateDevices请求参数结构体
 */
export interface CreateDevicesRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 创建设备的数量，数量范围1-100
   */
  Number: number
  /**
   * 设备名称前缀，支持英文、数字，不超过10字符
   */
  NamePrefix?: string
  /**
   * 操作人
   */
  Operator?: string
}

/**
 * DisableDevice请求参数结构体
 */
export interface DisableDeviceRequest {
  /**
   * 设备TID ≤100
   */
  Tids: Array<string>
}

/**
 * DescribeStream返回参数结构体
 */
export interface DescribeStreamResponse {
  /**
   * 返回参数结构
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: Data
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountBalance返回参数结构体
 */
export interface DescribeAccountBalanceResponse {
  /**
   * 账户类型 1=设备接入;2=云存。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountType?: number
  /**
   * 余额, 单位 : 分(人民币)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Balance?: number
  /**
   * 账户状态，1=正常；8=冻结；9=销户。
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: number
  /**
   * 最后修改时间，UTC值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableOtaVersion请求参数结构体
 */
export interface DisableOtaVersionRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 固件版本号，格式为x.y.z， x，y 范围0-63，z范围1~524288
   */
  OtaVersion: string
  /**
   * 操作人
   */
  Operator?: string
}

/**
 * DescribeProduct返回参数结构体
 */
export interface DescribeProductResponse {
  /**
   * 产品详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ProductData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAnonymousAccessToken返回参数结构体
 */
export interface CreateAnonymousAccessTokenResponse {
  /**
   * 终端用户在IoT Video上的唯一标识ID
   */
  AccessId?: string
  /**
   * IoT Video平台的AccessToken
   */
  AccessToken?: string
  /**
   * Token的过期时间，单位秒(UTC时间)
   */
  ExpireTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBindUsr请求参数结构体
 */
export interface DescribeBindUsrRequest {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 设备主人的AccessId
   */
  AccessId?: string
}

/**
 * SendOnlineMsg返回参数结构体
 */
export interface SendOnlineMsgResponse {
  /**
   * 若返回此项则表明需要用户用此taskID进行查询请求是否成功(只有waitresp不等于0的情况下才可能会返回该taskID项)
   */
  TaskId?: string
  /**
   * 设备响应信息
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAppUsr请求参数结构体
 */
export interface DeleteAppUsrRequest {
  /**
   * 客户的终端用户在IoT Video上的唯一标识ID
   */
  AccessId: string
}

/**
 * DescribeIotModels返回参数结构体
 */
export interface DescribeIotModelsResponse {
  /**
   * 历史版本列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<IotModelData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMessageQueue返回参数结构体
 */
export interface DescribeMessageQueueResponse {
  /**
   * 消息队列配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: MsgQueueData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOsList请求参数结构体
 */
export type DescribeOsListRequest = null

/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
  /**
   * 产品ID
   */
  ProductId: string
  /**
   * 是否返回全量数据
当该值为false时，返回值中的设备物模型、固件版本、在线状态、最后在线时间字段等字段，都将返回数据类型的零值。
   */
  ReturnModel: boolean
  /**
   * 分页数量,0<取值范围<=100
   */
  Limit: number
  /**
   * 分页偏移，取值＞0
   */
  Offset: number
  /**
   * 指定固件版本号，为空查询此产品下所有设备
   */
  OtaVersion?: string
  /**
   * 设备名称，支持左前缀模糊匹配
   */
  DeviceName?: string
}

/**
 * CreateUploadTest返回参数结构体
 */
export interface CreateUploadTestResponse {
  /**
   * 申请设备证书返回的信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: CosCertificate
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIotDataType返回参数结构体
 */
export interface CreateIotDataTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDeviceProperty返回参数结构体
 */
export interface ModifyDevicePropertyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUploadTest请求参数结构体
 */
export interface CreateUploadTestRequest {
  /**
   * package ID
   */
  PkgId: string
  /**
   * 设备TID
   */
  Tid: string
}

/**
 * DeleteBinding返回参数结构体
 */
export interface DeleteBindingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RefundStorageService请求参数结构体
 */
export interface RefundStorageServiceRequest {
  /**
   * 云存服务ID
   */
  ServiceId: string
  /**
   * 云存子订单ID。如果指定子订单ID,则仅退订该子订单，如果未指定子定单ID，则退订所有子订单
   */
  OrderId?: string
}

/**
 * CreateStorage返回参数结构体
 */
export interface CreateStorageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableDeviceStream返回参数结构体
 */
export interface DisableDeviceStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUploadPath返回参数结构体
 */
export interface CreateUploadPathResponse {
  /**
   * 固件上传地址URL，用户可将本地的固件文件通过该URL以PUT的请求方式上传。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 充值记录列表
 */
export interface RechargeRecord {
  /**
   * 流水记录号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaterId: number
  /**
   * 充值前的余额，单位0.01元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BalanceBeforeRecharge: number
  /**
   * 充值金额，单位0.01元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Money: number
  /**
   * 充值时间, UTC值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateTime: number
}

/**
 * 固件版本详细信息
 */
export interface VersionData {
  /**
   * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId: string
  /**
   * 固件版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  OtaVersion: string
  /**
   * 版本类型 1未发布 2测试发布 3正式发布 4禁用
注意：此字段可能返回 null，表示取不到有效值。
   */
  PubStatus: number
  /**
   * 固件版本存储路径URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionUrl: string
  /**
   * 文件大小，byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize: number
  /**
   * 文件校验码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Md5: string
  /**
   * 指定的允许升级的旧版本，PubStatus=3时有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldVersions: string
  /**
   * 指定的允许升级的旧设备id，PubStatus=2时有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tids: string
  /**
   * 灰度值（0-100）,PubStatus=3时有效，表示n%的升级总量
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrayValue: number
  /**
   * 最近一次发布时间，UNIX时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublishTime: number
  /**
   * 此版本激活的设备总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveCount: number
  /**
   * 此版本在线的设备总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  OnlineCount: number
  /**
   * 上传固件文件的时间，UNIX时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: number
  /**
   * 发布记录的最后变更时间，UNIX时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  UploadTime: number
  /**
   * 该固件版本发布的变更次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTimes: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
  /**
   * 版本发布的描述信息，需要国际化，可以为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Contents: Contents
  /**
   * 月活设备数，当月第一天开始有上线的设备数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AliveInMonthCnt: number
}

/**
 * 设备列表元素所包含的设备基本信息
 */
export interface DevicesData {
  /**
   * 设备TID
   */
  Tid: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 激活时间 0代表未激活
   */
  ActiveTime: number
  /**
   * 设备是否被禁用
   */
  Disabled: boolean
  /**
   * 设备推流状态
   */
  StreamStatus: boolean
  /**
   * 固件版本
   */
  OtaVersion: string
  /**
   * 设备在线状态
   */
  Online: number
  /**
   * 设备最后上线时间（mqtt连接成功时间），UNIX时间戳，单位秒
   */
  LastOnlineTime: number
  /**
   * 物模型json数据
   */
  IotModel: string
  /**
   * 设备固件最新更新时间，UNIX时间戳，单位秒
   */
  LastUpdateTime: number
}
