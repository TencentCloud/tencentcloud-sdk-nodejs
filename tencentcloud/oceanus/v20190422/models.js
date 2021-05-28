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
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

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
         * 资源版本描述
         * @type {string || null}
         */
        this.ResourceConfigRemark = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ResourceConfigRemark = 'ResourceConfigRemark' in params ? params.ResourceConfigRemark : null;

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
         * 资源位置的存储类型，目前只支持COS
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
 * DescribeResources请求参数结构体
 * @class
 */
class DescribeResourcesRequest extends  AbstractModel {
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
         * 条数限制。如果不填，默认返回 20 条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询资源配置列表， 如果不填写，返回该ResourceId下所有作业配置列表
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

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
         * 过滤条件，支持的 Filter.Name 为：作业名 Name、作业状态 Status、所属集群 ClusterId。每次请求的 Filters 个数的上限为 3，Filter.Values 的个数上限为 5。参数不支持同时指定 JobIds 和 Filters。
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
         * 作业类型
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

    }
}

module.exports = {
    DescribeResourceConfigsResponse: DescribeResourceConfigsResponse,
    CreateResourceRequest: CreateResourceRequest,
    CreateJobRequest: CreateJobRequest,
    ResourceRefDetail: ResourceRefDetail,
    StopJobsRequest: StopJobsRequest,
    CreateJobResponse: CreateJobResponse,
    ResourceLoc: ResourceLoc,
    RunJobsRequest: RunJobsRequest,
    StopJobDescription: StopJobDescription,
    DeleteTableConfigResponse: DeleteTableConfigResponse,
    CreateResourceConfigResponse: CreateResourceConfigResponse,
    CreateJobConfigRequest: CreateJobConfigRequest,
    CreateResourceConfigRequest: CreateResourceConfigRequest,
    Property: Property,
    DeleteTableConfigRequest: DeleteTableConfigRequest,
    SystemResourceItem: SystemResourceItem,
    DescribeResourceRelatedJobsRequest: DescribeResourceRelatedJobsRequest,
    DeleteResourcesResponse: DeleteResourcesResponse,
    CreateJobConfigResponse: CreateJobConfigResponse,
    ResourceConfigItem: ResourceConfigItem,
    DescribeResourcesRequest: DescribeResourcesRequest,
    ResourceLocParam: ResourceLocParam,
    DeleteResourceConfigsRequest: DeleteResourceConfigsRequest,
    RunJobsResponse: RunJobsResponse,
    Filter: Filter,
    DeleteResourcesRequest: DeleteResourcesRequest,
    DescribeJobsResponse: DescribeJobsResponse,
    ResourceItem: ResourceItem,
    StopJobsResponse: StopJobsResponse,
    CreateResourceResponse: CreateResourceResponse,
    DescribeSystemResourcesRequest: DescribeSystemResourcesRequest,
    DescribeJobConfigsRequest: DescribeJobConfigsRequest,
    DescribeResourcesResponse: DescribeResourcesResponse,
    RunJobDescription: RunJobDescription,
    DescribeJobConfigsResponse: DescribeJobConfigsResponse,
    DeleteResourceConfigsResponse: DeleteResourceConfigsResponse,
    DescribeResourceRelatedJobsResponse: DescribeResourceRelatedJobsResponse,
    DescribeSystemResourcesResponse: DescribeSystemResourcesResponse,
    ResourceRefJobInfo: ResourceRefJobInfo,
    ResourceRef: ResourceRef,
    DescribeJobsRequest: DescribeJobsRequest,
    JobV1: JobV1,
    JobConfig: JobConfig,
    DescribeResourceConfigsRequest: DescribeResourceConfigsRequest,

}
