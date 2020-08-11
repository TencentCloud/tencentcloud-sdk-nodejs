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
 * DescribeReadOnlyGroupDetails请求参数结构体
 * @class
 */
class DescribeReadOnlyGroupDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例ID，格式如：mssql-3l3fgqn7
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 只读组ID，格式如：mssqlrg-3l3fgqn7
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * CreateDBInstances请求参数结构体
 * @class
 */
class CreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例内存大小，单位GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例磁盘大小，单位GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 本次购买几个实例，默认值为1。取值不超过10
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 购买实例周期，默认取值为1，表示一个月。取值不超过48
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动使用代金券；1 - 是，0 - 否，默认不使用
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID数组，目前单个订单只能使用一张
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * sqlserver版本，目前只支持：2008R2（SQL Server 2008 Enterprise），2012SP3（SQL Server 2012 Enterprise），2016SP1（SQL Server 2016 Enterprise），201602（SQL Server 2016 Standard）2017（SQL Server 2017 Enterprise）版本。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 自动续费标志：0-正常续费  1-自动续费，默认为1自动续费。只在购买预付费实例时有效。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 安全组列表，填写形如sg-xxx的安全组ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupList = null;

        /**
         * 可维护时间窗配置，以周为单位，表示周几允许维护，1-7分别代表周一到周末
         * @type {Array.<number> || null}
         */
        this.Weekly = null;

        /**
         * 可维护时间窗配置，每天可维护的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 可维护时间窗配置，持续时间，单位：小时
         * @type {number || null}
         */
        this.Span = null;

        /**
         * 购买高可用实例的类型：DUAL-双机高可用  CLUSTER-集群，默认值为DUAL
         * @type {string || null}
         */
        this.HAType = null;

        /**
         * 是否跨可用区部署，默认值为false
         * @type {boolean || null}
         */
        this.MultiZones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.SecurityGroupList = 'SecurityGroupList' in params ? params.SecurityGroupList : null;
        this.Weekly = 'Weekly' in params ? params.Weekly : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Span = 'Span' in params ? params.Span : null;
        this.HAType = 'HAType' in params ? params.HAType : null;
        this.MultiZones = 'MultiZones' in params ? params.MultiZones : null;

    }
}

/**
 * 实例续费状态信息
 * @class
 */
class InstanceRenewInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例续费标记。0：正常续费，1：自动续费，2：到期不续
         * @type {number || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * 订单信息
 * @class
 */
class DealInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单名
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 商品数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 关联的流程 ID，可用于查询流程执行状态
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 只有创建实例的订单会填充该字段，表示该订单创建的实例的 ID。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 所属账号
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 实例付费类型
         * @type {string || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * CreateBasicDBInstances返回参数结构体
 * @class
 */
class CreateBasicDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单名称
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
 * DescribeAccounts请求参数结构体
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页返回，每页返回的数目，取值为1-100，默认值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页返回，页编号，默认值为第0页
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
 * DescribeMaintenanceSpan返回参数结构体
 * @class
 */
class DescribeMaintenanceSpanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 以周为单位，表示周几允许维护，例如：[1,2,3,4,5,6,7]表示周一到周日均为可维护日。
         * @type {Array.<number> || null}
         */
        this.Weekly = null;

        /**
         * 每天可维护的开始时间，例如：10:24标识可维护时间窗10点24分开始。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 每天可维护的持续时间，单位是h，例如：1 表示从可维护的开始时间起持续1小时。
         * @type {number || null}
         */
        this.Span = null;

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
        this.Weekly = 'Weekly' in params ? params.Weekly : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Span = 'Span' in params ? params.Span : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePublishSubscribe请求参数结构体
 * @class
 */
class CreatePublishSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布实例ID，形如mssql-j8kv137v
         * @type {string || null}
         */
        this.PublishInstanceId = null;

        /**
         * 订阅实例ID，形如mssql-j8kv137v
         * @type {string || null}
         */
        this.SubscribeInstanceId = null;

        /**
         * 数据库的订阅发布关系集合
         * @type {Array.<DatabaseTuple> || null}
         */
        this.DatabaseTupleSet = null;

        /**
         * 发布订阅的名称，默认值为：default_name
         * @type {string || null}
         */
        this.PublishSubscribeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishInstanceId = 'PublishInstanceId' in params ? params.PublishInstanceId : null;
        this.SubscribeInstanceId = 'SubscribeInstanceId' in params ? params.SubscribeInstanceId : null;

        if (params.DatabaseTupleSet) {
            this.DatabaseTupleSet = new Array();
            for (let z in params.DatabaseTupleSet) {
                let obj = new DatabaseTuple();
                obj.deserialize(params.DatabaseTupleSet[z]);
                this.DatabaseTupleSet.push(obj);
            }
        }
        this.PublishSubscribeName = 'PublishSubscribeName' in params ? params.PublishSubscribeName : null;

    }
}

/**
 * CreateMigration返回参数结构体
 * @class
 */
class CreateMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

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
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryMigrationCheckProcess请求参数结构体
 * @class
 */
class QueryMigrationCheckProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * 该数据结构表示具有发布订阅关系的两个数据库。
 * @class
 */
class DatabaseTuple extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布数据库名称
         * @type {string || null}
         */
        this.PublishDatabase = null;

        /**
         * 订阅数据库名称
         * @type {string || null}
         */
        this.SubscribeDatabase = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishDatabase = 'PublishDatabase' in params ? params.PublishDatabase : null;
        this.SubscribeDatabase = 'SubscribeDatabase' in params ? params.SubscribeDatabase : null;

    }
}

/**
 * 地域信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域英文ID，类似ap-guanghou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域中文名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域数字ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 该地域目前是否可以售卖，UNAVAILABLE-不可售卖；AVAILABLE-可售卖
         * @type {string || null}
         */
        this.RegionState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;

    }
}

/**
 * ModifyBackupName返回参数结构体
 * @class
 */
class ModifyBackupNameResponse extends  AbstractModel {
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
 * DeletePublishSubscribe请求参数结构体
 * @class
 */
class DeletePublishSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布订阅ID，可通过DescribePublishSubscribe接口获得
         * @type {number || null}
         */
        this.PublishSubscribeId = null;

        /**
         * 待删除的数据库的订阅发布关系集合
         * @type {Array.<DatabaseTuple> || null}
         */
        this.DatabaseTupleSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishSubscribeId = 'PublishSubscribeId' in params ? params.PublishSubscribeId : null;

        if (params.DatabaseTupleSet) {
            this.DatabaseTupleSet = new Array();
            for (let z in params.DatabaseTupleSet) {
                let obj = new DatabaseTuple();
                obj.deserialize(params.DatabaseTupleSet[z]);
                this.DatabaseTupleSet.push(obj);
            }
        }

    }
}

/**
 * ModifyMaintenanceSpan请求参数结构体
 * @class
 */
class ModifyMaintenanceSpanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-k8voqdlz
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 以周为单位，表示允许周几维护，例如：[1,2,3,4,5,6,7]表示周一到周日均为可维护日，本参数不填，则不修改此值。
         * @type {Array.<number> || null}
         */
        this.Weekly = null;

        /**
         * 每天可维护的开始时间，例如：10:24标识可维护时间窗10点24分开始，本参数不填，则不修改此值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 每天可维护的持续时间，单位是h，例如：1 表示从可维护的开始时间起持续1小时，本参数不填，则不修改此值。
         * @type {number || null}
         */
        this.Span = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weekly = 'Weekly' in params ? params.Weekly : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Span = 'Span' in params ? params.Span : null;

    }
}

/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组ID。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例ID 列表，一个或者多个实例ID组成的数组。多个实例必须是同一个地域，同一个可用区，同一个项目下的。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * 该数据结构表示具有发布订阅关系的两个数据库，以及其之间发布订阅的状态信息。
 * @class
 */
class DatabaseTupleStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布数据库名称
         * @type {string || null}
         */
        this.PublishDatabase = null;

        /**
         * 订阅数据库名称
         * @type {string || null}
         */
        this.SubscribeDatabase = null;

        /**
         * 最近一次同步时间
         * @type {string || null}
         */
        this.LastSyncTime = null;

        /**
         * 数据库之间的发布订阅状态 running，success，fail，unknow
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishDatabase = 'PublishDatabase' in params ? params.PublishDatabase : null;
        this.SubscribeDatabase = 'SubscribeDatabase' in params ? params.SubscribeDatabase : null;
        this.LastSyncTime = 'LastSyncTime' in params ? params.LastSyncTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyReadOnlyGroupDetails返回参数结构体
 * @class
 */
class ModifyReadOnlyGroupDetailsResponse extends  AbstractModel {
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
 * ModifyBackupStrategy返回参数结构体
 * @class
 */
class ModifyBackupStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回错误码
         * @type {number || null}
         */
        this.Errno = null;

        /**
         * 返回错误信息
         * @type {string || null}
         */
        this.Msg = null;

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
        this.Errno = 'Errno' in params ? params.Errno : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSecurityGroups返回参数结构体
 * @class
 */
class DescribeDBSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情。
         * @type {Array.<SecurityGroup> || null}
         */
        this.SecurityGroupSet = null;

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

        if (params.SecurityGroupSet) {
            this.SecurityGroupSet = new Array();
            for (let z in params.SecurityGroupSet) {
                let obj = new SecurityGroup();
                obj.deserialize(params.SecurityGroupSet[z]);
                this.SecurityGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 迁移的进度详情类型
 * @class
 */
class MigrateDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前环节的名称
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * 当前环节的进度（单位是%）
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
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.Progress = 'Progress' in params ? params.Progress : null;

    }
}

/**
 * RunMigration返回参数结构体
 * @class
 */
class RunMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移流程启动后，返回流程ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductConfig请求参数结构体
 * @class
 */
class DescribeProductConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区英文ID，形如ap-guangzhou-1
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
 * ModifyPublishSubscribeName返回参数结构体
 * @class
 */
class ModifyPublishSubscribeNameResponse extends  AbstractModel {
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
 * DescribeCrossRegionZone请求参数结构体
 * @class
 */
class DescribeCrossRegionZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：mssql-3l3fgqn7
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
 * CompleteMigration返回参数结构体
 * @class
 */
class CompleteMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 完成迁移流程发起后，返回的流程id
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RollbackInstance返回参数结构体
 * @class
 */
class RollbackInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库备注信息
 * @class
 */
class DBRemark extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 需要迁移的DB列表
 * @class
 */
class MigrateDB extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移数据库的名称
         * @type {string || null}
         */
        this.DBName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBName = 'DBName' in params ? params.DBName : null;

    }
}

/**
 * RestartDBInstance请求参数结构体
 * @class
 */
class RestartDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库实例ID，形如mssql-njj2mtpl
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
 * DescribeReadOnlyGroupList返回参数结构体
 * @class
 */
class DescribeReadOnlyGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组列表
         * @type {Array.<ReadOnlyGroup> || null}
         */
        this.ReadOnlyGroupSet = null;

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

        if (params.ReadOnlyGroupSet) {
            this.ReadOnlyGroupSet = new Array();
            for (let z in params.ReadOnlyGroupSet) {
                let obj = new ReadOnlyGroup();
                obj.deserialize(params.ReadOnlyGroupSet[z]);
                this.ReadOnlyGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回地域信息总的条目
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 地域信息数组
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackups请求参数结构体
 * @class
 */
class DescribeBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间(yyyy-MM-dd HH:mm:ss)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间(yyyy-MM-dd HH:mm:ss)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 实例ID，形如mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页返回，每页返回的数目，取值为1-100，默认值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页返回，页编号，默认值为第0页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 按照备份名称筛选，不填则不筛选此项
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * 按照备份策略筛选，0-实例备份，1-多库备份，不填则不筛选此项
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 按照备份方式筛选，0-后台自动定时备份，1-用户手动临时备份，不填则不筛选此项
         * @type {number || null}
         */
        this.BackupWay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.BackupWay = 'BackupWay' in params ? params.BackupWay : null;

    }
}

/**
 * ModifyDBInstanceProject返回参数结构体
 * @class
 */
class ModifyDBInstanceProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功的实例个数
         * @type {number || null}
         */
        this.Count = null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRollbackTime返回参数结构体
 * @class
 */
class DescribeRollbackTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库可回档实例信息
         * @type {Array.<DbRollbackTimeInfo> || null}
         */
        this.Details = null;

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

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new DbRollbackTimeInfo();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreInstance请求参数结构体
 * @class
 */
class RestoreInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份文件ID，该ID可以通过DescribeBackups接口返回数据中的Id字段获得
         * @type {number || null}
         */
        this.BackupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;

    }
}

/**
 * DescribeReadOnlyGroupByReadOnlyInstance返回参数结构体
 * @class
 */
class DescribeReadOnlyGroupByReadOnlyInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 只读组名称
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * 只读组的地域ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 只读组的可用区ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 是否启动超时剔除功能 ,0-不开启剔除功能，1-开启剔除功能
         * @type {number || null}
         */
        this.IsOfflineDelay = null;

        /**
         * 启动超时剔除功能后，使用的超时阈值，单位是秒
         * @type {number || null}
         */
        this.ReadOnlyMaxDelayTime = null;

        /**
         * 启动超时剔除功能后，只读组至少保留的只读副本数
         * @type {number || null}
         */
        this.MinReadOnlyInGroup = null;

        /**
         * 只读组vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 只读组vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 只读组在私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 只读组在私有网络子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 主实例ID，形如mssql-sgeshe3th
         * @type {string || null}
         */
        this.MasterInstanceId = null;

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
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.IsOfflineDelay = 'IsOfflineDelay' in params ? params.IsOfflineDelay : null;
        this.ReadOnlyMaxDelayTime = 'ReadOnlyMaxDelayTime' in params ? params.ReadOnlyMaxDelayTime : null;
        this.MinReadOnlyInGroup = 'MinReadOnlyInGroup' in params ? params.MinReadOnlyInGroup : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunMigration请求参数结构体
 * @class
 */
class RunMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * 安全组策略
 * @class
 */
class SecurityGroupPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略，ACCEPT 或者 DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 目的 IP 或 IP 段，例如172.16.0.0/12
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 端口或者端口范围
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 网络协议，支持 UDP、TCP等
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 规则限定的方向，OUTPUT-出战规则  INPUT-进站规则
         * @type {string || null}
         */
        this.Dir = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.Dir = 'Dir' in params ? params.Dir : null;

    }
}

/**
 * RestoreInstance返回参数结构体
 * @class
 */
class RestoreInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程任务ID，使用FlowId调用DescribeFlowStatus接口获取任务执行状态
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMaintenanceSpan返回参数结构体
 * @class
 */
class ModifyMaintenanceSpanResponse extends  AbstractModel {
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
 * 可用区信息
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区英文ID，形如ap-guangzhou-1，表示广州一区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区中文名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 可用区数字ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 该可用区目前可售卖的规格ID，利用SpecId，结合接口DescribeProductConfig返回的数据，可获悉该可用区目前可售卖的规格大小
         * @type {number || null}
         */
        this.SpecId = null;

        /**
         * 当前可用区与规格下，可售卖的数据库版本，形如2008R2（表示SQL Server 2008 R2）。其可选值有2008R2（表示SQL Server 2008 R2），2012SP3（表示SQL Server 2012），2016SP1（表示SQL Server 2016 SP1）
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.SpecId = 'SpecId' in params ? params.SpecId : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * InquiryPriceCreateDBInstances请求参数结构体
 * @class
 */
class InquiryPriceCreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 内存大小，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例容量大小，单位：GB。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 计费类型，取值支持 PREPAID，POSTPAID。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 购买时长，单位：月。取值为1到48，默认为1
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 一次性购买的实例数量。取值1-100，默认取值为1
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * sqlserver版本，目前只支持：2008R2（SQL Server 2008 Enterprise），2012SP3（SQL Server 2012 Enterprise），2016SP1（SQL Server 2016 Enterprise），201602（SQL Server 2016 Standard）2017（SQL Server 2017 Enterprise）版本。默认为2008R2版本
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 预购买实例的CPU核心数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 购买实例的类型 HA-高可用型(包括双机高可用，alwaysOn集群)，RO-只读副本，SI-基础版，默认取值HA
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 购买实例的宿主机类型，PM-物理机, CLOUD_PREMIUM-虚拟机高性能云盘，CLOUD_SSD-虚拟机SSD云盘，默认取值PM
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

/**
 * DescribeBackupByFlowId返回参数结构体
 * @class
 */
class DescribeBackupByFlowIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份文件唯一标识，RestoreInstance接口会用到该字段
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 存储文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 备份名称，可自定义
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * 备份开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 备份结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 文件大小，单位 KB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 备份策略，0-实例备份；1-多库备份；实例状态是0-创建中时，该字段为默认值0，无实际意义
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 备份方式，0-定时备份；1-手动临时备份；实例状态是0-创建中时，该字段为默认值0，无实际意义
         * @type {number || null}
         */
        this.BackupWay = null;

        /**
         * 备份文件状态，0-创建中；1-成功；2-失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 多库备份时的DB列表
         * @type {Array.<string> || null}
         */
        this.DBs = null;

        /**
         * 内网下载地址
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * 外网下载地址
         * @type {string || null}
         */
        this.ExternalAddr = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.BackupWay = 'BackupWay' in params ? params.BackupWay : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DBs = 'DBs' in params ? params.DBs : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlowStatus请求参数结构体
 * @class
 */
class DescribeFlowStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
         * @type {number || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * StartMigrationCheck返回参数结构体
 * @class
 */
class StartMigrationCheckResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移检查流程发起后，返回的流程id
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询迁移任务列表类型
 * @class
 */
class MigrateTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

        /**
         * 迁移任务名称
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * 迁移任务所属的用户ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 迁移任务所属的地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式）
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 迁移任务的创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 迁移任务的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 迁移任务的结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 迁移任务的状态（1:初始化,4:迁移中,5.迁移失败,6.迁移成功,7已中止,8已删除,9中止中,10完成中,11中止失败,12完成失败）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 信息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 是否迁移任务经过检查（0:未校验,1:校验成功,2:校验失败,3:校验中）
         * @type {number || null}
         */
        this.CheckFlag = null;

        /**
         * 迁移任务当前进度（单位%）
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 迁移任务进度细节
         * @type {MigrateDetail || null}
         */
        this.MigrateDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.Progress = 'Progress' in params ? params.Progress : null;

        if (params.MigrateDetail) {
            let obj = new MigrateDetail();
            obj.deserialize(params.MigrateDetail)
            this.MigrateDetail = obj;
        }

    }
}

/**
 * 实例可售卖的规格信息
 * @class
 */
class SpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例规格ID，利用DescribeZones返回的SpecId，结合DescribeProductConfig返回的可售卖规格信息，可获悉某个可用区下可购买什么规格的实例
         * @type {number || null}
         */
        this.SpecId = null;

        /**
         * 机型ID
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 机型中文名称
         * @type {string || null}
         */
        this.MachineTypeName = null;

        /**
         * 数据库版本信息。取值为2008R2（表示SQL Server 2008 R2），2012SP3（表示SQL Server 2012），2016SP1（表示SQL Server 2016 SP1）
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Version字段对应的版本名称
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 内存大小，单位GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 此规格下最小的磁盘大小，单位GB
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * 此规格下最大的磁盘大小，单位GB
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * 此规格对应的QPS大小
         * @type {number || null}
         */
        this.QPS = null;

        /**
         * 此规格的中文描述信息
         * @type {string || null}
         */
        this.SuitInfo = null;

        /**
         * 此规格对应的包年包月Pid
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 此规格对应的按量计费Pid列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.PostPid = null;

        /**
         * 此规格下支持的付费模式，POST-仅支持按量计费 PRE-仅支持包年包月 ALL-支持所有
         * @type {string || null}
         */
        this.PayModeStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecId = 'SpecId' in params ? params.SpecId : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineTypeName = 'MachineTypeName' in params ? params.MachineTypeName : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.QPS = 'QPS' in params ? params.QPS : null;
        this.SuitInfo = 'SuitInfo' in params ? params.SuitInfo : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.PostPid = 'PostPid' in params ? params.PostPid : null;
        this.PayModeStatus = 'PayModeStatus' in params ? params.PayModeStatus : null;

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
         * 订单信息数组
         * @type {Array.<DealInfo> || null}
         */
        this.Deals = null;

        /**
         * 返回多少个订单的信息
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

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new DealInfo();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateDBInstances返回参数结构体
 * @class
 */
class InquiryPriceCreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未打折前价格，其值除以100表示多少钱。例如10010表示100.10元
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际需要支付的价格，其值除以100表示多少钱。例如10010表示100.10元
         * @type {number || null}
         */
        this.Price = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CompleteMigration请求参数结构体
 * @class
 */
class CompleteMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * ModifyAccountPrivilege返回参数结构体
 * @class
 */
class ModifyAccountPrivilegeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流程ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveBackups请求参数结构体
 * @class
 */
class RemoveBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 待删除的备份名称，备份名称可通过DescribeBackups接口的FileName字段获得。单次请求批量删除备份数不能超过10个。
         * @type {Array.<string> || null}
         */
        this.BackupNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupNames = 'BackupNames' in params ? params.BackupNames : null;

    }
}

/**
 * 数据库创建信息
 * @class
 */
class DBCreateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.DBName = null;

        /**
         * 字符集。可选值包括：Chinese_PRC_CI_AS, Chinese_PRC_CS_AS, Chinese_PRC_BIN, Chinese_Taiwan_Stroke_CI_AS, SQL_Latin1_General_CP1_CI_AS, SQL_Latin1_General_CP1_CS_AS。不填默认为Chinese_PRC_CI_AS
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * 数据库账号权限信息
         * @type {Array.<AccountPrivilege> || null}
         */
        this.Accounts = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.Charset = 'Charset' in params ? params.Charset : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountPrivilege();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 数据库账号权限信息。创建数据库时设置
 * @class
 */
class AccountPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 数据库权限。ReadWrite表示可读写，ReadOnly表示只读
         * @type {string || null}
         */
        this.Privilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

    }
}

/**
 * ModifyMigration返回参数结构体
 * @class
 */
class ModifyMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

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
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回多少个可用区信息
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可用区数组
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

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

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBs返回参数结构体
 * @class
 */
class DescribeDBsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例数据库列表
         * @type {Array.<InstanceDBDetail> || null}
         */
        this.DBInstances = null;

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

        if (params.DBInstances) {
            this.DBInstances = new Array();
            for (let z in params.DBInstances) {
                let obj = new InstanceDBDetail();
                obj.deserialize(params.DBInstances[z]);
                this.DBInstances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例状态。取值范围：
<li>1：申请中</li>
<li>2：运行中</li>
<li>3：受限运行中 (主备切换中)</li>
<li>4：已隔离</li>
<li>5：回收中</li>
<li>6：已回收</li>
<li>7：任务执行中 (实例做备份、回档等操作)</li>
<li>8：已下线</li>
<li>9：实例扩容中</li>
<li>10：实例迁移中</li>
<li>11：只读</li>
<li>12：重启中</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 分页返回，页编号，默认值为第0页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回，每页返回的数目，取值为1-100，默认值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 一个或者多个实例ID。实例ID，格式如：mssql-si2823jyl
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 付费类型检索 1-包年包月，0-按量计费
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例所属VPC的唯一字符串ID，格式如：vpc-xxx，传空字符串(“”)则按照基础网络筛选。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 实例所属子网的唯一字符串ID，格式如： subnet-xxx，传空字符串(“”)则按照基础网络筛选。
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeDBSecurityGroups请求参数结构体
 * @class
 */
class DescribeDBSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：mssql-c1nl9rpv或者mssqlro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
 * 慢查询日志文件信息
 * @class
 */
class SlowlogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询日志文件唯一标识
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 文件生成的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 文件生成的结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 文件大小（KB）
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 文件中log条数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 内网下载地址
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * 外网下载地址
         * @type {string || null}
         */
        this.ExternalAddr = null;

        /**
         * 状态（1成功 2失败）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

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
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyAccountRemark返回参数结构体
 * @class
 */
class ModifyAccountRemarkResponse extends  AbstractModel {
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
 * DescribeMigrations返回参数结构体
 * @class
 */
class DescribeMigrationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询结果的列表
         * @type {Array.<MigrateTask> || null}
         */
        this.MigrateTaskSet = null;

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

        if (params.MigrateTaskSet) {
            this.MigrateTaskSet = new Array();
            for (let z in params.MigrateTaskSet) {
                let obj = new MigrateTask();
                obj.deserialize(params.MigrateTaskSet[z]);
                this.MigrateTaskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupStrategy请求参数结构体
 * @class
 */
class ModifyBackupStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份类型，当前只支持按天备份，取值为daily
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * 备份时间点，取值为0-23的整数
         * @type {number || null}
         */
        this.BackupTime = null;

        /**
         * BackupType取值为daily时，表示备份间隔天数。当前取值只能为1
         * @type {number || null}
         */
        this.BackupDay = null;

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
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;
        this.BackupDay = 'BackupDay' in params ? params.BackupDay : null;

    }
}

/**
 * RenewDBInstance请求参数结构体
 * @class
 */
class RenewDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费多少个月，取值范围为1-48，默认为1
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动使用代金券，0-不使用；1-使用；默认不实用
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID数组，目前只支持使用1张代金券
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
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
 * DeleteDB请求参数结构体
 * @class
 */
class DeleteDBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-rljoi3bf
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名数组
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * DescribeProjectSecurityGroups返回参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情。
         * @type {Array.<SecurityGroup> || null}
         */
        this.SecurityGroupSet = null;

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

        if (params.SecurityGroupSet) {
            this.SecurityGroupSet = new Array();
            for (let z in params.SecurityGroupSet) {
                let obj = new SecurityGroup();
                obj.deserialize(params.SecurityGroupSet[z]);
                this.SecurityGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCrossRegionZone返回参数结构体
 * @class
 */
class DescribeCrossRegionZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备机所在地域的字符串ID，形如：ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 备机所在可用区的字符串ID，形如：ap-guangzhou-1
         * @type {string || null}
         */
        this.Zone = null;

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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceRenewFlag返回参数结构体
 * @class
 */
class ModifyDBInstanceRenewFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功的个数
         * @type {number || null}
         */
        this.Count = null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrationDatabases返回参数结构体
 * @class
 */
class DescribeMigrationDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库数量
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 数据库名称数组
         * @type {Array.<string> || null}
         */
        this.MigrateDBSet = null;

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
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.MigrateDBSet = 'MigrateDBSet' in params ? params.MigrateDBSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CompleteExpansion返回参数结构体
 * @class
 */
class CompleteExpansionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID，可通过接口DescribeFlowStatus查询立即切换升级任务的状态。
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 迁移任务的源类型
 * @class
 */
class MigrateSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移源实例的ID，MigrateType=1(TencentDB for SQLServers)时使用，格式如：mssql-si2823jyl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 迁移源Cvm的ID，MigrateType=2(云服务器自建SQLServer数据库)时使用
         * @type {string || null}
         */
        this.CvmId = null;

        /**
         * 迁移源Cvm的Vpc网络标识，MigrateType=2(云服务器自建SQLServer数据库)时使用，格式如：vpc-6ys9ont9
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 迁移源Cvm的Vpc下的子网标识，MigrateType=2(云服务器自建SQLServer数据库)时使用，格式如：subnet-h9extioi
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 用户名，MigrateType=1或MigrateType=2使用
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 密码，MigrateType=1或MigrateType=2使用
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 迁移源Cvm自建库的内网IP，MigrateType=2(云服务器自建SQLServer数据库)时使用
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 迁移源Cvm自建库的端口号，MigrateType=2(云服务器自建SQLServer数据库)时使用
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 离线迁移的源备份地址，MigrateType=4或MigrateType=5使用
         * @type {Array.<string> || null}
         */
        this.Url = null;

        /**
         * 离线迁移的源备份密码，MigrateType=4或MigrateType=5使用
         * @type {string || null}
         */
        this.UrlPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CvmId = 'CvmId' in params ? params.CvmId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.UrlPassword = 'UrlPassword' in params ? params.UrlPassword : null;

    }
}

/**
 * ResetAccountPassword返回参数结构体
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改帐号密码的异步任务流程ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 只读组对象
 * @class
 */
class ReadOnlyGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 只读组名称
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * 只读组的地域ID，与主实例相同
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 只读组的可用区ID，与主实例相同
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 是否启动超时剔除功能，0-不开启剔除功能，1-开启剔除功能
         * @type {number || null}
         */
        this.IsOfflineDelay = null;

        /**
         * 启动超时剔除功能后，使用的超时阈值
         * @type {number || null}
         */
        this.ReadOnlyMaxDelayTime = null;

        /**
         * 启动超时剔除功能后，只读组至少保留的只读副本数
         * @type {number || null}
         */
        this.MinReadOnlyInGroup = null;

        /**
         * 只读组vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 只读组vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 只读组私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 只读组私有网络子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 只读组状态: 1-申请成功运行中，5-申请中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 主实例ID，形如mssql-sgeshe3th
         * @type {string || null}
         */
        this.MasterInstanceId = null;

        /**
         * 只读实例副本集合
         * @type {Array.<ReadOnlyInstance> || null}
         */
        this.ReadOnlyInstanceSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.IsOfflineDelay = 'IsOfflineDelay' in params ? params.IsOfflineDelay : null;
        this.ReadOnlyMaxDelayTime = 'ReadOnlyMaxDelayTime' in params ? params.ReadOnlyMaxDelayTime : null;
        this.MinReadOnlyInGroup = 'MinReadOnlyInGroup' in params ? params.MinReadOnlyInGroup : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;

        if (params.ReadOnlyInstanceSet) {
            this.ReadOnlyInstanceSet = new Array();
            for (let z in params.ReadOnlyInstanceSet) {
                let obj = new ReadOnlyInstance();
                obj.deserialize(params.ReadOnlyInstanceSet[z]);
                this.ReadOnlyInstanceSet.push(obj);
            }
        }

    }
}

/**
 * QueryMigrationCheckProcess返回参数结构体
 * @class
 */
class QueryMigrationCheckProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总步骤数量
         * @type {number || null}
         */
        this.TotalStep = null;

        /**
         * 当前步骤编号，从1开始
         * @type {number || null}
         */
        this.CurrentStep = null;

        /**
         * 所有步骤详情
         * @type {Array.<StepDetail> || null}
         */
        this.StepDetails = null;

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
        this.TotalStep = 'TotalStep' in params ? params.TotalStep : null;
        this.CurrentStep = 'CurrentStep' in params ? params.CurrentStep : null;

        if (params.StepDetails) {
            this.StepDetails = new Array();
            for (let z in params.StepDetails) {
                let obj = new StepDetail();
                obj.deserialize(params.StepDetails[z]);
                this.StepDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReadOnlyDBInstances请求参数结构体
 * @class
 */
class CreateReadOnlyDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例ID，格式如：mssql-3l3fgqn7
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 只读组类型选项，1-按照一个实例一个只读组的方式发货，2-新建只读组后发货，所有实例都在这个只读组下面， 3-发货的所有实例都在已有的只读组下面
         * @type {number || null}
         */
        this.ReadOnlyGroupType = null;

        /**
         * 实例内存大小，单位GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例磁盘大小，单位GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 0-默认不升级主实例，1-强制升级主实例完成ro部署；主实例为非集群版时需要填1，强制升级为集群版。填1 说明您已同意将主实例升级到集群版实例。
         * @type {number || null}
         */
        this.ReadOnlyGroupForcedUpgrade = null;

        /**
         * ReadOnlyGroupType=3时必填,已存在的只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * ReadOnlyGroupType=2时必填，新建的只读组名称
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * ReadOnlyGroupType=2时必填，新建的只读组是否开启延迟剔除功能，1-开启，0-关闭。当只读副本与主实例延迟大于阈值后，自动剔除。
         * @type {number || null}
         */
        this.ReadOnlyGroupIsOfflineDelay = null;

        /**
         * ReadOnlyGroupType=2 且 ReadOnlyGroupIsOfflineDelay=1时必填，新建的只读组延迟剔除的阈值。
         * @type {number || null}
         */
        this.ReadOnlyGroupMaxDelayTime = null;

        /**
         * ReadOnlyGroupType=2 且 ReadOnlyGroupIsOfflineDelay=1时必填，新建的只读组延迟剔除后至少保留只读副本的个数。
         * @type {number || null}
         */
        this.ReadOnlyGroupMinInGroup = null;

        /**
         * 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 本次购买几个只读实例，默认值为1。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * VPC子网ID，形如subnet-bdoe83fa；SubnetId和VpcId需同时设置或者同时不设置
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC网络ID，形如vpc-dsp338hz；SubnetId和VpcId需同时设置或者同时不设置
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 购买实例周期，默认取值为1，表示一个月。取值不超过48
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 安全组列表，填写形如sg-xxx的安全组ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupList = null;

        /**
         * 是否自动使用代金券；1 - 是，0 - 否，默认不使用
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID数组，目前单个订单只能使用一张
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ReadOnlyGroupType = 'ReadOnlyGroupType' in params ? params.ReadOnlyGroupType : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.ReadOnlyGroupForcedUpgrade = 'ReadOnlyGroupForcedUpgrade' in params ? params.ReadOnlyGroupForcedUpgrade : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.ReadOnlyGroupIsOfflineDelay = 'ReadOnlyGroupIsOfflineDelay' in params ? params.ReadOnlyGroupIsOfflineDelay : null;
        this.ReadOnlyGroupMaxDelayTime = 'ReadOnlyGroupMaxDelayTime' in params ? params.ReadOnlyGroupMaxDelayTime : null;
        this.ReadOnlyGroupMinInGroup = 'ReadOnlyGroupMinInGroup' in params ? params.ReadOnlyGroupMinInGroup : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.SecurityGroupList = 'SecurityGroupList' in params ? params.SecurityGroupList : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * ModifyAccountPrivilege请求参数结构体
 * @class
 */
class ModifyAccountPrivilegeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库实例ID，形如mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 账号权限变更信息
         * @type {Array.<AccountPrivilegeModifyInfo> || null}
         */
        this.Accounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountPrivilegeModifyInfo();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * DescribeMigrations请求参数结构体
 * @class
 */
class DescribeMigrationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态集合。只要符合集合中某一状态的迁移任务，就会查出来
         * @type {Array.<number> || null}
         */
        this.StatusSet = null;

        /**
         * 迁移任务的名称，模糊匹配
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * 分页返回，每页返回的数目，取值为1-100，默认值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页返回，页编号，默认值为第0页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询结果按照关键字排序，可选值为name、createTime、startTime，endTime，status
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式，可选值为desc、asc
         * @type {string || null}
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
        this.StatusSet = 'StatusSet' in params ? params.StatusSet : null;
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * 实例的数据库信息
 * @class
 */
class InstanceDBDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库信息列表
         * @type {Array.<DBDetail> || null}
         */
        this.DBDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DBDetails) {
            this.DBDetails = new Array();
            for (let z in params.DBDetails) {
                let obj = new DBDetail();
                obj.deserialize(params.DBDetails[z]);
                this.DBDetails.push(obj);
            }
        }

    }
}

/**
 * 进度步骤详情
 * @class
 */
class StepDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 具体步骤返回信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 当前步骤状态，0成功，-2未开始
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 步骤名称
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeDBs请求参数结构体
 * @class
 */
class DescribeDBsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 分页返回，每页返回的数目，取值为1-100，默认值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页返回，页编号，默认值为第0页
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
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CompleteExpansion请求参数结构体
 * @class
 */
class CompleteExpansionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-j8kv137v
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
 * RenewPostpaidDBInstance请求参数结构体
 * @class
 */
class RenewPostpaidDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：mssql-3l3fgqn7 或 mssqlro-3l3fgqn7
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
 * DescribeBackups返回参数结构体
 * @class
 */
class DescribeBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 备份列表详情
         * @type {Array.<Backup> || null}
         */
        this.Backups = null;

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

        if (params.Backups) {
            this.Backups = new Array();
            for (let z in params.Backups) {
                let obj = new Backup();
                obj.deserialize(params.Backups[z]);
                this.Backups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * DescribeFlowStatus返回参数结构体
 * @class
 */
class DescribeFlowStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程状态，0：成功，1：失败，2：运行中
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
 * StopMigration请求参数结构体
 * @class
 */
class StopMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * CreateReadOnlyDBInstances返回参数结构体
 * @class
 */
class CreateReadOnlyDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单名称数组
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMigration请求参数结构体
 * @class
 */
class DeleteMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * DescribeMigrationDetail请求参数结构体
 * @class
 */
class DescribeMigrationDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：mssql-c1nl9rpv 或者 mssqlro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIdSet = 'SecurityGroupIdSet' in params ? params.SecurityGroupIdSet : null;

    }
}

/**
 * 数据库权限变更信息
 * @class
 */
class DBPrivilegeModifyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.DBName = null;

        /**
         * 权限变更信息。ReadWrite表示可读写，ReadOnly表示只读，Delete表示删除账号对该DB的权限
         * @type {string || null}
         */
        this.Privilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

    }
}

/**
 * RemoveBackups返回参数结构体
 * @class
 */
class RemoveBackupsResponse extends  AbstractModel {
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
 * TerminateDBInstance请求参数结构体
 * @class
 */
class TerminateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主动销毁的实例ID列表，格式如：[mssql-3l3fgqn7]。与云数据库控制台页面中显示的实例ID相同
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * CreateDB请求参数结构体
 * @class
 */
class CreateDBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库创建信息
         * @type {Array.<DBCreateInfo> || null}
         */
        this.DBs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DBs) {
            this.DBs = new Array();
            for (let z in params.DBs) {
                let obj = new DBCreateInfo();
                obj.deserialize(params.DBs[z]);
                this.DBs.push(obj);
            }
        }

    }
}

/**
 * DescribeProjectSecurityGroups请求参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID。
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 安全组
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 入站规则
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.InboundSet = null;

        /**
         * 出站规则
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.OutboundSet = null;

        /**
         * 安全组ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * 安全组备注
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.InboundSet) {
            this.InboundSet = new Array();
            for (let z in params.InboundSet) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.InboundSet[z]);
                this.InboundSet.push(obj);
            }
        }

        if (params.OutboundSet) {
            this.OutboundSet = new Array();
            for (let z in params.OutboundSet) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.OutboundSet[z]);
                this.OutboundSet.push(obj);
            }
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

    }
}

/**
 * 只读副本实例
 * @class
 */
class ReadOnlyInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读副本ID，格式如：mssqlro-3l3fgqn7
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 只读副本名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 只读副本唯一UID
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 只读副本所在项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 只读副本状态。1：申请中 2：运行中 3：被延迟剔除 4：已隔离 5：回收中 6：已回收 7：任务执行中 8：已下线 9：实例扩容中 10：实例迁移中  12：重启中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 只读副本创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 只读副本更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 只读副本内存大小，单位G
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 只读副本存储空间大小，单位G
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 只读副本cpu核心数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 只读副本版本代号
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 宿主机代号
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 只读副本模式，2-单机
         * @type {number || null}
         */
        this.Model = null;

        /**
         * 只读副本计费模式，1-包年包月，0-按量计费
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 只读副本权重
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 只读副本延迟时间，单位秒
         * @type {string || null}
         */
        this.DelayTime = null;

        /**
         * 只读副本与主实例的同步状态。
Init:初始化
DeployReadOnlyInPorgress:部署副本进行中
DeployReadOnlySuccess:部署副本成功
DeployReadOnlyFail:部署副本失败
DeployMasterDBInPorgress:主节点上加入副本数据库进行中
DeployMasterDBSuccess:主节点上加入副本数据库成功
DeployMasterDBFail:主节点上加入副本数据库进失败
DeployReadOnlyDBInPorgress:副本还原加入数据库开始
DeployReadOnlyDBSuccess:副本还原加入数据库成功
DeployReadOnlyDBFail:副本还原加入数据库失败
SyncDelay:同步延迟
SyncFail:同步故障
SyncExcluded:已剔除只读组
SyncNormal:正常
         * @type {string || null}
         */
        this.SynStatus = null;

        /**
         * 只读副本与主实例没有同步的库
         * @type {string || null}
         */
        this.DatabaseDifference = null;

        /**
         * 只读副本与主实例没有同步的账户
         * @type {string || null}
         */
        this.AccountDifference = null;

        /**
         * 只读副本计费开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 只读副本计费结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 只读副本隔离时间
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
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.SynStatus = 'SynStatus' in params ? params.SynStatus : null;
        this.DatabaseDifference = 'DatabaseDifference' in params ? params.DatabaseDifference : null;
        this.AccountDifference = 'AccountDifference' in params ? params.AccountDifference : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance请求参数结构体
 * @class
 */
class InquiryPriceUpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例升级后的内存大小，单位GB，其值不能比当前实例内存小
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例升级后的磁盘大小，单位GB，其值不能比当前实例磁盘小
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 实例升级后的CPU核心数，其值不能比当前实例CPU小
         * @type {number || null}
         */
        this.Cpu = null;

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
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * ModifyDBRemark请求参数结构体
 * @class
 */
class ModifyDBRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-rljoi3bf
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名称及备注数组，每个元素包含数据库名和对应的备注
         * @type {Array.<DBRemark> || null}
         */
        this.DBRemarks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DBRemarks) {
            this.DBRemarks = new Array();
            for (let z in params.DBRemarks) {
                let obj = new DBRemark();
                obj.deserialize(params.DBRemarks[z]);
                this.DBRemarks.push(obj);
            }
        }

    }
}

/**
 * 只读实例与权重对应关系
 * @class
 */
class ReadOnlyInstanceWeightPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读实例ID，格式如：mssqlro-3l3fgqn7
         * @type {string || null}
         */
        this.ReadOnlyInstanceId = null;

        /**
         * 只读实例权重 ，范围是0-100
         * @type {number || null}
         */
        this.ReadOnlyWeight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyInstanceId = 'ReadOnlyInstanceId' in params ? params.ReadOnlyInstanceId : null;
        this.ReadOnlyWeight = 'ReadOnlyWeight' in params ? params.ReadOnlyWeight : null;

    }
}

/**
 * ModifyDBInstanceName请求参数结构体
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库实例ID，形如mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 新的数据库实例名字
         * @type {string || null}
         */
        this.InstanceName = null;

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

    }
}

/**
 * 实例账号密码信息
 * @class
 */
class AccountPassword extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 密码
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DeleteMigration返回参数结构体
 * @class
 */
class DeleteMigrationResponse extends  AbstractModel {
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
 * InquiryPriceRenewDBInstance返回参数结构体
 * @class
 */
class InquiryPriceRenewDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未打折的原价，其值除以100表示最终的价格。例如10094表示100.94元
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际需要支付价格，其值除以100表示最终的价格。例如10094表示100.94元
         * @type {number || null}
         */
        this.Price = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceRenewDBInstance请求参数结构体
 * @class
 */
class InquiryPriceRenewDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费周期。按月续费最多48个月。默认查询续费一个月的价格
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 续费周期单位。month表示按月续费，当前只支持按月付费查询价格
         * @type {string || null}
         */
        this.TimeUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

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
 * 数据库可回档时间范围信息
 * @class
 */
class DbRollbackTimeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DBName = null;

        /**
         * 可回档开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 可回档结束时间
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
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
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
 * DescribeReadOnlyGroupList请求参数结构体
 * @class
 */
class DescribeReadOnlyGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例ID，格式如：mssql-3l3fgqn7
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
 * CreateBackup返回参数结构体
 * @class
 */
class CreateBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例详细信息
 * @class
 */
class DBInstance extends  AbstractModel {
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
        this.Name = null;

        /**
         * 实例所在项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例所在地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 实例所在可用区ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 实例所在私有网络ID，基础网络时为 0
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 实例所在私有网络子网ID，基础网络时为 0
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 实例状态。取值范围： <li>1：申请中</li> <li>2：运行中</li> <li>3：受限运行中 (主备切换中)</li> <li>4：已隔离</li> <li>5：回收中</li> <li>6：已回收</li> <li>7：任务执行中 (实例做备份、回档等操作)</li> <li>8：已下线</li> <li>9：实例扩容中</li> <li>10：实例迁移中</li> <li>11：只读</li> <li>12：重启中</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例访问IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 实例访问端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 实例计费开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 实例计费结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 实例隔离时间
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * 实例内存大小，单位G
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例已经使用存储空间大小，单位G
         * @type {number || null}
         */
        this.UsedStorage = null;

        /**
         * 实例存储空间大小，单位G
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 实例版本
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 实例续费标记，0-正常续费，1-自动续费，2-到期不续费
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 实例高可用， 1-双机高可用，2-单机
         * @type {number || null}
         */
        this.Model = null;

        /**
         * 实例所在地域名称，如 ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例所在可用区名称，如 ap-guangzhou-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 备份时间点
         * @type {string || null}
         */
        this.BackupTime = null;

        /**
         * 实例付费模式， 0-按量计费，1-包年包月
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例唯一UID
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 实例cpu核心数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例版本代号
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 物理机代号
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 计费ID
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 实例所属VPC的唯一字符串ID，格式如：vpc-xxx，基础网络时为空字符串
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 实例所属子网的唯一字符串ID，格式如： subnet-xxx，基础网络时为空字符串
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 实例隔离操作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolateOperator = null;

        /**
         * 发布订阅标识，SUB-订阅实例，PUB-发布实例，空值-没有发布订阅的普通实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubFlag = null;

        /**
         * 只读标识，RO-只读实例，MASTER-有RO实例的主实例，空值-没有只读组的非RO实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ROFlag = null;

        /**
         * 容灾类型，MIRROR-镜像，ALWAYSON-AlwaysOn, SINGLE-单例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HAFlag = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.UsedStorage = 'UsedStorage' in params ? params.UsedStorage : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.IsolateOperator = 'IsolateOperator' in params ? params.IsolateOperator : null;
        this.SubFlag = 'SubFlag' in params ? params.SubFlag : null;
        this.ROFlag = 'ROFlag' in params ? params.ROFlag : null;
        this.HAFlag = 'HAFlag' in params ? params.HAFlag : null;

    }
}

/**
 * DescribeProductConfig返回参数结构体
 * @class
 */
class DescribeProductConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格信息数组
         * @type {Array.<SpecInfo> || null}
         */
        this.SpecInfoList = null;

        /**
         * 返回总共多少条数据
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

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMigration请求参数结构体
 * @class
 */
class CreateMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务的名称
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * 迁移类型（1:结构迁移 2:数据迁移 3:增量同步）
         * @type {number || null}
         */
        this.MigrateType = null;

        /**
         * 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式）
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 迁移源
         * @type {MigrateSource || null}
         */
        this.Source = null;

        /**
         * 迁移目标
         * @type {MigrateTarget || null}
         */
        this.Target = null;

        /**
         * 迁移DB对象 ，离线迁移不使用（SourceType=4或SourceType=5）。
         * @type {Array.<MigrateDB> || null}
         */
        this.MigrateDBSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

        if (params.Source) {
            let obj = new MigrateSource();
            obj.deserialize(params.Source)
            this.Source = obj;
        }

        if (params.Target) {
            let obj = new MigrateTarget();
            obj.deserialize(params.Target)
            this.Target = obj;
        }

        if (params.MigrateDBSet) {
            this.MigrateDBSet = new Array();
            for (let z in params.MigrateDBSet) {
                let obj = new MigrateDB();
                obj.deserialize(params.MigrateDBSet[z]);
                this.MigrateDBSet.push(obj);
            }
        }

    }
}

/**
 * StartMigrationCheck请求参数结构体
 * @class
 */
class StartMigrationCheckRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务id
         * @type {number || null}
         */
        this.MigrateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;

    }
}

/**
 * 账户信息详情
 * @class
 */
class AccountDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 账户备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 账户创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 账户状态，1-创建中，2-正常，3-修改中，4-密码重置中，-1-删除中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 账户更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 密码更新时间
         * @type {string || null}
         */
        this.PassTime = null;

        /**
         * 账户内部状态，正常为enable
         * @type {string || null}
         */
        this.InternalStatus = null;

        /**
         * 该账户对相关db的读写权限信息
         * @type {Array.<DBPrivilege> || null}
         */
        this.Dbs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PassTime = 'PassTime' in params ? params.PassTime : null;
        this.InternalStatus = 'InternalStatus' in params ? params.InternalStatus : null;

        if (params.Dbs) {
            this.Dbs = new Array();
            for (let z in params.Dbs) {
                let obj = new DBPrivilege();
                obj.deserialize(params.Dbs[z]);
                this.Dbs.push(obj);
            }
        }

    }
}

/**
 * CreateBasicDBInstances请求参数结构体
 * @class
 */
class CreateBasicDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例可用区，类似ap-guangzhou-1（广州一区）；实例可售卖区域可以通过接口DescribeZones获取
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例的CPU核心数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例内存大小，单位GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例磁盘大小，单位GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * VPC子网ID，形如subnet-bdoe83fa
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC网络ID，形如vpc-dsp338hz
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 购买实例的宿主机类型, CLOUD_PREMIUM-虚拟机高性能云盘，CLOUD_SSD-虚拟机SSD云盘
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 付费模式，取值支持 PREPAID（预付费），POSTPAID（后付费）。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 本次购买几个实例，默认值为1。取值不超过10
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * sqlserver版本，目前只支持：2008R2（SQL Server 2008 Enterprise），2012SP3（SQL Server 2012 Enterprise），2016SP1（SQL Server 2016 Enterprise），201602（SQL Server 2016 Standard），2017（SQL Server 2017 Enterprise），201202（SQL Server 2012 Standard），201402（SQL Server 2014 Standard），2014SP2（SQL Server 2014 Enterprise），201702（SQL Server 2017 Standard）版本。每个地域支持售卖的版本不同，可通过DescribeProductConfig接口来拉取每个地域可售卖的版本信息。不填，默认为版本2008R2。
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 购买实例周期，默认取值为1，表示一个月。取值不超过48
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 安全组列表，填写形如sg-xxx的安全组ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupList = null;

        /**
         * 自动续费标志：0-正常续费  1-自动续费，默认为1自动续费。只在购买预付费实例时有效。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 是否自动使用代金券；1 - 是，0 - 否，默认不使用
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID数组，目前单个订单只能使用一张
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 可维护时间窗配置，以周为单位，表示周几允许维护，1-7分别代表周一到周末
         * @type {Array.<number> || null}
         */
        this.Weekly = null;

        /**
         * 可维护时间窗配置，每天可维护的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 可维护时间窗配置，持续时间，单位：小时
         * @type {number || null}
         */
        this.Span = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.SecurityGroupList = 'SecurityGroupList' in params ? params.SecurityGroupList : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.Weekly = 'Weekly' in params ? params.Weekly : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Span = 'Span' in params ? params.Span : null;

    }
}

/**
 * ModifyDBName返回参数结构体
 * @class
 */
class ModifyDBNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePublishSubscribe返回参数结构体
 * @class
 */
class DescribePublishSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 发布订阅列表
         * @type {Array.<PublishSubscribe> || null}
         */
        this.PublishSubscribeSet = null;

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

        if (params.PublishSubscribeSet) {
            this.PublishSubscribeSet = new Array();
            for (let z in params.PublishSubscribeSet) {
                let obj = new PublishSubscribe();
                obj.deserialize(params.PublishSubscribeSet[z]);
                this.PublishSubscribeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBName请求参数结构体
 * @class
 */
class ModifyDBNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 旧数据库名
         * @type {string || null}
         */
        this.OldDBName = null;

        /**
         * 新数据库名
         * @type {string || null}
         */
        this.NewDBName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldDBName = 'OldDBName' in params ? params.OldDBName : null;
        this.NewDBName = 'NewDBName' in params ? params.NewDBName : null;

    }
}

/**
 * ModifyDBInstanceRenewFlag请求参数结构体
 * @class
 */
class ModifyDBInstanceRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例续费状态标记信息
         * @type {Array.<InstanceRenewInfo> || null}
         */
        this.RenewFlags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RenewFlags) {
            this.RenewFlags = new Array();
            for (let z in params.RenewFlags) {
                let obj = new InstanceRenewInfo();
                obj.deserialize(params.RenewFlags[z]);
                this.RenewFlags.push(obj);
            }
        }

    }
}

/**
 * 备份文件详细信息
 * @class
 */
class Backup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件大小，单位 KB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 备份开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 备份结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 内网下载地址
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * 外网下载地址
         * @type {string || null}
         */
        this.ExternalAddr = null;

        /**
         * 备份文件唯一标识，RestoreInstance接口会用到该字段
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 备份文件状态（0-创建中；1-成功；2-失败）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 多库备份时的DB列表
         * @type {Array.<string> || null}
         */
        this.DBs = null;

        /**
         * 备份策略（0-实例备份；1-多库备份）
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 备份方式，0-定时备份；1-手动临时备份
         * @type {number || null}
         */
        this.BackupWay = null;

        /**
         * 备份名称，可自定义
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
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DBs = 'DBs' in params ? params.DBs : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.BackupWay = 'BackupWay' in params ? params.BackupWay : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * 账户备注信息
 * @class
 */
class AccountRemark extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 对应账户新的备注信息
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
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
 * ModifyDBInstanceName返回参数结构体
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
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
 * 数据库账号权限变更信息
 * @class
 */
class AccountPrivilegeModifyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 账号权限变更信息
         * @type {Array.<DBPrivilegeModifyInfo> || null}
         */
        this.DBPrivileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;

        if (params.DBPrivileges) {
            this.DBPrivileges = new Array();
            for (let z in params.DBPrivileges) {
                let obj = new DBPrivilegeModifyInfo();
                obj.deserialize(params.DBPrivileges[z]);
                this.DBPrivileges.push(obj);
            }
        }

    }
}

/**
 * 迁移任务的目标类型
 * @class
 */
class MigrateTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移目标实例的ID，格式如：mssql-si2823jyl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 迁移目标实例的用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 迁移目标实例的密码
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 账号创建信息
 * @class
 */
class AccountCreateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 实例密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * DB权限列表
         * @type {Array.<DBPrivilege> || null}
         */
        this.DBPrivileges = null;

        /**
         * 账号备注信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 是否为管理员账户，默认为否
         * @type {boolean || null}
         */
        this.IsAdmin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.DBPrivileges) {
            this.DBPrivileges = new Array();
            for (let z in params.DBPrivileges) {
                let obj = new DBPrivilege();
                obj.deserialize(params.DBPrivileges[z]);
                this.DBPrivileges.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.IsAdmin = 'IsAdmin' in params ? params.IsAdmin : null;

    }
}

/**
 * RenewDBInstance返回参数结构体
 * @class
 */
class RenewDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单名称
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
 * 账号的数据库权限信息
 * @class
 */
class DBPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.DBName = null;

        /**
         * 数据库权限，ReadWrite表示可读写，ReadOnly表示只读
         * @type {string || null}
         */
        this.Privilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

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
         * 订单数组。发货时会返回订单名字，利用该订单名字调用DescribeOrders接口查询发货情况
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * DescribeReadOnlyGroupDetails返回参数结构体
 * @class
 */
class DescribeReadOnlyGroupDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 只读组名称
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * 只读组的地域ID，与主实例相同
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 只读组的可用区ID，与主实例相同
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 是否启动超时剔除功能，0-不开启剔除功能，1-开启剔除功能
         * @type {number || null}
         */
        this.IsOfflineDelay = null;

        /**
         * 启动超时剔除功能后，使用的超时阈值
         * @type {number || null}
         */
        this.ReadOnlyMaxDelayTime = null;

        /**
         * 启动超时剔除功能后，至少只读组保留的只读副本数
         * @type {number || null}
         */
        this.MinReadOnlyInGroup = null;

        /**
         * 只读组vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 只读组vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 只读组私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 只读组私有网络子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 只读实例副本集合
         * @type {Array.<ReadOnlyInstance> || null}
         */
        this.ReadOnlyInstanceSet = null;

        /**
         * 只读组状态: 1-申请成功运行中，5-申请中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 主实例ID，形如mssql-sgeshe3th
         * @type {string || null}
         */
        this.MasterInstanceId = null;

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
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.IsOfflineDelay = 'IsOfflineDelay' in params ? params.IsOfflineDelay : null;
        this.ReadOnlyMaxDelayTime = 'ReadOnlyMaxDelayTime' in params ? params.ReadOnlyMaxDelayTime : null;
        this.MinReadOnlyInGroup = 'MinReadOnlyInGroup' in params ? params.MinReadOnlyInGroup : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.ReadOnlyInstanceSet) {
            this.ReadOnlyInstanceSet = new Array();
            for (let z in params.ReadOnlyInstanceSet) {
                let obj = new ReadOnlyInstance();
                obj.deserialize(params.ReadOnlyInstanceSet[z]);
                this.ReadOnlyInstanceSet.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccount请求参数结构体
 * @class
 */
class DeleteAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库实例ID，形如mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例用户名数组
         * @type {Array.<string> || null}
         */
        this.UserNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserNames = 'UserNames' in params ? params.UserNames : null;

    }
}

/**
 * DescribeReadOnlyGroupByReadOnlyInstance请求参数结构体
 * @class
 */
class DescribeReadOnlyGroupByReadOnlyInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：mssqlro-3l3fgqn7
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
 * DescribeMaintenanceSpan请求参数结构体
 * @class
 */
class DescribeMaintenanceSpanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-k8voqdlz
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
 * 发布订阅对象
 * @class
 */
class PublishSubscribe extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布订阅ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 发布订阅名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 发布实例ID
         * @type {string || null}
         */
        this.PublishInstanceId = null;

        /**
         * 发布实例名称
         * @type {string || null}
         */
        this.PublishInstanceName = null;

        /**
         * 发布实例IP
         * @type {string || null}
         */
        this.PublishInstanceIp = null;

        /**
         * 订阅实例ID
         * @type {string || null}
         */
        this.SubscribeInstanceId = null;

        /**
         * 订阅实例名称
         * @type {string || null}
         */
        this.SubscribeInstanceName = null;

        /**
         * 订阅实例IP
         * @type {string || null}
         */
        this.SubscribeInstanceIp = null;

        /**
         * 数据库的订阅发布关系集合
         * @type {Array.<DatabaseTupleStatus> || null}
         */
        this.DatabaseTupleSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PublishInstanceId = 'PublishInstanceId' in params ? params.PublishInstanceId : null;
        this.PublishInstanceName = 'PublishInstanceName' in params ? params.PublishInstanceName : null;
        this.PublishInstanceIp = 'PublishInstanceIp' in params ? params.PublishInstanceIp : null;
        this.SubscribeInstanceId = 'SubscribeInstanceId' in params ? params.SubscribeInstanceId : null;
        this.SubscribeInstanceName = 'SubscribeInstanceName' in params ? params.SubscribeInstanceName : null;
        this.SubscribeInstanceIp = 'SubscribeInstanceIp' in params ? params.SubscribeInstanceIp : null;

        if (params.DatabaseTupleSet) {
            this.DatabaseTupleSet = new Array();
            for (let z in params.DatabaseTupleSet) {
                let obj = new DatabaseTupleStatus();
                obj.deserialize(params.DatabaseTupleSet[z]);
                this.DatabaseTupleSet.push(obj);
            }
        }

    }
}

/**
 * DescribeBackupByFlowId请求参数结构体
 * @class
 */
class DescribeBackupByFlowIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：mssql-3l3fgqn7
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 创建备份流程ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CreateBackup请求参数结构体
 * @class
 */
class CreateBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份策略(0-实例备份 1-多库备份)
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 需要备份库名的列表(多库备份才填写)
         * @type {Array.<string> || null}
         */
        this.DBNames = null;

        /**
         * 实例ID，形如mssql-i1z41iwd
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份名称，若不填则自动生成“实例ID_备份开始时间戳”
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
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.DBNames = 'DBNames' in params ? params.DBNames : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * DescribePublishSubscribe请求参数结构体
 * @class
 */
class DescribePublishSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 订阅/发布实例ID，与InstanceId是发布实例还是订阅实例有关；当InstanceId为发布实例时，本字段按照订阅实例ID做筛选；当InstanceId为订阅实例时，本字段按照发布实例ID做筛选；
         * @type {string || null}
         */
        this.PubOrSubInstanceId = null;

        /**
         * 订阅/发布实例内网IP，与InstanceId是发布实例还是订阅实例有关；当InstanceId为发布实例时，本字段按照订阅实例内网IP做筛选；当InstanceId为订阅实例时，本字段按照发布实例内网IP做筛选；
         * @type {string || null}
         */
        this.PubOrSubInstanceIp = null;

        /**
         * 订阅发布ID，用于筛选
         * @type {number || null}
         */
        this.PublishSubscribeId = null;

        /**
         * 订阅发布名字，用于筛选
         * @type {string || null}
         */
        this.PublishSubscribeName = null;

        /**
         * 发布库名字，用于筛选
         * @type {string || null}
         */
        this.PublishDBName = null;

        /**
         * 订阅库名字，用于筛选
         * @type {string || null}
         */
        this.SubscribeDBName = null;

        /**
         * 分页，页数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页，页大小
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
        this.PubOrSubInstanceId = 'PubOrSubInstanceId' in params ? params.PubOrSubInstanceId : null;
        this.PubOrSubInstanceIp = 'PubOrSubInstanceIp' in params ? params.PubOrSubInstanceIp : null;
        this.PublishSubscribeId = 'PublishSubscribeId' in params ? params.PublishSubscribeId : null;
        this.PublishSubscribeName = 'PublishSubscribeName' in params ? params.PublishSubscribeName : null;
        this.PublishDBName = 'PublishDBName' in params ? params.PublishDBName : null;
        this.SubscribeDBName = 'SubscribeDBName' in params ? params.SubscribeDBName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyAccountRemark请求参数结构体
 * @class
 */
class ModifyAccountRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 修改备注的账户信息
         * @type {Array.<AccountRemark> || null}
         */
        this.Accounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountRemark();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * ModifyPublishSubscribeName请求参数结构体
 * @class
 */
class ModifyPublishSubscribeNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布订阅ID
         * @type {number || null}
         */
        this.PublishSubscribeId = null;

        /**
         * 待修改的发布订阅名称
         * @type {string || null}
         */
        this.PublishSubscribeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishSubscribeId = 'PublishSubscribeId' in params ? params.PublishSubscribeId : null;
        this.PublishSubscribeName = 'PublishSubscribeName' in params ? params.PublishSubscribeName : null;

    }
}

/**
 * DeletePublishSubscribe返回参数结构体
 * @class
 */
class DeletePublishSubscribeResponse extends  AbstractModel {
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
 * InquiryPriceUpgradeDBInstance返回参数结构体
 * @class
 */
class InquiryPriceUpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未打折的原价，其值除以100表示最终的价格。例如10094表示100.94元
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际需要支付价格，其值除以100表示最终的价格。例如10094表示100.94元
         * @type {number || null}
         */
        this.Price = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrationDetail返回参数结构体
 * @class
 */
class DescribeMigrationDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

        /**
         * 迁移任务名称
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * 迁移任务所属的用户ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 迁移任务所属的地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式）
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 迁移任务的创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 迁移任务的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 迁移任务的结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 迁移任务的状态（1:初始化,4:迁移中,5.迁移失败,6.迁移成功）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 迁移任务当前进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 迁移类型（1:结构迁移 2:数据迁移 3:增量同步）
         * @type {number || null}
         */
        this.MigrateType = null;

        /**
         * 迁移源
         * @type {MigrateSource || null}
         */
        this.Source = null;

        /**
         * 迁移目标
         * @type {MigrateTarget || null}
         */
        this.Target = null;

        /**
         * 迁移DB对象 ，离线迁移（SourceType=4或SourceType=5）不使用。
         * @type {Array.<MigrateDB> || null}
         */
        this.MigrateDBSet = null;

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
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;

        if (params.Source) {
            let obj = new MigrateSource();
            obj.deserialize(params.Source)
            this.Source = obj;
        }

        if (params.Target) {
            let obj = new MigrateTarget();
            obj.deserialize(params.Target)
            this.Target = obj;
        }

        if (params.MigrateDBSet) {
            this.MigrateDBSet = new Array();
            for (let z in params.MigrateDBSet) {
                let obj = new MigrateDB();
                obj.deserialize(params.MigrateDBSet[z]);
                this.MigrateDBSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMigration请求参数结构体
 * @class
 */
class ModifyMigrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务ID
         * @type {number || null}
         */
        this.MigrateId = null;

        /**
         * 新的迁移任务的名称，若不填则不修改
         * @type {string || null}
         */
        this.MigrateName = null;

        /**
         * 新的迁移类型（1:结构迁移 2:数据迁移 3:增量同步），若不填则不修改
         * @type {number || null}
         */
        this.MigrateType = null;

        /**
         * 迁移源的类型 1:TencentDB for SQLServer 2:云服务器自建SQLServer数据库 4:SQLServer备份还原 5:SQLServer备份还原（COS方式），若不填则不修改
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 迁移源，若不填则不修改
         * @type {MigrateSource || null}
         */
        this.Source = null;

        /**
         * 迁移目标，若不填则不修改
         * @type {MigrateTarget || null}
         */
        this.Target = null;

        /**
         * 迁移DB对象 ，离线迁移（SourceType=4或SourceType=5）不使用，若不填则不修改
         * @type {Array.<MigrateDB> || null}
         */
        this.MigrateDBSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MigrateId = 'MigrateId' in params ? params.MigrateId : null;
        this.MigrateName = 'MigrateName' in params ? params.MigrateName : null;
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

        if (params.Source) {
            let obj = new MigrateSource();
            obj.deserialize(params.Source)
            this.Source = obj;
        }

        if (params.Target) {
            let obj = new MigrateTarget();
            obj.deserialize(params.Target)
            this.Target = obj;
        }

        if (params.MigrateDBSet) {
            this.MigrateDBSet = new Array();
            for (let z in params.MigrateDBSet) {
                let obj = new MigrateDB();
                obj.deserialize(params.MigrateDBSet[z]);
                this.MigrateDBSet.push(obj);
            }
        }

    }
}

/**
 * DeleteDBInstance请求参数结构体
 * @class
 */
class DeleteDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：mssql-3l3fgqn7 或 mssqlro-3l3fgqn7
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
 * CreateAccount返回参数结构体
 * @class
 */
class CreateAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewPostpaidDBInstance返回参数结构体
 * @class
 */
class RenewPostpaidDBInstanceResponse extends  AbstractModel {
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
 * DescribeMigrationDatabases请求参数结构体
 * @class
 */
class DescribeMigrationDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移源实例的ID，格式如：mssql-si2823jyl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 迁移源实例用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 迁移源实例密码
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

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
         * 实例ID，形如mssql-j8kv137v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例升级后内存大小，单位GB，其值不能小于当前实例内存大小
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例升级后磁盘大小，单位GB，其值不能小于当前实例磁盘大小
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 是否自动使用代金券，0 - 不使用；1 - 默认使用。取值默认为0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID，目前单个订单只能使用一张代金券
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 实例升级后的CPU核心数
         * @type {number || null}
         */
        this.Cpu = null;

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
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * CreateAccount请求参数结构体
 * @class
 */
class CreateAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库实例ID，形如mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库实例账户信息
         * @type {Array.<AccountCreateInfo> || null}
         */
        this.Accounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountCreateInfo();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * DeleteDB返回参数结构体
 * @class
 */
class DeleteDBResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDB返回参数结构体
 * @class
 */
class CreateDBResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartDBInstance返回参数结构体
 * @class
 */
class RestartDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流程ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 符合条件的实例总数。分页返回的话，这个值指的是所有符合条件的实例的个数，而非当前根据Limit和Offset值返回的实例个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例列表
         * @type {Array.<DBInstance> || null}
         */
        this.DBInstances = null;

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

        if (params.DBInstances) {
            this.DBInstances = new Array();
            for (let z in params.DBInstances) {
                let obj = new DBInstance();
                obj.deserialize(params.DBInstances[z]);
                this.DBInstances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSlowlogs返回参数结构体
 * @class
 */
class DescribeSlowlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 慢查询日志信息列表
         * @type {Array.<SlowlogInfo> || null}
         */
        this.Slowlogs = null;

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

        if (params.Slowlogs) {
            this.Slowlogs = new Array();
            for (let z in params.Slowlogs) {
                let obj = new SlowlogInfo();
                obj.deserialize(params.Slowlogs[z]);
                this.Slowlogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库信息
 * @class
 */
class DBDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字符集
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 数据库创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 数据库状态。1--创建中， 2--运行中， 3--修改中，-1--删除中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 数据库账号权限信息
         * @type {Array.<AccountPrivilege> || null}
         */
        this.Accounts = null;

        /**
         * 内部状态。ONLINE表示运行中
         * @type {string || null}
         */
        this.InternalStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountPrivilege();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.InternalStatus = 'InternalStatus' in params ? params.InternalStatus : null;

    }
}

/**
 * ResetAccountPassword请求参数结构体
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库实例ID，形如mssql-njj2mtpl
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 更新后的账户密码信息数组
         * @type {Array.<AccountPassword> || null}
         */
        this.Accounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountPassword();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * ModifyReadOnlyGroupDetails请求参数结构体
 * @class
 */
class ModifyReadOnlyGroupDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例ID，格式如：mssql-3l3fgqn7
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 只读组名称，不填此参数，则不修改
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * 是否启动超时剔除功能,0-不开启剔除功能，1-开启剔除功能，不填此参数，则不修改
         * @type {number || null}
         */
        this.IsOfflineDelay = null;

        /**
         * 启动超时剔除功能后，使用的超时阈值，不填此参数，则不修改
         * @type {number || null}
         */
        this.ReadOnlyMaxDelayTime = null;

        /**
         * 启动超时剔除功能后，只读组至少保留的只读副本数，不填此参数，则不修改
         * @type {number || null}
         */
        this.MinReadOnlyInGroup = null;

        /**
         * 只读组实例权重修改集合，不填此参数，则不修改
         * @type {Array.<ReadOnlyInstanceWeightPair> || null}
         */
        this.WeightPairs = null;

        /**
         * 0-用户自定义权重（根据WeightPairs调整）,1-系统自动分配权重(WeightPairs无效)， 默认为0
         * @type {number || null}
         */
        this.AutoWeight = null;

        /**
         * 0-不重新均衡负载，1-重新均衡负载，默认为0
         * @type {number || null}
         */
        this.BalanceWeight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.IsOfflineDelay = 'IsOfflineDelay' in params ? params.IsOfflineDelay : null;
        this.ReadOnlyMaxDelayTime = 'ReadOnlyMaxDelayTime' in params ? params.ReadOnlyMaxDelayTime : null;
        this.MinReadOnlyInGroup = 'MinReadOnlyInGroup' in params ? params.MinReadOnlyInGroup : null;

        if (params.WeightPairs) {
            this.WeightPairs = new Array();
            for (let z in params.WeightPairs) {
                let obj = new ReadOnlyInstanceWeightPair();
                obj.deserialize(params.WeightPairs[z]);
                this.WeightPairs.push(obj);
            }
        }
        this.AutoWeight = 'AutoWeight' in params ? params.AutoWeight : null;
        this.BalanceWeight = 'BalanceWeight' in params ? params.BalanceWeight : null;

    }
}

/**
 * RollbackInstance请求参数结构体
 * @class
 */
class RollbackInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 回档类型，0-回档的数据库覆盖原库；1-回档的数据库以重命名的形式生成，不覆盖原库
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 需要回档的数据库
         * @type {Array.<string> || null}
         */
        this.DBs = null;

        /**
         * 回档目标时间点
         * @type {string || null}
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DBs = 'DBs' in params ? params.DBs : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * DescribeSlowlogs请求参数结构体
 * @class
 */
class DescribeSlowlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如mssql-k8voqdlz
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页返回，每页返回的数目，取值为1-100，默认值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页返回，页编号，默认值为第0页
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyDBInstanceProject请求参数结构体
 * @class
 */
class ModifyDBInstanceProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID数组，形如mssql-j8kv137v
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 项目ID，为0的话表示默认项目
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
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组ID。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例ID 列表，一个或者多个实例ID组成的数组。多个实例必须是同一个地域，同一个可用区，同一个项目下的。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * ModifyBackupName请求参数结构体
 * @class
 */
class ModifyBackupNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：mssql-3l3fgqn7
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要修改名称的备份ID，可通过DescribeBackups 接口获取。
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * 修改的备份名称
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
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * StopMigration返回参数结构体
 * @class
 */
class StopMigrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 中止迁移流程发起后，返回的流程id
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePublishSubscribe返回参数结构体
 * @class
 */
class CreatePublishSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID，可通过接口DescribeFlowStatus查询立即切换升级任务的状态。
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccounts返回参数结构体
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 账户信息列表
         * @type {Array.<AccountDetail> || null}
         */
        this.Accounts = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new AccountDetail();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDBInstance返回参数结构体
 * @class
 */
class DeleteDBInstanceResponse extends  AbstractModel {
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
 * UpgradeDBInstance返回参数结构体
 * @class
 */
class UpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单名称
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
 * DescribeRollbackTime请求参数结构体
 * @class
 */
class DescribeRollbackTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 需要查询的数据库列表
         * @type {Array.<string> || null}
         */
        this.DBs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DBs = 'DBs' in params ? params.DBs : null;

    }
}

/**
 * ModifyDBRemark返回参数结构体
 * @class
 */
class ModifyDBRemarkResponse extends  AbstractModel {
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
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
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
 * CreateDBInstances返回参数结构体
 * @class
 */
class CreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单名称
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 订单名称数组
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccount返回参数结构体
 * @class
 */
class DeleteAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeReadOnlyGroupDetailsRequest: DescribeReadOnlyGroupDetailsRequest,
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    InstanceRenewInfo: InstanceRenewInfo,
    DealInfo: DealInfo,
    CreateBasicDBInstancesResponse: CreateBasicDBInstancesResponse,
    DescribeAccountsRequest: DescribeAccountsRequest,
    DescribeMaintenanceSpanResponse: DescribeMaintenanceSpanResponse,
    CreatePublishSubscribeRequest: CreatePublishSubscribeRequest,
    CreateMigrationResponse: CreateMigrationResponse,
    QueryMigrationCheckProcessRequest: QueryMigrationCheckProcessRequest,
    DatabaseTuple: DatabaseTuple,
    RegionInfo: RegionInfo,
    ModifyBackupNameResponse: ModifyBackupNameResponse,
    DeletePublishSubscribeRequest: DeletePublishSubscribeRequest,
    ModifyMaintenanceSpanRequest: ModifyMaintenanceSpanRequest,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    DatabaseTupleStatus: DatabaseTupleStatus,
    ModifyReadOnlyGroupDetailsResponse: ModifyReadOnlyGroupDetailsResponse,
    ModifyBackupStrategyResponse: ModifyBackupStrategyResponse,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    MigrateDetail: MigrateDetail,
    RunMigrationResponse: RunMigrationResponse,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    ModifyPublishSubscribeNameResponse: ModifyPublishSubscribeNameResponse,
    DescribeCrossRegionZoneRequest: DescribeCrossRegionZoneRequest,
    CompleteMigrationResponse: CompleteMigrationResponse,
    RollbackInstanceResponse: RollbackInstanceResponse,
    DBRemark: DBRemark,
    MigrateDB: MigrateDB,
    RestartDBInstanceRequest: RestartDBInstanceRequest,
    DescribeReadOnlyGroupListResponse: DescribeReadOnlyGroupListResponse,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DescribeBackupsRequest: DescribeBackupsRequest,
    ModifyDBInstanceProjectResponse: ModifyDBInstanceProjectResponse,
    DescribeRollbackTimeResponse: DescribeRollbackTimeResponse,
    RestoreInstanceRequest: RestoreInstanceRequest,
    DescribeReadOnlyGroupByReadOnlyInstanceResponse: DescribeReadOnlyGroupByReadOnlyInstanceResponse,
    RunMigrationRequest: RunMigrationRequest,
    SecurityGroupPolicy: SecurityGroupPolicy,
    RestoreInstanceResponse: RestoreInstanceResponse,
    ModifyMaintenanceSpanResponse: ModifyMaintenanceSpanResponse,
    ZoneInfo: ZoneInfo,
    InquiryPriceCreateDBInstancesRequest: InquiryPriceCreateDBInstancesRequest,
    DescribeBackupByFlowIdResponse: DescribeBackupByFlowIdResponse,
    DescribeFlowStatusRequest: DescribeFlowStatusRequest,
    StartMigrationCheckResponse: StartMigrationCheckResponse,
    MigrateTask: MigrateTask,
    SpecInfo: SpecInfo,
    DescribeOrdersResponse: DescribeOrdersResponse,
    InquiryPriceCreateDBInstancesResponse: InquiryPriceCreateDBInstancesResponse,
    CompleteMigrationRequest: CompleteMigrationRequest,
    ModifyAccountPrivilegeResponse: ModifyAccountPrivilegeResponse,
    RemoveBackupsRequest: RemoveBackupsRequest,
    DBCreateInfo: DBCreateInfo,
    AccountPrivilege: AccountPrivilege,
    ModifyMigrationResponse: ModifyMigrationResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    DescribeDBsResponse: DescribeDBsResponse,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    SlowlogInfo: SlowlogInfo,
    ModifyAccountRemarkResponse: ModifyAccountRemarkResponse,
    DescribeMigrationsResponse: DescribeMigrationsResponse,
    ModifyBackupStrategyRequest: ModifyBackupStrategyRequest,
    RenewDBInstanceRequest: RenewDBInstanceRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    DeleteDBRequest: DeleteDBRequest,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    DescribeCrossRegionZoneResponse: DescribeCrossRegionZoneResponse,
    ModifyDBInstanceRenewFlagResponse: ModifyDBInstanceRenewFlagResponse,
    DescribeMigrationDatabasesResponse: DescribeMigrationDatabasesResponse,
    CompleteExpansionResponse: CompleteExpansionResponse,
    MigrateSource: MigrateSource,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    ReadOnlyGroup: ReadOnlyGroup,
    QueryMigrationCheckProcessResponse: QueryMigrationCheckProcessResponse,
    CreateReadOnlyDBInstancesRequest: CreateReadOnlyDBInstancesRequest,
    ModifyAccountPrivilegeRequest: ModifyAccountPrivilegeRequest,
    DescribeMigrationsRequest: DescribeMigrationsRequest,
    InstanceDBDetail: InstanceDBDetail,
    StepDetail: StepDetail,
    DescribeDBsRequest: DescribeDBsRequest,
    CompleteExpansionRequest: CompleteExpansionRequest,
    RenewPostpaidDBInstanceRequest: RenewPostpaidDBInstanceRequest,
    DescribeBackupsResponse: DescribeBackupsResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeFlowStatusResponse: DescribeFlowStatusResponse,
    StopMigrationRequest: StopMigrationRequest,
    CreateReadOnlyDBInstancesResponse: CreateReadOnlyDBInstancesResponse,
    DeleteMigrationRequest: DeleteMigrationRequest,
    DescribeMigrationDetailRequest: DescribeMigrationDetailRequest,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DBPrivilegeModifyInfo: DBPrivilegeModifyInfo,
    RemoveBackupsResponse: RemoveBackupsResponse,
    TerminateDBInstanceRequest: TerminateDBInstanceRequest,
    CreateDBRequest: CreateDBRequest,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    SecurityGroup: SecurityGroup,
    ReadOnlyInstance: ReadOnlyInstance,
    InquiryPriceUpgradeDBInstanceRequest: InquiryPriceUpgradeDBInstanceRequest,
    ModifyDBRemarkRequest: ModifyDBRemarkRequest,
    ReadOnlyInstanceWeightPair: ReadOnlyInstanceWeightPair,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    AccountPassword: AccountPassword,
    DeleteMigrationResponse: DeleteMigrationResponse,
    InquiryPriceRenewDBInstanceResponse: InquiryPriceRenewDBInstanceResponse,
    InquiryPriceRenewDBInstanceRequest: InquiryPriceRenewDBInstanceRequest,
    TerminateDBInstanceResponse: TerminateDBInstanceResponse,
    DbRollbackTimeInfo: DbRollbackTimeInfo,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    DescribeReadOnlyGroupListRequest: DescribeReadOnlyGroupListRequest,
    CreateBackupResponse: CreateBackupResponse,
    DBInstance: DBInstance,
    DescribeProductConfigResponse: DescribeProductConfigResponse,
    CreateMigrationRequest: CreateMigrationRequest,
    StartMigrationCheckRequest: StartMigrationCheckRequest,
    AccountDetail: AccountDetail,
    CreateBasicDBInstancesRequest: CreateBasicDBInstancesRequest,
    ModifyDBNameResponse: ModifyDBNameResponse,
    DescribePublishSubscribeResponse: DescribePublishSubscribeResponse,
    ModifyDBNameRequest: ModifyDBNameRequest,
    ModifyDBInstanceRenewFlagRequest: ModifyDBInstanceRenewFlagRequest,
    Backup: Backup,
    AccountRemark: AccountRemark,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    AccountPrivilegeModifyInfo: AccountPrivilegeModifyInfo,
    MigrateTarget: MigrateTarget,
    AccountCreateInfo: AccountCreateInfo,
    RenewDBInstanceResponse: RenewDBInstanceResponse,
    DBPrivilege: DBPrivilege,
    DescribeOrdersRequest: DescribeOrdersRequest,
    DescribeReadOnlyGroupDetailsResponse: DescribeReadOnlyGroupDetailsResponse,
    DeleteAccountRequest: DeleteAccountRequest,
    DescribeReadOnlyGroupByReadOnlyInstanceRequest: DescribeReadOnlyGroupByReadOnlyInstanceRequest,
    DescribeMaintenanceSpanRequest: DescribeMaintenanceSpanRequest,
    PublishSubscribe: PublishSubscribe,
    DescribeBackupByFlowIdRequest: DescribeBackupByFlowIdRequest,
    CreateBackupRequest: CreateBackupRequest,
    DescribePublishSubscribeRequest: DescribePublishSubscribeRequest,
    ModifyAccountRemarkRequest: ModifyAccountRemarkRequest,
    ModifyPublishSubscribeNameRequest: ModifyPublishSubscribeNameRequest,
    DeletePublishSubscribeResponse: DeletePublishSubscribeResponse,
    InquiryPriceUpgradeDBInstanceResponse: InquiryPriceUpgradeDBInstanceResponse,
    DescribeMigrationDetailResponse: DescribeMigrationDetailResponse,
    ModifyMigrationRequest: ModifyMigrationRequest,
    DeleteDBInstanceRequest: DeleteDBInstanceRequest,
    CreateAccountResponse: CreateAccountResponse,
    RenewPostpaidDBInstanceResponse: RenewPostpaidDBInstanceResponse,
    DescribeMigrationDatabasesRequest: DescribeMigrationDatabasesRequest,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    CreateAccountRequest: CreateAccountRequest,
    DeleteDBResponse: DeleteDBResponse,
    CreateDBResponse: CreateDBResponse,
    RestartDBInstanceResponse: RestartDBInstanceResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    DescribeSlowlogsResponse: DescribeSlowlogsResponse,
    DBDetail: DBDetail,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    ModifyReadOnlyGroupDetailsRequest: ModifyReadOnlyGroupDetailsRequest,
    RollbackInstanceRequest: RollbackInstanceRequest,
    DescribeSlowlogsRequest: DescribeSlowlogsRequest,
    ModifyDBInstanceProjectRequest: ModifyDBInstanceProjectRequest,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    ModifyBackupNameRequest: ModifyBackupNameRequest,
    StopMigrationResponse: StopMigrationResponse,
    CreatePublishSubscribeResponse: CreatePublishSubscribeResponse,
    DescribeAccountsResponse: DescribeAccountsResponse,
    DeleteDBInstanceResponse: DeleteDBInstanceResponse,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    DescribeRollbackTimeRequest: DescribeRollbackTimeRequest,
    ModifyDBRemarkResponse: ModifyDBRemarkResponse,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    CreateDBInstancesResponse: CreateDBInstancesResponse,
    DeleteAccountResponse: DeleteAccountResponse,

}
