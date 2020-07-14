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
         * 返回的Top表数量，最大值为20，默认为最大值。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
         * @type {string || null}
         */
        this.SortBy = null;

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
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
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
         * 事件详情。
         * @type {string || null}
         */
        this.Explanation = null;

        /**
         * 概要。
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
         * 建议。
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
         * 开始时间。如“2019-09-10 12:13:14”。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。如“2019-09-11 12:13:14”。
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
         * 返回的Top表数量，最大值为20，默认为最大值。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 开始日期，最早为当日的前第6天，默认为截止日期的前第6天。
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 截止日期，最早为当日的前第6天，默认为当日。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

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
         * 事件 ID 。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
         * @type {number || null}
         */
        this.Severity = null;

        /**
         * 概要。
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * 诊断项。
         * @type {string || null}
         */
        this.DiagItem = null;

        /**
         * 实例 ID 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 保留字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 地域
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
 * 慢日志TopSql
 * @class
 */
class SlowLogTopSqlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * sql总锁等待时间
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * 最大锁等待时间
         * @type {number || null}
         */
        this.LockTimeMax = null;

        /**
         * 最小锁等待时间
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
         * 总耗时
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * 最大执行时间
         * @type {number || null}
         */
        this.QueryTimeMax = null;

        /**
         * 最小执行时间
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
         * schema
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * 总耗时占比
         * @type {number || null}
         */
        this.QueryTimeRatio = null;

        /**
         * sql总锁等待时间占比
         * @type {number || null}
         */
        this.LockTimeRatio = null;

        /**
         * 总扫描行数占比
         * @type {number || null}
         */
        this.RowsExaminedRatio = null;

        /**
         * 总返回行数占比
         * @type {number || null}
         */
        this.RowsSentRatio = null;

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
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 截止时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 排序键，目前支持 QueryTime,ExecTimes,RowsSent,LockTime以及RowsExamined 等排序键。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 排序方式，支持ASC（升序）以及DESC（降序）。
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeTopSpaceTableTimeSeriesResponse: DescribeTopSpaceTableTimeSeriesResponse,
    DescribeDBDiagHistoryResponse: DescribeDBDiagHistoryResponse,
    DescribeDBSpaceStatusRequest: DescribeDBSpaceStatusRequest,
    DescribeSlowLogTimeSeriesStatsResponse: DescribeSlowLogTimeSeriesStatsResponse,
    TimeSlice: TimeSlice,
    MonitorFloatMetric: MonitorFloatMetric,
    MonitorMetric: MonitorMetric,
    TableSpaceTimeSeries: TableSpaceTimeSeries,
    DescribeTopSpaceTablesRequest: DescribeTopSpaceTablesRequest,
    DescribeSlowLogTimeSeriesStatsRequest: DescribeSlowLogTimeSeriesStatsRequest,
    DescribeDBDiagEventRequest: DescribeDBDiagEventRequest,
    DescribeDBSpaceStatusResponse: DescribeDBSpaceStatusResponse,
    DescribeDBDiagEventResponse: DescribeDBDiagEventResponse,
    DescribeDBDiagHistoryRequest: DescribeDBDiagHistoryRequest,
    DescribeTopSpaceTableTimeSeriesRequest: DescribeTopSpaceTableTimeSeriesRequest,
    MonitorMetricSeriesData: MonitorMetricSeriesData,
    DiagHistoryEventItem: DiagHistoryEventItem,
    SlowLogTopSqlItem: SlowLogTopSqlItem,
    MonitorFloatMetricSeriesData: MonitorFloatMetricSeriesData,
    DescribeSlowLogTopSqlsRequest: DescribeSlowLogTopSqlsRequest,
    TableSpaceData: TableSpaceData,
    DescribeSlowLogTopSqlsResponse: DescribeSlowLogTopSqlsResponse,
    DescribeTopSpaceTablesResponse: DescribeTopSpaceTablesResponse,

}
