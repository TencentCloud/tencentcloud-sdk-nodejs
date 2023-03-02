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
 * DescribeNodes请求参数结构体
 * @class
 */
class DescribeNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点类型
<li> 1 = IDC </li>
<li> 2 = LastMile </li>
<li> 3 = Mobile </li>
         * @type {number || null}
         */
        this.NodeType = null;

        /**
         * 节点区域
<li> 1 = 中国大陆 </li>
<li> 2 = 港澳台 </li>
<li> 3 = 境外</li>
         * @type {number || null}
         */
        this.Location = null;

        /**
         * 是否IPv6
         * @type {boolean || null}
         */
        this.IsIPv6 = null;

        /**
         * 名字模糊搜索
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 任务类型
<li>1 = 页面性能</li>
<li>2 = 文件上传</li>
<li>3 = 文件下载</li>
<li>4 = 端口性能</li>
<li>5 = 网络质量</li>
<li>6 = 音视频体验</li>
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
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.IsIPv6 = 'IsIPv6' in params ? params.IsIPv6 : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * 保存string类型字段
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义字段编号
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义字段名称/说明
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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 储存float类型字段
 * @class
 */
class Field extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义字段编号
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义字段名称/说明
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段值
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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 健值对
 * @class
 */
class KeyValuePair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健
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
 * 任务执行结果
 * @class
 */
class TaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Success = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Success = 'Success' in params ? params.Success : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

    }
}

/**
 * SuspendProbeTask返回参数结构体
 * @class
 */
class SuspendProbeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskResult> || null}
         */
        this.Results = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new TaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 拨测任务基础配置
 * @class
 */
class ProbeTaskBasicConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 拨测目标地址
         * @type {string || null}
         */
        this.TargetAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TargetAddress = 'TargetAddress' in params ? params.TargetAddress : null;

    }
}

/**
 * DescribeProbeMetricData返回参数结构体
 * @class
 */
class DescribeProbeMetricDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回指标 JSON 序列化后的字符串,具体如下所示：
"[{\"name\":\"task_navigate_request_gauge\",\"columns\":[\"time\",\"avg(first_screen_time) / 1000\"],\"values\":[[1641571200,6.756600000000001]],\"tags\":null}]"
         * @type {string || null}
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
        this.MetricSet = 'MetricSet' in params ? params.MetricSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDetailedSingleProbeData请求参数结构体
 * @class
 */
class DescribeDetailedSingleProbeDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间戳（毫秒级）
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间戳（毫秒级）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 任务类型
AnalyzeTaskType_Network：网络质量
AnalyzeTaskType_Browse：页面性能
AnalyzeTaskType_UploadDownload：文件传输（含文件上传、文件下载）
AnalyzeTaskType_Transport：端口性能
AnalyzeTaskType_MediaStream：音视频体验
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 待排序字段
可以填写 ProbeTime 拨测时间排序
也可填写SelectedFields 中的选中字段
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * true表示升序
         * @type {boolean || null}
         */
        this.Ascending = null;

        /**
         * 选中字段
         * @type {Array.<string> || null}
         */
        this.SelectedFields = null;

        /**
         * 起始取数位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 取数数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 任务ID
         * @type {Array.<string> || null}
         */
        this.TaskID = null;

        /**
         * 拨测点运营商
	
这里实际按拨测结果中的运营商来填写即可

电信：中国电信
移动：中国移动
联通：中国联通
         * @type {Array.<string> || null}
         */
        this.Operators = null;

        /**
         * 拨测点地区
	
这里实际按拨测结果中的地区来填写即可

国内一般是省级单位，如广东、广西、中国香港、新疆；直辖市则填北京、上海

境外一般是国家名，如澳大利亚、新加坡
         * @type {Array.<string> || null}
         */
        this.Districts = null;

        /**
         * 错误类型
         * @type {Array.<string> || null}
         */
        this.ErrorTypes = null;

        /**
         * 城市
这里实际按拨测结果中的城市来填写即可

示例：

深圳市
武汉市
首尔
多伦多
         * @type {Array.<string> || null}
         */
        this.City = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.Ascending = 'Ascending' in params ? params.Ascending : null;
        this.SelectedFields = 'SelectedFields' in params ? params.SelectedFields : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.Operators = 'Operators' in params ? params.Operators : null;
        this.Districts = 'Districts' in params ? params.Districts : null;
        this.ErrorTypes = 'ErrorTypes' in params ? params.ErrorTypes : null;
        this.City = 'City' in params ? params.City : null;

    }
}

/**
 * DescribeProbeTasks返回参数结构体
 * @class
 */
class DescribeProbeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProbeTask> || null}
         */
        this.TaskSet = null;

        /**
         * 任务总数
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

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new ProbeTask();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateProbeTaskAttributes返回参数结构体
 * @class
 */
class UpdateProbeTaskAttributesResponse extends  AbstractModel {
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
 * DeleteProbeTask请求参数结构体
 * @class
 */
class DeleteProbeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

    }
}

/**
 * DescribeDetailedSingleProbeData返回参数结构体
 * @class
 */
class DescribeDetailedSingleProbeDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单次详情数据
         * @type {Array.<DetailedSingleDataDefine> || null}
         */
        this.DataSet = null;

        /**
         * 符合条件的数据总数
         * @type {number || null}
         */
        this.TotalNumber = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataSet) {
            this.DataSet = new Array();
            for (let z in params.DataSet) {
                let obj = new DetailedSingleDataDefine();
                obj.deserialize(params.DataSet[z]);
                this.DataSet.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SuspendProbeTask请求参数结构体
 * @class
 */
class SuspendProbeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

    }
}

/**
 * DescribeProbeMetricData请求参数结构体
 * @class
 */
class DescribeProbeMetricDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分析任务类型，支持以下几种类型：
AnalyzeTaskType_Network：网络质量
AnalyzeTaskType_Browse：页面性能
AnalyzeTaskType_Transport：端口性能
AnalyzeTaskType_UploadDownload：文件传输
AnalyzeTaskType_MediaStream：音视频体验
         * @type {string || null}
         */
        this.AnalyzeTaskType = null;

        /**
         * 指标类型，指标查询默认传gauge
         * @type {string || null}
         */
        this.MetricType = null;

        /**
         * 指标详细字段，可以传递传具体的指标也可以对指标进行聚合查询例如："avg(ping_time)"代表整体时延(ms)
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 过滤条件可以传单个过滤条件也可以拼接多个参数
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * 聚合时间, 1m、1d、30d 等等
         * @type {string || null}
         */
        this.GroupBy = null;

        /**
         * 多条件过滤，支持多个过滤条件组合查询
例如：[""host" = 'www.test.com'", "time >= now()-1h"]
         * @type {Array.<string> || null}
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
        this.AnalyzeTaskType = 'AnalyzeTaskType' in params ? params.AnalyzeTaskType : null;
        this.MetricType = 'MetricType' in params ? params.MetricType : null;
        this.Field = 'Field' in params ? params.Field : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;
        this.Filters = 'Filters' in params ? params.Filters : null;

    }
}

/**
 * UpdateProbeTaskAttributes请求参数结构体
 * @class
 */
class UpdateProbeTaskAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeProbeNodes返回参数结构体
 * @class
 */
class DescribeProbeNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeDefine> || null}
         */
        this.NodeSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new NodeDefine();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateProbeTaskConfigurationList请求参数结构体
 * @class
 */
class UpdateProbeTaskConfigurationListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 拨测节点
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

        /**
         * 拨测间隔
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 拨测参数
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * 定时任务cron表达式
         * @type {string || null}
         */
        this.Cron = null;

        /**
         * 预付费套餐id
需要与taskId对应
         * @type {Array.<string> || null}
         */
        this.ResourceIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.Cron = 'Cron' in params ? params.Cron : null;
        this.ResourceIDs = 'ResourceIDs' in params ? params.ResourceIDs : null;

    }
}

/**
 * CreateProbeTasks请求参数结构体
 * @class
 */
class CreateProbeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量任务名-地址
         * @type {Array.<ProbeTaskBasicConfiguration> || null}
         */
        this.BatchTasks = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 拨测节点
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

        /**
         * 拨测间隔
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 拨测参数
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * 任务分类
<li>1 = PC</li>
<li> 2 = Mobile </li>
         * @type {number || null}
         */
        this.TaskCategory = null;

        /**
         * 定时任务cron表达式
         * @type {string || null}
         */
        this.Cron = null;

        /**
         * 资源标签值
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * 测试类型，包含定时测试与即时测试
         * @type {number || null}
         */
        this.ProbeType = null;

        /**
         * 插件类型
         * @type {string || null}
         */
        this.PluginSource = null;

        /**
         * 客户端ID
         * @type {string || null}
         */
        this.ClientNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BatchTasks) {
            this.BatchTasks = new Array();
            for (let z in params.BatchTasks) {
                let obj = new ProbeTaskBasicConfiguration();
                obj.deserialize(params.BatchTasks[z]);
                this.BatchTasks.push(obj);
            }
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.TaskCategory = 'TaskCategory' in params ? params.TaskCategory : null;
        this.Cron = 'Cron' in params ? params.Cron : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.ProbeType = 'ProbeType' in params ? params.ProbeType : null;
        this.PluginSource = 'PluginSource' in params ? params.PluginSource : null;
        this.ClientNum = 'ClientNum' in params ? params.ClientNum : null;

    }
}

/**
 * 拨测任务
 * @class
 */
class ProbeTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 拨测类型
<li>1 = 页面浏览</li>
<li> 2 =文件上传 </li>
<li> 3 = 文件下载</li>
<li> 4 = 端口性能 </li>
<li> 5 = 网络质量 </li>
<li> 6 =流媒体 </li>

即时拨测只支持页面浏览，网络质量，文件下载
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 拨测节点列表
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

        /**
         * 拨测间隔
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 拨测参数
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * 任务状态
<li>1 = 创建中</li>
<li> 2 = 运行中 </li>
<li> 3 = 运行异常 </li>
<li> 4 = 暂停中 </li>
<li> 5 = 暂停异常 </li>
<li> 6 = 任务暂停 </li>
<li> 7 = 任务删除中 </li>
<li> 8 = 任务删除异常 </li>
<li> 9 = 任务删除</li>
<li> 10 = 定时任务暂停中 </li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 目标地址
         * @type {string || null}
         */
        this.TargetAddress = null;

        /**
         * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 订单状态
<li>1 = 正常</li>
<li> 2 = 欠费 </li>
         * @type {number || null}
         */
        this.OrderState = null;

        /**
         * 任务分类
<li>1 = PC</li>
<li> 2 = Mobile </li>
         * @type {number || null}
         */
        this.TaskCategory = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 定时任务cron表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cron = null;

        /**
         * 定时任务启动状态
<li>1 = 定时任务表达式生效</li>
<li> 2 = 定时任务表达式未生效（一般为任务手动暂停）</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CronState = null;

        /**
         * 任务当前绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KeyValuePair> || null}
         */
        this.TagInfoList = null;

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
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TargetAddress = 'TargetAddress' in params ? params.TargetAddress : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.OrderState = 'OrderState' in params ? params.OrderState : null;
        this.TaskCategory = 'TaskCategory' in params ? params.TaskCategory : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.Cron = 'Cron' in params ? params.Cron : null;
        this.CronState = 'CronState' in params ? params.CronState : null;

        if (params.TagInfoList) {
            this.TagInfoList = new Array();
            for (let z in params.TagInfoList) {
                let obj = new KeyValuePair();
                obj.deserialize(params.TagInfoList[z]);
                this.TagInfoList.push(obj);
            }
        }

    }
}

/**
 * DescribeProbeTasks请求参数结构体
 * @class
 */
class DescribeProbeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID  列表
         * @type {Array.<string> || null}
         */
        this.TaskIDs = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 拨测目标
         * @type {string || null}
         */
        this.TargetAddress = null;

        /**
         * 任务状态列表
<li>1 = 创建中</li>
<li> 2 = 运行中 </li>
<li> 3 = 运行异常 </li>
<li> 4 = 暂停中 </li>
<li> 5 = 暂停异常 </li>
<li> 6 = 任务暂停 </li>
<li> 7 = 任务删除中 </li>
<li> 8 = 任务删除异常 </li>
<li> 9 = 任务删除</li>
<li> 10 = 定时任务暂停中 </li>
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 订单状态
<li>1 = 正常</li>
<li> 2 = 欠费 </li>
         * @type {number || null}
         */
        this.OrderState = null;

        /**
         * 拨测类型
<li>1 = 页面浏览</li>
<li> 2 =文件上传 </li>
<li> 3 = 文件下载</li>
<li> 4 = 端口性能 </li>
<li> 5 = 网络质量 </li>
<li> 6 =流媒体 </li>

即使拨测只支持页面浏览，网络质量，文件下载
         * @type {Array.<number> || null}
         */
        this.TaskType = null;

        /**
         * 节点类型
         * @type {Array.<number> || null}
         */
        this.TaskCategory = null;

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
         * 资源标签值
         * @type {Array.<KeyValuePair> || null}
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
        this.TaskIDs = 'TaskIDs' in params ? params.TaskIDs : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TargetAddress = 'TargetAddress' in params ? params.TargetAddress : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.OrderState = 'OrderState' in params ? params.OrderState : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskCategory = 'TaskCategory' in params ? params.TaskCategory : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new KeyValuePair();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * ResumeProbeTask返回参数结构体
 * @class
 */
class ResumeProbeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 任务执行详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskResult> || null}
         */
        this.Results = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new TaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProbeTask返回参数结构体
 * @class
 */
class DeleteProbeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskResult> || null}
         */
        this.Results = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new TaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProbeTasks返回参数结构体
 * @class
 */
class CreateProbeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID列表
         * @type {Array.<string> || null}
         */
        this.TaskIDs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIDs = 'TaskIDs' in params ? params.TaskIDs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeProbeTask请求参数结构体
 * @class
 */
class ResumeProbeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

    }
}

/**
 * 探测节点
 * @class
 */
class NodeDefineExt extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 节点代码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 节点类型
<li> 1 = IDC </li>
<li> 2 = LastMile </li>
<li> 3 = Mobile </li>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 网络服务商
         * @type {string || null}
         */
        this.NetService = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.District = null;

        /**
         * 城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * IP 类型
<li> 1 = IPv4 </li>
<li> 2 = IPv6 </li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IPType = null;

        /**
         * 区域
<li> 1 = 中国大陆 </li>
<li> 2 = 港澳台 </li>
<li> 3 = 境外 </li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Location = null;

        /**
         * 节点类型  如果为base 则为可用性拨测点，为空则为高级拨测点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodeType = null;

        /**
         * 节点支持的任务类型。1: 页面性能 2: 文件上传 3: 文件下载 4: 端口性能 5: 网络质量 6: 音视频体验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.TaskTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.NetService = 'NetService' in params ? params.NetService : null;
        this.District = 'District' in params ? params.District : null;
        this.City = 'City' in params ? params.City : null;
        this.IPType = 'IPType' in params ? params.IPType : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.TaskTypes = 'TaskTypes' in params ? params.TaskTypes : null;

    }
}

/**
 * DescribeProbeNodes请求参数结构体
 * @class
 */
class DescribeProbeNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点类型
<li> 1 = IDC </li>
<li> 2 = LastMile </li>
<li> 3 = Mobile </li>
         * @type {number || null}
         */
        this.NodeType = null;

        /**
         * 节点区域
<li> 1 = 中国大陆 </li>
<li> 2 = 港澳台 </li>
<li> 3 = 海外 </li>
         * @type {number || null}
         */
        this.Location = null;

        /**
         * 是否IPv6
         * @type {boolean || null}
         */
        this.IsIPv6 = null;

        /**
         * 名字模糊搜索
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
         * @type {number || null}
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
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.IsIPv6 = 'IsIPv6' in params ? params.IsIPv6 : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * 探测节点
 * @class
 */
class NodeDefine extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 节点代码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 节点类型
<li> 1 = IDC </li>
<li> 2 = LastMile </li>
<li> 3 = Mobile </li>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 网络服务商
         * @type {string || null}
         */
        this.NetService = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.District = null;

        /**
         * 城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * IP 类型
<li> 1 = IPv4 </li>
<li> 2 = IPv6 </li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IPType = null;

        /**
         * 区域
<li> 1 = 中国大陆 </li>
<li> 2 = 港澳台 </li>
<li> 3 = 国外 </li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Location = null;

        /**
         * 节点类型  如果为base 则为可用性拨测点，为空则为高级拨测点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodeType = null;

        /**
         * 节点状态：1-运行,2-下线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NodeDefineStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.NetService = 'NetService' in params ? params.NetService : null;
        this.District = 'District' in params ? params.District : null;
        this.City = 'City' in params ? params.City : null;
        this.IPType = 'IPType' in params ? params.IPType : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.NodeDefineStatus = 'NodeDefineStatus' in params ? params.NodeDefineStatus : null;

    }
}

/**
 * 资源的标签，通过标签对资源进行划分用于支持细粒度的鉴权、分账等场景
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * value
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
 * DescribeNodes返回参数结构体
 * @class
 */
class DescribeNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeDefineExt> || null}
         */
        this.NodeSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new NodeDefineExt();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateProbeTaskConfigurationList返回参数结构体
 * @class
 */
class UpdateProbeTaskConfigurationListResponse extends  AbstractModel {
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
 * 单条详细拨测数据
 * @class
 */
class DetailedSingleDataDefine extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测时间戳
         * @type {number || null}
         */
        this.ProbeTime = null;

        /**
         * 储存所有string类型字段
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 储存所有float类型字段
         * @type {Array.<Field> || null}
         */
        this.Fields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProbeTime = 'ProbeTime' in params ? params.ProbeTime : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Fields) {
            this.Fields = new Array();
            for (let z in params.Fields) {
                let obj = new Field();
                obj.deserialize(params.Fields[z]);
                this.Fields.push(obj);
            }
        }

    }
}

module.exports = {
    DescribeNodesRequest: DescribeNodesRequest,
    Label: Label,
    Field: Field,
    KeyValuePair: KeyValuePair,
    TaskResult: TaskResult,
    SuspendProbeTaskResponse: SuspendProbeTaskResponse,
    ProbeTaskBasicConfiguration: ProbeTaskBasicConfiguration,
    DescribeProbeMetricDataResponse: DescribeProbeMetricDataResponse,
    DescribeDetailedSingleProbeDataRequest: DescribeDetailedSingleProbeDataRequest,
    DescribeProbeTasksResponse: DescribeProbeTasksResponse,
    UpdateProbeTaskAttributesResponse: UpdateProbeTaskAttributesResponse,
    DeleteProbeTaskRequest: DeleteProbeTaskRequest,
    DescribeDetailedSingleProbeDataResponse: DescribeDetailedSingleProbeDataResponse,
    SuspendProbeTaskRequest: SuspendProbeTaskRequest,
    DescribeProbeMetricDataRequest: DescribeProbeMetricDataRequest,
    UpdateProbeTaskAttributesRequest: UpdateProbeTaskAttributesRequest,
    DescribeProbeNodesResponse: DescribeProbeNodesResponse,
    UpdateProbeTaskConfigurationListRequest: UpdateProbeTaskConfigurationListRequest,
    CreateProbeTasksRequest: CreateProbeTasksRequest,
    ProbeTask: ProbeTask,
    DescribeProbeTasksRequest: DescribeProbeTasksRequest,
    ResumeProbeTaskResponse: ResumeProbeTaskResponse,
    DeleteProbeTaskResponse: DeleteProbeTaskResponse,
    CreateProbeTasksResponse: CreateProbeTasksResponse,
    ResumeProbeTaskRequest: ResumeProbeTaskRequest,
    NodeDefineExt: NodeDefineExt,
    DescribeProbeNodesRequest: DescribeProbeNodesRequest,
    NodeDefine: NodeDefine,
    Tag: Tag,
    DescribeNodesResponse: DescribeNodesResponse,
    UpdateProbeTaskConfigurationListResponse: UpdateProbeTaskConfigurationListResponse,
    DetailedSingleDataDefine: DetailedSingleDataDefine,

}
