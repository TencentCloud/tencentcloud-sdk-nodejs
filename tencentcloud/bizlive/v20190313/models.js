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
 * 流播放信息
 * @class
 */
class DayStreamPlayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽（单位Mbps）。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 流量 （单位MB）。
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * 在线人数。
         * @type {number || null}
         */
        this.Online = null;

        /**
         * 请求数。
         * @type {number || null}
         */
        this.Request = null;

        /**
         * 数据时间点，格式：yyyy-mm-dd HH:MM:SS。
         * @type {string || null}
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.Request = 'Request' in params ? params.Request : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * RegisterIM请求参数结构体
 * @class
 */
class RegisterIMRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 用户唯一ID，建议采用用户小程序OpenID加盐形式
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户头像URL
         * @type {string || null}
         */
        this.HeadImgUrl = null;

        /**
         * 用户身份，默认值：0，表示无特殊身份
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
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.HeadImgUrl = 'HeadImgUrl' in params ? params.HeadImgUrl : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * ForbidLiveStream请求参数结构体
 * @class
 */
class ForbidLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 恢复流的时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：默认禁播90天，且最长支持禁播90天。
         * @type {string || null}
         */
        this.ResumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;

    }
}

/**
 * RegisterIM返回参数结构体
 * @class
 */
class RegisterIMResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用来传递给插件的关键字段
         * @type {string || null}
         */
        this.UserKey = null;

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
        this.UserKey = 'UserKey' in params ? params.UserKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ForbidLiveStream返回参数结构体
 * @class
 */
class ForbidLiveStreamResponse extends  AbstractModel {
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
 * DescribeStreamPlayInfoList返回参数结构体
 * @class
 */
class DescribeStreamPlayInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计信息列表。
         * @type {Array.<DayStreamPlayInfo> || null}
         */
        this.DataInfoList = null;

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

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new DayStreamPlayInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPlayInfoList请求参数结构体
 * @class
 */
class DescribeStreamPlayInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结束时间，北京时间，
结束时间 和 开始时间  必须在同一天内。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 播放域名。
         * @type {string || null}
         */
        this.PlayDomain = null;

        /**
         * 开始时间，北京时间，
当前时间 和 开始时间 间隔不超过30天。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 流名称，精确匹配。
若不填，则为查询总体播放数据。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PlayDomain = 'PlayDomain' in params ? params.PlayDomain : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

module.exports = {
    DayStreamPlayInfo: DayStreamPlayInfo,
    RegisterIMRequest: RegisterIMRequest,
    ForbidLiveStreamRequest: ForbidLiveStreamRequest,
    RegisterIMResponse: RegisterIMResponse,
    ForbidLiveStreamResponse: ForbidLiveStreamResponse,
    DescribeStreamPlayInfoListResponse: DescribeStreamPlayInfoListResponse,
    DescribeStreamPlayInfoListRequest: DescribeStreamPlayInfoListRequest,

}
