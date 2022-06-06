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
 * 集群设备组信息。
 * @class
 */
class InstanceDeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 读写设备组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceInfo> || null}
         */
        this.ReadWriteDevice = null;

        /**
         * 只读设备组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceInfo> || null}
         */
        this.ReadOnlyDevice = null;

        /**
         * 空闲设备组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceInfo> || null}
         */
        this.FreeDevice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ReadWriteDevice) {
            this.ReadWriteDevice = new Array();
            for (let z in params.ReadWriteDevice) {
                let obj = new DeviceInfo();
                obj.deserialize(params.ReadWriteDevice[z]);
                this.ReadWriteDevice.push(obj);
            }
        }

        if (params.ReadOnlyDevice) {
            this.ReadOnlyDevice = new Array();
            for (let z in params.ReadOnlyDevice) {
                let obj = new DeviceInfo();
                obj.deserialize(params.ReadOnlyDevice[z]);
                this.ReadOnlyDevice.push(obj);
            }
        }

        if (params.FreeDevice) {
            this.FreeDevice = new Array();
            for (let z in params.FreeDevice) {
                let obj = new DeviceInfo();
                obj.deserialize(params.FreeDevice[z]);
                this.FreeDevice.push(obj);
            }
        }

    }
}

/**
 * DescribeInstanceDetail返回参数结构体
 * @class
 */
class DescribeInstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 独享集群实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 独享集群实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 产品ID, 0:CDB, 1:TDSQL
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * 集群类型, 0:公有云, 1:金融围笼
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘
         * @type {number || null}
         */
        this.HostType = null;

        /**
         * 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 集群状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 集群状态描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 主机数
         * @type {number || null}
         */
        this.HostNum = null;

        /**
         * Db实例数
         * @type {number || null}
         */
        this.DbNum = null;

        /**
         * 分配策略, 0:紧凑, 1:均匀
         * @type {number || null}
         */
        this.AssignStrategy = null;

        /**
         * 总主机CPU(单位:核)
         * @type {number || null}
         */
        this.CpuSpec = null;

        /**
         * 总已分配CPU(单位:核)
         * @type {number || null}
         */
        this.CpuAssigned = null;

        /**
         * 总可分配CPU(单位:核)
         * @type {number || null}
         */
        this.CpuAssignable = null;

        /**
         * 总主机内存(单位:GB)
         * @type {number || null}
         */
        this.MemorySpec = null;

        /**
         * 总已分配内存(单位:GB)
         * @type {number || null}
         */
        this.MemoryAssigned = null;

        /**
         * 总可分配内存(单位:GB)
         * @type {number || null}
         */
        this.MemoryAssignable = null;

        /**
         * 总机器磁盘(单位:GB)
         * @type {number || null}
         */
        this.DiskSpec = null;

        /**
         * 总已分配磁盘(单位:GB)
         * @type {number || null}
         */
        this.DiskAssigned = null;

        /**
         * 总可分配磁盘(单位:GB)
         * @type {number || null}
         */
        this.DiskAssignable = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 围笼ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FenceId = null;

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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.HostNum = 'HostNum' in params ? params.HostNum : null;
        this.DbNum = 'DbNum' in params ? params.DbNum : null;
        this.AssignStrategy = 'AssignStrategy' in params ? params.AssignStrategy : null;
        this.CpuSpec = 'CpuSpec' in params ? params.CpuSpec : null;
        this.CpuAssigned = 'CpuAssigned' in params ? params.CpuAssigned : null;
        this.CpuAssignable = 'CpuAssignable' in params ? params.CpuAssignable : null;
        this.MemorySpec = 'MemorySpec' in params ? params.MemorySpec : null;
        this.MemoryAssigned = 'MemoryAssigned' in params ? params.MemoryAssigned : null;
        this.MemoryAssignable = 'MemoryAssignable' in params ? params.MemoryAssignable : null;
        this.DiskSpec = 'DiskSpec' in params ? params.DiskSpec : null;
        this.DiskAssigned = 'DiskAssigned' in params ? params.DiskAssigned : null;
        this.DiskAssignable = 'DiskAssignable' in params ? params.DiskAssignable : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.FenceId = 'FenceId' in params ? params.FenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceList返回参数结构体
 * @class
 */
class DescribeInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 独享集群列表
         * @type {Array.<DescribeInstanceDetail> || null}
         */
        this.Instances = null;

        /**
         * 独享集群实例总数
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new DescribeInstanceDetail();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * 独享集群实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 独享集群主机Id
         * @type {string || null}
         */
        this.HostId = null;

        /**
         * 分页返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例类型,0:mariadb, 1:tdsql
         * @type {Array.<number> || null}
         */
        this.ShardType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.HostId = 'HostId' in params ? params.HostId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ShardType = 'ShardType' in params ? params.ShardType : null;

    }
}

/**
 * DescribeInstanceDetail请求参数结构体
 * @class
 */
class DescribeInstanceDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 独享集群实例Id
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
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群类型: 0 一主一备, 1 一主两备...N-1 一主N备
         * @type {Array.<number> || null}
         */
        this.InstanceTypes = null;

        /**
         * 产品ID:  0 MYSQL，1 TDSQL
         * @type {Array.<number> || null}
         */
        this.ProductIds = null;

        /**
         * 集群uuid: 如 dbdc-q810131s
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 是否按金融围笼标志搜索
         * @type {boolean || null}
         */
        this.FenceFlag = null;

        /**
         * 按实例名字模糊匹配
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 每页数目, 整型
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码, 整型
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 排序字段，枚举：createtime,groupname
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式: asc升序, desc降序
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 集群状态: -2 已删除, -1 已隔离, 0 创建中, 1 运行中, 2 扩容中, 3 删除中
         * @type {number || null}
         */
        this.InstanceStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.ProductIds = 'ProductIds' in params ? params.ProductIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.FenceFlag = 'FenceFlag' in params ? params.FenceFlag : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

    }
}

/**
 * 设备信息
 * @class
 */
class DeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {number || null}
         */
        this.DeviceId = null;

        /**
         * 设备No
         * @type {string || null}
         */
        this.DeviceNo = null;

        /**
         * 设备类型
         * @type {string || null}
         */
        this.DevClass = null;

        /**
         * 设备总内存，单位GB
         * @type {number || null}
         */
        this.MaxMemory = null;

        /**
         * 设备总磁盘，单位GB
         * @type {number || null}
         */
        this.MaxDisk = null;

        /**
         * 设备剩余内存，单位GB
         * @type {number || null}
         */
        this.RestMemory = null;

        /**
         * 设备剩余磁盘，单位GB
         * @type {number || null}
         */
        this.RestDisk = null;

        /**
         * 设备机器个数
         * @type {number || null}
         */
        this.RawDeviceNum = null;

        /**
         * 数据库实例个数
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.DeviceNo = 'DeviceNo' in params ? params.DeviceNo : null;
        this.DevClass = 'DevClass' in params ? params.DevClass : null;
        this.MaxMemory = 'MaxMemory' in params ? params.MaxMemory : null;
        this.MaxDisk = 'MaxDisk' in params ? params.MaxDisk : null;
        this.RestMemory = 'RestMemory' in params ? params.RestMemory : null;
        this.RestDisk = 'RestDisk' in params ? params.RestDisk : null;
        this.RawDeviceNum = 'RawDeviceNum' in params ? params.RawDeviceNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * DB实例详情
 * @class
 */
class DBInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * DB实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * DB实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * DB实例状态,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化
         * @type {number || null}
         */
        this.Status = null;

        /**
         * DB实例状态描述,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * DB实例版本
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Vip信息
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Vip使用的端口号
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 字符串型的私有网络ID
         * @type {string || null}
         */
        this.UniqueVpcId = null;

        /**
         * 字符串型的私有网络子网ID
         * @type {string || null}
         */
        this.UniqueSubnetId = null;

        /**
         * 是否为分布式版本,0:否,1:是
         * @type {number || null}
         */
        this.Shard = null;

        /**
         * DB实例节点数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * CPU规格(单位:核数)
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存规格(单位:GB)
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 磁盘规格(单位:GB)
         * @type {number || null}
         */
        this.Disk = null;

        /**
         * 分布式类型的实例的分片数
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Db所在主机列表, 格式: m1,s1|m2,s2
         * @type {string || null}
         */
        this.DbHosts = null;

        /**
         * 主机角色, 1:主, 2:从, 3:主+从
         * @type {number || null}
         */
        this.HostRole = null;

        /**
         * DB引擎，MySQL,Percona,MariaDB
         * @type {string || null}
         */
        this.DbEngine = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.UniqueVpcId = 'UniqueVpcId' in params ? params.UniqueVpcId : null;
        this.UniqueSubnetId = 'UniqueSubnetId' in params ? params.UniqueSubnetId : null;
        this.Shard = 'Shard' in params ? params.Shard : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Disk = 'Disk' in params ? params.Disk : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DbHosts = 'DbHosts' in params ? params.DbHosts : null;
        this.HostRole = 'HostRole' in params ? params.HostRole : null;
        this.DbEngine = 'DbEngine' in params ? params.DbEngine : null;

    }
}

/**
 * ModifyInstanceName返回参数结构体
 * @class
 */
class ModifyInstanceNameResponse extends  AbstractModel {
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
 * 集群扩展信息。
 * @class
 */
class InstanceExpand extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 用户ID
         * @type {number || null}
         */
        this.AppId = null;

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
         * 集群类型： 0：一主一备，1：一主两备
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 集群状态: 0 集群创建中, 1 集群有效, 2 集群扩容中, 3 集群删除中, 4 集群缩容中 -1 集群已隔离 -2 集群已删除
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例自动续费标识： 0正常续费 1自动续费 2到期不续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 集群信息
         * @type {InstanceDetail || null}
         */
        this.InstanceDetail = null;

        /**
         * 计费侧的产品ID
         * @type {number || null}
         */
        this.Pid = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;

        if (params.InstanceDetail) {
            let obj = new InstanceDetail();
            obj.deserialize(params.InstanceDetail)
            this.InstanceDetail = obj;
        }
        this.Pid = 'Pid' in params ? params.Pid : null;

    }
}

/**
 * 集群容量信息。
 * @class
 */
class InstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群状态，0：运行中，1：不在运行
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 读写集群剩余内存容量，单位GB
         * @type {number || null}
         */
        this.ReadWriteTotalLeaveMemory = null;

        /**
         * 读写集群剩余磁盘容量，单位GB
         * @type {number || null}
         */
        this.ReadWriteTotalLeaveDisk = null;

        /**
         * 读写集群总内存容量，单位GB
         * @type {number || null}
         */
        this.ReadWriteTotalMemory = null;

        /**
         * 读写集群总磁盘容量，单位GB
         * @type {number || null}
         */
        this.ReadWriteTotalDisk = null;

        /**
         * 只读集群剩余内存容量，单位GB
         * @type {number || null}
         */
        this.ReadOnlyTotalLeaveMemory = null;

        /**
         * 只读集群剩余磁盘容量，单位GB
         * @type {number || null}
         */
        this.ReadOnlyTotalLeaveDisk = null;

        /**
         * 只读集群总内存容量，单位GB
         * @type {number || null}
         */
        this.ReadOnlyTotalMemory = null;

        /**
         * 只读集群总磁盘容量，单位GB
         * @type {number || null}
         */
        this.ReadOnlyTotalDisk = null;

        /**
         * 集群设备详情
         * @type {Array.<InstanceDeviceInfo> || null}
         */
        this.InstanceDeviceInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ReadWriteTotalLeaveMemory = 'ReadWriteTotalLeaveMemory' in params ? params.ReadWriteTotalLeaveMemory : null;
        this.ReadWriteTotalLeaveDisk = 'ReadWriteTotalLeaveDisk' in params ? params.ReadWriteTotalLeaveDisk : null;
        this.ReadWriteTotalMemory = 'ReadWriteTotalMemory' in params ? params.ReadWriteTotalMemory : null;
        this.ReadWriteTotalDisk = 'ReadWriteTotalDisk' in params ? params.ReadWriteTotalDisk : null;
        this.ReadOnlyTotalLeaveMemory = 'ReadOnlyTotalLeaveMemory' in params ? params.ReadOnlyTotalLeaveMemory : null;
        this.ReadOnlyTotalLeaveDisk = 'ReadOnlyTotalLeaveDisk' in params ? params.ReadOnlyTotalLeaveDisk : null;
        this.ReadOnlyTotalMemory = 'ReadOnlyTotalMemory' in params ? params.ReadOnlyTotalMemory : null;
        this.ReadOnlyTotalDisk = 'ReadOnlyTotalDisk' in params ? params.ReadOnlyTotalDisk : null;

        if (params.InstanceDeviceInfos) {
            this.InstanceDeviceInfos = new Array();
            for (let z in params.InstanceDeviceInfos) {
                let obj = new InstanceDeviceInfo();
                obj.deserialize(params.InstanceDeviceInfos[z]);
                this.InstanceDeviceInfos.push(obj);
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
         * 独享集群内的DB实例列表
         * @type {Array.<DBInstanceDetail> || null}
         */
        this.Instances = null;

        /**
         * 独享集群内的DB实例总数
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new DBInstanceDetail();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 独享集群详情
 * @class
 */
class DescribeInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 独享集群实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 独享集群实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 产品ID, 0:CDB, 1:TDSQL
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * 集群类型, 0:公有云, 1:金融围笼
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘
         * @type {number || null}
         */
        this.HostType = null;

        /**
         * 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 集群状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 集群状态描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 主机数
         * @type {number || null}
         */
        this.HostNum = null;

        /**
         * DB实例数
         * @type {number || null}
         */
        this.DbNum = null;

        /**
         * 分配策略, 0:紧凑, 1:均匀
         * @type {number || null}
         */
        this.AssignStrategy = null;

        /**
         * 总主机CPU(单位:核数)
         * @type {number || null}
         */
        this.CpuSpec = null;

        /**
         * 总已分配CPU(单位:核数)
         * @type {number || null}
         */
        this.CpuAssigned = null;

        /**
         * 总可分配CPU(单位:核数)
         * @type {number || null}
         */
        this.CpuAssignable = null;

        /**
         * 总主机内存(单位:GB)
         * @type {number || null}
         */
        this.MemorySpec = null;

        /**
         * 总已分配内存(单位:GB)
         * @type {number || null}
         */
        this.MemoryAssigned = null;

        /**
         * 总可分配内存(单位:GB)
         * @type {number || null}
         */
        this.MemoryAssignable = null;

        /**
         * 总机器磁盘(单位:GB)
         * @type {number || null}
         */
        this.DiskSpec = null;

        /**
         * 总已分配磁盘(单位:GB)
         * @type {number || null}
         */
        this.DiskAssigned = null;

        /**
         * 总可分配磁盘(单位:GB)
         * @type {number || null}
         */
        this.DiskAssignable = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 围笼ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FenceId = null;

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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.HostNum = 'HostNum' in params ? params.HostNum : null;
        this.DbNum = 'DbNum' in params ? params.DbNum : null;
        this.AssignStrategy = 'AssignStrategy' in params ? params.AssignStrategy : null;
        this.CpuSpec = 'CpuSpec' in params ? params.CpuSpec : null;
        this.CpuAssigned = 'CpuAssigned' in params ? params.CpuAssigned : null;
        this.CpuAssignable = 'CpuAssignable' in params ? params.CpuAssignable : null;
        this.MemorySpec = 'MemorySpec' in params ? params.MemorySpec : null;
        this.MemoryAssigned = 'MemoryAssigned' in params ? params.MemoryAssigned : null;
        this.MemoryAssignable = 'MemoryAssignable' in params ? params.MemoryAssignable : null;
        this.DiskSpec = 'DiskSpec' in params ? params.DiskSpec : null;
        this.DiskAssigned = 'DiskAssigned' in params ? params.DiskAssigned : null;
        this.DiskAssignable = 'DiskAssignable' in params ? params.DiskAssignable : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.FenceId = 'FenceId' in params ? params.FenceId : null;

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
         * 集群数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群扩展信息
         * @type {Array.<InstanceExpand> || null}
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
                let obj = new InstanceExpand();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceList请求参数结构体
 * @class
 */
class DescribeInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序字段，createTime,instancename两者之一
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序规则，desc,asc两者之一
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 按产品过滤，0:CDB, 1:TDSQL
         * @type {Array.<number> || null}
         */
        this.ProductId = null;

        /**
         * 按实例ID过滤
         * @type {Array.<string> || null}
         */
        this.InstanceId = null;

        /**
         * 按实例名称过滤
         * @type {Array.<string> || null}
         */
        this.InstanceName = null;

        /**
         * 按金融围笼ID过滤
         * @type {Array.<string> || null}
         */
        this.FenceId = null;

        /**
         * 按实例状态过滤, -1:已隔离, 0:创建中, 1:运行中, 2:扩容中, 3:删除中
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.FenceId = 'FenceId' in params ? params.FenceId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyInstanceName请求参数结构体
 * @class
 */
class ModifyInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 独享集群实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 独享集群实例名称
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

module.exports = {
    InstanceDeviceInfo: InstanceDeviceInfo,
    DescribeInstanceDetailResponse: DescribeInstanceDetailResponse,
    DescribeInstanceListResponse: DescribeInstanceListResponse,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeInstanceDetailRequest: DescribeInstanceDetailRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DeviceInfo: DeviceInfo,
    DBInstanceDetail: DBInstanceDetail,
    ModifyInstanceNameResponse: ModifyInstanceNameResponse,
    InstanceExpand: InstanceExpand,
    InstanceDetail: InstanceDetail,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    DescribeInstanceDetail: DescribeInstanceDetail,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeInstanceListRequest: DescribeInstanceListRequest,
    ModifyInstanceNameRequest: ModifyInstanceNameRequest,

}
