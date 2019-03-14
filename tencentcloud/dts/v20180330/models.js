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
         * 总进度,如：
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * 当前步骤进度,如:
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
         * 实例短Id
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
         * 源实例数据库类型:mysql,redis,mongodb
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 源实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源实例信息，具体内容跟迁移任务类型相关
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标实例数据库类型,mysql,redis,mongodb
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * 目标实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例). 目前只支持cdb.
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 目标实例信息
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * 需要迁移的源数据库表信息，用json格式的字符串描述。
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
 * 目的实例信息，具体内容跟迁移任务类型相关
 * @class
 */
class DstInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 目标实例vip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 目标实例vport
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 目标实例Id
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 只读开关
         * @type {number || null}
         */
        this.ReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;

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
 * 源实例信息
 * @class
 */
class SrcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 阿里云AccessKey
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
         * 阿里云rds实例id
         * @type {string || null}
         */
        this.RdsInstanceId = null;

        /**
         * CVM实例短ID，格式如：ins-olgl89y8，与云主机控制台页面显示的实例ID相同，如果是CVM自建实例或者通过自建VPN接入的公网实例，需要传递此字段
         * @type {string || null}
         */
        this.CvmInstanceId = null;

        /**
         * 专线网关ID
         * @type {string || null}
         */
        this.UniqDcgId = null;

        /**
         * 私有网络ID，和原来的数字vpcId对应，需要调vpc的接口去转换
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网ID, 和原来的数字子网ID对应，需要调用vpc的接口去转换
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 系统分配的VPN网关ID
         * @type {string || null}
         */
        this.UniqVpnGwId = null;

        /**
         * 实例短Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 地域英文名，如：ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 服务提供商，如:aliyun,others
         * @type {string || null}
         */
        this.Supplier = null;

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
         * 1-100的整数值，select(*)对比时每张表的抽样行数比例
         * @type {number || null}
         */
        this.SelectRowsPerTable = null;

        /**
         * 1-100的整数值，select(*)对比的表的比例
         * @type {number || null}
         */
        this.TablesSelectAll = null;

        /**
         * 1-100的整数值，select count(*)对比的表的比例
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
         * 数据对比类型，1-未配置,2-全量检测,3-抽样检测, 4-仅校验不一致表,5-不检测
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
         * @type {string || null}
         */
        this.ExternParams = null;

        /**
         * 抽样检验时的抽样参数
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
         * 源实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源实例信息，具体内容跟迁移任务类型相关
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例). 目前只支持cdb.
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
         * 源实例数据库类型:mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 源实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源实例信息，具体内容跟迁移任务类型相关
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标实例数据库类型,mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * 源实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 目的实例信息
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
         * 任务状态,取值为：1-创建中(Creating),2-创建完成(Created),3-校验中(Checking)4-校验通过(CheckPass),5-校验不通过（CheckNotPass）,6-准备运行(ReadyRun),7-任务运行(Running),8-准备完成（ReadyComplete）,9-任务成功（Success）,10-任务失败（Failed）,11-中止中（Stoping）,12-完成中（Completing）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务详情
         * @type {MigrateDetailInfo || null}
         */
        this.Detail = null;

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

module.exports = {
    DescribeSyncJobsResponse: DescribeSyncJobsResponse,
    DescribeMigrateJobsResponse: DescribeMigrateJobsResponse,
    MigrateDetailInfo: MigrateDetailInfo,
    DeleteMigrateJobResponse: DeleteMigrateJobResponse,
    CreateMigrateCheckJobRequest: CreateMigrateCheckJobRequest,
    SyncInstanceInfo: SyncInstanceInfo,
    CreateSyncJobResponse: CreateSyncJobResponse,
    DescribeMigrateCheckJobRequest: DescribeMigrateCheckJobRequest,
    StartMigrateJobRequest: StartMigrateJobRequest,
    SwitchDrToMasterRequest: SwitchDrToMasterRequest,
    StartSyncJobRequest: StartSyncJobRequest,
    CreateMigrateJobRequest: CreateMigrateJobRequest,
    SyncJobInfo: SyncJobInfo,
    DstInfo: DstInfo,
    ModifyMigrateJobResponse: ModifyMigrateJobResponse,
    SrcInfo: SrcInfo,
    ConsistencyParams: ConsistencyParams,
    SyncOption: SyncOption,
    MigrateOption: MigrateOption,
    CreateMigrateCheckJobResponse: CreateMigrateCheckJobResponse,
    MigrateStepDetailInfo: MigrateStepDetailInfo,
    DescribeMigrateCheckJobResponse: DescribeMigrateCheckJobResponse,
    StartSyncJobResponse: StartSyncJobResponse,
    CreateSyncCheckJobResponse: CreateSyncCheckJobResponse,
    DescribeSyncCheckJobRequest: DescribeSyncCheckJobRequest,
    StopMigrateJobRequest: StopMigrateJobRequest,
    ModifySyncJobResponse: ModifySyncJobResponse,
    ModifyMigrateJobRequest: ModifyMigrateJobRequest,
    CompleteMigrateJobRequest: CompleteMigrateJobRequest,
    SyncCheckStepInfo: SyncCheckStepInfo,
    CreateSyncJobRequest: CreateSyncJobRequest,
    DescribeSyncJobsRequest: DescribeSyncJobsRequest,
    DescribeMigrateJobsRequest: DescribeMigrateJobsRequest,
    SyncDetailInfo: SyncDetailInfo,
    SyncStepDetailInfo: SyncStepDetailInfo,
    StopMigrateJobResponse: StopMigrateJobResponse,
    DeleteSyncJobResponse: DeleteSyncJobResponse,
    CreateSyncCheckJobRequest: CreateSyncCheckJobRequest,
    SwitchDrToMasterResponse: SwitchDrToMasterResponse,
    CompleteMigrateJobResponse: CompleteMigrateJobResponse,
    StartMigrateJobResponse: StartMigrateJobResponse,
    CreateMigrateJobResponse: CreateMigrateJobResponse,
    DeleteMigrateJobRequest: DeleteMigrateJobRequest,
    DeleteSyncJobRequest: DeleteSyncJobRequest,
    MigrateJobInfo: MigrateJobInfo,
    ModifySyncJobRequest: ModifySyncJobRequest,
    DescribeSyncCheckJobResponse: DescribeSyncCheckJobResponse,

}
