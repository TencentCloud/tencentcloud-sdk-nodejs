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
 * DescribeTags返回参数结构体
 * @class
 */
class DescribeTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
         * @type {TagInfos || null}
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
            let obj = new TagInfos();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLink返回参数结构体
 * @class
 */
class DescribeLinkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔连接详细信息
         * @type {LinkDetailInfo || null}
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
            let obj = new LinkDetailInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRule返回参数结构体
 * @class
 */
class DeleteRuleResponse extends  AbstractModel {
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
 * CreateTactic请求参数结构体
 * @class
 */
class CreateTacticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否自动执行
         * @type {number || null}
         */
        this.IsAuto = null;

        /**
         * 心跳上报间隔(s)
         * @type {number || null}
         */
        this.PingInterval = null;

        /**
         * 是否开启弱信号检测
         * @type {number || null}
         */
        this.IsWeak = null;

        /**
         * 弱信号阈值（-dbm）
         * @type {number || null}
         */
        this.WeakThreshold = null;

        /**
         * 是否开启时延切换
         * @type {number || null}
         */
        this.IsDelay = null;

        /**
         * 网络时延阈值（ms）
         * @type {number || null}
         */
        this.DelayThreshold = null;

        /**
         * 是否开启假信号检测
         * @type {number || null}
         */
        this.IsFake = null;

        /**
         * 假信号检测IP字符串，用逗号分隔
         * @type {string || null}
         */
        this.FakeIP = null;

        /**
         * 假信号检测间隔（s）
         * @type {number || null}
         */
        this.FakeInterval = null;

        /**
         * 是否开启网络制式检测
         * @type {number || null}
         */
        this.IsNet = null;

        /**
         * 网络回落制式 1 2G、 2 3G 、 3 2/3G
         * @type {number || null}
         */
        this.Network = null;

        /**
         * 是否开启移动检测
         * @type {number || null}
         */
        this.IsMove = null;

        /**
         * 是否开启最优先运营商
         * @type {number || null}
         */
        this.IsPriorityTele = null;

        /**
         * 最优先运营商 1 移动、 2 联通、 3 电信 4 上次在线运营商
         * @type {number || null}
         */
        this.PriorityTele = null;

        /**
         * 是否开启最不优先运营商
         * @type {number || null}
         */
        this.IsBottomTele = null;

        /**
         * 最不优先运营商 1 移动、 2 联通、 3 电信
         * @type {number || null}
         */
        this.BottomTele = null;

        /**
         * 最优先信号选取策略
         * @type {number || null}
         */
        this.IsBestSignal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IsAuto = 'IsAuto' in params ? params.IsAuto : null;
        this.PingInterval = 'PingInterval' in params ? params.PingInterval : null;
        this.IsWeak = 'IsWeak' in params ? params.IsWeak : null;
        this.WeakThreshold = 'WeakThreshold' in params ? params.WeakThreshold : null;
        this.IsDelay = 'IsDelay' in params ? params.IsDelay : null;
        this.DelayThreshold = 'DelayThreshold' in params ? params.DelayThreshold : null;
        this.IsFake = 'IsFake' in params ? params.IsFake : null;
        this.FakeIP = 'FakeIP' in params ? params.FakeIP : null;
        this.FakeInterval = 'FakeInterval' in params ? params.FakeInterval : null;
        this.IsNet = 'IsNet' in params ? params.IsNet : null;
        this.Network = 'Network' in params ? params.Network : null;
        this.IsMove = 'IsMove' in params ? params.IsMove : null;
        this.IsPriorityTele = 'IsPriorityTele' in params ? params.IsPriorityTele : null;
        this.PriorityTele = 'PriorityTele' in params ? params.PriorityTele : null;
        this.IsBottomTele = 'IsBottomTele' in params ? params.IsBottomTele : null;
        this.BottomTele = 'BottomTele' in params ? params.BottomTele : null;
        this.IsBestSignal = 'IsBestSignal' in params ? params.IsBestSignal : null;

    }
}

/**
 * DeleteTag请求参数结构体
 * @class
 */
class DeleteTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签ID
         * @type {number || null}
         */
        this.TagID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagID = 'TagID' in params ? params.TagID : null;

    }
}

/**
 * DescribeOrders返回参数结构体
 * @class
 */
class DescribeOrdersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单列表
         * @type {Orders || null}
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
            let obj = new Orders();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备上报信息
 * @class
 */
class DeviceReport extends  AbstractModel {
    constructor(){
        super();

        /**
         * 移动设备ID
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * 经度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Lng = null;

        /**
         * 维度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Lat = null;

        /**
         * 运营商基站ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Lac = null;

        /**
         * 小区CellID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cell = null;

        /**
         * 当前上报运营商ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Iccid = null;

        /**
         * 信号强度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Rss = null;

        /**
         * 运营商: 1 移动 2 联通 3 电信
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Tele = null;

        /**
         * 当前设备策略ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Tid = null;

        /**
         * 心跳间隔,单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Ping = null;

        /**
         * 网络延迟,单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Delay = null;

        /**
         * 高级日志启停状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Log = null;

        /**
         * 设备型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DevType = null;

        /**
         * 设备型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DevModel = null;

        /**
         * 设备版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 设备刷新时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UploadTime = null;

        /**
         * 网络环境: 0 正常 1 弱网
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 每月第一次上报心跳时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MonthFirstTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Lng = 'Lng' in params ? params.Lng : null;
        this.Lat = 'Lat' in params ? params.Lat : null;
        this.Lac = 'Lac' in params ? params.Lac : null;
        this.Cell = 'Cell' in params ? params.Cell : null;
        this.Iccid = 'Iccid' in params ? params.Iccid : null;
        this.Rss = 'Rss' in params ? params.Rss : null;
        this.Tele = 'Tele' in params ? params.Tele : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.Ping = 'Ping' in params ? params.Ping : null;
        this.Delay = 'Delay' in params ? params.Delay : null;
        this.Log = 'Log' in params ? params.Log : null;
        this.DevType = 'DevType' in params ? params.DevType : null;
        this.DevModel = 'DevModel' in params ? params.DevModel : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.UploadTime = 'UploadTime' in params ? params.UploadTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MonthFirstTime = 'MonthFirstTime' in params ? params.MonthFirstTime : null;

    }
}

/**
 * ModifyTactic请求参数结构体
 * @class
 */
class ModifyTacticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否自动执行
         * @type {number || null}
         */
        this.IsAuto = null;

        /**
         * 心跳上报间隔(s)
         * @type {number || null}
         */
        this.PingInterval = null;

        /**
         * 是否开启弱信号检测
         * @type {number || null}
         */
        this.IsWeak = null;

        /**
         * 弱信号阈值（-dbm）
         * @type {number || null}
         */
        this.WeakThreshold = null;

        /**
         * 是否开启时延切换
         * @type {number || null}
         */
        this.IsDelay = null;

        /**
         * 网络时延阈值（ms）
         * @type {number || null}
         */
        this.DelayThreshold = null;

        /**
         * 是否开启假信号检测
         * @type {number || null}
         */
        this.IsFake = null;

        /**
         * 假信号检测间隔（s）
         * @type {number || null}
         */
        this.FakeInterval = null;

        /**
         * 是否开启网络制式检测
         * @type {number || null}
         */
        this.IsNet = null;

        /**
         * 网络回落制式 1 2G、 2 3G 、 3 2/3G
         * @type {number || null}
         */
        this.Network = null;

        /**
         * 是否开启移动检测
         * @type {number || null}
         */
        this.IsMove = null;

        /**
         * 策略ID
         * @type {number || null}
         */
        this.TacticID = null;

        /**
         * 是否开启最优先运营商
         * @type {number || null}
         */
        this.IsPriorityTele = null;

        /**
         * 最优先运营商 1 移动、 2 联通、 3 电信 4 上次在线运营商
         * @type {number || null}
         */
        this.PriorityTele = null;

        /**
         * 是否开启最不优先运营商
         * @type {number || null}
         */
        this.IsBottomTele = null;

        /**
         * 最不优先运营商 1 移动、 2 联通、 3 电信
         * @type {number || null}
         */
        this.BottomTele = null;

        /**
         * 是否最优先信号选取策略
         * @type {number || null}
         */
        this.IsBestSignal = null;

        /**
         * 假信号检测IP字符串，用逗号分隔
         * @type {string || null}
         */
        this.FakeIP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IsAuto = 'IsAuto' in params ? params.IsAuto : null;
        this.PingInterval = 'PingInterval' in params ? params.PingInterval : null;
        this.IsWeak = 'IsWeak' in params ? params.IsWeak : null;
        this.WeakThreshold = 'WeakThreshold' in params ? params.WeakThreshold : null;
        this.IsDelay = 'IsDelay' in params ? params.IsDelay : null;
        this.DelayThreshold = 'DelayThreshold' in params ? params.DelayThreshold : null;
        this.IsFake = 'IsFake' in params ? params.IsFake : null;
        this.FakeInterval = 'FakeInterval' in params ? params.FakeInterval : null;
        this.IsNet = 'IsNet' in params ? params.IsNet : null;
        this.Network = 'Network' in params ? params.Network : null;
        this.IsMove = 'IsMove' in params ? params.IsMove : null;
        this.TacticID = 'TacticID' in params ? params.TacticID : null;
        this.IsPriorityTele = 'IsPriorityTele' in params ? params.IsPriorityTele : null;
        this.PriorityTele = 'PriorityTele' in params ? params.PriorityTele : null;
        this.IsBottomTele = 'IsBottomTele' in params ? params.IsBottomTele : null;
        this.BottomTele = 'BottomTele' in params ? params.BottomTele : null;
        this.IsBestSignal = 'IsBestSignal' in params ? params.IsBestSignal : null;
        this.FakeIP = 'FakeIP' in params ? params.FakeIP : null;

    }
}

/**
 * 策略信息
 * @class
 */
class Tactic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 是否自动执行策略
         * @type {number || null}
         */
        this.IsAuto = null;

        /**
         * 设备上报信息间隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PingInterval = null;

        /**
         * 是否开启弱信号检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsWeak = null;

        /**
         * 弱信号阈值（-dbm）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WeakThreshold = null;

        /**
         * 忘了时延切换
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsDelay = null;

        /**
         * 时延阈值（ms）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayThreshold = null;

        /**
         * 是否开启假信号检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsFake = null;

        /**
         * 假信号检测IP字符串，用逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FakeIP = null;

        /**
         * 假信号检测间隔（s）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FakeInterval = null;

        /**
         * 是否开启网络制式检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsNet = null;

        /**
         * 网络回落制式 1: 2G、 2: 3G 、 3: 2/3G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Network = null;

        /**
         * 是否开启移动检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsMove = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否开启最优先运营商
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsPriorityTele = null;

        /**
         * 最优先运营商 1 移动、 2 联通、 3 电信 4 上次在线运营商
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PriorityTele = null;

        /**
         * 是否开启最不优先运营商
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsBottomTele = null;

        /**
         * 最不优先运营商 1 移动、 2 联通、 3 电信
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BottomTele = null;

        /**
         * 是否开启最优先信号选取策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsBestSignal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.IsAuto = 'IsAuto' in params ? params.IsAuto : null;
        this.PingInterval = 'PingInterval' in params ? params.PingInterval : null;
        this.IsWeak = 'IsWeak' in params ? params.IsWeak : null;
        this.WeakThreshold = 'WeakThreshold' in params ? params.WeakThreshold : null;
        this.IsDelay = 'IsDelay' in params ? params.IsDelay : null;
        this.DelayThreshold = 'DelayThreshold' in params ? params.DelayThreshold : null;
        this.IsFake = 'IsFake' in params ? params.IsFake : null;
        this.FakeIP = 'FakeIP' in params ? params.FakeIP : null;
        this.FakeInterval = 'FakeInterval' in params ? params.FakeInterval : null;
        this.IsNet = 'IsNet' in params ? params.IsNet : null;
        this.Network = 'Network' in params ? params.Network : null;
        this.IsMove = 'IsMove' in params ? params.IsMove : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IsPriorityTele = 'IsPriorityTele' in params ? params.IsPriorityTele : null;
        this.PriorityTele = 'PriorityTele' in params ? params.PriorityTele : null;
        this.IsBottomTele = 'IsBottomTele' in params ? params.IsBottomTele : null;
        this.BottomTele = 'BottomTele' in params ? params.BottomTele : null;
        this.IsBestSignal = 'IsBestSignal' in params ? params.IsBestSignal : null;

    }
}

/**
 * DeleteRule请求参数结构体
 * @class
 */
class DeleteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动化规则ID
         * @type {number || null}
         */
        this.RuleID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleID = 'RuleID' in params ? params.RuleID : null;

    }
}

/**
 * DescribeRules请求参数结构体
 * @class
 */
class DescribeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动化规则ID
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 自动化规则ID
         * @type {Array.<number> || null}
         */
        this.RuleIDs = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否激活
         * @type {number || null}
         */
        this.IsActive = null;

        /**
         * 翻页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 翻页偏移
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
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.RuleIDs = 'RuleIDs' in params ? params.RuleIDs : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IsActive = 'IsActive' in params ? params.IsActive : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyLinkAdvancedLog请求参数结构体
 * @class
 */
class ModifyLinkAdvancedLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔ID
         * @type {number || null}
         */
        this.LinkID = null;

        /**
         * 是否激活高级日志 0 关闭 1激活
         * @type {number || null}
         */
        this.IsAdLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LinkID = 'LinkID' in params ? params.LinkID : null;
        this.IsAdLog = 'IsAdLog' in params ? params.IsAdLog : null;

    }
}

/**
 * DescribeRule返回参数结构体
 * @class
 */
class DescribeRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略信息
         * @type {RuleDetail || null}
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
            let obj = new RuleDetail();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRule请求参数结构体
 * @class
 */
class ModifyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动化规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则类型：用量类(101 当月|102有效期内)、位置类(201行政区|202移动距离)、网络质量类(301网络盲点)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否激活
         * @type {boolean || null}
         */
        this.IsActive = null;

        /**
         * 触发动作：1 邮件 2 API请求 3 微信 4 停卡 5 地图标识为盲点
         * @type {number || null}
         */
        this.Notice = null;

        /**
         * 自动化规则ID
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 推送的API地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 用量阈值
         * @type {number || null}
         */
        this.DataThreshold = null;

        /**
         * 行政区类型：1. 省份 2. 城市 3. 区
         * @type {number || null}
         */
        this.District = null;

        /**
         * 心跳移动距离阈值
         * @type {number || null}
         */
        this.Distance = null;

        /**
         * 信号强度阈值
         * @type {number || null}
         */
        this.SignalStrength = null;

        /**
         * 标签ID集合
         * @type {Array.<number> || null}
         */
        this.TagIDs = null;

        /**
         * 资费计划
         * @type {string || null}
         */
        this.SalePlan = null;

        /**
         * 具体的账号
         * @type {string || null}
         */
        this.UinAccount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IsActive = 'IsActive' in params ? params.IsActive : null;
        this.Notice = 'Notice' in params ? params.Notice : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.DataThreshold = 'DataThreshold' in params ? params.DataThreshold : null;
        this.District = 'District' in params ? params.District : null;
        this.Distance = 'Distance' in params ? params.Distance : null;
        this.SignalStrength = 'SignalStrength' in params ? params.SignalStrength : null;
        this.TagIDs = 'TagIDs' in params ? params.TagIDs : null;
        this.SalePlan = 'SalePlan' in params ? params.SalePlan : null;
        this.UinAccount = 'UinAccount' in params ? params.UinAccount : null;

    }
}

/**
 * 云兔连接信息集合
 * @class
 */
class LinkInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 云兔连接列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LinkInfo> || null}
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
                let obj = new LinkInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * 标签列表集合
 * @class
 */
class TagInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
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
                let obj = new Tag();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * ModifyTag返回参数结构体
 * @class
 */
class ModifyTagResponse extends  AbstractModel {
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
 * CreateRule请求参数结构体
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动化规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则类型：用量类(101 当月|102有效期内)、位置类(201行政区|202移动距离)、网络质量类(301网络盲点)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否激活
         * @type {boolean || null}
         */
        this.IsActive = null;

        /**
         * 触发动作：1 邮件 2 API请求 3 微信 4 停卡 5 地图标识为盲点
         * @type {number || null}
         */
        this.Notice = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 推送的API地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 用量阈值
         * @type {number || null}
         */
        this.DataThreshold = null;

        /**
         * 行政区类型：1. 省份 2. 城市 3. 区
         * @type {number || null}
         */
        this.District = null;

        /**
         * 心跳移动距离阈值
         * @type {number || null}
         */
        this.Distance = null;

        /**
         * 信号强度阈值
         * @type {number || null}
         */
        this.SignalStrength = null;

        /**
         * 盲点时间阈值，天
         * @type {number || null}
         */
        this.LostDay = null;

        /**
         * 标签ID集合
         * @type {Array.<number> || null}
         */
        this.TagIDs = null;

        /**
         * 资费计划
         * @type {string || null}
         */
        this.SalePlan = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IsActive = 'IsActive' in params ? params.IsActive : null;
        this.Notice = 'Notice' in params ? params.Notice : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.DataThreshold = 'DataThreshold' in params ? params.DataThreshold : null;
        this.District = 'District' in params ? params.District : null;
        this.Distance = 'Distance' in params ? params.Distance : null;
        this.SignalStrength = 'SignalStrength' in params ? params.SignalStrength : null;
        this.LostDay = 'LostDay' in params ? params.LostDay : null;
        this.TagIDs = 'TagIDs' in params ? params.TagIDs : null;
        this.SalePlan = 'SalePlan' in params ? params.SalePlan : null;

    }
}

/**
 * 云兔连接详细信息
 * @class
 */
class LinkDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔连接ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 卡片状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 激活时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActiveTime = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 数据用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataUse = null;

        /**
         * 语音用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AudioUse = null;

        /**
         * 短信用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SmsUse = null;

        /**
         * 在线状态 0 未激活 1 在线 2 离线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LinkedState = null;

        /**
         * 预期策略ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TacticID = null;

        /**
         * 策略下发状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TacticStatus = null;

        /**
         * 策略下发成功过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TacticExpireTime = null;

        /**
         * 高级日志预期状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsActiveLog = null;

        /**
         * 运营商 1移动 2联通 3电信
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TeleOperator = null;

        /**
         * 设备最新上报信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeviceReport || null}
         */
        this.Report = null;

        /**
         * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 运营商ICCID信息集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TeleOperatorCard> || null}
         */
        this.Cards = null;

        /**
         * 云兔实际卡片ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CardID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ActiveTime = 'ActiveTime' in params ? params.ActiveTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DataUse = 'DataUse' in params ? params.DataUse : null;
        this.AudioUse = 'AudioUse' in params ? params.AudioUse : null;
        this.SmsUse = 'SmsUse' in params ? params.SmsUse : null;
        this.LinkedState = 'LinkedState' in params ? params.LinkedState : null;
        this.TacticID = 'TacticID' in params ? params.TacticID : null;
        this.TacticStatus = 'TacticStatus' in params ? params.TacticStatus : null;
        this.TacticExpireTime = 'TacticExpireTime' in params ? params.TacticExpireTime : null;
        this.IsActiveLog = 'IsActiveLog' in params ? params.IsActiveLog : null;
        this.TeleOperator = 'TeleOperator' in params ? params.TeleOperator : null;

        if (params.Report) {
            let obj = new DeviceReport();
            obj.deserialize(params.Report)
            this.Report = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Cards) {
            this.Cards = new Array();
            for (let z in params.Cards) {
                let obj = new TeleOperatorCard();
                obj.deserialize(params.Cards[z]);
                this.Cards.push(obj);
            }
        }
        this.CardID = 'CardID' in params ? params.CardID : null;

    }
}

/**
 * DescribeRule请求参数结构体
 * @class
 */
class DescribeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动化规则ID
         * @type {number || null}
         */
        this.RuleID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleID = 'RuleID' in params ? params.RuleID : null;

    }
}

/**
 * 自动化规则集合
 * @class
 */
class RuleInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Rule> || null}
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
                let obj = new Rule();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * ModifyRuleStatus返回参数结构体
 * @class
 */
class ModifyRuleStatusResponse extends  AbstractModel {
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
 * ModifyLinkTactic返回参数结构体
 * @class
 */
class ModifyLinkTacticResponse extends  AbstractModel {
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
 * DescribeTags请求参数结构体
 * @class
 */
class DescribeTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeLinks返回参数结构体
 * @class
 */
class DescribeLinksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔连接响应信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LinkInfos || null}
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
            let obj = new LinkInfos();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTactic返回参数结构体
 * @class
 */
class ModifyTacticResponse extends  AbstractModel {
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
 * ModifyRuleStatus请求参数结构体
 * @class
 */
class ModifyRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动化规则ID
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 是否激活
         * @type {boolean || null}
         */
        this.IsActive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.IsActive = 'IsActive' in params ? params.IsActive : null;

    }
}

/**
 * DescribeTactics请求参数结构体
 * @class
 */
class DescribeTacticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.TacticID = null;

        /**
         * 策略名称
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
        this.TacticID = 'TacticID' in params ? params.TacticID : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 策略信息集合
 * @class
 */
class TacticInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 策略列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tactic> || null}
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
                let obj = new Tactic();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * RenewLinkInfo请求参数结构体
 * @class
 */
class RenewLinkInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔ID
         * @type {number || null}
         */
        this.LinkID = null;

        /**
         * 具体的账号
         * @type {string || null}
         */
        this.UinAccount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LinkID = 'LinkID' in params ? params.LinkID : null;
        this.UinAccount = 'UinAccount' in params ? params.UinAccount : null;

    }
}

/**
 * CreateTag请求参数结构体
 * @class
 */
class CreateTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * DeleteTactic返回参数结构体
 * @class
 */
class DeleteTacticResponse extends  AbstractModel {
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
 * DeleteTactic请求参数结构体
 * @class
 */
class DeleteTacticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.TacticID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TacticID = 'TacticID' in params ? params.TacticID : null;

    }
}

/**
 * DescribeTactic返回参数结构体
 * @class
 */
class DescribeTacticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略信息
         * @type {Tactic || null}
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
            let obj = new Tactic();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLinkTactic请求参数结构体
 * @class
 */
class ModifyLinkTacticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔ID
         * @type {number || null}
         */
        this.LinkID = null;

        /**
         * 策略ID
         * @type {number || null}
         */
        this.TacticID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LinkID = 'LinkID' in params ? params.LinkID : null;
        this.TacticID = 'TacticID' in params ? params.TacticID : null;

    }
}

/**
 * DescribeTactic请求参数结构体
 * @class
 */
class DescribeTacticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.TacticID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TacticID = 'TacticID' in params ? params.TacticID : null;

    }
}

/**
 * 自动化规则
 * @class
 */
class Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 删除时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeletedAt = null;

        /**
         * 规则类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否激活
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsActive = null;

        /**
         * 触发动作：1 邮件 2 API请求 5 停卡 6 地图标识为盲点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Notice = null;

        /**
         * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 回调API地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 用量类：用量阈值,单位MB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataThreshold = null;

        /**
         * 行政区类型：1. 省份 2. 城市 3. 区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.District = null;

        /**
         * 移动距离阈值，单位KM
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Distance = null;

        /**
         * 信号强度阈值(-dbm）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SignalStrength = null;

        /**
         * 盲点阈值天数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LostDay = null;

        /**
         * 绑定的标签ID集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.TagIDs = null;

        /**
         * 绑定的资费计划
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SalePlan = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.DeletedAt = 'DeletedAt' in params ? params.DeletedAt : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IsActive = 'IsActive' in params ? params.IsActive : null;
        this.Notice = 'Notice' in params ? params.Notice : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.DataThreshold = 'DataThreshold' in params ? params.DataThreshold : null;
        this.District = 'District' in params ? params.District : null;
        this.Distance = 'Distance' in params ? params.Distance : null;
        this.SignalStrength = 'SignalStrength' in params ? params.SignalStrength : null;
        this.LostDay = 'LostDay' in params ? params.LostDay : null;
        this.TagIDs = 'TagIDs' in params ? params.TagIDs : null;
        this.SalePlan = 'SalePlan' in params ? params.SalePlan : null;

    }
}

/**
 * CreateTag返回参数结构体
 * @class
 */
class CreateTagResponse extends  AbstractModel {
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
 * DescribeLinks请求参数结构体
 * @class
 */
class DescribeLinksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔卡ID
         * @type {number || null}
         */
        this.LinkID = null;

        /**
         * 运营商ICCID
         * @type {string || null}
         */
        this.ICCID = null;

        /**
         * 设备码
         * @type {string || null}
         */
        this.IMEI = null;

        /**
         * 卡片状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 运营商 1移动 2联通 3电信
         * @type {number || null}
         */
        this.TeleOperator = null;

        /**
         * 标签ID
         * @type {number || null}
         */
        this.TagID = null;

        /**
         * 策略ID
         * @type {number || null}
         */
        this.TacticID = null;

        /**
         * 设备在线状态 0 未激活 1 在线 2 离线
         * @type {number || null}
         */
        this.LinkedState = null;

        /**
         * 标签ID 集合
         * @type {Array.<number> || null}
         */
        this.TagIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LinkID = 'LinkID' in params ? params.LinkID : null;
        this.ICCID = 'ICCID' in params ? params.ICCID : null;
        this.IMEI = 'IMEI' in params ? params.IMEI : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TeleOperator = 'TeleOperator' in params ? params.TeleOperator : null;
        this.TagID = 'TagID' in params ? params.TagID : null;
        this.TacticID = 'TacticID' in params ? params.TacticID : null;
        this.LinkedState = 'LinkedState' in params ? params.LinkedState : null;
        this.TagIDs = 'TagIDs' in params ? params.TagIDs : null;

    }
}

/**
 * CreateRule返回参数结构体
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
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
 * 自动化规则详细信息
 * @class
 */
class RuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 删除时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeletedAt = null;

        /**
         * 规则类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否激活
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsActive = null;

        /**
         * 触发动作：1 邮件 2 API请求 5 停卡 6 地图标识为盲点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Notice = null;

        /**
         * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 回调API地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 用量类：用量阈值,单位MB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataThreshold = null;

        /**
         * 行政区类型：1. 省份 2. 城市 3. 区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.District = null;

        /**
         * 移动距离阈值，单位KM
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Distance = null;

        /**
         * 信号强度阈值(-dbm）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SignalStrength = null;

        /**
         * 盲点阈值天数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LostDay = null;

        /**
         * 标签ID集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.TagIDs = null;

        /**
         * 资费信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SalePlan = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.DeletedAt = 'DeletedAt' in params ? params.DeletedAt : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IsActive = 'IsActive' in params ? params.IsActive : null;
        this.Notice = 'Notice' in params ? params.Notice : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.DataThreshold = 'DataThreshold' in params ? params.DataThreshold : null;
        this.District = 'District' in params ? params.District : null;
        this.Distance = 'Distance' in params ? params.Distance : null;
        this.SignalStrength = 'SignalStrength' in params ? params.SignalStrength : null;
        this.LostDay = 'LostDay' in params ? params.LostDay : null;
        this.TagIDs = 'TagIDs' in params ? params.TagIDs : null;
        this.SalePlan = 'SalePlan' in params ? params.SalePlan : null;

    }
}

/**
 * DescribeTactics返回参数结构体
 * @class
 */
class DescribeTacticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略集合信息
         * @type {TacticInfos || null}
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
            let obj = new TacticInfos();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewLinkInfo返回参数结构体
 * @class
 */
class RenewLinkInfoResponse extends  AbstractModel {
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
 * DescribeRules返回参数结构体
 * @class
 */
class DescribeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动化规则列表集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleInfos || null}
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
            let obj = new RuleInfos();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTag返回参数结构体
 * @class
 */
class DeleteTagResponse extends  AbstractModel {
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
 * 运营商卡片信息
 * @class
 */
class TeleOperatorCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开户时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountTime = null;

        /**
         * 激活时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActiveTime = null;

        /**
         * 运营商ICCID
         * @type {string || null}
         */
        this.ICCID = null;

        /**
         * 云兔卡ID
         * @type {number || null}
         */
        this.LinkID = null;

        /**
         * 电话号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msisdn = null;

        /**
         * 移动用户识别码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IMSI = null;

        /**
         * 运营商: 1 移动 2 联通 3 电信
         * @type {number || null}
         */
        this.TeleOperator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountTime = 'AccountTime' in params ? params.AccountTime : null;
        this.ActiveTime = 'ActiveTime' in params ? params.ActiveTime : null;
        this.ICCID = 'ICCID' in params ? params.ICCID : null;
        this.LinkID = 'LinkID' in params ? params.LinkID : null;
        this.Msisdn = 'Msisdn' in params ? params.Msisdn : null;
        this.IMSI = 'IMSI' in params ? params.IMSI : null;
        this.TeleOperator = 'TeleOperator' in params ? params.TeleOperator : null;

    }
}

/**
 * ModifyLinkTele返回参数结构体
 * @class
 */
class ModifyLinkTeleResponse extends  AbstractModel {
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
 * 订单列表
 * @class
 */
class Orders extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 订单集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrderInfo> || null}
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
                let obj = new OrderInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

    }
}

/**
 * ModifyTag请求参数结构体
 * @class
 */
class ModifyTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 标签ID
         * @type {number || null}
         */
        this.TagID = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TagID = 'TagID' in params ? params.TagID : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 云兔标签信息
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 标签ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * 订单信息
 * @class
 */
class OrderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子订单ID
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 订单账户
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 购买数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BuyNum = null;

        /**
         * 行业代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndustryCode = null;

        /**
         * 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 联系人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Contact = null;

        /**
         * 电话号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msisdn = null;

        /**
         * 卡片规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * 用户订单备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BigDealId = null;

        /**
         * 审批状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuditStatus = null;

        /**
         * 发货状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowStatus = null;

        /**
         * 审批备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 退费订单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RefundBigDealId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.BuyNum = 'BuyNum' in params ? params.BuyNum : null;
        this.IndustryCode = 'IndustryCode' in params ? params.IndustryCode : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Contact = 'Contact' in params ? params.Contact : null;
        this.Msisdn = 'Msisdn' in params ? params.Msisdn : null;
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.FlowStatus = 'FlowStatus' in params ? params.FlowStatus : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RefundBigDealId = 'RefundBigDealId' in params ? params.RefundBigDealId : null;

    }
}

/**
 * CreateTactic返回参数结构体
 * @class
 */
class CreateTacticResponse extends  AbstractModel {
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
 * DescribeOrders请求参数结构体
 * @class
 */
class DescribeOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子订单ID
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 审批状态 0全部 1通过 2驳回 3待审核
         * @type {number || null}
         */
        this.AuditStatus = null;

        /**
         * 翻页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 翻页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 开始时间,例如2022-06-30 00:00:00
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间,例如2022-06-30 00:00:00
         * @type {string || null}
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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyLinkTele请求参数结构体
 * @class
 */
class ModifyLinkTeleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔ID
         * @type {number || null}
         */
        this.LinkID = null;

        /**
         * 运营商 1 移动 2 联通 3 电信
         * @type {number || null}
         */
        this.TeleOperator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LinkID = 'LinkID' in params ? params.LinkID : null;
        this.TeleOperator = 'TeleOperator' in params ? params.TeleOperator : null;

    }
}

/**
 * 云兔连接基本信息
 * @class
 */
class LinkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔连接ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 卡片状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 激活时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActiveTime = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 数据用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataUse = null;

        /**
         * 语音用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AudioUse = null;

        /**
         * 短信用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SmsUse = null;

        /**
         * 在线状态 0 未激活 1 在线 2 离线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LinkedState = null;

        /**
         * 预期策略ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TacticID = null;

        /**
         * 策略下发状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TacticStatus = null;

        /**
         * 策略下发成功过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TacticExpireTime = null;

        /**
         * 高级日志预期状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsActiveLog = null;

        /**
         * 运营商 1移动 2联通 3电信
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TeleOperator = null;

        /**
         * 设备最新上报信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeviceReport || null}
         */
        this.Report = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ActiveTime = 'ActiveTime' in params ? params.ActiveTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DataUse = 'DataUse' in params ? params.DataUse : null;
        this.AudioUse = 'AudioUse' in params ? params.AudioUse : null;
        this.SmsUse = 'SmsUse' in params ? params.SmsUse : null;
        this.LinkedState = 'LinkedState' in params ? params.LinkedState : null;
        this.TacticID = 'TacticID' in params ? params.TacticID : null;
        this.TacticStatus = 'TacticStatus' in params ? params.TacticStatus : null;
        this.TacticExpireTime = 'TacticExpireTime' in params ? params.TacticExpireTime : null;
        this.IsActiveLog = 'IsActiveLog' in params ? params.IsActiveLog : null;
        this.TeleOperator = 'TeleOperator' in params ? params.TeleOperator : null;

        if (params.Report) {
            let obj = new DeviceReport();
            obj.deserialize(params.Report)
            this.Report = obj;
        }

    }
}

/**
 * DescribeLink请求参数结构体
 * @class
 */
class DescribeLinkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云兔卡ID
         * @type {number || null}
         */
        this.LinkID = null;

        /**
         * 具体的账号
         * @type {string || null}
         */
        this.UinAccount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LinkID = 'LinkID' in params ? params.LinkID : null;
        this.UinAccount = 'UinAccount' in params ? params.UinAccount : null;

    }
}

/**
 * ModifyLinkAdvancedLog返回参数结构体
 * @class
 */
class ModifyLinkAdvancedLogResponse extends  AbstractModel {
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
 * ModifyRule返回参数结构体
 * @class
 */
class ModifyRuleResponse extends  AbstractModel {
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

module.exports = {
    DescribeTagsResponse: DescribeTagsResponse,
    DescribeLinkResponse: DescribeLinkResponse,
    DeleteRuleResponse: DeleteRuleResponse,
    CreateTacticRequest: CreateTacticRequest,
    DeleteTagRequest: DeleteTagRequest,
    DescribeOrdersResponse: DescribeOrdersResponse,
    DeviceReport: DeviceReport,
    ModifyTacticRequest: ModifyTacticRequest,
    Tactic: Tactic,
    DeleteRuleRequest: DeleteRuleRequest,
    DescribeRulesRequest: DescribeRulesRequest,
    ModifyLinkAdvancedLogRequest: ModifyLinkAdvancedLogRequest,
    DescribeRuleResponse: DescribeRuleResponse,
    ModifyRuleRequest: ModifyRuleRequest,
    LinkInfos: LinkInfos,
    TagInfos: TagInfos,
    ModifyTagResponse: ModifyTagResponse,
    CreateRuleRequest: CreateRuleRequest,
    LinkDetailInfo: LinkDetailInfo,
    DescribeRuleRequest: DescribeRuleRequest,
    RuleInfos: RuleInfos,
    ModifyRuleStatusResponse: ModifyRuleStatusResponse,
    ModifyLinkTacticResponse: ModifyLinkTacticResponse,
    DescribeTagsRequest: DescribeTagsRequest,
    DescribeLinksResponse: DescribeLinksResponse,
    ModifyTacticResponse: ModifyTacticResponse,
    ModifyRuleStatusRequest: ModifyRuleStatusRequest,
    DescribeTacticsRequest: DescribeTacticsRequest,
    TacticInfos: TacticInfos,
    RenewLinkInfoRequest: RenewLinkInfoRequest,
    CreateTagRequest: CreateTagRequest,
    DeleteTacticResponse: DeleteTacticResponse,
    DeleteTacticRequest: DeleteTacticRequest,
    DescribeTacticResponse: DescribeTacticResponse,
    ModifyLinkTacticRequest: ModifyLinkTacticRequest,
    DescribeTacticRequest: DescribeTacticRequest,
    Rule: Rule,
    CreateTagResponse: CreateTagResponse,
    DescribeLinksRequest: DescribeLinksRequest,
    CreateRuleResponse: CreateRuleResponse,
    RuleDetail: RuleDetail,
    DescribeTacticsResponse: DescribeTacticsResponse,
    RenewLinkInfoResponse: RenewLinkInfoResponse,
    DescribeRulesResponse: DescribeRulesResponse,
    DeleteTagResponse: DeleteTagResponse,
    TeleOperatorCard: TeleOperatorCard,
    ModifyLinkTeleResponse: ModifyLinkTeleResponse,
    Orders: Orders,
    ModifyTagRequest: ModifyTagRequest,
    Tag: Tag,
    OrderInfo: OrderInfo,
    CreateTacticResponse: CreateTacticResponse,
    DescribeOrdersRequest: DescribeOrdersRequest,
    ModifyLinkTeleRequest: ModifyLinkTeleRequest,
    LinkInfo: LinkInfo,
    DescribeLinkRequest: DescribeLinkRequest,
    ModifyLinkAdvancedLogResponse: ModifyLinkAdvancedLogResponse,
    ModifyRuleResponse: ModifyRuleResponse,

}
