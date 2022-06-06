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
 * 库空间时序数据
 * @class
 */
class SchemaSpaceTimeSeries extends  AbstractModel {
    constructor(){
        super();

        /**
         * 库名
         * @type {string || null}
         */
        this.TableSchema = null;

        /**
         * 单位时间间隔内的空间指标数据。
         * @type {MonitorMetricSeriesData || null}
         */
        this.SeriesData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;

        if (params.SeriesData) {
            let obj = new MonitorMetricSeriesData();
            obj.deserialize(params.SeriesData)
            this.SeriesData = obj;
        }

    }
}

/**
 * redis key空间信息。
 * @class
 */
class RedisKeySpaceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * key名。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * key类型。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * key编码方式。
         * @type {string || null}
         */
        this.Encoding = null;

        /**
         * key过期时间戳（毫秒），0代表未设置过期时间。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * key内存大小，单位Byte。
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 元素个数。
         * @type {number || null}
         */
        this.ItemCount = null;

        /**
         * 最大元素长度。
         * @type {number || null}
         */
        this.MaxElementSize = null;

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
        this.Encoding = 'Encoding' in params ? params.Encoding : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.ItemCount = 'ItemCount' in params ? params.ItemCount : null;
        this.MaxElementSize = 'MaxElementSize' in params ? params.MaxElementSize : null;

    }
}

/**
 * 健康报告任务详情。
 * @class
 */
class HealthReportTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务请求 ID。
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 任务完成进度，单位%。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 任务创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务开始执行时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务完成执行时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务所属实例的基础信息。
         * @type {InstanceBasicInfo || null}
         */
        this.InstanceInfo = null;

        /**
         * 健康报告中的健康信息。
         * @type {HealthStatus || null}
         */
        this.HealthStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.InstanceInfo) {
            let obj = new InstanceBasicInfo();
            obj.deserialize(params.InstanceInfo)
            this.InstanceInfo = obj;
        }

        if (params.HealthStatus) {
            let obj = new HealthStatus();
            obj.deserialize(params.HealthStatus)
            this.HealthStatus = obj;
        }

    }
}

/**
 * CreateDBDiagReportTask请求参数结构体
 * @class
 */
class CreateDBDiagReportTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，如“2020-11-08T14:00:00+08:00”。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如“2020-11-09T14:00:00+08:00”。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 是否发送邮件: 0 - 否，1 - 是。
         * @type {number || null}
         */
        this.SendMailFlag = null;

        /**
         * 接收邮件的联系人ID数组。
         * @type {Array.<number> || null}
         */
        this.ContactPerson = null;

        /**
         * 接收邮件的联系组ID数组。
         * @type {Array.<number> || null}
         */
        this.ContactGroup = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认值为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.SendMailFlag = 'SendMailFlag' in params ? params.SendMailFlag : null;
        this.ContactPerson = 'ContactPerson' in params ? params.ContactPerson : null;
        this.ContactGroup = 'ContactGroup' in params ? params.ContactGroup : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 库表空间时序数据
 * @class
 */
class TableSpaceTimeSeries extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 库名。
         * @type {string || null}
         */
        this.TableSchema = null;

        /**
         * 库表的存储引擎。
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 单位时间间隔内的空间指标数据。
         * @type {MonitorFloatMetricSeriesData || null}
         */
        this.SeriesData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;
        this.Engine = 'Engine' in params ? params.Engine : null;

        if (params.SeriesData) {
            let obj = new MonitorFloatMetricSeriesData();
            obj.deserialize(params.SeriesData)
            this.SeriesData = obj;
        }

    }
}

/**
 * DescribeTopSpaceTables请求参数结构体
 * @class
 */
class DescribeTopSpaceTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 返回的Top表数量，最大值为100，默认为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 诊断扣分项。
 * @class
 */
class ScoreItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异常诊断项名称。
         * @type {string || null}
         */
        this.DiagItem = null;

        /**
         * 诊断项分类，取值包括：可用性、可维护性、性能及可靠性。
         * @type {string || null}
         */
        this.IssueType = null;

        /**
         * 健康等级，取值包括：信息、提示、告警、严重、致命。
         * @type {string || null}
         */
        this.TopSeverity = null;

        /**
         * 该异常诊断项出现次数。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 扣分分数。
         * @type {number || null}
         */
        this.ScoreLost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiagItem = 'DiagItem' in params ? params.DiagItem : null;
        this.IssueType = 'IssueType' in params ? params.IssueType : null;
        this.TopSeverity = 'TopSeverity' in params ? params.TopSeverity : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ScoreLost = 'ScoreLost' in params ? params.ScoreLost : null;

    }
}

/**
 * 实例配置。
 * @class
 */
class InstanceConfs extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库巡检开关, Yes/No。
         * @type {string || null}
         */
        this.DailyInspection = null;

        /**
         * 实例概览开关，Yes/No。
         * @type {string || null}
         */
        this.OverviewDisplay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DailyInspection = 'DailyInspection' in params ? params.DailyInspection : null;
        this.OverviewDisplay = 'OverviewDisplay' in params ? params.OverviewDisplay : null;

    }
}

/**
 * CreateSecurityAuditLogExportTask请求参数结构体
 * @class
 */
class CreateSecurityAuditLogExportTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全审计组Id。
         * @type {string || null}
         */
        this.SecAuditGroupId = null;

        /**
         * 导出日志开始时间，例如2020-12-28 00:00:00。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 导出日志结束时间，例如2020-12-28 01:00:00。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 日志风险等级列表，支持值包括：0 无风险；1 低风险；2 中风险；3 高风险。
         * @type {Array.<number> || null}
         */
        this.DangerLevels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecAuditGroupId = 'SecAuditGroupId' in params ? params.SecAuditGroupId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.DangerLevels = 'DangerLevels' in params ? params.DangerLevels : null;

    }
}

/**
 * DescribeDBDiagEvent返回参数结构体
 * @class
 */
class DescribeDBDiagEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断项。
         * @type {string || null}
         */
        this.DiagItem = null;

        /**
         * 诊断类型。
         * @type {string || null}
         */
        this.DiagType = null;

        /**
         * 事件 ID 。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 诊断事件详情，若无附加解释信息则输出为空。
         * @type {string || null}
         */
        this.Explanation = null;

        /**
         * 诊断概要。
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * 诊断出的问题。
         * @type {string || null}
         */
        this.Problem = null;

        /**
         * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 诊断建议，若无建议则输出为空。
         * @type {string || null}
         */
        this.Suggestions = null;

        /**
         * 保留字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 结束时间。
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
        this.DiagItem = 'DiagItem' in params ? params.DiagItem : null;
        this.DiagType = 'DiagType' in params ? params.DiagType : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Explanation = 'Explanation' in params ? params.Explanation : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.Problem = 'Problem' in params ? params.Problem : null;
        this.Severity = 'Severity' in params ? params.Severity : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Suggestions = 'Suggestions' in params ? params.Suggestions : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagEvents返回参数结构体
 * @class
 */
class DescribeDBDiagEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断事件的总数目。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 诊断事件的列表。
         * @type {Array.<DiagHistoryEventItem> || null}
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
                let obj = new DiagHistoryEventItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagReportTasks返回参数结构体
 * @class
 */
class DescribeDBDiagReportTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总数目。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务列表。
         * @type {Array.<HealthReportTask> || null}
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
                let obj = new HealthReportTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddUserContact返回参数结构体
 * @class
 */
class AddUserContactResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加成功的联系人id。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelKillTask返回参数结构体
 * @class
 */
class CancelKillTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * kill会话任务终止成功返回1。
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
 * DescribeRedisTopBigKeys返回参数结构体
 * @class
 */
class DescribeRedisTopBigKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * top key列表。
         * @type {Array.<RedisKeySpaceData> || null}
         */
        this.TopKeys = null;

        /**
         * 采集时间戳（秒）。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopKeys) {
            this.TopKeys = new Array();
            for (let z in params.TopKeys) {
                let obj = new RedisKeySpaceData();
                obj.deserialize(params.TopKeys[z]);
                this.TopKeys.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSqlTemplate请求参数结构体
 * @class
 */
class DescribeSqlTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名。
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * SQL语句。
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeTopSpaceSchemaTimeSeries返回参数结构体
 * @class
 */
class DescribeTopSpaceSchemaTimeSeriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的Top库空间统计信息的时序数据列表。
         * @type {Array.<SchemaSpaceTimeSeries> || null}
         */
        this.TopSpaceSchemaTimeSeries = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopSpaceSchemaTimeSeries) {
            this.TopSpaceSchemaTimeSeries = new Array();
            for (let z in params.TopSpaceSchemaTimeSeries) {
                let obj = new SchemaSpaceTimeSeries();
                obj.deserialize(params.TopSpaceSchemaTimeSeries[z]);
                this.TopSpaceSchemaTimeSeries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 慢日志TopSql
 * @class
 */
class SlowLogTopSqlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * sql总锁等待时间，单位秒
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * 最大锁等待时间，单位秒
         * @type {number || null}
         */
        this.LockTimeMax = null;

        /**
         * 最小锁等待时间，单位秒
         * @type {number || null}
         */
        this.LockTimeMin = null;

        /**
         * 总扫描行数
         * @type {number || null}
         */
        this.RowsExamined = null;

        /**
         * 最大扫描行数
         * @type {number || null}
         */
        this.RowsExaminedMax = null;

        /**
         * 最小扫描行数
         * @type {number || null}
         */
        this.RowsExaminedMin = null;

        /**
         * 总耗时，单位秒
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * 最大执行时间，单位秒
         * @type {number || null}
         */
        this.QueryTimeMax = null;

        /**
         * 最小执行时间，单位秒
         * @type {number || null}
         */
        this.QueryTimeMin = null;

        /**
         * 总返回行数
         * @type {number || null}
         */
        this.RowsSent = null;

        /**
         * 最大返回行数
         * @type {number || null}
         */
        this.RowsSentMax = null;

        /**
         * 最小返回行数
         * @type {number || null}
         */
        this.RowsSentMin = null;

        /**
         * 执行次数
         * @type {number || null}
         */
        this.ExecTimes = null;

        /**
         * sql模板
         * @type {string || null}
         */
        this.SqlTemplate = null;

        /**
         * 带参数SQL（随机）
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * 总耗时占比，单位%
         * @type {number || null}
         */
        this.QueryTimeRatio = null;

        /**
         * sql总锁等待时间占比，单位%
         * @type {number || null}
         */
        this.LockTimeRatio = null;

        /**
         * 总扫描行数占比，单位%
         * @type {number || null}
         */
        this.RowsExaminedRatio = null;

        /**
         * 总返回行数占比，单位%
         * @type {number || null}
         */
        this.RowsSentRatio = null;

        /**
         * 平均执行时间，单位秒
         * @type {number || null}
         */
        this.QueryTimeAvg = null;

        /**
         * 平均返回行数
         * @type {number || null}
         */
        this.RowsSentAvg = null;

        /**
         * 平均锁等待时间，单位秒
         * @type {number || null}
         */
        this.LockTimeAvg = null;

        /**
         * 平均扫描行数
         * @type {number || null}
         */
        this.RowsExaminedAvg = null;

        /**
         * SOL模板的MD5值
         * @type {string || null}
         */
        this.Md5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LockTime = 'LockTime' in params ? params.LockTime : null;
        this.LockTimeMax = 'LockTimeMax' in params ? params.LockTimeMax : null;
        this.LockTimeMin = 'LockTimeMin' in params ? params.LockTimeMin : null;
        this.RowsExamined = 'RowsExamined' in params ? params.RowsExamined : null;
        this.RowsExaminedMax = 'RowsExaminedMax' in params ? params.RowsExaminedMax : null;
        this.RowsExaminedMin = 'RowsExaminedMin' in params ? params.RowsExaminedMin : null;
        this.QueryTime = 'QueryTime' in params ? params.QueryTime : null;
        this.QueryTimeMax = 'QueryTimeMax' in params ? params.QueryTimeMax : null;
        this.QueryTimeMin = 'QueryTimeMin' in params ? params.QueryTimeMin : null;
        this.RowsSent = 'RowsSent' in params ? params.RowsSent : null;
        this.RowsSentMax = 'RowsSentMax' in params ? params.RowsSentMax : null;
        this.RowsSentMin = 'RowsSentMin' in params ? params.RowsSentMin : null;
        this.ExecTimes = 'ExecTimes' in params ? params.ExecTimes : null;
        this.SqlTemplate = 'SqlTemplate' in params ? params.SqlTemplate : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.QueryTimeRatio = 'QueryTimeRatio' in params ? params.QueryTimeRatio : null;
        this.LockTimeRatio = 'LockTimeRatio' in params ? params.LockTimeRatio : null;
        this.RowsExaminedRatio = 'RowsExaminedRatio' in params ? params.RowsExaminedRatio : null;
        this.RowsSentRatio = 'RowsSentRatio' in params ? params.RowsSentRatio : null;
        this.QueryTimeAvg = 'QueryTimeAvg' in params ? params.QueryTimeAvg : null;
        this.RowsSentAvg = 'RowsSentAvg' in params ? params.RowsSentAvg : null;
        this.LockTimeAvg = 'LockTimeAvg' in params ? params.LockTimeAvg : null;
        this.RowsExaminedAvg = 'RowsExaminedAvg' in params ? params.RowsExaminedAvg : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

    }
}

/**
 * DescribeNoPrimaryKeyTables返回参数结构体
 * @class
 */
class DescribeNoPrimaryKeyTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无主键表总数。
         * @type {number || null}
         */
        this.NoPrimaryKeyTableCount = null;

        /**
         * 与昨日扫描无主键表的差值，正数为增加，负数为减少，0为无变化。
         * @type {number || null}
         */
        this.NoPrimaryKeyTableCountDiff = null;

        /**
         * 记录的无主键表总数（不超过无主键表总数），可用于分页查询。
         * @type {number || null}
         */
        this.NoPrimaryKeyTableRecordCount = null;

        /**
         * 无主键表列表。
         * @type {Array.<Table> || null}
         */
        this.NoPrimaryKeyTables = null;

        /**
         * 采集时间戳（秒）。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoPrimaryKeyTableCount = 'NoPrimaryKeyTableCount' in params ? params.NoPrimaryKeyTableCount : null;
        this.NoPrimaryKeyTableCountDiff = 'NoPrimaryKeyTableCountDiff' in params ? params.NoPrimaryKeyTableCountDiff : null;
        this.NoPrimaryKeyTableRecordCount = 'NoPrimaryKeyTableRecordCount' in params ? params.NoPrimaryKeyTableRecordCount : null;

        if (params.NoPrimaryKeyTables) {
            this.NoPrimaryKeyTables = new Array();
            for (let z in params.NoPrimaryKeyTables) {
                let obj = new Table();
                obj.deserialize(params.NoPrimaryKeyTables[z]);
                this.NoPrimaryKeyTables.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例诊断历史事件
 * @class
 */
class DiagHistoryEventItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断类型。
         * @type {string || null}
         */
        this.DiagType = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 事件唯一ID 。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * 诊断概要。
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * 诊断项说明。
         * @type {string || null}
         */
        this.DiagItem = null;

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 保留字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 地域。
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
        this.DiagType = 'DiagType' in params ? params.DiagType : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Severity = 'Severity' in params ? params.Severity : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.DiagItem = 'DiagItem' in params ? params.DiagItem : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeProxySessionKillTasks请求参数结构体
 * @class
 */
class DescribeProxySessionKillTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * kill 会话异步任务 ID,  接口 CreateProxySessionKillTask 调用成功后获取。
         * @type {Array.<number> || null}
         */
        this.AsyncRequestIds = null;

        /**
         * 服务产品类型，支持值包括： "redis" - 云数据库 Redis。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AsyncRequestIds = 'AsyncRequestIds' in params ? params.AsyncRequestIds : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeMySqlProcessList返回参数结构体
 * @class
 */
class DescribeMySqlProcessListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实时线程列表。
         * @type {Array.<MySqlProcess> || null}
         */
        this.ProcessList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProcessList) {
            this.ProcessList = new Array();
            for (let z in params.ProcessList) {
                let obj = new MySqlProcess();
                obj.deserialize(params.ProcessList[z]);
                this.ProcessList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例健康详情。
 * @class
 */
class HealthStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健康分数，满分100。
         * @type {number || null}
         */
        this.HealthScore = null;

        /**
         * 健康等级，取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK"- 危险；"HIGH_RISK" - 高危。
         * @type {string || null}
         */
        this.HealthLevel = null;

        /**
         * 总扣分分数。
         * @type {number || null}
         */
        this.ScoreLost = null;

        /**
         * 扣分详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScoreDetail> || null}
         */
        this.ScoreDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HealthScore = 'HealthScore' in params ? params.HealthScore : null;
        this.HealthLevel = 'HealthLevel' in params ? params.HealthLevel : null;
        this.ScoreLost = 'ScoreLost' in params ? params.ScoreLost : null;

        if (params.ScoreDetails) {
            this.ScoreDetails = new Array();
            for (let z in params.ScoreDetails) {
                let obj = new ScoreDetail();
                obj.deserialize(params.ScoreDetails[z]);
                this.ScoreDetails.push(obj);
            }
        }

    }
}

/**
 * DescribeTopSpaceTables返回参数结构体
 * @class
 */
class DescribeTopSpaceTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的Top表空间统计信息列表。
         * @type {Array.<TableSpaceData> || null}
         */
        this.TopSpaceTables = null;

        /**
         * 采集表空间数据的时间戳（秒）。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopSpaceTables) {
            this.TopSpaceTables = new Array();
            for (let z in params.TopSpaceTables) {
                let obj = new TableSpaceData();
                obj.deserialize(params.TopSpaceTables[z]);
                this.TopSpaceTables.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 展示 redis kill 会话任务状态。
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务 ID。
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * 当前实例所有 proxy 列表。
         * @type {Array.<string> || null}
         */
        this.InstProxyList = null;

        /**
         * 当前实例所有 proxy 数量。
         * @type {number || null}
         */
        this.InstProxyCount = null;

        /**
         * 任务创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务启动时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * 完成 kill 任务的 proxyId。
         * @type {Array.<string> || null}
         */
        this.FinishedProxyList = null;

        /**
         * kill 任务实行失败的 proxyId。
         * @type {Array.<string> || null}
         */
        this.FailedProxyList = null;

        /**
         * 任务结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务执行进度。
         * @type {number || null}
         */
        this.Progress = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.InstProxyList = 'InstProxyList' in params ? params.InstProxyList : null;
        this.InstProxyCount = 'InstProxyCount' in params ? params.InstProxyCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.FinishedProxyList = 'FinishedProxyList' in params ? params.FinishedProxyList : null;
        this.FailedProxyList = 'FailedProxyList' in params ? params.FailedProxyList : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifySqlFilters返回参数结构体
 * @class
 */
class ModifySqlFiltersResponse extends  AbstractModel {
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
 * KillMySqlThreads返回参数结构体
 * @class
 */
class KillMySqlThreadsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * kill完成的sql会话ID列表。
         * @type {Array.<number> || null}
         */
        this.Threads = null;

        /**
         * 执行ID， Prepare阶段的任务输出，用于Commit阶段中指定执行kill操作的会话ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SqlExecId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Threads = 'Threads' in params ? params.Threads : null;
        this.SqlExecId = 'SqlExecId' in params ? params.SqlExecId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSchedulerMailProfile请求参数结构体
 * @class
 */
class CreateSchedulerMailProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 取值范围1-7，分别代表周一至周日。
         * @type {Array.<number> || null}
         */
        this.WeekConfiguration = null;

        /**
         * 邮件配置内容。
         * @type {ProfileInfo || null}
         */
        this.ProfileInfo = null;

        /**
         * 配置名称，需要保持唯一性，定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。
         * @type {string || null}
         */
        this.ProfileName = null;

        /**
         * 配置订阅的实例ID。
         * @type {string || null}
         */
        this.BindInstanceId = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WeekConfiguration = 'WeekConfiguration' in params ? params.WeekConfiguration : null;

        if (params.ProfileInfo) {
            let obj = new ProfileInfo();
            obj.deserialize(params.ProfileInfo)
            this.ProfileInfo = obj;
        }
        this.ProfileName = 'ProfileName' in params ? params.ProfileName : null;
        this.BindInstanceId = 'BindInstanceId' in params ? params.BindInstanceId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 联系人contact描述。
 * @class
 */
class ContactItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联系人id。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 联系人姓名。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 联系人绑定的邮箱。
         * @type {string || null}
         */
        this.Mail = null;

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
        this.Mail = 'Mail' in params ? params.Mail : null;

    }
}

/**
 * DescribeDBSpaceStatus请求参数结构体
 * @class
 */
class DescribeDBSpaceStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 时间段天数，截止日期为当日，默认为7天。
         * @type {number || null}
         */
        this.RangeDays = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RangeDays = 'RangeDays' in params ? params.RangeDays : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 单位时间间隔内的慢日志统计
 * @class
 */
class TimeSlice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 统计开始时间
         * @type {number || null}
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * ModifyDiagDBInstanceConf请求参数结构体
 * @class
 */
class ModifyDiagDBInstanceConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例配置，包括巡检、概览开关等。
         * @type {InstanceConfs || null}
         */
        this.InstanceConfs = null;

        /**
         * 生效实例地域，取值为"All"，代表全地域。
         * @type {string || null}
         */
        this.Regions = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 指定更改巡检状态的实例ID。
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

        if (params.InstanceConfs) {
            let obj = new InstanceConfs();
            obj.deserialize(params.InstanceConfs)
            this.InstanceConfs = obj;
        }
        this.Regions = 'Regions' in params ? params.Regions : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeSecurityAuditLogDownloadUrls请求参数结构体
 * @class
 */
class DescribeSecurityAuditLogDownloadUrlsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全审计组Id。
         * @type {string || null}
         */
        this.SecAuditGroupId = null;

        /**
         * 异步任务Id。
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecAuditGroupId = 'SecAuditGroupId' in params ? params.SecAuditGroupId : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateDBDiagReportTask返回参数结构体
 * @class
 */
class CreateDBDiagReportTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
 * CreateMailProfile返回参数结构体
 * @class
 */
class CreateMailProfileResponse extends  AbstractModel {
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
 * DescribeSlowLogTimeSeriesStats请求参数结构体
 * @class
 */
class DescribeSlowLogTimeSeriesStatsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，如“2019-09-10 12:13:14”。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如“2019-09-10 12:13:14”，结束时间与开始时间的间隔最大可为7天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CancelKillTask请求参数结构体
 * @class
 */
class CancelKillTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 关系型数据库线程
 * @class
 */
class MySqlProcess extends  AbstractModel {
    constructor(){
        super();

        /**
         * 线程ID。
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 线程的操作账号名。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 线程的操作主机地址。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 线程的操作数据库。
         * @type {string || null}
         */
        this.DB = null;

        /**
         * 线程的操作状态。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 线程的执行类型。
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 线程的操作时长，单位秒。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 线程的操作语句。
         * @type {string || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.User = 'User' in params ? params.User : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DB = 'DB' in params ? params.DB : null;
        this.State = 'State' in params ? params.State : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Info = 'Info' in params ? params.Info : null;

    }
}

/**
 * DescribeDBDiagHistory请求参数结构体
 * @class
 */
class DescribeDBDiagHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，如“2019-09-10 12:13:14”。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如“2019-09-11 12:13:14”，结束时间与开始时间的间隔最大可为2天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateKillTask返回参数结构体
 * @class
 */
class CreateKillTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * kill会话任务创建成功返回1
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
 * DeleteSqlFilters返回参数结构体
 * @class
 */
class DeleteSqlFiltersResponse extends  AbstractModel {
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
 * DescribeDBDiagEvents请求参数结构体
 * @class
 */
class DescribeDBDiagEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，如“2021-05-27 00:00:00”，支持的最早查询时间为当前时间的前30天。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如“2021-05-27 01:00:00”，结束时间与开始时间的间隔最大可为7天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 风险等级列表，取值按影响程度从高至低分别为：1 - 致命、2 -严重、3 - 告警、4 - 提示、5 -健康。
         * @type {Array.<number> || null}
         */
        this.Severities = null;

        /**
         * 实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 偏移量，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认20，最大值为50。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Severities = 'Severities' in params ? params.Severities : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateDBDiagReportUrl返回参数结构体
 * @class
 */
class CreateDBDiagReportUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健康报告浏览地址。
         * @type {string || null}
         */
        this.ReportUrl = null;

        /**
         * 健康报告浏览地址到期时间戳（秒）。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReportUrl = 'ReportUrl' in params ? params.ReportUrl : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateKillTask请求参数结构体
 * @class
 */
class CreateKillTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * kill会话任务的关联实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 任务持续时间，单位秒，手动关闭任务传-1。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 任务过滤条件，客户端IP。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 任务过滤条件，数据库库名,多个","隔开。
         * @type {string || null}
         */
        this.DB = null;

        /**
         * 任务过滤条件，相关命令，多个","隔开。
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 任务过滤条件，支持单条件前缀匹配。
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 任务过滤条件，用户类型。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 任务过滤条件，会话持续时长，单位秒。
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DB = 'DB' in params ? params.DB : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.User = 'User' in params ? params.User : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 慢日志来源地址详情。
 * @class
 */
class SlowLogHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * 来源地址。
         * @type {string || null}
         */
        this.UserHost = null;

        /**
         * 该来源地址的慢日志数目占总数目的比例，单位%。
         * @type {number || null}
         */
        this.Ratio = null;

        /**
         * 该来源地址的慢日志数目。
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
        this.UserHost = 'UserHost' in params ? params.UserHost : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * CreateMailProfile请求参数结构体
 * @class
 */
class CreateMailProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邮件配置内容。
         * @type {ProfileInfo || null}
         */
        this.ProfileInfo = null;

        /**
         * 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。
         * @type {string || null}
         */
        this.ProfileLevel = null;

        /**
         * 配置名称，需要保持唯一性，数据库巡检邮件配置名称自拟；定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。
         * @type {string || null}
         */
        this.ProfileName = null;

        /**
         * 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。
         * @type {string || null}
         */
        this.ProfileType = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 配置绑定的实例ID，当配置级别为"Instance"时需要传入且只能为一个实例；当配置级别为“User”时，此参数不填。
         * @type {Array.<string> || null}
         */
        this.BindInstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProfileInfo) {
            let obj = new ProfileInfo();
            obj.deserialize(params.ProfileInfo)
            this.ProfileInfo = obj;
        }
        this.ProfileLevel = 'ProfileLevel' in params ? params.ProfileLevel : null;
        this.ProfileName = 'ProfileName' in params ? params.ProfileName : null;
        this.ProfileType = 'ProfileType' in params ? params.ProfileType : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.BindInstanceIds = 'BindInstanceIds' in params ? params.BindInstanceIds : null;

    }
}

/**
 * 单位时间间隔内的监控指标数据（浮点型）
 * @class
 */
class MonitorFloatMetricSeriesData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控指标。
         * @type {Array.<MonitorFloatMetric> || null}
         */
        this.Series = null;

        /**
         * 监控指标对应的时间戳。
         * @type {Array.<number> || null}
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Series) {
            this.Series = new Array();
            for (let z in params.Series) {
                let obj = new MonitorFloatMetric();
                obj.deserialize(params.Series[z]);
                this.Series.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * 邮件发送配置
 * @class
 */
class MailConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启邮件发送: 0, 否; 1, 是。
         * @type {number || null}
         */
        this.SendMail = null;

        /**
         * 地域配置, 如["ap-guangzhou", "ap-shanghai"]。巡检的邮件发送模板，配置需要发送巡检邮件的地域；订阅的邮件发送模板，配置当前订阅实例的所属地域。
         * @type {Array.<string> || null}
         */
        this.Region = null;

        /**
         * 发送指定的健康等级的报告, 如["HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"]。
         * @type {Array.<string> || null}
         */
        this.HealthStatus = null;

        /**
         * 联系人id, 联系人/联系组不能都为空。
         * @type {Array.<number> || null}
         */
        this.ContactPerson = null;

        /**
         * 联系组id, 联系人/联系组不能都为空。
         * @type {Array.<number> || null}
         */
        this.ContactGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SendMail = 'SendMail' in params ? params.SendMail : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.ContactPerson = 'ContactPerson' in params ? params.ContactPerson : null;
        this.ContactGroup = 'ContactGroup' in params ? params.ContactGroup : null;

    }
}

/**
 * VerifyUserAccount请求参数结构体
 * @class
 */
class VerifyUserAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库账号名。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 数据库账号密码。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeSlowLogUserHostStats返回参数结构体
 * @class
 */
class DescribeSlowLogUserHostStatsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 来源地址数目。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 各来源地址的慢日志占比详情列表。
         * @type {Array.<SlowLogHost> || null}
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
                let obj = new SlowLogHost();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 库表空间统计数据。
 * @class
 */
class TableSpaceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 库名。
         * @type {string || null}
         */
        this.TableSchema = null;

        /**
         * 库表的存储引擎。
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 数据空间（MB）。
         * @type {number || null}
         */
        this.DataLength = null;

        /**
         * 索引空间（MB）。
         * @type {number || null}
         */
        this.IndexLength = null;

        /**
         * 碎片空间（MB）。
         * @type {number || null}
         */
        this.DataFree = null;

        /**
         * 总使用空间（MB）。
         * @type {number || null}
         */
        this.TotalLength = null;

        /**
         * 碎片率（%）。
         * @type {number || null}
         */
        this.FragRatio = null;

        /**
         * 行数。
         * @type {number || null}
         */
        this.TableRows = null;

        /**
         * 表对应的独立物理文件大小（MB）。
         * @type {number || null}
         */
        this.PhysicalFileSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.DataLength = 'DataLength' in params ? params.DataLength : null;
        this.IndexLength = 'IndexLength' in params ? params.IndexLength : null;
        this.DataFree = 'DataFree' in params ? params.DataFree : null;
        this.TotalLength = 'TotalLength' in params ? params.TotalLength : null;
        this.FragRatio = 'FragRatio' in params ? params.FragRatio : null;
        this.TableRows = 'TableRows' in params ? params.TableRows : null;
        this.PhysicalFileSize = 'PhysicalFileSize' in params ? params.PhysicalFileSize : null;

    }
}

/**
 * 异常事件信息。
 * @class
 */
class EventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件 ID 。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 诊断类型。
         * @type {string || null}
         */
        this.DiagType = null;

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 概要。
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * 扣分。
         * @type {number || null}
         */
        this.ScoreLost = null;

        /**
         * 保留字段。
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 告警数目。
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
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.DiagType = 'DiagType' in params ? params.DiagType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.Severity = 'Severity' in params ? params.Severity : null;
        this.ScoreLost = 'ScoreLost' in params ? params.ScoreLost : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeMailProfile请求参数结构体
 * @class
 */
class DescribeMailProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。
         * @type {string || null}
         */
        this.ProfileType = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 分页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单位，最大支持50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据邮件配置名称查询，定期发送的邮件配置名称遵循："scheduler_"+{instanceId}的规则。
         * @type {string || null}
         */
        this.ProfileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProfileType = 'ProfileType' in params ? params.ProfileType : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProfileName = 'ProfileName' in params ? params.ProfileName : null;

    }
}

/**
 * DeleteSecurityAuditLogExportTasks返回参数结构体
 * @class
 */
class DeleteSecurityAuditLogExportTasksResponse extends  AbstractModel {
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
 * KillMySqlThreads请求参数结构体
 * @class
 */
class KillMySqlThreadsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * kill会话任务的阶段，取值包括："Prepare"-准备阶段，"Commit"-提交阶段。
         * @type {string || null}
         */
        this.Stage = null;

        /**
         * 需要kill的sql会话ID列表，此参数用于Prepare阶段。
         * @type {Array.<number> || null}
         */
        this.Threads = null;

        /**
         * 执行ID，此参数用于Commit阶段。
         * @type {string || null}
         */
        this.SqlExecId = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Stage = 'Stage' in params ? params.Stage : null;
        this.Threads = 'Threads' in params ? params.Threads : null;
        this.SqlExecId = 'SqlExecId' in params ? params.SqlExecId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeSqlFilters返回参数结构体
 * @class
 */
class DescribeSqlFiltersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限流任务总数目。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 限流任务列表。
         * @type {Array.<SQLFilter> || null}
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
                let obj = new SQLFilter();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBDiagReportUrl请求参数结构体
 * @class
 */
class CreateDBDiagReportUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 健康报告相应的任务ID，可通过DescribeDBDiagReportTasks查询。
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeSecurityAuditLogExportTasks返回参数结构体
 * @class
 */
class DescribeSecurityAuditLogExportTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全审计日志导出任务列表。
         * @type {Array.<SecLogExportTaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * 安全审计日志导出任务总数。
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new SecLogExportTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSqlTemplate返回参数结构体
 * @class
 */
class DescribeSqlTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名。
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * SQL语句。
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * SQL类型。
         * @type {string || null}
         */
        this.SqlType = null;

        /**
         * SQL模版内容。
         * @type {string || null}
         */
        this.SqlTemplate = null;

        /**
         * SQL模版ID。
         * @type {number || null}
         */
        this.SqlId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.SqlType = 'SqlType' in params ? params.SqlType : null;
        this.SqlTemplate = 'SqlTemplate' in params ? params.SqlTemplate : null;
        this.SqlId = 'SqlId' in params ? params.SqlId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取健康得分返回的详情。
 * @class
 */
class HealthScoreInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异常详情。
         * @type {Array.<IssueTypeInfo> || null}
         */
        this.IssueTypes = null;

        /**
         * 异常事件总数。
         * @type {number || null}
         */
        this.EventsTotalCount = null;

        /**
         * 健康得分。
         * @type {number || null}
         */
        this.HealthScore = null;

        /**
         * 健康等级, 如："HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"。
         * @type {string || null}
         */
        this.HealthLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IssueTypes) {
            this.IssueTypes = new Array();
            for (let z in params.IssueTypes) {
                let obj = new IssueTypeInfo();
                obj.deserialize(params.IssueTypes[z]);
                this.IssueTypes.push(obj);
            }
        }
        this.EventsTotalCount = 'EventsTotalCount' in params ? params.EventsTotalCount : null;
        this.HealthScore = 'HealthScore' in params ? params.HealthScore : null;
        this.HealthLevel = 'HealthLevel' in params ? params.HealthLevel : null;

    }
}

/**
 * DescribeTopSpaceTableTimeSeries返回参数结构体
 * @class
 */
class DescribeTopSpaceTableTimeSeriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的Top表空间统计信息的时序数据列表。
         * @type {Array.<TableSpaceTimeSeries> || null}
         */
        this.TopSpaceTableTimeSeries = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopSpaceTableTimeSeries) {
            this.TopSpaceTableTimeSeries = new Array();
            for (let z in params.TopSpaceTableTimeSeries) {
                let obj = new TableSpaceTimeSeries();
                obj.deserialize(params.TopSpaceTableTimeSeries[z]);
                this.TopSpaceTableTimeSeries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagHistory返回参数结构体
 * @class
 */
class DescribeDBDiagHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件描述。
         * @type {Array.<DiagHistoryEventItem> || null}
         */
        this.Events = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new DiagHistoryEventItem();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagEvent请求参数结构体
 * @class
 */
class DescribeDBDiagEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 事件 ID 。通过“获取实例诊断历史DescribeDBDiagHistory”获取。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * ModifySqlFilters请求参数结构体
 * @class
 */
class ModifySqlFiltersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 通过VerifyUserAccount获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * SQL限流任务ID列表。
         * @type {Array.<number> || null}
         */
        this.FilterIds = null;

        /**
         * 限流任务状态，取值支持TERMINATED - 终止。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.FilterIds = 'FilterIds' in params ? params.FilterIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeAllUserContact返回参数结构体
 * @class
 */
class DescribeAllUserContactResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联系人的总数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 联系人的信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ContactItem> || null}
         */
        this.Contacts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Contacts) {
            this.Contacts = new Array();
            for (let z in params.Contacts) {
                let obj = new ContactItem();
                obj.deserialize(params.Contacts[z]);
                this.Contacts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 监控数据
 * @class
 */
class MonitorMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名称。
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 指标单位。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 指标值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
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
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * 用户配置的信息
 * @class
 */
class ProfileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语言, 如"zh"。
         * @type {string || null}
         */
        this.Language = null;

        /**
         * 邮件模板的内容。
         * @type {MailConfiguration || null}
         */
        this.MailConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Language = 'Language' in params ? params.Language : null;

        if (params.MailConfiguration) {
            let obj = new MailConfiguration();
            obj.deserialize(params.MailConfiguration)
            this.MailConfiguration = obj;
        }

    }
}

/**
 * 用户配置的相关信息，包括邮件配置。
 * @class
 */
class UserProfile extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置的id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProfileId = null;

        /**
         * 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProfileType = null;

        /**
         * 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProfileLevel = null;

        /**
         * 配置名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProfileName = null;

        /**
         * 配置详情。
         * @type {ProfileInfo || null}
         */
        this.ProfileInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProfileId = 'ProfileId' in params ? params.ProfileId : null;
        this.ProfileType = 'ProfileType' in params ? params.ProfileType : null;
        this.ProfileLevel = 'ProfileLevel' in params ? params.ProfileLevel : null;
        this.ProfileName = 'ProfileName' in params ? params.ProfileName : null;

        if (params.ProfileInfo) {
            let obj = new ProfileInfo();
            obj.deserialize(params.ProfileInfo)
            this.ProfileInfo = obj;
        }

    }
}

/**
 * AddUserContact请求参数结构体
 * @class
 */
class AddUserContactRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联系人姓名，由中英文、数字、空格、!@#$%^&*()_+-=（）组成，不能以下划线开头，长度在20以内。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 邮箱地址，支持大小写字母、数字、下划线及@字符， 不能以下划线开头，邮箱地址不可重复。
         * @type {string || null}
         */
        this.ContactInfo = null;

        /**
         * 服务产品类型，固定值："mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ContactInfo = 'ContactInfo' in params ? params.ContactInfo : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateSqlFilter请求参数结构体
 * @class
 */
class CreateSqlFilterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 通过VerifyUserAccount获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * SQL类型，取值包括SELECT, UPDATE, DELETE, INSERT, REPLACE。
         * @type {string || null}
         */
        this.SqlType = null;

        /**
         * 关键字，用于筛选SQL语句，多个关键字用英文逗号分隔，逗号不能作为关键词，多个关键词之间的关系为“逻辑与”。
         * @type {string || null}
         */
        this.FilterKey = null;

        /**
         * 最大并发度，取值不能小于0，如果该值设为 0，则表示限制所有匹配的SQL执行。
         * @type {number || null}
         */
        this.MaxConcurrency = null;

        /**
         * 限流时长，单位秒，支持-1和小于2147483647的正整数，-1表示永不过期。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.SqlType = 'SqlType' in params ? params.SqlType : null;
        this.FilterKey = 'FilterKey' in params ? params.FilterKey : null;
        this.MaxConcurrency = 'MaxConcurrency' in params ? params.MaxConcurrency : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 实例基础信息。
 * @class
 */
class InstanceBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例内网IP。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 实例内网Port。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 实例产品。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 实例引擎版本。
         * @type {string || null}
         */
        this.EngineVersion = null;

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
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;

    }
}

/**
 * 库空间统计数据。
 * @class
 */
class SchemaSpaceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 库名。
         * @type {string || null}
         */
        this.TableSchema = null;

        /**
         * 数据空间（MB）。
         * @type {number || null}
         */
        this.DataLength = null;

        /**
         * 索引空间（MB）。
         * @type {number || null}
         */
        this.IndexLength = null;

        /**
         * 碎片空间（MB）。
         * @type {number || null}
         */
        this.DataFree = null;

        /**
         * 总使用空间（MB）。
         * @type {number || null}
         */
        this.TotalLength = null;

        /**
         * 碎片率（%）。
         * @type {number || null}
         */
        this.FragRatio = null;

        /**
         * 行数。
         * @type {number || null}
         */
        this.TableRows = null;

        /**
         * 库中所有表对应的独立物理文件大小加和（MB）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhysicalFileSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;
        this.DataLength = 'DataLength' in params ? params.DataLength : null;
        this.IndexLength = 'IndexLength' in params ? params.IndexLength : null;
        this.DataFree = 'DataFree' in params ? params.DataFree : null;
        this.TotalLength = 'TotalLength' in params ? params.TotalLength : null;
        this.FragRatio = 'FragRatio' in params ? params.FragRatio : null;
        this.TableRows = 'TableRows' in params ? params.TableRows : null;
        this.PhysicalFileSize = 'PhysicalFileSize' in params ? params.PhysicalFileSize : null;

    }
}

/**
 * DescribeAllUserContact请求参数结构体
 * @class
 */
class DescribeAllUserContactRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务产品类型，固定值：mysql。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 联系人名数组，支持模糊搜索。
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * DescribeDiagDBInstances请求参数结构体
 * @class
 */
class DescribeDiagDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否是DBbrain支持的实例，固定传 true。
         * @type {boolean || null}
         */
        this.IsSupported = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 分页参数，偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数，分页值，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据实例名称条件查询。
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * 根据实例ID条件查询。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 根据地域条件查询。
         * @type {Array.<string> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsSupported = 'IsSupported' in params ? params.IsSupported : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Regions = 'Regions' in params ? params.Regions : null;

    }
}

/**
 * DescribeNoPrimaryKeyTables请求参数结构体
 * @class
 */
class DescribeNoPrimaryKeyTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 查询日期，如2021-05-27，最早为30天前的日期。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 查询数目，默认为20，最大为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 查询实例列表，返回实例的相关信息的对象。
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例所属地域。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 健康得分。
         * @type {number || null}
         */
        this.HealthScore = null;

        /**
         * 所属产品。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 异常事件数量。
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * 实例类型：1:MASTER；2:DR，3：RO，4:SDR。
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 核心数。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存，单位MB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 硬盘存储，单位GB。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 数据库版本。
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 内网地址。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 内网端口。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 接入来源。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 分组ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组组名。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 实例状态：0：发货中；1：运行正常；4：销毁中；5：隔离中。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 子网统一ID。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * cdb类型。
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * cdb实例初始化标志：0：未初始化；1：已初始化。
         * @type {number || null}
         */
        this.InitFlag = null;

        /**
         * 任务状态。
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 私有网络统一ID。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 实例巡检/概览的状态。
         * @type {InstanceConfs || null}
         */
        this.InstanceConf = null;

        /**
         * 资源到期时间。
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * 是否是DBbrain支持的实例。
         * @type {boolean || null}
         */
        this.IsSupported = null;

        /**
         * 实例安全审计日志开启状态：ON： 安全审计开启；OFF： 未开启安全审计。
         * @type {string || null}
         */
        this.SecAuditStatus = null;

        /**
         * 实例审计日志开启状态，ALL_AUDIT： 开启全审计；RULE_AUDIT： 开启规则审计；UNBOUND： 未开启审计。
         * @type {string || null}
         */
        this.AuditPolicyStatus = null;

        /**
         * 实例审计日志运行状态：normal： 运行中； paused： 欠费暂停。
         * @type {string || null}
         */
        this.AuditRunningStatus = null;

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
        this.HealthScore = 'HealthScore' in params ? params.HealthScore : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.InitFlag = 'InitFlag' in params ? params.InitFlag : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;

        if (params.InstanceConf) {
            let obj = new InstanceConfs();
            obj.deserialize(params.InstanceConf)
            this.InstanceConf = obj;
        }
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.IsSupported = 'IsSupported' in params ? params.IsSupported : null;
        this.SecAuditStatus = 'SecAuditStatus' in params ? params.SecAuditStatus : null;
        this.AuditPolicyStatus = 'AuditPolicyStatus' in params ? params.AuditPolicyStatus : null;
        this.AuditRunningStatus = 'AuditRunningStatus' in params ? params.AuditRunningStatus : null;

    }
}

/**
 * CreateSqlFilter返回参数结构体
 * @class
 */
class CreateSqlFilterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限流任务ID。
         * @type {number || null}
         */
        this.FilterId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterId = 'FilterId' in params ? params.FilterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyUserAccount返回参数结构体
 * @class
 */
class VerifyUserAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话token，有效期为5分钟。
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSqlFilters请求参数结构体
 * @class
 */
class DescribeSqlFiltersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 任务ID列表，用于筛选任务列表。
         * @type {Array.<number> || null}
         */
        this.FilterIds = null;

        /**
         * 任务状态列表，用于筛选任务列表，取值包括RUNNING - 运行中, FINISHED - 已完成, TERMINATED - 已终止。
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
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
        this.FilterIds = 'FilterIds' in params ? params.FilterIds : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSecurityAuditLogExportTasks请求参数结构体
 * @class
 */
class DescribeSecurityAuditLogExportTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全审计组Id。
         * @type {string || null}
         */
        this.SecAuditGroupId = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 日志导出任务Id列表。
         * @type {Array.<number> || null}
         */
        this.AsyncRequestIds = null;

        /**
         * 偏移量，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认20，最大值为100。
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
        this.SecAuditGroupId = 'SecAuditGroupId' in params ? params.SecAuditGroupId : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.AsyncRequestIds = 'AsyncRequestIds' in params ? params.AsyncRequestIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteSecurityAuditLogExportTasks请求参数结构体
 * @class
 */
class DeleteSecurityAuditLogExportTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全审计组Id。
         * @type {string || null}
         */
        this.SecAuditGroupId = null;

        /**
         * 日志导出任务Id列表，接口会忽略不存在或已删除的任务Id。
         * @type {Array.<number> || null}
         */
        this.AsyncRequestIds = null;

        /**
         * 服务产品类型，支持值： "mysql" - 云数据库 MySQL。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecAuditGroupId = 'SecAuditGroupId' in params ? params.SecAuditGroupId : null;
        this.AsyncRequestIds = 'AsyncRequestIds' in params ? params.AsyncRequestIds : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateSchedulerMailProfile返回参数结构体
 * @class
 */
class CreateSchedulerMailProfileResponse extends  AbstractModel {
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
 * DescribeTopSpaceSchemaTimeSeries请求参数结构体
 * @class
 */
class DescribeTopSpaceSchemaTimeSeriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 返回的Top库数量，最大值为100，默认为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 开始日期，如“2021-01-01”，最早为当日的前第29天，默认为截止日期的前第6天。
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 截止日期，如“2021-01-01”，最早为当日的前第29天，默认为当日。
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeSlowLogTopSqls请求参数结构体
 * @class
 */
class DescribeSlowLogTopSqlsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 开始时间，如“2019-09-10 12:13:14”。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 截止时间，如“2019-09-11 10:13:14”，截止时间与开始时间的间隔小于7天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 排序键，目前支持 QueryTime,ExecTimes,RowsSent,LockTime以及RowsExamined 等排序键，默认为QueryTime。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 排序方式，支持ASC（升序）以及DESC（降序），默认为DESC。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数据库名称数组。
         * @type {Array.<SchemaItem> || null}
         */
        this.SchemaList = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.SchemaList) {
            this.SchemaList = new Array();
            for (let z in params.SchemaList) {
                let obj = new SchemaItem();
                obj.deserialize(params.SchemaList[z]);
                this.SchemaList.push(obj);
            }
        }
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeMailProfile返回参数结构体
 * @class
 */
class DescribeMailProfileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邮件配置详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserProfile> || null}
         */
        this.ProfileList = null;

        /**
         * 邮件配置总数。
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

        if (params.ProfileList) {
            this.ProfileList = new Array();
            for (let z in params.ProfileList) {
                let obj = new UserProfile();
                obj.deserialize(params.ProfileList[z]);
                this.ProfileList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRedisTopBigKeys请求参数结构体
 * @class
 */
class DescribeRedisTopBigKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 查询日期，如2021-05-27，最早可为前30天的日期。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 服务产品类型，支持值包括 "redis" - 云数据库 Redis。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 排序字段，取值包括Capacity - 内存，ItemCount - 元素数量，默认为Capacity。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * key类型筛选条件，默认为不进行筛选，取值包括string, list, set, hash, sortedset, stream。
         * @type {string || null}
         */
        this.KeyType = null;

        /**
         * 查询数目，默认为20，最大值为100。
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
        this.Date = 'Date' in params ? params.Date : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.KeyType = 'KeyType' in params ? params.KeyType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeHealthScore请求参数结构体
 * @class
 */
class DescribeHealthScoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要获取健康得分的实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 获取健康得分的时间，时间格式如：2019-09-10 12:13:14。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 指标信息。
 * @class
 */
class IssueTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标分类：AVAILABILITY：可用性，MAINTAINABILITY：可维护性，PERFORMANCE，性能，RELIABILITY可靠性。
         * @type {string || null}
         */
        this.IssueType = null;

        /**
         * 异常事件。
         * @type {Array.<EventInfo> || null}
         */
        this.Events = null;

        /**
         * 异常事件总数。
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
        this.IssueType = 'IssueType' in params ? params.IssueType : null;

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new EventInfo();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeDiagDBInstances返回参数结构体
 * @class
 */
class DescribeDiagDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 全实例巡检状态：0：开启全实例巡检；1：未开启全实例巡检。
         * @type {number || null}
         */
        this.DbScanStatus = null;

        /**
         * 实例相关信息。
         * @type {Array.<InstanceInfo> || null}
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
        this.DbScanStatus = 'DbScanStatus' in params ? params.DbScanStatus : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAllUserGroup请求参数结构体
 * @class
 */
class DescribeAllUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务产品类型，固定值：mysql。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 联系组名称数组，支持模糊搜索。
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * CreateProxySessionKillTask请求参数结构体
 * @class
 */
class CreateProxySessionKillTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 服务产品类型，支持值包括： "redis" - 云数据库 Redis。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * CreateSecurityAuditLogExportTask返回参数结构体
 * @class
 */
class CreateSecurityAuditLogExportTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出任务Id。
         * @type {number || null}
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
 * SchemaItem数组
 * @class
 */
class SchemaItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Schema = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Schema = 'Schema' in params ? params.Schema : null;

    }
}

/**
 * DescribeSlowLogUserHostStats请求参数结构体
 * @class
 */
class DescribeSlowLogUserHostStatsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 查询范围的开始时间，时间格式如：2019-09-10 12:13:14。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询范围的结束时间，时间格式如：2019-09-10 12:13:14。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * SOL模板的MD5值
         * @type {string || null}
         */
        this.Md5 = null;

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
        this.Product = 'Product' in params ? params.Product : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

    }
}

/**
 * DescribeTopSpaceSchemas返回参数结构体
 * @class
 */
class DescribeTopSpaceSchemasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的Top库空间统计信息列表。
         * @type {Array.<SchemaSpaceData> || null}
         */
        this.TopSpaceSchemas = null;

        /**
         * 采集库空间数据的时间戳（秒）。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopSpaceSchemas) {
            this.TopSpaceSchemas = new Array();
            for (let z in params.TopSpaceSchemas) {
                let obj = new SchemaSpaceData();
                obj.deserialize(params.TopSpaceSchemas[z]);
                this.TopSpaceSchemas.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProxySessionKillTask返回参数结构体
 * @class
 */
class CreateProxySessionKillTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建 kill 会话任务返回的异步任务 id
         * @type {number || null}
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
 * DescribeSlowLogTimeSeriesStats返回参数结构体
 * @class
 */
class DescribeSlowLogTimeSeriesStatsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 柱间单位时间间隔，单位为秒。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 单位时间间隔内慢日志数量统计。
         * @type {Array.<TimeSlice> || null}
         */
        this.TimeSeries = null;

        /**
         * 单位时间间隔内的实例 cpu 利用率监控数据。
         * @type {MonitorMetricSeriesData || null}
         */
        this.SeriesData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;

        if (params.TimeSeries) {
            this.TimeSeries = new Array();
            for (let z in params.TimeSeries) {
                let obj = new TimeSlice();
                obj.deserialize(params.TimeSeries[z]);
                this.TimeSeries.push(obj);
            }
        }

        if (params.SeriesData) {
            let obj = new MonitorMetricSeriesData();
            obj.deserialize(params.SeriesData)
            this.SeriesData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 监控数据（浮点型）
 * @class
 */
class MonitorFloatMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名称。
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 指标单位。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 指标值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
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
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeAllUserGroup返回参数结构体
 * @class
 */
class DescribeAllUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 组信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupItem> || null}
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
                let obj = new GroupItem();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDiagDBInstanceConf返回参数结构体
 * @class
 */
class ModifyDiagDBInstanceConfResponse extends  AbstractModel {
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
 * DescribeUserSqlAdvice返回参数结构体
 * @class
 */
class DescribeUserSqlAdviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SQL优化建议，可解析为JSON数组，无需优化时输出为空。
         * @type {string || null}
         */
        this.Advices = null;

        /**
         * SQL优化建议备注，可解析为String数组，无需优化时输出为空。
         * @type {string || null}
         */
        this.Comments = null;

        /**
         * SQL语句。
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * 库名。
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * 相关表的DDL信息，可解析为JSON数组。
         * @type {string || null}
         */
        this.Tables = null;

        /**
         * SQL执行计划，可解析为JSON，无需优化时输出为空。
         * @type {string || null}
         */
        this.SqlPlan = null;

        /**
         * SQL优化后的成本节约详情，可解析为JSON，无需优化时输出为空。
         * @type {string || null}
         */
        this.Cost = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Advices = 'Advices' in params ? params.Advices : null;
        this.Comments = 'Comments' in params ? params.Comments : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.Tables = 'Tables' in params ? params.Tables : null;
        this.SqlPlan = 'SqlPlan' in params ? params.SqlPlan : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSpaceStatus返回参数结构体
 * @class
 */
class DescribeDBSpaceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 磁盘增长量(MB)。
         * @type {number || null}
         */
        this.Growth = null;

        /**
         * 磁盘剩余(MB)。
         * @type {number || null}
         */
        this.Remain = null;

        /**
         * 磁盘总量(MB)。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 预计可用天数。
         * @type {number || null}
         */
        this.AvailableDays = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Growth = 'Growth' in params ? params.Growth : null;
        this.Remain = 'Remain' in params ? params.Remain : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.AvailableDays = 'AvailableDays' in params ? params.AvailableDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例SQL限流任务。
 * @class
 */
class SQLFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 任务状态，取值包括RUNNING - 运行中, FINISHED - 已完成, TERMINATED - 已终止。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * SQL类型，取值包括SELECT, UPDATE, DELETE, INSERT, REPLACE。
         * @type {string || null}
         */
        this.SqlType = null;

        /**
         * 筛选SQL的关键词，多个关键词用英文逗号拼接。
         * @type {string || null}
         */
        this.OriginKeys = null;

        /**
         * 筛选SQL的规则。
         * @type {string || null}
         */
        this.OriginRule = null;

        /**
         * 已拒绝SQL数目。
         * @type {number || null}
         */
        this.RejectedSqlCount = null;

        /**
         * 当前并发数。
         * @type {number || null}
         */
        this.CurrentConcurrency = null;

        /**
         * 最大并发数。
         * @type {number || null}
         */
        this.MaxConcurrency = null;

        /**
         * 任务创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 当前时间。
         * @type {string || null}
         */
        this.CurrentTime = null;

        /**
         * 限流过期时间。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SqlType = 'SqlType' in params ? params.SqlType : null;
        this.OriginKeys = 'OriginKeys' in params ? params.OriginKeys : null;
        this.OriginRule = 'OriginRule' in params ? params.OriginRule : null;
        this.RejectedSqlCount = 'RejectedSqlCount' in params ? params.RejectedSqlCount : null;
        this.CurrentConcurrency = 'CurrentConcurrency' in params ? params.CurrentConcurrency : null;
        this.MaxConcurrency = 'MaxConcurrency' in params ? params.MaxConcurrency : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.CurrentTime = 'CurrentTime' in params ? params.CurrentTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * 描述组信息。
 * @class
 */
class GroupItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组id。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 组名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 组成员数量。
         * @type {number || null}
         */
        this.MemberCount = null;

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
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;

    }
}

/**
 * DescribeTopSpaceTableTimeSeries请求参数结构体
 * @class
 */
class DescribeTopSpaceTableTimeSeriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 返回的Top表数量，最大值为100，默认为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 开始日期，如“2021-01-01”，最早为当日的前第29天，默认为截止日期的前第6天。
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 截止日期，如“2021-01-01”，最早为当日的前第29天，默认为当日。
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeDBDiagReportTasks请求参数结构体
 * @class
 */
class DescribeDBDiagReportTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第一个任务的开始时间，用于范围查询，时间格式如：2019-09-10 12:13:14。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 最后一个任务的开始时间，用于范围查询，时间格式如：2019-09-10 12:13:14。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 实例ID数组，用于筛选指定实例的任务列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。
         * @type {Array.<string> || null}
         */
        this.Sources = null;

        /**
         * 报告的健康等级，支持的取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK" - 危险；"HIGH_RISK" - 高危。
         * @type {string || null}
         */
        this.HealthLevels = null;

        /**
         * 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。
         * @type {string || null}
         */
        this.TaskStatuses = null;

        /**
         * 偏移量，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Sources = 'Sources' in params ? params.Sources : null;
        this.HealthLevels = 'HealthLevels' in params ? params.HealthLevels : null;
        this.TaskStatuses = 'TaskStatuses' in params ? params.TaskStatuses : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 单位时间间隔内的监控指标数据
 * @class
 */
class MonitorMetricSeriesData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控指标。
         * @type {Array.<MonitorMetric> || null}
         */
        this.Series = null;

        /**
         * 监控指标对应的时间戳。
         * @type {Array.<number> || null}
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Series) {
            this.Series = new Array();
            for (let z in params.Series) {
                let obj = new MonitorMetric();
                obj.deserialize(params.Series[z]);
                this.Series.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * 安全审计日志导出任务信息
 * @class
 */
class SecLogExportTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务Id。
         * @type {number || null}
         */
        this.AsyncRequestId = null;

        /**
         * 任务开始时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务结束时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务状态。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务执行进度。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 导出日志开始时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogStartTime = null;

        /**
         * 导出日志结束时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogEndTime = null;

        /**
         * 日志文件总大小，单位KB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSize = null;

        /**
         * 风险等级列表。0 无风险；1 低风险；2 中风险；3 高风险。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.DangerLevels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.LogStartTime = 'LogStartTime' in params ? params.LogStartTime : null;
        this.LogEndTime = 'LogEndTime' in params ? params.LogEndTime : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.DangerLevels = 'DangerLevels' in params ? params.DangerLevels : null;

    }
}

/**
 * DescribeHealthScore返回参数结构体
 * @class
 */
class DescribeHealthScoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健康得分以及异常扣分项。
         * @type {HealthScoreInfo || null}
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
            let obj = new HealthScoreInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 扣分详情。
 * @class
 */
class ScoreDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扣分项分类，取值包括：可用性、可维护性、性能及可靠性。
         * @type {string || null}
         */
        this.IssueType = null;

        /**
         * 扣分总分。
         * @type {number || null}
         */
        this.ScoreLost = null;

        /**
         * 扣分总分上限。
         * @type {number || null}
         */
        this.ScoreLostMax = null;

        /**
         * 扣分项列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScoreItem> || null}
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
        this.IssueType = 'IssueType' in params ? params.IssueType : null;
        this.ScoreLost = 'ScoreLost' in params ? params.ScoreLost : null;
        this.ScoreLostMax = 'ScoreLostMax' in params ? params.ScoreLostMax : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ScoreItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * DescribeTopSpaceSchemas请求参数结构体
 * @class
 */
class DescribeTopSpaceSchemasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 返回的Top库数量，最大值为100，默认为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeSlowLogTopSqls返回参数结构体
 * @class
 */
class DescribeSlowLogTopSqlsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 慢日志 top sql 列表
         * @type {Array.<SlowLogTopSqlItem> || null}
         */
        this.Rows = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new SlowLogTopSqlItem();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSqlFilters请求参数结构体
 * @class
 */
class DeleteSqlFiltersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 通过VerifyUserAccount获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * 限流任务ID列表。
         * @type {Array.<number> || null}
         */
        this.FilterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.FilterIds = 'FilterIds' in params ? params.FilterIds : null;

    }
}

/**
 * DescribeUserSqlAdvice请求参数结构体
 * @class
 */
class DescribeUserSqlAdviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * SQL语句。
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * 库名。
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL；"dbbrain-mysql" - 自建 MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * 表结构。
 * @class
 */
class Table extends  AbstractModel {
    constructor(){
        super();

        /**
         * 库名。
         * @type {string || null}
         */
        this.TableSchema = null;

        /**
         * 表名。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 库表的存储引擎。
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 行数。
         * @type {number || null}
         */
        this.TableRows = null;

        /**
         * 总使用空间（MB）。
         * @type {number || null}
         */
        this.TotalLength = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.TableRows = 'TableRows' in params ? params.TableRows : null;
        this.TotalLength = 'TotalLength' in params ? params.TotalLength : null;

    }
}

/**
 * DescribeMySqlProcessList请求参数结构体
 * @class
 */
class DescribeMySqlProcessListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 线程的ID，用于筛选线程列表。
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 线程的操作账号名，用于筛选线程列表。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 线程的操作主机地址，用于筛选线程列表。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 线程的操作数据库，用于筛选线程列表。
         * @type {string || null}
         */
        this.DB = null;

        /**
         * 线程的操作状态，用于筛选线程列表。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 线程的执行类型，用于筛选线程列表。
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 线程的操作时长最小值，单位秒，用于筛选操作时长大于该值的线程列表。
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 线程的操作语句，用于筛选线程列表。
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 返回数量，默认20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.User = 'User' in params ? params.User : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DB = 'DB' in params ? params.DB : null;
        this.State = 'State' in params ? params.State : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeSecurityAuditLogDownloadUrls返回参数结构体
 * @class
 */
class DescribeSecurityAuditLogDownloadUrlsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出结果的COS链接列表。当结果集很大时，可能会切分为多个url下载。
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxySessionKillTasks返回参数结构体
 * @class
 */
class DescribeProxySessionKillTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * kill 任务的详情。
         * @type {Array.<TaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * 任务总数。
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SchemaSpaceTimeSeries: SchemaSpaceTimeSeries,
    RedisKeySpaceData: RedisKeySpaceData,
    HealthReportTask: HealthReportTask,
    CreateDBDiagReportTaskRequest: CreateDBDiagReportTaskRequest,
    TableSpaceTimeSeries: TableSpaceTimeSeries,
    DescribeTopSpaceTablesRequest: DescribeTopSpaceTablesRequest,
    ScoreItem: ScoreItem,
    InstanceConfs: InstanceConfs,
    CreateSecurityAuditLogExportTaskRequest: CreateSecurityAuditLogExportTaskRequest,
    DescribeDBDiagEventResponse: DescribeDBDiagEventResponse,
    DescribeDBDiagEventsResponse: DescribeDBDiagEventsResponse,
    DescribeDBDiagReportTasksResponse: DescribeDBDiagReportTasksResponse,
    AddUserContactResponse: AddUserContactResponse,
    CancelKillTaskResponse: CancelKillTaskResponse,
    DescribeRedisTopBigKeysResponse: DescribeRedisTopBigKeysResponse,
    DescribeSqlTemplateRequest: DescribeSqlTemplateRequest,
    DescribeTopSpaceSchemaTimeSeriesResponse: DescribeTopSpaceSchemaTimeSeriesResponse,
    SlowLogTopSqlItem: SlowLogTopSqlItem,
    DescribeNoPrimaryKeyTablesResponse: DescribeNoPrimaryKeyTablesResponse,
    DiagHistoryEventItem: DiagHistoryEventItem,
    DescribeProxySessionKillTasksRequest: DescribeProxySessionKillTasksRequest,
    DescribeMySqlProcessListResponse: DescribeMySqlProcessListResponse,
    HealthStatus: HealthStatus,
    DescribeTopSpaceTablesResponse: DescribeTopSpaceTablesResponse,
    TaskInfo: TaskInfo,
    ModifySqlFiltersResponse: ModifySqlFiltersResponse,
    KillMySqlThreadsResponse: KillMySqlThreadsResponse,
    CreateSchedulerMailProfileRequest: CreateSchedulerMailProfileRequest,
    ContactItem: ContactItem,
    DescribeDBSpaceStatusRequest: DescribeDBSpaceStatusRequest,
    TimeSlice: TimeSlice,
    ModifyDiagDBInstanceConfRequest: ModifyDiagDBInstanceConfRequest,
    DescribeSecurityAuditLogDownloadUrlsRequest: DescribeSecurityAuditLogDownloadUrlsRequest,
    CreateDBDiagReportTaskResponse: CreateDBDiagReportTaskResponse,
    CreateMailProfileResponse: CreateMailProfileResponse,
    DescribeSlowLogTimeSeriesStatsRequest: DescribeSlowLogTimeSeriesStatsRequest,
    CancelKillTaskRequest: CancelKillTaskRequest,
    MySqlProcess: MySqlProcess,
    DescribeDBDiagHistoryRequest: DescribeDBDiagHistoryRequest,
    CreateKillTaskResponse: CreateKillTaskResponse,
    DeleteSqlFiltersResponse: DeleteSqlFiltersResponse,
    DescribeDBDiagEventsRequest: DescribeDBDiagEventsRequest,
    CreateDBDiagReportUrlResponse: CreateDBDiagReportUrlResponse,
    CreateKillTaskRequest: CreateKillTaskRequest,
    SlowLogHost: SlowLogHost,
    CreateMailProfileRequest: CreateMailProfileRequest,
    MonitorFloatMetricSeriesData: MonitorFloatMetricSeriesData,
    MailConfiguration: MailConfiguration,
    VerifyUserAccountRequest: VerifyUserAccountRequest,
    DescribeSlowLogUserHostStatsResponse: DescribeSlowLogUserHostStatsResponse,
    TableSpaceData: TableSpaceData,
    EventInfo: EventInfo,
    DescribeMailProfileRequest: DescribeMailProfileRequest,
    DeleteSecurityAuditLogExportTasksResponse: DeleteSecurityAuditLogExportTasksResponse,
    KillMySqlThreadsRequest: KillMySqlThreadsRequest,
    DescribeSqlFiltersResponse: DescribeSqlFiltersResponse,
    CreateDBDiagReportUrlRequest: CreateDBDiagReportUrlRequest,
    DescribeSecurityAuditLogExportTasksResponse: DescribeSecurityAuditLogExportTasksResponse,
    DescribeSqlTemplateResponse: DescribeSqlTemplateResponse,
    HealthScoreInfo: HealthScoreInfo,
    DescribeTopSpaceTableTimeSeriesResponse: DescribeTopSpaceTableTimeSeriesResponse,
    DescribeDBDiagHistoryResponse: DescribeDBDiagHistoryResponse,
    DescribeDBDiagEventRequest: DescribeDBDiagEventRequest,
    ModifySqlFiltersRequest: ModifySqlFiltersRequest,
    DescribeAllUserContactResponse: DescribeAllUserContactResponse,
    MonitorMetric: MonitorMetric,
    ProfileInfo: ProfileInfo,
    UserProfile: UserProfile,
    AddUserContactRequest: AddUserContactRequest,
    CreateSqlFilterRequest: CreateSqlFilterRequest,
    InstanceBasicInfo: InstanceBasicInfo,
    SchemaSpaceData: SchemaSpaceData,
    DescribeAllUserContactRequest: DescribeAllUserContactRequest,
    DescribeDiagDBInstancesRequest: DescribeDiagDBInstancesRequest,
    DescribeNoPrimaryKeyTablesRequest: DescribeNoPrimaryKeyTablesRequest,
    InstanceInfo: InstanceInfo,
    CreateSqlFilterResponse: CreateSqlFilterResponse,
    VerifyUserAccountResponse: VerifyUserAccountResponse,
    DescribeSqlFiltersRequest: DescribeSqlFiltersRequest,
    DescribeSecurityAuditLogExportTasksRequest: DescribeSecurityAuditLogExportTasksRequest,
    DeleteSecurityAuditLogExportTasksRequest: DeleteSecurityAuditLogExportTasksRequest,
    CreateSchedulerMailProfileResponse: CreateSchedulerMailProfileResponse,
    DescribeTopSpaceSchemaTimeSeriesRequest: DescribeTopSpaceSchemaTimeSeriesRequest,
    DescribeSlowLogTopSqlsRequest: DescribeSlowLogTopSqlsRequest,
    DescribeMailProfileResponse: DescribeMailProfileResponse,
    DescribeRedisTopBigKeysRequest: DescribeRedisTopBigKeysRequest,
    DescribeHealthScoreRequest: DescribeHealthScoreRequest,
    IssueTypeInfo: IssueTypeInfo,
    DescribeDiagDBInstancesResponse: DescribeDiagDBInstancesResponse,
    DescribeAllUserGroupRequest: DescribeAllUserGroupRequest,
    CreateProxySessionKillTaskRequest: CreateProxySessionKillTaskRequest,
    CreateSecurityAuditLogExportTaskResponse: CreateSecurityAuditLogExportTaskResponse,
    SchemaItem: SchemaItem,
    DescribeSlowLogUserHostStatsRequest: DescribeSlowLogUserHostStatsRequest,
    DescribeTopSpaceSchemasResponse: DescribeTopSpaceSchemasResponse,
    CreateProxySessionKillTaskResponse: CreateProxySessionKillTaskResponse,
    DescribeSlowLogTimeSeriesStatsResponse: DescribeSlowLogTimeSeriesStatsResponse,
    MonitorFloatMetric: MonitorFloatMetric,
    DescribeAllUserGroupResponse: DescribeAllUserGroupResponse,
    ModifyDiagDBInstanceConfResponse: ModifyDiagDBInstanceConfResponse,
    DescribeUserSqlAdviceResponse: DescribeUserSqlAdviceResponse,
    DescribeDBSpaceStatusResponse: DescribeDBSpaceStatusResponse,
    SQLFilter: SQLFilter,
    GroupItem: GroupItem,
    DescribeTopSpaceTableTimeSeriesRequest: DescribeTopSpaceTableTimeSeriesRequest,
    DescribeDBDiagReportTasksRequest: DescribeDBDiagReportTasksRequest,
    MonitorMetricSeriesData: MonitorMetricSeriesData,
    SecLogExportTaskInfo: SecLogExportTaskInfo,
    DescribeHealthScoreResponse: DescribeHealthScoreResponse,
    ScoreDetail: ScoreDetail,
    DescribeTopSpaceSchemasRequest: DescribeTopSpaceSchemasRequest,
    DescribeSlowLogTopSqlsResponse: DescribeSlowLogTopSqlsResponse,
    DeleteSqlFiltersRequest: DeleteSqlFiltersRequest,
    DescribeUserSqlAdviceRequest: DescribeUserSqlAdviceRequest,
    Table: Table,
    DescribeMySqlProcessListRequest: DescribeMySqlProcessListRequest,
    DescribeSecurityAuditLogDownloadUrlsResponse: DescribeSecurityAuditLogDownloadUrlsResponse,
    DescribeProxySessionKillTasksResponse: DescribeProxySessionKillTasksResponse,

}
