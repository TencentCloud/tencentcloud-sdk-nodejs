/**
 * SyncUserAndOrderInfo返回参数结构体
 */
export interface SyncUserAndOrderInfoResponse {
    /**
      * 同步用户信息订单信息详情
      */
    Details: SyncUserAndOrderInfoDetail;
    /**
      * 返回信息 成功返回 0 success
      */
    Info: Error;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SyncUserAndOrderInfo请求参数结构体
 */
export interface SyncUserAndOrderInfoRequest {
    /**
      * 企业微信用户信息
      */
    UserInfo: WeChatUserInfo;
    /**
      * 企业微信订单信息
      */
    OrderInfo?: WeChatOrderInfo;
}
/**
 * 线下产品订单
 */
export interface OfflineProductDeal {
    /**
      * 产品标签
      */
    ProductCode?: string;
    /**
      * 子产品标签
      */
    SubProductCode?: string;
    /**
      * 计费项
      */
    BillingItemCode?: string;
    /**
      * 计费细项
      */
    SubBillingItemCode?: string;
    /**
      * 单价（单位：分）
      */
    UnitPrice?: number;
    /**
      * 用量
      */
    Dosage?: number;
    /**
      * 用量单位
      */
    DosageUnit?: string;
    /**
      * 商品的时间大小，当TimeUnit 是package时，timeSpan 只能传1。当TimeUnit是year；month；day；hour；minute；second，传具体时长。
      */
    TimeSpan?: number;
    /**
      * 商品的时间单位：year:年；month:月；day:日；hour:小时；minute:分钟；second:秒; package:与价格无关,一次性购买的产品传package
      */
    TimeUnit?: string;
    /**
      * 原价 （单位：分）OriginPrice=round(UnitPrice * Dosage * TimeSpan)
      */
    OriginPrice?: number;
    /**
      * 折扣百分比，传入0-100的值
      */
    Discount?: number;
    /**
      * 最终扣费金额（单位：分）Fee=round(OriginPrice*Discount/100)
      */
    Fee?: number;
}
/**
 * FlowProductRemind返回参数结构体
 */
export interface FlowProductRemindResponse {
    /**
      * 是否成功
      */
    Success: string;
    /**
      * 流水号
      */
    FlowId: string;
    /**
      * 消息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 企业微信用户信息

 */
export interface WeChatUserInfo {
    /**
      * 客户企业的corpid
      */
    PaidCorpId: string;
    /**
      * 客户企业的Corp全称
      */
    PaidCorpName: string;
}
/**
 * GetUsagePlanUsageAmount返回参数结构体
 */
export interface GetUsagePlanUsageAmountResponse {
    /**
      * 最大调用量
      */
    MaxRequestNum: number;
    /**
      * 已经调用量
      */
    InUseRequestNum: number;
    /**
      * 剩余调用量
      */
    RemainingRequestNum: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * FlowProductRemind请求参数结构体
 */
export interface FlowProductRemindRequest {
    /**
      * 服务商uin
      */
    ProviderUin: string;
    /**
      * 服务商实例ID
      */
    SignId: string;
    /**
      * 云市场实例ID
      */
    ResourceId: string;
    /**
      * 实例总流量
      */
    TotalFlow: string;
    /**
      * 剩余流量
      */
    LeftFlow: string;
    /**
      * 流量单位
      */
    FlowUnit: string;
}
/**
 * GetUsagePlanUsageAmount请求参数结构体
 */
export interface GetUsagePlanUsageAmountRequest {
    /**
      * 用于查询实例的Id
      */
    InstanceId: string;
}
/**
 * Error结构
 */
export interface Error {
    /**
      * 一级错误描述
      */
    Code: string;
    /**
      * 二级错误描述
      */
    Message: string;
}
/**
 * 同步用户信息订单信息详情
 */
export interface SyncUserAndOrderInfoDetail {
    /**
      * 腾讯云订单总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 腾讯云订单列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    MarketOrders: Array<string>;
    /**
      * 腾讯云用户Uin
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerUin: string;
}
/**
 * 企业微信订单信息
 */
export interface WeChatOrderInfo {
    /**
      * 企业微信订单号
      */
    OrderId?: string;
    /**
      * 订单状态。0-未⽀支付，1-已⽀支付，2-已关闭， 3-未⽀支付且已过期， 4-申请退款中， 5-申请退款成功， 6-退款被拒绝
      */
    OrderStatus?: number;
    /**
      * 订单类型。0-普通订单，1-扩容订单，2-续期，3-版本变更更
      */
    OrderType?: number;
    /**
      * 应⽤id
      */
    SuiteId?: string;
    /**
      * 购买版本ID
      */
    EditionId?: string;
    /**
      * 购买版本名称
      */
    EditionName?: string;
    /**
      * 实付款金额，单位分
      */
    Price?: number;
    /**
      * 下单时间
      */
    OrderTime?: number;
    /**
      * 付款时间
      */
    PaidTime?: number;
    /**
      * 备注
      */
    Remark?: string;
    /**
      * 资源使用开始时间
      */
    UseBeginTime?: number;
    /**
      * 资源使用结束时间
      */
    UseEndTime?: number;
    /**
      * 磐石详细的四层订单
      */
    Deals?: OfflineProductDeal;
}
