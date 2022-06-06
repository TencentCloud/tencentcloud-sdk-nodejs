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
 * GetUsagePlanUsageAmount返回参数结构体
 * @class
 */
class GetUsagePlanUsageAmountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最大调用量
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * 已经调用量
         * @type {number || null}
         */
        this.InUseRequestNum = null;

        /**
         * 剩余调用量
         * @type {number || null}
         */
        this.RemainingRequestNum = null;

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
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.InUseRequestNum = 'InUseRequestNum' in params ? params.InUseRequestNum : null;
        this.RemainingRequestNum = 'RemainingRequestNum' in params ? params.RemainingRequestNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetUsagePlanUsageAmount请求参数结构体
 * @class
 */
class GetUsagePlanUsageAmountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于查询实例的Id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * FlowProductRemind请求参数结构体
 * @class
 */
class FlowProductRemindRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务商uin
         * @type {string || null}
         */
        this.ProviderUin = null;

        /**
         * 服务商实例ID
         * @type {string || null}
         */
        this.SignId = null;

        /**
         * 云市场实例ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 实例总流量
         * @type {string || null}
         */
        this.TotalFlow = null;

        /**
         * 剩余流量
         * @type {string || null}
         */
        this.LeftFlow = null;

        /**
         * 流量单位
         * @type {string || null}
         */
        this.FlowUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProviderUin = 'ProviderUin' in params ? params.ProviderUin : null;
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.TotalFlow = 'TotalFlow' in params ? params.TotalFlow : null;
        this.LeftFlow = 'LeftFlow' in params ? params.LeftFlow : null;
        this.FlowUnit = 'FlowUnit' in params ? params.FlowUnit : null;

    }
}

/**
 * FlowProductRemind返回参数结构体
 * @class
 */
class FlowProductRemindResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
         * @type {string || null}
         */
        this.Success = null;

        /**
         * 流水号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

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
        this.Success = 'Success' in params ? params.Success : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GetUsagePlanUsageAmountResponse: GetUsagePlanUsageAmountResponse,
    GetUsagePlanUsageAmountRequest: GetUsagePlanUsageAmountRequest,
    FlowProductRemindRequest: FlowProductRemindRequest,
    FlowProductRemindResponse: FlowProductRemindResponse,

}
