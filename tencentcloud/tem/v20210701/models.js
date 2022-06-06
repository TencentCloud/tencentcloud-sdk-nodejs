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
 * 挂载配置信息
 * @class
 */
class MountedSettingConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置名称
         * @type {string || null}
         */
        this.ConfigDataName = null;

        /**
         * 挂载路径
         * @type {string || null}
         */
        this.MountedPath = null;

        /**
         * 配置内容
         * @type {Array.<Pair> || null}
         */
        this.Data = null;

        /**
         * 加密配置名称
         * @type {string || null}
         */
        this.SecretDataName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigDataName = 'ConfigDataName' in params ? params.ConfigDataName : null;
        this.MountedPath = 'MountedPath' in params ? params.MountedPath : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new Pair();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.SecretDataName = 'SecretDataName' in params ? params.SecretDataName : null;

    }
}

/**
 * RestartApplicationPod返回参数结构体
 * @class
 */
class RestartApplicationPodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplication请求参数结构体
 * @class
 */
class DeleteApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务Id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 当服务没有任何运行版本时，是否删除此服务
         * @type {boolean || null}
         */
        this.DeleteApplicationIfNoRunningVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.DeleteApplicationIfNoRunningVersion = 'DeleteApplicationIfNoRunningVersion' in params ? params.DeleteApplicationIfNoRunningVersion : null;

    }
}

/**
 * CreateResource请求参数结构体
 * @class
 */
class CreateResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境 Id
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 资源类型，目前支持文件系统：CFS；日志服务：CLS；注册中心：TSE_SRE
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源 Id
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 资源来源，目前支持：existing，已有资源；creating，自动创建
         * @type {string || null}
         */
        this.ResourceFrom = null;

        /**
         * 设置 resource 的额外配置
         * @type {string || null}
         */
        this.ResourceConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.ResourceFrom = 'ResourceFrom' in params ? params.ResourceFrom : null;
        this.ResourceConfig = 'ResourceConfig' in params ? params.ResourceConfig : null;

    }
}

/**
 * ResumeDeployApplication返回参数结构体
 * @class
 */
class ResumeDeployApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartApplication返回参数结构体
 * @class
 */
class RestartApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopApplication请求参数结构体
 * @class
 */
class StopApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

    }
}

/**
 * 健康检查配置
 * @class
 */
class HealthCheckConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的健康检查类型，如 HttpGet，TcpSocket，Exec
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 仅当健康检查类型为 HttpGet 时有效，表示协议类型，如 HTTP，HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 仅当健康检查类型为 HttpGet 时有效，表示请求路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 仅当健康检查类型为 Exec 时有效，表示执行的脚本内容
         * @type {string || null}
         */
        this.Exec = null;

        /**
         * 仅当健康检查类型为 HttpGet\TcpSocket 时有效，表示请求路径
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 检查延迟开始时间，单位为秒，默认为 0
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * 超时时间，单位为秒，默认为 1
         * @type {number || null}
         */
        this.TimeoutSeconds = null;

        /**
         * 间隔时间，单位为秒，默认为 10
         * @type {number || null}
         */
        this.PeriodSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Exec = 'Exec' in params ? params.Exec : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.TimeoutSeconds = 'TimeoutSeconds' in params ? params.TimeoutSeconds : null;
        this.PeriodSeconds = 'PeriodSeconds' in params ? params.PeriodSeconds : null;

    }
}

/**
 * 分批发布详情
 * @class
 */
class TemDeployApplicationDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分批发布策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeployStrategyConf || null}
         */
        this.DeployStrategyConf = null;

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
         * 当前状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * beta分批详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeployServiceBatchDetail || null}
         */
        this.BetaBatchDetail = null;

        /**
         * 其他分批详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeployServiceBatchDetail> || null}
         */
        this.OtherBatchDetail = null;

        /**
         * 老版本pod列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeRunPodPage || null}
         */
        this.OldVersionPodList = null;

        /**
         * 当前批次id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CurrentBatchIndex = null;

        /**
         * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 当前批次状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurrentBatchStatus = null;

        /**
         * 新版本version
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewDeployVersion = null;

        /**
         * 旧版本version
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldDeployVersion = null;

        /**
         * 包名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewVersionPackageInfo = null;

        /**
         * 下一批次开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NextBatchStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeployStrategyConf) {
            let obj = new DeployStrategyConf();
            obj.deserialize(params.DeployStrategyConf)
            this.DeployStrategyConf = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.BetaBatchDetail) {
            let obj = new DeployServiceBatchDetail();
            obj.deserialize(params.BetaBatchDetail)
            this.BetaBatchDetail = obj;
        }

        if (params.OtherBatchDetail) {
            this.OtherBatchDetail = new Array();
            for (let z in params.OtherBatchDetail) {
                let obj = new DeployServiceBatchDetail();
                obj.deserialize(params.OtherBatchDetail[z]);
                this.OtherBatchDetail.push(obj);
            }
        }

        if (params.OldVersionPodList) {
            let obj = new DescribeRunPodPage();
            obj.deserialize(params.OldVersionPodList)
            this.OldVersionPodList = obj;
        }
        this.CurrentBatchIndex = 'CurrentBatchIndex' in params ? params.CurrentBatchIndex : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.CurrentBatchStatus = 'CurrentBatchStatus' in params ? params.CurrentBatchStatus : null;
        this.NewDeployVersion = 'NewDeployVersion' in params ? params.NewDeployVersion : null;
        this.OldDeployVersion = 'OldDeployVersion' in params ? params.OldDeployVersion : null;
        this.NewVersionPackageInfo = 'NewVersionPackageInfo' in params ? params.NewVersionPackageInfo : null;
        this.NextBatchStartTime = 'NextBatchStartTime' in params ? params.NextBatchStartTime : null;

    }
}

/**
 * DescribeDeployApplicationDetail请求参数结构体
 * @class
 */
class DescribeDeployApplicationDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 版本部署id
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * 弹性伸缩配置
 * @class
 */
class EsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最小实例数
         * @type {number || null}
         */
        this.MinAliveInstances = null;

        /**
         * 最大实例数
         * @type {number || null}
         */
        this.MaxAliveInstances = null;

        /**
         * 弹性策略,1:cpu，2:内存
         * @type {number || null}
         */
        this.EsStrategy = null;

        /**
         * 弹性扩缩容条件值
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 版本Id
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinAliveInstances = 'MinAliveInstances' in params ? params.MinAliveInstances : null;
        this.MaxAliveInstances = 'MaxAliveInstances' in params ? params.MaxAliveInstances : null;
        this.EsStrategy = 'EsStrategy' in params ? params.EsStrategy : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * 分批发布单批次详情
 * @class
 */
class DeployServiceBatchDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 旧实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeployServicePodDetail || null}
         */
        this.OldPodList = null;

        /**
         * 新实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeployServicePodDetail || null}
         */
        this.NewPodList = null;

        /**
         * 当前批次状态："WaitForTimeExceed", "WaitForResume", "Deploying", "Finish", "NotStart"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchStatus = null;

        /**
         * 该批次预计旧实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PodNum = null;

        /**
         * 批次id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BatchIndex = null;

        /**
         * 旧实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeployServicePodDetail> || null}
         */
        this.OldPods = null;

        /**
         * 新实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeployServicePodDetail> || null}
         */
        this.NewPods = null;

        /**
         * =0：手动确认批次；>0：下一批次开始时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NextBatchStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OldPodList) {
            let obj = new DeployServicePodDetail();
            obj.deserialize(params.OldPodList)
            this.OldPodList = obj;
        }

        if (params.NewPodList) {
            let obj = new DeployServicePodDetail();
            obj.deserialize(params.NewPodList)
            this.NewPodList = obj;
        }
        this.BatchStatus = 'BatchStatus' in params ? params.BatchStatus : null;
        this.PodNum = 'PodNum' in params ? params.PodNum : null;
        this.BatchIndex = 'BatchIndex' in params ? params.BatchIndex : null;

        if (params.OldPods) {
            this.OldPods = new Array();
            for (let z in params.OldPods) {
                let obj = new DeployServicePodDetail();
                obj.deserialize(params.OldPods[z]);
                this.OldPods.push(obj);
            }
        }

        if (params.NewPods) {
            this.NewPods = new Array();
            for (let z in params.NewPods) {
                let obj = new DeployServicePodDetail();
                obj.deserialize(params.NewPods[z]);
                this.NewPods.push(obj);
            }
        }
        this.NextBatchStartTime = 'NextBatchStartTime' in params ? params.NextBatchStartTime : null;

    }
}

/**
 * DescribeApplicationPods返回参数结构体
 * @class
 */
class DescribeApplicationPodsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {DescribeRunPodPage || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new DescribeRunPodPage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIngress请求参数结构体
 * @class
 */
class DeleteIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 环境 namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * ingress 规则名
         * @type {string || null}
         */
        this.IngressName = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.IngressName = 'IngressName' in params ? params.IngressName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * RestartApplicationPod请求参数结构体
 * @class
 */
class RestartApplicationPodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 应用id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 名字
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 单页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页下标
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * pod状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DescribeRelatedIngresses请求参数结构体
 * @class
 */
class DescribeRelatedIngressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境 id
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 环境 namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 应用 ID
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * ModifyEnvironment返回参数结构体
 * @class
 */
class ModifyEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功时为环境ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cos token
 * @class
 */
class CosToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * 存储桶桶名
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 存储桶所在区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 临时密钥的SecretId
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时密钥的SecretKey
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * 临时密钥的 sessionToken
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * 临时密钥获取的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 临时密钥的 expiredTime
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 包完整路径
         * @type {string || null}
         */
        this.FullPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.FullPath = 'FullPath' in params ? params.FullPath : null;

    }
}

/**
 * GenerateApplicationPackageDownloadUrl请求参数结构体
 * @class
 */
class GenerateApplicationPackageDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 包名
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * 需要下载的包版本
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * 来源 channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DeployApplication请求参数结构体
 * @class
 */
class DeployApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 初始化 pod 数
         * @type {number || null}
         */
        this.InitPodNum = null;

        /**
         * cpu规格
         * @type {number || null}
         */
        this.CpuSpec = null;

        /**
         * 内存规格
         * @type {number || null}
         */
        this.MemorySpec = null;

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 镜像仓库
         * @type {string || null}
         */
        this.ImgRepo = null;

        /**
         * 版本描述信息
         * @type {string || null}
         */
        this.VersionDesc = null;

        /**
         * 启动参数
         * @type {string || null}
         */
        this.JvmOpts = null;

        /**
         * 弹性伸缩配置（已废弃，请使用HorizontalAutoscaler设置弹性策略）
         * @type {EsInfo || null}
         */
        this.EsInfo = null;

        /**
         * 环境变量配置
         * @type {Array.<Pair> || null}
         */
        this.EnvConf = null;

        /**
         * 日志配置
         * @type {Array.<string> || null}
         */
        this.LogConfs = null;

        /**
         * 数据卷配置
         * @type {Array.<StorageConf> || null}
         */
        this.StorageConfs = null;

        /**
         * 数据卷挂载配置
         * @type {Array.<StorageMountConf> || null}
         */
        this.StorageMountConfs = null;

        /**
         * 部署类型。
- JAR：通过 jar 包部署
- WAR：通过 war 包部署
- IMAGE：通过镜像部署
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * 部署类型为 IMAGE 时，该参数表示镜像 tag。
部署类型为 JAR/WAR 时，该参数表示包版本号。
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * 包名。使用 JAR 包或者 WAR 包部署的时候必填。
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * JDK 版本。
- KONA:8：使用 kona jdk 8。
- OPEN:8：使用 open jdk 8。
- KONA:11：使用 kona jdk 11。
- OPEN:11：使用 open jdk 11。
         * @type {string || null}
         */
        this.JdkVersion = null;

        /**
         * 安全组ID s
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 日志输出配置
         * @type {LogOutputConf || null}
         */
        this.LogOutputConf = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 版本描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 镜像命令
         * @type {string || null}
         */
        this.ImageCommand = null;

        /**
         * 镜像命令参数
         * @type {Array.<string> || null}
         */
        this.ImageArgs = null;

        /**
         * 是否添加默认注册中心配置
         * @type {boolean || null}
         */
        this.UseRegistryDefaultConfig = null;

        /**
         * 挂载配置信息
         * @type {Array.<MountedSettingConf> || null}
         */
        this.SettingConfs = null;

        /**
         * 应用访问设置
         * @type {EksService || null}
         */
        this.Service = null;

        /**
         * 要回滚到的历史版本id
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 启动后执行的脚本
         * @type {string || null}
         */
        this.PostStart = null;

        /**
         * 停止前执行的脚本
         * @type {string || null}
         */
        this.PreStop = null;

        /**
         * 存活探针配置
         * @type {HealthCheckConfig || null}
         */
        this.Liveness = null;

        /**
         * 就绪探针配置
         * @type {HealthCheckConfig || null}
         */
        this.Readiness = null;

        /**
         * 分批发布策略配置
         * @type {DeployStrategyConf || null}
         */
        this.DeployStrategyConf = null;

        /**
         * 弹性策略
         * @type {Array.<HorizontalAutoscaler> || null}
         */
        this.HorizontalAutoscaler = null;

        /**
         * 定时弹性策略
         * @type {Array.<CronHorizontalAutoscaler> || null}
         */
        this.CronHorizontalAutoscaler = null;

        /**
         * 是否启用log，1为启用，0为不启用
         * @type {number || null}
         */
        this.LogEnable = null;

        /**
         * （除开镜像配置）配置是否修改
         * @type {boolean || null}
         */
        this.ConfEdited = null;

        /**
         * 是否开启应用加速
         * @type {boolean || null}
         */
        this.SpeedUp = null;

        /**
         * 启动探针配置
         * @type {HealthCheckConfig || null}
         */
        this.StartupProbe = null;

        /**
         * 操作系统版本；
当选择openjdk时，可选参数：
- ALPINE
- CENTOS
当选择konajdk时，可选参数：
- ALPINE
- TENCENTOS
         * @type {string || null}
         */
        this.OsFlavour = null;

        /**
         * 是否开启prometheus 业务指标监控
         * @type {EnablePrometheusConf || null}
         */
        this.EnablePrometheusConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.InitPodNum = 'InitPodNum' in params ? params.InitPodNum : null;
        this.CpuSpec = 'CpuSpec' in params ? params.CpuSpec : null;
        this.MemorySpec = 'MemorySpec' in params ? params.MemorySpec : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ImgRepo = 'ImgRepo' in params ? params.ImgRepo : null;
        this.VersionDesc = 'VersionDesc' in params ? params.VersionDesc : null;
        this.JvmOpts = 'JvmOpts' in params ? params.JvmOpts : null;

        if (params.EsInfo) {
            let obj = new EsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }

        if (params.EnvConf) {
            this.EnvConf = new Array();
            for (let z in params.EnvConf) {
                let obj = new Pair();
                obj.deserialize(params.EnvConf[z]);
                this.EnvConf.push(obj);
            }
        }
        this.LogConfs = 'LogConfs' in params ? params.LogConfs : null;

        if (params.StorageConfs) {
            this.StorageConfs = new Array();
            for (let z in params.StorageConfs) {
                let obj = new StorageConf();
                obj.deserialize(params.StorageConfs[z]);
                this.StorageConfs.push(obj);
            }
        }

        if (params.StorageMountConfs) {
            this.StorageMountConfs = new Array();
            for (let z in params.StorageMountConfs) {
                let obj = new StorageMountConf();
                obj.deserialize(params.StorageMountConfs[z]);
                this.StorageMountConfs.push(obj);
            }
        }
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.JdkVersion = 'JdkVersion' in params ? params.JdkVersion : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.LogOutputConf) {
            let obj = new LogOutputConf();
            obj.deserialize(params.LogOutputConf)
            this.LogOutputConf = obj;
        }
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ImageCommand = 'ImageCommand' in params ? params.ImageCommand : null;
        this.ImageArgs = 'ImageArgs' in params ? params.ImageArgs : null;
        this.UseRegistryDefaultConfig = 'UseRegistryDefaultConfig' in params ? params.UseRegistryDefaultConfig : null;

        if (params.SettingConfs) {
            this.SettingConfs = new Array();
            for (let z in params.SettingConfs) {
                let obj = new MountedSettingConf();
                obj.deserialize(params.SettingConfs[z]);
                this.SettingConfs.push(obj);
            }
        }

        if (params.Service) {
            let obj = new EksService();
            obj.deserialize(params.Service)
            this.Service = obj;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.PostStart = 'PostStart' in params ? params.PostStart : null;
        this.PreStop = 'PreStop' in params ? params.PreStop : null;

        if (params.Liveness) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.Liveness)
            this.Liveness = obj;
        }

        if (params.Readiness) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.Readiness)
            this.Readiness = obj;
        }

        if (params.DeployStrategyConf) {
            let obj = new DeployStrategyConf();
            obj.deserialize(params.DeployStrategyConf)
            this.DeployStrategyConf = obj;
        }

        if (params.HorizontalAutoscaler) {
            this.HorizontalAutoscaler = new Array();
            for (let z in params.HorizontalAutoscaler) {
                let obj = new HorizontalAutoscaler();
                obj.deserialize(params.HorizontalAutoscaler[z]);
                this.HorizontalAutoscaler.push(obj);
            }
        }

        if (params.CronHorizontalAutoscaler) {
            this.CronHorizontalAutoscaler = new Array();
            for (let z in params.CronHorizontalAutoscaler) {
                let obj = new CronHorizontalAutoscaler();
                obj.deserialize(params.CronHorizontalAutoscaler[z]);
                this.CronHorizontalAutoscaler.push(obj);
            }
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;
        this.ConfEdited = 'ConfEdited' in params ? params.ConfEdited : null;
        this.SpeedUp = 'SpeedUp' in params ? params.SpeedUp : null;

        if (params.StartupProbe) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.StartupProbe)
            this.StartupProbe = obj;
        }
        this.OsFlavour = 'OsFlavour' in params ? params.OsFlavour : null;

        if (params.EnablePrometheusConf) {
            let obj = new EnablePrometheusConf();
            obj.deserialize(params.EnablePrometheusConf)
            this.EnablePrometheusConf = obj;
        }

    }
}

/**
 * Ingress 配置
 * @class
 */
class IngressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 环境namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * ip version
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * ingress name
         * @type {string || null}
         */
        this.IngressName = null;

        /**
         * rules 配置
         * @type {Array.<IngressRule> || null}
         */
        this.Rules = null;

        /**
         * clb ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClbId = null;

        /**
         * tls 配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IngressTls> || null}
         */
        this.Tls = null;

        /**
         * 环境集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * clb ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否混合 https，默认 false，可选值 true 代表有 https 协议监听
         * @type {boolean || null}
         */
        this.Mixed = null;

        /**
         * 重定向模式，可选值：
- AUTO（自动重定向http到https）
- NONE（不使用重定向）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RewriteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.IngressName = 'IngressName' in params ? params.IngressName : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new IngressRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.ClbId = 'ClbId' in params ? params.ClbId : null;

        if (params.Tls) {
            this.Tls = new Array();
            for (let z in params.Tls) {
                let obj = new IngressTls();
                obj.deserialize(params.Tls[z]);
                this.Tls.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Mixed = 'Mixed' in params ? params.Mixed : null;
        this.RewriteType = 'RewriteType' in params ? params.RewriteType : null;

    }
}

/**
 * ModifyIngress返回参数结构体
 * @class
 */
class ModifyIngressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnvironments返回参数结构体
 * @class
 */
class DescribeEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {NamespacePage || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new NamespacePage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIngress请求参数结构体
 * @class
 */
class ModifyIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress 规则配置
         * @type {IngressInfo || null}
         */
        this.Ingress = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Ingress) {
            let obj = new IngressInfo();
            obj.deserialize(params.Ingress)
            this.Ingress = obj;
        }
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DescribeApplicationPods请求参数结构体
 * @class
 */
class DescribeApplicationPodsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 应用id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 单页条数，默认值20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页下标，默认值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例状态 
- Running 
- Pending 
- Error
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例名字
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateApplication请求参数结构体
 * @class
 */
class CreateApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 是否使用默认镜像服务 1-是，0-否
         * @type {number || null}
         */
        this.UseDefaultImageService = null;

        /**
         * 如果是绑定仓库，绑定的仓库类型，0-个人版，1-企业版
         * @type {number || null}
         */
        this.RepoType = null;

        /**
         * 企业版镜像服务的实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 绑定镜像服务器地址
         * @type {string || null}
         */
        this.RepoServer = null;

        /**
         * 绑定镜像仓库名
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 应用所在子网
         * @type {Array.<string> || null}
         */
        this.SubnetList = null;

        /**
         * 编程语言 
- JAVA
- OTHER
         * @type {string || null}
         */
        this.CodingLanguage = null;

        /**
         * 部署方式 
- IMAGE
- JAR
- WAR
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * 是否开启 Java 应用的 APM 自动上报功能，1 表示启用；0 表示关闭
         * @type {number || null}
         */
        this.EnableTracing = null;

        /**
         * 使用默认镜像服务额外参数
         * @type {UseDefaultRepoParameters || null}
         */
        this.UseDefaultImageServiceParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UseDefaultImageService = 'UseDefaultImageService' in params ? params.UseDefaultImageService : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RepoServer = 'RepoServer' in params ? params.RepoServer : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.SubnetList = 'SubnetList' in params ? params.SubnetList : null;
        this.CodingLanguage = 'CodingLanguage' in params ? params.CodingLanguage : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.EnableTracing = 'EnableTracing' in params ? params.EnableTracing : null;

        if (params.UseDefaultImageServiceParameters) {
            let obj = new UseDefaultRepoParameters();
            obj.deserialize(params.UseDefaultImageServiceParameters)
            this.UseDefaultImageServiceParameters = obj;
        }

    }
}

/**
 * 开启prometheus监控配置
 * @class
 */
class EnablePrometheusConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用开放的监听端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 业务指标暴露的url path
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
        this.Port = 'Port' in params ? params.Port : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * DescribeRelatedIngresses返回参数结构体
 * @class
 */
class DescribeRelatedIngressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ingress 数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IngressInfo> || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new IngressInfo();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIngresses请求参数结构体
 * @class
 */
class DescribeIngressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境 id
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 环境 namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * ingress 规则名列表
         * @type {Array.<string> || null}
         */
        this.IngressNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.IngressNames = 'IngressNames' in params ? params.IngressNames : null;

    }
}

/**
 * 版本pod列表
 * @class
 */
class DescribeRunPodPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页下标
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 请求id
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * 条目
         * @type {Array.<RunVersionPod> || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

        if (params.PodList) {
            this.PodList = new Array();
            for (let z in params.PodList) {
                let obj = new RunVersionPod();
                obj.deserialize(params.PodList[z]);
                this.PodList.push(obj);
            }
        }

    }
}

/**
 * ingress tls 配置
 * @class
 */
class IngressTls extends  AbstractModel {
    constructor(){
        super();

        /**
         * host 数组, 空数组表示全部域名的默认证书
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * secret name，如使用证书，则填空字符串
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * SSL Certificate Id
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hosts = 'Hosts' in params ? params.Hosts : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * 分批发布单批次详情
 * @class
 */
class DeployServicePodDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * pod Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PodId = null;

        /**
         * pod状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PodStatus = null;

        /**
         * pod版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PodVersion = null;

        /**
         * pod创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * pod所在可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * webshell地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Webshell = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PodId = 'PodId' in params ? params.PodId : null;
        this.PodStatus = 'PodStatus' in params ? params.PodStatus : null;
        this.PodVersion = 'PodVersion' in params ? params.PodVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Webshell = 'Webshell' in params ? params.Webshell : null;

    }
}

/**
 * ModifyApplicationReplicas返回参数结构体
 * @class
 */
class ModifyApplicationReplicasResponse extends  AbstractModel {
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
 * ModifyApplicationReplicas请求参数结构体
 * @class
 */
class ModifyApplicationReplicasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * 日志输出配置
 * @class
 */
class LogOutputConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志消费端类型
         * @type {string || null}
         */
        this.OutputType = null;

        /**
         * cls日志集
         * @type {string || null}
         */
        this.ClsLogsetName = null;

        /**
         * cls日志主题
         * @type {string || null}
         */
        this.ClsLogTopicId = null;

        /**
         * cls日志集id
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * cls日志名称
         * @type {string || null}
         */
        this.ClsLogTopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputType = 'OutputType' in params ? params.OutputType : null;
        this.ClsLogsetName = 'ClsLogsetName' in params ? params.ClsLogsetName : null;
        this.ClsLogTopicId = 'ClsLogTopicId' in params ? params.ClsLogTopicId : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsLogTopicName = 'ClsLogTopicName' in params ? params.ClsLogTopicName : null;

    }
}

/**
 * DescribeIngresses返回参数结构体
 * @class
 */
class DescribeIngressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ingress 数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IngressInfo> || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new IngressInfo();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIngress返回参数结构体
 * @class
 */
class DeleteIngressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否删除成功
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 命名空间对象
 * @class
 */
class TemNamespaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 渠道
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 环境名称
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 环境描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 状态,1:已销毁;0:正常
         * @type {number || null}
         */
        this.Status = null;

        /**
         * vpc网络
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyDate = null;

        /**
         * 修改人
         * @type {string || null}
         */
        this.Modifier = null;

        /**
         * 创建人
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 应用数
         * @type {number || null}
         */
        this.ApplicationNum = null;

        /**
         * 运行实例数
         * @type {number || null}
         */
        this.RunInstancesNum = null;

        /**
         * 子网络
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 环境集群 status
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 是否开启tsw
         * @type {boolean || null}
         */
        this.EnableTswTraceService = null;

        /**
         * 环境锁，1为上锁，0则为上锁
         * @type {number || null}
         */
        this.Locked = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.ModifyDate = 'ModifyDate' in params ? params.ModifyDate : null;
        this.Modifier = 'Modifier' in params ? params.Modifier : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.ApplicationNum = 'ApplicationNum' in params ? params.ApplicationNum : null;
        this.RunInstancesNum = 'RunInstancesNum' in params ? params.RunInstancesNum : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.EnableTswTraceService = 'EnableTswTraceService' in params ? params.EnableTswTraceService : null;
        this.Locked = 'Locked' in params ? params.Locked : null;

    }
}

/**
 * GenerateApplicationPackageDownloadUrl返回参数结构体
 * @class
 */
class GenerateApplicationPackageDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 包下载临时链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ingress 规则 backend 配置
 * @class
 */
class IngressRuleBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * eks service 名
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * eks service 端口
         * @type {number || null}
         */
        this.ServicePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServicePort = 'ServicePort' in params ? params.ServicePort : null;

    }
}

/**
 * DescribeIngress返回参数结构体
 * @class
 */
class DescribeIngressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress 规则配置
         * @type {IngressInfo || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new IngressInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCosToken返回参数结构体
 * @class
 */
class CreateCosTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功时为CosToken对象，失败为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosToken || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new CosToken();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ingress rule 配置
 * @class
 */
class IngressRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * ingress rule value
         * @type {IngressRuleValue || null}
         */
        this.Http = null;

        /**
         * host 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 协议，选项为 http， https，默认为 http
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Http) {
            let obj = new IngressRuleValue();
            obj.deserialize(params.Http)
            this.Http = obj;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * 定时伸缩策略
 * @class
 */
class CronHorizontalAutoscaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时伸缩策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 策略周期
* * *，三个范围，第一个是天，第二个是月，第三个是周，中间用空格隔开
例子：
* * * （每天）
* * 0-3 （每周日到周三）
1,11,21 * *（每个月1号，11号，21号）
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 定时伸缩策略明细
         * @type {Array.<CronHorizontalAutoscalerSchedule> || null}
         */
        this.Schedules = null;

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 策略优先级，值越大优先级越高，0为最小值
         * @type {number || null}
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Period = 'Period' in params ? params.Period : null;

        if (params.Schedules) {
            this.Schedules = new Array();
            for (let z in params.Schedules) {
                let obj = new CronHorizontalAutoscalerSchedule();
                obj.deserialize(params.Schedules[z]);
                this.Schedules.push(obj);
            }
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * RollingUpdateApplicationByVersion返回参数结构体
 * @class
 */
class RollingUpdateApplicationByVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本ID
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RollingUpdateApplicationByVersion请求参数结构体
 * @class
 */
class RollingUpdateApplicationByVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 更新版本，IMAGE 部署为 tag 值；JAR/WAR 部署 为 Version
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * JAR/WAR 包名，仅 JAR/WAR 部署时必填
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 请求来源平台，含 IntelliJ，Coding
         * @type {string || null}
         */
        this.From = null;

        /**
         * 部署策略，AUTO 为全自动；BETA 为小批量验证后自动；MANUAL 为全手动；
         * @type {string || null}
         */
        this.DeployStrategyType = null;

        /**
         * 发布批次数
         * @type {number || null}
         */
        this.TotalBatchCount = null;

        /**
         * 批次间隔时间
         * @type {number || null}
         */
        this.BatchInterval = null;

        /**
         * 小批量验证批次的实例数
         * @type {number || null}
         */
        this.BetaBatchNum = null;

        /**
         * 发布过程中保障的最小可用实例数
         * @type {number || null}
         */
        this.MinAvailable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.From = 'From' in params ? params.From : null;
        this.DeployStrategyType = 'DeployStrategyType' in params ? params.DeployStrategyType : null;
        this.TotalBatchCount = 'TotalBatchCount' in params ? params.TotalBatchCount : null;
        this.BatchInterval = 'BatchInterval' in params ? params.BatchInterval : null;
        this.BetaBatchNum = 'BetaBatchNum' in params ? params.BetaBatchNum : null;
        this.MinAvailable = 'MinAvailable' in params ? params.MinAvailable : null;

    }
}

/**
 * 应用实例
 * @class
 */
class RunVersionPod extends  AbstractModel {
    constructor(){
        super();

        /**
         * shell地址
         * @type {string || null}
         */
        this.Webshell = null;

        /**
         * pod的id
         * @type {string || null}
         */
        this.PodId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例的ip
         * @type {string || null}
         */
        this.PodIp = null;

        /**
         * 可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 部署版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * pod是否就绪
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Ready = null;

        /**
         * 容器状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Webshell = 'Webshell' in params ? params.Webshell : null;
        this.PodId = 'PodId' in params ? params.PodId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PodIp = 'PodIp' in params ? params.PodIp : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.Ready = 'Ready' in params ? params.Ready : null;
        this.ContainerState = 'ContainerState' in params ? params.ContainerState : null;

    }
}

/**
 * DescribeDeployApplicationDetail返回参数结构体
 * @class
 */
class DescribeDeployApplicationDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分批发布结果详情
         * @type {TemDeployApplicationDetailInfo || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TemDeployApplicationDetailInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ingress Rule Value 配置
 * @class
 */
class IngressRuleValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * rule 整体配置
         * @type {Array.<IngressRulePath> || null}
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

        if (params.Paths) {
            this.Paths = new Array();
            for (let z in params.Paths) {
                let obj = new IngressRulePath();
                obj.deserialize(params.Paths[z]);
                this.Paths.push(obj);
            }
        }

    }
}

/**
 * CreateResource返回参数结构体
 * @class
 */
class CreateResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功与否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApplicationInfo请求参数结构体
 * @class
 */
class ModifyApplicationInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 是否开启调用链, 0 为关闭，1位开启
         * @type {number || null}
         */
        this.EnableTracing = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnableTracing = 'EnableTracing' in params ? params.EnableTracing : null;

    }
}

/**
 * ModifyApplicationInfo返回参数结构体
 * @class
 */
class ModifyApplicationInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功与否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplication返回参数结构体
 * @class
 */
class DeleteApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ingress Rule Path 配置
 * @class
 */
class IngressRulePath extends  AbstractModel {
    constructor(){
        super();

        /**
         * path 信息
         * @type {string || null}
         */
        this.Path = null;

        /**
         * backend 配置
         * @type {IngressRuleBackend || null}
         */
        this.Backend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Backend) {
            let obj = new IngressRuleBackend();
            obj.deserialize(params.Backend)
            this.Backend = obj;
        }

    }
}

/**
 * CreateEnvironment返回参数结构体
 * @class
 */
class CreateEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功时为环境ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 命名空间分页
 * @class
 */
class NamespacePage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页内容
         * @type {Array.<TemNamespaceInfo> || null}
         */
        this.Records = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 条目数
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.Pages = null;

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
                let obj = new TemNamespaceInfo();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Pages = 'Pages' in params ? params.Pages : null;

    }
}

/**
 * RestartApplication请求参数结构体
 * @class
 */
class RestartApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

    }
}

/**
 * CreateApplication返回参数结构体
 * @class
 */
class CreateApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务code
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 弹性伸缩策略
 * @class
 */
class HorizontalAutoscaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最小实例数
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * 最大实例数
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * 指标度量（CPU or MEMORY）
         * @type {string || null}
         */
        this.Metrics = null;

        /**
         * 阈值（百分比）
         * @type {number || null}
         */
        this.Threshold = null;

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
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

    }
}

/**
 * RevertDeployApplication请求参数结构体
 * @class
 */
class RevertDeployApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要回滚的服务id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 需要回滚的服务所在环境id
         * @type {string || null}
         */
        this.EnvironmentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

    }
}

/**
 * 数据卷挂载信息
 * @class
 */
class StorageMountConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据卷名
         * @type {string || null}
         */
        this.VolumeName = null;

        /**
         * 数据卷绑定路径
         * @type {string || null}
         */
        this.MountPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeName = 'VolumeName' in params ? params.VolumeName : null;
        this.MountPath = 'MountPath' in params ? params.MountPath : null;

    }
}

/**
 * ModifyEnvironment请求参数结构体
 * @class
 */
class ModifyEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 环境名称
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 环境描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 私有网络名称
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * 子网网络
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * 服务端口映射
 * @class
 */
class PortMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 映射端口
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * 协议栈 TCP/UDP
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.TargetPort = 'TargetPort' in params ? params.TargetPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * 创建应用，创建仓库参数
 * @class
 */
class UseDefaultRepoParameters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业版实例名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnterpriseInstanceName = null;

        /**
         * 企业版收费类型  0 按量收费   1 包年包月
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnterpriseInstanceChargeType = null;

        /**
         * 企业版规格：basic-基础班 ，standard-标准版，premium-高级版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnterpriseInstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnterpriseInstanceName = 'EnterpriseInstanceName' in params ? params.EnterpriseInstanceName : null;
        this.EnterpriseInstanceChargeType = 'EnterpriseInstanceChargeType' in params ? params.EnterpriseInstanceChargeType : null;
        this.EnterpriseInstanceType = 'EnterpriseInstanceType' in params ? params.EnterpriseInstanceType : null;

    }
}

/**
 * RevertDeployApplication返回参数结构体
 * @class
 */
class RevertDeployApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分批发布策略配置
 * @class
 */
class DeployStrategyConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总分批数
         * @type {number || null}
         */
        this.TotalBatchCount = null;

        /**
         * beta分批实例数
         * @type {number || null}
         */
        this.BetaBatchNum = null;

        /**
         * 分批策略：0-全自动，1-全手动，2-beta分批，beta批一定是手动的，3-首次发布
         * @type {number || null}
         */
        this.DeployStrategyType = null;

        /**
         * 每批暂停间隔
         * @type {number || null}
         */
        this.BatchInterval = null;

        /**
         * 最小可用实例数
         * @type {number || null}
         */
        this.MinAvailable = null;

        /**
         * 是否强制发布
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalBatchCount = 'TotalBatchCount' in params ? params.TotalBatchCount : null;
        this.BetaBatchNum = 'BetaBatchNum' in params ? params.BetaBatchNum : null;
        this.DeployStrategyType = 'DeployStrategyType' in params ? params.DeployStrategyType : null;
        this.BatchInterval = 'BatchInterval' in params ? params.BatchInterval : null;
        this.MinAvailable = 'MinAvailable' in params ? params.MinAvailable : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DescribeIngress请求参数结构体
 * @class
 */
class DescribeIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 环境namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * ingress 规则名
         * @type {string || null}
         */
        this.IngressName = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.IngressName = 'IngressName' in params ? params.IngressName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateCosToken请求参数结构体
 * @class
 */
class CreateCosTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 包名
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * optType 1上传  2查询
         * @type {number || null}
         */
        this.OptType = null;

        /**
         * 来源 channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 充当deployVersion入参
         * @type {string || null}
         */
        this.TimeVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.OptType = 'OptType' in params ? params.OptType : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.TimeVersion = 'TimeVersion' in params ? params.TimeVersion : null;

    }
}

/**
 * DescribeEnvironments请求参数结构体
 * @class
 */
class DescribeEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页下标
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 来源source
         * @type {number || null}
         */
        this.SourceChannel = null;

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
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * StopApplication返回参数结构体
 * @class
 */
class StopApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * eks service info
 * @class
 */
class EksService extends  AbstractModel {
    constructor(){
        super();

        /**
         * service name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 可用端口
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * yaml 内容
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * 服务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 版本名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ClusterIp = null;

        /**
         * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalIp = null;

        /**
         * 访问类型，可选值：
- EXTERNAL（公网访问）
- VPC（vpc内访问）
- CLUSTER（集群内访问）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 子网ID，只在类型为vpc访问时才有值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 负载均衡ID，只在外网访问和vpc内访问才有值，默认自动创建
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalanceId = null;

        /**
         * 端口映射
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PortMapping> || null}
         */
        this.PortMappings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.ClusterIp = 'ClusterIp' in params ? params.ClusterIp : null;
        this.ExternalIp = 'ExternalIp' in params ? params.ExternalIp : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.LoadBalanceId = 'LoadBalanceId' in params ? params.LoadBalanceId : null;

        if (params.PortMappings) {
            this.PortMappings = new Array();
            for (let z in params.PortMappings) {
                let obj = new PortMapping();
                obj.deserialize(params.PortMappings[z]);
                this.PortMappings.push(obj);
            }
        }

    }
}

/**
 * 定时伸缩策略明细
 * @class
 */
class CronHorizontalAutoscalerSchedule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发事件，小时分钟，用:分割
例如
00:00（零点零分触发）
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * 目标实例数（不大于50）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetReplicas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.TargetReplicas = 'TargetReplicas' in params ? params.TargetReplicas : null;

    }
}

/**
 * ResumeDeployApplication请求参数结构体
 * @class
 */
class ResumeDeployApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要开始下一批次的服务id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvironmentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

    }
}

/**
 * DeployApplication返回参数结构体
 * @class
 */
class DeployApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本ID（前端可忽略）
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 存储卷配置
 * @class
 */
class StorageConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储卷名称
         * @type {string || null}
         */
        this.StorageVolName = null;

        /**
         * 存储卷路径
         * @type {string || null}
         */
        this.StorageVolPath = null;

        /**
         * 存储卷IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageVolIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StorageVolName = 'StorageVolName' in params ? params.StorageVolName : null;
        this.StorageVolPath = 'StorageVolPath' in params ? params.StorageVolPath : null;
        this.StorageVolIp = 'StorageVolIp' in params ? params.StorageVolIp : null;

    }
}

/**
 * CreateEnvironment请求参数结构体
 * @class
 */
class CreateEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境名称
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 私有网络名称
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * 子网列表
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 环境描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * K8s version
         * @type {string || null}
         */
        this.K8sVersion = null;

        /**
         * 来源渠道
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * 是否开启tsw服务
         * @type {boolean || null}
         */
        this.EnableTswTraceService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.K8sVersion = 'K8sVersion' in params ? params.K8sVersion : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnableTswTraceService = 'EnableTswTraceService' in params ? params.EnableTswTraceService : null;

    }
}

/**
 * 键值对
 * @class
 */
class Pair extends  AbstractModel {
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

        /**
         * 类型，default 为自定义，reserved 为系统变量，referenced 为引用配置项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 配置名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 加密配置名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Secret = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.Secret = 'Secret' in params ? params.Secret : null;

    }
}

module.exports = {
    MountedSettingConf: MountedSettingConf,
    RestartApplicationPodResponse: RestartApplicationPodResponse,
    DeleteApplicationRequest: DeleteApplicationRequest,
    CreateResourceRequest: CreateResourceRequest,
    ResumeDeployApplicationResponse: ResumeDeployApplicationResponse,
    RestartApplicationResponse: RestartApplicationResponse,
    StopApplicationRequest: StopApplicationRequest,
    HealthCheckConfig: HealthCheckConfig,
    TemDeployApplicationDetailInfo: TemDeployApplicationDetailInfo,
    DescribeDeployApplicationDetailRequest: DescribeDeployApplicationDetailRequest,
    EsInfo: EsInfo,
    DeployServiceBatchDetail: DeployServiceBatchDetail,
    DescribeApplicationPodsResponse: DescribeApplicationPodsResponse,
    DeleteIngressRequest: DeleteIngressRequest,
    RestartApplicationPodRequest: RestartApplicationPodRequest,
    DescribeRelatedIngressesRequest: DescribeRelatedIngressesRequest,
    ModifyEnvironmentResponse: ModifyEnvironmentResponse,
    CosToken: CosToken,
    GenerateApplicationPackageDownloadUrlRequest: GenerateApplicationPackageDownloadUrlRequest,
    DeployApplicationRequest: DeployApplicationRequest,
    IngressInfo: IngressInfo,
    ModifyIngressResponse: ModifyIngressResponse,
    DescribeEnvironmentsResponse: DescribeEnvironmentsResponse,
    ModifyIngressRequest: ModifyIngressRequest,
    DescribeApplicationPodsRequest: DescribeApplicationPodsRequest,
    CreateApplicationRequest: CreateApplicationRequest,
    EnablePrometheusConf: EnablePrometheusConf,
    DescribeRelatedIngressesResponse: DescribeRelatedIngressesResponse,
    DescribeIngressesRequest: DescribeIngressesRequest,
    DescribeRunPodPage: DescribeRunPodPage,
    IngressTls: IngressTls,
    DeployServicePodDetail: DeployServicePodDetail,
    ModifyApplicationReplicasResponse: ModifyApplicationReplicasResponse,
    ModifyApplicationReplicasRequest: ModifyApplicationReplicasRequest,
    LogOutputConf: LogOutputConf,
    DescribeIngressesResponse: DescribeIngressesResponse,
    DeleteIngressResponse: DeleteIngressResponse,
    TemNamespaceInfo: TemNamespaceInfo,
    GenerateApplicationPackageDownloadUrlResponse: GenerateApplicationPackageDownloadUrlResponse,
    IngressRuleBackend: IngressRuleBackend,
    DescribeIngressResponse: DescribeIngressResponse,
    CreateCosTokenResponse: CreateCosTokenResponse,
    IngressRule: IngressRule,
    CronHorizontalAutoscaler: CronHorizontalAutoscaler,
    RollingUpdateApplicationByVersionResponse: RollingUpdateApplicationByVersionResponse,
    RollingUpdateApplicationByVersionRequest: RollingUpdateApplicationByVersionRequest,
    RunVersionPod: RunVersionPod,
    DescribeDeployApplicationDetailResponse: DescribeDeployApplicationDetailResponse,
    IngressRuleValue: IngressRuleValue,
    CreateResourceResponse: CreateResourceResponse,
    ModifyApplicationInfoRequest: ModifyApplicationInfoRequest,
    ModifyApplicationInfoResponse: ModifyApplicationInfoResponse,
    DeleteApplicationResponse: DeleteApplicationResponse,
    IngressRulePath: IngressRulePath,
    CreateEnvironmentResponse: CreateEnvironmentResponse,
    NamespacePage: NamespacePage,
    RestartApplicationRequest: RestartApplicationRequest,
    CreateApplicationResponse: CreateApplicationResponse,
    HorizontalAutoscaler: HorizontalAutoscaler,
    RevertDeployApplicationRequest: RevertDeployApplicationRequest,
    StorageMountConf: StorageMountConf,
    ModifyEnvironmentRequest: ModifyEnvironmentRequest,
    PortMapping: PortMapping,
    UseDefaultRepoParameters: UseDefaultRepoParameters,
    RevertDeployApplicationResponse: RevertDeployApplicationResponse,
    DeployStrategyConf: DeployStrategyConf,
    DescribeIngressRequest: DescribeIngressRequest,
    CreateCosTokenRequest: CreateCosTokenRequest,
    DescribeEnvironmentsRequest: DescribeEnvironmentsRequest,
    StopApplicationResponse: StopApplicationResponse,
    EksService: EksService,
    CronHorizontalAutoscalerSchedule: CronHorizontalAutoscalerSchedule,
    ResumeDeployApplicationRequest: ResumeDeployApplicationRequest,
    DeployApplicationResponse: DeployApplicationResponse,
    StorageConf: StorageConf,
    CreateEnvironmentRequest: CreateEnvironmentRequest,
    Pair: Pair,

}
