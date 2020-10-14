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
 * DeleteGameServerSessionQueue请求参数结构体
 * @class
 */
class DeleteGameServerSessionQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话队列名字，长度1~128
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
 * 服务部署属性
 * @class
 */
class FleetAttributes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包 Id
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * 创建服务器舰队时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 服务器舰队资源描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetArn = null;

        /**
         * 服务器舰队 Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 服务器舰队类型，目前只支持ON_DEMAND
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetType = null;

        /**
         * 服务器类型，例如S5.LARGE8
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 服务器舰队名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 游戏会话保护策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewGameServerSessionProtectionPolicy = null;

        /**
         * 操作系统类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatingSystem = null;

        /**
         * 资源创建限制策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceCreationLimitPolicy || null}
         */
        this.ResourceCreationLimitPolicy = null;

        /**
         * 状态：新建、下载中、验证中、生成中、激活中、活跃、异常、删除中、结束
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 服务器舰队停止状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.StoppedActions = null;

        /**
         * 服务器舰队终止时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TerminationTime = null;

        /**
         * 时限保护超时时间，默认60分钟，最小值5，最大值1440
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GameServerSessionProtectionTimeLimit = null;

        /**
         * 计费状态：未开通、已开通、异常、欠费隔离、销毁、解冻
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillingStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.FleetArn = 'FleetArn' in params ? params.FleetArn : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.FleetType = 'FleetType' in params ? params.FleetType : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NewGameServerSessionProtectionPolicy = 'NewGameServerSessionProtectionPolicy' in params ? params.NewGameServerSessionProtectionPolicy : null;
        this.OperatingSystem = 'OperatingSystem' in params ? params.OperatingSystem : null;

        if (params.ResourceCreationLimitPolicy) {
            let obj = new ResourceCreationLimitPolicy();
            obj.deserialize(params.ResourceCreationLimitPolicy)
            this.ResourceCreationLimitPolicy = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.StoppedActions = 'StoppedActions' in params ? params.StoppedActions : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;
        this.GameServerSessionProtectionTimeLimit = 'GameServerSessionProtectionTimeLimit' in params ? params.GameServerSessionProtectionTimeLimit : null;
        this.BillingStatus = 'BillingStatus' in params ? params.BillingStatus : null;

    }
}

/**
 * CreateAsset返回参数结构体
 * @class
 */
class CreateAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包ID
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * 生成包的全局唯一资源标识符
         * @type {string || null}
         */
        this.AssetArn = null;

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
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetArn = 'AssetArn' in params ? params.AssetArn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 允许网络访问范围
 * @class
 */
class InboundPermission extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始端口号，最小值1025
         * @type {number || null}
         */
        this.FromPort = null;

        /**
         * IP 段范围，合法的 CIDR 地址类型，如所有IPv4来源：0.0.0.0/0
         * @type {string || null}
         */
        this.IpRange = null;

        /**
         * 协议类型：TCP或者UDP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 终止端口号，最大值60000
         * @type {number || null}
         */
        this.ToPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromPort = 'FromPort' in params ? params.FromPort : null;
        this.IpRange = 'IpRange' in params ? params.IpRange : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ToPort = 'ToPort' in params ? params.ToPort : null;

    }
}

/**
 * GetInstanceAccess返回参数结构体
 * @class
 */
class GetInstanceAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例登录所需要的凭据
         * @type {InstanceAccess || null}
         */
        this.InstanceAccess = null;

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

        if (params.InstanceAccess) {
            let obj = new InstanceAccess();
            obj.deserialize(params.InstanceAccess)
            this.InstanceAccess = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 生成包信息
 * @class
 */
class Asset extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包ID
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * 生成包名字，最小长度为1，最大长度为64
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 生成包版本，最小长度为1，最大长度为64
         * @type {string || null}
         */
        this.AssetVersion = null;

        /**
         * 生成包可运行的操作系统，暂时只支持CentOS7.16
         * @type {string || null}
         */
        this.OperateSystem = null;

        /**
         * 生成包状态，0代表上传中，1代表上传失败，2代表上传成功
         * @type {number || null}
         */
        this.Stauts = null;

        /**
         * 生成包大小
         * @type {string || null}
         */
        this.Size = null;

        /**
         * 生成包创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 生成包绑定的Fleet个数，最小值为0
         * @type {number || null}
         */
        this.BindFleetNum = null;

        /**
         * 生成包的全局唯一资源标识符
         * @type {string || null}
         */
        this.AssetArn = null;

        /**
         * 生成包支持的操作系统镜像id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 生成包支持的操作系统类型
         * @type {string || null}
         */
        this.OsType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetVersion = 'AssetVersion' in params ? params.AssetVersion : null;
        this.OperateSystem = 'OperateSystem' in params ? params.OperateSystem : null;
        this.Stauts = 'Stauts' in params ? params.Stauts : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BindFleetNum = 'BindFleetNum' in params ? params.BindFleetNum : null;
        this.AssetArn = 'AssetArn' in params ? params.AssetArn : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.OsType = 'OsType' in params ? params.OsType : null;

    }
}

/**
 * ListAliases返回参数结构体
 * @class
 */
class ListAliasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名对象数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Alias> || null}
         */
        this.Aliases = null;

        /**
         * 总数
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

        if (params.Aliases) {
            this.Aliases = new Array();
            for (let z in params.Aliases) {
                let obj = new Alias();
                obj.deserialize(params.Aliases[z]);
                this.Aliases.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGameServerSessionQueue返回参数结构体
 * @class
 */
class DeleteGameServerSessionQueueResponse extends  AbstractModel {
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
 * DescribeFleetAttributes请求参数结构体
 * @class
 */
class DescribeFleetAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Ids
         * @type {Array.<string> || null}
         */
        this.FleetIds = null;

        /**
         * 结果返回最大数量，最小值0，最大值1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回结果偏移，最小值0
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
 * ResolveAlias请求参数结构体
 * @class
 */
class ResolveAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要获取fleetId的别名ID
         * @type {string || null}
         */
        this.AliasId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;

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
 * DescribeFleetStatisticDetails请求参数结构体
 * @class
 */
class DescribeFleetStatisticDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 结果返回最大数量，最小值0，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回结果偏移，最小值0
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * GetInstanceAccess请求参数结构体
 * @class
 */
class GetInstanceAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 实例Id
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateFleet请求参数结构体
 * @class
 */
class CreateFleetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包 Id
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * 描述，最小长度0，最大长度100
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 网络配置
         * @type {Array.<InboundPermission> || null}
         */
        this.InboundPermissions = null;

        /**
         * 服务器类型，例如S5.LARGE8
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 服务器舰队类型，目前只支持ON_DEMAND类型
         * @type {string || null}
         */
        this.FleetType = null;

        /**
         * 服务器舰队名称，最小长度1，最大长度50
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 保护策略：不保护NoProtection、完全保护FullProtection、时限保护TimeLimitProtection
         * @type {string || null}
         */
        this.NewGameServerSessionProtectionPolicy = null;

        /**
         * VPC 网络 Id，弃用，对等链接已不再使用
         * @type {string || null}
         */
        this.PeerVpcId = null;

        /**
         * 资源创建限制策略
         * @type {ResourceCreationLimitPolicy || null}
         */
        this.ResourceCreationLimitPolicy = null;

        /**
         * 进程配置
         * @type {RuntimeConfiguration || null}
         */
        this.RuntimeConfiguration = null;

        /**
         * VPC 子网，弃用，对等链接已不再使用
         * @type {string || null}
         */
        this.SubNetId = null;

        /**
         * 时限保护超时时间，默认60分钟，最小值5，最大值1440
         * @type {number || null}
         */
        this.GameServerSessionProtectionTimeLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.InboundPermissions) {
            this.InboundPermissions = new Array();
            for (let z in params.InboundPermissions) {
                let obj = new InboundPermission();
                obj.deserialize(params.InboundPermissions[z]);
                this.InboundPermissions.push(obj);
            }
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.FleetType = 'FleetType' in params ? params.FleetType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NewGameServerSessionProtectionPolicy = 'NewGameServerSessionProtectionPolicy' in params ? params.NewGameServerSessionProtectionPolicy : null;
        this.PeerVpcId = 'PeerVpcId' in params ? params.PeerVpcId : null;

        if (params.ResourceCreationLimitPolicy) {
            let obj = new ResourceCreationLimitPolicy();
            obj.deserialize(params.ResourceCreationLimitPolicy)
            this.ResourceCreationLimitPolicy = obj;
        }

        if (params.RuntimeConfiguration) {
            let obj = new RuntimeConfiguration();
            obj.deserialize(params.RuntimeConfiguration)
            this.RuntimeConfiguration = obj;
        }
        this.SubNetId = 'SubNetId' in params ? params.SubNetId : null;
        this.GameServerSessionProtectionTimeLimit = 'GameServerSessionProtectionTimeLimit' in params ? params.GameServerSessionProtectionTimeLimit : null;

    }
}

/**
 * StartFleetActions请求参数结构体
 * @class
 */
class StartFleetActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 扩展策略，为空或者AUTO_SCALING
         * @type {Array.<string> || null}
         */
        this.Actions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Actions = 'Actions' in params ? params.Actions : null;

    }
}

/**
 * UpdateFleetPortSettings返回参数结构体
 * @class
 */
class UpdateFleetPortSettingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署 Id
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
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListFleets返回参数结构体
 * @class
 */
class ListFleetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署 Id 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FleetIds = null;

        /**
         * 服务部署 Id 总数，最小值0
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
        this.FleetIds = 'FleetIds' in params ? params.FleetIds : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAsset返回参数结构体
 * @class
 */
class DeleteAssetResponse extends  AbstractModel {
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
 * DescribeFleetUtilization返回参数结构体
 * @class
 */
class DescribeFleetUtilizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队利用率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FleetUtilization> || null}
         */
        this.FleetUtilization = null;

        /**
         * 总数，最小值0
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

        if (params.FleetUtilization) {
            this.FleetUtilization = new Array();
            for (let z in params.FleetUtilization) {
                let obj = new FleetUtilization();
                obj.deserialize(params.FleetUtilization[z]);
                this.FleetUtilization.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * 状态过滤条件，取值：ACTIVE表示活跃
         * @type {string || null}
         */
        this.StatusFilter = null;

        /**
         * 返回结果偏移，最小值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 结果返回最大数量，最小值0，最大值100
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
 * DeleteFleet请求参数结构体
 * @class
 */
class DeleteFleetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

    }
}

/**
 * DetachCcnInstances返回参数结构体
 * @class
 */
class DetachCcnInstancesResponse extends  AbstractModel {
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
 * DescribeFleetPortSettings返回参数结构体
 * @class
 */
class DescribeFleetPortSettingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InboundPermission> || null}
         */
        this.InboundPermissions = null;

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

        if (params.InboundPermissions) {
            this.InboundPermissions = new Array();
            for (let z in params.InboundPermissions) {
                let obj = new InboundPermission();
                obj.deserialize(params.InboundPermissions[z]);
                this.InboundPermissions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserQuotas请求参数结构体
 * @class
 */
class DescribeUserQuotasRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * UpdateAsset请求参数结构体
 * @class
 */
class UpdateAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包ID
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * 生成包名字，最小长度为1，最大长度为64
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 生成包版本，最小长度为1，最大长度为64
         * @type {string || null}
         */
        this.AssetVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetVersion = 'AssetVersion' in params ? params.AssetVersion : null;

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
 * UpdateFleetPortSettings请求参数结构体
 * @class
 */
class UpdateFleetPortSettingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 新增安全组
         * @type {Array.<InboundPermissionAuthorization> || null}
         */
        this.InboundPermissionAuthorizations = null;

        /**
         * 移除安全组
         * @type {Array.<InboundPermissionRevocations> || null}
         */
        this.InboundPermissionRevocations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

        if (params.InboundPermissionAuthorizations) {
            this.InboundPermissionAuthorizations = new Array();
            for (let z in params.InboundPermissionAuthorizations) {
                let obj = new InboundPermissionAuthorization();
                obj.deserialize(params.InboundPermissionAuthorizations[z]);
                this.InboundPermissionAuthorizations.push(obj);
            }
        }

        if (params.InboundPermissionRevocations) {
            this.InboundPermissionRevocations = new Array();
            for (let z in params.InboundPermissionRevocations) {
                let obj = new InboundPermissionRevocations();
                obj.deserialize(params.InboundPermissionRevocations[z]);
                this.InboundPermissionRevocations.push(obj);
            }
        }

    }
}

/**
 * DescribeFleetStatisticFlows请求参数结构体
 * @class
 */
class DescribeFleetStatisticFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 结果返回最大数量，最小值0，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回结果偏移，最小值0
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateAlias请求参数结构体
 * @class
 */
class UpdateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要更新的别名的唯一标识符
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * 名字，长度不小于1字符不超过1024字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 别名的可读说明，长度不小于1字符不超过1024字符
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 别名的路由配置
         * @type {RoutingStrategy || null}
         */
        this.RoutingStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.RoutingStrategy) {
            let obj = new RoutingStrategy();
            obj.deserialize(params.RoutingStrategy)
            this.RoutingStrategy = obj;
        }

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
 * JoinGameServerSessionBatch请求参数结构体
 * @class
 */
class JoinGameServerSessionBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 玩家ID列表，最小1组，最大25组
         * @type {Array.<string> || null}
         */
        this.PlayerIds = null;

        /**
         * 玩家自定义数据
         * @type {PlayerDataMap || null}
         */
        this.PlayerDataMap = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.PlayerIds = 'PlayerIds' in params ? params.PlayerIds : null;

        if (params.PlayerDataMap) {
            let obj = new PlayerDataMap();
            obj.deserialize(params.PlayerDataMap)
            this.PlayerDataMap = obj;
        }

    }
}

/**
 * 服务部署组对象
 * @class
 */
class GameServerSessionQueue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署组名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 服务部署组资源
         * @type {string || null}
         */
        this.GameServerSessionQueueArn = null;

        /**
         * 目的fleet（可为别名）列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GameServerSessionQueueDestination> || null}
         */
        this.Destinations = null;

        /**
         * 延迟策略集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PlayerLatencyPolicy> || null}
         */
        this.PlayerLatencyPolicies = null;

        /**
         * 超时时间
         * @type {number || null}
         */
        this.TimeoutInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.GameServerSessionQueueArn = 'GameServerSessionQueueArn' in params ? params.GameServerSessionQueueArn : null;

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new GameServerSessionQueueDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }

        if (params.PlayerLatencyPolicies) {
            this.PlayerLatencyPolicies = new Array();
            for (let z in params.PlayerLatencyPolicies) {
                let obj = new PlayerLatencyPolicy();
                obj.deserialize(params.PlayerLatencyPolicies[z]);
                this.PlayerLatencyPolicies.push(obj);
            }
        }
        this.TimeoutInSeconds = 'TimeoutInSeconds' in params ? params.TimeoutInSeconds : null;

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
 * DescribeRuntimeConfiguration返回参数结构体
 * @class
 */
class DescribeRuntimeConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署运行配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuntimeConfiguration || null}
         */
        this.RuntimeConfiguration = null;

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

        if (params.RuntimeConfiguration) {
            let obj = new RuntimeConfiguration();
            obj.deserialize(params.RuntimeConfiguration)
            this.RuntimeConfiguration = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 最大玩家数量，最小值不小于0
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * 别名ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * 创建者ID，最大长度不超过1024个ASCII字符
         * @type {string || null}
         */
        this.CreatorId = null;

        /**
         * 舰队ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 游戏属性，最大长度不超过16组
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * 游戏服务器会话属性详情，最大长度不超过4096个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * 游戏服务器会话自定义ID，最大长度不超过4096个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 幂等token，最大长度不超过48个ASCII字符
         * @type {string || null}
         */
        this.IdempotencyToken = null;

        /**
         * 游戏服务器会话名称，最大长度不超过1024个ASCII字符
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
 * UpdateAlias返回参数结构体
 * @class
 */
class UpdateAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Alias || null}
         */
        this.Alias = null;

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

        if (params.Alias) {
            let obj = new Alias();
            obj.deserialize(params.Alias)
            this.Alias = obj;
        }
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
 * UpdateGameServerSessionQueue返回参数结构体
 * @class
 */
class UpdateGameServerSessionQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署服务组对象
         * @type {GameServerSessionQueue || null}
         */
        this.GameServerSessionQueue = null;

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

        if (params.GameServerSessionQueue) {
            let obj = new GameServerSessionQueue();
            obj.deserialize(params.GameServerSessionQueue)
            this.GameServerSessionQueue = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGameServerSessionQueues请求参数结构体
 * @class
 */
class DescribeGameServerSessionQueuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话队列名称数组，单个名字长度1~128
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * 结果返回最大数量，最小值0，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回结果偏移，最小值0
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
        this.Names = 'Names' in params ? params.Names : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * GetUploadFederationToken返回参数结构体
 * @class
 */
class GetUploadFederationTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时证书的过期时间，Unix 时间戳，精确到秒
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 临时证书
         * @type {AssetCredentials || null}
         */
        this.AssetCredentials = null;

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
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;

        if (params.AssetCredentials) {
            let obj = new AssetCredentials();
            obj.deserialize(params.AssetCredentials)
            this.AssetCredentials = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeFleetStatisticSummary请求参数结构体
 * @class
 */
class DescribeFleetStatisticSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署 Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 玩家自定义数据
 * @class
 */
class PlayerDataMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家自定义数据键，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 玩家自定义数据值，最小长度不小于1个ASCII字符，最大长度不超过2048个ASCII字符
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
 * ResolveAlias返回参数结构体
 * @class
 */
class ResolveAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名指向的fleet的唯一标识符
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
 * DescribeInstancesExtend返回参数结构体
 * @class
 */
class DescribeInstancesExtendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceExtend> || null}
         */
        this.Instances = null;

        /**
         * 梳理信息总数
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new InstanceExtend();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 事件对象
 * @class
 */
class Event extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件代码，支持以下的事件代码

- FLEET_CREATED 
- FLEET_STATE_DOWNLOADING 
- FLEET_BINARY_DOWNLOAD_FAILED 
- FLEET_CREATION_EXTRACTING_BUILD
- FLEET_CREATION_VALIDATING_RUNTIME_CONFIG
- FLEET_STATE_VALIDATING
- FLEET_STATE_BUILDING 
- FLEET_STATE_ACTIVATING
- FLEET_STATE_ACTIVE
- FLEET_SCALING_EVENT
- FLEET_STATE_ERROR
- FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND
- FLEET_ACTIVATION_FAILED_NO_INSTANCES
- FLEET_VPC_PEERING_SUCCEEDED
- FLEET_VPC_PEERING_FAILED
- FLEET_VPC_PEERING_DELETE
- FLEET_INITIALIZATION_FAILED
- FLEET_DELETED
- FLEET_STATE_DELETING
- FLEET_ACTIVATION_FAILED
- GAME_SESSION_ACTIVATION_TIMEOUT
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * 事件的唯一标识 ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 事件的发生时间，UTC 时间格式
         * @type {string || null}
         */
        this.EventTime = null;

        /**
         * 事件的消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 事件相关的日志存储路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PreSignedLogUrl = null;

        /**
         * 事件对应的资源对象唯一标识 ID，例如服务器舰队 ID
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.PreSignedLogUrl = 'PreSignedLogUrl' in params ? params.PreSignedLogUrl : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * UpdateRuntimeConfiguration返回参数结构体
 * @class
 */
class UpdateRuntimeConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuntimeConfiguration || null}
         */
        this.RuntimeConfiguration = null;

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

        if (params.RuntimeConfiguration) {
            let obj = new RuntimeConfiguration();
            obj.deserialize(params.RuntimeConfiguration)
            this.RuntimeConfiguration = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCcnInstances返回参数结构体
 * @class
 */
class DescribeCcnInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网实例信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CcnInstanceSets> || null}
         */
        this.CcnInstanceSets = null;

        /**
         * 云联网实例个数，最小值为0
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

        if (params.CcnInstanceSets) {
            this.CcnInstanceSets = new Array();
            for (let z in params.CcnInstanceSets) {
                let obj = new CcnInstanceSets();
                obj.deserialize(params.CcnInstanceSets[z]);
                this.CcnInstanceSets.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLimit返回参数结构体
 * @class
 */
class DescribeInstanceLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限额
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 详细信息
         * @type {Array.<ExtraInfos> || null}
         */
        this.ExtraInfos = null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.ExtraInfos) {
            this.ExtraInfos = new Array();
            for (let z in params.ExtraInfos) {
                let obj = new ExtraInfos();
                obj.deserialize(params.ExtraInfos[z]);
                this.ExtraInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAsset返回参数结构体
 * @class
 */
class DescribeAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包信息
         * @type {Asset || null}
         */
        this.Asset = null;

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

        if (params.Asset) {
            let obj = new Asset();
            obj.deserialize(params.Asset)
            this.Asset = obj;
        }
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
 * DescribeFleetStatisticSummary返回参数结构体
 * @class
 */
class DescribeFleetStatisticSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总时长，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalUsedTimeSeconds = null;

        /**
         * 总流量，单位MB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalUsedFlowMegaBytes = null;

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
        this.TotalUsedTimeSeconds = 'TotalUsedTimeSeconds' in params ? params.TotalUsedTimeSeconds : null;
        this.TotalUsedFlowMegaBytes = 'TotalUsedFlowMegaBytes' in params ? params.TotalUsedFlowMegaBytes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务部署利用率
 * @class
 */
class FleetUtilization extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏会话数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActiveGameServerSessionCount = null;

        /**
         * 活跃进程数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActiveServerProcessCount = null;

        /**
         * 当前游戏玩家数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CurrentPlayerSessionCount = null;

        /**
         * 服务部署 Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 最大玩家会话数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActiveGameServerSessionCount = 'ActiveGameServerSessionCount' in params ? params.ActiveGameServerSessionCount : null;
        this.ActiveServerProcessCount = 'ActiveServerProcessCount' in params ? params.ActiveServerProcessCount : null;
        this.CurrentPlayerSessionCount = 'CurrentPlayerSessionCount' in params ? params.CurrentPlayerSessionCount : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;

    }
}

/**
 * DescribeGameServerSessionQueues返回参数结构体
 * @class
 */
class DescribeGameServerSessionQueuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话队列数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GameServerSessionQueue> || null}
         */
        this.GameServerSessionQueues = null;

        /**
         * 游戏服务器会话队列总数
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

        if (params.GameServerSessionQueues) {
            this.GameServerSessionQueues = new Array();
            for (let z in params.GameServerSessionQueues) {
                let obj = new GameServerSessionQueue();
                obj.deserialize(params.GameServerSessionQueues[z]);
                this.GameServerSessionQueues.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAlias请求参数结构体
 * @class
 */
class DeleteAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的别名ID
         * @type {string || null}
         */
        this.AliasId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;

    }
}

/**
 * DescribeFleetAttributes返回参数结构体
 * @class
 */
class DescribeFleetAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FleetAttributes> || null}
         */
        this.FleetAttributes = null;

        /**
         * 服务器舰队总数，最小值0
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

        if (params.FleetAttributes) {
            this.FleetAttributes = new Array();
            for (let z in params.FleetAttributes) {
                let obj = new FleetAttributes();
                obj.deserialize(params.FleetAttributes[z]);
                this.FleetAttributes.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetUploadCredentials返回参数结构体
 * @class
 */
class GetUploadCredentialsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上传文件授权信息Auth
         * @type {string || null}
         */
        this.BucketAuth = null;

        /**
         * Bucket名字
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 生成包所在地域
         * @type {string || null}
         */
        this.AssetRegion = null;

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
        this.BucketAuth = 'BucketAuth' in params ? params.BucketAuth : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.AssetRegion = 'AssetRegion' in params ? params.AssetRegion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttachCcnInstances请求参数结构体
 * @class
 */
class AttachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 云联网账号 Uin
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 云联网 Id
         * @type {string || null}
         */
        this.CcnId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

    }
}

/**
 * 需要移除的安全组
 * @class
 */
class InboundPermissionRevocations extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始端口号
         * @type {number || null}
         */
        this.FromPort = null;

        /**
         * IP 端范围，CIDR 方式换分
         * @type {string || null}
         */
        this.IpRange = null;

        /**
         * 协议类型：UDP或者TCP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 终止端口号
         * @type {number || null}
         */
        this.ToPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromPort = 'FromPort' in params ? params.FromPort : null;
        this.IpRange = 'IpRange' in params ? params.IpRange : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ToPort = 'ToPort' in params ? params.ToPort : null;

    }
}

/**
 * DescribeAssets请求参数结构体
 * @class
 */
class DescribeAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包可部署地域
         * @type {string || null}
         */
        this.AssetRegion = null;

        /**
         * 偏移，代表页数，与asset实际数量相关
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 前端界面每页显示的最大条数，不超过100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索条件，支持包ID或包名字过滤，该字段会逐步废弃，建议使用 Filters 字段
         * @type {string || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetRegion = 'AssetRegion' in params ? params.AssetRegion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * SetServerWeight返回参数结构体
 * @class
 */
class SetServerWeightResponse extends  AbstractModel {
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
         * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 单次查询记录数上限
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
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
 * GetUploadCredentials请求参数结构体
 * @class
 */
class GetUploadCredentialsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包所在地域，详见产品支持的 [地域列表](https://cloud.tencent.com/document/api/1165/42053#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)
         * @type {string || null}
         */
        this.AssetRegion = null;

        /**
         * 生成包的ZIP包名，例如：server.zip
         * @type {string || null}
         */
        this.BucketKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetRegion = 'AssetRegion' in params ? params.AssetRegion : null;
        this.BucketKey = 'BucketKey' in params ? params.BucketKey : null;

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
         * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 单次查询记录数上限
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * 玩家ID，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 玩家会话ID，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
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
 * DeleteAsset请求参数结构体
 * @class
 */
class DeleteAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包ID
         * @type {string || null}
         */
        this.AssetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;

    }
}

/**
 * DescribeAssets返回参数结构体
 * @class
 */
class DescribeAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 生成包列表
         * @type {Array.<Asset> || null}
         */
        this.Assets = null;

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

        if (params.Assets) {
            this.Assets = new Array();
            for (let z in params.Assets) {
                let obj = new Asset();
                obj.deserialize(params.Assets[z]);
                this.Assets.push(obj);
            }
        }
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
 * DescribeCcnInstances请求参数结构体
 * @class
 */
class DescribeCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

    }
}

/**
 * DescribeFleetStatisticDetails返回参数结构体
 * @class
 */
class DescribeFleetStatisticDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署统计详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FleetStatisticDetail> || null}
         */
        this.DetailList = null;

        /**
         * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 统计时间类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeType = null;

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

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new FleetStatisticDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TimeType = 'TimeType' in params ? params.TimeType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateGameServerSessionQueue请求参数结构体
 * @class
 */
class UpdateGameServerSessionQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话队列名字，长度1~128
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 目的服务部署（可为别名）列表
         * @type {Array.<GameServerSessionQueueDestination> || null}
         */
        this.Destinations = null;

        /**
         * 延迟策略集合
         * @type {Array.<PlayerLatencyPolicy> || null}
         */
        this.PlayerLatencyPolicies = null;

        /**
         * 超时时间
         * @type {number || null}
         */
        this.TimeoutInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new GameServerSessionQueueDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }

        if (params.PlayerLatencyPolicies) {
            this.PlayerLatencyPolicies = new Array();
            for (let z in params.PlayerLatencyPolicies) {
                let obj = new PlayerLatencyPolicy();
                obj.deserialize(params.PlayerLatencyPolicies[z]);
                this.PlayerLatencyPolicies.push(obj);
            }
        }
        this.TimeoutInSeconds = 'TimeoutInSeconds' in params ? params.TimeoutInSeconds : null;

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
 * 上传Asset的临时证书
 * @class
 */
class AssetCredentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时证书密钥ID
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时证书密钥Key
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * 临时证书Token
         * @type {string || null}
         */
        this.Token = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;

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
 * 服务部署组目的集合
 * @class
 */
class GameServerSessionQueueDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署组目的的资源描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DestinationArn = null;

        /**
         * 服务部署组目的的状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestinationArn = 'DestinationArn' in params ? params.DestinationArn : null;
        this.FleetStatus = 'FleetStatus' in params ? params.FleetStatus : null;

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

        /**
         * 服务器伸缩容间隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScalingInterval = null;

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
        this.ScalingInterval = 'ScalingInterval' in params ? params.ScalingInterval : null;

    }
}

/**
 * SetServerWeight请求参数结构体
 * @class
 */
class SetServerWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 权重
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

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
         * 日志下载URL，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
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
 * DeleteFleet返回参数结构体
 * @class
 */
class DeleteFleetResponse extends  AbstractModel {
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
 * 服务器实例类型信息
 * @class
 */
class InstanceTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型名，例如“标准型SA1”
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 类型，例如"SA1.SMALL1"
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * CPU，例如1核就是1
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存，例如2G就是2
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 网络收到包,例如25万PPS就是25
         * @type {number || null}
         */
        this.NetworkCard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.NetworkCard = 'NetworkCard' in params ? params.NetworkCard : null;

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
 * CreateAlias返回参数结构体
 * @class
 */
class CreateAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名对象
         * @type {Alias || null}
         */
        this.Alias = null;

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

        if (params.Alias) {
            let obj = new Alias();
            obj.deserialize(params.Alias)
            this.Alias = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源创建规则
 * @class
 */
class ResourceCreationLimitPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建数量，最小值1，默认2
         * @type {number || null}
         */
        this.NewGameServerSessionsPerCreator = null;

        /**
         * 单位时间，最小值1，默认3
         * @type {number || null}
         */
        this.PolicyPeriodInMinutes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NewGameServerSessionsPerCreator = 'NewGameServerSessionsPerCreator' in params ? params.NewGameServerSessionsPerCreator : null;
        this.PolicyPeriodInMinutes = 'PolicyPeriodInMinutes' in params ? params.PolicyPeriodInMinutes : null;

    }
}

/**
 * ListFleets请求参数结构体
 * @class
 */
class ListFleetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包 Id
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * 结果返回最大值，最小值0，最大值1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 结果返回偏移，最小值0
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
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateFleetAttributes请求参数结构体
 * @class
 */
class UpdateFleetAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 服务器舰队描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 服务器舰队名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 新建游戏会话保护策略
         * @type {string || null}
         */
        this.NewGameSessionProtectionPolicy = null;

        /**
         * 资源创建限制策略
         * @type {ResourceCreationLimitPolicy || null}
         */
        this.ResourceCreationLimitPolicy = null;

        /**
         * 时限保护超时时间，默认60分钟
         * @type {number || null}
         */
        this.GameServerSessionProtectionTimeLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NewGameSessionProtectionPolicy = 'NewGameSessionProtectionPolicy' in params ? params.NewGameSessionProtectionPolicy : null;

        if (params.ResourceCreationLimitPolicy) {
            let obj = new ResourceCreationLimitPolicy();
            obj.deserialize(params.ResourceCreationLimitPolicy)
            this.ResourceCreationLimitPolicy = obj;
        }
        this.GameServerSessionProtectionTimeLimit = 'GameServerSessionProtectionTimeLimit' in params ? params.GameServerSessionProtectionTimeLimit : null;

    }
}

/**
 * 实例类型限额配置额外信息
 * @class
 */
class ExtraInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例类型，例如S5.LARGE8
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例限额数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.TotalInstances = 'TotalInstances' in params ? params.TotalInstances : null;

    }
}

/**
 * AttachCcnInstances返回参数结构体
 * @class
 */
class AttachCcnInstancesResponse extends  AbstractModel {
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
 * DescribeFleetPortSettings请求参数结构体
 * @class
 */
class DescribeFleetPortSettingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

    }
}

/**
 * StopFleetActions返回参数结构体
 * @class
 */
class StopFleetActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
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
 * DeleteAlias返回参数结构体
 * @class
 */
class DeleteAliasResponse extends  AbstractModel {
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeAlias返回参数结构体
 * @class
 */
class DescribeAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Alias || null}
         */
        this.Alias = null;

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

        if (params.Alias) {
            let obj = new Alias();
            obj.deserialize(params.Alias)
            this.Alias = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopFleetActions请求参数结构体
 * @class
 */
class StopFleetActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 服务器舰队扩展策略，为空或者AUTO_SCALING
         * @type {Array.<string> || null}
         */
        this.Actions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Actions = 'Actions' in params ? params.Actions : null;

    }
}

/**
 * 实例信息
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * dns
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatingSystem = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.OperatingSystem = 'OperatingSystem' in params ? params.OperatingSystem : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * SearchGameServerSessions请求参数结构体
 * @class
 */
class SearchGameServerSessionsRequest extends  AbstractModel {
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
         * 搜索条件表达式，支持如下变量
gameServerSessionName 游戏会话名称 String
gameServerSessionId 游戏会话ID String
maximumSessions 最大的玩家会话数 Number
creationTimeMillis 创建时间，单位：毫秒 Number
playerSessionCount 当前玩家会话数 Number
hasAvailablePlayerSessions 是否有可用玩家数 String 取值true或false
gameServerSessionProperties 游戏会话属性 String

表达式String类型 等于=，不等于<>判断
表示Number类型支持 =,<>,>,>=,<,<=
         * @type {string || null}
         */
        this.FilterExpression = null;

        /**
         * 排序条件关键字
支持排序字段
gameServerSessionName 游戏会话名称 String
gameServerSessionId 游戏会话ID String
maximumSessions 最大的玩家会话数 Number
creationTimeMillis 创建时间，单位：毫秒 Number
playerSessionCount 当前玩家会话数 Number
         * @type {string || null}
         */
        this.SortExpression = null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.FilterExpression = 'FilterExpression' in params ? params.FilterExpression : null;
        this.SortExpression = 'SortExpression' in params ? params.SortExpression : null;

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
         * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
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
 * DescribeUserQuota请求参数结构体
 * @class
 */
class DescribeUserQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
         * @type {number || null}
         */
        this.ResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * DescribeInstanceLimit请求参数结构体
 * @class
 */
class DescribeInstanceLimitRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * CreateGameServerSessionQueue返回参数结构体
 * @class
 */
class CreateGameServerSessionQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话队列
         * @type {GameServerSessionQueue || null}
         */
        this.GameServerSessionQueue = null;

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

        if (params.GameServerSessionQueue) {
            let obj = new GameServerSessionQueue();
            obj.deserialize(params.GameServerSessionQueue)
            this.GameServerSessionQueue = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceTypes请求参数结构体
 * @class
 */
class DescribeInstanceTypesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

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
 * DescribeAlias请求参数结构体
 * @class
 */
class DescribeAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要检索的队列别名的唯一标识符
         * @type {string || null}
         */
        this.AliasId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;

    }
}

/**
 * CreateAlias请求参数结构体
 * @class
 */
class CreateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名字，长度不小于1字符不超过1024字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 别名的路由配置
         * @type {RoutingStrategy || null}
         */
        this.RoutingStrategy = null;

        /**
         * 别名的可读说明，长度不小于1字符不超过1024字符
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.RoutingStrategy) {
            let obj = new RoutingStrategy();
            obj.deserialize(params.RoutingStrategy)
            this.RoutingStrategy = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;

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
         * 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 最大玩家数量，最小值不小于0
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * 游戏服务器会话名称，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
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
 * CreateAsset请求参数结构体
 * @class
 */
class CreateAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包的ZIP包名，例如：server.zip
         * @type {string || null}
         */
        this.BucketKey = null;

        /**
         * 生成包名字，最小长度为1，最大长度为64
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 生成包版本，最小长度为1，最大长度为64
         * @type {string || null}
         */
        this.AssetVersion = null;

        /**
         * 生成包所在地域，详见产品支持的 [地域列表](https://cloud.tencent.com/document/api/1165/42053#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)
         * @type {string || null}
         */
        this.AssetRegion = null;

        /**
         * 生成包可运行的操作系统，暂时只有CentOS7.16
         * @type {string || null}
         */
        this.OperateSystem = null;

        /**
         * 生成包支持的操作系统镜像id
         * @type {string || null}
         */
        this.ImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BucketKey = 'BucketKey' in params ? params.BucketKey : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetVersion = 'AssetVersion' in params ? params.AssetVersion : null;
        this.AssetRegion = 'AssetRegion' in params ? params.AssetRegion : null;
        this.OperateSystem = 'OperateSystem' in params ? params.OperateSystem : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

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
         * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
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
 * 访问实例所需要的凭据
 * @class
 */
class Credentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * ssh私钥
         * @type {string || null}
         */
        this.Secret = null;

        /**
         * 用户名
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
        this.Secret = 'Secret' in params ? params.Secret : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

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
         * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
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
 * 用于新增安全组
 * @class
 */
class InboundPermissionAuthorization extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始端口号
         * @type {number || null}
         */
        this.FromPort = null;

        /**
         * IP 端范围，CIDR方式划分
         * @type {string || null}
         */
        this.IpRange = null;

        /**
         * 协议类型
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 终止端口号
         * @type {number || null}
         */
        this.ToPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromPort = 'FromPort' in params ? params.FromPort : null;
        this.IpRange = 'IpRange' in params ? params.IpRange : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ToPort = 'ToPort' in params ? params.ToPort : null;

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
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * CVM实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 结果返回最大数量，最小值0，最大值100
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回结果偏移，最小值0
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 配额资源
 * @class
 */
class QuotaResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型，1生成包、2服务部署、3别名、4游戏服务器队列、5实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 总额度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HardLimit = null;

        /**
         * 剩余额度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Remaining = null;

        /**
         * 额外信息，可能为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtraInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.HardLimit = 'HardLimit' in params ? params.HardLimit : null;
        this.Remaining = 'Remaining' in params ? params.Remaining : null;
        this.ExtraInfo = 'ExtraInfo' in params ? params.ExtraInfo : null;

    }
}

/**
 * DescribeFleetStatisticFlows返回参数结构体
 * @class
 */
class DescribeFleetStatisticFlowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量统计列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FleetStatisticFlows> || null}
         */
        this.UsedFlowList = null;

        /**
         * 时长统计列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FleetStatisticTimes> || null}
         */
        this.UsedTimeList = null;

        /**
         * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 统计时间类型，取值：小时和天
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeType = null;

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

        if (params.UsedFlowList) {
            this.UsedFlowList = new Array();
            for (let z in params.UsedFlowList) {
                let obj = new FleetStatisticFlows();
                obj.deserialize(params.UsedFlowList[z]);
                this.UsedFlowList.push(obj);
            }
        }

        if (params.UsedTimeList) {
            this.UsedTimeList = new Array();
            for (let z in params.UsedTimeList) {
                let obj = new FleetStatisticTimes();
                obj.deserialize(params.UsedTimeList[z]);
                this.UsedTimeList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TimeType = 'TimeType' in params ? params.TimeType : null;
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
 * CreateFleet返回参数结构体
 * @class
 */
class CreateFleetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FleetAttributes || null}
         */
        this.FleetAttributes = null;

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

        if (params.FleetAttributes) {
            let obj = new FleetAttributes();
            obj.deserialize(params.FleetAttributes)
            this.FleetAttributes = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateFleetAttributes返回参数结构体
 * @class
 */
class UpdateFleetAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署Id
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
 * DescribeFleetUtilization请求参数结构体
 * @class
 */
class DescribeFleetUtilizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Ids
         * @type {Array.<string> || null}
         */
        this.FleetIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetIds = 'FleetIds' in params ? params.FleetIds : null;

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
         * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 单次查询记录数上限
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
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
         * 创建者ID，最大长度不超过1024个ASCII字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorId = null;

        /**
         * 当前玩家数量，最小值不小于0
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
         * 游戏属性，最大长度不超过16组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * 游戏服务器会话属性详情，最大长度不超过4096个ASCII字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * CVM IP地址
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 对战进程详情，最大长度不超过400000个ASCII字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchmakerData = null;

        /**
         * 最大玩家数量，最小值不小于0
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * 游戏服务器会话名称，最大长度不超过1024个ASCII字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 玩家会话创建策略（ACCEPT_ALL,DENY_ALL）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlayerSessionCreationPolicy = null;

        /**
         * 端口号，最小值不小于1，最大值不超过60000
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 游戏服务器会话状态（ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR）
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
         * 实例类型，最大长度不超过128个ASCII字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 当前自定义数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CurrentCustomCount = null;

        /**
         * 最大自定义数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxCustomCount = null;

        /**
         * 权重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 会话可用性状态，是否被屏蔽（Enable,Disable）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AvailabilityStatus = null;

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
        this.CurrentCustomCount = 'CurrentCustomCount' in params ? params.CurrentCustomCount : null;
        this.MaxCustomCount = 'MaxCustomCount' in params ? params.MaxCustomCount : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.AvailabilityStatus = 'AvailabilityStatus' in params ? params.AvailabilityStatus : null;

    }
}

/**
 * 延迟策略
 * @class
 */
class PlayerLatencyPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任意player允许的最大延迟，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaximumIndividualPlayerLatencyMilliseconds = null;

        /**
         * 放置新GameServerSession时强制实施策略的时间长度，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyDurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaximumIndividualPlayerLatencyMilliseconds = 'MaximumIndividualPlayerLatencyMilliseconds' in params ? params.MaximumIndividualPlayerLatencyMilliseconds : null;
        this.PolicyDurationSeconds = 'PolicyDurationSeconds' in params ? params.PolicyDurationSeconds : null;

    }
}

/**
 * UpdateRuntimeConfiguration请求参数结构体
 * @class
 */
class UpdateRuntimeConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 服务器舰队配置
         * @type {RuntimeConfiguration || null}
         */
        this.RuntimeConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

        if (params.RuntimeConfiguration) {
            let obj = new RuntimeConfiguration();
            obj.deserialize(params.RuntimeConfiguration)
            this.RuntimeConfiguration = obj;
        }

    }
}

/**
 * 游戏属性详情
 * @class
 */
class GameProperty extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名称，最大长度不超过32个ASCII字符
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 属性值，最大长度不超过96个ASCII字符
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
 * 舰队统计总时长
 * @class
 */
class FleetStatisticTimes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 统计总时长，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalUsedTimeSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.TotalUsedTimeSeconds = 'TotalUsedTimeSeconds' in params ? params.TotalUsedTimeSeconds : null;

    }
}

/**
 * 舰队统计流量
 * @class
 */
class FleetStatisticFlows extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总流量，单位MB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalUsedFlowMegaBytes = null;

        /**
         * 统计开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalUsedFlowMegaBytes = 'TotalUsedFlowMegaBytes' in params ? params.TotalUsedFlowMegaBytes : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;

    }
}

/**
 * DescribeAsset请求参数结构体
 * @class
 */
class DescribeAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包ID
         * @type {string || null}
         */
        this.AssetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;

    }
}

/**
 * DescribeInstancesExtend请求参数结构体
 * @class
 */
class DescribeInstancesExtendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务部署ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 返回结果偏移，最小值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 结果返回最大数量，最小值0，最大值100
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
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
 * StartFleetActions返回参数结构体
 * @class
 */
class StartFleetActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
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
 * JoinGameServerSession请求参数结构体
 * @class
 */
class JoinGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 玩家ID，最大长度1024个ASCII字符
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 玩家自定义数据，最大长度2048个ASCII字符
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
 * DescribeUserQuotas返回参数结构体
 * @class
 */
class DescribeUserQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QuotaResource> || null}
         */
        this.QuotaResource = null;

        /**
         * 配额信息列表总数，最小值0
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.QuotaResource) {
            this.QuotaResource = new Array();
            for (let z in params.QuotaResource) {
                let obj = new QuotaResource();
                obj.deserialize(params.QuotaResource[z]);
                this.QuotaResource.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetUploadFederationToken请求参数结构体
 * @class
 */
class GetUploadFederationTokenRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeInstanceTypes返回参数结构体
 * @class
 */
class DescribeInstanceTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器实例类型列表
         * @type {Array.<InstanceTypeInfo> || null}
         */
        this.InstanceTypeList = null;

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

        if (params.InstanceTypeList) {
            this.InstanceTypeList = new Array();
            for (let z in params.InstanceTypeList) {
                let obj = new InstanceTypeInfo();
                obj.deserialize(params.InstanceTypeList[z]);
                this.InstanceTypeList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchGameServerSessions返回参数结构体
 * @class
 */
class SearchGameServerSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GameServerSession> || null}
         */
        this.GameServerSessions = null;

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
 * DescribeFleetEvents返回参数结构体
 * @class
 */
class DescribeFleetEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的事件列表
         * @type {Array.<Event> || null}
         */
        this.Events = null;

        /**
         * 返回的事件总数
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

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new Event();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 路由策略
 * @class
 */
class RoutingStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名的路由策略的类型SIMPLE/TERMINAL
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 别名指向的队列的唯一标识符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 与终端路由策略一起使用的消息文本
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Type = 'Type' in params ? params.Type : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Message = 'Message' in params ? params.Message : null;

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
 * DescribeUserQuota返回参数结构体
 * @class
 */
class DescribeUserQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QuotaResource || null}
         */
        this.QuotaResource = null;

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

        if (params.QuotaResource) {
            let obj = new QuotaResource();
            obj.deserialize(params.QuotaResource)
            this.QuotaResource = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFleetEvents请求参数结构体
 * @class
 */
class DescribeFleetEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 分页时返回服务部署事件的数量，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页时的数据偏移量，默认为0
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateAsset返回参数结构体
 * @class
 */
class UpdateAssetResponse extends  AbstractModel {
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
 * ListAliases请求参数结构体
 * @class
 */
class ListAliasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名字，长度不小于1字符不超过1024字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 路由策略类型，有效值SIMPLE|TERMINAL
         * @type {string || null}
         */
        this.RoutingStrategyType = null;

        /**
         * 要返回的最大结果数，最小值1
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序字段，例如CreationTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式，有效值asc|desc
         * @type {string || null}
         */
        this.OrderWay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.RoutingStrategyType = 'RoutingStrategyType' in params ? params.RoutingStrategyType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderWay = 'OrderWay' in params ? params.OrderWay : null;

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
         * 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 游戏服务器会话运行的CVM地址
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 玩家自定义数据，最大长度2048个ASCII字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlayerData = null;

        /**
         * 玩家ID，最大长度1024个ASCII字符
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
         * 端口号，最小值不小于1，最大值不超过60000
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 玩家会话的状态（RESERVED = 1,ACTIVE = 2,COMPLETED = 3,TIMEDOUT = 4）
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
 * CreateGameServerSessionQueue请求参数结构体
 * @class
 */
class CreateGameServerSessionQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏服务器会话队列名称，长度1~128
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 目的服务部署（可为别名）列表
         * @type {Array.<GameServerSessionQueueDestination> || null}
         */
        this.Destinations = null;

        /**
         * 延迟策略集合
         * @type {Array.<PlayerLatencyPolicy> || null}
         */
        this.PlayerLatencyPolicies = null;

        /**
         * 超时时间（单位秒，默认值为600秒）
         * @type {number || null}
         */
        this.TimeoutInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new GameServerSessionQueueDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }

        if (params.PlayerLatencyPolicies) {
            this.PlayerLatencyPolicies = new Array();
            for (let z in params.PlayerLatencyPolicies) {
                let obj = new PlayerLatencyPolicy();
                obj.deserialize(params.PlayerLatencyPolicies[z]);
                this.PlayerLatencyPolicies.push(obj);
            }
        }
        this.TimeoutInSeconds = 'TimeoutInSeconds' in params ? params.TimeoutInSeconds : null;

    }
}

/**
 * 别名对象
 * @class
 */
class Alias extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别名的唯一标识符
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * 别名的全局唯一资源标识符
         * @type {string || null}
         */
        this.AliasArn = null;

        /**
         * 名字，长度不小于1字符不超过1024字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 别名的可读说明，长度不小于1字符不超过1024字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 别名的路由配置
         * @type {RoutingStrategy || null}
         */
        this.RoutingStrategy = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 上次修改此数据对象的时间
         * @type {string || null}
         */
        this.LastUpdatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.AliasArn = 'AliasArn' in params ? params.AliasArn : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.RoutingStrategy) {
            let obj = new RoutingStrategy();
            obj.deserialize(params.RoutingStrategy)
            this.RoutingStrategy = obj;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastUpdatedTime = 'LastUpdatedTime' in params ? params.LastUpdatedTime : null;

    }
}

/**
 * DescribeRuntimeConfiguration请求参数结构体
 * @class
 */
class DescribeRuntimeConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

    }
}

/**
 * 运行配置
 * @class
 */
class RuntimeConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏会话进程超时
         * @type {number || null}
         */
        this.GameServerSessionActivationTimeoutSeconds = null;

        /**
         * 最大游戏会话数
         * @type {number || null}
         */
        this.MaxConcurrentGameServerSessionActivations = null;

        /**
         * 服务进程配置
         * @type {Array.<ServerProcesse> || null}
         */
        this.ServerProcesses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionActivationTimeoutSeconds = 'GameServerSessionActivationTimeoutSeconds' in params ? params.GameServerSessionActivationTimeoutSeconds : null;
        this.MaxConcurrentGameServerSessionActivations = 'MaxConcurrentGameServerSessionActivations' in params ? params.MaxConcurrentGameServerSessionActivations : null;

        if (params.ServerProcesses) {
            this.ServerProcesses = new Array();
            for (let z in params.ServerProcesses) {
                let obj = new ServerProcesse();
                obj.deserialize(params.ServerProcesses[z]);
                this.ServerProcesses.push(obj);
            }
        }

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
         * 动态扩缩容配置策略数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScalingPolicy> || null}
         */
        this.ScalingPolicies = null;

        /**
         * 动态扩缩容配置策略总数
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
 * DetachCcnInstances请求参数结构体
 * @class
 */
class DetachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

    }
}

/**
 * 游戏服务进程
 * @class
 */
class ServerProcesse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 并发执行数量
         * @type {number || null}
         */
        this.ConcurrentExecutions = null;

        /**
         * 启动路径：/local/game/ 或 C:\game\
         * @type {string || null}
         */
        this.LaunchPath = null;

        /**
         * 启动参数
         * @type {string || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConcurrentExecutions = 'ConcurrentExecutions' in params ? params.ConcurrentExecutions : null;
        this.LaunchPath = 'LaunchPath' in params ? params.LaunchPath : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;

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
 * 实例访问凭证信息
 * @class
 */
class InstanceAccess extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问实例所需要的凭据
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * 服务部署Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例公网IP
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.OperatingSystem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.OperatingSystem = 'OperatingSystem' in params ? params.OperatingSystem : null;

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

        /**
         * 服务器伸缩容间隔
         * @type {number || null}
         */
        this.ScalingInterval = null;

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
        this.ScalingInterval = 'ScalingInterval' in params ? params.ScalingInterval : null;

    }
}

/**
 * 舰队统计详情
 * @class
 */
class FleetStatisticDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 舰队ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceIP = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 总时长，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalUsedTimeSeconds = null;

        /**
         * 总流量，单位MB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalUsedFlowMegaBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceIP = 'InstanceIP' in params ? params.InstanceIP : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TotalUsedTimeSeconds = 'TotalUsedTimeSeconds' in params ? params.TotalUsedTimeSeconds : null;
        this.TotalUsedFlowMegaBytes = 'TotalUsedFlowMegaBytes' in params ? params.TotalUsedFlowMegaBytes : null;

    }
}

/**
 * JoinGameServerSessionBatch返回参数结构体
 * @class
 */
class JoinGameServerSessionBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家会话列表，最大25组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PlayerSession> || null}
         */
        this.PlayerSessions = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例扩展信息
 * @class
 */
class InstanceExtend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Instance || null}
         */
        this.Instance = null;

        /**
         * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 健康进程数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HealthyProcessCnt = null;

        /**
         * 活跃进程数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActiveProcessCnt = null;

        /**
         * 当前游戏会话总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GameSessionCnt = null;

        /**
         * 最大游戏会话数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxGameSessionCnt = null;

        /**
         * 当前玩家会话数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PlayerSessionCnt = null;

        /**
         * 最大玩家会话数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxPlayerSessionCnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Instance) {
            let obj = new Instance();
            obj.deserialize(params.Instance)
            this.Instance = obj;
        }
        this.State = 'State' in params ? params.State : null;
        this.HealthyProcessCnt = 'HealthyProcessCnt' in params ? params.HealthyProcessCnt : null;
        this.ActiveProcessCnt = 'ActiveProcessCnt' in params ? params.ActiveProcessCnt : null;
        this.GameSessionCnt = 'GameSessionCnt' in params ? params.GameSessionCnt : null;
        this.MaxGameSessionCnt = 'MaxGameSessionCnt' in params ? params.MaxGameSessionCnt : null;
        this.PlayerSessionCnt = 'PlayerSessionCnt' in params ? params.PlayerSessionCnt : null;
        this.MaxPlayerSessionCnt = 'MaxPlayerSessionCnt' in params ? params.MaxPlayerSessionCnt : null;

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
         * 基于规则的扩缩容配置服务部署ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 扩缩容调整值
         * @type {number || null}
         */
        this.ScalingAdjustment = null;

        /**
         * 扩缩容调整类型
         * @type {string || null}
         */
        this.ScalingAdjustmentType = null;

        /**
         * 扩缩容指标阈值
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 策略比较符，取值：>,>=,<,<=
         * @type {string || null}
         */
        this.ComparisonOperator = null;

        /**
         * 持续时间长度（分钟）
         * @type {number || null}
         */
        this.EvaluationPeriods = null;

        /**
         * 指标名称
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 策略类型，取值：TargetBased表示基于目标的策略；RuleBased表示基于规则的策略
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 扩缩容配置类型
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
        this.ScalingAdjustment = 'ScalingAdjustment' in params ? params.ScalingAdjustment : null;
        this.ScalingAdjustmentType = 'ScalingAdjustmentType' in params ? params.ScalingAdjustmentType : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.ComparisonOperator = 'ComparisonOperator' in params ? params.ComparisonOperator : null;
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

/**
 * 云联网实例信息
 * @class
 */
class CcnInstanceSets extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网账号 Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 云联网 Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 云联网关联时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 云联网实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 云联网状态：申请中、已连接、已过期、已拒绝、已删除、失败的、关联中、解关联中、解关联失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.State = 'State' in params ? params.State : null;

    }
}

module.exports = {
    DeleteGameServerSessionQueueRequest: DeleteGameServerSessionQueueRequest,
    FleetAttributes: FleetAttributes,
    CreateAssetResponse: CreateAssetResponse,
    InboundPermission: InboundPermission,
    GetInstanceAccessResponse: GetInstanceAccessResponse,
    Asset: Asset,
    ListAliasesResponse: ListAliasesResponse,
    DeleteGameServerSessionQueueResponse: DeleteGameServerSessionQueueResponse,
    DescribeFleetAttributesRequest: DescribeFleetAttributesRequest,
    ResolveAliasRequest: ResolveAliasRequest,
    StartGameServerSessionPlacementResponse: StartGameServerSessionPlacementResponse,
    DescribeFleetStatisticDetailsRequest: DescribeFleetStatisticDetailsRequest,
    GetInstanceAccessRequest: GetInstanceAccessRequest,
    CreateFleetRequest: CreateFleetRequest,
    StartFleetActionsRequest: StartFleetActionsRequest,
    UpdateFleetPortSettingsResponse: UpdateFleetPortSettingsResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    ListFleetsResponse: ListFleetsResponse,
    DeleteAssetResponse: DeleteAssetResponse,
    DescribeFleetUtilizationResponse: DescribeFleetUtilizationResponse,
    DescribeScalingPoliciesRequest: DescribeScalingPoliciesRequest,
    DeleteFleetRequest: DeleteFleetRequest,
    DetachCcnInstancesResponse: DetachCcnInstancesResponse,
    DescribeFleetPortSettingsResponse: DescribeFleetPortSettingsResponse,
    DescribeUserQuotasRequest: DescribeUserQuotasRequest,
    UpdateAssetRequest: UpdateAssetRequest,
    DesiredPlayerSession: DesiredPlayerSession,
    UpdateFleetPortSettingsRequest: UpdateFleetPortSettingsRequest,
    DescribeFleetStatisticFlowsRequest: DescribeFleetStatisticFlowsRequest,
    UpdateAliasRequest: UpdateAliasRequest,
    GameServerSessionPlacement: GameServerSessionPlacement,
    JoinGameServerSessionBatchRequest: JoinGameServerSessionBatchRequest,
    GameServerSessionQueue: GameServerSessionQueue,
    UpdateFleetCapacityResponse: UpdateFleetCapacityResponse,
    DescribeRuntimeConfigurationResponse: DescribeRuntimeConfigurationResponse,
    CreateGameServerSessionRequest: CreateGameServerSessionRequest,
    UpdateAliasResponse: UpdateAliasResponse,
    GameServerSessionDetail: GameServerSessionDetail,
    UpdateGameServerSessionQueueResponse: UpdateGameServerSessionQueueResponse,
    DescribeGameServerSessionQueuesRequest: DescribeGameServerSessionQueuesRequest,
    GetUploadFederationTokenResponse: GetUploadFederationTokenResponse,
    DeleteScalingPolicyResponse: DeleteScalingPolicyResponse,
    DescribeFleetStatisticSummaryRequest: DescribeFleetStatisticSummaryRequest,
    PlayerDataMap: PlayerDataMap,
    ResolveAliasResponse: ResolveAliasResponse,
    DescribeInstancesExtendResponse: DescribeInstancesExtendResponse,
    Event: Event,
    UpdateRuntimeConfigurationResponse: UpdateRuntimeConfigurationResponse,
    DescribeCcnInstancesResponse: DescribeCcnInstancesResponse,
    DescribeInstanceLimitResponse: DescribeInstanceLimitResponse,
    DescribeAssetResponse: DescribeAssetResponse,
    PlacedPlayerSession: PlacedPlayerSession,
    DescribeFleetStatisticSummaryResponse: DescribeFleetStatisticSummaryResponse,
    FleetUtilization: FleetUtilization,
    DescribeGameServerSessionQueuesResponse: DescribeGameServerSessionQueuesResponse,
    DeleteAliasRequest: DeleteAliasRequest,
    DescribeFleetAttributesResponse: DescribeFleetAttributesResponse,
    GetUploadCredentialsResponse: GetUploadCredentialsResponse,
    AttachCcnInstancesRequest: AttachCcnInstancesRequest,
    InboundPermissionRevocations: InboundPermissionRevocations,
    DescribeAssetsRequest: DescribeAssetsRequest,
    SetServerWeightResponse: SetServerWeightResponse,
    ScalingPolicy: ScalingPolicy,
    DescribeGameServerSessionsRequest: DescribeGameServerSessionsRequest,
    GetUploadCredentialsRequest: GetUploadCredentialsRequest,
    DescribePlayerSessionsRequest: DescribePlayerSessionsRequest,
    DeleteAssetRequest: DeleteAssetRequest,
    DescribeAssetsResponse: DescribeAssetsResponse,
    DescribeFleetCapacityRequest: DescribeFleetCapacityRequest,
    DescribeCcnInstancesRequest: DescribeCcnInstancesRequest,
    DescribeFleetStatisticDetailsResponse: DescribeFleetStatisticDetailsResponse,
    UpdateGameServerSessionQueueRequest: UpdateGameServerSessionQueueRequest,
    JoinGameServerSessionResponse: JoinGameServerSessionResponse,
    AssetCredentials: AssetCredentials,
    TargetConfiguration: TargetConfiguration,
    DescribeGameServerSessionPlacementRequest: DescribeGameServerSessionPlacementRequest,
    GameServerSessionQueueDestination: GameServerSessionQueueDestination,
    FleetCapacity: FleetCapacity,
    SetServerWeightRequest: SetServerWeightRequest,
    GetGameServerSessionLogUrlResponse: GetGameServerSessionLogUrlResponse,
    DeleteFleetResponse: DeleteFleetResponse,
    StartGameServerSessionPlacementRequest: StartGameServerSessionPlacementRequest,
    InstanceTypeInfo: InstanceTypeInfo,
    DescribeGameServerSessionPlacementResponse: DescribeGameServerSessionPlacementResponse,
    CreateAliasResponse: CreateAliasResponse,
    ResourceCreationLimitPolicy: ResourceCreationLimitPolicy,
    ListFleetsRequest: ListFleetsRequest,
    UpdateFleetAttributesRequest: UpdateFleetAttributesRequest,
    ExtraInfos: ExtraInfos,
    AttachCcnInstancesResponse: AttachCcnInstancesResponse,
    DescribeFleetPortSettingsRequest: DescribeFleetPortSettingsRequest,
    StopFleetActionsResponse: StopFleetActionsResponse,
    DeleteAliasResponse: DeleteAliasResponse,
    DeleteScalingPolicyRequest: DeleteScalingPolicyRequest,
    DescribeAliasResponse: DescribeAliasResponse,
    StopFleetActionsRequest: StopFleetActionsRequest,
    Instance: Instance,
    SearchGameServerSessionsRequest: SearchGameServerSessionsRequest,
    DescribePlayerSessionsResponse: DescribePlayerSessionsResponse,
    DescribeUserQuotaRequest: DescribeUserQuotaRequest,
    DescribeInstanceLimitRequest: DescribeInstanceLimitRequest,
    CreateGameServerSessionQueueResponse: CreateGameServerSessionQueueResponse,
    DescribeInstanceTypesRequest: DescribeInstanceTypesRequest,
    PlayerLatency: PlayerLatency,
    StopGameServerSessionPlacementRequest: StopGameServerSessionPlacementRequest,
    DescribeAliasRequest: DescribeAliasRequest,
    CreateAliasRequest: CreateAliasRequest,
    UpdateGameServerSessionRequest: UpdateGameServerSessionRequest,
    CreateAssetRequest: CreateAssetRequest,
    DescribeGameServerSessionDetailsResponse: DescribeGameServerSessionDetailsResponse,
    Credentials: Credentials,
    GetGameServerSessionLogUrlRequest: GetGameServerSessionLogUrlRequest,
    InboundPermissionAuthorization: InboundPermissionAuthorization,
    CreateGameServerSessionResponse: CreateGameServerSessionResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    QuotaResource: QuotaResource,
    DescribeFleetStatisticFlowsResponse: DescribeFleetStatisticFlowsResponse,
    InstanceCounts: InstanceCounts,
    CreateFleetResponse: CreateFleetResponse,
    UpdateFleetAttributesResponse: UpdateFleetAttributesResponse,
    DescribeFleetUtilizationRequest: DescribeFleetUtilizationRequest,
    DescribeGameServerSessionDetailsRequest: DescribeGameServerSessionDetailsRequest,
    GameServerSession: GameServerSession,
    PlayerLatencyPolicy: PlayerLatencyPolicy,
    UpdateRuntimeConfigurationRequest: UpdateRuntimeConfigurationRequest,
    GameProperty: GameProperty,
    FleetStatisticTimes: FleetStatisticTimes,
    FleetStatisticFlows: FleetStatisticFlows,
    DescribeAssetRequest: DescribeAssetRequest,
    DescribeInstancesExtendRequest: DescribeInstancesExtendRequest,
    DescribeGameServerSessionsResponse: DescribeGameServerSessionsResponse,
    StartFleetActionsResponse: StartFleetActionsResponse,
    JoinGameServerSessionRequest: JoinGameServerSessionRequest,
    DescribeUserQuotasResponse: DescribeUserQuotasResponse,
    GetUploadFederationTokenRequest: GetUploadFederationTokenRequest,
    DescribeInstanceTypesResponse: DescribeInstanceTypesResponse,
    SearchGameServerSessionsResponse: SearchGameServerSessionsResponse,
    DescribeFleetEventsResponse: DescribeFleetEventsResponse,
    RoutingStrategy: RoutingStrategy,
    DescribeFleetCapacityResponse: DescribeFleetCapacityResponse,
    DescribeUserQuotaResponse: DescribeUserQuotaResponse,
    DescribeFleetEventsRequest: DescribeFleetEventsRequest,
    UpdateAssetResponse: UpdateAssetResponse,
    ListAliasesRequest: ListAliasesRequest,
    PlayerSession: PlayerSession,
    PutScalingPolicyResponse: PutScalingPolicyResponse,
    CreateGameServerSessionQueueRequest: CreateGameServerSessionQueueRequest,
    Alias: Alias,
    DescribeRuntimeConfigurationRequest: DescribeRuntimeConfigurationRequest,
    RuntimeConfiguration: RuntimeConfiguration,
    DescribeScalingPoliciesResponse: DescribeScalingPoliciesResponse,
    DetachCcnInstancesRequest: DetachCcnInstancesRequest,
    ServerProcesse: ServerProcesse,
    UpdateGameServerSessionResponse: UpdateGameServerSessionResponse,
    InstanceAccess: InstanceAccess,
    UpdateFleetCapacityRequest: UpdateFleetCapacityRequest,
    FleetStatisticDetail: FleetStatisticDetail,
    JoinGameServerSessionBatchResponse: JoinGameServerSessionBatchResponse,
    InstanceExtend: InstanceExtend,
    PutScalingPolicyRequest: PutScalingPolicyRequest,
    StopGameServerSessionPlacementResponse: StopGameServerSessionPlacementResponse,
    CcnInstanceSets: CcnInstanceSets,

}
