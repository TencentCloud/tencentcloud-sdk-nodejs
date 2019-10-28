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
 * MoveOrganizationMembersToNode请求参数结构体
 * @class
 */
class MoveOrganizationMembersToNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织单元ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 成员UIN列表
         * @type {Array.<number> || null}
         */
        this.Uins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Uins = 'Uins' in params ? params.Uins : null;

    }
}

/**
 * GetOrganization请求参数结构体
 * @class
 */
class GetOrganizationRequest extends  AbstractModel {
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
 * ListOrganizationMembers请求参数结构体
 * @class
 */
class ListOrganizationMembersRequest extends  AbstractModel {
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
 * DeleteOrganizationMemberFromNode请求参数结构体
 * @class
 */
class DeleteOrganizationMemberFromNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被删除成员UIN
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * 组织单元ID
         * @type {number || null}
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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

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
         * UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 加入时间
         * @type {string || null}
         */
        this.JoinTime = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;

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
 * GetOrganizationMember返回参数结构体
 * @class
 */
class GetOrganizationMemberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织成员UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 组织成员名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 加入时间
         * @type {string || null}
         */
        this.JoinTime = null;

        /**
         * 组织单元ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 组织单元名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 父组织单元ID
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOrganization请求参数结构体
 * @class
 */
class CreateOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织类型（目前固定为1）
         * @type {number || null}
         */
        this.OrgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgType = 'OrgType' in params ? params.OrgType : null;

    }
}

/**
 * DeleteOrganization请求参数结构体
 * @class
 */
class DeleteOrganizationRequest extends  AbstractModel {
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
 * QuitOrganization返回参数结构体
 * @class
 */
class QuitOrganizationResponse extends  AbstractModel {
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
 * UpdateOrganizationMember返回参数结构体
 * @class
 */
class UpdateOrganizationMemberResponse extends  AbstractModel {
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
         * 被删除成员的UIN列表
         * @type {Array.<number> || null}
         */
        this.Uins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uins = 'Uins' in params ? params.Uins : null;

    }
}

/**
 * CreateOrganization返回参数结构体
 * @class
 */
class CreateOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业组织ID
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * 创建者昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 创建者邮箱
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 组织类型
         * @type {number || null}
         */
        this.OrgType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
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
         * 组织单元ID列表
         * @type {Array.<number> || null}
         */
        this.NodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeIds = 'NodeIds' in params ? params.NodeIds : null;

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
         * 组织单元ID
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
 * ListOrganizationInvitations返回参数结构体
 * @class
 */
class ListOrganizationInvitationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邀请信息列表
         * @type {Array.<OrgInvitation> || null}
         */
        this.Invitations = null;

        /**
         * 总数目
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

        if (params.Invitations) {
            this.Invitations = new Array();
            for (let z in params.Invitations) {
                let obj = new OrgInvitation();
                obj.deserialize(params.Invitations[z]);
                this.Invitations.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptOrganizationInvitation请求参数结构体
 * @class
 */
class AcceptOrganizationInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邀请ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ListOrganizationNodeMembers返回参数结构体
 * @class
 */
class ListOrganizationNodeMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数目
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 成员列表
         * @type {Array.<OrgMember> || null}
         */
        this.Members = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new OrgMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetOrganizationMember请求参数结构体
 * @class
 */
class GetOrganizationMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织成员UIN
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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * DenyOrganizationInvitation返回参数结构体
 * @class
 */
class DenyOrganizationInvitationResponse extends  AbstractModel {
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
 * SendOrganizationInvitation返回参数结构体
 * @class
 */
class SendOrganizationInvitationResponse extends  AbstractModel {
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
 * 企业组织邀请
 * @class
 */
class OrgInvitation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邀请ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 被邀请UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 创建者UIN
         * @type {number || null}
         */
        this.HostUin = null;

        /**
         * 创建者名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 创建者邮箱
         * @type {string || null}
         */
        this.HostMail = null;

        /**
         * 邀请状态。-1：已过期，0：正常，1：已接受，2：已失效，3：已取消
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 企业组织类型
         * @type {number || null}
         */
        this.OrgType = null;

        /**
         * 邀请时间
         * @type {string || null}
         */
        this.InviteTime = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.HostUin = 'HostUin' in params ? params.HostUin : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostMail = 'HostMail' in params ? params.HostMail : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.InviteTime = 'InviteTime' in params ? params.InviteTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * UpdateOrganizationMember请求参数结构体
 * @class
 */
class UpdateOrganizationMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成员UIN
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * QuitOrganization请求参数结构体
 * @class
 */
class QuitOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业组织ID
         * @type {number || null}
         */
        this.OrgId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgId = 'OrgId' in params ? params.OrgId : null;

    }
}

/**
 * ListOrganizationInvitations请求参数结构体
 * @class
 */
class ListOrganizationInvitationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否被邀请。1：被邀请，0：发出的邀请
         * @type {number || null}
         */
        this.Invited = null;

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
        this.Invited = 'Invited' in params ? params.Invited : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * 父组织单元ID
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * 组织单元名字
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
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ListOrganizationNodeMembers请求参数结构体
 * @class
 */
class ListOrganizationNodeMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业组织单元ID
         * @type {number || null}
         */
        this.NodeId = null;

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
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * 企业组织单元ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 父单元ID
         * @type {number || null}
         */
        this.ParentNodeId = null;

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

    }
}

/**
 * CancelOrganizationInvitation请求参数结构体
 * @class
 */
class CancelOrganizationInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邀请ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteOrganizationMemberFromNode返回参数结构体
 * @class
 */
class DeleteOrganizationMemberFromNodeResponse extends  AbstractModel {
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
 * DenyOrganizationInvitation请求参数结构体
 * @class
 */
class DenyOrganizationInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 邀请ID
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
        this.Id = 'Id' in params ? params.Id : null;

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
 * DeleteOrganization返回参数结构体
 * @class
 */
class DeleteOrganizationResponse extends  AbstractModel {
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
 * CancelOrganizationInvitation返回参数结构体
 * @class
 */
class CancelOrganizationInvitationResponse extends  AbstractModel {
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
 * AcceptOrganizationInvitation返回参数结构体
 * @class
 */
class AcceptOrganizationInvitationResponse extends  AbstractModel {
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
 * ListOrganizationNodes请求参数结构体
 * @class
 */
class ListOrganizationNodesRequest extends  AbstractModel {
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
 * SendOrganizationInvitation请求参数结构体
 * @class
 */
class SendOrganizationInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被邀请账户UIN
         * @type {number || null}
         */
        this.InviteUin = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
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
        this.InviteUin = 'InviteUin' in params ? params.InviteUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

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
 * GetOrganization返回参数结构体
 * @class
 */
class GetOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业组织ID
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * 创建者UIN
         * @type {number || null}
         */
        this.HostUin = null;

        /**
         * 创建者昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 创建者邮箱
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 企业组织类型
         * @type {number || null}
         */
        this.OrgType = null;

        /**
         * 是否为空
         * @type {number || null}
         */
        this.IsEmpty = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.IsEmpty = 'IsEmpty' in params ? params.IsEmpty : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationMembers返回参数结构体
 * @class
 */
class ListOrganizationMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成员列表
         * @type {Array.<OrgMember> || null}
         */
        this.Members = null;

        /**
         * 总数目
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

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new OrgMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationNodes返回参数结构体
 * @class
 */
class ListOrganizationNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业组织单元列表
         * @type {Array.<OrgNode> || null}
         */
        this.Nodes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new OrgNode();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MoveOrganizationMembersToNode返回参数结构体
 * @class
 */
class MoveOrganizationMembersToNodeResponse extends  AbstractModel {
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
 * 企业组织单元
 * @class
 */
class OrgNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织单元ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 父单元ID
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * 成员数量
         * @type {number || null}
         */
        this.MemberCount = null;

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
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;

    }
}

module.exports = {
    MoveOrganizationMembersToNodeRequest: MoveOrganizationMembersToNodeRequest,
    GetOrganizationRequest: GetOrganizationRequest,
    ListOrganizationMembersRequest: ListOrganizationMembersRequest,
    DeleteOrganizationMemberFromNodeRequest: DeleteOrganizationMemberFromNodeRequest,
    OrgMember: OrgMember,
    UpdateOrganizationNodeResponse: UpdateOrganizationNodeResponse,
    GetOrganizationMemberResponse: GetOrganizationMemberResponse,
    CreateOrganizationRequest: CreateOrganizationRequest,
    DeleteOrganizationRequest: DeleteOrganizationRequest,
    QuitOrganizationResponse: QuitOrganizationResponse,
    UpdateOrganizationMemberResponse: UpdateOrganizationMemberResponse,
    DeleteOrganizationMembersRequest: DeleteOrganizationMembersRequest,
    CreateOrganizationResponse: CreateOrganizationResponse,
    DeleteOrganizationNodesRequest: DeleteOrganizationNodesRequest,
    AddOrganizationNodeResponse: AddOrganizationNodeResponse,
    ListOrganizationInvitationsResponse: ListOrganizationInvitationsResponse,
    AcceptOrganizationInvitationRequest: AcceptOrganizationInvitationRequest,
    ListOrganizationNodeMembersResponse: ListOrganizationNodeMembersResponse,
    GetOrganizationMemberRequest: GetOrganizationMemberRequest,
    DenyOrganizationInvitationResponse: DenyOrganizationInvitationResponse,
    SendOrganizationInvitationResponse: SendOrganizationInvitationResponse,
    OrgInvitation: OrgInvitation,
    UpdateOrganizationMemberRequest: UpdateOrganizationMemberRequest,
    QuitOrganizationRequest: QuitOrganizationRequest,
    ListOrganizationInvitationsRequest: ListOrganizationInvitationsRequest,
    AddOrganizationNodeRequest: AddOrganizationNodeRequest,
    ListOrganizationNodeMembersRequest: ListOrganizationNodeMembersRequest,
    UpdateOrganizationNodeRequest: UpdateOrganizationNodeRequest,
    CancelOrganizationInvitationRequest: CancelOrganizationInvitationRequest,
    DeleteOrganizationMemberFromNodeResponse: DeleteOrganizationMemberFromNodeResponse,
    DenyOrganizationInvitationRequest: DenyOrganizationInvitationRequest,
    DeleteOrganizationNodesResponse: DeleteOrganizationNodesResponse,
    DeleteOrganizationResponse: DeleteOrganizationResponse,
    CancelOrganizationInvitationResponse: CancelOrganizationInvitationResponse,
    AcceptOrganizationInvitationResponse: AcceptOrganizationInvitationResponse,
    ListOrganizationNodesRequest: ListOrganizationNodesRequest,
    SendOrganizationInvitationRequest: SendOrganizationInvitationRequest,
    DeleteOrganizationMembersResponse: DeleteOrganizationMembersResponse,
    GetOrganizationResponse: GetOrganizationResponse,
    ListOrganizationMembersResponse: ListOrganizationMembersResponse,
    ListOrganizationNodesResponse: ListOrganizationNodesResponse,
    MoveOrganizationMembersToNodeResponse: MoveOrganizationMembersToNodeResponse,
    OrgNode: OrgNode,

}
