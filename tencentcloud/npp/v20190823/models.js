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
 * DescribeCallBackStatus请求参数结构体
 * @class
 */
class DescribeCallBackStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务appid
         * @type {string || null}
         */
        this.BizAppId = null;

        /**
         * 回拨请求响应中返回的 callId
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 主叫号码
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.Dst = null;

        /**
         * 通话最后状态：0：未知状态 1：主叫响铃中 2：主叫接听 3：被叫响铃中 4：正常通话中 5：通话结束
         * @type {string || null}
         */
        this.CallStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizAppId = 'BizAppId' in params ? params.BizAppId : null;
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Dst = 'Dst' in params ? params.Dst : null;
        this.CallStatus = 'CallStatus' in params ? params.CallStatus : null;

    }
}

/**
 * DescribeCallBackCdr请求参数结构体
 * @class
 */
class DescribeCallBackCdrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务appid
         * @type {string || null}
         */
        this.BizAppId = null;

        /**
         * 回拨请求响应中返回的 callId，按 callId 查询该话单详细信息
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 查询主叫用户产生的呼叫话单，如填空表示拉取这个时间段所有话单
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 话单开始时间戳
         * @type {string || null}
         */
        this.StartTimeStamp = null;

        /**
         * 话单结束时间戳
         * @type {string || null}
         */
        this.EndTimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizAppId = 'BizAppId' in params ? params.BizAppId : null;
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;

    }
}

/**
 * CreateCallBack请求参数结构体
 * @class
 */
class CreateCallBackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务appid
         * @type {string || null}
         */
        this.BizAppId = null;

        /**
         * 主叫号码(必须为 11 位手机号，号码前加 0086，如 008613631686024)
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 被叫号码(必须为 11 位手机或固话号码,号码前加 0086，如008613631686024，固话如：0086075586013388)
         * @type {string || null}
         */
        this.Dst = null;

        /**
         * 主叫显示系统分配的固话号码，如不填显示随机分配号码
         * @type {string || null}
         */
        this.SrcDisplayNum = null;

        /**
         * 被叫显示系统分配的固话号码，如不填显示随机分配号码
         * @type {string || null}
         */
        this.DstDisplayNum = null;

        /**
         * 是否录音，0 表示不录音，1 表示录音。默认为不录音
         * @type {string || null}
         */
        this.Record = null;

        /**
         * 允许最大通话时间，不填默认为 30 分钟（单位：分钟）
         * @type {string || null}
         */
        this.MaxAllowTime = null;

        /**
         * 主叫发起呼叫状态：1 被叫发起呼叫状态：256 主叫响铃状态：2 被叫响铃状态：512 主叫接听状态：4 被叫接听状态：1024 主叫拒绝接听状态：8 被叫拒绝接听状态：2048 主叫正常挂机状态：16 被叫正常挂机状态：4096 主叫呼叫异常：32 被叫呼叫异常：8192
例如：当值为 0：表示所有状态不需要推送；当值为 4：表示只要推送主叫接听状态；当值为 16191：表示所有状态都需要推送(上面所有值和)
         * @type {string || null}
         */
        this.StatusFlag = null;

        /**
         * 状态回调通知地址，正式环境可以配置默认推送地址
         * @type {string || null}
         */
        this.StatusUrl = null;

        /**
         * 话单回调通知地址，正式环境可以配置默认推送地址
         * @type {string || null}
         */
        this.HangupUrl = null;

        /**
         * 录单 URL 回调通知地址，正式环境可以配置默认推送地址
         * @type {string || null}
         */
        this.RecordUrl = null;

        /**
         * 业务应用 key，业务用该 key 可以区分内部业务或客户产品等，该 key 需保证在该 appId 下全局唯一，最大长度不超过 64 个字节，bizId 只能包含数字、字母。
         * @type {string || null}
         */
        this.BizId = null;

        /**
         * 最后一次呼叫 callId，带上该字段以后，平台会参考该 callId 分配线路，优先不分配该 callId 通话线路（注：谨慎使用，这个会影响线路调度）
         * @type {string || null}
         */
        this.LastCallId = null;

        /**
         * 结构体，主叫呼叫预处理操作，根据不同操作确认是否呼通被叫。如需使用，本结构体需要与 keyList 结构体配合使用，此时这两个参数都为必填项
         * @type {RreCallerHandle || null}
         */
        this.PreCallerHandle = null;

        /**
         * 订单 ID，最大长度不超过64个字节，对于一些有订单状态 App 相关应用使用（如达人帮接入 App 应用)，该字段只在帐单中带上，其它回调不附带该字段
         * @type {string || null}
         */
        this.OrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizAppId = 'BizAppId' in params ? params.BizAppId : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Dst = 'Dst' in params ? params.Dst : null;
        this.SrcDisplayNum = 'SrcDisplayNum' in params ? params.SrcDisplayNum : null;
        this.DstDisplayNum = 'DstDisplayNum' in params ? params.DstDisplayNum : null;
        this.Record = 'Record' in params ? params.Record : null;
        this.MaxAllowTime = 'MaxAllowTime' in params ? params.MaxAllowTime : null;
        this.StatusFlag = 'StatusFlag' in params ? params.StatusFlag : null;
        this.StatusUrl = 'StatusUrl' in params ? params.StatusUrl : null;
        this.HangupUrl = 'HangupUrl' in params ? params.HangupUrl : null;
        this.RecordUrl = 'RecordUrl' in params ? params.RecordUrl : null;
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.LastCallId = 'LastCallId' in params ? params.LastCallId : null;

        if (params.PreCallerHandle) {
            let obj = new RreCallerHandle();
            obj.deserialize(params.PreCallerHandle)
            this.PreCallerHandle = obj;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

    }
}

/**
 * DeleteCallBack请求参数结构体
 * @class
 */
class DeleteCallBackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务appid
         * @type {string || null}
         */
        this.BizAppId = null;

        /**
         * 回拨请求响应中返回的 callId
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 0：不管通话状态直接拆线（默认) 1：主叫响铃以后状态不拆线 2：主叫接听以后状态不拆线 3：被叫响铃以后状态不拆线 4：被叫接听以后状态不拆线
         * @type {string || null}
         */
        this.CancelFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizAppId = 'BizAppId' in params ? params.BizAppId : null;
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.CancelFlag = 'CancelFlag' in params ? params.CancelFlag : null;

    }
}

/**
 * GetVirtualNum返回参数结构体
 * @class
 */
class GetVirtualNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 绑定 ID，该 ID 全局唯一
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BindId = null;

        /**
         * 中间号还剩引用计数，如果计数为 0 会解绑
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RefNum = null;

        /**
         * 中间号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirtualNum = null;

        /**
         * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

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
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.BindId = 'BindId' in params ? params.BindId : null;
        this.RefNum = 'RefNum' in params ? params.RefNum : null;
        this.VirtualNum = 'VirtualNum' in params ? params.VirtualNum : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DelVirtualNum返回参数结构体
 * @class
 */
class DelVirtualNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 绑定 ID，该 ID 全局唯一
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BindId = null;

        /**
         * 中间号还剩引用计数，如果计数为 0 会解绑
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RefLeftNum = null;

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
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.BindId = 'BindId' in params ? params.BindId : null;
        this.RefLeftNum = 'RefLeftNum' in params ? params.RefLeftNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 话单详情
 * @class
 */
class CallBackCdr extends  AbstractModel {
    constructor(){
        super();

        /**
         * 呼叫通话 ID
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 主叫号码
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.Dst = null;

        /**
         * 主叫呼叫开始时间
         * @type {string || null}
         */
        this.StartSrcCallTime = null;

        /**
         * 主叫响铃开始时间
         * @type {string || null}
         */
        this.StartSrcRingTime = null;

        /**
         * 主叫接听时间
         * @type {string || null}
         */
        this.SrcAcceptTime = null;

        /**
         * 被叫呼叫开始时间
         * @type {string || null}
         */
        this.StartDstCallTime = null;

        /**
         * 被叫响铃开始时间
         * @type {string || null}
         */
        this.StartDstRingTime = null;

        /**
         * 被叫接听时间
         * @type {string || null}
         */
        this.DstAcceptTime = null;

        /**
         * 用户挂机通话结束时间
         * @type {string || null}
         */
        this.EndCallTime = null;

        /**
         * 通话最后状态：0：未知状态 1：正常通话 2：主叫未接 3：主叫接听，被叫未接 4：主叫未接通 5：被叫未接通
         * @type {string || null}
         */
        this.CallEndStatus = null;

        /**
         * 通话计费时间
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 录音 URL，如果不录音或录音失败，该值为空
         * @type {string || null}
         */
        this.RecordUrl = null;

        /**
         * 通话类型(1: VOIP 2:IP TO PSTN 3: PSTN TO PSTN)，如果话单中没有该字段，默认值为回拨 3 (PSTN TO PSTN)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallType = null;

        /**
         * 同回拨请求中的 bizId，如果回拨请求中带 bizId 会有该字段返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizId = null;

        /**
         * 订单 ID,最大长度不超过 64 个字节，对于一些有订单状态 App 相关应用（如达人帮接入 App 应用)，该字段只在帐单中带上，其它回调不附带该字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Dst = 'Dst' in params ? params.Dst : null;
        this.StartSrcCallTime = 'StartSrcCallTime' in params ? params.StartSrcCallTime : null;
        this.StartSrcRingTime = 'StartSrcRingTime' in params ? params.StartSrcRingTime : null;
        this.SrcAcceptTime = 'SrcAcceptTime' in params ? params.SrcAcceptTime : null;
        this.StartDstCallTime = 'StartDstCallTime' in params ? params.StartDstCallTime : null;
        this.StartDstRingTime = 'StartDstRingTime' in params ? params.StartDstRingTime : null;
        this.DstAcceptTime = 'DstAcceptTime' in params ? params.DstAcceptTime : null;
        this.EndCallTime = 'EndCallTime' in params ? params.EndCallTime : null;
        this.CallEndStatus = 'CallEndStatus' in params ? params.CallEndStatus : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.RecordUrl = 'RecordUrl' in params ? params.RecordUrl : null;
        this.CallType = 'CallType' in params ? params.CallType : null;
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

    }
}

/**
 * 结构体，主叫呼叫预处理操作，根据不同操作确认是否呼通被叫。如需使用，本结构体需要与 keyList 结构体配合使用，此时这两个参数都为必填项
 * @class
 */
class RreCallerHandle extends  AbstractModel {
    constructor(){
        super();

        /**
         * 呼叫主叫以后，给主叫用户的语音提示，播放该提示时用户所有按键无效
         * @type {string || null}
         */
        this.ReadPrompt = null;

        /**
         * 可中断提示，播放该提示时，用户可以按键
         * @type {string || null}
         */
        this.InterruptPrompt = null;

        /**
         * 对应按键操作,如果没有结构体里定义按键操作用户按键以后都从 interruptPrompt 重新播放
         * @type {Array.<KeyList> || null}
         */
        this.KeyList = null;

        /**
         * 最多重复播放次数，超过该次数拆线
         * @type {string || null}
         */
        this.RepeatTimes = null;

        /**
         * 用户按键回调通知地址，如果为空不回调
         * @type {string || null}
         */
        this.KeyPressUrl = null;

        /**
         * 提示音男声女声：1女声，2男声。默认女声
         * @type {string || null}
         */
        this.PromptGender = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadPrompt = 'ReadPrompt' in params ? params.ReadPrompt : null;
        this.InterruptPrompt = 'InterruptPrompt' in params ? params.InterruptPrompt : null;

        if (params.KeyList) {
            this.KeyList = new Array();
            for (let z in params.KeyList) {
                let obj = new KeyList();
                obj.deserialize(params.KeyList[z]);
                this.KeyList.push(obj);
            }
        }
        this.RepeatTimes = 'RepeatTimes' in params ? params.RepeatTimes : null;
        this.KeyPressUrl = 'KeyPressUrl' in params ? params.KeyPressUrl : null;
        this.PromptGender = 'PromptGender' in params ? params.PromptGender : null;

    }
}

/**
 * DescribeCallerDisplayList请求参数结构体
 * @class
 */
class DescribeCallerDisplayListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务appid
         * @type {string || null}
         */
        this.BizAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizAppId = 'BizAppId' in params ? params.BizAppId : null;

    }
}

/**
 * DescribeCallerDisplayList返回参数结构体
 * @class
 */
class DescribeCallerDisplayListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * appid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 主叫显号号码集合，codeList[0...*] 结构体数组，如果业务是主被叫互显，该字段为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CallBackPhoneCode> || null}
         */
        this.CodeList = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;

        if (params.CodeList) {
            this.CodeList = new Array();
            for (let z in params.CodeList) {
                let obj = new CallBackPhoneCode();
                obj.deserialize(params.CodeList[z]);
                this.CodeList.push(obj);
            }
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 回拨号码字段
 * @class
 */
class CallBackPhoneCode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家码，统一以 00 开头
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * 号码（固话区号前加 0，如075586013388）
         * @type {string || null}
         */
        this.Phone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.Phone = 'Phone' in params ? params.Phone : null;

    }
}

/**
 * CreateCallBack返回参数结构体
 * @class
 */
class CreateCallBackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 话单id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 主叫显示系统分配的固话号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SrcDisplayNum = null;

        /**
         * 被叫显示系统分配的固话号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DstDisplayNum = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

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
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.SrcDisplayNum = 'SrcDisplayNum' in params ? params.SrcDisplayNum : null;
        this.DstDisplayNum = 'DstDisplayNum' in params ? params.DstDisplayNum : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DelVirtualNum请求参数结构体
 * @class
 */
class DelVirtualNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务appid
         * @type {string || null}
         */
        this.BizAppId = null;

        /**
         * 双方号码 + 中间号绑定 ID，该 ID 全局唯一
         * @type {string || null}
         */
        this.BindId = null;

        /**
         * 应用二级业务 ID，bizId 需保证在该 appId 下全局唯一，最大长度不超过 16 个字节。
         * @type {string || null}
         */
        this.BizId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizAppId = 'BizAppId' in params ? params.BizAppId : null;
        this.BindId = 'BindId' in params ? params.BindId : null;
        this.BizId = 'BizId' in params ? params.BizId : null;

    }
}

/**
 * GetVirtualNum请求参数结构体
 * @class
 */
class GetVirtualNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务appid
         * @type {string || null}
         */
        this.BizAppId = null;

        /**
         * 被叫号码(号码前加 0086，如 008613631686024)
         * @type {string || null}
         */
        this.Dst = null;

        /**
         * 主叫号码(号码前加 0086，如 008613631686024)，xb 模式下是不用填写，axb 模式下是必选
         * @type {string || null}
         */
        this.Src = null;

        /**
         * {“accreditList”:[“008613631686024”,”008612345678910”]}，主要用于 N-1 场景，号码绑定非共享是独占型，指定了 dst 独占中间号绑定，accreditList 表示这个列表成员可以拨打 dst 绑 定的中间号，默认值为空，表示所有号码都可以拨打独占型中间号绑定，最大集合不允许超过 30 个，仅适用于xb模式
         * @type {Array.<string> || null}
         */
        this.AccreditList = null;

        /**
         * 指定中间号（格式：008617013541251），如果该中间号已被使用则返回绑定失败。如果不带该字段则由腾讯侧从号码池里自动分配
         * @type {string || null}
         */
        this.AssignVirtualNum = null;

        /**
         * 是否录音，0表示不录音，1表示录音。默认为不录音，注意如果需要录音回调，通话完成后需要等待一段时间，收到录音回调之后，再解绑中间号。
         * @type {string || null}
         */
        this.Record = null;

        /**
         * 主被叫显号号码归属地，指定该参数说明显号归属该城市，如果没有该城市号码会随机选取一个城市或者后台配置返回107，返回码详见 《腾讯-中间号-城市id.xlsx》
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * 应用二级业务 ID，bizId 需保证在该 appId 下全局唯一，最大长度不超过 16 个字节。
         * @type {string || null}
         */
        this.BizId = null;

        /**
         * 号码最大绑定时间，不填默认为 24 小时，最长绑定时间是168小时，单位秒
         * @type {string || null}
         */
        this.MaxAssignTime = null;

        /**
         * 主叫发起呼叫状态：1
被叫发起呼叫状态：256
主叫响铃状态：2
被叫响铃状态：512
主叫接听状态：4
被叫接听状态：1024
主叫拒绝接听状态：8
被叫拒绝接听状态：2048
主叫正常挂机状态：16
被叫正常挂机状态：4096
主叫呼叫异常：32
被叫呼叫异常：8192

例如：
值为 0：表示所有状态不需要推送
值为 4：表示只要推送主叫接听状态
值为 16191：表示所有状态都需要推送（上面所有值和）
         * @type {string || null}
         */
        this.StatusFlag = null;

        /**
         * 请填写statusFlag并设置值，状态回调通知地址，正式环境可以配置默认推送地址
         * @type {string || null}
         */
        this.StatusUrl = null;

        /**
         * 话单回调通知地址，正式环境可以配置默认推送地址
         * @type {string || null}
         */
        this.HangupUrl = null;

        /**
         * 录单 URL 回调通知地址，正式环境可以配置默认推送地址
         * @type {string || null}
         */
        this.RecordUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizAppId = 'BizAppId' in params ? params.BizAppId : null;
        this.Dst = 'Dst' in params ? params.Dst : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.AccreditList = 'AccreditList' in params ? params.AccreditList : null;
        this.AssignVirtualNum = 'AssignVirtualNum' in params ? params.AssignVirtualNum : null;
        this.Record = 'Record' in params ? params.Record : null;
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.MaxAssignTime = 'MaxAssignTime' in params ? params.MaxAssignTime : null;
        this.StatusFlag = 'StatusFlag' in params ? params.StatusFlag : null;
        this.StatusUrl = 'StatusUrl' in params ? params.StatusUrl : null;
        this.HangupUrl = 'HangupUrl' in params ? params.HangupUrl : null;
        this.RecordUrl = 'RecordUrl' in params ? params.RecordUrl : null;

    }
}

/**
 * DeleteCallBack返回参数结构体
 * @class
 */
class DeleteCallBackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 话单id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallId = null;

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
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Get400Cdr请求参数结构体
 * @class
 */
class Get400CdrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务appid
         * @type {string || null}
         */
        this.BizAppId = null;

        /**
         * 通话唯一标识 callId，即直拨呼叫响应中返回的 callId
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 查询主叫用户产生的呼叫话单（0086开头），设置为空表示拉取该时间段的所有话单
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 话单开始时间戳
         * @type {string || null}
         */
        this.StartTimeStamp = null;

        /**
         * 话单结束时间戳
         * @type {string || null}
         */
        this.EndTimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizAppId = 'BizAppId' in params ? params.BizAppId : null;
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;

    }
}

/**
 * DescribeCallBackCdr返回参数结构体
 * @class
 */
class DescribeCallBackCdrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 话单列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CallBackCdr> || null}
         */
        this.Cdr = null;

        /**
         * 偏移
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

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

        if (params.Cdr) {
            this.Cdr = new Array();
            for (let z in params.Cdr) {
                let obj = new CallBackCdr();
                obj.deserialize(params.Cdr[z]);
                this.Cdr.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 对应按键操作,如果没有结构体里定义按键操作用户按键以后都从 interruptPrompt 重新播放
 * @class
 */
class KeyList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户按键（0-9、*、#、A-D)
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 1: 呼通被叫 2：interruptPrompt 重播提示 3：拆线
         * @type {string || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

    }
}

/**
 * 直拨话单详情
 * @class
 */
class VirturalNumCdr extends  AbstractModel {
    constructor(){
        super();

        /**
         * 呼叫通话 ID
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 双方号码 + 中间号绑定 ID，该 ID 全局唯一
         * @type {string || null}
         */
        this.BindId = null;

        /**
         * 主叫号码
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.Dst = null;

        /**
         * 主叫通讯录直拨虚拟保护号码
         * @type {string || null}
         */
        this.DstVirtualNum = null;

        /**
         * 虚拟保护号码平台收到呼叫时间
         * @type {string || null}
         */
        this.CallCenterAcceptTime = null;

        /**
         * 被叫呼叫开始时间
         * @type {string || null}
         */
        this.StartDstCallTime = null;

        /**
         * 被叫响铃开始时间
         * @type {string || null}
         */
        this.StartDstRingTime = null;

        /**
         * 被叫接听时间
         * @type {string || null}
         */
        this.DstAcceptTime = null;

        /**
         * 用户挂机通话结束时间
         * @type {string || null}
         */
        this.EndCallTime = null;

        /**
         * 通话最后状态：0：未知状态 1：正常通话 2：查询呼叫转移被叫号异常 3：未接通 4：未接听 5：拒接挂断 6：关机 7：空号 8：通话中 9：欠费 10：运营商线路或平台异常
         * @type {string || null}
         */
        this.CallEndStatus = null;

        /**
         * 主叫接通虚拟保护号码到通话结束通话时间
         * @type {string || null}
         */
        this.SrcDuration = null;

        /**
         * 呼叫转接被叫接通到通话结束通话时间
         * @type {string || null}
         */
        this.DstDuration = null;

        /**
         * 录音 URL，如果不录音或录音失败，该值为空
         * @type {string || null}
         */
        this.RecordUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.BindId = 'BindId' in params ? params.BindId : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Dst = 'Dst' in params ? params.Dst : null;
        this.DstVirtualNum = 'DstVirtualNum' in params ? params.DstVirtualNum : null;
        this.CallCenterAcceptTime = 'CallCenterAcceptTime' in params ? params.CallCenterAcceptTime : null;
        this.StartDstCallTime = 'StartDstCallTime' in params ? params.StartDstCallTime : null;
        this.StartDstRingTime = 'StartDstRingTime' in params ? params.StartDstRingTime : null;
        this.DstAcceptTime = 'DstAcceptTime' in params ? params.DstAcceptTime : null;
        this.EndCallTime = 'EndCallTime' in params ? params.EndCallTime : null;
        this.CallEndStatus = 'CallEndStatus' in params ? params.CallEndStatus : null;
        this.SrcDuration = 'SrcDuration' in params ? params.SrcDuration : null;
        this.DstDuration = 'DstDuration' in params ? params.DstDuration : null;
        this.RecordUrl = 'RecordUrl' in params ? params.RecordUrl : null;

    }
}

/**
 * Get400Cdr返回参数结构体
 * @class
 */
class Get400CdrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 偏移
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 话单列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VirturalNumCdr> || null}
         */
        this.Cdr = null;

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
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Cdr) {
            this.Cdr = new Array();
            for (let z in params.Cdr) {
                let obj = new VirturalNumCdr();
                obj.deserialize(params.Cdr[z]);
                this.Cdr.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCallBackStatus返回参数结构体
 * @class
 */
class DescribeCallBackStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 业务appid
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 回拨请求响应中返回的 callId
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 主叫号码
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.Dst = null;

        /**
         * 通话最后状态：0：未知状态 1：主叫响铃中 2：主叫接听 3：被叫响铃中 4：正常通话中 5：通话结束
         * @type {string || null}
         */
        this.CallStatus = null;

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
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Dst = 'Dst' in params ? params.Dst : null;
        this.CallStatus = 'CallStatus' in params ? params.CallStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeCallBackStatusRequest: DescribeCallBackStatusRequest,
    DescribeCallBackCdrRequest: DescribeCallBackCdrRequest,
    CreateCallBackRequest: CreateCallBackRequest,
    DeleteCallBackRequest: DeleteCallBackRequest,
    GetVirtualNumResponse: GetVirtualNumResponse,
    DelVirtualNumResponse: DelVirtualNumResponse,
    CallBackCdr: CallBackCdr,
    RreCallerHandle: RreCallerHandle,
    DescribeCallerDisplayListRequest: DescribeCallerDisplayListRequest,
    DescribeCallerDisplayListResponse: DescribeCallerDisplayListResponse,
    CallBackPhoneCode: CallBackPhoneCode,
    CreateCallBackResponse: CreateCallBackResponse,
    DelVirtualNumRequest: DelVirtualNumRequest,
    GetVirtualNumRequest: GetVirtualNumRequest,
    DeleteCallBackResponse: DeleteCallBackResponse,
    Get400CdrRequest: Get400CdrRequest,
    DescribeCallBackCdrResponse: DescribeCallBackCdrResponse,
    KeyList: KeyList,
    VirturalNumCdr: VirturalNumCdr,
    Get400CdrResponse: Get400CdrResponse,
    DescribeCallBackStatusResponse: DescribeCallBackStatusResponse,

}
