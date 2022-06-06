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
 * 关系策略权限
 * @class
 */
class OrgPermission extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 权限名
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 成员管理身份
 * @class
 */
class MemberIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * 身份名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdentityAliasName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityAliasName = 'IdentityAliasName' in params ? params.IdentityAliasName : null;

    }
}

/**
 * DescribeOrganization返回参数结构体
 * @class
 */
class DescribeOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业组织ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * 创建者UIN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HostUin = null;

        /**
         * 创建者昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 企业组织类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OrgType = null;

        /**
         * 组织管理员：true，组织成员：false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsManager = null;

        /**
         * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgPolicyType = null;

        /**
         * 策略名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgPolicyName = null;

        /**
         * 策略权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgPermission> || null}
         */
        this.OrgPermission = null;

        /**
         * 根节点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootNodeId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 成员加入时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JoinTime = null;

        /**
         * 是否允许退出。允许：Allow，不允许：Denied。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsAllowQuit = null;

        /**
         * 代付者Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * 代付者名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.HostUin = 'HostUin' in params ? params.HostUin : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.IsManager = 'IsManager' in params ? params.IsManager : null;
        this.OrgPolicyType = 'OrgPolicyType' in params ? params.OrgPolicyType : null;
        this.OrgPolicyName = 'OrgPolicyName' in params ? params.OrgPolicyName : null;

        if (params.OrgPermission) {
            this.OrgPermission = new Array();
            for (let z in params.OrgPermission) {
                let obj = new OrgPermission();
                obj.deserialize(params.OrgPermission[z]);
                this.OrgPermission.push(obj);
            }
        }
        this.RootNodeId = 'RootNodeId' in params ? params.RootNodeId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;
        this.IsAllowQuit = 'IsAllowQuit' in params ? params.IsAllowQuit : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.PayName = 'PayName' in params ? params.PayName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindOrganizationMemberAuthAccount请求参数结构体
 * @class
 */
class BindOrganizationMemberAuthAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成员Uin。
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * 策略ID。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 组织子账号Uin。
         * @type {Array.<number> || null}
         */
        this.OrgSubAccountUins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.OrgSubAccountUins = 'OrgSubAccountUins' in params ? params.OrgSubAccountUins : null;

    }
}

/**
 * CreateOrganizationMember请求参数结构体
 * @class
 */
class CreateOrganizationMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 关系策略  取值：Financial
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 关系权限 取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票 ，1、2 默认必须
         * @type {Array.<number> || null}
         */
        this.PermissionIds = null;

        /**
         * 成员所属部门的节点ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 账号名
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 重试创建传记录ID
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 代付者Uin
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * 管理身份
         * @type {Array.<number> || null}
         */
        this.IdentityRoleID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PermissionIds = 'PermissionIds' in params ? params.PermissionIds : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.IdentityRoleID = 'IdentityRoleID' in params ? params.IdentityRoleID : null;

    }
}

/**
 * DescribeOrganizationMembers返回参数结构体
 * @class
 */
class DescribeOrganizationMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成员列表
         * @type {Array.<OrgMember> || null}
         */
        this.Items = null;

        /**
         * 总数目
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrgMember();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrganizationMembers请求参数结构体
 * @class
 */
class DescribeOrganizationMembersRequest extends  AbstractModel {
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

        /**
         * 国际站：en，国内站：zh
         * @type {string || null}
         */
        this.Lang = null;

        /**
         * 成员名或者成员ID搜索
         * @type {string || null}
         */
        this.SearchKey = null;

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
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * 企业组织成员
 * @class
 */
class OrgMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成员Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * 成员名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 成员类型，邀请：Invite， 创建：Create
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemberType = null;

        /**
         * 关系策略类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgPolicyType = null;

        /**
         * 关系策略名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgPolicyName = null;

        /**
         * 关系策略权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgPermission> || null}
         */
        this.OrgPermission = null;

        /**
         * 所属节点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 所属节点名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
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
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 是否允许成员退出。允许：Allow，不允许：Denied。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsAllowQuit = null;

        /**
         * 代付者Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * 代付者名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * 管理身份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MemberIdentity> || null}
         */
        this.OrgIdentity = null;

        /**
         * 安全信息绑定状态  未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BindStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MemberType = 'MemberType' in params ? params.MemberType : null;
        this.OrgPolicyType = 'OrgPolicyType' in params ? params.OrgPolicyType : null;
        this.OrgPolicyName = 'OrgPolicyName' in params ? params.OrgPolicyName : null;

        if (params.OrgPermission) {
            this.OrgPermission = new Array();
            for (let z in params.OrgPermission) {
                let obj = new OrgPermission();
                obj.deserialize(params.OrgPermission[z]);
                this.OrgPermission.push(obj);
            }
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IsAllowQuit = 'IsAllowQuit' in params ? params.IsAllowQuit : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.PayName = 'PayName' in params ? params.PayName : null;

        if (params.OrgIdentity) {
            this.OrgIdentity = new Array();
            for (let z in params.OrgIdentity) {
                let obj = new MemberIdentity();
                obj.deserialize(params.OrgIdentity[z]);
                this.OrgIdentity.push(obj);
            }
        }
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;

    }
}

/**
 * CreateOrganizationMemberPolicy返回参数结构体
 * @class
 */
class CreateOrganizationMemberPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID。
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
 * CreateOrganizationMemberPolicy请求参数结构体
 * @class
 */
class CreateOrganizationMemberPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成员Uin。
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * 策略名。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 身份ID。
         * @type {number || null}
         */
        this.IdentityId = null;

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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeOrganization请求参数结构体
 * @class
 */
class DescribeOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国际站：en，国内站：zh
         * @type {string || null}
         */
        this.Lang = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Lang = 'Lang' in params ? params.Lang : null;

    }
}

/**
 * BindOrganizationMemberAuthAccount返回参数结构体
 * @class
 */
class BindOrganizationMemberAuthAccountResponse extends  AbstractModel {
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
 * CreateOrganizationMember返回参数结构体
 * @class
 */
class CreateOrganizationMemberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成员Uin
注意：此字段可能返回 null，表示取不到有效值。
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

module.exports = {
    OrgPermission: OrgPermission,
    MemberIdentity: MemberIdentity,
    DescribeOrganizationResponse: DescribeOrganizationResponse,
    BindOrganizationMemberAuthAccountRequest: BindOrganizationMemberAuthAccountRequest,
    CreateOrganizationMemberRequest: CreateOrganizationMemberRequest,
    DescribeOrganizationMembersResponse: DescribeOrganizationMembersResponse,
    DescribeOrganizationMembersRequest: DescribeOrganizationMembersRequest,
    OrgMember: OrgMember,
    CreateOrganizationMemberPolicyResponse: CreateOrganizationMemberPolicyResponse,
    CreateOrganizationMemberPolicyRequest: CreateOrganizationMemberPolicyRequest,
    DescribeOrganizationRequest: DescribeOrganizationRequest,
    BindOrganizationMemberAuthAccountResponse: BindOrganizationMemberAuthAccountResponse,
    CreateOrganizationMemberResponse: CreateOrganizationMemberResponse,

}
