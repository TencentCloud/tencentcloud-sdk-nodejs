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
 * AddInstances返回参数结构体
 * @class
 */
class AddInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 冻结流水，一次开通一个冻结流水。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * 后付费订单号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * 发货资源id列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BigDealIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BigDealIds = null;

        /**
         * 订单号
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
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库地址
 * @class
 */
class Addr extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 端口
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeClusters请求参数结构体
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎类型：目前支持“MYSQL”， “POSTGRESQL”
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 返回数量，默认为 20，最大值为 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 记录偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
         * @type {Array.<QueryFilter> || null}
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
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 实例可售卖规格详细信息，创建实例时Cpu/Memory确定实例规格，存储可选大小为[MinStorageSize,MaxStorageSize]
 * @class
 */
class InstanceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例CPU，单位：核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例内存，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例最大可用存储，单位：GB
         * @type {number || null}
         */
        this.MaxStorageSize = null;

        /**
         * 实例最小可用存储，单位：GB
         * @type {number || null}
         */
        this.MinStorageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MaxStorageSize = 'MaxStorageSize' in params ? params.MaxStorageSize : null;
        this.MinStorageSize = 'MinStorageSize' in params ? params.MinStorageSize : null;

    }
}

/**
 * 数据库账号信息
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库账号名
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 数据库账号描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 主机
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Host = 'Host' in params ? params.Host : null;

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
 * DescribeBackupConfig请求参数结构体
 * @class
 */
class DescribeBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 需要过滤的账户列表
         * @type {Array.<string> || null}
         */
        this.AccountNames = null;

        /**
         * 数据库类型，取值范围: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AccountNames = 'AccountNames' in params ? params.AccountNames : null;
        this.DbType = 'DbType' in params ? params.DbType : null;

    }
}

/**
 * IsolateInstance请求参数结构体
 * @class
 */
class IsolateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例ID数组
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * 数据库类型，取值范围: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;
        this.DbType = 'DbType' in params ? params.DbType : null;

    }
}

/**
 * DescribeMaintainPeriod返回参数结构体
 * @class
 */
class DescribeMaintainPeriodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维护week days
         * @type {Array.<string> || null}
         */
        this.MaintainWeekDays = null;

        /**
         * 维护开始时间，单位秒
         * @type {number || null}
         */
        this.MaintainStartTime = null;

        /**
         * 维护时长，单位秒
         * @type {number || null}
         */
        this.MaintainDuration = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaintainWeekDays = 'MaintainWeekDays' in params ? params.MaintainWeekDays : null;
        this.MaintainStartTime = 'MaintainStartTime' in params ? params.MaintainStartTime : null;
        this.MaintainDuration = 'MaintainDuration' in params ? params.MaintainDuration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupList返回参数结构体
 * @class
 */
class DescribeBackupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总共备份文件个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 备份文件列表
         * @type {Array.<BackupFileInfo> || null}
         */
        this.BackupList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new BackupFileInfo();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRollbackTimeRange返回参数结构体
 * @class
 */
class DescribeRollbackTimeRangeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 有效回归时间范围开始时间点
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * 有效回归时间范围结束时间点
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeRangeStart = 'TimeRangeStart' in params ? params.TimeRangeStart : null;
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMaintainPeriodConfig请求参数结构体
 * @class
 */
class ModifyMaintainPeriodConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 维护开始时间，单位为秒，如3:00为10800
         * @type {number || null}
         */
        this.MaintainStartTime = null;

        /**
         * 维护持续时间，单位为秒，如1小时为3600
         * @type {number || null}
         */
        this.MaintainDuration = null;

        /**
         * 每周维护日期
         * @type {Array.<string> || null}
         */
        this.MaintainWeekDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MaintainStartTime = 'MaintainStartTime' in params ? params.MaintainStartTime : null;
        this.MaintainDuration = 'MaintainDuration' in params ? params.MaintainDuration : null;
        this.MaintainWeekDays = 'MaintainWeekDays' in params ? params.MaintainWeekDays : null;

    }
}

/**
 * ModifyBackupConfig请求参数结构体
 * @class
 */
class ModifyBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
         * @type {number || null}
         */
        this.BackupTimeBeg = null;

        /**
         * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
         * @type {number || null}
         */
        this.BackupTimeEnd = null;

        /**
         * 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800
         * @type {number || null}
         */
        this.ReserveDuration = null;

        /**
         * 备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份
         * @type {Array.<string> || null}
         */
        this.BackupFreq = null;

        /**
         * 备份方式，logic-逻辑备份，snapshot-快照备份
         * @type {string || null}
         */
        this.BackupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BackupTimeBeg = 'BackupTimeBeg' in params ? params.BackupTimeBeg : null;
        this.BackupTimeEnd = 'BackupTimeEnd' in params ? params.BackupTimeEnd : null;
        this.ReserveDuration = 'ReserveDuration' in params ? params.ReserveDuration : null;
        this.BackupFreq = 'BackupFreq' in params ? params.BackupFreq : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;

    }
}

/**
 * DescribeRollbackTimeRange请求参数结构体
 * @class
 */
class DescribeRollbackTimeRangeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeRollbackTimeValidity请求参数结构体
 * @class
 */
class DescribeRollbackTimeValidityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 期望回滚的时间点
         * @type {string || null}
         */
        this.ExpectTime = null;

        /**
         * 回滚时间点的允许误差范围
         * @type {number || null}
         */
        this.ExpectTimeThresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ExpectTime = 'ExpectTime' in params ? params.ExpectTime : null;
        this.ExpectTimeThresh = 'ExpectTimeThresh' in params ? params.ExpectTimeThresh : null;

    }
}

/**
 * IsolateCluster请求参数结构体
 * @class
 */
class IsolateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 数据库类型，取值范围: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DbType = 'DbType' in params ? params.DbType : null;

    }
}

/**
 * AddInstances请求参数结构体
 * @class
 */
class AddInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cpu核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 新增只读实例数
         * @type {number || null}
         */
        this.ReadOnlyCount = null;

        /**
         * 实例组ID，在已有RO组中新增实例时使用，不传则新增RO组
         * @type {string || null}
         */
        this.InstanceGrpId = null;

        /**
         * 所属VPC网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 所属子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 新增RO组时使用的Port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 是否自动选择代金券 1是 0否 默认为0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 数据库类型，取值范围: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 订单来源
         * @type {string || null}
         */
        this.OrderSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.ReadOnlyCount = 'ReadOnlyCount' in params ? params.ReadOnlyCount : null;
        this.InstanceGrpId = 'InstanceGrpId' in params ? params.InstanceGrpId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.OrderSource = 'OrderSource' in params ? params.OrderSource : null;

    }
}

/**
 * DescribeClusterDetail请求参数结构体
 * @class
 */
class DescribeClusterDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
         * 数据库CPU
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 数据库内存
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 升级类型：upgradeImmediate，upgradeInMaintain
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * 存储上限，为0表示使用标准配置
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * 是否自动选择代金券 1是 0否 默认为0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 数据库类型，取值范围: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.UpgradeType = 'UpgradeType' in params ? params.UpgradeType : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.DbType = 'DbType' in params ? params.DbType : null;

    }
}

/**
 * 查询过滤器
 * @class
 */
class QueryFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索字段，目前支持："InstanceId", "ProjectId", "InstanceName", "Vip"
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * 搜索字符串
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否精确匹配
         * @type {boolean || null}
         */
        this.ExactMatch = null;

        /**
         * 搜索字段
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
        this.Names = 'Names' in params ? params.Names : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.ExactMatch = 'ExactMatch' in params ? params.ExactMatch : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeMaintainPeriod请求参数结构体
 * @class
 */
class DescribeMaintainPeriodRequest extends  AbstractModel {
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
 * OfflineCluster请求参数结构体
 * @class
 */
class OfflineClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 集群详情详细信息
 * @class
 */
class CynosdbClusterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 状态描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * VPC名称
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * vpc唯一id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网名称
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 字符集
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 数据库类型
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 数据库版本
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * 使用容量
         * @type {number || null}
         */
        this.UsedStorage = null;

        /**
         * 读写分离Vport
         * @type {Array.<Addr> || null}
         */
        this.RoAddr = null;

        /**
         * 实例信息
         * @type {Array.<ClusterInstanceDetail> || null}
         */
        this.InstanceSet = null;

        /**
         * 付费模式
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * vip地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * vport端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 项目id
         * @type {number || null}
         */
        this.ProjectID = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.UsedStorage = 'UsedStorage' in params ? params.UsedStorage : null;

        if (params.RoAddr) {
            this.RoAddr = new Array();
            for (let z in params.RoAddr) {
                let obj = new Addr();
                obj.deserialize(params.RoAddr[z]);
                this.RoAddr.push(obj);
            }
        }

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new ClusterInstanceDetail();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * 集群实例信息
 * @class
 */
class ClusterInstanceDetail extends  AbstractModel {
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
         * 引擎类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例状态
         * @type {string || null}
         */
        this.InstanceStatus = null;

        /**
         * 实例状态描述
         * @type {string || null}
         */
        this.InstanceStatusDesc = null;

        /**
         * cpu核数
         * @type {number || null}
         */
        this.InstanceCpu = null;

        /**
         * 内存
         * @type {number || null}
         */
        this.InstanceMemory = null;

        /**
         * 硬盘
         * @type {number || null}
         */
        this.InstanceStorage = null;

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
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.InstanceStatusDesc = 'InstanceStatusDesc' in params ? params.InstanceStatusDesc : null;
        this.InstanceCpu = 'InstanceCpu' in params ? params.InstanceCpu : null;
        this.InstanceMemory = 'InstanceMemory' in params ? params.InstanceMemory : null;
        this.InstanceStorage = 'InstanceStorage' in params ? params.InstanceStorage : null;

    }
}

/**
 * 备份文件信息
 * @class
 */
class BackupFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照文件ID，用于回滚
         * @type {number || null}
         */
        this.SnapshotId = null;

        /**
         * 快照文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 快照文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 快照备份开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 快照备份完成时间
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 备份类型：snapshot，快照备份；timepoint，时间点备份
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * 备份方式：auto，自动备份；manual，手动备份
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * 备份文件状态：success：备份成功；fail：备份失败；creating：备份文件创建中；deleting：备份文件删除中
         * @type {string || null}
         */
        this.BackupStatus = null;

        /**
         * 备份文件时间
         * @type {string || null}
         */
        this.SnapshotTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupStatus = 'BackupStatus' in params ? params.BackupStatus : null;
        this.SnapshotTime = 'SnapshotTime' in params ? params.SnapshotTime : null;

    }
}

/**
 * DescribeRollbackTimeValidity返回参数结构体
 * @class
 */
class DescribeRollbackTimeValidityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储poolID
         * @type {number || null}
         */
        this.PoolId = null;

        /**
         * 回滚任务ID，后续按该时间点回滚时，需要传入
         * @type {number || null}
         */
        this.QueryId = null;

        /**
         * 时间点是否有效：pass，检测通过；fail，检测失败
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 建议时间点，在Status为fail时，该值才有效
         * @type {string || null}
         */
        this.SuggestTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PoolId = 'PoolId' in params ? params.PoolId : null;
        this.QueryId = 'QueryId' in params ? params.QueryId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SuggestTime = 'SuggestTime' in params ? params.SuggestTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMaintainPeriodConfig返回参数结构体
 * @class
 */
class ModifyMaintainPeriodConfigResponse extends  AbstractModel {
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
 * IsolateInstance返回参数结构体
 * @class
 */
class IsolateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流id
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 隔离实例的订单id（预付费实例）
注意：此字段可能返回 null，表示取不到有效值。
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupList请求参数结构体
 * @class
 */
class DescribeBackupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 备份文件列表偏移
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 备份文件列表起始
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * 数据库账号列表
         * @type {Array.<Account> || null}
         */
        this.AccountSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccountSet) {
            this.AccountSet = new Array();
            for (let z in params.AccountSet) {
                let obj = new Account();
                obj.deserialize(params.AccountSet[z]);
                this.AccountSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OfflineCluster返回参数结构体
 * @class
 */
class OfflineClusterResponse extends  AbstractModel {
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
 * DescribeInstanceSpecs返回参数结构体
 * @class
 */
class DescribeInstanceSpecsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格信息
         * @type {Array.<InstanceSpec> || null}
         */
        this.InstanceSpecSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceSpecSet) {
            this.InstanceSpecSet = new Array();
            for (let z in params.InstanceSpecSet) {
                let obj = new InstanceSpec();
                obj.deserialize(params.InstanceSpecSet[z]);
                this.InstanceSpecSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务信息
 * @class
 */
class ObjectTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务自增ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * 任务ID（集群ID|实例组ID|实例ID）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ObjectId = null;

        /**
         * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ObjectType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.ObjectId = 'ObjectId' in params ? params.ObjectId : null;
        this.ObjectType = 'ObjectType' in params ? params.ObjectType : null;

    }
}

/**
 * DescribeInstanceSpecs请求参数结构体
 * @class
 */
class DescribeInstanceSpecsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库类型，取值范围: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbType = 'DbType' in params ? params.DbType : null;

    }
}

/**
 * IsolateCluster返回参数结构体
 * @class
 */
class IsolateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 退款订单号
注意：此字段可能返回 null，表示取不到有效值。
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateClusters返回参数结构体
 * @class
 */
class CreateClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * 订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * 资源ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 集群ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BigDealIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetRenewFlag请求参数结构体
 * @class
 */
class SetRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需操作的实例ID
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 自动续费标志位
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
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * CreateClusters请求参数结构体
 * @class
 */
class CreateClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 所属VPC网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 所属子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 数据库类型，取值范围: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 数据库版本，取值范围: 
<li> MYSQL可选值：5.7 </li>
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Cpu核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储上限，单位GB
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * 所属项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 存储
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 账号密码(8-64个字符，至少包含字母、数字、字符（支持的字符：_+-&=!@#$%^*()~）中的两种)
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * 端口，默认5432
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 计费模式，按量计费：0，包年包月：1。默认按量计费。
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 购买个数，目前只支持传1（不传默认为1）
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 回档类型：
noneRollback：不回档；
snapRollback，快照回档；
timeRollback，时间点回档
         * @type {string || null}
         */
        this.RollbackStrategy = null;

        /**
         * 快照回档，表示snapshotId；时间点回档，表示queryId，为0，表示需要判断时间点是否有效
         * @type {number || null}
         */
        this.RollbackId = null;

        /**
         * 回档时，传入源集群ID，用于查找源poolId
         * @type {string || null}
         */
        this.OriginalClusterId = null;

        /**
         * 时间点回档，指定时间；快照回档，快照时间
         * @type {string || null}
         */
        this.ExpectTime = null;

        /**
         * 时间点回档，指定时间允许范围
         * @type {number || null}
         */
        this.ExpectTimeThresh = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 包年包月购买时长
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 包年包月购买时长单位
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 包年包月购买是否自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 是否自动选择代金券 1是 0否 默认为0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 实例数量（该参数已不再使用，只做存量兼容处理）
         * @type {number || null}
         */
        this.HaCount = null;

        /**
         * 订单来源
         * @type {string || null}
         */
        this.OrderSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RollbackStrategy = 'RollbackStrategy' in params ? params.RollbackStrategy : null;
        this.RollbackId = 'RollbackId' in params ? params.RollbackId : null;
        this.OriginalClusterId = 'OriginalClusterId' in params ? params.OriginalClusterId : null;
        this.ExpectTime = 'ExpectTime' in params ? params.ExpectTime : null;
        this.ExpectTimeThresh = 'ExpectTimeThresh' in params ? params.ExpectTimeThresh : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.HaCount = 'HaCount' in params ? params.HaCount : null;
        this.OrderSource = 'OrderSource' in params ? params.OrderSource : null;

    }
}

/**
 * 集群信息
 * @class
 */
class CynosdbCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 数据库版本
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例数
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * 用户uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 引擎类型
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 用户appid
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 集群状态描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 集群创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 付费模式。0-按量计费，1-包年包月
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 截止时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 集群读写vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 集群读写vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 项目id
         * @type {number || null}
         */
        this.ProjectID = null;

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
         * cynos内核版本
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * 存储容量
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * 续费标志
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 正在处理的任务
         * @type {string || null}
         */
        this.ProcessingTask = null;

        /**
         * 集群的任务数组
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CynosVersion = 'CynosVersion' in params ? params.CynosVersion : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ProcessingTask = 'ProcessingTask' in params ? params.ProcessingTask : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ObjectTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterDetail返回参数结构体
 * @class
 */
class DescribeClusterDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群详细信息
         * @type {CynosdbClusterDetail || null}
         */
        this.Detail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Detail) {
            let obj = new CynosdbClusterDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetRenewFlag返回参数结构体
 * @class
 */
class SetRenewFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功实例数
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
 * DescribeClusters返回参数结构体
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群列表
         * @type {Array.<CynosdbCluster> || null}
         */
        this.ClusterSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ClusterSet) {
            this.ClusterSet = new Array();
            for (let z in params.ClusterSet) {
                let obj = new CynosdbCluster();
                obj.deserialize(params.ClusterSet[z]);
                this.ClusterSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupConfig返回参数结构体
 * @class
 */
class ModifyBackupConfigResponse extends  AbstractModel {
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
 * DescribeBackupConfig返回参数结构体
 * @class
 */
class DescribeBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
         * @type {number || null}
         */
        this.BackupTimeBeg = null;

        /**
         * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
         * @type {number || null}
         */
        this.BackupTimeEnd = null;

        /**
         * 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800
         * @type {number || null}
         */
        this.ReserveDuration = null;

        /**
         * 备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BackupFreq = null;

        /**
         * 备份方式，logic-逻辑备份，snapshot-快照备份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupTimeBeg = 'BackupTimeBeg' in params ? params.BackupTimeBeg : null;
        this.BackupTimeEnd = 'BackupTimeEnd' in params ? params.BackupTimeEnd : null;
        this.ReserveDuration = 'ReserveDuration' in params ? params.ReserveDuration : null;
        this.BackupFreq = 'BackupFreq' in params ? params.BackupFreq : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例组ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

module.exports = {
    AddInstancesResponse: AddInstancesResponse,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    Addr: Addr,
    DescribeClustersRequest: DescribeClustersRequest,
    InstanceSpec: InstanceSpec,
    Account: Account,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DescribeBackupConfigRequest: DescribeBackupConfigRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    IsolateInstanceRequest: IsolateInstanceRequest,
    DescribeMaintainPeriodResponse: DescribeMaintainPeriodResponse,
    DescribeBackupListResponse: DescribeBackupListResponse,
    DescribeRollbackTimeRangeResponse: DescribeRollbackTimeRangeResponse,
    ModifyMaintainPeriodConfigRequest: ModifyMaintainPeriodConfigRequest,
    ModifyBackupConfigRequest: ModifyBackupConfigRequest,
    DescribeRollbackTimeRangeRequest: DescribeRollbackTimeRangeRequest,
    DescribeRollbackTimeValidityRequest: DescribeRollbackTimeValidityRequest,
    IsolateClusterRequest: IsolateClusterRequest,
    AddInstancesRequest: AddInstancesRequest,
    DescribeClusterDetailRequest: DescribeClusterDetailRequest,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    QueryFilter: QueryFilter,
    DescribeMaintainPeriodRequest: DescribeMaintainPeriodRequest,
    OfflineClusterRequest: OfflineClusterRequest,
    CynosdbClusterDetail: CynosdbClusterDetail,
    ClusterInstanceDetail: ClusterInstanceDetail,
    BackupFileInfo: BackupFileInfo,
    DescribeRollbackTimeValidityResponse: DescribeRollbackTimeValidityResponse,
    ModifyMaintainPeriodConfigResponse: ModifyMaintainPeriodConfigResponse,
    IsolateInstanceResponse: IsolateInstanceResponse,
    DescribeBackupListRequest: DescribeBackupListRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    OfflineClusterResponse: OfflineClusterResponse,
    DescribeInstanceSpecsResponse: DescribeInstanceSpecsResponse,
    ObjectTask: ObjectTask,
    DescribeInstanceSpecsRequest: DescribeInstanceSpecsRequest,
    IsolateClusterResponse: IsolateClusterResponse,
    CreateClustersResponse: CreateClustersResponse,
    SetRenewFlagRequest: SetRenewFlagRequest,
    CreateClustersRequest: CreateClustersRequest,
    CynosdbCluster: CynosdbCluster,
    DescribeClusterDetailResponse: DescribeClusterDetailResponse,
    SetRenewFlagResponse: SetRenewFlagResponse,
    DescribeClustersResponse: DescribeClustersResponse,
    ModifyBackupConfigResponse: ModifyBackupConfigResponse,
    DescribeBackupConfigResponse: DescribeBackupConfigResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,

}
