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
 * DescribeSpecInfo请求参数结构体
 * @class
 */
class DescribeSpecInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询可用区
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
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * CreateDBInstance请求参数结构体
 * @class
 */
class CreateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每个副本集内节点个数，当前副本集节点数固定为3，分片从节点数可选，具体参照查询云数据库的售卖规格返回参数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例内存大小，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * 实例数量, 最小值1，最大值为10
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 实例所属区域名称，格式如：ap-guangzhou-2
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 机器类型，HIO：高IO型；HIO10G：高IO万兆型
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * 实例类型，REPLSET-副本集，SHARD-分片集群
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * 项目ID，不设置为默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 私有网络 ID，如果不传则默认选择基础网络，请使用 查询私有网络列表
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 查询子网列表
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例密码，不设置该参数则需要在创建完成后通过设置密码接口初始化实例密码。密码必须是8-16位字符，且至少包含字母、数字和字符 !@#%^*() 中的两种
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 实例标签信息
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 自动续费标记，可选值为：0 - 不自动续费；1 - 自动续费。默认为不自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * IsolateDBInstance请求参数结构体
 * @class
 */
class IsolateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
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
 * DescribeBackupAccess返回参数结构体
 * @class
 */
class DescribeBackupAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 备份文件所在存储桶
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 备份文件的存储信息
         * @type {Array.<BackupFile> || null}
         */
        this.Files = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new BackupFile();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstanceHour请求参数结构体
 * @class
 */
class CreateDBInstanceHourRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例内存大小，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * 每个副本集内节点个数，当前副本集节点数固定为3，分片从节点数可选，具体参照查询云数据库的售卖规格返回参数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * 机器类型，HIO：高IO型；HIO10G：高IO万兆
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * 实例数量，最小值1，最大值为10
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 可用区信息，格式如：ap-guangzhou-2
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例类型，REPLSET-副本集，SHARD-分片集群
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 私有网络ID，如果不设置该参数则默认选择基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例密码，不设置该参数则需要在创建完成后通过设置密码接口初始化实例密码。密码必须是8-16位字符，且至少包含字母、数字和字符 !@#%^*() 中的两种
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 项目ID，不设置为默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例标签信息
         * @type {Array.<TagInfo> || null}
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
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * AssignProject请求参数结构体
 * @class
 */
class AssignProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 客户端连接信息，包括客户端IP和连接数
 * @class
 */
class ClientConnection extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接的客户端IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 对应客户端IP的连接数
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 备份信息
 * @class
 */
class BackupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份方式，0-自动备份，1-手动备份
         * @type {number || null}
         */
        this.BackupType = null;

        /**
         * 备份名称
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * 备份备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BackupDesc = null;

        /**
         * 备份文件大小，单位KB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * 备份开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 备份结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 备份状态，1-备份中，2-备份成功
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 备份方法，0-逻辑备份，1-物理备份
         * @type {number || null}
         */
        this.BackupMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.BackupDesc = 'BackupDesc' in params ? params.BackupDesc : null;
        this.BackupSize = 'BackupSize' in params ? params.BackupSize : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;

    }
}

/**
 * DescribeDBInstances请求参数结构体
 * @class
 */
class DescribeDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例类型，取值范围：0-所有实例,1-正式实例，2-临时实例, 3-只读实例，-1-正式实例+只读+灾备实例
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 集群类型，取值范围：0-副本集实例，1-分片实例，-1-所有实例
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * 实例状态，取值范围：0-待初始化，1-流程执行中，2-实例有效，-2-实例已过期
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 私有网络的ID，基础网络则不传该参数
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络的子网ID，基础网络则不传该参数。入参设置该参数的同时，必须设置相应的VpcId
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 付费类型，取值范围：0-按量计费，1-包年包月，-1-按量计费+包年包月
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 单次请求返回的数量，最小值为1，最大值为100，默认值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回结果集排序的字段，目前支持："ProjectId", "InstanceName", "CreateTime"，默认为升序排序
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回结果集排序方式，目前支持："ASC"或者"DESC"
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 项目 ID
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 搜索关键词，支持实例Id、实例名称、完整IP
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * 实例规格信息
 * @class
 */
class SpecificationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区信息
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 售卖规格信息
         * @type {Array.<SpecItem> || null}
         */
        this.SpecItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SpecItems) {
            this.SpecItems = new Array();
            for (let z in params.SpecItems) {
                let obj = new SpecItem();
                obj.deserialize(params.SpecItems[z]);
                this.SpecItems.push(obj);
            }
        }

    }
}

/**
 * ModifyDBInstanceSpec请求参数结构体
 * @class
 */
class ModifyDBInstanceSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例配置变更后的内存大小，单位：GB。内存和磁盘必须同时升配或同时降配
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例配置变更后的硬盘大小，单位：GB。内存和磁盘必须同时升配或同时降配。降配时，新的磁盘参数必须大于已用磁盘容量的1.2倍
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 实例配置变更后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90%
         * @type {number || null}
         */
        this.OplogSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.OplogSize = 'OplogSize' in params ? params.OplogSize : null;

    }
}

/**
 * DescribeSpecInfo返回参数结构体
 * @class
 */
class DescribeSpecInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例售卖规格信息列表
         * @type {Array.<SpecificationInfo> || null}
         */
        this.SpecInfoList = null;

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

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecificationInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeDBInstances返回参数结构体
 * @class
 */
class DescribeDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         * @type {Array.<InstanceDetail> || null}
         */
        this.InstanceDetails = null;

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

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new InstanceDetail();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OfflineIsolatedDBInstance请求参数结构体
 * @class
 */
class OfflineIsolatedDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
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
 * CreateDBInstance返回参数结构体
 * @class
 */
class CreateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 创建的实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignProject返回参数结构体
 * @class
 */
class AssignProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的异步任务ID列表
         * @type {Array.<number> || null}
         */
        this.FlowIds = null;

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
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBBackups请求参数结构体
 * @class
 */
class DescribeDBBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
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
 * DescribeClientConnections请求参数结构体
 * @class
 */
class DescribeClientConnectionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
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
 * 实例分片详情
 * @class
 */
class ShardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片已使用容量
         * @type {number || null}
         */
        this.UsedVolume = null;

        /**
         * 分片ID
         * @type {string || null}
         */
        this.ReplicaSetId = null;

        /**
         * 分片名
         * @type {string || null}
         */
        this.ReplicaSetName = null;

        /**
         * 分片内存规格，单位为MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 分片磁盘规格，单位为MB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 分片Oplog大小，单位为MB
         * @type {number || null}
         */
        this.OplogSize = null;

        /**
         * 分片从节点数
         * @type {number || null}
         */
        this.SecondaryNum = null;

        /**
         * 分片物理id
         * @type {string || null}
         */
        this.RealReplicaSetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsedVolume = 'UsedVolume' in params ? params.UsedVolume : null;
        this.ReplicaSetId = 'ReplicaSetId' in params ? params.ReplicaSetId : null;
        this.ReplicaSetName = 'ReplicaSetName' in params ? params.ReplicaSetName : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.OplogSize = 'OplogSize' in params ? params.OplogSize : null;
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.RealReplicaSetId = 'RealReplicaSetId' in params ? params.RealReplicaSetId : null;

    }
}

/**
 * OfflineIsolatedDBInstance返回参数结构体
 * @class
 */
class OfflineIsolatedDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateDBInstance返回参数结构体
 * @class
 */
class IsolateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupAccess请求参数结构体
 * @class
 */
class DescribeBackupAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 需要获取下载授权的备份文件名
         * @type {string || null}
         */
        this.BackupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * RenameInstance请求参数结构体
 * @class
 */
class RenameInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.NewName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NewName = 'NewName' in params ? params.NewName : null;

    }
}

/**
 * RenameInstance返回参数结构体
 * @class
 */
class RenameInstanceResponse extends  AbstractModel {
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
 * DescribeClientConnections返回参数结构体
 * @class
 */
class DescribeClientConnectionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端连接信息，包括客户端IP和对应IP的连接数量
         * @type {Array.<ClientConnection> || null}
         */
        this.Clients = null;

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

        if (params.Clients) {
            this.Clients = new Array();
            for (let z in params.Clients) {
                let obj = new ClientConnection();
                obj.deserialize(params.Clients[z]);
                this.Clients.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例信息
 * @class
 */
class DBInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 地域信息
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 备份文件存储信息
 * @class
 */
class BackupFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份文件所属的副本集/分片id
         * @type {string || null}
         */
        this.ReplicateSetId = null;

        /**
         * 备份文件保存路径
         * @type {string || null}
         */
        this.File = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicateSetId = 'ReplicateSetId' in params ? params.ReplicateSetId : null;
        this.File = 'File' in params ? params.File : null;

    }
}

/**
 * DescribeDBBackups返回参数结构体
 * @class
 */
class DescribeDBBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份列表
         * @type {Array.<BackupInfo> || null}
         */
        this.BackupList = null;

        /**
         * 备份总数
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

        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new BackupInfo();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例详情
 * @class
 */
class InstanceDetail extends  AbstractModel {
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
         * 付费类型，可能的返回值：1-包年包月；0-按量计费
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 集群类型，可能的返回值：0-副本集实例，1-分片实例，
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * 地域信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区信息
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 网络类型，可能的返回值：0-基础网络，1-私有网络
         * @type {number || null}
         */
        this.NetType = null;

        /**
         * 私有网络的ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络的子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例状态，可能的返回值：0-待初始化，1-流程处理中，2-运行中，-2-实例已过期
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 端口号
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例到期时间
         * @type {string || null}
         */
        this.DeadLine = null;

        /**
         * 实例版本信息
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * 实例内存规格，单位为MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例磁盘规格，单位为MB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 实例CPU核心数
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * 实例机器类型
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 实例从节点数
         * @type {number || null}
         */
        this.SecondaryNum = null;

        /**
         * 实例分片数
         * @type {number || null}
         */
        this.ReplicationSetNum = null;

        /**
         * 实例自动续费标志，可能的返回值：0-手动续费，1-自动续费，2-确认不续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 已用容量，单位MB
         * @type {number || null}
         */
        this.UsedVolume = null;

        /**
         * 维护窗口起始时间
         * @type {string || null}
         */
        this.MaintenanceStart = null;

        /**
         * 维护窗口结束时间
         * @type {string || null}
         */
        this.MaintenanceEnd = null;

        /**
         * 分片信息
         * @type {Array.<ShardInfo> || null}
         */
        this.ReplicaSets = null;

        /**
         * 只读实例信息
         * @type {Array.<DBInstanceInfo> || null}
         */
        this.ReadonlyInstances = null;

        /**
         * 灾备实例信息
         * @type {Array.<DBInstanceInfo> || null}
         */
        this.StandbyInstances = null;

        /**
         * 临时实例信息
         * @type {Array.<DBInstanceInfo> || null}
         */
        this.CloneInstances = null;

        /**
         * 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息
         * @type {DBInstanceInfo || null}
         */
        this.RelatedInstance = null;

        /**
         * 实例标签信息集合
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 实例版本标记
         * @type {number || null}
         */
        this.InstanceVer = null;

        /**
         * 实例版本标记
         * @type {number || null}
         */
        this.ClusterVer = null;

        /**
         * 协议信息，可能的返回值：1-mongodb，2-dynamodb
         * @type {number || null}
         */
        this.Protocol = null;

        /**
         * 实例类型，可能的返回值，1-正式实例，2-临时实例，3-只读实例，4-灾备实例
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 实例状态描述
         * @type {string || null}
         */
        this.InstanceStatusDesc = null;

        /**
         * 实例对应的物理实例id，回档并替换过的实例有不同的InstanceId和RealInstanceId，从barad获取监控数据等场景下需要用物理id获取
         * @type {string || null}
         */
        this.RealInstanceId = null;

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
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DeadLine = 'DeadLine' in params ? params.DeadLine : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.ReplicationSetNum = 'ReplicationSetNum' in params ? params.ReplicationSetNum : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.UsedVolume = 'UsedVolume' in params ? params.UsedVolume : null;
        this.MaintenanceStart = 'MaintenanceStart' in params ? params.MaintenanceStart : null;
        this.MaintenanceEnd = 'MaintenanceEnd' in params ? params.MaintenanceEnd : null;

        if (params.ReplicaSets) {
            this.ReplicaSets = new Array();
            for (let z in params.ReplicaSets) {
                let obj = new ShardInfo();
                obj.deserialize(params.ReplicaSets[z]);
                this.ReplicaSets.push(obj);
            }
        }

        if (params.ReadonlyInstances) {
            this.ReadonlyInstances = new Array();
            for (let z in params.ReadonlyInstances) {
                let obj = new DBInstanceInfo();
                obj.deserialize(params.ReadonlyInstances[z]);
                this.ReadonlyInstances.push(obj);
            }
        }

        if (params.StandbyInstances) {
            this.StandbyInstances = new Array();
            for (let z in params.StandbyInstances) {
                let obj = new DBInstanceInfo();
                obj.deserialize(params.StandbyInstances[z]);
                this.StandbyInstances.push(obj);
            }
        }

        if (params.CloneInstances) {
            this.CloneInstances = new Array();
            for (let z in params.CloneInstances) {
                let obj = new DBInstanceInfo();
                obj.deserialize(params.CloneInstances[z]);
                this.CloneInstances.push(obj);
            }
        }

        if (params.RelatedInstance) {
            let obj = new DBInstanceInfo();
            obj.deserialize(params.RelatedInstance)
            this.RelatedInstance = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceVer = 'InstanceVer' in params ? params.InstanceVer : null;
        this.ClusterVer = 'ClusterVer' in params ? params.ClusterVer : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceStatusDesc = 'InstanceStatusDesc' in params ? params.InstanceStatusDesc : null;
        this.RealInstanceId = 'RealInstanceId' in params ? params.RealInstanceId : null;

    }
}

/**
 * ModifyDBInstanceSpec返回参数结构体
 * @class
 */
class ModifyDBInstanceSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstanceHour返回参数结构体
 * @class
 */
class CreateDBInstanceHourResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 创建的实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * mongodb售卖规格
 * @class
 */
class SpecItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格信息标识
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * 规格有效标志，取值：0-停止售卖，1-开放售卖
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 规格有效标志，取值：0-停止售卖，1-开放售卖
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存规格，单位为MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 默认磁盘规格，单位MB
         * @type {number || null}
         */
        this.DefaultStorage = null;

        /**
         * 最大磁盘规格，单位MB
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * 最小磁盘规格，单位MB
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * 可承载qps信息
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 连接数限制
         * @type {number || null}
         */
        this.Conns = null;

        /**
         * 实例mongodb版本信息
         * @type {string || null}
         */
        this.MongoVersionCode = null;

        /**
         * 实例mongodb版本号
         * @type {number || null}
         */
        this.MongoVersionValue = null;

        /**
         * 实例mongodb版本号（短）
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 存储引擎
         * @type {string || null}
         */
        this.EngineName = null;

        /**
         * 集群类型，取值：1-分片集群，0-副本集集群
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * 最小副本集从节点数
         * @type {number || null}
         */
        this.MinNodeNum = null;

        /**
         * 最大副本集从节点数
         * @type {number || null}
         */
        this.MaxNodeNum = null;

        /**
         * 最小分片数
         * @type {number || null}
         */
        this.MinReplicateSetNum = null;

        /**
         * 最大分片数
         * @type {number || null}
         */
        this.MaxReplicateSetNum = null;

        /**
         * 最小分片从节点数
         * @type {number || null}
         */
        this.MinReplicateSetNodeNum = null;

        /**
         * 最大分片从节点数
         * @type {number || null}
         */
        this.MaxReplicateSetNodeNum = null;

        /**
         * 机器类型，取值：0-HIO，4-HIO10G
         * @type {string || null}
         */
        this.MachineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DefaultStorage = 'DefaultStorage' in params ? params.DefaultStorage : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Conns = 'Conns' in params ? params.Conns : null;
        this.MongoVersionCode = 'MongoVersionCode' in params ? params.MongoVersionCode : null;
        this.MongoVersionValue = 'MongoVersionValue' in params ? params.MongoVersionValue : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.EngineName = 'EngineName' in params ? params.EngineName : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.MinNodeNum = 'MinNodeNum' in params ? params.MinNodeNum : null;
        this.MaxNodeNum = 'MaxNodeNum' in params ? params.MaxNodeNum : null;
        this.MinReplicateSetNum = 'MinReplicateSetNum' in params ? params.MinReplicateSetNum : null;
        this.MaxReplicateSetNum = 'MaxReplicateSetNum' in params ? params.MaxReplicateSetNum : null;
        this.MinReplicateSetNodeNum = 'MinReplicateSetNodeNum' in params ? params.MinReplicateSetNodeNum : null;
        this.MaxReplicateSetNodeNum = 'MaxReplicateSetNodeNum' in params ? params.MaxReplicateSetNodeNum : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

module.exports = {
    DescribeSpecInfoRequest: DescribeSpecInfoRequest,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    DescribeBackupAccessResponse: DescribeBackupAccessResponse,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    AssignProjectRequest: AssignProjectRequest,
    ClientConnection: ClientConnection,
    BackupInfo: BackupInfo,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    SpecificationInfo: SpecificationInfo,
    ModifyDBInstanceSpecRequest: ModifyDBInstanceSpecRequest,
    DescribeSpecInfoResponse: DescribeSpecInfoResponse,
    TagInfo: TagInfo,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    OfflineIsolatedDBInstanceRequest: OfflineIsolatedDBInstanceRequest,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    AssignProjectResponse: AssignProjectResponse,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    DescribeClientConnectionsRequest: DescribeClientConnectionsRequest,
    ShardInfo: ShardInfo,
    OfflineIsolatedDBInstanceResponse: OfflineIsolatedDBInstanceResponse,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    DescribeBackupAccessRequest: DescribeBackupAccessRequest,
    RenameInstanceRequest: RenameInstanceRequest,
    RenameInstanceResponse: RenameInstanceResponse,
    DescribeClientConnectionsResponse: DescribeClientConnectionsResponse,
    DBInstanceInfo: DBInstanceInfo,
    BackupFile: BackupFile,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    InstanceDetail: InstanceDetail,
    ModifyDBInstanceSpecResponse: ModifyDBInstanceSpecResponse,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    SpecItem: SpecItem,

}
