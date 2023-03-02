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
 * DescribeOrganizationAuthNode返回参数结构体
 * @class
 */
class DescribeOrganizationAuthNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 条目详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuthNode> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AuthNode();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

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
         * 策略ID。可以调用DescribeOrganizationMemberPolicies获取
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 组织管理员子账号Uin列表。最大5个
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
 * DeleteOrganizationMembers返回参数结构体
 * @class
 */
class DeleteOrganizationMembersResponse extends  AbstractModel {
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

        /**
         * 成员权限状态 已确认：Confirmed ，待确认：UnConfirmed
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PermissionStatus = null;

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
        this.PermissionStatus = 'PermissionStatus' in params ? params.PermissionStatus : null;

    }
}

/**
 * DescribeOrganizationMemberAuthIdentities请求参数结构体
 * @class
 */
class DescribeOrganizationMemberAuthIdentitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目。最大50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 组织成员Uin。
         * @type {number || null}
         */
        this.MemberUin = null;

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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

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
         * 策略名。最大长度为128个字符，支持英文字母、数字、符号+=,.@_-
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 成员访问身份ID。可以调用DescribeOrganizationMemberAuthIdentities获取
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

        /**
         * 可信服务产品简称。查询是否该可信服务管理员时必须指定
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeOrganizationNodes请求参数结构体
 * @class
 */
class DescribeOrganizationNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限制数目。最大50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量。
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
         * 成员Uin。
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

/**
 * MoveOrganizationNodeMembers请求参数结构体
 * @class
 */
class MoveOrganizationNodeMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织节点ID。
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 成员UIN列表。
         * @type {Array.<number> || null}
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * ListOrganizationIdentity请求参数结构体
 * @class
 */
class ListOrganizationIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目。最大50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 名称搜索关键字。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 身份ID搜索。
         * @type {number || null}
         */
        this.IdentityId = null;

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
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;

    }
}

/**
 * 互信主体主要信息
 * @class
 */
class AuthNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 互信主体关系ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RelationId = null;

        /**
         * 互信主体名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthName = null;

        /**
         * 主体管理员
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MemberMainInfo || null}
         */
        this.Manager = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RelationId = 'RelationId' in params ? params.RelationId : null;
        this.AuthName = 'AuthName' in params ? params.AuthName : null;

        if (params.Manager) {
            let obj = new MemberMainInfo();
            obj.deserialize(params.Manager)
            this.Manager = obj;
        }

    }
}

/**
 * MoveOrganizationNodeMembers返回参数结构体
 * @class
 */
class MoveOrganizationNodeMembersResponse extends  AbstractModel {
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
 * DeleteOrganizationMembers请求参数结构体
 * @class
 */
class DeleteOrganizationMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被删除成员的UIN列表。
         * @type {Array.<number> || null}
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * DescribeOrganizationMemberPolicies返回参数结构体
 * @class
 */
class DescribeOrganizationMemberPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgMemberPolicy> || null}
         */
        this.Items = null;

        /**
         * 总数目。
注意：此字段可能返回 null，表示取不到有效值。
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
                let obj = new OrgMemberPolicy();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOrganizationNodes请求参数结构体
 * @class
 */
class DeleteOrganizationNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID列表。
         * @type {Array.<number> || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * AddOrganizationNode返回参数结构体
 * @class
 */
class AddOrganizationNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID。
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 组织身份策略
 * @class
 */
class IdentityPolicy extends  AbstractModel {
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

    }
}

/**
 * ListOrganizationIdentity返回参数结构体
 * @class
 */
class ListOrganizationIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 条目详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgIdentity> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrgIdentity();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrganizationNodes返回参数结构体
 * @class
 */
class DescribeOrganizationNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 列表详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgNode> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrgNode();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 成员列表。
         * @type {Array.<OrgMember> || null}
         */
        this.Items = null;

        /**
         * 总数目。
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
 * CancelOrganizationMemberAuthAccount返回参数结构体
 * @class
 */
class CancelOrganizationMemberAuthAccountResponse extends  AbstractModel {
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
 * DescribeOrganization返回参数结构体
 * @class
 */
class DescribeOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业组织ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * 创建者UIN。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HostUin = null;

        /**
         * 创建者昵称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 企业组织类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OrgType = null;

        /**
         * 是否组织管理员。是：true ，否：false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsManager = null;

        /**
         * 策略类型。财务管理：Financial
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgPolicyType = null;

        /**
         * 策略名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgPolicyName = null;

        /**
         * 成员财务权限列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgPermission> || null}
         */
        this.OrgPermission = null;

        /**
         * 组织根节点ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootNodeId = null;

        /**
         * 组织创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 成员加入时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JoinTime = null;

        /**
         * 成员是否允许退出。允许：Allow，不允许：Denied
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsAllowQuit = null;

        /**
         * 代付者Uin。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * 代付者名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * 是否可信服务管理员。是：true，否：false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsAssignManager = null;

        /**
         * 是否实名主体管理员。是：true，否：false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsAuthManager = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.IsAssignManager = 'IsAssignManager' in params ? params.IsAssignManager : null;
        this.IsAuthManager = 'IsAuthManager' in params ? params.IsAuthManager : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrganizationMemberPolicies请求参数结构体
 * @class
 */
class DescribeOrganizationMemberPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目。最大50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 成员Uin。
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * 搜索关键字。可用于策略名或描述搜索
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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * AddOrganizationNode请求参数结构体
 * @class
 */
class AddOrganizationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 父节点ID。可以调用DescribeOrganizationNodes获取
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]-
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注。
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
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeOrganizationMemberAuthIdentities返回参数结构体
 * @class
 */
class DescribeOrganizationMemberAuthIdentitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgMemberAuthIdentity> || null}
         */
        this.Items = null;

        /**
         * 总数目。
注意：此字段可能返回 null，表示取不到有效值。
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
                let obj = new OrgMemberAuthIdentity();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 组织成员被授权的策略
 * @class
 */
class OrgMemberPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 身份ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * 身份角色名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * 身份角色别名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

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
        this.CreateTime = null;

        /**
         * 更新时间。
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
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeOrganizationAuthNode请求参数结构体
 * @class
 */
class DescribeOrganizationAuthNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目。最大50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 互信主体名称。
         * @type {string || null}
         */
        this.AuthName = null;

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
        this.AuthName = 'AuthName' in params ? params.AuthName : null;

    }
}

/**
 * UpdateOrganizationNode返回参数结构体
 * @class
 */
class UpdateOrganizationNodeResponse extends  AbstractModel {
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
 * DescribeOrganizationMemberAuthAccounts请求参数结构体
 * @class
 */
class DescribeOrganizationMemberAuthAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目。
         * @type {number || null}
         */
        this.Limit = null;

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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * CancelOrganizationMemberAuthAccount请求参数结构体
 * @class
 */
class CancelOrganizationMemberAuthAccountRequest extends  AbstractModel {
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
         * @type {number || null}
         */
        this.OrgSubAccountUin = null;

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
        this.OrgSubAccountUin = 'OrgSubAccountUin' in params ? params.OrgSubAccountUin : null;

    }
}

/**
 * DeleteOrganizationNodes返回参数结构体
 * @class
 */
class DeleteOrganizationNodesResponse extends  AbstractModel {
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
 * DescribeOrganizationMemberAuthAccounts返回参数结构体
 * @class
 */
class DescribeOrganizationMemberAuthAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrgMemberAuthAccount> || null}
         */
        this.Items = null;

        /**
         * 总数目
注意：此字段可能返回 null，表示取不到有效值。
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
                let obj = new OrgMemberAuthAccount();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 成员和子账号的授权关系
 * @class
 */
class OrgMemberAuthAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织子账号Uin。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OrgSubAccountUin = null;

        /**
         * 策略ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 策略名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 身份ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * 身份角色名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * 身份角色别名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 子账号名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrgSubAccountName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgSubAccountUin = 'OrgSubAccountUin' in params ? params.OrgSubAccountUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.OrgSubAccountName = 'OrgSubAccountName' in params ? params.OrgSubAccountName : null;

    }
}

/**
 * 组织成员可授权的身份
 * @class
 */
class OrgMemberAuthIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * 身份角色名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * 身份角色别名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间。
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
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 成员主要信息
 * @class
 */
class MemberMainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成员uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * 成员名称j
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemberName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;

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
         * 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 关系策略。取值：Financial
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 成员财务权限ID列表。取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费，1、2 默认必须
         * @type {Array.<number> || null}
         */
        this.PermissionIds = null;

        /**
         * 成员所属部门的节点ID。可以调用DescribeOrganizationNodes获取
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 账号名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 备注。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 成员创建记录ID。创建异常重试时需要
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 代付者Uin。成员代付费时需要
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * 成员访问身份ID列表。可以调用ListOrganizationIdentity获取，1默认支持
         * @type {Array.<number> || null}
         */
        this.IdentityRoleID = null;

        /**
         * 认证主体关系ID。给不同主体创建成员时需要，可以调用DescribeOrganizationAuthNode获取
         * @type {number || null}
         */
        this.AuthRelationId = null;

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
        this.AuthRelationId = 'AuthRelationId' in params ? params.AuthRelationId : null;

    }
}

/**
 * 组织身份
 * @class
 */
class OrgIdentity extends  AbstractModel {
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

        /**
         * 描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 身份策略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IdentityPolicy> || null}
         */
        this.IdentityPolicy = null;

        /**
         * 身份类型。 1-预设、 2-自定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IdentityType = null;

        /**
         * 更新时间。
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
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityAliasName = 'IdentityAliasName' in params ? params.IdentityAliasName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.IdentityPolicy) {
            this.IdentityPolicy = new Array();
            for (let z in params.IdentityPolicy) {
                let obj = new IdentityPolicy();
                obj.deserialize(params.IdentityPolicy[z]);
                this.IdentityPolicy.push(obj);
            }
        }
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目。最大50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 国际站：en，国内站：zh
         * @type {string || null}
         */
        this.Lang = null;

        /**
         * 成员名称或者成员ID搜索。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 主体名称搜索。
         * @type {string || null}
         */
        this.AuthName = null;

        /**
         * 可信服务产品简称。可信服务管理员查询时必须指定
         * @type {string || null}
         */
        this.Product = null;

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
        this.AuthName = 'AuthName' in params ? params.AuthName : null;
        this.Product = 'Product' in params ? params.Product : null;

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
 * UpdateOrganizationNode请求参数结构体
 * @class
 */
class UpdateOrganizationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID。
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]-
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注。
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
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 企业组织单元
 * @class
 */
class OrgNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织节点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 父节点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ParentNodeId = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

module.exports = {
    DescribeOrganizationAuthNodeResponse: DescribeOrganizationAuthNodeResponse,
    OrgPermission: OrgPermission,
    BindOrganizationMemberAuthAccountRequest: BindOrganizationMemberAuthAccountRequest,
    DeleteOrganizationMembersResponse: DeleteOrganizationMembersResponse,
    OrgMember: OrgMember,
    DescribeOrganizationMemberAuthIdentitiesRequest: DescribeOrganizationMemberAuthIdentitiesRequest,
    CreateOrganizationMemberPolicyRequest: CreateOrganizationMemberPolicyRequest,
    DescribeOrganizationRequest: DescribeOrganizationRequest,
    DescribeOrganizationNodesRequest: DescribeOrganizationNodesRequest,
    BindOrganizationMemberAuthAccountResponse: BindOrganizationMemberAuthAccountResponse,
    CreateOrganizationMemberResponse: CreateOrganizationMemberResponse,
    MoveOrganizationNodeMembersRequest: MoveOrganizationNodeMembersRequest,
    ListOrganizationIdentityRequest: ListOrganizationIdentityRequest,
    AuthNode: AuthNode,
    MoveOrganizationNodeMembersResponse: MoveOrganizationNodeMembersResponse,
    DeleteOrganizationMembersRequest: DeleteOrganizationMembersRequest,
    DescribeOrganizationMemberPoliciesResponse: DescribeOrganizationMemberPoliciesResponse,
    DeleteOrganizationNodesRequest: DeleteOrganizationNodesRequest,
    AddOrganizationNodeResponse: AddOrganizationNodeResponse,
    IdentityPolicy: IdentityPolicy,
    ListOrganizationIdentityResponse: ListOrganizationIdentityResponse,
    DescribeOrganizationNodesResponse: DescribeOrganizationNodesResponse,
    DescribeOrganizationMembersResponse: DescribeOrganizationMembersResponse,
    CreateOrganizationMemberPolicyResponse: CreateOrganizationMemberPolicyResponse,
    CancelOrganizationMemberAuthAccountResponse: CancelOrganizationMemberAuthAccountResponse,
    DescribeOrganizationResponse: DescribeOrganizationResponse,
    DescribeOrganizationMemberPoliciesRequest: DescribeOrganizationMemberPoliciesRequest,
    AddOrganizationNodeRequest: AddOrganizationNodeRequest,
    DescribeOrganizationMemberAuthIdentitiesResponse: DescribeOrganizationMemberAuthIdentitiesResponse,
    OrgMemberPolicy: OrgMemberPolicy,
    DescribeOrganizationAuthNodeRequest: DescribeOrganizationAuthNodeRequest,
    UpdateOrganizationNodeResponse: UpdateOrganizationNodeResponse,
    DescribeOrganizationMemberAuthAccountsRequest: DescribeOrganizationMemberAuthAccountsRequest,
    CancelOrganizationMemberAuthAccountRequest: CancelOrganizationMemberAuthAccountRequest,
    DeleteOrganizationNodesResponse: DeleteOrganizationNodesResponse,
    DescribeOrganizationMemberAuthAccountsResponse: DescribeOrganizationMemberAuthAccountsResponse,
    OrgMemberAuthAccount: OrgMemberAuthAccount,
    OrgMemberAuthIdentity: OrgMemberAuthIdentity,
    MemberMainInfo: MemberMainInfo,
    CreateOrganizationMemberRequest: CreateOrganizationMemberRequest,
    OrgIdentity: OrgIdentity,
    DescribeOrganizationMembersRequest: DescribeOrganizationMembersRequest,
    MemberIdentity: MemberIdentity,
    UpdateOrganizationNodeRequest: UpdateOrganizationNodeRequest,
    OrgNode: OrgNode,

}
