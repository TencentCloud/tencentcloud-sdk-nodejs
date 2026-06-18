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
 * UpdateDeviceStatus请求参数结构体
 */
export interface UpdateDeviceStatusRequest {
  /**
   * 设备 ID（从获取设备列表接口ListDevices中获取）
   */
  DeviceId: string
  /**
   * 禁用启用状态码（2：启用，3:禁用）
   */
  Status: number
}

/**
 * ListDevices请求参数结构体
 */
export interface ListDevicesRequest {
  /**
   * 组织ID
   */
  OrganizationId: string
  /**
   * 是否获取当前层级及子层级的设备列表，默认false
   */
  IsContainSubLevel?: boolean
  /**
   * 是否包含当前用户已关联的设备，默认false
   */
  IsContainUser?: boolean
  /**
   * 设备接入协议。1:RTMP，2:GB，3:GW，4:IVCP(私有协议)
   */
  AccessProtocol?: number
  /**
   * 设备类型。1:IPC，2:NVR
   */
  Type?: number
  /**
   * 设备状态。0:未注册，1:在线，2:离线，3:禁用
   */
  Status?: number
  /**
   * 服务节点ID
   */
  ClusterId?: string
  /**
   * 模糊搜索设备的关键字
   */
  Keyword?: string
  /**
   * 当前用户Uin
   */
  CurrentUin?: number
  /**
   * 页码，默认为1。
   */
  PageNumber?: number
  /**
   * 每页数量，默认为20，单页最大10000条
   */
  PageSize?: number
}

/**
 * DeleteRecordBackupPlan返回参数结构体
 */
export interface DeleteRecordBackupPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量查询设备接口返回数据
 */
export interface DescribeDeviceListData {
  /**
   * 设备详情列表
   */
  List?: Array<DescribeDeviceData>
}

/**
 * ListOrganizationChannels请求参数结构体
 */
export interface ListOrganizationChannelsRequest {
  /**
   * 组织ID
   */
  OrganizationId: string
  /**
   * 每页最大数量
   */
  PageSize: number
  /**
   * 第几页
   */
  PageNumber: number
  /**
   * 查询条件，则按照设备名称查询
查询条件同时只有一个生效。长度不超过32字节
   */
  DeviceName?: string
  /**
   * 查询条件，则按照通道名称查询
查询条件同时只有一个生效。长度不超过32字节
   */
  ChannelName?: string
}

/**
 * 查询设备预置位返回数据
 */
export interface DescribeDevicePresetData {
  /**
   * 预置位索引    只支持1-10的索引
   */
  Index?: number
  /**
   * 预置位名称
   */
  Name?: string
}

/**
 * ListSubTasks请求参数结构体
 */
export interface ListSubTasksRequest {
  /**
   * 复杂任务ID
   */
  TaskId: string
  /**
   * 页码，默认为1
   */
  PageNumber?: number
  /**
   * 每页数量，默认为10
   */
  PageSize?: number
  /**
   * 默认不对该字段进行筛选，否则根据任务状态进行筛选。状态码：1-NEW，2-RUNNING，3-COMPLETED，4-FAILED
   */
  Status?: number
}

/**
 * AddRecordBackupPlan返回参数结构体
 */
export interface AddRecordBackupPlanResponse {
  /**
   * 返回数据
   */
  Data?: AddRecordBackupPlanData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCNAME请求参数结构体
 */
export interface DescribeCNAMERequest {
  /**
   * 服务节点 ID（从查询域名可绑定服务节点接口DescribeDomainRegion中获取）
   */
  ClusterId: string
  /**
   * 域名类型，0:拉流域名 1:推流域名
   */
  DomainType?: number
}

/**
 * 获取云录像下载URL返回的数据
 */
export interface DescribeVideoDownloadUrlData {
  /**
   * 录像文件下载 URL
注意：
URL 有效期是10分钟，过期后将拒绝访问，若需再用请重新获取 
录像文件下载采用分块传输编码，响应头Transfer-Encoding:chunked 
下载文件命名格式为{ChannelId}-{BeginTime}-{EndTime}.{FileType} 
   */
  Url?: string
  /**
   * 实际下载录像的开始时间
注意：当请求中指定IsRespActualTime参数为true时，才有该字段
   */
  ActualBeginTime?: string
  /**
   * 实际下载录像的结束时间
注意：当请求中指定IsRespActualTime参数为true时，才有该字段
   */
  ActualEndTime?: string
}

/**
 * ControlRecordTimeline请求参数结构体
 */
export interface ControlRecordTimelineRequest {
  /**
   * 通道 ID（从通道查询接口DescribeDeviceChannel中获取）
   */
  ChannelId: string
  /**
   * 起始时间
   */
  Start: number
  /**
   * 结束时间
   */
  End: number
}

/**
 * DeleteOrganization请求参数结构体
 */
export interface DeleteOrganizationRequest {
  /**
   * 组织ID（从查询组织接口DescribeOrganization中获取）
   */
  OrganizationId: string
}

/**
 * SetForbidPlayChannels请求参数结构体
 */
export interface SetForbidPlayChannelsRequest {
  /**
   * 要禁播的通道参数，一次最多可以设置200个通道
   */
  Channels: Array<SetForbidplayChannelParam>
  /**
   * 用户uin，可以是子用户的也可以是主用户的uin
   */
  UserId: string
}

/**
 * 子任务详情
 */
export interface SubTaskData {
  /**
   * 子任务ID
   */
  SubTaskId?: string
  /**
   * 任务状态1:NEW,2:RUNNING,3:COMPLETED ,4:FAILED
   */
  Status?: number
  /**
   * 任务失败原因
   */
  FailReason?: string
  /**
   * 任务进度
   */
  Progress?: number
  /**
   * 操作类型
   */
  Action?: string
  /**
   * 操作类型中文描述
   */
  ActionZhDesc?: string
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 启动任务时间
   */
  StartedAt?: string
  /**
   * 创建任务时间
   */
  CreatedAt?: string
  /**
   * 更新任务时间
   */
  UpdatedAt?: string
  /**
   * 任务运行时间，单位ms
   */
  Runtime?: number
  /**
   * 设备ID
   */
  DeviceId?: string
  /**
   * 设备名称
   */
  DeviceName?: string
  /**
   * 通道ID
   */
  ChannelId?: string
  /**
   * 通道名称
   */
  ChannelName?: string
}

/**
 * DescribeCNAME返回参数结构体
 */
export interface DescribeCNAMEResponse {
  /**
   * CNAME 记录值
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ISUP智能安全接入 API返回数据
 */
export interface ISAPIOutputData {
  /**
   * 输出参数
   */
  OutputData?: string
}

/**
 * UpdateOrganization返回参数结构体
 */
export interface UpdateOrganizationResponse {
  /**
   * 返回结果
   */
  Data?: UpdateOrgData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询设备接口返回数据
 */
export interface DescribeDeviceData {
  /**
   * <p>设备ID</p>
   */
  DeviceId?: string
  /**
   * <p>设备编码（国标设备即我们为设备生成的20位国标编码，rtmp 设备为10 位设备编码）</p>
   */
  Code?: string
  /**
   * <p>设备名称</p>
   */
  Name?: string
  /**
   * <p>设备接入协议，1:RTMP,2:GB,3:GW</p>
   */
  AccessProtocol?: number
  /**
   * <p>设备类型，1:IPC,2:NVR</p>
   */
  Type?: number
  /**
   * <p>设备接入服务节点id</p>
   */
  ClusterId?: string
  /**
   * <p>设备接入服务节点名称</p>
   */
  ClusterName?: string
  /**
   * <p>设备流传输协议，1:UDP,2:TCP</p>
   */
  TransportProtocol?: number
  /**
   * <p>设备密码</p>
   */
  Password?: string
  /**
   * <p>设备描述</p>
   */
  Description?: string
  /**
   * <p>sip服务ID</p>
   */
  SipId?: string
  /**
   * <p>sip服务域</p>
   */
  SipDomain?: string
  /**
   * <p>sip服务IP地址</p>
   */
  SipIp?: string
  /**
   * <p>sip服务端口</p>
   */
  SipPort?: number
  /**
   * <p>Rtmp设备推流地址(仅rtmp设备有效)</p>
   */
  PushStreamUrl?: string
  /**
   * <p>设备状态，0:未注册,1:在线,2:离线,3:禁用</p>
   */
  Status?: number
  /**
   * <p>设备所属组织ID</p>
   */
  OrganizationId?: string
  /**
   * <p>设备接入网关ID，从查询网关列表接口中获取（仅网关接入需要）</p>
   */
  GatewayId?: string
  /**
   * <p>设备所属网关名称</p>
   */
  GatewayName?: string
  /**
   * <p>设备网关协议名称</p>
   */
  ProtocolTypeName?: string
  /**
   * <p>网关接入协议类型，1.海康SDK，2.大华SDK，3.宇视SDK，4.Onvif（仅网关接入需要）</p>
   */
  ProtocolType?: number
  /**
   * <p>设备接入IP</p>
   */
  Ip?: string
  /**
   * <p>设备Port</p>
   */
  Port?: number
  /**
   * <p>设备用户名</p>
   */
  Username?: string
  /**
   * <p>设备地域</p>
   */
  Region?: string
  /**
   * <p>设备厂商</p>
   */
  Manufacturer?: string
  /**
   * <p>音频关开（0：关闭；1：开启）关闭时丢弃音频</p>
   */
  AudioSwitch?: number
  /**
   * <p>订阅开关（0：关闭；1：开启）默认开启，开启状态下会订阅设备通道变化，仅国标NVR设备有效</p>
   */
  SubscribeSwitch?: number
  /**
   * <p>RTMP推流地址自定义appName</p>
   */
  AppName?: string
  /**
   * <p>RTMP推流地址自定义streamName</p>
   */
  StreamName?: string
  /**
   * <p>是否开启静音帧（0：关闭；1 开启）</p>
   */
  SilentFrameSwitch?: number
  /**
   * <p>Rtmp设备安全认证推流地址(仅rtmp设备有效)</p>
   */
  PushStreamSecureUrl?: string
}

/**
 * BatchDeleteVideoDownloadTask请求参数结构体
 */
export interface BatchDeleteVideoDownloadTaskRequest {
  /**
   * 本地录像下载任务 ID 列表
   */
  DownloadTaskIds?: Array<string>
}

/**
 * UpdateDeviceOrganization请求参数结构体
 */
export interface UpdateDeviceOrganizationRequest {
  /**
   * 设备 ID 数组（从获取设备列表接口ListDevices中获取）
   */
  DeviceIds: Array<string>
  /**
   * 组织 ID（从查询组织接口DescribeOrganization中获取）
   */
  OrganizationId: string
}

/**
 * UpdateDeviceOrganization返回参数结构体
 */
export interface UpdateDeviceOrganizationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddOrganization返回参数结构体
 */
export interface AddOrganizationResponse {
  /**
   * 增加组织接口返回数据
   */
  Data?: AddOrgData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchOperateDevice返回参数结构体
 */
export interface BatchOperateDeviceResponse {
  /**
   * 返回结果
   */
  Data?: BatchOperateDeviceData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceRegion返回参数结构体
 */
export interface DescribeDeviceRegionResponse {
  /**
   * 返回数据
   */
  Data?: Array<DescribeDeviceRegion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户下所有实时上云计划中的通道id列表返回数据
 */
export interface ListRecordPlanChannelsData {
  /**
   * 用户所有计划下通道id，存在通道是为数组格式，不存在时，字段数据为空 
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<string>
}

/**
 * DescribeVideoBitRate返回参数结构体
 */
export interface DescribeVideoBitRateResponse {
  /**
   * 无
   */
  Data?: DescribeVideoBitRateList
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
   * 返回数据
   */
  Data?: Array<DescribeDomainData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询云录像取回任务详情返回数据
 */
export interface DescribeRecordRetrieveTaskData {
  /**
   * 取回任务ID
   */
  TaskId?: string
  /**
   * 取回任务名称
   */
  TaskName?: string
  /**
   * 取回录像的开始时间
   */
  StartTime?: number
  /**
   * 取回录像的结束时间
   */
  EndTime?: number
  /**
   * 取回模式，1:极速模式，其他暂不支持
   */
  Mode?: number
  /**
   * 副本有效期
   */
  Expiration?: number
  /**
   * 任务状态，0:已取回，1:取回中，2:待取回
   */
  Status?: number
  /**
   * 取回容量，单位MB
   */
  Capacity?: number
  /**
   * 任务的设备通道id
   */
  Channels?: Array<RecordRetrieveTaskChannelInfo>
  /**
   * 任务描述
   */
  Describe?: string
  /**
   * 任务通道数量
   */
  ChannelCount?: number
}

/**
 * 查询录像上云模板返回数据
 */
export interface DescribeRecordBackupTemplateData {
  /**
   * <p>模板ID</p>
   */
  TemplateId?: string
  /**
   * <p>模板名称</p>
   */
  TemplateName?: string
  /**
   * <p>上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  TimeSections?: Array<RecordTemplateTimeSections>
  /**
   * <p>录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  DevTimeSections?: Array<RecordTemplateTimeSections>
  /**
   * <p>上云倍速（支持1，2，4倍速）</p>
   */
  Scale?: number
  /**
   * <p>创建时间</p>
   */
  CreateAt?: string
  /**
   * <p>更新时间</p>
   */
  UpdateAt?: string
  /**
   * <p>周期偏移量，默认1，表示拉取昨天的设备录像，0表示取去今天的设备录像，3表示拉取前天的设备录像</p>
   */
  DayOffset?: number
}

/**
 * ControlDeviceStream返回参数结构体
 */
export interface ControlDeviceStreamResponse {
  /**
   * 返回数据
   */
  Data?: ControlDeviceStreamData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRecordRetrieveTask返回参数结构体
 */
export interface DeleteRecordRetrieveTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRecordPlan返回参数结构体
 */
export interface DeleteRecordPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganization返回参数结构体
 */
export interface DescribeOrganizationResponse {
  /**
   * 返回数据
   */
  Data?: Array<DescribeOrganizationData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateUserDevice请求参数结构体
 */
export interface UpdateUserDeviceRequest {
  /**
   * 设备ID（从获取设备列表接口ListDevices中获取）
   */
  DeviceId: string
  /**
   * 设备名称（仅支持中文、英文、数字、空格、中英文括号、_、-, 长度不超过128位）
   */
  Name?: string
  /**
   * 设备流传输协议，仅国标设备有效，填0则不做更改（1:UDP,2:TCP）
   */
  TransportProtocol?: number
  /**
   * 设备密码（仅国标，网关设备支持，长度不超过 64 位）
   */
  Password?: string
  /**
   * 设备描述（长度不超过128位）
   */
  Description?: string
  /**
   * 设备接入Ip（仅网关接入支持）
   */
  Ip?: string
  /**
   * 设备Port（仅网关接入支持）
   */
  Port?: number
  /**
   * 设备用户名（仅网关接入支持）
   */
  Username?: string
  /**
   * 网关设备接入协议（仅网关接入支持）
   */
  ProtocolType?: number
  /**
   * 音频关开（0：关闭；1：开启）默认开启，关闭时丢弃音频
   */
  AudioSwitch?: number
  /**
   * 订阅开关（0：关闭；1：开启）默认开启，开启状态下会订阅设备通道变化，仅国标NVR设备有效
   */
  SubscribeSwitch?: number
  /**
   * 是否开启静音帧（0：关闭；1 开启）
   */
  SilentFrameSwitch?: number
}

/**
 * DescribeDeviceChannel返回参数结构体
 */
export interface DescribeDeviceChannelResponse {
  /**
   * 返回结果
   */
  Data?: Array<DescribeDeviceChannelData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddRecordBackupTemplate请求参数结构体
 */
export interface AddRecordBackupTemplateRequest {
  /**
   * <p>模板名称（仅支持中文、英文、数字、_、-，长度不超过32个字符，模板名称全局唯一，不能为空，不能重复）</p>
   */
  TemplateName: string
  /**
   * <p>上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  TimeSections: Array<RecordTemplateTimeSections>
  /**
   * <p>录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  DevTimeSections: Array<RecordTemplateTimeSections>
  /**
   * <p>上云倍速（支持1，2，4倍速）</p>
   */
  Scale: number
  /**
   * <p>周期偏移量，默认1，表示拉取昨天的设备录像，0表示拉取今天的设备录像，3表示拉取前天的设备录像</p><p>取值范围：[0, 90]</p><p>默认值：1</p>
   */
  DayOffset?: number
}

/**
 * DescribeVideoBitRate请求参数结构体
 */
export interface DescribeVideoBitRateRequest {
  /**
   * 通道ID列表
   */
  ChannelIds: Array<string>
}

/**
 * 设置通道禁止播流，有通道Id和使能enable字段
 */
export interface SetForbidplayChannelParam {
  /**
   * 通道Id
   */
  ChannelId: string
  /**
   * 是否禁止通道播流
   */
  Enable: boolean
}

/**
 * DescribeUserDeviceList请求参数结构体
 */
export interface DescribeUserDeviceListRequest {
  /**
   * 设备Id列表
   */
  DeviceIds: Array<string>
}

/**
 * DescribeRecordRetrieveTask请求参数结构体
 */
export interface DescribeRecordRetrieveTaskRequest {
  /**
   * 云录像取回任务ID
   */
  TaskId: string
}

/**
 * ControlDeviceSnapshot返回参数结构体
 */
export interface ControlDeviceSnapshotResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RefreshDeviceChannel返回参数结构体
 */
export interface RefreshDeviceChannelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrganization返回参数结构体
 */
export interface DeleteOrganizationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordTemplate请求参数结构体
 */
export interface DescribeRecordTemplateRequest {
  /**
   * 模板ID
   */
  TemplateId: string
}

/**
 * DeleteRecordTemplate请求参数结构体
 */
export interface DeleteRecordTemplateRequest {
  /**
   * 模板ID
   */
  TemplateId: string
}

/**
 * DescribeRecordPlan返回参数结构体
 */
export interface DescribeRecordPlanResponse {
  /**
   * 返回结果
   */
  Data?: RecordPlanBaseInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询录像上云计划关联通道的返回数据
 */
export interface ListRecordBackupPlanDevicesData {
  /**
   * 第几页
   */
  PageNumber?: number
  /**
   * 当前页的设备数量
   */
  PageSize?: number
  /**
   * 本次查询的设备通道总数
   */
  TotalCount?: number
  /**
   * 设备通道信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<RecordPlanChannelInfo>
}

/**
 * 查询复杂任务详情返回结果
 */
export interface TaskData {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务状态1:NEW,2:RUNNING,3:COMPLETED ,4:FAILED
   */
  Status?: number
  /**
   * 失败原因
   */
  FailReason?: string
  /**
   * 进度（0-1）
   */
  Progress?: number
  /**
   * 任务操作类型，批量任务类型以Batch开头
   */
  Action?: string
  /**
   * 操作类型中文描述
   */
  ActionZhDesc?: string
  /**
   * 任务类型 1.简单 2.复杂 3.子任务
   */
  TaskType?: number
  /**
   * 任务资源id（复杂任务该字段无效）
   */
  ResourceId?: string
  /**
   * 总任务数（仅复杂任务有效）
   */
  Total?: number
  /**
   * 成功任务数（仅复杂任务有效）
   */
  SuccessCount?: number
  /**
   * 失败任务数（仅复杂任务有效）
   */
  FailCount?: number
  /**
   * 运行任务数（仅复杂任务有效）
   */
  RunningCount?: number
  /**
   * 启动任务时间
   */
  StartedAt?: string
  /**
   * 创建任务时间
   */
  CreatedAt?: string
  /**
   * 更新任务时间
   */
  UpdatedAt?: string
  /**
   * 任务运行时间，单位ms
   */
  Runtime?: number
  /**
   * 设备ID
   */
  DeviceId?: string
  /**
   * 设备名称
   */
  DeviceName?: string
  /**
   * 通道ID
   */
  ChannelId?: string
  /**
   *  通道名称
   */
  ChannelName?: string
}

/**
 * 新增录像上云模板返回数据
 */
export interface AddRecordBackupTemplateData {
  /**
   * <p>模板ID</p>
   */
  TemplateId?: string
  /**
   * <p>模板名称</p>
   */
  TemplateName?: string
  /**
   * <p>上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  TimeSections?: Array<RecordTemplateTimeSections>
  /**
   * <p>录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  DevTimeSections?: Array<RecordTemplateTimeSections>
  /**
   * <p>上云倍速（支持1，2，4倍速）</p>
   */
  Scale?: number
  /**
   * <p>创建时间</p>
   */
  CreateAt?: string
  /**
   * <p>更新时间</p>
   */
  UpdateAt?: string
  /**
   * <p>周期偏移量，默认1，表示拉取昨天的设备录像，0表示取去今天的设备录像，3表示拉取前天的设备录像</p><p>默认值：1</p>
   */
  DayOffset?: number
}

/**
 * DeleteUserDevice请求参数结构体
 */
export interface DeleteUserDeviceRequest {
  /**
   * 设备ID（从获取设备列表ListDevices接口中获取）
   */
  DeviceId: string
}

/**
 * AddRecordPlan返回参数结构体
 */
export interface AddRecordPlanResponse {
  /**
   * 返回结果
   */
  Data?: RecordPlanOptData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOrganizationChannelNumbers请求参数结构体
 */
export interface ListOrganizationChannelNumbersRequest {
  /**
   * 组织ID，json数组格式，最多一次支持10个组织
   */
  OrganizationId: Array<string>
}

/**
 * ListVideoDownloadTask返回参数结构体
 */
export interface ListVideoDownloadTaskResponse {
  /**
   * 本地录像下载任务列表
   */
  Data?: ListVideoDownloadTaskData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDomain请求参数结构体
 */
export interface DeleteDomainRequest {
  /**
   * 域名 ID
   */
  Id: string
}

/**
 * ListRecordRetrieveTasks请求参数结构体
 */
export type ListRecordRetrieveTasksRequest = null

/**
 * DeleteRecordPlan请求参数结构体
 */
export interface DeleteRecordPlanRequest {
  /**
   * 上云计划ID
   */
  PlanId: string
}

/**
 * 查询推拉流鉴权返回数据结构
 */
export interface DescribeStreamAuthData {
  /**
   * 鉴权配置ID（uuid）
   */
  Id?: string
  /**
   * 是否开播放鉴权（1:开启,0:关闭）
   */
  PullState?: number
  /**
   * 播放密钥（仅支持字母数字，长度0-10位）
   */
  PullSecret?: string
  /**
   * 播放过期时间（单位：分钟）
   */
  PullExpired?: number
  /**
   * 是否开启推流鉴权（1:开启,0:关闭）
   */
  PushState?: number
  /**
   * 推流密钥（仅支持字母数字，长度0-10位）
   */
  PushSecret?: string
  /**
   * 推流过期时间（单位：分钟）
   */
  PushExpired?: number
  /**
   * 用户ID
   */
  AppId?: number
}

/**
 * AddRecordTemplate返回参数结构体
 */
export interface AddRecordTemplateResponse {
  /**
   * 返回结果
   */
  Data?: RecordTemplateInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRecordPlans请求参数结构体
 */
export type ListRecordPlansRequest = null

/**
 * DescribeUserDevice返回参数结构体
 */
export interface DescribeUserDeviceResponse {
  /**
   * 返回结果
   */
  Data?: DescribeDeviceData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListSubTasks返回参数结构体
 */
export interface ListSubTasksResponse {
  /**
   * 返回数据
   */
  Data?: ListSubTasksData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDeviceSnapshots请求参数结构体
 */
export interface ListDeviceSnapshotsRequest {
  /**
   * 通道ID
   */
  ChannelId: string
  /**
   * 设备ID（该字段暂不生效）
   */
  DeviceId?: string
  /**
   * 查询开始时间，默认查询当天
   */
  Start?: number
  /**
   * 查询结束时间，默认查询当天
   */
  End?: number
  /**
   * 分页页码，默认1
   */
  PageNumber?: number
  /**
   * 分页大小，默认200，最大2000
   */
  PageSize?: number
}

/**
 * UpdateRecordPlan请求参数结构体
 */
export interface UpdateRecordPlanRequest {
  /**
   * 计划ID
   */
  PlanId: string
  /**
   * 修改计划的内容
   */
  Mod: UpdateRecordPlanData
}

/**
 * DescribeOrganization请求参数结构体
 */
export type DescribeOrganizationRequest = null

/**
 * ControlRecord返回参数结构体
 */
export interface ControlRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改设备接口返回数据
 */
export interface UpdateDeviceData {
  /**
   * 设备ID
   */
  DeviceId?: string
  /**
   * 设备编码（国标设备即我们为设备生成的20位国标编码，rtmp 设备为10 位设备编码）
   */
  Code?: string
  /**
   * 设备名称
   */
  Name?: string
  /**
   * 设备接入协议，1:RTMP,2:GB,3:GW
   */
  AccessProtocol?: number
  /**
   * 设备类型，1:IPC,2:NVR
   */
  Type?: number
  /**
   * 设备接入服务节点ID
   */
  ClusterId?: string
  /**
   * 设备接入服务节点名称

   */
  ClusterName?: string
  /**
   * 设备流传输协议，1:UDP,2:TCP
   */
  TransportProtocol?: number
  /**
   * 设备密码
   */
  Password?: string
  /**
   * 设备描述
   */
  Description?: string
  /**
   * 设备状态，0:未注册,1:在线,2:离线,3:禁用
   */
  Status?: number
  /**
   * 设备所属组织ID
   */
  OrganizationId?: number
  /**
   * 设备接入网关ID，从查询网关列表接口中获取（仅网关接入需要）
   */
  GatewayId?: string
  /**
   * 网关接入协议类型，1.海康SDK，2.大华SDK，3.宇视SDK，4.Onvif（仅网关接入需要）
   */
  ProtocolType?: number
  /**
   * 设备接入IP
   */
  Ip?: string
  /**
   * 设备Port
   */
  Port?: number
  /**
   * 设备用户名
   */
  Username?: string
  /**
   * 用户Id
   */
  AppId?: number
}

/**
 * AddRecordPlan请求参数结构体
 */
export interface AddRecordPlanRequest {
  /**
   * 实时上云计划名称，仅支持中文、英文、数字、_、-，长度不超过32个字符，计划名称全局唯一，不能为空，不能重复
   */
  PlanName: string
  /**
   * 实时上云模板ID
   */
  TemplateId: string
  /**
   * 生命周期
   */
  LifeCycle: LifeCycleData
  /**
   * 上云计划描述，仅支持中文、英文、数字、_、-，长度不超过128个字符
   */
  Describe?: string
  /**
   * 码流类型，default:不指定码流类型，以设备默认推送类型为主， main:主码流，sub:子码流，其他根据设备能力集自定义，不填按默认类型处理，长度不能超过32个字节
   */
  StreamType?: string
  /**
   * 添加录像的设备的通道信息，一次添加通道总数不超过5000个，包括组织目录下的通道数量
   */
  Channels?: Array<ChannelInfo>
  /**
   * 添加组织目录下所有设备通道，Json数组，可以为空，通道总数量不超过5000个（包括Channel字段的数量）
   */
  OrganizationId?: Array<string>
  /**
   * 录像补录模式（0:不启用，1:启用），无该字段，默认不启用
   */
  RepairMode?: number
}

/**
 * ListRecordTemplates请求参数结构体
 */
export type ListRecordTemplatesRequest = null

/**
 * 查询组织数据返回结果
 */
export interface DescribeOrganizationData {
  /**
   * 组织 ID
   */
  OrganizationId?: string
  /**
   * 组织名称
   */
  Name?: string
  /**
   * 组织父节点 ID
   */
  ParentId?: string
  /**
   * 组织层级
   */
  Level?: number
  /**
   * 用户id
   */
  AppId?: number
  /**
   * 组织结构
   */
  ParentIds?: string
  /**
   * 设备总数
   */
  Total?: number
  /**
   * 设备在线数量
   */
  Online?: number
}

/**
 * DescribeVideoDownloadUrl返回参数结构体
 */
export interface DescribeVideoDownloadUrlResponse {
  /**
   * 返回的数据结构
   */
  Data?: DescribeVideoDownloadUrlData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时上云计划添加和修改的返回数据
 */
export interface RecordPlanOptData {
  /**
   * 上云计划ID
   */
  PlanId?: string
  /**
   * 上云计划名称
   */
  PlanName?: string
  /**
   * 上云模板ID
   */
  TemplateId?: string
  /**
   * 上云计划描述
   */
  Describe?: string
  /**
   * 云文件生命周期
   */
  LifeCycle?: LifeCycleData
  /**
   * 码流类型，default:设备默认码流类型，main:主码流，sub:子码流，其他根据设备能力集自定义
   */
  StreamType?: string
  /**
   * 录像补录模式（0:不启用，1:启用）
   */
  RepairMode?: number
}

/**
 * DescribeUserDeviceList返回参数结构体
 */
export interface DescribeUserDeviceListResponse {
  /**
   * 返回结果
   */
  Data?: DescribeDeviceListData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时间片段结构体
 */
export interface Timeline {
  /**
   * 分片起始时间
   */
  Begin?: number
  /**
   * 分片结束时间
   */
  End?: number
}

/**
 * 修改录像上云计划数据结构
 */
export interface UpdateRecordBackupPlanModify {
  /**
   * 录像上云计划名称（仅支持中文、英文、数字、_、-，长度不超过32个字符，计划名称全局唯一，不能为空，不能重复，不修改名称时，不需要该字段）
   */
  PlanName?: string
  /**
   * 录制模板ID（从查询录像上云模板列表接口ListRecordBackupTemplates中获取，不修改模板ID时，不需要该字段）
   */
  TemplateId?: string
  /**
   * 录像上云计划描述（仅支持中文、英文、数字、_、-，长度不超过128个字符， 不修改描述时，不需要该字段）
   */
  Describe?: string
  /**
   * 生命周期（录像文件生命周期设置，管理文件冷、热存储的时间，不修改生命周期时，不需要该字段）
   */
  LifeCycle?: LifeCycleData
  /**
   * 要新增的设备通道（Json数组，没有新增时，不需要该字段，一次添加通道总数不超过5000个，包括组织目录下的通道数量）
   */
  Add?: Array<ChannelInfo>
  /**
   * 要删除的设备通道（Json数组，内容为要删除的设备通道id，没有删除设备通道时，不需要该字段）
   */
  Del?: Array<string>
  /**
   * 添加组织目录下所有设备通道（Json数组，可以为空，并且通道总数量不超过5000个（包括Add字段通道数量））
   */
  OrganizationId?: Array<string>
}

/**
 * 取回任务通道信息
 */
export interface RecordRetrieveTaskChannelInfo {
  /**
   * 设备通道所属的设备ID
   */
  DeviceId?: string
  /**
   * 设备通道所属的设备名称
   */
  DeviceName?: string
  /**
   * 设备通道ID
   */
  ChannelId?: string
  /**
   * 设备通道名称
   */
  ChannelName?: string
  /**
   * 任务状态，0:已取回，1:取回中，2:待取回, 3:无归档录像
   */
  Status?: number
}

/**
 * CallISAPI请求参数结构体
 */
export interface CallISAPIRequest {
  /**
   * 设备ID
   */
  DeviceId: string
  /**
   * url 资源
   */
  Url: string
  /**
   * 输入参数
   */
  InputData?: string
}

/**
 * AddRecordRetrieveTask请求参数结构体
 */
export interface AddRecordRetrieveTaskRequest {
  /**
   * 任务名称，仅支持中文、英文、数字、_、-，长度不超过32个字符，名称全局唯一，不能为空，不能重复
   */
  TaskName: string
  /**
   * 取回录像的开始时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天
   */
  StartTime: number
  /**
   * 取回录像的结束时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天
   */
  EndTime: number
  /**
   * 取回模式， 1:极速模式，其他暂不支持
   */
  Mode: number
  /**
   * 取回录像副本有效期，最小为1天，最大为365天
   */
  Expiration: number
  /**
   * 设备通道，一个任务最多32个设备通道
   */
  Channels: Array<ChannelInfo>
  /**
   * 取回任务描述
   */
  Describe?: string
}

/**
 * DescribeRecordPlan请求参数结构体
 */
export interface DescribeRecordPlanRequest {
  /**
   * 实时上云计划ID
   */
  PlanId: string
}

/**
 * ControlDevicePreset返回参数结构体
 */
export interface ControlDevicePresetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRecordBackupPlans返回参数结构体
 */
export interface ListRecordBackupPlansResponse {
  /**
   * 返回数据
   */
  Data?: Array<ListRecordBackupPlanData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组织目录下的通道信息
 */
export interface OrganizationChannelInfo {
  /**
   * 设备通道所属的设备ID
   */
  DeviceId?: string
  /**
   * 设备通道所属的设备名称
   */
  DeviceName?: string
  /**
   * 设备通道ID
   */
  ChannelId?: string
  /**
   * 设备通道名称
   */
  ChannelName?: string
  /**
   * 该通道是否在上云计划中，如果是，则不能在添加到其他上云计划|true：在上云计划中，false：不在上云计划中
   */
  InPlan?: boolean
}

/**
 * 通道及通道所属设备信息
 */
export interface ChannelInfo {
  /**
   * 通道所属的设备ID
   */
  DeviceId: string
  /**
   * 设备通道ID，一个设备通道只允许被一个上云计划添加
   */
  ChannelId: string
}

/**
 * DescribeDevicePreset请求参数结构体
 */
export interface DescribeDevicePresetRequest {
  /**
   * 通道ID（从通道查询接口DescribeDeviceChannel中获取）
   */
  ChannelId: string
}

/**
 * DescribeDomain请求参数结构体
 */
export type DescribeDomainRequest = null

/**
 * 批量操作设备返回结果
 */
export interface BatchOperateDeviceData {
  /**
   * 任务 ID（用于在查询任务的子任务列表接口ListSubTasks中查询任务进度）
   */
  TaskId?: string
}

/**
 * 云录像回放url
 */
export interface RecordPlaybackUrl {
  /**
   * hls回放url
   */
  Hls?: string
}

/**
 * BatchDeleteVideoDownloadTask返回参数结构体
 */
export interface BatchDeleteVideoDownloadTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组织目录下的未添加到实时上云计划中的通道数量返回数据
 */
export interface ListOrganizationChannelNumbersData {
  /**
   * 组织下通道总数
   */
  TotalCount?: number
  /**
   * 组织下未添加到计划的通道总数
   */
  NotInPlanCount?: number
}

/**
 * 本地录像下载任务
 */
export interface VideoDownloadTask {
  /**
   * 下载任务 ID
   */
  DownloadTaskId?: string
  /**
   * 通道 ID
   */
  ChannelId?: string
  /**
   * 通道名称
   */
  ChannelName?: string
  /**
   * 通道编码
   */
  ChannelCode?: string
  /**
   * 设备名称
   */
  DeviceName?: string
  /**
   * 设备编码
   */
  DeviceCode?: string
  /**
   * 任务状态（0：未执行；1：执行中；2 任务完成；
3：任务失败）
   */
  Status?: number
  /**
   * 下载录像时间段
   */
  VideoTimeSection?: string
  /**
   * 倍速
   */
  Scale?: number
  /**
   * 下载时长
   */
  DownloadTime?: number
  /**
   * 录像大小
   */
  VideoSize?: number
  /**
   * 任务开始时间
   */
  StartTime?: string
  /**
   * 任务结束时间
   */
  EndTime?: string
  /**
   * 文件下载地址
   */
  FileDownloadUrl?: string
  /**
   * 失败原因
   */
  FailedReason?: string
  /**
   * 生命周期规则，热存天数
   */
  Expire?: number
  /**
   * mp4预览地址
   */
  PreviewUrl?: string
}

/**
 * CallISAPI返回参数结构体
 */
export interface CallISAPIResponse {
  /**
   * 返回数据
   */
  Data?: ISAPIOutputData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRecordPlanDevices请求参数结构体
 */
export interface ListRecordPlanDevicesRequest {
  /**
   * 上云计划ID
   */
  PlanId: string
  /**
   * 每页最大数量
   */
  PageSize: number
  /**
   * 第几页
   */
  PageNumber: number
  /**
   * 按照设备名称查询，为空时，不参考该参数
通道名称、设备名称、组织名称同时只有一个有效，如果同时多个字段有值，按照通道名称、设备名称、组织名称的优先级顺序查询，如果都为空，则全量查询。长度不超过32字节
   */
  DeviceName?: string
  /**
   * 按照通道名称查询，为空时，不参考该参数
通道名称、设备名称、组织名称同时只有一个有效，如果同时多个字段有值，按照通道名称、设备名称、组织名称的优先级顺序查询，如果都为空，则全量查询。长度不超过32字节
   */
  ChannelName?: string
  /**
   * 按照组织名称查询|，为空时，不参考该参数
通道名称、设备名称、组织名称同时只有一个有效，如果同时多个字段有值，按照通道名称、设备名称、组织名称的优先级顺序查询，如果都为空，则全量查询。长度不超过32字节
   */
  OrganizationName?: string
}

/**
 * ListTasks返回参数结构体
 */
export interface ListTasksResponse {
  /**
   * 返回数据
   */
  Data?: ListTasksData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddStreamAuth返回参数结构体
 */
export interface AddStreamAuthResponse {
  /**
   * 设置推拉流鉴权返回数据
   */
  Data?: AddStreamAuthData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDevices返回参数结构体
 */
export interface ListDevicesResponse {
  /**
   * 设备列表详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ListDeviceInfo>
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
 * 设置推拉流鉴权返回数据结构
 */
export interface AddStreamAuthData {
  /**
   * 鉴权配置ID（uuid）
   */
  Id?: string
  /**
   * 是否开播放鉴权（1:开启,0:关闭）
   */
  PullState?: number
  /**
   * 播放密钥（仅支持字母数字，长度0-10位）
   */
  PullSecret?: string
  /**
   * 播放过期时间（单位：分钟）
   */
  PullExpired?: number
  /**
   * 是否开启推流鉴权（1:开启,0:关闭）
   */
  PushState?: number
  /**
   * 推流密钥（仅支持字母数字，长度0-10位）
   */
  PushSecret?: string
  /**
   * 推流过期时间（单位：分钟）
   */
  PushExpired?: number
  /**
   * 用户ID
   */
  AppId?: number
}

/**
 * RefreshDeviceChannel请求参数结构体
 */
export interface RefreshDeviceChannelRequest {
  /**
   * 设备 ID（从获取设备列表ListDevices接口中获取）
   */
  DeviceId: string
}

/**
 * 抓拍结果信息
 */
export interface GBDeviceSnapInfo {
  /**
   * 文件名称
   */
  FileName?: string
  /**
   * 下载地址，空值表示存储图片过期
   */
  DownloadUrl?: string
  /**
   * 图片大小，单位B
   */
  ImageSize?: number
  /**
   * 文件的创建时间
   */
  CreatedTime?: string
  /**
   * 图片的接收时间
   */
  ReceivedTime?: string
  /**
   * 预览地址，空值表示存储图片过期
   */
  PreviewUrl?: string
  /**
   * 国标信令会话ID，同时对应控制设备抓拍 ( ControlDeviceSnapshot )接口返回的request_id
   */
  SessionId?: string
}

/**
 * 获取设备列表的响应
 */
export interface ListDeviceInfo {
  /**
   * 设备 ID
   */
  DeviceId?: string
  /**
   * 设备编码
   */
  Code?: string
  /**
   * 设备状态。0:未注册，1:在线，2:离线，3:禁用
   */
  Status?: number
  /**
   * 设备流传输协议。1:UDP,2:TCP
   */
  TransportProtocol?: number
  /**
   * 设备名称
   */
  Name?: string
  /**
   * 设备类型。1:IPC,2:NVR
   */
  Type?: number
  /**
   * 设备密码
   */
  Password?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 设备接入服务节点 ID
   */
  ClusterId?: string
  /**
   * 服务节点名称
   */
  ClusterName?: string
  /**
   * 接入协议。1:RTMP,2:GB,3:GW
   */
  AccessProtocol?: number
  /**
   * 设备所属组织 ID
   */
  OrganizationId?: string
  /**
   * 通道数量
   */
  ChannelNum?: number
}

/**
 * 生命周期，云文件生命周期设置，管理文件冷、热存储的时间
 */
export interface LifeCycleData {
  /**
   * 云文件热存储时长，单位天，最小1天，最大3650天
   */
  Transition: number
  /**
   * 云文件冷存储时长， 单位天，0表示不设置，设置时最小60天，Expiration字段加Transition字段不超过3650天
   */
  Expiration: number
}

/**
 * ListOrganizationChannelNumbers返回参数结构体
 */
export interface ListOrganizationChannelNumbersResponse {
  /**
   * 返回结果
   */
  Data?: ListOrganizationChannelNumbersData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询域名详情数据
 */
export interface DescribeDomainData {
  /**
   * 域名ID
   */
  Id?: string
  /**
   * 播放域名
   */
  PlayDomain?: string
  /**
   * CNAME 记录值
   */
  InternalDomain?: string
  /**
   * 是否上传证书（0：否，1：是）
   */
  HaveCert?: number
  /**
   * 服务节点 ID
   */
  ClusterId?: string
  /**
   * 服务节点名称
   */
  ClusterName?: string
  /**
   * 用户ID
   */
  AppId?: number
  /**
   * 证书ID
   */
  CertId?: string
  /**
   * 域名类型 0:拉流域名 1:推流域名
   */
  DomainType?: number
}

/**
 * ListRecordBackupTemplates返回参数结构体
 */
export interface ListRecordBackupTemplatesResponse {
  /**
   * 返回数据
   */
  Data?: Array<ListRecordBackupTemplatesData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRecordPlanChannels返回参数结构体
 */
export interface ListRecordPlanChannelsResponse {
  /**
   * 返回结果
   */
  Data?: ListRecordPlanChannelsData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRecordTemplate请求参数结构体
 */
export interface UpdateRecordTemplateRequest {
  /**
   * 模板ID
   */
  TemplateId: string
  /**
   * 修改内容
   */
  Mod: UpdateRecordTemplateData
}

/**
 * DescribeRecordPlaybackUrl请求参数结构体
 */
export interface DescribeRecordPlaybackUrlRequest {
  /**
   * 设备通道ID
   */
  ChannelId: string
  /**
   * 回放开始时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天
   */
  StartTime: number
  /**
   * 回放结束时间，UTC秒数，例如：1662114246，开始和结束时间段最长为一天，且不能跨天
   */
  EndTime: number
  /**
   * 是否获取内网地址
   */
  IsInternal?: boolean
  /**
   * 云录像回放时，是否需要开启时间戳矫正，主要解决时间戳反转、回退等问题导致无法播放
   */
  CorrectTimestamp?: boolean
}

/**
 * 查询国标设备地址列表
 */
export interface DescribeDeviceAddrList {
  /**
   * 设备地址列表
   */
  RemoteAddrs?: Array<RemoteAddrInfo>
}

/**
 * ListRecordPlans返回参数结构体
 */
export interface ListRecordPlansResponse {
  /**
   * 返回结果，存在计划时，为Json数组格式，不存在计划时，字段数据为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<RecordPlanBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordTemplate返回参数结构体
 */
export interface DescribeRecordTemplateResponse {
  /**
   * 返回结果
   */
  Data?: RecordTemplateInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordSlice返回参数结构体
 */
export interface DescribeRecordSliceResponse {
  /**
   * 云录像切片信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<RecordSliceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRecordPlanDevices返回参数结构体
 */
export interface ListRecordPlanDevicesResponse {
  /**
   * 返回结果
   */
  Data?: ListRecordPlanDevicesData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDevicePreset返回参数结构体
 */
export interface DescribeDevicePresetResponse {
  /**
   * 返回数据
   */
  Data?: Array<DescribeDevicePresetData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRecordBackupPlan请求参数结构体
 */
export interface UpdateRecordBackupPlanRequest {
  /**
   * 计划ID
   */
  PlanId: string
  /**
   * 修改的内容
   */
  Mod: UpdateRecordBackupPlanModify
}

/**
 * 云录像时间片段
 */
export interface RecordTimeLine {
  /**
   * 时间片段开始时间，UTC秒数，例如：1662114146
   */
  Begin?: number
  /**
   * 时间片段结束时间，UTC秒数，例如：1662114146
   */
  End?: number
  /**
   * 对应时间片段的播放url
   */
  HlsUrl?: string
}

/**
 * ControlRecord请求参数结构体
 */
export interface ControlRecordRequest {
  /**
   * 通道ID（录像播放地址格式 https://${domain}/live/${ChannelId}@${Session}）
   */
  ChannelId: string
  /**
   * 录像会话 ID （ 录像播放地址格式 https://${domain}/live/${ChannelId}@${Session}）
   */
  Session: string
  /**
   * 录像操作类型 （play:播放；pause:暂停 ；stop:关闭）
   */
  ControlAction: string
  /**
   * 跳转进度 （ 参数应大于等于0，跳转到录像开始时间的相对时间（单位秒），例如0就是跳转到录像开始的时间,不可以和 Scale 参数同时出现）
   */
  Position?: number
  /**
   * 速度 （ 范围（0.25,0.5,1,2,4,8），不可以和 Pos 参数同时出现）
   */
  Scale?: number
}

/**
 * ControlDevicePTZ返回参数结构体
 */
export interface ControlDevicePTZResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRecordBackupPlans请求参数结构体
 */
export type ListRecordBackupPlansRequest = null

/**
 * 增加组织接口返回数据
 */
export interface AddOrgData {
  /**
   * 组织 ID
   */
  OrganizationId?: string
  /**
   * 组织名称
   */
  Name?: string
  /**
   * 组织父节点 ID
   */
  ParentId?: string
  /**
   * 组织层级
   */
  Level?: number
  /**
   * 用户ID
   */
  AppId?: number
  /**
   * 组织结构
   */
  ParentIds?: string
  /**
   * 设备总数
   */
  Total?: number
  /**
   * 设备在线数量
   */
  Online?: number
}

/**
 * AddUserDevice请求参数结构体
 */
export interface AddUserDeviceRequest {
  /**
   * 设备名称，仅支持中文、英文、数字、空格、中英文括号、_、-, 长度不超过128位；（设备名称无需全局唯一，可以重复）
   */
  Name: string
  /**
   * 设备接入协议（1:RTMP,2:GB,3:GW,6:ISUP）
   */
  AccessProtocol: number
  /**
   * 设备类型，1:IPC,2:NVR；（若设备接入协议选择RTMP,IVCP，则设备类型只能选择IPC）
   */
  Type: number
  /**
   * 设备所属组织ID，从查询组织接口DescribeOrganization中获取
   */
  OrganizationId: string
  /**
   * 设备接入服务节点ID（从查询设备可用服务节点接口DescribeDeviceRegion中获取的Value字段）
   */
  ClusterId: string
  /**
   * 设备流传输协议，1:UDP,2:TCP；(国标设备有效，不填写则默认UDP协议)
   */
  TransportProtocol?: number
  /**
   * 设备密码（国标，网关设备必填，长度为1-64个字符）
   */
  Password?: string
  /**
   * 设备描述，长度不超过128个字符
   */
  Description?: string
  /**
   * 设备接入网关ID，从查询网关列表接口中ListGateways获取（仅网关接入需要）
   */
  GatewayId?: string
  /**
   * 网关接入协议类型（从查询网关接入协议接口DescribeGatewayProtocol中获取）1.海康SDK，2.大华SDK，3.宇视SDK，4.Onvif（仅网关接入需要）
   */
  ProtocolType?: number
  /**
   * 设备接入IP（仅网关接入需要）
   */
  Ip?: string
  /**
   * 设备端口（仅网关接入需要）
   */
  Port?: number
  /**
   * 设备用户名（仅网关接入需要）
   */
  Username?: string
  /**
   * 设备 SN，仅IVCP 协议设备需要
   */
  SNCode?: string
  /**
   * RTMP推流地址自定义AppName（仅RTMP需要，支持英文、数字、_、-、.、长度不超过64位）
   */
  AppName?: string
  /**
   * RTMP推流地址自定义StreamName（仅RTMP需要，支持英文、数字、_、-、.、长度不超过64位）
   */
  StreamName?: string
}

/**
 * ListRecordBackupPlanDevices返回参数结构体
 */
export interface ListRecordBackupPlanDevicesResponse {
  /**
   * 返回数据
   */
  Data?: ListRecordBackupPlanDevicesData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTask请求参数结构体
 */
export interface DeleteTaskRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * ControlDevicePTZ请求参数结构体
 */
export interface ControlDevicePTZRequest {
  /**
   * 通道 ID（从通道查询接口DescribeDeviceChannel中获取）
   */
  ChannelId: string
  /**
   * 命令类型（上:up,下:down,左:left,右:right
上左:leftup,上右:rightup,下左:leftdown,下右:rightdown
放大:zoomin,缩小:zoomout
聚焦远:focusfar,聚焦近:focusnear
光圈放大:irisin,光圈缩小:irisout）
   */
  Type: string
  /**
   * 命令描述（速度值范围1-8）
   */
  Speed: number
}

/**
 * DescribeRecordBackupPlan请求参数结构体
 */
export interface DescribeRecordBackupPlanRequest {
  /**
   * 录像上云计划ID（从查询录像上云计划列表接口ListRecordBackupPlans中获取）
   */
  PlanId: string
}

/**
 * DescribeRecordBackupPlan返回参数结构体
 */
export interface DescribeRecordBackupPlanResponse {
  /**
   * 返回数据
   */
  Data?: DescribeRecordBackupPlanData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceChannel请求参数结构体
 */
export interface DescribeDeviceChannelRequest {
  /**
   * 设备ID（从获取设备列表接口ListDevices中获取）
   */
  DeviceId: string
}

/**
 * UpdateUserDevice返回参数结构体
 */
export interface UpdateUserDeviceResponse {
  /**
   * 返回数据
   */
  Data?: UpdateDeviceData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录像下载任务数据结构
 */
export interface VideoDownloadTaskData {
  /**
   * 下载任务ID
   */
  DownloadTaskId?: string
}

/**
 * ListTasks请求参数结构体
 */
export interface ListTasksRequest {
  /**
   * 页码，默认为1
   */
  PageNumber?: number
  /**
   * 每页数量，默认为20
   */
  PageSize?: number
  /**
   * 默认不根据该字段进行筛选，否则根据设备操作类型进行筛选，目前值有：BatchDeleteUserDevice，BatchDisableDevice，BatchEnableDevice，
BatchUpgradeDevice，
BatchResetDevice,
BatchRebootDevice,
BatchRefreshDeviceChannel
   */
  Operation?: string
  /**
   * 默认不根据该字段进行筛选，否则根据任务状态进行筛选。状态码：1-未执行，2-执行中，3-完成，4-取消
   */
  Status?: number
  /**
   * 开始时间
   */
  BeginTime?: number
  /**
   * 结束时间
   */
  EndTime?: number
}

/**
 * 用户禁止播流的通道列表返回数据
 */
export interface ListForbidplayChannelsData {
  /**
   * 第几页
   */
  PageNumber?: number
  /**
   * 当前页的设备数量
   */
  PageSize?: number
  /**
   * 本次查询的设备通道总数
   */
  TotalCount?: number
  /**
   * 设备通道信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<ChannelAttrInfo>
}

/**
 * CreateVideoDownloadTask返回参数结构体
 */
export interface CreateVideoDownloadTaskResponse {
  /**
   * 下载任务返回结果
   */
  Data?: VideoDownloadTaskData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateOrganization请求参数结构体
 */
export interface UpdateOrganizationRequest {
  /**
   * 组织ID（从查询组织接口DescribeOrganization中获取）
   */
  OrganizationId: string
  /**
   * 组织名称，支持中文、英文、数字、空格、中英文括号、_、-, 长度不超过64位，且组织名称不能重复
   */
  Name: string
}

/**
 * 新增录像上云计划返回数据
 */
export interface AddRecordBackupPlanData {
  /**
   * 录像上云计划ID
   */
  PlanId?: string
  /**
   * 录像上云计划名称
   */
  PlanName?: string
  /**
   * 录像上云模板ID
   */
  TemplateId?: string
  /**
   * 录像上云计划描述
   */
  Describe?: string
  /**
   * 云文件生命周期
   */
  LifeCycle?: LifeCycleData
  /**
   * 录像上云计划状态，1:正常使用中，0:删除中，无法使用
   */
  Status?: number
  /**
   * 通道数量
   */
  ChannelCount?: number
  /**
   * 创建时间
   */
  CreateAt?: string
  /**
   * 修改时间
   */
  UpdateAt?: string
}

/**
 * DescribeGBDeviceAddr请求参数结构体
 */
export interface DescribeGBDeviceAddrRequest {
  /**
   * 设备ID列表
   */
  DeviceIds: Array<string>
}

/**
 * ControlDeviceSnapshot请求参数结构体
 */
export interface ControlDeviceSnapshotRequest {
  /**
   * 通道ID
   */
  ChannelId: string
  /**
   * 连拍张数，可选值范围1～10
   */
  SnapNum: number
  /**
   * 抓拍间隔时间，可选值范围1～1800
   */
  Interval: number
  /**
   * 图片存储时间，默认 7 天，仅支持（7, 15, 30, 60, 90, 180, 365）天
   */
  Expire?: number
}

/**
 * 修改实时上云模板的请求数据结构
 */
export interface UpdateRecordTemplateData {
  /**
   * 模板名称， 不修改名称时，不需要带该字段
   */
  TemplateName?: string
  /**
   * 上云时间段，不修改名称时，不需要带该字段
   */
  TimeSections?: Array<RecordTemplateTimeSections>
}

/**
 * DescribeDomainRegion请求参数结构体
 */
export type DescribeDomainRegionRequest = null

/**
 * AddRecordTemplate请求参数结构体
 */
export interface AddRecordTemplateRequest {
  /**
   * 模板名称， 仅支持中文、英文、数字、_、-，长度不超过32个字符，模板名称全局唯一，不能为空，不能重复
   */
  TemplateName: string
  /**
   * 上云时间段，按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟
   */
  TimeSections: Array<RecordTemplateTimeSections>
}

/**
 * DescribeRecordFile请求参数结构体
 */
export interface DescribeRecordFileRequest {
  /**
   * 通道所属设备ID
   */
  DeviceId: string
  /**
   * 通道ID
   */
  ChannelId: string
  /**
   * 检索开始时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天
   */
  StartTime: number
  /**
   * 检索结束时间，UTC秒数，例如：1662114246，开始和结束时间段最长为一天，且不能跨天
   */
  EndTime: number
  /**
   * 是否携带每个时间段的播放url
   */
  WithUrl?: boolean
}

/**
 * 录像切片信息
 */
export interface RecordSliceInfo {
  /**
   * 计划ID
   */
  PlanId?: string
  /**
   * 录像切片开始和结束时间列表
   */
  List?: Array<RecordTimeLine>
}

/**
 * QueryForbidPlayChannelList返回参数结构体
 */
export interface QueryForbidPlayChannelListResponse {
  /**
   * 返回结果
   */
  Data?: ListForbidplayChannelsData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoDownloadUrl请求参数结构体
 */
export interface DescribeVideoDownloadUrlRequest {
  /**
   * 通道 ID
   */
  ChannelId: string
  /**
   * 下载的开始时间，UTC 秒数，开始和结束时间段最长为60分钟，且不能跨天。
注意：实际下载的文件时长可能会大于该时段时长，通过指定IsRespActualTime参数可以获取实际下载的开始时间和结束时间。 原因是下载是TS切片对齐的，其目的也是为了保证用户下载数据的完整性，完全包含其指定的时间段。
   */
  BeginTime: string
  /**
   * 下载的结束时间，UTC 秒数，开始和结束时间段最长为60分钟，且不能跨天。
注意：实际下载的文件时长可能会大于该时段时长，通过指定IsRespActualTime参数可以获取实际下载的开始时间和结束时间。 原因是下载是TS切片对齐的，其目的也是为了保证用户下载数据的完整性，完全包含其指定的时间段。
   */
  EndTime: string
  /**
   * 文件格式，"mp4"：mp4格式，"ts"：ts文件格式
   */
  FileType: string
  /**
   * 响应data中是否携带实际下载录像的开始时间与结束时间
   */
  IsRespActualTime?: boolean
  /**
   * 是否返回内网下载URL，默认是false，返回公网下载URL，true则返回内网下载URL
   */
  IsInternal?: boolean
  /**
   * 设置URL的有效期, 最小值是1秒, 最大值是86400秒, 不设置的话, 默认是600秒
   */
  Expires?: number
  /**
   * 下载的MP4文件是否支持G711音频编码. 
注意: 如果云端录像中的音频编码为AAC, 那么下载的MP4默认是支持AAC编码的
如果云端录像中的音频编码为G711且 IsSupportG711设置为true时, 下载的MP4是支持G711音频编码
如果云端录像中的音频编码为G711且 IsSupportG711设置为false时, 下载的MP4是不支持G711音频编码
该参数只对FileType为mp4才有效, 不设置的话, 默认是false
   */
  IsSupportG711?: boolean
}

/**
 * 实时上云计划基础信息
 */
export interface RecordPlanBaseInfo {
  /**
   * 上云计划ID
   */
  PlanId?: string
  /**
   * 上云计划名称
   */
  PlanName?: string
  /**
   * 上云模板ID
   */
  TemplateId?: string
  /**
   * 上云计划描述
   */
  Describe?: string
  /**
   * 码流类型，default:设备默认码流类型，main:主码流，sub:子码流，其他根据设备能力集自定义
   */
  StreamType?: string
  /**
   * 云文件生命周期
   */
  LifeCycle?: LifeCycleData
  /**
   * 录像计划状态，1:正常使用中，0:删除中，无法使用
   */
  Status?: number
  /**
   * 通道总数
   */
  ChannelCount?: number
  /**
   * 录像补录模式（0:不启用，1:启用）
   */
  RepairMode?: number
}

/**
 * ListRecordBackupTemplates请求参数结构体
 */
export type ListRecordBackupTemplatesRequest = null

/**
 * DescribeRecordSlice请求参数结构体
 */
export interface DescribeRecordSliceRequest {
  /**
   * 通道ID
   */
  ChannelId: string
  /**
   * 检索开始时间，UTC秒数，例如：1662114146，开始和结束时间段最长为一天，且不能跨天
   */
  StartTime: number
  /**
   * 检索结束时间，UTC秒数，例如：1662114246，开始和结束时间段最长为一天，且不能跨天
   */
  EndTime: number
}

/**
 * DescribeUserDevice请求参数结构体
 */
export interface DescribeUserDeviceRequest {
  /**
   * 设备ID（从获取设备列表接口ListDevices中获取）
   */
  DeviceId: string
}

/**
 * DescribeDeviceRegion请求参数结构体
 */
export type DescribeDeviceRegionRequest = null

/**
 * AddStreamAuth请求参数结构体
 */
export interface AddStreamAuthRequest {
  /**
   * 鉴权配置ID（uuid）
   */
  Id: string
  /**
   * 是否开播放鉴权（1:开启,0:关闭）
   */
  PullState: number
  /**
   * 播放密钥（仅支持字母数字，长度0-10位）
   */
  PullSecret: string
  /**
   * 播放过期时间（单位：分钟）
   */
  PullExpired: number
  /**
   * 是否开启推流鉴权（1:开启,0:关闭）
   */
  PushState: number
  /**
   * 推流密钥（仅支持字母数字，长度0-10位）
   */
  PushSecret: string
  /**
   * 推流过期时间（单位：分钟）
   */
  PushExpired: number
}

/**
 * 上云模板的时间片段数据格式
 */
export interface RecordTemplateTimeSections {
  /**
   * 周日期，取值范围1～7（对应周一～周日
   */
  DayOfWeek: number
  /**
   * 开始时间，格式：HH:MM:SS，范围：[00:00:00～23:59:59]
   */
  StartTime: string
  /**
   * 结束时间，格式：HH:MM:SS，范围：[00:00:00～23:59:59]
   */
  EndTime: string
}

/**
 * 视频通道码率返回结果
 */
export interface BitRateInfo {
  /**
   * 通道Id
   */
  ChannelId?: string
  /**
   * 码率,单位:kbps
   */
  Bitrate?: number
}

/**
 * PlayRecord请求参数结构体
 */
export interface PlayRecordRequest {
  /**
   * 通道 ID（从查询通道DescribeDeviceChannel接口中获取）
   */
  ChannelId: string
  /**
   * 起始时间
   */
  Start: number
  /**
   *  结束时间
   */
  End: number
  /**
   * 流类型（1:主码流；2:子码流（不可以和 Resolution 同时下发））
   */
  StreamType?: number
  /**
   * 分辨率（1:QCIF；2:CIF； 3:4CIF； 4:D1； 5:720P； 6:1080P/I； 自定义的19201080等等（需设备支持）（不可以和 StreamType 同时下发））
   */
  Resolution?: string
  /**
   * 是否内网
   */
  IsInternal?: boolean
}

/**
 * 修改录像上云模板数据结构
 */
export interface UpdateRecordBackupTemplateModify {
  /**
   * 模板名称（不修改名称时，不需要带该字段）
   */
  TemplateName?: string
  /**
   * 上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）
   */
  TimeSections?: Array<RecordTemplateTimeSections>
  /**
   * 录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）
   */
  DevTimeSections?: Array<RecordTemplateTimeSections>
  /**
   * 上云倍速（支持1，2，4倍速）
   */
  Scale?: number
}

/**
 * QueryForbidPlayChannelList请求参数结构体
 */
export interface QueryForbidPlayChannelListRequest {
  /**
   * 子用户uin，也可以是主用户的uin
   */
  UserId: string
  /**
   * 每页最大数量，最大为200，超过按照200返回
   */
  PageSize: number
  /**
   * 第几页
   */
  PageNumber: number
}

/**
 * 查询设备通道信息返回结果
 */
export interface DescribeDeviceChannelData {
  /**
   * 设备 ID
   */
  DeviceId?: string
  /**
   * 通道 ID
   */
  ChannelId?: string
  /**
   * 通道编码
   */
  ChannelCode?: string
  /**
   * 通道名称
   */
  Name?: string
  /**
   * 流状态（0:未传输,1:传输中）
   */
  Status?: number
  /**
   * 是否可控 Ptz（0:不可控,1:可控）
   */
  PTZType?: number
  /**
   * 通道厂商
   */
  Manufacturer?: string
  /**
   * 通道支持分辨率（分辨率列表由‘/’隔开，国标协议样例（6/3），自定义样例（12800960/640480））
   */
  Resolution?: string
  /**
   * 通道在离线状态（0:离线,1:在线）
   */
  State?: number
  /**
   * 所在地域
   */
  Region?: string
}

/**
 * DescribeRecordFile返回参数结构体
 */
export interface DescribeRecordFileResponse {
  /**
   * 返回结果
   */
  Data?: DescribeRecordFileData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGBDeviceAddr返回参数结构体
 */
export interface DescribeGBDeviceAddrResponse {
  /**
   * 无
   */
  Data?: DescribeDeviceAddrList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ControlDevicePreset请求参数结构体
 */
export interface ControlDevicePresetRequest {
  /**
   * 通道 ID（从通道查询接口DescribeDeviceChannel中获取）
   */
  ChannelId: string
  /**
   * 命令（goto:预置位调用；
set:预置位设置；
del:预置位删除）
   */
  Cmd: string
  /**
   * 预置位索引（只支持1-10的索引位置，超出报错）
   */
  Index: number
}

/**
 * ControlDeviceStream请求参数结构体
 */
export interface ControlDeviceStreamRequest {
  /**
   * 通道 ID（从通道查询接口DescribeDeviceChannel中获取）
   */
  ChannelId: string
  /**
   * 流类型（1:主码流；
2:子码流（不可以和 Resolution 同时下发））
   */
  StreamType?: string
  /**
   * 分辨率（1:QCIF；
2:CIF；
3:4CIF；
4:D1；
5:720P；
6:1080P/I；
自定义的19201080等等（需设备支持）（不可以和 StreamType 同时下发））
   */
  Resolution?: string
  /**
   * 是否内网
   */
  IsInternal?: boolean
}

/**
 * ListRecordRetrieveTasks返回参数结构体
 */
export interface ListRecordRetrieveTasksResponse {
  /**
   * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<RecordRetrieveTaskDetailsInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRecordBackupPlanDevices请求参数结构体
 */
export interface ListRecordBackupPlanDevicesRequest {
  /**
   * 录像计划ID（从查询录像上云计划列表接口ListRecordBackupPlans中获取）
   */
  PlanId: string
  /**
   * 按照设备名称查询（为空时，不参考该参数）
   */
  DeviceName?: string
  /**
   * 按照通道名称查询（为空时，不参考该参数）
   */
  ChannelName?: string
  /**
   * 按照组织名称查询（为空时，不参考该参数）
   */
  OrganizationName?: string
  /**
   * 每页最大数量
   */
  PageSize?: number
  /**
   * 分页页数
   */
  PageNumber?: number
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
 * AddRecordRetrieveTask返回参数结构体
 */
export interface AddRecordRetrieveTaskResponse {
  /**
   * 返回结果
   */
  Data?: AddRecordRetrieveTaskData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRecordTemplate返回参数结构体
 */
export interface DeleteRecordTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云计划下的设备通道列表返回数据
 */
export interface ListRecordPlanDevicesData {
  /**
   * 第几页
   */
  PageNumber?: number
  /**
   * 当前页的设备数量
   */
  PageSize?: number
  /**
   * 本次查询的设备通道总数
   */
  TotalCount?: number
  /**
   * 设备通道信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<RecordPlanChannelInfo>
}

/**
 * 查询录像上云模板列表返回数据
 */
export interface ListRecordBackupTemplatesData {
  /**
   * <p>模板ID</p>
   */
  TemplateId?: string
  /**
   * <p>模板名称</p>
   */
  TemplateName?: string
  /**
   * <p>上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  TimeSections?: Array<RecordTemplateTimeSections>
  /**
   * <p>录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  DevTimeSections?: Array<RecordTemplateTimeSections>
  /**
   * <p>上云倍速（支持1，2，4倍速）</p>
   */
  Scale?: number
  /**
   * <p>创建时间</p>
   */
  CreateAt?: string
  /**
   * <p>更新时间</p>
   */
  UpdateAt?: string
  /**
   * <p>周期偏移量，默认1，表示拉去昨天的，0表示拉去今天的，3表示拉去前天的</p>
   */
  DayOffset?: number
}

/**
 * ListRecordTemplates返回参数结构体
 */
export interface ListRecordTemplatesResponse {
  /**
   * 返回结果，存在模板时，为Json数组格式，不存在模板时，字段数据为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<RecordTemplateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordBackupTemplate请求参数结构体
 */
export interface DescribeRecordBackupTemplateRequest {
  /**
   * 模板ID（从查询录像上云模板列表接口ListRecordBackupTemplates中获取）
   */
  TemplateId: string
}

/**
 * UpdateRecordBackupTemplate返回参数结构体
 */
export interface UpdateRecordBackupTemplateResponse {
  /**
   * 返回数据
   */
  Data?: UpdateRecordBackupTemplateData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ControlRecordTimeline返回参数结构体
 */
export interface ControlRecordTimelineResponse {
  /**
   * 返回数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<Timeline>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询取回任务详情返回数据
 */
export interface AddRecordRetrieveTaskData {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 取回录像的开始时间
   */
  StartTime?: number
  /**
   * 取回录像的结束时间
   */
  EndTime?: number
  /**
   * 取回模式，1:极速模式，其他暂不支持
   */
  Mode?: number
  /**
   * 副本有效期
   */
  Expiration?: number
  /**
   * 任务状态，0:已取回，1:取回中，2:待取回
   */
  Status?: number
  /**
   * 取回容量，单位MB
   */
  Capacity?: number
  /**
   * 任务描述
   */
  Describe?: string
}

/**
 * DeleteRecordRetrieveTask请求参数结构体
 */
export interface DeleteRecordRetrieveTaskRequest {
  /**
   * 取回任务ID
   */
  TaskId: string
}

/**
 * 查询录像上云计划返回数据
 */
export interface DescribeRecordBackupPlanData {
  /**
   * 录像上云计划ID
   */
  PlanId?: string
  /**
   * 录像上云计划名称
   */
  PlanName?: string
  /**
   * 录像上云模板ID
   */
  TemplateId?: string
  /**
   * 录像上云计划描述
   */
  Describe?: string
  /**
   * 云文件生命周期
   */
  LifeCycle?: LifeCycleData
  /**
   * 录像上云计划状态，1:正常使用中，0:删除中，无法使用
   */
  Status?: number
  /**
   * 通道数量
   */
  ChannelCount?: number
  /**
   * 创建时间
   */
  CreateAt?: string
  /**
   * 修改时间
   */
  UpdateAt?: string
}

/**
 * 通道属性信息
 */
export interface ChannelAttrInfo {
  /**
   * 设备通道所属的设备ID
   */
  DeviceId?: string
  /**
   * 设备通道所属的设备名称
   */
  DeviceName?: string
  /**
   * 设备通道ID
   */
  ChannelId?: string
  /**
   * 设备通道名称
   */
  ChannelName?: string
}

/**
 * UpdateRecordPlan返回参数结构体
 */
export interface UpdateRecordPlanResponse {
  /**
   * 返回结果
   */
  Data?: RecordPlanOptData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTask返回参数结构体
 */
export interface DescribeTaskResponse {
  /**
   * 任务详情
   */
  Data?: TaskData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 本地录像下载任务列表
 */
export interface ListVideoDownloadTaskData {
  /**
   * 任务列表
   */
  List?: Array<VideoDownloadTask>
  /**
   * 任务总数
   */
  TotalCount?: number
}

/**
 * DeleteRecordBackupPlan请求参数结构体
 */
export interface DeleteRecordBackupPlanRequest {
  /**
   * 录像上云计划ID（从查询录像上云计划列表接口ListRecordBackupPlans中获取）
   */
  PlanId: string
}

/**
 * ListRecordPlanChannels请求参数结构体
 */
export type ListRecordPlanChannelsRequest = null

/**
 * 查询设备可接入集群信息
 */
export interface DescribeDeviceRegion {
  /**
   * 服务节点描述
   */
  Label?: string
  /**
   * 服务节点 ID（对应为其他接口中所需的 ClusterId）
   */
  Value?: string
  /**
   * 地域信息
   */
  Region?: string
}

/**
 * 计划下的设备通道信息
 */
export interface RecordPlanChannelInfo {
  /**
   * 设备通道所属的设备ID
   */
  DeviceId?: string
  /**
   * 设备通道所属的设备名称
   */
  DeviceName?: string
  /**
   * 设备通道ID
   */
  ChannelId?: string
  /**
   * 设备通道名称
   */
  ChannelName?: string
  /**
   * 所属组织名称
   */
  OrganizationName?: string
  /**
   * 通道所属设备的接入协议类型
   */
  AccessProtocol?: number
}

/**
 * SetForbidPlayChannels返回参数结构体
 */
export interface SetForbidPlayChannelsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListVideoDownloadTask请求参数结构体
 */
export interface ListVideoDownloadTaskRequest {
  /**
   * 设备名称，用于模糊搜索
   */
  DeviceName?: string
  /**
   * 通道名称，用于模糊搜索
   */
  ChannelName?: string
  /**
   * 任务状态（0：准备中，1：执行中，2：已完成，3：失败）
   */
  Status?: number
  /**
   * 排序规则（仅支持 StartTime，倒序为-StartTime）
   */
  SortRule?: string
  /**
   * 响应是否携带预览地址(0:不携带；1:携带)
   */
  WithPreviewUrl?: number
  /**
   * 分页页数
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 下载任务 ID
   */
  DownloadTaskId?: string
  /**
   * 下载地址过期时间，单位秒，最大为 1 天， 86400秒
   */
  UrlExpires?: number
  /**
   * 任务日期，默认当天
   */
  Date?: string
}

/**
 * DeleteRecordBackupTemplate请求参数结构体
 */
export interface DeleteRecordBackupTemplateRequest {
  /**
   * 模板ID（从查询录像上云模板列表接口ListRecordBackupTemplates中获取）
   */
  TemplateId: string
}

/**
 * 录像取回任务详情基础信息
 */
export interface RecordRetrieveTaskDetailsInfo {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 取回录像的开始时间
   */
  StartTime?: number
  /**
   * 取回录像的结束时间
   */
  EndTime?: number
  /**
   * 取回模式，1:极速模式，其他暂不支持
   */
  Mode?: number
  /**
   * 副本有效期
   */
  Expiration?: number
  /**
   * 任务状态， 0:已取回，1:取回中，2:待取回
   */
  Status?: number
  /**
   * 取回容量，单位MB
   */
  Capacity?: number
  /**
   * 任务描述
   */
  Describe?: string
  /**
   * 任务通道数量
   */
  ChannelCount?: number
}

/**
 * 查询视频通道码率的返回结果列表
 */
export interface DescribeVideoBitRateList {
  /**
   * 通道码率列表
   */
  BitRates?: Array<BitRateInfo>
}

/**
 * UpdateRecordTemplate返回参数结构体
 */
export interface UpdateRecordTemplateResponse {
  /**
   * 返回结果
   */
  Data?: RecordTemplateInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddRecordBackupTemplate返回参数结构体
 */
export interface AddRecordBackupTemplateResponse {
  /**
   * <p>返回数据</p>
   */
  Data?: AddRecordBackupTemplateData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PlayRecord返回参数结构体
 */
export interface PlayRecordResponse {
  /**
   * 返回结果
   */
  Data?: PlayRecordData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordBackupTemplate返回参数结构体
 */
export interface DescribeRecordBackupTemplateResponse {
  /**
   * 返回数据
   */
  Data?: DescribeRecordBackupTemplateData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddUserDevice返回参数结构体
 */
export interface AddUserDeviceResponse {
  /**
   * 增加设备返回数据
   */
  Data?: AddDeviceData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 本地录像播放url数据结构
 */
export interface PlayRecordData {
  /**
   * 录像播放地址
   */
  Flv?: string
}

/**
 * DeleteTask返回参数结构体
 */
export interface DeleteTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordPlaybackUrl返回参数结构体
 */
export interface DescribeRecordPlaybackUrlResponse {
  /**
   * 返回结果
   */
  Data?: RecordPlaybackUrl
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改实时上云录像计划的数据
 */
export interface UpdateRecordPlanData {
  /**
   * 上云计划名称，仅支持中文、英文、数字、_、-，长度不超过32个字符，计划名称全局唯一，不能为空，不能重复，不修改名称时，不需要该字段
   */
  PlanName?: string
  /**
   * 上云模板ID，不修改模板ID时，不需要该字段
   */
  TemplateId?: string
  /**
   * 上云计划描述，仅支持中文、英文、数字、_、-，长度不超过128个字符， 不修改描述时，不需要该字段
   */
  Describe?: string
  /**
   * 码流类型，default:不指定码流类型，以设备默认推送类型为主， main:主码流，sub:子码流，其他根据设备能力集自定义，长度不能超过32个字节
   */
  StreamType?: string
  /**
   * 生命周期，文件生命周期设置，管理文件冷、热存储的时间，不修改生命周期时，不需要该字段
   */
  LifeCycle?: LifeCycleData
  /**
   * 要新增的设备通道,Json数组，没有新增时，不需要该字段，一次添加通道总数不超过5000个，包括组织目录下的通道数量
   */
  Add?: Array<ChannelInfo>
  /**
   * 要删除的设备通道，Json数组，内容为要删除的设备通道id，没有删除设备通道时，不需要该字段
   */
  Del?: Array<string>
  /**
   * 组织目录ID，添加组织目录下所有设备通道，Json数组，可以为空，并且通道总数量不超过5000个（包括Add字段通道数量）
   */
  OrganizationId?: Array<string>
  /**
   * 录像补录模式（0:不启用，1:启用）
   */
  RepairMode?: number
}

/**
 * DescribeTask请求参数结构体
 */
export interface DescribeTaskRequest {
  /**
   * 简单任务或复杂任务ID
   */
  TaskId: string
}

/**
 * ListOrganizationChannels返回参数结构体
 */
export interface ListOrganizationChannelsResponse {
  /**
   * 返回结果
   */
  Data?: ListOrganizationChannelsData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于查询设备云端录像时间轴信息返回数据
 */
export interface DescribeRecordFileData {
  /**
   * 提示类型，0:时间段内无归档录像，1:时间段内有归档录像
   */
  Tips?: number
  /**
   * 存在为数组格式，不存在字段内容为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<RecordTimeLine>
}

/**
 * 修改组织接口返回数据
 */
export interface UpdateOrgData {
  /**
   * 组织 ID
   */
  OrganizationId?: string
  /**
   * 组织名称
   */
  Name?: string
  /**
   * 组织父节点 ID
   */
  ParentId?: string
  /**
   * 组织层级
   */
  Level?: number
  /**
   * 用户ID
   */
  AppId?: number
  /**
   * 组织结构
   */
  ParentIds?: string
  /**
   * 设备总数
   */
  Total?: number
  /**
   * 设备在线数量
   */
  Online?: number
}

/**
 * DescribeDomainRegion返回参数结构体
 */
export interface DescribeDomainRegionResponse {
  /**
   * 返回数据
   */
  Data?: Array<DescribeDomainRegionData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchOperateDevice请求参数结构体
 */
export interface BatchOperateDeviceRequest {
  /**
   * 设备 ID 数组（从获取设备列表接口ListDevices中获取）
   */
  DeviceIds: Array<string>
  /**
   * 操作命令（enable：启用；disable：禁用；delete：删除；sync：同步设备通道；upgrade：固件升级；reset：恢复出厂设置；reboot：重启）
   */
  Cmd: string
}

/**
 * 查询组织目录下的通道列表返回数据
 */
export interface ListOrganizationChannelsData {
  /**
   * 第几页
   */
  PageNumber?: number
  /**
   * 当前页的设备数量
   */
  PageSize?: number
  /**
   * 本次查询的设备通道总数
   */
  TotalCount?: number
  /**
   * 设备通道信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<OrganizationChannelInfo>
}

/**
 * AddRecordBackupPlan请求参数结构体
 */
export interface AddRecordBackupPlanRequest {
  /**
   * 录制模板ID（录像计划关联的模板ID，从查询录像上云模板列表接口ListRecordBackupTemplates中获取）
   */
  TemplateId: string
  /**
   * 录像计划名称（仅支持中文、英文、数字、_、-，长度不超过32个字符，计划名称全局唯一，不能为空，不能重复）
   */
  PlanName: string
  /**
   * 录像计划描述（仅支持中文、英文、数字、_、-，长度不超过128个字符）
   */
  Describe: string
  /**
   * 生命周期（录像文件生命周期设置，管理文件冷、热存储的时间）
   */
  LifeCycle: LifeCycleData
  /**
   * 通道及通道所属设备（添加录像的设备的通道信息，一次添加通道总数不超过5000个，包括组织目录下的通道数量）
   */
  Channels?: Array<ChannelInfo>
  /**
   * 添加组织目录下所有设备通道（Json数组，可以为空，通道总数量不超过5000个（包括Channel字段的数量））
   */
  OrganizationId?: Array<string>
}

/**
 * 查询任务列表
 */
export interface ListTasksData {
  /**
   * 任务列表
   */
  List?: Array<TaskData>
  /**
   * 任务数量
   */
  TotalCount?: number
}

/**
 * 列举子任务列表
 */
export interface ListSubTasksData {
  /**
   * 子任务列表
   */
  List?: Array<SubTaskData>
  /**
   * 子任务数量
   */
  TotalCount?: number
}

/**
 * 获取开流地址返回数据
 */
export interface ControlDeviceStreamData {
  /**
   * flv 流地址
   */
  Flv?: string
  /**
   * hls 流地址
   */
  Hls?: string
  /**
   * rtmp 流地址
   */
  Rtmp?: string
}

/**
 * ListDeviceSnapshots返回参数结构体
 */
export interface ListDeviceSnapshotsResponse {
  /**
   * 抓拍结果信息列表
   */
  Data?: Array<GBDeviceSnapInfo>
  /**
   * 抓拍结果总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时上云模板信息数据
 */
export interface RecordTemplateInfo {
  /**
   * 模板ID
   */
  TemplateId?: string
  /**
   * 模板名称
   */
  TemplateName?: string
  /**
   * 上云时间段，按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟
   */
  TimeSections?: Array<RecordTemplateTimeSections>
}

/**
 * UpdateRecordBackupTemplate请求参数结构体
 */
export interface UpdateRecordBackupTemplateRequest {
  /**
   * 模板ID（从查询录像上云模板列表接口ListRecordBackupTemplates中获取）
   */
  TemplateId: string
  /**
   * 修改录像上云模板数据
   */
  Mod: UpdateRecordBackupTemplateModify
}

/**
 * UpdateDeviceStatus返回参数结构体
 */
export interface UpdateDeviceStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserDevice返回参数结构体
 */
export interface DeleteUserDeviceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRecordBackupPlan返回参数结构体
 */
export interface UpdateRecordBackupPlanResponse {
  /**
   * 返回数据
   */
  Data?: UpdateRecordBackupPlanData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询域名可绑定集群数据
 */
export interface DescribeDomainRegionData {
  /**
   * 服务节点描述
   */
  Label?: string
  /**
   * 服务节点 ID（对应为其他接口中所需的 ClusterId）
   */
  Value?: string
  /**
   * 地域信息
   */
  Region?: string
}

/**
 * AddOrganization请求参数结构体
 */
export interface AddOrganizationRequest {
  /**
   * 组织名称（仅支持中文、英文、数字、空格、中英文括号、_、-, 长度不超过64位，且组织名称不能重复）
   */
  Name: string
  /**
   * 组织父节点 ID（从查询组织接口DescribeOrganization中获取，填0代表根组织）
   */
  ParentId: string
}

/**
 * 设备地址返回结果
 */
export interface RemoteAddrInfo {
  /**
   * 设备Id
   */
  DeviceId?: string
  /**
   * IP地址
   */
  Addr?: string
}

/**
 * DescribeStreamAuth返回参数结构体
 */
export interface DescribeStreamAuthResponse {
  /**
   * 返回结果
   */
  Data?: DescribeStreamAuthData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询录像上云计划列表返回数据
 */
export interface ListRecordBackupPlanData {
  /**
   * 录像上云计划ID
   */
  PlanId?: string
  /**
   * 录像上云计划名称
   */
  PlanName?: string
  /**
   * 录像上云模板ID
   */
  TemplateId?: string
  /**
   * 录像上云计划描述
   */
  Describe?: string
  /**
   * 云文件生命周期
   */
  LifeCycle?: LifeCycleData
  /**
   * 录像上云计划状态，1:正常使用中，0:删除中，无法使用
   */
  Status?: number
  /**
   * 通道数量
   */
  ChannelCount?: number
  /**
   * 创建时间
   */
  CreateAt?: string
  /**
   * 修改时间
   */
  UpdateAt?: string
}

/**
 * DeleteRecordBackupTemplate返回参数结构体
 */
export interface DeleteRecordBackupTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVideoDownloadTask请求参数结构体
 */
export interface CreateVideoDownloadTaskRequest {
  /**
   * 通道ID
   */
  ChannelId: string
  /**
   * 开始时间
   */
  BeginTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 默认1倍速，支持（1,2,4,8）倍速
   */
  Scale?: number
  /**
   * 转码后的mp4文件过期时间（支持7,15,30,60,90,180,365）
   */
  Expire?: number
  /**
   * 下载文件格式，当前仅支持（1：mp4）
   */
  FileType?: number
  /**
   * 完成策略（0：拉流失败但是录像不完整则认为任务失败，不生成 MP4；1：拉流失败但是录像不完整则认为任务成功，生成 mp4）
   */
  CompletionPolicy?: number
}

/**
 * DescribeRecordRetrieveTask返回参数结构体
 */
export interface DescribeRecordRetrieveTaskResponse {
  /**
   * 返回结果
   */
  Data?: DescribeRecordRetrieveTaskData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamAuth请求参数结构体
 */
export type DescribeStreamAuthRequest = null

/**
 * 修改录像上云模板返回数据
 */
export interface UpdateRecordBackupTemplateData {
  /**
   * <p>模板ID</p>
   */
  TemplateId?: string
  /**
   * <p>模板名称</p>
   */
  TemplateName?: string
  /**
   * <p>上云时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  TimeSections?: Array<RecordTemplateTimeSections>
  /**
   * <p>录像时间段（按周进行设置，支持一天设置多个时间段，每个时间段不小于10分钟）</p>
   */
  DevTimeSections?: Array<RecordTemplateTimeSections>
  /**
   * <p>上云倍速（支持1，2，4倍速）</p>
   */
  Scale?: number
  /**
   * <p>创建时间</p>
   */
  CreateAt?: string
  /**
   * <p>更新时间</p>
   */
  UpdateAt?: string
  /**
   * <p>周期偏移量，默认1，表示拉取昨天的设备录像，0表示取去今天的设备录像，3表示拉取前天的设备录像</p>
   */
  DayOffset?: number
}

/**
 * 修改录像上云计划返回数据
 */
export interface UpdateRecordBackupPlanData {
  /**
   * 录像上云计划ID
   */
  PlanId?: string
  /**
   * 录像上云计划名称
   */
  PlanName?: string
  /**
   * 录像上云模板ID
   */
  TemplateId?: string
  /**
   * 录像上云计划描述
   */
  Describe?: string
  /**
   * 云文件生命周期
   */
  LifeCycle?: LifeCycleData
  /**
   * 录像上云计划状态，1:正常使用中，0:删除中，无法使用
   */
  Status?: number
  /**
   * 通道数量
   */
  ChannelCount?: number
  /**
   * 创建时间
   */
  CreateAt?: string
  /**
   * 修改时间
   */
  UpdateAt?: string
}

/**
 * 增加设备接口返回数据
 */
export interface AddDeviceData {
  /**
   * 设备iD
   */
  DeviceId?: string
  /**
   * 设备编码（国标设备即我们为设备生成的20位国标编码，rtmp 设备为10 位设备编码）
   */
  Code?: string
  /**
   * 设备名称
   */
  Name?: string
  /**
   * 设备接入协议，1:RTMP,2:GB,3:GW
   */
  AccessProtocol?: number
  /**
   * 设备类型，1:IPC,2:NVR
   */
  Type?: number
  /**
   * 设备接入服务节点ID
   */
  ClusterId?: string
  /**
   * 设备接入服务节点名称

   */
  ClusterName?: string
  /**
   * 设备流传输协议，1:UDP,2:TCP
   */
  TransportProtocol?: number
  /**
   * 设备密码
   */
  Password?: string
  /**
   * 设备描述
   */
  Description?: string
  /**
   * 设备状态，0:未注册,1:在线,2:离线,3:禁用
   */
  Status?: number
  /**
   * 设备所属组织ID
   */
  OrganizationId?: number
  /**
   * 设备接入网关ID，从查询网关列表接口中获取（仅网关接入需要）
   */
  GatewayId?: string
  /**
   * 网关接入协议类型，1.海康SDK，2.大华SDK，3.宇视SDK，4.Onvif（仅网关接入需要）
   */
  ProtocolType?: number
  /**
   * 设备接入IP（仅网关接入需要）
   */
  Ip?: string
  /**
   * 设备Port（仅网关接入需要）
   */
  Port?: number
  /**
   * 设备用户名（仅网关接入需要）
   */
  Username?: string
  /**
   * 用户ID
   */
  AppId?: number
}
