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
 * 用户自定义模板Patched参数
 * @class
 */
class UserDefinedTemplatePatchedParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板图标地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Icon = null;

        /**
         * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 模板标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
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
        this.Source = 'Source' in params ? params.Source : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Icon = 'Icon' in params ? params.Icon : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * 工作空间基本信息描述
 * @class
 */
class WorkspaceInfoDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间创建时间
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 空间key
         * @type {string || null}
         */
        this.SpaceKey = null;

        /**
         * 工作空间id
         * @type {number || null}
         */
        this.WorkspaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;
        this.WorkspaceId = 'WorkspaceId' in params ? params.WorkspaceId : null;

    }
}

/**
 * RecoverWorkspace返回参数结构体
 * @class
 */
class RecoverWorkspaceResponse extends  AbstractModel {
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
 * DescribeWorkspaceStatus请求参数结构体
 * @class
 */
class DescribeWorkspaceStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 空间标识
         * @type {string || null}
         */
        this.SpaceKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;

    }
}

/**
 * CreateCustomizeTemplates请求参数结构体
 * @class
 */
class CreateCustomizeTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 无
         * @type {UserDefinedTemplateParams || null}
         */
        this.UserDefinedTemplateParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;

        if (params.UserDefinedTemplateParams) {
            let obj = new UserDefinedTemplateParams();
            obj.deserialize(params.UserDefinedTemplateParams)
            this.UserDefinedTemplateParams = obj;
        }

    }
}

/**
 * RecoverWorkspace请求参数结构体
 * @class
 */
class RecoverWorkspaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 无
         * @type {string || null}
         */
        this.SpaceKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;

    }
}

/**
 * DescribeCustomizeTemplatesById请求参数结构体
 * @class
 */
class DescribeCustomizeTemplatesByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 模板ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * CreateWorkspaceByVersionControl请求参数结构体
 * @class
 */
class CreateWorkspaceByVersionControlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间结构
         * @type {WorkspaceDTO || null}
         */
        this.WorkspaceDTO = null;

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WorkspaceDTO) {
            let obj = new WorkspaceDTO();
            obj.deserialize(params.WorkspaceDTO)
            this.WorkspaceDTO = obj;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;

    }
}

/**
 * ModifyCustomizeTemplateVersionControl请求参数结构体
 * @class
 */
class ModifyCustomizeTemplateVersionControlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 模板ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 仓库地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 代码仓库分支/标签
         * @type {string || null}
         */
        this.Ref = null;

        /**
         * 代码仓库 ref 类型
         * @type {string || null}
         */
        this.RefType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Ref = 'Ref' in params ? params.Ref : null;
        this.RefType = 'RefType' in params ? params.RefType : null;

    }
}

/**
 * 工作空间资源结构
 * @class
 */
class WorkspaceResourceDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU核心数
         * @type {number || null}
         */
        this.CpuCoreNumber = null;

        /**
         * 一般内存
         * @type {number || null}
         */
        this.NormalMemory = null;

        /**
         * 系统存储
         * @type {number || null}
         */
        this.SystemStorage = null;

        /**
         * 用户存储
         * @type {number || null}
         */
        this.UserStorage = null;

        /**
         * GPU数
         * @type {number || null}
         */
        this.GpuNumber = null;

        /**
         * GPU内存
         * @type {number || null}
         */
        this.GpuMemory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CpuCoreNumber = 'CpuCoreNumber' in params ? params.CpuCoreNumber : null;
        this.NormalMemory = 'NormalMemory' in params ? params.NormalMemory : null;
        this.SystemStorage = 'SystemStorage' in params ? params.SystemStorage : null;
        this.UserStorage = 'UserStorage' in params ? params.UserStorage : null;
        this.GpuNumber = 'GpuNumber' in params ? params.GpuNumber : null;
        this.GpuMemory = 'GpuMemory' in params ? params.GpuMemory : null;

    }
}

/**
 * CreateCustomizeTemplates返回参数结构体
 * @class
 */
class CreateCustomizeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkspaceTemplateInfo || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceTemplateInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取工作空间临时访问 token 出参
 * @class
 */
class WorkspaceTokenInfoV0 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问工作空间临时凭证
         * @type {string || null}
         */
        this.Token = null;

        /**
         * token 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpiredTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;

    }
}

/**
 * 可用镜像模板列表
 * @class
 */
class ImageUserDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像模板ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 镜像模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tag时间
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 中文描述
         * @type {string || null}
         */
        this.DescriptionCN = null;

        /**
         * 图标地址
         * @type {string || null}
         */
        this.IconUrl = null;

        /**
         * 创建人
         * @type {string || null}
         */
        this.Author = null;

        /**
         * 访问状态
         * @type {string || null}
         */
        this.Visible = null;

        /**
         * 版本
         * @type {number || null}
         */
        this.WorkspaceVersion = null;

        /**
         * 分类
         * @type {number || null}
         */
        this.Sort = null;

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
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DescriptionCN = 'DescriptionCN' in params ? params.DescriptionCN : null;
        this.IconUrl = 'IconUrl' in params ? params.IconUrl : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.Visible = 'Visible' in params ? params.Visible : null;
        this.WorkspaceVersion = 'WorkspaceVersion' in params ? params.WorkspaceVersion : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * RunWorkspace请求参数结构体
 * @class
 */
class RunWorkspaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 空间标识
         * @type {string || null}
         */
        this.SpaceKey = null;

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;

    }
}

/**
 * DescribeWorkspaceStatus返回参数结构体
 * @class
 */
class DescribeWorkspaceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkspaceStatusInfo || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceStatusInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWorkspaceByAgent请求参数结构体
 * @class
 */
class CreateWorkspaceByAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 无
         * @type {AgentSpaceDTO || null}
         */
        this.AgentSpaceDTO = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;

        if (params.AgentSpaceDTO) {
            let obj = new AgentSpaceDTO();
            obj.deserialize(params.AgentSpaceDTO)
            this.AgentSpaceDTO = obj;
        }

    }
}

/**
 * DeleteCustomizeTemplatesById请求参数结构体
 * @class
 */
class DeleteCustomizeTemplatesByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 模板ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * StopWorkspace请求参数结构体
 * @class
 */
class StopWorkspaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 空间标识
         * @type {string || null}
         */
        this.SpaceKey = null;

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 是否强制终止，true或者false
         * @type {string || null}
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
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DescribeWorkspaceEnvList返回参数结构体
 * @class
 */
class DescribeWorkspaceEnvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageUserDTO> || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ImageUserDTO();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用户空间共享信息
 * @class
 */
class WorkspaceShareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 共享或不共享状态
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 是否与我共享
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.WithMe = null;

        /**
         * 开始共享的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 停止共享的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 停止共享的时间
         * @type {Array.<UserInfoRsp> || null}
         */
        this.Users = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.WithMe = 'WithMe' in params ? params.WithMe : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new UserInfoRsp();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }

    }
}

/**
 * 工作空间模板信息
 * @class
 */
class WorkspaceTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 模板分类
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 中文描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DescriptionEN = null;

        /**
         * 模板标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tags = null;

        /**
         * 模板图标地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Icon = null;

        /**
         * 默认仓库类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlType = null;

        /**
         * 默认仓库地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlUrl = null;

        /**
         * 默认仓库描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlDesc = null;

        /**
         * 默认仓库所属人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlOwner = null;

        /**
         * 默认仓库引用地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlRef = null;

        /**
         * 默认仓库引用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlRefType = null;

        /**
         * 用户自定义仓库地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserVersionControlUrl = null;

        /**
         * 用户自定义仓库类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserVersionControlType = null;

        /**
         * 用户自定义仓库引用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserVersionControlRef = null;

        /**
         * 用户自定义仓库引用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserVersionControlRefType = null;

        /**
         * xxx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DevFile = null;

        /**
         * xxx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PluginFile = null;

        /**
         * xxx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrebuildFile = null;

        /**
         * 是否标记
         * @type {boolean || null}
         */
        this.Marked = null;

        /**
         * 标记状态
         * @type {number || null}
         */
        this.MarkAt = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModified = null;

        /**
         * 编号
         * @type {number || null}
         */
        this.Sort = null;

        /**
         * xxx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SnapshotUid = null;

        /**
         * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * 用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Author = null;

        /**
         * 是否属于当前用户
         * @type {boolean || null}
         */
        this.Me = null;

        /**
         * xxx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthorAvatar = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DescriptionEN = 'DescriptionEN' in params ? params.DescriptionEN : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Icon = 'Icon' in params ? params.Icon : null;
        this.VersionControlType = 'VersionControlType' in params ? params.VersionControlType : null;
        this.VersionControlUrl = 'VersionControlUrl' in params ? params.VersionControlUrl : null;
        this.VersionControlDesc = 'VersionControlDesc' in params ? params.VersionControlDesc : null;
        this.VersionControlOwner = 'VersionControlOwner' in params ? params.VersionControlOwner : null;
        this.VersionControlRef = 'VersionControlRef' in params ? params.VersionControlRef : null;
        this.VersionControlRefType = 'VersionControlRefType' in params ? params.VersionControlRefType : null;
        this.UserVersionControlUrl = 'UserVersionControlUrl' in params ? params.UserVersionControlUrl : null;
        this.UserVersionControlType = 'UserVersionControlType' in params ? params.UserVersionControlType : null;
        this.UserVersionControlRef = 'UserVersionControlRef' in params ? params.UserVersionControlRef : null;
        this.UserVersionControlRefType = 'UserVersionControlRefType' in params ? params.UserVersionControlRefType : null;
        this.DevFile = 'DevFile' in params ? params.DevFile : null;
        this.PluginFile = 'PluginFile' in params ? params.PluginFile : null;
        this.PrebuildFile = 'PrebuildFile' in params ? params.PrebuildFile : null;
        this.Marked = 'Marked' in params ? params.Marked : null;
        this.MarkAt = 'MarkAt' in params ? params.MarkAt : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.LastModified = 'LastModified' in params ? params.LastModified : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.SnapshotUid = 'SnapshotUid' in params ? params.SnapshotUid : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.Me = 'Me' in params ? params.Me : null;
        this.AuthorAvatar = 'AuthorAvatar' in params ? params.AuthorAvatar : null;

    }
}

/**
 * 用户验证信息
 * @class
 */
class UserSubInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 团队名称
         * @type {string || null}
         */
        this.Team = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 昵称
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 是否为管理员
         * @type {boolean || null}
         */
        this.IsAdmin = null;

        /**
         * xxx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsTrial = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Team = 'Team' in params ? params.Team : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.IsAdmin = 'IsAdmin' in params ? params.IsAdmin : null;
        this.IsTrial = 'IsTrial' in params ? params.IsTrial : null;

    }
}

/**
 * DescribeWorkspaceStatusList返回参数结构体
 * @class
 */
class DescribeWorkspaceStatusListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * xxx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WorkspaceStatusInfo> || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new WorkspaceStatusInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCustomizeTemplatesFullById请求参数结构体
 * @class
 */
class ModifyCustomizeTemplatesFullByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 模板ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 自定义模板参数
         * @type {UserDefinedTemplateParams || null}
         */
        this.UserDefinedTemplateParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.UserDefinedTemplateParams) {
            let obj = new UserDefinedTemplateParams();
            obj.deserialize(params.UserDefinedTemplateParams)
            this.UserDefinedTemplateParams = obj;
        }

    }
}

/**
 * ModifyCustomizeTemplateVersionControl返回参数结构体
 * @class
 */
class ModifyCustomizeTemplateVersionControlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkspaceTemplateInfo || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceTemplateInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用户信息
 * @class
 */
class UserInfoRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 用户验证信息
         * @type {UserSubInfo || null}
         */
        this.AuthenticationUserInfo = null;

        /**
         * 头像地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Avatar = null;

        /**
         * 介绍
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Features = null;

        /**
         * 状况
         * @type {number || null}
         */
        this.PreviewStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.AuthenticationUserInfo) {
            let obj = new UserSubInfo();
            obj.deserialize(params.AuthenticationUserInfo)
            this.AuthenticationUserInfo = obj;
        }
        this.Avatar = 'Avatar' in params ? params.Avatar : null;
        this.Features = 'Features' in params ? params.Features : null;
        this.PreviewStatus = 'PreviewStatus' in params ? params.PreviewStatus : null;

    }
}

/**
 * DescribeWorkspaceEnvList请求参数结构体
 * @class
 */
class DescribeWorkspaceEnvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;

    }
}

/**
 * ModifyWorkspaceAttributes返回参数结构体
 * @class
 */
class ModifyWorkspaceAttributesResponse extends  AbstractModel {
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
 * 获取用户工作空间返回信息
 * @class
 */
class WorkspaceStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 空间ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 空间名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 所属人
         * @type {UserInfoRsp || null}
         */
        this.Owner = null;

        /**
         * 空间标识
         * @type {string || null}
         */
        this.SpaceKey = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 最后操作时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastOpsDate = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 共享状态
         * @type {WorkspaceShareInfo || null}
         */
        this.Share = null;

        /**
         * 空间类型
         * @type {string || null}
         */
        this.WorkspaceType = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 空间版本
         * @type {number || null}
         */
        this.WorkspaceVersion = null;

        /**
         * 图标地址
         * @type {string || null}
         */
        this.ImageIcon = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 版本控制地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlUrl = null;

        /**
         * 版本控制描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlDesc = null;

        /**
         * 版本控制引用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlRef = null;

        /**
         * 版本控制引用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlRefType = null;

        /**
         * 版本控制类型
         * @type {string || null}
         */
        this.VersionControlType = null;

        /**
         * 模板ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 快照ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SnapshotUid = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecDesc = null;

        /**
         * CPU数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Memory = null;

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

        if (params.Owner) {
            let obj = new UserInfoRsp();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.LastOpsDate = 'LastOpsDate' in params ? params.LastOpsDate : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Share) {
            let obj = new WorkspaceShareInfo();
            obj.deserialize(params.Share)
            this.Share = obj;
        }
        this.WorkspaceType = 'WorkspaceType' in params ? params.WorkspaceType : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.WorkspaceVersion = 'WorkspaceVersion' in params ? params.WorkspaceVersion : null;
        this.ImageIcon = 'ImageIcon' in params ? params.ImageIcon : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.VersionControlUrl = 'VersionControlUrl' in params ? params.VersionControlUrl : null;
        this.VersionControlDesc = 'VersionControlDesc' in params ? params.VersionControlDesc : null;
        this.VersionControlRef = 'VersionControlRef' in params ? params.VersionControlRef : null;
        this.VersionControlRefType = 'VersionControlRefType' in params ? params.VersionControlRefType : null;
        this.VersionControlType = 'VersionControlType' in params ? params.VersionControlType : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.SnapshotUid = 'SnapshotUid' in params ? params.SnapshotUid : null;
        this.SpecDesc = 'SpecDesc' in params ? params.SpecDesc : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;

    }
}

/**
 * DescribeCustomizeTemplatesPresets请求参数结构体
 * @class
 */
class DescribeCustomizeTemplatesPresetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 空间标识
         * @type {string || null}
         */
        this.SpaceKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;

    }
}

/**
 * StopWorkspace返回参数结构体
 * @class
 */
class StopWorkspaceResponse extends  AbstractModel {
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
 * DescribeWorkspaceNameExist请求参数结构体
 * @class
 */
class DescribeWorkspaceNameExistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 工作空间名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 工作空间ID
         * @type {string || null}
         */
        this.WorkspaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.WorkspaceId = 'WorkspaceId' in params ? params.WorkspaceId : null;

    }
}

/**
 * DescribeWorkspaceStatusList请求参数结构体
 * @class
 */
class DescribeWorkspaceStatusListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * xxx
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;

    }
}

/**
 * RemoveWorkspace请求参数结构体
 * @class
 */
class RemoveWorkspaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 无
         * @type {string || null}
         */
        this.SpaceKey = null;

        /**
         * 是否强制，true或者false
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
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DescribeCustomizeTemplates请求参数结构体
 * @class
 */
class DescribeCustomizeTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;

    }
}

/**
 * 模板的预置参数
 * @class
 */
class CustomizeTemplatesPresetsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板tag列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 模板图标列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Icons = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UserDefinedTemplateParams || null}
         */
        this.Templates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Icons = 'Icons' in params ? params.Icons : null;

        if (params.Templates) {
            let obj = new UserDefinedTemplateParams();
            obj.deserialize(params.Templates)
            this.Templates = obj;
        }

    }
}

/**
 * RunWorkspace返回参数结构体
 * @class
 */
class RunWorkspaceResponse extends  AbstractModel {
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
 * DescribeCustomizeTemplatesById返回参数结构体
 * @class
 */
class DescribeCustomizeTemplatesByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkspaceTemplateInfo || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceTemplateInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWorkspaceNameExist返回参数结构体
 * @class
 */
class DescribeWorkspaceNameExistResponse extends  AbstractModel {
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
 * CreateWorkspaceByTemplate返回参数结构体
 * @class
 */
class CreateWorkspaceByTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建工作空间返回的信息
         * @type {WorkspaceInfo || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWorkspaceByAgent返回参数结构体
 * @class
 */
class CreateWorkspaceByAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkspaceInfoDTO || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceInfoDTO();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveWorkspace返回参数结构体
 * @class
 */
class RemoveWorkspaceResponse extends  AbstractModel {
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
 * CreateWorkspaceTemporaryToken请求参数结构体
 * @class
 */
class CreateWorkspaceTemporaryTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建工作空间凭证 DTO
         * @type {WorkspaceTokenDTO || null}
         */
        this.WorkspaceTokenDTO = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WorkspaceTokenDTO) {
            let obj = new WorkspaceTokenDTO();
            obj.deserialize(params.WorkspaceTokenDTO)
            this.WorkspaceTokenDTO = obj;
        }

    }
}

/**
 * 工作空间结构
 * @class
 */
class WorkspaceDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 代码来源类型
         * @type {string || null}
         */
        this.VersionControlType = null;

        /**
         * 镜像id
         * @type {number || null}
         */
        this.ImageId = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 工作空间版本
         * @type {number || null}
         */
        this.WorkspaceVersion = null;

        /**
         * 工作空间资源结构
         * @type {WorkspaceResourceDTO || null}
         */
        this.WorkspaceResourceDTO = null;

        /**
         * 代码仓库地址
         * @type {string || null}
         */
        this.VersionControlUrl = null;

        /**
         * 代码Ref是分支还是标签
         * @type {string || null}
         */
        this.VersionControlRef = null;

        /**
         * 代码Ref地址
         * @type {string || null}
         */
        this.VersionControlRefType = null;

        /**
         * 快照Uid
         * @type {string || null}
         */
        this.SnapshotUid = null;

        /**
         * 模板id
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 价格id
         * @type {number || null}
         */
        this.PriceId = null;

        /**
         * 初始化状态
         * @type {number || null}
         */
        this.InitializeStatus = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.VersionControlDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.VersionControlType = 'VersionControlType' in params ? params.VersionControlType : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.WorkspaceVersion = 'WorkspaceVersion' in params ? params.WorkspaceVersion : null;

        if (params.WorkspaceResourceDTO) {
            let obj = new WorkspaceResourceDTO();
            obj.deserialize(params.WorkspaceResourceDTO)
            this.WorkspaceResourceDTO = obj;
        }
        this.VersionControlUrl = 'VersionControlUrl' in params ? params.VersionControlUrl : null;
        this.VersionControlRef = 'VersionControlRef' in params ? params.VersionControlRef : null;
        this.VersionControlRefType = 'VersionControlRefType' in params ? params.VersionControlRefType : null;
        this.SnapshotUid = 'SnapshotUid' in params ? params.SnapshotUid : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.PriceId = 'PriceId' in params ? params.PriceId : null;
        this.InitializeStatus = 'InitializeStatus' in params ? params.InitializeStatus : null;
        this.VersionControlDesc = 'VersionControlDesc' in params ? params.VersionControlDesc : null;

    }
}

/**
 * ModifyCustomizeTemplatesFullById返回参数结构体
 * @class
 */
class ModifyCustomizeTemplatesFullByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义模板返回值
         * @type {WorkspaceTemplateInfo || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceTemplateInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomizeTemplates返回参数结构体
 * @class
 */
class DescribeCustomizeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WorkspaceTemplateInfo> || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new WorkspaceTemplateInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWorkspaceByVersionControl返回参数结构体
 * @class
 */
class CreateWorkspaceByVersionControlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkspaceInfoDTO || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceInfoDTO();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCustomizeTemplatesPartById请求参数结构体
 * @class
 */
class ModifyCustomizeTemplatesPartByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 模板ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 自定义模板Patched参数
         * @type {UserDefinedTemplatePatchedParams || null}
         */
        this.UserDefinedTemplatePatchedParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.UserDefinedTemplatePatchedParams) {
            let obj = new UserDefinedTemplatePatchedParams();
            obj.deserialize(params.UserDefinedTemplatePatchedParams)
            this.UserDefinedTemplatePatchedParams = obj;
        }

    }
}

/**
 * 创建临时工作空间凭证 DTO
 * @class
 */
class WorkspaceTokenDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间 SpaceKey
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpaceKey = null;

        /**
         * token过期时间，单位是秒，默认 3600
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TokenExpiredLimitSec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;
        this.TokenExpiredLimitSec = 'TokenExpiredLimitSec' in params ? params.TokenExpiredLimitSec : null;

    }
}

/**
 * 用户自定义模板参数
 * @class
 */
class UserDefinedTemplateParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板图标地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Icon = null;

        /**
         * 模板标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 模板来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 模板仓库类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlType = null;

        /**
         * 模板地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionControlUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Icon = 'Icon' in params ? params.Icon : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VersionControlType = 'VersionControlType' in params ? params.VersionControlType : null;
        this.VersionControlUrl = 'VersionControlUrl' in params ? params.VersionControlUrl : null;

    }
}

/**
 * DeleteCustomizeTemplatesById返回参数结构体
 * @class
 */
class DeleteCustomizeTemplatesByIdResponse extends  AbstractModel {
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
 * 工作空间信息
 * @class
 */
class WorkspaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WorkspaceId = null;

        /**
         * 工作空间标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpaceKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkspaceId = 'WorkspaceId' in params ? params.WorkspaceId : null;
        this.SpaceKey = 'SpaceKey' in params ? params.SpaceKey : null;

    }
}

/**
 * CreateWorkspaceTemporaryToken返回参数结构体
 * @class
 */
class CreateWorkspaceTemporaryTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间临时访问 token 信息
         * @type {WorkspaceTokenInfoV0 || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceTokenInfoV0();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云服务器创建工作空间 DTO
 * @class
 */
class AgentSpaceDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作空间名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 镜像id
         * @type {number || null}
         */
        this.ImageId = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 云服务器登录名称
         * @type {string || null}
         */
        this.RemoteUser = null;

        /**
         * 云服务器登录地址
         * @type {string || null}
         */
        this.RemoteHost = null;

        /**
         * 云服务器登录端口
         * @type {string || null}
         */
        this.RemotePort = null;

        /**
         * 工作空间类型
         * @type {string || null}
         */
        this.WorkspaceType = null;

        /**
         * 工作空间版本
         * @type {number || null}
         */
        this.WorkspaceVersion = null;

        /**
         * 工作空间资源结构
         * @type {WorkspaceResourceDTO || null}
         */
        this.WorkspaceResourceDTO = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.RemoteUser = 'RemoteUser' in params ? params.RemoteUser : null;
        this.RemoteHost = 'RemoteHost' in params ? params.RemoteHost : null;
        this.RemotePort = 'RemotePort' in params ? params.RemotePort : null;
        this.WorkspaceType = 'WorkspaceType' in params ? params.WorkspaceType : null;
        this.WorkspaceVersion = 'WorkspaceVersion' in params ? params.WorkspaceVersion : null;

        if (params.WorkspaceResourceDTO) {
            let obj = new WorkspaceResourceDTO();
            obj.deserialize(params.WorkspaceResourceDTO)
            this.WorkspaceResourceDTO = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeCustomizeTemplatesPresets返回参数结构体
 * @class
 */
class DescribeCustomizeTemplatesPresetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CustomizeTemplatesPresetsInfo || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new CustomizeTemplatesPresetsInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWorkspaceByTemplate请求参数结构体
 * @class
 */
class CreateWorkspaceByTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 模板ID
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * ModifyCustomizeTemplatesPartById返回参数结构体
 * @class
 */
class ModifyCustomizeTemplatesPartByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义模板返回值
         * @type {WorkspaceTemplateInfo || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new WorkspaceTemplateInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyWorkspaceAttributes请求参数结构体
 * @class
 */
class ModifyWorkspaceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属组
         * @type {string || null}
         */
        this.CloudStudioSessionTeam = null;

        /**
         * 工作空间ID
         * @type {number || null}
         */
        this.WorkspaceId = null;

        /**
         * 工作空间名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 工作空间描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * xxx
         * @type {number || null}
         */
        this.PriceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloudStudioSessionTeam = 'CloudStudioSessionTeam' in params ? params.CloudStudioSessionTeam : null;
        this.WorkspaceId = 'WorkspaceId' in params ? params.WorkspaceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PriceId = 'PriceId' in params ? params.PriceId : null;

    }
}

module.exports = {
    UserDefinedTemplatePatchedParams: UserDefinedTemplatePatchedParams,
    WorkspaceInfoDTO: WorkspaceInfoDTO,
    RecoverWorkspaceResponse: RecoverWorkspaceResponse,
    DescribeWorkspaceStatusRequest: DescribeWorkspaceStatusRequest,
    CreateCustomizeTemplatesRequest: CreateCustomizeTemplatesRequest,
    RecoverWorkspaceRequest: RecoverWorkspaceRequest,
    DescribeCustomizeTemplatesByIdRequest: DescribeCustomizeTemplatesByIdRequest,
    CreateWorkspaceByVersionControlRequest: CreateWorkspaceByVersionControlRequest,
    ModifyCustomizeTemplateVersionControlRequest: ModifyCustomizeTemplateVersionControlRequest,
    WorkspaceResourceDTO: WorkspaceResourceDTO,
    CreateCustomizeTemplatesResponse: CreateCustomizeTemplatesResponse,
    WorkspaceTokenInfoV0: WorkspaceTokenInfoV0,
    ImageUserDTO: ImageUserDTO,
    RunWorkspaceRequest: RunWorkspaceRequest,
    DescribeWorkspaceStatusResponse: DescribeWorkspaceStatusResponse,
    CreateWorkspaceByAgentRequest: CreateWorkspaceByAgentRequest,
    DeleteCustomizeTemplatesByIdRequest: DeleteCustomizeTemplatesByIdRequest,
    StopWorkspaceRequest: StopWorkspaceRequest,
    DescribeWorkspaceEnvListResponse: DescribeWorkspaceEnvListResponse,
    WorkspaceShareInfo: WorkspaceShareInfo,
    WorkspaceTemplateInfo: WorkspaceTemplateInfo,
    UserSubInfo: UserSubInfo,
    DescribeWorkspaceStatusListResponse: DescribeWorkspaceStatusListResponse,
    ModifyCustomizeTemplatesFullByIdRequest: ModifyCustomizeTemplatesFullByIdRequest,
    ModifyCustomizeTemplateVersionControlResponse: ModifyCustomizeTemplateVersionControlResponse,
    UserInfoRsp: UserInfoRsp,
    DescribeWorkspaceEnvListRequest: DescribeWorkspaceEnvListRequest,
    ModifyWorkspaceAttributesResponse: ModifyWorkspaceAttributesResponse,
    WorkspaceStatusInfo: WorkspaceStatusInfo,
    DescribeCustomizeTemplatesPresetsRequest: DescribeCustomizeTemplatesPresetsRequest,
    StopWorkspaceResponse: StopWorkspaceResponse,
    DescribeWorkspaceNameExistRequest: DescribeWorkspaceNameExistRequest,
    DescribeWorkspaceStatusListRequest: DescribeWorkspaceStatusListRequest,
    RemoveWorkspaceRequest: RemoveWorkspaceRequest,
    DescribeCustomizeTemplatesRequest: DescribeCustomizeTemplatesRequest,
    CustomizeTemplatesPresetsInfo: CustomizeTemplatesPresetsInfo,
    RunWorkspaceResponse: RunWorkspaceResponse,
    DescribeCustomizeTemplatesByIdResponse: DescribeCustomizeTemplatesByIdResponse,
    DescribeWorkspaceNameExistResponse: DescribeWorkspaceNameExistResponse,
    CreateWorkspaceByTemplateResponse: CreateWorkspaceByTemplateResponse,
    CreateWorkspaceByAgentResponse: CreateWorkspaceByAgentResponse,
    RemoveWorkspaceResponse: RemoveWorkspaceResponse,
    CreateWorkspaceTemporaryTokenRequest: CreateWorkspaceTemporaryTokenRequest,
    WorkspaceDTO: WorkspaceDTO,
    ModifyCustomizeTemplatesFullByIdResponse: ModifyCustomizeTemplatesFullByIdResponse,
    DescribeCustomizeTemplatesResponse: DescribeCustomizeTemplatesResponse,
    CreateWorkspaceByVersionControlResponse: CreateWorkspaceByVersionControlResponse,
    ModifyCustomizeTemplatesPartByIdRequest: ModifyCustomizeTemplatesPartByIdRequest,
    WorkspaceTokenDTO: WorkspaceTokenDTO,
    UserDefinedTemplateParams: UserDefinedTemplateParams,
    DeleteCustomizeTemplatesByIdResponse: DeleteCustomizeTemplatesByIdResponse,
    WorkspaceInfo: WorkspaceInfo,
    CreateWorkspaceTemporaryTokenResponse: CreateWorkspaceTemporaryTokenResponse,
    AgentSpaceDTO: AgentSpaceDTO,
    DescribeCustomizeTemplatesPresetsResponse: DescribeCustomizeTemplatesPresetsResponse,
    CreateWorkspaceByTemplateRequest: CreateWorkspaceByTemplateRequest,
    ModifyCustomizeTemplatesPartByIdResponse: ModifyCustomizeTemplatesPartByIdResponse,
    ModifyWorkspaceAttributesRequest: ModifyWorkspaceAttributesRequest,

}
