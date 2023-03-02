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
 * CreateModelService请求参数结构体
 * @class
 */
class CreateModelServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像信息，配置服务运行所需的镜像地址等信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 新增版本时需要填写
         * @type {string || null}
         */
        this.ServiceGroupId = null;

        /**
         * 不超过60个字，仅支持英文、数字、下划线"_"、短横"-"，只能以英文、数字开头
         * @type {string || null}
         */
        this.ServiceGroupName = null;

        /**
         * 模型服务的描述
         * @type {string || null}
         */
        this.ServiceDescription = null;

        /**
         * 付费模式,有 PREPAID 、 POSTPAID_BY_HOUR 和 HYBRID_PAID 三种
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 预付费模式下所属的资源组id，同服务组下唯一
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 模型信息，需要挂载模型时填写
         * @type {ModelInfo || null}
         */
        this.ModelInfo = null;

        /**
         * 环境变量，可选参数，用于配置容器中的环境变量
         * @type {Array.<EnvVar> || null}
         */
        this.Env = null;

        /**
         * 资源描述，指定预付费模式下的cpu,mem,gpu等信息，后付费无需填写
         * @type {ResourceInfo || null}
         */
        this.Resources = null;

        /**
         * 使用DescribeBillingSpecs接口返回的规格列表中的值，或者参考实例列表:
TI.S.MEDIUM.POST	2C4G
TI.S.LARGE.POST	4C8G
TI.S.2XLARGE16.POST	8C16G
TI.S.2XLARGE32.POST	8C32G
TI.S.4XLARGE32.POST	16C32G
TI.S.4XLARGE64.POST	16C64G
TI.S.6XLARGE48.POST	24C48G
TI.S.6XLARGE96.POST	24C96G
TI.S.8XLARGE64.POST	32C64G
TI.S.8XLARGE128.POST 32C128G
TI.GN7.LARGE20.POST	4C20G T4*1/4
TI.GN7.2XLARGE40.POST	10C40G T4*1/2
TI.GN7.2XLARGE32.POST	8C32G T4*1
TI.GN7.5XLARGE80.POST	20C80G T4*1
TI.GN7.8XLARGE128.POST	32C128G T4*1
TI.GN7.10XLARGE160.POST	40C160G T4*2
TI.GN7.20XLARGE320.POST	80C320G T4*4
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 扩缩容类型 支持：自动 - "AUTO", 手动 - "MANUAL",默认为MANUAL
         * @type {string || null}
         */
        this.ScaleMode = null;

        /**
         * 实例数量, 不同计费模式和调节模式下对应关系如下
PREPAID 和 POSTPAID_BY_HOUR:
手动调节模式下对应 实例数量
自动调节模式下对应 基于时间的默认策略的实例数量
HYBRID_PAID:
后付费实例手动调节模式下对应 实例数量
后付费实例自动调节模式下对应 时间策略的默认策略的实例数量
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 自动伸缩信息
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * 是否开启日志投递，开启后需填写配置投递到指定cls
         * @type {boolean || null}
         */
        this.LogEnable = null;

        /**
         * 日志配置，需要投递服务日志到指定cls时填写
         * @type {LogConfig || null}
         */
        this.LogConfig = null;

        /**
         * 是否开启接口鉴权，开启后自动生成token信息，访问需要token鉴权
         * @type {boolean || null}
         */
        this.AuthorizationEnable = null;

        /**
         * 腾讯云标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否新增版本
         * @type {boolean || null}
         */
        this.NewVersion = null;

        /**
         * 定时任务配置，使用定时策略时填写
         * @type {Array.<CronScaleJob> || null}
         */
        this.CronScaleJobs = null;

        /**
         * 自动伸缩策略配置 HPA : 通过HPA进行弹性伸缩 CRON 通过定时任务进行伸缩
         * @type {string || null}
         */
        this.ScaleStrategy = null;

        /**
         * 计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数
         * @type {number || null}
         */
        this.HybridBillingPrepaidReplicas = null;

        /**
         * [AUTO_ML 自动学习，自动学习正式发布 AUTO_ML_FORMAL, DEFAULT 默认]
         * @type {string || null}
         */
        this.CreateSource = null;

        /**
         * 是否开启模型的热更新。默认不开启
         * @type {boolean || null}
         */
        this.ModelHotUpdateEnable = null;

        /**
         * 定时停止配置
         * @type {ScheduledAction || null}
         */
        this.ScheduledAction = null;

        /**
         * 挂载配置，目前只支持CFS
         * @type {VolumeMount || null}
         */
        this.VolumeMount = null;

        /**
         * 服务限速限流相关配置
         * @type {ServiceLimit || null}
         */
        this.ServiceLimit = null;

        /**
         * 回调地址，用于回调创建服务状态信息，回调格式&内容详情见：[TI-ONE 接口回调说明](https://cloud.tencent.com/document/product/851/84292)
         * @type {string || null}
         */
        this.CallbackUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;
        this.ServiceGroupName = 'ServiceGroupName' in params ? params.ServiceGroupName : null;
        this.ServiceDescription = 'ServiceDescription' in params ? params.ServiceDescription : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

        if (params.ModelInfo) {
            let obj = new ModelInfo();
            obj.deserialize(params.ModelInfo)
            this.ModelInfo = obj;
        }

        if (params.Env) {
            this.Env = new Array();
            for (let z in params.Env) {
                let obj = new EnvVar();
                obj.deserialize(params.Env[z]);
                this.Env.push(obj);
            }
        }

        if (params.Resources) {
            let obj = new ResourceInfo();
            obj.deserialize(params.Resources)
            this.Resources = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ScaleMode = 'ScaleMode' in params ? params.ScaleMode : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;

        if (params.LogConfig) {
            let obj = new LogConfig();
            obj.deserialize(params.LogConfig)
            this.LogConfig = obj;
        }
        this.AuthorizationEnable = 'AuthorizationEnable' in params ? params.AuthorizationEnable : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.NewVersion = 'NewVersion' in params ? params.NewVersion : null;

        if (params.CronScaleJobs) {
            this.CronScaleJobs = new Array();
            for (let z in params.CronScaleJobs) {
                let obj = new CronScaleJob();
                obj.deserialize(params.CronScaleJobs[z]);
                this.CronScaleJobs.push(obj);
            }
        }
        this.ScaleStrategy = 'ScaleStrategy' in params ? params.ScaleStrategy : null;
        this.HybridBillingPrepaidReplicas = 'HybridBillingPrepaidReplicas' in params ? params.HybridBillingPrepaidReplicas : null;
        this.CreateSource = 'CreateSource' in params ? params.CreateSource : null;
        this.ModelHotUpdateEnable = 'ModelHotUpdateEnable' in params ? params.ModelHotUpdateEnable : null;

        if (params.ScheduledAction) {
            let obj = new ScheduledAction();
            obj.deserialize(params.ScheduledAction)
            this.ScheduledAction = obj;
        }

        if (params.VolumeMount) {
            let obj = new VolumeMount();
            obj.deserialize(params.VolumeMount)
            this.VolumeMount = obj;
        }

        if (params.ServiceLimit) {
            let obj = new ServiceLimit();
            obj.deserialize(params.ServiceLimit)
            this.ServiceLimit = obj;
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * 模型描述信息
 * @class
 */
class ModelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型版本id, DescribeTrainingModelVersion查询模型接口时的id
自动学习类型的模型填写自动学习的任务id
         * @type {string || null}
         */
        this.ModelVersionId = null;

        /**
         * 模型id
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 模型名
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * 模型版本
         * @type {string || null}
         */
        this.ModelVersion = null;

        /**
         * 模型来源
         * @type {string || null}
         */
        this.ModelSource = null;

        /**
         * cos路径信息
         * @type {CosPathInfo || null}
         */
        this.CosPathInfo = null;

        /**
         * 模型对应的算法框架，预留
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlgorithmFramework = null;

        /**
         * 默认为 NORMAL, 已加速模型: ACCELERATE, 自动学习模型 AUTO_ML
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelVersionId = 'ModelVersionId' in params ? params.ModelVersionId : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.ModelVersion = 'ModelVersion' in params ? params.ModelVersion : null;
        this.ModelSource = 'ModelSource' in params ? params.ModelSource : null;

        if (params.CosPathInfo) {
            let obj = new CosPathInfo();
            obj.deserialize(params.CosPathInfo)
            this.CosPathInfo = obj;
        }
        this.AlgorithmFramework = 'AlgorithmFramework' in params ? params.AlgorithmFramework : null;
        this.ModelType = 'ModelType' in params ? params.ModelType : null;

    }
}

/**
 * DescribeLogs请求参数结构体
 * @class
 */
class DescribeLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询哪个服务的事件（可选值为TRAIN, NOTEBOOK, INFER）
         * @type {string || null}
         */
        this.Service = null;

        /**
         * 查询哪个Pod的日志（支持结尾通配符*)
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 日志查询开始时间（RFC3339格式的时间字符串），默认值为当前时间的前一个小时
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 日志查询结束时间（RFC3339格式的时间字符串），默认值为当前时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 日志查询条数，默认值100，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序方向（可选值为ASC, DESC ），默认为DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 按哪个字段排序（可选值为Timestamp），默认值为Timestamp
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 日志查询上下文，查询下一页的时候需要回传这个字段，该字段来自本接口的返回
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 过滤条件
注意: 
1. Filter.Name：目前只支持Key（也就是按关键字过滤日志）
2. Filter.Values：表示过滤日志的关键字；Values为多个的时候表示同时满足
3. Filter. Negative和Filter. Fuzzy没有使用
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
        this.Service = 'Service' in params ? params.Service : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Context = 'Context' in params ? params.Context : null;

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
 * StopModelAccelerateTask请求参数结构体
 * @class
 */
class StopModelAccelerateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务ID
         * @type {string || null}
         */
        this.ModelAccTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelAccTaskId = 'ModelAccTaskId' in params ? params.ModelAccTaskId : null;

    }
}

/**
 * DeleteTrainingModelVersion返回参数结构体
 * @class
 */
class DeleteTrainingModelVersionResponse extends  AbstractModel {
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
 * 跑批任务详情
 * @class
 */
class BatchTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跑批任务ID
         * @type {string || null}
         */
        this.BatchTaskId = null;

        /**
         * 跑批任务名称
         * @type {string || null}
         */
        this.BatchTaskName = null;

        /**
         * 主账号uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 子账号uin
         * @type {string || null}
         */
        this.SubUin = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 计费模式
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 预付费专用资源组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 预付费专用资源组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * 资源配置
         * @type {ResourceConfigInfo || null}
         */
        this.ResourceConfigInfo = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 服务对应的模型信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ModelInfo || null}
         */
        this.ModelInfo = null;

        /**
         * 自定义镜像信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 代码包
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosPathInfo || null}
         */
        this.CodePackagePath = null;

        /**
         * 启动命令
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartCmd = null;

        /**
         * 输入数据配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataConfig> || null}
         */
        this.DataConfigs = null;

        /**
         * 输出数据配置
         * @type {Array.<DataConfig> || null}
         */
        this.Outputs = null;

        /**
         * 是否上报日志
         * @type {boolean || null}
         */
        this.LogEnable = null;

        /**
         * 日志配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LogConfig || null}
         */
        this.LogConfig = null;

        /**
         * vpc id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 任务状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuntimeInSeconds = null;

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
         * 任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中
         * @type {string || null}
         */
        this.ChargeStatus = null;

        /**
         * 最近一次实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestInstanceId = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * 计费金额信息，eg：2.00元/小时 (for后付费)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillingInfo = null;

        /**
         * 运行中的Pod的名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PodList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTaskId = 'BatchTaskId' in params ? params.BatchTaskId : null;
        this.BatchTaskName = 'BatchTaskName' in params ? params.BatchTaskName : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;

        if (params.ResourceConfigInfo) {
            let obj = new ResourceConfigInfo();
            obj.deserialize(params.ResourceConfigInfo)
            this.ResourceConfigInfo = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.ModelInfo) {
            let obj = new ModelInfo();
            obj.deserialize(params.ModelInfo)
            this.ModelInfo = obj;
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.CodePackagePath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.CodePackagePath)
            this.CodePackagePath = obj;
        }
        this.StartCmd = 'StartCmd' in params ? params.StartCmd : null;

        if (params.DataConfigs) {
            this.DataConfigs = new Array();
            for (let z in params.DataConfigs) {
                let obj = new DataConfig();
                obj.deserialize(params.DataConfigs[z]);
                this.DataConfigs.push(obj);
            }
        }

        if (params.Outputs) {
            this.Outputs = new Array();
            for (let z in params.Outputs) {
                let obj = new DataConfig();
                obj.deserialize(params.Outputs[z]);
                this.Outputs.push(obj);
            }
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;

        if (params.LogConfig) {
            let obj = new LogConfig();
            obj.deserialize(params.LogConfig)
            this.LogConfig = obj;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuntimeInSeconds = 'RuntimeInSeconds' in params ? params.RuntimeInSeconds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.LatestInstanceId = 'LatestInstanceId' in params ? params.LatestInstanceId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.BillingInfo = 'BillingInfo' in params ? params.BillingInfo : null;
        this.PodList = 'PodList' in params ? params.PodList : null;

    }
}

/**
 * StartTrainingTask请求参数结构体
 * @class
 */
class StartTrainingTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务ID
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
 * DescribeDatasetDetailStructured返回参数结构体
 * @class
 */
class DescribeDatasetDetailStructuredResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格头信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnNames = null;

        /**
         * 表格内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RowItem> || null}
         */
        this.RowItems = null;

        /**
         * 文本内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RowTexts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ColumnNames = 'ColumnNames' in params ? params.ColumnNames : null;

        if (params.RowItems) {
            this.RowItems = new Array();
            for (let z in params.RowItems) {
                let obj = new RowItem();
                obj.deserialize(params.RowItems[z]);
                this.RowItems.push(obj);
            }
        }
        this.RowTexts = 'RowTexts' in params ? params.RowTexts : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyServiceGroupWeights返回参数结构体
 * @class
 */
class ModifyServiceGroupWeightsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新权重后的服务组信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceGroup || null}
         */
        this.ServiceGroup = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceGroup) {
            let obj = new ServiceGroup();
            obj.deserialize(params.ServiceGroup)
            this.ServiceGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartModelAccelerateTask请求参数结构体
 * @class
 */
class RestartModelAccelerateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务ID
         * @type {string || null}
         */
        this.ModelAccTaskId = null;

        /**
         * 模型加速任务名称
         * @type {string || null}
         */
        this.ModelAccTaskName = null;

        /**
         * 模型来源（JOB/COS）
         * @type {string || null}
         */
        this.ModelSource = null;

        /**
         * 算法框架（废弃）
         * @type {string || null}
         */
        this.AlgorithmFramework = null;

        /**
         * 模型ID
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 模型名称
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * 模型版本
         * @type {string || null}
         */
        this.ModelVersion = null;

        /**
         * 模型输入cos路径
         * @type {CosPathInfo || null}
         */
        this.ModelInputPath = null;

        /**
         * 优化级别（NO_LOSS/FP16/INT8），默认FP16
         * @type {string || null}
         */
        this.OptimizationLevel = null;

        /**
         * input节点个数（废弃）
         * @type {number || null}
         */
        this.ModelInputNum = null;

        /**
         * input节点信息（废弃）
         * @type {Array.<ModelInputInfo> || null}
         */
        this.ModelInputInfos = null;

        /**
         * 模型输出cos路径
         * @type {CosPathInfo || null}
         */
        this.ModelOutputPath = null;

        /**
         * 模型格式（TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/MMDETECTION/ONNX/HUGGING_FACE）
         * @type {string || null}
         */
        this.ModelFormat = null;

        /**
         * 模型Tensor信息
         * @type {Array.<string> || null}
         */
        this.TensorInfos = null;

        /**
         * GPU类型（T4/V100/A10），默认T4
         * @type {string || null}
         */
        this.GPUType = null;

        /**
         * 模型专业参数
         * @type {HyperParameter || null}
         */
        this.HyperParameter = null;

        /**
         * 加速引擎版本
         * @type {string || null}
         */
        this.AccEngineVersion = null;

        /**
         * 标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * SavedModel保存时配置的签名
         * @type {string || null}
         */
        this.ModelSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelAccTaskId = 'ModelAccTaskId' in params ? params.ModelAccTaskId : null;
        this.ModelAccTaskName = 'ModelAccTaskName' in params ? params.ModelAccTaskName : null;
        this.ModelSource = 'ModelSource' in params ? params.ModelSource : null;
        this.AlgorithmFramework = 'AlgorithmFramework' in params ? params.AlgorithmFramework : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.ModelVersion = 'ModelVersion' in params ? params.ModelVersion : null;

        if (params.ModelInputPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.ModelInputPath)
            this.ModelInputPath = obj;
        }
        this.OptimizationLevel = 'OptimizationLevel' in params ? params.OptimizationLevel : null;
        this.ModelInputNum = 'ModelInputNum' in params ? params.ModelInputNum : null;

        if (params.ModelInputInfos) {
            this.ModelInputInfos = new Array();
            for (let z in params.ModelInputInfos) {
                let obj = new ModelInputInfo();
                obj.deserialize(params.ModelInputInfos[z]);
                this.ModelInputInfos.push(obj);
            }
        }

        if (params.ModelOutputPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.ModelOutputPath)
            this.ModelOutputPath = obj;
        }
        this.ModelFormat = 'ModelFormat' in params ? params.ModelFormat : null;
        this.TensorInfos = 'TensorInfos' in params ? params.TensorInfos : null;
        this.GPUType = 'GPUType' in params ? params.GPUType : null;

        if (params.HyperParameter) {
            let obj = new HyperParameter();
            obj.deserialize(params.HyperParameter)
            this.HyperParameter = obj;
        }
        this.AccEngineVersion = 'AccEngineVersion' in params ? params.AccEngineVersion : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ModelSignature = 'ModelSignature' in params ? params.ModelSignature : null;

    }
}

/**
 * DescribeBillingResourceGroups请求参数结构体
 * @class
 */
class DescribeBillingResourceGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源组类型; 枚举值 TRAIN:训练 INFERENCE:推理
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Filter.Name: 枚举值: ResourceGroupId (资源组id列表)
                    ResourceGroupName (资源组名称列表)
Filter.Values: 长度为1且Filter.Fuzzy=true时，支持模糊查询; 不为1时，精确查询
每次请求的Filters的上限为5，Filter.Values的上限为100
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 标签过滤
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * 偏移量，默认为0；分页查询起始位置，如：Limit为100，第一页Offset为0，第二页OffSet为100....即每页左边为闭区间
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为30;
注意：小于0则默认为20；大于30则默认为30
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 支持模糊查找资源组id和资源组名
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 是否不展示节点列表; 
true: 不展示，false 展示；
默认为false
         * @type {boolean || null}
         */
        this.DontShowInstanceSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.DontShowInstanceSet = 'DontShowInstanceSet' in params ? params.DontShowInstanceSet : null;

    }
}

/**
 * DescribeTrainingFrameworks返回参数结构体
 * @class
 */
class DescribeTrainingFrameworksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 框架信息列表
         * @type {Array.<FrameworkInfo> || null}
         */
        this.FrameworkInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FrameworkInfos) {
            this.FrameworkInfos = new Array();
            for (let z in params.FrameworkInfos) {
                let obj = new FrameworkInfo();
                obj.deserialize(params.FrameworkInfos[z]);
                this.FrameworkInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModelServiceGroup请求参数结构体
 * @class
 */
class DescribeModelServiceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务组ID
         * @type {string || null}
         */
        this.ServiceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;

    }
}

/**
 * 训练指标
 * @class
 */
class TrainingMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 数据值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TrainingDataPoint> || null}
         */
        this.Values = null;

        /**
         * 上报的Epoch. 可能为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TrainingDataPoint> || null}
         */
        this.Epochs = null;

        /**
         * 上报的Step. 可能为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TrainingDataPoint> || null}
         */
        this.Steps = null;

        /**
         * 上报的TotalSteps. 可能为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TrainingDataPoint> || null}
         */
        this.TotalSteps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new TrainingDataPoint();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }

        if (params.Epochs) {
            this.Epochs = new Array();
            for (let z in params.Epochs) {
                let obj = new TrainingDataPoint();
                obj.deserialize(params.Epochs[z]);
                this.Epochs.push(obj);
            }
        }

        if (params.Steps) {
            this.Steps = new Array();
            for (let z in params.Steps) {
                let obj = new TrainingDataPoint();
                obj.deserialize(params.Steps[z]);
                this.Steps.push(obj);
            }
        }

        if (params.TotalSteps) {
            this.TotalSteps = new Array();
            for (let z in params.TotalSteps) {
                let obj = new TrainingDataPoint();
                obj.deserialize(params.TotalSteps[z]);
                this.TotalSteps.push(obj);
            }
        }

    }
}

/**
 * DescribeTrainingModelVersions请求参数结构体
 * @class
 */
class DescribeTrainingModelVersionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型ID
         * @type {string || null}
         */
        this.TrainingModelId = null;

        /**
         * 过滤条件
Filter.Name: 枚举值:
    TrainingModelVersionId (模型版本ID)
    ModelVersionType (模型版本类型) 其值支持: NORMAL(通用) ACCELERATE (加速)
    ModelFormat（模型格式）其值Filter.Values支持：
TORCH_SCRIPT/PYTORCH/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML
    AlgorithmFramework (算法框架) 其值Filter.Values支持：TENSORFLOW/PYTORCH/DETECTRON2
Filter.Values: 当长度为1时，支持模糊查询; 不为1时，精确查询
每次请求的Filters的上限为10，Filter.Values的上限为100
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
        this.TrainingModelId = 'TrainingModelId' in params ? params.TrainingModelId : null;

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
 * 计费项询价单元
 * @class
 */
class SpecUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费项名称
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 计费项数量,建议不超过100万
         * @type {number || null}
         */
        this.SpecCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.SpecCount = 'SpecCount' in params ? params.SpecCount : null;

    }
}

/**
 * CreateDataset返回参数结构体
 * @class
 */
class CreateDatasetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasetId = 'DatasetId' in params ? params.DatasetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述在线服务
 * @class
 */
class Service extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务组id
         * @type {string || null}
         */
        this.ServiceGroupId = null;

        /**
         * 服务id
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 服务组名
         * @type {string || null}
         */
        this.ServiceGroupName = null;

        /**
         * 服务描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceDescription = null;

        /**
         * 集群id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 付费类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 后付费资源组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 创建者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedBy = null;

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
        this.SubUin = null;

        /**
         * app_id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 服务组下服务的最高版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestVersion = null;

        /**
         * 服务的详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceInfo || null}
         */
        this.ServiceInfo = null;

        /**
         * 服务的业务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessStatus = null;

        /**
         * 服务的创建来源
AUTO_ML: 来自自动学习的一键发布
DEFAULT: 其他来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateSource = null;

        /**
         * 费用信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillingInfo = null;

        /**
         * 服务状态
CREATING 创建中
CREATE_FAILED 创建失败
Normal	正常运行中
Stopped  已停止
Stopping 停止中
Abnormal 异常
Pending 启动中
Waiting 就绪中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 模型权重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 服务所在的 ingress 的 name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IngressName = null;

        /**
         * 服务限速限流相关配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceLimit || null}
         */
        this.ServiceLimit = null;

        /**
         * 定时停止的配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScheduledAction || null}
         */
        this.ScheduledAction = null;

        /**
         * 服务创建失败的原因，创建成功后该字段为默认值 CREATE_SUCCEED
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateFailedReason = null;

        /**
         * 预付费服务对应的资源组名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * 服务的标签
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceGroupName = 'ServiceGroupName' in params ? params.ServiceGroupName : null;
        this.ServiceDescription = 'ServiceDescription' in params ? params.ServiceDescription : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.CreatedBy = 'CreatedBy' in params ? params.CreatedBy : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LatestVersion = 'LatestVersion' in params ? params.LatestVersion : null;

        if (params.ServiceInfo) {
            let obj = new ServiceInfo();
            obj.deserialize(params.ServiceInfo)
            this.ServiceInfo = obj;
        }
        this.BusinessStatus = 'BusinessStatus' in params ? params.BusinessStatus : null;
        this.CreateSource = 'CreateSource' in params ? params.CreateSource : null;
        this.BillingInfo = 'BillingInfo' in params ? params.BillingInfo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.IngressName = 'IngressName' in params ? params.IngressName : null;

        if (params.ServiceLimit) {
            let obj = new ServiceLimit();
            obj.deserialize(params.ServiceLimit)
            this.ServiceLimit = obj;
        }

        if (params.ScheduledAction) {
            let obj = new ScheduledAction();
            obj.deserialize(params.ScheduledAction)
            this.ScheduledAction = obj;
        }
        this.CreateFailedReason = 'CreateFailedReason' in params ? params.CreateFailedReason : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;

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
 * 模型专业参数
 * @class
 */
class HyperParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最大nnz数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MaxNNZ = null;

        /**
         * slot数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlotNum = null;

        /**
         * gpu cache 使用率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuCachePercentage = null;

        /**
         * cpu cache 使用率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GpuCachePercentage = null;

        /**
         * 是否开启分布式模式(true/false)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnableDistributed = null;

        /**
         * TORCH_SCRIPT、MMDETECTION、DETECTRON2、HUGGINGFACE格式在进行优化时切分子图的最小算子数目，一般无需进行改动，默认为3
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MinBlockSizePt = null;

        /**
         * FROZEN_GRAPH、SAVED_MODEL格式在进行优化时切分子图的最小算子数目，一般无需进行改动，默认为10
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MinBlockSizeTf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxNNZ = 'MaxNNZ' in params ? params.MaxNNZ : null;
        this.SlotNum = 'SlotNum' in params ? params.SlotNum : null;
        this.CpuCachePercentage = 'CpuCachePercentage' in params ? params.CpuCachePercentage : null;
        this.GpuCachePercentage = 'GpuCachePercentage' in params ? params.GpuCachePercentage : null;
        this.EnableDistributed = 'EnableDistributed' in params ? params.EnableDistributed : null;
        this.MinBlockSizePt = 'MinBlockSizePt' in params ? params.MinBlockSizePt : null;
        this.MinBlockSizeTf = 'MinBlockSizeTf' in params ? params.MinBlockSizeTf : null;

    }
}

/**
 * ModifyServiceGroupWeights请求参数结构体
 * @class
 */
class ModifyServiceGroupWeightsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务组id
         * @type {string || null}
         */
        this.ServiceGroupId = null;

        /**
         * 权重设置
         * @type {Array.<WeightEntry> || null}
         */
        this.Weights = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;

        if (params.Weights) {
            this.Weights = new Array();
            for (let z in params.Weights) {
                let obj = new WeightEntry();
                obj.deserialize(params.Weights[z]);
                this.Weights.push(obj);
            }
        }

    }
}

/**
 * DescribeTrainingTasks请求参数结构体
 * @class
 */
class DescribeTrainingTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤器，eg：[{ "Name": "Id", "Values": ["train-23091792777383936"] }]

取值范围：
Name（名称）：task1
Id（task ID）：train-23091792777383936
Status（状态）：STARTING / RUNNING / STOPPING / STOPPED / FAILED / SUCCEED / SUBMIT_FAILED
ChargeType（计费类型）：PREPAID（预付费）/ POSTPAID_BY_HOUR（后付费）
CHARGE_STATUS（计费状态）：NOT_BILLING（未开始计费）/ BILLING（计费中）/ ARREARS_STOP（欠费停止）
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 标签过滤器，eg：[{ "TagKey": "TagKeyA", "TagValue": ["TagValueA"] }]
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大为50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出列表的排列顺序。取值范围：ASC（升序排列）/ DESC（降序排列），默认为DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CreateTime" "UpdateTime"
         * @type {string || null}
         */
        this.OrderField = null;

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

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * DescribeBatchTask请求参数结构体
 * @class
 */
class DescribeBatchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跑批任务ID
         * @type {string || null}
         */
        this.BatchTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTaskId = 'BatchTaskId' in params ? params.BatchTaskId : null;

    }
}

/**
 * DescribeDatasetDetailUnstructured请求参数结构体
 * @class
 */
class DescribeDatasetDetailUnstructuredRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集ID
         * @type {string || null}
         */
        this.DatasetId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回个数，默认20，目前最大支持2000条数据
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签过滤参数，对应标签值
         * @type {Array.<string> || null}
         */
        this.LabelList = null;

        /**
         * 标注状态过滤参数:
STATUS_ANNOTATED，已标注
STATUS_NON_ANNOTATED，未标注
STATUS_ALL，全部
默认为STATUS_ALL
         * @type {string || null}
         */
        this.AnnotationStatus = null;

        /**
         * 数据集ID列表
         * @type {Array.<string> || null}
         */
        this.DatasetIds = null;

        /**
         * 要筛选的文本分类场景标签信息
         * @type {Array.<TextLabelDistributionInfo> || null}
         */
        this.TextClassificationLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasetId = 'DatasetId' in params ? params.DatasetId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.LabelList = 'LabelList' in params ? params.LabelList : null;
        this.AnnotationStatus = 'AnnotationStatus' in params ? params.AnnotationStatus : null;
        this.DatasetIds = 'DatasetIds' in params ? params.DatasetIds : null;

        if (params.TextClassificationLabels) {
            this.TextClassificationLabels = new Array();
            for (let z in params.TextClassificationLabels) {
                let obj = new TextLabelDistributionInfo();
                obj.deserialize(params.TextClassificationLabels[z]);
                this.TextClassificationLabels.push(obj);
            }
        }

    }
}

/**
 * 外部挂载信息
 * @class
 */
class VolumeMount extends  AbstractModel {
    constructor(){
        super();

        /**
         * cfs的配置信息
         * @type {CFSConfig || null}
         */
        this.CFSConfig = null;

        /**
         * 挂载源类型
         * @type {string || null}
         */
        this.VolumeSourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CFSConfig) {
            let obj = new CFSConfig();
            obj.deserialize(params.CFSConfig)
            this.CFSConfig = obj;
        }
        this.VolumeSourceType = 'VolumeSourceType' in params ? params.VolumeSourceType : null;

    }
}

/**
 * StopBatchTask返回参数结构体
 * @class
 */
class StopBatchTaskResponse extends  AbstractModel {
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
 * 服务的调用信息，服务组下唯一
 * @class
 */
class ServiceCallInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceGroupId = null;

        /**
         * 内网http调用地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InnerHttpAddr = null;

        /**
         * 内网https调用地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InnerHttpsAddr = null;

        /**
         * 内网http调用地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OuterHttpAddr = null;

        /**
         * 内网https调用地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OuterHttpsAddr = null;

        /**
         * 调用key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppKey = null;

        /**
         * 调用secret
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppSecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;
        this.InnerHttpAddr = 'InnerHttpAddr' in params ? params.InnerHttpAddr : null;
        this.InnerHttpsAddr = 'InnerHttpsAddr' in params ? params.InnerHttpsAddr : null;
        this.OuterHttpAddr = 'OuterHttpAddr' in params ? params.OuterHttpAddr : null;
        this.OuterHttpsAddr = 'OuterHttpsAddr' in params ? params.OuterHttpsAddr : null;
        this.AppKey = 'AppKey' in params ? params.AppKey : null;
        this.AppSecret = 'AppSecret' in params ? params.AppSecret : null;

    }
}

/**
 * cos的路径信息
 * @class
 */
class CosPathInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储桶
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 所在地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 路径列表，目前只支持单个
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Paths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Paths = 'Paths' in params ? params.Paths : null;

    }
}

/**
 * DescribeBillingResourceGroups返回参数结构体
 * @class
 */
class DescribeBillingResourceGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源组总数； 注意接口是分页拉取的，total是指资源组总数，不是本次返回中ResourceGroupSet数组的大小
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资源组详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResourceGroup> || null}
         */
        this.ResourceGroupSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ResourceGroupSet) {
            this.ResourceGroupSet = new Array();
            for (let z in params.ResourceGroupSet) {
                let obj = new ResourceGroup();
                obj.deserialize(params.ResourceGroupSet[z]);
                this.ResourceGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 计费项询价结果
 * @class
 */
class SpecPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费项名称
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 原价，单位：分。最大值42亿，超过则返回0
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * 优惠后的价格，单位：分
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * 计费项数量
         * @type {number || null}
         */
        this.SpecCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.SpecCount = 'SpecCount' in params ? params.SpecCount : null;

    }
}

/**
 * DescribeTrainingMetrics请求参数结构体
 * @class
 */
class DescribeTrainingMetricsRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeTrainingTaskPods请求参数结构体
 * @class
 */
class DescribeTrainingTaskPodsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务ID
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
 * CreateBatchTask请求参数结构体
 * @class
 */
class CreateBatchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跑批任务名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
         * @type {string || null}
         */
        this.BatchTaskName = null;

        /**
         * 计费模式，eg：PREPAID预付费，即包年包月；POSTPAID_BY_HOUR按小时后付费
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 资源配置
         * @type {ResourceConfigInfo || null}
         */
        this.ResourceConfigInfo = null;

        /**
         * 结果输出
         * @type {Array.<DataConfig> || null}
         */
        this.Outputs = null;

        /**
         * 是否上报日志
         * @type {boolean || null}
         */
        this.LogEnable = null;

        /**
         * 工作类型 1:单次 2:周期
         * @type {number || null}
         */
        this.JobType = null;

        /**
         * 任务周期描述
         * @type {CronInfo || null}
         */
        this.CronInfo = null;

        /**
         * 预付费专用资源组
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 标签配置
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 服务对应的模型信息，有模型文件时需要填写
         * @type {ModelInfo || null}
         */
        this.ModelInfo = null;

        /**
         * 自定义镜像信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 代码包
         * @type {CosPathInfo || null}
         */
        this.CodePackage = null;

        /**
         * 启动命令
         * @type {string || null}
         */
        this.StartCmd = null;

        /**
         * 数据配置
         * @type {Array.<DataConfig> || null}
         */
        this.DataConfigs = null;

        /**
         * 日志配置
         * @type {LogConfig || null}
         */
        this.LogConfig = null;

        /**
         * VPC Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 任务执行结果回调URL，仅支持http和https。回调格式&内容详见: [TI-ONE 接口回调说明](https://cloud.tencent.com/document/product/851/84292)
         * @type {string || null}
         */
        this.CallbackUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTaskName = 'BatchTaskName' in params ? params.BatchTaskName : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

        if (params.ResourceConfigInfo) {
            let obj = new ResourceConfigInfo();
            obj.deserialize(params.ResourceConfigInfo)
            this.ResourceConfigInfo = obj;
        }

        if (params.Outputs) {
            this.Outputs = new Array();
            for (let z in params.Outputs) {
                let obj = new DataConfig();
                obj.deserialize(params.Outputs[z]);
                this.Outputs.push(obj);
            }
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;
        this.JobType = 'JobType' in params ? params.JobType : null;

        if (params.CronInfo) {
            let obj = new CronInfo();
            obj.deserialize(params.CronInfo)
            this.CronInfo = obj;
        }
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.ModelInfo) {
            let obj = new ModelInfo();
            obj.deserialize(params.ModelInfo)
            this.ModelInfo = obj;
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.CodePackage) {
            let obj = new CosPathInfo();
            obj.deserialize(params.CodePackage)
            this.CodePackage = obj;
        }
        this.StartCmd = 'StartCmd' in params ? params.StartCmd : null;

        if (params.DataConfigs) {
            this.DataConfigs = new Array();
            for (let z in params.DataConfigs) {
                let obj = new DataConfig();
                obj.deserialize(params.DataConfigs[z]);
                this.DataConfigs.push(obj);
            }
        }

        if (params.LogConfig) {
            let obj = new LogConfig();
            obj.deserialize(params.LogConfig)
            this.LogConfig = obj;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * DescribeLatestTrainingMetrics返回参数结构体
 * @class
 */
class DescribeLatestTrainingMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 最近一次上报的训练指标.每个Metric中只有一个点的数据, 即len(Values) = len(Timestamps) = 1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TrainingMetric> || null}
         */
        this.Metrics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new TrainingMetric();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatasetDetailUnstructured返回参数结构体
 * @class
 */
class DescribeDatasetDetailUnstructuredResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已标注数据量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AnnotatedTotalCount = null;

        /**
         * 没有标注数据量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NonAnnotatedTotalCount = null;

        /**
         * 过滤数据总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FilterTotalCount = null;

        /**
         * 过滤数据详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FilterLabelInfo> || null}
         */
        this.FilterLabelList = null;

        /**
         * 数据文本行，默认返回前1000行
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RowTexts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnnotatedTotalCount = 'AnnotatedTotalCount' in params ? params.AnnotatedTotalCount : null;
        this.NonAnnotatedTotalCount = 'NonAnnotatedTotalCount' in params ? params.NonAnnotatedTotalCount : null;
        this.FilterTotalCount = 'FilterTotalCount' in params ? params.FilterTotalCount : null;

        if (params.FilterLabelList) {
            this.FilterLabelList = new Array();
            for (let z in params.FilterLabelList) {
                let obj = new FilterLabelInfo();
                obj.deserialize(params.FilterLabelList[z]);
                this.FilterLabelList.push(obj);
            }
        }
        this.RowTexts = 'RowTexts' in params ? params.RowTexts : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图片列表查询结果详情
 * @class
 */
class FilterLabelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集id
         * @type {string || null}
         */
        this.DatasetId = null;

        /**
         * 文件ID
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 文件路径
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 分类标签结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ClassificationLabels = null;

        /**
         * 检测标签结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectionLabelInfo> || null}
         */
        this.DetectionLabels = null;

        /**
         * 分割标签结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SegmentationInfo> || null}
         */
        this.SegmentationLabels = null;

        /**
         * RGB 图片路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RGBPath = null;

        /**
         * 标签模板类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LabelTemplateType = null;

        /**
         * 下载url链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 缩略图下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadThumbnailUrl = null;

        /**
         * 分割结果图片下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadRGBUrl = null;

        /**
         * OCR场景
IDENTITY：识别
STRUCTURE：智能结构化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrScene = null;

        /**
         * OCR场景标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OcrLabelInfo> || null}
         */
        this.OcrLabels = null;

        /**
         * OCR场景标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrLabelInfo = null;

        /**
         * 文本分类场景标签结果，内容是json结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TextClassificationLabelList = null;

        /**
         * 文本内容，返回50字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RowText = null;

        /**
         * 文本内容是否完全返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ContentOmit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasetId = 'DatasetId' in params ? params.DatasetId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.ClassificationLabels = 'ClassificationLabels' in params ? params.ClassificationLabels : null;

        if (params.DetectionLabels) {
            this.DetectionLabels = new Array();
            for (let z in params.DetectionLabels) {
                let obj = new DetectionLabelInfo();
                obj.deserialize(params.DetectionLabels[z]);
                this.DetectionLabels.push(obj);
            }
        }

        if (params.SegmentationLabels) {
            this.SegmentationLabels = new Array();
            for (let z in params.SegmentationLabels) {
                let obj = new SegmentationInfo();
                obj.deserialize(params.SegmentationLabels[z]);
                this.SegmentationLabels.push(obj);
            }
        }
        this.RGBPath = 'RGBPath' in params ? params.RGBPath : null;
        this.LabelTemplateType = 'LabelTemplateType' in params ? params.LabelTemplateType : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.DownloadThumbnailUrl = 'DownloadThumbnailUrl' in params ? params.DownloadThumbnailUrl : null;
        this.DownloadRGBUrl = 'DownloadRGBUrl' in params ? params.DownloadRGBUrl : null;
        this.OcrScene = 'OcrScene' in params ? params.OcrScene : null;

        if (params.OcrLabels) {
            this.OcrLabels = new Array();
            for (let z in params.OcrLabels) {
                let obj = new OcrLabelInfo();
                obj.deserialize(params.OcrLabels[z]);
                this.OcrLabels.push(obj);
            }
        }
        this.OcrLabelInfo = 'OcrLabelInfo' in params ? params.OcrLabelInfo : null;
        this.TextClassificationLabelList = 'TextClassificationLabelList' in params ? params.TextClassificationLabelList : null;
        this.RowText = 'RowText' in params ? params.RowText : null;
        this.ContentOmit = 'ContentOmit' in params ? params.ContentOmit : null;

    }
}

/**
 * 工作负载的状态
 * @class
 */
class WorkloadStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前实例数
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 更新的实例数
         * @type {number || null}
         */
        this.UpdatedReplicas = null;

        /**
         * 就绪的实例数
         * @type {number || null}
         */
        this.ReadyReplicas = null;

        /**
         * 可用的实例数
         * @type {number || null}
         */
        this.AvailableReplicas = null;

        /**
         * 不可用的实例数
         * @type {number || null}
         */
        this.UnavailableReplicas = null;

        /**
         * Normal	正常运行中
Abnormal	服务异常，例如容器启动失败等
Waiting	服务等待中，例如容器下载镜像过程等
Stopped   已停止 
Pending 启动中
Stopping 停止中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 工作负载的状况信息
         * @type {Array.<StatefulSetCondition> || null}
         */
        this.StatefulSetCondition = null;

        /**
         * 工作负载历史的状况信息
         * @type {Array.<StatefulSetCondition> || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.UpdatedReplicas = 'UpdatedReplicas' in params ? params.UpdatedReplicas : null;
        this.ReadyReplicas = 'ReadyReplicas' in params ? params.ReadyReplicas : null;
        this.AvailableReplicas = 'AvailableReplicas' in params ? params.AvailableReplicas : null;
        this.UnavailableReplicas = 'UnavailableReplicas' in params ? params.UnavailableReplicas : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.StatefulSetCondition) {
            this.StatefulSetCondition = new Array();
            for (let z in params.StatefulSetCondition) {
                let obj = new StatefulSetCondition();
                obj.deserialize(params.StatefulSetCondition[z]);
                this.StatefulSetCondition.push(obj);
            }
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new StatefulSetCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

    }
}

/**
 * CFS存储的配置
 * @class
 */
class CFSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * cfs的实例的ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 存储的路径
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * 接口描述信息
 * @class
 */
class APIConfigDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 接口所属服务组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceGroupId = null;

        /**
         * 接口描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 相对路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelativeUrl = null;

        /**
         * 服务类型 HTTP HTTPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * GET POST
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpMethod = null;

        /**
         * 请求示例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpInputExample = null;

        /**
         * 回包示例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpOutputExample = null;

        /**
         * 更新成员
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedBy = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 主账号uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 子账号subuin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RelativeUrl = 'RelativeUrl' in params ? params.RelativeUrl : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.HttpMethod = 'HttpMethod' in params ? params.HttpMethod : null;
        this.HttpInputExample = 'HttpInputExample' in params ? params.HttpInputExample : null;
        this.HttpOutputExample = 'HttpOutputExample' in params ? params.HttpOutputExample : null;
        this.UpdatedBy = 'UpdatedBy' in params ? params.UpdatedBy : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;

    }
}

/**
 * 推理镜像详情
 * @class
 */
class InferTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {string || null}
         */
        this.InferTemplateId = null;

        /**
         * 模板镜像
         * @type {string || null}
         */
        this.InferTemplateImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InferTemplateId = 'InferTemplateId' in params ? params.InferTemplateId : null;
        this.InferTemplateImage = 'InferTemplateImage' in params ? params.InferTemplateImage : null;

    }
}

/**
 * StopBatchTask请求参数结构体
 * @class
 */
class StopBatchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跑批任务ID
         * @type {string || null}
         */
        this.BatchTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTaskId = 'BatchTaskId' in params ? params.BatchTaskId : null;

    }
}

/**
 * 容器状态
 * @class
 */
class ContainerStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 是否就绪
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Ready = null;

        /**
         * 状态原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 容器的错误信息
注意：此字段可能返回 null，表示取不到有效值。
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
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.State = 'State' in params ? params.State : null;
        this.Ready = 'Ready' in params ? params.Ready : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyModelService请求参数结构体
 * @class
 */
class ModifyModelServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 模型信息，需要挂载模型时填写
         * @type {ModelInfo || null}
         */
        this.ModelInfo = null;

        /**
         * 镜像信息，配置服务运行所需的镜像地址等信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 环境变量，可选参数，用于配置容器中的环境变量
         * @type {Array.<EnvVar> || null}
         */
        this.Env = null;

        /**
         * 资源描述，指定预付费模式下的cpu,mem,gpu等信息，后付费无需填写
         * @type {ResourceInfo || null}
         */
        this.Resources = null;

        /**
         * 使用DescribeBillingSpecs接口返回的规格列表中的值，或者参考实例列表:
TI.S.MEDIUM.POST	2C4G
TI.S.LARGE.POST	4C8G
TI.S.2XLARGE16.POST	8C16G
TI.S.2XLARGE32.POST	8C32G
TI.S.4XLARGE32.POST	16C32G
TI.S.4XLARGE64.POST	16C64G
TI.S.6XLARGE48.POST	24C48G
TI.S.6XLARGE96.POST	24C96G
TI.S.8XLARGE64.POST	32C64G
TI.S.8XLARGE128.POST 32C128G
TI.GN7.LARGE20.POST	4C20G T4*1/4
TI.GN7.2XLARGE40.POST	10C40G T4*1/2
TI.GN7.2XLARGE32.POST	8C32G T4*1
TI.GN7.5XLARGE80.POST	20C80G T4*1
TI.GN7.8XLARGE128.POST	32C128G T4*1
TI.GN7.10XLARGE160.POST	40C160G T4*2
TI.GN7.20XLARGE320.POST	80C320G T4*4
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 扩缩容类型 支持：自动 - "AUTO", 手动 - "MANUAL"
         * @type {string || null}
         */
        this.ScaleMode = null;

        /**
         * 实例数量, 不同计费模式和调节模式下对应关系如下
PREPAID 和 POSTPAID_BY_HOUR:
手动调节模式下对应 实例数量
自动调节模式下对应 基于时间的默认策略的实例数量
HYBRID_PAID:
后付费实例手动调节模式下对应 实例数量
后付费实例自动调节模式下对应 时间策略的默认策略的实例数量
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 自动伸缩信息
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * 是否开启日志投递，开启后需填写配置投递到指定cls
         * @type {boolean || null}
         */
        this.LogEnable = null;

        /**
         * 日志配置，需要投递服务日志到指定cls时填写
         * @type {LogConfig || null}
         */
        this.LogConfig = null;

        /**
         * 特殊更新行为： "STOP": 停止, "RESUME": 重启, "SCALE": 扩缩容, 存在这些特殊更新行为时，会忽略其他更新字段
         * @type {string || null}
         */
        this.ServiceAction = null;

        /**
         * 服务的描述
         * @type {string || null}
         */
        this.ServiceDescription = null;

        /**
         * 自动伸缩策略
         * @type {string || null}
         */
        this.ScaleStrategy = null;

        /**
         * 自动伸缩策略配置 HPA : 通过HPA进行弹性伸缩 CRON 通过定时任务进行伸缩
         * @type {Array.<CronScaleJob> || null}
         */
        this.CronScaleJobs = null;

        /**
         * 计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数, 若不填则默认为1
         * @type {number || null}
         */
        this.HybridBillingPrepaidReplicas = null;

        /**
         * 是否开启模型的热更新。默认不开启
         * @type {boolean || null}
         */
        this.ModelHotUpdateEnable = null;

        /**
         * 定时停止配置
         * @type {ScheduledAction || null}
         */
        this.ScheduledAction = null;

        /**
         * 服务限速限流相关配置
         * @type {ServiceLimit || null}
         */
        this.ServiceLimit = null;

        /**
         * 挂载配置，目前只支持CFS
         * @type {VolumeMount || null}
         */
        this.VolumeMount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

        if (params.ModelInfo) {
            let obj = new ModelInfo();
            obj.deserialize(params.ModelInfo)
            this.ModelInfo = obj;
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.Env) {
            this.Env = new Array();
            for (let z in params.Env) {
                let obj = new EnvVar();
                obj.deserialize(params.Env[z]);
                this.Env.push(obj);
            }
        }

        if (params.Resources) {
            let obj = new ResourceInfo();
            obj.deserialize(params.Resources)
            this.Resources = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ScaleMode = 'ScaleMode' in params ? params.ScaleMode : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;

        if (params.LogConfig) {
            let obj = new LogConfig();
            obj.deserialize(params.LogConfig)
            this.LogConfig = obj;
        }
        this.ServiceAction = 'ServiceAction' in params ? params.ServiceAction : null;
        this.ServiceDescription = 'ServiceDescription' in params ? params.ServiceDescription : null;
        this.ScaleStrategy = 'ScaleStrategy' in params ? params.ScaleStrategy : null;

        if (params.CronScaleJobs) {
            this.CronScaleJobs = new Array();
            for (let z in params.CronScaleJobs) {
                let obj = new CronScaleJob();
                obj.deserialize(params.CronScaleJobs[z]);
                this.CronScaleJobs.push(obj);
            }
        }
        this.HybridBillingPrepaidReplicas = 'HybridBillingPrepaidReplicas' in params ? params.HybridBillingPrepaidReplicas : null;
        this.ModelHotUpdateEnable = 'ModelHotUpdateEnable' in params ? params.ModelHotUpdateEnable : null;

        if (params.ScheduledAction) {
            let obj = new ScheduledAction();
            obj.deserialize(params.ScheduledAction)
            this.ScheduledAction = obj;
        }

        if (params.ServiceLimit) {
            let obj = new ServiceLimit();
            obj.deserialize(params.ServiceLimit)
            this.ServiceLimit = obj;
        }

        if (params.VolumeMount) {
            let obj = new VolumeMount();
            obj.deserialize(params.VolumeMount)
            this.VolumeMount = obj;
        }

    }
}

/**
 * 框架版本以及对应的训练模式
 * @class
 */
class FrameworkVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 框架版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 训练模式
         * @type {Array.<string> || null}
         */
        this.TrainingModes = null;

        /**
         * 框架运行环境
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.TrainingModes = 'TrainingModes' in params ? params.TrainingModes : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * ModifyModelServicePartialConfig返回参数结构体
 * @class
 */
class ModifyModelServicePartialConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被修改后的服务配置
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModelAccEngineVersions返回参数结构体
 * @class
 */
class DescribeModelAccEngineVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速版本列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ModelAccEngineVersion> || null}
         */
        this.ModelAccEngineVersions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModelAccEngineVersions) {
            this.ModelAccEngineVersions = new Array();
            for (let z in params.ModelAccEngineVersions) {
                let obj = new ModelAccEngineVersion();
                obj.deserialize(params.ModelAccEngineVersions[z]);
                this.ModelAccEngineVersions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModelServiceCallInfo请求参数结构体
 * @class
 */
class DescribeModelServiceCallInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务组id
         * @type {string || null}
         */
        this.ServiceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;

    }
}

/**
 * 数据点
 * @class
 */
class DataPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Tag过滤参数
 * @class
 */
class TagFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 多个标签值
         * @type {Array.<string> || null}
         */
        this.TagValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValues = 'TagValues' in params ? params.TagValues : null;

    }
}

/**
 * CreateTrainingModel请求参数结构体
 * @class
 */
class CreateTrainingModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导入方式
MODEL：导入新模型
VERSION：导入新版本
EXIST：导入现有版本
         * @type {string || null}
         */
        this.ImportMethod = null;

        /**
         * 模型来源cos目录，以/结尾
         * @type {CosPathInfo || null}
         */
        this.TrainingModelCosPath = null;

        /**
         * 推理环境来源（SYSTEM/CUSTOM）
         * @type {string || null}
         */
        this.ReasoningEnvironmentSource = null;

        /**
         * 模型名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
         * @type {string || null}
         */
        this.TrainingModelName = null;

        /**
         * 标签配置
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 训练任务名称
         * @type {string || null}
         */
        this.TrainingJobName = null;

        /**
         * 算法框架 （PYTORCH/TENSORFLOW/DETECTRON2/PMML/MMDETECTION)
         * @type {string || null}
         */
        this.AlgorithmFramework = null;

        /**
         * 推理环境
         * @type {string || null}
         */
        this.ReasoningEnvironment = null;

        /**
         * 训练指标，最多支持1000字符
         * @type {string || null}
         */
        this.TrainingModelIndex = null;

        /**
         * 模型版本
         * @type {string || null}
         */
        this.TrainingModelVersion = null;

        /**
         * 自定义推理环境
         * @type {ImageInfo || null}
         */
        this.ReasoningImageInfo = null;

        /**
         * 模型移动方式（CUT/COPY）
         * @type {string || null}
         */
        this.ModelMoveMode = null;

        /**
         * 训练任务ID
         * @type {string || null}
         */
        this.TrainingJobId = null;

        /**
         * 模型ID（导入新模型不需要，导入新版本需要）
         * @type {string || null}
         */
        this.TrainingModelId = null;

        /**
         * 模型存储cos目录
         * @type {CosPathInfo || null}
         */
        this.ModelOutputPath = null;

        /**
         * 模型来源 （JOB/COS）
         * @type {string || null}
         */
        this.TrainingModelSource = null;

        /**
         * 模型偏好
         * @type {string || null}
         */
        this.TrainingPreference = null;

        /**
         * 自动学习任务ID（已废弃）
         * @type {string || null}
         */
        this.AutoMLTaskId = null;

        /**
         * 任务版本
         * @type {string || null}
         */
        this.TrainingJobVersion = null;

        /**
         * 模型版本类型；
枚举值：NORMAL(通用)  ACCELERATE(加速)
注意:  默认为NORMAL
         * @type {string || null}
         */
        this.ModelVersionType = null;

        /**
         * 模型格式 （PYTORCH/TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML/MMDETECTION/ONNX/HUGGING_FACE）
         * @type {string || null}
         */
        this.ModelFormat = null;

        /**
         * 推理镜像ID
         * @type {string || null}
         */
        this.ReasoningEnvironmentId = null;

        /**
         * 模型自动清理开关(true/false)，当前版本仅支持SAVED_MODEL格式模型
         * @type {string || null}
         */
        this.AutoClean = null;

        /**
         * 模型数量保留上限(默认值为24个，上限为24，下限为1，步长为1)
         * @type {number || null}
         */
        this.MaxReservedModels = null;

        /**
         * 模型清理周期(默认值为1分钟，上限为1440，下限为1分钟，步长为1)
         * @type {number || null}
         */
        this.ModelCleanPeriod = null;

        /**
         * 是否QAT模型
         * @type {boolean || null}
         */
        this.IsQAT = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImportMethod = 'ImportMethod' in params ? params.ImportMethod : null;

        if (params.TrainingModelCosPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.TrainingModelCosPath)
            this.TrainingModelCosPath = obj;
        }
        this.ReasoningEnvironmentSource = 'ReasoningEnvironmentSource' in params ? params.ReasoningEnvironmentSource : null;
        this.TrainingModelName = 'TrainingModelName' in params ? params.TrainingModelName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TrainingJobName = 'TrainingJobName' in params ? params.TrainingJobName : null;
        this.AlgorithmFramework = 'AlgorithmFramework' in params ? params.AlgorithmFramework : null;
        this.ReasoningEnvironment = 'ReasoningEnvironment' in params ? params.ReasoningEnvironment : null;
        this.TrainingModelIndex = 'TrainingModelIndex' in params ? params.TrainingModelIndex : null;
        this.TrainingModelVersion = 'TrainingModelVersion' in params ? params.TrainingModelVersion : null;

        if (params.ReasoningImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ReasoningImageInfo)
            this.ReasoningImageInfo = obj;
        }
        this.ModelMoveMode = 'ModelMoveMode' in params ? params.ModelMoveMode : null;
        this.TrainingJobId = 'TrainingJobId' in params ? params.TrainingJobId : null;
        this.TrainingModelId = 'TrainingModelId' in params ? params.TrainingModelId : null;

        if (params.ModelOutputPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.ModelOutputPath)
            this.ModelOutputPath = obj;
        }
        this.TrainingModelSource = 'TrainingModelSource' in params ? params.TrainingModelSource : null;
        this.TrainingPreference = 'TrainingPreference' in params ? params.TrainingPreference : null;
        this.AutoMLTaskId = 'AutoMLTaskId' in params ? params.AutoMLTaskId : null;
        this.TrainingJobVersion = 'TrainingJobVersion' in params ? params.TrainingJobVersion : null;
        this.ModelVersionType = 'ModelVersionType' in params ? params.ModelVersionType : null;
        this.ModelFormat = 'ModelFormat' in params ? params.ModelFormat : null;
        this.ReasoningEnvironmentId = 'ReasoningEnvironmentId' in params ? params.ReasoningEnvironmentId : null;
        this.AutoClean = 'AutoClean' in params ? params.AutoClean : null;
        this.MaxReservedModels = 'MaxReservedModels' in params ? params.MaxReservedModels : null;
        this.ModelCleanPeriod = 'ModelCleanPeriod' in params ? params.ModelCleanPeriod : null;
        this.IsQAT = 'IsQAT' in params ? params.IsQAT : null;

    }
}

/**
 * 表格数据集表头信息
 * @class
 */
class SchemaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长度30字符内
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据类型
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
 * 启动命令信息
 * @class
 */
class StartCmdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启动命令
         * @type {string || null}
         */
        this.StartCmd = null;

        /**
         * ps启动命令
         * @type {string || null}
         */
        this.PsStartCmd = null;

        /**
         * worker启动命令
         * @type {string || null}
         */
        this.WorkerStartCmd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartCmd = 'StartCmd' in params ? params.StartCmd : null;
        this.PsStartCmd = 'PsStartCmd' in params ? params.PsStartCmd : null;
        this.WorkerStartCmd = 'WorkerStartCmd' in params ? params.WorkerStartCmd : null;

    }
}

/**
 * DescribeAPIConfigs请求参数结构体
 * @class
 */
class DescribeAPIConfigsRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CreateTime" "UpdateTime"
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 分页参数，支持的分页过滤Name包括：
["ClusterId", "ServiceId", "ServiceGroupName", "ServiceGroupId"]
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

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
 * DescribeModelServiceGroups返回参数结构体
 * @class
 */
class DescribeModelServiceGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推理服务组数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 服务组信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServiceGroup> || null}
         */
        this.ServiceGroups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ServiceGroups) {
            this.ServiceGroups = new Array();
            for (let z in params.ServiceGroups) {
                let obj = new ServiceGroup();
                obj.deserialize(params.ServiceGroups[z]);
                this.ServiceGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBatchTask请求参数结构体
 * @class
 */
class DeleteBatchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跑批任务ID
         * @type {string || null}
         */
        this.BatchTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTaskId = 'BatchTaskId' in params ? params.BatchTaskId : null;

    }
}

/**
 * DescribeTrainingModels返回参数结构体
 * @class
 */
class DescribeTrainingModelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型列表
         * @type {Array.<TrainingModelDTO> || null}
         */
        this.TrainingModels = null;

        /**
         * 模型总数
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

        if (params.TrainingModels) {
            this.TrainingModels = new Array();
            for (let z in params.TrainingModels) {
                let obj = new TrainingModelDTO();
                obj.deserialize(params.TrainingModels[z]);
                this.TrainingModels.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBatchTaskInstances返回参数结构体
 * @class
 */
class DescribeBatchTaskInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BatchTaskInstance> || null}
         */
        this.BatchInstances = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BatchInstances) {
            this.BatchInstances = new Array();
            for (let z in params.BatchInstances) {
                let obj = new BatchTaskInstance();
                obj.deserialize(params.BatchInstances[z]);
                this.BatchInstances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModelServices请求参数结构体
 * @class
 */
class DescribeModelServicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CreateTime" "UpdateTime"
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 分页参数，支持的分页过滤Name包括：
["ClusterId", "ServiceId", "ServiceGroupName", "ServiceGroupId","Status","CreatedBy","ModelId"]
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 标签过滤参数
         * @type {Array.<TagFilter> || null}
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
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * 模型加速引擎版本
 * @class
 */
class ModelAccEngineVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelFormat = null;

        /**
         * 引擎版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EngineVersion> || null}
         */
        this.EngineVersions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelFormat = 'ModelFormat' in params ? params.ModelFormat : null;

        if (params.EngineVersions) {
            this.EngineVersions = new Array();
            for (let z in params.EngineVersions) {
                let obj = new EngineVersion();
                obj.deserialize(params.EngineVersions[z]);
                this.EngineVersions.push(obj);
            }
        }

    }
}

/**
 * 资源配置
 * @class
 */
class ResourceConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色，eg：PS、WORKER、DRIVER、EXECUTOR
         * @type {string || null}
         */
        this.Role = null;

        /**
         * cpu核数，1000=1核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存，单位为MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * gpu卡类型
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * gpu数
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * 算力规格ID
计算规格 (for后付费)，可选值如下：
TI.S.LARGE.POST: 4C8G 
TI.S.2XLARGE16.POST:  8C16G 
TI.S.2XLARGE32.POST:  8C32G 
TI.S.4XLARGE32.POST:  16C32G
TI.S.4XLARGE64.POST:  16C64G
TI.S.6XLARGE48.POST:  24C48G
TI.S.6XLARGE96.POST:  24C96G
TI.S.8XLARGE64.POST:  32C64G
TI.S.8XLARGE128.POST : 32C128G
TI.GN10.2XLARGE40.POST: 8C40G V100*1 
TI.GN10.5XLARGE80.POST:  18C80G V100*2 
TI.GN10.10XLARGE160.POST :  32C160G V100*4
TI.GN10.20XLARGE320.POST :  72C320G V100*8
TI.GN7.8XLARGE128.POST: 32C128G T4*1 
TI.GN7.10XLARGE160.POST: 40C160G T4*2 
TI.GN7.20XLARGE320.POST: 80C32
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 计算节点数
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * 算力规格名称
计算规格 (for后付费)，可选值如下：
4C8G 
8C16G 
8C32G 
16C32G
6C64G
24C48G
24C96G
32C64G
32C128G
8C40G V100*1 
8C80G V100*2 
32C160G V100*4
72C320G V100*8
32C128G T4*1 
40C160G T4*2 
80C32
         * @type {string || null}
         */
        this.InstanceTypeAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.InstanceTypeAlias = 'InstanceTypeAlias' in params ? params.InstanceTypeAlias : null;

    }
}

/**
 * 计费项内容
 * @class
 */
class Spec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费项标签
         * @type {string || null}
         */
        this.SpecId = null;

        /**
         * 计费项名称
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 计费项显示名称
         * @type {string || null}
         */
        this.SpecAlias = null;

        /**
         * 是否售罄
         * @type {boolean || null}
         */
        this.Available = null;

        /**
         * 当前资源售罄时，可用的区域有哪些
         * @type {Array.<string> || null}
         */
        this.AvailableRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecId = 'SpecId' in params ? params.SpecId : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.SpecAlias = 'SpecAlias' in params ? params.SpecAlias : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.AvailableRegion = 'AvailableRegion' in params ? params.AvailableRegion : null;

    }
}

/**
 * 文本标签
 * @class
 */
class TextLabelDistributionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本分类题目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Theme = null;

        /**
         * 一级标签分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextLabelDistributionDetailInfoFirstClass> || null}
         */
        this.ClassLabelList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Theme = 'Theme' in params ? params.Theme : null;

        if (params.ClassLabelList) {
            this.ClassLabelList = new Array();
            for (let z in params.ClassLabelList) {
                let obj = new TextLabelDistributionDetailInfoFirstClass();
                obj.deserialize(params.ClassLabelList[z]);
                this.ClassLabelList.push(obj);
            }
        }

    }
}

/**
 * 键值对
 * @class
 */
class Option extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 指标值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 资源组
 * @class
 */
class ResourceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源组id
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 资源组名称
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * 可用节点个数(运行中的节点)
         * @type {number || null}
         */
        this.FreeInstance = null;

        /**
         * 总节点个数(所有节点)
         * @type {number || null}
         */
        this.TotalInstance = null;

        /**
         * 资资源组已用的资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GroupResource || null}
         */
        this.UsedResource = null;

        /**
         * 资源组总资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GroupResource || null}
         */
        this.TotalResource = null;

        /**
         * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

        /**
         * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;
        this.FreeInstance = 'FreeInstance' in params ? params.FreeInstance : null;
        this.TotalInstance = 'TotalInstance' in params ? params.TotalInstance : null;

        if (params.UsedResource) {
            let obj = new GroupResource();
            obj.deserialize(params.UsedResource)
            this.UsedResource = obj;
        }

        if (params.TotalResource) {
            let obj = new GroupResource();
            obj.deserialize(params.TotalResource)
            this.TotalResource = obj;
        }

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * DescribeBatchTaskInstances请求参数结构体
 * @class
 */
class DescribeBatchTaskInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跑批任务id
         * @type {string || null}
         */
        this.BatchTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTaskId = 'BatchTaskId' in params ? params.BatchTaskId : null;

    }
}

/**
 * DescribeModelServiceHistory请求参数结构体
 * @class
 */
class DescribeModelServiceHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务Id
         * @type {string || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * 描述腾讯云标签
 * @class
 */
class Tag extends  AbstractModel {
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
 * DescribeDatasets请求参数结构体
 * @class
 */
class DescribeDatasetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集id列表
         * @type {Array.<string> || null}
         */
        this.DatasetIds = null;

        /**
         * 数据集查询过滤条件，多个Filter之间的关系为逻辑与（AND）关系，过滤字段Filter.Name，类型为String
DatasetName，数据集名称
DatasetScope，数据集范围，SCOPE_DATASET_PRIVATE或SCOPE_DATASET_PUBLIC
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 标签过滤条件
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * 排序值，支持Asc或Desc，默认Desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段，支持CreateTime或UpdateTime，默认CreateTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据个数，默认20，最大支持200
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
        this.DatasetIds = 'DatasetIds' in params ? params.DatasetIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteTrainingModel返回参数结构体
 * @class
 */
class DeleteTrainingModelResponse extends  AbstractModel {
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
 * DescribeInferTemplates返回参数结构体
 * @class
 */
class DescribeInferTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InferTemplateGroup> || null}
         */
        this.FrameworkTemplates = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FrameworkTemplates) {
            this.FrameworkTemplates = new Array();
            for (let z in params.FrameworkTemplates) {
                let obj = new InferTemplateGroup();
                obj.deserialize(params.FrameworkTemplates[z]);
                this.FrameworkTemplates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillingSpecs请求参数结构体
 * @class
 */
class DescribeBillingSpecsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 枚举值：TRAIN、NOTEBOOK、INFERENCE
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 付费模式：POSTPAID_BY_HOUR后付费、PREPAID预付费
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 资源类型：CALC 计算资源、CPU CPU资源、GPU GPU资源、CBS云硬盘
         * @type {string || null}
         */
        this.ResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * 服务的调用信息，服务组下唯一
 * @class
 */
class InferGatewayCallInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网http调用地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcHttpAddr = null;

        /**
         * 内网https调用地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcHttpsAddr = null;

        /**
         * 内网grpc调用地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcGrpcTlsAddr = null;

        /**
         * 可访问的vpcid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 后端ip对应的子网
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcHttpAddr = 'VpcHttpAddr' in params ? params.VpcHttpAddr : null;
        this.VpcHttpsAddr = 'VpcHttpsAddr' in params ? params.VpcHttpsAddr : null;
        this.VpcGrpcTlsAddr = 'VpcGrpcTlsAddr' in params ? params.VpcGrpcTlsAddr : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeInferTemplates请求参数结构体
 * @class
 */
class DescribeInferTemplatesRequest extends  AbstractModel {
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
 * DeleteModelServiceGroup返回参数结构体
 * @class
 */
class DeleteModelServiceGroupResponse extends  AbstractModel {
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
 * gpu 详情
 * @class
 */
class GpuDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * GPU 显卡类型；枚举值: V100 A100 T4
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * GPU 显卡数；单位为1/100卡，比如100代表1卡
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeTrainingFrameworks请求参数结构体
 * @class
 */
class DescribeTrainingFrameworksRequest extends  AbstractModel {
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
 * DescribeBatchTasks返回参数结构体
 * @class
 */
class DescribeBatchTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BatchTaskSetItem> || null}
         */
        this.BatchTaskSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.BatchTaskSet) {
            this.BatchTaskSet = new Array();
            for (let z in params.BatchTaskSet) {
                let obj = new BatchTaskSetItem();
                obj.deserialize(params.BatchTaskSet[z]);
                this.BatchTaskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 定时扩缩任务
 * @class
 */
class CronScaleJob extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cron表达式，标识任务的执行时间，精确到分钟级
         * @type {string || null}
         */
        this.Schedule = null;

        /**
         * 定时任务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 目标实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetReplicas = null;

        /**
         * 目标min
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * 目标max
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * 例外时间，Cron表达式，在对应时间内不执行任务。最多支持3条。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ExcludeDates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TargetReplicas = 'TargetReplicas' in params ? params.TargetReplicas : null;
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;
        this.ExcludeDates = 'ExcludeDates' in params ? params.ExcludeDates : null;

    }
}

/**
 * 推理镜像组
 * @class
 */
class InferTemplateGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 算法框架
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Framework = null;

        /**
         * 版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrameworkVersion = null;

        /**
         * 支持的训练框架集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Groups = null;

        /**
         * 镜像模板参数列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InferTemplate> || null}
         */
        this.InferTemplates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Framework = 'Framework' in params ? params.Framework : null;
        this.FrameworkVersion = 'FrameworkVersion' in params ? params.FrameworkVersion : null;
        this.Groups = 'Groups' in params ? params.Groups : null;

        if (params.InferTemplates) {
            this.InferTemplates = new Array();
            for (let z in params.InferTemplates) {
                let obj = new InferTemplate();
                obj.deserialize(params.InferTemplates[z]);
                this.InferTemplates.push(obj);
            }
        }

    }
}

/**
 * DescribeModelServiceHotUpdated返回参数结构体
 * @class
 */
class DescribeModelServiceHotUpdatedResponse extends  AbstractModel {
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
 * 数据集详情
 * @class
 */
class DatasetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetId = null;

        /**
         * 数据集名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetName = null;

        /**
         * 数据集创建者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 数据集版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetVersion = null;

        /**
         * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetType = null;

        /**
         * 数据集标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.DatasetTags = null;

        /**
         * 数据集对应标注任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetAnnotationTaskName = null;

        /**
         * 数据集对应标注任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetAnnotationTaskId = null;

        /**
         * 处理进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Process = null;

        /**
         * 数据集状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetStatus = null;

        /**
         * 错误详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * 数据集创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 数据集更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 外部任务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalTaskType = null;

        /**
         * 数据集存储大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetSize = null;

        /**
         * 数据集数据数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileNum = null;

        /**
         * 数据集源cos 路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosPathInfo || null}
         */
        this.StorageDataPath = null;

        /**
         * 数据集输出cos路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosPathInfo || null}
         */
        this.StorageLabelPath = null;

        /**
         * 数据集标注状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnnotationStatus = null;

        /**
         * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnnotationType = null;

        /**
         * 数据集标注格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnnotationFormat = null;

        /**
         * 数据集范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetScope = null;

        /**
         * 数据集OCR子场景
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrScene = null;

        /**
         * 数据集字典修改状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnnotationKeyStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasetId = 'DatasetId' in params ? params.DatasetId : null;
        this.DatasetName = 'DatasetName' in params ? params.DatasetName : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.DatasetVersion = 'DatasetVersion' in params ? params.DatasetVersion : null;
        this.DatasetType = 'DatasetType' in params ? params.DatasetType : null;

        if (params.DatasetTags) {
            this.DatasetTags = new Array();
            for (let z in params.DatasetTags) {
                let obj = new Tag();
                obj.deserialize(params.DatasetTags[z]);
                this.DatasetTags.push(obj);
            }
        }
        this.DatasetAnnotationTaskName = 'DatasetAnnotationTaskName' in params ? params.DatasetAnnotationTaskName : null;
        this.DatasetAnnotationTaskId = 'DatasetAnnotationTaskId' in params ? params.DatasetAnnotationTaskId : null;
        this.Process = 'Process' in params ? params.Process : null;
        this.DatasetStatus = 'DatasetStatus' in params ? params.DatasetStatus : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExternalTaskType = 'ExternalTaskType' in params ? params.ExternalTaskType : null;
        this.DatasetSize = 'DatasetSize' in params ? params.DatasetSize : null;
        this.FileNum = 'FileNum' in params ? params.FileNum : null;

        if (params.StorageDataPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.StorageDataPath)
            this.StorageDataPath = obj;
        }

        if (params.StorageLabelPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.StorageLabelPath)
            this.StorageLabelPath = obj;
        }
        this.AnnotationStatus = 'AnnotationStatus' in params ? params.AnnotationStatus : null;
        this.AnnotationType = 'AnnotationType' in params ? params.AnnotationType : null;
        this.AnnotationFormat = 'AnnotationFormat' in params ? params.AnnotationFormat : null;
        this.DatasetScope = 'DatasetScope' in params ? params.DatasetScope : null;
        this.OcrScene = 'OcrScene' in params ? params.OcrScene : null;
        this.AnnotationKeyStatus = 'AnnotationKeyStatus' in params ? params.AnnotationKeyStatus : null;

    }
}

/**
 * DescribeModelAccelerateTask返回参数结构体
 * @class
 */
class DescribeModelAccelerateTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ModelAccelerateTask || null}
         */
        this.ModelAccelerateTask = null;

        /**
         * 模型加速时长，单位s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ModelAccRuntimeInSecond = null;

        /**
         * 模型加速任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelAccStartTime = null;

        /**
         * 模型加速任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelAccEndTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModelAccelerateTask) {
            let obj = new ModelAccelerateTask();
            obj.deserialize(params.ModelAccelerateTask)
            this.ModelAccelerateTask = obj;
        }
        this.ModelAccRuntimeInSecond = 'ModelAccRuntimeInSecond' in params ? params.ModelAccRuntimeInSecond : null;
        this.ModelAccStartTime = 'ModelAccStartTime' in params ? params.ModelAccStartTime : null;
        this.ModelAccEndTime = 'ModelAccEndTime' in params ? params.ModelAccEndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图像检测参数信息
 * @class
 */
class DetectionLabelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点坐标列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PointInfo> || null}
         */
        this.Points = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 类别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrameType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new PointInfo();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.FrameType = 'FrameType' in params ? params.FrameType : null;

    }
}

/**
 * DescribeModelServiceGroups请求参数结构体
 * @class
 */
class DescribeModelServiceGroupsRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CreateTime" "UpdateTime"
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 分页参数，支持的分页过滤Name包括：
["ClusterId", "ServiceId", "ServiceGroupName", "ServiceGroupId","Status","CreatedBy","ModelVersionId"]
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 标签过滤参数
         * @type {Array.<TagFilter> || null}
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
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * 二级标签
 * @class
 */
class TextLabelDistributionDetailInfoSecondClass extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LabelValue = null;

        /**
         * 标签个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelCount = null;

        /**
         * 标签占比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelPercentage = null;

        /**
         * 子标签分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextLabelDistributionDetailInfoThirdClass> || null}
         */
        this.ChildLabelList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelValue = 'LabelValue' in params ? params.LabelValue : null;
        this.LabelCount = 'LabelCount' in params ? params.LabelCount : null;
        this.LabelPercentage = 'LabelPercentage' in params ? params.LabelPercentage : null;

        if (params.ChildLabelList) {
            this.ChildLabelList = new Array();
            for (let z in params.ChildLabelList) {
                let obj = new TextLabelDistributionDetailInfoThirdClass();
                obj.deserialize(params.ChildLabelList[z]);
                this.ChildLabelList.push(obj);
            }
        }

    }
}

/**
 * 出参类型
 * @class
 */
class BatchTaskSetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跑批任务ID
         * @type {string || null}
         */
        this.BatchTaskId = null;

        /**
         * 跑批任务名称
         * @type {string || null}
         */
        this.BatchTaskName = null;

        /**
         * 模型信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ModelInfo || null}
         */
        this.ModelInfo = null;

        /**
         * 镜像信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 计费模式
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中
         * @type {string || null}
         */
        this.ChargeStatus = null;

        /**
         * 预付费专用资源组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 资源配置
         * @type {ResourceConfigInfo || null}
         */
        this.ResourceConfigInfo = null;

        /**
         * 标签配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 任务状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuntimeInSeconds = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

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
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 输出
         * @type {Array.<DataConfig> || null}
         */
        this.Outputs = null;

        /**
         * 预付费专用资源组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * 失败原因
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * 计费金额信息，eg：2.00元/小时 (for后付费)
         * @type {string || null}
         */
        this.BillingInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTaskId = 'BatchTaskId' in params ? params.BatchTaskId : null;
        this.BatchTaskName = 'BatchTaskName' in params ? params.BatchTaskName : null;

        if (params.ModelInfo) {
            let obj = new ModelInfo();
            obj.deserialize(params.ModelInfo)
            this.ModelInfo = obj;
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

        if (params.ResourceConfigInfo) {
            let obj = new ResourceConfigInfo();
            obj.deserialize(params.ResourceConfigInfo)
            this.ResourceConfigInfo = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RuntimeInSeconds = 'RuntimeInSeconds' in params ? params.RuntimeInSeconds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Outputs) {
            this.Outputs = new Array();
            for (let z in params.Outputs) {
                let obj = new DataConfig();
                obj.deserialize(params.Outputs[z]);
                this.Outputs.push(obj);
            }
        }
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.BillingInfo = 'BillingInfo' in params ? params.BillingInfo : null;

    }
}

/**
 * 镜像描述信息
 * @class
 */
class ImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像类型：TCR为腾讯云TCR镜像; CCR为腾讯云TCR个人版镜像，PreSet为平台预置镜像
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * 镜像地址
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * TCR镜像对应的地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistryRegion = null;

        /**
         * TCR镜像对应的实例id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RegistryRegion = 'RegistryRegion' in params ? params.RegistryRegion : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * 推理服务在集群中的信息
 * @class
 */
class ServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 期望运行的Pod数量，停止状态是0
不同计费模式和调节模式下对应关系如下
PREPAID 和 POSTPAID_BY_HOUR:
手动调节模式下对应 实例数量
自动调节模式下对应 基于时间的默认策略的实例数量
HYBRID_PAID:
后付费实例手动调节模式下对应 实例数量
后付费实例自动调节模式下对应 时间策略的默认策略的实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 镜像信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EnvVar> || null}
         */
        this.Env = null;

        /**
         * 资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceInfo || null}
         */
        this.Resources = null;

        /**
         * 后付费实例对应的机型规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 模型信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ModelInfo || null}
         */
        this.ModelInfo = null;

        /**
         * 是否启用日志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.LogEnable = null;

        /**
         * 日志配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LogConfig || null}
         */
        this.LogConfig = null;

        /**
         * 是否开启鉴权
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AuthorizationEnable = null;

        /**
         * hpa配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * 服务的状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkloadStatus || null}
         */
        this.Status = null;

        /**
         * 权重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PodList = null;

        /**
         * 资源总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceInfo || null}
         */
        this.ResourceTotal = null;

        /**
         * 历史实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OldReplicas = null;

        /**
         * 计费模式[HYBRID_PAID]时生效, 用于标识混合计费模式下的预付费实例数, 若不填则默认为1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HybridBillingPrepaidReplicas = null;

        /**
         * 历史 HYBRID_PAID 时的实例数，用户恢复服务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OldHybridBillingPrepaidReplicas = null;

        /**
         * 是否开启模型的热更新。默认不开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ModelHotUpdateEnable = null;

        /**
         * Pod列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Pod || null}
         */
        this.Pods = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.Env) {
            this.Env = new Array();
            for (let z in params.Env) {
                let obj = new EnvVar();
                obj.deserialize(params.Env[z]);
                this.Env.push(obj);
            }
        }

        if (params.Resources) {
            let obj = new ResourceInfo();
            obj.deserialize(params.Resources)
            this.Resources = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.ModelInfo) {
            let obj = new ModelInfo();
            obj.deserialize(params.ModelInfo)
            this.ModelInfo = obj;
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;

        if (params.LogConfig) {
            let obj = new LogConfig();
            obj.deserialize(params.LogConfig)
            this.LogConfig = obj;
        }
        this.AuthorizationEnable = 'AuthorizationEnable' in params ? params.AuthorizationEnable : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }

        if (params.Status) {
            let obj = new WorkloadStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PodList = 'PodList' in params ? params.PodList : null;

        if (params.ResourceTotal) {
            let obj = new ResourceInfo();
            obj.deserialize(params.ResourceTotal)
            this.ResourceTotal = obj;
        }
        this.OldReplicas = 'OldReplicas' in params ? params.OldReplicas : null;
        this.HybridBillingPrepaidReplicas = 'HybridBillingPrepaidReplicas' in params ? params.HybridBillingPrepaidReplicas : null;
        this.OldHybridBillingPrepaidReplicas = 'OldHybridBillingPrepaidReplicas' in params ? params.OldHybridBillingPrepaidReplicas : null;
        this.ModelHotUpdateEnable = 'ModelHotUpdateEnable' in params ? params.ModelHotUpdateEnable : null;

        if (params.Pods) {
            let obj = new Pod();
            obj.deserialize(params.Pods)
            this.Pods = obj;
        }

    }
}

/**
 * DescribeModelService请求参数结构体
 * @class
 */
class DescribeModelServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * CreateTrainingTask返回参数结构体
 * @class
 */
class CreateTrainingTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务ID
         * @type {string || null}
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
 * DeleteModelService请求参数结构体
 * @class
 */
class DeleteModelServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * DeleteModelAccelerateTask请求参数结构体
 * @class
 */
class DeleteModelAccelerateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务ID
         * @type {string || null}
         */
        this.ModelAccTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelAccTaskId = 'ModelAccTaskId' in params ? params.ModelAccTaskId : null;

    }
}

/**
 * CreateTrainingTask请求参数结构体
 * @class
 */
class CreateTrainingTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 计费模式，eg：PREPAID预付费，即包年包月；POSTPAID_BY_HOUR按小时后付费
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 资源配置，需填写对应算力规格ID和节点数量，算力规格ID查询接口为DescribeBillingSpecsPrice，eg：[{"Role":"WORKER", "InstanceType": "TI.S.MEDIUM.POST", "InstanceNum": 1}]
         * @type {Array.<ResourceConfigInfo> || null}
         */
        this.ResourceConfigInfos = null;

        /**
         * COS代码包路径
         * @type {CosPathInfo || null}
         */
        this.CodePackagePath = null;

        /**
         * 训练模式，通过DescribeTrainingFrameworks接口查询，eg：PS_WORKER、DDP、MPI、HOROVOD
         * @type {string || null}
         */
        this.TrainingMode = null;

        /**
         * COS训练输出路径
         * @type {CosPathInfo || null}
         */
        this.Output = null;

        /**
         * 是否上报日志
         * @type {boolean || null}
         */
        this.LogEnable = null;

        /**
         * 训练框架名称，通过DescribeTrainingFrameworks接口查询，eg：SPARK、PYSPARK、TENSORFLOW、PYTORCH
         * @type {string || null}
         */
        this.FrameworkName = null;

        /**
         * 训练框架版本，通过DescribeTrainingFrameworks接口查询，eg：1.15、1.9
         * @type {string || null}
         */
        this.FrameworkVersion = null;

        /**
         * 训练框架环境，通过DescribeTrainingFrameworks接口查询，eg：tf1.15-py3.7-cpu、torch1.9-py3.8-cuda11.1-gpu
         * @type {string || null}
         */
        this.FrameworkEnvironment = null;

        /**
         * 预付费专用资源组ID，通过DescribeBillingResourceGroups接口查询
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 标签配置
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 自定义镜像信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 启动命令信息，默认为sh start.sh
         * @type {StartCmdInfo || null}
         */
        this.StartCmdInfo = null;

        /**
         * 数据配置，依赖DataSource字段
         * @type {Array.<DataConfig> || null}
         */
        this.DataConfigs = null;

        /**
         * VPC Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * CLS日志配置
         * @type {LogConfig || null}
         */
        this.LogConfig = null;

        /**
         * 调优参数
         * @type {string || null}
         */
        this.TuningParameters = null;

        /**
         * 备注，最多500个字
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 数据来源，eg：DATASET、COS、CFS、HDFS
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * 回调地址，用于创建/启动/停止训练任务的异步回调。回调格式&内容详见：[[TI-ONE接口回调说明]](https://cloud.tencent.com/document/product/851/84292)
         * @type {string || null}
         */
        this.CallbackUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

        if (params.ResourceConfigInfos) {
            this.ResourceConfigInfos = new Array();
            for (let z in params.ResourceConfigInfos) {
                let obj = new ResourceConfigInfo();
                obj.deserialize(params.ResourceConfigInfos[z]);
                this.ResourceConfigInfos.push(obj);
            }
        }

        if (params.CodePackagePath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.CodePackagePath)
            this.CodePackagePath = obj;
        }
        this.TrainingMode = 'TrainingMode' in params ? params.TrainingMode : null;

        if (params.Output) {
            let obj = new CosPathInfo();
            obj.deserialize(params.Output)
            this.Output = obj;
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;
        this.FrameworkName = 'FrameworkName' in params ? params.FrameworkName : null;
        this.FrameworkVersion = 'FrameworkVersion' in params ? params.FrameworkVersion : null;
        this.FrameworkEnvironment = 'FrameworkEnvironment' in params ? params.FrameworkEnvironment : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.StartCmdInfo) {
            let obj = new StartCmdInfo();
            obj.deserialize(params.StartCmdInfo)
            this.StartCmdInfo = obj;
        }

        if (params.DataConfigs) {
            this.DataConfigs = new Array();
            for (let z in params.DataConfigs) {
                let obj = new DataConfig();
                obj.deserialize(params.DataConfigs[z]);
                this.DataConfigs.push(obj);
            }
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.LogConfig) {
            let obj = new LogConfig();
            obj.deserialize(params.LogConfig)
            this.LogConfig = obj;
        }
        this.TuningParameters = 'TuningParameters' in params ? params.TuningParameters : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * 实例状况
 * @class
 */
class StatefulSetCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Status of the condition, one of True, False, Unknown.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 上次更新的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastTransitionTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.LastTransitionTime = 'LastTransitionTime' in params ? params.LastTransitionTime : null;

    }
}

/**
 * DescribeModelService返回参数结构体
 * @class
 */
class DescribeModelServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务信息
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatasets返回参数结构体
 * @class
 */
class DescribeDatasetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集总量（名称维度）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据集按照数据集名称聚合的分组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DatasetGroup> || null}
         */
        this.DatasetGroups = null;

        /**
         * 数据集ID总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DatasetIdNums = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DatasetGroups) {
            this.DatasetGroups = new Array();
            for (let z in params.DatasetGroups) {
                let obj = new DatasetGroup();
                obj.deserialize(params.DatasetGroups[z]);
                this.DatasetGroups.push(obj);
            }
        }
        this.DatasetIdNums = 'DatasetIdNums' in params ? params.DatasetIdNums : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartModelAccelerateTask返回参数结构体
 * @class
 */
class RestartModelAccelerateTaskResponse extends  AbstractModel {
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
 * CreateBatchModelAccTasks请求参数结构体
 * @class
 */
class CreateBatchModelAccTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务名称
         * @type {string || null}
         */
        this.ModelAccTaskName = null;

        /**
         * 批量模型加速任务
         * @type {Array.<BatchModelAccTask> || null}
         */
        this.BatchModelAccTasks = null;

        /**
         * 模型加速保存路径
         * @type {CosPathInfo || null}
         */
        this.ModelOutputPath = null;

        /**
         * 标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 优化级别(NO_LOSS/FP16/INT8)，默认FP16
         * @type {string || null}
         */
        this.OptimizationLevel = null;

        /**
         * GPU卡类型(T4/V100/A10)，默认T4
         * @type {string || null}
         */
        this.GPUType = null;

        /**
         * 专业参数设置
         * @type {HyperParameter || null}
         */
        this.HyperParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelAccTaskName = 'ModelAccTaskName' in params ? params.ModelAccTaskName : null;

        if (params.BatchModelAccTasks) {
            this.BatchModelAccTasks = new Array();
            for (let z in params.BatchModelAccTasks) {
                let obj = new BatchModelAccTask();
                obj.deserialize(params.BatchModelAccTasks[z]);
                this.BatchModelAccTasks.push(obj);
            }
        }

        if (params.ModelOutputPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.ModelOutputPath)
            this.ModelOutputPath = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.OptimizationLevel = 'OptimizationLevel' in params ? params.OptimizationLevel : null;
        this.GPUType = 'GPUType' in params ? params.GPUType : null;

        if (params.HyperParameter) {
            let obj = new HyperParameter();
            obj.deserialize(params.HyperParameter)
            this.HyperParameter = obj;
        }

    }
}

/**
 * DescribeBillingSpecsPrice请求参数结构体
 * @class
 */
class DescribeBillingSpecsPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 询价参数，支持批量询价
         * @type {Array.<SpecUnit> || null}
         */
        this.SpecsParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpecsParam) {
            this.SpecsParam = new Array();
            for (let z in params.SpecsParam) {
                let obj = new SpecUnit();
                obj.deserialize(params.SpecsParam[z]);
                this.SpecsParam.push(obj);
            }
        }

    }
}

/**
 * 服务的权重
 * @class
 */
class WeightEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 流量权重值，同 ServiceGroup 下 总和应为 100
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * 资源组节点信息
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源组节点id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点已用资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceInfo || null}
         */
        this.UsedResource = null;

        /**
         * 节点总资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceInfo || null}
         */
        this.TotalResource = null;

        /**
         * 节点状态 
注意：此字段为枚举值
说明: 
DEPLOYING: 部署中
RUNNING: 运行中 
DEPLOY_FAILED: 部署失败
 RELEASING 释放中 
RELEASED：已释放 
EXCEPTION：异常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceStatus = null;

        /**
         * 创建人
         * @type {string || null}
         */
        this.SubUin = null;

        /**
         * 创建时间: 
注意：北京时间，比如: 2021-12-01 12:00:00
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 到期时间
注意：北京时间，比如：2021-12-11 12:00:00
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 自动续费标识
注意：此字段为枚举值
说明：
NOTIFY_AND_MANUAL_RENEW：手动续费(取消自动续费)且到期通知
NOTIFY_AND_AUTO_RENEW：自动续费且到期通知
DISABLE_NOTIFY_AND_MANUAL_RENEW：手动续费(取消自动续费)且到期不通知
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 计费项ID
         * @type {string || null}
         */
        this.SpecId = null;

        /**
         * 计费项别名
         * @type {string || null}
         */
        this.SpecAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.UsedResource) {
            let obj = new ResourceInfo();
            obj.deserialize(params.UsedResource)
            this.UsedResource = obj;
        }

        if (params.TotalResource) {
            let obj = new ResourceInfo();
            obj.deserialize(params.TotalResource)
            this.TotalResource = obj;
        }
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.SpecId = 'SpecId' in params ? params.SpecId : null;
        this.SpecAlias = 'SpecAlias' in params ? params.SpecAlias : null;

    }
}

/**
 * DescribeBillingSpecs返回参数结构体
 * @class
 */
class DescribeBillingSpecsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费项列表
         * @type {Array.<Spec> || null}
         */
        this.Specs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Specs) {
            this.Specs = new Array();
            for (let z in params.Specs) {
                let obj = new Spec();
                obj.deserialize(params.Specs[z]);
                this.Specs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTrainingTask返回参数结构体
 * @class
 */
class DeleteTrainingTaskResponse extends  AbstractModel {
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
 * 五级标签
 * @class
 */
class TextLabelDistributionDetailInfoFifthClass extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LabelValue = null;

        /**
         * 标签个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelCount = null;

        /**
         * 标签占比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelPercentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelValue = 'LabelValue' in params ? params.LabelValue : null;
        this.LabelCount = 'LabelCount' in params ? params.LabelCount : null;
        this.LabelPercentage = 'LabelPercentage' in params ? params.LabelPercentage : null;

    }
}

/**
 * 批处理任务实例
 * @class
 */
class BatchTaskInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务实例id
         * @type {string || null}
         */
        this.BatchTaskInstanceId = null;

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
         * 任务状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuntimeInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTaskInstanceId = 'BatchTaskInstanceId' in params ? params.BatchTaskInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuntimeInSeconds = 'RuntimeInSeconds' in params ? params.RuntimeInSeconds : null;

    }
}

/**
 * CreateBatchTask返回参数结构体
 * @class
 */
class CreateBatchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跑批任务ID
         * @type {string || null}
         */
        this.BatchTaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTaskId = 'BatchTaskId' in params ? params.BatchTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteModelService返回参数结构体
 * @class
 */
class DeleteModelServiceResponse extends  AbstractModel {
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
 * 数据集组
 * @class
 */
class DatasetGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetId = null;

        /**
         * 数据集名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetName = null;

        /**
         * 创建者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 数据集版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetVersion = null;

        /**
         * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetType = null;

        /**
         * 数据集标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.DatasetTags = null;

        /**
         * 数据集标注任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetAnnotationTaskName = null;

        /**
         * 数据集标注任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetAnnotationTaskId = null;

        /**
         * 处理进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Process = null;

        /**
         * 数据集状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetStatus = null;

        /**
         * 错误详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMsg = null;

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

        /**
         * 外部关联TASKType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalTaskType = null;

        /**
         * 数据集大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetSize = null;

        /**
         * 数据集数据量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileNum = null;

        /**
         * 数据集源COS路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosPathInfo || null}
         */
        this.StorageDataPath = null;

        /**
         * 数据集标签存储路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosPathInfo || null}
         */
        this.StorageLabelPath = null;

        /**
         * 数据集版本聚合详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DatasetInfo> || null}
         */
        this.DatasetVersions = null;

        /**
         * 数据集标注状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnnotationStatus = null;

        /**
         * 数据集类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnnotationType = null;

        /**
         * 数据集标注格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnnotationFormat = null;

        /**
         * 数据集范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasetScope = null;

        /**
         * 数据集OCR子场景
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrScene = null;

        /**
         * 数据集字典修改状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnnotationKeyStatus = null;

        /**
         * 文本数据集导入方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContentType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasetId = 'DatasetId' in params ? params.DatasetId : null;
        this.DatasetName = 'DatasetName' in params ? params.DatasetName : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.DatasetVersion = 'DatasetVersion' in params ? params.DatasetVersion : null;
        this.DatasetType = 'DatasetType' in params ? params.DatasetType : null;

        if (params.DatasetTags) {
            this.DatasetTags = new Array();
            for (let z in params.DatasetTags) {
                let obj = new Tag();
                obj.deserialize(params.DatasetTags[z]);
                this.DatasetTags.push(obj);
            }
        }
        this.DatasetAnnotationTaskName = 'DatasetAnnotationTaskName' in params ? params.DatasetAnnotationTaskName : null;
        this.DatasetAnnotationTaskId = 'DatasetAnnotationTaskId' in params ? params.DatasetAnnotationTaskId : null;
        this.Process = 'Process' in params ? params.Process : null;
        this.DatasetStatus = 'DatasetStatus' in params ? params.DatasetStatus : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExternalTaskType = 'ExternalTaskType' in params ? params.ExternalTaskType : null;
        this.DatasetSize = 'DatasetSize' in params ? params.DatasetSize : null;
        this.FileNum = 'FileNum' in params ? params.FileNum : null;

        if (params.StorageDataPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.StorageDataPath)
            this.StorageDataPath = obj;
        }

        if (params.StorageLabelPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.StorageLabelPath)
            this.StorageLabelPath = obj;
        }

        if (params.DatasetVersions) {
            this.DatasetVersions = new Array();
            for (let z in params.DatasetVersions) {
                let obj = new DatasetInfo();
                obj.deserialize(params.DatasetVersions[z]);
                this.DatasetVersions.push(obj);
            }
        }
        this.AnnotationStatus = 'AnnotationStatus' in params ? params.AnnotationStatus : null;
        this.AnnotationType = 'AnnotationType' in params ? params.AnnotationType : null;
        this.AnnotationFormat = 'AnnotationFormat' in params ? params.AnnotationFormat : null;
        this.DatasetScope = 'DatasetScope' in params ? params.DatasetScope : null;
        this.OcrScene = 'OcrScene' in params ? params.OcrScene : null;
        this.AnnotationKeyStatus = 'AnnotationKeyStatus' in params ? params.AnnotationKeyStatus : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;

    }
}

/**
 * DescribeTrainingModels请求参数结构体
 * @class
 */
class DescribeTrainingModelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤器
Filter.Name: 枚举值:
    keyword (模型名称)
    TrainingModelId (模型ID)
    ModelVersionType (模型版本类型) 其值Filter.Values支持: NORMAL(通用) ACCELERATE (加速)
    TrainingModelSource (模型来源)  其值Filter.Values支持： JOB/COS
    ModelFormat（模型格式）其值Filter.Values支持：
PYTORCH/TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/PMML/MMDETECTION/ONNX/HUGGING_FACE
Filter.Values: 当长度为1时，支持模糊查询; 不为1时，精确查询
每次请求的Filters的上限为10，Filter.Values的上限为100
Filter.Fuzzy取值：true/false，是否支持模糊匹配
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段，默认CreateTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式，ASC/DESC，默认DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回结果数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签过滤
         * @type {Array.<TagFilter> || null}
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * 训练数据
 * @class
 */
class TrainingDataPoint extends  AbstractModel {
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
 * 四级标签
 * @class
 */
class TextLabelDistributionDetailInfoFourthClass extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LabelValue = null;

        /**
         * 标签个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelCount = null;

        /**
         * 标签占比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelPercentage = null;

        /**
         * 子标签分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextLabelDistributionDetailInfoFifthClass> || null}
         */
        this.ChildLabelList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelValue = 'LabelValue' in params ? params.LabelValue : null;
        this.LabelCount = 'LabelCount' in params ? params.LabelCount : null;
        this.LabelPercentage = 'LabelPercentage' in params ? params.LabelPercentage : null;

        if (params.ChildLabelList) {
            this.ChildLabelList = new Array();
            for (let z in params.ChildLabelList) {
                let obj = new TextLabelDistributionDetailInfoFifthClass();
                obj.deserialize(params.ChildLabelList[z]);
                this.ChildLabelList.push(obj);
            }
        }

    }
}

/**
 * Pod信息展示
 * @class
 */
class Pod extends  AbstractModel {
    constructor(){
        super();

        /**
         * pod名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * pod的唯一id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 服务付费模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * pod的状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Phase = null;

        /**
         * pod的IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IP = null;

        /**
         * pod的创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 容器列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Container || null}
         */
        this.Containers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.Phase = 'Phase' in params ? params.Phase : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Containers) {
            let obj = new Container();
            obj.deserialize(params.Containers)
            this.Containers = obj;
        }

    }
}

/**
 * DescribeLatestTrainingMetrics请求参数结构体
 * @class
 */
class DescribeLatestTrainingMetricsRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 描述资源信息
 * @class
 */
class ResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理器资源, 单位为1/1000核
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存资源, 单位为1M
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Gpu卡个数资源, 单位为0.01单位的GpuType.
Gpu=100表示使用了“一张”gpu卡, 但此处的“一张”卡有可能是虚拟化后的1/4卡, 也有可能是整张卡. 取决于实例的机型
例1 实例的机型带有1张虚拟gpu卡, 每张虚拟gpu卡对应1/4张实际T4卡, 则此时 GpuType=T4, Gpu=100, RealGpu=25.
例2 实例的机型带有4张gpu整卡, 每张卡对应1张实际T4卡, 则 此时 GpuType=T4, Gpu=400, RealGpu=400.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * Gpu卡型号 T4或者V100。仅展示当前 GPU 卡型号，若存在多类型同时使用，则参考 RealGpuDetailSet 的值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * 创建或更新时无需填写，仅展示需要关注
后付费非整卡实例对应的实际的Gpu卡资源, 表示gpu资源对应实际的gpu卡个数.
RealGpu=100表示实际使用了一张gpu卡, 对应实际的实例机型, 有可能代表带有1/4卡的实例4个, 或者带有1/2卡的实例2个, 或者带有1卡的实力1个.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealGpu = null;

        /**
         * 创建或更新时无需填写，仅展示需要关注。详细的GPU使用信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GpuDetail> || null}
         */
        this.RealGpuDetailSet = null;

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
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.RealGpu = 'RealGpu' in params ? params.RealGpu : null;

        if (params.RealGpuDetailSet) {
            this.RealGpuDetailSet = new Array();
            for (let z in params.RealGpuDetailSet) {
                let obj = new GpuDetail();
                obj.deserialize(params.RealGpuDetailSet[z]);
                this.RealGpuDetailSet.push(obj);
            }
        }

    }
}

/**
 * 资源信息
 * @class
 */
class GroupResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU核数; 单位为1/1000核，比如100表示0.1核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存；单位为MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 总卡数；GPUDetail 显卡数之和；单位为1/100卡，比如100代表1卡
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * Gpu详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GpuDetail> || null}
         */
        this.GpuDetailSet = null;

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
        this.Gpu = 'Gpu' in params ? params.Gpu : null;

        if (params.GpuDetailSet) {
            this.GpuDetailSet = new Array();
            for (let z in params.GpuDetailSet) {
                let obj = new GpuDetail();
                obj.deserialize(params.GpuDetailSet[z]);
                this.GpuDetailSet.push(obj);
            }
        }

    }
}

/**
 * DescribeModelServiceCallInfo返回参数结构体
 * @class
 */
class DescribeModelServiceCallInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务调用信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceCallInfo || null}
         */
        this.ServiceCallInfo = null;

        /**
         * 升级网关调用信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InferGatewayCallInfo || null}
         */
        this.InferGatewayCallInfo = null;

        /**
         * 默认nginx网关的调用信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DefaultNginxGatewayCallInfo || null}
         */
        this.DefaultNginxGatewayCallInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceCallInfo) {
            let obj = new ServiceCallInfo();
            obj.deserialize(params.ServiceCallInfo)
            this.ServiceCallInfo = obj;
        }

        if (params.InferGatewayCallInfo) {
            let obj = new InferGatewayCallInfo();
            obj.deserialize(params.InferGatewayCallInfo)
            this.InferGatewayCallInfo = obj;
        }

        if (params.DefaultNginxGatewayCallInfo) {
            let obj = new DefaultNginxGatewayCallInfo();
            obj.deserialize(params.DefaultNginxGatewayCallInfo)
            this.DefaultNginxGatewayCallInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据集结构体
 * @class
 */
class DataSetConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集ID
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
 * 定时的事务和行为
 * @class
 */
class ScheduledAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否要定时停止服务，true or false。true 则 ScheduleStopTime 必填， false 则 ScheduleStopTime 不生效
         * @type {boolean || null}
         */
        this.ScheduleStop = null;

        /**
         * 要执行定时停止的时间，格式：“2022-01-26T19:46:22+08:00”
         * @type {string || null}
         */
        this.ScheduleStopTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleStop = 'ScheduleStop' in params ? params.ScheduleStop : null;
        this.ScheduleStopTime = 'ScheduleStopTime' in params ? params.ScheduleStopTime : null;

    }
}

/**
 * DeleteModelAccelerateTask返回参数结构体
 * @class
 */
class DeleteModelAccelerateTaskResponse extends  AbstractModel {
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
 * DeleteTrainingTask请求参数结构体
 * @class
 */
class DeleteTrainingTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务ID
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
 * DescribeModelServiceHistory返回参数结构体
 * @class
 */
class DescribeModelServiceHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 历史版本总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 服务版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServiceHistory> || null}
         */
        this.ServiceHistory = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ServiceHistory) {
            this.ServiceHistory = new Array();
            for (let z in params.ServiceHistory) {
                let obj = new ServiceHistory();
                obj.deserialize(params.ServiceHistory[z]);
                this.ServiceHistory.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量模型加速任务
 * @class
 */
class BatchModelAccTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型ID
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 模型版本
         * @type {string || null}
         */
        this.ModelVersion = null;

        /**
         * 模型来源(JOB/COS)
         * @type {string || null}
         */
        this.ModelSource = null;

        /**
         * 模型格式(TORCH_SCRIPT/DETECTRON2/SAVED_MODEL/FROZEN_GRAPH/MMDETECTION/ONNX/HUGGING_FACE)
         * @type {string || null}
         */
        this.ModelFormat = null;

        /**
         * 模型Tensor信息
         * @type {Array.<string> || null}
         */
        this.TensorInfos = null;

        /**
         * 加速引擎版本
         * @type {string || null}
         */
        this.AccEngineVersion = null;

        /**
         * 模型输入cos路径
         * @type {CosPathInfo || null}
         */
        this.ModelInputPath = null;

        /**
         * 模型名称
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * SavedModel保存时配置的签名
         * @type {string || null}
         */
        this.ModelSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelVersion = 'ModelVersion' in params ? params.ModelVersion : null;
        this.ModelSource = 'ModelSource' in params ? params.ModelSource : null;
        this.ModelFormat = 'ModelFormat' in params ? params.ModelFormat : null;
        this.TensorInfos = 'TensorInfos' in params ? params.TensorInfos : null;
        this.AccEngineVersion = 'AccEngineVersion' in params ? params.AccEngineVersion : null;

        if (params.ModelInputPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.ModelInputPath)
            this.ModelInputPath = obj;
        }
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.ModelSignature = 'ModelSignature' in params ? params.ModelSignature : null;

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
         * 过滤字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段取值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否开启反向查询
         * @type {boolean || null}
         */
        this.Negative = null;

        /**
         * 是否开启模糊匹配
         * @type {boolean || null}
         */
        this.Fuzzy = null;

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
        this.Negative = 'Negative' in params ? params.Negative : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * ModifyModelService返回参数结构体
 * @class
 */
class ModifyModelServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的模型服务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBatchTask返回参数结构体
 * @class
 */
class DeleteBatchTaskResponse extends  AbstractModel {
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
 * 引擎版本
 * @class
 */
class EngineVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 运行镜像
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 是否支持int8量化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsSupportIntEightQuantization = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.IsSupportIntEightQuantization = 'IsSupportIntEightQuantization' in params ? params.IsSupportIntEightQuantization : null;

    }
}

/**
 * DescribeBatchTasks请求参数结构体
 * @class
 */
class DescribeBatchTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤器，eg：[{ "Name": "Id", "Values": ["train-23091792777383936"] }]

取值范围：
Name（名称）：task1
Id（task ID）：train-23091792777383936
Status（状态）：STARTING / RUNNING / STOPPING / STOPPED / FAILED / SUCCEED / SUBMIT_FAILED
ChargeType（计费类型）：PREPAID（预付费）/ POSTPAID_BY_HOUR（后付费）
CHARGE_STATUS（计费状态）：NOT_BILLING（未开始计费）/ BILLING（计费中）/ ARREARS_STOP（欠费停止）
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 标签过滤器，eg：[{ "TagKey": "TagKeyA", "TagValue": ["TagValueA"] }]
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大为50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出列表的排列顺序。取值范围：ASC（升序排列）/ DESC（降序排列），默认为DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序的依据字段， 取值范围 "CreateTime" "UpdateTime"
         * @type {string || null}
         */
        this.OrderField = null;

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

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * CreateDataset请求参数结构体
 * @class
 */
class CreateDatasetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集名称，不超过60个字符，仅支持中英文、数字、下划线"_"、短横"-"，只能以中英文、数字开头
         * @type {string || null}
         */
        this.DatasetName = null;

        /**
         * 数据集类型:
TYPE_DATASET_TEXT，文本
TYPE_DATASET_IMAGE，图片
TYPE_DATASET_TABLE，表格
TYPE_DATASET_OTHER，其他
         * @type {string || null}
         */
        this.DatasetType = null;

        /**
         * 数据源cos路径
         * @type {CosPathInfo || null}
         */
        this.StorageDataPath = null;

        /**
         * 数据集标签cos存储路径
         * @type {CosPathInfo || null}
         */
        this.StorageLabelPath = null;

        /**
         * 数据集标签
         * @type {Array.<Tag> || null}
         */
        this.DatasetTags = null;

        /**
         * 数据集标注状态:
STATUS_NON_ANNOTATED，未标注
STATUS_ANNOTATED，已标注
         * @type {string || null}
         */
        this.AnnotationStatus = null;

        /**
         * 标注类型:
ANNOTATION_TYPE_CLASSIFICATION，图片分类
ANNOTATION_TYPE_DETECTION，目标检测
ANNOTATION_TYPE_SEGMENTATION，图片分割
ANNOTATION_TYPE_TRACKING，目标跟踪
         * @type {string || null}
         */
        this.AnnotationType = null;

        /**
         * 标注格式:
ANNOTATION_FORMAT_TI，TI平台格式
ANNOTATION_FORMAT_PASCAL，Pascal Voc
ANNOTATION_FORMAT_COCO，COCO
ANNOTATION_FORMAT_FILE，文件目录结构
         * @type {string || null}
         */
        this.AnnotationFormat = null;

        /**
         * 表头信息
         * @type {Array.<SchemaInfo> || null}
         */
        this.SchemaInfos = null;

        /**
         * 数据是否存在表头
         * @type {boolean || null}
         */
        this.IsSchemaExisted = null;

        /**
         * 导入文件粒度，按行或者按文件
         * @type {string || null}
         */
        this.ContentType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasetName = 'DatasetName' in params ? params.DatasetName : null;
        this.DatasetType = 'DatasetType' in params ? params.DatasetType : null;

        if (params.StorageDataPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.StorageDataPath)
            this.StorageDataPath = obj;
        }

        if (params.StorageLabelPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.StorageLabelPath)
            this.StorageLabelPath = obj;
        }

        if (params.DatasetTags) {
            this.DatasetTags = new Array();
            for (let z in params.DatasetTags) {
                let obj = new Tag();
                obj.deserialize(params.DatasetTags[z]);
                this.DatasetTags.push(obj);
            }
        }
        this.AnnotationStatus = 'AnnotationStatus' in params ? params.AnnotationStatus : null;
        this.AnnotationType = 'AnnotationType' in params ? params.AnnotationType : null;
        this.AnnotationFormat = 'AnnotationFormat' in params ? params.AnnotationFormat : null;

        if (params.SchemaInfos) {
            this.SchemaInfos = new Array();
            for (let z in params.SchemaInfos) {
                let obj = new SchemaInfo();
                obj.deserialize(params.SchemaInfos[z]);
                this.SchemaInfos.push(obj);
            }
        }
        this.IsSchemaExisted = 'IsSchemaExisted' in params ? params.IsSchemaExisted : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;

    }
}

/**
 * CreateModelService返回参数结构体
 * @class
 */
class CreateModelServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的模型服务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 在线服务一个服务组的信息
 * @class
 */
class ServiceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务组id
         * @type {string || null}
         */
        this.ServiceGroupId = null;

        /**
         * 服务组名
         * @type {string || null}
         */
        this.ServiceGroupName = null;

        /**
         * 创建者
         * @type {string || null}
         */
        this.CreatedBy = null;

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
         * 主账号
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 服务组下服务总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ServiceCount = null;

        /**
         * 服务组下在运行的服务数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunningServiceCount = null;

        /**
         * 服务描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Service> || null}
         */
        this.Services = null;

        /**
         * 服务组状态，与服务一致
 CREATING 创建中
     CREATE_FAILED 创建失败
     Normal	正常运行中
     Stopped  已停止
     Stopping 停止中
     Abnormal 异常
     Pending 启动中
     Waiting 就绪中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 服务组标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 服务组下最高版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestVersion = null;

        /**
         * 服务的业务状态
CREATING 创建中
     CREATE_FAILED 创建失败
     ARREARS_STOP 因欠费被强制停止
     BILLING 计费中
     WHITELIST_USING 白名单试用中
     WHITELIST_STOP 白名单额度不足
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessStatus = null;

        /**
         * 服务的计费信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillingInfo = null;

        /**
         * 服务的创建来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateSource = null;

        /**
         * 服务组的权重更新状态 
UPDATING 更新中
     UPDATED 更新成功
     UPDATE_FAILED 更新失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WeightUpdateStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;
        this.ServiceGroupName = 'ServiceGroupName' in params ? params.ServiceGroupName : null;
        this.CreatedBy = 'CreatedBy' in params ? params.CreatedBy : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ServiceCount = 'ServiceCount' in params ? params.ServiceCount : null;
        this.RunningServiceCount = 'RunningServiceCount' in params ? params.RunningServiceCount : null;

        if (params.Services) {
            this.Services = new Array();
            for (let z in params.Services) {
                let obj = new Service();
                obj.deserialize(params.Services[z]);
                this.Services.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.LatestVersion = 'LatestVersion' in params ? params.LatestVersion : null;
        this.BusinessStatus = 'BusinessStatus' in params ? params.BusinessStatus : null;
        this.BillingInfo = 'BillingInfo' in params ? params.BillingInfo : null;
        this.CreateSource = 'CreateSource' in params ? params.CreateSource : null;
        this.WeightUpdateStatus = 'WeightUpdateStatus' in params ? params.WeightUpdateStatus : null;

    }
}

/**
 * 模型列表
 * @class
 */
class TrainingModelDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型id
         * @type {string || null}
         */
        this.TrainingModelId = null;

        /**
         * 模型名称
         * @type {string || null}
         */
        this.TrainingModelName = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 模型创建时间
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
        this.TrainingModelId = 'TrainingModelId' in params ? params.TrainingModelId : null;
        this.TrainingModelName = 'TrainingModelName' in params ? params.TrainingModelName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 服务的限流限速等配置
 * @class
 */
class ServiceLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启实例层面限流限速，true or false。true 则 InstanceRpsLimit 必填， false 则 InstanceRpsLimit 不生效
         * @type {boolean || null}
         */
        this.EnableInstanceRpsLimit = null;

        /**
         * 每个服务实例的 request per second 限速, 0 为不限流
         * @type {number || null}
         */
        this.InstanceRpsLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableInstanceRpsLimit = 'EnableInstanceRpsLimit' in params ? params.EnableInstanceRpsLimit : null;
        this.InstanceRpsLimit = 'InstanceRpsLimit' in params ? params.InstanceRpsLimit : null;

    }
}

/**
 * DescribeModelServiceGroup返回参数结构体
 * @class
 */
class DescribeModelServiceGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务组信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceGroup || null}
         */
        this.ServiceGroup = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceGroup) {
            let obj = new ServiceGroup();
            obj.deserialize(params.ServiceGroup)
            this.ServiceGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 三级标签
 * @class
 */
class TextLabelDistributionDetailInfoThirdClass extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LabelValue = null;

        /**
         * 标签个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelCount = null;

        /**
         * 标签占比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelPercentage = null;

        /**
         * 子标签分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextLabelDistributionDetailInfoFourthClass> || null}
         */
        this.ChildLabelList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelValue = 'LabelValue' in params ? params.LabelValue : null;
        this.LabelCount = 'LabelCount' in params ? params.LabelCount : null;
        this.LabelPercentage = 'LabelPercentage' in params ? params.LabelPercentage : null;

        if (params.ChildLabelList) {
            this.ChildLabelList = new Array();
            for (let z in params.ChildLabelList) {
                let obj = new TextLabelDistributionDetailInfoFourthClass();
                obj.deserialize(params.ChildLabelList[z]);
                this.ChildLabelList.push(obj);
            }
        }

    }
}

/**
 * 自定义指标
 * @class
 */
class CustomTrainingData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CustomTrainingMetric> || null}
         */
        this.Metrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new CustomTrainingMetric();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }

    }
}

/**
 * 文本行信息
 * @class
 */
class RowItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * rowValue 数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RowValue> || null}
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

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new RowValue();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }

    }
}

/**
 * CreateTrainingModel返回参数结构体
 * @class
 */
class CreateTrainingModelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型ID，TrainingModel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 模型版本ID
         * @type {string || null}
         */
        this.TrainingModelVersionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.TrainingModelVersionId = 'TrainingModelVersionId' in params ? params.TrainingModelVersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 单条日志数据结构
 * @class
 */
class LogIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单条日志的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 单条日志的内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 这条日志对应的Pod名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 日志的时间戳（RFC3339格式的时间字符串）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * StopModelAccelerateTask返回参数结构体
 * @class
 */
class StopModelAccelerateTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelAccTaskId = null;

        /**
         * 异步任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AsyncTaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelAccTaskId = 'ModelAccTaskId' in params ? params.ModelAccTaskId : null;
        this.AsyncTaskId = 'AsyncTaskId' in params ? params.AsyncTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAPIConfigs返回参数结构体
 * @class
 */
class DescribeAPIConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 接口详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<APIConfigDetail> || null}
         */
        this.Details = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new APIConfigDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatasetDetailStructured请求参数结构体
 * @class
 */
class DescribeDatasetDetailStructuredRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集ID
         * @type {string || null}
         */
        this.DatasetId = null;

        /**
         * 偏移值
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据条数，默认20，目前最大支持2000条数据
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
        this.DatasetId = 'DatasetId' in params ? params.DatasetId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeModelAccelerateTask请求参数结构体
 * @class
 */
class DescribeModelAccelerateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务ID
         * @type {string || null}
         */
        this.ModelAccTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelAccTaskId = 'ModelAccTaskId' in params ? params.ModelAccTaskId : null;

    }
}

/**
 * 容器信息
 * @class
 */
class Container extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerId = null;

        /**
         * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 容器状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ContainerStatus || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;
        this.Image = 'Image' in params ? params.Image : null;

        if (params.Status) {
            let obj = new ContainerStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }

    }
}

/**
 * 图片分割参数信息
 * @class
 */
class SegmentationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点坐标数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PointInfo> || null}
         */
        this.Points = null;

        /**
         * 分割标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 灰度值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Gray = null;

        /**
         * 颜色
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Color = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new PointInfo();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Gray = 'Gray' in params ? params.Gray : null;
        this.Color = 'Color' in params ? params.Color : null;

    }
}

/**
 * ModifyModelServicePartialConfig请求参数结构体
 * @class
 */
class ModifyModelServicePartialConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 在线推理服务Id，需已存在
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 更新后服务不重启，定时停止的配置
         * @type {ScheduledAction || null}
         */
        this.ScheduledAction = null;

        /**
         * 更新后服务不重启，服务对应限流限频配置
         * @type {ServiceLimit || null}
         */
        this.ServiceLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

        if (params.ScheduledAction) {
            let obj = new ScheduledAction();
            obj.deserialize(params.ScheduledAction)
            this.ScheduledAction = obj;
        }

        if (params.ServiceLimit) {
            let obj = new ServiceLimit();
            obj.deserialize(params.ServiceLimit)
            this.ServiceLimit = obj;
        }

    }
}

/**
 * DescribeModelAccelerateTasks返回参数结构体
 * @class
 */
class DescribeModelAccelerateTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ModelAccelerateTask> || null}
         */
        this.ModelAccelerateTasks = null;

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

        if (params.ModelAccelerateTasks) {
            this.ModelAccelerateTasks = new Array();
            for (let z in params.ModelAccelerateTasks) {
                let obj = new ModelAccelerateTask();
                obj.deserialize(params.ModelAccelerateTasks[z]);
                this.ModelAccelerateTasks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDataset返回参数结构体
 * @class
 */
class DeleteDatasetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除的datasetId
         * @type {string || null}
         */
        this.DatasetId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasetId = 'DatasetId' in params ? params.DatasetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * hpa的描述
 * @class
 */
class HorizontalPodAutoscaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最小实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * 最大实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * 扩缩容指标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Option> || null}
         */
        this.HpaMetrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;

        if (params.HpaMetrics) {
            this.HpaMetrics = new Array();
            for (let z in params.HpaMetrics) {
                let obj = new Option();
                obj.deserialize(params.HpaMetrics[z]);
                this.HpaMetrics.push(obj);
            }
        }

    }
}

/**
 * CreateBatchModelAccTasks返回参数结构体
 * @class
 */
class CreateBatchModelAccTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型优化任务ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ModelAccTaskIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelAccTaskIds = 'ModelAccTaskIds' in params ? params.ModelAccTaskIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 自定义训练指标数据点
 * @class
 */
class CustomTrainingPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * X值
         * @type {number || null}
         */
        this.XValue = null;

        /**
         * Y值
         * @type {number || null}
         */
        this.YValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.XValue = 'XValue' in params ? params.XValue : null;
        this.YValue = 'YValue' in params ? params.YValue : null;

    }
}

/**
 * 服务历史版本
 * @class
 */
class ServiceHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Revision = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 镜像
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 模型文件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelFile = null;

        /**
         * 原始数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RawData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Revision = 'Revision' in params ? params.Revision : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.ModelFile = 'ModelFile' in params ? params.ModelFile : null;
        this.RawData = 'RawData' in params ? params.RawData : null;

    }
}

/**
 * 训练任务详情
 * @class
 */
class TrainingTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 训练任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 主账号uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 子账号uin
         * @type {string || null}
         */
        this.SubUin = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 训练框架名称，eg：SPARK、PYSARK、TENSORFLOW、PYTORCH
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrameworkName = null;

        /**
         * 训练框架版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrameworkVersion = null;

        /**
         * 框架运行环境
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrameworkEnvironment = null;

        /**
         * 计费模式
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 预付费专用资源组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 资源配置
         * @type {Array.<ResourceConfigInfo> || null}
         */
        this.ResourceConfigInfos = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 训练模式，eg：PS_WORKER、DDP、MPI、HOROVOD
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingMode = null;

        /**
         * 代码包
         * @type {CosPathInfo || null}
         */
        this.CodePackagePath = null;

        /**
         * 启动命令信息
         * @type {StartCmdInfo || null}
         */
        this.StartCmdInfo = null;

        /**
         * 数据来源，eg：DATASET、COS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * 数据配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataConfig> || null}
         */
        this.DataConfigs = null;

        /**
         * 调优参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TuningParameters = null;

        /**
         * 训练输出
         * @type {CosPathInfo || null}
         */
        this.Output = null;

        /**
         * 是否上报日志
         * @type {boolean || null}
         */
        this.LogEnable = null;

        /**
         * 日志配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LogConfig || null}
         */
        this.LogConfig = null;

        /**
         * VPC ID
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
         * 自定义镜像信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuntimeInSeconds = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 训练开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中
         * @type {string || null}
         */
        this.ChargeStatus = null;

        /**
         * 最近一次实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestInstanceId = null;

        /**
         * TensorBoard ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TensorBoardId = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 训练结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 计费金额信息，eg：2.00元/小时 (for后付费)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillingInfo = null;

        /**
         * 预付费专用资源组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 任务状态，eg：STARTING启动中、RUNNING运行中、STOPPING停止中、STOPPED已停止、FAILED异常、SUCCEED已完成
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 回调地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallbackUrl = null;

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
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.FrameworkName = 'FrameworkName' in params ? params.FrameworkName : null;
        this.FrameworkVersion = 'FrameworkVersion' in params ? params.FrameworkVersion : null;
        this.FrameworkEnvironment = 'FrameworkEnvironment' in params ? params.FrameworkEnvironment : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

        if (params.ResourceConfigInfos) {
            this.ResourceConfigInfos = new Array();
            for (let z in params.ResourceConfigInfos) {
                let obj = new ResourceConfigInfo();
                obj.deserialize(params.ResourceConfigInfos[z]);
                this.ResourceConfigInfos.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TrainingMode = 'TrainingMode' in params ? params.TrainingMode : null;

        if (params.CodePackagePath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.CodePackagePath)
            this.CodePackagePath = obj;
        }

        if (params.StartCmdInfo) {
            let obj = new StartCmdInfo();
            obj.deserialize(params.StartCmdInfo)
            this.StartCmdInfo = obj;
        }
        this.DataSource = 'DataSource' in params ? params.DataSource : null;

        if (params.DataConfigs) {
            this.DataConfigs = new Array();
            for (let z in params.DataConfigs) {
                let obj = new DataConfig();
                obj.deserialize(params.DataConfigs[z]);
                this.DataConfigs.push(obj);
            }
        }
        this.TuningParameters = 'TuningParameters' in params ? params.TuningParameters : null;

        if (params.Output) {
            let obj = new CosPathInfo();
            obj.deserialize(params.Output)
            this.Output = obj;
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;

        if (params.LogConfig) {
            let obj = new LogConfig();
            obj.deserialize(params.LogConfig)
            this.LogConfig = obj;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.RuntimeInSeconds = 'RuntimeInSeconds' in params ? params.RuntimeInSeconds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.LatestInstanceId = 'LatestInstanceId' in params ? params.LatestInstanceId : null;
        this.TensorBoardId = 'TensorBoardId' in params ? params.TensorBoardId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BillingInfo = 'BillingInfo' in params ? params.BillingInfo : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * DescribeTrainingTasks返回参数结构体
 * @class
 */
class DescribeTrainingTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务集
         * @type {Array.<TrainingTaskSetItem> || null}
         */
        this.TrainingTaskSet = null;

        /**
         * 数量
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

        if (params.TrainingTaskSet) {
            this.TrainingTaskSet = new Array();
            for (let z in params.TrainingTaskSet) {
                let obj = new TrainingTaskSetItem();
                obj.deserialize(params.TrainingTaskSet[z]);
                this.TrainingTaskSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 跑批任务周期描述
 * @class
 */
class CronInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * cron配置
         * @type {string || null}
         */
        this.CronConfig = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CronConfig = 'CronConfig' in params ? params.CronConfig : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 框架信息列表
 * @class
 */
class FrameworkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 框架名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 框架版本以及对应的训练模式
         * @type {Array.<FrameworkVersion> || null}
         */
        this.VersionInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.VersionInfos) {
            this.VersionInfos = new Array();
            for (let z in params.VersionInfos) {
                let obj = new FrameworkVersion();
                obj.deserialize(params.VersionInfos[z]);
                this.VersionInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeLogs返回参数结构体
 * @class
 */
class DescribeLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页的游标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogIdentity> || null}
         */
        this.Content = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new LogIdentity();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOptimizedModel请求参数结构体
 * @class
 */
class CreateOptimizedModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务ID
         * @type {string || null}
         */
        this.ModelAccTaskId = null;

        /**
         * 标签
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
        this.ModelAccTaskId = 'ModelAccTaskId' in params ? params.ModelAccTaskId : null;

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
 * DeleteModelServiceGroup请求参数结构体
 * @class
 */
class DeleteModelServiceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ServiceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;

    }
}

/**
 * 模型版本列表
 * @class
 */
class TrainingModelVersionDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型id
         * @type {string || null}
         */
        this.TrainingModelId = null;

        /**
         * 模型版本id
         * @type {string || null}
         */
        this.TrainingModelVersionId = null;

        /**
         * 模型版本
         * @type {string || null}
         */
        this.TrainingModelVersion = null;

        /**
         * 模型来源
         * @type {string || null}
         */
        this.TrainingModelSource = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.TrainingModelCreateTime = null;

        /**
         * 创建人uin
         * @type {string || null}
         */
        this.TrainingModelCreator = null;

        /**
         * 算法框架
         * @type {string || null}
         */
        this.AlgorithmFramework = null;

        /**
         * 推理环境
         * @type {string || null}
         */
        this.ReasoningEnvironment = null;

        /**
         * 推理环境来源
         * @type {string || null}
         */
        this.ReasoningEnvironmentSource = null;

        /**
         * 模型指标
         * @type {string || null}
         */
        this.TrainingModelIndex = null;

        /**
         * 训练任务名称
         * @type {string || null}
         */
        this.TrainingJobName = null;

        /**
         * 模型cos路径
         * @type {CosPathInfo || null}
         */
        this.TrainingModelCosPath = null;

        /**
         * 模型名称
         * @type {string || null}
         */
        this.TrainingModelName = null;

        /**
         * 训练任务id
         * @type {string || null}
         */
        this.TrainingJobId = null;

        /**
         * 自定义推理环境
         * @type {ImageInfo || null}
         */
        this.ReasoningImageInfo = null;

        /**
         * 模型版本创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模型处理状态
STATUS_SUCCESS：导入成功，STATUS_FAILED：导入失败 ，STATUS_RUNNING：导入中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingModelStatus = null;

        /**
         * 模型处理进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TrainingModelProgress = null;

        /**
         * 模型错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingModelErrorMsg = null;

        /**
         * 模型格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingModelFormat = null;

        /**
         * 模型版本类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionType = null;

        /**
         * GPU类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GPUType = null;

        /**
         * 模型自动清理开关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AutoClean = null;

        /**
         * 模型清理周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ModelCleanPeriod = null;

        /**
         * 模型数量保留上限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxReservedModels = null;

        /**
         * 模型热更新目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosPathInfo || null}
         */
        this.ModelHotUpdatePath = null;

        /**
         * 推理环境id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReasoningEnvironmentId = null;

        /**
         * 训练任务版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingJobVersion = null;

        /**
         * 训练偏好
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingPreference = null;

        /**
         * 自动学习任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AutoMLTaskId = null;

        /**
         * 是否QAT模型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsQAT = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrainingModelId = 'TrainingModelId' in params ? params.TrainingModelId : null;
        this.TrainingModelVersionId = 'TrainingModelVersionId' in params ? params.TrainingModelVersionId : null;
        this.TrainingModelVersion = 'TrainingModelVersion' in params ? params.TrainingModelVersion : null;
        this.TrainingModelSource = 'TrainingModelSource' in params ? params.TrainingModelSource : null;
        this.TrainingModelCreateTime = 'TrainingModelCreateTime' in params ? params.TrainingModelCreateTime : null;
        this.TrainingModelCreator = 'TrainingModelCreator' in params ? params.TrainingModelCreator : null;
        this.AlgorithmFramework = 'AlgorithmFramework' in params ? params.AlgorithmFramework : null;
        this.ReasoningEnvironment = 'ReasoningEnvironment' in params ? params.ReasoningEnvironment : null;
        this.ReasoningEnvironmentSource = 'ReasoningEnvironmentSource' in params ? params.ReasoningEnvironmentSource : null;
        this.TrainingModelIndex = 'TrainingModelIndex' in params ? params.TrainingModelIndex : null;
        this.TrainingJobName = 'TrainingJobName' in params ? params.TrainingJobName : null;

        if (params.TrainingModelCosPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.TrainingModelCosPath)
            this.TrainingModelCosPath = obj;
        }
        this.TrainingModelName = 'TrainingModelName' in params ? params.TrainingModelName : null;
        this.TrainingJobId = 'TrainingJobId' in params ? params.TrainingJobId : null;

        if (params.ReasoningImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ReasoningImageInfo)
            this.ReasoningImageInfo = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TrainingModelStatus = 'TrainingModelStatus' in params ? params.TrainingModelStatus : null;
        this.TrainingModelProgress = 'TrainingModelProgress' in params ? params.TrainingModelProgress : null;
        this.TrainingModelErrorMsg = 'TrainingModelErrorMsg' in params ? params.TrainingModelErrorMsg : null;
        this.TrainingModelFormat = 'TrainingModelFormat' in params ? params.TrainingModelFormat : null;
        this.VersionType = 'VersionType' in params ? params.VersionType : null;
        this.GPUType = 'GPUType' in params ? params.GPUType : null;
        this.AutoClean = 'AutoClean' in params ? params.AutoClean : null;
        this.ModelCleanPeriod = 'ModelCleanPeriod' in params ? params.ModelCleanPeriod : null;
        this.MaxReservedModels = 'MaxReservedModels' in params ? params.MaxReservedModels : null;

        if (params.ModelHotUpdatePath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.ModelHotUpdatePath)
            this.ModelHotUpdatePath = obj;
        }
        this.ReasoningEnvironmentId = 'ReasoningEnvironmentId' in params ? params.ReasoningEnvironmentId : null;
        this.TrainingJobVersion = 'TrainingJobVersion' in params ? params.TrainingJobVersion : null;
        this.TrainingPreference = 'TrainingPreference' in params ? params.TrainingPreference : null;
        this.AutoMLTaskId = 'AutoMLTaskId' in params ? params.AutoMLTaskId : null;
        this.IsQAT = 'IsQAT' in params ? params.IsQAT : null;

    }
}

/**
 * PushTrainingMetrics请求参数结构体
 * @class
 */
class PushTrainingMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标数据
         * @type {Array.<MetricData> || null}
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
                let obj = new MetricData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * DescribeTrainingTask请求参数结构体
 * @class
 */
class DescribeTrainingTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务ID
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
 * 文件行信息
 * @class
 */
class RowValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 列值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 出参类型
 * @class
 */
class TrainingTaskSetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 训练任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 框架名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrameworkName = null;

        /**
         * 训练框架版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrameworkVersion = null;

        /**
         * 框架运行环境
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrameworkEnvironment = null;

        /**
         * 计费模式
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 计费状态，eg：BILLING计费中，ARREARS_STOP欠费停止，NOT_BILLING不在计费中
         * @type {string || null}
         */
        this.ChargeStatus = null;

        /**
         * 预付费专用资源组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceGroupId = null;

        /**
         * 资源配置
         * @type {Array.<ResourceConfigInfo> || null}
         */
        this.ResourceConfigInfos = null;

        /**
         * 训练模式eg：PS_WORKER、DDP、MPI、HOROVOD
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingMode = null;

        /**
         * 任务状态，eg：STARTING启动中、RUNNING运行中、STOPPING停止中、STOPPED已停止、FAILED异常、SUCCEED已完成
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuntimeInSeconds = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 训练开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 训练结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 训练输出
         * @type {CosPathInfo || null}
         */
        this.Output = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 计费金额信息，eg：2.00元/小时 (for后付费)
         * @type {string || null}
         */
        this.BillingInfo = null;

        /**
         * 预付费专用资源组名称
         * @type {string || null}
         */
        this.ResourceGroupName = null;

        /**
         * 自定义镜像信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 标签配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 回调地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallbackUrl = null;

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
        this.FrameworkName = 'FrameworkName' in params ? params.FrameworkName : null;
        this.FrameworkVersion = 'FrameworkVersion' in params ? params.FrameworkVersion : null;
        this.FrameworkEnvironment = 'FrameworkEnvironment' in params ? params.FrameworkEnvironment : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.ResourceGroupId = 'ResourceGroupId' in params ? params.ResourceGroupId : null;

        if (params.ResourceConfigInfos) {
            this.ResourceConfigInfos = new Array();
            for (let z in params.ResourceConfigInfos) {
                let obj = new ResourceConfigInfo();
                obj.deserialize(params.ResourceConfigInfos[z]);
                this.ResourceConfigInfos.push(obj);
            }
        }
        this.TrainingMode = 'TrainingMode' in params ? params.TrainingMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuntimeInSeconds = 'RuntimeInSeconds' in params ? params.RuntimeInSeconds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Output) {
            let obj = new CosPathInfo();
            obj.deserialize(params.Output)
            this.Output = obj;
        }
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.BillingInfo = 'BillingInfo' in params ? params.BillingInfo : null;
        this.ResourceGroupName = 'ResourceGroupName' in params ? params.ResourceGroupName : null;

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * DescribeTrainingModelVersions返回参数结构体
 * @class
 */
class DescribeTrainingModelVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型版本列表
         * @type {Array.<TrainingModelVersionDTO> || null}
         */
        this.TrainingModelVersions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TrainingModelVersions) {
            this.TrainingModelVersions = new Array();
            for (let z in params.TrainingModelVersions) {
                let obj = new TrainingModelVersionDTO();
                obj.deserialize(params.TrainingModelVersions[z]);
                this.TrainingModelVersions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 模型输入信息
 * @class
 */
class ModelInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * input数据类型
FIXED：固定
RANGE：浮动
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelInputType = null;

        /**
         * input数据尺寸
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ModelInputDimension = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelInputType = 'ModelInputType' in params ? params.ModelInputType : null;
        this.ModelInputDimension = 'ModelInputDimension' in params ? params.ModelInputDimension : null;

    }
}

/**
 * DeleteDataset请求参数结构体
 * @class
 */
class DeleteDatasetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集id
         * @type {string || null}
         */
        this.DatasetId = null;

        /**
         * 是否删除cos标签文件
         * @type {boolean || null}
         */
        this.DeleteLabelEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasetId = 'DatasetId' in params ? params.DatasetId : null;
        this.DeleteLabelEnable = 'DeleteLabelEnable' in params ? params.DeleteLabelEnable : null;

    }
}

/**
 * 自定义指标
 * @class
 */
class CustomTrainingMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * X轴数据类型: TIMESTAMP; EPOCH; STEP
         * @type {string || null}
         */
        this.XType = null;

        /**
         * 数据点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CustomTrainingPoint> || null}
         */
        this.Points = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.XType = 'XType' in params ? params.XType : null;

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new CustomTrainingPoint();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }

    }
}

/**
 * 数据配置
 * @class
 */
class DataConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 映射路径
         * @type {string || null}
         */
        this.MappingPath = null;

        /**
         * DATASET、COS、CFS、HDFS、WEDATA_HDFS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSourceType = null;

        /**
         * 来自数据集的数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DataSetConfig || null}
         */
        this.DataSetSource = null;

        /**
         * 来自cos的数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosPathInfo || null}
         */
        this.COSSource = null;

        /**
         * 来自CFS的数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CFSConfig || null}
         */
        this.CFSSource = null;

        /**
         * 来自HDFS的数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HDFSConfig || null}
         */
        this.HDFSSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MappingPath = 'MappingPath' in params ? params.MappingPath : null;
        this.DataSourceType = 'DataSourceType' in params ? params.DataSourceType : null;

        if (params.DataSetSource) {
            let obj = new DataSetConfig();
            obj.deserialize(params.DataSetSource)
            this.DataSetSource = obj;
        }

        if (params.COSSource) {
            let obj = new CosPathInfo();
            obj.deserialize(params.COSSource)
            this.COSSource = obj;
        }

        if (params.CFSSource) {
            let obj = new CFSConfig();
            obj.deserialize(params.CFSSource)
            this.CFSSource = obj;
        }

        if (params.HDFSSource) {
            let obj = new HDFSConfig();
            obj.deserialize(params.HDFSSource)
            this.HDFSSource = obj;
        }

    }
}

/**
 * DescribeTrainingModelVersion请求参数结构体
 * @class
 */
class DescribeTrainingModelVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型版本ID
         * @type {string || null}
         */
        this.TrainingModelVersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrainingModelVersionId = 'TrainingModelVersionId' in params ? params.TrainingModelVersionId : null;

    }
}

/**
 * DescribeModelAccelerateTasks请求参数结构体
 * @class
 */
class DescribeModelAccelerateTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤器
ModelAccTaskName 任务名称
ModelSource 模型来源
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段，默认CreateTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式：ASC/DESC，默认DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签过滤
         * @type {Array.<TagFilter> || null}
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * PushTrainingMetrics返回参数结构体
 * @class
 */
class PushTrainingMetricsResponse extends  AbstractModel {
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
 * StopTrainingTask返回参数结构体
 * @class
 */
class StopTrainingTaskResponse extends  AbstractModel {
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
 * CreateOptimizedModel返回参数结构体
 * @class
 */
class CreateOptimizedModelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 模型版本ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelVersionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelVersionId = 'ModelVersionId' in params ? params.ModelVersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HDFS的参数配置
 * @class
 */
class HDFSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID,实例ID形如: emr-xxxxxxxx
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 路径
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * DescribeTrainingMetrics返回参数结构体
 * @class
 */
class DescribeTrainingMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 训练指标数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CustomTrainingData> || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CustomTrainingData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTrainingTaskPods返回参数结构体
 * @class
 */
class DescribeTrainingTaskPodsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * pod名称列表
         * @type {Array.<string> || null}
         */
        this.PodNames = null;

        /**
         * 数量
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
        this.PodNames = 'PodNames' in params ? params.PodNames : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 模型加速任务
 * @class
 */
class ModelAccelerateTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型加速任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelAccTaskId = null;

        /**
         * 模型加速任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelAccTaskName = null;

        /**
         * 模型ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * 模型版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelVersion = null;

        /**
         * 模型来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelSource = null;

        /**
         * 优化级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OptimizationLevel = null;

        /**
         * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * input节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ModelInputNum = null;

        /**
         * input节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ModelInputInfo> || null}
         */
        this.ModelInputInfos = null;

        /**
         * GPU型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GPUType = null;

        /**
         * 计费模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 加速比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Speedup = null;

        /**
         * 模型输入cos路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosPathInfo || null}
         */
        this.ModelInputPath = null;

        /**
         * 模型输出cos路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosPathInfo || null}
         */
        this.ModelOutputPath = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * 算法框架
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlgorithmFramework = null;

        /**
         * 排队个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WaitNumber = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskProgress = null;

        /**
         * 模型格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelFormat = null;

        /**
         * 模型Tensor信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TensorInfos = null;

        /**
         * 模型专业参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HyperParameter || null}
         */
        this.HyperParameter = null;

        /**
         * 加速引擎版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccEngineVersion = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 优化模型是否已保存到模型仓库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsSaved = null;

        /**
         * SAVED_MODEL保存时配置的签名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelSignature = null;

        /**
         * 是否是QAT模型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.QATModel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelAccTaskId = 'ModelAccTaskId' in params ? params.ModelAccTaskId : null;
        this.ModelAccTaskName = 'ModelAccTaskName' in params ? params.ModelAccTaskName : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.ModelVersion = 'ModelVersion' in params ? params.ModelVersion : null;
        this.ModelSource = 'ModelSource' in params ? params.ModelSource : null;
        this.OptimizationLevel = 'OptimizationLevel' in params ? params.OptimizationLevel : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.ModelInputNum = 'ModelInputNum' in params ? params.ModelInputNum : null;

        if (params.ModelInputInfos) {
            this.ModelInputInfos = new Array();
            for (let z in params.ModelInputInfos) {
                let obj = new ModelInputInfo();
                obj.deserialize(params.ModelInputInfos[z]);
                this.ModelInputInfos.push(obj);
            }
        }
        this.GPUType = 'GPUType' in params ? params.GPUType : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.Speedup = 'Speedup' in params ? params.Speedup : null;

        if (params.ModelInputPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.ModelInputPath)
            this.ModelInputPath = obj;
        }

        if (params.ModelOutputPath) {
            let obj = new CosPathInfo();
            obj.deserialize(params.ModelOutputPath)
            this.ModelOutputPath = obj;
        }
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.AlgorithmFramework = 'AlgorithmFramework' in params ? params.AlgorithmFramework : null;
        this.WaitNumber = 'WaitNumber' in params ? params.WaitNumber : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TaskProgress = 'TaskProgress' in params ? params.TaskProgress : null;
        this.ModelFormat = 'ModelFormat' in params ? params.ModelFormat : null;
        this.TensorInfos = 'TensorInfos' in params ? params.TensorInfos : null;

        if (params.HyperParameter) {
            let obj = new HyperParameter();
            obj.deserialize(params.HyperParameter)
            this.HyperParameter = obj;
        }
        this.AccEngineVersion = 'AccEngineVersion' in params ? params.AccEngineVersion : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.IsSaved = 'IsSaved' in params ? params.IsSaved : null;
        this.ModelSignature = 'ModelSignature' in params ? params.ModelSignature : null;
        this.QATModel = 'QATModel' in params ? params.QATModel : null;

    }
}

/**
 * 环境变量
 * @class
 */
class EnvVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境变量key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 环境变量value
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * OCR场景标签列表
 * @class
 */
class OcrLabelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 坐标点围起来的框
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PointInfo> || null}
         */
        this.Points = null;

        /**
         * 框的形状：
FRAME_TYPE_RECTANGLE
FRAME_TYPE_POLYGON
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrameType = null;

        /**
         * 智能结构化：key区域对应的内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 智能结构化：上述key的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 识别：框区域的内容
智能结构化：value区域对应的内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 智能结构化：value区域所关联的key 区域的keyID的集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KeyIdsForValue = null;

        /**
         * key或者value区域内容的方向：
DIRECTION_VERTICAL
DIRECTION_HORIZONTAL
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new PointInfo();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }
        this.FrameType = 'FrameType' in params ? params.FrameType : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.KeyIdsForValue = 'KeyIdsForValue' in params ? params.KeyIdsForValue : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DeleteTrainingModel请求参数结构体
 * @class
 */
class DeleteTrainingModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型ID
         * @type {string || null}
         */
        this.TrainingModelId = null;

        /**
         * 是否同步清理cos
         * @type {boolean || null}
         */
        this.EnableDeleteCos = null;

        /**
         * 删除模型类型，枚举值：NORMAL 普通，ACCELERATE 加速，不传则删除所有
         * @type {string || null}
         */
        this.ModelVersionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrainingModelId = 'TrainingModelId' in params ? params.TrainingModelId : null;
        this.EnableDeleteCos = 'EnableDeleteCos' in params ? params.EnableDeleteCos : null;
        this.ModelVersionType = 'ModelVersionType' in params ? params.ModelVersionType : null;

    }
}

/**
 * 点信息描述
 * @class
 */
class PointInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * X坐标值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.X = null;

        /**
         * Y坐标值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Y = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;

    }
}

/**
 * DescribeModelServiceHotUpdated请求参数结构体
 * @class
 */
class DescribeModelServiceHotUpdatedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像信息，配置服务运行所需的镜像地址等信息
         * @type {ImageInfo || null}
         */
        this.ImageInfo = null;

        /**
         * 模型信息，需要挂载模型时填写
         * @type {ModelInfo || null}
         */
        this.ModelInfo = null;

        /**
         * 挂载信息
         * @type {VolumeMount || null}
         */
        this.VolumeMount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageInfo) {
            let obj = new ImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }

        if (params.ModelInfo) {
            let obj = new ModelInfo();
            obj.deserialize(params.ModelInfo)
            this.ModelInfo = obj;
        }

        if (params.VolumeMount) {
            let obj = new VolumeMount();
            obj.deserialize(params.VolumeMount)
            this.VolumeMount = obj;
        }

    }
}

/**
 * DescribeTrainingTask返回参数结构体
 * @class
 */
class DescribeTrainingTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务详情
         * @type {TrainingTaskDetail || null}
         */
        this.TrainingTaskDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TrainingTaskDetail) {
            let obj = new TrainingTaskDetail();
            obj.deserialize(params.TrainingTaskDetail)
            this.TrainingTaskDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBatchTask返回参数结构体
 * @class
 */
class DescribeBatchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跑批任务详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BatchTaskDetail || null}
         */
        this.BatchTaskDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BatchTaskDetail) {
            let obj = new BatchTaskDetail();
            obj.deserialize(params.BatchTaskDetail)
            this.BatchTaskDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 默认Nginx网关结构
 * @class
 */
class DefaultNginxGatewayCallInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * host
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * 指标数据
 * @class
 */
class MetricData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 时间戳.unix timestamp,单位为秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 本次上报数据所处的训练周期数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Epoch = null;

        /**
         * 本次上报数据所处的训练迭代次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Step = null;

        /**
         * 训练停止所需的迭代总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSteps = null;

        /**
         * 数据点。数组元素为不同指标的数据。数组长度不超过10。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataPoint> || null}
         */
        this.Points = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Epoch = 'Epoch' in params ? params.Epoch : null;
        this.Step = 'Step' in params ? params.Step : null;
        this.TotalSteps = 'TotalSteps' in params ? params.TotalSteps : null;

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new DataPoint();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }

    }
}

/**
 * DeleteTrainingModelVersion请求参数结构体
 * @class
 */
class DeleteTrainingModelVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型版本ID
         * @type {string || null}
         */
        this.TrainingModelVersionId = null;

        /**
         * 是否同步清理cos
         * @type {boolean || null}
         */
        this.EnableDeleteCos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrainingModelVersionId = 'TrainingModelVersionId' in params ? params.TrainingModelVersionId : null;
        this.EnableDeleteCos = 'EnableDeleteCos' in params ? params.EnableDeleteCos : null;

    }
}

/**
 * DescribeModelAccEngineVersions请求参数结构体
 * @class
 */
class DescribeModelAccEngineVersionsRequest extends  AbstractModel {
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
 * DescribeBillingSpecsPrice返回参数结构体
 * @class
 */
class DescribeBillingSpecsPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费项价格，支持批量返回
         * @type {Array.<SpecPrice> || null}
         */
        this.SpecsPrice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpecsPrice) {
            this.SpecsPrice = new Array();
            for (let z in params.SpecsPrice) {
                let obj = new SpecPrice();
                obj.deserialize(params.SpecsPrice[z]);
                this.SpecsPrice.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTrainingModelVersion返回参数结构体
 * @class
 */
class DescribeTrainingModelVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型版本
         * @type {TrainingModelVersionDTO || null}
         */
        this.TrainingModelVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TrainingModelVersion) {
            let obj = new TrainingModelVersionDTO();
            obj.deserialize(params.TrainingModelVersion)
            this.TrainingModelVersion = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 一级标签
 * @class
 */
class TextLabelDistributionDetailInfoFirstClass extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LabelValue = null;

        /**
         * 标签个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelCount = null;

        /**
         * 标签占比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LabelPercentage = null;

        /**
         * 子标签分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextLabelDistributionDetailInfoSecondClass> || null}
         */
        this.ChildLabelList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelValue = 'LabelValue' in params ? params.LabelValue : null;
        this.LabelCount = 'LabelCount' in params ? params.LabelCount : null;
        this.LabelPercentage = 'LabelPercentage' in params ? params.LabelPercentage : null;

        if (params.ChildLabelList) {
            this.ChildLabelList = new Array();
            for (let z in params.ChildLabelList) {
                let obj = new TextLabelDistributionDetailInfoSecondClass();
                obj.deserialize(params.ChildLabelList[z]);
                this.ChildLabelList.push(obj);
            }
        }

    }
}

/**
 * DescribeModelServices返回参数结构体
 * @class
 */
class DescribeModelServicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Service> || null}
         */
        this.Services = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Services) {
            this.Services = new Array();
            for (let z in params.Services) {
                let obj = new Service();
                obj.deserialize(params.Services[z]);
                this.Services.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopTrainingTask请求参数结构体
 * @class
 */
class StopTrainingTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务ID
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
 * 日志配置
 * @class
 */
class LogConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志需要投递到cls的日志集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志需要投递到cls的主题
注意：此字段可能返回 null，表示取不到有效值。
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * StartTrainingTask返回参数结构体
 * @class
 */
class StartTrainingTaskResponse extends  AbstractModel {
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
    CreateModelServiceRequest: CreateModelServiceRequest,
    ModelInfo: ModelInfo,
    DescribeLogsRequest: DescribeLogsRequest,
    StopModelAccelerateTaskRequest: StopModelAccelerateTaskRequest,
    DeleteTrainingModelVersionResponse: DeleteTrainingModelVersionResponse,
    BatchTaskDetail: BatchTaskDetail,
    StartTrainingTaskRequest: StartTrainingTaskRequest,
    DescribeDatasetDetailStructuredResponse: DescribeDatasetDetailStructuredResponse,
    ModifyServiceGroupWeightsResponse: ModifyServiceGroupWeightsResponse,
    RestartModelAccelerateTaskRequest: RestartModelAccelerateTaskRequest,
    DescribeBillingResourceGroupsRequest: DescribeBillingResourceGroupsRequest,
    DescribeTrainingFrameworksResponse: DescribeTrainingFrameworksResponse,
    DescribeModelServiceGroupRequest: DescribeModelServiceGroupRequest,
    TrainingMetric: TrainingMetric,
    DescribeTrainingModelVersionsRequest: DescribeTrainingModelVersionsRequest,
    SpecUnit: SpecUnit,
    CreateDatasetResponse: CreateDatasetResponse,
    Service: Service,
    HyperParameter: HyperParameter,
    ModifyServiceGroupWeightsRequest: ModifyServiceGroupWeightsRequest,
    DescribeTrainingTasksRequest: DescribeTrainingTasksRequest,
    DescribeBatchTaskRequest: DescribeBatchTaskRequest,
    DescribeDatasetDetailUnstructuredRequest: DescribeDatasetDetailUnstructuredRequest,
    VolumeMount: VolumeMount,
    StopBatchTaskResponse: StopBatchTaskResponse,
    ServiceCallInfo: ServiceCallInfo,
    CosPathInfo: CosPathInfo,
    DescribeBillingResourceGroupsResponse: DescribeBillingResourceGroupsResponse,
    SpecPrice: SpecPrice,
    DescribeTrainingMetricsRequest: DescribeTrainingMetricsRequest,
    DescribeTrainingTaskPodsRequest: DescribeTrainingTaskPodsRequest,
    CreateBatchTaskRequest: CreateBatchTaskRequest,
    DescribeLatestTrainingMetricsResponse: DescribeLatestTrainingMetricsResponse,
    DescribeDatasetDetailUnstructuredResponse: DescribeDatasetDetailUnstructuredResponse,
    FilterLabelInfo: FilterLabelInfo,
    WorkloadStatus: WorkloadStatus,
    CFSConfig: CFSConfig,
    APIConfigDetail: APIConfigDetail,
    InferTemplate: InferTemplate,
    StopBatchTaskRequest: StopBatchTaskRequest,
    ContainerStatus: ContainerStatus,
    ModifyModelServiceRequest: ModifyModelServiceRequest,
    FrameworkVersion: FrameworkVersion,
    ModifyModelServicePartialConfigResponse: ModifyModelServicePartialConfigResponse,
    DescribeModelAccEngineVersionsResponse: DescribeModelAccEngineVersionsResponse,
    DescribeModelServiceCallInfoRequest: DescribeModelServiceCallInfoRequest,
    DataPoint: DataPoint,
    TagFilter: TagFilter,
    CreateTrainingModelRequest: CreateTrainingModelRequest,
    SchemaInfo: SchemaInfo,
    StartCmdInfo: StartCmdInfo,
    DescribeAPIConfigsRequest: DescribeAPIConfigsRequest,
    DescribeModelServiceGroupsResponse: DescribeModelServiceGroupsResponse,
    DeleteBatchTaskRequest: DeleteBatchTaskRequest,
    DescribeTrainingModelsResponse: DescribeTrainingModelsResponse,
    DescribeBatchTaskInstancesResponse: DescribeBatchTaskInstancesResponse,
    DescribeModelServicesRequest: DescribeModelServicesRequest,
    ModelAccEngineVersion: ModelAccEngineVersion,
    ResourceConfigInfo: ResourceConfigInfo,
    Spec: Spec,
    TextLabelDistributionInfo: TextLabelDistributionInfo,
    Option: Option,
    ResourceGroup: ResourceGroup,
    DescribeBatchTaskInstancesRequest: DescribeBatchTaskInstancesRequest,
    DescribeModelServiceHistoryRequest: DescribeModelServiceHistoryRequest,
    Tag: Tag,
    DescribeDatasetsRequest: DescribeDatasetsRequest,
    DeleteTrainingModelResponse: DeleteTrainingModelResponse,
    DescribeInferTemplatesResponse: DescribeInferTemplatesResponse,
    DescribeBillingSpecsRequest: DescribeBillingSpecsRequest,
    InferGatewayCallInfo: InferGatewayCallInfo,
    DescribeInferTemplatesRequest: DescribeInferTemplatesRequest,
    DeleteModelServiceGroupResponse: DeleteModelServiceGroupResponse,
    GpuDetail: GpuDetail,
    DescribeTrainingFrameworksRequest: DescribeTrainingFrameworksRequest,
    DescribeBatchTasksResponse: DescribeBatchTasksResponse,
    CronScaleJob: CronScaleJob,
    InferTemplateGroup: InferTemplateGroup,
    DescribeModelServiceHotUpdatedResponse: DescribeModelServiceHotUpdatedResponse,
    DatasetInfo: DatasetInfo,
    DescribeModelAccelerateTaskResponse: DescribeModelAccelerateTaskResponse,
    DetectionLabelInfo: DetectionLabelInfo,
    DescribeModelServiceGroupsRequest: DescribeModelServiceGroupsRequest,
    TextLabelDistributionDetailInfoSecondClass: TextLabelDistributionDetailInfoSecondClass,
    BatchTaskSetItem: BatchTaskSetItem,
    ImageInfo: ImageInfo,
    ServiceInfo: ServiceInfo,
    DescribeModelServiceRequest: DescribeModelServiceRequest,
    CreateTrainingTaskResponse: CreateTrainingTaskResponse,
    DeleteModelServiceRequest: DeleteModelServiceRequest,
    DeleteModelAccelerateTaskRequest: DeleteModelAccelerateTaskRequest,
    CreateTrainingTaskRequest: CreateTrainingTaskRequest,
    StatefulSetCondition: StatefulSetCondition,
    DescribeModelServiceResponse: DescribeModelServiceResponse,
    DescribeDatasetsResponse: DescribeDatasetsResponse,
    RestartModelAccelerateTaskResponse: RestartModelAccelerateTaskResponse,
    CreateBatchModelAccTasksRequest: CreateBatchModelAccTasksRequest,
    DescribeBillingSpecsPriceRequest: DescribeBillingSpecsPriceRequest,
    WeightEntry: WeightEntry,
    Instance: Instance,
    DescribeBillingSpecsResponse: DescribeBillingSpecsResponse,
    DeleteTrainingTaskResponse: DeleteTrainingTaskResponse,
    TextLabelDistributionDetailInfoFifthClass: TextLabelDistributionDetailInfoFifthClass,
    BatchTaskInstance: BatchTaskInstance,
    CreateBatchTaskResponse: CreateBatchTaskResponse,
    DeleteModelServiceResponse: DeleteModelServiceResponse,
    DatasetGroup: DatasetGroup,
    DescribeTrainingModelsRequest: DescribeTrainingModelsRequest,
    TrainingDataPoint: TrainingDataPoint,
    TextLabelDistributionDetailInfoFourthClass: TextLabelDistributionDetailInfoFourthClass,
    Pod: Pod,
    DescribeLatestTrainingMetricsRequest: DescribeLatestTrainingMetricsRequest,
    ResourceInfo: ResourceInfo,
    GroupResource: GroupResource,
    DescribeModelServiceCallInfoResponse: DescribeModelServiceCallInfoResponse,
    DataSetConfig: DataSetConfig,
    ScheduledAction: ScheduledAction,
    DeleteModelAccelerateTaskResponse: DeleteModelAccelerateTaskResponse,
    DeleteTrainingTaskRequest: DeleteTrainingTaskRequest,
    DescribeModelServiceHistoryResponse: DescribeModelServiceHistoryResponse,
    BatchModelAccTask: BatchModelAccTask,
    Filter: Filter,
    ModifyModelServiceResponse: ModifyModelServiceResponse,
    DeleteBatchTaskResponse: DeleteBatchTaskResponse,
    EngineVersion: EngineVersion,
    DescribeBatchTasksRequest: DescribeBatchTasksRequest,
    CreateDatasetRequest: CreateDatasetRequest,
    CreateModelServiceResponse: CreateModelServiceResponse,
    ServiceGroup: ServiceGroup,
    TrainingModelDTO: TrainingModelDTO,
    ServiceLimit: ServiceLimit,
    DescribeModelServiceGroupResponse: DescribeModelServiceGroupResponse,
    TextLabelDistributionDetailInfoThirdClass: TextLabelDistributionDetailInfoThirdClass,
    CustomTrainingData: CustomTrainingData,
    RowItem: RowItem,
    CreateTrainingModelResponse: CreateTrainingModelResponse,
    LogIdentity: LogIdentity,
    StopModelAccelerateTaskResponse: StopModelAccelerateTaskResponse,
    DescribeAPIConfigsResponse: DescribeAPIConfigsResponse,
    DescribeDatasetDetailStructuredRequest: DescribeDatasetDetailStructuredRequest,
    DescribeModelAccelerateTaskRequest: DescribeModelAccelerateTaskRequest,
    Container: Container,
    SegmentationInfo: SegmentationInfo,
    ModifyModelServicePartialConfigRequest: ModifyModelServicePartialConfigRequest,
    DescribeModelAccelerateTasksResponse: DescribeModelAccelerateTasksResponse,
    DeleteDatasetResponse: DeleteDatasetResponse,
    HorizontalPodAutoscaler: HorizontalPodAutoscaler,
    CreateBatchModelAccTasksResponse: CreateBatchModelAccTasksResponse,
    CustomTrainingPoint: CustomTrainingPoint,
    ServiceHistory: ServiceHistory,
    TrainingTaskDetail: TrainingTaskDetail,
    DescribeTrainingTasksResponse: DescribeTrainingTasksResponse,
    CronInfo: CronInfo,
    FrameworkInfo: FrameworkInfo,
    DescribeLogsResponse: DescribeLogsResponse,
    CreateOptimizedModelRequest: CreateOptimizedModelRequest,
    DeleteModelServiceGroupRequest: DeleteModelServiceGroupRequest,
    TrainingModelVersionDTO: TrainingModelVersionDTO,
    PushTrainingMetricsRequest: PushTrainingMetricsRequest,
    DescribeTrainingTaskRequest: DescribeTrainingTaskRequest,
    RowValue: RowValue,
    TrainingTaskSetItem: TrainingTaskSetItem,
    DescribeTrainingModelVersionsResponse: DescribeTrainingModelVersionsResponse,
    ModelInputInfo: ModelInputInfo,
    DeleteDatasetRequest: DeleteDatasetRequest,
    CustomTrainingMetric: CustomTrainingMetric,
    DataConfig: DataConfig,
    DescribeTrainingModelVersionRequest: DescribeTrainingModelVersionRequest,
    DescribeModelAccelerateTasksRequest: DescribeModelAccelerateTasksRequest,
    PushTrainingMetricsResponse: PushTrainingMetricsResponse,
    StopTrainingTaskResponse: StopTrainingTaskResponse,
    CreateOptimizedModelResponse: CreateOptimizedModelResponse,
    HDFSConfig: HDFSConfig,
    DescribeTrainingMetricsResponse: DescribeTrainingMetricsResponse,
    DescribeTrainingTaskPodsResponse: DescribeTrainingTaskPodsResponse,
    ModelAccelerateTask: ModelAccelerateTask,
    EnvVar: EnvVar,
    OcrLabelInfo: OcrLabelInfo,
    DeleteTrainingModelRequest: DeleteTrainingModelRequest,
    PointInfo: PointInfo,
    DescribeModelServiceHotUpdatedRequest: DescribeModelServiceHotUpdatedRequest,
    DescribeTrainingTaskResponse: DescribeTrainingTaskResponse,
    DescribeBatchTaskResponse: DescribeBatchTaskResponse,
    DefaultNginxGatewayCallInfo: DefaultNginxGatewayCallInfo,
    MetricData: MetricData,
    DeleteTrainingModelVersionRequest: DeleteTrainingModelVersionRequest,
    DescribeModelAccEngineVersionsRequest: DescribeModelAccEngineVersionsRequest,
    DescribeBillingSpecsPriceResponse: DescribeBillingSpecsPriceResponse,
    DescribeTrainingModelVersionResponse: DescribeTrainingModelVersionResponse,
    TextLabelDistributionDetailInfoFirstClass: TextLabelDistributionDetailInfoFirstClass,
    DescribeModelServicesResponse: DescribeModelServicesResponse,
    StopTrainingTaskRequest: StopTrainingTaskRequest,
    LogConfig: LogConfig,
    StartTrainingTaskResponse: StartTrainingTaskResponse,

}
