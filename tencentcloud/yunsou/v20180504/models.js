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
 * DataSearch返回参数结构体
 * @class
 */
class DataSearchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据返回信息
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
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DataSearch请求参数结构体
 * @class
 */
class DataSearchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云搜的业务ID，用以表明当前数据请求的业务
         * @type {number || null}
         */
        this.ResourceId = null;

        /**
         * 检索串
         * @type {string || null}
         */
        this.SearchQuery = null;

        /**
         * 当前页，从第0页开始计算
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * 每页结果数
         * @type {number || null}
         */
        this.NumPerPage = null;

        /**
         * 当前检索号，用于定位问题，建议指定并且全局唯一
         * @type {string || null}
         */
        this.SearchId = null;

        /**
         * 请求编码，0表示utf8，1表示gbk，建议指定
         * @type {number || null}
         */
        this.QueryEncode = null;

        /**
         * 排序类型
         * @type {number || null}
         */
        this.RankType = null;

        /**
         * 数值过滤，结果中按属性过滤
         * @type {string || null}
         */
        this.NumFilter = null;

        /**
         * 分类过滤，导航类检索请求
         * @type {string || null}
         */
        this.ClFilter = null;

        /**
         * 检索用户相关字段
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 检索来源
         * @type {number || null}
         */
        this.SourceId = null;

        /**
         * 是否进行二次检索，0关闭，1打开
         * @type {number || null}
         */
        this.SecondSearch = null;

        /**
         * 指定返回最大篇数，无特殊原因不建议指定
         * @type {number || null}
         */
        this.MaxDocReturn = null;

        /**
         * 是否smartbox检索，0关闭，1打开
         * @type {number || null}
         */
        this.IsSmartbox = null;

        /**
         * 是否打开高红标亮，0关闭，1打开
         * @type {number || null}
         */
        this.EnableAbsHighlight = null;

        /**
         * 指定访问QC纠错业务ID
         * @type {number || null}
         */
        this.QcBid = null;

        /**
         * 按指定字段进行group by，只能对数值字段进行操作
         * @type {string || null}
         */
        this.GroupBy = null;

        /**
         * 按指定字段进行distinct，只能对数值字段进行操作
         * @type {string || null}
         */
        this.Distinct = null;

        /**
         * 高级排序参数，具体参见高级排序说明
         * @type {string || null}
         */
        this.L4RankExpression = null;

        /**
         * 高级排序参数，具体参见高级排序说明
         * @type {string || null}
         */
        this.MatchValue = null;

        /**
         * 经度信息
         * @type {number || null}
         */
        this.Longitude = null;

        /**
         * 纬度信息
         * @type {number || null}
         */
        this.Latitude = null;

        /**
         * 分类过滤并集
         * @type {Array.<string> || null}
         */
        this.MultiFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.SearchQuery = 'SearchQuery' in params ? params.SearchQuery : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.NumPerPage = 'NumPerPage' in params ? params.NumPerPage : null;
        this.SearchId = 'SearchId' in params ? params.SearchId : null;
        this.QueryEncode = 'QueryEncode' in params ? params.QueryEncode : null;
        this.RankType = 'RankType' in params ? params.RankType : null;
        this.NumFilter = 'NumFilter' in params ? params.NumFilter : null;
        this.ClFilter = 'ClFilter' in params ? params.ClFilter : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SecondSearch = 'SecondSearch' in params ? params.SecondSearch : null;
        this.MaxDocReturn = 'MaxDocReturn' in params ? params.MaxDocReturn : null;
        this.IsSmartbox = 'IsSmartbox' in params ? params.IsSmartbox : null;
        this.EnableAbsHighlight = 'EnableAbsHighlight' in params ? params.EnableAbsHighlight : null;
        this.QcBid = 'QcBid' in params ? params.QcBid : null;
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;
        this.Distinct = 'Distinct' in params ? params.Distinct : null;
        this.L4RankExpression = 'L4RankExpression' in params ? params.L4RankExpression : null;
        this.MatchValue = 'MatchValue' in params ? params.MatchValue : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.MultiFilter = 'MultiFilter' in params ? params.MultiFilter : null;

    }
}

/**
 * DataManipulation请求参数结构体
 * @class
 */
class DataManipulationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作类型，add或del
         * @type {string || null}
         */
        this.OpType = null;

        /**
         * 数据编码类型
         * @type {string || null}
         */
        this.Encoding = null;

        /**
         * 数据
         * @type {string || null}
         */
        this.Contents = null;

        /**
         * 应用Id
         * @type {number || null}
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
        this.OpType = 'OpType' in params ? params.OpType : null;
        this.Encoding = 'Encoding' in params ? params.Encoding : null;
        this.Contents = 'Contents' in params ? params.Contents : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * DataManipulation返回参数结构体
 * @class
 */
class DataManipulationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回信息
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
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DataSearchResponse: DataSearchResponse,
    DataSearchRequest: DataSearchRequest,
    DataManipulationRequest: DataManipulationRequest,
    DataManipulationResponse: DataManipulationResponse,

}
