/**
 * 消息数量统计
 */
export interface MessageCntStats {
    /**
      * 统计日期
      */
    Date: string;
    /**
      * 物模型上行消息数
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpMsgCnt: number;
    /**
      * 物模型下行消息数
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownMsgCnt: number;
    /**
      * ntp消息数
注意：此字段可能返回 null，表示取不到有效值。
      */
    NtpMsgCnt: number;
}
/**
 * 设备签名信息
 */
export interface DeviceSignatureInfo {
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 设备签名
      */
    DeviceSignature: string;
}
/**
 * CallDeviceActionAsync返回参数结构体
 */
export interface CallDeviceActionAsyncResponse {
    /**
      * 调用Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientToken: string;
    /**
      * 异步调用状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GenSingleDeviceSignatureOfPublic返回参数结构体
 */
export interface GenSingleDeviceSignatureOfPublicResponse {
    /**
      * 设备签名信息
      */
    DeviceSignature: DeviceSignatureInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProduct请求参数结构体
 */
export interface CreateProductRequest {
    /**
      * 产品名称
      */
    ProductName: string;
    /**
      * 产品设备类型 1.普通设备 2.NVR设备
      */
    DeviceType: number;
    /**
      * 产品有效期
      */
    ProductVaildYears: number;
    /**
      * 设备功能码 ypsxth音频双向通话 spdxth视频单向通话 sxysp双向音视频
      */
    Features: Array<string>;
    /**
      * 设备操作系统，通用设备填default
      */
    ChipOs: string;
    /**
      * 芯片厂商id，通用设备填default
      */
    ChipManufactureId: string;
    /**
      * 芯片id，通用设备填default
      */
    ChipId: string;
    /**
      * 产品描述信息
      */
    ProductDescription: string;
    /**
      * 认证方式 只支持取值为2 psk认证
      */
    EncryptionType?: number;
    /**
      * 连接类型，wifi表示WIFI连接，cellular表示4G连接
      */
    NetType?: string;
}
/**
 * GenSingleDeviceSignatureOfPublic请求参数结构体
 */
export interface GenSingleDeviceSignatureOfPublicRequest {
    /**
      * 设备所属的产品ID
      */
    ProductId: string;
    /**
      * 需要绑定的设备
      */
    DeviceName: string;
    /**
      * 设备绑定签名的有效时间,以秒为单位。取值范围：0 < Expire <= 86400，Expire == -1（十年）
      */
    Expire: number;
}
/**
 * DescribeDeviceDataStats请求参数结构体
 */
export interface DescribeDeviceDataStatsRequest {
    /**
      * 开始日期
      */
    StartDate: string;
    /**
      * 结束日期
      */
    EndDate: string;
    /**
      * 产品id
      */
    ProductId?: string;
}
/**
 * CallDeviceActionSync返回参数结构体
 */
export interface CallDeviceActionSyncResponse {
    /**
      * 调用Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientToken: string;
    /**
      * 输出参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutputParams: string;
    /**
      * 返回状态，当设备不在线等部分情况，会通过该 Status 返回。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProduct返回参数结构体
 */
export interface CreateProductResponse {
    /**
      * 产品详情
      */
    Data: VideoProduct;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 设备数量统计
 */
export interface DeviceCntStats {
    /**
      * 统计日期
      */
    Date: string;
    /**
      * 新增注册设备数
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewRegisterCnt: number;
    /**
      * 新增激活设备数
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewActivateCnt: number;
    /**
      * 活跃设备数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActiveCnt: number;
}
/**
 * DescribeDeviceDataStats返回参数结构体
 */
export interface DescribeDeviceDataStatsResponse {
    /**
      * 累计注册设备数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegisterCnt: number;
    /**
      * 设备数量列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<DeviceCntStats>;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * video产品元数据
 */
export interface VideoProduct {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 产品名称
      */
    ProductName: string;
    /**
      * 产品设备类型（普通设备)	1.普通设备
      */
    DeviceType: number;
    /**
      * 认证方式：2：PSK
      */
    EncryptionType: number;
    /**
      * 设备功能码
      */
    Features: Array<string>;
    /**
      * 操作系统
      */
    ChipOs: string;
    /**
      * 芯片厂商id
      */
    ChipManufactureId: string;
    /**
      * 芯片id
      */
    ChipId: string;
    /**
      * 产品描述信息
      */
    ProductDescription: string;
    /**
      * 创建时间unix时间戳
      */
    CreateTime: number;
    /**
      * 修改时间unix时间戳
      */
    UpdateTime: number;
    /**
      * 连接类型，wifi表示WIFI连接，cellular表示4G连接
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetType: string;
}
/**
 * DescribeMessageDataStats请求参数结构体
 */
export interface DescribeMessageDataStatsRequest {
    /**
      * 统计开始日期
      */
    StartDate: string;
    /**
      * 统计结束日期
      */
    EndDate: string;
    /**
      * 产品id
      */
    ProductId?: string;
}
/**
 * DescribeMessageDataStats返回参数结构体
 */
export interface DescribeMessageDataStatsResponse {
    /**
      * 消息数量列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<MessageCntStats>;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CallDeviceActionAsync请求参数结构体
 */
export interface CallDeviceActionAsyncRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义
      */
    ActionId: string;
    /**
      * 输入参数
      */
    InputParams?: string;
}
/**
 * CallDeviceActionSync请求参数结构体
 */
export interface CallDeviceActionSyncRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义
      */
    ActionId: string;
    /**
      * 输入参数
      */
    InputParams?: string;
}
