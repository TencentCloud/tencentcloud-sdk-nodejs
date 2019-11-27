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
 * DescribeUinInWhitelist返回参数结构体
 * @class
 */
class DescribeUinInWhitelistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果：`FALSE` 否；`TRUE` 是
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZoneName请求参数结构体
 * @class
 */
class ModifyZoneNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大区所属的应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待修改名称的大区ID
         * @type {string || null}
         */
        this.LogicZoneId = null;

        /**
         * 新的大区名称
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * 表定义描述文件详情，包含文件内容
 * @class
 */
class IdlFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名称，不包含扩展名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 数据描述语言（IDL）类型
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件扩展名
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * 文件大小（Bytes）
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件ID，对于已上传的文件有意义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileId = null;

        /**
         * 文件内容，对于本次新上传的文件有意义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;

    }
}

/**
 * ClearTables请求参数结构体
 * @class
 */
class ClearTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待清理表信息列表
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
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
         * 需要查询任务所属的应用ID列表
         * @type {Array.<string> || null}
         */
        this.ApplicationIds = null;

        /**
         * 需要查询的任务ID列表
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 过滤条件，本接口支持：Content，TaskType, Operator, Time
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 任务列表大小
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
        this.ApplicationIds = 'ApplicationIds' in params ? params.ApplicationIds : null;
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

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
 * DescribeIdlFileInfos返回参数结构体
 * @class
 */
class DescribeIdlFileInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 文件详情列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFileInfos = null;

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

        if (params.IdlFileInfos) {
            this.IdlFileInfos = new Array();
            for (let z in params.IdlFileInfos) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFileInfos[z]);
                this.IdlFileInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAppName请求参数结构体
 * @class
 */
class ModifyAppNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改名称的应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 需要修改的应用名称，需要URLEncode
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * DescribeTablesInRecycle请求参数结构体
 * @class
 */
class DescribeTablesInRecycleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询表所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待查询表所属大区列表
         * @type {Array.<string> || null}
         */
        this.LogicZoneIds = null;

        /**
         * 过滤条件，本接口支持：TableName，TableInstanceId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 结果列表数量
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.LogicZoneIds = 'LogicZoneIds' in params ? params.LogicZoneIds : null;

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
 * DescribeApps请求参数结构体
 * @class
 */
class DescribeAppsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定查询的应用ID
         * @type {Array.<string> || null}
         */
        this.ApplicationIds = null;

        /**
         * 查询过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 应用列表的大小，默认值20
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
        this.ApplicationIds = 'ApplicationIds' in params ? params.ApplicationIds : null;

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
 * DeleteZone请求参数结构体
 * @class
 */
class DeleteZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大区所属的应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 大区ID
         * @type {string || null}
         */
        this.LogicZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;

    }
}

/**
 * 表处理结果信息
 * @class
 */
class TableResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表实例ID，形如：tcaplus-3be64cbb
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 任务ID，对于创建单任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 表数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表所属大区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogicZoneId = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * 任务ID列表，对于创建多任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

    }
}

/**
 * ClearTables返回参数结构体
 * @class
 */
class ClearTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 清除表结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 清除表结果列表
         * @type {Array.<TableResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIdlFileInfos请求参数结构体
 * @class
 */
class DescribeIdlFileInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 文件所属大区ID
         * @type {Array.<string> || null}
         */
        this.LogicZoneIds = null;

        /**
         * 指定文件ID
         * @type {Array.<string> || null}
         */
        this.IdlFileIds = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 文件列表大小
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.LogicZoneIds = 'LogicZoneIds' in params ? params.LogicZoneIds : null;
        this.IdlFileIds = 'IdlFileIds' in params ? params.IdlFileIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 从表描述文件中解析出来的表信息
 * @class
 */
class ParsedTableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表描述语言类型：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表数据类型：`GENERIC`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 主键字段信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyFields = null;

        /**
         * 原主键字段信息，改表校验时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldKeyFields = null;

        /**
         * 非主键字段信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValueFields = null;

        /**
         * 原非主键字段信息，改表校验时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldValueFields = null;

        /**
         * 所属大区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogicZoneId = null;

        /**
         * 主键字段总大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SumKeyFieldSize = null;

        /**
         * 非主键字段总大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SumValueFieldSize = null;

        /**
         * 索引键集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexKeySet = null;

        /**
         * 分表因子集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShardingKeySet = null;

        /**
         * TDR版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TdrVersion = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.KeyFields = 'KeyFields' in params ? params.KeyFields : null;
        this.OldKeyFields = 'OldKeyFields' in params ? params.OldKeyFields : null;
        this.ValueFields = 'ValueFields' in params ? params.ValueFields : null;
        this.OldValueFields = 'OldValueFields' in params ? params.OldValueFields : null;
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;
        this.SumKeyFieldSize = 'SumKeyFieldSize' in params ? params.SumKeyFieldSize : null;
        this.SumValueFieldSize = 'SumValueFieldSize' in params ? params.SumValueFieldSize : null;
        this.IndexKeySet = 'IndexKeySet' in params ? params.IndexKeySet : null;
        this.ShardingKeySet = 'ShardingKeySet' in params ? params.ShardingKeySet : null;
        this.TdrVersion = 'TdrVersion' in params ? params.TdrVersion : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * CreateTables请求参数结构体
 * @class
 */
class CreateTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建表所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 用户选定的建表IDL文件列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 待创建表信息列表
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * ModifyTableMemos请求参数结构体
 * @class
 */
class ModifyTableMemosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 选定表详情列表
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.TableMemos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.TableMemos) {
            this.TableMemos = new Array();
            for (let z in params.TableMemos) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.TableMemos[z]);
                this.TableMemos.push(obj);
            }
        }

    }
}

/**
 * RecoverRecycleTables返回参数结构体
 * @class
 */
class RecoverRecycleTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恢复表结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 恢复表信息列表
         * @type {Array.<TableResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TcaplusDB服务地域信息详情
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域Ap-Code
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域缩写
         * @type {string || null}
         */
        this.RegionAbbr = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionAbbr = 'RegionAbbr' in params ? params.RegionAbbr : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大区所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 大区ID
         * @type {Array.<string> || null}
         */
        this.LogicZoneIds = null;

        /**
         * 过滤条件，本接口支持：ZoneName，ZoneId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 大区列表大小
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.LogicZoneIds = 'LogicZoneIds' in params ? params.LogicZoneIds : null;

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
 * DeleteApp请求参数结构体
 * @class
 */
class DeleteAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DescribeTablesInRecycle返回参数结构体
 * @class
 */
class DescribeTablesInRecycleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表详情结果列表
         * @type {Array.<TableInfo> || null}
         */
        this.TableInfos = null;

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

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new TableInfo();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 表数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表详情结果列表
         * @type {Array.<TableInfo> || null}
         */
        this.TableInfos = null;

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

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new TableInfo();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAppPassword返回参数结构体
 * @class
 */
class ModifyAppPasswordResponse extends  AbstractModel {
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
 * DeleteIdlFiles请求参数结构体
 * @class
 */
class DeleteIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待删除的IDL文件信息列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }

    }
}

/**
 * ModifyTables返回参数结构体
 * @class
 */
class ModifyTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改表结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 修改表结果列表
         * @type {Array.<TableResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 被选中的表信息
 * @class
 */
class SelectedTableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属大区ID
         * @type {string || null}
         */
        this.LogicZoneId = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表实例ID
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表描述语言类型：`PROTO`或`TDR`
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表数据结构类型：`GENERIC`或`LIST`
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * LIST表元素个数
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * 表预留容量（GB）
         * @type {number || null}
         */
        this.ReservedVolume = null;

        /**
         * 表预留读QPS
         * @type {number || null}
         */
        this.ReservedReadQps = null;

        /**
         * 表预留写QPS
         * @type {number || null}
         */
        this.ReservedWriteQps = null;

        /**
         * 表备注信息
         * @type {string || null}
         */
        this.Memo = null;

        /**
         * Key回档文件名，回档专用
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Key回档文件扩展名，回档专用
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * Key回档文件大小，回档专用
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Key回档文件内容，回档专用
         * @type {string || null}
         */
        this.FileContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.ListElementNum = 'ListElementNum' in params ? params.ListElementNum : null;
        this.ReservedVolume = 'ReservedVolume' in params ? params.ReservedVolume : null;
        this.ReservedReadQps = 'ReservedReadQps' in params ? params.ReservedReadQps : null;
        this.ReservedWriteQps = 'ReservedWriteQps' in params ? params.ReservedWriteQps : null;
        this.Memo = 'Memo' in params ? params.Memo : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;

    }
}

/**
 * VerifyIdlFiles返回参数结构体
 * @class
 */
class VerifyIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次上传校验所有的Idl文件信息列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 读取Idl描述文件后解析出的合法表数量，不包含已经创建的表
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 读取Idl描述文件后解析出的合法表列表，不包含已经创建的表
         * @type {Array.<ParsedTableInfo> || null}
         */
        this.TableInfos = null;

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

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new ParsedTableInfo();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表回档结果信息
 * @class
 */
class TableRollbackResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表实例ID，形如：tcaplus-3be64cbb
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 任务ID，对于创建单任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 表数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表所属大区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogicZoneId = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * 任务ID列表，对于创建多任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 上传的key文件ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 校验成功Key数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccKeyNum = null;

        /**
         * Key文件中包含总的Key数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalKeyNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.SuccKeyNum = 'SuccKeyNum' in params ? params.SuccKeyNum : null;
        this.TotalKeyNum = 'TotalKeyNum' in params ? params.TotalKeyNum : null;

    }
}

/**
 * ModifyTableQuotas返回参数结构体
 * @class
 */
class ModifyTableQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩缩容结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 扩缩容结果列表
         * @type {Array.<TableResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 应用实例详细信息
 * @class
 */
class AppInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 数据描述语言类型，如：`PROTO`,`TDR`或`MIX`
         * @type {string || null}
         */
        this.IdlType = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 关联的用户私有网络实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 关联的用户子网实例ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 应用密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 密码状态
         * @type {string || null}
         */
        this.PasswordStatus = null;

        /**
         * TcaplusDB SDK连接参数，接入ID
         * @type {string || null}
         */
        this.ApiAccessId = null;

        /**
         * TcaplusDB SDK连接参数，接入地址
         * @type {string || null}
         */
        this.ApiAccessIp = null;

        /**
         * TcaplusDB SDK连接参数，接入端口
         * @type {number || null}
         */
        this.ApiAccessPort = null;

        /**
         * 如果PasswordStatus是unmodifiable说明有旧密码还未过期，此字段将显示旧密码过期的时间，否则为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldPasswordExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.IdlType = 'IdlType' in params ? params.IdlType : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.PasswordStatus = 'PasswordStatus' in params ? params.PasswordStatus : null;
        this.ApiAccessId = 'ApiAccessId' in params ? params.ApiAccessId : null;
        this.ApiAccessIp = 'ApiAccessIp' in params ? params.ApiAccessIp : null;
        this.ApiAccessPort = 'ApiAccessPort' in params ? params.ApiAccessPort : null;
        this.OldPasswordExpireTime = 'OldPasswordExpireTime' in params ? params.OldPasswordExpireTime : null;

    }
}

/**
 * RollbackTables请求参数结构体
 * @class
 */
class RollbackTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待回档表所在应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待回档表列表
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.SelectedTables = null;

        /**
         * 待回档时间
         * @type {string || null}
         */
        this.RollbackTime = null;

        /**
         * 回档模式，支持：`KEYS`
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * RecoverRecycleTables请求参数结构体
 * @class
 */
class RecoverRecycleTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所在应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待恢复表信息
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

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
         * 任务数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询到的任务详情列表
         * @type {Array.<TaskInfo> || null}
         */
        this.TaskInfos = null;

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

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new TaskInfo();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTables请求参数结构体
 * @class
 */
class DeleteTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除表所在应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待删除表信息列表
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DescribeUinInWhitelist请求参数结构体
 * @class
 */
class DescribeUinInWhitelistRequest extends  AbstractModel {
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
 * 过滤条件
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值
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
 * 大区详细信息
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大区ID
         * @type {string || null}
         */
        this.LogicZoneId = null;

        /**
         * 大区名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 大区创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 大区表格数量
         * @type {number || null}
         */
        this.TableCount = null;

        /**
         * 大区表格存储总量（MB）
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.TableCount = 'TableCount' in params ? params.TableCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区详情结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可用区详情结果列表
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionInfos = null;

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

        if (params.RegionInfos) {
            this.RegionInfos = new Array();
            for (let z in params.RegionInfos) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionInfos[z]);
                this.RegionInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateZone返回参数结构体
 * @class
 */
class CreateZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的大区ID
         * @type {string || null}
         */
        this.LogicZoneId = null;

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
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZoneName返回参数结构体
 * @class
 */
class ModifyZoneNameResponse extends  AbstractModel {
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
 * CompareIdlFiles请求参数结构体
 * @class
 */
class CompareIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改表所在应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待修改表列表
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.SelectedTables = null;

        /**
         * 选中的已上传IDL文件列表，与NewIdlFiles必选其一
         * @type {Array.<IdlFileInfo> || null}
         */
        this.ExistingIdlFiles = null;

        /**
         * 本次上传IDL文件列表，与ExistingIdlFiles必选其一
         * @type {Array.<IdlFileInfo> || null}
         */
        this.NewIdlFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

        if (params.ExistingIdlFiles) {
            this.ExistingIdlFiles = new Array();
            for (let z in params.ExistingIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.ExistingIdlFiles[z]);
                this.ExistingIdlFiles.push(obj);
            }
        }

        if (params.NewIdlFiles) {
            this.NewIdlFiles = new Array();
            for (let z in params.NewIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.NewIdlFiles[z]);
                this.NewIdlFiles.push(obj);
            }
        }

    }
}

/**
 * VerifyIdlFiles请求参数结构体
 * @class
 */
class VerifyIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待加表的应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待加表的大区ID
         * @type {string || null}
         */
        this.LogicZoneId = null;

        /**
         * 曾经上传过的IDL文件信息列表，与NewIdlFiles至少有一者
         * @type {Array.<IdlFileInfo> || null}
         */
        this.ExistingIdlFiles = null;

        /**
         * 待上传的IDL文件信息列表，与ExistingIdlFiles至少有一者
         * @type {Array.<IdlFileInfo> || null}
         */
        this.NewIdlFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;

        if (params.ExistingIdlFiles) {
            this.ExistingIdlFiles = new Array();
            for (let z in params.ExistingIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.ExistingIdlFiles[z]);
                this.ExistingIdlFiles.push(obj);
            }
        }

        if (params.NewIdlFiles) {
            this.NewIdlFiles = new Array();
            for (let z in params.NewIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.NewIdlFiles[z]);
                this.NewIdlFiles.push(obj);
            }
        }

    }
}

/**
 * DescribeApps返回参数结构体
 * @class
 */
class DescribeAppsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用实例数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 应用实例列表
         * @type {Array.<AppInfo> || null}
         */
        this.Apps = null;

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

        if (params.Apps) {
            this.Apps = new Array();
            for (let z in params.Apps) {
                let obj = new AppInfo();
                obj.deserialize(params.Apps[z]);
                this.Apps.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteZone返回参数结构体
 * @class
 */
class DeleteZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除大区所创建的任务ID
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
 * 表定义描述文件详情，不包含文件内容
 * @class
 */
class IdlFileInfoWithoutContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名称，不包含扩展名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 数据描述语言（IDL）类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件扩展名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * 文件大小（Bytes）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileId = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * ModifyTableMemos返回参数结构体
 * @class
 */
class ModifyTableMemosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表备注修改结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表备注修改结果列表
         * @type {Array.<TableResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表详情信息
 * @class
 */
class TableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 表数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表所属应用实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 表所属应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 表所属大区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogicZoneId = null;

        /**
         * 表所属大区名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 表主键结构json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyStruct = null;

        /**
         * 表非主键结构json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValueStruct = null;

        /**
         * 表分表因子集合，PROTO表有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShardingKeySet = null;

        /**
         * 表索引键集合，PROTO表有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexStruct = null;

        /**
         * LIST表元素个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * 表所关联IDL文件信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 表预留容量（GB）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedVolume = null;

        /**
         * 表预留读QPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedReadQps = null;

        /**
         * 表预留写QPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedWriteQps = null;

        /**
         * 表实际数据量大小（MB）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TableSize = null;

        /**
         * 表状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 表创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 最后一次更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 表备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Memo = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * Api接入ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiAccessId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.KeyStruct = 'KeyStruct' in params ? params.KeyStruct : null;
        this.ValueStruct = 'ValueStruct' in params ? params.ValueStruct : null;
        this.ShardingKeySet = 'ShardingKeySet' in params ? params.ShardingKeySet : null;
        this.IndexStruct = 'IndexStruct' in params ? params.IndexStruct : null;
        this.ListElementNum = 'ListElementNum' in params ? params.ListElementNum : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }
        this.ReservedVolume = 'ReservedVolume' in params ? params.ReservedVolume : null;
        this.ReservedReadQps = 'ReservedReadQps' in params ? params.ReservedReadQps : null;
        this.ReservedWriteQps = 'ReservedWriteQps' in params ? params.ReservedWriteQps : null;
        this.TableSize = 'TableSize' in params ? params.TableSize : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Memo = 'Memo' in params ? params.Memo : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.ApiAccessId = 'ApiAccessId' in params ? params.ApiAccessId : null;

    }
}

/**
 * RollbackTables返回参数结构体
 * @class
 */
class RollbackTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表回档任务结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表回档任务结果列表
         * @type {Array.<TableRollbackResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableRollbackResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述每个实例（应用，大区或表）处理过程中可能出现的错误详情。
 * @class
 */
class ErrorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 错误信息
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyTableQuotas请求参数结构体
 * @class
 */
class ModifyTableQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带扩缩容表所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 已选中待修改的表配额列表
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.TableQuotas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.TableQuotas) {
            this.TableQuotas = new Array();
            for (let z in params.TableQuotas) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.TableQuotas[z]);
                this.TableQuotas.push(obj);
            }
        }

    }
}

/**
 * CompareIdlFiles返回参数结构体
 * @class
 */
class CompareIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次上传校验所有的Idl文件信息列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 本次校验合法的表数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 读取IDL描述文件后,根据用户指示的所选中表解析校验结果
         * @type {Array.<ParsedTableInfo> || null}
         */
        this.TableInfos = null;

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

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new ParsedTableInfo();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTables请求参数结构体
 * @class
 */
class ModifyTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改表所在应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 选中的改表IDL文件
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 待改表列表
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * CreateApp请求参数结构体
 * @class
 */
class CreateAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用数据描述语言类型，如：`PROTO`，`TDR`或`MIX`
         * @type {string || null}
         */
        this.IdlType = null;

        /**
         * 应用名称，可使用中文或英文字符，长度在30个字符以内
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 应用所绑定的私有网络实例ID，形如：vpc-f49l6u0z
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 应用所绑定的子网实例ID，形如：subnet-pxir56ns
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 应用访问密码，可使用英文和数字字符，长度为12~16个字符
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
        this.IdlType = 'IdlType' in params ? params.IdlType : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * CreateTables返回参数结构体
 * @class
 */
class CreateTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量创建表结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 批量创建表结果列表
         * @type {Array.<TableResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAppPassword请求参数结构体
 * @class
 */
class ModifyAppPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改密码的应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用旧密码
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * 应用旧密码预期失效时间
         * @type {string || null}
         */
        this.OldPasswordExpireTime = null;

        /**
         * 应用新密码
         * @type {string || null}
         */
        this.NewPassword = null;

        /**
         * 更新模式： `1` 更新密码；`2` 更新旧密码失效时间，默认为`1` 模式
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.OldPasswordExpireTime = 'OldPasswordExpireTime' in params ? params.OldPasswordExpireTime : null;
        this.NewPassword = 'NewPassword' in params ? params.NewPassword : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * CreateApp返回参数结构体
 * @class
 */
class CreateAppResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 待查询表所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 待查询表所属大区列表
         * @type {Array.<string> || null}
         */
        this.LogicZoneIds = null;

        /**
         * 待查询表信息列表
         * @type {Array.<SelectedTableInfo> || null}
         */
        this.SelectedTables = null;

        /**
         * 过滤条件，本接口支持：TableName，TableInstanceId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 结果列表数量
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.LogicZoneIds = 'LogicZoneIds' in params ? params.LogicZoneIds : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

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
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大区数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 大区信息列表
         * @type {Array.<ZoneInfo> || null}
         */
        this.Zones = null;

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

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new ZoneInfo();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateZone请求参数结构体
 * @class
 */
class CreateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大区所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 大区名称，可以采用中文、英文或数字字符，长度不能超过30
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 大区ID，可以由用户指定，但在同一个App内不能重复，如果不指定则采用自增的模式
         * @type {string || null}
         */
        this.LogicZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.LogicZoneId = 'LogicZoneId' in params ? params.LogicZoneId : null;

    }
}

/**
 * ModifyAppName返回参数结构体
 * @class
 */
class ModifyAppNameResponse extends  AbstractModel {
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
 * DeleteIdlFiles返回参数结构体
 * @class
 */
class DeleteIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果记录数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 删除结果
         * @type {Array.<IdlFileInfoWithoutContent> || null}
         */
        this.IdlFileInfos = null;

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

        if (params.IdlFileInfos) {
            this.IdlFileInfos = new Array();
            for (let z in params.IdlFileInfos) {
                let obj = new IdlFileInfoWithoutContent();
                obj.deserialize(params.IdlFileInfos[z]);
                this.IdlFileInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTables返回参数结构体
 * @class
 */
class DeleteTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除表结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 删除表结果详情列表
         * @type {Array.<TableResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApp返回参数结构体
 * @class
 */
class DeleteAppResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除应用生成的任务ID
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
 * 任务信息详情
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务所关联的TcaplusDB内部事务ID
         * @type {string || null}
         */
        this.TransId = null;

        /**
         * 任务所属应用实例ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 任务所属应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 任务进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务最后更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 操作者
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 任务详情
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TransId = 'TransId' in params ? params.TransId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

module.exports = {
    DescribeUinInWhitelistResponse: DescribeUinInWhitelistResponse,
    ModifyZoneNameRequest: ModifyZoneNameRequest,
    IdlFileInfo: IdlFileInfo,
    ClearTablesRequest: ClearTablesRequest,
    DescribeTasksRequest: DescribeTasksRequest,
    DescribeIdlFileInfosResponse: DescribeIdlFileInfosResponse,
    ModifyAppNameRequest: ModifyAppNameRequest,
    DescribeTablesInRecycleRequest: DescribeTablesInRecycleRequest,
    DescribeAppsRequest: DescribeAppsRequest,
    DeleteZoneRequest: DeleteZoneRequest,
    TableResult: TableResult,
    ClearTablesResponse: ClearTablesResponse,
    DescribeIdlFileInfosRequest: DescribeIdlFileInfosRequest,
    ParsedTableInfo: ParsedTableInfo,
    CreateTablesRequest: CreateTablesRequest,
    ModifyTableMemosRequest: ModifyTableMemosRequest,
    RecoverRecycleTablesResponse: RecoverRecycleTablesResponse,
    RegionInfo: RegionInfo,
    DescribeZonesRequest: DescribeZonesRequest,
    DeleteAppRequest: DeleteAppRequest,
    DescribeTablesInRecycleResponse: DescribeTablesInRecycleResponse,
    DescribeTablesResponse: DescribeTablesResponse,
    ModifyAppPasswordResponse: ModifyAppPasswordResponse,
    DeleteIdlFilesRequest: DeleteIdlFilesRequest,
    ModifyTablesResponse: ModifyTablesResponse,
    SelectedTableInfo: SelectedTableInfo,
    VerifyIdlFilesResponse: VerifyIdlFilesResponse,
    TableRollbackResult: TableRollbackResult,
    ModifyTableQuotasResponse: ModifyTableQuotasResponse,
    AppInfo: AppInfo,
    RollbackTablesRequest: RollbackTablesRequest,
    RecoverRecycleTablesRequest: RecoverRecycleTablesRequest,
    DescribeTasksResponse: DescribeTasksResponse,
    DeleteTablesRequest: DeleteTablesRequest,
    DescribeUinInWhitelistRequest: DescribeUinInWhitelistRequest,
    Filter: Filter,
    ZoneInfo: ZoneInfo,
    DescribeRegionsResponse: DescribeRegionsResponse,
    CreateZoneResponse: CreateZoneResponse,
    ModifyZoneNameResponse: ModifyZoneNameResponse,
    CompareIdlFilesRequest: CompareIdlFilesRequest,
    VerifyIdlFilesRequest: VerifyIdlFilesRequest,
    DescribeAppsResponse: DescribeAppsResponse,
    DeleteZoneResponse: DeleteZoneResponse,
    IdlFileInfoWithoutContent: IdlFileInfoWithoutContent,
    ModifyTableMemosResponse: ModifyTableMemosResponse,
    TableInfo: TableInfo,
    RollbackTablesResponse: RollbackTablesResponse,
    ErrorInfo: ErrorInfo,
    ModifyTableQuotasRequest: ModifyTableQuotasRequest,
    CompareIdlFilesResponse: CompareIdlFilesResponse,
    ModifyTablesRequest: ModifyTablesRequest,
    CreateAppRequest: CreateAppRequest,
    CreateTablesResponse: CreateTablesResponse,
    ModifyAppPasswordRequest: ModifyAppPasswordRequest,
    CreateAppResponse: CreateAppResponse,
    DescribeTablesRequest: DescribeTablesRequest,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    CreateZoneRequest: CreateZoneRequest,
    ModifyAppNameResponse: ModifyAppNameResponse,
    DeleteIdlFilesResponse: DeleteIdlFilesResponse,
    DeleteTablesResponse: DeleteTablesResponse,
    DeleteAppResponse: DeleteAppResponse,
    TaskInfo: TaskInfo,

}
