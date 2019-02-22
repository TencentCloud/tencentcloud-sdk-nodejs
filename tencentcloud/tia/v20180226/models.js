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
 * DeleteModel请求参数结构体
 * @class
 */
class DeleteModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的模型名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 要删除的模型所在的集群名称，`集群模式` 必填
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 模型类型，取值 `serverless` 即为 `无服务器模式`，否则为 `集群模式`
         * @type {string || null}
         */
        this.ServType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.ServType = 'ServType' in params ? params.ServType : null;

    }
}

/**
 * 日志
 * @class
 */
class Log extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器名
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 日志内容
         * @type {string || null}
         */
        this.Log = null;

        /**
         * 空间名
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Pod Id
         * @type {string || null}
         */
        this.PodId = null;

        /**
         * Pod名
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 日志日期，格式为“2018-07-02T09:10:04.916553368Z”
         * @type {string || null}
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
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.Log = 'Log' in params ? params.Log : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.PodId = 'PodId' in params ? params.PodId : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * DeleteJob返回参数结构体
 * @class
 */
class DeleteJobResponse extends  AbstractModel {
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
 * CreateJob请求参数结构体
 * @class
 */
class CreateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 运行任务的集群，详见 [使用集群](https://cloud.tencent.com/document/product/851/17317)
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 运行任务的环境，详见 [运行环境](https://cloud.tencent.com/document/product/851/17320)
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * 挂载的路径，支持 NFS，[CFS](https://cloud.tencent.com/product/cfs) 和 [COS](https://cloud.tencent.com/product/cos)，其中 COS 只在 [TI-A 定制环境](https://cloud.tencent.com/document/product/851/17320#ti-a-.E5.AE.9A.E5.88.B6.E7.8E.AF.E5.A2.83) 中支持
         * @type {Array.<string> || null}
         */
        this.PackageDir = null;

        /**
         * 任务启动命令
         * @type {Array.<string> || null}
         */
        this.Command = null;

        /**
         * 任务启动参数
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * 运行任务的配置信息，详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
         * @type {string || null}
         */
        this.ScaleTier = null;

        /**
         * Master 机器类型，ScaleTier 取值为 `CUSTOM` 时必填，详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
         * @type {string || null}
         */
        this.MasterType = null;

        /**
         * Worker 机器类型，ScaleTier 取值为 `CUSTOM` 时必填，详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
         * @type {string || null}
         */
        this.WorkerType = null;

        /**
         * Parameter server 机器类型，ScaleTier 取值为 `CUSTOM` 时必填,详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
         * @type {string || null}
         */
        this.ParameterServerType = null;

        /**
         * Worker 机器数量，ScaleTier 取值为 `CUSTOM` 时必填,详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
         * @type {number || null}
         */
        this.WorkerCount = null;

        /**
         * Parameter server 机器数量，ScaleTier 取值为 `CUSTOM` 时必填,详见 [训练规模](https://cloud.tencent.com/document/product/851/17319)
         * @type {number || null}
         */
        this.ParameterServerCount = null;

        /**
         * 启动 debug 模式，默认为 false
         * @type {boolean || null}
         */
        this.Debug = null;

        /**
         * 运行任务的其他配置信息
         * @type {Array.<string> || null}
         */
        this.RuntimeConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.PackageDir = 'PackageDir' in params ? params.PackageDir : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.ScaleTier = 'ScaleTier' in params ? params.ScaleTier : null;
        this.MasterType = 'MasterType' in params ? params.MasterType : null;
        this.WorkerType = 'WorkerType' in params ? params.WorkerType : null;
        this.ParameterServerType = 'ParameterServerType' in params ? params.ParameterServerType : null;
        this.WorkerCount = 'WorkerCount' in params ? params.WorkerCount : null;
        this.ParameterServerCount = 'ParameterServerCount' in params ? params.ParameterServerCount : null;
        this.Debug = 'Debug' in params ? params.Debug : null;
        this.RuntimeConf = 'RuntimeConf' in params ? params.RuntimeConf : null;

    }
}

/**
 * CreateJob返回参数结构体
 * @class
 */
class CreateJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务信息
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InstallAgent返回参数结构体
 * @class
 */
class InstallAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent版本, 用于私有集群的agent安装
         * @type {string || null}
         */
        this.TiaVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TiaVersion = 'TiaVersion' in params ? params.TiaVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModel返回参数结构体
 * @class
 */
class DescribeModelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型信息
         * @type {Model || null}
         */
        this.Model = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Model) {
            let obj = new Model();
            obj.deserialize(params.Model)
            this.Model = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModel请求参数结构体
 * @class
 */
class DescribeModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模型所在集群名称，`集群模式` 必填
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 模型类型，取值 `serverless` 即为 `无服务器模式`，否则为 `集群模式`
         * @type {string || null}
         */
        this.ServType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.ServType = 'ServType' in params ? params.ServType : null;

    }
}

/**
 * DescribeJob请求参数结构体
 * @class
 */
class DescribeJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 运行任务的集群
         * @type {string || null}
         */
        this.Cluster = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;

    }
}

/**
 * ListJobs请求参数结构体
 * @class
 */
class ListJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行任务的集群
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 分页参数，返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数，起始位置
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
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 训练任务信息
 * @class
 */
class Job extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务创建时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务开始时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务结束时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务状态，可能的状态为Created（已创建），Running（运行中），Succeeded（运行完成：成功），Failed（运行完成：失败）
         * @type {string || null}
         */
        this.State = null;

        /**
         * 任务状态信息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 运行任务的配置信息
         * @type {string || null}
         */
        this.ScaleTier = null;

        /**
         * （ScaleTier为Custom时）master机器类型
         * @type {string || null}
         */
        this.MasterType = null;

        /**
         * （ScaleTier为Custom时）worker机器类型
         * @type {string || null}
         */
        this.WorkerType = null;

        /**
         * （ScaleTier为Custom时）parameter server机器类型
         * @type {string || null}
         */
        this.ParameterServerType = null;

        /**
         * （ScaleTier为Custom时）worker机器数量
         * @type {number || null}
         */
        this.WorkerCount = null;

        /**
         * （ScaleTier为Custom时）parameter server机器数量
         * @type {number || null}
         */
        this.ParameterServerCount = null;

        /**
         * 挂载的路径
         * @type {Array.<string> || null}
         */
        this.PackageDir = null;

        /**
         * 任务启动命令
         * @type {Array.<string> || null}
         */
        this.Command = null;

        /**
         * 任务启动参数
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * 运行任务的集群
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 运行任务的环境
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * 任务删除时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
         * @type {string || null}
         */
        this.DelTime = null;

        /**
         * 创建任务的AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 创建任务的Uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 创建任务的Debug模式
         * @type {boolean || null}
         */
        this.Debug = null;

        /**
         * Runtime的额外配置信息
         * @type {Array.<string> || null}
         */
        this.RuntimeConf = null;

        /**
         * 任务Id
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
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.State = 'State' in params ? params.State : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.ScaleTier = 'ScaleTier' in params ? params.ScaleTier : null;
        this.MasterType = 'MasterType' in params ? params.MasterType : null;
        this.WorkerType = 'WorkerType' in params ? params.WorkerType : null;
        this.ParameterServerType = 'ParameterServerType' in params ? params.ParameterServerType : null;
        this.WorkerCount = 'WorkerCount' in params ? params.WorkerCount : null;
        this.ParameterServerCount = 'ParameterServerCount' in params ? params.ParameterServerCount : null;
        this.PackageDir = 'PackageDir' in params ? params.PackageDir : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.DelTime = 'DelTime' in params ? params.DelTime : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Debug = 'Debug' in params ? params.Debug : null;
        this.RuntimeConf = 'RuntimeConf' in params ? params.RuntimeConf : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * CreateModel返回参数结构体
 * @class
 */
class CreateModelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型的详细信息
         * @type {Model || null}
         */
        this.Model = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Model) {
            let obj = new Model();
            obj.deserialize(params.Model)
            this.Model = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListModels请求参数结构体
 * @class
 */
class ListModelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署模型的集群， `集群模式` 必填
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 分页参数，返回数量上限
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数，分页起始位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 部署类型，取值 `serverless` 即为 `无服务器模式`，否则为 `集群模式`。
         * @type {string || null}
         */
        this.ServType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ServType = 'ServType' in params ? params.ServType : null;

    }
}

/**
 * QueryLogs返回参数结构体
 * @class
 */
class QueryLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志查询上下文，用于加载更多日志
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志内容列表
         * @type {Array.<Log> || null}
         */
        this.Logs = null;

        /**
         * 是否已经返回所有符合条件的日志
         * @type {boolean || null}
         */
        this.Listover = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Logs) {
            this.Logs = new Array();
            for (let z in params.Logs) {
                let obj = new Log();
                obj.deserialize(params.Logs[z]);
                this.Logs.push(obj);
            }
        }
        this.Listover = 'Listover' in params ? params.Listover : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InstallAgent请求参数结构体
 * @class
 */
class InstallAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群名称
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * Agent版本, 用于私有集群的agent安装，默认为“private-training”
         * @type {string || null}
         */
        this.TiaVersion = null;

        /**
         * 是否允许更新Agent
         * @type {boolean || null}
         */
        this.Update = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.TiaVersion = 'TiaVersion' in params ? params.TiaVersion : null;
        this.Update = 'Update' in params ? params.Update : null;

    }
}

/**
 * ListJobs返回参数结构体
 * @class
 */
class ListJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务列表
         * @type {Array.<Job> || null}
         */
        this.Jobs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Jobs) {
            this.Jobs = new Array();
            for (let z in params.Jobs) {
                let obj = new Job();
                obj.deserialize(params.Jobs[z]);
                this.Jobs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryLogs请求参数结构体
 * @class
 */
class QueryLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 任务所在集群的名称
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 查询日志的开始时间，格式：2019-01-01 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询日志的结束时间，格式：2019-01-01 00:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 单次要返回的日志条数上限
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 加载更多日志时使用，透传上次返回的 Context 值，获取后续的日志内容；使用 Context 翻页最多能获取 10000 条日志
         * @type {string || null}
         */
        this.Context = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * 用于描述模型的详细情况
        "Model": {
            "Name": "test-model",
            "Description": "test-model",
            "Cluster": "ap-beijing",
            "Model": "cos://test-1255502019.cos.ap-shanghai.myqcloud.com/example:/data/mnist",
            "RuntimeVersion": "tiaserv-1.6.0-cpu",
            "CreateTime": "2018-04-26 15:59:25 +0800 CST",
            "State": "Running",
            "ServingUrl": "140.143.51.230",
            "Message": "Deployment does not have minimum availability.",
            "AppId": 1255502019,
            "ServType": "1U2G0P"
        },
 * @class
 */
class Model extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模型描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 模型地址
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 运行环境编号
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * 模型创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模型运行状态
         * @type {string || null}
         */
        this.State = null;

        /**
         * 提供服务的url
         * @type {string || null}
         */
        this.ServingUrl = null;

        /**
         * 相关消息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 编号
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.ServType = null;

        /**
         * 模型暴露方式
         * @type {string || null}
         */
        this.Expose = null;

        /**
         * 部署副本数量
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 模型Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 创建任务的Uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 模型删除时间，格式为：2006-01-02 15:04:05.999999999 -0700 MST
         * @type {string || null}
         */
        this.DelTime = null;

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
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.State = 'State' in params ? params.State : null;
        this.ServingUrl = 'ServingUrl' in params ? params.ServingUrl : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ServType = 'ServType' in params ? params.ServType : null;
        this.Expose = 'Expose' in params ? params.Expose : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.DelTime = 'DelTime' in params ? params.DelTime : null;

    }
}

/**
 * DeleteModel返回参数结构体
 * @class
 */
class DeleteModelResponse extends  AbstractModel {
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
 * ListModels返回参数结构体
 * @class
 */
class ListModelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Model 数组，用以显示所有模型的信息
         * @type {Array.<Model> || null}
         */
        this.Models = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Models) {
            this.Models = new Array();
            for (let z in params.Models) {
                let obj = new Model();
                obj.deserialize(params.Models[z]);
                this.Models.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteJob请求参数结构体
 * @class
 */
class DeleteJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 运行任务的集群
         * @type {string || null}
         */
        this.Cluster = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;

    }
}

/**
 * CreateModel请求参数结构体
 * @class
 */
class CreateModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 要部署的模型文件路径名
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 关于模型的描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 部署目标集群的名称，`集群模式` 必填
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 运行环境镜像的标签，详见 [Serving 环境](https://cloud.tencent.com/document/product/851/17320#serving-.E7.8E.AF.E5.A2.83)
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * 要部署的模型副本数目，`集群模式` 选填
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 暴露外网或内网，默认暴露外网，`集群模式` 选填
         * @type {string || null}
         */
        this.Expose = null;

        /**
         * 部署模式，取值 `serverless` 即为 `无服务器模式`，否则为 `集群模式` 下服务的运行规模，形如 `2U4G1P`，详见 [自定义的训练规模](https://cloud.tencent.com/document/product/851/17319#.E8.87.AA.E5.AE.9A.E4.B9.89.E7.9A.84.E8.AE.AD.E7.BB.83.E8.A7.84.E6.A8.A1)
         * @type {string || null}
         */
        this.ServType = null;

        /**
         * `无服务器模式` 可选的其他配置信息，详见 [利用无服务器函数部署](https://cloud.tencent.com/document/product/851/17049#.E5.88.A9.E7.94.A8.E6.97.A0.E6.9C.8D.E5.8A.A1.E5.99.A8.E5.87.BD.E6.95.B0.E9.83.A8.E7.BD.B2)
         * @type {Array.<string> || null}
         */
        this.RuntimeConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.Expose = 'Expose' in params ? params.Expose : null;
        this.ServType = 'ServType' in params ? params.ServType : null;
        this.RuntimeConf = 'RuntimeConf' in params ? params.RuntimeConf : null;

    }
}

/**
 * DescribeJob返回参数结构体
 * @class
 */
class DescribeJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务信息
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DeleteModelRequest: DeleteModelRequest,
    Log: Log,
    DeleteJobResponse: DeleteJobResponse,
    CreateJobRequest: CreateJobRequest,
    CreateJobResponse: CreateJobResponse,
    InstallAgentResponse: InstallAgentResponse,
    DescribeModelResponse: DescribeModelResponse,
    DescribeModelRequest: DescribeModelRequest,
    DescribeJobRequest: DescribeJobRequest,
    ListJobsRequest: ListJobsRequest,
    Job: Job,
    CreateModelResponse: CreateModelResponse,
    ListModelsRequest: ListModelsRequest,
    QueryLogsResponse: QueryLogsResponse,
    InstallAgentRequest: InstallAgentRequest,
    ListJobsResponse: ListJobsResponse,
    QueryLogsRequest: QueryLogsRequest,
    Model: Model,
    DeleteModelResponse: DeleteModelResponse,
    ListModelsResponse: ListModelsResponse,
    DeleteJobRequest: DeleteJobRequest,
    CreateModelRequest: CreateModelRequest,
    DescribeJobResponse: DescribeJobResponse,

}
