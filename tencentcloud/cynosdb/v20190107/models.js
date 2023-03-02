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
 * RemoveClusterSlaveZone请求参数结构体
 * @class
 */
class RemoveClusterSlaveZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 从可用区
         * @type {string || null}
         */
        this.SlaveZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;

    }
}

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
 * InquirePriceRenew请求参数结构体
 * @class
 */
class InquirePriceRenewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 购买时长,与TimeUnit组合才能生效
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 购买时长单位, 与TimeSpan组合生效，可选:日:d,月:m
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

    }
}

/**
 * 实例的审计规则详情，DescribeAuditRuleWithInstanceIds接口的出参。
 * @class
 */
class InstanceAuditRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否是规则审计。true-规则审计，false-全审计。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AuditRule = null;

        /**
         * 审计规则详情。仅当AuditRule=true时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuditRuleFilters> || null}
         */
        this.AuditRuleFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AuditRule = 'AuditRule' in params ? params.AuditRule : null;

        if (params.AuditRuleFilters) {
            this.AuditRuleFilters = new Array();
            for (let z in params.AuditRuleFilters) {
                let obj = new AuditRuleFilters();
                obj.deserialize(params.AuditRuleFilters[z]);
                this.AuditRuleFilters.push(obj);
            }
        }

    }
}

/**
 * DescribeAuditLogs请求参数结构体
 * @class
 */
class DescribeAuditLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，格式为："2017-07-12 10:29:20"。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，格式为："2017-07-12 10:29:20"。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段。支持值包括：
"timestamp" - 时间戳；
"affectRows" - 影响行数；
"execTime" - 执行时间。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 过滤条件。可按设置的过滤条件过滤日志。
         * @type {AuditLogFilter || null}
         */
        this.Filter = null;

        /**
         * 分页参数，单次返回的数据条数。默认值为100，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量。
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
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

        if (params.Filter) {
            let obj = new AuditLogFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * ModifyAuditRuleTemplates请求参数结构体
 * @class
 */
class ModifyAuditRuleTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则模版ID。
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

        /**
         * 修改后的审计规则。
         * @type {Array.<RuleFilters> || null}
         */
        this.RuleFilters = null;

        /**
         * 修改后的规则模版名称。
         * @type {string || null}
         */
        this.RuleTemplateName = null;

        /**
         * 修改后的规则模版描述。
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
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new RuleFilters();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.RuleTemplateName = 'RuleTemplateName' in params ? params.RuleTemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

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
该参数已废用
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 需要过滤的账户列表
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * 限制量
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AccountNames = 'AccountNames' in params ? params.AccountNames : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * 每周维护日期，日期取值范围[Mon, Tue, Wed, Thu, Fri, Sat, Sun]
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
         * 有效回归时间范围开始时间点（已废弃）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * 有效回归时间范围结束时间点（已废弃）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * 可回档时间范围
         * @type {Array.<RollbackTimeRange> || null}
         */
        this.RollbackTimeRanges = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RollbackTimeRanges) {
            this.RollbackTimeRanges = new Array();
            for (let z in params.RollbackTimeRanges) {
                let obj = new RollbackTimeRange();
                obj.deserialize(params.RollbackTimeRanges[z]);
                this.RollbackTimeRanges.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 订单ID
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.DealName = 'DealName' in params ? params.DealName : null;

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
 * ModifyClusterStorage请求参数结构体
 * @class
 */
class ModifyClusterStorageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群新存储大小（单位G）
         * @type {number || null}
         */
        this.NewStorageLimit = null;

        /**
         * 集群原存储大小（单位G）
         * @type {number || null}
         */
        this.OldStorageLimit = null;

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
        this.NewStorageLimit = 'NewStorageLimit' in params ? params.NewStorageLimit : null;
        this.OldStorageLimit = 'OldStorageLimit' in params ? params.OldStorageLimit : null;
        this.DealMode = 'DealMode' in params ? params.DealMode : null;

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
         * 期望阈值（已废弃）
         * @type {number || null}
         */
        this.ExpectTimeThresh = null;

        /**
         * 回档数据库列表
         * @type {Array.<RollbackDatabase> || null}
         */
        this.RollbackDatabases = null;

        /**
         * 回档数据库表列表
         * @type {Array.<RollbackTable> || null}
         */
        this.RollbackTables = null;

        /**
         * 按时间点回档模式，full: 普通; db: 快速; table: 极速  （默认是普通）
         * @type {string || null}
         */
        this.RollbackMode = null;

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
        this.RollbackMode = 'RollbackMode' in params ? params.RollbackMode : null;

    }
}

/**
 * DescribeAuditLogFiles返回参数结构体
 * @class
 */
class DescribeAuditLogFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的审计日志文件个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 审计日志文件详情。
         * @type {Array.<AuditLogFile> || null}
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
                let obj = new AuditLogFile();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchClusterZone返回参数结构体
 * @class
 */
class SwitchClusterZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步FlowId
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
 * 修改的实例参数信息
 * @class
 */
class ModifyParamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 参数当前值
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 参数旧值（只在出参时有用）
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeBinlogDownloadUrl请求参数结构体
 * @class
 */
class DescribeBinlogDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Binlog文件ID
         * @type {number || null}
         */
        this.BinlogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BinlogId = 'BinlogId' in params ? params.BinlogId : null;

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
 * DescribeBinlogs返回参数结构体
 * @class
 */
class DescribeBinlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Binlog列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BinlogItem> || null}
         */
        this.Binlogs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Binlogs) {
            this.Binlogs = new Array();
            for (let z in params.Binlogs) {
                let obj = new BinlogItem();
                obj.deserialize(params.Binlogs[z]);
                this.Binlogs.push(obj);
            }
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
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否包含虚拟区
         * @type {boolean || null}
         */
        this.IncludeVirtualZones = null;

        /**
         * 是否展示地域下所有可用区，并显示用户每个可用区权限
         * @type {boolean || null}
         */
        this.ShowPermission = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IncludeVirtualZones = 'IncludeVirtualZones' in params ? params.IncludeVirtualZones : null;
        this.ShowPermission = 'ShowPermission' in params ? params.ShowPermission : null;

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

        /**
         * 实例角色
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.InstanceStatusDesc = 'InstanceStatusDesc' in params ? params.InstanceStatusDesc : null;
        this.InstanceCpu = 'InstanceCpu' in params ? params.InstanceCpu : null;
        this.InstanceMemory = 'InstanceMemory' in params ? params.InstanceMemory : null;
        this.InstanceStorage = 'InstanceStorage' in params ? params.InstanceStorage : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

    }
}

/**
 * AddClusterSlaveZone返回参数结构体
 * @class
 */
class AddClusterSlaveZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步FlowId
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
 * 数据库地址
 * @class
 */
class OldAddrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 期望执行回收时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnTime = null;

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
        this.ReturnTime = 'ReturnTime' in params ? params.ReturnTime : null;

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
 * DescribeClusterParams返回参数结构体
 * @class
 */
class DescribeClusterParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例参数列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ParamInfo> || null}
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
                let obj = new ParamInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
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
 * 审计日志过滤条件。查询审计日志时，用户过滤返回的审计日志。
 * @class
 */
class AuditLogFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端地址。
         * @type {Array.<string> || null}
         */
        this.Host = null;

        /**
         * 用户名。
         * @type {Array.<string> || null}
         */
        this.User = null;

        /**
         * 数据库名称。
         * @type {Array.<string> || null}
         */
        this.DBName = null;

        /**
         * 表名称。
         * @type {Array.<string> || null}
         */
        this.TableName = null;

        /**
         * 审计策略名称。
         * @type {Array.<string> || null}
         */
        this.PolicyName = null;

        /**
         * SQL 语句。支持模糊匹配。
         * @type {string || null}
         */
        this.Sql = null;

        /**
         * SQL 类型。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。
         * @type {string || null}
         */
        this.SqlType = null;

        /**
         * 执行时间。单位为：ms。表示筛选执行时间大于该值的审计日志。
         * @type {number || null}
         */
        this.ExecTime = null;

        /**
         * 影响行数。表示筛选影响行数大于该值的审计日志。
         * @type {number || null}
         */
        this.AffectRows = null;

        /**
         * SQL 类型。支持多个类型同时查询。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。
         * @type {Array.<string> || null}
         */
        this.SqlTypes = null;

        /**
         * SQL 语句。支持传递多个sql语句。
         * @type {Array.<string> || null}
         */
        this.Sqls = null;

        /**
         * 返回行数。
         * @type {number || null}
         */
        this.SentRows = null;

        /**
         * 线程ID。
         * @type {Array.<string> || null}
         */
        this.ThreadId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.User = 'User' in params ? params.User : null;
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Sql = 'Sql' in params ? params.Sql : null;
        this.SqlType = 'SqlType' in params ? params.SqlType : null;
        this.ExecTime = 'ExecTime' in params ? params.ExecTime : null;
        this.AffectRows = 'AffectRows' in params ? params.AffectRows : null;
        this.SqlTypes = 'SqlTypes' in params ? params.SqlTypes : null;
        this.Sqls = 'Sqls' in params ? params.Sqls : null;
        this.SentRows = 'SentRows' in params ? params.SentRows : null;
        this.ThreadId = 'ThreadId' in params ? params.ThreadId : null;

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
         * 数据库引擎版本号
         * @type {Array.<string> || null}
         */
        this.EngineVersions = null;

        /**
         * 模版名称
         * @type {Array.<string> || null}
         */
        this.TemplateNames = null;

        /**
         * 模版ID
         * @type {Array.<number> || null}
         */
        this.TemplateIds = null;

        /**
         * 数据库类型，可选值：NORMAL，SERVERLESS
         * @type {Array.<string> || null}
         */
        this.DbModes = null;

        /**
         * 查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询限制条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询的模板对应的产品类型
         * @type {Array.<string> || null}
         */
        this.Products = null;

        /**
         * 模版类型
         * @type {Array.<string> || null}
         */
        this.TemplateTypes = null;

        /**
         * 版本类型
         * @type {Array.<string> || null}
         */
        this.EngineTypes = null;

        /**
         * 返回结果的排序字段
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式（asc、desc）
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EngineVersions = 'EngineVersions' in params ? params.EngineVersions : null;
        this.TemplateNames = 'TemplateNames' in params ? params.TemplateNames : null;
        this.TemplateIds = 'TemplateIds' in params ? params.TemplateIds : null;
        this.DbModes = 'DbModes' in params ? params.DbModes : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Products = 'Products' in params ? params.Products : null;
        this.TemplateTypes = 'TemplateTypes' in params ? params.TemplateTypes : null;
        this.EngineTypes = 'EngineTypes' in params ? params.EngineTypes : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * DescribeAuditLogs返回参数结构体
 * @class
 */
class DescribeAuditLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的审计日志条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 审计日志详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuditLog> || null}
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
                let obj = new AuditLog();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchClusterTables请求参数结构体
 * @class
 */
class SearchClusterTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据表名
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 数据表类型：
view：只返回 view，
base_table： 只返回基本表，
all：返回 view 和表
         * @type {string || null}
         */
        this.TableType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.TableType = 'TableType' in params ? params.TableType : null;

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
 * 参数是否可修改的详细信息
 * @class
 */
class ModifiableInfo extends  AbstractModel {
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
 * DescribeFlow返回参数结构体
 * @class
 */
class DescribeFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流状态。0-成功，1-失败，2-处理中
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
         * 用户appId
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

        /**
         * VPC的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 正在回收IP信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OldAddrInfo || null}
         */
        this.OldAddrInfo = null;

        /**
         * 正在进行的任务
         * @type {Array.<string> || null}
         */
        this.ProcessingTasks = null;

        /**
         * 任务列表
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

        /**
         * biz_net_service表id
         * @type {number || null}
         */
        this.NetServiceId = null;

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
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;

        if (params.OldAddrInfo) {
            let obj = new OldAddrInfo();
            obj.deserialize(params.OldAddrInfo)
            this.OldAddrInfo = obj;
        }
        this.ProcessingTasks = 'ProcessingTasks' in params ? params.ProcessingTasks : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ObjectTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.NetServiceId = 'NetServiceId' in params ? params.NetServiceId : null;

    }
}

/**
 * 实例慢查询信息
 * @class
 */
class SlowQueriesItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行时间戳
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 执行时长，单位秒
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * sql语句
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * 客户端host
         * @type {string || null}
         */
        this.UserHost = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 锁时长，单位秒
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * 扫描行数
         * @type {number || null}
         */
        this.RowsExamined = null;

        /**
         * 返回行数
         * @type {number || null}
         */
        this.RowsSent = null;

        /**
         * sql模版
         * @type {string || null}
         */
        this.SqlTemplate = null;

        /**
         * sql语句md5
         * @type {string || null}
         */
        this.SqlMd5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.QueryTime = 'QueryTime' in params ? params.QueryTime : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.UserHost = 'UserHost' in params ? params.UserHost : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.LockTime = 'LockTime' in params ? params.LockTime : null;
        this.RowsExamined = 'RowsExamined' in params ? params.RowsExamined : null;
        this.RowsSent = 'RowsSent' in params ? params.RowsSent : null;
        this.SqlTemplate = 'SqlTemplate' in params ? params.SqlTemplate : null;
        this.SqlMd5 = 'SqlMd5' in params ? params.SqlMd5 : null;

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
 * 数据库表信息
 * @class
 */
class DatabaseTables extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 表名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
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
        this.Tables = 'Tables' in params ? params.Tables : null;

    }
}

/**
 * AddClusterSlaveZone请求参数结构体
 * @class
 */
class AddClusterSlaveZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 从可用区
         * @type {string || null}
         */
        this.SlaveZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;

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
         * 旧数据库名称
         * @type {string || null}
         */
        this.OldDatabase = null;

        /**
         * 新数据库名称
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
 * ModifyVipVport请求参数结构体
 * @class
 */
class ModifyVipVportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例组id
         * @type {string || null}
         */
        this.InstanceGrpId = null;

        /**
         * 需要修改的目的ip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 需要修改的目的端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 数据库类型，取值范围: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 旧ip回收前的保留时间，单位小时，0表示立即回收
         * @type {number || null}
         */
        this.OldIpReserveHours = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceGrpId = 'InstanceGrpId' in params ? params.InstanceGrpId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.OldIpReserveHours = 'OldIpReserveHours' in params ? params.OldIpReserveHours : null;

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
 * ModifyClusterStorage返回参数结构体
 * @class
 */
class ModifyClusterStorageResponse extends  AbstractModel {
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
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteAuditLogFile返回参数结构体
 * @class
 */
class DeleteAuditLogFileResponse extends  AbstractModel {
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
 * DeleteAuditRuleTemplates请求参数结构体
 * @class
 */
class DeleteAuditRuleTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则模版ID。
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;

    }
}

/**
 * DescribeAuditRuleTemplates返回参数结构体
 * @class
 */
class DescribeAuditRuleTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 规则模版详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuditRuleTemplateInfo> || null}
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
                let obj = new AuditRuleTemplateInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchClusterZone请求参数结构体
 * @class
 */
class SwitchClusterZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 当前可用区
         * @type {string || null}
         */
        this.OldZone = null;

        /**
         * 要切换到的可用区
         * @type {string || null}
         */
        this.NewZone = null;

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
        this.OldZone = 'OldZone' in params ? params.OldZone : null;
        this.NewZone = 'NewZone' in params ? params.NewZone : null;
        this.IsInMaintainPeriod = 'IsInMaintainPeriod' in params ? params.IsInMaintainPeriod : null;

    }
}

/**
 * RestartInstance请求参数结构体
 * @class
 */
class RestartInstanceRequest extends  AbstractModel {
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
 * 集群支持的功能
 * @class
 */
class Ability extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否支持从可用区
         * @type {string || null}
         */
        this.IsSupportSlaveZone = null;

        /**
         * 不支持从可用区的原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NonsupportSlaveZoneReason = null;

        /**
         * 是否支持RO实例
         * @type {string || null}
         */
        this.IsSupportRo = null;

        /**
         * 不支持RO实例的原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NonsupportRoReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsSupportSlaveZone = 'IsSupportSlaveZone' in params ? params.IsSupportSlaveZone : null;
        this.NonsupportSlaveZoneReason = 'NonsupportSlaveZoneReason' in params ? params.NonsupportSlaveZoneReason : null;
        this.IsSupportRo = 'IsSupportRo' in params ? params.IsSupportRo : null;
        this.NonsupportRoReason = 'NonsupportRoReason' in params ? params.NonsupportRoReason : null;

    }
}

/**
 * 实例初始化配置信息
 * @class
 */
class InstanceInitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例cpu
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例内存
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例类型 rw/ro
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例个数,范围[1,15]
         * @type {number || null}
         */
        this.InstanceCount = null;

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
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

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
         * 该参数已废弃
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * 是否自动选择代金券 1是 0否 默认为0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 该参数已废弃
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 交易模式 0-下单并支付 1-下单
         * @type {number || null}
         */
        this.DealMode = null;

        /**
         * NormalUpgrade：普通变配，FastUpgrade：极速变配，若变配过程判断会造成闪断，变配流程会终止。
         * @type {string || null}
         */
        this.UpgradeMode = null;

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
        this.UpgradeMode = 'UpgradeMode' in params ? params.UpgradeMode : null;

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
         * 该参数已废弃
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
 * SwitchClusterVpc返回参数结构体
 * @class
 */
class SwitchClusterVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务id。
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
 * DeleteBackup返回参数结构体
 * @class
 */
class DeleteBackupResponse extends  AbstractModel {
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
         * 总数量
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
 * RemoveClusterSlaveZone返回参数结构体
 * @class
 */
class RemoveClusterSlaveZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步FlowId
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
 * CreateAuditLogFile返回参数结构体
 * @class
 */
class CreateAuditLogFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计日志文件名称。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
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
 * x08新创建的账号
 * @class
 */
class NewAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户名，包含字母数字_,以字母开头，字母或数字结尾，长度1-16
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 密码，密码长度范围为8到64个字符
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

        /**
         * 用户最大连接数，不能大于10240
         * @type {number || null}
         */
        this.MaxUserConnections = null;

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
        this.MaxUserConnections = 'MaxUserConnections' in params ? params.MaxUserConnections : null;

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
         * 快照文件ID，已废弃，请使用BackupId
         * @type {number || null}
         */
        this.SnapshotId = null;

        /**
         * 备份文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 备份文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 备份开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 备份完成时间
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 备份类型：snapshot，快照备份；logic，逻辑备份
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

        /**
         * 备份ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * 快照类型，可选值：full，全量；increment，增量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SnapShotType = null;

        /**
         * 备份文件备注
注意：此字段可能返回 null，表示取不到有效值。
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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupStatus = 'BackupStatus' in params ? params.BackupStatus : null;
        this.SnapshotTime = 'SnapshotTime' in params ? params.SnapshotTime : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.SnapShotType = 'SnapShotType' in params ? params.SnapShotType : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

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
 * DescribeBinlogDownloadUrl返回参数结构体
 * @class
 */
class DescribeBinlogDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载地址
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAuditRuleWithInstanceIds返回参数结构体
 * @class
 */
class DescribeAuditRuleWithInstanceIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例审计规则信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceAuditRule> || null}
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
                let obj = new InstanceAuditRule();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
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
         * 备份文件列表大小，取值范围(0,100]
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 备份文件列表偏移，取值范围[0,INF)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数据库类型，取值范围: 
<li> MYSQL </li>
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 备份ID
         * @type {Array.<number> || null}
         */
        this.BackupIds = null;

        /**
         * 备份类型，可选值：snapshot，快照备份； logic，逻辑备份
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * 备份方式，可选值：auto，自动备份；manual，手动备
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * 快照类型，可选值：full，全量；increment，增量
         * @type {string || null}
         */
        this.SnapShotType = null;

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
         * 备份文件名，模糊查询
         * @type {Array.<string> || null}
         */
        this.FileNames = null;

        /**
         * 备份备注名，模糊查询
         * @type {Array.<string> || null}
         */
        this.BackupNames = null;

        /**
         * 快照备份Id列表
         * @type {Array.<number> || null}
         */
        this.SnapshotIdList = null;

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
        this.BackupIds = 'BackupIds' in params ? params.BackupIds : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.SnapShotType = 'SnapShotType' in params ? params.SnapShotType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.FileNames = 'FileNames' in params ? params.FileNames : null;
        this.BackupNames = 'BackupNames' in params ? params.BackupNames : null;
        this.SnapshotIdList = 'SnapshotIdList' in params ? params.SnapshotIdList : null;

    }
}

/**
 * SearchClusterDatabases请求参数结构体
 * @class
 */
class SearchClusterDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 是否精确搜索。
0: 模糊搜索 1:精确搜索 
默认为0
         * @type {number || null}
         */
        this.MatchType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;

    }
}

/**
 * SwitchClusterVpc请求参数结构体
 * @class
 */
class SwitchClusterVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 字符串vpc id
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 字符串子网id
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 旧地址回收时间
         * @type {number || null}
         */
        this.OldIpReserveHours = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.OldIpReserveHours = 'OldIpReserveHours' in params ? params.OldIpReserveHours : null;

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

        /**
         * 物理区
         * @type {string || null}
         */
        this.PhysicalZone = null;

        /**
         * 商业类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

        /**
         * 是否冻结
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsFreeze = null;

        /**
         * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

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
        this.PhysicalZone = 'PhysicalZone' in params ? params.PhysicalZone : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ObjectTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.IsFreeze = 'IsFreeze' in params ? params.IsFreeze : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * DescribeAuditRuleWithInstanceIds请求参数结构体
 * @class
 */
class DescribeAuditRuleWithInstanceIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。目前仅支持单个实例的查询。
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
 * ModifyClusterSlaveZone返回参数结构体
 * @class
 */
class ModifyClusterSlaveZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步FlowId
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
 * Binlog描述
 * @class
 */
class BinlogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Binlog文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件大小，单位：字节
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 事务最早时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 事务最晚时间
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Binlog文件ID
         * @type {number || null}
         */
        this.BinlogId = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.BinlogId = 'BinlogId' in params ? params.BinlogId : null;

    }
}

/**
 * ModifyAuditService请求参数结构体
 * @class
 */
class ModifyAuditServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 日志保留时长。
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * 高频日志保留时长。
         * @type {number || null}
         */
        this.HighLogExpireDay = null;

        /**
         * 修改实例审计规则为全审计。
         * @type {boolean || null}
         */
        this.AuditAll = null;

        /**
         * 规则审计。
         * @type {Array.<AuditRuleFilters> || null}
         */
        this.AuditRuleFilters = null;

        /**
         * 规则模版ID。
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.HighLogExpireDay = 'HighLogExpireDay' in params ? params.HighLogExpireDay : null;
        this.AuditAll = 'AuditAll' in params ? params.AuditAll : null;

        if (params.AuditRuleFilters) {
            this.AuditRuleFilters = new Array();
            for (let z in params.AuditRuleFilters) {
                let obj = new AuditRuleFilters();
                obj.deserialize(params.AuditRuleFilters[z]);
                this.AuditRuleFilters.push(obj);
            }
        }
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;

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
         * 端口，默认3306，取值范围[0, 65535)
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
         * 实例数量，数量范围为(0,16]
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
         * 包年包月购买是否自动续费，默认为0
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
         * 参数数组，暂时支持character_set_server （utf8｜latin1｜gbk｜utf8mb4） ，lower_case_table_names，1-大小写不敏感，0-大小写敏感
         * @type {Array.<ParamItem> || null}
         */
        this.ClusterParams = null;

        /**
         * 交易模式，0-下单且支付，1-下单
         * @type {number || null}
         */
        this.DealMode = null;

        /**
         * 参数模版ID，可以通过查询参数模板信息DescribeParamTemplates获得参数模板ID
         * @type {number || null}
         */
        this.ParamTemplateId = null;

        /**
         * 多可用区地址
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * 实例初始化配置信息，主要用于购买集群时选不同规格实例
         * @type {Array.<InstanceInitInfo> || null}
         */
        this.InstanceInitInfos = null;

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
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;

        if (params.InstanceInitInfos) {
            this.InstanceInitInfos = new Array();
            for (let z in params.InstanceInitInfos) {
                let obj = new InstanceInitInfo();
                obj.deserialize(params.InstanceInitInfos[z]);
                this.InstanceInitInfos.push(obj);
            }
        }

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

        /**
         * 操作符
         * @type {string || null}
         */
        this.Operator = null;

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
        this.Operator = 'Operator' in params ? params.Operator : null;

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
 * ModifyVipVport返回参数结构体
 * @class
 */
class ModifyVipVportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务id
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
 * DescribeParamTemplates返回参数结构体
 * @class
 */
class DescribeParamTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数模板信息
         * @type {Array.<ParamTemplateListInfo> || null}
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
                let obj = new ParamTemplateListInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseAuditService请求参数结构体
 * @class
 */
class CloseAuditServiceRequest extends  AbstractModel {
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
 * 参数模板信息
 * @class
 */
class ParamTemplateListInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数模板ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 参数模板名称
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 参数模板描述
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * 引擎版本
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 数据库类型，可选值：NORMAL，SERVERLESS
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * 参数模板详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TemplateParamInfo> || null}
         */
        this.ParamInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;

        if (params.ParamInfoSet) {
            this.ParamInfoSet = new Array();
            for (let z in params.ParamInfoSet) {
                let obj = new TemplateParamInfo();
                obj.deserialize(params.ParamInfoSet[z]);
                this.ParamInfoSet.push(obj);
            }
        }

    }
}

/**
 * 参数信息
 * @class
 */
class ParamInfo extends  AbstractModel {
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
        this.Default = null;

        /**
         * 参数为enum/string/bool时，可选值列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * 参数类型为float/integer时的最大值
         * @type {string || null}
         */
        this.Max = null;

        /**
         * 参数类型为float/integer时的最小值
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 是否需要重启生效
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * 参数类型：integer/float/string/enum/bool
         * @type {string || null}
         */
        this.ParamType = null;

        /**
         * 匹配类型，multiVal, regex在参数类型是string时使用
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * 匹配目标值，当multiVal时，各个key用;分割
         * @type {string || null}
         */
        this.MatchValue = null;

        /**
         * 参数描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 是否为全局参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsGlobal = null;

        /**
         * 参数是否可修改
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ModifiableInfo || null}
         */
        this.ModifiableInfo = null;

        /**
         * 是否为函数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsFunc = null;

        /**
         * 函数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Func = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.MatchValue = 'MatchValue' in params ? params.MatchValue : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;

        if (params.ModifiableInfo) {
            let obj = new ModifiableInfo();
            obj.deserialize(params.ModifiableInfo)
            this.ModifiableInfo = obj;
        }
        this.IsFunc = 'IsFunc' in params ? params.IsFunc : null;
        this.Func = 'Func' in params ? params.Func : null;

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

        /**
         * 限制量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 搜索关键字
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

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
 * DescribeBackupDownloadUrl请求参数结构体
 * @class
 */
class DescribeBackupDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 备份ID
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;

    }
}

/**
 * 可回档的时间范围
 * @class
 */
class RollbackTimeRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

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
 * OpenAuditService请求参数结构体
 * @class
 */
class OpenAuditServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 日志保留时长。
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * 高频日志保留时长。
         * @type {number || null}
         */
        this.HighLogExpireDay = null;

        /**
         * 审计规则。同RuleTemplateIds都不填是全审计。
         * @type {Array.<AuditRuleFilters> || null}
         */
        this.AuditRuleFilters = null;

        /**
         * 规则模版ID。同AuditRuleFilters都不填是全审计。
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.HighLogExpireDay = 'HighLogExpireDay' in params ? params.HighLogExpireDay : null;

        if (params.AuditRuleFilters) {
            this.AuditRuleFilters = new Array();
            for (let z in params.AuditRuleFilters) {
                let obj = new AuditRuleFilters();
                obj.deserialize(params.AuditRuleFilters[z]);
                this.AuditRuleFilters.push(obj);
            }
        }
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;

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

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 外网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WanIP = null;

        /**
         * 外网状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WanStatus = null;

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
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.WanIP = 'WanIP' in params ? params.WanIP : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;

    }
}

/**
 * 参数模板详情
 * @class
 */
class TemplateParamInfo extends  AbstractModel {
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
        this.Default = null;

        /**
         * 参数类型为enum时可选的值类型集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * 参数类型为float/integer时的最大值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Max = null;

        /**
         * 参数类型为float/integer时的最小值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 参数名称
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 是否需要重启
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * 参数描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 参数类型，integer/float/string/enum
         * @type {string || null}
         */
        this.ParamType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;

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
         * 计费订单ID（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 计费订单ID列表，可以一次查询若干条订单ID对应资源信息（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）
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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * CloseAuditService返回参数结构体
 * @class
 */
class CloseAuditServiceResponse extends  AbstractModel {
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
 * CreateBackup返回参数结构体
 * @class
 */
class CreateBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流ID
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
 * 审计规则模版的详情
 * @class
 */
class AuditRuleTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则模版ID。
         * @type {string || null}
         */
        this.RuleTemplateId = null;

        /**
         * 规则模版名称。
         * @type {string || null}
         */
        this.RuleTemplateName = null;

        /**
         * 规则模版的过滤条件
         * @type {Array.<RuleFilters> || null}
         */
        this.RuleFilters = null;

        /**
         * 规则模版描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则模版创建时间。
         * @type {string || null}
         */
        this.CreateAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleTemplateId = 'RuleTemplateId' in params ? params.RuleTemplateId : null;
        this.RuleTemplateName = 'RuleTemplateName' in params ? params.RuleTemplateName : null;

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new RuleFilters();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateAt = 'CreateAt' in params ? params.CreateAt : null;

    }
}

/**
 * DescribeInstanceSlowQueries返回参数结构体
 * @class
 */
class DescribeInstanceSlowQueriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 慢查询记录
         * @type {Array.<SlowQueriesItem> || null}
         */
        this.SlowQueries = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SlowQueries) {
            this.SlowQueries = new Array();
            for (let z in params.SlowQueries) {
                let obj = new SlowQueriesItem();
                obj.deserialize(params.SlowQueries[z]);
                this.SlowQueries.push(obj);
            }
        }
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
 * DescribeBackupDownloadUrl返回参数结构体
 * @class
 */
class DescribeBackupDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份下载地址
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
 * InquirePriceCreate请求参数结构体
 * @class
 */
class InquirePriceCreateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区,每个地域提供最佳实践
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 购买计算节点个数
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 实例购买类型，可选值为：PREPAID, POSTPAID, SERVERLESS
         * @type {string || null}
         */
        this.InstancePayMode = null;

        /**
         * 存储购买类型，可选值为：PREPAID, POSTPAID
         * @type {string || null}
         */
        this.StoragePayMode = null;

        /**
         * CPU核数，PREPAID与POSTPAID实例类型必传
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存大小，单位G，PREPAID与POSTPAID实例类型必传
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Ccu大小，serverless类型必传
         * @type {number || null}
         */
        this.Ccu = null;

        /**
         * 存储大小，PREPAID存储类型必传
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * 购买时长，PREPAID购买类型必传
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 时长单位，可选值为：m,d。PREPAID购买类型必传
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.InstancePayMode = 'InstancePayMode' in params ? params.InstancePayMode : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Ccu = 'Ccu' in params ? params.Ccu : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

    }
}

/**
 * CreateAuditRuleTemplate请求参数结构体
 * @class
 */
class CreateAuditRuleTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则。
         * @type {Array.<RuleFilters> || null}
         */
        this.RuleFilters = null;

        /**
         * 规则模版名称。
         * @type {string || null}
         */
        this.RuleTemplateName = null;

        /**
         * 规则模版描述。
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

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new RuleFilters();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.RuleTemplateName = 'RuleTemplateName' in params ? params.RuleTemplateName : null;
        this.Description = 'Description' in params ? params.Description : null;

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

        /**
         * 是否需要返回可用区信息
         * @type {boolean || null}
         */
        this.IncludeZoneStocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbType = 'DbType' in params ? params.DbType : null;
        this.IncludeZoneStocks = 'IncludeZoneStocks' in params ? params.IncludeZoneStocks : null;

    }
}

/**
 * ExportInstanceSlowQueries请求参数结构体
 * @class
 */
class ExportInstanceSlowQueriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 事务开始最早时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 事务开始最晚时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 限制条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 客户端host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 文件类型，可选值：csv, original
         * @type {string || null}
         */
        this.FileType = null;

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
        this.Username = 'Username' in params ? params.Username : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

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
         * 数据库表权限数组,当前仅支持参数：max_user_connections，max_user_connections不能大于10240
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 引擎类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 用户appid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 集群状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 集群创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 付费模式。0-按量计费，1-包年包月
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 截止时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 集群读写vip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 集群读写vport
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 项目id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * cynos内核版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * 存储容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * 续费标志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 正在处理的任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessingTask = null;

        /**
         * 集群的任务数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

        /**
         * 集群绑定的tag数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Db类型(NORMAL, SERVERLESS)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * 当Db类型为SERVERLESS时，serverless集群状态，可选值:
resume
pause
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerlessStatus = null;

        /**
         * 集群预付费存储值大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 集群存储为预付费时的存储ID，用于预付费存储变配
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageId = null;

        /**
         * 集群存储付费模式。0-按量计费，1-包年包月
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StoragePayMode = null;

        /**
         * 集群计算规格对应的最小存储值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinStorageSize = null;

        /**
         * 集群计算规格对应的最大存储值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxStorageSize = null;

        /**
         * 集群网络信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NetAddr> || null}
         */
        this.NetAddrs = null;

        /**
         * 物理可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhysicalZone = null;

        /**
         * 主可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * 是否有从可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HasSlaveZone = null;

        /**
         * 从可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SlaveZones = null;

        /**
         * 商业类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 是否冻结
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsFreeze = null;

        /**
         * 订单来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderSource = null;

        /**
         * 能力
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Ability || null}
         */
        this.Ability = null;

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
        this.PhysicalZone = 'PhysicalZone' in params ? params.PhysicalZone : null;
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;
        this.HasSlaveZone = 'HasSlaveZone' in params ? params.HasSlaveZone : null;
        this.SlaveZones = 'SlaveZones' in params ? params.SlaveZones : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.IsFreeze = 'IsFreeze' in params ? params.IsFreeze : null;
        this.OrderSource = 'OrderSource' in params ? params.OrderSource : null;

        if (params.Ability) {
            let obj = new Ability();
            obj.deserialize(params.Ability)
            this.Ability = obj;
        }

    }
}

/**
 * CreateAuditRuleTemplate返回参数结构体
 * @class
 */
class CreateAuditRuleTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的规则模版ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleTemplateId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleTemplateId = 'RuleTemplateId' in params ? params.RuleTemplateId : null;
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
         * 地域信息
         * @type {Array.<SaleRegion> || null}
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
                let obj = new SaleRegion();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 售卖可用区信息
 * @class
 */
class SaleZone extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区英文名
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
        this.ZoneZh = null;

        /**
         * 是否支持serverless集群<br>
0:不支持<br>
1:支持
         * @type {number || null}
         */
        this.IsSupportServerless = null;

        /**
         * 是否支持普通集群<br>
0:不支持<br>
1:支持
         * @type {number || null}
         */
        this.IsSupportNormal = null;

        /**
         * 物理区
         * @type {string || null}
         */
        this.PhysicalZone = null;

        /**
         * 用户是否有可用区权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HasPermission = null;

        /**
         * 是否为全链路RDMA可用区
         * @type {string || null}
         */
        this.IsWholeRdmaZone = null;

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
        this.ZoneZh = 'ZoneZh' in params ? params.ZoneZh : null;
        this.IsSupportServerless = 'IsSupportServerless' in params ? params.IsSupportServerless : null;
        this.IsSupportNormal = 'IsSupportNormal' in params ? params.IsSupportNormal : null;
        this.PhysicalZone = 'PhysicalZone' in params ? params.PhysicalZone : null;
        this.HasPermission = 'HasPermission' in params ? params.HasPermission : null;
        this.IsWholeRdmaZone = 'IsWholeRdmaZone' in params ? params.IsWholeRdmaZone : null;

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
 * OpenAuditService返回参数结构体
 * @class
 */
class OpenAuditServiceResponse extends  AbstractModel {
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
 * SwitchProxyVpc返回参数结构体
 * @class
 */
class SwitchProxyVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务id。
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
 * DescribeAuditRuleTemplates请求参数结构体
 * @class
 */
class DescribeAuditRuleTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则模版ID。
         * @type {Array.<string> || null}
         */
        this.RuleTemplateIds = null;

        /**
         * 规则模版名称
         * @type {Array.<string> || null}
         */
        this.RuleTemplateNames = null;

        /**
         * 单次请求返回的数量。默认值20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认值为 0。
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
        this.RuleTemplateIds = 'RuleTemplateIds' in params ? params.RuleTemplateIds : null;
        this.RuleTemplateNames = 'RuleTemplateNames' in params ? params.RuleTemplateNames : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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

        /**
         * 是否有库存
         * @type {boolean || null}
         */
        this.HasStock = null;

        /**
         * 机器类型
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 最大IOPS
         * @type {number || null}
         */
        this.MaxIops = null;

        /**
         * 最大IO带宽
         * @type {number || null}
         */
        this.MaxIoBandWidth = null;

        /**
         * 地域库存信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ZoneStockInfo> || null}
         */
        this.ZoneStockInfos = null;

        /**
         * 库存数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StockCount = null;

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
        this.HasStock = 'HasStock' in params ? params.HasStock : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MaxIops = 'MaxIops' in params ? params.MaxIops : null;
        this.MaxIoBandWidth = 'MaxIoBandWidth' in params ? params.MaxIoBandWidth : null;

        if (params.ZoneStockInfos) {
            this.ZoneStockInfos = new Array();
            for (let z in params.ZoneStockInfos) {
                let obj = new ZoneStockInfo();
                obj.deserialize(params.ZoneStockInfos[z]);
                this.ZoneStockInfos.push(obj);
            }
        }
        this.StockCount = 'StockCount' in params ? params.StockCount : null;

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
         * 任务流ID
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
 * 审计日志文件
 * @class
 */
class AuditLogFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计日志文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 审计日志文件创建时间。格式为 : "2019-03-20 17:09:13"。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 文件状态值。可能返回的值为：
"creating" - 生成中;
"failed" - 创建失败;
"success" - 已生成;
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 文件大小，单位为 KB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 审计日志下载地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

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

        /**
         * 用户最大连接数
         * @type {number || null}
         */
        this.MaxUserConnections = null;

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
        this.MaxUserConnections = 'MaxUserConnections' in params ? params.MaxUserConnections : null;

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
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 备份类型, 可选值：logic，逻辑备份；snapshot，物理备份
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * 备份的库, 只在 BackupType 为 logic 时有效
         * @type {Array.<string> || null}
         */
        this.BackupDatabases = null;

        /**
         * 备份的表, 只在 BackupType 为 logic 时有效
         * @type {Array.<DatabaseTables> || null}
         */
        this.BackupTables = null;

        /**
         * 备注名
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupDatabases = 'BackupDatabases' in params ? params.BackupDatabases : null;

        if (params.BackupTables) {
            this.BackupTables = new Array();
            for (let z in params.BackupTables) {
                let obj = new DatabaseTables();
                obj.deserialize(params.BackupTables[z]);
                this.BackupTables.push(obj);
            }
        }
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

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
         * 实例ID列表，用来记录具体操作哪些实例
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 排序字段，定义在回返结果的基于哪个字段进行排序
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 定义具体的排序规则，限定为desc,asc,DESC,ASC其中之一
         * @type {string || null}
         */
        this.OrderByType = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * SearchClusterTables返回参数结构体
 * @class
 */
class SearchClusterTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据表列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DatabaseTables> || null}
         */
        this.Tables = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new DatabaseTables();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 系统支持的模块
 * @class
 */
class Module extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否支持，可选值:yes,no
         * @type {string || null}
         */
        this.IsDisable = null;

        /**
         * 模块名
         * @type {string || null}
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDisable = 'IsDisable' in params ? params.IsDisable : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

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
 * SwitchProxyVpc请求参数结构体
 * @class
 */
class SwitchProxyVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 字符串vpc id
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 字符串子网id
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 旧地址回收时间
         * @type {number || null}
         */
        this.OldIpReserveHours = null;

        /**
         * 数据库代理组Id（该参数为必填项，可以通过DescribeProxies接口获得）
         * @type {string || null}
         */
        this.ProxyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.OldIpReserveHours = 'OldIpReserveHours' in params ? params.OldIpReserveHours : null;
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;

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
 * 售卖地域信息
 * @class
 */
class SaleRegion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域英文名
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
        this.RegionZh = null;

        /**
         * 可售卖可用区列表
         * @type {Array.<SaleZone> || null}
         */
        this.ZoneSet = null;

        /**
         * 引擎类型
         * @type {string || null}
         */
        this.DbType = null;

        /**
         * 地域模块支持情况
         * @type {Array.<Module> || null}
         */
        this.Modules = null;

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
        this.RegionZh = 'RegionZh' in params ? params.RegionZh : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new SaleZone();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.DbType = 'DbType' in params ? params.DbType : null;

        if (params.Modules) {
            this.Modules = new Array();
            for (let z in params.Modules) {
                let obj = new Module();
                obj.deserialize(params.Modules[z]);
                this.Modules.push(obj);
            }
        }

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
 * RestartInstance返回参数结构体
 * @class
 */
class RestartInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务id
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
 * DescribeBinlogSaveDays请求参数结构体
 * @class
 */
class DescribeBinlogSaveDaysRequest extends  AbstractModel {
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
         * 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800，最大为158112000
         * @type {number || null}
         */
        this.ReserveDuration = null;

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
         * 该参数目前不支持修改，无需填写。备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份
         * @type {Array.<string> || null}
         */
        this.BackupFreq = null;

        /**
         * 该参数目前不支持修改，无需填写。备份方式，logic-逻辑备份，snapshot-快照备份
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
        this.ReserveDuration = 'ReserveDuration' in params ? params.ReserveDuration : null;
        this.BackupTimeBeg = 'BackupTimeBeg' in params ? params.BackupTimeBeg : null;
        this.BackupTimeEnd = 'BackupTimeEnd' in params ? params.BackupTimeEnd : null;
        this.BackupFreq = 'BackupFreq' in params ? params.BackupFreq : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;

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
 * CreateAuditLogFile请求参数结构体
 * @class
 */
class CreateAuditLogFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，格式为："2017-07-12 10:29:20"。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，格式为："2017-07-12 10:29:20"。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段。支持值包括：
"timestamp" - 时间戳；
"affectRows" - 影响行数；
"execTime" - 执行时间。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 过滤条件。可按设置的过滤条件过滤日志。
         * @type {AuditLogFilter || null}
         */
        this.Filter = null;

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
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

        if (params.Filter) {
            let obj = new AuditLogFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DeleteAuditLogFile请求参数结构体
 * @class
 */
class DeleteAuditLogFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 审计日志文件名称。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

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
         * 新增只读实例数，取值范围为[0,4]
         * @type {number || null}
         */
        this.ReadOnlyCount = null;

        /**
         * 实例组ID，在已有RO组中新增实例时使用，不传则新增RO组。当前版本不建议传输该值。
         * @type {string || null}
         */
        this.InstanceGrpId = null;

        /**
         * 所属VPC网络ID，该参数已废弃
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 所属子网ID，如果设置了VpcId，则SubnetId必填。该参数已废弃。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 新增RO组时使用的Port，取值范围为[0,65535)
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 实例名称，字符串长度范围为[0,64)，取值范围为大小写字母，0-9数字，'_','-','.'
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

        /**
         * 参数模版ID
         * @type {number || null}
         */
        this.ParamTemplateId = null;

        /**
         * 参数列表，ParamTemplateId 传入时InstanceParams才有效
         * @type {Array.<ModifyParamItem> || null}
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
        this.ParamTemplateId = 'ParamTemplateId' in params ? params.ParamTemplateId : null;

        if (params.InstanceParams) {
            this.InstanceParams = new Array();
            for (let z in params.InstanceParams) {
                let obj = new ModifyParamItem();
                obj.deserialize(params.InstanceParams[z]);
                this.InstanceParams.push(obj);
            }
        }

    }
}

/**
 * InquirePriceCreate返回参数结构体
 * @class
 */
class InquirePriceCreateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例价格
         * @type {TradePrice || null}
         */
        this.InstancePrice = null;

        /**
         * 存储价格
         * @type {TradePrice || null}
         */
        this.StoragePrice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new TradePrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

        if (params.StoragePrice) {
            let obj = new TradePrice();
            obj.deserialize(params.StoragePrice)
            this.StoragePrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterSlaveZone请求参数结构体
 * @class
 */
class ModifyClusterSlaveZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 旧从可用区
         * @type {string || null}
         */
        this.OldSlaveZone = null;

        /**
         * 新从可用区
         * @type {string || null}
         */
        this.NewSlaveZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.OldSlaveZone = 'OldSlaveZone' in params ? params.OldSlaveZone : null;
        this.NewSlaveZone = 'NewSlaveZone' in params ? params.NewSlaveZone : null;

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

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

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
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.UpdateValue = 'UpdateValue' in params ? params.UpdateValue : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceSlowQueries请求参数结构体
 * @class
 */
class DescribeInstanceSlowQueriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 事务开始最早时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 事务开始最晚时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 限制条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 客户端host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 排序字段，可选值：QueryTime,LockTime,RowsExamined,RowsSent
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型，可选值：asc,desc
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

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
 * 审计规则的规则过滤条件
 * @class
 */
class RuleFilters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审计规则过滤条件的参数名称。可选值：host – 客户端 IP；user – 数据库账户；dbName – 数据库名称；sqlType-SQL类型；sql-sql语句。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 审计规则过滤条件的匹配类型。可选值：INC – 包含；EXC – 不包含；EQS – 等于；NEQ – 不等于。
         * @type {string || null}
         */
        this.Compare = null;

        /**
         * 审计规则过滤条件的匹配值。
         * @type {Array.<string> || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Compare = 'Compare' in params ? params.Compare : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ExportInstanceSlowQueries返回参数结构体
 * @class
 */
class ExportInstanceSlowQueriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询导出内容
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * binlog开关，可选值：ON, OFF
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogBin = null;

        /**
         * pitr类型，可选值：normal, redo_pitr
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PitrType = null;

        /**
         * 物理可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhysicalZone = null;

        /**
         * 存储Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageId = null;

        /**
         * 存储大小，单位为G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 最大存储规格，单位为G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxStorageSize = null;

        /**
         * 最小存储规格，单位为G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinStorageSize = null;

        /**
         * 存储付费类型，1为包年包月，0为按量计费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StoragePayMode = null;

        /**
         * 数据库类型，normal，serverless
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * 存储空间上限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * 集群支持的功能
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Ability || null}
         */
        this.Ability = null;

        /**
         * cynos版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CynosVersion = null;

        /**
         * 商业类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 是否有从可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HasSlaveZone = null;

        /**
         * 是否冻结
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsFreeze = null;

        /**
         * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ObjectTask> || null}
         */
        this.Tasks = null;

        /**
         * 主可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * 从可用区列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SlaveZones = null;

        /**
         * Proxy状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyStatus = null;

        /**
         * 是否跳过交易
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsSkipTrade = null;

        /**
         * 是否打开密码复杂度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsOpenPasswordComplexity = null;

        /**
         * 网络类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetworkStatus = null;

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
        this.LogBin = 'LogBin' in params ? params.LogBin : null;
        this.PitrType = 'PitrType' in params ? params.PitrType : null;
        this.PhysicalZone = 'PhysicalZone' in params ? params.PhysicalZone : null;
        this.StorageId = 'StorageId' in params ? params.StorageId : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.MaxStorageSize = 'MaxStorageSize' in params ? params.MaxStorageSize : null;
        this.MinStorageSize = 'MinStorageSize' in params ? params.MinStorageSize : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;

        if (params.Ability) {
            let obj = new Ability();
            obj.deserialize(params.Ability)
            this.Ability = obj;
        }
        this.CynosVersion = 'CynosVersion' in params ? params.CynosVersion : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.HasSlaveZone = 'HasSlaveZone' in params ? params.HasSlaveZone : null;
        this.IsFreeze = 'IsFreeze' in params ? params.IsFreeze : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ObjectTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;
        this.SlaveZones = 'SlaveZones' in params ? params.SlaveZones : null;
        this.ProxyStatus = 'ProxyStatus' in params ? params.ProxyStatus : null;
        this.IsSkipTrade = 'IsSkipTrade' in params ? params.IsSkipTrade : null;
        this.IsOpenPasswordComplexity = 'IsOpenPasswordComplexity' in params ? params.IsOpenPasswordComplexity : null;
        this.NetworkStatus = 'NetworkStatus' in params ? params.NetworkStatus : null;

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
         * 数据库账号名
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 数据库账号新密码
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 主机，不填默认为"%"
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
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * SearchClusterDatabases返回参数结构体
 * @class
 */
class SearchClusterDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Databases = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Databases = 'Databases' in params ? params.Databases : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyBackupName请求参数结构体
 * @class
 */
class ModifyBackupNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 备份文件ID
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * 备注名，长度不能超过60个字符
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

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
 * 规则审计的过滤条件
 * @class
 */
class AuditRuleFilters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单条审计规则。
         * @type {Array.<RuleFilters> || null}
         */
        this.RuleFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new RuleFilters();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }

    }
}

/**
 * DescribeBinlogSaveDays返回参数结构体
 * @class
 */
class DescribeBinlogSaveDaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Binlog保留天数
         * @type {number || null}
         */
        this.BinlogSaveDays = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BinlogSaveDays = 'BinlogSaveDays' in params ? params.BinlogSaveDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 要修改的参数列表。每一个元素是ParamName、CurrentValue和OldValue的组合。ParamName是参数名称，CurrentValue是当前值，OldValue是之前值且不做校验
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Account> || null}
         */
        this.AccountSet = null;

        /**
         * 账号总数量
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

        if (params.AccountSet) {
            this.AccountSet = new Array();
            for (let z in params.AccountSet) {
                let obj = new Account();
                obj.deserialize(params.AccountSet[z]);
                this.AccountSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * DeleteBackup请求参数结构体
 * @class
 */
class DeleteBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 备份文件ID，旧版本使用的字段，不推荐使用
         * @type {Array.<number> || null}
         */
        this.SnapshotIdList = null;

        /**
         * 备份文件ID，推荐使用
         * @type {Array.<number> || null}
         */
        this.BackupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SnapshotIdList = 'SnapshotIdList' in params ? params.SnapshotIdList : null;
        this.BackupIds = 'BackupIds' in params ? params.BackupIds : null;

    }
}

/**
 * 计费询价结果
 * @class
 */
class TradePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预付费模式下资源总价，不包含优惠，单位:分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalPrice = null;

        /**
         * 总的折扣，100表示100%不打折
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 预付费模式下的优惠后总价, 单位: 分,例如用户享有折扣 =TotalPrice × Discount
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalPriceDiscount = null;

        /**
         * 后付费模式下的单位资源价格，不包含优惠，单位:分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * 优惠后后付费模式下的单位资源价格, 单位: 分,例如用户享有折扣=UnitPricet × Discount
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * 计费价格单位
         * @type {string || null}
         */
        this.ChargeUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalPrice = 'TotalPrice' in params ? params.TotalPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.TotalPriceDiscount = 'TotalPriceDiscount' in params ? params.TotalPriceDiscount : null;
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;

    }
}

/**
 * DescribeClusterParams请求参数结构体
 * @class
 */
class DescribeClusterParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 参数名字
         * @type {string || null}
         */
        this.ParamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;

    }
}

/**
 * 审计日志详细信息
 * @class
 */
class AuditLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 影响行数。
         * @type {number || null}
         */
        this.AffectRows = null;

        /**
         * 错误码。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * SQL类型。
         * @type {string || null}
         */
        this.SqlType = null;

        /**
         * 表名称。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 审计策略名称。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 数据库名称。
         * @type {string || null}
         */
        this.DBName = null;

        /**
         * SQL语句。
         * @type {string || null}
         */
        this.Sql = null;

        /**
         * 客户端地址。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 用户名。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 执行时间。
         * @type {number || null}
         */
        this.ExecTime = null;

        /**
         * 时间戳。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 发送行数。
         * @type {number || null}
         */
        this.SentRows = null;

        /**
         * 执行线程ID。
         * @type {number || null}
         */
        this.ThreadId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AffectRows = 'AffectRows' in params ? params.AffectRows : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.SqlType = 'SqlType' in params ? params.SqlType : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.Sql = 'Sql' in params ? params.Sql : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.User = 'User' in params ? params.User : null;
        this.ExecTime = 'ExecTime' in params ? params.ExecTime : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.SentRows = 'SentRows' in params ? params.SentRows : null;
        this.ThreadId = 'ThreadId' in params ? params.ThreadId : null;

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
 * ModifyAuditService返回参数结构体
 * @class
 */
class ModifyAuditServiceResponse extends  AbstractModel {
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
         * 该参数已废用
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
 * DeleteAuditRuleTemplates返回参数结构体
 * @class
 */
class DeleteAuditRuleTemplatesResponse extends  AbstractModel {
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
 * DescribeAuditLogFiles请求参数结构体
 * @class
 */
class DescribeAuditLogFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页大小参数。默认值为 20，最小值为 1，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 审计日志文件名。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

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
 * DescribeBinlogs请求参数结构体
 * @class
 */
class DescribeBinlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制条数
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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

/**
 * 可用区库存信息
 * @class
 */
class ZoneStockInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 是否有库存
         * @type {boolean || null}
         */
        this.HasStock = null;

        /**
         * 库存数量
         * @type {number || null}
         */
        this.StockCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.HasStock = 'HasStock' in params ? params.HasStock : null;
        this.StockCount = 'StockCount' in params ? params.StockCount : null;

    }
}

/**
 * InquirePriceRenew返回参数结构体
 * @class
 */
class InquirePriceRenewResponse extends  AbstractModel {
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

        /**
         * 对应的询价结果数组
         * @type {Array.<TradePrice> || null}
         */
        this.Prices = null;

        /**
         * 续费计算节点的总价格
         * @type {number || null}
         */
        this.InstanceRealTotalPrice = null;

        /**
         * 续费存储节点的总价格
         * @type {number || null}
         */
        this.StorageRealTotalPrice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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

        if (params.Prices) {
            this.Prices = new Array();
            for (let z in params.Prices) {
                let obj = new TradePrice();
                obj.deserialize(params.Prices[z]);
                this.Prices.push(obj);
            }
        }
        this.InstanceRealTotalPrice = 'InstanceRealTotalPrice' in params ? params.InstanceRealTotalPrice : null;
        this.StorageRealTotalPrice = 'StorageRealTotalPrice' in params ? params.StorageRealTotalPrice : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAuditRuleTemplates返回参数结构体
 * @class
 */
class ModifyAuditRuleTemplatesResponse extends  AbstractModel {
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
    RemoveClusterSlaveZoneRequest: RemoveClusterSlaveZoneRequest,
    ModifyClusterNameRequest: ModifyClusterNameRequest,
    DescribeRollbackTimeRangeRequest: DescribeRollbackTimeRangeRequest,
    InquirePriceRenewRequest: InquirePriceRenewRequest,
    InstanceAuditRule: InstanceAuditRule,
    DescribeAuditLogsRequest: DescribeAuditLogsRequest,
    DescribeBackupConfigRequest: DescribeBackupConfigRequest,
    ModifyAuditRuleTemplatesRequest: ModifyAuditRuleTemplatesRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    ModifyMaintainPeriodConfigRequest: ModifyMaintainPeriodConfigRequest,
    DescribeRollbackTimeRangeResponse: DescribeRollbackTimeRangeResponse,
    BillingResourceInfo: BillingResourceInfo,
    ModifyBackupNameResponse: ModifyBackupNameResponse,
    ModifyClusterStorageRequest: ModifyClusterStorageRequest,
    RollBackClusterRequest: RollBackClusterRequest,
    DescribeAuditLogFilesResponse: DescribeAuditLogFilesResponse,
    SwitchClusterZoneResponse: SwitchClusterZoneResponse,
    ModifyParamItem: ModifyParamItem,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    DescribeBinlogDownloadUrlRequest: DescribeBinlogDownloadUrlRequest,
    CreateAccountsResponse: CreateAccountsResponse,
    ModifyInstanceNameRequest: ModifyInstanceNameRequest,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    DescribeMaintainPeriodRequest: DescribeMaintainPeriodRequest,
    AccountParam: AccountParam,
    DescribeBinlogsResponse: DescribeBinlogsResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeZonesRequest: DescribeZonesRequest,
    ClusterInstanceDetail: ClusterInstanceDetail,
    AddClusterSlaveZoneResponse: AddClusterSlaveZoneResponse,
    OldAddrInfo: OldAddrInfo,
    ModifyClusterNameResponse: ModifyClusterNameResponse,
    DescribeClusterParamsResponse: DescribeClusterParamsResponse,
    IsolateInstanceResponse: IsolateInstanceResponse,
    AuditLogFilter: AuditLogFilter,
    DescribeParamTemplatesRequest: DescribeParamTemplatesRequest,
    DescribeAuditLogsResponse: DescribeAuditLogsResponse,
    SearchClusterTablesRequest: SearchClusterTablesRequest,
    PauseServerlessRequest: PauseServerlessRequest,
    ModifiableInfo: ModifiableInfo,
    DescribeFlowResponse: DescribeFlowResponse,
    RevokeAccountPrivilegesResponse: RevokeAccountPrivilegesResponse,
    CreateClustersResponse: CreateClustersResponse,
    SetRenewFlagRequest: SetRenewFlagRequest,
    CynosdbInstanceGrp: CynosdbInstanceGrp,
    SlowQueriesItem: SlowQueriesItem,
    ActivateInstanceRequest: ActivateInstanceRequest,
    DatabaseTables: DatabaseTables,
    AddClusterSlaveZoneRequest: AddClusterSlaveZoneRequest,
    DescribeAccountAllGrantPrivilegesResponse: DescribeAccountAllGrantPrivilegesResponse,
    RollbackDatabase: RollbackDatabase,
    ModifyVipVportRequest: ModifyVipVportRequest,
    DatabasePrivileges: DatabasePrivileges,
    DescribeClustersRequest: DescribeClustersRequest,
    ModifyClusterStorageResponse: ModifyClusterStorageResponse,
    DescribeInstanceDetailResponse: DescribeInstanceDetailResponse,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DeleteAuditLogFileResponse: DeleteAuditLogFileResponse,
    DescribeClusterParamLogsResponse: DescribeClusterParamLogsResponse,
    DescribeClusterInstanceGrpsRequest: DescribeClusterInstanceGrpsRequest,
    DescribeResourcesByDealNameResponse: DescribeResourcesByDealNameResponse,
    ResumeServerlessResponse: ResumeServerlessResponse,
    CreateAccountsRequest: CreateAccountsRequest,
    DeleteAuditRuleTemplatesRequest: DeleteAuditRuleTemplatesRequest,
    DescribeAuditRuleTemplatesResponse: DescribeAuditRuleTemplatesResponse,
    SwitchClusterZoneRequest: SwitchClusterZoneRequest,
    RestartInstanceRequest: RestartInstanceRequest,
    Ability: Ability,
    InstanceInitInfo: InstanceInitInfo,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    RollbackTable: RollbackTable,
    IsolateInstanceRequest: IsolateInstanceRequest,
    SwitchClusterVpcResponse: SwitchClusterVpcResponse,
    DescribeClusterDetailRequest: DescribeClusterDetailRequest,
    DeleteBackupResponse: DeleteBackupResponse,
    Tag: Tag,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    RemoveClusterSlaveZoneResponse: RemoveClusterSlaveZoneResponse,
    CreateAuditLogFileResponse: CreateAuditLogFileResponse,
    PauseServerlessResponse: PauseServerlessResponse,
    OfflineClusterRequest: OfflineClusterRequest,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    NewAccount: NewAccount,
    BackupFileInfo: BackupFileInfo,
    TablePrivileges: TablePrivileges,
    DescribeBinlogDownloadUrlResponse: DescribeBinlogDownloadUrlResponse,
    DescribeAuditRuleWithInstanceIdsResponse: DescribeAuditRuleWithInstanceIdsResponse,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    DescribeBackupListRequest: DescribeBackupListRequest,
    SearchClusterDatabasesRequest: SearchClusterDatabasesRequest,
    SwitchClusterVpcRequest: SwitchClusterVpcRequest,
    CynosdbInstance: CynosdbInstance,
    DescribeAuditRuleWithInstanceIdsRequest: DescribeAuditRuleWithInstanceIdsRequest,
    DbTable: DbTable,
    ModifyClusterSlaveZoneResponse: ModifyClusterSlaveZoneResponse,
    GrantAccountPrivilegesRequest: GrantAccountPrivilegesRequest,
    BinlogItem: BinlogItem,
    ModifyAuditServiceRequest: ModifyAuditServiceRequest,
    CreateClustersRequest: CreateClustersRequest,
    RollbackTableInfo: RollbackTableInfo,
    DescribeClustersResponse: DescribeClustersResponse,
    QueryFilter: QueryFilter,
    DescribeBackupConfigResponse: DescribeBackupConfigResponse,
    ModifyVipVportResponse: ModifyVipVportResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeParamTemplatesResponse: DescribeParamTemplatesResponse,
    CloseAuditServiceRequest: CloseAuditServiceRequest,
    AddInstancesResponse: AddInstancesResponse,
    Addr: Addr,
    ParamTemplateListInfo: ParamTemplateListInfo,
    ParamInfo: ParamInfo,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    ModifyClusterParamResponse: ModifyClusterParamResponse,
    SecurityGroup: SecurityGroup,
    DescribeBackupDownloadUrlRequest: DescribeBackupDownloadUrlRequest,
    RollbackTimeRange: RollbackTimeRange,
    OfflineInstanceRequest: OfflineInstanceRequest,
    OpenAuditServiceRequest: OpenAuditServiceRequest,
    PolicyRule: PolicyRule,
    NetAddr: NetAddr,
    TemplateParamInfo: TemplateParamInfo,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    DescribeResourcesByDealNameRequest: DescribeResourcesByDealNameRequest,
    CloseAuditServiceResponse: CloseAuditServiceResponse,
    CreateBackupResponse: CreateBackupResponse,
    DescribeRollbackTimeValidityResponse: DescribeRollbackTimeValidityResponse,
    AuditRuleTemplateInfo: AuditRuleTemplateInfo,
    DescribeInstanceSlowQueriesResponse: DescribeInstanceSlowQueriesResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DescribeBackupDownloadUrlResponse: DescribeBackupDownloadUrlResponse,
    ResumeServerlessRequest: ResumeServerlessRequest,
    InquirePriceCreateRequest: InquirePriceCreateRequest,
    CreateAuditRuleTemplateRequest: CreateAuditRuleTemplateRequest,
    ModifyBackupConfigResponse: ModifyBackupConfigResponse,
    DescribeInstanceSpecsRequest: DescribeInstanceSpecsRequest,
    ExportInstanceSlowQueriesRequest: ExportInstanceSlowQueriesRequest,
    ParamItem: ParamItem,
    ModifyAccountParamsRequest: ModifyAccountParamsRequest,
    CynosdbCluster: CynosdbCluster,
    CreateAuditRuleTemplateResponse: CreateAuditRuleTemplateResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    IsolateClusterResponse: IsolateClusterResponse,
    SaleZone: SaleZone,
    ObjectTask: ObjectTask,
    OpenAuditServiceResponse: OpenAuditServiceResponse,
    OfflineClusterResponse: OfflineClusterResponse,
    SwitchProxyVpcResponse: SwitchProxyVpcResponse,
    RevokeAccountPrivilegesRequest: RevokeAccountPrivilegesRequest,
    DescribeAuditRuleTemplatesRequest: DescribeAuditRuleTemplatesRequest,
    InstanceSpec: InstanceSpec,
    DescribeFlowRequest: DescribeFlowRequest,
    AuditLogFile: AuditLogFile,
    SetRenewFlagResponse: SetRenewFlagResponse,
    Account: Account,
    CreateBackupRequest: CreateBackupRequest,
    DescribeClusterParamLogsRequest: DescribeClusterParamLogsRequest,
    SearchClusterTablesResponse: SearchClusterTablesResponse,
    Module: Module,
    DescribeMaintainPeriodResponse: DescribeMaintainPeriodResponse,
    SwitchProxyVpcRequest: SwitchProxyVpcRequest,
    DescribeBackupListResponse: DescribeBackupListResponse,
    SaleRegion: SaleRegion,
    RollBackClusterResponse: RollBackClusterResponse,
    RestartInstanceResponse: RestartInstanceResponse,
    DescribeBinlogSaveDaysRequest: DescribeBinlogSaveDaysRequest,
    ModifyBackupConfigRequest: ModifyBackupConfigRequest,
    ActivateInstanceResponse: ActivateInstanceResponse,
    DescribeRollbackTimeValidityRequest: DescribeRollbackTimeValidityRequest,
    CreateAuditLogFileRequest: CreateAuditLogFileRequest,
    DeleteAuditLogFileRequest: DeleteAuditLogFileRequest,
    AddInstancesRequest: AddInstancesRequest,
    InquirePriceCreateResponse: InquirePriceCreateResponse,
    ModifyClusterSlaveZoneRequest: ModifyClusterSlaveZoneRequest,
    GrantAccountPrivilegesResponse: GrantAccountPrivilegesResponse,
    ClusterParamModifyLog: ClusterParamModifyLog,
    DescribeInstanceSlowQueriesRequest: DescribeInstanceSlowQueriesRequest,
    CynosdbInstanceDetail: CynosdbInstanceDetail,
    RuleFilters: RuleFilters,
    ExportInstanceSlowQueriesResponse: ExportInstanceSlowQueriesResponse,
    CynosdbClusterDetail: CynosdbClusterDetail,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    SearchClusterDatabasesResponse: SearchClusterDatabasesResponse,
    DescribeInstanceDetailRequest: DescribeInstanceDetailRequest,
    ModifyMaintainPeriodConfigResponse: ModifyMaintainPeriodConfigResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    ModifyBackupNameRequest: ModifyBackupNameRequest,
    ModifyInstanceNameResponse: ModifyInstanceNameResponse,
    AuditRuleFilters: AuditRuleFilters,
    DescribeBinlogSaveDaysResponse: DescribeBinlogSaveDaysResponse,
    ModifyClusterParamRequest: ModifyClusterParamRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    ModifyAccountParamsResponse: ModifyAccountParamsResponse,
    DeleteBackupRequest: DeleteBackupRequest,
    TradePrice: TradePrice,
    DescribeClusterParamsRequest: DescribeClusterParamsRequest,
    AuditLog: AuditLog,
    DescribeInstanceSpecsResponse: DescribeInstanceSpecsResponse,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    DescribeAccountAllGrantPrivilegesRequest: DescribeAccountAllGrantPrivilegesRequest,
    OfflineInstanceResponse: OfflineInstanceResponse,
    ModifyAuditServiceResponse: ModifyAuditServiceResponse,
    IsolateClusterRequest: IsolateClusterRequest,
    DeleteAuditRuleTemplatesResponse: DeleteAuditRuleTemplatesResponse,
    DescribeAuditLogFilesRequest: DescribeAuditLogFilesRequest,
    DescribeClusterDetailResponse: DescribeClusterDetailResponse,
    DescribeClusterInstanceGrpsResponse: DescribeClusterInstanceGrpsResponse,
    DescribeBinlogsRequest: DescribeBinlogsRequest,
    InputAccount: InputAccount,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    ZoneStockInfo: ZoneStockInfo,
    InquirePriceRenewResponse: InquirePriceRenewResponse,
    ModifyAuditRuleTemplatesResponse: ModifyAuditRuleTemplatesResponse,

}
