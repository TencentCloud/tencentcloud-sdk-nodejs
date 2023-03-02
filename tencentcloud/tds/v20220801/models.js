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
 * DescribeTrustedID返回参数结构体
 * @class
 */
class DescribeTrustedIDResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备匿名标识
         * @type {string || null}
         */
        this.Openid = null;

        /**
         * App版本信息
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 客户端IP
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 应用包名
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 系统版本
         * @type {string || null}
         */
        this.SystemVersion = null;

        /**
         * SDK版本号
         * @type {string || null}
         */
        this.SdkBuildNo = null;

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
        this.Openid = 'Openid' in params ? params.Openid : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.SystemVersion = 'SystemVersion' in params ? params.SystemVersion : null;
        this.SdkBuildNo = 'SdkBuildNo' in params ? params.SdkBuildNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFraudUltimate请求参数结构体
 * @class
 */
class DescribeFraudUltimateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端通过SDK获取的设备Token
         * @type {string || null}
         */
        this.DeviceToken = null;

        /**
         * 使用场景。目前仅支持login-登录场景、register-注册场景
         * @type {string || null}
         */
        this.SceneCode = null;

        /**
         * 用户唯一标识
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 事件时间戳（毫秒）
         * @type {number || null}
         */
        this.EventTime = null;

        /**
         * 事件耗时（毫秒），例如进入登录界面到点击登录按钮耗时
         * @type {number || null}
         */
        this.ElapsedTime = null;

        /**
         * 微信的OpenId
         * @type {string || null}
         */
        this.WeChatOpenId = null;

        /**
         * 手机号码（注：不需要带国家代码 例如：13430421011）。可以传入原文或MD5
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 客户端IP
         * @type {string || null}
         */
        this.ClientIP = null;

        /**
         * QQ的OpenId
         * @type {string || null}
         */
        this.QQOpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;
        this.SceneCode = 'SceneCode' in params ? params.SceneCode : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.ElapsedTime = 'ElapsedTime' in params ? params.ElapsedTime : null;
        this.WeChatOpenId = 'WeChatOpenId' in params ? params.WeChatOpenId : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.QQOpenId = 'QQOpenId' in params ? params.QQOpenId : null;

    }
}

/**
 * DescribeFraudPremium返回参数结构体
 * @class
 */
class DescribeFraudPremiumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * App版本信息
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 客户端IP
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 应用包名
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 系统版本
         * @type {string || null}
         */
        this.SystemVersion = null;

        /**
         * SDK版本号
         * @type {string || null}
         */
        this.SdkBuildNo = null;

        /**
         * 实时风险信息
         * @type {Array.<RiskInfo> || null}
         */
        this.RiskInfos = null;

        /**
         * 离线风险信息
         * @type {Array.<RiskInfo> || null}
         */
        this.HistRiskInfos = null;

        /**
         * 设备匿名标识
         * @type {string || null}
         */
        this.Openid = null;

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
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.SystemVersion = 'SystemVersion' in params ? params.SystemVersion : null;
        this.SdkBuildNo = 'SdkBuildNo' in params ? params.SdkBuildNo : null;

        if (params.RiskInfos) {
            this.RiskInfos = new Array();
            for (let z in params.RiskInfos) {
                let obj = new RiskInfo();
                obj.deserialize(params.RiskInfos[z]);
                this.RiskInfos.push(obj);
            }
        }

        if (params.HistRiskInfos) {
            this.HistRiskInfos = new Array();
            for (let z in params.HistRiskInfos) {
                let obj = new RiskInfo();
                obj.deserialize(params.HistRiskInfos[z]);
                this.HistRiskInfos.push(obj);
            }
        }
        this.Openid = 'Openid' in params ? params.Openid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFraudBase请求参数结构体
 * @class
 */
class DescribeFraudBaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端通过SDK获取的设备Token
         * @type {string || null}
         */
        this.DeviceToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;

    }
}

/**
 * DescribeFraudBase返回参数结构体
 * @class
 */
class DescribeFraudBaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * App版本信息
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 客户端IP
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 应用包名
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 系统版本
         * @type {string || null}
         */
        this.SystemVersion = null;

        /**
         * SDK版本号
         * @type {string || null}
         */
        this.SdkBuildNo = null;

        /**
         * 实时风险信息
         * @type {Array.<RiskInfo> || null}
         */
        this.RiskInfos = null;

        /**
         * 离线风险信息
         * @type {Array.<RiskInfo> || null}
         */
        this.HistRiskInfos = null;

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
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.SystemVersion = 'SystemVersion' in params ? params.SystemVersion : null;
        this.SdkBuildNo = 'SdkBuildNo' in params ? params.SdkBuildNo : null;

        if (params.RiskInfos) {
            this.RiskInfos = new Array();
            for (let z in params.RiskInfos) {
                let obj = new RiskInfo();
                obj.deserialize(params.RiskInfos[z]);
                this.RiskInfos.push(obj);
            }
        }

        if (params.HistRiskInfos) {
            this.HistRiskInfos = new Array();
            for (let z in params.HistRiskInfos) {
                let obj = new RiskInfo();
                obj.deserialize(params.HistRiskInfos[z]);
                this.HistRiskInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTrustedID请求参数结构体
 * @class
 */
class DescribeTrustedIDRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端通过SDK获取的设备Token
         * @type {string || null}
         */
        this.DeviceToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;

    }
}

/**
 * DescribeFraudPremium请求参数结构体
 * @class
 */
class DescribeFraudPremiumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端通过SDK获取的设备Token
         * @type {string || null}
         */
        this.DeviceToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;

    }
}

/**
 * DescribeFraudUltimate返回参数结构体
 * @class
 */
class DescribeFraudUltimateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * App版本信息
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 客户端IP
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 应用包名
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 系统版本
         * @type {string || null}
         */
        this.SystemVersion = null;

        /**
         * SDK版本号
         * @type {string || null}
         */
        this.SdkBuildNo = null;

        /**
         * 实时风险信息
         * @type {Array.<RiskInfo> || null}
         */
        this.RiskInfos = null;

        /**
         * 离线风险信息
         * @type {Array.<RiskInfo> || null}
         */
        this.HistRiskInfos = null;

        /**
         * 设备匿名标识
         * @type {string || null}
         */
        this.Openid = null;

        /**
         * 场景风险信息
         * @type {Array.<RiskInfo> || null}
         */
        this.SceneRiskInfos = null;

        /**
         * 建议等级。1-极差，2-较差，3-中等，4-良好，5-优秀
         * @type {number || null}
         */
        this.SuggestionLevel = null;

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
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.SystemVersion = 'SystemVersion' in params ? params.SystemVersion : null;
        this.SdkBuildNo = 'SdkBuildNo' in params ? params.SdkBuildNo : null;

        if (params.RiskInfos) {
            this.RiskInfos = new Array();
            for (let z in params.RiskInfos) {
                let obj = new RiskInfo();
                obj.deserialize(params.RiskInfos[z]);
                this.RiskInfos.push(obj);
            }
        }

        if (params.HistRiskInfos) {
            this.HistRiskInfos = new Array();
            for (let z in params.HistRiskInfos) {
                let obj = new RiskInfo();
                obj.deserialize(params.HistRiskInfos[z]);
                this.HistRiskInfos.push(obj);
            }
        }
        this.Openid = 'Openid' in params ? params.Openid : null;

        if (params.SceneRiskInfos) {
            this.SceneRiskInfos = new Array();
            for (let z in params.SceneRiskInfos) {
                let obj = new RiskInfo();
                obj.deserialize(params.SceneRiskInfos[z]);
                this.SceneRiskInfos.push(obj);
            }
        }
        this.SuggestionLevel = 'SuggestionLevel' in params ? params.SuggestionLevel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 风险信息
 * @class
 */
class RiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 风险类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 风险等级
         * @type {number || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

module.exports = {
    DescribeTrustedIDResponse: DescribeTrustedIDResponse,
    DescribeFraudUltimateRequest: DescribeFraudUltimateRequest,
    DescribeFraudPremiumResponse: DescribeFraudPremiumResponse,
    DescribeFraudBaseRequest: DescribeFraudBaseRequest,
    DescribeFraudBaseResponse: DescribeFraudBaseResponse,
    DescribeTrustedIDRequest: DescribeTrustedIDRequest,
    DescribeFraudPremiumRequest: DescribeFraudPremiumRequest,
    DescribeFraudUltimateResponse: DescribeFraudUltimateResponse,
    RiskInfo: RiskInfo,

}
