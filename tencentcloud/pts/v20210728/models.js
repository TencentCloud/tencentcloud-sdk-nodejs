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
 * DescribeCronJobs请求参数结构体
 * @class
 */
class DescribeCronJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID数组
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 定时任务ID数组
         * @type {Array.<string> || null}
         */
        this.CronJobIds = null;

        /**
         * 定时任务名字，模糊查询
         * @type {string || null}
         */
        this.CronJobName = null;

        /**
         * 定时任务状态数组
         * @type {Array.<number> || null}
         */
        this.CronJobStatus = null;

        /**
         * 排序的列
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 是否正序
         * @type {boolean || null}
         */
        this.Ascend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CronJobIds = 'CronJobIds' in params ? params.CronJobIds : null;
        this.CronJobName = 'CronJobName' in params ? params.CronJobName : null;
        this.CronJobStatus = 'CronJobStatus' in params ? params.CronJobStatus : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;

    }
}

/**
 * UpdateJob请求参数结构体
 * @class
 */
class UpdateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 任务备注信息
         * @type {string || null}
         */
        this.Note = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * UpdateCronJob返回参数结构体
 * @class
 */
class UpdateCronJobResponse extends  AbstractModel {
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
 * DescribeSampleMatrixQuery返回参数结构体
 * @class
 */
class DescribeSampleMatrixQueryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标矩阵
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CustomSampleMatrix || null}
         */
        this.MetricSampleMatrix = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetricSampleMatrix) {
            let obj = new CustomSampleMatrix();
            obj.deserialize(params.MetricSampleMatrix)
            this.MetricSampleMatrix = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSampleLogs请求参数结构体
 * @class
 */
class DescribeSampleLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 测试项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 测试场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 测试任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志开始时间
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志结束时间
         * @type {string || null}
         */
        this.To = null;

        /**
         * 日志级别debug,info,error
         * @type {string || null}
         */
        this.SeverityText = null;

        /**
         * ap-shanghai, ap-guangzhou
         * @type {string || null}
         */
        this.InstanceRegion = null;

        /**
         * 施压引擎节点IP
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * request 代表采样日志,可为不填
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 返回日志条数，最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 采样日志响应时间范围
         * @type {ReactionTimeRange || null}
         */
        this.ReactionTimeRange = null;

        /**
         * 采样请求状态码
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 采样请求结果码
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 采样请求方法
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 采样服务API
         * @type {string || null}
         */
        this.Service = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.SeverityText = 'SeverityText' in params ? params.SeverityText : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.ReactionTimeRange) {
            let obj = new ReactionTimeRange();
            obj.deserialize(params.ReactionTimeRange)
            this.ReactionTimeRange = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Service = 'Service' in params ? params.Service : null;

    }
}

/**
 * DeleteJobs请求参数结构体
 * @class
 */
class DeleteJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID数组
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景ID数组
         * @type {Array.<string> || null}
         */
        this.ScenarioIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioIds = 'ScenarioIds' in params ? params.ScenarioIds : null;

    }
}

/**
 * 并发模式的施压配置
 * @class
 */
class Concurrency extends  AbstractModel {
    constructor(){
        super();

        /**
         * 多阶段配置数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Stage> || null}
         */
        this.Stages = null;

        /**
         * 运行次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IterationCount = null;

        /**
         * 最大RPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestsPerSecond = null;

        /**
         * 优雅终止任务的等待时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GracefulStopSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Stages) {
            this.Stages = new Array();
            for (let z in params.Stages) {
                let obj = new Stage();
                obj.deserialize(params.Stages[z]);
                this.Stages.push(obj);
            }
        }
        this.IterationCount = 'IterationCount' in params ? params.IterationCount : null;
        this.MaxRequestsPerSecond = 'MaxRequestsPerSecond' in params ? params.MaxRequestsPerSecond : null;
        this.GracefulStopSeconds = 'GracefulStopSeconds' in params ? params.GracefulStopSeconds : null;

    }
}

/**
 * 告警通知接收组
 * @class
 */
class AlertChannelRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notice ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * Consumer ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AMPConsumerId = null;

        /**
         * 项目 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * App ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 主账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 子账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAccountUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.AMPConsumerId = 'AMPConsumerId' in params ? params.AMPConsumerId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;

    }
}

/**
 * DescribeAlertRecords请求参数结构体
 * @class
 */
class DescribeAlertRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 ID 列表
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 场景 ID 列表
         * @type {Array.<string> || null}
         */
        this.ScenarioIds = null;

        /**
         * 任务 ID 列表
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * 是否正序
         * @type {boolean || null}
         */
        this.Ascend = null;

        /**
         * 排序项
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按场景名筛选
         * @type {Array.<string> || null}
         */
        this.ScenarioNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ScenarioIds = 'ScenarioIds' in params ? params.ScenarioIds : null;
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ScenarioNames = 'ScenarioNames' in params ? params.ScenarioNames : null;

    }
}

/**
 * DeleteAlertChannel返回参数结构体
 * @class
 */
class DeleteAlertChannelResponse extends  AbstractModel {
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
 * DescribeLabelValues请求参数结构体
 * @class
 */
class DescribeLabelValuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 指标名称
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 查询标签名称
         * @type {string || null}
         */
        this.LabelName = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * AbortCronJobs返回参数结构体
 * @class
 */
class AbortCronJobsResponse extends  AbstractModel {
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
 * DescribeRequestSummary返回参数结构体
 * @class
 */
class DescribeRequestSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求汇总信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RequestSummary> || null}
         */
        this.RequestSummarySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RequestSummarySet) {
            this.RequestSummarySet = new Array();
            for (let z in params.RequestSummarySet) {
                let obj = new RequestSummary();
                obj.deserialize(params.RequestSummarySet[z]);
                this.RequestSummarySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScenarioWithJobs请求参数结构体
 * @class
 */
class DescribeScenarioWithJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 项目ID数组
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 场景ID数组
         * @type {Array.<string> || null}
         */
        this.ScenarioIds = null;

        /**
         * 场景名
         * @type {string || null}
         */
        this.ScenarioName = null;

        /**
         * 场景状态数组
         * @type {number || null}
         */
        this.ScenarioStatus = null;

        /**
         * 排序的列
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 是否正序
         * @type {boolean || null}
         */
        this.Ascend = null;

        /**
         * job相关参数
         * @type {ScenarioRelatedJobsParams || null}
         */
        this.ScenarioRelatedJobsParams = null;

        /**
         * 是否需要返回场景的脚本内容
         * @type {boolean || null}
         */
        this.IgnoreScript = null;

        /**
         * 是否需要返回测试数据文件信息
         * @type {boolean || null}
         */
        this.IgnoreDataset = null;

        /**
         * 场景类型，如pts-http, pts-js, pts-trpc, pts-jmeter	
         * @type {string || null}
         */
        this.ScenarioType = null;

        /**
         * 创建人员
         * @type {string || null}
         */
        this.Owner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ScenarioIds = 'ScenarioIds' in params ? params.ScenarioIds : null;
        this.ScenarioName = 'ScenarioName' in params ? params.ScenarioName : null;
        this.ScenarioStatus = 'ScenarioStatus' in params ? params.ScenarioStatus : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;

        if (params.ScenarioRelatedJobsParams) {
            let obj = new ScenarioRelatedJobsParams();
            obj.deserialize(params.ScenarioRelatedJobsParams)
            this.ScenarioRelatedJobsParams = obj;
        }
        this.IgnoreScript = 'IgnoreScript' in params ? params.IgnoreScript : null;
        this.IgnoreDataset = 'IgnoreDataset' in params ? params.IgnoreDataset : null;
        this.ScenarioType = 'ScenarioType' in params ? params.ScenarioType : null;
        this.Owner = 'Owner' in params ? params.Owner : null;

    }
}

/**
 * CreateCronJob返回参数结构体
 * @class
 */
class CreateCronJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时任务ID
         * @type {string || null}
         */
        this.CronJobId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CronJobId = 'CronJobId' in params ? params.CronJobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartCronJobs返回参数结构体
 * @class
 */
class RestartCronJobsResponse extends  AbstractModel {
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
 * SLA 策略
 * @class
 */
class SLAPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * SLA 规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SLARule> || null}
         */
        this.SLARules = null;

        /**
         * 告警通知渠道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlertChannel || null}
         */
        this.AlertChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SLARules) {
            this.SLARules = new Array();
            for (let z in params.SLARules) {
                let obj = new SLARule();
                obj.deserialize(params.SLARules[z]);
                this.SLARules.push(obj);
            }
        }

        if (params.AlertChannel) {
            let obj = new AlertChannel();
            obj.deserialize(params.AlertChannel)
            this.AlertChannel = obj;
        }

    }
}

/**
 * 施压机 DNS 配置
 * @class
 */
class DNSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS IP 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Nameservers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Nameservers = 'Nameservers' in params ? params.Nameservers : null;

    }
}

/**
 * 脚本信息
 * @class
 */
class ScriptInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * base64编码后的文件内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EncodedContent = null;

        /**
         * base64编码后的har结构体
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EncodedHttpArchive = null;

        /**
         * 脚本权重，范围 1-100
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LoadWeight = null;

        /**
         * 文件 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.EncodedContent = 'EncodedContent' in params ? params.EncodedContent : null;
        this.EncodedHttpArchive = 'EncodedHttpArchive' in params ? params.EncodedHttpArchive : null;
        this.LoadWeight = 'LoadWeight' in params ? params.LoadWeight : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * 通用日志
 * @class
 */
class NormalLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 毫秒时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 日志级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SeverityText = null;

        /**
         * 日志输出内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Body = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.SeverityText = 'SeverityText' in params ? params.SeverityText : null;
        this.Body = 'Body' in params ? params.Body : null;

    }
}

/**
 * UpdateProject请求参数结构体
 * @class
 */
class UpdateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 项目状态，默认传递1
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 标签数组
         * @type {Array.<TagSpec> || null}
         */
        this.Tags = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagSpec();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * AbortJob返回参数结构体
 * @class
 */
class AbortJobResponse extends  AbstractModel {
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
 * 项目
 * @class
 */
class Project extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 标签数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagSpec> || null}
         */
        this.Tags = null;

        /**
         * 项目状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * App ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 子用户ID
         * @type {string || null}
         */
        this.SubAccountUin = null;

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
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagSpec();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;

    }
}

/**
 * UpdateScenario请求参数结构体
 * @class
 */
class UpdateScenarioRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 场景名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 场景描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 压测引擎类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 施压配置
         * @type {Load || null}
         */
        this.Load = null;

        /**
         * deprecated
         * @type {string || null}
         */
        this.EncodedScripts = null;

        /**
         * deprecated
         * @type {Array.<string> || null}
         */
        this.Configs = null;

        /**
         * 测试数据集
         * @type {Array.<TestData> || null}
         */
        this.Datasets = null;

        /**
         * deprecated
         * @type {Array.<string> || null}
         */
        this.Extensions = null;

        /**
         * SLA规则ID
         * @type {string || null}
         */
        this.SLAId = null;

        /**
         * cron job ID
         * @type {string || null}
         */
        this.CronId = null;

        /**
         * 场景状态（注：现已无需传递该参数）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 测试脚本路径
         * @type {Array.<ScriptInfo> || null}
         */
        this.TestScripts = null;

        /**
         * 协议文件路径
         * @type {Array.<ProtocolInfo> || null}
         */
        this.Protocols = null;

        /**
         * 请求文件路径
         * @type {Array.<FileInfo> || null}
         */
        this.RequestFiles = null;

        /**
         * SLA 策略
         * @type {SLAPolicy || null}
         */
        this.SLAPolicy = null;

        /**
         * 拓展包文件路径
         * @type {Array.<FileInfo> || null}
         */
        this.Plugins = null;

        /**
         * 域名解析配置
         * @type {DomainNameConfig || null}
         */
        this.DomainNameConfig = null;

        /**
         * WebHook请求配置
         * @type {Array.<Notification> || null}
         */
        this.NotificationHooks = null;

        /**
         * 创建人名
         * @type {string || null}
         */
        this.Owner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Load) {
            let obj = new Load();
            obj.deserialize(params.Load)
            this.Load = obj;
        }
        this.EncodedScripts = 'EncodedScripts' in params ? params.EncodedScripts : null;
        this.Configs = 'Configs' in params ? params.Configs : null;

        if (params.Datasets) {
            this.Datasets = new Array();
            for (let z in params.Datasets) {
                let obj = new TestData();
                obj.deserialize(params.Datasets[z]);
                this.Datasets.push(obj);
            }
        }
        this.Extensions = 'Extensions' in params ? params.Extensions : null;
        this.SLAId = 'SLAId' in params ? params.SLAId : null;
        this.CronId = 'CronId' in params ? params.CronId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TestScripts) {
            this.TestScripts = new Array();
            for (let z in params.TestScripts) {
                let obj = new ScriptInfo();
                obj.deserialize(params.TestScripts[z]);
                this.TestScripts.push(obj);
            }
        }

        if (params.Protocols) {
            this.Protocols = new Array();
            for (let z in params.Protocols) {
                let obj = new ProtocolInfo();
                obj.deserialize(params.Protocols[z]);
                this.Protocols.push(obj);
            }
        }

        if (params.RequestFiles) {
            this.RequestFiles = new Array();
            for (let z in params.RequestFiles) {
                let obj = new FileInfo();
                obj.deserialize(params.RequestFiles[z]);
                this.RequestFiles.push(obj);
            }
        }

        if (params.SLAPolicy) {
            let obj = new SLAPolicy();
            obj.deserialize(params.SLAPolicy)
            this.SLAPolicy = obj;
        }

        if (params.Plugins) {
            this.Plugins = new Array();
            for (let z in params.Plugins) {
                let obj = new FileInfo();
                obj.deserialize(params.Plugins[z]);
                this.Plugins.push(obj);
            }
        }

        if (params.DomainNameConfig) {
            let obj = new DomainNameConfig();
            obj.deserialize(params.DomainNameConfig)
            this.DomainNameConfig = obj;
        }

        if (params.NotificationHooks) {
            this.NotificationHooks = new Array();
            for (let z in params.NotificationHooks) {
                let obj = new Notification();
                obj.deserialize(params.NotificationHooks[z]);
                this.NotificationHooks.push(obj);
            }
        }
        this.Owner = 'Owner' in params ? params.Owner : null;

    }
}

/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RegionDetail> || null}
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
                let obj = new RegionDetail();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 采样日志附带属性
 * @class
 */
class Attributes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采用请求返回码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 采样请求结果码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 采样请求API
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Service = null;

        /**
         * 采样请求调用方法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 采样请求延时时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * UpdateScenario返回参数结构体
 * @class
 */
class UpdateScenarioResponse extends  AbstractModel {
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
 * sample附带原始查询语句中的metric, aggregation
 * @class
 */
class CustomSample extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 聚合条件
         * @type {string || null}
         */
        this.Aggregation = null;

        /**
         * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 查询值
         * @type {number || null}
         */
        this.Value = null;

        /**
         * Time is the number of milliseconds since the epoch
// (1970-01-01 00:00 UTC) excluding leap seconds.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 指标对应的单位，当前单位有：s,bytes,bytes/s,reqs,reqs/s,checks,checks/s,iters,iters/s,VUs, %
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 指标序列名字
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Aggregation = 'Aggregation' in params ? params.Aggregation : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.Value = 'Value' in params ? params.Value : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * CreateProject请求参数结构体
 * @class
 */
class CreateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 标签数组
         * @type {Array.<TagSpec> || null}
         */
        this.Tags = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagSpec();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * AdjustJobSpeed请求参数结构体
 * @class
 */
class AdjustJobSpeedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 目标RPS
         * @type {number || null}
         */
        this.TargetRequestsPerSecond = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.TargetRequestsPerSecond = 'TargetRequestsPerSecond' in params ? params.TargetRequestsPerSecond : null;

    }
}

/**
 * DescribeRequestSummary请求参数结构体
 * @class
 */
class DescribeRequestSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 压测任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 压测场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 压测项目ID
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 施压机域名绑定配置
 * @class
 */
class HostAlias extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需绑定的域名列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.HostNames = null;

        /**
         * 需绑定的 IP 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostNames = 'HostNames' in params ? params.HostNames : null;
        this.IP = 'IP' in params ? params.IP : null;

    }
}

/**
 * CreateFile返回参数结构体
 * @class
 */
class CreateFileResponse extends  AbstractModel {
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
 * DeleteProjects返回参数结构体
 * @class
 */
class DeleteProjectsResponse extends  AbstractModel {
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
 * 压力分布配置
 * @class
 */
class GeoRegionsLoadItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 百分比
         * @type {number || null}
         */
        this.Percentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;

    }
}

/**
 * 标签及对应的值
 * @class
 */
class LabelWithValues extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * 标签值
         * @type {Array.<string> || null}
         */
        this.LabelValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.LabelValues = 'LabelValues' in params ? params.LabelValues : null;

    }
}

/**
 * 包含labelName 和labelValue
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * label名字
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * label值
         * @type {string || null}
         */
        this.LabelValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.LabelValue = 'LabelValue' in params ? params.LabelValue : null;

    }
}

/**
 * 协议文件详情
 * @class
 */
class ProtocolInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 文件 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * 压力来源配置
 * @class
 */
class VpcLoadDistribution extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * VPC ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

    }
}

/**
 * sample采样值
 * @class
 */
class SamplePair extends  AbstractModel {
    constructor(){
        super();

        /**
         * is the number of milliseconds since the epoch (1970-01-01 00:00 UTC) excluding leap seconds.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * is a representation of a value for a given sample at a given time.
         * @type {number || null}
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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 定时任务
 * @class
 */
class CronJob extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CronJobId = null;

        /**
         * 定时任务名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 场景名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScenarioName = null;

        /**
         * cron 表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CronExpression = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 中止原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AbortReason = null;

        /**
         * 定时任务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Notice ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 执行频率类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FrequencyType = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Note = null;

        /**
         * tom
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobOwner = null;

        /**
         * App ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 主账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 子账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAccountUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CronJobId = 'CronJobId' in params ? params.CronJobId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.ScenarioName = 'ScenarioName' in params ? params.ScenarioName : null;
        this.CronExpression = 'CronExpression' in params ? params.CronExpression : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.AbortReason = 'AbortReason' in params ? params.AbortReason : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.FrequencyType = 'FrequencyType' in params ? params.FrequencyType : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.JobOwner = 'JobOwner' in params ? params.JobOwner : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;

    }
}

/**
 * DescribeLabelValues返回参数结构体
 * @class
 */
class DescribeLabelValuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签值数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LabelValueSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelValueSet = 'LabelValueSet' in params ? params.LabelValueSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询结构封装
 * @class
 */
class InternalMetricQuery extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 聚合函数
         * @type {string || null}
         */
        this.Aggregation = null;

        /**
         * deprecated, 请使用Filters
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 指标过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 指标分组
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Aggregation = 'Aggregation' in params ? params.Aggregation : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
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
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;

    }
}

/**
 * 任务
 * @class
 */
class Job extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的JobID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 任务的场景ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 任务的施压配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Load || null}
         */
        this.Load = null;

        /**
         * 此字段不再使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Configs = null;

        /**
         * 任务的数据集文件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TestData> || null}
         */
        this.Datasets = null;

        /**
         * 此字段不再使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Extensions = null;

        /**
         * 任务的运行状态, JobUnknown: 0,JobCreated:1,JobPending:2, JobPreparing:3,JobSelectClustering:4,JobCreateTasking:5,JobSyncTasking:6
JobRunning:11,JobFinished:12,JobPrepareException:13,JobFinishException:14,JobAborting:15,JobAborted:16,JobAbortException:17,JobDeleted:18,
JobSelectClusterException:19,JobCreateTaskException:20,JobSyncTaskException:21
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务的开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务的结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务的最大VU数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxVirtualUserCount = null;

        /**
         * 任务的备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 错误率百分比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrorRate = null;

        /**
         * 任务发起人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobOwner = null;

        /**
         * 此字段不再使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LoadSource || null}
         */
        this.LoadSources = null;

        /**
         * 任务时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 最大每秒请求数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestsPerSecond = null;

        /**
         * 总请求数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RequestTotal = null;

        /**
         * 平均每秒请求数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RequestsPerSecond = null;

        /**
         * 平均响应时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResponseTimeAverage = null;

        /**
         * 响应时间第99百分位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResponseTimeP99 = null;

        /**
         * 响应时间第95百分位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResponseTimeP95 = null;

        /**
         * 响应时间第90百分位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResponseTimeP90 = null;

        /**
         * 此字段不再使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Scripts = null;

        /**
         * 最大响应时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResponseTimeMax = null;

        /**
         * 最小响应时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResponseTimeMin = null;

        /**
         * 发压host信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LoadSource> || null}
         */
        this.LoadSourceInfos = null;

        /**
         * 测试脚本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScriptInfo> || null}
         */
        this.TestScripts = null;

        /**
         * 协议脚本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProtocolInfo> || null}
         */
        this.Protocols = null;

        /**
         * 请求文件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FileInfo> || null}
         */
        this.RequestFiles = null;

        /**
         * 拓展包文件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FileInfo> || null}
         */
        this.Plugins = null;

        /**
         * 定时任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CronId = null;

        /**
         * 场景类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 域名绑定配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DomainNameConfig || null}
         */
        this.DomainNameConfig = null;

        /**
         * false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Debug = null;

        /**
         * 中断原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AbortReason = null;

        /**
         * 任务的创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 通知事件回调
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NotificationHook> || null}
         */
        this.NotificationHooks = null;

        /**
         * 每秒接收字节数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NetworkReceiveRate = null;

        /**
         * 每秒发送字节数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NetworkSendRate = null;

        /**
         * 任务状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * test-project
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * test-scenario
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScenarioName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;

        if (params.Load) {
            let obj = new Load();
            obj.deserialize(params.Load)
            this.Load = obj;
        }
        this.Configs = 'Configs' in params ? params.Configs : null;

        if (params.Datasets) {
            this.Datasets = new Array();
            for (let z in params.Datasets) {
                let obj = new TestData();
                obj.deserialize(params.Datasets[z]);
                this.Datasets.push(obj);
            }
        }
        this.Extensions = 'Extensions' in params ? params.Extensions : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MaxVirtualUserCount = 'MaxVirtualUserCount' in params ? params.MaxVirtualUserCount : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.ErrorRate = 'ErrorRate' in params ? params.ErrorRate : null;
        this.JobOwner = 'JobOwner' in params ? params.JobOwner : null;

        if (params.LoadSources) {
            let obj = new LoadSource();
            obj.deserialize(params.LoadSources)
            this.LoadSources = obj;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.MaxRequestsPerSecond = 'MaxRequestsPerSecond' in params ? params.MaxRequestsPerSecond : null;
        this.RequestTotal = 'RequestTotal' in params ? params.RequestTotal : null;
        this.RequestsPerSecond = 'RequestsPerSecond' in params ? params.RequestsPerSecond : null;
        this.ResponseTimeAverage = 'ResponseTimeAverage' in params ? params.ResponseTimeAverage : null;
        this.ResponseTimeP99 = 'ResponseTimeP99' in params ? params.ResponseTimeP99 : null;
        this.ResponseTimeP95 = 'ResponseTimeP95' in params ? params.ResponseTimeP95 : null;
        this.ResponseTimeP90 = 'ResponseTimeP90' in params ? params.ResponseTimeP90 : null;
        this.Scripts = 'Scripts' in params ? params.Scripts : null;
        this.ResponseTimeMax = 'ResponseTimeMax' in params ? params.ResponseTimeMax : null;
        this.ResponseTimeMin = 'ResponseTimeMin' in params ? params.ResponseTimeMin : null;

        if (params.LoadSourceInfos) {
            this.LoadSourceInfos = new Array();
            for (let z in params.LoadSourceInfos) {
                let obj = new LoadSource();
                obj.deserialize(params.LoadSourceInfos[z]);
                this.LoadSourceInfos.push(obj);
            }
        }

        if (params.TestScripts) {
            this.TestScripts = new Array();
            for (let z in params.TestScripts) {
                let obj = new ScriptInfo();
                obj.deserialize(params.TestScripts[z]);
                this.TestScripts.push(obj);
            }
        }

        if (params.Protocols) {
            this.Protocols = new Array();
            for (let z in params.Protocols) {
                let obj = new ProtocolInfo();
                obj.deserialize(params.Protocols[z]);
                this.Protocols.push(obj);
            }
        }

        if (params.RequestFiles) {
            this.RequestFiles = new Array();
            for (let z in params.RequestFiles) {
                let obj = new FileInfo();
                obj.deserialize(params.RequestFiles[z]);
                this.RequestFiles.push(obj);
            }
        }

        if (params.Plugins) {
            this.Plugins = new Array();
            for (let z in params.Plugins) {
                let obj = new FileInfo();
                obj.deserialize(params.Plugins[z]);
                this.Plugins.push(obj);
            }
        }
        this.CronId = 'CronId' in params ? params.CronId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.DomainNameConfig) {
            let obj = new DomainNameConfig();
            obj.deserialize(params.DomainNameConfig)
            this.DomainNameConfig = obj;
        }
        this.Debug = 'Debug' in params ? params.Debug : null;
        this.AbortReason = 'AbortReason' in params ? params.AbortReason : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.NotificationHooks) {
            this.NotificationHooks = new Array();
            for (let z in params.NotificationHooks) {
                let obj = new NotificationHook();
                obj.deserialize(params.NotificationHooks[z]);
                this.NotificationHooks.push(obj);
            }
        }
        this.NetworkReceiveRate = 'NetworkReceiveRate' in params ? params.NetworkReceiveRate : null;
        this.NetworkSendRate = 'NetworkSendRate' in params ? params.NetworkSendRate : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ScenarioName = 'ScenarioName' in params ? params.ScenarioName : null;

    }
}

/**
 * DescribeAvailableMetrics请求参数结构体
 * @class
 */
class DescribeAvailableMetricsRequest extends  AbstractModel {
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
 * CopyScenario返回参数结构体
 * @class
 */
class CopyScenarioResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制出的新场景 ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSampleMatrixQuery请求参数结构体
 * @class
 */
class DescribeSampleMatrixQueryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 指标名字
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 聚合函数
         * @type {string || null}
         */
        this.Aggregation = null;

        /**
         * 指标过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分组
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Aggregation = 'Aggregation' in params ? params.Aggregation : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;

    }
}

/**
 * GenerateTmpKey返回参数结构体
 * @class
 */
class GenerateTmpKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时访问凭证获取时刻的时间戳（单位秒）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 临时访问凭证超时 时刻的时间戳（单位秒）
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 临时访问凭证
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分阶段施压时，对单个阶段的配置
 * @class
 */
class Stage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 施压时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DurationSeconds = null;

        /**
         * 虚拟用户数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetVirtualUsers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;
        this.TargetVirtualUsers = 'TargetVirtualUsers' in params ? params.TargetVirtualUsers : null;

    }
}

/**
 * DescribeFiles返回参数结构体
 * @class
 */
class DescribeFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<File> || null}
         */
        this.FileSet = null;

        /**
         * 文件总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.FileSet) {
            this.FileSet = new Array();
            for (let z in params.FileSet) {
                let obj = new File();
                obj.deserialize(params.FileSet[z]);
                this.FileSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProjects请求参数结构体
 * @class
 */
class DeleteProjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID数组
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 是否删除项目相关的场景。默认为否。
         * @type {boolean || null}
         */
        this.DeleteScenarios = null;

        /**
         * 是否删除项目相关的任务。默认为否。
         * @type {boolean || null}
         */
        this.DeleteJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.DeleteScenarios = 'DeleteScenarios' in params ? params.DeleteScenarios : null;
        this.DeleteJobs = 'DeleteJobs' in params ? params.DeleteJobs : null;

    }
}

/**
 * UpdateFileScenarioRelation请求参数结构体
 * @class
 */
class UpdateFileScenarioRelationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件 ID
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 项目 ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景 ID 数组
         * @type {Array.<string> || null}
         */
        this.ScenarioIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioIds = 'ScenarioIds' in params ? params.ScenarioIds : null;

    }
}

/**
 * 带已执行任务的scenario
 * @class
 */
class ScenarioWithJobs extends  AbstractModel {
    constructor(){
        super();

        /**
         * scecario结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Scenario || null}
         */
        this.Scenario = null;

        /**
         * job结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Job> || null}
         */
        this.Jobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Scenario) {
            let obj = new Scenario();
            obj.deserialize(params.Scenario)
            this.Scenario = obj;
        }

        if (params.Jobs) {
            this.Jobs = new Array();
            for (let z in params.Jobs) {
                let obj = new Job();
                obj.deserialize(params.Jobs[z]);
                this.Jobs.push(obj);
            }
        }

    }
}

/**
 * DeleteJobs返回参数结构体
 * @class
 */
class DeleteJobsResponse extends  AbstractModel {
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
 * 标签
 * @class
 */
class TagSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
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
 * AdjustJobSpeed返回参数结构体
 * @class
 */
class AdjustJobSpeedResponse extends  AbstractModel {
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
 * CreateProject返回参数结构体
 * @class
 */
class CreateProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSampleQuery请求参数结构体
 * @class
 */
class DescribeSampleQueryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * job id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 场景Id
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 聚合条件
         * @type {string || null}
         */
        this.Aggregation = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 过滤条件
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Aggregation = 'Aggregation' in params ? params.Aggregation : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

    }
}

/**
 * DescribeSampleMatrixBatchQuery返回参数结构体
 * @class
 */
class DescribeSampleMatrixBatchQueryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量指标矩阵
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CustomSampleMatrix> || null}
         */
        this.MetricSampleMatrixSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetricSampleMatrixSet) {
            this.MetricSampleMatrixSet = new Array();
            for (let z in params.MetricSampleMatrixSet) {
                let obj = new CustomSampleMatrix();
                obj.deserialize(params.MetricSampleMatrixSet[z]);
                this.MetricSampleMatrixSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SLA 标签
 * @class
 */
class SLALabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LabelValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.LabelValue = 'LabelValue' in params ? params.LabelValue : null;

    }
}

/**
 * 告警历史记录项
 * @class
 */
class AlertRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警历史记录项 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlertRecordId = null;

        /**
         * 项目 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlertRecordStatus || null}
         */
        this.Status = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 任务 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * App ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 主账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 子账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * 场景名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScenarioName = null;

        /**
         * 告警对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 告警规则 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobSLAId = null;

        /**
         * 告警规则描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobSLADescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlertRecordId = 'AlertRecordId' in params ? params.AlertRecordId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;

        if (params.Status) {
            let obj = new AlertRecordStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.ScenarioName = 'ScenarioName' in params ? params.ScenarioName : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.JobSLAId = 'JobSLAId' in params ? params.JobSLAId : null;
        this.JobSLADescription = 'JobSLADescription' in params ? params.JobSLADescription : null;

    }
}

/**
 * RPS模式的施压配置
 * @class
 */
class RequestsPerSecond extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最大RPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestsPerSecond = null;

        /**
         * 施压时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DurationSeconds = null;

        /**
         * deprecated
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetVirtualUsers = null;

        /**
         * 资源数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Resources = null;

        /**
         * 起始RPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartRequestsPerSecond = null;

        /**
         * 目标RPS，入参无效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetRequestsPerSecond = null;

        /**
         * 优雅关停的等待时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GracefulStopSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxRequestsPerSecond = 'MaxRequestsPerSecond' in params ? params.MaxRequestsPerSecond : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;
        this.TargetVirtualUsers = 'TargetVirtualUsers' in params ? params.TargetVirtualUsers : null;
        this.Resources = 'Resources' in params ? params.Resources : null;
        this.StartRequestsPerSecond = 'StartRequestsPerSecond' in params ? params.StartRequestsPerSecond : null;
        this.TargetRequestsPerSecond = 'TargetRequestsPerSecond' in params ? params.TargetRequestsPerSecond : null;
        this.GracefulStopSeconds = 'GracefulStopSeconds' in params ? params.GracefulStopSeconds : null;

    }
}

/**
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * DeleteScenarios返回参数结构体
 * @class
 */
class DeleteScenariosResponse extends  AbstractModel {
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
 * DeleteFiles请求参数结构体
 * @class
 */
class DeleteFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件 ID 数组
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.FileIds = 'FileIds' in params ? params.FileIds : null;

    }
}

/**
 * CopyScenario请求参数结构体
 * @class
 */
class CopyScenarioRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景 ID
         * @type {string || null}
         */
        this.ScenarioId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;

    }
}

/**
 * 测试数据集
 * @class
 */
class TestData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 测试数据集所在的文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 测试数据集是否分片
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Split = null;

        /**
         * 首行是否为参数名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HeaderInFile = null;

        /**
         * 参数名数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.HeaderColumns = null;

        /**
         * 文件行数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LineCount = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 文件字节数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 头部数据行
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.HeadLines = null;

        /**
         * 尾部数据行
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TailLines = null;

        /**
         * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 文件 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Split = 'Split' in params ? params.Split : null;
        this.HeaderInFile = 'HeaderInFile' in params ? params.HeaderInFile : null;
        this.HeaderColumns = 'HeaderColumns' in params ? params.HeaderColumns : null;
        this.LineCount = 'LineCount' in params ? params.LineCount : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.HeadLines = 'HeadLines' in params ? params.HeadLines : null;
        this.TailLines = 'TailLines' in params ? params.TailLines : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * 采样日志
 * @class
 */
class SampleLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志毫秒时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 采样日志属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Attributes || null}
         */
        this.Attributes = null;

        /**
         * har格式的采样请求
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Body = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.Attributes) {
            let obj = new Attributes();
            obj.deserialize(params.Attributes)
            this.Attributes = obj;
        }
        this.Body = 'Body' in params ? params.Body : null;

    }
}

/**
 * 施压机的域名解析相关配置
 * @class
 */
class DomainNameConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名绑定配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HostAlias> || null}
         */
        this.HostAliases = null;

        /**
         * DNS 配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DNSConfig || null}
         */
        this.DNSConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HostAliases) {
            this.HostAliases = new Array();
            for (let z in params.HostAliases) {
                let obj = new HostAlias();
                obj.deserialize(params.HostAliases[z]);
                this.HostAliases.push(obj);
            }
        }

        if (params.DNSConfig) {
            let obj = new DNSConfig();
            obj.deserialize(params.DNSConfig)
            this.DNSConfig = obj;
        }

    }
}

/**
 * DescribeNormalLogs返回参数结构体
 * @class
 */
class DescribeNormalLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志上下文，加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NormalLog> || null}
         */
        this.NormalLogs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;

        if (params.NormalLogs) {
            this.NormalLogs = new Array();
            for (let z in params.NormalLogs) {
                let obj = new NormalLog();
                obj.deserialize(params.NormalLogs[z]);
                this.NormalLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 测试启动前后的消息通知
 * @class
 */
class Notification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发生事件
         * @type {Array.<string> || null}
         */
        this.Events = null;

        /**
         * webhook的网址
         * @type {string || null}
         */
        this.URL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Events = 'Events' in params ? params.Events : null;
        this.URL = 'URL' in params ? params.URL : null;

    }
}

/**
 * DescribeSampleBatchQuery请求参数结构体
 * @class
 */
class DescribeSampleBatchQueryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * job id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 场景id
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 查询指标数组
         * @type {Array.<InternalMetricQuery> || null}
         */
        this.Queries = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;

        if (params.Queries) {
            this.Queries = new Array();
            for (let z in params.Queries) {
                let obj = new InternalMetricQuery();
                obj.deserialize(params.Queries[z]);
                this.Queries.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * RestartCronJobs请求参数结构体
 * @class
 */
class RestartCronJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 定时任务ID数组
         * @type {Array.<string> || null}
         */
        this.CronJobIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CronJobIds = 'CronJobIds' in params ? params.CronJobIds : null;

    }
}

/**
 * DeleteScenarios请求参数结构体
 * @class
 */
class DeleteScenariosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID数组
         * @type {Array.<string> || null}
         */
        this.ScenarioIds = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 是否删除场景相关的任务。默认为否。
         * @type {boolean || null}
         */
        this.DeleteJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScenarioIds = 'ScenarioIds' in params ? params.ScenarioIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DeleteJobs = 'DeleteJobs' in params ? params.DeleteJobs : null;

    }
}

/**
 * CreateAlertChannel返回参数结构体
 * @class
 */
class CreateAlertChannelResponse extends  AbstractModel {
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
 * 指标结构
 * @class
 */
class MetricInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后台指标
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 前台展示指标名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 指标描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 指标类型
         * @type {string || null}
         */
        this.MetricType = null;

        /**
         * 默认指标单位
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 指标支持的聚合函数
         * @type {Array.<AggregationLegend> || null}
         */
        this.Aggregations = null;

        /**
         * 是否内部指标，内部指标不可在前台提供用户自由选择
         * @type {boolean || null}
         */
        this.InnerMetric = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MetricType = 'MetricType' in params ? params.MetricType : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.Aggregations) {
            this.Aggregations = new Array();
            for (let z in params.Aggregations) {
                let obj = new AggregationLegend();
                obj.deserialize(params.Aggregations[z]);
                this.Aggregations.push(obj);
            }
        }
        this.InnerMetric = 'InnerMetric' in params ? params.InnerMetric : null;

    }
}

/**
 * CreateAlertChannel请求参数结构体
 * @class
 */
class CreateAlertChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notice ID
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * 项目 ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * AMP Consumer ID
         * @type {string || null}
         */
        this.AMPConsumerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AMPConsumerId = 'AMPConsumerId' in params ? params.AMPConsumerId : null;

    }
}

/**
 * 告警历史项的状态
 * @class
 */
class AlertRecordStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 停止压测任务成功与否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AbortJob = null;

        /**
         * 发送告警通知成功与否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SendNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AbortJob = 'AbortJob' in params ? params.AbortJob : null;
        this.SendNotice = 'SendNotice' in params ? params.SendNotice : null;

    }
}

/**
 * DescribeAlertChannels请求参数结构体
 * @class
 */
class DescribeAlertChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 ID 列表
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Notice ID 列表
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * 排序项
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 是否正序
         * @type {boolean || null}
         */
        this.Ascend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;

    }
}

/**
 * SLA 规则
 * @class
 */
class SLARule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 压测指标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 压测指标聚合方法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Aggregation = null;

        /**
         * 压测指标条件判断符号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * 阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SLALabel> || null}
         */
        this.LabelFilter = null;

        /**
         * 是否停止压测任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AbortFlag = null;

        /**
         * 持续时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.For = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Aggregation = 'Aggregation' in params ? params.Aggregation : null;
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.LabelFilter) {
            this.LabelFilter = new Array();
            for (let z in params.LabelFilter) {
                let obj = new SLALabel();
                obj.deserialize(params.LabelFilter[z]);
                this.LabelFilter.push(obj);
            }
        }
        this.AbortFlag = 'AbortFlag' in params ? params.AbortFlag : null;
        this.For = 'For' in params ? params.For : null;

    }
}

/**
 * DescribeAvailableMetrics返回参数结构体
 * @class
 */
class DescribeAvailableMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统支持的所有指标
         * @type {Array.<MetricInfo> || null}
         */
        this.MetricSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetricSet) {
            this.MetricSet = new Array();
            for (let z in params.MetricSet) {
                let obj = new MetricInfo();
                obj.deserialize(params.MetricSet[z]);
                this.MetricSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMetricLabelWithValues返回参数结构体
 * @class
 */
class DescribeMetricLabelWithValuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标所有的label和values数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MetricLabelWithValues> || null}
         */
        this.MetricLabelWithValuesSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetricLabelWithValuesSet) {
            this.MetricLabelWithValuesSet = new Array();
            for (let z in params.MetricLabelWithValuesSet) {
                let obj = new MetricLabelWithValues();
                obj.deserialize(params.MetricLabelWithValuesSet[z]);
                this.MetricLabelWithValuesSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 施压配置
 * @class
 */
class LoadSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 并发施压模式的配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Concurrency || null}
         */
        this.Concurrency = null;

        /**
         * RPS施压模式的配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RequestsPerSecond || null}
         */
        this.RequestsPerSecond = null;

        /**
         * 脚本内置压力模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScriptOrigin || null}
         */
        this.ScriptOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Concurrency) {
            let obj = new Concurrency();
            obj.deserialize(params.Concurrency)
            this.Concurrency = obj;
        }

        if (params.RequestsPerSecond) {
            let obj = new RequestsPerSecond();
            obj.deserialize(params.RequestsPerSecond)
            this.RequestsPerSecond = obj;
        }

        if (params.ScriptOrigin) {
            let obj = new ScriptOrigin();
            obj.deserialize(params.ScriptOrigin)
            this.ScriptOrigin = obj;
        }

    }
}

/**
 * 告警通知渠道
 * @class
 */
class AlertChannel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知模板ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * AMP consumer ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AMPConsumerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.AMPConsumerId = 'AMPConsumerId' in params ? params.AMPConsumerId : null;

    }
}

/**
 * 脚本内置压力模型
 * @class
 */
class ScriptOrigin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器数量
         * @type {number || null}
         */
        this.MachineNumber = null;

        /**
         * 机器规格
         * @type {string || null}
         */
        this.MachineSpecification = null;

        /**
         * 压测时长
         * @type {number || null}
         */
        this.DurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineNumber = 'MachineNumber' in params ? params.MachineNumber : null;
        this.MachineSpecification = 'MachineSpecification' in params ? params.MachineSpecification : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;

    }
}

/**
 * 查询与特定scenario关联的job的参数
 * @class
 */
class ScenarioRelatedJobsParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * job偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制最多查询的job数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 是否升序
         * @type {boolean || null}
         */
        this.Ascend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;

    }
}

/**
 * COS临时凭证
 * @class
 */
class Credentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时secret ID
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时secret key
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * 临时token
         * @type {string || null}
         */
        this.Token = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;

    }
}

/**
 * DescribeAlertChannels返回参数结构体
 * @class
 */
class DescribeAlertChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知接收组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlertChannelRecord> || null}
         */
        this.AlertChannelSet = null;

        /**
         * 告警通知接收组数目
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.AlertChannelSet) {
            this.AlertChannelSet = new Array();
            for (let z in params.AlertChannelSet) {
                let obj = new AlertChannelRecord();
                obj.deserialize(params.AlertChannelSet[z]);
                this.AlertChannelSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCronJob请求参数结构体
 * @class
 */
class CreateCronJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时任务名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 场景名称
         * @type {string || null}
         */
        this.ScenarioName = null;

        /**
         * 执行频率类型，1:只执行一次; 2:日粒度; 3:周粒度; 4:高级
         * @type {number || null}
         */
        this.FrequencyType = null;

        /**
         * cron表达式
         * @type {string || null}
         */
        this.CronExpression = null;

        /**
         * 任务发起人
         * @type {string || null}
         */
        this.JobOwner = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Notice ID
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Note = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.ScenarioName = 'ScenarioName' in params ? params.ScenarioName : null;
        this.FrequencyType = 'FrequencyType' in params ? params.FrequencyType : null;
        this.CronExpression = 'CronExpression' in params ? params.CronExpression : null;
        this.JobOwner = 'JobOwner' in params ? params.JobOwner : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * 指标矩阵，可包含多条指标序列
 * @class
 */
class CustomSampleMatrix extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名字
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 聚合函数
         * @type {string || null}
         */
        this.Aggregation = null;

        /**
         * 指标单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 指标序列数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SampleStream> || null}
         */
        this.Streams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Aggregation = 'Aggregation' in params ? params.Aggregation : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.Streams) {
            this.Streams = new Array();
            for (let z in params.Streams) {
                let obj = new SampleStream();
                obj.deserialize(params.Streams[z]);
                this.Streams.push(obj);
            }
        }

    }
}

/**
 * UpdateJob返回参数结构体
 * @class
 */
class UpdateJobResponse extends  AbstractModel {
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
 * DescribeCheckSummary请求参数结构体
 * @class
 */
class DescribeCheckSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 指标查询过滤
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 等于：0，不等于：1
         * @type {number || null}
         */
        this.Operator = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * 指标值
         * @type {string || null}
         */
        this.LabelValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.LabelValue = 'LabelValue' in params ? params.LabelValue : null;

    }
}

/**
 * DeleteFiles返回参数结构体
 * @class
 */
class DeleteFilesResponse extends  AbstractModel {
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
 * 聚合函数
 * @class
 */
class AggregationLegend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标支持的聚合函数
         * @type {string || null}
         */
        this.Aggregation = null;

        /**
         * 聚合函数作用于指标后对应的描述
         * @type {string || null}
         */
        this.Legend = null;

        /**
         * 聚合之后的指标单位
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
        this.Aggregation = 'Aggregation' in params ? params.Aggregation : null;
        this.Legend = 'Legend' in params ? params.Legend : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * 发压host来源
 * @class
 */
class LoadSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发压host的IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 发压host所在的pod
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 所属地域
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
        this.IP = 'IP' in params ? params.IP : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 文件基本信息
 * @class
 */
class FileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 文件 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * 施压配置
 * @class
 */
class Load extends  AbstractModel {
    constructor(){
        super();

        /**
         * 施压配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LoadSpec || null}
         */
        this.LoadSpec = null;

        /**
         * 压力来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VpcLoadDistribution || null}
         */
        this.VpcLoadDistribution = null;

        /**
         * 压力分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GeoRegionsLoadItem> || null}
         */
        this.GeoRegionsLoadDistribution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadSpec) {
            let obj = new LoadSpec();
            obj.deserialize(params.LoadSpec)
            this.LoadSpec = obj;
        }

        if (params.VpcLoadDistribution) {
            let obj = new VpcLoadDistribution();
            obj.deserialize(params.VpcLoadDistribution)
            this.VpcLoadDistribution = obj;
        }

        if (params.GeoRegionsLoadDistribution) {
            this.GeoRegionsLoadDistribution = new Array();
            for (let z in params.GeoRegionsLoadDistribution) {
                let obj = new GeoRegionsLoadItem();
                obj.deserialize(params.GeoRegionsLoadDistribution[z]);
                this.GeoRegionsLoadDistribution.push(obj);
            }
        }

    }
}

/**
 * CreateFile请求参数结构体
 * @class
 */
class CreateFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件 ID
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 项目 ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 文件种类，参数文件-1，协议文件-2，请求文件-3
         * @type {number || null}
         */
        this.Kind = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 文件大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 文件类型，文件夹-folder
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 行数
         * @type {number || null}
         */
        this.LineCount = null;

        /**
         * 前几行数据
         * @type {Array.<string> || null}
         */
        this.HeadLines = null;

        /**
         * 后几行数据
         * @type {Array.<string> || null}
         */
        this.TailLines = null;

        /**
         * 表头是否在文件内
         * @type {boolean || null}
         */
        this.HeaderInFile = null;

        /**
         * 表头
         * @type {Array.<string> || null}
         */
        this.HeaderColumns = null;

        /**
         * 文件夹中的文件
         * @type {Array.<FileInfo> || null}
         */
        this.FileInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.LineCount = 'LineCount' in params ? params.LineCount : null;
        this.HeadLines = 'HeadLines' in params ? params.HeadLines : null;
        this.TailLines = 'TailLines' in params ? params.TailLines : null;
        this.HeaderInFile = 'HeaderInFile' in params ? params.HeaderInFile : null;
        this.HeaderColumns = 'HeaderColumns' in params ? params.HeaderColumns : null;

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new FileInfo();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }

    }
}

/**
 * 压测请求明细
 * @class
 */
class RequestSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求URL
         * @type {string || null}
         */
        this.Service = null;

        /**
         * 请求方法
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 请求次数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 请求响应平均耗时，单位秒
         * @type {number || null}
         */
        this.Average = null;

        /**
         * 请求p90耗时，单位秒
         * @type {number || null}
         */
        this.P90 = null;

        /**
         * 请求p95耗时，单位秒
         * @type {number || null}
         */
        this.P95 = null;

        /**
         * 请求最小耗时，单位秒
         * @type {number || null}
         */
        this.Min = null;

        /**
         * 请求最大耗时，单位秒
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 请求错误率
         * @type {number || null}
         */
        this.ErrorPercentage = null;

        /**
         * 请求p99耗时，单位秒
         * @type {number || null}
         */
        this.P99 = null;

        /**
         * 响应状态码
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 响应详情
         * @type {string || null}
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
        this.Service = 'Service' in params ? params.Service : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Average = 'Average' in params ? params.Average : null;
        this.P90 = 'P90' in params ? params.P90 : null;
        this.P95 = 'P95' in params ? params.P95 : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.ErrorPercentage = 'ErrorPercentage' in params ? params.ErrorPercentage : null;
        this.P99 = 'P99' in params ? params.P99 : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Result = 'Result' in params ? params.Result : null;

    }
}

/**
 * DeleteCronJobs请求参数结构体
 * @class
 */
class DeleteCronJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 定时任务ID数组
         * @type {Array.<string> || null}
         */
        this.CronJobIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CronJobIds = 'CronJobIds' in params ? params.CronJobIds : null;

    }
}

/**
 * DescribeSampleLogs返回参数结构体
 * @class
 */
class DescribeSampleLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 日志上下文，加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 采样日志数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SampleLog> || null}
         */
        this.SampleLogs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Context = 'Context' in params ? params.Context : null;

        if (params.SampleLogs) {
            this.SampleLogs = new Array();
            for (let z in params.SampleLogs) {
                let obj = new SampleLog();
                obj.deserialize(params.SampleLogs[z]);
                this.SampleLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCronJobs返回参数结构体
 * @class
 */
class DescribeCronJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时任务总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 定时任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CronJob> || null}
         */
        this.CronJobSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.CronJobSet) {
            this.CronJobSet = new Array();
            for (let z in params.CronJobSet) {
                let obj = new CronJob();
                obj.deserialize(params.CronJobSet[z]);
                this.CronJobSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNormalLogs请求参数结构体
 * @class
 */
class DescribeNormalLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 压测项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 测试场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 压测任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 日志上下文，加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志开始时间
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志结束时间
         * @type {string || null}
         */
        this.To = null;

        /**
         * 日志级别，可取debug/info/error
         * @type {string || null}
         */
        this.SeverityText = null;

        /**
         * 施压节点IP
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 施压节点所在地域
         * @type {string || null}
         */
        this.InstanceRegion = null;

        /**
         * 日志类型， console代表用户输出，engine代表引擎输出
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 返回日志条数限制，最大100
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.SeverityText = 'SeverityText' in params ? params.SeverityText : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeJobs请求参数结构体
 * @class
 */
class DescribeJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID数组
         * @type {Array.<string> || null}
         */
        this.ScenarioIds = null;

        /**
         * 项目ID数组
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 分页起始位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页最大数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 任务ID数组
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * 按字段排序
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 升序/降序
         * @type {boolean || null}
         */
        this.Ascend = null;

        /**
         * 任务开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 调试任务标记
         * @type {boolean || null}
         */
        this.Debug = null;

        /**
         * 任务的状态
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
        this.ScenarioIds = 'ScenarioIds' in params ? params.ScenarioIds : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Debug = 'Debug' in params ? params.Debug : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeFiles请求参数结构体
 * @class
 */
class DescribeFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 ID 数组
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 文件 ID 数组
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大为 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 文件种类，参数文件-1，协议文件-2，请求文件-3
         * @type {number || null}
         */
        this.Kind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Kind = 'Kind' in params ? params.Kind : null;

    }
}

/**
 * AbortCronJobs请求参数结构体
 * @class
 */
class AbortCronJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 定时任务ID数组
         * @type {Array.<string> || null}
         */
        this.CronJobIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CronJobIds = 'CronJobIds' in params ? params.CronJobIds : null;

    }
}

/**
 * DescribeSampleMatrixBatchQuery请求参数结构体
 * @class
 */
class DescribeSampleMatrixBatchQueryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 查询语句
         * @type {Array.<InternalMetricQuery> || null}
         */
        this.Queries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;

        if (params.Queries) {
            this.Queries = new Array();
            for (let z in params.Queries) {
                let obj = new InternalMetricQuery();
                obj.deserialize(params.Queries[z]);
                this.Queries.push(obj);
            }
        }

    }
}

/**
 * DescribeAlertRecords返回参数结构体
 * @class
 */
class DescribeAlertRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警历史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlertRecord> || null}
         */
        this.AlertRecordSet = null;

        /**
         * 告警历史记录的总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.AlertRecordSet) {
            this.AlertRecordSet = new Array();
            for (let z in params.AlertRecordSet) {
                let obj = new AlertRecord();
                obj.deserialize(params.AlertRecordSet[z]);
                this.AlertRecordSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjects请求参数结构体
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 项目ID数组
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 项目名
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 按字段排序
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 升序/降序
         * @type {boolean || null}
         */
        this.Ascend = null;

        /**
         * 标签数组
         * @type {Array.<TagSpec> || null}
         */
        this.TagFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagSpec();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * DescribeSampleQuery返回参数结构体
 * @class
 */
class DescribeSampleQueryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回指标内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CustomSample || null}
         */
        this.MetricSample = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetricSample) {
            let obj = new CustomSample();
            obj.deserialize(params.MetricSample)
            this.MetricSample = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateScenario请求参数结构体
 * @class
 */
class CreateScenarioRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 压测引擎类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 施压配置
         * @type {Load || null}
         */
        this.Load = null;

        /**
         * deprecated
         * @type {Array.<string> || null}
         */
        this.Configs = null;

        /**
         * 测试数据集
         * @type {Array.<TestData> || null}
         */
        this.Datasets = null;

        /**
         * deprecated
         * @type {Array.<string> || null}
         */
        this.Extensions = null;

        /**
         * deprecated
         * @type {string || null}
         */
        this.SLAId = null;

        /**
         * cron job ID
         * @type {string || null}
         */
        this.CronId = null;

        /**
         * deprecated
         * @type {Array.<string> || null}
         */
        this.Scripts = null;

        /**
         * 测试脚本文件信息
         * @type {Array.<ScriptInfo> || null}
         */
        this.TestScripts = null;

        /**
         * 协议文件路径
         * @type {Array.<ProtocolInfo> || null}
         */
        this.Protocols = null;

        /**
         * 请求文件路径
         * @type {Array.<FileInfo> || null}
         */
        this.RequestFiles = null;

        /**
         * SLA 策略
         * @type {SLAPolicy || null}
         */
        this.SLAPolicy = null;

        /**
         * 拓展包文件路径
         * @type {Array.<FileInfo> || null}
         */
        this.Plugins = null;

        /**
         * 域名解析配置
         * @type {DomainNameConfig || null}
         */
        this.DomainNameConfig = null;

        /**
         * 创建人名
         * @type {string || null}
         */
        this.Owner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Load) {
            let obj = new Load();
            obj.deserialize(params.Load)
            this.Load = obj;
        }
        this.Configs = 'Configs' in params ? params.Configs : null;

        if (params.Datasets) {
            this.Datasets = new Array();
            for (let z in params.Datasets) {
                let obj = new TestData();
                obj.deserialize(params.Datasets[z]);
                this.Datasets.push(obj);
            }
        }
        this.Extensions = 'Extensions' in params ? params.Extensions : null;
        this.SLAId = 'SLAId' in params ? params.SLAId : null;
        this.CronId = 'CronId' in params ? params.CronId : null;
        this.Scripts = 'Scripts' in params ? params.Scripts : null;

        if (params.TestScripts) {
            this.TestScripts = new Array();
            for (let z in params.TestScripts) {
                let obj = new ScriptInfo();
                obj.deserialize(params.TestScripts[z]);
                this.TestScripts.push(obj);
            }
        }

        if (params.Protocols) {
            this.Protocols = new Array();
            for (let z in params.Protocols) {
                let obj = new ProtocolInfo();
                obj.deserialize(params.Protocols[z]);
                this.Protocols.push(obj);
            }
        }

        if (params.RequestFiles) {
            this.RequestFiles = new Array();
            for (let z in params.RequestFiles) {
                let obj = new FileInfo();
                obj.deserialize(params.RequestFiles[z]);
                this.RequestFiles.push(obj);
            }
        }

        if (params.SLAPolicy) {
            let obj = new SLAPolicy();
            obj.deserialize(params.SLAPolicy)
            this.SLAPolicy = obj;
        }

        if (params.Plugins) {
            this.Plugins = new Array();
            for (let z in params.Plugins) {
                let obj = new FileInfo();
                obj.deserialize(params.Plugins[z]);
                this.Plugins.push(obj);
            }
        }

        if (params.DomainNameConfig) {
            let obj = new DomainNameConfig();
            obj.deserialize(params.DomainNameConfig)
            this.DomainNameConfig = obj;
        }
        this.Owner = 'Owner' in params ? params.Owner : null;

    }
}

/**
 * DescribeMetricLabelWithValues请求参数结构体
 * @class
 */
class DescribeMetricLabelWithValuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * job id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * project id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * scenario id
         * @type {string || null}
         */
        this.ScenarioId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;

    }
}

/**
 * 场景列表
 * @class
 */
class Scenario extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 场景名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 场景描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 场景类型，如pts-http, pts-js, pts-trpc, pts-jmeter
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 场景状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 施压配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Load || null}
         */
        this.Load = null;

        /**
         * deprecated
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EncodedScripts = null;

        /**
         * deprecated
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Configs = null;

        /**
         * deprecated
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Extensions = null;

        /**
         * 测试数据集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TestData> || null}
         */
        this.Datasets = null;

        /**
         * SLA规则的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SLAId = null;

        /**
         * Cron Job规则的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CronId = null;

        /**
         * 场景创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 场景修改时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * App ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 子用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * 测试脚本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScriptInfo> || null}
         */
        this.TestScripts = null;

        /**
         * 协议文件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProtocolInfo> || null}
         */
        this.Protocols = null;

        /**
         * 请求文件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FileInfo> || null}
         */
        this.RequestFiles = null;

        /**
         * SLA 策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SLAPolicy || null}
         */
        this.SLAPolicy = null;

        /**
         * 扩展包信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FileInfo> || null}
         */
        this.Plugins = null;

        /**
         * 域名解析配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DomainNameConfig || null}
         */
        this.DomainNameConfig = null;

        /**
         * 通知事件回调
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NotificationHook> || null}
         */
        this.NotificationHooks = null;

        /**
         * 创建人员
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 场景所在的项目的名字
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Load) {
            let obj = new Load();
            obj.deserialize(params.Load)
            this.Load = obj;
        }
        this.EncodedScripts = 'EncodedScripts' in params ? params.EncodedScripts : null;
        this.Configs = 'Configs' in params ? params.Configs : null;
        this.Extensions = 'Extensions' in params ? params.Extensions : null;

        if (params.Datasets) {
            this.Datasets = new Array();
            for (let z in params.Datasets) {
                let obj = new TestData();
                obj.deserialize(params.Datasets[z]);
                this.Datasets.push(obj);
            }
        }
        this.SLAId = 'SLAId' in params ? params.SLAId : null;
        this.CronId = 'CronId' in params ? params.CronId : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;

        if (params.TestScripts) {
            this.TestScripts = new Array();
            for (let z in params.TestScripts) {
                let obj = new ScriptInfo();
                obj.deserialize(params.TestScripts[z]);
                this.TestScripts.push(obj);
            }
        }

        if (params.Protocols) {
            this.Protocols = new Array();
            for (let z in params.Protocols) {
                let obj = new ProtocolInfo();
                obj.deserialize(params.Protocols[z]);
                this.Protocols.push(obj);
            }
        }

        if (params.RequestFiles) {
            this.RequestFiles = new Array();
            for (let z in params.RequestFiles) {
                let obj = new FileInfo();
                obj.deserialize(params.RequestFiles[z]);
                this.RequestFiles.push(obj);
            }
        }

        if (params.SLAPolicy) {
            let obj = new SLAPolicy();
            obj.deserialize(params.SLAPolicy)
            this.SLAPolicy = obj;
        }

        if (params.Plugins) {
            this.Plugins = new Array();
            for (let z in params.Plugins) {
                let obj = new FileInfo();
                obj.deserialize(params.Plugins[z]);
                this.Plugins.push(obj);
            }
        }

        if (params.DomainNameConfig) {
            let obj = new DomainNameConfig();
            obj.deserialize(params.DomainNameConfig)
            this.DomainNameConfig = obj;
        }

        if (params.NotificationHooks) {
            this.NotificationHooks = new Array();
            for (let z in params.NotificationHooks) {
                let obj = new NotificationHook();
                obj.deserialize(params.NotificationHooks[z]);
                this.NotificationHooks.push(obj);
            }
        }
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * DescribeProjects返回参数结构体
 * @class
 */
class DescribeProjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Project> || null}
         */
        this.ProjectSet = null;

        /**
         * 项目数量
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

        if (params.ProjectSet) {
            this.ProjectSet = new Array();
            for (let z in params.ProjectSet) {
                let obj = new Project();
                obj.deserialize(params.ProjectSet[z]);
                this.ProjectSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCronJob请求参数结构体
 * @class
 */
class UpdateCronJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 定时任务ID
         * @type {string || null}
         */
        this.CronJobId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Note = null;

        /**
         * cron表达式
         * @type {string || null}
         */
        this.CronExpression = null;

        /**
         * 执行频率类型，1:只执行一次; 2:日粒度; 3:周粒度; 4:高级
         * @type {number || null}
         */
        this.FrequencyType = null;

        /**
         * 定时任务名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 场景名称
         * @type {string || null}
         */
        this.ScenarioName = null;

        /**
         * 任务发起人
         * @type {string || null}
         */
        this.JobOwner = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Notice ID
         * @type {string || null}
         */
        this.NoticeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CronJobId = 'CronJobId' in params ? params.CronJobId : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.CronExpression = 'CronExpression' in params ? params.CronExpression : null;
        this.FrequencyType = 'FrequencyType' in params ? params.FrequencyType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.ScenarioName = 'ScenarioName' in params ? params.ScenarioName : null;
        this.JobOwner = 'JobOwner' in params ? params.JobOwner : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;

    }
}

/**
 * 地域
 * @class
 */
class RegionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域代码
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域所在的地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域状态
         * @type {number || null}
         */
        this.RegionState = null;

        /**
         * 地域简称
         * @type {string || null}
         */
        this.RegionShortName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

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
        this.Area = 'Area' in params ? params.Area : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;
        this.RegionShortName = 'RegionShortName' in params ? params.RegionShortName : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * 连续指标采样内容
 * @class
 */
class SampleStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * labels描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 指标采样数组
         * @type {Array.<SamplePair> || null}
         */
        this.Values = null;

        /**
         * 指标序列名字
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new SamplePair();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeCheckSummary返回参数结构体
 * @class
 */
class DescribeCheckSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查点汇总信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CheckSummary> || null}
         */
        this.CheckSummarySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CheckSummarySet) {
            this.CheckSummarySet = new Array();
            for (let z in params.CheckSummarySet) {
                let obj = new CheckSummary();
                obj.deserialize(params.CheckSummarySet[z]);
                this.CheckSummarySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScenarios请求参数结构体
 * @class
 */
class DescribeScenariosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID数组
         * @type {Array.<string> || null}
         */
        this.ScenarioIds = null;

        /**
         * 场景名
         * @type {string || null}
         */
        this.ScenarioName = null;

        /**
         * 场景状态数组
         * @type {Array.<number> || null}
         */
        this.ScenarioStatus = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序的列
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 是否正序
         * @type {boolean || null}
         */
        this.Ascend = null;

        /**
         * 项目ID数组
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 场景类型
         * @type {string || null}
         */
        this.ScenarioType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScenarioIds = 'ScenarioIds' in params ? params.ScenarioIds : null;
        this.ScenarioName = 'ScenarioName' in params ? params.ScenarioName : null;
        this.ScenarioStatus = 'ScenarioStatus' in params ? params.ScenarioStatus : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ScenarioType = 'ScenarioType' in params ? params.ScenarioType : null;

    }
}

/**
 * DescribeScenarios返回参数结构体
 * @class
 */
class DescribeScenariosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Scenario> || null}
         */
        this.ScenarioSet = null;

        /**
         * 场景总数
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

        if (params.ScenarioSet) {
            this.ScenarioSet = new Array();
            for (let z in params.ScenarioSet) {
                let obj = new Scenario();
                obj.deserialize(params.ScenarioSet[z]);
                this.ScenarioSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateScenario返回参数结构体
 * @class
 */
class CreateScenarioResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AbortJob请求参数结构体
 * @class
 */
class AbortJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 中断原因
         * @type {number || null}
         */
        this.AbortReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.AbortReason = 'AbortReason' in params ? params.AbortReason : null;

    }
}

/**
 * 检查点汇总结果
 * @class
 */
class CheckSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查点名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 检查点所在步骤名字
         * @type {string || null}
         */
        this.Step = null;

        /**
         * 检查点成功次数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 检查失败次数
         * @type {number || null}
         */
        this.FailCount = null;

        /**
         * 错误比例
         * @type {number || null}
         */
        this.ErrorRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Step = 'Step' in params ? params.Step : null;
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailCount = 'FailCount' in params ? params.FailCount : null;
        this.ErrorRate = 'ErrorRate' in params ? params.ErrorRate : null;

    }
}

/**
 * 事件通知回调
 * @class
 */
class NotificationHook extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知事件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Events = null;

        /**
         * 回调 URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.URL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Events = 'Events' in params ? params.Events : null;
        this.URL = 'URL' in params ? params.URL : null;

    }
}

/**
 * DescribeJobs返回参数结构体
 * @class
 */
class DescribeJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Job> || null}
         */
        this.JobSet = null;

        /**
         * 任务数量
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.JobSet) {
            this.JobSet = new Array();
            for (let z in params.JobSet) {
                let obj = new Job();
                obj.deserialize(params.JobSet[z]);
                this.JobSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateTmpKey请求参数结构体
 * @class
 */
class GenerateTmpKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;

    }
}

/**
 * DescribeSampleBatchQuery返回参数结构体
 * @class
 */
class DescribeSampleBatchQueryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回指标内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CustomSample> || null}
         */
        this.MetricSampleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetricSampleSet) {
            this.MetricSampleSet = new Array();
            for (let z in params.MetricSampleSet) {
                let obj = new CustomSample();
                obj.deserialize(params.MetricSampleSet[z]);
                this.MetricSampleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartJob返回参数结构体
 * @class
 */
class StartJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PTS提供的指标名，指标对应的labels及values
 * @class
 */
class MetricLabelWithValues extends  AbstractModel {
    constructor(){
        super();

        /**
         * metric 名字
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * label及values 数组
         * @type {Array.<LabelWithValues> || null}
         */
        this.LabelValuesSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.LabelValuesSet) {
            this.LabelValuesSet = new Array();
            for (let z in params.LabelValuesSet) {
                let obj = new LabelWithValues();
                obj.deserialize(params.LabelValuesSet[z]);
                this.LabelValuesSet.push(obj);
            }
        }

    }
}

/**
 * DeleteCronJobs返回参数结构体
 * @class
 */
class DeleteCronJobsResponse extends  AbstractModel {
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
 * StartJob请求参数结构体
 * @class
 */
class StartJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景ID
         * @type {string || null}
         */
        this.ScenarioId = null;

        /**
         * 任务发起人
         * @type {string || null}
         */
        this.JobOwner = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 是否调试
         * @type {boolean || null}
         */
        this.Debug = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Note = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScenarioId = 'ScenarioId' in params ? params.ScenarioId : null;
        this.JobOwner = 'JobOwner' in params ? params.JobOwner : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Debug = 'Debug' in params ? params.Debug : null;
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * DescribeScenarioWithJobs返回参数结构体
 * @class
 */
class DescribeScenarioWithJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景配置以及附带的job内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScenarioWithJobs> || null}
         */
        this.ScenarioWithJobsSet = null;

        /**
         * 场景总数
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

        if (params.ScenarioWithJobsSet) {
            this.ScenarioWithJobsSet = new Array();
            for (let z in params.ScenarioWithJobsSet) {
                let obj = new ScenarioWithJobs();
                obj.deserialize(params.ScenarioWithJobsSet[z]);
                this.ScenarioWithJobsSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 采用日志响应时间RT范围
 * @class
 */
class ReactionTimeRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最小响应时间，单位ms
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 最大响应时间，单位ms
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
 * 文件列表
 * @class
 */
class File extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件 ID
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 文件种类，参数文件-1，协议文件-2，请求文件-3
         * @type {number || null}
         */
        this.Kind = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 文件字节数
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 文件类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 文件行数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LineCount = null;

        /**
         * 头部数据行
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.HeadLines = null;

        /**
         * 尾部数据行
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TailLines = null;

        /**
         * 首行是否为参数名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HeaderInFile = null;

        /**
         * 参数名数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.HeaderColumns = null;

        /**
         * 文件夹中的文件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FileInfo> || null}
         */
        this.FileInfos = null;

        /**
         * 关联场景
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Scenario> || null}
         */
        this.ScenarioSet = null;

        /**
         * 文件状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 项目 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 此字段不再使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppID = null;

        /**
         * 用户主账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 用户子账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * 用户账号的 App ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.LineCount = 'LineCount' in params ? params.LineCount : null;
        this.HeadLines = 'HeadLines' in params ? params.HeadLines : null;
        this.TailLines = 'TailLines' in params ? params.TailLines : null;
        this.HeaderInFile = 'HeaderInFile' in params ? params.HeaderInFile : null;
        this.HeaderColumns = 'HeaderColumns' in params ? params.HeaderColumns : null;

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new FileInfo();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }

        if (params.ScenarioSet) {
            this.ScenarioSet = new Array();
            for (let z in params.ScenarioSet) {
                let obj = new Scenario();
                obj.deserialize(params.ScenarioSet[z]);
                this.ScenarioSet.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AppID = 'AppID' in params ? params.AppID : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * DeleteAlertChannel请求参数结构体
 * @class
 */
class DeleteAlertChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Notice ID
         * @type {string || null}
         */
        this.NoticeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;

    }
}

/**
 * UpdateProject返回参数结构体
 * @class
 */
class UpdateProjectResponse extends  AbstractModel {
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
 * UpdateFileScenarioRelation返回参数结构体
 * @class
 */
class UpdateFileScenarioRelationResponse extends  AbstractModel {
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
    DescribeCronJobsRequest: DescribeCronJobsRequest,
    UpdateJobRequest: UpdateJobRequest,
    UpdateCronJobResponse: UpdateCronJobResponse,
    DescribeSampleMatrixQueryResponse: DescribeSampleMatrixQueryResponse,
    DescribeSampleLogsRequest: DescribeSampleLogsRequest,
    DeleteJobsRequest: DeleteJobsRequest,
    Concurrency: Concurrency,
    AlertChannelRecord: AlertChannelRecord,
    DescribeAlertRecordsRequest: DescribeAlertRecordsRequest,
    DeleteAlertChannelResponse: DeleteAlertChannelResponse,
    DescribeLabelValuesRequest: DescribeLabelValuesRequest,
    AbortCronJobsResponse: AbortCronJobsResponse,
    DescribeRequestSummaryResponse: DescribeRequestSummaryResponse,
    DescribeScenarioWithJobsRequest: DescribeScenarioWithJobsRequest,
    CreateCronJobResponse: CreateCronJobResponse,
    RestartCronJobsResponse: RestartCronJobsResponse,
    SLAPolicy: SLAPolicy,
    DNSConfig: DNSConfig,
    ScriptInfo: ScriptInfo,
    NormalLog: NormalLog,
    UpdateProjectRequest: UpdateProjectRequest,
    AbortJobResponse: AbortJobResponse,
    Project: Project,
    UpdateScenarioRequest: UpdateScenarioRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    Attributes: Attributes,
    UpdateScenarioResponse: UpdateScenarioResponse,
    CustomSample: CustomSample,
    CreateProjectRequest: CreateProjectRequest,
    AdjustJobSpeedRequest: AdjustJobSpeedRequest,
    DescribeRequestSummaryRequest: DescribeRequestSummaryRequest,
    HostAlias: HostAlias,
    CreateFileResponse: CreateFileResponse,
    DeleteProjectsResponse: DeleteProjectsResponse,
    GeoRegionsLoadItem: GeoRegionsLoadItem,
    LabelWithValues: LabelWithValues,
    Label: Label,
    ProtocolInfo: ProtocolInfo,
    VpcLoadDistribution: VpcLoadDistribution,
    SamplePair: SamplePair,
    CronJob: CronJob,
    DescribeLabelValuesResponse: DescribeLabelValuesResponse,
    InternalMetricQuery: InternalMetricQuery,
    Job: Job,
    DescribeAvailableMetricsRequest: DescribeAvailableMetricsRequest,
    CopyScenarioResponse: CopyScenarioResponse,
    DescribeSampleMatrixQueryRequest: DescribeSampleMatrixQueryRequest,
    GenerateTmpKeyResponse: GenerateTmpKeyResponse,
    Stage: Stage,
    DescribeFilesResponse: DescribeFilesResponse,
    DeleteProjectsRequest: DeleteProjectsRequest,
    UpdateFileScenarioRelationRequest: UpdateFileScenarioRelationRequest,
    ScenarioWithJobs: ScenarioWithJobs,
    DeleteJobsResponse: DeleteJobsResponse,
    TagSpec: TagSpec,
    AdjustJobSpeedResponse: AdjustJobSpeedResponse,
    CreateProjectResponse: CreateProjectResponse,
    DescribeSampleQueryRequest: DescribeSampleQueryRequest,
    DescribeSampleMatrixBatchQueryResponse: DescribeSampleMatrixBatchQueryResponse,
    SLALabel: SLALabel,
    AlertRecord: AlertRecord,
    RequestsPerSecond: RequestsPerSecond,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DeleteScenariosResponse: DeleteScenariosResponse,
    DeleteFilesRequest: DeleteFilesRequest,
    CopyScenarioRequest: CopyScenarioRequest,
    TestData: TestData,
    SampleLog: SampleLog,
    DomainNameConfig: DomainNameConfig,
    DescribeNormalLogsResponse: DescribeNormalLogsResponse,
    Notification: Notification,
    DescribeSampleBatchQueryRequest: DescribeSampleBatchQueryRequest,
    RestartCronJobsRequest: RestartCronJobsRequest,
    DeleteScenariosRequest: DeleteScenariosRequest,
    CreateAlertChannelResponse: CreateAlertChannelResponse,
    MetricInfo: MetricInfo,
    CreateAlertChannelRequest: CreateAlertChannelRequest,
    AlertRecordStatus: AlertRecordStatus,
    DescribeAlertChannelsRequest: DescribeAlertChannelsRequest,
    SLARule: SLARule,
    DescribeAvailableMetricsResponse: DescribeAvailableMetricsResponse,
    DescribeMetricLabelWithValuesResponse: DescribeMetricLabelWithValuesResponse,
    LoadSpec: LoadSpec,
    AlertChannel: AlertChannel,
    ScriptOrigin: ScriptOrigin,
    ScenarioRelatedJobsParams: ScenarioRelatedJobsParams,
    Credentials: Credentials,
    DescribeAlertChannelsResponse: DescribeAlertChannelsResponse,
    CreateCronJobRequest: CreateCronJobRequest,
    CustomSampleMatrix: CustomSampleMatrix,
    UpdateJobResponse: UpdateJobResponse,
    DescribeCheckSummaryRequest: DescribeCheckSummaryRequest,
    Filter: Filter,
    DeleteFilesResponse: DeleteFilesResponse,
    AggregationLegend: AggregationLegend,
    LoadSource: LoadSource,
    FileInfo: FileInfo,
    Load: Load,
    CreateFileRequest: CreateFileRequest,
    RequestSummary: RequestSummary,
    DeleteCronJobsRequest: DeleteCronJobsRequest,
    DescribeSampleLogsResponse: DescribeSampleLogsResponse,
    DescribeCronJobsResponse: DescribeCronJobsResponse,
    DescribeNormalLogsRequest: DescribeNormalLogsRequest,
    DescribeJobsRequest: DescribeJobsRequest,
    DescribeFilesRequest: DescribeFilesRequest,
    AbortCronJobsRequest: AbortCronJobsRequest,
    DescribeSampleMatrixBatchQueryRequest: DescribeSampleMatrixBatchQueryRequest,
    DescribeAlertRecordsResponse: DescribeAlertRecordsResponse,
    DescribeProjectsRequest: DescribeProjectsRequest,
    DescribeSampleQueryResponse: DescribeSampleQueryResponse,
    CreateScenarioRequest: CreateScenarioRequest,
    DescribeMetricLabelWithValuesRequest: DescribeMetricLabelWithValuesRequest,
    Scenario: Scenario,
    DescribeProjectsResponse: DescribeProjectsResponse,
    UpdateCronJobRequest: UpdateCronJobRequest,
    RegionDetail: RegionDetail,
    SampleStream: SampleStream,
    DescribeCheckSummaryResponse: DescribeCheckSummaryResponse,
    DescribeScenariosRequest: DescribeScenariosRequest,
    DescribeScenariosResponse: DescribeScenariosResponse,
    CreateScenarioResponse: CreateScenarioResponse,
    AbortJobRequest: AbortJobRequest,
    CheckSummary: CheckSummary,
    NotificationHook: NotificationHook,
    DescribeJobsResponse: DescribeJobsResponse,
    GenerateTmpKeyRequest: GenerateTmpKeyRequest,
    DescribeSampleBatchQueryResponse: DescribeSampleBatchQueryResponse,
    StartJobResponse: StartJobResponse,
    MetricLabelWithValues: MetricLabelWithValues,
    DeleteCronJobsResponse: DeleteCronJobsResponse,
    StartJobRequest: StartJobRequest,
    DescribeScenarioWithJobsResponse: DescribeScenarioWithJobsResponse,
    ReactionTimeRange: ReactionTimeRange,
    File: File,
    DeleteAlertChannelRequest: DeleteAlertChannelRequest,
    UpdateProjectResponse: UpdateProjectResponse,
    UpdateFileScenarioRelationResponse: UpdateFileScenarioRelationResponse,

}
