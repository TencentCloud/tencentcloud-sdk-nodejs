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
 * TextProcess返回参数结构体
 * @class
 */
class TextProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 机器人回答。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 透传字段，由endpoint服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

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
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 槽位信息
 * @class
 */
class SlotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 槽位名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlotName = null;

        /**
         * 槽位值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlotValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SlotName = 'SlotName' in params ? params.SlotName : null;
        this.SlotValue = 'SlotValue' in params ? params.SlotValue : null;

    }
}

/**
 * TextReset请求参数结构体
 * @class
 */
class TextResetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;

    }
}

/**
 * Reset请求参数结构体
 * @class
 */
class ResetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 子账户id，每个终端对应一个
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 机器人版本号。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotVersion = null;

        /**
         * 机器人环境{dev:测试;release:线上}。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotEnv = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;

    }
}

/**
 * TextReset返回参数结构体
 * @class
 */
class TextResetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 机器人回答。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 透传字段，由endpoint服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

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
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Reset返回参数结构体
 * @class
 */
class ResetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态。取值:"start"/"continue"/"complete"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 机器人回答
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 语义解析的槽位结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 透传字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 用户说法。该说法是用户原生说法或ASR识别结果，未经过语义优化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Question = null;

        /**
         * tts合成pcm音频存储链接。仅当请求参数NeedTts=true时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveUrl = null;

        /**
         * tts合成的pcm音频。二进制数组经过base64编码(暂时不返回)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveData = null;

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
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.Question = 'Question' in params ? params.Question : null;
        this.WaveUrl = 'WaveUrl' in params ? params.WaveUrl : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextProcess请求参数结构体
 * @class
 */
class TextProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 请求的文本。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 透传字段，透传给endpoint服务。
         * @type {string || null}
         */
        this.SessionAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;

    }
}

module.exports = {
    TextProcessResponse: TextProcessResponse,
    SlotInfo: SlotInfo,
    TextResetRequest: TextResetRequest,
    ResetRequest: ResetRequest,
    TextResetResponse: TextResetResponse,
    ResetResponse: ResetResponse,
    TextProcessRequest: TextProcessRequest,

}
