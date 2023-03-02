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
 * DescribeResultDownload返回参数结构体
 * @class
 */
class DescribeResultDownloadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载文件路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 任务状态 init | queue | format | compress | success|  timeout | error
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务异常原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 临时AK
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * 临时SK
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 临时Token
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Token = null;

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
        this.Path = 'Path' in params ? params.Path : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskResult返回参数结构体
 * @class
 */
class DescribeTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的任务信息，返回为空表示输入任务ID对应的任务不存在。只有当任务状态为成功（2）的时候，才会返回任务的结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskResultInfo || null}
         */
        this.TaskInfo = null;

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

        if (params.TaskInfo) {
            let obj = new TaskResultInfo();
            obj.deserialize(params.TaskInfo)
            this.TaskInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNotebookSessionStatement请求参数结构体
 * @class
 */
class DescribeNotebookSessionStatementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Session Statement唯一标识
         * @type {string || null}
         */
        this.StatementId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.StatementId = 'StatementId' in params ? params.StatementId : null;

    }
}

/**
 * CancelNotebookSessionStatement请求参数结构体
 * @class
 */
class CancelNotebookSessionStatementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Session Statement唯一标识
         * @type {string || null}
         */
        this.StatementId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.StatementId = 'StatementId' in params ? params.StatementId : null;

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

        /**
         * 数据源唯名称，该名称可以通过DescribeDatasourceConnection接口查询到。默认为DataLakeCatalog
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 排序字段，当前版本仅支持按库名排序
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 排序类型：false：降序（默认）、true：升序
         * @type {boolean || null}
         */
        this.Asc = null;

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
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Asc = 'Asc' in params ? params.Asc : null;

    }
}

/**
 * 工作组部分信息
 * @class
 */
class WorkGroupMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作组唯一Id
         * @type {number || null}
         */
        this.WorkGroupId = null;

        /**
         * 工作组名称
         * @type {string || null}
         */
        this.WorkGroupName = null;

        /**
         * 工作组描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkGroupDescription = null;

        /**
         * 创建者
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 工作组创建的时间，形如2021-07-28 16:19:32
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkGroupId = 'WorkGroupId' in params ? params.WorkGroupId : null;
        this.WorkGroupName = 'WorkGroupName' in params ? params.WorkGroupName : null;
        this.WorkGroupDescription = 'WorkGroupDescription' in params ? params.WorkGroupDescription : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DeleteUser请求参数结构体
 * @class
 */
class DeleteUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的用户的Id
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * ListTaskJobLogDetail返回参数结构体
 * @class
 */
class ListTaskJobLogDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下一次分页参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 是否获取完结
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * 日志详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<JobLogResult> || null}
         */
        this.Results = null;

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
        this.Context = 'Context' in params ? params.Context : null;
        this.ListOver = 'ListOver' in params ? params.ListOver : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new JobLogResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 元数据基本对象
 * @class
 */
class Asset extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 对象GUID值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Guid = null;

        /**
         * 数据目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Catalog = null;

        /**
         * 描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 对象owner
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 对象owner账户
         * @type {string || null}
         */
        this.OwnerAccount = null;

        /**
         * 权限
         * @type {Array.<KVPair> || null}
         */
        this.PermValues = null;

        /**
         * 附加属性
         * @type {Array.<KVPair> || null}
         */
        this.Params = null;

        /**
         * 附加业务属性
         * @type {Array.<KVPair> || null}
         */
        this.BizParams = null;

        /**
         * 数据版本
         * @type {number || null}
         */
        this.DataVersion = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 数据源主键
         * @type {number || null}
         */
        this.DatasourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Guid = 'Guid' in params ? params.Guid : null;
        this.Catalog = 'Catalog' in params ? params.Catalog : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.OwnerAccount = 'OwnerAccount' in params ? params.OwnerAccount : null;

        if (params.PermValues) {
            this.PermValues = new Array();
            for (let z in params.PermValues) {
                let obj = new KVPair();
                obj.deserialize(params.PermValues[z]);
                this.PermValues.push(obj);
            }
        }

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new KVPair();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

        if (params.BizParams) {
            this.BizParams = new Array();
            for (let z in params.BizParams) {
                let obj = new KVPair();
                obj.deserialize(params.BizParams[z]);
                this.BizParams.push(obj);
            }
        }
        this.DataVersion = 'DataVersion' in params ? params.DataVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.DatasourceId = 'DatasourceId' in params ? params.DatasourceId : null;

    }
}

/**
 * CreateResultDownload返回参数结构体
 * @class
 */
class CreateResultDownloadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载任务Id
         * @type {string || null}
         */
        this.DownloadId = null;

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
        this.DownloadId = 'DownloadId' in params ? params.DownloadId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGovernEventRule返回参数结构体
 * @class
 */
class ModifyGovernEventRuleResponse extends  AbstractModel {
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
 * DescribeNotebookSessions请求参数结构体
 * @class
 */
class DescribeNotebookSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DLC Spark作业引擎名称
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止）
         * @type {Array.<string> || null}
         */
        this.State = null;

        /**
         * 排序字段（默认按创建时间）
         * @type {Array.<string> || null}
         */
        this.SortFields = null;

        /**
         * 排序字段：true：升序、false：降序（默认）
         * @type {boolean || null}
         */
        this.Asc = null;

        /**
         * 分页字段
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页字段
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.State = 'State' in params ? params.State : null;
        this.SortFields = 'SortFields' in params ? params.SortFields : null;
        this.Asc = 'Asc' in params ? params.Asc : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateDMSDatabase返回参数结构体
 * @class
 */
class CreateDMSDatabaseResponse extends  AbstractModel {
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
 * CreateStoreLocation返回参数结构体
 * @class
 */
class CreateStoreLocationResponse extends  AbstractModel {
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
 * DescribeNotebookSession返回参数结构体
 * @class
 */
class DescribeNotebookSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session详情信息
         * @type {NotebookSessionInfo || null}
         */
        this.Session = null;

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

        if (params.Session) {
            let obj = new NotebookSessionInfo();
            obj.deserialize(params.Session)
            this.Session = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDMSDatabase返回参数结构体
 * @class
 */
class DescribeDMSDatabaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * schema名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 存储地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 数据对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Asset || null}
         */
        this.Asset = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.Location = 'Location' in params ? params.Location : null;

        if (params.Asset) {
            let obj = new Asset();
            obj.deserialize(params.Asset)
            this.Asset = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindWorkGroupsFromUser返回参数结构体
 * @class
 */
class UnbindWorkGroupsFromUserResponse extends  AbstractModel {
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
 * DropDMSDatabase请求参数结构体
 * @class
 */
class DropDMSDatabaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否删除数据
         * @type {boolean || null}
         */
        this.DeleteData = null;

        /**
         * 是否级联删除
         * @type {boolean || null}
         */
        this.Cascade = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DeleteData = 'DeleteData' in params ? params.DeleteData : null;
        this.Cascade = 'Cascade' in params ? params.Cascade : null;

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
 * CreateTasksInOrder返回参数结构体
 * @class
 */
class CreateTasksInOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本批次提交的任务的批次Id
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 任务Id集合，按照执行顺序排列
         * @type {Array.<string> || null}
         */
        this.TaskIdSet = null;

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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskIdSet = 'TaskIdSet' in params ? params.TaskIdSet : null;
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
 * spark作业详情。
 * @class
 */
class SparkJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * spark作业ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * spark作业名
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * spark作业类型，可去1或者2，1表示batch作业， 2表示streaming作业
         * @type {number || null}
         */
        this.JobType = null;

        /**
         * 引擎名
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * 该字段已下线，请使用字段Datasource
         * @type {string || null}
         */
        this.Eni = null;

        /**
         * 程序包是否本地上传，cos或者lakefs
         * @type {string || null}
         */
        this.IsLocal = null;

        /**
         * 程序包路径
         * @type {string || null}
         */
        this.JobFile = null;

        /**
         * 角色ID
         * @type {number || null}
         */
        this.RoleArn = null;

        /**
         * spark作业运行主类
         * @type {string || null}
         */
        this.MainClass = null;

        /**
         * 命令行参数，spark作业命令行参数，空格分隔
         * @type {string || null}
         */
        this.CmdArgs = null;

        /**
         * spark原生配置，换行符分隔
         * @type {string || null}
         */
        this.JobConf = null;

        /**
         * 依赖jars是否本地上传，cos或者lakefs
         * @type {string || null}
         */
        this.IsLocalJars = null;

        /**
         * spark作业依赖jars，逗号分隔
         * @type {string || null}
         */
        this.JobJars = null;

        /**
         * 依赖文件是否本地上传，cos或者lakefs
         * @type {string || null}
         */
        this.IsLocalFiles = null;

        /**
         * spark作业依赖文件，逗号分隔
         * @type {string || null}
         */
        this.JobFiles = null;

        /**
         * spark作业driver资源大小
         * @type {string || null}
         */
        this.JobDriverSize = null;

        /**
         * spark作业executor资源大小
         * @type {string || null}
         */
        this.JobExecutorSize = null;

        /**
         * spark作业executor个数
         * @type {number || null}
         */
        this.JobExecutorNums = null;

        /**
         * spark流任务最大重试次数
         * @type {number || null}
         */
        this.JobMaxAttempts = null;

        /**
         * spark作业创建者
         * @type {string || null}
         */
        this.JobCreator = null;

        /**
         * spark作业创建时间
         * @type {number || null}
         */
        this.JobCreateTime = null;

        /**
         * spark作业更新时间
         * @type {number || null}
         */
        this.JobUpdateTime = null;

        /**
         * spark作业最近任务ID
         * @type {string || null}
         */
        this.CurrentTaskId = null;

        /**
         * spark作业最近运行状态
         * @type {number || null}
         */
        this.JobStatus = null;

        /**
         * spark流作业统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StreamingStatistics || null}
         */
        this.StreamingStat = null;

        /**
         * 数据源名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * pyspark：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsLocalPythonFiles = null;

        /**
         * 注：该返回值已废弃
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppPythonFiles = null;

        /**
         * archives：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsLocalArchives = null;

        /**
         * archives：依赖资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobArchives = null;

        /**
         * Spark Image 版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkImage = null;

        /**
         * pyspark：python依赖, 除py文件外，还支持zip/egg等归档格式，多文件以逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobPythonFiles = null;

        /**
         * 当前job正在运行或准备运行的任务个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskNum = null;

        /**
         * 引擎状态：-100（默认：未知状态），-2~11：引擎正常状态；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataEngineStatus = null;

        /**
         * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于JobExecutorNums
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.JobExecutorMaxNumbers = null;

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
        this.JobType = 'JobType' in params ? params.JobType : null;
        this.DataEngine = 'DataEngine' in params ? params.DataEngine : null;
        this.Eni = 'Eni' in params ? params.Eni : null;
        this.IsLocal = 'IsLocal' in params ? params.IsLocal : null;
        this.JobFile = 'JobFile' in params ? params.JobFile : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.MainClass = 'MainClass' in params ? params.MainClass : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;
        this.JobConf = 'JobConf' in params ? params.JobConf : null;
        this.IsLocalJars = 'IsLocalJars' in params ? params.IsLocalJars : null;
        this.JobJars = 'JobJars' in params ? params.JobJars : null;
        this.IsLocalFiles = 'IsLocalFiles' in params ? params.IsLocalFiles : null;
        this.JobFiles = 'JobFiles' in params ? params.JobFiles : null;
        this.JobDriverSize = 'JobDriverSize' in params ? params.JobDriverSize : null;
        this.JobExecutorSize = 'JobExecutorSize' in params ? params.JobExecutorSize : null;
        this.JobExecutorNums = 'JobExecutorNums' in params ? params.JobExecutorNums : null;
        this.JobMaxAttempts = 'JobMaxAttempts' in params ? params.JobMaxAttempts : null;
        this.JobCreator = 'JobCreator' in params ? params.JobCreator : null;
        this.JobCreateTime = 'JobCreateTime' in params ? params.JobCreateTime : null;
        this.JobUpdateTime = 'JobUpdateTime' in params ? params.JobUpdateTime : null;
        this.CurrentTaskId = 'CurrentTaskId' in params ? params.CurrentTaskId : null;
        this.JobStatus = 'JobStatus' in params ? params.JobStatus : null;

        if (params.StreamingStat) {
            let obj = new StreamingStatistics();
            obj.deserialize(params.StreamingStat)
            this.StreamingStat = obj;
        }
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.IsLocalPythonFiles = 'IsLocalPythonFiles' in params ? params.IsLocalPythonFiles : null;
        this.AppPythonFiles = 'AppPythonFiles' in params ? params.AppPythonFiles : null;
        this.IsLocalArchives = 'IsLocalArchives' in params ? params.IsLocalArchives : null;
        this.JobArchives = 'JobArchives' in params ? params.JobArchives : null;
        this.SparkImage = 'SparkImage' in params ? params.SparkImage : null;
        this.JobPythonFiles = 'JobPythonFiles' in params ? params.JobPythonFiles : null;
        this.TaskNum = 'TaskNum' in params ? params.TaskNum : null;
        this.DataEngineStatus = 'DataEngineStatus' in params ? params.DataEngineStatus : null;
        this.JobExecutorMaxNumbers = 'JobExecutorMaxNumbers' in params ? params.JobExecutorMaxNumbers : null;

    }
}

/**
 * SuspendResumeDataEngine返回参数结构体
 * @class
 */
class SuspendResumeDataEngineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟集群详细信息
         * @type {string || null}
         */
        this.DataEngineName = null;

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
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSparkApp请求参数结构体
 * @class
 */
class DeleteSparkAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * spark应用名
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
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * ModifyUser返回参数结构体
 * @class
 */
class ModifyUserResponse extends  AbstractModel {
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

        /**
         * Spark SQL查询任务
         * @type {SQLTask || null}
         */
        this.SparkSQLTask = null;

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

        if (params.SparkSQLTask) {
            let obj = new SQLTask();
            obj.deserialize(params.SparkSQLTask)
            this.SparkSQLTask = obj;
        }

    }
}

/**
 * DetachUserPolicy请求参数结构体
 * @class
 */
class DetachUserPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id，和CAM侧Uin匹配
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 解绑的权限集合
         * @type {Array.<Policy> || null}
         */
        this.PolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.PolicySet) {
            this.PolicySet = new Array();
            for (let z in params.PolicySet) {
                let obj = new Policy();
                obj.deserialize(params.PolicySet[z]);
                this.PolicySet.push(obj);
            }
        }

    }
}

/**
 * 定时启停策略信息
 * @class
 */
class CrontabResumeSuspendStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时拉起时间：如：周一8点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResumeTime = null;

        /**
         * 定时挂起时间：如：周一20点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SuspendTime = null;

        /**
         * 挂起配置：0（默认）：等待任务结束后挂起、1：强制挂起
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuspendStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;
        this.SuspendTime = 'SuspendTime' in params ? params.SuspendTime : null;
        this.SuspendStrategy = 'SuspendStrategy' in params ? params.SuspendStrategy : null;

    }
}

/**
 * AlterDMSTable返回参数结构体
 * @class
 */
class AlterDMSTableResponse extends  AbstractModel {
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
         * 任务概览信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TasksOverview || null}
         */
        this.TasksOverview = null;

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

        if (params.TasksOverview) {
            let obj = new TasksOverview();
            obj.deserialize(params.TasksOverview)
            this.TasksOverview = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDMSTable返回参数结构体
 * @class
 */
class DescribeDMSTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Asset || null}
         */
        this.Asset = null;

        /**
         * 视图文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewOriginalText = null;

        /**
         * 视图文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewExpandedText = null;

        /**
         * hive维护版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Retention = null;

        /**
         * 存储对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DMSSds || null}
         */
        this.Sds = null;

        /**
         * 分区列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DMSColumn> || null}
         */
        this.PartitionKeys = null;

        /**
         * 分区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DMSPartition> || null}
         */
        this.Partitions = null;

        /**
         * 表类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Schame名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 存储大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageSize = null;

        /**
         * 记录数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * 生命周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LifeTime = null;

        /**
         * 最后访问时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastAccessTime = null;

        /**
         * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataUpdateTime = null;

        /**
         * 结构更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StructUpdateTime = null;

        /**
         * 列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DMSColumn> || null}
         */
        this.Columns = null;

        /**
         * 表名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

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

        if (params.Asset) {
            let obj = new Asset();
            obj.deserialize(params.Asset)
            this.Asset = obj;
        }
        this.ViewOriginalText = 'ViewOriginalText' in params ? params.ViewOriginalText : null;
        this.ViewExpandedText = 'ViewExpandedText' in params ? params.ViewExpandedText : null;
        this.Retention = 'Retention' in params ? params.Retention : null;

        if (params.Sds) {
            let obj = new DMSSds();
            obj.deserialize(params.Sds)
            this.Sds = obj;
        }

        if (params.PartitionKeys) {
            this.PartitionKeys = new Array();
            for (let z in params.PartitionKeys) {
                let obj = new DMSColumn();
                obj.deserialize(params.PartitionKeys[z]);
                this.PartitionKeys.push(obj);
            }
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new DMSPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.StorageSize = 'StorageSize' in params ? params.StorageSize : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.LifeTime = 'LifeTime' in params ? params.LifeTime : null;
        this.LastAccessTime = 'LastAccessTime' in params ? params.LastAccessTime : null;
        this.DataUpdateTime = 'DataUpdateTime' in params ? params.DataUpdateTime : null;
        this.StructUpdateTime = 'StructUpdateTime' in params ? params.StructUpdateTime : null;

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new DMSColumn();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DropDMSPartitions请求参数结构体
 * @class
 */
class DropDMSPartitionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据库Schema名称
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 数据表名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 分区名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 单个分区名称
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否删除分区数据
         * @type {boolean || null}
         */
        this.DeleteData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.DeleteData = 'DeleteData' in params ? params.DeleteData : null;

    }
}

/**
 * notebook session列表信息。
 * @class
 */
class NotebookSessions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型，当前支持：spark、pyspark、sparkr、sql
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 代理用户，默认为root
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyUser = null;

        /**
         * Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止）
         * @type {string || null}
         */
        this.State = null;

        /**
         * Spark任务返回的AppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkAppId = null;

        /**
         * Session名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Session创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 引擎名称
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * 最新的运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastRunningTime = null;

        /**
         * 创建者
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * spark ui地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkUiUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ProxyUser = 'ProxyUser' in params ? params.ProxyUser : null;
        this.State = 'State' in params ? params.State : null;
        this.SparkAppId = 'SparkAppId' in params ? params.SparkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.LastRunningTime = 'LastRunningTime' in params ? params.LastRunningTime : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.SparkUiUrl = 'SparkUiUrl' in params ? params.SparkUiUrl : null;

    }
}

/**
 * CreateNotebookSessionStatementSupportBatchSQL请求参数结构体
 * @class
 */
class CreateNotebookSessionStatementSupportBatchSQLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 执行的代码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 类型，当前支持：spark、pyspark、sparkr、sql
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 是否保存运行结果
         * @type {boolean || null}
         */
        this.SaveResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.SaveResult = 'SaveResult' in params ? params.SaveResult : null;

    }
}

/**
 * CreateTasksInOrder请求参数结构体
 * @class
 */
class CreateTasksInOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * SQL任务信息
         * @type {TasksInfo || null}
         */
        this.Tasks = null;

        /**
         * 数据源名称，默认为COSDataCatalog
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;

        if (params.Tasks) {
            let obj = new TasksInfo();
            obj.deserialize(params.Tasks)
            this.Tasks = obj;
        }
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;

    }
}

/**
 * AddDMSPartitions返回参数结构体
 * @class
 */
class AddDMSPartitionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功数量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 分区值
         * @type {Array.<DMSPartition> || null}
         */
        this.Partitions = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new DMSPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachWorkGroupPolicy返回参数结构体
 * @class
 */
class DetachWorkGroupPolicyResponse extends  AbstractModel {
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
 * GenerateCreateMangedTableSql请求参数结构体
 * @class
 */
class GenerateCreateMangedTableSqlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表基本信息
         * @type {TableBaseInfo || null}
         */
        this.TableBaseInfo = null;

        /**
         * 表字段信息
         * @type {Array.<TColumn> || null}
         */
        this.Columns = null;

        /**
         * 表分区信息
         * @type {Array.<TPartition> || null}
         */
        this.Partitions = null;

        /**
         * 表属性信息
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

        if (params.TableBaseInfo) {
            let obj = new TableBaseInfo();
            obj.deserialize(params.TableBaseInfo)
            this.TableBaseInfo = obj;
        }

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new TColumn();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new TPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
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
 * ModifySparkApp请求参数结构体
 * @class
 */
class ModifySparkAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * spark应用名
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 1代表spark jar应用，2代表spark streaming应用
         * @type {number || null}
         */
        this.AppType = null;

        /**
         * 执行spark作业的数据引擎
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * spark应用的执行入口
         * @type {string || null}
         */
        this.AppFile = null;

        /**
         * 执行spark作业的角色ID
         * @type {number || null}
         */
        this.RoleArn = null;

        /**
         * spark作业driver资源规格大小, 可取small,medium,large,xlarge
         * @type {string || null}
         */
        this.AppDriverSize = null;

        /**
         * spark作业executor资源规格大小, 可取small,medium,large,xlarge
         * @type {string || null}
         */
        this.AppExecutorSize = null;

        /**
         * spark作业executor个数
         * @type {number || null}
         */
        this.AppExecutorNums = null;

        /**
         * spark应用Id
         * @type {string || null}
         */
        this.SparkAppId = null;

        /**
         * 该字段已下线，请使用字段Datasource
         * @type {string || null}
         */
        this.Eni = null;

        /**
         * 是否本地上传，可取cos,lakefs
         * @type {string || null}
         */
        this.IsLocal = null;

        /**
         * spark jar作业时的主类
         * @type {string || null}
         */
        this.MainClass = null;

        /**
         * spark配置，以换行符分隔
         * @type {string || null}
         */
        this.AppConf = null;

        /**
         * jar资源依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
         * @type {string || null}
         */
        this.IsLocalJars = null;

        /**
         * spark jar作业依赖jars，以逗号分隔
         * @type {string || null}
         */
        this.AppJars = null;

        /**
         * file资源依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
         * @type {string || null}
         */
        this.IsLocalFiles = null;

        /**
         * spark作业依赖资源，以逗号分隔
         * @type {string || null}
         */
        this.AppFiles = null;

        /**
         * pyspark：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
         * @type {string || null}
         */
        this.IsLocalPythonFiles = null;

        /**
         * pyspark：python依赖, 除py文件外，还支持zip/egg等归档格式，多文件以逗号分隔
         * @type {string || null}
         */
        this.AppPythonFiles = null;

        /**
         * spark作业命令行参数
         * @type {string || null}
         */
        this.CmdArgs = null;

        /**
         * 只对spark流任务生效
         * @type {number || null}
         */
        this.MaxRetries = null;

        /**
         * 数据源名
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * archives：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
         * @type {string || null}
         */
        this.IsLocalArchives = null;

        /**
         * archives：依赖资源
         * @type {string || null}
         */
        this.AppArchives = null;

        /**
         * Spark Image 版本
         * @type {string || null}
         */
        this.SparkImage = null;

        /**
         * Spark Image 版本名称
         * @type {string || null}
         */
        this.SparkImageVersion = null;

        /**
         * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums
         * @type {number || null}
         */
        this.AppExecutorMaxNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.DataEngine = 'DataEngine' in params ? params.DataEngine : null;
        this.AppFile = 'AppFile' in params ? params.AppFile : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.AppDriverSize = 'AppDriverSize' in params ? params.AppDriverSize : null;
        this.AppExecutorSize = 'AppExecutorSize' in params ? params.AppExecutorSize : null;
        this.AppExecutorNums = 'AppExecutorNums' in params ? params.AppExecutorNums : null;
        this.SparkAppId = 'SparkAppId' in params ? params.SparkAppId : null;
        this.Eni = 'Eni' in params ? params.Eni : null;
        this.IsLocal = 'IsLocal' in params ? params.IsLocal : null;
        this.MainClass = 'MainClass' in params ? params.MainClass : null;
        this.AppConf = 'AppConf' in params ? params.AppConf : null;
        this.IsLocalJars = 'IsLocalJars' in params ? params.IsLocalJars : null;
        this.AppJars = 'AppJars' in params ? params.AppJars : null;
        this.IsLocalFiles = 'IsLocalFiles' in params ? params.IsLocalFiles : null;
        this.AppFiles = 'AppFiles' in params ? params.AppFiles : null;
        this.IsLocalPythonFiles = 'IsLocalPythonFiles' in params ? params.IsLocalPythonFiles : null;
        this.AppPythonFiles = 'AppPythonFiles' in params ? params.AppPythonFiles : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;
        this.MaxRetries = 'MaxRetries' in params ? params.MaxRetries : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.IsLocalArchives = 'IsLocalArchives' in params ? params.IsLocalArchives : null;
        this.AppArchives = 'AppArchives' in params ? params.AppArchives : null;
        this.SparkImage = 'SparkImage' in params ? params.SparkImage : null;
        this.SparkImageVersion = 'SparkImageVersion' in params ? params.SparkImageVersion : null;
        this.AppExecutorMaxNumbers = 'AppExecutorMaxNumbers' in params ? params.AppExecutorMaxNumbers : null;

    }
}

/**
 * spark流任务统计信息
 * @class
 */
class StreamingStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 数据接收器数
         * @type {number || null}
         */
        this.Receivers = null;

        /**
         * 运行中的接收器数
         * @type {number || null}
         */
        this.NumActiveReceivers = null;

        /**
         * 不活跃的接收器数
         * @type {number || null}
         */
        this.NumInactiveReceivers = null;

        /**
         * 运行中的批数
         * @type {number || null}
         */
        this.NumActiveBatches = null;

        /**
         * 待处理的批数
         * @type {number || null}
         */
        this.NumRetainedCompletedBatches = null;

        /**
         * 已完成的批数
         * @type {number || null}
         */
        this.NumTotalCompletedBatches = null;

        /**
         * 平均输入速率
         * @type {number || null}
         */
        this.AverageInputRate = null;

        /**
         * 平均等待时长
         * @type {number || null}
         */
        this.AverageSchedulingDelay = null;

        /**
         * 平均处理时长
         * @type {number || null}
         */
        this.AverageProcessingTime = null;

        /**
         * 平均延时
         * @type {number || null}
         */
        this.AverageTotalDelay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.NumActiveReceivers = 'NumActiveReceivers' in params ? params.NumActiveReceivers : null;
        this.NumInactiveReceivers = 'NumInactiveReceivers' in params ? params.NumInactiveReceivers : null;
        this.NumActiveBatches = 'NumActiveBatches' in params ? params.NumActiveBatches : null;
        this.NumRetainedCompletedBatches = 'NumRetainedCompletedBatches' in params ? params.NumRetainedCompletedBatches : null;
        this.NumTotalCompletedBatches = 'NumTotalCompletedBatches' in params ? params.NumTotalCompletedBatches : null;
        this.AverageInputRate = 'AverageInputRate' in params ? params.AverageInputRate : null;
        this.AverageSchedulingDelay = 'AverageSchedulingDelay' in params ? params.AverageSchedulingDelay : null;
        this.AverageProcessingTime = 'AverageProcessingTime' in params ? params.AverageProcessingTime : null;
        this.AverageTotalDelay = 'AverageTotalDelay' in params ? params.AverageTotalDelay : null;

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

        /**
         * 数据源名称，默认为DataLakeCatalog
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

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
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;

    }
}

/**
 * GenerateCreateMangedTableSql返回参数结构体
 * @class
 */
class GenerateCreateMangedTableSqlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建托管存储内表sql语句描述
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
 * DescribeDMSTables返回参数结构体
 * @class
 */
class DescribeDMSTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DMS元数据列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DMSTableInfo> || null}
         */
        this.TableList = null;

        /**
         * 统计值
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

        if (params.TableList) {
            this.TableList = new Array();
            for (let z in params.TableList) {
                let obj = new DMSTableInfo();
                obj.deserialize(params.TableList[z]);
                this.TableList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 绑定到同一个工作组的用户Id的集合
 * @class
 */
class UserIdSetOfWorkGroupId extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作组Id
         * @type {number || null}
         */
        this.WorkGroupId = null;

        /**
         * 用户Id集合，和CAM侧Uin匹配
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkGroupId = 'WorkGroupId' in params ? params.WorkGroupId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * AlterDMSPartition请求参数结构体
 * @class
 */
class AlterDMSPartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前名称，变更前db名称
         * @type {string || null}
         */
        this.CurrentDbName = null;

        /**
         * 当前名称，变更前table名称
         * @type {string || null}
         */
        this.CurrentTableName = null;

        /**
         * 当前名称，变更前Part名称
         * @type {string || null}
         */
        this.CurrentValues = null;

        /**
         * 分区
         * @type {DMSPartition || null}
         */
        this.Partition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentDbName = 'CurrentDbName' in params ? params.CurrentDbName : null;
        this.CurrentTableName = 'CurrentTableName' in params ? params.CurrentTableName : null;
        this.CurrentValues = 'CurrentValues' in params ? params.CurrentValues : null;

        if (params.Partition) {
            let obj = new DMSPartition();
            obj.deserialize(params.Partition)
            this.Partition = obj;
        }

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

        /**
         * 视图创建人昵称
         * @type {string || null}
         */
        this.UserAlias = null;

        /**
         * 视图创建人ID
         * @type {string || null}
         */
        this.UserSubUin = null;

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
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;
        this.UserSubUin = 'UserSubUin' in params ? params.UserSubUin : null;

    }
}

/**
 * CheckLockMetaData请求参数结构体
 * @class
 */
class CheckLockMetaDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 锁ID
         * @type {number || null}
         */
        this.LockId = null;

        /**
         * 数据源名称
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 事务ID
         * @type {number || null}
         */
        this.TxnId = null;

        /**
         * 过期时间ms
         * @type {number || null}
         */
        this.ElapsedMs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LockId = 'LockId' in params ? params.LockId : null;
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.TxnId = 'TxnId' in params ? params.TxnId : null;
        this.ElapsedMs = 'ElapsedMs' in params ? params.ElapsedMs : null;

    }
}

/**
 * DescribeSparkAppJob请求参数结构体
 * @class
 */
class DescribeSparkAppJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * spark作业Id，与JobName同时存在时，JobName无效
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * spark作业名
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
         * 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。
task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。
task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。
task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。
task-operator- string （子uin过滤）
task-kind - string （任务类型过滤）
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段，支持如下字段类型，create-time（创建时间，默认）、update-time（更新时间）
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

        /**
         * 支持计算资源名字筛选
         * @type {string || null}
         */
        this.DataEngineName = null;

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
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;

    }
}

/**
 * CreateSparkAppTask请求参数结构体
 * @class
 */
class CreateSparkAppTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * spark作业名
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * spark作业的命令行参数，以空格分隔；一般用于周期性调用使用
         * @type {string || null}
         */
        this.CmdArgs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;

    }
}

/**
 * CancelNotebookSessionStatementBatch返回参数结构体
 * @class
 */
class CancelNotebookSessionStatementBatchResponse extends  AbstractModel {
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
 * 配置格式
 * @class
 */
class KVPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置的key值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 配置的value值
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

        /**
         * 该数据表所属数据源名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 该数据表备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableComment = null;

        /**
         * 具体类型，表or视图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据格式类型，hive，iceberg等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableFormat = null;

        /**
         * 建表用户昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserAlias = null;

        /**
         * 建表用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserSubUin = null;

        /**
         * 数据治理配置项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DataGovernPolicy || null}
         */
        this.GovernPolicy = null;

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
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.TableComment = 'TableComment' in params ? params.TableComment : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TableFormat = 'TableFormat' in params ? params.TableFormat : null;
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;
        this.UserSubUin = 'UserSubUin' in params ? params.UserSubUin : null;

        if (params.GovernPolicy) {
            let obj = new DataGovernPolicy();
            obj.deserialize(params.GovernPolicy)
            this.GovernPolicy = obj;
        }

    }
}

/**
 * UnlockMetaData请求参数结构体
 * @class
 */
class UnlockMetaDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 锁ID
         * @type {number || null}
         */
        this.LockId = null;

        /**
         * 数据源名称
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LockId = 'LockId' in params ? params.LockId : null;
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;

    }
}

/**
 * AttachUserPolicy请求参数结构体
 * @class
 */
class AttachUserPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id，和子用户uin相同，需要先使用CreateUser接口创建用户。可以使用DescribeUsers接口查看。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 鉴权策略集合
         * @type {Array.<Policy> || null}
         */
        this.PolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.PolicySet) {
            this.PolicySet = new Array();
            for (let z in params.PolicySet) {
                let obj = new Policy();
                obj.deserialize(params.PolicySet[z]);
                this.PolicySet.push(obj);
            }
        }

    }
}

/**
 * CreateInternalTable请求参数结构体
 * @class
 */
class CreateInternalTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表基本信息
         * @type {TableBaseInfo || null}
         */
        this.TableBaseInfo = null;

        /**
         * 表字段信息
         * @type {Array.<TColumn> || null}
         */
        this.Columns = null;

        /**
         * 表分区信息
         * @type {Array.<TPartition> || null}
         */
        this.Partitions = null;

        /**
         * 表属性信息
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

        if (params.TableBaseInfo) {
            let obj = new TableBaseInfo();
            obj.deserialize(params.TableBaseInfo)
            this.TableBaseInfo = obj;
        }

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new TColumn();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new TPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
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

    }
}

/**
 * ListTaskJobLogDetail请求参数结构体
 * @class
 */
class ListTaskJobLogDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表返回的Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 开始运行时间，unix时间戳（毫秒）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束运行时间，unix时间戳（毫秒）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 分页大小，最大1000，配合Context一起使用
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 下一次分页参数，第一次传空
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 最近1000条日志是否升序排列，true:升序排序，false:倒序，默认false，倒序排列
         * @type {boolean || null}
         */
        this.Asc = null;

        /**
         * 预览日志的通用过滤条件
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Asc = 'Asc' in params ? params.Asc : null;

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
 * 批量顺序执行任务集合
 * @class
 */
class TasksInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型，SQLTask：SQL查询任务。SparkSQLTask：Spark SQL查询任务
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 容错策略。Proceed：前面任务出错/取消后继续执行后面的任务。Terminate：前面的任务出错/取消之后终止后面任务的执行，后面的任务全部标记为已取消。
         * @type {string || null}
         */
        this.FailureTolerance = null;

        /**
         * base64加密后的SQL语句，用";"号分隔每个SQL语句，一次最多提交50个任务。严格按照前后顺序执行
         * @type {string || null}
         */
        this.SQL = null;

        /**
         * 任务的配置信息，当前仅支持SparkSQLTask任务。
         * @type {Array.<KVPair> || null}
         */
        this.Config = null;

        /**
         * 任务的用户自定义参数信息
         * @type {Array.<KVPair> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.FailureTolerance = 'FailureTolerance' in params ? params.FailureTolerance : null;
        this.SQL = 'SQL' in params ? params.SQL : null;

        if (params.Config) {
            this.Config = new Array();
            for (let z in params.Config) {
                let obj = new KVPair();
                obj.deserialize(params.Config[z]);
                this.Config.push(obj);
            }
        }

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new KVPair();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * AttachWorkGroupPolicy请求参数结构体
 * @class
 */
class AttachWorkGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作组Id
         * @type {number || null}
         */
        this.WorkGroupId = null;

        /**
         * 要绑定的策略集合
         * @type {Array.<Policy> || null}
         */
        this.PolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkGroupId = 'WorkGroupId' in params ? params.WorkGroupId : null;

        if (params.PolicySet) {
            this.PolicySet = new Array();
            for (let z in params.PolicySet) {
                let obj = new Policy();
                obj.deserialize(params.PolicySet[z]);
                this.PolicySet.push(obj);
            }
        }

    }
}

/**
 * notebook session statement输出信息。
 * @class
 */
class StatementOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExecutionCount = null;

        /**
         * Statement数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.Data = null;

        /**
         * Statement状态:ok,error
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorName = null;

        /**
         * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorValue = null;

        /**
         * 错误堆栈信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ErrorMessage = null;

        /**
         * SQL类型任务结果返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SQLResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecutionCount = 'ExecutionCount' in params ? params.ExecutionCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new KVPair();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorName = 'ErrorName' in params ? params.ErrorName : null;
        this.ErrorValue = 'ErrorValue' in params ? params.ErrorValue : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.SQLResult = 'SQLResult' in params ? params.SQLResult : null;

    }
}

/**
 * 标签对信息
 * @class
 */
class TagInfo extends  AbstractModel {
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
 * CreateUser返回参数结构体
 * @class
 */
class CreateUserResponse extends  AbstractModel {
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
 * DescribeNotebookSessionStatements请求参数结构体
 * @class
 */
class DescribeNotebookSessionStatementsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 批任务id
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * DeleteUser返回参数结构体
 * @class
 */
class DeleteUserResponse extends  AbstractModel {
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
 * 元数据加锁内容
 * @class
 */
class LockComponentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 分区
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * 锁类型：SHARED_READ、SHARED_WRITE、EXCLUSIVE
         * @type {string || null}
         */
        this.LockType = null;

        /**
         * 锁级别：DB、TABLE、PARTITION
         * @type {string || null}
         */
        this.LockLevel = null;

        /**
         * 锁操作：SELECT,INSERT,UPDATE,DELETE,UNSET,NO_TXN
         * @type {string || null}
         */
        this.DataOperationType = null;

        /**
         * 是否保持Acid
         * @type {boolean || null}
         */
        this.IsAcid = null;

        /**
         * 是否动态分区写
         * @type {boolean || null}
         */
        this.IsDynamicPartitionWrite = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.LockType = 'LockType' in params ? params.LockType : null;
        this.LockLevel = 'LockLevel' in params ? params.LockLevel : null;
        this.DataOperationType = 'DataOperationType' in params ? params.DataOperationType : null;
        this.IsAcid = 'IsAcid' in params ? params.IsAcid : null;
        this.IsDynamicPartitionWrite = 'IsDynamicPartitionWrite' in params ? params.IsDynamicPartitionWrite : null;

    }
}

/**
 * DescribeNotebookSessions返回参数结构体
 * @class
 */
class DescribeNotebookSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * session总数量
         * @type {number || null}
         */
        this.TotalElements = null;

        /**
         * 总页数
         * @type {number || null}
         */
        this.TotalPages = null;

        /**
         * 当前页码
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 当前页数量
         * @type {number || null}
         */
        this.Size = null;

        /**
         * session列表信息
         * @type {Array.<NotebookSessions> || null}
         */
        this.Sessions = null;

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
        this.TotalElements = 'TotalElements' in params ? params.TotalElements : null;
        this.TotalPages = 'TotalPages' in params ? params.TotalPages : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Size = 'Size' in params ? params.Size : null;

        if (params.Sessions) {
            this.Sessions = new Array();
            for (let z in params.Sessions) {
                let obj = new NotebookSessions();
                obj.deserialize(params.Sessions[z]);
                this.Sessions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDMSPartitions请求参数结构体
 * @class
 */
class DescribeDMSPartitionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * schema名称
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 单个分区名称，精准匹配
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 多个分区名称，精准匹配
         * @type {Array.<string> || null}
         */
        this.PartitionNames = null;

        /**
         * 多个分区字段的匹配，模糊匹配
         * @type {Array.<string> || null}
         */
        this.PartValues = null;

        /**
         * 过滤SQL
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * 最大分区数量
         * @type {number || null}
         */
        this.MaxParts = null;

        /**
         * 翻页跳过数量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 页面数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 表达式
         * @type {string || null}
         */
        this.Expression = null;

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
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.PartitionNames = 'PartitionNames' in params ? params.PartitionNames : null;
        this.PartValues = 'PartValues' in params ? params.PartValues : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.MaxParts = 'MaxParts' in params ? params.MaxParts : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Expression = 'Expression' in params ? params.Expression : null;

    }
}

/**
 * 表分区字段信息
 * @class
 */
class TPartition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 字段描述
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 分区类型
         * @type {string || null}
         */
        this.PartitionType = null;

        /**
         * 分区格式
         * @type {string || null}
         */
        this.PartitionFormat = null;

        /**
         * 分区分隔数
         * @type {number || null}
         */
        this.PartitionDot = null;

        /**
         * 分区转换策略
         * @type {string || null}
         */
        this.Transform = null;

        /**
         * 策略参数
         * @type {Array.<string> || null}
         */
        this.TransformArgs = null;

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
        this.PartitionType = 'PartitionType' in params ? params.PartitionType : null;
        this.PartitionFormat = 'PartitionFormat' in params ? params.PartitionFormat : null;
        this.PartitionDot = 'PartitionDot' in params ? params.PartitionDot : null;
        this.Transform = 'Transform' in params ? params.Transform : null;
        this.TransformArgs = 'TransformArgs' in params ? params.TransformArgs : null;

    }
}

/**
 * DescribeSparkAppJobs请求参数结构体
 * @class
 */
class DescribeSparkAppJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果按照该字段排序
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 正序或者倒序，例如：desc
         * @type {string || null}
         */
        this.Sorting = null;

        /**
         * 按照该参数过滤,支持spark-job-name
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 更新时间起始点
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 更新时间截止点
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询列表限制数量
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteNotebookSession请求参数结构体
 * @class
 */
class DeleteNotebookSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * CreateDMSTable返回参数结构体
 * @class
 */
class CreateDMSTableResponse extends  AbstractModel {
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
 * CreateNotebookSession请求参数结构体
 * @class
 */
class CreateNotebookSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型，当前支持：spark、pyspark、sparkr、sql
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * DLC Spark作业引擎名称
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * session文件地址，当前支持：cosn://和lakefs://两种路径
         * @type {Array.<string> || null}
         */
        this.ProgramDependentFiles = null;

        /**
         * 依赖的jar程序地址，当前支持：cosn://和lakefs://两种路径
         * @type {Array.<string> || null}
         */
        this.ProgramDependentJars = null;

        /**
         * 依赖的python程序地址，当前支持：cosn://和lakefs://两种路径
         * @type {Array.<string> || null}
         */
        this.ProgramDependentPython = null;

        /**
         * 依赖的pyspark虚拟环境地址，当前支持：cosn://和lakefs://两种路径
         * @type {Array.<string> || null}
         */
        this.ProgramArchives = null;

        /**
         * 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
         * @type {string || null}
         */
        this.DriverSize = null;

        /**
         * 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
         * @type {string || null}
         */
        this.ExecutorSize = null;

        /**
         * 指定的Executor数量，默认为1
         * @type {number || null}
         */
        this.ExecutorNumbers = null;

        /**
         * Session相关配置，当前支持：dlc.eni、dlc.role.arn、dlc.sql.set.config以及用户指定的配置，注：roleArn必填；
         * @type {Array.<KVPair> || null}
         */
        this.Arguments = null;

        /**
         * 代理用户，默认为root
         * @type {string || null}
         */
        this.ProxyUser = null;

        /**
         * 指定的Session超时时间，单位秒，默认3600秒
         * @type {number || null}
         */
        this.TimeoutInSecond = null;

        /**
         * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers
         * @type {number || null}
         */
        this.ExecutorMaxNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.ProgramDependentFiles = 'ProgramDependentFiles' in params ? params.ProgramDependentFiles : null;
        this.ProgramDependentJars = 'ProgramDependentJars' in params ? params.ProgramDependentJars : null;
        this.ProgramDependentPython = 'ProgramDependentPython' in params ? params.ProgramDependentPython : null;
        this.ProgramArchives = 'ProgramArchives' in params ? params.ProgramArchives : null;
        this.DriverSize = 'DriverSize' in params ? params.DriverSize : null;
        this.ExecutorSize = 'ExecutorSize' in params ? params.ExecutorSize : null;
        this.ExecutorNumbers = 'ExecutorNumbers' in params ? params.ExecutorNumbers : null;

        if (params.Arguments) {
            this.Arguments = new Array();
            for (let z in params.Arguments) {
                let obj = new KVPair();
                obj.deserialize(params.Arguments[z]);
                this.Arguments.push(obj);
            }
        }
        this.ProxyUser = 'ProxyUser' in params ? params.ProxyUser : null;
        this.TimeoutInSecond = 'TimeoutInSecond' in params ? params.TimeoutInSecond : null;
        this.ExecutorMaxNumbers = 'ExecutorMaxNumbers' in params ? params.ExecutorMaxNumbers : null;

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

        /**
         * 隐式分区转换策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Transform = null;

        /**
         * 转换策略参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TransformArgs = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

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
        this.Transform = 'Transform' in params ? params.Transform : null;
        this.TransformArgs = 'TransformArgs' in params ? params.TransformArgs : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
         * 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库（注：当提交建库sql时，该字段传空字符串）。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 默认数据源名称。
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 数据引擎名称，不填提交到默认集群
         * @type {string || null}
         */
        this.DataEngineName = null;

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
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;

    }
}

/**
 * DescribeNotebookSession请求参数结构体
 * @class
 */
class DescribeNotebookSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

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
 * NotebookSessionStatement详情。
 * @class
 */
class NotebookSessionStatementInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 完成时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Completed = null;

        /**
         * 开始时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Started = null;

        /**
         * 完成进度，百分制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Session Statement唯一标识
         * @type {string || null}
         */
        this.StatementId = null;

        /**
         * Session Statement状态，包含：waiting（排队中）、running（运行中）、available（正常）、error（异常）、cancelling（取消中）、cancelled（已取消）
         * @type {string || null}
         */
        this.State = null;

        /**
         * Statement输出信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StatementOutput || null}
         */
        this.OutPut = null;

        /**
         * 批任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 运行语句
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Completed = 'Completed' in params ? params.Completed : null;
        this.Started = 'Started' in params ? params.Started : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.StatementId = 'StatementId' in params ? params.StatementId : null;
        this.State = 'State' in params ? params.State : null;

        if (params.OutPut) {
            let obj = new StatementOutput();
            obj.deserialize(params.OutPut)
            this.OutPut = obj;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * CreateNotebookSessionStatement请求参数结构体
 * @class
 */
class CreateNotebookSessionStatementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 执行的代码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 类型，当前支持：spark、pyspark、sparkr、sql
         * @type {string || null}
         */
        this.Kind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Kind = 'Kind' in params ? params.Kind : null;

    }
}

/**
 * DescribeWorkGroups返回参数结构体
 * @class
 */
class DescribeWorkGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作组总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 工作组信息集合
         * @type {Array.<WorkGroupInfo> || null}
         */
        this.WorkGroupSet = null;

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

        if (params.WorkGroupSet) {
            this.WorkGroupSet = new Array();
            for (let z in params.WorkGroupSet) {
                let obj = new WorkGroupInfo();
                obj.deserialize(params.WorkGroupSet[z]);
                this.WorkGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImportTask请求参数结构体
 * @class
 */
class CreateImportTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据来源，cos
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 输入配置
         * @type {Array.<KVPair> || null}
         */
        this.InputConf = null;

        /**
         * 输出配置
         * @type {Array.<KVPair> || null}
         */
        this.OutputConf = null;

        /**
         * 目标数据源的类型，目前支持导入到托管存储，即lakefsStorage
         * @type {string || null}
         */
        this.OutputType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

        if (params.InputConf) {
            this.InputConf = new Array();
            for (let z in params.InputConf) {
                let obj = new KVPair();
                obj.deserialize(params.InputConf[z]);
                this.InputConf.push(obj);
            }
        }

        if (params.OutputConf) {
            this.OutputConf = new Array();
            for (let z in params.OutputConf) {
                let obj = new KVPair();
                obj.deserialize(params.OutputConf[z]);
                this.OutputConf.push(obj);
            }
        }
        this.OutputType = 'OutputType' in params ? params.OutputType : null;

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
         * 排序方式，desc表示正序，asc表示反序，默认asc
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
 * DescribeSparkAppJob返回参数结构体
 * @class
 */
class DescribeSparkAppJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * spark作业详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SparkJobInfo || null}
         */
        this.Job = null;

        /**
         * 查询的spark作业是否存在
         * @type {boolean || null}
         */
        this.IsExists = null;

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

        if (params.Job) {
            let obj = new SparkJobInfo();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.IsExists = 'IsExists' in params ? params.IsExists : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateExportTask返回参数结构体
 * @class
 */
class CreateExportTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * AddUsersToWorkGroup请求参数结构体
 * @class
 */
class AddUsersToWorkGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要操作的工作组和用户信息
         * @type {UserIdSetOfWorkGroupId || null}
         */
        this.AddInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddInfo) {
            let obj = new UserIdSetOfWorkGroupId();
            obj.deserialize(params.AddInfo)
            this.AddInfo = obj;
        }

    }
}

/**
 * DescribeStoreLocation请求参数结构体
 * @class
 */
class DescribeStoreLocationRequest extends  AbstractModel {
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
 * AddUsersToWorkGroup返回参数结构体
 * @class
 */
class AddUsersToWorkGroupResponse extends  AbstractModel {
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
 * DescribeNotebookSessionLog请求参数结构体
 * @class
 */
class DescribeNotebookSessionLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 分页参数，默认200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数，默认0
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 授权用户信息
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id，和子用户uin相同
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户描述信息，方便区分不同用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserDescription = null;

        /**
         * 单独给用户绑定的权限集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Policy> || null}
         */
        this.PolicySet = null;

        /**
         * 当前用户的创建者
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 创建时间，格式如2021-07-28 16:19:32
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 关联的工作组集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WorkGroupMessage> || null}
         */
        this.WorkGroupSet = null;

        /**
         * 是否是主账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsOwner = null;

        /**
         * 用户类型。ADMIN：管理员 COMMON：普通用户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * 用户别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserDescription = 'UserDescription' in params ? params.UserDescription : null;

        if (params.PolicySet) {
            this.PolicySet = new Array();
            for (let z in params.PolicySet) {
                let obj = new Policy();
                obj.deserialize(params.PolicySet[z]);
                this.PolicySet.push(obj);
            }
        }
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.WorkGroupSet) {
            this.WorkGroupSet = new Array();
            for (let z in params.WorkGroupSet) {
                let obj = new WorkGroupMessage();
                obj.deserialize(params.WorkGroupSet[z]);
                this.WorkGroupSet.push(obj);
            }
        }
        this.IsOwner = 'IsOwner' in params ? params.IsOwner : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;

    }
}

/**
 * CreateExportTask请求参数结构体
 * @class
 */
class CreateExportTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据来源，lakefsStorage、taskResult
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 导出任务输入配置
         * @type {Array.<KVPair> || null}
         */
        this.InputConf = null;

        /**
         * 导出任务输出配置
         * @type {Array.<KVPair> || null}
         */
        this.OutputConf = null;

        /**
         * 目标数据源的类型，目前支持导出到cos
         * @type {string || null}
         */
        this.OutputType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

        if (params.InputConf) {
            this.InputConf = new Array();
            for (let z in params.InputConf) {
                let obj = new KVPair();
                obj.deserialize(params.InputConf[z]);
                this.InputConf.push(obj);
            }
        }

        if (params.OutputConf) {
            this.OutputConf = new Array();
            for (let z in params.OutputConf) {
                let obj = new KVPair();
                obj.deserialize(params.OutputConf[z]);
                this.OutputConf.push(obj);
            }
        }
        this.OutputType = 'OutputType' in params ? params.OutputType : null;

    }
}

/**
 * DescribeNotebookSessionStatement返回参数结构体
 * @class
 */
class DescribeNotebookSessionStatementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session Statement详情
         * @type {NotebookSessionStatementInfo || null}
         */
        this.NotebookSessionStatement = null;

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

        if (params.NotebookSessionStatement) {
            let obj = new NotebookSessionStatementInfo();
            obj.deserialize(params.NotebookSessionStatement)
            this.NotebookSessionStatement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReportHeartbeatMetaData返回参数结构体
 * @class
 */
class ReportHeartbeatMetaDataResponse extends  AbstractModel {
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
 * ReportHeartbeatMetaData请求参数结构体
 * @class
 */
class ReportHeartbeatMetaDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源名称
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 锁ID
         * @type {number || null}
         */
        this.LockId = null;

        /**
         * 事务ID
         * @type {number || null}
         */
        this.TxnId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.LockId = 'LockId' in params ? params.LockId : null;
        this.TxnId = 'TxnId' in params ? params.TxnId : null;

    }
}

/**
 * CreateDMSTable请求参数结构体
 * @class
 */
class CreateDMSTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础对象
         * @type {Asset || null}
         */
        this.Asset = null;

        /**
         * 表类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 存储大小
         * @type {number || null}
         */
        this.StorageSize = null;

        /**
         * 记录数量
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * 生命周期
         * @type {number || null}
         */
        this.LifeTime = null;

        /**
         * 数据更新时间
         * @type {string || null}
         */
        this.DataUpdateTime = null;

        /**
         * 结构更新时间
         * @type {string || null}
         */
        this.StructUpdateTime = null;

        /**
         * 最后访问时间
         * @type {string || null}
         */
        this.LastAccessTime = null;

        /**
         * 存储对象
         * @type {DMSSds || null}
         */
        this.Sds = null;

        /**
         * 列
         * @type {Array.<DMSColumn> || null}
         */
        this.Columns = null;

        /**
         * 分区键值
         * @type {Array.<DMSColumn> || null}
         */
        this.PartitionKeys = null;

        /**
         * 视图文本
         * @type {string || null}
         */
        this.ViewOriginalText = null;

        /**
         * 视图文本
         * @type {string || null}
         */
        this.ViewExpandedText = null;

        /**
         * 分区
         * @type {Array.<DMSPartition> || null}
         */
        this.Partitions = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Asset) {
            let obj = new Asset();
            obj.deserialize(params.Asset)
            this.Asset = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.StorageSize = 'StorageSize' in params ? params.StorageSize : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.LifeTime = 'LifeTime' in params ? params.LifeTime : null;
        this.DataUpdateTime = 'DataUpdateTime' in params ? params.DataUpdateTime : null;
        this.StructUpdateTime = 'StructUpdateTime' in params ? params.StructUpdateTime : null;
        this.LastAccessTime = 'LastAccessTime' in params ? params.LastAccessTime : null;

        if (params.Sds) {
            let obj = new DMSSds();
            obj.deserialize(params.Sds)
            this.Sds = obj;
        }

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new DMSColumn();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }

        if (params.PartitionKeys) {
            this.PartitionKeys = new Array();
            for (let z in params.PartitionKeys) {
                let obj = new DMSColumn();
                obj.deserialize(params.PartitionKeys[z]);
                this.PartitionKeys.push(obj);
            }
        }
        this.ViewOriginalText = 'ViewOriginalText' in params ? params.ViewOriginalText : null;
        this.ViewExpandedText = 'ViewExpandedText' in params ? params.ViewExpandedText : null;

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new DMSPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * CancelNotebookSessionStatement返回参数结构体
 * @class
 */
class CancelNotebookSessionStatementResponse extends  AbstractModel {
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
 * DMSTable基本信息
 * @class
 */
class DMSTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视图文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewOriginalText = null;

        /**
         * 视图文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewExpandedText = null;

        /**
         * hive维护版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Retention = null;

        /**
         * 存储对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DMSSds || null}
         */
        this.Sds = null;

        /**
         * 分区列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DMSColumn> || null}
         */
        this.PartitionKeys = null;

        /**
         * 分区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DMSPartition> || null}
         */
        this.Partitions = null;

        /**
         * 表类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Schema名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 存储大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageSize = null;

        /**
         * 记录数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * 生命周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LifeTime = null;

        /**
         * 最后访问时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastAccessTime = null;

        /**
         * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataUpdateTime = null;

        /**
         * 结构更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StructUpdateTime = null;

        /**
         * 列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DMSColumn> || null}
         */
        this.Columns = null;

        /**
         * 表名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewOriginalText = 'ViewOriginalText' in params ? params.ViewOriginalText : null;
        this.ViewExpandedText = 'ViewExpandedText' in params ? params.ViewExpandedText : null;
        this.Retention = 'Retention' in params ? params.Retention : null;

        if (params.Sds) {
            let obj = new DMSSds();
            obj.deserialize(params.Sds)
            this.Sds = obj;
        }

        if (params.PartitionKeys) {
            this.PartitionKeys = new Array();
            for (let z in params.PartitionKeys) {
                let obj = new DMSColumn();
                obj.deserialize(params.PartitionKeys[z]);
                this.PartitionKeys.push(obj);
            }
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new DMSPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.StorageSize = 'StorageSize' in params ? params.StorageSize : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.LifeTime = 'LifeTime' in params ? params.LifeTime : null;
        this.LastAccessTime = 'LastAccessTime' in params ? params.LastAccessTime : null;
        this.DataUpdateTime = 'DataUpdateTime' in params ? params.DataUpdateTime : null;
        this.StructUpdateTime = 'StructUpdateTime' in params ? params.StructUpdateTime : null;

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new DMSColumn();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * AttachWorkGroupPolicy返回参数结构体
 * @class
 */
class AttachWorkGroupPolicyResponse extends  AbstractModel {
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
 * ModifyWorkGroup返回参数结构体
 * @class
 */
class ModifyWorkGroupResponse extends  AbstractModel {
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
 * DescribeDMSTables请求参数结构体
 * @class
 */
class DescribeDMSTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 数据库schema名称
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据目录
         * @type {string || null}
         */
        this.Catalog = null;

        /**
         * 查询关键词
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 查询模式
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * 表类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 筛选参数：更新开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 筛选参数：更新结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序字段：create_time：创建时间
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 排序字段：true：升序（默认），false：降序
         * @type {boolean || null}
         */
        this.Asc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Catalog = 'Catalog' in params ? params.Catalog : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Asc = 'Asc' in params ? params.Asc : null;

    }
}

/**
 * ModifyUser请求参数结构体
 * @class
 */
class ModifyUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id，和CAM侧Uin匹配
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户描述
         * @type {string || null}
         */
        this.UserDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserDescription = 'UserDescription' in params ? params.UserDescription : null;

    }
}

/**
 * 元数据存储描述属性
 * @class
 */
class DMSSds extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 输入格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputFormat = null;

        /**
         * 输出格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutputFormat = null;

        /**
         * bucket数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NumBuckets = null;

        /**
         * 是是否压缩
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Compressed = null;

        /**
         * 是否有子目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.StoredAsSubDirectories = null;

        /**
         * 序列化lib
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SerdeLib = null;

        /**
         * 序列化名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SerdeName = null;

        /**
         * 桶名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BucketCols = null;

        /**
         * 序列化参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.SerdeParams = null;

        /**
         * 附加参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.Params = null;

        /**
         * 列排序(Expired)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DMSColumnOrder || null}
         */
        this.SortCols = null;

        /**
         * 列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DMSColumn> || null}
         */
        this.Cols = null;

        /**
         * 列排序字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DMSColumnOrder> || null}
         */
        this.SortColumns = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Location = 'Location' in params ? params.Location : null;
        this.InputFormat = 'InputFormat' in params ? params.InputFormat : null;
        this.OutputFormat = 'OutputFormat' in params ? params.OutputFormat : null;
        this.NumBuckets = 'NumBuckets' in params ? params.NumBuckets : null;
        this.Compressed = 'Compressed' in params ? params.Compressed : null;
        this.StoredAsSubDirectories = 'StoredAsSubDirectories' in params ? params.StoredAsSubDirectories : null;
        this.SerdeLib = 'SerdeLib' in params ? params.SerdeLib : null;
        this.SerdeName = 'SerdeName' in params ? params.SerdeName : null;
        this.BucketCols = 'BucketCols' in params ? params.BucketCols : null;

        if (params.SerdeParams) {
            this.SerdeParams = new Array();
            for (let z in params.SerdeParams) {
                let obj = new KVPair();
                obj.deserialize(params.SerdeParams[z]);
                this.SerdeParams.push(obj);
            }
        }

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new KVPair();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

        if (params.SortCols) {
            let obj = new DMSColumnOrder();
            obj.deserialize(params.SortCols)
            this.SortCols = obj;
        }

        if (params.Cols) {
            this.Cols = new Array();
            for (let z in params.Cols) {
                let obj = new DMSColumn();
                obj.deserialize(params.Cols[z]);
                this.Cols.push(obj);
            }
        }

        if (params.SortColumns) {
            this.SortColumns = new Array();
            for (let z in params.SortColumns) {
                let obj = new DMSColumnOrder();
                obj.deserialize(params.SortColumns[z]);
                this.SortColumns.push(obj);
            }
        }

    }
}

/**
 * CreateSparkAppTask返回参数结构体
 * @class
 */
class CreateSparkAppTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批Id
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 任务Id
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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelTask请求参数结构体
 * @class
 */
class CancelTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id，全局唯一
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
         * 计算耗时，单位： ms
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
         * 任务状态：0 初始化， 1 执行中， 2 执行成功，-1 执行失败，-3 已取消。
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

        /**
         * 执行SQL的引擎类型
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务进度明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProgressDetail = null;

        /**
         * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 计算资源id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataEngineId = null;

        /**
         * 执行sql的子uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * 计算资源名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * 导入类型是本地导入还是cos
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 导入配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputConf = null;

        /**
         * 数据条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataNumber = null;

        /**
         * 查询数据能不能下载
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CanDownload = null;

        /**
         * 用户别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserAlias = null;

        /**
         * spark应用作业名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkJobName = null;

        /**
         * spark应用作业Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkJobId = null;

        /**
         * spark应用入口jar文件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkJobFile = null;

        /**
         * spark ui url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UiUrl = null;

        /**
         * 任务耗时，单位： ms
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * spark app job执行task的程序入口参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CmdArgs = null;

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
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProgressDetail = 'ProgressDetail' in params ? params.ProgressDetail : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DataEngineId = 'DataEngineId' in params ? params.DataEngineId : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.InputConf = 'InputConf' in params ? params.InputConf : null;
        this.DataNumber = 'DataNumber' in params ? params.DataNumber : null;
        this.CanDownload = 'CanDownload' in params ? params.CanDownload : null;
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;
        this.SparkJobName = 'SparkJobName' in params ? params.SparkJobName : null;
        this.SparkJobId = 'SparkJobId' in params ? params.SparkJobId : null;
        this.SparkJobFile = 'SparkJobFile' in params ? params.SparkJobFile : null;
        this.UiUrl = 'UiUrl' in params ? params.UiUrl : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;

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
 * BindWorkGroupsToUser返回参数结构体
 * @class
 */
class BindWorkGroupsToUserResponse extends  AbstractModel {
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
 * CreateNotebookSessionStatement返回参数结构体
 * @class
 */
class CreateNotebookSessionStatementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session Statement详情
         * @type {NotebookSessionStatementInfo || null}
         */
        this.NotebookSessionStatement = null;

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

        if (params.NotebookSessionStatement) {
            let obj = new NotebookSessionStatementInfo();
            obj.deserialize(params.NotebookSessionStatement)
            this.NotebookSessionStatement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStoreLocation返回参数结构体
 * @class
 */
class DescribeStoreLocationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回用户设置的结果存储位置路径，如果未设置则返回空字符串：""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StoreLocation = null;

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
        this.StoreLocation = 'StoreLocation' in params ? params.StoreLocation : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * AddDMSPartitions请求参数结构体
 * @class
 */
class AddDMSPartitionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区
         * @type {Array.<DMSPartition> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new DMSPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

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
 * 按批提交Statement运行SQL任务。
 * @class
 */
class NotebookSessionStatementBatchInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NotebookSessionStatementInfo> || null}
         */
        this.NotebookSessionStatementBatch = null;

        /**
         * 当前批任务是否运行完成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsAvailable = null;

        /**
         * Session唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Batch唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NotebookSessionStatementBatch) {
            this.NotebookSessionStatementBatch = new Array();
            for (let z in params.NotebookSessionStatementBatch) {
                let obj = new NotebookSessionStatementInfo();
                obj.deserialize(params.NotebookSessionStatementBatch[z]);
                this.NotebookSessionStatementBatch.push(obj);
            }
        }
        this.IsAvailable = 'IsAvailable' in params ? params.IsAvailable : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * DescribeNotebookSessionStatementSqlResult请求参数结构体
 * @class
 */
class DescribeNotebookSessionStatementSqlResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 返回结果的最大行数，范围0~1000，默认为1000.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * 上一次请求响应返回的分页信息。第一次可以不带，从头开始返回数据，每次返回MaxResults字段设置的数据量。
         * @type {string || null}
         */
        this.NextToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * ModifySparkApp返回参数结构体
 * @class
 */
class ModifySparkAppResponse extends  AbstractModel {
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
 * AlterDMSTable请求参数结构体
 * @class
 */
class AlterDMSTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前名称
         * @type {string || null}
         */
        this.CurrentName = null;

        /**
         * 当前数据库名称
         * @type {string || null}
         */
        this.CurrentDbName = null;

        /**
         * 基础对象
         * @type {Asset || null}
         */
        this.Asset = null;

        /**
         * 表类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 存储大小
         * @type {number || null}
         */
        this.StorageSize = null;

        /**
         * 记录数量
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * 生命周期
         * @type {number || null}
         */
        this.LifeTime = null;

        /**
         * 数据更新时间
         * @type {string || null}
         */
        this.DataUpdateTime = null;

        /**
         * 结构更新时间
         * @type {string || null}
         */
        this.StructUpdateTime = null;

        /**
         * 最后访问时间
         * @type {string || null}
         */
        this.LastAccessTime = null;

        /**
         * 存储对象
         * @type {DMSSds || null}
         */
        this.Sds = null;

        /**
         * 列
         * @type {Array.<DMSColumn> || null}
         */
        this.Columns = null;

        /**
         * 分区键值
         * @type {Array.<DMSColumn> || null}
         */
        this.PartitionKeys = null;

        /**
         * 视图文本
         * @type {string || null}
         */
        this.ViewOriginalText = null;

        /**
         * 视图文本
         * @type {string || null}
         */
        this.ViewExpandedText = null;

        /**
         * 分区
         * @type {Array.<DMSPartition> || null}
         */
        this.Partitions = null;

        /**
         * 当前表名
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentName = 'CurrentName' in params ? params.CurrentName : null;
        this.CurrentDbName = 'CurrentDbName' in params ? params.CurrentDbName : null;

        if (params.Asset) {
            let obj = new Asset();
            obj.deserialize(params.Asset)
            this.Asset = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.StorageSize = 'StorageSize' in params ? params.StorageSize : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.LifeTime = 'LifeTime' in params ? params.LifeTime : null;
        this.DataUpdateTime = 'DataUpdateTime' in params ? params.DataUpdateTime : null;
        this.StructUpdateTime = 'StructUpdateTime' in params ? params.StructUpdateTime : null;
        this.LastAccessTime = 'LastAccessTime' in params ? params.LastAccessTime : null;

        if (params.Sds) {
            let obj = new DMSSds();
            obj.deserialize(params.Sds)
            this.Sds = obj;
        }

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new DMSColumn();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }

        if (params.PartitionKeys) {
            this.PartitionKeys = new Array();
            for (let z in params.PartitionKeys) {
                let obj = new DMSColumn();
                obj.deserialize(params.PartitionKeys[z]);
                this.PartitionKeys.push(obj);
            }
        }
        this.ViewOriginalText = 'ViewOriginalText' in params ? params.ViewOriginalText : null;
        this.ViewExpandedText = 'ViewExpandedText' in params ? params.ViewExpandedText : null;

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new DMSPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * CreateImportTask返回参数结构体
 * @class
 */
class CreateImportTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * Notebook Session详细信息。
 * @class
 */
class NotebookSessionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型，当前支持：spark、pyspark、sparkr、sql
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * DLC Spark作业引擎名称
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * Session相关配置，当前支持：eni、roleArn以及用户指定的配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.Arguments = null;

        /**
         * 运行程序地址，当前支持：cosn://和lakefs://两种路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ProgramDependentFiles = null;

        /**
         * 依赖的jar程序地址，当前支持：cosn://和lakefs://两种路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ProgramDependentJars = null;

        /**
         * 依赖的python程序地址，当前支持：cosn://和lakefs://两种路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ProgramDependentPython = null;

        /**
         * 依赖的pyspark虚拟环境地址，当前支持：cosn://和lakefs://两种路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ProgramArchives = null;

        /**
         * 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DriverSize = null;

        /**
         * 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecutorSize = null;

        /**
         * 指定的Executor数量，默认为1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExecutorNumbers = null;

        /**
         * 代理用户，默认为root
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyUser = null;

        /**
         * 指定的Session超时时间，单位秒，默认3600秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeoutInSecond = null;

        /**
         * Spark任务返回的AppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkAppId = null;

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止）
         * @type {string || null}
         */
        this.State = null;

        /**
         * Session创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 其它信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.AppInfo = null;

        /**
         * Spark ui地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkUiUrl = null;

        /**
         * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExecutorMaxNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;

        if (params.Arguments) {
            this.Arguments = new Array();
            for (let z in params.Arguments) {
                let obj = new KVPair();
                obj.deserialize(params.Arguments[z]);
                this.Arguments.push(obj);
            }
        }
        this.ProgramDependentFiles = 'ProgramDependentFiles' in params ? params.ProgramDependentFiles : null;
        this.ProgramDependentJars = 'ProgramDependentJars' in params ? params.ProgramDependentJars : null;
        this.ProgramDependentPython = 'ProgramDependentPython' in params ? params.ProgramDependentPython : null;
        this.ProgramArchives = 'ProgramArchives' in params ? params.ProgramArchives : null;
        this.DriverSize = 'DriverSize' in params ? params.DriverSize : null;
        this.ExecutorSize = 'ExecutorSize' in params ? params.ExecutorSize : null;
        this.ExecutorNumbers = 'ExecutorNumbers' in params ? params.ExecutorNumbers : null;
        this.ProxyUser = 'ProxyUser' in params ? params.ProxyUser : null;
        this.TimeoutInSecond = 'TimeoutInSecond' in params ? params.TimeoutInSecond : null;
        this.SparkAppId = 'SparkAppId' in params ? params.SparkAppId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.State = 'State' in params ? params.State : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.AppInfo) {
            this.AppInfo = new Array();
            for (let z in params.AppInfo) {
                let obj = new KVPair();
                obj.deserialize(params.AppInfo[z]);
                this.AppInfo.push(obj);
            }
        }
        this.SparkUiUrl = 'SparkUiUrl' in params ? params.SparkUiUrl : null;
        this.ExecutorMaxNumbers = 'ExecutorMaxNumbers' in params ? params.ExecutorMaxNumbers : null;

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
 * 工作组信息
 * @class
 */
class WorkGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询到的工作组唯一Id
         * @type {number || null}
         */
        this.WorkGroupId = null;

        /**
         * 工作组名称
         * @type {string || null}
         */
        this.WorkGroupName = null;

        /**
         * 工作组描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkGroupDescription = null;

        /**
         * 工作组关联的用户数量
         * @type {number || null}
         */
        this.UserNum = null;

        /**
         * 工作组关联的用户集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserMessage> || null}
         */
        this.UserSet = null;

        /**
         * 工作组绑定的权限集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Policy> || null}
         */
        this.PolicySet = null;

        /**
         * 工作组的创建人
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 工作组的创建时间，形如2021-07-28 16:19:32
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkGroupId = 'WorkGroupId' in params ? params.WorkGroupId : null;
        this.WorkGroupName = 'WorkGroupName' in params ? params.WorkGroupName : null;
        this.WorkGroupDescription = 'WorkGroupDescription' in params ? params.WorkGroupDescription : null;
        this.UserNum = 'UserNum' in params ? params.UserNum : null;

        if (params.UserSet) {
            this.UserSet = new Array();
            for (let z in params.UserSet) {
                let obj = new UserMessage();
                obj.deserialize(params.UserSet[z]);
                this.UserSet.push(obj);
            }
        }

        if (params.PolicySet) {
            this.PolicySet = new Array();
            for (let z in params.PolicySet) {
                let obj = new Policy();
                obj.deserialize(params.PolicySet[z]);
                this.PolicySet.push(obj);
            }
        }
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * CreateNotebookSessionStatementSupportBatchSQL返回参数结构体
 * @class
 */
class CreateNotebookSessionStatementSupportBatchSQLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session Statement详情
         * @type {NotebookSessionStatementBatchInformation || null}
         */
        this.NotebookSessionStatementBatches = null;

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

        if (params.NotebookSessionStatementBatches) {
            let obj = new NotebookSessionStatementBatchInformation();
            obj.deserialize(params.NotebookSessionStatementBatches)
            this.NotebookSessionStatementBatches = obj;
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
 * BindWorkGroupsToUser请求参数结构体
 * @class
 */
class BindWorkGroupsToUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的用户和工作组信息
         * @type {WorkGroupIdSetOfUserId || null}
         */
        this.AddInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddInfo) {
            let obj = new WorkGroupIdSetOfUserId();
            obj.deserialize(params.AddInfo)
            this.AddInfo = obj;
        }

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

        /**
         * 表示整个 numeric 的长度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Precision = null;

        /**
         * 表示小数部分的长度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Scale = null;

        /**
         * 是否为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nullable = null;

        /**
         * 字段位置，小的在前
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Position = null;

        /**
         * 字段创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 字段修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 是否为分区字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsPartition = null;

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
        this.Precision = 'Precision' in params ? params.Precision : null;
        this.Scale = 'Scale' in params ? params.Scale : null;
        this.Nullable = 'Nullable' in params ? params.Nullable : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.IsPartition = 'IsPartition' in params ? params.IsPartition : null;

    }
}

/**
 * DeleteWorkGroup请求参数结构体
 * @class
 */
class DeleteWorkGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的工作组Id集合
         * @type {Array.<number> || null}
         */
        this.WorkGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkGroupIds = 'WorkGroupIds' in params ? params.WorkGroupIds : null;

    }
}

/**
 * DescribeTaskResult请求参数结构体
 * @class
 */
class DescribeTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 上一次请求响应返回的分页信息。第一次可以不带，从头开始返回数据，每次返回MaxResults字段设置的数据量。
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * 返回结果的最大行数，范围0~1000，默认为1000.
         * @type {number || null}
         */
        this.MaxResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

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
 * DescribeUsers返回参数结构体
 * @class
 */
class DescribeUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询到的用户总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询到的授权用户信息集合
         * @type {Array.<UserInfo> || null}
         */
        this.UserSet = null;

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

        if (params.UserSet) {
            this.UserSet = new Array();
            for (let z in params.UserSet) {
                let obj = new UserInfo();
                obj.deserialize(params.UserSet[z]);
                this.UserSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeNotebookSessionLog返回参数结构体
 * @class
 */
class DescribeNotebookSessionLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志信息，默认获取最新的200条
         * @type {Array.<string> || null}
         */
        this.Logs = null;

        /**
         * 分页参数，默认200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数，默认0
         * @type {number || null}
         */
        this.Offset = null;

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
        this.Logs = 'Logs' in params ? params.Logs : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 网络配置
 * @class
 */
class NetworkConnection extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络配置id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 网络配置唯一标志符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssociateId = null;

        /**
         * 计算引擎id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HouseId = null;

        /**
         * 数据源id(已废弃)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceConnectionId = null;

        /**
         * 网络配置状态（0-初始化，1-正常）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.State = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 创建用户Appid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 计算引擎名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HouseName = null;

        /**
         * 网络配置名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 网络配置类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NetworkConnectionType = null;

        /**
         * 创建用户uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 创建用户SubAccountUin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * 网络配置描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetworkConnectionDesc = null;

        /**
         * 数据源vpcid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceConnectionVpcId = null;

        /**
         * 数据源SubnetId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceConnectionSubnetId = null;

        /**
         * 数据源SubnetId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceConnectionCidrBlock = null;

        /**
         * 数据源SubnetCidrBlock
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceConnectionSubnetCidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.AssociateId = 'AssociateId' in params ? params.AssociateId : null;
        this.HouseId = 'HouseId' in params ? params.HouseId : null;
        this.DatasourceConnectionId = 'DatasourceConnectionId' in params ? params.DatasourceConnectionId : null;
        this.State = 'State' in params ? params.State : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.HouseName = 'HouseName' in params ? params.HouseName : null;
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.NetworkConnectionType = 'NetworkConnectionType' in params ? params.NetworkConnectionType : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.NetworkConnectionDesc = 'NetworkConnectionDesc' in params ? params.NetworkConnectionDesc : null;
        this.DatasourceConnectionVpcId = 'DatasourceConnectionVpcId' in params ? params.DatasourceConnectionVpcId : null;
        this.DatasourceConnectionSubnetId = 'DatasourceConnectionSubnetId' in params ? params.DatasourceConnectionSubnetId : null;
        this.DatasourceConnectionCidrBlock = 'DatasourceConnectionCidrBlock' in params ? params.DatasourceConnectionCidrBlock : null;
        this.DatasourceConnectionSubnetCidrBlock = 'DatasourceConnectionSubnetCidrBlock' in params ? params.DatasourceConnectionSubnetCidrBlock : null;

    }
}

/**
 * CreateUser请求参数结构体
 * @class
 */
class CreateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要授权的子用户uin，可以通过腾讯云控制台右上角 → “账号信息” → “账号ID进行查看”。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户描述信息，方便区分不同用户
         * @type {string || null}
         */
        this.UserDescription = null;

        /**
         * 绑定到用户的权限集合
         * @type {Array.<Policy> || null}
         */
        this.PolicySet = null;

        /**
         * 用户类型。ADMIN：管理员 COMMON：一般用户。当用户类型为管理员的时候，不能设置权限集合和绑定的工作组集合，管理员默认拥有所有权限。该参数不填默认为COMMON
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * 绑定到用户的工作组ID集合。
         * @type {Array.<number> || null}
         */
        this.WorkGroupIds = null;

        /**
         * 用户别名，字符长度小50
         * @type {string || null}
         */
        this.UserAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserDescription = 'UserDescription' in params ? params.UserDescription : null;

        if (params.PolicySet) {
            this.PolicySet = new Array();
            for (let z in params.PolicySet) {
                let obj = new Policy();
                obj.deserialize(params.PolicySet[z]);
                this.PolicySet.push(obj);
            }
        }
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.WorkGroupIds = 'WorkGroupIds' in params ? params.WorkGroupIds : null;
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;

    }
}

/**
 * ModifyWorkGroup请求参数结构体
 * @class
 */
class ModifyWorkGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作组Id
         * @type {number || null}
         */
        this.WorkGroupId = null;

        /**
         * 工作组描述
         * @type {string || null}
         */
        this.WorkGroupDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkGroupId = 'WorkGroupId' in params ? params.WorkGroupId : null;
        this.WorkGroupDescription = 'WorkGroupDescription' in params ? params.WorkGroupDescription : null;

    }
}

/**
 * CancelTask返回参数结构体
 * @class
 */
class CancelTaskResponse extends  AbstractModel {
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
 * 数据治理规则
 * @class
 */
class DataGovernPolicy extends  AbstractModel {
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
 * UnlockMetaData返回参数结构体
 * @class
 */
class UnlockMetaDataResponse extends  AbstractModel {
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
 * DeleteWorkGroup返回参数结构体
 * @class
 */
class DeleteWorkGroupResponse extends  AbstractModel {
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
 * DropDMSTable返回参数结构体
 * @class
 */
class DropDMSTableResponse extends  AbstractModel {
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
 * 同一个用户绑定的工作组集合
 * @class
 */
class WorkGroupIdSetOfUserId extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id，和CAM侧Uin匹配
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 工作组Id集合
         * @type {Array.<number> || null}
         */
        this.WorkGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.WorkGroupIds = 'WorkGroupIds' in params ? params.WorkGroupIds : null;

    }
}

/**
 * CreateWorkGroup返回参数结构体
 * @class
 */
class CreateWorkGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作组Id，全局唯一
         * @type {number || null}
         */
        this.WorkGroupId = null;

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
        this.WorkGroupId = 'WorkGroupId' in params ? params.WorkGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务结果信息。
 * @class
 */
class TaskResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 数据源名称，当前任务执行时候选中的默认数据源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 数据库名称，当前任务执行时候选中的默认数据库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 当前执行的SQL，一个任务包含一个SQL
         * @type {string || null}
         */
        this.SQL = null;

        /**
         * 执行任务的类型，现在分为DDL、DML、DQL
         * @type {string || null}
         */
        this.SQLType = null;

        /**
         * 任务当前的状态，0：初始化 1：任务运行中 2：任务执行成功 -1：任务执行失败 -3：用户手动终止。只有任务执行成功的情况下，才会返回任务执行的结果
         * @type {number || null}
         */
        this.State = null;

        /**
         * 扫描的数据量，单位byte
         * @type {number || null}
         */
        this.DataAmount = null;

        /**
         * 计算耗时，单位： ms
         * @type {number || null}
         */
        this.UsedTime = null;

        /**
         * 任务结果输出的COS桶地址
         * @type {string || null}
         */
        this.OutputPath = null;

        /**
         * 任务创建时间，时间戳
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务执行信息，成功时返回success，失败时返回失败原因
         * @type {string || null}
         */
        this.OutputMessage = null;

        /**
         * 被影响的行数
         * @type {string || null}
         */
        this.RowAffectInfo = null;

        /**
         * 结果的schema信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Column> || null}
         */
        this.ResultSchema = null;

        /**
         * 结果信息，反转义后，外层数组的每个元素为一行数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultSet = null;

        /**
         * 分页信息，如果没有更多结果数据，nextToken为空
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * 任务执行进度num/100(%)
         * @type {number || null}
         */
        this.Percentage = null;

        /**
         * 任务进度明细
         * @type {string || null}
         */
        this.ProgressDetail = null;

        /**
         * 控制台展示格式。table：表格展示 text：文本展示
         * @type {string || null}
         */
        this.DisplayFormat = null;

        /**
         * 任务耗时，单位： ms
         * @type {number || null}
         */
        this.TotalTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SQL = 'SQL' in params ? params.SQL : null;
        this.SQLType = 'SQLType' in params ? params.SQLType : null;
        this.State = 'State' in params ? params.State : null;
        this.DataAmount = 'DataAmount' in params ? params.DataAmount : null;
        this.UsedTime = 'UsedTime' in params ? params.UsedTime : null;
        this.OutputPath = 'OutputPath' in params ? params.OutputPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.OutputMessage = 'OutputMessage' in params ? params.OutputMessage : null;
        this.RowAffectInfo = 'RowAffectInfo' in params ? params.RowAffectInfo : null;

        if (params.ResultSchema) {
            this.ResultSchema = new Array();
            for (let z in params.ResultSchema) {
                let obj = new Column();
                obj.deserialize(params.ResultSchema[z]);
                this.ResultSchema.push(obj);
            }
        }
        this.ResultSet = 'ResultSet' in params ? params.ResultSet : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;
        this.ProgressDetail = 'ProgressDetail' in params ? params.ProgressDetail : null;
        this.DisplayFormat = 'DisplayFormat' in params ? params.DisplayFormat : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;

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

        /**
         * 指定查询的数据源名称，默认为DataLakeCatalog
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 起始时间：用于对更新时间的筛选
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 终止时间：用于对更新时间的筛选
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 排序字段，支持：CreateTime、UpdateTime、StorageSize、RecordCount、Name（不传则默认按name升序）
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 排序字段，false：降序（默认）；true：升序
         * @type {boolean || null}
         */
        this.Asc = null;

        /**
         * table type，表类型查询,可用值:EXTERNAL_TABLE,INDEX_TABLE,MANAGED_TABLE,MATERIALIZED_VIEW,TABLE,VIEW,VIRTUAL_VIEW
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 筛选字段-表格式：不传（默认）为查全部；LAKEFS：托管表；ICEBERG：非托管iceberg表；HIVE：非托管hive表；OTHER：非托管其它；
         * @type {string || null}
         */
        this.TableFormat = null;

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
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Asc = 'Asc' in params ? params.Asc : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableFormat = 'TableFormat' in params ? params.TableFormat : null;

    }
}

/**
 * DeleteNotebookSession返回参数结构体
 * @class
 */
class DeleteNotebookSessionResponse extends  AbstractModel {
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
 * CreateStoreLocation请求参数结构体
 * @class
 */
class CreateStoreLocationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算结果存储cos路径，如：cosn://bucketname/
         * @type {string || null}
         */
        this.StoreLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StoreLocation = 'StoreLocation' in params ? params.StoreLocation : null;

    }
}

/**
 * DMSTable信息
 * @class
 */
class DMSTableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DMS表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DMSTable || null}
         */
        this.Table = null;

        /**
         * 基础对象信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Asset || null}
         */
        this.Asset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Table) {
            let obj = new DMSTable();
            obj.deserialize(params.Table)
            this.Table = obj;
        }

        if (params.Asset) {
            let obj = new Asset();
            obj.deserialize(params.Asset)
            this.Asset = obj;
        }

    }
}

/**
 * DescribeNotebookSessionStatements返回参数结构体
 * @class
 */
class DescribeNotebookSessionStatementsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session Statement详情
         * @type {NotebookSessionStatementBatchInformation || null}
         */
        this.NotebookSessionStatements = null;

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

        if (params.NotebookSessionStatements) {
            let obj = new NotebookSessionStatementBatchInformation();
            obj.deserialize(params.NotebookSessionStatements)
            this.NotebookSessionStatements = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttachUserPolicy返回参数结构体
 * @class
 */
class AttachUserPolicyResponse extends  AbstractModel {
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
 * DropDMSTable请求参数结构体
 * @class
 */
class DropDMSTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否删除数据
         * @type {boolean || null}
         */
        this.DeleteData = null;

        /**
         * 环境属性
         * @type {KVPair || null}
         */
        this.EnvProps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DeleteData = 'DeleteData' in params ? params.DeleteData : null;

        if (params.EnvProps) {
            let obj = new KVPair();
            obj.deserialize(params.EnvProps)
            this.EnvProps = obj;
        }

    }
}

/**
 * DescribeNotebookSessionStatementSqlResult返回参数结构体
 * @class
 */
class DescribeNotebookSessionStatementSqlResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 结果数据
         * @type {string || null}
         */
        this.ResultSet = null;

        /**
         * schema
         * @type {Array.<Column> || null}
         */
        this.ResultSchema = null;

        /**
         * 分页信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * 存储结果地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutputPath = null;

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
        this.ResultSet = 'ResultSet' in params ? params.ResultSet : null;

        if (params.ResultSchema) {
            this.ResultSchema = new Array();
            for (let z in params.ResultSchema) {
                let obj = new Column();
                obj.deserialize(params.ResultSchema[z]);
                this.ResultSchema.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.OutputPath = 'OutputPath' in params ? params.OutputPath : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 迁移元数据分区对象
 * @class
 */
class DMSPartition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据目录名称
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 数据版本
         * @type {number || null}
         */
        this.DataVersion = null;

        /**
         * 分区名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 值列表
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 存储大小
         * @type {number || null}
         */
        this.StorageSize = null;

        /**
         * 记录数量
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 最后访问时间
         * @type {string || null}
         */
        this.LastAccessTime = null;

        /**
         * 附件属性
         * @type {Array.<KVPair> || null}
         */
        this.Params = null;

        /**
         * 存储对象
         * @type {DMSSds || null}
         */
        this.Sds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.DataVersion = 'DataVersion' in params ? params.DataVersion : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.StorageSize = 'StorageSize' in params ? params.StorageSize : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.LastAccessTime = 'LastAccessTime' in params ? params.LastAccessTime : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new KVPair();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

        if (params.Sds) {
            let obj = new DMSSds();
            obj.deserialize(params.Sds)
            this.Sds = obj;
        }

    }
}

/**
 * 数据库对象
 * @class
 */
class DatabaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称，长度0~128，支持数字、字母下划线，不允许数字大头，统一转换为小写。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 数据库描述信息，长度 0~500。
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
         * 数据库cos路径
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Location = 'Location' in params ? params.Location : null;

    }
}

/**
 * DescribeDMSPartitions返回参数结构体
 * @class
 */
class DescribeDMSPartitionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区信息
         * @type {Array.<DMSPartition> || null}
         */
        this.Partitions = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new DMSPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUsersFromWorkGroup返回参数结构体
 * @class
 */
class DeleteUsersFromWorkGroupResponse extends  AbstractModel {
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
 * UnbindWorkGroupsFromUser请求参数结构体
 * @class
 */
class UnbindWorkGroupsFromUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解绑的工作组Id和用户Id的关联关系
         * @type {WorkGroupIdSetOfUserId || null}
         */
        this.AddInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddInfo) {
            let obj = new WorkGroupIdSetOfUserId();
            obj.deserialize(params.AddInfo)
            this.AddInfo = obj;
        }

    }
}

/**
 * DescribeDMSDatabase请求参数结构体
 * @class
 */
class DescribeDMSDatabaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * schema名称
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 匹配规则
         * @type {string || null}
         */
        this.Pattern = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.Pattern = 'Pattern' in params ? params.Pattern : null;

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

        /**
         * 查询表所在的数据源名称
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

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
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;

    }
}

/**
 * 权限对象
 * @class
 */
class Policy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要授权的数据库名，填*代表当前Catalog下所有数据库。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定数据库。
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 需要授权的数据源名称，管理员级别下只支持填*（代表该级别全部资源）；数据源级别和数据库级别鉴权的情况下，只支持填COSDataCatalog或者*；在数据表级别鉴权下可以填写用户自定义数据源。不填情况下默认为DataLakeCatalog。注意：如果是对用户自定义数据源进行鉴权，DLC能够管理的权限是用户接入数据源的时候提供的账户的子集。
         * @type {string || null}
         */
        this.Catalog = null;

        /**
         * 需要授权的表名，填*代表当前Database下所有表。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定数据表。
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 授权的权限操作，对于不同级别的鉴权提供不同操作。管理员权限：ALL，不填默认为ALL；数据连接级鉴权：CREATE；数据库级别鉴权：ALL、CREATE、ALTER、DROP；数据表权限：ALL、SELECT、INSERT、ALTER、DELETE、DROP、UPDATE。注意：在数据表权限下，指定的数据源不为COSDataCatalog的时候，只支持SELECT操作。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 授权类型，现在支持八种授权类型：ADMIN:管理员级别鉴权 DATASOURCE：数据连接级别鉴权 DATABASE：数据库级别鉴权 TABLE：表级别鉴权 VIEW：视图级别鉴权 FUNCTION：函数级别鉴权 COLUMN：列级别鉴权 ENGINE：数据引擎鉴权。不填默认为管理员级别鉴权。
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 需要授权的函数名，填*代表当前Catalog下所有函数。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定函数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Function = null;

        /**
         * 需要授权的视图，填*代表当前Database下所有视图。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定视图。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.View = null;

        /**
         * 需要授权的列，填*代表当前所有列。当授权类型为管理员级别时，只允许填“*”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Column = null;

        /**
         * 需要授权的数据引擎，填*代表当前所有引擎。当授权类型为管理员级别时，只允许填“*”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * 用户是否可以进行二次授权。当为true的时候，被授权的用户可以将本次获取的权限再次授权给其他子用户。默认为false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ReAuth = null;

        /**
         * 权限来源，入参不填。USER：权限来自用户本身；WORKGROUP：权限来自绑定的工作组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 授权模式，入参不填。COMMON：普通模式；SENIOR：高级模式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 操作者，入参不填。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 权限创建的时间，入参不填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 权限所属工作组的ID，只有当该权限的来源为工作组时才会有值。即仅当Source字段的值为WORKGROUP时该字段才有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SourceId = null;

        /**
         * 权限所属工作组的名称，只有当该权限的来源为工作组时才会有值。即仅当Source字段的值为WORKGROUP时该字段才有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Catalog = 'Catalog' in params ? params.Catalog : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Function = 'Function' in params ? params.Function : null;
        this.View = 'View' in params ? params.View : null;
        this.Column = 'Column' in params ? params.Column : null;
        this.DataEngine = 'DataEngine' in params ? params.DataEngine : null;
        this.ReAuth = 'ReAuth' in params ? params.ReAuth : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceName = 'SourceName' in params ? params.SourceName : null;

    }
}

/**
 * 日志详情
 * @class
 */
class JobLogResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志时间戳，毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 日志topic id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志topic name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 日志内容，json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogJson = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.LogJson = 'LogJson' in params ? params.LogJson : null;

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
 * DropDMSDatabase返回参数结构体
 * @class
 */
class DropDMSDatabaseResponse extends  AbstractModel {
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
 * DescribeUsers请求参数结构体
 * @class
 */
class DescribeUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定查询的子用户uin，用户需要通过CreateUser接口创建。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认20，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持如下字段类型，create-time
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 排序方式，desc表示正序，asc表示反序， 默认为asc
         * @type {string || null}
         */
        this.Sorting = null;

        /**
         * 过滤条件，支持如下字段类型，user-type：根据用户类型过滤。user-keyword：根据用户名称过滤
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
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
 * DeleteUsersFromWorkGroup请求参数结构体
 * @class
 */
class DeleteUsersFromWorkGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的用户信息
         * @type {UserIdSetOfWorkGroupId || null}
         */
        this.AddInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddInfo) {
            let obj = new UserIdSetOfWorkGroupId();
            obj.deserialize(params.AddInfo)
            this.AddInfo = obj;
        }

    }
}

/**
 * 列排序对象
 * @class
 */
class DMSColumnOrder extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Col = null;

        /**
         * 排序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Col = 'Col' in params ? params.Col : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * CreateSparkApp返回参数结构体
 * @class
 */
class CreateSparkAppResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * App唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkAppId = null;

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
        this.SparkAppId = 'SparkAppId' in params ? params.SparkAppId : null;
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
 * DeleteSparkApp返回参数结构体
 * @class
 */
class DeleteSparkAppResponse extends  AbstractModel {
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
 * AlterDMSPartition返回参数结构体
 * @class
 */
class AlterDMSPartitionResponse extends  AbstractModel {
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
 * CreateTasks请求参数结构体
 * @class
 */
class CreateTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库（注：当提交建库sql时，该字段传空字符串）。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * SQL任务信息
         * @type {TasksInfo || null}
         */
        this.Tasks = null;

        /**
         * 数据源名称，默认为DataLakeCatalog
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 计算引擎名称，不填任务提交到默认集群
         * @type {string || null}
         */
        this.DataEngineName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;

        if (params.Tasks) {
            let obj = new TasksInfo();
            obj.deserialize(params.Tasks)
            this.Tasks = obj;
        }
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;

    }
}

/**
 * SuspendResumeDataEngine请求参数结构体
 * @class
 */
class SuspendResumeDataEngineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟集群名称
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * 操作类型 suspend/resume
         * @type {string || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

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
 * DescribeSparkAppJobs返回参数结构体
 * @class
 */
class DescribeSparkAppJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * spark作业列表详情
         * @type {Array.<SparkJobInfo> || null}
         */
        this.SparkAppJobs = null;

        /**
         * spark作业总数
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

        if (params.SparkAppJobs) {
            this.SparkAppJobs = new Array();
            for (let z in params.SparkAppJobs) {
                let obj = new SparkJobInfo();
                obj.deserialize(params.SparkAppJobs[z]);
                this.SparkAppJobs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSparkAppTasks返回参数结构体
 * @class
 */
class DescribeSparkAppTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务结果（该字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskResponseInfo || null}
         */
        this.Tasks = null;

        /**
         * 任务总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskResponseInfo> || null}
         */
        this.SparkAppTasks = null;

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

        if (params.Tasks) {
            let obj = new TaskResponseInfo();
            obj.deserialize(params.Tasks)
            this.Tasks = obj;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SparkAppTasks) {
            this.SparkAppTasks = new Array();
            for (let z in params.SparkAppTasks) {
                let obj = new TaskResponseInfo();
                obj.deserialize(params.SparkAppTasks[z]);
                this.SparkAppTasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 数据表存储大小（单位：Byte）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageSize = null;

        /**
         * 数据表行数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordCount = null;

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
        this.StorageSize = 'StorageSize' in params ? params.StorageSize : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;

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

        /**
         * 数据库所属的数据源名称
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 排序规则，true:升序；false:降序
         * @type {boolean || null}
         */
        this.Asc = null;

        /**
         * 按视图更新时间筛选，开始时间，如2021-11-11 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 按视图更新时间筛选，结束时间，如2021-11-12 00:00:00
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
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Asc = 'Asc' in params ? params.Asc : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * LockMetaData请求参数结构体
 * @class
 */
class LockMetaDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加锁内容
         * @type {Array.<LockComponentInfo> || null}
         */
        this.LockComponentList = null;

        /**
         * 数据源名称
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 事务id
         * @type {number || null}
         */
        this.TxnId = null;

        /**
         * 客户端信息
         * @type {string || null}
         */
        this.AgentInfo = null;

        /**
         * 主机名
         * @type {string || null}
         */
        this.Hostname = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LockComponentList) {
            this.LockComponentList = new Array();
            for (let z in params.LockComponentList) {
                let obj = new LockComponentInfo();
                obj.deserialize(params.LockComponentList[z]);
                this.LockComponentList.push(obj);
            }
        }
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.TxnId = 'TxnId' in params ? params.TxnId : null;
        this.AgentInfo = 'AgentInfo' in params ? params.AgentInfo : null;
        this.Hostname = 'Hostname' in params ? params.Hostname : null;

    }
}

/**
 * DetachUserPolicy返回参数结构体
 * @class
 */
class DetachUserPolicyResponse extends  AbstractModel {
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
 * DescribeWorkGroups请求参数结构体
 * @class
 */
class DescribeWorkGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的工作组Id，不填或填0表示不过滤。
         * @type {number || null}
         */
        this.WorkGroupId = null;

        /**
         * 过滤条件，当前仅支持按照工作组名称进行模糊搜索。Key为workgroup-name
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认20，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持如下字段类型，create-time
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 排序方式，desc表示正序，asc表示反序， 默认为asc
         * @type {string || null}
         */
        this.Sorting = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkGroupId = 'WorkGroupId' in params ? params.WorkGroupId : null;

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
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.Sorting = 'Sorting' in params ? params.Sorting : null;

    }
}

/**
 * 任务概览
 * @class
 */
class TasksOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 正在排队的任务个数
         * @type {number || null}
         */
        this.TaskQueuedCount = null;

        /**
         * 初始化的任务个数
         * @type {number || null}
         */
        this.TaskInitCount = null;

        /**
         * 正在执行的任务个数
         * @type {number || null}
         */
        this.TaskRunningCount = null;

        /**
         * 当前时间范围的总任务个数
         * @type {number || null}
         */
        this.TotalTaskCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskQueuedCount = 'TaskQueuedCount' in params ? params.TaskQueuedCount : null;
        this.TaskInitCount = 'TaskInitCount' in params ? params.TaskInitCount : null;
        this.TaskRunningCount = 'TaskRunningCount' in params ? params.TaskRunningCount : null;
        this.TotalTaskCount = 'TotalTaskCount' in params ? params.TotalTaskCount : null;

    }
}

/**
 * CreateTasks返回参数结构体
 * @class
 */
class CreateTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本批次提交的任务的批次Id
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 任务Id集合，按照执行顺序排列
         * @type {Array.<string> || null}
         */
        this.TaskIdSet = null;

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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskIdSet = 'TaskIdSet' in params ? params.TaskIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNotebookSession返回参数结构体
 * @class
 */
class CreateNotebookSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Spark任务返回的AppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SparkAppId = null;

        /**
         * Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止）
         * @type {string || null}
         */
        this.State = null;

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
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SparkAppId = 'SparkAppId' in params ? params.SparkAppId : null;
        this.State = 'State' in params ? params.State : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSparkApp请求参数结构体
 * @class
 */
class CreateSparkAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * spark应用名
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 1代表spark jar应用，2代表spark streaming应用
         * @type {number || null}
         */
        this.AppType = null;

        /**
         * 执行spark作业的数据引擎
         * @type {string || null}
         */
        this.DataEngine = null;

        /**
         * spark应用的执行入口
         * @type {string || null}
         */
        this.AppFile = null;

        /**
         * 执行spark作业的角色ID
         * @type {number || null}
         */
        this.RoleArn = null;

        /**
         * spark作业driver资源规格大小, 可取small,medium,large,xlarge
         * @type {string || null}
         */
        this.AppDriverSize = null;

        /**
         * spark作业executor资源规格大小, 可取small,medium,large,xlarge
         * @type {string || null}
         */
        this.AppExecutorSize = null;

        /**
         * spark作业executor个数
         * @type {number || null}
         */
        this.AppExecutorNums = null;

        /**
         * 该字段已下线，请使用字段Datasource
         * @type {string || null}
         */
        this.Eni = null;

        /**
         * 是否本地上传，可去cos,lakefs
         * @type {string || null}
         */
        this.IsLocal = null;

        /**
         * spark jar作业时的主类
         * @type {string || null}
         */
        this.MainClass = null;

        /**
         * spark配置，以换行符分隔
         * @type {string || null}
         */
        this.AppConf = null;

        /**
         * 是否本地上传，包含cos,lakefs
         * @type {string || null}
         */
        this.IsLocalJars = null;

        /**
         * spark jar作业依赖jars，以逗号分隔
         * @type {string || null}
         */
        this.AppJars = null;

        /**
         * 是否本地上传，包含cos,lakefs
         * @type {string || null}
         */
        this.IsLocalFiles = null;

        /**
         * spark作业依赖资源，以逗号分隔
         * @type {string || null}
         */
        this.AppFiles = null;

        /**
         * spark作业命令行参数
         * @type {string || null}
         */
        this.CmdArgs = null;

        /**
         * 只对spark流任务生效
         * @type {number || null}
         */
        this.MaxRetries = null;

        /**
         * 数据源名
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * pyspark：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
         * @type {string || null}
         */
        this.IsLocalPythonFiles = null;

        /**
         * pyspark：python依赖, 除py文件外，还支持zip/egg等归档格式，多文件以逗号分隔
         * @type {string || null}
         */
        this.AppPythonFiles = null;

        /**
         * archives：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
         * @type {string || null}
         */
        this.IsLocalArchives = null;

        /**
         * archives：依赖资源
         * @type {string || null}
         */
        this.AppArchives = null;

        /**
         * Spark Image 版本
         * @type {string || null}
         */
        this.SparkImage = null;

        /**
         * Spark Image 版本名称
         * @type {string || null}
         */
        this.SparkImageVersion = null;

        /**
         * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums
         * @type {number || null}
         */
        this.AppExecutorMaxNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.DataEngine = 'DataEngine' in params ? params.DataEngine : null;
        this.AppFile = 'AppFile' in params ? params.AppFile : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.AppDriverSize = 'AppDriverSize' in params ? params.AppDriverSize : null;
        this.AppExecutorSize = 'AppExecutorSize' in params ? params.AppExecutorSize : null;
        this.AppExecutorNums = 'AppExecutorNums' in params ? params.AppExecutorNums : null;
        this.Eni = 'Eni' in params ? params.Eni : null;
        this.IsLocal = 'IsLocal' in params ? params.IsLocal : null;
        this.MainClass = 'MainClass' in params ? params.MainClass : null;
        this.AppConf = 'AppConf' in params ? params.AppConf : null;
        this.IsLocalJars = 'IsLocalJars' in params ? params.IsLocalJars : null;
        this.AppJars = 'AppJars' in params ? params.AppJars : null;
        this.IsLocalFiles = 'IsLocalFiles' in params ? params.IsLocalFiles : null;
        this.AppFiles = 'AppFiles' in params ? params.AppFiles : null;
        this.CmdArgs = 'CmdArgs' in params ? params.CmdArgs : null;
        this.MaxRetries = 'MaxRetries' in params ? params.MaxRetries : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.IsLocalPythonFiles = 'IsLocalPythonFiles' in params ? params.IsLocalPythonFiles : null;
        this.AppPythonFiles = 'AppPythonFiles' in params ? params.AppPythonFiles : null;
        this.IsLocalArchives = 'IsLocalArchives' in params ? params.IsLocalArchives : null;
        this.AppArchives = 'AppArchives' in params ? params.AppArchives : null;
        this.SparkImage = 'SparkImage' in params ? params.SparkImage : null;
        this.SparkImageVersion = 'SparkImageVersion' in params ? params.SparkImageVersion : null;
        this.AppExecutorMaxNumbers = 'AppExecutorMaxNumbers' in params ? params.AppExecutorMaxNumbers : null;

    }
}

/**
 * DescribeDataEngines请求参数结构体
 * @class
 */
class DescribeDataEnginesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 滤类型，传参Name应为以下其中一个,
data-engine-name - String 
engine-type - String
state - String 
mode - String 
create-time - String 
message - String
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
         * 返回数量，默认为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 已废弃，请使用DatasourceConnectionNameSet
         * @type {string || null}
         */
        this.DatasourceConnectionName = null;

        /**
         * 是否不返回共享引擎，true不返回共享引擎，false可以返回共享引擎
         * @type {boolean || null}
         */
        this.ExcludePublicEngine = null;

        /**
         * 参数应该为引擎权限类型，有效类型："USE", "MODIFY", "OPERATE", "MONITOR", "DELETE"
         * @type {Array.<string> || null}
         */
        this.AccessTypes = null;

        /**
         * 引擎执行任务类型，有效值：SQL/BATCH
         * @type {string || null}
         */
        this.EngineExecType = null;

        /**
         * 引擎类型，有效值：spark/presto
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * 网络配置列表，若传入该参数，则返回网络配置关联的计算引擎
         * @type {Array.<string> || null}
         */
        this.DatasourceConnectionNameSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.DatasourceConnectionName = 'DatasourceConnectionName' in params ? params.DatasourceConnectionName : null;
        this.ExcludePublicEngine = 'ExcludePublicEngine' in params ? params.ExcludePublicEngine : null;
        this.AccessTypes = 'AccessTypes' in params ? params.AccessTypes : null;
        this.EngineExecType = 'EngineExecType' in params ? params.EngineExecType : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.DatasourceConnectionNameSet = 'DatasourceConnectionNameSet' in params ? params.DatasourceConnectionNameSet : null;

    }
}

/**
 * DropDMSPartitions返回参数结构体
 * @class
 */
class DropDMSPartitionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态
         * @type {boolean || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AlterDMSDatabase返回参数结构体
 * @class
 */
class AlterDMSDatabaseResponse extends  AbstractModel {
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
 * CreateWorkGroup请求参数结构体
 * @class
 */
class CreateWorkGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作组名称
         * @type {string || null}
         */
        this.WorkGroupName = null;

        /**
         * 工作组描述
         * @type {string || null}
         */
        this.WorkGroupDescription = null;

        /**
         * 工作组绑定的鉴权策略集合
         * @type {Array.<Policy> || null}
         */
        this.PolicySet = null;

        /**
         * 需要绑定到工作组的用户Id集合
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkGroupName = 'WorkGroupName' in params ? params.WorkGroupName : null;
        this.WorkGroupDescription = 'WorkGroupDescription' in params ? params.WorkGroupDescription : null;

        if (params.PolicySet) {
            this.PolicySet = new Array();
            for (let z in params.PolicySet) {
                let obj = new Policy();
                obj.deserialize(params.PolicySet[z]);
                this.PolicySet.push(obj);
            }
        }
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * CreateInternalTable返回参数结构体
 * @class
 */
class CreateInternalTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建托管存储内表sql语句描述
         * @type {string || null}
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
        this.Execution = 'Execution' in params ? params.Execution : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DataEngine详细信息
 * @class
 */
class DataEngineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DataEngine名称
         * @type {string || null}
         */
        this.DataEngineName = null;

        /**
         * 引擎类型 spark/presto
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * 集群资源类型 spark_private/presto_private/presto_cu/spark_cu
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 引用ID
         * @type {string || null}
         */
        this.QuotaId = null;

        /**
         * 数据引擎状态  -2已删除 -1失败 0初始化中 1挂起 2运行中 3准备删除 4删除中
         * @type {number || null}
         */
        this.State = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 集群规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 计费模式 0共享模式 1按量计费 2包年包月
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 最小集群数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinClusters = null;

        /**
         * 最大集群数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxClusters = null;

        /**
         * 是否自动恢复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoResume = null;

        /**
         * 自动恢复时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SpendAfter = null;

        /**
         * 集群网段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 是否为默认引擎
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DefaultDataEngine = null;

        /**
         * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 引擎id
         * @type {string || null}
         */
        this.DataEngineId = null;

        /**
         * 操作者
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 隔离时间
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 冲正时间
         * @type {string || null}
         */
        this.ReversalTime = null;

        /**
         * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserAlias = null;

        /**
         * 标签对集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * 引擎拥有的权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

        /**
         * 是否自定挂起集群：false（默认）：不自动挂起、true：自动挂起
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoSuspend = null;

        /**
         * 定时启停集群策略：0（默认）：关闭定时策略、1：开启定时策略（注：定时启停策略与自动挂起策略互斥）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CrontabResumeSuspend = null;

        /**
         * 定时启停策略，复杂类型：包含启停时间、挂起集群策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CrontabResumeSuspendStrategy || null}
         */
        this.CrontabResumeSuspendStrategy = null;

        /**
         * 引擎执行任务类型，有效值：SQL/BATCH
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EngineExecType = null;

        /**
         * 自动续费标志，0，初始状态，默认不自动续费，若用户有预付费不停服特权，自动续费。1：自动续费。2：明确不自动续费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 集群自动挂起时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoSuspendTime = null;

        /**
         * 网络连接配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NetworkConnection> || null}
         */
        this.NetworkConnectionSet = null;

        /**
         * ui的跳转地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UiURL = null;

        /**
         * 引擎的资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 集群镜像版本ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageVersionId = null;

        /**
         * 集群镜像小版本ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChildImageVersionId = null;

        /**
         * 集群镜像版本名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageVersionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataEngineName = 'DataEngineName' in params ? params.DataEngineName : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.QuotaId = 'QuotaId' in params ? params.QuotaId : null;
        this.State = 'State' in params ? params.State : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.MinClusters = 'MinClusters' in params ? params.MinClusters : null;
        this.MaxClusters = 'MaxClusters' in params ? params.MaxClusters : null;
        this.AutoResume = 'AutoResume' in params ? params.AutoResume : null;
        this.SpendAfter = 'SpendAfter' in params ? params.SpendAfter : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.DefaultDataEngine = 'DefaultDataEngine' in params ? params.DefaultDataEngine : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.DataEngineId = 'DataEngineId' in params ? params.DataEngineId : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.ReversalTime = 'ReversalTime' in params ? params.ReversalTime : null;
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.AutoSuspend = 'AutoSuspend' in params ? params.AutoSuspend : null;
        this.CrontabResumeSuspend = 'CrontabResumeSuspend' in params ? params.CrontabResumeSuspend : null;

        if (params.CrontabResumeSuspendStrategy) {
            let obj = new CrontabResumeSuspendStrategy();
            obj.deserialize(params.CrontabResumeSuspendStrategy)
            this.CrontabResumeSuspendStrategy = obj;
        }
        this.EngineExecType = 'EngineExecType' in params ? params.EngineExecType : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.AutoSuspendTime = 'AutoSuspendTime' in params ? params.AutoSuspendTime : null;

        if (params.NetworkConnectionSet) {
            this.NetworkConnectionSet = new Array();
            for (let z in params.NetworkConnectionSet) {
                let obj = new NetworkConnection();
                obj.deserialize(params.NetworkConnectionSet[z]);
                this.NetworkConnectionSet.push(obj);
            }
        }
        this.UiURL = 'UiURL' in params ? params.UiURL : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ImageVersionId = 'ImageVersionId' in params ? params.ImageVersionId : null;
        this.ChildImageVersionId = 'ChildImageVersionId' in params ? params.ChildImageVersionId : null;
        this.ImageVersionName = 'ImageVersionName' in params ? params.ImageVersionName : null;

    }
}

/**
 * DescribeSparkAppTasks请求参数结构体
 * @class
 */
class DescribeSparkAppTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * spark作业Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 分页查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 执行实例id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 更新时间起始点
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 更新时间截止点
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 按照该参数过滤,支持task-state
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * LockMetaData返回参数结构体
 * @class
 */
class LockMetaDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 锁id
         * @type {number || null}
         */
        this.LockId = null;

        /**
         * 锁状态：ACQUIRED、WAITING、ABORT、NOT_ACQUIRED
         * @type {string || null}
         */
        this.LockState = null;

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
        this.LockId = 'LockId' in params ? params.LockId : null;
        this.LockState = 'LockState' in params ? params.LockState : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckLockMetaData返回参数结构体
 * @class
 */
class CheckLockMetaDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 锁ID
         * @type {number || null}
         */
        this.LockId = null;

        /**
         * 锁状态：ACQUIRED、WAITING、ABORT、NOT_ACQUIRED
         * @type {string || null}
         */
        this.LockState = null;

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
        this.LockId = 'LockId' in params ? params.LockId : null;
        this.LockState = 'LockState' in params ? params.LockState : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AlterDMSDatabase请求参数结构体
 * @class
 */
class AlterDMSDatabaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前名称
         * @type {string || null}
         */
        this.CurrentName = null;

        /**
         * schema名称
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 路径
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 基础对象
         * @type {Asset || null}
         */
        this.Asset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentName = 'CurrentName' in params ? params.CurrentName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.Location = 'Location' in params ? params.Location : null;

        if (params.Asset) {
            let obj = new Asset();
            obj.deserialize(params.Asset)
            this.Asset = obj;
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

        /**
         * 任务的配置信息
         * @type {Array.<KVPair> || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SQL = 'SQL' in params ? params.SQL : null;

        if (params.Config) {
            this.Config = new Array();
            for (let z in params.Config) {
                let obj = new KVPair();
                obj.deserialize(params.Config[z]);
                this.Config.push(obj);
            }
        }

    }
}

/**
 * 用户部分信息
 * @class
 */
class UserMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id，和CAM侧子用户Uin匹配
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserDescription = null;

        /**
         * 当前用户的创建者
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 当前用户的创建时间，形如2021-07-28 16:19:32
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 用户别名
         * @type {string || null}
         */
        this.UserAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserDescription = 'UserDescription' in params ? params.UserDescription : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;

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
 * CreateResultDownload请求参数结构体
 * @class
 */
class CreateResultDownloadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 下载格式
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 是否重新生成下载文件，仅当之前任务为 Timout | Error 时有效
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * CreateDMSDatabase请求参数结构体
 * @class
 */
class CreateDMSDatabaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础元数据对象
         * @type {Asset || null}
         */
        this.Asset = null;

        /**
         * Schema目录
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * Db存储路径
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Asset) {
            let obj = new Asset();
            obj.deserialize(params.Asset)
            this.Asset = obj;
        }
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DetachWorkGroupPolicy请求参数结构体
 * @class
 */
class DetachWorkGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作组Id
         * @type {number || null}
         */
        this.WorkGroupId = null;

        /**
         * 解绑的权限集合
         * @type {Array.<Policy> || null}
         */
        this.PolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkGroupId = 'WorkGroupId' in params ? params.WorkGroupId : null;

        if (params.PolicySet) {
            this.PolicySet = new Array();
            for (let z in params.PolicySet) {
                let obj = new Policy();
                obj.deserialize(params.PolicySet[z]);
                this.PolicySet.push(obj);
            }
        }

    }
}

/**
 * DescribeDMSTable请求参数结构体
 * @class
 */
class DescribeDMSTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 数据库schema名称
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据目录
         * @type {string || null}
         */
        this.Catalog = null;

        /**
         * 查询关键词
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 查询模式
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * 表类型
         * @type {string || null}
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
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Catalog = 'Catalog' in params ? params.Catalog : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ModifyGovernEventRule请求参数结构体
 * @class
 */
class ModifyGovernEventRuleRequest extends  AbstractModel {
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
 * CancelNotebookSessionStatementBatch请求参数结构体
 * @class
 */
class CancelNotebookSessionStatementBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session唯一标识
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 批任务唯一标识
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * DescribeDataEngines返回参数结构体
 * @class
 */
class DescribeDataEnginesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据引擎列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataEngineInfo> || null}
         */
        this.DataEngines = null;

        /**
         * 总条数
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

        if (params.DataEngines) {
            this.DataEngines = new Array();
            for (let z in params.DataEngines) {
                let obj = new DataEngineInfo();
                obj.deserialize(params.DataEngines[z]);
                this.DataEngines.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 允许针对数据库的属性元数据信息进行指定。
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

        /**
         * cos存储路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 建库用户昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserAlias = null;

        /**
         * 建库用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserSubUin = null;

        /**
         * 数据治理配置项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DataGovernPolicy || null}
         */
        this.GovernPolicy = null;

        /**
         * 数据库ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatabaseId = null;

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
        this.Location = 'Location' in params ? params.Location : null;
        this.UserAlias = 'UserAlias' in params ? params.UserAlias : null;
        this.UserSubUin = 'UserSubUin' in params ? params.UserSubUin : null;

        if (params.GovernPolicy) {
            let obj = new DataGovernPolicy();
            obj.deserialize(params.GovernPolicy)
            this.GovernPolicy = obj;
        }
        this.DatabaseId = 'DatabaseId' in params ? params.DatabaseId : null;

    }
}

/**
 * 迁移列对象
 * @class
 */
class DMSColumn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 排序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Position = null;

        /**
         * 附加参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.Params = null;

        /**
         * 业务参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KVPair> || null}
         */
        this.BizParams = null;

        /**
         * 是否分区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsPartition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Position = 'Position' in params ? params.Position : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new KVPair();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

        if (params.BizParams) {
            this.BizParams = new Array();
            for (let z in params.BizParams) {
                let obj = new KVPair();
                obj.deserialize(params.BizParams[z]);
                this.BizParams.push(obj);
            }
        }
        this.IsPartition = 'IsPartition' in params ? params.IsPartition : null;

    }
}

/**
 * 表字段描述信息
 * @class
 */
class TColumn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 字段描述
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 字段默认值
         * @type {string || null}
         */
        this.Default = null;

        /**
         * 字段是否是非空
         * @type {boolean || null}
         */
        this.NotNull = null;

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
        this.Default = 'Default' in params ? params.Default : null;
        this.NotNull = 'NotNull' in params ? params.NotNull : null;

    }
}

/**
 * DescribeResultDownload请求参数结构体
 * @class
 */
class DescribeResultDownloadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询任务Id
         * @type {string || null}
         */
        this.DownloadId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadId = 'DownloadId' in params ? params.DownloadId : null;

    }
}

module.exports = {
    DescribeResultDownloadResponse: DescribeResultDownloadResponse,
    DescribeTaskResultResponse: DescribeTaskResultResponse,
    DescribeNotebookSessionStatementRequest: DescribeNotebookSessionStatementRequest,
    CancelNotebookSessionStatementRequest: CancelNotebookSessionStatementRequest,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    WorkGroupMessage: WorkGroupMessage,
    DeleteUserRequest: DeleteUserRequest,
    ListTaskJobLogDetailResponse: ListTaskJobLogDetailResponse,
    Asset: Asset,
    CreateResultDownloadResponse: CreateResultDownloadResponse,
    ModifyGovernEventRuleResponse: ModifyGovernEventRuleResponse,
    DescribeNotebookSessionsRequest: DescribeNotebookSessionsRequest,
    CreateDMSDatabaseResponse: CreateDMSDatabaseResponse,
    CreateStoreLocationResponse: CreateStoreLocationResponse,
    DescribeNotebookSessionResponse: DescribeNotebookSessionResponse,
    DescribeDMSDatabaseResponse: DescribeDMSDatabaseResponse,
    UnbindWorkGroupsFromUserResponse: UnbindWorkGroupsFromUserResponse,
    DropDMSDatabaseRequest: DropDMSDatabaseRequest,
    CreateScriptResponse: CreateScriptResponse,
    CreateTasksInOrderResponse: CreateTasksInOrderResponse,
    DescribeTablesResponse: DescribeTablesResponse,
    SparkJobInfo: SparkJobInfo,
    SuspendResumeDataEngineResponse: SuspendResumeDataEngineResponse,
    DeleteSparkAppRequest: DeleteSparkAppRequest,
    ModifyUserResponse: ModifyUserResponse,
    DeleteScriptResponse: DeleteScriptResponse,
    TableInfo: TableInfo,
    Task: Task,
    DetachUserPolicyRequest: DetachUserPolicyRequest,
    CrontabResumeSuspendStrategy: CrontabResumeSuspendStrategy,
    AlterDMSTableResponse: AlterDMSTableResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    DescribeDMSTableResponse: DescribeDMSTableResponse,
    DropDMSPartitionsRequest: DropDMSPartitionsRequest,
    NotebookSessions: NotebookSessions,
    CreateNotebookSessionStatementSupportBatchSQLRequest: CreateNotebookSessionStatementSupportBatchSQLRequest,
    CreateTasksInOrderRequest: CreateTasksInOrderRequest,
    AddDMSPartitionsResponse: AddDMSPartitionsResponse,
    DetachWorkGroupPolicyResponse: DetachWorkGroupPolicyResponse,
    GenerateCreateMangedTableSqlRequest: GenerateCreateMangedTableSqlRequest,
    CSVSerde: CSVSerde,
    ModifySparkAppRequest: ModifySparkAppRequest,
    StreamingStatistics: StreamingStatistics,
    CreateDatabaseRequest: CreateDatabaseRequest,
    GenerateCreateMangedTableSqlResponse: GenerateCreateMangedTableSqlResponse,
    DescribeDMSTablesResponse: DescribeDMSTablesResponse,
    UserIdSetOfWorkGroupId: UserIdSetOfWorkGroupId,
    AlterDMSPartitionRequest: AlterDMSPartitionRequest,
    ViewBaseInfo: ViewBaseInfo,
    CheckLockMetaDataRequest: CheckLockMetaDataRequest,
    DescribeSparkAppJobRequest: DescribeSparkAppJobRequest,
    CreateDatabaseResponse: CreateDatabaseResponse,
    DescribeTasksRequest: DescribeTasksRequest,
    CreateSparkAppTaskRequest: CreateSparkAppTaskRequest,
    CancelNotebookSessionStatementBatchResponse: CancelNotebookSessionStatementBatchResponse,
    KVPair: KVPair,
    TableBaseInfo: TableBaseInfo,
    UnlockMetaDataRequest: UnlockMetaDataRequest,
    AttachUserPolicyRequest: AttachUserPolicyRequest,
    CreateInternalTableRequest: CreateInternalTableRequest,
    ListTaskJobLogDetailRequest: ListTaskJobLogDetailRequest,
    TasksInfo: TasksInfo,
    AttachWorkGroupPolicyRequest: AttachWorkGroupPolicyRequest,
    StatementOutput: StatementOutput,
    TagInfo: TagInfo,
    CreateUserResponse: CreateUserResponse,
    DescribeNotebookSessionStatementsRequest: DescribeNotebookSessionStatementsRequest,
    DeleteUserResponse: DeleteUserResponse,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    LockComponentInfo: LockComponentInfo,
    DescribeNotebookSessionsResponse: DescribeNotebookSessionsResponse,
    DescribeDMSPartitionsRequest: DescribeDMSPartitionsRequest,
    TPartition: TPartition,
    DescribeSparkAppJobsRequest: DescribeSparkAppJobsRequest,
    DeleteNotebookSessionRequest: DeleteNotebookSessionRequest,
    CreateDMSTableResponse: CreateDMSTableResponse,
    CreateNotebookSessionRequest: CreateNotebookSessionRequest,
    Partition: Partition,
    CreateTaskRequest: CreateTaskRequest,
    DescribeNotebookSessionRequest: DescribeNotebookSessionRequest,
    CSV: CSV,
    NotebookSessionStatementInfo: NotebookSessionStatementInfo,
    CreateTableRequest: CreateTableRequest,
    CreateNotebookSessionStatementRequest: CreateNotebookSessionStatementRequest,
    DescribeWorkGroupsResponse: DescribeWorkGroupsResponse,
    CreateImportTaskRequest: CreateImportTaskRequest,
    DescribeScriptsRequest: DescribeScriptsRequest,
    DescribeSparkAppJobResponse: DescribeSparkAppJobResponse,
    CreateExportTaskResponse: CreateExportTaskResponse,
    AddUsersToWorkGroupRequest: AddUsersToWorkGroupRequest,
    DescribeStoreLocationRequest: DescribeStoreLocationRequest,
    AddUsersToWorkGroupResponse: AddUsersToWorkGroupResponse,
    DescribeNotebookSessionLogRequest: DescribeNotebookSessionLogRequest,
    UserInfo: UserInfo,
    CreateExportTaskRequest: CreateExportTaskRequest,
    DescribeNotebookSessionStatementResponse: DescribeNotebookSessionStatementResponse,
    ReportHeartbeatMetaDataResponse: ReportHeartbeatMetaDataResponse,
    ReportHeartbeatMetaDataRequest: ReportHeartbeatMetaDataRequest,
    CreateDMSTableRequest: CreateDMSTableRequest,
    CancelNotebookSessionStatementResponse: CancelNotebookSessionStatementResponse,
    DMSTable: DMSTable,
    AttachWorkGroupPolicyResponse: AttachWorkGroupPolicyResponse,
    ModifyWorkGroupResponse: ModifyWorkGroupResponse,
    DescribeDMSTablesRequest: DescribeDMSTablesRequest,
    ModifyUserRequest: ModifyUserRequest,
    DMSSds: DMSSds,
    CreateSparkAppTaskResponse: CreateSparkAppTaskResponse,
    CancelTaskRequest: CancelTaskRequest,
    TaskResponseInfo: TaskResponseInfo,
    TextFile: TextFile,
    BindWorkGroupsToUserResponse: BindWorkGroupsToUserResponse,
    CreateNotebookSessionStatementResponse: CreateNotebookSessionStatementResponse,
    DescribeStoreLocationResponse: DescribeStoreLocationResponse,
    DeleteScriptRequest: DeleteScriptRequest,
    AddDMSPartitionsRequest: AddDMSPartitionsRequest,
    Script: Script,
    NotebookSessionStatementBatchInformation: NotebookSessionStatementBatchInformation,
    DescribeNotebookSessionStatementSqlResultRequest: DescribeNotebookSessionStatementSqlResultRequest,
    ModifySparkAppResponse: ModifySparkAppResponse,
    AlterDMSTableRequest: AlterDMSTableRequest,
    CreateImportTaskResponse: CreateImportTaskResponse,
    NotebookSessionInfo: NotebookSessionInfo,
    Execution: Execution,
    CreateTableResponse: CreateTableResponse,
    WorkGroupInfo: WorkGroupInfo,
    CreateNotebookSessionStatementSupportBatchSQLResponse: CreateNotebookSessionStatementSupportBatchSQLResponse,
    CreateScriptRequest: CreateScriptRequest,
    BindWorkGroupsToUserRequest: BindWorkGroupsToUserRequest,
    Column: Column,
    DeleteWorkGroupRequest: DeleteWorkGroupRequest,
    DescribeTaskResultRequest: DescribeTaskResultRequest,
    Filter: Filter,
    DescribeUsersResponse: DescribeUsersResponse,
    DataFormat: DataFormat,
    DescribeNotebookSessionLogResponse: DescribeNotebookSessionLogResponse,
    ViewResponseInfo: ViewResponseInfo,
    NetworkConnection: NetworkConnection,
    CreateUserRequest: CreateUserRequest,
    ModifyWorkGroupRequest: ModifyWorkGroupRequest,
    CancelTaskResponse: CancelTaskResponse,
    DataGovernPolicy: DataGovernPolicy,
    UnlockMetaDataResponse: UnlockMetaDataResponse,
    DeleteWorkGroupResponse: DeleteWorkGroupResponse,
    DropDMSTableResponse: DropDMSTableResponse,
    WorkGroupIdSetOfUserId: WorkGroupIdSetOfUserId,
    CreateWorkGroupResponse: CreateWorkGroupResponse,
    TaskResultInfo: TaskResultInfo,
    DescribeTablesRequest: DescribeTablesRequest,
    DeleteNotebookSessionResponse: DeleteNotebookSessionResponse,
    CreateStoreLocationRequest: CreateStoreLocationRequest,
    DMSTableInfo: DMSTableInfo,
    DescribeNotebookSessionStatementsResponse: DescribeNotebookSessionStatementsResponse,
    AttachUserPolicyResponse: AttachUserPolicyResponse,
    DropDMSTableRequest: DropDMSTableRequest,
    DescribeNotebookSessionStatementSqlResultResponse: DescribeNotebookSessionStatementSqlResultResponse,
    DMSPartition: DMSPartition,
    DatabaseInfo: DatabaseInfo,
    DescribeDMSPartitionsResponse: DescribeDMSPartitionsResponse,
    DeleteUsersFromWorkGroupResponse: DeleteUsersFromWorkGroupResponse,
    UnbindWorkGroupsFromUserRequest: UnbindWorkGroupsFromUserRequest,
    DescribeDMSDatabaseRequest: DescribeDMSDatabaseRequest,
    DescribeTableRequest: DescribeTableRequest,
    Policy: Policy,
    JobLogResult: JobLogResult,
    Other: Other,
    DropDMSDatabaseResponse: DropDMSDatabaseResponse,
    DescribeUsersRequest: DescribeUsersRequest,
    DeleteUsersFromWorkGroupRequest: DeleteUsersFromWorkGroupRequest,
    DMSColumnOrder: DMSColumnOrder,
    CreateSparkAppResponse: CreateSparkAppResponse,
    CreateTaskResponse: CreateTaskResponse,
    DeleteSparkAppResponse: DeleteSparkAppResponse,
    AlterDMSPartitionResponse: AlterDMSPartitionResponse,
    CreateTasksRequest: CreateTasksRequest,
    SuspendResumeDataEngineRequest: SuspendResumeDataEngineRequest,
    DescribeTableResponse: DescribeTableResponse,
    DescribeSparkAppJobsResponse: DescribeSparkAppJobsResponse,
    DescribeSparkAppTasksResponse: DescribeSparkAppTasksResponse,
    TableResponseInfo: TableResponseInfo,
    DescribeViewsRequest: DescribeViewsRequest,
    LockMetaDataRequest: LockMetaDataRequest,
    DetachUserPolicyResponse: DetachUserPolicyResponse,
    DescribeWorkGroupsRequest: DescribeWorkGroupsRequest,
    TasksOverview: TasksOverview,
    CreateTasksResponse: CreateTasksResponse,
    CreateNotebookSessionResponse: CreateNotebookSessionResponse,
    CreateSparkAppRequest: CreateSparkAppRequest,
    DescribeDataEnginesRequest: DescribeDataEnginesRequest,
    DropDMSPartitionsResponse: DropDMSPartitionsResponse,
    AlterDMSDatabaseResponse: AlterDMSDatabaseResponse,
    CreateWorkGroupRequest: CreateWorkGroupRequest,
    CreateInternalTableResponse: CreateInternalTableResponse,
    DataEngineInfo: DataEngineInfo,
    DescribeSparkAppTasksRequest: DescribeSparkAppTasksRequest,
    LockMetaDataResponse: LockMetaDataResponse,
    CheckLockMetaDataResponse: CheckLockMetaDataResponse,
    AlterDMSDatabaseRequest: AlterDMSDatabaseRequest,
    SQLTask: SQLTask,
    UserMessage: UserMessage,
    DescribeViewsResponse: DescribeViewsResponse,
    Property: Property,
    CreateResultDownloadRequest: CreateResultDownloadRequest,
    CreateDMSDatabaseRequest: CreateDMSDatabaseRequest,
    DetachWorkGroupPolicyRequest: DetachWorkGroupPolicyRequest,
    DescribeDMSTableRequest: DescribeDMSTableRequest,
    ModifyGovernEventRuleRequest: ModifyGovernEventRuleRequest,
    CancelNotebookSessionStatementBatchRequest: CancelNotebookSessionStatementBatchRequest,
    DescribeDataEnginesResponse: DescribeDataEnginesResponse,
    DescribeScriptsResponse: DescribeScriptsResponse,
    DatabaseResponseInfo: DatabaseResponseInfo,
    DMSColumn: DMSColumn,
    TColumn: TColumn,
    DescribeResultDownloadRequest: DescribeResultDownloadRequest,

}
