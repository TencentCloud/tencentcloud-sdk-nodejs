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
 * 活动参与详情
 * @class
 */
class ActivityJoinDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 活动名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActivityName = null;

        /**
         * 销售姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SalesName = null;

        /**
         * 销售电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SalesPhone = null;

        /**
         * 参与id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JoinId = null;

        /**
         * 活码id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LiveCodeId = null;

        /**
         * 用户电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserPhone = null;

        /**
         * 用户姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 活动数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActivityData = null;

        /**
         * 线索id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LeadId = null;

        /**
         * 参与时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JoinTime = null;

        /**
         * 线索是否是重复创建， 0 ：新建、 1：合并、 2：重复， 默认为0
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duplicate = null;

        /**
         * 重复线索id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DuplicateLeadId = null;

        /**
         * 是否为参与多次活动， 1：参与一次、2、参与多次，默认为0
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JoinState = null;

        /**
         * 创建时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ActivityName = 'ActivityName' in params ? params.ActivityName : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.SalesPhone = 'SalesPhone' in params ? params.SalesPhone : null;
        this.JoinId = 'JoinId' in params ? params.JoinId : null;
        this.LiveCodeId = 'LiveCodeId' in params ? params.LiveCodeId : null;
        this.UserPhone = 'UserPhone' in params ? params.UserPhone : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.ActivityData = 'ActivityData' in params ? params.ActivityData : null;
        this.LeadId = 'LeadId' in params ? params.LeadId : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;
        this.Duplicate = 'Duplicate' in params ? params.Duplicate : null;
        this.DuplicateLeadId = 'DuplicateLeadId' in params ? params.DuplicateLeadId : null;
        this.JoinState = 'JoinState' in params ? params.JoinState : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * QueryVehicleInfoList返回参数结构体
 * @class
 */
class QueryVehicleInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 车系车型信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VehicleInfo> || null}
         */
        this.PageData = null;

        /**
         * 分页游标，下次调用带上该值，则从当前的位置继续往后拉取新增的数据，以实现增量拉取。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 是否还有更多数据。0-否；1-是。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HasMore = null;

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

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new VehicleInfo();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;
        this.HasMore = 'HasMore' in params ? params.HasMore : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCorpTag返回参数结构体
 * @class
 */
class CreateCorpTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签组信息
         * @type {TagGroup || null}
         */
        this.TagGroup = null;

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

        if (params.TagGroup) {
            let obj = new TagGroup();
            obj.deserialize(params.TagGroup)
            this.TagGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryChatArchivingList返回参数结构体
 * @class
 */
class QueryChatArchivingListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 会话存档列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ChatArchivingDetail> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new ChatArchivingDetail();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * license相关信息
 * @class
 */
class LicenseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * license编号
         * @type {string || null}
         */
        this.License = null;

        /**
         * license版本；1-基础版，2-标准版，3-增值版
         * @type {number || null}
         */
        this.LicenseEdition = null;

        /**
         * 生效开始时间, 格式yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.ResourceStartTime = null;

        /**
         * 生效结束时间, 格式yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.ResourceEndTime = null;

        /**
         * 隔离截止时间, 格式yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolationDeadline = null;

        /**
         * 资源计划销毁时间, 格式yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DestroyTime = null;

        /**
         * 资源状态，1.正常，2.隔离，3.销毁
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 扩展信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;
        this.LicenseEdition = 'LicenseEdition' in params ? params.LicenseEdition : null;
        this.ResourceStartTime = 'ResourceStartTime' in params ? params.ResourceStartTime : null;
        this.ResourceEndTime = 'ResourceEndTime' in params ? params.ResourceEndTime : null;
        this.IsolationDeadline = 'IsolationDeadline' in params ? params.IsolationDeadline : null;
        this.DestroyTime = 'DestroyTime' in params ? params.DestroyTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

    }
}

/**
 * 外部联系人SaaS使用明细数据
 * @class
 */
class CustomerActionEventDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件码
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * 事件类型
         * @type {number || null}
         */
        this.EventType = null;

        /**
         * 事件来源
         * @type {number || null}
         */
        this.EventSource = null;

        /**
         * 外部联系人id
         * @type {string || null}
         */
        this.ExternalUserId = null;

        /**
         * 销售顾问id
         * @type {number || null}
         */
        this.SalesId = null;

        /**
         * 素材类型
         * @type {number || null}
         */
        this.MaterialType = null;

        /**
         * 素材编号id
         * @type {number || null}
         */
        this.MaterialId = null;

        /**
         * 事件上报时间，单位：秒
         * @type {number || null}
         */
        this.EventTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.EventSource = 'EventSource' in params ? params.EventSource : null;
        this.ExternalUserId = 'ExternalUserId' in params ? params.ExternalUserId : null;
        this.SalesId = 'SalesId' in params ? params.SalesId : null;
        this.MaterialType = 'MaterialType' in params ? params.MaterialType : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;

    }
}

/**
 * QueryCustomerEventDetailStatistics返回参数结构体
 * @class
 */
class QueryCustomerEventDetailStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 外部联系人SaaS使用明细统计响应数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CustomerActionEventDetail> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new CustomerActionEventDetail();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryExternalContactDetail请求参数结构体
 * @class
 */
class QueryExternalContactDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部联系人的userid，注意不是企业成员的帐号
         * @type {string || null}
         */
        this.ExternalUserId = null;

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填。当客户在企业内的跟进人超过500人时需要使用cursor参数进行分页获取
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 当前接口Limit不需要传参， 保留Limit只是为了保持向后兼容性， Limit默认值为500，当返回结果超过500时， NextCursor才有返回值
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
        this.ExternalUserId = 'ExternalUserId' in params ? params.ExternalUserId : null;
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * QueryExternalUserMappingInfo返回参数结构体
 * @class
 */
class QueryExternalUserMappingInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部联系人映射信息, 只返回映射成功的记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExternalUserMappingInfo> || null}
         */
        this.ExternalUserIdMapping = null;

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

        if (params.ExternalUserIdMapping) {
            this.ExternalUserIdMapping = new Array();
            for (let z in params.ExternalUserIdMapping) {
                let obj = new ExternalUserMappingInfo();
                obj.deserialize(params.ExternalUserIdMapping[z]);
                this.ExternalUserIdMapping.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryStaffEventDetailStatistics请求参数结构体
 * @class
 */
class QueryStaffEventDetailStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间， 单位秒
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间， 单位秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * QueryUserInfoList请求参数结构体
 * @class
 */
class QueryUserInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 外部联系人事件信息
 * @class
 */
class ExternalUserEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件编码, 添加外部联系人(ADD_EXTERNAL_CUSTOMER)/成员删除外部联系人(DELETE_EXTERNAL_CUSTOMER)/外部联系人删除成员(DELETE_FOLLOW_USER)
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * 外部联系人id
         * @type {string || null}
         */
        this.ExternalUserId = null;

        /**
         * 企微SaaS的成员id
         * @type {string || null}
         */
        this.SalesId = null;

        /**
         * 事件上报时间戳，单位：秒
         * @type {number || null}
         */
        this.EventTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.ExternalUserId = 'ExternalUserId' in params ? params.ExternalUserId : null;
        this.SalesId = 'SalesId' in params ? params.SalesId : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;

    }
}

/**
 * 渠道活码详情
 * @class
 */
class ChannelCodeInnerDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道活码id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 欢迎语类型，0：普通欢迎语、1:渠道欢迎语
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 渠道来源
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 渠道来源名称
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * 二维码名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 使用成员用户id集
         * @type {Array.<number> || null}
         */
        this.UseUserIdList = null;

        /**
         * 使用成员企微账号id集
         * @type {Array.<string> || null}
         */
        this.UseUserOpenIdList = null;

        /**
         * 标签
         * @type {Array.<WeComTagDetail> || null}
         */
        this.TagList = null;

        /**
         * 自动通过好友，0：开启、1：关闭，默认0开启
         * @type {number || null}
         */
        this.SkipVerify = null;

        /**
         * 添加好友人数
         * @type {number || null}
         */
        this.Friends = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 欢迎语id（通过欢迎语新增返回的id）
         * @type {number || null}
         */
        this.MsgId = null;

        /**
         * 联系我config_id
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 联系我二维码地址
         * @type {string || null}
         */
        this.QrCodeUrl = null;

        /**
         * 记录状态， 0：有效、1：无效
         * @type {number || null}
         */
        this.RecStatus = null;

        /**
         * 应用ID
         * @type {string || null}
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.SourceName = 'SourceName' in params ? params.SourceName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.UseUserIdList = 'UseUserIdList' in params ? params.UseUserIdList : null;
        this.UseUserOpenIdList = 'UseUserOpenIdList' in params ? params.UseUserOpenIdList : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new WeComTagDetail();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.SkipVerify = 'SkipVerify' in params ? params.SkipVerify : null;
        this.Friends = 'Friends' in params ? params.Friends : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MsgId = 'MsgId' in params ? params.MsgId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.QrCodeUrl = 'QrCodeUrl' in params ? params.QrCodeUrl : null;
        this.RecStatus = 'RecStatus' in params ? params.RecStatus : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * 客户信息
 * @class
 */
class ExternalContact extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部联系人的userId
         * @type {string || null}
         */
        this.ExternalUserId = null;

        /**
         * 外部联系人性别 0-未知 1-男性 2-女性
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 外部联系人的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 外部联系人在微信开放平台的唯一身份标识（微信unionid），通过此字段企业可将外部联系人与公众号/小程序用户关联起来。仅当联系人类型是微信用户，且企业或第三方服务商绑定了微信开发者ID有此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UnionId = null;

        /**
         * 外部联系人联系电话
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ExternalUserId = 'ExternalUserId' in params ? params.ExternalUserId : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UnionId = 'UnionId' in params ? params.UnionId : null;
        this.Phone = 'Phone' in params ? params.Phone : null;

    }
}

/**
 * QueryExternalUserEventList请求参数结构体
 * @class
 */
class QueryExternalUserEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间， 单位秒
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间， 单位秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 标签信息
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称, 最大长度限制15个字符
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 标签组排序,值越大,排序越靠前
         * @type {number || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * 标签详细信息
 * @class
 */
class TagDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 标签业务ID
         * @type {string || null}
         */
        this.BizTagId = null;

        /**
         * 企微标签ID
         * @type {string || null}
         */
        this.TagId = null;

        /**
         * 标签排序的次序值，sort值大的排序靠前。有效的值范围是[0, 2^32)
         * @type {number || null}
         */
        this.Sort = null;

        /**
         * 标签创建时间,单位为秒
         * @type {number || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.BizTagId = 'BizTagId' in params ? params.BizTagId : null;
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 车型车系信息
 * @class
 */
class VehicleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌id
         * @type {number || null}
         */
        this.BrandId = null;

        /**
         * 品牌名称
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 车系id
         * @type {number || null}
         */
        this.SeriesId = null;

        /**
         * 车系名称
         * @type {string || null}
         */
        this.SeriesName = null;

        /**
         * 车型id
         * @type {number || null}
         */
        this.ModelId = null;

        /**
         * 车型名称
         * @type {string || null}
         */
        this.ModelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.SeriesId = 'SeriesId' in params ? params.SeriesId : null;
        this.SeriesName = 'SeriesName' in params ? params.SeriesName : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;

    }
}

/**
 * 会话存档的视频消息类型
 * @class
 */
class ChatArchivingMsgTypeVideo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频时长，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PlayLength = null;

        /**
         * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 视频资源对象Cos下载地址
         * @type {string || null}
         */
        this.CosKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayLength = 'PlayLength' in params ? params.PlayLength : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.CosKey = 'CosKey' in params ? params.CosKey : null;

    }
}

/**
 * QueryMaterialList请求参数结构体
 * @class
 */
class QueryMaterialListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材类型：0-图片，1-视频，3-文章，10-车型，11-名片
         * @type {number || null}
         */
        this.MaterialType = null;

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.MaterialType = 'MaterialType' in params ? params.MaterialType : null;
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateLead返回参数结构体
 * @class
 */
class CreateLeadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 线索处理状态码： 0-表示创建成功， 1-表示线索合并，2-表示线索重复
         * @type {number || null}
         */
        this.BusinessCode = null;

        /**
         * 线索处理结果描述
         * @type {string || null}
         */
        this.BusinessMsg = null;

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
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessMsg = 'BusinessMsg' in params ? params.BusinessMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryUserInfoList返回参数结构体
 * @class
 */
class QueryUserInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 企业成员信息列表响应数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CorpUserInfo> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new CorpUserInfo();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryVehicleInfoList请求参数结构体
 * @class
 */
class QueryVehicleInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * QueryExternalUserEventList返回参数结构体
 * @class
 */
class QueryExternalUserEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 外部联系人事件信息响应数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExternalUserEventInfo> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new ExternalUserEventInfo();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryExternalContactList请求参数结构体
 * @class
 */
class QueryExternalContactListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 小程序码信息
 * @class
 */
class MiniAppCodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主键id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 小程序名称
         * @type {string || null}
         */
        this.MiniAppName = null;

        /**
         * 小程序logo
         * @type {string || null}
         */
        this.MiniAppLogo = null;

        /**
         * 小程序管理端地址
         * @type {string || null}
         */
        this.MiniAdminUrl = null;

        /**
         * 状态：0正常，1删除
         * @type {number || null}
         */
        this.State = null;

        /**
         * 创建时间戳，单位为秒
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间戳，单位为秒
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MiniAppName = 'MiniAppName' in params ? params.MiniAppName : null;
        this.MiniAppLogo = 'MiniAppLogo' in params ? params.MiniAppLogo : null;
        this.MiniAdminUrl = 'MiniAdminUrl' in params ? params.MiniAdminUrl : null;
        this.State = 'State' in params ? params.State : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * QueryClueInfoList返回参数结构体
 * @class
 */
class QueryClueInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 线索信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClueInfoDetail> || null}
         */
        this.PageData = null;

        /**
         * 分页游标，下次调用带上该值，则从当前的位置继续往后拉，以实现增量拉取。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 是否还有更多数据。0-否；1-是。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HasMore = null;

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

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new ClueInfoDetail();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;
        this.HasMore = 'HasMore' in params ? params.HasMore : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateChannelCode请求参数结构体
 * @class
 */
class CreateChannelCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 欢迎语类型:0普通欢迎语,1渠道欢迎语
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 使用成员用户id集
         * @type {Array.<number> || null}
         */
        this.UseUserId = null;

        /**
         * 使用成员企微账号id集
         * @type {Array.<string> || null}
         */
        this.UseUserOpenId = null;

        /**
         * 应用ID,字典表中的APP_TYPE值,多个已逗号分隔
         * @type {string || null}
         */
        this.AppIds = null;

        /**
         * 渠道来源
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 渠道来源名称
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * 二维码名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 标签
         * @type {Array.<WeComTagDetail> || null}
         */
        this.Tag = null;

        /**
         * 自动通过好友：0开启 1关闭, 默认开启
         * @type {number || null}
         */
        this.SkipVerify = null;

        /**
         * 欢迎语id（通过欢迎语新增返回的id）
         * @type {number || null}
         */
        this.MsgId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 渠道类型 0 未知 1 公域 2私域
         * @type {number || null}
         */
        this.SourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.UseUserId = 'UseUserId' in params ? params.UseUserId : null;
        this.UseUserOpenId = 'UseUserOpenId' in params ? params.UseUserOpenId : null;
        this.AppIds = 'AppIds' in params ? params.AppIds : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.SourceName = 'SourceName' in params ? params.SourceName : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new WeComTagDetail();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.SkipVerify = 'SkipVerify' in params ? params.SkipVerify : null;
        this.MsgId = 'MsgId' in params ? params.MsgId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

    }
}

/**
 * QueryExternalContactDetail返回参数结构体
 * @class
 */
class QueryExternalContactDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 客户信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExternalContact || null}
         */
        this.Customer = null;

        /**
         * 添加了此外部联系人的企业成员信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FollowUser> || null}
         */
        this.FollowUser = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.Customer) {
            let obj = new ExternalContact();
            obj.deserialize(params.Customer)
            this.Customer = obj;
        }

        if (params.FollowUser) {
            this.FollowUser = new Array();
            for (let z in params.FollowUser) {
                let obj = new FollowUser();
                obj.deserialize(params.FollowUser[z]);
                this.FollowUser.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 添加了此外部联系人的企业成员信息
 * @class
 */
class FollowUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加了此外部联系人的企业成员userid
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 该成员对此外部联系人的备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 该成员对此外部联系人的描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 该成员添加此外部联系人的时间戳，单位为秒
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 该成员添加此客户的来源，具体含义详见<a href="https://work.weixin.qq.com/api/doc/90000/90135/92114#%E6%9D%A5%E6%BA%90%E5%AE%9A%E4%B9%89">来源定义</a>
         * @type {number || null}
         */
        this.AddWay = null;

        /**
         * 发起添加的userid，如果成员主动添加，为成员的userid；如果是客户主动添加，则为客户的外部联系人userid；如果是内部成员共享/管理员分配，则为对应的成员/管理员userid
         * @type {string || null}
         */
        this.OperUserId = null;

        /**
         * 该成员添加此外部联系人所打标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExternalContactTag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AddWay = 'AddWay' in params ? params.AddWay : null;
        this.OperUserId = 'OperUserId' in params ? params.OperUserId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ExternalContactTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * QueryExternalContactList返回参数结构体
 * @class
 */
class QueryExternalContactListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部联系人信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExternalContactSimpleInfo> || null}
         */
        this.PageData = null;

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

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

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new ExternalContactSimpleInfo();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 外部联系人简短信息
 * @class
 */
class ExternalContactSimpleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部联系人的userId
         * @type {string || null}
         */
        this.ExternalUserId = null;

        /**
         * 添加了此外部联系人的企业成员userId
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 添加了此外部联系人的企业成员的姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SalesName = null;

        /**
         * 添加了此外部联系人的企业成员的归属部门id列表
         * @type {Array.<number> || null}
         */
        this.DepartmentIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExternalUserId = 'ExternalUserId' in params ? params.ExternalUserId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.DepartmentIdList = 'DepartmentIdList' in params ? params.DepartmentIdList : null;

    }
}

/**
 * QueryActivityLiveCodeList返回参数结构体
 * @class
 */
class QueryActivityLiveCodeListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 活码列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LiveCodeDetail> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new LiveCodeDetail();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCorpTag请求参数结构体
 * @class
 */
class CreateCorpTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签组名称，最长为15个字符
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 标签信息数组
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 标签组次序值。sort值大的排序靠前。有效的值范围是[0, 2^32)
         * @type {number || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * 外部联系人映射信息
 * @class
 */
class ExternalUserMappingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业主体对应的外部联系人userId
         * @type {string || null}
         */
        this.CorpExternalUserId = null;

        /**
         * 乐销车应用主体对应的外部联系人, 当不存在好友关系时，该字段值为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpExternalUserId = 'CorpExternalUserId' in params ? params.CorpExternalUserId : null;
        this.ExternalUserId = 'ExternalUserId' in params ? params.ExternalUserId : null;

    }
}

/**
 * QueryLicenseInfo返回参数结构体
 * @class
 */
class QueryLicenseInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * license响应信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LicenseInfo || null}
         */
        this.LicenseInfo = null;

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

        if (params.LicenseInfo) {
            let obj = new LicenseInfo();
            obj.deserialize(params.LicenseInfo)
            this.LicenseInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业成员信息
 * @class
 */
class CorpUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业成员UserId
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * 企业成员在SaaS名片内填写的姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 企业成员在企微原生通讯录内的id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserOpenId = null;

        /**
         * 成员所属经销商id，可为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DealerId = null;

        /**
         * 成员所属门店id，可为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 企业成员手机号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 成员所属部门id列表，仅返回该应用有查看权限的部门id；成员授权模式下，固定返回根部门id，即固定为1；多个部门使用逗号分割
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgIds = null;

        /**
         * 主部门，仅当应用对主部门有查看权限时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MainDepartment = null;

        /**
         * 是否为部门负责人，第三方应用可为空。与orgIds值一一对应，多个部门使用逗号隔开，0-否， 1-是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsLeaderInDept = null;

        /**
         * 激活状态: 0=已激活，1=已禁用，-1=退出企业"
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserOpenId = 'UserOpenId' in params ? params.UserOpenId : null;
        this.DealerId = 'DealerId' in params ? params.DealerId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.OrgIds = 'OrgIds' in params ? params.OrgIds : null;
        this.MainDepartment = 'MainDepartment' in params ? params.MainDepartment : null;
        this.IsLeaderInDept = 'IsLeaderInDept' in params ? params.IsLeaderInDept : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * QueryClueInfoList请求参数结构体
 * @class
 */
class QueryClueInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CRM统计数据响应
 * @class
 */
class CrmStatisticsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增线索
         * @type {number || null}
         */
        this.LeadCnt = null;

        /**
         * 新增建档
         * @type {number || null}
         */
        this.BuildCnt = null;

        /**
         * 新增到店
         * @type {number || null}
         */
        this.InvitedCnt = null;

        /**
         * 新增下订
         * @type {number || null}
         */
        this.OrderedCnt = null;

        /**
         * 新增成交
         * @type {number || null}
         */
        this.DeliveredCnt = null;

        /**
         * 新增战败
         * @type {number || null}
         */
        this.DefeatCnt = null;

        /**
         * 新增好友
         * @type {number || null}
         */
        this.NewContactCnt = null;

        /**
         * 统计时间, 单位：天
         * @type {string || null}
         */
        this.StatisticalTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LeadCnt = 'LeadCnt' in params ? params.LeadCnt : null;
        this.BuildCnt = 'BuildCnt' in params ? params.BuildCnt : null;
        this.InvitedCnt = 'InvitedCnt' in params ? params.InvitedCnt : null;
        this.OrderedCnt = 'OrderedCnt' in params ? params.OrderedCnt : null;
        this.DeliveredCnt = 'DeliveredCnt' in params ? params.DeliveredCnt : null;
        this.DefeatCnt = 'DefeatCnt' in params ? params.DefeatCnt : null;
        this.NewContactCnt = 'NewContactCnt' in params ? params.NewContactCnt : null;
        this.StatisticalTime = 'StatisticalTime' in params ? params.StatisticalTime : null;

    }
}

/**
 * 素材信息响应体
 * @class
 */
class MaterialInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材id
         * @type {number || null}
         */
        this.MaterialId = null;

        /**
         * 素材名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MaterialName = null;

        /**
         * 素材状态, -1: 删除 0: 启用 1: 禁用
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.MaterialName = 'MaterialName' in params ? params.MaterialName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 活动详情
 * @class
 */
class ActivityDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 活动名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActivityName = null;

        /**
         * 活动状态，10:未开始状态、20:已开始（进行中）状态、30:已结束状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActivityState = null;

        /**
         * 活动类型，100:留资活动
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActivityType = null;

        /**
         * 活动开始时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 活动结束时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 活动主图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MainPhoto = null;

        /**
         * 协议编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivacyAgreementId = null;

        /**
         * 活动更新时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 活动数据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActivityDataList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ActivityName = 'ActivityName' in params ? params.ActivityName : null;
        this.ActivityState = 'ActivityState' in params ? params.ActivityState : null;
        this.ActivityType = 'ActivityType' in params ? params.ActivityType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MainPhoto = 'MainPhoto' in params ? params.MainPhoto : null;
        this.PrivacyAgreementId = 'PrivacyAgreementId' in params ? params.PrivacyAgreementId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ActivityDataList = 'ActivityDataList' in params ? params.ActivityDataList : null;

    }
}

/**
 * 活动活码详情
 * @class
 */
class LiveCodeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活码id
         * @type {number || null}
         */
        this.LiveCodeId = null;

        /**
         * 活码名称
         * @type {string || null}
         */
        this.LiveCodeName = null;

        /**
         * 短链url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShortChainAddress = null;

        /**
         * 活码二维码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LiveCodePreview = null;

        /**
         * 活动id
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 活动名称
         * @type {string || null}
         */
        this.ActivityName = null;

        /**
         * 活码状态，-1：删除，0：启用，1禁用，默认为0
         * @type {number || null}
         */
        this.LiveCodeState = null;

        /**
         * 活码参数，每个活码参数都是不一样的， 这个的值对应的是字符串json类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LiveCodeData = null;

        /**
         * 创建时间戳，单位为秒
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间戳，单位为秒
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LiveCodeId = 'LiveCodeId' in params ? params.LiveCodeId : null;
        this.LiveCodeName = 'LiveCodeName' in params ? params.LiveCodeName : null;
        this.ShortChainAddress = 'ShortChainAddress' in params ? params.ShortChainAddress : null;
        this.LiveCodePreview = 'LiveCodePreview' in params ? params.LiveCodePreview : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ActivityName = 'ActivityName' in params ? params.ActivityName : null;
        this.LiveCodeState = 'LiveCodeState' in params ? params.LiveCodeState : null;
        this.LiveCodeData = 'LiveCodeData' in params ? params.LiveCodeData : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 标签组信息
 * @class
 */
class TagGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企微标签组id
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 标签组业务id
         * @type {string || null}
         */
        this.BizGroupId = null;

        /**
         * 企微标签组名称，不能超过15个字符
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 标签组次序值。sort值大的排序靠前。有效的值范围是[0, 2^32)
         * @type {number || null}
         */
        this.Sort = null;

        /**
         * 标签组创建时间,单位为秒
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 标签组内的标签列表, 上限为20
         * @type {Array.<TagDetailInfo> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.BizGroupId = 'BizGroupId' in params ? params.BizGroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagDetailInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 外部联系人标签
 * @class
 */
class ExternalContactTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该成员添加此外部联系人所打标签的分组名称（标签功能需要企业微信升级到2.7.5及以上版本）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 该成员添加此外部联系人所打标签名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 该成员添加此外部联系人所打标签类型, 1-企业设置, 2-用户自定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 该成员添加此外部联系人所打企业标签的id，仅企业设置（type为1）的标签返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TagId = 'TagId' in params ? params.TagId : null;

    }
}

/**
 * 会话存档数据详情
 * @class
 */
class ChatArchivingDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息id
         * @type {string || null}
         */
        this.MsgId = null;

        /**
         * 动作名称，switch表示切换企微账号，send表示企微普通消息
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 消息类型，当Action != "switch"时存在，例如video, text, voice 等，和企微开放文档一一对应
https://open.work.weixin.qq.com/api/doc/90000/90135/91774
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgType = null;

        /**
         * 消息发送人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.From = null;

        /**
         * 消息接收人列表，注意接收人可能只有一个
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ToList = null;

        /**
         * 如果是群消息，则不为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 消息发送的时间戳，单位为秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgTime = null;

        /**
         * MsgType=video时的消息体，忽略此字段，见BodyJson字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ChatArchivingMsgTypeVideo || null}
         */
        this.Video = null;

        /**
         * 根据MsgType的不同取值，解析内容不同，参考：https://open.work.weixin.qq.com/api/doc/90000/90135/91774
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BodyJson = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MsgId = 'MsgId' in params ? params.MsgId : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.MsgType = 'MsgType' in params ? params.MsgType : null;
        this.From = 'From' in params ? params.From : null;
        this.ToList = 'ToList' in params ? params.ToList : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.MsgTime = 'MsgTime' in params ? params.MsgTime : null;

        if (params.Video) {
            let obj = new ChatArchivingMsgTypeVideo();
            obj.deserialize(params.Video)
            this.Video = obj;
        }
        this.BodyJson = 'BodyJson' in params ? params.BodyJson : null;

    }
}

/**
 * QueryActivityList返回参数结构体
 * @class
 */
class QueryActivityListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 活码列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ActivityDetail> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new ActivityDetail();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryStaffEventDetailStatistics返回参数结构体
 * @class
 */
class QueryStaffEventDetailStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 企业成员SaaS使用明细统计响应数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SalesActionEventDetail> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new SalesActionEventDetail();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryActivityJoinList请求参数结构体
 * @class
 */
class QueryActivityJoinListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动id
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 分页游标，对应结果返回的NextCursor,首次请求保持为空
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 单页数据限制
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
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 经销商信息
 * @class
 */
class DealerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企微SaaS平台经销商id
         * @type {number || null}
         */
        this.DealerId = null;

        /**
         * 经销商名称
         * @type {string || null}
         */
        this.DealerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealerId = 'DealerId' in params ? params.DealerId : null;
        this.DealerName = 'DealerName' in params ? params.DealerName : null;

    }
}

/**
 * QueryExternalUserMappingInfo请求参数结构体
 * @class
 */
class QueryExternalUserMappingInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业主体对应的外部联系人id列表，列表长度限制最大为50。
         * @type {Array.<string> || null}
         */
        this.CorpExternalUserIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpExternalUserIdList = 'CorpExternalUserIdList' in params ? params.CorpExternalUserIdList : null;

    }
}

/**
 * QueryCrmStatistics返回参数结构体
 * @class
 */
class QueryCrmStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * CRM统计响应数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CrmStatisticsData> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new CrmStatisticsData();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryChannelCodeList请求参数结构体
 * @class
 */
class QueryChannelCodeListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * QueryDealerInfoList返回参数结构体
 * @class
 */
class QueryDealerInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经销商信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DealerInfo> || null}
         */
        this.PageData = null;

        /**
         * 分页游标，下次调用带上该值，则从当前的位置继续往后拉取新增的数据，以实现增量拉取。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 是否还有更多数据。0-否；1-是。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HasMore = null;

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

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new DealerInfo();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;
        this.HasMore = 'HasMore' in params ? params.HasMore : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企微个人标签信息,渠道活码使用
 * @class
 */
class WeComTagDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签分组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 标签分组业务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizGroupId = null;

        /**
         * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 标签ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagId = null;

        /**
         * 标签业务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizTagId = null;

        /**
         * 标签分类，1：企业设置、2：用户自定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 标签业务ID字符串格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizTagIdStr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.BizGroupId = 'BizGroupId' in params ? params.BizGroupId : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.BizTagId = 'BizTagId' in params ? params.BizTagId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.BizTagIdStr = 'BizTagIdStr' in params ? params.BizTagIdStr : null;

    }
}

/**
 * QueryActivityLiveCodeList请求参数结构体
 * @class
 */
class QueryActivityLiveCodeListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * QueryActivityJoinList返回参数结构体
 * @class
 */
class QueryActivityJoinListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 活码列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ActivityJoinDetail> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new ActivityJoinDetail();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 线索信息详情
 * @class
 */
class ClueInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 线索id，线索唯一识别编码
         * @type {string || null}
         */
        this.ClueId = null;

        /**
         * 接待客户经销商顾问所属组织id,多个组织使用逗号分割
         * @type {string || null}
         */
        this.DealerId = null;

        /**
         * 线索获取时间，用户添加企业微信时间，单位是秒
         * @type {number || null}
         */
        this.EnquireTime = null;

        /**
         * 客户在微信生态中唯一识别码
         * @type {string || null}
         */
        this.UnionId = null;

        /**
         * 微信昵称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 联系方式
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 车系编号
         * @type {string || null}
         */
        this.SeriesCode = null;

        /**
         * 车型编号
         * @type {string || null}
         */
        this.ModelCode = null;

        /**
         * 省份编号
         * @type {string || null}
         */
        this.ProvinceCode = null;

        /**
         * 城市编号
         * @type {string || null}
         */
        this.CityCode = null;

        /**
         * 顾问名称
         * @type {string || null}
         */
        this.SalesName = null;

        /**
         * 顾问电话
         * @type {string || null}
         */
        this.SalesPhone = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 标签
         * @type {Array.<string> || null}
         */
        this.TagList = null;

        /**
         * 客户姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClueId = 'ClueId' in params ? params.ClueId : null;
        this.DealerId = 'DealerId' in params ? params.DealerId : null;
        this.EnquireTime = 'EnquireTime' in params ? params.EnquireTime : null;
        this.UnionId = 'UnionId' in params ? params.UnionId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.SeriesCode = 'SeriesCode' in params ? params.SeriesCode : null;
        this.ModelCode = 'ModelCode' in params ? params.ModelCode : null;
        this.ProvinceCode = 'ProvinceCode' in params ? params.ProvinceCode : null;
        this.CityCode = 'CityCode' in params ? params.CityCode : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.SalesPhone = 'SalesPhone' in params ? params.SalesPhone : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TagList = 'TagList' in params ? params.TagList : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * QueryDealerInfoList请求参数结构体
 * @class
 */
class QueryDealerInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * QueryMiniAppCodeList返回参数结构体
 * @class
 */
class QueryMiniAppCodeListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 小程序码列表响应数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MiniAppCodeInfo> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new MiniAppCodeInfo();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateChannelCode返回参数结构体
 * @class
 */
class CreateChannelCodeResponse extends  AbstractModel {
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
 * QueryLicenseInfo请求参数结构体
 * @class
 */
class QueryLicenseInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * license编号
         * @type {string || null}
         */
        this.License = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = 'License' in params ? params.License : null;

    }
}

/**
 * QueryCustomerEventDetailStatistics请求参数结构体
 * @class
 */
class QueryCustomerEventDetailStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间， 单位秒
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间， 单位秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * QueryCrmStatistics请求参数结构体
 * @class
 */
class QueryCrmStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间， 单位秒
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间， 单位秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 请求的企业成员id，为空时默认全租户
         * @type {string || null}
         */
        this.SalesId = null;

        /**
         * 请求的部门id，为空时默认全租户
         * @type {number || null}
         */
        this.OrgId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SalesId = 'SalesId' in params ? params.SalesId : null;
        this.OrgId = 'OrgId' in params ? params.OrgId : null;

    }
}

/**
 * QueryActivityList请求参数结构体
 * @class
 */
class QueryActivityListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，对应结果返回的NextCursor,首次请求保持为空
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 单页数据限制
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * QueryMiniAppCodeList请求参数结构体
 * @class
 */
class QueryMiniAppCodeListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * QueryChatArchivingList请求参数结构体
 * @class
 */
class QueryChatArchivingListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
         * @type {string || null}
         */
        this.Cursor = null;

        /**
         * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
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
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateLead请求参数结构体
 * @class
 */
class CreateLeadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 来源ID
         * @type {number || null}
         */
        this.ChannelId = null;

        /**
         * 来源名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 创建时间， 单位毫秒
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 线索类型：1-400呼入，2-常规留资
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 经销商id
         * @type {number || null}
         */
        this.DealerId = null;

        /**
         * 品牌id
         * @type {number || null}
         */
        this.BrandId = null;

        /**
         * 车系id
         * @type {number || null}
         */
        this.SeriesId = null;

        /**
         * 客户姓名
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * 客户手机号
         * @type {string || null}
         */
        this.CustomerPhone = null;

        /**
         * 车型id
         * @type {number || null}
         */
        this.ModelId = null;

        /**
         * 客户性别: 0-未知, 1-男, 2-女
         * @type {number || null}
         */
        this.CustomerSex = null;

        /**
         * 销售姓名
         * @type {string || null}
         */
        this.SalesName = null;

        /**
         * 销售手机号
         * @type {string || null}
         */
        this.SalesPhone = null;

        /**
         * Cc坐席姓名
         * @type {string || null}
         */
        this.CcName = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.DealerId = 'DealerId' in params ? params.DealerId : null;
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
        this.SeriesId = 'SeriesId' in params ? params.SeriesId : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerPhone = 'CustomerPhone' in params ? params.CustomerPhone : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.CustomerSex = 'CustomerSex' in params ? params.CustomerSex : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.SalesPhone = 'SalesPhone' in params ? params.SalesPhone : null;
        this.CcName = 'CcName' in params ? params.CcName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * QueryChannelCodeList返回参数结构体
 * @class
 */
class QueryChannelCodeListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 活码列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ChannelCodeInnerDetail> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new ChannelCodeInnerDetail();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业成员SaaS使用明细数据
 * @class
 */
class SalesActionEventDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件码
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * 事件类型
         * @type {number || null}
         */
        this.EventType = null;

        /**
         * 事件来源
         * @type {number || null}
         */
        this.EventSource = null;

        /**
         * 销售顾问id
         * @type {number || null}
         */
        this.SalesId = null;

        /**
         * 素材类型
         * @type {number || null}
         */
        this.MaterialType = null;

        /**
         * 素材编号id
         * @type {number || null}
         */
        this.MaterialId = null;

        /**
         * 事件上报时间，单位：秒
         * @type {number || null}
         */
        this.EventTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.EventSource = 'EventSource' in params ? params.EventSource : null;
        this.SalesId = 'SalesId' in params ? params.SalesId : null;
        this.MaterialType = 'MaterialType' in params ? params.MaterialType : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;

    }
}

/**
 * QueryMaterialList返回参数结构体
 * @class
 */
class QueryMaterialListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextCursor = null;

        /**
         * 企业素材列表响应数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MaterialInfo> || null}
         */
        this.PageData = null;

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
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.PageData) {
            this.PageData = new Array();
            for (let z in params.PageData) {
                let obj = new MaterialInfo();
                obj.deserialize(params.PageData[z]);
                this.PageData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ActivityJoinDetail: ActivityJoinDetail,
    QueryVehicleInfoListResponse: QueryVehicleInfoListResponse,
    CreateCorpTagResponse: CreateCorpTagResponse,
    QueryChatArchivingListResponse: QueryChatArchivingListResponse,
    LicenseInfo: LicenseInfo,
    CustomerActionEventDetail: CustomerActionEventDetail,
    QueryCustomerEventDetailStatisticsResponse: QueryCustomerEventDetailStatisticsResponse,
    QueryExternalContactDetailRequest: QueryExternalContactDetailRequest,
    QueryExternalUserMappingInfoResponse: QueryExternalUserMappingInfoResponse,
    QueryStaffEventDetailStatisticsRequest: QueryStaffEventDetailStatisticsRequest,
    QueryUserInfoListRequest: QueryUserInfoListRequest,
    ExternalUserEventInfo: ExternalUserEventInfo,
    ChannelCodeInnerDetail: ChannelCodeInnerDetail,
    ExternalContact: ExternalContact,
    QueryExternalUserEventListRequest: QueryExternalUserEventListRequest,
    TagInfo: TagInfo,
    TagDetailInfo: TagDetailInfo,
    VehicleInfo: VehicleInfo,
    ChatArchivingMsgTypeVideo: ChatArchivingMsgTypeVideo,
    QueryMaterialListRequest: QueryMaterialListRequest,
    CreateLeadResponse: CreateLeadResponse,
    QueryUserInfoListResponse: QueryUserInfoListResponse,
    QueryVehicleInfoListRequest: QueryVehicleInfoListRequest,
    QueryExternalUserEventListResponse: QueryExternalUserEventListResponse,
    QueryExternalContactListRequest: QueryExternalContactListRequest,
    MiniAppCodeInfo: MiniAppCodeInfo,
    QueryClueInfoListResponse: QueryClueInfoListResponse,
    CreateChannelCodeRequest: CreateChannelCodeRequest,
    QueryExternalContactDetailResponse: QueryExternalContactDetailResponse,
    FollowUser: FollowUser,
    QueryExternalContactListResponse: QueryExternalContactListResponse,
    ExternalContactSimpleInfo: ExternalContactSimpleInfo,
    QueryActivityLiveCodeListResponse: QueryActivityLiveCodeListResponse,
    CreateCorpTagRequest: CreateCorpTagRequest,
    ExternalUserMappingInfo: ExternalUserMappingInfo,
    QueryLicenseInfoResponse: QueryLicenseInfoResponse,
    CorpUserInfo: CorpUserInfo,
    QueryClueInfoListRequest: QueryClueInfoListRequest,
    CrmStatisticsData: CrmStatisticsData,
    MaterialInfo: MaterialInfo,
    ActivityDetail: ActivityDetail,
    LiveCodeDetail: LiveCodeDetail,
    TagGroup: TagGroup,
    ExternalContactTag: ExternalContactTag,
    ChatArchivingDetail: ChatArchivingDetail,
    QueryActivityListResponse: QueryActivityListResponse,
    QueryStaffEventDetailStatisticsResponse: QueryStaffEventDetailStatisticsResponse,
    QueryActivityJoinListRequest: QueryActivityJoinListRequest,
    DealerInfo: DealerInfo,
    QueryExternalUserMappingInfoRequest: QueryExternalUserMappingInfoRequest,
    QueryCrmStatisticsResponse: QueryCrmStatisticsResponse,
    QueryChannelCodeListRequest: QueryChannelCodeListRequest,
    QueryDealerInfoListResponse: QueryDealerInfoListResponse,
    WeComTagDetail: WeComTagDetail,
    QueryActivityLiveCodeListRequest: QueryActivityLiveCodeListRequest,
    QueryActivityJoinListResponse: QueryActivityJoinListResponse,
    ClueInfoDetail: ClueInfoDetail,
    QueryDealerInfoListRequest: QueryDealerInfoListRequest,
    QueryMiniAppCodeListResponse: QueryMiniAppCodeListResponse,
    CreateChannelCodeResponse: CreateChannelCodeResponse,
    QueryLicenseInfoRequest: QueryLicenseInfoRequest,
    QueryCustomerEventDetailStatisticsRequest: QueryCustomerEventDetailStatisticsRequest,
    QueryCrmStatisticsRequest: QueryCrmStatisticsRequest,
    QueryActivityListRequest: QueryActivityListRequest,
    QueryMiniAppCodeListRequest: QueryMiniAppCodeListRequest,
    QueryChatArchivingListRequest: QueryChatArchivingListRequest,
    CreateLeadRequest: CreateLeadRequest,
    QueryChannelCodeListResponse: QueryChannelCodeListResponse,
    SalesActionEventDetail: SalesActionEventDetail,
    QueryMaterialListResponse: QueryMaterialListResponse,

}
