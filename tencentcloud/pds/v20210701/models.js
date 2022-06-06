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
 * DescribeStockEstimation返回参数结构体
 * @class
 */
class DescribeStockEstimationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信誉分，1-5从低到高
         * @type {Score || null}
         */
        this.ServiceRsp = null;

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

        if (params.ServiceRsp) {
            let obj = new Score();
            obj.deserialize(params.ServiceRsp)
            this.ServiceRsp = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNewUserAcquisition请求参数结构体
 * @class
 */
class DescribeNewUserAcquisitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
         * @type {UserInfos || null}
         */
        this.ServiceParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceParams) {
            let obj = new UserInfos();
            obj.deserialize(params.ServiceParams)
            this.ServiceParams = obj;
        }

    }
}

/**
 * 信誉分，1-5从低到高
 * @class
 */
class Score extends  AbstractModel {
    constructor(){
        super();

        /**
         * 信誉分，1-5从低到高
         * @type {number || null}
         */
        this.Star = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Star = 'Star' in params ? params.Star : null;

    }
}

/**
 * 用户信息
 * @class
 */
class UserInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户的手机号
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 用户的微信OpenID
         * @type {string || null}
         */
        this.Openid = null;

        /**
         * 用户移动设备的客户端IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 用户WiFi的BSSID
         * @type {string || null}
         */
        this.WiFiBssid = null;

        /**
         * 用户Android设备的IMEI
         * @type {string || null}
         */
        this.IMEI = null;

        /**
         * 用户Android设备的OAID
         * @type {string || null}
         */
        this.OAID = null;

        /**
         * 用户iOS设备的IDFA
         * @type {string || null}
         */
        this.IDFA = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.Openid = 'Openid' in params ? params.Openid : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.WiFiBssid = 'WiFiBssid' in params ? params.WiFiBssid : null;
        this.IMEI = 'IMEI' in params ? params.IMEI : null;
        this.OAID = 'OAID' in params ? params.OAID : null;
        this.IDFA = 'IDFA' in params ? params.IDFA : null;

    }
}

/**
 * DescribeStockEstimation请求参数结构体
 * @class
 */
class DescribeStockEstimationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
         * @type {UserInfos || null}
         */
        this.ServiceParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceParams) {
            let obj = new UserInfos();
            obj.deserialize(params.ServiceParams)
            this.ServiceParams = obj;
        }

    }
}

/**
 * DescribeNewUserAcquisition返回参数结构体
 * @class
 */
class DescribeNewUserAcquisitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信誉分，1-5从低到高
         * @type {Score || null}
         */
        this.ServiceRsp = null;

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

        if (params.ServiceRsp) {
            let obj = new Score();
            obj.deserialize(params.ServiceRsp)
            this.ServiceRsp = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeStockEstimationResponse: DescribeStockEstimationResponse,
    DescribeNewUserAcquisitionRequest: DescribeNewUserAcquisitionRequest,
    Score: Score,
    UserInfos: UserInfos,
    DescribeStockEstimationRequest: DescribeStockEstimationRequest,
    DescribeNewUserAcquisitionResponse: DescribeNewUserAcquisitionResponse,

}
