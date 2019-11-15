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
非CDN业务查询时值为空
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 子产品：云产品子类，如云服务器CVM-标准型S1， 当没有获取到子产品名称时，返回"-"
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
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分账标签键
         * @type {string || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

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
         * 周期开始时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 周期结束时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。
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
         * 查询指定产品信息
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
 * DescribeAccountBalance返回参数结构体
 * @class
 */
class DescribeAccountBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云账户信息中的”展示可用余额”字段，单位为"分"
         * @type {number || null}
         */
        this.Balance = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 产品码
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
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * 月份，格式为yyyy-mm。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。
         * @type {string || null}
         */
        this.Month = null;

        /**
         * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;

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
         * 查询账单数据的用户UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * 此次操作支付成功的订单号数组
         * @type {Array.<string> || null}
         */
        this.OrderIds = null;

        /**
         * 此次操作支付成功的资源Id数组
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * PayDeals请求参数结构体
 * @class
 */
class PayDealsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要支付的一个或者多个订单号
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

    }
}

module.exports = {
    DescribeDosageDetailByDateRequest: DescribeDosageDetailByDateRequest,
    DescribeBillSummaryByTagResponse: DescribeBillSummaryByTagResponse,
    DetailPoint: DetailPoint,
    DescribeBillSummaryByPayModeResponse: DescribeBillSummaryByPayModeResponse,
    BillResourceSummary: BillResourceSummary,
    DescribeBillSummaryByTagRequest: DescribeBillSummaryByTagRequest,
    DescribeBillSummaryByProductResponse: DescribeBillSummaryByProductResponse,
    BillTagInfo: BillTagInfo,
    DescribeBillSummaryByRegionResponse: DescribeBillSummaryByRegionResponse,
    DetailSet: DetailSet,
    DescribeAccountBalanceRequest: DescribeAccountBalanceRequest,
    DescribeBillDetailRequest: DescribeBillDetailRequest,
    RegionSummaryOverviewItem: RegionSummaryOverviewItem,
    ProductInfo: ProductInfo,
    DescribeDosageDetailByDateResponse: DescribeDosageDetailByDateResponse,
    DescribeAccountBalanceResponse: DescribeAccountBalanceResponse,
    BusinessSummaryOverviewItem: BusinessSummaryOverviewItem,
    BillDetailComponent: BillDetailComponent,
    DescribeBillSummaryByRegionRequest: DescribeBillSummaryByRegionRequest,
    DescribeBillSummaryByPayModeRequest: DescribeBillSummaryByPayModeRequest,
    DescribeBillResourceSummaryResponse: DescribeBillResourceSummaryResponse,
    ActionSummaryOverviewItem: ActionSummaryOverviewItem,
    DescribeBillSummaryByProjectRequest: DescribeBillSummaryByProjectRequest,
    DescribeDealsByCondRequest: DescribeDealsByCondRequest,
    DescribeBillResourceSummaryRequest: DescribeBillResourceSummaryRequest,
    DescribeBillSummaryByProductRequest: DescribeBillSummaryByProductRequest,
    PayDealsResponse: PayDealsResponse,
    BillDetail: BillDetail,
    TagSummaryOverviewItem: TagSummaryOverviewItem,
    ProjectSummaryOverviewItem: ProjectSummaryOverviewItem,
    DescribeBillDetailResponse: DescribeBillDetailResponse,
    Deal: Deal,
    DescribeDealsByCondResponse: DescribeDealsByCondResponse,
    DescribeBillSummaryByProjectResponse: DescribeBillSummaryByProjectResponse,
    PayDealsRequest: PayDealsRequest,
    PayModeSummaryOverviewItem: PayModeSummaryOverviewItem,
    BusinessSummaryTotal: BusinessSummaryTotal,

}
