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
         * 服务器舰队停止状态，为空时表示自动扩缩容
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

        /**
         * 标签列表，最大长度50组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 数据盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-32000GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，10-32000GB；容量以10为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DiskInfo> || null}
         */
        this.DataDiskInfo = null;

        /**
         * 系统盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-500GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，50-500GB；容量以1为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiskInfo || null}
         */
        this.SystemDiskInfo = null;

        /**
         * 云联网相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RelatedCcnInfo> || null}
         */
        this.RelatedCcnInfos = null;

        /**
         * fleet公网出带宽最大值，默认100Mbps，范围1-200Mbps
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.DataDiskInfo) {
            this.DataDiskInfo = new Array();
            for (let z in params.DataDiskInfo) {
                let obj = new DiskInfo();
                obj.deserialize(params.DataDiskInfo[z]);
                this.DataDiskInfo.push(obj);
            }
        }

        if (params.SystemDiskInfo) {
            let obj = new DiskInfo();
            obj.deserialize(params.SystemDiskInfo)
            this.SystemDiskInfo = obj;
        }

        if (params.RelatedCcnInfos) {
            this.RelatedCcnInfos = new Array();
            for (let z in params.RelatedCcnInfos) {
                let obj = new RelatedCcnInfo();
                obj.deserialize(params.RelatedCcnInfos[z]);
                this.RelatedCcnInfos.push(obj);
            }
        }
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

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

        /**
         * 生成包资源类型，ASSET 或者 IMAGE；ASSET 代表是原有生成包类型，IMAGE 为扩充使用镜像类型
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 镜像资源共享类型，当 ResourceType 为 IMAGE 时该字段有意义，SHARED 表示共享、SHARED_IMAGE 表示未共享；ResourceType 为 ASSET 时这里返回 UNKNOWN_SHARED 用于占位
         * @type {string || null}
         */
        this.SharingStatus = null;

        /**
         * 标签列表，最大长度50组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.SharingStatus = 'SharingStatus' in params ? params.SharingStatus : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
 * UpdateBucketCORSOpt返回参数结构体
 * @class
 */
class UpdateBucketCORSOptResponse extends  AbstractModel {
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
         * 结果返回最大数量，默认值20，最大值100
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
 * GetGameServerInstanceLogUrl返回参数结构体
 * @class
 */
class GetGameServerInstanceLogUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志下载URL的数组，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PresignedUrls = null;

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 是否还有没拉取完的
         * @type {boolean || null}
         */
        this.HasNext = null;

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
        this.PresignedUrls = 'PresignedUrls' in params ? params.PresignedUrls : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.HasNext = 'HasNext' in params ? params.HasNext : null;
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
 * DescribeFleetStatisticDetails请求参数结构体
 * @class
 */
class DescribeFleetStatisticDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 查询开始时间，时间格式：YYYY-MM-DD hh:mm:ss
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间，时间格式：YYYY-MM-DD hh:mm:ss
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
 * DescribeAssetSystems请求参数结构体
 * @class
 */
class DescribeAssetSystemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包支持的操作系统类型
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 生成包支持的操作系统位数
         * @type {number || null}
         */
        this.OsBit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsBit = 'OsBit' in params ? params.OsBit : null;

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
         * 服务器舰队ID
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
         * 服务器类型，参数根据[获取服务器实例类型列表](https://cloud.tencent.com/document/product/1165/48732)接口获取。
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
         * VPC 网络 Id，对等连接已不再使用
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
         * VPC 子网，对等连接已不再使用
         * @type {string || null}
         */
        this.SubNetId = null;

        /**
         * 时限保护超时时间，默认60分钟，最小值5，最大值1440；当NewGameSessionProtectionPolicy为TimeLimitProtection时参数有效
         * @type {number || null}
         */
        this.GameServerSessionProtectionTimeLimit = null;

        /**
         * 标签列表，最大长度50组
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 系统盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-500GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，50-500GB；容量以1为单位
         * @type {DiskInfo || null}
         */
        this.SystemDiskInfo = null;

        /**
         * 数据盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-32000GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，10-32000GB；容量以10为单位
         * @type {Array.<DiskInfo> || null}
         */
        this.DataDiskInfo = null;

        /**
         * 云联网信息，包含对应的账号信息及所属id
         * @type {Array.<CcnInfo> || null}
         */
        this.CcnInfos = null;

        /**
         * fleet公网出带宽最大值，默认100Mbps，范围1-200Mbps
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.SystemDiskInfo) {
            let obj = new DiskInfo();
            obj.deserialize(params.SystemDiskInfo)
            this.SystemDiskInfo = obj;
        }

        if (params.DataDiskInfo) {
            this.DataDiskInfo = new Array();
            for (let z in params.DataDiskInfo) {
                let obj = new DiskInfo();
                obj.deserialize(params.DataDiskInfo[z]);
                this.DataDiskInfo.push(obj);
            }
        }

        if (params.CcnInfos) {
            this.CcnInfos = new Array();
            for (let z in params.CcnInfos) {
                let obj = new CcnInfo();
                obj.deserialize(params.CcnInfos[z]);
                this.CcnInfos.push(obj);
            }
        }
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

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
         * 服务器舰队扩展策略，值为["AUTO_SCALING"]
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
         * 服务器舰队 Id 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FleetIds = null;

        /**
         * 服务器舰队 Id 总数，最小值0
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
 * DescribeFleetRelatedResources返回参数结构体
 * @class
 */
class DescribeFleetRelatedResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 与服务器舰队关联的资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FleetRelatedResource> || null}
         */
        this.Resources = null;

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

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new FleetRelatedResource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
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
         * 服务器舰队ID
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
 * 定时器策略消息
 * @class
 */
class TimerScalingPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时器ID，进行encode，填写时更新
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimerId = null;

        /**
         * 定时器名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimerName = null;

        /**
         * 定时器状态(未定义0、未生效1、生效中2、已停止3、已过期4)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimerStatus = null;

        /**
         * 定时器弹性伸缩策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TimerFleetCapacity || null}
         */
        this.TimerFleetCapacity = null;

        /**
         * 重复周期配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TimerConfiguration || null}
         */
        this.TimerConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimerId = 'TimerId' in params ? params.TimerId : null;
        this.TimerName = 'TimerName' in params ? params.TimerName : null;
        this.TimerStatus = 'TimerStatus' in params ? params.TimerStatus : null;

        if (params.TimerFleetCapacity) {
            let obj = new TimerFleetCapacity();
            obj.deserialize(params.TimerFleetCapacity)
            this.TimerFleetCapacity = obj;
        }

        if (params.TimerConfiguration) {
            let obj = new TimerConfiguration();
            obj.deserialize(params.TimerConfiguration)
            this.TimerConfiguration = obj;
        }

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
 * 云联网相关信息
 * @class
 */
class CcnInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网所属账号
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 云联网id
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
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

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
         * 游戏服务器允许同时连接到游戏会话的最大玩家数量，最小值1，最大值为玩家会话最大限额
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

        /**
         * 标签列表，最大长度50组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
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
         * 服务器舰队ID
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
         * 服务器舰队运行配置信息
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

        /**
         * 资源过滤字段，可以按照资源名称、资源ID和标签进行过滤- 资源名称过滤    - Key: 固定字符串 "resource:name"    - Values: 资源名称数组（游戏服务器会话队列支持多个名称的过滤）- 标签过滤    - 通过标签键过滤        - Key: 固定字符串 "tag:key"        - Values 不传    - 通过标签键值过滤        - Key: 固定字符串 "tag:key-value"        - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"]
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

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
         * 服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 查询开始时间，时间格式: YYYY-MM-DD hh:mm:ss
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间，时间格式: YYYY-MM-DD hh:mm:ss
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
 * 标签结构体
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键，最大长度127字节
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值，最大长度255字节
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
 * PutTimerScalingPolicy请求参数结构体
 * @class
 */
class PutTimerScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时器策略消息
         * @type {TimerScalingPolicy || null}
         */
        this.TimerScalingPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TimerScalingPolicy) {
            let obj = new TimerScalingPolicy();
            obj.deserialize(params.TimerScalingPolicy)
            this.TimerScalingPolicy = obj;
        }

    }
}

/**
 * 云联网相关信息描述
 * @class
 */
class RelatedCcnInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云联网所属账号
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 云联网 ID
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 关联云联网状态
         * @type {string || null}
         */
        this.AttachType = null;

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
        this.AttachType = 'AttachType' in params ? params.AttachType : null;

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
 * 生成包支持操作系统详细信息
 * @class
 */
class AssetSupportSys extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包操作系统的镜像Id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 生成包操作系统的类型
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 生成包操作系统的位数
         * @type {number || null}
         */
        this.OsBit = null;

        /**
         * 生成包操作系统的版本
         * @type {string || null}
         */
        this.OsVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsBit = 'OsBit' in params ? params.OsBit : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;

    }
}

/**
 * DeleteTimerScalingPolicy返回参数结构体
 * @class
 */
class DeleteTimerScalingPolicyResponse extends  AbstractModel {
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
 * DescribeTimerScalingPolicies请求参数结构体
 * @class
 */
class DescribeTimerScalingPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩缩容配置服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 定时器名称
         * @type {string || null}
         */
        this.TimerName = null;

        /**
         * 定时器开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 定时器结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 页大小
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
        this.TimerName = 'TimerName' in params ? params.TimerName : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * UpdateBucketCORSOpt请求参数结构体
 * @class
 */
class UpdateBucketCORSOptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 允许的访问来源;具体参见 [cos文档](https://cloud.tencent.com/document/product/436/8279)
         * @type {Array.<string> || null}
         */
        this.AllowedOrigins = null;

        /**
         * 允许的 HTTP 操作方法;可以配置多个:PUT、GET、POST、HEAD。[cos文档](https://cloud.tencent.com/document/product/436/8279)
         * @type {Array.<string> || null}
         */
        this.AllowedMethods = null;

        /**
         * 用于指定允许浏览器发送 CORS 请求时携带的自定义 HTTP 请求头部;可以配置*，代表允许所有头部，为了避免遗漏，推荐配置为*。[cos文档](https://cloud.tencent.com/document/product/436/8279)
         * @type {Array.<string> || null}
         */
        this.AllowedHeaders = null;

        /**
         * 跨域资源共享配置的有效时间，单位为秒。[cos文档](https://cloud.tencent.com/document/product/436/8279)
         * @type {number || null}
         */
        this.MaxAgeSeconds = null;

        /**
         * 允许浏览器获取的 CORS 请求响应中的头部，不区分大小写；默认情况下浏览器只能访问简单响应头部：Cache-Control、Content-Type、Expires、Last-Modified，如果需要访问其他响应头部，需要添加 ExposeHeader 配置。[cos文档](https://cloud.tencent.com/document/product/436/8279)
         * @type {Array.<string> || null}
         */
        this.ExposeHeaders = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllowedOrigins = 'AllowedOrigins' in params ? params.AllowedOrigins : null;
        this.AllowedMethods = 'AllowedMethods' in params ? params.AllowedMethods : null;
        this.AllowedHeaders = 'AllowedHeaders' in params ? params.AllowedHeaders : null;
        this.MaxAgeSeconds = 'MaxAgeSeconds' in params ? params.MaxAgeSeconds : null;
        this.ExposeHeaders = 'ExposeHeaders' in params ? params.ExposeHeaders : null;

    }
}

/**
 * DescribeAssetSystems返回参数结构体
 * @class
 */
class DescribeAssetSystemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成包支持的操作系统类型列表
         * @type {Array.<AssetSupportSys> || null}
         */
        this.AssetSupportSys = null;

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

        if (params.AssetSupportSys) {
            this.AssetSupportSys = new Array();
            for (let z in params.AssetSupportSys) {
                let obj = new AssetSupportSys();
                obj.deserialize(params.AssetSupportSys[z]);
                this.AssetSupportSys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 生成包支持的可部署 [地域列表](https://cloud.tencent.com/document/api/1165/42053#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)
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

        /**
         * 资源过滤字段，可以按照资源名称、资源ID和标签进行过滤- 资源名称过滤    - Key: 固定字符串 "resource:name"    - Values: 资源名称数组（生成包当前仅支持单个名称的过滤）- 资源ID过滤    - Key: 固定字符串 "resource:resourceId"    - Values: 生成包ID数组（生成包当前仅支持单个生成包ID的过滤）- 标签过滤    - 通过标签键过滤        - Key: 固定字符串 "tag:key"        - Values 不传    - 通过标签键值过滤        - Key: 固定字符串 "tag:key-value"        - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"]
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

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
         * 服务器舰队ID列表
         * @type {Array.<string> || null}
         */
        this.FleetIds = null;

        /**
         * 结果返回最大数量，最大值 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回结果偏移，最小值 0
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
 * DeleteTimerScalingPolicy请求参数结构体
 * @class
 */
class DeleteTimerScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时器ID, 进行encode
         * @type {string || null}
         */
        this.TimerId = null;

        /**
         * 扩缩容配置服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 定时器名称
         * @type {string || null}
         */
        this.TimerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimerId = 'TimerId' in params ? params.TimerId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.TimerName = 'TimerName' in params ? params.TimerName : null;

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
 * DescribeFleetRelatedResources请求参数结构体
 * @class
 */
class DescribeFleetRelatedResourcesRequest extends  AbstractModel {
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
         * 目的服务器舰队（可为别名）列表
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
         * 服务器类型，如S3.LARGE8,S2.LARGE8,S5.LARGE8等
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
         * 服务器伸缩容间隔，单位分钟，最小值3，最大值30，默认值10
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
         * 服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 权重，最小值0，最大值10，默认值5
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
 * UpdateBucketAccelerateOpt请求参数结构体
 * @class
 */
class UpdateBucketAccelerateOptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * true为开启全球加速，false为关闭
         * @type {boolean || null}
         */
        this.Allowed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Allowed = 'Allowed' in params ? params.Allowed : null;

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
         * 开始部署游戏服务器会话的唯一标识符，最大值48个ASCII字符，模式：[a-zA-Z0-9-]+
         * @type {string || null}
         */
        this.PlacementId = null;

        /**
         * 游戏服务器会话队列名称
         * @type {string || null}
         */
        this.GameServerSessionQueueName = null;

        /**
         * 游戏服务器允许同时连接到游戏会话的最大玩家数量，最小值1，最大值为玩家会话最大限额
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
         * 游戏服务器会话数据，最大长度不超过4096个ASCII字符
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * 游戏服务器会话名称，最大长度不超过4096个ASCII字符
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
         * 单位时间，最小值1，默认3，单位分钟
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
         * 结果返回最大值，暂未使用
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 结果返回偏移，暂未使用
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 资源过滤字段，可以按照资源名称和标签进行过滤- 资源名称过滤    - Key: 固定字符串 "resource:name"    - Values: 资源名称数组（当前仅支持单个名称的过滤）- 标签过滤    - 通过标签键过滤        - Key: 固定字符串 "tag:key"        - Values 不传    - 通过标签键值过滤        - Key: 固定字符串 "tag:key-value"        - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"]
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

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
         * 服务器舰队描述，最小长度0，最大长度100
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 服务器舰队名称，最小长度1，最大长度50
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 保护策略：不保护NoProtection、完全保护FullProtection、时限保护TimeLimitProtection
         * @type {string || null}
         */
        this.NewGameSessionProtectionPolicy = null;

        /**
         * 资源创建限制策略
         * @type {ResourceCreationLimitPolicy || null}
         */
        this.ResourceCreationLimitPolicy = null;

        /**
         * 时限保护超时时间，默认60分钟，最小值5，最大值1440；当NewGameSessionProtectionPolicy为TimeLimitProtection时参数有效
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
         * 服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 扩缩容策略名称，最小长度为0，最大长度为1024
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
         * 服务器舰队扩展策略，值为["AUTO_SCALING"]
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

        /**
         * 实例权重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 实例是否保留, 1-保留，0-不保留,默认
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReserveValue = null;

        /**
         * 实例的私有IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

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
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.ReserveValue = 'ReserveValue' in params ? params.ReserveValue : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

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
         * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
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

例如：
FilterExpression取值
playerSessionCount>=2 AND hasAvailablePlayerSessions=true"
表示查找至少有两个玩家，而且有可用玩家会话的游戏会话。
FilterExpression取值
gameServerSessionProperties.K1 = 'V1' AND gameServerSessionProperties.K2 = 'V2' OR gameServerSessionProperties.K3 = 'V3'

表示
查询满足如下游戏服务器会话属性的游戏会话
{
    "GameProperties":[
        {
            "Key":"K1",
            "Value":"V1"
        },
        {
            "Key":"K2",
            "Value":"V2"
        },
        {
            "Key":"K3",
            "Value":"V3"
        }
    ]
}
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
 * SetServerReserved返回参数结构体
 * @class
 */
class SetServerReservedResponse extends  AbstractModel {
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
 * UpdateFleetName返回参数结构体
 * @class
 */
class UpdateFleetNameResponse extends  AbstractModel {
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
 * 定时器弹性伸缩策略
 * @class
 */
class TimerFleetCapacity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩缩容配置服务器舰队ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 期望实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DesiredInstances = null;

        /**
         * 最小实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 最大实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 伸缩容间隔，单位：分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScalingInterval = null;

        /**
         * 扩缩容类型（手动1，自动2、未定义0）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScalingType = null;

        /**
         * 基于目标的扩展策略的设置
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
        this.DesiredInstances = 'DesiredInstances' in params ? params.DesiredInstances : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.ScalingInterval = 'ScalingInterval' in params ? params.ScalingInterval : null;
        this.ScalingType = 'ScalingType' in params ? params.ScalingType : null;

        if (params.TargetConfiguration) {
            let obj = new TargetConfiguration();
            obj.deserialize(params.TargetConfiguration)
            this.TargetConfiguration = obj;
        }

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

        /**
         * 标签列表，最大长度50组
         * @type {Array.<Tag> || null}
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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.RoutingStrategy) {
            let obj = new RoutingStrategy();
            obj.deserialize(params.RoutingStrategy)
            this.RoutingStrategy = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 定时器取值配置
 * @class
 */
class TimerValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每X天，执行一次(重复周期-按天/单次)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Day = null;

        /**
         * 每月从第x天，执行一次(重复周期-按月)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FromDay = null;

        /**
         * 每月到第x天，执行一次(重复周期-按月)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ToDay = null;

        /**
         * 重复周期-按周，周几（多个值,取值周一(1,2,3,4,5,6,7)周日）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.WeekDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Day = 'Day' in params ? params.Day : null;
        this.FromDay = 'FromDay' in params ? params.FromDay : null;
        this.ToDay = 'ToDay' in params ? params.ToDay : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;

    }
}

/**
 * CopyFleet返回参数结构体
 * @class
 */
class CopyFleetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FleetAttributes> || null}
         */
        this.FleetAttributes = null;

        /**
         * 服务器舰队数量
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
         * 玩家会话创建策略，包括允许所有玩家加入和禁止所有玩家加入（ACCEPT_ALL,DENY_ALL）
         * @type {string || null}
         */
        this.PlayerSessionCreationPolicy = null;

        /**
         * 保护策略，包括不保护、时限保护和完全保护(NoProtection,TimeLimitProtection,FullProtection)
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
         * 路由策略类型，有效值常规别名(SIMPLE)、终止别名(TERMINAL)
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

        /**
         * 资源过滤字段，可以按照资源名称和标签进行过滤- 资源名称过滤    - Key: 固定字符串 "resource:name"    - Values: 资源名称数组（舰队当前仅支持单个名称的过滤）- 标签过滤    - 通过标签键过滤        - Key: 固定字符串 "tag:key"        - Values 不传    - 通过标签键值过滤        - Key: 固定字符串 "tag:key-value"        - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"]
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

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
         * 生成包可运行的操作系统，若传入参数为CentOS7.16则不需要传入ImageId字段，否则，需要传入Imageid字段（该方式是为了兼容之前的版本，后续建议使用ImageId来替代该字段）。这里可通过[DescribeAssetSystems](https://cloud.tencent.com/document/product/1165/49191)接口获取asset支持的操作系统进行传入（使用AssetSupportSys的OsVersion字段）
         * @type {string || null}
         */
        this.OperateSystem = null;

        /**
         * 生成包支持的操作系统镜像id，若传入OperateSystem字段的值是CentOS7.16，则不需要传入该值；如果不是，则需要通过[DescribeAssetSystems](https://cloud.tencent.com/document/product/1165/49191)接口获取asset支持的操作系统ImageId进行传入
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 标签列表，最大长度50组
         * @type {Array.<Tag> || null}
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
        this.BucketKey = 'BucketKey' in params ? params.BucketKey : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetVersion = 'AssetVersion' in params ? params.AssetVersion : null;
        this.AssetRegion = 'AssetRegion' in params ? params.AssetRegion : null;
        this.OperateSystem = 'OperateSystem' in params ? params.OperateSystem : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
         * 服务器舰队ID
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

        /**
         * CVM实例公网IP
         * @type {string || null}
         */
        this.IpAddress = null;

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
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;

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
 * 磁盘存储信息
 * @class
 */
class DiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 磁盘类型，支持：高性能云硬盘（CLOUD_PREMIUM）、SSD云硬盘（CLOUD_SSD）
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘：可选硬盘容量，50-500GB，数字以1为单位，数据盘：可选硬盘容量：10-32000GB，数字以10为单位；当磁盘类型为SSD云硬盘（CLOUD_SSD）最小大小为 100GB
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * 重复周期配置
 * @class
 */
class TimerConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时器重复周期类型（未定义0，单次1、按天2、按月3、按周4）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimerType = null;

        /**
         * 定时器取值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TimerValue || null}
         */
        this.TimerValue = null;

        /**
         * 定时器开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 定时器结束时间
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
        this.TimerType = 'TimerType' in params ? params.TimerType : null;

        if (params.TimerValue) {
            let obj = new TimerValue();
            obj.deserialize(params.TimerValue)
            this.TimerValue = obj;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * 过滤字段内容
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤属性的 key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 过滤属性的 values 值
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

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
         * 服务器舰队Id
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
 * 与服务器舰队关联的资源，如别名和队列
 * @class
 */
class FleetRelatedResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型。
- ALIAS：别名
- QUEUE：队列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 资源ID，目前仅支持别名ID和队列名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源所在区域，如ap-shanghai、na-siliconvalley等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;

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
 * CreateAssetWithImage返回参数结构体
 * @class
 */
class CreateAssetWithImageResponse extends  AbstractModel {
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
         * 服务器舰队ID
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

        /**
         * CVM实例公网IP
         * @type {string || null}
         */
        this.IpAddress = null;

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
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;

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
 * UpdateBucketAccelerateOpt返回参数结构体
 * @class
 */
class UpdateBucketAccelerateOptResponse extends  AbstractModel {
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
 * DescribeTimerScalingPolicies返回参数结构体
 * @class
 */
class DescribeTimerScalingPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时器扩缩容策略配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimerScalingPolicy> || null}
         */
        this.TimerScalingPolicies = null;

        /**
         * 定时器总数
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

        if (params.TimerScalingPolicies) {
            this.TimerScalingPolicies = new Array();
            for (let z in params.TimerScalingPolicies) {
                let obj = new TimerScalingPolicy();
                obj.deserialize(params.TimerScalingPolicies[z]);
                this.TimerScalingPolicies.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CopyFleet请求参数结构体
 * @class
 */
class CopyFleetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 复制数量，最小值1，最大值为剩余配额，可以根据[获取用户配额](https://cloud.tencent.com/document/product/1165/48732)接口获取。
         * @type {number || null}
         */
        this.CopyNumber = null;

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
         * 服务器类型，参数根据[获取服务器实例类型列表](https://cloud.tencent.com/document/product/1165/48732)接口获取。
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
         * 时限保护超时时间，默认60分钟，最小值5，最大值1440；当NewGameSessionProtectionPolicy为TimeLimitProtection时参数有效
         * @type {number || null}
         */
        this.GameServerSessionProtectionTimeLimit = null;

        /**
         * 是否选择扩缩容：SCALING_SELECTED 或者 SCALING_UNSELECTED；默认是 SCALING_UNSELECTED
         * @type {string || null}
         */
        this.SelectedScalingType = null;

        /**
         * 是否选择云联网：CCN_SELECTED_BEFORE_CREATE（创建前关联）， CCN_SELECTED_AFTER_CREATE（创建后关联）或者 CCN_UNSELECTED（不关联）；默认是 CCN_UNSELECTED
         * @type {string || null}
         */
        this.SelectedCcnType = null;

        /**
         * 标签列表，最大长度50组
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 系统盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-500GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，50-500GB；容量以1为单位
         * @type {DiskInfo || null}
         */
        this.SystemDiskInfo = null;

        /**
         * 数据盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-32000GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，10-32000GB；容量以10为单位
         * @type {Array.<DiskInfo> || null}
         */
        this.DataDiskInfo = null;

        /**
         * 是否选择复制定时器策略：TIMER_SELECTED 或者 TIMER_UNSELECTED；默认是 TIMER_UNSELECTED
         * @type {string || null}
         */
        this.SelectedTimerType = null;

        /**
         * 云联网信息，包含对应的账号信息及所属id
         * @type {Array.<CcnInfo> || null}
         */
        this.CcnInfos = null;

        /**
         * fleet公网出带宽最大值，默认100Mbps，范围1-200Mbps
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.CopyNumber = 'CopyNumber' in params ? params.CopyNumber : null;
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
        this.GameServerSessionProtectionTimeLimit = 'GameServerSessionProtectionTimeLimit' in params ? params.GameServerSessionProtectionTimeLimit : null;
        this.SelectedScalingType = 'SelectedScalingType' in params ? params.SelectedScalingType : null;
        this.SelectedCcnType = 'SelectedCcnType' in params ? params.SelectedCcnType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.SystemDiskInfo) {
            let obj = new DiskInfo();
            obj.deserialize(params.SystemDiskInfo)
            this.SystemDiskInfo = obj;
        }

        if (params.DataDiskInfo) {
            this.DataDiskInfo = new Array();
            for (let z in params.DataDiskInfo) {
                let obj = new DiskInfo();
                obj.deserialize(params.DataDiskInfo[z]);
                this.DataDiskInfo.push(obj);
            }
        }
        this.SelectedTimerType = 'SelectedTimerType' in params ? params.SelectedTimerType : null;

        if (params.CcnInfos) {
            this.CcnInfos = new Array();
            for (let z in params.CcnInfos) {
                let obj = new CcnInfo();
                obj.deserialize(params.CcnInfos[z]);
                this.CcnInfos.push(obj);
            }
        }
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

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
 * PutTimerScalingPolicy返回参数结构体
 * @class
 */
class PutTimerScalingPolicyResponse extends  AbstractModel {
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
         * 别名的路由策略的类型，有效值常规别名(SIMPLE)、终止别名(TERMINAL)
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
         * 与终端路由策略一起使用的消息文本，长度不小于1字符不超过1024字符
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
 * GetGameServerInstanceLogUrl请求参数结构体
 * @class
 */
class GetGameServerInstanceLogUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例IP
         * @type {string || null}
         */
        this.ServerIp = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每次条数
         * @type {number || null}
         */
        this.Size = null;

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
        this.ServerIp = 'ServerIp' in params ? params.ServerIp : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Size = 'Size' in params ? params.Size : null;

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
         * 服务器舰队的容量配置
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
         * 分页时返回服务器舰队事件的数量，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页时的数据偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 事件代码
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * 发生事件的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 发生事件的结束时间
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * CreateAssetWithImage请求参数结构体
 * @class
 */
class CreateAssetWithImageRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 生成包支持的操作系统镜像id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 操作系统镜像包大小，比如：40GB，支持单位 KB、MB、GB
         * @type {string || null}
         */
        this.ImageSize = null;

        /**
         * 操作系统镜像包名称，最小长度为1，最大长度为64
         * @type {string || null}
         */
        this.ImageOs = null;

        /**
         * 操作系统镜像包类型，CentOS 或者 Windows
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 操作系统镜像包类型，当前只支持 SHARED_IMAGE
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * 操作系统镜像包位数，32 或者 64
         * @type {number || null}
         */
        this.OsBit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetVersion = 'AssetVersion' in params ? params.AssetVersion : null;
        this.AssetRegion = 'AssetRegion' in params ? params.AssetRegion : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;
        this.ImageOs = 'ImageOs' in params ? params.ImageOs : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.OsBit = 'OsBit' in params ? params.OsBit : null;

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
         * 目的服务器舰队（可为别名）列表
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

        /**
         * 标签列表，最大长度50组
         * @type {Array.<Tag> || null}
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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * UpdateFleetName请求参数结构体
 * @class
 */
class UpdateFleetNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队 Id
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 服务器舰队名称，最小长度1，最大长度50
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

        /**
         * 标签列表，最大长度50组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
         * 游戏会话进程超时，最小值1，最大值600，单位秒
         * @type {number || null}
         */
        this.GameServerSessionActivationTimeoutSeconds = null;

        /**
         * 最大游戏会话数，最小值1，最大值2147483647
         * @type {number || null}
         */
        this.MaxConcurrentGameServerSessionActivations = null;

        /**
         * 服务进程配置，至少有一个进程配置
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
         * 并发执行数量，所有进程并发执行总数最小值1，最大值50
         * @type {number || null}
         */
        this.ConcurrentExecutions = null;

        /**
         * 启动路径：Linux路径/local/game/ 或WIndows路径C:\game\，最小长度1，最大长度1024
         * @type {string || null}
         */
        this.LaunchPath = null;

        /**
         * 启动参数，最小长度0，最大长度1024
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
         * 服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 期望的服务器实例数
         * @type {number || null}
         */
        this.DesiredInstances = null;

        /**
         * 服务器实例数最小限制，最小值0，最大值不超过最高配额查看各地区最高配额减1
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 服务器实例数最大限制，最小值1，最大值不超过最高配额查看各地区最高配额
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 服务器伸缩容间隔，单位分钟，最小值3，最大值30，默认值10
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
 * SetServerReserved请求参数结构体
 * @class
 */
class SetServerReservedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩缩容配置服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例是否保留, 1-保留，0-不保留,默认
         * @type {number || null}
         */
        this.ReserveValue = null;

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
        this.ReserveValue = 'ReserveValue' in params ? params.ReserveValue : null;

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
         * 扩缩容配置服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 扩缩容策略名称，最小长度为1，最大长度为1024
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 扩缩容调整值，ScalingAdjustmentType取值PercentChangeInCapacity时，取值范围-99~99
ScalingAdjustmentType取值ChangeInCapacity或ExactCapacity时，最小值要缩容的最多CVM个数，最大值为实际最大的CVM个数限额
         * @type {number || null}
         */
        this.ScalingAdjustment = null;

        /**
         * 扩缩容调整类型，取值（ChangeInCapacity，ExactCapacity，PercentChangeInCapacity）
         * @type {string || null}
         */
        this.ScalingAdjustmentType = null;

        /**
         * 扩缩容指标阈值
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 扩缩容策略比较符，取值：>,>=,<,<=
         * @type {string || null}
         */
        this.ComparisonOperator = null;

        /**
         * 单个策略持续时间长度（分钟）
         * @type {number || null}
         */
        this.EvaluationPeriods = null;

        /**
         * 扩缩容参与计算的指标名称，PolicyType取值RuleBased，
MetricName取值（AvailableGameServerSessions，AvailableCustomCount，PercentAvailableCustomCount，ActiveInstances，IdleInstances，CurrentPlayerSessions和PercentIdleInstances）；
PolicyType取值TargetBased时，MetricName取值PercentAvailableGameSessions
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 策略类型，取值：TargetBased表示基于目标的策略；RuleBased表示基于规则的策略
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 扩缩容目标值配置，只有TargetBased类型的策略生效
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
 * DescribeFleetStatisticFlows请求参数结构体
 * @class
 */
class DescribeFleetStatisticFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器舰队ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * 查询开始时间，时间格式：YYYY-MM-DD hh:mm:ss
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 查询结束时间，时间格式：YYYY-MM-DD hh:mm:ss
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

module.exports = {
    TargetConfiguration: TargetConfiguration,
    DeleteGameServerSessionQueueRequest: DeleteGameServerSessionQueueRequest,
    FleetAttributes: FleetAttributes,
    CreateAssetResponse: CreateAssetResponse,
    InboundPermission: InboundPermission,
    GetInstanceAccessResponse: GetInstanceAccessResponse,
    Asset: Asset,
    ListAliasesResponse: ListAliasesResponse,
    UpdateBucketCORSOptResponse: UpdateBucketCORSOptResponse,
    DeleteGameServerSessionQueueResponse: DeleteGameServerSessionQueueResponse,
    DescribeFleetAttributesRequest: DescribeFleetAttributesRequest,
    ResolveAliasRequest: ResolveAliasRequest,
    GetGameServerInstanceLogUrlResponse: GetGameServerInstanceLogUrlResponse,
    StartGameServerSessionPlacementResponse: StartGameServerSessionPlacementResponse,
    DescribeFleetStatisticDetailsRequest: DescribeFleetStatisticDetailsRequest,
    DescribeAssetSystemsRequest: DescribeAssetSystemsRequest,
    GetInstanceAccessRequest: GetInstanceAccessRequest,
    CreateFleetRequest: CreateFleetRequest,
    StartFleetActionsRequest: StartFleetActionsRequest,
    UpdateFleetPortSettingsResponse: UpdateFleetPortSettingsResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    ListFleetsResponse: ListFleetsResponse,
    DeleteAssetResponse: DeleteAssetResponse,
    DescribeFleetUtilizationResponse: DescribeFleetUtilizationResponse,
    DescribeFleetRelatedResourcesResponse: DescribeFleetRelatedResourcesResponse,
    DescribeScalingPoliciesRequest: DescribeScalingPoliciesRequest,
    DeleteFleetRequest: DeleteFleetRequest,
    TimerScalingPolicy: TimerScalingPolicy,
    DetachCcnInstancesResponse: DetachCcnInstancesResponse,
    DescribeFleetPortSettingsResponse: DescribeFleetPortSettingsResponse,
    DescribeUserQuotasRequest: DescribeUserQuotasRequest,
    UpdateAssetRequest: UpdateAssetRequest,
    CcnInfo: CcnInfo,
    UpdateFleetPortSettingsRequest: UpdateFleetPortSettingsRequest,
    CcnInstanceSets: CcnInstanceSets,
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
    Tag: Tag,
    PlayerDataMap: PlayerDataMap,
    ResolveAliasResponse: ResolveAliasResponse,
    DescribeInstancesExtendResponse: DescribeInstancesExtendResponse,
    Event: Event,
    PutTimerScalingPolicyRequest: PutTimerScalingPolicyRequest,
    RelatedCcnInfo: RelatedCcnInfo,
    DescribeCcnInstancesResponse: DescribeCcnInstancesResponse,
    AssetSupportSys: AssetSupportSys,
    DeleteTimerScalingPolicyResponse: DeleteTimerScalingPolicyResponse,
    DescribeTimerScalingPoliciesRequest: DescribeTimerScalingPoliciesRequest,
    DescribeInstanceLimitResponse: DescribeInstanceLimitResponse,
    DescribeAssetResponse: DescribeAssetResponse,
    PlacedPlayerSession: PlacedPlayerSession,
    DescribeFleetStatisticSummaryResponse: DescribeFleetStatisticSummaryResponse,
    FleetUtilization: FleetUtilization,
    DescribeGameServerSessionQueuesResponse: DescribeGameServerSessionQueuesResponse,
    DeleteAliasRequest: DeleteAliasRequest,
    UpdateBucketCORSOptRequest: UpdateBucketCORSOptRequest,
    DescribeAssetSystemsResponse: DescribeAssetSystemsResponse,
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
    DeleteTimerScalingPolicyRequest: DeleteTimerScalingPolicyRequest,
    JoinGameServerSessionResponse: JoinGameServerSessionResponse,
    AssetCredentials: AssetCredentials,
    DescribeFleetRelatedResourcesRequest: DescribeFleetRelatedResourcesRequest,
    DescribeGameServerSessionPlacementRequest: DescribeGameServerSessionPlacementRequest,
    GameServerSessionQueueDestination: GameServerSessionQueueDestination,
    UpdateGameServerSessionQueueRequest: UpdateGameServerSessionQueueRequest,
    FleetCapacity: FleetCapacity,
    SetServerWeightRequest: SetServerWeightRequest,
    GetGameServerSessionLogUrlResponse: GetGameServerSessionLogUrlResponse,
    UpdateBucketAccelerateOptRequest: UpdateBucketAccelerateOptRequest,
    DeleteFleetResponse: DeleteFleetResponse,
    StartGameServerSessionPlacementRequest: StartGameServerSessionPlacementRequest,
    InstanceTypeInfo: InstanceTypeInfo,
    DescribeGameServerSessionPlacementResponse: DescribeGameServerSessionPlacementResponse,
    UpdateRuntimeConfigurationResponse: UpdateRuntimeConfigurationResponse,
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
    SetServerReservedResponse: SetServerReservedResponse,
    StopGameServerSessionPlacementRequest: StopGameServerSessionPlacementRequest,
    UpdateFleetNameResponse: UpdateFleetNameResponse,
    TimerFleetCapacity: TimerFleetCapacity,
    DescribeAliasRequest: DescribeAliasRequest,
    CreateAliasRequest: CreateAliasRequest,
    TimerValue: TimerValue,
    CopyFleetResponse: CopyFleetResponse,
    UpdateGameServerSessionRequest: UpdateGameServerSessionRequest,
    ListAliasesRequest: ListAliasesRequest,
    CreateAssetRequest: CreateAssetRequest,
    DescribeGameServerSessionDetailsResponse: DescribeGameServerSessionDetailsResponse,
    Credentials: Credentials,
    GetGameServerSessionLogUrlRequest: GetGameServerSessionLogUrlRequest,
    InboundPermissionAuthorization: InboundPermissionAuthorization,
    CreateGameServerSessionResponse: CreateGameServerSessionResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    QuotaResource: QuotaResource,
    DescribeFleetStatisticFlowsResponse: DescribeFleetStatisticFlowsResponse,
    DiskInfo: DiskInfo,
    TimerConfiguration: TimerConfiguration,
    CreateFleetResponse: CreateFleetResponse,
    Filter: Filter,
    UpdateFleetAttributesResponse: UpdateFleetAttributesResponse,
    DescribeFleetUtilizationRequest: DescribeFleetUtilizationRequest,
    DescribeInstanceTypesResponse: DescribeInstanceTypesResponse,
    StartFleetActionsResponse: StartFleetActionsResponse,
    DescribeGameServerSessionDetailsRequest: DescribeGameServerSessionDetailsRequest,
    GameServerSession: GameServerSession,
    PlayerLatencyPolicy: PlayerLatencyPolicy,
    FleetRelatedResource: FleetRelatedResource,
    UpdateRuntimeConfigurationRequest: UpdateRuntimeConfigurationRequest,
    GameProperty: GameProperty,
    CreateAssetWithImageResponse: CreateAssetWithImageResponse,
    FleetStatisticTimes: FleetStatisticTimes,
    FleetStatisticFlows: FleetStatisticFlows,
    DescribeAssetRequest: DescribeAssetRequest,
    DescribeInstancesExtendRequest: DescribeInstancesExtendRequest,
    DescribeGameServerSessionsResponse: DescribeGameServerSessionsResponse,
    InstanceCounts: InstanceCounts,
    UpdateBucketAccelerateOptResponse: UpdateBucketAccelerateOptResponse,
    JoinGameServerSessionRequest: JoinGameServerSessionRequest,
    DescribeUserQuotasResponse: DescribeUserQuotasResponse,
    GetUploadFederationTokenRequest: GetUploadFederationTokenRequest,
    DescribeTimerScalingPoliciesResponse: DescribeTimerScalingPoliciesResponse,
    CopyFleetRequest: CopyFleetRequest,
    SearchGameServerSessionsResponse: SearchGameServerSessionsResponse,
    PutTimerScalingPolicyResponse: PutTimerScalingPolicyResponse,
    DescribeFleetEventsResponse: DescribeFleetEventsResponse,
    RoutingStrategy: RoutingStrategy,
    GetGameServerInstanceLogUrlRequest: GetGameServerInstanceLogUrlRequest,
    DescribeFleetCapacityResponse: DescribeFleetCapacityResponse,
    DescribeUserQuotaResponse: DescribeUserQuotaResponse,
    DescribeFleetEventsRequest: DescribeFleetEventsRequest,
    UpdateAssetResponse: UpdateAssetResponse,
    CreateAssetWithImageRequest: CreateAssetWithImageRequest,
    PlayerSession: PlayerSession,
    PutScalingPolicyResponse: PutScalingPolicyResponse,
    CreateGameServerSessionQueueRequest: CreateGameServerSessionQueueRequest,
    UpdateFleetNameRequest: UpdateFleetNameRequest,
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
    DesiredPlayerSession: DesiredPlayerSession,
    JoinGameServerSessionBatchResponse: JoinGameServerSessionBatchResponse,
    SetServerReservedRequest: SetServerReservedRequest,
    InstanceExtend: InstanceExtend,
    PutScalingPolicyRequest: PutScalingPolicyRequest,
    StopGameServerSessionPlacementResponse: StopGameServerSessionPlacementResponse,
    DescribeFleetStatisticFlowsRequest: DescribeFleetStatisticFlowsRequest,

}
