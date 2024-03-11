/**
 * CreateSavingPlanOrder请求参数结构体
 */
export interface CreateSavingPlanOrderRequest {
    /**
     * 地域编码
     */
    RegionId: number;
    /**
     * 区域编码
     */
    ZoneId: number;
    /**
     * 预付费类型
     */
    PrePayType: string;
    /**
     * 时长
     */
    TimeSpan: number;
    /**
     * 时长单位
     */
    TimeUnit: string;
    /**
     * 商品唯一标识
     */
    CommodityCode: string;
    /**
     * 承诺时长内的小额金额（单位：元）
     */
    PromiseUseAmount: number;
    /**
     * 节省计划的指定生效时间，若不传则为当前下单时间。传参数格式:"2023-10-01 00:00:00"，仅支持指定日期的0点时刻
     */
    SpecifyEffectTime?: string;
    /**
     * 可重入ID
     */
    ClientToken?: string;
}
/**
 * CreateSavingPlanOrder返回参数结构体
 */
export interface CreateSavingPlanOrderResponse {
    /**
     * 订单号
     */
    BigDealId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
