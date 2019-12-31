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
 * SendMultiSms返回参数结构体
 * @class
 */
class SendMultiSmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信流水数组
         * @type {Array.<SmsRet> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SmsRet();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 物联网卡应用信息详情
 * @class
 */
class AppInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.Sdkappid = null;

        /**
         * 应用key
         * @type {string || null}
         */
        this.Appkey = null;

        /**
         * 用户appid
         * @type {string || null}
         */
        this.CloudAppid = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 应用类型
         * @type {number || null}
         */
        this.BizType = null;

        /**
         * 用户Uin
         * @type {string || null}
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sdkappid = 'Sdkappid' in params ? params.Sdkappid : null;
        this.Appkey = 'Appkey' in params ? params.Appkey : null;
        this.CloudAppid = 'CloudAppid' in params ? params.CloudAppid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

    }
}

/**
 * 卡片列表数据
 * @class
 */
class CardList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卡片总数
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 卡片列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CardInfo> || null}
         */
        this.List = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new CardInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * DescribeCards返回参数结构体
 * @class
 */
class DescribeCardsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卡片列表信息
         * @type {CardList || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new CardList();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCard返回参数结构体
 * @class
 */
class DescribeCardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卡片详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CardInfo || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new CardInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 卡片详细信息
 * @class
 */
class CardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卡片ID
         * @type {string || null}
         */
        this.Iccid = null;

        /**
         * 卡电话号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msisdn = null;

        /**
         * 卡imsi
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Imsi = null;

        /**
         * 卡imei
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * 应用ID
         * @type {string || null}
         */
        this.Sdkappid = null;

        /**
         * 运营商编号
         * @type {number || null}
         */
        this.Teleoperator = null;

        /**
         * 卡片状态 1:未激活 2：激活 3：停卡 5：销卡
         * @type {number || null}
         */
        this.CardStatus = null;

        /**
         * 网络状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NetworkStatus = null;

        /**
         * 激活时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActivitedTime = null;

        /**
         * 资费类型，1 单卡，2 流量池
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 套餐类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 流量池ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PoolId = null;

        /**
         * 周期套餐流量使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataUsedInPeriod = null;

        /**
         * 周期套餐总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataTotalInPeriod = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductExpiredTime = null;

        /**
         * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 套餐周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PreorderCnt = null;

        /**
         * 激活被回调标志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsActivated = null;

        /**
         * 订单ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 是否自动续费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 0 不需要开通达量不停卡 1 需要开通达量不停卡
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AllowArrears = null;

        /**
         * 是否开通短信0:未开短信 1:开通短信
         * @type {number || null}
         */
        this.NeedSms = null;

        /**
         * 服务
         * @type {number || null}
         */
        this.Provider = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Iccid = 'Iccid' in params ? params.Iccid : null;
        this.Msisdn = 'Msisdn' in params ? params.Msisdn : null;
        this.Imsi = 'Imsi' in params ? params.Imsi : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Sdkappid = 'Sdkappid' in params ? params.Sdkappid : null;
        this.Teleoperator = 'Teleoperator' in params ? params.Teleoperator : null;
        this.CardStatus = 'CardStatus' in params ? params.CardStatus : null;
        this.NetworkStatus = 'NetworkStatus' in params ? params.NetworkStatus : null;
        this.ActivitedTime = 'ActivitedTime' in params ? params.ActivitedTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.PoolId = 'PoolId' in params ? params.PoolId : null;
        this.DataUsedInPeriod = 'DataUsedInPeriod' in params ? params.DataUsedInPeriod : null;
        this.DataTotalInPeriod = 'DataTotalInPeriod' in params ? params.DataTotalInPeriod : null;
        this.ProductExpiredTime = 'ProductExpiredTime' in params ? params.ProductExpiredTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.PreorderCnt = 'PreorderCnt' in params ? params.PreorderCnt : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.AllowArrears = 'AllowArrears' in params ? params.AllowArrears : null;
        this.NeedSms = 'NeedSms' in params ? params.NeedSms : null;
        this.Provider = 'Provider' in params ? params.Provider : null;

    }
}

/**
 * DescribeApp返回参数结构体
 * @class
 */
class DescribeAppResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AppInfo || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new AppInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCard请求参数结构体
 * @class
 */
class DescribeCardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.Sdkappid = null;

        /**
         * 卡片ID
         * @type {string || null}
         */
        this.Iccid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sdkappid = 'Sdkappid' in params ? params.Sdkappid : null;
        this.Iccid = 'Iccid' in params ? params.Iccid : null;

    }
}

/**
 * DescribeApp请求参数结构体
 * @class
 */
class DescribeAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物联卡应用ID
         * @type {number || null}
         */
        this.Sdkappid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sdkappid = 'Sdkappid' in params ? params.Sdkappid : null;

    }
}

/**
 * SendSms返回参数结构体
 * @class
 */
class SendSmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信流水信息
         * @type {SmsSid || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new SmsSid();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendSms请求参数结构体
 * @class
 */
class SendSmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.Sdkappid = null;

        /**
         * 卡片ID
         * @type {string || null}
         */
        this.Iccid = null;

        /**
         * 短信内容长度70限制
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
        this.Sdkappid = 'Sdkappid' in params ? params.Sdkappid : null;
        this.Iccid = 'Iccid' in params ? params.Iccid : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeCards请求参数结构体
 * @class
 */
class DescribeCardsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.Sdkappid = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 列表限制
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
        this.Sdkappid = 'Sdkappid' in params ? params.Sdkappid : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * SendMultiSms请求参数结构体
 * @class
 */
class SendMultiSmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.Sdkappid = null;

        /**
         * 卡片列表
         * @type {Array.<string> || null}
         */
        this.Iccids = null;

        /**
         * 短信内容 长度限制 70
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
        this.Sdkappid = 'Sdkappid' in params ? params.Sdkappid : null;
        this.Iccids = 'Iccids' in params ? params.Iccids : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * 短信流水信息
 * @class
 */
class SmsRet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该iccid请求状态
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 短信发送返回信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 卡片ID
         * @type {string || null}
         */
        this.Iccid = null;

        /**
         * 流水ID
         * @type {string || null}
         */
        this.Sid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Iccid = 'Iccid' in params ? params.Iccid : null;
        this.Sid = 'Sid' in params ? params.Sid : null;

    }
}

/**
 * 短信流水信息
 * @class
 */
class SmsSid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卡片ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Iccid = null;

        /**
         * 信息流水ID
         * @type {string || null}
         */
        this.Sid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Iccid = 'Iccid' in params ? params.Iccid : null;
        this.Sid = 'Sid' in params ? params.Sid : null;

    }
}

module.exports = {
    SendMultiSmsResponse: SendMultiSmsResponse,
    AppInfo: AppInfo,
    CardList: CardList,
    DescribeCardsResponse: DescribeCardsResponse,
    DescribeCardResponse: DescribeCardResponse,
    CardInfo: CardInfo,
    DescribeAppResponse: DescribeAppResponse,
    DescribeCardRequest: DescribeCardRequest,
    DescribeAppRequest: DescribeAppRequest,
    SendSmsResponse: SendSmsResponse,
    SendSmsRequest: SendSmsRequest,
    DescribeCardsRequest: DescribeCardsRequest,
    SendMultiSmsRequest: SendMultiSmsRequest,
    SmsRet: SmsRet,
    SmsSid: SmsSid,

}
