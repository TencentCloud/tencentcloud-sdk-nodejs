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
 * CreateDBInstance请求参数结构体
 * @class
 */
class CreateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例节点可用区分布，最多可填两个可用区。当分片规格为一主两从时，其中两个节点在第一个可用区。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 节点个数大小，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 欲购买的时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 欲购买的数量，默认查询购买1个实例的价格。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 虚拟私有网络 ID，不传表示创建为基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 虚拟私有网络子网 ID，VpcId 不为空时必填
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 数据库引擎版本，当前可选：10.0.10，10.1.9，5.7.17。如果不传的话，默认为 Mariadb 10.1.9。
         * @type {string || null}
         */
        this.DbVersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;

    }
}

/**
 * DescribeAccountPrivileges返回参数结构体
 * @class
 */
class DescribeAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 权限列表。
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * 数据库账号用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 数据库账号Host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例Id，透传入参。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名，透传入参。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 允许访问的 host，透传入参。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 透传入参。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBParameters请求参数结构体
 * @class
 */
class DescribeDBParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
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
 * DescribeAccounts请求参数结构体
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
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
 * DescribeRenewalPrice返回参数结构体
 * @class
 */
class DescribeRenewalPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，单位：分。受折扣等影响，可能和原价不同。
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
 * DescribeUpgradePrice请求参数结构体
 * @class
 */
class DescribeUpgradePriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待升级的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。
         * @type {number || null}
         */
        this.Storage = null;

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

    }
}

/**
 * DescribeDBResourceUsageDetails返回参数结构体
 * @class
 */
class DescribeDBResourceUsageDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主节点资源使用情况监控数据
         * @type {ResourceUsageMonitorSet || null}
         */
        this.Master = null;

        /**
         * 备机1资源使用情况监控数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceUsageMonitorSet || null}
         */
        this.Slave1 = null;

        /**
         * 备机2资源使用情况监控数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceUsageMonitorSet || null}
         */
        this.Slave2 = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Master) {
            let obj = new ResourceUsageMonitorSet();
            obj.deserialize(params.Master)
            this.Master = obj;
        }

        if (params.Slave1) {
            let obj = new ResourceUsageMonitorSet();
            obj.deserialize(params.Slave1)
            this.Slave1 = obj;
        }

        if (params.Slave2) {
            let obj = new ResourceUsageMonitorSet();
            obj.deserialize(params.Slave2)
            this.Slave2 = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceSpecs返回参数结构体
 * @class
 */
class DescribeDBInstanceSpecsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按机型分类的可售卖规格列表
         * @type {Array.<InstanceSpec> || null}
         */
        this.Specs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Specs) {
            this.Specs = new Array();
            for (let z in params.Specs) {
                let obj = new InstanceSpec();
                obj.deserialize(params.Specs[z]);
                this.Specs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSlowLogs请求参数结构体
 * @class
 */
class DescribeDBSlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 从结果的第几条数据开始返回
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回的结果条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询的起始时间，形如2016-07-23 14:55:20
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询的结束时间，形如2016-08-22 14:55:20
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 要查询的具体数据库名称
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 排序指标，取值为query_time_sum或者query_count
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型，desc或者asc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 是否查询从机的慢查询，0-主机; 1-从机
         * @type {number || null}
         */
        this.Slave = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Db = 'Db' in params ? params.Db : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Slave = 'Slave' in params ? params.Slave : null;

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
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名，由字幕、数字、下划线和连字符组成，长度为1~32位。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 可以登录的主机，与mysql 账号的 host 格式一致，可以支持通配符，例如 %，10.%，10.20.%。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 账号密码，由字母、数字或常见符号组成，不能包含分号、单引号和双引号，长度为6~32位。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否创建为只读账号，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 账号备注，可以包含中文、英文字符、常见符号和数字，长度为0~256字符
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 根据传入时间判断备机不可用
         * @type {number || null}
         */
        this.DelayThresh = null;

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
        this.Host = 'Host' in params ? params.Host : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DelayThresh = 'DelayThresh' in params ? params.DelayThresh : null;

    }
}

/**
 * InitDBInstances返回参数结构体
 * @class
 */
class InitDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务Id，可通过 DescribeFlow 查询任务状态。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 透传入参。
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBParameters返回参数结构体
 * @class
 */
class DescribeDBParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 请求DB的当前参数值
         * @type {Array.<ParamDesc> || null}
         */
        this.Params = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new ParamDesc();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DB资源使用情况监控指标集合
 * @class
 */
class ResourceUsageMonitorSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * binlog日志磁盘可用空间,单位GB
         * @type {MonitorData || null}
         */
        this.BinlogDiskAvailable = null;

        /**
         * CPU利用率
         * @type {MonitorData || null}
         */
        this.CpuUsageRate = null;

        /**
         * 内存可用空间,单位GB
         * @type {MonitorData || null}
         */
        this.MemAvailable = null;

        /**
         * 磁盘可用空间,单位GB
         * @type {MonitorData || null}
         */
        this.DataDiskAvailable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BinlogDiskAvailable) {
            let obj = new MonitorData();
            obj.deserialize(params.BinlogDiskAvailable)
            this.BinlogDiskAvailable = obj;
        }

        if (params.CpuUsageRate) {
            let obj = new MonitorData();
            obj.deserialize(params.CpuUsageRate)
            this.CpuUsageRate = obj;
        }

        if (params.MemAvailable) {
            let obj = new MonitorData();
            obj.deserialize(params.MemAvailable)
            this.MemAvailable = obj;
        }

        if (params.DataDiskAvailable) {
            let obj = new MonitorData();
            obj.deserialize(params.DataDiskAvailable)
            this.DataDiskAvailable = obj;
        }

    }
}

/**
 * ModifyLogFileRetentionPeriod请求参数结构体
 * @class
 */
class ModifyLogFileRetentionPeriodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 保存的天数,不能超过30
         * @type {number || null}
         */
        this.Days = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Days = 'Days' in params ? params.Days : null;

    }
}

/**
 * DB性能监控指标集合
 * @class
 */
class PerformanceMonitorSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新操作数UPDATE
         * @type {MonitorData || null}
         */
        this.UpdateTotal = null;

        /**
         * 磁盘每秒IO次数
         * @type {MonitorData || null}
         */
        this.DiskIops = null;

        /**
         * 活跃连接数
         * @type {MonitorData || null}
         */
        this.ConnActive = null;

        /**
         * 缓存命中率
         * @type {MonitorData || null}
         */
        this.MemHitRate = null;

        /**
         * 主备延迟
         * @type {MonitorData || null}
         */
        this.SlaveDelay = null;

        /**
         * 查询操作数SELECT
         * @type {MonitorData || null}
         */
        this.SelectTotal = null;

        /**
         * 慢查询数
         * @type {MonitorData || null}
         */
        this.LongQuery = null;

        /**
         * 删除操作数DELETE
         * @type {MonitorData || null}
         */
        this.DeleteTotal = null;

        /**
         * 插入操作数INSERT
         * @type {MonitorData || null}
         */
        this.InsertTotal = null;

        /**
         * 是否发生主备切换，1为发生，0否
         * @type {MonitorData || null}
         */
        this.IsMasterSwitched = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UpdateTotal) {
            let obj = new MonitorData();
            obj.deserialize(params.UpdateTotal)
            this.UpdateTotal = obj;
        }

        if (params.DiskIops) {
            let obj = new MonitorData();
            obj.deserialize(params.DiskIops)
            this.DiskIops = obj;
        }

        if (params.ConnActive) {
            let obj = new MonitorData();
            obj.deserialize(params.ConnActive)
            this.ConnActive = obj;
        }

        if (params.MemHitRate) {
            let obj = new MonitorData();
            obj.deserialize(params.MemHitRate)
            this.MemHitRate = obj;
        }

        if (params.SlaveDelay) {
            let obj = new MonitorData();
            obj.deserialize(params.SlaveDelay)
            this.SlaveDelay = obj;
        }

        if (params.SelectTotal) {
            let obj = new MonitorData();
            obj.deserialize(params.SelectTotal)
            this.SelectTotal = obj;
        }

        if (params.LongQuery) {
            let obj = new MonitorData();
            obj.deserialize(params.LongQuery)
            this.LongQuery = obj;
        }

        if (params.DeleteTotal) {
            let obj = new MonitorData();
            obj.deserialize(params.DeleteTotal)
            this.DeleteTotal = obj;
        }

        if (params.InsertTotal) {
            let obj = new MonitorData();
            obj.deserialize(params.InsertTotal)
            this.InsertTotal = obj;
        }

        if (params.IsMasterSwitched) {
            let obj = new MonitorData();
            obj.deserialize(params.IsMasterSwitched)
            this.IsMasterSwitched = obj;
        }

    }
}

/**
 * DescribeFlow返回参数结构体
 * @class
 */
class DescribeFlowResponse extends  AbstractModel {
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
 * CloneAccount返回参数结构体
 * @class
 */
class CloneAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流程ID。
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
 * 分片节点可用区选择
 * @class
 */
class ZoneChooseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主可用区
         * @type {ZonesInfo || null}
         */
        this.MasterZone = null;

        /**
         * 可选的从可用区
         * @type {Array.<ZonesInfo> || null}
         */
        this.SlaveZones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MasterZone) {
            let obj = new ZonesInfo();
            obj.deserialize(params.MasterZone)
            this.MasterZone = obj;
        }

        if (params.SlaveZones) {
            this.SlaveZones = new Array();
            for (let z in params.SlaveZones) {
                let obj = new ZonesInfo();
                obj.deserialize(params.SlaveZones[z]);
                this.SlaveZones.push(obj);
            }
        }

    }
}

/**
 * ModifyAccountDescription返回参数结构体
 * @class
 */
class ModifyAccountDescriptionResponse extends  AbstractModel {
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
 * DescribeDBResourceUsage请求参数结构体
 * @class
 */
class DescribeDBResourceUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始日期，格式yyyy-mm-dd
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束日期，格式yyyy-mm-dd
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 拉取的指标名称，支持的值为：data_disk_available,binlog_disk_available,mem_available,cpu_usage_rate
         * @type {string || null}
         */
        this.MetricName = null;

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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * 参数约束
 * @class
 */
class ParamConstraint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 约束类型,如枚举enum，区间section
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 约束类型为enum时的可选值列表
         * @type {string || null}
         */
        this.Enum = null;

        /**
         * 约束类型为section时的范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConstraintRange || null}
         */
        this.Range = null;

        /**
         * 约束类型为string时的可选值列表
         * @type {string || null}
         */
        this.String = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Enum = 'Enum' in params ? params.Enum : null;

        if (params.Range) {
            let obj = new ConstraintRange();
            obj.deserialize(params.Range)
            this.Range = obj;
        }
        this.String = 'String' in params ? params.String : null;

    }
}

/**
 * ModifyDBInstancesProject返回参数结构体
 * @class
 */
class ModifyDBInstancesProjectResponse extends  AbstractModel {
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
 * 云数据库实例备份时间配置信息
 * @class
 */
class DBBackupTimeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 每天备份执行的区间的开始时间，格式 mm:ss，形如 22:00
         * @type {string || null}
         */
        this.StartBackupTime = null;

        /**
         * 每天备份执行的区间的结束时间，格式 mm:ss，形如 23:00
         * @type {string || null}
         */
        this.EndBackupTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartBackupTime = 'StartBackupTime' in params ? params.StartBackupTime : null;
        this.EndBackupTime = 'EndBackupTime' in params ? params.EndBackupTime : null;

    }
}

/**
 * DescribeDBLogFiles请求参数结构体
 * @class
 */
class DescribeDBLogFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。
         * @type {number || null}
         */
        this.Type = null;

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

    }
}

/**
 * DescribeDBResourceUsage返回参数结构体
 * @class
 */
class DescribeDBResourceUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * binlog日志磁盘可用空间,单位GB
         * @type {MonitorData || null}
         */
        this.BinlogDiskAvailable = null;

        /**
         * 磁盘可用空间,单位GB
         * @type {MonitorData || null}
         */
        this.DataDiskAvailable = null;

        /**
         * CPU利用率
         * @type {MonitorData || null}
         */
        this.CpuUsageRate = null;

        /**
         * 内存可用空间,单位GB
         * @type {MonitorData || null}
         */
        this.MemAvailable = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BinlogDiskAvailable) {
            let obj = new MonitorData();
            obj.deserialize(params.BinlogDiskAvailable)
            this.BinlogDiskAvailable = obj;
        }

        if (params.DataDiskAvailable) {
            let obj = new MonitorData();
            obj.deserialize(params.DataDiskAvailable)
            this.DataDiskAvailable = obj;
        }

        if (params.CpuUsageRate) {
            let obj = new MonitorData();
            obj.deserialize(params.CpuUsageRate)
            this.CpuUsageRate = obj;
        }

        if (params.MemAvailable) {
            let obj = new MonitorData();
            obj.deserialize(params.MemAvailable)
            this.MemAvailable = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 返回的订单数量。
         * @type {Array.<number> || null}
         */
        this.TotalCount = null;

        /**
         * 订单信息列表。
         * @type {Array.<Deal> || null}
         */
        this.Deals = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new Deal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 新密码，由字母、数字或常见符号组成，不能包含分号、单引号和双引号，长度为6~32位。
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
        this.Host = 'Host' in params ? params.Host : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * CopyAccountPrivileges返回参数结构体
 * @class
 */
class CopyAccountPrivilegesResponse extends  AbstractModel {
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
 * CloneAccount请求参数结构体
 * @class
 */
class CloneAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 源用户账户名
         * @type {string || null}
         */
        this.SrcUser = null;

        /**
         * 源用户HOST
         * @type {string || null}
         */
        this.SrcHost = null;

        /**
         * 目的用户账户名
         * @type {string || null}
         */
        this.DstUser = null;

        /**
         * 目的用户HOST
         * @type {string || null}
         */
        this.DstHost = null;

        /**
         * 目的用户账户描述
         * @type {string || null}
         */
        this.DstDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SrcUser = 'SrcUser' in params ? params.SrcUser : null;
        this.SrcHost = 'SrcHost' in params ? params.SrcHost : null;
        this.DstUser = 'DstUser' in params ? params.DstUser : null;
        this.DstHost = 'DstHost' in params ? params.DstHost : null;
        this.DstDesc = 'DstDesc' in params ? params.DstDesc : null;

    }
}

/**
 * 修改参数结果
 * @class
 */
class ParamModifyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改参数名字
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 参数修改结果。0表示修改成功；-1表示修改失败；-2表示该参数值非法
         * @type {number || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Param = 'Param' in params ? params.Param : null;
        this.Code = 'Code' in params ? params.Code : null;

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
         * 按照一个或者多个实例 ID 查询。实例 ID 形如：tdsql-ow728lmc。每次请求的实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 搜索的字段名，当前支持的值有：instancename、vip、all。传 instancename 表示按实例名进行搜索；传 vip 表示按内网IP进行搜索；传 all 将会按实例ID、实例名和内网IP进行搜索。
         * @type {string || null}
         */
        this.SearchName = null;

        /**
         * 搜索的关键字，支持模糊搜索。多个关键字使用换行符（'\n'）分割。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 按项目 ID 查询
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 是否根据 VPC 网络来搜索
         * @type {boolean || null}
         */
        this.IsFilterVpc = null;

        /**
         * 私有网络 ID， IsFilterVpc 为 1 时有效
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络的子网 ID， IsFilterVpc 为 1 时有效
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 排序字段， projectId， createtime， instancename 三者之一
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型， desc 或者 asc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按 OriginSerialId 查询
         * @type {Array.<string> || null}
         */
        this.OriginSerialIds = null;

        /**
         * 标识是否使用ExclusterType字段, false不使用，true使用
         * @type {boolean || null}
         */
        this.IsFilterExcluster = null;

        /**
         * 实例所属独享集群类型。取值范围：1-非独享集群，2-独享集群， 0-全部
         * @type {number || null}
         */
        this.ExclusterType = null;

        /**
         * 按独享集群Id过滤实例，独享集群Id形如dbdc-4ih6uct9
         * @type {Array.<string> || null}
         */
        this.ExclusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.SearchName = 'SearchName' in params ? params.SearchName : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.IsFilterVpc = 'IsFilterVpc' in params ? params.IsFilterVpc : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OriginSerialIds = 'OriginSerialIds' in params ? params.OriginSerialIds : null;
        this.IsFilterExcluster = 'IsFilterExcluster' in params ? params.IsFilterExcluster : null;
        this.ExclusterType = 'ExclusterType' in params ? params.ExclusterType : null;
        this.ExclusterIds = 'ExclusterIds' in params ? params.ExclusterIds : null;

    }
}

/**
 * DescribeSaleInfo请求参数结构体
 * @class
 */
class DescribeSaleInfoRequest extends  AbstractModel {
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
 * RenewDBInstance请求参数结构体
 * @class
 */
class RenewDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
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
 * DescribeSqlLogs请求参数结构体
 * @class
 */
class DescribeSqlLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * SQL日志偏移。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取数量（0-10000，为0时拉取总数信息）。
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
 * DescribePrice请求参数结构体
 * @class
 */
class DescribePriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 欲新购实例的可用区ID。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例节点个数，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 欲购买的时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 欲购买的数量，默认查询购买1个实例的价格。
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Count = 'Count' in params ? params.Count : null;

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
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupTime请求参数结构体
 * @class
 */
class DescribeBackupTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeSaleInfo返回参数结构体
 * @class
 */
class DescribeSaleInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可售卖地域信息列表
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 订单信息
 * @class
 */
class Deal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 所属账号
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 商品数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 关联的流程 Id，可用于查询流程执行状态
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 只有创建实例的订单会填充该字段，表示该订单创建的实例的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 付费模式，0后付费/1预付费
         * @type {number || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * GrantAccountPrivileges请求参数结构体
 * @class
 */
class GrantAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 数据库名。如果为 \*，表示设置全局权限（即 \*.\*），此时忽略 Type 和 Object 参数。当DbName不为\*时，需要传入参 Type。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 全局权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER，SHOW DATABASES 
库权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER 
表/视图权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE VIEW，SHOW VIEW，TRIGGER 
存储过程/函数权限： ALTER ROUTINE，EXECUTE 
字段权限： INSERT，REFERENCES，SELECT，UPDATE
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示设置该数据库权限（即db.\*），此时忽略 Object 参数
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 具体的 Type 的名称，比如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空
         * @type {string || null}
         */
        this.Object = null;

        /**
         * 当 Type=table 时，ColName 为 \* 表示对表授权，如果为具体字段名，表示对字段授权
         * @type {string || null}
         */
        this.ColName = null;

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
        this.Host = 'Host' in params ? params.Host : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Object = 'Object' in params ? params.Object : null;
        this.ColName = 'ColName' in params ? params.ColName : null;

    }
}

/**
 * 云数据库参数信息。
 * @class
 */
class DBParamValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 参数值
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
        this.Param = 'Param' in params ? params.Param : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 实例可售卖规格详细信息，创建实例和扩容实例时 Pid+MemSize 唯一确定一种售卖规格，磁盘大小可用区间为[MinDataDisk,MaxDataDisk]
 * @class
 */
class SpecConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备型号
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 数据盘规格最小值，单位 GB
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * 数据盘规格最大值，单位 GB
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * 推荐的使用场景
         * @type {string || null}
         */
        this.SuitInfo = null;

        /**
         * 最大 Qps 值
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 产品类型 Id
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 节点个数，2 表示一主一从，3 表示一主二从
         * @type {number || null}
         */
        this.NodeCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.SuitInfo = 'SuitInfo' in params ? params.SuitInfo : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;

    }
}

/**
 * ModifyDBParameters请求参数结构体
 * @class
 */
class ModifyDBParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 参数列表，每一个元素是Param和Value的组合
         * @type {Array.<DBParamValue> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new DBParamValue();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * 可用区信息
 * @class
 */
class ZonesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区英文ID
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区数字ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区中文名
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * ModifyDBParameters返回参数结构体
 * @class
 */
class ModifyDBParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 参数修改结果
         * @type {Array.<ParamModifyResult> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new ParamModifyResult();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CopyAccountPrivileges请求参数结构体
 * @class
 */
class CopyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 源用户名
         * @type {string || null}
         */
        this.SrcUserName = null;

        /**
         * 源用户允许的访问 host
         * @type {string || null}
         */
        this.SrcHost = null;

        /**
         * 目的用户名
         * @type {string || null}
         */
        this.DstUserName = null;

        /**
         * 目的用户允许的访问 host
         * @type {string || null}
         */
        this.DstHost = null;

        /**
         * 源账号的 ReadOnly 属性
         * @type {string || null}
         */
        this.SrcReadOnly = null;

        /**
         * 目的账号的 ReadOnly 属性
         * @type {string || null}
         */
        this.DstReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SrcUserName = 'SrcUserName' in params ? params.SrcUserName : null;
        this.SrcHost = 'SrcHost' in params ? params.SrcHost : null;
        this.DstUserName = 'DstUserName' in params ? params.DstUserName : null;
        this.DstHost = 'DstHost' in params ? params.DstHost : null;
        this.SrcReadOnly = 'SrcReadOnly' in params ? params.SrcReadOnly : null;
        this.DstReadOnly = 'DstReadOnly' in params ? params.DstReadOnly : null;

    }
}

/**
 * OpenDBExtranetAccess返回参数结构体
 * @class
 */
class OpenDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务Id，可通过 DescribeFlow 查询任务状态。
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
 * ModifyDBInstanceName请求参数结构体
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的实例 ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 新的实例名称。允许的字符为字母、数字、下划线、连字符和中文。
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
 * ModifyBackupTime请求参数结构体
 * @class
 */
class ModifyBackupTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 每天备份执行的区间的开始时间，格式 mm:ss，形如 22:00
         * @type {string || null}
         */
        this.StartBackupTime = null;

        /**
         * 每天备份执行的区间的结束时间，格式 mm:ss，形如 23:59
         * @type {string || null}
         */
        this.EndBackupTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartBackupTime = 'StartBackupTime' in params ? params.StartBackupTime : null;
        this.EndBackupTime = 'EndBackupTime' in params ? params.EndBackupTime : null;

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
         * 待升级的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
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
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * DescribeUpgradePrice返回参数结构体
 * @class
 */
class DescribeUpgradePriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，单位：分。受折扣等影响，可能和原价不同。
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
 * 描述云数据库实例的详细信息。
 * @class
 */
class DBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id，唯一标识一个 TDSQL 实例
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称，用户可修改
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例所属应用 Id
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 实例所属项目 Id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例所在地域名称，如 ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例所在可用区名称，如 ap-shanghai-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 私有网络 Id，基础网络时为 0
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 子网 Id，基础网络时为 0
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 实例状态：0 创建中，1 流程处理中， 2 运行中，3 实例未初始化，-1 实例已隔离，-2 实例已删除
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 内网 IP 地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 内网端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 外网访问的域名，公网可解析
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * 外网 IP 地址，公网可访问
         * @type {string || null}
         */
        this.WanVip = null;

        /**
         * 外网端口
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * 实例创建时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例最后更新时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 自动续费标志：0 否，1 是
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 实例到期时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 实例所属账号
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * TDSQL 版本信息
         * @type {string || null}
         */
        this.TdsqlVersion = null;

        /**
         * 实例内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例存储大小，单位 GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 字符串型的私有网络Id
         * @type {string || null}
         */
        this.UniqueVpcId = null;

        /**
         * 字符串型的私有网络子网Id
         * @type {string || null}
         */
        this.UniqueSubnetId = null;

        /**
         * 原始实例ID（过时字段，请勿依赖该值）
         * @type {string || null}
         */
        this.OriginSerialId = null;

        /**
         * 节点数，2为一主一从，3为一主二从
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 是否临时实例，0为否，非0为是
         * @type {number || null}
         */
        this.IsTmp = null;

        /**
         * 独享集群Id，为空表示为普通实例
         * @type {string || null}
         */
        this.ExclusterId = null;

        /**
         * 数字实例Id（过时字段，请勿依赖该值）
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 产品类型 Id
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 最大 Qps 值
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 付费模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Paymode = null;

        /**
         * 实例处于异步任务时的异步任务流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Locker = null;

        /**
         * 实例目前运行状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 外网状态，0-未开通；1-已开通；2-关闭；3-开通中
         * @type {number || null}
         */
        this.WanStatus = null;

        /**
         * 该实例是否支持审计。1-支持；0-不支持
         * @type {number || null}
         */
        this.IsAuditSupported = null;

        /**
         * 机器型号
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 是否支持数据加密。1-支持；0-不支持
         * @type {number || null}
         */
        this.IsEncryptSupported = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanVip = 'WanVip' in params ? params.WanVip : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.TdsqlVersion = 'TdsqlVersion' in params ? params.TdsqlVersion : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.UniqueVpcId = 'UniqueVpcId' in params ? params.UniqueVpcId : null;
        this.UniqueSubnetId = 'UniqueSubnetId' in params ? params.UniqueSubnetId : null;
        this.OriginSerialId = 'OriginSerialId' in params ? params.OriginSerialId : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.IsTmp = 'IsTmp' in params ? params.IsTmp : null;
        this.ExclusterId = 'ExclusterId' in params ? params.ExclusterId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;
        this.Locker = 'Locker' in params ? params.Locker : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.IsAuditSupported = 'IsAuditSupported' in params ? params.IsAuditSupported : null;
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.IsEncryptSupported = 'IsEncryptSupported' in params ? params.IsEncryptSupported : null;

    }
}

/**
 * DescribePrice返回参数结构体
 * @class
 */
class DescribePriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，单位：分。受折扣等影响，可能和原价不同。
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
 * InitDBInstances请求参数结构体
 * @class
 */
class InitDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待初始化的实例Id列表，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步）。
         * @type {Array.<DBParamValue> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new DBParamValue();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * ModifyBackupTime返回参数结构体
 * @class
 */
class ModifyBackupTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置的状态，0 表示成功
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
 * DescribeDBInstanceSpecs请求参数结构体
 * @class
 */
class DescribeDBInstanceSpecsRequest extends  AbstractModel {
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
 * GrantAccountPrivileges返回参数结构体
 * @class
 */
class GrantAccountPrivilegesResponse extends  AbstractModel {
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
 * OpenDBExtranetAccess请求参数结构体
 * @class
 */
class OpenDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待开放外网访问的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
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
 * CloseDBExtranetAccess返回参数结构体
 * @class
 */
class CloseDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务Id，可通过 DescribeFlow 查询任务状态。
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
 * ModifyAccountDescription请求参数结构体
 * @class
 */
class ModifyAccountDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 新的账号备注，长度 0~256。
         * @type {string || null}
         */
        this.Description = null;

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
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeDBPerformanceDetails请求参数结构体
 * @class
 */
class DescribeDBPerformanceDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始日期，格式yyyy-mm-dd
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束日期，格式yyyy-mm-dd
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 拉取的指标名，支持的值为：long_query,select_total,update_total,insert_total,delete_total,mem_hit_rate,disk_iops,conn_active,is_master_switched,slave_delay
         * @type {string || null}
         */
        this.MetricName = null;

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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * DescribeBackupTime返回参数结构体
 * @class
 */
class DescribeBackupTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的配置数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例备份时间配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DBBackupTimeConfig> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DBBackupTimeConfig();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 慢查询条目信息
 * @class
 */
class SlowLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语句校验和，用于查询详情
         * @type {string || null}
         */
        this.CheckSum = null;

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 抽象的SQL语句
         * @type {string || null}
         */
        this.FingerPrint = null;

        /**
         * 平均的锁时间
         * @type {string || null}
         */
        this.LockTimeAvg = null;

        /**
         * 最大锁时间
         * @type {string || null}
         */
        this.LockTimeMax = null;

        /**
         * 最小锁时间
         * @type {string || null}
         */
        this.LockTimeMin = null;

        /**
         * 锁时间总和
         * @type {string || null}
         */
        this.LockTimeSum = null;

        /**
         * 查询次数
         * @type {string || null}
         */
        this.QueryCount = null;

        /**
         * 平均查询时间
         * @type {string || null}
         */
        this.QueryTimeAvg = null;

        /**
         * 最大查询时间
         * @type {string || null}
         */
        this.QueryTimeMax = null;

        /**
         * 最小查询时间
         * @type {string || null}
         */
        this.QueryTimeMin = null;

        /**
         * 查询时间总和
         * @type {string || null}
         */
        this.QueryTimeSum = null;

        /**
         * 扫描行数
         * @type {string || null}
         */
        this.RowsExaminedSum = null;

        /**
         * 发送行数
         * @type {string || null}
         */
        this.RowsSentSum = null;

        /**
         * 最后执行时间
         * @type {string || null}
         */
        this.TsMax = null;

        /**
         * 首次执行时间
         * @type {string || null}
         */
        this.TsMin = null;

        /**
         * 帐号
         * @type {string || null}
         */
        this.User = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckSum = 'CheckSum' in params ? params.CheckSum : null;
        this.Db = 'Db' in params ? params.Db : null;
        this.FingerPrint = 'FingerPrint' in params ? params.FingerPrint : null;
        this.LockTimeAvg = 'LockTimeAvg' in params ? params.LockTimeAvg : null;
        this.LockTimeMax = 'LockTimeMax' in params ? params.LockTimeMax : null;
        this.LockTimeMin = 'LockTimeMin' in params ? params.LockTimeMin : null;
        this.LockTimeSum = 'LockTimeSum' in params ? params.LockTimeSum : null;
        this.QueryCount = 'QueryCount' in params ? params.QueryCount : null;
        this.QueryTimeAvg = 'QueryTimeAvg' in params ? params.QueryTimeAvg : null;
        this.QueryTimeMax = 'QueryTimeMax' in params ? params.QueryTimeMax : null;
        this.QueryTimeMin = 'QueryTimeMin' in params ? params.QueryTimeMin : null;
        this.QueryTimeSum = 'QueryTimeSum' in params ? params.QueryTimeSum : null;
        this.RowsExaminedSum = 'RowsExaminedSum' in params ? params.RowsExaminedSum : null;
        this.RowsSentSum = 'RowsSentSum' in params ? params.RowsSentSum : null;
        this.TsMax = 'TsMax' in params ? params.TsMax : null;
        this.TsMin = 'TsMin' in params ? params.TsMin : null;
        this.User = 'User' in params ? params.User : null;

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
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
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
 * DescribeOrders请求参数结构体
 * @class
 */
class DescribeOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的长订单号列表，创建实例、续费实例、扩容实例接口返回。
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
 * DescribeDBLogFiles返回参数结构体
 * @class
 */
class DescribeDBLogFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 请求日志总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 包含uri、length、mtime（修改时间）等信息
         * @type {Array.<LogFileInfo> || null}
         */
        this.Files = null;

        /**
         * 如果是VPC网络的实例，做用本前缀加上URI为下载地址
         * @type {string || null}
         */
        this.VpcPrefix = null;

        /**
         * 如果是普通网络的实例，做用本前缀加上URI为下载地址
         * @type {string || null}
         */
        this.NormalPrefix = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new LogFileInfo();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }
        this.VpcPrefix = 'VpcPrefix' in params ? params.VpcPrefix : null;
        this.NormalPrefix = 'NormalPrefix' in params ? params.NormalPrefix : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseDBExtranetAccess请求参数结构体
 * @class
 */
class CloseDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待关闭外网访问的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
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
 * DescribeSqlLogs返回参数结构体
 * @class
 */
class DescribeSqlLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前消息队列中的sql日志条目数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 消息队列中的sql日志起始偏移。
         * @type {number || null}
         */
        this.StartOffset = null;

        /**
         * 消息队列中的sql日志结束偏移。
         * @type {number || null}
         */
        this.EndOffset = null;

        /**
         * 返回的第一条sql日志的偏移。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回的sql日志数量。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Sql日志列表。
         * @type {Array.<SqlLogItem> || null}
         */
        this.SqlItems = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.StartOffset = 'StartOffset' in params ? params.StartOffset : null;
        this.EndOffset = 'EndOffset' in params ? params.EndOffset : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Count = 'Count' in params ? params.Count : null;

        if (params.SqlItems) {
            this.SqlItems = new Array();
            for (let z in params.SqlItems) {
                let obj = new SqlLogItem();
                obj.deserialize(params.SqlItems[z]);
                this.SqlItems.push(obj);
            }
        }
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
         * 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * 按机型归类的实例可售卖规格信息
 * @class
 */
class InstanceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备型号
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 该机型对应的可售卖规格列表
         * @type {Array.<SpecConfigInfo> || null}
         */
        this.SpecInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Machine = 'Machine' in params ? params.Machine : null;

        if (params.SpecInfos) {
            this.SpecInfos = new Array();
            for (let z in params.SpecInfos) {
                let obj = new SpecConfigInfo();
                obj.deserialize(params.SpecInfos[z]);
                this.SpecInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeFlow请求参数结构体
 * @class
 */
class DescribeFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步请求接口返回的任务流程号。
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
 * DescribeDBPerformance返回参数结构体
 * @class
 */
class DescribeDBPerformanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询数
         * @type {MonitorData || null}
         */
        this.LongQuery = null;

        /**
         * 查询操作数SELECT
         * @type {MonitorData || null}
         */
        this.SelectTotal = null;

        /**
         * 更新操作数UPDATE
         * @type {MonitorData || null}
         */
        this.UpdateTotal = null;

        /**
         * 插入操作数INSERT
         * @type {MonitorData || null}
         */
        this.InsertTotal = null;

        /**
         * 删除操作数DELETE
         * @type {MonitorData || null}
         */
        this.DeleteTotal = null;

        /**
         * 缓存命中率
         * @type {MonitorData || null}
         */
        this.MemHitRate = null;

        /**
         * 磁盘每秒IO次数
         * @type {MonitorData || null}
         */
        this.DiskIops = null;

        /**
         * 活跃连接数
         * @type {MonitorData || null}
         */
        this.ConnActive = null;

        /**
         * 是否发生主备切换，1为发生，0否
         * @type {MonitorData || null}
         */
        this.IsMasterSwitched = null;

        /**
         * 主备延迟
         * @type {MonitorData || null}
         */
        this.SlaveDelay = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LongQuery) {
            let obj = new MonitorData();
            obj.deserialize(params.LongQuery)
            this.LongQuery = obj;
        }

        if (params.SelectTotal) {
            let obj = new MonitorData();
            obj.deserialize(params.SelectTotal)
            this.SelectTotal = obj;
        }

        if (params.UpdateTotal) {
            let obj = new MonitorData();
            obj.deserialize(params.UpdateTotal)
            this.UpdateTotal = obj;
        }

        if (params.InsertTotal) {
            let obj = new MonitorData();
            obj.deserialize(params.InsertTotal)
            this.InsertTotal = obj;
        }

        if (params.DeleteTotal) {
            let obj = new MonitorData();
            obj.deserialize(params.DeleteTotal)
            this.DeleteTotal = obj;
        }

        if (params.MemHitRate) {
            let obj = new MonitorData();
            obj.deserialize(params.MemHitRate)
            this.MemHitRate = obj;
        }

        if (params.DiskIops) {
            let obj = new MonitorData();
            obj.deserialize(params.DiskIops)
            this.DiskIops = obj;
        }

        if (params.ConnActive) {
            let obj = new MonitorData();
            obj.deserialize(params.ConnActive)
            this.ConnActive = obj;
        }

        if (params.IsMasterSwitched) {
            let obj = new MonitorData();
            obj.deserialize(params.IsMasterSwitched)
            this.IsMasterSwitched = obj;
        }

        if (params.SlaveDelay) {
            let obj = new MonitorData();
            obj.deserialize(params.SlaveDelay)
            this.SlaveDelay = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DB参数描述
 * @class
 */
class ParamDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名字
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 当前参数值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 设置过的值，参数生效后，该值和value一样。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SetValue = null;

        /**
         * 系统默认值
         * @type {string || null}
         */
        this.Default = null;

        /**
         * 参数限制
         * @type {ParamConstraint || null}
         */
        this.Constraint = null;

        /**
         * 是否有设置过值，false:没有设置过值，true:有设置过值。
         * @type {boolean || null}
         */
        this.HaveSetValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Param = 'Param' in params ? params.Param : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.SetValue = 'SetValue' in params ? params.SetValue : null;
        this.Default = 'Default' in params ? params.Default : null;

        if (params.Constraint) {
            let obj = new ParamConstraint();
            obj.deserialize(params.Constraint)
            this.Constraint = obj;
        }
        this.HaveSetValue = 'HaveSetValue' in params ? params.HaveSetValue : null;

    }
}

/**
 * DescribeLogFileRetentionPeriod返回参数结构体
 * @class
 */
class DescribeLogFileRetentionPeriodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 日志备份天数
         * @type {number || null}
         */
        this.Days = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Days = 'Days' in params ? params.Days : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 售卖可用区信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域英文ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域数字ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域中文名
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 可用区列表
         * @type {Array.<ZonesInfo> || null}
         */
        this.ZoneList = null;

        /**
         * 可选择的主可用区和从可用区
         * @type {Array.<ZoneChooseInfo> || null}
         */
        this.AvailableChoice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new ZonesInfo();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }

        if (params.AvailableChoice) {
            this.AvailableChoice = new Array();
            for (let z in params.AvailableChoice) {
                let obj = new ZoneChooseInfo();
                obj.deserialize(params.AvailableChoice[z]);
                this.AvailableChoice.push(obj);
            }
        }

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
         * 符合条件的实例数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         * @type {Array.<DBInstance> || null}
         */
        this.Instances = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new DBInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 约束类型值的范围
 * @class
 */
class ConstraintRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 约束类型为section时的最小值
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 约束类型为section时的最大值
         * @type {string || null}
         */
        this.Max = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;

    }
}

/**
 * DescribeRenewalPrice请求参数结构体
 * @class
 */
class DescribeRenewalPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月。不传则默认为1个月。
         * @type {number || null}
         */
        this.Period = null;

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

    }
}

/**
 * 拉取的日志信息
 * @class
 */
class LogFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log最后修改时间
         * @type {number || null}
         */
        this.Mtime = null;

        /**
         * 文件长度
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 下载Log时用到的统一资源标识符
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mtime = 'Mtime' in params ? params.Mtime : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * DescribeDBResourceUsageDetails请求参数结构体
 * @class
 */
class DescribeDBResourceUsageDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始日期，格式yyyy-mm-dd
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束日期，格式yyyy-mm-dd
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 拉取的指标名称，支持的值为：data_disk_available,binlog_disk_available,mem_available,cpu_usage_rate
         * @type {string || null}
         */
        this.MetricName = null;

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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * 云数据库账号信息
 * @class
 */
class DBAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户可以从哪台主机登录（对应 MySQL 用户的 host 字段，UserName + Host 唯一标识一个用户，IP形式，IP段以%结尾；支持填入%；为空默认等于%）
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 用户备注信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 只读标记，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 该字段对只读帐号有意义，表示选择主备延迟小于该值的备机
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayThresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.DelayThresh = 'DelayThresh' in params ? params.DelayThresh : null;

    }
}

/**
 * DescribeAccountPrivileges请求参数结构体
 * @class
 */
class DescribeAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示查询该数据库权限（即db.\*），此时忽略 Object 参数
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 具体的 Type 的名称，比如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空
         * @type {string || null}
         */
        this.Object = null;

        /**
         * 当 Type=table 时，ColName 为 \* 表示查询表的权限，如果为具体字段名，表示查询对应字段的权限
         * @type {string || null}
         */
        this.ColName = null;

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
        this.Host = 'Host' in params ? params.Host : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Object = 'Object' in params ? params.Object : null;
        this.ColName = 'ColName' in params ? params.ColName : null;

    }
}

/**
 * DescribeDBPerformanceDetails返回参数结构体
 * @class
 */
class DescribeDBPerformanceDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主节点性能监控数据
         * @type {PerformanceMonitorSet || null}
         */
        this.Master = null;

        /**
         * 备机1性能监控数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PerformanceMonitorSet || null}
         */
        this.Slave1 = null;

        /**
         * 备机2性能监控数据，如果实例是一主一从，则没有该字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PerformanceMonitorSet || null}
         */
        this.Slave2 = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Master) {
            let obj = new PerformanceMonitorSet();
            obj.deserialize(params.Master)
            this.Master = obj;
        }

        if (params.Slave1) {
            let obj = new PerformanceMonitorSet();
            obj.deserialize(params.Slave1)
            this.Slave1 = obj;
        }

        if (params.Slave2) {
            let obj = new PerformanceMonitorSet();
            obj.deserialize(params.Slave2)
            this.Slave2 = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述一条sql日志的详细信息。
 * @class
 */
class SqlLogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本条日志在消息队列中的偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 执行本条sql的用户。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 执行本条sql的客户端IP+端口。
         * @type {string || null}
         */
        this.Client = null;

        /**
         * 数据库名称。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 执行的sql语句。
         * @type {string || null}
         */
        this.Sql = null;

        /**
         * 返回的数据行数。
         * @type {number || null}
         */
        this.SelectRowNum = null;

        /**
         * 影响行数。
         * @type {number || null}
         */
        this.AffectRowNum = null;

        /**
         * Sql执行时间戳。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Sql耗时，单位为毫秒。
         * @type {number || null}
         */
        this.TimeCostMs = null;

        /**
         * Sql返回码，0为成功。
         * @type {number || null}
         */
        this.ResultCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.User = 'User' in params ? params.User : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Sql = 'Sql' in params ? params.Sql : null;
        this.SelectRowNum = 'SelectRowNum' in params ? params.SelectRowNum : null;
        this.AffectRowNum = 'AffectRowNum' in params ? params.AffectRowNum : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.TimeCostMs = 'TimeCostMs' in params ? params.TimeCostMs : null;
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;

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
         * 实例ID，透传入参。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例用户列表。
         * @type {Array.<DBAccount> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new DBAccount();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSlowLogs返回参数结构体
 * @class
 */
class DescribeDBSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询日志数据
         * @type {Array.<SlowLogData> || null}
         */
        this.Data = null;

        /**
         * 所有语句锁时间总和
         * @type {number || null}
         */
        this.LockTimeSum = null;

        /**
         * 所有语句查询总次数
         * @type {number || null}
         */
        this.QueryCount = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 所有语句查询时间总和
         * @type {number || null}
         */
        this.QueryTimeSum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SlowLogData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.LockTimeSum = 'LockTimeSum' in params ? params.LockTimeSum : null;
        this.QueryCount = 'QueryCount' in params ? params.QueryCount : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.QueryTimeSum = 'QueryTimeSum' in params ? params.QueryTimeSum : null;
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
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
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
 * DescribeLogFileRetentionPeriod请求参数结构体
 * @class
 */
class DescribeLogFileRetentionPeriodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
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
 * ModifyDBInstancesProject请求参数结构体
 * @class
 */
class ModifyDBInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的实例ID列表。实例 ID 形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 要分配的项目 ID，可以通过 DescribeProjects 查询项目列表接口获取。
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
 * 监控数据
 * @class
 */
class MonitorData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间，形如 2018-03-24 23:59:59
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，形如 2018-03-24 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 监控数据
         * @type {Array.<number> || null}
         */
        this.Data = null;

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
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * ModifyLogFileRetentionPeriod返回参数结构体
 * @class
 */
class ModifyLogFileRetentionPeriodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
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
 * DescribeDBPerformance请求参数结构体
 * @class
 */
class DescribeDBPerformanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始日期，格式yyyy-mm-dd
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束日期，格式yyyy-mm-dd
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 拉取的指标名，支持的值为：long_query,select_total,update_total,insert_total,delete_total,mem_hit_rate,disk_iops,conn_active,is_master_switched,slave_delay
         * @type {string || null}
         */
        this.MetricName = null;

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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    DescribeAccountPrivilegesResponse: DescribeAccountPrivilegesResponse,
    CreateAccountResponse: CreateAccountResponse,
    DescribeDBParametersRequest: DescribeDBParametersRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    DescribeRenewalPriceResponse: DescribeRenewalPriceResponse,
    DescribeUpgradePriceRequest: DescribeUpgradePriceRequest,
    DescribeDBResourceUsageDetailsResponse: DescribeDBResourceUsageDetailsResponse,
    DescribeDBInstanceSpecsResponse: DescribeDBInstanceSpecsResponse,
    DescribeDBSlowLogsRequest: DescribeDBSlowLogsRequest,
    CreateAccountRequest: CreateAccountRequest,
    InitDBInstancesResponse: InitDBInstancesResponse,
    DescribeDBParametersResponse: DescribeDBParametersResponse,
    ResourceUsageMonitorSet: ResourceUsageMonitorSet,
    ModifyLogFileRetentionPeriodRequest: ModifyLogFileRetentionPeriodRequest,
    PerformanceMonitorSet: PerformanceMonitorSet,
    DescribeFlowResponse: DescribeFlowResponse,
    CloneAccountResponse: CloneAccountResponse,
    ZoneChooseInfo: ZoneChooseInfo,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    DescribeDBResourceUsageRequest: DescribeDBResourceUsageRequest,
    ParamConstraint: ParamConstraint,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    DBBackupTimeConfig: DBBackupTimeConfig,
    DescribeDBLogFilesRequest: DescribeDBLogFilesRequest,
    DescribeDBResourceUsageResponse: DescribeDBResourceUsageResponse,
    DescribeOrdersResponse: DescribeOrdersResponse,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    CopyAccountPrivilegesResponse: CopyAccountPrivilegesResponse,
    CloneAccountRequest: CloneAccountRequest,
    ParamModifyResult: ParamModifyResult,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeSaleInfoRequest: DescribeSaleInfoRequest,
    RenewDBInstanceRequest: RenewDBInstanceRequest,
    DescribeSqlLogsRequest: DescribeSqlLogsRequest,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    DescribePriceRequest: DescribePriceRequest,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    DescribeBackupTimeRequest: DescribeBackupTimeRequest,
    DescribeSaleInfoResponse: DescribeSaleInfoResponse,
    Deal: Deal,
    GrantAccountPrivilegesRequest: GrantAccountPrivilegesRequest,
    DBParamValue: DBParamValue,
    SpecConfigInfo: SpecConfigInfo,
    ModifyDBParametersRequest: ModifyDBParametersRequest,
    ZonesInfo: ZonesInfo,
    ModifyDBParametersResponse: ModifyDBParametersResponse,
    CopyAccountPrivilegesRequest: CopyAccountPrivilegesRequest,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    ModifyBackupTimeRequest: ModifyBackupTimeRequest,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    DescribeUpgradePriceResponse: DescribeUpgradePriceResponse,
    DBInstance: DBInstance,
    DescribePriceResponse: DescribePriceResponse,
    InitDBInstancesRequest: InitDBInstancesRequest,
    ModifyBackupTimeResponse: ModifyBackupTimeResponse,
    DescribeDBInstanceSpecsRequest: DescribeDBInstanceSpecsRequest,
    GrantAccountPrivilegesResponse: GrantAccountPrivilegesResponse,
    OpenDBExtranetAccessRequest: OpenDBExtranetAccessRequest,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    DescribeDBPerformanceDetailsRequest: DescribeDBPerformanceDetailsRequest,
    DescribeBackupTimeResponse: DescribeBackupTimeResponse,
    SlowLogData: SlowLogData,
    RenewDBInstanceResponse: RenewDBInstanceResponse,
    DescribeOrdersRequest: DescribeOrdersRequest,
    DescribeDBLogFilesResponse: DescribeDBLogFilesResponse,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    DescribeSqlLogsResponse: DescribeSqlLogsResponse,
    DeleteAccountRequest: DeleteAccountRequest,
    InstanceSpec: InstanceSpec,
    DescribeFlowRequest: DescribeFlowRequest,
    DescribeDBPerformanceResponse: DescribeDBPerformanceResponse,
    ParamDesc: ParamDesc,
    DescribeLogFileRetentionPeriodResponse: DescribeLogFileRetentionPeriodResponse,
    RegionInfo: RegionInfo,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    ConstraintRange: ConstraintRange,
    DescribeRenewalPriceRequest: DescribeRenewalPriceRequest,
    LogFileInfo: LogFileInfo,
    DescribeDBResourceUsageDetailsRequest: DescribeDBResourceUsageDetailsRequest,
    DBAccount: DBAccount,
    DescribeAccountPrivilegesRequest: DescribeAccountPrivilegesRequest,
    DescribeDBPerformanceDetailsResponse: DescribeDBPerformanceDetailsResponse,
    SqlLogItem: SqlLogItem,
    DescribeAccountsResponse: DescribeAccountsResponse,
    DescribeDBSlowLogsResponse: DescribeDBSlowLogsResponse,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    DescribeLogFileRetentionPeriodRequest: DescribeLogFileRetentionPeriodRequest,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    MonitorData: MonitorData,
    ModifyLogFileRetentionPeriodResponse: ModifyLogFileRetentionPeriodResponse,
    DescribeDBPerformanceRequest: DescribeDBPerformanceRequest,
    DeleteAccountResponse: DeleteAccountResponse,

}
