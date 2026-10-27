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
 * AssociateSecurityGroup返回参数结构体
 */
export interface AssociateSecurityGroupResponse {
  /**
   * 关联成功的桌面列表
   */
  SuccessSet?: Array<string>
  /**
   * 关联失败的桌面列表
   */
  FailureSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateSecurityGroup请求参数结构体
 */
export type AssociateSecurityGroupRequest = null

/**
 * RenewInstances请求参数结构体
 */
export interface RenewInstancesRequest {
  /**
   * 一个或多个待操作的实例ID。每次请求批量实例的上限为50。
   */
  InstanceIds: Array<string>
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。
   */
  ChargePrepaid?: ChargePrepaid
}

/**
 * RemoveDataDisks返回参数结构体
 */
export interface RemoveDataDisksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesBindStatus返回参数结构体
 */
export interface DescribeInstancesBindStatusResponse {
  /**
   * <p>桌面实例状态列表</p>
   */
  InstanceBindStatusList?: Array<BindStatusInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstances请求参数结构体
 */
export interface CreateInstancesRequest {
  /**
   * 实例类型。<li>  S3L.MEDIUM4: 云桌面-标准S3_2核4G </li><li> S3L.LARGE8: 云桌面-标准S3_4核8G </li><li> S3L.LARGE16: 云桌面-标准S3_4核16G </li><li> S3L.2XLARGE16: 云桌面-标准S3_8核16G </li><li> S1L.LARGE8：云桌面-标准S1_4核8G </li><li> S1L.LARGE16：标准S1_4核16G </li><li> S2L.2XLARGE16：标准S2_8核16G </li><li> G1L.LARGE16：图形G1_4核16G  </li><li> G1L.2XLARGE32：图形G1_8核32G </li><li> G1L.4XLARGE64：图形G1_16核64G </li><li> G2L.LARGE24: 云桌面-图形G2_6核24G </li><li> G2L.3XLARGE58: 云桌面-图形G2_14核58G </li><li> G2L.3XLARGE44: 云桌面-图形G2_12核44G </li><li> G3L.LARGE16: 云桌面-图形G3_4核16G </li><li> G3L.5XMEDIUM40: 云桌面-图形G3_10核40G </li><li> G3L.5XLARGE80: 云桌面-图形G3_20核80G </li><li> G4L.5XMEDIUM40: 云桌面-图形G4_10核40G </li><li> G4L.11XMEDIUM80: 云桌面-图形G4_22核80G </li><li> G4L.11XLARGE160: 云桌面-图形G4_44核160G </li><li> G5L.5XMEDIUM40: 云桌面-图形G5_10核40G </li><li> G5L.5XLARGE80: 云桌面-图形G5_22核80G </li><li> G5L.21XMEDIUM160: 云桌面-图形G5_42核160G </li><li> G5L.21XLARGE320: 云桌面-图形G5_84核320G </li>
   */
  InstanceType: string
  /**
   * 系统盘信息
   */
  SystemDisk: Disk
  /**
   * 镜像ID
   */
  ImageId: string
  /**
   * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。
   */
  VirtualPrivateCloud: VirtualPrivateCloud
  /**
   * 实例显示名称。
<li> 如果该字段为空，则采用默认格式：云桌面型号+月日+三位随机数+镜像ID。</li>
<li> 购买多台实例，如果指定模式串{R:x}，表示生成数字[x, x+n-1]，其中n表示购买实例的数量，例如server_{R:3}，购买1台时，实例显示名称为server_3；购买2台时，实例显示名称分别为server_3，server_4。支持指定多个模式串{R:x}。</li>
<li> 购买多台实例，如果不指定模式串，则在实例显示名称添加后缀1、2...n，其中n表示购买实例的数量，例如server_，购买2台时，实例显示名称分别为server_1，server_2。</li>
<li> 最多支持60个字符（包含模式串）。</li>
   */
  InstanceName?: string
  /**
   * 购买实例数量。取值范围[1,50]。默认为1
   */
  InstanceCount?: number
  /**
   * 数据盘信息。目前只支持一块数据盘。
   */
  DataDisks?: Array<Disk>
  /**
   * 实例计费类型。
<li> PREPAID：预付费，即包年包月</li>
<li> POSTPAID_BY_HOUR：按小时后付费</li>
默认为PREPAID
   */
  ChargeType?: string
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  ChargePrepaid?: ChargePrepaid
  /**
   * 是否只预检此次请求。
<li> true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和库存。
如果检查通过，则返回的错误码为DryRunOperation；如果返回其他错误码表示检查没有通过；</li>
<li> false（默认）：发送正常请求，通过检查后直接创建实例</li>
   */
  DryRun?: boolean
  /**
   * 允许绑定用户前的匿名访问。默认值：false。
   */
  AnonymousAccess?: boolean
  /**
   * 关联的安全组ID列表
   */
  SecurityGroups?: Array<string>
  /**
   * 桌面池ID
   */
  PoolId?: string
  /**
   * 域名管控策略ID
   */
  DomainControlPolicies?: Array<string>
  /**
   * 标签，最多10个
   */
  Tags?: Array<Tag>
  /**
   * 可用区
   */
  Zone?: string
}

/**
 * ModifyImageAttrs返回参数结构体
 */
export interface ModifyImageAttrsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopCommandTasks请求参数结构体
 */
export interface StopCommandTasksRequest {
  /**
   * <p>删除命令任务条件<br>Filter.name 目前支持 CommandId</p>
   */
  Filters: Array<Filter>
}

/**
 * DescribeInstanceFetchMsg请求参数结构体
 */
export interface DescribeInstanceFetchMsgRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 绑定实例的UserID，为后续多会话预留参数
   */
  UserId?: string
  /**
   * 拉取桌面title，用户可自行定义，默认为云桌面实例名称
   */
  DesktopName?: string
  /**
   * 是否抢占桌面，即桌面使用过程中，抢占登录。
true：抢占登录
false：非抢占登录
默认为抢占登录
   */
  Force?: boolean
  /**
   * 是否内网登录桌面
   */
  IsInternal?: boolean
}

/**
 * 域名控制策略详情
 */
export interface DomainControlDetail {
  /**
   * 配置域名
   */
  Domain: string
  /**
   * 此参数必填，新版本无异议，请求包和回包强制填写空字符串,做校验
   */
  Address: string
  /**
   * 规则描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * DescribeInstanceLoginMsg请求参数结构体
 */
export interface DescribeInstanceLoginMsgRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 绑定实例的UserID，为后续多会话预留参数
   */
  UserId?: string
  /**
   * 拉取桌面title，用户可自行定义，默认为云桌面实例名称
   */
  DesktopName?: string
  /**
   * 是否抢占桌面，即桌面使用过程中，抢占登录。
true：抢占登录
false：非抢占登录
默认为抢占登录
   */
  Force?: boolean
  /**
   * 是否内网方式
   */
  IsInternal?: boolean
}

/**
 * CreateDomainControlPolicy返回参数结构体
 */
export interface CreateDomainControlPolicyResponse {
  /**
   * <p>策略唯一ID</p>
   */
  PolicyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteImages请求参数结构体
 */
export interface DeleteImagesRequest {
  /**
   * <p>准备删除的镜像Id列表</p>
   */
  ImageIds: Array<string>
}

/**
 * DescribePolicyDetail返回参数结构体
 */
export interface DescribePolicyDetailResponse {
  /**
   * <p>策略详细信息列表</p>
   */
  PolicyList?: Array<PolicyDetail>
  /**
   * <p>当前查询到的策略总数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 返回查询到的所有实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<InstanceInfo>
  /**
   * 返回当前查询到的实例总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCommandTasks请求参数结构体
 */
export interface DeleteCommandTasksRequest {
  /**
   * <p>删除命令任务条件<br>Filter.name 目前支持 CommandId</p>
   */
  Filters: Array<Filter>
}

/**
 * 创建策略详细信息
 */
export interface PolicyInfo {
  /**
   * 策略类型。取值：
1：文件重定向策略
2：剪切板重定向策略
3：外设重定向策略
4：水印策略
   */
  PolicyType: number
  /**
   * 策略值。取值：
PolicyType对应个子取值范围：
	①：PolicyType为1-文件重定向策略	
					1：读写
					2：只读
					3：禁止读写
	②：剪切板重定向策略
					1：开启云桌面到客户端
					2：开启客户端到云桌面
					3：双向开启
					4：禁用
	③：外设重定向策略
					1：允许usb重定向
					2：允许端口重定向
					3：允许usb和端口重定向
					4：禁用
	④：水印策略
					4:   当前时间，居中策略
					10: 当前时间，平铺策略
					15:  云桌面ID， 居中策略
                                        16:  云桌面ID+当前时间， 居中策略
                                        17:  云桌面ID， 平铺策略
                                        18:  云桌面ID+当前时间， 平铺策略
   */
  PolicyValue: number
}

/**
 * DeleteDomainControlPolicy请求参数结构体
 */
export interface DeleteDomainControlPolicyRequest {
  /**
   * 策略唯一ID
   */
  PolicyId?: string
}

/**
 * DisassociateSecurityGroup请求参数结构体
 */
export type DisassociateSecurityGroupRequest = null

/**
 * RemoveDataDisks请求参数结构体
 */
export interface RemoveDataDisksRequest {
  /**
   * 实例 ID
   */
  InstanceId?: string
  /**
   * 数据盘磁盘 ID，可以通过 DescribeInstances 查下实例数据盘
   */
  DataDiskIds?: Array<string>
}

/**
 * StopSession请求参数结构体
 */
export interface StopSessionRequest {
  /**
   * <p>机器所在区域</p>
   */
  InstanceRegion: string
  /**
   * <p>机器hostname</p>
   */
  HostName: string
  /**
   * <p>IsDisconnect为true，表示断开当前会话<br>IsDisconnect为false，表示注销当前会话</p>
   */
  IsDisconnect: boolean
  /**
   * <p>选填，为多会话预留字段</p>
   */
  UserId?: string
}

/**
 * DescribePolicyDetail请求参数结构体
 */
export interface DescribePolicyDetailRequest {
  /**
   * <p>拉取页号</p>
   */
  PageNumber?: number
  /**
   * <p>每页最大显示个数，最大值不超过100</p>
   */
  PageSize?: number
  /**
   * <p>查询条件（暂时无效，保留字段）</p>
   */
  Filters?: Array<Filter>
}

/**
 * DescribeSecurityGroups返回参数结构体
 */
export interface DescribeSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInvocationDetail返回参数结构体
 */
export interface DescribeInvocationDetailResponse {
  /**
   * <p>实例上任务执行的详细情况。</p>
   */
  Detail: Invocation
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshots请求参数结构体
 */
export interface DescribeSnapshotsRequest {
  /**
   * <p>快照所在的地域</p>
   */
  SnapshotRegion: string
  /**
   * <p>页号</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小，最大100，默认20</p>
   */
  PageSize?: number
  /**
   * <p>检索条件，Filter的name取值：<br>InstanceId：实例ID，返回当前实例挂载的云硬盘关联的快照信息<br>DiskId：云硬盘ID，返回当前云硬盘关联的快照信息</p>
   */
  Filters?: Array<Filter>
}

/**
 * DescribeInstanceRegionDistribution请求参数结构体
 */
export interface DescribeInstanceRegionDistributionRequest {
  /**
   * <p>查询区域列表</p>
   */
  Regions?: Array<string>
  /**
   * <p>查询实例类型列表</p>
   */
  Types?: Array<string>
  /**
   * <p>查询用户拥有的云桌面地域分布信息</p>
   */
  UserId?: string
}

/**
 * 监控数据
 */
export interface DataPoint {
  /**
   * <p>实例对象维度组合</p>
   */
  Dimensions?: Array<Dimension>
  /**
   * <p>时间戳数组</p>
   */
  Timestamps?: Array<number>
  /**
   * <p>监控值数组，与Timestamps一一对应</p>
   */
  Values?: Array<number>
  /**
   * <p>MaxValues 最大值数组，与Timestamps一一对应</p>
   */
  MaxValues?: Array<number>
  /**
   * <p>MinValues 最小值数组，与Timestamps一一对应</p>
   */
  MinValues?: Array<number>
  /**
   * <p>AvgValues 平均值数组，与Timestamps一一对应</p>
   */
  AvgValues?: Array<number>
}

/**
 * ResetInstances返回参数结构体
 */
export interface ResetInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesStatus返回参数结构体
 */
export interface DescribeInstancesStatusResponse {
  /**
   * <p>实例状态列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStatusList?: Array<InstanceStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeImages返回参数结构体
 */
export interface DescribeImagesResponse {
  /**
   * <p>返回查询到的所有镜像信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Images: Array<ImageInfo>
  /**
   * <p>返回当前查询到的镜像总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 桌面实例挂载磁盘信息
 */
export interface Disk {
  /**
   * <p>磁盘类型：<br>CLOUD_SSD：SSD云硬盘<br>CLOUD_PREMIUM：高性能云硬盘</p>
   */
  DiskType: string
  /**
   * <p>磁盘大小（单位G）<br>系统盘最小值50，最大值500<br>数据盘最小值10，最大值32000。最小调整步长为10G</p>
   */
  DiskSize: number
  /**
   * <p>磁盘id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskId?: string
}

/**
 * BindInstances返回参数结构体
 */
export interface BindInstancesResponse {
  /**
   * <p>待分配桌面状态</p>
   */
  BindInfoList?: Array<BindStatusInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstances返回参数结构体
 */
export interface CreateInstancesResponse {
  /**
   * 当通过本接口来创建实例时会返回该参数，表示一个或多个实例ID。返回实例ID列表并不代表实例创建成功。通过进一步查询返回的InstancesSet中对应实例的ID的状态来判断创建是否完成；如果实例状态由“准备中”变为“正在运行”，则为创建成功。
   */
  InstanceIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartInstances返回参数结构体
 */
export interface StartInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancesType返回参数结构体
 */
export interface ModifyInstancesTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 桌面使用时长详情
 */
export interface Usage {
  /**
   * 桌面实例 ID
   */
  InstanceId?: string
  /**
   * 桌面名称
   */
  Name?: string
  /**
   * 桌面当前状态
   */
  Status?: string
  /**
   * 桌面绑定的用户名，若未绑定，为空
   */
  UserName?: string
  /**
   * 桌面计费类型
   */
  ChargeType?: string
  /**
   * 桌面类型
   */
  InstanceType?: string
  /**
   * 桌面操作系统
   */
  OsName?: string
  /**
   * 桌面使用时长，h:m:s
   */
  ActiveTime?: string
  /**
   * 桌面空闲时长，h:m:s
   */
  IdleTime?: string
  /**
   * 是否匿名访问
   */
  AnonymousAccess?: boolean
}

/**
 * CreateDataDisk请求参数结构体
 */
export interface CreateDataDiskRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 数据盘类型，有效值CLOUD_SSD/CLOUD_PREMIUM
   */
  DiskType: string
  /**
   * 数据盘大小
   */
  DiskSize: number
  /**
   * 硬盘快照id
   */
  SnapShotId?: string
}

/**
 * DeleteDomainControlPolicy返回参数结构体
 */
export interface DeleteDomainControlPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopInstances请求参数结构体
 */
export interface StopInstancesRequest {
  /**
   * 需要重启的实例id列表
   */
  InstanceIds: Array<string>
  /**
   * 实例所在区域，保证传入的列表在统一区域，否则报错
   */
  InstanceRegion: string
  /**
   * 是否在正常重启失败后选择强制重启实例。取值范围：
TRUE：表示在正常重启失败后进行强制重启
FALSE：表示在正常重启失败后不进行强制重启

默认取值：FALSE。
   */
  Force?: boolean
}

/**
 * RemovePolicy请求参数结构体
 */
export interface RemovePolicyRequest {
  /**
   * <p>待删除策略id</p>
   */
  PolicyId: string
}

/**
 * CreatePolicy返回参数结构体
 */
export interface CreatePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartInstances请求参数结构体
 */
export interface StartInstancesRequest {
  /**
   * 需要开启的实例id列表
   */
  InstanceIds: Array<string>
  /**
   * 实例所在区域，保证传入的列表再统一区域，否则报错
   */
  InstanceRegion: string
}

/**
 * Tag
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey?: string
  /**
   * 标签值
   */
  TagValue?: string
}

/**
 * DescribeInstanceMonitorData返回参数结构体
 */
export interface DescribeInstanceMonitorDataResponse {
  /**
   * <p>指标名</p>
   */
  MetricName?: string
  /**
   * <p>统计周期</p>
   */
  Period?: number
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
  /**
   * <p>数据点数组</p>
   */
  DataPoints?: Array<DataPoint>
  /**
   * <p>message信息</p>
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesBindStatus请求参数结构体
 */
export interface DescribeInstancesBindStatusRequest {
  /**
   * <p>拉取的桌面id列表</p>
   */
  InstanceIds: Array<string>
  /**
   * <p>实例所在区域</p>
   */
  InstanceRegion?: string
}

/**
 * ModifyInstanceBasicAttribute返回参数结构体
 */
export interface ModifyInstanceBasicAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 磁盘分区数据
 */
export interface Partition {
  /**
   * 磁盘名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 总容量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 使用量,39.31%
注意：此字段可能返回 null，表示取不到有效值。
   */
  Usage?: number
}

/**
 * DescribeInvocations返回参数结构体
 */
export interface DescribeInvocationsResponse {
  /**
   * <p>该实例上的任务列表。不会返回Output字段。</p>
   */
  Invocations: Array<Invocation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceRegionDistribution返回参数结构体
 */
export interface DescribeInstanceRegionDistributionResponse {
  /**
   * <p>各区域实例个数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DistributionInfo?: Array<DistributionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例对象的维度组合
 */
export interface Dimension {
  /**
   * 实例维度名称
   */
  Name?: string
  /**
   * 实例维度值
   */
  Value?: string
}

/**
 * 各地域实例个数信息
 */
export interface DistributionInfo {
  /**
   * <p>地域描述</p>
   */
  Region: string
  /**
   * <p>实例个数</p>
   */
  Count: number
}

/**
 * StopInstances返回参数结构体
 */
export interface StopInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsage请求参数结构体
 */
export interface DescribeUsageRequest {
  /**
   * 查询起始时间，最小不能超过当前时间 90 天前，取 unix 时间戳
   */
  StartTime: number
  /**
   * 查询截止时间，取 unix 时间戳
   */
  EndTime: number
  /**
   * 每页查询信息条数，默认 20，最大 100
   */
  PageSize?: number
  /**
   * 页号，起始页为 1，不填默认为 1
   */
  PageNumber?: number
  /**
   * 查询key，每次查询会返回
   */
  QueryKey?: string
  /**
   * 查询条件，Name可选为：
InstanceId按照实例ID搜索
UserName按照绑定的用户搜索，只取Values的第一个值
ChareType按照计费类型搜索
InstanceType按照实例类型搜索
   */
  Filters?: Array<Filter>
  /**
   * 指定的排序方式，默认不排序
1:使用时间，升序
2:使用时间，降序
3:空闲时间，升序
4:空闲时间，降序
   */
  SortType?: number
}

/**
 * DescribeUsers请求参数结构体
 */
export interface DescribeUsersRequest {
  /**
   * <p>搜索关键字。</p>
   */
  Keyword?: string
  /**
   * <p>页面编号。从1开始</p>
   */
  PageNumber?: number
  /**
   * <p>页面大小。默认20，不超过100。</p>
   */
  PageSize?: number
  /**
   * <p>部门ID。</p>
   */
  DepartmentId?: string
}

/**
 * 云桌面镜像信息
 */
export interface ImageInfo {
  /**
   * <p>镜像id</p>
   */
  ImageID?: string
  /**
   * <p>镜像名称</p>
   */
  ImageName?: string
  /**
   * <p>镜像类型：<br>PUBLIC_IMAGE-公共镜像<br>PRIVATE_IMAGE-自定义镜像<br>TENCENT_OFFICE_IMAGE-腾讯办公镜像</p>
   */
  ImageType?: string
  /**
   * <p>镜像状态：<br>CREATING-创建中<br>NORMAL-正常<br>CREATEFAILED-创建失败<br>USING-使用中<br>SYNCING-同步中<br>IMPORTING-导入中<br>IMPORTFAILED-导入失败<br>INVISIBLE-淘汰的镜像<br>DELETIING-删除中<br>DELETED-删除的</p>
   */
  ImageState?: string
  /**
   * <p>镜像操作系统</p>
   */
  OsName?: string
  /**
   * <p>镜像大小（单位G）</p>
   */
  ImageSize?: number
  /**
   * <p>镜像描述</p>
   */
  Description?: string
  /**
   * <p>镜像所在区域</p>
   */
  Region?: string
  /**
   * <p>内核类型：<br>CPU<br>GPU<br>GPU_A10<br>GPU_RTX6000<br>GPU_2080Ti<br>GPU_3080Ti</p>
   */
  CoreType?: string
  /**
   * <p>cvm侧镜像id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CvmImageId?: string
  /**
   * <p>是否是整机镜像，整机镜像无法用于桌面重置<br>true：整机镜像<br>false: 不是整机镜像</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWhole?: boolean
  /**
   * <p>整机镜像中数据盘大小</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataDiskSize?: number
  /**
   * <p>镜像创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
}

/**
 * 实例属性key--value结构
 */
export interface AttributeInfo {
  /**
   * <p>实例属性名</p>
   */
  Name: string
  /**
   * <p>实例属性值</p>
   */
  Value: string
}

/**
 * 实例执行脚本任务结果详情
 */
export interface InvocationDetail {
  /**
   * 实例 id
   */
  InstanceId?: string
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 实例所在区域，目前支持的区域有：ap-beijing、ap-shanghai、ap-guangzhou、ap-shanghai-adc
   */
  Region?: string
  /**
   * 脚本任务执行状态，取值有：
Running-执行中
Finished-完成
Failed-失败
Stopped-终止
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 实例上任务唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InvokeId?: string
  /**
   * 脚本任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: string
  /**
   * 任务退出码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExitCode?: number
  /**
   * 任务错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCode?: string
  /**
   * 执行任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: string
}

/**
 * DescribeUsage返回参数结构体
 */
export interface DescribeUsageResponse {
  /**
   * 检索出相关使用详情总数
   */
  Total?: number
  /**
   * 查询 key，作为翻页查询入参
   */
  QueryKey?: string
  /**
   * 使用时长详情
   */
  UsageSet?: Array<Usage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopCommandTasks返回参数结构体
 */
export interface StopCommandTasksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceGraphData请求参数结构体
 */
export interface DescribeInstanceGraphDataRequest {
  /**
   * 云桌面实例ID
   */
  InstanceId: string
  /**
   * 查询起始时间
   */
  StartTime: string
  /**
   * 查询结束时间
   */
  EndTime: string
}

/**
 * BindInstances请求参数结构体
 */
export interface BindInstancesRequest {
  /**
   * <p>指定得到云桌面用户id</p>
   */
  UserIds: Array<string>
  /**
   * <p>待分配桌面实例id</p>
   */
  InstanceIds: Array<string>
  /**
   * <p>待分配桌面类型</p>
   */
  InstanceType: string
  /**
   * <p>待分配桌面所在区域</p>
   */
  InstanceRegion?: string
}

/**
 * CreateImage请求参数结构体
 */
export interface CreateImageRequest {
  /**
   * <p>云桌面实例ID。</p>
   */
  InstanceId: string
  /**
   * <p>镜像名称。只支持中文、字母、数字或连接符号&quot;-&quot;，且最多60个字符。<br>默认值：空。</p>
   */
  ImageName: string
  /**
   * <p>镜像的描述信息。支持英文或中文字符，最多60个字符。<br>默认值：空。</p>
   */
  Description?: string
  /**
   * <p>基于实例创建整机镜像时，指定包含在镜像里的数据盘ID。</p>
   */
  DataDiskIds?: Array<string>
}

/**
 * 实例维度组合数组
 */
export interface Instance {
  /**
   * 实例的维度组合

   */
  Dimensions?: Array<Dimension>
}

/**
 * RunCommand请求参数结构体
 */
export interface RunCommandRequest {
  /**
   * <p>云桌面实例ID。</p>
   */
  InstanceId: string
  /**
   * <p>执行的脚本内容，编码方式由ContentEncoding指定。<br>&lt;li&gt;脚本内容在Base64编码后的大小不能超过16 KB。</p>
   */
  Content: string
  /**
   * <p>脚本种类。取值有：&lt;li&gt;PowerShellScript Powershell脚本 &lt;li&gt;BatScript Bat脚本</p>
   */
  Type: string
  /**
   * <p>是否同步等待脚本的执行结果。&lt;li&gt;false为异步模式，通过此接口触发任务的执行，之后异步获取执行结果。默认为false。此为推荐的模式。&lt;li&gt;true为同步等待执行结果，只有当脚本执行时间在4秒之内时，才适合将该参数置为true。如果接口返回时任务尚未执行完毕的话，也需要通过异步接口来获取执行结果。</p>
   */
  WaitUntilDone?: boolean
  /**
   * <p>Content的编码。&lt;li&gt;Base64 Base64编码。 默认为Base64</p>
   */
  ContentEncoding?: string
  /**
   * <p>任务的输出内容是否合并成一个字符串。&lt;li&gt;true表示所有的输出行拼接在一起。默认为true。&lt;li&gt;false表示输出内容通过数组返回,数组的每一个元素为一行。</p>
   */
  MergeOutputLines?: boolean
  /**
   * <p>执行任务的用户ID。&lt;li&gt;由SYSTEM身份执行。此场景下不需要指定该字段，这是默认情况。&lt;li&gt;需要以绑定到实例的用户执行任务，通过该字段指定用户ID。 &lt;li&gt;匿名访问，需要以实际登录系统的用户执行的场景，该字段填实例ID。</p>
   */
  RunAs?: string
  /**
   * <p>任务是否为前台运行。仅在RunAs场景下有效。仅当任务会呼起图形界面时有意义。&lt;li&gt;true表示用户可以看到图形窗口。&lt;li&gt;false表示图形窗口不可见。默认为false。</p>
   */
  RunForeground?: boolean
}

/**
 * 快照信息
 */
export interface SnapshotInfo {
  /**
   * <p>快照唯一ID</p>
   */
  SnapshotId: string
  /**
   * <p>快照对应的云硬盘ID</p>
   */
  DiskId: string
  /**
   * <p>快照状态，取值如下：<br>NORMAL：正常<br>CREATING：创建中<br>ROLLBACKING：回滚中<br>COPYING_FROM_REMOTE：跨地域复制中<br>CHECKING_COPIED：复制校验中<br>TORECYCLE：待回收。</p>
   */
  SnapshotState: string
  /**
   * <p>创建此快照的云硬盘类型。取值范围：<br>SYSTEM_DISK：系统盘<br>DATA_DISK：数据盘。</p>
   */
  DiskUsage: string
  /**
   * <p>快照创建的时间</p>
   */
  CreateTime: string
  /**
   * <p>快照到期时间。如果快照为永久保留，此字段为空。</p>
   */
  DeadlineTime: string
  /**
   * <p>快照创建进度百分比，快照创建成功后此字段恒为100。</p>
   */
  Percent: number
  /**
   * <p>是否为永久快照。取值范围：<br>true：永久快照<br>false：非永久快照。</p>
   */
  IsPermanent: boolean
  /**
   * <p>快照创建方式，取值:<br>ManualSnapshot：手动创建<br>AutoSnapshot：快照策略自动创建</p>
   */
  CreateType: string
  /**
   * <p>上一次快照回滚完成时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastRollbackTime: string
  /**
   * <p>上一次快照回滚状态，取值：<br>成功：SUCCESS<br>失败：FAILED</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastRollbackState: string
}

/**
 * ModifyDiskConfiguration返回参数结构体
 */
export interface ModifyDiskConfigurationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCommandTasks返回参数结构体
 */
export interface DescribeCommandTasksResponse {
  /**
   * <p>拉取任务详情数</p>
   */
  Total?: number
  /**
   * <p>任务描述</p>
   */
  CommandDetails?: Array<CommandDetail>
  /**
   * <p>任务状态，RUNNING -执行中；FINISHED-执行完成； STOPPED-终止任务</p>
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopSession返回参数结构体
 */
export interface StopSessionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancesVpc请求参数结构体
 */
export interface ModifyInstancesVpcRequest {
  /**
   * <p>实例ID数组</p>
   */
  InstanceIds: Array<string>
  /**
   * <p>私有网络ID</p>
   */
  VpcId: string
  /**
   * <p>子网ID</p>
   */
  SubnetId: string
  /**
   * <p>租户vpc的dns</p><p>参数格式：“189.0.01”</p>
   */
  DnsServerSet?: Array<string>
}

/**
 * CreateImage返回参数结构体
 */
export interface CreateImageResponse {
  /**
   * <p>镜像ID。</p>
   */
  ImageId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务执行的标准输出。
 */
export interface InvocationOutput {
  /**
   * <p>任务的标准输出。</p>
   */
  Lines: Array<string>
  /**
   * <p>本次返回的输出第一行对应的索引编号。</p>
   */
  LinesOffset: number
  /**
   * <p>本次返回的输出的行数。</p>
   */
  LinesNum: number
  /**
   * <p>输出的编码方式：<br>&lt;li&gt;PlainText 未经过Base64编码。</p>
   */
  Encoding: string
  /**
   * <p>当前有效的输出起始编号，从0开始。输出过多，会冲掉旧的输出。</p>
   */
  AllLinesOffset: number
  /**
   * <p>当前有效的标准输出总行数。</p>
   */
  AllLinesNum: number
}

/**
 * ModifyImageAttrs请求参数结构体
 */
export interface ModifyImageAttrsRequest {
  /**
   * <p>镜像id</p>
   */
  ImageId: string
  /**
   * <p>支持修改的属性列表为：{ImageName}</p>
   */
  Attrs: Array<AttributeInfo>
}

/**
 * 云桌面实例详细信息
 */
export interface InstanceInfo {
  /**
   * <p>实例id</p>
   */
  InstanceId?: string
  /**
   * <p>实例名称</p>
   */
  Name?: string
  /**
   * <p>实例状态<br>PENDING：表示创建中<br>LAUNCH_FAILED：表示创建失败<br>RUNNING：表示运行中<br>STOPPED：表示关机<br>STARTING：表示开机中<br>STOPPING：表示关机中<br>REBOOTING：表示重启中<br>SHUTDOWN：表示停止待销毁<br>TERMINATING：表示销毁中<br>DELETED：表示资源已经销毁，这个状态是业务层面的状态，cvm如果销毁了，在cvm侧资源已经不存在了<br>FAILED：表示资源创建失败.这个是业务层面的状态<br>ROLLBACKING：表示回滚中<br>USING：表示使用中<br>RESETTING：表示重置中.</p>
   */
  Status?: string
  /**
   * <p>实例拥有者名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * <p>实例</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * <p>实例规格<br>S1.LARGE8：4VCPU 2.5GHZ主频 8G内存 无显卡<br>S1.LARGE16：4VCPU 2.5GHZ主频 16G内存 无显卡<br>S2.2XLARGE16：8VCPU 3.2GHZ主频 16G内存 无显卡<br>G1.LARGE16：4VCPU 2.5GHZ主频 16G内存 1/4 NVIDIA T4<br>G1.2XLARGE32：8VCPU 2.5GHZ主频 32G内存 1/2 NVIDIA T4<br>G1.4XLARGE64：16VCPU 2.5GHZ主频 64G内存 1 NVIDIA T4</p>
   */
  InstanceType?: string
  /**
   * <p>系统盘信息</p>
   */
  SysDisk?: Disk
  /**
   * <p>挂载的数据盘信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataDiskList?: Array<Disk>
  /**
   * <p>桌面实例所在的区域</p>
   */
  Region?: string
  /**
   * <p>桌面计费类型</p>
   */
  ChargeType?: string
  /**
   * <p>自动续费标识。取值范围：<br>NOTIFY_AND_MANUAL_RENEW：表示通知即将过期，但不自动续费<br>NOTIFY_AND_AUTO_RENEW：表示通知即将过期，而且自动续费<br>DISABLE_NOTIFY_AND_MANUAL_RENEW：表示不通知即将过期，也不自动续费。</p><p>注意：后付费模式本项为null</p>
   */
  AutoRenewFlag?: string
  /**
   * <p>桌面创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>桌面过期时间</p>
   */
  ExpiredTime?: string
  /**
   * <p>桌面描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>桌面hostname</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostName?: string
  /**
   * <p>桌面拥有者显示名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName?: string
  /**
   * <p>桌面绑定状态。取值：<br>UNBOUND - 未绑定<br>BINDING - 绑定中<br>BOUND - 绑定</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindStatus?: string
  /**
   * <p>创建桌面的镜像id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageId?: string
  /**
   * <p>用户桌面vpc id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserVpcId?: string
  /**
   * <p>用户桌面子网 id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserSubnetId?: string
  /**
   * <p>用户桌面ip</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserPrivateIp?: string
  /**
   * <p>机器回收站到期时间，只有机器状态为SHUTDOWN该值才有意义</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolatedTime?: string
  /**
   * <p>最近一次状态变更原因, AUTO:被动变更,如欠费,如包月实例到期, MANUAL:主动变更,如主动退还实例，当前只有机器处于ISOLATING、SHUTDOWN、TERMINATING、DELETED该字段有意义</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastStatusChangeReason?: string
  /**
   * <p>机器最近一次操作</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestOperation?: string
  /**
   * <p>机器最近一次操作状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestOperationState?: string
  /**
   * <p>机器最近一次操作请求ReqId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestOperationRequestID?: string
  /**
   * <p>机器操作系统名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsName?: string
  /**
   * <p>实例逻辑set</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetId?: string
  /**
   * <p>应用id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>账号id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * <p>关联的安全组ID列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroups?: Array<string>
  /**
   * <p>预付费实例降配次数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownGradeTimes?: number
  /**
   * <p>桌面绑定的域名策略ID列表，最多五个</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainControlPolicies?: Array<string>
  /**
   * <p>桌面绑定的水印策略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaterMarkPolicy?: string
  /**
   * <p>桌面绑定的录屏策略ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScreenRecordingPolicy?: string
  /**
   * <p>WHITE --- 白名单策略<br>BLACK --- 黑名单策略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainControlPolicyType?: string
  /**
   * <p>桌面绑定的运行管控策略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunControlPolicy?: string
  /**
   * <p>桌面绑定的安装管控策略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstallControlPolicy?: string
  /**
   * <p>桌面是否绑定匿名用户</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnonymousAccess?: boolean
  /**
   * <p>实例绑定的标签</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
}

/**
 * 用户信息
 */
export interface User {
  /**
   * <p>用户ID。</p>
   */
  Id?: string
  /**
   * <p>名字。</p>
   */
  Name?: string
  /**
   * <p>显示名字。</p>
   */
  DisplayName?: string
  /**
   * <p>邮箱。</p>
   */
  Mail?: string
  /**
   * <p>手机号。</p>
   */
  PhoneNum?: string
  /**
   * <p>状态。<br>ACTIVE:启用<br>PENDING_ACTIVATE:待激活<br>PENDING_ONBOARD:待启用<br>SUSPENDED:已停用<br>INACTIVE:已离职<br>PASSWORD_RESET:重置密码<br>LOCKED_OUT:锁定</p>
   */
  Status?: string
  /**
   * <p>部门ID。</p>
   */
  DepartmentId?: string
  /**
   * <p>策略ID。</p>
   */
  StrategyId?: string
  /**
   * <p>策略名称。</p>
   */
  StrategyName?: string
  /**
   * <p>当前用户是否绑定桌面，true：绑定，false：未绑定任何桌面</p>
   */
  BindStatus?: boolean
}

/**
 * 实例状态
 */
export interface InstanceStatus {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例状态
PENDING：表示创建中
LAUNCH_FAILED：表示创建失败
RUNNING：表示运行中
STOPPED：表示关机
STARTING：表示开机中
STOPPING：表示关机中
REBOOTING：表示重启中
SHUTDOWN：表示停止待销毁
TERMINATING：表示销毁中
DELETED：表示资源已经销毁，这个状态是业务层面的状态，cvm如果销毁了，在cvm测资源已经不存在了
FAILED：表示资源创建失败.这个是业务层面的状态
ROLLBACKING：表示机器正在回滚中
RESETTING：表示机器正在重置中
USING：表示机器正在使用中
   */
  Status?: string
  /**
   * 只有在Status为RUNNING时候，当前值才有意义
取值范围：
0:Unknown
1:Connected 
2:Disconnected 
3:Terminated
4:PreparingSession
5:Active
6:Reconnecting
7:NonBrokeredSession
8:Other
9:Pending
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionState?: number
  /**
   * 此字段只有在Status为USING时，才有效。
字段意义：表示桌面当前session空闲时间（客户没有鼠标，键盘等操作），单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdleSeconds?: number
  /**
   * 当前状态改变的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusChangeTime?: number
  /**
   * 实例最近一次操作类型
   */
  LatestOperation?: string
  /**
   * 实例最近一次操作状态
   */
  LatestOperationState?: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 拉取页号
   */
  PageNumber: number
  /**
   * 每页拉取个数
   */
  PageSize: number
  /**
   * Name取值范围："InstanceId"      按照云桌面ID搜索，云桌面ID示例：cdi-l0dfy594htvbn37"Name"     按照云桌面名称搜索 "Region"     按照云桌面所在地域搜索，目前云桌面所支持的地域：        ap-beijing：北京        ap-shanghai：上海        ap-guangzhou：广州        ap-shanghai-adc：上海自动驾驶云"Type"    按照云桌面类型搜索，类型取值：        S3L.MEDIUM4：云桌面-标准S3_2核4G        S3L.LARGE8：云桌面-标准S3_4核8G        S3L.LARGE16：云桌面-标准S3_4核16G        S3L.2XLARGE16：云桌面-标准S3_8核16G        S1L.LARGE8：云桌面-标准S1_4核8G        S1L.LARGE16：云桌面-标准S1_4核16G        S2L.2XLARGE16：云桌面-标准S2_8核16G        G1L.LARGE16：云桌面-图形G1_4核16G        G1L.2XLARGE32：云桌面-图形G1_8核32G        G1L.4XLARGE64：云桌面-图形G1_16核64G        G2L.LARGE24：云桌面-图形G2_6核24G        G2L.3XLARGE58：云桌面-图形G2_14核58G	        G2L.3XLARGE44：云桌面-图形G2_12核44G         G3L.LARGE16：云桌面-图形G3_4核16G	        G3L.5XMEDIUM40：云桌面-图形G3_10核40G	        G3L.5XLARGE80：云桌面-图形G3_20核80G        G4L.5XMEDIUM40：云桌面-图形G4_10核40G        G4L.11XMEDIUM80：云桌面-图形G4_22核80G        G4L.11XLARGE160：云桌面-图形G4_44核160G        G5L.5XMEDIUM40：云桌面-图形G5_10核40G	        G5L.5XLARGE80：云桌面-图形G5_22核80G        G5L.21XMEDIUM160：云桌面-图形G5_42核160G        G5L.21XLARGE320：云桌面-图形G5_84核320G	"ImageId"    按照镜像ID搜索，镜像ID示例：img-ed892xcd2"ChargeType"    按着计费模式搜索，目前支持的计费模式为：         PREPAID：包年包月        POSTPAID_BY_HOUR：按量计费 "HostName"    按照云桌面机器名称搜索，云桌面机器名示例：l0dfy594htvbn37"Status"    按照桌面状态搜索，云桌面状态：        PENDING：创建中        STARTING：开机中        REBOOTING：重启中        ROLLBACKING：回滚中        RESETTING：重置中        STOPPING：关机中        TERMINATING：销毁中        RUNNING：运行中        USING：使用中        STOPPED：关机        ISOLATING ：隔离中，只返回最近24小时数据        SHUTDOWN：销毁，只返回最近24小时数据        DELETED：销毁和SHUTDOWN意义一致，只返回最近24小时数据        LAUNCH_FAILED：创建失败，只返回最近24小时数据"UserId"    按照绑定的用户ID搜索，用户ID示例: us-6b36f283c302481bb83bsdswdefqdqwerqw"UserVpcId"    按照云桌面所属vpc搜索，VPCID示例: vpc-0ji679xf"UserSubnetId"    按照云桌面所属子网搜索，SubnetID示例: subnet-0ji679xf"UserPrivateIp"    按照云桌面IP搜索"Keyword"    按照云桌面绑定的用户名搜索，Values每次只取第一个值"SecurityGroupId"    按照云桌面关联安全组搜索，Values每次只取第一个值,安全组ID实例：sg-0ji679xf"AssociateSG"    按照可以关联安全组搜索，Values每次只取第一个值,安全组ID实例：sg-0ji679xf"DomainControlPolicyId"    按照云桌面关联域名管控策略搜索，Values每次只取第一个值,安全组ID实例：domain-0ji679xf "AssociateDomainControlPolicy"    按照可以关联域名策略搜索        ①若已有域名策略关联桌面情况：Values每次只取第一个值,安全组ID实例：domain-0ji679xf         ②若新建域名策略关联桌面情况，Values传空"Uin"    外部租户请勿使用"AppId"    外部租户请勿使用"ImageName"    废弃
   */
  Filters?: Array<Filter>
}

/**
 * ModifyDiskConfiguration请求参数结构体
 */
export interface ModifyDiskConfigurationRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>新系统盘配置</p>
   */
  NewSystemDisk?: Disk
  /**
   * <p>新数据盘配置</p>
   */
  NewDataDisks?: Array<Disk>
}

/**
 * DescribeInvocations请求参数结构体
 */
export interface DescribeInvocationsRequest {
  /**
   * <p>云桌面实例ID。</p>
   */
  InstanceId: string
}

/**
 * 查询因子
 */
export interface Filter {
  /**
   * 要匹配的参数名
   */
  Name: string
  /**
   * 要匹配的参数值
   */
  Values: Array<string>
}

/**
 * DescribeUsers返回参数结构体
 */
export interface DescribeUsersResponse {
  /**
   * <p>符合条件的用户个数。</p>
   */
  TotalCount: number
  /**
   * <p>用户列表。</p>
   */
  Users: Array<User>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshots返回参数结构体
 */
export interface DescribeSnapshotsResponse {
  /**
   * <p>当前检索条件可查询到的快照总数</p>
   */
  TotalCount: number
  /**
   * <p>快照明细列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotList: Array<SnapshotInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataDisk返回参数结构体
 */
export interface CreateDataDiskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceGraphData返回参数结构体
 */
export interface DescribeInstanceGraphDataResponse {
  /**
   * 查询起始时间
   */
  StartTime?: string
  /**
   * 查询结束时间
   */
  EndTime?: string
  /**
   * 周期
   */
  Period?: number
  /**
   * 指标名
   */
  MetricName?: string
  /**
   * 实例磁盘数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: Array<Partition>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePolicy返回参数结构体
 */
export interface UpdatePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 预付费模式，即包年包月相关参数。包括购买时长和自动续费逻辑等。
 */
export interface ChargePrepaid {
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12。
   */
  Period: number
  /**
   * 自动续费标识。取值范围：
NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag?: string
}

/**
 * ModifyInstancesVpc返回参数结构体
 */
export interface ModifyInstancesVpcResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInvocationDetail请求参数结构体
 */
export interface DescribeInvocationDetailRequest {
  /**
   * <p>云桌面实例ID。</p>
   */
  InstanceId: string
  /**
   * <p>任务ID。</p>
   */
  InvokeId: string
  /**
   * <p>需要返回的任务输出行号起始索引。</p>
   */
  OutputLinesOffset?: number
  /**
   * <p>需要返回的任务输出行数。</p>
   */
  OutputLinesLimit?: number
  /**
   * <p>任务的输出内容是否合并成一个字符串。默认为true。</p>
   */
  MergeOutputLines?: boolean
}

/**
 * ResetInstances请求参数结构体
 */
export interface ResetInstancesRequest {
  /**
   * 需要重置的实例id列表
   */
  InstanceIds: Array<string>
  /**
   * 重置的目标镜像id
   */
  ImageId: string
  /**
   * 重置实例的区域
   */
  InstanceRegion: string
  /**
   * 是否解绑机器原有绑定关系
   */
  IsUnbind: boolean
}

/**
 * CreatePolicy请求参数结构体
 */
export interface CreatePolicyRequest {
  /**
   * <p>策略名称</p>
   */
  Name: string
  /**
   * <p>策略详情</p>
   */
  PolicyInfoList: Array<PolicyInfo>
  /**
   * <p>策略描述</p>
   */
  Description?: string
  /**
   * <p>策略作用的用户id</p>
   */
  UserIds?: Array<string>
}

/**
 * 策略详细信息
 */
export interface PolicyDetail {
  /**
   * <p>策略id</p>
   */
  PolicyId: string
  /**
   * <p>策略名称</p>
   */
  PolicyName: string
  /**
   * <p>策略描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * <p>策略作用用户id列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserIds: Array<string>
  /**
   * <p>策略的租户uin</p>
   */
  Uin: string
  /**
   * <p>文件重定向策略id。取值范围：<br>1：读写<br>2：只读<br>3：禁止读写</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilePolicyId: number
  /**
   * <p>剪切板重定向策略id。取值范围：<br>1：开启云桌面到客户端<br>2：开启客户端到云桌面<br>3：双向开启<br>4：禁用</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClipPolicyId: number
  /**
   * <p>外设重定向策略id。取值范围：<br>1：允许usb重定向<br>2：允许端口重定向<br>3：允许usb和端口重定向<br>4：禁用</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DrivePolicyId: number
  /**
   * <p>水印重定向策略id。取值范围（离散值）：<br>4:   当前时间，居中策略<br>10: 当前时间，平铺策略<br>15:  云桌面ID， 居中策略<br>16:  云桌面ID+当前时间， 居中策略<br>17:  云桌面ID， 平铺策略<br>18:  云桌面ID+当前时间， 平铺策略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaterMarkPolicyId: number
  /**
   * <p>是否是默认策略</p>
   */
  IsDefault: boolean
  /**
   * <p>注意：默认策略的当前值无效</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalUser: number
}

/**
 * 绑定关系
 */
export interface BindInfo {
  /**
   * <p>实例绑定的用户ID</p>
   */
  UserId: string
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
}

/**
 * DisassociateSecurityGroup返回参数结构体
 */
export interface DisassociateSecurityGroupResponse {
  /**
   * 解关联失败的云桌面列表
   */
  FailureSet?: Array<string>
  /**
   * 解关联成功的云桌面列表
   */
  SuccessSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesStatus请求参数结构体
 */
export interface DescribeInstancesStatusRequest {
  /**
   * <p>查询的实例id列表</p>
   */
  InstanceIds: Array<string>
}

/**
 * TerminateInstances请求参数结构体
 */
export interface TerminateInstancesRequest {
  /**
   * <p>一个或多个待操作的实例ID。每次请求批量实例的上限为10。</p>
   */
  InstanceIds: Array<string>
  /**
   * <p>是否立即销毁实例。默认false。 立即销毁的实例不会进入隔离期。</p>
   */
  DestroyImmediately?: boolean
}

/**
 * DescribeInstanceMonitorData请求参数结构体
 */
export interface DescribeInstanceMonitorDataRequest {
  /**
   * <p>实例维度组合数组</p>
   */
  Instances: Array<Instance>
  /**
   * <p>命名空间。如QCE/CVM、QCE/BLOCK_STORAGE等</p>
   */
  NameSpace: string
  /**
   * <p>指标名</p>
   */
  MetricName: string
  /**
   * <p>统计周期(时间粒度), 单位s。</p>
   */
  Period?: number
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
  /**
   * <p>多种统计方式数据。avg, max, min (1,2,4)可以自由组合</p>
   */
  SpecifyStatistics?: number
}

/**
 * 桌面实例绑定状态详情
 */
export interface BindStatusInfo {
  /**
   * <p>桌面实例id</p>
   */
  InstanceId: string
  /**
   * <p>实例的绑定状态。取值：<br>UNBOUND - 未绑定<br>BINDING - 绑定中<br>BOUND - 绑定<br>UNBINDING-解绑中</p>
   */
  BindStatus: string
  /**
   * <p>绑定的用户id【BOUND状态不允许为空】</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId: string
  /**
   * <p>绑定用户名称【BOUND状态不允许为空】</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName: string
  /**
   * <p>绑定用户显示名称【BOUND状态不允许为空】</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName: string
}

/**
 * 脚本执行情况。
 */
export interface Invocation {
  /**
   * <p>脚本执行ID。</p>
   */
  InvokeId?: string
  /**
   * <p>运行状态。<li> Running：正在执行</li> <li>Finished：已经完成</li> <li>Failed：失败</li>  <li> Stopped：已停止</li></p>
   */
  Status?: string
  /**
   * <p>任务输出。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: InvocationOutput
  /**
   * <p>任务失败时的错误码。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCode?: string
  /**
   * <p>任务失败时的错误信息描述。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: string
  /**
   * <p>任务退出状态码</p>
   */
  ExitCode?: number
}

/**
 * DeleteImages返回参数结构体
 */
export interface DeleteImagesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopInvocation请求参数结构体
 */
export interface StopInvocationRequest {
  /**
   * <p>云桌面实例ID。</p>
   */
  InstanceId: string
  /**
   * <p>任务ID。</p>
   */
  InvokeId: string
}

/**
 * DescribeSecurityGroups请求参数结构体
 */
export interface DescribeSecurityGroupsRequest {
  /**
   * <p>页号，从1开始</p>
   */
  PageNumber?: number
  /**
   * <p>每页最大展示数量，默认20，最大100</p>
   */
  PageSize?: number
  /**
   * <p>地域</p>
   */
  SecurityGroupRegion?: string
}

/**
 * ModifyInstanceBasicAttribute请求参数结构体
 */
export interface ModifyInstanceBasicAttributeRequest {
  /**
   * 云桌面实例id
   */
  InstanceId: string
  /**
   * 修改云桌面实例的属性信息
   */
  AttributeInfoList: Array<AttributeInfo>
}

/**
 * DescribeCommandTasks请求参数结构体
 */
export interface DescribeCommandTasksRequest {
  /**
   * <p>页号</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小，默认 20，最大 100</p>
   */
  PageSize?: number
  /**
   * <p>拉取任务的过滤器 ，Filter.Name 取值：CommandId - 任务 lD；Staus - 任务状态， RUNNING - 执行中；FINISHED - 执行完成（不代表成功，只表示任务执行完成）</p>
   */
  Filters?: Array<Filter>
}

/**
 * RebootInstances返回参数结构体
 */
export interface RebootInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDomainControlPolicy请求参数结构体
 */
export interface CreateDomainControlPolicyRequest {
  /**
   * <p>策略名称</p>
   */
  Name?: string
  /**
   * <p>策略描述</p>
   */
  Description?: string
  /**
   * <p>策略类型，取值范围[&quot;WHITE&quot;,&quot;BLACK&quot;]，WHITE - 白名单策略；BLACK - 黑名单策略；默认 值为BLACK</p>
   */
  Type?: string
  /**
   * <p>域名控制规则详情</p>
   */
  DetailSet?: Array<DomainControlDetail>
  /**
   * <p>IP控制规则详情</p>
   */
  IpDetailSet?: Array<IpControlDetail>
  /**
   * <p>作用到的实例列表</p>
   */
  InstanceIds?: Array<string>
}

/**
 * CreateCommandTask返回参数结构体
 */
export interface CreateCommandTaskResponse {
  /**
   * 脚本任务唯一 ID
   */
  CommandId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancesType请求参数结构体
 */
export interface ModifyInstancesTypeRequest {
  /**
   * <p>实例id数组</p>
   */
  InstanceIds: Array<string>
  /**
   * <p>变更的实例类型</p>
   */
  InstanceType: string
  /**
   * <p>付费类型</p>
   */
  ChargeType: string
}

/**
 * DescribeInstanceLoginMsg返回参数结构体
 */
export interface DescribeInstanceLoginMsgResponse {
  /**
   * 桌面登录login信息
   */
  LoginMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceFetchMsg返回参数结构体
 */
export interface DescribeInstanceFetchMsgResponse {
  /**
   * 桌面登录ticket状态描述
   */
  FetchStatusTicket?: string
  /**
   * 桌面登录ticket描述
   */
  FetchTicket?: string
  /**
   * 桌面登录launch url
   */
  FetchUrl?: string
  /**
   * 桌面传输协议
   */
  ProtocolVersion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务详情
 */
export interface CommandDetail {
  /**
   * 租户 Uin
   */
  Uin?: string
  /**
   * 租户 APPID
   */
  AppId?: number
  /**
   * 任务类型，取值有：
PowerShellScript
Bat
   */
  Type?: string
  /**
   * RUNNING - 执行中；FINISHED - 执行完成
   */
  Status?: string
  /**
   * 任务脚本，Base64 编码
   */
  Command?: string
  /**
   * 任务唯一 ID
   */
  CommandId?: string
  /**
   * 任务完成时间
   */
  CreateTime?: string
  /**
   * 任务完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
  /**
   * 各实例运行结果集
   */
  Invocations?: Array<InvocationDetail>
  /**
   * 是否以绑定用户运行任务，默认 false：system 用户执行
   */
  RunAsBoundUser?: boolean
  /**
   * 是否前台运行任务，默认 false：后台运行任务
   */
  RunForeground?: boolean
}

/**
 * UnbindInstances返回参数结构体
 */
export interface UnbindInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeImages请求参数结构体
 */
export interface DescribeImagesRequest {
  /**
   * <p>拉取页号</p>
   */
  PageNumber: number
  /**
   * <p>每页拉取个数</p>
   */
  PageSize: number
  /**
   * <p>Name取值：[&quot;ImageID&quot;,&quot;Name&quot;,&quot;ImageType&quot;,&quot;ImageState&quot;,&quot;Region&quot;,&quot;InstanceType&quot;]<br>注意：filter中没有ImageID或ImageState过滤条件，后台默认不返回INVISIBLE的镜像信息</p>
   */
  Filters?: Array<Filter>
}

/**
 * RunCommand返回参数结构体
 */
export interface RunCommandResponse {
  /**
   * <p>本次任务对应的任务ID。方便异步查询执行状态。</p>
   */
  InvokeId: string
  /**
   * <p>执行详细情况。WaitUntilDone为true，在接口返回时的执行状态。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Detail: Invocation
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindInstances请求参数结构体
 */
export interface UnbindInstancesRequest {
  /**
   * 实例所在地域
   */
  InstanceRegion: string
  /**
   * 解除绑定关系列表
   */
  BindInfos: Array<BindInfo>
}

/**
 * RemovePolicy返回参数结构体
 */
export interface RemovePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RebootInstances请求参数结构体
 */
export interface RebootInstancesRequest {
  /**
   * 重启实例id列表
   */
  InstanceIds: Array<string>
  /**
   * 实例所在区域，保证传入的列表在统一区域，否则报错
   */
  InstanceRegion: string
  /**
   * 是否在正常重启失败后选择强制重启实例。取值范围：
TRUE：表示在正常重启失败后进行强制重启
FALSE：表示在正常重启失败后不进行强制重启

默认取值：FALSE。
   */
  Force?: boolean
  /**
   * 重启是否需要预登录
   */
  PreLogin?: boolean
}

/**
 * StopInvocation返回参数结构体
 */
export interface StopInvocationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewInstances返回参数结构体
 */
export interface RenewInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCommandTask请求参数结构体
 */
export interface CreateCommandTaskRequest {
  /**
   * 脚本任务，需要 Base64 编码
   */
  Command: string
  /**
   * 脚本任务类型：windows 桌面可选有：    PowerShellScript — powershell脚本    BatScript — Bat 脚本
   */
  Type: string
  /**
   * 执行脚本任务的实例列表
   */
  InstanceIds: Array<string>
  /**
   * 是否以绑定用户身份执行，默认 System身份运行false： System身份运行，默认行为true：以绑定用户身份执行
   */
  RunAsBoundUser?: boolean
  /**
   * 是否前台运行false：后台运行，默认行为true：前台运行
   */
  RunForeground?: boolean
}

/**
 * 私有网络相关信息
 */
export interface VirtualPrivateCloud {
  /**
   * <p>私有网络ID。</p>
   */
  VpcId: string
  /**
   * <p>私有网络子网ID。</p>
   */
  SubnetId: string
}

/**
 * IP控制策略详情
 */
export interface IpControlDetail {
  /**
   * <p>配置的IP。支持单IP和CIDR，暂不支持IP范围</p>
   */
  Ip: string
  /**
   * <p>IP的描述</p>
   */
  Description?: string
}

/**
 * DeleteCommandTasks返回参数结构体
 */
export interface DeleteCommandTasksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePolicy请求参数结构体
 */
export interface UpdatePolicyRequest {
  /**
   * <p>待更新策略id</p>
   */
  PolicyId: string
  /**
   * <p>更新策略后策略名称</p>
   */
  Name: string
  /**
   * <p>更新策略后策略描述</p>
   */
  Description: string
  /**
   * <p>更新策略的具体修改值（全集）</p>
   */
  PolicyInfoList: Array<PolicyInfo>
  /**
   * <p>新增绑定用户列表</p>
   */
  BindUserIds?: Array<string>
  /**
   * <p>移除绑定的用户列表</p>
   */
  RemoveUserIds?: Array<string>
}
