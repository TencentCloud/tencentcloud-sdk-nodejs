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
         * 价格
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 是否是敏感词
         * @type {boolean || null}
         */
        this.BlackWord = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TldList = 'TldList' in params ? params.TldList : null;

    }
}

module.exports = {
    CheckDomainResponse: CheckDomainResponse,
    DescribeDomainPriceListResponse: DescribeDomainPriceListResponse,
    CheckDomainRequest: CheckDomainRequest,
    PriceInfo: PriceInfo,
    DescribeDomainPriceListRequest: DescribeDomainPriceListRequest,

}
