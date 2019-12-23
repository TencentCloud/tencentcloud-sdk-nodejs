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
 * 自定义键值对
 * @class
 */
class EventVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义键
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义值
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
 * 计算环境
 * @class
 */
class AnonymousComputeEnv extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境管理类型
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * 计算环境具体参数
         * @type {EnvData || null}
         */
        this.EnvData = null;

        /**
         * 数据盘挂载选项
         * @type {Array.<MountDataDisk> || null}
         */
        this.MountDataDisks = null;

        /**
         * agent运行模式，适用于Windows系统
         * @type {AgentRunningMode || null}
         */
        this.AgentRunningMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

        if (params.EnvData) {
            let obj = new EnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

        if (params.MountDataDisks) {
            this.MountDataDisks = new Array();
            for (let z in params.MountDataDisks) {
                let obj = new MountDataDisk();
                obj.deserialize(params.MountDataDisks[z]);
                this.MountDataDisks.push(obj);
            }
        }

        if (params.AgentRunningMode) {
            let obj = new AgentRunningMode();
            obj.deserialize(params.AgentRunningMode)
            this.AgentRunningMode = obj;
        }

    }
}

/**
 * DeleteComputeEnv返回参数结构体
 * @class
 */
class DeleteComputeEnvResponse extends  AbstractModel {
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
 * SubmitJob请求参数结构体
 * @class
 */
class SubmitJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业所提交的位置信息。通过该参数可以指定作业关联CVM所属可用区等信息。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 作业信息
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由用户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

/**
 * 计算环境属性数据
 * @class
 */
class ComputeEnvData extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM实例类型列表
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

    }
}

/**
 * 授权认证信息
 * @class
 */
class Authentication extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权场景，例如COS
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * SecretId
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * SecretKey
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * RetryJobs返回参数结构体
 * @class
 */
class RetryJobsResponse extends  AbstractModel {
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
 * TerminateComputeNode请求参数结构体
 * @class
 */
class TerminateComputeNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 计算节点ID
         * @type {string || null}
         */
        this.ComputeNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ComputeNodeId = 'ComputeNodeId' in params ? params.ComputeNodeId : null;

    }
}

/**
 * DescribeTaskLogs请求参数结构体
 * @class
 */
class DescribeTaskLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务实例集合
         * @type {Array.<number> || null}
         */
        this.TaskInstanceIndexes = null;

        /**
         * 起始任务实例
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大任务实例数
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskInstanceIndexes = 'TaskInstanceIndexes' in params ? params.TaskInstanceIndexes : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * agent运行模式
 * @class
 */
class AgentRunningMode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景类型，支持WINDOWS
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 运行Agent的User
         * @type {string || null}
         */
        this.User = null;

        /**
         * 运行Agent的Session
         * @type {string || null}
         */
        this.Session = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.User = 'User' in params ? params.User : null;
        this.Session = 'Session' in params ? params.Session : null;

    }
}

/**
 * 计算环境数据
 * @class
 */
class EnvData extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM实例类型，不能与InstanceTypes和InstanceTypeOptions同时出现。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * CVM镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例系统盘配置信息
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例数据盘配置信息
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 私有网络相关信息配置，与Zones和VirtualPrivateClouds不能同时指定。
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * 公网带宽相关信息设置
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * CVM实例显示名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例登录设置
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例所属安全组
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * CVM实例计费类型<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 实例的市场相关选项，如竞价实例相关参数
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * CVM实例类型列表，不能与InstanceType和InstanceTypeOptions同时出现。指定该字段后，计算节点按照机型先后顺序依次尝试创建，直到实例创建成功，结束遍历过程。最多支持10个机型。
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * CVM实例机型配置。不能与InstanceType和InstanceTypes同时出现。
         * @type {InstanceTypeOptions || null}
         */
        this.InstanceTypeOptions = null;

        /**
         * 可用区列表，支持跨可用区创建CVM实例。与VirtualPrivateCloud和VirtualPrivateClouds不能同时指定。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 私有网络列表，支持跨私有网络创建CVM实例。与VirtualPrivateCloud和Zones不能同时指定。
         * @type {Array.<VirtualPrivateCloud> || null}
         */
        this.VirtualPrivateClouds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

        if (params.InstanceTypeOptions) {
            let obj = new InstanceTypeOptions();
            obj.deserialize(params.InstanceTypeOptions)
            this.InstanceTypeOptions = obj;
        }
        this.Zones = 'Zones' in params ? params.Zones : null;

        if (params.VirtualPrivateClouds) {
            this.VirtualPrivateClouds = new Array();
            for (let z in params.VirtualPrivateClouds) {
                let obj = new VirtualPrivateCloud();
                obj.deserialize(params.VirtualPrivateClouds[z]);
                this.VirtualPrivateClouds.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskTemplates请求参数结构体
 * @class
 */
class DescribeTaskTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务模板ID列表，与Filters参数不能同时指定。
         * @type {Array.<string> || null}
         */
        this.TaskTemplateIds = null;

        /**
         * 过滤条件
<li> task-template-name - String - 是否必填：否 -（过滤条件）按照任务模板名称过滤。</li>
与TaskTemplateIds参数不能同时指定。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
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
        this.TaskTemplateIds = 'TaskTemplateIds' in params ? params.TaskTemplateIds : null;

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
 * 事件配置
 * @class
 */
class EventConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件类型，包括：<br/><li>“JOB_RUNNING”：作业运行，适用于"SubmitJob"。</li><li>“JOB_SUCCEED”：作业成功，适用于"SubmitJob"。</li><li>“JOB_FAILED”：作业失败，适用于"SubmitJob"。</li><li>“JOB_FAILED_INTERRUPTED”：作业失败，保留实例，适用于"SubmitJob"。</li><li>“TASK_RUNNING”：任务运行，适用于"SubmitJob"。</li><li>“TASK_SUCCEED”：任务成功，适用于"SubmitJob"。</li><li>“TASK_FAILED”：任务失败，适用于"SubmitJob"。</li><li>“TASK_FAILED_INTERRUPTED”：任务失败，保留实例，适用于"SubmitJob"。</li><li>“TASK_INSTANCE_RUNNING”：任务实例运行，适用于"SubmitJob"。</li><li>“TASK_INSTANCE_SUCCEED”：任务实例成功，适用于"SubmitJob"。</li><li>“TASK_INSTANCE_FAILED”：任务实例失败，适用于"SubmitJob"。</li><li>“TASK_INSTANCE_FAILED_INTERRUPTED”：任务实例失败，保留实例，适用于"SubmitJob"。</li><li>“COMPUTE_ENV_CREATED”：计算环境已创建，适用于"CreateComputeEnv"。</li><li>“COMPUTE_ENV_DELETED”：计算环境已删除，适用于"CreateComputeEnv"。</li><li>“COMPUTE_NODE_CREATED”：计算节点已创建，适用于"CreateComputeEnv"和"SubmitJob"。</li><li>“COMPUTE_NODE_CREATION_FAILED”：计算节点创建失败，适用于"CreateComputeEnv"和"SubmitJob"。</li><li>“COMPUTE_NODE_RUNNING”：计算节点运行中，适用于"CreateComputeEnv"和"SubmitJob"。</li><li>“COMPUTE_NODE_ABNORMAL”：计算节点异常，适用于"CreateComputeEnv"和"SubmitJob"。</li><li>“COMPUTE_NODE_DELETING”：计算节点已删除，适用于"CreateComputeEnv"和"SubmitJob"。</li>
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 自定义键值对
         * @type {Array.<EventVar> || null}
         */
        this.EventVars = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventName = 'EventName' in params ? params.EventName : null;

        if (params.EventVars) {
            this.EventVars = new Array();
            for (let z in params.EventVars) {
                let obj = new EventVar();
                obj.deserialize(params.EventVars[z]);
                this.EventVars.push(obj);
            }
        }

    }
}

/**
 * 描述了操作系统所在块设备即系统盘的信息
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统盘类型。系统盘类型限制详见[实例规格](/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><br>默认取值：CLOUD_BASIC。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 系统盘大小，单位：GB。默认值为 50
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * 任务
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用程序信息
         * @type {Application || null}
         */
        this.Application = null;

        /**
         * 任务名称，在一个作业内部唯一
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务实例运行个数
         * @type {number || null}
         */
        this.TaskInstanceNum = null;

        /**
         * 运行环境信息，ComputeEnv 和 EnvId 必须指定一个（且只有一个）参数。
         * @type {AnonymousComputeEnv || null}
         */
        this.ComputeEnv = null;

        /**
         * 计算环境ID，ComputeEnv 和 EnvId 必须指定一个（且只有一个）参数。
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 重定向信息
         * @type {RedirectInfo || null}
         */
        this.RedirectInfo = null;

        /**
         * 重定向本地信息
         * @type {RedirectLocalInfo || null}
         */
        this.RedirectLocalInfo = null;

        /**
         * 输入映射
         * @type {Array.<InputMapping> || null}
         */
        this.InputMappings = null;

        /**
         * 输出映射
         * @type {Array.<OutputMapping> || null}
         */
        this.OutputMappings = null;

        /**
         * 输出映射配置
         * @type {Array.<OutputMappingConfig> || null}
         */
        this.OutputMappingConfigs = null;

        /**
         * 自定义环境变量
         * @type {Array.<EnvVar> || null}
         */
        this.EnvVars = null;

        /**
         * 授权信息
         * @type {Array.<Authentication> || null}
         */
        this.Authentications = null;

        /**
         * TaskInstance失败后处理方式，取值包括TERMINATE（默认）、INTERRUPT、FAST_INTERRUPT。
         * @type {string || null}
         */
        this.FailedAction = null;

        /**
         * 任务失败后的最大重试次数，默认为0
         * @type {number || null}
         */
        this.MaxRetryCount = null;

        /**
         * 任务启动后的超时时间，单位秒，默认为86400秒
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 任务最大并发数限制，默认没有限制。
         * @type {number || null}
         */
        this.MaxConcurrentNum = null;

        /**
         * 任务完成后，重启计算节点。适用于指定计算环境执行任务。
         * @type {boolean || null}
         */
        this.RestartComputeNode = null;

        /**
         * 启动任务过程中，创建计算资源如CVM失败后的最大重试次数，默认为0。
         * @type {number || null}
         */
        this.ResourceMaxRetryCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Application) {
            let obj = new Application();
            obj.deserialize(params.Application)
            this.Application = obj;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskInstanceNum = 'TaskInstanceNum' in params ? params.TaskInstanceNum : null;

        if (params.ComputeEnv) {
            let obj = new AnonymousComputeEnv();
            obj.deserialize(params.ComputeEnv)
            this.ComputeEnv = obj;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

        if (params.RedirectInfo) {
            let obj = new RedirectInfo();
            obj.deserialize(params.RedirectInfo)
            this.RedirectInfo = obj;
        }

        if (params.RedirectLocalInfo) {
            let obj = new RedirectLocalInfo();
            obj.deserialize(params.RedirectLocalInfo)
            this.RedirectLocalInfo = obj;
        }

        if (params.InputMappings) {
            this.InputMappings = new Array();
            for (let z in params.InputMappings) {
                let obj = new InputMapping();
                obj.deserialize(params.InputMappings[z]);
                this.InputMappings.push(obj);
            }
        }

        if (params.OutputMappings) {
            this.OutputMappings = new Array();
            for (let z in params.OutputMappings) {
                let obj = new OutputMapping();
                obj.deserialize(params.OutputMappings[z]);
                this.OutputMappings.push(obj);
            }
        }

        if (params.OutputMappingConfigs) {
            this.OutputMappingConfigs = new Array();
            for (let z in params.OutputMappingConfigs) {
                let obj = new OutputMappingConfig();
                obj.deserialize(params.OutputMappingConfigs[z]);
                this.OutputMappingConfigs.push(obj);
            }
        }

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new EnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }

        if (params.Authentications) {
            this.Authentications = new Array();
            for (let z in params.Authentications) {
                let obj = new Authentication();
                obj.deserialize(params.Authentications[z]);
                this.Authentications.push(obj);
            }
        }
        this.FailedAction = 'FailedAction' in params ? params.FailedAction : null;
        this.MaxRetryCount = 'MaxRetryCount' in params ? params.MaxRetryCount : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.MaxConcurrentNum = 'MaxConcurrentNum' in params ? params.MaxConcurrentNum : null;
        this.RestartComputeNode = 'RestartComputeNode' in params ? params.RestartComputeNode : null;
        this.ResourceMaxRetryCount = 'ResourceMaxRetryCount' in params ? params.ResourceMaxRetryCount : null;

    }
}

/**
 * 批量计算可用的InstanceTypeConfig信息
 * @class
 */
class InstanceTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内存容量，单位：`GB`。
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * CPU核数，单位：核。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例机型。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例机型系列。
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * 描述了实例登录相关配置与信息。
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeepImageLogin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null;

    }
}

/**
 * TerminateComputeNodes返回参数结构体
 * @class
 */
class TerminateComputeNodesResponse extends  AbstractModel {
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
 * DescribeComputeEnvActivities返回参数结构体
 * @class
 */
class DescribeComputeEnvActivitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境中的活动列表
         * @type {Array.<Activity> || null}
         */
        this.ActivitySet = null;

        /**
         * 活动数量
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

        if (params.ActivitySet) {
            this.ActivitySet = new Array();
            for (let z in params.ActivitySet) {
                let obj = new Activity();
                obj.deserialize(params.ActivitySet[z]);
                this.ActivitySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务实例统计指标
 * @class
 */
class TaskInstanceMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Submitted个数
         * @type {number || null}
         */
        this.SubmittedCount = null;

        /**
         * Pending个数
         * @type {number || null}
         */
        this.PendingCount = null;

        /**
         * Runnable个数
         * @type {number || null}
         */
        this.RunnableCount = null;

        /**
         * Starting个数
         * @type {number || null}
         */
        this.StartingCount = null;

        /**
         * Running个数
         * @type {number || null}
         */
        this.RunningCount = null;

        /**
         * Succeed个数
         * @type {number || null}
         */
        this.SucceedCount = null;

        /**
         * FailedInterrupted个数
         * @type {number || null}
         */
        this.FailedInterruptedCount = null;

        /**
         * Failed个数
         * @type {number || null}
         */
        this.FailedCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubmittedCount = 'SubmittedCount' in params ? params.SubmittedCount : null;
        this.PendingCount = 'PendingCount' in params ? params.PendingCount : null;
        this.RunnableCount = 'RunnableCount' in params ? params.RunnableCount : null;
        this.StartingCount = 'StartingCount' in params ? params.StartingCount : null;
        this.RunningCount = 'RunningCount' in params ? params.RunningCount : null;
        this.SucceedCount = 'SucceedCount' in params ? params.SucceedCount : null;
        this.FailedInterruptedCount = 'FailedInterruptedCount' in params ? params.FailedInterruptedCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;

    }
}

/**
 * 任务实例日志详情。
 * @class
 */
class TaskInstanceLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务实例
         * @type {number || null}
         */
        this.TaskInstanceIndex = null;

        /**
         * 标准输出日志（Base64编码）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StdoutLog = null;

        /**
         * 标准错误日志（Base64编码）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StderrLog = null;

        /**
         * 标准输出重定向路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StdoutRedirectPath = null;

        /**
         * 标准错误重定向路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StderrRedirectPath = null;

        /**
         * 标准输出重定向文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StdoutRedirectFileName = null;

        /**
         * 标准错误重定向文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StderrRedirectFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskInstanceIndex = 'TaskInstanceIndex' in params ? params.TaskInstanceIndex : null;
        this.StdoutLog = 'StdoutLog' in params ? params.StdoutLog : null;
        this.StderrLog = 'StderrLog' in params ? params.StderrLog : null;
        this.StdoutRedirectPath = 'StdoutRedirectPath' in params ? params.StdoutRedirectPath : null;
        this.StderrRedirectPath = 'StderrRedirectPath' in params ? params.StderrRedirectPath : null;
        this.StdoutRedirectFileName = 'StdoutRedirectFileName' in params ? params.StdoutRedirectFileName : null;
        this.StderrRedirectFileName = 'StderrRedirectFileName' in params ? params.StderrRedirectFileName : null;

    }
}

/**
 * 数据盘挂载选项
 * @class
 */
class MountDataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点，Linux系统合法路径，或Windows系统盘符,比如"H:\\"
         * @type {string || null}
         */
        this.LocalPath = null;

        /**
         * 文件系统类型，Linux系统下支持"EXT3"和"EXT4"两种，默认"EXT3"；Windows系统下仅支持"NTFS"
         * @type {string || null}
         */
        this.FileSystemType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalPath = 'LocalPath' in params ? params.LocalPath : null;
        this.FileSystemType = 'FileSystemType' in params ? params.FileSystemType : null;

    }
}

/**
 * 任务视图信息
 * @class
 */
class TaskView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务状态
         * @type {string || null}
         */
        this.TaskState = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 结束时间
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
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskState = 'TaskState' in params ? params.TaskState : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 扩展数据
 * @class
 */
class Externals extends  AbstractModel {
    constructor(){
        super();

        /**
         * 释放地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ReleaseAddress = null;

        /**
         * 不支持的网络类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.UnsupportNetworks = null;

        /**
         * HDD本地存储属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StorageBlock || null}
         */
        this.StorageBlockAttr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReleaseAddress = 'ReleaseAddress' in params ? params.ReleaseAddress : null;
        this.UnsupportNetworks = 'UnsupportNetworks' in params ? params.UnsupportNetworks : null;

        if (params.StorageBlockAttr) {
            let obj = new StorageBlock();
            obj.deserialize(params.StorageBlockAttr)
            this.StorageBlockAttr = obj;
        }

    }
}

/**
 * 操作系统类型
 * @class
 */
class OsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作系统ID。
         * @type {number || null}
         */
        this.OsTypeId = null;

        /**
         * 操作系统名称。
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 操作系统名称描述。
         * @type {string || null}
         */
        this.OsDescription = null;

        /**
         * 操作系统英文名称。
         * @type {string || null}
         */
        this.OsEnglishDescription = null;

        /**
         * 操作系统的分类，如CentOs Debian。
         * @type {string || null}
         */
        this.OsClass = null;

        /**
         * 标识镜像分类。public:公共镜像; private: 专属镜像。
         * @type {string || null}
         */
        this.ImageTag = null;

        /**
         * 操作系统，ext4文件下所支持的最大的磁盘大小。单位为T。
         * @type {number || null}
         */
        this.MaxPartitionSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OsTypeId = 'OsTypeId' in params ? params.OsTypeId : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.OsDescription = 'OsDescription' in params ? params.OsDescription : null;
        this.OsEnglishDescription = 'OsEnglishDescription' in params ? params.OsEnglishDescription : null;
        this.OsClass = 'OsClass' in params ? params.OsClass : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;
        this.MaxPartitionSize = 'MaxPartitionSize' in params ? params.MaxPartitionSize : null;

    }
}

/**
 * DescribeComputeEnv返回参数结构体
 * @class
 */
class DescribeComputeEnvResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 计算环境名称
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * 位置信息
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 计算环境创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 计算节点列表信息
         * @type {Array.<ComputeNode> || null}
         */
        this.ComputeNodeSet = null;

        /**
         * 计算节点统计指标
         * @type {ComputeNodeMetrics || null}
         */
        this.ComputeNodeMetrics = null;

        /**
         * 计算节点期望个数
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * 计算环境类型
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * 计算环境资源类型，当前为CVM和CPM（黑石）
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.ComputeNodeSet) {
            this.ComputeNodeSet = new Array();
            for (let z in params.ComputeNodeSet) {
                let obj = new ComputeNode();
                obj.deserialize(params.ComputeNodeSet[z]);
                this.ComputeNodeSet.push(obj);
            }
        }

        if (params.ComputeNodeMetrics) {
            let obj = new ComputeNodeMetrics();
            obj.deserialize(params.ComputeNodeMetrics)
            this.ComputeNodeMetrics = obj;
        }
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCpmOsInfo返回参数结构体
 * @class
 */
class DescribeCpmOsInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作系统信息列表。
         * @type {Array.<OsInfo> || null}
         */
        this.OsInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OsInfoSet) {
            this.OsInfoSet = new Array();
            for (let z in params.OsInfoSet) {
                let obj = new OsInfo();
                obj.deserialize(params.OsInfoSet[z]);
                this.OsInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateJob请求参数结构体
 * @class
 */
class TerminateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * 应用程序信息
 * @class
 */
class Application extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行命令
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 应用程序的交付方式，包括PACKAGE、LOCAL 两种取值，分别指远程存储的软件包、计算环境本地。
         * @type {string || null}
         */
        this.DeliveryForm = null;

        /**
         * 应用程序软件包的远程存储路径
         * @type {string || null}
         */
        this.PackagePath = null;

        /**
         * 应用使用Docker的相关配置。在使用Docker配置的情况下，DeliveryForm 为 LOCAL 表示直接使用Docker镜像内部的应用软件，通过Docker方式运行；DeliveryForm 为 PACKAGE，表示将远程应用包注入到Docker镜像后，通过Docker方式运行。为避免Docker不同版本的兼容性问题，Docker安装包及相关依赖由Batch统一负责，对于已安装Docker的自定义镜像，请卸载后再使用Docker特性。
         * @type {Docker || null}
         */
        this.Docker = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Command = 'Command' in params ? params.Command : null;
        this.DeliveryForm = 'DeliveryForm' in params ? params.DeliveryForm : null;
        this.PackagePath = 'PackagePath' in params ? params.PackagePath : null;

        if (params.Docker) {
            let obj = new Docker();
            obj.deserialize(params.Docker)
            this.Docker = obj;
        }

    }
}

/**
 * 黑石计算环境数据
 * @class
 */
class EnvDataCpm extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石可用区名称列表。如ap-guangzhou-bls-1, 可通过黑石接口[DescribeRegions]( https://cloud.tencent.com/document/api/386/33564)接口获取。不是Batch可用区名称。目前仅支持一个可用区名称。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 购买的机型ID。通过黑石接口[DescribeDeviceClass]( https://cloud.tencent.com/document/api/386/32911)查询设备型号，获取机型信息。
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * 购买时长单位，取值：m(月)。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 购买时长。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * RAID类型ID。通过黑石接口[DescribeDeviceClassPartition]( https://cloud.tencent.com/document/api/386/32910)查询机型RAID方式以及系统盘大小，获取RAID信息。
         * @type {number || null}
         */
        this.RaidId = null;

        /**
         * 部署服务器的操作系统ID。通过批量计算接口DescribeCpmOsInfo查询操作系统信息。
         * @type {number || null}
         */
        this.OsTypeId = null;

        /**
         * 黑石VPC列表，目前仅支持一个VPC。
         * @type {Array.<CpmVirtualPrivateCloud> || null}
         */
        this.VirtualPrivateClouds = null;

        /**
         * 是否安装安全Agent，取值：1(安装) 0(不安装)，默认取值0。
         * @type {number || null}
         */
        this.NeedSecurityAgent = null;

        /**
         * 是否安装监控Agent，取值：1(安装) 0(不安装)，默认取值0。
         * @type {number || null}
         */
        this.NeedMonitorAgent = null;

        /**
         * 自动续费标志位，取值：1(自动续费) 0(不自动续费)，默认取值0。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 数据盘是否格式化，取值：1(格式化) 0(不格式化)，默认取值为1。
         * @type {number || null}
         */
        this.IsZoning = null;

        /**
         * 指定数据盘的文件系统格式，当前支持 ext4和xfs选项， 默认为ext4。 参数适用于数据盘和Linux， 且在IsZoning为1时生效。
         * @type {string || null}
         */
        this.FileSystem = null;

        /**
         * 设置Linux root或Windows Administrator的密码。若不设置此参数，默认情况下会随机生成密码，并以站内信方式通知到用户。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否分配弹性公网IP，取值：1(分配) 0(不分配)，默认取值0。
         * @type {number || null}
         */
        this.ApplyEip = null;

        /**
         * 弹性公网IP计费模式，取值：flow(按流量计费) bandwidth(按带宽计费)，默认取值flow。
         * @type {string || null}
         */
        this.EipPayMode = null;

        /**
         * 弹性公网IP带宽限制，单位Mb。
         * @type {number || null}
         */
        this.EipBandwidth = null;

        /**
         * 自定义镜像ID，取值生效时用自定义镜像部署物理机。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 系统盘根分区大小，单位为G，默认取值10G。通过黑石接口[DescribeDeviceClassPartition]( https://cloud.tencent.com/document/api/386/32910)查询机型RAID方式以及系统盘大小，获取根分区信息。
         * @type {number || null}
         */
        this.SysRootSpace = null;

        /**
         * /data分区大小，单位为G。如果系统盘还有剩余大小，会分配给/data分区。（特殊情况：如果剩余空间不足10G，并且没有指定/data分区，则剩余空间会分配给Root分区）。
         * @type {number || null}
         */
        this.SysDataSpace = null;

        /**
         * 是否开启超线程，取值：1(开启) 0(关闭)，默认取值1。
         * @type {number || null}
         */
        this.HyperThreading = null;

        /**
         * 指定的内网IP列表，不指定时自动分配。
         * @type {Array.<string> || null}
         */
        this.LanIps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.RaidId = 'RaidId' in params ? params.RaidId : null;
        this.OsTypeId = 'OsTypeId' in params ? params.OsTypeId : null;

        if (params.VirtualPrivateClouds) {
            this.VirtualPrivateClouds = new Array();
            for (let z in params.VirtualPrivateClouds) {
                let obj = new CpmVirtualPrivateCloud();
                obj.deserialize(params.VirtualPrivateClouds[z]);
                this.VirtualPrivateClouds.push(obj);
            }
        }
        this.NeedSecurityAgent = 'NeedSecurityAgent' in params ? params.NeedSecurityAgent : null;
        this.NeedMonitorAgent = 'NeedMonitorAgent' in params ? params.NeedMonitorAgent : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.IsZoning = 'IsZoning' in params ? params.IsZoning : null;
        this.FileSystem = 'FileSystem' in params ? params.FileSystem : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ApplyEip = 'ApplyEip' in params ? params.ApplyEip : null;
        this.EipPayMode = 'EipPayMode' in params ? params.EipPayMode : null;
        this.EipBandwidth = 'EipBandwidth' in params ? params.EipBandwidth : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.SysRootSpace = 'SysRootSpace' in params ? params.SysRootSpace : null;
        this.SysDataSpace = 'SysDataSpace' in params ? params.SysDataSpace : null;
        this.HyperThreading = 'HyperThreading' in params ? params.HyperThreading : null;
        this.LanIps = 'LanIps' in params ? params.LanIps : null;

    }
}

/**
 * 输出映射配置
 * @class
 */
class OutputMappingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储类型，仅支持COS
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 并行worker数量
         * @type {number || null}
         */
        this.WorkerNum = null;

        /**
         * worker分块大小，单位MB
         * @type {number || null}
         */
        this.WorkerPartSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.WorkerNum = 'WorkerNum' in params ? params.WorkerNum : null;
        this.WorkerPartSize = 'WorkerPartSize' in params ? params.WorkerPartSize : null;

    }
}

/**
 * 计算节点统计指标
 * @class
 */
class ComputeNodeMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已经完成提交的计算节点数量
         * @type {number || null}
         */
        this.SubmittedCount = null;

        /**
         * 创建中的计算节点数量
         * @type {number || null}
         */
        this.CreatingCount = null;

        /**
         * 创建失败的计算节点数量
         * @type {number || null}
         */
        this.CreationFailedCount = null;

        /**
         * 完成创建的计算节点数量
         * @type {number || null}
         */
        this.CreatedCount = null;

        /**
         * 运行中的计算节点数量
         * @type {number || null}
         */
        this.RunningCount = null;

        /**
         * 销毁中的计算节点数量
         * @type {number || null}
         */
        this.DeletingCount = null;

        /**
         * 异常的计算节点数量
         * @type {number || null}
         */
        this.AbnormalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubmittedCount = 'SubmittedCount' in params ? params.SubmittedCount : null;
        this.CreatingCount = 'CreatingCount' in params ? params.CreatingCount : null;
        this.CreationFailedCount = 'CreationFailedCount' in params ? params.CreationFailedCount : null;
        this.CreatedCount = 'CreatedCount' in params ? params.CreatedCount : null;
        this.RunningCount = 'RunningCount' in params ? params.RunningCount : null;
        this.DeletingCount = 'DeletingCount' in params ? params.DeletingCount : null;
        this.AbnormalCount = 'AbnormalCount' in params ? params.AbnormalCount : null;

    }
}

/**
 * 任务统计指标
 * @class
 */
class TaskMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Submitted个数
         * @type {number || null}
         */
        this.SubmittedCount = null;

        /**
         * Pending个数
         * @type {number || null}
         */
        this.PendingCount = null;

        /**
         * Runnable个数
         * @type {number || null}
         */
        this.RunnableCount = null;

        /**
         * Starting个数
         * @type {number || null}
         */
        this.StartingCount = null;

        /**
         * Running个数
         * @type {number || null}
         */
        this.RunningCount = null;

        /**
         * Succeed个数
         * @type {number || null}
         */
        this.SucceedCount = null;

        /**
         * FailedInterrupted个数
         * @type {number || null}
         */
        this.FailedInterruptedCount = null;

        /**
         * Failed个数
         * @type {number || null}
         */
        this.FailedCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubmittedCount = 'SubmittedCount' in params ? params.SubmittedCount : null;
        this.PendingCount = 'PendingCount' in params ? params.PendingCount : null;
        this.RunnableCount = 'RunnableCount' in params ? params.RunnableCount : null;
        this.StartingCount = 'StartingCount' in params ? params.StartingCount : null;
        this.RunningCount = 'RunningCount' in params ? params.RunningCount : null;
        this.SucceedCount = 'SucceedCount' in params ? params.SucceedCount : null;
        this.FailedInterruptedCount = 'FailedInterruptedCount' in params ? params.FailedInterruptedCount : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;

    }
}

/**
 * TerminateComputeNodes请求参数结构体
 * @class
 */
class TerminateComputeNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 计算节点ID列表
         * @type {Array.<string> || null}
         */
        this.ComputeNodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ComputeNodeIds = 'ComputeNodeIds' in params ? params.ComputeNodeIds : null;

    }
}

/**
 * 本地磁盘规格
 * @class
 */
class LocalDiskType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地磁盘类型。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 本地磁盘属性。
         * @type {string || null}
         */
        this.PartitionType = null;

        /**
         * 本地磁盘最小值。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 本地磁盘最大值。
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 购买时本地盘是否为必选。取值范围：<br><li>REQUIRED：表示必选<br><li>OPTIONAL：表示可选。
         * @type {string || null}
         */
        this.Required = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PartitionType = 'PartitionType' in params ? params.PartitionType : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Required = 'Required' in params ? params.Required : null;

    }
}

/**
 * DescribeComputeEnvActivities请求参数结构体
 * @class
 */
class DescribeComputeEnvActivitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件
<li> compute-node-id - String - 是否必填：否 -（过滤条件）按照计算节点ID过滤。</li>
         * @type {Filter || null}
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            let obj = new Filter();
            obj.deserialize(params.Filters)
            this.Filters = obj;
        }

    }
}

/**
 * CreateTaskTemplate请求参数结构体
 * @class
 */
class CreateTaskTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务模板名称
         * @type {string || null}
         */
        this.TaskTemplateName = null;

        /**
         * 任务模板内容，参数要求与任务一致
         * @type {Task || null}
         */
        this.TaskTemplateInfo = null;

        /**
         * 任务模板描述
         * @type {string || null}
         */
        this.TaskTemplateDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskTemplateName = 'TaskTemplateName' in params ? params.TaskTemplateName : null;

        if (params.TaskTemplateInfo) {
            let obj = new Task();
            obj.deserialize(params.TaskTemplateInfo)
            this.TaskTemplateInfo = obj;
        }
        this.TaskTemplateDescription = 'TaskTemplateDescription' in params ? params.TaskTemplateDescription : null;

    }
}

/**
 * 作业
 * @class
 */
class Job extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务信息
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

        /**
         * 作业名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 作业描述
         * @type {string || null}
         */
        this.JobDescription = null;

        /**
         * 作业优先级，任务（Task）和任务实例（TaskInstance）会继承作业优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 依赖信息
         * @type {Array.<Dependence> || null}
         */
        this.Dependences = null;

        /**
         * 通知信息
         * @type {Array.<Notification> || null}
         */
        this.Notifications = null;

        /**
         * 对于存在依赖关系的任务中，后序任务执行对于前序任务的依赖条件。取值范围包括 PRE_TASK_SUCCEED，PRE_TASK_AT_LEAST_PARTLY_SUCCEED，PRE_TASK_FINISHED，默认值为PRE_TASK_SUCCEED。
         * @type {string || null}
         */
        this.TaskExecutionDependOn = null;

        /**
         * 表示创建 CVM 失败按照何种策略处理。取值范围包括 FAILED，RUNNABLE。FAILED 表示创建 CVM 失败按照一次执行失败处理，RUNNABLE 表示创建 CVM 失败按照继续等待处理。默认值为FAILED。StateIfCreateCvmFailed对于提交的指定计算环境的作业无效。
         * @type {string || null}
         */
        this.StateIfCreateCvmFailed = null;

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
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.JobDescription = 'JobDescription' in params ? params.JobDescription : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

        if (params.Dependences) {
            this.Dependences = new Array();
            for (let z in params.Dependences) {
                let obj = new Dependence();
                obj.deserialize(params.Dependences[z]);
                this.Dependences.push(obj);
            }
        }

        if (params.Notifications) {
            this.Notifications = new Array();
            for (let z in params.Notifications) {
                let obj = new Notification();
                obj.deserialize(params.Notifications[z]);
                this.Notifications.push(obj);
            }
        }
        this.TaskExecutionDependOn = 'TaskExecutionDependOn' in params ? params.TaskExecutionDependOn : null;
        this.StateIfCreateCvmFailed = 'StateIfCreateCvmFailed' in params ? params.StateIfCreateCvmFailed : null;

    }
}

/**
 * DeleteComputeEnv请求参数结构体
 * @class
 */
class DeleteComputeEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * CreateComputeEnv请求参数结构体
 * @class
 */
class CreateComputeEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境信息
         * @type {NamedComputeEnv || null}
         */
        this.ComputeEnv = null;

        /**
         * 位置信息
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由用户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ComputeEnv) {
            let obj = new NamedComputeEnv();
            obj.deserialize(params.ComputeEnv)
            this.ComputeEnv = obj;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

/**
 * DescribeComputeEnvCreateInfo返回参数结构体
 * @class
 */
class DescribeComputeEnvCreateInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境 ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 计算环境名称
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * 计算环境描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvDescription = null;

        /**
         * 计算环境类型，仅支持“MANAGED”类型
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * 计算环境参数
         * @type {EnvData || null}
         */
        this.EnvData = null;

        /**
         * 数据盘挂载选项
         * @type {Array.<MountDataDisk> || null}
         */
        this.MountDataDisks = null;

        /**
         * 输入映射
         * @type {Array.<InputMapping> || null}
         */
        this.InputMappings = null;

        /**
         * 授权信息
         * @type {Array.<Authentication> || null}
         */
        this.Authentications = null;

        /**
         * 通知信息
         * @type {Array.<Notification> || null}
         */
        this.Notifications = null;

        /**
         * 计算节点期望个数
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;
        this.EnvDescription = 'EnvDescription' in params ? params.EnvDescription : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

        if (params.EnvData) {
            let obj = new EnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

        if (params.MountDataDisks) {
            this.MountDataDisks = new Array();
            for (let z in params.MountDataDisks) {
                let obj = new MountDataDisk();
                obj.deserialize(params.MountDataDisks[z]);
                this.MountDataDisks.push(obj);
            }
        }

        if (params.InputMappings) {
            this.InputMappings = new Array();
            for (let z in params.InputMappings) {
                let obj = new InputMapping();
                obj.deserialize(params.InputMappings[z]);
                this.InputMappings.push(obj);
            }
        }

        if (params.Authentications) {
            this.Authentications = new Array();
            for (let z in params.Authentications) {
                let obj = new Authentication();
                obj.deserialize(params.Authentications[z]);
                this.Authentications.push(obj);
            }
        }

        if (params.Notifications) {
            this.Notifications = new Array();
            for (let z in params.Notifications) {
                let obj = new Notification();
                obj.deserialize(params.Notifications[z]);
                this.Notifications.push(obj);
            }
        }
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateJob返回参数结构体
 * @class
 */
class TerminateJobResponse extends  AbstractModel {
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
 * 计算环境创建信息。
 * @class
 */
class ComputeEnvCreateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境 ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 计算环境名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * 计算环境描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvDescription = null;

        /**
         * 计算环境类型，仅支持“MANAGED”类型
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * 计算环境参数
         * @type {EnvData || null}
         */
        this.EnvData = null;

        /**
         * 数据盘挂载选项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MountDataDisk> || null}
         */
        this.MountDataDisks = null;

        /**
         * 输入映射
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InputMapping> || null}
         */
        this.InputMappings = null;

        /**
         * 授权信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Authentication> || null}
         */
        this.Authentications = null;

        /**
         * 通知信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Notification> || null}
         */
        this.Notifications = null;

        /**
         * 计算节点期望个数
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;
        this.EnvDescription = 'EnvDescription' in params ? params.EnvDescription : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

        if (params.EnvData) {
            let obj = new EnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

        if (params.MountDataDisks) {
            this.MountDataDisks = new Array();
            for (let z in params.MountDataDisks) {
                let obj = new MountDataDisk();
                obj.deserialize(params.MountDataDisks[z]);
                this.MountDataDisks.push(obj);
            }
        }

        if (params.InputMappings) {
            this.InputMappings = new Array();
            for (let z in params.InputMappings) {
                let obj = new InputMapping();
                obj.deserialize(params.InputMappings[z]);
                this.InputMappings.push(obj);
            }
        }

        if (params.Authentications) {
            this.Authentications = new Array();
            for (let z in params.Authentications) {
                let obj = new Authentication();
                obj.deserialize(params.Authentications[z]);
                this.Authentications.push(obj);
            }
        }

        if (params.Notifications) {
            this.Notifications = new Array();
            for (let z in params.Notifications) {
                let obj = new Notification();
                obj.deserialize(params.Notifications[z]);
                this.Notifications.push(obj);
            }
        }
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;

    }
}

/**
 * DescribeComputeEnvCreateInfos请求参数结构体
 * @class
 */
class DescribeComputeEnvCreateInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID列表，与Filters参数不能同时指定。
         * @type {Array.<string> || null}
         */
        this.EnvIds = null;

        /**
         * 过滤条件
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> env-id - String - 是否必填：否 -（过滤条件）按照计算环境ID过滤。</li>
<li> env-name - String - 是否必填：否 -（过滤条件）按照计算环境名称过滤。</li>
与EnvIds参数不能同时指定。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
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
        this.EnvIds = 'EnvIds' in params ? params.EnvIds : null;

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
 * DescribeComputeEnv请求参数结构体
 * @class
 */
class DescribeComputeEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * 竞价请求相关选项
 * @class
 */
class InstanceMarketOptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 竞价相关选项
         * @type {SpotMarketOptions || null}
         */
        this.SpotOptions = null;

        /**
         * 市场选项类型，当前只支持取值：spot
         * @type {string || null}
         */
        this.MarketType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpotOptions) {
            let obj = new SpotMarketOptions();
            obj.deserialize(params.SpotOptions)
            this.SpotOptions = obj;
        }
        this.MarketType = 'MarketType' in params ? params.MarketType : null;

    }
}

/**
 * DescribeTaskTemplates返回参数结构体
 * @class
 */
class DescribeTaskTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务模板列表
         * @type {Array.<TaskTemplateView> || null}
         */
        this.TaskTemplateSet = null;

        /**
         * 任务模板数量
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

        if (params.TaskTemplateSet) {
            this.TaskTemplateSet = new Array();
            for (let z in params.TaskTemplateSet) {
                let obj = new TaskTemplateView();
                obj.deserialize(params.TaskTemplateSet[z]);
                this.TaskTemplateSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCpmComputeEnv返回参数结构体
 * @class
 */
class CreateCpmComputeEnvResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
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
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * CreateCpmComputeEnv请求参数结构体
 * @class
 */
class CreateCpmComputeEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境信息
         * @type {NamedCpmComputeEnv || null}
         */
        this.ComputeEnv = null;

        /**
         * 位置信息
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由用户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ComputeEnv) {
            let obj = new NamedCpmComputeEnv();
            obj.deserialize(params.ComputeEnv)
            this.ComputeEnv = obj;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

/**
 * DescribeTaskLogs返回参数结构体
 * @class
 */
class DescribeTaskLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务实例日志详情集合
         * @type {Array.<TaskInstanceLog> || null}
         */
        this.TaskInstanceLogSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.TaskInstanceLogSet) {
            this.TaskInstanceLogSet = new Array();
            for (let z in params.TaskInstanceLogSet) {
                let obj = new TaskInstanceLog();
                obj.deserialize(params.TaskInstanceLogSet[z]);
                this.TaskInstanceLogSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 黑石计算环境
 * @class
 */
class NamedCpmComputeEnv extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境名称
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * 计算环境具体参数
         * @type {EnvDataCpm || null}
         */
        this.EnvData = null;

        /**
         * 计算节点期望个数
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * 计算环境描述
         * @type {string || null}
         */
        this.EnvDescription = null;

        /**
         * 计算环境管理类型， 取值MANAGED。
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * 授权信息
         * @type {Array.<Authentication> || null}
         */
        this.Authentications = null;

        /**
         * 输入映射信息
         * @type {Array.<InputMapping> || null}
         */
        this.InputMappings = null;

        /**
         * 通知信息
         * @type {Notification || null}
         */
        this.Notifications = null;

        /**
         * 非活跃节点处理策略，默认“RECREATE”，即对于实例创建失败或异常退还的计算节点，定期重新创建实例资源。
         * @type {string || null}
         */
        this.ActionIfComputeNodeInactive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvName = 'EnvName' in params ? params.EnvName : null;

        if (params.EnvData) {
            let obj = new EnvDataCpm();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.EnvDescription = 'EnvDescription' in params ? params.EnvDescription : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

        if (params.Authentications) {
            this.Authentications = new Array();
            for (let z in params.Authentications) {
                let obj = new Authentication();
                obj.deserialize(params.Authentications[z]);
                this.Authentications.push(obj);
            }
        }

        if (params.InputMappings) {
            this.InputMappings = new Array();
            for (let z in params.InputMappings) {
                let obj = new InputMapping();
                obj.deserialize(params.InputMappings[z]);
                this.InputMappings.push(obj);
            }
        }

        if (params.Notifications) {
            let obj = new Notification();
            obj.deserialize(params.Notifications)
            this.Notifications = obj;
        }
        this.ActionIfComputeNodeInactive = 'ActionIfComputeNodeInactive' in params ? params.ActionIfComputeNodeInactive : null;

    }
}

/**
 * DeleteTaskTemplates请求参数结构体
 * @class
 */
class DeleteTaskTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于删除任务模板信息
         * @type {Array.<string> || null}
         */
        this.TaskTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskTemplateIds = 'TaskTemplateIds' in params ? params.TaskTemplateIds : null;

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
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 作业名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 可用区信息
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 作业优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 作业状态
         * @type {string || null}
         */
        this.JobState = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务视图信息
         * @type {Array.<TaskView> || null}
         */
        this.TaskSet = null;

        /**
         * 任务间依赖信息
         * @type {Array.<Dependence> || null}
         */
        this.DependenceSet = null;

        /**
         * 任务统计指标
         * @type {TaskMetrics || null}
         */
        this.TaskMetrics = null;

        /**
         * 任务实例统计指标
         * @type {TaskInstanceView || null}
         */
        this.TaskInstanceMetrics = null;

        /**
         * 作业失败原因
         * @type {string || null}
         */
        this.StateReason = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.JobState = 'JobState' in params ? params.JobState : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskView();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }

        if (params.DependenceSet) {
            this.DependenceSet = new Array();
            for (let z in params.DependenceSet) {
                let obj = new Dependence();
                obj.deserialize(params.DependenceSet[z]);
                this.DependenceSet.push(obj);
            }
        }

        if (params.TaskMetrics) {
            let obj = new TaskMetrics();
            obj.deserialize(params.TaskMetrics)
            this.TaskMetrics = obj;
        }

        if (params.TaskInstanceMetrics) {
            let obj = new TaskInstanceView();
            obj.deserialize(params.TaskInstanceMetrics)
            this.TaskInstanceMetrics = obj;
        }
        this.StateReason = 'StateReason' in params ? params.StateReason : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComputeEnvCreateInfo请求参数结构体
 * @class
 */
class DescribeComputeEnvCreateInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * ModifyTaskTemplate请求参数结构体
 * @class
 */
class ModifyTaskTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务模板ID
         * @type {string || null}
         */
        this.TaskTemplateId = null;

        /**
         * 任务模板名称
         * @type {string || null}
         */
        this.TaskTemplateName = null;

        /**
         * 任务模板描述
         * @type {string || null}
         */
        this.TaskTemplateDescription = null;

        /**
         * 任务模板信息
         * @type {Task || null}
         */
        this.TaskTemplateInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskTemplateId = 'TaskTemplateId' in params ? params.TaskTemplateId : null;
        this.TaskTemplateName = 'TaskTemplateName' in params ? params.TaskTemplateName : null;
        this.TaskTemplateDescription = 'TaskTemplateDescription' in params ? params.TaskTemplateDescription : null;

        if (params.TaskTemplateInfo) {
            let obj = new Task();
            obj.deserialize(params.TaskTemplateInfo)
            this.TaskTemplateInfo = obj;
        }

    }
}

/**
 * DescribeCpmOsInfo请求参数结构体
 * @class
 */
class DescribeCpmOsInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石设备类型代号。 可以从[DescribeDeviceClass](https://cloud.tencent.com/document/api/386/32911)查询设备类型列表。
         * @type {string || null}
         */
        this.DeviceClassCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;

    }
}

/**
 * 描述了数据盘的信息
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[实例规格](/document/product/213/2177)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 数据盘类型。数据盘类型限制详见[实例规格](/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><br>默认取值：LOCAL_BASIC。<br><br>该参数对`ResizeInstanceDisk`接口无效。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 数据盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 数据盘是否随子机销毁。取值范围：
<li>TRUE：子机销毁时，销毁数据盘，只支持按小时后付费云盘
<li>FALSE：子机销毁时，保留数据盘<br>
默认取值：TRUE<br>
该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * 数据盘快照ID。选择的数据盘快照大小需小于数据盘大小。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SnapshotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

    }
}

/**
 * 计算环境
 * @class
 */
class NamedComputeEnv extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境名称
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * 计算节点期望个数
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * 计算环境描述
         * @type {string || null}
         */
        this.EnvDescription = null;

        /**
         * 计算环境管理类型
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * 计算环境具体参数
         * @type {EnvData || null}
         */
        this.EnvData = null;

        /**
         * 数据盘挂载选项
         * @type {Array.<MountDataDisk> || null}
         */
        this.MountDataDisks = null;

        /**
         * 授权信息
         * @type {Array.<Authentication> || null}
         */
        this.Authentications = null;

        /**
         * 输入映射信息
         * @type {Array.<InputMapping> || null}
         */
        this.InputMappings = null;

        /**
         * agent运行模式，适用于Windows系统
         * @type {AgentRunningMode || null}
         */
        this.AgentRunningMode = null;

        /**
         * 通知信息
         * @type {Notification || null}
         */
        this.Notifications = null;

        /**
         * 非活跃节点处理策略，默认“RECREATE”，即对于实例创建失败或异常退还的计算节点，定期重新创建实例资源。
         * @type {string || null}
         */
        this.ActionIfComputeNodeInactive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvName = 'EnvName' in params ? params.EnvName : null;
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.EnvDescription = 'EnvDescription' in params ? params.EnvDescription : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

        if (params.EnvData) {
            let obj = new EnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

        if (params.MountDataDisks) {
            this.MountDataDisks = new Array();
            for (let z in params.MountDataDisks) {
                let obj = new MountDataDisk();
                obj.deserialize(params.MountDataDisks[z]);
                this.MountDataDisks.push(obj);
            }
        }

        if (params.Authentications) {
            this.Authentications = new Array();
            for (let z in params.Authentications) {
                let obj = new Authentication();
                obj.deserialize(params.Authentications[z]);
                this.Authentications.push(obj);
            }
        }

        if (params.InputMappings) {
            this.InputMappings = new Array();
            for (let z in params.InputMappings) {
                let obj = new InputMapping();
                obj.deserialize(params.InputMappings[z]);
                this.InputMappings.push(obj);
            }
        }

        if (params.AgentRunningMode) {
            let obj = new AgentRunningMode();
            obj.deserialize(params.AgentRunningMode)
            this.AgentRunningMode = obj;
        }

        if (params.Notifications) {
            let obj = new Notification();
            obj.deserialize(params.Notifications)
            this.Notifications = obj;
        }
        this.ActionIfComputeNodeInactive = 'ActionIfComputeNodeInactive' in params ? params.ActionIfComputeNodeInactive : null;

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
 * 通知信息
 * @class
 */
class Notification extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMQ主题名字，要求主题名有效且关联订阅
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 事件配置
         * @type {Array.<EventConfig> || null}
         */
        this.EventConfigs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

        if (params.EventConfigs) {
            this.EventConfigs = new Array();
            for (let z in params.EventConfigs) {
                let obj = new EventConfig();
                obj.deserialize(params.EventConfigs[z]);
                this.EventConfigs.push(obj);
            }
        }

    }
}

/**
 * 竞价相关选项
 * @class
 */
class SpotMarketOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 竞价出价
         * @type {string || null}
         */
        this.MaxPrice = null;

        /**
         * 竞价请求类型，当前仅支持类型：one-time
         * @type {string || null}
         */
        this.SpotInstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxPrice = 'MaxPrice' in params ? params.MaxPrice : null;
        this.SpotInstanceType = 'SpotInstanceType' in params ? params.SpotInstanceType : null;

    }
}

/**
 * 黑石私有网络
 * @class
 */
class CpmVirtualPrivateCloud extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 黑石子网ID
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * 输出映射
 * @class
 */
class OutputMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源端路径
         * @type {string || null}
         */
        this.SourcePath = null;

        /**
         * 目的端路径
         * @type {string || null}
         */
        this.DestinationPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourcePath = 'SourcePath' in params ? params.SourcePath : null;
        this.DestinationPath = 'DestinationPath' in params ? params.DestinationPath : null;

    }
}

/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * 开启云监控服务。若不指定该参数，则默认开启云监控服务。
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

    }
}

/**
 * DescribeJobSubmitInfo返回参数结构体
 * @class
 */
class DescribeJobSubmitInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 作业名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 作业描述
         * @type {string || null}
         */
        this.JobDescription = null;

        /**
         * 作业优先级，任务（Task）和任务实例（TaskInstance）会继承作业优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 任务信息
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

        /**
         * 依赖信息
         * @type {Array.<Dependence> || null}
         */
        this.Dependences = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.JobDescription = 'JobDescription' in params ? params.JobDescription : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }

        if (params.Dependences) {
            this.Dependences = new Array();
            for (let z in params.Dependences) {
                let obj = new Dependence();
                obj.deserialize(params.Dependences[z]);
                this.Dependences.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComputeEnvCreateInfos返回参数结构体
 * @class
 */
class DescribeComputeEnvCreateInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 计算环境创建信息列表
         * @type {Array.<ComputeEnvCreateInfo> || null}
         */
        this.ComputeEnvCreateInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ComputeEnvCreateInfoSet) {
            this.ComputeEnvCreateInfoSet = new Array();
            for (let z in params.ComputeEnvCreateInfoSet) {
                let obj = new ComputeEnvCreateInfo();
                obj.deserialize(params.ComputeEnvCreateInfoSet[z]);
                this.ComputeEnvCreateInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述了 “云安全” 服务相关的信息
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启[云安全](/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务<br><li>FALSE：表示不开启云安全服务<br><br>默认取值：TRUE。
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

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
         * 作业标识
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * 重定向信息

 * @class
 */
class RedirectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标准输出重定向路径
         * @type {string || null}
         */
        this.StdoutRedirectPath = null;

        /**
         * 标准错误重定向路径
         * @type {string || null}
         */
        this.StderrRedirectPath = null;

        /**
         * 标准输出重定向文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX}
         * @type {string || null}
         */
        this.StdoutRedirectFileName = null;

        /**
         * 标准错误重定向文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX}
         * @type {string || null}
         */
        this.StderrRedirectFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StdoutRedirectPath = 'StdoutRedirectPath' in params ? params.StdoutRedirectPath : null;
        this.StderrRedirectPath = 'StderrRedirectPath' in params ? params.StderrRedirectPath : null;
        this.StdoutRedirectFileName = 'StdoutRedirectFileName' in params ? params.StdoutRedirectFileName : null;
        this.StderrRedirectFileName = 'StderrRedirectFileName' in params ? params.StderrRedirectFileName : null;

    }
}

/**
 * DescribeInstanceCategories返回参数结构体
 * @class
 */
class DescribeInstanceCategoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM实例分类列表
         * @type {Array.<InstanceCategoryItem> || null}
         */
        this.InstanceCategorySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceCategorySet) {
            this.InstanceCategorySet = new Array();
            for (let z in params.InstanceCategorySet) {
                let obj = new InstanceCategoryItem();
                obj.deserialize(params.InstanceCategorySet[z]);
                this.InstanceCategorySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskTemplate返回参数结构体
 * @class
 */
class ModifyTaskTemplateResponse extends  AbstractModel {
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
 * SubmitJob返回参数结构体
 * @class
 */
class SubmitJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当通过本接口来提交作业时会返回该参数，表示一个作业ID。返回作业ID列表并不代表作业解析/运行成功，可根据 DescribeJob 接口查询其状态。
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
 * 输入映射
 * @class
 */
class InputMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源端路径
         * @type {string || null}
         */
        this.SourcePath = null;

        /**
         * 目的端路径
         * @type {string || null}
         */
        this.DestinationPath = null;

        /**
         * 挂载配置项参数
         * @type {string || null}
         */
        this.MountOptionParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourcePath = 'SourcePath' in params ? params.SourcePath : null;
        this.DestinationPath = 'DestinationPath' in params ? params.DestinationPath : null;
        this.MountOptionParameter = 'MountOptionParameter' in params ? params.MountOptionParameter : null;

    }
}

/**
 * 本地重定向信息
 * @class
 */
class RedirectLocalInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标准输出重定向本地路径
         * @type {string || null}
         */
        this.StdoutLocalPath = null;

        /**
         * 标准错误重定向本地路径
         * @type {string || null}
         */
        this.StderrLocalPath = null;

        /**
         * 标准输出重定向本地文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX}
         * @type {string || null}
         */
        this.StdoutLocalFileName = null;

        /**
         * 标准错误重定向本地文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX}
         * @type {string || null}
         */
        this.StderrLocalFileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StdoutLocalPath = 'StdoutLocalPath' in params ? params.StdoutLocalPath : null;
        this.StderrLocalPath = 'StderrLocalPath' in params ? params.StderrLocalPath : null;
        this.StdoutLocalFileName = 'StdoutLocalFileName' in params ? params.StdoutLocalFileName : null;
        this.StderrLocalFileName = 'StderrLocalFileName' in params ? params.StderrLocalFileName : null;

    }
}

/**
 * DescribeJobSubmitInfo请求参数结构体
 * @class
 */
class DescribeJobSubmitInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * 依赖关系
 * @class
 */
class Dependence extends  AbstractModel {
    constructor(){
        super();

        /**
         * 依赖关系的起点任务名称
         * @type {string || null}
         */
        this.StartTask = null;

        /**
         * 依赖关系的终点任务名称
         * @type {string || null}
         */
        this.EndTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTask = 'StartTask' in params ? params.StartTask : null;
        this.EndTask = 'EndTask' in params ? params.EndTask : null;

    }
}

/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
```
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
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
 * CreateComputeEnv返回参数结构体
 * @class
 */
class CreateComputeEnvResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Docker容器信息
 * @class
 */
class Docker extends  AbstractModel {
    constructor(){
        super();

        /**
         * Docker Hub 用户名或 Tencent Registry 用户名
         * @type {string || null}
         */
        this.User = null;

        /**
         * Docker Hub 密码或 Tencent Registry 密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Docker Hub填写“[user/repo]:[tag]”，Tencent Registry填写“ccr.ccs.tencentyun.com/[namespace/repo]:[tag]”
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Docker Hub 可以不填，但确保具有公网访问能力。或者是 Tencent Registry 服务地址“ccr.ccs.tencentyun.com”
         * @type {string || null}
         */
        this.Server = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Server = 'Server' in params ? params.Server : null;

    }
}

/**
 * ModifyComputeEnv返回参数结构体
 * @class
 */
class ModifyComputeEnvResponse extends  AbstractModel {
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
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅CDH产品可用），母机ip等
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属的[可用区](/document/product/213/9452#zone)ID。该参数也可以通过调用  [DescribeZones](/document/api/213/9455) 的返回值中的Zone字段来获取。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例所属项目ID。该参数可以通过调用 [DescribeProject](/document/api/378/4400) 的返回值中的 projectId 字段来获取。不填为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例所属的专用宿主机ID列表。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。
         * @type {Array.<string> || null}
         */
        this.HostIds = null;

        /**
         * 指定母机ip生产子机
         * @type {Array.<string> || null}
         */
        this.HostIps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.HostIds = 'HostIds' in params ? params.HostIds : null;
        this.HostIps = 'HostIps' in params ? params.HostIps : null;

    }
}

/**
 * 计算节点
 * @class
 */
class ComputeNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算节点ID
         * @type {string || null}
         */
        this.ComputeNodeId = null;

        /**
         * 计算节点实例ID，对于CVM场景，即为CVM的InstanceId
         * @type {string || null}
         */
        this.ComputeNodeInstanceId = null;

        /**
         * 计算节点状态
         * @type {string || null}
         */
        this.ComputeNodeState = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存容量，单位GiB
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 资源创建完成时间
         * @type {string || null}
         */
        this.ResourceCreatedTime = null;

        /**
         * 计算节点运行  TaskInstance 可用容量。0表示计算节点忙碌。
         * @type {number || null}
         */
        this.TaskInstanceNumAvailable = null;

        /**
         * Batch Agent 版本
         * @type {string || null}
         */
        this.AgentVersion = null;

        /**
         * 实例内网IP
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 实例公网IP
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 计算环境资源类型，当前为CVM和CPM（黑石）
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
        this.ComputeNodeId = 'ComputeNodeId' in params ? params.ComputeNodeId : null;
        this.ComputeNodeInstanceId = 'ComputeNodeInstanceId' in params ? params.ComputeNodeInstanceId : null;
        this.ComputeNodeState = 'ComputeNodeState' in params ? params.ComputeNodeState : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.ResourceCreatedTime = 'ResourceCreatedTime' in params ? params.ResourceCreatedTime : null;
        this.TaskInstanceNumAvailable = 'TaskInstanceNumAvailable' in params ? params.TaskInstanceNumAvailable : null;
        this.AgentVersion = 'AgentVersion' in params ? params.AgentVersion : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * 描述了单项的价格信息
 * @class
 */
class ItemPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后续单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * 后续计价单元，可取值范围： <br><li>HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）：<br><li>GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * 预支费用的原价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 预支费用的折扣价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * 描述实例机型配额信息。
 * @class
 */
class InstanceTypeQuotaItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例机型。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例计费模式。取值范围： <br><li>PREPAID：表示预付费，即包年包月<br><li>POSTPAID_BY_HOUR：表示后付费，即按量计费<br><li>CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对CDH计费，不对CDH上的实例计费。<br><li>`SPOTPAID`：表示竞价实例付费。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 网卡类型，例如：25代表25G网卡
         * @type {number || null}
         */
        this.NetworkCard = null;

        /**
         * 扩展属性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Externals || null}
         */
        this.Externals = null;

        /**
         * 实例的CPU核数，单位：核。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例内存容量，单位：`GB`。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例机型系列。
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * 机型名称。
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 本地磁盘规格列表。当该参数返回为空值时，表示当前情况下无法创建本地盘。
         * @type {Array.<LocalDiskType> || null}
         */
        this.LocalDiskTypeList = null;

        /**
         * 实例是否售卖。取值范围： <br><li>SELL：表示实例可购买<br><li>SOLD_OUT：表示实例已售罄。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例的售卖价格。
         * @type {ItemPrice || null}
         */
        this.Price = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.NetworkCard = 'NetworkCard' in params ? params.NetworkCard : null;

        if (params.Externals) {
            let obj = new Externals();
            obj.deserialize(params.Externals)
            this.Externals = obj;
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;

        if (params.LocalDiskTypeList) {
            this.LocalDiskTypeList = new Array();
            for (let z in params.LocalDiskTypeList) {
                let obj = new LocalDiskType();
                obj.deserialize(params.LocalDiskTypeList[z]);
                this.LocalDiskTypeList.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Price) {
            let obj = new ItemPrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }

    }
}

/**
 * CreateTaskTemplate返回参数结构体
 * @class
 */
class CreateTaskTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务模板ID
         * @type {string || null}
         */
        this.TaskTemplateId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskTemplateId = 'TaskTemplateId' in params ? params.TaskTemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HDD的本地存储信息
 * @class
 */
class StorageBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * HDD本地存储类型，值为：LOCAL_PRO.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * HDD本地存储的最小容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * HDD本地存储的最大容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

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
         * 作业ID列表，与Filters参数不能同时指定。
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * 过滤条件
<li> job-id - String - 是否必填：否 -（过滤条件）按照作业ID过滤。</li>
<li> job-name - String - 是否必填：否 -（过滤条件）按照作业名称过滤。</li>
<li> job-state - String - 是否必填：否 -（过滤条件）按照作业状态过滤。</li>
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
与JobIds参数不能同时指定。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
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
        this.JobIds = 'JobIds' in params ? params.JobIds : null;

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
 * 任务模板信息
 * @class
 */
class TaskTemplateView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务模板ID
         * @type {string || null}
         */
        this.TaskTemplateId = null;

        /**
         * 任务模板名称
         * @type {string || null}
         */
        this.TaskTemplateName = null;

        /**
         * 任务模板描述
         * @type {string || null}
         */
        this.TaskTemplateDescription = null;

        /**
         * 任务模板信息
         * @type {Task || null}
         */
        this.TaskTemplateInfo = null;

        /**
         * 创建时间
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
        this.TaskTemplateId = 'TaskTemplateId' in params ? params.TaskTemplateId : null;
        this.TaskTemplateName = 'TaskTemplateName' in params ? params.TaskTemplateName : null;
        this.TaskTemplateDescription = 'TaskTemplateDescription' in params ? params.TaskTemplateDescription : null;

        if (params.TaskTemplateInfo) {
            let obj = new Task();
            obj.deserialize(params.TaskTemplateInfo)
            this.TaskTemplateInfo = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 实例机型配置。
 * @class
 */
class InstanceTypeOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU核数。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 内存值，单位GB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例机型类别，可选参数：“ALL”、“GENERAL”、“GENERAL_2”、“GENERAL_3”、“COMPUTE”、“COMPUTE_2”和“COMPUTE_3”。默认值“ALL”。
         * @type {Array.<string> || null}
         */
        this.InstanceCategories = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceCategories = 'InstanceCategories' in params ? params.InstanceCategories : null;

    }
}

/**
 * DeleteTaskTemplates返回参数结构体
 * @class
 */
class DeleteTaskTemplatesResponse extends  AbstractModel {
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
 * DescribeCvmZoneInstanceConfigInfos请求参数结构体
 * @class
 */
class DescribeCvmZoneInstanceConfigInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> instance-family String - 是否必填：否 -（过滤条件）按照机型系列过滤。实例机型系列形如：S1、I1、M1等。</li>
<li> instance-type - String - 是否必填：否 - （过滤条件）按照机型过滤。</li>
<li> instance-charge-type - String - 是否必填：否 -（过滤条件）按照实例计费模式过滤。 ( POSTPAID_BY_HOUR：表示后付费，即按量计费机型 | SPOTPAID：表示竞价付费机型。 )  </li>
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
 * TerminateTaskInstance请求参数结构体
 * @class
 */
class TerminateTaskInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务实例索引
         * @type {number || null}
         */
        this.TaskInstanceIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskInstanceIndex = 'TaskInstanceIndex' in params ? params.TaskInstanceIndex : null;

    }
}

/**
 * TerminateTaskInstance返回参数结构体
 * @class
 */
class TerminateTaskInstanceResponse extends  AbstractModel {
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
 * RetryJobs请求参数结构体
 * @class
 */
class RetryJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID列表。
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobIds = 'JobIds' in params ? params.JobIds : null;

    }
}

/**
 * 任务实例视图信息
 * @class
 */
class TaskInstanceView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务实例索引
         * @type {number || null}
         */
        this.TaskInstanceIndex = null;

        /**
         * 任务实例状态
         * @type {string || null}
         */
        this.TaskInstanceState = null;

        /**
         * 应用程序执行结束的exit code
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExitCode = null;

        /**
         * 任务实例状态原因，任务实例失败时，会记录失败原因
         * @type {string || null}
         */
        this.StateReason = null;

        /**
         * 任务实例运行时所在计算节点（例如CVM）的InstanceId。任务实例未运行或者完结时，本字段为空。任务实例重试时，本字段会随之变化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComputeNodeInstanceId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LaunchTime = null;

        /**
         * 开始运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RunningTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 重定向信息
         * @type {RedirectInfo || null}
         */
        this.RedirectInfo = null;

        /**
         * 任务实例状态原因详情，任务实例失败时，会记录失败原因
         * @type {string || null}
         */
        this.StateDetailedReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskInstanceIndex = 'TaskInstanceIndex' in params ? params.TaskInstanceIndex : null;
        this.TaskInstanceState = 'TaskInstanceState' in params ? params.TaskInstanceState : null;
        this.ExitCode = 'ExitCode' in params ? params.ExitCode : null;
        this.StateReason = 'StateReason' in params ? params.StateReason : null;
        this.ComputeNodeInstanceId = 'ComputeNodeInstanceId' in params ? params.ComputeNodeInstanceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LaunchTime = 'LaunchTime' in params ? params.LaunchTime : null;
        this.RunningTime = 'RunningTime' in params ? params.RunningTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.RedirectInfo) {
            let obj = new RedirectInfo();
            obj.deserialize(params.RedirectInfo)
            this.RedirectInfo = obj;
        }
        this.StateDetailedReason = 'StateDetailedReason' in params ? params.StateDetailedReason : null;

    }
}

/**
 * DescribeAvailableCvmInstanceTypes返回参数结构体
 * @class
 */
class DescribeAvailableCvmInstanceTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型配置数组
         * @type {Array.<InstanceTypeConfig> || null}
         */
        this.InstanceTypeConfigSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceTypeConfigSet) {
            this.InstanceTypeConfigSet = new Array();
            for (let z in params.InstanceTypeConfigSet) {
                let obj = new InstanceTypeConfig();
                obj.deserialize(params.InstanceTypeConfigSet[z]);
                this.InstanceTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTask返回参数结构体
 * @class
 */
class DescribeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务状态
         * @type {string || null}
         */
        this.TaskState = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务实例总数
         * @type {number || null}
         */
        this.TaskInstanceTotalCount = null;

        /**
         * 任务实例信息
         * @type {Array.<TaskInstanceView> || null}
         */
        this.TaskInstanceSet = null;

        /**
         * 任务实例统计指标
         * @type {TaskInstanceMetrics || null}
         */
        this.TaskInstanceMetrics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskState = 'TaskState' in params ? params.TaskState : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskInstanceTotalCount = 'TaskInstanceTotalCount' in params ? params.TaskInstanceTotalCount : null;

        if (params.TaskInstanceSet) {
            this.TaskInstanceSet = new Array();
            for (let z in params.TaskInstanceSet) {
                let obj = new TaskInstanceView();
                obj.deserialize(params.TaskInstanceSet[z]);
                this.TaskInstanceSet.push(obj);
            }
        }

        if (params.TaskInstanceMetrics) {
            let obj = new TaskInstanceMetrics();
            obj.deserialize(params.TaskInstanceMetrics)
            this.TaskInstanceMetrics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例分类列表
 * @class
 */
class InstanceCategoryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例类型名
         * @type {string || null}
         */
        this.InstanceCategory = null;

        /**
         * 实例族列表
         * @type {Array.<string> || null}
         */
        this.InstanceFamilySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceCategory = 'InstanceCategory' in params ? params.InstanceCategory : null;
        this.InstanceFamilySet = 'InstanceFamilySet' in params ? params.InstanceFamilySet : null;

    }
}

/**
 * 计算环境信息
 * @class
 */
class ComputeEnvView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 计算环境名称
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * 位置信息
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 计算节点统计指标
         * @type {ComputeNodeMetrics || null}
         */
        this.ComputeNodeMetrics = null;

        /**
         * 计算环境类型
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * 计算节点期望个数
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * 计算环境资源类型，当前为CVM和CPM（黑石）
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.ComputeNodeMetrics) {
            let obj = new ComputeNodeMetrics();
            obj.deserialize(params.ComputeNodeMetrics)
            this.ComputeNodeMetrics = obj;
        }
        this.EnvType = 'EnvType' in params ? params.EnvType : null;
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * DescribeComputeEnvs返回参数结构体
 * @class
 */
class DescribeComputeEnvsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境列表
         * @type {Array.<ComputeEnvView> || null}
         */
        this.ComputeEnvSet = null;

        /**
         * 计算环境数量
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

        if (params.ComputeEnvSet) {
            this.ComputeEnvSet = new Array();
            for (let z in params.ComputeEnvSet) {
                let obj = new ComputeEnvView();
                obj.deserialize(params.ComputeEnvSet[z]);
                this.ComputeEnvSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTask请求参数结构体
 * @class
 */
class DescribeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量。默认取值100，最大取值1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，详情如下：
<li> task-instance-type - String - 是否必填： 否 - 按照任务实例状态进行过滤（SUBMITTED：已提交；PENDING：等待中；RUNNABLE：可运行；STARTING：启动中；RUNNING：运行中；SUCCEED：成功；FAILED：失败；FAILED_INTERRUPTED：失败后保留实例）。</li>
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * DescribeComputeEnvs请求参数结构体
 * @class
 */
class DescribeComputeEnvsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID列表，与Filters参数不能同时指定。
         * @type {Array.<string> || null}
         */
        this.EnvIds = null;

        /**
         * 过滤条件
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> env-id - String - 是否必填：否 -（过滤条件）按照计算环境ID过滤。</li>
<li> env-name - String - 是否必填：否 -（过滤条件）按照计算环境名称过滤。</li>
<li> resource-type - String - 是否必填：否 -（过滤条件）按照计算资源类型过滤，取值CVM或者CPM(黑石)。</li>
与EnvIds参数不能同时指定。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
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
        this.EnvIds = 'EnvIds' in params ? params.EnvIds : null;

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
 * DescribeCvmZoneInstanceConfigInfos返回参数结构体
 * @class
 */
class DescribeCvmZoneInstanceConfigInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区机型配置列表。
         * @type {Array.<InstanceTypeQuotaItem> || null}
         */
        this.InstanceTypeQuotaSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceTypeQuotaSet) {
            this.InstanceTypeQuotaSet = new Array();
            for (let z in params.InstanceTypeQuotaSet) {
                let obj = new InstanceTypeQuotaItem();
                obj.deserialize(params.InstanceTypeQuotaSet[z]);
                this.InstanceTypeQuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 作业列表
         * @type {Array.<JobView> || null}
         */
        this.JobSet = null;

        /**
         * 符合条件的作业数量
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

        if (params.JobSet) {
            this.JobSet = new Array();
            for (let z in params.JobSet) {
                let obj = new JobView();
                obj.deserialize(params.JobSet[z]);
                this.JobSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 计算环境的创建或销毁活动
 * @class
 */
class Activity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * 计算节点ID
         * @type {string || null}
         */
        this.ComputeNodeId = null;

        /**
         * 计算节点活动类型，创建或者销毁
         * @type {string || null}
         */
        this.ComputeNodeActivityType = null;

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 起因
         * @type {string || null}
         */
        this.Cause = null;

        /**
         * 活动状态
         * @type {string || null}
         */
        this.ActivityState = null;

        /**
         * 状态原因
         * @type {string || null}
         */
        this.StateReason = null;

        /**
         * 活动开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 活动结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 云服务器实例ID
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ComputeNodeId = 'ComputeNodeId' in params ? params.ComputeNodeId : null;
        this.ComputeNodeActivityType = 'ComputeNodeActivityType' in params ? params.ComputeNodeActivityType : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Cause = 'Cause' in params ? params.Cause : null;
        this.ActivityState = 'ActivityState' in params ? params.ActivityState : null;
        this.StateReason = 'StateReason' in params ? params.StateReason : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 描述了 “云监控” 服务相关的信息
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启[云监控](/document/product/248)服务。取值范围：<br><li>TRUE：表示开启云监控服务<br><li>FALSE：表示不开启云监控服务<br><br>默认取值：TRUE。
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * TerminateComputeNode返回参数结构体
 * @class
 */
class TerminateComputeNodeResponse extends  AbstractModel {
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
 * 描述了VPC相关信息，包括子网，IP信息等
 * @class
 */
class VirtualPrivateCloud extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口  [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：<br><li>TRUE：表示用作公网网关<br><li>FALSE：表示不用作公网网关<br><br>默认取值：FALSE。
         * @type {boolean || null}
         */
        this.AsVpcGateway = null;

        /**
         * 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 为弹性网卡指定随机生成的 IPv6 地址数量。
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AsVpcGateway = 'AsVpcGateway' in params ? params.AsVpcGateway : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * DescribeAvailableCvmInstanceTypes请求参数结构体
 * @class
 */
class DescribeAvailableCvmInstanceTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> instance-family String - 是否必填：否 -（过滤条件）按照机型系列过滤。实例机型系列形如：S1、I1、M1等。</li>
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
 * DescribeInstanceCategories请求参数结构体
 * @class
 */
class DescribeInstanceCategoriesRequest extends  AbstractModel {
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
 * ModifyComputeEnv请求参数结构体
 * @class
 */
class ModifyComputeEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 计算节点期望个数
         * @type {number || null}
         */
        this.DesiredComputeNodeCount = null;

        /**
         * 计算环境名称
         * @type {string || null}
         */
        this.EnvName = null;

        /**
         * 计算环境描述
         * @type {string || null}
         */
        this.EnvDescription = null;

        /**
         * 计算环境属性数据
         * @type {ComputeEnvData || null}
         */
        this.EnvData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.DesiredComputeNodeCount = 'DesiredComputeNodeCount' in params ? params.DesiredComputeNodeCount : null;
        this.EnvName = 'EnvName' in params ? params.EnvName : null;
        this.EnvDescription = 'EnvDescription' in params ? params.EnvDescription : null;

        if (params.EnvData) {
            let obj = new ComputeEnvData();
            obj.deserialize(params.EnvData)
            this.EnvData = obj;
        }

    }
}

/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络计费类型。取值范围：<br><li>BANDWIDTH_PREPAID：预付费按带宽结算<br><li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费<br><li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费<br><li>BANDWIDTH_PACKAGE：带宽包用户<br>默认取值：非带宽包用户默认与子机付费类型保持一致。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/12523)。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 是否分配公网IP。取值范围：<br><li>TRUE：表示分配公网IP<br><li>FALSE：表示不分配公网IP<br><br>当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。该参数仅在RunInstances接口中作为入参使用。
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

        /**
         * 带宽包ID。可通过[`DescribeBandwidthPackages`](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。该参数仅在RunInstances接口中作为入参使用。
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

    }
}

/**
 * 作业信息
 * @class
 */
class JobView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 作业名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 作业状态
         * @type {string || null}
         */
        this.JobState = null;

        /**
         * 作业优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 位置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务统计指标
         * @type {TaskMetrics || null}
         */
        this.TaskMetrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.JobState = 'JobState' in params ? params.JobState : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.TaskMetrics) {
            let obj = new TaskMetrics();
            obj.deserialize(params.TaskMetrics)
            this.TaskMetrics = obj;
        }

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
         * 环境变量名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 环境变量取值
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

module.exports = {
    EventVar: EventVar,
    AnonymousComputeEnv: AnonymousComputeEnv,
    DeleteComputeEnvResponse: DeleteComputeEnvResponse,
    SubmitJobRequest: SubmitJobRequest,
    ComputeEnvData: ComputeEnvData,
    Authentication: Authentication,
    RetryJobsResponse: RetryJobsResponse,
    TerminateComputeNodeRequest: TerminateComputeNodeRequest,
    DescribeTaskLogsRequest: DescribeTaskLogsRequest,
    AgentRunningMode: AgentRunningMode,
    EnvData: EnvData,
    DescribeTaskTemplatesRequest: DescribeTaskTemplatesRequest,
    EventConfig: EventConfig,
    SystemDisk: SystemDisk,
    Task: Task,
    InstanceTypeConfig: InstanceTypeConfig,
    LoginSettings: LoginSettings,
    TerminateComputeNodesResponse: TerminateComputeNodesResponse,
    DescribeComputeEnvActivitiesResponse: DescribeComputeEnvActivitiesResponse,
    TaskInstanceMetrics: TaskInstanceMetrics,
    TaskInstanceLog: TaskInstanceLog,
    MountDataDisk: MountDataDisk,
    TaskView: TaskView,
    Externals: Externals,
    OsInfo: OsInfo,
    DescribeComputeEnvResponse: DescribeComputeEnvResponse,
    DescribeCpmOsInfoResponse: DescribeCpmOsInfoResponse,
    TerminateJobRequest: TerminateJobRequest,
    Application: Application,
    EnvDataCpm: EnvDataCpm,
    OutputMappingConfig: OutputMappingConfig,
    ComputeNodeMetrics: ComputeNodeMetrics,
    TaskMetrics: TaskMetrics,
    TerminateComputeNodesRequest: TerminateComputeNodesRequest,
    LocalDiskType: LocalDiskType,
    DescribeComputeEnvActivitiesRequest: DescribeComputeEnvActivitiesRequest,
    CreateTaskTemplateRequest: CreateTaskTemplateRequest,
    Job: Job,
    DeleteComputeEnvRequest: DeleteComputeEnvRequest,
    CreateComputeEnvRequest: CreateComputeEnvRequest,
    DescribeComputeEnvCreateInfoResponse: DescribeComputeEnvCreateInfoResponse,
    TerminateJobResponse: TerminateJobResponse,
    ComputeEnvCreateInfo: ComputeEnvCreateInfo,
    DescribeComputeEnvCreateInfosRequest: DescribeComputeEnvCreateInfosRequest,
    DescribeComputeEnvRequest: DescribeComputeEnvRequest,
    InstanceMarketOptionsRequest: InstanceMarketOptionsRequest,
    DescribeTaskTemplatesResponse: DescribeTaskTemplatesResponse,
    CreateCpmComputeEnvResponse: CreateCpmComputeEnvResponse,
    DeleteJobRequest: DeleteJobRequest,
    CreateCpmComputeEnvRequest: CreateCpmComputeEnvRequest,
    DescribeTaskLogsResponse: DescribeTaskLogsResponse,
    NamedCpmComputeEnv: NamedCpmComputeEnv,
    DeleteTaskTemplatesRequest: DeleteTaskTemplatesRequest,
    DescribeJobResponse: DescribeJobResponse,
    DescribeComputeEnvCreateInfoRequest: DescribeComputeEnvCreateInfoRequest,
    ModifyTaskTemplateRequest: ModifyTaskTemplateRequest,
    DescribeCpmOsInfoRequest: DescribeCpmOsInfoRequest,
    DataDisk: DataDisk,
    NamedComputeEnv: NamedComputeEnv,
    DeleteJobResponse: DeleteJobResponse,
    Notification: Notification,
    SpotMarketOptions: SpotMarketOptions,
    CpmVirtualPrivateCloud: CpmVirtualPrivateCloud,
    OutputMapping: OutputMapping,
    EnhancedService: EnhancedService,
    DescribeJobSubmitInfoResponse: DescribeJobSubmitInfoResponse,
    DescribeComputeEnvCreateInfosResponse: DescribeComputeEnvCreateInfosResponse,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DescribeJobRequest: DescribeJobRequest,
    RedirectInfo: RedirectInfo,
    DescribeInstanceCategoriesResponse: DescribeInstanceCategoriesResponse,
    ModifyTaskTemplateResponse: ModifyTaskTemplateResponse,
    SubmitJobResponse: SubmitJobResponse,
    InputMapping: InputMapping,
    RedirectLocalInfo: RedirectLocalInfo,
    DescribeJobSubmitInfoRequest: DescribeJobSubmitInfoRequest,
    Dependence: Dependence,
    Filter: Filter,
    CreateComputeEnvResponse: CreateComputeEnvResponse,
    Docker: Docker,
    ModifyComputeEnvResponse: ModifyComputeEnvResponse,
    Placement: Placement,
    ComputeNode: ComputeNode,
    ItemPrice: ItemPrice,
    InstanceTypeQuotaItem: InstanceTypeQuotaItem,
    CreateTaskTemplateResponse: CreateTaskTemplateResponse,
    StorageBlock: StorageBlock,
    DescribeJobsRequest: DescribeJobsRequest,
    TaskTemplateView: TaskTemplateView,
    InstanceTypeOptions: InstanceTypeOptions,
    DeleteTaskTemplatesResponse: DeleteTaskTemplatesResponse,
    DescribeCvmZoneInstanceConfigInfosRequest: DescribeCvmZoneInstanceConfigInfosRequest,
    TerminateTaskInstanceRequest: TerminateTaskInstanceRequest,
    TerminateTaskInstanceResponse: TerminateTaskInstanceResponse,
    RetryJobsRequest: RetryJobsRequest,
    TaskInstanceView: TaskInstanceView,
    DescribeAvailableCvmInstanceTypesResponse: DescribeAvailableCvmInstanceTypesResponse,
    DescribeTaskResponse: DescribeTaskResponse,
    InstanceCategoryItem: InstanceCategoryItem,
    ComputeEnvView: ComputeEnvView,
    DescribeComputeEnvsResponse: DescribeComputeEnvsResponse,
    DescribeTaskRequest: DescribeTaskRequest,
    DescribeComputeEnvsRequest: DescribeComputeEnvsRequest,
    DescribeCvmZoneInstanceConfigInfosResponse: DescribeCvmZoneInstanceConfigInfosResponse,
    DescribeJobsResponse: DescribeJobsResponse,
    Activity: Activity,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    TerminateComputeNodeResponse: TerminateComputeNodeResponse,
    VirtualPrivateCloud: VirtualPrivateCloud,
    DescribeAvailableCvmInstanceTypesRequest: DescribeAvailableCvmInstanceTypesRequest,
    DescribeInstanceCategoriesRequest: DescribeInstanceCategoriesRequest,
    ModifyComputeEnvRequest: ModifyComputeEnvRequest,
    InternetAccessible: InternetAccessible,
    JobView: JobView,
    EnvVar: EnvVar,

}
