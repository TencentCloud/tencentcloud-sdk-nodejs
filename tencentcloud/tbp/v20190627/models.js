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
         * 当前会话状态{会话开始: START; 会话中: COUTINUE; 会话结束: COMPLETE}。
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
         * 机器人应答。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseMessage || null}
         */
        this.ResponseMessage = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 结果类型 {中间逻辑出错:0; 任务型机器人:1; 问答型机器人:2; 闲聊型机器人:3; 未匹配上，返回预设兜底话术:5; 未匹配上，返回相似问题列表:6}。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultType = null;

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

        if (params.ResponseMessage) {
            let obj = new ResponseMessage();
            obj.deserialize(params.ResponseMessage)
            this.ResponseMessage = obj;
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Group是消息组的具体定义，当前包含ContentType、Url、Content三个字段。其中，具体的ContentType字段定义，参考互联网MIME类型标准。
 * @class
 */
class Group extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息类型参考互联网MIME类型标准，当前仅支持"text/plain"。
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * 返回内容以链接形式提供。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 普通文本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Content = 'Content' in params ? params.Content : null;

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
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 平台类型，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount；企业微信: WXWork}。
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 当PlatformType为微信公众号或企业微信时，传递对应微信公众号或企业微信的唯一标识
         * @type {string || null}
         */
        this.PlatformId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.PlatformId = 'PlatformId' in params ? params.PlatformId : null;

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
         * 当前会话状态{会话开始: START; 会话中: COUTINUE; 会话结束: COMPLETE}。
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
         * 机器人应答。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseMessage || null}
         */
        this.ResponseMessage = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 结果类型 {中间逻辑出错:0; 任务型机器人:1; 问答型机器人:2; 闲聊型机器人:3; 未匹配上，返回预设兜底话术:5; 未匹配上，返回相似问题列表:6}。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultType = null;

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

        if (params.ResponseMessage) {
            let obj = new ResponseMessage();
            obj.deserialize(params.ResponseMessage)
            this.ResponseMessage = obj;
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 从TBP-RTS服务v1.3版本起，机器人以消息组列表的形式响应，消息组列表GroupList包含多组消息，用户根据需要对部分或全部消息组进行组合使用。
 * @class
 */
class ResponseMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息组列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Group> || null}
         */
        this.GroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new Group();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }

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
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

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
         * 透传字段，透传给用户自定义的WebService服务。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 平台类型，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount；企业微信: WXWork}。
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 当PlatformType为微信公众号或企业微信时，传递对应微信公众号或企业微信的唯一标识
         * @type {string || null}
         */
        this.PlatformId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.PlatformId = 'PlatformId' in params ? params.PlatformId : null;

    }
}

module.exports = {
    TextProcessResponse: TextProcessResponse,
    Group: Group,
    SlotInfo: SlotInfo,
    TextResetRequest: TextResetRequest,
    TextResetResponse: TextResetResponse,
    ResponseMessage: ResponseMessage,
    TextProcessRequest: TextProcessRequest,

}
