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
 * CheckDomain返回参数结构体
 * @class
 */
class CheckDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所查询域名名称
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否能够注册
         * @type {boolean || null}
         */
        this.Available = null;

        /**
         * 不能注册原因
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 是否是溢价词
         * @type {boolean || null}
         */
        this.Premium = null;

        /**
         * 域名价格
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 是否是敏感词
         * @type {boolean || null}
         */
        this.BlackWord = null;

        /**
         * 溢价词描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 溢价词的续费价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FeeRenew = null;

        /**
         * 域名真实价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealPrice = null;

        /**
         * 溢价词的转入价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FeeTransfer = null;

        /**
         * 溢价词的赎回价格
         * @type {number || null}
         */
        this.FeeRestore = null;

        /**
         * 检测年限
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否支持北京备案  true 支持  false 不支持
         * @type {boolean || null}
         */
        this.RecordSupport = null;

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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Premium = 'Premium' in params ? params.Premium : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.BlackWord = 'BlackWord' in params ? params.BlackWord : null;
        this.Describe = 'Describe' in params ? params.Describe : null;
        this.FeeRenew = 'FeeRenew' in params ? params.FeeRenew : null;
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.FeeTransfer = 'FeeTransfer' in params ? params.FeeTransfer : null;
        this.FeeRestore = 'FeeRestore' in params ? params.FeeRestore : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.RecordSupport = 'RecordSupport' in params ? params.RecordSupport : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名价格信息
 * @class
 */
class PriceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名后缀，例如.com
         * @type {string || null}
         */
        this.Tld = null;

        /**
         * 购买年限，范围[1-10]
         * @type {number || null}
         */
        this.Year = null;

        /**
         * 域名原价
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 域名现价
         * @type {number || null}
         */
        this.RealPrice = null;

        /**
         * 商品的购买类型，新购，续费，赎回，转入，续费并转入
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tld = 'Tld' in params ? params.Tld : null;
        this.Year = 'Year' in params ? params.Year : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * DescribeDomainPriceList请求参数结构体
 * @class
 */
class DescribeDomainPriceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询价格的后缀列表。默认则为全部后缀
         * @type {Array.<string> || null}
         */
        this.TldList = null;

        /**
         * 查询购买的年份，默认会列出所有年份的价格
         * @type {Array.<number> || null}
         */
        this.Year = null;

        /**
         * 域名的购买类型：new  新购，renew 续费，redem 赎回，tran 转入
         * @type {Array.<string> || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TldList = 'TldList' in params ? params.TldList : null;
        this.Year = 'Year' in params ? params.Year : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * DescribeDomainBaseInfo返回参数结构体
 * @class
 */
class DescribeDomainBaseInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名信息
         * @type {DomainBaseInfo || null}
         */
        this.DomainInfo = null;

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

        if (params.DomainInfo) {
            let obj = new DomainBaseInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainBaseInfo请求参数结构体
 * @class
 */
class DescribeDomainBaseInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * 获取域名基础信息
 * @class
 */
class DomainBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名资源ID。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 域名名称。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 域名实名认证状态。
NotUpload：未实名认证
InAudit：实名审核中
Approved：实名审核通过
Reject：实名审核失败
         * @type {string || null}
         */
        this.RealNameAuditStatus = null;

        /**
         * 域名实名认证不通过原因。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealNameAuditUnpassReason = null;

        /**
         * 域名命名审核状态。
NotAudit：命名审核未上传
Pending：命名审核待上传
Auditing：域名命名审核中
Approved：域名命名审核通过
Rejected：域名命名审核拒绝
         * @type {string || null}
         */
        this.DomainNameAuditStatus = null;

        /**
         * 域名命名审核不通过原因。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DomainNameAuditUnpassReason = null;

        /**
         * 注册时间。
         * @type {string || null}
         */
        this.CreationDate = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * 域名状态。
ok：正常
serverHold：注册局暂停解析 
clientHold：注册商暂停解析
pendingTransfer：转移中
renewingPeriod：续费期
redemptionPeriod：偿还期
pendingDelete：删除期
serverTransferProhibited：注册局禁止转移
serverUpdateProhibited：注册局禁止更新
serverDeleteProhibited：注册局禁止删除
clientTransferProhibited：注册商禁止转移
clientUpdateProhibited：注册商禁止更新
clientDeleteProhibited：注册商禁止删除
         * @type {Array.<string> || null}
         */
        this.DomainStatus = null;

        /**
         * 域名购买状态。
ok：正常
RegisterPending：待注册
RegisterDoing：注册中
RegisterFailed：注册失败
AboutToExpire: 即将过期
RenewPending：已进入续费期，需要进行续费
RenewDoing：续费中
RedemptionPending：已进入赎回期，需要进行续费
RedemptionDoing：赎回中
TransferPending：待转入中
TransferTransing：转入中
TransferFailed：转入失败
         * @type {string || null}
         */
        this.BuyStatus = null;

        /**
         * 注册类型
epp （腾讯云自有域名）
xinnet (新网域名)
         * @type {string || null}
         */
        this.RegistrarType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.RealNameAuditStatus = 'RealNameAuditStatus' in params ? params.RealNameAuditStatus : null;
        this.RealNameAuditUnpassReason = 'RealNameAuditUnpassReason' in params ? params.RealNameAuditUnpassReason : null;
        this.DomainNameAuditStatus = 'DomainNameAuditStatus' in params ? params.DomainNameAuditStatus : null;
        this.DomainNameAuditUnpassReason = 'DomainNameAuditUnpassReason' in params ? params.DomainNameAuditUnpassReason : null;
        this.CreationDate = 'CreationDate' in params ? params.CreationDate : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;
        this.BuyStatus = 'BuyStatus' in params ? params.BuyStatus : null;
        this.RegistrarType = 'RegistrarType' in params ? params.RegistrarType : null;

    }
}

/**
 * DescribeDomainPriceList返回参数结构体
 * @class
 */
class DescribeDomainPriceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名价格列表
         * @type {Array.<PriceInfo> || null}
         */
        this.PriceList = null;

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

        if (params.PriceList) {
            this.PriceList = new Array();
            for (let z in params.PriceList) {
                let obj = new PriceInfo();
                obj.deserialize(params.PriceList[z]);
                this.PriceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckDomain请求参数结构体
 * @class
 */
class CheckDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所查询域名名称
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 年限
         * @type {string || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

module.exports = {
    CheckDomainResponse: CheckDomainResponse,
    PriceInfo: PriceInfo,
    DescribeDomainPriceListRequest: DescribeDomainPriceListRequest,
    DescribeDomainBaseInfoResponse: DescribeDomainBaseInfoResponse,
    DescribeDomainBaseInfoRequest: DescribeDomainBaseInfoRequest,
    DomainBaseInfo: DomainBaseInfo,
    DescribeDomainPriceListResponse: DescribeDomainPriceListResponse,
    CheckDomainRequest: CheckDomainRequest,

}
