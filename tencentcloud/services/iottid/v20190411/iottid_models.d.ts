/**
 * DescribePermission请求参数结构体
 */
export declare type DescribePermissionRequest = null;
/**
 * VerifyChipBurnInfo返回参数结构体
 */
export interface VerifyChipBurnInfoResponse {
    /**
     * 验证结果
     */
    Pass?: boolean;
    /**
     * 已验证次数
     */
    VerifiedTimes?: number;
    /**
     * 剩余验证次数
     */
    LeftTimes?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeliverTids返回参数结构体
 */
export interface DeliverTidsResponse {
    /**
     * 空发的TID信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TidSet?: Array<TidKeysInfo>;
    /**
     * 产品公钥
     */
    ProductKey?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BurnTidNotify返回参数结构体
 */
export interface BurnTidNotifyResponse {
    /**
     * 接收回执成功的TID
     */
    Tid?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAvailableLibCount返回参数结构体
 */
export interface DescribeAvailableLibCountResponse {
    /**
     * 可空发的白盒密钥数量
     */
    Quantity?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadDeviceUniqueCode返回参数结构体
 */
export interface UploadDeviceUniqueCodeResponse {
    /**
     * 本次已上传数量
     */
    Count?: number;
    /**
     * 重复的硬件唯一标识码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExistedCodeSet?: Array<string>;
    /**
     * 剩余可上传数量
     */
    LeftQuantity?: number;
    /**
     * 错误的硬件唯一标识码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IllegalCodeSet?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AuthTestTid返回参数结构体
 */
export interface AuthTestTidResponse {
    /**
     * 认证结果
     */
    Pass?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeliverTidNotify返回参数结构体
 */
export interface DeliverTidNotifyResponse {
    /**
     * 剩余空发数量
     */
    RemaindCount?: number;
    /**
     * 已回执的TID编码
     */
    Tid?: string;
    /**
     * 产品公钥
     */
    ProductKey?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AuthTestTid请求参数结构体
 */
export interface AuthTestTidRequest {
    /**
     * 设备端SDK填入测试TID参数后生成的加密数据串
     */
    Data: string;
}
/**
 * BurnTidNotify请求参数结构体
 */
export interface BurnTidNotifyRequest {
    /**
     * 订单编号
     */
    OrderId: string;
    /**
     * TID编号
     */
    Tid: string;
}
/**
 * VerifyChipBurnInfo请求参数结构体
 */
export interface VerifyChipBurnInfoRequest {
    /**
     * 验证数据
     */
    Data: string;
}
/**
 * UploadDeviceUniqueCode请求参数结构体
 */
export interface UploadDeviceUniqueCodeRequest {
    /**
     * 硬件唯一标识码
     */
    CodeSet: Array<string>;
    /**
     * 硬件标识码绑定的申请编号
     */
    OrderId: string;
}
/**
 * DescribeAvailableLibCount请求参数结构体
 */
export interface DescribeAvailableLibCountRequest {
    /**
     * 订单编号
     */
    OrderId: string;
}
/**
 * DeliverTids请求参数结构体
 */
export interface DeliverTidsRequest {
    /**
     * 订单ID
     */
    OrderId: string;
    /**
     * 数量，1~100
     */
    Quantity: number;
}
/**
 * DeliverTidNotify请求参数结构体
 */
export interface DeliverTidNotifyRequest {
    /**
     * 订单编号
     */
    OrderId: string;
    /**
     * TID编号
     */
    Tid: string;
}
/**
 * 系统生成的TID和密钥信息
 */
export interface TidKeysInfo {
    /**
     * TID号码
     */
    Tid: string;
    /**
     * 公钥
     */
    PublicKey: string;
    /**
     * 私钥
     */
    PrivateKey: string;
    /**
     * 共享密钥
     */
    Psk: string;
    /**
     * 软加固白盒密钥下载地址
     */
    DownloadUrl: string;
    /**
     * 软加固设备标识码
     */
    DeviceCode: string;
}
/**
 * DescribePermission返回参数结构体
 */
export interface DescribePermissionResponse {
    /**
     * 企业用户
     */
    EnterpriseUser?: boolean;
    /**
     * 下载控制台权限
     */
    DownloadPermission?: string;
    /**
     * 使用控制台权限
     */
    UsePermission?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadTids请求参数结构体
 */
export interface DownloadTidsRequest {
    /**
     * 订单编号
     */
    OrderId: string;
    /**
     * 下载数量：1~10
     */
    Quantity: number;
}
/**
 * DownloadTids返回参数结构体
 */
export interface DownloadTidsResponse {
    /**
     * 下载的TID信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TidSet?: Array<TidKeysInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
