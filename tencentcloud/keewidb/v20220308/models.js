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
 * ModifyInstanceParams返回参数结构体
 * @class
 */
class ModifyInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改是否成功。<ul><li>true：修改成功。</li><li>false：修改失败。</li></ul>
         * @type {boolean || null}
         */
        this.Changed = null;

        /**
         * 任务 ID。
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
 * ModifyAutoBackupConfig返回参数结构体
 * @class
 */
class ModifyAutoBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增量备份文件保存天数。
         * @type {number || null}
         */
        this.BackupStorageDays = null;

        /**
         * 全量备份文件保存天数。
         * @type {number || null}
         */
        this.BinlogStorageDays = null;

        /**
         * 备份时间段。
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * 备份周期。Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupStorageDays = 'BackupStorageDays' in params ? params.BackupStorageDays : null;
        this.BinlogStorageDays = 'BinlogStorageDays' in params ? params.BinlogStorageDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
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

        /**
         * 操作者用户uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatorUin = null;

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
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;

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
         * 产品版本。
14：当前仅支持混合存储版。
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * 私有网络唯一ID。
请登录控制台在私有网络列表查询，如：vpc-azlk3***。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 私有网络所属子网唯一ID。
请登录控制台在私有网络列表查询，如：subnet-8abje***。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 计费模式。<ul><li>0：按量计费。</li><li>1：包年包月。</li></ul>
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * 实例数量，单次最大购买数量以查询产品售卖规格返回的数量为准。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 选择包年包月计费模式（BillingMode 设置为1）时，您需要选择购买实例的时长。单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。按量计费（BillingMode 设置为0）实例该参数设置为1即可。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 分片数量，支持选择3、5、6、8、9、10、12、15、16、18、20、21、24、25、27、30、32、33、35、36、39、40、42、45、48、50、51、54、55、56、57、60、63、64分片。
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * 副本数。当前仅支持设置1个副本节点，即每一个分片仅包含1个主节点与1个副本节点，数据主从实时热备。
         * @type {number || null}
         */
        this.ReplicasNum = null;

        /**
         * 计算cpu核心数。
         * @type {number || null}
         */
        this.MachineCpu = null;

        /**
         * 实例内存容量，单位：GB。
KeeWiDB 内存容量<b>MachineMemory</b>与持久内存容量<b>MemSize</b>为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。
         * @type {number || null}
         */
        this.MachineMemory = null;

        /**
         * 实例所属的可用区ID。<ul><li>具体取值，请参见[地域和可用区](https://cloud.tencent.com/document/product/239/4106)获取。</li><li>参数<b>ZoneId</b>和<b>ZoneName</b>至少配置其中一个。</li></u>
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 实例所属的可用区名称。<ul><li>具体取值，请参见[地域和可用区](https://cloud.tencent.com/document/product/239/4106)获取。</li><li>参数<b>ZoneId</b>和<b>ZoneName</b>至少配置其中一个。</li></u>
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 创建实例的名称。
仅支持长度小于60的中文、英文或者数字，短划线"-"、下划线"_"。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 指明创建的实例是否需要支持免密访问。<ul><li>true：免密实例。</li><li>false：非免密实例，默认为非免密实例。此时，需要设置访问密码。</li></ul>
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * 实例访问密码。<ul><li>当参数<b>NoAuth</b>为<b>true</b>时，Password为无需设置，否则Password为必填参数。</li>
<li>密码复杂度要求：<ul><li>8-30个字符。</li><li>至少包含小写字母、大写字母、数字和字符 ()`~!@#$%^&*-+=_|{}[]:;<>,.?/ 中的2种。</li><li>不能以"/"开头。</li></ul></li></ul>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 自定义端口。默认为6379，范围[1024,65535]。
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * 包年包月计费的续费模式。<ul><li>0：默认状态，指手动续费。</li><li>1：自动续费。</li><li>2：到期不再续费。</ul>
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 给实例设置安全组 ID 数组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdList = null;

        /**
         * 给实例绑定标签。
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * 混合存储版，单分片持久化内存容量，单位：GB。
KeeWiDB 内存容量<b>MachineMemory</b>与持久内存容量<b>MemSize</b>为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 每个分片硬盘的容量。单位：GB。
每一缓存分片容量，对应的磁盘容量范围不同。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 项目id，取值以用户账户>用户账户相关接口查询>项目列表返回的projectId为准。
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
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.ReplicasNum = 'ReplicasNum' in params ? params.ReplicasNum : null;
        this.MachineCpu = 'MachineCpu' in params ? params.MachineCpu : null;
        this.MachineMemory = 'MachineMemory' in params ? params.MachineMemory : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.SecurityGroupIdList = 'SecurityGroupIdList' in params ? params.SecurityGroupIdList : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

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
         * 执行状态。<ul><li>true：执行成功。</li><li>false：执行失败。</li></ul>
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 修改后的子网 ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 修改后的私有网络 ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 修改后的 VIP 地址。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceBinlogs请求参数结构体
 * @class
 */
class DescribeInstanceBinlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 每页输出备份列表大小，默认大小20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，取Limit整数倍。
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
         * 数据库引擎名称：keewidb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 要绑定的安全组 ID，类似sg-efil7***。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例 ID，格式如：kee-c1nl9***，支持指定多个实例。
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
         * 任务总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务详细信息列表。
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
         * 修改实例操作。<ul><li>rename：表示实例重命名。</li><li>modifyProject：修改实例所属项目。</li><li>modifyAutoRenew：修改实例续费模式。</li></ul>
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 实例 ID 数组。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例的新名称。
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * 实例新的项目 ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 包年包月计费的续费模式。<b>InstanceIds</b>数组和<b>AutoRenews</b>数组中的修改值对应。<ul><li>0：默认状态，指手动续费。</li><li>1：自动续费。</li><li>2：到期不再续费。</ul>
         * @type {Array.<number> || null}
         */
        this.AutoRenews = null;

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
         * 交易 ID。
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
 * CreateBackupManually返回参数结构体
 * @class
 */
class CreateBackupManuallyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
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
 * Redis节点信息
 * @class
 */
class RedisNodeInfo extends  AbstractModel {
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
 * Proxy节点信息
 * @class
 */
class ProxyNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

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
         * 实例 ID。
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
 * 代理慢查询详情
 * @class
 */
class InstanceProxySlowlogDetail extends  AbstractModel {
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
 * ResetPassword返回参数结构体
 * @class
 */
class ResetPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
<b>说明：</b>修改密码时的任务ID，如果切换免密访问或者非免密码实例，则无需关注此返回值。
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
         * 实例 ID，如：kee-6ubhg****。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例访问密码。
实例为免密访问，则无需设置该参数。
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
 * 地域售卖信息
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
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 购买时长，单位：月。取值范围为 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
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
 * CreateBackupManually请求参数结构体
 * @class
 */
class CreateBackupManuallyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的实例 ID，可通过 DescribeInstance接口返回值中的 InstanceId 获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 本次备份的备注信息。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 备份文件保存天数。0代表指定默认保留时间
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
 * DescribeInstanceParamRecords返回参数结构体
 * @class
 */
class DescribeInstanceParamRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改历史记录总数。
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
 * ModifyAutoBackupConfig请求参数结构体
 * @class
 */
class ModifyAutoBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 备份周期。可设置为 Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday，该参数暂不支持修改、
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * 备份任务执行时间段。
可设置的格式为一个整点到下一个整点。例如：00:00-01:00、01:00-02:00、21:00-22:00、23:00-00:00等。
         * @type {string || null}
         */
        this.TimePeriod = null;

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
         * 实例 ID。
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
 * DestroyPostpaidInstance返回参数结构体
 * @class
 */
class DestroyPostpaidInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
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
 * 描述实例的主节点或者副本节点信息
 * @class
 */
class NodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点类型，0 为主节点，1 为副本节点
         * @type {number || null}
         */
        this.NodeType = null;

        /**
         * 主节点或者副本节点的ID，创建时不需要传递此参数。
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 主节点或者副本节点的可用区ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 主节点或者副本节点的可用区名称
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
 * DescribeTendisSlowLog返回参数结构体
 * @class
 */
class DescribeTendisSlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询详情。
         * @type {Array.<TendisSlowLogDetail> || null}
         */
        this.TendisSlowLogDetail = null;

        /**
         * 慢查询总数。
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

        if (params.TendisSlowLogDetail) {
            this.TendisSlowLogDetail = new Array();
            for (let z in params.TendisSlowLogDetail) {
                let obj = new TendisSlowLogDetail();
                obj.deserialize(params.TendisSlowLogDetail[z]);
                this.TendisSlowLogDetail.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * 实例的备份信息
 * @class
 */
class BackupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 备份 ID。
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * 备份类型。<ul><li>1：手动备份，指根据业务运维排障需求，立即执行备份任务的操作。</li> <li>0：自动备份，指根据自动备份策略定时自动发起的备份任务。</li></ul>
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * 备份的备注信息.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 备份状态。  <ul><li>1：备份任务被其它流程锁定。</li><li>2：备份正常，没有被任何流程锁定。</li> <li>-1：备份已过期。</li><li>3：备份正在被导出。</li> <li>4：备份导出成功。</li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 备份是否被锁定。<ul><li>0：未被锁定。</li><li>1：已被锁定。</li></ul>
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
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Locked = 'Locked' in params ? params.Locked : null;

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
         * 数据库引擎名称：keewidb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 实例ID，格式如：kee-c1nl9***。
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
 * ChangeInstanceMaster请求参数结构体
 * @class
 */
class ChangeInstanceMasterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，如：kee-6ubh****。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 副本节点 ID。
         * @type {string || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

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
 * DescribeInstanceBackups返回参数结构体
 * @class
 */
class DescribeInstanceBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份文件总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 废弃字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BinlogInfo> || null}
         */
        this.BackupSet = null;

        /**
         * 实例备份信息列表。
         * @type {Array.<BackupInfo> || null}
         */
        this.BackupRecord = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new BinlogInfo();
                obj.deserialize(params.BackupSet[z]);
                this.BackupSet.push(obj);
            }
        }

        if (params.BackupRecord) {
            this.BackupRecord = new Array();
            for (let z in params.BackupRecord) {
                let obj = new BackupInfo();
                obj.deserialize(params.BackupRecord[z]);
                this.BackupRecord.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceReplicas返回参数结构体
 * @class
 */
class DescribeInstanceReplicasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所有节点数量，包括主节点、副本节点。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例节点信息。
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
 * StartUpInstance返回参数结构体
 * @class
 */
class StartUpInstanceResponse extends  AbstractModel {
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
 * DescribeInstanceParamRecords请求参数结构体
 * @class
 */
class DescribeInstanceParamRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，如：kee-6ubh****。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 每页输出的参数列表大小。默认为 20，最多输出100条。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
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
         * 实例 ID，如：kee-6ubh****。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 每页输出的任务列表大小。默认为 20，最多输出100条。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset：分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 项目ID。
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 任务类型。可设置为：FLOW_CREATE、FLOW_SETPWD、FLOW_CLOSE等。
         * @type {Array.<string> || null}
         */
        this.TaskTypes = null;

        /**
         * 起始时间。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 终止时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务状态。
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

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
         * 交易 ID。
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 实例 ID 。
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
 * KeeWiDB节点的运行信息
 * @class
 */
class KeeWiDBNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点的序列ID。
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点的状态。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 节点角色。
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
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * 实例增量备份信息
 * @class
 */
class BinlogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 备份结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 备份 ID。
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * 备份文件名。
         * @type {string || null}
         */
        this.Filename = null;

        /**
         * 备份文件大小，单位：Byte。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSize = null;

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
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.Filename = 'Filename' in params ? params.Filename : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;

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
         * 实例 ID，如：kee-6ubh****。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 操作类型。<ul><li>changeVip：修改实例私有网络。</li><li>changeVpc：修改实例私有网络所属子网。</li><li>changeBaseToVpc：基础网络转为私有网络。</li></ul>
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 修改后的 VIP 地址。
当参数<b>Operation</b>为<b>changeVip</b>时，需设置实例修改后的 VIP 地址。该参数不配置，则自动分配。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 修改后的私有网络 ID。
当参数<b>Operation</b>为<b>changeVip</b>或者为<b>changeBaseToVpc</b>时，务必设置实例修改后的私有网络 ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 修改后的所属子网 ID。
当参数<b>Operation</b>为<b>changeVpc</b>或者为<b>changeBaseToVpc</b>时，务必设置实例修改后的子网 ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 原 VIP 保留时长。
单位：天。取值范围：0、1、2、3、7、15。
         * @type {number || null}
         */
        this.Recycle = null;

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
         * 实例 ID，如：kee-6ubh****。
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
         * 任务 ID。
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
         * 数据库引擎名称：keewidb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 要修改的安全组ID列表，一个或者多个安全组 ID 组成的数组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 实例ID，格式如：kee-c1nl****。
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
 * 可用区内产品售卖信息
 * @class
 */
class ZoneCapacityConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区ID
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
         * 产品规格等信息
         * @type {Array.<ProductConf> || null}
         */
        this.ProductSet = null;

        /**
         * Int类型可用区ID
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
         * 自动备份的周期。包括：Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * 自动备份时间段。
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * 全量备份文件保存天数。
         * @type {number || null}
         */
        this.BackupStorageDays = null;

        /**
         * 增量备份文件保存天数。
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
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.BackupStorageDays = 'BackupStorageDays' in params ? params.BackupStorageDays : null;
        this.BinlogStorageDays = 'BinlogStorageDays' in params ? params.BinlogStorageDays : null;
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
         * 数据库引擎名称。该产品固定为 keewidb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 项目 ID。
登录 [账号中心](https://console.cloud.tencent.com/developer)，在<b>项目管理</b>中可获取项目 ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页安全组的数量限制。默认为 20，最多输出100条。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索关键词，支持根据安全组 ID 或者安全组名称搜索。
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
 * StartUpInstance请求参数结构体
 * @class
 */
class StartUpInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
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
 * DescribeMaintenanceWindow返回参数结构体
 * @class
 */
class DescribeMaintenanceWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维护时间窗起始时间，如：03:00。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 维护时间窗结束时间，如：06:00。
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
 * ResetPassword请求参数结构体
 * @class
 */
class ResetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 设置新密码。<ul><li>当参数<b>NoAuth</b>设置为<b>true</b>，切换为免密实例时，可不设置该参数。</li><li>密码复杂度要求：<ul><li>长度8 - 30位, 推荐使用12位以上的密码。</li><li>不能以"/"开头。</li>
<li>至少包含以下两项：<ul><li>小写字母a - z</li><li>大写字母A - Z</li><li>数字0 - 9</li><li>()~!@#$%^&*-+=_|{}[]:;<>,.?/</li></ul></li></ul></li></ul>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 标识实例是否切换免密认证。<ul><li>false：由免密码认证方式切换为密码认证实例。默认为false。</li><li>true：由密码认证方式切换为免密码认证的方式。</li></ul>
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
 * 产品规格信息
 * @class
 */
class ProductConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品类型，13-KeewiDB标准架构，14-KeewiDB集群架构
         * @type {number || null}
         */
        this.Type = null;

        /**
         * KeewiDB标准架构，KeewiDB集群架构
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
         * 产品引擎，keewidb
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 兼容版本，Redis-2.8，Redis-3.2，Redis-4.0
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 副本数量
         * @type {Array.<string> || null}
         */
        this.ReplicaNum = null;

        /**
         * 支持的计费模式，1-包年包月，0-按量计费
         * @type {string || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.MinBuyNum = 'MinBuyNum' in params ? params.MinBuyNum : null;
        this.MaxBuyNum = 'MaxBuyNum' in params ? params.MaxBuyNum : null;
        this.Saleout = 'Saleout' in params ? params.Saleout : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

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
         * 实例 ID，如：kee-6ubh****。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 单分片附加带宽，取值范围[0,512]，单位：MB。
<ul><li>开启副本只读时，实例总带宽  = 单分片附加带宽 * 分片数 + 标准带宽 * 分片数 * Max ([只读副本数量, 1])，标准架构的分片数 = 1。</li><li>没有开启副本只读时，实例总带宽 = 单分片附加带宽 * 分片数 + 标准带宽 * 分片数，标准架构的分片数 = 1。</li></ul>
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 单分片的总连接数。
<ul>默认为10000，整个实例的最大连接数为单个分片的最大连接数 x 分片数量。标准架构分片数量为1。
<li>关闭副本只读：每个分片的最大连接数的取值范围为[10000,40000]。</li><li>开启副本只读：每个分片的最大连接数的取值范围为 [10000,10000 x (副本数 + 3)]。</li></ul>
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
 * 实例绑定标签
 * @class
 */
class ResourceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签 Key。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签 Value。
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
 * 实例副本组信息
 * @class
 */
class ReplicaGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点 ID。
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 节点组的名称，主节点为空。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 节点的可用区ID，比如ap-guangzhou-1。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 节点组角色。<ul><li>master：为主节点。</li><li>replica：为副本节点。</li></ul>
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 节点组节点列表。
         * @type {Array.<KeeWiDBNode> || null}
         */
        this.KeeWiDBNodes = null;

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

        if (params.KeeWiDBNodes) {
            this.KeeWiDBNodes = new Array();
            for (let z in params.KeeWiDBNodes) {
                let obj = new KeeWiDBNode();
                obj.deserialize(params.KeeWiDBNodes[z]);
                this.KeeWiDBNodes.push(obj);
            }
        }

    }
}

/**
 * 实例详细信息
 * @class
 */
class InstanceInfo extends  AbstractModel {
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
         * 用户的Appid。
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 项目 ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 地域ID。<ul><li>1：广州。</li><li>4：上海。</li><li>8：北京。</li></ul>
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 可用区 ID。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * VPC 网络 ID， 如：75101。该参数当前暂保留，可忽略。
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 实例当前状态。<ul><li>0：待初始化。</li><li>1：实例在流程中。</li><li>2：实例运行中。</li><li>-2：实例已隔离。</li><li>-3：实例待删除。</li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * VPC 网络下子网 ID， 如：46315。该参数当前暂保留，可忽略。
         * @type {number || null}
         */
        this.SubnetId = null;

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
         * 实例持久内存总容量大小，单位：MB。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 实例类型。<ul><li>13：标准版。</li><li>14：集群版。</li></ul>
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
         * 存储引擎。
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 产品类型。<ul><li>standalone ：标准版。</li><li>cluster ：集群版。</li></ul>
         * @type {string || null}
         */
        this.ProductType = null;

        /**
         * VPC 网络 ID， 如：vpc-fk33jsf4****。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * VPC 网络下子网 ID，如：subnet-fd3j6l3****。
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
         * 反亲和性标签
         * @type {Array.<string> || null}
         */
        this.Tags = null;

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
         * 是否为免密实例；<ul><li>true：免密实例。</li><li>false：非免密实例。</li></ul>
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
         * 分片带宽上限，单位 MB。
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
        this.Vip6 = null;

        /**
         * 内部参数，用户可忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RemainBandwidthDuration = null;

        /**
         * 实例的磁盘容量大小。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 监控版本。<ul><li>1m：分钟粒度监控。</li><li>5s：5秒粒度监控。</li></ul>
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
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * 实例所在的地域信息，比如ap-guangzhou。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例内存容量，单位：GB。KeeWiDB 内存容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MachineMemory = null;

        /**
         * 单分片磁盘大小，单位：MB
         * @type {number || null}
         */
        this.DiskShardSize = null;

        /**
         * 3
         * @type {number || null}
         */
        this.DiskShardNum = null;

        /**
         * 1
         * @type {number || null}
         */
        this.DiskReplicasNum = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.Size = 'Size' in params ? params.Size : null;
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
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.RemainBandwidthDuration = 'RemainBandwidthDuration' in params ? params.RemainBandwidthDuration : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.MonitorVersion = 'MonitorVersion' in params ? params.MonitorVersion : null;
        this.ClientLimitMin = 'ClientLimitMin' in params ? params.ClientLimitMin : null;
        this.ClientLimitMax = 'ClientLimitMax' in params ? params.ClientLimitMax : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.MachineMemory = 'MachineMemory' in params ? params.MachineMemory : null;
        this.DiskShardSize = 'DiskShardSize' in params ? params.DiskShardSize : null;
        this.DiskShardNum = 'DiskShardNum' in params ? params.DiskShardNum : null;
        this.DiskReplicasNum = 'DiskReplicasNum' in params ? params.DiskReplicasNum : null;

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
         * 实例 ID，如：kee-6ubh****。
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
         * 每页输出的实例列表的大小，即每页输出的实例数量，默认值20，取值范围为[1,1000]。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，取Limit整数倍。
计算公式为offset=limit*(页码-1)。例如 limit=10，第1页offset就为0，第2页offset就为10，依次类推。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例 ID，如：kee-6ubh****。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 排序依据。枚举范围如下所示。 <ul><li>projectId：实例按照项目ID排序。</li><li>createtime：实例按照创建时间排序。</li><li>instancename：实例按照实例名称排序。</li><li>type：实例按照类型排序。</li><li>curDeadline：实例按照到期时间排序。</li></ul>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式。<ul><li>1：倒序。默认为倒序。</li><li>0：顺序。</li></ul>
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 私有网络ID数组。数组下标从0开始，如果不传则默认选择基础网络，如：47525
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
         * 查找关键字，可输入实例的ID或者实例名称。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 实例名称。
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
         * 实例状态。<ul><li>0：待初始化。</li><li>1：流程中。</li><li>2：运行中。</li><li>-2：已隔离。</li><li>-3：待删除。</li></ul>
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 包年包月计费的续费模式。<ul><li>0：默认状态，指手动续费。</li><li>1：自动续费。</li><li>2：到期不再续费。</ul>
         * @type {Array.<number> || null}
         */
        this.AutoRenew = null;

        /**
         * 计费模式。<ul><li>postpaid：按量计费。</li><li>prepaid：包年包月。</li></ul>
         * @type {string || null}
         */
        this.BillingMode = null;

        /**
         * 实例类型。<ul><li>13：标准版。</li><li>14：集群版。</li></ul>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 搜索关键词：支持实例 ID、实例名称、私有网络IP地址。
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
         * @type {InstanceTagInfo || null}
         */
        this.InstanceTags = null;

        /**
         * 根据标签的 Key 筛选资源，该参数不配置或者数组设置为空值，则不根据标签Key进行过滤。
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.TypeList = 'TypeList' in params ? params.TypeList : null;
        this.MonitorVersion = 'MonitorVersion' in params ? params.MonitorVersion : null;

        if (params.InstanceTags) {
            let obj = new InstanceTagInfo();
            obj.deserialize(params.InstanceTags)
            this.InstanceTags = obj;
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;

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
         * 任务状态。<ul><li>preparing：待执行。</li><li>running：执行中。</li><li>succeed：成功。</li><li>failed：失败。</li><li>error：执行出错。</li></ul>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务类型。
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 实例的ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 任务信息，错误时显示错误信息。执行中与成功则为空值。
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
         * 实例 ID。
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
 * UpgradeInstance返回参数结构体
 * @class
 */
class UpgradeInstanceResponse extends  AbstractModel {
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
         * @type {Array.<InstanceInfo> || null}
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
                let obj = new InstanceInfo();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
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
         * 任务 ID。
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
 * ModifyConnectionConfig返回参数结构体
 * @class
 */
class ModifyConnectionConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
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
         * 执行结果。<ul><li>success：修改成功。 </li> <li>failed：修改失败。</li></ul>
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
 * DescribeInstanceReplicas请求参数结构体
 * @class
 */
class DescribeInstanceReplicasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，如：kee-6ubh****。
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
 * DestroyPrepaidInstance返回参数结构体
 * @class
 */
class DestroyPrepaidInstanceResponse extends  AbstractModel {
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
 * 实例节点信息
 * @class
 */
class InstanceNodeInfo extends  AbstractModel {
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
 * 实例慢查询详情
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
 * ModifyInstanceParams请求参数结构体
 * @class
 */
class ModifyInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，如：kee-6ubh****。
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
 * DescribeInstanceNodeInfo请求参数结构体
 * @class
 */
class DescribeInstanceNodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，如：kee-6ubh****。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 每页输出的节点信息大小。默认为 20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，取Limit整数倍。计算公式：offset=limit*(页码-1)。
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
         * 实例 ID，如：kee-6ubhg***。
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
 * DescribeTendisSlowLog请求参数结构体
 * @class
 */
class DescribeTendisSlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，如：kee-6ubh****。
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
         * 慢查询平均执行时间阈值。<ul><li>单位：毫秒。</li><li>取值范围：10、20、30、40、50。</li></ul>
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * 每个页面大小，即每个页面输出慢日志的数量。取值范围为：10、20、30、40、50。默认为 20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页面偏移量，取Limit整数倍，计算公式：offset=limit*(页码-1)。
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
         * 实例 ID，如：kee-6ubhgouj
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
         * 慢查询平均执行时间阈值。<ul><li>单位：毫秒。</li><li>取值范围：10、20、30、40、50。</li></ul>
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * 每个页面大小，即每个页面输出慢日志的数量。取值范围为：10、20、30、40、50，默认为 20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页面偏移量，取Limit整数倍，计算公式：offset=limit*(页码-1)。
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
         * 慢查询总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 慢查询详情。
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
 * DescribeInstanceParams返回参数结构体
 * @class
 */
class DescribeInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例参数总数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例枚举类型参数数组。
         * @type {Array.<InstanceEnumParam> || null}
         */
        this.InstanceEnumParam = null;

        /**
         * 实例整型参数数组。
         * @type {Array.<InstanceIntegerParam> || null}
         */
        this.InstanceIntegerParam = null;

        /**
         * 实例字符型参数数组。
         * @type {Array.<InstanceTextParam> || null}
         */
        this.InstanceTextParam = null;

        /**
         * 实例多选项型参数数组。
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
         * 数据库引擎名称：keewidb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 要绑定的安全组 ID，类似sg-efil****。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例 ID，格式如：kee-c1nl****，支持指定多个实例。
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
 * ModifyMaintenanceWindow请求参数结构体
 * @class
 */
class ModifyMaintenanceWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，如：kee-6ubh****。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 维护时间窗起始时间，如：03:00。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 维护时间窗结束时间，如：06:00。
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
         * 每页输出的备份列表大小，即每页输出的备份文件的数量，默认值20，取值范围为[1,100]。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 备份列表分页偏移量，取Limit整数倍。
计算公式为offset=limit*(页码-1)。例如 limit=10，第1页offset就为0，第2页offset就为10，依次类推。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询备份文件的开始时间，格式如：2017-02-08 16:46:34。查询实例在 [BeginTime, EndTime] 时间段内的备份列表。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 查询备份文件的结束时间，格式如：2017-02-08 19:09:26。查询实例在 [beginTime, endTime] 时间段内的备份列表。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 备份任务状态。<ul><li>1：备份在流程中。</li><li>2：备份正常。</li><li>3：备份转RDB文件处理中。</li><li>4：已完成RDB转换。</li><li>-1：备份已过期。</li><li>-2：备份已删除。</li></ul>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeInstanceBinlogs返回参数结构体
 * @class
 */
class DescribeInstanceBinlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例的备份信息数组
         * @type {Array.<BinlogInfo> || null}
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
                let obj = new BinlogInfo();
                obj.deserialize(params.BackupSet[z]);
                this.BackupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChangeInstanceMaster返回参数结构体
 * @class
 */
class ChangeInstanceMasterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务 ID。
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
 * UpgradeInstance请求参数结构体
 * @class
 */
class UpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 配置变更后，每个分片持久化内存容量，单位：GB。
<ul><li>KeeWiDB 内存容量<b>MachineMemory</b>与持久内存容量<b>MemSize</b>为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。</li><li>变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。</li></ul>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * CPU 核数。
         * @type {number || null}
         */
        this.MachineCpu = null;

        /**
         * 实例内存容量，单位：GB。
<ul><li>KeeWiDB 内存容量<b>MachineMemory</b>与持久内存容量<b>MemSize</b>为固定搭配，即2GB内存，固定分配8GB的持久内存，不可选择。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。</li><li>变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。</li></ul>
         * @type {number || null}
         */
        this.MachineMemory = null;

        /**
         * 配置变更后，分片数量。
<ul><li>增加后分片的数量务必为增加之前数量的整数倍。分片数量支持选择3、5、6、8、9、10、12、15、16、18、20、21、24、25、27、30、32、33、35、36、39、40、42、45、48、50、51、54、55、56、57、60、63、64分片。</li><li>变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。</li></ul>
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * 配置变更后，每个分片硬盘的容量。单位：GB。
<ul><li>每一缓存分片容量，对应的磁盘容量范围不同。具体信息，请参见[产品规格](https://cloud.tencent.com/document/product/1520/80808)。</li><li>变更实例内存、持久化内存与磁盘、变更实例的分片数量，每次只能变更一项。</li></ul>
         * @type {number || null}
         */
        this.DiskSize = null;

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
        this.MachineCpu = 'MachineCpu' in params ? params.MachineCpu : null;
        this.MachineMemory = 'MachineMemory' in params ? params.MachineMemory : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

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
         * Proxy 节点数量。
         * @type {number || null}
         */
        this.ProxyCount = null;

        /**
         * Proxy 节点信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProxyNodeInfo> || null}
         */
        this.Proxy = null;

        /**
         * Redis 节点数量。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。
         * @type {number || null}
         */
        this.RedisCount = null;

        /**
         * Redis 节点信息。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.Redis = null;

        /**
         * Tendis 节点数量。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。
         * @type {number || null}
         */
        this.TendisCount = null;

        /**
         * Tendis 节点信息。该参数仅为产品兼容性而保留，并不具有实际意义，可忽略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceNodeInfo> || null}
         */
        this.Tendis = null;

        /**
         * KeewiDB 节点数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.KeeWiDBCount = null;

        /**
         * KeewiDB 节点信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceNodeInfo> || null}
         */
        this.KeeWiDB = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new ProxyNodeInfo();
                obj.deserialize(params.Proxy[z]);
                this.Proxy.push(obj);
            }
        }
        this.RedisCount = 'RedisCount' in params ? params.RedisCount : null;

        if (params.Redis) {
            this.Redis = new Array();
            for (let z in params.Redis) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.Redis[z]);
                this.Redis.push(obj);
            }
        }
        this.TendisCount = 'TendisCount' in params ? params.TendisCount : null;

        if (params.Tendis) {
            this.Tendis = new Array();
            for (let z in params.Tendis) {
                let obj = new InstanceNodeInfo();
                obj.deserialize(params.Tendis[z]);
                this.Tendis.push(obj);
            }
        }
        this.KeeWiDBCount = 'KeeWiDBCount' in params ? params.KeeWiDBCount : null;

        if (params.KeeWiDB) {
            this.KeeWiDB = new Array();
            for (let z in params.KeeWiDB) {
                let obj = new InstanceNodeInfo();
                obj.deserialize(params.KeeWiDB[z]);
                this.KeeWiDB.push(obj);
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
         * 设置参数的名字
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 设置参数的值
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
         * 任务 ID。
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
    ModifyInstanceParamsResponse: ModifyInstanceParamsResponse,
    ModifyAutoBackupConfigResponse: ModifyAutoBackupConfigResponse,
    TaskInfoDetail: TaskInfoDetail,
    CreateInstancesRequest: CreateInstancesRequest,
    ModifyNetworkConfigResponse: ModifyNetworkConfigResponse,
    DescribeInstanceBinlogsRequest: DescribeInstanceBinlogsRequest,
    Inbound: Inbound,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    DescribeTaskListResponse: DescribeTaskListResponse,
    ModifyInstanceRequest: ModifyInstanceRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    CreateBackupManuallyResponse: CreateBackupManuallyResponse,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    RedisNodeInfo: RedisNodeInfo,
    ProxyNodeInfo: ProxyNodeInfo,
    DestroyPostpaidInstanceRequest: DestroyPostpaidInstanceRequest,
    InstanceProxySlowlogDetail: InstanceProxySlowlogDetail,
    ResetPasswordResponse: ResetPasswordResponse,
    ClearInstanceRequest: ClearInstanceRequest,
    RegionConf: RegionConf,
    RenewInstanceRequest: RenewInstanceRequest,
    CreateBackupManuallyRequest: CreateBackupManuallyRequest,
    DescribeInstanceParamRecordsResponse: DescribeInstanceParamRecordsResponse,
    InstanceMultiParam: InstanceMultiParam,
    ModifyAutoBackupConfigRequest: ModifyAutoBackupConfigRequest,
    DestroyPrepaidInstanceRequest: DestroyPrepaidInstanceRequest,
    InstanceIntegerParam: InstanceIntegerParam,
    InstanceTagInfo: InstanceTagInfo,
    DestroyPostpaidInstanceResponse: DestroyPostpaidInstanceResponse,
    ModifyInstanceResponse: ModifyInstanceResponse,
    NodeInfo: NodeInfo,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DescribeTendisSlowLogResponse: DescribeTendisSlowLogResponse,
    DescribeProductInfoResponse: DescribeProductInfoResponse,
    BackupInfo: BackupInfo,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    ChangeInstanceMasterRequest: ChangeInstanceMasterRequest,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    DescribeInstanceBackupsResponse: DescribeInstanceBackupsResponse,
    DescribeInstanceReplicasResponse: DescribeInstanceReplicasResponse,
    StartUpInstanceResponse: StartUpInstanceResponse,
    InstanceTextParam: InstanceTextParam,
    InstanceParamHistory: InstanceParamHistory,
    DescribeInstanceParamRecordsRequest: DescribeInstanceParamRecordsRequest,
    DescribeTaskListRequest: DescribeTaskListRequest,
    CreateInstancesResponse: CreateInstancesResponse,
    KeeWiDBNode: KeeWiDBNode,
    BinlogInfo: BinlogInfo,
    ModifyNetworkConfigRequest: ModifyNetworkConfigRequest,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    CleanUpInstanceResponse: CleanUpInstanceResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    ZoneCapacityConf: ZoneCapacityConf,
    Outbound: Outbound,
    DescribeAutoBackupConfigResponse: DescribeAutoBackupConfigResponse,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    SecurityGroup: SecurityGroup,
    StartUpInstanceRequest: StartUpInstanceRequest,
    DescribeMaintenanceWindowResponse: DescribeMaintenanceWindowResponse,
    ResetPasswordRequest: ResetPasswordRequest,
    ProductConf: ProductConf,
    ModifyConnectionConfigRequest: ModifyConnectionConfigRequest,
    ResourceTag: ResourceTag,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    ReplicaGroup: ReplicaGroup,
    InstanceInfo: InstanceInfo,
    CleanUpInstanceRequest: CleanUpInstanceRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    DescribeAutoBackupConfigRequest: DescribeAutoBackupConfigRequest,
    InstanceEnumParam: InstanceEnumParam,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    ModifyConnectionConfigResponse: ModifyConnectionConfigResponse,
    ModifyMaintenanceWindowResponse: ModifyMaintenanceWindowResponse,
    DescribeInstanceReplicasRequest: DescribeInstanceReplicasRequest,
    DestroyPrepaidInstanceResponse: DestroyPrepaidInstanceResponse,
    InstanceNodeInfo: InstanceNodeInfo,
    TendisSlowLogDetail: TendisSlowLogDetail,
    ModifyInstanceParamsRequest: ModifyInstanceParamsRequest,
    DescribeInstanceNodeInfoRequest: DescribeInstanceNodeInfoRequest,
    DescribeMaintenanceWindowRequest: DescribeMaintenanceWindowRequest,
    DescribeTendisSlowLogRequest: DescribeTendisSlowLogRequest,
    DescribeProxySlowLogRequest: DescribeProxySlowLogRequest,
    DescribeProxySlowLogResponse: DescribeProxySlowLogResponse,
    DescribeProductInfoRequest: DescribeProductInfoRequest,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    ModifyMaintenanceWindowRequest: ModifyMaintenanceWindowRequest,
    DescribeInstanceBackupsRequest: DescribeInstanceBackupsRequest,
    DescribeInstanceBinlogsResponse: DescribeInstanceBinlogsResponse,
    ChangeInstanceMasterResponse: ChangeInstanceMasterResponse,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    DescribeInstanceNodeInfoResponse: DescribeInstanceNodeInfoResponse,
    InstanceParam: InstanceParam,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    ClearInstanceResponse: ClearInstanceResponse,

}
