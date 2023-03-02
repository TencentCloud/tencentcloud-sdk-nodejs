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
 * CreateRuleTemplate返回参数结构体
 * @class
 */
class CreateRuleTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务告警信息
 * @class
 */
class AlarmInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关联任务id
         * @type {string || null}
         */
        this.TaskIds = null;

        /**
         * 告警类别；failure表示失败告警；overtime表示超时告警
         * @type {string || null}
         */
        this.AlarmType = null;

        /**
         * 告警方式；SMS表示短信；Email表示邮件；HTTP 表示接口方式；Wechat表示微信方式
         * @type {string || null}
         */
        this.AlarmWay = null;

        /**
         * 告警接收人，多个告警接收人以;分割
         * @type {string || null}
         */
        this.AlarmRecipient = null;

        /**
         * 告警接收人id，多个告警接收人id以;分割
         * @type {string || null}
         */
        this.AlarmRecipientId = null;

        /**
         * 预计运行的小时，取值范围0-23
         * @type {number || null}
         */
        this.Hours = null;

        /**
         * 预计运行分钟，取值范围0-59
         * @type {number || null}
         */
        this.Minutes = null;

        /**
         * 告警出发时机；1表示第一次运行失败；2表示所有重试完成后失败；
         * @type {number || null}
         */
        this.TriggerType = null;

        /**
         * 告警信息id
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * 告警状态设置；1表示可用；0表示不可用，默认可用
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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmWay = 'AlarmWay' in params ? params.AlarmWay : null;
        this.AlarmRecipient = 'AlarmRecipient' in params ? params.AlarmRecipient : null;
        this.AlarmRecipientId = 'AlarmRecipientId' in params ? params.AlarmRecipientId : null;
        this.Hours = 'Hours' in params ? params.Hours : null;
        this.Minutes = 'Minutes' in params ? params.Minutes : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * TaskLog返回参数结构体
 * @class
 */
class TaskLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 详细日志
         * @type {Array.<LogContent> || null}
         */
        this.LogContentList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LogContentList) {
            this.LogContentList = new Array();
            for (let z in params.LogContentList) {
                let obj = new LogContent();
                obj.deserialize(params.LogContentList[z]);
                this.LogContentList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则操作记录业务
 * @class
 */
class RuleHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 变更时间 yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlterTime = null;

        /**
         * 变更内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlterContent = null;

        /**
         * 操作账号UId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OperatorUserId = null;

        /**
         * 操作人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatorName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AlterTime = 'AlterTime' in params ? params.AlterTime : null;
        this.AlterContent = 'AlterContent' in params ? params.AlterContent : null;
        this.OperatorUserId = 'OperatorUserId' in params ? params.OperatorUserId : null;
        this.OperatorName = 'OperatorName' in params ? params.OperatorName : null;

    }
}

/**
 * DescribeIntegrationStatistics返回参数结构体
 * @class
 */
class DescribeIntegrationStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalTask = null;

        /**
         * 生产态任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProdTask = null;

        /**
         * 开发态任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DevTask = null;

        /**
         * 总读取条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalReadRecords = null;

        /**
         * 总写入条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalWriteRecords = null;

        /**
         * 总脏数据条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalErrorRecords = null;

        /**
         * 总告警事件数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalAlarmEvent = null;

        /**
         * 当天读取增长条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IncreaseReadRecords = null;

        /**
         * 当天写入增长条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IncreaseWriteRecords = null;

        /**
         * 当天脏数据增长条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IncreaseErrorRecords = null;

        /**
         * 当天告警事件增长数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IncreaseAlarmEvent = null;

        /**
         * 告警事件统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmEvent = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTask = 'TotalTask' in params ? params.TotalTask : null;
        this.ProdTask = 'ProdTask' in params ? params.ProdTask : null;
        this.DevTask = 'DevTask' in params ? params.DevTask : null;
        this.TotalReadRecords = 'TotalReadRecords' in params ? params.TotalReadRecords : null;
        this.TotalWriteRecords = 'TotalWriteRecords' in params ? params.TotalWriteRecords : null;
        this.TotalErrorRecords = 'TotalErrorRecords' in params ? params.TotalErrorRecords : null;
        this.TotalAlarmEvent = 'TotalAlarmEvent' in params ? params.TotalAlarmEvent : null;
        this.IncreaseReadRecords = 'IncreaseReadRecords' in params ? params.IncreaseReadRecords : null;
        this.IncreaseWriteRecords = 'IncreaseWriteRecords' in params ? params.IncreaseWriteRecords : null;
        this.IncreaseErrorRecords = 'IncreaseErrorRecords' in params ? params.IncreaseErrorRecords : null;
        this.IncreaseAlarmEvent = 'IncreaseAlarmEvent' in params ? params.IncreaseAlarmEvent : null;
        this.AlarmEvent = 'AlarmEvent' in params ? params.AlarmEvent : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnlockIntegrationTask返回参数结构体
 * @class
 */
class UnlockIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功与否标识
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamTaskLogList请求参数结构体
 * @class
 */
class DescribeStreamTaskLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * container名字
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序类型 desc asc
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * 作业运行的实例ID
         * @type {number || null}
         */
        this.RunningOrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.RunningOrderId = 'RunningOrderId' in params ? params.RunningOrderId : null;

    }
}

/**
 * DescribeIntegrationNode返回参数结构体
 * @class
 */
class DescribeIntegrationNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntegrationNodeInfo || null}
         */
        this.NodeInfo = null;

        /**
         * 上游节点是否已经修改。true 已修改，需要提示；false 没有修改
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SourceCheckFlag = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeInfo) {
            let obj = new IntegrationNodeInfo();
            obj.deserialize(params.NodeInfo)
            this.NodeInfo = obj;
        }
        this.SourceCheckFlag = 'SourceCheckFlag' in params ? params.SourceCheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MakeUpTasksNew返回参数结构体
 * @class
 */
class MakeUpTasksNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回批量操作成功个数、失败个数、操作总数
         * @type {BatchOperateResult || null}
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
            let obj = new BatchOperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 日志内容实体
 * @class
 */
class LogContentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Log = null;

        /**
         * 日志组Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 日志Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgLogId = null;

        /**
         * 时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 日志所属的容器名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Log = 'Log' in params ? params.Log : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;

    }
}

/**
 * DescribeRuleDimStat返回参数结构体
 * @class
 */
class DescribeRuleDimStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {RuleDimStat || null}
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
            let obj = new RuleDimStat();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogs请求参数结构体
 * @class
 */
class DescribeInstanceLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 数据时间
         * @type {string || null}
         */
        this.CurRunDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;

    }
}

/**
 * DescribeTaskAlarmRegulations返回参数结构体
 * @class
 */
class DescribeTaskAlarmRegulationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务告警规则信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskAlarmInfo> || null}
         */
        this.TaskAlarmInfos = null;

        /**
         * 总记录数
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

        if (params.TaskAlarmInfos) {
            this.TaskAlarmInfos = new Array();
            for (let z in params.TaskAlarmInfos) {
                let obj = new TaskAlarmInfo();
                obj.deserialize(params.TaskAlarmInfos[z]);
                this.TaskAlarmInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckIntegrationTaskNameExists返回参数结构体
 * @class
 */
class CheckIntegrationTaskNameExistsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true表示存在，false表示不存在
         * @type {boolean || null}
         */
        this.Data = null;

        /**
         * 任务名重复类型（0:未重复, 1:开发态重复, 2:生产态重复）
         * @type {number || null}
         */
        this.ExistsType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.ExistsType = 'ExistsType' in params ? params.ExistsType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDataSource请求参数结构体
 * @class
 */
class CreateDataSourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源名称，在相同SpaceName下，数据源名称不能为空
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据源类别：绑定引擎、绑定数据库
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 数据源类型:枚举值
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 归属项目ID
         * @type {string || null}
         */
        this.OwnerProjectId = null;

        /**
         * 归属项目Name
         * @type {string || null}
         */
        this.OwnerProjectName = null;

        /**
         * 归属项目Name中文
         * @type {string || null}
         */
        this.OwnerProjectIdent = null;

        /**
         * 业务侧数据源的配置信息扩展
         * @type {string || null}
         */
        this.BizParams = null;

        /**
         * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
         * @type {string || null}
         */
        this.Params = null;

        /**
         * 数据源描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据源展示名，为了可视化查看
         * @type {string || null}
         */
        this.Display = null;

        /**
         * 若数据源列表为绑定数据库，则为db名称
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据源引擎的实例ID，如CDB实例ID
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 数据源数据源的可见性，1为可见、0为不可见。默认为1
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 数据源所属的业务空间名称
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否采集
         * @type {string || null}
         */
        this.Collect = null;

        /**
         * cos桶信息
         * @type {string || null}
         */
        this.COSBucket = null;

        /**
         * cos region
         * @type {string || null}
         */
        this.COSRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OwnerProjectId = 'OwnerProjectId' in params ? params.OwnerProjectId : null;
        this.OwnerProjectName = 'OwnerProjectName' in params ? params.OwnerProjectName : null;
        this.OwnerProjectIdent = 'OwnerProjectIdent' in params ? params.OwnerProjectIdent : null;
        this.BizParams = 'BizParams' in params ? params.BizParams : null;
        this.Params = 'Params' in params ? params.Params : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Display = 'Display' in params ? params.Display : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Collect = 'Collect' in params ? params.Collect : null;
        this.COSBucket = 'COSBucket' in params ? params.COSBucket : null;
        this.COSRegion = 'COSRegion' in params ? params.COSRegion : null;

    }
}

/**
 * 集成节点schema映射
 * @class
 */
class IntegrationNodeSchemaMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源schema id
         * @type {string || null}
         */
        this.SourceSchemaId = null;

        /**
         * 目标schema id
         * @type {string || null}
         */
        this.SinkSchemaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceSchemaId = 'SourceSchemaId' in params ? params.SourceSchemaId : null;
        this.SinkSchemaId = 'SinkSchemaId' in params ? params.SinkSchemaId : null;

    }
}

/**
 * DescribeTrendStat返回参数结构体
 * @class
 */
class DescribeTrendStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {Array.<RuleExecDateStat> || null}
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
                let obj = new RuleExecDateStat();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealTimeTaskSpeed请求参数结构体
 * @class
 */
class DescribeRealTimeTaskSpeedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 带毫秒的时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 带毫秒的时间戳
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 粒度，1或者5
         * @type {number || null}
         */
        this.Granularity = null;

        /**
         * 无
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeRuleDimStat请求参数结构体
 * @class
 */
class DescribeRuleDimStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 开始时间，时间戳到秒
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 结束时间，时间戳到秒
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * FreezeTasks请求参数结构体
 * @class
 */
class FreezeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务列表
         * @type {Array.<SimpleTaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * 任务操作是否消息通知下游任务责任人
         * @type {boolean || null}
         */
        this.OperateIsInform = null;

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
                let obj = new SimpleTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.OperateIsInform = 'OperateIsInform' in params ? params.OperateIsInform : null;

    }
}

/**
 * DescribeDataObjects返回参数结构体
 * @class
 */
class DescribeDataObjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据对象列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SourceObject> || null}
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
                let obj = new SourceObject();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleTemplates返回参数结构体
 * @class
 */
class DescribeRuleTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则模版列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleTemplate> || null}
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
                let obj = new RuleTemplate();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MakeUpWorkflowNew返回参数结构体
 * @class
 */
class MakeUpWorkflowNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回补录成功或失败的任务数
         * @type {BatchOperateResult || null}
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
            let obj = new BatchOperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateIntegrationNode返回参数结构体
 * @class
 */
class CreateIntegrationNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 当前任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务属性
 * @class
 */
class TaskInnerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 工作流id
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
         * @type {number || null}
         */
        this.CycleType = null;

        /**
         * 虚拟任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirtualTaskId = null;

        /**
         * 虚拟任务标记
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.VirtualFlag = null;

        /**
         * 真实任务工作流id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealWorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.CycleType = 'CycleType' in params ? params.CycleType : null;
        this.VirtualTaskId = 'VirtualTaskId' in params ? params.VirtualTaskId : null;
        this.VirtualFlag = 'VirtualFlag' in params ? params.VirtualFlag : null;
        this.RealWorkflowId = 'RealWorkflowId' in params ? params.RealWorkflowId : null;

    }
}

/**
 * 数据质量数据对象
 * @class
 */
class SourceObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源字段详细类型，int、string
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceObjectDataTypeName = null;

        /**
         * 源字段名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceObjectValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceObjectDataTypeName = 'SourceObjectDataTypeName' in params ? params.SourceObjectDataTypeName : null;
        this.SourceObjectValue = 'SourceObjectValue' in params ? params.SourceObjectValue : null;

    }
}

/**
 * DescribeRules返回参数结构体
 * @class
 */
class DescribeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Rule> || null}
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
                let obj = new Rule();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实时任务同步速度 条/s
 * @class
 */
class RecordsSpeed extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 速度值列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SpeedValue> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new SpeedValue();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }

    }
}

/**
 * CreateWorkflow请求参数结构体
 * @class
 */
class CreateWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 工作流名称
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 所属文件夹id
         * @type {string || null}
         */
        this.FolderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;

    }
}

/**
 * SubmitTask请求参数结构体
 * @class
 */
class SubmitTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 版本备注
         * @type {string || null}
         */
        this.VersionRemark = null;

        /**
         * 是否启动调度
         * @type {boolean || null}
         */
        this.StartScheduling = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.VersionRemark = 'VersionRemark' in params ? params.VersionRemark : null;
        this.StartScheduling = 'StartScheduling' in params ? params.StartScheduling : null;

    }
}

/**
 * 规则执行结果详情
 * @class
 */
class RuleExecResultDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DatasourceId = null;

        /**
         * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceName = null;

        /**
         * 数据库guid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 表guid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 规则执行记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleExecResult || null}
         */
        this.RuleExecResult = null;

        /**
         * 表负责人userId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TableOwnerUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.DatasourceName = 'DatasourceName' in params ? params.DatasourceName : null;
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;

        if (params.RuleExecResult) {
            let obj = new RuleExecResult();
            obj.deserialize(params.RuleExecResult)
            this.RuleExecResult = obj;
        }
        this.TableOwnerUserId = 'TableOwnerUserId' in params ? params.TableOwnerUserId : null;

    }
}

/**
 * 查询数据源分页列表
 * @class
 */
class DataSourceInfoPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页页码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataSourceInfo> || null}
         */
        this.Rows = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总分页页码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalPageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new DataSourceInfo();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalPageNumber = 'TotalPageNumber' in params ? params.TotalPageNumber : null;

    }
}

/**
 * DescribeRuleGroupExecResultsByPage请求参数结构体
 * @class
 */
class DescribeRuleGroupExecResultsByPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 标签类型
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 类型名称。
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Value = 'Value' in params ? params.Value : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 任务扩展信息
 * @class
 */
class TaskExtInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 值
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
 * BatchResumeIntegrationTasks返回参数结构体
 * @class
 */
class BatchResumeIntegrationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleExecResultsByPage返回参数结构体
 * @class
 */
class DescribeRuleExecResultsByPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * results
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleExecResultPage || null}
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
            let obj = new RuleExecResultPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则组执行结果
 * @class
 */
class RuleGroupExecResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组执行ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleGroupExecId = null;

        /**
         * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 执行触发类型（1：手动触发， 2：调度事中触发，3：周期调度触发）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TriggerType = null;

        /**
         * 执行时间 yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecTime = null;

        /**
         * 执行状态（1.已提交 2.检测中 3.正常 4.异常）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 异常规则数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AlarmRuleCount = null;

        /**
         * 总规则数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalRuleCount = null;

        /**
         * 源表负责人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableOwnerName = null;

        /**
         * 源表名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 数据库id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 有无权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Permission = null;

        /**
         * 执行详情，调度计划或者关联生产任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleGroupExecId = 'RuleGroupExecId' in params ? params.RuleGroupExecId : null;
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.ExecTime = 'ExecTime' in params ? params.ExecTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AlarmRuleCount = 'AlarmRuleCount' in params ? params.AlarmRuleCount : null;
        this.TotalRuleCount = 'TotalRuleCount' in params ? params.TotalRuleCount : null;
        this.TableOwnerName = 'TableOwnerName' in params ? params.TableOwnerName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.ExecDetail = 'ExecDetail' in params ? params.ExecDetail : null;

    }
}

/**
 * 告警事件详情
 * @class
 */
class AlarmEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警ID
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * 告警时间
         * @type {string || null}
         */
        this.AlarmTime = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RegularName = null;

        /**
         * 告警级别,0表示普通，1表示重要，2表示紧急
         * @type {number || null}
         */
        this.AlarmLevel = null;

        /**
         * 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停
         * @type {number || null}
         */
        this.AlarmIndicator = null;

        /**
         * 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http）
         * @type {number || null}
         */
        this.AlarmWay = null;

        /**
         * 告警接收人Id，多个用逗号隔开
         * @type {string || null}
         */
        this.AlarmRecipientId = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 告警指标描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmIndicatorDesc = null;

        /**
         * 指标阈值，1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TriggerType = null;

        /**
         * 预计的超时时间，分钟级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EstimatedTime = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 0：部分成功，1：全部成功，2：全部失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsSendSuccess = null;

        /**
         * 消息ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * 阈值计算算子，1 : 大于 2 ：小于
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.AlarmTime = 'AlarmTime' in params ? params.AlarmTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RegularName = 'RegularName' in params ? params.RegularName : null;
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;
        this.AlarmIndicator = 'AlarmIndicator' in params ? params.AlarmIndicator : null;
        this.AlarmWay = 'AlarmWay' in params ? params.AlarmWay : null;
        this.AlarmRecipientId = 'AlarmRecipientId' in params ? params.AlarmRecipientId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AlarmIndicatorDesc = 'AlarmIndicatorDesc' in params ? params.AlarmIndicatorDesc : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.EstimatedTime = 'EstimatedTime' in params ? params.EstimatedTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.IsSendSuccess = 'IsSendSuccess' in params ? params.IsSendSuccess : null;
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 实时任务同步速度 字节/s
 * @class
 */
class BytesSpeed extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 速度值列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SpeedValue> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new SpeedValue();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }

    }
}

/**
 * CheckTaskNameExist请求参数结构体
 * @class
 */
class CheckTaskNameExistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id/工作空间id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务类型（跟调度传参保持一致27）
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.TaskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

    }
}

/**
 * 数据质量阈值
 * @class
 */
class ThresholdValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阈值类型  1.低阈值  2.高阈值   3.普通阈值  4.枚举值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ValueType = null;

        /**
         * 阈值
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeFunctionKinds请求参数结构体
 * @class
 */
class DescribeFunctionKindsRequest extends  AbstractModel {
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
 * DescribeFunctionKinds返回参数结构体
 * @class
 */
class DescribeFunctionKindsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FunctionTypeOrKind> || null}
         */
        this.Kinds = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Kinds) {
            this.Kinds = new Array();
            for (let z in params.Kinds) {
                let obj = new FunctionTypeOrKind();
                obj.deserialize(params.Kinds[z]);
                this.Kinds.push(obj);
            }
        }
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTemplateDimCount请求参数结构体
 * @class
 */
class DescribeTemplateDimCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模版类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyIntegrationTask返回参数结构体
 * @class
 */
class ModifyIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
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
 * DescribeDataSourceList请求参数结构体
 * @class
 */
class DescribeDataSourceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页码
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 返回数量
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 排序配置
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 可选过滤条件，Filter可选配置(参考): "Name": { "type": "string", "description": "数据源名称" }, "Type": { "type": "string", "description": "类型" }, "ClusterId": { "type": "string", "description": "集群id" }, "CategoryId": { "type": "string", "description": "分类，项目或空间id" }
         * @type {Array.<Filter> || null}
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeIntegrationStatisticsRecordsTrend请求参数结构体
 * @class
 */
class DescribeIntegrationStatisticsRecordsTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型（实时：201，离线：202）
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 查询日期
         * @type {string || null}
         */
        this.QueryDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.QueryDate = 'QueryDate' in params ? params.QueryDate : null;

    }
}

/**
 * DescribeInLongTkeClusterList返回参数结构体
 * @class
 */
class DescribeInLongTkeClusterListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TKE集群信息
         * @type {Array.<InLongTkeDetail> || null}
         */
        this.Items = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 每页记录数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总页数
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InLongTkeDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KillInstances请求参数结构体
 * @class
 */
class KillInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 实例嵌套集合
         * @type {Array.<InstanceInfo> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * DescribeDataCheckStat请求参数结构体
 * @class
 */
class DescribeDataCheckStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 开始时间，时间戳到秒
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 结束时间，时间戳到秒
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * RegisterEventListener返回参数结构体
 * @class
 */
class RegisterEventListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BatchReturn || null}
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
            let obj = new BatchReturn();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartInLongAgent返回参数结构体
 * @class
 */
class RestartInLongAgentResponse extends  AbstractModel {
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
 * 工作流信息
 * @class
 */
class Workflow extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流id
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 责任人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 责任人Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerId = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目标识
         * @type {string || null}
         */
        this.ProjectIdent = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkflowDesc = null;

        /**
         * 工作流名称
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 所属文件夹id
         * @type {string || null}
         */
        this.FolderId = null;

        /**
         * 工作流所属用户分组id 若有多个,分号隔开: a;b;c
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 工作流所属用户分组名称  若有多个,分号隔开: a;b;c
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.OwnerId = 'OwnerId' in params ? params.OwnerId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectIdent = 'ProjectIdent' in params ? params.ProjectIdent : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.WorkflowDesc = 'WorkflowDesc' in params ? params.WorkflowDesc : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.UserGroupName = 'UserGroupName' in params ? params.UserGroupName : null;

    }
}

/**
 * DescribeRuleExecResults请求参数结构体
 * @class
 */
class DescribeRuleExecResultsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组执行Id
         * @type {number || null}
         */
        this.RuleGroupExecId = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.RuleGroupExecId = 'RuleGroupExecId' in params ? params.RuleGroupExecId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeStandardRuleDetailInfoList返回参数结构体
 * @class
 */
class DescribeStandardRuleDetailInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StandardRuleDetailList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StandardRuleDetailList = 'StandardRuleDetailList' in params ? params.StandardRuleDetailList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunTask返回参数结构体
 * @class
 */
class RunTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行成功或者失败
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchStopTasksNew请求参数结构体
 * @class
 */
class BatchStopTasksNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量停止任务的TaskId
         * @type {Array.<string> || null}
         */
        this.TaskIdList = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.TaskIdList = 'TaskIdList' in params ? params.TaskIdList : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * TriggerEvent请求参数结构体
 * @class
 */
class TriggerEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 案例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 时间格式：如果选择触发时间：2022年6月21，则设置为20220621
         * @type {string || null}
         */
        this.Dimension = null;

        /**
         * 描述信息
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 资源管理目录树节点
 * @class
 */
class ResourcePathTree extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否为叶子节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsLeaf = null;

        /**
         * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 本地路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocalPath = null;

        /**
         * 远程路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RemotePath = null;

        /**
         * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileExtensionType = null;

        /**
         * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 文件MD5值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5Value = null;

        /**
         * 文件拥有者名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerName = null;

        /**
         * 更新人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateUser = null;

        /**
         * 文件更新人uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateUserId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Cos存储桶名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * Cos地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtraInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IsLeaf = 'IsLeaf' in params ? params.IsLeaf : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.LocalPath = 'LocalPath' in params ? params.LocalPath : null;
        this.RemotePath = 'RemotePath' in params ? params.RemotePath : null;
        this.FileExtensionType = 'FileExtensionType' in params ? params.FileExtensionType : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Md5Value = 'Md5Value' in params ? params.Md5Value : null;
        this.OwnerName = 'OwnerName' in params ? params.OwnerName : null;
        this.UpdateUser = 'UpdateUser' in params ? params.UpdateUser : null;
        this.UpdateUserId = 'UpdateUserId' in params ? params.UpdateUserId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.ExtraInfo = 'ExtraInfo' in params ? params.ExtraInfo : null;

    }
}

/**
 * DescribeClusterNamespaceList返回参数结构体
 * @class
 */
class DescribeClusterNamespaceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间
         * @type {Array.<Namespace> || null}
         */
        this.Namespaces = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Namespaces) {
            this.Namespaces = new Array();
            for (let z in params.Namespaces) {
                let obj = new Namespace();
                obj.deserialize(params.Namespaces[z]);
                this.Namespaces.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInLongAgent返回参数结构体
 * @class
 */
class CreateInLongAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集器ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务依赖的边信息
 * @class
 */
class TaskLinkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下游任务id
         * @type {string || null}
         */
        this.TaskTo = null;

        /**
         * 上游任务id
         * @type {string || null}
         */
        this.TaskFrom = null;

        /**
         * 依赖边类型 1、“real_real”表示任务->任务；2、"virtual_real" 跨工作流任务->任务
         * @type {string || null}
         */
        this.LinkType = null;

        /**
         * 依赖边id
         * @type {string || null}
         */
        this.LinkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskTo = 'TaskTo' in params ? params.TaskTo : null;
        this.TaskFrom = 'TaskFrom' in params ? params.TaskFrom : null;
        this.LinkType = 'LinkType' in params ? params.LinkType : null;
        this.LinkId = 'LinkId' in params ? params.LinkId : null;

    }
}

/**
 * DescribeInstanceLog请求参数结构体
 * @class
 */
class DescribeInstanceLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 数据时间
         * @type {string || null}
         */
        this.CurRunDate = null;

        /**
         * 服务器Ip
         * @type {string || null}
         */
        this.BrokerIp = null;

        /**
         * 文件Name
         * @type {string || null}
         */
        this.OriginFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;
        this.BrokerIp = 'BrokerIp' in params ? params.BrokerIp : null;
        this.OriginFileName = 'OriginFileName' in params ? params.OriginFileName : null;

    }
}

/**
 * DescribeKafkaTopicInfo请求参数结构体
 * @class
 */
class DescribeKafkaTopicInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源id
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据源类型
         * @type {string || null}
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
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeRuleGroupSubscription返回参数结构体
 * @class
 */
class DescribeRuleGroupSubscriptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组订阅信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupSubscribe || null}
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
            let obj = new RuleGroupSubscribe();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationStatisticsTaskStatusTrend返回参数结构体
 * @class
 */
class DescribeIntegrationStatisticsTaskStatusTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationStatisticsTrendResult> || null}
         */
        this.TrendsData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TrendsData) {
            this.TrendsData = new Array();
            for (let z in params.TrendsData) {
                let obj = new IntegrationStatisticsTrendResult();
                obj.deserialize(params.TrendsData[z]);
                this.TrendsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataBases返回参数结构体
 * @class
 */
class DescribeDataBasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据来源数据数据库列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DatabaseInfo> || null}
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
                let obj = new DatabaseInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SaveCustomFunction请求参数结构体
 * @class
 */
class SaveCustomFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数唯一标识
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 分类：窗口函数、聚合函数、日期函数......
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 集群引擎实例
         * @type {string || null}
         */
        this.ClusterIdentifier = null;

        /**
         * 类名
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * 资源列表
         * @type {Array.<FunctionResource> || null}
         */
        this.ResourceList = null;

        /**
         * 函数说明
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用法
         * @type {string || null}
         */
        this.Usage = null;

        /**
         * 参数说明
         * @type {string || null}
         */
        this.ParamDesc = null;

        /**
         * 返回值说明
         * @type {string || null}
         */
        this.ReturnDesc = null;

        /**
         * 示例
         * @type {string || null}
         */
        this.Example = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.ClusterIdentifier = 'ClusterIdentifier' in params ? params.ClusterIdentifier : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;

        if (params.ResourceList) {
            this.ResourceList = new Array();
            for (let z in params.ResourceList) {
                let obj = new FunctionResource();
                obj.deserialize(params.ResourceList[z]);
                this.ResourceList.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.Usage = 'Usage' in params ? params.Usage : null;
        this.ParamDesc = 'ParamDesc' in params ? params.ParamDesc : null;
        this.ReturnDesc = 'ReturnDesc' in params ? params.ReturnDesc : null;
        this.Example = 'Example' in params ? params.Example : null;

    }
}

/**
 * TKE集群信息详情
 * @class
 */
class InLongTkeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * TKE集群状态 (Running 运行中 Creating 创建中 Idling 闲置中 Abnormal 异常)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 是否安装Agent，true: 是，false: 否
         * @type {boolean || null}
         */
        this.HasAgent = null;

        /**
         * 采集器ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * TKE集群区域ID
         * @type {string || null}
         */
        this.TkeRegion = null;

        /**
         * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER
         * @type {string || null}
         */
        this.ClusterType = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.HasAgent = 'HasAgent' in params ? params.HasAgent : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.TkeRegion = 'TkeRegion' in params ? params.TkeRegion : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * 质量规则执行策略
 * @class
 */
class RuleGroupExecStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MonitorType = null;

        /**
         * 计算队列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecQueue = null;

        /**
         * 执行资源组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

        /**
         * 执行资源组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutorGroupName = null;

        /**
         * 关联的生产调度任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProdSchedulerTask> || null}
         */
        this.Tasks = null;

        /**
         * 周期开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 周期结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 调度周期类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CycleType = null;

        /**
         * 延迟调度时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * 间隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CycleStep = null;

        /**
         * 时间指定
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.ExecQueue = 'ExecQueue' in params ? params.ExecQueue : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;
        this.ExecutorGroupName = 'ExecutorGroupName' in params ? params.ExecutorGroupName : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ProdSchedulerTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CycleType = 'CycleType' in params ? params.CycleType : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.CycleStep = 'CycleStep' in params ? params.CycleStep : null;
        this.TaskAction = 'TaskAction' in params ? params.TaskAction : null;

    }
}

/**
 * ModifyWorkflowSchedule请求参数结构体
 * @class
 */
class ModifyWorkflowScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 工作流id
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 延迟时间，单位分钟
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * 启动时间
         * @type {number || null}
         */
        this.StartupTime = null;

        /**
         * 自依赖类型  1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个
         * @type {number || null}
         */
        this.SelfDepend = null;

        /**
         * "周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
         * @type {number || null}
         */
        this.CycleType = null;

        /**
         * 步长，间隔时间，最小1
         * @type {number || null}
         */
        this.CycleStep = null;

        /**
         * 生效开始时间，格式 yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 生效结束时间，格式 yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。
         * @type {string || null}
         */
        this.TaskAction = null;

        /**
         * cron表达式  周期类型为crontab调度才需要
         * @type {string || null}
         */
        this.CrontabExpression = null;

        /**
         * 执行时间左闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
         * @type {string || null}
         */
        this.ExecutionStartTime = null;

        /**
         * 执行时间右闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
         * @type {string || null}
         */
        this.ExecutionEndTime = null;

        /**
         * 工作流依赖 ,yes 或者no
         * @type {string || null}
         */
        this.DependencyWorkflow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.StartupTime = 'StartupTime' in params ? params.StartupTime : null;
        this.SelfDepend = 'SelfDepend' in params ? params.SelfDepend : null;
        this.CycleType = 'CycleType' in params ? params.CycleType : null;
        this.CycleStep = 'CycleStep' in params ? params.CycleStep : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskAction = 'TaskAction' in params ? params.TaskAction : null;
        this.CrontabExpression = 'CrontabExpression' in params ? params.CrontabExpression : null;
        this.ExecutionStartTime = 'ExecutionStartTime' in params ? params.ExecutionStartTime : null;
        this.ExecutionEndTime = 'ExecutionEndTime' in params ? params.ExecutionEndTime : null;
        this.DependencyWorkflow = 'DependencyWorkflow' in params ? params.DependencyWorkflow : null;

    }
}

/**
 * DescribeRuleDataSources返回参数结构体
 * @class
 */
class DescribeRuleDataSourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DatabaseInfo> || null}
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
                let obj = new DatabaseInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterEvent请求参数结构体
 * @class
 */
class RegisterEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 事件名称，支持英文、数字和下划线，最长20个字符, 不能以数字下划线开头。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 事件分割类型，周期类型: DAY，HOUR，MIN，SECOND
         * @type {string || null}
         */
        this.EventSubType = null;

        /**
         * 广播：BROADCAST,单播：SINGLE
         * @type {string || null}
         */
        this.EventBroadcastType = null;

        /**
         * 周期类型为天和小时为HOURS ，周期类型为分钟 ：MINUTES,周期类型为秒：SECONDS
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * TBDS 事件所属人
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 事件类型，默认值：TIME_SERIES
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 对应day： yyyyMMdd，对应HOUR：yyyyMMddHH，对应MIN：yyyyMMddHHmm，对应SECOND：yyyyMMddHHmmss
         * @type {string || null}
         */
        this.DimensionFormat = null;

        /**
         * 存活时间
         * @type {number || null}
         */
        this.TimeToLive = null;

        /**
         * 事件描述
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EventSubType = 'EventSubType' in params ? params.EventSubType : null;
        this.EventBroadcastType = 'EventBroadcastType' in params ? params.EventBroadcastType : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.DimensionFormat = 'DimensionFormat' in params ? params.DimensionFormat : null;
        this.TimeToLive = 'TimeToLive' in params ? params.TimeToLive : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 规则模版
 * @class
 */
class RuleTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则模版ID
         * @type {number || null}
         */
        this.RuleTemplateId = null;

        /**
         * 规则模版名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则模版描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 模版类型（1：系统模版，2：自定义）
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 规则适用的源数据对象类型（1：常量，2：离线表级，3：离线字段级别）
         * @type {number || null}
         */
        this.SourceObjectType = null;

        /**
         * 规则适用的源数据对象类型（1：数值，2：字符串）
         * @type {number || null}
         */
        this.SourceObjectDataType = null;

        /**
         * 规则模版源侧内容，区分引擎，JSON 结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * 源数据适用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.SourceEngineTypes = null;

        /**
         * 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QualityDim = null;

        /**
         * 规则支持的比较方式类型（1：固定值比较，大于、小于，大于等于等 2：波动值比较，绝对值、上升、下降）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CompareType = null;

        /**
         * 引用次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CitationCount = null;

        /**
         * 创建人id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * 创建人昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 更新时间yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 是否添加where参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.WhereFlag = null;

        /**
         * 是否关联多个库表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.MultiSourceFlag = null;

        /**
         * 自定义模板SQL表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SqlExpression = null;

        /**
         * 模版子维度，0.父维度类型,1.一致性: 枚举范围一致性,2.一致性：数值范围一致性,3.一致性：字段数据相关性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubQualityDim = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleTemplateId = 'RuleTemplateId' in params ? params.RuleTemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SourceObjectType = 'SourceObjectType' in params ? params.SourceObjectType : null;
        this.SourceObjectDataType = 'SourceObjectDataType' in params ? params.SourceObjectDataType : null;
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.SourceEngineTypes = 'SourceEngineTypes' in params ? params.SourceEngineTypes : null;
        this.QualityDim = 'QualityDim' in params ? params.QualityDim : null;
        this.CompareType = 'CompareType' in params ? params.CompareType : null;
        this.CitationCount = 'CitationCount' in params ? params.CitationCount : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.WhereFlag = 'WhereFlag' in params ? params.WhereFlag : null;
        this.MultiSourceFlag = 'MultiSourceFlag' in params ? params.MultiSourceFlag : null;
        this.SqlExpression = 'SqlExpression' in params ? params.SqlExpression : null;
        this.SubQualityDim = 'SubQualityDim' in params ? params.SubQualityDim : null;

    }
}

/**
 * DescribeRuleGroupsByPage请求参数结构体
 * @class
 */
class DescribeRuleGroupsByPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件,每次请求的Filters的上限为10，Filter.Values的上限为5
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeDataBases请求参数结构体
 * @class
 */
class DescribeDataBasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 数据源id
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据源类型
         * @type {Array.<number> || null}
         */
        this.DsTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.DsTypes = 'DsTypes' in params ? params.DsTypes : null;

    }
}

/**
 * BatchDeleteIntegrationTasks返回参数结构体
 * @class
 */
class BatchDeleteIntegrationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 搜索条件
 * @class
 */
class SearchConditionInstanceNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行空间 "DRY_RUN"
         * @type {string || null}
         */
        this.ExecutionSpace = null;

        /**
         * 产品名称，可选
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 资源组
         * @type {string || null}
         */
        this.ResourceGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecutionSpace = 'ExecutionSpace' in params ? params.ExecutionSpace : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ResourceGroup = 'ResourceGroup' in params ? params.ResourceGroup : null;

    }
}

/**
 * BatchRerunIntegrationTaskInstances请求参数结构体
 * @class
 */
class BatchRerunIntegrationTaskInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例信息
         * @type {Array.<SchedulerTaskInstanceInfo> || null}
         */
        this.Instances = null;

        /**
         * 项目id
         * @type {string || null}
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new SchedulerTaskInstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 规则模版分页
 * @class
 */
class RuleTemplateHistoryPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 记录列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleTemplateHistory> || null}
         */
        this.Items = null;

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
                let obj = new RuleTemplateHistory();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * DescribeDataObjects请求参数结构体
 * @class
 */
class DescribeDataObjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据来源ID
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据表ID
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 质量规则组ID
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 查询实例条件
 * @class
 */
class SearchCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询框架，必选
         * @type {SearchConditionInstance || null}
         */
        this.Instance = null;

        /**
         * 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 排序顺序（asc，desc）
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
         * @type {string || null}
         */
        this.SortCol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Instance) {
            let obj = new SearchConditionInstance();
            obj.deserialize(params.Instance)
            this.Instance = obj;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.SortCol = 'SortCol' in params ? params.SortCol : null;

    }
}

/**
 * 数据质量规则
 * @class
 */
class Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 数据表Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 规则模板Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleTemplateId = null;

        /**
         * 规则模板概述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleTemplateContent = null;

        /**
         * 规则所属质量维度 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QualityDim = null;

        /**
         * 规则适用的源数据对象类型（1：常量，2：离线表级，3：离线字段级别）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SourceObjectType = null;

        /**
         * 规则适用的源数据对象类型（1：数值，2：字符串）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SourceObjectDataType = null;

        /**
         * 源字段详细类型，INT、STRING
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceObjectDataTypeName = null;

        /**
         * 源字段名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceObjectValue = null;

        /**
         * 检测范围 1.全表, 2.条件扫描
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConditionType = null;

        /**
         * 条件扫描WHERE条件表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConditionExpression = null;

        /**
         * 自定义SQL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomSql = null;

        /**
         * 报警触发条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareRule || null}
         */
        this.CompareRule = null;

        /**
         * 报警触发级别 1.低, 2.中, 3.高
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AlarmLevel = null;

        /**
         * 规则描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则配置人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 目标库Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetDatabaseId = null;

        /**
         * 目标库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetDatabaseName = null;

        /**
         * 目标表Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetTableId = null;

        /**
         * 目标表名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetTableName = null;

        /**
         * 目标字段过滤条件表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetConditionExpr = null;

        /**
         * 源字段与目标字段关联条件on表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelConditionExpr = null;

        /**
         * 自定义模版sql表达式参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleFieldConfig || null}
         */
        this.FieldConfig = null;

        /**
         * 是否关联多表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.MultiSourceFlag = null;

        /**
         * 是否where参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.WhereFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RuleTemplateId = 'RuleTemplateId' in params ? params.RuleTemplateId : null;
        this.RuleTemplateContent = 'RuleTemplateContent' in params ? params.RuleTemplateContent : null;
        this.QualityDim = 'QualityDim' in params ? params.QualityDim : null;
        this.SourceObjectType = 'SourceObjectType' in params ? params.SourceObjectType : null;
        this.SourceObjectDataType = 'SourceObjectDataType' in params ? params.SourceObjectDataType : null;
        this.SourceObjectDataTypeName = 'SourceObjectDataTypeName' in params ? params.SourceObjectDataTypeName : null;
        this.SourceObjectValue = 'SourceObjectValue' in params ? params.SourceObjectValue : null;
        this.ConditionType = 'ConditionType' in params ? params.ConditionType : null;
        this.ConditionExpression = 'ConditionExpression' in params ? params.ConditionExpression : null;
        this.CustomSql = 'CustomSql' in params ? params.CustomSql : null;

        if (params.CompareRule) {
            let obj = new CompareRule();
            obj.deserialize(params.CompareRule)
            this.CompareRule = obj;
        }
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.TargetDatabaseId = 'TargetDatabaseId' in params ? params.TargetDatabaseId : null;
        this.TargetDatabaseName = 'TargetDatabaseName' in params ? params.TargetDatabaseName : null;
        this.TargetTableId = 'TargetTableId' in params ? params.TargetTableId : null;
        this.TargetTableName = 'TargetTableName' in params ? params.TargetTableName : null;
        this.TargetConditionExpr = 'TargetConditionExpr' in params ? params.TargetConditionExpr : null;
        this.RelConditionExpr = 'RelConditionExpr' in params ? params.RelConditionExpr : null;

        if (params.FieldConfig) {
            let obj = new RuleFieldConfig();
            obj.deserialize(params.FieldConfig)
            this.FieldConfig = obj;
        }
        this.MultiSourceFlag = 'MultiSourceFlag' in params ? params.MultiSourceFlag : null;
        this.WhereFlag = 'WhereFlag' in params ? params.WhereFlag : null;

    }
}

/**
 * ModifyRuleGroupSubscription请求参数结构体
 * @class
 */
class ModifyRuleGroupSubscriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组ID
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 订阅人信息
         * @type {Array.<SubscribeReceiver> || null}
         */
        this.Receivers = null;

        /**
         * 订阅类型
         * @type {Array.<number> || null}
         */
        this.SubscribeType = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 数据库Id
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 数据源Id
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据表Id
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 群机器人webhook信息
         * @type {Array.<SubscribeWebHook> || null}
         */
        this.WebHooks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;

        if (params.Receivers) {
            this.Receivers = new Array();
            for (let z in params.Receivers) {
                let obj = new SubscribeReceiver();
                obj.deserialize(params.Receivers[z]);
                this.Receivers.push(obj);
            }
        }
        this.SubscribeType = 'SubscribeType' in params ? params.SubscribeType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.TableId = 'TableId' in params ? params.TableId : null;

        if (params.WebHooks) {
            this.WebHooks = new Array();
            for (let z in params.WebHooks) {
                let obj = new SubscribeWebHook();
                obj.deserialize(params.WebHooks[z]);
                this.WebHooks.push(obj);
            }
        }

    }
}

/**
 * DescribeDataSourceList返回参数结构体
 * @class
 */
class DescribeDataSourceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DataSourceInfoPage || null}
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
            let obj = new DataSourceInfoPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIntegrationTask请求参数结构体
 * @class
 */
class ModifyIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务信息
         * @type {IntegrationTaskInfo || null}
         */
        this.TaskInfo = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 默认false . 为true时表示走回滚节点逻辑
         * @type {boolean || null}
         */
        this.RollbackFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskInfo) {
            let obj = new IntegrationTaskInfo();
            obj.deserialize(params.TaskInfo)
            this.TaskInfo = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RollbackFlag = 'RollbackFlag' in params ? params.RollbackFlag : null;

    }
}

/**
 * 数据导出任务详情
 * @class
 */
class ExportTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExportTaskId = null;

        /**
         * 导出任务类型(1.全部,2.触发行,3.通过行)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 任务创建人 id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OperatorId = null;

        /**
         * 任务创建人昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatorName = null;

        /**
         * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 导出状态(1.已提交 2.导出中 3.导出成功 4.导出失败)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 调度任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchedulerTaskId = null;

        /**
         * 调度时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchedulerCurRunDate = null;

        /**
         * 文件相对路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportTaskId = 'ExportTaskId' in params ? params.ExportTaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.OperatorId = 'OperatorId' in params ? params.OperatorId : null;
        this.OperatorName = 'OperatorName' in params ? params.OperatorName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SchedulerTaskId = 'SchedulerTaskId' in params ? params.SchedulerTaskId : null;
        this.SchedulerCurRunDate = 'SchedulerCurRunDate' in params ? params.SchedulerCurRunDate : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;

    }
}

/**
 * BatchSuspendIntegrationTasks请求参数结构体
 * @class
 */
class BatchSuspendIntegrationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 任务信息
 * @class
 */
class TaskCanvasInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectIdent = null;

        /**
         * 任务状态，'Y','F','O','T','INVALID' 分别表示调度中、已停止、已暂停、停止中、已失效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务类型id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskTypeId = null;

        /**
         * 任务类型描述，其中任务类型id和任务类型描述的对应的关系为
20	通用数据同步任务
21	JDBC SQL
22	Tbase
25	数据ETL
30	Python
31	PySpark
34	Hive SQL
35	Shell
36	Spark SQL
37	HDFS到HBase
38	SHELL
39	Spark
45	DATA_QUALITY
55	THIVE到MYSQL
56	THIVE到PG
66	HDFS到PG
67	HDFS到Oracle
68	HDFS到MYSQL
69	FTP到HDFS
70	HIVE SQL
72	HIVE到HDFS
75	HDFS到HIVE
81	PYTHONSQL脚本
82	SPARKSCALA计算
83	虫洞任务
84	校验对账文件
85	HDFS到THIVE
86	TDW到HDFS
87	HDFS到TDW
88	校验对账文件
91	FLINK任务
92	MapReduce
98	custom topology
99	kafkatoHDFS
100	kafkatoHbase
101	MYSQL导入至HIVE(DX)
104	MYSQL到HIVE
105	HIVE到MYSQL
106	SQL SERVER到HIVE
107	HIVE到SQL SERVER
108	ORACLE到HIVE
109	HIVE到ORACLE
111	HIVE到MYSQL(NEW)
112	HIVE到PG
113	HIVE到PHOENIX
118	MYSQL到HDFS
119	PG到HDFS
120	ORACLE到HDFS
121	数据质量
10000	自定义业务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskTypeDesc = null;

        /**
         * 项目id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FolderName = null;

        /**
         * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FolderId = null;

        /**
         * 最近提交时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FirstSubmitTime = null;

        /**
         * 首次运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FirstRunTime = null;

        /**
         * 调度计划展示描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScheduleDesc = null;

        /**
         * 负责人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InCharge = null;

        /**
         * 调度周期类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CycleUnit = null;

        /**
         * 画布x轴坐标点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LeftCoordinate = null;

        /**
         * 画布y轴坐标点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopCoordinate = null;

        /**
         * 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.VirtualFlag = null;

        /**
         * 弹性周期配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskAction = null;

        /**
         * 延迟时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectIdent = 'ProjectIdent' in params ? params.ProjectIdent : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskTypeId = 'TaskTypeId' in params ? params.TaskTypeId : null;
        this.TaskTypeDesc = 'TaskTypeDesc' in params ? params.TaskTypeDesc : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.FolderName = 'FolderName' in params ? params.FolderName : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;
        this.FirstSubmitTime = 'FirstSubmitTime' in params ? params.FirstSubmitTime : null;
        this.FirstRunTime = 'FirstRunTime' in params ? params.FirstRunTime : null;
        this.ScheduleDesc = 'ScheduleDesc' in params ? params.ScheduleDesc : null;
        this.InCharge = 'InCharge' in params ? params.InCharge : null;
        this.CycleUnit = 'CycleUnit' in params ? params.CycleUnit : null;
        this.LeftCoordinate = 'LeftCoordinate' in params ? params.LeftCoordinate : null;
        this.TopCoordinate = 'TopCoordinate' in params ? params.TopCoordinate : null;
        this.VirtualFlag = 'VirtualFlag' in params ? params.VirtualFlag : null;
        this.TaskAction = 'TaskAction' in params ? params.TaskAction : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;

    }
}

/**
 * 文件夹分页信息
 * @class
 */
class DescribeFolderListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件夹信息列表
         * @type {Array.<Folder> || null}
         */
        this.Items = null;

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 页号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Folder();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 离线任务实例详情
 * @class
 */
class TaskInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.TaskRunId = null;

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 实例数据运行时间
         * @type {string || null}
         */
        this.CurRunDate = null;

        /**
         * 实例实际运行时间
         * @type {string || null}
         */
        this.IssueDate = null;

        /**
         * InLong任务Id
         * @type {string || null}
         */
        this.InlongTaskId = null;

        /**
         * 执行资源组id
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

        /**
         * 任务类型(1 调试运行,2 调度执行)
         * @type {number || null}
         */
        this.TaskRunType = null;

        /**
         * 任务状态(1 正在执行,2 成功,3 失败,4 等待终止,5 正在终止,6 已终止,7 终止失败,9 等待执行)
         * @type {number || null}
         */
        this.State = null;

        /**
         * 实例开始运行时间，格式：yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 实例结束运行时间，格式：yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Broker IP
         * @type {string || null}
         */
        this.BrokerIp = null;

        /**
         * 运行实例的EKS Pod名称
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 下一个调度周期的数据运行时间
         * @type {string || null}
         */
        this.NextRunDate = null;

        /**
         * 创建者的账号Id
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 操作者的账号Id
         * @type {number || null}
         */
        this.OperatorUin = null;

        /**
         * 拥有者的账号Id
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * App Id
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * WeData项目id
         * @type {string || null}
         */
        this.ProjectId = null;

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
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRunId = 'TaskRunId' in params ? params.TaskRunId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.InlongTaskId = 'InlongTaskId' in params ? params.InlongTaskId : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;
        this.TaskRunType = 'TaskRunType' in params ? params.TaskRunType : null;
        this.State = 'State' in params ? params.State : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BrokerIp = 'BrokerIp' in params ? params.BrokerIp : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.NextRunDate = 'NextRunDate' in params ? params.NextRunDate : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

    }
}

/**
 * 用户文件信息
 * @class
 */
class UserFileDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件类型，如 jar zip 等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileExtensionType = null;

        /**
         * 文件上传类型，资源管理为 resource
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileUploadType = null;

        /**
         * 文件MD5值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5Value = null;

        /**
         * 创建时间，秒级别的时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间，秒级别的时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 文件大小，单位为字节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 本地路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocalPath = null;

        /**
         * 本地临时路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocalTmpPath = null;

        /**
         * 远程路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RemotePath = null;

        /**
         * 文件拥有者名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerName = null;

        /**
         * 文件拥有者uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 文件深度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PathDepth = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 附加信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtraInfo = null;

        /**
         * 本地临时压缩文件绝对路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZipPath = null;

        /**
         * 文件所属存储桶
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 文件所属存储桶的地域
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileExtensionType = 'FileExtensionType' in params ? params.FileExtensionType : null;
        this.FileUploadType = 'FileUploadType' in params ? params.FileUploadType : null;
        this.Md5Value = 'Md5Value' in params ? params.Md5Value : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.LocalPath = 'LocalPath' in params ? params.LocalPath : null;
        this.LocalTmpPath = 'LocalTmpPath' in params ? params.LocalTmpPath : null;
        this.RemotePath = 'RemotePath' in params ? params.RemotePath : null;
        this.OwnerName = 'OwnerName' in params ? params.OwnerName : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.PathDepth = 'PathDepth' in params ? params.PathDepth : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ExtraInfo = 'ExtraInfo' in params ? params.ExtraInfo : null;
        this.ZipPath = 'ZipPath' in params ? params.ZipPath : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DeleteCustomFunction返回参数结构体
 * @class
 */
class DeleteCustomFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询实时任务实例当前的节点信息
 * @class
 */
class InstanceNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 读取节点SOURCE 写入节点SINK
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeName = null;

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
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

    }
}

/**
 * 维度评分信息
 * @class
 */
class DimensionScoreInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 权重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 设置人id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * 设置人名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 更新时间 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 参与评估表数量
         * @type {number || null}
         */
        this.JoinTableNumber = null;

        /**
         * 评分
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.JoinTableNumber = 'JoinTableNumber' in params ? params.JoinTableNumber : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * DescribeTaskScript返回参数结构体
 * @class
 */
class DescribeTaskScriptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务脚本内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskScriptContent || null}
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
            let obj = new TaskScriptContent();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 概览趋势结果
 * @class
 */
class RuleExecDateStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计日期
         * @type {string || null}
         */
        this.StatDate = null;

        /**
         * 告警数
         * @type {number || null}
         */
        this.AlarmCnt = null;

        /**
         * 阻塞数
         * @type {number || null}
         */
        this.PipelineCnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatDate = 'StatDate' in params ? params.StatDate : null;
        this.AlarmCnt = 'AlarmCnt' in params ? params.AlarmCnt : null;
        this.PipelineCnt = 'PipelineCnt' in params ? params.PipelineCnt : null;

    }
}

/**
 * DescribeTaskInstance返回参数结构体
 * @class
 */
class DescribeTaskInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务实例详情
         * @type {TaskInstanceDetail || null}
         */
        this.TaskInstanceDetail = null;

        /**
         * 任务实例详情。与TaskInstanceDetail相同含义，优先取Data，Data为空时，取TaskInstanceDetail
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskInstanceDetail || null}
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

        if (params.TaskInstanceDetail) {
            let obj = new TaskInstanceDetail();
            obj.deserialize(params.TaskInstanceDetail)
            this.TaskInstanceDetail = obj;
        }

        if (params.Data) {
            let obj = new TaskInstanceDetail();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProdTasks请求参数结构体
 * @class
 */
class DescribeProdTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 页面大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * CheckDuplicateTemplateName请求参数结构体
 * @class
 */
class CheckDuplicateTemplateNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则模板ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * BatchUpdateIntegrationTasks请求参数结构体
 * @class
 */
class BatchUpdateIntegrationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 责任人（多个责任人用小写分号隔开；离线任务传入的是账号名，实时任务传入的是账号id）
         * @type {string || null}
         */
        this.Incharge = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.Incharge = 'Incharge' in params ? params.Incharge : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateResourcePath请求参数结构体
 * @class
 */
class CreateResourcePathRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件夹名称，如 aaa
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 文件夹所属父目录，请注意，根目录为 /datastudio/resource
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ResumeIntegrationTask返回参数结构体
 * @class
 */
class ResumeIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功与否标识
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskName返回参数结构体
 * @class
 */
class ModifyTaskNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskReportDetailList返回参数结构体
 * @class
 */
class DescribeTaskReportDetailListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页码，从1开始
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 每页的记录数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总页数
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 任务运行指标
         * @type {Array.<TaskReportDetail> || null}
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
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new TaskReportDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量操作结果
 * @class
 */
class BatchResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 正在运行的任务数
         * @type {number || null}
         */
        this.Running = null;

        /**
         * 执行成功的任务数
         * @type {number || null}
         */
        this.Success = null;

        /**
         * 执行失败的任务数
         * @type {number || null}
         */
        this.Failed = null;

        /**
         * 总任务数
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
        this.Running = 'Running' in params ? params.Running : null;
        this.Success = 'Success' in params ? params.Success : null;
        this.Failed = 'Failed' in params ? params.Failed : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * DescribeRuleExecHistory请求参数结构体
 * @class
 */
class DescribeRuleExecHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeIntegrationStatisticsInstanceTrend返回参数结构体
 * @class
 */
class DescribeIntegrationStatisticsInstanceTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationStatisticsTrendResult> || null}
         */
        this.TrendsData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TrendsData) {
            this.TrendsData = new Array();
            for (let z in params.TrendsData) {
                let obj = new IntegrationStatisticsTrendResult();
                obj.deserialize(params.TrendsData[z]);
                this.TrendsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogList请求参数结构体
 * @class
 */
class DescribeInstanceLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 数据时间
         * @type {string || null}
         */
        this.CurRunDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;

    }
}

/**
 * 规则执行结果
 * @class
 */
class RunnerRuleExecResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * rule id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * rule exec id
         * @type {number || null}
         */
        this.RuleExecId = null;

        /**
         * exec state
         * @type {string || null}
         */
        this.State = null;

        /**
         * 结果
         * @type {Array.<string> || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleExecId = 'RuleExecId' in params ? params.RuleExecId : null;
        this.State = 'State' in params ? params.State : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * 集成节点
 * @class
 */
class IntegrationNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成节点id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 集成节点所属任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 集成节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 集成节点类型
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点数据源类型
         * @type {string || null}
         */
        this.DataSourceType = null;

        /**
         * 节点描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 节点配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordField> || null}
         */
        this.Config = null;

        /**
         * 节点扩展配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordField> || null}
         */
        this.ExtConfig = null;

        /**
         * 节点schema
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationNodeSchema> || null}
         */
        this.Schema = null;

        /**
         * 节点映射
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntegrationNodeMapping || null}
         */
        this.NodeMapping = null;

        /**
         * 应用id
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 创建人uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorUin = null;

        /**
         * 操作人uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatorUin = null;

        /**
         * owner uin
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.DataSourceType = 'DataSourceType' in params ? params.DataSourceType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;

        if (params.Config) {
            this.Config = new Array();
            for (let z in params.Config) {
                let obj = new RecordField();
                obj.deserialize(params.Config[z]);
                this.Config.push(obj);
            }
        }

        if (params.ExtConfig) {
            this.ExtConfig = new Array();
            for (let z in params.ExtConfig) {
                let obj = new RecordField();
                obj.deserialize(params.ExtConfig[z]);
                this.ExtConfig.push(obj);
            }
        }

        if (params.Schema) {
            this.Schema = new Array();
            for (let z in params.Schema) {
                let obj = new IntegrationNodeSchema();
                obj.deserialize(params.Schema[z]);
                this.Schema.push(obj);
            }
        }

        if (params.NodeMapping) {
            let obj = new IntegrationNodeMapping();
            obj.deserialize(params.NodeMapping)
            this.NodeMapping = obj;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeRuleGroup返回参数结构体
 * @class
 */
class DescribeRuleGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据质量规则组详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroup || null}
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
            let obj = new RuleGroup();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDataSources返回参数结构体
 * @class
 */
class DeleteDataSourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否删除成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskInstanceReportDetail请求参数结构体
 * @class
 */
class DescribeTaskInstanceReportDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * WeData项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务实例数据时间
         * @type {string || null}
         */
        this.CurRunDate = null;

        /**
         * 任务实例运行时间
         * @type {string || null}
         */
        this.IssueDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;

    }
}

/**
 * ModifyTaskLinks请求参数结构体
 * @class
 */
class ModifyTaskLinksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 父任务ID
         * @type {string || null}
         */
        this.TaskFrom = null;

        /**
         * 子任务ID
         * @type {string || null}
         */
        this.TaskTo = null;

        /**
         * 子任务工作流
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 父任务工作流
         * @type {string || null}
         */
        this.RealFromWorkflowId = null;

        /**
         * 父子任务之间的依赖关系
         * @type {string || null}
         */
        this.LinkDependencyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskFrom = 'TaskFrom' in params ? params.TaskFrom : null;
        this.TaskTo = 'TaskTo' in params ? params.TaskTo : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.RealFromWorkflowId = 'RealFromWorkflowId' in params ? params.RealFromWorkflowId : null;
        this.LinkDependencyType = 'LinkDependencyType' in params ? params.LinkDependencyType : null;

    }
}

/**
 * ModifyWorkflowSchedule返回参数结构体
 * @class
 */
class ModifyWorkflowScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行结果
         * @type {BatchResult || null}
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
            let obj = new BatchResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDataSources请求参数结构体
 * @class
 */
class DeleteDataSourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * id列表
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * ModifyTaskAlarmRegular请求参数结构体
 * @class
 */
class ModifyTaskAlarmRegularRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主键ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则信息
         * @type {TaskAlarmInfo || null}
         */
        this.TaskAlarmInfo = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;

        if (params.TaskAlarmInfo) {
            let obj = new TaskAlarmInfo();
            obj.deserialize(params.TaskAlarmInfo)
            this.TaskAlarmInfo = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeOrganizationalFunctions请求参数结构体
 * @class
 */
class DescribeOrganizationalFunctionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景类型：开发、使用
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 项目 ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 函数名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 展示名称
         * @type {string || null}
         */
        this.DisplayName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;

    }
}

/**
 * DescribeRuleTemplate返回参数结构体
 * @class
 */
class DescribeRuleTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleTemplate || null}
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
            let obj = new RuleTemplate();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKafkaTopicInfo返回参数结构体
 * @class
 */
class DescribeKafkaTopicInfoResponse extends  AbstractModel {
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
 * RerunInstances请求参数结构体
 * @class
 */
class RerunInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 实例嵌套集合
         * @type {Array.<InstanceInfo> || null}
         */
        this.Instances = null;

        /**
         * 检查父任务类型, true: 检查父任务; false: 不检查父任务
         * @type {boolean || null}
         */
        this.CheckFather = null;

        /**
         * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
         * @type {string || null}
         */
        this.RerunType = null;

        /**
         * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
         * @type {string || null}
         */
        this.DependentWay = null;

        /**
         * 重跑忽略事件监听与否
         * @type {boolean || null}
         */
        this.SkipEventListening = null;

        /**
         * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
         * @type {string || null}
         */
        this.SonInstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.CheckFather = 'CheckFather' in params ? params.CheckFather : null;
        this.RerunType = 'RerunType' in params ? params.RerunType : null;
        this.DependentWay = 'DependentWay' in params ? params.DependentWay : null;
        this.SkipEventListening = 'SkipEventListening' in params ? params.SkipEventListening : null;
        this.SonInstanceType = 'SonInstanceType' in params ? params.SonInstanceType : null;

    }
}

/**
 * DescribeTemplateHistory请求参数结构体
 * @class
 */
class DescribeTemplateHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CommitIntegrationTask请求参数结构体
 * @class
 */
class CommitIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 0.仅提交，1.立即启动，2.停止线上作业，丢弃作业状态数据，重新启动运行，3.暂停线上作业，保留作业状态数据，继续运行，4.保留作业状态数据，继续运行
         * @type {number || null}
         */
        this.CommitType = null;

        /**
         * 实时任务 201   离线任务 202  默认实时任务
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CommitType = 'CommitType' in params ? params.CommitType : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * DescribeTableInfoList请求参数结构体
 * @class
 */
class DescribeTableInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 如果是hive这里写rpc，如果是其他类型不传
         * @type {string || null}
         */
        this.ConnectionType = null;

        /**
         * 数据库源类型
         * @type {string || null}
         */
        this.Catalog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ConnectionType = 'ConnectionType' in params ? params.ConnectionType : null;
        this.Catalog = 'Catalog' in params ? params.Catalog : null;

    }
}

/**
 * DescribeQualityScore请求参数结构体
 * @class
 */
class DescribeQualityScoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计日期
         * @type {number || null}
         */
        this.StatisticsDate = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 数据来源id
         * @type {string || null}
         */
        this.DatasourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatisticsDate = 'StatisticsDate' in params ? params.StatisticsDate : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;

    }
}

/**
 * CommitIntegrationTask返回参数结构体
 * @class
 */
class CommitIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功与否标识
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集成任务
 * @class
 */
class IntegrationTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 同步类型1.解决方案(整库迁移),2.单表同步
         * @type {number || null}
         */
        this.SyncType = null;

        /**
         * 201.实时,202.离线
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 任务所属工作流id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务调度id(oceanus or us等作业id)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScheduleTaskId = null;

        /**
         * 任务组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskGroupId = null;

        /**
         * 项目id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 创建人uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorUin = null;

        /**
         * 操作人uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatorUin = null;

        /**
         * owner uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 应用id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 任务状态1.初始化,2.操作中,3.运行中,4.暂停,5.任务停止中,6.停止,7.执行失败,8.已删除,9.已锁定,10.配置过期,11.提交中,12.提交成功,13.提交失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationNodeInfo> || null}
         */
        this.Nodes = null;

        /**
         * 执行资源id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutorId = null;

        /**
         * 任务配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordField> || null}
         */
        this.Config = null;

        /**
         * 任务扩展配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordField> || null}
         */
        this.ExtConfig = null;

        /**
         * 任务执行context信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordField> || null}
         */
        this.ExecuteContext = null;

        /**
         * 节点映射
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationNodeMapping> || null}
         */
        this.Mappings = null;

        /**
         * 任务模式：1.画布模式，2.flink jar
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskMode = null;

        /**
         * 责任人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Incharge = null;

        /**
         * 离线新增参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OfflineTaskAddParam || null}
         */
        this.OfflineTaskAddEntity = null;

        /**
         * group name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutorGroupName = null;

        /**
         * url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InLongManagerUrl = null;

        /**
         * stream id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InLongStreamId = null;

        /**
         * version
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InLongManagerVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SyncType = 'SyncType' in params ? params.SyncType : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ScheduleTaskId = 'ScheduleTaskId' in params ? params.ScheduleTaskId : null;
        this.TaskGroupId = 'TaskGroupId' in params ? params.TaskGroupId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new IntegrationNodeInfo();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }
        this.ExecutorId = 'ExecutorId' in params ? params.ExecutorId : null;

        if (params.Config) {
            this.Config = new Array();
            for (let z in params.Config) {
                let obj = new RecordField();
                obj.deserialize(params.Config[z]);
                this.Config.push(obj);
            }
        }

        if (params.ExtConfig) {
            this.ExtConfig = new Array();
            for (let z in params.ExtConfig) {
                let obj = new RecordField();
                obj.deserialize(params.ExtConfig[z]);
                this.ExtConfig.push(obj);
            }
        }

        if (params.ExecuteContext) {
            this.ExecuteContext = new Array();
            for (let z in params.ExecuteContext) {
                let obj = new RecordField();
                obj.deserialize(params.ExecuteContext[z]);
                this.ExecuteContext.push(obj);
            }
        }

        if (params.Mappings) {
            this.Mappings = new Array();
            for (let z in params.Mappings) {
                let obj = new IntegrationNodeMapping();
                obj.deserialize(params.Mappings[z]);
                this.Mappings.push(obj);
            }
        }
        this.TaskMode = 'TaskMode' in params ? params.TaskMode : null;
        this.Incharge = 'Incharge' in params ? params.Incharge : null;

        if (params.OfflineTaskAddEntity) {
            let obj = new OfflineTaskAddParam();
            obj.deserialize(params.OfflineTaskAddEntity)
            this.OfflineTaskAddEntity = obj;
        }
        this.ExecutorGroupName = 'ExecutorGroupName' in params ? params.ExecutorGroupName : null;
        this.InLongManagerUrl = 'InLongManagerUrl' in params ? params.InLongManagerUrl : null;
        this.InLongStreamId = 'InLongStreamId' in params ? params.InLongStreamId : null;
        this.InLongManagerVersion = 'InLongManagerVersion' in params ? params.InLongManagerVersion : null;

    }
}

/**
 * SubmitTask返回参数结构体
 * @class
 */
class SubmitTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功或者失败
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyFolder请求参数结构体
 * @class
 */
class ModifyFolderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件夹名称
         * @type {string || null}
         */
        this.FolderName = null;

        /**
         * 文件夹Id
         * @type {string || null}
         */
        this.FolderId = null;

        /**
         * 父文件夹ID
         * @type {string || null}
         */
        this.ParentsFolderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.FolderName = 'FolderName' in params ? params.FolderName : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;
        this.ParentsFolderId = 'ParentsFolderId' in params ? params.ParentsFolderId : null;

    }
}

/**
 * DescribeAlarmEvents返回参数结构体
 * @class
 */
class DescribeAlarmEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警事件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlarmEventInfo> || null}
         */
        this.AlarmEventInfoList = null;

        /**
         * 总记录数
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

        if (params.AlarmEventInfoList) {
            this.AlarmEventInfoList = new Array();
            for (let z in params.AlarmEventInfoList) {
                let obj = new AlarmEventInfo();
                obj.deserialize(params.AlarmEventInfoList[z]);
                this.AlarmEventInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogList返回参数结构体
 * @class
 */
class DescribeInstanceLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志列表
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据质量规则组
 * @class
 */
class RuleGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 数据源Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceName = null;

        /**
         * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DatasourceType = null;

        /**
         * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MonitorType = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 关联数据表名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 关联数据表Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 关联数据表负责人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableOwnerName = null;

        /**
         * 执行策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupExecStrategy || null}
         */
        this.ExecStrategy = null;

        /**
         * 执行策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupSubscribe || null}
         */
        this.Subscription = null;

        /**
         * 数据库id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 是否有权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Permission = null;

        /**
         * 已经配置的规则数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleCount = null;

        /**
         * 监控状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.MonitorStatus = null;

        /**
         * 表负责人UserId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TableOwnerUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.DatasourceName = 'DatasourceName' in params ? params.DatasourceName : null;
        this.DatasourceType = 'DatasourceType' in params ? params.DatasourceType : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.TableOwnerName = 'TableOwnerName' in params ? params.TableOwnerName : null;

        if (params.ExecStrategy) {
            let obj = new RuleGroupExecStrategy();
            obj.deserialize(params.ExecStrategy)
            this.ExecStrategy = obj;
        }

        if (params.Subscription) {
            let obj = new RuleGroupSubscribe();
            obj.deserialize(params.Subscription)
            this.Subscription = obj;
        }
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.RuleCount = 'RuleCount' in params ? params.RuleCount : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.TableOwnerUserId = 'TableOwnerUserId' in params ? params.TableOwnerUserId : null;

    }
}

/**
 * 规则配置
 * @class
 */
class RuleConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则检测范围类型 1.全表  2.条件扫描
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConditionType = null;

        /**
         * 检测范围表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * 目标检测范围表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetCondition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ConditionType = 'ConditionType' in params ? params.ConditionType : null;
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.TargetCondition = 'TargetCondition' in params ? params.TargetCondition : null;

    }
}

/**
 * RunTask请求参数结构体
 * @class
 */
class RunTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeDependTasksNew请求参数结构体
 * @class
 */
class DescribeDependTasksNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 上游/下游层级1-6级
         * @type {number || null}
         */
        this.Deep = null;

        /**
         * 1: 表示查询上游节点；0:表示查询下游节点；2：表示查询上游和下游节点
         * @type {number || null}
         */
        this.Up = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务工作流id
         * @type {string || null}
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Deep = 'Deep' in params ? params.Deep : null;
        this.Up = 'Up' in params ? params.Up : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * CreateOfflineTask返回参数结构体
 * @class
 */
class CreateOfflineTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTaskAlarmRegular请求参数结构体
 * @class
 */
class CreateTaskAlarmRegularRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警配置信息
         * @type {TaskAlarmInfo || null}
         */
        this.TaskAlarmInfo = null;

        /**
         * 项目ID
         * @type {string || null}
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

        if (params.TaskAlarmInfo) {
            let obj = new TaskAlarmInfo();
            obj.deserialize(params.TaskAlarmInfo)
            this.TaskAlarmInfo = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyRule请求参数结构体
 * @class
 */
class ModifyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则组ID
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据表ID
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 规则模板ID
         * @type {number || null}
         */
        this.RuleTemplateId = null;

        /**
         * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
         * @type {number || null}
         */
        this.QualityDim = null;

        /**
         * 源字段详细类型，int、string
         * @type {string || null}
         */
        this.SourceObjectDataTypeName = null;

        /**
         * 源字段名称
         * @type {string || null}
         */
        this.SourceObjectValue = null;

        /**
         * 检测范围 1.全表   2.条件扫描
         * @type {number || null}
         */
        this.ConditionType = null;

        /**
         * 条件扫描WHERE条件表达式
         * @type {string || null}
         */
        this.ConditionExpression = null;

        /**
         * 自定义SQL
         * @type {string || null}
         */
        this.CustomSql = null;

        /**
         * 报警触发条件
         * @type {CompareRule || null}
         */
        this.CompareRule = null;

        /**
         * 报警触发级别 1.低, 2.中, 3.高
         * @type {number || null}
         */
        this.AlarmLevel = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 目标库Id
         * @type {string || null}
         */
        this.TargetDatabaseId = null;

        /**
         * 目标表Id
         * @type {string || null}
         */
        this.TargetTableId = null;

        /**
         * 目标过滤条件表达式
         * @type {string || null}
         */
        this.TargetConditionExpr = null;

        /**
         * 源字段与目标字段关联条件on表达式
         * @type {string || null}
         */
        this.RelConditionExpr = null;

        /**
         * 自定义模版sql表达式字段替换参数
         * @type {RuleFieldConfig || null}
         */
        this.FieldConfig = null;

        /**
         * 目标字段名称  CITY
         * @type {string || null}
         */
        this.TargetObjectValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.RuleTemplateId = 'RuleTemplateId' in params ? params.RuleTemplateId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.QualityDim = 'QualityDim' in params ? params.QualityDim : null;
        this.SourceObjectDataTypeName = 'SourceObjectDataTypeName' in params ? params.SourceObjectDataTypeName : null;
        this.SourceObjectValue = 'SourceObjectValue' in params ? params.SourceObjectValue : null;
        this.ConditionType = 'ConditionType' in params ? params.ConditionType : null;
        this.ConditionExpression = 'ConditionExpression' in params ? params.ConditionExpression : null;
        this.CustomSql = 'CustomSql' in params ? params.CustomSql : null;

        if (params.CompareRule) {
            let obj = new CompareRule();
            obj.deserialize(params.CompareRule)
            this.CompareRule = obj;
        }
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.TargetDatabaseId = 'TargetDatabaseId' in params ? params.TargetDatabaseId : null;
        this.TargetTableId = 'TargetTableId' in params ? params.TargetTableId : null;
        this.TargetConditionExpr = 'TargetConditionExpr' in params ? params.TargetConditionExpr : null;
        this.RelConditionExpr = 'RelConditionExpr' in params ? params.RelConditionExpr : null;

        if (params.FieldConfig) {
            let obj = new RuleFieldConfig();
            obj.deserialize(params.FieldConfig)
            this.FieldConfig = obj;
        }
        this.TargetObjectValue = 'TargetObjectValue' in params ? params.TargetObjectValue : null;

    }
}

/**
 * 操作结果
 * @class
 */
class BatchReturn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行结果
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 执行情况备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorDesc = null;

        /**
         * 执行情况id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrorDesc = 'ErrorDesc' in params ? params.ErrorDesc : null;
        this.ErrorId = 'ErrorId' in params ? params.ErrorId : null;

    }
}

/**
 * DescribeInLongAgentList请求参数结构体
 * @class
 */
class DescribeInLongAgentListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * WeData项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 采集器ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * Agent Name
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * 集群类型，1：TKE Agent，2：BOSS SDK，默认：1，3：CVM，4：自建服务器 【传多个用逗号分割】
         * @type {number || null}
         */
        this.AgentType = null;

        /**
         * Agent状态(running运行中，initializing 操作中，failed心跳异常)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Vpc Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 分页页码，从1开始，默认：1
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 分页每页记录数，默认10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 名称搜索是否开启模糊匹配，1：开启，0：不开启（精确匹配）
         * @type {number || null}
         */
        this.Like = null;

        /**
         * agent类型【多个用逗号分隔】
         * @type {string || null}
         */
        this.AgentTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.AgentType = 'AgentType' in params ? params.AgentType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Like = 'Like' in params ? params.Like : null;
        this.AgentTypes = 'AgentTypes' in params ? params.AgentTypes : null;

    }
}

/**
 * DescribeRuleExecLog返回参数结构体
 * @class
 */
class DescribeRuleExecLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则执行日志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleExecLog || null}
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
            let obj = new RuleExecLog();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 参数参数
 * @class
 */
class ParamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
         * @type {string || null}
         */
        this.ParamKey = null;

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
        this.ParamKey = 'ParamKey' in params ? params.ParamKey : null;
        this.ParamValue = 'ParamValue' in params ? params.ParamValue : null;

    }
}

/**
 * DescribeInstanceLogs返回参数结构体
 * @class
 */
class DescribeInstanceLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回日志列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceLog> || null}
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
                let obj = new InstanceLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchDeleteIntegrationTasks请求参数结构体
 * @class
 */
class BatchDeleteIntegrationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * TaskLog请求参数结构体
 * @class
 */
class TaskLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 起始时间戳，单位毫秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间戳，单位毫秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 拉取日志数量，默认100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 日志排序 desc 倒序 asc 顺序
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * 实时任务 201   离线任务 202  默认实时任务
         * @type {number || null}
         */
        this.TaskType = null;

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
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * DescribeIntegrationStatisticsTaskStatus请求参数结构体
 * @class
 */
class DescribeIntegrationStatisticsTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型（实时：201，离线：202）
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 查询日期
         * @type {string || null}
         */
        this.QueryDate = null;

        /**
         * 资源组id
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.QueryDate = 'QueryDate' in params ? params.QueryDate : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;

    }
}

/**
 * BatchDeleteTasksNew返回参数结构体
 * @class
 */
class BatchDeleteTasksNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回批量操作成功个数、失败个数、操作总数
         * @type {BatchOperateResult || null}
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
            let obj = new BatchOperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集成节点映射
 * @class
 */
class IntegrationNodeMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源节点id
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * 目标节点id
         * @type {string || null}
         */
        this.SinkId = null;

        /**
         * 源节点schema
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationNodeSchema> || null}
         */
        this.SourceSchema = null;

        /**
         * 节点schema映射
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationNodeSchemaMapping> || null}
         */
        this.SchemaMappings = null;

        /**
         * 节点映射扩展信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordField> || null}
         */
        this.ExtConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SinkId = 'SinkId' in params ? params.SinkId : null;

        if (params.SourceSchema) {
            this.SourceSchema = new Array();
            for (let z in params.SourceSchema) {
                let obj = new IntegrationNodeSchema();
                obj.deserialize(params.SourceSchema[z]);
                this.SourceSchema.push(obj);
            }
        }

        if (params.SchemaMappings) {
            this.SchemaMappings = new Array();
            for (let z in params.SchemaMappings) {
                let obj = new IntegrationNodeSchemaMapping();
                obj.deserialize(params.SchemaMappings[z]);
                this.SchemaMappings.push(obj);
            }
        }

        if (params.ExtConfig) {
            this.ExtConfig = new Array();
            for (let z in params.ExtConfig) {
                let obj = new RecordField();
                obj.deserialize(params.ExtConfig[z]);
                this.ExtConfig.push(obj);
            }
        }

    }
}

/**
 * ModifyRuleGroupSubscription返回参数结构体
 * @class
 */
class ModifyRuleGroupSubscriptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SuspendIntegrationTask请求参数结构体
 * @class
 */
class SuspendIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateHiveTableByDDL返回参数结构体
 * @class
 */
class CreateHiveTableByDDLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名称
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExecStrategy返回参数结构体
 * @class
 */
class DescribeExecStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组执行策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupExecStrategy || null}
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
            let obj = new RuleGroupExecStrategy();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskScript返回参数结构体
 * @class
 */
class ModifyTaskScriptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CommonContent || null}
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
            let obj = new CommonContent();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteResource返回参数结构体
 * @class
 */
class DeleteResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRule返回参数结构体
 * @class
 */
class ModifyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否更新成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 命名空间
 * @class
 */
class Namespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 当前状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;

    }
}

/**
 * 规则维度数统计
 * @class
 */
class RuleDimStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 维度统计数
         * @type {Array.<RuleDimCnt> || null}
         */
        this.DimCntList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.DimCntList) {
            this.DimCntList = new Array();
            for (let z in params.DimCntList) {
                let obj = new RuleDimCnt();
                obj.deserialize(params.DimCntList[z]);
                this.DimCntList.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskInstances返回参数结构体
 * @class
 */
class DescribeTaskInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {DescribeTaskInstancesData || null}
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
            let obj = new DescribeTaskInstancesData();
            obj.deserialize(params.Data)
            this.Data = obj;
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
         * 项目/工作空间id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 周期列表（如天，一次性），可选
         * @type {Array.<string> || null}
         */
        this.CycleList = null;

        /**
         * 责任人
         * @type {Array.<string> || null}
         */
        this.OwnerList = null;

        /**
         * 跟之前保持一致
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 排序顺序（asc，desc）
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
         * @type {string || null}
         */
        this.SortCol = null;

        /**
         * 类型列表（如35 shell任务），可选
         * @type {Array.<number> || null}
         */
        this.TaskTypeList = null;

        /**
         * 状态列表（如成功 2，正在执行 1），可选
         * @type {Array.<number> || null}
         */
        this.StateList = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.CycleList = 'CycleList' in params ? params.CycleList : null;
        this.OwnerList = 'OwnerList' in params ? params.OwnerList : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.SortCol = 'SortCol' in params ? params.SortCol : null;
        this.TaskTypeList = 'TaskTypeList' in params ? params.TaskTypeList : null;
        this.StateList = 'StateList' in params ? params.StateList : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DeleteCustomFunction请求参数结构体
 * @class
 */
class DeleteCustomFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例 ID
         * @type {string || null}
         */
        this.ClusterIdentifier = null;

        /**
         * 函数 ID
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 项目ID，必须填
         * @type {string || null}
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
        this.ClusterIdentifier = 'ClusterIdentifier' in params ? params.ClusterIdentifier : null;
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 任务分页数据查询
 * @class
 */
class TaskInfoDataPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 任务集合信息
         * @type {Array.<TaskInfoData> || null}
         */
        this.Items = null;

        /**
         * 总页数1
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new TaskInfoData();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * 任务锁的状态
 * @class
 */
class TaskLockStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 持锁者
         * @type {string || null}
         */
        this.Locker = null;

        /**
         * 当前操作用户是否为持锁者，1表示为持锁者，0表示为不为持锁者
         * @type {number || null}
         */
        this.IsLocker = null;

        /**
         * 是否可以抢锁，1表示可以抢锁，0表示不可以抢锁
         * @type {number || null}
         */
        this.IsRob = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Locker = 'Locker' in params ? params.Locker : null;
        this.IsLocker = 'IsLocker' in params ? params.IsLocker : null;
        this.IsRob = 'IsRob' in params ? params.IsRob : null;

    }
}

/**
 * BatchCreateIntegrationTaskAlarms请求参数结构体
 * @class
 */
class BatchCreateIntegrationTaskAlarmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 告警配置信息
         * @type {TaskAlarmInfo || null}
         */
        this.TaskAlarmInfo = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

        if (params.TaskAlarmInfo) {
            let obj = new TaskAlarmInfo();
            obj.deserialize(params.TaskAlarmInfo)
            this.TaskAlarmInfo = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 查询任务实例列表
 * @class
 */
class DescribeTaskInstancesData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例列表
         * @type {Array.<TaskInstanceInfo> || null}
         */
        this.Items = null;

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 页号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new TaskInstanceInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DryRunDIOfflineTask请求参数结构体
 * @class
 */
class DryRunDIOfflineTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 资源组Id
         * @type {string || null}
         */
        this.ResourceGroup = null;

        /**
         * 默认 27
         * @type {number || null}
         */
        this.TaskTypeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ResourceGroup = 'ResourceGroup' in params ? params.ResourceGroup : null;
        this.TaskTypeId = 'TaskTypeId' in params ? params.TaskTypeId : null;

    }
}

/**
 * CreateOfflineTask请求参数结构体
 * @class
 */
class CreateOfflineTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目/工作
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 1
         * @type {number || null}
         */
        this.CycleStep = null;

        /**
         * 0
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * 2099-12-31 00:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Notes = null;

        /**
         * 当前日期
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 跟之前调用调度接口保持一致27
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * 默认 ""
         * @type {string || null}
         */
        this.TaskAction = null;

        /**
         * 区分画布和表单
         * @type {string || null}
         */
        this.TaskMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CycleStep = 'CycleStep' in params ? params.CycleStep : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Notes = 'Notes' in params ? params.Notes : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.TaskAction = 'TaskAction' in params ? params.TaskAction : null;
        this.TaskMode = 'TaskMode' in params ? params.TaskMode : null;

    }
}

/**
 * DescribeIntegrationStatisticsRecordsTrend返回参数结构体
 * @class
 */
class DescribeIntegrationStatisticsRecordsTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationStatisticsTrendResult> || null}
         */
        this.TrendsData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TrendsData) {
            this.TrendsData = new Array();
            for (let z in params.TrendsData) {
                let obj = new IntegrationStatisticsTrendResult();
                obj.deserialize(params.TrendsData[z]);
                this.TrendsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文件夹分页信息
 * @class
 */
class DescribeFolderWorkflowListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流信息列表
         * @type {Array.<Workflow> || null}
         */
        this.Items = null;

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 页号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Workflow();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 规则表变量替换
 * @class
 */
class TableConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 表Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 表名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表Key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableKey = null;

        /**
         * 字段变量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FieldConfig> || null}
         */
        this.FieldConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableKey = 'TableKey' in params ? params.TableKey : null;

        if (params.FieldConfig) {
            this.FieldConfig = new Array();
            for (let z in params.FieldConfig) {
                let obj = new FieldConfig();
                obj.deserialize(params.FieldConfig[z]);
                this.FieldConfig.push(obj);
            }
        }

    }
}

/**
 * 表评分统计信息
 * @class
 */
class TableScoreStatisticsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 等级 1、2、3、4、5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 占比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Scale = null;

        /**
         * 表数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TableNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Level = 'Level' in params ? params.Level : null;
        this.Scale = 'Scale' in params ? params.Scale : null;
        this.TableNumber = 'TableNumber' in params ? params.TableNumber : null;

    }
}

/**
 * BatchForceSuccessIntegrationTaskInstances返回参数结构体
 * @class
 */
class BatchForceSuccessIntegrationTaskInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务告警信息
 * @class
 */
class TaskAlarmInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RegularName = null;

        /**
         * 规则状态(0表示关闭，1表示打开)
         * @type {number || null}
         */
        this.RegularStatus = null;

        /**
         * 告警级别(0表示普通，1表示重要，2表示紧急)
         * @type {number || null}
         */
        this.AlarmLevel = null;

        /**
         * 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停
，4写入速度，5读取速度，6读取吞吐，7写入吞吐, 8脏数据字节数，9脏数据条数
         * @type {number || null}
         */
        this.AlarmIndicator = null;

        /**
         * 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http）
         * @type {string || null}
         */
        this.AlarmWay = null;

        /**
         * 告警接收人ID，多个用逗号隔开
         * @type {string || null}
         */
        this.AlarmRecipientId = null;

        /**
         * 任务类型(201表示实时，202表示离线)
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 告警接收人昵称，多个用逗号隔开
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmRecipientName = null;

        /**
         * 主键ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RegularId = null;

        /**
         * 指标阈值(1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TriggerType = null;

        /**
         * 预计的超时时间(分钟级别)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EstimatedTime = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 创建人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Creater = null;

        /**
         * 告警指标描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmIndicatorDesc = null;

        /**
         * 实时任务告警需要的参数，1是大于2是小于
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Operator = null;

        /**
         * 节点id，多个逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 节点名称，多个逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RegularName = 'RegularName' in params ? params.RegularName : null;
        this.RegularStatus = 'RegularStatus' in params ? params.RegularStatus : null;
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;
        this.AlarmIndicator = 'AlarmIndicator' in params ? params.AlarmIndicator : null;
        this.AlarmWay = 'AlarmWay' in params ? params.AlarmWay : null;
        this.AlarmRecipientId = 'AlarmRecipientId' in params ? params.AlarmRecipientId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.AlarmRecipientName = 'AlarmRecipientName' in params ? params.AlarmRecipientName : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RegularId = 'RegularId' in params ? params.RegularId : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.EstimatedTime = 'EstimatedTime' in params ? params.EstimatedTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Creater = 'Creater' in params ? params.Creater : null;
        this.AlarmIndicatorDesc = 'AlarmIndicatorDesc' in params ? params.AlarmIndicatorDesc : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

    }
}

/**
 * DescribeClusterNamespaceList请求参数结构体
 * @class
 */
class DescribeClusterNamespaceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * WeData项目ID
         * @type {string || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 告警接收人详情
 * @class
 */
class AlarmReceiverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警ID
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * 告警接收人ID
         * @type {string || null}
         */
        this.AlarmReceiver = null;

        /**
         * 邮件，0：未设置，1：成功，2：失败
         * @type {number || null}
         */
        this.Email = null;

        /**
         * 短信，0：未设置，1：成功，2：失败
         * @type {number || null}
         */
        this.Sms = null;

        /**
         * 微信，0：未设置，1：成功，2：失败
         * @type {number || null}
         */
        this.Wechat = null;

        /**
         * 电话，0：未设置，1：成功，2：失败
         * @type {number || null}
         */
        this.Voice = null;

        /**
         * 企业微信，0：未设置，1：成功，2：失败
         * @type {number || null}
         */
        this.Wecom = null;

        /**
         * http，0：未设置，1：成功，2：失败
         * @type {number || null}
         */
        this.Http = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.AlarmReceiver = 'AlarmReceiver' in params ? params.AlarmReceiver : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Sms = 'Sms' in params ? params.Sms : null;
        this.Wechat = 'Wechat' in params ? params.Wechat : null;
        this.Voice = 'Voice' in params ? params.Voice : null;
        this.Wecom = 'Wecom' in params ? params.Wecom : null;
        this.Http = 'Http' in params ? params.Http : null;

    }
}

/**
 * Spark SQL配置参数
 * @class
 */
class GeneralTaskParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通用任务参数类型,例：SPARK_SQL
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 通用任务参数内容,直接作用于任务的参数。不同参数用;
分割
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CreateInLongAgent请求参数结构体
 * @class
 */
class CreateInLongAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集器类型，1：TKE Agent，2：BOSS SDK，默认：1
         * @type {number || null}
         */
        this.AgentType = null;

        /**
         * 采集器名称
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * 集成资源组id
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

        /**
         * WeData项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * TKE集群的地域
         * @type {string || null}
         */
        this.TkeRegion = null;

        /**
         * 当AgentType为1时，必填。当AgentType为2时，不用填
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
        this.AgentType = 'AgentType' in params ? params.AgentType : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TkeRegion = 'TkeRegion' in params ? params.TkeRegion : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyRuleTemplate请求参数结构体
 * @class
 */
class ModifyRuleTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模版ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 模版类型  1.系统模版   2.自定义模版
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 模版名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 质量检测维度 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性
         * @type {number || null}
         */
        this.QualityDim = null;

        /**
         * 源端数据对象类型 1.常量  2.离线表级   2.离线字段级
         * @type {number || null}
         */
        this.SourceObjectType = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 源端对应的引擎类型
         * @type {Array.<number> || null}
         */
        this.SourceEngineTypes = null;

        /**
         * 是否关联其它库表
         * @type {boolean || null}
         */
        this.MultiSourceFlag = null;

        /**
         * SQL 表达式
         * @type {string || null}
         */
        this.SqlExpression = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 是否添加where参数
         * @type {boolean || null}
         */
        this.WhereFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.QualityDim = 'QualityDim' in params ? params.QualityDim : null;
        this.SourceObjectType = 'SourceObjectType' in params ? params.SourceObjectType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SourceEngineTypes = 'SourceEngineTypes' in params ? params.SourceEngineTypes : null;
        this.MultiSourceFlag = 'MultiSourceFlag' in params ? params.MultiSourceFlag : null;
        this.SqlExpression = 'SqlExpression' in params ? params.SqlExpression : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WhereFlag = 'WhereFlag' in params ? params.WhereFlag : null;

    }
}

/**
 * DescribeRuleExecStat返回参数结构体
 * @class
 */
class DescribeRuleExecStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {RuleExecStat || null}
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
            let obj = new RuleExecStat();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 维度评分
 * @class
 */
class DimensionScore extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度评分列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DimensionScoreInfo> || null}
         */
        this.DimensionScoreList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DimensionScoreList) {
            this.DimensionScoreList = new Array();
            for (let z in params.DimensionScoreList) {
                let obj = new DimensionScoreInfo();
                obj.deserialize(params.DimensionScoreList[z]);
                this.DimensionScoreList.push(obj);
            }
        }

    }
}

/**
 * 画布所需的信息
 * @class
 */
class CanvasInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画布任务信息
         * @type {Array.<TaskCanvasInfo> || null}
         */
        this.TasksList = null;

        /**
         * 画布任务链接信息
         * @type {Array.<TaskLinkInfo> || null}
         */
        this.LinksList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TasksList) {
            this.TasksList = new Array();
            for (let z in params.TasksList) {
                let obj = new TaskCanvasInfo();
                obj.deserialize(params.TasksList[z]);
                this.TasksList.push(obj);
            }
        }

        if (params.LinksList) {
            this.LinksList = new Array();
            for (let z in params.LinksList) {
                let obj = new TaskLinkInfo();
                obj.deserialize(params.LinksList[z]);
                this.LinksList.push(obj);
            }
        }

    }
}

/**
 * DescribeTableQualityDetails请求参数结构体
 * @class
 */
class DescribeTableQualityDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计日期
         * @type {number || null}
         */
        this.StatisticsDate = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤参数TableName、DatabaseId 、DatabaseName、OwnerUserName
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序参数 排序方式 DESC 或者 ASC，表得分排序 TableScore
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 数据来源id
         * @type {string || null}
         */
        this.DatasourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatisticsDate = 'StatisticsDate' in params ? params.StatisticsDate : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;

    }
}

/**
 * 集成节点详情
 * @class
 */
class IntegrationNodeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 集成节点类型
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点数据源类型
         * @type {string || null}
         */
        this.DataSourceType = null;

        /**
         * 节点描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 节点配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordField> || null}
         */
        this.Config = null;

        /**
         * 节点扩展配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordField> || null}
         */
        this.ExtConfig = null;

        /**
         * 节点schema
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationNodeSchema> || null}
         */
        this.Schema = null;

        /**
         * 节点映射
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntegrationNodeMapping || null}
         */
        this.NodeMapping = null;

        /**
         * owner uin
         * @type {string || null}
         */
        this.OwnerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.DataSourceType = 'DataSourceType' in params ? params.DataSourceType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;

        if (params.Config) {
            this.Config = new Array();
            for (let z in params.Config) {
                let obj = new RecordField();
                obj.deserialize(params.Config[z]);
                this.Config.push(obj);
            }
        }

        if (params.ExtConfig) {
            this.ExtConfig = new Array();
            for (let z in params.ExtConfig) {
                let obj = new RecordField();
                obj.deserialize(params.ExtConfig[z]);
                this.ExtConfig.push(obj);
            }
        }

        if (params.Schema) {
            this.Schema = new Array();
            for (let z in params.Schema) {
                let obj = new IntegrationNodeSchema();
                obj.deserialize(params.Schema[z]);
                this.Schema.push(obj);
            }
        }

        if (params.NodeMapping) {
            let obj = new IntegrationNodeMapping();
            obj.deserialize(params.NodeMapping)
            this.NodeMapping = obj;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;

    }
}

/**
 * ForceSucInstances请求参数结构体
 * @class
 */
class ForceSucInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 实例嵌套集合
         * @type {Array.<InstanceInfo> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * DescribeRuleExecExportResult请求参数结构体
 * @class
 */
class DescribeRuleExecExportResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则执行id
         * @type {number || null}
         */
        this.RuleExecId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleExecId = 'RuleExecId' in params ? params.RuleExecId : null;

    }
}

/**
 * GenHiveTableDDLSql请求参数结构体
 * @class
 */
class GenHiveTableDDLSqlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 目标数据库
         * @type {string || null}
         */
        this.SinkDatabase = null;

        /**
         * 节点id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 元数据类型(MYSQL、ORACLE)
         * @type {string || null}
         */
        this.MsType = null;

        /**
         * 数据源id
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 来源库
         * @type {string || null}
         */
        this.SourceDatabase = null;

        /**
         * 来源表
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 目标表元数据类型(HIVE、GBASE)
         * @type {string || null}
         */
        this.SinkType = null;

        /**
         * schema名称
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 上游节点的字段信息
         * @type {Array.<SourceFieldInfo> || null}
         */
        this.SourceFieldInfoList = null;

        /**
         * 分区字段
         * @type {Array.<Partition> || null}
         */
        this.Partitions = null;

        /**
         * 建表属性
         * @type {Array.<Property> || null}
         */
        this.Properties = null;

        /**
         * 建表模式，0:向导模式，1:ddl
         * @type {number || null}
         */
        this.TableMode = null;

        /**
         * DLC表版本，v1/v2
         * @type {string || null}
         */
        this.TableVersion = null;

        /**
         * 是否upsert写入
         * @type {boolean || null}
         */
        this.UpsertFlag = null;

        /**
         * 表描述信息
         * @type {string || null}
         */
        this.TableComment = null;

        /**
         * 增加的文件数量阈值, 超过值将触发小文件合并
         * @type {number || null}
         */
        this.AddDataFiles = null;

        /**
         * 增加的Equality delete数量阈值, 超过值将触发小文件合并
         * @type {number || null}
         */
        this.AddEqualityDeletes = null;

        /**
         * 增加的Position delete数量阈值, 超过值将触发小文件合并
         * @type {number || null}
         */
        this.AddPositionDeletes = null;

        /**
         * 增加的delete file数量阈值
         * @type {number || null}
         */
        this.AddDeleteFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SinkDatabase = 'SinkDatabase' in params ? params.SinkDatabase : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MsType = 'MsType' in params ? params.MsType : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.SourceDatabase = 'SourceDatabase' in params ? params.SourceDatabase : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.SinkType = 'SinkType' in params ? params.SinkType : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;

        if (params.SourceFieldInfoList) {
            this.SourceFieldInfoList = new Array();
            for (let z in params.SourceFieldInfoList) {
                let obj = new SourceFieldInfo();
                obj.deserialize(params.SourceFieldInfoList[z]);
                this.SourceFieldInfoList.push(obj);
            }
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new Partition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new Property();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }
        this.TableMode = 'TableMode' in params ? params.TableMode : null;
        this.TableVersion = 'TableVersion' in params ? params.TableVersion : null;
        this.UpsertFlag = 'UpsertFlag' in params ? params.UpsertFlag : null;
        this.TableComment = 'TableComment' in params ? params.TableComment : null;
        this.AddDataFiles = 'AddDataFiles' in params ? params.AddDataFiles : null;
        this.AddEqualityDeletes = 'AddEqualityDeletes' in params ? params.AddEqualityDeletes : null;
        this.AddPositionDeletes = 'AddPositionDeletes' in params ? params.AddPositionDeletes : null;
        this.AddDeleteFiles = 'AddDeleteFiles' in params ? params.AddDeleteFiles : null;

    }
}

/**
 * DescribeRuleExecResultsByPage请求参数结构体
 * @class
 */
class DescribeRuleExecResultsByPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行规则组ID
         * @type {number || null}
         */
        this.RuleGroupExecId = null;

        /**
         * page number
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * page size
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleGroupExecId = 'RuleGroupExecId' in params ? params.RuleGroupExecId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 质量评分
 * @class
 */
class QualityScore extends  AbstractModel {
    constructor(){
        super();

        /**
         * 综合分数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CompositeScore = null;

        /**
         * 评分分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TableScoreStatisticsInfo> || null}
         */
        this.ScoringDistribution = null;

        /**
         * 总表数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalTableNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompositeScore = 'CompositeScore' in params ? params.CompositeScore : null;

        if (params.ScoringDistribution) {
            this.ScoringDistribution = new Array();
            for (let z in params.ScoringDistribution) {
                let obj = new TableScoreStatisticsInfo();
                obj.deserialize(params.ScoringDistribution[z]);
                this.ScoringDistribution.push(obj);
            }
        }
        this.TotalTableNumber = 'TotalTableNumber' in params ? params.TotalTableNumber : null;

    }
}

/**
 * LockIntegrationTask返回参数结构体
 * @class
 */
class LockIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功与否标识
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFunctionTypes返回参数结构体
 * @class
 */
class DescribeFunctionTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FunctionTypeOrKind> || null}
         */
        this.Types = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Types) {
            this.Types = new Array();
            for (let z in params.Types) {
                let obj = new FunctionTypeOrKind();
                obj.deserialize(params.Types[z]);
                this.Types.push(obj);
            }
        }
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteWorkflowNew请求参数结构体
 * @class
 */
class DeleteWorkflowNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流id
         * @type {string || null}
         */
        this.WorkFlowId = null;

        /**
         * true : 删除后下游任务可正常运行
false：删除后下游任务不可运行
         * @type {boolean || null}
         */
        this.DeleteMode = null;

        /**
         * true：通知下游任务责任人
false:  不通知下游任务责任人
         * @type {boolean || null}
         */
        this.EnableNotify = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.WorkFlowId = 'WorkFlowId' in params ? params.WorkFlowId : null;
        this.DeleteMode = 'DeleteMode' in params ? params.DeleteMode : null;
        this.EnableNotify = 'EnableNotify' in params ? params.EnableNotify : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * BatchUpdateIntegrationTasks返回参数结构体
 * @class
 */
class BatchUpdateIntegrationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckDuplicateRuleName请求参数结构体
 * @class
 */
class CheckDuplicateRuleNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则组Id
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则Id
         * @type {number || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * MakeUpWorkflowNew请求参数结构体
 * @class
 */
class MakeUpWorkflowNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流id
         * @type {string || null}
         */
        this.WorkFlowId = null;

        /**
         * 补录开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 补录结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.WorkFlowId = 'WorkFlowId' in params ? params.WorkFlowId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeInstanceLastLog请求参数结构体
 * @class
 */
class DescribeInstanceLastLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 数据时间
         * @type {string || null}
         */
        this.CurRunDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;

    }
}

/**
 * 表质量分分页结果
 * @class
 */
class TableQualityDetailPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表质量列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TableQualityDetail> || null}
         */
        this.Items = null;

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
                let obj = new TableQualityDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskInstances请求参数结构体
 * @class
 */
class DescribeTaskInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 页号，默认为1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页大小，默认为10，最大不超过200
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 工作流id列表
         * @type {Array.<string> || null}
         */
        this.WorkflowIdList = null;

        /**
         * 工作流名称列表，支持模糊搜索
         * @type {Array.<string> || null}
         */
        this.WorkflowNameList = null;

        /**
         * 起始数据时间，格式yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.DateFrom = null;

        /**
         * 结束数据时间，格式yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.DateTo = null;

        /**
         * 任务id列表
         * @type {Array.<string> || null}
         */
        this.TaskIdList = null;

        /**
         * 任务名称列表，支持模糊搜索
         * @type {Array.<string> || null}
         */
        this.TaskNameList = null;

        /**
         * 责任人名称列表
         * @type {Array.<string> || null}
         */
        this.InChargeList = null;

        /**
         * 任务类型码列表，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
         * @type {Array.<number> || null}
         */
        this.TaskTypeIdList = null;

        /**
         * 实例状态列表，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功
         * @type {Array.<string> || null}
         */
        this.StateList = null;

        /**
         * 周期类型列表，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab
         * @type {Array.<string> || null}
         */
        this.TaskCycleUnitList = null;

        /**
         * 实例类型，0补录实例，1周期实例，2非周期实例
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 排序字段信息列表，ScheduleDateTime / CostTime / StartTime / EndTime
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.WorkflowIdList = 'WorkflowIdList' in params ? params.WorkflowIdList : null;
        this.WorkflowNameList = 'WorkflowNameList' in params ? params.WorkflowNameList : null;
        this.DateFrom = 'DateFrom' in params ? params.DateFrom : null;
        this.DateTo = 'DateTo' in params ? params.DateTo : null;
        this.TaskIdList = 'TaskIdList' in params ? params.TaskIdList : null;
        this.TaskNameList = 'TaskNameList' in params ? params.TaskNameList : null;
        this.InChargeList = 'InChargeList' in params ? params.InChargeList : null;
        this.TaskTypeIdList = 'TaskTypeIdList' in params ? params.TaskTypeIdList : null;
        this.StateList = 'StateList' in params ? params.StateList : null;
        this.TaskCycleUnitList = 'TaskCycleUnitList' in params ? params.TaskCycleUnitList : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }

    }
}

/**
 * 任务实例信息
 * @class
 */
class TaskInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectIdent = null;

        /**
         * 实例状态，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.State = null;

        /**
         * 任务类型id，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskTypeId = null;

        /**
         * 任务类型描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskTypeDesc = null;

        /**
         * 项目id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FolderName = null;

        /**
         * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FolderId = null;

        /**
         * 调度计划展示描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchedulerDesc = null;

        /**
         * 负责人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InCharge = null;

        /**
         * 调度周期类型，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CycleType = null;

        /**
         * 实例开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 实例结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 实例类型，0补录实例，1周期实例，2非周期实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 最大重试次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TryLimit = null;

        /**
         * 当前重试次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Tries = null;

        /**
         * 计划调度时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchedulerDateTime = null;

        /**
         * 运行耗时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CostTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectIdent = 'ProjectIdent' in params ? params.ProjectIdent : null;
        this.State = 'State' in params ? params.State : null;
        this.TaskTypeId = 'TaskTypeId' in params ? params.TaskTypeId : null;
        this.TaskTypeDesc = 'TaskTypeDesc' in params ? params.TaskTypeDesc : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.FolderName = 'FolderName' in params ? params.FolderName : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;
        this.SchedulerDesc = 'SchedulerDesc' in params ? params.SchedulerDesc : null;
        this.InCharge = 'InCharge' in params ? params.InCharge : null;
        this.CycleType = 'CycleType' in params ? params.CycleType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.TryLimit = 'TryLimit' in params ? params.TryLimit : null;
        this.Tries = 'Tries' in params ? params.Tries : null;
        this.SchedulerDateTime = 'SchedulerDateTime' in params ? params.SchedulerDateTime : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;

    }
}

/**
 * CreateTaskAlarmRegular返回参数结构体
 * @class
 */
class CreateTaskAlarmRegularResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警ID
         * @type {number || null}
         */
        this.AlarmId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRuleTemplate请求参数结构体
 * @class
 */
class DeleteRuleTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 模版Id列表
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * 元数据表详细信息
 * @class
 */
class TableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 表名称
注意：此字段可能返回 null，表示取不到有效值。
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
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;

    }
}

/**
 * DescribeProject请求参数结构体
 * @class
 */
class DescribeProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id。一般使用项目Id来查询，与projectName必须存在一个。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 是否展示关联集群信息
         * @type {boolean || null}
         */
        this.DescribeClusters = null;

        /**
         * 是否展示关联执行组的信息，仅部分信息。
         * @type {boolean || null}
         */
        this.DescribeExecutors = null;

        /**
         * 默认不展示项目管理员信息
         * @type {boolean || null}
         */
        this.DescribeAdminUsers = null;

        /**
         * 默认不统计项目人员数量
         * @type {boolean || null}
         */
        this.DescribeMemberCount = null;

        /**
         * 默认不查询创建者的信息
         * @type {boolean || null}
         */
        this.DescribeCreator = null;

        /**
         * 项目名只在租户内唯一，一般用来转化为项目ID。
         * @type {string || null}
         */
        this.ProjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DescribeClusters = 'DescribeClusters' in params ? params.DescribeClusters : null;
        this.DescribeExecutors = 'DescribeExecutors' in params ? params.DescribeExecutors : null;
        this.DescribeAdminUsers = 'DescribeAdminUsers' in params ? params.DescribeAdminUsers : null;
        this.DescribeMemberCount = 'DescribeMemberCount' in params ? params.DescribeMemberCount : null;
        this.DescribeCreator = 'DescribeCreator' in params ? params.DescribeCreator : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * CreateIntegrationTask返回参数结构体
 * @class
 */
class CreateIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
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
 * DescribeIntegrationTasks返回参数结构体
 * @class
 */
class DescribeIntegrationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationTaskInfo> || null}
         */
        this.TaskInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskInfoSet) {
            this.TaskInfoSet = new Array();
            for (let z in params.TaskInfoSet) {
                let obj = new IntegrationTaskInfo();
                obj.deserialize(params.TaskInfoSet[z]);
                this.TaskInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmReceiver请求参数结构体
 * @class
 */
class DescribeAlarmReceiverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警ID
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * 当前页
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页记录数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 消息ID
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * 类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 告警接收人ID(逗号分隔)
         * @type {string || null}
         */
        this.AlarmRecipient = null;

        /**
         * 告警接收人姓名(逗号分隔)
         * @type {string || null}
         */
        this.AlarmRecipientName = null;

        /**
         * 告警时间
         * @type {string || null}
         */
        this.AlarmTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.AlarmRecipient = 'AlarmRecipient' in params ? params.AlarmRecipient : null;
        this.AlarmRecipientName = 'AlarmRecipientName' in params ? params.AlarmRecipientName : null;
        this.AlarmTime = 'AlarmTime' in params ? params.AlarmTime : null;

    }
}

/**
 * 集成离线任务实例信息
 * @class
 */
class SchedulerTaskInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 实例运行时间
         * @type {string || null}
         */
        this.CurRunDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;

    }
}

/**
 * UpdateInLongAgent返回参数结构体
 * @class
 */
class UpdateInLongAgentResponse extends  AbstractModel {
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
 * ModifyWorkflowInfo请求参数结构体
 * @class
 */
class ModifyWorkflowInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 工作流id
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 责任人
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 责任人id
         * @type {string || null}
         */
        this.OwnerId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.WorkflowDesc = null;

        /**
         * 工作流名称
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 所属文件夹id
         * @type {string || null}
         */
        this.FolderId = null;

        /**
         * 工作流所属用户分组id  若有多个,分号隔开: a;b;c
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 工作流所属用户分组名称  若有多个,分号隔开: a;b;c
         * @type {string || null}
         */
        this.UserGroupName = null;

        /**
         * 工作流参数列表
         * @type {Array.<ParamInfo> || null}
         */
        this.WorkflowParams = null;

        /**
         * 用于配置优化参数（线程、内存、CPU核数等），仅作用于Spark SQL节点。多个参数用英文分号分隔。
         * @type {Array.<GeneralTaskParam> || null}
         */
        this.GeneralTaskParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.OwnerId = 'OwnerId' in params ? params.OwnerId : null;
        this.WorkflowDesc = 'WorkflowDesc' in params ? params.WorkflowDesc : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.UserGroupName = 'UserGroupName' in params ? params.UserGroupName : null;

        if (params.WorkflowParams) {
            this.WorkflowParams = new Array();
            for (let z in params.WorkflowParams) {
                let obj = new ParamInfo();
                obj.deserialize(params.WorkflowParams[z]);
                this.WorkflowParams.push(obj);
            }
        }

        if (params.GeneralTaskParams) {
            this.GeneralTaskParams = new Array();
            for (let z in params.GeneralTaskParams) {
                let obj = new GeneralTaskParam();
                obj.deserialize(params.GeneralTaskParams[z]);
                this.GeneralTaskParams.push(obj);
            }
        }

    }
}

/**
 * 提交工作流实体
 * @class
 */
class SubmitWorkflow extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被提交的任务id集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 执行结果
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 执行情况备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorDesc = null;

        /**
         * 执行情况id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrorDesc = 'ErrorDesc' in params ? params.ErrorDesc : null;
        this.ErrorId = 'ErrorId' in params ? params.ErrorId : null;

    }
}

/**
 * BatchResumeIntegrationTasks请求参数结构体
 * @class
 */
class BatchResumeIntegrationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeFolderList请求参数结构体
 * @class
 */
class DescribeFolderListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件夹ID
         * @type {string || null}
         */
        this.ParentsFolderId = null;

        /**
         * 关键字
         * @type {string || null}
         */
        this.KeyWords = null;

        /**
         * 页码，默认1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页大小，默认10
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ParentsFolderId = 'ParentsFolderId' in params ? params.ParentsFolderId : null;
        this.KeyWords = 'KeyWords' in params ? params.KeyWords : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DeleteTaskAlarmRegular返回参数结构体
 * @class
 */
class DeleteTaskAlarmRegularResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除结果(true表示删除成功，false表示删除失败)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleGroupSubscription请求参数结构体
 * @class
 */
class DescribeRuleGroupSubscriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组ID
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeInLongAgentList返回参数结构体
 * @class
 */
class DescribeInLongAgentListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集器信息列表
         * @type {Array.<InLongAgentDetail> || null}
         */
        this.Items = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 每页记录数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总页数
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InLongAgentDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文件夹信息
 * @class
 */
class Folder extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 文件夹名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 所属项目id
         * @type {string || null}
         */
        this.ProjectId = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateTask返回参数结构体
 * @class
 */
class CreateTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CommonId || null}
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
            let obj = new CommonId();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表质量详情
 * @class
 */
class TableQualityDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 表id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 表名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表责任人ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OwnerUserId = null;

        /**
         * 表责任人名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerUserName = null;

        /**
         * 库得分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DatabaseScore = null;

        /**
         * 表得分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TableScore = null;

        /**
         * 表环比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastPeriodRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.OwnerUserId = 'OwnerUserId' in params ? params.OwnerUserId : null;
        this.OwnerUserName = 'OwnerUserName' in params ? params.OwnerUserName : null;
        this.DatabaseScore = 'DatabaseScore' in params ? params.DatabaseScore : null;
        this.TableScore = 'TableScore' in params ? params.TableScore : null;
        this.LastPeriodRatio = 'LastPeriodRatio' in params ? params.LastPeriodRatio : null;

    }
}

/**
 * BatchStopIntegrationTasks返回参数结构体
 * @class
 */
class BatchStopIntegrationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 采集器详细信息
 * @class
 */
class InLongAgentDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * Agent Name
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * Agent状态(running运行中，initializing 操作中，failed心跳异常)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Agent状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 集群类型，1：TKE Agent，2：BOSS SDK，默认：1
         * @type {number || null}
         */
        this.AgentType = null;

        /**
         * 采集来源
         * @type {string || null}
         */
        this.Source = null;

        /**
         * VPC
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集成资源组Id
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

        /**
         * 集成资源组名称
         * @type {string || null}
         */
        this.ExecutorGroupName = null;

        /**
         * 关联任务数
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * 采集器组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentGroupId = null;

        /**
         * agent状态统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CvmAgentStatus> || null}
         */
        this.CvmAgentStatusList = null;

        /**
         * agent数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AgentTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.AgentType = 'AgentType' in params ? params.AgentType : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;
        this.ExecutorGroupName = 'ExecutorGroupName' in params ? params.ExecutorGroupName : null;
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.AgentGroupId = 'AgentGroupId' in params ? params.AgentGroupId : null;

        if (params.CvmAgentStatusList) {
            this.CvmAgentStatusList = new Array();
            for (let z in params.CvmAgentStatusList) {
                let obj = new CvmAgentStatus();
                obj.deserialize(params.CvmAgentStatusList[z]);
                this.CvmAgentStatusList.push(obj);
            }
        }
        this.AgentTotal = 'AgentTotal' in params ? params.AgentTotal : null;

    }
}

/**
 * ModifyDataSource请求参数结构体
 * @class
 */
class ModifyDataSourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源名称，在相同SpaceName下，数据源名称不能为空
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据源类别：绑定引擎、绑定数据库
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 数据源类型:枚举值
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据源ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 业务侧数据源的配置信息扩展
         * @type {string || null}
         */
        this.BizParams = null;

        /**
         * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
         * @type {string || null}
         */
        this.Params = null;

        /**
         * 数据源描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据源展示名，为了可视化查看
         * @type {string || null}
         */
        this.Display = null;

        /**
         * 若数据源列表为绑定数据库，则为db名称
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据源引擎的实例ID，如CDB实例ID
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 数据源数据源的可见性，1为可见、0为不可见。默认为1
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 数据源所属的业务空间名称
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否采集
         * @type {string || null}
         */
        this.Collect = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.OwnerProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.OwnerProjectName = null;

        /**
         * 项目中文名
         * @type {string || null}
         */
        this.OwnerProjectIdent = null;

        /**
         * cos bucket
         * @type {string || null}
         */
        this.COSBucket = null;

        /**
         * cos region
         * @type {string || null}
         */
        this.COSRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.BizParams = 'BizParams' in params ? params.BizParams : null;
        this.Params = 'Params' in params ? params.Params : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Display = 'Display' in params ? params.Display : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Collect = 'Collect' in params ? params.Collect : null;
        this.OwnerProjectId = 'OwnerProjectId' in params ? params.OwnerProjectId : null;
        this.OwnerProjectName = 'OwnerProjectName' in params ? params.OwnerProjectName : null;
        this.OwnerProjectIdent = 'OwnerProjectIdent' in params ? params.OwnerProjectIdent : null;
        this.COSBucket = 'COSBucket' in params ? params.COSBucket : null;
        this.COSRegion = 'COSRegion' in params ? params.COSRegion : null;

    }
}

/**
 * DeleteIntegrationNode返回参数结构体
 * @class
 */
class DeleteIntegrationNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除返回是否成功标识
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CommitRuleGroupExecResult请求参数结构体
 * @class
 */
class CommitRuleGroupExecResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * preject id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * rule group exec id
         * @type {number || null}
         */
        this.RuleGroupExecId = null;

        /**
         * group exec state
         * @type {string || null}
         */
        this.RuleGroupState = null;

        /**
         * runner rule exec result list
         * @type {Array.<RunnerRuleExecResult> || null}
         */
        this.RuleExecResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleGroupExecId = 'RuleGroupExecId' in params ? params.RuleGroupExecId : null;
        this.RuleGroupState = 'RuleGroupState' in params ? params.RuleGroupState : null;

        if (params.RuleExecResults) {
            this.RuleExecResults = new Array();
            for (let z in params.RuleExecResults) {
                let obj = new RunnerRuleExecResult();
                obj.deserialize(params.RuleExecResults[z]);
                this.RuleExecResults.push(obj);
            }
        }

    }
}

/**
 * DescribeDataSourceInfoList请求参数结构体
 * @class
 */
class DescribeDataSourceInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 可选过滤条件，Filter可选配置(参考): "Name": { "type": "string", "description": "数据源名称" }, "Type": { "type": "string", "description": "类型" }, "ClusterId": { "type": "string", "description": "集群id" }, "CategoryId": { "type": "string", "description": "分类，项目或空间id" }
         * @type {Filter || null}
         */
        this.Filters = null;

        /**
         * 排序配置
         * @type {OrderField || null}
         */
        this.OrderFields = null;

        /**
         * 数据源类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据源名称过滤用
         * @type {string || null}
         */
        this.DatasourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            let obj = new Filter();
            obj.deserialize(params.Filters)
            this.Filters = obj;
        }

        if (params.OrderFields) {
            let obj = new OrderField();
            obj.deserialize(params.OrderFields)
            this.OrderFields = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.DatasourceName = 'DatasourceName' in params ? params.DatasourceName : null;

    }
}

/**
 * UpdateInLongAgent请求参数结构体
 * @class
 */
class UpdateInLongAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集器ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * WeData项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 采集器名称
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * 集成资源组ID
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;

    }
}

/**
 * DescribeRuleGroupExecResultsByPageWithoutAuth返回参数结构体
 * @class
 */
class DescribeRuleGroupExecResultsByPageWithoutAuthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组执行结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupExecResultPage || null}
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
            let obj = new RuleGroupExecResultPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationNode请求参数结构体
 * @class
 */
class DescribeIntegrationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * SetTaskAlarmNew返回参数结构体
 * @class
 */
class SetTaskAlarmNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回批量操作成功个数、失败个数、操作总数
         * @type {BatchOperateResult || null}
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
            let obj = new BatchOperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatasource返回参数结构体
 * @class
 */
class DescribeDatasourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DataSourceInfo || null}
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
            let obj = new DataSourceInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则执行配置
 * @class
 */
class RuleExecConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算队列名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 执行资源组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;

    }
}

/**
 * SuspendIntegrationTask返回参数结构体
 * @class
 */
class SuspendIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功与否标识
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 通用记录字段
 * @class
 */
class RecordField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeQualityScore返回参数结构体
 * @class
 */
class DescribeQualityScoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质量评分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QualityScore || null}
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
            let obj = new QualityScore();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRulesByPage返回参数结构体
 * @class
 */
class DescribeRulesByPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则质量列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RulePage || null}
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
            let obj = new RulePage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 采集器状态统计
 * @class
 */
class CvmAgentStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * agent状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 对应状态的agent总数
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeRuleTablesByPage请求参数结构体
 * @class
 */
class DescribeRuleTablesByPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序条件
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }

    }
}

/**
 * 质量概览表排行元素
 * @class
 */
class TopTableStatItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表Id
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 数
         * @type {number || null}
         */
        this.Cnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.Cnt = 'Cnt' in params ? params.Cnt : null;

    }
}

/**
 * DeleteRule返回参数结构体
 * @class
 */
class DeleteRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否删除成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataSourceInfoList返回参数结构体
 * @class
 */
class DescribeDataSourceInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据源信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DatasourceBaseInfo> || null}
         */
        this.DatasourceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DatasourceSet) {
            this.DatasourceSet = new Array();
            for (let z in params.DatasourceSet) {
                let obj = new DatasourceBaseInfo();
                obj.deserialize(params.DatasourceSet[z]);
                this.DatasourceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRelatedInstances返回参数结构体
 * @class
 */
class DescribeRelatedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {DescribeTaskInstancesData || null}
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
            let obj = new DescribeTaskInstancesData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckIntegrationTaskNameExists请求参数结构体
 * @class
 */
class CheckIntegrationTaskNameExistsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 同步类型1.单表同步，2.解决方案
         * @type {number || null}
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
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SyncType = 'SyncType' in params ? params.SyncType : null;

    }
}

/**
 * CheckIntegrationNodeNameExists请求参数结构体
 * @class
 */
class CheckIntegrationNodeNameExistsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 节点ID
         * @type {number || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * MakeUpTasksNew请求参数结构体
 * @class
 */
class MakeUpTasksNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 补录的当前任务的taskId数组
         * @type {Array.<string> || null}
         */
        this.TaskIdList = null;

        /**
         * 补录开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 补录结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 补录选项标识，1表示当前任务；2表示当前及下游任务；3表示下游任务
         * @type {number || null}
         */
        this.MakeUpType = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * true: 检查父任务实例状态；false: 不检查父任务实例状态
         * @type {boolean || null}
         */
        this.CheckParent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIdList = 'TaskIdList' in params ? params.TaskIdList : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MakeUpType = 'MakeUpType' in params ? params.MakeUpType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CheckParent = 'CheckParent' in params ? params.CheckParent : null;

    }
}

/**
 * DescribeDimensionScore返回参数结构体
 * @class
 */
class DescribeDimensionScoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度评分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DimensionScore || null}
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
            let obj = new DimensionScore();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitWorkflow返回参数结构体
 * @class
 */
class SubmitWorkflowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行结果
         * @type {SubmitWorkflow || null}
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
            let obj = new SubmitWorkflow();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrganizationalFunctions返回参数结构体
 * @class
 */
class DescribeOrganizationalFunctionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrganizationalFunction> || null}
         */
        this.Content = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new OrganizationalFunction();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataTypes返回参数结构体
 * @class
 */
class DescribeDataTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段类型列表。
         * @type {Array.<Label> || null}
         */
        this.TypeInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TypeInfoSet) {
            this.TypeInfoSet = new Array();
            for (let z in params.TypeInfoSet) {
                let obj = new Label();
                obj.deserialize(params.TypeInfoSet[z]);
                this.TypeInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitCustomFunction请求参数结构体
 * @class
 */
class SubmitCustomFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数唯一标识
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 集群实例 ID
         * @type {string || null}
         */
        this.ClusterIdentifier = null;

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.ClusterIdentifier = 'ClusterIdentifier' in params ? params.ClusterIdentifier : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeDataTypes请求参数结构体
 * @class
 */
class DescribeDataTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源类型，MYSQL|KAFKA等
         * @type {string || null}
         */
        this.DatasourceType = null;

        /**
         * 项目ID。
         * @type {string || null}
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
        this.DatasourceType = 'DatasourceType' in params ? params.DatasourceType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CheckDuplicateRuleName返回参数结构体
 * @class
 */
class CheckDuplicateRuleNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称是否重复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRule请求参数结构体
 * @class
 */
class DeleteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质量规则ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 实时任务实例当前的节点信息
 * @class
 */
class RealTimeTaskInstanceNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 实时任务实例节点信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceNodeInfo> || null}
         */
        this.InstanceNodeInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.InstanceNodeInfoList) {
            this.InstanceNodeInfoList = new Array();
            for (let z in params.InstanceNodeInfoList) {
                let obj = new InstanceNodeInfo();
                obj.deserialize(params.InstanceNodeInfoList[z]);
                this.InstanceNodeInfoList.push(obj);
            }
        }

    }
}

/**
 * GetOfflineInstanceList请求参数结构体
 * @class
 */
class GetOfflineInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第几页
         * @type {string || null}
         */
        this.PageIndex = null;

        /**
         * 每页几条
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 无
         * @type {SearchCondition || null}
         */
        this.SearchCondition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.SearchCondition) {
            let obj = new SearchCondition();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

    }
}

/**
 * DescribeStreamTaskLogList返回参数结构体
 * @class
 */
class DescribeStreamTaskLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否是全量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * 日志集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogContentInfo> || null}
         */
        this.LogContentList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListOver = 'ListOver' in params ? params.ListOver : null;

        if (params.LogContentList) {
            this.LogContentList = new Array();
            for (let z in params.LogContentList) {
                let obj = new LogContentInfo();
                obj.deserialize(params.LogContentList[z]);
                this.LogContentList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteWorkflowNew返回参数结构体
 * @class
 */
class DeleteWorkflowNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回删除结果
         * @type {OperateResult || null}
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
            let obj = new OperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleGroupExecResultsByPage返回参数结构体
 * @class
 */
class DescribeRuleGroupExecResultsByPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组执行结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupExecResultPage || null}
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
            let obj = new RuleGroupExecResultPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleGroupExecResultsByPageWithoutAuth请求参数结构体
 * @class
 */
class DescribeRuleGroupExecResultsByPageWithoutAuthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件，指定表ID过滤字段为 TableIds
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 离线实例
 * @class
 */
class OfflineInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateUin = null;

        /**
         * 操作账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatorUin = null;

        /**
         * 主账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkspaceId = null;

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 数据时间
         * @type {string || null}
         */
        this.CurRunDate = null;

        /**
         * 下发时间
         * @type {string || null}
         */
        this.IssueId = null;

        /**
         * 资源组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InlongTaskId = null;

        /**
         * 资源组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroup = null;

        /**
         * 实例类型
         * @type {number || null}
         */
        this.TaskRunType = null;

        /**
         * 实例状态
         * @type {string || null}
         */
        this.State = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 唯一key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.WorkspaceId = 'WorkspaceId' in params ? params.WorkspaceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;
        this.IssueId = 'IssueId' in params ? params.IssueId : null;
        this.InlongTaskId = 'InlongTaskId' in params ? params.InlongTaskId : null;
        this.ResourceGroup = 'ResourceGroup' in params ? params.ResourceGroup : null;
        this.TaskRunType = 'TaskRunType' in params ? params.TaskRunType : null;
        this.State = 'State' in params ? params.State : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InstanceKey = 'InstanceKey' in params ? params.InstanceKey : null;

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
         * Json 结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据质量规则分页
 * @class
 */
class RulePage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Rule> || null}
         */
        this.Items = null;

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
                let obj = new Rule();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * DeleteIntegrationNode请求参数结构体
 * @class
 */
class DeleteIntegrationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyIntegrationNode返回参数结构体
 * @class
 */
class ModifyIntegrationNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationStatisticsTaskStatusTrend请求参数结构体
 * @class
 */
class DescribeIntegrationStatisticsTaskStatusTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型（实时：201，离线：202）
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 查询日期
         * @type {string || null}
         */
        this.QueryDate = null;

        /**
         * 资源组id
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.QueryDate = 'QueryDate' in params ? params.QueryDate : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;

    }
}

/**
 * DescribeRuleHistoryByPage返回参数结构体
 * @class
 */
class DescribeRuleHistoryByPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组操作历史列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleHistoryPage || null}
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
            let obj = new RuleHistoryPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnlockIntegrationTask请求参数结构体
 * @class
 */
class UnlockIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyDimensionWeight返回参数结构体
 * @class
 */
class ModifyDimensionWeightResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新权重是否成功
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskAlarmRegular返回参数结构体
 * @class
 */
class ModifyTaskAlarmRegularResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 判断是否修改成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRule返回参数结构体
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Rule || null}
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
            let obj = new Rule();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskLinks返回参数结构体
 * @class
 */
class ModifyTaskLinksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchMakeUpIntegrationTasks请求参数结构体
 * @class
 */
class BatchMakeUpIntegrationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 补数据开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 补数据结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DeleteOfflineTask请求参数结构体
 * @class
 */
class DeleteOfflineTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作者name
         * @type {string || null}
         */
        this.OperatorName = null;

        /**
         * 项目/工作空间id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 虚拟任务标记(跟之前调度接口保持一致默认false)
         * @type {boolean || null}
         */
        this.VirtualFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OperatorName = 'OperatorName' in params ? params.OperatorName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.VirtualFlag = 'VirtualFlag' in params ? params.VirtualFlag : null;

    }
}

/**
 * 权重信息
 * @class
 */
class WeightInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权重
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 维度类型 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
         * @type {number || null}
         */
        this.QualityDim = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.QualityDim = 'QualityDim' in params ? params.QualityDim : null;

    }
}

/**
 * DescribeInLongAgentVpcList请求参数结构体
 * @class
 */
class DescribeInLongAgentVpcListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * WeData项目ID
         * @type {string || null}
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
 * 规则执行结果导出结果
 * @class
 */
class RuleExecExportResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则执行id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleExecId = null;

        /**
         * 导出任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExportTaskInfo> || null}
         */
        this.ExportTasks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleExecId = 'RuleExecId' in params ? params.RuleExecId : null;

        if (params.ExportTasks) {
            this.ExportTasks = new Array();
            for (let z in params.ExportTasks) {
                let obj = new ExportTaskInfo();
                obj.deserialize(params.ExportTasks[z]);
                this.ExportTasks.push(obj);
            }
        }

    }
}

/**
 * DescribeDatabaseInfoList返回参数结构体
 * @class
 */
class DescribeDatabaseInfoListResponse extends  AbstractModel {
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
 * 内容详情
 * @class
 */
class CommonContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 详情内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeTableScoreTrend返回参数结构体
 * @class
 */
class DescribeTableScoreTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表得分趋势
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QualityScoreTrend || null}
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
            let obj = new QualityScoreTrend();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIntegrationNode请求参数结构体
 * @class
 */
class ModifyIntegrationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成节点信息
         * @type {IntegrationNodeInfo || null}
         */
        this.NodeInfo = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 区分画布模式和表单模式
         * @type {number || null}
         */
        this.TaskMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeInfo) {
            let obj = new IntegrationNodeInfo();
            obj.deserialize(params.NodeInfo)
            this.NodeInfo = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskMode = 'TaskMode' in params ? params.TaskMode : null;

    }
}

/**
 * ModifyMonitorStatus返回参数结构体
 * @class
 */
class ModifyMonitorStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控状态修改成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleTemplatesByPage返回参数结构体
 * @class
 */
class DescribeRuleTemplatesByPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {RuleTemplatePage || null}
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
            let obj = new RuleTemplatePage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例日志实体
 * @class
 */
class InstanceLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 数据时间
         * @type {string || null}
         */
        this.CurRunDate = null;

        /**
         * 尝试运行次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tries = null;

        /**
         * 日志更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastUpdate = null;

        /**
         * 日志所在节点
         * @type {string || null}
         */
        this.BrokerIp = null;

        /**
         * 文件名  含全路径
         * @type {string || null}
         */
        this.OriginFileName = null;

        /**
         * 日志创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例日志类型, run: 运行; kill: 终止
         * @type {string || null}
         */
        this.InstanceLogType = null;

        /**
         * 运行耗时
         * @type {number || null}
         */
        this.CostTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;
        this.Tries = 'Tries' in params ? params.Tries : null;
        this.LastUpdate = 'LastUpdate' in params ? params.LastUpdate : null;
        this.BrokerIp = 'BrokerIp' in params ? params.BrokerIp : null;
        this.OriginFileName = 'OriginFileName' in params ? params.OriginFileName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.InstanceLogType = 'InstanceLogType' in params ? params.InstanceLogType : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;

    }
}

/**
 * DescribeTemplateDimCount返回参数结构体
 * @class
 */
class DescribeTemplateDimCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度统计结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DimensionCount> || null}
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
                let obj = new DimensionCount();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFunctionTypes请求参数结构体
 * @class
 */
class DescribeFunctionTypesRequest extends  AbstractModel {
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
 * RestartInLongAgent请求参数结构体
 * @class
 */
class RestartInLongAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集器ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * WeData项目ID
         * @type {string || null}
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
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * BatchDeleteTasksNew请求参数结构体
 * @class
 */
class BatchDeleteTasksNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量删除的任务TaskId
         * @type {Array.<string> || null}
         */
        this.TaskIdList = null;

        /**
         * true : 删除后下游任务可正常运行
false：删除后下游任务不可运行
         * @type {boolean || null}
         */
        this.DeleteMode = null;

        /**
         * true：通知下游任务责任人
false:  不通知下游任务责任人
         * @type {boolean || null}
         */
        this.EnableNotify = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.TaskIdList = 'TaskIdList' in params ? params.TaskIdList : null;
        this.DeleteMode = 'DeleteMode' in params ? params.DeleteMode : null;
        this.EnableNotify = 'EnableNotify' in params ? params.EnableNotify : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 维度统计业务视图
 * @class
 */
class DimensionCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度类型1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DimType = null;

        /**
         * 统计值
注意：此字段可能返回 null，表示取不到有效值。
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
        this.DimType = 'DimType' in params ? params.DimType : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeInstanceLog返回参数结构体
 * @class
 */
class DescribeInstanceLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInLongAgent返回参数结构体
 * @class
 */
class DeleteInLongAgentResponse extends  AbstractModel {
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
 * ModifyMonitorStatus请求参数结构体
 * @class
 */
class ModifyMonitorStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则组ID
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 监控开关状态
         * @type {boolean || null}
         */
        this.MonitorStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;

    }
}

/**
 * DeleteFolder请求参数结构体
 * @class
 */
class DeleteFolderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件夹ID
         * @type {string || null}
         */
        this.FolderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;

    }
}

/**
 * DescribeIntegrationTask请求参数结构体
 * @class
 */
class DescribeIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务类型：201. stream,   202. offline
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * DescribeRulesByPage请求参数结构体
 * @class
 */
class DescribeRulesByPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeTopTableStat返回参数结构体
 * @class
 */
class DescribeTopTableStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {TopTableStat || null}
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
            let obj = new TopTableStat();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据质量生产调度任务业务实体
 * @class
 */
class ProdSchedulerTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生产调度任务工作流ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 生产调度任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 生产调度任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

    }
}

/**
 * 上游节点字段信息
 * @class
 */
class SourceFieldInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名称
         * @type {string || null}
         */
        this.FieldName = null;

        /**
         * 字段类型
         * @type {string || null}
         */
        this.FieldType = null;

        /**
         * 字段别名
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FieldName = 'FieldName' in params ? params.FieldName : null;
        this.FieldType = 'FieldType' in params ? params.FieldType : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * FreezeTasksByMultiWorkflow返回参数结构体
 * @class
 */
class FreezeTasksByMultiWorkflowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果
         * @type {OperateResult || null}
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
            let obj = new OperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SaveCustomFunction返回参数结构体
 * @class
 */
class SaveCustomFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 操作结果
 * @class
 */
class OperateResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果；true表示成功；false表示失败
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 错误编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorId = null;

        /**
         * 操作信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrorId = 'ErrorId' in params ? params.ErrorId : null;
        this.ErrorDesc = 'ErrorDesc' in params ? params.ErrorDesc : null;

    }
}

/**
 * CreateTask请求参数结构体
 * @class
 */
class CreateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 工作流id
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 扩展属性
         * @type {Array.<TaskExtInfo> || null}
         */
        this.TaskExt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

        if (params.TaskExt) {
            this.TaskExt = new Array();
            for (let z in params.TaskExt) {
                let obj = new TaskExtInfo();
                obj.deserialize(params.TaskExt[z]);
                this.TaskExt.push(obj);
            }
        }

    }
}

/**
 * ModifyDimensionWeight请求参数结构体
 * @class
 */
class ModifyDimensionWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权重信息列表
         * @type {Array.<WeightInfo> || null}
         */
        this.WeightInfoList = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 是否重刷历史数据
         * @type {boolean || null}
         */
        this.Refresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WeightInfoList) {
            this.WeightInfoList = new Array();
            for (let z in params.WeightInfoList) {
                let obj = new WeightInfo();
                obj.deserialize(params.WeightInfoList[z]);
                this.WeightInfoList.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Refresh = 'Refresh' in params ? params.Refresh : null;

    }
}

/**
 * 简单Task信息
 * @class
 */
class SimpleTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.TaskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

    }
}

/**
 * CreateFolder返回参数结构体
 * @class
 */
class CreateFolderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件夹Id，null则创建失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CommonId || null}
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
            let obj = new CommonId();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealTimeTaskInstanceNodeInfo请求参数结构体
 * @class
 */
class DescribeRealTimeTaskInstanceNodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实时任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 工程id
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeTaskInstanceReportDetail返回参数结构体
 * @class
 */
class DescribeTaskInstanceReportDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务实例运行指标概览
         * @type {InstanceReportSummary || null}
         */
        this.Summary = null;

        /**
         * 任务实例读取节点运行指标
         * @type {InstanceReportReadNode || null}
         */
        this.ReadNode = null;

        /**
         * 任务实例写入节点运行指标
         * @type {InstanceReportWriteNode || null}
         */
        this.WriteNode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Summary) {
            let obj = new InstanceReportSummary();
            obj.deserialize(params.Summary)
            this.Summary = obj;
        }

        if (params.ReadNode) {
            let obj = new InstanceReportReadNode();
            obj.deserialize(params.ReadNode)
            this.ReadNode = obj;
        }

        if (params.WriteNode) {
            let obj = new InstanceReportWriteNode();
            obj.deserialize(params.WriteNode)
            this.WriteNode = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHiveTable返回参数结构体
 * @class
 */
class CreateHiveTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 建表是否成功
         * @type {boolean || null}
         */
        this.IsSuccess = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RuleTemplatePage 结果
 * @class
 */
class RuleTemplatePage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 模版列表
         * @type {Array.<RuleTemplate> || null}
         */
        this.Items = null;

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
                let obj = new RuleTemplate();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * ModifyDataSource返回参数结构体
 * @class
 */
class ModifyDataSourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMonitorsByPage请求参数结构体
 * @class
 */
class DescribeMonitorsByPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序条件
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * SubmitWorkflow请求参数结构体
 * @class
 */
class SubmitWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 工作流id
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 提交的版本备注
         * @type {string || null}
         */
        this.VersionRemark = null;

        /**
         * 是否启动调度
         * @type {boolean || null}
         */
        this.StartScheduling = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.VersionRemark = 'VersionRemark' in params ? params.VersionRemark : null;
        this.StartScheduling = 'StartScheduling' in params ? params.StartScheduling : null;

    }
}

/**
 * RerunInstances返回参数结构体
 * @class
 */
class RerunInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回实例批量终止结果
         * @type {OperateResult || null}
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
            let obj = new OperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskLockStatus返回参数结构体
 * @class
 */
class DescribeTaskLockStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务锁状态信息
         * @type {TaskLockStatus || null}
         */
        this.TaskLockStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskLockStatus) {
            let obj = new TaskLockStatus();
            obj.deserialize(params.TaskLockStatus)
            this.TaskLockStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartIntegrationTask返回参数结构体
 * @class
 */
class StartIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功与否标识
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchKillIntegrationTaskInstances请求参数结构体
 * @class
 */
class BatchKillIntegrationTaskInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例信息
         * @type {Array.<SchedulerTaskInstanceInfo> || null}
         */
        this.Instances = null;

        /**
         * 项目id
         * @type {string || null}
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new SchedulerTaskInstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 离线任务实例写入节点的运行指标
 * @class
 */
class InstanceReportWriteNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 数据来源
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalWriteRecords = null;

        /**
         * 总字节数
         * @type {number || null}
         */
        this.TotalWriteBytes = null;

        /**
         * 速度（条/秒）
         * @type {number || null}
         */
        this.RecordSpeed = null;

        /**
         * 吞吐（Byte/秒）
         * @type {number || null}
         */
        this.ByteSpeed = null;

        /**
         * 脏数据条数
         * @type {number || null}
         */
        this.TotalErrorRecords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.TotalWriteRecords = 'TotalWriteRecords' in params ? params.TotalWriteRecords : null;
        this.TotalWriteBytes = 'TotalWriteBytes' in params ? params.TotalWriteBytes : null;
        this.RecordSpeed = 'RecordSpeed' in params ? params.RecordSpeed : null;
        this.ByteSpeed = 'ByteSpeed' in params ? params.ByteSpeed : null;
        this.TotalErrorRecords = 'TotalErrorRecords' in params ? params.TotalErrorRecords : null;

    }
}

/**
 * 依赖配置
 * @class
 */
class DependencyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仅五种周期运行依赖配置： HOUR,DAY,WEEK,MONTH,YEAR,CRONTAB,MINUTE
         * @type {string || null}
         */
        this.DependConfType = null;

        /**
         * 依赖配置从属周期类型，CURRENT_HOUR，PREVIOUS_HOUR，CURRENT_DAY，PREVIOUS_DAY，PREVIOUS_WEEK，PREVIOUS_FRIDAY，PREVIOUS_WEEKEND，CURRENT_MONTH，PREVIOUS_MONTH，PREVIOUS_END_OF_MONTH
     * PREVIOUS_BEGIN_OF_MONTH，ALL_MONTH_OF_YEAR，ALL_DAY_OF_YEAR，CURRENT_YEAR，CURRENT，CURRENT_MINUTE，PREVIOUS_MINUTE_CYCLE，PREVIOUS_HOUR_CYCLE
         * @type {string || null}
         */
        this.SubordinateCyclicType = null;

        /**
         * WAITING，等待（默认策略）EXECUTING:执行
         * @type {string || null}
         */
        this.DependencyStrategy = null;

        /**
         * 父任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskInnerInfo || null}
         */
        this.ParentTask = null;

        /**
         * 子任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskInnerInfo || null}
         */
        this.SonTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DependConfType = 'DependConfType' in params ? params.DependConfType : null;
        this.SubordinateCyclicType = 'SubordinateCyclicType' in params ? params.SubordinateCyclicType : null;
        this.DependencyStrategy = 'DependencyStrategy' in params ? params.DependencyStrategy : null;

        if (params.ParentTask) {
            let obj = new TaskInnerInfo();
            obj.deserialize(params.ParentTask)
            this.ParentTask = obj;
        }

        if (params.SonTask) {
            let obj = new TaskInnerInfo();
            obj.deserialize(params.SonTask)
            this.SonTask = obj;
        }

    }
}

/**
 * RobAndLockIntegrationTask请求参数结构体
 * @class
 */
class RobAndLockIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务类型：201. stream,   202. offline
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * 规则组监控业务分页视图
 * @class
 */
class RuleGroupMonitorPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleGroupMonitor> || null}
         */
        this.Items = null;

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
                let obj = new RuleGroupMonitor();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * CommitExportTask返回参数结构体
 * @class
 */
class CommitExportTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 提交结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskInfo返回参数结构体
 * @class
 */
class ModifyTaskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行结果
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据监测情况结果
 * @class
 */
class DataCheckStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表总数
         * @type {number || null}
         */
        this.TableTotal = null;

        /**
         * 字段总数
         * @type {number || null}
         */
        this.ColumnTotal = null;

        /**
         * 表配置检测数
         * @type {number || null}
         */
        this.TableConfig = null;

        /**
         * 字段配置检测数
         * @type {number || null}
         */
        this.ColumnConfig = null;

        /**
         * 表实际检测数
         * @type {number || null}
         */
        this.TableExec = null;

        /**
         * 字段实际检测数
         * @type {number || null}
         */
        this.ColumnExec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableTotal = 'TableTotal' in params ? params.TableTotal : null;
        this.ColumnTotal = 'ColumnTotal' in params ? params.ColumnTotal : null;
        this.TableConfig = 'TableConfig' in params ? params.TableConfig : null;
        this.ColumnConfig = 'ColumnConfig' in params ? params.ColumnConfig : null;
        this.TableExec = 'TableExec' in params ? params.TableExec : null;
        this.ColumnExec = 'ColumnExec' in params ? params.ColumnExec : null;

    }
}

/**
 * CreateRule请求参数结构体
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则组Id
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据表ID
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 规则模板列表
         * @type {number || null}
         */
        this.RuleTemplateId = null;

        /**
         * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
         * @type {number || null}
         */
        this.QualityDim = null;

        /**
         * 源字段详细类型，int、string
         * @type {string || null}
         */
        this.SourceObjectDataTypeName = null;

        /**
         * 源字段名称
         * @type {string || null}
         */
        this.SourceObjectValue = null;

        /**
         * 检测范围 1.全表   2.条件扫描
         * @type {number || null}
         */
        this.ConditionType = null;

        /**
         * 条件扫描WHERE条件表达式
         * @type {string || null}
         */
        this.ConditionExpression = null;

        /**
         * 自定义SQL
         * @type {string || null}
         */
        this.CustomSql = null;

        /**
         * 报警触发条件
         * @type {CompareRule || null}
         */
        this.CompareRule = null;

        /**
         * 报警触发级别 1.低, 2.中, 3.高
         * @type {number || null}
         */
        this.AlarmLevel = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据源Id
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据库Id
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 目标库Id
         * @type {string || null}
         */
        this.TargetDatabaseId = null;

        /**
         * 目标表Id
         * @type {string || null}
         */
        this.TargetTableId = null;

        /**
         * 目标过滤条件表达式
         * @type {string || null}
         */
        this.TargetConditionExpr = null;

        /**
         * 源字段与目标字段关联条件on表达式
         * @type {string || null}
         */
        this.RelConditionExpr = null;

        /**
         * 自定义模版sql表达式字段替换参数
         * @type {RuleFieldConfig || null}
         */
        this.FieldConfig = null;

        /**
         * 目标字段名称  CITY
         * @type {string || null}
         */
        this.TargetObjectValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.RuleTemplateId = 'RuleTemplateId' in params ? params.RuleTemplateId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.QualityDim = 'QualityDim' in params ? params.QualityDim : null;
        this.SourceObjectDataTypeName = 'SourceObjectDataTypeName' in params ? params.SourceObjectDataTypeName : null;
        this.SourceObjectValue = 'SourceObjectValue' in params ? params.SourceObjectValue : null;
        this.ConditionType = 'ConditionType' in params ? params.ConditionType : null;
        this.ConditionExpression = 'ConditionExpression' in params ? params.ConditionExpression : null;
        this.CustomSql = 'CustomSql' in params ? params.CustomSql : null;

        if (params.CompareRule) {
            let obj = new CompareRule();
            obj.deserialize(params.CompareRule)
            this.CompareRule = obj;
        }
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.TargetDatabaseId = 'TargetDatabaseId' in params ? params.TargetDatabaseId : null;
        this.TargetTableId = 'TargetTableId' in params ? params.TargetTableId : null;
        this.TargetConditionExpr = 'TargetConditionExpr' in params ? params.TargetConditionExpr : null;
        this.RelConditionExpr = 'RelConditionExpr' in params ? params.RelConditionExpr : null;

        if (params.FieldConfig) {
            let obj = new RuleFieldConfig();
            obj.deserialize(params.FieldConfig)
            this.FieldConfig = obj;
        }
        this.TargetObjectValue = 'TargetObjectValue' in params ? params.TargetObjectValue : null;

    }
}

/**
 * CommitRuleGroupTask请求参数结构体
 * @class
 */
class CommitRuleGroupTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组ID
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 触发类型 1.手动触发 2.调度事中触发 3.周期调度触发
         * @type {number || null}
         */
        this.TriggerType = null;

        /**
         * 规则配置列表
         * @type {Array.<RuleConfig> || null}
         */
        this.ExecRuleConfig = null;

        /**
         * 执行配置
         * @type {RuleExecConfig || null}
         */
        this.ExecConfig = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;

        if (params.ExecRuleConfig) {
            this.ExecRuleConfig = new Array();
            for (let z in params.ExecRuleConfig) {
                let obj = new RuleConfig();
                obj.deserialize(params.ExecRuleConfig[z]);
                this.ExecRuleConfig.push(obj);
            }
        }

        if (params.ExecConfig) {
            let obj = new RuleExecConfig();
            obj.deserialize(params.ExecConfig)
            this.ExecConfig = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeTemplateHistory返回参数结构体
 * @class
 */
class DescribeTemplateHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleTemplateHistoryPage || null}
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
            let obj = new RuleTemplateHistoryPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleExecResults返回参数结构体
 * @class
 */
class DescribeRuleExecResultsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则执行结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleExecResultPage || null}
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
            let obj = new RuleExecResultPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 质量评分趋势
 * @class
 */
class QualityScoreTrend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 周期平均分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AverageScore = null;

        /**
         * 日评分列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DailyScoreInfo> || null}
         */
        this.DailyScoreList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AverageScore = 'AverageScore' in params ? params.AverageScore : null;

        if (params.DailyScoreList) {
            this.DailyScoreList = new Array();
            for (let z in params.DailyScoreList) {
                let obj = new DailyScoreInfo();
                obj.deserialize(params.DailyScoreList[z]);
                this.DailyScoreList.push(obj);
            }
        }

    }
}

/**
 * 实例请求实体
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 数据时间
         * @type {string || null}
         */
        this.CurRunDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;

    }
}

/**
 * 任务信息数据
 * @class
 */
class TaskInfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectIdent = null;

        /**
         * 任务状态，'Y','F','O','T','INVALID' 分别表示调度中、已停止、已暂停、停止中、已失效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 项目id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FolderName = null;

        /**
         * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FolderId = null;

        /**
         * 负责人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InCharge = null;

        /**
         * 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.VirtualFlag = null;

        /**
         * 延时实例生成时间(延时调度)，转换为分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * crontab表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CrontabExpression = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastUpdate = null;

        /**
         * 生效日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 执行时间左闭区间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutionStartTime = null;

        /**
         * 执行时间右闭区间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutionEndTime = null;

        /**
         * 周期类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CycleType = null;

        /**
         * 步长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CycleStep = null;

        /**
         * 延时执行时间（延时执行) 对应为 开始时间 状态为分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartupTime = null;

        /**
         * 重试等待时间,单位分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RetryWait = null;

        /**
         * 是否可重试
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Retriable = null;

        /**
         * 调度扩展信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskAction = null;

        /**
         * 运行次数限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TryLimit = null;

        /**
         * 运行优先级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunPriority = null;

        /**
         * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 指定的运行节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BrokerIp = null;

        /**
         * 集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 最小数据时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MinDateTime = null;

        /**
         * 最大数据时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MaxDateTime = null;

        /**
         * 是否自身依赖 是1 否2 并行3
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SelfDepend = null;

        /**
         * 扩展属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskExtInfo> || null}
         */
        this.TaskExt = null;

        /**
         * 任务备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Notes = null;

        /**
         * 队列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.YarnQueue = null;

        /**
         * 任务版本是否已提交
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Submit = null;

        /**
         * 最新调度计划变更时间 仅生产态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastSchedulerCommitTime = null;

        /**
         * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NormalizedJobStartTime = null;

        /**
         * 源数据源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceServer = null;

        /**
         * 创建者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Creater = null;

        /**
         * 分支，依赖关系，and/or, 默认and
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DependencyRel = null;

        /**
         * 是否支持工作流依赖 yes / no 默认 no
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DependencyWorkflow = null;

        /**
         * 任务参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ParamInfo> || null}
         */
        this.Params = null;

        /**
         * 最后修改的人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateUser = null;

        /**
         * 最后修改的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 最后修改的人Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateUserId = null;

        /**
         * 调度计划
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchedulerDesc = null;

        /**
         * 资源组信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroup = null;

        /**
         * 版本提交说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionDesc = null;

        /**
         * 真实工作流Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealWorkflowId = null;

        /**
         * 目标数据源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetServer = null;

        /**
         * 依赖配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DependencyConfig> || null}
         */
        this.DependencyConfigs = null;

        /**
         * 虚拟任务状态1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirtualTaskStatus = null;

        /**
         * 虚拟任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VirtualTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectIdent = 'ProjectIdent' in params ? params.ProjectIdent : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.FolderName = 'FolderName' in params ? params.FolderName : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;
        this.InCharge = 'InCharge' in params ? params.InCharge : null;
        this.VirtualFlag = 'VirtualFlag' in params ? params.VirtualFlag : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.CrontabExpression = 'CrontabExpression' in params ? params.CrontabExpression : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastUpdate = 'LastUpdate' in params ? params.LastUpdate : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ExecutionStartTime = 'ExecutionStartTime' in params ? params.ExecutionStartTime : null;
        this.ExecutionEndTime = 'ExecutionEndTime' in params ? params.ExecutionEndTime : null;
        this.CycleType = 'CycleType' in params ? params.CycleType : null;
        this.CycleStep = 'CycleStep' in params ? params.CycleStep : null;
        this.StartupTime = 'StartupTime' in params ? params.StartupTime : null;
        this.RetryWait = 'RetryWait' in params ? params.RetryWait : null;
        this.Retriable = 'Retriable' in params ? params.Retriable : null;
        this.TaskAction = 'TaskAction' in params ? params.TaskAction : null;
        this.TryLimit = 'TryLimit' in params ? params.TryLimit : null;
        this.RunPriority = 'RunPriority' in params ? params.RunPriority : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.BrokerIp = 'BrokerIp' in params ? params.BrokerIp : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.MinDateTime = 'MinDateTime' in params ? params.MinDateTime : null;
        this.MaxDateTime = 'MaxDateTime' in params ? params.MaxDateTime : null;
        this.SelfDepend = 'SelfDepend' in params ? params.SelfDepend : null;

        if (params.TaskExt) {
            this.TaskExt = new Array();
            for (let z in params.TaskExt) {
                let obj = new TaskExtInfo();
                obj.deserialize(params.TaskExt[z]);
                this.TaskExt.push(obj);
            }
        }
        this.Notes = 'Notes' in params ? params.Notes : null;
        this.YarnQueue = 'YarnQueue' in params ? params.YarnQueue : null;
        this.Submit = 'Submit' in params ? params.Submit : null;
        this.LastSchedulerCommitTime = 'LastSchedulerCommitTime' in params ? params.LastSchedulerCommitTime : null;
        this.NormalizedJobStartTime = 'NormalizedJobStartTime' in params ? params.NormalizedJobStartTime : null;
        this.SourceServer = 'SourceServer' in params ? params.SourceServer : null;
        this.Creater = 'Creater' in params ? params.Creater : null;
        this.DependencyRel = 'DependencyRel' in params ? params.DependencyRel : null;
        this.DependencyWorkflow = 'DependencyWorkflow' in params ? params.DependencyWorkflow : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new ParamInfo();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }
        this.UpdateUser = 'UpdateUser' in params ? params.UpdateUser : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.UpdateUserId = 'UpdateUserId' in params ? params.UpdateUserId : null;
        this.SchedulerDesc = 'SchedulerDesc' in params ? params.SchedulerDesc : null;
        this.ResourceGroup = 'ResourceGroup' in params ? params.ResourceGroup : null;
        this.VersionDesc = 'VersionDesc' in params ? params.VersionDesc : null;
        this.RealWorkflowId = 'RealWorkflowId' in params ? params.RealWorkflowId : null;
        this.TargetServer = 'TargetServer' in params ? params.TargetServer : null;

        if (params.DependencyConfigs) {
            this.DependencyConfigs = new Array();
            for (let z in params.DependencyConfigs) {
                let obj = new DependencyConfig();
                obj.deserialize(params.DependencyConfigs[z]);
                this.DependencyConfigs.push(obj);
            }
        }
        this.VirtualTaskStatus = 'VirtualTaskStatus' in params ? params.VirtualTaskStatus : null;
        this.VirtualTaskId = 'VirtualTaskId' in params ? params.VirtualTaskId : null;

    }
}

/**
 * TriggerEvent返回参数结构体
 * @class
 */
class TriggerEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BatchReturn || null}
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
            let obj = new BatchReturn();
            obj.deserialize(params.Data)
            this.Data = obj;
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
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeRuleDataSources请求参数结构体
 * @class
 */
class DescribeRuleDataSourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 数据来源Id
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据源类型
         * @type {Array.<number> || null}
         */
        this.DsTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.DsTypes = 'DsTypes' in params ? params.DsTypes : null;

    }
}

/**
 * 规则执行日志
 * @class
 */
class RuleExecLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否完成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Finished = null;

        /**
         * 内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Log = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Finished = 'Finished' in params ? params.Finished : null;
        this.Log = 'Log' in params ? params.Log : null;

    }
}

/**
 * DescribeResourceManagePathTrees请求参数结构体
 * @class
 */
class DescribeResourceManagePathTreesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 名字，供搜索
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 文件类型
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件路径
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 文件夹类型
         * @type {string || null}
         */
        this.DirType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.DirType = 'DirType' in params ? params.DirType : null;

    }
}

/**
 * DescribeTasksByPage返回参数结构体
 * @class
 */
class DescribeTasksByPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskInfoDataPage || null}
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
            let obj = new TaskInfoDataPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 函数资源信息
 * @class
 */
class FunctionResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源唯一标识
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源 MD5 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 默认是 hdfs
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Path = 'Path' in params ? params.Path : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeTableQualityDetails返回参数结构体
 * @class
 */
class DescribeTableQualityDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表质量分详情结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TableQualityDetailPage || null}
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
            let obj = new TableQualityDetailPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStandardRuleDetailInfoList请求参数结构体
 * @class
 */
class DescribeStandardRuleDetailInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 空间、项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 标准分类11编码映射 12数据过滤 13字符串转换 14数据元定义 15正则表达 16术语词典
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeDataSourceWithoutInfo返回参数结构体
 * @class
 */
class DescribeDataSourceWithoutInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataSourceInfo> || null}
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
                let obj = new DataSourceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则组调度信息
 * @class
 */
class RuleGroupSchedulerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 1:未配置 2:关联生产调度 3:离线周期检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MonitorType = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 循环类型简写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CycleType = null;

        /**
         * 循环步长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CycleStep = null;

        /**
         * 循环类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CycleDesc = null;

        /**
         * 离线周期检测下指定时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskAction = null;

        /**
         * 离线周期检测下延迟时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * 离线周期检测下注册到任务调度的任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CycleTaskId = null;

        /**
         * 关联生产调度下关联的任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssociateTaskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CycleType = 'CycleType' in params ? params.CycleType : null;
        this.CycleStep = 'CycleStep' in params ? params.CycleStep : null;
        this.CycleDesc = 'CycleDesc' in params ? params.CycleDesc : null;
        this.TaskAction = 'TaskAction' in params ? params.TaskAction : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.CycleTaskId = 'CycleTaskId' in params ? params.CycleTaskId : null;
        this.AssociateTaskIds = 'AssociateTaskIds' in params ? params.AssociateTaskIds : null;

    }
}

/**
 * 数据源对象
 * @class
 */
class DatasourceBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 若数据源列表为绑定数据库，则为db名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DatabaseNames = null;

        /**
         * 数据源描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据源ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 数据源引擎的实例ID，如CDB实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 数据源名称，在相同SpaceName下，数据源名称不能为空
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据源引擎所属区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 数据源类型:枚举值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据源所属的集群id
注意：此字段可能返回 null，表示取不到有效值。
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
        this.DatabaseNames = 'DatabaseNames' in params ? params.DatabaseNames : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeRuleTemplates请求参数结构体
 * @class
 */
class DescribeRuleTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模版类型 1.系统模版 2.自定义模版
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 1.常量 2.离线表级 2.离线字段级
         * @type {number || null}
         */
        this.SourceObjectType = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 源端对应的引擎类型
         * @type {Array.<number> || null}
         */
        this.SourceEngineTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.SourceObjectType = 'SourceObjectType' in params ? params.SourceObjectType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SourceEngineTypes = 'SourceEngineTypes' in params ? params.SourceEngineTypes : null;

    }
}

/**
 * RegisterEvent返回参数结构体
 * @class
 */
class RegisterEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BatchReturn || null}
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
            let obj = new BatchReturn();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 订阅接收人
 * @class
 */
class SubscribeReceiver extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接收人Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReceiverUserId = null;

        /**
         * 接收人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReceiverName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverUserId = 'ReceiverUserId' in params ? params.ReceiverUserId : null;
        this.ReceiverName = 'ReceiverName' in params ? params.ReceiverName : null;

    }
}

/**
 * DescribeQualityScoreTrend请求参数结构体
 * @class
 */
class DescribeQualityScoreTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计开始日期
         * @type {number || null}
         */
        this.StatisticsStartDate = null;

        /**
         * 统计结束日期
         * @type {number || null}
         */
        this.StatisticsEndDate = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 数据来源id
         * @type {string || null}
         */
        this.DatasourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatisticsStartDate = 'StatisticsStartDate' in params ? params.StatisticsStartDate : null;
        this.StatisticsEndDate = 'StatisticsEndDate' in params ? params.StatisticsEndDate : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;

    }
}

/**
 * 抢锁状态：是否可以抢锁和当前持锁人
 * @class
 */
class RobLockState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否可以抢锁
         * @type {boolean || null}
         */
        this.IsRob = null;

        /**
         * 当前持锁人
         * @type {string || null}
         */
        this.Locker = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsRob = 'IsRob' in params ? params.IsRob : null;
        this.Locker = 'Locker' in params ? params.Locker : null;

    }
}

/**
 * DescribeAlarmEvents请求参数结构体
 * @class
 */
class DescribeAlarmEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件(key可以是：AlarmLevel,AlarmIndicator,KeyWord)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段（AlarmTime）
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 类型(201表示实时，202表示离线)
         * @type {number || null}
         */
        this.TaskType = null;

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
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 当前页
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页记录数
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 质量检查对比结果
 * @class
 */
class CompareResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对比结果项列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CompareResultItem> || null}
         */
        this.Items = null;

        /**
         * 检测总行数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalRows = null;

        /**
         * 检测通过行数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PassRows = null;

        /**
         * 检测不通过行数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TriggerRows = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new CompareResultItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalRows = 'TotalRows' in params ? params.TotalRows : null;
        this.PassRows = 'PassRows' in params ? params.PassRows : null;
        this.TriggerRows = 'TriggerRows' in params ? params.TriggerRows : null;

    }
}

/**
 * 离线任务实例运行指标概览
 * @class
 */
class InstanceReportSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总读取记录数
         * @type {number || null}
         */
        this.TotalReadRecords = null;

        /**
         * 总读取字节数
         * @type {number || null}
         */
        this.TotalReadBytes = null;

        /**
         * 总写入记录数
         * @type {number || null}
         */
        this.TotalWriteRecords = null;

        /**
         * 总写入字节数
         * @type {number || null}
         */
        this.TotalWriteBytes = null;

        /**
         * 速率（条/秒）
         * @type {number || null}
         */
        this.RecordSpeed = null;

        /**
         * 流量（Byte/秒）
         * @type {number || null}
         */
        this.ByteSpeed = null;

        /**
         * 脏数据记录数
         * @type {number || null}
         */
        this.TotalErrorRecords = null;

        /**
         * 脏数据字节数
         * @type {number || null}
         */
        this.TotalErrorBytes = null;

        /**
         * 任务运行总时长
         * @type {number || null}
         */
        this.TotalRunDuration = null;

        /**
         * 任务开始运行时间
         * @type {string || null}
         */
        this.BeginRunTime = null;

        /**
         * 任务结束运行时间
         * @type {string || null}
         */
        this.EndRunTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalReadRecords = 'TotalReadRecords' in params ? params.TotalReadRecords : null;
        this.TotalReadBytes = 'TotalReadBytes' in params ? params.TotalReadBytes : null;
        this.TotalWriteRecords = 'TotalWriteRecords' in params ? params.TotalWriteRecords : null;
        this.TotalWriteBytes = 'TotalWriteBytes' in params ? params.TotalWriteBytes : null;
        this.RecordSpeed = 'RecordSpeed' in params ? params.RecordSpeed : null;
        this.ByteSpeed = 'ByteSpeed' in params ? params.ByteSpeed : null;
        this.TotalErrorRecords = 'TotalErrorRecords' in params ? params.TotalErrorRecords : null;
        this.TotalErrorBytes = 'TotalErrorBytes' in params ? params.TotalErrorBytes : null;
        this.TotalRunDuration = 'TotalRunDuration' in params ? params.TotalRunDuration : null;
        this.BeginRunTime = 'BeginRunTime' in params ? params.BeginRunTime : null;
        this.EndRunTime = 'EndRunTime' in params ? params.EndRunTime : null;

    }
}

/**
 * CheckAlarmRegularNameExist返回参数结构体
 * @class
 */
class CheckAlarmRegularNameExistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否重名
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitCustomFunction返回参数结构体
 * @class
 */
class SubmitCustomFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleTablesByPage返回参数结构体
 * @class
 */
class DescribeRuleTablesByPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupPage || null}
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
            let obj = new RuleGroupPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 速度值对象
 * @class
 */
class SpeedValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带毫秒的时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Speed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Speed = 'Speed' in params ? params.Speed : null;

    }
}

/**
 * 函数提交版本信息
 * @class
 */
class FunctionVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本号：V0 V1 V2
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 提交人 ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 变更类型：ADD、MODIFY
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 提交时间: UTC 秒数
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 提交人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 版本内容：json string 格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * 离线任务实例读取节点的运行指标
 * @class
 */
class InstanceReportReadNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 数据来源
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalReadRecords = null;

        /**
         * 总字节数
         * @type {number || null}
         */
        this.TotalReadBytes = null;

        /**
         * 速度（条/秒）
         * @type {number || null}
         */
        this.RecordSpeed = null;

        /**
         * 吞吐（Byte/秒）
         * @type {number || null}
         */
        this.ByteSpeed = null;

        /**
         * 脏数据条数
         * @type {number || null}
         */
        this.TotalErrorRecords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.TotalReadRecords = 'TotalReadRecords' in params ? params.TotalReadRecords : null;
        this.TotalReadBytes = 'TotalReadBytes' in params ? params.TotalReadBytes : null;
        this.RecordSpeed = 'RecordSpeed' in params ? params.RecordSpeed : null;
        this.ByteSpeed = 'ByteSpeed' in params ? params.ByteSpeed : null;
        this.TotalErrorRecords = 'TotalErrorRecords' in params ? params.TotalErrorRecords : null;

    }
}

/**
 * DescribeTaskAlarmRegulations请求参数结构体
 * @class
 */
class DescribeTaskAlarmRegulationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务类型(201代表实时任务，202代表离线任务)
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 当前页
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页记录数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件(name有RegularStatus、AlarmLevel、AlarmIndicator、RegularName)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序条件(RegularId)
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }

    }
}

/**
 * FreezeTasks返回参数结构体
 * @class
 */
class FreezeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作结果
         * @type {OperateResult || null}
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
            let obj = new OperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCustomFunction返回参数结构体
 * @class
 */
class CreateCustomFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskInfo请求参数结构体
 * @class
 */
class ModifyTaskInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 执行时间，单位分钟，天/周/月/年调度才有。比如天调度，每天的02:00点执行一次，delayTime就是120分钟
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * 启动时间
         * @type {number || null}
         */
        this.StartupTime = null;

        /**
         * 自依赖类型  1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个
         * @type {number || null}
         */
        this.SelfDepend = null;

        /**
         * 生效开始时间，格式 yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 生效结束时间，格式 yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。
         * @type {string || null}
         */
        this.TaskAction = null;

        /**
         * "周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
         * @type {number || null}
         */
        this.CycleType = null;

        /**
         * 步长，间隔时间，最小1
         * @type {number || null}
         */
        this.CycleStep = null;

        /**
         * cron表达式  周期类型为crontab调度才需要
         * @type {string || null}
         */
        this.CrontabExpression = null;

        /**
         * 执行时间左闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
         * @type {string || null}
         */
        this.ExecutionStartTime = null;

        /**
         * 执行时间右闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
         * @type {string || null}
         */
        this.ExecutionEndTime = null;

        /**
         * 新的任务名
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 失败重试间隔,单位分钟，创建任务的时候已经给了默认值
         * @type {number || null}
         */
        this.RetryWait = null;

        /**
         * 失败重试次数，创建任务的时候已经给了默认值
         * @type {number || null}
         */
        this.TryLimit = null;

        /**
         * 是否可重试，1代表可以重试
         * @type {number || null}
         */
        this.Retriable = null;

        /**
         * 运行优先级，4高 5中 6低
         * @type {number || null}
         */
        this.RunPriority = null;

        /**
         * 任务的扩展配置
         * @type {Array.<TaskExtInfo> || null}
         */
        this.TaskExt = null;

        /**
         * 执行资源组id，需要去资源管理服务上创建调度资源组，并且绑定cvm机器
         * @type {string || null}
         */
        this.ResourceGroup = null;

        /**
         * 资源池队列名称
         * @type {string || null}
         */
        this.YarnQueue = null;

        /**
         * 资源组下具体执行机，any 表示可以跑在任意一台。
         * @type {string || null}
         */
        this.BrokerIp = null;

        /**
         * 责任人
         * @type {string || null}
         */
        this.InCharge = null;

        /**
         * 任务备注
         * @type {string || null}
         */
        this.Notes = null;

        /**
         * 任务参数
         * @type {Array.<ParamInfo> || null}
         */
        this.TaskParamInfos = null;

        /**
         * 源数据源
         * @type {string || null}
         */
        this.SourceServer = null;

        /**
         * 目标数据源
         * @type {string || null}
         */
        this.TargetServer = null;

        /**
         * 是否支持工作流依赖 yes / no 默认 no
         * @type {string || null}
         */
        this.DependencyWorkflow = null;

        /**
         * 依赖配置
         * @type {Array.<DependencyConfig> || null}
         */
        this.DependencyConfigDTOs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.StartupTime = 'StartupTime' in params ? params.StartupTime : null;
        this.SelfDepend = 'SelfDepend' in params ? params.SelfDepend : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskAction = 'TaskAction' in params ? params.TaskAction : null;
        this.CycleType = 'CycleType' in params ? params.CycleType : null;
        this.CycleStep = 'CycleStep' in params ? params.CycleStep : null;
        this.CrontabExpression = 'CrontabExpression' in params ? params.CrontabExpression : null;
        this.ExecutionStartTime = 'ExecutionStartTime' in params ? params.ExecutionStartTime : null;
        this.ExecutionEndTime = 'ExecutionEndTime' in params ? params.ExecutionEndTime : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.RetryWait = 'RetryWait' in params ? params.RetryWait : null;
        this.TryLimit = 'TryLimit' in params ? params.TryLimit : null;
        this.Retriable = 'Retriable' in params ? params.Retriable : null;
        this.RunPriority = 'RunPriority' in params ? params.RunPriority : null;

        if (params.TaskExt) {
            this.TaskExt = new Array();
            for (let z in params.TaskExt) {
                let obj = new TaskExtInfo();
                obj.deserialize(params.TaskExt[z]);
                this.TaskExt.push(obj);
            }
        }
        this.ResourceGroup = 'ResourceGroup' in params ? params.ResourceGroup : null;
        this.YarnQueue = 'YarnQueue' in params ? params.YarnQueue : null;
        this.BrokerIp = 'BrokerIp' in params ? params.BrokerIp : null;
        this.InCharge = 'InCharge' in params ? params.InCharge : null;
        this.Notes = 'Notes' in params ? params.Notes : null;

        if (params.TaskParamInfos) {
            this.TaskParamInfos = new Array();
            for (let z in params.TaskParamInfos) {
                let obj = new ParamInfo();
                obj.deserialize(params.TaskParamInfos[z]);
                this.TaskParamInfos.push(obj);
            }
        }
        this.SourceServer = 'SourceServer' in params ? params.SourceServer : null;
        this.TargetServer = 'TargetServer' in params ? params.TargetServer : null;
        this.DependencyWorkflow = 'DependencyWorkflow' in params ? params.DependencyWorkflow : null;

        if (params.DependencyConfigDTOs) {
            this.DependencyConfigDTOs = new Array();
            for (let z in params.DependencyConfigDTOs) {
                let obj = new DependencyConfig();
                obj.deserialize(params.DependencyConfigDTOs[z]);
                this.DependencyConfigDTOs.push(obj);
            }
        }

    }
}

/**
 * 数据源对象
 * @class
 */
class DataSourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 若数据源列表为绑定数据库，则为db名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据源描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 数据源引擎的实例ID，如CDB实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 数据源名称，在相同SpaceName下，数据源名称不能为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据源引擎所属区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 数据源类型:枚举值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据源所属的集群id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 应用ID AppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 业务侧数据源的配置信息扩展
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizParams = null;

        /**
         * 数据源类别：绑定引擎、绑定数据库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 数据源展示名，为了可视化查看
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Display = null;

        /**
         * 数据源责任人账号ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerAccount = null;

        /**
         * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Params = null;

        /**
         * 数据源数据源的可见性，1为可见、0为不可见。默认为1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 数据源责任人账号名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerAccountName = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 归属项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerProjectId = null;

        /**
         * 归属项目Name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerProjectName = null;

        /**
         * 归属项目标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerProjectIdent = null;

        /**
         * 授权项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthorityProjectName = null;

        /**
         * 授权用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthorityUserName = null;

        /**
         * 是否有编辑权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Edit = null;

        /**
         * 是否有授权权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Author = null;

        /**
         * 是否有转交权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Deliver = null;

        /**
         * 数据源状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSourceStatus = null;

        /**
         * 时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Params json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParamsString = null;

        /**
         * BizParams json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizParamsString = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.BizParams = 'BizParams' in params ? params.BizParams : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Display = 'Display' in params ? params.Display : null;
        this.OwnerAccount = 'OwnerAccount' in params ? params.OwnerAccount : null;
        this.Params = 'Params' in params ? params.Params : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerAccountName = 'OwnerAccountName' in params ? params.OwnerAccountName : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.OwnerProjectId = 'OwnerProjectId' in params ? params.OwnerProjectId : null;
        this.OwnerProjectName = 'OwnerProjectName' in params ? params.OwnerProjectName : null;
        this.OwnerProjectIdent = 'OwnerProjectIdent' in params ? params.OwnerProjectIdent : null;
        this.AuthorityProjectName = 'AuthorityProjectName' in params ? params.AuthorityProjectName : null;
        this.AuthorityUserName = 'AuthorityUserName' in params ? params.AuthorityUserName : null;
        this.Edit = 'Edit' in params ? params.Edit : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.Deliver = 'Deliver' in params ? params.Deliver : null;
        this.DataSourceStatus = 'DataSourceStatus' in params ? params.DataSourceStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ParamsString = 'ParamsString' in params ? params.ParamsString : null;
        this.BizParamsString = 'BizParamsString' in params ? params.BizParamsString : null;

    }
}

/**
 * 比较条件
 * @class
 */
class CompareRuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 比较类型 1.固定值  2.波动值  3.数值范围比较  4.枚举范围比较  5.不用比较
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CompareType = null;

        /**
         * 比较操作类型 <  <=  ==  =>  >
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 质量统计值类型 1.绝对值  2.上升 3. 下降  4._C包含   5. N_C不包含
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ValueComputeType = null;

        /**
         * 比较阈值列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ThresholdValue> || null}
         */
        this.ValueList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompareType = 'CompareType' in params ? params.CompareType : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.ValueComputeType = 'ValueComputeType' in params ? params.ValueComputeType : null;

        if (params.ValueList) {
            this.ValueList = new Array();
            for (let z in params.ValueList) {
                let obj = new ThresholdValue();
                obj.deserialize(params.ValueList[z]);
                this.ValueList.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务告警状态
         * @type {number || null}
         */
        this.TaskAlarmStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskAlarmStatus = 'TaskAlarmStatus' in params ? params.TaskAlarmStatus : null;

    }
}

/**
 * DescribeOfflineTaskToken请求参数结构体
 * @class
 */
class DescribeOfflineTaskTokenRequest extends  AbstractModel {
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
 * CreateWorkflow返回参数结构体
 * @class
 */
class CreateWorkflowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回工作流Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CommonId || null}
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
            let obj = new CommonId();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleExecDetail请求参数结构体
 * @class
 */
class DescribeRuleExecDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则执行id
         * @type {number || null}
         */
        this.RuleExecId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleExecId = 'RuleExecId' in params ? params.RuleExecId : null;

    }
}

/**
 * DeleteResource请求参数结构体
 * @class
 */
class DeleteResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * 数据质量规则组订阅信息
 * @class
 */
class RuleGroupSubscribe extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 订阅接收人列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SubscribeReceiver> || null}
         */
        this.Receivers = null;

        /**
         * 订阅方式 1.邮件email  2.短信sms
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.SubscribeType = null;

        /**
         * 群机器人配置的webhook信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SubscribeWebHook> || null}
         */
        this.WebHooks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;

        if (params.Receivers) {
            this.Receivers = new Array();
            for (let z in params.Receivers) {
                let obj = new SubscribeReceiver();
                obj.deserialize(params.Receivers[z]);
                this.Receivers.push(obj);
            }
        }
        this.SubscribeType = 'SubscribeType' in params ? params.SubscribeType : null;

        if (params.WebHooks) {
            this.WebHooks = new Array();
            for (let z in params.WebHooks) {
                let obj = new SubscribeWebHook();
                obj.deserialize(params.WebHooks[z]);
                this.WebHooks.push(obj);
            }
        }

    }
}

/**
 * RegisterEventListener请求参数结构体
 * @class
 */
class RegisterEventListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键字，如果是任务，则传任务Id
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 事件名称
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 事件类型，默认 REST_API
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 配置信息，比如最长等待时间1天配置json：{"maxWaitEventTime":1,"maxWaitEventTimeUnit":"DAYS"}
         * @type {string || null}
         */
        this.Properties = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Properties = 'Properties' in params ? params.Properties : null;

    }
}

/**
 * CheckIntegrationNodeNameExists返回参数结构体
 * @class
 */
class CheckIntegrationNodeNameExistsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回true代表存在，返回false代表不存在
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RobAndLockIntegrationTask返回参数结构体
 * @class
 */
class RobAndLockIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 抢锁状态
         * @type {RobLockState || null}
         */
        this.RobLockState = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RobLockState) {
            let obj = new RobLockState();
            obj.deserialize(params.RobLockState)
            this.RobLockState = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTaskAlarmRegular请求参数结构体
 * @class
 */
class DeleteTaskAlarmRegularRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主键ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务类型(201表示实时任务，202表示离线任务)
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * 对比规则
 * @class
 */
class CompareRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 比较条件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CompareRuleItem> || null}
         */
        this.Items = null;

        /**
         * 周期性模板默认周期，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CycleStep = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new CompareRuleItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.CycleStep = 'CycleStep' in params ? params.CycleStep : null;

    }
}

/**
 * DescribeIntegrationStatisticsAgentStatus请求参数结构体
 * @class
 */
class DescribeIntegrationStatisticsAgentStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型（实时：201，离线：202）
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 查询日期
         * @type {string || null}
         */
        this.QueryDate = null;

        /**
         * 资源组id
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.QueryDate = 'QueryDate' in params ? params.QueryDate : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;

    }
}

/**
 * 群机器人订阅配置
 * @class
 */
class SubscribeWebHook extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群机器人类型，当前支持飞书
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HookType = null;

        /**
         * 群机器人webhook地址，配置方式参考https://cloud.tencent.com/document/product/1254/70736
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HookAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HookType = 'HookType' in params ? params.HookType : null;
        this.HookAddress = 'HookAddress' in params ? params.HookAddress : null;

    }
}

/**
 * DeleteOfflineTask返回参数结构体
 * @class
 */
class DeleteOfflineTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务执行脚本
 * @class
 */
class TaskScriptContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本内容 base64编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScriptContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScriptContent = 'ScriptContent' in params ? params.ScriptContent : null;

    }
}

/**
 * 数据集成大屏趋势图统计结果
 * @class
 */
class IntegrationStatisticsTrendResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计属性名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.StatisticName = null;

        /**
         * 统计值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.StatisticValue = null;

        /**
         * 统计项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatisticType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatisticName = 'StatisticName' in params ? params.StatisticName : null;
        this.StatisticValue = 'StatisticValue' in params ? params.StatisticValue : null;
        this.StatisticType = 'StatisticType' in params ? params.StatisticType : null;

    }
}

/**
 * GetIntegrationNodeColumnSchema请求参数结构体
 * @class
 */
class GetIntegrationNodeColumnSchemaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段示例（json格式）
         * @type {string || null}
         */
        this.ColumnContent = null;

        /**
         * 数据源类型
         * @type {string || null}
         */
        this.DatasourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ColumnContent = 'ColumnContent' in params ? params.ColumnContent : null;
        this.DatasourceType = 'DatasourceType' in params ? params.DatasourceType : null;

    }
}

/**
 * ForceSucInstances返回参数结构体
 * @class
 */
class ForceSucInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回实例批量终止结果
         * @type {OperateResult || null}
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
            let obj = new OperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskLockStatus请求参数结构体
 * @class
 */
class DescribeTaskLockStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务类型：201. stream,   202. offline
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * DescribeTaskReport返回参数结构体
 * @class
 */
class DescribeTaskReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总读取条数
         * @type {number || null}
         */
        this.TotalReadRecords = null;

        /**
         * 总读取字节数，单位为Byte
         * @type {number || null}
         */
        this.TotalReadBytes = null;

        /**
         * 总写入条数
         * @type {number || null}
         */
        this.TotalWriteRecords = null;

        /**
         * 总写入字节数，单位为Byte
         * @type {number || null}
         */
        this.TotalWriteBytes = null;

        /**
         * 总脏数据条数
         * @type {number || null}
         */
        this.TotalErrorRecords = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalReadRecords = 'TotalReadRecords' in params ? params.TotalReadRecords : null;
        this.TotalReadBytes = 'TotalReadBytes' in params ? params.TotalReadBytes : null;
        this.TotalWriteRecords = 'TotalWriteRecords' in params ? params.TotalWriteRecords : null;
        this.TotalWriteBytes = 'TotalWriteBytes' in params ? params.TotalWriteBytes : null;
        this.TotalErrorRecords = 'TotalErrorRecords' in params ? params.TotalErrorRecords : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleGroupTable请求参数结构体
 * @class
 */
class DescribeRuleGroupTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表ID
         * @type {string || null}
         */
        this.TableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableId = 'TableId' in params ? params.TableId : null;

    }
}

/**
 * CheckAlarmRegularNameExist请求参数结构体
 * @class
 */
class CheckAlarmRegularNameExistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.AlarmRegularName = null;

        /**
         * 主键ID
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.AlarmRegularName = 'AlarmRegularName' in params ? params.AlarmRegularName : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * GetOfflineDIInstanceList返回参数结构体
 * @class
 */
class GetOfflineDIInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 实例详情
         * @type {Array.<OfflineInstance> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new OfflineInstance();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询框架
 * @class
 */
class SearchConditionInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行空间 "DRY_RUN"
         * @type {number || null}
         */
        this.ExecutionSpace = null;

        /**
         * 产品名称，可选
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProductName = null;

        /**
         * 资源组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResourceGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecutionSpace = 'ExecutionSpace' in params ? params.ExecutionSpace : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ResourceGroup = 'ResourceGroup' in params ? params.ResourceGroup : null;

    }
}

/**
 * 规则执行结果
 * @class
 */
class RuleExecResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则执行ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleExecId = null;

        /**
         * 规则组执行ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleGroupExecId = null;

        /**
         * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleType = null;

        /**
         * 源字段详细类型，int string
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceObjectDataTypeName = null;

        /**
         * 源字段名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceObjectValue = null;

        /**
         * 条件扫描WHERE条件表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConditionExpression = null;

        /**
         * 检测结果（1:检测通过，2：触发规则，3：检测失败）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExecResultStatus = null;

        /**
         * 触发结果，告警发送成功, 阻断任务成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TriggerResult = null;

        /**
         * 对比结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareResult || null}
         */
        this.CompareResult = null;

        /**
         * 模版名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 质量维度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QualityDim = null;

        /**
         * 目标表-库表名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetDBTableName = null;

        /**
         * 目标表-字段名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetObjectValue = null;

        /**
         * 目标表-字段类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetObjectDataType = null;

        /**
         * 自定义模版sql表达式参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleFieldConfig || null}
         */
        this.FieldConfig = null;

        /**
         * 源字段与目标字段关联条件on表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelConditionExpr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleExecId = 'RuleExecId' in params ? params.RuleExecId : null;
        this.RuleGroupExecId = 'RuleGroupExecId' in params ? params.RuleGroupExecId : null;
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.SourceObjectDataTypeName = 'SourceObjectDataTypeName' in params ? params.SourceObjectDataTypeName : null;
        this.SourceObjectValue = 'SourceObjectValue' in params ? params.SourceObjectValue : null;
        this.ConditionExpression = 'ConditionExpression' in params ? params.ConditionExpression : null;
        this.ExecResultStatus = 'ExecResultStatus' in params ? params.ExecResultStatus : null;
        this.TriggerResult = 'TriggerResult' in params ? params.TriggerResult : null;

        if (params.CompareResult) {
            let obj = new CompareResult();
            obj.deserialize(params.CompareResult)
            this.CompareResult = obj;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.QualityDim = 'QualityDim' in params ? params.QualityDim : null;
        this.TargetDBTableName = 'TargetDBTableName' in params ? params.TargetDBTableName : null;
        this.TargetObjectValue = 'TargetObjectValue' in params ? params.TargetObjectValue : null;
        this.TargetObjectDataType = 'TargetObjectDataType' in params ? params.TargetObjectDataType : null;

        if (params.FieldConfig) {
            let obj = new RuleFieldConfig();
            obj.deserialize(params.FieldConfig)
            this.FieldConfig = obj;
        }
        this.RelConditionExpr = 'RelConditionExpr' in params ? params.RelConditionExpr : null;

    }
}

/**
 * GetOfflineInstanceList返回参数结构体
 * @class
 */
class GetOfflineInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 实例详情
         * @type {Array.<OfflineInstance> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new OfflineInstance();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateIntegrationTask请求参数结构体
 * @class
 */
class CreateIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务信息
         * @type {IntegrationTaskInfo || null}
         */
        this.TaskInfo = null;

        /**
         * 项目id
         * @type {string || null}
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

        if (params.TaskInfo) {
            let obj = new IntegrationTaskInfo();
            obj.deserialize(params.TaskInfo)
            this.TaskInfo = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 字段变量
 * @class
 */
class FieldConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FieldKey = null;

        /**
         * 字段值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FieldValue = null;

        /**
         * 字段值类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FieldDataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FieldKey = 'FieldKey' in params ? params.FieldKey : null;
        this.FieldValue = 'FieldValue' in params ? params.FieldValue : null;
        this.FieldDataType = 'FieldDataType' in params ? params.FieldDataType : null;

    }
}

/**
 * DescribeRealTimeTaskMetricOverview请求参数结构体
 * @class
 */
class DescribeRealTimeTaskMetricOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 无
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateResourcePath返回参数结构体
 * @class
 */
class CreateResourcePathResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFolder返回参数结构体
 * @class
 */
class DeleteFolderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true代表删除成功，false代表删除失败
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceManagePathTrees返回参数结构体
 * @class
 */
class DescribeResourceManagePathTreesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 响应数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResourcePathTree> || null}
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
                let obj = new ResourcePathTree();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则组监控业务视图
 * @class
 */
class RuleGroupMonitor extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 表guid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DatasourceId = null;

        /**
         * 数据库guid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MonitorType = null;

        /**
         * 监控状态 0.false 1.true
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MonitorStatus = null;

        /**
         * 规则组创建人id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUserId = null;

        /**
         * 规则组创建人昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateUserName = null;

        /**
         * 规则创建时间 yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.CreateUserId = 'CreateUserId' in params ? params.CreateUserId : null;
        this.CreateUserName = 'CreateUserName' in params ? params.CreateUserName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * StartIntegrationTask请求参数结构体
 * @class
 */
class StartIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务详情1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskInfoData || null}
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
            let obj = new TaskInfoData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则组关联表信息
 * @class
 */
class RuleGroupTableInnerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 表名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceName = null;

        /**
         * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DatasourceType = null;

        /**
         * 数据库ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 责任人ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.DatasourceName = 'DatasourceName' in params ? params.DatasourceName : null;
        this.DatasourceType = 'DatasourceType' in params ? params.DatasourceType : null;
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * DeleteIntegrationTask请求参数结构体
 * @class
 */
class DeleteIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 对比结果项
 * @class
 */
class CompareResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对比结果， 1为真 2为假
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FixResult = null;

        /**
         * 质量sql执行结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultValue = null;

        /**
         * 阈值列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ThresholdValue> || null}
         */
        this.Values = null;

        /**
         * 比较操作类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 比较类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CompareType = null;

        /**
         * 值比较类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ValueComputeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FixResult = 'FixResult' in params ? params.FixResult : null;
        this.ResultValue = 'ResultValue' in params ? params.ResultValue : null;

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new ThresholdValue();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.CompareType = 'CompareType' in params ? params.CompareType : null;
        this.ValueComputeType = 'ValueComputeType' in params ? params.ValueComputeType : null;

    }
}

/**
 * CreateOrUpdateResource返回参数结构体
 * @class
 */
class CreateOrUpdateResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 响应数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserFileDTO> || null}
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
                let obj = new UserFileDTO();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskScript请求参数结构体
 * @class
 */
class ModifyTaskScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 脚本内容 base64编码
         * @type {string || null}
         */
        this.ScriptContent = null;

        /**
         * 集成任务脚本配置
         * @type {Array.<IntegrationNodeDetail> || null}
         */
        this.IntegrationNodeDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ScriptContent = 'ScriptContent' in params ? params.ScriptContent : null;

        if (params.IntegrationNodeDetails) {
            this.IntegrationNodeDetails = new Array();
            for (let z in params.IntegrationNodeDetails) {
                let obj = new IntegrationNodeDetail();
                obj.deserialize(params.IntegrationNodeDetails[z]);
                this.IntegrationNodeDetails.push(obj);
            }
        }

    }
}

/**
 * CreateIntegrationNode请求参数结构体
 * @class
 */
class CreateIntegrationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成节点信息
         * @type {IntegrationNodeInfo || null}
         */
        this.NodeInfo = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeInfo) {
            let obj = new IntegrationNodeInfo();
            obj.deserialize(params.NodeInfo)
            this.NodeInfo = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * DescribeTableSchemaInfo请求参数结构体
 * @class
 */
class DescribeTableSchemaInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 表类型
         * @type {string || null}
         */
        this.MsType = null;

        /**
         * 数据源id
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * HIVE传rpc
         * @type {string || null}
         */
        this.ConnectionType = null;

        /**
         * 元数据Database下的Schema名称
         * @type {string || null}
         */
        this.SchemaName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.MsType = 'MsType' in params ? params.MsType : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.ConnectionType = 'ConnectionType' in params ? params.ConnectionType : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;

    }
}

/**
 * DescribeTableScoreTrend请求参数结构体
 * @class
 */
class DescribeTableScoreTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 开始时间 秒级时间戳
         * @type {number || null}
         */
        this.StatisticsStartDate = null;

        /**
         * 结束时间 秒级时间戳
         * @type {number || null}
         */
        this.StatisticsEndDate = null;

        /**
         * 表id
         * @type {string || null}
         */
        this.TableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.StatisticsStartDate = 'StatisticsStartDate' in params ? params.StatisticsStartDate : null;
        this.StatisticsEndDate = 'StatisticsEndDate' in params ? params.StatisticsEndDate : null;
        this.TableId = 'TableId' in params ? params.TableId : null;

    }
}

/**
 * 规则执行结果分页
 * @class
 */
class RuleExecResultPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 规则执行结果
         * @type {Array.<RuleExecResult> || null}
         */
        this.Items = null;

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
                let obj = new RuleExecResult();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * ModifyExecStrategy请求参数结构体
 * @class
 */
class ModifyExecStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组ID
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
         * @type {number || null}
         */
        this.MonitorType = null;

        /**
         * 计算队列
         * @type {string || null}
         */
        this.ExecQueue = null;

        /**
         * 执行资源组ID
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

        /**
         * 执行资源组名称
         * @type {string || null}
         */
        this.ExecutorGroupName = null;

        /**
         * 关联的生产调度任务列表
         * @type {Array.<ProdSchedulerTask> || null}
         */
        this.Tasks = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 离线周期模式下,生效日期-开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 离线周期模式下,生效日期-结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 离线周期模式下,调度周期 
MINUTE_CYCLE:I,
HOUR_CYCLE:H,
DAY_CYCLE:D,
WEEK_CYCLE:W,
MONTH_CYCLE:M
         * @type {string || null}
         */
        this.CycleType = null;

        /**
         * 离线周期模式下,调度步长
         * @type {number || null}
         */
        this.CycleStep = null;

        /**
         * 离线周期模式下,指定时间
         * @type {string || null}
         */
        this.TaskAction = null;

        /**
         * 延时执行时间，单位分钟，可选: <0-1439
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * 数据库Id
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 数据源Id
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据表Id
         * @type {string || null}
         */
        this.TableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.ExecQueue = 'ExecQueue' in params ? params.ExecQueue : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;
        this.ExecutorGroupName = 'ExecutorGroupName' in params ? params.ExecutorGroupName : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ProdSchedulerTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CycleType = 'CycleType' in params ? params.CycleType : null;
        this.CycleStep = 'CycleStep' in params ? params.CycleStep : null;
        this.TaskAction = 'TaskAction' in params ? params.TaskAction : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.TableId = 'TableId' in params ? params.TableId : null;

    }
}

/**
 * BatchForceSuccessIntegrationTaskInstances请求参数结构体
 * @class
 */
class BatchForceSuccessIntegrationTaskInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例信息
         * @type {Array.<SchedulerTaskInstanceInfo> || null}
         */
        this.Instances = null;

        /**
         * 项目id
         * @type {string || null}
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new SchedulerTaskInstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeRealTimeTaskInstanceNodeInfo返回参数结构体
 * @class
 */
class DescribeRealTimeTaskInstanceNodeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实时任务实例节点相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RealTimeTaskInstanceNodeInfo || null}
         */
        this.RealTimeTaskInstanceNodeInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RealTimeTaskInstanceNodeInfo) {
            let obj = new RealTimeTaskInstanceNodeInfo();
            obj.deserialize(params.RealTimeTaskInstanceNodeInfo)
            this.RealTimeTaskInstanceNodeInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据质量规则操作历史分页
 * @class
 */
class RuleHistoryPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 规则操作历史列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleHistory> || null}
         */
        this.Items = null;

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
                let obj = new RuleHistory();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * DescribeProdTasks返回参数结构体
 * @class
 */
class DescribeProdTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生产调度任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProdSchedulerTask> || null}
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
                let obj = new ProdSchedulerTask();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskReport请求参数结构体
 * @class
 */
class DescribeTaskReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 统计周期的开始日期，格式为 yyyy-MM-dd
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 统计周期的结束日期，格式为 yyyy-MM-dd
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * WeData项目id
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CommitRuleGroupTask返回参数结构体
 * @class
 */
class CommitRuleGroupTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组执行id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupExecResult || null}
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
            let obj = new RuleGroupExecResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealTimeTaskMetricOverview返回参数结构体
 * @class
 */
class DescribeRealTimeTaskMetricOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总读取记录数
         * @type {number || null}
         */
        this.TotalRecordNumOfRead = null;

        /**
         * 总读取字节数
         * @type {number || null}
         */
        this.TotalRecordByteNumOfRead = null;

        /**
         * 总写入记录数
         * @type {number || null}
         */
        this.TotalRecordNumOfWrite = null;

        /**
         * 总写入字节数 单位字节
         * @type {number || null}
         */
        this.TotalRecordByteNumOfWrite = null;

        /**
         * 总的脏记录数据
         * @type {number || null}
         */
        this.TotalDirtyRecordNum = null;

        /**
         * 总的脏字节数 单位字节
         * @type {number || null}
         */
        this.TotalDirtyRecordByte = null;

        /**
         * 运行时长 单位s
         * @type {number || null}
         */
        this.TotalDuration = null;

        /**
         * 开始运行时间
         * @type {string || null}
         */
        this.BeginRunTime = null;

        /**
         * 目前运行到的时间
         * @type {string || null}
         */
        this.EndRunTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalRecordNumOfRead = 'TotalRecordNumOfRead' in params ? params.TotalRecordNumOfRead : null;
        this.TotalRecordByteNumOfRead = 'TotalRecordByteNumOfRead' in params ? params.TotalRecordByteNumOfRead : null;
        this.TotalRecordNumOfWrite = 'TotalRecordNumOfWrite' in params ? params.TotalRecordNumOfWrite : null;
        this.TotalRecordByteNumOfWrite = 'TotalRecordByteNumOfWrite' in params ? params.TotalRecordByteNumOfWrite : null;
        this.TotalDirtyRecordNum = 'TotalDirtyRecordNum' in params ? params.TotalDirtyRecordNum : null;
        this.TotalDirtyRecordByte = 'TotalDirtyRecordByte' in params ? params.TotalDirtyRecordByte : null;
        this.TotalDuration = 'TotalDuration' in params ? params.TotalDuration : null;
        this.BeginRunTime = 'BeginRunTime' in params ? params.BeginRunTime : null;
        this.EndRunTime = 'EndRunTime' in params ? params.EndRunTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOfflineTaskToken返回参数结构体
 * @class
 */
class DescribeOfflineTaskTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长连接临时token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 长连接临时token。与Token相同含义，优先取Data，Data为空时，取Token。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Token = 'Token' in params ? params.Token : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTableInfoList返回参数结构体
 * @class
 */
class DescribeTableInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TableInfo> || null}
         */
        this.TableInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TableInfo) {
            this.TableInfo = new Array();
            for (let z in params.TableInfo) {
                let obj = new TableInfo();
                obj.deserialize(params.TableInfo[z]);
                this.TableInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetOfflineDIInstanceList请求参数结构体
 * @class
 */
class GetOfflineDIInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第几页
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 每页几条
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 无
         * @type {SearchConditionNew || null}
         */
        this.SearchCondition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.SearchCondition) {
            let obj = new SearchConditionNew();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

    }
}

/**
 * ModifyExecStrategy返回参数结构体
 * @class
 */
class ModifyExecStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchStartIntegrationTasks请求参数结构体
 * @class
 */
class BatchStartIntegrationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateCustomFunction请求参数结构体
 * @class
 */
class CreateCustomFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型：HIVE、SPARK
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 分类：窗口函数、聚合函数、日期函数......
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 函数名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 集群实例引擎 ID
         * @type {string || null}
         */
        this.ClusterIdentifier = null;

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ClusterIdentifier = 'ClusterIdentifier' in params ? params.ClusterIdentifier : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 集成节点schema
 * @class
 */
class IntegrationNodeSchema extends  AbstractModel {
    constructor(){
        super();

        /**
         * schema id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * schema名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * schema类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * schema值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * schema拓展属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordField> || null}
         */
        this.Properties = null;

        /**
         * schema别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new RecordField();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * DescribeDatasource请求参数结构体
 * @class
 */
class DescribeDatasourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对象唯一ID
         * @type {number || null}
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 规则运行情况结果
 * @class
 */
class RuleExecStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则运行总数
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 环比规则运行总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastTotalCnt = null;

        /**
         * 规则运行总数占比
         * @type {number || null}
         */
        this.TotalCntRatio = null;

        /**
         * 规则运行总数环比变化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastTotalCntRatio = null;

        /**
         * 规则触发数
         * @type {number || null}
         */
        this.TriggerCnt = null;

        /**
         * 环比规则触发数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastTriggerCnt = null;

        /**
         * 触发占总数占比
         * @type {number || null}
         */
        this.TriggerCntRatio = null;

        /**
         * 环比规则触发数变化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastTriggerCntRatio = null;

        /**
         * 规则报警数
         * @type {number || null}
         */
        this.AlarmCnt = null;

        /**
         * 环比规则报警数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastAlarmCnt = null;

        /**
         * 报警占总数占比
         * @type {number || null}
         */
        this.AlarmCntRatio = null;

        /**
         * 环比报警数变化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastAlarmCntRatio = null;

        /**
         * 阻塞发生数
         * @type {number || null}
         */
        this.PipelineCnt = null;

        /**
         * 环比阻塞发生数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastPipelineCnt = null;

        /**
         * 阻塞占总数占比
         * @type {number || null}
         */
        this.PipelineCntRatio = null;

        /**
         * 环比阻塞发生数变化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastPipelineCntRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;
        this.LastTotalCnt = 'LastTotalCnt' in params ? params.LastTotalCnt : null;
        this.TotalCntRatio = 'TotalCntRatio' in params ? params.TotalCntRatio : null;
        this.LastTotalCntRatio = 'LastTotalCntRatio' in params ? params.LastTotalCntRatio : null;
        this.TriggerCnt = 'TriggerCnt' in params ? params.TriggerCnt : null;
        this.LastTriggerCnt = 'LastTriggerCnt' in params ? params.LastTriggerCnt : null;
        this.TriggerCntRatio = 'TriggerCntRatio' in params ? params.TriggerCntRatio : null;
        this.LastTriggerCntRatio = 'LastTriggerCntRatio' in params ? params.LastTriggerCntRatio : null;
        this.AlarmCnt = 'AlarmCnt' in params ? params.AlarmCnt : null;
        this.LastAlarmCnt = 'LastAlarmCnt' in params ? params.LastAlarmCnt : null;
        this.AlarmCntRatio = 'AlarmCntRatio' in params ? params.AlarmCntRatio : null;
        this.LastAlarmCntRatio = 'LastAlarmCntRatio' in params ? params.LastAlarmCntRatio : null;
        this.PipelineCnt = 'PipelineCnt' in params ? params.PipelineCnt : null;
        this.LastPipelineCnt = 'LastPipelineCnt' in params ? params.LastPipelineCnt : null;
        this.PipelineCntRatio = 'PipelineCntRatio' in params ? params.PipelineCntRatio : null;
        this.LastPipelineCntRatio = 'LastPipelineCntRatio' in params ? params.LastPipelineCntRatio : null;

    }
}

/**
 * KillInstances返回参数结构体
 * @class
 */
class KillInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回实例批量终止结果
         * @type {OperateResult || null}
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
            let obj = new OperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTaskAlarmNew请求参数结构体
 * @class
 */
class SetTaskAlarmNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置任务超时告警和失败告警信息
         * @type {Array.<AlarmInfo> || null}
         */
        this.AlarmInfoList = null;

        /**
         * 项目Id
         * @type {string || null}
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

        if (params.AlarmInfoList) {
            this.AlarmInfoList = new Array();
            for (let z in params.AlarmInfoList) {
                let obj = new AlarmInfo();
                obj.deserialize(params.AlarmInfoList[z]);
                this.AlarmInfoList.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 函数类型或函数分类
 * @class
 */
class FunctionTypeOrKind extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 无
         * @type {string || null}
         */
        this.ZhName = null;

        /**
         * 无
         * @type {string || null}
         */
        this.EnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ZhName = 'ZhName' in params ? params.ZhName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;

    }
}

/**
 * DescribeTableSchemaInfo返回参数结构体
 * @class
 */
class DescribeTableSchemaInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 123
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SchemaDetail> || null}
         */
        this.SchemaInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SchemaInfoList) {
            this.SchemaInfoList = new Array();
            for (let z in params.SchemaInfoList) {
                let obj = new SchemaDetail();
                obj.deserialize(params.SchemaInfoList[z]);
                this.SchemaInfoList.push(obj);
            }
        }
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
         * 结果
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskReportDetailList请求参数结构体
 * @class
 */
class DescribeTaskReportDetailListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * WeData项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 统计周期的开始日期，格式为 yyyy-MM-dd
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 统计周期的结束日期，格式为 yyyy-MM-dd
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 任务状态，多个状态用逗号连接
         * @type {string || null}
         */
        this.StateList = null;

        /**
         * 排序字段名
         * @type {string || null}
         */
        this.SortItem = null;

        /**
         * 升序或降序，传ASC或DESC
         * @type {string || null}
         */
        this.SortType = null;

        /**
         * 页数，从1开始
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 每页的记录条数，默认10条
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.StateList = 'StateList' in params ? params.StateList : null;
        this.SortItem = 'SortItem' in params ? params.SortItem : null;
        this.SortType = 'SortType' in params ? params.SortType : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeProject返回参数结构体
 * @class
 */
class DescribeProjectResponse extends  AbstractModel {
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
 * StopIntegrationTask请求参数结构体
 * @class
 */
class StopIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateDataSource返回参数结构体
 * @class
 */
class CreateDataSourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主键ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFolderWorkflowList返回参数结构体
 * @class
 */
class DescribeFolderWorkflowListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeFolderWorkflowListData || null}
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
            let obj = new DescribeFolderWorkflowListData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFolder请求参数结构体
 * @class
 */
class CreateFolderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件夹名称
         * @type {string || null}
         */
        this.FolderName = null;

        /**
         * 父文件夹ID
         * @type {string || null}
         */
        this.ParentsFolderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.FolderName = 'FolderName' in params ? params.FolderName : null;
        this.ParentsFolderId = 'ParentsFolderId' in params ? params.ParentsFolderId : null;

    }
}

/**
 * DescribeIntegrationVersionNodesInfo返回参数结构体
 * @class
 */
class DescribeIntegrationVersionNodesInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationNodeInfo> || null}
         */
        this.Nodes = null;

        /**
         * 任务映射信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationNodeMapping> || null}
         */
        this.Mappings = null;

        /**
         * 任务id
         * @type {string || null}
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

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new IntegrationNodeInfo();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }

        if (params.Mappings) {
            this.Mappings = new Array();
            for (let z in params.Mappings) {
                let obj = new IntegrationNodeMapping();
                obj.deserialize(params.Mappings[z]);
                this.Mappings.push(obj);
            }
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRules请求参数结构体
 * @class
 */
class DescribeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则组id
         * @type {number || null}
         */
        this.RuleGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;

    }
}

/**
 * DescribeRule返回参数结构体
 * @class
 */
class DescribeRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Rule || null}
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
            let obj = new Rule();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskScript请求参数结构体
 * @class
 */
class DescribeTaskScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeRuleHistoryByPage请求参数结构体
 * @class
 */
class DescribeRuleHistoryByPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 分页序号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 元数据字段信息
 * @class
 */
class SchemaDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ColumnKey = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.ColumnKey = 'ColumnKey' in params ? params.ColumnKey : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeRule请求参数结构体
 * @class
 */
class DescribeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质量规则ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 项目ID
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeAlarmReceiver返回参数结构体
 * @class
 */
class DescribeAlarmReceiverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警接收人列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlarmReceiverInfo> || null}
         */
        this.AlarmReceiverInfoList = null;

        /**
         * 总记录数
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

        if (params.AlarmReceiverInfoList) {
            this.AlarmReceiverInfoList = new Array();
            for (let z in params.AlarmReceiverInfoList) {
                let obj = new AlarmReceiverInfo();
                obj.deserialize(params.AlarmReceiverInfoList[z]);
                this.AlarmReceiverInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchModifyOwnersNew返回参数结构体
 * @class
 */
class BatchModifyOwnersNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回批量操作成功个数、失败个数、操作总数
         * @type {BatchOperateResult || null}
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
            let obj = new BatchOperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInLongAgent请求参数结构体
 * @class
 */
class DeleteInLongAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集器ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * WeData项目ID
         * @type {string || null}
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
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 分区参数
 * @class
 */
class Partition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区转换策略
         * @type {string || null}
         */
        this.Transform = null;

        /**
         * 分区字段名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 策略参数
         * @type {Array.<string> || null}
         */
        this.TransformArgs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Transform = 'Transform' in params ? params.Transform : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TransformArgs = 'TransformArgs' in params ? params.TransformArgs : null;

    }
}

/**
 * RuleDimCnt 规则维度统计
 * @class
 */
class RuleDimCnt extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
         * @type {number || null}
         */
        this.Dim = null;

        /**
         * count 数
         * @type {number || null}
         */
        this.Cnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Dim = 'Dim' in params ? params.Dim : null;
        this.Cnt = 'Cnt' in params ? params.Cnt : null;

    }
}

/**
 * 批量操作的结果返回
 * @class
 */
class BatchOperateResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量操作成功数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 批量操作失败数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 批量操作的总数
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * 表绑定规则组信息
 * @class
 */
class RuleGroupTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupTableInnerInfo || null}
         */
        this.TableInfo = null;

        /**
         * 规则组调度信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleGroupSchedulerInfo> || null}
         */
        this.RuleGroups = null;

        /**
         * 订阅者信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleGroupSubscribe> || null}
         */
        this.Subscriptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TableInfo) {
            let obj = new RuleGroupTableInnerInfo();
            obj.deserialize(params.TableInfo)
            this.TableInfo = obj;
        }

        if (params.RuleGroups) {
            this.RuleGroups = new Array();
            for (let z in params.RuleGroups) {
                let obj = new RuleGroupSchedulerInfo();
                obj.deserialize(params.RuleGroups[z]);
                this.RuleGroups.push(obj);
            }
        }

        if (params.Subscriptions) {
            this.Subscriptions = new Array();
            for (let z in params.Subscriptions) {
                let obj = new RuleGroupSubscribe();
                obj.deserialize(params.Subscriptions[z]);
                this.Subscriptions.push(obj);
            }
        }

    }
}

/**
 * DescribeDimensionScore请求参数结构体
 * @class
 */
class DescribeDimensionScoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计日期 时间戳
         * @type {number || null}
         */
        this.StatisticsDate = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 数据来源id
         * @type {string || null}
         */
        this.DatasourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatisticsDate = 'StatisticsDate' in params ? params.StatisticsDate : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;

    }
}

/**
 * dlc建表属性
 * @class
 */
class Property extends  AbstractModel {
    constructor(){
        super();

        /**
         * key值
         * @type {string || null}
         */
        this.Key = null;

        /**
         * value值
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
 * 采集器关联的集成任务
 * @class
 */
class InLongAgentTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 集成任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 集成任务状态
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

    }
}

/**
 * BatchStartIntegrationTasks返回参数结构体
 * @class
 */
class BatchStartIntegrationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationVersionNodesInfo请求参数结构体
 * @class
 */
class DescribeIntegrationVersionNodesInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * task version path
         * @type {string || null}
         */
        this.TaskVersionPath = null;

        /**
         * task version
         * @type {string || null}
         */
        this.TaskVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskVersionPath = 'TaskVersionPath' in params ? params.TaskVersionPath : null;
        this.TaskVersion = 'TaskVersion' in params ? params.TaskVersion : null;

    }
}

/**
 * DescribeRealTimeTaskSpeed返回参数结构体
 * @class
 */
class DescribeRealTimeTaskSpeedResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步速度条/s列表
         * @type {Array.<RecordsSpeed> || null}
         */
        this.RecordsSpeedList = null;

        /**
         * 同步速度字节/s列表
         * @type {Array.<BytesSpeed> || null}
         */
        this.BytesSpeedList = null;

        /**
         * 同步速度，包括了RecordsSpeedList和BytesSpeedList
         * @type {RealTimeTaskSpeed || null}
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

        if (params.RecordsSpeedList) {
            this.RecordsSpeedList = new Array();
            for (let z in params.RecordsSpeedList) {
                let obj = new RecordsSpeed();
                obj.deserialize(params.RecordsSpeedList[z]);
                this.RecordsSpeedList.push(obj);
            }
        }

        if (params.BytesSpeedList) {
            this.BytesSpeedList = new Array();
            for (let z in params.BytesSpeedList) {
                let obj = new BytesSpeed();
                obj.deserialize(params.BytesSpeedList[z]);
                this.BytesSpeedList.push(obj);
            }
        }

        if (params.Data) {
            let obj = new RealTimeTaskSpeed();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationStatisticsAgentStatus返回参数结构体
 * @class
 */
class DescribeIntegrationStatisticsAgentStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusData = 'StatusData' in params ? params.StatusData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFolderWorkflowList请求参数结构体
 * @class
 */
class DescribeFolderWorkflowListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 父文件夹ID
         * @type {string || null}
         */
        this.ParentsFolderId = null;

        /**
         * 关键字
         * @type {string || null}
         */
        this.KeyWords = null;

        /**
         * 页码，默认1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页大小，默认10
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ParentsFolderId = 'ParentsFolderId' in params ? params.ParentsFolderId : null;
        this.KeyWords = 'KeyWords' in params ? params.KeyWords : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 规则变量替换
 * @class
 */
class RuleFieldConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * where变量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FieldConfig> || null}
         */
        this.WhereConfig = null;

        /**
         * 库表变量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TableConfig> || null}
         */
        this.TableConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WhereConfig) {
            this.WhereConfig = new Array();
            for (let z in params.WhereConfig) {
                let obj = new FieldConfig();
                obj.deserialize(params.WhereConfig[z]);
                this.WhereConfig.push(obj);
            }
        }

        if (params.TableConfig) {
            this.TableConfig = new Array();
            for (let z in params.TableConfig) {
                let obj = new TableConfig();
                obj.deserialize(params.TableConfig[z]);
                this.TableConfig.push(obj);
            }
        }

    }
}

/**
 * CheckTaskNameExist返回参数结构体
 * @class
 */
class CheckTaskNameExistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInLongAgentTaskList返回参数结构体
 * @class
 */
class DescribeInLongAgentTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集器关联的集成任务列表
         * @type {Array.<InLongAgentTask> || null}
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InLongAgentTask();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LockIntegrationTask请求参数结构体
 * @class
 */
class LockIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 离线任务统计指标明细
 * @class
 */
class TaskReportDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例数据运行时间
         * @type {string || null}
         */
        this.CurRunDate = null;

        /**
         * 实例实际下发时间
         * @type {string || null}
         */
        this.IssueDate = null;

        /**
         * 任务状态码。1 正在执行,2 成功,3 失败,4 等待终止,5 正在终止,6 已终止,7 终止失败,9 等待执行。
         * @type {string || null}
         */
        this.TaskState = null;

        /**
         * 总读取条数
         * @type {number || null}
         */
        this.TotalReadRecords = null;

        /**
         * 总读取字节数
         * @type {number || null}
         */
        this.TotalReadBytes = null;

        /**
         * 总写入条数
         * @type {number || null}
         */
        this.TotalWriteRecords = null;

        /**
         * 总写入字节数
         * @type {number || null}
         */
        this.TotalWriteBytes = null;

        /**
         * 写入速度（条/秒）
         * @type {number || null}
         */
        this.RecordSpeed = null;

        /**
         * 吞吐（Byte/秒）
         * @type {number || null}
         */
        this.ByteSpeed = null;

        /**
         * 脏数据条数
         * @type {number || null}
         */
        this.TotalErrorRecords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.TaskState = 'TaskState' in params ? params.TaskState : null;
        this.TotalReadRecords = 'TotalReadRecords' in params ? params.TotalReadRecords : null;
        this.TotalReadBytes = 'TotalReadBytes' in params ? params.TotalReadBytes : null;
        this.TotalWriteRecords = 'TotalWriteRecords' in params ? params.TotalWriteRecords : null;
        this.TotalWriteBytes = 'TotalWriteBytes' in params ? params.TotalWriteBytes : null;
        this.RecordSpeed = 'RecordSpeed' in params ? params.RecordSpeed : null;
        this.ByteSpeed = 'ByteSpeed' in params ? params.ByteSpeed : null;
        this.TotalErrorRecords = 'TotalErrorRecords' in params ? params.TotalErrorRecords : null;

    }
}

/**
 * BatchStopIntegrationTasks请求参数结构体
 * @class
 */
class BatchStopIntegrationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeRuleTemplatesByPage请求参数结构体
 * @class
 */
class DescribeRuleTemplatesByPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前页
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页记录数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 工作空间ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 通用排序字段
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 通用过滤条件
         * @type {Array.<Filter> || null}
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeMonitorsByPage返回参数结构体
 * @class
 */
class DescribeMonitorsByPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupMonitorPage || null}
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
            let obj = new RuleGroupMonitorPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLastLog返回参数结构体
 * @class
 */
class DescribeInstanceLastLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExecStrategy请求参数结构体
 * @class
 */
class DescribeExecStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组Id
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateHiveTable请求参数结构体
 * @class
 */
class CreateHiveTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源id
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据库
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 建hive表ddl
         * @type {string || null}
         */
        this.DDLSql = null;

        /**
         * 表权限 ，默认为0:项目共享;1:仅个人与管理员
         * @type {number || null}
         */
        this.Privilege = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 责任人
         * @type {string || null}
         */
        this.Incharge = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.DDLSql = 'DDLSql' in params ? params.DDLSql : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Incharge = 'Incharge' in params ? params.Incharge : null;

    }
}

/**
 * BatchKillIntegrationTaskInstances返回参数结构体
 * @class
 */
class BatchKillIntegrationTaskInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRuleTemplate返回参数结构体
 * @class
 */
class ModifyRuleTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOrUpdateResource请求参数结构体
 * @class
 */
class CreateOrUpdateResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件名
         * @type {Array.<string> || null}
         */
        this.Files = null;

        /**
         * 文件所属路径，资源管理根路径为 /datastudio/resouce
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * cos存储桶名字
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * cos所属地域
         * @type {string || null}
         */
        this.CosRegion = null;

        /**
         * 是否为新文件，新增为 true，更新为 false
         * @type {boolean || null}
         */
        this.NewFile = null;

        /**
         * 文件大小
         * @type {Array.<string> || null}
         */
        this.FilesSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Files = 'Files' in params ? params.Files : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.NewFile = 'NewFile' in params ? params.NewFile : null;
        this.FilesSize = 'FilesSize' in params ? params.FilesSize : null;

    }
}

/**
 * DescribeRuleGroupTable返回参数结构体
 * @class
 */
class DescribeRuleGroupTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupTable || null}
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
            let obj = new RuleGroupTable();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataSourceWithoutInfo请求参数结构体
 * @class
 */
class DescribeDataSourceWithoutInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

        /**
         * 1
         * @type {Array.<Filter> || null}
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

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 日评分信息
 * @class
 */
class DailyScoreInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计日期 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StatisticsDate = null;

        /**
         * 评分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatisticsDate = 'StatisticsDate' in params ? params.StatisticsDate : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 规则模版变更历史记录视图
 * @class
 */
class RuleTemplateHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模版ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 版本
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 用户Id
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * 用户昵称
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 变更类型1.新增2.修改3.删除
         * @type {number || null}
         */
        this.AlterType = null;

        /**
         * 变更内容
         * @type {string || null}
         */
        this.AlterContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.AlterType = 'AlterType' in params ? params.AlterType : null;
        this.AlterContent = 'AlterContent' in params ? params.AlterContent : null;

    }
}

/**
 * DescribeInLongAgentVpcList返回参数结构体
 * @class
 */
class DescribeInLongAgentVpcListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC列表
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcList = 'VpcList' in params ? params.VpcList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRuleTemplate返回参数结构体
 * @class
 */
class DeleteRuleTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleTemplate请求参数结构体
 * @class
 */
class DescribeRuleTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则模板Id
         * @type {number || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * FreezeTasksByMultiWorkflow请求参数结构体
 * @class
 */
class FreezeTasksByMultiWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流Id集合
         * @type {Array.<string> || null}
         */
        this.WorkFlowIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkFlowIds = 'WorkFlowIds' in params ? params.WorkFlowIds : null;

    }
}

/**
 * Id包装对象
 * @class
 */
class CommonId extends  AbstractModel {
    constructor(){
        super();

        /**
         * Id值
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * CreateRuleTemplate请求参数结构体
 * @class
 */
class CreateRuleTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模版类型  1.系统模版   2.自定义模版
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 模版名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 质量检测维度 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性
         * @type {number || null}
         */
        this.QualityDim = null;

        /**
         * 源端数据对象类型 1.常量  2.离线表级   2.离线字段级
         * @type {number || null}
         */
        this.SourceObjectType = null;

        /**
         * 模板描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 源端对应的引擎类型
         * @type {Array.<number> || null}
         */
        this.SourceEngineTypes = null;

        /**
         * 是否关联其它库表
         * @type {boolean || null}
         */
        this.MultiSourceFlag = null;

        /**
         * SQL 表达式
         * @type {string || null}
         */
        this.SqlExpression = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 是否添加where参数
         * @type {boolean || null}
         */
        this.WhereFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.QualityDim = 'QualityDim' in params ? params.QualityDim : null;
        this.SourceObjectType = 'SourceObjectType' in params ? params.SourceObjectType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SourceEngineTypes = 'SourceEngineTypes' in params ? params.SourceEngineTypes : null;
        this.MultiSourceFlag = 'MultiSourceFlag' in params ? params.MultiSourceFlag : null;
        this.SqlExpression = 'SqlExpression' in params ? params.SqlExpression : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WhereFlag = 'WhereFlag' in params ? params.WhereFlag : null;

    }
}

/**
 * 查询实例条件(新)
 * @class
 */
class SearchConditionNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询框架，必选
         * @type {SearchConditionInstanceNew || null}
         */
        this.Instance = null;

        /**
         * 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 排序顺序（asc，desc）
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
         * @type {string || null}
         */
        this.SortCol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Instance) {
            let obj = new SearchConditionInstanceNew();
            obj.deserialize(params.Instance)
            this.Instance = obj;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.SortCol = 'SortCol' in params ? params.SortCol : null;

    }
}

/**
 * BatchStopTasksNew返回参数结构体
 * @class
 */
class BatchStopTasksNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回批量操作成功个数、失败个数、操作总数
         * @type {BatchOperateResult || null}
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
            let obj = new BatchOperateResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 质量概览表排行结果
 * @class
 */
class TopTableStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警表列表
         * @type {Array.<TopTableStatItem> || null}
         */
        this.AlarmTables = null;

        /**
         * 阻塞表列表
         * @type {Array.<TopTableStatItem> || null}
         */
        this.PipelineTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AlarmTables) {
            this.AlarmTables = new Array();
            for (let z in params.AlarmTables) {
                let obj = new TopTableStatItem();
                obj.deserialize(params.AlarmTables[z]);
                this.AlarmTables.push(obj);
            }
        }

        if (params.PipelineTables) {
            this.PipelineTables = new Array();
            for (let z in params.PipelineTables) {
                let obj = new TopTableStatItem();
                obj.deserialize(params.PipelineTables[z]);
                this.PipelineTables.push(obj);
            }
        }

    }
}

/**
 * DescribeRuleExecDetail返回参数结构体
 * @class
 */
class DescribeRuleExecDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则执行结果详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleExecResultDetail || null}
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
            let obj = new RuleExecResultDetail();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 通用过滤器
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤值列表
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DeleteIntegrationTask返回参数结构体
 * @class
 */
class DeleteIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务删除成功与否标识
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeIntegrationTask请求参数结构体
 * @class
 */
class ResumeIntegrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目id
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeRuleGroupsByPage返回参数结构体
 * @class
 */
class DescribeRuleGroupsByPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleGroupPage || null}
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
            let obj = new RuleGroupPage();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFolderList返回参数结构体
 * @class
 */
class DescribeFolderListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeFolderListData || null}
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
            let obj = new DescribeFolderListData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationStatisticsTaskStatus返回参数结构体
 * @class
 */
class DescribeIntegrationStatisticsTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusData = 'StatusData' in params ? params.StatusData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabaseInfoList请求参数结构体
 * @class
 */
class DescribeDatabaseInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 如果是hive这里写rpc，如果是其他类型不传
         * @type {string || null}
         */
        this.ConnectionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectionType = 'ConnectionType' in params ? params.ConnectionType : null;

    }
}

/**
 * DescribeInLongTkeClusterList请求参数结构体
 * @class
 */
class DescribeInLongTkeClusterListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * WeData项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * TKE集群地域
         * @type {string || null}
         */
        this.TkeRegion = null;

        /**
         * 集群名称。
多个名称用逗号连接。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * TKE集群状态 (Running 运行中 Creating 创建中 Idling 闲置中 Abnormal 异常 Failed 异常 Deleting 删除中 Scaling 规模调整中 Upgrading 升级中 Isolated 欠费隔离中 NodeUpgrading 节点升级中 Recovering 唤醒中 Activating 激活中 MasterScaling Master扩缩容中 Waiting 等待注册 ClusterLevelUpgrading 调整规格中 ResourceIsolate 隔离中 ResourceIsolated 已隔离 ResourceReverse 冲正中 Trading 集群开通中 ResourceReversal 集群冲正 ClusterLevelTrading 集群变配交易中)
多个状态用逗号连接。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 是否安装Agent，true: 是，false: 否
         * @type {boolean || null}
         */
        this.HasAgent = null;

        /**
         * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
多个集群用逗号连接。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 分页页码，从1开始，默认：1
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 分页每页记录数，默认10
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TkeRegion = 'TkeRegion' in params ? params.TkeRegion : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.HasAgent = 'HasAgent' in params ? params.HasAgent : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeRuleExecHistory返回参数结构体
 * @class
 */
class DescribeRuleExecHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则执行结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleExecResult> || null}
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
                let obj = new RuleExecResult();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationTask返回参数结构体
 * @class
 */
class DescribeIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntegrationTaskInfo || null}
         */
        this.TaskInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskInfo) {
            let obj = new IntegrationTaskInfo();
            obj.deserialize(params.TaskInfo)
            this.TaskInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQualityScoreTrend返回参数结构体
 * @class
 */
class DescribeQualityScoreTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质量评分趋势视图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QualityScoreTrend || null}
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
            let obj = new QualityScoreTrend();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyFolder返回参数结构体
 * @class
 */
class ModifyFolderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true代表成功，false代表失败
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHiveTableByDDL请求参数结构体
 * @class
 */
class CreateHiveTableByDDLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源ID
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据库
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 建hive表ddl
         * @type {string || null}
         */
        this.DDLSql = null;

        /**
         * 表权限 ，默认为0:项目共享;1:仅个人与管理员
         * @type {number || null}
         */
        this.Privilege = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 目标表类型(HIVE或GBASE)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 责任人
         * @type {string || null}
         */
        this.Incharge = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.DDLSql = 'DDLSql' in params ? params.DDLSql : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Incharge = 'Incharge' in params ? params.Incharge : null;

    }
}

/**
 * 数据质量数据来源数据库
 * @class
 */
class DatabaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceName = null;

        /**
         * 数据源Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据库id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseId = null;

        /**
         * 实例Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DatasourceType = null;

        /**
         * 数据库原始名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginDatabaseName = null;

        /**
         * schema名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginSchemaName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasourceName = 'DatasourceName' in params ? params.DatasourceName : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DatasourceType = 'DatasourceType' in params ? params.DatasourceType : null;
        this.OriginDatabaseName = 'OriginDatabaseName' in params ? params.OriginDatabaseName : null;
        this.OriginSchemaName = 'OriginSchemaName' in params ? params.OriginSchemaName : null;

    }
}

/**
 * GetIntegrationNodeColumnSchema返回参数结构体
 * @class
 */
class GetIntegrationNodeColumnSchemaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntegrationNodeSchema> || null}
         */
        this.Schemas = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Schemas) {
            this.Schemas = new Array();
            for (let z in params.Schemas) {
                let obj = new IntegrationNodeSchema();
                obj.deserialize(params.Schemas[z]);
                this.Schemas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopIntegrationTask返回参数结构体
 * @class
 */
class StopIntegrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功与否标识
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDependTasksNew返回参数结构体
 * @class
 */
class DescribeDependTasksNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画布任务和链接信息
         * @type {CanvasInfo || null}
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
            let obj = new CanvasInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckDuplicateTemplateName返回参数结构体
 * @class
 */
class CheckDuplicateTemplateNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否重名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRelatedInstances请求参数结构体
 * @class
 */
class DescribeRelatedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 数据时间，格式yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.CurRunDate = null;

        /**
         * 任务id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 距离当前任务的层级距离，-1表示取父节点，1表示子节点
         * @type {number || null}
         */
        this.Depth = null;

        /**
         * 页号，默认为1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页大小，默认为10，最大不超过200
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeDataCheckStat返回参数结构体
 * @class
 */
class DescribeDataCheckStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
         * @type {DataCheckStat || null}
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
            let obj = new DataCheckStat();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationStatisticsInstanceTrend请求参数结构体
 * @class
 */
class DescribeIntegrationStatisticsInstanceTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型（实时：201，离线：202）
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 查询日期
         * @type {string || null}
         */
        this.QueryDate = null;

        /**
         * 资源组id
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.QueryDate = 'QueryDate' in params ? params.QueryDate : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;

    }
}

/**
 * BatchModifyOwnersNew请求参数结构体
 * @class
 */
class BatchModifyOwnersNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要更新责任人的TaskId数组
         * @type {Array.<string> || null}
         */
        this.TaskIdList = null;

        /**
         * 需要更新的责任人
         * @type {string || null}
         */
        this.Owners = null;

        /**
         * 项目Id
         * @type {string || null}
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
        this.TaskIdList = 'TaskIdList' in params ? params.TaskIdList : null;
        this.Owners = 'Owners' in params ? params.Owners : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DryRunDIOfflineTask返回参数结构体
 * @class
 */
class DryRunDIOfflineTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据时间
         * @type {string || null}
         */
        this.CurrentRunDate = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务实例唯一key
         * @type {string || null}
         */
        this.TaskInstanceKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentRunDate = 'CurrentRunDate' in params ? params.CurrentRunDate : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskInstanceKey = 'TaskInstanceKey' in params ? params.TaskInstanceKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenHiveTableDDLSql返回参数结构体
 * @class
 */
class GenHiveTableDDLSqlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的ddl语句
         * @type {string || null}
         */
        this.DDLSql = null;

        /**
         * 生成的ddl语句。与DDLSql相同含义，优先取Data，如果Data为空，则取DDLSql。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.DDLSql = 'DDLSql' in params ? params.DDLSql : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleExecStat请求参数结构体
 * @class
 */
class DescribeRuleExecStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ProjectId 值
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 开始时间，时间戳到秒
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 结束时间，时间戳到秒
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * 离线任务新增参数
 * @class
 */
class OfflineTaskAddParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 依赖
         * @type {string || null}
         */
        this.DependencyWorkflow = null;

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
         * 周期
         * @type {number || null}
         */
        this.CycleType = null;

        /**
         * 周期间隔
         * @type {number || null}
         */
        this.CycleStep = null;

        /**
         * 延迟时间
         * @type {number || null}
         */
        this.DelayTime = null;

        /**
         * crontab
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CrontabExpression = null;

        /**
         * 重试等待
         * @type {number || null}
         */
        this.RetryWait = null;

        /**
         * 是否可以重试
         * @type {number || null}
         */
        this.Retriable = null;

        /**
         * 重试限制
         * @type {number || null}
         */
        this.TryLimit = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.RunPriority = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 1 有序串行 一次一个，排队 orderly 
2 无序串行 一次一个，不排队 serial  
3 并行 一次多个 parallel
         * @type {number || null}
         */
        this.SelfDepend = null;

        /**
         * 周任务：1是周天，2是周1，7是周6 。
月任务：如具体1，3号则写 "1,3"，指定月末不可和具体号数一起输入，仅能为 "L"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskAction = null;

        /**
         * 调度执行结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutionEndTime = null;

        /**
         * 调度执行开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutionStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.DependencyWorkflow = 'DependencyWorkflow' in params ? params.DependencyWorkflow : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CycleType = 'CycleType' in params ? params.CycleType : null;
        this.CycleStep = 'CycleStep' in params ? params.CycleStep : null;
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;
        this.CrontabExpression = 'CrontabExpression' in params ? params.CrontabExpression : null;
        this.RetryWait = 'RetryWait' in params ? params.RetryWait : null;
        this.Retriable = 'Retriable' in params ? params.Retriable : null;
        this.TryLimit = 'TryLimit' in params ? params.TryLimit : null;
        this.RunPriority = 'RunPriority' in params ? params.RunPriority : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.SelfDepend = 'SelfDepend' in params ? params.SelfDepend : null;
        this.TaskAction = 'TaskAction' in params ? params.TaskAction : null;
        this.ExecutionEndTime = 'ExecutionEndTime' in params ? params.ExecutionEndTime : null;
        this.ExecutionStartTime = 'ExecutionStartTime' in params ? params.ExecutionStartTime : null;

    }
}

/**
 * DescribeRuleExecExportResult返回参数结构体
 * @class
 */
class DescribeRuleExecExportResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleExecExportResult || null}
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
            let obj = new RuleExecExportResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实时任务日志内容
 * @class
 */
class LogContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志时间戳，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 日志包id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 日志内容
         * @type {string || null}
         */
        this.Log = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.Log = 'Log' in params ? params.Log : null;

    }
}

/**
 * 实时任务同步速度趋势
 * @class
 */
class RealTimeTaskSpeed extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步速度条/s列表
         * @type {Array.<RecordsSpeed> || null}
         */
        this.RecordsSpeedList = null;

        /**
         * 同步速度字节/s列表
         * @type {Array.<BytesSpeed> || null}
         */
        this.BytesSpeedList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordsSpeedList) {
            this.RecordsSpeedList = new Array();
            for (let z in params.RecordsSpeedList) {
                let obj = new RecordsSpeed();
                obj.deserialize(params.RecordsSpeedList[z]);
                this.RecordsSpeedList.push(obj);
            }
        }

        if (params.BytesSpeedList) {
            this.BytesSpeedList = new Array();
            for (let z in params.BytesSpeedList) {
                let obj = new BytesSpeed();
                obj.deserialize(params.BytesSpeedList[z]);
                this.BytesSpeedList.push(obj);
            }
        }

    }
}

/**
 * DescribeTopTableStat请求参数结构体
 * @class
 */
class DescribeTopTableStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 开始时间，时间戳到秒
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 结束时间，时间戳到秒
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * BatchCreateIntegrationTaskAlarms返回参数结构体
 * @class
 */
class BatchCreateIntegrationTaskAlarmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationStatistics请求参数结构体
 * @class
 */
class DescribeIntegrationStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型（实时：201，离线：202）
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 查询日期
         * @type {string || null}
         */
        this.QueryDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.QueryDate = 'QueryDate' in params ? params.QueryDate : null;

    }
}

/**
 * DescribeRuleGroup请求参数结构体
 * @class
 */
class DescribeRuleGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组ID
         * @type {number || null}
         */
        this.RuleGroupId = null;

        /**
         * 数据来源ID
         * @type {string || null}
         */
        this.DatasourceId = null;

        /**
         * 数据表Id
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 数据库ID
         * @type {string || null}
         */
        this.DatabaseId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleGroupId = 'RuleGroupId' in params ? params.RuleGroupId : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;
        this.TableId = 'TableId' in params ? params.TableId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;

    }
}

/**
 * DescribeInLongAgentTaskList请求参数结构体
 * @class
 */
class DescribeInLongAgentTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集器ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * WeData项目ID
         * @type {string || null}
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
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyTaskName请求参数结构体
 * @class
 */
class ModifyTaskNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目/工作空间id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Notes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Notes = 'Notes' in params ? params.Notes : null;

    }
}

/**
 * DescribeTrendStat请求参数结构体
 * @class
 */
class DescribeTrendStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 开始时间，时间戳到秒
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 结束时间，时间戳到秒
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * 规则组执行结果分页
 * @class
 */
class RuleGroupExecResultPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 规则组执行结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleGroupExecResult> || null}
         */
        this.Items = null;

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
                let obj = new RuleGroupExecResult();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * ModifyWorkflowInfo返回参数结构体
 * @class
 */
class ModifyWorkflowInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true代表成功，false代表失败
         * @type {boolean || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 包含层级信息的函数
 * @class
 */
class OrganizationalFunction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 展示名称
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 层级路径
         * @type {string || null}
         */
        this.LayerPath = null;

        /**
         * 上级层级路径
         * @type {string || null}
         */
        this.ParentLayerPath = null;

        /**
         * 函数类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 函数分类：窗口函数、聚合函数、日期函数......
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 函数种类：系统函数、自定义函数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 函数状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 函数说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数用法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Usage = null;

        /**
         * 函数参数说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParamDesc = null;

        /**
         * 函数返回值说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnDesc = null;

        /**
         * 函数示例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Example = null;

        /**
         * 集群实例引擎 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterIdentifier = null;

        /**
         * 函数 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FuncId = null;

        /**
         * 函数类名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * 函数资源列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FunctionVersion> || null}
         */
        this.ResourceList = null;

        /**
         * 操作人 ID 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.OperatorUserIds = null;

        /**
         * 公有云 Owner ID 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.OwnerUserIds = null;

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 提交失败错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubmitErrorMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.LayerPath = 'LayerPath' in params ? params.LayerPath : null;
        this.ParentLayerPath = 'ParentLayerPath' in params ? params.ParentLayerPath : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Usage = 'Usage' in params ? params.Usage : null;
        this.ParamDesc = 'ParamDesc' in params ? params.ParamDesc : null;
        this.ReturnDesc = 'ReturnDesc' in params ? params.ReturnDesc : null;
        this.Example = 'Example' in params ? params.Example : null;
        this.ClusterIdentifier = 'ClusterIdentifier' in params ? params.ClusterIdentifier : null;
        this.FuncId = 'FuncId' in params ? params.FuncId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;

        if (params.ResourceList) {
            this.ResourceList = new Array();
            for (let z in params.ResourceList) {
                let obj = new FunctionVersion();
                obj.deserialize(params.ResourceList[z]);
                this.ResourceList.push(obj);
            }
        }
        this.OperatorUserIds = 'OperatorUserIds' in params ? params.OperatorUserIds : null;
        this.OwnerUserIds = 'OwnerUserIds' in params ? params.OwnerUserIds : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.SubmitErrorMsg = 'SubmitErrorMsg' in params ? params.SubmitErrorMsg : null;

    }
}

/**
 * 通用排序字段
 * @class
 */
class OrderField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 排序方向：ASC|DESC
         * @type {string || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * BatchSuspendIntegrationTasks返回参数结构体
 * @class
 */
class BatchSuspendIntegrationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleExecLog请求参数结构体
 * @class
 */
class DescribeRuleExecLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则执行Id
         * @type {number || null}
         */
        this.RuleExecId = null;

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则组执行id
         * @type {number || null}
         */
        this.RuleGroupExecId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleExecId = 'RuleExecId' in params ? params.RuleExecId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleGroupExecId = 'RuleGroupExecId' in params ? params.RuleGroupExecId : null;

    }
}

/**
 * BatchRerunIntegrationTaskInstances返回参数结构体
 * @class
 */
class BatchRerunIntegrationTaskInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则组分页
 * @class
 */
class RuleGroupPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 规则组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleGroup> || null}
         */
        this.Items = null;

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
                let obj = new RuleGroup();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * CommitRuleGroupExecResult返回参数结构体
 * @class
 */
class CommitRuleGroupExecResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntegrationTasks请求参数结构体
 * @class
 */
class DescribeIntegrationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 分页第n页
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 查询filter
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段信息
         * @type {Array.<OrderField> || null}
         */
        this.OrderFields = null;

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
         * 201. stream, 202. offline 默认实时
         * @type {number || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderFields) {
            this.OrderFields = new Array();
            for (let z in params.OrderFields) {
                let obj = new OrderField();
                obj.deserialize(params.OrderFields[z]);
                this.OrderFields.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * DescribeTasksByPage请求参数结构体
 * @class
 */
class DescribeTasksByPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 工作流ID
         * @type {string || null}
         */
        this.WorkflowId = null;

        /**
         * 页码，默认1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页大小，默认10
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * BatchMakeUpIntegrationTasks返回参数结构体
 * @class
 */
class BatchMakeUpIntegrationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功的任务数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 操作失败的任务数
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 任务总数
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CommitExportTask请求参数结构体
 * @class
 */
class CommitExportTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 规则执行Id
         * @type {number || null}
         */
        this.RuleExecId = null;

        /**
         * 导出类型(1.全部,2.触发行,3.通过行)
         * @type {number || null}
         */
        this.ExportType = null;

        /**
         * 执行资源组id
         * @type {string || null}
         */
        this.ExecutorGroupId = null;

        /**
         * 计算资源队列
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RuleExecId = 'RuleExecId' in params ? params.RuleExecId : null;
        this.ExportType = 'ExportType' in params ? params.ExportType : null;
        this.ExecutorGroupId = 'ExecutorGroupId' in params ? params.ExecutorGroupId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * DescribeTaskInstance请求参数结构体
 * @class
 */
class DescribeTaskInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * WeData项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务实例数据时间
         * @type {string || null}
         */
        this.CurRunDate = null;

        /**
         * 任务实例运行时间
         * @type {string || null}
         */
        this.IssueDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CurRunDate = 'CurRunDate' in params ? params.CurRunDate : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;

    }
}

module.exports = {
    CreateRuleTemplateResponse: CreateRuleTemplateResponse,
    AlarmInfo: AlarmInfo,
    TaskLogResponse: TaskLogResponse,
    RuleHistory: RuleHistory,
    DescribeIntegrationStatisticsResponse: DescribeIntegrationStatisticsResponse,
    UnlockIntegrationTaskResponse: UnlockIntegrationTaskResponse,
    DescribeStreamTaskLogListRequest: DescribeStreamTaskLogListRequest,
    DescribeIntegrationNodeResponse: DescribeIntegrationNodeResponse,
    MakeUpTasksNewResponse: MakeUpTasksNewResponse,
    LogContentInfo: LogContentInfo,
    DescribeRuleDimStatResponse: DescribeRuleDimStatResponse,
    DescribeInstanceLogsRequest: DescribeInstanceLogsRequest,
    DescribeTaskAlarmRegulationsResponse: DescribeTaskAlarmRegulationsResponse,
    CheckIntegrationTaskNameExistsResponse: CheckIntegrationTaskNameExistsResponse,
    CreateDataSourceRequest: CreateDataSourceRequest,
    IntegrationNodeSchemaMapping: IntegrationNodeSchemaMapping,
    DescribeTrendStatResponse: DescribeTrendStatResponse,
    DescribeRealTimeTaskSpeedRequest: DescribeRealTimeTaskSpeedRequest,
    DescribeRuleDimStatRequest: DescribeRuleDimStatRequest,
    FreezeTasksRequest: FreezeTasksRequest,
    DescribeDataObjectsResponse: DescribeDataObjectsResponse,
    DescribeRuleTemplatesResponse: DescribeRuleTemplatesResponse,
    MakeUpWorkflowNewResponse: MakeUpWorkflowNewResponse,
    CreateIntegrationNodeResponse: CreateIntegrationNodeResponse,
    TaskInnerInfo: TaskInnerInfo,
    SourceObject: SourceObject,
    DescribeRulesResponse: DescribeRulesResponse,
    RecordsSpeed: RecordsSpeed,
    CreateWorkflowRequest: CreateWorkflowRequest,
    SubmitTaskRequest: SubmitTaskRequest,
    RuleExecResultDetail: RuleExecResultDetail,
    DataSourceInfoPage: DataSourceInfoPage,
    DescribeRuleGroupExecResultsByPageRequest: DescribeRuleGroupExecResultsByPageRequest,
    Label: Label,
    TaskExtInfo: TaskExtInfo,
    BatchResumeIntegrationTasksResponse: BatchResumeIntegrationTasksResponse,
    DescribeRuleExecResultsByPageResponse: DescribeRuleExecResultsByPageResponse,
    RuleGroupExecResult: RuleGroupExecResult,
    AlarmEventInfo: AlarmEventInfo,
    BytesSpeed: BytesSpeed,
    CheckTaskNameExistRequest: CheckTaskNameExistRequest,
    ThresholdValue: ThresholdValue,
    DescribeFunctionKindsRequest: DescribeFunctionKindsRequest,
    DescribeFunctionKindsResponse: DescribeFunctionKindsResponse,
    DescribeTemplateDimCountRequest: DescribeTemplateDimCountRequest,
    ModifyIntegrationTaskResponse: ModifyIntegrationTaskResponse,
    DescribeDataSourceListRequest: DescribeDataSourceListRequest,
    DescribeIntegrationStatisticsRecordsTrendRequest: DescribeIntegrationStatisticsRecordsTrendRequest,
    DescribeInLongTkeClusterListResponse: DescribeInLongTkeClusterListResponse,
    KillInstancesRequest: KillInstancesRequest,
    DescribeDataCheckStatRequest: DescribeDataCheckStatRequest,
    RegisterEventListenerResponse: RegisterEventListenerResponse,
    RestartInLongAgentResponse: RestartInLongAgentResponse,
    Workflow: Workflow,
    DescribeRuleExecResultsRequest: DescribeRuleExecResultsRequest,
    DescribeStandardRuleDetailInfoListResponse: DescribeStandardRuleDetailInfoListResponse,
    RunTaskResponse: RunTaskResponse,
    BatchStopTasksNewRequest: BatchStopTasksNewRequest,
    TriggerEventRequest: TriggerEventRequest,
    ResourcePathTree: ResourcePathTree,
    DescribeClusterNamespaceListResponse: DescribeClusterNamespaceListResponse,
    CreateInLongAgentResponse: CreateInLongAgentResponse,
    TaskLinkInfo: TaskLinkInfo,
    DescribeInstanceLogRequest: DescribeInstanceLogRequest,
    DescribeKafkaTopicInfoRequest: DescribeKafkaTopicInfoRequest,
    DescribeRuleGroupSubscriptionResponse: DescribeRuleGroupSubscriptionResponse,
    DescribeIntegrationStatisticsTaskStatusTrendResponse: DescribeIntegrationStatisticsTaskStatusTrendResponse,
    DescribeDataBasesResponse: DescribeDataBasesResponse,
    SaveCustomFunctionRequest: SaveCustomFunctionRequest,
    InLongTkeDetail: InLongTkeDetail,
    RuleGroupExecStrategy: RuleGroupExecStrategy,
    ModifyWorkflowScheduleRequest: ModifyWorkflowScheduleRequest,
    DescribeRuleDataSourcesResponse: DescribeRuleDataSourcesResponse,
    RegisterEventRequest: RegisterEventRequest,
    RuleTemplate: RuleTemplate,
    DescribeRuleGroupsByPageRequest: DescribeRuleGroupsByPageRequest,
    DescribeDataBasesRequest: DescribeDataBasesRequest,
    BatchDeleteIntegrationTasksResponse: BatchDeleteIntegrationTasksResponse,
    SearchConditionInstanceNew: SearchConditionInstanceNew,
    BatchRerunIntegrationTaskInstancesRequest: BatchRerunIntegrationTaskInstancesRequest,
    RuleTemplateHistoryPage: RuleTemplateHistoryPage,
    DescribeDataObjectsRequest: DescribeDataObjectsRequest,
    SearchCondition: SearchCondition,
    Rule: Rule,
    ModifyRuleGroupSubscriptionRequest: ModifyRuleGroupSubscriptionRequest,
    DescribeDataSourceListResponse: DescribeDataSourceListResponse,
    ModifyIntegrationTaskRequest: ModifyIntegrationTaskRequest,
    ExportTaskInfo: ExportTaskInfo,
    BatchSuspendIntegrationTasksRequest: BatchSuspendIntegrationTasksRequest,
    TaskCanvasInfo: TaskCanvasInfo,
    DescribeFolderListData: DescribeFolderListData,
    TaskInstanceDetail: TaskInstanceDetail,
    UserFileDTO: UserFileDTO,
    DeleteCustomFunctionResponse: DeleteCustomFunctionResponse,
    InstanceNodeInfo: InstanceNodeInfo,
    DimensionScoreInfo: DimensionScoreInfo,
    DescribeTaskScriptResponse: DescribeTaskScriptResponse,
    RuleExecDateStat: RuleExecDateStat,
    DescribeTaskInstanceResponse: DescribeTaskInstanceResponse,
    DescribeProdTasksRequest: DescribeProdTasksRequest,
    CheckDuplicateTemplateNameRequest: CheckDuplicateTemplateNameRequest,
    BatchUpdateIntegrationTasksRequest: BatchUpdateIntegrationTasksRequest,
    CreateResourcePathRequest: CreateResourcePathRequest,
    ResumeIntegrationTaskResponse: ResumeIntegrationTaskResponse,
    ModifyTaskNameResponse: ModifyTaskNameResponse,
    DescribeTaskReportDetailListResponse: DescribeTaskReportDetailListResponse,
    BatchResult: BatchResult,
    DescribeRuleExecHistoryRequest: DescribeRuleExecHistoryRequest,
    DescribeIntegrationStatisticsInstanceTrendResponse: DescribeIntegrationStatisticsInstanceTrendResponse,
    DescribeInstanceLogListRequest: DescribeInstanceLogListRequest,
    RunnerRuleExecResult: RunnerRuleExecResult,
    IntegrationNodeInfo: IntegrationNodeInfo,
    DescribeRuleGroupResponse: DescribeRuleGroupResponse,
    DeleteDataSourcesResponse: DeleteDataSourcesResponse,
    DescribeTaskInstanceReportDetailRequest: DescribeTaskInstanceReportDetailRequest,
    ModifyTaskLinksRequest: ModifyTaskLinksRequest,
    ModifyWorkflowScheduleResponse: ModifyWorkflowScheduleResponse,
    DeleteDataSourcesRequest: DeleteDataSourcesRequest,
    ModifyTaskAlarmRegularRequest: ModifyTaskAlarmRegularRequest,
    DescribeOrganizationalFunctionsRequest: DescribeOrganizationalFunctionsRequest,
    DescribeRuleTemplateResponse: DescribeRuleTemplateResponse,
    DescribeKafkaTopicInfoResponse: DescribeKafkaTopicInfoResponse,
    RerunInstancesRequest: RerunInstancesRequest,
    DescribeTemplateHistoryRequest: DescribeTemplateHistoryRequest,
    CommitIntegrationTaskRequest: CommitIntegrationTaskRequest,
    DescribeTableInfoListRequest: DescribeTableInfoListRequest,
    DescribeQualityScoreRequest: DescribeQualityScoreRequest,
    CommitIntegrationTaskResponse: CommitIntegrationTaskResponse,
    IntegrationTaskInfo: IntegrationTaskInfo,
    SubmitTaskResponse: SubmitTaskResponse,
    ModifyFolderRequest: ModifyFolderRequest,
    DescribeAlarmEventsResponse: DescribeAlarmEventsResponse,
    DescribeInstanceLogListResponse: DescribeInstanceLogListResponse,
    RuleGroup: RuleGroup,
    RuleConfig: RuleConfig,
    RunTaskRequest: RunTaskRequest,
    DescribeDependTasksNewRequest: DescribeDependTasksNewRequest,
    CreateOfflineTaskResponse: CreateOfflineTaskResponse,
    CreateTaskAlarmRegularRequest: CreateTaskAlarmRegularRequest,
    ModifyRuleRequest: ModifyRuleRequest,
    BatchReturn: BatchReturn,
    DescribeInLongAgentListRequest: DescribeInLongAgentListRequest,
    DescribeRuleExecLogResponse: DescribeRuleExecLogResponse,
    ParamInfo: ParamInfo,
    DescribeInstanceLogsResponse: DescribeInstanceLogsResponse,
    BatchDeleteIntegrationTasksRequest: BatchDeleteIntegrationTasksRequest,
    TaskLogRequest: TaskLogRequest,
    DescribeIntegrationStatisticsTaskStatusRequest: DescribeIntegrationStatisticsTaskStatusRequest,
    BatchDeleteTasksNewResponse: BatchDeleteTasksNewResponse,
    IntegrationNodeMapping: IntegrationNodeMapping,
    ModifyRuleGroupSubscriptionResponse: ModifyRuleGroupSubscriptionResponse,
    SuspendIntegrationTaskRequest: SuspendIntegrationTaskRequest,
    CreateHiveTableByDDLResponse: CreateHiveTableByDDLResponse,
    DescribeExecStrategyResponse: DescribeExecStrategyResponse,
    ModifyTaskScriptResponse: ModifyTaskScriptResponse,
    DeleteResourceResponse: DeleteResourceResponse,
    ModifyRuleResponse: ModifyRuleResponse,
    Namespace: Namespace,
    RuleDimStat: RuleDimStat,
    DescribeTaskInstancesResponse: DescribeTaskInstancesResponse,
    DescribeInstanceListRequest: DescribeInstanceListRequest,
    DeleteCustomFunctionRequest: DeleteCustomFunctionRequest,
    TaskInfoDataPage: TaskInfoDataPage,
    TaskLockStatus: TaskLockStatus,
    BatchCreateIntegrationTaskAlarmsRequest: BatchCreateIntegrationTaskAlarmsRequest,
    DescribeTaskInstancesData: DescribeTaskInstancesData,
    DryRunDIOfflineTaskRequest: DryRunDIOfflineTaskRequest,
    CreateOfflineTaskRequest: CreateOfflineTaskRequest,
    DescribeIntegrationStatisticsRecordsTrendResponse: DescribeIntegrationStatisticsRecordsTrendResponse,
    DescribeFolderWorkflowListData: DescribeFolderWorkflowListData,
    TableConfig: TableConfig,
    TableScoreStatisticsInfo: TableScoreStatisticsInfo,
    BatchForceSuccessIntegrationTaskInstancesResponse: BatchForceSuccessIntegrationTaskInstancesResponse,
    TaskAlarmInfo: TaskAlarmInfo,
    DescribeClusterNamespaceListRequest: DescribeClusterNamespaceListRequest,
    AlarmReceiverInfo: AlarmReceiverInfo,
    GeneralTaskParam: GeneralTaskParam,
    CreateInLongAgentRequest: CreateInLongAgentRequest,
    ModifyRuleTemplateRequest: ModifyRuleTemplateRequest,
    DescribeRuleExecStatResponse: DescribeRuleExecStatResponse,
    DimensionScore: DimensionScore,
    CanvasInfo: CanvasInfo,
    DescribeTableQualityDetailsRequest: DescribeTableQualityDetailsRequest,
    IntegrationNodeDetail: IntegrationNodeDetail,
    ForceSucInstancesRequest: ForceSucInstancesRequest,
    DescribeRuleExecExportResultRequest: DescribeRuleExecExportResultRequest,
    GenHiveTableDDLSqlRequest: GenHiveTableDDLSqlRequest,
    DescribeRuleExecResultsByPageRequest: DescribeRuleExecResultsByPageRequest,
    QualityScore: QualityScore,
    LockIntegrationTaskResponse: LockIntegrationTaskResponse,
    DescribeFunctionTypesResponse: DescribeFunctionTypesResponse,
    DeleteWorkflowNewRequest: DeleteWorkflowNewRequest,
    BatchUpdateIntegrationTasksResponse: BatchUpdateIntegrationTasksResponse,
    CheckDuplicateRuleNameRequest: CheckDuplicateRuleNameRequest,
    MakeUpWorkflowNewRequest: MakeUpWorkflowNewRequest,
    DescribeInstanceLastLogRequest: DescribeInstanceLastLogRequest,
    TableQualityDetailPage: TableQualityDetailPage,
    DescribeTaskInstancesRequest: DescribeTaskInstancesRequest,
    TaskInstanceInfo: TaskInstanceInfo,
    CreateTaskAlarmRegularResponse: CreateTaskAlarmRegularResponse,
    DeleteRuleTemplateRequest: DeleteRuleTemplateRequest,
    TableInfo: TableInfo,
    DescribeProjectRequest: DescribeProjectRequest,
    CreateIntegrationTaskResponse: CreateIntegrationTaskResponse,
    DescribeIntegrationTasksResponse: DescribeIntegrationTasksResponse,
    DescribeAlarmReceiverRequest: DescribeAlarmReceiverRequest,
    SchedulerTaskInstanceInfo: SchedulerTaskInstanceInfo,
    UpdateInLongAgentResponse: UpdateInLongAgentResponse,
    ModifyWorkflowInfoRequest: ModifyWorkflowInfoRequest,
    SubmitWorkflow: SubmitWorkflow,
    BatchResumeIntegrationTasksRequest: BatchResumeIntegrationTasksRequest,
    DescribeFolderListRequest: DescribeFolderListRequest,
    DeleteTaskAlarmRegularResponse: DeleteTaskAlarmRegularResponse,
    DescribeRuleGroupSubscriptionRequest: DescribeRuleGroupSubscriptionRequest,
    DescribeInLongAgentListResponse: DescribeInLongAgentListResponse,
    Folder: Folder,
    CreateTaskResponse: CreateTaskResponse,
    TableQualityDetail: TableQualityDetail,
    BatchStopIntegrationTasksResponse: BatchStopIntegrationTasksResponse,
    InLongAgentDetail: InLongAgentDetail,
    ModifyDataSourceRequest: ModifyDataSourceRequest,
    DeleteIntegrationNodeResponse: DeleteIntegrationNodeResponse,
    CommitRuleGroupExecResultRequest: CommitRuleGroupExecResultRequest,
    DescribeDataSourceInfoListRequest: DescribeDataSourceInfoListRequest,
    UpdateInLongAgentRequest: UpdateInLongAgentRequest,
    DescribeRuleGroupExecResultsByPageWithoutAuthResponse: DescribeRuleGroupExecResultsByPageWithoutAuthResponse,
    DescribeIntegrationNodeRequest: DescribeIntegrationNodeRequest,
    SetTaskAlarmNewResponse: SetTaskAlarmNewResponse,
    DescribeDatasourceResponse: DescribeDatasourceResponse,
    RuleExecConfig: RuleExecConfig,
    SuspendIntegrationTaskResponse: SuspendIntegrationTaskResponse,
    RecordField: RecordField,
    DescribeQualityScoreResponse: DescribeQualityScoreResponse,
    DescribeRulesByPageResponse: DescribeRulesByPageResponse,
    CvmAgentStatus: CvmAgentStatus,
    DescribeRuleTablesByPageRequest: DescribeRuleTablesByPageRequest,
    TopTableStatItem: TopTableStatItem,
    DeleteRuleResponse: DeleteRuleResponse,
    DescribeDataSourceInfoListResponse: DescribeDataSourceInfoListResponse,
    DescribeRelatedInstancesResponse: DescribeRelatedInstancesResponse,
    CheckIntegrationTaskNameExistsRequest: CheckIntegrationTaskNameExistsRequest,
    CheckIntegrationNodeNameExistsRequest: CheckIntegrationNodeNameExistsRequest,
    MakeUpTasksNewRequest: MakeUpTasksNewRequest,
    DescribeDimensionScoreResponse: DescribeDimensionScoreResponse,
    SubmitWorkflowResponse: SubmitWorkflowResponse,
    DescribeOrganizationalFunctionsResponse: DescribeOrganizationalFunctionsResponse,
    DescribeDataTypesResponse: DescribeDataTypesResponse,
    SubmitCustomFunctionRequest: SubmitCustomFunctionRequest,
    DescribeDataTypesRequest: DescribeDataTypesRequest,
    CheckDuplicateRuleNameResponse: CheckDuplicateRuleNameResponse,
    DeleteRuleRequest: DeleteRuleRequest,
    RealTimeTaskInstanceNodeInfo: RealTimeTaskInstanceNodeInfo,
    GetOfflineInstanceListRequest: GetOfflineInstanceListRequest,
    DescribeStreamTaskLogListResponse: DescribeStreamTaskLogListResponse,
    DeleteWorkflowNewResponse: DeleteWorkflowNewResponse,
    DescribeRuleGroupExecResultsByPageResponse: DescribeRuleGroupExecResultsByPageResponse,
    DescribeRuleGroupExecResultsByPageWithoutAuthRequest: DescribeRuleGroupExecResultsByPageWithoutAuthRequest,
    OfflineInstance: OfflineInstance,
    DescribeInstancesResponse: DescribeInstancesResponse,
    RulePage: RulePage,
    DeleteIntegrationNodeRequest: DeleteIntegrationNodeRequest,
    ModifyIntegrationNodeResponse: ModifyIntegrationNodeResponse,
    DescribeIntegrationStatisticsTaskStatusTrendRequest: DescribeIntegrationStatisticsTaskStatusTrendRequest,
    DescribeRuleHistoryByPageResponse: DescribeRuleHistoryByPageResponse,
    UnlockIntegrationTaskRequest: UnlockIntegrationTaskRequest,
    ModifyDimensionWeightResponse: ModifyDimensionWeightResponse,
    ModifyTaskAlarmRegularResponse: ModifyTaskAlarmRegularResponse,
    CreateRuleResponse: CreateRuleResponse,
    ModifyTaskLinksResponse: ModifyTaskLinksResponse,
    BatchMakeUpIntegrationTasksRequest: BatchMakeUpIntegrationTasksRequest,
    DeleteOfflineTaskRequest: DeleteOfflineTaskRequest,
    WeightInfo: WeightInfo,
    DescribeInLongAgentVpcListRequest: DescribeInLongAgentVpcListRequest,
    RuleExecExportResult: RuleExecExportResult,
    DescribeDatabaseInfoListResponse: DescribeDatabaseInfoListResponse,
    CommonContent: CommonContent,
    DescribeTableScoreTrendResponse: DescribeTableScoreTrendResponse,
    ModifyIntegrationNodeRequest: ModifyIntegrationNodeRequest,
    ModifyMonitorStatusResponse: ModifyMonitorStatusResponse,
    DescribeRuleTemplatesByPageResponse: DescribeRuleTemplatesByPageResponse,
    InstanceLog: InstanceLog,
    DescribeTemplateDimCountResponse: DescribeTemplateDimCountResponse,
    DescribeFunctionTypesRequest: DescribeFunctionTypesRequest,
    RestartInLongAgentRequest: RestartInLongAgentRequest,
    BatchDeleteTasksNewRequest: BatchDeleteTasksNewRequest,
    DimensionCount: DimensionCount,
    DescribeInstanceLogResponse: DescribeInstanceLogResponse,
    DeleteInLongAgentResponse: DeleteInLongAgentResponse,
    ModifyMonitorStatusRequest: ModifyMonitorStatusRequest,
    DeleteFolderRequest: DeleteFolderRequest,
    DescribeIntegrationTaskRequest: DescribeIntegrationTaskRequest,
    DescribeRulesByPageRequest: DescribeRulesByPageRequest,
    DescribeTopTableStatResponse: DescribeTopTableStatResponse,
    ProdSchedulerTask: ProdSchedulerTask,
    SourceFieldInfo: SourceFieldInfo,
    FreezeTasksByMultiWorkflowResponse: FreezeTasksByMultiWorkflowResponse,
    SaveCustomFunctionResponse: SaveCustomFunctionResponse,
    OperateResult: OperateResult,
    CreateTaskRequest: CreateTaskRequest,
    ModifyDimensionWeightRequest: ModifyDimensionWeightRequest,
    SimpleTaskInfo: SimpleTaskInfo,
    CreateFolderResponse: CreateFolderResponse,
    DescribeRealTimeTaskInstanceNodeInfoRequest: DescribeRealTimeTaskInstanceNodeInfoRequest,
    DescribeTaskInstanceReportDetailResponse: DescribeTaskInstanceReportDetailResponse,
    CreateHiveTableResponse: CreateHiveTableResponse,
    RuleTemplatePage: RuleTemplatePage,
    ModifyDataSourceResponse: ModifyDataSourceResponse,
    DescribeMonitorsByPageRequest: DescribeMonitorsByPageRequest,
    SubmitWorkflowRequest: SubmitWorkflowRequest,
    RerunInstancesResponse: RerunInstancesResponse,
    DescribeTaskLockStatusResponse: DescribeTaskLockStatusResponse,
    StartIntegrationTaskResponse: StartIntegrationTaskResponse,
    BatchKillIntegrationTaskInstancesRequest: BatchKillIntegrationTaskInstancesRequest,
    InstanceReportWriteNode: InstanceReportWriteNode,
    DependencyConfig: DependencyConfig,
    RobAndLockIntegrationTaskRequest: RobAndLockIntegrationTaskRequest,
    RuleGroupMonitorPage: RuleGroupMonitorPage,
    CommitExportTaskResponse: CommitExportTaskResponse,
    ModifyTaskInfoResponse: ModifyTaskInfoResponse,
    DataCheckStat: DataCheckStat,
    CreateRuleRequest: CreateRuleRequest,
    CommitRuleGroupTaskRequest: CommitRuleGroupTaskRequest,
    DescribeTemplateHistoryResponse: DescribeTemplateHistoryResponse,
    DescribeRuleExecResultsResponse: DescribeRuleExecResultsResponse,
    QualityScoreTrend: QualityScoreTrend,
    InstanceInfo: InstanceInfo,
    TaskInfoData: TaskInfoData,
    TriggerEventResponse: TriggerEventResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DescribeRuleDataSourcesRequest: DescribeRuleDataSourcesRequest,
    RuleExecLog: RuleExecLog,
    DescribeResourceManagePathTreesRequest: DescribeResourceManagePathTreesRequest,
    DescribeTasksByPageResponse: DescribeTasksByPageResponse,
    FunctionResource: FunctionResource,
    DescribeTableQualityDetailsResponse: DescribeTableQualityDetailsResponse,
    DescribeStandardRuleDetailInfoListRequest: DescribeStandardRuleDetailInfoListRequest,
    DescribeDataSourceWithoutInfoResponse: DescribeDataSourceWithoutInfoResponse,
    RuleGroupSchedulerInfo: RuleGroupSchedulerInfo,
    DatasourceBaseInfo: DatasourceBaseInfo,
    DescribeRuleTemplatesRequest: DescribeRuleTemplatesRequest,
    RegisterEventResponse: RegisterEventResponse,
    SubscribeReceiver: SubscribeReceiver,
    DescribeQualityScoreTrendRequest: DescribeQualityScoreTrendRequest,
    RobLockState: RobLockState,
    DescribeAlarmEventsRequest: DescribeAlarmEventsRequest,
    CompareResult: CompareResult,
    InstanceReportSummary: InstanceReportSummary,
    CheckAlarmRegularNameExistResponse: CheckAlarmRegularNameExistResponse,
    SubmitCustomFunctionResponse: SubmitCustomFunctionResponse,
    DescribeRuleTablesByPageResponse: DescribeRuleTablesByPageResponse,
    SpeedValue: SpeedValue,
    FunctionVersion: FunctionVersion,
    InstanceReportReadNode: InstanceReportReadNode,
    DescribeTaskAlarmRegulationsRequest: DescribeTaskAlarmRegulationsRequest,
    FreezeTasksResponse: FreezeTasksResponse,
    CreateCustomFunctionResponse: CreateCustomFunctionResponse,
    ModifyTaskInfoRequest: ModifyTaskInfoRequest,
    DataSourceInfo: DataSourceInfo,
    CompareRuleItem: CompareRuleItem,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    DescribeOfflineTaskTokenRequest: DescribeOfflineTaskTokenRequest,
    CreateWorkflowResponse: CreateWorkflowResponse,
    DescribeRuleExecDetailRequest: DescribeRuleExecDetailRequest,
    DeleteResourceRequest: DeleteResourceRequest,
    RuleGroupSubscribe: RuleGroupSubscribe,
    RegisterEventListenerRequest: RegisterEventListenerRequest,
    CheckIntegrationNodeNameExistsResponse: CheckIntegrationNodeNameExistsResponse,
    RobAndLockIntegrationTaskResponse: RobAndLockIntegrationTaskResponse,
    DeleteTaskAlarmRegularRequest: DeleteTaskAlarmRegularRequest,
    CompareRule: CompareRule,
    DescribeIntegrationStatisticsAgentStatusRequest: DescribeIntegrationStatisticsAgentStatusRequest,
    SubscribeWebHook: SubscribeWebHook,
    DeleteOfflineTaskResponse: DeleteOfflineTaskResponse,
    TaskScriptContent: TaskScriptContent,
    IntegrationStatisticsTrendResult: IntegrationStatisticsTrendResult,
    GetIntegrationNodeColumnSchemaRequest: GetIntegrationNodeColumnSchemaRequest,
    ForceSucInstancesResponse: ForceSucInstancesResponse,
    DescribeTaskLockStatusRequest: DescribeTaskLockStatusRequest,
    DescribeTaskReportResponse: DescribeTaskReportResponse,
    DescribeRuleGroupTableRequest: DescribeRuleGroupTableRequest,
    CheckAlarmRegularNameExistRequest: CheckAlarmRegularNameExistRequest,
    GetOfflineDIInstanceListResponse: GetOfflineDIInstanceListResponse,
    SearchConditionInstance: SearchConditionInstance,
    RuleExecResult: RuleExecResult,
    GetOfflineInstanceListResponse: GetOfflineInstanceListResponse,
    CreateIntegrationTaskRequest: CreateIntegrationTaskRequest,
    FieldConfig: FieldConfig,
    DescribeRealTimeTaskMetricOverviewRequest: DescribeRealTimeTaskMetricOverviewRequest,
    CreateResourcePathResponse: CreateResourcePathResponse,
    DeleteFolderResponse: DeleteFolderResponse,
    DescribeResourceManagePathTreesResponse: DescribeResourceManagePathTreesResponse,
    RuleGroupMonitor: RuleGroupMonitor,
    StartIntegrationTaskRequest: StartIntegrationTaskRequest,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    RuleGroupTableInnerInfo: RuleGroupTableInnerInfo,
    DeleteIntegrationTaskRequest: DeleteIntegrationTaskRequest,
    CompareResultItem: CompareResultItem,
    CreateOrUpdateResourceResponse: CreateOrUpdateResourceResponse,
    ModifyTaskScriptRequest: ModifyTaskScriptRequest,
    CreateIntegrationNodeRequest: CreateIntegrationNodeRequest,
    DescribeTableSchemaInfoRequest: DescribeTableSchemaInfoRequest,
    DescribeTableScoreTrendRequest: DescribeTableScoreTrendRequest,
    RuleExecResultPage: RuleExecResultPage,
    ModifyExecStrategyRequest: ModifyExecStrategyRequest,
    BatchForceSuccessIntegrationTaskInstancesRequest: BatchForceSuccessIntegrationTaskInstancesRequest,
    DescribeRealTimeTaskInstanceNodeInfoResponse: DescribeRealTimeTaskInstanceNodeInfoResponse,
    RuleHistoryPage: RuleHistoryPage,
    DescribeProdTasksResponse: DescribeProdTasksResponse,
    DescribeTaskReportRequest: DescribeTaskReportRequest,
    CommitRuleGroupTaskResponse: CommitRuleGroupTaskResponse,
    DescribeRealTimeTaskMetricOverviewResponse: DescribeRealTimeTaskMetricOverviewResponse,
    DescribeOfflineTaskTokenResponse: DescribeOfflineTaskTokenResponse,
    DescribeTableInfoListResponse: DescribeTableInfoListResponse,
    GetOfflineDIInstanceListRequest: GetOfflineDIInstanceListRequest,
    ModifyExecStrategyResponse: ModifyExecStrategyResponse,
    BatchStartIntegrationTasksRequest: BatchStartIntegrationTasksRequest,
    CreateCustomFunctionRequest: CreateCustomFunctionRequest,
    IntegrationNodeSchema: IntegrationNodeSchema,
    DescribeDatasourceRequest: DescribeDatasourceRequest,
    RuleExecStat: RuleExecStat,
    KillInstancesResponse: KillInstancesResponse,
    SetTaskAlarmNewRequest: SetTaskAlarmNewRequest,
    FunctionTypeOrKind: FunctionTypeOrKind,
    DescribeTableSchemaInfoResponse: DescribeTableSchemaInfoResponse,
    DescribeInstanceListResponse: DescribeInstanceListResponse,
    DescribeTaskReportDetailListRequest: DescribeTaskReportDetailListRequest,
    DescribeProjectResponse: DescribeProjectResponse,
    StopIntegrationTaskRequest: StopIntegrationTaskRequest,
    CreateDataSourceResponse: CreateDataSourceResponse,
    DescribeFolderWorkflowListResponse: DescribeFolderWorkflowListResponse,
    CreateFolderRequest: CreateFolderRequest,
    DescribeIntegrationVersionNodesInfoResponse: DescribeIntegrationVersionNodesInfoResponse,
    DescribeRulesRequest: DescribeRulesRequest,
    DescribeRuleResponse: DescribeRuleResponse,
    DescribeTaskScriptRequest: DescribeTaskScriptRequest,
    DescribeRuleHistoryByPageRequest: DescribeRuleHistoryByPageRequest,
    SchemaDetail: SchemaDetail,
    DescribeRuleRequest: DescribeRuleRequest,
    DescribeAlarmReceiverResponse: DescribeAlarmReceiverResponse,
    BatchModifyOwnersNewResponse: BatchModifyOwnersNewResponse,
    DeleteInLongAgentRequest: DeleteInLongAgentRequest,
    Partition: Partition,
    RuleDimCnt: RuleDimCnt,
    BatchOperateResult: BatchOperateResult,
    RuleGroupTable: RuleGroupTable,
    DescribeDimensionScoreRequest: DescribeDimensionScoreRequest,
    Property: Property,
    InLongAgentTask: InLongAgentTask,
    BatchStartIntegrationTasksResponse: BatchStartIntegrationTasksResponse,
    DescribeIntegrationVersionNodesInfoRequest: DescribeIntegrationVersionNodesInfoRequest,
    DescribeRealTimeTaskSpeedResponse: DescribeRealTimeTaskSpeedResponse,
    DescribeIntegrationStatisticsAgentStatusResponse: DescribeIntegrationStatisticsAgentStatusResponse,
    DescribeFolderWorkflowListRequest: DescribeFolderWorkflowListRequest,
    RuleFieldConfig: RuleFieldConfig,
    CheckTaskNameExistResponse: CheckTaskNameExistResponse,
    DescribeInLongAgentTaskListResponse: DescribeInLongAgentTaskListResponse,
    LockIntegrationTaskRequest: LockIntegrationTaskRequest,
    TaskReportDetail: TaskReportDetail,
    BatchStopIntegrationTasksRequest: BatchStopIntegrationTasksRequest,
    DescribeRuleTemplatesByPageRequest: DescribeRuleTemplatesByPageRequest,
    DescribeMonitorsByPageResponse: DescribeMonitorsByPageResponse,
    DescribeInstanceLastLogResponse: DescribeInstanceLastLogResponse,
    DescribeExecStrategyRequest: DescribeExecStrategyRequest,
    CreateHiveTableRequest: CreateHiveTableRequest,
    BatchKillIntegrationTaskInstancesResponse: BatchKillIntegrationTaskInstancesResponse,
    ModifyRuleTemplateResponse: ModifyRuleTemplateResponse,
    CreateOrUpdateResourceRequest: CreateOrUpdateResourceRequest,
    DescribeRuleGroupTableResponse: DescribeRuleGroupTableResponse,
    DescribeDataSourceWithoutInfoRequest: DescribeDataSourceWithoutInfoRequest,
    DailyScoreInfo: DailyScoreInfo,
    RuleTemplateHistory: RuleTemplateHistory,
    DescribeInLongAgentVpcListResponse: DescribeInLongAgentVpcListResponse,
    DeleteRuleTemplateResponse: DeleteRuleTemplateResponse,
    DescribeRuleTemplateRequest: DescribeRuleTemplateRequest,
    FreezeTasksByMultiWorkflowRequest: FreezeTasksByMultiWorkflowRequest,
    CommonId: CommonId,
    CreateRuleTemplateRequest: CreateRuleTemplateRequest,
    SearchConditionNew: SearchConditionNew,
    BatchStopTasksNewResponse: BatchStopTasksNewResponse,
    TopTableStat: TopTableStat,
    DescribeRuleExecDetailResponse: DescribeRuleExecDetailResponse,
    Filter: Filter,
    DeleteIntegrationTaskResponse: DeleteIntegrationTaskResponse,
    ResumeIntegrationTaskRequest: ResumeIntegrationTaskRequest,
    DescribeRuleGroupsByPageResponse: DescribeRuleGroupsByPageResponse,
    DescribeFolderListResponse: DescribeFolderListResponse,
    DescribeIntegrationStatisticsTaskStatusResponse: DescribeIntegrationStatisticsTaskStatusResponse,
    DescribeDatabaseInfoListRequest: DescribeDatabaseInfoListRequest,
    DescribeInLongTkeClusterListRequest: DescribeInLongTkeClusterListRequest,
    DescribeRuleExecHistoryResponse: DescribeRuleExecHistoryResponse,
    DescribeIntegrationTaskResponse: DescribeIntegrationTaskResponse,
    DescribeQualityScoreTrendResponse: DescribeQualityScoreTrendResponse,
    ModifyFolderResponse: ModifyFolderResponse,
    CreateHiveTableByDDLRequest: CreateHiveTableByDDLRequest,
    DatabaseInfo: DatabaseInfo,
    GetIntegrationNodeColumnSchemaResponse: GetIntegrationNodeColumnSchemaResponse,
    StopIntegrationTaskResponse: StopIntegrationTaskResponse,
    DescribeDependTasksNewResponse: DescribeDependTasksNewResponse,
    CheckDuplicateTemplateNameResponse: CheckDuplicateTemplateNameResponse,
    DescribeRelatedInstancesRequest: DescribeRelatedInstancesRequest,
    DescribeDataCheckStatResponse: DescribeDataCheckStatResponse,
    DescribeIntegrationStatisticsInstanceTrendRequest: DescribeIntegrationStatisticsInstanceTrendRequest,
    BatchModifyOwnersNewRequest: BatchModifyOwnersNewRequest,
    DryRunDIOfflineTaskResponse: DryRunDIOfflineTaskResponse,
    GenHiveTableDDLSqlResponse: GenHiveTableDDLSqlResponse,
    DescribeRuleExecStatRequest: DescribeRuleExecStatRequest,
    OfflineTaskAddParam: OfflineTaskAddParam,
    DescribeRuleExecExportResultResponse: DescribeRuleExecExportResultResponse,
    LogContent: LogContent,
    RealTimeTaskSpeed: RealTimeTaskSpeed,
    DescribeTopTableStatRequest: DescribeTopTableStatRequest,
    BatchCreateIntegrationTaskAlarmsResponse: BatchCreateIntegrationTaskAlarmsResponse,
    DescribeIntegrationStatisticsRequest: DescribeIntegrationStatisticsRequest,
    DescribeRuleGroupRequest: DescribeRuleGroupRequest,
    DescribeInLongAgentTaskListRequest: DescribeInLongAgentTaskListRequest,
    ModifyTaskNameRequest: ModifyTaskNameRequest,
    DescribeTrendStatRequest: DescribeTrendStatRequest,
    RuleGroupExecResultPage: RuleGroupExecResultPage,
    ModifyWorkflowInfoResponse: ModifyWorkflowInfoResponse,
    OrganizationalFunction: OrganizationalFunction,
    OrderField: OrderField,
    BatchSuspendIntegrationTasksResponse: BatchSuspendIntegrationTasksResponse,
    DescribeRuleExecLogRequest: DescribeRuleExecLogRequest,
    BatchRerunIntegrationTaskInstancesResponse: BatchRerunIntegrationTaskInstancesResponse,
    RuleGroupPage: RuleGroupPage,
    CommitRuleGroupExecResultResponse: CommitRuleGroupExecResultResponse,
    DescribeIntegrationTasksRequest: DescribeIntegrationTasksRequest,
    DescribeTasksByPageRequest: DescribeTasksByPageRequest,
    BatchMakeUpIntegrationTasksResponse: BatchMakeUpIntegrationTasksResponse,
    CommitExportTaskRequest: CommitExportTaskRequest,
    DescribeTaskInstanceRequest: DescribeTaskInstanceRequest,

}
