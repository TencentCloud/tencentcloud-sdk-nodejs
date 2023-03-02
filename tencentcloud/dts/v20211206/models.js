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
 * ModifyCompareTask返回参数结构体
 * @class
 */
class ModifyCompareTaskResponse extends  AbstractModel {
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
 * DescribeSyncJobs返回参数结构体
 * @class
 */
class DescribeSyncJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务详情数组
注意：此字段可能返回 null，表示取不到有效值。
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
 * ModifyMigrationJob返回参数结构体
 * @class
 */
class ModifyMigrationJobResponse extends  AbstractModel {
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
 * ModifyMigrateJobSpec请求参数结构体
 * @class
 */
class ModifyMigrateJobSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 新实例规格大小，包括：micro、small、medium、large、xlarge、2xlarge
         * @type {string || null}
         */
        this.NewInstanceClass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.NewInstanceClass = 'NewInstanceClass' in params ? params.NewInstanceClass : null;

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
 * 当前步骤错误信息或者警告信息
 * @class
 */
class StepTip extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 解决方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 帮助文档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HelpDoc = null;

        /**
         * 当前步骤跳过信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SkipInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;
        this.SkipInfo = 'SkipInfo' in params ? params.SkipInfo : null;

    }
}

/**
 * DestroyMigrateJob请求参数结构体
 * @class
 */
class DestroyMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * SkipCheckItem返回参数结构体
 * @class
 */
class SkipCheckItemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跳过的提示信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

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
        this.Message = 'Message' in params ? params.Message : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResizeSyncJob返回参数结构体
 * @class
 */
class ResizeSyncJobResponse extends  AbstractModel {
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
 * ResumeMigrateJob返回参数结构体
 * @class
 */
class ResumeMigrateJobResponse extends  AbstractModel {
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
 * 校验不一致的表详情
 * @class
 */
class DifferenceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 分块号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Chunk = null;

        /**
         * 源库数值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SrcItem = null;

        /**
         * 目标库数值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DstItem = null;

        /**
         * 索引名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * 索引下边界
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LowerBoundary = null;

        /**
         * 索引上边界
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpperBoundary = null;

        /**
         * 对比消耗时间,单位为 ms
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * 完成时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinishedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Chunk = 'Chunk' in params ? params.Chunk : null;
        this.SrcItem = 'SrcItem' in params ? params.SrcItem : null;
        this.DstItem = 'DstItem' in params ? params.DstItem : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.LowerBoundary = 'LowerBoundary' in params ? params.LowerBoundary : null;
        this.UpperBoundary = 'UpperBoundary' in params ? params.UpperBoundary : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.FinishedAt = 'FinishedAt' in params ? params.FinishedAt : null;

    }
}

/**
 * IsolateSyncJob请求参数结构体
 * @class
 */
class IsolateSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id
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
 * PauseMigrateJob请求参数结构体
 * @class
 */
class PauseMigrateJobRequest extends  AbstractModel {
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
 * ContinueMigrateJob请求参数结构体
 * @class
 */
class ContinueMigrateJobRequest extends  AbstractModel {
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
 * DescribeCheckSyncJobResult请求参数结构体
 * @class
 */
class DescribeCheckSyncJobResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id
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
 * DestroySyncJob返回参数结构体
 * @class
 */
class DestroySyncJobResponse extends  AbstractModel {
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
 * DescribeCompareReport返回参数结构体
 * @class
 */
class DescribeCompareReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一致性校验摘要信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareAbstractInfo || null}
         */
        this.Abstract = null;

        /**
         * 一致性校验详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareDetailInfo || null}
         */
        this.Detail = null;

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

        if (params.Abstract) {
            let obj = new CompareAbstractInfo();
            obj.deserialize(params.Abstract)
            this.Abstract = obj;
        }

        if (params.Detail) {
            let obj = new CompareDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateMigrateJob请求参数结构体
 * @class
 */
class IsolateMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * 表对象集合，当 TableMode 为 partial 时，此项需要填写
 * @class
 */
class TableItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移的表名，大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 迁移后的表名，当TableEditMode为rename时此项必填，注意此配置与TmpTables互斥，只能使用其中一种
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewTableName = null;

        /**
         * 迁移临时表，注意此配置与NewTableName互斥，只能使用其中一种。当配置的同步对象为表级别且TableEditMode为pt时此项有意义，针对pt-osc等工具在迁移过程中产生的临时表进行同步，需要提前将可能的临时表配置在这里，否则不会同步任何临时表。示例，如要对t1进行pt-osc操作，此项配置应该为["\_t1\_new","\_t1\_old"]；如要对t1进行gh-ost操作，此项配置应该为["\_t1\_ghc","\_t1\_gho","\_t1\_del"]，pt-osc与gh-ost产生的临时表可同时配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TmpTables = null;

        /**
         * 编辑表类型，rename(表映射)，pt(同步附加表)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableEditMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.NewTableName = 'NewTableName' in params ? params.NewTableName : null;
        this.TmpTables = 'TmpTables' in params ? params.TmpTables : null;
        this.TableEditMode = 'TableEditMode' in params ? params.TableEditMode : null;

    }
}

/**
 * ModifyCompareTaskName请求参数结构体
 * @class
 */
class ModifyCompareTaskNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * 一致性校验任务名称
         * @type {string || null}
         */
        this.TaskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

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
 * DescribeMigrateDBInstances返回参数结构体
 * @class
 */
class DescribeMigrateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合筛选条件的数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MigrateDBItem> || null}
         */
        this.Instances = null;

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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new MigrateDBItem();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 存放配置时的额外信息
 * @class
 */
class KeyValuePairOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 选项key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 选项value
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
 * CreateCheckSyncJob请求参数结构体
 * @class
 */
class CreateCheckSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id
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
 * StopSyncJob请求参数结构体
 * @class
 */
class StopSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id
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
 * DescribeMigrationDetail请求参数结构体
 * @class
 */
class DescribeMigrationDetailRequest extends  AbstractModel {
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
 * DestroySyncJob请求参数结构体
 * @class
 */
class DestroySyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id
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
 * ResizeSyncJob请求参数结构体
 * @class
 */
class ResizeSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 任务规格
         * @type {string || null}
         */
        this.NewInstanceClass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.NewInstanceClass = 'NewInstanceClass' in params ? params.NewInstanceClass : null;

    }
}

/**
 * 数据同步中的ddl同步处理
 * @class
 */
class DdlOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * ddl类型，如Database,Table,View,Index等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DdlObject = null;

        /**
         * ddl具体值，对于Database可取值[Create,Drop,Alter]<br>对于Table可取值[Create,Drop,Alter,Truncate,Rename]<br/>对于View可取值[Create,Drop]<br/>对于Index可取值[Create,Drop]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DdlValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DdlObject = 'DdlObject' in params ? params.DdlObject : null;
        this.DdlValue = 'DdlValue' in params ? params.DdlValue : null;

    }
}

/**
 * 冲突处理里的详细描述
 * @class
 */
class ConflictHandleOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 条件覆盖的列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConditionColumn = null;

        /**
         * 条件覆盖操作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConditionOperator = null;

        /**
         * 条件覆盖优先级处理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConditionOrderInSrcAndDst = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConditionColumn = 'ConditionColumn' in params ? params.ConditionColumn : null;
        this.ConditionOperator = 'ConditionOperator' in params ? params.ConditionOperator : null;
        this.ConditionOrderInSrcAndDst = 'ConditionOrderInSrcAndDst' in params ? params.ConditionOrderInSrcAndDst : null;

    }
}

/**
 * ResumeSyncJob返回参数结构体
 * @class
 */
class ResumeSyncJobResponse extends  AbstractModel {
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
 * ModifyCompareTaskName返回参数结构体
 * @class
 */
class ModifyCompareTaskNameResponse extends  AbstractModel {
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
 * PauseSyncJob请求参数结构体
 * @class
 */
class PauseSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id
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
 * ContinueMigrateJob返回参数结构体
 * @class
 */
class ContinueMigrateJobResponse extends  AbstractModel {
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
 * CreateMigrationService请求参数结构体
 * @class
 */
class CreateMigrationServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源实例数据库类型，mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 目标实例数据库类型，mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * 源实例地域，如：ap-guangzhou
         * @type {string || null}
         */
        this.SrcRegion = null;

        /**
         * 目标实例地域，如：ap-guangzhou。注意，目标地域必须和API请求地域保持一致。
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * 实例规格，包括：small、medium、large、xlarge、2xlarge
         * @type {string || null}
         */
        this.InstanceClass = null;

        /**
         * 购买数量，范围为[1,15]，默认为1
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 迁移服务名称，最大长度128
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 标签信息
         * @type {Array.<TagItem> || null}
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
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.SrcRegion = 'SrcRegion' in params ? params.SrcRegion : null;
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.InstanceClass = 'InstanceClass' in params ? params.InstanceClass : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.JobName = 'JobName' in params ? params.JobName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 每个检查步骤里的具体检查项
 * @class
 */
class DetailCheckItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查项的名称，如：源实例权限检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckItemName = null;

        /**
         * 检查项详细内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * pass(通过)，failed(失败), warning(校验有警告，但仍通过)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckResult = null;

        /**
         * 检查项失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 运行报错日志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ErrorLog = null;

        /**
         * 详细帮助的文档链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.HelpDoc = null;

        /**
         * 跳过风险文案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SkipInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckItemName = 'CheckItemName' in params ? params.CheckItemName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.ErrorLog = 'ErrorLog' in params ? params.ErrorLog : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;
        this.SkipInfo = 'SkipInfo' in params ? params.SkipInfo : null;

    }
}

/**
 * DescribeCompareTasks请求参数结构体
 * @class
 */
class DescribeCompareTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 分页设置，表示每页显示多少条任务，默认为 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 校验任务 ID
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * 任务状态过滤，可能的值：created - 创建完成；readyRun - 等待运行；running - 运行中；success - 成功；stopping - 结束中；failed - 失败；canceled - 已终止
         * @type {Array.<string> || null}
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 一致性对比对象配置
 * @class
 */
class CompareObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对象模式 整实例-all,部分对象-partial
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ObjectMode = null;

        /**
         * 对象列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CompareObjectItem> || null}
         */
        this.ObjectItems = null;

        /**
         * 高级对象类型，如account(账号),index(索引),shardkey(片建，后面可能会调整),schema(库表结构)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AdvancedObjects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ObjectMode = 'ObjectMode' in params ? params.ObjectMode : null;

        if (params.ObjectItems) {
            this.ObjectItems = new Array();
            for (let z in params.ObjectItems) {
                let obj = new CompareObjectItem();
                obj.deserialize(params.ObjectItems[z]);
                this.ObjectItems.push(obj);
            }
        }
        this.AdvancedObjects = 'AdvancedObjects' in params ? params.AdvancedObjects : null;

    }
}

/**
 * 任务错误信息
 * @class
 */
class ErrorInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 错误日志信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorLog = null;

        /**
         * 文档提示
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.ErrorLog = 'ErrorLog' in params ? params.ErrorLog : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;

    }
}

/**
 * RecoverSyncJob返回参数结构体
 * @class
 */
class RecoverSyncJobResponse extends  AbstractModel {
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
 * 任务操作信息，包含迁移任务的所有操作列表，及迁移任务在当前状态下允许的操作列表
 * @class
 */
class MigrateAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的所有操作列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AllAction = null;

        /**
         * 任务在当前状态下允许的操作列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AllowedAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllAction = 'AllAction' in params ? params.AllAction : null;
        this.AllowedAction = 'AllowedAction' in params ? params.AllowedAction : null;

    }
}

/**
 * DeleteCompareTask返回参数结构体
 * @class
 */
class DeleteCompareTaskResponse extends  AbstractModel {
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
 * 实例信息
 * @class
 */
class DBEndpointInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所在地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例网络接入类型，如：extranet(外网)、ipv6(公网ipv6)、cvm(云主机自建)、dcg(专线接入)、vpncloud(vpn接入的实例)、cdb(云数据库)、ccn(云联网)、intranet(自研上云)、vpc(私有网络)等，注意具体可选值依赖当前链路
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccessType = null;

        /**
         * 实例数据库类型，如：mysql,redis,mongodb,postgresql,mariadb,percona 等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseType = null;

        /**
         * 节点类型，为空或者"simple":表示普通节点，"cluster": 集群节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 数据库信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DBInfo> || null}
         */
        this.Info = null;

        /**
         * 实例服务提供商，如:"aliyun","others"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Supplier = null;

        /**
         * MongoDB可定义如下的参数: 	['AuthDatabase':'admin', 
'AuthFlag': "1",	'AuthMechanism':"SCRAM-SHA-1"]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KeyValuePairOption> || null}
         */
        this.ExtraAttr = null;

        /**
         * 数据库所属网络环境，AccessType为云联网(ccn)时必填， UserIDC表示用户IDC、TencentVPC表示腾讯云VPC；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseNetEnv = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.AccessType = 'AccessType' in params ? params.AccessType : null;
        this.DatabaseType = 'DatabaseType' in params ? params.DatabaseType : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new DBInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }
        this.Supplier = 'Supplier' in params ? params.Supplier : null;

        if (params.ExtraAttr) {
            this.ExtraAttr = new Array();
            for (let z in params.ExtraAttr) {
                let obj = new KeyValuePairOption();
                obj.deserialize(params.ExtraAttr[z]);
                this.ExtraAttr.push(obj);
            }
        }
        this.DatabaseNetEnv = 'DatabaseNetEnv' in params ? params.DatabaseNetEnv : null;

    }
}

/**
 * ContinueSyncJob返回参数结构体
 * @class
 */
class ContinueSyncJobResponse extends  AbstractModel {
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
 * 数据同步中的选项
 * @class
 */
class Options extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步初始化选项，Data(全量数据初始化)、Structure(结构初始化)、Full(全量数据且结构初始化，默认)、None(仅增量)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InitType = null;

        /**
         * 同名表的处理，ReportErrorAfterCheck(前置校验并报错，默认)、InitializeAfterDelete(删除并重新初始化)、ExecuteAfterIgnore(忽略并继续执行)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealOfExistSameTable = null;

        /**
         * 冲突处理选项，ReportError(报错，默认为该值)、Ignore(忽略)、Cover(覆盖)、ConditionCover(条件覆盖)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConflictHandleType = null;

        /**
         * 是否添加附加列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AddAdditionalColumn = null;

        /**
         * 所要同步的DML和DDL的选项，Insert(插入操作)、Update(更新操作)、Delete(删除操作)、DDL(结构同步)， 不填（不选），PartialDDL(自定义,和DdlOptions一起起作用 )
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OpTypes = null;

        /**
         * 冲突处理的详细选项，如条件覆盖中的条件行和条件操作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConflictHandleOption || null}
         */
        this.ConflictHandleOption = null;

        /**
         * DDL同步选项，具体描述要同步那些DDL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DdlOption> || null}
         */
        this.DdlOptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InitType = 'InitType' in params ? params.InitType : null;
        this.DealOfExistSameTable = 'DealOfExistSameTable' in params ? params.DealOfExistSameTable : null;
        this.ConflictHandleType = 'ConflictHandleType' in params ? params.ConflictHandleType : null;
        this.AddAdditionalColumn = 'AddAdditionalColumn' in params ? params.AddAdditionalColumn : null;
        this.OpTypes = 'OpTypes' in params ? params.OpTypes : null;

        if (params.ConflictHandleOption) {
            let obj = new ConflictHandleOption();
            obj.deserialize(params.ConflictHandleOption)
            this.ConflictHandleOption = obj;
        }

        if (params.DdlOptions) {
            this.DdlOptions = new Array();
            for (let z in params.DdlOptions) {
                let obj = new DdlOption();
                obj.deserialize(params.DdlOptions[z]);
                this.DdlOptions.push(obj);
            }
        }

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

        /**
         * 完成任务的方式,仅支持旧版MySQL迁移任务。waitForSync-等待主从差距为0才停止,immediately-立即完成，不会等待主从差距一致。默认为waitForSync
         * @type {string || null}
         */
        this.CompleteMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompleteMode = 'CompleteMode' in params ? params.CompleteMode : null;

    }
}

/**
 * DescribeCompareTasks返回参数结构体
 * @class
 */
class DescribeCompareTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 一致性校验列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CompareTaskItem> || null}
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
                let obj = new CompareTaskItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopCompare请求参数结构体
 * @class
 */
class StopCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
         * @type {string || null}
         */
        this.CompareTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;

    }
}

/**
 * DescribeCheckSyncJobResult返回参数结构体
 * @class
 */
class DescribeCheckSyncJobResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 校验结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 步骤总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepCount = null;

        /**
         * 当前所在步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepCur = null;

        /**
         * 总体进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 步骤信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StepInfo> || null}
         */
        this.StepInfos = null;

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
        this.StepCount = 'StepCount' in params ? params.StepCount : null;
        this.StepCur = 'StepCur' in params ? params.StepCur : null;
        this.Progress = 'Progress' in params ? params.Progress : null;

        if (params.StepInfos) {
            this.StepInfos = new Array();
            for (let z in params.StepInfos) {
                let obj = new StepInfo();
                obj.deserialize(params.StepInfos[z]);
                this.StepInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopSyncJob返回参数结构体
 * @class
 */
class StopSyncJobResponse extends  AbstractModel {
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
 * 跳过校验的表详情
 * @class
 */
class SkippedDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跳过的表数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 跳过校验的表详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SkippedItem> || null}
         */
        this.Items = null;

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
                let obj = new SkippedItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * 迁移选项，描述任务如何执行迁移等一系列配置信息
 * @class
 */
class MigrateOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移对象选项，需要告知迁移服务迁移哪些库表对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DatabaseTableObject || null}
         */
        this.DatabaseTable = null;

        /**
         * 迁移类型，full(全量迁移)，structure(结构迁移)，fullAndIncrement(全量加增量迁移)， 默认为fullAndIncrement
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MigrateType = null;

        /**
         * 数据一致性校验选项， 默认为不开启一致性校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConsistencyOption || null}
         */
        this.Consistency = null;

        /**
         * 是否迁移账号，yes(迁移账号)，no(不迁移账号)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsMigrateAccount = null;

        /**
         * 是否用源库Root账户覆盖目标库，值包括：false-不覆盖，true-覆盖，选择库表或者结构迁移时应该为false，注意只对旧版迁移有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsOverrideRoot = null;

        /**
         * 是否在迁移时设置目标库只读(仅对mysql有效)，true(设置只读)、false(不设置只读，默认此值)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDstReadOnly = null;

        /**
         * 其他附加信息，对于特定库可设置额外参数，Redis可定义如下的参数: 
["ClientOutputBufferHardLimit":512, 	从机缓冲区的硬性容量限制(MB) 	"ClientOutputBufferSoftLimit":512, 	从机缓冲区的软性容量限制(MB) 	"ClientOutputBufferPersistTime":60, 从机缓冲区的软性限制持续时间(秒) 	"ReplBacklogSize":512, 	环形缓冲区容量限制(MB) 	"ReplTimeout":120，		复制超时时间(秒) ]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KeyValuePairOption> || null}
         */
        this.ExtraAttr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DatabaseTable) {
            let obj = new DatabaseTableObject();
            obj.deserialize(params.DatabaseTable)
            this.DatabaseTable = obj;
        }
        this.MigrateType = 'MigrateType' in params ? params.MigrateType : null;

        if (params.Consistency) {
            let obj = new ConsistencyOption();
            obj.deserialize(params.Consistency)
            this.Consistency = obj;
        }
        this.IsMigrateAccount = 'IsMigrateAccount' in params ? params.IsMigrateAccount : null;
        this.IsOverrideRoot = 'IsOverrideRoot' in params ? params.IsOverrideRoot : null;
        this.IsDstReadOnly = 'IsDstReadOnly' in params ? params.IsDstReadOnly : null;

        if (params.ExtraAttr) {
            this.ExtraAttr = new Array();
            for (let z in params.ExtraAttr) {
                let obj = new KeyValuePairOption();
                obj.deserialize(params.ExtraAttr[z]);
                this.ExtraAttr.push(obj);
            }
        }

    }
}

/**
 * ModifyMigrateName返回参数结构体
 * @class
 */
class ModifyMigrateNameResponse extends  AbstractModel {
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
 * DescribeMigrationJobs返回参数结构体
 * @class
 */
class DescribeMigrationJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 迁移任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<JobItem> || null}
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
                let obj = new JobItem();
                obj.deserialize(params.JobList[z]);
                this.JobList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 跳过校验的表详情
 * @class
 */
class SkippedItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 未发起检查的原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Db = 'Db' in params ? params.Db : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * DestroyMigrateJob返回参数结构体
 * @class
 */
class DestroyMigrateJobResponse extends  AbstractModel {
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
 * 任务步骤信息
 * @class
 */
class ProcessProgress extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤的状态， 包括：notStarted(未开始)、running(运行中)、success(成功)、failed(失败)等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 进度信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 总的步骤数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * 当前进行的步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * 当前步骤输出提示信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 步骤信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StepDetailInfo> || null}
         */
        this.Steps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.StepAll = 'StepAll' in params ? params.StepAll : null;
        this.StepNow = 'StepNow' in params ? params.StepNow : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Steps) {
            this.Steps = new Array();
            for (let z in params.Steps) {
                let obj = new StepDetailInfo();
                obj.deserialize(params.Steps[z]);
                this.Steps.push(obj);
            }
        }

    }
}

/**
 * SkipSyncCheckItem请求参数结构体
 * @class
 */
class SkipSyncCheckItemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id，如：sync-4ddgid2
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 需要跳过校验项的步骤id，需要通过`DescribeCheckSyncJobResult`接口返回StepInfos[i].StepId字段获取，例如：["OptimizeCheck"]
         * @type {Array.<string> || null}
         */
        this.StepIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.StepIds = 'StepIds' in params ? params.StepIds : null;

    }
}

/**
 * SkipSyncCheckItem返回参数结构体
 * @class
 */
class SkipSyncCheckItemResponse extends  AbstractModel {
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
 * IsolateSyncJob返回参数结构体
 * @class
 */
class IsolateSyncJobResponse extends  AbstractModel {
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
 * DescribeMigrationJobs请求参数结构体
 * @class
 */
class DescribeMigrationJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID，如：dts-amm1jw5q
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 数据迁移任务名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 数据迁移任务状态，可取值包括：created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行中)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * 源实例ID，格式如：cdb-c1nl9rpv
         * @type {string || null}
         */
        this.SrcInstanceId = null;

        /**
         * 源实例地域，如：ap-guangzhou
         * @type {string || null}
         */
        this.SrcRegion = null;

        /**
         * 源实例数据库类型，如：sqlserver,mysql,mongodb,redis,tendis,keewidb,clickhouse,cynosdbmysql,percona,tdsqlpercona,mariadb,tdsqlmysql,postgresql
         * @type {Array.<string> || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 源实例接入类型，值包括：extranet(外网)、vpncloud(云vpn接入的实例)、dcg(专线接入的实例)、ccn(云联网接入的实例)、cdb(云上cdb实例)、cvm(cvm自建实例)
         * @type {Array.<string> || null}
         */
        this.SrcAccessType = null;

        /**
         * 目标实例ID，格式如：cdb-c1nl9rpv
         * @type {string || null}
         */
        this.DstInstanceId = null;

        /**
         * 目标实例地域，如：ap-guangzhou
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * 目标源实例数据库类型，如：sqlserver,mysql,mongodb,redis,tendis,keewidb,clickhouse,cynosdbmysql,percona,tdsqlpercona,mariadb,tdsqlmysql,postgresql
         * @type {Array.<string> || null}
         */
        this.DstDatabaseType = null;

        /**
         * 目标实例接入类型，值包括：extranet(外网)、vpncloud(云vpn接入的实例)、dcg(专线接入的实例)、ccn(云联网接入的实例)、cdb(云上cdb实例)、cvm(cvm自建实例)
         * @type {Array.<string> || null}
         */
        this.DstAccessType = null;

        /**
         * 任务运行模式，值包括：immediate(立即运行)，timed(定时运行)
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * 排序方式，可能取值为asc、desc，默认按照创建时间倒序
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * 返回实例数量，默认20，有效区间[1,100]
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 标签过滤
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.SrcInstanceId = 'SrcInstanceId' in params ? params.SrcInstanceId : null;
        this.SrcRegion = 'SrcRegion' in params ? params.SrcRegion : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;
        this.DstInstanceId = 'DstInstanceId' in params ? params.DstInstanceId : null;
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.OrderSeq = 'OrderSeq' in params ? params.OrderSeq : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * 数据一致性校验结果
 * @class
 */
class CompareTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一致性校验任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * 一致性校验结果，包括：unstart(未启动)、running(校验中)、canceled(已终止)、failed(校验任务失败)、inconsistent(不一致)、consistent(一致)、notexist(不存在校验任务)
注意：此字段可能返回 null，表示取不到有效值。
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
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ContinueSyncJob请求参数结构体
 * @class
 */
class ContinueSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id
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
 * CreateMigrationService返回参数结构体
 * @class
 */
class CreateMigrationServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下单成功随机生成的迁移任务id列表，形如：dts-c1f6rs21
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

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
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 同步任务id
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
 * DescribeMigrationCheckJob返回参数结构体
 * @class
 */
class DescribeMigrationCheckJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 校验任务执行状态，如：notStarted(未开始)、running(校验中)、failed(校验任务失败)、success(任务成功)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 校验任务结果输出简要信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BriefMsg = null;

        /**
         * 检查步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CheckStep> || null}
         */
        this.StepInfo = null;

        /**
         * 校验结果，如：checkPass(校验通过)、checkNotPass(校验未通过)
         * @type {string || null}
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
        this.BriefMsg = 'BriefMsg' in params ? params.BriefMsg : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new CheckStep();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库信息
 * @class
 */
class DBInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表示节点角色，针对分布式数据库，如mongodb中的mongos节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 内核版本，针对mariadb的不同内核版本等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbKernel = null;

        /**
         * 实例的IP地址，对于公网、专线、VPN、云联网、自研上云、VPC等接入方式此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 实例的端口，对于公网、云主机自建、专线、VPN、云联网、自研上云、VPC等接入方式此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 实例的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 实例的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * CVM实例短ID，格式如：ins-olgl39y8；与云服务器控制台页面显示的实例ID相同；如果接入类型为云主机自建的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CvmInstanceId = null;

        /**
         * VPN网关ID，格式如：vpngw-9ghexg7q；如果接入类型为vpncloud的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpnGwId = null;

        /**
         * 专线网关ID，格式如：dcg-0rxtqqxb；如果接入类型为专线接入的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqDcgId = null;

        /**
         * 数据库实例ID，格式如：cdb-powiqx8q；如果接入类型为云数据库的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 云联网ID，如：ccn-afp6kltc 注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CcnGwId = null;

        /**
         * 私有网络ID，格式如：vpc-92jblxto；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网ID，格式如：subnet-3paxmkdz；如果接入类型为vpc、vpncloud、ccn、dcg的方式，此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 数据库版本，当实例为RDS实例时才有效，格式如：5.6或者5.7，默认为5.6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 实例所属账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Account = null;

        /**
         * 跨账号迁移时的角色,只允许[a-zA-Z0-9\-\_]+
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountRole = null;

        /**
         * 资源所属账号 为空或self(表示本账号内资源)、other(表示其他账户资源)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountMode = null;

        /**
         * 临时密钥Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时密钥Key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * 临时Token
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TmpToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.DbKernel = 'DbKernel' in params ? params.DbKernel : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.CvmInstanceId = 'CvmInstanceId' in params ? params.CvmInstanceId : null;
        this.UniqVpnGwId = 'UniqVpnGwId' in params ? params.UniqVpnGwId : null;
        this.UniqDcgId = 'UniqDcgId' in params ? params.UniqDcgId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CcnGwId = 'CcnGwId' in params ? params.CcnGwId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.AccountRole = 'AccountRole' in params ? params.AccountRole : null;
        this.AccountMode = 'AccountMode' in params ? params.AccountMode : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.TmpToken = 'TmpToken' in params ? params.TmpToken : null;

    }
}

/**
 * 数据同步中的描述源端和目的端的信息
 * @class
 */
class Endpoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域英文名，如：ap-guangzhou
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * tdsql mysql版的节点类型，枚举值为proxy、set
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 数据库内核类型，tdsql中用于区分不同内核：percona,mariadb,mysql
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbKernel = null;

        /**
         * 数据库实例ID，格式如：cdb-powiqx8q
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例的IP地址，接入类型为非cdb时此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 实例端口，接入类型为非cdb时此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 用户名，对于访问需要用户名密码认证的实例必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 密码，对于访问需要用户名密码认证的实例必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 数据库名，数据库为cdwpg时，需要提供
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 私有网络ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：vpc-92jblxto
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网ID，对于私有网络、专线、VPN的接入方式此项必填，格式如：subnet-3paxmkdz
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * CVM实例短ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要传递此字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CvmInstanceId = null;

        /**
         * 专线网关ID，对于专线接入类型此项必填，格式如：dcg-0rxtqqxb
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqDcgId = null;

        /**
         * VPN网关ID，对于vpn接入类型此项必填，格式如：vpngw-9ghexg7q
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpnGwId = null;

        /**
         * 云联网ID，对于云联网接入类型此项必填，如：ccn-afp6kltc
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 云厂商类型，当实例为RDS实例时，填写为aliyun, 其他情况均填写others，默认为others
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Supplier = null;

        /**
         * 数据库版本，当实例为RDS实例时才有效，其他实例忽略，格式如：5.6或者5.7，默认为5.6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * 实例所属账号，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Account = null;

        /**
         * 资源所属账号 为空或self(表示本账号内资源)、other(表示跨账号资源)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountMode = null;

        /**
         * 跨账号同步时的角色，只允许[a-zA-Z0-9\-\_]+，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountRole = null;

        /**
         * 外部角色id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleExternalId = null;

        /**
         * 临时密钥Id，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时密钥Key，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * 临时Token，如果为跨账号实例此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TmpToken = null;

        /**
         * 是否走加密传输、UnEncrypted表示不走加密传输，Encrypted表示走加密传输，默认UnEncrypted
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EncryptConn = null;

        /**
         * 数据库所属网络环境，AccessType为云联网(ccn)时必填， UserIDC表示用户IDC、TencentVPC表示腾讯云VPC；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseNetEnv = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.DbKernel = 'DbKernel' in params ? params.DbKernel : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CvmInstanceId = 'CvmInstanceId' in params ? params.CvmInstanceId : null;
        this.UniqDcgId = 'UniqDcgId' in params ? params.UniqDcgId : null;
        this.UniqVpnGwId = 'UniqVpnGwId' in params ? params.UniqVpnGwId : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.Supplier = 'Supplier' in params ? params.Supplier : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.AccountMode = 'AccountMode' in params ? params.AccountMode : null;
        this.AccountRole = 'AccountRole' in params ? params.AccountRole : null;
        this.RoleExternalId = 'RoleExternalId' in params ? params.RoleExternalId : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.TmpToken = 'TmpToken' in params ? params.TmpToken : null;
        this.EncryptConn = 'EncryptConn' in params ? params.EncryptConn : null;
        this.DatabaseNetEnv = 'DatabaseNetEnv' in params ? params.DatabaseNetEnv : null;

    }
}

/**
 * 数据不一致的表详情
 * @class
 */
class DifferenceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据不一致的表数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 校验不一致的表详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DifferenceItem> || null}
         */
        this.Items = null;

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
                let obj = new DifferenceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * CreateCheckSyncJob返回参数结构体
 * @class
 */
class CreateCheckSyncJobResponse extends  AbstractModel {
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
 * 一致性校验库表对象
 * @class
 */
class CompareObjectItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 数据库选择模式: all 为当前对象下的所有对象,partial 为部分对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * schema名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 表选择模式: all 为当前对象下的所有表对象,partial 为部分表对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableMode = null;

        /**
         * 用于一致性校验的表配置，当 TableMode 为 partial 时，需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CompareTableItem> || null}
         */
        this.Tables = null;

        /**
         * 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewMode = null;

        /**
         * 用于一致性校验的视图配置，当 ViewMode 为 partial 时， 需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CompareViewItem> || null}
         */
        this.Views = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.TableMode = 'TableMode' in params ? params.TableMode : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new CompareTableItem();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }
        this.ViewMode = 'ViewMode' in params ? params.ViewMode : null;

        if (params.Views) {
            this.Views = new Array();
            for (let z in params.Views) {
                let obj = new CompareViewItem();
                obj.deserialize(params.Views[z]);
                this.Views.push(obj);
            }
        }

    }
}

/**
 * ConfigureSyncJob请求参数结构体
 * @class
 */
class ConfigureSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步实例id（即标识一个同步作业），形如sync-werwfs23
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 源端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云),注意具体可选值依赖当前链路
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 目标端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)、ckafka(CKafka实例),注意具体可选值依赖当前链路
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 同步库表对象信息
         * @type {Objects || null}
         */
        this.Objects = null;

        /**
         * 同步任务名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 枚举值是 liteMode 和 fullMode ，分别对应精简模式或正常模式
         * @type {string || null}
         */
        this.JobMode = null;

        /**
         * 运行模式，取值如：Immediate(表示立即运行，默认为此项值)、Timed(表示定时运行)
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * 期待启动时间，当RunMode取值为Timed时，此值必填，形如："2006-01-02 15:04:05"
         * @type {string || null}
         */
        this.ExpectRunTime = null;

        /**
         * 源端信息，单节点数据库使用，且SrcNodeType传single
         * @type {Endpoint || null}
         */
        this.SrcInfo = null;

        /**
         * 目标端信息，单节点数据库使用
         * @type {Endpoint || null}
         */
        this.DstInfo = null;

        /**
         * 同步任务选项
         * @type {Options || null}
         */
        this.Options = null;

        /**
         * 自动重试的时间段、可设置5至720分钟、0表示不重试
         * @type {number || null}
         */
        this.AutoRetryTimeRangeMinutes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.Objects) {
            let obj = new Objects();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.JobMode = 'JobMode' in params ? params.JobMode : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;

        if (params.SrcInfo) {
            let obj = new Endpoint();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new Endpoint();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

        if (params.Options) {
            let obj = new Options();
            obj.deserialize(params.Options)
            this.Options = obj;
        }
        this.AutoRetryTimeRangeMinutes = 'AutoRetryTimeRangeMinutes' in params ? params.AutoRetryTimeRangeMinutes : null;

    }
}

/**
 * 查询迁移实例列表的实例对象
 * @class
 */
class MigrateDBItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例Vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 实例Vport
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 是否可以作为迁移对象，1-可以，0-不可以
         * @type {number || null}
         */
        this.Usable = null;

        /**
         * 不可以作为迁移对象的原因
         * @type {string || null}
         */
        this.Hint = null;

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
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Usable = 'Usable' in params ? params.Usable : null;
        this.Hint = 'Hint' in params ? params.Hint : null;

    }
}

/**
 * DescribeMigrateDBInstances请求参数结构体
 * @class
 */
class DescribeMigrateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库类型，如mysql
         * @type {string || null}
         */
        this.DatabaseType = null;

        /**
         * 实例作为迁移的源还是目标,src(表示源)，dst(表示目标)
         * @type {string || null}
         */
        this.MigrateRole = null;

        /**
         * 云数据库实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 云数据库名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 返回数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 资源所属账号 为空值或self(表示本账号内资源)、other(表示其他账户资源)
         * @type {string || null}
         */
        this.AccountMode = null;

        /**
         * 临时密钥Id，若为跨账号资源此项必填
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时密钥Key，若为跨账号资源此项必填
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * 临时密钥Token，若为跨账号资源此项必填
         * @type {string || null}
         */
        this.TmpToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseType = 'DatabaseType' in params ? params.DatabaseType : null;
        this.MigrateRole = 'MigrateRole' in params ? params.MigrateRole : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.AccountMode = 'AccountMode' in params ? params.AccountMode : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.TmpToken = 'TmpToken' in params ? params.TmpToken : null;

    }
}

/**
 * 校验任务运行详情
 * @class
 */
class CheckStepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * 任务步骤信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcessProgress || null}
         */
        this.Progress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.EndAt = 'EndAt' in params ? params.EndAt : null;

        if (params.Progress) {
            let obj = new ProcessProgress();
            obj.deserialize(params.Progress)
            this.Progress = obj;
        }

    }
}

/**
 * 错误信息及告警信息对象
 * @class
 */
class ProcessStepTip extends  AbstractModel {
    constructor(){
        super();

        /**
         * 提示信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 解决方案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 文档提示
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Message = 'Message' in params ? params.Message : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.HelpDoc = 'HelpDoc' in params ? params.HelpDoc : null;

    }
}

/**
 * ModifyCompareTask请求参数结构体
 * @class
 */
class ModifyCompareTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 数据对比对象模式，sameAsMigrate(全部迁移对象， 默认为此项配置)、custom(自定义)，注意自定义对比对象必须是迁移对象的子集
         * @type {string || null}
         */
        this.ObjectMode = null;

        /**
         * 对比对象，若CompareObjectMode取值为custom，则此项必填
         * @type {CompareObject || null}
         */
        this.Objects = null;

        /**
         * 一致性校验选项
         * @type {CompareOptions || null}
         */
        this.Options = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ObjectMode = 'ObjectMode' in params ? params.ObjectMode : null;

        if (params.Objects) {
            let obj = new CompareObject();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }

        if (params.Options) {
            let obj = new CompareOptions();
            obj.deserialize(params.Options)
            this.Options = obj;
        }

    }
}

/**
 * RecoverSyncJob请求参数结构体
 * @class
 */
class RecoverSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步实例id（即标识一个同步作业），形如sync-werwfs23
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
 * 需要同步的库表对象
 * @class
 */
class Database extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要迁移或同步的库名，当ObjectMode为Partial时，此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 迁移或同步后的库名，默认与源库相同
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewDbName = null;

        /**
         * DB选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当Mode为Partial时，此项必填。注意，高级对象的同步不依赖此值，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbMode = null;

        /**
         * 迁移或同步的 schema
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 迁移或同步后的 schema name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewSchemaName = null;

        /**
         * 表选择模式: All(为当前对象下的所有对象)，Partial(部分对象)，当DBMode为Partial时此项必填，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableMode = null;

        /**
         * 表图对象集合，当 TableMode 为 Partial 时，此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Table> || null}
         */
        this.Tables = null;

        /**
         * 视图选择模式: All 为当前对象下的所有视图对象,Partial 为部分视图对象，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewMode = null;

        /**
         * 视图对象集合，当 ViewMode 为 Partial 时， 此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<View> || null}
         */
        this.Views = null;

        /**
         * 选择要同步的模式，Partial为部分，All为整选，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FunctionMode = null;

        /**
         * FunctionMode取值为Partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Functions = null;

        /**
         * 选择要同步的模式，Partial为部分，All为整选，如果整库同步此处应该为All。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcedureMode = null;

        /**
         * ProcedureMode取值为Partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Procedures = null;

        /**
         * 触发器迁移模式，All(为当前对象下的所有对象)，Partial(部分对象)，如果整库同步此处应该为All。数据同步暂不支持此高级对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TriggerMode = null;

        /**
         * 当TriggerMode为partial，指定要迁移的触发器名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Triggers = null;

        /**
         * 事件迁移模式，All(为当前对象下的所有对象)，Partial(部分对象)，如果整库同步此处应该为All。数据同步暂不支持此高级对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventMode = null;

        /**
         * 当EventMode为partial，指定要迁移的事件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Events = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.NewDbName = 'NewDbName' in params ? params.NewDbName : null;
        this.DbMode = 'DbMode' in params ? params.DbMode : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.NewSchemaName = 'NewSchemaName' in params ? params.NewSchemaName : null;
        this.TableMode = 'TableMode' in params ? params.TableMode : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new Table();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }
        this.ViewMode = 'ViewMode' in params ? params.ViewMode : null;

        if (params.Views) {
            this.Views = new Array();
            for (let z in params.Views) {
                let obj = new View();
                obj.deserialize(params.Views[z]);
                this.Views.push(obj);
            }
        }
        this.FunctionMode = 'FunctionMode' in params ? params.FunctionMode : null;
        this.Functions = 'Functions' in params ? params.Functions : null;
        this.ProcedureMode = 'ProcedureMode' in params ? params.ProcedureMode : null;
        this.Procedures = 'Procedures' in params ? params.Procedures : null;
        this.TriggerMode = 'TriggerMode' in params ? params.TriggerMode : null;
        this.Triggers = 'Triggers' in params ? params.Triggers : null;
        this.EventMode = 'EventMode' in params ? params.EventMode : null;
        this.Events = 'Events' in params ? params.Events : null;

    }
}

/**
 * ModifyMigrationJob请求参数结构体
 * @class
 */
class ModifyMigrationJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行)
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * 迁移任务配置选项，描述任务如何执行迁移等一系列配置信息
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * 源实例信息
         * @type {DBEndpointInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标实例信息
         * @type {DBEndpointInfo || null}
         */
        this.DstInfo = null;

        /**
         * 迁移任务名称，最大长度128
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 期待启动时间，当RunMode取值为timed时，此值必填，形如："2006-01-02 15:04:05"
         * @type {string || null}
         */
        this.ExpectRunTime = null;

        /**
         * 标签信息
         * @type {Array.<TagItem> || null}
         */
        this.Tags = null;

        /**
         * 自动重试的时间段、可设置5至720分钟、0表示不重试
         * @type {number || null}
         */
        this.AutoRetryTimeRangeMinutes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }

        if (params.SrcInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoRetryTimeRangeMinutes = 'AutoRetryTimeRangeMinutes' in params ? params.AutoRetryTimeRangeMinutes : null;

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
         * 同步任务id，如sync-werwfs23
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 同步任务名
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 排序字段，可以取值为CreateTime
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序方式，升序为ASC，降序为DESC，默认为CreateTime降序
         * @type {string || null}
         */
        this.OrderSeq = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回同步任务实例数量，默认20，有效区间[1,100]
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 状态集合，如Initialized,CheckPass,Running,ResumableErr,Stopped
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * 运行模式，如Immediate:立即运行，Timed:定时运行
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * 任务类型，如mysql2mysql：msyql同步到mysql
         * @type {string || null}
         */
        this.JobType = null;

        /**
         * 付费类型，PrePay：预付费，PostPay：后付费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * tag
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.JobType = 'JobType' in params ? params.JobType : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * 同步任务的步骤信息
 * @class
 */
class SyncDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总步骤数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * 当前步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * 总体进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 当前步骤进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CurrentStepProgress = null;

        /**
         * 同步两端数据量差距
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * 同步两端时间差距
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * 总体描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 详细步骤信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StepInfo> || null}
         */
        this.StepInfos = null;

        /**
         * 不能发起一致性校验的原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CauseOfCompareDisable = null;

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
        this.Message = 'Message' in params ? params.Message : null;

        if (params.StepInfos) {
            this.StepInfos = new Array();
            for (let z in params.StepInfos) {
                let obj = new StepInfo();
                obj.deserialize(params.StepInfos[z]);
                this.StepInfos.push(obj);
            }
        }
        this.CauseOfCompareDisable = 'CauseOfCompareDisable' in params ? params.CauseOfCompareDisable : null;

    }
}

/**
 * ResumeSyncJob请求参数结构体
 * @class
 */
class ResumeSyncJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id
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
 * 用于一致性校验的表配置
 * @class
 */
class CompareTableItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名称
注意：此字段可能返回 null，表示取不到有效值。
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
        this.TableName = 'TableName' in params ? params.TableName : null;

    }
}

/**
 * ConfigureSyncJob返回参数结构体
 * @class
 */
class ConfigureSyncJobResponse extends  AbstractModel {
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
 * 用于一致性校验的视图配置
 * @class
 */
class CompareViewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视图名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewName = 'ViewName' in params ? params.ViewName : null;

    }
}

/**
 * 单个步骤的详细信息
 * @class
 */
class StepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * 步骤名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * 步骤标号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * 当前状态，是否完成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 步骤开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StepTip> || null}
         */
        this.Errors = null;

        /**
         * 警告信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StepTip> || null}
         */
        this.Warnings = null;

        /**
         * 当前步骤进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

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

        if (params.Errors) {
            this.Errors = new Array();
            for (let z in params.Errors) {
                let obj = new StepTip();
                obj.deserialize(params.Errors[z]);
                this.Errors.push(obj);
            }
        }

        if (params.Warnings) {
            this.Warnings = new Array();
            for (let z in params.Warnings) {
                let obj = new StepTip();
                obj.deserialize(params.Warnings[z]);
                this.Warnings.push(obj);
            }
        }
        this.Progress = 'Progress' in params ? params.Progress : null;

    }
}

/**
 * ResumeMigrateJob请求参数结构体
 * @class
 */
class ResumeMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 恢复任务的模式，目前的取值有：clearData 清空目标实例数据，overwrite 以覆盖写的方式执行任务，normal 跟正常流程一样，不做额外动作；注意，clearData、overwrite仅对redis生效，normal仅针对非redis链路生效
         * @type {string || null}
         */
        this.ResumeOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.ResumeOption = 'ResumeOption' in params ? params.ResumeOption : null;

    }
}

/**
 * PauseSyncJob返回参数结构体
 * @class
 */
class PauseSyncJobResponse extends  AbstractModel {
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
 * 计费状态信息
 * @class
 */
class TradeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 上一次交易订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastDealName = null;

        /**
         * 实例规格，包括：micro、small、medium、large、xlarge、2xlarge等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceClass = null;

        /**
         * 计费任务状态， normal(计费或待计费)、resizing(变配中)、reversing(冲正中，比较短暂的状态)、isolating(隔离中，比较短暂的状态)、isolated(已隔离)、offlining(下线中)、offlined(已下线)、notBilled(未计费)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeStatus = null;

        /**
         * 到期时间，格式为"yyyy-mm-dd hh:mm:ss"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 下线时间，格式为"yyyy-mm-dd hh:mm:ss"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * 隔离时间，格式为"yyyy-mm-dd hh:mm:ss"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolateTime = null;

        /**
         * 下线原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OfflineReason = null;

        /**
         * 隔离原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolateReason = null;

        /**
         * 付费类型，包括：postpay(后付费)、prepay(预付费)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * 任务计费类型，包括：billing(计费)、notBilling(不计费)、 promotions(促销活动中)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillingType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.LastDealName = 'LastDealName' in params ? params.LastDealName : null;
        this.InstanceClass = 'InstanceClass' in params ? params.InstanceClass : null;
        this.TradeStatus = 'TradeStatus' in params ? params.TradeStatus : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.OfflineReason = 'OfflineReason' in params ? params.OfflineReason : null;
        this.IsolateReason = 'IsolateReason' in params ? params.IsolateReason : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.BillingType = 'BillingType' in params ? params.BillingType : null;

    }
}

/**
 * StartCompare返回参数结构体
 * @class
 */
class StartCompareResponse extends  AbstractModel {
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
 * CreateCompareTask返回参数结构体
 * @class
 */
class CreateCompareTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompareTaskId = null;

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
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopCompare返回参数结构体
 * @class
 */
class StopCompareResponse extends  AbstractModel {
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
 * SkipCheckItem请求参数结构体
 * @class
 */
class SkipCheckItemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 需要跳过校验项的步骤id，需要通过DescribeMigrationCheckJob接口返回StepInfo[i].StepId字段获取，例如：["OptimizeCheck"]
         * @type {Array.<string> || null}
         */
        this.StepIds = null;

        /**
         * 当出现外键依赖检查导致校验不通过时、可以通过该字段选择是否迁移外键依赖，当StepIds包含ConstraintCheck且该字段值为shield时表示不迁移外键依赖、当StepIds包含ConstraintCheck且值为migrate时表示迁移外键依赖
         * @type {string || null}
         */
        this.ForeignKeyFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.StepIds = 'StepIds' in params ? params.StepIds : null;
        this.ForeignKeyFlag = 'ForeignKeyFlag' in params ? params.ForeignKeyFlag : null;

    }
}

/**
 * 一致性校验摘要信息
 * @class
 */
class CompareAbstractInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 校验配置参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareOptions || null}
         */
        this.Options = null;

        /**
         * 一致性校验对比对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareObject || null}
         */
        this.Objects = null;

        /**
         * 对比结论: same,different
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Conclusion = null;

        /**
         * 任务状态: success,failed
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 总的表数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalTables = null;

        /**
         * 已校验的表数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CheckedTables = null;

        /**
         * 不一致的表数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DifferentTables = null;

        /**
         * 跳过校验的表数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SkippedTables = null;

        /**
         * 预估表总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NearlyTableCount = null;

        /**
         * 不一致的数据行数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DifferentRows = null;

        /**
         * 源库行数，当对比类型为**行数对比**时此项有意义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SrcSampleRows = null;

        /**
         * 目标库行数，当对比类型为**行数对比**时此项有意义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DstSampleRows = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartedAt = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinishedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Options) {
            let obj = new CompareOptions();
            obj.deserialize(params.Options)
            this.Options = obj;
        }

        if (params.Objects) {
            let obj = new CompareObject();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }
        this.Conclusion = 'Conclusion' in params ? params.Conclusion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TotalTables = 'TotalTables' in params ? params.TotalTables : null;
        this.CheckedTables = 'CheckedTables' in params ? params.CheckedTables : null;
        this.DifferentTables = 'DifferentTables' in params ? params.DifferentTables : null;
        this.SkippedTables = 'SkippedTables' in params ? params.SkippedTables : null;
        this.NearlyTableCount = 'NearlyTableCount' in params ? params.NearlyTableCount : null;
        this.DifferentRows = 'DifferentRows' in params ? params.DifferentRows : null;
        this.SrcSampleRows = 'SrcSampleRows' in params ? params.SrcSampleRows : null;
        this.DstSampleRows = 'DstSampleRows' in params ? params.DstSampleRows : null;
        this.StartedAt = 'StartedAt' in params ? params.StartedAt : null;
        this.FinishedAt = 'FinishedAt' in params ? params.FinishedAt : null;

    }
}

/**
 * 检查步骤
 * @class
 */
class CheckStep extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * 步骤Id， 如：ConnectDBCheck、VersionCheck、SrcPrivilegeCheck等，具体校验项和源目标实例相关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * 步骤名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * 此检查步骤的结果，pass(校验通过)、failed(校验失败)、notStarted(校验还未开始进行)、blocked(检验阻塞)、warning(校验有告警，但仍通过)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StepStatus = null;

        /**
         * 此检查步骤的错误消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StepMessage = null;

        /**
         * 每个检查步骤里的具体检查项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetailCheckItem> || null}
         */
        this.DetailCheckItems = null;

        /**
         * 是否已跳过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HasSkipped = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepNo = 'StepNo' in params ? params.StepNo : null;
        this.StepId = 'StepId' in params ? params.StepId : null;
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.StepStatus = 'StepStatus' in params ? params.StepStatus : null;
        this.StepMessage = 'StepMessage' in params ? params.StepMessage : null;

        if (params.DetailCheckItems) {
            this.DetailCheckItems = new Array();
            for (let z in params.DetailCheckItems) {
                let obj = new DetailCheckItem();
                obj.deserialize(params.DetailCheckItems[z]);
                this.DetailCheckItems.push(obj);
            }
        }
        this.HasSkipped = 'HasSkipped' in params ? params.HasSkipped : null;

    }
}

/**
 * 一致性校验对象信息
 * @class
 */
class CompareTaskItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 对比任务 Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * 对比任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 对比任务状态, 可能的值：created - 创建完成；readyRun - 等待运行；running - 运行中；success - 成功；stopping - 结束中；failed - 失败；canceled - 已终止
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 对比任务配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareObject || null}
         */
        this.Config = null;

        /**
         * 对比任务校验详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcessProgress || null}
         */
        this.CheckProcess = null;

        /**
         * 对比任务运行详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcessProgress || null}
         */
        this.CompareProcess = null;

        /**
         * 对比结果, 可能的值：same - 一致；different - 不一致；skipAll - 跳过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Conclusion = null;

        /**
         * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 任务启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartedAt = null;

        /**
         * 对比结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinishedAt = null;

        /**
         * 对比类型，dataCheck(完整数据对比)、sampleDataCheck(抽样数据对比)、rowsCount(行数对比)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 对比配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareOptions || null}
         */
        this.Options = null;

        /**
         * 一致性校验提示信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Config) {
            let obj = new CompareObject();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.CheckProcess) {
            let obj = new ProcessProgress();
            obj.deserialize(params.CheckProcess)
            this.CheckProcess = obj;
        }

        if (params.CompareProcess) {
            let obj = new ProcessProgress();
            obj.deserialize(params.CompareProcess)
            this.CompareProcess = obj;
        }
        this.Conclusion = 'Conclusion' in params ? params.Conclusion : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.StartedAt = 'StartedAt' in params ? params.StartedAt : null;
        this.FinishedAt = 'FinishedAt' in params ? params.FinishedAt : null;
        this.Method = 'Method' in params ? params.Method : null;

        if (params.Options) {
            let obj = new CompareOptions();
            obj.deserialize(params.Options)
            this.Options = obj;
        }
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyMigrateJobSpec返回参数结构体
 * @class
 */
class ModifyMigrateJobSpecResponse extends  AbstractModel {
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
         * 同步任务ids
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

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
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCompareTask请求参数结构体
 * @class
 */
class CreateCompareTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 数据对比任务名称，若为空则默认给CompareTaskId相同值
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 数据对比对象模式，sameAsMigrate(全部迁移对象， 默认为此项配置)，custom(自定义模式)
         * @type {string || null}
         */
        this.ObjectMode = null;

        /**
         * 一致性对比对象配置
         * @type {CompareObject || null}
         */
        this.Objects = null;

        /**
         * 一致性校验选项
         * @type {CompareOptions || null}
         */
        this.Options = null;

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
        this.ObjectMode = 'ObjectMode' in params ? params.ObjectMode : null;

        if (params.Objects) {
            let obj = new CompareObject();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }

        if (params.Options) {
            let obj = new CompareOptions();
            obj.deserialize(params.Options)
            this.Options = obj;
        }

    }
}

/**
 * StartCompare请求参数结构体
 * @class
 */
class StartCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
         * @type {string || null}
         */
        this.CompareTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;

    }
}

/**
 * DescribeMigrationCheckJob请求参数结构体
 * @class
 */
class DescribeMigrationCheckJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * DescribeMigrationDetail返回参数结构体
 * @class
 */
class DescribeMigrationDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 数据迁移任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 迁移任务简要错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BriefMsg = null;

        /**
         * 任务状态，取值为：created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行中)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务操作信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MigrateAction || null}
         */
        this.Action = null;

        /**
         * 迁移执行过程信息，在校验阶段显示校验过程步骤信息，在迁移阶段会显示迁移步骤信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MigrateDetailInfo || null}
         */
        this.StepInfo = null;

        /**
         * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DBEndpointInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标端信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DBEndpointInfo || null}
         */
        this.DstInfo = null;

        /**
         * 数据一致性校验结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareTaskInfo || null}
         */
        this.CompareTask = null;

        /**
         * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagItem> || null}
         */
        this.Tags = null;

        /**
         * 运行模式，取值如：immediate(表示立即运行)、timed(表示定时运行)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * 期待启动时间，当RunMode取值为timed时，此值必填，形如："2006-01-02 15:04:05"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpectRunTime = null;

        /**
         * 迁移选项，描述任务如何执行迁移等一系列配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MigrateOption || null}
         */
        this.MigrateOption = null;

        /**
         * 校验任务运行详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CheckStepInfo || null}
         */
        this.CheckStepInfo = null;

        /**
         * 描述计费相关的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TradeInfo || null}
         */
        this.TradeInfo = null;

        /**
         * 任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ErrorInfoItem> || null}
         */
        this.ErrorInfo = null;

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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BriefMsg = 'BriefMsg' in params ? params.BriefMsg : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Action) {
            let obj = new MigrateAction();
            obj.deserialize(params.Action)
            this.Action = obj;
        }

        if (params.StepInfo) {
            let obj = new MigrateDetailInfo();
            obj.deserialize(params.StepInfo)
            this.StepInfo = obj;
        }

        if (params.SrcInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

        if (params.CompareTask) {
            let obj = new CompareTaskInfo();
            obj.deserialize(params.CompareTask)
            this.CompareTask = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;

        if (params.MigrateOption) {
            let obj = new MigrateOption();
            obj.deserialize(params.MigrateOption)
            this.MigrateOption = obj;
        }

        if (params.CheckStepInfo) {
            let obj = new CheckStepInfo();
            obj.deserialize(params.CheckStepInfo)
            this.CheckStepInfo = obj;
        }

        if (params.TradeInfo) {
            let obj = new TradeInfo();
            obj.deserialize(params.TradeInfo)
            this.TradeInfo = obj;
        }

        if (params.ErrorInfo) {
            this.ErrorInfo = new Array();
            for (let z in params.ErrorInfo) {
                let obj = new ErrorInfoItem();
                obj.deserialize(params.ErrorInfo[z]);
                this.ErrorInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMigrateName请求参数结构体
 * @class
 */
class ModifyMigrateNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 修改后的迁移任务名
         * @type {string || null}
         */
        this.JobName = null;

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

    }
}

/**
 * 迁移任务列表
 * @class
 */
class JobItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据迁移任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 数据迁移任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 任务创建(提交)时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务更新时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 任务开始执行时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务执行结束时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 迁移任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BriefMsg = null;

        /**
         * 任务状态，取值为：creating(创建中)、created(创建完成)、checking(校验中)、checkPass(校验通过)、checkNotPass(校验不通过)、readyRun(准备运行)、running(任务运行)、readyComplete(准备完成)、success(任务成功)、failed(任务失败)、stopping(中止中)、completing(完成中)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务运行模式，值包括：immediate(立即运行)，timed(定时运行)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * 期待启动时间，当RunMode取值为timed时，此值必填，形如：2022-07-11 16:20:49
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpectRunTime = null;

        /**
         * 任务操作信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MigrateAction || null}
         */
        this.Action = null;

        /**
         * 迁移执行过程信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MigrateDetailInfo || null}
         */
        this.StepInfo = null;

        /**
         * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DBEndpointInfo || null}
         */
        this.SrcInfo = null;

        /**
         * 目标端信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DBEndpointInfo || null}
         */
        this.DstInfo = null;

        /**
         * 数据一致性校验结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CompareTaskInfo || null}
         */
        this.CompareTask = null;

        /**
         * 计费状态信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TradeInfo || null}
         */
        this.TradeInfo = null;

        /**
         * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagItem> || null}
         */
        this.Tags = null;

        /**
         * 自动重试时间段信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRetryTimeRangeMinutes = null;

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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BriefMsg = 'BriefMsg' in params ? params.BriefMsg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;

        if (params.Action) {
            let obj = new MigrateAction();
            obj.deserialize(params.Action)
            this.Action = obj;
        }

        if (params.StepInfo) {
            let obj = new MigrateDetailInfo();
            obj.deserialize(params.StepInfo)
            this.StepInfo = obj;
        }

        if (params.SrcInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DBEndpointInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

        if (params.CompareTask) {
            let obj = new CompareTaskInfo();
            obj.deserialize(params.CompareTask)
            this.CompareTask = obj;
        }

        if (params.TradeInfo) {
            let obj = new TradeInfo();
            obj.deserialize(params.TradeInfo)
            this.TradeInfo = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoRetryTimeRangeMinutes = 'AutoRetryTimeRangeMinutes' in params ? params.AutoRetryTimeRangeMinutes : null;

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
 * 同步的数据库对对象描述
 * @class
 */
class Objects extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移对象类型 Partial(部分对象)，默认为Partial
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 同步对象，当 Mode 为 Partial 时，不为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Database> || null}
         */
        this.Databases = null;

        /**
         * 高级对象类型，如function、procedure，当需要同步高级对象时，初始化类型必须包含结构初始化类型，即Options.InitType字段值为Structure或Full
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AdvancedObjects = null;

        /**
         * OnlineDDL类型，冗余字段不做配置用途
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OnlineDDL || null}
         */
        this.OnlineDDL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new Database();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.AdvancedObjects = 'AdvancedObjects' in params ? params.AdvancedObjects : null;

        if (params.OnlineDDL) {
            let obj = new OnlineDDL();
            obj.deserialize(params.OnlineDDL)
            this.OnlineDDL = obj;
        }

    }
}

/**
 * RecoverMigrateJob返回参数结构体
 * @class
 */
class RecoverMigrateJobResponse extends  AbstractModel {
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
 * 迁移对象信息，在配置库表视图等对象信息时大小写敏感
 * @class
 */
class DBItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要迁移或同步的库名，当ObjectMode为partial时，此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 迁移或同步后的库名，默认与源库相同
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewDbName = null;

        /**
         * 迁移或同步的 schema
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 迁移或同步后的 schema name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewSchemaName = null;

        /**
         * DB选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当ObjectMode为partial时，此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBMode = null;

        /**
         * schema选择模式: all(为当前对象下的所有对象)，partial(部分对象)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaMode = null;

        /**
         * 表选择模式: all(为当前对象下的所有对象)，partial(部分对象)，当DBMode为partial时此项必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableMode = null;

        /**
         * 表图对象集合，当 TableMode 为 partial 时，此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TableItem> || null}
         */
        this.Tables = null;

        /**
         * 视图选择模式: all 为当前对象下的所有视图对象,partial 为部分视图对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewMode = null;

        /**
         * 视图对象集合，当 ViewMode 为 partial 时， 此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ViewItem> || null}
         */
        this.Views = null;

        /**
         * postgresql独有参数，角色选择模式: all 为当前对象下的所有角色对象,partial 为部分角色对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleMode = null;

        /**
         * postgresql独有参数，当 RoleMode 为 partial 时， 此项需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RoleItem> || null}
         */
        this.Roles = null;

        /**
         * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FunctionMode = null;

        /**
         * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TriggerMode = null;

        /**
         * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventMode = null;

        /**
         * 选择要同步的模式，partial为部分，all为整选
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcedureMode = null;

        /**
         * FunctionMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Functions = null;

        /**
         * ProcedureMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Procedures = null;

        /**
         * EventMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Events = null;

        /**
         * TriggerMode取值为partial时需要填写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Triggers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.NewDbName = 'NewDbName' in params ? params.NewDbName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.NewSchemaName = 'NewSchemaName' in params ? params.NewSchemaName : null;
        this.DBMode = 'DBMode' in params ? params.DBMode : null;
        this.SchemaMode = 'SchemaMode' in params ? params.SchemaMode : null;
        this.TableMode = 'TableMode' in params ? params.TableMode : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new TableItem();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }
        this.ViewMode = 'ViewMode' in params ? params.ViewMode : null;

        if (params.Views) {
            this.Views = new Array();
            for (let z in params.Views) {
                let obj = new ViewItem();
                obj.deserialize(params.Views[z]);
                this.Views.push(obj);
            }
        }
        this.RoleMode = 'RoleMode' in params ? params.RoleMode : null;

        if (params.Roles) {
            this.Roles = new Array();
            for (let z in params.Roles) {
                let obj = new RoleItem();
                obj.deserialize(params.Roles[z]);
                this.Roles.push(obj);
            }
        }
        this.FunctionMode = 'FunctionMode' in params ? params.FunctionMode : null;
        this.TriggerMode = 'TriggerMode' in params ? params.TriggerMode : null;
        this.EventMode = 'EventMode' in params ? params.EventMode : null;
        this.ProcedureMode = 'ProcedureMode' in params ? params.ProcedureMode : null;
        this.Functions = 'Functions' in params ? params.Functions : null;
        this.Procedures = 'Procedures' in params ? params.Procedures : null;
        this.Events = 'Events' in params ? params.Events : null;
        this.Triggers = 'Triggers' in params ? params.Triggers : null;

    }
}

/**
 * DeleteCompareTask请求参数结构体
 * @class
 */
class DeleteCompareTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 对比任务 ID，形如：dts-8yv4w2i1-cmp-37skmii9
         * @type {string || null}
         */
        this.CompareTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;

    }
}

/**
 * 迁移执行过程信息
 * @class
 */
class MigrateDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总步骤数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepAll = null;

        /**
         * 当前步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepNow = null;

        /**
         * 主从差距，MB；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MasterSlaveDistance = null;

        /**
         * 主从差距，秒；只在任务正常，迁移或者同步的最后一步（追Binlog的阶段才有校），如果是非法值，返回-1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SecondsBehindMaster = null;

        /**
         * 步骤信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StepDetailInfo> || null}
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
        this.MasterSlaveDistance = 'MasterSlaveDistance' in params ? params.MasterSlaveDistance : null;
        this.SecondsBehindMaster = 'SecondsBehindMaster' in params ? params.SecondsBehindMaster : null;

        if (params.StepInfo) {
            this.StepInfo = new Array();
            for (let z in params.StepInfo) {
                let obj = new StepDetailInfo();
                obj.deserialize(params.StepInfo[z]);
                this.StepInfo.push(obj);
            }
        }

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
 * IsolateMigrateJob返回参数结构体
 * @class
 */
class IsolateMigrateJobResponse extends  AbstractModel {
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
 * 同步任务信息
 * @class
 */
class SyncJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步任务id，如：sync-btso140
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 同步任务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 付款方式，PostPay(按量付费)、PrePay(包年包月)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 运行模式，Immediate(表示立即运行，默认为此项值)、Timed(表示定时运行)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RunMode = null;

        /**
         * 期待运行时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpectRunTime = null;

        /**
         * 支持的所有操作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AllActions = null;

        /**
         * 当前状态能进行的操作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Actions = null;

        /**
         * 同步选项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Options || null}
         */
        this.Options = null;

        /**
         * 同步库表对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Objects || null}
         */
        this.Objects = null;

        /**
         * 任务规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * 过期时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 源端地域，如：ap-guangzhou等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SrcRegion = null;

        /**
         * 源端数据库类型，mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 源端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * 源端信息，单节点数据库使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Endpoint || null}
         */
        this.SrcInfo = null;

        /**
         * 目标端地域，如：ap-guangzhou等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * 目标端数据库类型，mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * 目标端接入类型，cdb(云数据库)、cvm(云主机自建)、vpc(私有网络)、extranet(外网)、vpncloud(vpn接入)、dcg(专线接入)、ccn(云联网)、intranet(自研上云)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * 目标端信息，单节点数据库使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Endpoint || null}
         */
        this.DstInfo = null;

        /**
         * 创建时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 开始时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务状态，UnInitialized(未初始化)、Initialized(已初始化)、Checking(校验中)、CheckPass(校验通过)、CheckNotPass(校验不通过)、ReadyRunning(准备运行)、Running(运行中)、Pausing(暂停中)、Paused(已暂停)、Stopping(停止中)、Stopped(已结束)、ResumableErr(任务错误)、Resuming(恢复中)、Failed(失败)、Released(已释放)、Resetting(重置中)、Unknown(未知)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 结束时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 标签相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagItem> || null}
         */
        this.Tags = null;

        /**
         * 同步任务运行步骤信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SyncDetailInfo || null}
         */
        this.Detail = null;

        /**
         * 用于计费的状态，可能取值有：Normal(正常状态)、Resizing(变配中)、Renewing(续费中)、Isolating(隔离中)、Isolated(已隔离)、Offlining(下线中)、Offlined(已下线)、NotBilled(未计费)、Recovering(解隔离)、PostPay2Prepaying(按量计费转包年包月中)、PrePay2Postpaying(包年包月转按量计费中)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeStatus = null;

        /**
         * 同步链路规格，如micro,small,medium,large
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceClass = null;

        /**
         * 自动续费标识，当PayMode值为PrePay则此项配置有意义，取值为：1（表示自动续费）、0（不自动续费）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 下线时间，格式为 yyyy-mm-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * 自动重试时间段设置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRetryTimeRangeMinutes = null;

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
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;
        this.ExpectRunTime = 'ExpectRunTime' in params ? params.ExpectRunTime : null;
        this.AllActions = 'AllActions' in params ? params.AllActions : null;
        this.Actions = 'Actions' in params ? params.Actions : null;

        if (params.Options) {
            let obj = new Options();
            obj.deserialize(params.Options)
            this.Options = obj;
        }

        if (params.Objects) {
            let obj = new Objects();
            obj.deserialize(params.Objects)
            this.Objects = obj;
        }
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.SrcRegion = 'SrcRegion' in params ? params.SrcRegion : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;

        if (params.SrcInfo) {
            let obj = new Endpoint();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;

        if (params.DstInfo) {
            let obj = new Endpoint();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Detail) {
            let obj = new SyncDetailInfo();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.TradeStatus = 'TradeStatus' in params ? params.TradeStatus : null;
        this.InstanceClass = 'InstanceClass' in params ? params.InstanceClass : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.AutoRetryTimeRangeMinutes = 'AutoRetryTimeRangeMinutes' in params ? params.AutoRetryTimeRangeMinutes : null;

    }
}

/**
 * 一致性校验选项
 * @class
 */
class CompareOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对比类型：dataCheck(完整数据对比)、sampleDataCheck(抽样数据对比)、rowsCount(行数对比)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 抽样比例;范围0,100
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * 线程数，取值1-5，默认为1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ThreadCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Method = 'Method' in params ? params.Method : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.ThreadCount = 'ThreadCount' in params ? params.ThreadCount : null;

    }
}

/**
 * 角色对象，postgresql独有参数
 * @class
 */
class RoleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 迁移后的角色名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewRoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.NewRoleName = 'NewRoleName' in params ? params.NewRoleName : null;

    }
}

/**
 * 标签过滤
 * @class
 */
class TagFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键值
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
         * @type {Array.<string> || null}
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
 * 步骤信息
 * @class
 */
class StepDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤序列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepNo = null;

        /**
         * 步骤展现名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * 步骤英文标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StepId = null;

        /**
         * 步骤状态:success(成功)、failed(失败)、running(执行中)、notStarted(未执行)、默认为notStarted
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 当前步骤开始的时间，格式为"yyyy-mm-dd hh:mm:ss"，该字段不存在或者为空是无意义 注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 步骤错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StepMessage = null;

        /**
         * 执行进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProcessStepTip> || null}
         */
        this.Errors = null;

        /**
         * 告警提示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProcessStepTip> || null}
         */
        this.Warnings = null;

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
        this.StepMessage = 'StepMessage' in params ? params.StepMessage : null;
        this.Percent = 'Percent' in params ? params.Percent : null;

        if (params.Errors) {
            this.Errors = new Array();
            for (let z in params.Errors) {
                let obj = new ProcessStepTip();
                obj.deserialize(params.Errors[z]);
                this.Errors.push(obj);
            }
        }

        if (params.Warnings) {
            this.Warnings = new Array();
            for (let z in params.Warnings) {
                let obj = new ProcessStepTip();
                obj.deserialize(params.Warnings[z]);
                this.Warnings.push(obj);
            }
        }

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
         * 付款类型, 如：PrePay(表示包年包月)、PostPay(表示按时按量)
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 源端数据库类型,如mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * 源端数据库所在地域,如ap-guangzhou
         * @type {string || null}
         */
        this.SrcRegion = null;

        /**
         * 目标端数据库类型,如mysql,cynosdbmysql,tdapg,tdpg,tdsqlmysql等
         * @type {string || null}
         */
        this.DstDatabaseType = null;

        /**
         * 目标端数据库所在地域,如ap-guangzhou
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * 同步任务规格，Standard:标准版
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * 标签信息
         * @type {Array.<TagItem> || null}
         */
        this.Tags = null;

        /**
         * 一次购买的同步任务数量，取值范围为[1, 10]，默认为1
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 自动续费标识，当PayMode值为PrePay则此项配置有意义，取值为：1（表示自动续费）、0（不自动续费，默认为此值）
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 同步链路规格，如micro,small,medium,large，默认为medium
         * @type {string || null}
         */
        this.InstanceClass = null;

        /**
         * 同步任务名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * 创建类似任务的现有任务Id
         * @type {string || null}
         */
        this.ExistedJobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.SrcRegion = 'SrcRegion' in params ? params.SrcRegion : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.Specification = 'Specification' in params ? params.Specification : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagItem();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.InstanceClass = 'InstanceClass' in params ? params.InstanceClass : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.ExistedJobId = 'ExistedJobId' in params ? params.ExistedJobId : null;

    }
}

/**
 * 视图对象
 * @class
 */
class ViewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 迁移后的视图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewViewName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.NewViewName = 'NewViewName' in params ? params.NewViewName : null;

    }
}

/**
 * DescribeCompareReport请求参数结构体
 * @class
 */
class DescribeCompareReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 校验任务 Id
         * @type {string || null}
         */
        this.CompareTaskId = null;

        /**
         * 校验不一致结果的 limit
         * @type {number || null}
         */
        this.DifferenceLimit = null;

        /**
         * 不一致的 Offset
         * @type {number || null}
         */
        this.DifferenceOffset = null;

        /**
         * 搜索条件，不一致的库名
         * @type {string || null}
         */
        this.DifferenceDB = null;

        /**
         * 搜索条件，不一致的表名
         * @type {string || null}
         */
        this.DifferenceTable = null;

        /**
         * 未校验的 Limit
         * @type {number || null}
         */
        this.SkippedLimit = null;

        /**
         * 未校验的 Offset
         * @type {number || null}
         */
        this.SkippedOffset = null;

        /**
         * 搜索条件，未校验的库名
         * @type {string || null}
         */
        this.SkippedDB = null;

        /**
         * 搜索条件，未校验的表名
         * @type {string || null}
         */
        this.SkippedTable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CompareTaskId = 'CompareTaskId' in params ? params.CompareTaskId : null;
        this.DifferenceLimit = 'DifferenceLimit' in params ? params.DifferenceLimit : null;
        this.DifferenceOffset = 'DifferenceOffset' in params ? params.DifferenceOffset : null;
        this.DifferenceDB = 'DifferenceDB' in params ? params.DifferenceDB : null;
        this.DifferenceTable = 'DifferenceTable' in params ? params.DifferenceTable : null;
        this.SkippedLimit = 'SkippedLimit' in params ? params.SkippedLimit : null;
        this.SkippedOffset = 'SkippedOffset' in params ? params.SkippedOffset : null;
        this.SkippedDB = 'SkippedDB' in params ? params.SkippedDB : null;
        this.SkippedTable = 'SkippedTable' in params ? params.SkippedTable : null;

    }
}

/**
 * 数据同步view的描述
 * @class
 */
class View extends  AbstractModel {
    constructor(){
        super();

        /**
         * view名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 新view名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewViewName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.NewViewName = 'NewViewName' in params ? params.NewViewName : null;

    }
}

/**
 * 标签
 * @class
 */
class TagItem extends  AbstractModel {
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
 * RecoverMigrateJob请求参数结构体
 * @class
 */
class RecoverMigrateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * OnlineDDL类型
 * @class
 */
class OnlineDDL extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 迁移对象选项，需要告知迁移服务迁移哪些库表对象
 * @class
 */
class DatabaseTableObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 迁移对象类型 all(全实例)，partial(部分对象)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ObjectMode = null;

        /**
         * 迁移对象，当 ObjectMode 为 partial 时，不为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DBItem> || null}
         */
        this.Databases = null;

        /**
         * 高级对象类型，如trigger、function、procedure、event
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AdvancedObjects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ObjectMode = 'ObjectMode' in params ? params.ObjectMode : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new DBItem();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.AdvancedObjects = 'AdvancedObjects' in params ? params.AdvancedObjects : null;

    }
}

/**
 * PauseMigrateJob返回参数结构体
 * @class
 */
class PauseMigrateJobResponse extends  AbstractModel {
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
 * 数据同步库表信息描述
 * @class
 */
class Table extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 新表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewTableName = null;

        /**
         * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilterCondition = null;

        /**
         * 同步临时表，注意此配置与NewTableName互斥，只能使用其中一种。当配置的同步对象为表级别且TableEditMode为pt时此项有意义，针对pt-osc等工具在同步过程中产生的临时表进行同步，需要提前将可能的临时表配置在这里，否则不会同步任何临时表。示例，如要对t1进行pt-osc操作，此项配置应该为["\_t1\_new","\_t1\_old"]；如要对t1进行gh-ost操作，此项配置应该为["\_t1\_ghc","\_t1\_gho","\_t1\_del"]，pt-osc与gh-ost产生的临时表可同时配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TmpTables = null;

        /**
         * 编辑表类型，rename(表映射)，pt(同步附加表)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableEditMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.NewTableName = 'NewTableName' in params ? params.NewTableName : null;
        this.FilterCondition = 'FilterCondition' in params ? params.FilterCondition : null;
        this.TmpTables = 'TmpTables' in params ? params.TmpTables : null;
        this.TableEditMode = 'TableEditMode' in params ? params.TableEditMode : null;

    }
}

/**
 * 一致性校验详细信息
 * @class
 */
class CompareDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据不一致的表详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DifferenceDetail || null}
         */
        this.Difference = null;

        /**
         * 跳过校验的表详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SkippedDetail || null}
         */
        this.Skipped = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Difference) {
            let obj = new DifferenceDetail();
            obj.deserialize(params.Difference)
            this.Difference = obj;
        }

        if (params.Skipped) {
            let obj = new SkippedDetail();
            obj.deserialize(params.Skipped)
            this.Skipped = obj;
        }

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
 * 数据一致性校验选项， 默认为不开启一致性校验
 * @class
 */
class ConsistencyOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一致性检测类型: full(全量检测迁移对象)、noCheck(不检测)、notConfigured(未配置)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

module.exports = {
    ModifyCompareTaskResponse: ModifyCompareTaskResponse,
    DescribeSyncJobsResponse: DescribeSyncJobsResponse,
    ModifyMigrationJobResponse: ModifyMigrationJobResponse,
    ModifyMigrateJobSpecRequest: ModifyMigrateJobSpecRequest,
    StartMigrateJobRequest: StartMigrateJobRequest,
    StepTip: StepTip,
    DestroyMigrateJobRequest: DestroyMigrateJobRequest,
    SkipCheckItemResponse: SkipCheckItemResponse,
    ResizeSyncJobResponse: ResizeSyncJobResponse,
    ResumeMigrateJobResponse: ResumeMigrateJobResponse,
    DifferenceItem: DifferenceItem,
    IsolateSyncJobRequest: IsolateSyncJobRequest,
    PauseMigrateJobRequest: PauseMigrateJobRequest,
    ContinueMigrateJobRequest: ContinueMigrateJobRequest,
    DescribeCheckSyncJobResultRequest: DescribeCheckSyncJobResultRequest,
    DestroySyncJobResponse: DestroySyncJobResponse,
    DescribeCompareReportResponse: DescribeCompareReportResponse,
    IsolateMigrateJobRequest: IsolateMigrateJobRequest,
    StopMigrateJobResponse: StopMigrateJobResponse,
    TableItem: TableItem,
    ModifyCompareTaskNameRequest: ModifyCompareTaskNameRequest,
    CompleteMigrateJobResponse: CompleteMigrateJobResponse,
    DescribeMigrateDBInstancesResponse: DescribeMigrateDBInstancesResponse,
    KeyValuePairOption: KeyValuePairOption,
    CreateCheckSyncJobRequest: CreateCheckSyncJobRequest,
    StopSyncJobRequest: StopSyncJobRequest,
    DescribeMigrationDetailRequest: DescribeMigrationDetailRequest,
    DestroySyncJobRequest: DestroySyncJobRequest,
    ResizeSyncJobRequest: ResizeSyncJobRequest,
    DdlOption: DdlOption,
    ConflictHandleOption: ConflictHandleOption,
    ResumeSyncJobResponse: ResumeSyncJobResponse,
    ModifyCompareTaskNameResponse: ModifyCompareTaskNameResponse,
    PauseSyncJobRequest: PauseSyncJobRequest,
    CreateMigrateCheckJobResponse: CreateMigrateCheckJobResponse,
    ContinueMigrateJobResponse: ContinueMigrateJobResponse,
    CreateMigrationServiceRequest: CreateMigrationServiceRequest,
    DetailCheckItem: DetailCheckItem,
    DescribeCompareTasksRequest: DescribeCompareTasksRequest,
    CompareObject: CompareObject,
    ErrorInfoItem: ErrorInfoItem,
    RecoverSyncJobResponse: RecoverSyncJobResponse,
    MigrateAction: MigrateAction,
    DeleteCompareTaskResponse: DeleteCompareTaskResponse,
    DBEndpointInfo: DBEndpointInfo,
    ContinueSyncJobResponse: ContinueSyncJobResponse,
    Options: Options,
    CompleteMigrateJobRequest: CompleteMigrateJobRequest,
    DescribeCompareTasksResponse: DescribeCompareTasksResponse,
    StopCompareRequest: StopCompareRequest,
    DescribeCheckSyncJobResultResponse: DescribeCheckSyncJobResultResponse,
    StopSyncJobResponse: StopSyncJobResponse,
    SkippedDetail: SkippedDetail,
    MigrateOption: MigrateOption,
    ModifyMigrateNameResponse: ModifyMigrateNameResponse,
    DescribeMigrationJobsResponse: DescribeMigrationJobsResponse,
    SkippedItem: SkippedItem,
    DestroyMigrateJobResponse: DestroyMigrateJobResponse,
    ProcessProgress: ProcessProgress,
    SkipSyncCheckItemRequest: SkipSyncCheckItemRequest,
    SkipSyncCheckItemResponse: SkipSyncCheckItemResponse,
    IsolateSyncJobResponse: IsolateSyncJobResponse,
    CreateMigrateCheckJobRequest: CreateMigrateCheckJobRequest,
    DescribeMigrationJobsRequest: DescribeMigrationJobsRequest,
    CompareTaskInfo: CompareTaskInfo,
    ContinueSyncJobRequest: ContinueSyncJobRequest,
    CreateMigrationServiceResponse: CreateMigrationServiceResponse,
    StartSyncJobRequest: StartSyncJobRequest,
    DescribeMigrationCheckJobResponse: DescribeMigrationCheckJobResponse,
    DBInfo: DBInfo,
    Endpoint: Endpoint,
    DifferenceDetail: DifferenceDetail,
    CreateCheckSyncJobResponse: CreateCheckSyncJobResponse,
    CompareObjectItem: CompareObjectItem,
    ConfigureSyncJobRequest: ConfigureSyncJobRequest,
    MigrateDBItem: MigrateDBItem,
    DescribeMigrateDBInstancesRequest: DescribeMigrateDBInstancesRequest,
    CheckStepInfo: CheckStepInfo,
    ProcessStepTip: ProcessStepTip,
    ModifyCompareTaskRequest: ModifyCompareTaskRequest,
    RecoverSyncJobRequest: RecoverSyncJobRequest,
    Database: Database,
    ModifyMigrationJobRequest: ModifyMigrationJobRequest,
    DescribeSyncJobsRequest: DescribeSyncJobsRequest,
    SyncDetailInfo: SyncDetailInfo,
    ResumeSyncJobRequest: ResumeSyncJobRequest,
    CompareTableItem: CompareTableItem,
    ConfigureSyncJobResponse: ConfigureSyncJobResponse,
    CompareViewItem: CompareViewItem,
    StepInfo: StepInfo,
    ResumeMigrateJobRequest: ResumeMigrateJobRequest,
    PauseSyncJobResponse: PauseSyncJobResponse,
    TradeInfo: TradeInfo,
    StartCompareResponse: StartCompareResponse,
    CreateCompareTaskResponse: CreateCompareTaskResponse,
    StopCompareResponse: StopCompareResponse,
    SkipCheckItemRequest: SkipCheckItemRequest,
    CompareAbstractInfo: CompareAbstractInfo,
    CheckStep: CheckStep,
    CompareTaskItem: CompareTaskItem,
    ModifyMigrateJobSpecResponse: ModifyMigrateJobSpecResponse,
    CreateSyncJobResponse: CreateSyncJobResponse,
    CreateCompareTaskRequest: CreateCompareTaskRequest,
    StartCompareRequest: StartCompareRequest,
    DescribeMigrationCheckJobRequest: DescribeMigrationCheckJobRequest,
    DescribeMigrationDetailResponse: DescribeMigrationDetailResponse,
    ModifyMigrateNameRequest: ModifyMigrateNameRequest,
    JobItem: JobItem,
    StartSyncJobResponse: StartSyncJobResponse,
    Objects: Objects,
    RecoverMigrateJobResponse: RecoverMigrateJobResponse,
    DBItem: DBItem,
    DeleteCompareTaskRequest: DeleteCompareTaskRequest,
    MigrateDetailInfo: MigrateDetailInfo,
    StopMigrateJobRequest: StopMigrateJobRequest,
    IsolateMigrateJobResponse: IsolateMigrateJobResponse,
    SyncJobInfo: SyncJobInfo,
    CompareOptions: CompareOptions,
    RoleItem: RoleItem,
    TagFilter: TagFilter,
    StepDetailInfo: StepDetailInfo,
    CreateSyncJobRequest: CreateSyncJobRequest,
    ViewItem: ViewItem,
    DescribeCompareReportRequest: DescribeCompareReportRequest,
    View: View,
    TagItem: TagItem,
    RecoverMigrateJobRequest: RecoverMigrateJobRequest,
    OnlineDDL: OnlineDDL,
    DatabaseTableObject: DatabaseTableObject,
    PauseMigrateJobResponse: PauseMigrateJobResponse,
    Table: Table,
    CompareDetailInfo: CompareDetailInfo,
    StartMigrateJobResponse: StartMigrateJobResponse,
    ConsistencyOption: ConsistencyOption,

}
