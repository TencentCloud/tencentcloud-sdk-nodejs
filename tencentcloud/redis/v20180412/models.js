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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.AutoBackupType = params.AutoBackupType || null;
        this.WeekDays = params.WeekDays || null;
        this.TimePeriod = params.TimePeriod || null;
        this.RequestId = params.RequestId || null;

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
        this.StartTime = params.StartTime || null;
        this.BackupId = params.BackupId || null;
        this.BackupType = params.BackupType || null;
        this.Status = params.Status || null;
        this.Remark = params.Remark || null;
        this.Locked = params.Locked || null;

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
        this.InstanceId = params.InstanceId || null;
        this.OldPassword = params.OldPassword || null;
        this.Password = params.Password || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.AutoBackupType = params.AutoBackupType || null;
        this.WeekDays = params.WeekDays || null;
        this.TimePeriod = params.TimePeriod || null;
        this.RequestId = params.RequestId || null;

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
         * 实例类型：2 – 主从版，5-单机版
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
         * 私有网络ID，如果不传则默认选择基础网络，请使用私有网络列表 查询
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 基础网络下， subnetId无效； vpc子网下，取值以查询查询子网列表
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = params.ZoneId || null;
        this.TypeId = params.TypeId || null;
        this.MemSize = params.MemSize || null;
        this.GoodsNum = params.GoodsNum || null;
        this.Period = params.Period || null;
        this.Password = params.Password || null;
        this.BillingMode = params.BillingMode || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.ProjectId = params.ProjectId || null;
        this.AutoRenew = params.AutoRenew || null;
        this.SecurityGroupIdList = params.SecurityGroupIdList || null;
        this.VPort = params.VPort || null;

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
        this.Password = params.Password || null;
        this.InstanceId = params.InstanceId || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.DealId = params.DealId || null;
        this.RequestId = params.RequestId || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TotalCount = params.TotalCount || null;

        if (params.BackupSet) {
            this.BackupSet = new Array();
            for (let z in params.BackupSet) {
                let obj = new RedisBackupSet();
                obj.deserialize(params.BackupSet[z]);
                this.BackupSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TotalCount = params.TotalCount || null;

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new InstanceSet();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

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
         * 实例列表大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例Id
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
         * 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * 子网ID数组，数组下标从0开始
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
         * 查询的Region的列表。
         * @type {Array.<number> || null}
         */
        this.RegionIds = null;

        /**
         * 实例名称
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
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;
        this.InstanceId = params.InstanceId || null;
        this.OrderBy = params.OrderBy || null;
        this.OrderType = params.OrderType || null;
        this.VpcIds = params.VpcIds || null;
        this.SubnetIds = params.SubnetIds || null;
        this.ProjectIds = params.ProjectIds || null;
        this.SearchKey = params.SearchKey || null;
        this.RegionIds = params.RegionIds || null;
        this.InstanceName = params.InstanceName || null;

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
         * 实例id
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
        this.InstanceId = params.InstanceId || null;
        this.Password = params.Password || null;

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
        this.Period = params.Period || null;
        this.InstanceId = params.InstanceId || null;

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
         * 实例列表大小
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
        this.InstanceId = params.InstanceId || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;
        this.BeginTime = params.BeginTime || null;
        this.EndTime = params.EndTime || null;
        this.Status = params.Status || null;

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
        this.InstanceId = params.InstanceId || null;

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
        this.InstanceId = params.InstanceId || null;
        this.WeekDays = params.WeekDays || null;
        this.TimePeriod = params.TimePeriod || null;
        this.AutoBackupType = params.AutoBackupType || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.DealId = params.DealId || null;
        this.RequestId = params.RequestId || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.DealId = params.DealId || null;
        this.RequestId = params.RequestId || null;

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
         * 升级的实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 规格 单位 MB
         * @type {number || null}
         */
        this.MemSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.MemSize = params.MemSize || null;

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
        this.InstanceId = params.InstanceId || null;
        this.Remark = params.Remark || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

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
         * 实例串号
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * appid
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 项目id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 地域id 1--广州 4--上海 5-- 香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 区域id
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * vpc网络id
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * vpc网络下子网id
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 实例当前状态，0：待初始化；1：实例在流程中；2：实例运行中；-2：实例已隔离
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
         * 实例类型，1：集群版；2：主从版
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = params.InstanceName || null;
        this.InstanceId = params.InstanceId || null;
        this.Appid = params.Appid || null;
        this.ProjectId = params.ProjectId || null;
        this.RegionId = params.RegionId || null;
        this.ZoneId = params.ZoneId || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.Status = params.Status || null;
        this.WanIp = params.WanIp || null;
        this.Port = params.Port || null;
        this.Createtime = params.Createtime || null;
        this.Size = params.Size || null;
        this.SizeUsed = params.SizeUsed || null;
        this.Type = params.Type || null;
        this.AutoRenewFlag = params.AutoRenewFlag || null;
        this.DeadlineTime = params.DeadlineTime || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    DescribeAutoBackupConfigResponse: DescribeAutoBackupConfigResponse,
    RedisBackupSet: RedisBackupSet,
    ModfiyInstancePasswordRequest: ModfiyInstancePasswordRequest,
    ModifyAutoBackupConfigResponse: ModifyAutoBackupConfigResponse,
    CreateInstancesRequest: CreateInstancesRequest,
    ResetPasswordRequest: ResetPasswordRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    DescribeInstanceBackupsResponse: DescribeInstanceBackupsResponse,
    ManualBackupInstanceResponse: ManualBackupInstanceResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    ResetPasswordResponse: ResetPasswordResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    ClearInstanceRequest: ClearInstanceRequest,
    RenewInstanceRequest: RenewInstanceRequest,
    DescribeInstanceBackupsRequest: DescribeInstanceBackupsRequest,
    DescribeAutoBackupConfigRequest: DescribeAutoBackupConfigRequest,
    ModifyAutoBackupConfigRequest: ModifyAutoBackupConfigRequest,
    CreateInstancesResponse: CreateInstancesResponse,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    ManualBackupInstanceRequest: ManualBackupInstanceRequest,
    ModfiyInstancePasswordResponse: ModfiyInstancePasswordResponse,
    InstanceSet: InstanceSet,
    ClearInstanceResponse: ClearInstanceResponse,

}
