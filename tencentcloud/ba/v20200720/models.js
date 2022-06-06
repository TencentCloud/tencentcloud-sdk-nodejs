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
 * DescribeGetAuthInfo返回参数结构体
 * @class
 */
class DescribeGetAuthInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实名认证状态：0未实名，1已实名
         * @type {string || null}
         */
        this.IsTenPayMasked = null;

        /**
         * 实名认证类型：0个人，1企业
         * @type {string || null}
         */
        this.IsAuthenticated = null;

        /**
         * 认证类型，个人0，企业1
         * @type {string || null}
         */
        this.Type = null;

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
        this.IsTenPayMasked = 'IsTenPayMasked' in params ? params.IsTenPayMasked : null;
        this.IsAuthenticated = 'IsAuthenticated' in params ? params.IsAuthenticated : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncIcpOrderWebInfo返回参数结构体
 * @class
 */
class SyncIcpOrderWebInfoResponse extends  AbstractModel {
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
 * SyncIcpOrderWebInfo请求参数结构体
 * @class
 */
class SyncIcpOrderWebInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备案ICP订单号
         * @type {string || null}
         */
        this.IcpOrderId = null;

        /**
         * 订单里的webId
         * @type {string || null}
         */
        this.SourceWebId = null;

        /**
         * 订单里的webId 数组(如果传入的webIds含有 订单中不包含的webId，会自动跳过)
         * @type {Array.<string> || null}
         */
        this.TargetWebIds = null;

        /**
         * 网站信息字段名 数组
         * @type {Array.<string> || null}
         */
        this.SyncFields = null;

        /**
         * 是否先判断同步的网站负责人是否一致 (这里会判断 sitePersonName, sitePersonCerType,sitePersonCerNum三个字段完全一致)  默认:true. 非必要 不建议关闭修改该参数默认值
         * @type {boolean || null}
         */
        this.CheckSamePerson = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IcpOrderId = 'IcpOrderId' in params ? params.IcpOrderId : null;
        this.SourceWebId = 'SourceWebId' in params ? params.SourceWebId : null;
        this.TargetWebIds = 'TargetWebIds' in params ? params.TargetWebIds : null;
        this.SyncFields = 'SyncFields' in params ? params.SyncFields : null;
        this.CheckSamePerson = 'CheckSamePerson' in params ? params.CheckSamePerson : null;

    }
}

/**
 * CreateWeappQRUrl请求参数结构体
 * @class
 */
class CreateWeappQRUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理角色临时密钥的Token
         * @type {string || null}
         */
        this.SessionKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionKey = 'SessionKey' in params ? params.SessionKey : null;

    }
}

/**
 * CreateWeappQRUrl返回参数结构体
 * @class
 */
class CreateWeappQRUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道备案小程序二维码
         * @type {string || null}
         */
        this.Url = null;

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
        this.Url = 'Url' in params ? params.Url : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGetAuthInfo请求参数结构体
 * @class
 */
class DescribeGetAuthInfoRequest extends  AbstractModel {
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

module.exports = {
    DescribeGetAuthInfoResponse: DescribeGetAuthInfoResponse,
    SyncIcpOrderWebInfoResponse: SyncIcpOrderWebInfoResponse,
    SyncIcpOrderWebInfoRequest: SyncIcpOrderWebInfoRequest,
    CreateWeappQRUrlRequest: CreateWeappQRUrlRequest,
    CreateWeappQRUrlResponse: CreateWeappQRUrlResponse,
    DescribeGetAuthInfoRequest: DescribeGetAuthInfoRequest,

}
