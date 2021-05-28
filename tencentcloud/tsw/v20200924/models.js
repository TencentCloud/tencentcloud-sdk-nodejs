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
 * DescribeAgentShell返回参数结构体
 * @class
 */
class DescribeAgentShellResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接入信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AgentShell || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new AgentShell();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * agent安装脚本串
 * @class
 */
class AgentShell extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴权token
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 数据接收Ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EtlIp = null;

        /**
         * 数据接收port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EtlPort = null;

        /**
         * 手动接入脚本串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ByHandAccess = null;

        /**
         * 自动接入脚本串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ByShellAccess = null;

        /**
         * SkyWalking数据接收port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SkyWalkingPort = null;

        /**
         * Zipkin数据接收port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZipkinPort = null;

        /**
         * Jaeger数据接收port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JaegerPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Token = 'Token' in params ? params.Token : null;
        this.EtlIp = 'EtlIp' in params ? params.EtlIp : null;
        this.EtlPort = 'EtlPort' in params ? params.EtlPort : null;
        this.ByHandAccess = 'ByHandAccess' in params ? params.ByHandAccess : null;
        this.ByShellAccess = 'ByShellAccess' in params ? params.ByShellAccess : null;
        this.SkyWalkingPort = 'SkyWalkingPort' in params ? params.SkyWalkingPort : null;
        this.ZipkinPort = 'ZipkinPort' in params ? params.ZipkinPort : null;
        this.JaegerPort = 'JaegerPort' in params ? params.JaegerPort : null;

    }
}

/**
 * DescribeAgentShell请求参数结构体
 * @class
 */
class DescribeAgentShellRequest extends  AbstractModel {
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
    DescribeAgentShellResponse: DescribeAgentShellResponse,
    AgentShell: AgentShell,
    DescribeAgentShellRequest: DescribeAgentShellRequest,

}
