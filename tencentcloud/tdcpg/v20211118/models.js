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
 * ResetAccountPassword返回参数结构体
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
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
 * ModifyClusterName请求参数结构体
 * @class
 */
class ModifyClusterNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * ModifyClustersAutoRenewFlag返回参数结构体
 * @class
 */
class ModifyClustersAutoRenewFlagResponse extends  AbstractModel {
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
 * DescribeClusters请求参数结构体
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页码，取值范围为[1,INF)，默认值为1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页条数，取值范围为默认为[1,100]，默认值为20
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 目前支持查询条件包括：
 - ClusterId : 集群ID
 - ClusterName : 集群名
 - ProjectId : 项目ID
 - Status : 集群状态
 - PayMode : 付费模式
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段，可选字段：
 - CreateTime : 集群创建时间(默认值)
 - PayPeriodEndTime : 集群过期时间
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式，可选字段：
 - DESC : 降序(默认值)
 - ASC : 升序
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DeleteClusterInstances返回参数结构体
 * @class
 */
class DeleteClusterInstancesResponse extends  AbstractModel {
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
 * ModifyClusterInstancesSpec请求参数结构体
 * @class
 */
class ModifyClusterInstancesSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例ID列表，目前只支持单个实例修改
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 修改后的CPU核数。取值参考文档【购买指南】
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 修改后的内存大小，单位GiB。取值参考文档【购买指南】
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 操作时机
 - IMMEDIATE：立即执行 
 - MAINTAIN_PERIOD：维护窗口期执行
         * @type {string || null}
         */
        this.OperationTiming = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.OperationTiming = 'OperationTiming' in params ? params.OperationTiming : null;

    }
}

/**
 * DescribeClusterBackups请求参数结构体
 * @class
 */
class DescribeClusterBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 页码，取值范围为[1,INF)，默认值为1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页个数，取值范围为默认为[1,100]，默认值为20
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 可以回档时间范围
 * @class
 */
class AvailableRecoveryTimeRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可回档起始时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.AvailableBeginTime = null;

        /**
         * 可回档结束时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.AvailableEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AvailableBeginTime = 'AvailableBeginTime' in params ? params.AvailableBeginTime : null;
        this.AvailableEndTime = 'AvailableEndTime' in params ? params.AvailableEndTime : null;

    }
}

/**
 * ResetAccountPassword请求参数结构体
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 账号名字
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 数据库用户密码，必须满足 8-64个字符，至少包含 大写字母、小写字母、数字和符号~!@#$%^&*_-+=`|(){}[]:;'<>,.?/中的任意三种
         * @type {string || null}
         */
        this.AccountPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;

    }
}

/**
 * DescribeClusterInstances返回参数结构体
 * @class
 */
class DescribeClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例列表信息
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCluster返回参数结构体
 * @class
 */
class DeleteClusterResponse extends  AbstractModel {
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
 * CreateClusterInstances返回参数结构体
 * @class
 */
class CreateClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {Array.<string> || null}
         */
        this.DealNameSet = null;

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
        this.DealNameSet = 'DealNameSet' in params ? params.DealNameSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartClusterInstances请求参数结构体
 * @class
 */
class RestartClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例ID列表，目前只支持单个实例重启
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * CreateCluster返回参数结构体
 * @class
 */
class CreateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {Array.<string> || null}
         */
        this.DealNameSet = null;

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
        this.DealNameSet = 'DealNameSet' in params ? params.DealNameSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecoverClusterInstances请求参数结构体
 * @class
 */
class RecoverClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
只有当PayMode为PREPAID时生效。
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * CloneClusterToPointInTime返回参数结构体
 * @class
 */
class CloneClusterToPointInTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {Array.<string> || null}
         */
        this.DealNameSet = null;

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
        this.DealNameSet = 'DealNameSet' in params ? params.DealNameSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCluster请求参数结构体
 * @class
 */
class CreateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 数据库用户密码，必须满足 8-64个字符，至少包含 大写字母、小写字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种
         * @type {string || null}
         */
        this.MasterUserPassword = null;

        /**
         * CPU核数。取值参考文档【购买指南】
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 内存大小，单位GiB。取值参考文档【购买指南】
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 已配置的私有网络中的子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例付费模式
 - PREPAID：预付费，即包年包月
 - POSTPAID_BY_HOUR：按小时后付费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 集群名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."。不输入此参数时默认与ClusterId保持一致
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * TDSQL-C PostgreSQL 合入的社区版本号。
支持入参值为：10.17。当输入该参数时，会基于此版本号创建对应的最新DBKernelVersion数据库内核。
注：该参数与DBMajorVersion、DBKernelVersion只能传递一个，且需要传递一个。
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 项目Id，默认为0表示默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 连接数据库时，Endpoint使用的端口。取值范围为[1,65534]，默认值为5432
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 集群下实例数量。取值范围为[1,4]，默认值为1
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
只有当PayMode为PREPAID时生效。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动续费，0-不 1-是。默认值为0，只有当PayMode为PREPAID时生效。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * TDSQL-C PostgreSQL 合入的社区主要版本号。
支持入参值为：10。当输入该参数时，会基于此版本号创建对应的最新DBKernelVersion数据库内核。
注：该参数和DBVersion、DBKernelVersion只能传递一个，且需要传递一个。
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * TDSQL-C PostgreSQL 内核版本号。
支持入参值为：v10.17_r1.4。当输入该参数时，会创建此版本号对应的数据库内核。
注：该参数和DBVersion、DBMajorVersion只能传递一个，且需要传递一个。
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * 存储付费模式
 - PREPAID：预付费，即包年包月
 - POSTPAID_BY_HOUR：按小时后付费
默认为POSTPAID_BY_HOUR，实例付费模式为按小时付费时，存储付费模式不支持包年包月
         * @type {string || null}
         */
        this.StoragePayMode = null;

        /**
         * 存储最大使用量，单位GB。取值参考文档【购买指南】。存储使用预付费模式时必须设置，存储使用按小时后付费时不可设置
         * @type {number || null}
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.MasterUserPassword = 'MasterUserPassword' in params ? params.MasterUserPassword : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;

    }
}

/**
 * DeleteClusterInstances请求参数结构体
 * @class
 */
class DeleteClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * RestartClusterInstances返回参数结构体
 * @class
 */
class RestartClusterInstancesResponse extends  AbstractModel {
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
 * ModifyClusterInstancesSpec返回参数结构体
 * @class
 */
class ModifyClusterInstancesSpecResponse extends  AbstractModel {
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
 * CreateClusterInstances请求参数结构体
 * @class
 */
class CreateClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * CPU核数。取值参考文档【购买指南】
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 内存大小，单位GiB。取值参考文档【购买指南】
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."。不输入此参数时默认与InstanceId一致。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 新建实例的数量，默认为1。单集群下实例数量目前不能超过4个。
         * @type {number || null}
         */
        this.InstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

    }
}

/**
 * DescribeClusterRecoveryTimeRange返回参数结构体
 * @class
 */
class DescribeClusterRecoveryTimeRangeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可回档时间范围列表
         * @type {Array.<AvailableRecoveryTimeRange> || null}
         */
        this.AvailableRecoveryTimeRangeSet = null;

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

        if (params.AvailableRecoveryTimeRangeSet) {
            this.AvailableRecoveryTimeRangeSet = new Array();
            for (let z in params.AvailableRecoveryTimeRangeSet) {
                let obj = new AvailableRecoveryTimeRange();
                obj.deserialize(params.AvailableRecoveryTimeRangeSet[z]);
                this.AvailableRecoveryTimeRangeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterEndpoints返回参数结构体
 * @class
 */
class DescribeClusterEndpointsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 接入点列表
         * @type {Array.<Endpoint> || null}
         */
        this.EndpointSet = null;

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

        if (params.EndpointSet) {
            this.EndpointSet = new Array();
            for (let z in params.EndpointSet) {
                let obj = new Endpoint();
                obj.deserialize(params.EndpointSet[z]);
                this.EndpointSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourcesByDealName请求参数结构体
 * @class
 */
class DescribeResourcesByDealNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费订单id（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）
         * @type {string || null}
         */
        this.DealName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;

    }
}

/**
 * ModifyClusterEndpointWanStatus返回参数结构体
 * @class
 */
class ModifyClusterEndpointWanStatusResponse extends  AbstractModel {
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
 * ModifyClusterEndpointWanStatus请求参数结构体
 * @class
 */
class ModifyClusterEndpointWanStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 接入点ID
         * @type {string || null}
         */
        this.EndpointId = null;

        /**
         * 取值为： 
 - OPEN：开启外网 
 - CLOSE：关闭外网
         * @type {string || null}
         */
        this.WanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EndpointId = 'EndpointId' in params ? params.EndpointId : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;

    }
}

/**
 * RecoverCluster请求参数结构体
 * @class
 */
class RecoverClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
只有当PayMode为PREPAID时生效。
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * DescribeClusterInstances请求参数结构体
 * @class
 */
class DescribeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 页码，取值范围为[1,INF)，默认值为1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页个数，取值范围为默认为[1,100]，默认值为20
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 目前支持查询条件包括：
 - InstanceId : 实例ID
 - InstanceName : 实例名
 - EndpointId : 接入点ID
 - Status : 实例状态
 - InstanceType : 实例类型
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段，可选字段：
- CreateTime : 实例创建时间(默认值)
- PayPeriodEndTime : 实例过期时间
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式，可选字段：
- DESC : 降序(默认值)
- ASC : 升序
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DeleteCluster请求参数结构体
 * @class
 */
class DeleteClusterRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 数据库账户信息
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库账号名
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 数据库账号描述
         * @type {string || null}
         */
        this.AccountDescription = null;

        /**
         * 数据库账号创建时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 数据库账号信息更新时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AccountDescription = 'AccountDescription' in params ? params.AccountDescription : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 集群的连接点信息，包含访问数据库的相关网络信息
 * @class
 */
class Endpoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接点ID，集群内唯一
         * @type {string || null}
         */
        this.EndpointId = null;

        /**
         * 连接点所属的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 连接点名字，默认和连接点ID一致
         * @type {string || null}
         */
        this.EndpointName = null;

        /**
         * 连接点类型
 - RW : 读写
 - RO : 只读
         * @type {string || null}
         */
        this.EndpointType = null;

        /**
         * 私有网络VPC实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络VPC下子网实例ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 私有网络VPC下用于访问数据库的IP
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * 私有网络VPC下用于访问数据库的端口
         * @type {number || null}
         */
        this.PrivatePort = null;

        /**
         * 公共网络用户访问数据库的IP
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 公共网络用户访问数据库的端口
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * 公共网络用户访问数据库的域名
         * @type {string || null}
         */
        this.WanDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndpointId = 'EndpointId' in params ? params.EndpointId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EndpointName = 'EndpointName' in params ? params.EndpointName : null;
        this.EndpointType = 'EndpointType' in params ? params.EndpointType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.PrivatePort = 'PrivatePort' in params ? params.PrivatePort : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;

    }
}

/**
 * RecoverClusterInstances返回参数结构体
 * @class
 */
class RecoverClusterInstancesResponse extends  AbstractModel {
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
 * 资源ID信息，包括ClusterID和InstanceID
 * @class
 */
class ResourceIdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * RecoverCluster返回参数结构体
 * @class
 */
class RecoverClusterResponse extends  AbstractModel {
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
 * 过滤条件
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤条件值数组
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * true:精确匹配(默认值) false:(模糊匹配)
         * @type {boolean || null}
         */
        this.ExactMatch = null;

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
        this.ExactMatch = 'ExactMatch' in params ? params.ExactMatch : null;

    }
}

/**
 * DescribeClusterBackups返回参数结构体
 * @class
 */
class DescribeClusterBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 备份列表信息
         * @type {Array.<Backup> || null}
         */
        this.BackupSet = null;

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

        if (params.BackupSet) {
            this.BackupSet = new Array();
            for (let z in params.BackupSet) {
                let obj = new Backup();
                obj.deserialize(params.BackupSet[z]);
                this.BackupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccounts返回参数结构体
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 账号信息列表
         * @type {Array.<Account> || null}
         */
        this.AccountSet = null;

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

        if (params.AccountSet) {
            this.AccountSet = new Array();
            for (let z in params.AccountSet) {
                let obj = new Account();
                obj.deserialize(params.AccountSet[z]);
                this.AccountSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransformClusterPayMode请求参数结构体
 * @class
 */
class TransformClusterPayModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 当前付费模式，目前只支持：POSTPAID_BY_HOUR(按小时后付费)
         * @type {string || null}
         */
        this.CurrentPayMode = null;

        /**
         * 目标付费模式，目前只支持：PREPAID(预付费)
         * @type {string || null}
         */
        this.TargetPayMode = null;

        /**
         * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CurrentPayMode = 'CurrentPayMode' in params ? params.CurrentPayMode : null;
        this.TargetPayMode = 'TargetPayMode' in params ? params.TargetPayMode : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * 集群备份集信息
 * @class
 */
class Backup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份集ID，集群内唯一
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * 备份集类型，目前只支持 SNAPSHOT：快照
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * 备份集产生的方案，目前只支持 AUTO：自动
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * 备份集对应的数据时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.BackupDataTime = null;

        /**
         * 备份集数据大小，单位GiB
         * @type {number || null}
         */
        this.BackupDataSize = null;

        /**
         * 备份集对应的任务开始时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.BackupTaskStartTime = null;

        /**
         * 备份集对应的任务结束时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.BackupTaskEndTime = null;

        /**
         * 备份集对应的任务状态  SUCCESS：成功
         * @type {string || null}
         */
        this.BackupTaskStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupDataTime = 'BackupDataTime' in params ? params.BackupDataTime : null;
        this.BackupDataSize = 'BackupDataSize' in params ? params.BackupDataSize : null;
        this.BackupTaskStartTime = 'BackupTaskStartTime' in params ? params.BackupTaskStartTime : null;
        this.BackupTaskEndTime = 'BackupTaskEndTime' in params ? params.BackupTaskEndTime : null;
        this.BackupTaskStatus = 'BackupTaskStatus' in params ? params.BackupTaskStatus : null;

    }
}

/**
 * RenewCluster请求参数结构体
 * @class
 */
class RenewClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 续费时间，单位：月。取值范围为[1,60]，默认值为1。
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * DescribeClusterEndpoints请求参数结构体
 * @class
 */
class DescribeClusterEndpointsRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyClusterName返回参数结构体
 * @class
 */
class ModifyClusterNameResponse extends  AbstractModel {
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
 * IsolateClusterInstances返回参数结构体
 * @class
 */
class IsolateClusterInstancesResponse extends  AbstractModel {
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
 * RenewCluster返回参数结构体
 * @class
 */
class RenewClusterResponse extends  AbstractModel {
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
 * IsolateClusterInstances请求参数结构体
 * @class
 */
class IsolateClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * 集群下的实例信息
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，集群下唯一
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名字，默认和实例ID一致
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例所在的访问点ID
         * @type {string || null}
         */
        this.EndpointId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 数据库版本
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 实例状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例状态中文含义
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 实例创建时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 付费模式：
- PREPAID : 预付费
- POSTPAID_BY_HOUR : 按小时结算后付费

同一集群下付费模式需要保持一致。
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 实例到期时间。同一集群下到期时间需要保持一致。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.PayPeriodEndTime = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 内存大小，单位GiB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例类型
 - RW：读写实例
 - RO：只读实例
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * TDSQL-C PostgreSQL 合入的社区主要版本号
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * TDSQL-C PostgreSQL 内核版本号
         * @type {string || null}
         */
        this.DBKernelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EndpointId = 'EndpointId' in params ? params.EndpointId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayPeriodEndTime = 'PayPeriodEndTime' in params ? params.PayPeriodEndTime : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;

    }
}

/**
 * IsolateCluster返回参数结构体
 * @class
 */
class IsolateClusterResponse extends  AbstractModel {
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
 * ModifyAccountDescription请求参数结构体
 * @class
 */
class ModifyAccountDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 账号名字
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 账号描述，0-256个字符
         * @type {string || null}
         */
        this.AccountDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountDescription = 'AccountDescription' in params ? params.AccountDescription : null;

    }
}

/**
 * ModifyAccountDescription返回参数结构体
 * @class
 */
class ModifyAccountDescriptionResponse extends  AbstractModel {
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
 * IsolateCluster请求参数结构体
 * @class
 */
class IsolateClusterRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyClustersAutoRenewFlag请求参数结构体
 * @class
 */
class ModifyClustersAutoRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID列表
         * @type {Array.<string> || null}
         */
        this.ClusterIdSet = null;

        /**
         * 是否自动续费，0-不 1-是。默认为0，只有当集群的PayMode为PREPAID时生效。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIdSet = 'ClusterIdSet' in params ? params.ClusterIdSet : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * TransformClusterPayMode返回参数结构体
 * @class
 */
class TransformClusterPayModeResponse extends  AbstractModel {
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
 * 集群信息
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID，集群的唯一标识
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名字，不修改时默认和集群ID相同
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * TDSQL-C PostgreSQL 合入的社区版本号
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 集群状态。目前包括
 - creating ：创建中
 - running : 运行中
 - isolating : 隔离中
 - isolated : 已隔离
 - recovering : 恢复中
 - deleting : 删除中
 - deleted : 已删除
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 集群状态中文含义
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 集群创建时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 存储当前使用量，单位GiB
         * @type {number || null}
         */
        this.StorageUsed = null;

        /**
         * 存储最大使用量，单位GiB
         * @type {number || null}
         */
        this.StorageLimit = null;

        /**
         * 付费模式：
 - PREPAID : 预付费，即包年包月
 - POSTPAID_BY_HOUR : 按小时结算后付费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 预付费集群到期时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.PayPeriodEndTime = null;

        /**
         * 预付费集群自动续费标签
 - 0 : 到期不自动续费
 - 1 : 到期自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 数据库字符集
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * 集群内实例的数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 集群内访问点信息
         * @type {Array.<Endpoint> || null}
         */
        this.EndpointSet = null;

        /**
         * TDSQL-C PostgreSQL 合入的社区主要版本号
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * TDSQL-C PostgreSQL 内核版本号
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * 存储付费模式
 - PREPAID：预付费，即包年包月
 - POSTPAID_BY_HOUR：按小时后付费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StoragePayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StorageUsed = 'StorageUsed' in params ? params.StorageUsed : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayPeriodEndTime = 'PayPeriodEndTime' in params ? params.PayPeriodEndTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

        if (params.EndpointSet) {
            this.EndpointSet = new Array();
            for (let z in params.EndpointSet) {
                let obj = new Endpoint();
                obj.deserialize(params.EndpointSet[z]);
                this.EndpointSet.push(obj);
            }
        }
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;

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
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群列表信息
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
 * DescribeResourcesByDealName返回参数结构体
 * @class
 */
class DescribeResourcesByDealNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID信息列表
         * @type {Array.<ResourceIdInfo> || null}
         */
        this.ResourceIdInfoSet = null;

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

        if (params.ResourceIdInfoSet) {
            this.ResourceIdInfoSet = new Array();
            for (let z in params.ResourceIdInfoSet) {
                let obj = new ResourceIdInfo();
                obj.deserialize(params.ResourceIdInfoSet[z]);
                this.ResourceIdInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloneClusterToPointInTime请求参数结构体
 * @class
 */
class CloneClusterToPointInTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 数据库版本，目前仅支持 10.17
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * CPU核数。取值参考文档【购买指南】
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 内存大小，单位GiB。取值参考文档【购买指南】
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 已配置的私有网络中的子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 集群付费模式
- PREPAID：预付费，即包年包月
- POSTPAID_BY_HOUR：按小时后付费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 对应的备份数据来源集群ID
         * @type {string || null}
         */
        this.SourceClusterId = null;

        /**
         * 对应的备份数据时间点。按照RFC3339标准表示，并且使用东八区时区时间。格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.SourceDataPoint = null;

        /**
         * 集群名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."。不输入此参数时默认与ClusterId保持一致。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 项目Id，默认为0表示默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 连接数据库时，Endpoint使用的端口。取值范围为[1,65534]，默认值为5432
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 集群下实例数量。取值范围为[1,4]，默认值为1
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 购买时长，单位：月。取值范围为[1,60]，默认值为1。
只有当PayMode为PREPAID时生效。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动续费，0-不 1-是。默认为0，只有当PayMode为PREPAID时生效。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 存储付费模式
 - PREPAID：预付费，即包年包月
 - POSTPAID_BY_HOUR：按小时后付费
默认为POSTPAID_BY_HOUR，实例付费模式为按小时付费时，存储付费模式不支持包年包月
         * @type {string || null}
         */
        this.StoragePayMode = null;

        /**
         * 存储最大使用量，单位GB。取值参考文档【购买指南】。存储使用预付费模式时必须设置，存储使用按小时后付费时不可设置
         * @type {number || null}
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SourceClusterId = 'SourceClusterId' in params ? params.SourceClusterId : null;
        this.SourceDataPoint = 'SourceDataPoint' in params ? params.SourceDataPoint : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.StoragePayMode = 'StoragePayMode' in params ? params.StoragePayMode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;

    }
}

/**
 * DescribeClusterRecoveryTimeRange请求参数结构体
 * @class
 */
class DescribeClusterRecoveryTimeRangeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 期望的回档时间点，传入从集群创建时间到当前时间之间的时间点。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。
         * @type {string || null}
         */
        this.DataPoint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DataPoint = 'DataPoint' in params ? params.DataPoint : null;

    }
}

/**
 * DescribeAccounts请求参数结构体
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

module.exports = {
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    ModifyClusterNameRequest: ModifyClusterNameRequest,
    ModifyClustersAutoRenewFlagResponse: ModifyClustersAutoRenewFlagResponse,
    DescribeClustersRequest: DescribeClustersRequest,
    DeleteClusterInstancesResponse: DeleteClusterInstancesResponse,
    ModifyClusterInstancesSpecRequest: ModifyClusterInstancesSpecRequest,
    DescribeClusterBackupsRequest: DescribeClusterBackupsRequest,
    AvailableRecoveryTimeRange: AvailableRecoveryTimeRange,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeClusterInstancesResponse: DescribeClusterInstancesResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    CreateClusterInstancesResponse: CreateClusterInstancesResponse,
    RestartClusterInstancesRequest: RestartClusterInstancesRequest,
    CreateClusterResponse: CreateClusterResponse,
    RecoverClusterInstancesRequest: RecoverClusterInstancesRequest,
    CloneClusterToPointInTimeResponse: CloneClusterToPointInTimeResponse,
    CreateClusterRequest: CreateClusterRequest,
    DeleteClusterInstancesRequest: DeleteClusterInstancesRequest,
    RestartClusterInstancesResponse: RestartClusterInstancesResponse,
    ModifyClusterInstancesSpecResponse: ModifyClusterInstancesSpecResponse,
    CreateClusterInstancesRequest: CreateClusterInstancesRequest,
    DescribeClusterRecoveryTimeRangeResponse: DescribeClusterRecoveryTimeRangeResponse,
    DescribeClusterEndpointsResponse: DescribeClusterEndpointsResponse,
    DescribeResourcesByDealNameRequest: DescribeResourcesByDealNameRequest,
    ModifyClusterEndpointWanStatusResponse: ModifyClusterEndpointWanStatusResponse,
    ModifyClusterEndpointWanStatusRequest: ModifyClusterEndpointWanStatusRequest,
    RecoverClusterRequest: RecoverClusterRequest,
    DescribeClusterInstancesRequest: DescribeClusterInstancesRequest,
    DeleteClusterRequest: DeleteClusterRequest,
    Account: Account,
    Endpoint: Endpoint,
    RecoverClusterInstancesResponse: RecoverClusterInstancesResponse,
    ResourceIdInfo: ResourceIdInfo,
    RecoverClusterResponse: RecoverClusterResponse,
    Filter: Filter,
    DescribeClusterBackupsResponse: DescribeClusterBackupsResponse,
    DescribeAccountsResponse: DescribeAccountsResponse,
    TransformClusterPayModeRequest: TransformClusterPayModeRequest,
    Backup: Backup,
    RenewClusterRequest: RenewClusterRequest,
    DescribeClusterEndpointsRequest: DescribeClusterEndpointsRequest,
    ModifyClusterNameResponse: ModifyClusterNameResponse,
    IsolateClusterInstancesResponse: IsolateClusterInstancesResponse,
    RenewClusterResponse: RenewClusterResponse,
    IsolateClusterInstancesRequest: IsolateClusterInstancesRequest,
    Instance: Instance,
    IsolateClusterResponse: IsolateClusterResponse,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    IsolateClusterRequest: IsolateClusterRequest,
    ModifyClustersAutoRenewFlagRequest: ModifyClustersAutoRenewFlagRequest,
    TransformClusterPayModeResponse: TransformClusterPayModeResponse,
    Cluster: Cluster,
    DescribeClustersResponse: DescribeClustersResponse,
    DescribeResourcesByDealNameResponse: DescribeResourcesByDealNameResponse,
    CloneClusterToPointInTimeRequest: CloneClusterToPointInTimeRequest,
    DescribeClusterRecoveryTimeRangeRequest: DescribeClusterRecoveryTimeRangeRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,

}
