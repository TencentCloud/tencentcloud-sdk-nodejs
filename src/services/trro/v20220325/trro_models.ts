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
 * 云端录制文件上传到云存储的参数（对象存储cos）
 */
export interface CloudStorage {
  /**
   * 腾讯云对象存储COS以及第三方云存储账号信息
0：腾讯云对象存储 COS
1：AWS
【注意】目前第三方云存储仅支持AWS，更多第三方云存储陆续支持中
示例值：0
   */
  Vendor: number
  /**
   * 腾讯云对象存储的[地域信息]（https://cloud.tencent.com/document/product/436/6224#.E5.9C.B0.E5.9F.9F）。
示例值：cn-shanghai-1

AWS S3[地域信息]（https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-regions）
示例值：ap-shanghai(cos, 具体参考云存储厂商支持的地域)
   */
  Region: string
  /**
   * 云存储桶名称。
   */
  Bucket: string
  /**
   * 云存储的access_key账号信息。
若存储至腾讯云对象存储COS，请前往https://console.cloud.tencent.com/cam/capi 查看或创建，对应链接中密钥字段的SecretId值。
   */
  AccessKey: string
  /**
   * 云存储的secret_key账号信息。
若存储至腾讯云对象存储COS，请前往https://console.cloud.tencent.com/cam/capi 查看或创建，对应链接中密钥字段的SecretKey值。
   */
  SecretKey: string
  /**
   * 云存储bucket 的指定位置，由字符串数组组成。合法的字符串范围az,AZ,0~9,'_'和'-'，举个例子，录制文件xxx.m3u8在 ["prefix1", "prefix2"]作用下，会变成prefix1/prefix2/TaskId/xxx.m3u8。
   */
  FileNamePrefix?: Array<string>
}

/**
 * StartPublishLiveStream返回参数结构体
 */
export interface StartPublishLiveStreamResponse {
  /**
   * 用于唯一标识转推任务，由腾讯云服务端生成，后续停止请求需要携带TaskiD参数。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 按授权查看的license列表
 */
export interface License {
  /**
   * 该类型的license个数
   */
  Count?: number
  /**
   * license状态：0:未绑定；1:已绑定；2:已停服；3:已退费
   */
  Status?: number
  /**
   * 到期时间戳：s
   */
  ExpireTime?: string
  /**
   * 服务时长：s
   */
  Duration?: string
  /**
   * 剩余天数：天
   */
  RemainDay?: number
  /**
   * 该类型的licenseId列表
   */
  LicenseIds?: Array<string>
}

/**
 * BoundLicenses请求参数结构体
 */
export interface BoundLicensesRequest {
  /**
   * license数量
   */
  Count: number
  /**
   * 设备id
   */
  DeviceId: string
  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * 权限信息
 */
export interface PolicyInfo {
  /**
   * 远端设备ID
   */
  RemoteDeviceId: string
  /**
   * 关联的现场设备ID
   */
  FieldDeviceIds: Array<string>
  /**
   * 最近添加时间
   */
  ModifyTime: string
}

/**
 * CreateCloudRecording返回参数结构体
 */
export interface CreateCloudRecordingResponse {
  /**
   * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。任务 ID需要业务保存下来，作为下次针对这个录制任务操作的参数。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProjectSecMode返回参数结构体
 */
export interface ModifyProjectSecModeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartPublishLiveStream请求参数结构体
 */
export interface StartPublishLiveStreamRequest {
  /**
   * 是否转码，0表示无需转码，1表示需要转码。是否收取转码费是由WithTranscoding参数决定的，WithTranscoding为0，表示旁路转推，不会收取转码费用，WithTranscoding为1，表示混流转推，会收取转码费用。 示例值：1
   */
  WithTranscoding: number
  /**
   * 所有参与混流转推的主播持续离开TRTC房间或切换成观众超过MaxIdleTime的时长，自动停止转推，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。
   */
  MaxIdleTime: number
  /**
   * 转推视频参数
   */
  VideoParams: VideoParams
  /**
   * 转推的URL参数，一个任务最多支持10个推流URL
   */
  PublishParams: Array<PublishParams>
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
 * GetLicenses请求参数结构体
 */
export interface GetLicensesRequest {
  /**
   * 页码
   */
  PageNum: number
  /**
   * 页面数量
   */
  PageSize: number
  /**
   * projectId
   */
  ProjectId?: string
  /**
   * DeviceId
   */
  DeviceId?: string
  /**
   * license状态：0:未绑定；1:已绑定；2:已停服；3:已退费
   */
  Status?: number
}

/**
 * DescribePolicy返回参数结构体
 */
export interface DescribePolicyResponse {
  /**
   * 权限模式
   */
  PolicyMode?: string
  /**
   * 返回的权限模式是否为当前生效的权限模式
   */
  PolicyEnabled?: boolean
  /**
   * 权限信息列表
   */
  PolicyInfo?: Array<PolicyInfo>
  /**
   * 本次返回的权限信息数量
   */
  Num?: number
  /**
   * 权限信息总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeleteDevices请求参数结构体
 */
export interface BatchDeleteDevicesRequest {
  /**
   * 目标删除设备所属项目ID
   */
  ProjectId: string
  /**
   * 目标删除设备的设备ID数组
   */
  DeviceIds: Array<string>
}

/**
 * ModifyProjectSecMode请求参数结构体
 */
export interface ModifyProjectSecModeRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 安全模式  
0：关闭项目共享密钥 
1：开启项目共享密钥
   */
  Mode: number
  /**
   * 项目密钥 32位 小写英文+数字；  项目密钥模式必填
   */
  Key?: string
  /**
   * 自动注册方式
0：关闭自动注册
1：仅允许现场设备自动注册
2：仅允许远端设备自动注册
3：允许现场和远端设备均自动注册
   */
  AutoRegister?: number
  /**
   * 是否允许远端获取现场设备列表（getGwList）
0：不允许
1：允许
   */
  FieldListEnable?: number
}

/**
 * DescribeDeviceInfo请求参数结构体
 */
export interface DescribeDeviceInfoRequest {
  /**
   * 目标设备所属项目ID
   */
  ProjectId: string
  /**
   * 目标设备ID
   */
  DeviceId: string
}

/**
 * DescribeSessionStatisticsByInterval返回参数结构体
 */
export interface DescribeSessionStatisticsByIntervalResponse {
  /**
   * 各时间段的会话统计数据
   */
  SessionStatistics?: Array<SessionIntervalStatistic>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetLicenseStat返回参数结构体
 */
export interface GetLicenseStatResponse {
  /**
   * 有效授权
   */
  Valid?: number
  /**
   * 已绑定授权
   */
  Bound?: number
  /**
   * 未绑定授权
   */
  UnBound?: number
  /**
   * 过期授权
   */
  Expire?: number
  /**
   * 当月用量超时授权个数
   */
  MonthlyExpire?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 会话信息
 */
export interface SessionInfo {
  /**
   * 会话ID
   */
  SessionId?: string
  /**
   * 远端设备ID
   */
  RemoteDeviceId?: string
  /**
   * 现场设备ID
   */
  FieldDeviceId?: string
  /**
   * 分辨率
   */
  Resolution?: string
  /**
   * 会话开始时间
   */
  StartTime?: number
  /**
   * 会话结束时间
   */
  EndTime?: number
  /**
   * 通话质量：good|normal|bad，对应优良差
   */
  Quality?: string
}

/**
 * DescribeRecentSessionList请求参数结构体
 */
export interface DescribeRecentSessionListRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 页码，从1开始
   */
  PageNumber: number
  /**
   * 每页个数
   */
  PageSize: number
  /**
   * 设备ID，支持过滤远端设备或现场设备
   */
  DeviceId?: string
  /**
   * 时间范围的起始时间。时间范围最大为最近两小时，若不传或超出范围，则起始时间按两小时前计算
   */
  StartTime?: number
  /**
   * 时间范围的结束时间。时间范围最大为最近两小时，若不传或超出范围，则结束时间按当前时间计算
   */
  EndTime?: number
}

/**
 * DescribeDeviceSessionDetails返回参数结构体
 */
export interface DescribeDeviceSessionDetailsResponse {
  /**
   * 按设备区分的会话详细数据
   */
  Details?: Array<SessionDeviceDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjectInfo请求参数结构体
 */
export interface DescribeProjectInfoRequest {
  /**
   * 目标项目ID，必填参数
   */
  ProjectId: string
}

/**
 * ModifyPolicy请求参数结构体
 */
export interface ModifyPolicyRequest {
  /**
   * 修改权限配置的项目ID
   */
  ProjectId: string
  /**
   * 修改权限配置的远端设备ID
   */
  RemoteDeviceId: string
  /**
   * 权限修改涉及的现场设备ID数组
   */
  FieldDeviceIds: Array<string>
  /**
   * 修改的目标权限模式，black为黑名单，white为白名单
   */
  PolicyMode: string
  /**
   * 修改模式，add为新增（添加现场设备I关联），remove为删除（解除现场设备关联），set为设置（更新现场设备关联）
   */
  ModifyMode: string
}

/**
 * DescribeDeviceInfo返回参数结构体
 */
export interface DescribeDeviceInfoResponse {
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 设备类型，field为现场设备（被控方），remote为远端设备（操控方）
   */
  DeviceType: string
  /**
   * 设备状态，offline为离线，ready为在线准备，connected为会话中
   */
  DeviceStatus: string
  /**
   * 设备状态最后更新时间
   */
  LastReportTime: string
  /**
   * 设备信息最后修改时间
   */
  ModifyTime: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetLicenseStat请求参数结构体
 */
export type GetLicenseStatRequest = null

/**
 * GetDurationDetails返回参数结构体
 */
export interface GetDurationDetailsResponse {
  /**
   * 列表总数
   */
  TotalCount?: number
  /**
   * 时长明细列表
   */
  DurationDetails?: Array<DurationDetails>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjectList返回参数结构体
 */
export interface DescribeProjectListResponse {
  /**
   * 项目信息数组
   */
  Projects: Array<ProjectInfo>
  /**
   * 项目总数
   */
  Total: number
  /**
   * 本次返回的项目数
   */
  Num: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeletePolicy返回参数结构体
 */
export interface BatchDeletePolicyResponse {
  /**
   * 删除权限配置失败的远端设备ID列表
   */
  FailedRemoteDeviceIds: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudRecording请求参数结构体
 */
export interface CreateCloudRecordingRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 设备id
   */
  DeviceId: string
  /**
   * 视频流号
   */
  VideoStreamId: number
  /**
   * 腾讯云对象存储COS以及第三方云存储的账号信息
   */
  CloudStorage: CloudStorage
  /**
   * 如果是aac或者mp4文件格式，超过长度限制后，系统会自动拆分视频文件。单位：分钟。默认为1440min（24h），取值范围为1-1440。【单文件限制最大为2G，满足文件大小 >2G 或录制时长度 > 24h任意一个条件，文件都会自动切分】 Hls 格式录制此参数不生效。
   */
  MaxMediaFileDuration?: number
  /**
   * 输出文件的格式（存储至COS等第三方存储时有效）。0：输出文件为hls格式。1：输出文件格式为hls+mp4。2：输出文件格式为hls+aac 。3：(默认)输出文件格式为mp4。4：输出文件格式为aac。
   */
  OutputFormat?: number
  /**
   * 房间内持续没有主播的状态超过MaxIdleTime的时长，自动停止录制，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。 示例值：30
   */
  MaxIdleTime?: number
}

/**
 * DescribePolicy请求参数结构体
 */
export interface DescribePolicyRequest {
  /**
   * 查看权限的项目ID
   */
  ProjectId: string
  /**
   * 查看的权限模式，black为黑名单，white为白名单，不填默认为当前项目生效的权限模式
   */
  PolicyMode?: string
  /**
   * 模糊匹配模式，remoteMatch为远端设备ID匹配，fieldMatch为现场ID匹配，不填默认为remoteMatch
   */
  SearchMode?: string
  /**
   * 模糊匹配关键字，不填默认不进行模糊匹配
   */
  SearchWords?: string
  /**
   * 每页返回的最大数量，不填默认为10
   */
  PageSize?: number
  /**
   * 当前页码，不填默认为1（首页）
   */
  PageNumber?: number
}

/**
 * ModifyPolicy返回参数结构体
 */
export interface ModifyPolicyResponse {
  /**
   * 添加关联失败的现场设备ID列表
   */
  FailedInsertIds?: Array<string>
  /**
   * 解除关联失败的现场设备ID列表
   */
  FailedDeleteIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询用户设备的授权绑定情况
 */
export interface Device {
  /**
   * 设备ID
   */
  DeviceId?: string
  /**
   * 设备名称
   */
  DeviceName?: string
  /**
   * 已经绑定license数量
   */
  LicenseCount?: number
  /**
   * 剩余天数：天
   */
  RemainDay?: number
  /**
   * 过期时间：s
   */
  ExpireTime?: string
  /**
   * 服务时长：s
   */
  Duration?: string
  /**
   * 已经绑定licenseId列表
   */
  LicenseIds?: Array<string>
  /**
   * 每月license的限定时长
   */
  MonthlyRemainTime?: number
  /**
   * 月封顶时长（分钟)
   */
  LimitedTime?: number
}

/**
 * DeleteCloudRecording返回参数结构体
 */
export interface DeleteCloudRecordingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSessionStatistics请求参数结构体
 */
export interface DescribeSessionStatisticsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 设备ID
   */
  DeviceId?: string
  /**
   * 起始时间，单位：秒
   */
  StartTime?: number
  /**
   * 结束时间，单位：秒
   */
  EndTime?: number
}

/**
 * GetDurationDetails请求参数结构体
 */
export interface GetDurationDetailsRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 页码
   */
  PageNum: number
  /**
   * 页面数量
   */
  PageSize: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 设备ID，不传查全部设备
   */
  DeviceId?: string
}

/**
 * BatchDeleteDevices返回参数结构体
 */
export interface BatchDeleteDevicesResponse {
  /**
   * 删除失败的设备ID列表
   */
  FailedDeviceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
  /**
   * 目标修改项目的项目ID
   */
  ProjectId: string
  /**
   * 修改后的项目名称，不填则不修改
   */
  ProjectName?: string
  /**
   * 修改后的项目描述，不填则不修改
   */
  ProjectDescription?: string
  /**
   * 修改后的权限模式，black为黑名单，white为白名单,不填则不修改
   */
  PolicyMode?: string
}

/**
 * DescribeRecentSessionList返回参数结构体
 */
export interface DescribeRecentSessionListResponse {
  /**
   * 总个数
   */
  Total?: number
  /**
   * 会话列表
   */
  RecentSessionList?: Array<RecentSessionInfo>
  /**
   * 本页数量
   */
  Num?: number
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
   * 要修改设备归属项目的项目ID
   */
  ProjectId: string
  /**
   * 要修改设备的设备ID
   */
  DeviceId: string
  /**
   * 修改后的设备名称，不填则不修改
   */
  DeviceName?: string
  /**
   * 修改后的设备认证口令，不填则不修改
   */
  DeviceToken?: string
}

/**
 * DescribeProjectList请求参数结构体
 */
export interface DescribeProjectListRequest {
  /**
   * 每页返回的最大项目数量，不填默认为10
   */
  PageSize?: number
  /**
   * 当前页码，不填默认为1（首页）
   */
  PageNumber?: number
}

/**
 * 项目信息
 */
export interface ProjectInfo {
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 项目描述
   */
  ProjectDescription?: string
  /**
   * 项目权限模式，black为黑名单，white为白名单
   */
  PolicyMode?: string
  /**
   * 项目信息修改时间
   */
  ModifyTime?: string
}

/**
 * BatchDeletePolicy请求参数结构体
 */
export interface BatchDeletePolicyRequest {
  /**
   * 删除权限配置的项目ID
   */
  ProjectId: string
  /**
   * 删除权限配置的远端设备ID列表
   */
  RemoteDeviceIds: Array<string>
  /**
   * 删除权限配置的权限模式, black为黑名单，white为白名单
   */
  PolicyMode: string
}

/**
 * 最新会话信息
 */
export interface RecentSessionInfo {
  /**
   * 会话ID
   */
  SessionId?: string
  /**
   * 远端设备ID
   */
  RemoteDeviceId?: string
  /**
   * 现场设备ID
   */
  FieldDeviceId?: string
  /**
   * 分辨率
   */
  Resolution?: string
  /**
   * 会话开始时间
   */
  StartTime?: number
  /**
   * 最后更新时间
   */
  LatestUpdateTime?: number
}

/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * 项目ID，长度为16位
   */
  ProjectId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjectInfo返回参数结构体
 */
export interface DescribeProjectInfoResponse {
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 项目描述
   */
  ProjectDescription?: string
  /**
   * 项目权限模式，black为黑名单，white为白名单
   */
  PolicyMode?: string
  /**
   * 项目信息修改时间
   */
  ModifyTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceList返回参数结构体
 */
export interface DescribeDeviceListResponse {
  /**
   * <p>设备信息列表</p>
   */
  Devices?: Array<DeviceInfo>
  /**
   * <p>设备总数</p>
   */
  Total?: number
  /**
   * <p>本次返回的设备数</p>
   */
  Num?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopPublishLiveStream请求参数结构体
 */
export interface StopPublishLiveStreamRequest {
  /**
   * 唯一标识转推任务。
   */
  TaskId: string
}

/**
 * DeleteCloudRecording请求参数结构体
 */
export interface DeleteCloudRecordingRequest {
  /**
   * 录制任务的唯一Id，在启动录制成功后会返回。
   */
  TaskId: string
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
 * DescribeDeviceList请求参数结构体
 */
export interface DescribeDeviceListRequest {
  /**
   * <p>设备所属项目ID</p>
   */
  ProjectId: string
  /**
   * <p>设备类型筛选，不填默认为全部设备类型</p>
   */
  DeviceType?: string
  /**
   * <p>对设备ID或Name按关键字进行模糊匹配，不填则不进行模糊匹配</p>
   */
  SearchWords?: string
  /**
   * <p>每页返回的最大设备数，不填默认为10</p>
   */
  PageSize?: number
  /**
   * <p>当前页码，不填默认为1（首页）</p>
   */
  PageNumber?: number
  /**
   * <p>设备状态筛选，不填默认为不过滤。取值：[&quot;ready&quot;,&quot;connected&quot;,&quot;online&quot;]，online代表ready或connected</p>
   */
  DeviceStatus?: string
  /**
   * <p>标识查询项目下的设备注册类型，默认不包含免注册登录设备。 若存在免注册登录设备，该参数传&quot;1&quot;</p><p>枚举值：</p><ul><li>0： 项目不包含免注册登录设备</li><li>1： 项目包含免注册登录设备</li></ul><p>默认值：0</p>
   */
  RegisterType?: number
}

/**
 * 会话数据详单（按设备区分）
 */
export interface SessionDeviceDetail {
  /**
   * 设备类型：field或remote
   */
  DeviceType?: string
  /**
   * 起始点位时间，单位：秒
   */
  StartTime?: number
  /**
   * 结束点位时间，单位：秒
   */
  EndTime?: number
  /**
   * 会话ID
   */
  SessionId?: string
  /**
   * 码率，单位：kbps
   */
  Rate?: Array<number | bigint>
  /**
   * 帧率
   */
  Fps?: Array<number | bigint>
  /**
   * 丢包率，单位：%
   */
  Lost?: Array<number>
  /**
   * 网络时延，单位：ms
   */
  NetworkLatency?: Array<number | bigint>
  /**
   * 视频时延，单位：ms
   */
  VideoLatency?: Array<number | bigint>
  /**
   * CPU使用率，单位：%
   */
  CpuUsed?: Array<number>
  /**
   * 内存使用率，单位：%
   */
  MemUsed?: Array<number>
  /**
   * 时间偏移量，单位：秒
   */
  TimeOffset?: Array<number | bigint>
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 设备ID
   */
  DeviceId?: string
  /**
   * sdk版本
   */
  Ver?: string
  /**
   * 模式(p2p/server)
   */
  SdkMode?: string
  /**
   * 解码耗时，单位：ms
   */
  DecodeCost?: Array<number | bigint>
  /**
   * 【已废弃，使用RenderCost】
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  RenderConst?: Array<number | bigint>
  /**
   * 卡顿k100
   */
  K100?: Array<number>
  /**
   * 卡顿k150
   */
  K150?: Array<number>
  /**
   * nack请求数
   */
  NACK?: Array<number | bigint>
  /**
   * 服务端调控码率,单位：kbps
   */
  BitRateEstimate?: Array<number | bigint>
  /**
   * 宽度
   */
  Width?: number
  /**
   * 高度
   */
  Height?: number
  /**
   * 编码耗时，单位：ms
   */
  EncodeCost?: Array<number | bigint>
  /**
   * 采集耗时，单位：ms
   */
  CaptureCost?: Array<number | bigint>
  /**
   * 渲染耗时，单位：ms
   */
  RenderCost?: Array<number | bigint>
  /**
   * 配置宽度
   */
  ConfigWidth?: number
  /**
   * 配置高度
   */
  ConfigHeight?: number
  /**
   * 平均帧间隔
   */
  FrameDelta?: Array<number | bigint>
  /**
   * 最大帧间隔
   */
  MaxFrameDelta?: Array<number | bigint>
  /**
   * 总码率评估,单位：kbps
   */
  TotalBitrateEstimate?: Array<number | bigint>
  /**
   * 帧间隔大于100ms的卡顿时长
   */
  Lag100Duration?: Array<number | bigint>
  /**
   * 帧间隔大于150ms的卡顿时长
   */
  Lag150Duration?: Array<number | bigint>
  /**
   * 是否开启多网：0 单网，1 多网
   */
  MultiMode?: number
  /**
   * 多网卡信息
   */
  MultiNet?: Array<MultiNet>
}

/**
 * GetTotalDuration返回参数结构体
 */
export interface GetTotalDurationResponse {
  /**
   * 语音:min
   */
  Voice?: number
  /**
   * 标清:min
   */
  SD?: number
  /**
   * 高清:min
   */
  HD?: number
  /**
   * 超高清:min
   */
  FHD?: number
  /**
   * 2k:min
   */
  TwoK?: number
  /**
   * 4k:min
   */
  FourK?: number
  /**
   * 在线时长:min
   */
  Online?: number
  /**
   * 多网标清:min
   */
  MultiSD?: number
  /**
   * 多网高清:min
   */
  MultiHD?: number
  /**
   * 多网超高清:min
   */
  MultiFHD?: number
  /**
   * 多网2k:min
   */
  MultiTwoK?: number
  /**
   * 多网4k:min
   */
  MultiFourK?: number
  /**
   * 多网在线时长:min
   */
  MultiOnline?: number
  /**
   * 总抵扣时长:min
   */
  DeductDuration?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDeviceLicense返回参数结构体
 */
export interface GetDeviceLicenseResponse {
  /**
   * 指定设备已经绑定的可用license数量
   */
  AvailableCount?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多网的网卡状态信息
 */
export interface MultiNet {
  /**
   * 网卡序号
   */
  NetId?: number
  /**
   * 网卡IP
   */
  NetIp?: string
  /**
   * 时延，单位ms
   */
  Rtt?: Array<number | bigint>
  /**
   * 丢包率，单位%
   */
  Lost?: Array<number | bigint>
  /**
   * 发送bps，单位kbps
   */
  SendBps?: Array<number | bigint>
  /**
   * 接收bps，单位kbps
   */
  RecvBps?: Array<number | bigint>
}

/**
 * DescribeSessionStatisticsByInterval请求参数结构体
 */
export interface DescribeSessionStatisticsByIntervalRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 统计时间间隔：hour|day|month
   */
  StatisticInterval: string
  /**
   * 设备ID
   */
  DeviceId?: string
  /**
   * 起始时间，单位：秒
   */
  StartTime?: number
  /**
   * 结束时间，单位：秒
   */
  EndTime?: number
}

/**
 * CreateDevice请求参数结构体
 */
export interface CreateDeviceRequest {
  /**
   * 创建设备所归属的项目ID
   */
  ProjectId: string
  /**
   * 创建设备ID，项目内需要唯一，由小写英文字母、数字和下划线构成，长度不超过18
   */
  DeviceId: string
  /**
   * 创建设备名称，长度小于24, 可包含中文、数字、英文字母和下划线
   */
  DeviceName: string
  /**
   * 设备类型，field为现场设备（受控设备），remote为远端设备（操控设备），不填默认为field
   */
  DeviceType: string
  /**
   * 设备认证口令，由大小写英文字母和数字构成，须为16位
   */
  DeviceToken: string
}

/**
 * StopPublishLiveStream返回参数结构体
 */
export interface StopPublishLiveStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSessionStatistics返回参数结构体
 */
export interface DescribeSessionStatisticsResponse {
  /**
   * 会话数量
   */
  SessionNum?: number
  /**
   * 通话时长，单位：分钟
   */
  TotalDuration?: number
  /**
   * 活跃现场设备数
   */
  ActiveFieldDeviceNum?: number
  /**
   * 活跃远端设备数
   */
  ActiveRemoteDeviceNum?: number
  /**
   * 优良会话占比，单位：%
   */
  NotBadSessionRatio?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转推参数，一个任务最多支持10个推流URL。
 */
export interface PublishParams {
  /**
   * 腾讯云直播推流地址url
   */
  PublishUrl: string
  /**
   * 是否是腾讯云CDN，0为转推非腾讯云CDN，1为转推腾讯CDN，不携带该参数默认为1。
   */
  IsTencentUrl: number
}

/**
 * GetDevices返回参数结构体
 */
export interface GetDevicesResponse {
  /**
   * 设备授权列表
   */
  Devices?: Array<Device>
  /**
   * 列表数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BoundLicenses返回参数结构体
 */
export interface BoundLicensesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceSessionDetails请求参数结构体
 */
export interface DescribeDeviceSessionDetailsRequest {
  /**
   * 会话ID
   */
  SessionId: string
}

/**
 * GetLicenses返回参数结构体
 */
export interface GetLicensesResponse {
  /**
   * license列表
   */
  Licenses?: Array<License>
  /**
   * license列表项数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备信息
 */
export interface DeviceInfo {
  /**
   * 设备ID
   */
  DeviceId: string
  /**
   * 设备名称
   */
  DeviceName: string
  /**
   * 设备状态，offline为离线，ready为在线准备，connected为会话中
   */
  DeviceStatus: string
  /**
   * 设备类型，field为现场设备（受控方），remote为远端设备（操控方）
   */
  DeviceType: string
  /**
   * 设备信息最近修改时间
   */
  ModifyTime: string
  /**
   * 设备状态最近更新时间
   */
  LastReportTime: string
  /**
   * 设备所属项目Id
   */
  ProjectId: string
}

/**
 * 会话时长明细
 */
export interface DurationDetails {
  /**
   * 会话时间
   */
  SessionTime?: string
  /**
   * 语音:min
   */
  Voice?: number
  /**
   * 标清:min
   */
  SD?: number
  /**
   * 高清:min
   */
  HD?: number
  /**
   * 超高清:min
   */
  FHD?: number
  /**
   * 2k:min
   */
  TwoK?: number
  /**
   * 4k:min
   */
  FourK?: number
  /**
   * 在线时长:min
   */
  Online?: number
  /**
   * 多网标清:min
   */
  MultiSD?: number
  /**
   * 多网高清:min
   */
  MultiHD?: number
  /**
   * 多网超高清:min
   */
  MultiFHD?: number
  /**
   * 多网2k:min
   */
  MultiTwoK?: number
  /**
   * 多网4k:min
   */
  MultiFourK?: number
  /**
   * 多网在线时长:min
   */
  MultiOnline?: number
  /**
   * 抵扣时长:min
   */
  DeductDuration?: number
}

/**
 * DescribeDeviceSessionList请求参数结构体
 */
export interface DescribeDeviceSessionListRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 页码，从1开始
   */
  PageNumber: number
  /**
   * 每页个数
   */
  PageSize: number
  /**
   * 设备ID
   */
  DeviceId?: string
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
 * ModifyCallbackUrl请求参数结构体
 */
export interface ModifyCallbackUrlRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 回调URL
   */
  CallbackUrl: string
  /**
   * 回调签名密钥，用于校验回调信息的完整性
   */
  SignKey?: string
}

/**
 * 原视频流参数列表
 */
export interface VideoList {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 设备id
   */
  DeviceId: string
  /**
   * 流id
   */
  VideoStreamId: number
  /**
   * 子画面在输出时的宽度，单位为像素值，不填默认为0。
   */
  Width: number
  /**
   * 子画面在输出时的高度，单位为像素值，不填默认为0。
   */
  Height: number
}

/**
 * GetDevices请求参数结构体
 */
export interface GetDevicesRequest {
  /**
   * 页码
   */
  PageNum: number
  /**
   * 页面数量
   */
  PageSize: number
  /**
   * 项目 ID
   */
  ProjectId?: string
  /**
   * 设备ID
   */
  DeviceId?: string
}

/**
 * GetTotalDuration请求参数结构体
 */
export interface GetTotalDurationRequest {
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 设备id，不传查全部
   */
  DeviceId?: string
}

/**
 * DescribeDeviceSessionList返回参数结构体
 */
export interface DescribeDeviceSessionListResponse {
  /**
   * 总个数
   */
  Total?: number
  /**
   * 会话列表
   */
  DeviceSessionList?: Array<SessionInfo>
  /**
   * 本页数量
   */
  Num?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转推视频参数
 */
export interface VideoParams {
  /**
   * 输出流宽，音视频输出时必填。取值范围[0,1920]，单位为像素值。
   */
  Width: number
  /**
   * 输出流高，音视频输出时必填。取值范围[0,1080]，单位为像素值。
   */
  Height: number
  /**
   * 输出流帧率，音视频输出时必填。取值范围[1,60]，表示混流的输出帧率可选范围为1到60fps。
   */
  Fps: number
  /**
   * 输出流码率，音视频输出时必填。取值范围[1,10000]，单位为kbps。
   */
  BitRate: number
  /**
   * 输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。
   */
  Gop: number
  /**
   * 转推视频流列表
   */
  VideoList: Array<VideoList>
}

/**
 * 单位时间间隔的会话统计数据
 */
export interface SessionIntervalStatistic {
  /**
   * 活跃现场设备数
   */
  ActiveFieldDeviceNum: number
  /**
   * 活跃远端设备数
   */
  ActiveRemoteDeviceNum: number
  /**
   * 会话数量
   */
  SessionNum: number
  /**
   * 会话时长，单位：分钟
   */
  TotalDuration: number
  /**
   * 时间戳，单位：秒
   */
  StartTime: number
  /**
   * 时间戳，单位：秒
   */
  EndTime: number
  /**
   * 优良会话占比，单位：%
   */
  NotBadSessionRatio: number
}

/**
 * ModifyCallbackUrl返回参数结构体
 */
export interface ModifyCallbackUrlResponse {
  /**
   * 响应码，0：成功，其他：失败
   */
  Code?: number
  /**
   * 响应消息，ok:成功，其他：失败
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDeviceLicense请求参数结构体
 */
export interface GetDeviceLicenseRequest {
  /**
   * 目标设备所属项目ID
   */
  ProjectId: string
  /**
   * 目标设备ID
   */
  DeviceId: string
}

/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
  /**
   * 项目名称，长度不超过24个字符
   */
  ProjectName: string
  /**
   * 项目描述，长度不超过120个字符，不填默认为空
   */
  ProjectDescription?: string
  /**
   * 权限模式，black为黑名单，white为白名单，不填默认为black
   */
  PolicyMode?: string
}
