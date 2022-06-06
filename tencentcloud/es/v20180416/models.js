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
 * 可视化节点配置
 * @class
 */
class WebNodeTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可视化节点个数，固定为1
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 可视化节点规格
         * @type {string || null}
         */
        this.NodeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;

    }
}

/**
 * ES集群日志详细信息
 * @class
 */
class InstanceLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 日志级别
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 集群节点ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 日志内容
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 节点本地盘信息
 * @class
 */
class LocalDiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地盘类型<li>LOCAL_SATA：大数据型</li><li>NVME_SSD：高IO型</li>
         * @type {string || null}
         */
        this.LocalDiskType = null;

        /**
         * 本地盘单盘大小
         * @type {number || null}
         */
        this.LocalDiskSize = null;

        /**
         * 本地盘块数
         * @type {number || null}
         */
        this.LocalDiskCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalDiskType = 'LocalDiskType' in params ? params.LocalDiskType : null;
        this.LocalDiskSize = 'LocalDiskSize' in params ? params.LocalDiskSize : null;
        this.LocalDiskCount = 'LocalDiskCount' in params ? params.LocalDiskCount : null;

    }
}

/**
 * 索引生命周期字段
 * @class
 */
class IndexPolicyField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启warm阶段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WarmEnable = null;

        /**
         * warm阶段转入时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WarmMinAge = null;

        /**
         * 是否开启cold阶段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ColdEnable = null;

        /**
         * cold阶段转入时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ColdMinAge = null;

        /**
         * 是否开启frozen阶段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrozenEnable = null;

        /**
         * frozen阶段转入时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrozenMinAge = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WarmEnable = 'WarmEnable' in params ? params.WarmEnable : null;
        this.WarmMinAge = 'WarmMinAge' in params ? params.WarmMinAge : null;
        this.ColdEnable = 'ColdEnable' in params ? params.ColdEnable : null;
        this.ColdMinAge = 'ColdMinAge' in params ? params.ColdMinAge : null;
        this.FrozenEnable = 'FrozenEnable' in params ? params.FrozenEnable : null;
        this.FrozenMinAge = 'FrozenMinAge' in params ? params.FrozenMinAge : null;

    }
}

/**
 * 集群中一种节点类型（如热数据节点，冷数据节点，专用主节点等）的规格描述信息，包括节点类型，节点个数，节点规格，磁盘类型，磁盘大小等, Type不指定时默认为热数据节点；如果节点为master节点，则DiskType和DiskSize参数会被忽略（主节点无数据盘）
 * @class
 */
class NodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点类型<li>hotData: 热数据节点</li>
<li>warmData: 冷数据节点</li>
<li>dedicatedMaster: 专用主节点</li>
默认值为hotData
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 节点磁盘类型<li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高硬能云硬盘</li>默认值CLOUD_SSD
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 节点磁盘容量（单位GB）
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 节点本地盘信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LocalDiskInfo || null}
         */
        this.LocalDiskInfo = null;

        /**
         * 节点磁盘块数
         * @type {number || null}
         */
        this.DiskCount = null;

        /**
         * 节点磁盘是否加密 0: 不加密，1: 加密；默认不加密
         * @type {number || null}
         */
        this.DiskEncrypt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

        if (params.LocalDiskInfo) {
            let obj = new LocalDiskInfo();
            obj.deserialize(params.LocalDiskInfo)
            this.LocalDiskInfo = obj;
        }
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;
        this.DiskEncrypt = 'DiskEncrypt' in params ? params.DiskEncrypt : null;

    }
}

/**
 * UpgradeInstance返回参数结构体
 * @class
 */
class UpgradeInstanceResponse extends  AbstractModel {
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
 * UpdateJdk请求参数结构体
 * @class
 */
class UpdateJdkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Jdk类型，支持kona和oracle
         * @type {string || null}
         */
        this.Jdk = null;

        /**
         * Gc类型，支持g1和cms
         * @type {string || null}
         */
        this.Gc = null;

        /**
         * 是否强制重启
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Jdk = 'Jdk' in params ? params.Jdk : null;
        this.Gc = 'Gc' in params ? params.Gc : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * DescribeIndexMeta返回参数结构体
 * @class
 */
class DescribeIndexMetaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 索引元数据字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IndexMetaField || null}
         */
        this.IndexMetaField = null;

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

        if (params.IndexMetaField) {
            let obj = new IndexMetaField();
            obj.deserialize(params.IndexMetaField)
            this.IndexMetaField = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateInstance返回参数结构体
 * @class
 */
class UpdateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceOperations请求参数结构体
 * @class
 */
class DescribeInstanceOperationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 起始时间, e.g. "2019-03-07 16:30:39"
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间, e.g. "2019-03-30 20:18:03"
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页起始值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateIndex返回参数结构体
 * @class
 */
class CreateIndexResponse extends  AbstractModel {
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
 * 操作详情
 * @class
 */
class OperationDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例原始配置信息
         * @type {Array.<KeyValue> || null}
         */
        this.OldInfo = null;

        /**
         * 实例更新后配置信息
         * @type {Array.<KeyValue> || null}
         */
        this.NewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OldInfo) {
            this.OldInfo = new Array();
            for (let z in params.OldInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.OldInfo[z]);
                this.OldInfo.push(obj);
            }
        }

        if (params.NewInfo) {
            this.NewInfo = new Array();
            for (let z in params.NewInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.NewInfo[z]);
                this.NewInfo.push(obj);
            }
        }

    }
}

/**
 * DiagnoseInstance返回参数结构体
 * @class
 */
class DiagnoseInstanceResponse extends  AbstractModel {
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
 * Kibana视图数据
 * @class
 */
class KibanaView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kibana节点IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 节点总磁盘大小
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 磁盘使用率
         * @type {number || null}
         */
        this.DiskUsage = null;

        /**
         * 节点内存大小
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 内存使用率
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * 节点cpu个数
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * cpu使用率
         * @type {number || null}
         */
        this.CpuUsage = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.CpuUsage = 'CpuUsage' in params ? params.CpuUsage : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * ES公网访问访问控制信息
 * @class
 */
class EsPublicAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问黑名单
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * 访问白名单
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;

    }
}

/**
 * 后备索引元数据字段
 * @class
 */
class BackingIndexMetaField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后备索引名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * 后备索引状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexStatus = null;

        /**
         * 后备索引存储大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IndexStorage = null;

        /**
         * 后备索引当前生命周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexPhrase = null;

        /**
         * 后备索引创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexCreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.IndexStatus = 'IndexStatus' in params ? params.IndexStatus : null;
        this.IndexStorage = 'IndexStorage' in params ? params.IndexStorage : null;
        this.IndexPhrase = 'IndexPhrase' in params ? params.IndexPhrase : null;
        this.IndexCreateTime = 'IndexCreateTime' in params ? params.IndexCreateTime : null;

    }
}

/**
 * ik插件词典信息
 * @class
 */
class DictInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词典键值
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 词典名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 词典大小，单位B
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * RestartInstance返回参数结构体
 * @class
 */
class RestartInstanceResponse extends  AbstractModel {
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
 * RestartKibana请求参数结构体
 * @class
 */
class RestartKibanaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES实例ID
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
 * CreateInstance返回参数结构体
 * @class
 */
class CreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 索引配置字段
 * @class
 */
class IndexSettingsField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 索引主分片数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NumberOfShards = null;

        /**
         * 索引副本分片数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NumberOfReplicas = null;

        /**
         * 索引刷新频率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RefreshInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NumberOfShards = 'NumberOfShards' in params ? params.NumberOfShards : null;
        this.NumberOfReplicas = 'NumberOfReplicas' in params ? params.NumberOfReplicas : null;
        this.RefreshInterval = 'RefreshInterval' in params ? params.RefreshInterval : null;

    }
}

/**
 * DescribeInstanceLogs请求参数结构体
 * @class
 */
class DescribeInstanceLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 日志类型，默认值为1
<li>1, 主日志</li>
<li>2, 搜索慢日志</li>
<li>3, 索引慢日志</li>
<li>4, GC日志</li>
         * @type {number || null}
         */
        this.LogType = null;

        /**
         * 搜索词，支持LUCENE语法，如 level:WARN、ip:1.1.1.1、message:test-index等
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 日志开始时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 日志结束时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页起始值, 默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认值为100，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 时间排序方式，默认值为0
<li>0, 降序</li>
<li>1, 升序</li>
         * @type {number || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * UpdateDictionaries请求参数结构体
 * @class
 */
class UpdateDictionariesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IK分词主词典COS地址
         * @type {Array.<string> || null}
         */
        this.IkMainDicts = null;

        /**
         * IK分词停用词词典COS地址
         * @type {Array.<string> || null}
         */
        this.IkStopwords = null;

        /**
         * 同义词词典COS地址
         * @type {Array.<string> || null}
         */
        this.Synonym = null;

        /**
         * QQ分词词典COS地址
         * @type {Array.<string> || null}
         */
        this.QQDict = null;

        /**
         * 0：安装；1：删除。默认值0
         * @type {number || null}
         */
        this.UpdateType = null;

        /**
         * 是否强制重启集群。默认值false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IkMainDicts = 'IkMainDicts' in params ? params.IkMainDicts : null;
        this.IkStopwords = 'IkStopwords' in params ? params.IkStopwords : null;
        this.Synonym = 'Synonym' in params ? params.Synonym : null;
        this.QQDict = 'QQDict' in params ? params.QQDict : null;
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * 多可用区部署时可用区的详细信息
 * @class
 */
class ZoneDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * UpdateRequestTargetNodeTypes请求参数结构体
 * @class
 */
class UpdateRequestTargetNodeTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 接收请求的目标节点类型列表
         * @type {Array.<string> || null}
         */
        this.TargetNodeTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TargetNodeTypes = 'TargetNodeTypes' in params ? params.TargetNodeTypes : null;

    }
}

/**
 * 节点维度视图数据
 * @class
 */
class NodeView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点IP
         * @type {string || null}
         */
        this.NodeIp = null;

        /**
         * 节点是否可见
         * @type {number || null}
         */
        this.Visible = null;

        /**
         * 是否熔断
         * @type {number || null}
         */
        this.Break = null;

        /**
         * 节点总磁盘大小
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 磁盘使用率
         * @type {number || null}
         */
        this.DiskUsage = null;

        /**
         * 节点内存大小，单位GB
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 内存使用率
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * 节点cpu个数
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * cpu使用率
         * @type {number || null}
         */
        this.CpuUsage = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 节点角色
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * 节点HTTP IP
         * @type {string || null}
         */
        this.NodeHttpIp = null;

        /**
         * JVM内存使用率
         * @type {number || null}
         */
        this.JvmMemUsage = null;

        /**
         * 节点分片数
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * 节点上磁盘ID列表
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * 是否为隐藏可用区
         * @type {boolean || null}
         */
        this.Hidden = null;

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
        this.Visible = 'Visible' in params ? params.Visible : null;
        this.Break = 'Break' in params ? params.Break : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.CpuUsage = 'CpuUsage' in params ? params.CpuUsage : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.NodeHttpIp = 'NodeHttpIp' in params ? params.NodeHttpIp : null;
        this.JvmMemUsage = 'JvmMemUsage' in params ? params.JvmMemUsage : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.Hidden = 'Hidden' in params ? params.Hidden : null;

    }
}

/**
 * DescribeIndexList请求参数结构体
 * @class
 */
class DescribeIndexListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 索引类型。auto：自治索引；normal：普通索引
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * ES集群ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 索引名，若填空则获取所有索引
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * 集群访问用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 集群访问密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 分页起始位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页展示数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持索引名：IndexName、索引存储量：IndexStorage、索引创建时间：IndexCreateTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 过滤索引状态
         * @type {Array.<string> || null}
         */
        this.IndexStatusList = null;

        /**
         * 排序顺序，支持asc、desc
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.IndexStatusList = 'IndexStatusList' in params ? params.IndexStatusList : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * ES cos自动备份信息
 * @class
 */
class CosBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启cos自动备份
         * @type {boolean || null}
         */
        this.IsAutoBackup = null;

        /**
         * 自动备份执行时间（精确到小时）, e.g. "22:00"
         * @type {string || null}
         */
        this.BackupTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsAutoBackup = 'IsAutoBackup' in params ? params.IsAutoBackup : null;
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;

    }
}

/**
 * 实例标签信息
 * @class
 */
class TagInfo extends  AbstractModel {
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

/**
 * OperationDetail使用此结构的数组描述新旧配置
 * @class
 */
class KeyValue extends  AbstractModel {
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
 * CreateInstance请求参数结构体
 * @class
 */
class CreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例版本（支持"5.6.4"、"6.4.3"、"6.8.2"、"7.5.1"、"7.10.1"）
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 访问密码（密码需8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号）
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_）
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 已废弃请使用NodeInfoList
节点数量（2-50个）
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 计费类型<li>PREPAID：预付费，即包年包月</li><li>POSTPAID_BY_HOUR：按小时后付费</li>默认值POSTPAID_BY_HOUR
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 包年包月购买时长（单位由参数TimeUnit决定）
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * 自动续费标识<li>RENEW_FLAG_AUTO：自动续费</li><li>RENEW_FLAG_MANUAL：不自动续费，用户手动续费</li>ChargeType为PREPAID时需要设置，如不传递该参数，普通用户默认不自动续费，SVIP用户自动续费
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 已废弃请使用NodeInfoList
节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 已废弃请使用NodeInfoList
节点磁盘类型<li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高硬能云硬盘</li>默认值CLOUD_SSD
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 已废弃请使用NodeInfoList
节点磁盘容量（单位GB）
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 计费时长单位（ChargeType为PREPAID时需要设置，默认值为“m”，表示月，当前只支持“m”）
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 是否自动使用代金券<li>0：不自动使用</li><li>1：自动使用</li>默认值0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表（目前仅支持指定一张代金券）
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 已废弃请使用NodeInfoList
是否创建专用主节点<li>true：开启专用主节点</li><li>false：不开启专用主节点</li>默认值false
         * @type {boolean || null}
         */
        this.EnableDedicatedMaster = null;

        /**
         * 已废弃请使用NodeInfoList
专用主节点个数（只支持3个和5个，EnableDedicatedMaster为true时该值必传）
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * 已废弃请使用NodeInfoList
专用主节点类型（EnableDedicatedMaster为true时必传）<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * 已废弃请使用NodeInfoList
专用主节点磁盘大小（单位GB，非必传，若传递则必须为50，暂不支持自定义）
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * 集群配置文件中的ClusterName（系统默认配置为实例ID，暂不支持自定义）
         * @type {string || null}
         */
        this.ClusterNameInConf = null;

        /**
         * 集群部署方式<li>0：单可用区部署</li><li>1：多可用区部署</li>默认为0
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * 多可用区部署时可用区的详细信息(DeployMode为1时必传)
         * @type {Array.<ZoneDetail> || null}
         */
        this.MultiZoneInfo = null;

        /**
         * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * 节点信息列表， 用于描述集群各类节点的规格信息如节点类型，节点个数，节点规格，磁盘类型，磁盘大小等
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfoList = null;

        /**
         * 节点标签信息列表
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * 场景化模板类型 0：不启用 1：通用 2：日志 3：搜索
         * @type {number || null}
         */
        this.SceneType = null;

        /**
         * 可视化节点配置
         * @type {WebNodeTypeInfo || null}
         */
        this.WebNodeTypeInfo = null;

        /**
         * 创建https集群，默认是http
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ClusterNameInConf = 'ClusterNameInConf' in params ? params.ClusterNameInConf : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;

        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;

        if (params.WebNodeTypeInfo) {
            let obj = new WebNodeTypeInfo();
            obj.deserialize(params.WebNodeTypeInfo)
            this.WebNodeTypeInfo = obj;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * UpdateDictionaries返回参数结构体
 * @class
 */
class UpdateDictionariesResponse extends  AbstractModel {
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
 * 实例详细信息
 * @class
 */
class InstanceInfo extends  AbstractModel {
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
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 用户ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户UIN
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 实例所属VPC的UID
         * @type {string || null}
         */
        this.VpcUid = null;

        /**
         * 实例所属子网的UID
         * @type {string || null}
         */
        this.SubnetUid = null;

        /**
         * 实例状态，0:处理中,1:正常,-1停止,-2:销毁中,-3:已销毁
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 自动续费标识。取值范围：
RENEW_FLAG_AUTO：自动续费  
RENEW_FLAG_MANUAL：不自动续费
默认取值：
RENEW_FLAG_DEFAULT：不自动续费
若该参数指定为 RENEW_FLAG_AUTO，在账户余额充足的情况下，实例到期后将按月自动续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 实例计费模式。取值范围：  PREPAID：表示预付费，即包年包月  POSTPAID_BY_HOUR：表示后付费，即按量计费  CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 包年包月购买时长,单位:月
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * 节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点个数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 节点CPU核数
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * 节点内存大小，单位GB
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 节点磁盘类型
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 节点磁盘大小，单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ES域名
         * @type {string || null}
         */
        this.EsDomain = null;

        /**
         * ES VIP
         * @type {string || null}
         */
        this.EsVip = null;

        /**
         * ES端口
         * @type {number || null}
         */
        this.EsPort = null;

        /**
         * Kibana访问url
         * @type {string || null}
         */
        this.KibanaUrl = null;

        /**
         * ES版本号
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * ES配置项
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * Kibana访问控制配置
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例最后修改操作时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 实例到期时间
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * 实例类型（实例类型标识，当前只有1,2两种）
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Ik分词器配置
         * @type {EsDictionaryInfo || null}
         */
        this.IkConfig = null;

        /**
         * 专用主节点配置
         * @type {MasterNodeInfo || null}
         */
        this.MasterNodeInfo = null;

        /**
         * cos自动备份配置
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

        /**
         * 是否允许cos自动备份
         * @type {boolean || null}
         */
        this.AllowCosBackup = null;

        /**
         * 实例拥有的标签列表
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * 是否为冷热集群<li>true: 冷热集群</li><li>false: 非冷热集群</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableHotWarmMode = null;

        /**
         * 温节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WarmNodeType = null;

        /**
         * 温节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WarmNodeNum = null;

        /**
         * 温节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WarmCpuNum = null;

        /**
         * 温节点内存内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WarmMemSize = null;

        /**
         * 温节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WarmDiskType = null;

        /**
         * 温节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WarmDiskSize = null;

        /**
         * 集群节点信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfoList = null;

        /**
         * Es公网地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EsPublicUrl = null;

        /**
         * 多可用区网络信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ZoneDetail> || null}
         */
        this.MultiZoneInfo = null;

        /**
         * 部署模式<li>0：单可用区</li><li>1：多可用区</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * ES公网访问状态<li>OPEN：开启</li><li>CLOSE：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicAccess = null;

        /**
         * ES公网访问控制配置
         * @type {EsAcl || null}
         */
        this.EsPublicAcl = null;

        /**
         * Kibana内网地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KibanaPrivateUrl = null;

        /**
         * Kibana公网访问状态<li>OPEN：开启</li><li>CLOSE：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KibanaPublicAccess = null;

        /**
         * Kibana内网访问状态<li>OPEN：开启</li><li>CLOSE：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KibanaPrivateAccess = null;

        /**
         * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * 场景化模板类型：0、不开启；1、通用场景；2、日志场景；3、搜索场景
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SceneType = null;

        /**
         * Kibana配置项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KibanaConfig = null;

        /**
         * Kibana节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {KibanaNodeInfo || null}
         */
        this.KibanaNodeInfo = null;

        /**
         * 可视化节点配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WebNodeTypeInfo || null}
         */
        this.WebNodeTypeInfo = null;

        /**
         * JDK类型，oracle或kona
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Jdk = null;

        /**
         * 集群网络通讯协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 安全组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

        /**
         * 冷节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ColdNodeType = null;

        /**
         * 冷节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ColdNodeNum = null;

        /**
         * 冷节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ColdCpuNum = null;

        /**
         * 冷节点内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ColdMemSize = null;

        /**
         * 冷节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ColdDiskType = null;

        /**
         * 冷节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ColdDiskSize = null;

        /**
         * 冻节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrozenNodeType = null;

        /**
         * 冻节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FrozenNodeNum = null;

        /**
         * 冻节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FrozenCpuNum = null;

        /**
         * 冻节点内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FrozenMemSize = null;

        /**
         * 冻节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrozenDiskType = null;

        /**
         * 冻节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FrozenDiskSize = null;

        /**
         * 集群健康状态 -1 未知；0 Green; 1 Yellow; 2 Red
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HealthStatus = null;

        /**
         * https集群内网url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EsPrivateUrl = null;

        /**
         * https集群内网域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EsPrivateDomain = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.VpcUid = 'VpcUid' in params ? params.VpcUid : null;
        this.SubnetUid = 'SubnetUid' in params ? params.SubnetUid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.EsDomain = 'EsDomain' in params ? params.EsDomain : null;
        this.EsVip = 'EsVip' in params ? params.EsVip : null;
        this.EsPort = 'EsPort' in params ? params.EsPort : null;
        this.KibanaUrl = 'KibanaUrl' in params ? params.KibanaUrl : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.IkConfig) {
            let obj = new EsDictionaryInfo();
            obj.deserialize(params.IkConfig)
            this.IkConfig = obj;
        }

        if (params.MasterNodeInfo) {
            let obj = new MasterNodeInfo();
            obj.deserialize(params.MasterNodeInfo)
            this.MasterNodeInfo = obj;
        }

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }
        this.AllowCosBackup = 'AllowCosBackup' in params ? params.AllowCosBackup : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.EnableHotWarmMode = 'EnableHotWarmMode' in params ? params.EnableHotWarmMode : null;
        this.WarmNodeType = 'WarmNodeType' in params ? params.WarmNodeType : null;
        this.WarmNodeNum = 'WarmNodeNum' in params ? params.WarmNodeNum : null;
        this.WarmCpuNum = 'WarmCpuNum' in params ? params.WarmCpuNum : null;
        this.WarmMemSize = 'WarmMemSize' in params ? params.WarmMemSize : null;
        this.WarmDiskType = 'WarmDiskType' in params ? params.WarmDiskType : null;
        this.WarmDiskSize = 'WarmDiskSize' in params ? params.WarmDiskSize : null;

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }
        this.EsPublicUrl = 'EsPublicUrl' in params ? params.EsPublicUrl : null;

        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;

        if (params.EsPublicAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsPublicAcl)
            this.EsPublicAcl = obj;
        }
        this.KibanaPrivateUrl = 'KibanaPrivateUrl' in params ? params.KibanaPrivateUrl : null;
        this.KibanaPublicAccess = 'KibanaPublicAccess' in params ? params.KibanaPublicAccess : null;
        this.KibanaPrivateAccess = 'KibanaPrivateAccess' in params ? params.KibanaPrivateAccess : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.KibanaConfig = 'KibanaConfig' in params ? params.KibanaConfig : null;

        if (params.KibanaNodeInfo) {
            let obj = new KibanaNodeInfo();
            obj.deserialize(params.KibanaNodeInfo)
            this.KibanaNodeInfo = obj;
        }

        if (params.WebNodeTypeInfo) {
            let obj = new WebNodeTypeInfo();
            obj.deserialize(params.WebNodeTypeInfo)
            this.WebNodeTypeInfo = obj;
        }
        this.Jdk = 'Jdk' in params ? params.Jdk : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;
        this.ColdNodeType = 'ColdNodeType' in params ? params.ColdNodeType : null;
        this.ColdNodeNum = 'ColdNodeNum' in params ? params.ColdNodeNum : null;
        this.ColdCpuNum = 'ColdCpuNum' in params ? params.ColdCpuNum : null;
        this.ColdMemSize = 'ColdMemSize' in params ? params.ColdMemSize : null;
        this.ColdDiskType = 'ColdDiskType' in params ? params.ColdDiskType : null;
        this.ColdDiskSize = 'ColdDiskSize' in params ? params.ColdDiskSize : null;
        this.FrozenNodeType = 'FrozenNodeType' in params ? params.FrozenNodeType : null;
        this.FrozenNodeNum = 'FrozenNodeNum' in params ? params.FrozenNodeNum : null;
        this.FrozenCpuNum = 'FrozenCpuNum' in params ? params.FrozenCpuNum : null;
        this.FrozenMemSize = 'FrozenMemSize' in params ? params.FrozenMemSize : null;
        this.FrozenDiskType = 'FrozenDiskType' in params ? params.FrozenDiskType : null;
        this.FrozenDiskSize = 'FrozenDiskSize' in params ? params.FrozenDiskSize : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.EsPrivateUrl = 'EsPrivateUrl' in params ? params.EsPrivateUrl : null;
        this.EsPrivateDomain = 'EsPrivateDomain' in params ? params.EsPrivateDomain : null;

    }
}

/**
 * DeleteInstance返回参数结构体
 * @class
 */
class DeleteInstanceResponse extends  AbstractModel {
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
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的实例个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         * @type {Array.<InstanceInfo> || null}
         */
        this.InstanceList = null;

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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceInfo();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogs返回参数结构体
 * @class
 */
class DescribeInstanceLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的日志条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 日志详细信息列表
         * @type {Array.<InstanceLog> || null}
         */
        this.InstanceLogList = null;

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

        if (params.InstanceLogList) {
            this.InstanceLogList = new Array();
            for (let z in params.InstanceLogList) {
                let obj = new InstanceLog();
                obj.deserialize(params.InstanceLogList[z]);
                this.InstanceLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 索引元数据字段
 * @class
 */
class IndexMetaField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 索引类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * 索引名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * 索引状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexStatus = null;

        /**
         * 索引存储大小，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IndexStorage = null;

        /**
         * 索引创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexCreateTime = null;

        /**
         * 后备索引
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BackingIndexMetaField> || null}
         */
        this.BackingIndices = null;

        /**
         * 索引所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 索引所属集群名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 索引所属集群版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * 索引生命周期字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IndexPolicyField || null}
         */
        this.IndexPolicyField = null;

        /**
         * 索引自治字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IndexOptionsField || null}
         */
        this.IndexOptionsField = null;

        /**
         * 索引配置字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IndexSettingsField || null}
         */
        this.IndexSettingsField = null;

        /**
         * 索引所属集群APP ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.IndexStatus = 'IndexStatus' in params ? params.IndexStatus : null;
        this.IndexStorage = 'IndexStorage' in params ? params.IndexStorage : null;
        this.IndexCreateTime = 'IndexCreateTime' in params ? params.IndexCreateTime : null;

        if (params.BackingIndices) {
            this.BackingIndices = new Array();
            for (let z in params.BackingIndices) {
                let obj = new BackingIndexMetaField();
                obj.deserialize(params.BackingIndices[z]);
                this.BackingIndices.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;

        if (params.IndexPolicyField) {
            let obj = new IndexPolicyField();
            obj.deserialize(params.IndexPolicyField)
            this.IndexPolicyField = obj;
        }

        if (params.IndexOptionsField) {
            let obj = new IndexOptionsField();
            obj.deserialize(params.IndexOptionsField)
            this.IndexOptionsField = obj;
        }

        if (params.IndexSettingsField) {
            let obj = new IndexSettingsField();
            obj.deserialize(params.IndexSettingsField)
            this.IndexSettingsField = obj;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * UpdatePlugins返回参数结构体
 * @class
 */
class UpdatePluginsResponse extends  AbstractModel {
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
 * DiagnoseInstance请求参数结构体
 * @class
 */
class DiagnoseInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 需要触发的诊断项
         * @type {Array.<string> || null}
         */
        this.DiagnoseJobs = null;

        /**
         * 需要诊断的索引，支持通配符
         * @type {string || null}
         */
        this.DiagnoseIndices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DiagnoseJobs = 'DiagnoseJobs' in params ? params.DiagnoseJobs : null;
        this.DiagnoseIndices = 'DiagnoseIndices' in params ? params.DiagnoseIndices : null;

    }
}

/**
 * RestartInstance请求参数结构体
 * @class
 */
class RestartInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否强制重启<li>true：强制重启</li><li>false：不强制重启</li>默认false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

        /**
         * 重启模式：0 滚动重启； 1 全量重启
         * @type {number || null}
         */
        this.RestartMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;
        this.RestartMode = 'RestartMode' in params ? params.RestartMode : null;

    }
}

/**
 * RestartKibana返回参数结构体
 * @class
 */
class RestartKibanaResponse extends  AbstractModel {
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
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例所属可用区，不传则默认所有可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 集群实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 集群实例名称列表
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * 分页起始值, 默认值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认值20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段<li>1：实例ID</li><li>2：实例名称</li><li>3：可用区</li><li>4：创建时间</li>若orderKey未传递则按创建时间降序排序
         * @type {number || null}
         */
        this.OrderByKey = null;

        /**
         * 排序方式<li>0：升序</li><li>1：降序</li>若传递了orderByKey未传递orderByType, 则默认升序
         * @type {number || null}
         */
        this.OrderByType = null;

        /**
         * 节点标签信息列表
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * 私有网络vip列表
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * 可用区列表
         * @type {Array.<string> || null}
         */
        this.ZoneList = null;

        /**
         * 健康状态筛列表
         * @type {Array.<number> || null}
         */
        this.HealthStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByKey = 'OrderByKey' in params ? params.OrderByKey : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.ZoneList = 'ZoneList' in params ? params.ZoneList : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;

    }
}

/**
 * CreateIndex请求参数结构体
 * @class
 */
class CreateIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES集群ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 创建的索引类型。auto：自治索引；normal：普通索引
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * 创建的索引名
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * 创建的索引元数据JSON，如mappings、settings
         * @type {string || null}
         */
        this.IndexMetaJson = null;

        /**
         * 集群访问用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 集群访问密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.IndexMetaJson = 'IndexMetaJson' in params ? params.IndexMetaJson : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 集群维度视图数据
 * @class
 */
class ClusterView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群健康状态
         * @type {number || null}
         */
        this.Health = null;

        /**
         * 集群是否可见
         * @type {number || null}
         */
        this.Visible = null;

        /**
         * 集群是否熔断
         * @type {number || null}
         */
        this.Break = null;

        /**
         * 平均磁盘使用率
         * @type {number || null}
         */
        this.AvgDiskUsage = null;

        /**
         * 平均内存使用率
         * @type {number || null}
         */
        this.AvgMemUsage = null;

        /**
         * 平均cpu使用率
         * @type {number || null}
         */
        this.AvgCpuUsage = null;

        /**
         * 集群总存储大小
         * @type {number || null}
         */
        this.TotalDiskSize = null;

        /**
         * 客户端请求节点
         * @type {Array.<string> || null}
         */
        this.TargetNodeTypes = null;

        /**
         * 在线节点数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 总节点数
         * @type {number || null}
         */
        this.TotalNodeNum = null;

        /**
         * 数据节点数
         * @type {number || null}
         */
        this.DataNodeNum = null;

        /**
         * 索引数
         * @type {number || null}
         */
        this.IndexNum = null;

        /**
         * 文档数
         * @type {number || null}
         */
        this.DocNum = null;

        /**
         * 磁盘已使用字节数
         * @type {number || null}
         */
        this.DiskUsedInBytes = null;

        /**
         * 分片个数
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * 主分片个数
         * @type {number || null}
         */
        this.PrimaryShardNum = null;

        /**
         * 迁移中的分片个数
         * @type {number || null}
         */
        this.RelocatingShardNum = null;

        /**
         * 初始化中的分片个数
         * @type {number || null}
         */
        this.InitializingShardNum = null;

        /**
         * 未分配的分片个数
         * @type {number || null}
         */
        this.UnassignedShardNum = null;

        /**
         * 企业版COS存储容量大小，单位GB
         * @type {number || null}
         */
        this.TotalCosStorage = null;

        /**
         * 企业版集群可搜索快照cos存放的bucket名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SearchableSnapshotCosBucket = null;

        /**
         * 企业版集群可搜索快照cos所属appid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SearchableSnapshotCosAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Health = 'Health' in params ? params.Health : null;
        this.Visible = 'Visible' in params ? params.Visible : null;
        this.Break = 'Break' in params ? params.Break : null;
        this.AvgDiskUsage = 'AvgDiskUsage' in params ? params.AvgDiskUsage : null;
        this.AvgMemUsage = 'AvgMemUsage' in params ? params.AvgMemUsage : null;
        this.AvgCpuUsage = 'AvgCpuUsage' in params ? params.AvgCpuUsage : null;
        this.TotalDiskSize = 'TotalDiskSize' in params ? params.TotalDiskSize : null;
        this.TargetNodeTypes = 'TargetNodeTypes' in params ? params.TargetNodeTypes : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.TotalNodeNum = 'TotalNodeNum' in params ? params.TotalNodeNum : null;
        this.DataNodeNum = 'DataNodeNum' in params ? params.DataNodeNum : null;
        this.IndexNum = 'IndexNum' in params ? params.IndexNum : null;
        this.DocNum = 'DocNum' in params ? params.DocNum : null;
        this.DiskUsedInBytes = 'DiskUsedInBytes' in params ? params.DiskUsedInBytes : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.PrimaryShardNum = 'PrimaryShardNum' in params ? params.PrimaryShardNum : null;
        this.RelocatingShardNum = 'RelocatingShardNum' in params ? params.RelocatingShardNum : null;
        this.InitializingShardNum = 'InitializingShardNum' in params ? params.InitializingShardNum : null;
        this.UnassignedShardNum = 'UnassignedShardNum' in params ? params.UnassignedShardNum : null;
        this.TotalCosStorage = 'TotalCosStorage' in params ? params.TotalCosStorage : null;
        this.SearchableSnapshotCosBucket = 'SearchableSnapshotCosBucket' in params ? params.SearchableSnapshotCosBucket : null;
        this.SearchableSnapshotCosAppId = 'SearchableSnapshotCosAppId' in params ? params.SearchableSnapshotCosAppId : null;

    }
}

/**
 * UpdateInstance请求参数结构体
 * @class
 */
class UpdateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_）
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 已废弃请使用NodeInfoList
节点个数（2-50个）
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * ES配置项（JSON格式字符串）
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * 默认用户elastic的密码（8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号）
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 访问控制列表
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * 已废弃请使用NodeInfoList
磁盘大小（单位GB）
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 已废弃请使用NodeInfoList
节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 已废弃请使用NodeInfoList
专用主节点个数（只支持3个或5个）
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * 已废弃请使用NodeInfoList
专用主节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * 已废弃请使用NodeInfoList
专用主节点磁盘大小（单位GB系统默认配置为50GB,暂不支持自定义）
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * 更新配置时是否强制重启<li>true强制重启</li><li>false不强制重启</li>当前仅更新EsConfig时需要设置，默认值为false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

        /**
         * COS自动备份信息
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

        /**
         * 节点信息列表，可以只传递要更新的节点及其对应的规格信息。支持的操作包括<li>修改一种节点的个数</li><li>修改一种节点的节点规格及磁盘大小</li><li>增加一种节点类型（需要同时指定该节点的类型，个数，规格，磁盘等信息）</li>上述操作一次只能进行一种，且磁盘类型不支持修改
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfoList = null;

        /**
         * 公网访问状态
         * @type {string || null}
         */
        this.PublicAccess = null;

        /**
         * 公网访问控制列表
         * @type {EsPublicAcl || null}
         */
        this.EsPublicAcl = null;

        /**
         * Kibana公网访问状态
         * @type {string || null}
         */
        this.KibanaPublicAccess = null;

        /**
         * Kibana内网访问状态
         * @type {string || null}
         */
        this.KibanaPrivateAccess = null;

        /**
         * ES 6.8及以上版本基础版开启或关闭用户认证
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * Kibana内网端口
         * @type {number || null}
         */
        this.KibanaPrivatePort = null;

        /**
         * 0: 蓝绿变更方式扩容，集群不重启 （默认） 1: 磁盘解挂载扩容，集群滚动重启
         * @type {number || null}
         */
        this.ScaleType = null;

        /**
         * 多可用区部署
         * @type {Array.<ZoneDetail> || null}
         */
        this.MultiZoneInfo = null;

        /**
         * 场景化模板类型 -1：不启用 1：通用 2：日志 3：搜索
         * @type {number || null}
         */
        this.SceneType = null;

        /**
         * Kibana配置项（JSON格式字符串）
         * @type {string || null}
         */
        this.KibanaConfig = null;

        /**
         * 可视化节点配置
         * @type {WebNodeTypeInfo || null}
         */
        this.WebNodeTypeInfo = null;

        /**
         * 切换到新网络架构
         * @type {string || null}
         */
        this.SwitchPrivateLink = null;

        /**
         * 启用Cerebro
         * @type {boolean || null}
         */
        this.EnableCerebro = null;

        /**
         * Cerebro公网访问状态
         * @type {string || null}
         */
        this.CerebroPublicAccess = null;

        /**
         * Cerebro内网访问状态
         * @type {string || null}
         */
        this.CerebroPrivateAccess = null;

        /**
         * 新增或修改的配置组信息
         * @type {EsConfigSetInfo || null}
         */
        this.EsConfigSet = null;

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
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;

        if (params.EsPublicAcl) {
            let obj = new EsPublicAcl();
            obj.deserialize(params.EsPublicAcl)
            this.EsPublicAcl = obj;
        }
        this.KibanaPublicAccess = 'KibanaPublicAccess' in params ? params.KibanaPublicAccess : null;
        this.KibanaPrivateAccess = 'KibanaPrivateAccess' in params ? params.KibanaPrivateAccess : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.KibanaPrivatePort = 'KibanaPrivatePort' in params ? params.KibanaPrivatePort : null;
        this.ScaleType = 'ScaleType' in params ? params.ScaleType : null;

        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.KibanaConfig = 'KibanaConfig' in params ? params.KibanaConfig : null;

        if (params.WebNodeTypeInfo) {
            let obj = new WebNodeTypeInfo();
            obj.deserialize(params.WebNodeTypeInfo)
            this.WebNodeTypeInfo = obj;
        }
        this.SwitchPrivateLink = 'SwitchPrivateLink' in params ? params.SwitchPrivateLink : null;
        this.EnableCerebro = 'EnableCerebro' in params ? params.EnableCerebro : null;
        this.CerebroPublicAccess = 'CerebroPublicAccess' in params ? params.CerebroPublicAccess : null;
        this.CerebroPrivateAccess = 'CerebroPrivateAccess' in params ? params.CerebroPrivateAccess : null;

        if (params.EsConfigSet) {
            let obj = new EsConfigSetInfo();
            obj.deserialize(params.EsConfigSet)
            this.EsConfigSet = obj;
        }

    }
}

/**
 * ES 词库信息
 * @class
 */
class EsDictionaryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用词词典列表
         * @type {Array.<DictInfo> || null}
         */
        this.MainDict = null;

        /**
         * 停用词词典列表
         * @type {Array.<DictInfo> || null}
         */
        this.Stopwords = null;

        /**
         * QQ分词词典列表
         * @type {Array.<DictInfo> || null}
         */
        this.QQDict = null;

        /**
         * 同义词词典列表
         * @type {Array.<DictInfo> || null}
         */
        this.Synonym = null;

        /**
         * 更新词典类型
         * @type {string || null}
         */
        this.UpdateType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MainDict) {
            this.MainDict = new Array();
            for (let z in params.MainDict) {
                let obj = new DictInfo();
                obj.deserialize(params.MainDict[z]);
                this.MainDict.push(obj);
            }
        }

        if (params.Stopwords) {
            this.Stopwords = new Array();
            for (let z in params.Stopwords) {
                let obj = new DictInfo();
                obj.deserialize(params.Stopwords[z]);
                this.Stopwords.push(obj);
            }
        }

        if (params.QQDict) {
            this.QQDict = new Array();
            for (let z in params.QQDict) {
                let obj = new DictInfo();
                obj.deserialize(params.QQDict[z]);
                this.QQDict.push(obj);
            }
        }

        if (params.Synonym) {
            this.Synonym = new Array();
            for (let z in params.Synonym) {
                let obj = new DictInfo();
                obj.deserialize(params.Synonym[z]);
                this.Synonym.push(obj);
            }
        }
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;

    }
}

/**
 * DescribeInstanceOperations返回参数结构体
 * @class
 */
class DescribeInstanceOperationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 操作记录
         * @type {Array.<Operation> || null}
         */
        this.Operations = null;

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

        if (params.Operations) {
            this.Operations = new Array();
            for (let z in params.Operations) {
                let obj = new Operation();
                obj.deserialize(params.Operations[z]);
                this.Operations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartNodes请求参数结构体
 * @class
 */
class RestartNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点名称列表
         * @type {Array.<string> || null}
         */
        this.NodeNames = null;

        /**
         * 是否强制重启
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeNames = 'NodeNames' in params ? params.NodeNames : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * UpdatePlugins请求参数结构体
 * @class
 */
class UpdatePluginsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 需要安装的插件名列表
         * @type {Array.<string> || null}
         */
        this.InstallPluginList = null;

        /**
         * 需要卸载的插件名列表
         * @type {Array.<string> || null}
         */
        this.RemovePluginList = null;

        /**
         * 是否强制重启，默认值false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

        /**
         * 是否重新安装，默认值false
         * @type {boolean || null}
         */
        this.ForceUpdate = null;

        /**
         * 0：系统插件
         * @type {number || null}
         */
        this.PluginType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstallPluginList = 'InstallPluginList' in params ? params.InstallPluginList : null;
        this.RemovePluginList = 'RemovePluginList' in params ? params.RemovePluginList : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;
        this.ForceUpdate = 'ForceUpdate' in params ? params.ForceUpdate : null;
        this.PluginType = 'PluginType' in params ? params.PluginType : null;

    }
}

/**
 * GetRequestTargetNodeTypes请求参数结构体
 * @class
 */
class GetRequestTargetNodeTypesRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 实例Kibana节点相关信息
 * @class
 */
class KibanaNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kibana节点规格
         * @type {string || null}
         */
        this.KibanaNodeType = null;

        /**
         * Kibana节点个数
         * @type {number || null}
         */
        this.KibanaNodeNum = null;

        /**
         * Kibana节点CPU数
         * @type {number || null}
         */
        this.KibanaNodeCpuNum = null;

        /**
         * Kibana节点内存GB
         * @type {number || null}
         */
        this.KibanaNodeMemSize = null;

        /**
         * Kibana节点磁盘类型
         * @type {string || null}
         */
        this.KibanaNodeDiskType = null;

        /**
         * Kibana节点磁盘大小
         * @type {number || null}
         */
        this.KibanaNodeDiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KibanaNodeType = 'KibanaNodeType' in params ? params.KibanaNodeType : null;
        this.KibanaNodeNum = 'KibanaNodeNum' in params ? params.KibanaNodeNum : null;
        this.KibanaNodeCpuNum = 'KibanaNodeCpuNum' in params ? params.KibanaNodeCpuNum : null;
        this.KibanaNodeMemSize = 'KibanaNodeMemSize' in params ? params.KibanaNodeMemSize : null;
        this.KibanaNodeDiskType = 'KibanaNodeDiskType' in params ? params.KibanaNodeDiskType : null;
        this.KibanaNodeDiskSize = 'KibanaNodeDiskSize' in params ? params.KibanaNodeDiskSize : null;

    }
}

/**
 * UpdateDiagnoseSettings返回参数结构体
 * @class
 */
class UpdateDiagnoseSettingsResponse extends  AbstractModel {
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
 * UpgradeLicense返回参数结构体
 * @class
 */
class UpgradeLicenseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ES集群配置项
 * @class
 */
class EsAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * kibana访问黑名单
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * kibana访问白名单
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;

    }
}

/**
 * UpdateIndex请求参数结构体
 * @class
 */
class UpdateIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES集群ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 更新的索引类型。auto：自治索引；normal：普通索引
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * 更新的索引名
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * 更新的索引元数据JSON，如mappings、settings
         * @type {string || null}
         */
        this.UpdateMetaJson = null;

        /**
         * 集群访问用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 集群访问密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.UpdateMetaJson = 'UpdateMetaJson' in params ? params.UpdateMetaJson : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 实例专用主节点相关信息
 * @class
 */
class MasterNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用了专用主节点
         * @type {boolean || null}
         */
        this.EnableDedicatedMaster = null;

        /**
         * 专用主节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * 专用主节点个数
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * 专用主节点CPU核数
         * @type {number || null}
         */
        this.MasterNodeCpuNum = null;

        /**
         * 专用主节点内存大小，单位GB
         * @type {number || null}
         */
        this.MasterNodeMemSize = null;

        /**
         * 专用主节点磁盘大小，单位GB
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * 专用主节点磁盘类型
         * @type {string || null}
         */
        this.MasterNodeDiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeCpuNum = 'MasterNodeCpuNum' in params ? params.MasterNodeCpuNum : null;
        this.MasterNodeMemSize = 'MasterNodeMemSize' in params ? params.MasterNodeMemSize : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.MasterNodeDiskType = 'MasterNodeDiskType' in params ? params.MasterNodeDiskType : null;

    }
}

/**
 * 索引自治字段
 * @class
 */
class IndexOptionsField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireMaxAge = null;

        /**
         * 过期大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireMaxSize = null;

        /**
         * 滚动周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RolloverMaxAge = null;

        /**
         * 是否开启动态滚动
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RolloverDynamic = null;

        /**
         * 是否开启动态分片
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShardNumDynamic = null;

        /**
         * 时间分区字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimestampField = null;

        /**
         * 写入模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WriteMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExpireMaxAge = 'ExpireMaxAge' in params ? params.ExpireMaxAge : null;
        this.ExpireMaxSize = 'ExpireMaxSize' in params ? params.ExpireMaxSize : null;
        this.RolloverMaxAge = 'RolloverMaxAge' in params ? params.RolloverMaxAge : null;
        this.RolloverDynamic = 'RolloverDynamic' in params ? params.RolloverDynamic : null;
        this.ShardNumDynamic = 'ShardNumDynamic' in params ? params.ShardNumDynamic : null;
        this.TimestampField = 'TimestampField' in params ? params.TimestampField : null;
        this.WriteMode = 'WriteMode' in params ? params.WriteMode : null;

    }
}

/**
 * 实例操作记录中的流程任务信息
 * @class
 */
class TaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 任务完成时间
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 子任务
         * @type {Array.<SubTaskDetail> || null}
         */
        this.SubTasks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.SubTasks) {
            this.SubTasks = new Array();
            for (let z in params.SubTasks) {
                let obj = new SubTaskDetail();
                obj.deserialize(params.SubTasks[z]);
                this.SubTasks.push(obj);
            }
        }

    }
}

/**
 * DeleteInstance请求参数结构体
 * @class
 */
class DeleteInstanceRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeViews返回参数结构体
 * @class
 */
class DescribeViewsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群维度视图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClusterView || null}
         */
        this.ClusterView = null;

        /**
         * 节点维度视图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeView> || null}
         */
        this.NodesView = null;

        /**
         * Kibana维度视图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KibanaView> || null}
         */
        this.KibanasView = null;

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

        if (params.ClusterView) {
            let obj = new ClusterView();
            obj.deserialize(params.ClusterView)
            this.ClusterView = obj;
        }

        if (params.NodesView) {
            this.NodesView = new Array();
            for (let z in params.NodesView) {
                let obj = new NodeView();
                obj.deserialize(params.NodesView[z]);
                this.NodesView.push(obj);
            }
        }

        if (params.KibanasView) {
            this.KibanasView = new Array();
            for (let z in params.KibanasView) {
                let obj = new KibanaView();
                obj.deserialize(params.KibanasView[z]);
                this.KibanasView.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateJdk返回参数结构体
 * @class
 */
class UpdateJdkResponse extends  AbstractModel {
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
 * RestartNodes返回参数结构体
 * @class
 */
class RestartNodesResponse extends  AbstractModel {
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
 * 实例操作记录流程任务中的子任务信息（如升级检查任务中的各个检查项）
 * @class
 */
class SubTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子任务结果
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 子任务错误信息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 子任务类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 子任务状态，0处理中 1成功 -1失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 升级检查失败的索引名
         * @type {Array.<string> || null}
         */
        this.FailedIndices = null;

        /**
         * 子任务结束时间
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 子任务等级，1警告 2失败
         * @type {number || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailedIndices = 'FailedIndices' in params ? params.FailedIndices : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * DescribeIndexMeta请求参数结构体
 * @class
 */
class DescribeIndexMetaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES集群ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 索引类型。auto：自治索引；normal：普通索引
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * 索引名，若填空则获取所有索引
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * 集群访问用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 集群访问密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * UpgradeInstance请求参数结构体
 * @class
 */
class UpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 目标ES版本，支持：”6.4.3“, "6.8.2"，"7.5.1"
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * 是否只做升级检查，默认值为false
         * @type {boolean || null}
         */
        this.CheckOnly = null;

        /**
         * 目标商业特性版本：<li>oss 开源版</li><li>basic 基础版</li>当前仅在5.6.4升级6.x版本时使用，默认值为basic
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * 升级方式：<li>scale 蓝绿变更</li><li>restart 滚动重启</li>默认值为scale
         * @type {string || null}
         */
        this.UpgradeMode = null;

        /**
         * 升级版本前是否对集群进行备份，默认不备份
         * @type {boolean || null}
         */
        this.CosBackup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.CheckOnly = 'CheckOnly' in params ? params.CheckOnly : null;
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.UpgradeMode = 'UpgradeMode' in params ? params.UpgradeMode : null;
        this.CosBackup = 'CosBackup' in params ? params.CosBackup : null;

    }
}

/**
 * DeleteIndex返回参数结构体
 * @class
 */
class DeleteIndexResponse extends  AbstractModel {
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
 * DeleteIndex请求参数结构体
 * @class
 */
class DeleteIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES集群ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 删除的索引类型。auto：自治索引；normal：普通索引
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * 删除的索引名
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * 集群访问用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 集群访问密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 后备索引名
         * @type {string || null}
         */
        this.BackingIndexName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.BackingIndexName = 'BackingIndexName' in params ? params.BackingIndexName : null;

    }
}

/**
 * 配置组信息
 * @class
 */
class EsConfigSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置组类型，如ldap,ad等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * "{\"order\":0,\"url\":\"ldap://10.0.1.72:389\",\"bind_dn\":\"cn=admin,dc=tencent,dc=com\",\"user_search.base_dn\":\"dc=tencent,dc=com\",\"user_search.filter\":\"(cn={0})\",\"group_search.base_dn\":\"dc=tencent,dc=com\"}"
         * @type {string || null}
         */
        this.EsConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;

    }
}

/**
 * DescribeViews请求参数结构体
 * @class
 */
class DescribeViewsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
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
 * GetRequestTargetNodeTypes返回参数结构体
 * @class
 */
class GetRequestTargetNodeTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接收请求的目标节点类型列表
         * @type {Array.<string> || null}
         */
        this.TargetNodeTypes = null;

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
        this.TargetNodeTypes = 'TargetNodeTypes' in params ? params.TargetNodeTypes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDiagnoseSettings请求参数结构体
 * @class
 */
class UpdateDiagnoseSettingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 0：开启智能运维；-1：关闭智能运维
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 智能运维每天定时巡检时间
         * @type {string || null}
         */
        this.CronTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CronTime = 'CronTime' in params ? params.CronTime : null;

    }
}

/**
 * DescribeIndexList返回参数结构体
 * @class
 */
class DescribeIndexListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 索引元数据字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IndexMetaField> || null}
         */
        this.IndexMetaFields = null;

        /**
         * 查询总数
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

        if (params.IndexMetaFields) {
            this.IndexMetaFields = new Array();
            for (let z in params.IndexMetaFields) {
                let obj = new IndexMetaField();
                obj.deserialize(params.IndexMetaFields[z]);
                this.IndexMetaFields.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ES集群操作详细信息
 * @class
 */
class Operation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作唯一id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 操作开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 操作类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 操作详情
         * @type {OperationDetail || null}
         */
        this.Detail = null;

        /**
         * 操作结果
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 流程任务信息
         * @type {Array.<TaskDetail> || null}
         */
        this.Tasks = null;

        /**
         * 操作进度
         * @type {number || null}
         */
        this.Progress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Detail) {
            let obj = new OperationDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.Result = 'Result' in params ? params.Result : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Progress = 'Progress' in params ? params.Progress : null;

    }
}

/**
 * UpdateIndex返回参数结构体
 * @class
 */
class UpdateIndexResponse extends  AbstractModel {
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
 * UpgradeLicense请求参数结构体
 * @class
 */
class UpgradeLicenseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * 是否自动使用代金券<li>0：不自动使用</li><li>1：自动使用</li>默认值0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表（目前仅支持指定一张代金券）
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * 是否强制重启<li>true强制重启</li><li>false不强制重启</li> 默认值false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * UpdateRequestTargetNodeTypes返回参数结构体
 * @class
 */
class UpdateRequestTargetNodeTypesResponse extends  AbstractModel {
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
    WebNodeTypeInfo: WebNodeTypeInfo,
    InstanceLog: InstanceLog,
    LocalDiskInfo: LocalDiskInfo,
    IndexPolicyField: IndexPolicyField,
    NodeInfo: NodeInfo,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    UpdateJdkRequest: UpdateJdkRequest,
    DescribeIndexMetaResponse: DescribeIndexMetaResponse,
    UpdateInstanceResponse: UpdateInstanceResponse,
    DescribeInstanceOperationsRequest: DescribeInstanceOperationsRequest,
    CreateIndexResponse: CreateIndexResponse,
    OperationDetail: OperationDetail,
    DiagnoseInstanceResponse: DiagnoseInstanceResponse,
    KibanaView: KibanaView,
    EsPublicAcl: EsPublicAcl,
    BackingIndexMetaField: BackingIndexMetaField,
    DictInfo: DictInfo,
    RestartInstanceResponse: RestartInstanceResponse,
    RestartKibanaRequest: RestartKibanaRequest,
    CreateInstanceResponse: CreateInstanceResponse,
    IndexSettingsField: IndexSettingsField,
    DescribeInstanceLogsRequest: DescribeInstanceLogsRequest,
    UpdateDictionariesRequest: UpdateDictionariesRequest,
    ZoneDetail: ZoneDetail,
    UpdateRequestTargetNodeTypesRequest: UpdateRequestTargetNodeTypesRequest,
    NodeView: NodeView,
    DescribeIndexListRequest: DescribeIndexListRequest,
    CosBackup: CosBackup,
    TagInfo: TagInfo,
    KeyValue: KeyValue,
    CreateInstanceRequest: CreateInstanceRequest,
    UpdateDictionariesResponse: UpdateDictionariesResponse,
    InstanceInfo: InstanceInfo,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeInstanceLogsResponse: DescribeInstanceLogsResponse,
    IndexMetaField: IndexMetaField,
    UpdatePluginsResponse: UpdatePluginsResponse,
    DiagnoseInstanceRequest: DiagnoseInstanceRequest,
    RestartInstanceRequest: RestartInstanceRequest,
    RestartKibanaResponse: RestartKibanaResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    CreateIndexRequest: CreateIndexRequest,
    ClusterView: ClusterView,
    UpdateInstanceRequest: UpdateInstanceRequest,
    EsDictionaryInfo: EsDictionaryInfo,
    DescribeInstanceOperationsResponse: DescribeInstanceOperationsResponse,
    RestartNodesRequest: RestartNodesRequest,
    UpdatePluginsRequest: UpdatePluginsRequest,
    GetRequestTargetNodeTypesRequest: GetRequestTargetNodeTypesRequest,
    KibanaNodeInfo: KibanaNodeInfo,
    UpdateDiagnoseSettingsResponse: UpdateDiagnoseSettingsResponse,
    UpgradeLicenseResponse: UpgradeLicenseResponse,
    EsAcl: EsAcl,
    UpdateIndexRequest: UpdateIndexRequest,
    MasterNodeInfo: MasterNodeInfo,
    IndexOptionsField: IndexOptionsField,
    TaskDetail: TaskDetail,
    DeleteInstanceRequest: DeleteInstanceRequest,
    DescribeViewsResponse: DescribeViewsResponse,
    UpdateJdkResponse: UpdateJdkResponse,
    RestartNodesResponse: RestartNodesResponse,
    SubTaskDetail: SubTaskDetail,
    DescribeIndexMetaRequest: DescribeIndexMetaRequest,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    DeleteIndexResponse: DeleteIndexResponse,
    DeleteIndexRequest: DeleteIndexRequest,
    EsConfigSetInfo: EsConfigSetInfo,
    DescribeViewsRequest: DescribeViewsRequest,
    GetRequestTargetNodeTypesResponse: GetRequestTargetNodeTypesResponse,
    UpdateDiagnoseSettingsRequest: UpdateDiagnoseSettingsRequest,
    DescribeIndexListResponse: DescribeIndexListResponse,
    Operation: Operation,
    UpdateIndexResponse: UpdateIndexResponse,
    UpgradeLicenseRequest: UpgradeLicenseRequest,
    UpdateRequestTargetNodeTypesResponse: UpdateRequestTargetNodeTypesResponse,

}
