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
         * 坐席电话号码
         * @type {string || null}
         */
        this.Phone = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.SkillGroupNameList = 'SkillGroupNameList' in params ? params.SkillGroupNameList : null;

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
         * 实例 ID
         * @type {number || null}
         */
        this.InstanceId = null;

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
         * 返回记录条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

module.exports = {
    DescribeTelCdrResponse: DescribeTelCdrResponse,
    TelCdrInfo: TelCdrInfo,
    SeatUserInfo: SeatUserInfo,
    DescribeTelCdrRequest: DescribeTelCdrRequest,

}
