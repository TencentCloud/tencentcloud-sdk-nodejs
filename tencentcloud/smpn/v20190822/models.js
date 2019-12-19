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
 * DescribeSmpnChp请求参数结构体
 * @class
 */
class DescribeSmpnChpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户用于计费的资源Id
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 终端骚扰保护请求
         * @type {CHPRequest || null}
         */
        this.RequestData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

        if (params.RequestData) {
            let obj = new CHPRequest();
            obj.deserialize(params.RequestData)
            this.RequestData = obj;
        }

    }
}

/**
 * 企业号码认证请求
 * @class
 */
class EPARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 黄页名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 号码营销监控请求
 * @class
 */
class MHMRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;

    }
}

/**
 * 号码恶意标记等级请求
 * @class
 */
class MRLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;

    }
}

/**
 * CreateSmpnEpa返回参数结构体
 * @class
 */
class CreateSmpnEpaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业号码认证回应内容
         * @type {EPAResponse || null}
         */
        this.ResponseData = null;

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

        if (params.ResponseData) {
            let obj = new EPAResponse();
            obj.deserialize(params.ResponseData)
            this.ResponseData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmpnFnr返回参数结构体
 * @class
 */
class DescribeSmpnFnrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚假号码识别回应内容
         * @type {FNRResponse || null}
         */
        this.ResponseData = null;

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

        if (params.ResponseData) {
            let obj = new FNRResponse();
            obj.deserialize(params.ResponseData)
            this.ResponseData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmpnMhm返回参数结构体
 * @class
 */
class DescribeSmpnMhmResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 号码营销监控回应内容
         * @type {MHMResponse || null}
         */
        this.ResponseData = null;

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

        if (params.ResponseData) {
            let obj = new MHMResponse();
            obj.deserialize(params.ResponseData)
            this.ResponseData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmpnFnr请求参数结构体
 * @class
 */
class DescribeSmpnFnrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚假号码识别请求内容
         * @type {FNRRequest || null}
         */
        this.RequestData = null;

        /**
         * 用于计费的资源ID
         * @type {string || null}
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

        if (params.RequestData) {
            let obj = new FNRRequest();
            obj.deserialize(params.RequestData)
            this.RequestData = obj;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * DescribeSmpnMrl请求参数结构体
 * @class
 */
class DescribeSmpnMrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意标记等级请求内容
         * @type {MRLRequest || null}
         */
        this.RequestData = null;

        /**
         * 用于计费的资源ID
         * @type {string || null}
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

        if (params.RequestData) {
            let obj = new MRLRequest();
            obj.deserialize(params.RequestData)
            this.RequestData = obj;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * 终端骚扰保护请求内容
 * @class
 */
class CHPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;

    }
}

/**
 * 号码恶意标记等级
 * @class
 */
class MRLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 骚扰电话恶意标记等级
         * @type {number || null}
         */
        this.DisturbLevel = null;

        /**
         * 房产中介恶意标记等级
         * @type {number || null}
         */
        this.HouseAgentLevel = null;

        /**
         * 保险理财恶意标记等级
         * @type {number || null}
         */
        this.InsuranceLevel = null;

        /**
         * 广告推销恶意标记等级
         * @type {number || null}
         */
        this.SalesLevel = null;

        /**
         * 诈骗电话恶意标记等级
         * @type {number || null}
         */
        this.CheatLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisturbLevel = 'DisturbLevel' in params ? params.DisturbLevel : null;
        this.HouseAgentLevel = 'HouseAgentLevel' in params ? params.HouseAgentLevel : null;
        this.InsuranceLevel = 'InsuranceLevel' in params ? params.InsuranceLevel : null;
        this.SalesLevel = 'SalesLevel' in params ? params.SalesLevel : null;
        this.CheatLevel = 'CheatLevel' in params ? params.CheatLevel : null;

    }
}

/**
 * DescribeSmpnMrl返回参数结构体
 * @class
 */
class DescribeSmpnMrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意标记等级回应内容
         * @type {MRLResponse || null}
         */
        this.ResponseData = null;

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

        if (params.ResponseData) {
            let obj = new MRLResponse();
            obj.deserialize(params.ResponseData)
            this.ResponseData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmpnMhm请求参数结构体
 * @class
 */
class DescribeSmpnMhmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 号码营销监控请求内容
         * @type {MHMRequest || null}
         */
        this.RequestData = null;

        /**
         * 用于计费的资源ID
         * @type {string || null}
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

        if (params.RequestData) {
            let obj = new MHMRequest();
            obj.deserialize(params.RequestData)
            this.RequestData = obj;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * 号码营销监控回应
 * @class
 */
class MHMResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标记类型
 0: 无标记
 50:骚扰电话
 51:房产中介
 52:保险理财
 53:广告推销
 54:诈骗电话
 55:快递电话
 56:出租车专车
         * @type {number || null}
         */
        this.TagType = null;

        /**
         * 标记次数
         * @type {number || null}
         */
        this.TagCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagType = 'TagType' in params ? params.TagType : null;
        this.TagCount = 'TagCount' in params ? params.TagCount : null;

    }
}

/**
 * CreateSmpnEpa请求参数结构体
 * @class
 */
class CreateSmpnEpaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业号码认证请求内容
         * @type {EPARequest || null}
         */
        this.RequestData = null;

        /**
         * 用于计费的资源ID
         * @type {string || null}
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

        if (params.RequestData) {
            let obj = new EPARequest();
            obj.deserialize(params.RequestData)
            this.RequestData = obj;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * 企业号码认证回应
 * @class
 */
class EPAResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0成功 其他失败
         * @type {number || null}
         */
        this.RetCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;

    }
}

/**
 * 虚假号码识别回应
 * @class
 */
class FNRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚假号码描述
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 终端骚扰保护
 * @class
 */
class CHPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标记类型
 0: 无标记
 50:骚扰电话
 51:房产中介
 52:保险理财
 53:广告推销
 54:诈骗电话
 55:快递电话
 56:出租车专车
         * @type {number || null}
         */
        this.TagType = null;

        /**
         * 标记次数
         * @type {number || null}
         */
        this.TagCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagType = 'TagType' in params ? params.TagType : null;
        this.TagCount = 'TagCount' in params ? params.TagCount : null;

    }
}

/**
 * DescribeSmpnChp返回参数结构体
 * @class
 */
class DescribeSmpnChpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端骚扰保护回应
         * @type {CHPResponse || null}
         */
        this.ResponseData = null;

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

        if (params.ResponseData) {
            let obj = new CHPResponse();
            obj.deserialize(params.ResponseData)
            this.ResponseData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 虚假号码识别请求
 * @class
 */
class FNRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;

    }
}

module.exports = {
    DescribeSmpnChpRequest: DescribeSmpnChpRequest,
    EPARequest: EPARequest,
    MHMRequest: MHMRequest,
    MRLRequest: MRLRequest,
    CreateSmpnEpaResponse: CreateSmpnEpaResponse,
    DescribeSmpnFnrResponse: DescribeSmpnFnrResponse,
    DescribeSmpnMhmResponse: DescribeSmpnMhmResponse,
    DescribeSmpnFnrRequest: DescribeSmpnFnrRequest,
    DescribeSmpnMrlRequest: DescribeSmpnMrlRequest,
    CHPRequest: CHPRequest,
    MRLResponse: MRLResponse,
    DescribeSmpnMrlResponse: DescribeSmpnMrlResponse,
    DescribeSmpnMhmRequest: DescribeSmpnMhmRequest,
    MHMResponse: MHMResponse,
    CreateSmpnEpaRequest: CreateSmpnEpaRequest,
    EPAResponse: EPAResponse,
    FNRResponse: FNRResponse,
    CHPResponse: CHPResponse,
    DescribeSmpnChpResponse: DescribeSmpnChpResponse,
    FNRRequest: FNRRequest,

}
