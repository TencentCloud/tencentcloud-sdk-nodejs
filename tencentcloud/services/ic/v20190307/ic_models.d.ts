/**
 * DescribeCards返回参数结构体
 */
export interface DescribeCardsResponse {
    /**
     * 卡片列表信息
     */
    Data: CardList;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCard返回参数结构体
 */
export interface DescribeCardResponse {
    /**
     * 卡片详细信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: CardInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 卡片详细信息
 */
export interface CardInfo {
    /**
     * 卡片ID
     */
    Iccid: string;
    /**
     * 卡电话号码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msisdn: string;
    /**
     * 卡imsi
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Imsi: string;
    /**
     * 卡imei
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Imei: string;
    /**
     * 应用ID
     */
    Sdkappid: string;
    /**
     * 运营商编号
     */
    Teleoperator: number;
    /**
     * 卡片状态 1:未激活 2：激活 3：停卡 5：销卡
     */
    CardStatus: number;
    /**
     * 网络状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetworkStatus: number;
    /**
     * 激活时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActivitedTime: string;
    /**
     * 资费类型，1 单卡，2 流量池
     */
    Type: number;
    /**
     * 套餐类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductId: string;
    /**
     * 流量池ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PoolId: string;
    /**
     * 周期套餐流量使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataUsedInPeriod: number;
    /**
     * 周期套餐总量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataTotalInPeriod: number;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductExpiredTime: string;
    /**
     * 描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 创建时间
     */
    CreatedTime: string;
    /**
     * 修改时间
     */
    ModifiedTime: string;
    /**
     * 套餐周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreorderCnt: number;
    /**
     * 激活被回调标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsActivated: number;
    /**
     * 订单ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrderId: string;
    /**
     * 是否自动续费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenew: number;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark: string;
    /**
     * 0 不需要开通达量不停卡 1 需要开通达量不停卡
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowArrears: number;
    /**
     * 是否开通短信0:未开短信 1:开通短信
     */
    NeedSms: number;
    /**
     * 供应商
     */
    Provider: number;
    /**
     * 实名认证 0:无 1:未实名 2:已实名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertificationState: number;
    /**
     * 其他流量信息,流量分离统计其他流量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OtherData: number;
}
/**
 * DescribeApp请求参数结构体
 */
export interface DescribeAppRequest {
    /**
     * 物联卡应用ID
     */
    Sdkappid: number;
}
/**
 * PayForExtendData返回参数结构体
 */
export interface PayForExtendDataResponse {
    /**
     * 订单号
     */
    Data: ResOrderIds;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUserCardRemark请求参数结构体
 */
export interface ModifyUserCardRemarkRequest {
    /**
     * 应用ID
     */
    Sdkappid: number;
    /**
     * 物联卡ICCID
     */
    Iccid: string;
    /**
     * 备注信息，限50字
     */
    Remark?: string;
}
/**
 * SendMultiSms请求参数结构体
 */
export interface SendMultiSmsRequest {
    /**
     * 应用ID
     */
    Sdkappid: string;
    /**
     * 卡片列表
     */
    Iccids: Array<string>;
    /**
     * 短信内容 长度限制 70
     */
    Content: string;
}
/**
 * 云api 卡片续费
 */
export interface ResRenew {
    /**
     * 每一张续费卡片的订单ID数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrderIds: Array<string>;
}
/**
 * 订单ID集合
 */
export interface ResOrderIds {
    /**
     * 每一张续费卡片的订单ID数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrderIds: Array<string>;
}
/**
 * DescribeSms返回参数结构体
 */
export interface DescribeSmsResponse {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 短信列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<ResSms>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询短信列表
 */
export interface ResSms {
    /**
     * 卡片ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Iccid: string;
    /**
     * 卡片号码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msisdn: string;
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SdkAppid: number;
    /**
     * 短信内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content: string;
    /**
     * 短信类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SmsType: number;
    /**
     * 发送时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SendTime: string;
    /**
     * 推送时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportTime: string;
    /**
     * SUCC：成功  FAIL 失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark: string;
    /**
     * 回执状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
}
/**
 * DescribeApp返回参数结构体
 */
export interface DescribeAppResponse {
    /**
     * 应用信息详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: AppInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCard请求参数结构体
 */
export interface DescribeCardRequest {
    /**
     * 应用ID
     */
    Sdkappid: number;
    /**
     * 卡片ID
     */
    Iccid: string;
}
/**
 * SendSms返回参数结构体
 */
export interface SendSmsResponse {
    /**
     * 短信流水信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: SmsSid;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SendSms请求参数结构体
 */
export interface SendSmsRequest {
    /**
     * 应用ID
     */
    Sdkappid: number;
    /**
     * 卡片ID
     */
    Iccid: string;
    /**
     * 短信内容长度70限制
     */
    Content: string;
}
/**
 * 短信流水信息
 */
export interface SmsRet {
    /**
     * 该iccid请求状态
     */
    Code: string;
    /**
     * 短信发送返回信息
     */
    Msg: string;
    /**
     * 卡片ID
     */
    Iccid: string;
    /**
     * 流水ID
     */
    Sid: string;
}
/**
 * 物联网卡应用信息详情
 */
export interface AppInfo {
    /**
     * 应用ID
     */
    Sdkappid: string;
    /**
     * 应用key
     */
    Appkey: string;
    /**
     * 用户appid
     */
    CloudAppid: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 应用描述
     */
    Description: string;
    /**
     * 创建时间
     */
    CreatedTime: string;
    /**
     * 应用类型
     */
    BizType: number;
    /**
     * 用户Uin
     */
    Uin: string;
}
/**
 * RenewCards返回参数结构体
 */
export interface RenewCardsResponse {
    /**
     * 续费成功的订单id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: ResRenew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PayForExtendData请求参数结构体
 */
export interface PayForExtendDataRequest {
    /**
     * 卡片ICCID
     */
    Iccid: string;
    /**
     * 套外流量,单位MB
     */
    ExtentData: number;
    /**
     * 应用ID
     */
    Sdkappid: number;
}
/**
 * 短信流水信息
 */
export interface SmsSid {
    /**
     * 卡片ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Iccid: string;
    /**
     * 信息流水ID
     */
    Sid: string;
}
/**
 * SendMultiSms返回参数结构体
 */
export interface SendMultiSmsResponse {
    /**
     * 短信流水数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<SmsRet>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 卡片列表数据
 */
export interface CardList {
    /**
     * 卡片总数
     */
    Total: string;
    /**
     * 卡片列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List: Array<CardInfo>;
}
/**
 * DescribeSms请求参数结构体
 */
export interface DescribeSmsRequest {
    /**
     * 应用ID
     */
    Sdkappid: number;
    /**
     * 卡片ID
     */
    Iccid?: string;
    /**
     * 卡片号码
     */
    Msisdn?: string;
    /**
     * 短信类型
     */
    SmsType?: number;
    /**
     * 开始时间  YYYY-MM-DD HH:mm:ss
     */
    BeginTime?: string;
    /**
     * 结束时间  YYYY-MM-DD HH:mm:ss
     */
    EndTime?: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 小于200
     */
    Limit?: number;
}
/**
 * ModifyUserCardRemark返回参数结构体
 */
export interface ModifyUserCardRemarkResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCards请求参数结构体
 */
export interface DescribeCardsRequest {
    /**
     * 应用ID
     */
    Sdkappid: string;
    /**
     * 偏移值
     */
    Offset: number;
    /**
     * 列表限制
     */
    Limit: number;
}
/**
 * RenewCards请求参数结构体
 */
export interface RenewCardsRequest {
    /**
     * 应用ID
     */
    Sdkappid: number;
    /**
     * 续费的iccid
     */
    Iccids: Array<string>;
    /**
     * 续费的周期（单位：月）
     */
    RenewNum: number;
}
