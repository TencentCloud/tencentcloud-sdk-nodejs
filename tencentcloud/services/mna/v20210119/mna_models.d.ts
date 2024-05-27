/**
 * 设备流量信息
 */
export interface FlowDetails {
    /**
     * 流量数据点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetDetails?: Array<NetDetails>;
    /**
     * 设备ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId?: string;
    /**
     * 流量最大值（单位：bytes）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxValue?: number;
    /**
     * 流量平均值（单位：bytes）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvgValue?: number;
    /**
     * 流量总值（单位：bytes）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalValue?: number;
}
/**
 * GetDevice返回参数结构体
 */
export interface GetDeviceResponse {
    /**
     * 设备详细信息
     */
    DeviceDetails?: DeviceDetails;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetDevicePayMode请求参数结构体
 */
export interface GetDevicePayModeRequest {
    /**
     * 设备ID列表
     */
    DeviceIdList: Array<string>;
}
/**
 * 接口能力扩展，用于填充电信的加速Token，并为未来参数提供兼容空间
 */
export interface Capacity {
    /**
     * 电信鉴权的Token。要加速的电信手机终端访问 http://qos.189.cn/qos-api/getToken?appid=TencentCloud 页面，获取返回结果中result的值
     */
    CTCCToken?: string;
    /**
     * 终端所处在的省份，建议不填写由服务端自动获取，若需填写请填写带有省、市、自治区、特别行政区等后缀的省份中文全称
     */
    Province?: string;
}
/**
 * GetFlowAlarmInfo返回参数结构体
 */
export interface GetFlowAlarmInfoResponse {
    /**
     * 流量包的告警阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmValue?: number;
    /**
     * 告警通知回调url
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NotifyUrl?: string;
    /**
     * 告警通知回调key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CallbackKey?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 多网聚合加速目标地址结构体
 */
export interface DestAddressInfo {
    /**
     * 加速业务目标 ip 地址数组
     */
    DestIp: Array<string>;
}
/**
 * GetNetMonitor返回参数结构体
 */
export interface GetNetMonitorResponse {
    /**
     * 监控数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorData?: Array<MonitorData>;
    /**
     * 接入区域。取值范围：['MC','AP','EU','AM']
  MC=中国大陆
  AP=亚太
  EU=欧洲
  AM=美洲
     */
    AccessRegion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 网卡流量指标数据
 */
export interface SlotNetInfo {
    /**
     * 网卡名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetInfoName: string;
    /**
     * 公网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIP: string;
    /**
     * 指标数据（bps/ms/%）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Current: number;
}
/**
 * DeleteQos请求参数结构体
 */
export interface DeleteQosRequest {
    /**
     * 单次加速唯一 Id
     */
    SessionId: string;
}
/**
 * GetNetMonitor请求参数结构体
 */
export interface GetNetMonitorRequest {
    /**
     * 设备id
     */
    DeviceId: string;
    /**
     * 开始时间
     */
    BeginTime: number;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 统计指标（上行速率："TxRate":bit/s，下行速率："RxRate":bit/s，丢包："Loss":%，时延："RTT":ms）
     */
    Metrics: string;
    /**
     * 网关类型。0：公有云网关；1：自有网关。不传默认为0。
     */
    GatewayType?: number;
}
/**
 * OrderFlowPackage请求参数结构体
 */
export interface OrderFlowPackageRequest {
    /**
     * 流量包规格类型。可取值如下：
  DEVICE_1_FLOW_20G、DEVICE_2_FLOW_50G、
  DEVICE_3_FLOW_100G、
  DEVICE_5_FLOW_500G，分别代表20G、50G、100G、500G档位的流量包。
  档位也影响流量包可绑定的设备数量上限：
  20G：最多绑定1个设备
  50G：最多绑定2个设备
  100G：最多绑定3个设备
  500G：最多绑定5个设备
     */
    PackageType: string;
    /**
     * 流量包绑定的设备ID列表。捆绑设备个数上限取决于包的规格档位：
  20G：最多绑定1个设备
  50G：最多绑定2个设备
  100G：最多绑定3个设备
  500G：最多绑定5个设备
     */
    DeviceList: Array<string>;
    /**
     * 是否自动续费，该选项和流量截断冲突，只能开启一个
     */
    AutoRenewFlag: boolean;
    /**
     * 区域标识，0：国内，1：国外
     */
    PackageRegion: number;
    /**
     * 是否开启流量截断功能，该选项和自动续费冲突
     */
    FlowTruncFlag?: boolean;
    /**
     * 是否自动选择代金券，默认false。
  有多张券时的选择策略：按照可支付订单全部金额的券，先到期的券，可抵扣金额最大的券，余额最小的券，现金券 这个优先级进行扣券，且最多只抵扣一张券。
     */
    AutoVoucher?: boolean;
    /**
     * 指定代金券ID。自动选择代金券时此参数无效。目前只允许传入一张代金券。
  注：若指定的代金券不符合订单抵扣条件，则正常支付，不扣券
     */
    VoucherIds?: Array<string>;
}
/**
 * GetMultiFlowStatistic返回参数结构体
 */
export interface GetMultiFlowStatisticResponse {
    /**
     * 批量设备流量信息
     */
    FlowDetails?: Array<FlowDetails>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 厂商硬件详细信息
 */
export interface VendorHardware {
    /**
     * 硬件id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HardwareId?: string;
    /**
     * 硬件序列号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SN?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 激活状态， 空：全部； 1:待激活； 2:已激活
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 激活时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActiveTime?: string;
    /**
     * 厂商备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 设备id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId?: string;
    /**
     * license计费模式： 1，租户月付费 2，厂商月付费 3，license永久授权
  注：设备为租户付费且未激活（未选择月付还是永久付费）时，此参数返回1，仅代表租户付费。后续将废弃此参数，新接入请使用LicensePayMode和Payer
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LicenseChargingMode?: number;
    /**
     * 最后在线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastOnlineTime?: string;
    /**
     * license授权有效期
  0：月度授权
  1：永久授权
  -1：未知
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LicensePayMode?: number;
    /**
     * 付费方
  0：客户付费
  1：厂商付费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Payer?: number;
}
/**
 * 设备网络状态信息
 */
export interface DeviceNetInfo {
    /**
     * 网络类型：
  0:数据
  1:Wi-Fi
  2:有线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: number;
    /**
     * 启用/禁用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataEnable: boolean;
    /**
     * 上行限速
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UploadLimit: string;
    /**
     * 下行限速
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadLimit: string;
    /**
     * 接收实时速率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataRx: number;
    /**
     * 发送实时速率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataTx: number;
    /**
     * 运营商类型：
  1: 中国移动；
  2: 中国电信;
  3: 中国联通
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vendor: number;
    /**
     * 连接状态：
  0:无连接
  1:连接中
  2:已连接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State: number;
    /**
     * 公网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIp: string;
    /**
     * 信号强度/单位：dbm
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SignalStrength: number;
    /**
     * 数据网络类型：
  -1 ：无效值
  2：2G
  3：3G
  4：4G
  5：5G
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rat: number;
    /**
     * 网卡名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetInfoName: string;
    /**
     * 下行实时速率（浮点数类型代替上一版本DataRx的整型）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownRate?: number;
    /**
     * 上行实时速率（浮点数类型代替上一版本TxRate的整型）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpRate?: number;
}
/**
 * GetFlowStatistic返回参数结构体
 */
export interface GetFlowStatisticResponse {
    /**
     * 流量详细信息
     */
    NetDetails?: Array<NetDetails>;
    /**
     * 查找时间段流量使用最大值（单位：byte）
     */
    MaxValue?: number;
    /**
     * 查找时间段流量使用平均值（单位：byte）
     */
    AvgValue?: number;
    /**
     * 查找时间段流量使用总量（单位：byte）
     */
    TotalValue?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 移动网络加速源地址结构体
 */
export interface SrcAddressInfo {
    /**
     * 用户私网 ipv4 地址
     */
    SrcIpv4?: string;
    /**
     * 用户公网 ipv4 地址
     */
    SrcPublicIpv4?: string;
    /**
     * 用户 ipv6 地址
     */
    SrcIpv6?: string;
}
/**
 * GetFlowAlarmInfo请求参数结构体
 */
export declare type GetFlowAlarmInfoRequest = null;
/**
 * CreateQos返回参数结构体
 */
export interface CreateQosResponse {
    /**
     * 单次加速唯一 Id
     */
    SessionId?: string;
    /**
     * 当前加速剩余时长（单位秒）
     */
    Duration?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeQos返回参数结构体
 */
export interface DescribeQosResponse {
    /**
     * 0：无匹配的加速中会话
  1：存在匹配的加速中会话
     */
    Status: number;
    /**
     * 手机公网出口IP，仅匹配时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SrcPublicIpv4: string;
    /**
     * 业务访问目的IP，仅匹配时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DestIpv4: Array<string>;
    /**
     * 当前加速剩余时长（单位秒）有，仅匹配时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Duration: number;
    /**
     * 加速套餐类型，仅匹配时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QosMenu: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetVendorHardware请求参数结构体
 */
export interface GetVendorHardwareRequest {
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 页面数量
     */
    PageSize: number;
    /**
     * 关键字
     */
    Keyword?: string;
    /**
     * 激活状态，
  空：全部；
  1:待激活；
  2:已激活；
     */
    Status?: number;
}
/**
 * CreateEncryptedKey请求参数结构体
 */
export declare type CreateEncryptedKeyRequest = null;
/**
 * 激活设备
 */
export interface ActivateHardware {
    /**
     * 厂商名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vendor: string;
    /**
     * 设备SN序列号
     */
    SN: string;
    /**
     * 设备名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceName: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 设备密钥
     */
    DataKey?: string;
    /**
     * 接入环境。0：公有云网关；1：自有网关；2：公有云网关和自有网关。不填默认公有云网关。 具体含义： 公有云网关：即该设备只能接入公有云网关（就近接入） 自有网关：即该设备只能接入已经注册上线的自有网关（就近接入或固定ip接入） 公有云网关和自有网关：即该设备同时可以接入公有云网关和已经注册上线的自有网关（就近接入或固定ip接入）
     */
    AccessScope?: number;
    /**
     * 当付费方为租户时，可选择租户license付费方式：
  0，月度授权
  1，永久授权
  若不传则默认为月度授权。
  当付费方为厂商时，此参数无效
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LicensePayMode?: number;
    /**
     * 设备分组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 设备分组名称，预留参数，需要分组时传入GroupId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
}
/**
 * DeleteDevice请求参数结构体
 */
export interface DeleteDeviceRequest {
    /**
     * 删除设备的唯一ID
     */
    DeviceId: string;
}
/**
 * GetFlowPackages请求参数结构体
 */
export interface GetFlowPackagesRequest {
    /**
     * 页码，从1开始
     */
    PageNumber: number;
    /**
     * 每页个数
     */
    PageSize: number;
    /**
     * 流量包的唯一资源ID
     */
    ResourceId?: string;
    /**
     * 流量包绑定的设备ID
     */
    DeviceId?: string;
    /**
     * 流量包状态，0：未生效，1：有效期内，2：已过期
  
     */
    Status?: number;
}
/**
 * GetHardwareList请求参数结构体
 */
export interface GetHardwareListRequest {
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 页面设备数量
     */
    PageSize: number;
    /**
     * 关键字
     */
    Keyword?: string;
}
/**
 * CreateEncryptedKey返回参数结构体
 */
export interface CreateEncryptedKeyResponse {
    /**
     * 预置密钥
     */
    EncryptedKey: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * OrderFlowPackage返回参数结构体
 */
export interface OrderFlowPackageResponse {
    /**
     * 流量包的唯一资源ID
     */
    ResourceId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateDevice返回参数结构体
 */
export interface UpdateDeviceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyPackageRenewFlag请求参数结构体
 */
export interface ModifyPackageRenewFlagRequest {
    /**
     * 流量包的唯一资源ID
     */
    ResourceId: string;
    /**
     * 自动续费标识。true代表自动续费，false代表不自动续费
     */
    RenewFlag: boolean;
}
/**
 * 设备详细信息
 */
export interface DeviceDetails {
    /**
     * 设备基本信息
     */
    DeviceBaseInfo?: DeviceBaseInfo;
    /**
     * 设备网络信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceNetInfo?: Array<DeviceNetInfo>;
    /**
     * 聚合服务器地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewaySite?: string;
    /**
     * 业务下行速率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessDownRate?: number;
    /**
     * 业务上行速率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessUpRate?: number;
}
/**
 * CreateQos请求参数结构体
 */
export interface CreateQosRequest {
    /**
     * 加速业务源地址信息，SrcIpv6和（SrcIpv4+SrcPublicIpv4）二选一，目前Ipv6不可用，全部填写以Ipv4参数为准。
     */
    SrcAddressInfo: SrcAddressInfo;
    /**
     * 加速业务目标地址信息
     */
    DestAddressInfo: DestAddressInfo;
    /**
     * 加速套餐
  T100K：时延性保障 + 带宽保障上下行保障 100kbps
  T200K：时延性保障 + 带宽保障上下行保障 200kbps
  T400K：时延性保障 + 带宽保障上下行保障  400kbps
  BD1M：带宽型保障 + 下行带宽保障1Mbps
  BD2M：带宽型保障 + 下行带宽保障2Mbps
  BD4M：带宽型保障 + 下行带宽保障4Mbps
  BU1M：带宽型保障 + 上行带宽保障1Mbps
  BU2M：带宽型保障 + 上行带宽保障2Mbps
  BU4M：带宽型保障 + 上行带宽保障4Mbps
     */
    QosMenu: string;
    /**
     * 申请加速的设备信息，包括运营商，操作系统，设备唯一标识等。
     */
    DeviceInfo?: DeviceInfo;
    /**
     * 期望加速时长（单位分钟），默认值30分钟
     */
    Duration?: number;
    /**
     * 接口能力扩展，如果是电信用户，必须填充CTCC Token字段
     */
    Capacity?: Capacity;
    /**
     * 应用模板ID
     */
    TemplateId?: string;
    /**
     * 针对特殊协议进行加速
  1. IP （默认值）
  2. UDP
  3. TCP
     */
    Protocol?: number;
    /**
     * 加速策略关键数据
     */
    Context?: Context;
    /**
     * 签名
     */
    Extern?: string;
}
/**
 * GetStatisticData请求参数结构体
 */
export interface GetStatisticDataRequest {
    /**
     * 设备ID。若不指定设备，可传"-1"
     */
    DeviceId: string;
    /**
     * 统计开始时间，单位：s
     */
    BeginTime: number;
    /**
     * 统计结束时间，单位：s
     */
    EndTime: number;
    /**
     * 聚合粒度：
  1:按小时统计
  2:按天统计
     */
    TimeGranularity: number;
    /**
     * 接入区域。取值范围：['MC','AP','EU','AM'] MC=中国大陆 AP=亚太 EU=欧洲 AM=美洲。不填代表全量区域。
     */
    AccessRegion?: string;
    /**
     * 网关类型。0：公有云网关；1：自有网关。不传默认为0。
     */
    GatewayType?: number;
    /**
     * 设备ID列表，最多10个设备，下载多个设备流量和时使用，此时DeviceId可传"-1"
     */
    DeviceList?: Array<string>;
    /**
     * 设备分组ID，若不指定分组则不传，按分组下载数据时使用
     */
    GroupId?: string;
}
/**
 * GetFlowPackages返回参数结构体
 */
export interface GetFlowPackagesResponse {
    /**
     * 流量包列表
     */
    PackageList?: Array<FlowPackageInfo>;
    /**
     * 总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetVendorHardware返回参数结构体
 */
export interface GetVendorHardwareResponse {
    /**
     * 硬件信息列表
     */
    VendorHardware?: Array<VendorHardware>;
    /**
     * 设备总数
     */
    Length?: number;
    /**
     * 总页数
     */
    TotalPage?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateDevice请求参数结构体
 */
export interface UpdateDeviceRequest {
    /**
     * 设备id
     */
    DeviceId: string;
    /**
     * 设备名称
     */
    DeviceName?: string;
    /**
     * 设备备注
     */
    Remark?: string;
    /**
     * 更新设备网络信息
     */
    UpdateNetInfo?: Array<UpdateNetInfo>;
}
/**
 * GetPublicKey返回参数结构体
 */
export interface GetPublicKeyResponse {
    /**
     * 非对称公钥
     */
    PublicKey: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetFlowStatistic请求参数结构体
 */
export interface GetFlowStatisticRequest {
    /**
     * 设备ID
     */
    DeviceId: string;
    /**
     * 开始查找时间
     */
    BeginTime: number;
    /**
     * 截止时间
     */
    EndTime: number;
    /**
     * 流量种类（1：上行流量，2：下行流量，3：上下行总和）
     */
    Type: number;
    /**
     * 时间粒度（1：按小时统计，2：按天统计）
     */
    TimeGranularity: number;
    /**
     * 接入区域。取值范围：['MC','AP','EU','AM'] MC=中国大陆 AP=亚太 EU=欧洲 AM=美洲。不填代表全量区域。
     */
    AccessRegion?: string;
    /**
     * 网关类型。0：公有云网关；1：自有网关。不传默认为0。
     */
    GatewayType?: number;
    /**
     * 设备ID列表，用于查询多设备流量，该字段启用时DeviceId可传"-1"
     */
    DeviceList?: Array<string>;
}
/**
 * ActivateHardware请求参数结构体
 */
export interface ActivateHardwareRequest {
    /**
     * 待激活的设备列表
     */
    Hardware: Array<ActivateHardware>;
}
/**
 * AddHardware返回参数结构体
 */
export interface AddHardwareResponse {
    /**
     * 硬件设备
     */
    Hardware?: Array<Hardware>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyPackageRenewFlag返回参数结构体
 */
export interface ModifyPackageRenewFlagResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetMultiFlowStatistic请求参数结构体
 */
export interface GetMultiFlowStatisticRequest {
    /**
     * 设备id列表，单次最多请求10个设备
     */
    DeviceIds: Array<string>;
    /**
     * 1659514436
     */
    BeginTime: number;
    /**
     * 1659515000
     */
    EndTime: number;
    /**
     * 统计流量类型（1：上行流量，2：下行流量， 3: 上下行总和）
     */
    Type: number;
    /**
     * 统计时间粒度（1：按小时统计，2：按天统计）
     */
    TimeGranularity: number;
    /**
     * 接入区域。取值范围：['MC','AP','EU','AM'] MC=中国大陆 AP=亚太 EU=欧洲 AM=美洲。不填代表全量区域。
     */
    AccessRegion?: string;
    /**
     * 网关类型。0：公有云网关；1：自有网关。不传默认为0。
     */
    GatewayType?: number;
}
/**
 * 设备的基本信息
 */
export interface DeviceBaseInfo {
    /**
     * 设备唯一ID
     */
    DeviceId?: string;
    /**
     * 设备名称
     */
    DeviceName?: string;
    /**
     * 设备创建的时间，单位：ms
     */
    CreateTime?: string;
    /**
     * 设备最后在线时间，单位：ms
     */
    LastTime?: string;
    /**
     * 设备的备注
     */
    Remark?: string;
    /**
     * 接入环境。0：公有云网关；1：自有网关；2：公有云网关和自有网关。默认公有云网关。 具体含义： 公有云网关：即该设备只能接入公有云网关（就近接入） 自有网关：即该设备只能接入已经注册上线的自有网关（就近接入或固定ip接入） 公有云网关和自有网关：即该设备同时可以接入公有云网关和已经注册上线的自有网关（就近接入或固定ip接入）
     */
    AccessScope?: number;
    /**
     * license授权有效期 0：月度授权 1：永久授权
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LicensePayMode?: number;
    /**
     * 付费方 0：厂商付费 1：客户付费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Payer?: number;
    /**
     * 设备分组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 设备分组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
}
/**
 * 用户期望门限
 */
export interface ExpectedThreshold {
    /**
     * 期望发起加速的时延阈值
     */
    RTT: number;
    /**
     * 期望发起加速的丢包率阈值
     */
    Loss: number;
    /**
     * 期望发起加速的抖动阈值
     */
    Jitter: number;
}
/**
 * DeleteQos返回参数结构体
 */
export interface DeleteQosResponse {
    /**
     * 单次加速唯一 Id
     */
    SessionId: string;
    /**
     * 本次加速会话持续时间（单位秒）
     */
    Duration: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 加速策略关键数据
 */
export interface Context {
    /**
     * 测速数据
     */
    NetworkData?: NetworkData;
    /**
     * 用户期望最低门限
     */
    ExpectedLowThreshold?: ExpectedThreshold;
    /**
     * 用户期望最高门限
     */
    ExpectedHighThreshold?: ExpectedThreshold;
}
/**
 * AddDevice返回参数结构体
 */
export interface AddDeviceResponse {
    /**
     * 经过加密算法加密后的base64格式密钥
     */
    DataKey?: string;
    /**
     * 设备ID
     */
    DeviceId?: string;
    /**
     * 签名字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Signature?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetDevicePayMode返回参数结构体
 */
export interface GetDevicePayModeResponse {
    /**
     * 结果信息
     */
    Result?: Array<DevicePayModeInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetDevice请求参数结构体
 */
export interface GetDeviceRequest {
    /**
     * 搜索指定设备的id
     */
    DeviceId: string;
}
/**
 * ActivateHardware返回参数结构体
 */
export interface ActivateHardwareResponse {
    /**
     * 完成激活的设备信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HardwareInfo?: Array<ActivateHardware>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 网络详细信息
 */
export interface NetDetails {
    /**
     * 流量值（byte）
     */
    Current?: number;
    /**
     * 时间点，单位：s
     */
    Time?: string;
}
/**
 * UpdateHardware返回参数结构体
 */
export interface UpdateHardwareResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetFlowStatisticByGroup请求参数结构体
 */
export interface GetFlowStatisticByGroupRequest {
    /**
     * 分组ID
     */
    GroupId: string;
    /**
     * 开始查找时间
     */
    BeginTime: number;
    /**
     * 截止时间
     */
    EndTime: number;
    /**
     * 流量种类（1：上行流量，2：下行流量， 3: 上下行总和）
     */
    Type: number;
    /**
     * 时间粒度（1：按小时统计，2：按天统计）
     */
    TimeGranularity: number;
    /**
     * 接入区域。取值范围：['MC','AP','EU','AM'] MC=中国大陆 AP=亚太 EU=欧洲 AM=美洲。不填代表全量区域。
     */
    AccessRegion?: string;
    /**
     * 网关类型。0：公有云网关；1：自有网关。不传默认为0。
     */
    GatewayType?: number;
}
/**
 * 硬件信息
 */
export interface HardwareInfo {
    /**
     * 设备ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId?: string;
    /**
     * 设备名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceName?: string;
    /**
     * 激活时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActiveTime?: string;
    /**
     * 最后在线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastOnlineTime?: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 厂商备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VendorDescription?: string;
    /**
     * license计费模式： 1，租户月付费 2，厂商月付费 3，license永久授权
  注：后续将废弃此参数，新接入请使用LicensePayMode和Payer
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LicenseChargingMode?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 硬件序列号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SN?: string;
    /**
     * license授权有效期
  0：月度授权
  1：永久授权
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LicensePayMode?: number;
    /**
     * 付费方
  0：客户付费
  1：厂商付费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Payer?: number;
    /**
     * 设备分组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 设备分组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
}
/**
 * GetDevices返回参数结构体
 */
export interface GetDevicesResponse {
    /**
     * 设备信息列表
     */
    DeviceInfos?: Array<DeviceBaseInfo>;
    /**
     * 设备总记录条数
     */
    Length?: number;
    /**
     * 总页数
     */
    TotalPage?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeQos请求参数结构体
 */
export interface DescribeQosRequest {
    /**
     * 单次加速唯一 Id
     */
    SessionId: string;
}
/**
 * 设备付费模式信息
 */
export interface DevicePayModeInfo {
    /**
     * 设备ID
     */
    DeviceId?: string;
    /**
     * 付费模式。
  1：预付费流量包
  0：按流量后付费
     */
    PayMode?: number;
    /**
     * 付费模式描述
     */
    PayModeDesc?: string;
    /**
     * 流量包ID，仅当付费模式为流量包类型时才有。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
}
/**
 * 流量监控指标
 */
export interface MonitorData {
    /**
     * 时间点：s
     */
    Time: string;
    /**
     * 业务指标（bps/ms/%）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessMetrics: number;
    /**
     * 网卡状态信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlotNetInfo: Array<SlotNetInfo>;
}
/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetStatisticData返回参数结构体
 */
export interface GetStatisticDataResponse {
    /**
     * 文件地址url
     */
    FilePath?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设备信息结构体
 */
export interface DeviceInfo {
    /**
     * 运营商
  1：移动
  2：电信
  3：联通
  4：广电
  99：其他
     */
    Vendor?: number;
    /**
     * 设备操作系统：
  1：Android
  2： IOS
  99：其他
     */
    OS?: number;
    /**
     * 设备唯一标识
  IOS 填写 IDFV
  Android 填写 IMEI
     */
    DeviceId?: string;
    /**
     * 用户手机号码
     */
    PhoneNum?: string;
    /**
     * 无线信息
  1：4G
  2：5G
  3：WIFI
  99：其他
     */
    Wireless?: number;
}
/**
 * AddHardware请求参数结构体
 */
export interface AddHardwareRequest {
    /**
     * 硬件列表
     */
    Hardware: Array<Hardware>;
}
/**
 * GetFlowStatisticByGroup返回参数结构体
 */
export interface GetFlowStatisticByGroupResponse {
    /**
     * 流量详细信息
     */
    NetDetails?: Array<NetDetails>;
    /**
     * 查找时间段流量使用最大值（单位：byte）
     */
    MaxValue?: number;
    /**
     * 查找时间段流量使用平均值（单位：byte）
     */
    AvgValue?: number;
    /**
     * 查找时间段流量使用总量（单位：byte）
     */
    TotalValue?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 新建Hardware入参
 */
export interface Hardware {
    /**
     * 硬件序列号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SN: string;
    /**
     * license计费模式：
  1，租户付费
  2，厂商月付费
  3，厂商永久授权
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LicenseChargingMode: number;
    /**
     * 设备描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 硬件ID，入参无需传递
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HardwareId?: string;
}
/**
 * GetDevices请求参数结构体
 */
export interface GetDevicesRequest {
    /**
     * 每页显示记录数，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备
     */
    PageSize: number;
    /**
     * 当前查看页码，PageSize、PageNumber值均为-1 时，按照1页无限制条数匹配所有设备
     */
    PageNumber: number;
    /**
     * 搜索设备的关键字（ID或者设备名），为空时匹配所有设备
     */
    Keyword?: string;
    /**
     * DeviceType
  不传：返回所有设备；
  1:自有设备；
  2:三方设备
     */
    DeviceType?: number;
}
/**
 * 流量包信息
 */
export interface FlowPackageInfo {
    /**
     * 流量包的唯一资源ID
     */
    ResourceId?: string;
    /**
     * 流量包所属的用户AppId
     */
    AppId?: number;
    /**
     * 流量包规格类型。可取值如下：
  DEVICE_1_FLOW_20G、DEVICE_2_FLOW_50G、
  DEVICE_3_FLOW_100G、
  DEVICE_5_FLOW_500G，分别代表20G、50G、100G、500G档位的流量包。
  档位也影响流量包可绑定的设备数量上限：
  20G：最多绑定1个设备
  50G：最多绑定2个设备
  100G：最多绑定3个设备
  500G：最多绑定5个设备
     */
    PackageType?: string;
    /**
     * 流量包状态，0：未生效，1：有效期内，2：已过期
     */
    Status?: number;
    /**
     * 购买时间，Unix时间戳格式，单位：秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 生效时间，Unix时间戳格式，单位：秒
     */
    ActiveTime?: number;
    /**
     * 过期时间，Unix时间戳格式，单位：秒
     */
    ExpireTime?: number;
    /**
     * 流量包绑定的设备ID列表
     */
    DeviceList?: Array<string>;
    /**
     * 流量包总容量，单位：MB
     */
    CapacitySize?: number;
    /**
     * 流量包余量，单位：MB
     */
    CapacityRemain?: number;
    /**
     * 自动续费标识。true代表自动续费，false代表不自动续费
     */
    RenewFlag?: boolean;
    /**
     * 资源包变更状态，0：未发生变配；1：变配中；2：已变配或已续费
     */
    ModifyStatus?: number;
    /**
     * 流量截断标识。true代表开启流量截断，false代表不开启流量截断
     */
    TruncFlag?: boolean;
    /**
     * 流量包精确余量，单位：MB
     */
    CapacityRemainPrecise?: number;
}
/**
 * GetHardwareList返回参数结构体
 */
export interface GetHardwareListResponse {
    /**
     * 硬件信息列表
     */
    HardwareInfos?: Array<HardwareInfo>;
    /**
     * 硬件总数
     */
    Length?: number;
    /**
     * 总页数
     */
    TotalPage?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 测速数据
 */
export interface NetworkData {
    /**
     * 时延数组，最大长度30
     */
    RTT: Array<number>;
    /**
     * 丢包率
     */
    Loss: number;
    /**
     * 抖动
     */
    Jitter: number;
    /**
     * 10位秒级时间戳
     */
    Timestamp: number;
}
/**
 * UpdateHardware请求参数结构体
 */
export interface UpdateHardwareRequest {
    /**
     * 硬件ID
     */
    HardwareId: string;
    /**
     * 硬件序列号
     */
    SN?: string;
    /**
     * 设备备注
     */
    Description?: string;
}
/**
 * AddDevice请求参数结构体
 */
export interface AddDeviceRequest {
    /**
     * 新建设备的名称
     */
    DeviceName: string;
    /**
     * 新建设备的备注
     */
    Remark?: string;
    /**
     * 新建设备的base64密钥字符串，非必选，如果不填写则由系统自动生成
     */
    DataKey?: string;
    /**
     * 是否设置预置密钥
     */
    Encrypted?: boolean;
    /**
     * 接入环境。0：公有云网关；1：自有网关；2：公有云网关和自有网关。不填默认公有云网关。
  具体含义：
  公有云网关：即该设备只能接入公有云网关（就近接入）
  自有网关：即该设备只能接入已经注册上线的自有网关（就近接入或固定ip接入）
  公有云网关和自有网关：即该设备同时可以接入公有云网关和已经注册上线的自有网关（就近接入或固定ip接入）
     */
    AccessScope?: number;
    /**
     * license付费方式：
  0，月度授权
  1，永久授权
  若不传则默认为月度授权
     */
    LicensePayMode?: number;
    /**
     * 设备分组名称，非必选，预留参数，需要分组时传入GroupId
     */
    GroupName?: string;
    /**
     * 设备分组ID，非必选，如果不填写则默认设备无分组
     */
    GroupId?: string;
}
/**
 * GetPublicKey请求参数结构体
 */
export declare type GetPublicKeyRequest = null;
/**
 * 更新设备网络状态信息
 */
export interface UpdateNetInfo {
    /**
     * 网络类型：
  0:数据
  1:Wi-Fi
     */
    Type?: number;
    /**
     * 启用/禁用
     */
    DataEnable?: boolean;
    /**
     * 上行限速：bit
     */
    UploadLimit?: number;
    /**
     * 下行限速：bit
     */
    DownloadLimit?: number;
    /**
     * 网卡名
     */
    NetInfoName?: string;
}
