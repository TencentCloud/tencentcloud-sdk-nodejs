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
 * 迁移目的信息
 * @class
 */
class DstInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移目的地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 迁移目的Ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 迁移目的端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 迁移目的实例Id
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 迁移源信息
 * @class
 */
class SrcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移源地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 迁移源Ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 迁移源端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 迁移源实例Id
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeMigrationTask请求参数结构体
 * @class
 */
class DescribeMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID，例如msp-jitoh33n
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
 * 时间对象
 * @class
 */
class TimeObj extends  AbstractModel {
    constructor(){
        super();

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyMigrationTaskBelongToProject请求参数结构体
 * @class
 */
class ModifyMigrationTaskBelongToProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID，例如msp-jitoh33n
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 项目ID，例如10005
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 迁移详情列表
 * @class
 */
class TaskStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 迁移进度
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * 迁移日期
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyMigrationTaskStatus返回参数结构体
 * @class
 */
class ModifyMigrationTaskStatusResponse extends  AbstractModel {
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
 * ListMigrationTask请求参数结构体
 * @class
 */
class ListMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录起始数，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 记录条数，默认值为10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 项目ID，默认值为空
         * @type {number || null}
         */
        this.ProjectId = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DeregisterMigrationTask返回参数结构体
 * @class
 */
class DeregisterMigrationTaskResponse extends  AbstractModel {
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
 * 列表类型
 * @class
 */
class Project extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * ModifyMigrationTaskBelongToProject返回参数结构体
 * @class
 */
class ModifyMigrationTaskBelongToProjectResponse extends  AbstractModel {
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
 * ListMigrationProject返回参数结构体
 * @class
 */
class ListMigrationProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目列表
         * @type {Array.<Project> || null}
         */
        this.Projects = null;

        /**
         * 项目总数
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

        if (params.Projects) {
            this.Projects = new Array();
            for (let z in params.Projects) {
                let obj = new Project();
                obj.deserialize(params.Projects[z]);
                this.Projects.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 迁移任务类别
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 迁移类型
         * @type {string || null}
         */
        this.MigrationType = null;

        /**
         * 迁移状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 项目Id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 迁移源信息
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 迁移时间信息
         * @type {TimeObj || null}
         */
        this.MigrationTimeLine = null;

        /**
         * 状态更新时间
         * @type {string || null}
         */
        this.Updated = null;

        /**
         * 迁移目的信息
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.MigrationType = 'MigrationType' in params ? params.MigrationType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.MigrationTimeLine) {
            let obj = new TimeObj();
            obj.deserialize(params.MigrationTimeLine)
            this.MigrationTimeLine = obj;
        }
        this.Updated = 'Updated' in params ? params.Updated : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

    }
}

/**
 * RegisterMigrationTask返回参数结构体
 * @class
 */
class RegisterMigrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMigrationTaskStatus请求参数结构体
 * @class
 */
class ModifyMigrationTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，取值为unstart，migrating，finish，fail之一，分别代表该迁移任务状态为迁移未开始，迁移中，迁移完成，迁移失败
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务ID，例如msp-jitoh33n
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
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ListMigrationProject请求参数结构体
 * @class
 */
class ListMigrationProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录起始数，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回条数，默认值为500
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeregisterMigrationTask请求参数结构体
 * @class
 */
class DeregisterMigrationTaskRequest extends  AbstractModel {
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
 * ListMigrationTask返回参数结构体
 * @class
 */
class ListMigrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 迁移任务列表
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrationTask返回参数结构体
 * @class
 */
class DescribeMigrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移详情列表
         * @type {Array.<TaskStatus> || null}
         */
        this.TaskStatus = null;

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

        if (params.TaskStatus) {
            this.TaskStatus = new Array();
            for (let z in params.TaskStatus) {
                let obj = new TaskStatus();
                obj.deserialize(params.TaskStatus[z]);
                this.TaskStatus.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterMigrationTask请求参数结构体
 * @class
 */
class RegisterMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型，取值database（数据库迁移）、file（文件迁移）、host（主机迁移）
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 服务提供商名称
         * @type {string || null}
         */
        this.ServiceSupplier = null;

        /**
         * 迁移任务源信息
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 迁移任务目的信息
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * 迁移任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 迁移任务更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 迁移类别，如数据库迁移中mysql:mysql代表从mysql迁移到mysql，文件迁移中oss:cos代表从阿里云oss迁移到腾讯云cos
         * @type {string || null}
         */
        this.MigrateClass = null;

        /**
         * 源实例接入类型，数据库迁移时填写值为：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源实例数据库类型，数据库迁移时填写，取值为mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb 之一
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 目标实例接入类型，数据库迁移时填写值为：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 目标实例数据库类型,数据库迁移时填写，取值为mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb 之一
         * @type {string || null}
         */
        this.DstDatabaseType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ServiceSupplier = 'ServiceSupplier' in params ? params.ServiceSupplier : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MigrateClass = 'MigrateClass' in params ? params.MigrateClass : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;

    }
}

module.exports = {
    DstInfo: DstInfo,
    SrcInfo: SrcInfo,
    DescribeMigrationTaskRequest: DescribeMigrationTaskRequest,
    TimeObj: TimeObj,
    ModifyMigrationTaskBelongToProjectRequest: ModifyMigrationTaskBelongToProjectRequest,
    TaskStatus: TaskStatus,
    ModifyMigrationTaskStatusResponse: ModifyMigrationTaskStatusResponse,
    ListMigrationTaskRequest: ListMigrationTaskRequest,
    DeregisterMigrationTaskResponse: DeregisterMigrationTaskResponse,
    Project: Project,
    ModifyMigrationTaskBelongToProjectResponse: ModifyMigrationTaskBelongToProjectResponse,
    ListMigrationProjectResponse: ListMigrationProjectResponse,
    Task: Task,
    RegisterMigrationTaskResponse: RegisterMigrationTaskResponse,
    ModifyMigrationTaskStatusRequest: ModifyMigrationTaskStatusRequest,
    ListMigrationProjectRequest: ListMigrationProjectRequest,
    DeregisterMigrationTaskRequest: DeregisterMigrationTaskRequest,
    ListMigrationTaskResponse: ListMigrationTaskResponse,
    DescribeMigrationTaskResponse: DescribeMigrationTaskResponse,
    RegisterMigrationTaskRequest: RegisterMigrationTaskRequest,

}
