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

    }
}

module.exports = {
    DescribeSREInstancesRequest: DescribeSREInstancesRequest,
    SREInstance: SREInstance,
    DescribeSREInstanceAccessAddressResponse: DescribeSREInstanceAccessAddressResponse,
    DescribeSREInstancesResponse: DescribeSREInstancesResponse,
    KVPair: KVPair,
    EnvInfo: EnvInfo,
    Filter: Filter,
    EnvAddressInfo: EnvAddressInfo,
    VpcInfo: VpcInfo,
    BoundK8SInfo: BoundK8SInfo,
    DescribeSREInstanceAccessAddressRequest: DescribeSREInstanceAccessAddressRequest,
    ServiceGovernanceInfo: ServiceGovernanceInfo,

}
