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
 * ModifyInstance返回参数结构体
 * @class
 */
class ModifyInstanceResponse extends  AbstractModel {
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
 * 可用区内产品信息
 * @class
 */
class ZoneCapacityConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区ID：如ap-guangzhou-3
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 可用区名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 可用区是否售罄
         * @type {boolean || null}
         */
        this.IsSaleout = null;

        /**
         * 是否为默认可用区
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 网络类型：basenet -- 基础网络；vpcnet -- VPC网络
         * @type {Array.<string> || null}
         */
        this.NetWorkType = null;

        /**
         * 可用区内产品规格等信息
         * @type {Array.<ProductConf> || null}
         */
        this.ProductSet = null;

        /**
         * 可用区ID：如100003
         * @type {number || null}
         */
        this.OldZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.IsSaleout = 'IsSaleout' in params ? params.IsSaleout : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.NetWorkType = 'NetWorkType' in params ? params.NetWorkType : null;

        if (params.ProductSet) {
            this.ProductSet = new Array();
            for (let z in params.ProductSet) {
                let obj = new ProductConf();
                obj.deserialize(params.ProductSet[z]);
                this.ProductSet.push(obj);
            }
        }
        this.OldZoneId = 'OldZoneId' in params ? params.OldZoneId : null;

    }
}

/**
 * DescribeAutoBackupConfig返回参数结构体
 * @class
 */
class DescribeAutoBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份类型。自动备份类型： 1 “定时回档”
         * @type {number || null}
         */
        this.AutoBackupType = null;

        /**
         * Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * 时间段。
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 订单交易信息
 * @class
 */
class TradeDealDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号ID，调用云API时使用此ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 长订单ID，反馈订单问题给官方客服使用此ID
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 可用区id
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 订单关联的实例数
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 创建用户uin
         * @type {string || null}
         */
        this.Creater = null;

        /**
         * 订单创建时间
         * @type {string || null}
         */
        this.CreatTime = null;

        /**
         * 订单超时时间
         * @type {string || null}
         */
        this.OverdueTime = null;

        /**
         * 订单完成时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 订单状态 1：未支付 2:已支付，未发货 3:发货中 4:发货成功 5:发货失败 6:已退款 7:已关闭订单 8:订单过期 9:订单已失效 10:产品已失效 11:代付拒绝 12:支付中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 订单状态描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 订单实际总价，单位：分
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 实例ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Creater = 'Creater' in params ? params.Creater : null;
        this.CreatTime = 'CreatTime' in params ? params.CreatTime : null;
        this.OverdueTime = 'OverdueTime' in params ? params.OverdueTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 实例的备份数组
 * @class
 */
class RedisBackupSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始备份的时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 备份ID
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * 备份类型。 manualBackupInstance：用户发起的手动备份； systemBackupInstance：凌晨系统发起的备份
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * 备份状态。  1:"备份被其它流程锁定";  2:"备份正常，没有被任何流程锁定";  -1:"备份已过期"； 3:"备份正在被导出";  4:"备份导出成功"
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 备份的备注信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 备份是否被锁定，0：未被锁定；1：已被锁定
         * @type {number || null}
         */
        this.Locked = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Locked = 'Locked' in params ? params.Locked : null;

    }
}

/**
 * ModfiyInstancePassword请求参数结构体
 * @class
 */
class ModfiyInstancePasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例旧密码
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * 实例新密码
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
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * ModifyAutoBackupConfig返回参数结构体
 * @class
 */
class ModifyAutoBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动备份类型： 1 “定时回档”
         * @type {number || null}
         */
        this.AutoBackupType = null;

        /**
         * 日期Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * 时间段 00:00-01:00, 01:00-02:00...... 23:00-00:00
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstances请求参数结构体
 * @class
 */
class CreateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属的可用区id
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 实例类型：2 – Redis2.8主从版，3 – Redis3.2主从版(CKV主从版)，4 – Redis3.2集群版(CKV集群版)，5-Redis2.8单机版，7 – Redis4.0集群版，
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * 实例容量，单位MB， 取值大小以 查询售卖规格接口返回的规格为准
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 实例数量，单次购买实例数量以 查询售卖规格接口返回的规格为准
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 购买时长，单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 实例密码，密码规则：1.长度为8-16个字符；2:至少包含字母、数字和字符!@^*()中的两种
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 付费方式:0-按量计费，1-包年包月。
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * 私有网络ID，如果不传则默认选择基础网络，请使用私有网络列表查询，如：vpc-sad23jfdfk
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 基础网络下， subnetId无效； vpc子网下，取值以查询子网列表，如：subnet-fdj24n34j2
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 项目id，取值以用户账户>用户账户相关接口查询>项目列表返回的projectId为准
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 自动续费表示。0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 安全组id数组
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdList = null;

        /**
         * 用户自定义的端口 不填则默认为6379
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * 实例分片数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * 实例副本数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * 是否支持副本只读，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         * @type {boolean || null}
         */
        this.ReplicasReadonly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.SecurityGroupIdList = 'SecurityGroupIdList' in params ? params.SecurityGroupIdList : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;

    }
}

/**
 * DescribeProductInfo返回参数结构体
 * @class
 */
class DescribeProductInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域售卖信息
         * @type {Array.<RegionConf> || null}
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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionConf();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetPassword请求参数结构体
 * @class
 */
class ResetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重置的密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Redis实例ID
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
        this.Password = 'Password' in params ? params.Password : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 产品信息
 * @class
 */
class ProductConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品类型，2-Redis主从版，3-CKV主从版，4-CKV集群版，5-Redis单机版，7-Redis集群版
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 产品名称，Redis主从版，CKV主从版，CKV集群版，Redis单机版，Redis集群版
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 购买时的最小数量
         * @type {number || null}
         */
        this.MinBuyNum = null;

        /**
         * 购买时的最大数量
         * @type {number || null}
         */
        this.MaxBuyNum = null;

        /**
         * 产品是否售罄
         * @type {boolean || null}
         */
        this.Saleout = null;

        /**
         * 产品引擎，腾讯云CKV或者社区版Redis
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 兼容版本，Redis-2.8，Redis-3.2，Redis-4.0
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 规格总大小，单位G
         * @type {Array.<string> || null}
         */
        this.TotalSize = null;

        /**
         * 每个分片大小，单位G
         * @type {Array.<string> || null}
         */
        this.ShardSize = null;

        /**
         * 副本数量
         * @type {Array.<string> || null}
         */
        this.ReplicaNum = null;

        /**
         * 分片数量
         * @type {Array.<string> || null}
         */
        this.ShardNum = null;

        /**
         * 支持的计费模式，1-包年包月，0-按量计费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 是否支持副本只读
         * @type {boolean || null}
         */
        this.EnableRepicaReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.MinBuyNum = 'MinBuyNum' in params ? params.MinBuyNum : null;
        this.MaxBuyNum = 'MaxBuyNum' in params ? params.MaxBuyNum : null;
        this.Saleout = 'Saleout' in params ? params.Saleout : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.ShardSize = 'ShardSize' in params ? params.ShardSize : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.EnableRepicaReadOnly = 'EnableRepicaReadOnly' in params ? params.EnableRepicaReadOnly : null;

    }
}

/**
 * ModifyInstance请求参数结构体
 * @class
 */
class ModifyInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改实例操作，如填写：rename（表示实例重命名）
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例的新名称
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
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * RenewInstance返回参数结构体
 * @class
 */
class RenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易Id
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
 * DescribeInstanceBackups返回参数结构体
 * @class
 */
class DescribeInstanceBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例的备份数组
         * @type {Array.<RedisBackupSet> || null}
         */
        this.BackupSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.BackupSet) {
            this.BackupSet = new Array();
            for (let z in params.BackupSet) {
                let obj = new RedisBackupSet();
                obj.deserialize(params.BackupSet[z]);
                this.BackupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceDealDetail请求参数结构体
 * @class
 */
class DescribeInstanceDealDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单ID数组
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealIds = 'DealIds' in params ? params.DealIds : null;

    }
}

/**
 * ManualBackupInstance返回参数结构体
 * @class
 */
class ManualBackupInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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
         * 实例数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         * @type {Array.<InstanceSet> || null}
         */
        this.InstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new InstanceSet();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceDealDetail返回参数结构体
 * @class
 */
class DescribeInstanceDealDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单详细信息
         * @type {Array.<TradeDealDetail> || null}
         */
        this.DealDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DealDetails) {
            this.DealDetails = new Array();
            for (let z in params.DealDetails) {
                let obj = new TradeDealDetail();
                obj.deserialize(params.DealDetails[z]);
                this.DealDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductInfo请求参数结构体
 * @class
 */
class DescribeProductInfoRequest extends  AbstractModel {
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
 * ResetPassword返回参数结构体
 * @class
 */
class ResetPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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
         * 实例列表的大小，参数默认值20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例Id，如：crs-6ubhgouj
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 枚举范围： projectId,createtime,instancename,type,curDeadline
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 1倒序，0顺序，默认倒序
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络，如：47525
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * 子网ID数组，数组下标从0开始，如：56854
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 项目ID 组成的数组，数组下标从0开始
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 查找实例的ID。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络，如：vpc-sad23jfdfk
         * @type {Array.<string> || null}
         */
        this.UniqVpcIds = null;

        /**
         * 子网ID数组，数组下标从0开始，如：subnet-fdj24n34j2
         * @type {Array.<string> || null}
         */
        this.UniqSubnetIds = null;

        /**
         * 地域ID，已经弃用，可通过公共参数Region查询对应地域
         * @type {Array.<number> || null}
         */
        this.RegionIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;

    }
}

/**
 * ClearInstance请求参数结构体
 * @class
 */
class ClearInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * redis的实例密码
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
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 地域信息
 * @class
 */
class RegionConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域简称
         * @type {string || null}
         */
        this.RegionShortName = null;

        /**
         * 地域所在大区名称
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 可用区信息
         * @type {Array.<ZoneCapacityConf> || null}
         */
        this.ZoneSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionShortName = 'RegionShortName' in params ? params.RegionShortName : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneCapacityConf();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }

    }
}

/**
 * RenewInstance请求参数结构体
 * @class
 */
class RenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买时长，单位：月
         * @type {number || null}
         */
        this.Period = null;

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
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceBackups请求参数结构体
 * @class
 */
class DescribeInstanceBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的实例ID，可通过 DescribeInstance 接口返回值中的 InstanceId 获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例列表大小，默认大小20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 开始时间，格式如：2017-02-08 16:46:34。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间，格式如：2017-02-08 19:09:26。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 1：备份在流程中，2：备份正常，3：备份转RDB文件处理中，4：已完成RDB转换，-1：备份已过期，-2：备份已删除。
         * @type {Array.<string> || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeTaskInfo返回参数结构体
 * @class
 */
class DescribeTaskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态preparing:待执行，running：执行中，succeed：成功，failed：失败，error 执行出错
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 实例的ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 任务信息，错误时显示错误信息。执行中与成功则为空
         * @type {string || null}
         */
        this.TaskMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TaskMessage = 'TaskMessage' in params ? params.TaskMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoBackupConfig请求参数结构体
 * @class
 */
class DescribeAutoBackupConfigRequest extends  AbstractModel {
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
 * ModifyAutoBackupConfig请求参数结构体
 * @class
 */
class ModifyAutoBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 日期 Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * 时间段 00:00-01:00, 01:00-02:00...... 23:00-00:00
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * 自动备份类型： 1 “定时回档”
         * @type {number || null}
         */
        this.AutoBackupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;

    }
}

/**
 * CreateInstances返回参数结构体
 * @class
 */
class CreateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易的Id
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
 * DescribeTaskInfo请求参数结构体
 * @class
 */
class DescribeTaskInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * UpgradeInstance请求参数结构体
 * @class
 */
class UpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分片大小 单位 MB
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 分片数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * 副本数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;

    }
}

/**
 * ManualBackupInstance请求参数结构体
 * @class
 */
class ManualBackupInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的实例ID，可通过 DescribeInstance接口返回值中的 InstanceId 获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份的备注信息
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModfiyInstancePassword返回参数结构体
 * @class
 */
class ModfiyInstancePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例详细信息列表
 * @class
 */
class InstanceSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户的Appid
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 项目Id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 地域id 1--广州 4--上海 5-- 香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 区域id
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * vpc网络id 如：75101
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * vpc网络下子网id 如：46315
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 实例当前状态，0：待初始化；1：实例在流程中；2：实例运行中；-2：实例已隔离；-3：实例待删除
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例vip
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 实例端口号
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * 实例容量大小，单位：MB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 实例当前已使用容量，单位：MB
         * @type {number || null}
         */
        this.SizeUsed = null;

        /**
         * 实例类型，1：Redis2.8集群版；2：Redis2.8主从版；3：CKV主从版（Redis3.2）；4：CKV集群版（Redis3.2）；5：Redis2.8单机版；7：Redis4.0集群版；
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 实例是否设置自动续费标识，1：设置自动续费；0：未设置自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 实例到期时间
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * 引擎：社区版Redis、腾讯云CKV
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 产品类型：Redis2.8集群版、Redis2.8主从版、Redis3.2主从版（CKV主从版）、Redis3.2集群版（CKV集群版）、Redis2.8单机版、Redis4.0集群版
         * @type {string || null}
         */
        this.ProductType = null;

        /**
         * vpc网络id 如：vpc-fk33jsf43kgv
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * vpc网络下子网id 如：subnet-fd3j6l35mm0
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 计费模式：0-按量计费，1-包年包月
         * @type {number || null}
         */
        this.BillingMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.SizeUsed = 'SizeUsed' in params ? params.SizeUsed : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;

    }
}

/**
 * ClearInstance返回参数结构体
 * @class
 */
class ClearInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ModifyInstanceResponse: ModifyInstanceResponse,
    ZoneCapacityConf: ZoneCapacityConf,
    DescribeAutoBackupConfigResponse: DescribeAutoBackupConfigResponse,
    TradeDealDetail: TradeDealDetail,
    RedisBackupSet: RedisBackupSet,
    ModfiyInstancePasswordRequest: ModfiyInstancePasswordRequest,
    ModifyAutoBackupConfigResponse: ModifyAutoBackupConfigResponse,
    CreateInstancesRequest: CreateInstancesRequest,
    DescribeProductInfoResponse: DescribeProductInfoResponse,
    ResetPasswordRequest: ResetPasswordRequest,
    ProductConf: ProductConf,
    ModifyInstanceRequest: ModifyInstanceRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    DescribeInstanceBackupsResponse: DescribeInstanceBackupsResponse,
    DescribeInstanceDealDetailRequest: DescribeInstanceDealDetailRequest,
    ManualBackupInstanceResponse: ManualBackupInstanceResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeInstanceDealDetailResponse: DescribeInstanceDealDetailResponse,
    DescribeProductInfoRequest: DescribeProductInfoRequest,
    ResetPasswordResponse: ResetPasswordResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    ClearInstanceRequest: ClearInstanceRequest,
    RegionConf: RegionConf,
    RenewInstanceRequest: RenewInstanceRequest,
    DescribeInstanceBackupsRequest: DescribeInstanceBackupsRequest,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    DescribeAutoBackupConfigRequest: DescribeAutoBackupConfigRequest,
    ModifyAutoBackupConfigRequest: ModifyAutoBackupConfigRequest,
    CreateInstancesResponse: CreateInstancesResponse,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    ManualBackupInstanceRequest: ManualBackupInstanceRequest,
    ModfiyInstancePasswordResponse: ModfiyInstancePasswordResponse,
    InstanceSet: InstanceSet,
    ClearInstanceResponse: ClearInstanceResponse,

}
