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
 * SendMessage返回参数结构体
 * @class
 */
class SendMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息ID
         * @type {Array.<string> || null}
         */
        this.MessageId = null;

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
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量消息
 * @class
 */
class BatchContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息体
         * @type {string || null}
         */
        this.Body = null;

        /**
         * 消息的键名
         * @type {string || null}
         */
        this.Key = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Body = 'Body' in params ? params.Body : null;
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * SendMessage请求参数结构体
 * @class
 */
class SendMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接入资源ID
         * @type {string || null}
         */
        this.DataHubId = null;

        /**
         * 批量消息
         * @type {Array.<BatchContent> || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataHubId = 'DataHubId' in params ? params.DataHubId : null;

        if (params.Message) {
            this.Message = new Array();
            for (let z in params.Message) {
                let obj = new BatchContent();
                obj.deserialize(params.Message[z]);
                this.Message.push(obj);
            }
        }

    }
}

module.exports = {
    SendMessageResponse: SendMessageResponse,
    BatchContent: BatchContent,
    SendMessageRequest: SendMessageRequest,

}
