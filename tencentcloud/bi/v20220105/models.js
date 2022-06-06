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
 * CreateEmbedToken返回参数结构体
 * @class
 */
class CreateEmbedTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EmbedTokenInfo || null}
         */
        this.Data = null;

        /**
         * 结果描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

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
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.Data) {
            let obj = new EmbedTokenInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyEmbedInterval请求参数结构体
 * @class
 */
class ApplyEmbedIntervalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分享项目id，必选
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 分享页面id，嵌出看板时此为空值0
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * 需要申请延期的Token
         * @type {string || null}
         */
        this.BIToken = null;

        /**
         * 备用字段
         * @type {string || null}
         */
        this.ExtraParam = null;

        /**
         * panel,看板；page，页面
         * @type {string || null}
         */
        this.Scope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.BIToken = 'BIToken' in params ? params.BIToken : null;
        this.ExtraParam = 'ExtraParam' in params ? params.ExtraParam : null;
        this.Scope = 'Scope' in params ? params.Scope : null;

    }
}

/**
 * 申请Token延期
 * @class
 */
class ApplyEmbedTokenInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;

    }
}

/**
 * ApplyEmbedInterval返回参数结构体
 * @class
 */
class ApplyEmbedIntervalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 额外参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 结果数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplyEmbedTokenInfo || null}
         */
        this.Data = null;

        /**
         * 结果描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

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
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.Data) {
            let obj = new ApplyEmbedTokenInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEmbedToken请求参数结构体
 * @class
 */
class CreateEmbedTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分享项目id，必选
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 分享页面id，嵌出看板时此为空值0
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * page表示嵌出页面，panel表嵌出整个看板
         * @type {string || null}
         */
        this.Scope = null;

        /**
         * 过期时间。 单位：分钟 最大值：240。即，4小时 默认值：240
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 备用字段
         * @type {string || null}
         */
        this.ExtraParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ExtraParam = 'ExtraParam' in params ? params.ExtraParam : null;

    }
}

/**
 * 报表嵌出数据结构-强鉴权
 * @class
 */
class EmbedTokenInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 信息标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 令牌
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BIToken = null;

        /**
         * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 创建人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedUser = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedUser = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 页面Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PageId = null;

        /**
         * 备用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtraParam = null;

        /**
         * 嵌出类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Scope = null;

        /**
         * 过期时间，分钟为单位，最大240
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.BIToken = 'BIToken' in params ? params.BIToken : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreatedUser = 'CreatedUser' in params ? params.CreatedUser : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedUser = 'UpdatedUser' in params ? params.UpdatedUser : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.ExtraParam = 'ExtraParam' in params ? params.ExtraParam : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

module.exports = {
    CreateEmbedTokenResponse: CreateEmbedTokenResponse,
    ApplyEmbedIntervalRequest: ApplyEmbedIntervalRequest,
    ApplyEmbedTokenInfo: ApplyEmbedTokenInfo,
    ApplyEmbedIntervalResponse: ApplyEmbedIntervalResponse,
    CreateEmbedTokenRequest: CreateEmbedTokenRequest,
    EmbedTokenInfo: EmbedTokenInfo,

}
