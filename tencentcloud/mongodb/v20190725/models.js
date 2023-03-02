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
         * 每个副本集内节点个数，具体参照查询云数据库的售卖规格返回参数
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
         * 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本，MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * 实例数量, 最小值1，最大值为10
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 实例所属区域名称，格式如：ap-guangzhou-2。注：此参数填写的是主可用区，如果选择多可用区部署，Zone必须是AvailabilityZoneList中的一个
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 机器类型，HIO：高IO型；HIO10G：高IO万兆型；STDS5：标准型
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * 实例类型，REPLSET-副本集，SHARD-分片集群，STANDALONE-单节点
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数；若为单节点实例，该参数设置为0
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
         * 实例密码，不设置该参数则默认密码规则为 实例ID+"@"+主账户uin。举例实例id为cmgo-higv73ed，uin为100000001，则默认密码为"cmgo-higv73ed@100000001"。 自定义密码格式为8-32个字符长度，至少包含字母、数字和字符（!@#%^*()_）中的两种
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

        /**
         * 是否自动选择代金券，可选值为：1 - 是；0 - 否； 默认为0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 1:正式实例,2:临时实例,3:只读实例,4:灾备实例,5:克隆实例
         * @type {number || null}
         */
        this.Clone = null;

        /**
         * 若是只读，灾备实例或克隆实例，Father必须填写，即主实例ID
         * @type {string || null}
         */
        this.Father = null;

        /**
         * 安全组
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * 克隆实例回档时间。若是克隆实例，则必须填写，格式：2021-08-13 16:30:00。注：只能回档7天内的时间点
         * @type {string || null}
         */
        this.RestoreTime = null;

        /**
         * 实例名称。注：名称只支持长度为60个字符的中文、英文、数字、下划线_、分隔符-
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 多可用区部署的节点列表，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。注：1、多可用区部署节点只能部署在3个不同可用区；2、为了保障跨可用区切换，不支持将集群的大多数节点部署在同一个可用区（如3节点集群不支持2个节点部署在同一个区）；3、不支持4.2及以上版本；4、不支持只读灾备实例；5、不能选择基础网络
         * @type {Array.<string> || null}
         */
        this.AvailabilityZoneList = null;

        /**
         * mongos cpu数量，购买MongoDB 4.2 WiredTiger存储引擎版本的分片集群时必须填写，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果
         * @type {number || null}
         */
        this.MongosCpu = null;

        /**
         * mongos 内存大小，购买MongoDB 4.2 WiredTiger存储引擎版本的分片集群时必须填写，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * mongos 数量，购买MongoDB 4.2 WiredTiger存储引擎版本的分片集群时必须填写，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。注：为了保障高可用，最低需要购买3个mongos，上限为32个
         * @type {number || null}
         */
        this.MongosNodeNum = null;

        /**
         * 只读节点数量，最大不超过7个
         * @type {number || null}
         */
        this.ReadonlyNodeNum = null;

        /**
         * 只读节点部署可用区
         * @type {Array.<string> || null}
         */
        this.ReadonlyNodeAvailabilityZoneList = null;

        /**
         * Hidden节点所在的可用区，跨可用区实例必传
         * @type {string || null}
         */
        this.HiddenZone = null;

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
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.Clone = 'Clone' in params ? params.Clone : null;
        this.Father = 'Father' in params ? params.Father : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.RestoreTime = 'RestoreTime' in params ? params.RestoreTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AvailabilityZoneList = 'AvailabilityZoneList' in params ? params.AvailabilityZoneList : null;
        this.MongosCpu = 'MongosCpu' in params ? params.MongosCpu : null;
        this.MongosMemory = 'MongosMemory' in params ? params.MongosMemory : null;
        this.MongosNodeNum = 'MongosNodeNum' in params ? params.MongosNodeNum : null;
        this.ReadonlyNodeNum = 'ReadonlyNodeNum' in params ? params.ReadonlyNodeNum : null;
        this.ReadonlyNodeAvailabilityZoneList = 'ReadonlyNodeAvailabilityZoneList' in params ? params.ReadonlyNodeAvailabilityZoneList : null;
        this.HiddenZone = 'HiddenZone' in params ? params.HiddenZone : null;

    }
}

/**
 * DescribeCurrentOp返回参数结构体
 * @class
 */
class DescribeCurrentOpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的操作总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 当前操作列表
         * @type {Array.<CurrentOp> || null}
         */
        this.CurrentOps = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.CurrentOps) {
            this.CurrentOps = new Array();
            for (let z in params.CurrentOps) {
                let obj = new CurrentOp();
                obj.deserialize(params.CurrentOps[z]);
                this.CurrentOps.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountUsers请求参数结构体
 * @class
 */
class DescribeAccountUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
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
 * CreateBackupDBInstance返回参数结构体
 * @class
 */
class CreateBackupDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询备份流程的状态
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
 * 数据库实例价格
 * @class
 */
class DBInstancePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * 原价
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 折扣加
         * @type {number || null}
         */
        this.DiscountPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * KillOps请求参数结构体
 * @class
 */
class KillOpsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 待终止的操作
         * @type {Array.<Operation> || null}
         */
        this.Operations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Operations) {
            this.Operations = new Array();
            for (let z in params.Operations) {
                let obj = new Operation();
                obj.deserialize(params.Operations[z]);
                this.Operations.push(obj);
            }
        }

    }
}

/**
 * InquirePriceRenewDBInstances请求参数结构体
 * @class
 */
class InquirePriceRenewDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同，接口单次最多只支持5个实例进行操作。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 预付费模式（即包年包月）相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * DescribeSlowLogs请求参数结构体
 * @class
 */
class DescribeSlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。
         * @type {number || null}
         */
        this.SlowMS = null;

        /**
         * 偏移量，最小值为0，最大值为10000，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，最小值为1，最大值为100，默认值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 慢日志返回格式，可设置为json，不传默认返回原生慢日志格式。
         * @type {string || null}
         */
        this.Format = null;

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
        this.SlowMS = 'SlowMS' in params ? params.SlowMS : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * FlushInstanceRouterConfig返回参数结构体
 * @class
 */
class FlushInstanceRouterConfigResponse extends  AbstractModel {
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
 * DescribeSecurityGroup请求参数结构体
 * @class
 */
class DescribeSecurityGroupRequest extends  AbstractModel {
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
 * 用于描述MongoDB数据库慢日志统计信息
 * @class
 */
class SlowLogPattern extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢日志模式
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * 最大执行时间
         * @type {number || null}
         */
        this.MaxTime = null;

        /**
         * 平均执行时间
         * @type {number || null}
         */
        this.AverageTime = null;

        /**
         * 该模式慢日志条数
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.MaxTime = 'MaxTime' in params ? params.MaxTime : null;
        this.AverageTime = 'AverageTime' in params ? params.AverageTime : null;
        this.Total = 'Total' in params ? params.Total : null;

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
 * DescribeDBInstanceDeal返回参数结构体
 * @class
 */
class DescribeDBInstanceDealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单状态，1：未支付，2：已支付，3：发货中，4：发货成功，5：发货失败，6：退款，7：订单关闭，8：超时未支付关闭。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 订单原价。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 订单折扣价格。
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * 订单行为，purchase：新购，renew：续费，upgrade：升配，downgrade：降配，refund：退货退款。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 实例可修改参数Multi类型集合。
 * @class
 */
class InstanceMultiParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 指导值范围
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * 是否需要重启生效 1:需要重启后生效；0：无需重启，设置成功即可生效；
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 是否为运行中参数值 1:运行中参数值；0：非运行中参数值；
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 参数说明
         * @type {Array.<string> || null}
         */
        this.Tips = null;

        /**
         * 当前值的类型描述，默认为multi
         * @type {string || null}
         */
        this.ValueType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;

    }
}

/**
 * DescribeBackupDownloadTask返回参数结构体
 * @class
 */
class DescribeBackupDownloadTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足查询条件的所有条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 下载任务列表
         * @type {Array.<BackupDownloadTask> || null}
         */
        this.Tasks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new BackupDownloadTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlushInstanceRouterConfig请求参数结构体
 * @class
 */
class FlushInstanceRouterConfigRequest extends  AbstractModel {
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
 * SetAccountUserPrivilege返回参数结构体
 * @class
 */
class SetAccountUserPrivilegeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置任务ID,用于查询是否设置完成
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
 * ModifyDBInstanceNetworkAddress请求参数结构体
 * @class
 */
class ModifyDBInstanceNetworkAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 原IP保留时长，单位为分钟；原IP会在约定时间后释放，在释放前原IP和新IP均可访问；0表示立即回收原IP
         * @type {number || null}
         */
        this.OldIpExpiredTime = null;

        /**
         * 切换后IP地址的归属私有网络统一ID，若为基础网络，该字段为空
         * @type {string || null}
         */
        this.NewUniqVpcId = null;

        /**
         * 切换后IP地址的归属子网统一ID，若为基础网络，该字段为空
         * @type {string || null}
         */
        this.NewUniqSubnetId = null;

        /**
         * 待修改IP信息
         * @type {Array.<ModifyNetworkAddress> || null}
         */
        this.NetworkAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldIpExpiredTime = 'OldIpExpiredTime' in params ? params.OldIpExpiredTime : null;
        this.NewUniqVpcId = 'NewUniqVpcId' in params ? params.NewUniqVpcId : null;
        this.NewUniqSubnetId = 'NewUniqSubnetId' in params ? params.NewUniqSubnetId : null;

        if (params.NetworkAddresses) {
            this.NetworkAddresses = new Array();
            for (let z in params.NetworkAddresses) {
                let obj = new ModifyNetworkAddress();
                obj.deserialize(params.NetworkAddresses[z]);
                this.NetworkAddresses.push(obj);
            }
        }

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
         * 订单ID。
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 创建的实例ID列表。
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
 * DescribeDBInstanceNodeProperty请求参数结构体
 * @class
 */
class DescribeDBInstanceNodePropertyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点ID。
         * @type {Array.<string> || null}
         */
        this.NodeIds = null;

        /**
         * 节点角色。可选值包括：
<ul><li>PRIMARY：主节点。</li><li>SECONDARY：从节点。</li><li>READONLY：只读节点。</li><li>ARBITER：仲裁节点。</li></ul>
         * @type {Array.<string> || null}
         */
        this.Roles = null;

        /**
         * 该参数指定节点是否为Hidden节点，默认为false。
         * @type {boolean || null}
         */
        this.OnlyHidden = null;

        /**
         * 该参数指定选举新主节点的优先级。其取值范围为[0,100]，数值越高，优先级越高。
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 该参数指定节点投票权。
<ul><li>1：具有投票权。</li><li>0：无投票权。</li></ul>
         * @type {number || null}
         */
        this.Votes = null;

        /**
         * 节点标签。
         * @type {Array.<NodeTag> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeIds = 'NodeIds' in params ? params.NodeIds : null;
        this.Roles = 'Roles' in params ? params.Roles : null;
        this.OnlyHidden = 'OnlyHidden' in params ? params.OnlyHidden : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Votes = 'Votes' in params ? params.Votes : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new NodeTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 需要终止的操作
 * @class
 */
class Operation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作所在的分片名
         * @type {string || null}
         */
        this.ReplicaSetName = null;

        /**
         * 操作所在的节点名
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 操作序号
         * @type {number || null}
         */
        this.OpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicaSetName = 'ReplicaSetName' in params ? params.ReplicaSetName : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.OpId = 'OpId' in params ? params.OpId : null;

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
         * 计算资源规格，单位为CPU核心数
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

/**
 * ModifyDBInstanceNetworkAddress返回参数结构体
 * @class
 */
class ModifyDBInstanceNetworkAddressResponse extends  AbstractModel {
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
 * CreateAccountUser返回参数结构体
 * @class
 */
class CreateAccountUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建任务ID。
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
 * DescribeSlowLogPatterns返回参数结构体
 * @class
 */
class DescribeSlowLogPatternsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢日志统计信息总数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 慢日志统计信息
         * @type {Array.<SlowLogPattern> || null}
         */
        this.SlowLogPatterns = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SlowLogPatterns) {
            this.SlowLogPatterns = new Array();
            for (let z in params.SlowLogPatterns) {
                let obj = new SlowLogPattern();
                obj.deserialize(params.SlowLogPatterns[z]);
                this.SlowLogPatterns.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建备份下载任务结果
 * @class
 */
class BackupDownloadTaskStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片名
         * @type {string || null}
         */
        this.ReplicaSetId = null;

        /**
         * 任务当前状态。0-等待执行，1-正在下载，2-下载完成，3-下载失败，4-等待重试
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
        this.ReplicaSetId = 'ReplicaSetId' in params ? params.ReplicaSetId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeSlowLogs返回参数结构体
 * @class
 */
class DescribeSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢日志总数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 慢日志详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SlowLogs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SlowLogs = 'SlowLogs' in params ? params.SlowLogs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePriceModifyDBInstanceSpec请求参数结构体
 * @class
 */
class InquirePriceModifyDBInstanceSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 变更配置后实例内存大小，单位：GB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 变更配置后实例磁盘大小，单位：GB。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 实例变更后的节点数，取值范围具体参照查询云数据库的售卖规格返回参数。默认为不变更节点数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例变更后的分片数，取值范围具体参照查询云数据库的售卖规格返回参数。只能增加不能减少，默认为不变更分片数
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

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
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;

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
         * 实例状态，取值范围：0-待初始化，1-流程执行中，2-实例有效，-2-已隔离（包年包月实例），-3-已隔离（按量计费实例）
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
         * 搜索关键词，支持实例ID、实例名称、完整IP
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Tag信息
         * @type {TagInfo || null}
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

        if (params.Tags) {
            let obj = new TagInfo();
            obj.deserialize(params.Tags)
            this.Tags = obj;
        }

    }
}

/**
 * 云数据库实例当前操作
 * @class
 */
class CurrentOp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OpId = null;

        /**
         * 操作所在的命名空间，形式如db.collection
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ns = null;

        /**
         * 操作执行语句
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 操作类型，可能的取值：aggregate、count、delete、distinct、find、findAndModify、getMore、insert、mapReduce、update和command
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Op = null;

        /**
         * 操作所在的分片名称
         * @type {string || null}
         */
        this.ReplicaSetName = null;

        /**
         * 筛选条件，节点状态，可能的取值为：Primary、Secondary
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 操作详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 操作所在的节点名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 操作已执行时间（ms）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MicrosecsRunning = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpId = 'OpId' in params ? params.OpId : null;
        this.Ns = 'Ns' in params ? params.Ns : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Op = 'Op' in params ? params.Op : null;
        this.ReplicaSetName = 'ReplicaSetName' in params ? params.ReplicaSetName : null;
        this.State = 'State' in params ? params.State : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.MicrosecsRunning = 'MicrosecsRunning' in params ? params.MicrosecsRunning : null;

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

        /**
         * 实例变更后的节点数，取值范围具体参照查询云数据库的售卖规格返回参数。默认为不变更节点数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例变更后的分片数，取值范围具体参照查询云数据库的售卖规格返回参数。只能增加不能减少，默认为不变更分片数
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * 实例配置变更的切换时间，参数为：0(默认)、1。0-调整完成时，1-维护时间内。注：调整节点数和分片数不支持在【维护时间内】变更。
         * @type {number || null}
         */
        this.InMaintenance = null;

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
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.InMaintenance = 'InMaintenance' in params ? params.InMaintenance : null;

    }
}

/**
 * 用户权限
 * @class
 */
class Auth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前账号具有的权限信息。<ul><li>0：无权限。</li><li>1：只读。</li><li>2：只写。</li><li>3：读写。</li></ul>
         * @type {number || null}
         */
        this.Mask = null;

        /**
         * 指具有当前账号权限的数据库名。
<ul><li>* ：表示所有数据库。</li><li>db.name：表示特定name的数据库。</li></ul>
         * @type {string || null}
         */
        this.NameSpace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mask = 'Mask' in params ? params.Mask : null;
        this.NameSpace = 'NameSpace' in params ? params.NameSpace : null;

    }
}

/**
 * ResetDBInstancePassword请求参数结构体
 * @class
 */
class ResetDBInstancePasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例账号名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 新密码，新密码长度不能少于8位
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
 * 实例可修改参数integer类型集合。
 * @class
 */
class InstanceIntegerParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 最大值
         * @type {string || null}
         */
        this.Max = null;

        /**
         * 最小值
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 是否需要重启生效 1:需要重启后生效；0：无需重启，设置成功即可生效；
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 参数说明
         * @type {Array.<string> || null}
         */
        this.Tips = null;

        /**
         * 参数类型
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * 是否为运行中参数值 1:运行中参数值；0：非运行中参数值；
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 冗余字段，可忽略
         * @type {string || null}
         */
        this.Unit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * 修改数据库地址
 * @class
 */
class ModifyNetworkAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新IP地址。
         * @type {string || null}
         */
        this.NewIPAddress = null;

        /**
         * 原IP地址。
         * @type {string || null}
         */
        this.OldIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NewIPAddress = 'NewIPAddress' in params ? params.NewIPAddress : null;
        this.OldIpAddress = 'OldIpAddress' in params ? params.OldIpAddress : null;

    }
}

/**
 * DescribeAsyncRequestInfo返回参数结构体
 * @class
 */
class DescribeAsyncRequestInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态。返回参数有：initial-初始化、running-运行中、paused-任务执行失败，已暂停、undoed-任务执行失败，已回滚、failed-任务执行失败, 已终止、success-成功
         * @type {string || null}
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
 * CreateAccountUser请求参数结构体
 * @class
 */
class CreateAccountUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 新账号名称。其格式要求如下：<ul><li>字符范围[1,32]。</li><li>可输入[A,Z]、[a,z]、[1,9]范围的字符以及下划线“_”与短划线“-”。</li></ul>
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 新账号密码。密码复杂度要求如下：<ul><li>字符长度范围[8,32]。</li><li>至少包含字母、数字和特殊字符（叹号“!”、at"@"、井号“#”、百分号“%”、插入符“^”、星号“*”、小括号“()”、下划线“_”）中的两种。</li></ul>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * mongouser 账号对应的密码。mongouser 为系统默认账号，即为创建实例时，设置的密码。
         * @type {string || null}
         */
        this.MongoUserPassword = null;

        /**
         * 账号备注信息。
         * @type {string || null}
         */
        this.UserDesc = null;

        /**
         * 账号的读写权限信息。
         * @type {Array.<Auth> || null}
         */
        this.AuthRole = null;

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
        this.MongoUserPassword = 'MongoUserPassword' in params ? params.MongoUserPassword : null;
        this.UserDesc = 'UserDesc' in params ? params.UserDesc : null;

        if (params.AuthRole) {
            this.AuthRole = new Array();
            for (let z in params.AuthRole) {
                let obj = new Auth();
                obj.deserialize(params.AuthRole[z]);
                this.AuthRole.push(obj);
            }
        }

    }
}

/**
 * 实例可修改参数text类型集合。
 * @class
 */
class InstanceTextParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 是否需要重启
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * text类型值
         * @type {string || null}
         */
        this.TextValue = null;

        /**
         * 参数说明
         * @type {Array.<string> || null}
         */
        this.Tips = null;

        /**
         * 值类型说明
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * 是否为运行中参数值 1:运行中参数值；0：非运行中参数值；
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
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.TextValue = 'TextValue' in params ? params.TextValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroup请求参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 目标安全组id
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeAccountUsers返回参数结构体
 * @class
 */
class DescribeAccountUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例账号列表。
         * @type {Array.<UserInfo> || null}
         */
        this.Users = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new UserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupDownloadTask请求参数结构体
 * @class
 */
class DescribeBackupDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份文件名，用来过滤指定文件的下载任务
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * 指定查询时间范围内的任务，StartTime指定开始时间，不填默认不限制开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 指定查询时间范围内的任务，EndTime指定截止时间，不填默认不限制截止时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 此次查询返回的条数，取值范围为1-100，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定此次查询返回的页数，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序字段，取值为createTime，finishTime两种，默认为createTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式，取值为asc，desc两种，默认desc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 根据任务状态过滤。0-等待执行，1-正在下载，2-下载完成，3-下载失败，4-等待重试。不填默认返回所有类型
         * @type {Array.<number> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * 客户端连接信息，包括客户端IP和对应IP的连接数量。
         * @type {Array.<ClientConnection> || null}
         */
        this.Clients = null;

        /**
         * 满足条件的记录总条数，可用于分页查询。
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

        if (params.Clients) {
            this.Clients = new Array();
            for (let z in params.Clients) {
                let obj = new ClientConnection();
                obj.deserialize(params.Clients[z]);
                this.Clients.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateDBInstances请求参数结构体
 * @class
 */
class TerminateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定预隔离实例ID。格式如：cmgo-p8vnipr5。
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
 * ModifyDBInstanceSecurityGroup返回参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupResponse extends  AbstractModel {
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
 * 账户基本信息
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 账号权限详情。
         * @type {Array.<Auth> || null}
         */
        this.AuthRole = null;

        /**
         * 账号创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 账号更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 备注信息。
         * @type {string || null}
         */
        this.UserDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;

        if (params.AuthRole) {
            this.AuthRole = new Array();
            for (let z in params.AuthRole) {
                let obj = new Auth();
                obj.deserialize(params.AuthRole[z]);
                this.AuthRole.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.UserDesc = 'UserDesc' in params ? params.UserDesc : null;

    }
}

/**
 * DescribeInstanceParams请求参数结构体
 * @class
 */
class DescribeInstanceParamsRequest extends  AbstractModel {
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
 * 节点Tag
 * @class
 */
class NodeTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点Tag key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 节点Tag Value
注意：此字段可能返回 null，表示取不到有效值。
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
 * InquirePriceCreateDBInstances返回参数结构体
 * @class
 */
class InquirePriceCreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 价格
         * @type {DBInstancePrice || null}
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

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityGroup返回参数结构体
 * @class
 */
class DescribeSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例绑定的安全组
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组信息
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所属项目id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 入站规则
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Inbound = null;

        /**
         * 出站规则
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Outbound = null;

        /**
         * 安全组id
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

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

    }
}

/**
 * 分片信息
 * @class
 */
class ReplicaSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 副本集ID
         * @type {string || null}
         */
        this.ReplicaSetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicaSetId = 'ReplicaSetId' in params ? params.ReplicaSetId : null;

    }
}

/**
 * ResetDBInstancePassword返回参数结构体
 * @class
 */
class ResetDBInstancePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步请求Id，用户查询该流程的运行状态
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

        /**
         * 是否为内部ip
         * @type {boolean || null}
         */
        this.InternalService = null;

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
        this.InternalService = 'InternalService' in params ? params.InternalService : null;

    }
}

/**
 * 副本集信息
 * @class
 */
class ReplicateSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeProperty> || null}
         */
        this.Nodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new NodeProperty();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }

    }
}

/**
 * DescribeDBInstanceDeal请求参数结构体
 * @class
 */
class DescribeDBInstanceDealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单ID，通过CreateDBInstance等接口返回
         * @type {string || null}
         */
        this.DealId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;

    }
}

/**
 * DescribeAsyncRequestInfo请求参数结构体
 * @class
 */
class DescribeAsyncRequestInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步请求Id，涉及到异步流程的接口返回，如CreateBackupDBInstance
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * CreateBackupDownloadTask请求参数结构体
 * @class
 */
class CreateBackupDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要下载的备份文件名，可通过DescribeDBBackups接口获取。
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * 指定要下载的副本集的节点名称 或 分片集群的分片名称列表。
如副本集cmgo-p8vnipr5，示例(固定取值)：BackupSets.0=cmgo-p8vnipr5_0，可下载全量数据。
如分片集群cmgo-p8vnipr5，示例：BackupSets.0=cmgo-p8vnipr5_0&BackupSets.1=cmgo-p8vnipr5_1，即下载分片0和分片1的数据，分片集群如需全量下载，请按示例方式传入全部分片名称。
         * @type {Array.<ReplicaSetInfo> || null}
         */
        this.BackupSets = null;

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

        if (params.BackupSets) {
            this.BackupSets = new Array();
            for (let z in params.BackupSets) {
                let obj = new ReplicaSetInfo();
                obj.deserialize(params.BackupSets[z]);
                this.BackupSets.push(obj);
            }
        }

    }
}

/**
 * InquirePriceModifyDBInstanceSpec返回参数结构体
 * @class
 */
class InquirePriceModifyDBInstanceSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 价格。
         * @type {DBInstancePrice || null}
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

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组规则
 * @class
 */
class SecurityGroupBound extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行规则。ACCEPT或DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * ip段。
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 端口范围
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 传输层协议。tcp，udp或ALL
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 安全组id代表的地址集合
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 地址组id代表的地址集合
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * 服务组id代表的协议和端口集合
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeDBInstanceNodeProperty返回参数结构体
 * @class
 */
class DescribeDBInstanceNodePropertyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mongos节点属性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeProperty> || null}
         */
        this.Mongos = null;

        /**
         * 副本集节点信息。
         * @type {Array.<ReplicateSetInfo> || null}
         */
        this.ReplicateSets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Mongos) {
            this.Mongos = new Array();
            for (let z in params.Mongos) {
                let obj = new NodeProperty();
                obj.deserialize(params.Mongos[z]);
                this.Mongos.push(obj);
            }
        }

        if (params.ReplicateSets) {
            this.ReplicateSets = new Array();
            for (let z in params.ReplicateSets) {
                let obj = new ReplicateSetInfo();
                obj.deserialize(params.ReplicateSets[z]);
                this.ReplicateSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCurrentOp请求参数结构体
 * @class
 */
class DescribeCurrentOpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 筛选条件，操作所属的命名空间namespace，格式为db.collection
         * @type {string || null}
         */
        this.Ns = null;

        /**
         * 筛选条件，操作已经执行的时间（单位：毫秒），结果将返回超过设置时间的操作，默认值为0，取值范围为[0, 3600000]
         * @type {number || null}
         */
        this.MillisecondRunning = null;

        /**
         * 筛选条件，操作类型，可能的取值：none，update，insert，query，command，getmore，remove和killcursors
         * @type {string || null}
         */
        this.Op = null;

        /**
         * 筛选条件，分片名称
         * @type {string || null}
         */
        this.ReplicaSetName = null;

        /**
         * 筛选条件，节点状态，可能的取值为：primary
secondary
         * @type {string || null}
         */
        this.State = null;

        /**
         * 单次请求返回的数量，默认值为100，取值范围为[0,100]
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认值为0，取值范围为[0,10000]
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回结果集排序的字段，目前支持："MicrosecsRunning"/"microsecsrunning"，默认为升序排序
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回结果集排序方式，可能的取值："ASC"/"asc"或"DESC"/"desc"
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ns = 'Ns' in params ? params.Ns : null;
        this.MillisecondRunning = 'MillisecondRunning' in params ? params.MillisecondRunning : null;
        this.Op = 'Op' in params ? params.Op : null;
        this.ReplicaSetName = 'ReplicaSetName' in params ? params.ReplicaSetName : null;
        this.State = 'State' in params ? params.State : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * 备份下载任务
 * @class
 */
class BackupDownloadTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 备份文件名
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * 分片名称
         * @type {string || null}
         */
        this.ReplicaSetId = null;

        /**
         * 备份数据大小，单位为字节
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * 任务状态。0-等待执行，1-正在下载，2-下载完成，3-下载失败，4-等待重试
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务进度百分比
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 耗时，单位为秒
         * @type {number || null}
         */
        this.TimeSpend = null;

        /**
         * 备份数据下载链接
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 备份文件备份类型，0-逻辑备份，1-物理备份
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * 发起备份时指定的备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BackupDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.ReplicaSetId = 'ReplicaSetId' in params ? params.ReplicaSetId : null;
        this.BackupSize = 'BackupSize' in params ? params.BackupSize : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.TimeSpend = 'TimeSpend' in params ? params.TimeSpend : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupDesc = 'BackupDesc' in params ? params.BackupDesc : null;

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

        /**
         * 备份方式，当前支持：0-逻辑备份，1-物理备份，2-所有备份。默认为逻辑备份。
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * 分页大小，最大值为100，不设置默认查询所有。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，最小值为0，默认值为0。
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
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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

        /**
         * 单次请求返回的数量，最小值为1，最大值为1000，默认值为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认值为0。
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
 * TerminateDBInstances返回参数结构体
 * @class
 */
class TerminateDBInstancesResponse extends  AbstractModel {
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
         * 自定义实例名称，名称只支持长度为60个字符的中文、英文、数字、下划线_、分隔符 -
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
 * RenewDBInstances返回参数结构体
 * @class
 */
class RenewDBInstancesResponse extends  AbstractModel {
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
 * 实例可修改参数枚举类型集合。
 * @class
 */
class InstanceEnumParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数当前值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 枚举值，所有支持的值
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * 是否需要重启生效 1:需要重启后生效；0：无需重启，设置成功即可生效；
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 中英文说明
         * @type {Array.<string> || null}
         */
        this.Tips = null;

        /**
         * 参数值类型说明
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * 是否为运行中参数值 1:运行中参数值；0：非运行中参数值；
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
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * CreateBackupDBInstance请求参数结构体
 * @class
 */
class CreateBackupDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 0-逻辑备份，1-物理备份
         * @type {number || null}
         */
        this.BackupMethod = null;

        /**
         * 备份备注
         * @type {string || null}
         */
        this.BackupRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupRemark = 'BackupRemark' in params ? params.BackupRemark : null;

    }
}

/**
 * SetAccountUserPrivilege请求参数结构体
 * @class
 */
class SetAccountUserPrivilegeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 账号名称。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 权限信息。
         * @type {Array.<Auth> || null}
         */
        this.AuthRole = null;

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

        if (params.AuthRole) {
            this.AuthRole = new Array();
            for (let z in params.AuthRole) {
                let obj = new Auth();
                obj.deserialize(params.AuthRole[z]);
                this.AuthRole.push(obj);
            }
        }

    }
}

/**
 * 节点属性
 * @class
 */
class NodeProperty extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点所在的可用区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 节点名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 节点访问地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 角色。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 是否为Hidden节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Hidden = null;

        /**
         * 节点状态，包括：ORMAL/STARTUP/RECOVERING/STARTUP2/UNKNOWN/DOWN/ROLLBACK/REMOVED等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 主从延迟，单位秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SlaveDelay = null;

        /**
         * 节点优先级。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 节点投票权。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Votes = null;

        /**
         * 节点标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeTag> || null}
         */
        this.Tags = null;

        /**
         * 副本集Id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReplicateSetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Hidden = 'Hidden' in params ? params.Hidden : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SlaveDelay = 'SlaveDelay' in params ? params.SlaveDelay : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Votes = 'Votes' in params ? params.Votes : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new NodeTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ReplicateSetId = 'ReplicateSetId' in params ? params.ReplicateSetId : null;

    }
}

/**
 * KillOps返回参数结构体
 * @class
 */
class KillOpsResponse extends  AbstractModel {
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
 * CreateDBInstanceHour请求参数结构体
 * @class
 */
class CreateDBInstanceHourRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例内存大小，单位：GB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 指副本集数量。
- 创建副本集实例，该参数只能为1。
- 创建分片实例，指分片的数量。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * 指每个副本集内节点个数。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 指版本信息。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * 机器类型。
- HIO：高IO型。
- HIO10G：高IO万兆。
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * 实例数量，最小值1，最大值为10。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 可用区信息，输入格式如：ap-guangzhou-2。
- 具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- 该参数为主可用区，如果多可用区部署，Zone必须是AvailabilityZoneList中的一个。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例架构类型。
- REPLSET：副本集。
- SHARD：分片集群。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 私有网络ID，如果不设置该参数，则默认选择基础网络。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网 ID，如果配置参数 VpcId，则 SubnetId必须配置。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例密码。
- 不设置该参数，则默认密码格式为：实例ID+@+主账户uin。例如：实例 ID 为cmgo-higv73ed，UIN 为100000001，则默认密码为：cmgo-higv73ed@100000001。 
- 自定义密码长度为8-32个字符，至少包含字母、数字和字符（!@#%^*()_）中的两种。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 项目ID。若不设置该参数，则为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例标签信息。
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 实例类型。
- 1：正式实例。
- 3：只读实例。
- 4：灾备实例。
         * @type {number || null}
         */
        this.Clone = null;

        /**
         * 父实例 ID。当参数**Clone**为3或者4时，即实例为只读或灾备实例时，该参数必须配置。
         * @type {string || null}
         */
        this.Father = null;

        /**
         * 安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * 克隆实例回档时间。
- 若为克隆实例，则必须配置该参数。输入格式示例：2021-08-13 16:30:00。
- 回档时间范围：仅能回档7天内时间点的数据。
         * @type {string || null}
         */
        this.RestoreTime = null;

        /**
         * 实例名称。仅支持长度为60个字符的中文、英文、数字、下划线_、分隔符- 。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 多可用区部署的节点列表。具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)获取。
- 多可用区部署节点只能部署在3个不同可用区。不支持将集群的大多数节点部署在同一个可用区。例如：3节点集群不支持2个节点部署在同一个区。
- 不支持4.2及以上版本。
- 不支持只读灾备实例。
- 不能选择基础网络。
         * @type {Array.<string> || null}
         */
        this.AvailabilityZoneList = null;

        /**
         * Mongos CPU 核数。
- 购买MongoDB 3.6 WiredTiger存储引擎版本以上的分片集群时，可选择性配置该参数。
- 若不配置该参数，则根据Mongod节点规格默认适配 Mongos 规格，默认规格免费。
         * @type {number || null}
         */
        this.MongosCpu = null;

        /**
         * Mongos 内存大小。
- 购买MongoDB 3.6 WiredTiger存储引擎版本以上的分片集群时，可选择性配置该参数。
- 若不配置该参数，则根据Mongod节点规格默认适配 Mongos 规格，默认规格免费。
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * Mongos 数量。
- 购买MongoDB 3.6 WiredTiger存储引擎版本以上的分片集群时，可选择性配置该参数。
- 若不配置该参数，则根据Mongod节点规格默认适配 Mongos 规格，默认规格免费。
         * @type {number || null}
         */
        this.MongosNodeNum = null;

        /**
         * 只读节点数量，最大不超过7个。
         * @type {number || null}
         */
        this.ReadonlyNodeNum = null;

        /**
         * 指只读节点所属可用区。跨可用区部署实例，参数**ReadonlyNodeNum**不为**0**时，必须配置该参数。
         * @type {Array.<string> || null}
         */
        this.ReadonlyNodeAvailabilityZoneList = null;

        /**
         * Hidden节点所属可用区。跨可用区部署实例，必须配置该参数。
         * @type {string || null}
         */
        this.HiddenZone = null;

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
        this.Clone = 'Clone' in params ? params.Clone : null;
        this.Father = 'Father' in params ? params.Father : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.RestoreTime = 'RestoreTime' in params ? params.RestoreTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AvailabilityZoneList = 'AvailabilityZoneList' in params ? params.AvailabilityZoneList : null;
        this.MongosCpu = 'MongosCpu' in params ? params.MongosCpu : null;
        this.MongosMemory = 'MongosMemory' in params ? params.MongosMemory : null;
        this.MongosNodeNum = 'MongosNodeNum' in params ? params.MongosNodeNum : null;
        this.ReadonlyNodeNum = 'ReadonlyNodeNum' in params ? params.ReadonlyNodeNum : null;
        this.ReadonlyNodeAvailabilityZoneList = 'ReadonlyNodeAvailabilityZoneList' in params ? params.ReadonlyNodeAvailabilityZoneList : null;
        this.HiddenZone = 'HiddenZone' in params ? params.HiddenZone : null;

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
         * 项目ID，用户已创建项目的唯一ID,非自定义
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
 * CreateBackupDownloadTask返回参数结构体
 * @class
 */
class CreateBackupDownloadTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载任务状态
         * @type {Array.<BackupDownloadTaskStatus> || null}
         */
        this.Tasks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new BackupDownloadTaskStatus();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 是否支持跨可用区部署 1-支持，0-不支持
         * @type {number || null}
         */
        this.SupportMultiAZ = null;

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
        this.SupportMultiAZ = 'SupportMultiAZ' in params ? params.SupportMultiAZ : null;

    }
}

/**
 * DescribeSlowLogPatterns请求参数结构体
 * @class
 */
class DescribeSlowLogPatternsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。
         * @type {number || null}
         */
        this.SlowMS = null;

        /**
         * 偏移量，最小值为0，最大值为10000，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，最小值为1，最大值为100，默认值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 慢日志返回格式，可设置为json，不传默认返回原生慢日志格式。
         * @type {string || null}
         */
        this.Format = null;

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
        this.SlowMS = 'SlowMS' in params ? params.SlowMS : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Format = 'Format' in params ? params.Format : null;

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
 * InquirePriceRenewDBInstances返回参数结构体
 * @class
 */
class InquirePriceRenewDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 价格
         * @type {DBInstancePrice || null}
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

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
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
 * InquirePriceCreateDBInstances请求参数结构体
 * @class
 */
class InquirePriceCreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属区域及可用区信息。格式：ap-guangzhou-2。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 每个分片的主从节点数量。<br>取值范围：请通过接口<a href="https://cloud.tencent.com/document/product/240/38567">DescribeSpecInfo</a>查询，其返回的数据结构SpecItems中的参数MinNodeNum与MaxNodeNum分别对应其最小值与最大值。</li></ul>
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例内存大小。<ul><li>单位：GB。</li><li>取值范围：请通过接口<a href="https://cloud.tencent.com/document/product/240/38567">DescribeSpecInfo</a>查询，其返回的数据结构SpecItems中的参数CPU与Memory分别对应CPU核数与内存规格。</li></ul>
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例硬盘大小。<ul><li>单位：GB。</li><li>取值范围：请通过接口<a href="https://cloud.tencent.com/document/product/240/38567">DescribeSpecInfo</a>查询，其返回的数据结构SpecItems中的参数MinStorage与MaxStorage分别对应其最小磁盘规格与最大磁盘规格。</br>
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 实例版本信息。<ul><li>具体支持的版本，请通过接口<a href="https://cloud.tencent.com/document/product/240/38567">DescribeSpecInfo</a>查询，其返回的数据结构SpecItems中的参数MongoVersionCode为实例所支持的版本信息。</li><li>版本信息与版本号对应关系如下：<ul><li>MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本。</li><li>MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本。</li><li>MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。</li><li>MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。</li><li>MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。</li><li>MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。</li></ul>
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * 机器类型。<ul><li>HIO：高IO型。</li><li>HIO10G：高IO万兆型。</li></ul>
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * 实例数量，取值范围为[1,10]。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 实例类型。<ul><li>REPLSET：副本集。</li><li>SHARD：分片集群。</li><li>STANDALONE：单节点。</li></ul>
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 副本集个数。<ul><li>创建副本集实例时，该参数固定设置为1。</li><li>创建分片集群时，指分片数量，请通过接口<a href="https://cloud.tencent.com/document/product/240/38567">DescribeSpecInfo</a>查询，其返回的数据结构SpecItems中的参数MinReplicateSetNum与MaxReplicateSetNum分别对应其最小值与最大值。</li><li>若为单节点实例，该参数固定设置为0。</li></ul>
         * @type {number || null}
         */
        this.ReplicateSetNum = null;

        /**
         * 选择包年包月计费模式时，您需要设定购买实例的时长。即<b>InstanceChargeType</b>设定为<b>PREPAID</b>时，该参数必须配置。<ul><li>单位：月。</li><li>可选值包括[1,2,3,4,5,6,7,8,9,10,11,12,24,36]。</li></ul>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 实例付费方式。<ul><li>PREPAID：包年包月计费。</li><li>POSTPAID_BY_HOUR：按量计费。</li></ul>
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 分片实例询价必填参数，指 Mongos CPU核数，取值范围为[1,16]。
         * @type {number || null}
         */
        this.MongosCpu = null;

        /**
         * 分片实例询价必填参数，指 Mongos 内存，取值范围为[2,32]，单位：GB。
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * 分片实例询价必填参数，指 Mongos 个数，取值范围为[3,32]。
         * @type {number || null}
         */
        this.MongosNum = null;

        /**
         * 分片实例询价必填参数，指 ConfigServer CPU核数，取值为1，单位：GB。
         * @type {number || null}
         */
        this.ConfigServerCpu = null;

        /**
         * 分片实例询价必填参数，指 ConfigServer 内存大小，取值为2，单位：GB。
         * @type {number || null}
         */
        this.ConfigServerMemory = null;

        /**
         * 分片实例询价必填参数，指 ConfigServer 磁盘大小，取值为 20，单位：GB。
         * @type {number || null}
         */
        this.ConfigServerVolume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.MongosCpu = 'MongosCpu' in params ? params.MongosCpu : null;
        this.MongosMemory = 'MongosMemory' in params ? params.MongosMemory : null;
        this.MongosNum = 'MongosNum' in params ? params.MongosNum : null;
        this.ConfigServerCpu = 'ConfigServerCpu' in params ? params.ConfigServerCpu : null;
        this.ConfigServerMemory = 'ConfigServerMemory' in params ? params.ConfigServerMemory : null;
        this.ConfigServerVolume = 'ConfigServerVolume' in params ? params.ConfigServerVolume : null;

    }
}

/**
 * DescribeInstanceParams返回参数结构体
 * @class
 */
class DescribeInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值为枚举类型参数集合
         * @type {Array.<InstanceEnumParam> || null}
         */
        this.InstanceEnumParam = null;

        /**
         * 值为integer类型参数集合
         * @type {Array.<InstanceIntegerParam> || null}
         */
        this.InstanceIntegerParam = null;

        /**
         * 值为text类型的参数集合
         * @type {Array.<InstanceTextParam> || null}
         */
        this.InstanceTextParam = null;

        /**
         * 值为混合类型的参数集合
         * @type {Array.<InstanceMultiParam> || null}
         */
        this.InstanceMultiParam = null;

        /**
         * 当前实例支持修改的参数个数统计 如0
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

        if (params.InstanceEnumParam) {
            this.InstanceEnumParam = new Array();
            for (let z in params.InstanceEnumParam) {
                let obj = new InstanceEnumParam();
                obj.deserialize(params.InstanceEnumParam[z]);
                this.InstanceEnumParam.push(obj);
            }
        }

        if (params.InstanceIntegerParam) {
            this.InstanceIntegerParam = new Array();
            for (let z in params.InstanceIntegerParam) {
                let obj = new InstanceIntegerParam();
                obj.deserialize(params.InstanceIntegerParam[z]);
                this.InstanceIntegerParam.push(obj);
            }
        }

        if (params.InstanceTextParam) {
            this.InstanceTextParam = new Array();
            for (let z in params.InstanceTextParam) {
                let obj = new InstanceTextParam();
                obj.deserialize(params.InstanceTextParam[z]);
                this.InstanceTextParam.push(obj);
            }
        }

        if (params.InstanceMultiParam) {
            this.InstanceMultiParam = new Array();
            for (let z in params.InstanceMultiParam) {
                let obj = new InstanceMultiParam();
                obj.deserialize(params.InstanceMultiParam[z]);
                this.InstanceMultiParam.push(obj);
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
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 付费类型，可能的返回值：1-包年包月；0-按量计费
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 集群类型，可能的返回值：0-副本集实例，1-分片实例。
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * 地域信息。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区信息。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 网络类型，可能的返回值：0-基础网络，1-私有网络
         * @type {number || null}
         */
        this.NetType = null;

        /**
         * 私有网络的ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络的子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例状态，可能的返回值：0-待初始化，1-流程处理中，2-运行中，-2-实例已过期。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例IP。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 端口号。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 实例创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例到期时间。
         * @type {string || null}
         */
        this.DeadLine = null;

        /**
         * 实例版本信息。
         * @type {string || null}
         */
        this.MongoVersion = null;

        /**
         * 实例内存规格，单位为MB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例磁盘规格，单位为MB。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 实例CPU核心数。
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * 实例机器类型。
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 实例从节点数。
         * @type {number || null}
         */
        this.SecondaryNum = null;

        /**
         * 实例分片数。
         * @type {number || null}
         */
        this.ReplicationSetNum = null;

        /**
         * 实例自动续费标志，可能的返回值：0-手动续费，1-自动续费，2-确认不续费。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 已用容量，单位MB。
         * @type {number || null}
         */
        this.UsedVolume = null;

        /**
         * 维护窗口起始时间。
         * @type {string || null}
         */
        this.MaintenanceStart = null;

        /**
         * 维护窗口结束时间。
         * @type {string || null}
         */
        this.MaintenanceEnd = null;

        /**
         * 分片信息。
         * @type {Array.<ShardInfo> || null}
         */
        this.ReplicaSets = null;

        /**
         * 只读实例信息。
         * @type {Array.<DBInstanceInfo> || null}
         */
        this.ReadonlyInstances = null;

        /**
         * 灾备实例信息。
         * @type {Array.<DBInstanceInfo> || null}
         */
        this.StandbyInstances = null;

        /**
         * 临时实例信息。
         * @type {Array.<DBInstanceInfo> || null}
         */
        this.CloneInstances = null;

        /**
         * 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息。
         * @type {DBInstanceInfo || null}
         */
        this.RelatedInstance = null;

        /**
         * 实例标签信息集合。
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 实例版本标记。
         * @type {number || null}
         */
        this.InstanceVer = null;

        /**
         * 实例版本标记。
         * @type {number || null}
         */
        this.ClusterVer = null;

        /**
         * 协议信息，可能的返回值：1-mongodb，2-dynamodb。
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

        /**
         * mongos节点个数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MongosNodeNum = null;

        /**
         * mongos节点内存。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MongosMemory = null;

        /**
         * mongos节点CPU核数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MongosCpuNum = null;

        /**
         * Config Server节点个数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConfigServerNodeNum = null;

        /**
         * Config Server节点内存。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConfigServerMemory = null;

        /**
         * Config Server节点磁盘大小。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConfigServerVolume = null;

        /**
         * Config Server节点CPU核数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConfigServerCpuNum = null;

        /**
         * readonly节点个数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReadonlyNodeNum = null;

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
        this.MongosNodeNum = 'MongosNodeNum' in params ? params.MongosNodeNum : null;
        this.MongosMemory = 'MongosMemory' in params ? params.MongosMemory : null;
        this.MongosCpuNum = 'MongosCpuNum' in params ? params.MongosCpuNum : null;
        this.ConfigServerNodeNum = 'ConfigServerNodeNum' in params ? params.ConfigServerNodeNum : null;
        this.ConfigServerMemory = 'ConfigServerMemory' in params ? params.ConfigServerMemory : null;
        this.ConfigServerVolume = 'ConfigServerVolume' in params ? params.ConfigServerVolume : null;
        this.ConfigServerCpuNum = 'ConfigServerCpuNum' in params ? params.ConfigServerCpuNum : null;
        this.ReadonlyNodeNum = 'ReadonlyNodeNum' in params ? params.ReadonlyNodeNum : null;

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
 * 描述了实例的计费模式
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。默认为1。
（InquirePriceRenewDBInstances，RenewDBInstances调用时必填）
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标识。取值范围：
NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
（InquirePriceRenewDBInstances，RenewDBInstances调用时必填）
         * @type {string || null}
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
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * RenewDBInstances请求参数结构体
 * @class
 */
class RenewDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过DescribeInstances接口返回值中的InstanceId获取。每次请求批量实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

module.exports = {
    DescribeSpecInfoRequest: DescribeSpecInfoRequest,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    DescribeCurrentOpResponse: DescribeCurrentOpResponse,
    DescribeAccountUsersRequest: DescribeAccountUsersRequest,
    CreateBackupDBInstanceResponse: CreateBackupDBInstanceResponse,
    DBInstancePrice: DBInstancePrice,
    KillOpsRequest: KillOpsRequest,
    InquirePriceRenewDBInstancesRequest: InquirePriceRenewDBInstancesRequest,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    FlushInstanceRouterConfigResponse: FlushInstanceRouterConfigResponse,
    DescribeSecurityGroupRequest: DescribeSecurityGroupRequest,
    SlowLogPattern: SlowLogPattern,
    AssignProjectResponse: AssignProjectResponse,
    DescribeDBInstanceDealResponse: DescribeDBInstanceDealResponse,
    OfflineIsolatedDBInstanceResponse: OfflineIsolatedDBInstanceResponse,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    InstanceMultiParam: InstanceMultiParam,
    DescribeBackupDownloadTaskResponse: DescribeBackupDownloadTaskResponse,
    FlushInstanceRouterConfigRequest: FlushInstanceRouterConfigRequest,
    DBInstanceInfo: DBInstanceInfo,
    SetAccountUserPrivilegeResponse: SetAccountUserPrivilegeResponse,
    ModifyDBInstanceNetworkAddressRequest: ModifyDBInstanceNetworkAddressRequest,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    DescribeDBInstanceNodePropertyRequest: DescribeDBInstanceNodePropertyRequest,
    Operation: Operation,
    SpecItem: SpecItem,
    ModifyDBInstanceNetworkAddressResponse: ModifyDBInstanceNetworkAddressResponse,
    CreateAccountUserResponse: CreateAccountUserResponse,
    DescribeSlowLogPatternsResponse: DescribeSlowLogPatternsResponse,
    BackupDownloadTaskStatus: BackupDownloadTaskStatus,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    InquirePriceModifyDBInstanceSpecRequest: InquirePriceModifyDBInstanceSpecRequest,
    BackupInfo: BackupInfo,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    CurrentOp: CurrentOp,
    ModifyDBInstanceSpecRequest: ModifyDBInstanceSpecRequest,
    Auth: Auth,
    ResetDBInstancePasswordRequest: ResetDBInstancePasswordRequest,
    InstanceIntegerParam: InstanceIntegerParam,
    ModifyNetworkAddress: ModifyNetworkAddress,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    CreateAccountUserRequest: CreateAccountUserRequest,
    InstanceTextParam: InstanceTextParam,
    ModifyDBInstanceSecurityGroupRequest: ModifyDBInstanceSecurityGroupRequest,
    DescribeAccountUsersResponse: DescribeAccountUsersResponse,
    DescribeBackupDownloadTaskRequest: DescribeBackupDownloadTaskRequest,
    DescribeClientConnectionsResponse: DescribeClientConnectionsResponse,
    TerminateDBInstancesRequest: TerminateDBInstancesRequest,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    ModifyDBInstanceSecurityGroupResponse: ModifyDBInstanceSecurityGroupResponse,
    UserInfo: UserInfo,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    NodeTag: NodeTag,
    InquirePriceCreateDBInstancesResponse: InquirePriceCreateDBInstancesResponse,
    DescribeSecurityGroupResponse: DescribeSecurityGroupResponse,
    SecurityGroup: SecurityGroup,
    ReplicaSetInfo: ReplicaSetInfo,
    ResetDBInstancePasswordResponse: ResetDBInstancePasswordResponse,
    ClientConnection: ClientConnection,
    ReplicateSetInfo: ReplicateSetInfo,
    DescribeDBInstanceDealRequest: DescribeDBInstanceDealRequest,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    CreateBackupDownloadTaskRequest: CreateBackupDownloadTaskRequest,
    InquirePriceModifyDBInstanceSpecResponse: InquirePriceModifyDBInstanceSpecResponse,
    SecurityGroupBound: SecurityGroupBound,
    DescribeDBInstanceNodePropertyResponse: DescribeDBInstanceNodePropertyResponse,
    DescribeCurrentOpRequest: DescribeCurrentOpRequest,
    BackupDownloadTask: BackupDownloadTask,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    DescribeClientConnectionsRequest: DescribeClientConnectionsRequest,
    ShardInfo: ShardInfo,
    TerminateDBInstancesResponse: TerminateDBInstancesResponse,
    RenameInstanceRequest: RenameInstanceRequest,
    RenewDBInstancesResponse: RenewDBInstancesResponse,
    InstanceEnumParam: InstanceEnumParam,
    RenameInstanceResponse: RenameInstanceResponse,
    CreateBackupDBInstanceRequest: CreateBackupDBInstanceRequest,
    SetAccountUserPrivilegeRequest: SetAccountUserPrivilegeRequest,
    NodeProperty: NodeProperty,
    KillOpsResponse: KillOpsResponse,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    AssignProjectRequest: AssignProjectRequest,
    CreateBackupDownloadTaskResponse: CreateBackupDownloadTaskResponse,
    SpecificationInfo: SpecificationInfo,
    DescribeSlowLogPatternsRequest: DescribeSlowLogPatternsRequest,
    DescribeSpecInfoResponse: DescribeSpecInfoResponse,
    InquirePriceRenewDBInstancesResponse: InquirePriceRenewDBInstancesResponse,
    TagInfo: TagInfo,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    OfflineIsolatedDBInstanceRequest: OfflineIsolatedDBInstanceRequest,
    InquirePriceCreateDBInstancesRequest: InquirePriceCreateDBInstancesRequest,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    InstanceDetail: InstanceDetail,
    ModifyDBInstanceSpecResponse: ModifyDBInstanceSpecResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    RenewDBInstancesRequest: RenewDBInstancesRequest,

}
