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
 * Nacos副本信息
 * @class
 */
class NacosReplica extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 角色
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * VPC ID	
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DescribeNacosReplicas请求参数结构体
 * @class
 */
class DescribeNacosReplicasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 副本列表Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 副本列表Offset
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateEngineInternetAccess请求参数结构体
 * @class
 */
class UpdateEngineInternetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 引擎类型
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * 是否开启客户端公网访问，true开 false关
         * @type {boolean || null}
         */
        this.EnableClientInternetAccess = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.EnableClientInternetAccess = 'EnableClientInternetAccess' in params ? params.EnableClientInternetAccess : null;

    }
}

/**
 * Apollo 环境配置参数
 * @class
 */
class ApolloEnvParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 环境内引擎的节点规格 ID
-1C2G
-2C4G
兼容原spec-xxxxxx形式的规格ID
         * @type {string || null}
         */
        this.EngineResourceSpec = null;

        /**
         * 环境内引擎的节点数量
         * @type {number || null}
         */
        this.EngineNodeNum = null;

        /**
         * 配置存储空间大小，以GB为单位
         * @type {number || null}
         */
        this.StorageCapacity = null;

        /**
         * VPC ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 环境描述
         * @type {string || null}
         */
        this.EnvDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.EngineResourceSpec = 'EngineResourceSpec' in params ? params.EngineResourceSpec : null;
        this.EngineNodeNum = 'EngineNodeNum' in params ? params.EngineNodeNum : null;
        this.StorageCapacity = 'StorageCapacity' in params ? params.StorageCapacity : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EnvDesc = 'EnvDesc' in params ? params.EnvDesc : null;

    }
}

/**
 * UpdateEngineInternetAccess返回参数结构体
 * @class
 */
class UpdateEngineInternetAccessResponse extends  AbstractModel {
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
 * 键值对
 * @class
 */
class KVPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 值
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
 * DeleteEngine返回参数结构体
 * @class
 */
class DeleteEngineResponse extends  AbstractModel {
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
 * CreateEngine返回参数结构体
 * @class
 */
class CreateEngineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZookeeperReplicas请求参数结构体
 * @class
 */
class DescribeZookeeperReplicasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册引擎实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 副本列表Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 副本列表Offset
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteEngine请求参数结构体
 * @class
 */
class DeleteEngineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎实例 ID
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeCloudNativeAPIGatewayNodes请求参数结构体
 * @class
 */
class DescribeCloudNativeAPIGatewayNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云原生API网关实例ID。
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 实例分组id
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 翻页获取多少个
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 翻页从第几个开始获取
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
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 获取网关节点信息
 * @class
 */
class DescribeCloudNativeAPIGatewayNodesResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取云原生API网关节点列表响应结果。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 云原生API网关节点列表。
         * @type {Array.<CloudNativeAPIGatewayNode> || null}
         */
        this.NodeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.NodeList) {
            this.NodeList = new Array();
            for (let z in params.NodeList) {
                let obj = new CloudNativeAPIGatewayNode();
                obj.deserialize(params.NodeList[z]);
                this.NodeList.push(obj);
            }
        }

    }
}

/**
 * Zookeeper副本信息
 * @class
 */
class ZookeeperReplica extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 角色
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * VPC ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DescribeNacosServerInterfaces请求参数结构体
 * @class
 */
class DescribeNacosServerInterfacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 返回的列表个数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回的列表起始偏移量
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 微服务注册引擎实例
 * @class
 */
class SREInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本号
         * @type {string || null}
         */
        this.Edition = null;

        /**
         * 状态, 枚举值:creating/create_fail/running/updating/update_fail/restarting/restart_fail/destroying/destroy_fail
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 规格ID
         * @type {string || null}
         */
        this.SpecId = null;

        /**
         * 副本数
         * @type {number || null}
         */
        this.Replica = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Vpc iD
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 是否开启持久化存储
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableStorage = null;

        /**
         * 数据存储方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 云硬盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageCapacity = null;

        /**
         * 计费方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Paymode = null;

        /**
         * EKS集群的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EKSClusterID = null;

        /**
         * 集群创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 环境配置信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EnvInfo> || null}
         */
        this.EnvInfos = null;

        /**
         * 引擎所在的区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EngineRegion = null;

        /**
         * 注册引擎是否开启公网
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableInternet = null;

        /**
         * 私有网络列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcInfos = null;

        /**
         * 服务治理相关信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServiceGovernanceInfo> || null}
         */
        this.ServiceGovernanceInfos = null;

        /**
         * 实例的标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.Tags = null;

        /**
         * 引擎实例是否开启控制台公网访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableConsoleInternet = null;

        /**
         * 引擎实例是否开启控制台内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableConsoleIntranet = null;

        /**
         * 引擎实例是否展示参数配置页面
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ConfigInfoVisible = null;

        /**
         * 引擎实例控制台默认密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsoleDefaultPwd = null;

        /**
         * 交易付费类型，0后付费/1预付费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TradeType = null;

        /**
         * 自动续费标记：0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 预付费到期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurDeadline = null;

        /**
         * 隔离开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * 实例地域相关的描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeInstanceRegionInfo> || null}
         */
        this.RegionInfos = null;

        /**
         * 所在EKS环境，分为common和yunti
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EKSType = null;

        /**
         * 引擎的产品版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FeatureVersion = null;

        /**
         * 引擎实例是否开启客户端内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableClientIntranet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Edition = 'Edition' in params ? params.Edition : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SpecId = 'SpecId' in params ? params.SpecId : null;
        this.Replica = 'Replica' in params ? params.Replica : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.EnableStorage = 'EnableStorage' in params ? params.EnableStorage : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.StorageCapacity = 'StorageCapacity' in params ? params.StorageCapacity : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;
        this.EKSClusterID = 'EKSClusterID' in params ? params.EKSClusterID : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.EnvInfos) {
            this.EnvInfos = new Array();
            for (let z in params.EnvInfos) {
                let obj = new EnvInfo();
                obj.deserialize(params.EnvInfos[z]);
                this.EnvInfos.push(obj);
            }
        }
        this.EngineRegion = 'EngineRegion' in params ? params.EngineRegion : null;
        this.EnableInternet = 'EnableInternet' in params ? params.EnableInternet : null;

        if (params.VpcInfos) {
            this.VpcInfos = new Array();
            for (let z in params.VpcInfos) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcInfos[z]);
                this.VpcInfos.push(obj);
            }
        }

        if (params.ServiceGovernanceInfos) {
            this.ServiceGovernanceInfos = new Array();
            for (let z in params.ServiceGovernanceInfos) {
                let obj = new ServiceGovernanceInfo();
                obj.deserialize(params.ServiceGovernanceInfos[z]);
                this.ServiceGovernanceInfos.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new KVPair();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.EnableConsoleInternet = 'EnableConsoleInternet' in params ? params.EnableConsoleInternet : null;
        this.EnableConsoleIntranet = 'EnableConsoleIntranet' in params ? params.EnableConsoleIntranet : null;
        this.ConfigInfoVisible = 'ConfigInfoVisible' in params ? params.ConfigInfoVisible : null;
        this.ConsoleDefaultPwd = 'ConsoleDefaultPwd' in params ? params.ConsoleDefaultPwd : null;
        this.TradeType = 'TradeType' in params ? params.TradeType : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.CurDeadline = 'CurDeadline' in params ? params.CurDeadline : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;

        if (params.RegionInfos) {
            this.RegionInfos = new Array();
            for (let z in params.RegionInfos) {
                let obj = new DescribeInstanceRegionInfo();
                obj.deserialize(params.RegionInfos[z]);
                this.RegionInfos.push(obj);
            }
        }
        this.EKSType = 'EKSType' in params ? params.EKSType : null;
        this.FeatureVersion = 'FeatureVersion' in params ? params.FeatureVersion : null;
        this.EnableClientIntranet = 'EnableClientIntranet' in params ? params.EnableClientIntranet : null;

    }
}

/**
 * DescribeSREInstanceAccessAddress返回参数结构体
 * @class
 */
class DescribeSREInstanceAccessAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网访问地址
         * @type {string || null}
         */
        this.IntranetAddress = null;

        /**
         * 公网访问地址
         * @type {string || null}
         */
        this.InternetAddress = null;

        /**
         * apollo多环境公网ip
         * @type {Array.<EnvAddressInfo> || null}
         */
        this.EnvAddressInfos = null;

        /**
         * 控制台公网访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsoleInternetAddress = null;

        /**
         * 控制台内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsoleIntranetAddress = null;

        /**
         * 客户端公网带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InternetBandWidth = null;

        /**
         * 控制台公网带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConsoleInternetBandWidth = null;

        /**
         * 北极星限流server节点接入IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PolarisLimiterAddress> || null}
         */
        this.LimiterAddressInfos = null;

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
        this.IntranetAddress = 'IntranetAddress' in params ? params.IntranetAddress : null;
        this.InternetAddress = 'InternetAddress' in params ? params.InternetAddress : null;

        if (params.EnvAddressInfos) {
            this.EnvAddressInfos = new Array();
            for (let z in params.EnvAddressInfos) {
                let obj = new EnvAddressInfo();
                obj.deserialize(params.EnvAddressInfos[z]);
                this.EnvAddressInfos.push(obj);
            }
        }
        this.ConsoleInternetAddress = 'ConsoleInternetAddress' in params ? params.ConsoleInternetAddress : null;
        this.ConsoleIntranetAddress = 'ConsoleIntranetAddress' in params ? params.ConsoleIntranetAddress : null;
        this.InternetBandWidth = 'InternetBandWidth' in params ? params.InternetBandWidth : null;
        this.ConsoleInternetBandWidth = 'ConsoleInternetBandWidth' in params ? params.ConsoleInternetBandWidth : null;

        if (params.LimiterAddressInfos) {
            this.LimiterAddressInfos = new Array();
            for (let z in params.LimiterAddressInfos) {
                let obj = new PolarisLimiterAddress();
                obj.deserialize(params.LimiterAddressInfos[z]);
                this.LimiterAddressInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSREInstances返回参数结构体
 * @class
 */
class DescribeSREInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例记录
         * @type {Array.<SREInstance> || null}
         */
        this.Content = null;

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

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new SREInstance();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Zookeeper服务端接口列表，用于云监控
 * @class
 */
class ZookeeperServerInterface extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Interface = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Interface = 'Interface' in params ? params.Interface : null;

    }
}

/**
 * 服务治理相关的信息
 * @class
 */
class ServiceGovernanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎所在的地域
         * @type {string || null}
         */
        this.EngineRegion = null;

        /**
         * 服务治理引擎绑定的kubernetes集群信息
         * @type {Array.<BoundK8SInfo> || null}
         */
        this.BoundK8SInfos = null;

        /**
         * 服务治理引擎绑定的网络信息
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcInfos = null;

        /**
         * 当前实例鉴权是否开启
         * @type {boolean || null}
         */
        this.AuthOpen = null;

        /**
         * 该实例支持的功能，鉴权就是 Auth
         * @type {Array.<string> || null}
         */
        this.Features = null;

        /**
         * 主账户名默认为 polaris，该值为主账户的默认密码
         * @type {string || null}
         */
        this.MainPassword = null;

        /**
         * 服务治理pushgateway引擎绑定的网络信息
         * @type {Array.<VpcInfo> || null}
         */
        this.PgwVpcInfos = null;

        /**
         * 服务治理限流server引擎绑定的网络信息
         * @type {Array.<VpcInfo> || null}
         */
        this.LimiterVpcInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EngineRegion = 'EngineRegion' in params ? params.EngineRegion : null;

        if (params.BoundK8SInfos) {
            this.BoundK8SInfos = new Array();
            for (let z in params.BoundK8SInfos) {
                let obj = new BoundK8SInfo();
                obj.deserialize(params.BoundK8SInfos[z]);
                this.BoundK8SInfos.push(obj);
            }
        }

        if (params.VpcInfos) {
            this.VpcInfos = new Array();
            for (let z in params.VpcInfos) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcInfos[z]);
                this.VpcInfos.push(obj);
            }
        }
        this.AuthOpen = 'AuthOpen' in params ? params.AuthOpen : null;
        this.Features = 'Features' in params ? params.Features : null;
        this.MainPassword = 'MainPassword' in params ? params.MainPassword : null;

        if (params.PgwVpcInfos) {
            this.PgwVpcInfos = new Array();
            for (let z in params.PgwVpcInfos) {
                let obj = new VpcInfo();
                obj.deserialize(params.PgwVpcInfos[z]);
                this.PgwVpcInfos.push(obj);
            }
        }

        if (params.LimiterVpcInfos) {
            this.LimiterVpcInfos = new Array();
            for (let z in params.LimiterVpcInfos) {
                let obj = new VpcInfo();
                obj.deserialize(params.LimiterVpcInfos[z]);
                this.LimiterVpcInfos.push(obj);
            }
        }

    }
}

/**
 * 云原生API网关节点信息。
 * @class
 */
class CloudNativeAPIGatewayNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云原生网关节点 id
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点 ip
         * @type {string || null}
         */
        this.NodeIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeIp = 'NodeIp' in params ? params.NodeIp : null;

    }
}

/**
 * DescribeNacosReplicas返回参数结构体
 * @class
 */
class DescribeNacosReplicasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎实例副本信息
         * @type {Array.<NacosReplica> || null}
         */
        this.Replicas = null;

        /**
         * 副本个数
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

        if (params.Replicas) {
            this.Replicas = new Array();
            for (let z in params.Replicas) {
                let obj = new NacosReplica();
                obj.deserialize(params.Replicas[z]);
                this.Replicas.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZookeeperServerInterfaces返回参数结构体
 * @class
 */
class DescribeZookeeperServerInterfacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 接口列表
         * @type {Array.<ZookeeperServerInterface> || null}
         */
        this.Content = null;

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

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new ZookeeperServerInterface();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务治理引擎绑定的kubernetes信息
 * @class
 */
class BoundK8SInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的kubernetes集群ID
         * @type {string || null}
         */
        this.BoundClusterId = null;

        /**
         * 绑定的kubernetes的集群类型，分tke和eks两种
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BoundClusterType = null;

        /**
         * 服务同步模式，all为全量同步，demand为按需同步
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SyncMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BoundClusterId = 'BoundClusterId' in params ? params.BoundClusterId : null;
        this.BoundClusterType = 'BoundClusterType' in params ? params.BoundClusterType : null;
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;

    }
}

/**
 * DescribeSREInstances请求参数结构体
 * @class
 */
class DescribeSREInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求过滤参数
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 翻页单页查询限制数量[0,1000], 默认值0
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 翻页单页偏移量，默认值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询类型
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * 调用方来源
         * @type {string || null}
         */
        this.QuerySource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.QuerySource = 'QuerySource' in params ? params.QuerySource : null;

    }
}

/**
 * DescribeCloudNativeAPIGatewayNodes返回参数结构体
 * @class
 */
class DescribeCloudNativeAPIGatewayNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取云原生网关节点列表结果。
         * @type {DescribeCloudNativeAPIGatewayNodesResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new DescribeCloudNativeAPIGatewayNodesResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZookeeperReplicas返回参数结构体
 * @class
 */
class DescribeZookeeperReplicasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册引擎实例副本信息
         * @type {Array.<ZookeeperReplica> || null}
         */
        this.Replicas = null;

        /**
         * 副本个数
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

        if (params.Replicas) {
            this.Replicas = new Array();
            for (let z in params.Replicas) {
                let obj = new ZookeeperReplica();
                obj.deserialize(params.Replicas[z]);
                this.Replicas.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 私有网络信息
 * @class
 */
class VpcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vpc Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntranetAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.IntranetAddress = 'IntranetAddress' in params ? params.IntranetAddress : null;

    }
}

/**
 * 引擎的初始管理帐号
 * @class
 */
class EngineAdmin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控制台初始用户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 控制台初始密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 引擎接口的管理员 Token
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Token = 'Token' in params ? params.Token : null;

    }
}

/**
 * 查询Limiter的接入地址
 * @class
 */
class PolarisLimiterAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC接入IP列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntranetAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntranetAddress = 'IntranetAddress' in params ? params.IntranetAddress : null;

    }
}

/**
 * CreateEngine请求参数结构体
 * @class
 */
class CreateEngineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎类型。参考值：
- zookeeper
- nacos
- consul
- apollo
- eureka
- polaris
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * 引擎的开源版本。每种引擎支持的开源版本不同，请参考产品文档或者控制台购买页
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 引擎的产品版本。参考值：
- STANDARD： 标准版

引擎各版本及可选择的规格、节点数说明：
apollo - STANDARD版本
规格列表：1C2G、2C4G、4C8G、8C16G、16C32G
节点数：1，2，3，4，5

eureka - STANDARD版本
规格列表：1C2G、2C4G、4C8G、8C16G、16C32G
节点数：3，4，5

polarismesh - STANDARD版本
规格列表：NUM50、NUM100、NUM200、NUM500、NUM1000、NUM5000、NUM10000、NUM50000

兼容原spec-xxxxxx形式的规格ID
         * @type {string || null}
         */
        this.EngineProductVersion = null;

        /**
         * 引擎所在地域。参考值说明：
中国区 参考值：
- ap-guangzhou：广州
- ap-beijing：北京
- ap-chengdu：成都
- ap-chongqing：重庆
- ap-nanjing：南京
- ap-shanghai：上海
- ap-hongkong：香港
- ap-taipei：台北
亚太区 参考值：
- ap-jakarta：雅加达
- ap-singapore：新加坡
北美区 参考值
- na-toronto：多伦多
金融专区 参考值
- ap-beijing-fsi：北京金融
- ap-shanghai-fsi：上海金融
- ap-shenzhen-fsi：深圳金融
         * @type {string || null}
         */
        this.EngineRegion = null;

        /**
         * 引擎名称。参考值：
- eurek-test
         * @type {string || null}
         */
        this.EngineName = null;

        /**
         * 付费类型。参考值：
- 0：后付费
- 1：预付费（接口暂不支持创建预付费实例）
         * @type {number || null}
         */
        this.TradeType = null;

        /**
         * 引擎的节点规格 ID。参见EngineProductVersion字段说明
         * @type {string || null}
         */
        this.EngineResourceSpec = null;

        /**
         * 引擎的节点数量。参见EngineProductVersion字段说明
         * @type {number || null}
         */
        this.EngineNodeNum = null;

        /**
         * VPC ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：
- vpc-conz6aix
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：
- subnet-ahde9me9
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Apollo 环境配置参数列表。参数说明：
如果创建Apollo类型，此参数为必填的环境信息列表，最多可选4个环境。环境信息参数说明：
- Name：环境名。参考值：prod, dev, fat, uat
- EngineResourceSpec：环境内引擎的节点规格ID。参见EngineProductVersion参数说明
- EngineNodeNum：环境内引擎的节点数量。参见EngineProductVersion参数说明，其中prod环境支持的节点数为2，3，4，5
- StorageCapacity：配置存储空间大小，以GB为单位，步长为5.参考值：35
- VpcId：VPC ID。参考值：vpc-conz6aix
- SubnetId：子网 ID。参考值：subnet-ahde9me9
         * @type {Array.<ApolloEnvParam> || null}
         */
        this.ApolloEnvParams = null;

        /**
         * 引擎的标签列表。用户自定义的key/value形式，无参考值
         * @type {Array.<InstanceTagInfo> || null}
         */
        this.EngineTags = null;

        /**
         * 引擎的初始帐号信息。可设置参数：
- Name：控制台初始用户名
- Password：控制台初始密码
- Token：引擎接口的管理员 Token
         * @type {EngineAdmin || null}
         */
        this.EngineAdmin = null;

        /**
         * 预付费时长，以月为单位
         * @type {number || null}
         */
        this.PrepaidPeriod = null;

        /**
         * 自动续费标记，仅预付费使用。参考值：
- 0：不自动续费
- 1：自动续费
         * @type {number || null}
         */
        this.PrepaidRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.EngineProductVersion = 'EngineProductVersion' in params ? params.EngineProductVersion : null;
        this.EngineRegion = 'EngineRegion' in params ? params.EngineRegion : null;
        this.EngineName = 'EngineName' in params ? params.EngineName : null;
        this.TradeType = 'TradeType' in params ? params.TradeType : null;
        this.EngineResourceSpec = 'EngineResourceSpec' in params ? params.EngineResourceSpec : null;
        this.EngineNodeNum = 'EngineNodeNum' in params ? params.EngineNodeNum : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.ApolloEnvParams) {
            this.ApolloEnvParams = new Array();
            for (let z in params.ApolloEnvParams) {
                let obj = new ApolloEnvParam();
                obj.deserialize(params.ApolloEnvParams[z]);
                this.ApolloEnvParams.push(obj);
            }
        }

        if (params.EngineTags) {
            this.EngineTags = new Array();
            for (let z in params.EngineTags) {
                let obj = new InstanceTagInfo();
                obj.deserialize(params.EngineTags[z]);
                this.EngineTags.push(obj);
            }
        }

        if (params.EngineAdmin) {
            let obj = new EngineAdmin();
            obj.deserialize(params.EngineAdmin)
            this.EngineAdmin = obj;
        }
        this.PrepaidPeriod = 'PrepaidPeriod' in params ? params.PrepaidPeriod : null;
        this.PrepaidRenewFlag = 'PrepaidRenewFlag' in params ? params.PrepaidRenewFlag : null;

    }
}

/**
 * 实例地域信息描述
 * @class
 */
class DescribeInstanceRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎部署地域信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EngineRegion = null;

        /**
         * 引擎在该地域的副本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Replica = null;

        /**
         * 引擎在该地域的规格id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecId = null;

        /**
         * 内网的网络信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VpcInfo> || null}
         */
        this.IntranetVpcInfos = null;

        /**
         * 是否开公网
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableClientInternet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EngineRegion = 'EngineRegion' in params ? params.EngineRegion : null;
        this.Replica = 'Replica' in params ? params.Replica : null;
        this.SpecId = 'SpecId' in params ? params.SpecId : null;

        if (params.IntranetVpcInfos) {
            this.IntranetVpcInfos = new Array();
            for (let z in params.IntranetVpcInfos) {
                let obj = new VpcInfo();
                obj.deserialize(params.IntranetVpcInfos[z]);
                this.IntranetVpcInfos.push(obj);
            }
        }
        this.EnableClientInternet = 'EnableClientInternet' in params ? params.EnableClientInternet : null;

    }
}

/**
 * DescribeSREInstanceAccessAddress请求参数结构体
 * @class
 */
class DescribeSREInstanceAccessAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册引擎实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 引擎其他组件名称（pushgateway、polaris-limiter）
         * @type {string || null}
         */
        this.Workload = null;

        /**
         * 部署地域
         * @type {string || null}
         */
        this.EngineRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Workload = 'Workload' in params ? params.Workload : null;
        this.EngineRegion = 'EngineRegion' in params ? params.EngineRegion : null;

    }
}

/**
 * DescribeNacosServerInterfaces返回参数结构体
 * @class
 */
class DescribeNacosServerInterfacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 接口列表
         * @type {Array.<NacosServerInterface> || null}
         */
        this.Content = null;

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

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new NacosServerInterface();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询过滤通用对象
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤参数值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * nacos服务端接口列表，用于云监控
 * @class
 */
class NacosServerInterface extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Interface = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Interface = 'Interface' in params ? params.Interface : null;

    }
}

/**
 * DescribeZookeeperServerInterfaces请求参数结构体
 * @class
 */
class DescribeZookeeperServerInterfacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 返回的列表个数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回的列表起始偏移量
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 环境具体信息
 * @class
 */
class EnvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境名称
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * 环境对应的网络信息
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcInfos = null;

        /**
         * 云硬盘容量
         * @type {number || null}
         */
        this.StorageCapacity = null;

        /**
         * 运行状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Admin service 访问地址
         * @type {string || null}
         */
        this.AdminServiceIp = null;

        /**
         * Config service访问地址
         * @type {string || null}
         */
        this.ConfigServiceIp = null;

        /**
         * 是否开启config-server公网
         * @type {boolean || null}
         */
        this.EnableConfigInternet = null;

        /**
         * config-server公网访问地址
         * @type {string || null}
         */
        this.ConfigInternetServiceIp = null;

        /**
         * 规格ID
         * @type {string || null}
         */
        this.SpecId = null;

        /**
         * 环境的节点数
         * @type {number || null}
         */
        this.EnvReplica = null;

        /**
         * 环境运行的节点数
         * @type {number || null}
         */
        this.RunningCount = null;

        /**
         * 环境别名
         * @type {string || null}
         */
        this.AliasEnvName = null;

        /**
         * 环境描述
         * @type {string || null}
         */
        this.EnvDesc = null;

        /**
         * 客户端带宽
         * @type {number || null}
         */
        this.ClientBandWidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvName = 'EnvName' in params ? params.EnvName : null;

        if (params.VpcInfos) {
            this.VpcInfos = new Array();
            for (let z in params.VpcInfos) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcInfos[z]);
                this.VpcInfos.push(obj);
            }
        }
        this.StorageCapacity = 'StorageCapacity' in params ? params.StorageCapacity : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AdminServiceIp = 'AdminServiceIp' in params ? params.AdminServiceIp : null;
        this.ConfigServiceIp = 'ConfigServiceIp' in params ? params.ConfigServiceIp : null;
        this.EnableConfigInternet = 'EnableConfigInternet' in params ? params.EnableConfigInternet : null;
        this.ConfigInternetServiceIp = 'ConfigInternetServiceIp' in params ? params.ConfigInternetServiceIp : null;
        this.SpecId = 'SpecId' in params ? params.SpecId : null;
        this.EnvReplica = 'EnvReplica' in params ? params.EnvReplica : null;
        this.RunningCount = 'RunningCount' in params ? params.RunningCount : null;
        this.AliasEnvName = 'AliasEnvName' in params ? params.AliasEnvName : null;
        this.EnvDesc = 'EnvDesc' in params ? params.EnvDesc : null;
        this.ClientBandWidth = 'ClientBandWidth' in params ? params.ClientBandWidth : null;

    }
}

/**
 * 多环境网络信息
 * @class
 */
class EnvAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境名
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * 是否开启config公网
         * @type {boolean || null}
         */
        this.EnableConfigInternet = null;

        /**
         * config公网ip
         * @type {string || null}
         */
        this.ConfigInternetServiceIp = null;

        /**
         * config内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigIntranetAddress = null;

        /**
         * 是否开启config内网clb
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableConfigIntranet = null;

        /**
         * 客户端公网带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InternetBandWidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvName = 'EnvName' in params ? params.EnvName : null;
        this.EnableConfigInternet = 'EnableConfigInternet' in params ? params.EnableConfigInternet : null;
        this.ConfigInternetServiceIp = 'ConfigInternetServiceIp' in params ? params.ConfigInternetServiceIp : null;
        this.ConfigIntranetAddress = 'ConfigIntranetAddress' in params ? params.ConfigIntranetAddress : null;
        this.EnableConfigIntranet = 'EnableConfigIntranet' in params ? params.EnableConfigIntranet : null;
        this.InternetBandWidth = 'InternetBandWidth' in params ? params.InternetBandWidth : null;

    }
}

/**
 * 引擎实例的标签信息
 * @class
 */
class InstanceTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

module.exports = {
    NacosReplica: NacosReplica,
    DescribeNacosReplicasRequest: DescribeNacosReplicasRequest,
    UpdateEngineInternetAccessRequest: UpdateEngineInternetAccessRequest,
    ApolloEnvParam: ApolloEnvParam,
    UpdateEngineInternetAccessResponse: UpdateEngineInternetAccessResponse,
    KVPair: KVPair,
    DeleteEngineResponse: DeleteEngineResponse,
    CreateEngineResponse: CreateEngineResponse,
    DescribeZookeeperReplicasRequest: DescribeZookeeperReplicasRequest,
    DeleteEngineRequest: DeleteEngineRequest,
    DescribeCloudNativeAPIGatewayNodesRequest: DescribeCloudNativeAPIGatewayNodesRequest,
    DescribeCloudNativeAPIGatewayNodesResult: DescribeCloudNativeAPIGatewayNodesResult,
    ZookeeperReplica: ZookeeperReplica,
    DescribeNacosServerInterfacesRequest: DescribeNacosServerInterfacesRequest,
    SREInstance: SREInstance,
    DescribeSREInstanceAccessAddressResponse: DescribeSREInstanceAccessAddressResponse,
    DescribeSREInstancesResponse: DescribeSREInstancesResponse,
    ZookeeperServerInterface: ZookeeperServerInterface,
    ServiceGovernanceInfo: ServiceGovernanceInfo,
    CloudNativeAPIGatewayNode: CloudNativeAPIGatewayNode,
    DescribeNacosReplicasResponse: DescribeNacosReplicasResponse,
    DescribeZookeeperServerInterfacesResponse: DescribeZookeeperServerInterfacesResponse,
    BoundK8SInfo: BoundK8SInfo,
    DescribeSREInstancesRequest: DescribeSREInstancesRequest,
    DescribeCloudNativeAPIGatewayNodesResponse: DescribeCloudNativeAPIGatewayNodesResponse,
    DescribeZookeeperReplicasResponse: DescribeZookeeperReplicasResponse,
    VpcInfo: VpcInfo,
    EngineAdmin: EngineAdmin,
    PolarisLimiterAddress: PolarisLimiterAddress,
    CreateEngineRequest: CreateEngineRequest,
    DescribeInstanceRegionInfo: DescribeInstanceRegionInfo,
    DescribeSREInstanceAccessAddressRequest: DescribeSREInstanceAccessAddressRequest,
    DescribeNacosServerInterfacesResponse: DescribeNacosServerInterfacesResponse,
    Filter: Filter,
    NacosServerInterface: NacosServerInterface,
    DescribeZookeeperServerInterfacesRequest: DescribeZookeeperServerInterfacesRequest,
    EnvInfo: EnvInfo,
    EnvAddressInfo: EnvAddressInfo,
    InstanceTagInfo: InstanceTagInfo,

}
