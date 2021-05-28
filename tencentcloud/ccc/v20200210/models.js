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
 * DescribePSTNActiveSessionList请求参数结构体
 * @class
 */
class DescribePSTNActiveSessionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用 ID
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
 * CreateStaff返回参数结构体
 * @class
 */
class CreateStaffResponse extends  AbstractModel {
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

/**
 * DescribeTelSession请求参数结构体
 * @class
 */
class DescribeTelSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 会话ID
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
         * 实例ID
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 应用ID
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
 * DescribeSkillGroupInfoList请求参数结构体
 * @class
 */
class DescribeSkillGroupInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
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
 * 全媒体服务记录信息
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
         * 服务记录ID
         * @type {string || null}
         */
        this.CdrId = null;

        /**
         * 实例ID
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 应用ID
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
         * 1为从早到晚，2为从晚到早，默认为2
         * @type {number || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CdrId = 'CdrId' in params ? params.CdrId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;

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
         * 应用ID
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
 * DescribeTelCallInfo返回参数结构体
 * @class
 */
class DescribeTelCallInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话呼出统计分钟数
         * @type {number || null}
         */
        this.TelCallOutCount = null;

        /**
         * 电话呼入统计分钟数
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
 * CreateStaff请求参数结构体
 * @class
 */
class CreateStaffRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
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
 * DescribeTelCdr请求参数结构体
 * @class
 */
class DescribeTelCdrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间戳，Unix 时间戳
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * 结束时间戳，Unix 时间戳
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * 返回数据条数，上限（deprecated）
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移（deprecated）
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例 ID（deprecated）
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 应用 ID
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

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
         * 应用ID。
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

module.exports = {
    DescribePSTNActiveSessionListRequest: DescribePSTNActiveSessionListRequest,
    IVRKeyPressedElement: IVRKeyPressedElement,
    CreateSDKLoginTokenResponse: CreateSDKLoginTokenResponse,
    DescribeStaffInfoListResponse: DescribeStaffInfoListResponse,
    CreateStaffResponse: CreateStaffResponse,
    DescribeTelCdrResponse: DescribeTelCdrResponse,
    DescribeIMCdrsResponse: DescribeIMCdrsResponse,
    DescribeTelSessionRequest: DescribeTelSessionRequest,
    DescribeIMCdrsRequest: DescribeIMCdrsRequest,
    TelCdrInfo: TelCdrInfo,
    StaffInfo: StaffInfo,
    DescribeSkillGroupInfoListRequest: DescribeSkillGroupInfoListRequest,
    DescribeTelCallInfoRequest: DescribeTelCallInfoRequest,
    DescribeChatMessagesResponse: DescribeChatMessagesResponse,
    DescribePSTNActiveSessionListResponse: DescribePSTNActiveSessionListResponse,
    IMCdrInfo: IMCdrInfo,
    DescribeChatMessagesRequest: DescribeChatMessagesRequest,
    PSTNSession: PSTNSession,
    DescribeTelSessionResponse: DescribeTelSessionResponse,
    DescribeStaffInfoListRequest: DescribeStaffInfoListRequest,
    SkillGroupInfoItem: SkillGroupInfoItem,
    ServeParticipant: ServeParticipant,
    DescribeSeatUserListResponse: DescribeSeatUserListResponse,
    DescribeSeatUserListRequest: DescribeSeatUserListRequest,
    DescribeTelCallInfoResponse: DescribeTelCallInfoResponse,
    CreateStaffRequest: CreateStaffRequest,
    DescribeTelCdrRequest: DescribeTelCdrRequest,
    SkillGroupItem: SkillGroupItem,
    MessageBody: MessageBody,
    CreateSDKLoginTokenRequest: CreateSDKLoginTokenRequest,
    SeatUserInfo: SeatUserInfo,
    PSTNSessionInfo: PSTNSessionInfo,
    Message: Message,
    DescribeSkillGroupInfoListResponse: DescribeSkillGroupInfoListResponse,

}
