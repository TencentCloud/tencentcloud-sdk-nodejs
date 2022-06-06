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
 * StopAutoCalloutTask请求参数结构体
 * @class
 */
class StopAutoCalloutTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 呼叫中心实例Id
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 任务Id
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * BindStaffSkillGroupList请求参数结构体
 * @class
 */
class BindStaffSkillGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 坐席邮箱
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * 绑定技能组列表
         * @type {Array.<number> || null}
         */
        this.SkillGroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.SkillGroupList = 'SkillGroupList' in params ? params.SkillGroupList : null;

    }
}

/**
 * DescribePSTNActiveSessionList请求参数结构体
 * @class
 */
class DescribePSTNActiveSessionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 数据偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回的数据条数，最大 25
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ivr 按键信息
 * @class
 */
class IVRKeyPressedElement extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 按键关联的标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * CreateAutoCalloutTask请求参数结构体
 * @class
 */
class CreateAutoCalloutTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 任务起始时间戳，Unix 秒级时间戳
         * @type {number || null}
         */
        this.NotBefore = null;

        /**
         * 被叫号码列表
         * @type {Array.<string> || null}
         */
        this.Callees = null;

        /**
         * 主叫号码列表
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * 呼叫使用的Ivr
         * @type {number || null}
         */
        this.IvrId = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 任务停止时间戳，Unix 秒级时间戳
         * @type {number || null}
         */
        this.NotAfter = null;

        /**
         * 最大尝试次数
         * @type {number || null}
         */
        this.Tries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.NotBefore = 'NotBefore' in params ? params.NotBefore : null;
        this.Callees = 'Callees' in params ? params.Callees : null;
        this.Callers = 'Callers' in params ? params.Callers : null;
        this.IvrId = 'IvrId' in params ? params.IvrId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NotAfter = 'NotAfter' in params ? params.NotAfter : null;
        this.Tries = 'Tries' in params ? params.Tries : null;

    }
}

/**
 * CreateSDKLoginToken返回参数结构体
 * @class
 */
class CreateSDKLoginTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SDK 登录 Token。
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 过期时间戳，Unix 时间戳。
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * SDK 加载路径会随着 SDK 的发布而变动。
         * @type {string || null}
         */
        this.SdkURL = null;

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
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.SdkURL = 'SdkURL' in params ? params.SdkURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCallInMetrics返回参数结构体
 * @class
 */
class DescribeCallInMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 总体指标
         * @type {CallInMetrics || null}
         */
        this.TotalMetrics = null;

        /**
         * 线路维度指标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CallInNumberMetrics> || null}
         */
        this.NumberMetrics = null;

        /**
         * 技能组维度指标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CallInSkillGroupMetrics> || null}
         */
        this.SkillGroupMetrics = null;

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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.TotalMetrics) {
            let obj = new CallInMetrics();
            obj.deserialize(params.TotalMetrics)
            this.TotalMetrics = obj;
        }

        if (params.NumberMetrics) {
            this.NumberMetrics = new Array();
            for (let z in params.NumberMetrics) {
                let obj = new CallInNumberMetrics();
                obj.deserialize(params.NumberMetrics[z]);
                this.NumberMetrics.push(obj);
            }
        }

        if (params.SkillGroupMetrics) {
            this.SkillGroupMetrics = new Array();
            for (let z in params.SkillGroupMetrics) {
                let obj = new CallInSkillGroupMetrics();
                obj.deserialize(params.SkillGroupMetrics[z]);
                this.SkillGroupMetrics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 呼入技能组相关指标
 * @class
 */
class CallInSkillGroupMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 技能组ID
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * 数据指标
         * @type {CallInMetrics || null}
         */
        this.Metrics = null;

        /**
         * 技能组名称
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
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;

        if (params.Metrics) {
            let obj = new CallInMetrics();
            obj.deserialize(params.Metrics)
            this.Metrics = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeStaffInfoList返回参数结构体
 * @class
 */
class DescribeStaffInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 坐席用户总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 坐席用户信息列表
         * @type {Array.<StaffInfo> || null}
         */
        this.StaffList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.StaffList) {
            this.StaffList = new Array();
            for (let z in params.StaffList) {
                let obj = new StaffInfo();
                obj.deserialize(params.StaffList[z]);
                this.StaffList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAutoCalloutTask返回参数结构体
 * @class
 */
class CreateAutoCalloutTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 电话话单信息
 * @class
 */
class TelCdrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主叫号码
         * @type {string || null}
         */
        this.Caller = null;

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * 呼叫发起时间戳，Unix 时间戳
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 呼入呼出方向 0 呼入 1 呼出
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 通话时长
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 录音信息
         * @type {string || null}
         */
        this.RecordURL = null;

        /**
         * 坐席信息
         * @type {SeatUserInfo || null}
         */
        this.SeatUser = null;

        /**
         * 结束状态
0	错误
1	正常结束
2	未接通
17	坐席未接
100	黑名单
101	坐席转接
102	IVR 期间用户放弃
103	会话排队期间用户放弃
104	会话振铃期间用户放弃
105	无坐席在线
106	非工作时间
107	IVR后直接结束
201	未知状态
202	未接听
203	拒接挂断
204	关机
205	空号
206	通话中
207	欠费
208	运营商线路异常
209	主叫取消
210	不在服务区
         * @type {number || null}
         */
        this.EndStatus = null;

        /**
         * 技能组名称
         * @type {string || null}
         */
        this.SkillGroup = null;

        /**
         * 主叫归属地
         * @type {string || null}
         */
        this.CallerLocation = null;

        /**
         * IVR 阶段耗时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IVRDuration = null;

        /**
         * 振铃时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RingTimestamp = null;

        /**
         * 接听时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AcceptTimestamp = null;

        /**
         * 结束时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndedTimestamp = null;

        /**
         * IVR 按键信息 ，e.g. ["1","2","3"]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.IVRKeyPressed = null;

        /**
         * 挂机方 seat 坐席 user 用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HungUpSide = null;

        /**
         * 服务参与者列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServeParticipant> || null}
         */
        this.ServeParticipants = null;

        /**
         * 技能组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * error                   错误
ok                       正常结束
unconnected      未接通
seatGiveUp         坐席未接
blackList             黑名单
seatForward       坐席转接
ivrGiveUp           IVR 期间用户放弃
waitingGiveUp   会话排队期间用户放弃
ringingGiveUp   会话振铃期间用户放弃
noSeatOnline     无坐席在线
notWorkTime     非工作时间
ivrEnd                 IVR后直接结束
unknown            未知状态
notAnswer          未接听
userReject          拒接挂断
powerOff            关机
numberNotExist  空号
busy                    通话中
outOfCredit        欠费
operatorError     运营商线路异常
callerCancel        主叫取消
notInService       不在服务区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndStatusString = null;

        /**
         * 会话开始时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimestamp = null;

        /**
         * 进入排队时间，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QueuedTimestamp = null;

        /**
         * 后置IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IVRKeyPressedElement> || null}
         */
        this.PostIVRKeyPressed = null;

        /**
         * 排队技能组Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QueuedSkillGroupId = null;

        /**
         * 会话 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProtectedCaller = null;

        /**
         * 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProtectedCallee = null;

        /**
         * 客户自定义数据（User-to-User Interface）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uui = null;

        /**
         * IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IVRKeyPressedElement> || null}
         */
        this.IVRKeyPressedEx = null;

        /**
         * 获取录音ASR文本信息地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AsrUrl = null;

        /**
         * 录音转存第三方COS地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomRecordURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Caller = 'Caller' in params ? params.Caller : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.RecordURL = 'RecordURL' in params ? params.RecordURL : null;

        if (params.SeatUser) {
            let obj = new SeatUserInfo();
            obj.deserialize(params.SeatUser)
            this.SeatUser = obj;
        }
        this.EndStatus = 'EndStatus' in params ? params.EndStatus : null;
        this.SkillGroup = 'SkillGroup' in params ? params.SkillGroup : null;
        this.CallerLocation = 'CallerLocation' in params ? params.CallerLocation : null;
        this.IVRDuration = 'IVRDuration' in params ? params.IVRDuration : null;
        this.RingTimestamp = 'RingTimestamp' in params ? params.RingTimestamp : null;
        this.AcceptTimestamp = 'AcceptTimestamp' in params ? params.AcceptTimestamp : null;
        this.EndedTimestamp = 'EndedTimestamp' in params ? params.EndedTimestamp : null;
        this.IVRKeyPressed = 'IVRKeyPressed' in params ? params.IVRKeyPressed : null;
        this.HungUpSide = 'HungUpSide' in params ? params.HungUpSide : null;

        if (params.ServeParticipants) {
            this.ServeParticipants = new Array();
            for (let z in params.ServeParticipants) {
                let obj = new ServeParticipant();
                obj.deserialize(params.ServeParticipants[z]);
                this.ServeParticipants.push(obj);
            }
        }
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.EndStatusString = 'EndStatusString' in params ? params.EndStatusString : null;
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.QueuedTimestamp = 'QueuedTimestamp' in params ? params.QueuedTimestamp : null;

        if (params.PostIVRKeyPressed) {
            this.PostIVRKeyPressed = new Array();
            for (let z in params.PostIVRKeyPressed) {
                let obj = new IVRKeyPressedElement();
                obj.deserialize(params.PostIVRKeyPressed[z]);
                this.PostIVRKeyPressed.push(obj);
            }
        }
        this.QueuedSkillGroupId = 'QueuedSkillGroupId' in params ? params.QueuedSkillGroupId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ProtectedCaller = 'ProtectedCaller' in params ? params.ProtectedCaller : null;
        this.ProtectedCallee = 'ProtectedCallee' in params ? params.ProtectedCallee : null;
        this.Uui = 'Uui' in params ? params.Uui : null;

        if (params.IVRKeyPressedEx) {
            this.IVRKeyPressedEx = new Array();
            for (let z in params.IVRKeyPressedEx) {
                let obj = new IVRKeyPressedElement();
                obj.deserialize(params.IVRKeyPressedEx[z]);
                this.IVRKeyPressedEx.push(obj);
            }
        }
        this.AsrUrl = 'AsrUrl' in params ? params.AsrUrl : null;
        this.CustomRecordURL = 'CustomRecordURL' in params ? params.CustomRecordURL : null;

    }
}

/**
 * CreateUserSig请求参数结构体
 * @class
 */
class CreateUserSigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 用户 ID
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 有效期，单位秒，不超过 1 小时
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 用户签名数据
         * @type {string || null}
         */
        this.ClientData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.ClientData = 'ClientData' in params ? params.ClientData : null;

    }
}

/**
 * 号码购买信息
 * @class
 */
class PhoneNumBuyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话号码
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 号码类型，0-固话|1-虚商号码|2-运营商号码|3-400号码
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 号码呼叫类型，1-呼入|2-呼出|3-呼入呼出
         * @type {number || null}
         */
        this.CallType = null;

        /**
         * 购买时间戳
         * @type {number || null}
         */
        this.BuyTime = null;

        /**
         * 截至时间戳
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 号码状态，1正常|2停用
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CallType = 'CallType' in params ? params.CallType : null;
        this.BuyTime = 'BuyTime' in params ? params.BuyTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * UnbindStaffSkillGroupList请求参数结构体
 * @class
 */
class UnbindStaffSkillGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 客服邮箱
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * 解绑技能组列表
         * @type {Array.<number> || null}
         */
        this.SkillGroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.SkillGroupList = 'SkillGroupList' in params ? params.SkillGroupList : null;

    }
}

/**
 * DescribeIMCdrs请求参数结构体
 * @class
 */
class DescribeIMCdrsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间
         * @type {number || null}
         */
        this.StartTimestamp = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTimestamp = null;

        /**
         * 实例 ID（废弃）
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 返回记录条数 最大为100默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回记录偏移 默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 1为全媒体，2为文本客服，不填则查询全部
         * @type {number || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.EndTimestamp = 'EndTimestamp' in params ? params.EndTimestamp : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeAutoCalloutTask返回参数结构体
 * @class
 */
class DescribeAutoCalloutTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 任务起始时间戳
         * @type {number || null}
         */
        this.NotBefore = null;

        /**
         * 任务结束时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NotAfter = null;

        /**
         * 主叫列表
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * 被叫信息列表
         * @type {Array.<AutoCalloutTaskCalleeInfo> || null}
         */
        this.Callees = null;

        /**
         * 任务使用的IvrId
         * @type {number || null}
         */
        this.IvrId = null;

        /**
         * 任务状态 0初始 1运行中 2已完成 3结束中 4已终止
         * @type {number || null}
         */
        this.State = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NotBefore = 'NotBefore' in params ? params.NotBefore : null;
        this.NotAfter = 'NotAfter' in params ? params.NotAfter : null;
        this.Callers = 'Callers' in params ? params.Callers : null;

        if (params.Callees) {
            this.Callees = new Array();
            for (let z in params.Callees) {
                let obj = new AutoCalloutTaskCalleeInfo();
                obj.deserialize(params.Callees[z]);
                this.Callees.push(obj);
            }
        }
        this.IvrId = 'IvrId' in params ? params.IvrId : null;
        this.State = 'State' in params ? params.State : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStaffStatusMetrics请求参数结构体
 * @class
 */
class DescribeStaffStatusMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 筛选坐席列表，默认不传返回全部坐席信息
         * @type {Array.<string> || null}
         */
        this.StaffList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StaffList = 'StaffList' in params ? params.StaffList : null;

    }
}

/**
 * DescribeAutoCalloutTask请求参数结构体
 * @class
 */
class DescribeAutoCalloutTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 任务Id
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 技能组信息
 * @class
 */
class SkillGroupItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 技能组ID
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * 技能组名称
         * @type {string || null}
         */
        this.SkillGroupName = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 类型：IM、TEL、ALL（全媒体）
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateUserSig返回参数结构体
 * @class
 */
class CreateUserSigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名结果
         * @type {string || null}
         */
        this.UserSig = null;

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
        this.UserSig = 'UserSig' in params ? params.UserSig : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStaff请求参数结构体
 * @class
 */
class DeleteStaffRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 待删除客服邮箱列表
         * @type {Array.<string> || null}
         */
        this.StaffList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StaffList = 'StaffList' in params ? params.StaffList : null;

    }
}

/**
 * DescribeTelSession请求参数结构体
 * @class
 */
class DescribeTelSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 会话 ID
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * 呼入实时指标
 * @class
 */
class CallInMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * IVR驻留数量
         * @type {number || null}
         */
        this.IvrCount = null;

        /**
         * 排队中数量
         * @type {number || null}
         */
        this.QueueCount = null;

        /**
         * 振铃中数量
         * @type {number || null}
         */
        this.RingCount = null;

        /**
         * 接通中数量
         * @type {number || null}
         */
        this.AcceptCount = null;

        /**
         * 客服转接外线中数量
         * @type {number || null}
         */
        this.TransferOuterCount = null;

        /**
         * 最大排队时长
         * @type {number || null}
         */
        this.MaxQueueDuration = null;

        /**
         * 平均排队时长
         * @type {number || null}
         */
        this.AvgQueueDuration = null;

        /**
         * 最大振铃时长
         * @type {number || null}
         */
        this.MaxRingDuration = null;

        /**
         * 平均振铃时长
         * @type {number || null}
         */
        this.AvgRingDuration = null;

        /**
         * 最大接通时长
         * @type {number || null}
         */
        this.MaxAcceptDuration = null;

        /**
         * 平均接通时长
         * @type {number || null}
         */
        this.AvgAcceptDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IvrCount = 'IvrCount' in params ? params.IvrCount : null;
        this.QueueCount = 'QueueCount' in params ? params.QueueCount : null;
        this.RingCount = 'RingCount' in params ? params.RingCount : null;
        this.AcceptCount = 'AcceptCount' in params ? params.AcceptCount : null;
        this.TransferOuterCount = 'TransferOuterCount' in params ? params.TransferOuterCount : null;
        this.MaxQueueDuration = 'MaxQueueDuration' in params ? params.MaxQueueDuration : null;
        this.AvgQueueDuration = 'AvgQueueDuration' in params ? params.AvgQueueDuration : null;
        this.MaxRingDuration = 'MaxRingDuration' in params ? params.MaxRingDuration : null;
        this.AvgRingDuration = 'AvgRingDuration' in params ? params.AvgRingDuration : null;
        this.MaxAcceptDuration = 'MaxAcceptDuration' in params ? params.MaxAcceptDuration : null;
        this.AvgAcceptDuration = 'AvgAcceptDuration' in params ? params.AvgAcceptDuration : null;

    }
}

/**
 * DescribeCCCBuyInfoList请求参数结构体
 * @class
 */
class DescribeCCCBuyInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID列表，不传时查询所有应用
         * @type {Array.<number> || null}
         */
        this.SdkAppIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppIds = 'SdkAppIds' in params ? params.SdkAppIds : null;

    }
}

/**
 * DeleteStaff返回参数结构体
 * @class
 */
class DeleteStaffResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无法删除的状态为在线的客服列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OnlineStaffList = null;

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
        this.OnlineStaffList = 'OnlineStaffList' in params ? params.OnlineStaffList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量添加客服时，返回出错客服的像个信息
 * @class
 */
class ErrStaffItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 坐席邮箱地址
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 错误描述
         * @type {string || null}
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
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 坐席状态补充信息
 * @class
 */
class StaffStatusExtra extends  AbstractModel {
    constructor(){
        super();

        /**
         * im - 文本 | tel - 电话 | all - 全媒体
         * @type {string || null}
         */
        this.Type = null;

        /**
         * in - 呼入 | out - 呼出
         * @type {string || null}
         */
        this.Direct = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Direct = 'Direct' in params ? params.Direct : null;

    }
}

/**
 * DescribeSkillGroupInfoList请求参数结构体
 * @class
 */
class DescribeSkillGroupInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分页尺寸，上限 100
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页页码，从 0 开始
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 技能组ID，查询单个技能组时使用
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * 查询修改时间大于等于ModifiedTime的技能组时使用
         * @type {number || null}
         */
        this.ModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;

    }
}

/**
 * CreateStaff请求参数结构体
 * @class
 */
class CreateStaffRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 客服信息，个数不超过 10
         * @type {Array.<SeatUserInfo> || null}
         */
        this.Staffs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Staffs) {
            this.Staffs = new Array();
            for (let z in params.Staffs) {
                let obj = new SeatUserInfo();
                obj.deserialize(params.Staffs[z]);
                this.Staffs.push(obj);
            }
        }

    }
}

/**
 * DescribeChatMessages返回参数结构体
 * @class
 */
class DescribeChatMessagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 消息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MessageBody> || null}
         */
        this.Messages = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Messages) {
            this.Messages = new Array();
            for (let z in params.Messages) {
                let obj = new MessageBody();
                obj.deserialize(params.Messages[z]);
                this.Messages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 应用购买信息
 * @class
 */
class SdkAppIdBuyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 坐席购买数（还在有效期内）
         * @type {number || null}
         */
        this.StaffBuyNum = null;

        /**
         * 坐席购买列表 （还在有效期内）
         * @type {Array.<StaffBuyInfo> || null}
         */
        this.StaffBuyList = null;

        /**
         * 号码购买列表
         * @type {Array.<PhoneNumBuyInfo> || null}
         */
        this.PhoneNumBuyList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.StaffBuyNum = 'StaffBuyNum' in params ? params.StaffBuyNum : null;

        if (params.StaffBuyList) {
            this.StaffBuyList = new Array();
            for (let z in params.StaffBuyList) {
                let obj = new StaffBuyInfo();
                obj.deserialize(params.StaffBuyList[z]);
                this.StaffBuyList.push(obj);
            }
        }

        if (params.PhoneNumBuyList) {
            this.PhoneNumBuyList = new Array();
            for (let z in params.PhoneNumBuyList) {
                let obj = new PhoneNumBuyInfo();
                obj.deserialize(params.PhoneNumBuyList[z]);
                this.PhoneNumBuyList.push(obj);
            }
        }

    }
}

/**
 * 呼入线路维度相关指标
 * @class
 */
class CallInNumberMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 线路号码
         * @type {string || null}
         */
        this.Number = null;

        /**
         * 线路相关指标
         * @type {CallInMetrics || null}
         */
        this.Metrics = null;

        /**
         * 所属技能组相关指标
         * @type {Array.<CallInSkillGroupMetrics> || null}
         */
        this.SkillGroupMetrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Number = 'Number' in params ? params.Number : null;

        if (params.Metrics) {
            let obj = new CallInMetrics();
            obj.deserialize(params.Metrics)
            this.Metrics = obj;
        }

        if (params.SkillGroupMetrics) {
            this.SkillGroupMetrics = new Array();
            for (let z in params.SkillGroupMetrics) {
                let obj = new CallInSkillGroupMetrics();
                obj.deserialize(params.SkillGroupMetrics[z]);
                this.SkillGroupMetrics.push(obj);
            }
        }

    }
}

/**
 * 外呼任务被叫信息
 * @class
 */
class AutoCalloutTaskCalleeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * 呼叫状态 0初始 1已接听 2未接听 3呼叫中 4待重试
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * DescribePSTNActiveSessionList返回参数结构体
 * @class
 */
class DescribePSTNActiveSessionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表内容
         * @type {Array.<PSTNSessionInfo> || null}
         */
        this.Sessions = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Sessions) {
            this.Sessions = new Array();
            for (let z in params.Sessions) {
                let obj = new PSTNSessionInfo();
                obj.deserialize(params.Sessions[z]);
                this.Sessions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCallOutSession返回参数结构体
 * @class
 */
class CreateCallOutSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建的会话 ID
         * @type {string || null}
         */
        this.SessionId = null;

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
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文本会话服务记录信息
 * @class
 */
class IMCdrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务记录ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 服务时长秒数
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 结束状态
0 异常结束
1 正常结束
3 无坐席在线
17 坐席放弃接听
100 黑名单
101 坐席手动转接
102 IVR阶段放弃
108 用户超时自动结束
         * @type {number || null}
         */
        this.EndStatus = null;

        /**
         * 用户昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 服务类型 1为全媒体，2为文本客服
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 客服ID
         * @type {string || null}
         */
        this.StaffId = null;

        /**
         * 服务时间戳
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 会话ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 技能组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SkillGroupId = null;

        /**
         * 技能组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SkillGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.EndStatus = 'EndStatus' in params ? params.EndStatus : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StaffId = 'StaffId' in params ? params.StaffId : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;

    }
}

/**
 * 坐席购买信息
 * @class
 */
class StaffBuyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买坐席数量
         * @type {number || null}
         */
        this.Num = null;

        /**
         * 购买时间戳
         * @type {number || null}
         */
        this.BuyTime = null;

        /**
         * 截至时间戳
         * @type {number || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Num = 'Num' in params ? params.Num : null;
        this.BuyTime = 'BuyTime' in params ? params.BuyTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeProtectedTelCdr返回参数结构体
 * @class
 */
class DescribeProtectedTelCdrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 话单记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 话单记录
         * @type {Array.<TelCdrInfo> || null}
         */
        this.TelCdrs = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TelCdrs) {
            this.TelCdrs = new Array();
            for (let z in params.TelCdrs) {
                let obj = new TelCdrInfo();
                obj.deserialize(params.TelCdrs[z]);
                this.TelCdrs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoCalloutTasks请求参数结构体
 * @class
 */
class DescribeAutoCalloutTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * DescribeChatMessages请求参数结构体
 * @class
 */
class DescribeChatMessagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID（废弃）
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 服务记录ID
         * @type {string || null}
         */
        this.CdrId = null;

        /**
         * 返回记录条数 最大为100默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回记录偏移 默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 1为从早到晚，2为从晚到早，默认为2
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 服务记录SessionID
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CdrId = 'CdrId' in params ? params.CdrId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * PSTN 会话类型。
 * @class
 */
class PSTNSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话 ID
         * @type {string || null}
         */
        this.SessionID = null;

        /**
         * 会话临时房间 ID
         * @type {string || null}
         */
        this.RoomID = null;

        /**
         * 主叫
         * @type {string || null}
         */
        this.Caller = null;

        /**
         * 被叫
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * 开始时间，Unix 时间戳
         * @type {number || null}
         */
        this.StartTimestamp = null;

        /**
         * 振铃时间，Unix 时间戳
         * @type {number || null}
         */
        this.RingTimestamp = null;

        /**
         * 接听时间，Unix 时间戳
         * @type {number || null}
         */
        this.AcceptTimestamp = null;

        /**
         * 坐席邮箱
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * 坐席工号
         * @type {string || null}
         */
        this.StaffNumber = null;

        /**
         * 会话状态
ringing 振铃中
seatJoining  等待坐席接听
inProgress 进行中
finished 已完成
         * @type {string || null}
         */
        this.SessionStatus = null;

        /**
         * 会话呼叫方向， 0 呼入 | 1 - 呼出
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 转外线使用的号码（转外线主叫）
         * @type {string || null}
         */
        this.OutBoundCaller = null;

        /**
         * 转外线被叫
         * @type {string || null}
         */
        this.OutBoundCallee = null;

        /**
         * 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空
         * @type {string || null}
         */
        this.ProtectedCaller = null;

        /**
         * 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空
         * @type {string || null}
         */
        this.ProtectedCallee = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionID = 'SessionID' in params ? params.SessionID : null;
        this.RoomID = 'RoomID' in params ? params.RoomID : null;
        this.Caller = 'Caller' in params ? params.Caller : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.RingTimestamp = 'RingTimestamp' in params ? params.RingTimestamp : null;
        this.AcceptTimestamp = 'AcceptTimestamp' in params ? params.AcceptTimestamp : null;
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.StaffNumber = 'StaffNumber' in params ? params.StaffNumber : null;
        this.SessionStatus = 'SessionStatus' in params ? params.SessionStatus : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.OutBoundCaller = 'OutBoundCaller' in params ? params.OutBoundCaller : null;
        this.OutBoundCallee = 'OutBoundCallee' in params ? params.OutBoundCallee : null;
        this.ProtectedCaller = 'ProtectedCaller' in params ? params.ProtectedCaller : null;
        this.ProtectedCallee = 'ProtectedCallee' in params ? params.ProtectedCallee : null;

    }
}

/**
 * DescribeTelSession返回参数结构体
 * @class
 */
class DescribeTelSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话信息
         * @type {PSTNSession || null}
         */
        this.Session = null;

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

        if (params.Session) {
            let obj = new PSTNSession();
            obj.deserialize(params.Session)
            this.Session = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStaffInfoList请求参数结构体
 * @class
 */
class DescribeStaffInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分页尺寸，上限 100
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页页码，从 0 开始
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 坐席账号，查询单个坐席时使用
         * @type {string || null}
         */
        this.StaffMail = null;

        /**
         * 查询修改时间大于等于ModifiedTime的坐席时使用
         * @type {number || null}
         */
        this.ModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.StaffMail = 'StaffMail' in params ? params.StaffMail : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;

    }
}

/**
 * 自动外呼任务列表项
 * @class
 */
class AutoCalloutTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 被叫数量
         * @type {number || null}
         */
        this.CalleeCount = null;

        /**
         * 主叫号码列表
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * 起始时间戳
         * @type {number || null}
         */
        this.NotBefore = null;

        /**
         * 结束时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NotAfter = null;

        /**
         * 任务使用的IvrId
         * @type {number || null}
         */
        this.IvrId = null;

        /**
         * 任务状态0初始 1运行中 2已完成 3结束中 4已结束
         * @type {number || null}
         */
        this.State = null;

        /**
         * 任务Id
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CalleeCount = 'CalleeCount' in params ? params.CalleeCount : null;
        this.Callers = 'Callers' in params ? params.Callers : null;
        this.NotBefore = 'NotBefore' in params ? params.NotBefore : null;
        this.NotAfter = 'NotAfter' in params ? params.NotAfter : null;
        this.IvrId = 'IvrId' in params ? params.IvrId : null;
        this.State = 'State' in params ? params.State : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 带有技能组优先级的坐席信息
 * @class
 */
class StaffInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 坐席名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 坐席邮箱
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 坐席电话号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 坐席昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * 坐席工号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StaffNumber = null;

        /**
         * 所属技能组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SkillGroupItem> || null}
         */
        this.SkillGroupList = null;

        /**
         * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.StaffNumber = 'StaffNumber' in params ? params.StaffNumber : null;

        if (params.SkillGroupList) {
            this.SkillGroupList = new Array();
            for (let z in params.SkillGroupList) {
                let obj = new SkillGroupItem();
                obj.deserialize(params.SkillGroupList[z]);
                this.SkillGroupList.push(obj);
            }
        }
        this.LastModifyTimestamp = 'LastModifyTimestamp' in params ? params.LastModifyTimestamp : null;

    }
}

/**
 * PSTN 会话信息
 * @class
 */
class PSTNSessionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话 ID
         * @type {string || null}
         */
        this.SessionID = null;

        /**
         * 会话临时房间 ID
         * @type {string || null}
         */
        this.RoomID = null;

        /**
         * 主叫
         * @type {string || null}
         */
        this.Caller = null;

        /**
         * 被叫
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * 开始时间，Unix 时间戳
         * @type {string || null}
         */
        this.StartTimestamp = null;

        /**
         * 接听时间，Unix 时间戳
         * @type {string || null}
         */
        this.AcceptTimestamp = null;

        /**
         * 坐席邮箱
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * 坐席工号
         * @type {string || null}
         */
        this.StaffNumber = null;

        /**
         * 坐席状态 inProgress 进行中
         * @type {string || null}
         */
        this.SessionStatus = null;

        /**
         * 会话呼叫方向， 0 呼入 | 1 - 呼出
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 振铃时间，Unix 时间戳
         * @type {number || null}
         */
        this.RingTimestamp = null;

        /**
         * 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空
         * @type {string || null}
         */
        this.ProtectedCaller = null;

        /**
         * 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空
         * @type {string || null}
         */
        this.ProtectedCallee = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionID = 'SessionID' in params ? params.SessionID : null;
        this.RoomID = 'RoomID' in params ? params.RoomID : null;
        this.Caller = 'Caller' in params ? params.Caller : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.AcceptTimestamp = 'AcceptTimestamp' in params ? params.AcceptTimestamp : null;
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.StaffNumber = 'StaffNumber' in params ? params.StaffNumber : null;
        this.SessionStatus = 'SessionStatus' in params ? params.SessionStatus : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.RingTimestamp = 'RingTimestamp' in params ? params.RingTimestamp : null;
        this.ProtectedCaller = 'ProtectedCaller' in params ? params.ProtectedCaller : null;
        this.ProtectedCallee = 'ProtectedCallee' in params ? params.ProtectedCallee : null;

    }
}

/**
 * 参与者信息
 * @class
 */
class ServeParticipant extends  AbstractModel {
    constructor(){
        super();

        /**
         * 坐席邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 坐席电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 振铃时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RingTimestamp = null;

        /**
         * 接听时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AcceptTimestamp = null;

        /**
         * 结束时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndedTimestamp = null;

        /**
         * 录音 ID，能够索引到坐席侧的录音
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 参与者类型，"staffSeat", "outboundSeat", "staffPhoneSeat"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 转接来源坐席信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransferFrom = null;

        /**
         * 转接去向坐席信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransferTo = null;

        /**
         * 转接去向参与者类型，取值与 Type 一致
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransferToType = null;

        /**
         * 技能组 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * 结束状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndStatusString = null;

        /**
         * 录音 URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordURL = null;

        /**
         * 参与者序号，从 0 开始
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Sequence = null;

        /**
         * 开始时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimestamp = null;

        /**
         * 技能组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SkillGroupName = null;

        /**
         * 录音转存第三方COS地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomRecordURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.RingTimestamp = 'RingTimestamp' in params ? params.RingTimestamp : null;
        this.AcceptTimestamp = 'AcceptTimestamp' in params ? params.AcceptTimestamp : null;
        this.EndedTimestamp = 'EndedTimestamp' in params ? params.EndedTimestamp : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TransferFrom = 'TransferFrom' in params ? params.TransferFrom : null;
        this.TransferTo = 'TransferTo' in params ? params.TransferTo : null;
        this.TransferToType = 'TransferToType' in params ? params.TransferToType : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.EndStatusString = 'EndStatusString' in params ? params.EndStatusString : null;
        this.RecordURL = 'RecordURL' in params ? params.RecordURL : null;
        this.Sequence = 'Sequence' in params ? params.Sequence : null;
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;
        this.CustomRecordURL = 'CustomRecordURL' in params ? params.CustomRecordURL : null;

    }
}

/**
 * DescribeTelCdr返回参数结构体
 * @class
 */
class DescribeTelCdrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 话单记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 话单记录
         * @type {Array.<TelCdrInfo> || null}
         */
        this.TelCdrs = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TelCdrs) {
            this.TelCdrs = new Array();
            for (let z in params.TelCdrs) {
                let obj = new TelCdrInfo();
                obj.deserialize(params.TelCdrs[z]);
                this.TelCdrs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStaffStatusMetrics返回参数结构体
 * @class
 */
class DescribeStaffStatusMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 坐席状态实时信息
         * @type {Array.<StaffStatusMetrics> || null}
         */
        this.Metrics = null;

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

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new StaffStatusMetrics();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTelCallInfo返回参数结构体
 * @class
 */
class DescribeTelCallInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 呼出套餐包消耗分钟数
         * @type {number || null}
         */
        this.TelCallOutCount = null;

        /**
         * 呼入套餐包消耗分钟数
         * @type {number || null}
         */
        this.TelCallInCount = null;

        /**
         * 坐席使用统计个数
         * @type {number || null}
         */
        this.SeatUsedCount = null;

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
        this.TelCallOutCount = 'TelCallOutCount' in params ? params.TelCallOutCount : null;
        this.TelCallInCount = 'TelCallInCount' in params ? params.TelCallInCount : null;
        this.SeatUsedCount = 'SeatUsedCount' in params ? params.SeatUsedCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 技能组信息
 * @class
 */
class SkillGroupInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 技能组ID
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * 技能组名称
         * @type {string || null}
         */
        this.SkillGroupName = null;

        /**
         * 类型：IM、TEL、ALL（全媒体）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 会话分配策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoutePolicy = null;

        /**
         * 会话分配是否优先上次服务坐席
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UsingLastSeat = null;

        /**
         * 单客服最大并发数（电话类型默认1）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxConcurrency = null;

        /**
         * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RoutePolicy = 'RoutePolicy' in params ? params.RoutePolicy : null;
        this.UsingLastSeat = 'UsingLastSeat' in params ? params.UsingLastSeat : null;
        this.MaxConcurrency = 'MaxConcurrency' in params ? params.MaxConcurrency : null;
        this.LastModifyTimestamp = 'LastModifyTimestamp' in params ? params.LastModifyTimestamp : null;

    }
}

/**
 * StopAutoCalloutTask返回参数结构体
 * @class
 */
class StopAutoCalloutTaskResponse extends  AbstractModel {
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
 * DescribeSeatUserList返回参数结构体
 * @class
 */
class DescribeSeatUserListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 此实例的坐席用户总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 坐席用户信息列表
         * @type {Array.<SeatUserInfo> || null}
         */
        this.SeatUsers = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SeatUsers) {
            this.SeatUsers = new Array();
            for (let z in params.SeatUsers) {
                let obj = new SeatUserInfo();
                obj.deserialize(params.SeatUsers[z]);
                this.SeatUsers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSeatUserList请求参数结构体
 * @class
 */
class DescribeSeatUserListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateCallOutSession请求参数结构体
 * @class
 */
class CreateCallOutSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 客服用户 ID，一般为客服邮箱
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 被叫号码，须带 0086 前缀
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * 主叫号码，须带 0086 前缀
         * @type {string || null}
         */
        this.Caller = null;

        /**
         * 是否强制使用手机外呼，当前只支持 true，若为 true 请确保已配置白名单
         * @type {boolean || null}
         */
        this.IsForceUseMobile = null;

        /**
         * 自定义数据，长度限制 1024 字节
         * @type {string || null}
         */
        this.Uui = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.Caller = 'Caller' in params ? params.Caller : null;
        this.IsForceUseMobile = 'IsForceUseMobile' in params ? params.IsForceUseMobile : null;
        this.Uui = 'Uui' in params ? params.Uui : null;

    }
}

/**
 * 坐席状态相关信息
 * @class
 */
class StaffStatusMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 坐席邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 坐席状态 free 示闲 | busy 忙碌 | rest 小休 | notReady 示忙 | afterCallWork 话后调整 | offline 离线
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 坐席状态补充信息
         * @type {StaffStatusExtra || null}
         */
        this.StatusExtra = null;

        /**
         * 当天在线总时长
         * @type {number || null}
         */
        this.OnlineDuration = null;

        /**
         * 当天示闲总时长
         * @type {number || null}
         */
        this.FreeDuration = null;

        /**
         * 当天忙碌总时长
         * @type {number || null}
         */
        this.BusyDuration = null;

        /**
         * 当天示忙总时长
         * @type {number || null}
         */
        this.NotReadyDuration = null;

        /**
         * 当天小休总时长
         * @type {number || null}
         */
        this.RestDuration = null;

        /**
         * 当天话后调整总时长
         * @type {number || null}
         */
        this.AfterCallWorkDuration = null;

        /**
         * 小休原因
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 是否预约小休
         * @type {boolean || null}
         */
        this.ReserveRest = null;

        /**
         * 是否预约示忙
         * @type {boolean || null}
         */
        this.ReserveNotReady = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Email = 'Email' in params ? params.Email : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.StatusExtra) {
            let obj = new StaffStatusExtra();
            obj.deserialize(params.StatusExtra)
            this.StatusExtra = obj;
        }
        this.OnlineDuration = 'OnlineDuration' in params ? params.OnlineDuration : null;
        this.FreeDuration = 'FreeDuration' in params ? params.FreeDuration : null;
        this.BusyDuration = 'BusyDuration' in params ? params.BusyDuration : null;
        this.NotReadyDuration = 'NotReadyDuration' in params ? params.NotReadyDuration : null;
        this.RestDuration = 'RestDuration' in params ? params.RestDuration : null;
        this.AfterCallWorkDuration = 'AfterCallWorkDuration' in params ? params.AfterCallWorkDuration : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.ReserveRest = 'ReserveRest' in params ? params.ReserveRest : null;
        this.ReserveNotReady = 'ReserveNotReady' in params ? params.ReserveNotReady : null;

    }
}

/**
 * BindStaffSkillGroupList返回参数结构体
 * @class
 */
class BindStaffSkillGroupListResponse extends  AbstractModel {
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
 * DescribeAutoCalloutTasks返回参数结构体
 * @class
 */
class DescribeAutoCalloutTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务列表
         * @type {Array.<AutoCalloutTaskInfo> || null}
         */
        this.Tasks = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new AutoCalloutTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 套餐包购买信息
 * @class
 */
class PackageBuyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐包Id
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * 套餐包类型，0-外呼套餐包|1-400呼入套餐包
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 套餐包总量
         * @type {number || null}
         */
        this.CapacitySize = null;

        /**
         * 套餐包剩余量
         * @type {number || null}
         */
        this.CapacityRemain = null;

        /**
         * 购买时间戳
         * @type {number || null}
         */
        this.BuyTime = null;

        /**
         * 截至时间戳
         * @type {number || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CapacitySize = 'CapacitySize' in params ? params.CapacitySize : null;
        this.CapacityRemain = 'CapacityRemain' in params ? params.CapacityRemain : null;
        this.BuyTime = 'BuyTime' in params ? params.BuyTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeTelCdr请求参数结构体
 * @class
 */
class DescribeTelCdrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间戳，Unix 秒级时间戳
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * 结束时间戳，Unix 秒级时间戳
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * 实例 ID（废弃）
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 返回数据条数，上限（废弃）
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移（废弃）
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分页尺寸（必填），上限 100
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页页码（必填），从 0 开始
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 按手机号筛选
         * @type {Array.<string> || null}
         */
        this.Phones = null;

        /**
         * 按SessionId筛选
         * @type {Array.<string> || null}
         */
        this.SessionIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.Phones = 'Phones' in params ? params.Phones : null;
        this.SessionIds = 'SessionIds' in params ? params.SessionIds : null;

    }
}

/**
 * DescribeProtectedTelCdr请求参数结构体
 * @class
 */
class DescribeProtectedTelCdrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间戳，Unix 秒级时间戳
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * 结束时间戳，Unix 秒级时间戳
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * 应用 ID，可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分页尺寸，上限 100
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页页码，从 0 开始
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * 聊天消息
 * @class
 */
class MessageBody extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息时间戳
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 发消息的用户ID
         * @type {string || null}
         */
        this.From = null;

        /**
         * 消息列表
         * @type {Array.<Message> || null}
         */
        this.Messages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.From = 'From' in params ? params.From : null;

        if (params.Messages) {
            this.Messages = new Array();
            for (let z in params.Messages) {
                let obj = new Message();
                obj.deserialize(params.Messages[z]);
                this.Messages.push(obj);
            }
        }

    }
}

/**
 * CreateSDKLoginToken请求参数结构体
 * @class
 */
class CreateSDKLoginTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 坐席账号。
         * @type {string || null}
         */
        this.SeatUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SeatUserId = 'SeatUserId' in params ? params.SeatUserId : null;

    }
}

/**
 * DescribeTelCallInfo请求参数结构体
 * @class
 */
class DescribeTelCallInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间戳，Unix 时间戳
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * 结束时间戳，Unix 时间戳，查询时间范围最大为90天
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * 应用ID列表，多个ID时，返回值为多个ID使用总和
         * @type {Array.<number> || null}
         */
        this.SdkAppIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.SdkAppIdList = 'SdkAppIdList' in params ? params.SdkAppIdList : null;

    }
}

/**
 * DescribeCCCBuyInfoList返回参数结构体
 * @class
 */
class DescribeCCCBuyInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 应用购买信息列表
         * @type {Array.<SdkAppIdBuyInfo> || null}
         */
        this.SdkAppIdBuyList = null;

        /**
         * 套餐包购买信息列表
         * @type {Array.<PackageBuyInfo> || null}
         */
        this.PackageBuyList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SdkAppIdBuyList) {
            this.SdkAppIdBuyList = new Array();
            for (let z in params.SdkAppIdBuyList) {
                let obj = new SdkAppIdBuyInfo();
                obj.deserialize(params.SdkAppIdBuyList[z]);
                this.SdkAppIdBuyList.push(obj);
            }
        }

        if (params.PackageBuyList) {
            this.PackageBuyList = new Array();
            for (let z in params.PackageBuyList) {
                let obj = new PackageBuyInfo();
                obj.deserialize(params.PackageBuyList[z]);
                this.PackageBuyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindStaffSkillGroupList返回参数结构体
 * @class
 */
class UnbindStaffSkillGroupListResponse extends  AbstractModel {
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
 * 坐席用户信息
 * @class
 */
class SeatUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 坐席名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 坐席邮箱
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 坐席电话号码（带0086前缀）
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 坐席昵称
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 坐席关联的技能组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SkillGroupNameList = null;

        /**
         * 工号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StaffNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.SkillGroupNameList = 'SkillGroupNameList' in params ? params.SkillGroupNameList : null;
        this.StaffNumber = 'StaffNumber' in params ? params.StaffNumber : null;

    }
}

/**
 * DescribeCallInMetrics请求参数结构体
 * @class
 */
class DescribeCallInMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 是否返回技能组维度信息，默认“是”
         * @type {boolean || null}
         */
        this.EnabledSkillGroup = null;

        /**
         * 是否返回线路维度信息，默认“否”
         * @type {boolean || null}
         */
        this.EnabledNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.EnabledSkillGroup = 'EnabledSkillGroup' in params ? params.EnabledSkillGroup : null;
        this.EnabledNumber = 'EnabledNumber' in params ? params.EnabledNumber : null;

    }
}

/**
 * CreateStaff返回参数结构体
 * @class
 */
class CreateStaffResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误坐席列表及错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ErrStaffItem> || null}
         */
        this.ErrorStaffList = null;

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

        if (params.ErrorStaffList) {
            this.ErrorStaffList = new Array();
            for (let z in params.ErrorStaffList) {
                let obj = new ErrStaffItem();
                obj.deserialize(params.ErrorStaffList[z]);
                this.ErrorStaffList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 单条消息
 * @class
 */
class Message extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 消息内容
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeSkillGroupInfoList返回参数结构体
 * @class
 */
class DescribeSkillGroupInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 技能组总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 技能组信息列表
         * @type {Array.<SkillGroupInfoItem> || null}
         */
        this.SkillGroupList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SkillGroupList) {
            this.SkillGroupList = new Array();
            for (let z in params.SkillGroupList) {
                let obj = new SkillGroupInfoItem();
                obj.deserialize(params.SkillGroupList[z]);
                this.SkillGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIMCdrs返回参数结构体
 * @class
 */
class DescribeIMCdrsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 服务记录列表
         * @type {Array.<IMCdrInfo> || null}
         */
        this.IMCdrs = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.IMCdrs) {
            this.IMCdrs = new Array();
            for (let z in params.IMCdrs) {
                let obj = new IMCdrInfo();
                obj.deserialize(params.IMCdrs[z]);
                this.IMCdrs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    StopAutoCalloutTaskRequest: StopAutoCalloutTaskRequest,
    BindStaffSkillGroupListRequest: BindStaffSkillGroupListRequest,
    DescribePSTNActiveSessionListRequest: DescribePSTNActiveSessionListRequest,
    IVRKeyPressedElement: IVRKeyPressedElement,
    CreateAutoCalloutTaskRequest: CreateAutoCalloutTaskRequest,
    CreateSDKLoginTokenResponse: CreateSDKLoginTokenResponse,
    DescribeCallInMetricsResponse: DescribeCallInMetricsResponse,
    CallInSkillGroupMetrics: CallInSkillGroupMetrics,
    DescribeStaffInfoListResponse: DescribeStaffInfoListResponse,
    CreateAutoCalloutTaskResponse: CreateAutoCalloutTaskResponse,
    TelCdrInfo: TelCdrInfo,
    CreateUserSigRequest: CreateUserSigRequest,
    PhoneNumBuyInfo: PhoneNumBuyInfo,
    UnbindStaffSkillGroupListRequest: UnbindStaffSkillGroupListRequest,
    DescribeIMCdrsRequest: DescribeIMCdrsRequest,
    DescribeAutoCalloutTaskResponse: DescribeAutoCalloutTaskResponse,
    DescribeStaffStatusMetricsRequest: DescribeStaffStatusMetricsRequest,
    DescribeAutoCalloutTaskRequest: DescribeAutoCalloutTaskRequest,
    SkillGroupItem: SkillGroupItem,
    CreateUserSigResponse: CreateUserSigResponse,
    DeleteStaffRequest: DeleteStaffRequest,
    DescribeTelSessionRequest: DescribeTelSessionRequest,
    CallInMetrics: CallInMetrics,
    DescribeCCCBuyInfoListRequest: DescribeCCCBuyInfoListRequest,
    DeleteStaffResponse: DeleteStaffResponse,
    ErrStaffItem: ErrStaffItem,
    StaffStatusExtra: StaffStatusExtra,
    DescribeSkillGroupInfoListRequest: DescribeSkillGroupInfoListRequest,
    CreateStaffRequest: CreateStaffRequest,
    DescribeChatMessagesResponse: DescribeChatMessagesResponse,
    SdkAppIdBuyInfo: SdkAppIdBuyInfo,
    CallInNumberMetrics: CallInNumberMetrics,
    AutoCalloutTaskCalleeInfo: AutoCalloutTaskCalleeInfo,
    DescribePSTNActiveSessionListResponse: DescribePSTNActiveSessionListResponse,
    CreateCallOutSessionResponse: CreateCallOutSessionResponse,
    IMCdrInfo: IMCdrInfo,
    StaffBuyInfo: StaffBuyInfo,
    DescribeProtectedTelCdrResponse: DescribeProtectedTelCdrResponse,
    DescribeAutoCalloutTasksRequest: DescribeAutoCalloutTasksRequest,
    DescribeChatMessagesRequest: DescribeChatMessagesRequest,
    PSTNSession: PSTNSession,
    DescribeTelSessionResponse: DescribeTelSessionResponse,
    DescribeStaffInfoListRequest: DescribeStaffInfoListRequest,
    AutoCalloutTaskInfo: AutoCalloutTaskInfo,
    StaffInfo: StaffInfo,
    PSTNSessionInfo: PSTNSessionInfo,
    ServeParticipant: ServeParticipant,
    DescribeTelCdrResponse: DescribeTelCdrResponse,
    DescribeStaffStatusMetricsResponse: DescribeStaffStatusMetricsResponse,
    DescribeTelCallInfoResponse: DescribeTelCallInfoResponse,
    SkillGroupInfoItem: SkillGroupInfoItem,
    StopAutoCalloutTaskResponse: StopAutoCalloutTaskResponse,
    DescribeSeatUserListResponse: DescribeSeatUserListResponse,
    DescribeSeatUserListRequest: DescribeSeatUserListRequest,
    CreateCallOutSessionRequest: CreateCallOutSessionRequest,
    StaffStatusMetrics: StaffStatusMetrics,
    BindStaffSkillGroupListResponse: BindStaffSkillGroupListResponse,
    DescribeAutoCalloutTasksResponse: DescribeAutoCalloutTasksResponse,
    PackageBuyInfo: PackageBuyInfo,
    DescribeTelCdrRequest: DescribeTelCdrRequest,
    DescribeProtectedTelCdrRequest: DescribeProtectedTelCdrRequest,
    MessageBody: MessageBody,
    CreateSDKLoginTokenRequest: CreateSDKLoginTokenRequest,
    DescribeTelCallInfoRequest: DescribeTelCallInfoRequest,
    DescribeCCCBuyInfoListResponse: DescribeCCCBuyInfoListResponse,
    UnbindStaffSkillGroupListResponse: UnbindStaffSkillGroupListResponse,
    SeatUserInfo: SeatUserInfo,
    DescribeCallInMetricsRequest: DescribeCallInMetricsRequest,
    CreateStaffResponse: CreateStaffResponse,
    Message: Message,
    DescribeSkillGroupInfoListResponse: DescribeSkillGroupInfoListResponse,
    DescribeIMCdrsResponse: DescribeIMCdrsResponse,

}
