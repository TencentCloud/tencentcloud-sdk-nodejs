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
         * 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大写小字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大写小字母、数字和特殊字符。
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
         * 子用户 UID
         * @type {number || null}
         */
        this.Uid = null;

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
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

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
 * AddUserToGroup请求参数结构体
 * @class
 */
class AddUserToGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加的子用户 UID 和用户组 ID 关联关系
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
 * CreatePolicy返回参数结构体
 * @class
 */
class CreatePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增策略id
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
 * ListAttachedGroupPolicies请求参数结构体
 * @class
 */
class ListAttachedGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组 id
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大写小字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大写小字母、数字和特殊字符。
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
 * UpdatePolicy返回参数结构体
 * @class
 */
class UpdatePolicyResponse extends  AbstractModel {
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
 * UpdatePolicy请求参数结构体
 * @class
 */
class UpdatePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略 id
         * @type {number || null}
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
         * 策略文档
         * @type {string || null}
         */
        this.PolicyDocument = null;

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
         * 策略文档
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
 * RemoveUserFromGroup请求参数结构体
 * @class
 */
class RemoveUserFromGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的用户 UID和用户组 ID对应数组
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
         * 是否已验证手机。
         * @type {number || null}
         */
        this.PhoneFlag = null;

        /**
         * 邮箱地址。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 是否已验证邮箱。
         * @type {number || null}
         */
        this.EmailFlag = null;

        /**
         * 用户类型。
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否为主消息接收人。
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
    UpdateUserRequest: UpdateUserRequest,
    UpdateGroupRequest: UpdateGroupRequest,
    ListPoliciesResponse: ListPoliciesResponse,
    StrategyInfo: StrategyInfo,
    CreateSAMLProviderRequest: CreateSAMLProviderRequest,
    DeleteSAMLProviderRequest: DeleteSAMLProviderRequest,
    AttachPolicyInfo: AttachPolicyInfo,
    GroupIdOfUidInfo: GroupIdOfUidInfo,
    GetSAMLProviderResponse: GetSAMLProviderResponse,
    DeleteUserRequest: DeleteUserRequest,
    DetachGroupPolicyRequest: DetachGroupPolicyRequest,
    GroupInfo: GroupInfo,
    ListSAMLProvidersResponse: ListSAMLProvidersResponse,
    AttachUserPolicyRequest: AttachUserPolicyRequest,
    GetPolicyRequest: GetPolicyRequest,
    DeleteUserResponse: DeleteUserResponse,
    AddUserToGroupRequest: AddUserToGroupRequest,
    RemoveUserFromGroupResponse: RemoveUserFromGroupResponse,
    ListUsersForGroupResponse: ListUsersForGroupResponse,
    AttachGroupPolicyResponse: AttachGroupPolicyResponse,
    UpdateGroupResponse: UpdateGroupResponse,
    DeleteSAMLProviderResponse: DeleteSAMLProviderResponse,
    DeleteGroupRequest: DeleteGroupRequest,
    GetUserResponse: GetUserResponse,
    DetachUserPolicyRequest: DetachUserPolicyRequest,
    CreatePolicyResponse: CreatePolicyResponse,
    GetSAMLProviderRequest: GetSAMLProviderRequest,
    DetachUserPolicyResponse: DetachUserPolicyResponse,
    GetGroupResponse: GetGroupResponse,
    ListAttachedGroupPoliciesRequest: ListAttachedGroupPoliciesRequest,
    ListAttachedGroupPoliciesResponse: ListAttachedGroupPoliciesResponse,
    CreateGroupRequest: CreateGroupRequest,
    ListEntitiesForPolicyRequest: ListEntitiesForPolicyRequest,
    ListUsersResponse: ListUsersResponse,
    DeletePolicyRequest: DeletePolicyRequest,
    AttachGroupPolicyRequest: AttachGroupPolicyRequest,
    GetPolicyResponse: GetPolicyResponse,
    DeleteGroupResponse: DeleteGroupResponse,
    AddUserRequest: AddUserRequest,
    DeletePolicyResponse: DeletePolicyResponse,
    UpdateUserResponse: UpdateUserResponse,
    AttachEntityOfPolicy: AttachEntityOfPolicy,
    ListGroupsResponse: ListGroupsResponse,
    ListUsersRequest: ListUsersRequest,
    ListUsersForGroupRequest: ListUsersForGroupRequest,
    ListAttachedUserPoliciesResponse: ListAttachedUserPoliciesResponse,
    CreateSAMLProviderResponse: CreateSAMLProviderResponse,
    UpdatePolicyResponse: UpdatePolicyResponse,
    AddUserResponse: AddUserResponse,
    GetUserRequest: GetUserRequest,
    GetGroupRequest: GetGroupRequest,
    ListEntitiesForPolicyResponse: ListEntitiesForPolicyResponse,
    SubAccountInfo: SubAccountInfo,
    AddUserToGroupResponse: AddUserToGroupResponse,
    SAMLProviderInfo: SAMLProviderInfo,
    UpdatePolicyRequest: UpdatePolicyRequest,
    ListPoliciesRequest: ListPoliciesRequest,
    AttachUserPolicyResponse: AttachUserPolicyResponse,
    ListSAMLProvidersRequest: ListSAMLProvidersRequest,
    ListGroupsForUserRequest: ListGroupsForUserRequest,
    DetachGroupPolicyResponse: DetachGroupPolicyResponse,
    ListGroupsRequest: ListGroupsRequest,
    CreatePolicyRequest: CreatePolicyRequest,
    UpdateSAMLProviderRequest: UpdateSAMLProviderRequest,
    UpdateSAMLProviderResponse: UpdateSAMLProviderResponse,
    ListGroupsForUserResponse: ListGroupsForUserResponse,
    ListAttachedUserPoliciesRequest: ListAttachedUserPoliciesRequest,
    RemoveUserFromGroupRequest: RemoveUserFromGroupRequest,
    GroupMemberInfo: GroupMemberInfo,
    CreateGroupResponse: CreateGroupResponse,

}
