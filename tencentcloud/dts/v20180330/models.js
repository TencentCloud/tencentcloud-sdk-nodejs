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
 * DescribeSyncJobs返回参数结构体
 * @class
 */
class DescribeSyncJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务数目
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务详情数组
         * @type {Array.<SyncJobInfo> || null}
         */
        this.JobList = null;

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

        if (params.JobList) {
            this.JobList = new Array();
            for (let z in params.JobList) {
                let obj = new SyncJobInfo();
                obj.deserialize(params.JobList[z]);
                this.JobList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrateJobs返回参数结构体
 * @class
 */
class DescribeMigrateJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务数目
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务详情数组
         * @type {Array.<MigrateJobInfo> || null}
         */
        this.JobList = null;

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

        if (params.JobList) {
            this.JobList = new Array();
            for (let z in params.JobList) {
                let obj = new MigrateJobInfo();
                obj.deserialize(params.JobList[z]);
                this.JobList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述详细迁移过程
 * @class
 */
class MigrateDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总步骤数
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * 当前步骤
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * 总进度,如："10"
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * 当前步骤进度,如:"1"
         * @type {string || null}
         */
        this.CurrentStepProgress = null;

        /**
         * 主从差距，MB；在增量同步阶段有效，目前支持产品为：redis和mysql
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * 主从差距，秒；在增量同步阶段有效，目前支持产品为：mysql
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * 步骤信息
         * @type {Array.<MigrateStepDetailInfo> || null}
         */
        this.StepInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepAll = 'StepAll' in params ? params.StepAll : null;
        this.StepNow = 'StepNow' in params ? params.StepNow : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CurrentStepProgress = 'CurrentStepProgress' in params ? params.CurrentStepProgress : null;
        this.MasterSlaveDistance = 'MasterSlaveDistance' in params ? params.MasterSlaveDistance : null;
        this.SecondsBehindMaster = 'SecondsBehindMaster' in params ? params.SecondsBehindMaster : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new MigrateStepDetailInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteMigrateJob返回参数结构体
 * @class
 */
class DeleteMigrateJobResponse extends  AbstractModel {
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
 * CreateMigrateCheckJob请求参数结构体
 * @class
 */
class CreateMigrateCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
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
 * ModifySubscribeVipVport请求参数结构体
 * @class
 */
class ModifySubscribeVipVportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅实例的ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * 指定目的子网，如果传此参数，DstIp必须在目的子网内
         * @type {string || null}
         */
        this.DstUniqSubnetId = null;

        /**
         * 目标IP，与DstPort至少传一个
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * 目标PORT，支持范围为：[1025-65535]
         * @type {number || null}
         */
        this.DstPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.DstUniqSubnetId = 'DstUniqSubnetId' in params ? params.DstUniqSubnetId : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;

    }
}

/**
 * 灾备同步的实例信息，记录主实例或灾备实例的信息
 * @class
 */
class SyncInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域英文名，如：ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例短ID
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
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifySubscribeName返回参数结构体
 * @class
 */
class ModifySubscribeNameResponse extends  AbstractModel {
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
 * CreateSyncJob返回参数结构体
 * @class
 */
class CreateSyncJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备同步任务ID
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
 * DescribeMigrateCheckJob请求参数结构体
 * @class
 */
class DescribeMigrateCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
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
 * IsolateSubscribe返回参数结构体
 * @class
 */
class IsolateSubscribeResponse extends  AbstractModel {
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
 * ModifySubscribeObjects返回参数结构体
 * @class
 */
class ModifySubscribeObjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的ID
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchDrToMaster请求参数结构体
 * @class
 */
class SwitchDrToMasterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备实例的信息
         * @type {SyncInstanceInfo || null}
         */
        this.DstInfo = null;

        /**
         * 数据库的类型  （如 mysql）
         * @type {string || null}
         */
        this.DatabaseType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DstInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseType = 'DatabaseType' in params ? params.DatabaseType : null;

    }
}

/**
 * StartSyncJob请求参数结构体
 * @class
 */
class StartSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备同步任务ID
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
 * CreateMigrateJob请求参数结构体
 * @class
 */
class CreateMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 迁移任务配置选项
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * 源实例数据库类型，目前支持：mysql，redis，mongodb，postgresql，mariadb，percona。不同地域数据库类型的具体支持情况，请参考控制台创建迁移页面。
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 源实例接入类型，值包括：extranet(外网),cvm(CVM自建实例),dcg(专线接入的实例),vpncloud(云VPN接入的实例),cdb(腾讯云数据库实例),ccn(云联网实例)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源实例信息，具体内容跟迁移任务类型相关
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标实例数据库类型，目前支持：mysql，redis，mongodb，postgresql，mariadb，percona。不同地域数据库类型的具体支持情况，请参考控制台创建迁移页面。
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * 目标实例接入类型，目前支持：cdb（腾讯云数据库实例）
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 目标实例信息
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * 需要迁移的源数据库表信息，用json格式的字符串描述。当MigrateOption.MigrateObject配置为2（指定库表迁移）时必填。
对于database-table两级结构的数据库：
[{Database:db1,Table:[table1,table2]},{Database:db2}]
对于database-schema-table三级结构：
[{Database:db1,Schema:s1
Table:[table1,table2]},{Database:db1,Schema:s2
Table:[table1,table2]},{Database:db2,Schema:s1
Table:[table1,table2]},{Database:db3},{Database:db4
Schema:s1}]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * 订阅实例信息
 * @class
 */
class SubscribeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅的实例ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * 数据订阅实例的名称
         * @type {string || null}
         */
        this.SubscribeName = null;

        /**
         * 数据订阅实例绑定的通道ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 数据订阅绑定实例对应的产品名称
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 数据订阅实例绑定的数据库实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据订阅实例绑定的数据库实例状态
         * @type {string || null}
         */
        this.InstanceStatus = null;

        /**
         * 数据订阅实例的配置状态，unconfigure - 未配置， configuring - 配置中，configured - 已配置
         * @type {string || null}
         */
        this.SubsStatus = null;

        /**
         * 上次修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 隔离时间
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 下线时间
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * 最近一次修改的消费时间起点，如果从未修改则为零值
         * @type {string || null}
         */
        this.ConsumeStartTime = null;

        /**
         * 数据订阅实例所属地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 计费方式，0 - 包年包月，1 - 按量计费
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * 数据订阅实例的Vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 数据订阅实例的Vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 数据订阅实例Vip所在VPC的唯一ID
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 数据订阅实例Vip所在子网的唯一ID
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 数据订阅实例的状态，creating - 创建中，normal - 正常运行，isolating - 隔离中，isolated - 已隔离，offlining - 下线中，offline - 已下线
         * @type {string || null}
         */
        this.Status = null;

        /**
         * SDK最后一条确认消息的时间戳，如果SDK一直消费，也可以作为SDK当前消费时间点
         * @type {string || null}
         */
        this.SdkConsumedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeName = 'SubscribeName' in params ? params.SubscribeName : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.SubsStatus = 'SubsStatus' in params ? params.SubsStatus : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.ConsumeStartTime = 'ConsumeStartTime' in params ? params.ConsumeStartTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SdkConsumedTime = 'SdkConsumedTime' in params ? params.SdkConsumedTime : null;

    }
}

/**
 * ModifySubscribeName请求参数结构体
 * @class
 */
class ModifySubscribeNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅实例的ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * 数据订阅实例的名称，长度限制为[1,60]
         * @type {string || null}
         */
        this.SubscribeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeName = 'SubscribeName' in params ? params.SubscribeName : null;

    }
}

/**
 * 灾备同步任务信息
 * @class
 */
class SyncJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备任务id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 灾备任务名
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 任务同步
         * @type {SyncOption || null}
         */
        this.SyncOption = null;

        /**
         * 源接入类型
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源数据类型
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 源实例信息
         * @type {SyncInstanceInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 灾备接入类型
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 灾备数据类型
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * 灾备实例信息
         * @type {SyncInstanceInfo || null}
         */
        this.DstInfo = null;

        /**
         * 任务信息
         * @type {SyncDetailInfo || null}
         */
        this.Detail = null;

        /**
         * 任务状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 迁移库表
         * @type {string || null}
         */
        this.DatabaseInfo = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.SyncOption) {
            let obj = new SyncOption();
            obj.deserialize(params.SyncOption)
            this.SyncOption = obj;
        }
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;

        if (params.SrcInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;

        if (params.DstInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

        if (params.Detail) {
            let obj = new SyncDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifySubscribeConsumeTime返回参数结构体
 * @class
 */
class ModifySubscribeConsumeTimeResponse extends  AbstractModel {
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
 * 目的实例信息，具体内容跟迁移任务类型相关
 * @class
 */
class DstInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标实例ID，如cdb-jd92ijd8
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 目标实例地域，如ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 目标实例vip。已废弃，无需填写
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 目标实例vport。已废弃，无需填写
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 目前只对MySQL有效。当为整实例迁移时，1-只读，0-可读写。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 目标数据库账号
         * @type {string || null}
         */
        this.User = null;

        /**
         * 目标数据库密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeSubscribeConf返回参数结构体
 * @class
 */
class DescribeSubscribeConfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅实例ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * 订阅实例名称
         * @type {string || null}
         */
        this.SubscribeName = null;

        /**
         * 订阅通道
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 订阅数据库类型
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 被订阅的实例
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 被订阅的实例的状态，可能的值有running,offline,isolate
         * @type {string || null}
         */
        this.InstanceStatus = null;

        /**
         * 订阅实例状态，可能的值有unconfigure-未配置，configuring-配置中，configured-已配置
         * @type {string || null}
         */
        this.SubsStatus = null;

        /**
         * 订阅实例生命周期状态，可能的值有：normal-正常，isolating-隔离中，isolated-已隔离，offlining-下线中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 订阅实例创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 订阅实例被隔离时间
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * 订阅实例到期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 订阅实例下线时间
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * 订阅实例消费时间起点。
         * @type {string || null}
         */
        this.ConsumeStartTime = null;

        /**
         * 订阅实例计费类型，1-小时计费，0-包年包月
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * 订阅通道Vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 订阅通道Port
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 订阅通道所在VpcId
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 订阅通道所在SubnetId
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 当前SDK消费时间位点
         * @type {string || null}
         */
        this.SdkConsumedTime = null;

        /**
         * 订阅SDK IP地址
         * @type {string || null}
         */
        this.SdkHost = null;

        /**
         * 订阅对象类型0-全实例订阅，1-DDL数据订阅，2-DML结构订阅，3-DDL数据订阅+DML结构订阅
         * @type {number || null}
         */
        this.SubscribeObjectType = null;

        /**
         * 订阅对象，当SubscribeObjectType 为0时，此字段为空数组
         * @type {Array.<SubscribeObject> || null}
         */
        this.SubscribeObjects = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

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
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeName = 'SubscribeName' in params ? params.SubscribeName : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.SubsStatus = 'SubsStatus' in params ? params.SubsStatus : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.ConsumeStartTime = 'ConsumeStartTime' in params ? params.ConsumeStartTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.SdkConsumedTime = 'SdkConsumedTime' in params ? params.SdkConsumedTime : null;
        this.SdkHost = 'SdkHost' in params ? params.SdkHost : null;
        this.SubscribeObjectType = 'SubscribeObjectType' in params ? params.SubscribeObjectType : null;

        if (params.SubscribeObjects) {
            this.SubscribeObjects = new Array();
            for (let z in params.SubscribeObjects) {
                let obj = new SubscribeObject();
                obj.deserialize(params.SubscribeObjects[z]);
                this.SubscribeObjects.push(obj);
            }
        }
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAsyncRequestInfo请求参数结构体
 * @class
 */
class DescribeAsyncRequestInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * 源实例信息
 * @class
 */
class SrcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阿里云AccessKey。源库是阿里云RDS5.6适用
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * 实例的IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 实例的端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 实例的用户名
         * @type {string || null}
         */
        this.User = null;

        /**
         * 实例的密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 阿里云RDS实例ID。源库是阿里云RDS5.6/5.6适用
         * @type {string || null}
         */
        this.RdsInstanceId = null;

        /**
         * CVM实例短ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要传递此字段
         * @type {string || null}
         */
        this.CvmInstanceId = null;

        /**
         * 专线网关ID，格式如：dcg-0rxtqqxb
         * @type {string || null}
         */
        this.UniqDcgId = null;

        /**
         * 私有网络ID，格式如：vpc-92jblxto
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网ID，格式如：subnet-3paxmkdz
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPN网关ID，格式如：vpngw-9ghexg7q
         * @type {string || null}
         */
        this.UniqVpnGwId = null;

        /**
         * 数据库实例ID，格式如：cdb-powiqx8q
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 地域英文名，如：ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 当实例为RDS实例时，填写为aliyun, 其他情况均填写others
         * @type {string || null}
         */
        this.Supplier = null;

        /**
         * 云联网ID，如：ccn-afp6kltc
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 数据库版本，当实例为RDS实例时才有效，格式如：5.6或者5.7，默认为5.6
         * @type {string || null}
         */
        this.EngineVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.RdsInstanceId = 'RdsInstanceId' in params ? params.RdsInstanceId : null;
        this.CvmInstanceId = 'CvmInstanceId' in params ? params.CvmInstanceId : null;
        this.UniqDcgId = 'UniqDcgId' in params ? params.UniqDcgId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.UniqVpnGwId = 'UniqVpnGwId' in params ? params.UniqVpnGwId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Supplier = 'Supplier' in params ? params.Supplier : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;

    }
}

/**
 * 抽样检验时的抽样参数
 * @class
 */
class ConsistencyParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据内容检测参数。表中选出用来数据对比的行，占表的总行数的百分比。取值范围是整数[1-100]
         * @type {number || null}
         */
        this.SelectRowsPerTable = null;

        /**
         * 数据内容检测参数。迁移库表中，要进行数据内容检测的表，占所有表的百分比。取值范围是整数[1-100]
         * @type {number || null}
         */
        this.TablesSelectAll = null;

        /**
         * 数据数量检测，检测表行数是否一致。迁移库表中，要进行数据数量检测的表，占所有表的百分比。取值范围是整数[1-100]
         * @type {number || null}
         */
        this.TablesSelectCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SelectRowsPerTable = 'SelectRowsPerTable' in params ? params.SelectRowsPerTable : null;
        this.TablesSelectAll = 'TablesSelectAll' in params ? params.TablesSelectAll : null;
        this.TablesSelectCount = 'TablesSelectCount' in params ? params.TablesSelectCount : null;

    }
}

/**
 * ModifyMigrateJob请求参数结构体
 * @class
 */
class ModifyMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的数据迁移任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 数据迁移任务名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 迁移任务配置选项
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * 源实例接入类型，值包括：extranet(外网),cvm(CVM自建实例),dcg(专线接入的实例),vpncloud(云VPN接入的实例),cdb(云上CDB实例)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源实例信息，具体内容跟迁移任务类型相关
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标实例接入类型，值包括：extranet(外网),cvm(CVM自建实例),dcg(专线接入的实例),vpncloud(云VPN接入的实例)，cdb(云上CDB实例). 目前只支持cdb.
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 目标实例信息, 其中目标实例地域不允许修改.
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * 当选择'指定库表'迁移的时候, 需要设置待迁移的源数据库表信息,用符合json数组格式的字符串描述, 如下所例。

对于database-table两级结构的数据库：
[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]
对于database-schema-table三级结构：
[{"Database":"db1","Schema":"s1","Table":["table1","table2"]},{"Database":"db1","Schema":"s2","Table":["table1","table2"]},{"Database":"db2","Schema":"s1","Table":["table1","table2"]},{"Database":"db3"},{"Database":"db4","Schema":"s1"}]

如果是'整个实例'的迁移模式,不需设置该字段
         * @type {string || null}
         */
        this.DatabaseInfo = null;

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

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * CreateSubscribe请求参数结构体
 * @class
 */
class CreateSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅的数据库类型，目前支持的有 mysql
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 实例付费类型，1小时计费，0包年包月
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * 购买时长。PayType为0时必填。单位为月，最大支持120
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 购买数量,默认为1，最大为10
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 是否自动续费，默认为0，1表示自动续费。小时计费实例设置该标识无效。
         * @type {number || null}
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * CreateMigrateCheckJob返回参数结构体
 * @class
 */
class CreateMigrateCheckJobResponse extends  AbstractModel {
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
 * 迁移中的步骤信息
 * @class
 */
class MigrateStepDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤序列
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * 步骤展现名称
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * 步骤英文标识
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * 步骤状态:0-默认值,1-成功,2-失败,3-执行中,4-未执行
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 当前步骤开始的时间，格式为"yyyy-mm-dd hh:mm:ss"，该字段不存在或者为空是无意义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.StepId = 'StepId' in params ? params.StepId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * ModifySubscribeObjects请求参数结构体
 * @class
 */
class ModifySubscribeObjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅实例的ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * 数据订阅的类型，可选的值有：0 - 全实例订阅；1 - 数据订阅；2 - 结构订阅；3 - 数据订阅+结构订阅
         * @type {number || null}
         */
        this.SubscribeObjectType = null;

        /**
         * 订阅的数据库表信息
         * @type {Array.<SubscribeObject> || null}
         */
        this.Objects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeObjectType = 'SubscribeObjectType' in params ? params.SubscribeObjectType : null;

        if (params.Objects) {
            this.Objects = new Array();
            for (let z in params.Objects) {
                let obj = new SubscribeObject();
                obj.deserialize(params.Objects[z]);
                this.Objects.push(obj);
            }
        }

    }
}

/**
 * DescribeMigrateCheckJob返回参数结构体
 * @class
 */
class DescribeMigrateCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 校验任务状态：unavailable(当前不可用), starting(开始中)，running(校验中)，finished(校验完成)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务的错误码
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 任务的错误信息
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Check任务总进度,如："30"表示30%
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * 校验是否通过,0-未通过，1-校验通过, 3-未校验
         * @type {number || null}
         */
        this.CheckFlag = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据订阅地域售卖信息
 * @class
 */
class SubscribeRegionConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域名称，如广州
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地区标识，如ap-guangzhou
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域名称，如华南地区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 是否为默认地域，0 - 不是，1 - 是的
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsDefaultRegion = null;

        /**
         * 当前地域的售卖情况，1 - 正常， 2-灰度，3 - 停售
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.IsDefaultRegion = 'IsDefaultRegion' in params ? params.IsDefaultRegion : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ActivateSubscribe请求参数结构体
 * @class
 */
class ActivateSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅实例ID。
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * 数据库实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据订阅类型0-全实例订阅，1数据订阅，2结构订阅，3数据订阅与结构订阅
         * @type {number || null}
         */
        this.SubscribeObjectType = null;

        /**
         * 订阅对象
         * @type {SubscribeObject || null}
         */
        this.Objects = null;

        /**
         * 数据订阅服务所在子网。默认为数据库实例所在的子网内。
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 订阅服务端口；默认为7507
         * @type {number || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SubscribeObjectType = 'SubscribeObjectType' in params ? params.SubscribeObjectType : null;

        if (params.Objects) {
            let obj = new SubscribeObject();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * OfflineIsolatedSubscribe请求参数结构体
 * @class
 */
class OfflineIsolatedSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅实例的ID
         * @type {string || null}
         */
        this.SubscribeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;

    }
}

/**
 * DescribeSubscribes请求参数结构体
 * @class
 */
class DescribeSubscribesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅的实例ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * 数据订阅的实例名称
         * @type {string || null}
         */
        this.SubscribeName = null;

        /**
         * 绑定数据库实例的ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据订阅实例的通道ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 计费模式筛选，可能的值：0-包年包月，1-按量计费
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * 订阅的数据库产品，如mysql
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 数据订阅实例的状态，creating - 创建中，normal - 正常运行，isolating - 隔离中，isolated - 已隔离，offlining - 下线中
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * 数据订阅实例的配置状态，unconfigure - 未配置， configuring - 配置中，configured - 已配置
         * @type {Array.<string> || null}
         */
        this.SubsStatus = null;

        /**
         * 返回记录的起始偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次返回的记录数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序方向，可选的值为"DESC"和"ASC"，默认为"DESC"，按创建时间逆序排序
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.SubscribeName = 'SubscribeName' in params ? params.SubscribeName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SubsStatus = 'SubsStatus' in params ? params.SubsStatus : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * ResetSubscribe返回参数结构体
 * @class
 */
class ResetSubscribeResponse extends  AbstractModel {
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
 * StartSyncJob返回参数结构体
 * @class
 */
class StartSyncJobResponse extends  AbstractModel {
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
 * DescribeSubscribes返回参数结构体
 * @class
 */
class DescribeSubscribesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据订阅实例的信息列表
         * @type {Array.<SubscribeInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SubscribeInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 灾备任务校验步骤
 * @class
 */
class SyncCheckStepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤序列
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * 步骤展现名称
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * 步骤执行结果代码
         * @type {number || null}
         */
        this.StepCode = null;

        /**
         * 步骤执行结果提示
         * @type {string || null}
         */
        this.StepMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.StepCode = 'StepCode' in params ? params.StepCode : null;
        this.StepMessage = 'StepMessage' in params ? params.StepMessage : null;

    }
}

/**
 * CreateSyncCheckJob返回参数结构体
 * @class
 */
class CreateSyncCheckJobResponse extends  AbstractModel {
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
 * StopMigrateJob请求参数结构体
 * @class
 */
class StopMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
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
 * DescribeSyncCheckJob请求参数结构体
 * @class
 */
class DescribeSyncCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的灾备同步任务ID
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
 * DescribeRegionConf返回参数结构体
 * @class
 */
class DescribeRegionConfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可售卖地域的数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可售卖地域详情
         * @type {Array.<SubscribeRegionConf> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SubscribeRegionConf();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySyncJob返回参数结构体
 * @class
 */
class ModifySyncJobResponse extends  AbstractModel {
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
 * DescribeAsyncRequestInfo返回参数结构体
 * @class
 */
class DescribeAsyncRequestInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行结果信息
         * @type {string || null}
         */
        this.Info = null;

        /**
         * 任务执行状态，可能的值有：success，failed，running
         * @type {string || null}
         */
        this.Status = null;

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
        this.Info = 'Info' in params ? params.Info : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CompleteMigrateJob请求参数结构体
 * @class
 */
class CompleteMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
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
 * ResetSubscribe请求参数结构体
 * @class
 */
class ResetSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅实例的ID
         * @type {string || null}
         */
        this.SubscribeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;

    }
}

/**
 * ModifySubscribeConsumeTime请求参数结构体
 * @class
 */
class ModifySubscribeConsumeTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅实例的ID
         * @type {string || null}
         */
        this.SubscribeId = null;

        /**
         * 消费时间起点，也即是指定订阅数据的时间起点，时间格式如：Y-m-d h:m:s，取值范围为过去24小时之内
         * @type {string || null}
         */
        this.ConsumeStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;
        this.ConsumeStartTime = 'ConsumeStartTime' in params ? params.ConsumeStartTime : null;

    }
}

/**
 * SwitchDrToMaster返回参数结构体
 * @class
 */
class SwitchDrToMasterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后台异步任务请求id
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMigrateJob返回参数结构体
 * @class
 */
class ModifyMigrateJobResponse extends  AbstractModel {
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
 * CreateSyncJob请求参数结构体
 * @class
 */
class CreateSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备同步任务名
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 灾备同步任务配置选项
         * @type {SyncOption || null}
         */
        this.SyncOption = null;

        /**
         * 源实例数据库类型，目前仅包括：mysql
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 源实例接入类型，目前仅包括：cdb(云上cdb实例)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源实例信息
         * @type {SyncInstanceInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标实例数据库类型，目前仅包括：mysql
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * 目标实例接入类型，目前仅包括：cdb(云上cdb实例)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 目标实例信息
         * @type {SyncInstanceInfo || null}
         */
        this.DstInfo = null;

        /**
         * 需要同步的源数据库表信息，用json格式的字符串描述。
对于database-table两级结构的数据库：
[{Database:db1,Table:[table1,table2]},{Database:db2}]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.SyncOption) {
            let obj = new SyncOption();
            obj.deserialize(params.SyncOption)
            this.SyncOption = obj;
        }
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new SyncInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * DescribeSyncJobs请求参数结构体
 * @class
 */
class DescribeSyncJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备同步任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 灾备同步任务名
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 排序字段，可以取值为JobId、Status、JobName、CreateTime
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序方式，升序为ASC，降序为DESC
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回实例数量，默认20，有效区间[1,100]
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
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderSeq = 'OrderSeq' in params ? params.OrderSeq : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeMigrateJobs请求参数结构体
 * @class
 */
class DescribeMigrateJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 数据迁移任务名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 排序字段，可以取值为JobId、Status、JobName、MigrateType、RunMode、CreateTime
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序方式，升序为ASC，降序为DESC
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回实例数量，默认20，有效区间[1,100]
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
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderSeq = 'OrderSeq' in params ? params.OrderSeq : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 描述详细同步任务过程
 * @class
 */
class SyncDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总步骤数
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * 当前步骤
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * 总进度
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * 当前步骤进度
         * @type {string || null}
         */
        this.CurrentStepProgress = null;

        /**
         * 主从差距，MB
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * 主从差距，秒
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * 步骤信息
         * @type {Array.<SyncStepDetailInfo> || null}
         */
        this.StepInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepAll = 'StepAll' in params ? params.StepAll : null;
        this.StepNow = 'StepNow' in params ? params.StepNow : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.CurrentStepProgress = 'CurrentStepProgress' in params ? params.CurrentStepProgress : null;
        this.MasterSlaveDistance = 'MasterSlaveDistance' in params ? params.MasterSlaveDistance : null;
        this.SecondsBehindMaster = 'SecondsBehindMaster' in params ? params.SecondsBehindMaster : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new SyncStepDetailInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }

    }
}

/**
 * StopMigrateJob返回参数结构体
 * @class
 */
class StopMigrateJobResponse extends  AbstractModel {
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
 * 灾备同步任务配置选项
 * @class
 */
class SyncOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步对象，1-整个实例，2-指定库表
         * @type {number || null}
         */
        this.SyncObject = null;

        /**
         * 同步开始设置，1-立即开始
         * @type {number || null}
         */
        this.RunMode = null;

        /**
         * 同步模式， 3-全量且增量同步
         * @type {number || null}
         */
        this.SyncType = null;

        /**
         * 数据一致性检测， 1-无需配置
         * @type {number || null}
         */
        this.ConsistencyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SyncObject = 'SyncObject' in params ? params.SyncObject : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.SyncType = 'SyncType' in params ? params.SyncType : null;
        this.ConsistencyType = 'ConsistencyType' in params ? params.ConsistencyType : null;

    }
}

/**
 * OfflineIsolatedSubscribe返回参数结构体
 * @class
 */
class OfflineIsolatedSubscribeResponse extends  AbstractModel {
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
 * 同步任务进度
 * @class
 */
class SyncStepDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤编号
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * 步骤名
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * 能否中止
         * @type {number || null}
         */
        this.CanStop = null;

        /**
         * 步骤号
         * @type {number || null}
         */
        this.StepId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.CanStop = 'CanStop' in params ? params.CanStop : null;
        this.StepId = 'StepId' in params ? params.StepId : null;

    }
}

/**
 * IsolateSubscribe请求参数结构体
 * @class
 */
class IsolateSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅实例ID
         * @type {string || null}
         */
        this.SubscribeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;

    }
}

/**
 * DeleteSyncJob返回参数结构体
 * @class
 */
class DeleteSyncJobResponse extends  AbstractModel {
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
 * CreateSyncCheckJob请求参数结构体
 * @class
 */
class CreateSyncCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备同步任务ID
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
 * ModifySyncJob请求参数结构体
 * @class
 */
class ModifySyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的灾备同步任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 灾备同步任务名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 灾备同步任务配置选项
         * @type {SyncOption || null}
         */
        this.SyncOption = null;

        /**
         * 当选择'指定库表'灾备同步的时候, 需要设置待同步的源数据库表信息,用符合json数组格式的字符串描述, 如下所例。
对于database-table两级结构的数据库：
[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

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

        if (params.SyncOption) {
            let obj = new SyncOption();
            obj.deserialize(params.SyncOption)
            this.SyncOption = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;

    }
}

/**
 * DescribeRegionConf请求参数结构体
 * @class
 */
class DescribeRegionConfRequest extends  AbstractModel {
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
 * CompleteMigrateJob返回参数结构体
 * @class
 */
class CompleteMigrateJobResponse extends  AbstractModel {
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
 * StartMigrateJob返回参数结构体
 * @class
 */
class StartMigrateJobResponse extends  AbstractModel {
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
 * 数据数据订阅的对象
 * @class
 */
class SubscribeObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅对象的类型，0-数据库，1-数据库内的表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ObjectsType = null;

        /**
         * 订阅数据库的名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 订阅数据库中表名称数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TableNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ObjectsType = 'ObjectsType' in params ? params.ObjectsType : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.TableNames = 'TableNames' in params ? params.TableNames : null;

    }
}

/**
 * CreateMigrateJob返回参数结构体
 * @class
 */
class CreateMigrateJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
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
 * DescribeSubscribeConf请求参数结构体
 * @class
 */
class DescribeSubscribeConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅实例ID
         * @type {string || null}
         */
        this.SubscribeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeId = 'SubscribeId' in params ? params.SubscribeId : null;

    }
}

/**
 * ModifySubscribeVipVport返回参数结构体
 * @class
 */
class ModifySubscribeVipVportResponse extends  AbstractModel {
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
 * 迁移任务详情
 * @class
 */
class MigrateJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 数据迁移任务名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 迁移任务配置选项
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * 源实例数据库类型:mysql，redis，mongodb，postgresql，mariadb，percona
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 源实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),cdb(腾讯云数据库实例),ccn(云联网实例)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源实例信息，具体内容跟迁移任务类型相关
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标实例数据库类型:mysql，redis，mongodb，postgresql，mariadb，percona
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * 目标实例接入类型，目前支持：cdb(腾讯云数据库实例)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 目标实例信息
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * 需要迁移的源数据库表信息，如果需要迁移的是整个实例，该字段为[]
         * @type {string || null}
         */
        this.DatabaseInfo = null;

        /**
         * 任务创建(提交)时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务开始执行时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务执行结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务状态,取值为：1-创建中(Creating),3-校验中(Checking)4-校验通过(CheckPass),5-校验不通过（CheckNotPass）,7-任务运行(Running),8-准备完成（ReadyComplete）,9-任务成功（Success）,10-任务失败（Failed）,11-撤销中（Stopping）,12-完成中（Completing）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务详情
         * @type {MigrateDetailInfo || null}
         */
        this.Detail = null;

        /**
         * 任务错误信息提示，当任务发生错误时，不为null或者空值
         * @type {Array.<ErrorInfo> || null}
         */
        this.ErrorInfo = null;

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

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.DatabaseInfo = 'DatabaseInfo' in params ? params.DatabaseInfo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Detail) {
            let obj = new MigrateDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }

        if (params.ErrorInfo) {
            this.ErrorInfo = new Array();
            for (let z in params.ErrorInfo) {
                let obj = new ErrorInfo();
                obj.deserialize(params.ErrorInfo[z]);
                this.ErrorInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteMigrateJob请求参数结构体
 * @class
 */
class DeleteMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
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
 * DeleteSyncJob请求参数结构体
 * @class
 */
class DeleteSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的灾备同步任务ID
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
 * ActivateSubscribe返回参数结构体
 * @class
 */
class ActivateSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置数据订阅任务ID。
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubscribe返回参数结构体
 * @class
 */
class CreateSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据订阅实例的ID数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubscribeIds = null;

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
        this.SubscribeIds = 'SubscribeIds' in params ? params.SubscribeIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 迁移任务配置选项
 * @class
 */
class MigrateOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务运行模式，值包括：1-立即执行，2-定时执行
         * @type {number || null}
         */
        this.RunMode = null;

        /**
         * 期望执行时间，当runMode=2时，该字段必填，时间格式：yyyy-mm-dd hh:mm:ss
         * @type {string || null}
         */
        this.ExpectTime = null;

        /**
         * 数据迁移类型，值包括：1-结构迁移,2-全量迁移,3-全量+增量迁移
         * @type {number || null}
         */
        this.MigrateType = null;

        /**
         * 迁移对象，1-整个实例，2-指定库表
         * @type {number || null}
         */
        this.MigrateObject = null;

        /**
         * 抽样数据一致性检测参数，1-未配置,2-全量检测,3-抽样检测, 4-仅校验不一致表,5-不检测
         * @type {number || null}
         */
        this.ConsistencyType = null;

        /**
         * 是否用源库Root账户覆盖目标库，值包括：0-不覆盖，1-覆盖，选择库表或者结构迁移时应该为0
         * @type {number || null}
         */
        this.IsOverrideRoot = null;

        /**
         * 不同数据库用到的额外参数.以JSON格式描述. 
Redis可定义如下的参数: 
{ 
	"ClientOutputBufferHardLimit":512, 	从机缓冲区的硬性容量限制(MB) 
	"ClientOutputBufferSoftLimit":512, 	从机缓冲区的软性容量限制(MB) 
	"ClientOutputBufferPersistTime":60, 从机缓冲区的软性限制持续时间(秒) 
	"ReplBacklogSize":512, 	环形缓冲区容量限制(MB) 
	"ReplTimeout":120，		复制超时时间(秒) 
}
MongoDB可定义如下的参数: 
{
	'SrcAuthDatabase':'admin', 
	'SrcAuthFlag': "1", 
	'SrcAuthMechanism':"SCRAM-SHA-1"
}
MySQL暂不支持额外参数设置。
         * @type {string || null}
         */
        this.ExternParams = null;

        /**
         * 仅用于“抽样数据一致性检测”，ConsistencyType配置为抽样检测时，必选
         * @type {ConsistencyParams || null}
         */
        this.ConsistencyParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectTime = 'ExpectTime' in params ? params.ExpectTime : null;
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;
        this.MigrateObject = 'MigrateObject' in params ? params.MigrateObject : null;
        this.ConsistencyType = 'ConsistencyType' in params ? params.ConsistencyType : null;
        this.IsOverrideRoot = 'IsOverrideRoot' in params ? params.IsOverrideRoot : null;
        this.ExternParams = 'ExternParams' in params ? params.ExternParams : null;

        if (params.ConsistencyParams) {
            let obj = new ConsistencyParams();
            obj.deserialize(params.ConsistencyParams)
            this.ConsistencyParams = obj;
        }

    }
}

/**
 * 迁移任务错误信息及提示
 * @class
 */
class ErrorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 具体的报错日志, 包含错误码和错误信息
         * @type {string || null}
         */
        this.ErrorLog = null;

        /**
         * 报错对应的帮助文档Ur
         * @type {string || null}
         */
        this.HelpDoc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorLog = 'ErrorLog' in params ? params.ErrorLog : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;

    }
}

/**
 * DescribeSyncCheckJob返回参数结构体
 * @class
 */
class DescribeSyncCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务校验状态： starting(开始中)，running(校验中)，finished(校验完成)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务校验结果代码
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 提示信息
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 任务执行步骤描述
         * @type {Array.<SyncCheckStepInfo> || null}
         */
        this.StepInfo = null;

        /**
         * 校验标志：0（尚未校验成功） ， 1（校验成功）
         * @type {number || null}
         */
        this.CheckFlag = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new SyncCheckStepInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartMigrateJob请求参数结构体
 * @class
 */
class StartMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
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

module.exports = {
    DescribeSyncJobsResponse: DescribeSyncJobsResponse,
    DescribeMigrateJobsResponse: DescribeMigrateJobsResponse,
    MigrateDetailInfo: MigrateDetailInfo,
    DeleteMigrateJobResponse: DeleteMigrateJobResponse,
    CreateMigrateCheckJobRequest: CreateMigrateCheckJobRequest,
    ModifySubscribeVipVportRequest: ModifySubscribeVipVportRequest,
    SyncInstanceInfo: SyncInstanceInfo,
    ModifySubscribeNameResponse: ModifySubscribeNameResponse,
    CreateSyncJobResponse: CreateSyncJobResponse,
    DescribeMigrateCheckJobRequest: DescribeMigrateCheckJobRequest,
    IsolateSubscribeResponse: IsolateSubscribeResponse,
    ModifySubscribeObjectsResponse: ModifySubscribeObjectsResponse,
    SwitchDrToMasterRequest: SwitchDrToMasterRequest,
    StartSyncJobRequest: StartSyncJobRequest,
    CreateMigrateJobRequest: CreateMigrateJobRequest,
    SubscribeInfo: SubscribeInfo,
    ModifySubscribeNameRequest: ModifySubscribeNameRequest,
    SyncJobInfo: SyncJobInfo,
    ModifySubscribeConsumeTimeResponse: ModifySubscribeConsumeTimeResponse,
    DstInfo: DstInfo,
    DescribeSubscribeConfResponse: DescribeSubscribeConfResponse,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    SrcInfo: SrcInfo,
    ConsistencyParams: ConsistencyParams,
    ModifyMigrateJobRequest: ModifyMigrateJobRequest,
    CreateSubscribeRequest: CreateSubscribeRequest,
    CreateMigrateCheckJobResponse: CreateMigrateCheckJobResponse,
    MigrateStepDetailInfo: MigrateStepDetailInfo,
    ModifySubscribeObjectsRequest: ModifySubscribeObjectsRequest,
    DescribeMigrateCheckJobResponse: DescribeMigrateCheckJobResponse,
    SubscribeRegionConf: SubscribeRegionConf,
    ActivateSubscribeRequest: ActivateSubscribeRequest,
    OfflineIsolatedSubscribeRequest: OfflineIsolatedSubscribeRequest,
    DescribeSubscribesRequest: DescribeSubscribesRequest,
    ResetSubscribeResponse: ResetSubscribeResponse,
    StartSyncJobResponse: StartSyncJobResponse,
    DescribeSubscribesResponse: DescribeSubscribesResponse,
    SyncCheckStepInfo: SyncCheckStepInfo,
    CreateSyncCheckJobResponse: CreateSyncCheckJobResponse,
    StopMigrateJobRequest: StopMigrateJobRequest,
    DescribeSyncCheckJobRequest: DescribeSyncCheckJobRequest,
    DescribeRegionConfResponse: DescribeRegionConfResponse,
    ModifySyncJobResponse: ModifySyncJobResponse,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CompleteMigrateJobRequest: CompleteMigrateJobRequest,
    ResetSubscribeRequest: ResetSubscribeRequest,
    ModifySubscribeConsumeTimeRequest: ModifySubscribeConsumeTimeRequest,
    SwitchDrToMasterResponse: SwitchDrToMasterResponse,
    ModifyMigrateJobResponse: ModifyMigrateJobResponse,
    CreateSyncJobRequest: CreateSyncJobRequest,
    DescribeSyncJobsRequest: DescribeSyncJobsRequest,
    DescribeMigrateJobsRequest: DescribeMigrateJobsRequest,
    SyncDetailInfo: SyncDetailInfo,
    StopMigrateJobResponse: StopMigrateJobResponse,
    SyncOption: SyncOption,
    OfflineIsolatedSubscribeResponse: OfflineIsolatedSubscribeResponse,
    SyncStepDetailInfo: SyncStepDetailInfo,
    IsolateSubscribeRequest: IsolateSubscribeRequest,
    DeleteSyncJobResponse: DeleteSyncJobResponse,
    CreateSyncCheckJobRequest: CreateSyncCheckJobRequest,
    ModifySyncJobRequest: ModifySyncJobRequest,
    DescribeRegionConfRequest: DescribeRegionConfRequest,
    CompleteMigrateJobResponse: CompleteMigrateJobResponse,
    StartMigrateJobResponse: StartMigrateJobResponse,
    SubscribeObject: SubscribeObject,
    CreateMigrateJobResponse: CreateMigrateJobResponse,
    DescribeSubscribeConfRequest: DescribeSubscribeConfRequest,
    ModifySubscribeVipVportResponse: ModifySubscribeVipVportResponse,
    MigrateJobInfo: MigrateJobInfo,
    DeleteMigrateJobRequest: DeleteMigrateJobRequest,
    DeleteSyncJobRequest: DeleteSyncJobRequest,
    ActivateSubscribeResponse: ActivateSubscribeResponse,
    CreateSubscribeResponse: CreateSubscribeResponse,
    MigrateOption: MigrateOption,
    ErrorInfo: ErrorInfo,
    DescribeSyncCheckJobResponse: DescribeSyncCheckJobResponse,
    StartMigrateJobRequest: StartMigrateJobRequest,

}
