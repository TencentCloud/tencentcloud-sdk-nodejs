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
 * DescribeUserCmdTasks返回参数结构体
 */
export interface DescribeUserCmdTasksResponse {
  /**
   * 脚本任务信息数量
   */
  TotalCount?: number
  /**
   * 脚本任务信息列表
   */
  UserCmdTasks?: Array<UserCmdTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunUserCmd请求参数结构体
 */
export interface RunUserCmdRequest {
  /**
   * 自定义脚本ID
   */
  CmdId: string
  /**
   * 执行脚本机器的用户名
   */
  UserName: string
  /**
   * 执行脚本机器的用户名的密码
   */
  Password: string
  /**
   * 执行脚本的服务器实例
   */
  InstanceIds: Array<string>
  /**
   * 执行脚本的参数，必须经过base64编码
   */
  CmdParam?: string
}

/**
 * CreatePsaRegulation请求参数结构体
 */
export interface CreatePsaRegulationRequest {
  /**
   * 规则别名
   */
  PsaName: string
  /**
   * 关联的故障类型ID列表
   */
  TaskTypeIds: Array<number | bigint>
  /**
   * 维修实例上限，默认为5
   */
  RepairLimit?: number
  /**
   * 规则备注
   */
  PsaDescription?: string
}

/**
 * DescribeDeviceInventory返回参数结构体
 */
export interface DescribeDeviceInventoryResponse {
  /**
   * 库存设备数量
   */
  DeviceCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOsInfo返回参数结构体
 */
export interface DescribeOsInfoResponse {
  /**
   * 操作系统信息列表
   */
  OsInfoSet?: Array<OsInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOsInfo请求参数结构体
 */
export interface DescribeOsInfoRequest {
  /**
   * 设备类型代号。 可以从DescribeDeviceClass查询设备类型列表
   */
  DeviceClassCode?: string
}

/**
 * DescribeTaskOperationLog返回参数结构体
 */
export interface DescribeTaskOperationLogResponse {
  /**
   * 操作日志
   */
  TaskOperationLogSet?: Array<TaskOperationLog>
  /**
   * 日志条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCustomImage请求参数结构体
 */
export interface CreateCustomImageRequest {
  /**
   * 用于制作镜像的物理机ID
   */
  InstanceId: string
  /**
   * 镜像别名
   */
  ImageName: string
  /**
   * 镜像描述
   */
  ImageDescription?: string
}

/**
 * DescribeCustomImages请求参数结构体
 */
export interface DescribeCustomImagesRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 数量限制
   */
  Limit: number
  /**
   * 排序字段，仅支持CreateTime
   */
  OrderField?: string
  /**
   * 排序方式 0:递增(默认) 1:递减
   */
  Order?: number
  /**
   * 按ImageId查找指定镜像信息，ImageId字段存在时其他字段失效
   */
  ImageId?: string
  /**
   * 模糊查询过滤，可以查询镜像ID或镜像名
   */
  SearchKey?: string
  /**
   * <ul>
镜像状态过滤列表，有效取值为：
<li>1：制作中</li>
<li>2：制作失败</li>
<li>3：正常</li>
<li>4：删除中</li>
</ul>
   */
  ImageStatus?: Array<number | bigint>
}

/**
 * DescribeUserCmdTaskInfo返回参数结构体
 */
export interface DescribeUserCmdTaskInfoResponse {
  /**
   * 返回数量
   */
  TotalCount?: number
  /**
   * 自定义脚本任务详细信息列表
   */
  UserCmdTaskInfoSet?: Array<UserCmdTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDevices返回参数结构体
 */
export interface DescribeDevicesResponse {
  /**
   * 返回数量
   */
  TotalCount: number
  /**
   * 物理机信息列表
   */
  DeviceInfoSet: Array<DeviceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLanIp请求参数结构体
 */
export interface ModifyLanIpRequest {
  /**
   * 物理机ID
   */
  InstanceId: string
  /**
   * 指定新VPC
   */
  VpcId: string
  /**
   * 指定新子网
   */
  SubnetId: string
  /**
   * 指定新内网IP
   */
  LanIp?: string
  /**
   * 是否需要重启机器，取值 1(需要) 0(不需要)，默认取值0
   */
  RebootDevice?: number
}

/**
 * 物理机设备类型
 */
export interface DeviceClass {
  /**
   * 机型ID
   */
  DeviceClassCode: string
  /**
   * CPU描述
   */
  CpuDescription: string
  /**
   * 内存描述
   */
  MemDescription: string
  /**
   * 硬盘描述
   */
  DiskDescription: string
  /**
   * 是否支持RAID. 0:不支持; 1:支持
   */
  HaveRaidCard: number
  /**
   * 网卡描述
   */
  NicDescription: string
  /**
   * GPU描述
   */
  GpuDescription: string
  /**
   * 单价折扣
注意：此字段可能返回 null，表示取不到有效值。
   */
  Discount: number
  /**
   * 用户刊例价格
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice: number
  /**
   * 实际价格
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealPrice: number
  /**
   * 官网刊例价格
注意：此字段可能返回 null，表示取不到有效值。
   */
  NormalPrice: number
  /**
   * 设备使用场景类型
   */
  DeviceType: string
  /**
   * 机型系列
   */
  Series: number
  /**
   * cpu的核心数。仅是物理服务器未开启超线程的核心数， 超线程的核心数为Cpu*2
   */
  Cpu: number
  /**
   * 内存容量。单位G
   */
  Mem: number
}

/**
 * DescribeRepairTaskConstant请求参数结构体
 */
export type DescribeRepairTaskConstantRequest = null

/**
 * DeletePsaRegulation请求参数结构体
 */
export interface DeletePsaRegulationRequest {
  /**
   * 预授权规则ID
   */
  PsaId: string
}

/**
 * DescribeCustomImageProcess请求参数结构体
 */
export interface DescribeCustomImageProcessRequest {
  /**
   * 镜像ID
   */
  ImageId: string
}

/**
 * cpu信息
 */
export interface CpuInfo {
  /**
   * CPU的ID
   */
  CpuId: number
  /**
   * CPU型号描述
   */
  CpuDescription: string
  /**
   * 机型序列
   */
  Series: number
  /**
   * 支持的RAID方式，0：有RAID卡，1：没有RAID卡
   */
  ContainRaidCard: Array<number | bigint>
}

/**
 * 自定义镜像信息
 */
export interface CustomImage {
  /**
   * 镜像ID
   */
  ImageId: string
  /**
   * 镜像别名
   */
  ImageName: string
  /**
   * 镜像状态码
   */
  ImageStatus: number
  /**
   * 镜像OS名
   */
  OsClass: string
  /**
   * 镜像OS版本
   */
  OsVersion: string
  /**
   * OS是64还是32位
   */
  OsBit: number
  /**
   * 镜像大小(M)
   */
  ImageSize: number
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 分区信息
   */
  PartitionInfoSet: Array<PartitionInfo>
  /**
   * 适用机型
   */
  DeviceClassCode: string
  /**
   * 备注
   */
  ImageDescription: string
  /**
   * 原始镜像id
   */
  OsTypeId: number
}

/**
 * ModifyDeviceAutoRenewFlag请求参数结构体
 */
export interface ModifyDeviceAutoRenewFlagRequest {
  /**
   * 自动续费标志位。0: 不自动续费; 1: 自动续费
   */
  AutoRenewFlag: number
  /**
   * 需要修改的设备ID列表
   */
  InstanceIds: Array<string>
}

/**
 * StartDevices返回参数结构体
 */
export interface StartDevicesResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindPsaTag请求参数结构体
 */
export interface BindPsaTagRequest {
  /**
   * 预授权规则ID
   */
  PsaId: string
  /**
   * 需要绑定的标签key
   */
  TagKey: string
  /**
   * 需要绑定的标签value
   */
  TagValue: string
}

/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
  /**
   * 地域信息
   */
  RegionInfoSet?: Array<RegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 物理机分区格式
 */
export interface DevicePartition {
  /**
   * 系统盘大小
   */
  SystemDiskSize: number
  /**
   * 数据盘大小
   */
  DataDiskSize: number
  /**
   * 是否兼容Uefi
   */
  SysIsUefiType: boolean
  /**
   * root分区大小
   */
  SysRootSpace: number
  /**
   * Swaporuefi分区大小
   */
  SysSwaporuefiSpace: number
  /**
   * Usrlocal分区大小
   */
  SysUsrlocalSpace: number
  /**
   * data分区大小
   */
  SysDataSpace: number
  /**
   * 硬盘大小详情
   */
  DeviceDiskSizeInfoSet: Array<DeviceDiskSizeInfo>
}

/**
 * OfflineDevices返回参数结构体
 */
export interface OfflineDevicesResponse {
  /**
   * 黑石异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPsaRegulation请求参数结构体
 */
export interface ModifyPsaRegulationRequest {
  /**
   * 预授权规则ID
   */
  PsaId: string
  /**
   * 预授权规则别名
   */
  PsaName?: string
  /**
   * 维修中的实例上限
   */
  RepairLimit?: number
  /**
   * 预授权规则备注
   */
  PsaDescription?: string
  /**
   * 预授权规则关联故障类型ID列表
   */
  TaskTypeIds?: Array<number | bigint>
}

/**
 * RecoverDevices请求参数结构体
 */
export interface RecoverDevicesRequest {
  /**
   * 需要恢复的物理机ID列表
   */
  InstanceIds: Array<string>
}

/**
 * DescribeDeviceClassPartition请求参数结构体
 */
export interface DescribeDeviceClassPartitionRequest {
  /**
   * 设备类型代号。代号通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)查询。标准机型需要传入此参数。虽是可选参数，但DeviceClassCode和InstanceId参数，必须要填写一个。
   */
  DeviceClassCode?: string
  /**
   * 需要查询自定义机型RAID信息时，传入自定义机型实例ID。InstanceId存在时其余参数失效。
   */
  InstanceId?: string
  /**
   * CPU型号ID，查询自定义机型时需要传入
   */
  CpuId?: number
  /**
   * 内存大小，单位为G，查询自定义机型时需要传入
   */
  MemSize?: number
  /**
   * 是否有RAID卡，取值：1(有) 0(无)。查询自定义机型时需要传入
   */
  ContainRaidCard?: number
  /**
   * 系统盘类型ID，查询自定义机型时需要传入
   */
  SystemDiskTypeId?: number
  /**
   * 系统盘数量，查询自定义机型时需要传入
   */
  SystemDiskCount?: number
  /**
   * 数据盘类型ID，查询自定义机型时可传入
   */
  DataDiskTypeId?: number
  /**
   * 数据盘数量，查询自定义机型时可传入
   */
  DataDiskCount?: number
}

/**
 * 可用区信息
 */
export interface ZoneInfo {
  /**
   * 可用区ID
   */
  Zone: string
  /**
   * 可用区整型ID
   */
  ZoneId: number
  /**
   * 可用区描述
   */
  ZoneDescription: string
}

/**
 * CreateSpotDevice返回参数结构体
 */
export interface CreateSpotDeviceResponse {
  /**
   * 创建的服务器ID
   */
  ResourceIds?: Array<string>
  /**
   * 任务ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BuyDevices请求参数结构体
 */
export interface BuyDevicesRequest {
  /**
   * 可用区ID。通过接口[查询地域以及可用区(DescribeRegions)](https://cloud.tencent.com/document/api/386/33564)获取可用区信息
   */
  Zone: string
  /**
   * 部署服务器的操作系统ID。通过接口[查询操作系统信息(DescribeOsInfo)](https://cloud.tencent.com/document/product/386/32902)获取操作系统信息
   */
  OsTypeId: number
  /**
   * RAID类型ID。通过接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910)获取RAID信息
   */
  RaidId: number
  /**
   * 购买数量
   */
  GoodsCount: number
  /**
   * 购买至私有网络ID
   */
  VpcId: string
  /**
   * 购买至子网ID
   */
  SubnetId: string
  /**
   * 购买的机型ID。通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)获取机型信息
   */
  DeviceClassCode: string
  /**
   * 购买时长单位，取值：M(月) D(天)
   */
  TimeUnit: string
  /**
   * 购买时长
   */
  TimeSpan: number
  /**
   * 是否安装安全Agent，取值：1(安装) 0(不安装)，默认取值0
   */
  NeedSecurityAgent?: number
  /**
   * 是否安装监控Agent，取值：1(安装) 0(不安装)，默认取值0
   */
  NeedMonitorAgent?: number
  /**
   * 是否安装EMR Agent，取值：1(安装) 0(不安装)，默认取值0
   */
  NeedEMRAgent?: number
  /**
   * 是否安装EMR软件包，取值：1(安装) 0(不安装)，默认取值0
   */
  NeedEMRSoftware?: number
  /**
   * 是否分配弹性公网IP，取值：1(分配) 0(不分配)，默认取值0
   */
  ApplyEip?: number
  /**
   * 弹性公网IP计费模式，取值：Flow(按流量计费) Bandwidth(按带宽计费)，默认取值Flow
   */
  EipPayMode?: string
  /**
   * 弹性公网IP带宽限制，单位Mb
   */
  EipBandwidth?: number
  /**
   * 数据盘是否格式化，取值：1(格式化) 0(不格式化)，默认取值为1
   */
  IsZoning?: number
  /**
   * 物理机计费模式，取值：1(预付费) 2(后付费)，默认取值为1
   */
  CpmPayMode?: number
  /**
   * 自定义镜像ID，取值生效时用自定义镜像部署物理机
   */
  ImageId?: string
  /**
   * 设置Linux root或Windows Administrator的密码
   */
  Password?: string
  /**
   * 自动续费标志位，取值：1(自动续费) 0(不自动续费)，默认取值0
   */
  AutoRenewFlag?: number
  /**
   * 系统盘根分区大小，单位为G，默认取值10G。通过接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910)获取根分区信息
   */
  SysRootSpace?: number
  /**
   * 系统盘swap分区或/boot/efi分区的大小，单位为G。若是uefi启动的机器，分区为/boot/efi，且此值是默认是2G。 普通机器为swap分区，可以不指定此分区。 机型是否是uefi启动，参见接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)
   */
  SysSwaporuefiSpace?: number
  /**
   * /usr/local分区大小，单位为G
   */
  SysUsrlocalSpace?: number
  /**
   * /data分区大小，单位为G。如果系统盘还有剩余大小，会分配给/data分区。（特殊情况：如果剩余空间不足10G，并且没有指定/data分区，则剩余空间会分配给Root分区）
   */
  SysDataSpace?: number
  /**
   * 是否开启超线程，取值：1(开启) 0(关闭)，默认取值1
   */
  HyperThreading?: number
  /**
   * 指定的内网IP列表，不指定时自动分配
   */
  LanIps?: Array<string>
  /**
   * 设备名称列表
   */
  Aliases?: Array<string>
  /**
   * CPU型号ID，自定义机型需要传入，取值：
<br/><li>1: E5-2620v3 (6核) &#42; 2</li><li>2: E5-2680v4 (14核) &#42; 2</li><li>3: E5-2670v3 (12核) &#42; 2</li><li>4: E5-2620v4 (8核) &#42; 2</li><li>5: 4110 (8核) &#42; 2</li><li>6: 6133 (20核) &#42; 2</li><br/>
   */
  CpuId?: number
  /**
   * 是否有RAID卡，取值：1(有) 0(无)，自定义机型需要传入
   */
  ContainRaidCard?: number
  /**
   * 内存大小，单位为G，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
   */
  MemSize?: number
  /**
   * 系统盘ID，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
   */
  SystemDiskTypeId?: number
  /**
   * 系统盘数量，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
   */
  SystemDiskCount?: number
  /**
   * 数据盘ID，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
   */
  DataDiskTypeId?: number
  /**
   * 数据盘数量，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
   */
  DataDiskCount?: number
  /**
   * 绑定的标签列表
   */
  Tags?: Array<Tag>
  /**
   * 指定数据盘的文件系统格式，当前支持 EXT4和XFS选项， 默认为EXT4。 参数适用于数据盘和Linux， 且在IsZoning为1时生效
   */
  FileSystem?: string
  /**
   * 此参数是为了防止重复发货。如果两次调用传入相同的BuySession，只会发货一次。 不要以设备别名作为BuySession，这样只会第一次购买成功。参数长度为128位，合法字符为大小字母，数字，下划线，横线。
   */
  BuySession?: string
  /**
   * 绑定已有的安全组ID。仅在NeedSecurityAgent为1时生效
   */
  SgId?: string
  /**
   * 安全组模板ID，由模板创建新安全组并绑定。TemplateId和SgId不能同时传入
   */
  TemplateId?: string
}

/**
 * DescribeHardwareSpecification请求参数结构体
 */
export type DescribeHardwareSpecificationRequest = null

/**
 * 标签键与值
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签键对应的值
   */
  TagValues: Array<string>
}

/**
 * CreateCustomImage返回参数结构体
 */
export interface CreateCustomImageResponse {
  /**
   * 黑石异步任务ID
   */
  TaskId: number
  /**
   * 镜像ID
   */
  ImageId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 托管设备带外信息
 */
export interface HostedDeviceOutBandInfo {
  /**
   * 物理机ID
   */
  InstanceId: string
  /**
   * 带外IP
   */
  OutBandIp: string
  /**
   * VPN的IP
   */
  VpnIp: string
  /**
   * VPN的端口
   */
  VpnPort: number
}

/**
 * ReturnDevices请求参数结构体
 */
export interface ReturnDevicesRequest {
  /**
   * 需要退还的物理机ID列表
   */
  InstanceIds: Array<string>
}

/**
 * ModifyDeviceAliases返回参数结构体
 */
export interface ModifyDeviceAliasesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 一条预授权规则
 */
export interface PsaRegulation {
  /**
   * 规则ID
   */
  PsaId: string
  /**
   * 规则别名
   */
  PsaName: string
  /**
   * 关联标签数量
   */
  TagCount: number
  /**
   * 关联实例数量
   */
  InstanceCount: number
  /**
   * 故障实例数量
   */
  RepairCount: number
  /**
   * 故障实例上限
   */
  RepairLimit: number
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 规则备注
   */
  PsaDescription: string
  /**
   * 关联标签
   */
  Tags: Array<Tag>
  /**
   * 关联故障类型id
   */
  TaskTypeIds: Array<number | bigint>
}

/**
 * DescribeDevicePartition返回参数结构体
 */
export interface DescribeDevicePartitionResponse {
  /**
   * 物理机分区格式
   */
  DevicePartition?: DevicePartition
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostedDeviceOutBandInfo请求参数结构体
 */
export interface DescribeHostedDeviceOutBandInfoRequest {
  /**
   * 托管设备的唯一ID数组,数组个数不超过20
   */
  InstanceIds: Array<string>
  /**
   * 可用区ID
   */
  Zone: string
}

/**
 * RebootDevices返回参数结构体
 */
export interface RebootDevicesResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetDevicePassword请求参数结构体
 */
export interface ResetDevicePasswordRequest {
  /**
   * 需要重置密码的服务器ID列表
   */
  InstanceIds: Array<string>
  /**
   * 新密码
   */
  Password: string
}

/**
 * 各实例对应的异步任务执行结果
 */
export interface SubtaskStatus {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例ID对应任务的状态，取值如下：<br>
1：成功<br>
2：失败<br>
3：部分成功，部分失败<br>
4：未完成<br>
5：部分成功，部分未完成<br>
6：部分未完成，部分失败<br>
7：部分未完成，部分失败，部分成功
   */
  TaskStatus: number
}

/**
 * DescribeDeviceInventory请求参数结构体
 */
export interface DescribeDeviceInventoryRequest {
  /**
   * 可用区
   */
  Zone: string
  /**
   * 设备型号
   */
  DeviceClassCode?: string
  /**
   * 私有网络ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * CPU型号ID，查询自定义机型时必填
   */
  CpuId?: number
  /**
   * 内存大小，单位为G，查询自定义机型时必填
   */
  MemSize?: number
  /**
   * 是否有RAID卡，取值：1(有) 0(无)，查询自定义机型时必填
   */
  ContainRaidCard?: number
  /**
   * 系统盘类型ID，查询自定义机型时必填
   */
  SystemDiskTypeId?: number
  /**
   * 系统盘数量，查询自定义机型时必填
   */
  SystemDiskCount?: number
  /**
   * 数据盘类型ID，查询自定义机型时可填
   */
  DataDiskTypeId?: number
  /**
   * 数据盘数量，查询自定义机型时可填
   */
  DataDiskCount?: number
}

/**
 * DescribeCustomImages返回参数结构体
 */
export interface DescribeCustomImagesResponse {
  /**
   * 返回镜像数量
   */
  TotalCount?: number
  /**
   * 镜像信息列表
   */
  CustomImageSet?: Array<CustomImage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备ID与别名
 */
export interface DeviceAlias {
  /**
   * 设备ID
   */
  InstanceId: string
  /**
   * 设备别名
   */
  Alias: string
}

/**
 * DeleteCustomImages请求参数结构体
 */
export interface DeleteCustomImagesRequest {
  /**
   * 准备删除的镜像ID列表
   */
  ImageIds: Array<string>
}

/**
 * 描述设备分区信息
 */
export interface PartitionInfo {
  /**
   * 分区名称
   */
  Name: string
  /**
   * 分区大小
   */
  Size: number
}

/**
 * DescribeDevicePosition请求参数结构体
 */
export interface DescribeDevicePositionRequest {
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 数量限制
   */
  Limit?: number
  /**
   * 私有网络ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 实例ID列表
   */
  InstanceIds?: Array<string>
  /**
   * 实例别名
   */
  Alias?: string
}

/**
 * 自定义脚本任务详细信息
 */
export interface UserCmdTaskInfo {
  /**
   * 自动编号，可忽略
   */
  AutoId: number
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 任务开始时间
   */
  RunBeginTime: string
  /**
   * 任务结束时间
   */
  RunEndTime: string
  /**
   * 任务状态ID，取值为 -1：进行中；0：成功；>0：失败错误码
   */
  Status: number
  /**
   * 设备别名
   */
  InstanceName: string
  /**
   * 设备ID
   */
  InstanceId: string
  /**
   * 私有网络名
   */
  VpcName: string
  /**
   * 私有网络整型ID
   */
  VpcId: string
  /**
   * 私有网络Cidr
   */
  VpcCidrBlock: string
  /**
   * 子网名
   */
  SubnetName: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 子网Cidr
   */
  SubnetCidrBlock: string
  /**
   * 内网IP
   */
  LanIp: string
  /**
   * 脚本内容，base64编码后的值
   */
  CmdContent: string
  /**
   * 脚本参数，base64编码后的值
   */
  CmdParam: string
  /**
   * 脚本执行结果，base64编码后的值
   */
  CmdResult: string
  /**
   * 用户AppId
   */
  AppId: number
  /**
   * 用户执行脚本结束退出的返回值，没有返回值为-1
   */
  LastShellExit: number
}

/**
 * ShutdownDevices返回参数结构体
 */
export interface ShutdownDevicesResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 故障id对应故障名列表
 */
export interface TaskType {
  /**
   * 故障类ID
   */
  TypeId: number
  /**
   * 故障类中文名
   */
  TypeName: string
  /**
   * 故障类型父类
   */
  TaskSubType: string
}

/**
 * DeleteUserCmds请求参数结构体
 */
export interface DeleteUserCmdsRequest {
  /**
   * 需要删除的脚本ID
   */
  CmdIds: Array<string>
}

/**
 * 硬盘大小的描述
 */
export interface DeviceDiskSizeInfo {
  /**
   * 硬盘名称
   */
  DiskName: string
  /**
   * 硬盘大小（单位GiB）
   */
  DiskSize: number
}

/**
 * AttachCamRole请求参数结构体
 */
export interface AttachCamRoleRequest {
  /**
   * 服务器ID
   */
  InstanceId: string
  /**
   * 角色名称。
   */
  RoleName: string
}

/**
 * DescribeDeviceClass返回参数结构体
 */
export interface DescribeDeviceClassResponse {
  /**
   * 物理机设备类型列表
   */
  DeviceClassSet?: Array<DeviceClass>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceHardwareInfo返回参数结构体
 */
export interface DescribeDeviceHardwareInfoResponse {
  /**
   * 设备硬件配置信息
   */
  DeviceHardwareInfoSet?: Array<DeviceHardwareInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserCmd请求参数结构体
 */
export interface ModifyUserCmdRequest {
  /**
   * 待修改的脚本ID
   */
  CmdId: string
  /**
   * 待修改的脚本名称
   */
  Alias?: string
  /**
   * 脚本适用的操作系统类型
   */
  OsType?: string
  /**
   * 待修改的脚本内容，必须经过base64编码
   */
  Content?: string
}

/**
 * DescribeDevicePriceInfo返回参数结构体
 */
export interface DescribeDevicePriceInfoResponse {
  /**
   * 服务器价格信息列表
   */
  DevicePriceInfoSet?: Array<DevicePriceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReloadDeviceOs返回参数结构体
 */
export interface ReloadDeviceOsResponse {
  /**
   * 黑石异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunUserCmd返回参数结构体
 */
export interface RunUserCmdResponse {
  /**
   * 运行成功的任务信息列表
   */
  SuccessTaskInfoSet?: Array<SuccessTaskInfo>
  /**
   * 运行失败的任务信息列表
   */
  FailedTaskInfoSet?: Array<FailedTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReloadDeviceOs请求参数结构体
 */
export interface ReloadDeviceOsRequest {
  /**
   * 设备的唯一ID
   */
  InstanceId: string
  /**
   * 密码。 用户设置的linux root或Windows Administrator密码。密码校验规则: <li> Windows机器密码需12到16位，至少包括三项 `[a-z]`,`[A-Z]`,`[0-9]`和`[()`'`~!@#$%^&*-+=_`|`{}[]:;'<>,.?/]`的特殊符号, 密码不能包含Administrator(不区分大小写); <li> Linux机器密码需8到16位，至少包括两项`[a-z,A-Z]`,`[0-9]`和`[()`'`~!@#$%^&*-+=_`|`{}[]:;'<>,.?/]`的特殊符号
   */
  Password: string
  /**
   * 操作系统类型ID。通过接口[查询操作系统信息(DescribeOsInfo)](https://cloud.tencent.com/document/api/386/32902)获取操作系统信息
   */
  OsTypeId?: number
  /**
   * RAID类型ID。通过接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910)获取RAID信息
   */
  RaidId?: number
  /**
   * 是否格式化数据盘。0: 不格式化（默认值）；1：格式化
   */
  IsZoning?: number
  /**
   * 系统盘根分区大小，默认是10G。系统盘的大小参考接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910)
   */
  SysRootSpace?: number
  /**
   * 系统盘swap分区或/boot/efi分区的大小。若是uefi启动的机器，分区为/boot/efi ,且此值是默认是2G。普通机器为swap分区，可以不指定此分区。机型是否是uefi启动，参考接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)
   */
  SysSwaporuefiSpace?: number
  /**
   * /usr/local分区大小
   */
  SysUsrlocalSpace?: number
  /**
   * 重装到新的私有网络的ID。如果改变VPC子网，则要求与SubnetId同时传参，否则可不填
   */
  VpcId?: string
  /**
   * 重装到新的子网的ID。如果改变VPC子网，则要求与VpcId同时传参，否则可不填
   */
  SubnetId?: string
  /**
   * 重装指定IP地址
   */
  LanIp?: string
  /**
   * 指定是否开启超线程。 0：关闭超线程；1：开启超线程（默认值）
   */
  HyperThreading?: number
  /**
   * 自定义镜像ID。传此字段则用自定义镜像重装
   */
  ImageId?: string
  /**
   * 指定数据盘的文件系统格式，当前支持 EXT4和XFS选项， 默认为EXT4。 参数适用于数据盘和Linux， 且在IsZoning为1时生效
   */
  FileSystem?: string
  /**
   * 是否安装安全Agent，取值：1(安装) 0(不安装)，默认取值0
   */
  NeedSecurityAgent?: number
  /**
   * 是否安装监控Agent，取值：1(安装) 0(不安装)，默认取值0
   */
  NeedMonitorAgent?: number
  /**
   * 是否安装EMR Agent，取值：1(安装) 0(不安装)，默认取值0
   */
  NeedEMRAgent?: number
  /**
   * 是否安装EMR软件包，取值：1(安装) 0(不安装)，默认取值0
   */
  NeedEMRSoftware?: number
  /**
   * 是否保留安全组配置，取值：1(保留) 0(不保留)，默认取值0
   */
  ReserveSgConfig?: number
  /**
   * /data分区大小，可不填。除root、swap、usr/local的剩余空间会自动分配到data分区
   */
  SysDataSpace?: number
}

/**
 * DescribeUserCmds请求参数结构体
 */
export interface DescribeUserCmdsRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 数量限制
   */
  Limit: number
  /**
   * 排序字段，支持： OsType,CreateTime,ModifyTime
   */
  OrderField?: string
  /**
   * 排序方式，取值: 1倒序，0顺序；默认倒序
   */
  Order?: number
  /**
   * 关键字搜索，可搜索ID或别名，支持模糊搜索
   */
  SearchKey?: string
  /**
   * 查询的脚本ID
   */
  CmdId?: string
}

/**
 * DescribeTaskInfo请求参数结构体
 */
export interface DescribeTaskInfoRequest {
  /**
   * 开始位置
   */
  Offset: number
  /**
   * 数据条数
   */
  Limit: number
  /**
   * 时间过滤下限
   */
  StartDate?: string
  /**
   * 时间过滤上限
   */
  EndDate?: string
  /**
   * 任务状态ID过滤
   */
  TaskStatus?: Array<number | bigint>
  /**
   * 排序字段，目前支持：CreateTime，AuthTime，EndTime
   */
  OrderField?: string
  /**
   * 排序方式 0:递增(默认) 1:递减
   */
  Order?: number
  /**
   * 任务ID过滤
   */
  TaskIds?: Array<string>
  /**
   * 实例ID过滤
   */
  InstanceIds?: Array<string>
  /**
   * 实例别名过滤
   */
  Aliases?: Array<string>
  /**
   * 故障类型ID过滤
   */
  TaskTypeIds?: Array<number | bigint>
}

/**
 * RepairTaskControl返回参数结构体
 */
export interface RepairTaskControlResponse {
  /**
   * 出参TaskId是黑石异步任务ID，不同于入参TaskId字段。
此字段可作为DescriptionOperationResult查询异步任务状态接口的入参，查询异步任务执行结果。
   */
  TaskId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegions请求参数结构体
 */
export interface DescribeRegionsRequest {
  /**
   * 地域整型ID，目前黑石可用地域包括：8-北京，4-上海，1-广州， 19-重庆
   */
  RegionId?: number
}

/**
 * DescribePsaRegulations请求参数结构体
 */
export interface DescribePsaRegulationsRequest {
  /**
   * 数量限制
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 规则ID过滤，支持模糊查询
   */
  PsaIds?: Array<string>
  /**
   * 规则别名过滤，支持模糊查询
   */
  PsaNames?: Array<string>
  /**
   * 标签过滤
   */
  Tags?: Array<Tag>
  /**
   * 排序字段，取值支持：CreateTime
   */
  OrderField?: string
  /**
   * 排序方式 0:递增(默认) 1:递减
   */
  Order?: number
}

/**
 * UnbindPsaTag返回参数结构体
 */
export interface UnbindPsaTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDevicePriceInfo请求参数结构体
 */
export interface DescribeDevicePriceInfoRequest {
  /**
   * 需要查询的实例列表
   */
  InstanceIds: Array<string>
  /**
   * 购买时长单位，当前只支持取值为m
   */
  TimeUnit?: string
  /**
   * 购买时长
   */
  TimeSpan?: number
}

/**
 * DescribeDevicePartition请求参数结构体
 */
export interface DescribeDevicePartitionRequest {
  /**
   * 物理机ID
   */
  InstanceId: string
}

/**
 * 维护平台维修任务信息
 */
export interface TaskInfo {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 主机id
   */
  InstanceId: string
  /**
   * 主机别名
   */
  Alias: string
  /**
   * 故障类型id
   */
  TaskTypeId: number
  /**
   * 任务状态id
   */
  TaskStatus: number
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 授权时间
   */
  AuthTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 任务详情
   */
  TaskDetail: string
  /**
   * 设备状态
   */
  DeviceStatus: number
  /**
   * 设备操作状态
   */
  OperateStatus: number
  /**
   * 可用区
   */
  Zone: string
  /**
   * 地域
   */
  Region: string
  /**
   * 所属网络
   */
  VpcId: string
  /**
   * 所在子网
   */
  SubnetId: string
  /**
   * 子网名
   */
  SubnetName: string
  /**
   * VPC名
   */
  VpcName: string
  /**
   * VpcCidrBlock
   */
  VpcCidrBlock: string
  /**
   * SubnetCidrBlock
   */
  SubnetCidrBlock: string
  /**
   * 公网ip
   */
  WanIp: string
  /**
   * 内网IP
   */
  LanIp: string
  /**
   * 管理IP
   */
  MgtIp: string
  /**
   * 故障类中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeName: string
  /**
   * 故障类型，取值：unconfirmed (不明确故障)；redundancy (有冗余故障)；nonredundancy (无冗余故障)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskSubType: string
}

/**
 * ModifyPsaRegulation返回参数结构体
 */
export interface ModifyPsaRegulationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义脚本任务信息
 */
export interface UserCmdTask {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 任务状态ID，取值: -1(进行中) 0(结束)
   */
  Status: number
  /**
   * 脚本名称
   */
  Alias: string
  /**
   * 脚本ID
   */
  CmdId: string
  /**
   * 运行实例数量
   */
  InstanceCount: number
  /**
   * 运行成功数量
   */
  SuccessCount: number
  /**
   * 运行失败数量
   */
  FailureCount: number
  /**
   * 执行开始时间
   */
  RunBeginTime: string
  /**
   * 执行结束时间
   */
  RunEndTime: string
}

/**
 * 维修任务操作日志
 */
export interface TaskOperationLog {
  /**
   * 操作步骤
   */
  TaskStep: string
  /**
   * 操作人
   */
  Operator: string
  /**
   * 操作描述
   */
  OperationDetail: string
  /**
   * 操作时间
   */
  OperationTime: string
}

/**
 * 运行失败的自定义脚本信息
 */
export interface FailedTaskInfo {
  /**
   * 运行脚本的设备ID
   */
  InstanceId: string
  /**
   * 失败原因
   */
  ErrorMsg: string
}

/**
 * DescribeDevicePosition返回参数结构体
 */
export interface DescribeDevicePositionResponse {
  /**
   * 返回数量
   */
  TotalCount?: number
  /**
   * 设备所在机架信息
   */
  DevicePositionInfoSet?: Array<DevicePositionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserCmds返回参数结构体
 */
export interface DeleteUserCmdsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDeviceAliases请求参数结构体
 */
export interface ModifyDeviceAliasesRequest {
  /**
   * 需要改名的设备与别名列表
   */
  DeviceAliases: Array<DeviceAlias>
}

/**
 * ModifyPayModePre2Post返回参数结构体
 */
export interface ModifyPayModePre2PostResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 成功运行的自定义脚本信息
 */
export interface SuccessTaskInfo {
  /**
   * 运行脚本的设备ID
   */
  InstanceId: string
  /**
   * 黑石异步任务ID
   */
  TaskId: number
  /**
   * 黑石自定义脚本运行任务ID
   */
  CmdTaskId: string
}

/**
 * SetOutBandVpnAuthPassword请求参数结构体
 */
export interface SetOutBandVpnAuthPasswordRequest {
  /**
   * 设置的Vpn认证密码
   */
  Password: string
  /**
   * 操作字段，取值为：Create（创建）或Update（修改）
   */
  Operate: string
}

/**
 * OfflineDevices请求参数结构体
 */
export interface OfflineDevicesRequest {
  /**
   * 需要退还的物理机ID列表
   */
  InstanceIds: Array<string>
}

/**
 * 设备硬件配置信息
 */
export interface DeviceHardwareInfo {
  /**
   * 设备实例 ID
   */
  InstanceId?: string
  /**
   * 是否自定义机型
   */
  IsElastic?: number
  /**
   * 机型计费模式，1 为预付费，2 为后付费
   */
  CpmPayMode?: number
  /**
   * 自定义机型，CPU 型号 ID（非自定义机型返回0）
   */
  CpuId?: number
  /**
   * 自定义机型，内存大小, 单位 GB（非自定义机型返回0）
   */
  Mem?: number
  /**
   * 是否有 RAID 卡，0：没有 RAID 卡； 1：有 RAID 卡
   */
  ContainRaidCard?: number
  /**
   * 自定义机型系统盘类型ID（若没有则返回0）
   */
  SystemDiskTypeId?: number
  /**
   * 自定义机型系统盘数量（若没有则返回0）
   */
  SystemDiskCount?: number
  /**
   * 自定义机型数据盘类型 ID（若没有则返回0）
   */
  DataDiskTypeId?: number
  /**
   * 自定义机型数据盘数量（若没有则返回0）
   */
  DataDiskCount?: number
  /**
   * CPU 型号描述
   */
  CpuDescription?: string
  /**
   * 内存描述
   */
  MemDescription?: string
  /**
   * 磁盘描述
   */
  DiskDescription?: string
  /**
   * 网卡描述
   */
  NicDescription?: string
  /**
   * 是否支持 RAID 的描述
   */
  RaidDescription?: string
  /**
   * cpu的核心数。仅是物理服务器未开启超线程的核心数， 超线程的核心数为Cpu*2
   */
  Cpu: number
  /**
   * 机型外部代号
   */
  DeviceClassCode: string
}

/**
 * 自定义机型磁盘的描述
 */
export interface DiskInfo {
  /**
   * 磁盘ID
   */
  DiskTypeId: number
  /**
   * 磁盘的容量，单位为G
   */
  Size: number
  /**
   * 磁盘信息描述
   */
  DiskDescription: string
}

/**
 * SetOutBandVpnAuthPassword返回参数结构体
 */
export interface SetOutBandVpnAuthPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskInfo返回参数结构体
 */
export interface DescribeTaskInfoResponse {
  /**
   * 返回任务总数量
   */
  TotalCount: number
  /**
   * 任务信息列表
   */
  TaskInfoSet: Array<TaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserCmdTaskInfo请求参数结构体
 */
export interface DescribeUserCmdTaskInfoRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 数量限制
   */
  Limit?: number
  /**
   * 排序字段，支持： RunBeginTime,RunEndTime,Status
   */
  OrderField?: string
  /**
   * 排序方式，取值: 1倒序，0顺序；默认倒序
   */
  Order?: number
  /**
   * 关键字搜索，可搜索ID或别名，支持模糊搜索
   */
  SearchKey?: string
}

/**
 * CreateUserCmd返回参数结构体
 */
export interface CreateUserCmdResponse {
  /**
   * 脚本ID
   */
  CmdId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserCmd返回参数结构体
 */
export interface ModifyUserCmdResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPayModePre2Post请求参数结构体
 */
export interface ModifyPayModePre2PostRequest {
  /**
   * 需要修改的设备ID列表
   */
  InstanceIds: Array<string>
}

/**
 * 设备操作日志
 */
export interface DeviceOperationLog {
  /**
   * 日志的ID
   */
  Id: number
  /**
   * 设备ID
   */
  InstanceId: string
  /**
   * 日志对应的操作任务ID
   */
  TaskId: number
  /**
   * 操作任务名称
   */
  TaskName: string
  /**
   * 操作任务中文名称
   */
  TaskDescription: string
  /**
   * 操作开始时间
   */
  StartTime: string
  /**
   * 操作结束时间
   */
  EndTime: string
  /**
   * 操作状态，0: 正在执行中；1：任务成功； 2: 任务失败。
   */
  Status: number
  /**
   * 操作者
   */
  OpUin: string
  /**
   * 操作描述
   */
  LogDescription: string
}

/**
 * DescribeRepairTaskConstant返回参数结构体
 */
export interface DescribeRepairTaskConstantResponse {
  /**
   * 故障类型ID与对应中文名列表
   */
  TaskTypeSet?: Array<TaskType>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BuyDevices返回参数结构体
 */
export interface BuyDevicesResponse {
  /**
   * 购买的物理机实例ID列表
   */
  InstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLanIp返回参数结构体
 */
export interface ModifyLanIpResponse {
  /**
   * 黑石异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePsaRegulations返回参数结构体
 */
export interface DescribePsaRegulationsResponse {
  /**
   * 返回规则数量
   */
  TotalCount?: number
  /**
   * 返回规则列表
   */
  PsaRegulations?: Array<PsaRegulation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartDevices请求参数结构体
 */
export interface StartDevicesRequest {
  /**
   * 需要开机的设备ID列表
   */
  InstanceIds: Array<string>
}

/**
 * DescribeUserCmds返回参数结构体
 */
export interface DescribeUserCmdsResponse {
  /**
   * 返回数量
   */
  TotalCount?: number
  /**
   * 脚本信息列表
   */
  UserCmds?: Array<UserCmd>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDeviceAutoRenewFlag返回参数结构体
 */
export interface ModifyDeviceAutoRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOperationResult返回参数结构体
 */
export interface DescribeOperationResultResponse {
  /**
   * 任务的整体状态，取值如下：<br>
1：成功<br>
2：失败<br>
3：部分成功，部分失败<br>
4：未完成<br>
5：部分成功，部分未完成<br>
6：部分未完成，部分失败<br>
7：部分未完成，部分失败，部分成功
   */
  TaskStatus?: number
  /**
   * 各实例对应任务的状态ID
   */
  SubtaskStatusSet?: Array<SubtaskStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceClass请求参数结构体
 */
export interface DescribeDeviceClassRequest {
  /**
   * 是否仅查询在售标准机型配置信息。取值0：查询所有机型；1：查询在售机型。默认为1
   */
  OnSale?: number
  /**
   * 是否返回价格信息。取值0：不返回价格信息，接口返回速度更快；1：返回价格信息。默认为1
   */
  NeedPriceInfo?: number
}

/**
 * ModifyCustomImageAttribute请求参数结构体
 */
export interface ModifyCustomImageAttributeRequest {
  /**
   * 镜像ID
   */
  ImageId: string
  /**
   * 设置新的镜像名
   */
  ImageName?: string
  /**
   * 设置新的镜像描述
   */
  ImageDescription?: string
}

/**
 * DeletePsaRegulation返回参数结构体
 */
export interface DeletePsaRegulationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RAID和设备分区结构
 */
export interface DeviceClassPartitionInfo {
  /**
   * RAID类型ID
   */
  RaidId: number
  /**
   * RAID名称
   */
  Raid: string
  /**
   * RAID名称（前台展示用）
   */
  RaidDisplay: string
  /**
   * 系统盘总大小（单位GiB）
   */
  SystemDiskSize: number
  /**
   * 系统盘/分区默认大小（单位GiB）
   */
  SysRootSpace: number
  /**
   * 系统盘swap分区默认大小（单位GiB）
   */
  SysSwaporuefiSpace: number
  /**
   * 系统盘/usr/local分区默认大小（单位GiB）
   */
  SysUsrlocalSpace: number
  /**
   * 系统盘/data分区默认大小（单位GiB）
   */
  SysDataSpace: number
  /**
   * 设备是否是uefi启动方式。0:legacy启动; 1:uefi启动
   */
  SysIsUefiType: number
  /**
   * 数据盘总大小
   */
  DataDiskSize: number
  /**
   * 硬盘列表
   */
  DeviceDiskSizeInfoSet: Array<DeviceDiskSizeInfo>
}

/**
 * DescribeTaskOperationLog请求参数结构体
 */
export interface DescribeTaskOperationLogRequest {
  /**
   * 维修任务ID
   */
  TaskId: string
  /**
   * 排序字段，目前支持：OperationTime
   */
  OrderField?: string
  /**
   * 排序方式 0:递增(默认) 1:递减
   */
  Order?: number
}

/**
 * DescribeDeviceOperationLog请求参数结构体
 */
export interface DescribeDeviceOperationLogRequest {
  /**
   * 设备实例ID
   */
  InstanceId: string
  /**
   * 查询开始日期
   */
  StartTime?: string
  /**
   * 查询结束日期
   */
  EndTime?: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 返回数量
   */
  Limit?: number
}

/**
 * DescribeOperationResult请求参数结构体
 */
export interface DescribeOperationResultRequest {
  /**
   * 异步任务ID
   */
  TaskId: number
}

/**
 * AttachCamRole返回参数结构体
 */
export interface AttachCamRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecoverDevices返回参数结构体
 */
export interface RecoverDevicesResponse {
  /**
   * 黑石异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachCamRole返回参数结构体
 */
export interface DetachCamRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ShutdownDevices请求参数结构体
 */
export interface ShutdownDevicesRequest {
  /**
   * 需要关闭的设备ID列表
   */
  InstanceIds: Array<string>
}

/**
 * UnbindPsaTag请求参数结构体
 */
export interface UnbindPsaTagRequest {
  /**
   * 预授权规则ID
   */
  PsaId: string
  /**
   * 需要解绑的标签key
   */
  TagKey: string
  /**
   * 需要解绑的标签value
   */
  TagValue: string
}

/**
 * ModifyCustomImageAttribute返回参数结构体
 */
export interface ModifyCustomImageAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 地域信息
 */
export interface RegionInfo {
  /**
   * 地域ID
   */
  Region: string
  /**
   * 地域整型ID
   */
  RegionId: number
  /**
   * 地域描述
   */
  RegionDescription: string
  /**
   * 该地域下的可用区信息
   */
  ZoneInfoSet: Array<ZoneInfo>
}

/**
 * 脚本信息
 */
export interface UserCmd {
  /**
   * 用户自定义脚本名
   */
  Alias: string
  /**
   * AppId
   */
  AppId: number
  /**
   * 脚本自增ID
   */
  AutoId: number
  /**
   * 脚本ID
   */
  CmdId: string
  /**
   * 脚本内容
   */
  Content: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 修改时间
   */
  ModifyTime: string
  /**
   * 命令适用的操作系统类型
   */
  OsType: string
}

/**
 * 镜像制作进度列表
 */
export interface CustomImageProcess {
  /**
   * 步骤
   */
  StepName: string
  /**
   * 此步骤开始时间
   */
  StartTime: string
  /**
   * 0: 已完成 1: 当前进行 2: 未开始
   */
  StepType: number
}

/**
 * CreateSpotDevice请求参数结构体
 */
export interface CreateSpotDeviceRequest {
  /**
   * 可用区名称。如ap-guangzhou-bls-1, 通过DescribeRegions获取
   */
  Zone: string
  /**
   * 计算单元类型, 如v3.c2.medium，更详细的ComputeType参考[竞价实例产品文档](https://cloud.tencent.com/document/product/386/30256)
   */
  ComputeType: string
  /**
   * 操作系统类型ID
   */
  OsTypeId: number
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 购买的计算单元个数
   */
  GoodsNum: number
  /**
   * 出价策略。可取值为SpotWithPriceLimit和SpotAsPriceGo。SpotWithPriceLimit，用户设置价格上限，需要传SpotPriceLimit参数， 如果市场价高于用户的指定价格，则购买不成功;  SpotAsPriceGo 是随市场价的策略。
   */
  SpotStrategy: string
  /**
   * 用户设置的价格。当为SpotWithPriceLimit竞价策略时有效
   */
  SpotPriceLimit?: number
  /**
   * 设置竞价实例密码。可选参数，没有指定会生成随机密码
   */
  Passwd?: string
}

/**
 * 操作系统类型
 */
export interface OsInfo {
  /**
   * 操作系统ID
   */
  OsTypeId: number
  /**
   * 操作系统名称
   */
  OsName: string
  /**
   * 操作系统名称描述
   */
  OsDescription: string
  /**
   * 操作系统英文名称
   */
  OsEnglishDescription: string
  /**
   * 操作系统的分类，如CentOs Debian
   */
  OsClass: string
  /**
   * 标识镜像分类。public:公共镜像; private: 专属镜像
   */
  ImageTag: string
  /**
   * 操作系统，ext4文件下所支持的最大的磁盘大小。单位为T
   */
  MaxPartitionSize: number
  /**
   * 黑石版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsMinorVersion: string
  /**
   * 黑石版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsMinorClass: string
}

/**
 * CreateUserCmd请求参数结构体
 */
export interface CreateUserCmdRequest {
  /**
   * 用户自定义脚本的名称
   */
  Alias: string
  /**
   * 命令适用的操作系统类型，取值linux或xserver
   */
  OsType: string
  /**
   * 脚本内容，必须经过base64编码
   */
  Content: string
}

/**
 * ReturnDevices返回参数结构体
 */
export interface ReturnDevicesResponse {
  /**
   * 黑石异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindPsaTag返回参数结构体
 */
export interface BindPsaTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostedDeviceOutBandInfo返回参数结构体
 */
export interface DescribeHostedDeviceOutBandInfoResponse {
  /**
   * 托管设备带外信息
   */
  HostedDeviceOutBandInfoSet?: Array<HostedDeviceOutBandInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务器价格信息
 */
export interface DevicePriceInfo {
  /**
   * 物理机ID
   */
  InstanceId: string
  /**
   * 设备型号
   */
  DeviceClassCode: string
  /**
   * 是否是弹性机型，1：是，0：否
   */
  IsElastic: number
  /**
   * 付费模式ID, 1:预付费; 2:后付费; 3:预付费转后付费中
   */
  CpmPayMode: number
  /**
   * Cpu信息描述
   */
  CpuDescription: string
  /**
   * 内存信息描述
   */
  MemDescription: string
  /**
   * 硬盘信息描述
   */
  DiskDescription: string
  /**
   * 网卡信息描述
   */
  NicDescription: string
  /**
   * Gpu信息描述
   */
  GpuDescription: string
  /**
   * Raid信息描述
   */
  RaidDescription: string
  /**
   * 客户的单价
   */
  Price: number
  /**
   * 刊例单价
   */
  NormalPrice: number
  /**
   * 原价
   */
  TotalCost: number
  /**
   * 折扣价
   */
  RealTotalCost: number
  /**
   * 计费时长
   */
  TimeSpan: number
  /**
   * 计费时长单位, M:按月计费; D:按天计费
   */
  TimeUnit: string
  /**
   * 商品数量
   */
  GoodsCount: number
}

/**
 * RebootDevices请求参数结构体
 */
export interface RebootDevicesRequest {
  /**
   * 需要重启的设备ID列表
   */
  InstanceIds: Array<string>
}

/**
 * DeleteCustomImages返回参数结构体
 */
export interface DeleteCustomImagesResponse {
  /**
   * 黑石异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit: number
  /**
   * 机型ID，通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)查询
   */
  DeviceClassCode?: string
  /**
   * 设备ID数组
   */
  InstanceIds?: Array<string>
  /**
   * 外网IP数组
   */
  WanIps?: Array<string>
  /**
   * 内网IP数组
   */
  LanIps?: Array<string>
  /**
   * 设备名称
   */
  Alias?: string
  /**
   * 模糊IP查询
   */
  VagueIp?: string
  /**
   * 设备到期时间查询的起始时间
   */
  DeadlineStartTime?: string
  /**
   * 设备到期时间查询的结束时间
   */
  DeadlineEndTime?: string
  /**
   * 自动续费标志 0:不自动续费，1:自动续费
   */
  AutoRenewFlag?: number
  /**
   * 私有网络唯一ID
   */
  VpcId?: string
  /**
   * 子网唯一ID
   */
  SubnetId?: string
  /**
   * 标签列表
   */
  Tags?: Array<Tag>
  /**
   * 设备类型，取值有: compute(计算型), standard(标准型), storage(存储型) 等
   */
  DeviceType?: string
  /**
   * 竞价实例机器的过滤。如果未指定此参数，则不做过滤。0: 查询非竞价实例的机器; 1: 查询竞价实例的机器。
   */
  IsLuckyDevice?: number
  /**
   * 排序字段
   */
  OrderField?: string
  /**
   * 排序方式，取值：0:增序(默认)，1:降序
   */
  Order?: number
  /**
   * 按照维保方式过滤。可取值为 Maintain: 在保;  WillExpire: 即将过保; Expire: 已过保
   */
  MaintainStatus?: string
}

/**
 * DescribeHardwareSpecification返回参数结构体
 */
export interface DescribeHardwareSpecificationResponse {
  /**
   * CPU型号列表
   */
  CpuInfoSet?: Array<CpuInfo>
  /**
   * 内存的取值，单位为G
   */
  MemSet?: Array<number | bigint>
  /**
   * 硬盘型号列表
   */
  DiskInfoSet?: Array<DiskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePsaRegulation返回参数结构体
 */
export interface CreatePsaRegulationResponse {
  /**
   * 创建的预授权规则ID
   */
  PsaId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCustomImageProcess返回参数结构体
 */
export interface DescribeCustomImageProcessResponse {
  /**
   * 镜像制作进度
   */
  CustomImageProcessSet?: Array<CustomImageProcess>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceHardwareInfo请求参数结构体
 */
export interface DescribeDeviceHardwareInfoRequest {
  /**
   * 设备 ID 列表
   */
  InstanceIds: Array<string>
}

/**
 * DescribeDeviceOperationLog返回参数结构体
 */
export interface DescribeDeviceOperationLogResponse {
  /**
   * 操作日志列表
   */
  DeviceOperationLogSet?: Array<DeviceOperationLog>
  /**
   * 返回数目
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RepairTaskControl请求参数结构体
 */
export interface RepairTaskControlRequest {
  /**
   * 维修任务ID
   */
  TaskId: string
  /**
   * 操作
   */
  Operate: string
  /**
   * 需要重新维修操作的备注信息，可提供返场维修原因，以便驻场快速针对问题定位解决。
   */
  OperateRemark?: string
}

/**
 * 物理机机架信息
 */
export interface DevicePositionInfo {
  /**
   * 设备ID
   */
  InstanceId: string
  /**
   * 所在可用区
   */
  Zone: string
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 业务IP
   */
  LanIp: string
  /**
   * 实例别名
   */
  Alias: string
  /**
   * 机架名称
   */
  RckName: string
  /**
   * 机位
   */
  PosCode: number
  /**
   * 交换机名称
   */
  SwitchName: string
  /**
   * 设备交付时间
   */
  DeliverTime: string
  /**
   * 过期时间
   */
  Deadline: string
}

/**
 * 物理机信息
 */
export interface DeviceInfo {
  /**
   * 设备唯一ID
   */
  InstanceId: string
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 设备状态ID，取值：<li>1：申领设备中</li><li>2：初始化中</li><li>4：运营中</li><li>7：隔离中</li><li>8：已隔离</li><li>10：解隔离中</li><li>16：故障中</li>
   */
  DeviceStatus: number
  /**
   * 设备操作状态ID，取值：
<li>1：运行中</li><li>2：正在关机</li><li>3：已关机</li><li>5：正在开机</li><li>7：重启中</li><li>9：重装中</li><li>12：绑定EIP</li><li>13：解绑EIP</li><li>14：绑定LB</li><li>15：解绑LB</li><li>19：更换IP中</li><li>20：制作镜像中</li><li>21：制作镜像失败</li><li>23：故障待重装</li><li>24：无备件待退回</li>
   */
  OperateStatus: number
  /**
   * 操作系统ID，参考接口[查询操作系统信息(DescribeOsInfo)](https://cloud.tencent.com/document/product/386/32902)
   */
  OsTypeId: number
  /**
   * RAID类型ID，参考接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/product/386/32910)
   */
  RaidId: number
  /**
   * 设备别名
   */
  Alias: string
  /**
   * 用户AppId
   */
  AppId: number
  /**
   * 可用区
   */
  Zone: string
  /**
   * 外网IP
   */
  WanIp: string
  /**
   * 内网IP
   */
  LanIp: string
  /**
   * 设备交付时间
   */
  DeliverTime: string
  /**
   * 设备到期时间
   */
  Deadline: string
  /**
   * 自动续费标识。0: 不自动续费; 1:自动续费
   */
  AutoRenewFlag: number
  /**
   * 设备类型
   */
  DeviceClassCode: string
  /**
   * 标签列表
   */
  Tags: Array<Tag>
  /**
   * 计费模式。1: 预付费; 2: 后付费; 3:预付费转后付费中
   */
  CpmPayMode: number
  /**
   * 带外IP
   */
  DhcpIp: string
  /**
   * 所在私有网络别名
   */
  VpcName: string
  /**
   * 所在子网别名
   */
  SubnetName: string
  /**
   * 所在私有网络CIDR
   */
  VpcCidrBlock: string
  /**
   * 所在子网CIDR
   */
  SubnetCidrBlock: string
  /**
   * 标识是否是竞价实例。0: 普通设备; 1: 竞价实例设备
   */
  IsLuckyDevice: number
  /**
   * 标识机器维保状态。Maintain: 在保;  WillExpire: 即将过保; Expire: 已过保
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaintainStatus: string
  /**
   * 维保信息描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaintainMessage: string
}

/**
 * ResetDevicePassword返回参数结构体
 */
export interface ResetDevicePasswordResponse {
  /**
   * 黑石异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserCmdTasks请求参数结构体
 */
export interface DescribeUserCmdTasksRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 数量限制
   */
  Limit: number
  /**
   * 排序字段，支持： RunBeginTime,RunEndTime,InstanceCount,SuccessCount,FailureCount
   */
  OrderField?: string
  /**
   * 排序方式，取值: 1倒序，0顺序；默认倒序
   */
  Order?: number
}

/**
 * DetachCamRole请求参数结构体
 */
export interface DetachCamRoleRequest {
  /**
   * 服务器ID
   */
  InstanceId: string
}

/**
 * DescribeDeviceClassPartition返回参数结构体
 */
export interface DescribeDeviceClassPartitionResponse {
  /**
   * 支持的RAID格式列表
   */
  DeviceClassPartitionInfoSet?: Array<DeviceClassPartitionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
