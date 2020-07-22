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
         * cos输出桶
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosOutputBucket = null;

        /**
         * cos输出key前缀
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosOutputKeyPrefix = null;

        /**
         * 文件系统输出，如果指定了文件系统，那么Cos输出会被忽略
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
        this.CosOutputBucket = 'CosOutputBucket' in params ? params.CosOutputBucket : null;
        this.CosOutputKeyPrefix = 'CosOutputKeyPrefix' in params ? params.CosOutputKeyPrefix : null;

        if (params.FileSystemDataSource) {
            let obj = new FileSystemDataSource();
            obj.deserialize(params.FileSystemDataSource)
            this.FileSystemDataSource = obj;
        }

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
 * 计费标签
 * @class
 */
class BillingLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费项标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 存储大小
         * @type {number || null}
         */
        this.VolumeSize = null;

        /**
         * 计费状态
None: 不计费
StorageOnly: 仅存储计费
Computing: 计算和存储都计费
         * @type {string || null}
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
        this.Label = 'Label' in params ? params.Label : null;
        this.VolumeSize = 'VolumeSize' in params ? params.VolumeSize : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * Notebook实例名称，不能超过63个字符
规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$”
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

        /**
         * Notebook算力类型
参考https://cloud.tencent.com/document/product/851/41239
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 数据卷大小(GB)
用户持久化Notebook实例的数据
         * @type {number || null}
         */
        this.VolumeSizeInGB = null;

        /**
         * 外网访问权限，可取值Enabled/Disabled
开启后，Notebook实例可以具有访问外网80，443端口的权限
         * @type {string || null}
         */
        this.DirectInternetAccess = null;

        /**
         * Root用户权限，可取值Enabled/Disabled
开启后，Notebook实例可以切换至root用户执行命令
         * @type {string || null}
         */
        this.RootAccess = null;

        /**
         * 子网ID
如果需要Notebook实例访问VPC内的资源，则需要选择对应的子网
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 生命周期脚本名称
必须是已存在的生命周期脚本，具体参考https://cloud.tencent.com/document/product/851/43140
         * @type {string || null}
         */
        this.LifecycleScriptsName = null;

        /**
         * 默认存储库名称
可以是已创建的存储库名称或者已https://开头的公共git库
参考https://cloud.tencent.com/document/product/851/43139
         * @type {string || null}
         */
        this.DefaultCodeRepository = null;

        /**
         * 其他存储库列表
每个元素可以是已创建的存储库名称或者已https://开头的公共git库
参考https://cloud.tencent.com/document/product/851/43139
         * @type {Array.<string> || null}
         */
        this.AdditionalCodeRepositories = null;

        /**
         * 是否开启CLS日志服务，可取值Enabled/Disabled，默认为Disabled
开启后，Notebook运行的日志会收集到CLS中，CLS会产生费用，请根据需要选择
         * @type {string || null}
         */
        this.ClsAccess = null;

        /**
         * 自动停止配置
选择定时停止Notebook实例
         * @type {StoppingCondition || null}
         */
        this.StoppingCondition = null;

        /**
         * 自动停止，可取值Enabled/Disabled
取值为Disabled的时候StoppingCondition将被忽略
取值为Enabled的时候读取StoppingCondition作为自动停止的配置
         * @type {string || null}
         */
        this.AutoStopping = null;

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
        this.VolumeSizeInGB = 'VolumeSizeInGB' in params ? params.VolumeSizeInGB : null;
        this.DirectInternetAccess = 'DirectInternetAccess' in params ? params.DirectInternetAccess : null;
        this.RootAccess = 'RootAccess' in params ? params.RootAccess : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.LifecycleScriptsName = 'LifecycleScriptsName' in params ? params.LifecycleScriptsName : null;
        this.DefaultCodeRepository = 'DefaultCodeRepository' in params ? params.DefaultCodeRepository : null;
        this.AdditionalCodeRepositories = 'AdditionalCodeRepositories' in params ? params.AdditionalCodeRepositories : null;
        this.ClsAccess = 'ClsAccess' in params ? params.ClsAccess : null;

        if (params.StoppingCondition) {
            let obj = new StoppingCondition();
            obj.deserialize(params.StoppingCondition)
            this.StoppingCondition = obj;
        }
        this.AutoStopping = 'AutoStopping' in params ? params.AutoStopping : null;

    }
}

/**
 * DescribeNotebookSummary请求参数结构体
 * @class
 */
class DescribeNotebookSummaryRequest extends  AbstractModel {
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
 * DescribeNotebookInstance请求参数结构体
 * @class
 */
class DescribeNotebookInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook实例名称
规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$”
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
         * notebook实例状态，取值范围：
Pending: 创建中
Inservice: 运行中
Stopping: 停止中
Stopped: 已停止
Failed: 失败
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
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartupTime = null;

        /**
         * 运行截止时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * 自动停止配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StoppingCondition || null}
         */
        this.StoppingCondition = null;

        /**
         * 是否是预付费实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Prepay = null;

        /**
         * 计费标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BillingLabel || null}
         */
        this.BillingLabel = null;

        /**
         * 运行时长，秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuntimeInSeconds = null;

        /**
         * 剩余时长，秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RemainTimeInSeconds = null;

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
        this.StartupTime = 'StartupTime' in params ? params.StartupTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;

        if (params.StoppingCondition) {
            let obj = new StoppingCondition();
            obj.deserialize(params.StoppingCondition)
            this.StoppingCondition = obj;
        }
        this.Prepay = 'Prepay' in params ? params.Prepay : null;

        if (params.BillingLabel) {
            let obj = new BillingLabel();
            obj.deserialize(params.BillingLabel)
            this.BillingLabel = obj;
        }
        this.RuntimeInSeconds = 'RuntimeInSeconds' in params ? params.RuntimeInSeconds : null;
        this.RemainTimeInSeconds = 'RemainTimeInSeconds' in params ? params.RemainTimeInSeconds : null;

    }
}

/**
 * 存储库Git相关配置
 * @class
 */
class GitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * git地址
         * @type {string || null}
         */
        this.RepositoryUrl = null;

        /**
         * 代码分支
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Branch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryUrl = 'RepositoryUrl' in params ? params.RepositoryUrl : null;
        this.Branch = 'Branch' in params ? params.Branch : null;

    }
}

/**
 * 存储库列表
 * @class
 */
class CodeRepoSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.LastModifiedTime = null;

        /**
         * 存储库名称
         * @type {string || null}
         */
        this.CodeRepositoryName = null;

        /**
         * Git配置
         * @type {GitConfig || null}
         */
        this.GitConfig = null;

        /**
         * 是否有Git凭证
         * @type {boolean || null}
         */
        this.NoSecret = null;

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
        this.CodeRepositoryName = 'CodeRepositoryName' in params ? params.CodeRepositoryName : null;

        if (params.GitConfig) {
            let obj = new GitConfig();
            obj.deserialize(params.GitConfig)
            this.GitConfig = obj;
        }
        this.NoSecret = 'NoSecret' in params ? params.NoSecret : null;

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
 * DeleteNotebookLifecycleScript返回参数结构体
 * @class
 */
class DeleteNotebookLifecycleScriptResponse extends  AbstractModel {
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
 * DescribeNotebookLifecycleScripts请求参数结构体
 * @class
 */
class DescribeNotebookLifecycleScriptsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件。
instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。
search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序规则。默认取Descending
Descending 按更新时间降序
Ascending 按更新时间升序
         * @type {string || null}
         */
        this.SortOrder = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;

    }
}

/**
 * Git凭证
 * @class
 */
class GitSecret extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无秘钥，默认选项
         * @type {boolean || null}
         */
        this.NoSecret = null;

        /**
         * Git用户名密码base64编码后的字符串
编码前的内容应为Json字符串，如
{"UserName": "用户名", "Password":"密码"}
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
        this.NoSecret = 'NoSecret' in params ? params.NoSecret : null;
        this.Secret = 'Secret' in params ? params.Secret : null;

    }
}

/**
 * DeleteCodeRepository请求参数结构体
 * @class
 */
class DeleteCodeRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储库名称
         * @type {string || null}
         */
        this.CodeRepositoryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeRepositoryName = 'CodeRepositoryName' in params ? params.CodeRepositoryName : null;

    }
}

/**
 * DescribeCodeRepository返回参数结构体
 * @class
 */
class DescribeCodeRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.LastModifiedTime = null;

        /**
         * 存储库名称
         * @type {string || null}
         */
        this.CodeRepositoryName = null;

        /**
         * Git存储配置
         * @type {GitConfig || null}
         */
        this.GitConfig = null;

        /**
         * 是否有Git凭证
         * @type {boolean || null}
         */
        this.NoSecret = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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
        this.CodeRepositoryName = 'CodeRepositoryName' in params ? params.CodeRepositoryName : null;

        if (params.GitConfig) {
            let obj = new GitConfig();
            obj.deserialize(params.GitConfig)
            this.GitConfig = obj;
        }
        this.NoSecret = 'NoSecret' in params ? params.NoSecret : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UpdateCodeRepository返回参数结构体
 * @class
 */
class UpdateCodeRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储库名称
         * @type {string || null}
         */
        this.CodeRepositoryName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeRepositoryName = 'CodeRepositoryName' in params ? params.CodeRepositoryName : null;
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
 * notebook生命周期脚本实例概览
 * @class
 */
class NotebookLifecycleScriptsSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * notebook生命周期脚本名称
         * @type {string || null}
         */
        this.NotebookLifecycleScriptsName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.LastModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookLifecycleScriptsName = 'NotebookLifecycleScriptsName' in params ? params.NotebookLifecycleScriptsName : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;

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
 * UpdateNotebookLifecycleScript请求参数结构体
 * @class
 */
class UpdateNotebookLifecycleScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * notebook生命周期脚本名称
         * @type {string || null}
         */
        this.NotebookLifecycleScriptsName = null;

        /**
         * 创建脚本，base64编码
base64后的脚本长度不能超过16384个字符
         * @type {string || null}
         */
        this.CreateScript = null;

        /**
         * 启动脚本，base64编码
base64后的脚本长度不能超过16384个字符
         * @type {string || null}
         */
        this.StartScript = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookLifecycleScriptsName = 'NotebookLifecycleScriptsName' in params ? params.NotebookLifecycleScriptsName : null;
        this.CreateScript = 'CreateScript' in params ? params.CreateScript : null;
        this.StartScript = 'StartScript' in params ? params.StartScript : null;

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
规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$”
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

        /**
         * notebook生命周期脚本名称
         * @type {string || null}
         */
        this.LifecycleScriptsName = null;

        /**
         * 是否解绑生命周期脚本，默认 false。
该值为true时，LifecycleScriptsName将被忽略
         * @type {boolean || null}
         */
        this.DisassociateLifecycleScript = null;

        /**
         * 默认存储库名称
可以是已创建的存储库名称或者已https://开头的公共git库
         * @type {string || null}
         */
        this.DefaultCodeRepository = null;

        /**
         * 其他存储库列表
每个元素可以是已创建的存储库名称或者已https://开头的公共git库
         * @type {Array.<string> || null}
         */
        this.AdditionalCodeRepositories = null;

        /**
         * 是否取消关联默认存储库，默认false
该值为true时，DefaultCodeRepository将被忽略
         * @type {boolean || null}
         */
        this.DisassociateDefaultCodeRepository = null;

        /**
         * 是否取消关联其他存储库，默认false
该值为true时，AdditionalCodeRepositories将被忽略
         * @type {boolean || null}
         */
        this.DisassociateAdditionalCodeRepositories = null;

        /**
         * 是否开启CLS日志服务，可取值Enabled/Disabled
         * @type {string || null}
         */
        this.ClsAccess = null;

        /**
         * 自动停止，可取值Enabled/Disabled
取值为Disabled的时候StoppingCondition将被忽略
取值为Enabled的时候读取StoppingCondition作为自动停止的配置
         * @type {string || null}
         */
        this.AutoStopping = null;

        /**
         * 自动停止配置，只在AutoStopping为Enabled的时候生效
         * @type {StoppingCondition || null}
         */
        this.StoppingCondition = null;

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
        this.LifecycleScriptsName = 'LifecycleScriptsName' in params ? params.LifecycleScriptsName : null;
        this.DisassociateLifecycleScript = 'DisassociateLifecycleScript' in params ? params.DisassociateLifecycleScript : null;
        this.DefaultCodeRepository = 'DefaultCodeRepository' in params ? params.DefaultCodeRepository : null;
        this.AdditionalCodeRepositories = 'AdditionalCodeRepositories' in params ? params.AdditionalCodeRepositories : null;
        this.DisassociateDefaultCodeRepository = 'DisassociateDefaultCodeRepository' in params ? params.DisassociateDefaultCodeRepository : null;
        this.DisassociateAdditionalCodeRepositories = 'DisassociateAdditionalCodeRepositories' in params ? params.DisassociateAdditionalCodeRepositories : null;
        this.ClsAccess = 'ClsAccess' in params ? params.ClsAccess : null;
        this.AutoStopping = 'AutoStopping' in params ? params.AutoStopping : null;

        if (params.StoppingCondition) {
            let obj = new StoppingCondition();
            obj.deserialize(params.StoppingCondition)
            this.StoppingCondition = obj;
        }

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
规则：“^\[a-zA-Z0-9\](-\*\[a-zA-Z0-9\])\*$”
         * @type {string || null}
         */
        this.NotebookInstanceName = null;

        /**
         * session有效时间，秒，取值范围[1800, 43200]
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
 * CreateNotebookLifecycleScript请求参数结构体
 * @class
 */
class CreateNotebookLifecycleScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook生命周期脚本名称
         * @type {string || null}
         */
        this.NotebookLifecycleScriptsName = null;

        /**
         * 创建脚本，base64编码
base64后的脚本长度不能超过16384个字符
         * @type {string || null}
         */
        this.CreateScript = null;

        /**
         * 启动脚本，base64编码
base64后的脚本长度不能超过16384个字符
         * @type {string || null}
         */
        this.StartScript = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookLifecycleScriptsName = 'NotebookLifecycleScriptsName' in params ? params.NotebookLifecycleScriptsName : null;
        this.CreateScript = 'CreateScript' in params ? params.CreateScript : null;
        this.StartScript = 'StartScript' in params ? params.StartScript : null;

    }
}

/**
 * CreateCodeRepository请求参数结构体
 * @class
 */
class CreateCodeRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储库名称
         * @type {string || null}
         */
        this.CodeRepositoryName = null;

        /**
         * Git相关配置
         * @type {GitConfig || null}
         */
        this.GitConfig = null;

        /**
         * Git凭证
         * @type {GitSecret || null}
         */
        this.GitSecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeRepositoryName = 'CodeRepositoryName' in params ? params.CodeRepositoryName : null;

        if (params.GitConfig) {
            let obj = new GitConfig();
            obj.deserialize(params.GitConfig)
            this.GitConfig = obj;
        }

        if (params.GitSecret) {
            let obj = new GitSecret();
            obj.deserialize(params.GitSecret)
            this.GitSecret = obj;
        }

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
         * 排序规则。默认取Descending
Descending 按更新时间降序
Ascending 按更新时间升序
         * @type {string || null}
         */
        this.SortOrder = null;

        /**
         * 过滤条件。
instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。
search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。
lifecycle-name - String - 是否必填：否 -（过滤条件）按照生命周期脚本名称过滤。
default-code-repo-name - String - 是否必填：否 -（过滤条件）按照默认存储库名称过滤。
additional-code-repo-name - String - 是否必填：否 -（过滤条件）按照其他存储库名称过滤。
billing-status - String - 是否必填：否 - （过滤条件）按照计费状态过滤，可取以下值
   StorageOnly：仅存储计费的实例
   Computing：计算和存储都计费的实例
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 【废弃字段】排序字段
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.SortBy = 'SortBy' in params ? params.SortBy : null;

    }
}

/**
 * DescribeTrainingJobs返回参数结构体
 * @class
 */
class DescribeTrainingJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 训练任务列表
         * @type {Array.<TrainingJobSummary> || null}
         */
        this.TrainingJobSet = null;

        /**
         * 训练任务总数目
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

        if (params.TrainingJobSet) {
            this.TrainingJobSet = new Array();
            for (let z in params.TrainingJobSet) {
                let obj = new TrainingJobSummary();
                obj.deserialize(params.TrainingJobSet[z]);
                this.TrainingJobSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * DescribeCodeRepositories返回参数结构体
 * @class
 */
class DescribeCodeRepositoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储库总数目
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 存储库列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CodeRepoSummary> || null}
         */
        this.CodeRepoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.CodeRepoSet) {
            this.CodeRepoSet = new Array();
            for (let z in params.CodeRepoSet) {
                let obj = new CodeRepoSummary();
                obj.deserialize(params.CodeRepoSet[z]);
                this.CodeRepoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeCodeRepository请求参数结构体
 * @class
 */
class DescribeCodeRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储库名称
         * @type {string || null}
         */
        this.CodeRepositoryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeRepositoryName = 'CodeRepositoryName' in params ? params.CodeRepositoryName : null;

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
         * Notebook实例日志链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogUrl = null;

        /**
         * Notebook实例状态

Pending: 创建中
Inservice: 运行中
Stopping: 停止中
Stopped: 已停止
Failed: 失败
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
         * notebook生命周期脚本名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LifecycleScriptsName = null;

        /**
         * 默认存储库名称
可以是已创建的存储库名称或者已https://开头的公共git库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultCodeRepository = null;

        /**
         * 其他存储库列表
每个元素可以是已创建的存储库名称或者已https://开头的公共git库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AdditionalCodeRepositories = null;

        /**
         * 是否开启CLS日志服务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClsAccess = null;

        /**
         * 是否预付费实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Prepay = null;

        /**
         * 实例运行截止时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * 自动停止配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StoppingCondition || null}
         */
        this.StoppingCondition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VolumeSizeInGB = 'VolumeSizeInGB' in params ? params.VolumeSizeInGB : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;
        this.LogUrl = 'LogUrl' in params ? params.LogUrl : null;
        this.NotebookInstanceStatus = 'NotebookInstanceStatus' in params ? params.NotebookInstanceStatus : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LifecycleScriptsName = 'LifecycleScriptsName' in params ? params.LifecycleScriptsName : null;
        this.DefaultCodeRepository = 'DefaultCodeRepository' in params ? params.DefaultCodeRepository : null;
        this.AdditionalCodeRepositories = 'AdditionalCodeRepositories' in params ? params.AdditionalCodeRepositories : null;
        this.ClsAccess = 'ClsAccess' in params ? params.ClsAccess : null;
        this.Prepay = 'Prepay' in params ? params.Prepay : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;

        if (params.StoppingCondition) {
            let obj = new StoppingCondition();
            obj.deserialize(params.StoppingCondition)
            this.StoppingCondition = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 训练任务概要
 * @class
 */
class TrainingJobSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务创建时间
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
         * 训练任务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingJobName = null;

        /**
         * 训练任务状态，取值范围
InProgress：运行中
Completed: 已完成
Failed: 失败
Stopping: 停止中
Stopped：已停止
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingJobStatus = null;

        /**
         * 完成时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrainingEndTime = null;

        /**
         * 算了实例Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资源配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceConfig || null}
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
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;
        this.TrainingJobName = 'TrainingJobName' in params ? params.TrainingJobName : null;
        this.TrainingJobStatus = 'TrainingJobStatus' in params ? params.TrainingJobStatus : null;
        this.TrainingEndTime = 'TrainingEndTime' in params ? params.TrainingEndTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ResourceConfig) {
            let obj = new ResourceConfig();
            obj.deserialize(params.ResourceConfig)
            this.ResourceConfig = obj;
        }

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
 * DescribeNotebookLifecycleScripts返回参数结构体
 * @class
 */
class DescribeNotebookLifecycleScriptsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notebook生命周期脚本列表
         * @type {Array.<NotebookLifecycleScriptsSummary> || null}
         */
        this.NotebookLifecycleScriptsSet = null;

        /**
         * Notebook生命周期脚本总数量
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

        if (params.NotebookLifecycleScriptsSet) {
            this.NotebookLifecycleScriptsSet = new Array();
            for (let z in params.NotebookLifecycleScriptsSet) {
                let obj = new NotebookLifecycleScriptsSummary();
                obj.deserialize(params.NotebookLifecycleScriptsSet[z]);
                this.NotebookLifecycleScriptsSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNotebookSummary返回参数结构体
 * @class
 */
class DescribeNotebookSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例总数
         * @type {number || null}
         */
        this.AllInstanceCnt = null;

        /**
         * 计费实例总数
         * @type {number || null}
         */
        this.BillingInstanceCnt = null;

        /**
         * 仅存储计费的实例总数
         * @type {number || null}
         */
        this.StorageOnlyBillingInstanceCnt = null;

        /**
         * 计算和存储都计费的实例总数
         * @type {number || null}
         */
        this.ComputingBillingInstanceCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllInstanceCnt = 'AllInstanceCnt' in params ? params.AllInstanceCnt : null;
        this.BillingInstanceCnt = 'BillingInstanceCnt' in params ? params.BillingInstanceCnt : null;
        this.StorageOnlyBillingInstanceCnt = 'StorageOnlyBillingInstanceCnt' in params ? params.StorageOnlyBillingInstanceCnt : null;
        this.ComputingBillingInstanceCnt = 'ComputingBillingInstanceCnt' in params ? params.ComputingBillingInstanceCnt : null;
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
         * 过滤字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段取值
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
 * DeleteNotebookLifecycleScript请求参数结构体
 * @class
 */
class DeleteNotebookLifecycleScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期脚本名称
         * @type {string || null}
         */
        this.NotebookLifecycleScriptsName = null;

        /**
         * 是否忽略已关联的 notebook 实例强行删除生命周期脚本，默认 false
         * @type {boolean || null}
         */
        this.Forcible = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookLifecycleScriptsName = 'NotebookLifecycleScriptsName' in params ? params.NotebookLifecycleScriptsName : null;
        this.Forcible = 'Forcible' in params ? params.Forcible : null;

    }
}

/**
 * DescribeNotebookLifecycleScript返回参数结构体
 * @class
 */
class DescribeNotebookLifecycleScriptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期脚本名称
         * @type {string || null}
         */
        this.NotebookLifecycleScriptsName = null;

        /**
         * 创建脚本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateScript = null;

        /**
         * 启动脚本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartScript = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 最后修改时间
         * @type {string || null}
         */
        this.LastModifiedTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookLifecycleScriptsName = 'NotebookLifecycleScriptsName' in params ? params.NotebookLifecycleScriptsName : null;
        this.CreateScript = 'CreateScript' in params ? params.CreateScript : null;
        this.StartScript = 'StartScript' in params ? params.StartScript : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * @type {AlgorithmSpecification || null}
         */
        this.AlgorithmSpecification = null;

        /**
         * 任务名称
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
         * @type {Array.<InputDataConfig> || null}
         */
        this.InputDataConfig = null;

        /**
         * 输出数据配置
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
         * 详细状态，取值范围
Starting：启动中
Downloading: 准备训练数据
Training: 正在训练
Uploading: 上传训练结果
Completed：已完成
Failed: 失败
MaxRuntimeExceeded: 任务超过最大运行时间
Stopping: 停止中
Stopped：已停止
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
         * 训练任务状态，取值范围
InProgress：运行中
Completed: 已完成
Failed: 失败
Stopping: 停止中
Stopped：已停止
         * @type {string || null}
         */
        this.TrainingJobStatus = null;

        /**
         * 训练任务日志链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogUrl = null;

        /**
         * 训练任务实例ID
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
        this.LogUrl = 'LogUrl' in params ? params.LogUrl : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UpdateCodeRepository请求参数结构体
 * @class
 */
class UpdateCodeRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询存储库名称
         * @type {string || null}
         */
        this.CodeRepositoryName = null;

        /**
         * Git凭证
         * @type {GitSecret || null}
         */
        this.GitSecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeRepositoryName = 'CodeRepositoryName' in params ? params.CodeRepositoryName : null;

        if (params.GitSecret) {
            let obj = new GitSecret();
            obj.deserialize(params.GitSecret)
            this.GitSecret = obj;
        }

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
         * 算法镜像配置
         * @type {AlgorithmSpecification || null}
         */
        this.AlgorithmSpecification = null;

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
         * 训练任务名称
         * @type {string || null}
         */
        this.TrainingJobName = null;

        /**
         * 输入数据配置
         * @type {Array.<InputDataConfig> || null}
         */
        this.InputDataConfig = null;

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
         * 环境变量配置
         * @type {Array.<EnvConfig> || null}
         */
        this.EnvConfig = null;

        /**
         * 角色名称
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

        if (params.AlgorithmSpecification) {
            let obj = new AlgorithmSpecification();
            obj.deserialize(params.AlgorithmSpecification)
            this.AlgorithmSpecification = obj;
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
        this.TrainingJobName = 'TrainingJobName' in params ? params.TrainingJobName : null;

        if (params.InputDataConfig) {
            this.InputDataConfig = new Array();
            for (let z in params.InputDataConfig) {
                let obj = new InputDataConfig();
                obj.deserialize(params.InputDataConfig[z]);
                this.InputDataConfig.push(obj);
            }
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

        if (params.EnvConfig) {
            this.EnvConfig = new Array();
            for (let z in params.EnvConfig) {
                let obj = new EnvConfig();
                obj.deserialize(params.EnvConfig[z]);
                this.EnvConfig.push(obj);
            }
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

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
 * DescribeNotebookLifecycleScript请求参数结构体
 * @class
 */
class DescribeNotebookLifecycleScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期脚本名称
         * @type {string || null}
         */
        this.NotebookLifecycleScriptsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookLifecycleScriptsName = 'NotebookLifecycleScriptsName' in params ? params.NotebookLifecycleScriptsName : null;

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
 * CreateNotebookLifecycleScript返回参数结构体
 * @class
 */
class CreateNotebookLifecycleScriptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期脚本名称
         * @type {string || null}
         */
        this.NotebookLifecycleScriptsName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookLifecycleScriptsName = 'NotebookLifecycleScriptsName' in params ? params.NotebookLifecycleScriptsName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UpdateNotebookLifecycleScript返回参数结构体
 * @class
 */
class UpdateNotebookLifecycleScriptResponse extends  AbstractModel {
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
 * DescribeTrainingJobs请求参数结构体
 * @class
 */
class DescribeTrainingJobsRequest extends  AbstractModel {
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
         * 过滤条件。
instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。
search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。
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
        this.CreationTimeAfter = 'CreationTimeAfter' in params ? params.CreationTimeAfter : null;
        this.CreationTimeBefore = 'CreationTimeBefore' in params ? params.CreationTimeBefore : null;
        this.NameContains = 'NameContains' in params ? params.NameContains : null;
        this.StatusEquals = 'StatusEquals' in params ? params.StatusEquals : null;

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

        /**
         * 自动停止，可取值Enabled/Disabled
取值为Disabled的时候StoppingCondition将被忽略
取值为Enabled的时候读取StoppingCondition作为自动停止的配置
         * @type {string || null}
         */
        this.AutoStopping = null;

        /**
         * 自动停止配置，只在AutoStopping为Enabled的时候生效
         * @type {StoppingCondition || null}
         */
        this.StoppingCondition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotebookInstanceName = 'NotebookInstanceName' in params ? params.NotebookInstanceName : null;
        this.AutoStopping = 'AutoStopping' in params ? params.AutoStopping : null;

        if (params.StoppingCondition) {
            let obj = new StoppingCondition();
            obj.deserialize(params.StoppingCondition)
            this.StoppingCondition = obj;
        }

    }
}

/**
 * CreateCodeRepository返回参数结构体
 * @class
 */
class CreateCodeRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储库名称
         * @type {string || null}
         */
        this.CodeRepositoryName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeRepositoryName = 'CodeRepositoryName' in params ? params.CodeRepositoryName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCodeRepositories请求参数结构体
 * @class
 */
class DescribeCodeRepositoriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件。
instance-name - String - 是否必填：否 -（过滤条件）按照名称过滤。
search-by-name - String - 是否必填：否 -（过滤条件）按照名称检索，模糊匹配。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序规则。默认取Descending
Descending 按更新时间降序
Ascending 按更新时间升序
         * @type {string || null}
         */
        this.SortOrder = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;

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

/**
 * DeleteCodeRepository返回参数结构体
 * @class
 */
class DeleteCodeRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储库名称
         * @type {string || null}
         */
        this.CodeRepositoryName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeRepositoryName = 'CodeRepositoryName' in params ? params.CodeRepositoryName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    OutputDataConfig: OutputDataConfig,
    StopTrainingJobResponse: StopTrainingJobResponse,
    BillingLabel: BillingLabel,
    EnvConfig: EnvConfig,
    CreateNotebookInstanceRequest: CreateNotebookInstanceRequest,
    DescribeNotebookSummaryRequest: DescribeNotebookSummaryRequest,
    SecondaryStatusTransition: SecondaryStatusTransition,
    DescribeNotebookInstanceRequest: DescribeNotebookInstanceRequest,
    DeleteNotebookInstanceResponse: DeleteNotebookInstanceResponse,
    NotebookInstanceSummary: NotebookInstanceSummary,
    GitConfig: GitConfig,
    CodeRepoSummary: CodeRepoSummary,
    ResourceConfig: ResourceConfig,
    DeleteNotebookLifecycleScriptResponse: DeleteNotebookLifecycleScriptResponse,
    DescribeNotebookLifecycleScriptsRequest: DescribeNotebookLifecycleScriptsRequest,
    GitSecret: GitSecret,
    DeleteCodeRepositoryRequest: DeleteCodeRepositoryRequest,
    DescribeCodeRepositoryResponse: DescribeCodeRepositoryResponse,
    InputDataConfig: InputDataConfig,
    StartNotebookInstanceResponse: StartNotebookInstanceResponse,
    UpdateCodeRepositoryResponse: UpdateCodeRepositoryResponse,
    CreateNotebookInstanceResponse: CreateNotebookInstanceResponse,
    FileSystemDataSource: FileSystemDataSource,
    NotebookLifecycleScriptsSummary: NotebookLifecycleScriptsSummary,
    StopTrainingJobRequest: StopTrainingJobRequest,
    UpdateNotebookInstanceResponse: UpdateNotebookInstanceResponse,
    UpdateNotebookLifecycleScriptRequest: UpdateNotebookLifecycleScriptRequest,
    UpdateNotebookInstanceRequest: UpdateNotebookInstanceRequest,
    CreatePresignedNotebookInstanceUrlRequest: CreatePresignedNotebookInstanceUrlRequest,
    CreateNotebookLifecycleScriptRequest: CreateNotebookLifecycleScriptRequest,
    CreateCodeRepositoryRequest: CreateCodeRepositoryRequest,
    DescribeNotebookInstancesRequest: DescribeNotebookInstancesRequest,
    DescribeTrainingJobsResponse: DescribeTrainingJobsResponse,
    StoppingCondition: StoppingCondition,
    DescribeCodeRepositoriesResponse: DescribeCodeRepositoriesResponse,
    DescribeNotebookInstancesResponse: DescribeNotebookInstancesResponse,
    DescribeCodeRepositoryRequest: DescribeCodeRepositoryRequest,
    CreateTrainingJobResponse: CreateTrainingJobResponse,
    DescribeNotebookInstanceResponse: DescribeNotebookInstanceResponse,
    DescribeTrainingJobRequest: DescribeTrainingJobRequest,
    TrainingJobSummary: TrainingJobSummary,
    AlgorithmSpecification: AlgorithmSpecification,
    CosDataSource: CosDataSource,
    DescribeNotebookLifecycleScriptsResponse: DescribeNotebookLifecycleScriptsResponse,
    DescribeNotebookSummaryResponse: DescribeNotebookSummaryResponse,
    Filter: Filter,
    StopNotebookInstanceRequest: StopNotebookInstanceRequest,
    DeleteNotebookLifecycleScriptRequest: DeleteNotebookLifecycleScriptRequest,
    DescribeNotebookLifecycleScriptResponse: DescribeNotebookLifecycleScriptResponse,
    DescribeTrainingJobResponse: DescribeTrainingJobResponse,
    StopNotebookInstanceResponse: StopNotebookInstanceResponse,
    UpdateCodeRepositoryRequest: UpdateCodeRepositoryRequest,
    CreateTrainingJobRequest: CreateTrainingJobRequest,
    DeleteNotebookInstanceRequest: DeleteNotebookInstanceRequest,
    DescribeNotebookLifecycleScriptRequest: DescribeNotebookLifecycleScriptRequest,
    VpcConfig: VpcConfig,
    CreateNotebookLifecycleScriptResponse: CreateNotebookLifecycleScriptResponse,
    CreatePresignedNotebookInstanceUrlResponse: CreatePresignedNotebookInstanceUrlResponse,
    UpdateNotebookLifecycleScriptResponse: UpdateNotebookLifecycleScriptResponse,
    DescribeTrainingJobsRequest: DescribeTrainingJobsRequest,
    StartNotebookInstanceRequest: StartNotebookInstanceRequest,
    CreateCodeRepositoryResponse: CreateCodeRepositoryResponse,
    DescribeCodeRepositoriesRequest: DescribeCodeRepositoriesRequest,
    DataSource: DataSource,
    ModelArtifacts: ModelArtifacts,
    DeleteCodeRepositoryResponse: DeleteCodeRepositoryResponse,

}
