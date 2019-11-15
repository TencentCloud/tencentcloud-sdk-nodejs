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
 * 排序字段
 * @class
 */
class OrderBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段名称，取值[
bandwidth（带宽），
overloadCount（超峰值次数）
]
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 升降序，取值为[asc（升序），（升序），desc（降序）， DESC（降序）]
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 字段值，K-V形式
 * @class
 */
class KeyValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名称
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 字段取值
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeResourceList请求参数结构体
 * @class
 */
class DescribeResourceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版；shield表示棋牌）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 地域码搜索，可选，当不指定地域时空数组，当指定地域时，填地域码。例如：["gz", "sh"]
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

        /**
         * 线路搜索，可选，只有当获取高防IP资源列表是可以选填，取值为[1（BGP线路），2（南京电信），3（南京联通），99（第三方合作线路）]，当获取其他产品时请填空数组；
         * @type {Array.<number> || null}
         */
        this.Line = null;

        /**
         * 资源ID搜索，可选，当不为空数组时表示获取指定资源的资源列表；
         * @type {Array.<string> || null}
         */
        this.IdList = null;

        /**
         * 资源名称搜索，可选，当不为空字符串时表示按名称搜索资源；
         * @type {string || null}
         */
        this.Name = null;

        /**
         * IP搜索列表，可选，当不为空时表示安装IP搜索资源；
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * 资源状态搜索列表，可选，取值为[0（运行中）, 1（清洗中）, 2（封堵中）]，当填空数组时不进行状态搜索；
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 即将到期搜索；可选，取值为[0（不搜索），1（搜索即将到期的资源）]
         * @type {number || null}
         */
        this.Expire = null;

        /**
         * 排序字段，可选
         * @type {Array.<OrderBy> || null}
         */
        this.OderBy = null;

        /**
         * 一页条数，填0表示不分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 高防IP专业版资源的CNAME，可选，只对高防IP专业版资源列表有效；
         * @type {string || null}
         */
        this.CName = null;

        /**
         * 高防IP专业版资源的域名，可选，只对高防IP专业版资源列表有效；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.RegionList = 'RegionList' in params ? params.RegionList : null;
        this.Line = 'Line' in params ? params.Line : null;
        this.IdList = 'IdList' in params ? params.IdList : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Expire = 'Expire' in params ? params.Expire : null;

        if (params.OderBy) {
            this.OderBy = new Array();
            for (let z in params.OderBy) {
                let obj = new OrderBy();
                obj.deserialize(params.OderBy[z]);
                this.OderBy.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CName = 'CName' in params ? params.CName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribeResourceList返回参数结构体
 * @class
 */
class DescribeResourceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 资源记录列表
         * @type {Array.<KeyValueRecord> || null}
         */
        this.ServicePacks = null;

        /**
         * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版；shield表示棋牌）
         * @type {string || null}
         */
        this.Business = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ServicePacks) {
            this.ServicePacks = new Array();
            for (let z in params.ServicePacks) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.ServicePacks[z]);
                this.ServicePacks.push(obj);
            }
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KeyValue记录
 * @class
 */
class KeyValueRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一条记录的Key-Value数组
         * @type {Array.<KeyValue> || null}
         */
        this.Record = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new KeyValue();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }

    }
}

module.exports = {
    OrderBy: OrderBy,
    KeyValue: KeyValue,
    DescribeResourceListRequest: DescribeResourceListRequest,
    DescribeResourceListResponse: DescribeResourceListResponse,
    KeyValueRecord: KeyValueRecord,

}
