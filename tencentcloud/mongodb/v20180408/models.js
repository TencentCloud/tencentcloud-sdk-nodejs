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
 * TerminateDBInstance请求参数结构体
 * @class
 */
class TerminateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。
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
 * CreateDBInstance请求参数结构体
 * @class
 */
class CreateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每个副本集内从节点个数
         * @type {number || null}
         */
        this.SecondaryNum = null;

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
         * 版本号，当前仅支持 MONGO_3_WT
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * 机器类型，GIO：高IO版；TGIO：高IO万兆
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * 实例数量，默认值为1, 最小值1，最大值为10
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 实例所属区域名称，格式如：ap-guangzhou-2
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 时长，购买月数
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 实例密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 项目ID，不填为默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 安全组参数
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * 私有网络ID，如果不传则默认选择基础网络
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
         * @type {string || null}
         */
        this.UniqSubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;

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
 * UpgradeDBInstanceHour返回参数结构体
 * @class
 */
class UpgradeDBInstanceHourResponse extends  AbstractModel {
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
 * UpgradeDBInstanceHour请求参数结构体
 * @class
 */
class UpgradeDBInstanceHourRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级后的内存大小，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 升级后的硬盘大小，单位：GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 升级后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90%
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
 * UpgradeDBInstance请求参数结构体
 * @class
 */
class UpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级后的内存大小，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 升级后的硬盘大小，单位：GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 升级后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90%
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
         * 副本集个数，1为单副本集实例，大于1为分片集群实例，最大不超过10
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * 每个副本集内从节点个数，目前只支持从节点数为2
         * @type {number || null}
         */
        this.SecondaryNum = null;

        /**
         * MongoDB引擎版本，值包括：MONGO_2、MONGO_3_MMAP、MONGO_3_WT 、MONGO_3_ROCKS和MONGO_36_WT
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 实例类型，GIO：高IO版；TGIO：高IO万兆
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 实例数量，默认值为1, 最小值1，最大值为10
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 可用区信息，格式如：ap-guangzhou-2
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例角色，支持值包括：MASTER-表示主实例，DR-表示灾备实例，RO-表示只读实例
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 实例类型，REPLSET-副本集，SHARD-分片集群
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 数据是否加密，当且仅当引擎版本为MONGO_3_ROCKS，可以选择加密
         * @type {number || null}
         */
        this.Encrypt = null;

        /**
         * 私有网络ID，如果不传则默认选择基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 项目ID，不填为默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 安全组参数
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

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
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

    }
}

/**
 * TerminateDBInstance返回参数结构体
 * @class
 */
class TerminateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单ID，表示注销实例成功
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
 * UpgradeDBInstance返回参数结构体
 * @class
 */
class UpgradeDBInstanceResponse extends  AbstractModel {
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

module.exports = {
    TerminateDBInstanceRequest: TerminateDBInstanceRequest,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    UpgradeDBInstanceHourResponse: UpgradeDBInstanceHourResponse,
    UpgradeDBInstanceHourRequest: UpgradeDBInstanceHourRequest,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    TerminateDBInstanceResponse: TerminateDBInstanceResponse,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,

}
