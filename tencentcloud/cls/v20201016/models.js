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
 * UploadLog返回参数结构体
 * @class
 */
class UploadLogResponse extends  AbstractModel {
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
 * CreateAlarm返回参数结构体
 * @class
 */
class CreateAlarmResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略ID。
         * @type {string || null}
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
 * 告警策略描述
 * @class
 */
class AlarmInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 监控对象列表。
         * @type {Array.<AlarmTargetInfo> || null}
         */
        this.AlarmTargets = null;

        /**
         * 监控任务运行时间点。
         * @type {MonitorTime || null}
         */
        this.MonitorTime = null;

        /**
         * 触发条件。
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * 告警重复的周期。单位是min。取值范围是0~1440。
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * 关联的告警通知模板列表。
         * @type {Array.<string> || null}
         */
        this.AlarmNoticeIds = null;

        /**
         * 开启状态。
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 告警策略ID。
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 自定义通知模板
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MessageTemplate = null;

        /**
         * 自定义回调模板
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CallBackInfo || null}
         */
        this.CallBack = null;

        /**
         * 多维分析设置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AnalysisDimensional> || null}
         */
        this.Analysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AlarmTargets) {
            this.AlarmTargets = new Array();
            for (let z in params.AlarmTargets) {
                let obj = new AlarmTargetInfo();
                obj.deserialize(params.AlarmTargets[z]);
                this.AlarmTargets.push(obj);
            }
        }

        if (params.MonitorTime) {
            let obj = new MonitorTime();
            obj.deserialize(params.MonitorTime)
            this.MonitorTime = obj;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;
        this.AlarmNoticeIds = 'AlarmNoticeIds' in params ? params.AlarmNoticeIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MessageTemplate = 'MessageTemplate' in params ? params.MessageTemplate : null;

        if (params.CallBack) {
            let obj = new CallBackInfo();
            obj.deserialize(params.CallBack)
            this.CallBack = obj;
        }

        if (params.Analysis) {
            this.Analysis = new Array();
            for (let z in params.Analysis) {
                let obj = new AnalysisDimensional();
                obj.deserialize(params.Analysis[z]);
                this.Analysis.push(obj);
            }
        }

    }
}

/**
 * 日志结果信息
 * @class
 */
class LogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志时间，单位ms
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 日志来源IP
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 日志文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 日志上报请求包的ID
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 请求包内日志的ID
         * @type {string || null}
         */
        this.PkgLogId = null;

        /**
         * 日志内容的Json序列化字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogJson = null;

        /**
         * 日志来源主机名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.LogJson = 'LogJson' in params ? params.LogJson : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * DeleteAlarmNotice返回参数结构体
 * @class
 */
class DeleteAlarmNoticeResponse extends  AbstractModel {
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
 * DescribeLogHistogram请求参数结构体
 * @class
 */
class DescribeLogHistogramRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 要查询的日志的起始时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.From = null;

        /**
         * 要查询的日志的结束时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.To = null;

        /**
         * 查询语句
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 时间间隔: 单位ms
         * @type {number || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * DescribeLogContext请求参数结构体
 * @class
 */
class DescribeLogContextRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志时间,  格式: YYYY-mm-dd HH:MM:SS.FFF
         * @type {string || null}
         */
        this.BTime = null;

        /**
         * 日志包序号
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 日志包内一条日志的序号
         * @type {number || null}
         */
        this.PkgLogId = null;

        /**
         * 上文日志条数,  默认值10
         * @type {number || null}
         */
        this.PrevLogs = null;

        /**
         * 下文日志条数,  默认值10
         * @type {number || null}
         */
        this.NextLogs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.BTime = 'BTime' in params ? params.BTime : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.PrevLogs = 'PrevLogs' in params ? params.PrevLogs : null;
        this.NextLogs = 'NextLogs' in params ? params.NextLogs : null;

    }
}

/**
 * DeleteShipper请求参数结构体
 * @class
 */
class DeleteShipperRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递规则ID
         * @type {string || null}
         */
        this.ShipperId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;

    }
}

/**
 * ModifyTopic请求参数结构体
 * @class
 */
class ModifyTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 标签描述列表，通过指定该参数可以同时绑定标签到相应的日志主题。最大支持10个标签键值对，并且不能有重复的键值对。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 该日志主题是否开始采集
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 是否开启自动分裂
         * @type {boolean || null}
         */
        this.AutoSplit = null;

        /**
         * 若开启最大分裂，该主题能够能够允许的最大分区数
         * @type {number || null}
         */
        this.MaxSplitPartitions = null;

        /**
         * 生命周期，单位天，可取值范围1~3600。取值为3640时代表永久保存
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.AutoSplit = 'AutoSplit' in params ? params.AutoSplit : null;
        this.MaxSplitPartitions = 'MaxSplitPartitions' in params ? params.MaxSplitPartitions : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * DeleteLogset返回参数结构体
 * @class
 */
class DeleteLogsetResponse extends  AbstractModel {
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
 * Parquet内容描述
 * @class
 */
class ParquetKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键值名称
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * 数据类型，目前支持6种类型：string、boolean、int32、int64、float、double
         * @type {string || null}
         */
        this.KeyType = null;

        /**
         * 解析失败赋值信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyNonExistingField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.KeyType = 'KeyType' in params ? params.KeyType : null;
        this.KeyNonExistingField = 'KeyNonExistingField' in params ? params.KeyNonExistingField : null;

    }
}

/**
 * DescribeShipperTasks返回参数结构体
 * @class
 */
class DescribeShipperTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ShipperTaskInfo> || null}
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ShipperTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMachineGroup返回参数结构体
 * @class
 */
class CreateMachineGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigMachineGroups请求参数结构体
 * @class
 */
class DescribeConfigMachineGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集配置ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * ModifyConfigExtra返回参数结构体
 * @class
 */
class ModifyConfigExtraResponse extends  AbstractModel {
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
 * ModifyLogset请求参数结构体
 * @class
 */
class ModifyLogsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志集名称
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 日志集的绑定的标签键值对。最大支持10个标签键值对，同一个资源只能同时绑定一个标签键。
         * @type {Array.<Tag> || null}
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * CreateLogset请求参数结构体
 * @class
 */
class CreateLogsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集名字，不能重名
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 标签描述列表。最大支持10个标签键值对，并且不能有重复的键值对
         * @type {Array.<Tag> || null}
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
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * ModifyDataTransform请求参数结构体
 * @class
 */
class ModifyDataTransformRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加工任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 加工任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 加工逻辑函数
         * @type {string || null}
         */
        this.EtlContent = null;

        /**
         * 任务启动状态. 默认为1，正常开启,  2关闭
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * 加工任务目的topic_id以及别名
         * @type {Array.<DataTransformResouceInfo> || null}
         */
        this.DstResources = null;

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
        this.EtlContent = 'EtlContent' in params ? params.EtlContent : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;

        if (params.DstResources) {
            this.DstResources = new Array();
            for (let z in params.DstResources) {
                let obj = new DataTransformResouceInfo();
                obj.deserialize(params.DstResources[z]);
                this.DstResources.push(obj);
            }
        }

    }
}

/**
 * 日志中的KV对
 * @class
 */
class LogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 日志Value
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
 * SearchLog返回参数结构体
 * @class
 */
class SearchLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 符合检索条件的日志是否已全部返回，如未全部返回可使用Context参数获取后续更多日志
注意：仅当检索分析语句(Query)不包含SQL时有效
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * 返回的是否为统计分析（即SQL）结果
         * @type {boolean || null}
         */
        this.Analysis = null;

        /**
         * 匹配检索条件的原始日志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogInfo> || null}
         */
        this.Results = null;

        /**
         * 日志统计分析结果的列名
当UseNewAnalysis为false时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColNames = null;

        /**
         * 日志统计分析结果
当UseNewAnalysis为false时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogItems> || null}
         */
        this.AnalysisResults = null;

        /**
         * 日志统计分析结果
当UseNewAnalysis为true时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AnalysisRecords = null;

        /**
         * 日志统计分析结果的列属性
当UseNewAnalysis为true时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Column> || null}
         */
        this.Columns = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.Analysis = 'Analysis' in params ? params.Analysis : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new LogInfo();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.ColNames = 'ColNames' in params ? params.ColNames : null;

        if (params.AnalysisResults) {
            this.AnalysisResults = new Array();
            for (let z in params.AnalysisResults) {
                let obj = new LogItems();
                obj.deserialize(params.AnalysisResults[z]);
                this.AnalysisResults.push(obj);
            }
        }
        this.AnalysisRecords = 'AnalysisRecords' in params ? params.AnalysisRecords : null;

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new Column();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTopic请求参数结构体
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribePartitions请求参数结构体
 * @class
 */
class DescribePartitionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * 自建k8s-容器标准输出信息
 * @class
 */
class ContainerStdoutInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否所有容器
         * @type {boolean || null}
         */
        this.AllContainers = null;

        /**
         * container为空表所有的，不为空采集指定的容器
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * namespace可以多个，用分隔号分割,例如A,B；为空或者没有这个字段，表示所有namespace
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.IncludeLabels = null;

        /**
         * 工作负载信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ContainerWorkLoadInfo> || null}
         */
        this.WorkLoads = null;

        /**
         * 需要排除的namespace可以多个，用分隔号分割,例如A,B
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExcludeNamespace = null;

        /**
         * 需要排除的pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ExcludeLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllContainers = 'AllContainers' in params ? params.AllContainers : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.IncludeLabels = 'IncludeLabels' in params ? params.IncludeLabels : null;

        if (params.WorkLoads) {
            this.WorkLoads = new Array();
            for (let z in params.WorkLoads) {
                let obj = new ContainerWorkLoadInfo();
                obj.deserialize(params.WorkLoads[z]);
                this.WorkLoads.push(obj);
            }
        }
        this.ExcludeNamespace = 'ExcludeNamespace' in params ? params.ExcludeNamespace : null;
        this.ExcludeLabels = 'ExcludeLabels' in params ? params.ExcludeLabels : null;

    }
}

/**
 * ModifyAlarm返回参数结构体
 * @class
 */
class ModifyAlarmResponse extends  AbstractModel {
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
 * DescribeShipperTasks请求参数结构体
 * @class
 */
class DescribeShipperTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递规则ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * 查询的开始时间戳，支持最近3天的查询， 毫秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询的结束时间戳， 毫秒
         * @type {number || null}
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
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeAlarms请求参数结构体
 * @class
 */
class DescribeAlarmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> name

按照【告警策略名称】进行过滤。
类型：String

必选：否

<br><li> alarmId

按照【告警策略ID】进行过滤。
类型：String

必选：否

<br><li> topicId

按照【监控对象的日志主题ID】进行过滤。

类型：String

必选：否

<br><li> enable

按照【启用状态】进行过滤。

类型：String

备注：enable参数值范围: 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False。 其它值将返回参数错误信息.

必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页限制数目，默认值为20，最大值100。
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * MergePartition请求参数结构体
 * @class
 */
class MergePartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 合并的PartitionId
         * @type {number || null}
         */
        this.PartitionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;

    }
}

/**
 * DescribeShippers返回参数结构体
 * @class
 */
class DescribeShippersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ShipperInfo> || null}
         */
        this.Shippers = null;

        /**
         * 本次查询获取到的总数
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

        if (params.Shippers) {
            this.Shippers = new Array();
            for (let z in params.Shippers) {
                let obj = new ShipperInfo();
                obj.deserialize(params.Shippers[z]);
                this.Shippers.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateConfigExtra返回参数结构体
 * @class
 */
class CreateConfigExtraResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集配置扩展信息ID
         * @type {string || null}
         */
        this.ConfigExtraId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigExtraId = 'ConfigExtraId' in params ? params.ConfigExtraId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyShipper返回参数结构体
 * @class
 */
class ModifyShipperResponse extends  AbstractModel {
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
 * RetryShipperTask请求参数结构体
 * @class
 */
class RetryShipperTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递规则ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * 投递任务ID
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
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 自建k8s-工作负载信息
 * @class
 */
class ContainerWorkLoadInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作负载的类型
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 工作负载的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 容器名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DescribeConfigExtras返回参数结构体
 * @class
 */
class DescribeConfigExtrasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConfigExtraInfo> || null}
         */
        this.Configs = null;

        /**
         * 过滤到的总数目
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

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new ConfigExtraInfo();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 回调配置
 * @class
 */
class CallBackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回调时的Body
         * @type {string || null}
         */
        this.Body = null;

        /**
         * 回调时的Headers
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Body = 'Body' in params ? params.Body : null;
        this.Headers = 'Headers' in params ? params.Headers : null;

    }
}

/**
 * OpenKafkaConsumer返回参数结构体
 * @class
 */
class OpenKafkaConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待消费TopicId
         * @type {string || null}
         */
        this.TopicID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicID = 'TopicID' in params ? params.TopicID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 告警对象
 * @class
 */
class AlarmTargetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID。
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志集名称。
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 日志主题ID。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志主题名称。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 查询语句。
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 告警对象序号。
         * @type {number || null}
         */
        this.Number = null;

        /**
         * 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * DescribeIndex请求参数结构体
 * @class
 */
class DescribeIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeConfigs返回参数结构体
 * @class
 */
class DescribeConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConfigInfo> || null}
         */
        this.Configs = null;

        /**
         * 过滤到的总数目
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

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new ConfigInfo();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLogset返回参数结构体
 * @class
 */
class CreateLogsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMachineGroup返回参数结构体
 * @class
 */
class DeleteMachineGroupResponse extends  AbstractModel {
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
 * 创建资源实例时同时绑定的标签对说明
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值
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
 * DescribeExports请求参数结构体
 * @class
 */
class DescribeExportsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 分页的偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页限制数目，默认值为20，最大值100
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 日志提取规则
 * @class
 */
class ExtractRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间字段的key名字，time_key和time_format必须成对出现
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * 时间字段的格式，参考c语言的strftime函数对于时间的格式说明输出参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * 分隔符类型日志的分隔符，只有log_type为delimiter_log时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Delimiter = null;

        /**
         * 整条日志匹配规则，只有log_type为fullregex_log时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogRegex = null;

        /**
         * 行首匹配规则，只有log_type为multiline_log或fullregex_log时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginRegex = null;

        /**
         * 取的每个字段的key名字，为空的key代表丢弃这个字段，只有log_type为delimiter_log时有效，json_log的日志使用json本身的key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Keys = null;

        /**
         * 需要过滤日志的key，及其对应的regex
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KeyRegexInfo> || null}
         */
        this.FilterKeyRegex = null;

        /**
         * 解析失败日志是否上传，true表示上传，false表示不上传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.UnMatchUpLoadSwitch = null;

        /**
         * 失败日志的key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UnMatchLogKey = null;

        /**
         * 增量采集模式下的回溯数据量，默认-1（全量采集）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Backtracking = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.Delimiter = 'Delimiter' in params ? params.Delimiter : null;
        this.LogRegex = 'LogRegex' in params ? params.LogRegex : null;
        this.BeginRegex = 'BeginRegex' in params ? params.BeginRegex : null;
        this.Keys = 'Keys' in params ? params.Keys : null;

        if (params.FilterKeyRegex) {
            this.FilterKeyRegex = new Array();
            for (let z in params.FilterKeyRegex) {
                let obj = new KeyRegexInfo();
                obj.deserialize(params.FilterKeyRegex[z]);
                this.FilterKeyRegex.push(obj);
            }
        }
        this.UnMatchUpLoadSwitch = 'UnMatchUpLoadSwitch' in params ? params.UnMatchUpLoadSwitch : null;
        this.UnMatchLogKey = 'UnMatchLogKey' in params ? params.UnMatchLogKey : null;
        this.Backtracking = 'Backtracking' in params ? params.Backtracking : null;

    }
}

/**
 * 日志主题信息
 * @class
 */
class TopicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 主题分区个数
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * 是否开启索引
         * @type {boolean || null}
         */
        this.Index = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 日主主题是否开启采集
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 日志主题绑定的标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 该主题是否开启自动分裂
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoSplit = null;

        /**
         * 若开启自动分裂的话，该主题能够允许的最大分区数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxSplitPartitions = null;

        /**
         * 日主题的存储类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 生命周期，单位天，可取值范围1~3600。取值为3640时代表永久保存
注意：此字段可能返回 null，表示取不到有效值。
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoSplit = 'AutoSplit' in params ? params.AutoSplit : null;
        this.MaxSplitPartitions = 'MaxSplitPartitions' in params ? params.MaxSplitPartitions : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * DeleteDataTransform返回参数结构体
 * @class
 */
class DeleteDataTransformResponse extends  AbstractModel {
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
 * DeleteConfigExtra返回参数结构体
 * @class
 */
class DeleteConfigExtraResponse extends  AbstractModel {
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
 * ModifyConsumer请求参数结构体
 * @class
 */
class ModifyConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递任务绑定的日志主题 ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 投递任务是否生效，默认不生效
         * @type {boolean || null}
         */
        this.Effective = null;

        /**
         * 是否投递日志的元数据信息，默认为 false
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * 如果需要投递元数据信息，元数据信息的描述
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * CKafka的描述
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Effective = 'Effective' in params ? params.Effective : null;
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }

    }
}

/**
 * CreateIndex返回参数结构体
 * @class
 */
class CreateIndexResponse extends  AbstractModel {
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
 * DeleteConfigFromMachineGroup返回参数结构体
 * @class
 */
class DeleteConfigFromMachineGroupResponse extends  AbstractModel {
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
 * CreateConsumer返回参数结构体
 * @class
 */
class CreateConsumerResponse extends  AbstractModel {
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
 * ModifyMachineGroup返回参数结构体
 * @class
 */
class ModifyMachineGroupResponse extends  AbstractModel {
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
 * 数据加工的资源信息
 * @class
 */
class DataTransformResouceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标主题id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 别名
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * DeleteMachineGroup请求参数结构体
 * @class
 */
class DeleteMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器组ID
         * @type {string || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 全文索引配置
 * @class
 */
class FullTextInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否大小写敏感
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * 全文索引的分词符，其中的每个字符代表一个分词符；
仅支持英文符号及\n\t\r；
推荐使用 @&?|#()='",;:<>[]{}/ \n\t\r\ 作为分词符；
         * @type {string || null}
         */
        this.Tokenizer = null;

        /**
         * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ContainZH = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;
        this.Tokenizer = 'Tokenizer' in params ? params.Tokenizer : null;
        this.ContainZH = 'ContainZH' in params ? params.ContainZH : null;

    }
}

/**
 * DescribePartitions返回参数结构体
 * @class
 */
class DescribePartitionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区列表
         * @type {Array.<PartitionInfo> || null}
         */
        this.Partitions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new PartitionInfo();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigMachineGroups返回参数结构体
 * @class
 */
class DescribeConfigMachineGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集规则配置绑定的机器组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineGroupInfo> || null}
         */
        this.MachineGroups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MachineGroups) {
            this.MachineGroups = new Array();
            for (let z in params.MachineGroups) {
                let obj = new MachineGroupInfo();
                obj.deserialize(params.MachineGroups[z]);
                this.MachineGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAlarm请求参数结构体
 * @class
 */
class ModifyAlarmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略ID。
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * 告警策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 监控任务运行时间点。
         * @type {MonitorTime || null}
         */
        this.MonitorTime = null;

        /**
         * 触发条件。
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * 告警重复的周期。单位是分钟。取值范围是0~1440。
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * 关联的告警通知模板列表。
         * @type {Array.<string> || null}
         */
        this.AlarmNoticeIds = null;

        /**
         * 监控对象列表。
         * @type {Array.<AlarmTarget> || null}
         */
        this.AlarmTargets = null;

        /**
         * 是否开启告警策略。
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 用户自定义告警内容
         * @type {string || null}
         */
        this.MessageTemplate = null;

        /**
         * 用户自定义回调
         * @type {CallBackInfo || null}
         */
        this.CallBack = null;

        /**
         * 多维分析
         * @type {Array.<AnalysisDimensional> || null}
         */
        this.Analysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.MonitorTime) {
            let obj = new MonitorTime();
            obj.deserialize(params.MonitorTime)
            this.MonitorTime = obj;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;
        this.AlarmNoticeIds = 'AlarmNoticeIds' in params ? params.AlarmNoticeIds : null;

        if (params.AlarmTargets) {
            this.AlarmTargets = new Array();
            for (let z in params.AlarmTargets) {
                let obj = new AlarmTarget();
                obj.deserialize(params.AlarmTargets[z]);
                this.AlarmTargets.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.MessageTemplate = 'MessageTemplate' in params ? params.MessageTemplate : null;

        if (params.CallBack) {
            let obj = new CallBackInfo();
            obj.deserialize(params.CallBack)
            this.CallBack = obj;
        }

        if (params.Analysis) {
            this.Analysis = new Array();
            for (let z in params.Analysis) {
                let obj = new AnalysisDimensional();
                obj.deserialize(params.Analysis[z]);
                this.Analysis.push(obj);
            }
        }

    }
}

/**
 * DescribeTopics返回参数结构体
 * @class
 */
class DescribeTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题列表
         * @type {Array.<TopicInfo> || null}
         */
        this.Topics = null;

        /**
         * 总数目
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

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new TopicInfo();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LogItem的数组
 * @class
 */
class LogItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分析结果返回的KV数据对
         * @type {Array.<LogItem> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new LogItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * ModifyAlarmNotice请求参数结构体
 * @class
 */
class ModifyAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知渠道组ID。
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * 通知渠道组名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 通知类型。可选值：
<li> Trigger - 告警触发
<li> Recovery - 告警恢复
<li> All - 告警触发和告警恢复
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 通知接收对象。
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * 接口回调信息（包括企业微信）。
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }

    }
}

/**
 * 键值索引配置
 * @class
 */
class RuleKeyValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否大小写敏感
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * 需要建立索引的键值对信息；最大只能配置100个键值对
         * @type {Array.<KeyValueInfo> || null}
         */
        this.KeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;

        if (params.KeyValues) {
            this.KeyValues = new Array();
            for (let z in params.KeyValues) {
                let obj = new KeyValueInfo();
                obj.deserialize(params.KeyValues[z]);
                this.KeyValues.push(obj);
            }
        }

    }
}

/**
 * CreateAlarm请求参数结构体
 * @class
 */
class CreateAlarmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 监控对象列表。
         * @type {Array.<AlarmTarget> || null}
         */
        this.AlarmTargets = null;

        /**
         * 监控任务运行时间点。
         * @type {MonitorTime || null}
         */
        this.MonitorTime = null;

        /**
         * 触发条件。
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * 告警重复的周期。单位是分钟。取值范围是0~1440。
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * 关联的告警通知模板列表。
         * @type {Array.<string> || null}
         */
        this.AlarmNoticeIds = null;

        /**
         * 是否开启告警策略。默认值为true
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 用户自定义告警内容
         * @type {string || null}
         */
        this.MessageTemplate = null;

        /**
         * 用户自定义回调
         * @type {CallBackInfo || null}
         */
        this.CallBack = null;

        /**
         * 多维分析
         * @type {Array.<AnalysisDimensional> || null}
         */
        this.Analysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AlarmTargets) {
            this.AlarmTargets = new Array();
            for (let z in params.AlarmTargets) {
                let obj = new AlarmTarget();
                obj.deserialize(params.AlarmTargets[z]);
                this.AlarmTargets.push(obj);
            }
        }

        if (params.MonitorTime) {
            let obj = new MonitorTime();
            obj.deserialize(params.MonitorTime)
            this.MonitorTime = obj;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;
        this.AlarmNoticeIds = 'AlarmNoticeIds' in params ? params.AlarmNoticeIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MessageTemplate = 'MessageTemplate' in params ? params.MessageTemplate : null;

        if (params.CallBack) {
            let obj = new CallBackInfo();
            obj.deserialize(params.CallBack)
            this.CallBack = obj;
        }

        if (params.Analysis) {
            this.Analysis = new Array();
            for (let z in params.Analysis) {
                let obj = new AnalysisDimensional();
                obj.deserialize(params.Analysis[z]);
                this.Analysis.push(obj);
            }
        }

    }
}

/**
 * DeleteExport返回参数结构体
 * @class
 */
class DeleteExportResponse extends  AbstractModel {
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
 * 日志主题分区信息
 * @class
 */
class PartitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区ID
         * @type {number || null}
         */
        this.PartitionId = null;

        /**
         * 分区的状态（readwrite或者是readonly）
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 分区哈希键起始key
         * @type {string || null}
         */
        this.InclusiveBeginKey = null;

        /**
         * 分区哈希键结束key
         * @type {string || null}
         */
        this.ExclusiveEndKey = null;

        /**
         * 分区创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 只读分区数据停止写入时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastWriteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InclusiveBeginKey = 'InclusiveBeginKey' in params ? params.InclusiveBeginKey : null;
        this.ExclusiveEndKey = 'ExclusiveEndKey' in params ? params.ExclusiveEndKey : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastWriteTime = 'LastWriteTime' in params ? params.LastWriteTime : null;

    }
}

/**
 * DescribeShippers请求参数结构体
 * @class
 */
class DescribeShippersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> shipperName

按照【投递规则名称】进行过滤。
类型：String

必选：否

<br><li> shipperId

按照【投递规则ID】进行过滤。
类型：String

必选：否

<br><li> topicId

按照【日志主题】进行过滤。

类型：String

必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页的偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页的限制数目，默认值为20，最大值100
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 黑名单path信息
 * @class
 */
class ExcludePathInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型，选填File或Path
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Type对应的具体内容
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
 * 投递日志的过滤规则
 * @class
 */
class FilterRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤规则Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 过滤规则
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * 过滤规则Value
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
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 特殊采集规则配置信息
 * @class
 */
class ConfigExtraInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集规则扩展配置ID
         * @type {string || null}
         */
        this.ConfigExtraId = null;

        /**
         * 采集规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 类型：container_stdout、container_file、host_file
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 节点文件配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HostFileInfo || null}
         */
        this.HostFile = null;

        /**
         * 容器文件路径信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ContainerFileInfo || null}
         */
        this.ContainerFile = null;

        /**
         * 容器标准输出信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ContainerStdoutInfo || null}
         */
        this.ContainerStdout = null;

        /**
         * 日志格式化方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogFormat = null;

        /**
         * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 提取规则，如果设置了ExtractRule，则必须设置LogType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * 采集黑名单路径列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

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
         * 用户自定义解析字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserDefineRule = null;

        /**
         * 机器组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 自建采集配置标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigFlag = null;

        /**
         * 日志集ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志集name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 日志主题name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigExtraId = 'ConfigExtraId' in params ? params.ConfigExtraId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.HostFile) {
            let obj = new HostFileInfo();
            obj.deserialize(params.HostFile)
            this.HostFile = obj;
        }

        if (params.ContainerFile) {
            let obj = new ContainerFileInfo();
            obj.deserialize(params.ContainerFile)
            this.ContainerFile = obj;
        }

        if (params.ContainerStdout) {
            let obj = new ContainerStdoutInfo();
            obj.deserialize(params.ContainerStdout)
            this.ContainerStdout = obj;
        }
        this.LogFormat = 'LogFormat' in params ? params.LogFormat : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ConfigFlag = 'ConfigFlag' in params ? params.ConfigFlag : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * RetryShipperTask返回参数结构体
 * @class
 */
class RetryShipperTaskResponse extends  AbstractModel {
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
 * SplitPartition请求参数结构体
 * @class
 */
class SplitPartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 待分裂分区ID
         * @type {number || null}
         */
        this.PartitionId = null;

        /**
         * 分区切分的哈希key的位置，只在Number=2时有意义
         * @type {string || null}
         */
        this.SplitKey = null;

        /**
         * 分区分裂个数(可选)，默认等于2
         * @type {number || null}
         */
        this.Number = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;
        this.SplitKey = 'SplitKey' in params ? params.SplitKey : null;
        this.Number = 'Number' in params ? params.Number : null;

    }
}

/**
 * DescribeMachineGroupConfigs返回参数结构体
 * @class
 */
class DescribeMachineGroupConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集规则配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConfigInfo> || null}
         */
        this.Configs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new ConfigInfo();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 机器组信息
 * @class
 */
class MachineGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 机器组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 机器组类型
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 机器组绑定的标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否开启机器组自动更新
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AutoUpdate = null;

        /**
         * 升级开始时间，建议业务低峰期升级LogListener
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * 升级结束时间，建议业务低峰期升级LogListener
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

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

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;

    }
}

/**
 * DescribeLogHistogram返回参数结构体
 * @class
 */
class DescribeLogHistogramResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计周期： 单位ms
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 命中关键字的日志总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 周期内统计结果详情
         * @type {Array.<HistogramInfo> || null}
         */
        this.HistogramInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.HistogramInfos) {
            this.HistogramInfos = new Array();
            for (let z in params.HistogramInfos) {
                let obj = new HistogramInfo();
                obj.deserialize(params.HistogramInfos[z]);
                this.HistogramInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseKafkaConsumer返回参数结构体
 * @class
 */
class CloseKafkaConsumerResponse extends  AbstractModel {
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
 * 元字段索引配置
 * @class
 */
class RuleTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否大小写敏感
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * 元字段索引配置中的字段信息
         * @type {Array.<KeyValueInfo> || null}
         */
        this.KeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;

        if (params.KeyValues) {
            this.KeyValues = new Array();
            for (let z in params.KeyValues) {
                let obj = new KeyValueInfo();
                obj.deserialize(params.KeyValues[z]);
                this.KeyValues.push(obj);
            }
        }

    }
}

/**
 * CreateIndex请求参数结构体
 * @class
 */
class CreateIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 索引规则
         * @type {RuleInfo || null}
         */
        this.Rule = null;

        /**
         * 是否生效，默认为true
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 全文索引系统预置字段标记，默认false。  false:不包含系统预置字段， true:包含系统预置字段
         * @type {boolean || null}
         */
        this.IncludeInternalFields = null;

        /**
         * 元数据相关标志位，默认为0。 0：全文索引包括开启键值索引的元数据字段， 1：全文索引包括所有元数据字段，2：全文索引不包括元数据字段。
         * @type {number || null}
         */
        this.MetadataFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

        if (params.Rule) {
            let obj = new RuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.IncludeInternalFields = 'IncludeInternalFields' in params ? params.IncludeInternalFields : null;
        this.MetadataFlag = 'MetadataFlag' in params ? params.MetadataFlag : null;

    }
}

/**
 * DeleteConsumer返回参数结构体
 * @class
 */
class DeleteConsumerResponse extends  AbstractModel {
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
 * DescribeTopics请求参数结构体
 * @class
 */
class DescribeTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> topicName按照【日志主题名称】进行过滤。类型：String必选：否<br><li> logsetName按照【日志集名称】进行过滤。类型：String必选：否<br><li> topicId按照【日志主题ID】进行过滤。类型：String必选：否<br><li> logsetId按照【日志集ID】进行过滤，可通过调用DescribeLogsets查询已创建的日志集列表或登录控制台进行查看；也可以调用CreateLogset创建新的日志集。类型：String必选：否<br><li> tagKey按照【标签键】进行过滤。类型：String必选：否<br><li> tag:tagKey按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换，例如tag:exampleKey。类型：String必选：否<br><li> storageType按照【日志主题的存储类型】进行过滤。可选值 hot（标准存储），cold（低频存储）类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为100。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页限制数目，默认值为20，最大值100。
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * GetAlarmLog返回参数结构体
 * @class
 */
class GetAlarmLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加载后续内容的Context
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志查询结果是否全部返回
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * 返回的是否为分析结果
         * @type {boolean || null}
         */
        this.Analysis = null;

        /**
         * 如果Analysis为True，则返回分析结果的列名，否则为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColNames = null;

        /**
         * 日志查询结果；当Analysis为True时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogInfo> || null}
         */
        this.Results = null;

        /**
         * 日志分析结果；当Analysis为False时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogItems> || null}
         */
        this.AnalysisResults = null;

        /**
         * 新的日志分析结果; UseNewAnalysis为true有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AnalysisRecords = null;

        /**
         * 日志分析的列属性; UseNewAnalysis为true有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Column> || null}
         */
        this.Columns = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.Analysis = 'Analysis' in params ? params.Analysis : null;
        this.ColNames = 'ColNames' in params ? params.ColNames : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new LogInfo();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }

        if (params.AnalysisResults) {
            this.AnalysisResults = new Array();
            for (let z in params.AnalysisResults) {
                let obj = new LogItems();
                obj.deserialize(params.AnalysisResults[z]);
                this.AnalysisResults.push(obj);
            }
        }
        this.AnalysisRecords = 'AnalysisRecords' in params ? params.AnalysisRecords : null;

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new Column();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTopic请求参数结构体
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 日志主题分区个数。默认创建1个，最大支持创建10个分区。
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * 标签描述列表，通过指定该参数可以同时绑定标签到相应的日志主题。最大支持10个标签键值对，同一个资源只能绑定到同一个标签键下。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否开启自动分裂，默认值为true
         * @type {boolean || null}
         */
        this.AutoSplit = null;

        /**
         * 开启自动分裂后，每个主题能够允许的最大分区数，默认值为50
         * @type {number || null}
         */
        this.MaxSplitPartitions = null;

        /**
         * 日志主题的存储类型，可选值 hot（标准存储），cold（低频存储）；默认为hot。
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 生命周期，单位天，可取值范围1~3600。取值为3640时代表永久保存
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoSplit = 'AutoSplit' in params ? params.AutoSplit : null;
        this.MaxSplitPartitions = 'MaxSplitPartitions' in params ? params.MaxSplitPartitions : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * DescribeMachineGroups请求参数结构体
 * @class
 */
class DescribeMachineGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> machineGroupName

按照【机器组名称】进行过滤。
类型：String

必选：否

<br><li> machineGroupId

按照【机器组ID】进行过滤。
类型：String

必选：否

<br><li> tagKey

按照【标签键】进行过滤。

类型：String

必选：否

<br><li> tag:tagKey

按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换。
类型：String

必选：否


每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页的偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页的限制数目，默认值为20，最大值100
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 告警对象
 * @class
 */
class AlarmTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 查询语句。
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 告警对象序号；从1开始递增。
         * @type {number || null}
         */
        this.Number = null;

        /**
         * 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 日志集ID。
         * @type {string || null}
         */
        this.LogsetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * OpenKafkaConsumer请求参数结构体
 * @class
 */
class OpenKafkaConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLS控制台创建的TopicId
         * @type {string || null}
         */
        this.FromTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromTopicId = 'FromTopicId' in params ? params.FromTopicId : null;

    }
}

/**
 * DeleteConfig返回参数结构体
 * @class
 */
class DeleteConfigResponse extends  AbstractModel {
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
 * ModifyIndex返回参数结构体
 * @class
 */
class ModifyIndexResponse extends  AbstractModel {
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
 * DeleteConsumer请求参数结构体
 * @class
 */
class DeleteConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递任务绑定的日志主题 ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DeleteIndex请求参数结构体
 * @class
 */
class DeleteIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeConsumer返回参数结构体
 * @class
 */
class DescribeConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递任务是否生效
         * @type {boolean || null}
         */
        this.Effective = null;

        /**
         * 是否投递日志的元数据信息
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * 如果需要投递元数据信息，元数据信息的描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * CKafka的描述
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Effective = 'Effective' in params ? params.Effective : null;
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadLog请求参数结构体
 * @class
 */
class UploadLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 根据 hashkey 写入相应范围的主题分区
         * @type {string || null}
         */
        this.HashKey = null;

        /**
         * 压缩方法
         * @type {string || null}
         */
        this.CompressType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.HashKey = 'HashKey' in params ? params.HashKey : null;
        this.CompressType = 'CompressType' in params ? params.CompressType : null;

    }
}

/**
 * ModifyConsumer返回参数结构体
 * @class
 */
class ModifyConsumerResponse extends  AbstractModel {
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
 * DescribeConfigs请求参数结构体
 * @class
 */
class DescribeConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> configName

按照【采集配置名称】进行模糊匹配过滤。
类型：String

必选：否

<br><li> configId

按照【采集配置ID】进行过滤。
类型：String

必选：否

<br><li> topicId

按照【日志主题】进行过滤。

类型：String

必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页的偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页的限制数目，默认值为20，最大值100
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 日志集相关信息
 * @class
 */
class LogsetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志集名称
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 日志集绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 日志集下日志主题的数目
         * @type {number || null}
         */
        this.TopicCount = null;

        /**
         * 若AssumerUin非空，则表示创建该日志集的服务方角色
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TopicCount = 'TopicCount' in params ? params.TopicCount : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * DescribeConsumer请求参数结构体
 * @class
 */
class DescribeConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递任务绑定的日志主题 ID
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DeleteConfig请求参数结构体
 * @class
 */
class DeleteConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集规则配置ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * 多维分析的分析维度
 * @class
 */
class AnalysisDimensional extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分析名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分析类型：query，field
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 分析内容
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * 投递任务信息
 * @class
 */
class ShipperTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 投递信息ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 本批投递的日志的开始时间戳，毫秒
         * @type {number || null}
         */
        this.RangeStart = null;

        /**
         * 本批投递的日志的结束时间戳， 毫秒
         * @type {number || null}
         */
        this.RangeEnd = null;

        /**
         * 本次投递任务的开始时间戳， 毫秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 本次投递任务的结束时间戳， 毫秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 本次投递的结果，"success","running","failed"
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 结果的详细信息
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RangeStart = 'RangeStart' in params ? params.RangeStart : null;
        this.RangeEnd = 'RangeEnd' in params ? params.RangeEnd : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * CloseKafkaConsumer请求参数结构体
 * @class
 */
class CloseKafkaConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLS对应的topic标识
         * @type {string || null}
         */
        this.FromTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromTopicId = 'FromTopicId' in params ? params.FromTopicId : null;

    }
}

/**
 * CreateExport请求参数结构体
 * @class
 */
class CreateExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志导出数量,  最大值5000万
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 日志导出检索语句，不支持<a href="https://cloud.tencent.com/document/product/614/44061" target="_blank">[SQL语句]</a>
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 日志导出起始时间，毫秒时间戳
         * @type {number || null}
         */
        this.From = null;

        /**
         * 日志导出结束时间，毫秒时间戳
         * @type {number || null}
         */
        this.To = null;

        /**
         * 日志导出时间排序。desc，asc，默认为desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 日志导出数据格式。json，csv，默认为json
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * DescribeAlarmNotices返回参数结构体
 * @class
 */
class DescribeAlarmNoticesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知模板列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlarmNotice> || null}
         */
        this.AlarmNotices = null;

        /**
         * 符合条件的告警通知模板总数。
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

        if (params.AlarmNotices) {
            this.AlarmNotices = new Array();
            for (let z in params.AlarmNotices) {
                let obj = new AlarmNotice();
                obj.deserialize(params.AlarmNotices[z]);
                this.AlarmNotices.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDataTransform请求参数结构体
 * @class
 */
class DeleteDataTransformRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据加工任务id
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DeleteConfigExtra请求参数结构体
 * @class
 */
class DeleteConfigExtraRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集规则扩展配置ID
         * @type {string || null}
         */
        this.ConfigExtraId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigExtraId = 'ConfigExtraId' in params ? params.ConfigExtraId : null;

    }
}

/**
 * ModifyConfig请求参数结构体
 * @class
 */
class ModifyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集规则配置ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 采集规则配置名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 日志采集路径，包含文件名
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 提取规则，如果设置了ExtractRule，则必须设置LogType
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * 采集黑名单路径列表
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * 采集配置关联的日志主题（TopicId）
         * @type {string || null}
         */
        this.Output = null;

        /**
         * 用户自定义解析字符串，Json格式序列化的字符串
         * @type {string || null}
         */
        this.UserDefineRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.Output = 'Output' in params ? params.Output : null;
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;

    }
}

/**
 * DescribeLogsets返回参数结构体
 * @class
 */
class DescribeLogsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页的总数目
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 日志集列表
         * @type {Array.<LogsetInfo> || null}
         */
        this.Logsets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Logsets) {
            this.Logsets = new Array();
            for (let z in params.Logsets) {
                let obj = new LogsetInfo();
                obj.deserialize(params.Logsets[z]);
                this.Logsets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * JSON类型描述
 * @class
 */
class JsonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用标志
         * @type {boolean || null}
         */
        this.EnableTag = null;

        /**
         * 元数据信息列表, 可选值为 __SOURCE__、__FILENAME__、__TIMESTAMP__。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MetaFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableTag = 'EnableTag' in params ? params.EnableTag : null;
        this.MetaFields = 'MetaFields' in params ? params.MetaFields : null;

    }
}

/**
 * CreateShipper请求参数结构体
 * @class
 */
class CreateShipperRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的投递规则所属的日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 创建的投递规则投递的bucket
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 创建的投递规则投递目录的前缀
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * 投递规则的名字
         * @type {string || null}
         */
        this.ShipperName = null;

        /**
         * 投递的时间间隔，单位 秒，默认300，范围 300-900
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 投递的文件的最大值，单位 MB，默认256，范围 100-256
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 投递日志的过滤规则，匹配的日志进行投递，各rule之间是and关系，最多5个，数组为空则表示不过滤而全部投递
         * @type {Array.<FilterRuleInfo> || null}
         */
        this.FilterRules = null;

        /**
         * 投递日志的分区规则，支持strftime的时间格式表示
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * 投递日志的压缩配置
         * @type {CompressInfo || null}
         */
        this.Compress = null;

        /**
         * 投递日志的内容格式配置
         * @type {ContentInfo || null}
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.ShipperName = 'ShipperName' in params ? params.ShipperName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new FilterRuleInfo();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Compress) {
            let obj = new CompressInfo();
            obj.deserialize(params.Compress)
            this.Compress = obj;
        }

        if (params.Content) {
            let obj = new ContentInfo();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

    }
}

/**
 * CreateTopic返回参数结构体
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAlarm返回参数结构体
 * @class
 */
class DeleteAlarmResponse extends  AbstractModel {
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
 * 回调地址
 * @class
 */
class WebCallback extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回调地址。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 回调的类型。可选值：
<li> WeCom
<li> Http
         * @type {string || null}
         */
        this.CallbackType = null;

        /**
         * 回调方法。可选值：
<li> POST
<li> PUT
默认值为POST。CallbackType为Http时为必选。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 请求头。
注意：该参数已废弃，请在<a href="https://cloud.tencent.com/document/product/614/56466">创建告警策略</a>接口CallBack参数中指定请求头。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Headers = null;

        /**
         * 请求内容。
注意：该参数已废弃，请在<a href="https://cloud.tencent.com/document/product/614/56466">创建告警策略</a>接口CallBack参数中指定请求内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Body = null;

        /**
         * 序号
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.CallbackType = 'CallbackType' in params ? params.CallbackType : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Headers = 'Headers' in params ? params.Headers : null;
        this.Body = 'Body' in params ? params.Body : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * DescribeAlarms返回参数结构体
 * @class
 */
class DescribeAlarmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略列表。
         * @type {Array.<AlarmInfo> || null}
         */
        this.Alarms = null;

        /**
         * 符合查询条件的告警策略数目。
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

        if (params.Alarms) {
            this.Alarms = new Array();
            for (let z in params.Alarms) {
                let obj = new AlarmInfo();
                obj.deserialize(params.Alarms[z]);
                this.Alarms.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAlarmNotice返回参数结构体
 * @class
 */
class CreateAlarmNoticeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警模板ID
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTopic返回参数结构体
 * @class
 */
class ModifyTopicResponse extends  AbstractModel {
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
 * CreateConfig请求参数结构体
 * @class
 */
class CreateConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集配置名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 采集配置所属日志主题ID即TopicId
         * @type {string || null}
         */
        this.Output = null;

        /**
         * 日志采集路径,包含文件名
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 提取规则，如果设置了ExtractRule，则必须设置LogType
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * 采集黑名单路径列表
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * 用户自定义采集规则，Json格式序列化的字符串
         * @type {string || null}
         */
        this.UserDefineRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Output = 'Output' in params ? params.Output : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;

    }
}

/**
 * CreateShipper返回参数结构体
 * @class
 */
class CreateShipperResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递规则ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIndex返回参数结构体
 * @class
 */
class DeleteIndexResponse extends  AbstractModel {
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
 * ModifyIndex请求参数结构体
 * @class
 */
class ModifyIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 默认不生效
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 索引规则
         * @type {RuleInfo || null}
         */
        this.Rule = null;

        /**
         * 全文索引系统预置字段标记，默认false。  false:不包含系统预置字段， true:包含系统预置字段
         * @type {boolean || null}
         */
        this.IncludeInternalFields = null;

        /**
         * 元数据相关标志位，默认为0。 0：全文索引包括开启键值索引的元数据字段， 1：全文索引包括所有元数据字段，2：全文索引不包括元数据字段。
         * @type {number || null}
         */
        this.MetadataFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rule) {
            let obj = new RuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.IncludeInternalFields = 'IncludeInternalFields' in params ? params.IncludeInternalFields : null;
        this.MetadataFlag = 'MetadataFlag' in params ? params.MetadataFlag : null;

    }
}

/**
 * 日志分析的列属性
 * @class
 */
class Column extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列的名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 列的属性
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 投递日志的压缩配置
 * @class
 */
class CompressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 压缩格式，支持gzip、lzop和none不压缩
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * 需要开启键值索引的字段的索引描述信息
 * @class
 */
class ValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段类型，目前支持的类型有：long、text、double
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 字段的分词符，其中的每个字符代表一个分词符；
仅支持英文符号及\n\t\r；
long及double类型字段需为空；
text类型字段推荐使用 @&?|#()='",;:<>[]{}/ \n\t\r\\ 作为分词符；
         * @type {string || null}
         */
        this.Tokenizer = null;

        /**
         * 字段是否开启分析功能
         * @type {boolean || null}
         */
        this.SqlFlag = null;

        /**
         * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ContainZH = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Tokenizer = 'Tokenizer' in params ? params.Tokenizer : null;
        this.SqlFlag = 'SqlFlag' in params ? params.SqlFlag : null;
        this.ContainZH = 'ContainZH' in params ? params.ContainZH : null;

    }
}

/**
 * DescribeDataTransformInfo请求参数结构体
 * @class
 */
class DescribeDataTransformInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> taskName

按照【加工任务名称】进行过滤。
类型：String

必选：否

<br><li> taskId

按照【加工任务id】进行过滤。
类型：String

必选：否

每次请求的Filters的上限为10，Filter.Values的上限为100。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页限制数目，默认值为20，最大值100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 默认值为2.   1: 获取单个任务的详细信息 2：获取任务列表
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Type为1， 此参数必填
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DeleteShipper返回参数结构体
 * @class
 */
class DeleteShipperResponse extends  AbstractModel {
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
 * 日志导出信息
 * @class
 */
class ExportInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志导出任务ID
         * @type {string || null}
         */
        this.ExportId = null;

        /**
         * 日志导出查询语句
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 日志导出文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 日志文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 日志导出时间排序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 日志导出格式
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 日志导出数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 日志导出起始时间
         * @type {number || null}
         */
        this.From = null;

        /**
         * 日志导出结束时间
         * @type {number || null}
         */
        this.To = null;

        /**
         * 日志导出路径
         * @type {string || null}
         */
        this.CosPath = null;

        /**
         * 日志导出创建时间
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ExportId = 'ExportId' in params ? params.ExportId : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.CosPath = 'CosPath' in params ? params.CosPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeLogContext返回参数结构体
 * @class
 */
class DescribeLogContextResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志上下文信息集合
         * @type {Array.<LogContextInfo> || null}
         */
        this.LogContextInfos = null;

        /**
         * 上文日志是否已经返回
         * @type {boolean || null}
         */
        this.PrevOver = null;

        /**
         * 下文日志是否已经返回
         * @type {boolean || null}
         */
        this.NextOver = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LogContextInfos) {
            this.LogContextInfos = new Array();
            for (let z in params.LogContextInfos) {
                let obj = new LogContextInfo();
                obj.deserialize(params.LogContextInfos[z]);
                this.LogContextInfos.push(obj);
            }
        }
        this.PrevOver = 'PrevOver' in params ? params.PrevOver : null;
        this.NextOver = 'NextOver' in params ? params.NextOver : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 采集规则配置信息
 * @class
 */
class ConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集规则配置ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 日志格式化方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogFormat = null;

        /**
         * 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 提取规则，如果设置了ExtractRule，则必须设置LogType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * 采集黑名单路径列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * 采集配置所属日志主题ID即TopicId
         * @type {string || null}
         */
        this.Output = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 用户自定义解析字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserDefineRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.LogFormat = 'LogFormat' in params ? params.LogFormat : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.Output = 'Output' in params ? params.Output : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;

    }
}

/**
 * DeleteExport请求参数结构体
 * @class
 */
class DeleteExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出ID
         * @type {string || null}
         */
        this.ExportId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportId = 'ExportId' in params ? params.ExportId : null;

    }
}

/**
 * SplitPartition返回参数结构体
 * @class
 */
class SplitPartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分裂结果集
         * @type {Array.<PartitionInfo> || null}
         */
        this.Partitions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new PartitionInfo();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDataTransform返回参数结构体
 * @class
 */
class CreateDataTransformResponse extends  AbstractModel {
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
 * 日志上下文信息
 * @class
 */
class LogContextInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志来源设备
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 采集路径
         * @type {string || null}
         */
        this.Filename = null;

        /**
         * 日志内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 日志包序号
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 日志包内一条日志的序号
         * @type {number || null}
         */
        this.PkgLogId = null;

        /**
         * 日志时间戳
         * @type {number || null}
         */
        this.BTime = null;

        /**
         * 日志来源主机名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Filename = 'Filename' in params ? params.Filename : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.BTime = 'BTime' in params ? params.BTime : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * ModifyShipper请求参数结构体
 * @class
 */
class ModifyShipperRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递规则ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * 投递规则投递的新的bucket
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 投递规则投递的新的目录前缀
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * 投递规则的开关状态
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 投递规则的名字
         * @type {string || null}
         */
        this.ShipperName = null;

        /**
         * 投递的时间间隔，单位 秒，默认300，范围 300-900
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 投递的文件的最大值，单位 MB，默认256，范围 100-256
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 投递日志的过滤规则，匹配的日志进行投递，各rule之间是and关系，最多5个，数组为空则表示不过滤而全部投递
         * @type {Array.<FilterRuleInfo> || null}
         */
        this.FilterRules = null;

        /**
         * 投递日志的分区规则，支持strftime的时间格式表示
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * 投递日志的压缩配置
         * @type {CompressInfo || null}
         */
        this.Compress = null;

        /**
         * 投递日志的内容格式配置
         * @type {ContentInfo || null}
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
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ShipperName = 'ShipperName' in params ? params.ShipperName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new FilterRuleInfo();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Compress) {
            let obj = new CompressInfo();
            obj.deserialize(params.Compress)
            this.Compress = obj;
        }

        if (params.Content) {
            let obj = new ContentInfo();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

    }
}

/**
 * 索引规则，FullText、KeyValue、Tag参数必须输入一个有效参数
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全文索引配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FullTextInfo || null}
         */
        this.FullText = null;

        /**
         * 键值索引配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleKeyValueInfo || null}
         */
        this.KeyValue = null;

        /**
         * 元字段索引配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleTagInfo || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FullText) {
            let obj = new FullTextInfo();
            obj.deserialize(params.FullText)
            this.FullText = obj;
        }

        if (params.KeyValue) {
            let obj = new RuleKeyValueInfo();
            obj.deserialize(params.KeyValue)
            this.KeyValue = obj;
        }

        if (params.Tag) {
            let obj = new RuleTagInfo();
            obj.deserialize(params.Tag)
            this.Tag = obj;
        }

    }
}

/**
 * CreateConfigExtra请求参数结构体
 * @class
 */
class CreateConfigExtraRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集配置规程名称，最长63个字符，只能包含小写字符、数字及分隔符（“-”），且必须以小写字符开头，数字或小写字符结尾
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 日志主题id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 类型：container_stdout、container_file、host_file
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 采集配置标
         * @type {string || null}
         */
        this.ConfigFlag = null;

        /**
         * 日志集id
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志集name
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 日志主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 节点文件配置信息
         * @type {HostFileInfo || null}
         */
        this.HostFile = null;

        /**
         * 容器文件路径信息
         * @type {ContainerFileInfo || null}
         */
        this.ContainerFile = null;

        /**
         * 容器标准输出信息
         * @type {ContainerStdoutInfo || null}
         */
        this.ContainerStdout = null;

        /**
         * 日志格式化方式
         * @type {string || null}
         */
        this.LogFormat = null;

        /**
         * 提取规则，如果设置了ExtractRule，则必须设置LogType
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * 采集黑名单路径列表
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * 用户自定义采集规则，Json格式序列化的字符串
         * @type {string || null}
         */
        this.UserDefineRule = null;

        /**
         * 绑定的机器组id
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 绑定的机器组id列表
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.ConfigFlag = 'ConfigFlag' in params ? params.ConfigFlag : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

        if (params.HostFile) {
            let obj = new HostFileInfo();
            obj.deserialize(params.HostFile)
            this.HostFile = obj;
        }

        if (params.ContainerFile) {
            let obj = new ContainerFileInfo();
            obj.deserialize(params.ContainerFile)
            this.ContainerFile = obj;
        }

        if (params.ContainerStdout) {
            let obj = new ContainerStdoutInfo();
            obj.deserialize(params.ContainerStdout)
            this.ContainerStdout = obj;
        }
        this.LogFormat = 'LogFormat' in params ? params.LogFormat : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;

    }
}

/**
 * CreateConsumer请求参数结构体
 * @class
 */
class CreateConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递任务绑定的日志主题 ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 是否投递日志的元数据信息，默认为 true
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * 如果需要投递元数据信息，元数据信息的描述
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * CKafka的描述
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }

    }
}

/**
 * 告警通知模板类型
 * @class
 */
class AlarmNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 告警模板的类型。可选值：
<br><li> Trigger - 告警触发
<br><li> Recovery - 告警恢复
<br><li> All - 告警触发和告警恢复
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 告警通知模板接收者信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * 告警通知模板回调信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

        /**
         * 告警通知模板ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近更新时间。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyConfig返回参数结构体
 * @class
 */
class ModifyConfigResponse extends  AbstractModel {
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
 * ModifyAlarmNotice返回参数结构体
 * @class
 */
class ModifyAlarmNoticeResponse extends  AbstractModel {
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
 * 数据加工任务基本详情
 * @class
 */
class DataTransformTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据加工任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据加工任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务启用状态，默认为1，正常开启,  2关闭
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * 加工任务类型，1： DSL， 2：SQL
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 源日志主题
         * @type {string || null}
         */
        this.SrcTopicId = null;

        /**
         * 当前加工任务状态（1准备中/2运行中/3停止中/4已停止）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 加工任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 最后启用时间，如果需要重建集群，修改该时间
         * @type {string || null}
         */
        this.LastEnableTime = null;

        /**
         * 日志主题名称
         * @type {string || null}
         */
        this.SrcTopicName = null;

        /**
         * 日志集id
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 加工任务目的topic_id以及别名
         * @type {Array.<DataTransformResouceInfo> || null}
         */
        this.DstResources = null;

        /**
         * 加工逻辑函数
         * @type {string || null}
         */
        this.EtlContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SrcTopicId = 'SrcTopicId' in params ? params.SrcTopicId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.LastEnableTime = 'LastEnableTime' in params ? params.LastEnableTime : null;
        this.SrcTopicName = 'SrcTopicName' in params ? params.SrcTopicName : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

        if (params.DstResources) {
            this.DstResources = new Array();
            for (let z in params.DstResources) {
                let obj = new DataTransformResouceInfo();
                obj.deserialize(params.DstResources[z]);
                this.DstResources.push(obj);
            }
        }
        this.EtlContent = 'EtlContent' in params ? params.EtlContent : null;

    }
}

/**
 * DescribeMachines返回参数结构体
 * @class
 */
class DescribeMachinesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器状态信息组
         * @type {Array.<MachineInfo> || null}
         */
        this.Machines = null;

        /**
         * 机器组是否开启自动升级功能
         * @type {number || null}
         */
        this.AutoUpdate = null;

        /**
         * 机器组自动升级功能预设开始时间
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * 机器组自动升级功能预设结束时间
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * 当前用户可用最新的Loglistener版本
         * @type {string || null}
         */
        this.LatestAgentVersion = null;

        /**
         * 是否开启服务日志
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new MachineInfo();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.LatestAgentVersion = 'LatestAgentVersion' in params ? params.LatestAgentVersion : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 预览数据详情
 * @class
 */
class PreviewLogStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志内容
         * @type {string || null}
         */
        this.LogContent = null;

        /**
         * 行号
         * @type {number || null}
         */
        this.LineNum = null;

        /**
         * 目标日志主题
         * @type {string || null}
         */
        this.DstTopicId = null;

        /**
         * 失败错误码， 空字符串""表示正常
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 日志时间戳
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 目标topic-name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DstTopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogContent = 'LogContent' in params ? params.LogContent : null;
        this.LineNum = 'LineNum' in params ? params.LineNum : null;
        this.DstTopicId = 'DstTopicId' in params ? params.DstTopicId : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.DstTopicName = 'DstTopicName' in params ? params.DstTopicName : null;

    }
}

/**
 * 投递日志的内容格式配置
 * @class
 */
class ContentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容格式，支持json、csv
         * @type {string || null}
         */
        this.Format = null;

        /**
         * csv格式内容描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CsvInfo || null}
         */
        this.Csv = null;

        /**
         * json格式内容描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {JsonInfo || null}
         */
        this.Json = null;

        /**
         * parquet格式内容描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ParquetInfo || null}
         */
        this.Parquet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

        if (params.Csv) {
            let obj = new CsvInfo();
            obj.deserialize(params.Csv)
            this.Csv = obj;
        }

        if (params.Json) {
            let obj = new JsonInfo();
            obj.deserialize(params.Json)
            this.Json = obj;
        }

        if (params.Parquet) {
            let obj = new ParquetInfo();
            obj.deserialize(params.Parquet)
            this.Parquet = obj;
        }

    }
}

/**
 * ApplyConfigToMachineGroup返回参数结构体
 * @class
 */
class ApplyConfigToMachineGroupResponse extends  AbstractModel {
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
 * DeleteAlarm请求参数结构体
 * @class
 */
class DeleteAlarmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略ID。
         * @type {string || null}
         */
        this.AlarmId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;

    }
}

/**
 * CreateConfig返回参数结构体
 * @class
 */
class CreateConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集配置ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 机器组类型描述
 * @class
 */
class MachineGroupTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器组类型，ip表示该机器组Values中存的是采集机器的IP地址，label表示该机器组Values中存储的是机器的标签
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 机器描述列表
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DeleteConfigFromMachineGroup请求参数结构体
 * @class
 */
class DeleteConfigFromMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 采集配置ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * 投递规则
 * @class
 */
class ShipperInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 投递规则ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 投递的bucket地址
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 投递的前缀目录
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * 投递规则的名字
         * @type {string || null}
         */
        this.ShipperName = null;

        /**
         * 投递的时间间隔，单位 秒
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 投递的文件的最大值，单位 MB
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 是否生效
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 投递日志的过滤规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FilterRuleInfo> || null}
         */
        this.FilterRules = null;

        /**
         * 投递日志的分区规则，支持strftime的时间格式表示
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * 投递日志的压缩配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompressInfo || null}
         */
        this.Compress = null;

        /**
         * 投递日志的内容格式配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ContentInfo || null}
         */
        this.Content = null;

        /**
         * 投递日志的创建时间
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
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.ShipperName = 'ShipperName' in params ? params.ShipperName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new FilterRuleInfo();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Compress) {
            let obj = new CompressInfo();
            obj.deserialize(params.Compress)
            this.Compress = obj;
        }

        if (params.Content) {
            let obj = new ContentInfo();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 键值或者元字段索引的字段信息
 * @class
 */
class KeyValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要配置键值或者元字段索引的字段，元字段Key无需额外添加`__TAG__.`前缀，与上传日志时对应的字段Key一致即可，腾讯云控制台展示时将自动添加`__TAG__.`前缀
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 字段的索引描述信息
         * @type {ValueInfo || null}
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

        if (params.Value) {
            let obj = new ValueInfo();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * ModifyMachineGroup请求参数结构体
 * @class
 */
class ModifyMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 机器组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 机器组类型
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否开启机器组自动更新
         * @type {boolean || null}
         */
        this.AutoUpdate = null;

        /**
         * 升级开始时间，建议业务低峰期升级LogListener
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * 升级结束时间，建议业务低峰期升级LogListener
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

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

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;

    }
}

/**
 * DescribeAlarmNotices请求参数结构体
 * @class
 */
class DescribeAlarmNoticesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <li> name
按照【通知渠道组名称】进行过滤。
类型：String
必选：否
<li> alarmNoticeId
按照【通知渠道组ID】进行过滤。
类型：String
必选：否
<li> uid
按照【接收用户ID】进行过滤。
类型：String
必选：否
<li> groupId
按照【接收用户组ID】进行过滤。
类型：String
必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页限制数目，默认值为20，最大值100。
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 告警通知接收者信息
 * @class
 */
class NoticeReceiver extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接受者类型。可选值：
<br><li> Uin - 用户ID
<br><li> Group - 用户组ID
暂不支持其余接收者类型。
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * 接收者。
         * @type {Array.<number> || null}
         */
        this.ReceiverIds = null;

        /**
         * 通知接收渠道。
<br><li> Email - 邮件
<br><li> Sms - 短信
<br><li> WeChat - 微信
<br><li> Phone - 电话
         * @type {Array.<string> || null}
         */
        this.ReceiverChannels = null;

        /**
         * 允许接收信息的开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 允许接收信息的结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 位序
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.ReceiverIds = 'ReceiverIds' in params ? params.ReceiverIds : null;
        this.ReceiverChannels = 'ReceiverChannels' in params ? params.ReceiverChannels : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * CKafka的描述-需要投递到的kafka信息
 * @class
 */
class Ckafka extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ckafka 的 Vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Ckafka 的 Vport
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * Ckafka 的 InstanceId
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Ckafka 的 InstanceName
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Ckafka 的 TopicId
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Ckafka 的 TopicName
         * @type {string || null}
         */
        this.TopicName = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeMachines请求参数结构体
 * @class
 */
class DescribeMachinesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的机器组ID
         * @type {string || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DeleteAlarmNotice请求参数结构体
 * @class
 */
class DeleteAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知渠道组ID
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;

    }
}

/**
 * DeleteLogset请求参数结构体
 * @class
 */
class DeleteLogsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * 机器状态信息
 * @class
 */
class MachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 机器状态，0:异常，1:正常
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 机器离线时间，空为正常，异常返回具体时间
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * 机器是否开启自动升级。0:关闭，1:开启
         * @type {number || null}
         */
        this.AutoUpdate = null;

        /**
         * 机器当前版本号。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 机器升级功能状态。
         * @type {number || null}
         */
        this.UpdateStatus = null;

        /**
         * 机器升级结果标识。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 机器升级结果信息。
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.UpdateStatus = 'UpdateStatus' in params ? params.UpdateStatus : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * ModifyLogset返回参数结构体
 * @class
 */
class ModifyLogsetResponse extends  AbstractModel {
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
 * 告警策略中监控任务的执行时间点
 * @class
 */
class MonitorTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可选值：
<br><li> Period - 周期执行
<br><li> Fixed - 定期执行
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 执行的周期，或者定制执行的时间节点。单位为分钟，取值范围为1~1440。
         * @type {number || null}
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * SearchLog请求参数结构体
 * @class
 */
class SearchLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要检索分析的日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 要检索分析的日志的起始时间，Unix时间戳（毫秒）
         * @type {number || null}
         */
        this.From = null;

        /**
         * 要检索分析的日志的结束时间，Unix时间戳（毫秒）
         * @type {number || null}
         */
        this.To = null;

        /**
         * 检索分析语句，最大长度为12KB
语句由 <a href="https://cloud.tencent.com/document/product/614/47044" target="_blank">[检索条件]</a> | <a href="https://cloud.tencent.com/document/product/614/44061" target="_blank">[SQL语句]</a>构成，无需对日志进行统计分析时，可省略其中的管道符<code> | </code>及SQL语句
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 表示单次查询返回的原始日志条数，最大值为1000，获取后续日志需使用Context参数
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* SQL结果条数指定方式参考<a href="https://cloud.tencent.com/document/product/614/58977" target="_blank">SQL LIMIT语法</a>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* SQL获取后续结果参考<a href="https://cloud.tencent.com/document/product/614/58977" target="_blank">SQL LIMIT语法</a>
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* SQL结果排序方式参考<a href="https://cloud.tencent.com/document/product/614/58978" target="_blank">SQL ORDER BY语法</a>
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 为true代表使用新的检索结果返回方式，输出参数AnalysisRecords和Columns有效
为false时代表使用老的检索结果返回方式, 输出AnalysisResults和ColNames有效
两种返回方式在编码格式上有少量区别，建议使用true
         * @type {boolean || null}
         */
        this.UseNewAnalysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.UseNewAnalysis = 'UseNewAnalysis' in params ? params.UseNewAnalysis : null;

    }
}

/**
 * CreateMachineGroup请求参数结构体
 * @class
 */
class CreateMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器组名字，不能重复
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 创建机器组类型，Type为ip，Values中为Ip字符串列表创建机器组，Type为label， Values中为标签字符串列表创建机器组
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

        /**
         * 标签描述列表，通过指定该参数可以同时绑定标签到相应的机器组。最大支持10个标签键值对，同一个资源只能绑定到同一个标签键下。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否开启机器组自动更新
         * @type {boolean || null}
         */
        this.AutoUpdate = null;

        /**
         * 升级开始时间，建议业务低峰期升级LogListener
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * 升级结束时间，建议业务低峰期升级LogListener
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;

    }
}

/**
 * DescribeExports返回参数结构体
 * @class
 */
class DescribeExportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出列表
         * @type {Array.<ExportInfo> || null}
         */
        this.Exports = null;

        /**
         * 总数目
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

        if (params.Exports) {
            this.Exports = new Array();
            for (let z in params.Exports) {
                let obj = new ExportInfo();
                obj.deserialize(params.Exports[z]);
                this.Exports.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyConfigToMachineGroup请求参数结构体
 * @class
 */
class ApplyConfigToMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集配置ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 机器组ID
         * @type {string || null}
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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * GetAlarmLog请求参数结构体
 * @class
 */
class GetAlarmLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的日志的起始时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.From = null;

        /**
         * 要查询的日志的结束时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.To = null;

        /**
         * 查询语句，语句长度最大为1024
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 单次查询返回的日志条数，最大值为1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 为true代表使用新检索,响应参数AnalysisRecords和Columns有效， 为false时代表使用老检索方式, AnalysisResults和ColNames有效
         * @type {boolean || null}
         */
        this.UseNewAnalysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.UseNewAnalysis = 'UseNewAnalysis' in params ? params.UseNewAnalysis : null;

    }
}

/**
 * 自建k8s-容器文件路径信息
 * @class
 */
class ContainerFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * namespace可以多个，用分隔号分割,例如A,B
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 容器名称
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 日志文件夹
         * @type {string || null}
         */
        this.LogPath = null;

        /**
         * 日志名称
         * @type {string || null}
         */
        this.FilePattern = null;

        /**
         * pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.IncludeLabels = null;

        /**
         * 工作负载信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ContainerWorkLoadInfo || null}
         */
        this.WorkLoad = null;

        /**
         * 需要排除的namespace可以多个，用分隔号分割,例如A,B
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExcludeNamespace = null;

        /**
         * 需要排除的pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ExcludeLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;
        this.FilePattern = 'FilePattern' in params ? params.FilePattern : null;
        this.IncludeLabels = 'IncludeLabels' in params ? params.IncludeLabels : null;

        if (params.WorkLoad) {
            let obj = new ContainerWorkLoadInfo();
            obj.deserialize(params.WorkLoad)
            this.WorkLoad = obj;
        }
        this.ExcludeNamespace = 'ExcludeNamespace' in params ? params.ExcludeNamespace : null;
        this.ExcludeLabels = 'ExcludeLabels' in params ? params.ExcludeLabels : null;

    }
}

/**
 * csv内容描述
 * @class
 */
class CsvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * csv首行是否打印key
         * @type {boolean || null}
         */
        this.PrintKey = null;

        /**
         * 每列key的名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Keys = null;

        /**
         * 各字段间的分隔符
         * @type {string || null}
         */
        this.Delimiter = null;

        /**
         * 若字段内容中包含分隔符，则使用该转义符包裹改字段，只能填写单引号、双引号、空字符串
         * @type {string || null}
         */
        this.EscapeChar = null;

        /**
         * 对于上面指定的不存在字段使用该内容填充
         * @type {string || null}
         */
        this.NonExistingField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrintKey = 'PrintKey' in params ? params.PrintKey : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Delimiter = 'Delimiter' in params ? params.Delimiter : null;
        this.EscapeChar = 'EscapeChar' in params ? params.EscapeChar : null;
        this.NonExistingField = 'NonExistingField' in params ? params.NonExistingField : null;

    }
}

/**
 * DescribeConfigExtras请求参数结构体
 * @class
 */
class DescribeConfigExtrasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的key： topicId,name, configExtraId, machineGroupId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页的偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页的限制数目，默认值为20，最大值100
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateAlarmNotice请求参数结构体
 * @class
 */
class CreateAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知渠道组名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 通知类型。可选值：
<li> Trigger - 告警触发
<li> Recovery - 告警恢复
<li> All - 告警触发和告警恢复
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 通知接收对象。
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * 接口回调信息（包括企业微信）。
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

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

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }

    }
}

/**
 * DescribeIndex返回参数结构体
 * @class
 */
class DescribeIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 是否生效
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 索引配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleInfo || null}
         */
        this.Rule = null;

        /**
         * 索引修改时间，初始值为索引创建时间。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 全文索引系统预置字段标记，默认false。  false:不包含系统预置字段， true:包含系统预置字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IncludeInternalFields = null;

        /**
         * 元数据相关标志位，默认为0。 0：全文索引包括开启键值索引的元数据字段， 1：全文索引包括所有元数据字段，2：全文索引不包括元数据字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MetadataFlag = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rule) {
            let obj = new RuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.IncludeInternalFields = 'IncludeInternalFields' in params ? params.IncludeInternalFields : null;
        this.MetadataFlag = 'MetadataFlag' in params ? params.MetadataFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 直方图详细信息
 * @class
 */
class HistogramInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计周期内的日志条数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 按 period 取整后的 unix timestamp： 单位毫秒
         * @type {number || null}
         */
        this.BTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.BTime = 'BTime' in params ? params.BTime : null;

    }
}

/**
 * DescribeMachineGroupConfigs请求参数结构体
 * @class
 */
class DescribeMachineGroupConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器组ID
         * @type {string || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * ModifyConfigExtra请求参数结构体
 * @class
 */
class ModifyConfigExtraRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采集配置扩展信息id
         * @type {string || null}
         */
        this.ConfigExtraId = null;

        /**
         * 采集配置规程名称，最长63个字符，只能包含小写字符、数字及分隔符（“-”），且必须以小写字符开头，数字或小写字符结尾
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 日志主题id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 节点文件配置信息
         * @type {HostFileInfo || null}
         */
        this.HostFile = null;

        /**
         * 容器文件路径信息
         * @type {ContainerFileInfo || null}
         */
        this.ContainerFile = null;

        /**
         * 容器标准输出信息
         * @type {ContainerStdoutInfo || null}
         */
        this.ContainerStdout = null;

        /**
         * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 日志格式化方式
         * @type {string || null}
         */
        this.LogFormat = null;

        /**
         * 提取规则，如果设置了ExtractRule，则必须设置LogType
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * 采集黑名单路径列表
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * 用户自定义采集规则，Json格式序列化的字符串
         * @type {string || null}
         */
        this.UserDefineRule = null;

        /**
         * 类型：container_stdout、container_file、host_file
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 机器组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 自建采集配置标
         * @type {string || null}
         */
        this.ConfigFlag = null;

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志集name
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 日志主题name
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigExtraId = 'ConfigExtraId' in params ? params.ConfigExtraId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

        if (params.HostFile) {
            let obj = new HostFileInfo();
            obj.deserialize(params.HostFile)
            this.HostFile = obj;
        }

        if (params.ContainerFile) {
            let obj = new ContainerFileInfo();
            obj.deserialize(params.ContainerFile)
            this.ContainerFile = obj;
        }

        if (params.ContainerStdout) {
            let obj = new ContainerStdoutInfo();
            obj.deserialize(params.ContainerStdout)
            this.ContainerStdout = obj;
        }
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.LogFormat = 'LogFormat' in params ? params.LogFormat : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ConfigFlag = 'ConfigFlag' in params ? params.ConfigFlag : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * CreateDataTransform请求参数结构体
 * @class
 */
class CreateDataTransformRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数类型. DSL:1 SQL:2
         * @type {number || null}
         */
        this.FuncType = null;

        /**
         * 源日志主题
         * @type {string || null}
         */
        this.SrcTopicId = null;

        /**
         * 加工任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 加工逻辑函数
         * @type {string || null}
         */
        this.EtlContent = null;

        /**
         * 加工任务目的topic_id以及别名
         * @type {Array.<DataTransformResouceInfo> || null}
         */
        this.DstResources = null;

        /**
         * 任务类型.  以SrcTopicId为数据源建立预览任务:1，以PreviewLogStatistics为数据源建立预览任务:2  真实任务:3
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 任务启动状态.   默认为1，正常开启,  2关闭
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * 测试数据
         * @type {Array.<PreviewLogStatistic> || null}
         */
        this.PreviewLogStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FuncType = 'FuncType' in params ? params.FuncType : null;
        this.SrcTopicId = 'SrcTopicId' in params ? params.SrcTopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EtlContent = 'EtlContent' in params ? params.EtlContent : null;

        if (params.DstResources) {
            this.DstResources = new Array();
            for (let z in params.DstResources) {
                let obj = new DataTransformResouceInfo();
                obj.deserialize(params.DstResources[z]);
                this.DstResources.push(obj);
            }
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;

        if (params.PreviewLogStatistics) {
            this.PreviewLogStatistics = new Array();
            for (let z in params.PreviewLogStatistics) {
                let obj = new PreviewLogStatistic();
                obj.deserialize(params.PreviewLogStatistics[z]);
                this.PreviewLogStatistics.push(obj);
            }
        }

    }
}

/**
 * DescribeMachineGroups返回参数结构体
 * @class
 */
class DescribeMachineGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器组信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MachineGroupInfo> || null}
         */
        this.MachineGroups = null;

        /**
         * 分页的总数目
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

        if (params.MachineGroups) {
            this.MachineGroups = new Array();
            for (let z in params.MachineGroups) {
                let obj = new MachineGroupInfo();
                obj.deserialize(params.MachineGroups[z]);
                this.MachineGroups.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogsets请求参数结构体
 * @class
 */
class DescribeLogsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <br><li> logsetName

按照【日志集名称】进行过滤。
类型：String

必选：否

<br><li> logsetId

按照【日志集ID】进行过滤。
类型：String

必选：否

<br><li> tagKey

按照【标签键】进行过滤。

类型：String

必选：否

<br><li> tag:tagKey

按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换。
类型：String

必选：否


每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页的偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页的限制数目，默认值为20，最大值100
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Parquet内容
 * @class
 */
class ParquetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ParquetKeyInfo数组
         * @type {Array.<ParquetKeyInfo> || null}
         */
        this.ParquetKeyInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ParquetKeyInfo) {
            this.ParquetKeyInfo = new Array();
            for (let z in params.ParquetKeyInfo) {
                let obj = new ParquetKeyInfo();
                obj.deserialize(params.ParquetKeyInfo[z]);
                this.ParquetKeyInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteTopic返回参数结构体
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
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
 * 过滤器
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 需要过滤的值。
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * ModifyDataTransform返回参数结构体
 * @class
 */
class ModifyDataTransformResponse extends  AbstractModel {
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
 * DescribeDataTransformInfo返回参数结构体
 * @class
 */
class DescribeDataTransformInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据加工任务列表信息
         * @type {Array.<DataTransformTaskInfo> || null}
         */
        this.DataTransformTaskInfos = null;

        /**
         * 任务总次数
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

        if (params.DataTransformTaskInfos) {
            this.DataTransformTaskInfos = new Array();
            for (let z in params.DataTransformTaskInfos) {
                let obj = new DataTransformTaskInfo();
                obj.deserialize(params.DataTransformTaskInfos[z]);
                this.DataTransformTaskInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 投递任务出入参 Content
 * @class
 */
class ConsumerContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否投递 TAG 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableTag = null;

        /**
         * 需要投递的元数据列表，目前仅支持：__SOURCE__，__FILENAME__和__TIMESTAMP__
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MetaFields = null;

        /**
         * 当EnableTag为true时，必须填写TagJsonNotTiled字段，TagJsonNotTiled用于标识tag信息是否json平铺，TagJsonNotTiled为true时不平铺，false时平铺
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.TagJsonNotTiled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableTag = 'EnableTag' in params ? params.EnableTag : null;
        this.MetaFields = 'MetaFields' in params ? params.MetaFields : null;
        this.TagJsonNotTiled = 'TagJsonNotTiled' in params ? params.TagJsonNotTiled : null;

    }
}

/**
 * CreateExport返回参数结构体
 * @class
 */
class CreateExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出ID。
         * @type {string || null}
         */
        this.ExportId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportId = 'ExportId' in params ? params.ExportId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 自建k8s-节点文件配置信息
 * @class
 */
class HostFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志文件夹
         * @type {string || null}
         */
        this.LogPath = null;

        /**
         * 日志文件名
         * @type {string || null}
         */
        this.FilePattern = null;

        /**
         * metadata信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.CustomLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogPath = 'LogPath' in params ? params.LogPath : null;
        this.FilePattern = 'FilePattern' in params ? params.FilePattern : null;
        this.CustomLabels = 'CustomLabels' in params ? params.CustomLabels : null;

    }
}

/**
 * 需要过滤日志的key，及其对应的regex
 * @class
 */
class KeyRegexInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤日志的key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * key对应的过滤规则regex
         * @type {string || null}
         */
        this.Regex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Regex = 'Regex' in params ? params.Regex : null;

    }
}

/**
 * MergePartition返回参数结构体
 * @class
 */
class MergePartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合并结果集
         * @type {Array.<PartitionInfo> || null}
         */
        this.Partitions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new PartitionInfo();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    UploadLogResponse: UploadLogResponse,
    CreateAlarmResponse: CreateAlarmResponse,
    AlarmInfo: AlarmInfo,
    LogInfo: LogInfo,
    DeleteAlarmNoticeResponse: DeleteAlarmNoticeResponse,
    DescribeLogHistogramRequest: DescribeLogHistogramRequest,
    DescribeLogContextRequest: DescribeLogContextRequest,
    DeleteShipperRequest: DeleteShipperRequest,
    ModifyTopicRequest: ModifyTopicRequest,
    DeleteLogsetResponse: DeleteLogsetResponse,
    ParquetKeyInfo: ParquetKeyInfo,
    DescribeShipperTasksResponse: DescribeShipperTasksResponse,
    CreateMachineGroupResponse: CreateMachineGroupResponse,
    DescribeConfigMachineGroupsRequest: DescribeConfigMachineGroupsRequest,
    ModifyConfigExtraResponse: ModifyConfigExtraResponse,
    ModifyLogsetRequest: ModifyLogsetRequest,
    CreateLogsetRequest: CreateLogsetRequest,
    ModifyDataTransformRequest: ModifyDataTransformRequest,
    LogItem: LogItem,
    SearchLogResponse: SearchLogResponse,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribePartitionsRequest: DescribePartitionsRequest,
    ContainerStdoutInfo: ContainerStdoutInfo,
    ModifyAlarmResponse: ModifyAlarmResponse,
    DescribeShipperTasksRequest: DescribeShipperTasksRequest,
    DescribeAlarmsRequest: DescribeAlarmsRequest,
    MergePartitionRequest: MergePartitionRequest,
    DescribeShippersResponse: DescribeShippersResponse,
    CreateConfigExtraResponse: CreateConfigExtraResponse,
    ModifyShipperResponse: ModifyShipperResponse,
    RetryShipperTaskRequest: RetryShipperTaskRequest,
    ContainerWorkLoadInfo: ContainerWorkLoadInfo,
    DescribeConfigExtrasResponse: DescribeConfigExtrasResponse,
    CallBackInfo: CallBackInfo,
    OpenKafkaConsumerResponse: OpenKafkaConsumerResponse,
    AlarmTargetInfo: AlarmTargetInfo,
    DescribeIndexRequest: DescribeIndexRequest,
    DescribeConfigsResponse: DescribeConfigsResponse,
    CreateLogsetResponse: CreateLogsetResponse,
    DeleteMachineGroupResponse: DeleteMachineGroupResponse,
    Tag: Tag,
    DescribeExportsRequest: DescribeExportsRequest,
    ExtractRuleInfo: ExtractRuleInfo,
    TopicInfo: TopicInfo,
    DeleteDataTransformResponse: DeleteDataTransformResponse,
    DeleteConfigExtraResponse: DeleteConfigExtraResponse,
    ModifyConsumerRequest: ModifyConsumerRequest,
    CreateIndexResponse: CreateIndexResponse,
    DeleteConfigFromMachineGroupResponse: DeleteConfigFromMachineGroupResponse,
    CreateConsumerResponse: CreateConsumerResponse,
    ModifyMachineGroupResponse: ModifyMachineGroupResponse,
    DataTransformResouceInfo: DataTransformResouceInfo,
    DeleteMachineGroupRequest: DeleteMachineGroupRequest,
    FullTextInfo: FullTextInfo,
    DescribePartitionsResponse: DescribePartitionsResponse,
    DescribeConfigMachineGroupsResponse: DescribeConfigMachineGroupsResponse,
    ModifyAlarmRequest: ModifyAlarmRequest,
    DescribeTopicsResponse: DescribeTopicsResponse,
    LogItems: LogItems,
    ModifyAlarmNoticeRequest: ModifyAlarmNoticeRequest,
    RuleKeyValueInfo: RuleKeyValueInfo,
    CreateAlarmRequest: CreateAlarmRequest,
    DeleteExportResponse: DeleteExportResponse,
    PartitionInfo: PartitionInfo,
    DescribeShippersRequest: DescribeShippersRequest,
    ExcludePathInfo: ExcludePathInfo,
    FilterRuleInfo: FilterRuleInfo,
    ConfigExtraInfo: ConfigExtraInfo,
    RetryShipperTaskResponse: RetryShipperTaskResponse,
    SplitPartitionRequest: SplitPartitionRequest,
    DescribeMachineGroupConfigsResponse: DescribeMachineGroupConfigsResponse,
    MachineGroupInfo: MachineGroupInfo,
    DescribeLogHistogramResponse: DescribeLogHistogramResponse,
    CloseKafkaConsumerResponse: CloseKafkaConsumerResponse,
    RuleTagInfo: RuleTagInfo,
    CreateIndexRequest: CreateIndexRequest,
    DeleteConsumerResponse: DeleteConsumerResponse,
    DescribeTopicsRequest: DescribeTopicsRequest,
    GetAlarmLogResponse: GetAlarmLogResponse,
    CreateTopicRequest: CreateTopicRequest,
    DescribeMachineGroupsRequest: DescribeMachineGroupsRequest,
    AlarmTarget: AlarmTarget,
    OpenKafkaConsumerRequest: OpenKafkaConsumerRequest,
    DeleteConfigResponse: DeleteConfigResponse,
    ModifyIndexResponse: ModifyIndexResponse,
    DeleteConsumerRequest: DeleteConsumerRequest,
    DeleteIndexRequest: DeleteIndexRequest,
    DescribeConsumerResponse: DescribeConsumerResponse,
    UploadLogRequest: UploadLogRequest,
    ModifyConsumerResponse: ModifyConsumerResponse,
    DescribeConfigsRequest: DescribeConfigsRequest,
    LogsetInfo: LogsetInfo,
    DescribeConsumerRequest: DescribeConsumerRequest,
    DeleteConfigRequest: DeleteConfigRequest,
    AnalysisDimensional: AnalysisDimensional,
    ShipperTaskInfo: ShipperTaskInfo,
    CloseKafkaConsumerRequest: CloseKafkaConsumerRequest,
    CreateExportRequest: CreateExportRequest,
    DescribeAlarmNoticesResponse: DescribeAlarmNoticesResponse,
    DeleteDataTransformRequest: DeleteDataTransformRequest,
    DeleteConfigExtraRequest: DeleteConfigExtraRequest,
    ModifyConfigRequest: ModifyConfigRequest,
    DescribeLogsetsResponse: DescribeLogsetsResponse,
    JsonInfo: JsonInfo,
    CreateShipperRequest: CreateShipperRequest,
    CreateTopicResponse: CreateTopicResponse,
    DeleteAlarmResponse: DeleteAlarmResponse,
    WebCallback: WebCallback,
    DescribeAlarmsResponse: DescribeAlarmsResponse,
    CreateAlarmNoticeResponse: CreateAlarmNoticeResponse,
    ModifyTopicResponse: ModifyTopicResponse,
    CreateConfigRequest: CreateConfigRequest,
    CreateShipperResponse: CreateShipperResponse,
    DeleteIndexResponse: DeleteIndexResponse,
    ModifyIndexRequest: ModifyIndexRequest,
    Column: Column,
    CompressInfo: CompressInfo,
    ValueInfo: ValueInfo,
    DescribeDataTransformInfoRequest: DescribeDataTransformInfoRequest,
    DeleteShipperResponse: DeleteShipperResponse,
    ExportInfo: ExportInfo,
    DescribeLogContextResponse: DescribeLogContextResponse,
    ConfigInfo: ConfigInfo,
    DeleteExportRequest: DeleteExportRequest,
    SplitPartitionResponse: SplitPartitionResponse,
    CreateDataTransformResponse: CreateDataTransformResponse,
    LogContextInfo: LogContextInfo,
    ModifyShipperRequest: ModifyShipperRequest,
    RuleInfo: RuleInfo,
    CreateConfigExtraRequest: CreateConfigExtraRequest,
    CreateConsumerRequest: CreateConsumerRequest,
    AlarmNotice: AlarmNotice,
    ModifyConfigResponse: ModifyConfigResponse,
    ModifyAlarmNoticeResponse: ModifyAlarmNoticeResponse,
    DataTransformTaskInfo: DataTransformTaskInfo,
    DescribeMachinesResponse: DescribeMachinesResponse,
    PreviewLogStatistic: PreviewLogStatistic,
    ContentInfo: ContentInfo,
    ApplyConfigToMachineGroupResponse: ApplyConfigToMachineGroupResponse,
    DeleteAlarmRequest: DeleteAlarmRequest,
    CreateConfigResponse: CreateConfigResponse,
    MachineGroupTypeInfo: MachineGroupTypeInfo,
    DeleteConfigFromMachineGroupRequest: DeleteConfigFromMachineGroupRequest,
    ShipperInfo: ShipperInfo,
    KeyValueInfo: KeyValueInfo,
    ModifyMachineGroupRequest: ModifyMachineGroupRequest,
    DescribeAlarmNoticesRequest: DescribeAlarmNoticesRequest,
    NoticeReceiver: NoticeReceiver,
    Ckafka: Ckafka,
    DescribeMachinesRequest: DescribeMachinesRequest,
    DeleteAlarmNoticeRequest: DeleteAlarmNoticeRequest,
    DeleteLogsetRequest: DeleteLogsetRequest,
    MachineInfo: MachineInfo,
    ModifyLogsetResponse: ModifyLogsetResponse,
    MonitorTime: MonitorTime,
    SearchLogRequest: SearchLogRequest,
    CreateMachineGroupRequest: CreateMachineGroupRequest,
    DescribeExportsResponse: DescribeExportsResponse,
    ApplyConfigToMachineGroupRequest: ApplyConfigToMachineGroupRequest,
    GetAlarmLogRequest: GetAlarmLogRequest,
    ContainerFileInfo: ContainerFileInfo,
    CsvInfo: CsvInfo,
    DescribeConfigExtrasRequest: DescribeConfigExtrasRequest,
    CreateAlarmNoticeRequest: CreateAlarmNoticeRequest,
    DescribeIndexResponse: DescribeIndexResponse,
    HistogramInfo: HistogramInfo,
    DescribeMachineGroupConfigsRequest: DescribeMachineGroupConfigsRequest,
    ModifyConfigExtraRequest: ModifyConfigExtraRequest,
    CreateDataTransformRequest: CreateDataTransformRequest,
    DescribeMachineGroupsResponse: DescribeMachineGroupsResponse,
    DescribeLogsetsRequest: DescribeLogsetsRequest,
    ParquetInfo: ParquetInfo,
    DeleteTopicResponse: DeleteTopicResponse,
    Filter: Filter,
    ModifyDataTransformResponse: ModifyDataTransformResponse,
    DescribeDataTransformInfoResponse: DescribeDataTransformInfoResponse,
    ConsumerContent: ConsumerContent,
    CreateExportResponse: CreateExportResponse,
    HostFileInfo: HostFileInfo,
    KeyRegexInfo: KeyRegexInfo,
    MergePartitionResponse: MergePartitionResponse,

}
