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
 * 搜索结果
 * @class
 */
class SearchResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检索耗时，单位ms
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * 搜索最多可以展示的结果数，多页
         * @type {number || null}
         */
        this.DisplayNum = null;

        /**
         * 和检索请求中的echo相对应
         * @type {string || null}
         */
        this.Echo = null;

        /**
         * 检索结果的估算篇数，由索引平台估算
         * @type {number || null}
         */
        this.EResultNum = null;

        /**
         * 检索返回的当前页码结果数
         * @type {number || null}
         */
        this.ResultNum = null;

        /**
         * 检索结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SearchResultItem> || null}
         */
        this.ResultList = null;

        /**
         * 检索的分词结果，array类型，可包含多个
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SearchResultSeg> || null}
         */
        this.SegList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.DisplayNum = 'DisplayNum' in params ? params.DisplayNum : null;
        this.Echo = 'Echo' in params ? params.Echo : null;
        this.EResultNum = 'EResultNum' in params ? params.EResultNum : null;
        this.ResultNum = 'ResultNum' in params ? params.ResultNum : null;

        if (params.ResultList) {
            this.ResultList = new Array();
            for (let z in params.ResultList) {
                let obj = new SearchResultItem();
                obj.deserialize(params.ResultList[z]);
                this.ResultList.push(obj);
            }
        }

        if (params.SegList) {
            this.SegList = new Array();
            for (let z in params.SegList) {
                let obj = new SearchResultSeg();
                obj.deserialize(params.SegList[z]);
                this.SegList.push(obj);
            }
        }

    }
}

/**
 * SearchResultSeg
 * @class
 */
class SearchResultSeg extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分词
         * @type {string || null}
         */
        this.SegStr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SegStr = 'SegStr' in params ? params.SegStr : null;

    }
}

/**
 * 数据操作结果
 * @class
 */
class DataManipulationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 序号
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 结果
         * @type {string || null}
         */
        this.TotalResult = null;

        /**
         * 操作结果明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataManipulationResultItem> || null}
         */
        this.Result = null;

        /**
         * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.TotalResult = 'TotalResult' in params ? params.TotalResult : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new DataManipulationResultItem();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.ErrorResult = 'ErrorResult' in params ? params.ErrorResult : null;

    }
}

/**
 * 搜索结果元素
 * @class
 */
class SearchResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动态摘要信息
         * @type {string || null}
         */
        this.DocAbs = null;

        /**
         * 检索文档id
         * @type {string || null}
         */
        this.DocId = null;

        /**
         * 原始文档信息
         * @type {string || null}
         */
        this.DocMeta = null;

        /**
         * 精计算得分
         * @type {number || null}
         */
        this.L2Score = null;

        /**
         * 文档级回传信息
         * @type {string || null}
         */
        this.SearchDebuginfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DocAbs = 'DocAbs' in params ? params.DocAbs : null;
        this.DocId = 'DocId' in params ? params.DocId : null;
        this.DocMeta = 'DocMeta' in params ? params.DocMeta : null;
        this.L2Score = 'L2Score' in params ? params.L2Score : null;
        this.SearchDebuginfo = 'SearchDebuginfo' in params ? params.SearchDebuginfo : null;

    }
}

/**
 * DataSearch返回参数结构体
 * @class
 */
class DataSearchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检索结果
         * @type {SearchResult || null}
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

        if (params.Data) {
            let obj = new SearchResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
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
 * 数据操作结果明细
 * @class
 */
class DataManipulationResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 文档ID
         * @type {string || null}
         */
        this.DocId = null;

        /**
         * 错误码
         * @type {number || null}
         */
        this.Errno = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.DocId = 'DocId' in params ? params.DocId : null;
        this.Errno = 'Errno' in params ? params.Errno : null;

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
         * 数据操作结果
         * @type {DataManipulationResult || null}
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

        if (params.Data) {
            let obj = new DataManipulationResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SearchResult: SearchResult,
    SearchResultSeg: SearchResultSeg,
    DataManipulationResult: DataManipulationResult,
    SearchResultItem: SearchResultItem,
    DataSearchResponse: DataSearchResponse,
    DataSearchRequest: DataSearchRequest,
    DataManipulationResultItem: DataManipulationResultItem,
    DataManipulationRequest: DataManipulationRequest,
    DataManipulationResponse: DataManipulationResponse,

}
