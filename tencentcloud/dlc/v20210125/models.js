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
 * 数据库对象
 * @class
 */
class DatabaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据库描述信息，长度 0~256。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 数据库属性列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Property> || null}
         */
        this.Properties = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new Property();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }

    }
}

/**
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,每个过滤参数支持的过滤值不超过5个。
task-id - String - （任务ID过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。
task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。
task-sql-keyword - String - （SQL语句关键字）取值形如：DROP TABLE。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段，支持如下字段类型，create-time
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 排序方式，desc表示正序，asc表示反序， 默认为asc。
         * @type {string || null}
         */
        this.Sorting = null;

        /**
         * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Sorting = 'Sorting' in params ? params.Sorting : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * script实例。
 * @class
 */
class Script extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本Id，长度36字节。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScriptId = null;

        /**
         * 脚本名称，长度0-25。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScriptName = null;

        /**
         * 脚本描述，长度0-50。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScriptDesc = null;

        /**
         * 默认关联数据库。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * SQL描述，长度0-10000。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SQLStatement = null;

        /**
         * 更新时间戳， 单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.ScriptId = 'ScriptId' in params ? params.ScriptId : null;
        this.ScriptName = 'ScriptName' in params ? params.ScriptName : null;
        this.ScriptDesc = 'ScriptDesc' in params ? params.ScriptDesc : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SQLStatement = 'SQLStatement' in params ? params.SQLStatement : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeDatabases请求参数结构体
 * @class
 */
class DescribeDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 数据偏移量，从0开始，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 模糊匹配，库名关键字。
         * @type {string || null}
         */
        this.KeyWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;

    }
}

/**
 * DescribeTable请求参数结构体
 * @class
 */
class DescribeTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询对象表名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 查询表所在的数据库名称。
         * @type {string || null}
         */
        this.DatabaseName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;

    }
}

/**
 * 数据格式其它类型。
 * @class
 */
class Other extends  AbstractModel {
    constructor(){
        super();

        /**
         * 枚举类型，默认值为Json，可选值为[Json, Parquet, ORC, AVRD]之一。
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * 任务实例。
 * @class
 */
class TaskResponseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务所属Database的名称。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 任务数据量。
         * @type {number || null}
         */
        this.DataAmount = null;

        /**
         * 任务Id。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 计算时长，单位： ms。
         * @type {number || null}
         */
        this.UsedTime = null;

        /**
         * 任务输出路径。
         * @type {string || null}
         */
        this.OutputPath = null;

        /**
         * 任务创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务状态, 0 初始化， 1 执行中， 2 执行成功，3 数据写入中，-1 执行失败。
         * @type {number || null}
         */
        this.State = null;

        /**
         * 任务SQL类型，DDL|DML等
         * @type {string || null}
         */
        this.SQLType = null;

        /**
         * 任务SQL语句
         * @type {string || null}
         */
        this.SQL = null;

        /**
         * 结果是否过期。
         * @type {boolean || null}
         */
        this.ResultExpired = null;

        /**
         * 数据影响统计信息。
         * @type {string || null}
         */
        this.RowAffectInfo = null;

        /**
         * 任务结果数据表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSet = null;

        /**
         * 失败信息, 例如：errorMessage。该字段已废弃。
         * @type {string || null}
         */
        this.Error = null;

        /**
         * 任务执行进度num/100(%)
         * @type {number || null}
         */
        this.Percentage = null;

        /**
         * 任务执行输出信息。
         * @type {string || null}
         */
        this.OutputMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.DataAmount = 'DataAmount' in params ? params.DataAmount : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.UsedTime = 'UsedTime' in params ? params.UsedTime : null;
        this.OutputPath = 'OutputPath' in params ? params.OutputPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.State = 'State' in params ? params.State : null;
        this.SQLType = 'SQLType' in params ? params.SQLType : null;
        this.SQL = 'SQL' in params ? params.SQL : null;
        this.ResultExpired = 'ResultExpired' in params ? params.ResultExpired : null;
        this.RowAffectInfo = 'RowAffectInfo' in params ? params.RowAffectInfo : null;
        this.DataSet = 'DataSet' in params ? params.DataSet : null;
        this.Error = 'Error' in params ? params.Error : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;
        this.OutputMessage = 'OutputMessage' in params ? params.OutputMessage : null;

    }
}

/**
 * DescribeViews返回参数结构体
 * @class
 */
class DescribeViewsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视图对象列表。
         * @type {Array.<ViewResponseInfo> || null}
         */
        this.ViewList = null;

        /**
         * 实例总数。
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

        if (params.ViewList) {
            this.ViewList = new Array();
            for (let z in params.ViewList) {
                let obj = new ViewResponseInfo();
                obj.deserialize(params.ViewList[z]);
                this.ViewList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTask返回参数结构体
 * @class
 */
class CreateTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
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
 * 数据库和数据表属性信息
 * @class
 */
class Property extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性key名称。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 属性key对应的value。
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
 * DeleteScript请求参数结构体
 * @class
 */
class DeleteScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本id，其可以通过DescribeScripts接口提取
         * @type {Array.<string> || null}
         */
        this.ScriptIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScriptIds = 'ScriptIds' in params ? params.ScriptIds : null;

    }
}

/**
 * DescribeTable返回参数结构体
 * @class
 */
class DescribeTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据表对象
         * @type {TableResponseInfo || null}
         */
        this.Table = null;

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

        if (params.Table) {
            let obj = new TableResponseInfo();
            obj.deserialize(params.Table)
            this.Table = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTask请求参数结构体
 * @class
 */
class CreateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算任务，该参数中包含任务类型及其相关配置信息
         * @type {Task || null}
         */
        this.Task = null;

        /**
         * 数据库名称。任务在执行前均会USE该数据库， 除了首次建库时，其他情况建议均添加上。
         * @type {string || null}
         */
        this.DatabaseName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Task) {
            let obj = new Task();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;

    }
}

/**
 * 查询表信息对象
 * @class
 */
class TableResponseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据表基本信息。
         * @type {TableBaseInfo || null}
         */
        this.TableBaseInfo = null;

        /**
         * 数据表列信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Column> || null}
         */
        this.Columns = null;

        /**
         * 数据表分块信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Partition> || null}
         */
        this.Partitions = null;

        /**
         * 数据存储路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 数据表属性信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Property> || null}
         */
        this.Properties = null;

        /**
         * 数据表更新时间, 单位: ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 数据表创建时间,单位: ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 数据格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TableBaseInfo) {
            let obj = new TableBaseInfo();
            obj.deserialize(params.TableBaseInfo)
            this.TableBaseInfo = obj;
        }

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new Column();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new Partition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.Location = 'Location' in params ? params.Location : null;

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new Property();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.InputFormat = 'InputFormat' in params ? params.InputFormat : null;

    }
}

/**
 * CreateScript返回参数结构体
 * @class
 */
class CreateScriptResponse extends  AbstractModel {
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
 * 任务类型，任务如SQL查询等。
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * SQL查询任务
         * @type {SQLTask || null}
         */
        this.SQLTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SQLTask) {
            let obj = new SQLTask();
            obj.deserialize(params.SQLTask)
            this.SQLTask = obj;
        }

    }
}

/**
 * DescribeTables返回参数结构体
 * @class
 */
class DescribeTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据表对象列表。
         * @type {Array.<TableResponseInfo> || null}
         */
        this.TableList = null;

        /**
         * 实例总数。
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

        if (params.TableList) {
            this.TableList = new Array();
            for (let z in params.TableList) {
                let obj = new TableResponseInfo();
                obj.deserialize(params.TableList[z]);
                this.TableList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SQL语句对象
 * @class
 */
class Execution extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动生成SQL语句。
         * @type {string || null}
         */
        this.SQL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SQL = 'SQL' in params ? params.SQL : null;

    }
}

/**
 * DeleteScript返回参数结构体
 * @class
 */
class DeleteScriptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除的脚本数量
         * @type {number || null}
         */
        this.ScriptsAffected = null;

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
        this.ScriptsAffected = 'ScriptsAffected' in params ? params.ScriptsAffected : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTable返回参数结构体
 * @class
 */
class CreateTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的建表执行语句对象。
         * @type {Execution || null}
         */
        this.Execution = null;

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

        if (params.Execution) {
            let obj = new Execution();
            obj.deserialize(params.Execution)
            this.Execution = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDatabase返回参数结构体
 * @class
 */
class CreateDatabaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的建库执行语句对象。
         * @type {Execution || null}
         */
        this.Execution = null;

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

        if (params.Execution) {
            let obj = new Execution();
            obj.deserialize(params.Execution)
            this.Execution = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateScript请求参数结构体
 * @class
 */
class CreateScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本名称，最大不能超过255个字符。
         * @type {string || null}
         */
        this.ScriptName = null;

        /**
         * base64编码后的sql语句
         * @type {string || null}
         */
        this.SQLStatement = null;

        /**
         * 脚本描述， 不能超过50个字符
         * @type {string || null}
         */
        this.ScriptDesc = null;

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DatabaseName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScriptName = 'ScriptName' in params ? params.ScriptName : null;
        this.SQLStatement = 'SQLStatement' in params ? params.SQLStatement : null;
        this.ScriptDesc = 'ScriptDesc' in params ? params.ScriptDesc : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;

    }
}

/**
 * 数据表分块信息。
 * @class
 */
class Partition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区列名。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分区类型。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 对分区的描述。
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 返回数据表的相关信息。
 * @class
 */
class TableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据表配置信息。
         * @type {TableBaseInfo || null}
         */
        this.TableBaseInfo = null;

        /**
         * 数据表格式。每次入参可选如下其一的KV结构，[TextFile，CSV，Json, Parquet, ORC, AVRD]。
         * @type {DataFormat || null}
         */
        this.DataFormat = null;

        /**
         * 数据表列信息。
         * @type {Array.<Column> || null}
         */
        this.Columns = null;

        /**
         * 数据表分块信息。
         * @type {Array.<Partition> || null}
         */
        this.Partitions = null;

        /**
         * 数据存储路径。当前仅支持cos路径，格式如下：cosn://bucket-name/filepath。
         * @type {string || null}
         */
        this.Location = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TableBaseInfo) {
            let obj = new TableBaseInfo();
            obj.deserialize(params.TableBaseInfo)
            this.TableBaseInfo = obj;
        }

        if (params.DataFormat) {
            let obj = new DataFormat();
            obj.deserialize(params.DataFormat)
            this.DataFormat = obj;
        }

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new Column();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new Partition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.Location = 'Location' in params ? params.Location : null;

    }
}

/**
 * 数据表列信息。
 * @class
 */
class Column extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列名称，不区分大小写，最大支持25个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 列类型，支持如下类型定义:
string|tinyint|smallint|int|bigint|boolean|float|double|decimal|timestamp|date|binary|array<data_type>|map<primitive_type, data_type>|struct<col_name : data_type [COMMENT col_comment], ...>|uniontype<data_type, data_type, ...>。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 对该类的注释。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务对象列表。
         * @type {Array.<TaskResponseInfo> || null}
         */
        this.TaskList = null;

        /**
         * 实例总数。
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

        if (params.TaskList) {
            this.TaskList = new Array();
            for (let z in params.TaskList) {
                let obj = new TaskResponseInfo();
                obj.deserialize(params.TaskList[z]);
                this.TaskList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询列表过滤条件参数
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑或（OR）关系。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
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
 * DescribeScripts返回参数结构体
 * @class
 */
class DescribeScriptsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Script列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Script> || null}
         */
        this.Scripts = null;

        /**
         * 实例总数
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

        if (params.Scripts) {
            this.Scripts = new Array();
            for (let z in params.Scripts) {
                let obj = new Script();
                obj.deserialize(params.Scripts[z]);
                this.Scripts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据表配置信息
 * @class
 */
class TableBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该数据表所属数据库名字
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据表名字
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
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;

    }
}

/**
 * 查询视图信息对象
 * @class
 */
class ViewResponseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视图基本信息。
         * @type {ViewBaseInfo || null}
         */
        this.ViewBaseInfo = null;

        /**
         * 视图列信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Column> || null}
         */
        this.Columns = null;

        /**
         * 视图属性信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Property> || null}
         */
        this.Properties = null;

        /**
         * 视图创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 视图更新时间。
         * @type {string || null}
         */
        this.ModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ViewBaseInfo) {
            let obj = new ViewBaseInfo();
            obj.deserialize(params.ViewBaseInfo)
            this.ViewBaseInfo = obj;
        }

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new Column();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new Property();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;

    }
}

/**
 * 文本格式
 * @class
 */
class TextFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本类型，本参数取值为TextFile。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 处理文本用的正则表达式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Regex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;
        this.Regex = 'Regex' in params ? params.Regex : null;

    }
}

/**
 * 数据表数据格式。
 * @class
 */
class DataFormat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本格式，TextFile。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextFile || null}
         */
        this.TextFile = null;

        /**
         * 文本格式，CSV。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CSV || null}
         */
        this.CSV = null;

        /**
         * 文本格式，Json。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Other || null}
         */
        this.Json = null;

        /**
         * Parquet格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Other || null}
         */
        this.Parquet = null;

        /**
         * ORC格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Other || null}
         */
        this.ORC = null;

        /**
         * AVRO格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Other || null}
         */
        this.AVRO = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TextFile) {
            let obj = new TextFile();
            obj.deserialize(params.TextFile)
            this.TextFile = obj;
        }

        if (params.CSV) {
            let obj = new CSV();
            obj.deserialize(params.CSV)
            this.CSV = obj;
        }

        if (params.Json) {
            let obj = new Other();
            obj.deserialize(params.Json)
            this.Json = obj;
        }

        if (params.Parquet) {
            let obj = new Other();
            obj.deserialize(params.Parquet)
            this.Parquet = obj;
        }

        if (params.ORC) {
            let obj = new Other();
            obj.deserialize(params.ORC)
            this.ORC = obj;
        }

        if (params.AVRO) {
            let obj = new Other();
            obj.deserialize(params.AVRO)
            this.AVRO = obj;
        }

    }
}

/**
 * CSV类型数据格式
 * @class
 */
class CSV extends  AbstractModel {
    constructor(){
        super();

        /**
         * 压缩格式，["Snappy", "Gzip", "None"选一]。
         * @type {string || null}
         */
        this.CodeCompress = null;

        /**
         * CSV序列化及反序列化数据结构。
         * @type {CSVSerde || null}
         */
        this.CSVSerde = null;

        /**
         * 标题行，默认为0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HeadLines = null;

        /**
         * 格式，默认值为CSV
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeCompress = 'CodeCompress' in params ? params.CodeCompress : null;

        if (params.CSVSerde) {
            let obj = new CSVSerde();
            obj.deserialize(params.CSVSerde)
            this.CSVSerde = obj;
        }
        this.HeadLines = 'HeadLines' in params ? params.HeadLines : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * CreateTable请求参数结构体
 * @class
 */
class CreateTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据表配置信息
         * @type {TableInfo || null}
         */
        this.TableInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TableInfo) {
            let obj = new TableInfo();
            obj.deserialize(params.TableInfo)
            this.TableInfo = obj;
        }

    }
}

/**
 *  SQL查询任务
 * @class
 */
class SQLTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64加密后的SQL语句
         * @type {string || null}
         */
        this.SQL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SQL = 'SQL' in params ? params.SQL : null;

    }
}

/**
 * DescribeScripts请求参数结构体
 * @class
 */
class DescribeScriptsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 按字段排序，支持如下字段类型，update-time
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 排序方式，desc表示正序，asc表示反序
         * @type {string || null}
         */
        this.Sorting = null;

        /**
         * 过滤条件，如下支持的过滤类型，传参Name应为其一
script-id - String - （过滤条件）script-id取值形如：157de0d1-26b4-4df2-a2d0-b64afc406c25。
script-name-keyword - String - （过滤条件）数据表名称,形如：script-test。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Sorting = 'Sorting' in params ? params.Sorting : null;

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
 * CSV序列化及反序列化数据结构
 * @class
 */
class CSVSerde extends  AbstractModel {
    constructor(){
        super();

        /**
         * CSV序列化转义符，默认为"\\"，最长8个字符，如 Escape: "/\"
         * @type {string || null}
         */
        this.Escape = null;

        /**
         * CSV序列化字段域符，默认为"'"，最长8个字符, 如 Quote: "\""
         * @type {string || null}
         */
        this.Quote = null;

        /**
         * CSV序列化分隔符，默认为"\t"，最长8个字符, 如 Separator: "\t"
         * @type {string || null}
         */
        this.Separator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Escape = 'Escape' in params ? params.Escape : null;
        this.Quote = 'Quote' in params ? params.Quote : null;
        this.Separator = 'Separator' in params ? params.Separator : null;

    }
}

/**
 * DescribeTables请求参数结构体
 * @class
 */
class DescribeTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列出该数据库下所属数据表。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 返回数量，默认为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 数据偏移量，从0开始，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件，如下支持的过滤类型，传参Name应为其一
table-name - String - （过滤条件）数据表名称,形如：table-001。
table-id - String - （过滤条件）table id形如：12342。
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
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * CreateDatabase请求参数结构体
 * @class
 */
class CreateDatabaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库基础信息
         * @type {DatabaseInfo || null}
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

        if (params.DatabaseInfo) {
            let obj = new DatabaseInfo();
            obj.deserialize(params.DatabaseInfo)
            this.DatabaseInfo = obj;
        }

    }
}

/**
 * DescribeViews请求参数结构体
 * @class
 */
class DescribeViewsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列出该数据库下所属数据表。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 返回数量，默认为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 数据偏移量，从0开始，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件，如下支持的过滤类型，传参Name应为其一
view-name - String - （过滤条件）数据表名称,形如：view-001。
view-id - String - （过滤条件）view id形如：12342。
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
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeDatabases返回参数结构体
 * @class
 */
class DescribeDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库对象列表。
         * @type {Array.<DatabaseResponseInfo> || null}
         */
        this.DatabaseList = null;

        /**
         * 实例总数。
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

        if (params.DatabaseList) {
            this.DatabaseList = new Array();
            for (let z in params.DatabaseList) {
                let obj = new DatabaseResponseInfo();
                obj.deserialize(params.DatabaseList[z]);
                this.DatabaseList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库对象
 * @class
 */
class DatabaseResponseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据库描述信息，长度 0~256。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 数据库属性列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Property> || null}
         */
        this.Properties = null;

        /**
         * 数据库创建时间戳，单位：s。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 数据库更新时间戳，单位：s。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new Property();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;

    }
}

/**
 * 视图基本配置信息
 * @class
 */
class ViewBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该视图所属数据库名字
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 视图名称
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
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;

    }
}

module.exports = {
    DatabaseInfo: DatabaseInfo,
    DescribeTasksRequest: DescribeTasksRequest,
    Script: Script,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    DescribeTableRequest: DescribeTableRequest,
    Other: Other,
    TaskResponseInfo: TaskResponseInfo,
    DescribeViewsResponse: DescribeViewsResponse,
    CreateTaskResponse: CreateTaskResponse,
    Property: Property,
    DeleteScriptRequest: DeleteScriptRequest,
    DescribeTableResponse: DescribeTableResponse,
    CreateTaskRequest: CreateTaskRequest,
    TableResponseInfo: TableResponseInfo,
    CreateScriptResponse: CreateScriptResponse,
    Task: Task,
    DescribeTablesResponse: DescribeTablesResponse,
    Execution: Execution,
    DeleteScriptResponse: DeleteScriptResponse,
    CreateTableResponse: CreateTableResponse,
    CreateDatabaseResponse: CreateDatabaseResponse,
    CreateScriptRequest: CreateScriptRequest,
    Partition: Partition,
    TableInfo: TableInfo,
    Column: Column,
    DescribeTasksResponse: DescribeTasksResponse,
    Filter: Filter,
    DescribeScriptsResponse: DescribeScriptsResponse,
    TableBaseInfo: TableBaseInfo,
    ViewResponseInfo: ViewResponseInfo,
    TextFile: TextFile,
    DataFormat: DataFormat,
    CSV: CSV,
    CreateTableRequest: CreateTableRequest,
    SQLTask: SQLTask,
    DescribeScriptsRequest: DescribeScriptsRequest,
    CSVSerde: CSVSerde,
    DescribeTablesRequest: DescribeTablesRequest,
    CreateDatabaseRequest: CreateDatabaseRequest,
    DescribeViewsRequest: DescribeViewsRequest,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    DatabaseResponseInfo: DatabaseResponseInfo,
    ViewBaseInfo: ViewBaseInfo,

}
