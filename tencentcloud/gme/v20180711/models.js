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
 * 过滤结果
 * @class
 */
class VoiceFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤类型，1：政治，2：色情，3：涉毒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 过滤命中关键词
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Word = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Word = 'Word' in params ? params.Word : null;

    }
}

/**
 * VoiceFilter请求参数结构体
 * @class
 */
class VoiceFilterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用id
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 文件id，表示文件唯一id
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件内容url，FileUrl和FileContent二选一
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 文件内容，base64编码，FileUrl和FileContent二选一
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 用户id
         * @type {string || null}
         */
        this.OpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;

    }
}

/**
 * VoiceFilter返回参数结构体
 * @class
 */
class VoiceFilterResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 语音文件过滤详情
 * @class
 */
class VoiceFilterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 文件id，表示文件唯一id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 用户id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 数据创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 过滤结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VoiceFilter> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new VoiceFilter();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * DescribeFilterResultList返回参数结构体
 * @class
 */
class DescribeFilterResultListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤结果总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 当前分页过滤结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VoiceFilterInfo> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new VoiceFilterInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFilterResultList请求参数结构体
 * @class
 */
class DescribeFilterResultListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用id
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 开始时间，格式为 年-月-日，如: 2018-07-11
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束时间，格式为 年-月-日，如: 2018-07-11
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 偏移量, 默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目	, 默认10, 最大100
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

module.exports = {
    VoiceFilter: VoiceFilter,
    VoiceFilterRequest: VoiceFilterRequest,
    VoiceFilterResponse: VoiceFilterResponse,
    VoiceFilterInfo: VoiceFilterInfo,
    DescribeFilterResultListResponse: DescribeFilterResultListResponse,
    DescribeFilterResultListRequest: DescribeFilterResultListRequest,

}
