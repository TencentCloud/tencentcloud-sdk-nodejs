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
 * DescribeOrgNode返回参数结构体
 * @class
 */
class DescribeOrgNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点展示名称，长度限制：64个字符。 默认与机构名相同。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 机构节点最后修改时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * 机构节点外部ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomizedOrgNodeId = null;

        /**
         * 当前机构节点的父节点ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParentOrgNodeId = null;

        /**
         * 机构节点ID，是机构节点的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * 机构节点创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedDate = null;

        /**
         * 当前机构节点下的子节点列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgNodeChildInfo> || null}
         */
        this.OrgNodeChildInfo = null;

        /**
         * 机构节点描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.CustomizedOrgNodeId = 'CustomizedOrgNodeId' in params ? params.CustomizedOrgNodeId : null;
        this.ParentOrgNodeId = 'ParentOrgNodeId' in params ? params.ParentOrgNodeId : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

        if (params.OrgNodeChildInfo) {
            this.OrgNodeChildInfo = new Array();
            for (let z in params.OrgNodeChildInfo) {
                let obj = new OrgNodeChildInfo();
                obj.deserialize(params.OrgNodeChildInfo[z]);
                this.OrgNodeChildInfo.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListApplications请求参数结构体
 * @class
 */
class ListApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模糊匹配搜索条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（""）表示全匹配、以星号（* ) 结尾表示字段部分匹配。模糊匹配搜索功能与精准匹配查询不会同时生效，如果SearchCondition与ApplicationIdList均不为空，则默认以ApplicationIdList进行精准查询。如果SearchCondition字段与ApplicationIdList字段均为空，则默认返回全部的应用信息。
         * @type {ApplicationInfoSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 排序条件集合。可排序的属性支持：应用名字（DisplayName）、创建时间（CreatedDate）、上次修改时间（LastModifiedDate）。如果该字段为空，则默认按照应用名字正向排序。
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * 排序条件集合。可排序的属性支持：应用名字（DisplayName）、创建时间（CreatedDate）、上次修改时间（LastModifiedDate）。如果该字段为空，则默认按照应用名字正向排序。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页读取数量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 应用ID列表，通过应用ID列表精准匹配对应的应用信息。模糊匹配搜索功能与精准匹配查询不会同时生效，如果SearchCondition与ApplicationIdList均不为空，则默认以ApplicationIdList进行精准查询。如果SearchCondition字段与ApplicationIdList字段均为空，则默认返回全部的应用信息。
         * @type {Array.<string> || null}
         */
        this.ApplicationIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SearchCondition) {
            let obj = new ApplicationInfoSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ApplicationIdList = 'ApplicationIdList' in params ? params.ApplicationIdList : null;

    }
}

/**
 * 用户属性搜索条件。
 * @class
 */
class UserSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名，长度限制：64个字符。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户手机号。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户邮箱。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 用户创建时间，遵循 ISO 8601 标准。
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 用户上次更新时间区间。
         * @type {string || null}
         */
        this.LastUpdateTime = null;

        /**
         * 名称匹配搜索，匹配范围包括：用户名称、用户ID。
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * AddAccountToAccountGroup返回参数结构体
 * @class
 */
class AddAccountToAccountGroupResponse extends  AbstractModel {
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
 * DeleteUser请求参数结构体
 * @class
 */
class DeleteUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名，长度限制：32个字符。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户 id。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * 返回符合条件的用户数据列表
 * @class
 */
class AuthorizationUserResouceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 授权资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 继承关系
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InheritedForm || null}
         */
        this.InheritedForm = null;

        /**
         * 应用账户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ApplicationAccounts = null;

        /**
         * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.InheritedForm) {
            let obj = new InheritedForm();
            obj.deserialize(params.InheritedForm)
            this.InheritedForm = obj;
        }
        this.ApplicationAccounts = 'ApplicationAccounts' in params ? params.ApplicationAccounts : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;

    }
}

/**
 * CreateAppAccount返回参数结构体
 * @class
 */
class CreateAppAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAuthorizedApplicationsToUserGroup请求参数结构体
 * @class
 */
class ListAuthorizedApplicationsToUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 Id 。
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * ModifyApplication返回参数结构体
 * @class
 */
class ModifyApplicationResponse extends  AbstractModel {
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
 * 机构子节点下的用户信息列表
 * @class
 */
class OrgNodeChildUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构ID，是机构节点全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserInfo> || null}
         */
        this.UserInfo = null;

        /**
         * 当前机构节点下的用户总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalUserNum = null;

        /**
         * 组织机构ID路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeIdPath = null;

        /**
         * 组织机构名称路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeNamePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new UserInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.TotalUserNum = 'TotalUserNum' in params ? params.TotalUserNum : null;
        this.OrgNodeIdPath = 'OrgNodeIdPath' in params ? params.OrgNodeIdPath : null;
        this.OrgNodeNamePath = 'OrgNodeNamePath' in params ? params.OrgNodeNamePath : null;

    }
}

/**
 * DeleteAccountGroup请求参数结构体
 * @class
 */
class DeleteAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号组ID数组。
         * @type {Array.<string> || null}
         */
        this.AccountGroupIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupIdList = 'AccountGroupIdList' in params ? params.AccountGroupIdList : null;

    }
}

/**
 * AddUserToUserGroup请求参数结构体
 * @class
 */
class AddUserToUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加入用户组的用户ID列表。
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * 用户组ID，是用户组的全局唯一标识。
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * 应用信息列表。
 * @class
 */
class ApplicationInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，是应用的全局唯一标识。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用展示名称，长度限制：64个字符。 默认与应用名字相同。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 应用创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedDate = null;

        /**
         * 上次更新时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * 应用状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AppStatus = null;

        /**
         * 应用图标。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Icon = null;

        /**
         * 应用类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 客户端id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.AppStatus = 'AppStatus' in params ? params.AppStatus : null;
        this.Icon = 'Icon' in params ? params.Icon : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;

    }
}

/**
 * ListUsers返回参数结构体
 * @class
 */
class ListUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询返回的相关用户列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

        /**
         * 返回查询用户的总数量，仅当入参IncludeTotal等于true时返回。
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

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new UserInformation();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAppAccount请求参数结构体
 * @class
 */
class DeleteAppAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号ID数组。
         * @type {Array.<string> || null}
         */
        this.AccountIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountIdList = 'AccountIdList' in params ? params.AccountIdList : null;

    }
}

/**
 * 返回的用户组列表。
 * @class
 */
class UserGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 昵称，长度限制：64个字符。 默认与用户名相同。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 用户组ID，是用户组全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 用户组备注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

    }
}

/**
 * UpdateOrgNode请求参数结构体
 * @class
 */
class UpdateOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点ID，是机构节点的全局唯一标识。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 机构节点名称，长度限制：64个字符。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 机构节点描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 机构代码。如果非空则校验此ID的唯一性。
         * @type {string || null}
         */
        this.CustomizedOrgNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CustomizedOrgNodeId = 'CustomizedOrgNodeId' in params ? params.CustomizedOrgNodeId : null;

    }
}

/**
 * CreateOrgNode请求参数结构体
 * @class
 */
class CreateOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点名称，长度限制：64个字符。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 父机构节点ID，如果为空则默认创建在机构根节点下。
         * @type {string || null}
         */
        this.ParentOrgNodeId = null;

        /**
         * 机构节点描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 机构代码。如果为空，则默认生成机构代码。如果为非空，则校验机构代码的唯一性。
         * @type {string || null}
         */
        this.CustomizedOrgNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.ParentOrgNodeId = 'ParentOrgNodeId' in params ? params.ParentOrgNodeId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CustomizedOrgNodeId = 'CustomizedOrgNodeId' in params ? params.CustomizedOrgNodeId : null;

    }
}

/**
 * RemoveUserFromUserGroup请求参数结构体
 * @class
 */
class RemoveUserFromUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要加入用户组的用户ID列表。
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * 用户组ID，是用户组的全局唯一标识。
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * ModifyAppAccount请求参数结构体
 * @class
 */
class ModifyAppAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号ID。
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 账号名称。未传入该参数时，表示不进行修改。
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 账号密码。未传入该参数时，表示不进行修改。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 描述，未传入该参数时，表示不进行修改。
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
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListAuthorizedApplicationsToUserGroup返回参数结构体
 * @class
 */
class ListAuthorizedApplicationsToUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组拥有访问权限的应用 id 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ApplicationIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationIds = 'ApplicationIds' in params ? params.ApplicationIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccountGroup返回参数结构体
 * @class
 */
class DeleteAccountGroupResponse extends  AbstractModel {
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
 * 用户组属性搜索条件。
 * @class
 */
class UserGroupInfoSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称匹配搜索，匹配范围包括：用户组名称、用户组ID。
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DescribeUserInfo请求参数结构体
 * @class
 */
class DescribeUserInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名，长度限制：64个字符。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户 id，长度限制：64个字符。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * ListAuthorizedApplicationsToOrgNode请求参数结构体
 * @class
 */
class ListAuthorizedApplicationsToOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点 Id 。
         * @type {string || null}
         */
        this.OrgNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;

    }
}

/**
 * DescribePublicKey返回参数结构体
 * @class
 */
class DescribePublicKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * jwt验证签名所用的公钥信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * jwt的密钥id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 应用ID，是应用的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrgNode请求参数结构体
 * @class
 */
class DescribeOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点ID，是机构节点全局唯一标识，长度限制：64个字符。如果为空默认读取机构根节点信息。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 是否读取其子节点信息。当其为空或false时，默认仅读取当前机构节点信息。当其为true时，读取本机构节点以及其第一层子节点信息。
         * @type {boolean || null}
         */
        this.IncludeOrgNodeChildInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.IncludeOrgNodeChildInfo = 'IncludeOrgNodeChildInfo' in params ? params.IncludeOrgNodeChildInfo : null;

    }
}

/**
 * CreateAccountGroup请求参数结构体
 * @class
 */
class CreateAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 账号组名。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 描述。
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeUserGroup请求参数结构体
 * @class
 */
class DescribeUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID，是用户组的全局唯一标识。
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * CreateOrgNode返回参数结构体
 * @class
 */
class CreateOrgNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点ID，是机构节点的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取用户所在的用户组列表功能中用户组属性搜索条件。
 * @class
 */
class UserGroupInformationSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称匹配搜索，匹配范围包括：用户组名称。
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * 授权资源详情
 * @class
 */
class AuthorizationResourceEntityInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权关系的唯一ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源授权类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 授权的资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;

    }
}

/**
 * 账号组查询参数
 * @class
 */
class AccountGroupSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键字
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

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
         * 返回的新创建的用户ID，是该用户的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 三方账号信息。
 * @class
 */
class ThirdPartyAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方账号代码。"2"代表企业微信。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountCode = null;

        /**
         * 账号对应的用户名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountCode = 'AccountCode' in params ? params.AccountCode : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;

    }
}

/**
 * ModifyAppAccount返回参数结构体
 * @class
 */
class ModifyAppAccountResponse extends  AbstractModel {
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
 * ListUsersInUserGroup返回参数结构体
 * @class
 */
class ListUsersInUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID，是用户组的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 返回的用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserInfo> || null}
         */
        this.UserInfo = null;

        /**
         * 返回的用户信息总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new UserInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAppAccount请求参数结构体
 * @class
 */
class CreateAppAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 账号名称
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 账号密码
         * @type {string || null}
         */
        this.Password = null;

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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeApplication返回参数结构体
 * @class
 */
class DescribeApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 应用展示名称，长度限制：64个字符。 默认与应用名字相同。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 应用最后修改时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * 客户端id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * 应用类型，即创建应用时所选择的应用模板类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 应用创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedDate = null;

        /**
         * 应用id，是应用的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 令牌有效时间，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TokenExpired = null;

        /**
         * 客户端secret。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientSecret = null;

        /**
         * 公钥信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * 授权地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthorizeUrl = null;

        /**
         * 应用图标图片访问地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IconUrl = null;

        /**
         * 安全等级。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecureLevel = null;

        /**
         * 应用状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AppStatus = null;

        /**
         * 描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.TokenExpired = 'TokenExpired' in params ? params.TokenExpired : null;
        this.ClientSecret = 'ClientSecret' in params ? params.ClientSecret : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.AuthorizeUrl = 'AuthorizeUrl' in params ? params.AuthorizeUrl : null;
        this.IconUrl = 'IconUrl' in params ? params.IconUrl : null;
        this.SecureLevel = 'SecureLevel' in params ? params.SecureLevel : null;
        this.AppStatus = 'AppStatus' in params ? params.AppStatus : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAppAccount返回参数结构体
 * @class
 */
class DescribeAppAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回查询的总记录数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 应用ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 返回符合条件的数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AppAccountInfo> || null}
         */
        this.AppAccountList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.AppAccountList) {
            this.AppAccountList = new Array();
            for (let z in params.AppAccountList) {
                let obj = new AppAccountInfo();
                obj.deserialize(params.AppAccountList[z]);
                this.AppAccountList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserGroupResourcesAuthorization返回参数结构体
 * @class
 */
class DescribeUserGroupResourcesAuthorizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 用户组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 用户组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserGroupName = null;

        /**
         * 资源列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuthorizationResourceEntityInfo> || null}
         */
        this.AuthorizationUserGroupResourceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.UserGroupName = 'UserGroupName' in params ? params.UserGroupName : null;

        if (params.AuthorizationUserGroupResourceList) {
            this.AuthorizationUserGroupResourceList = new Array();
            for (let z in params.AuthorizationUserGroupResourceList) {
                let obj = new AuthorizationResourceEntityInfo();
                obj.deserialize(params.AuthorizationUserGroupResourceList[z]);
                this.AuthorizationUserGroupResourceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 返回的用户组列表。
 * @class
 */
class UserGroupInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID。
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 用户组名称。
         * @type {string || null}
         */
        this.UserGroupName = null;

        /**
         * 上次更新时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModifiedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.UserGroupName = 'UserGroupName' in params ? params.UserGroupName : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;

    }
}

/**
 * 展示机构下用户的属性搜索条件。
 * @class
 */
class ListUsersInOrgNodeSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名，长度限制：64个字符。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户手机号。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户邮箱。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 用户创建时间，遵循 ISO 8601 标准。
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 用户上次更新时间。
         * @type {string || null}
         */
        this.LastUpdateTime = null;

        /**
         * 名称匹配搜索，匹配范围包括：用户名称、用户手机号。
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DescribeAccountGroup返回参数结构体
 * @class
 */
class DescribeAccountGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回查询的总记录数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 应用ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 返回符合条件的数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AccountGroupInfo> || null}
         */
        this.AccountGroupList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.AccountGroupList) {
            this.AccountGroupList = new Array();
            for (let z in params.AccountGroupList) {
                let obj = new AccountGroupInfo();
                obj.deserialize(params.AccountGroupList[z]);
                this.AccountGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUserGroup请求参数结构体
 * @class
 */
class CreateUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组昵称，长度限制：64个字符。 DisplayName是唯一的。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 用户组备注，长度限制：512个字符。
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
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeOrgResourcesAuthorization请求参数结构体
 * @class
 */
class DescribeOrgResourcesAuthorizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 机构ID
         * @type {string || null}
         */
        this.OrgNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;

    }
}

/**
 * DescribeUserInfo返回参数结构体
 * @class
 */
class DescribeUserInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 昵称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 用户备注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用户所属用户组 id 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * 用户 id，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户邮箱。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户手机号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户所属的主组织机构唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * 用户过期时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpirationTime = null;

        /**
         * 用户激活时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActivationTime = null;

        /**
         * 当前用户的密码是否需要重置，该字段为false表示不需要重置密码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.PwdNeedReset = null;

        /**
         * 用户所属的次要组织机构ID列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecondaryOrgNodeIdList = null;

        /**
         * 是否管理员标志，0为否、1为是。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AdminFlag = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.ExpirationTime = 'ExpirationTime' in params ? params.ExpirationTime : null;
        this.ActivationTime = 'ActivationTime' in params ? params.ActivationTime : null;
        this.PwdNeedReset = 'PwdNeedReset' in params ? params.PwdNeedReset : null;
        this.SecondaryOrgNodeIdList = 'SecondaryOrgNodeIdList' in params ? params.SecondaryOrgNodeIdList : null;
        this.AdminFlag = 'AdminFlag' in params ? params.AdminFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOrgNode请求参数结构体
 * @class
 */
class DeleteOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点ID，是机构节点的全局唯一标识。
         * @type {string || null}
         */
        this.OrgNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;

    }
}

/**
 * DeleteUsers返回参数结构体
 * @class
 */
class DeleteUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未被成功删除的用户信息。当业务参数为DeleteIdList时，本字段将返回未成功删除的用户ID列表。当业务参数为DeleteNameList时，本字段将返回未成功删除的用户名称列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedItems = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedItems = 'FailedItems' in params ? params.FailedItems : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询账号信息列表。
 * @class
 */
class AppAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号ID。
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 账号名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LinkUserInfo> || null}
         */
        this.UserList = null;

        /**
         * 描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new LinkUserInfo();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

    }
}

/**
 * DescribeAccountGroup请求参数结构体
 * @class
 */
class DescribeAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配。如果该字段为空，则默认查全量表。
         * @type {AccountGroupSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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

        if (params.SearchCondition) {
            let obj = new AccountGroupSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 账号查询参数
 * @class
 */
class AppAccountSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键字
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DescribeOrgResourcesAuthorization返回参数结构体
 * @class
 */
class DescribeOrgResourcesAuthorizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 授权机构ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 机构名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeName = null;

        /**
         * 机构目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodePath = null;

        /**
         * 资源列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuthorizationResourceEntityInfo> || null}
         */
        this.AuthorizationOrgResourceList = null;

        /**
         * 资源数量
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.OrgNodeName = 'OrgNodeName' in params ? params.OrgNodeName : null;
        this.OrgNodePath = 'OrgNodePath' in params ? params.OrgNodePath : null;

        if (params.AuthorizationOrgResourceList) {
            this.AuthorizationOrgResourceList = new Array();
            for (let z in params.AuthorizationOrgResourceList) {
                let obj = new AuthorizationResourceEntityInfo();
                obj.deserialize(params.AuthorizationOrgResourceList[z]);
                this.AuthorizationOrgResourceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUsersInUserGroup请求参数结构体
 * @class
 */
class ListUsersInUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID，是用户组的全局唯一标识。
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 用户属性搜索条件，可查询条件包括：用户名、手机号码，邮箱、用户锁定状态、用户冻结状态、创建时间、上次修改时间，支持多种属性组合作为查询条件。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（）结尾表示字段部分匹配、中括号以逗号分隔（[Min，Max]）表示闭区间查询、大括号以逗号分隔（{Min，Max}）表示开区间查询，中括号与大括号可以配合使用（例如：{Min，Max]表示最小值开区间，最大值闭区间查询）。范围匹配支持使用星号（例如{20,]表示查询范围为大于20的所有数据）。范围查询同时支持时间段查询，支持的属性包括创建时间 （CreationTime）、上次修改时间（LastUpdateTime），查询的时间格式遵循 ISO 8601 标准，例如：2021-01-13T09:44:07.182+0000。
         * @type {UserSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 排序条件集合。可排序的属性支持：用户名字（UserName）、用户昵称（DisplayName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、创建时间 （CreatedDate）、上次更新时间（LastModifiedDate）。如果不指定，则默认按照用户昵称（DisplayName）正向排序。
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。
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
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

        if (params.SearchCondition) {
            let obj = new UserSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 用户信息列表。
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID，是用户全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 昵称，长度限制：64个字符。 默认与用户名相同。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 用户名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户手机号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 邮箱地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;

    }
}

/**
 * DeleteAppAccount返回参数结构体
 * @class
 */
class DeleteAppAccountResponse extends  AbstractModel {
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
 * ModifyAccountGroup请求参数结构体
 * @class
 */
class ModifyAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号组ID。
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * 账号组名。未传入该参数时，表示不进行修改。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 描述，未传入该参数时，表示不进行修改。
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
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListUsersInOrgNode返回参数结构体
 * @class
 */
class ListUsersInOrgNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构子节点下的用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgNodeChildUserInfo> || null}
         */
        this.OrgNodeChildUserInfo = null;

        /**
         * 机构ID，是机构节点全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserInfo> || null}
         */
        this.UserInfo = null;

        /**
         * 当前机构节点下的用户总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalUserNum = null;

        /**
         * 组织机构ID路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeIdPath = null;

        /**
         * 组织机构名称路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeNamePath = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OrgNodeChildUserInfo) {
            this.OrgNodeChildUserInfo = new Array();
            for (let z in params.OrgNodeChildUserInfo) {
                let obj = new OrgNodeChildUserInfo();
                obj.deserialize(params.OrgNodeChildUserInfo[z]);
                this.OrgNodeChildUserInfo.push(obj);
            }
        }
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new UserInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.TotalUserNum = 'TotalUserNum' in params ? params.TotalUserNum : null;
        this.OrgNodeIdPath = 'OrgNodeIdPath' in params ? params.OrgNodeIdPath : null;
        this.OrgNodeNamePath = 'OrgNodeNamePath' in params ? params.OrgNodeNamePath : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListApplicationAuthorizations请求参数结构体
 * @class
 */
class ListApplicationAuthorizationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询类型，包含用户（User）、用户组（UserGroup）、组织机构（OrgNode）。
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（""）表示全匹配、以星号（* ) 结尾表示字段部分匹配。如果该字段为空，则默认查全量表。
         * @type {AuthorizationInfoSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 排序条件集合。可排序的属性支持：上次修改时间（lastModifiedDate）。如果该字段为空，则默认按照应用名称正向排序。
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * 分页偏移量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页读取数量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
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
        this.EntityType = 'EntityType' in params ? params.EntityType : null;

        if (params.SearchCondition) {
            let obj = new AuthorizationInfoSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyAccountGroup返回参数结构体
 * @class
 */
class ModifyAccountGroupResponse extends  AbstractModel {
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
 * DeleteUsers请求参数结构体
 * @class
 */
class DeleteUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被删除用户的ID列表。DeleteIdList 和 DeleteNameList 需至少一个不为空；都不为空时优先使用 DeleteNameList。
         * @type {Array.<string> || null}
         */
        this.DeleteIdList = null;

        /**
         * 被删除用户的名称列表。DeleteIdList 和 DeleteNameList 需至少一个不为空；都不为空时优先使用 DeleteNameList。
         * @type {Array.<string> || null}
         */
        this.DeleteNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeleteIdList = 'DeleteIdList' in params ? params.DeleteIdList : null;
        this.DeleteNameList = 'DeleteNameList' in params ? params.DeleteNameList : null;

    }
}

/**
 * 查询账号组信息列表。
 * @class
 */
class AccountGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号组ID。
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * 账号组名。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 备注。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

    }
}

/**
 * 当前机构节点下的子节点列表
 * @class
 */
class OrgNodeChildInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点展示名称，长度限制：64个字符。 默认与机构名相同。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 机构节点最后修改时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * 用户自定义可选填的机构节点对外ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomizedOrgNodeId = null;

        /**
         * 当前机构节点的父节点ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParentOrgNodeId = null;

        /**
         * 机构节点ID，是机构节点的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * 机构节点创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedDate = null;

        /**
         * 机构节点描述。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.CustomizedOrgNodeId = 'CustomizedOrgNodeId' in params ? params.CustomizedOrgNodeId : null;
        this.ParentOrgNodeId = 'ParentOrgNodeId' in params ? params.ParentOrgNodeId : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListAuthorizedApplicationsToUser请求参数结构体
 * @class
 */
class ListAuthorizedApplicationsToUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户 ID。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 查询范围是否包括用户关联的用户组、组织机构的应用访问权限。默认为不查询 。传false表示不查询该范围，传true表示应用查询该范围。
         * @type {boolean || null}
         */
        this.IncludeInheritedAuthorizations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IncludeInheritedAuthorizations = 'IncludeInheritedAuthorizations' in params ? params.IncludeInheritedAuthorizations : null;

    }
}

/**
 * DeleteOrgNode返回参数结构体
 * @class
 */
class DeleteOrgNodeResponse extends  AbstractModel {
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
 * ListAccountInAccountGroup返回参数结构体
 * @class
 */
class ListAccountInAccountGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询返回的相关账号列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AppAccountInfo> || null}
         */
        this.AccountList = null;

        /**
         * 返回查询账号的总数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 账号组ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccountList) {
            this.AccountList = new Array();
            for (let z in params.AccountList) {
                let obj = new AppAccountInfo();
                obj.deserialize(params.AccountList[z]);
                this.AccountList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserResourcesAuthorization返回参数结构体
 * @class
 */
class DescribeUserResourcesAuthorizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的唯一ID。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用账户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ApplicationAccounts = null;

        /**
         * 授权用户的唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 授权的用户名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 返回的资源列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuthorizationUserResouceInfo> || null}
         */
        this.AuthorizationUserResourceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ApplicationAccounts = 'ApplicationAccounts' in params ? params.ApplicationAccounts : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

        if (params.AuthorizationUserResourceList) {
            this.AuthorizationUserResourceList = new Array();
            for (let z in params.AuthorizationUserResourceList) {
                let obj = new AuthorizationUserResouceInfo();
                obj.deserialize(params.AuthorizationUserResourceList[z]);
                this.AuthorizationUserResourceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUsersInOrgNode请求参数结构体
 * @class
 */
class ListUsersInOrgNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点ID，是机构节点全局唯一标识，长度限制：64个字符。如果为空默认读取机构根节点下用户信息。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 是否读取其子节点信息。当其为空或false时，默认仅读取当前机构节点信息。当其为true时，读取本机构节点以及其第一层子节点信息。
         * @type {boolean || null}
         */
        this.IncludeOrgNodeChildInfo = null;

        /**
         * 用户属性搜索条件，可查询条件包括：用户名、手机号码，邮箱、用户锁定状态、用户冻结状态、创建时间、上次修改时间，支持多种属性组合作为查询条件。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配、中括号以逗号分隔（[Min，Max]）表示闭区间查询、大括号以逗号分隔（{Min，Max}）表示开区间查询，中括号与大括号可以配合使用（例如：{Min，Max]表示最小值开区间，最大值闭区间查询）。范围匹配支持使用星号（例如{20,*]表示查询范围为大于20的所有数据）。范围查询同时支持时间段查询，支持的属性包括创建时间 （CreationTime）、上次修改时间（LastUpdateTime），查询的时间格式遵循 ISO 8601 标准，例如：2021-01-13T09:44:07.182+0000。
         * @type {ListUsersInOrgNodeSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 排序条件集合。可排序的属性支持：用户名字（UserName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、创建时间 （CreatedDate）、上次更新时间（LastModifiedDate）。如果不指定，则默认按照用户昵称（DisplayName）正向排序。
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。
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
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.IncludeOrgNodeChildInfo = 'IncludeOrgNodeChildInfo' in params ? params.IncludeOrgNodeChildInfo : null;

        if (params.SearchCondition) {
            let obj = new ListUsersInOrgNodeSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 应用信息列表。
 * @class
 */
class InheritedForm extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所在的用户组ID列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * 用户所在的机构节点ID列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OrgNodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.OrgNodeIds = 'OrgNodeIds' in params ? params.OrgNodeIds : null;

    }
}

/**
 * RemoveAccountFromAccountGroup返回参数结构体
 * @class
 */
class RemoveAccountFromAccountGroupResponse extends  AbstractModel {
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
 * DescribeUserGroupResourcesAuthorization请求参数结构体
 * @class
 */
class DescribeUserGroupResourcesAuthorizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 用户组ID
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * ListUserGroups请求参数结构体
 * @class
 */
class ListUserGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（""）表示全匹配、以星号（* ) 结尾表示字段部分匹配。如果该字段为空，则默认查全量表。
         * @type {UserGroupInfoSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 排序条件集合。可排序的属性支持：用户组名称（DisplayName）、用户组ID（UserGroupId）、上次更新时间（LastModifiedDate）。如果该字段为空，则默认按照用户组名称正向排序。
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * 分页偏移量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页读取数量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
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

        if (params.SearchCondition) {
            let obj = new UserGroupInfoSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UpdateOrgNode返回参数结构体
 * @class
 */
class UpdateOrgNodeResponse extends  AbstractModel {
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
 * ListAuthorizedApplicationsToUser返回参数结构体
 * @class
 */
class ListAuthorizedApplicationsToUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户拥有访问权限的应用信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApplicationAuthorizationInfo> || null}
         */
        this.ApplicationAuthorizationInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ApplicationAuthorizationInfo) {
            this.ApplicationAuthorizationInfo = new Array();
            for (let z in params.ApplicationAuthorizationInfo) {
                let obj = new ApplicationAuthorizationInfo();
                obj.deserialize(params.ApplicationAuthorizationInfo[z]);
                this.ApplicationAuthorizationInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApplication请求参数结构体
 * @class
 */
class ModifyApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，是应用的全局唯一标识。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 安全级别。
         * @type {string || null}
         */
        this.SecureLevel = null;

        /**
         * 应用展示名称，长度限制：32个字符。 默认与应用名字相同。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 应用状态，true表示启用，false表示禁用。
         * @type {boolean || null}
         */
        this.AppStatus = null;

        /**
         * 应用图标图片访问地址。
         * @type {string || null}
         */
        this.IconUrl = null;

        /**
         * 描述。长度不超过128。
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SecureLevel = 'SecureLevel' in params ? params.SecureLevel : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.AppStatus = 'AppStatus' in params ? params.AppStatus : null;
        this.IconUrl = 'IconUrl' in params ? params.IconUrl : null;
        this.Description = 'Description' in params ? params.Description : null;

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
         * 用户名，长度限制：64个字符。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户密码， 需要符合密码策略的配置。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 昵称，长度限制：64个字符。 默认与用户名相同。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 用户备注，长度限制：512个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用户所属用户组ID列表。
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * 用户手机号。例如：+86-1xxxxxxxxxx。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户所属的主组织机构唯一ID。如果为空，默认为在根节点下创建用户。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 用户过期时间，遵循 ISO 8601 标准。
         * @type {string || null}
         */
        this.ExpirationTime = null;

        /**
         * 用户邮箱。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 密码是否需要重置，为空默认为false不需要重置密码。
         * @type {boolean || null}
         */
        this.PwdNeedReset = null;

        /**
         * 用户所属的次要组织机构ID列表。
         * @type {Array.<string> || null}
         */
        this.SecondaryOrgNodeIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.ExpirationTime = 'ExpirationTime' in params ? params.ExpirationTime : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.PwdNeedReset = 'PwdNeedReset' in params ? params.PwdNeedReset : null;
        this.SecondaryOrgNodeIdList = 'SecondaryOrgNodeIdList' in params ? params.SecondaryOrgNodeIdList : null;

    }
}

/**
 * DescribePublicKey请求参数结构体
 * @class
 */
class DescribePublicKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，是应用的全局唯一标识。
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
 * RemoveAccountFromAccountGroup请求参数结构体
 * @class
 */
class RemoveAccountFromAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号组ID
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * 需要移除账号ID列表。
         * @type {Array.<string> || null}
         */
        this.AccountIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.AccountIds = 'AccountIds' in params ? params.AccountIds : null;

    }
}

/**
 * ListApplicationAuthorizations返回参数结构体
 * @class
 */
class ListApplicationAuthorizationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的应用授权信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuthorizationInfo> || null}
         */
        this.AuthorizationInfoList = null;

        /**
         * 返回的应用信息总数。
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

        if (params.AuthorizationInfoList) {
            this.AuthorizationInfoList = new Array();
            for (let z in params.AuthorizationInfoList) {
                let obj = new AuthorizationInfo();
                obj.deserialize(params.AuthorizationInfoList[z]);
                this.AuthorizationInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 排序条件。
 * @class
 */
class SortCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序属性。
         * @type {string || null}
         */
        this.SortKey = null;

        /**
         * 排序顺序，ASC为正向排序，DESC为反向排序。
         * @type {string || null}
         */
        this.SortOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SortKey = 'SortKey' in params ? params.SortKey : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;

    }
}

/**
 * DescribeUserGroup返回参数结构体
 * @class
 */
class DescribeUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组昵称，长度限制：64个字符。 DisplayName不唯一。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 用户组备注，长度限制：512个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用户组ID，是用户组的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUserGroupsOfUser请求参数结构体
 * @class
 */
class ListUserGroupsOfUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID，是用户的全局唯一标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 模糊查询条件，支持匹配用户组名称（DisplayName）。如果该字段为空，则默认展示该用户所有的用户组。
         * @type {UserGroupInformationSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 排序条件集合。可排序的属性支持：用户组名称（DisplayName）、用户组ID（UserGroupId）、创建时间（CreatedDate）。如果该字段为空，则默认按照用户组名称正向排序。
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户组。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户组。
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
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.SearchCondition) {
            let obj = new UserGroupInformationSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 用户信息列表。
 * @class
 */
class UserInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名，长度限制：32个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 昵称，长度限制：64个字符。 默认与用户名相同。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 用户备注，长度限制：512个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用户上次更新时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastUpdateTime = null;

        /**
         * 用户创建时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 用户所属主组织机构的路径ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgPath = null;

        /**
         * 带国家号的用户手机号，例如+86-00000000000。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户所属用户组ID列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubjectGroups = null;

        /**
         * 用户邮箱。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户上次登录时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastLoginTime = null;

        /**
         * 用户ID，是用户全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.OrgPath = 'OrgPath' in params ? params.OrgPath : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.SubjectGroups = 'SubjectGroups' in params ? params.SubjectGroups : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.LastLoginTime = 'LastLoginTime' in params ? params.LastLoginTime : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * DescribeApplication请求参数结构体
 * @class
 */
class DescribeApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用id，是应用的全局唯一标识，与ClientId参数不能同时为空。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 客户端id，与ApplicationId参数不能同时为空。
         * @type {string || null}
         */
        this.ClientId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;

    }
}

/**
 * ModifyUserInfo请求参数结构体
 * @class
 */
class ModifyUserInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名，长度限制：32个字符。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 昵称，长度限制：64个字符。 默认与用户名相同。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 用户备注，长度限制：512个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用户所属用户组ID列表。
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * 用户 id。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户手机号。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户过期时间，遵循 ISO 8601 标准。
         * @type {string || null}
         */
        this.ExpirationTime = null;

        /**
         * 用户密码， 需要符合密码策略的配置。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 用户邮箱。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 密码是否需要重置，为空默认为false不需要重置密码。
         * @type {boolean || null}
         */
        this.PwdNeedReset = null;

        /**
         * 用户所属的主组织机构唯一ID。如果为空，默认为在根节点下创建用户。
         * @type {string || null}
         */
        this.OrgNodeId = null;

        /**
         * 用户所属的次要组织机构ID列表。
         * @type {Array.<string> || null}
         */
        this.SecondaryOrgNodeIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.ExpirationTime = 'ExpirationTime' in params ? params.ExpirationTime : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.PwdNeedReset = 'PwdNeedReset' in params ? params.PwdNeedReset : null;
        this.OrgNodeId = 'OrgNodeId' in params ? params.OrgNodeId : null;
        this.SecondaryOrgNodeIdList = 'SecondaryOrgNodeIdList' in params ? params.SecondaryOrgNodeIdList : null;

    }
}

/**
 * RemoveUserFromUserGroup返回参数结构体
 * @class
 */
class RemoveUserFromUserGroupResponse extends  AbstractModel {
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
 * DescribeUserThirdPartyAccountInfo请求参数结构体
 * @class
 */
class DescribeUserThirdPartyAccountInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户 ID。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * ModifyUserInfo返回参数结构体
 * @class
 */
class ModifyUserInfoResponse extends  AbstractModel {
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
 * ListAuthorizedApplicationsToOrgNode返回参数结构体
 * @class
 */
class ListAuthorizedApplicationsToOrgNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构节点拥有访问权限的应用 id 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ApplicationIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationIds = 'ApplicationIds' in params ? params.ApplicationIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddUserToUserGroup返回参数结构体
 * @class
 */
class AddUserToUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未成功加入用户组的用户ID列表信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedItems = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedItems = 'FailedItems' in params ? params.FailedItems : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAppAccount请求参数结构体
 * @class
 */
class DescribeAppAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配。如果该字段为空，则默认查全量表。
         * @type {AppAccountSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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

        if (params.SearchCondition) {
            let obj = new AppAccountSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 返回的授权关系信息。
 * @class
 */
class AuthorizationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用唯一ID。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 类型名称。
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * 类型唯一ID。
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 上次更新时间，符合 ISO8601 标准。
         * @type {string || null}
         */
        this.LastModifiedDate = null;

        /**
         * 授权类型唯一ID。
         * @type {string || null}
         */
        this.AuthorizationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;
        this.AuthorizationId = 'AuthorizationId' in params ? params.AuthorizationId : null;

    }
}

/**
 * CreateUserGroup返回参数结构体
 * @class
 */
class CreateUserGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID，是用户组的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserThirdPartyAccountInfo返回参数结构体
 * @class
 */
class DescribeUserThirdPartyAccountInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户 id。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 三方账号的绑定情况。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ThirdPartyAccountInfo> || null}
         */
        this.ThirdPartyAccounts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

        if (params.ThirdPartyAccounts) {
            this.ThirdPartyAccounts = new Array();
            for (let z in params.ThirdPartyAccounts) {
                let obj = new ThirdPartyAccountInfo();
                obj.deserialize(params.ThirdPartyAccounts[z]);
                this.ThirdPartyAccounts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 应用信息列表。
 * @class
 */
class ApplicationAuthorizationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在被授权应用下对应的账号列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ApplicationAccounts = null;

        /**
         * 应用ID，是应用的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 展示用户所在的用户组、机构节点拥有该应用的访问权限的ID信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InheritedForm || null}
         */
        this.InheritedForm = null;

        /**
         * 应用名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 应用创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationAccounts = 'ApplicationAccounts' in params ? params.ApplicationAccounts : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.InheritedForm) {
            let obj = new InheritedForm();
            obj.deserialize(params.InheritedForm)
            this.InheritedForm = obj;
        }
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;

    }
}

/**
 * 账号关联的用户信息
 * @class
 */
class LinkUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID，是用户全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * ListUserGroups返回参数结构体
 * @class
 */
class ListUserGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的用户组列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserGroupInformation> || null}
         */
        this.UserGroupList = null;

        /**
         * 返回的用户组信息总数。
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

        if (params.UserGroupList) {
            this.UserGroupList = new Array();
            for (let z in params.UserGroupList) {
                let obj = new UserGroupInformation();
                obj.deserialize(params.UserGroupList[z]);
                this.UserGroupList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAccountInAccountGroup请求参数结构体
 * @class
 */
class ListAccountInAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号组ID。
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。
         * @type {AccountGroupSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

        if (params.SearchCondition) {
            let obj = new AccountGroupSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteUserGroup返回参数结构体
 * @class
 */
class DeleteUserGroupResponse extends  AbstractModel {
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
 * 用户属性搜索条件。

 * @class
 */
class AuthorizationInfoSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称匹配搜索，当查询类型为用户时，匹配范围包括：用户名称、应用名称；当查询类型为用户组时，匹配范围包括：用户组名称、应用名称；当查询类型为组织机构时，匹配范围包括：组织机构名称、应用名称。
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * ListUserGroupsOfUser返回参数结构体
 * @class
 */
class ListUserGroupsOfUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属的用户组ID列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.UserGroupIds = null;

        /**
         * 用户ID，是用户的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户所属的用户组信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserGroupInfo> || null}
         */
        this.UserGroupInfoList = null;

        /**
         * 返回的用户组信息总数。
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
        this.UserGroupIds = 'UserGroupIds' in params ? params.UserGroupIds : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.UserGroupInfoList) {
            this.UserGroupInfoList = new Array();
            for (let z in params.UserGroupInfoList) {
                let obj = new UserGroupInfo();
                obj.deserialize(params.UserGroupInfoList[z]);
                this.UserGroupInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccountGroup返回参数结构体
 * @class
 */
class CreateAccountGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号组ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserResourcesAuthorization请求参数结构体
 * @class
 */
class DescribeUserResourcesAuthorizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 用户ID。UserName 和 UserId 需至少一个不为空；都不为空时优先使用 UserName。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户名。UserName 和 UserId 需至少一个不为空；都不为空时优先使用 UserName。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 查询范围是否包括用户关联的用户组、组织机构的应用访问权限。默认为不查询 ，传false表示不查询该范围，传true查询该范围。
         * @type {boolean || null}
         */
        this.IncludeInheritedAuthorizations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.IncludeInheritedAuthorizations = 'IncludeInheritedAuthorizations' in params ? params.IncludeInheritedAuthorizations : null;

    }
}

/**
 * ListUsers请求参数结构体
 * @class
 */
class ListUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户属性搜索条件，可查询条件包括：用户名、手机号码，邮箱、用户锁定状态、用户冻结状态、创建时间、上次修改时间，支持多种属性组合作为查询条件。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配、中括号以逗号分隔（[Min，Max]）表示闭区间查询、大括号以逗号分隔（{Min，Max}）表示开区间查询，中括号与大括号可以配合使用（例如：{Min，Max]表示最小值开区间，最大值闭区间查询）。范围匹配支持使用星号（例如{20,*]表示查询范围为大于20的所有数据）。范围查询同时支持时间段查询，支持的属性包括创建时间 （CreationTime）、上次修改时间（LastUpdateTime），查询的时间格式遵循 ISO 8601 标准，例如：2021-01-13T09:44:07.182+0000。
         * @type {UserSearchCriteria || null}
         */
        this.SearchCondition = null;

        /**
         * 指定期望返回的用户属性，默认返回所有用户内置属性。内置用户属性包括：用户UUID（UserId）、用户昵称（DisplayName）、用户名字（UserName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、用户组（SubjectGroups）机构路径（OrgPath）、备注（Description）、创建时间 （CreationTime）、上次修改时间（LastUpdateTime）、上次登录时间（LastLoginTime）。
         * @type {Array.<string> || null}
         */
        this.ExpectedFields = null;

        /**
         * 排序条件集合。可排序的属性支持：用户名字（UserName）、用户昵称（DisplayName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、创建时间 （CreationTime）、上次修改时间（LastUpdateTime）、上次登录时间（LastLoginTime）。如果不指定，则默认按照用户昵称（DisplayName）正向排序。
         * @type {SortCondition || null}
         */
        this.Sort = null;

        /**
         * 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多1000个用户。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多1000个用户。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 是否查看搜索结果的总数，默认该选项为false不查看。
         * @type {boolean || null}
         */
        this.IncludeTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SearchCondition) {
            let obj = new UserSearchCriteria();
            obj.deserialize(params.SearchCondition)
            this.SearchCondition = obj;
        }
        this.ExpectedFields = 'ExpectedFields' in params ? params.ExpectedFields : null;

        if (params.Sort) {
            let obj = new SortCondition();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.IncludeTotal = 'IncludeTotal' in params ? params.IncludeTotal : null;

    }
}

/**
 * DeleteUserGroup请求参数结构体
 * @class
 */
class DeleteUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID，是用户组的全局唯一标识。
         * @type {string || null}
         */
        this.UserGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserGroupId = 'UserGroupId' in params ? params.UserGroupId : null;

    }
}

/**
 * 应用属性搜索条件。
 * @class
 */
class ApplicationInfoSearchCriteria extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用匹配搜索关键字，匹配范围包括：应用名称、应用ID。
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 应用类型。ApplicationType的取值范围有：OAUTH2、JWT、CAS、SAML2、FORM、OIDC、APIGW。
         * @type {string || null}
         */
        this.ApplicationType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;

    }
}

/**
 * ListApplications返回参数结构体
 * @class
 */
class ListApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的应用信息总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的应用信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApplicationInformation> || null}
         */
        this.ApplicationInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ApplicationInfoList) {
            this.ApplicationInfoList = new Array();
            for (let z in params.ApplicationInfoList) {
                let obj = new ApplicationInformation();
                obj.deserialize(params.ApplicationInfoList[z]);
                this.ApplicationInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddAccountToAccountGroup请求参数结构体
 * @class
 */
class AddAccountToAccountGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号组ID
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * 加入账号组的账号ID列表。
         * @type {Array.<string> || null}
         */
        this.AccountIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.AccountIds = 'AccountIds' in params ? params.AccountIds : null;

    }
}

module.exports = {
    DescribeOrgNodeResponse: DescribeOrgNodeResponse,
    ListApplicationsRequest: ListApplicationsRequest,
    UserSearchCriteria: UserSearchCriteria,
    AddAccountToAccountGroupResponse: AddAccountToAccountGroupResponse,
    DeleteUserRequest: DeleteUserRequest,
    AuthorizationUserResouceInfo: AuthorizationUserResouceInfo,
    CreateAppAccountResponse: CreateAppAccountResponse,
    ListAuthorizedApplicationsToUserGroupRequest: ListAuthorizedApplicationsToUserGroupRequest,
    ModifyApplicationResponse: ModifyApplicationResponse,
    OrgNodeChildUserInfo: OrgNodeChildUserInfo,
    DeleteAccountGroupRequest: DeleteAccountGroupRequest,
    AddUserToUserGroupRequest: AddUserToUserGroupRequest,
    ApplicationInformation: ApplicationInformation,
    ListUsersResponse: ListUsersResponse,
    DeleteAppAccountRequest: DeleteAppAccountRequest,
    UserGroupInfo: UserGroupInfo,
    UpdateOrgNodeRequest: UpdateOrgNodeRequest,
    CreateOrgNodeRequest: CreateOrgNodeRequest,
    RemoveUserFromUserGroupRequest: RemoveUserFromUserGroupRequest,
    ModifyAppAccountRequest: ModifyAppAccountRequest,
    ListAuthorizedApplicationsToUserGroupResponse: ListAuthorizedApplicationsToUserGroupResponse,
    DeleteAccountGroupResponse: DeleteAccountGroupResponse,
    UserGroupInfoSearchCriteria: UserGroupInfoSearchCriteria,
    DescribeUserInfoRequest: DescribeUserInfoRequest,
    ListAuthorizedApplicationsToOrgNodeRequest: ListAuthorizedApplicationsToOrgNodeRequest,
    DescribePublicKeyResponse: DescribePublicKeyResponse,
    DescribeOrgNodeRequest: DescribeOrgNodeRequest,
    CreateAccountGroupRequest: CreateAccountGroupRequest,
    DescribeUserGroupRequest: DescribeUserGroupRequest,
    CreateOrgNodeResponse: CreateOrgNodeResponse,
    UserGroupInformationSearchCriteria: UserGroupInformationSearchCriteria,
    AuthorizationResourceEntityInfo: AuthorizationResourceEntityInfo,
    AccountGroupSearchCriteria: AccountGroupSearchCriteria,
    CreateUserResponse: CreateUserResponse,
    ThirdPartyAccountInfo: ThirdPartyAccountInfo,
    ModifyAppAccountResponse: ModifyAppAccountResponse,
    DeleteUserResponse: DeleteUserResponse,
    ListUsersInUserGroupResponse: ListUsersInUserGroupResponse,
    CreateAppAccountRequest: CreateAppAccountRequest,
    DescribeApplicationResponse: DescribeApplicationResponse,
    DescribeAppAccountResponse: DescribeAppAccountResponse,
    DescribeUserGroupResourcesAuthorizationResponse: DescribeUserGroupResourcesAuthorizationResponse,
    UserGroupInformation: UserGroupInformation,
    ListUsersInOrgNodeSearchCriteria: ListUsersInOrgNodeSearchCriteria,
    DescribeAccountGroupResponse: DescribeAccountGroupResponse,
    CreateUserGroupRequest: CreateUserGroupRequest,
    DescribeOrgResourcesAuthorizationRequest: DescribeOrgResourcesAuthorizationRequest,
    DescribeUserInfoResponse: DescribeUserInfoResponse,
    DeleteOrgNodeRequest: DeleteOrgNodeRequest,
    DeleteUsersResponse: DeleteUsersResponse,
    AppAccountInfo: AppAccountInfo,
    DescribeAccountGroupRequest: DescribeAccountGroupRequest,
    AppAccountSearchCriteria: AppAccountSearchCriteria,
    DescribeOrgResourcesAuthorizationResponse: DescribeOrgResourcesAuthorizationResponse,
    ListUsersInUserGroupRequest: ListUsersInUserGroupRequest,
    UserInfo: UserInfo,
    DeleteAppAccountResponse: DeleteAppAccountResponse,
    ModifyAccountGroupRequest: ModifyAccountGroupRequest,
    ListUsersInOrgNodeResponse: ListUsersInOrgNodeResponse,
    ListApplicationAuthorizationsRequest: ListApplicationAuthorizationsRequest,
    ModifyAccountGroupResponse: ModifyAccountGroupResponse,
    DeleteUsersRequest: DeleteUsersRequest,
    AccountGroupInfo: AccountGroupInfo,
    OrgNodeChildInfo: OrgNodeChildInfo,
    ListAuthorizedApplicationsToUserRequest: ListAuthorizedApplicationsToUserRequest,
    DeleteOrgNodeResponse: DeleteOrgNodeResponse,
    ListAccountInAccountGroupResponse: ListAccountInAccountGroupResponse,
    DescribeUserResourcesAuthorizationResponse: DescribeUserResourcesAuthorizationResponse,
    ListUsersInOrgNodeRequest: ListUsersInOrgNodeRequest,
    InheritedForm: InheritedForm,
    RemoveAccountFromAccountGroupResponse: RemoveAccountFromAccountGroupResponse,
    DescribeUserGroupResourcesAuthorizationRequest: DescribeUserGroupResourcesAuthorizationRequest,
    ListUserGroupsRequest: ListUserGroupsRequest,
    UpdateOrgNodeResponse: UpdateOrgNodeResponse,
    ListAuthorizedApplicationsToUserResponse: ListAuthorizedApplicationsToUserResponse,
    ModifyApplicationRequest: ModifyApplicationRequest,
    CreateUserRequest: CreateUserRequest,
    DescribePublicKeyRequest: DescribePublicKeyRequest,
    RemoveAccountFromAccountGroupRequest: RemoveAccountFromAccountGroupRequest,
    ListApplicationAuthorizationsResponse: ListApplicationAuthorizationsResponse,
    SortCondition: SortCondition,
    DescribeUserGroupResponse: DescribeUserGroupResponse,
    ListUserGroupsOfUserRequest: ListUserGroupsOfUserRequest,
    UserInformation: UserInformation,
    DescribeApplicationRequest: DescribeApplicationRequest,
    ModifyUserInfoRequest: ModifyUserInfoRequest,
    RemoveUserFromUserGroupResponse: RemoveUserFromUserGroupResponse,
    DescribeUserThirdPartyAccountInfoRequest: DescribeUserThirdPartyAccountInfoRequest,
    ModifyUserInfoResponse: ModifyUserInfoResponse,
    ListAuthorizedApplicationsToOrgNodeResponse: ListAuthorizedApplicationsToOrgNodeResponse,
    AddUserToUserGroupResponse: AddUserToUserGroupResponse,
    DescribeAppAccountRequest: DescribeAppAccountRequest,
    AuthorizationInfo: AuthorizationInfo,
    CreateUserGroupResponse: CreateUserGroupResponse,
    DescribeUserThirdPartyAccountInfoResponse: DescribeUserThirdPartyAccountInfoResponse,
    ApplicationAuthorizationInfo: ApplicationAuthorizationInfo,
    LinkUserInfo: LinkUserInfo,
    ListUserGroupsResponse: ListUserGroupsResponse,
    ListAccountInAccountGroupRequest: ListAccountInAccountGroupRequest,
    DeleteUserGroupResponse: DeleteUserGroupResponse,
    AuthorizationInfoSearchCriteria: AuthorizationInfoSearchCriteria,
    ListUserGroupsOfUserResponse: ListUserGroupsOfUserResponse,
    CreateAccountGroupResponse: CreateAccountGroupResponse,
    DescribeUserResourcesAuthorizationRequest: DescribeUserResourcesAuthorizationRequest,
    ListUsersRequest: ListUsersRequest,
    DeleteUserGroupRequest: DeleteUserGroupRequest,
    ApplicationInfoSearchCriteria: ApplicationInfoSearchCriteria,
    ListApplicationsResponse: ListApplicationsResponse,
    AddAccountToAccountGroupRequest: AddAccountToAccountGroupRequest,

}
