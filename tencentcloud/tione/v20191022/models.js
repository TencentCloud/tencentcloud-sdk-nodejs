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
 * 输出数据配置
 * @class
 */
class OutputDataConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos桶
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosOutputBucket = null;

        /**
         * cos文件key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosOutputKeyPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosOutputBucket = 'CosOutputBucket' in params ? params.CosOutputBucket : null;
        this.CosOutputKeyPrefix = 'CosOutputKeyPrefix' in params ? params.CosOutputKeyPrefix : null;

    }
}

/**
 * StopTrainingJob返回参数结构体
 * @class
 */
class StopTrainingJobResponse extends  AbstractModel {
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
 * 环境变量
 * @class
 */
class EnvConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CreateNotebookInstance请求参数结构体
 * @class
 */
class CreateNotebookInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名称
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

        /**
         * Notebook算力类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 角色的资源描述
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * 外网访问权限，可取值Enabled/Disabled
         * @type {string || null}
         */
        this.DirectInternetAccess = null;

        /**
         * Root用户权限，可取值Enabled/Disabled
         * @type {string || null}
         */
        this.RootAccess = null;

        /**
         * 安全组ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 数据卷大小(GB)
         * @type {number || null}
         */
        this.VolumeSizeInGB = null;

        /**
         * Notebook标签
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
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.DirectInternetAccess = 'DirectInternetAccess' in params ? params.DirectInternetAccess : null;
        this.RootAccess = 'RootAccess' in params ? params.RootAccess : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VolumeSizeInGB = 'VolumeSizeInGB' in params ? params.VolumeSizeInGB : null;

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
 * notebook实例概览
 * @class
 */
class NotebookInstanceSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 最近修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModifiedTime = null;

        /**
         * notebook实例名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

        /**
         * notebook实例状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotebookInstanceStatus = null;

        /**
         * 算力类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 算力Id
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
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;
        this.NotebookInstanceStatus = 'NotebookInstanceStatus' in params ? params.NotebookInstanceStatus : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeNotebookInstance请求参数结构体
 * @class
 */
class DescribeNotebookInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名称
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;

    }
}

/**
 * DeleteNotebookInstance返回参数结构体
 * @class
 */
class DeleteNotebookInstanceResponse extends  AbstractModel {
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
 * 终止条件
 * @class
 */
class StoppingCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最长运行运行时间（秒）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRuntimeInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxRuntimeInSeconds = 'MaxRuntimeInSeconds' in params ? params.MaxRuntimeInSeconds : null;

    }
}

/**
 * 计算资源配置
 * @class
 */
class ResourceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 计算实例类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 挂载CBS大小（GB）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VolumeSizeInGB = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.VolumeSizeInGB = 'VolumeSizeInGB' in params ? params.VolumeSizeInGB : null;

    }
}

/**
 * DescribeTrainingJob返回参数结构体
 * @class
 */
class DescribeTrainingJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 算法镜像配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlgorithmSpecification || null}
         */
        this.AlgorithmSpecification = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingJobName = null;

        /**
         * 算法超级参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HyperParameters = null;

        /**
         * 输入数据配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InputDataConfig> || null}
         */
        this.InputDataConfig = null;

        /**
         * 输出数据配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputDataConfig || null}
         */
        this.OutputDataConfig = null;

        /**
         * 中止条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StoppingCondition || null}
         */
        this.StoppingCondition = null;

        /**
         * 计算实例配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceConfig || null}
         */
        this.ResourceConfig = null;

        /**
         * 私有网络配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * 最近修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModifiedTime = null;

        /**
         * 任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingStartTime = null;

        /**
         * 任务完成时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingEndTime = null;

        /**
         * 模型输出配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ModelArtifacts || null}
         */
        this.ModelArtifacts = null;

        /**
         * 详细状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecondaryStatus = null;

        /**
         * 详细状态事件记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecondaryStatusTransition> || null}
         */
        this.SecondaryStatusTransitions = null;

        /**
         * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingJobStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AlgorithmSpecification) {
            let obj = new AlgorithmSpecification();
            obj.deserialize(params.AlgorithmSpecification)
            this.AlgorithmSpecification = obj;
        }
        this.TrainingJobName = 'TrainingJobName' in params ? params.TrainingJobName : null;
        this.HyperParameters = 'HyperParameters' in params ? params.HyperParameters : null;

        if (params.InputDataConfig) {
            this.InputDataConfig = new Array();
            for (let z in params.InputDataConfig) {
                let obj = new InputDataConfig();
                obj.deserialize(params.InputDataConfig[z]);
                this.InputDataConfig.push(obj);
            }
        }

        if (params.OutputDataConfig) {
            let obj = new OutputDataConfig();
            obj.deserialize(params.OutputDataConfig)
            this.OutputDataConfig = obj;
        }

        if (params.StoppingCondition) {
            let obj = new StoppingCondition();
            obj.deserialize(params.StoppingCondition)
            this.StoppingCondition = obj;
        }

        if (params.ResourceConfig) {
            let obj = new ResourceConfig();
            obj.deserialize(params.ResourceConfig)
            this.ResourceConfig = obj;
        }

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;
        this.TrainingStartTime = 'TrainingStartTime' in params ? params.TrainingStartTime : null;
        this.TrainingEndTime = 'TrainingEndTime' in params ? params.TrainingEndTime : null;

        if (params.ModelArtifacts) {
            let obj = new ModelArtifacts();
            obj.deserialize(params.ModelArtifacts)
            this.ModelArtifacts = obj;
        }
        this.SecondaryStatus = 'SecondaryStatus' in params ? params.SecondaryStatus : null;

        if (params.SecondaryStatusTransitions) {
            this.SecondaryStatusTransitions = new Array();
            for (let z in params.SecondaryStatusTransitions) {
                let obj = new SecondaryStatusTransition();
                obj.deserialize(params.SecondaryStatusTransitions[z]);
                this.SecondaryStatusTransitions.push(obj);
            }
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.TrainingJobStatus = 'TrainingJobStatus' in params ? params.TrainingJobStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNotebookInstances请求参数结构体
 * @class
 */
class DescribeNotebookInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.SortOrder = null;

        /**
         * 创建时间晚于
         * @type {string || null}
         */
        this.CreationTimeAfter = null;

        /**
         * 创建时间早于
         * @type {string || null}
         */
        this.CreationTimeBefore = null;

        /**
         * 最近修改时间晚于
         * @type {string || null}
         */
        this.LastModifiedTimeAfter = null;

        /**
         * 最近修改时间早于
         * @type {string || null}
         */
        this.LastModifiedTimeBefore = null;

        /**
         * 根据名称过滤
         * @type {string || null}
         */
        this.NameContains = null;

        /**
         * 根据状态过滤
         * @type {string || null}
         */
        this.StatusEquals = null;

        /**
         * 最大返回个数
         * @type {number || null}
         */
        this.MaxResults = null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;
        this.CreationTimeAfter = 'CreationTimeAfter' in params ? params.CreationTimeAfter : null;
        this.CreationTimeBefore = 'CreationTimeBefore' in params ? params.CreationTimeBefore : null;
        this.LastModifiedTimeAfter = 'LastModifiedTimeAfter' in params ? params.LastModifiedTimeAfter : null;
        this.LastModifiedTimeBefore = 'LastModifiedTimeBefore' in params ? params.LastModifiedTimeBefore : null;
        this.NameContains = 'NameContains' in params ? params.NameContains : null;
        this.StatusEquals = 'StatusEquals' in params ? params.StatusEquals : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

    }
}

/**
 * 输入数据配置
 * @class
 */
class InputDataConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 数据源配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DataSource || null}
         */
        this.DataSource = null;

        /**
         * 输入类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputMode = null;

        /**
         * 文件类型
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
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;

        if (params.DataSource) {
            let obj = new DataSource();
            obj.deserialize(params.DataSource)
            this.DataSource = obj;
        }
        this.InputMode = 'InputMode' in params ? params.InputMode : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;

    }
}

/**
 * StartNotebookInstance返回参数结构体
 * @class
 */
class StartNotebookInstanceResponse extends  AbstractModel {
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
 * CreateNotebookInstance返回参数结构体
 * @class
 */
class CreateNotebookInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文件系统输入数据源
 * @class
 */
class FileSystemDataSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DirectoryPath = null;

        /**
         * 文件系统类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileSystemType = null;

        /**
         * 文件系统访问模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileSystemAccessMode = null;

        /**
         * 文件系统ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectoryPath = 'DirectoryPath' in params ? params.DirectoryPath : null;
        this.FileSystemType = 'FileSystemType' in params ? params.FileSystemType : null;
        this.FileSystemAccessMode = 'FileSystemAccessMode' in params ? params.FileSystemAccessMode : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * StopTrainingJob请求参数结构体
 * @class
 */
class StopTrainingJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务名称
         * @type {string || null}
         */
        this.TrainingJobName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrainingJobName = 'TrainingJobName' in params ? params.TrainingJobName : null;

    }
}

/**
 * UpdateNotebookInstance请求参数结构体
 * @class
 */
class UpdateNotebookInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名称
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

        /**
         * 角色的资源描述
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * Root访问权限
         * @type {string || null}
         */
        this.RootAccess = null;

        /**
         * 数据卷大小(GB)
         * @type {number || null}
         */
        this.VolumeSizeInGB = null;

        /**
         * 算力资源类型
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RootAccess = 'RootAccess' in params ? params.RootAccess : null;
        this.VolumeSizeInGB = 'VolumeSizeInGB' in params ? params.VolumeSizeInGB : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * CreatePresignedNotebookInstanceUrl请求参数结构体
 * @class
 */
class CreatePresignedNotebookInstanceUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名称
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

        /**
         * session有效时间，秒
         * @type {number || null}
         */
        this.SessionExpirationDurationInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;
        this.SessionExpirationDurationInSeconds = 'SessionExpirationDurationInSeconds' in params ? params.SessionExpirationDurationInSeconds : null;

    }
}

/**
 * cos路径
 * @class
 */
class CosDataSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos桶
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * cos文件key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyPrefix = null;

        /**
         * 分布式数据下载方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataDistributionType = null;

        /**
         * 数据类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.KeyPrefix = 'KeyPrefix' in params ? params.KeyPrefix : null;
        this.DataDistributionType = 'DataDistributionType' in params ? params.DataDistributionType : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * DescribeTrainingJob请求参数结构体
 * @class
 */
class DescribeTrainingJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务名称
         * @type {string || null}
         */
        this.TrainingJobName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrainingJobName = 'TrainingJobName' in params ? params.TrainingJobName : null;

    }
}

/**
 * DescribeNotebookInstances返回参数结构体
 * @class
 */
class DescribeNotebookInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例列表
         * @type {Array.<NotebookInstanceSummary> || null}
         */
        this.NotebookInstanceSet = null;

        /**
         * Notebook实例总数目
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

        if (params.NotebookInstanceSet) {
            this.NotebookInstanceSet = new Array();
            for (let z in params.NotebookInstanceSet) {
                let obj = new NotebookInstanceSummary();
                obj.deserialize(params.NotebookInstanceSet[z]);
                this.NotebookInstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTrainingJob返回参数结构体
 * @class
 */
class CreateTrainingJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingJobName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrainingJobName = 'TrainingJobName' in params ? params.TrainingJobName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNotebookInstance返回参数结构体
 * @class
 */
class DescribeNotebookInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名称
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

        /**
         * Notebook算力资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 角色的资源描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * 外网访问权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DirectInternetAccess = null;

        /**
         * Root用户权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RootAccess = null;

        /**
         * 安全组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 数据卷大小(GB)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VolumeSizeInGB = null;

        /**
         * Notebook实例链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 创建失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * Notebook实例创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Notebook实例最近修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModifiedTime = null;

        /**
         * Notebook实例网卡ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * Notebook实例日志链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogUrl = null;

        /**
         * Notebook实例状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotebookInstanceStatus = null;

        /**
         * Notebook实例ID
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
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.DirectInternetAccess = 'DirectInternetAccess' in params ? params.DirectInternetAccess : null;
        this.RootAccess = 'RootAccess' in params ? params.RootAccess : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VolumeSizeInGB = 'VolumeSizeInGB' in params ? params.VolumeSizeInGB : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.LogUrl = 'LogUrl' in params ? params.LogUrl : null;
        this.NotebookInstanceStatus = 'NotebookInstanceStatus' in params ? params.NotebookInstanceStatus : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 算法配置
 * @class
 */
class AlgorithmSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingImageName = null;

        /**
         * 输入模式File|Pipe
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingInputMode = null;

        /**
         * 算法名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlgorithmName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrainingImageName = 'TrainingImageName' in params ? params.TrainingImageName : null;
        this.TrainingInputMode = 'TrainingInputMode' in params ? params.TrainingInputMode : null;
        this.AlgorithmName = 'AlgorithmName' in params ? params.AlgorithmName : null;

    }
}

/**
 * StopNotebookInstance请求参数结构体
 * @class
 */
class StopNotebookInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名称
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;

    }
}

/**
 * StopNotebookInstance返回参数结构体
 * @class
 */
class StopNotebookInstanceResponse extends  AbstractModel {
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
 * CreateTrainingJob请求参数结构体
 * @class
 */
class CreateTrainingJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务名称
         * @type {string || null}
         */
        this.TrainingJobName = null;

        /**
         * 算法镜像配置
         * @type {AlgorithmSpecification || null}
         */
        this.AlgorithmSpecification = null;

        /**
         * 输入数据配置
         * @type {Array.<InputDataConfig> || null}
         */
        this.InputDataConfig = null;

        /**
         * 输出数据配置
         * @type {OutputDataConfig || null}
         */
        this.OutputDataConfig = null;

        /**
         * 资源实例配置
         * @type {ResourceConfig || null}
         */
        this.ResourceConfig = null;

        /**
         * 中止条件
         * @type {StoppingCondition || null}
         */
        this.StoppingCondition = null;

        /**
         * 私有网络配置
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * 算法超级参数
         * @type {string || null}
         */
        this.HyperParameters = null;

        /**
         * 角色名称
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 环境变量配置
         * @type {Array.<EnvConfig> || null}
         */
        this.EnvConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrainingJobName = 'TrainingJobName' in params ? params.TrainingJobName : null;

        if (params.AlgorithmSpecification) {
            let obj = new AlgorithmSpecification();
            obj.deserialize(params.AlgorithmSpecification)
            this.AlgorithmSpecification = obj;
        }

        if (params.InputDataConfig) {
            this.InputDataConfig = new Array();
            for (let z in params.InputDataConfig) {
                let obj = new InputDataConfig();
                obj.deserialize(params.InputDataConfig[z]);
                this.InputDataConfig.push(obj);
            }
        }

        if (params.OutputDataConfig) {
            let obj = new OutputDataConfig();
            obj.deserialize(params.OutputDataConfig)
            this.OutputDataConfig = obj;
        }

        if (params.ResourceConfig) {
            let obj = new ResourceConfig();
            obj.deserialize(params.ResourceConfig)
            this.ResourceConfig = obj;
        }

        if (params.StoppingCondition) {
            let obj = new StoppingCondition();
            obj.deserialize(params.StoppingCondition)
            this.StoppingCondition = obj;
        }

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.HyperParameters = 'HyperParameters' in params ? params.HyperParameters : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

        if (params.EnvConfig) {
            this.EnvConfig = new Array();
            for (let z in params.EnvConfig) {
                let obj = new EnvConfig();
                obj.deserialize(params.EnvConfig[z]);
                this.EnvConfig.push(obj);
            }
        }

    }
}

/**
 * DeleteNotebookInstance请求参数结构体
 * @class
 */
class DeleteNotebookInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名称
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;

    }
}

/**
 * VPC配置
 * @class
 */
class VpcConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 子网id
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * CreatePresignedNotebookInstanceUrl返回参数结构体
 * @class
 */
class CreatePresignedNotebookInstanceUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权url
         * @type {string || null}
         */
        this.AuthorizedUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuthorizedUrl = 'AuthorizedUrl' in params ? params.AuthorizedUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartNotebookInstance请求参数结构体
 * @class
 */
class StartNotebookInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名称
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;

    }
}

/**
 * UpdateNotebookInstance返回参数结构体
 * @class
 */
class UpdateNotebookInstanceResponse extends  AbstractModel {
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
 * notebook标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * value
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
 *  二级状态流水
 * @class
 */
class SecondaryStatusTransition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 状态结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 状态名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 状态详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusMessage = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusMessage = 'StatusMessage' in params ? params.StatusMessage : null;

    }
}

/**
 * 数据源
 * @class
 */
class DataSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos数据源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosDataSource || null}
         */
        this.CosDataSource = null;

        /**
         * 文件系统输入源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FileSystemDataSource || null}
         */
        this.FileSystemDataSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CosDataSource) {
            let obj = new CosDataSource();
            obj.deserialize(params.CosDataSource)
            this.CosDataSource = obj;
        }

        if (params.FileSystemDataSource) {
            let obj = new FileSystemDataSource();
            obj.deserialize(params.FileSystemDataSource)
            this.FileSystemDataSource = obj;
        }

    }
}

/**
 * 模型输出
 * @class
 */
class ModelArtifacts extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos输出路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosModelArtifacts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosModelArtifacts = 'CosModelArtifacts' in params ? params.CosModelArtifacts : null;

    }
}

module.exports = {
    OutputDataConfig: OutputDataConfig,
    StopTrainingJobResponse: StopTrainingJobResponse,
    EnvConfig: EnvConfig,
    CreateNotebookInstanceRequest: CreateNotebookInstanceRequest,
    NotebookInstanceSummary: NotebookInstanceSummary,
    DescribeNotebookInstanceRequest: DescribeNotebookInstanceRequest,
    DeleteNotebookInstanceResponse: DeleteNotebookInstanceResponse,
    StoppingCondition: StoppingCondition,
    ResourceConfig: ResourceConfig,
    DescribeTrainingJobResponse: DescribeTrainingJobResponse,
    DescribeNotebookInstancesRequest: DescribeNotebookInstancesRequest,
    InputDataConfig: InputDataConfig,
    StartNotebookInstanceResponse: StartNotebookInstanceResponse,
    CreateNotebookInstanceResponse: CreateNotebookInstanceResponse,
    FileSystemDataSource: FileSystemDataSource,
    StopTrainingJobRequest: StopTrainingJobRequest,
    UpdateNotebookInstanceRequest: UpdateNotebookInstanceRequest,
    CreatePresignedNotebookInstanceUrlRequest: CreatePresignedNotebookInstanceUrlRequest,
    CosDataSource: CosDataSource,
    DescribeTrainingJobRequest: DescribeTrainingJobRequest,
    DescribeNotebookInstancesResponse: DescribeNotebookInstancesResponse,
    CreateTrainingJobResponse: CreateTrainingJobResponse,
    DescribeNotebookInstanceResponse: DescribeNotebookInstanceResponse,
    AlgorithmSpecification: AlgorithmSpecification,
    StopNotebookInstanceRequest: StopNotebookInstanceRequest,
    StopNotebookInstanceResponse: StopNotebookInstanceResponse,
    CreateTrainingJobRequest: CreateTrainingJobRequest,
    DeleteNotebookInstanceRequest: DeleteNotebookInstanceRequest,
    VpcConfig: VpcConfig,
    CreatePresignedNotebookInstanceUrlResponse: CreatePresignedNotebookInstanceUrlResponse,
    StartNotebookInstanceRequest: StartNotebookInstanceRequest,
    UpdateNotebookInstanceResponse: UpdateNotebookInstanceResponse,
    Tag: Tag,
    SecondaryStatusTransition: SecondaryStatusTransition,
    DataSource: DataSource,
    ModelArtifacts: ModelArtifacts,

}
