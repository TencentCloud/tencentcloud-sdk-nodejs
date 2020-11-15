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
         * 返回记录条数，上限 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例 ID
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * 应用ID。
         * @type {number || null}
         */
        this.SdkAppId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 结束状态 0 未知 1 正常通话 2 未接通
         * @type {number || null}
         */
        this.EndStatus = null;

        /**
         * 技能组
         * @type {string || null}
         */
        this.SkillGroup = null;

        /**
         * 主叫归属地
         * @type {string || null}
         */
        this.CallerLocation = null;

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
         * 坐席电话号码
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

module.exports = {
    DescribeTelCdrRequest: DescribeTelCdrRequest,
    DescribeTelCdrResponse: DescribeTelCdrResponse,
    DescribeIMCdrsResponse: DescribeIMCdrsResponse,
    DescribeChatMessagesRequest: DescribeChatMessagesRequest,
    CreateSDKLoginTokenResponse: CreateSDKLoginTokenResponse,
    DescribeIMCdrsRequest: DescribeIMCdrsRequest,
    MessageBody: MessageBody,
    CreateSDKLoginTokenRequest: CreateSDKLoginTokenRequest,
    CreateStaffResponse: CreateStaffResponse,
    TelCdrInfo: TelCdrInfo,
    SeatUserInfo: SeatUserInfo,
    CreateStaffRequest: CreateStaffRequest,
    DescribeChatMessagesResponse: DescribeChatMessagesResponse,
    Message: Message,
    IMCdrInfo: IMCdrInfo,

}
