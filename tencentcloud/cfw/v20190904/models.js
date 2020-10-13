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
 * DescribeVpcRuleOverview返回参数结构体
 * @class
 */
class DescribeVpcRuleOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阻断策略规则数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StrategyNum = null;

        /**
         * 启用规则数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartRuleNum = null;

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
        this.StrategyNum = 'StrategyNum' in params ? params.StrategyNum : null;
        this.StartRuleNum = 'StartRuleNum' in params ? params.StartRuleNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSyncAssetStatus返回参数结构体
 * @class
 */
class DescribeSyncAssetStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：同步成功，1：资产更新中，2：后台同步调用失败
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAllRuleStatus返回参数结构体
 * @class
 */
class ModifyAllRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 修改成功, !0: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleOverview返回参数结构体
 * @class
 */
class DescribeRuleOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * 阻断策略规则数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StrategyNum = null;

        /**
         * 启用规则数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartRuleNum = null;

        /**
         * 停用规则数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StopRuleNum = null;

        /**
         * 剩余配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RemainingNum = null;

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
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.StrategyNum = 'StrategyNum' in params ? params.StrategyNum : null;
        this.StartRuleNum = 'StartRuleNum' in params ? params.StartRuleNum : null;
        this.StopRuleNum = 'StopRuleNum' in params ? params.StopRuleNum : null;
        this.RemainingNum = 'RemainingNum' in params ? params.RemainingNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAllSwitchStatus请求参数结构体
 * @class
 */
class ModifyAllSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态，0：关闭，1：开启
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 0: 边界防火墙开关，1：vpc防火墙开关
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 选中的防火墙开关Id
         * @type {Array.<string> || null}
         */
        this.Ids = null;

        /**
         * NAT开关切换类型，1,单个子网，2，同开同关，3，全部
         * @type {number || null}
         */
        this.ChangeType = null;

        /**
         * NAT实例所在地域
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.ChangeType = 'ChangeType' in params ? params.ChangeType : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 执行顺序对象
 * @class
 */
class SequenceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 修改前执行顺序
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 修改后执行顺序
         * @type {number || null}
         */
        this.NewOrderIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.NewOrderIndex = 'NewOrderIndex' in params ? params.NewOrderIndex : null;

    }
}

/**
 * ModifyItemSwitchStatus返回参数结构体
 * @class
 */
class ModifyItemSwitchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功与否状态值
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySequenceRules返回参数结构体
 * @class
 */
class ModifySequenceRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 修改成功, !0: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAcRule返回参数结构体
 * @class
 */
class ModifyAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 装填值
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTableStatus返回参数结构体
 * @class
 */
class DescribeTableStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：正常，其它：不正常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAcRule返回参数结构体
 * @class
 */
class DeleteAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 防火墙开关列表对象
 * @class
 */
class SwitchListsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntranetIp = null;

        /**
         * 实例名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资产类型
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 防火墙开关
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * id值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 公网 IP 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PublicIpType = null;

        /**
         * 风险端口数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PortTimes = null;

        /**
         * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * 扫描深度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScanMode = null;

        /**
         * 扫描状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.IntranetIp = 'IntranetIp' in params ? params.IntranetIp : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.PublicIpType = 'PublicIpType' in params ? params.PublicIpType : null;
        this.PortTimes = 'PortTimes' in params ? params.PortTimes : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.ScanMode = 'ScanMode' in params ? params.ScanMode : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;

    }
}

/**
 * DescribeSwitchLists返回参数结构体
 * @class
 */
class DescribeSwitchListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表数据
         * @type {Array.<SwitchListsData> || null}
         */
        this.Data = null;

        /**
         * 区域列表
         * @type {Array.<string> || null}
         */
        this.AreaLists = null;

        /**
         * 打开个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OnNum = null;

        /**
         * 关闭个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OffNum = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SwitchListsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AreaLists = 'AreaLists' in params ? params.AreaLists : null;
        this.OnNum = 'OnNum' in params ? params.OnNum : null;
        this.OffNum = 'OffNum' in params ? params.OffNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSyncAssetStatus请求参数结构体
 * @class
 */
class DescribeSyncAssetStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 互联网防火墙开关，1：vpc 防火墙开关
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteAllAccessControlRule请求参数结构体
 * @class
 */
class DeleteAllAccessControlRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 边ID
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * nat地域
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * RunSyncAsset返回参数结构体
 * @class
 */
class RunSyncAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：同步成功，1：资产更新中，2：后台同步调用失败
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunSyncAsset请求参数结构体
 * @class
 */
class RunSyncAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: 互联网防火墙开关，1：vpc 防火墙开关
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeSwitchLists请求参数结构体
 * @class
 */
class DescribeSwitchListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防火墙状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 资产类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 搜索值
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序，desc：降序，asc：升序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.By = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * ModifyTableStatus返回参数结构体
 * @class
 */
class ModifyTableStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：正常，-1：不正常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyItemSwitchStatus请求参数结构体
 * @class
 */
class ModifyItemSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * id值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 状态值
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 0: 边界防火墙开关，1：vpc防火墙开关
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeRuleOverview请求参数结构体
 * @class
 */
class DescribeRuleOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DescribeTableStatus请求参数结构体
 * @class
 */
class DescribeTableStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EdgeId值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 状态值，0：检查表的状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Nat所在地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DescribeAcLists请求参数结构体
 * @class
 */
class DescribeAcListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 策略
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * 搜索值
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 出站还是入站，0：入站，1：出站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * EdgeId值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 规则是否开启，'0': 未开启，'1': 开启, 默认为'0'
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeVpcRuleOverview请求参数结构体
 * @class
 */
class DescribeVpcRuleOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边id
         * @type {string || null}
         */
        this.EdgeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;

    }
}

/**
 * CreateAcRules返回参数结构体
 * @class
 */
class CreateAcRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAcRule请求参数结构体
 * @class
 */
class ModifyAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则数组
         * @type {Array.<RuleInfoData> || null}
         */
        this.Data = null;

        /**
         * EdgeId值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 访问规则状态
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * NAT地域
         * @type {string || null}
         */
        this.Area = null;

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
                let obj = new RuleInfoData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeNatRuleOverview返回参数结构体
 * @class
 */
class DescribeNatRuleOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 弹性IP列表
         * @type {Array.<string> || null}
         */
        this.EipList = null;

        /**
         * 端口转发规则数量
         * @type {number || null}
         */
        this.DnatNum = null;

        /**
         * 访问控制规则总数
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 访问规则剩余条数
         * @type {number || null}
         */
        this.RemainNum = null;

        /**
         * 阻断规则条数
         * @type {number || null}
         */
        this.BlockNum = null;

        /**
         * 启用规则条数
         * @type {number || null}
         */
        this.EnableNum = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.EipList = 'EipList' in params ? params.EipList : null;
        this.DnatNum = 'DnatNum' in params ? params.DnatNum : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RemainNum = 'RemainNum' in params ? params.RemainNum : null;
        this.BlockNum = 'BlockNum' in params ? params.BlockNum : null;
        this.EnableNum = 'EnableNum' in params ? params.EnableNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAcRule请求参数结构体
 * @class
 */
class DeleteAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * id值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 出站还是入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * EdgeId值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * NAT地域
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DeleteAllAccessControlRule返回参数结构体
 * @class
 */
class DeleteAllAccessControlRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态值
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回多余信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Info = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAcRules请求参数结构体
 * @class
 */
class CreateAcRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建规则数据
         * @type {Array.<RuleInfoData> || null}
         */
        this.Data = null;

        /**
         * 0：添加，1：插入
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 边id
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 访问控制规则状态
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 0：添加，1：覆盖
         * @type {number || null}
         */
        this.Overwrite = null;

        /**
         * NAT实例ID, Area存在的时候这个必传
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * portScan: 来自于端口扫描, patchImport: 来自于批量导入
         * @type {string || null}
         */
        this.From = null;

        /**
         * NAT地域
         * @type {string || null}
         */
        this.Area = null;

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
                let obj = new RuleInfoData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Overwrite = 'Overwrite' in params ? params.Overwrite : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.From = 'From' in params ? params.From : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifyTableStatus请求参数结构体
 * @class
 */
class ModifyTableStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EdgeId值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 状态值，1：锁表，2：解锁表
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Nat所在地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 0： 出向，1：入向
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * 访问控制列表对象
 * @class
 */
class AcListsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 访问源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 访问目的
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * 协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 命中次数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 执行顺序
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 告警规则id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.LogId = 'LogId' in params ? params.LogId : null;

    }
}

/**
 * DescribeNatRuleOverview请求参数结构体
 * @class
 */
class DescribeNatRuleOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * NAT地域
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifySequenceRules请求参数结构体
 * @class
 */
class ModifySequenceRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边Id值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * 修改数据
         * @type {Array.<SequenceData> || null}
         */
        this.Data = null;

        /**
         * NAT地域
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 0：出向，1：入向
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SequenceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * ModifyAllRuleStatus请求参数结构体
 * @class
 */
class ModifyAllRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态，0：全部停用，1：全部启用
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Edge ID值
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * NAT地域
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 规则输入对象
 * @class
 */
class RuleInfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行顺序
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * 访问源
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 访问目的
         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 策略
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 方向，0：出站，1：入站
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 源类型,1是ip,2是域名,3是ip地址簿，4是ip组地址簿
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 目的类型,1是ip,2是域名,3是ip地址簿，4是ip组地址簿
         * @type {number || null}
         */
        this.TargetType = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * id值
         * @type {number || null}
         */
        this.Id = null;

        /**
         * log
         * @type {string || null}
         */
        this.LogId = null;

        /**
         * 城市Code
         * @type {number || null}
         */
        this.City = null;

        /**
         * 国家Code
         * @type {number || null}
         */
        this.Country = null;

        /**
         * 云厂商，支持多个，以逗号分隔， 1:腾讯云（仅海外）,2:阿里云,3:亚马逊云,4:华为云,5:微软云
         * @type {string || null}
         */
        this.CloudCode = null;

        /**
         * 是否为地域
         * @type {number || null}
         */
        this.IsRegion = null;

        /**
         * 地域名
         * @type {string || null}
         */
        this.CityName = null;

        /**
         * 地域名
         * @type {string || null}
         */
        this.CountryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.CloudCode = 'CloudCode' in params ? params.CloudCode : null;
        this.IsRegion = 'IsRegion' in params ? params.IsRegion : null;
        this.CityName = 'CityName' in params ? params.CityName : null;
        this.CountryName = 'CountryName' in params ? params.CountryName : null;

    }
}

/**
 * DescribeAcLists返回参数结构体
 * @class
 */
class DescribeAcListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 访问控制列表数据
         * @type {Array.<AcListsData> || null}
         */
        this.Data = null;

        /**
         * 不算筛选条数的总条数
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * 访问控制规则全部启用/全部停用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Enable = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AcListsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAllSwitchStatus返回参数结构体
 * @class
 */
class ModifyAllSwitchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功与否状态值
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeVpcRuleOverviewResponse: DescribeVpcRuleOverviewResponse,
    DescribeSyncAssetStatusResponse: DescribeSyncAssetStatusResponse,
    ModifyAllRuleStatusResponse: ModifyAllRuleStatusResponse,
    DescribeRuleOverviewResponse: DescribeRuleOverviewResponse,
    ModifyAllSwitchStatusRequest: ModifyAllSwitchStatusRequest,
    SequenceData: SequenceData,
    ModifyItemSwitchStatusResponse: ModifyItemSwitchStatusResponse,
    ModifySequenceRulesResponse: ModifySequenceRulesResponse,
    ModifyAcRuleResponse: ModifyAcRuleResponse,
    DescribeTableStatusResponse: DescribeTableStatusResponse,
    DeleteAcRuleResponse: DeleteAcRuleResponse,
    SwitchListsData: SwitchListsData,
    DescribeSwitchListsResponse: DescribeSwitchListsResponse,
    DescribeSyncAssetStatusRequest: DescribeSyncAssetStatusRequest,
    DeleteAllAccessControlRuleRequest: DeleteAllAccessControlRuleRequest,
    RunSyncAssetResponse: RunSyncAssetResponse,
    RunSyncAssetRequest: RunSyncAssetRequest,
    DescribeSwitchListsRequest: DescribeSwitchListsRequest,
    ModifyTableStatusResponse: ModifyTableStatusResponse,
    ModifyItemSwitchStatusRequest: ModifyItemSwitchStatusRequest,
    DescribeRuleOverviewRequest: DescribeRuleOverviewRequest,
    DescribeTableStatusRequest: DescribeTableStatusRequest,
    DescribeAcListsRequest: DescribeAcListsRequest,
    DescribeVpcRuleOverviewRequest: DescribeVpcRuleOverviewRequest,
    CreateAcRulesResponse: CreateAcRulesResponse,
    ModifyAcRuleRequest: ModifyAcRuleRequest,
    DescribeNatRuleOverviewResponse: DescribeNatRuleOverviewResponse,
    DeleteAcRuleRequest: DeleteAcRuleRequest,
    DeleteAllAccessControlRuleResponse: DeleteAllAccessControlRuleResponse,
    CreateAcRulesRequest: CreateAcRulesRequest,
    ModifyTableStatusRequest: ModifyTableStatusRequest,
    AcListsData: AcListsData,
    DescribeNatRuleOverviewRequest: DescribeNatRuleOverviewRequest,
    ModifySequenceRulesRequest: ModifySequenceRulesRequest,
    ModifyAllRuleStatusRequest: ModifyAllRuleStatusRequest,
    RuleInfoData: RuleInfoData,
    DescribeAcListsResponse: DescribeAcListsResponse,
    ModifyAllSwitchStatusResponse: ModifyAllSwitchStatusResponse,

}
