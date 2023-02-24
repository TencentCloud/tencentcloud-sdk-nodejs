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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 查找时间段流量使用最大值（单位：bit）
      */
    MaxValue?: number;
    /**
      * 查找时间段流量使用平均值（单位：bit）
      */
    AvgValue?: number;
    /**
      * 查找时间段流量使用总量（单位：bit）
      */
    TotalValue?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 流量种类（1：上行流量，2：下行流量）
      */
    Type: number;
    /**
      * 时间粒度（1：按小时统计，2：按天统计）
      */
    TimeGranularity: number;
}
/**
 * 移动网络加速目标地址结构体
 */
export interface DestAddressInfo {
    /**
      * 加速业务目标 ip 地址数组
      */
    DestIp: Array<string>;
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
 * 网络详细信息
 */
export interface NetDetails {
    /**
      * 流量值（bit）
      */
    Current: number;
    /**
      * 时间点，单位：s
      */
    Time: string;
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
 * GetMultiFlowStatistic返回参数结构体
 */
export interface GetMultiFlowStatisticResponse {
    /**
      * 批量设备流量信息
      */
    FlowDetails?: Array<FlowDetails>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
/**
 * CreateQos返回参数结构体
 */
export interface CreateQosResponse {
    /**
      * 单次加速唯一 Id
      */
    SessionId: string;
    /**
      * 当前加速剩余时长（单位秒）
      */
    Duration: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEncryptedKey请求参数结构体
 */
export declare type CreateEncryptedKeyRequest = null;
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
 * CreateEncryptedKey返回参数结构体
 */
export interface CreateEncryptedKeyResponse {
    /**
      * 预置密钥
      */
    EncryptedKey: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateDevice返回参数结构体
 */
export interface UpdateDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 设备详细信息
 */
export interface DeviceDetails {
    /**
      * 设备基本信息
      */
    DeviceBaseInfo: DeviceBaseInfo;
    /**
      * 设备网络信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeviceNetInfo: Array<DeviceNetInfo>;
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
      * 设备ID
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 统计流量类型（1：上行流量，2：下行流量）
      */
    Type: number;
    /**
      * 统计时间粒度（1：按小时统计，2：按天统计）
      */
    TimeGranularity: number;
}
/**
 * 设备的基本信息
 */
export interface DeviceBaseInfo {
    /**
      * 设备唯一ID
      */
    DeviceId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 设备创建的时间，单位：ms
      */
    CreateTime: string;
    /**
      * 设备最后在线时间，单位：ms
      */
    LastTime: string;
    /**
      * 设备的备注
      */
    Remark: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    DataKey: string;
    /**
      * 设备ID
      */
    DeviceId: string;
    /**
      * 签名字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    Signature: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * GetDevices返回参数结构体
 */
export interface GetDevicesResponse {
    /**
      * 设备信息列表
      */
    DeviceInfos: Array<DeviceBaseInfo>;
    /**
      * 设备总记录条数
      */
    Length: number;
    /**
      * 总页数
      */
    TotalPage: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
}
/**
 * GetPublicKey请求参数结构体
 */
export declare type GetPublicKeyRequest = null;
