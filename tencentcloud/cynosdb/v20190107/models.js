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
 * ModifyClusterName请求参数结构体
 * @class
 */
class ModifyClusterNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名
         * @type {string || null}
         */
        this.ClusterName = null;

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
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例组ID数组
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * CreateAccounts返回参数结构体
 * @class
 */
class CreateAccountsResponse extends  AbstractModel {
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
 * ModifyInstanceName请求参数结构体
 * @class
 */
class ModifyInstanceNameRequest extends  AbstractModel {
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
 * DescribeDBSecurityGroups返回参数结构体
 * @class
 */
class DescribeDBSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组信息
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
 * 账号参数
 * @class
 */
class AccountParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称，当前仅支持参数：max_user_connections
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 参数值
         * @type {string || null}
         */
        this.ParamValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ParamValue = 'ParamValue' in params ? params.ParamValue : null;

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
         * 实例个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例列表
         * @type {Array.<CynosdbInstance> || null}
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
                let obj = new CynosdbInstance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * PauseServerless请求参数结构体
 * @class
 */
class PauseServerlessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否强制暂停，忽略当前的用户链接  0:不强制  1:强制， 默认为1
         * @type {number || null}
         */
        this.ForcePause = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ForcePause = 'ForcePause' in params ? params.ForcePause : null;

    }
}

/**
 * RevokeAccountPrivileges返回参数结构体
 * @class
 */
class RevokeAccountPrivilegesResponse extends  AbstractModel {
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
         * 资源ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取资源ID）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 集群ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取集群ID）
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
         * 自动续费标志位，续费标记 0:正常续费  1:自动续费 2:到期不续
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
 * 实例组信息
 * @class
 */
class CynosdbInstanceGrp extends  AbstractModel {
    constructor(){
        super();

        /**
         * appId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 删除时间
         * @type {string || null}
         */
        this.DeletedTime = null;

        /**
         * 实例组ID
         * @type {string || null}
         */
        this.InstanceGrpId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例组类型。ha-ha组；ro-只读组
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 内网端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 外网域名
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * 外网ip
         * @type {string || null}
         */
        this.WanIP = null;

        /**
         * 外网端口
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * 外网状态
         * @type {string || null}
         */
        this.WanStatus = null;

        /**
         * 实例组包含实例信息
         * @type {Array.<CynosdbInstance> || null}
         */
        this.InstanceSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DeletedTime = 'DeletedTime' in params ? params.DeletedTime : null;
        this.InstanceGrpId = 'InstanceGrpId' in params ? params.InstanceGrpId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanIP = 'WanIP' in params ? params.WanIP : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new CynosdbInstance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }

    }
}

/**
 * 集群绑定的标签信息，包含标签键TagKey和标签值TagValue
 * @class
 */
class Tag extends  AbstractModel {
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
 * ActivateInstance请求参数结构体
 * @class
 */
class ActivateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例 ID 列表，单个实例 ID 格式如：cynosdbmysql-ins-n7ocdslw，与TDSQL-C MySQL数据库控制台页面中显示的实例 ID 相同，可使用 查询实例列表 接口获取，其值为输出参数中字段 InstanceId 的值。
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

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

    }
}

/**
 * 回档表信息
 * @class
 */
class RollbackTableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 旧表名称
         * @type {string || null}
         */
        this.OldTable = null;

        /**
         * 新表名称
         * @type {string || null}
         */
        this.NewTable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldTable = 'OldTable' in params ? params.OldTable : null;
        this.NewTable = 'NewTable' in params ? params.NewTable : null;

    }
}

/**
 * DescribeAccountAllGrantPrivileges返回参数结构体
 * @class
 */
class DescribeAccountAllGrantPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限语句
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivilegeStatements = null;

        /**
         * 全局权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * 数据库权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DatabasePrivileges> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * 数据库表权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TablePrivileges> || null}
         */
        this.TablePrivileges = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivilegeStatements = 'PrivilegeStatements' in params ? params.PrivilegeStatements : null;
        this.GlobalPrivileges = 'GlobalPrivileges' in params ? params.GlobalPrivileges : null;

        if (params.DatabasePrivileges) {
            this.DatabasePrivileges = new Array();
            for (let z in params.DatabasePrivileges) {
                let obj = new DatabasePrivileges();
                obj.deserialize(params.DatabasePrivileges[z]);
                this.DatabasePrivileges.push(obj);
            }
        }

        if (params.TablePrivileges) {
            this.TablePrivileges = new Array();
            for (let z in params.TablePrivileges) {
                let obj = new TablePrivileges();
                obj.deserialize(params.TablePrivileges[z]);
                this.TablePrivileges.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 回滚数据库信息
 * @class
 */
class RollbackDatabase extends  AbstractModel {
    constructor(){
        super();

        /**
         * 旧数据库
         * @type {string || null}
         */
        this.OldDatabase = null;

        /**
         * 新数据库
         * @type {string || null}
         */
        this.NewDatabase = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldDatabase = 'OldDatabase' in params ? params.OldDatabase : null;
        this.NewDatabase = 'NewDatabase' in params ? params.NewDatabase : null;

    }
}

/**
 * 数据库权限列表
 * @class
 */
class DatabasePrivileges extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 权限列表
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

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
 * DescribeInstanceDetail返回参数结构体
 * @class
 */
class DescribeInstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例详情
         * @type {CynosdbInstanceDetail || null}
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
            let obj = new CynosdbInstanceDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyAccountParams请求参数结构体
 * @class
 */
class ModifyAccountParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id，不超过32个字符
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 账号信息
         * @type {InputAccount || null}
         */
        this.Account = null;

        /**
         * 数据库表权限数组,当前仅支持参数：max_user_connections
         * @type {Array.<AccountParam> || null}
         */
        this.AccountParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Account) {
            let obj = new InputAccount();
            obj.deserialize(params.Account)
            this.Account = obj;
        }

        if (params.AccountParams) {
            this.AccountParams = new Array();
            for (let z in params.AccountParams) {
                let obj = new AccountParam();
                obj.deserialize(params.AccountParams[z]);
                this.AccountParams.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterInstanceGrps请求参数结构体
 * @class
 */
class DescribeClusterInstanceGrpsRequest extends  AbstractModel {
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
 * DescribeResourcesByDealName返回参数结构体
 * @class
 */
class DescribeResourcesByDealNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费资源id信息数组
         * @type {Array.<BillingResourceInfo> || null}
         */
        this.BillingResourceInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BillingResourceInfos) {
            this.BillingResourceInfos = new Array();
            for (let z in params.BillingResourceInfos) {
                let obj = new BillingResourceInfo();
                obj.deserialize(params.BillingResourceInfos[z]);
                this.BillingResourceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeServerless返回参数结构体
 * @class
 */
class ResumeServerlessResponse extends  AbstractModel {
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
 * CreateAccounts请求参数结构体
 * @class
 */
class CreateAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 新账户列表
         * @type {Array.<NewAccount> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new NewAccount();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

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
 * DescribeDBSecurityGroups请求参数结构体
 * @class
 */
class DescribeDBSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例组ID
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
 * RollBackCluster请求参数结构体
 * @class
 */
class RollBackClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 回档策略 timeRollback-按时间点回档 snapRollback-按备份文件回档
         * @type {string || null}
         */
        this.RollbackStrategy = null;

        /**
         * 回档ID
         * @type {number || null}
         */
        this.RollbackId = null;

        /**
         * 期望回档时间
         * @type {string || null}
         */
        this.ExpectTime = null;

        /**
         * 期望阈值
         * @type {number || null}
         */
        this.ExpectTimeThresh = null;

        /**
         * 回档数据库列表
         * @type {Array.<RollbackDatabase> || null}
         */
        this.RollbackDatabases = null;

        /**
         * 回档数据库表
         * @type {Array.<RollbackTable> || null}
         */
        this.RollbackTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RollbackStrategy = 'RollbackStrategy' in params ? params.RollbackStrategy : null;
        this.RollbackId = 'RollbackId' in params ? params.RollbackId : null;
        this.ExpectTime = 'ExpectTime' in params ? params.ExpectTime : null;
        this.ExpectTimeThresh = 'ExpectTimeThresh' in params ? params.ExpectTimeThresh : null;

        if (params.RollbackDatabases) {
            this.RollbackDatabases = new Array();
            for (let z in params.RollbackDatabases) {
                let obj = new RollbackDatabase();
                obj.deserialize(params.RollbackDatabases[z]);
                this.RollbackDatabases.push(obj);
            }
        }

        if (params.RollbackTables) {
            this.RollbackTables = new Array();
            for (let z in params.RollbackTables) {
                let obj = new RollbackTable();
                obj.deserialize(params.RollbackTables[z]);
                this.RollbackTables.push(obj);
            }
        }

    }
}

/**
 * 回档数据库及表
 * @class
 */
class RollbackTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库表
         * @type {Array.<RollbackTableInfo> || null}
         */
        this.Tables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new RollbackTableInfo();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }

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
 * DescribeProjectSecurityGroups返回参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情
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
 * PauseServerless返回参数结构体
 * @class
 */
class PauseServerlessResponse extends  AbstractModel {
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
 * 新创建的账号
 * @class
 */
class NewAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户名
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * 主机
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 描述
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
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.DbType = 'DbType' in params ? params.DbType : null;

    }
}

/**
 * 实例信息
 * @class
 */
class CynosdbInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 用户AppId
         * @type {number || null}
         */
        this.AppId = null;

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
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

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
         * 实例状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例状态中文描述
         * @type {string || null}
         */
        this.StatusDesc = null;

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
         * Cpu，单位：核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储量，单位：GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 实例类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例当前角色
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * VPC网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例内网IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 实例内网端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 付费模式
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例过期时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 销毁期限
         * @type {string || null}
         */
        this.DestroyDeadlineText = null;

        /**
         * 隔离时间
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * 网络类型
         * @type {number || null}
         */
        this.NetType = null;

        /**
         * 外网域名
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * 外网IP
         * @type {string || null}
         */
        this.WanIP = null;

        /**
         * 外网端口
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * 外网状态
         * @type {string || null}
         */
        this.WanStatus = null;

        /**
         * 实例销毁时间
         * @type {string || null}
         */
        this.DestroyTime = null;

        /**
         * Cynos内核版本
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * 正在处理的任务
         * @type {string || null}
         */
        this.ProcessingTask = null;

        /**
         * 续费标志
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * serverless实例cpu下限
         * @type {number || null}
         */
        this.MinCpu = null;

        /**
         * serverless实例cpu上限
         * @type {number || null}
         */
        this.MaxCpu = null;

        /**
         * serverless实例状态, 可选值：
resume
pause
         * @type {string || null}
         */
        this.ServerlessStatus = null;

        /**
         * 预付费存储Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageId = null;

        /**
         * 存储付费类型
         * @type {number || null}
         */
        this.StoragePayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.DestroyDeadlineText = 'DestroyDeadlineText' in params ? params.DestroyDeadlineText : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanIP = 'WanIP' in params ? params.WanIP : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.DestroyTime = 'DestroyTime' in params ? params.DestroyTime : null;
        this.CynosVersion = 'CynosVersion' in params ? params.CynosVersion : null;
        this.ProcessingTask = 'ProcessingTask' in params ? params.ProcessingTask : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.MinCpu = 'MinCpu' in params ? params.MinCpu : null;
        this.MaxCpu = 'MaxCpu' in params ? params.MaxCpu : null;
        this.ServerlessStatus = 'ServerlessStatus' in params ? params.ServerlessStatus : null;
        this.StorageId = 'StorageId' in params ? params.StorageId : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;

    }
}

/**
 * 数据库表
 * @class
 */
class DbTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 数据库表名称
         * @type {string || null}
         */
        this.TableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.TableName = 'TableName' in params ? params.TableName : null;

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
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 账号信息
         * @type {InputAccount || null}
         */
        this.Account = null;

        /**
         * 数据库表权限码数组
         * @type {Array.<string> || null}
         */
        this.DbTablePrivileges = null;

        /**
         * 数据库表信息
         * @type {Array.<DbTable> || null}
         */
        this.DbTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Account) {
            let obj = new InputAccount();
            obj.deserialize(params.Account)
            this.Account = obj;
        }
        this.DbTablePrivileges = 'DbTablePrivileges' in params ? params.DbTablePrivileges : null;

        if (params.DbTables) {
            this.DbTables = new Array();
            for (let z in params.DbTables) {
                let obj = new DbTable();
                obj.deserialize(params.DbTables[z]);
                this.DbTables.push(obj);
            }
        }

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
<li> MYSQL可选值：5.7，8.0 </li>
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * 所属项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 当DbMode为NORMAL或不填时必选
普通实例Cpu核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 当DbMode为NORMAL或不填时必选
普通实例内存,单位G
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 该参数无实际意义，已废弃。
存储大小，单位G。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 集群名称，长度小于64个字符，每个字符取值范围：大/小写字母，数字，特殊符号（'-','_','.'）
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 账号密码(8-64个字符，包含大小写英文字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种)
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
         * 购买集群数，可选值范围[1,50]，默认为1
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
         * 该参数无实际意义，已废弃。
时间点回档，指定时间允许范围
         * @type {number || null}
         */
        this.ExpectTimeThresh = null;

        /**
         * 普通实例存储上限，单位GB
当DbType为MYSQL，且存储计费模式为预付费时，该参数需不大于cpu与memory对应存储规格上限
         * @type {number || null}
         */
        this.StorageLimit = null;

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
         * 包年包月购买时长单位，['s','d','m','y']
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

        /**
         * 集群创建需要绑定的tag数组信息
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Db类型
当DbType为MYSQL时可选(默认NORMAL)：
<li>NORMAL</li>
<li>SERVERLESS</li>
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * 当DbMode为SEVERLESS时必填
cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回
         * @type {number || null}
         */
        this.MinCpu = null;

        /**
         * 当DbMode为SEVERLESS时必填：
cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回
         * @type {number || null}
         */
        this.MaxCpu = null;

        /**
         * 当DbMode为SEVERLESS时，指定集群是否自动暂停，可选范围
<li>yes</li>
<li>no</li>
默认值:yes
         * @type {string || null}
         */
        this.AutoPause = null;

        /**
         * 当DbMode为SEVERLESS时，指定集群自动暂停的延迟，单位秒，可选范围[600,691200]
默认值:600
         * @type {number || null}
         */
        this.AutoPauseDelay = null;

        /**
         * 集群存储计费模式，按量计费：0，包年包月：1。默认按量计费
当DbType为MYSQL时，在集群计算计费模式为后付费（包括DbMode为SERVERLESS）时，存储计费模式仅可为按量计费
回档与克隆均不支持包年包月存储
         * @type {number || null}
         */
        this.StoragePayMode = null;

        /**
         * 安全组id数组
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 告警策略Id数组
         * @type {Array.<string> || null}
         */
        this.AlarmPolicyIds = null;

        /**
         * 参数数组
         * @type {Array.<ParamItem> || null}
         */
        this.ClusterParams = null;

        /**
         * 交易模式，0-下单且支付，1-下单
         * @type {number || null}
         */
        this.DealMode = null;

        /**
         * 参数模版ID
         * @type {number || null}
         */
        this.ParamTemplateId = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
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
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.HaCount = 'HaCount' in params ? params.HaCount : null;
        this.OrderSource = 'OrderSource' in params ? params.OrderSource : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.MinCpu = 'MinCpu' in params ? params.MinCpu : null;
        this.MaxCpu = 'MaxCpu' in params ? params.MaxCpu : null;
        this.AutoPause = 'AutoPause' in params ? params.AutoPause : null;
        this.AutoPauseDelay = 'AutoPauseDelay' in params ? params.AutoPauseDelay : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.AlarmPolicyIds = 'AlarmPolicyIds' in params ? params.AlarmPolicyIds : null;

        if (params.ClusterParams) {
            this.ClusterParams = new Array();
            for (let z in params.ClusterParams) {
                let obj = new ParamItem();
                obj.deserialize(params.ClusterParams[z]);
                this.ClusterParams.push(obj);
            }
        }
        this.DealMode = 'DealMode' in params ? params.DealMode : null;
        this.ParamTemplateId = 'ParamTemplateId' in params ? params.ParamTemplateId : null;

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
         * 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。
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
 * DescribeProjectSecurityGroups请求参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
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
 * ModifyClusterParam返回参数结构体
 * @class
 */
class ModifyClusterParamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步请求Id，用于查询结果
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
 * 安全组详情
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
         * @type {Array.<PolicyRule> || null}
         */
        this.Inbound = null;

        /**
         * 出站规则
         * @type {Array.<PolicyRule> || null}
         */
        this.Outbound = null;

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

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new PolicyRule();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new PolicyRule();
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
 * 网络信息
 * @class
 */
class NetAddr extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 内网端口号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 外网域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * 外网端口号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * 网络类型（ro-只读,rw/ha-读写）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.NetType = 'NetType' in params ? params.NetType : null;

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
 * DescribeResourcesByDealName请求参数结构体
 * @class
 */
class DescribeResourcesByDealNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费订单id（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）
         * @type {string || null}
         */
        this.DealName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;

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
 * ResumeServerless请求参数结构体
 * @class
 */
class ResumeServerlessRequest extends  AbstractModel {
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
 * 计费资源信息
 * @class
 */
class BillingResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例ID列表
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ModifyClusterName返回参数结构体
 * @class
 */
class ModifyClusterNameResponse extends  AbstractModel {
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
 * DescribeClusterParamLogs返回参数结构体
 * @class
 */
class DescribeClusterParamLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数修改记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClusterParamModifyLog> || null}
         */
        this.ClusterParamLogs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ClusterParamLogs) {
            this.ClusterParamLogs = new Array();
            for (let z in params.ClusterParamLogs) {
                let obj = new ClusterParamModifyLog();
                obj.deserialize(params.ClusterParamLogs[z]);
                this.ClusterParamLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 集群状态， 可选值如下:
creating: 创建中
running:运行中
isolating:隔离中
isolated:已隔离
activating:解隔离中
offlining:下线中
offlined:已下线
deleting:删除中
deleted:已删除
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

        /**
         * 集群绑定的tag数组
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Db类型(NORMAL, SERVERLESS)
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * 当Db类型为SERVERLESS时，serverless集群状态，可选值:
resume
pause
         * @type {string || null}
         */
        this.ServerlessStatus = null;

        /**
         * 集群预付费存储值大小
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 集群存储为预付费时的存储ID，用于预付费存储变配
         * @type {string || null}
         */
        this.StorageId = null;

        /**
         * 集群存储付费模式。0-按量计费，1-包年包月
         * @type {number || null}
         */
        this.StoragePayMode = null;

        /**
         * 集群计算规格对应的最小存储值
         * @type {number || null}
         */
        this.MinStorageSize = null;

        /**
         * 集群计算规格对应的最大存储值
         * @type {number || null}
         */
        this.MaxStorageSize = null;

        /**
         * 集群网络信息
         * @type {Array.<NetAddr> || null}
         */
        this.NetAddrs = null;

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

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.ServerlessStatus = 'ServerlessStatus' in params ? params.ServerlessStatus : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageId = 'StorageId' in params ? params.StorageId : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.MinStorageSize = 'MinStorageSize' in params ? params.MinStorageSize : null;
        this.MaxStorageSize = 'MaxStorageSize' in params ? params.MaxStorageSize : null;

        if (params.NetAddrs) {
            this.NetAddrs = new Array();
            for (let z in params.NetAddrs) {
                let obj = new NetAddr();
                obj.deserialize(params.NetAddrs[z]);
                this.NetAddrs.push(obj);
            }
        }

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
 * RevokeAccountPrivileges请求参数结构体
 * @class
 */
class RevokeAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 账号信息
         * @type {InputAccount || null}
         */
        this.Account = null;

        /**
         * 数据库表权限数组
         * @type {Array.<string> || null}
         */
        this.DbTablePrivileges = null;

        /**
         * 数据库表信息
         * @type {Array.<DbTable> || null}
         */
        this.DbTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Account) {
            let obj = new InputAccount();
            obj.deserialize(params.Account)
            this.Account = obj;
        }
        this.DbTablePrivileges = 'DbTablePrivileges' in params ? params.DbTablePrivileges : null;

        if (params.DbTables) {
            this.DbTables = new Array();
            for (let z in params.DbTables) {
                let obj = new DbTable();
                obj.deserialize(params.DbTables[z]);
                this.DbTables.push(obj);
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
 * DescribeClusterParamLogs请求参数结构体
 * @class
 */
class DescribeClusterParamLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 返回数量，默认为 20，取值范围为(0,100]
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 记录偏移量，默认值为0，取值范围为[0,INF)
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
         * 数据库内存，单位GB
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

        /**
         * 交易模式 0-下单并支付 1-下单
         * @type {number || null}
         */
        this.DealMode = null;

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
        this.DealMode = 'DealMode' in params ? params.DealMode : null;

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
 * RollBackCluster返回参数结构体
 * @class
 */
class RollBackClusterResponse extends  AbstractModel {
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
 * ActivateInstance返回参数结构体
 * @class
 */
class ActivateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流id
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
 * DescribeClusterInstanceGrps返回参数结构体
 * @class
 */
class DescribeClusterInstanceGrpsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例组个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例组列表
         * @type {Array.<CynosdbInstanceGrp> || null}
         */
        this.InstanceGrpInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.InstanceGrpInfoList) {
            this.InstanceGrpInfoList = new Array();
            for (let z in params.InstanceGrpInfoList) {
                let obj = new CynosdbInstanceGrp();
                obj.deserialize(params.InstanceGrpInfoList[z]);
                this.InstanceGrpInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 内存，单位为GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 新增只读实例数，取值范围为(0,16]
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
         * 所属子网ID，如果设置了VpcId，则SubnetId必填
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 新增RO组时使用的Port，取值范围为[0,65535)
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 实例名称，字符串长度范围为[0,64)
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
         * 订单来源，字符串长度范围为[0,64)
         * @type {string || null}
         */
        this.OrderSource = null;

        /**
         * 交易模式 0-下单并支付 1-下单
         * @type {number || null}
         */
        this.DealMode = null;

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
        this.DealMode = 'DealMode' in params ? params.DealMode : null;

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

        /**
         * 引擎类型：目前支持“MYSQL”， “POSTGRESQL”
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 实例状态, 可选值:
creating 创建中
running 运行中
isolating 隔离中
isolated 已隔离
activating 恢复中
offlining 下线中
offlined 已下线
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例id列表
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
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 参数修改记录
 * @class
 */
class ClusterParamModifyLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 当前值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 修改后的值
         * @type {string || null}
         */
        this.UpdateValue = null;

        /**
         * 修改状态
         * @type {string || null}
         */
        this.Status = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.UpdateValue = 'UpdateValue' in params ? params.UpdateValue : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 实例详情
 * @class
 */
class CynosdbInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 用户AppId
         * @type {number || null}
         */
        this.AppId = null;

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
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

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
         * 实例状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例状态中文描述
         * @type {string || null}
         */
        this.StatusDesc = null;

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
         * Cpu，单位：核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储量，单位：GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 实例类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例当前角色
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 付费模式
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例过期时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 网络类型
         * @type {number || null}
         */
        this.NetType = null;

        /**
         * VPC网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例内网IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 实例内网端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 实例外网域名
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * 字符集
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * Cynos内核版本
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * 续费标志
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * serverless实例cpu下限
         * @type {number || null}
         */
        this.MinCpu = null;

        /**
         * serverless实例cpu上限
         * @type {number || null}
         */
        this.MaxCpu = null;

        /**
         * serverless实例状态, 可能值：
resume
pause
         * @type {string || null}
         */
        this.ServerlessStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.CynosVersion = 'CynosVersion' in params ? params.CynosVersion : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.MinCpu = 'MinCpu' in params ? params.MinCpu : null;
        this.MaxCpu = 'MaxCpu' in params ? params.MaxCpu : null;
        this.ServerlessStatus = 'ServerlessStatus' in params ? params.ServerlessStatus : null;

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

        /**
         * 实例绑定的tag数组信息
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * 当Db类型为SERVERLESS时，serverless集群状态，可选值:
resume
resuming
pause
pausing
         * @type {string || null}
         */
        this.ServerlessStatus = null;

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

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.ServerlessStatus = 'ServerlessStatus' in params ? params.ServerlessStatus : null;

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
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例组ID数组
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * mysql表权限
 * @class
 */
class TablePrivileges extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 表名
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 权限列表
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * ModifyClusterParam请求参数结构体
 * @class
 */
class ModifyClusterParamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 要修改的参数列表。每一个元素是ParamName、CurrentValue和OldValue的组合。ParamName是参数名称，CurrentValue是当前值，OldValue是之前值
         * @type {Array.<ParamItem> || null}
         */
        this.ParamList = null;

        /**
         * 维护期间执行-yes,立即执行-no
         * @type {string || null}
         */
        this.IsInMaintainPeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamItem();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.IsInMaintainPeriod = 'IsInMaintainPeriod' in params ? params.IsInMaintainPeriod : null;

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
 * ModifyAccountParams返回参数结构体
 * @class
 */
class ModifyAccountParamsResponse extends  AbstractModel {
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
 * OfflineInstance请求参数结构体
 * @class
 */
class OfflineInstanceRequest extends  AbstractModel {
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
 * DescribeAccountAllGrantPrivileges请求参数结构体
 * @class
 */
class DescribeAccountAllGrantPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 账号信息
         * @type {InputAccount || null}
         */
        this.Account = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Account) {
            let obj = new InputAccount();
            obj.deserialize(params.Account)
            this.Account = obj;
        }

    }
}

/**
 * OfflineInstance返回参数结构体
 * @class
 */
class OfflineInstanceResponse extends  AbstractModel {
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
 * 修改参数时，传入参数描述
 * @class
 */
class ParamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 当前值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 原有值
         * @type {string || null}
         */
        this.OldValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.OldValue = 'OldValue' in params ? params.OldValue : null;

    }
}

/**
 * 安全组规则
 * @class
 */
class PolicyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略，ACCEPT或者DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 来源Ip或Ip段，例如192.168.0.0/16
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 网络协议，支持udp、tcp等
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 协议端口ID或者协议端口组ID。
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * IP地址ID或者ID地址组ID。
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * id
         * @type {string || null}
         */
        this.Id = null;

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
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

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
         * 表示全备结束时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
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
 * 账号，包含accountName和host
 * @class
 */
class InputAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 主机，默认‘%’
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
        this.Host = 'Host' in params ? params.Host : null;

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

module.exports = {
    ModifyClusterNameRequest: ModifyClusterNameRequest,
    DescribeRollbackTimeRangeRequest: DescribeRollbackTimeRangeRequest,
    ObjectTask: ObjectTask,
    DescribeBackupConfigRequest: DescribeBackupConfigRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    ModifyMaintainPeriodConfigRequest: ModifyMaintainPeriodConfigRequest,
    DescribeRollbackTimeRangeResponse: DescribeRollbackTimeRangeResponse,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    CreateAccountsResponse: CreateAccountsResponse,
    ModifyInstanceNameRequest: ModifyInstanceNameRequest,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    DescribeMaintainPeriodRequest: DescribeMaintainPeriodRequest,
    AccountParam: AccountParam,
    DescribeInstancesResponse: DescribeInstancesResponse,
    ClusterInstanceDetail: ClusterInstanceDetail,
    Account: Account,
    ModifyBackupConfigResponse: ModifyBackupConfigResponse,
    IsolateInstanceResponse: IsolateInstanceResponse,
    ModifyInstanceNameResponse: ModifyInstanceNameResponse,
    PauseServerlessRequest: PauseServerlessRequest,
    RevokeAccountPrivilegesResponse: RevokeAccountPrivilegesResponse,
    CreateClustersResponse: CreateClustersResponse,
    SetRenewFlagRequest: SetRenewFlagRequest,
    CynosdbInstanceGrp: CynosdbInstanceGrp,
    Tag: Tag,
    ActivateInstanceRequest: ActivateInstanceRequest,
    RollbackTableInfo: RollbackTableInfo,
    DescribeAccountAllGrantPrivilegesResponse: DescribeAccountAllGrantPrivilegesResponse,
    RollbackDatabase: RollbackDatabase,
    DatabasePrivileges: DatabasePrivileges,
    DescribeClustersRequest: DescribeClustersRequest,
    DescribeInstanceDetailResponse: DescribeInstanceDetailResponse,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    ModifyAccountParamsRequest: ModifyAccountParamsRequest,
    DescribeClusterInstanceGrpsRequest: DescribeClusterInstanceGrpsRequest,
    DescribeResourcesByDealNameResponse: DescribeResourcesByDealNameResponse,
    ResumeServerlessResponse: ResumeServerlessResponse,
    CreateAccountsRequest: CreateAccountsRequest,
    IsolateInstanceRequest: IsolateInstanceRequest,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    RollBackClusterRequest: RollBackClusterRequest,
    RollbackTable: RollbackTable,
    DescribeClusterDetailRequest: DescribeClusterDetailRequest,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    PauseServerlessResponse: PauseServerlessResponse,
    OfflineClusterRequest: OfflineClusterRequest,
    NewAccount: NewAccount,
    BackupFileInfo: BackupFileInfo,
    DescribeBackupListRequest: DescribeBackupListRequest,
    CynosdbInstance: CynosdbInstance,
    DbTable: DbTable,
    GrantAccountPrivilegesRequest: GrantAccountPrivilegesRequest,
    IsolateClusterResponse: IsolateClusterResponse,
    CreateClustersRequest: CreateClustersRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    QueryFilter: QueryFilter,
    DescribeBackupConfigResponse: DescribeBackupConfigResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    AddInstancesResponse: AddInstancesResponse,
    Addr: Addr,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    ModifyClusterParamResponse: ModifyClusterParamResponse,
    SecurityGroup: SecurityGroup,
    NetAddr: NetAddr,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    DescribeResourcesByDealNameRequest: DescribeResourcesByDealNameRequest,
    DescribeRollbackTimeValidityResponse: DescribeRollbackTimeValidityResponse,
    GrantAccountPrivilegesResponse: GrantAccountPrivilegesResponse,
    ResumeServerlessRequest: ResumeServerlessRequest,
    BillingResourceInfo: BillingResourceInfo,
    ModifyClusterNameResponse: ModifyClusterNameResponse,
    DescribeInstanceSpecsRequest: DescribeInstanceSpecsRequest,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    DescribeClusterParamLogsResponse: DescribeClusterParamLogsResponse,
    CynosdbCluster: CynosdbCluster,
    SetRenewFlagResponse: SetRenewFlagResponse,
    OfflineClusterResponse: OfflineClusterResponse,
    RevokeAccountPrivilegesRequest: RevokeAccountPrivilegesRequest,
    InstanceSpec: InstanceSpec,
    DescribeClusterParamLogsRequest: DescribeClusterParamLogsRequest,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    DescribeMaintainPeriodResponse: DescribeMaintainPeriodResponse,
    DescribeBackupListResponse: DescribeBackupListResponse,
    RollBackClusterResponse: RollBackClusterResponse,
    DescribeClusterDetailResponse: DescribeClusterDetailResponse,
    ActivateInstanceResponse: ActivateInstanceResponse,
    DescribeRollbackTimeValidityRequest: DescribeRollbackTimeValidityRequest,
    IsolateClusterRequest: IsolateClusterRequest,
    DescribeClusterInstanceGrpsResponse: DescribeClusterInstanceGrpsResponse,
    AddInstancesRequest: AddInstancesRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    ClusterParamModifyLog: ClusterParamModifyLog,
    CynosdbInstanceDetail: CynosdbInstanceDetail,
    CynosdbClusterDetail: CynosdbClusterDetail,
    DescribeInstanceDetailRequest: DescribeInstanceDetailRequest,
    ModifyMaintainPeriodConfigResponse: ModifyMaintainPeriodConfigResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    TablePrivileges: TablePrivileges,
    ModifyClusterParamRequest: ModifyClusterParamRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    ModifyAccountParamsResponse: ModifyAccountParamsResponse,
    OfflineInstanceRequest: OfflineInstanceRequest,
    DescribeInstanceSpecsResponse: DescribeInstanceSpecsResponse,
    DescribeAccountAllGrantPrivilegesRequest: DescribeAccountAllGrantPrivilegesRequest,
    OfflineInstanceResponse: OfflineInstanceResponse,
    ParamItem: ParamItem,
    PolicyRule: PolicyRule,
    ModifyBackupConfigRequest: ModifyBackupConfigRequest,
    InputAccount: InputAccount,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,

}
