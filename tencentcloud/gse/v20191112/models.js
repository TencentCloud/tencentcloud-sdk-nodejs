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
 * 游戏属性详情
 * @class
 */
class GameProperty extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名称
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 属性值
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeleteScalingPolicy请求参数结构体
 * @class
 */
class DeleteScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 名称
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * UpdateGameServerSession返回参数结构体
 * @class
 */
class UpdateGameServerSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新后的游戏会话
         * @type {GameServerSession || null}
         */
        this.GameServerSession = null;

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

        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession)
            this.GameServerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGameServerSessions返回参数结构体
 * @class
 */
class DescribeGameServerSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GameServerSession> || null}
         */
        this.GameServerSessions = null;

        /**
         * 页便宜，用于查询下一页
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextToken = null;

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

        if (params.GameServerSessions) {
            this.GameServerSessions = new Array();
            for (let z in params.GameServerSessions) {
                let obj = new GameServerSession();
                obj.deserialize(params.GameServerSessions[z]);
                this.GameServerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务器实例统计数据
 * @class
 */
class InstanceCounts extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活跃的服务器实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Active = null;

        /**
         * 期望的服务器实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Desired = null;

        /**
         * 空闲的服务器实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Idle = null;

        /**
         * 服务器实例数最大限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxiNum = null;

        /**
         * 服务器实例数最小限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MiniNum = null;

        /**
         * 已开始创建，但未激活的服务器实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Pending = null;

        /**
         * 结束中的服务器实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Terminating = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Active = 'Active' in params ? params.Active : null;
        this.Desired = 'Desired' in params ? params.Desired : null;
        this.Idle = 'Idle' in params ? params.Idle : null;
        this.MaxiNum = 'MaxiNum' in params ? params.MaxiNum : null;
        this.MiniNum = 'MiniNum' in params ? params.MiniNum : null;
        this.Pending = 'Pending' in params ? params.Pending : null;
        this.Terminating = 'Terminating' in params ? params.Terminating : null;

    }
}

/**
 * JoinGameServerSession请求参数结构体
 * @class
 */
class JoinGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话ID
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 玩家ID
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 玩家自定义信息
         * @type {string || null}
         */
        this.PlayerData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;

    }
}

/**
 * DescribePlayerSessions返回参数结构体
 * @class
 */
class DescribePlayerSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家会话列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PlayerSession> || null}
         */
        this.PlayerSessions = null;

        /**
         * 页偏移
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextToken = null;

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

        if (params.PlayerSessions) {
            this.PlayerSessions = new Array();
            for (let z in params.PlayerSessions) {
                let obj = new PlayerSession();
                obj.deserialize(params.PlayerSessions[z]);
                this.PlayerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 玩家延迟信息
 * @class
 */
class PlayerLatency extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 延迟对应的区域名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionIdentifier = null;

        /**
         * 毫秒级延迟
         * @type {number || null}
         */
        this.LatencyInMilliseconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.RegionIdentifier = 'RegionIdentifier' in params ? params.RegionIdentifier : null;
        this.LatencyInMilliseconds = 'LatencyInMilliseconds' in params ? params.LatencyInMilliseconds : null;

    }
}

/**
 * StopGameServerSessionPlacement请求参数结构体
 * @class
 */
class StopGameServerSessionPlacementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话放置的唯一标识符
         * @type {string || null}
         */
        this.PlacementId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;

    }
}

/**
 * 动态扩缩容配置
 * @class
 */
class ScalingPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScalingAdjustment = null;

        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScalingAdjustmentType = null;

        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComparisonOperator = null;

        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Threshold = null;

        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EvaluationPeriods = null;

        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 基于规则的配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TargetConfiguration || null}
         */
        this.TargetConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ScalingAdjustment = 'ScalingAdjustment' in params ? params.ScalingAdjustment : null;
        this.ScalingAdjustmentType = 'ScalingAdjustmentType' in params ? params.ScalingAdjustmentType : null;
        this.ComparisonOperator = 'ComparisonOperator' in params ? params.ComparisonOperator : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.EvaluationPeriods = 'EvaluationPeriods' in params ? params.EvaluationPeriods : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;

        if (params.TargetConfiguration) {
            let obj = new TargetConfiguration();
            obj.deserialize(params.TargetConfiguration)
            this.TargetConfiguration = obj;
        }

    }
}

/**
 * DescribeGameServerSessions请求参数结构体
 * @class
 */
class DescribeGameServerSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * 舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 游戏服务器会话ID
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 单次查询记录数上限
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移，用于查询下一页
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * 游戏服务器会话状态
         * @type {string || null}
         */
        this.StatusFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;

    }
}

/**
 * UpdateGameServerSession请求参数结构体
 * @class
 */
class UpdateGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话ID
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 最大玩家数量
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * 游戏服务器会话名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 玩家会话创建策略（ACCEPT_ALL,DENY_ALL）
         * @type {string || null}
         */
        this.PlayerSessionCreationPolicy = null;

        /**
         * 保护策略(NoProtection,TimeLimitProtection,FullProtection)
         * @type {string || null}
         */
        this.ProtectionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PlayerSessionCreationPolicy = 'PlayerSessionCreationPolicy' in params ? params.PlayerSessionCreationPolicy : null;
        this.ProtectionPolicy = 'ProtectionPolicy' in params ? params.ProtectionPolicy : null;

    }
}

/**
 * DescribeGameServerSessionDetails返回参数结构体
 * @class
 */
class DescribeGameServerSessionDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GameServerSessionDetail> || null}
         */
        this.GameServerSessionDetails = null;

        /**
         * 页偏移，用于查询下一页
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextToken = null;

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

        if (params.GameServerSessionDetails) {
            this.GameServerSessionDetails = new Array();
            for (let z in params.GameServerSessionDetails) {
                let obj = new GameServerSessionDetail();
                obj.deserialize(params.GameServerSessionDetails[z]);
                this.GameServerSessionDetails.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartGameServerSessionPlacement返回参数结构体
 * @class
 */
class StartGameServerSessionPlacementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话放置
         * @type {GameServerSessionPlacement || null}
         */
        this.GameServerSessionPlacement = null;

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

        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement)
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetGameServerSessionLogUrl请求参数结构体
 * @class
 */
class GetGameServerSessionLogUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话ID
         * @type {string || null}
         */
        this.GameServerSessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;

    }
}

/**
 * DescribeFleetCapacity返回参数结构体
 * @class
 */
class DescribeFleetCapacityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署容量配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FleetCapacity> || null}
         */
        this.FleetCapacity = null;

        /**
         * 结果返回最大数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.FleetCapacity) {
            this.FleetCapacity = new Array();
            for (let z in params.FleetCapacity) {
                let obj = new FleetCapacity();
                obj.deserialize(params.FleetCapacity[z]);
                this.FleetCapacity.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFleetCapacity请求参数结构体
 * @class
 */
class DescribeFleetCapacityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署 Id列表
         * @type {Array.<string> || null}
         */
        this.FleetIds = null;

        /**
         * 结果返回最大数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回结果偏移
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
        this.FleetIds = 'FleetIds' in params ? params.FleetIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateGameServerSession返回参数结构体
 * @class
 */
class CreateGameServerSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GameServerSession || null}
         */
        this.GameServerSession = null;

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

        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession)
            this.GameServerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScalingPolicies请求参数结构体
 * @class
 */
class DescribeScalingPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 状态过滤条件
         * @type {string || null}
         */
        this.StatusFilter = null;

        /**
         * 结果返回最大数量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回结果偏移
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribePlayerSessions请求参数结构体
 * @class
 */
class DescribePlayerSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话ID
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 单次查询记录数上限
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移，用于查询下一页
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * 玩家ID
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 玩家会话ID
         * @type {string || null}
         */
        this.PlayerSessionId = null;

        /**
         * 玩家会话状态（RESERVED,ACTIVE,COMPLETED,TIMEDOUT）
         * @type {string || null}
         */
        this.PlayerSessionStatusFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;
        this.PlayerSessionStatusFilter = 'PlayerSessionStatusFilter' in params ? params.PlayerSessionStatusFilter : null;

    }
}

/**
 * PutScalingPolicy返回参数结构体
 * @class
 */
class PutScalingPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * JoinGameServerSession返回参数结构体
 * @class
 */
class JoinGameServerSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家会话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PlayerSession || null}
         */
        this.PlayerSession = null;

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

        if (params.PlayerSession) {
            let obj = new PlayerSession();
            obj.deserialize(params.PlayerSession)
            this.PlayerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 玩家游戏会话信息
 * @class
 */
class DesiredPlayerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * 与玩家会话关联的唯一玩家标识
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 开发人员定义的玩家数据
         * @type {string || null}
         */
        this.PlayerData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;

    }
}

/**
 * 基于规则的动态扩缩容配置项
 * @class
 */
class TargetConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预留存率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetValue = 'TargetValue' in params ? params.TargetValue : null;

    }
}

/**
 * DescribeGameServerSessionPlacement请求参数结构体
 * @class
 */
class DescribeGameServerSessionPlacementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话放置的唯一标识符
         * @type {string || null}
         */
        this.PlacementId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;

    }
}

/**
 * DescribeScalingPolicies返回参数结构体
 * @class
 */
class DescribeScalingPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动态扩缩容配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScalingPolicy> || null}
         */
        this.ScalingPolicies = null;

        /**
         * 返回总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.ScalingPolicies) {
            this.ScalingPolicies = new Array();
            for (let z in params.ScalingPolicies) {
                let obj = new ScalingPolicy();
                obj.deserialize(params.ScalingPolicies[z]);
                this.ScalingPolicies.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 部署的玩家游戏会话
 * @class
 */
class PlacedPlayerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家Id
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 玩家会话Id
         * @type {string || null}
         */
        this.PlayerSessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;

    }
}

/**
 * 游戏会话部署对象
 * @class
 */
class GameServerSessionPlacement extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署Id
         * @type {string || null}
         */
        this.PlacementId = null;

        /**
         * 服务部署组名称
         * @type {string || null}
         */
        this.GameServerSessionQueueName = null;

        /**
         * 玩家延迟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PlayerLatency> || null}
         */
        this.PlayerLatencies = null;

        /**
         * 服务部署状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 分配给正在运行游戏会话的实例的DNS标识符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * 游戏会话Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 游戏会话名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GameServerSessionName = null;

        /**
         * 服务部署区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GameServerSessionRegion = null;

        /**
         * 游戏属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * 最大玩家数量
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * 游戏会话数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * 运行游戏会话的实例的IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 运行游戏会话的实例的端口号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 游戏匹配数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchmakerData = null;

        /**
         * 部署的玩家游戏数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PlacedPlayerSession> || null}
         */
        this.PlacedPlayerSessions = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
        this.GameServerSessionQueueName = 'GameServerSessionQueueName' in params ? params.GameServerSessionQueueName : null;

        if (params.PlayerLatencies) {
            this.PlayerLatencies = new Array();
            for (let z in params.PlayerLatencies) {
                let obj = new PlayerLatency();
                obj.deserialize(params.PlayerLatencies[z]);
                this.PlayerLatencies.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.GameServerSessionName = 'GameServerSessionName' in params ? params.GameServerSessionName : null;
        this.GameServerSessionRegion = 'GameServerSessionRegion' in params ? params.GameServerSessionRegion : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.MatchmakerData = 'MatchmakerData' in params ? params.MatchmakerData : null;

        if (params.PlacedPlayerSessions) {
            this.PlacedPlayerSessions = new Array();
            for (let z in params.PlacedPlayerSessions) {
                let obj = new PlacedPlayerSession();
                obj.deserialize(params.PlacedPlayerSessions[z]);
                this.PlacedPlayerSessions.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 服务部署组容量配置
 * @class
 */
class FleetCapacity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署 Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 服务器类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 服务器实例统计数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InstanceCounts || null}
         */
        this.InstanceCounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.InstanceCounts) {
            let obj = new InstanceCounts();
            obj.deserialize(params.InstanceCounts)
            this.InstanceCounts = obj;
        }

    }
}

/**
 * UpdateFleetCapacity返回参数结构体
 * @class
 */
class UpdateFleetCapacityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetId = null;

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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 玩家会话详情
 * @class
 */
class PlayerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家会话创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 游戏服务器会话运行的DNS标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * 舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 游戏服务器会话ID
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 游戏服务器会话运行的CVM地址
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 玩家相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlayerData = null;

        /**
         * 玩家ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 玩家会话ID
         * @type {string || null}
         */
        this.PlayerSessionId = null;

        /**
         * 端口号
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 玩家会话的状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 玩家会话终止时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TerminationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;

    }
}

/**
 * CreateGameServerSession请求参数结构体
 * @class
 */
class CreateGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最大玩家数量
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * 别名ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * 创建者ID
         * @type {string || null}
         */
        this.CreatorId = null;

        /**
         * 舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 游戏属性
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * 游戏服务器会话属性详情
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * 游戏服务器会话自定义ID
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 幂等token
         * @type {string || null}
         */
        this.IdempotencyToken = null;

        /**
         * 游戏服务器会话名称
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
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IdempotencyToken = 'IdempotencyToken' in params ? params.IdempotencyToken : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * GetGameServerSessionLogUrl返回参数结构体
 * @class
 */
class GetGameServerSessionLogUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志下载URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PreSignedUrl = null;

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
        this.PreSignedUrl = 'PreSignedUrl' in params ? params.PreSignedUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 游戏服务器会话详情（GameServerSessionDetail）
 * @class
 */
class GameServerSessionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话
         * @type {GameServerSession || null}
         */
        this.GameServerSession = null;

        /**
         * 保护策略，可选（NoProtection,FullProtection）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProtectionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession)
            this.GameServerSession = obj;
        }
        this.ProtectionPolicy = 'ProtectionPolicy' in params ? params.ProtectionPolicy : null;

    }
}

/**
 * DescribeGameServerSessionDetails请求参数结构体
 * @class
 */
class DescribeGameServerSessionDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * 舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 游戏服务器会话ID
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 单次查询记录数上限
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移，用于查询下一页
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * 游戏服务器会话状态(ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR)
         * @type {string || null}
         */
        this.StatusFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;

    }
}

/**
 * StartGameServerSessionPlacement请求参数结构体
 * @class
 */
class StartGameServerSessionPlacementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始部署游戏服务器会话的唯一标识符
         * @type {string || null}
         */
        this.PlacementId = null;

        /**
         * 游戏服务器会话队列名称
         * @type {string || null}
         */
        this.GameServerSessionQueueName = null;

        /**
         * 游戏服务器允许同时连接到游戏会话的最大玩家数量
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * 玩家游戏会话信息
         * @type {Array.<DesiredPlayerSession> || null}
         */
        this.DesiredPlayerSessions = null;

        /**
         * 玩家游戏会话属性
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * 游戏服务器会话数据
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * 游戏服务器会话名称
         * @type {string || null}
         */
        this.GameServerSessionName = null;

        /**
         * 玩家延迟
         * @type {Array.<PlayerLatency> || null}
         */
        this.PlayerLatencies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
        this.GameServerSessionQueueName = 'GameServerSessionQueueName' in params ? params.GameServerSessionQueueName : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;

        if (params.DesiredPlayerSessions) {
            this.DesiredPlayerSessions = new Array();
            for (let z in params.DesiredPlayerSessions) {
                let obj = new DesiredPlayerSession();
                obj.deserialize(params.DesiredPlayerSessions[z]);
                this.DesiredPlayerSessions.push(obj);
            }
        }

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionName = 'GameServerSessionName' in params ? params.GameServerSessionName : null;

        if (params.PlayerLatencies) {
            this.PlayerLatencies = new Array();
            for (let z in params.PlayerLatencies) {
                let obj = new PlayerLatency();
                obj.deserialize(params.PlayerLatencies[z]);
                this.PlayerLatencies.push(obj);
            }
        }

    }
}

/**
 * 游戏会话详情
 * @class
 */
class GameServerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 创建者ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorId = null;

        /**
         * 当前玩家数量
         * @type {number || null}
         */
        this.CurrentPlayerSessionCount = null;

        /**
         * CVM的DNS标识符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * 舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 游戏属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * 游戏服务器会话属性详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * 游戏服务器会话ID
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * CVM IP地址
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 对战进程详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchmakerData = null;

        /**
         * 最大玩家数量
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * 游戏服务器会话名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 玩家会话创建策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlayerSessionCreationPolicy = null;

        /**
         * 端口号
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 游戏服务器会话状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 游戏服务器会话状态附加信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusReason = null;

        /**
         * 终止的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TerminationTime = null;

        /**
         * 实例类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
        this.CurrentPlayerSessionCount = 'CurrentPlayerSessionCount' in params ? params.CurrentPlayerSessionCount : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.MatchmakerData = 'MatchmakerData' in params ? params.MatchmakerData : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PlayerSessionCreationPolicy = 'PlayerSessionCreationPolicy' in params ? params.PlayerSessionCreationPolicy : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusReason = 'StatusReason' in params ? params.StatusReason : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DeleteScalingPolicy返回参数结构体
 * @class
 */
class DeleteScalingPolicyResponse extends  AbstractModel {
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
 * UpdateFleetCapacity请求参数结构体
 * @class
 */
class UpdateFleetCapacityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 期望的服务器实例数
         * @type {number || null}
         */
        this.DesiredInstances = null;

        /**
         * 服务器实例数最小限制
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 服务器实例数最大限制
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.DesiredInstances = 'DesiredInstances' in params ? params.DesiredInstances : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * DescribeGameServerSessionPlacement返回参数结构体
 * @class
 */
class DescribeGameServerSessionPlacementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话放置
         * @type {GameServerSessionPlacement || null}
         */
        this.GameServerSessionPlacement = null;

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

        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement)
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PutScalingPolicy请求参数结构体
 * @class
 */
class PutScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 基于规则的扩缩容配置
         * @type {TargetConfiguration || null}
         */
        this.TargetConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

        if (params.TargetConfiguration) {
            let obj = new TargetConfiguration();
            obj.deserialize(params.TargetConfiguration)
            this.TargetConfiguration = obj;
        }

    }
}

/**
 * StopGameServerSessionPlacement返回参数结构体
 * @class
 */
class StopGameServerSessionPlacementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话放置
         * @type {GameServerSessionPlacement || null}
         */
        this.GameServerSessionPlacement = null;

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

        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement)
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GameProperty: GameProperty,
    DeleteScalingPolicyRequest: DeleteScalingPolicyRequest,
    UpdateGameServerSessionResponse: UpdateGameServerSessionResponse,
    DescribeGameServerSessionsResponse: DescribeGameServerSessionsResponse,
    InstanceCounts: InstanceCounts,
    JoinGameServerSessionRequest: JoinGameServerSessionRequest,
    DescribePlayerSessionsResponse: DescribePlayerSessionsResponse,
    PlayerLatency: PlayerLatency,
    StopGameServerSessionPlacementRequest: StopGameServerSessionPlacementRequest,
    ScalingPolicy: ScalingPolicy,
    DescribeGameServerSessionsRequest: DescribeGameServerSessionsRequest,
    UpdateGameServerSessionRequest: UpdateGameServerSessionRequest,
    DescribeGameServerSessionDetailsResponse: DescribeGameServerSessionDetailsResponse,
    StartGameServerSessionPlacementResponse: StartGameServerSessionPlacementResponse,
    GetGameServerSessionLogUrlRequest: GetGameServerSessionLogUrlRequest,
    DescribeFleetCapacityResponse: DescribeFleetCapacityResponse,
    DescribeFleetCapacityRequest: DescribeFleetCapacityRequest,
    CreateGameServerSessionResponse: CreateGameServerSessionResponse,
    DescribeScalingPoliciesRequest: DescribeScalingPoliciesRequest,
    DescribePlayerSessionsRequest: DescribePlayerSessionsRequest,
    PutScalingPolicyResponse: PutScalingPolicyResponse,
    JoinGameServerSessionResponse: JoinGameServerSessionResponse,
    DesiredPlayerSession: DesiredPlayerSession,
    TargetConfiguration: TargetConfiguration,
    DescribeGameServerSessionPlacementRequest: DescribeGameServerSessionPlacementRequest,
    DescribeScalingPoliciesResponse: DescribeScalingPoliciesResponse,
    PlacedPlayerSession: PlacedPlayerSession,
    GameServerSessionPlacement: GameServerSessionPlacement,
    FleetCapacity: FleetCapacity,
    UpdateFleetCapacityResponse: UpdateFleetCapacityResponse,
    PlayerSession: PlayerSession,
    CreateGameServerSessionRequest: CreateGameServerSessionRequest,
    GetGameServerSessionLogUrlResponse: GetGameServerSessionLogUrlResponse,
    GameServerSessionDetail: GameServerSessionDetail,
    DescribeGameServerSessionDetailsRequest: DescribeGameServerSessionDetailsRequest,
    StartGameServerSessionPlacementRequest: StartGameServerSessionPlacementRequest,
    GameServerSession: GameServerSession,
    DeleteScalingPolicyResponse: DeleteScalingPolicyResponse,
    UpdateFleetCapacityRequest: UpdateFleetCapacityRequest,
    DescribeGameServerSessionPlacementResponse: DescribeGameServerSessionPlacementResponse,
    PutScalingPolicyRequest: PutScalingPolicyRequest,
    StopGameServerSessionPlacementResponse: StopGameServerSessionPlacementResponse,

}
