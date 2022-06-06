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
const AbstractModel = require("../../common/abstract_model");

/**
 * 消耗组件明细
 * @class
 */
class CostComponentSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件类型名称
         * @type {string || null}
         */
        this.ComponentCodeName = null;

        /**
         * 组件名称
         * @type {string || null}
         */
        this.ItemCodeName = null;

        /**
         * 刊例价
         * @type {string || null}
         */
        this.SinglePrice = null;

        /**
         * 刊例价单位
         * @type {string || null}
         */
        this.PriceUnit = null;

        /**
         * 用量
         * @type {string || null}
         */
        this.UsedAmount = null;

        /**
         * 用量单位
         * @type {string || null}
         */
        this.UsedAmountUnit = null;

        /**
         * 原价
         * @type {string || null}
         */
        this.Cost = null;

        /**
         * 折扣
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * 折后价
         * @type {string || null}
         */
        this.RealCost = null;

        /**
         * 代金券支付金额
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * 现金支付金额
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 赠送金支付金额
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentCodeName = 'ComponentCodeName' in params ? params.ComponentCodeName : null;
        this.ItemCodeName = 'ItemCodeName' in params ? params.ItemCodeName : null;
        this.SinglePrice = 'SinglePrice' in params ? params.SinglePrice : null;
        this.PriceUnit = 'PriceUnit' in params ? params.PriceUnit : null;
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedAmountUnit = 'UsedAmountUnit' in params ? params.UsedAmountUnit : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;

    }
}

/**
 * 代金券相关信息
 * @class
 */
class VoucherInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代金券拥有者
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 券状态：待使用：unUsed，已使用： used，已发货：delivered，已作废： cancel，已过期：overdue
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 代金券面额（微分）
         * @type {number || null}
         */
        this.NominalValue = null;

        /**
         * 剩余金额（微分）
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * 代金券id
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * postPay后付费/prePay预付费/riPay预留实例/空字符串或者'*'表示全部模式
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 付费场景PayMode=postPay时：spotpay-竞价实例,"settle account"-普通后付费PayMode=prePay时：purchase-包年包月新购，renew-包年包月续费（自动续费），modify-包年包月配置变更(变配）PayMode=riPay时：oneOffFee-预留实例预付，hourlyFee-预留实例每小时扣费，*-支持全部付费场景
         * @type {string || null}
         */
        this.PayScene = null;

        /**
         * 有效期生效时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 有效期截止时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 适用商品信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplicableProducts || null}
         */
        this.ApplicableProducts = null;

        /**
         * 不适用商品信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExcludedProducts> || null}
         */
        this.ExcludedProducts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NominalValue = 'NominalValue' in params ? params.NominalValue : null;
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayScene = 'PayScene' in params ? params.PayScene : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.ApplicableProducts) {
            let obj = new ApplicableProducts();
            obj.deserialize(params.ApplicableProducts)
            this.ApplicableProducts = obj;
        }

        if (params.ExcludedProducts) {
            this.ExcludedProducts = new Array();
            for (let z in params.ExcludedProducts) {
                let obj = new ExcludedProducts();
                obj.deserialize(params.ExcludedProducts[z]);
                this.ExcludedProducts.push(obj);
            }
        }

    }
}

/**
 * DescribeCostSummaryByProduct请求参数结构体
 * @class
 */
class DescribeCostSummaryByProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 每次获取数据量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 是否需要返回记录数量，0不需要，1需要，默认不需要
         * @type {number || null}
         */
        this.NeedRecordNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;

    }
}

/**
 * 消耗汇总详情
 * @class
 */
class ConsumptionSummaryTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 折后总价
         * @type {string || null}
         */
        this.RealTotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

    }
}

/**
 * DescribeCostSummaryByProject返回参数结构体
 * @class
 */
class DescribeCostSummaryByProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否准备好，0未准备好，1准备好
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * 消耗详情
         * @type {ConsumptionSummaryTotal || null}
         */
        this.Total = null;

        /**
         * 消耗按业务汇总详情
         * @type {Array.<ConsumptionProjectSummaryDataItem> || null}
         */
        this.Data = null;

        /**
         * 记录数量，NeedRecordNum为0是返回null
         * @type {number || null}
         */
        this.RecordNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total)
            this.Total = obj;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionProjectSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDosageDetailByDate请求参数结构体
 * @class
 */
class DescribeDosageDetailByDateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询账单开始日期，如 2019-01-01
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询账单结束日期，如 2019-01-01， 时间跨度不超过7天
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 互动直播：
10194   互动直播-核心机房           :
10195   互动直播-边缘机房

cdn业务：
10180：CDN静态加速流量(国内)
10181：CDN静态加速带宽(国内)
10182：CDN静态加速普通流量
10183：CDN静态加速普通带宽
10231：CDN静态加速流量(海外)
10232：CDN静态加速带宽(海外)

100967：弹性公网IP-按流量计费
101065：公网负载均衡-按流量计费

视频直播
10226 视频直播流量(国内)
10227 视频直播带宽(国内)
100763 视频直播流量(海外)
100762 视频直播宽带(海外)
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 查询域名 例如 www.qq.com
非CDN业务查询时传入空字符串，返回的值为空
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 1、如果为空，则返回EIP或CLB所有实例的明细；
2、如果传入实例名，则返回该实例明细
         * @type {string || null}
         */
        this.InstanceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;

    }
}

/**
 * 按项目汇总消费详情
 * @class
 */
class ProjectSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 实际花费
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 费用所占百分比，两位小数
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * 现金金额
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 赠送金金额
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * 代金券金额
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * 账单月份，格式2019-08
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * 地域过滤条件
 * @class
 */
class ConditionRegion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * DescribeBillSummaryByProduct请求参数结构体
 * @class
 */
class DescribeBillSummaryByProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 款项类别，与L0账单上的汇总类别对应。
此参数自账单3.0（即2021-05）之后开始生效。
枚举值：
consume-消费
refund-退款
adjustment-调账
         * @type {string || null}
         */
        this.PayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.PayType = 'PayType' in params ? params.PayType : null;

    }
}

/**
 * 消耗按产品汇总详情
 * @class
 */
class ConsumptionBusinessSummaryDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称代码
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * 折后总价
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 费用趋势
         * @type {ConsumptionSummaryTrend || null}
         */
        this.Trend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

        if (params.Trend) {
            let obj = new ConsumptionSummaryTrend();
            obj.deserialize(params.Trend)
            this.Trend = obj;
        }

    }
}

/**
 * 由时间和值组成的数据结构
 * @class
 */
class DetailPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 值
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 消耗明细数据类型
 * @class
 */
class CostDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支付者uin
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * 子产品名称
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * 计费模式名称
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地区名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 资源id
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 类型名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * 订单id
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 交易id
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 费用开始时间
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * 费用结束时间
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * 组件明细
         * @type {Array.<CostComponentSet> || null}
         */
        this.ComponentSet = null;

        /**
         * 子产品名称代码
         * @type {string || null}
         */
        this.ProductCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;

        if (params.ComponentSet) {
            this.ComponentSet = new Array();
            for (let z in params.ComponentSet) {
                let obj = new CostComponentSet();
                obj.deserialize(params.ComponentSet[z]);
                this.ComponentSet.push(obj);
            }
        }
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;

    }
}

/**
 * DescribeBillSummaryByPayMode返回参数结构体
 * @class
 */
class DescribeBillSummaryByPayModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否准备好，0未准备好，1准备好
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * 各付费模式花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PayModeSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new PayModeSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 账单资源汇总数据对象
 * @class
 */
class BillResourceSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称：云产品大类，如云服务器CVM、云数据库MySQL
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * 子产品名称：云产品子类，如云服务器CVM-标准型S1， 当没有获取到子产品名称时，返回"-"
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * 计费模式：包年包月和按量计费
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * 项目
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源实例名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 交易类型：包年包月新购/续费/升降配/退款、按量计费扣费、调账补偿/扣费等类型
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * 订单ID
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 扣费时间
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * 开始使用时间
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * 结束使用时间
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * 配置描述
         * @type {string || null}
         */
        this.ConfigDesc = null;

        /**
         * 扩展字段1
         * @type {string || null}
         */
        this.ExtendField1 = null;

        /**
         * 扩展字段2
         * @type {string || null}
         */
        this.ExtendField2 = null;

        /**
         * 原价，单位为元
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * 折扣率
当聚合之后折扣不唯一或者合同价的情况下，返回“-”
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * 优惠类型
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * 优惠后总价，单位为元
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 代金券支付金额，单位为元
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * 现金账户支付金额，单位为元
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 赠送账户支付金额，单位为元
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * 扩展字段3
         * @type {string || null}
         */
        this.ExtendField3 = null;

        /**
         * 扩展字段4
         * @type {string || null}
         */
        this.ExtendField4 = null;

        /**
         * 扩展字段5
         * @type {string || null}
         */
        this.ExtendField5 = null;

        /**
         * Tag 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * 付款方uin
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 资源所有者uin,无值则返回"-"
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 操作者uin,无值则返回"-"
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * 产品名称代码
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * 子产品名称代码
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 区域ID
         * @type {number || null}
         */
        this.RegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;
        this.ConfigDesc = 'ConfigDesc' in params ? params.ConfigDesc : null;
        this.ExtendField1 = 'ExtendField1' in params ? params.ExtendField1 : null;
        this.ExtendField2 = 'ExtendField2' in params ? params.ExtendField2 : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.ExtendField3 = 'ExtendField3' in params ? params.ExtendField3 : null;
        this.ExtendField4 = 'ExtendField4' in params ? params.ExtendField4 : null;
        this.ExtendField5 = 'ExtendField5' in params ? params.ExtendField5 : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * DescribeBillSummaryByTag请求参数结构体
 * @class
 */
class DescribeBillSummaryByTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分账标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 分账标签值
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * 账单筛选条件对象
 * @class
 */
class Conditions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只支持6和12两个值
         * @type {number || null}
         */
        this.TimeRange = null;

        /**
         * 产品名称代码
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 付费模式，可选prePay和postPay
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 资源关键字
         * @type {string || null}
         */
        this.ResourceKeyword = null;

        /**
         * 产品名称代码
         * @type {Array.<string> || null}
         */
        this.BusinessCodes = null;

        /**
         * 子产品名称代码
         * @type {Array.<string> || null}
         */
        this.ProductCodes = null;

        /**
         * 地域ID
         * @type {Array.<number> || null}
         */
        this.RegionIds = null;

        /**
         * 项目ID
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 付费模式，可选prePay和postPay
         * @type {Array.<string> || null}
         */
        this.PayModes = null;

        /**
         * 交易类型
         * @type {Array.<string> || null}
         */
        this.ActionTypes = null;

        /**
         * 是否隐藏0元流水
         * @type {number || null}
         */
        this.HideFreeCost = null;

        /**
         * 排序规则，可选desc和asc
         * @type {string || null}
         */
        this.OrderByCost = null;

        /**
         * 交易ID
         * @type {Array.<string> || null}
         */
        this.BillIds = null;

        /**
         * 组件编码
         * @type {Array.<string> || null}
         */
        this.ComponentCodes = null;

        /**
         * 文件ID
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 文件类型
         * @type {Array.<string> || null}
         */
        this.FileTypes = null;

        /**
         * 状态
         * @type {Array.<number> || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeRange = 'TimeRange' in params ? params.TimeRange : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceKeyword = 'ResourceKeyword' in params ? params.ResourceKeyword : null;
        this.BusinessCodes = 'BusinessCodes' in params ? params.BusinessCodes : null;
        this.ProductCodes = 'ProductCodes' in params ? params.ProductCodes : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.PayModes = 'PayModes' in params ? params.PayModes : null;
        this.ActionTypes = 'ActionTypes' in params ? params.ActionTypes : null;
        this.HideFreeCost = 'HideFreeCost' in params ? params.HideFreeCost : null;
        this.OrderByCost = 'OrderByCost' in params ? params.OrderByCost : null;
        this.BillIds = 'BillIds' in params ? params.BillIds : null;
        this.ComponentCodes = 'ComponentCodes' in params ? params.ComponentCodes : null;
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.FileTypes = 'FileTypes' in params ? params.FileTypes : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeBillSummaryByProduct返回参数结构体
 * @class
 */
class DescribeBillSummaryByProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否准备好，0未准备好，1准备好
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * 总花费详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BusinessSummaryTotal || null}
         */
        this.SummaryTotal = null;

        /**
         * 各产品花费分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BusinessSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryTotal) {
            let obj = new BusinessSummaryTotal();
            obj.deserialize(params.SummaryTotal)
            this.SummaryTotal = obj;
        }

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new BusinessSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 账单 Tag 信息
 * @class
 */
class BillTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分账标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeBillSummaryByRegion返回参数结构体
 * @class
 */
class DescribeBillSummaryByRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否准备好，0未准备好，1准备好
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * 各地域花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RegionSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new RegionSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 由域名和使用明细组成的数据结构
 * @class
 */
class DetailSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 使用数据明细
         * @type {Array.<DetailPoint> || null}
         */
        this.DetailPoints = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.DetailPoints) {
            this.DetailPoints = new Array();
            for (let z in params.DetailPoints) {
                let obj = new DetailPoint();
                obj.deserialize(params.DetailPoints[z]);
                this.DetailPoints.push(obj);
            }
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;

    }
}

/**
 * 收支明细的流水信息
 * @class
 */
class BillTransactionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收支类型：deduct 扣费, recharge 充值, return 退费， block 冻结, unblock 解冻
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 流水金额，单位（分）；正数表示入账，负数表示出账
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 可用余额，单位（分）；正数表示入账，负数表示出账
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * 流水号，如20190131020000236005203583326401
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 描述信息
         * @type {string || null}
         */
        this.OperationInfo = null;

        /**
         * 操作时间"2019-01-31 23:35:10.000"
         * @type {string || null}
         */
        this.OperationTime = null;

        /**
         * 现金账户余额，单位（分）
         * @type {number || null}
         */
        this.Cash = null;

        /**
         * 赠送金余额，单位（分）
         * @type {number || null}
         */
        this.Incentive = null;

        /**
         * 冻结余额，单位（分）
         * @type {number || null}
         */
        this.Freezing = null;

        /**
         * 交易渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 扣费模式：trade 包年包月(预付费)，hourh  按量-小时结，hourd 按量-日结，hourm 按量-月结，month 按量-月结
         * @type {string || null}
         */
        this.DeductMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.OperationInfo = 'OperationInfo' in params ? params.OperationInfo : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;
        this.Cash = 'Cash' in params ? params.Cash : null;
        this.Incentive = 'Incentive' in params ? params.Incentive : null;
        this.Freezing = 'Freezing' in params ? params.Freezing : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.DeductMode = 'DeductMode' in params ? params.DeductMode : null;

    }
}

/**
 * DescribeVoucherInfo返回参数结构体
 * @class
 */
class DescribeVoucherInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 券总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总余额（微分）
         * @type {number || null}
         */
        this.TotalBalance = null;

        /**
         * 代金券相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VoucherInfos> || null}
         */
        this.VoucherInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalBalance = 'TotalBalance' in params ? params.TotalBalance : null;

        if (params.VoucherInfos) {
            this.VoucherInfos = new Array();
            for (let z in params.VoucherInfos) {
                let obj = new VoucherInfos();
                obj.deserialize(params.VoucherInfos[z]);
                this.VoucherInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 消耗按资源汇总详情
 * @class
 */
class ConsumptionResourceSummaryDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 折后总价
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 现金花费
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 地域ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 付费模式
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 付费模式名称
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * 产品名称代码
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * 消耗类型
         * @type {string || null}
         */
        this.ConsumptionTypeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ConsumptionTypeName = 'ConsumptionTypeName' in params ? params.ConsumptionTypeName : null;

    }
}

/**
 * DescribeAccountBalance请求参数结构体
 * @class
 */
class DescribeAccountBalanceRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeBillDetail请求参数结构体
 * @class
 */
class DescribeBillDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。
         * @type {string || null}
         */
        this.Month = null;

        /**
         * 周期开始时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。(不支持跨月查询)
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 周期结束时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。（不支持跨月查询）
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * 已废弃参数，未开放
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 付费模式 prePay/postPay
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 查询指定资源信息
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 查询交易类型，如下：
包年包月新购
包年包月续费
包年包月配置变更
包年包月退款
按量计费扣费
按量计费小时结
按量计费日结
按量计费月结
线下项目扣费
线下产品扣费
调账扣费
调账补偿
竞价实例小时结
线下项目调账补偿
线下产品调账补偿
优惠扣费
优惠补偿
按量计费迁入资源
按量计费迁出资源
包年包月迁入资源
包年包月迁出资源
预付费用
小时费用
预留实例退款
按量计费冲正
按量计费冲正
按量计费冲正
按量计费冲正
按量计费冲正
包年包月转按量
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 项目ID:资源所属项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 产品名称代码
备注：如需获取当月使用过的BusinessCode，请调用API：<a href="https://cloud.tencent.com/document/product/555/35761">获取产品汇总费用分布</a>
         * @type {string || null}
         */
        this.BusinessCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;

    }
}

/**
 * 消耗按项目汇总详情
 * @class
 */
class ConsumptionProjectSummaryDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 折后总价
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 趋势
         * @type {ConsumptionSummaryTrend || null}
         */
        this.Trend = null;

        /**
         * 产品消耗详情
         * @type {Array.<ConsumptionBusinessSummaryDataItem> || null}
         */
        this.Business = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

        if (params.Trend) {
            let obj = new ConsumptionSummaryTrend();
            obj.deserialize(params.Trend)
            this.Trend = obj;
        }

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new ConsumptionBusinessSummaryDataItem();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }

    }
}

/**
 * 按地域汇总消费详情
 * @class
 */
class RegionSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 实际花费
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 费用所占百分比，两位小数
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * 现金金额
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 赠送金金额
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * 代金券金额
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * 账单月份，格式2019-08
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeCostSummaryByProduct返回参数结构体
 * @class
 */
class DescribeCostSummaryByProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否准备好，0未准备好，1准备好
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * 消耗详情
         * @type {ConsumptionSummaryTotal || null}
         */
        this.Total = null;

        /**
         * 消耗按产品汇总详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConsumptionBusinessSummaryDataItem> || null}
         */
        this.Data = null;

        /**
         * 记录数量，NeedRecordNum为0是返回null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total)
            this.Total = obj;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionBusinessSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 商品详细信息
 * @class
 */
class ProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品详情名称标识
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 商品详情
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeDosageDetailByDate返回参数结构体
 * @class
 */
class DescribeDosageDetailByDateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计量单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 用量数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetailSet> || null}
         */
        this.DetailSets = null;

        /**
         * 错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RetCode = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RetMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.DetailSets) {
            this.DetailSets = new Array();
            for (let z in params.DetailSets) {
                let obj = new DetailSet();
                obj.deserialize(params.DetailSets[z]);
                this.DetailSets.push(obj);
            }
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillList返回参数结构体
 * @class
 */
class DescribeBillListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收支明细列表
         * @type {Array.<BillTransactionInfo> || null}
         */
        this.TransactionList = null;

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 退费总额，单位（分）
         * @type {number || null}
         */
        this.ReturnAmount = null;

        /**
         * 充值总额，单位（分）
         * @type {number || null}
         */
        this.RechargeAmount = null;

        /**
         * 冻结总额，单位（分）
         * @type {number || null}
         */
        this.BlockAmount = null;

        /**
         * 解冻总额，单位（分）
         * @type {number || null}
         */
        this.UnblockAmount = null;

        /**
         * 扣费总额，单位（分）
         * @type {number || null}
         */
        this.DeductAmount = null;

        /**
         * 资金转入总额，单位（分）
         * @type {number || null}
         */
        this.AgentInAmount = null;

        /**
         * 垫付充值总额，单位（分）
         * @type {number || null}
         */
        this.AdvanceRechargeAmount = null;

        /**
         * 提现扣减总额，单位（分）
         * @type {number || null}
         */
        this.WithdrawAmount = null;

        /**
         * 资金转出总额，单位（分）
         * @type {number || null}
         */
        this.AgentOutAmount = null;

        /**
         * 还垫付总额，单位（分）
         * @type {number || null}
         */
        this.AdvancePayAmount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TransactionList) {
            this.TransactionList = new Array();
            for (let z in params.TransactionList) {
                let obj = new BillTransactionInfo();
                obj.deserialize(params.TransactionList[z]);
                this.TransactionList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.ReturnAmount = 'ReturnAmount' in params ? params.ReturnAmount : null;
        this.RechargeAmount = 'RechargeAmount' in params ? params.RechargeAmount : null;
        this.BlockAmount = 'BlockAmount' in params ? params.BlockAmount : null;
        this.UnblockAmount = 'UnblockAmount' in params ? params.UnblockAmount : null;
        this.DeductAmount = 'DeductAmount' in params ? params.DeductAmount : null;
        this.AgentInAmount = 'AgentInAmount' in params ? params.AgentInAmount : null;
        this.AdvanceRechargeAmount = 'AdvanceRechargeAmount' in params ? params.AdvanceRechargeAmount : null;
        this.WithdrawAmount = 'WithdrawAmount' in params ? params.WithdrawAmount : null;
        this.AgentOutAmount = 'AgentOutAmount' in params ? params.AgentOutAmount : null;
        this.AdvancePayAmount = 'AdvancePayAmount' in params ? params.AdvancePayAmount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountBalance返回参数结构体
 * @class
 */
class DescribeAccountBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口做过变更,为兼容老接口,本字段与RealBalance相同,为当前真实可用余额,单位 分
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * 查询的用户Uin
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 当前真实可用余额,单位 分
         * @type {number || null}
         */
        this.RealBalance = null;

        /**
         * 现金账户余额,单位 分
         * @type {number || null}
         */
        this.CashAccountBalance = null;

        /**
         * 收益转入账户余额,单位 分
         * @type {number || null}
         */
        this.IncomeIntoAccountBalance = null;

        /**
         * 赠送账户余额,单位 分
         * @type {number || null}
         */
        this.PresentAccountBalance = null;

        /**
         * 冻结金额,单位 分
         * @type {number || null}
         */
        this.FreezeAmount = null;

        /**
         * 欠费金额,单位 分
         * @type {number || null}
         */
        this.OweAmount = null;

        /**
         * 是否允许欠费消费
         * @type {boolean || null}
         */
        this.IsAllowArrears = null;

        /**
         * 是否限制信用额度
         * @type {boolean || null}
         */
        this.IsCreditLimited = null;

        /**
         * 信用额度
         * @type {number || null}
         */
        this.CreditAmount = null;

        /**
         * 可用信用额度
         * @type {number || null}
         */
        this.CreditBalance = null;

        /**
         * 真实可用信用额度
         * @type {number || null}
         */
        this.RealCreditBalance = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RealBalance = 'RealBalance' in params ? params.RealBalance : null;
        this.CashAccountBalance = 'CashAccountBalance' in params ? params.CashAccountBalance : null;
        this.IncomeIntoAccountBalance = 'IncomeIntoAccountBalance' in params ? params.IncomeIntoAccountBalance : null;
        this.PresentAccountBalance = 'PresentAccountBalance' in params ? params.PresentAccountBalance : null;
        this.FreezeAmount = 'FreezeAmount' in params ? params.FreezeAmount : null;
        this.OweAmount = 'OweAmount' in params ? params.OweAmount : null;
        this.IsAllowArrears = 'IsAllowArrears' in params ? params.IsAllowArrears : null;
        this.IsCreditLimited = 'IsCreditLimited' in params ? params.IsCreditLimited : null;
        this.CreditAmount = 'CreditAmount' in params ? params.CreditAmount : null;
        this.CreditBalance = 'CreditBalance' in params ? params.CreditBalance : null;
        this.RealCreditBalance = 'RealCreditBalance' in params ? params.RealCreditBalance : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCostSummaryByRegion请求参数结构体
 * @class
 */
class DescribeCostSummaryByRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 每次获取数据量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 是否需要返回记录数量，0不需要，1需要，默认不需要
         * @type {number || null}
         */
        this.NeedRecordNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;

    }
}

/**
 * 按产品汇总产品详情
 * @class
 */
class BusinessSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * 产品名称：云产品大类，如云服务器CVM、云数据库MySQL
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * 实际花费
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 费用所占百分比，两位小数
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * 现金金额
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 赠送金金额
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * 代金券金额
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * 账单月份，格式2019-08
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * 账单明细组件对象
 * @class
 */
class BillDetailComponent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件类型:资源组件类型的名称，如内存、硬盘等
         * @type {string || null}
         */
        this.ComponentCodeName = null;

        /**
         * 组件名称:资源组件的名称，如云数据库MySQL-内存等
         * @type {string || null}
         */
        this.ItemCodeName = null;

        /**
         * 组件刊例价:资源组件的原始价格，保持原始粒度
         * @type {string || null}
         */
        this.SinglePrice = null;

        /**
         * 组件指定价
         * @type {string || null}
         */
        this.SpecifiedPrice = null;

        /**
         * 价格单位
         * @type {string || null}
         */
        this.PriceUnit = null;

        /**
         * 组件用量
         * @type {string || null}
         */
        this.UsedAmount = null;

        /**
         * 组件用量单位
         * @type {string || null}
         */
        this.UsedAmountUnit = null;

        /**
         * 使用时长
         * @type {string || null}
         */
        this.TimeSpan = null;

        /**
         * 时长单位
         * @type {string || null}
         */
        this.TimeUnitName = null;

        /**
         * 组件原价
         * @type {string || null}
         */
        this.Cost = null;

        /**
         * 折扣率
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * 优惠类型
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * 优惠后总价
         * @type {string || null}
         */
        this.RealCost = null;

        /**
         * 代金券支付金额
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * 现金支付金额
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 赠送账户支付金额
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * 组件类型代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ItemCode = null;

        /**
         * 组件名称代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComponentCode = null;

        /**
         * 合同价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentCodeName = 'ComponentCodeName' in params ? params.ComponentCodeName : null;
        this.ItemCodeName = 'ItemCodeName' in params ? params.ItemCodeName : null;
        this.SinglePrice = 'SinglePrice' in params ? params.SinglePrice : null;
        this.SpecifiedPrice = 'SpecifiedPrice' in params ? params.SpecifiedPrice : null;
        this.PriceUnit = 'PriceUnit' in params ? params.PriceUnit : null;
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedAmountUnit = 'UsedAmountUnit' in params ? params.UsedAmountUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnitName = 'TimeUnitName' in params ? params.TimeUnitName : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.ItemCode = 'ItemCode' in params ? params.ItemCode : null;
        this.ComponentCode = 'ComponentCode' in params ? params.ComponentCode : null;
        this.ContractPrice = 'ContractPrice' in params ? params.ContractPrice : null;

    }
}

/**
 * 消耗费用趋势
 * @class
 */
class ConsumptionSummaryTrend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 趋势类型，upward上升/downward下降/none无
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 趋势值，Type为none是该字段值为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeBillSummaryByRegion请求参数结构体
 * @class
 */
class DescribeBillSummaryByRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * DescribeBillSummaryByPayMode请求参数结构体
 * @class
 */
class DescribeBillSummaryByPayModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * DescribeCostSummaryByProject请求参数结构体
 * @class
 */
class DescribeCostSummaryByProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 每次获取数据量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 是否需要返回记录数量，0不需要，1需要，默认不需要
         * @type {number || null}
         */
        this.NeedRecordNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;

    }
}

/**
 * 使用记录
 * @class
 */
class UsageRecords extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用金额（微分）
         * @type {number || null}
         */
        this.UsedAmount = null;

        /**
         * 使用时间
         * @type {string || null}
         */
        this.UsedTime = null;

        /**
         * 使用记录细节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsageDetails> || null}
         */
        this.UsageDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedTime = 'UsedTime' in params ? params.UsedTime : null;

        if (params.UsageDetails) {
            this.UsageDetails = new Array();
            for (let z in params.UsageDetails) {
                let obj = new UsageDetails();
                obj.deserialize(params.UsageDetails[z]);
                this.UsageDetails.push(obj);
            }
        }

    }
}

/**
 * 消耗按地域汇总详情
 * @class
 */
class ConsumptionRegionSummaryDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 折后总价
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 趋势
         * @type {ConsumptionSummaryTrend || null}
         */
        this.Trend = null;

        /**
         * 产品消费详情
         * @type {Array.<ConsumptionBusinessSummaryDataItem> || null}
         */
        this.Business = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

        if (params.Trend) {
            let obj = new ConsumptionSummaryTrend();
            obj.deserialize(params.Trend)
            this.Trend = obj;
        }

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new ConsumptionBusinessSummaryDataItem();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }

    }
}

/**
 * DescribeDosageCosDetailByDate返回参数结构体
 * @class
 */
class DescribeDosageCosDetailByDateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用量数组
         * @type {Array.<CosDetailSets> || null}
         */
        this.DetailSets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DetailSets) {
            this.DetailSets = new Array();
            for (let z in params.DetailSets) {
                let obj = new CosDetailSets();
                obj.deserialize(params.DetailSets[z]);
                this.DetailSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 购买商品信息
 * @class
 */
class UsageDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 商品细节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubProductName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.SubProductName = 'SubProductName' in params ? params.SubProductName : null;

    }
}

/**
 * DescribeBillResourceSummary返回参数结构体
 * @class
 */
class DescribeBillResourceSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源汇总列表
         * @type {Array.<BillResourceSummary> || null}
         */
        this.ResourceSummarySet = null;

        /**
         * 资源汇总列表总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResourceSummarySet) {
            this.ResourceSummarySet = new Array();
            for (let z in params.ResourceSummarySet) {
                let obj = new BillResourceSummary();
                obj.deserialize(params.ResourceSummarySet[z]);
                this.ResourceSummarySet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 按交易类型汇总消费详情
 * @class
 */
class ActionSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易类型：包年包月新购/续费/升降配/退款、按量计费扣费、调账补偿/扣费等类型
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 交易类型名称
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * 实际花费
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 费用所占百分比，两位小数
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * 现金金额
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 赠送金金额
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * 代金券金额
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * 账单月份，格式2019-08
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeVoucherInfo请求参数结构体
 * @class
 */
class DescribeVoucherInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一页多少条数据，默认是20条，最大不超过1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 第多少页，默认是1
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 券状态：待使用：unUsed，已使用： used，已发货：delivered，已作废： cancel，已过期：overdue
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 代金券id
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * 代金券订单id
         * @type {string || null}
         */
        this.CodeId = null;

        /**
         * 商品码
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 活动id
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * 代金券名称
         * @type {string || null}
         */
        this.VoucherName = null;

        /**
         * 发放开始时间
         * @type {string || null}
         */
        this.TimeFrom = null;

        /**
         * 发放结束时间
         * @type {string || null}
         */
        this.TimeTo = null;

        /**
         * 指定排序字段：BeginTime开始时间、EndTime到期时间、CreateTime创建时间
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * 指定升序降序：desc、asc
         * @type {string || null}
         */
        this.SortOrder = null;

        /**
         * 付费模式，postPay后付费/prePay预付费/riPay预留实例/""或者"*"表示全部模式，如果payMode为""或"*"，那么productCode与subProductCode必须传空
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 付费场景PayMode=postPay时：spotpay-竞价实例,"settle account"-普通后付费PayMode=prePay时：purchase-包年包月新购，renew-包年包月续费（自动续费），modify-包年包月配置变更(变配）PayMode=riPay时：oneOffFee-预留实例预付，hourlyFee-预留实例每小时扣费，*-支持全部付费场景
         * @type {string || null}
         */
        this.PayScene = null;

        /**
         * 操作人，默认就是用户uin
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.CodeId = 'CodeId' in params ? params.CodeId : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.VoucherName = 'VoucherName' in params ? params.VoucherName : null;
        this.TimeFrom = 'TimeFrom' in params ? params.TimeFrom : null;
        this.TimeTo = 'TimeTo' in params ? params.TimeTo : null;
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayScene = 'PayScene' in params ? params.PayScene : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 适用商品信息
 * @class
 */
class ApplicableProducts extends  AbstractModel {
    constructor(){
        super();

        /**
         * 适用商品名称，值为“全产品通用”或商品名称组成的string，以","分割。
         * @type {string || null}
         */
        this.GoodsName = null;

        /**
         * postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。如GoodsName为多个商品名以","分割组成的string，而PayMode为"*"，表示每一件商品的模式都为"*"。
         * @type {string || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsName = 'GoodsName' in params ? params.GoodsName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * 付费模式过滤条件
 * @class
 */
class ConditionPayMode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付费模式
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 付费模式名称
         * @type {string || null}
         */
        this.PayModeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;

    }
}

/**
 * DescribeVoucherUsageDetails请求参数结构体
 * @class
 */
class DescribeVoucherUsageDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一页多少条数据，默认是20条，最大不超过1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 第多少页，默认是1
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 代金券id
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * 操作人，默认就是用户uin
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeDealsByCond请求参数结构体
 * @class
 */
class DescribeDealsByCondRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 一页多少条数据，默认是20条，最大不超过1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 第多少页，从0开始，默认是0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 订单状态,默认为4（成功的订单）
订单的状态
1：未支付
2：已支付3：发货中
4：已发货
5：发货失败
6：已退款
7：已关单
8：订单过期
9：订单已失效
10：产品已失效
11：代付拒绝
12：支付中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 大订单号
         * @type {string || null}
         */
        this.BigDealId = null;

        /**
         * 资源id
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * DescribeBillResourceSummary请求参数结构体
 * @class
 */
class DescribeBillResourceSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量，最大值为1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 月份，格式为yyyy-mm。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。
         * @type {string || null}
         */
        this.Month = null;

        /**
         * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * 查询交易类型，如下：
包年包月新购
包年包月续费
包年包月配置变更
包年包月退款
按量计费扣费
按量计费小时结
按量计费日结
按量计费月结
线下项目扣费
线下产品扣费
调账扣费
调账补偿
竞价实例小时结
线下项目调账补偿
线下产品调账补偿
优惠扣费
优惠补偿
按量计费迁入资源
按量计费迁出资源
包年包月迁入资源
包年包月迁出资源
预付费用
小时费用
预留实例退款
按量计费冲正
按量计费冲正
按量计费冲正
按量计费冲正
按量计费冲正
包年包月转按量
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 查询指定资源信息
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 付费模式 prePay/postPay
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 产品名称代码
备注：如需获取当月使用过的BusinessCode，请调用API：<a href="https://cloud.tencent.com/document/product/555/35761">获取产品汇总费用分布</a>
         * @type {string || null}
         */
        this.BusinessCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;

    }
}

/**
 * PayDeals请求参数结构体
 * @class
 */
class PayDealsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要支付的一个或者多个子订单号，与BigDealIds字段两者必须且仅传一个参数
         * @type {Array.<string> || null}
         */
        this.OrderIds = null;

        /**
         * 是否自动使用代金券,1:是,0否,默认0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表,目前仅支持指定一张代金券
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 需要支付的一个或者多个大订单号，与OrderIds字段两者必须且仅传一个参数
         * @type {Array.<string> || null}
         */
        this.BigDealIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIds = 'OrderIds' in params ? params.OrderIds : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;

    }
}

/**
 * DescribeBillList请求参数结构体
 * @class
 */
class DescribeBillListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询范围的起始时间（包含）
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询范围的结束时间（包含）
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 翻页偏移量，初始值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页的限制数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 交易类型： all所有交易类型，recharge充值，return退款，unblock解冻，agentin资金转入，advanced垫付，cash提现，deduct扣费，block冻结，agentout资金转出，repay垫付回款，repayment还款(仅国际信用账户)，adj_refund调增(仅国际信用账户)，adj_deduct调减(仅国际信用账户)
         * @type {Array.<string> || null}
         */
        this.PayType = null;

        /**
         * 扣费模式，
当所选的交易类型为扣费deduct时： 
all所有扣费类型;trade预付费支付;hour_h按量小时结;hour_d按量日结;hour_m按量月结;decompensate调账扣费;other第三方扣费;panshi 线下项目扣费;offline 线下产品扣费;

当所选的交易类型为扣费recharge时： 
online 在线充值;bank-enterprice 银企直连;offline 线下充值;transfer 分成充值

当所选的交易类型为扣费cash时： 
online 线上提现;offline 线下提现;panshi 赠送金清零

当所选的交易类型为扣费advanced时： 
advanced 垫付充值

当所选的交易类型为扣费repay时： 
panshi 垫付回款

当所选的交易类型为扣费block时： 
other 第三方冻结;hour 按量冻结;month按月冻结

当所选的交易类型为扣费return时： 
compensate 调账补偿;trade 预付费退款

当所选的交易类型为扣费unblock时：
other 第三方解冻;hour 按量解冻;month 按月解冻
         * @type {Array.<string> || null}
         */
        this.SubPayType = null;

        /**
         * 是否返回0元交易金额的交易项，取值：0-不返回，1-返回。不传该参数则不返回
         * @type {number || null}
         */
        this.WithZeroAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.SubPayType = 'SubPayType' in params ? params.SubPayType : null;
        this.WithZeroAmount = 'WithZeroAmount' in params ? params.WithZeroAmount : null;

    }
}

/**
 * PayDeals返回参数结构体
 * @class
 */
class PayDealsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 此次操作支付成功的子订单号数组
         * @type {Array.<string> || null}
         */
        this.OrderIds = null;

        /**
         * 此次操作支付成功的资源Id数组
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 此次操作支付成功的大订单号数组
         * @type {Array.<string> || null}
         */
        this.BigDealIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIds = 'OrderIds' in params ? params.OrderIds : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 总数
 * @class
 */
class SummaryTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * 账单明细数据对象
 * @class
 */
class BillDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称：云产品大类，如云服务器CVM、云数据库MySQL
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * 子产品名称：云产品子类，如云服务器CVM-标准型S1
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * 计费模式：包年包月和按量计费
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * 项目:资源所属项目
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 区域：资源所属地域，如华南地区（广州）
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 可用区：资源所属可用区，如广州三区
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 交易类型
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * 订单ID
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 交易ID
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 扣费时间
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * 开始使用时间
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * 结束使用时间
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * 组件列表
         * @type {Array.<BillDetailComponent> || null}
         */
        this.ComponentSet = null;

        /**
         * 支付者UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 使用者UIN
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 操作者UIN
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Tag 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * 产品名称代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * 子产品名称代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 交易类型代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 区域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 项目ID:资源所属项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;

        if (params.ComponentSet) {
            this.ComponentSet = new Array();
            for (let z in params.ComponentSet) {
                let obj = new BillDetailComponent();
                obj.deserialize(params.ComponentSet[z]);
                this.ComponentSet.push(obj);
            }
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeBillSummaryByTag返回参数结构体
 * @class
 */
class DescribeBillSummaryByTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否准备好，0未准备好，1准备好
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * 各标签值花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SummaryTotal || null}
         */
        this.SummaryTotal = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new TagSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }

        if (params.SummaryTotal) {
            let obj = new SummaryTotal();
            obj.deserialize(params.SummaryTotal)
            this.SummaryTotal = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 按标签汇总消费详情
 * @class
 */
class TagSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * 实际花费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 费用所占百分比，两位小数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeCostSummaryByResource返回参数结构体
 * @class
 */
class DescribeCostSummaryByResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否准备好，0未准备好，1准备好
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * 消耗详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConsumptionSummaryTotal || null}
         */
        this.Total = null;

        /**
         * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConsumptionResourceSummaryConditionValue || null}
         */
        this.ConditionValue = null;

        /**
         * 记录数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordNum = null;

        /**
         * 资源消耗详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConsumptionResourceSummaryDataItem> || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total)
            this.Total = obj;
        }

        if (params.ConditionValue) {
            let obj = new ConsumptionResourceSummaryConditionValue();
            obj.deserialize(params.ConditionValue)
            this.ConditionValue = obj;
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionResourceSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillDetail返回参数结构体
 * @class
 */
class DescribeBillDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 详情列表
         * @type {Array.<BillDetail> || null}
         */
        this.DetailSet = null;

        /**
         * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new BillDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 消耗按资源汇总过滤条件
 * @class
 */
class ConsumptionResourceSummaryConditionValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品列表
         * @type {Array.<ConditionBusiness> || null}
         */
        this.Business = null;

        /**
         * 项目列表
         * @type {Array.<ConditionProject> || null}
         */
        this.Project = null;

        /**
         * 地域列表
         * @type {Array.<ConditionRegion> || null}
         */
        this.Region = null;

        /**
         * 付费模式列表
         * @type {Array.<ConditionPayMode> || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new ConditionBusiness();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }

        if (params.Project) {
            this.Project = new Array();
            for (let z in params.Project) {
                let obj = new ConditionProject();
                obj.deserialize(params.Project[z]);
                this.Project.push(obj);
            }
        }

        if (params.Region) {
            this.Region = new Array();
            for (let z in params.Region) {
                let obj = new ConditionRegion();
                obj.deserialize(params.Region[z]);
                this.Region.push(obj);
            }
        }

        if (params.PayMode) {
            this.PayMode = new Array();
            for (let z in params.PayMode) {
                let obj = new ConditionPayMode();
                obj.deserialize(params.PayMode[z]);
                this.PayMode.push(obj);
            }
        }

    }
}

/**
 * 订单数据对象
 * @class
 */
class Deal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 订单状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 支付者
         * @type {string || null}
         */
        this.Payer = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 创建人
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 实际支付金额（分）
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * 代金券抵扣金额（分）
         * @type {number || null}
         */
        this.VoucherDecline = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 产品分类ID
         * @type {number || null}
         */
        this.GoodsCategoryId = null;

        /**
         * 产品详情
         * @type {Array.<ProductInfo> || null}
         */
        this.ProductInfo = null;

        /**
         * 时长
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 时间单位
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 货币单位
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 折扣率
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * 单价（分）
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 原价（分）
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * 产品编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 子产品编码
         * @type {string || null}
         */
        this.SubProductCode = null;

        /**
         * 大订单号
         * @type {string || null}
         */
        this.BigDealId = null;

        /**
         * 退费公式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Formula = null;

        /**
         * 退费涉及订单信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RefReturnDeals = null;

        /**
         * 付费模式：prePay 预付费 postPay后付费 riPay预留实例
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 交易类型
modifyNetworkMode 调整带宽模式
modifyNetworkSize 调整带宽大小
refund 退款
downgrade 降配
upgrade 升配
renew 续费
purchase 购买
preMoveOut 包年包月迁出资源
preMoveIn 包年包月迁入资源
preToPost 预付费转后付费
postMoveOut 按量计费迁出资源
postMoveIn 按量计费迁入资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 产品编码中文名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 子产品编码中文名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubProductName = null;

        /**
         * 订单对应的资源id, 查询参数Limit超过200，将返回null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Payer = 'Payer' in params ? params.Payer : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherDecline = 'VoucherDecline' in params ? params.VoucherDecline : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GoodsCategoryId = 'GoodsCategoryId' in params ? params.GoodsCategoryId : null;

        if (params.ProductInfo) {
            this.ProductInfo = new Array();
            for (let z in params.ProductInfo) {
                let obj = new ProductInfo();
                obj.deserialize(params.ProductInfo[z]);
                this.ProductInfo.push(obj);
            }
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.SubProductCode = 'SubProductCode' in params ? params.SubProductCode : null;
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;
        this.Formula = 'Formula' in params ? params.Formula : null;
        this.RefReturnDeals = 'RefReturnDeals' in params ? params.RefReturnDeals : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.SubProductName = 'SubProductName' in params ? params.SubProductName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * DescribeCostDetail请求参数结构体
 * @class
 */
class DescribeCostDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 周期开始时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通成本分析后，且距今 24 个月内的数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 周期结束时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通成本分析后，且距今 24 个月内的数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。不能早于开通成本分析的月份，最多可拉取24个月内的数据。
         * @type {string || null}
         */
        this.Month = null;

        /**
         * 查询指定产品信息（暂时未开放获取）
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 付费模式 prePay/postPay
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 查询指定资源信息
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * DescribeVoucherUsageDetails返回参数结构体
 * @class
 */
class DescribeVoucherUsageDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 券总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总已用金额（微分）
         * @type {number || null}
         */
        this.TotalUsedAmount = null;

        /**
         * 代金券使用记录细节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsageRecords> || null}
         */
        this.UsageRecords = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalUsedAmount = 'TotalUsedAmount' in params ? params.TotalUsedAmount : null;

        if (params.UsageRecords) {
            this.UsageRecords = new Array();
            for (let z in params.UsageRecords) {
                let obj = new UsageRecords();
                obj.deserialize(params.UsageRecords[z]);
                this.UsageRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDealsByCond返回参数结构体
 * @class
 */
class DescribeDealsByCondResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单列表
         * @type {Array.<Deal> || null}
         */
        this.Deals = null;

        /**
         * 订单总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new Deal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 项目过滤条件
 * @class
 */
class ConditionProject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * cos产品用量明细返回数据结构
 * @class
 */
class CosDetailSets extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储桶名称
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 用量开始时间
         * @type {string || null}
         */
        this.DosageBeginTime = null;

        /**
         * 用量结束时间
         * @type {string || null}
         */
        this.DosageEndTime = null;

        /**
         * 一级产品类型名称
         * @type {string || null}
         */
        this.SubProductCodeName = null;

        /**
         * 二级产品类型名称
         * @type {string || null}
         */
        this.BillingItemCodeName = null;

        /**
         * 用量
         * @type {string || null}
         */
        this.DosageValue = null;

        /**
         * 单位
         * @type {string || null}
         */
        this.Unit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.DosageBeginTime = 'DosageBeginTime' in params ? params.DosageBeginTime : null;
        this.DosageEndTime = 'DosageEndTime' in params ? params.DosageEndTime : null;
        this.SubProductCodeName = 'SubProductCodeName' in params ? params.SubProductCodeName : null;
        this.BillingItemCodeName = 'BillingItemCodeName' in params ? params.BillingItemCodeName : null;
        this.DosageValue = 'DosageValue' in params ? params.DosageValue : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * DescribeBillSummaryByProject请求参数结构体
 * @class
 */
class DescribeBillSummaryByProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * DescribeBillSummaryByProject返回参数结构体
 * @class
 */
class DescribeBillSummaryByProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否准备好，0未准备好，1准备好
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * 各项目花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProjectSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new ProjectSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品过滤条件
 * @class
 */
class ConditionBusiness extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称代码
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.BusinessCodeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;

    }
}

/**
 * DescribeCostSummaryByResource请求参数结构体
 * @class
 */
class DescribeCostSummaryByResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 每次获取数据量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 是否需要返回记录数量，0不需要，1需要，默认不需要
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * 是否需要返回过滤条件，0不需要，1需要，默认不需要
         * @type {number || null}
         */
        this.NeedConditionValue = null;

        /**
         * 过滤条件，只支持ResourceKeyword(资源关键字，支持资源id及资源名称模糊查询)，ProjectIds（项目id），RegionIds(地域id)，PayModes(付费模式，可选prePay和postPay)，HideFreeCost（是否隐藏0元流水，可选0和1），OrderByCost（按费用排序规则，可选desc和asc）
         * @type {Conditions || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.NeedConditionValue = 'NeedConditionValue' in params ? params.NeedConditionValue : null;

        if (params.Conditions) {
            let obj = new Conditions();
            obj.deserialize(params.Conditions)
            this.Conditions = obj;
        }

    }
}

/**
 * DescribeCostDetail返回参数结构体
 * @class
 */
class DescribeCostDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消耗明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CostDetail> || null}
         */
        this.DetailSet = null;

        /**
         * 记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new CostDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDosageCosDetailByDate请求参数结构体
 * @class
 */
class DescribeDosageCosDetailByDateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询用量开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询用量结束时间（与开始时间同月，不支持跨月查询）
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * COS 存储桶名称，可通过Get Service 接口是用来获取请求者名下的所有存储空间列表（Bucket list）https://cloud.tencent.com/document/product/436/8291
         * @type {string || null}
         */
        this.BucketName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;

    }
}

/**
 * 不适用商品信息
 * @class
 */
class ExcludedProducts extends  AbstractModel {
    constructor(){
        super();

        /**
         * 不适用商品名称
         * @type {string || null}
         */
        this.GoodsName = null;

        /**
         * postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。
         * @type {string || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsName = 'GoodsName' in params ? params.GoodsName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * 按付费模式汇总消费详情
 * @class
 */
class PayModeSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付费模式
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 付费模式名称
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * 实际花费
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 费用所占百分比，两位小数
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * 按交易类型：包年包月新购/续费/升降配/退款、按量计费扣费、调账补偿/扣费等类型汇总消费详情
         * @type {Array.<ActionSummaryOverviewItem> || null}
         */
        this.Detail = null;

        /**
         * 现金金额
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 赠送金金额
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * 代金券金额
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new ActionSummaryOverviewItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * 按产品汇总总费用
 * @class
 */
class BusinessSummaryTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总花费
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * 代金券金额
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * 赠送金金额
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * 现金金额
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeCostSummaryByRegion返回参数结构体
 * @class
 */
class DescribeCostSummaryByRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否准备好，0未准备好，1准备好
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * 消耗详情
         * @type {ConsumptionSummaryTotal || null}
         */
        this.Total = null;

        /**
         * 消耗按地域汇总详情
         * @type {Array.<ConsumptionRegionSummaryDataItem> || null}
         */
        this.Data = null;

        /**
         * 记录数量，NeedRecordNum为0是返回null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total)
            this.Total = obj;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionRegionSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CostComponentSet: CostComponentSet,
    VoucherInfos: VoucherInfos,
    DescribeCostSummaryByProductRequest: DescribeCostSummaryByProductRequest,
    ConsumptionSummaryTotal: ConsumptionSummaryTotal,
    DescribeCostSummaryByProjectResponse: DescribeCostSummaryByProjectResponse,
    DescribeDosageDetailByDateRequest: DescribeDosageDetailByDateRequest,
    ProjectSummaryOverviewItem: ProjectSummaryOverviewItem,
    ConditionRegion: ConditionRegion,
    DescribeBillSummaryByProductRequest: DescribeBillSummaryByProductRequest,
    ConsumptionBusinessSummaryDataItem: ConsumptionBusinessSummaryDataItem,
    DetailPoint: DetailPoint,
    CostDetail: CostDetail,
    DescribeBillSummaryByPayModeResponse: DescribeBillSummaryByPayModeResponse,
    BillResourceSummary: BillResourceSummary,
    DescribeBillSummaryByTagRequest: DescribeBillSummaryByTagRequest,
    Conditions: Conditions,
    DescribeBillSummaryByProductResponse: DescribeBillSummaryByProductResponse,
    BillTagInfo: BillTagInfo,
    DescribeBillSummaryByRegionResponse: DescribeBillSummaryByRegionResponse,
    DetailSet: DetailSet,
    BillTransactionInfo: BillTransactionInfo,
    DescribeVoucherInfoResponse: DescribeVoucherInfoResponse,
    ConsumptionResourceSummaryDataItem: ConsumptionResourceSummaryDataItem,
    DescribeAccountBalanceRequest: DescribeAccountBalanceRequest,
    DescribeBillDetailRequest: DescribeBillDetailRequest,
    ConsumptionProjectSummaryDataItem: ConsumptionProjectSummaryDataItem,
    RegionSummaryOverviewItem: RegionSummaryOverviewItem,
    DescribeCostSummaryByProductResponse: DescribeCostSummaryByProductResponse,
    ProductInfo: ProductInfo,
    DescribeDosageDetailByDateResponse: DescribeDosageDetailByDateResponse,
    DescribeBillListResponse: DescribeBillListResponse,
    DescribeAccountBalanceResponse: DescribeAccountBalanceResponse,
    DescribeCostSummaryByRegionRequest: DescribeCostSummaryByRegionRequest,
    BusinessSummaryOverviewItem: BusinessSummaryOverviewItem,
    BillDetailComponent: BillDetailComponent,
    ConsumptionSummaryTrend: ConsumptionSummaryTrend,
    DescribeBillSummaryByRegionRequest: DescribeBillSummaryByRegionRequest,
    DescribeBillSummaryByPayModeRequest: DescribeBillSummaryByPayModeRequest,
    DescribeCostSummaryByProjectRequest: DescribeCostSummaryByProjectRequest,
    UsageRecords: UsageRecords,
    ConsumptionRegionSummaryDataItem: ConsumptionRegionSummaryDataItem,
    DescribeDosageCosDetailByDateResponse: DescribeDosageCosDetailByDateResponse,
    UsageDetails: UsageDetails,
    DescribeBillResourceSummaryResponse: DescribeBillResourceSummaryResponse,
    ActionSummaryOverviewItem: ActionSummaryOverviewItem,
    DescribeVoucherInfoRequest: DescribeVoucherInfoRequest,
    ApplicableProducts: ApplicableProducts,
    ConditionPayMode: ConditionPayMode,
    DescribeVoucherUsageDetailsRequest: DescribeVoucherUsageDetailsRequest,
    DescribeDealsByCondRequest: DescribeDealsByCondRequest,
    DescribeBillResourceSummaryRequest: DescribeBillResourceSummaryRequest,
    PayDealsRequest: PayDealsRequest,
    DescribeBillListRequest: DescribeBillListRequest,
    PayDealsResponse: PayDealsResponse,
    SummaryTotal: SummaryTotal,
    BillDetail: BillDetail,
    DescribeBillSummaryByTagResponse: DescribeBillSummaryByTagResponse,
    TagSummaryOverviewItem: TagSummaryOverviewItem,
    DescribeCostSummaryByResourceResponse: DescribeCostSummaryByResourceResponse,
    DescribeBillDetailResponse: DescribeBillDetailResponse,
    ConsumptionResourceSummaryConditionValue: ConsumptionResourceSummaryConditionValue,
    Deal: Deal,
    DescribeCostDetailRequest: DescribeCostDetailRequest,
    DescribeVoucherUsageDetailsResponse: DescribeVoucherUsageDetailsResponse,
    DescribeDealsByCondResponse: DescribeDealsByCondResponse,
    ConditionProject: ConditionProject,
    CosDetailSets: CosDetailSets,
    DescribeBillSummaryByProjectRequest: DescribeBillSummaryByProjectRequest,
    DescribeBillSummaryByProjectResponse: DescribeBillSummaryByProjectResponse,
    ConditionBusiness: ConditionBusiness,
    DescribeCostSummaryByResourceRequest: DescribeCostSummaryByResourceRequest,
    DescribeCostDetailResponse: DescribeCostDetailResponse,
    DescribeDosageCosDetailByDateRequest: DescribeDosageCosDetailByDateRequest,
    ExcludedProducts: ExcludedProducts,
    PayModeSummaryOverviewItem: PayModeSummaryOverviewItem,
    BusinessSummaryTotal: BusinessSummaryTotal,
    DescribeCostSummaryByRegionResponse: DescribeCostSummaryByRegionResponse,

}
