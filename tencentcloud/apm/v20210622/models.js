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
 * apm实例信息
 * @class
 */
class ApmInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储使用量(MB)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AmountOfUsedStorage = null;

        /**
         * 实例名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实例所属tag列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApmTag> || null}
         */
        this.Tags = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 创建人Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateUin = null;

        /**
         * 该实例已上报的服务端应用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ServiceCount = null;

        /**
         * 日均上报Span数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CountOfReportSpanPerDay = null;

        /**
         * AppId信息
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Trace数据保存时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TraceDuration = null;

        /**
         * 实例描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例所属地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例上报额度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SpanDailyCounters = null;

        /**
         * 实例是否开通计费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BillingInstance = null;

        /**
         * 错误率阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrRateThreshold = null;

        /**
         * 采样率阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * 是否开启错误采样 0  关 1 开
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrorSample = null;

        /**
         * 慢调用保存阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SlowRequestSavedThreshold = null;

        /**
         * cls日志所在地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogRegion = null;

        /**
         * 日志来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogSource = null;

        /**
         * 日志功能开关 0 关 | 1 开
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsRelatedLog = null;

        /**
         * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogTopicID = null;

        /**
         * 该实例已上报的客户端应用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClientCount = null;

        /**
         * 该实例已上报的总应用数量
注意：此字段可能返回 null，表示取不到有效值。
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
        this.AmountOfUsedStorage = 'AmountOfUsedStorage' in params ? params.AmountOfUsedStorage : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.ServiceCount = 'ServiceCount' in params ? params.ServiceCount : null;
        this.CountOfReportSpanPerDay = 'CountOfReportSpanPerDay' in params ? params.CountOfReportSpanPerDay : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.TraceDuration = 'TraceDuration' in params ? params.TraceDuration : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SpanDailyCounters = 'SpanDailyCounters' in params ? params.SpanDailyCounters : null;
        this.BillingInstance = 'BillingInstance' in params ? params.BillingInstance : null;
        this.ErrRateThreshold = 'ErrRateThreshold' in params ? params.ErrRateThreshold : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.ErrorSample = 'ErrorSample' in params ? params.ErrorSample : null;
        this.SlowRequestSavedThreshold = 'SlowRequestSavedThreshold' in params ? params.SlowRequestSavedThreshold : null;
        this.LogRegion = 'LogRegion' in params ? params.LogRegion : null;
        this.LogSource = 'LogSource' in params ? params.LogSource : null;
        this.IsRelatedLog = 'IsRelatedLog' in params ? params.IsRelatedLog : null;
        this.LogTopicID = 'LogTopicID' in params ? params.LogTopicID : null;
        this.ClientCount = 'ClientCount' in params ? params.ClientCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * CreateApmInstance请求参数结构体
 * @class
 */
class CreateApmInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实例描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Trace数据保存时长
         * @type {number || null}
         */
        this.TraceDuration = null;

        /**
         * 标签列表
         * @type {Array.<ApmTag> || null}
         */
        this.Tags = null;

        /**
         * 实例上报额度值
         * @type {number || null}
         */
        this.SpanDailyCounters = null;

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
        this.TraceDuration = 'TraceDuration' in params ? params.TraceDuration : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SpanDailyCounters = 'SpanDailyCounters' in params ? params.SpanDailyCounters : null;

    }
}

/**
 * DescribeServiceOverview返回参数结构体
 * @class
 */
class DescribeServiceOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标结果集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApmMetricRecord> || null}
         */
        this.Records = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new ApmMetricRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询
 * @class
 */
class QueryMetricItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 同比，已弃用，不建议使用
         * @type {string || null}
         */
        this.Compare = null;

        /**
         * 同比，支持多种同比方式
         * @type {Array.<string> || null}
         */
        this.Compares = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Compare = 'Compare' in params ? params.Compare : null;
        this.Compares = 'Compares' in params ? params.Compares : null;

    }
}

/**
 * DescribeApmInstances返回参数结构体
 * @class
 */
class DescribeApmInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * apm实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApmInstanceDetail> || null}
         */
        this.Instances = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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
                let obj = new ApmInstanceDetail();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * apm Agent信息
 * @class
 */
class ApmAgentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentDownloadURL = null;

        /**
         * Collector上报地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CollectorURL = null;

        /**
         * Token信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 外网上报地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicCollectorURL = null;

        /**
         * 自研VPC上报地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InnerCollectorURL = null;

        /**
         * 内网上报地址(Private Link上报地址)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateLinkCollectorURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentDownloadURL = 'AgentDownloadURL' in params ? params.AgentDownloadURL : null;
        this.CollectorURL = 'CollectorURL' in params ? params.CollectorURL : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.PublicCollectorURL = 'PublicCollectorURL' in params ? params.PublicCollectorURL : null;
        this.InnerCollectorURL = 'InnerCollectorURL' in params ? params.InnerCollectorURL : null;
        this.PrivateLinkCollectorURL = 'PrivateLinkCollectorURL' in params ? params.PrivateLinkCollectorURL : null;

    }
}

/**
 * 指标列表单元
 * @class
 */
class ApmMetricRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * field数组
         * @type {Array.<ApmField> || null}
         */
        this.Fields = null;

        /**
         * tag数组
         * @type {Array.<ApmTag> || null}
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

        if (params.Fields) {
            this.Fields = new Array();
            for (let z in params.Fields) {
                let obj = new ApmField();
                obj.deserialize(params.Fields[z]);
                this.Fields.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeServiceOverview请求参数结构体
 * @class
 */
class DescribeServiceOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 指标列表
         * @type {Array.<QueryMetricItem> || null}
         */
        this.Metrics = null;

        /**
         * 聚合维度
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * 排序
         * @type {OrderBy || null}
         */
        this.OrderBy = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 分页起始点
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 结束时间
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new QueryMetricItem();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;

        if (params.OrderBy) {
            let obj = new OrderBy();
            obj.deserialize(params.OrderBy)
            this.OrderBy = obj;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeApmAgent返回参数结构体
 * @class
 */
class DescribeApmAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApmAgentInfo || null}
         */
        this.ApmAgent = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ApmAgent) {
            let obj = new ApmAgentInfo();
            obj.deserialize(params.ApmAgent)
            this.ApmAgent = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 指标维度信息
 * @class
 */
class ApmField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 昨日同比指标值，已弃用，不建议使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompareVal = null;

        /**
         * Compare值结果数组，推荐使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<APMKVItem> || null}
         */
        this.CompareVals = null;

        /**
         * 指标值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 指标所对应的单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 请求数
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 同环比上周期具体数值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<APMKV> || null}
         */
        this.LastPeriodValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompareVal = 'CompareVal' in params ? params.CompareVal : null;

        if (params.CompareVals) {
            this.CompareVals = new Array();
            for (let z in params.CompareVals) {
                let obj = new APMKVItem();
                obj.deserialize(params.CompareVals[z]);
                this.CompareVals.push(obj);
            }
        }
        this.Value = 'Value' in params ? params.Value : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Key = 'Key' in params ? params.Key : null;

        if (params.LastPeriodValue) {
            this.LastPeriodValue = new Array();
            for (let z in params.LastPeriodValue) {
                let obj = new APMKV();
                obj.deserialize(params.LastPeriodValue[z]);
                this.LastPeriodValue.push(obj);
            }
        }

    }
}

/**
 * 指标曲线数据
 * @class
 */
class Line extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标中文名
         * @type {string || null}
         */
        this.MetricNameCN = null;

        /**
         * 时间序列
         * @type {Array.<number> || null}
         */
        this.TimeSerial = null;

        /**
         * 数据序列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.DataSerial = null;

        /**
         * 维度列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApmTag> || null}
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.MetricNameCN = 'MetricNameCN' in params ? params.MetricNameCN : null;
        this.TimeSerial = 'TimeSerial' in params ? params.TimeSerial : null;
        this.DataSerial = 'DataSerial' in params ? params.DataSerial : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Apm通用KV结构
 * @class
 */
class APMKVItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key值定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value值定义
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * sql排序字段
 * @class
 */
class OrderBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要排序的字段
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 顺序排序/倒序排序
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
 * DescribeMetricRecords返回参数结构体
 * @class
 */
class DescribeMetricRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标结果集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApmMetricRecord> || null}
         */
        this.Records = null;

        /**
         * 查询指标结果集条数
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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new ApmMetricRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 维度（标签）对象
 * @class
 */
class ApmTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度Key(列名，标签Key)
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 维度值（标签值）
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
 * 查询过滤参数
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤方式（=, !=, in）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 过滤维度名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 过滤值，in过滤方式用逗号分割多个值
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * APM浮点数类型键值对
 * @class
 */
class APMKV extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key值定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value值定义
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeApmAgent请求参数结构体
 * @class
 */
class DescribeApmAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 接入方式
         * @type {string || null}
         */
        this.AgentType = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.NetworkMode = null;

        /**
         * 语言
         * @type {string || null}
         */
        this.LanguageEnvironment = null;

        /**
         * 上报方式
         * @type {string || null}
         */
        this.ReportMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentType = 'AgentType' in params ? params.AgentType : null;
        this.NetworkMode = 'NetworkMode' in params ? params.NetworkMode : null;
        this.LanguageEnvironment = 'LanguageEnvironment' in params ? params.LanguageEnvironment : null;
        this.ReportMethod = 'ReportMethod' in params ? params.ReportMethod : null;

    }
}

/**
 * DescribeMetricRecords请求参数结构体
 * @class
 */
class DescribeMetricRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 指标列表
         * @type {Array.<QueryMetricItem> || null}
         */
        this.Metrics = null;

        /**
         * 聚合维度
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * 排序
         * @type {OrderBy || null}
         */
        this.OrderBy = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 分页起始点
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 业务名称（默认值：taw）
         * @type {string || null}
         */
        this.BusinessName = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 页长
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

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new QueryMetricItem();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;

        if (params.OrderBy) {
            let obj = new OrderBy();
            obj.deserialize(params.OrderBy)
            this.OrderBy = obj;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BusinessName = 'BusinessName' in params ? params.BusinessName : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeGeneralMetricData请求参数结构体
 * @class
 */
class DescribeGeneralMetricDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要过滤的维度信息：
service_metric视图支持：service.name（服务名）、span.kind（客户端/服务端视角）为维度进行过滤，service.name（服务名）必填。
span.kind:
	server:服务端视角
	client:客户端视角
默认为服务端视角进行查询。
runtime_metric视图支持：service.name（服务名）维度进行过滤，service.name（服务名）必填。
sql_metric视图支持：service.name（服务名）、db.instance（数据库名称）、db.ip（数据库实例ip）维度进行过滤，查询service_slow_sql_count（慢sql）指标时service.name必填，查询sql_duration_avg（耗时）指标时db.instance（数据库名称）必填。
         * @type {Array.<GeneralFilter> || null}
         */
        this.Filters = null;

        /**
         * 需要查询的指标，不可自定义输入。
service_metric视图支持：service_request_count（总请求）、service_duration（平均响应时间）、service_error_req_rate（平均错误率）、service_slow_call_count（慢调用）、service_error_request_count（异常数量）。
runtime_metric视图支持：service_gc_full_count（Full GC）。
sql_metric视图支持：service_slow_sql_count（慢sql）、sql_duration_avg（耗时）。
         * @type {Array.<string> || null}
         */
        this.Metrics = null;

        /**
         * 业务系统ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 视图名称，不可自定义输入。支持：service_metric、runtime_metric、sql_metric。
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 聚合维度：
service_metric视图支持：service.name（服务名）、span.kind （客户端/服务端视角）维度进行聚合，service.name（服务名）必填。
runtime_metric视图支持：service.name（服务名）维度进行聚合，service.name（服务名）必填。
sql_metric视图支持：service.name（服务名）、db.statement（sql语句）维度进行聚合，查询service_slow_sql_count（慢sql）时service.name（服务名）必填，查询sql_duration_avg（耗时）指标时service.name（服务名）、db.statement（sql语句）必填。
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * 起始时间的时间戳，单位为秒，只支持查询2天内最多1小时的指标数据。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间的时间戳，单位为秒，只支持查询2天内最多1小时的指标数据。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 聚合粒度，单位为秒，最小为60s，即一分钟的聚合粒度；如果为空或0则计算开始时间到截止时间的指标数据，上报其他值会报错。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 对查询指标进行排序：
service_metric视图支持：service_request_count（总请求）、service_duration（平均响应时间）、service_error_req_rate（平均错误率）、service_slow_call_count（慢调用）、service_error_request_count（异常数量）。
runtime_metric视图支持：service_gc_full_count（Full GC）。
sql_metric视图支持：service_slow_sql_count（慢sql）、sql_duration_avg（耗时）。
asc:对查询指标进行升序排序
desc：对查询指标进行降序排序
         * @type {OrderBy || null}
         */
        this.OrderBy = null;

        /**
         * 查询指标的限制条数，目前最多展示50条数据，PageSize取值为1-50，上送PageSize则根据PageSize的值展示限制条数。
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
                let obj = new GeneralFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Period = 'Period' in params ? params.Period : null;

        if (params.OrderBy) {
            let obj = new OrderBy();
            obj.deserialize(params.OrderBy)
            this.OrderBy = obj;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * CreateApmInstance返回参数结构体
 * @class
 */
class CreateApmInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询过滤参数
 * @class
 */
class GeneralFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤维度名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 过滤值
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
 * DescribeApmInstances请求参数结构体
 * @class
 */
class DescribeApmInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag列表
         * @type {Array.<ApmTag> || null}
         */
        this.Tags = null;

        /**
         * 搜索实例名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 过滤实例ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 是否查询官方demo实例
         * @type {number || null}
         */
        this.DemoInstanceFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.DemoInstanceFlag = 'DemoInstanceFlag' in params ? params.DemoInstanceFlag : null;

    }
}

/**
 * DescribeGeneralMetricData返回参数结构体
 * @class
 */
class DescribeGeneralMetricDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标结果集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Line> || null}
         */
        this.Records = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new Line();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ApmInstanceDetail: ApmInstanceDetail,
    CreateApmInstanceRequest: CreateApmInstanceRequest,
    DescribeServiceOverviewResponse: DescribeServiceOverviewResponse,
    QueryMetricItem: QueryMetricItem,
    DescribeApmInstancesResponse: DescribeApmInstancesResponse,
    ApmAgentInfo: ApmAgentInfo,
    ApmMetricRecord: ApmMetricRecord,
    DescribeServiceOverviewRequest: DescribeServiceOverviewRequest,
    DescribeApmAgentResponse: DescribeApmAgentResponse,
    ApmField: ApmField,
    Line: Line,
    APMKVItem: APMKVItem,
    OrderBy: OrderBy,
    DescribeMetricRecordsResponse: DescribeMetricRecordsResponse,
    ApmTag: ApmTag,
    Filter: Filter,
    APMKV: APMKV,
    DescribeApmAgentRequest: DescribeApmAgentRequest,
    DescribeMetricRecordsRequest: DescribeMetricRecordsRequest,
    DescribeGeneralMetricDataRequest: DescribeGeneralMetricDataRequest,
    CreateApmInstanceResponse: CreateApmInstanceResponse,
    GeneralFilter: GeneralFilter,
    DescribeApmInstancesRequest: DescribeApmInstancesRequest,
    DescribeGeneralMetricDataResponse: DescribeGeneralMetricDataResponse,

}
