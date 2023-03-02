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
 * UpgradeSmallVersion请求参数结构体
 * @class
 */
class UpgradeSmallVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 当前redis版本
         * @type {string || null}
         */
        this.CurrentRedisVersion = null;

        /**
         * 可升级的redis版本
         * @type {string || null}
         */
        this.UpgradeRedisVersion = null;

        /**
         * 1-立即升级   0-维护时间窗口升级
         * @type {number || null}
         */
        this.InstanceTypeUpgradeNow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CurrentRedisVersion = 'CurrentRedisVersion' in params ? params.CurrentRedisVersion : null;
        this.UpgradeRedisVersion = 'UpgradeRedisVersion' in params ? params.UpgradeRedisVersion : null;
        this.InstanceTypeUpgradeNow = 'InstanceTypeUpgradeNow' in params ? params.InstanceTypeUpgradeNow : null;

    }
}

/**
 * ModifyInstanceParams返回参数结构体
 * @class
 */
class ModifyInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 说明修改参数配置是否成功。<br><li>true：指修改成功；<br><li>false：指修改失败。<br>
         * @type {boolean || null}
         */
        this.Changed = null;

        /**
         * 任务ID。
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
        this.Changed = 'Changed' in params ? params.Changed : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableReplicaReadonly请求参数结构体
 * @class
 */
class EnableReplicaReadonlyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例序号ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 账号路由策略：填写master或者replication，表示路由主节点，从节点；不填路由策略默认为写主节点，读从节点
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;

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
         * 备份开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 备份ID。
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * 备份类型。

- 1：用户发起的手动备份。
- 0：凌晨系统发起的备份。
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * 备份状态。 

- 1：备份被其它流程锁定。
- 2：备份正常，没有被任何流程锁定。
- -1：备份已过期。
- 3：备份正在被导出。
- 4：备份导出成功。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 备份的备注信息。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 备份是否被锁定。

- 0：未被锁定。
- 1：已被锁定。
         * @type {number || null}
         */
        this.Locked = null;

        /**
         * 内部字段，用户可忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * 内部字段，用户可忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FullBackup = null;

        /**
         * 内部字段，用户可忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 本地备份所在地域。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 备份结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 备份文件类型。
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 备份文件过期时间。
         * @type {string || null}
         */
        this.ExpireTime = null;

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
        this.BackupSize = 'BackupSize' in params ? params.BackupSize : null;
        this.FullBackup = 'FullBackup' in params ? params.FullBackup : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd返回参数结构体
 * @class
 */
class DescribeInstanceMonitorTopNCmdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问命令信息
         * @type {Array.<SourceCommand> || null}
         */
        this.Data = null;

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
                let obj = new SourceCommand();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 自动备份周期。取值为：Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * 自动备份时间段。格式如：00:00-01:00, 01:00-02:00...... 23:00-00:00。
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * 全量备份文件保存天数,单位：天。
         * @type {number || null}
         */
        this.BackupStorageDays = null;

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
        this.BackupStorageDays = 'BackupStorageDays' in params ? params.BackupStorageDays : null;
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
         * 待操作的实例ID，可通过 DescribeInstances 接口返回值中的 InstanceId 获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份ID，可通过 GetRedisBackupList 接口返回值中的 backupId 获取
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * 实例密码，恢复实例时，需要校验实例密码（免密实例不需要传密码）
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
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * AllocateWanAddress请求参数结构体
 * @class
 */
class AllocateWanAddressRequest extends  AbstractModel {
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
 * ApplyParamsTemplate请求参数结构体
 * @class
 */
class ApplyParamsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 应用的参数模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * UpgradeInstanceVersion返回参数结构体
 * @class
 */
class UpgradeInstanceVersionResponse extends  AbstractModel {
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
 * CreateInstances请求参数结构体
 * @class
 */
class CreateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例类型：2 – Redis2.8内存版(标准架构)，3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，6 – Redis4.0内存版(标准架构)，7 – Redis4.0内存版(集群架构)，8 – Redis5.0内存版(标准架构)，9 – Redis5.0内存版(集群架构)，15 – Redis6.0内存版(标准架构)，16 – Redis6.0内存版(集群架构)。
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * 内存容量，单位为MB， 数值需为1024的整数倍，具体规格以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。
TypeId为标准架构时，MemSize是实例总内存容量；TypeId为集群架构时，MemSize是单分片内存容量。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 实例数量，单次购买实例数量以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 购买时长，在创建包年包月实例的时候需要填写，按量计费实例填1即可，单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 付费方式:0-按量计费，1-包年包月。
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * 实例所属的可用区ID，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106)  。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 实例密码，当输入参数NoAuth为true且使用私有网络VPC时，Password为非必填，否则Password为必填参数。
当实例类型TypeId为Redis2.8、4.0和5.0时，其密码格式为：8-30个字符，至少包含小写字母、大写字母、数字和字符 ()`~!@#$%^&*-+=_|{}[]:;<>,.?/ 中的2种，不能以"/"开头；
当实例类型TypeId为CKV 3.2时，其密码格式为：8-30个字符，必须包含字母和数字 且 不包含其他字符。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 私有网络ID，如果不传则默认选择基础网络，请使用私有网络列表查询，如：vpc-sad23jfdfk。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 基础网络下， subnetId无效； vpc子网下，取值以查询子网列表，如：subnet-fdj24n34j2。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 项目id，取值以用户账户>用户账户相关接口查询>项目列表返回的projectId为准。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 自动续费标识。0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费。
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 安全组id数组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdList = null;

        /**
         * 用户自定义的端口 不填则默认为6379，范围[1024,65535]。
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * 实例分片数量，购买标准版实例不需要填写，集群版分片数量范围[3,5,8,12,16,24,32,64,96,128]。
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * 实例副本数量，Redis 2.8标准版、CKV标准版只支持1副本，4.0、5.0标准版和集群版支持1-5个副本。
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * 是否支持副本只读，Redis 2.8标准版、CKV标准版不支持副本只读，开启副本只读，实例将自动读写分离，写请求路由到主节点，读请求路由到副本节点，如需开启副本只读建议副本数>=2。
         * @type {boolean || null}
         */
        this.ReplicasReadonly = null;

        /**
         * 实例名称，长度小于60的中文/英文/数字/"-"/"_"。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 是否支持免密，true-免密实例，false-非免密实例，默认为非免密实例，仅VPC网络的实例支持免密码访问。
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * 实例的节点信息，目前支持传入节点的类型（主节点或者副本节点），节点的可用区。单可用区部署不需要传递此参数。
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * 购买实例绑定标签
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * 实例所属的可用区名称，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106)  。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 创建实例需要应用的参数模板ID，不传则应用默认的参数模板
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * false ：默认值,发送正常请求，通过检查后直接创建实例 true：发送检查请求，不会创建实例。
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * "local"本地盘版，"cloud"云盘版，"cdc"独享集群版，如果不传默认发货为本地盘版本
         * @type {string || null}
         */
        this.ProductVersion = null;

        /**
         * 独享集群id，ProductVersion="cdc"时必传
         * @type {string || null}
         */
        this.RedisClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.SecurityGroupIdList = 'SecurityGroupIdList' in params ? params.SecurityGroupIdList : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;
        this.RedisClusterId = 'RedisClusterId' in params ? params.RedisClusterId : null;

    }
}

/**
 * CreateReplicationGroup请求参数结构体
 * @class
 */
class CreateReplicationGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定复制组中的主实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 复制组名称。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 备注信息。
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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifyInstanceReadOnly返回参数结构体
 * @class
 */
class ModifyInstanceReadOnlyResponse extends  AbstractModel {
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
 * DescribeInstanceZoneInfo请求参数结构体
 * @class
 */
class DescribeInstanceZoneInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id，如：crs-6ubhgouj
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
 * ModifyConnectionConfig返回参数结构体
 * @class
 */
class ModifyConnectionConfigResponse extends  AbstractModel {
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
 * ModifyNetworkConfig返回参数结构体
 * @class
 */
class ModifyNetworkConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行状态，请忽略该参数。
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 指实例新私有网络所属子网 ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 指实例新的私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 指实例新的内网 IPv4 地址。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 任务 ID。可获取**taskId**，通过接口 **DescribeTaskInfo **查询任务执行状态。
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
        this.Status = 'Status' in params ? params.Status : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 命令耗时
 * @class
 */
class CommandTake extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命令
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * 耗时
         * @type {number || null}
         */
        this.Took = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Took = 'Took' in params ? params.Took : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey返回参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大Key详细信息
         * @type {Array.<BigKeyInfo> || null}
         */
        this.Data = null;

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
                let obj = new BigKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组入站规则
 * @class
 */
class Inbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略，ACCEPT或者DROP。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 地址组id代表的地址集合。
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * 来源Ip或Ip段，例如192.168.0.0/16。
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 描述。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 网络协议，支持udp、tcp等。
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 端口。
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 服务组id代表的协议和端口集合。
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * 安全组id代表的地址集合。
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Id = 'Id' in params ? params.Id : null;

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
         * 数据库引擎名称，本接口取值：redis。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 要绑定的安全组ID，类似sg-efil73jd。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 被绑定的实例ID，类似ins-lesecurk，支持指定多个实例。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeTaskList返回参数结构体
 * @class
 */
class DescribeTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务详细信息
         * @type {Array.<TaskInfoDetail> || null}
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
                let obj = new TaskInfoDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 修改实例操作，如填写：rename-表示实例重命名；modifyProject-修改实例所属项目；modifyAutoRenew-修改实例续费标记
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 实例Id
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例的新名称
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * 项目Id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 自动续费标识。0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费
         * @type {Array.<number> || null}
         */
        this.AutoRenews = null;

        /**
         * 已经废弃
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 已经废弃
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 已经废弃
         * @type {number || null}
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenews = 'AutoRenews' in params ? params.AutoRenews : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * KillMasterGroup返回参数结构体
 * @class
 */
class KillMasterGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
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
 * RenewInstance返回参数结构体
 * @class
 */
class RenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易ID。
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
 * DescribeSlowLog返回参数结构体
 * @class
 */
class DescribeSlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 慢查询详情。
         * @type {Array.<InstanceSlowlogDetail> || null}
         */
        this.InstanceSlowlogDetail = null;

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

        if (params.InstanceSlowlogDetail) {
            this.InstanceSlowlogDetail = new Array();
            for (let z in params.InstanceSlowlogDetail) {
                let obj = new InstanceSlowlogDetail();
                obj.deserialize(params.InstanceSlowlogDetail[z]);
                this.InstanceSlowlogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCommonDBInstances请求参数结构体
 * @class
 */
class DescribeCommonDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc网络ID信息列表
         * @type {Array.<number> || null}
         */
        this.VpcIds = null;

        /**
         * 子网ID信息列表
         * @type {Array.<number> || null}
         */
        this.SubnetIds = null;

        /**
         * 计费类型过滤列表；0表示包年包月，1表示按量计费
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例ID过滤信息列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例名称过滤信息列表
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * 实例状态信息过滤列表
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 实例vip信息列表
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * vpc网络ID信息列表
         * @type {Array.<string> || null}
         */
        this.UniqVpcIds = null;

        /**
         * 子网统一ID列表
         * @type {Array.<string> || null}
         */
        this.UniqSubnetIds = null;

        /**
         * 数量限制，默认推荐100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认0
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
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Vips = 'Vips' in params ? params.Vips : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * 安全组规则。
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * 安全组生效内网地址。
         * @type {string || null}
         */
        this.VIP = null;

        /**
         * 安全组生效内网端口。
         * @type {string || null}
         */
        this.VPort = null;

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
        this.VIP = 'VIP' in params ? params.VIP : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 任务ID，可通过 DescribeTaskInfo 接口查询任务执行状态
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
 * 描述 Redis 实例的主节点或者副本节点信息。
 * @class
 */
class RedisNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点类型。<ul><li>0：为主节点。</li><li>1：为副本节点。</li></ul>
         * @type {number || null}
         */
        this.NodeType = null;

        /**
         * 主节点或者副本节点的 ID。<ul><li>该参数用于创建 Redis 实例接口[CreateInstances](https://cloud.tencent.com/document/product/239/20026) 并不需要设置，而用于变更实例配置的接口 [UpgradeInstance](https://cloud.tencent.com/document/product/239/20013) 则需要设置。</li><li>该参数可使用接口 [DescribeInstances](https://cloud.tencent.com/document/product/239/20018) 获取Integer类型的节点 ID。</li></ul>
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 主节点或者副本节点的可用区 ID。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 主节点或者副本节点的可用区名称。
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
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * DescribeBackupUrl请求参数结构体
 * @class
 */
class DescribeBackupUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份 ID，可通过 [DescribeInstanceBackups ](https://cloud.tencent.com/document/product/239/20011)接口返回的参数 RedisBackupSet 获取。
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * 下载备份文件的网络限制类型，如果不配置该参数，则使用用户自定义的配置。

- NoLimit：不限制，腾讯云内外网均可以下载备份文件。
-  LimitOnlyIntranet：仅腾讯云自动分配的内网地址可下载备份文件。
- Customize：指用户自定义的私有网络可下载备份文件。
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * 该参数仅支持输入 In，表示自定义的**LimitVpc**可以下载备份文件。
         * @type {string || null}
         */
        this.VpcComparisonSymbol = null;

        /**
         * 标识自定义的 LimitIp 地址是否可下载备份文件。

- In: 自定义的 IP 地址可以下载。默认为 In。
- NotIn: 自定义的 IP 不可以下载。
         * @type {string || null}
         */
        this.IpComparisonSymbol = null;

        /**
         * 自定义的可下载备份文件的 VPC ID。当参数**LimitType**为**Customize **时，需配置该参数。
         * @type {Array.<BackupLimitVpcItem> || null}
         */
        this.LimitVpc = null;

        /**
         * 自定义的可下载备份文件的 VPC IP 地址。当参数**LimitType**为**Customize **时，需配置该参数。
         * @type {Array.<string> || null}
         */
        this.LimitIp = null;

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
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.VpcComparisonSymbol = 'VpcComparisonSymbol' in params ? params.VpcComparisonSymbol : null;
        this.IpComparisonSymbol = 'IpComparisonSymbol' in params ? params.IpComparisonSymbol : null;

        if (params.LimitVpc) {
            this.LimitVpc = new Array();
            for (let z in params.LimitVpc) {
                let obj = new BackupLimitVpcItem();
                obj.deserialize(params.LimitVpc[z]);
                this.LimitVpc.push(obj);
            }
        }
        this.LimitIp = 'LimitIp' in params ? params.LimitIp : null;

    }
}

/**
 * DeleteParamTemplate返回参数结构体
 * @class
 */
class DeleteParamTemplateResponse extends  AbstractModel {
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
         * 实例总数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表。
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
 * DescribeInstanceZoneInfo返回参数结构体
 * @class
 */
class DescribeInstanceZoneInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例节点组的个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例节点组列表
         * @type {Array.<ReplicaGroup> || null}
         */
        this.ReplicaGroups = null;

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

        if (params.ReplicaGroups) {
            this.ReplicaGroups = new Array();
            for (let z in params.ReplicaGroups) {
                let obj = new ReplicaGroup();
                obj.deserialize(params.ReplicaGroups[z]);
                this.ReplicaGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 子账号信息
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 账号名称（如果是主账号，名称为root）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 账号描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 读写策略：r-只读，w-只写，rw-读写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * 路由策略：master-主节点，replication-从节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * 子账号状态：1-账号变更中，2-账号有效，-4-账号已删除
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 代理慢查询详情
 * @class
 */
class InstanceProxySlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询耗时（单位：毫秒）。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 客户端地址。
         * @type {string || null}
         */
        this.Client = null;

        /**
         * 命令。
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 详细命令行信息。
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * 执行时间。
         * @type {string || null}
         */
        this.ExecuteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;

    }
}

/**
 * 安全组出入规则
 * @class
 */
class SecurityGroupsInboundAndOutbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行动作
         * @type {string || null}
         */
        this.Action = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 端口号
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 协议类型
         * @type {string || null}
         */
        this.Proto = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;

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
         * 任务ID（修改密码时的任务ID，如果时切换免密码或者非免密码实例，则无需关注此返回值）
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
 * ClearInstance请求参数结构体
 * @class
 */
class ClearInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * redis的实例密码（免密实例不需要传密码，非免密实例必传）
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
 * UpgradeInstanceVersion请求参数结构体
 * @class
 */
class UpgradeInstanceVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标实例类型，同 [CreateInstances](https://cloud.tencent.com/document/api/239/20026) 的Type，即实例要变更的目标类型
         * @type {string || null}
         */
        this.TargetInstanceType = null;

        /**
         * 切换模式：1-维护时间窗切换，2-立即切换
         * @type {number || null}
         */
        this.SwitchOption = null;

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
        this.TargetInstanceType = 'TargetInstanceType' in params ? params.TargetInstanceType : null;
        this.SwitchOption = 'SwitchOption' in params ? params.SwitchOption : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

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
 * 大Key详情
 * @class
 */
class BigKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所属的database
         * @type {number || null}
         */
        this.DB = null;

        /**
         * 大Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 数据时间戳
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DB = 'DB' in params ? params.DB : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeParamTemplates请求参数结构体
 * @class
 */
class DescribeParamTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品类型数组。产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）
         * @type {Array.<number> || null}
         */
        this.ProductTypes = null;

        /**
         * 模板名称数组。
         * @type {Array.<string> || null}
         */
        this.TemplateNames = null;

        /**
         * 模板ID数组。
         * @type {Array.<string> || null}
         */
        this.TemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductTypes = 'ProductTypes' in params ? params.ProductTypes : null;
        this.TemplateNames = 'TemplateNames' in params ? params.TemplateNames : null;
        this.TemplateIds = 'TemplateIds' in params ? params.TemplateIds : null;

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
         * 购买时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 标识是否修改计费模式。<ul><li>当前实例计费模式为按量计费方式，预转换为包年包月而续费，请指定该参数为 <b>prepaid</b>。</li><li>当前实例计费模式为包年包月方式，可不设置该参数。</li></ul>
         * @type {string || null}
         */
        this.ModifyPayMode = null;

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
        this.ModifyPayMode = 'ModifyPayMode' in params ? params.ModifyPayMode : null;

    }
}

/**
 * UpgradeVersionToMultiAvailabilityZones返回参数结构体
 * @class
 */
class UpgradeVersionToMultiAvailabilityZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * DescribeInstanceParamRecords返回参数结构体
 * @class
 */
class DescribeInstanceParamRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总的修改历史记录数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 修改历史记录信息。
         * @type {Array.<InstanceParamHistory> || null}
         */
        this.InstanceParamHistory = null;

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

        if (params.InstanceParamHistory) {
            this.InstanceParamHistory = new Array();
            for (let z in params.InstanceParamHistory) {
                let obj = new InstanceParamHistory();
                obj.deserialize(params.InstanceParamHistory[z]);
                this.InstanceParamHistory.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 设置自动备份周期。可设置为Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。该参数暂不支持修改。
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * 备份时间段。可设置为每个整点。格式如：00:00-01:00, 01:00-02:00...... 23:00-00:00。
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * 自动备份类型： 1 “定时回档”。
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
 * 实例多选项类型参数描述
 * @class
 */
class InstanceMultiParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 参数类型：multi
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * 修改后是否需要重启：true，false
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * 参数默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 当前运行参数值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 参数说明
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * 参数说明
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * 参数状态, 1: 修改中， 2：修改完成
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
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * 订单交易ID数组，即 [CreateInstances](https://cloud.tencent.com/document/api/239/20026) 的输出参数DealId。
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
 * Redis节点的运行信息
 * @class
 */
class RedisNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点key的个数
         * @type {number || null}
         */
        this.Keys = null;

        /**
         * 节点slot分布
         * @type {string || null}
         */
        this.Slot = null;

        /**
         * 节点的序列ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点的状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 节点角色
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Slot = 'Slot' in params ? params.Slot : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DescribeProjectSecurityGroup请求参数结构体
 * @class
 */
class DescribeProjectSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0:默认项目；-1 所有项目; >0: 特定项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 安全组Id
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * Redis参数模板参数详情
 * @class
 */
class ParameterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数类型
         * @type {string || null}
         */
        this.ParamType = null;

        /**
         * 参数默认值
         * @type {string || null}
         */
        this.Default = null;

        /**
         * 参数描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 参数当前值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 修改参数后，是否需要重启数据库以使参数生效。可能的值包括：0-不需要重启；1-需要重启
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * 参数允许的最大值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Max = null;

        /**
         * 参数允许的最小值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 参数的可选枚举值。如果为非枚举参数，则为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;

    }
}

/**
 * DescribeInstanceShards返回参数结构体
 * @class
 */
class DescribeInstanceShardsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例分片列表信息
         * @type {Array.<InstanceClusterShard> || null}
         */
        this.InstanceShards = null;

        /**
         * 实例分片节点总数
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

        if (params.InstanceShards) {
            this.InstanceShards = new Array();
            for (let z in params.InstanceShards) {
                let obj = new InstanceClusterShard();
                obj.deserialize(params.InstanceShards[z]);
                this.InstanceShards.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPrepaidInstance请求参数结构体
 * @class
 */
class DestroyPrepaidInstanceRequest extends  AbstractModel {
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
 * 任务信息详情
 * @class
 */
class TaskInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 任务进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Result = 'Result' in params ? params.Result : null;

    }
}

/**
 * DisableReplicaReadonly返回参数结构体
 * @class
 */
class DisableReplicaReadonlyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
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
 * CreateParamTemplate返回参数结构体
 * @class
 */
class CreateParamTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板 ID。
         * @type {string || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例标签信息
 * @class
 */
class InstanceTagInfo extends  AbstractModel {
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
 * DescribeInstanceDTSInfo返回参数结构体
 * @class
 */
class DescribeInstanceDTSInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DTS任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * DTS任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 任务状态,取值为：1-创建中(Creating),3-校验中(Checking)4-校验通过(CheckPass),5-校验不通过（CheckNotPass）,7-任务运行(Running),8-准备完成（ReadyComplete）,9-任务成功（Success）,10-任务失败（Failed）,11-撤销中（Stopping）,12-完成中（Completing）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 同步时延，单位：字节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 断开时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CutDownTime = null;

        /**
         * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeInstanceDTSInstanceInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标实例信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeInstanceDTSInstanceInfo || null}
         */
        this.DstInfo = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CutDownTime = 'CutDownTime' in params ? params.CutDownTime : null;

        if (params.SrcInfo) {
            let obj = new DescribeInstanceDTSInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DescribeInstanceDTSInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChangeMasterInstance返回参数结构体
 * @class
 */
class ChangeMasterInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID
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
 * AddReplicationInstance返回参数结构体
 * @class
 */
class AddReplicationInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID。
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
 * DestroyPostpaidInstance返回参数结构体
 * @class
 */
class DestroyPostpaidInstanceResponse extends  AbstractModel {
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

/**
 * SwitchInstanceVip请求参数结构体
 * @class
 */
class SwitchInstanceVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源实例ID
         * @type {string || null}
         */
        this.SrcInstanceId = null;

        /**
         * 目标实例ID
         * @type {string || null}
         */
        this.DstInstanceId = null;

        /**
         * 单位为秒。源实例与目标实例间DTS已断开时间，如果DTS断开时间大于TimeDelay，则不切换VIP，建议尽量根据业务设置一个可接受的值。
         * @type {number || null}
         */
        this.TimeDelay = null;

        /**
         * 在DTS断开的情况下是否强制切换。1：强制切换，0：不强制切换
         * @type {number || null}
         */
        this.ForceSwitch = null;

        /**
         * now: 立即切换，syncComplete：等待同步完成后切换
         * @type {string || null}
         */
        this.SwitchTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcInstanceId = 'SrcInstanceId' in params ? params.SrcInstanceId : null;
        this.DstInstanceId = 'DstInstanceId' in params ? params.DstInstanceId : null;
        this.TimeDelay = 'TimeDelay' in params ? params.TimeDelay : null;
        this.ForceSwitch = 'ForceSwitch' in params ? params.ForceSwitch : null;
        this.SwitchTime = 'SwitchTime' in params ? params.SwitchTime : null;

    }
}

/**
 * ChangeReplicaToMaster请求参数结构体
 * @class
 */
class ChangeReplicaToMasterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 副本组Id，多AZ实例必填
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * Proxy节点信息。
 * @class
 */
class ProxyNodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 可用区 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

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
 * 单个实例信息
 * @class
 */
class RedisCommonInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户id
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 实例所属项目id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例接入区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例接入zone
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例网络id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例状态信息，1-流程中 ,2-运行中, -2-实例已隔离 ,-3-实例待回收, -4-实例已删除
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例网络ip
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * 实例网络端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * 计费类型，0-按量计费，1-包年包月
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 网络类型，0-基础网络，1-VPC网络
         * @type {number || null}
         */
        this.NetType = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vips = 'Vips' in params ? params.Vips : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * 访问来源信息
 * @class
 */
class SourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 来源IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 连接数
         * @type {number || null}
         */
        this.Conn = null;

        /**
         * 命令
         * @type {number || null}
         */
        this.Cmd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Conn = 'Conn' in params ? params.Conn : null;
        this.Cmd = 'Cmd' in params ? params.Cmd : null;

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
 * ChangeMasterInstance请求参数结构体
 * @class
 */
class ChangeMasterInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制组ID
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceDTSInfo请求参数结构体
 * @class
 */
class DescribeInstanceDTSInfoRequest extends  AbstractModel {
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
 * CreateParamTemplate请求参数结构体
 * @class
 */
class CreateParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数模板描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）。创建模板时必填，从源模板复制则不需要传入该参数。
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * 源参数模板 ID。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 参数列表。
         * @type {Array.<InstanceParam> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new InstanceParam();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * DescribeTendisSlowLog返回参数结构体
 * @class
 */
class DescribeTendisSlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 慢查询详情
         * @type {Array.<TendisSlowLogDetail> || null}
         */
        this.TendisSlowLogDetail = null;

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

        if (params.TendisSlowLogDetail) {
            this.TendisSlowLogDetail = new Array();
            for (let z in params.TendisSlowLogDetail) {
                let obj = new TendisSlowLogDetail();
                obj.deserialize(params.TendisSlowLogDetail[z]);
                this.TendisSlowLogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 地域售卖信息。
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
 * ModifyInstanceAccount请求参数结构体
 * @class
 */
class ModifyInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 子账号名称，如果要修改主账号，填root
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 子账号密码
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * 子账号描述信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 路由策略：填写master或者replication，表示主节点或者从节点
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * 子账号读写策略：填写r、w、rw，表示只读，只写，读写策略
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * true表示将主账号切换为免密账号，这里只适用于主账号，子账号不可免密
         * @type {boolean || null}
         */
        this.NoAuth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

    }
}

/**
 * ModifyMaintenanceWindow请求参数结构体
 * @class
 */
class ModifyMaintenanceWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 维护时间窗起始时间，如：17:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 维护时间窗结束时间，如：19:00
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeParamTemplateInfo请求参数结构体
 * @class
 */
class DescribeParamTemplateInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板 ID。
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeBackupUrl返回参数结构体
 * @class
 */
class DescribeBackupUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外网下载地址（6小时内链接有效），该字段正在逐步废弃中。
         * @type {Array.<string> || null}
         */
        this.DownloadUrl = null;

        /**
         * 内网下载地址（6小时内链接有效），该字段正在逐步废弃中。
         * @type {Array.<string> || null}
         */
        this.InnerDownloadUrl = null;

        /**
         * 文件名称，该字段正在逐步废弃中。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Filenames = null;

        /**
         * 备份文件信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BackupDownloadInfo> || null}
         */
        this.BackupInfos = null;

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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.InnerDownloadUrl = 'InnerDownloadUrl' in params ? params.InnerDownloadUrl : null;
        this.Filenames = 'Filenames' in params ? params.Filenames : null;

        if (params.BackupInfos) {
            this.BackupInfos = new Array();
            for (let z in params.BackupInfos) {
                let obj = new BackupDownloadInfo();
                obj.deserialize(params.BackupInfos[z]);
                this.BackupInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceRenewInstance返回参数结构体
 * @class
 */
class InquiryPriceRenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 价格，单位：分
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 数据库引擎名称，本接口取值：redis。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * InquiryPriceCreateInstance返回参数结构体
 * @class
 */
class InquiryPriceCreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 价格，单位：分
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例安全组信息
 * @class
 */
class InstanceSecurityGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 安全组信息
         * @type {Array.<SecurityGroupDetail> || null}
         */
        this.SecurityGroupDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.SecurityGroupDetails) {
            this.SecurityGroupDetails = new Array();
            for (let z in params.SecurityGroupDetails) {
                let obj = new SecurityGroupDetail();
                obj.deserialize(params.SecurityGroupDetails[z]);
                this.SecurityGroupDetails.push(obj);
            }
        }

    }
}

/**
 * 自定义的备份文件下载地址的 VPC 信息。
 * @class
 */
class BackupLimitVpcItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义下载备份文件的VPC 所属地域。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 自定义下载备份文件的 VPC 列表。
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcList = 'VpcList' in params ? params.VpcList : null;

    }
}

/**
 * UpgradeProxyVersion返回参数结构体
 * @class
 */
class UpgradeProxyVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID
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
 * ResetPassword请求参数结构体
 * @class
 */
class ResetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Redis实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 重置的密码（切换为免密实例时，可不传；其他情况必传）
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否切换免密实例，false-切换为非免密码实例，true-切换为免密码实例；默认false
         * @type {boolean || null}
         */
        this.NoAuth = null;

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
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

    }
}

/**
 * ModifyInstanceAccount返回参数结构体
 * @class
 */
class ModifyInstanceAccountResponse extends  AbstractModel {
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
 * 延时分布详情
 * @class
 */
class DelayDistribution extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分布阶梯，延时和Ladder值的对应关系：
[0ms,1ms]: 1；
[1ms,5ms]: 5；
[5ms,10ms]: 10；
[10ms,50ms]: 50；
[50ms,200ms]: 200；
[200ms,∞]: -1。
         * @type {number || null}
         */
        this.Ladder = null;

        /**
         * 延时处于当前分布阶梯的命令数量，个。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 修改时间。
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ladder = 'Ladder' in params ? params.Ladder : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

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
         * 安全组规则。
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * 符合条件的安全组总数量。
         * @type {number || null}
         */
        this.Total = null;

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
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist返回参数结构体
 * @class
 */
class DescribeInstanceMonitorTookDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时延分布信息
         * @type {Array.<DelayDistribution> || null}
         */
        this.Data = null;

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
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
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
         * 备份总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例的备份数组。
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
 * 实例整型参数描述
 * @class
 */
class InstanceIntegerParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 参数类型：integer
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * 修改后是否需要重启：true，false
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * 参数默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 当前运行参数值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 参数说明
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * 参数最小值
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 参数最大值
         * @type {string || null}
         */
        this.Max = null;

        /**
         * 参数状态, 1: 修改中， 2：修改完成
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 参数单位
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * UpgradeVersionToMultiAvailabilityZones请求参数结构体
 * @class
 */
class UpgradeVersionToMultiAvailabilityZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级多可用区之后是否支持就近访问功能。
<ul><li>true：支持就近访问功能。升级过程，需同时升级 Proxy 版本和 Redis 内核小版本，涉及数据搬迁，可能会长达数小时。</li><li>false：无需支持就近访问功能。升级多可用区仅涉及管理元数据迁移，对服务没有影响，升级过程通常在3分钟内完成。</li></ul>
         * @type {boolean || null}
         */
        this.UpgradeProxyAndRedisServer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UpgradeProxyAndRedisServer = 'UpgradeProxyAndRedisServer' in params ? params.UpgradeProxyAndRedisServer : null;

    }
}

/**
 * AllocateWanAddress返回参数结构体
 * @class
 */
class AllocateWanAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 开通外网的状态
         * @type {string || null}
         */
        this.WanStatus = null;

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
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist请求参数结构体
 * @class
 */
class DescribeInstanceMonitorTookDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 时间；例如："20190219"
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DeleteReplicationInstance请求参数结构体
 * @class
 */
class DeleteReplicationInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据同步类型，true:需要数据强同步,false:不需要强同步，仅限删除主实例
         * @type {boolean || null}
         */
        this.SyncType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SyncType = 'SyncType' in params ? params.SyncType : null;

    }
}

/**
 * KillMasterGroup请求参数结构体
 * @class
 */
class KillMasterGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 1.长度8-30位,推荐使用12位以上的密码
2.不能以"/"开头
3.至少包含两项
    a.小写字母a-z
    b.大写字母A-Z
    c.数字0-9
    d.()`~!@#$%^&*-+=_|{}[]:;<>,.?/
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 单AZ实例节点信息
         * @type {Array.<number> || null}
         */
        this.ShardIds = null;

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
        this.ShardIds = 'ShardIds' in params ? params.ShardIds : null;

    }
}

/**
 * 实例字符型参数描述
 * @class
 */
class InstanceTextParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 参数类型：text
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * 修改后是否需要重启：true，false
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * 参数默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 当前运行参数值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 参数说明
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * 参数可取值
         * @type {Array.<string> || null}
         */
        this.TextValue = null;

        /**
         * 参数状态, 1: 修改中， 2：修改完成
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
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.TextValue = 'TextValue' in params ? params.TextValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 参数模板信息
 * @class
 */
class ParamTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 参数模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数模板描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）
         * @type {number || null}
         */
        this.ProductType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmdTook返回参数结构体
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 耗时详细信息
         * @type {Array.<CommandTake> || null}
         */
        this.Data = null;

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
                let obj = new CommandTake();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseSSL请求参数结构体
 * @class
 */
class CloseSSLRequest extends  AbstractModel {
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
 * DescribeInstanceMonitorBigKeySizeDist请求参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 时间；例如："20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeInstanceAccount请求参数结构体
 * @class
 */
class DescribeInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量
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
 * SwitchProxy请求参数结构体
 * @class
 */
class SwitchProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例ProxyID
         * @type {string || null}
         */
        this.ProxyID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProxyID = 'ProxyID' in params ? params.ProxyID : null;

    }
}

/**
 * DescribeInstanceParamRecords请求参数结构体
 * @class
 */
class DescribeInstanceParamRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
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
 * DescribeTaskList请求参数结构体
 * @class
 */
class DescribeTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 分页大小,默认20，上限不大于100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍（自动向下取整）
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 项目Id
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 任务类型
         * @type {Array.<string> || null}
         */
        this.TaskTypes = null;

        /**
         * 起始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 终止时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务状态
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * 任务状态
         * @type {Array.<number> || null}
         */
        this.Result = null;

        /**
         * 操作者Uin，该字段已废弃，使用OperateUin代替
         * @type {Array.<number> || null}
         */
        this.OperatorUin = null;

        /**
         * 操作者Uin
         * @type {Array.<string> || null}
         */
        this.OperateUin = null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.TaskTypes = 'TaskTypes' in params ? params.TaskTypes : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;

    }
}

/**
 * ChangeReplicaToMaster返回参数结构体
 * @class
 */
class ChangeReplicaToMasterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
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
 * CreateInstances返回参数结构体
 * @class
 */
class CreateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易的ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 实例ID
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
 * ApplyParamsTemplate返回参数结构体
 * @class
 */
class ApplyParamsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {Array.<number> || null}
         */
        this.TaskIds = null;

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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReplicationGroup请求参数结构体
 * @class
 */
class DescribeReplicationGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页输出实例列表的大小，参数默认值20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 复制组ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 设置模糊查询的关键字，可以设置为实例ID或实例名称进行模糊查询。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * Redis节点信息
 * @class
 */
class RedisNodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点角色
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * 分片ID
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * 可用区ID
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd请求参数结构体
 * @class
 */
class DescribeInstanceMonitorTopNCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * ModifyNetworkConfig请求参数结构体
 * @class
 */
class ModifyNetworkConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 指预修改网络的类别，包括：
- changeVip：指切换私有网络，包含其内网IPv4地址及端口。
- changeVpc：指切换私有网络所属子网。
- changeBaseToVpc：指基础网络切换为私有网络。
- changeVPort：指仅修改实例网络端口。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 指实例私有网络内网 IPv4 地址。当**Operation**为**changeVip**时，需配置该参数。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 指修改后的私有网络 ID，当**Operation**为**changeVpc**或**changeBaseToVpc**时，需配置该参数。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 指修改后的私有网络所属子网 ID，当**Operation**为**changeVpc**或**changeBaseToVpc**时，需配置该参数。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 原内网 IPv4 地址保留时长。
- 单位：天。
- 取值范围：0、1、2、3、7、15。

**说明**：设置原地址保留时长需最新版SDK，否则原地址将立即释放，查看SDK版本，请参见 [SDK中心](https://cloud.tencent.com/document/sdk)。
         * @type {number || null}
         */
        this.Recycle = null;

        /**
         * 指修改后的网络端口。当**Operation**为**changeVPort**或**changeVip**时，需配置该参数。取值范围为[1024,65535]。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Recycle = 'Recycle' in params ? params.Recycle : null;
        this.VPort = 'VPort' in params ? params.VPort : null;

    }
}

/**
 * DescribeInstanceSecurityGroup请求参数结构体
 * @class
 */
class DescribeInstanceSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例列表
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
 * 实例参数修改历史
 * @class
 */
class InstanceParamHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 修改前值
         * @type {string || null}
         */
        this.PreValue = null;

        /**
         * 修改后值
         * @type {string || null}
         */
        this.NewValue = null;

        /**
         * 状态：1-参数配置修改中；2-参数配置修改成功；3-参数配置修改失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.PreValue = 'PreValue' in params ? params.PreValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

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
         * 实例Id
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
 * CleanUpInstance返回参数结构体
 * @class
 */
class CleanUpInstanceResponse extends  AbstractModel {
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
 * ModifyDBInstanceSecurityGroups请求参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：redis。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 实例 ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeParamTemplates返回参数结构体
 * @class
 */
class DescribeParamTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该用户的参数模板数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数模板详情。
         * @type {Array.<ParamTemplateInfo> || null}
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
                let obj = new ParamTemplateInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceShards请求参数结构体
 * @class
 */
class DescribeInstanceShardsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否过滤掉从节信息
         * @type {boolean || null}
         */
        this.FilterSlave = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FilterSlave = 'FilterSlave' in params ? params.FilterSlave : null;

    }
}

/**
 * 安全组出站规则
 * @class
 */
class Outbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略，ACCEPT或者DROP。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 地址组id代表的地址集合。
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * 来源Ip或Ip段，例如192.168.0.0/16。
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 描述。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 网络协议，支持udp、tcp等。
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 端口。
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 服务组id代表的协议和端口集合。
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * 安全组id代表的地址集合。
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Id = 'Id' in params ? params.Id : null;

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
         * 全量备份文件保存天数
         * @type {number || null}
         */
        this.BackupStorageDays = null;

        /**
         * tendis binlog备份文件保存天数
         * @type {number || null}
         */
        this.BinlogStorageDays = null;

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
        this.BackupStorageDays = 'BackupStorageDays' in params ? params.BackupStorageDays : null;
        this.BinlogStorageDays = 'BinlogStorageDays' in params ? params.BinlogStorageDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeInstance请求参数结构体
 * @class
 */
class InquiryPriceUpgradeInstanceRequest extends  AbstractModel {
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
 * ModifyParamTemplate返回参数结构体
 * @class
 */
class ModifyParamTemplateResponse extends  AbstractModel {
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
 * DescribeProjectSecurityGroups请求参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：redis。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 项目 ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 偏移量，取值为Limit的整数倍。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取数量限制，默认 20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索条件，支持安全组 ID 或者安全组名称。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeySizeDist返回参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大Key大小分布详情
         * @type {Array.<DelayDistribution> || null}
         */
        this.Data = null;

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
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组规则
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 安全组ID。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称。
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * 安全组备注。
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

        /**
         * 出站规则。
         * @type {Array.<Outbound> || null}
         */
        this.Outbound = null;

        /**
         * 入站规则。
         * @type {Array.<Inbound> || null}
         */
        this.Inbound = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new Outbound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new Inbound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

    }
}

/**
 * CreateInstanceAccount请求参数结构体
 * @class
 */
class CreateInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 子账号名称
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 1.长度8-30位,推荐使用12位以上的密码
2.不能以"/"开头
3.至少包含两项
    a.小写字母a-z
    b.大写字母A-Z
    c.数字0-9
    d.()`~!@#$%^&*-+=_|{}[]:;<>,.?/
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * 路由策略：填写master或者replication，表示主节点或者从节点
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * 读写策略：填写r、rw，表示只读、读写
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * 子账号描述信息
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
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * EnableReplicaReadonly返回参数结构体
 * @class
 */
class EnableReplicaReadonlyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误：ERROR，正确OK（已废弃）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMaintenanceWindow返回参数结构体
 * @class
 */
class DescribeMaintenanceWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维护时间窗起始时间，如：17:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 维护时间窗结束时间，如：19:00
         * @type {string || null}
         */
        this.EndTime = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceSecurityGroup返回参数结构体
 * @class
 */
class DescribeInstanceSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例安全组信息
         * @type {Array.<InstanceSecurityGroupDetail> || null}
         */
        this.InstanceSecurityGroupsDetail = null;

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

        if (params.InstanceSecurityGroupsDetail) {
            this.InstanceSecurityGroupsDetail = new Array();
            for (let z in params.InstanceSecurityGroupsDetail) {
                let obj = new InstanceSecurityGroupDetail();
                obj.deserialize(params.InstanceSecurityGroupsDetail[z]);
                this.InstanceSecurityGroupsDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseWanAddress返回参数结构体
 * @class
 */
class ReleaseWanAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 关闭外网的状态
         * @type {string || null}
         */
        this.WanStatus = null;

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
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 产品类型，2 – Redis2.8内存版(标准架构)，3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版(单机版)，6 – Redis4.0内存版(标准架构)，7 – Redis4.0内存版(集群架构)，8 – Redis5.0内存版(标准架构)，9 – Redis5.0内存版(集群架构)，10 – Redis4.0混合存储版Tendis
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 产品名称，Redis主从版，CKV主从版，CKV集群版，Redis单机版，Redis集群版，混合存储版Tendis
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
 * ModifyConnectionConfig请求参数结构体
 * @class
 */
class ModifyConnectionConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的ID，长度在12-36之间。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 附加带宽，大于0，单位MB。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 单分片的总连接数。
未开启副本只读时，下限为10000，上限为40000；
开启副本只读时，下限为10000，上限为10000×(只读副本数+3)。
         * @type {number || null}
         */
        this.ClientLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ClientLimit = 'ClientLimit' in params ? params.ClientLimit : null;

    }
}

/**
 * 实例节点
 * @class
 */
class InstanceNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 节点详细信息
         * @type {Array.<InstanceClusterNode> || null}
         */
        this.InstanceClusterNode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.InstanceClusterNode) {
            this.InstanceClusterNode = new Array();
            for (let z in params.InstanceClusterNode) {
                let obj = new InstanceClusterNode();
                obj.deserialize(params.InstanceClusterNode[z]);
                this.InstanceClusterNode.push(obj);
            }
        }

    }
}

/**
 * tendis节点信息
 * @class
 */
class TendisNodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点角色
         * @type {string || null}
         */
        this.NodeRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;

    }
}

/**
 * SwitchProxy返回参数结构体
 * @class
 */
class SwitchProxyResponse extends  AbstractModel {
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
 * StartupInstance返回参数结构体
 * @class
 */
class StartupInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * 详细DTS实例信息
 * @class
 */
class DescribeInstanceDTSInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 仓库ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SetId = null;

        /**
         * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 实例类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 状态
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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * API购买实例绑定标签
 * @class
 */
class ResourceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签value
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
 * 实例节点信息
 * @class
 */
class ReplicaGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 节点组的名称，主节点为空
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 节点的可用区ID，比如ap-guangzhou-1
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 节点组类型，master为主节点，replica为副本节点
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 节点组节点列表
         * @type {Array.<RedisNode> || null}
         */
        this.RedisNodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Role = 'Role' in params ? params.Role : null;

        if (params.RedisNodes) {
            this.RedisNodes = new Array();
            for (let z in params.RedisNodes) {
                let obj = new RedisNode();
                obj.deserialize(params.RedisNodes[z]);
                this.RedisNodes.push(obj);
            }
        }

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
 * DescribeInstanceMonitorBigKeyTypeDist返回参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大Key类型分布详细信息
         * @type {Array.<BigKeyTypeInfo> || null}
         */
        this.Data = null;

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
                let obj = new BigKeyTypeInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReplicationInstance返回参数结构体
 * @class
 */
class DeleteReplicationInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
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
 * CleanUpInstance请求参数结构体
 * @class
 */
class CleanUpInstanceRequest extends  AbstractModel {
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
 * 复制组信息
 * @class
 */
class Groups extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户AppID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 地域ID 1--广州 4--上海 5-- 中国香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 复制组信息
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 复制组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 复制组状态，37："绑定复制组中"，38："复制组重连中"，51："解绑复制组中"，52："复制组实例切主中"，53："角色变更中"
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 复制组数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 复制组实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Instances> || null}
         */
        this.Instances = null;

        /**
         * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instances();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

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
         * 每页输出实例的数量，参数默认值20，最大值为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，取Limit整数倍。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例 ID，如：crs-6ubhgouj。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例排序依据，枚举值如下所示：<ul><li>projectId：项目ID。</li><li>createtime：实例创建时间。</li><li>instancename：实例名称。</li><li>type：实例类型。</li><li>curDeadline：实例到期时间。</li></ul>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 实例排序方式，默认为倒序排序。<ul><li>1：倒序。</li><li>0：顺序。</li></ul>
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 私有网络 ID 数组。如果不配置该参数或设置数组为空则默认选择基础网络。例如47525。该参数暂时保留，可忽略。请根据 UniqVpcIds 参数格式设置私有网络ID数组。
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * 私有网络所属子网 ID 数组，例如：56854。该参数暂时保留，可忽略。请根据 UniqSubnetIds 参数格式设置私有网络子网 ID 数组。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 设置模糊查询关键字，支持根据实例名称或实例ID模糊查询实例。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 项目 ID 组成的数组。
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 私有网络 ID 数组。如果不配置该参数或者设置数组为空则默认选择基础网络，如：vpc-sad23jfdfk。
         * @type {Array.<string> || null}
         */
        this.UniqVpcIds = null;

        /**
         * 私有网络所属子网 ID 数组，如：subnet-fdj24n34j2。
         * @type {Array.<string> || null}
         */
        this.UniqSubnetIds = null;

        /**
         * 地域 ID 数组，该参数已经弃用，可通过公共参数Region查询对应地域。
         * @type {Array.<number> || null}
         */
        this.RegionIds = null;

        /**
         * 实例状态。<ul><li>0：待初始化。</li><li>1：流程中。</li><li>2：运行中。</li><li>-2：已隔离。</li><li>-3：待删除。</li></ul>
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 实例架构版本。<ul><li>1：单机版。</li><li>2：主从版。</li><li>3：集群版。</li></ul>
         * @type {number || null}
         */
        this.TypeVersion = null;

        /**
         * 存储引擎信息。可设置为Redis-2.8、Redis-4.0、Redis-5.0、Redis-6.0 或者 CKV。
         * @type {string || null}
         */
        this.EngineName = null;

        /**
         * 续费模式。<ul><li>0：默认状态（手动续费）。</li><li>1：自动续费。</li><li>2：明确不自动续费。</ul>
         * @type {Array.<number> || null}
         */
        this.AutoRenew = null;

        /**
         * 计费模式。<ul><li>postpaid：按量计费。</li><li>prepaid：包年包月。</li></ul>
         * @type {string || null}
         */
        this.BillingMode = null;

        /**
         * 实例类型。<ul><li>1：Redis 老集群版。</li><li>2：Redis 2.8 主从版。</li><li>3：CKV 主从版。</li><li>4：CKV 集群版。</li><li>5：Redis 2.8 单机版。</li><li>6：Redis 4.0主从版。</li><li>7：Redis 4.0 集群版。</li><li>8：Redis 5.0 主从版。</li><li>9：Redis 5.0 集群版。</li></ul>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 设置搜索关键字数组，可根据实例ID、实例名称、完整IP地址查询实例。
         * @type {Array.<string> || null}
         */
        this.SearchKeys = null;

        /**
         * 内部参数，用户可忽略。
         * @type {Array.<number> || null}
         */
        this.TypeList = null;

        /**
         * 内部参数，用户可忽略。
         * @type {string || null}
         */
        this.MonitorVersion = null;

        /**
         * 根据标签的 Key 和 Value 筛选资源。该参数不配置或者数组设置为空值，则不根据标签进行过滤。
         * @type {Array.<InstanceTagInfo> || null}
         */
        this.InstanceTags = null;

        /**
         * 根据标签的 Key 筛选资源，该参数不配置或者数组设置为空值，则不根据标签Key进行过滤。
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 实例的产品版本。如果该参数不配置或者数组设置为空值，则默认不依据此参数过滤实例。<ul><li>local：本地盘版。</li><li>cloud：云盘版。</li><li>cdc：独享集群版。</li></ul>
         * @type {Array.<string> || null}
         */
        this.ProductVersions = null;

        /**
         * 批量查询指定的实例 ID，返回结果已 Limit 限制为主。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 可用区模式。<ul><li>singleaz：单可用区。</li><li>multiaz：多可用区。</li></ul>
         * @type {string || null}
         */
        this.AzMode = null;

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
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TypeVersion = 'TypeVersion' in params ? params.TypeVersion : null;
        this.EngineName = 'EngineName' in params ? params.EngineName : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.TypeList = 'TypeList' in params ? params.TypeList : null;
        this.MonitorVersion = 'MonitorVersion' in params ? params.MonitorVersion : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTagInfo();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.ProductVersions = 'ProductVersions' in params ? params.ProductVersions : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.AzMode = 'AzMode' in params ? params.AzMode : null;

    }
}

/**
 * 访问命令
 * @class
 */
class SourceCommand extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命令
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * 执行次数
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
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Count = 'Count' in params ? params.Count : null;

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
 * DescribeSlowLog请求参数结构体
 * @class
 */
class DescribeSlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 慢查询平均执行时间阈值（单位：毫秒）。
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * 每个页面展示的慢查询条数，默认值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 慢查询条数的偏移量，取Limit整数倍。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 节点所属角色。<ul><li>master：主节点。</li><li>slave：从节点。</li></ul>
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DeleteParamTemplate请求参数结构体
 * @class
 */
class DeleteParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板 ID。
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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
 * DescribeInstanceMonitorSIP返回参数结构体
 * @class
 */
class DescribeInstanceMonitorSIPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问来源信息
         * @type {Array.<SourceInfo> || null}
         */
        this.Data = null;

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
                let obj = new SourceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPostpaidInstance请求参数结构体
 * @class
 */
class DestroyPostpaidInstanceRequest extends  AbstractModel {
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
 * ChangeInstanceRole请求参数结构体
 * @class
 */
class ChangeInstanceRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例角色，rw可读写，r只读
         * @type {string || null}
         */
        this.InstanceRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

    }
}

/**
 * DeleteInstanceAccount请求参数结构体
 * @class
 */
class DeleteInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 子账号名称
         * @type {string || null}
         */
        this.AccountName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;

    }
}

/**
 * DescribeInstanceMonitorHotKey请求参数结构体
 * @class
 */
class DescribeInstanceMonitorHotKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

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
         * 订单ID。
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

        /**
         * 保存天数。0代表指定默认保留时间
         * @type {number || null}
         */
        this.StorageDays = null;

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
        this.StorageDays = 'StorageDays' in params ? params.StorageDays : null;

    }
}

/**
 * DescribeReplicationGroup返回参数结构体
 * @class
 */
class DescribeReplicationGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制组数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 复制组信息。
         * @type {Array.<Groups> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new Groups();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyParamTemplate请求参数结构体
 * @class
 */
class ModifyParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源参数模板 ID。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 参数模板修改后的新名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数模板修改后的新描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 修改后的新参数列表。
         * @type {Array.<InstanceParam> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new InstanceParam();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

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
 * 实例详细信息列表。
 * @class
 */
class InstanceSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户的 AppID。
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 项目 ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 地域 ID。<ul><li>1：广州。</li><li>4：上海。</li><li>5：中国香港。</li><li>6：多伦多。</li> <li>7：上海金融。</li> <li>8：北京。</li> <li>9：新加坡。</li> <li>11：深圳金融。</li> <li>15：美西（硅谷）。</li><li>16：成都。</li><li>17：法兰克福。</li><li>18：首尔。</li><li>19：重庆。</li><li>21：孟买。</li><li>22：美东（弗吉尼亚）。</li><li>23：曼谷。</li><li>24：莫斯科。</li><li>25：东京。</li></ul>
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 区域 ID。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * vpc网络 ID，例如75101。
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * vpc网络下子网ID，如：46315。
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 实例当前状态。<ul><li>0：待初始化。</li><li>1：实例在流程中。</li><li>2：实例运行中。</li><li>-2：实例已隔离。</li><li>-3：实例待删除。</li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例 VIP。
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 实例端口号。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 实例创建时间。
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * 实例容量大小，单位：MB。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 该字段已废弃。可使用云监控 API 接口 [GetMonitorData](https://cloud.tencent.com/document/product/248/31014) 获取实例已使用的内容容量。
         * @type {number || null}
         */
        this.SizeUsed = null;

        /**
         * 实例类型：<ul><li>1：Redis2.8内存版（集群架构）。</li><li>2：Redis2.8内存版（标准架构）。</li><li>3：CKV 3.2内存版(标准架构)。</li><li>4：CKV 3.2内存版(集群架构)。</li><li>5：Redis2.8内存版（单机）。</li></li><li>6：Redis4.0内存版（标准架构）。</li></li><li>7：Redis4.0内存版（集群架构）。</li></li><li>8：Redis5.0内存版（标准架构）。</li></li><li>9：Redis5.0内存版（集群架构）。</li></ul>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 实例是否设置自动续费标识。<ul><li>1：设置自动续费。</li><li>0：未设置自动续费。</li></ul>
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 实例到期时间。
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * 引擎：社区版Redis、腾讯云CKV。
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 产品类型。<ul><li>standalone：标准版。</li><li>cluster ：集群版。</li></ul>
         * @type {string || null}
         */
        this.ProductType = null;

        /**
         * vpc网络id，例如vpc-fk33jsf43kgv。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * vpc网络下子网id，例如：subnet-fd3j6l35mm0。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 计费模式。<ul><li>0：按量计费。</li><li>1：包年包月。</li></ul>
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * 实例运行状态描述：如”实例运行中“。
         * @type {string || null}
         */
        this.InstanceTitle = null;

        /**
         * 计划下线时间。
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * 流程中的实例，返回子状态。
         * @type {number || null}
         */
        this.SubStatus = null;

        /**
         * 反亲和性标签。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 实例节点信息。
         * @type {Array.<InstanceNode> || null}
         */
        this.InstanceNode = null;

        /**
         * 分片大小。
         * @type {number || null}
         */
        this.RedisShardSize = null;

        /**
         * 分片数量。
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * 副本数量。
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * 计费 ID。
         * @type {number || null}
         */
        this.PriceId = null;

        /**
         * 隔离时间。
         * @type {string || null}
         */
        this.CloseTime = null;

        /**
         * 从节点读取权重。
         * @type {number || null}
         */
        this.SlaveReadWeight = null;

        /**
         * 实例关联的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceTagInfo> || null}
         */
        this.InstanceTags = null;

        /**
         * 项目名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 是否为免密实例。<ul><li>true：免密实例。</li><li>false：非免密实例。</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * 客户端连接数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClientLimit = null;

        /**
         * DTS状态（内部参数，用户可忽略）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DtsStatus = null;

        /**
         * 分片带宽上限，单位MB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NetLimit = null;

        /**
         * 免密实例标识（内部参数，用户可忽略）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PasswordFree = null;

        /**
         * 内部参数，用户可忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * 实例只读标识（内部参数，用户可忽略）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 内部参数，用户可忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RemainBandwidthDuration = null;

        /**
         * Redis实例请忽略该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 监控版本。<ul><li>1m：1分钟粒度监控。</li><li>5s：5秒粒度监控。</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MonitorVersion = null;

        /**
         * 客户端最大连接数可设置的最小值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClientLimitMin = null;

        /**
         * 客户端最大连接数可设置的最大值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClientLimitMax = null;

        /**
         * 实例的节点详细信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * 实例所在的地域信息，比如ap-guangzhou。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 外网地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WanAddress = null;

        /**
         * 北极星服务地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolarisServer = null;

        /**
         * 实例当前Proxy版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurrentProxyVersion = null;

        /**
         * 实例当前Cache小版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurrentRedisVersion = null;

        /**
         * 实例可升级Proxy版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpgradeProxyVersion = null;

        /**
         * 实例可升级Cache小版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpgradeRedisVersion = null;

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
        this.InstanceTitle = 'InstanceTitle' in params ? params.InstanceTitle : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.SubStatus = 'SubStatus' in params ? params.SubStatus : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

        if (params.InstanceNode) {
            this.InstanceNode = new Array();
            for (let z in params.InstanceNode) {
                let obj = new InstanceNode();
                obj.deserialize(params.InstanceNode[z]);
                this.InstanceNode.push(obj);
            }
        }
        this.RedisShardSize = 'RedisShardSize' in params ? params.RedisShardSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.PriceId = 'PriceId' in params ? params.PriceId : null;
        this.CloseTime = 'CloseTime' in params ? params.CloseTime : null;
        this.SlaveReadWeight = 'SlaveReadWeight' in params ? params.SlaveReadWeight : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTagInfo();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;
        this.ClientLimit = 'ClientLimit' in params ? params.ClientLimit : null;
        this.DtsStatus = 'DtsStatus' in params ? params.DtsStatus : null;
        this.NetLimit = 'NetLimit' in params ? params.NetLimit : null;
        this.PasswordFree = 'PasswordFree' in params ? params.PasswordFree : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.RemainBandwidthDuration = 'RemainBandwidthDuration' in params ? params.RemainBandwidthDuration : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.MonitorVersion = 'MonitorVersion' in params ? params.MonitorVersion : null;
        this.ClientLimitMin = 'ClientLimitMin' in params ? params.ClientLimitMin : null;
        this.ClientLimitMax = 'ClientLimitMax' in params ? params.ClientLimitMax : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.WanAddress = 'WanAddress' in params ? params.WanAddress : null;
        this.PolarisServer = 'PolarisServer' in params ? params.PolarisServer : null;
        this.CurrentProxyVersion = 'CurrentProxyVersion' in params ? params.CurrentProxyVersion : null;
        this.CurrentRedisVersion = 'CurrentRedisVersion' in params ? params.CurrentRedisVersion : null;
        this.UpgradeProxyVersion = 'UpgradeProxyVersion' in params ? params.UpgradeProxyVersion : null;
        this.UpgradeRedisVersion = 'UpgradeRedisVersion' in params ? params.UpgradeRedisVersion : null;

    }
}

/**
 * ReleaseWanAddress请求参数结构体
 * @class
 */
class ReleaseWanAddressRequest extends  AbstractModel {
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
 * InquiryPriceRenewInstance请求参数结构体
 * @class
 */
class InquiryPriceRenewInstanceRequest extends  AbstractModel {
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
 * CloseSSL返回参数结构体
 * @class
 */
class CloseSSLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。
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
 * ModifyMaintenanceWindow返回参数结构体
 * @class
 */
class ModifyMaintenanceWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改状态：success 或者 failed
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
 * CreateReplicationGroup返回参数结构体
 * @class
 */
class CreateReplicationGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID。
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
 * DescribeInstanceMonitorBigKeyTypeDist请求参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 时间；例如："20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmdTook请求参数结构体
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DestroyPrepaidInstance返回参数结构体
 * @class
 */
class DestroyPrepaidInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单Id
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
 * DescribeCommonDBInstances返回参数结构体
 * @class
 */
class DescribeCommonDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例信息
         * @type {Array.<RedisCommonInstanceList> || null}
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
                let obj = new RedisCommonInstanceList();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateInstance请求参数结构体
 * @class
 */
class InquiryPriceCreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例类型：2 – Redis2.8内存版(标准架构)，3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，6 – Redis4.0内存版(标准架构)，7 – Redis4.0内存版(集群架构)，8 – Redis5.0内存版(标准架构)，9 – Redis5.0内存版(集群架构)。
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * 内存容量，单位为MB， 数值需为1024的整数倍，具体规格以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。
TypeId为标准架构时，MemSize是实例总内存容量；TypeId为集群架构时，MemSize是单分片内存容量。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 实例数量，单次购买实例数量以 [查询产品售卖规格](https://cloud.tencent.com/document/api/239/30600) 返回的规格为准。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 购买时长，在创建包年包月实例的时候需要填写，按量计费实例填1即可，单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 付费方式:0-按量计费，1-包年包月。
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * 实例所属的可用区ID，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106)  。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 实例分片数量，Redis2.8标准架构、CKV标准架构和Redis2.8单机版、Redis4.0标准架构不需要填写。
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * 实例副本数量，Redis2.8标准架构、CKV标准架构和Redis2.8单机版不需要填写。
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * 是否支持副本只读，Redis2.8标准架构、CKV标准架构和Redis2.8单机版不需要填写。
         * @type {boolean || null}
         */
        this.ReplicasReadonly = null;

        /**
         * 实例所属的可用区名称，可参考[地域和可用区](https://cloud.tencent.com/document/product/239/4106)  。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * "local"本地盘版，"cloud"云盘版，"cdc"独享集群版，如果不传默认询价为本地盘版本
         * @type {string || null}
         */
        this.ProductVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;

    }
}

/**
 * UpgradeSmallVersion返回参数结构体
 * @class
 */
class UpgradeSmallVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID
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
 * ModifyInstanceParams请求参数结构体
 * @class
 */
class ModifyInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例修改的参数列表。
         * @type {Array.<InstanceParam> || null}
         */
        this.InstanceParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.InstanceParams) {
            this.InstanceParams = new Array();
            for (let z in params.InstanceParams) {
                let obj = new InstanceParam();
                obj.deserialize(params.InstanceParams[z]);
                this.InstanceParams.push(obj);
            }
        }

    }
}

/**
 * OpenSSL请求参数结构体
 * @class
 */
class OpenSSLRequest extends  AbstractModel {
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
 * 备份文件下载信息
 * @class
 */
class BackupDownloadInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 备份文件大小，单位B，如果为0，表示无效
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 备份文件外网下载地址（6小时）
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 备份文件内网下载地址（6小时）
         * @type {string || null}
         */
        this.InnerDownloadUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.InnerDownloadUrl = 'InnerDownloadUrl' in params ? params.InnerDownloadUrl : null;

    }
}

/**
 * 大Key类型分布详情
 * @class
 */
class BigKeyTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 时间戳
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeInstanceNodeInfo请求参数结构体
 * @class
 */
class DescribeInstanceNodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 列表大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
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
 * DescribeMaintenanceWindow请求参数结构体
 * @class
 */
class DescribeMaintenanceWindowRequest extends  AbstractModel {
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
 * AddReplicationInstance请求参数结构体
 * @class
 */
class AddReplicationInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制组ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 给复制组添加的实例分配角色。<ul><li>rw：可读写。</li><li>r：只读。</li></ul>
         * @type {string || null}
         */
        this.InstanceRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

    }
}

/**
 * 实例节点类型
 * @class
 */
class InstanceClusterNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实例运行时节点Id
         * @type {string || null}
         */
        this.RunId = null;

        /**
         * 集群角色：0-master；1-slave
         * @type {number || null}
         */
        this.Role = null;

        /**
         * 节点状态：0-readwrite, 1-read, 2-backup
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 服务状态：0-down；1-on
         * @type {number || null}
         */
        this.Connected = null;

        /**
         * 节点创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 节点下线时间
         * @type {string || null}
         */
        this.DownTime = null;

        /**
         * 节点slot分布
         * @type {string || null}
         */
        this.Slots = null;

        /**
         * 节点key分布
         * @type {number || null}
         */
        this.Keys = null;

        /**
         * 节点qps
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 节点qps倾斜度
         * @type {number || null}
         */
        this.QpsSlope = null;

        /**
         * 节点存储
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 节点存储倾斜度
         * @type {number || null}
         */
        this.StorageSlope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.RunId = 'RunId' in params ? params.RunId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Connected = 'Connected' in params ? params.Connected : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DownTime = 'DownTime' in params ? params.DownTime : null;
        this.Slots = 'Slots' in params ? params.Slots : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.QpsSlope = 'QpsSlope' in params ? params.QpsSlope : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageSlope = 'StorageSlope' in params ? params.StorageSlope : null;

    }
}

/**
 * DescribeTendisSlowLog请求参数结构体
 * @class
 */
class DescribeTendisSlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id：crs-ngvou0i1
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间：2019-09-08 12:12:41
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间：2019-09-09 12:12:41
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 慢查询阈值（毫秒）
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * 页面大小：默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeProxySlowLog请求参数结构体
 * @class
 */
class DescribeProxySlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 慢查询阈值（单位：毫秒）
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * 页面大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeProxySlowLog返回参数结构体
 * @class
 */
class DescribeProxySlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 慢查询详情
         * @type {Array.<InstanceProxySlowlogDetail> || null}
         */
        this.InstanceProxySlowLogDetail = null;

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

        if (params.InstanceProxySlowLogDetail) {
            this.InstanceProxySlowLogDetail = new Array();
            for (let z in params.InstanceProxySlowLogDetail) {
                let obj = new InstanceProxySlowlogDetail();
                obj.deserialize(params.InstanceProxySlowLogDetail[z]);
                this.InstanceProxySlowLogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceReadOnly请求参数结构体
 * @class
 */
class ModifyInstanceReadOnlyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例输入模式，0：读写 1：只读
         * @type {string || null}
         */
        this.InputMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InputMode = 'InputMode' in params ? params.InputMode : null;

    }
}

/**
 * DescribeInstanceAccount返回参数结构体
 * @class
 */
class DescribeInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * 账号个数
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

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey请求参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 请求类型：1——string类型，2——所有类型
         * @type {number || null}
         */
        this.ReqType = null;

        /**
         * 时间；例如："20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReqType = 'ReqType' in params ? params.ReqType : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DisableReplicaReadonly请求参数结构体
 * @class
 */
class DisableReplicaReadonlyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例序号ID
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
 * DescribeParamTemplateInfo返回参数结构体
 * @class
 */
class DescribeParamTemplateInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例参数个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数模板 ID。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 参数模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 产品类型：1 – Redis2.8内存版（集群架构），2 – Redis2.8内存版（标准架构），3 – CKV 3.2内存版(标准架构)，4 – CKV 3.2内存版(集群架构)，5 – Redis2.8内存版（单机），6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构）
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * 参数模板描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 参数详情
         * @type {Array.<ParameterDetail> || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
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
 * SwitchInstanceVip返回参数结构体
 * @class
 */
class SwitchInstanceVipResponse extends  AbstractModel {
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
 * DescribeInstanceParams返回参数结构体
 * @class
 */
class DescribeInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例参数个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例枚举类型参数
         * @type {Array.<InstanceEnumParam> || null}
         */
        this.InstanceEnumParam = null;

        /**
         * 实例整型参数
         * @type {Array.<InstanceIntegerParam> || null}
         */
        this.InstanceIntegerParam = null;

        /**
         * 实例字符型参数
         * @type {Array.<InstanceTextParam> || null}
         */
        this.InstanceTextParam = null;

        /**
         * 实例多选项型参数
         * @type {Array.<InstanceMultiParam> || null}
         */
        this.InstanceMultiParam = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 数据库引擎名称，本接口取值：redis。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 安全组 ID。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例ID列表，一个或者多个实例 ID 组成的数组。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * StartupInstance请求参数结构体
 * @class
 */
class StartupInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
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
 * 热Key详细信息
 * @class
 */
class HotKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数量
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 实例枚举类型参数描述
 * @class
 */
class InstanceEnumParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 参数类型：enum
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * 修改后是否需要重启：true，false
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * 参数默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 当前运行参数值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 参数说明
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * 参数可取值
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * 参数状态, 1: 修改中， 2：修改完成
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
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateInstanceAccount返回参数结构体
 * @class
 */
class CreateInstanceAccountResponse extends  AbstractModel {
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
 * DescribeInstanceBackups请求参数结构体
 * @class
 */
class DescribeInstanceBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页输出的备份列表大小。默认大小为20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 待操作的实例ID，可通过 DescribeInstance 接口返回值中的 InstanceId 获取。
         * @type {string || null}
         */
        this.InstanceId = null;

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
         * 备份任务的状态：
1：备份在流程中。
2：备份正常。
3：备份转RDB文件处理中。
4：已完成RDB转换。
-1：备份已过期。
-2：备份已删除。
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 实例名称，支持根据实例名称模糊搜索。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * 安全组详情
 * @class
 */
class SecurityGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 安全组Id
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * 安全组标记
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

        /**
         * 安全组入站规则
         * @type {Array.<SecurityGroupsInboundAndOutbound> || null}
         */
        this.InboundRule = null;

        /**
         * 安全组出站规则
         * @type {Array.<SecurityGroupsInboundAndOutbound> || null}
         */
        this.OutboundRule = null;

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
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.InboundRule) {
            this.InboundRule = new Array();
            for (let z in params.InboundRule) {
                let obj = new SecurityGroupsInboundAndOutbound();
                obj.deserialize(params.InboundRule[z]);
                this.InboundRule.push(obj);
            }
        }

        if (params.OutboundRule) {
            this.OutboundRule = new Array();
            for (let z in params.OutboundRule) {
                let obj = new SecurityGroupsInboundAndOutbound();
                obj.deserialize(params.OutboundRule[z]);
                this.OutboundRule.push(obj);
            }
        }

    }
}

/**
 * InquiryPriceUpgradeInstance返回参数结构体
 * @class
 */
class InquiryPriceUpgradeInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 价格，单位：分
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstanceAccount返回参数结构体
 * @class
 */
class DeleteInstanceAccountResponse extends  AbstractModel {
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
 * DescribeInstanceMonitorSIP请求参数结构体
 * @class
 */
class DescribeInstanceMonitorSIPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
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
 * 实例分片列表信息
 * @class
 */
class InstanceClusterShard extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片节点名称
         * @type {string || null}
         */
        this.ShardName = null;

        /**
         * 分片节点Id
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * 角色
         * @type {number || null}
         */
        this.Role = null;

        /**
         * Key数量
         * @type {number || null}
         */
        this.Keys = null;

        /**
         * slot信息
         * @type {string || null}
         */
        this.Slots = null;

        /**
         * 使用容量
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 容量倾斜率
         * @type {number || null}
         */
        this.StorageSlope = null;

        /**
         * 实例运行时节点Id
         * @type {string || null}
         */
        this.Runid = null;

        /**
         * 服务状态：0-down；1-on
         * @type {number || null}
         */
        this.Connected = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardName = 'ShardName' in params ? params.ShardName : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Slots = 'Slots' in params ? params.Slots : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageSlope = 'StorageSlope' in params ? params.StorageSlope : null;
        this.Runid = 'Runid' in params ? params.Runid : null;
        this.Connected = 'Connected' in params ? params.Connected : null;

    }
}

/**
 * OpenSSL返回参数结构体
 * @class
 */
class OpenSSLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。
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
 * Tendis慢查询详情
 * @class
 */
class TendisSlowLogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行时间
         * @type {string || null}
         */
        this.ExecuteTime = null;

        /**
         * 慢查询耗时（毫秒）
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 命令
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 详细命令行信息
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * 节点ID
         * @type {string || null}
         */
        this.Node = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.Node = 'Node' in params ? params.Node : null;

    }
}

/**
 * ChangeInstanceRole返回参数结构体
 * @class
 */
class ChangeInstanceRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID
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
 * UpgradeProxyVersion请求参数结构体
 * @class
 */
class UpgradeProxyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 当前proxy版本
         * @type {string || null}
         */
        this.CurrentProxyVersion = null;

        /**
         * 可升级的redis版本
         * @type {string || null}
         */
        this.UpgradeProxyVersion = null;

        /**
         * 1-立即升级   0-维护时间窗口升级
         * @type {number || null}
         */
        this.InstanceTypeUpgradeNow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CurrentProxyVersion = 'CurrentProxyVersion' in params ? params.CurrentProxyVersion : null;
        this.UpgradeProxyVersion = 'UpgradeProxyVersion' in params ? params.UpgradeProxyVersion : null;
        this.InstanceTypeUpgradeNow = 'InstanceTypeUpgradeNow' in params ? params.InstanceTypeUpgradeNow : null;

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
 * UpgradeInstance请求参数结构体
 * @class
 */
class UpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待变更实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 指实例每个分片内存变更后的大小。<ul><li>单位 MB。</li><li>每次只能修改参数MemSize、RedisShardNum和RedisReplicasNum其中的一个，不能同时修改。且修改其中一个参数时，其他两个参数需输入实例原有的配置规格。</li><li>缩容时，缩容后的规格务必要大于等于使用容量的1.3倍，否则将执行失败。</li></ul>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 指实例变更后的分片数量。<ul><li>标准架构不需要配置该参数，集群架构为必填参数。</li><li>集群架构，每次只能修改参数RedisShardNum、MemSize和RedisReplicasNum其中的一个，不能同时修改。且修改其中一个参数时，其他两个参数需输入实例原有的配置规格。</li></ul>
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * 指实例变更后的副本数量。<ul><li>每次只能修改参数RedisReplicasNum、MemSize和RedisShardNum其中的一个，不能同时修改。且修改其中一个参数时，其他两个参数需输入实例原有的配置规格。</li><li>多AZ实例修改副本时必须要传入NodeSet。</li></ul>
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * 多AZ实例，增加副本时的附带信息，包括副本的可用区和副本的类型（NodeType为1）。非多AZ实例不需要配置该参数。
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

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

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }

    }
}

/**
 * DescribeInstanceNodeInfo返回参数结构体
 * @class
 */
class DescribeInstanceNodeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * proxy节点数量
         * @type {number || null}
         */
        this.ProxyCount = null;

        /**
         * proxy节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProxyNodes> || null}
         */
        this.Proxy = null;

        /**
         * redis节点数量
         * @type {number || null}
         */
        this.RedisCount = null;

        /**
         * redis节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RedisNodes> || null}
         */
        this.Redis = null;

        /**
         * tendis节点数量
         * @type {number || null}
         */
        this.TendisCount = null;

        /**
         * tendis节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TendisNodes> || null}
         */
        this.Tendis = null;

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
        this.ProxyCount = 'ProxyCount' in params ? params.ProxyCount : null;

        if (params.Proxy) {
            this.Proxy = new Array();
            for (let z in params.Proxy) {
                let obj = new ProxyNodes();
                obj.deserialize(params.Proxy[z]);
                this.Proxy.push(obj);
            }
        }
        this.RedisCount = 'RedisCount' in params ? params.RedisCount : null;

        if (params.Redis) {
            this.Redis = new Array();
            for (let z in params.Redis) {
                let obj = new RedisNodes();
                obj.deserialize(params.Redis[z]);
                this.Redis.push(obj);
            }
        }
        this.TendisCount = 'TendisCount' in params ? params.TendisCount : null;

        if (params.Tendis) {
            this.Tendis = new Array();
            for (let z in params.Tendis) {
                let obj = new TendisNodes();
                obj.deserialize(params.Tendis[z]);
                this.Tendis.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectSecurityGroup返回参数结构体
 * @class
 */
class DescribeProjectSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目安全组
         * @type {Array.<SecurityGroupDetail> || null}
         */
        this.SecurityGroupDetails = null;

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

        if (params.SecurityGroupDetails) {
            this.SecurityGroupDetails = new Array();
            for (let z in params.SecurityGroupDetails) {
                let obj = new SecurityGroupDetail();
                obj.deserialize(params.SecurityGroupDetails[z]);
                this.SecurityGroupDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 复制组实例
 * @class
 */
class Instances extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户AppID。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 地域ID。<ul><li>1：广州。</li><li>4：上海。</li><li> 5：香港。</li> <li> 6：多伦多。</li> <li> 7：上海金融。</li> <li> 8：北京。</li> <li> 9：新加坡。</li> <li> 11：深圳金融。</li> <li> 15：美西（硅谷）。</li> </ul>
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 区域 ID。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 副本数量。
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * 分片数量。
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * 分片内存大小。
         * @type {number || null}
         */
        this.RedisShardSize = null;

        /**
         * 实例的磁盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 引擎：社区版Redis、腾讯云CKV。
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 实例读写权限。<ul><li>rw：可读写。</li><li>r：只读。</li></ul>
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 实例 VIP 地址。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 内部参数，用户可忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * VPC 网络ID，如：75101。
         * @type {number || null}
         */
        this.VpcID = null;

        /**
         * 实例端口。
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * 实例状态。<ul><li>0：待初始化。</li><li>1：流程中。</li><li>2：运行中。</li><li>-2：已隔离。</li><li>-3：待删除。</li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 仓库ID。
         * @type {number || null}
         */
        this.GrocerySysId = null;

        /**
         * 实例类型。<ul><li>1：Redis 2.8 内存版（集群架构）。</li><li>2：Redis 2.8 内存版（标准架构）。</li><li>3：CKV 3.2 内存版（标准架构）。</li><li>4：CKV 3.2 内存版（集群架构）。</li><li>5：Redis 2.8 单机版。</li><li>6：Redis 4.0 内存版（标准架构）。</li><li>7：Redis 4.0 内存版（集群架构）。</li><li>8：Redis 5.0 内存版（标准架构）。</li><li>9：Redis 5.0 内存版（集群架构）。</li></ul>
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * 实例加入复制组的时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 复制组中实例更新的时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisShardSize = 'RedisShardSize' in params ? params.RedisShardSize : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.VpcID = 'VpcID' in params ? params.VpcID : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.GrocerySysId = 'GrocerySysId' in params ? params.GrocerySysId : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeInstanceMonitorHotKey返回参数结构体
 * @class
 */
class DescribeInstanceMonitorHotKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热Key详细信息
         * @type {Array.<HotKeyInfo> || null}
         */
        this.Data = null;

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
                let obj = new HotKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例参数
 * @class
 */
class InstanceParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置参数的名称。例如timeout。当前支持自定义的参数，请参见<a href="https://cloud.tencent.com/document/product/239/49925">参数配置</a>。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 设置参数名称对应的运行值。例如timeout对应运行值可设置为120， 单位为秒（s）。指当客户端连接闲置时间达到120 s时，将关闭连接。更多参数取值信息，请参见<a href="https://cloud.tencent.com/document/product/239/49925">参数配置</a>。
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
 * ClearInstance返回参数结构体
 * @class
 */
class ClearInstanceResponse extends  AbstractModel {
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
 * 慢查询详情
 * @class
 */
class InstanceSlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询耗时
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 客户端地址
         * @type {string || null}
         */
        this.Client = null;

        /**
         * 命令
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 详细命令行信息
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * 执行时间
         * @type {string || null}
         */
        this.ExecuteTime = null;

        /**
         * 节点ID
         * @type {string || null}
         */
        this.Node = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;
        this.Node = 'Node' in params ? params.Node : null;

    }
}

module.exports = {
    UpgradeSmallVersionRequest: UpgradeSmallVersionRequest,
    ModifyInstanceParamsResponse: ModifyInstanceParamsResponse,
    EnableReplicaReadonlyRequest: EnableReplicaReadonlyRequest,
    RedisBackupSet: RedisBackupSet,
    DescribeInstanceMonitorTopNCmdResponse: DescribeInstanceMonitorTopNCmdResponse,
    ModifyAutoBackupConfigResponse: ModifyAutoBackupConfigResponse,
    RestoreInstanceRequest: RestoreInstanceRequest,
    AllocateWanAddressRequest: AllocateWanAddressRequest,
    ApplyParamsTemplateRequest: ApplyParamsTemplateRequest,
    UpgradeInstanceVersionResponse: UpgradeInstanceVersionResponse,
    CreateInstancesRequest: CreateInstancesRequest,
    CreateReplicationGroupRequest: CreateReplicationGroupRequest,
    ModifyInstanceReadOnlyResponse: ModifyInstanceReadOnlyResponse,
    DescribeInstanceZoneInfoRequest: DescribeInstanceZoneInfoRequest,
    ModifyConnectionConfigResponse: ModifyConnectionConfigResponse,
    ModifyNetworkConfigResponse: ModifyNetworkConfigResponse,
    CommandTake: CommandTake,
    DescribeInstanceMonitorBigKeyResponse: DescribeInstanceMonitorBigKeyResponse,
    Inbound: Inbound,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    DescribeTaskListResponse: DescribeTaskListResponse,
    ModifyInstanceRequest: ModifyInstanceRequest,
    KillMasterGroupResponse: KillMasterGroupResponse,
    RenewInstanceResponse: RenewInstanceResponse,
    DescribeSlowLogResponse: DescribeSlowLogResponse,
    DescribeCommonDBInstancesRequest: DescribeCommonDBInstancesRequest,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    RestoreInstanceResponse: RestoreInstanceResponse,
    RedisNodeInfo: RedisNodeInfo,
    DescribeBackupUrlRequest: DescribeBackupUrlRequest,
    DeleteParamTemplateResponse: DeleteParamTemplateResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeInstanceZoneInfoResponse: DescribeInstanceZoneInfoResponse,
    Account: Account,
    InstanceProxySlowlogDetail: InstanceProxySlowlogDetail,
    SecurityGroupsInboundAndOutbound: SecurityGroupsInboundAndOutbound,
    ResetPasswordResponse: ResetPasswordResponse,
    ClearInstanceRequest: ClearInstanceRequest,
    UpgradeInstanceVersionRequest: UpgradeInstanceVersionRequest,
    RegionConf: RegionConf,
    BigKeyInfo: BigKeyInfo,
    DescribeParamTemplatesRequest: DescribeParamTemplatesRequest,
    RenewInstanceRequest: RenewInstanceRequest,
    UpgradeVersionToMultiAvailabilityZonesResponse: UpgradeVersionToMultiAvailabilityZonesResponse,
    DescribeInstanceParamRecordsResponse: DescribeInstanceParamRecordsResponse,
    ModifyAutoBackupConfigRequest: ModifyAutoBackupConfigRequest,
    InstanceMultiParam: InstanceMultiParam,
    DescribeInstanceDealDetailRequest: DescribeInstanceDealDetailRequest,
    RedisNode: RedisNode,
    DescribeProjectSecurityGroupRequest: DescribeProjectSecurityGroupRequest,
    ParameterDetail: ParameterDetail,
    DescribeInstanceShardsResponse: DescribeInstanceShardsResponse,
    DestroyPrepaidInstanceRequest: DestroyPrepaidInstanceRequest,
    ManualBackupInstanceResponse: ManualBackupInstanceResponse,
    TaskInfoDetail: TaskInfoDetail,
    DisableReplicaReadonlyResponse: DisableReplicaReadonlyResponse,
    CreateParamTemplateResponse: CreateParamTemplateResponse,
    InstanceTagInfo: InstanceTagInfo,
    DescribeInstanceDTSInfoResponse: DescribeInstanceDTSInfoResponse,
    ChangeMasterInstanceResponse: ChangeMasterInstanceResponse,
    AddReplicationInstanceResponse: AddReplicationInstanceResponse,
    DestroyPostpaidInstanceResponse: DestroyPostpaidInstanceResponse,
    SwitchInstanceVipRequest: SwitchInstanceVipRequest,
    ChangeReplicaToMasterRequest: ChangeReplicaToMasterRequest,
    ProxyNodes: ProxyNodes,
    ModifyInstanceResponse: ModifyInstanceResponse,
    RedisCommonInstanceList: RedisCommonInstanceList,
    SourceInfo: SourceInfo,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    ChangeMasterInstanceRequest: ChangeMasterInstanceRequest,
    DescribeInstanceDTSInfoRequest: DescribeInstanceDTSInfoRequest,
    CreateParamTemplateRequest: CreateParamTemplateRequest,
    DescribeTendisSlowLogResponse: DescribeTendisSlowLogResponse,
    DescribeProductInfoResponse: DescribeProductInfoResponse,
    ModifyInstanceAccountRequest: ModifyInstanceAccountRequest,
    ModifyMaintenanceWindowRequest: ModifyMaintenanceWindowRequest,
    DescribeParamTemplateInfoRequest: DescribeParamTemplateInfoRequest,
    DescribeBackupUrlResponse: DescribeBackupUrlResponse,
    InquiryPriceRenewInstanceResponse: InquiryPriceRenewInstanceResponse,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    InstanceSecurityGroupDetail: InstanceSecurityGroupDetail,
    BackupLimitVpcItem: BackupLimitVpcItem,
    UpgradeProxyVersionResponse: UpgradeProxyVersionResponse,
    ResetPasswordRequest: ResetPasswordRequest,
    ModifyInstanceAccountResponse: ModifyInstanceAccountResponse,
    DelayDistribution: DelayDistribution,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    DescribeInstanceMonitorTookDistResponse: DescribeInstanceMonitorTookDistResponse,
    DescribeInstanceBackupsResponse: DescribeInstanceBackupsResponse,
    InstanceIntegerParam: InstanceIntegerParam,
    UpgradeVersionToMultiAvailabilityZonesRequest: UpgradeVersionToMultiAvailabilityZonesRequest,
    AllocateWanAddressResponse: AllocateWanAddressResponse,
    DescribeInstanceMonitorTookDistRequest: DescribeInstanceMonitorTookDistRequest,
    DeleteReplicationInstanceRequest: DeleteReplicationInstanceRequest,
    KillMasterGroupRequest: KillMasterGroupRequest,
    InstanceTextParam: InstanceTextParam,
    ParamTemplateInfo: ParamTemplateInfo,
    DescribeInstanceMonitorTopNCmdTookResponse: DescribeInstanceMonitorTopNCmdTookResponse,
    CloseSSLRequest: CloseSSLRequest,
    DescribeInstanceMonitorBigKeySizeDistRequest: DescribeInstanceMonitorBigKeySizeDistRequest,
    DescribeInstanceAccountRequest: DescribeInstanceAccountRequest,
    SwitchProxyRequest: SwitchProxyRequest,
    DescribeInstanceParamRecordsRequest: DescribeInstanceParamRecordsRequest,
    DescribeTaskListRequest: DescribeTaskListRequest,
    ChangeReplicaToMasterResponse: ChangeReplicaToMasterResponse,
    CreateInstancesResponse: CreateInstancesResponse,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    ApplyParamsTemplateResponse: ApplyParamsTemplateResponse,
    DescribeReplicationGroupRequest: DescribeReplicationGroupRequest,
    RedisNodes: RedisNodes,
    DescribeInstanceMonitorTopNCmdRequest: DescribeInstanceMonitorTopNCmdRequest,
    ModifyNetworkConfigRequest: ModifyNetworkConfigRequest,
    DescribeInstanceSecurityGroupRequest: DescribeInstanceSecurityGroupRequest,
    InstanceParamHistory: InstanceParamHistory,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    CleanUpInstanceResponse: CleanUpInstanceResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeParamTemplatesResponse: DescribeParamTemplatesResponse,
    DescribeInstanceShardsRequest: DescribeInstanceShardsRequest,
    Outbound: Outbound,
    DescribeAutoBackupConfigResponse: DescribeAutoBackupConfigResponse,
    InquiryPriceUpgradeInstanceRequest: InquiryPriceUpgradeInstanceRequest,
    ModifyParamTemplateResponse: ModifyParamTemplateResponse,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    DescribeInstanceMonitorBigKeySizeDistResponse: DescribeInstanceMonitorBigKeySizeDistResponse,
    SecurityGroup: SecurityGroup,
    CreateInstanceAccountRequest: CreateInstanceAccountRequest,
    EnableReplicaReadonlyResponse: EnableReplicaReadonlyResponse,
    DescribeMaintenanceWindowResponse: DescribeMaintenanceWindowResponse,
    DescribeInstanceSecurityGroupResponse: DescribeInstanceSecurityGroupResponse,
    ReleaseWanAddressResponse: ReleaseWanAddressResponse,
    ProductConf: ProductConf,
    ModifyConnectionConfigRequest: ModifyConnectionConfigRequest,
    InstanceNode: InstanceNode,
    TendisNodes: TendisNodes,
    SwitchProxyResponse: SwitchProxyResponse,
    StartupInstanceResponse: StartupInstanceResponse,
    DescribeInstanceDTSInstanceInfo: DescribeInstanceDTSInstanceInfo,
    TradeDealDetail: TradeDealDetail,
    ResourceTag: ResourceTag,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    ReplicaGroup: ReplicaGroup,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    DescribeInstanceMonitorBigKeyTypeDistResponse: DescribeInstanceMonitorBigKeyTypeDistResponse,
    DeleteReplicationInstanceResponse: DeleteReplicationInstanceResponse,
    CleanUpInstanceRequest: CleanUpInstanceRequest,
    DescribeInstanceDealDetailResponse: DescribeInstanceDealDetailResponse,
    Groups: Groups,
    DescribeInstancesRequest: DescribeInstancesRequest,
    SourceCommand: SourceCommand,
    ModfiyInstancePasswordRequest: ModfiyInstancePasswordRequest,
    DescribeSlowLogRequest: DescribeSlowLogRequest,
    DeleteParamTemplateRequest: DeleteParamTemplateRequest,
    DescribeAutoBackupConfigRequest: DescribeAutoBackupConfigRequest,
    DescribeInstanceMonitorSIPResponse: DescribeInstanceMonitorSIPResponse,
    DestroyPostpaidInstanceRequest: DestroyPostpaidInstanceRequest,
    ChangeInstanceRoleRequest: ChangeInstanceRoleRequest,
    DeleteInstanceAccountRequest: DeleteInstanceAccountRequest,
    DescribeInstanceMonitorHotKeyRequest: DescribeInstanceMonitorHotKeyRequest,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    ManualBackupInstanceRequest: ManualBackupInstanceRequest,
    DescribeReplicationGroupResponse: DescribeReplicationGroupResponse,
    ModifyParamTemplateRequest: ModifyParamTemplateRequest,
    ModfiyInstancePasswordResponse: ModfiyInstancePasswordResponse,
    InstanceSet: InstanceSet,
    ReleaseWanAddressRequest: ReleaseWanAddressRequest,
    InquiryPriceRenewInstanceRequest: InquiryPriceRenewInstanceRequest,
    CloseSSLResponse: CloseSSLResponse,
    ModifyMaintenanceWindowResponse: ModifyMaintenanceWindowResponse,
    CreateReplicationGroupResponse: CreateReplicationGroupResponse,
    DescribeInstanceMonitorBigKeyTypeDistRequest: DescribeInstanceMonitorBigKeyTypeDistRequest,
    DescribeInstanceMonitorTopNCmdTookRequest: DescribeInstanceMonitorTopNCmdTookRequest,
    DestroyPrepaidInstanceResponse: DestroyPrepaidInstanceResponse,
    DescribeCommonDBInstancesResponse: DescribeCommonDBInstancesResponse,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    UpgradeSmallVersionResponse: UpgradeSmallVersionResponse,
    ModifyInstanceParamsRequest: ModifyInstanceParamsRequest,
    OpenSSLRequest: OpenSSLRequest,
    BackupDownloadInfo: BackupDownloadInfo,
    BigKeyTypeInfo: BigKeyTypeInfo,
    DescribeInstanceNodeInfoRequest: DescribeInstanceNodeInfoRequest,
    DescribeMaintenanceWindowRequest: DescribeMaintenanceWindowRequest,
    AddReplicationInstanceRequest: AddReplicationInstanceRequest,
    InstanceClusterNode: InstanceClusterNode,
    DescribeTendisSlowLogRequest: DescribeTendisSlowLogRequest,
    DescribeProxySlowLogRequest: DescribeProxySlowLogRequest,
    DescribeProxySlowLogResponse: DescribeProxySlowLogResponse,
    ModifyInstanceReadOnlyRequest: ModifyInstanceReadOnlyRequest,
    DescribeInstanceAccountResponse: DescribeInstanceAccountResponse,
    DescribeInstanceMonitorBigKeyRequest: DescribeInstanceMonitorBigKeyRequest,
    DisableReplicaReadonlyRequest: DisableReplicaReadonlyRequest,
    DescribeParamTemplateInfoResponse: DescribeParamTemplateInfoResponse,
    DescribeProductInfoRequest: DescribeProductInfoRequest,
    SwitchInstanceVipResponse: SwitchInstanceVipResponse,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    StartupInstanceRequest: StartupInstanceRequest,
    HotKeyInfo: HotKeyInfo,
    InstanceEnumParam: InstanceEnumParam,
    CreateInstanceAccountResponse: CreateInstanceAccountResponse,
    DescribeInstanceBackupsRequest: DescribeInstanceBackupsRequest,
    SecurityGroupDetail: SecurityGroupDetail,
    InquiryPriceUpgradeInstanceResponse: InquiryPriceUpgradeInstanceResponse,
    DeleteInstanceAccountResponse: DeleteInstanceAccountResponse,
    DescribeInstanceMonitorSIPRequest: DescribeInstanceMonitorSIPRequest,
    InstanceClusterShard: InstanceClusterShard,
    OpenSSLResponse: OpenSSLResponse,
    TendisSlowLogDetail: TendisSlowLogDetail,
    ChangeInstanceRoleResponse: ChangeInstanceRoleResponse,
    UpgradeProxyVersionRequest: UpgradeProxyVersionRequest,
    ZoneCapacityConf: ZoneCapacityConf,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    DescribeInstanceNodeInfoResponse: DescribeInstanceNodeInfoResponse,
    DescribeProjectSecurityGroupResponse: DescribeProjectSecurityGroupResponse,
    Instances: Instances,
    DescribeInstanceMonitorHotKeyResponse: DescribeInstanceMonitorHotKeyResponse,
    InstanceParam: InstanceParam,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    ClearInstanceResponse: ClearInstanceResponse,
    InstanceSlowlogDetail: InstanceSlowlogDetail,

}
