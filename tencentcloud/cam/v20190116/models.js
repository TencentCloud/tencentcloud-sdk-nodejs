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
 * 子用户信息
 * @class
 */
class SubAccountUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户用户 ID
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 子用户用户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子用户 UID，UID是用户作为消息接收人时的唯一标识，和 UIN 一样可以唯一标识一个用户，可通过接口https://cloud.tencent.com/document/api/598/53486 获取
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * 子用户备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 用户类型(2:子用户;3:企业微信子用户;4:协作者;5:消息接收人)
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * 最近登录IP
         * @type {string || null}
         */
        this.LastLoginIp = null;

        /**
         * 最近登录时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastLoginTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.LastLoginIp = 'LastLoginIp' in params ? params.LastLoginIp : null;
        this.LastLoginTime = 'LastLoginTime' in params ? params.LastLoginTime : null;

    }
}

/**
 * ListAttachedRolePolicies返回参数结构体
 * @class
 */
class ListAttachedRolePoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色关联的策略列表
         * @type {Array.<AttachedPolicyOfRole> || null}
         */
        this.List = null;

        /**
         * 角色关联的策略总数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachedPolicyOfRole();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 登录和敏感操作flag
 * @class
 */
class LoginActionFlagIntl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手机
         * @type {number || null}
         */
        this.Phone = null;

        /**
         * 硬token
         * @type {number || null}
         */
        this.Token = null;

        /**
         * 软token
         * @type {number || null}
         */
        this.Stoken = null;

        /**
         * 微信
         * @type {number || null}
         */
        this.Wechat = null;

        /**
         * 自定义
         * @type {number || null}
         */
        this.Custom = null;

        /**
         * 邮件
         * @type {number || null}
         */
        this.Mail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Stoken = 'Stoken' in params ? params.Stoken : null;
        this.Wechat = 'Wechat' in params ? params.Wechat : null;
        this.Custom = 'Custom' in params ? params.Custom : null;
        this.Mail = 'Mail' in params ? params.Mail : null;

    }
}

/**
 * UpdateUserOIDCConfig返回参数结构体
 * @class
 */
class UpdateUserOIDCConfigResponse extends  AbstractModel {
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
 * ListAccessKeys请求参数结构体
 * @class
 */
class ListAccessKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定用户Uin，不填默认列出当前用户访问密钥
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

    }
}

/**
 * SetMfaFlag返回参数结构体
 * @class
 */
class SetMfaFlagResponse extends  AbstractModel {
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
 * UpdateSAMLProvider请求参数结构体
 * @class
 */
class UpdateSAMLProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML身份提供商名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * SAML身份提供商描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * SAML身份提供商Base64编码的元数据文档
         * @type {string || null}
         */
        this.SAMLMetadataDocument = null;

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
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;

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
         * 子用户用户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否强制删除该子用户，默认入参为0。0：若该用户存在未删除API密钥，则不删除用户；1：若该用户存在未删除API密钥，则先删除密钥后删除用户。删除密钥需要您拥有cam:DeleteApiKey权限，您将可以删除该用户下启用或禁用状态的所有密钥，无权限则删除密钥和用户失败
         * @type {number || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DetachGroupPolicy请求参数结构体
 * @class
 */
class DetachGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略 id
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 用户组 id
         * @type {number || null}
         */
        this.DetachGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.DetachGroupId = 'DetachGroupId' in params ? params.DetachGroupId : null;

    }
}

/**
 * DescribeRoleList返回参数结构体
 * @class
 */
class DescribeRoleListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色详情列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RoleInfo> || null}
         */
        this.List = null;

        /**
         * 角色总数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new RoleInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdatePolicy返回参数结构体
 * @class
 */
class UpdatePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略id，入参是PolicyName时，才会返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
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
 * GetRole请求参数结构体
 * @class
 */
class GetRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色 ID，用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 角色名，用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * CreateServiceLinkedRole请求参数结构体
 * @class
 */
class CreateServiceLinkedRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权服务，附加了此角色的腾讯云服务主体。
         * @type {Array.<string> || null}
         */
        this.QCSServiceName = null;

        /**
         * 自定义后缀，根据您提供的字符串，与服务提供的前缀组合在一起以形成完整的角色名称。
         * @type {string || null}
         */
        this.CustomSuffix = null;

        /**
         * 角色说明。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 角色绑定标签。
         * @type {Array.<RoleTags> || null}
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
        this.QCSServiceName = 'QCSServiceName' in params ? params.QCSServiceName : null;
        this.CustomSuffix = 'CustomSuffix' in params ? params.CustomSuffix : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * ListAttachedGroupPolicies请求参数结构体
 * @class
 */
class ListAttachedGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID
         * @type {number || null}
         */
        this.TargetGroupId = null;

        /**
         * 页码，默认值是 1，从 1 开始
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页大小，默认值是 20
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * 搜索关键字
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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * ListGroupsForUser请求参数结构体
 * @class
 */
class ListGroupsForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户 UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * 每页数量。默认为20。
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * 页码。默认为1。
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 子账号UIN
         * @type {number || null}
         */
        this.SubUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;

    }
}

/**
 * AttachRolePolicy返回参数结构体
 * @class
 */
class AttachRolePolicyResponse extends  AbstractModel {
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
 * GetUserPermissionBoundary请求参数结构体
 * @class
 */
class GetUserPermissionBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子账号Uin
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

    }
}

/**
 * DescribeOIDCConfig请求参数结构体
 * @class
 */
class DescribeOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * GetRolePermissionBoundary请求参数结构体
 * @class
 */
class GetRolePermissionBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色ID
         * @type {string || null}
         */
        this.RoleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;

    }
}

/**
 * GetServiceLinkedRoleDeletionStatus返回参数结构体
 * @class
 */
class GetServiceLinkedRoleDeletionStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态：NOT_STARTED，IN_PROGRESS，SUCCEEDED，FAILED
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 失败原因
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 服务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 服务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSecurityLastUsed请求参数结构体
 * @class
 */
class GetSecurityLastUsedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询密钥ID列表。最多支持10个。
         * @type {Array.<string> || null}
         */
        this.SecretIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretIdList = 'SecretIdList' in params ? params.SecretIdList : null;

    }
}

/**
 * DescribeUserSAMLConfig返回参数结构体
 * @class
 */
class DescribeUserSAMLConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML元数据文档
         * @type {string || null}
         */
        this.SAMLMetadata = null;

        /**
         * 状态：0:未设置，1:已开启，2:已禁用
         * @type {number || null}
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
        this.SAMLMetadata = 'SAMLMetadata' in params ? params.SAMLMetadata : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUserPermissionsBoundary返回参数结构体
 * @class
 */
class DeleteUserPermissionsBoundaryResponse extends  AbstractModel {
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
 * ListUsers返回参数结构体
 * @class
 */
class ListUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户信息
         * @type {Array.<SubAccountInfo> || null}
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
                let obj = new SubAccountInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateRoleDescription返回参数结构体
 * @class
 */
class UpdateRoleDescriptionResponse extends  AbstractModel {
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
 * GetAccountSummary请求参数结构体
 * @class
 */
class GetAccountSummaryRequest extends  AbstractModel {
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
 * DeletePolicy返回参数结构体
 * @class
 */
class DeletePolicyResponse extends  AbstractModel {
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
 * GetUserAppId返回参数结构体
 * @class
 */
class GetUserAppIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前账号Uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 当前账号OwnerUin
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 当前账号AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetUserAppId请求参数结构体
 * @class
 */
class GetUserAppIdRequest extends  AbstractModel {
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
 * DescribeOIDCConfig返回参数结构体
 * @class
 */
class DescribeOIDCConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份提供商类型 11角色身份提供商
         * @type {number || null}
         */
        this.ProviderType = null;

        /**
         * 身份提供商URL
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * 签名公钥
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * 客户端id
         * @type {Array.<string> || null}
         */
        this.ClientId = null;

        /**
         * 状态：0:未设置，11:已开启，2:已禁用
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 名称
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
        this.ProviderType = 'ProviderType' in params ? params.ProviderType : null;
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListPolicyVersions请求参数结构体
 * @class
 */
class ListPolicyVersionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * GetCustomMFATokenInfo请求参数结构体
 * @class
 */
class GetCustomMFATokenInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义多因子验证Token
         * @type {string || null}
         */
        this.MFAToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MFAToken = 'MFAToken' in params ? params.MFAToken : null;

    }
}

/**
 * DescribeRoleList请求参数结构体
 * @class
 */
class DescribeRoleListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页码，从1开始
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页行数，不能大于200
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * 标签筛选
         * @type {Array.<RoleTags> || null}
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
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeUserSAMLConfig请求参数结构体
 * @class
 */
class DescribeUserSAMLConfigRequest extends  AbstractModel {
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
 * TagRole返回参数结构体
 * @class
 */
class TagRoleResponse extends  AbstractModel {
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
 * PutRolePermissionsBoundary请求参数结构体
 * @class
 */
class PutRolePermissionsBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 角色ID（与角色名至少填一个）
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 角色名（与角色ID至少填一个）
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * GetGroup请求参数结构体
 * @class
 */
class GetGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 策略信息
 * @class
 */
class StrategyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略名称。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 策略创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 策略类型。1 表示自定义策略，2 表示预设策略。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 策略描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建来源，1 通过控制台创建, 2 通过策略语法创建。
         * @type {number || null}
         */
        this.CreateMode = null;

        /**
         * 关联的用户数
         * @type {number || null}
         */
        this.Attachments = null;

        /**
         * 策略关联的产品
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 当需要查询标记实体是否已经关联策略时不为null。0表示未关联策略，1表示已关联策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsAttached = null;

        /**
         * 是否已下线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Deactived = null;

        /**
         * 已下线产品列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DeactivedDetail = null;

        /**
         * 是否是服务相关角色策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsServiceLinkedPolicy = null;

        /**
         * 关联策略实体数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttachEntityCount = null;

        /**
         * 关联权限边界实体数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttachEntityBoundaryCount = null;

        /**
         * 最后编辑时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.Attachments = 'Attachments' in params ? params.Attachments : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.IsAttached = 'IsAttached' in params ? params.IsAttached : null;
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;
        this.IsServiceLinkedPolicy = 'IsServiceLinkedPolicy' in params ? params.IsServiceLinkedPolicy : null;
        this.AttachEntityCount = 'AttachEntityCount' in params ? params.AttachEntityCount : null;
        this.AttachEntityBoundaryCount = 'AttachEntityBoundaryCount' in params ? params.AttachEntityBoundaryCount : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteRole返回参数结构体
 * @class
 */
class DeleteRoleResponse extends  AbstractModel {
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
 * 策略版本列表元素结构
 * @class
 */
class PolicyVersionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VersionId = null;

        /**
         * 策略版本创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 是否是正在生效的版本。0表示不是，1表示是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsDefaultVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.IsDefaultVersion = 'IsDefaultVersion' in params ? params.IsDefaultVersion : null;

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
         * 策略 id
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 子账号 uin
         * @type {number || null}
         */
        this.DetachUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.DetachUin = 'DetachUin' in params ? params.DetachUin : null;

    }
}

/**
 * DescribeSubAccounts请求参数结构体
 * @class
 */
class DescribeSubAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户UIN列表，最多支持50个UIN
         * @type {Array.<number> || null}
         */
        this.FilterSubAccountUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterSubAccountUin = 'FilterSubAccountUin' in params ? params.FilterSubAccountUin : null;

    }
}

/**
 * DeleteUserPermissionsBoundary请求参数结构体
 * @class
 */
class DeleteUserPermissionsBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子账号Uin
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

    }
}

/**
 * ListSAMLProviders请求参数结构体
 * @class
 */
class ListSAMLProvidersRequest extends  AbstractModel {
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
 * ListGroups请求参数结构体
 * @class
 */
class ListGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页码。默认为1。
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页数量。默认为20。
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * 按用户组名称匹配。
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
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DeletePolicyVersion返回参数结构体
 * @class
 */
class DeletePolicyVersionResponse extends  AbstractModel {
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
 * GetRolePermissionBoundary返回参数结构体
 * @class
 */
class GetRolePermissionBoundaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 策略语法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * 策略类型：1.自定义策略，2.预设策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyType = null;

        /**
         * 创建方式：1.按产品功能或项目权限创建，2.按策略语法创建，3.按策略生成器创建，4.按标签授权创建，5.按权限边界规则创建
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateMode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用户关联策略(随组关联)信息
 * @class
 */
class AttachedUserPolicyGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 分组名称
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * ListGroupsForUser返回参数结构体
 * @class
 */
class ListGroupsForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户加入的用户组总数
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 用户组信息
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.GroupInfo) {
            this.GroupInfo = new Array();
            for (let z in params.GroupInfo) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfo[z]);
                this.GroupInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUsersForGroup请求参数结构体
 * @class
 */
class ListUsersForGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 ID。
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 页码。默认为1。
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页数量。默认为20。
         * @type {number || null}
         */
        this.Rp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;

    }
}

/**
 * RemoveUserFromGroup请求参数结构体
 * @class
 */
class RemoveUserFromGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的用户 UIN/UID和用户组 ID对应数组
         * @type {Array.<GroupIdOfUidInfo> || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new GroupIdOfUidInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }

    }
}

/**
 * CreatePolicyVersion返回参数结构体
 * @class
 */
class CreatePolicyVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VersionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListPolicies返回参数结构体
 * @class
 */
class ListPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略总数
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 策略数组，数组每个成员包括 policyId、policyName、addTime、type、description、 createMode 字段。其中： 
policyId：策略 id 
policyName：策略名
addTime：策略创建时间
type：1 表示自定义策略，2 表示预设策略 
description：策略描述 
createMode：1 表示按业务权限创建的策略，其他值表示可以查看策略语法和通过策略语法更新策略
Attachments: 关联的用户数
ServiceType: 策略关联的产品
IsAttached: 当需要查询标记实体是否已经关联策略时不为null。0表示未关联策略，1表示已关联策略
         * @type {Array.<StrategyInfo> || null}
         */
        this.List = null;

        /**
         * 保留字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ServiceTypeList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new StrategyInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.ServiceTypeList = 'ServiceTypeList' in params ? params.ServiceTypeList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业微信子用户
 * @class
 */
class WeChatWorkSubAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户用户 ID
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 子用户用户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子用户 UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 子用户能否登录控制台
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 区号
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 企业微信UserId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WeChatWorkUserId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.WeChatWorkUserId = 'WeChatWorkUserId' in params ? params.WeChatWorkUserId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 异地登录设置
 * @class
 */
class OffsiteFlag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证标识
         * @type {number || null}
         */
        this.VerifyFlag = null;

        /**
         * 手机通知
         * @type {number || null}
         */
        this.NotifyPhone = null;

        /**
         * 邮箱通知
         * @type {number || null}
         */
        this.NotifyEmail = null;

        /**
         * 微信通知
         * @type {number || null}
         */
        this.NotifyWechat = null;

        /**
         * 提示
         * @type {number || null}
         */
        this.Tips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VerifyFlag = 'VerifyFlag' in params ? params.VerifyFlag : null;
        this.NotifyPhone = 'NotifyPhone' in params ? params.NotifyPhone : null;
        this.NotifyEmail = 'NotifyEmail' in params ? params.NotifyEmail : null;
        this.NotifyWechat = 'NotifyWechat' in params ? params.NotifyWechat : null;
        this.Tips = 'Tips' in params ? params.Tips : null;

    }
}

/**
 * 子用户和用户组关联信息
 * @class
 */
class GroupIdOfUidInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 子用户 UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * 子用户 Uin，Uid和Uin至少有一个必填
         * @type {number || null}
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

    }
}

/**
 * UpdateRoleDescription请求参数结构体
 * @class
 */
class UpdateRoleDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * UpdateUserSAMLConfig请求参数结构体
 * @class
 */
class UpdateUserSAMLConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改的操作类型:enable:启用,disable:禁用,updateSAML:修改元数据文档
         * @type {string || null}
         */
        this.Operate = null;

        /**
         * 元数据文档，需要base64 encode，仅当Operate为updateSAML时需要此参数
         * @type {string || null}
         */
        this.SAMLMetadataDocument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operate = 'Operate' in params ? params.Operate : null;
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;

    }
}

/**
 * DeleteGroup返回参数结构体
 * @class
 */
class DeleteGroupResponse extends  AbstractModel {
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
 * 角色详细信息
 * @class
 */
class RoleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色ID
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 角色名称
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 角色的策略文档
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * 角色描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 角色的创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 角色的最近一次时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 角色是否允许登录
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * 角色类型，取user、system或service_linked
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleType = null;

        /**
         * 有效时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SessionDuration = null;

        /**
         * 服务相关角色删除TaskId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeletionTaskId = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RoleTags> || null}
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
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.RoleType = 'RoleType' in params ? params.RoleType : null;
        this.SessionDuration = 'SessionDuration' in params ? params.SessionDuration : null;
        this.DeletionTaskId = 'DeletionTaskId' in params ? params.DeletionTaskId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeSafeAuthFlag返回参数结构体
 * @class
 */
class DescribeSafeAuthFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 登录保护设置
         * @type {LoginActionFlag || null}
         */
        this.LoginFlag = null;

        /**
         * 敏感操作保护设置
         * @type {LoginActionFlag || null}
         */
        this.ActionFlag = null;

        /**
         * 异地登录保护设置
         * @type {OffsiteFlag || null}
         */
        this.OffsiteFlag = null;

        /**
         * 1: 提示7天信任设备 0: 不提示
         * @type {number || null}
         */
        this.PromptTrust = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoginFlag) {
            let obj = new LoginActionFlag();
            obj.deserialize(params.LoginFlag)
            this.LoginFlag = obj;
        }

        if (params.ActionFlag) {
            let obj = new LoginActionFlag();
            obj.deserialize(params.ActionFlag)
            this.ActionFlag = obj;
        }

        if (params.OffsiteFlag) {
            let obj = new OffsiteFlag();
            obj.deserialize(params.OffsiteFlag)
            this.OffsiteFlag = obj;
        }
        this.PromptTrust = 'PromptTrust' in params ? params.PromptTrust : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePolicyVersion请求参数结构体
 * @class
 */
class CreatePolicyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略文本信息
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * 是否设置为当前策略的版本
         * @type {boolean || null}
         */
        this.SetAsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.SetAsDefault = 'SetAsDefault' in params ? params.SetAsDefault : null;

    }
}

/**
 * 密钥最后使用时间
 * @class
 */
class SecretIdLastUsed extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥ID
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * 最后访问日期(有1天延迟)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastUsedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.LastUsedDate = 'LastUsedDate' in params ? params.LastUsedDate : null;

    }
}

/**
 * CreateUserOIDCConfig返回参数结构体
 * @class
 */
class CreateUserOIDCConfigResponse extends  AbstractModel {
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
 * ListAttachedUserAllPolicies返回参数结构体
 * @class
 */
class ListAttachedUserAllPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略列表数据
         * @type {Array.<AttachedUserPolicy> || null}
         */
        this.PolicyList = null;

        /**
         * 策略总数
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

        if (params.PolicyList) {
            this.PolicyList = new Array();
            for (let z in params.PolicyList) {
                let obj = new AttachedUserPolicy();
                obj.deserialize(params.PolicyList[z]);
                this.PolicyList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGroup请求参数结构体
 * @class
 */
class DeleteGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * GetUser返回参数结构体
 * @class
 */
class GetUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户用户 UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 子用户用户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子用户 UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * 子用户备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 子用户能否登录控制台 0-无法登录控制台，1-可以登录控制台
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 区号
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetUserPermissionBoundary返回参数结构体
 * @class
 */
class GetUserPermissionBoundaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 策略语法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * 策略类型：1.自定义策略，2.预设策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyType = null;

        /**
         * 创建方式：1.按产品功能或项目权限创建，2.按策略语法创建，3.按策略生成器创建，4.按标签授权创建，5.按权限边界规则创建
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateMode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePolicy返回参数结构体
 * @class
 */
class CreatePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachRolePolicy请求参数结构体
 * @class
 */
class DetachRolePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID，入参PolicyId与PolicyName二选一
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 角色ID，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
         * @type {string || null}
         */
        this.DetachRoleId = null;

        /**
         * 角色名称，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
         * @type {string || null}
         */
        this.DetachRoleName = null;

        /**
         * 策略名，入参PolicyId与PolicyName二选一
         * @type {string || null}
         */
        this.PolicyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.DetachRoleId = 'DetachRoleId' in params ? params.DetachRoleId : null;
        this.DetachRoleName = 'DetachRoleName' in params ? params.DetachRoleName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;

    }
}

/**
 * UntagRole返回参数结构体
 * @class
 */
class UntagRoleResponse extends  AbstractModel {
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
 * ListPoliciesGrantingServiceAccess返回参数结构体
 * @class
 */
class ListPoliciesGrantingServiceAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
         * @type {Array.<ListGrantServiceAccessNode> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ListGrantServiceAccessNode();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRolePermissionsBoundary请求参数结构体
 * @class
 */
class DeleteRolePermissionsBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色ID（与角色名至少填一个）
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 角色名（与角色ID至少填一个）
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * 角色标签类型
 * @class
 */
class RoleTags extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值
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
 * DescribeUserOIDCConfig返回参数结构体
 * @class
 */
class DescribeUserOIDCConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份提供商类型。 12：用户OIDC身份提供商
         * @type {number || null}
         */
        this.ProviderType = null;

        /**
         * 身份提供商URL
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * 签名公钥
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * 客户端id
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * 状态：0:未设置，11:已开启，2:已禁用
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 授权请求Endpoint
         * @type {string || null}
         */
        this.AuthorizationEndpoint = null;

        /**
         * 授权请求Scope
         * @type {Array.<string> || null}
         */
        this.Scope = null;

        /**
         * 授权请求Response type
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * 授权请求Response mode
         * @type {string || null}
         */
        this.ResponseMode = null;

        /**
         * 映射字段名称
         * @type {string || null}
         */
        this.MappingFiled = null;

        /**
         * 描述
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
        this.ProviderType = 'ProviderType' in params ? params.ProviderType : null;
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AuthorizationEndpoint = 'AuthorizationEndpoint' in params ? params.AuthorizationEndpoint : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseMode = 'ResponseMode' in params ? params.ResponseMode : null;
        this.MappingFiled = 'MappingFiled' in params ? params.MappingFiled : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePolicy请求参数结构体
 * @class
 */
class DeletePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数组，数组成员是策略 id，支持批量删除策略
         * @type {Array.<number> || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * 用户组信息
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 ID。
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 用户组名称。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 用户组创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 用户组描述。
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * AddUser请求参数结构体
 * @class
 */
class AddUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户用户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子用户备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 子用户是否可以登录控制台。传0子用户无法登录控制台，传1子用户可以登录控制台。
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * 是否生成子用户密钥。传0不生成子用户密钥，传1生成子用户密钥。
         * @type {number || null}
         */
        this.UseApi = null;

        /**
         * 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大小写字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大小写字母、数字和特殊字符。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 子用户是否要在下次登录时重置密码。传0子用户下次登录控制台不需重置密码，传1子用户下次登录控制台需要重置密码。
         * @type {number || null}
         */
        this.NeedResetPassword = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 区号
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.UseApi = 'UseApi' in params ? params.UseApi : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NeedResetPassword = 'NeedResetPassword' in params ? params.NeedResetPassword : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * UpdateAssumeRolePolicy请求参数结构体
 * @class
 */
class UpdateAssumeRolePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * 登录和敏感操作flag
 * @class
 */
class LoginActionFlag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手机
         * @type {number || null}
         */
        this.Phone = null;

        /**
         * 硬token
         * @type {number || null}
         */
        this.Token = null;

        /**
         * 软token
         * @type {number || null}
         */
        this.Stoken = null;

        /**
         * 微信
         * @type {number || null}
         */
        this.Wechat = null;

        /**
         * 自定义
         * @type {number || null}
         */
        this.Custom = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Stoken = 'Stoken' in params ? params.Stoken : null;
        this.Wechat = 'Wechat' in params ? params.Wechat : null;
        this.Custom = 'Custom' in params ? params.Custom : null;

    }
}

/**
 * DeleteRole请求参数结构体
 * @class
 */
class DeleteRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * ListWeChatWorkSubAccounts请求参数结构体
 * @class
 */
class ListWeChatWorkSubAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
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
 * UpdateRoleConsoleLogin请求参数结构体
 * @class
 */
class UpdateRoleConsoleLoginRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否可登录，可登录：1，不可登录：0
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * 角色ID，入参 RoleId 与 RoleName 二选一
         * @type {number || null}
         */
        this.RoleId = null;

        /**
         * 角色名，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * UpdateUser返回参数结构体
 * @class
 */
class UpdateUserResponse extends  AbstractModel {
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
 * UpdateAssumeRolePolicy返回参数结构体
 * @class
 */
class UpdateAssumeRolePolicyResponse extends  AbstractModel {
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
 * GetPolicyVersion请求参数结构体
 * @class
 */
class GetPolicyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略版本号，可由ListPolicyVersions获取
         * @type {number || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * CreateSAMLProvider返回参数结构体
 * @class
 */
class CreateSAMLProviderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML身份提供商资源描述符
         * @type {string || null}
         */
        this.ProviderArn = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProviderArn = 'ProviderArn' in params ? params.ProviderArn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRolePermissionsBoundary返回参数结构体
 * @class
 */
class DeleteRolePermissionsBoundaryResponse extends  AbstractModel {
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
 * GetUser请求参数结构体
 * @class
 */
class GetUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户用户名
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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 登录和敏感操作flag
 * @class
 */
class LoginActionMfaFlag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手机
         * @type {number || null}
         */
        this.Phone = null;

        /**
         * 软token
         * @type {number || null}
         */
        this.Stoken = null;

        /**
         * 微信
         * @type {number || null}
         */
        this.Wechat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Stoken = 'Stoken' in params ? params.Stoken : null;
        this.Wechat = 'Wechat' in params ? params.Wechat : null;

    }
}

/**
 * 子用户信息
 * @class
 */
class SubAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户用户 ID
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 子用户用户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子用户 UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * 子用户备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 子用户能否登录控制台
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 区号
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NickName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.NickName = 'NickName' in params ? params.NickName : null;

    }
}

/**
 * CreateGroup请求参数结构体
 * @class
 */
class CreateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组名
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 用户组描述
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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * SAML身份提供商
 * @class
 */
class SAMLProviderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML身份提供商名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * SAML身份提供商描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * SAML身份提供商创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * SAML身份提供商上次修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * 用于ListPoliciesGrantingServiceAccess接口的Policy节点
 * @class
 */
class ListGrantServiceAccessPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 策略名
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 策略类型: Custom自定义策略，Presetting预设策略
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 策略描述
         * @type {string || null}
         */
        this.PolicyDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PolicyDescription = 'PolicyDescription' in params ? params.PolicyDescription : null;

    }
}

/**
 * DisableUserSSO请求参数结构体
 * @class
 */
class DisableUserSSORequest extends  AbstractModel {
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
 * ListPoliciesGrantingServiceAccess请求参数结构体
 * @class
 */
class ListPoliciesGrantingServiceAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子账号uin，与RoleId、GroupId三选一必传
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * 角色ID，与TargetUin、GroupId三选一必传
         * @type {number || null}
         */
        this.RoleId = null;

        /**
         * 用户组ID，与TargetUin、RoleId三选一必传
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 服务名，查看服务授权接口详情时需传该字段
         * @type {string || null}
         */
        this.ServiceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

    }
}

/**
 * UpdateSAMLProvider返回参数结构体
 * @class
 */
class UpdateSAMLProviderResponse extends  AbstractModel {
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
 * UpdateUser请求参数结构体
 * @class
 */
class UpdateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户用户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子用户备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 子用户是否可以登录控制台。传0子用户无法登录控制台，传1子用户可以登录控制台。
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大小写字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大小写字母、数字和特殊字符。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 子用户是否要在下次登录时重置密码。传0子用户下次登录控制台不需重置密码，传1子用户下次登录控制台需要重置密码。
         * @type {number || null}
         */
        this.NeedResetPassword = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 区号
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NeedResetPassword = 'NeedResetPassword' in params ? params.NeedResetPassword : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * ListWeChatWorkSubAccounts返回参数结构体
 * @class
 */
class ListWeChatWorkSubAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业微信子用户列表。
         * @type {Array.<WeChatWorkSubAccount> || null}
         */
        this.Data = null;

        /**
         * 总数目。
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new WeChatWorkSubAccount();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSAMLProvider请求参数结构体
 * @class
 */
class CreateSAMLProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML身份提供商名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * SAML身份提供商描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * SAML身份提供商Base64编码的元数据文档
         * @type {string || null}
         */
        this.SAMLMetadataDocument = null;

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
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;

    }
}

/**
 * 关联策略信息
 * @class
 */
class AttachPolicyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略id
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 创建来源，1 通过控制台创建, 2 通过策略语法创建。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateMode = null;

        /**
         * 取值为user和QCS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 策略备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 策略关联操作者主帐号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperateOwnerUin = null;

        /**
         * 策略关联操作者ID，如果UinType为0表示子帐号Uin，如果UinType为1表示角色ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * UinType为0表示OperateUin字段是子帐号Uin，如果UinType为1表示OperateUin字段是角色ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OperateUinType = null;

        /**
         * 是否已下线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Deactived = null;

        /**
         * 已下线的产品列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DeactivedDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OperateOwnerUin = 'OperateOwnerUin' in params ? params.OperateOwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.OperateUinType = 'OperateUinType' in params ? params.OperateUinType : null;
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;

    }
}

/**
 * DisableUserSSO返回参数结构体
 * @class
 */
class DisableUserSSOResponse extends  AbstractModel {
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
 * UpdateRoleConsoleLogin返回参数结构体
 * @class
 */
class UpdateRoleConsoleLoginResponse extends  AbstractModel {
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
 * AttachRolePolicy请求参数结构体
 * @class
 */
class AttachRolePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID，入参PolicyId与PolicyName二选一
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 角色ID，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
         * @type {string || null}
         */
        this.AttachRoleId = null;

        /**
         * 角色名称，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
         * @type {string || null}
         */
        this.AttachRoleName = null;

        /**
         * 策略名，入参PolicyId与PolicyName二选一
         * @type {string || null}
         */
        this.PolicyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttachRoleId = 'AttachRoleId' in params ? params.AttachRoleId : null;
        this.AttachRoleName = 'AttachRoleName' in params ? params.AttachRoleName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;

    }
}

/**
 * ConsumeCustomMFAToken返回参数结构体
 * @class
 */
class ConsumeCustomMFATokenResponse extends  AbstractModel {
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
 * AttachUserPolicy请求参数结构体
 * @class
 */
class AttachUserPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略 id
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 子账号 uin
         * @type {number || null}
         */
        this.AttachUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttachUin = 'AttachUin' in params ? params.AttachUin : null;

    }
}

/**
 * ListAttachedGroupPolicies返回参数结构体
 * @class
 */
class ListAttachedGroupPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略总数
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 策略列表
         * @type {Array.<AttachPolicyInfo> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachPolicyInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAttachedUserPolicies返回参数结构体
 * @class
 */
class ListAttachedUserPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略总数
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 策略列表
         * @type {Array.<AttachPolicyInfo> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachPolicyInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListGroups返回参数结构体
 * @class
 */
class ListGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组总数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 用户组数组信息。
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.GroupInfo) {
            this.GroupInfo = new Array();
            for (let z in params.GroupInfo) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfo[z]);
                this.GroupInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PutUserPermissionsBoundary返回参数结构体
 * @class
 */
class PutUserPermissionsBoundaryResponse extends  AbstractModel {
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
 * GetPolicyVersion返回参数结构体
 * @class
 */
class GetPolicyVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略版本详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PolicyVersionDetail || null}
         */
        this.PolicyVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PolicyVersion) {
            let obj = new PolicyVersionDetail();
            obj.deserialize(params.PolicyVersion)
            this.PolicyVersion = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCustomMFATokenInfo返回参数结构体
 * @class
 */
class GetCustomMFATokenInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义多因子验证Token对应的帐号Id
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ConsumeCustomMFAToken请求参数结构体
 * @class
 */
class ConsumeCustomMFATokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义多因子验证Token
         * @type {string || null}
         */
        this.MFAToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MFAToken = 'MFAToken' in params ? params.MFAToken : null;

    }
}

/**
 * CreateOIDCConfig请求参数结构体
 * @class
 */
class CreateOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份提供商URL
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * 签名公钥，需要base64
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * 客户端ID
         * @type {Array.<string> || null}
         */
        this.ClientId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

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
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 访问密钥列表
 * @class
 */
class AccessKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问密钥标识
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * 密钥状态，激活（Active）或未激活（Inactive）
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建时间
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
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * GetGroup返回参数结构体
 * @class
 */
class GetGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 用户组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 用户组成员数量
         * @type {number || null}
         */
        this.GroupNum = null;

        /**
         * 用户组描述
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 用户组创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 用户组成员信息
         * @type {Array.<GroupMemberInfo> || null}
         */
        this.UserInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new GroupMemberInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateOIDCConfig返回参数结构体
 * @class
 */
class UpdateOIDCConfigResponse extends  AbstractModel {
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
 * DeleteSAMLProvider请求参数结构体
 * @class
 */
class DeleteSAMLProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML身份提供商名称
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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DeleteSAMLProvider返回参数结构体
 * @class
 */
class DeleteSAMLProviderResponse extends  AbstractModel {
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
 * GetAccountSummary返回参数结构体
 * @class
 */
class GetAccountSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略数
         * @type {number || null}
         */
        this.Policies = null;

        /**
         * 角色数
         * @type {number || null}
         */
        this.Roles = null;

        /**
         * 身份提供商数
         * @type {number || null}
         */
        this.Idps = null;

        /**
         * 子账户数
         * @type {number || null}
         */
        this.User = null;

        /**
         * 分组数
         * @type {number || null}
         */
        this.Group = null;

        /**
         * 分组用户总数
         * @type {number || null}
         */
        this.Member = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Policies = 'Policies' in params ? params.Policies : null;
        this.Roles = 'Roles' in params ? params.Roles : null;
        this.Idps = 'Idps' in params ? params.Idps : null;
        this.User = 'User' in params ? params.User : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Member = 'Member' in params ? params.Member : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateServiceLinkedRole返回参数结构体
 * @class
 */
class CreateServiceLinkedRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色ID
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUsers请求参数结构体
 * @class
 */
class ListUsersRequest extends  AbstractModel {
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
 * ListCollaborators请求参数结构体
 * @class
 */
class ListCollaboratorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页条数，缺省为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页起始值，缺省为0
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateUserOIDCConfig请求参数结构体
 * @class
 */
class CreateUserOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份提供商URL。OpenID Connect身份提供商标识。
对应企业IdP提供的Openid-configuration中"issuer"字段的值。
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * 签名公钥，需要base64_encode。验证OpenID Connect身份提供商ID Token签名的公钥。为了您的帐号安全，建议您定期轮换签名公钥。
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * 客户端ID，在OpenID Connect身份提供商注册的客户端ID。
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * 授权请求Endpoint，OpenID Connect身份提供商授权地址。对应企业IdP提供的Openid-configuration中"authorization_endpoint"字段的值。
         * @type {string || null}
         */
        this.AuthorizationEndpoint = null;

        /**
         * 授权请求Response type，固定值id_token
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * 授权请求Response mode。授权请求返回模式，form_post和fragment两种可选模式，推荐选择form_post模式。
         * @type {string || null}
         */
        this.ResponseMode = null;

        /**
         * 映射字段名称。IdP的id_token中哪一个字段映射到子用户的用户名，通常是sub或者name字段
         * @type {string || null}
         */
        this.MappingFiled = null;

        /**
         * 授权请求Scope。openid; email;profile。授权请求信息范围。默认必选openid。
         * @type {Array.<string> || null}
         */
        this.Scope = null;

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
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.AuthorizationEndpoint = 'AuthorizationEndpoint' in params ? params.AuthorizationEndpoint : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseMode = 'ResponseMode' in params ? params.ResponseMode : null;
        this.MappingFiled = 'MappingFiled' in params ? params.MappingFiled : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * AttachGroupPolicy返回参数结构体
 * @class
 */
class AttachGroupPolicyResponse extends  AbstractModel {
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
 * UpdateGroup返回参数结构体
 * @class
 */
class UpdateGroupResponse extends  AbstractModel {
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
 * ListEntitiesForPolicy请求参数结构体
 * @class
 */
class ListEntitiesForPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略 id
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 页码，默认值是 1，从 1 开始
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页大小，默认值是 20
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * 可取值 'All'、'User'、'Group' 和 'Role'，'All' 表示获取所有实体类型，'User' 表示只获取子账号，'Group' 表示只获取用户组，'Role' 表示只获取角色，默认取 'All'
         * @type {string || null}
         */
        this.EntityFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.EntityFilter = 'EntityFilter' in params ? params.EntityFilter : null;

    }
}

/**
 * TagRole请求参数结构体
 * @class
 */
class TagRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签
         * @type {Array.<RoleTags> || null}
         */
        this.Tags = null;

        /**
         * 角色名，与角色ID至少输入一个
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 角色ID，与角色名至少输入一个
         * @type {string || null}
         */
        this.RoleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;

    }
}

/**
 * ListPolicies请求参数结构体
 * @class
 */
class ListPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页数量，默认值是 20，必须大于 0 且小于或等于 200
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * 页码，默认值是 1，从 1开始，不能大于 200
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 可取值 'All'、'QCS' 和 'Local'，'All' 获取所有策略，'QCS' 只获取预设策略，'Local' 只获取自定义策略，默认取 'All'
         * @type {string || null}
         */
        this.Scope = null;

        /**
         * 按策略名匹配
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
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * GetServiceLinkedRoleDeletionStatus请求参数结构体
 * @class
 */
class GetServiceLinkedRoleDeletionStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除任务ID
         * @type {string || null}
         */
        this.DeletionTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeletionTaskId = 'DeletionTaskId' in params ? params.DeletionTaskId : null;

    }
}

/**
 * ListGrantServiceAccessAction节点
 * @class
 */
class ListGrantServiceAccessActionNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 接口描述
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
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DetachGroupPolicy返回参数结构体
 * @class
 */
class DetachGroupPolicyResponse extends  AbstractModel {
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
 * 用户组用户信息
 * @class
 */
class GroupMemberInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户 Uid。
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * 子用户 Uin。
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 子用户名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 手机号。
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * 手机区域代码。
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * 是否已验证手机。0-未验证  1-验证
         * @type {number || null}
         */
        this.PhoneFlag = null;

        /**
         * 邮箱地址。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 是否已验证邮箱。0-未验证  1-验证
         * @type {number || null}
         */
        this.EmailFlag = null;

        /**
         * 用户类型。1-全局协作者 2-项目协作者 3-消息接收者
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否为主消息接收人。0-否 1-是
         * @type {number || null}
         */
        this.IsReceiverOwner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.PhoneFlag = 'PhoneFlag' in params ? params.PhoneFlag : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.EmailFlag = 'EmailFlag' in params ? params.EmailFlag : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsReceiverOwner = 'IsReceiverOwner' in params ? params.IsReceiverOwner : null;

    }
}

/**
 * CreatePolicy请求参数结构体
 * @class
 */
class CreatePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * 策略描述
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
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListAttachedUserAllPolicies请求参数结构体
 * @class
 */
class ListAttachedUserAllPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标用户ID
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * 每页数量，必须大于 0 且小于或等于 200
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * 页码，从 1开始，不能大于 200
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 0:返回直接关联和随组关联策略，1:只返回直接关联策略，2:只返回随组关联策略
         * @type {number || null}
         */
        this.AttachType = null;

        /**
         * 策略类型
         * @type {number || null}
         */
        this.StrategyType = null;

        /**
         * 搜索关键字
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
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.AttachType = 'AttachType' in params ? params.AttachType : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DeletePolicyVersion请求参数结构体
 * @class
 */
class DeletePolicyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略版本号
         * @type {Array.<number> || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * CreateUserSAMLConfig请求参数结构体
 * @class
 */
class CreateUserSAMLConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML元数据文档，需要base64 encode
         * @type {string || null}
         */
        this.SAMLMetadataDocument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;

    }
}

/**
 * UpdateGroup请求参数结构体
 * @class
 */
class UpdateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 用户组名
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 用户组描述
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 用于ListPoliciesGrantingServiceAccess接口的List节点
 * @class
 */
class ListGrantServiceAccessNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务
         * @type {ListGrantServiceAccessService || null}
         */
        this.Service = null;

        /**
         * 接口信息
         * @type {Array.<ListGrantServiceAccessActionNode> || null}
         */
        this.Action = null;

        /**
         * 授权的策略
         * @type {Array.<ListGrantServiceAccessPolicy> || null}
         */
        this.Policy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Service) {
            let obj = new ListGrantServiceAccessService();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.Action) {
            this.Action = new Array();
            for (let z in params.Action) {
                let obj = new ListGrantServiceAccessActionNode();
                obj.deserialize(params.Action[z]);
                this.Action.push(obj);
            }
        }

        if (params.Policy) {
            this.Policy = new Array();
            for (let z in params.Policy) {
                let obj = new ListGrantServiceAccessPolicy();
                obj.deserialize(params.Policy[z]);
                this.Policy.push(obj);
            }
        }

    }
}

/**
 * AttachGroupPolicy请求参数结构体
 * @class
 */
class AttachGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略 id
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 用户组 id
         * @type {number || null}
         */
        this.AttachGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttachGroupId = 'AttachGroupId' in params ? params.AttachGroupId : null;

    }
}

/**
 * UpdateOIDCConfig请求参数结构体
 * @class
 */
class UpdateOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份提供商URL
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * 签名公钥，需要base64
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * 客户端ID
         * @type {Array.<string> || null}
         */
        this.ClientId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

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
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CreateRole返回参数结构体
 * @class
 */
class CreateRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSAMLProvider返回参数结构体
 * @class
 */
class GetSAMLProviderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML身份提供商名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * SAML身份提供商描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * SAML身份提供商创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * SAML身份提供商上次修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * SAML身份提供商元数据文档
         * @type {string || null}
         */
        this.SAMLMetadata = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.SAMLMetadata = 'SAMLMetadata' in params ? params.SAMLMetadata : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSafeAuthFlagIntl返回参数结构体
 * @class
 */
class DescribeSafeAuthFlagIntlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 登录保护设置
         * @type {LoginActionFlagIntl || null}
         */
        this.LoginFlag = null;

        /**
         * 敏感操作保护设置
         * @type {LoginActionFlagIntl || null}
         */
        this.ActionFlag = null;

        /**
         * 异地登录保护设置
         * @type {OffsiteFlag || null}
         */
        this.OffsiteFlag = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoginFlag) {
            let obj = new LoginActionFlagIntl();
            obj.deserialize(params.LoginFlag)
            this.LoginFlag = obj;
        }

        if (params.ActionFlag) {
            let obj = new LoginActionFlagIntl();
            obj.deserialize(params.ActionFlag)
            this.ActionFlag = obj;
        }

        if (params.OffsiteFlag) {
            let obj = new OffsiteFlag();
            obj.deserialize(params.OffsiteFlag)
            this.OffsiteFlag = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListPolicyVersions返回参数结构体
 * @class
 */
class ListPolicyVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略版本列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PolicyVersionItem> || null}
         */
        this.Versions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Versions) {
            this.Versions = new Array();
            for (let z in params.Versions) {
                let obj = new PolicyVersionItem();
                obj.deserialize(params.Versions[z]);
                this.Versions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPolicy请求参数结构体
 * @class
 */
class GetPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略Id
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * DescribeSafeAuthFlagIntl请求参数结构体
 * @class
 */
class DescribeSafeAuthFlagIntlRequest extends  AbstractModel {
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
 * SetDefaultPolicyVersion请求参数结构体
 * @class
 */
class SetDefaultPolicyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略版本号，可由ListPolicyVersions获取
         * @type {number || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * UpdateUserOIDCConfig请求参数结构体
 * @class
 */
class UpdateUserOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份提供商URL。OpenID Connect身份提供商标识。
对应企业IdP提供的Openid-configuration中"issuer"字段的值。
         * @type {string || null}
         */
        this.IdentityUrl = null;

        /**
         * 签名公钥，需要base64_encode。验证OpenID Connect身份提供商ID Token签名的公钥。为了您的帐号安全，建议您定期轮换签名公钥。
         * @type {string || null}
         */
        this.IdentityKey = null;

        /**
         * 客户端ID，在OpenID Connect身份提供商注册的客户端ID。
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * 授权请求Endpoint，OpenID Connect身份提供商授权地址。对应企业IdP提供的Openid-configuration中"authorization_endpoint"字段的值。
         * @type {string || null}
         */
        this.AuthorizationEndpoint = null;

        /**
         * 授权请求Response type，固定值id_token。
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * 授权请求Response mode。授权请求返回模式，form_post和fragment两种可选模式，推荐选择form_post模式。
         * @type {string || null}
         */
        this.ResponseMode = null;

        /**
         * 映射字段名称。IdP的id_token中哪一个字段映射到子用户的用户名，通常是sub或者name字段
         * @type {string || null}
         */
        this.MappingFiled = null;

        /**
         * 授权请求Scope。openid; email;profile。授权请求信息范围。默认必选openid。
         * @type {Array.<string> || null}
         */
        this.Scope = null;

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
        this.IdentityUrl = 'IdentityUrl' in params ? params.IdentityUrl : null;
        this.IdentityKey = 'IdentityKey' in params ? params.IdentityKey : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.AuthorizationEndpoint = 'AuthorizationEndpoint' in params ? params.AuthorizationEndpoint : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseMode = 'ResponseMode' in params ? params.ResponseMode : null;
        this.MappingFiled = 'MappingFiled' in params ? params.MappingFiled : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * AddUserToGroup请求参数结构体
 * @class
 */
class AddUserToGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加的子用户 UIN/UID 和用户组 ID 关联关系
         * @type {Array.<GroupIdOfUidInfo> || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new GroupIdOfUidInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }

    }
}

/**
 * RemoveUserFromGroup返回参数结构体
 * @class
 */
class RemoveUserFromGroupResponse extends  AbstractModel {
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
 * DetachRolePolicy返回参数结构体
 * @class
 */
class DetachRolePolicyResponse extends  AbstractModel {
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
 * DescribeUserOIDCConfig请求参数结构体
 * @class
 */
class DescribeUserOIDCConfigRequest extends  AbstractModel {
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
 * CreateOIDCConfig返回参数结构体
 * @class
 */
class CreateOIDCConfigResponse extends  AbstractModel {
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
 * 角色关联的策略信息
 * @class
 */
class AttachedPolicyOfRole extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 绑定时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 策略类型，User表示自定义策略，QCS表示预设策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 策略创建方式，1表示按产品功能或项目权限创建，其他表示按策略语法创建
         * @type {number || null}
         */
        this.CreateMode = null;

        /**
         * 是否已下线(0:否 1:是)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Deactived = null;

        /**
         * 已下线的产品列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DeactivedDetail = null;

        /**
         * 策略描述
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * PutUserPermissionsBoundary请求参数结构体
 * @class
 */
class PutUserPermissionsBoundaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子账号Uin
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * 策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * ListSAMLProviders返回参数结构体
 * @class
 */
class ListSAMLProvidersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML身份提供商总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * SAML身份提供商列表
         * @type {Array.<SAMLProviderInfo> || null}
         */
        this.SAMLProviderSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SAMLProviderSet) {
            this.SAMLProviderSet = new Array();
            for (let z in params.SAMLProviderSet) {
                let obj = new SAMLProviderInfo();
                obj.deserialize(params.SAMLProviderSet[z]);
                this.SAMLProviderSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetDefaultPolicyVersion返回参数结构体
 * @class
 */
class SetDefaultPolicyVersionResponse extends  AbstractModel {
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
 * ListAttachedRolePolicies请求参数结构体
 * @class
 */
class ListAttachedRolePoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页码，从 1 开始
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页行数，不能大于200
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * 角色 ID。用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleId = null;

        /**
         * 角色名。用于指定角色，入参 RoleId 与 RoleName 二选一
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 按策略类型过滤，User表示仅查询自定义策略，QCS表示仅查询预设策略
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 搜索关键字
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
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * GetSAMLProvider请求参数结构体
 * @class
 */
class GetSAMLProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML身份提供商名称
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
        this.Name = 'Name' in params ? params.Name : null;

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
 * GetRole返回参数结构体
 * @class
 */
class GetRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色详情
         * @type {RoleInfo || null}
         */
        this.RoleInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RoleInfo) {
            let obj = new RoleInfo();
            obj.deserialize(params.RoleInfo)
            this.RoleInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRole请求参数结构体
 * @class
 */
class CreateRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色名称
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * 角色描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 是否允许登录 1 为允许 0 为不允许
         * @type {number || null}
         */
        this.ConsoleLogin = null;

        /**
         * 申请角色临时密钥的最长有效期限制(范围：0~43200)
         * @type {number || null}
         */
        this.SessionDuration = null;

        /**
         * 角色绑定标签
         * @type {Array.<RoleTags> || null}
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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.SessionDuration = 'SessionDuration' in params ? params.SessionDuration : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new RoleTags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 用户关联的策略详情
 * @class
 */
class AttachedUserPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 策略名
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 策略描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 策略类型(1表示自定义策略，2表示预设策略)
         * @type {string || null}
         */
        this.StrategyType = null;

        /**
         * 创建模式(1表示按产品或项目权限创建的策略，其他表示策略语法创建的策略)
         * @type {string || null}
         */
        this.CreateMode = null;

        /**
         * 随组关联信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AttachedUserPolicyGroupInfo> || null}
         */
        this.Groups = null;

        /**
         * 是否已下线(0:否 1:是)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Deactived = null;

        /**
         * 已下线的产品列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DeactivedDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new AttachedUserPolicyGroupInfo();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;

    }
}

/**
 * DeleteServiceLinkedRole返回参数结构体
 * @class
 */
class DeleteServiceLinkedRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除任务ID，可用于检查删除服务相关角色状态。
         * @type {string || null}
         */
        this.DeletionTaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeletionTaskId = 'DeletionTaskId' in params ? params.DeletionTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUsersForGroup返回参数结构体
 * @class
 */
class ListUsersForGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组关联的用户总数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 子用户信息。
         * @type {Array.<GroupMemberInfo> || null}
         */
        this.UserInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new GroupMemberInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPolicy返回参数结构体
 * @class
 */
class GetPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 策略描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 1 表示自定义策略，2 表示预设策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 策略文档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PresetAlias = null;

        /**
         * 是否服务相关策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsServiceLinkedRolePolicy = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.PresetAlias = 'PresetAlias' in params ? params.PresetAlias : null;
        this.IsServiceLinkedRolePolicy = 'IsServiceLinkedRolePolicy' in params ? params.IsServiceLinkedRolePolicy : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSafeAuthFlag请求参数结构体
 * @class
 */
class DescribeSafeAuthFlagRequest extends  AbstractModel {
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
 * DeleteServiceLinkedRole请求参数结构体
 * @class
 */
class DeleteServiceLinkedRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的服务相关角色的名称。
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * 策略关联的实体信息
 * @class
 */
class AttachEntityOfPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实体ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 实体名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实体Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 关联类型。1 用户关联 ； 2 用户组关联
         * @type {number || null}
         */
        this.RelatedType = null;

        /**
         * 策略关联时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttachmentTime = null;

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
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RelatedType = 'RelatedType' in params ? params.RelatedType : null;
        this.AttachmentTime = 'AttachmentTime' in params ? params.AttachmentTime : null;

    }
}

/**
 * DeleteOIDCConfig返回参数结构体
 * @class
 */
class DeleteOIDCConfigResponse extends  AbstractModel {
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
 * 策略版本详情
 * @class
 */
class PolicyVersionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VersionId = null;

        /**
         * 策略版本创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 是否是正在生效的版本。0表示不是，1表示是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsDefaultVersion = null;

        /**
         * 策略语法文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Document = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.IsDefaultVersion = 'IsDefaultVersion' in params ? params.IsDefaultVersion : null;
        this.Document = 'Document' in params ? params.Document : null;

    }
}

/**
 * AddUser返回参数结构体
 * @class
 */
class AddUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户 UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 子用户用户名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 如果输入参数组合为自动生成随机密码，则返回生成的密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 子用户密钥 ID
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * 子用户密钥 Key
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 子用户 UID
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于ListPoliciesGrantingServiceAccess接口的Service节点
 * @class
 */
class ListGrantServiceAccessService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * CreateUserSAMLConfig返回参数结构体
 * @class
 */
class CreateUserSAMLConfigResponse extends  AbstractModel {
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
 * DescribeSubAccounts返回参数结构体
 * @class
 */
class DescribeSubAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子用户列表
         * @type {Array.<SubAccountUser> || null}
         */
        this.SubAccounts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SubAccounts) {
            this.SubAccounts = new Array();
            for (let z in params.SubAccounts) {
                let obj = new SubAccountUser();
                obj.deserialize(params.SubAccounts[z]);
                this.SubAccounts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEntitiesForPolicy返回参数结构体
 * @class
 */
class ListEntitiesForPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实体总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 实体列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AttachEntityOfPolicy> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachEntityOfPolicy();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddUserToGroup返回参数结构体
 * @class
 */
class AddUserToGroupResponse extends  AbstractModel {
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
 * UpdateUserSAMLConfig返回参数结构体
 * @class
 */
class UpdateUserSAMLConfigResponse extends  AbstractModel {
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
 * DescribeSafeAuthFlagColl返回参数结构体
 * @class
 */
class DescribeSafeAuthFlagCollResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 登录保护设置
         * @type {LoginActionFlag || null}
         */
        this.LoginFlag = null;

        /**
         * 敏感操作保护设置
         * @type {LoginActionFlag || null}
         */
        this.ActionFlag = null;

        /**
         * 异地登录保护设置
         * @type {OffsiteFlag || null}
         */
        this.OffsiteFlag = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoginFlag) {
            let obj = new LoginActionFlag();
            obj.deserialize(params.LoginFlag)
            this.LoginFlag = obj;
        }

        if (params.ActionFlag) {
            let obj = new LoginActionFlag();
            obj.deserialize(params.ActionFlag)
            this.ActionFlag = obj;
        }

        if (params.OffsiteFlag) {
            let obj = new OffsiteFlag();
            obj.deserialize(params.OffsiteFlag)
            this.OffsiteFlag = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSafeAuthFlagColl请求参数结构体
 * @class
 */
class DescribeSafeAuthFlagCollRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子账号
         * @type {number || null}
         */
        this.SubUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubUin = 'SubUin' in params ? params.SubUin : null;

    }
}

/**
 * PutRolePermissionsBoundary返回参数结构体
 * @class
 */
class PutRolePermissionsBoundaryResponse extends  AbstractModel {
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
 * SetMfaFlag请求参数结构体
 * @class
 */
class SetMfaFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置用户的uin
         * @type {number || null}
         */
        this.OpUin = null;

        /**
         * 登录保护设置
         * @type {LoginActionMfaFlag || null}
         */
        this.LoginFlag = null;

        /**
         * 操作保护设置
         * @type {LoginActionMfaFlag || null}
         */
        this.ActionFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpUin = 'OpUin' in params ? params.OpUin : null;

        if (params.LoginFlag) {
            let obj = new LoginActionMfaFlag();
            obj.deserialize(params.LoginFlag)
            this.LoginFlag = obj;
        }

        if (params.ActionFlag) {
            let obj = new LoginActionMfaFlag();
            obj.deserialize(params.ActionFlag)
            this.ActionFlag = obj;
        }

    }
}

/**
 * ListCollaborators返回参数结构体
 * @class
 */
class ListCollaboratorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 协作者信息
         * @type {Array.<SubAccountInfo> || null}
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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SubAccountInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAccessKeys返回参数结构体
 * @class
 */
class ListAccessKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问密钥列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AccessKey> || null}
         */
        this.AccessKeys = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessKeys) {
            this.AccessKeys = new Array();
            for (let z in params.AccessKeys) {
                let obj = new AccessKey();
                obj.deserialize(params.AccessKeys[z]);
                this.AccessKeys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSecurityLastUsed返回参数结构体
 * @class
 */
class GetSecurityLastUsedResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥ID最近访问列表
         * @type {Array.<SecretIdLastUsed> || null}
         */
        this.SecretIdLastUsedRows = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecretIdLastUsedRows) {
            this.SecretIdLastUsedRows = new Array();
            for (let z in params.SecretIdLastUsedRows) {
                let obj = new SecretIdLastUsed();
                obj.deserialize(params.SecretIdLastUsedRows[z]);
                this.SecretIdLastUsedRows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAttachedUserPolicies请求参数结构体
 * @class
 */
class ListAttachedUserPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子账号 uin
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * 页码，默认值是 1，从 1 开始
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页大小，默认值是 20
         * @type {number || null}
         */
        this.Rp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;

    }
}

/**
 * UpdatePolicy请求参数结构体
 * @class
 */
class UpdatePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID，与PolicyName二选一必填
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略名，与PolicyId二选一必填
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 策略描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * 预设策略备注
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * DeleteOIDCConfig请求参数结构体
 * @class
 */
class DeleteOIDCConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * OIDC身份提供商名称
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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * UntagRole请求参数结构体
 * @class
 */
class UntagRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 角色名，与角色ID至少输入一个
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 角色ID，与角色名至少输入一个
         * @type {string || null}
         */
        this.RoleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;

    }
}

/**
 * CreateGroup返回参数结构体
 * @class
 */
class CreateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SubAccountUser: SubAccountUser,
    ListAttachedRolePoliciesResponse: ListAttachedRolePoliciesResponse,
    LoginActionFlagIntl: LoginActionFlagIntl,
    UpdateUserOIDCConfigResponse: UpdateUserOIDCConfigResponse,
    ListAccessKeysRequest: ListAccessKeysRequest,
    SetMfaFlagResponse: SetMfaFlagResponse,
    UpdateSAMLProviderRequest: UpdateSAMLProviderRequest,
    DeleteUserRequest: DeleteUserRequest,
    DetachGroupPolicyRequest: DetachGroupPolicyRequest,
    DescribeRoleListResponse: DescribeRoleListResponse,
    UpdatePolicyResponse: UpdatePolicyResponse,
    DeleteUserResponse: DeleteUserResponse,
    GetRoleRequest: GetRoleRequest,
    CreateServiceLinkedRoleRequest: CreateServiceLinkedRoleRequest,
    ListAttachedGroupPoliciesRequest: ListAttachedGroupPoliciesRequest,
    ListGroupsForUserRequest: ListGroupsForUserRequest,
    AttachRolePolicyResponse: AttachRolePolicyResponse,
    GetUserPermissionBoundaryRequest: GetUserPermissionBoundaryRequest,
    DescribeOIDCConfigRequest: DescribeOIDCConfigRequest,
    GetRolePermissionBoundaryRequest: GetRolePermissionBoundaryRequest,
    GetServiceLinkedRoleDeletionStatusResponse: GetServiceLinkedRoleDeletionStatusResponse,
    GetSecurityLastUsedRequest: GetSecurityLastUsedRequest,
    DescribeUserSAMLConfigResponse: DescribeUserSAMLConfigResponse,
    DeleteUserPermissionsBoundaryResponse: DeleteUserPermissionsBoundaryResponse,
    ListUsersResponse: ListUsersResponse,
    UpdateRoleDescriptionResponse: UpdateRoleDescriptionResponse,
    GetAccountSummaryRequest: GetAccountSummaryRequest,
    DeletePolicyResponse: DeletePolicyResponse,
    GetUserAppIdResponse: GetUserAppIdResponse,
    GetUserAppIdRequest: GetUserAppIdRequest,
    DescribeOIDCConfigResponse: DescribeOIDCConfigResponse,
    ListPolicyVersionsRequest: ListPolicyVersionsRequest,
    GetCustomMFATokenInfoRequest: GetCustomMFATokenInfoRequest,
    DescribeRoleListRequest: DescribeRoleListRequest,
    DescribeUserSAMLConfigRequest: DescribeUserSAMLConfigRequest,
    TagRoleResponse: TagRoleResponse,
    PutRolePermissionsBoundaryRequest: PutRolePermissionsBoundaryRequest,
    GetGroupRequest: GetGroupRequest,
    StrategyInfo: StrategyInfo,
    DeleteRoleResponse: DeleteRoleResponse,
    PolicyVersionItem: PolicyVersionItem,
    DetachUserPolicyRequest: DetachUserPolicyRequest,
    DescribeSubAccountsRequest: DescribeSubAccountsRequest,
    DeleteUserPermissionsBoundaryRequest: DeleteUserPermissionsBoundaryRequest,
    ListSAMLProvidersRequest: ListSAMLProvidersRequest,
    ListGroupsRequest: ListGroupsRequest,
    DeletePolicyVersionResponse: DeletePolicyVersionResponse,
    GetRolePermissionBoundaryResponse: GetRolePermissionBoundaryResponse,
    AttachedUserPolicyGroupInfo: AttachedUserPolicyGroupInfo,
    ListGroupsForUserResponse: ListGroupsForUserResponse,
    ListUsersForGroupRequest: ListUsersForGroupRequest,
    RemoveUserFromGroupRequest: RemoveUserFromGroupRequest,
    CreatePolicyVersionResponse: CreatePolicyVersionResponse,
    ListPoliciesResponse: ListPoliciesResponse,
    WeChatWorkSubAccount: WeChatWorkSubAccount,
    OffsiteFlag: OffsiteFlag,
    GroupIdOfUidInfo: GroupIdOfUidInfo,
    UpdateRoleDescriptionRequest: UpdateRoleDescriptionRequest,
    UpdateUserSAMLConfigRequest: UpdateUserSAMLConfigRequest,
    DeleteGroupResponse: DeleteGroupResponse,
    RoleInfo: RoleInfo,
    DescribeSafeAuthFlagResponse: DescribeSafeAuthFlagResponse,
    CreatePolicyVersionRequest: CreatePolicyVersionRequest,
    SecretIdLastUsed: SecretIdLastUsed,
    CreateUserOIDCConfigResponse: CreateUserOIDCConfigResponse,
    ListAttachedUserAllPoliciesResponse: ListAttachedUserAllPoliciesResponse,
    DeleteGroupRequest: DeleteGroupRequest,
    GetUserResponse: GetUserResponse,
    GetUserPermissionBoundaryResponse: GetUserPermissionBoundaryResponse,
    CreatePolicyResponse: CreatePolicyResponse,
    DetachRolePolicyRequest: DetachRolePolicyRequest,
    UntagRoleResponse: UntagRoleResponse,
    ListPoliciesGrantingServiceAccessResponse: ListPoliciesGrantingServiceAccessResponse,
    DeleteRolePermissionsBoundaryRequest: DeleteRolePermissionsBoundaryRequest,
    RoleTags: RoleTags,
    DescribeUserOIDCConfigResponse: DescribeUserOIDCConfigResponse,
    DeletePolicyRequest: DeletePolicyRequest,
    GroupInfo: GroupInfo,
    AddUserRequest: AddUserRequest,
    UpdateAssumeRolePolicyRequest: UpdateAssumeRolePolicyRequest,
    LoginActionFlag: LoginActionFlag,
    DeleteRoleRequest: DeleteRoleRequest,
    ListWeChatWorkSubAccountsRequest: ListWeChatWorkSubAccountsRequest,
    UpdateRoleConsoleLoginRequest: UpdateRoleConsoleLoginRequest,
    UpdateUserResponse: UpdateUserResponse,
    UpdateAssumeRolePolicyResponse: UpdateAssumeRolePolicyResponse,
    GetPolicyVersionRequest: GetPolicyVersionRequest,
    CreateSAMLProviderResponse: CreateSAMLProviderResponse,
    DeleteRolePermissionsBoundaryResponse: DeleteRolePermissionsBoundaryResponse,
    GetUserRequest: GetUserRequest,
    LoginActionMfaFlag: LoginActionMfaFlag,
    SubAccountInfo: SubAccountInfo,
    CreateGroupRequest: CreateGroupRequest,
    SAMLProviderInfo: SAMLProviderInfo,
    ListGrantServiceAccessPolicy: ListGrantServiceAccessPolicy,
    DisableUserSSORequest: DisableUserSSORequest,
    ListPoliciesGrantingServiceAccessRequest: ListPoliciesGrantingServiceAccessRequest,
    UpdateSAMLProviderResponse: UpdateSAMLProviderResponse,
    UpdateUserRequest: UpdateUserRequest,
    ListWeChatWorkSubAccountsResponse: ListWeChatWorkSubAccountsResponse,
    CreateSAMLProviderRequest: CreateSAMLProviderRequest,
    AttachPolicyInfo: AttachPolicyInfo,
    DisableUserSSOResponse: DisableUserSSOResponse,
    UpdateRoleConsoleLoginResponse: UpdateRoleConsoleLoginResponse,
    AttachRolePolicyRequest: AttachRolePolicyRequest,
    ConsumeCustomMFATokenResponse: ConsumeCustomMFATokenResponse,
    AttachUserPolicyRequest: AttachUserPolicyRequest,
    ListAttachedGroupPoliciesResponse: ListAttachedGroupPoliciesResponse,
    ListAttachedUserPoliciesResponse: ListAttachedUserPoliciesResponse,
    ListGroupsResponse: ListGroupsResponse,
    PutUserPermissionsBoundaryResponse: PutUserPermissionsBoundaryResponse,
    GetPolicyVersionResponse: GetPolicyVersionResponse,
    GetCustomMFATokenInfoResponse: GetCustomMFATokenInfoResponse,
    ConsumeCustomMFATokenRequest: ConsumeCustomMFATokenRequest,
    CreateOIDCConfigRequest: CreateOIDCConfigRequest,
    AccessKey: AccessKey,
    GetGroupResponse: GetGroupResponse,
    UpdateOIDCConfigResponse: UpdateOIDCConfigResponse,
    DeleteSAMLProviderRequest: DeleteSAMLProviderRequest,
    DeleteSAMLProviderResponse: DeleteSAMLProviderResponse,
    GetAccountSummaryResponse: GetAccountSummaryResponse,
    CreateServiceLinkedRoleResponse: CreateServiceLinkedRoleResponse,
    ListUsersRequest: ListUsersRequest,
    ListCollaboratorsRequest: ListCollaboratorsRequest,
    CreateUserOIDCConfigRequest: CreateUserOIDCConfigRequest,
    AttachGroupPolicyResponse: AttachGroupPolicyResponse,
    UpdateGroupResponse: UpdateGroupResponse,
    ListEntitiesForPolicyRequest: ListEntitiesForPolicyRequest,
    TagRoleRequest: TagRoleRequest,
    ListPoliciesRequest: ListPoliciesRequest,
    GetServiceLinkedRoleDeletionStatusRequest: GetServiceLinkedRoleDeletionStatusRequest,
    ListGrantServiceAccessActionNode: ListGrantServiceAccessActionNode,
    DetachGroupPolicyResponse: DetachGroupPolicyResponse,
    GroupMemberInfo: GroupMemberInfo,
    CreatePolicyRequest: CreatePolicyRequest,
    ListAttachedUserAllPoliciesRequest: ListAttachedUserAllPoliciesRequest,
    DeletePolicyVersionRequest: DeletePolicyVersionRequest,
    CreateUserSAMLConfigRequest: CreateUserSAMLConfigRequest,
    UpdateGroupRequest: UpdateGroupRequest,
    ListGrantServiceAccessNode: ListGrantServiceAccessNode,
    AttachGroupPolicyRequest: AttachGroupPolicyRequest,
    UpdateOIDCConfigRequest: UpdateOIDCConfigRequest,
    CreateRoleResponse: CreateRoleResponse,
    GetSAMLProviderResponse: GetSAMLProviderResponse,
    DescribeSafeAuthFlagIntlResponse: DescribeSafeAuthFlagIntlResponse,
    ListPolicyVersionsResponse: ListPolicyVersionsResponse,
    GetPolicyRequest: GetPolicyRequest,
    DescribeSafeAuthFlagIntlRequest: DescribeSafeAuthFlagIntlRequest,
    SetDefaultPolicyVersionRequest: SetDefaultPolicyVersionRequest,
    UpdateUserOIDCConfigRequest: UpdateUserOIDCConfigRequest,
    AddUserToGroupRequest: AddUserToGroupRequest,
    RemoveUserFromGroupResponse: RemoveUserFromGroupResponse,
    DetachRolePolicyResponse: DetachRolePolicyResponse,
    DescribeUserOIDCConfigRequest: DescribeUserOIDCConfigRequest,
    CreateOIDCConfigResponse: CreateOIDCConfigResponse,
    AttachedPolicyOfRole: AttachedPolicyOfRole,
    PutUserPermissionsBoundaryRequest: PutUserPermissionsBoundaryRequest,
    ListSAMLProvidersResponse: ListSAMLProvidersResponse,
    SetDefaultPolicyVersionResponse: SetDefaultPolicyVersionResponse,
    ListAttachedRolePoliciesRequest: ListAttachedRolePoliciesRequest,
    GetSAMLProviderRequest: GetSAMLProviderRequest,
    DetachUserPolicyResponse: DetachUserPolicyResponse,
    GetRoleResponse: GetRoleResponse,
    CreateRoleRequest: CreateRoleRequest,
    AttachedUserPolicy: AttachedUserPolicy,
    DeleteServiceLinkedRoleResponse: DeleteServiceLinkedRoleResponse,
    ListUsersForGroupResponse: ListUsersForGroupResponse,
    GetPolicyResponse: GetPolicyResponse,
    DescribeSafeAuthFlagRequest: DescribeSafeAuthFlagRequest,
    DeleteServiceLinkedRoleRequest: DeleteServiceLinkedRoleRequest,
    AttachEntityOfPolicy: AttachEntityOfPolicy,
    DeleteOIDCConfigResponse: DeleteOIDCConfigResponse,
    PolicyVersionDetail: PolicyVersionDetail,
    AddUserResponse: AddUserResponse,
    ListGrantServiceAccessService: ListGrantServiceAccessService,
    CreateUserSAMLConfigResponse: CreateUserSAMLConfigResponse,
    DescribeSubAccountsResponse: DescribeSubAccountsResponse,
    ListEntitiesForPolicyResponse: ListEntitiesForPolicyResponse,
    AddUserToGroupResponse: AddUserToGroupResponse,
    UpdateUserSAMLConfigResponse: UpdateUserSAMLConfigResponse,
    AttachUserPolicyResponse: AttachUserPolicyResponse,
    DescribeSafeAuthFlagCollResponse: DescribeSafeAuthFlagCollResponse,
    DescribeSafeAuthFlagCollRequest: DescribeSafeAuthFlagCollRequest,
    PutRolePermissionsBoundaryResponse: PutRolePermissionsBoundaryResponse,
    SetMfaFlagRequest: SetMfaFlagRequest,
    ListCollaboratorsResponse: ListCollaboratorsResponse,
    ListAccessKeysResponse: ListAccessKeysResponse,
    GetSecurityLastUsedResponse: GetSecurityLastUsedResponse,
    ListAttachedUserPoliciesRequest: ListAttachedUserPoliciesRequest,
    UpdatePolicyRequest: UpdatePolicyRequest,
    DeleteOIDCConfigRequest: DeleteOIDCConfigRequest,
    UntagRoleRequest: UntagRoleRequest,
    CreateGroupResponse: CreateGroupResponse,

}
