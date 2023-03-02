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
 * 复制作业单条明细结果
 * @class
 */
class CopyJobResult extends  AbstractModel {
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
 * CreateResource请求参数结构体
 * @class
 */
class CreateResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源位置
         * @type {ResourceLoc || null}
         */
        this.ResourceLoc = null;

        /**
         * 资源类型。目前只支持 JAR，取值为 1
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源描述
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源版本描述
         * @type {string || null}
         */
        this.ResourceConfigRemark = null;

        /**
         * 目录ID
         * @type {string || null}
         */
        this.FolderId = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResourceLoc) {
            let obj = new ResourceLoc();
            obj.deserialize(params.ResourceLoc)
            this.ResourceLoc = obj;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ResourceConfigRemark = 'ResourceConfigRemark' in params ? params.ResourceConfigRemark : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * CheckSavepoint请求参数结构体
 * @class
 */
class CheckSavepointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业 id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 快照资源 id
         * @type {string || null}
         */
        this.SerialId = null;

        /**
         * 快照类型 1: savepoint；2: checkpoint；3: cancelWithSavepoint
         * @type {number || null}
         */
        this.RecordType = null;

        /**
         * 快照路径，目前只支持 cos 路径
         * @type {string || null}
         */
        this.SavepointPath = null;

        /**
         * 工作空间 id
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.SerialId = 'SerialId' in params ? params.SerialId : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.SavepointPath = 'SavepointPath' in params ? params.SavepointPath : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

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
         * 作业名称，允许输入长度小于等于50个字符的中文、英文、数字、-（横线）、_（下划线）、.（点），且符号必须半角字符。注意作业名不能和现有作业同名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 作业的类型，1 表示 SQL 作业，2 表示 JAR 作业
         * @type {number || null}
         */
        this.JobType = null;

        /**
         * 集群的类型，1 表示共享集群，2 表示独享集群
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * 当 ClusterType=2 时，必选，用来指定该作业提交的独享集群 ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 设置每 CU 的内存规格，单位为 GB，支持 2、4、8、16（需申请开通白名单后使用）。默认为 4，即 1 CU 对应 4 GB 的运行内存
         * @type {number || null}
         */
        this.CuMem = null;

        /**
         * 作业的备注信息，可以随意设置
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 作业名所属文件夹ID，根目录为"root"
         * @type {string || null}
         */
        this.FolderId = null;

        /**
         * 作业运行的Flink版本
         * @type {string || null}
         */
        this.FlinkVersion = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.JobType = 'JobType' in params ? params.JobType : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CuMem = 'CuMem' in params ? params.CuMem : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;
        this.FlinkVersion = 'FlinkVersion' in params ? params.FlinkVersion : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * JobConfig引用资源信息
 * @class
 */
class ResourceRefDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源id
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源版本，-1表示使用最新版本
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 1: 主资源
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 1: 系统内置资源
         * @type {number || null}
         */
        this.SystemProvide = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SystemProvide = 'SystemProvide' in params ? params.SystemProvide : null;

    }
}

/**
 * StopJobs请求参数结构体
 * @class
 */
class StopJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量停止作业的描述信息
         * @type {Array.<StopJobDescription> || null}
         */
        this.StopJobDescriptions = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StopJobDescriptions) {
            this.StopJobDescriptions = new Array();
            for (let z in params.StopJobDescriptions) {
                let obj = new StopJobDescription();
                obj.deserialize(params.StopJobDescriptions[z]);
                this.StopJobDescriptions.push(obj);
            }
        }
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

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
         * 作业Id
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
 * 资源位置描述
 * @class
 */
class ResourceLoc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源位置的存储类型，目前只支持1:COS
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * 描述资源位置的json
         * @type {ResourceLocParam || null}
         */
        this.Param = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

        if (params.Param) {
            let obj = new ResourceLocParam();
            obj.deserialize(params.Param)
            this.Param = obj;
        }

    }
}

/**
 * RunJobs请求参数结构体
 * @class
 */
class RunJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量启动作业的描述信息
         * @type {Array.<RunJobDescription> || null}
         */
        this.RunJobDescriptions = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RunJobDescriptions) {
            this.RunJobDescriptions = new Array();
            for (let z in params.RunJobDescriptions) {
                let obj = new RunJobDescription();
                obj.deserialize(params.RunJobDescriptions[z]);
                this.RunJobDescriptions.push(obj);
            }
        }
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * 云联网描述信息
 * @class
 */
class CCN extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络 ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 云联网 ID，如 ccn-rahigzjd
         * @type {string || null}
         */
        this.CcnId = null;

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
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

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
         * 作业Id列表
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * 工作空间Id
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * 停止作业的描述信息
 * @class
 */
class StopJobDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 停止类型，1 停止 2 暂停
         * @type {number || null}
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * CreateFolder请求参数结构体
 * @class
 */
class CreateFolderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建文件夹名
         * @type {string || null}
         */
        this.FolderName = null;

        /**
         * 新建文件夹的父目录ID
         * @type {string || null}
         */
        this.ParentId = null;

        /**
         * 文件夹类型，0是任务文件夹，1是依赖文件夹
         * @type {number || null}
         */
        this.FolderType = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FolderName = 'FolderName' in params ? params.FolderName : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.FolderType = 'FolderType' in params ? params.FolderType : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * ModifyJob返回参数结构体
 * @class
 */
class ModifyJobResponse extends  AbstractModel {
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
 * CreateJobConfig返回参数结构体
 * @class
 */
class CreateJobConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业配置版本号
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateResourceConfig返回参数结构体
 * @class
 */
class CreateResourceConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源版本ID
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateJobConfig请求参数结构体
 * @class
 */
class CreateJobConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 主类
         * @type {string || null}
         */
        this.EntrypointClass = null;

        /**
         * 主类入参
         * @type {string || null}
         */
        this.ProgramArgs = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 资源引用数组
         * @type {Array.<ResourceRef> || null}
         */
        this.ResourceRefs = null;

        /**
         * 作业默认并行度
         * @type {number || null}
         */
        this.DefaultParallelism = null;

        /**
         * 系统参数
         * @type {Array.<Property> || null}
         */
        this.Properties = null;

        /**
         * 1: 作业配置达到上限之后，自动删除可删除的最早版本
         * @type {number || null}
         */
        this.AutoDelete = null;

        /**
         * 作业使用的 COS 存储桶名
         * @type {string || null}
         */
        this.COSBucket = null;

        /**
         * 是否采集作业日志
         * @type {boolean || null}
         */
        this.LogCollect = null;

        /**
         * JobManager规格
         * @type {number || null}
         */
        this.JobManagerSpec = null;

        /**
         * TaskManager规格
         * @type {number || null}
         */
        this.TaskManagerSpec = null;

        /**
         * CLS日志集ID
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * CLS日志主题ID
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * 日志采集类型 2：CLS；3：COS
         * @type {number || null}
         */
        this.LogCollectType = null;

        /**
         * pyflink作业运行时使用的python版本
         * @type {string || null}
         */
        this.PythonVersion = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

        /**
         * 日志级别
         * @type {string || null}
         */
        this.LogLevel = null;

        /**
         * Oceanus 平台恢复作业开关 1:开启 -1: 关闭
         * @type {number || null}
         */
        this.AutoRecover = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.EntrypointClass = 'EntrypointClass' in params ? params.EntrypointClass : null;
        this.ProgramArgs = 'ProgramArgs' in params ? params.ProgramArgs : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.ResourceRefs) {
            this.ResourceRefs = new Array();
            for (let z in params.ResourceRefs) {
                let obj = new ResourceRef();
                obj.deserialize(params.ResourceRefs[z]);
                this.ResourceRefs.push(obj);
            }
        }
        this.DefaultParallelism = 'DefaultParallelism' in params ? params.DefaultParallelism : null;

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new Property();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }
        this.AutoDelete = 'AutoDelete' in params ? params.AutoDelete : null;
        this.COSBucket = 'COSBucket' in params ? params.COSBucket : null;
        this.LogCollect = 'LogCollect' in params ? params.LogCollect : null;
        this.JobManagerSpec = 'JobManagerSpec' in params ? params.JobManagerSpec : null;
        this.TaskManagerSpec = 'TaskManagerSpec' in params ? params.TaskManagerSpec : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.LogCollectType = 'LogCollectType' in params ? params.LogCollectType : null;
        this.PythonVersion = 'PythonVersion' in params ? params.PythonVersion : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.AutoRecover = 'AutoRecover' in params ? params.AutoRecover : null;

    }
}

/**
 * CreateResourceConfig请求参数结构体
 * @class
 */
class CreateResourceConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 位置信息
         * @type {ResourceLoc || null}
         */
        this.ResourceLoc = null;

        /**
         * 资源描述信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 1： 资源版本达到上限，自动删除最早可删除的版本
         * @type {number || null}
         */
        this.AutoDelete = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

        if (params.ResourceLoc) {
            let obj = new ResourceLoc();
            obj.deserialize(params.ResourceLoc)
            this.ResourceLoc = obj;
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.AutoDelete = 'AutoDelete' in params ? params.AutoDelete : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * DescribeSystemResources返回参数结构体
 * @class
 */
class DescribeSystemResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源详细信息集合
         * @type {Array.<SystemResourceItem> || null}
         */
        this.ResourceSet = null;

        /**
         * 总数量
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

        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new SystemResourceItem();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群的版本相关信息
 * @class
 */
class ClusterVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群的Flink版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Flink = null;

        /**
         * 集群支持的Flink版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SupportedFlink = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flink = 'Flink' in params ? params.Flink : null;
        this.SupportedFlink = 'SupportedFlink' in params ? params.SupportedFlink : null;

    }
}

/**
 * DescribeClusters请求参数结构体
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个集群 ID 查询，每次请求的集群上限为 100
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 偏移量，默认 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 请求的集群数量，默认 20，最大值 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 集群信息结果排序规则，1 按时间降序，2 按照时间升序，3  按照状态排序
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 过滤规则
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * DescribeTreeJobs返回参数结构体
 * @class
 */
class DescribeTreeJobsResponse extends  AbstractModel {
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
 * DeleteTableConfig请求参数结构体
 * @class
 */
class DeleteTableConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 调试作业ID
         * @type {number || null}
         */
        this.DebugId = null;

        /**
         * 表名
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.DebugId = 'DebugId' in params ? params.DebugId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * CopyJobs请求参数结构体
 * @class
 */
class CopyJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制明细列表
         * @type {Array.<CopyJobItem> || null}
         */
        this.JobItems = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.JobItems) {
            this.JobItems = new Array();
            for (let z in params.JobItems) {
                let obj = new CopyJobItem();
                obj.deserialize(params.JobItems[z]);
                this.JobItems.push(obj);
            }
        }
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * CopyJobs返回参数结构体
 * @class
 */
class CopyJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 失败条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailCount = null;

        /**
         * 结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CopyJobResult> || null}
         */
        this.CopyJobsResults = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailCount = 'FailCount' in params ? params.FailCount : null;

        if (params.CopyJobsResults) {
            this.CopyJobsResults = new Array();
            for (let z in params.CopyJobsResults) {
                let obj = new CopyJobResult();
                obj.deserialize(params.CopyJobsResults[z]);
                this.CopyJobsResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述Savepoint信息
 * @class
 */
class Savepoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VersionId = null;

        /**
         * 状态 1: Active; 2: Expired; 3: InProgress; 4: Failed; 5: Timeout
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 快照类型 1: savepoint；2: checkpoint；3: cancelWithSavepoint
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordType = null;

        /**
         * 运行作业实例的顺序 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JobRuntimeId = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 固定超时时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 快照 serialId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SerialId = null;

        /**
         * 耗时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeConsuming = null;

        /**
         * 快照路径状态 1：可用；2：不可用；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PathStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.JobRuntimeId = 'JobRuntimeId' in params ? params.JobRuntimeId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.SerialId = 'SerialId' in params ? params.SerialId : null;
        this.TimeConsuming = 'TimeConsuming' in params ? params.TimeConsuming : null;
        this.PathStatus = 'PathStatus' in params ? params.PathStatus : null;

    }
}

/**
 * 系统资源返回值
 * @class
 */
class SystemResourceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源类型。1 表示 JAR 包，目前只支持该值。
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 资源所属地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 资源的最新版本
         * @type {number || null}
         */
        this.LatestResourceConfigVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.LatestResourceConfigVersion = 'LatestResourceConfigVersion' in params ? params.LatestResourceConfigVersion : null;

    }
}

/**
 * DescribeResourceRelatedJobs请求参数结构体
 * @class
 */
class DescribeResourceRelatedJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 默认0;   1： 按照作业版本创建时间降序
         * @type {number || null}
         */
        this.DESCByJobConfigCreateTime = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源版本号
         * @type {number || null}
         */
        this.ResourceConfigVersion = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.DESCByJobConfigCreateTime = 'DESCByJobConfigCreateTime' in params ? params.DESCByJobConfigCreateTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ResourceConfigVersion = 'ResourceConfigVersion' in params ? params.ResourceConfigVersion : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * DeleteResources返回参数结构体
 * @class
 */
class DeleteResourcesResponse extends  AbstractModel {
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
 * DeleteTableConfig返回参数结构体
 * @class
 */
class DeleteTableConfigResponse extends  AbstractModel {
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
 * 描述资源配置的返回参数
 * @class
 */
class ResourceConfigItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源类型
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源所属地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 资源所属AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 主账号Uin
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 子账号Uin
         * @type {string || null}
         */
        this.CreatorUin = null;

        /**
         * 资源位置描述
         * @type {ResourceLoc || null}
         */
        this.ResourceLoc = null;

        /**
         * 资源创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 资源版本
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 资源描述
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 资源状态：0: 资源同步中，1:资源已就绪
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 关联作业个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RefJobCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;

        if (params.ResourceLoc) {
            let obj = new ResourceLoc();
            obj.deserialize(params.ResourceLoc)
            this.ResourceLoc = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RefJobCount = 'RefJobCount' in params ? params.RefJobCount : null;

    }
}

/**
 * TriggerJobSavepoint返回参数结构体
 * @class
 */
class TriggerJobSavepointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
         * @type {boolean || null}
         */
        this.SavepointTrigger = null;

        /**
         * 错误消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * 快照路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinalSavepointPath = null;

        /**
         * 快照 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SavepointId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SavepointTrigger = 'SavepointTrigger' in params ? params.SavepointTrigger : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.FinalSavepointPath = 'FinalSavepointPath' in params ? params.FinalSavepointPath : null;
        this.SavepointId = 'SavepointId' in params ? params.SavepointId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签
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
 * 树状结构资源列表对象
 * @class
 */
class DescribeTreeResourcesRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 父节点ID
         * @type {string || null}
         */
        this.ParentId = null;

        /**
         * 文件夹ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 文件夹名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 文件夹下资源数字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TreeResourceItem> || null}
         */
        this.Items = null;

        /**
         * 子节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeTreeResourcesRsp> || null}
         */
        this.Children = null;

        /**
         * 资源总数
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
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new TreeResourceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

        if (params.Children) {
            this.Children = new Array();
            for (let z in params.Children) {
                let obj = new DescribeTreeResourcesRsp();
                obj.deserialize(params.Children[z]);
                this.Children.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeResources请求参数结构体
 * @class
 */
class DescribeResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的资源ID数组，数量不超过100个。如果填写了该参数则忽略Filters参数。
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 偏移量，仅当设置 Limit 参数时有效
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 条数限制。如果不填，默认返回 20 条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <li><strong>ResourceName</strong></li>
<p style="padding-left: 30px;">按照资源名字过滤，支持模糊过滤。传入的过滤名字不超过5个</p><p style="padding-left: 30px;">类型: String</p><p style="padding-left: 30px;">必选: 否</p>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
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
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * 树状结构资源对象
 * @class
 */
class TreeResourceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源类型
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 目录ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FolderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FolderId = 'FolderId' in params ? params.FolderId : null;

    }
}

/**
 * 资源参数描述
 * @class
 */
class ResourceLocParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源bucket
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 资源路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 资源所在地域，如果不填，则使用Resource的Region
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
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 资源被Job 引用信息
 * @class
 */
class ResourceRefJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Job配置版本
         * @type {number || null}
         */
        this.JobConfigVersion = null;

        /**
         * 资源版本
         * @type {number || null}
         */
        this.ResourceVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobConfigVersion = 'JobConfigVersion' in params ? params.JobConfigVersion : null;
        this.ResourceVersion = 'ResourceVersion' in params ? params.ResourceVersion : null;

    }
}

/**
 * DescribeJobConfigs请求参数结构体
 * @class
 */
class DescribeJobConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 作业配置版本
         * @type {Array.<number> || null}
         */
        this.JobConfigVersions = null;

        /**
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认20，最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * true 表示只展示草稿
         * @type {boolean || null}
         */
        this.OnlyDraft = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobConfigVersions = 'JobConfigVersions' in params ? params.JobConfigVersions : null;
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
        this.OnlyDraft = 'OnlyDraft' in params ? params.OnlyDraft : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * CheckSavepoint返回参数结构体
 * @class
 */
class CheckSavepointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源 id
         * @type {string || null}
         */
        this.SerialId = null;

        /**
         * 1=可用，2=不可用
         * @type {number || null}
         */
        this.SavepointStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SerialId = 'SerialId' in params ? params.SerialId : null;
        this.SavepointStatus = 'SavepointStatus' in params ? params.SavepointStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteResourceConfigs请求参数结构体
 * @class
 */
class DeleteResourceConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源版本数组
         * @type {Array.<number> || null}
         */
        this.ResourceConfigVersions = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceConfigVersions = 'ResourceConfigVersions' in params ? params.ResourceConfigVersions : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * DescribeJobSavepoint返回参数结构体
 * @class
 */
class DescribeJobSavepointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照列表总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalNumber = null;

        /**
         * 快照列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Savepoint> || null}
         */
        this.Savepoint = null;

        /**
         * 进行中的快照列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Savepoint> || null}
         */
        this.RunningSavepoint = null;

        /**
         * 进行中的快照列表总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunningTotalNumber = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;

        if (params.Savepoint) {
            this.Savepoint = new Array();
            for (let z in params.Savepoint) {
                let obj = new Savepoint();
                obj.deserialize(params.Savepoint[z]);
                this.Savepoint.push(obj);
            }
        }

        if (params.RunningSavepoint) {
            this.RunningSavepoint = new Array();
            for (let z in params.RunningSavepoint) {
                let obj = new Savepoint();
                obj.deserialize(params.RunningSavepoint[z]);
                this.RunningSavepoint.push(obj);
            }
        }
        this.RunningTotalNumber = 'RunningTotalNumber' in params ? params.RunningTotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeTreeResources返回参数结构体
 * @class
 */
class DescribeTreeResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 父节点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParentId = null;

        /**
         * 文件夹ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 文件夹名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 文件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TreeResourceItem> || null}
         */
        this.Items = null;

        /**
         * 子目录列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeTreeResourcesRsp> || null}
         */
        this.Children = null;

        /**
         * 资源总数
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
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new TreeResourceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

        if (params.Children) {
            this.Children = new Array();
            for (let z in params.Children) {
                let obj = new DescribeTreeResourcesRsp();
                obj.deserialize(params.Children[z]);
                this.Children.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunJobs返回参数结构体
 * @class
 */
class RunJobsResponse extends  AbstractModel {
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
 * 查询作业列表时的过滤器
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要过滤的字段
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值
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
 * DeleteResources请求参数结构体
 * @class
 */
class DeleteResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除资源ID列表
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

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
         * 作业总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 作业列表
         * @type {Array.<JobV1> || null}
         */
        this.JobSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.JobSet) {
            this.JobSet = new Array();
            for (let z in params.JobSet) {
                let obj = new JobV1();
                obj.deserialize(params.JobSet[z]);
                this.JobSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源详细描述
 * @class
 */
class ResourceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源类型
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源位置
         * @type {ResourceLoc || null}
         */
        this.ResourceLoc = null;

        /**
         * 资源地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 主账号Uin
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 子账号Uin
         * @type {string || null}
         */
        this.CreatorUin = null;

        /**
         * 资源创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 资源最后更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 资源的资源版本ID
         * @type {number || null}
         */
        this.LatestResourceConfigVersion = null;

        /**
         * 资源备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 版本个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VersionCount = null;

        /**
         * 关联作业数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RefJobCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.ResourceLoc) {
            let obj = new ResourceLoc();
            obj.deserialize(params.ResourceLoc)
            this.ResourceLoc = obj;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.LatestResourceConfigVersion = 'LatestResourceConfigVersion' in params ? params.LatestResourceConfigVersion : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.VersionCount = 'VersionCount' in params ? params.VersionCount : null;
        this.RefJobCount = 'RefJobCount' in params ? params.RefJobCount : null;

    }
}

/**
 * 空间和集群绑定关系
 * @class
 */
class WorkSpaceClusterItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群 ID
         * @type {number || null}
         */
        this.ClusterGroupId = null;

        /**
         * 集群 SerialId
         * @type {string || null}
         */
        this.ClusterGroupSerialId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

        /**
         * 工作空间名称
         * @type {string || null}
         */
        this.WorkSpaceName = null;

        /**
         * 绑定状态  2 绑定 1  解除绑定
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 项目ID string类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectIdStr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterGroupId = 'ClusterGroupId' in params ? params.ClusterGroupId : null;
        this.ClusterGroupSerialId = 'ClusterGroupSerialId' in params ? params.ClusterGroupSerialId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;
        this.WorkSpaceName = 'WorkSpaceName' in params ? params.WorkSpaceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectIdStr = 'ProjectIdStr' in params ? params.ProjectIdStr : null;

    }
}

/**
 * StopJobs返回参数结构体
 * @class
 */
class StopJobsResponse extends  AbstractModel {
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
 * DescribeJobSavepoint请求参数结构体
 * @class
 */
class DescribeJobSavepointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业 SerialId
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 分页参数，单页总数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数，偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

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
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源版本
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSystemResources请求参数结构体
 * @class
 */
class DescribeSystemResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的资源ID数组
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 偏移量，仅当设置 Limit 参数时有效
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 条数限制，默认返回 20 条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询资源配置列表， 如果不填写，返回该 ResourceIds.N 下所有作业配置列表
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 查询对应Flink版本的内置connector
         * @type {string || null}
         */
        this.FlinkVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.FlinkVersion = 'FlinkVersion' in params ? params.FlinkVersion : null;

    }
}

/**
 * CreateFolder返回参数结构体
 * @class
 */
class CreateFolderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建文件夹的唯一ID
         * @type {string || null}
         */
        this.FolderId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FolderId = 'FolderId' in params ? params.FolderId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 复制作业单条明细
 * @class
 */
class CopyJobItem extends  AbstractModel {
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
 * 作业启动详情
 * @class
 */
class RunJobDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 运行类型，1：启动，2：恢复
         * @type {number || null}
         */
        this.RunType = null;

        /**
         * 已废弃。旧版 SQL 类型作业启动参数：指定数据源消费起始时间点
         * @type {string || null}
         */
        this.StartMode = null;

        /**
         * 当前作业的某个版本
         * @type {number || null}
         */
        this.JobConfigVersion = null;

        /**
         * Savepoint路径
         * @type {string || null}
         */
        this.SavepointPath = null;

        /**
         * Savepoint的Id
         * @type {string || null}
         */
        this.SavepointId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RunType = 'RunType' in params ? params.RunType : null;
        this.StartMode = 'StartMode' in params ? params.StartMode : null;
        this.JobConfigVersion = 'JobConfigVersion' in params ? params.JobConfigVersion : null;
        this.SavepointPath = 'SavepointPath' in params ? params.SavepointPath : null;
        this.SavepointId = 'SavepointId' in params ? params.SavepointId : null;

    }
}

/**
 * ModifyJob请求参数结构体
 * @class
 */
class ModifyJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 作业名称，支持长度小于50的中文/英文/数字/”-”/”_”/”.”，不能重名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 拖拽文件需传入此参数
         * @type {string || null}
         */
        this.TargetFolderId = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TargetFolderId = 'TargetFolderId' in params ? params.TargetFolderId : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * DescribeTreeJobs请求参数结构体
 * @class
 */
class DescribeTreeJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间 Serialid
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * DescribeJobConfigs返回参数结构体
 * @class
 */
class DescribeJobConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总的配置版本数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 作业配置列表
         * @type {Array.<JobConfig> || null}
         */
        this.JobConfigSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.JobConfigSet) {
            this.JobConfigSet = new Array();
            for (let z in params.JobConfigSet) {
                let obj = new JobConfig();
                obj.deserialize(params.JobConfigSet[z]);
                this.JobConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 系统配置属性
 * @class
 */
class Property extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统配置的Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 系统配置的Value
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
 * DeleteResourceConfigs返回参数结构体
 * @class
 */
class DeleteResourceConfigsResponse extends  AbstractModel {
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
 * DescribeResourceRelatedJobs返回参数结构体
 * @class
 */
class DescribeResourceRelatedJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 关联作业信息
         * @type {Array.<ResourceRefJobInfo> || null}
         */
        this.RefJobInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RefJobInfos) {
            this.RefJobInfos = new Array();
            for (let z in params.RefJobInfos) {
                let obj = new ResourceRefJobInfo();
                obj.deserialize(params.RefJobInfos[z]);
                this.RefJobInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResources返回参数结构体
 * @class
 */
class DescribeResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源详细信息集合
         * @type {Array.<ResourceItem> || null}
         */
        this.ResourceSet = null;

        /**
         * 总数量
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

        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new ResourceItem();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述用户创建的集群信息
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群 ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 用户 AppID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 主账号 UIN
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 创建者 UIN
         * @type {string || null}
         */
        this.CreatorUin = null;

        /**
         * 集群状态, 1 未初始化,，3 初始化中，2 运行中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 集群创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后一次操作集群的时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * CU 数量
         * @type {number || null}
         */
        this.CuNum = null;

        /**
         * CU 内存规格
         * @type {number || null}
         */
        this.CuMem = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 状态描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 网络
         * @type {Array.<CCN> || null}
         */
        this.CCNs = null;

        /**
         * 网络
         * @type {number || null}
         */
        this.NetEnvironmentType = null;

        /**
         * 空闲 CU
         * @type {number || null}
         */
        this.FreeCuNum = null;

        /**
         * 集群绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 集群隔离时间; 没隔离时间，则为 -
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 集群过期时间; 没过期概念，则为 -
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 距离过期还有多少秒; 没过期概念，则为 -
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecondsUntilExpiry = null;

        /**
         * 自动续费标记，0 表示默认状态 (用户未设置，即初始状态，用户开通了预付费不停服特权会进行自动续费)， 1 表示自动续费，2表示明确不自动续费(用户设置)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 集群的默认 COS 存储桶
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultCOSBucket = null;

        /**
         * 集群的CLS 日志集 LogSet
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CLSLogSet = null;

        /**
         * 集群的CLS 日志主题 TopicId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CLSTopicId = null;

        /**
         * 集群的CLS 日志集  名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CLSLogName = null;

        /**
         * 集群的CLS 日志主题  名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CLSTopicName = null;

        /**
         * 集群的版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClusterVersion || null}
         */
        this.Version = null;

        /**
         * 细粒度资源下的空闲CU
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FreeCu = null;

        /**
         * 集群的默认日志采集配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultLogCollectConf = null;

        /**
         * 取值：0-没有设置，1-已设置，2-不允许设置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CustomizedDNSEnabled = null;

        /**
         * 空间信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WorkSpaceClusterItem> || null}
         */
        this.Correlations = null;

        /**
         * 运行CU
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunningCu = null;

        /**
         * 0 后付费,1 预付费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 前端区分 集群是否需要2CU逻辑 因为历史集群 变配不需要, default 1  新集群都需要
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsNeedManageNode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CuNum = 'CuNum' in params ? params.CuNum : null;
        this.CuMem = 'CuMem' in params ? params.CuMem : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;

        if (params.CCNs) {
            this.CCNs = new Array();
            for (let z in params.CCNs) {
                let obj = new CCN();
                obj.deserialize(params.CCNs[z]);
                this.CCNs.push(obj);
            }
        }
        this.NetEnvironmentType = 'NetEnvironmentType' in params ? params.NetEnvironmentType : null;
        this.FreeCuNum = 'FreeCuNum' in params ? params.FreeCuNum : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.SecondsUntilExpiry = 'SecondsUntilExpiry' in params ? params.SecondsUntilExpiry : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.DefaultCOSBucket = 'DefaultCOSBucket' in params ? params.DefaultCOSBucket : null;
        this.CLSLogSet = 'CLSLogSet' in params ? params.CLSLogSet : null;
        this.CLSTopicId = 'CLSTopicId' in params ? params.CLSTopicId : null;
        this.CLSLogName = 'CLSLogName' in params ? params.CLSLogName : null;
        this.CLSTopicName = 'CLSTopicName' in params ? params.CLSTopicName : null;

        if (params.Version) {
            let obj = new ClusterVersion();
            obj.deserialize(params.Version)
            this.Version = obj;
        }
        this.FreeCu = 'FreeCu' in params ? params.FreeCu : null;
        this.DefaultLogCollectConf = 'DefaultLogCollectConf' in params ? params.DefaultLogCollectConf : null;
        this.CustomizedDNSEnabled = 'CustomizedDNSEnabled' in params ? params.CustomizedDNSEnabled : null;

        if (params.Correlations) {
            this.Correlations = new Array();
            for (let z in params.Correlations) {
                let obj = new WorkSpaceClusterItem();
                obj.deserialize(params.Correlations[z]);
                this.Correlations.push(obj);
            }
        }
        this.RunningCu = 'RunningCu' in params ? params.RunningCu : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.IsNeedManageNode = 'IsNeedManageNode' in params ? params.IsNeedManageNode : null;

    }
}

/**
 * DescribeClusters返回参数结构体
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群列表
         * @type {Array.<Cluster> || null}
         */
        this.ClusterSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ClusterSet) {
            this.ClusterSet = new Array();
            for (let z in params.ClusterSet) {
                let obj = new Cluster();
                obj.deserialize(params.ClusterSet[z]);
                this.ClusterSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TriggerJobSavepoint请求参数结构体
 * @class
 */
class TriggerJobSavepointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业 SerialId
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * DescribeResourceConfigs返回参数结构体
 * @class
 */
class DescribeResourceConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源配置描述数组
         * @type {Array.<ResourceConfigItem> || null}
         */
        this.ResourceConfigSet = null;

        /**
         * 资源配置数量
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

        if (params.ResourceConfigSet) {
            this.ResourceConfigSet = new Array();
            for (let z in params.ResourceConfigSet) {
                let obj = new ResourceConfigItem();
                obj.deserialize(params.ResourceConfigSet[z]);
                this.ResourceConfigSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源引用参数
 * @class
 */
class ResourceRef extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源版本ID，-1表示使用最新版本
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 引用资源类型，例如主资源设置为1，代表main class所在的jar包
         * @type {number || null}
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Type = 'Type' in params ? params.Type : null;

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
         * 按照一个或者多个作业ID查询。作业ID形如：cql-11112222，每次请求的作业上限为100。参数不支持同时指定JobIds和Filters。
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * 过滤条件，支持的 Filter.Name 为：作业名 Name、作业状态 Status、所属集群 ClusterId、作业id JobId、集群名称 ClusterName。 每次请求的 Filters 个数的上限为 5，Filter.Values 的个数上限为 5。参数不支持同时指定 JobIds 和 Filters。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

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
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * Job详细信息
 * @class
 */
class JobV1 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户UIN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 创建者UIN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorUin = null;

        /**
         * 作业名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 作业类型，1：sql作业，2：Jar作业
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JobType = null;

        /**
         * 作业状态，1：未初始化，2：未发布，3：操作中，4：运行中，5：停止，6：暂停，-1：故障
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 作业创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 作业启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 作业停止时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StopTime = null;

        /**
         * 作业更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 作业累计运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalRunMillis = null;

        /**
         * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 操作错误提示信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastOpResult = null;

        /**
         * 集群名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 最新配置版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LatestJobConfigVersion = null;

        /**
         * 已发布的配置版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PublishedJobConfigVersion = null;

        /**
         * 运行的CU数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunningCuNum = null;

        /**
         * 作业内存规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CuMem = null;

        /**
         * 作业状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 运行状态时表示单次运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CurrentRunMillis = null;

        /**
         * 作业所在的集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 作业管理WEB UI 入口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebUIUrl = null;

        /**
         * 作业所在集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SchedulerType = null;

        /**
         * 作业所在集群状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterStatus = null;

        /**
         * 细粒度下的运行的CU数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunningCu = null;

        /**
         * 作业运行的 Flink 版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlinkVersion = null;

        /**
         * 工作空间 SerialId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkSpaceId = null;

        /**
         * 工作空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkSpaceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.JobType = 'JobType' in params ? params.JobType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.StopTime = 'StopTime' in params ? params.StopTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TotalRunMillis = 'TotalRunMillis' in params ? params.TotalRunMillis : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.LastOpResult = 'LastOpResult' in params ? params.LastOpResult : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.LatestJobConfigVersion = 'LatestJobConfigVersion' in params ? params.LatestJobConfigVersion : null;
        this.PublishedJobConfigVersion = 'PublishedJobConfigVersion' in params ? params.PublishedJobConfigVersion : null;
        this.RunningCuNum = 'RunningCuNum' in params ? params.RunningCuNum : null;
        this.CuMem = 'CuMem' in params ? params.CuMem : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.CurrentRunMillis = 'CurrentRunMillis' in params ? params.CurrentRunMillis : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.WebUIUrl = 'WebUIUrl' in params ? params.WebUIUrl : null;
        this.SchedulerType = 'SchedulerType' in params ? params.SchedulerType : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.RunningCu = 'RunningCu' in params ? params.RunningCu : null;
        this.FlinkVersion = 'FlinkVersion' in params ? params.FlinkVersion : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;
        this.WorkSpaceName = 'WorkSpaceName' in params ? params.WorkSpaceName : null;

    }
}

/**
 * 作业配置详情
 * @class
 */
class JobConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 主类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntrypointClass = null;

        /**
         * 主类入参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProgramArgs = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 作业配置创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 作业配置的版本号
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 作业默认并行度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DefaultParallelism = null;

        /**
         * 系统参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Property> || null}
         */
        this.Properties = null;

        /**
         * 引用资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResourceRefDetail> || null}
         */
        this.ResourceRefDetails = null;

        /**
         * 创建者uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorUin = null;

        /**
         * 作业配置上次启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 作业绑定的存储桶
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.COSBucket = null;

        /**
         * 是否启用日志收集，0-未启用，1-已启用，2-历史集群未设置日志集，3-历史集群已开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogCollect = null;

        /**
         * 作业的最大并行度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxParallelism = null;

        /**
         * JobManager规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JobManagerSpec = null;

        /**
         * TaskManager规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskManagerSpec = null;

        /**
         * CLS日志集ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * CLS日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * pyflink作业运行的python版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PythonVersion = null;

        /**
         * Oceanus 平台恢复作业开关 1:开启 -1: 关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRecover = null;

        /**
         * 日志级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.EntrypointClass = 'EntrypointClass' in params ? params.EntrypointClass : null;
        this.ProgramArgs = 'ProgramArgs' in params ? params.ProgramArgs : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.DefaultParallelism = 'DefaultParallelism' in params ? params.DefaultParallelism : null;

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new Property();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }

        if (params.ResourceRefDetails) {
            this.ResourceRefDetails = new Array();
            for (let z in params.ResourceRefDetails) {
                let obj = new ResourceRefDetail();
                obj.deserialize(params.ResourceRefDetails[z]);
                this.ResourceRefDetails.push(obj);
            }
        }
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.COSBucket = 'COSBucket' in params ? params.COSBucket : null;
        this.LogCollect = 'LogCollect' in params ? params.LogCollect : null;
        this.MaxParallelism = 'MaxParallelism' in params ? params.MaxParallelism : null;
        this.JobManagerSpec = 'JobManagerSpec' in params ? params.JobManagerSpec : null;
        this.TaskManagerSpec = 'TaskManagerSpec' in params ? params.TaskManagerSpec : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.PythonVersion = 'PythonVersion' in params ? params.PythonVersion : null;
        this.AutoRecover = 'AutoRecover' in params ? params.AutoRecover : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;

    }
}

/**
 * DescribeResourceConfigs请求参数结构体
 * @class
 */
class DescribeResourceConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 偏移量，仅当设置 Limit 时该参数有效
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回值大小，不填则返回全量数据
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源配置Versions集合
         * @type {Array.<number> || null}
         */
        this.ResourceConfigVersions = null;

        /**
         * 作业配置版本
         * @type {number || null}
         */
        this.JobConfigVersion = null;

        /**
         * 作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ResourceConfigVersions = 'ResourceConfigVersions' in params ? params.ResourceConfigVersions : null;
        this.JobConfigVersion = 'JobConfigVersion' in params ? params.JobConfigVersion : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

/**
 * DescribeTreeResources请求参数结构体
 * @class
 */
class DescribeTreeResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间 SerialId
         * @type {string || null}
         */
        this.WorkSpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkSpaceId = 'WorkSpaceId' in params ? params.WorkSpaceId : null;

    }
}

module.exports = {
    CopyJobResult: CopyJobResult,
    CreateResourceRequest: CreateResourceRequest,
    CheckSavepointRequest: CheckSavepointRequest,
    CreateJobRequest: CreateJobRequest,
    ResourceRefDetail: ResourceRefDetail,
    StopJobsRequest: StopJobsRequest,
    CreateJobResponse: CreateJobResponse,
    ResourceLoc: ResourceLoc,
    RunJobsRequest: RunJobsRequest,
    CCN: CCN,
    DeleteJobsRequest: DeleteJobsRequest,
    StopJobDescription: StopJobDescription,
    CreateFolderRequest: CreateFolderRequest,
    ModifyJobResponse: ModifyJobResponse,
    CreateJobConfigResponse: CreateJobConfigResponse,
    CreateResourceConfigResponse: CreateResourceConfigResponse,
    CreateJobConfigRequest: CreateJobConfigRequest,
    CreateResourceConfigRequest: CreateResourceConfigRequest,
    DescribeSystemResourcesResponse: DescribeSystemResourcesResponse,
    ClusterVersion: ClusterVersion,
    DescribeClustersRequest: DescribeClustersRequest,
    DescribeTreeJobsResponse: DescribeTreeJobsResponse,
    DeleteTableConfigRequest: DeleteTableConfigRequest,
    CopyJobsRequest: CopyJobsRequest,
    CopyJobsResponse: CopyJobsResponse,
    Savepoint: Savepoint,
    SystemResourceItem: SystemResourceItem,
    DescribeResourceRelatedJobsRequest: DescribeResourceRelatedJobsRequest,
    DeleteResourcesResponse: DeleteResourcesResponse,
    DeleteTableConfigResponse: DeleteTableConfigResponse,
    ResourceConfigItem: ResourceConfigItem,
    TriggerJobSavepointResponse: TriggerJobSavepointResponse,
    Tag: Tag,
    DescribeTreeResourcesRsp: DescribeTreeResourcesRsp,
    DescribeResourcesRequest: DescribeResourcesRequest,
    TreeResourceItem: TreeResourceItem,
    ResourceLocParam: ResourceLocParam,
    ResourceRefJobInfo: ResourceRefJobInfo,
    DescribeJobConfigsRequest: DescribeJobConfigsRequest,
    CheckSavepointResponse: CheckSavepointResponse,
    DeleteResourceConfigsRequest: DeleteResourceConfigsRequest,
    DescribeJobSavepointResponse: DescribeJobSavepointResponse,
    DeleteJobsResponse: DeleteJobsResponse,
    DescribeTreeResourcesResponse: DescribeTreeResourcesResponse,
    RunJobsResponse: RunJobsResponse,
    Filter: Filter,
    DeleteResourcesRequest: DeleteResourcesRequest,
    DescribeJobsResponse: DescribeJobsResponse,
    ResourceItem: ResourceItem,
    WorkSpaceClusterItem: WorkSpaceClusterItem,
    StopJobsResponse: StopJobsResponse,
    DescribeJobSavepointRequest: DescribeJobSavepointRequest,
    CreateResourceResponse: CreateResourceResponse,
    DescribeSystemResourcesRequest: DescribeSystemResourcesRequest,
    CreateFolderResponse: CreateFolderResponse,
    CopyJobItem: CopyJobItem,
    RunJobDescription: RunJobDescription,
    ModifyJobRequest: ModifyJobRequest,
    DescribeTreeJobsRequest: DescribeTreeJobsRequest,
    DescribeJobConfigsResponse: DescribeJobConfigsResponse,
    Property: Property,
    DeleteResourceConfigsResponse: DeleteResourceConfigsResponse,
    DescribeResourceRelatedJobsResponse: DescribeResourceRelatedJobsResponse,
    DescribeResourcesResponse: DescribeResourcesResponse,
    Cluster: Cluster,
    DescribeClustersResponse: DescribeClustersResponse,
    TriggerJobSavepointRequest: TriggerJobSavepointRequest,
    DescribeResourceConfigsResponse: DescribeResourceConfigsResponse,
    ResourceRef: ResourceRef,
    DescribeJobsRequest: DescribeJobsRequest,
    JobV1: JobV1,
    JobConfig: JobConfig,
    DescribeResourceConfigsRequest: DescribeResourceConfigsRequest,
    DescribeTreeResourcesRequest: DescribeTreeResourcesRequest,

}
