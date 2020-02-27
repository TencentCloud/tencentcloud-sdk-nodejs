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
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询任务所属的集群ID列表
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

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
         * 查询列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询列表返回记录数
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
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
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
         * 表所属集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待清理表信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

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
         * 指定查询的集群ID列表
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 查询过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询列表返回记录数，默认值20
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
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

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
         * @type {Array.<TableResultNew> || null}
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
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateBackup请求参数结构体
 * @class
 */
class CreateBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建备份表所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待创建备份表信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * 备注信息
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifyTableGroupName返回参数结构体
 * @class
 */
class ModifyTableGroupNameResponse extends  AbstractModel {
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
         * @type {Array.<TableResultNew> || null}
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
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterPassword返回参数结构体
 * @class
 */
class ModifyClusterPasswordResponse extends  AbstractModel {
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
 * DeleteCluster返回参数结构体
 * @class
 */
class DeleteClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除集群生成的任务ID
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
 * VerifyIdlFiles请求参数结构体
 * @class
 */
class VerifyIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建表格的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待创建表格的表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

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
 * ModifyClusterName请求参数结构体
 * @class
 */
class ModifyClusterNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改名称的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 需要修改的集群名称，可使用中文或英文字符，最大长度32个字符
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
         * @type {Array.<TableResultNew> || null}
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
                let obj = new TableResultNew();
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
         * 文件所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 文件所属表格组ID
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * 指定文件ID列表
         * @type {Array.<string> || null}
         */
        this.IdlFileIds = null;

        /**
         * 查询列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询列表返回记录数
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;
        this.IdlFileIds = 'IdlFileIds' in params ? params.IdlFileIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 表处理结果信息
 * @class
 */
class TableResultNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格实例ID，形如：tcaplus-3be64cbb
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
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表格数据结构类型，如：`GENERIC`或`LIST`
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
         * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

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
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

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
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
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
 * CreateTables请求参数结构体
 * @class
 */
class CreateTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建表格所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 用户选定的建表格IDL文件列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 待创建表格信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * 集群详细信息
 * @class
 */
class ClusterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 集群数据描述语言类型，如：`PROTO`,`TDR`或`MIX`
         * @type {string || null}
         */
        this.IdlType = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 集群关联的用户私有网络实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群关联的用户子网实例ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 集群密码
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
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
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
 * 从IDL表描述文件中解析出来的表信息
 * @class
 */
class ParsedTableInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格描述语言类型：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表格数据结构类型：`GENERIC`或`LIST`
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
         * 所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

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

        /**
         * LIST类型表格元素个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * SORTLIST类型表格排序字段个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SortFieldNum = null;

        /**
         * SORTLIST类型表格排序顺序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SortRule = null;

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
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
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
        this.ListElementNum = 'ListElementNum' in params ? params.ListElementNum : null;
        this.SortFieldNum = 'SortFieldNum' in params ? params.SortFieldNum : null;
        this.SortRule = 'SortRule' in params ? params.SortRule : null;

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
 * 表格详情信息
 * @class
 */
class TableInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表格实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表格数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 表格数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格所属集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格所属表格组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * 表格主键字段结构json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyStruct = null;

        /**
         * 表格非主键字段结构json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValueStruct = null;

        /**
         * 表格分表因子集合，对PROTO类型表格有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShardingKeySet = null;

        /**
         * 表格索引键字段集合，对PROTO类型表格有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexStruct = null;

        /**
         * LIST类型表格元素个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * 表格所关联IDL文件信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 表格预留容量（GB）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedVolume = null;

        /**
         * 表格预留读QPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedReadQps = null;

        /**
         * 表格预留写QPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedWriteQps = null;

        /**
         * 表格实际数据量大小（MB）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TableSize = null;

        /**
         * 表格状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 表格创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 表格最后一次修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 表格备注信息
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
         * TcaplusDB SDK数据访问接入ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiAccessId = null;

        /**
         * SORTLIST类型表格排序字段个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SortFieldNum = null;

        /**
         * SORTLIST类型表格排序顺序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SortRule = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
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
        this.SortFieldNum = 'SortFieldNum' in params ? params.SortFieldNum : null;
        this.SortRule = 'SortRule' in params ? params.SortRule : null;

    }
}

/**
 * 任务信息详情
 * @class
 */
class TaskInfoNew extends  AbstractModel {
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
         * 任务所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 任务所属集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Content = 'Content' in params ? params.Content : null;

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
         * 表格回档任务结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格回档任务结果列表
         * @type {Array.<TableRollbackResultNew> || null}
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
                let obj = new TableRollbackResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 表格数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格详情结果列表
         * @type {Array.<TableInfoNew> || null}
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
                let obj = new TableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTableGroups返回参数结构体
 * @class
 */
class DescribeTableGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格组信息列表
         * @type {Array.<TableGroupInfo> || null}
         */
        this.TableGroups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.TableGroups) {
            this.TableGroups = new Array();
            for (let z in params.TableGroups) {
                let obj = new TableGroupInfo();
                obj.deserialize(params.TableGroups[z]);
                this.TableGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * @type {Array.<TableResultNew> || null}
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
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * @type {Array.<TableResultNew> || null}
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
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 待回档表格所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待回档表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

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
         * IDL所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * DeleteTableGroup返回参数结构体
 * @class
 */
class DeleteTableGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除表格组所创建的任务ID
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
 * CreateBackup返回参数结构体
 * @class
 */
class CreateBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的备份任务ID列表
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表格回档结果信息
 * @class
 */
class TableRollbackResultNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格实例ID，形如：tcaplus-3be64cbb
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
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表格数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 表格数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

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
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

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
 * VerifyIdlFiles返回参数结构体
 * @class
 */
class VerifyIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次上传校验所有的IDL文件信息列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 读取IDL描述文件后解析出的合法表数量，不包含已经创建的表
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 读取IDL描述文件后解析出的合法表列表，不包含已经创建的表
         * @type {Array.<ParsedTableInfoNew> || null}
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
                let obj = new ParsedTableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 待删除的集群ID
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
 * DescribeTables返回参数结构体
 * @class
 */
class DescribeTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格详情结果列表
         * @type {Array.<TableInfoNew> || null}
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
                let obj = new TableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * RecoverRecycleTables请求参数结构体
 * @class
 */
class RecoverRecycleTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待恢复表信息
         * @type {Array.<SelectedTableInfoNew> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
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
         * @type {Array.<TaskInfoNew> || null}
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
                let obj = new TaskInfoNew();
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
         * 待删除表所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待删除表信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
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
 * CreateTableGroup返回参数结构体
 * @class
 */
class CreateTableGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功的表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTableGroupName请求参数结构体
 * @class
 */
class ModifyTableGroupNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组所属的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待修改名称的表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 新的大区名称，可以使用中英文字符和符号
         * @type {string || null}
         */
        this.TableGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;

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
 * DescribeTableGroups请求参数结构体
 * @class
 */
class DescribeTableGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格组ID列表
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * 过滤条件，本接口支持：TableGroupName，TableGroupId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询列表返回记录数
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

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
 * CompareIdlFiles请求参数结构体
 * @class
 */
class CompareIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改表格所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待修改表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
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
 * 被选中的表信息
 * @class
 */
class SelectedTableInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表实例ID
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表格描述语言类型：`PROTO`或`TDR`
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格数据结构类型：`GENERIC`或`LIST`
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * LIST表元素个数
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * 表格预留容量（GB）
         * @type {number || null}
         */
        this.ReservedVolume = null;

        /**
         * 表格预留读QPS
         * @type {number || null}
         */
        this.ReservedReadQps = null;

        /**
         * 表格预留写QPS
         * @type {number || null}
         */
        this.ReservedWriteQps = null;

        /**
         * 表格备注信息
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
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
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
 * ModifyClusterPassword请求参数结构体
 * @class
 */
class ModifyClusterPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改密码的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群旧密码
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * 集群旧密码预期失效时间
         * @type {string || null}
         */
        this.OldPasswordExpireTime = null;

        /**
         * 集群新密码，密码必须是a-zA-Z0-9的字符,且必须包含数字和大小写字母
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.OldPasswordExpireTime = 'OldPasswordExpireTime' in params ? params.OldPasswordExpireTime : null;
        this.NewPassword = 'NewPassword' in params ? params.NewPassword : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

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
         * 集群数据描述语言类型，如：`PROTO`，`TDR`或`MIX`
         * @type {string || null}
         */
        this.IdlType = null;

        /**
         * 集群名称，可使用中文或英文字符，最大长度32个字符
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群所绑定的私有网络实例ID，形如：vpc-f49l6u0z
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群所绑定的子网实例ID，形如：subnet-pxir56ns
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 集群访问密码，必须是a-zA-Z0-9的字符,且必须包含数字和大小写字母
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
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;

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
         * @type {Array.<TableResultNew> || null}
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
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 带扩缩容表所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 已选中待修改的表配额列表
         * @type {Array.<SelectedTableInfoNew> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.TableQuotas) {
            this.TableQuotas = new Array();
            for (let z in params.TableQuotas) {
                let obj = new SelectedTableInfoNew();
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
         * 本次上传校验所有的IDL文件信息列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 本次校验合法的表格数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 读取IDL描述文件后,根据用户指示的所选中表格解析校验结果
         * @type {Array.<ParsedTableInfoNew> || null}
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
                let obj = new ParsedTableInfoNew();
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
         * 待修改表格所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 选中的改表IDL文件
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 待改表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DeleteTableGroup请求参数结构体
 * @class
 */
class DeleteTableGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组所属的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

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
         * 批量创建表格结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 批量创建表格结果列表
         * @type {Array.<TableResultNew> || null}
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
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 待查询表格所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待查询表格所属表格组ID列表
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * 过滤条件，本接口支持：TableName，TableInstanceId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询结果偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询结果返回记录数量
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

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
 * DescribeTables请求参数结构体
 * @class
 */
class DescribeTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询表格所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待查询表格所属表格组ID列表
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * 待查询表格信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * 过滤条件，本接口支持：TableName，TableInstanceId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询结果偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询结果返回记录数量
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
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
 * DescribeClusters返回参数结构体
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群实例列表
         * @type {Array.<ClusterInfo> || null}
         */
        this.Clusters = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new ClusterInfo();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateTableGroup请求参数结构体
 * @class
 */
class CreateTableGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格组名称，可以采用中文、英文或数字字符，最大长度32个字符
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * 表格组ID，可以由用户指定，但在同一个集群内不能重复，如果不指定则采用自增的模式
         * @type {string || null}
         */
        this.TableGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

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
         * 表所属集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 选定表详情列表
         * @type {Array.<SelectedTableInfoNew> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.TableMemos) {
            this.TableMemos = new Array();
            for (let z in params.TableMemos) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.TableMemos[z]);
                this.TableMemos.push(obj);
            }
        }

    }
}

/**
 * 表格组详细信息
 * @class
 */
class TableGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格组名称
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * 表格组创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 表格组包含的表格数量
         * @type {number || null}
         */
        this.TableCount = null;

        /**
         * 表格组包含的表格存储总量（MB）
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
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.TableCount = 'TableCount' in params ? params.TableCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

module.exports = {
    DescribeUinInWhitelistResponse: DescribeUinInWhitelistResponse,
    DescribeTasksRequest: DescribeTasksRequest,
    IdlFileInfo: IdlFileInfo,
    ClearTablesRequest: ClearTablesRequest,
    DescribeClustersRequest: DescribeClustersRequest,
    ModifyTableQuotasResponse: ModifyTableQuotasResponse,
    DescribeIdlFileInfosResponse: DescribeIdlFileInfosResponse,
    ModifyAppNameRequest: ModifyAppNameRequest,
    CreateBackupRequest: CreateBackupRequest,
    ModifyTableGroupNameResponse: ModifyTableGroupNameResponse,
    RecoverRecycleTablesResponse: RecoverRecycleTablesResponse,
    ModifyClusterPasswordResponse: ModifyClusterPasswordResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    VerifyIdlFilesRequest: VerifyIdlFilesRequest,
    ModifyClusterNameRequest: ModifyClusterNameRequest,
    ClearTablesResponse: ClearTablesResponse,
    DescribeIdlFileInfosRequest: DescribeIdlFileInfosRequest,
    TableResultNew: TableResultNew,
    CreateClusterResponse: CreateClusterResponse,
    ErrorInfo: ErrorInfo,
    CreateTablesRequest: CreateTablesRequest,
    ClusterInfo: ClusterInfo,
    ParsedTableInfoNew: ParsedTableInfoNew,
    RegionInfo: RegionInfo,
    TableInfoNew: TableInfoNew,
    TaskInfoNew: TaskInfoNew,
    RollbackTablesResponse: RollbackTablesResponse,
    DescribeTablesInRecycleResponse: DescribeTablesInRecycleResponse,
    DescribeTableGroupsResponse: DescribeTableGroupsResponse,
    ModifyTablesResponse: ModifyTablesResponse,
    ModifyTableMemosResponse: ModifyTableMemosResponse,
    RollbackTablesRequest: RollbackTablesRequest,
    DeleteIdlFilesRequest: DeleteIdlFilesRequest,
    DeleteTableGroupResponse: DeleteTableGroupResponse,
    CreateBackupResponse: CreateBackupResponse,
    TableRollbackResultNew: TableRollbackResultNew,
    VerifyIdlFilesResponse: VerifyIdlFilesResponse,
    DeleteClusterRequest: DeleteClusterRequest,
    DescribeTablesResponse: DescribeTablesResponse,
    ModifyClusterNameResponse: ModifyClusterNameResponse,
    RecoverRecycleTablesRequest: RecoverRecycleTablesRequest,
    DescribeTasksResponse: DescribeTasksResponse,
    DeleteTablesRequest: DeleteTablesRequest,
    DescribeUinInWhitelistRequest: DescribeUinInWhitelistRequest,
    CreateTableGroupResponse: CreateTableGroupResponse,
    ModifyTableGroupNameRequest: ModifyTableGroupNameRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DescribeTableGroupsRequest: DescribeTableGroupsRequest,
    CompareIdlFilesRequest: CompareIdlFilesRequest,
    SelectedTableInfoNew: SelectedTableInfoNew,
    IdlFileInfoWithoutContent: IdlFileInfoWithoutContent,
    ModifyClusterPasswordRequest: ModifyClusterPasswordRequest,
    CreateClusterRequest: CreateClusterRequest,
    Filter: Filter,
    DeleteTablesResponse: DeleteTablesResponse,
    ModifyTableQuotasRequest: ModifyTableQuotasRequest,
    CompareIdlFilesResponse: CompareIdlFilesResponse,
    ModifyTablesRequest: ModifyTablesRequest,
    DeleteTableGroupRequest: DeleteTableGroupRequest,
    CreateTablesResponse: CreateTablesResponse,
    DescribeTablesInRecycleRequest: DescribeTablesInRecycleRequest,
    DescribeTablesRequest: DescribeTablesRequest,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    ModifyAppNameResponse: ModifyAppNameResponse,
    DeleteIdlFilesResponse: DeleteIdlFilesResponse,
    CreateTableGroupRequest: CreateTableGroupRequest,
    ModifyTableMemosRequest: ModifyTableMemosRequest,
    TableGroupInfo: TableGroupInfo,

}
