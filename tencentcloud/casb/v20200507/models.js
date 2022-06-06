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
 * CopyCryptoColumnPolicy请求参数结构体
 * @class
 */
class CopyCryptoColumnPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.CasbId = null;

        /**
         * 元数据id
         * @type {string || null}
         */
        this.MetaDataId = null;

        /**
         * 目标实例Id 如果和实例Id相同则为同CasbId下的策略复制
         * @type {string || null}
         */
        this.DstCasbId = null;

        /**
         * 目标实例Id 如果和[元数据id]相同则为同元数据下的策略复制
         * @type {string || null}
         */
        this.DstMetaDataId = null;

        /**
         * 筛选来源数据库的表
         * @type {Array.<CryptoCopyColumnPolicyTableFilter> || null}
         */
        this.SrcTableFilter = null;

        /**
         * 复制同元数据下的策略，需要填写目标数据库名
         * @type {string || null}
         */
        this.DstDatabaseName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CasbId = 'CasbId' in params ? params.CasbId : null;
        this.MetaDataId = 'MetaDataId' in params ? params.MetaDataId : null;
        this.DstCasbId = 'DstCasbId' in params ? params.DstCasbId : null;
        this.DstMetaDataId = 'DstMetaDataId' in params ? params.DstMetaDataId : null;

        if (params.SrcTableFilter) {
            this.SrcTableFilter = new Array();
            for (let z in params.SrcTableFilter) {
                let obj = new CryptoCopyColumnPolicyTableFilter();
                obj.deserialize(params.SrcTableFilter[z]);
                this.SrcTableFilter.push(obj);
            }
        }
        this.DstDatabaseName = 'DstDatabaseName' in params ? params.DstDatabaseName : null;

    }
}

/**
 * 策略迁移表信息筛选
 * @class
 */
class CryptoCopyColumnPolicyTableFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 表名称
         * @type {Array.<string> || null}
         */
        this.TableNameSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.TableNameSet = 'TableNameSet' in params ? params.TableNameSet : null;

    }
}

/**
 * CopyCryptoColumnPolicy返回参数结构体
 * @class
 */
class CopyCryptoColumnPolicyResponse extends  AbstractModel {
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

module.exports = {
    CopyCryptoColumnPolicyRequest: CopyCryptoColumnPolicyRequest,
    CryptoCopyColumnPolicyTableFilter: CryptoCopyColumnPolicyTableFilter,
    CopyCryptoColumnPolicyResponse: CopyCryptoColumnPolicyResponse,

}
